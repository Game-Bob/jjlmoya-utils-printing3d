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

export const calculateAdditiveProductionEfficiency = (
  params: AdditiveProductionEfficiencyParams,
): AdditiveProductionEfficiencyResult => {
  const pieces = Math.max(Math.round(positive(params.pieces, 1)), 1);
  const unitPrintMinutes = positive(params.unitPrintMinutes, 1);
  const preheatMinutes = Math.max(params.preheatMinutes, 0);
  const transitionDistanceMm = Math.max(params.transitionDistanceMm, 0);
  const travelSpeedMmS = positive(params.travelSpeedMmS, 1);
  const failureRate = clamp(params.failureRatePercent, 0, 100) / 100;
  const purgeMinutes = Math.max(params.purgeMinutes, 0);
  const criticalRiskPercent = clamp(params.criticalRiskPercent, 0, 100);

  const transitionMinutes = (pieces * transitionDistanceMm) / (travelSpeedMmS * 60);
  const batchMinutes = preheatMinutes + pieces * unitPrintMinutes + transitionMinutes;
  const sequentialMinutes = pieces * (preheatMinutes + unitPrintMinutes + purgeMinutes);
  const absoluteSavingsMinutes = sequentialMinutes - batchMinutes;
  const relativeEfficiencyPercent = sequentialMinutes > 0 ? (absoluteSavingsMinutes / sequentialMinutes) * 100 : 0;
  const batchRiskPercent = (1 - Math.pow(1 - failureRate, pieces)) * 100;
  const recommendedStrategy =
    batchRiskPercent > criticalRiskPercent || absoluteSavingsMinutes < 0 ? 'sequential' : 'batch';
  const viabilityLabel = batchRiskPercent > criticalRiskPercent ? 'critical' : batchRiskPercent > criticalRiskPercent * 0.6 ? 'moderate' : 'low';

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
