export type InfillPattern =
  | 'lines'
  | 'grid'
  | 'triangles'
  | 'gyroid'
  | 'cubic'
  | 'honeycomb'
  | 'concentric';

export interface InfillWeightParams {
  fullWeightGrams: number;
  infillPercent: number;
  pattern: InfillPattern;
  spoolPrice: number;
  shellSharePercent: number;
  wastePercent: number;
}

export interface InfillPatternMeta {
  id: InfillPattern;
  label: string;
  multiplier: number;
}

export interface InfillWeightResult {
  estimatedWeightGrams: number;
  baselineWeightGrams: number;
  filamentSavedGrams: number;
  materialCost: number;
  baselineCost: number;
  savedCost: number;
  effectiveDensityPercent: number;
  patternMultiplier: number;
  shellWeightGrams: number;
  infillWeightGrams: number;
}

export const INFILL_PATTERNS: InfillPatternMeta[] = [
  { id: 'lines', label: 'Lines', multiplier: 0.92 },
  { id: 'grid', label: 'Grid', multiplier: 1 },
  { id: 'triangles', label: 'Triangles', multiplier: 1.08 },
  { id: 'gyroid', label: 'Gyroid', multiplier: 1.04 },
  { id: 'cubic', label: 'Cubic', multiplier: 1.1 },
  { id: 'honeycomb', label: 'Honeycomb', multiplier: 1.16 },
  { id: 'concentric', label: 'Concentric', multiplier: 0.88 },
];

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const getPatternMultiplier = (pattern: InfillPattern) =>
  INFILL_PATTERNS.find((item) => item.id === pattern)?.multiplier ?? 1;

export const calculateInfillWeight = (params: InfillWeightParams): InfillWeightResult => {
  const fullWeightGrams = Math.max(params.fullWeightGrams, 0);
  const infillPercent = clamp(params.infillPercent, 0, 100);
  const shellSharePercent = clamp(params.shellSharePercent, 0, 95);
  const wastePercent = clamp(params.wastePercent, 0, 100);
  const patternMultiplier = getPatternMultiplier(params.pattern);

  const shellShare = shellSharePercent / 100;
  const infillShare = 1 - shellShare;
  const adjustedInfillRatio = clamp((infillPercent / 100) * patternMultiplier, 0, 1);
  const effectiveDensityPercent = (shellShare + infillShare * adjustedInfillRatio) * 100;

  const netWeight = fullWeightGrams * (effectiveDensityPercent / 100);
  const estimatedWeightGrams = netWeight * (1 + wastePercent / 100);
  const baselineWeightGrams = fullWeightGrams * (1 + wastePercent / 100);
  const filamentSavedGrams = Math.max(baselineWeightGrams - estimatedWeightGrams, 0);
  const materialCost = (estimatedWeightGrams / 1000) * Math.max(params.spoolPrice, 0);
  const baselineCost = (baselineWeightGrams / 1000) * Math.max(params.spoolPrice, 0);

  return {
    estimatedWeightGrams,
    baselineWeightGrams,
    filamentSavedGrams,
    materialCost,
    baselineCost,
    savedCost: Math.max(baselineCost - materialCost, 0),
    effectiveDensityPercent,
    patternMultiplier,
    shellWeightGrams: fullWeightGrams * shellShare,
    infillWeightGrams: fullWeightGrams * infillShare * adjustedInfillRatio,
  };
};
