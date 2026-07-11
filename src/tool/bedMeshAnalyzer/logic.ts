export type LevelingPointCount = 3 | 4;

export interface BedMeshAnalyzerParams {
  rawText: string;
  levelingPoints: LevelingPointCount;
  screwPitchMm: number;
}

export interface MeshPoint {
  row: number;
  col: number;
  z: number;
}

export interface CornerSummary {
  key: 'frontLeft' | 'frontRight' | 'rearLeft' | 'rearRight' | 'rearCenter';
  labelKey: 'frontLeft' | 'frontRight' | 'rearLeft' | 'rearRight' | 'rearCenter';
  z: number;
  deltaMm: number;
  rotationDeg: number;
  turnFraction: string;
  direction: 'clockwise' | 'counterClockwise' | 'none';
}

export interface BedMeshAnalyzerResult {
  ok: boolean;
  errors: string[];
  rows: number;
  cols: number;
  values: number[][];
  points: MeshPoint[];
  min: number;
  max: number;
  range: number;
  mean: number;
  center: number;
  flatnessHealth: number;
  diagnosisKey: 'flat' | 'frontHigh' | 'rearHigh' | 'leftHigh' | 'rightHigh' | 'twisted' | 'concave' | 'convex' | 'warped' | 'incomplete';
  corners: CornerSummary[];
}

const NUMBER_PATTERN = /[-+]?(?:\d+\.\d+|\.\d+|\d+)(?:[eE][-+]?\d+)?/g;

const round3 = (value: number) => Math.round(value * 1000) / 1000;
const round1 = (value: number) => Math.round(value * 10) / 10;
const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export const parseBedMesh = (rawText: string): number[][] => {
  const rows = rawText
    .split(/\r?\n/)
    .map((line) => (line.match(NUMBER_PATTERN) || []).map(Number).filter(Number.isFinite))
    .filter((row) => row.length > 0);

  if (rows.length >= 2) {
    const mostCommonWidth = rows
      .map((row) => row.length)
      .sort((a, b) => rows.filter((row) => row.length === b).length - rows.filter((row) => row.length === a).length)[0];
    const matrixRows = rows.filter((row) => row.length === mostCommonWidth);
    if (matrixRows.length >= 2 && mostCommonWidth >= 2) return matrixRows;
  }

  const numbers = (rawText.match(NUMBER_PATTERN) || []).map(Number).filter(Number.isFinite);
  const size = Math.sqrt(numbers.length);
  if (Number.isInteger(size) && size >= 2) {
    return Array.from({ length: size }, (_, row) => numbers.slice(row * size, row * size + size));
  }

  return [];
};

const average = (values: number[]) => values.reduce((sum, value) => sum + value, 0) / values.length;
const meshPoints = (values: number[][]) => values.flatMap((row, rowIndex) => row.map((z, colIndex) => ({ row: rowIndex, col: colIndex, z })));

const fractionLabel = (degrees: number) => {
  const turns = Math.abs(degrees) / 360;
  if (turns < 0.04) return 'fine tune';
  if (turns < 0.19) return '1/8 turn';
  if (turns < 0.38) return '1/4 turn';
  if (turns < 0.63) return '1/2 turn';
  return `${round1(turns)} turns`;
};

const cornerValue = (values: number[][], row: number, col: number) => values[row]?.[col] ?? 0;

const cornerDirection = (deltaMm: number): CornerSummary['direction'] => {
  if (Math.abs(deltaMm) < 0.015) return 'none';
  return deltaMm > 0 ? 'counterClockwise' : 'clockwise';
};

const rawCornerPositions = (values: number[][], levelingPoints: LevelingPointCount) => {
  const rows = values.length;
  const cols = values[0]?.length || 0;
  if (levelingPoints === 3) {
    return [
      { key: 'frontLeft' as const, row: 0, col: 0 },
      { key: 'frontRight' as const, row: 0, col: cols - 1 },
      { key: 'rearCenter' as const, row: rows - 1, col: Math.floor((cols - 1) / 2) },
    ];
  }
  return [
    { key: 'frontLeft' as const, row: 0, col: 0 },
    { key: 'frontRight' as const, row: 0, col: cols - 1 },
    { key: 'rearLeft' as const, row: rows - 1, col: 0 },
    { key: 'rearRight' as const, row: rows - 1, col: cols - 1 },
  ];
};

