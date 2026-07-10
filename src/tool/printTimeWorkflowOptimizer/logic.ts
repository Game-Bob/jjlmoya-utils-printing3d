export type ModelComplexity = 'low' | 'medium' | 'high';
export type MaterialId = 'pla' | 'petg' | 'abs' | 'asa' | 'nylon' | 'tpu';
export type PieceType = 'solid' | 'hollow';

export interface PrintTimeScenarioParams {
  modelHeightMm: number;
  estimatedVolumeCm3: number;
  layerHeightMm: number;
  speedMmS: number;
  lineWidthMm: number;
  infillPercent: number;
  complexity: ModelComplexity;
  pieceType: PieceType;
  material: MaterialId;
  filamentPricePerKg: number;
}

export interface PrintTimeScenarioResult {
  layers: number;
  totalSeconds: number;
  extrusionSeconds: number;
  overheadSeconds: number;
  retractionSeconds: number;
  filamentGrams: number;
  filamentCost: number;
  efficiencyScore: number;
  slowerQualitySeconds: number;
  slowerQualityMinutes: number;
  qualityGainPercent: number;
  volumetricFlowMm3S: number;
  hardwareWarning: boolean;
  correctedVolumeCm3: number;
  overheadCoefficient: number;
}

export const COMPLEXITY_COEFFICIENTS: Record<ModelComplexity, number> = {
  low: 1.15,
  medium: 1.35,
  high: 1.6,
};

export const MATERIAL_DENSITIES: Record<MaterialId, number> = {
  pla: 1.24,
  petg: 1.27,
  abs: 1.04,
  asa: 1.07,
  nylon: 1.14,
  tpu: 1.21,
};

export const PIECE_TYPE_TRAVEL_MULTIPLIERS: Record<PieceType, number> = {
  solid: 1,
  hollow: 1.18,
};

const RETRACTION_SECONDS_PER_LAYER = 0.5;
const STANDARD_SPEED_LIMIT_MM_S = 100;

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const positive = (value: number, fallback: number) => {
  if (!Number.isFinite(value) || value <= 0) return fallback;
  return value;
};

interface CleanedParams extends PrintTimeScenarioParams {
  overheadCoefficient: number;
  travelMultiplier: number;
  density: number;
}

const cleanParams = (params: PrintTimeScenarioParams): CleanedParams => {
  return {
    ...params,
    modelHeightMm: positive(params.modelHeightMm, 1),
    estimatedVolumeCm3: positive(params.estimatedVolumeCm3, 1),
    layerHeightMm: positive(params.layerHeightMm, 0.2),
    speedMmS: positive(params.speedMmS, 50),
    lineWidthMm: positive(params.lineWidthMm, 0.42),
    infillPercent: clamp(params.infillPercent, 0, 100),
    overheadCoefficient: COMPLEXITY_COEFFICIENTS[params.complexity] ?? COMPLEXITY_COEFFICIENTS.medium,
    travelMultiplier: PIECE_TYPE_TRAVEL_MULTIPLIERS[params.pieceType] ?? PIECE_TYPE_TRAVEL_MULTIPLIERS.solid,
    density: MATERIAL_DENSITIES[params.material] ?? MATERIAL_DENSITIES.pla,
  };
};

interface CalcIntermediate {
  layers: number;
  correctedVolumeCm3: number;
  correctedVolumeMm3: number;
  extrusionRateMm3S: number;
  baseSeconds: number;
  retractionSeconds: number;
  accelerationTravelShare: number;
  totalSeconds: number;
  slowerQualitySeconds: number;
}

const computeIntermediate = (p: CleanedParams): CalcIntermediate => {
  const layers = Math.max(Math.ceil(p.modelHeightMm / p.layerHeightMm), 1);
  const shellShare = 0.28;
  const correctedVolumeCm3 = p.estimatedVolumeCm3 * (shellShare + (1 - shellShare) * (p.infillPercent / 100));
  const correctedVolumeMm3 = correctedVolumeCm3 * 1000;
  const extrusionRateMm3S = p.speedMmS * p.lineWidthMm * p.layerHeightMm;
  const baseSeconds = correctedVolumeMm3 / extrusionRateMm3S;
  const retractionSeconds = layers * RETRACTION_SECONDS_PER_LAYER;
  const accelerationTravelShare = baseSeconds * (p.overheadCoefficient - 1) * p.travelMultiplier;
  const totalSeconds = baseSeconds + accelerationTravelShare + retractionSeconds;
  const slowerSpeed = p.speedMmS * 0.9;
  const slowerTotalSeconds =
    correctedVolumeMm3 / (slowerSpeed * p.lineWidthMm * p.layerHeightMm) + accelerationTravelShare + retractionSeconds;
  return {
    layers,
    correctedVolumeCm3,
    correctedVolumeMm3,
    extrusionRateMm3S,
    baseSeconds,
    retractionSeconds,
    accelerationTravelShare,
    totalSeconds,
    slowerQualitySeconds: Math.max(slowerTotalSeconds - totalSeconds, 0),
  };
};

export const calculatePrintTimeScenario = (params: PrintTimeScenarioParams): PrintTimeScenarioResult => {
  const p = cleanParams(params);
  const i = computeIntermediate(p);

  return {
    layers: i.layers,
    totalSeconds: i.totalSeconds,
    extrusionSeconds: i.baseSeconds * p.overheadCoefficient,
    overheadSeconds: i.accelerationTravelShare,
    retractionSeconds: i.retractionSeconds,
    filamentGrams: i.correctedVolumeCm3 * p.density,
    filamentCost: (i.correctedVolumeCm3 * p.density * Math.max(p.filamentPricePerKg, 0)) / 1000,
    efficiencyScore: clamp((i.correctedVolumeMm3 / Math.max(i.totalSeconds, 1)) * (100 / STANDARD_SPEED_LIMIT_MM_S), 0, 100),
    slowerQualitySeconds: i.slowerQualitySeconds,
    slowerQualityMinutes: i.slowerQualitySeconds / 60,
    qualityGainPercent: 8,
    volumetricFlowMm3S: i.extrusionRateMm3S,
    hardwareWarning: p.speedMmS > STANDARD_SPEED_LIMIT_MM_S,
    correctedVolumeCm3: i.correctedVolumeCm3,
    overheadCoefficient: p.overheadCoefficient,
  };
};
