export type ResinComplexity = 'low' | 'medium' | 'high';
export type ResinModelUnit = 'ml' | 'g';

export interface ResinRealCostParams {
  bottlePrice: number;
  bottleVolumeMl: number;
  resinDensity: number;
  modelAmount: number;
  modelUnit: ResinModelUnit;
  complexity: ResinComplexity;
}

export interface ResinRealCostResult {
  costPerMl: number;
  modelVolumeMl: number;
  theoreticalCost: number;
  wasteFactor: number;
  correctedVolumeMl: number;
  realCost: number;
  wasteCost: number;
  usableBottlePrints: number;
}

export const RESIN_COMPLEXITY_FACTORS: Record<ResinComplexity, number> = {
  low: 0.1,
  medium: 0.125,
  high: 0.15,
};

export const gramsToMilliliters = (grams: number, density: number): number => {
  if (density <= 0) return 0;
  return grams / density;
};

export const millilitersToGrams = (milliliters: number, density: number): number => milliliters * density;

export const calculateResinRealCost = (params: ResinRealCostParams): ResinRealCostResult => {
  const bottlePrice = Math.max(0, params.bottlePrice);
  const bottleVolumeMl = Math.max(0, params.bottleVolumeMl);
  const resinDensity = Math.max(0, params.resinDensity);
  const modelAmount = Math.max(0, params.modelAmount);
  const costPerMl = bottleVolumeMl > 0 ? bottlePrice / bottleVolumeMl : 0;
  const modelVolumeMl = params.modelUnit === 'g'
    ? gramsToMilliliters(modelAmount, resinDensity)
    : modelAmount;
  const wasteFactor = RESIN_COMPLEXITY_FACTORS[params.complexity] ?? RESIN_COMPLEXITY_FACTORS.medium;
  const correctedVolumeMl = modelVolumeMl * (1 + wasteFactor);
  const theoreticalCost = modelVolumeMl * costPerMl;
  const realCost = correctedVolumeMl * costPerMl;
  const wasteCost = realCost - theoreticalCost;
  const usableBottlePrints = correctedVolumeMl > 0 ? bottleVolumeMl / correctedVolumeMl : 0;

  return {
    costPerMl,
    modelVolumeMl,
    theoreticalCost,
    wasteFactor,
    correctedVolumeMl,
    realCost,
    wasteCost,
    usableBottlePrints,
  };
};