const buildCorners = (values: number[][], levelingPoints: LevelingPointCount, screwPitchMm: number): CornerSummary[] => {
  const rawCorners = rawCornerPositions(values, levelingPoints);
  const meanCorner = average(rawCorners.map((corner) => cornerValue(values, corner.row, corner.col)));

  return rawCorners.map((corner) => {
    const z = cornerValue(values, corner.row, corner.col);
    const deltaMm = round3(meanCorner - z);
    const rotationDeg = screwPitchMm > 0 ? round1((deltaMm * 360) / screwPitchMm) : 0;
    return {
      key: corner.key,
      labelKey: corner.key,
      z: round3(z),
      deltaMm,
      rotationDeg,
      turnFraction: fractionLabel(rotationDeg),
      direction: cornerDirection(deltaMm),
    };
  });
};

const diagnose = (values: number[][], range: number): BedMeshAnalyzerResult['diagnosisKey'] => {
  if (range > 0.5) return 'warped';
  if (range < 0.08) return 'flat';

  const rows = values.length;
  const cols = values[0]?.length || 0;
  const front = average(values[0]);
  const rear = average(values[rows - 1]);
  const left = average(values.map((row) => row[0]));
  const right = average(values.map((row) => row[cols - 1]));
  const corners = [values[0][0], values[0][cols - 1], values[rows - 1][0], values[rows - 1][cols - 1]];
  const innerValues = values.slice(1, -1).flat();
  const centerBand = average(innerValues.length ? innerValues : values.flat());
  const cornerAvg = average(corners);
  const diagonalDelta = Math.abs((values[0][0] + values[rows - 1][cols - 1]) - (values[0][cols - 1] + values[rows - 1][0]));
  const rules: Array<[boolean, BedMeshAnalyzerResult['diagnosisKey']]> = [
    [diagonalDelta > 0.18, 'twisted'],
    [centerBand < cornerAvg - 0.08, 'concave'],
    [centerBand > cornerAvg + 0.08, 'convex'],
    [front > rear + 0.08, 'frontHigh'],
    [rear > front + 0.08, 'rearHigh'],
    [left > right + 0.08, 'leftHigh'],
    [right > left + 0.08, 'rightHigh'],
  ];
  return rules.find(([matches]) => matches)?.[1] || 'twisted';
};

const invalidResult = (values: number[][], errors: string[]): BedMeshAnalyzerResult => ({
  ok: false,
  errors,
  rows: values.length,
  cols: values[0]?.length || 0,
  values,
  points: [],
  min: 0,
  max: 0,
  range: 0,
  mean: 0,
  center: 0,
  flatnessHealth: 0,
  diagnosisKey: 'incomplete',
  corners: [],
});

const validationErrors = (values: number[][], screwPitchMm: number) => {
  const errors: string[] = [];
  const cols = values[0]?.length || 0;
  if (values.length < 2 || cols < 2) errors.push('notEnoughNumbers');
  if (values.some((row) => row.length !== cols)) errors.push('raggedRows');
  if (screwPitchMm <= 0) errors.push('badPitch');
  return errors;
};

export const analyzeBedMesh = (params: BedMeshAnalyzerParams): BedMeshAnalyzerResult => {
  const values = parseBedMesh(params.rawText);
  const errors = validationErrors(values, params.screwPitchMm);
  if (errors.length) return invalidResult(values, errors);
  const rows = values.length;
  const cols = values[0]?.length || 0;
  const flat = values.flat();
  const min = Math.min(...flat);
  const max = Math.max(...flat);
  const range = round3(Math.abs(max - min));
  const mean = round3(average(flat));
  const center = round3(values[Math.floor(rows / 2)][Math.floor(cols / 2)]);
  const flatnessHealth = Math.round(clamp(100 - (range / 0.5) * 100, 0, 100));

  return {
    ok: true,
    errors,
    rows,
    cols,
    values,
    points: meshPoints(values),
    min: round3(min),
    max: round3(max),
    range,
    mean,
    center,
    flatnessHealth,
    diagnosisKey: diagnose(values, range),
    corners: buildCorners(values, params.levelingPoints, params.screwPitchMm),
  };
};
