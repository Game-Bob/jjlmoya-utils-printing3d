export interface PostProcessingCostParams {
  supportMinutes: number;
  sandingMinutes: number;
  paintingMinutes: number;
  otherMinutes: number;
  hourlyRate: number;
  consumablesCost: number;
  conversionFactor: number;
}

export interface PostProcessingCostResult {
  supportCost: number;
  sandingCost: number;
  paintingCost: number;
  otherLaborCost: number;
  laborCost: number;
  consumablesCost: number;
  totalCost: number;
  totalMinutes: number;
  effectiveHourlyRate: number;
  shares: {
    support: number;
    sanding: number;
    painting: number;
    other: number;
    consumables: number;
  };
}

const safeNonNegative = (value: number) => (Number.isFinite(value) ? Math.max(value, 0) : 0);

const computeShares = ({
  supportCost,
  sandingCost,
  paintingCost,
  otherLaborCost,
  consumablesCost,
  totalCost,
}: Pick<PostProcessingCostResult, 'supportCost' | 'sandingCost' | 'paintingCost' | 'otherLaborCost' | 'consumablesCost' | 'totalCost'>) => {
  const share = (value: number) => (totalCost > 0 ? (value / totalCost) * 100 : 0);
  return {
    support: share(supportCost),
    sanding: share(sandingCost),
    painting: share(paintingCost),
    other: share(otherLaborCost),
    consumables: share(consumablesCost),
  };
};

export const calculatePostProcessingCost = (params: PostProcessingCostParams): PostProcessingCostResult => {
  const supportMinutes = safeNonNegative(params.supportMinutes);
  const sandingMinutes = safeNonNegative(params.sandingMinutes);
  const paintingMinutes = safeNonNegative(params.paintingMinutes);
  const otherMinutes = safeNonNegative(params.otherMinutes);
  const conversionFactor = Number.isFinite(params.conversionFactor) && params.conversionFactor > 0 ? params.conversionFactor : 1;
  const effectiveHourlyRate = safeNonNegative(params.hourlyRate) * conversionFactor;
  const consumablesCost = safeNonNegative(params.consumablesCost) * conversionFactor;
  const minuteRate = effectiveHourlyRate / 60;

  const supportCost = supportMinutes * minuteRate;
  const sandingCost = sandingMinutes * minuteRate;
  const paintingCost = paintingMinutes * minuteRate;
  const otherLaborCost = otherMinutes * minuteRate;
  const laborCost = supportCost + sandingCost + paintingCost + otherLaborCost;
  const totalCost = laborCost + consumablesCost;
  const totalMinutes = supportMinutes + sandingMinutes + paintingMinutes + otherMinutes;

  return {
    supportCost,
    sandingCost,
    paintingCost,
    otherLaborCost,
    laborCost,
    consumablesCost,
    totalCost,
    totalMinutes,
    effectiveHourlyRate,
    shares: computeShares({ supportCost, sandingCost, paintingCost, otherLaborCost, consumablesCost, totalCost }),
  };
};
