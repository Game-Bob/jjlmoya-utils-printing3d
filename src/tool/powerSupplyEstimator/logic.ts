export interface PowerSupplyEstimatorParams {
  voltage: number;
  bedWatts: number;
  hotendWatts: number;
  motors: number;
  motorWatts: number;
  auxiliaryWatts: number;
  safetyMargin: number;
}

export interface PowerSupplyEstimatorResult {
  loadWatts: number;
  marginWatts: number;
  requiredWatts: number;
  currentAmps: number;
  recommendedPsuWatts: number;
  utilizationAtRecommended: number;
}

const PSU_STEPS = [120, 150, 200, 240, 300, 350, 400, 450, 500, 600, 750, 1000, 1200];

export const calculatePowerSupply = (params: PowerSupplyEstimatorParams): PowerSupplyEstimatorResult => {
  const voltage = Math.max(params.voltage, 1);
  const loadWatts =
    Math.max(params.bedWatts, 0) +
    Math.max(params.hotendWatts, 0) +
    Math.max(params.motors, 0) * Math.max(params.motorWatts, 0) +
    Math.max(params.auxiliaryWatts, 0);
  const marginWatts = loadWatts * (Math.max(params.safetyMargin, 0) / 100);
  const requiredWatts = loadWatts + marginWatts;
  const currentAmps = requiredWatts / voltage;
  const recommendedPsuWatts = PSU_STEPS.find((step) => step >= requiredWatts) ?? Math.ceil(requiredWatts / 100) * 100;
  const utilizationAtRecommended = recommendedPsuWatts > 0 ? (loadWatts / recommendedPsuWatts) * 100 : 0;

  return {
    loadWatts,
    marginWatts,
    requiredWatts,
    currentAmps,
    recommendedPsuWatts,
    utilizationAtRecommended,
  };
};
