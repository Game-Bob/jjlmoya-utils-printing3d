export type PricingMode = 'margin' | 'markup';

export interface MasterPricingParams {
  manufacturingCost: number;
  targetMargin: number;
  targetMarkup: number;
  competitorPrice: number;
  mode: PricingMode;
  conversionFactor: number;
}

export interface MasterPricingResult {
  pvpByMargin: number;
  pvpByMarkup: number;
  recommendedPvp: number;
  netProfit: number;
  realMargin: number;
  realMarkup: number;
  competitorDelta: number;
  competitorDeltaPercent: number;
  isAboveMarket: boolean;
  validatedMargin: number;
  effectiveCost: number;
  effectiveCompetitorPrice: number;
}

const safeNonNegative = (value: number) => (Number.isFinite(value) ? Math.max(value, 0) : 0);

const safeFactor = (value: number) => (Number.isFinite(value) && value > 0 ? value : 1);

const clampMargin = (value: number) => {
  if (!Number.isFinite(value)) return 0;
  return Math.min(Math.max(value, 0), 99.99);
};

export const calculateMasterPricing = (params: MasterPricingParams): MasterPricingResult => {
  const conversionFactor = safeFactor(params.conversionFactor);
  const effectiveCost = safeNonNegative(params.manufacturingCost) * conversionFactor;
  const effectiveCompetitorPrice = safeNonNegative(params.competitorPrice) * conversionFactor;
  const validatedMargin = clampMargin(params.targetMargin);
  const targetMarkup = safeNonNegative(params.targetMarkup);

  const pvpByMargin = effectiveCost / (1 - validatedMargin / 100);
  const pvpByMarkup = effectiveCost * (1 + targetMarkup / 100);
  const recommendedPvp = params.mode === 'markup' ? pvpByMarkup : pvpByMargin;
  const netProfit = recommendedPvp - effectiveCost;
  const realMargin = recommendedPvp > 0 ? (netProfit / recommendedPvp) * 100 : 0;
  const realMarkup = effectiveCost > 0 ? (netProfit / effectiveCost) * 100 : 0;
  const competitorDelta = recommendedPvp - effectiveCompetitorPrice;
  const competitorDeltaPercent = effectiveCompetitorPrice > 0 ? (competitorDelta / effectiveCompetitorPrice) * 100 : 0;

  return {
    pvpByMargin,
    pvpByMarkup,
    recommendedPvp,
    netProfit,
    realMargin,
    realMarkup,
    competitorDelta,
    competitorDeltaPercent,
    isAboveMarket: effectiveCompetitorPrice > 0 && recommendedPvp > effectiveCompetitorPrice,
    validatedMargin,
    effectiveCost,
    effectiveCompetitorPrice,
  };
};
