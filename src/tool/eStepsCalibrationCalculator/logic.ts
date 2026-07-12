export interface EStepsCalibrationParams {
  currentESteps: number;
  requestedLengthMm: number;
  actualLengthMm: number;
}

export interface EStepsCalibrationResult {
  newESteps: number;
  errorPercent: number;
  command: string;
  isCritical: boolean;
}

const CRITICAL_ERROR_PERCENT = 5;

const round2 = (value: number) => Math.round(value * 100) / 100;

export const calculateEStepsCalibration = (params: EStepsCalibrationParams): EStepsCalibrationResult => {
  const requestedLengthMm = Math.max(params.requestedLengthMm, 0.001);
  const actualLengthMm = Math.max(params.actualLengthMm, 0.001);
  const newESteps = round2((Math.max(params.currentESteps, 0) * requestedLengthMm) / actualLengthMm);
  const errorPercent = round2(Math.abs((actualLengthMm - requestedLengthMm) / requestedLengthMm) * 100);

  return {
    newESteps,
    errorPercent,
    command: `M92 E${newESteps.toFixed(2)}`,
    isCritical: errorPercent > CRITICAL_ERROR_PERCENT,
  };
};
