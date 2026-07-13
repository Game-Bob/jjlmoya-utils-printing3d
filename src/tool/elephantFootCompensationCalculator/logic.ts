export type MaterialPreset = 'pla' | 'petg' | 'abs' | 'custom';

export interface ElephantFootCompensationParams {
  measuredErrorMm: number;
  layerHeightMm: number;
  zPressureOffsetMm: number;
  bedTemperatureC: number;
  targetToleranceMm: number;
  material: MaterialPreset;
}

export interface ElephantFootCompensationResult {
  correctedExpansionMm: number;
  slicerHorizontalExpansionMm: number;
  chamferDepthMm: number;
  chamferAngleDeg: number;
  thermalFactor: number;
  residualErrorMm: number;
  pressureRatio: number;
  severity: 'optimal' | 'watch' | 'severe';
}

export const MATERIAL_PRESETS: Record<MaterialPreset, { bedC: number; toleranceMm: number }> = {
  pla: { bedC: 60, toleranceMm: 0.05 },
  petg: { bedC: 75, toleranceMm: 0.07 },
  abs: { bedC: 100, toleranceMm: 0.08 },
  custom: { bedC: 60, toleranceMm: 0.05 },
};

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export const calculateThermalFactor = (bedTemperatureC: number) => {
  const extraFiveDegreeSteps = (bedTemperatureC - 60) / 5;
  return clamp(1 + extraFiveDegreeSteps * 0.05, 0.7, 1.65);
};

export const calculateElephantFootCompensation = (
  params: ElephantFootCompensationParams,
): ElephantFootCompensationResult => {
  const error = Math.max(params.measuredErrorMm, 0);
  const layerHeight = Math.max(params.layerHeightMm, 0.01);
  const zPressure = Math.max(params.zPressureOffsetMm, 0.01);
  const targetTolerance = Math.max(params.targetToleranceMm, 0.005);
  const thermalFactor = calculateThermalFactor(params.bedTemperatureC);
  const pressureRatio = layerHeight / zPressure;
  const correctedExpansionMm = error * pressureRatio * thermalFactor;
  const residualErrorMm = Math.max(error - correctedExpansionMm, 0);
  let severity: ElephantFootCompensationResult['severity'] = 'severe';
  if (error <= targetTolerance) severity = 'optimal';
  else if (error <= targetTolerance * 2.5) severity = 'watch';

  return {
    correctedExpansionMm,
    slicerHorizontalExpansionMm: -correctedExpansionMm,
    chamferDepthMm: error * Math.SQRT2,
    chamferAngleDeg: 45,
    thermalFactor,
    residualErrorMm,
    pressureRatio,
    severity,
  };
};
