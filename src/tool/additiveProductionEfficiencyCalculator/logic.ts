export interface AdditiveProductionEfficiencyParams {
  pieces: number;
  unitPrintMinutes: number;
  preheatMinutes: number;
  transitionDistanceMm: number;
  travelSpeedMmS: number;
  failureRatePercent: number;
  purgeMinutes: number;
  criticalRiskPercent: number;
}

export interface AdditiveProductionEfficiencyResult {
  batchMinutes: number;
  sequentialMinutes: number;
  transitionMinutes: number;
  absoluteSavingsMinutes: number;
  relativeEfficiencyPercent: number;
  batchRiskPercent: number;
  recommendedStrategy: 'batch' | 'sequential';
  viabilityLabel: 'low' | 'moderate' | 'critical';
  batchIsFaster: boolean;
}

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const positive = (value: number, fallback: number) => {
  if (!Number.isFinite(value) || value <= 0) return fallback;
  return value;
};

const computeViabilityLabel = (batchRiskPercent: number, criticalRiskPercent: number, absoluteSavingsMinutes: number): 'low' | 'moderate' | 'critical' => {
  if (batchRiskPercent > criticalRiskPercent || absoluteSavingsMinutes < 0) return 'critical';
  if (batchRiskPercent > criticalRiskPercent * 0.6) return 'moderate';
  return 'low';
};

const n = (params: AdditiveProductionEfficiencyParams) => ({
  pieces: Math.max(Math.round(positive(params.pieces, 1)), 1),
  unitPrint: positive(params.unitPrintMinutes, 1),
  preheat: Math.max(params.preheatMinutes, 0),
  transitionDist: Math.max(params.transitionDistanceMm, 0),
  travelSpeed: positive(params.travelSpeedMmS, 1),
  failureRate: clamp(params.failureRatePercent, 0, 100) / 100,
  purge: Math.max(params.purgeMinutes, 0),
  criticalRisk: clamp(params.criticalRiskPercent, 0, 100),
});

export const calculateAdditiveProductionEfficiency = (
  params: AdditiveProductionEfficiencyParams,
): AdditiveProductionEfficiencyResult => {
  const { pieces, unitPrint, preheat, transitionDist, travelSpeed, failureRate, purge, criticalRisk } = n(params);
  const transitionMinutes = (pieces * transitionDist) / (travelSpeed * 60);
  const batchMinutes = preheat + pieces * unitPrint + transitionMinutes;
  const sequentialMinutes = pieces * (preheat + unitPrint + purge);
  const absoluteSavingsMinutes = sequentialMinutes - batchMinutes;
  const relativeEfficiencyPercent = sequentialMinutes > 0 ? (absoluteSavingsMinutes / sequentialMinutes) * 100 : 0;
  const batchRiskPercent = (1 - Math.pow(1 - failureRate, pieces)) * 100;
  const recommendedStrategy =
    batchRiskPercent > criticalRisk || absoluteSavingsMinutes < 0 ? 'sequential' : 'batch';
  const viabilityLabel = computeViabilityLabel(batchRiskPercent, criticalRisk, absoluteSavingsMinutes);

  return {
    batchMinutes,
    sequentialMinutes,
    transitionMinutes,
    absoluteSavingsMinutes,
    relativeEfficiencyPercent,
    batchRiskPercent,
    recommendedStrategy,
    viabilityLabel,
    batchIsFaster: absoluteSavingsMinutes >= 0,
  };
};
