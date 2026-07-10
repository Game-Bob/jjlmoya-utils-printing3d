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

export const calculatePrintTimeScenario = (params: PrintTimeScenarioParams): PrintTimeScenarioResult => {
  const modelHeightMm = positive(params.modelHeightMm, 1);
  const estimatedVolumeCm3 = positive(params.estimatedVolumeCm3, 1);
  const layerHeightMm = positive(params.layerHeightMm, 0.2);
  const speedMmS = positive(params.speedMmS, 50);
  const lineWidthMm = positive(params.lineWidthMm, 0.42);
  const infillPercent = clamp(params.infillPercent, 0, 100);
  const overheadCoefficient = COMPLEXITY_COEFFICIENTS[params.complexity] ?? COMPLEXITY_COEFFICIENTS.medium;
  const travelMultiplier = PIECE_TYPE_TRAVEL_MULTIPLIERS[params.pieceType] ?? PIECE_TYPE_TRAVEL_MULTIPLIERS.solid;
  const density = MATERIAL_DENSITIES[params.material] ?? MATERIAL_DENSITIES.pla;

  const layers = Math.max(Math.ceil(modelHeightMm / layerHeightMm), 1);
  const shellShare = 0.28;
  const correctedVolumeCm3 = estimatedVolumeCm3 * (shellShare + (1 - shellShare) * (infillPercent / 100));
  const correctedVolumeMm3 = correctedVolumeCm3 * 1000;
  const extrusionRateMm3S = speedMmS * lineWidthMm * layerHeightMm;
  const baseSeconds = correctedVolumeMm3 / extrusionRateMm3S;
  const extrusionSeconds = baseSeconds * overheadCoefficient;
  const retractionSeconds = layers * RETRACTION_SECONDS_PER_LAYER;
  const accelerationTravelShare = baseSeconds * (overheadCoefficient - 1) * travelMultiplier;
  const totalSeconds = baseSeconds + accelerationTravelShare + retractionSeconds;
  const slowerSpeed = speedMmS * 0.9;
  const slowerTotalSeconds =
    correctedVolumeMm3 / (slowerSpeed * lineWidthMm * layerHeightMm) + accelerationTravelShare + retractionSeconds;

  return {
    layers,
    totalSeconds,
    extrusionSeconds,
    overheadSeconds: accelerationTravelShare,
    retractionSeconds,
    filamentGrams: correctedVolumeCm3 * density,
    filamentCost: (correctedVolumeCm3 * density * Math.max(params.filamentPricePerKg, 0)) / 1000,
    efficiencyScore: clamp((correctedVolumeMm3 / Math.max(totalSeconds, 1)) * (100 / STANDARD_SPEED_LIMIT_MM_S), 0, 100),
    slowerQualitySeconds: Math.max(slowerTotalSeconds - totalSeconds, 0),
    slowerQualityMinutes: Math.max(slowerTotalSeconds - totalSeconds, 0) / 60,
    qualityGainPercent: 8,
    volumetricFlowMm3S: extrusionRateMm3S,
    hardwareWarning: speedMmS > STANDARD_SPEED_LIMIT_MM_S,
    correctedVolumeCm3,
    overheadCoefficient,
  };
};
