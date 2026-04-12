export interface ShrinkageParams {
  shrinkagePercent: number;
}

export interface CalibrationParams {
  designSize: number;
  realSize: number;
}

export interface ShrinkageResult {
  shrinkagePercent: number;
  factor: number;
  scalingXY: number;
  axisZ: number;
  cubeScaleXY: number;
  cubeScaleZ: number;
}

export const calculateFromShrinkage = (shrinkagePercent: number, manualAxisZ?: number): ShrinkageResult => {
  const s = shrinkagePercent / 100;
  const factor = s < 1 ? 1 / (1 - s) : 0;
  const scalingXY = factor * 100;
  
  const axisZ = manualAxisZ ?? (100 + (scalingXY - 100) * 0.7);
  
  const cubeScaleXY = (1 - s);
  const zFactor = axisZ / 100;
  const cubeScaleZ = zFactor > 0 ? 1 / zFactor : 1;

  return {
    shrinkagePercent,
    factor,
    scalingXY,
    axisZ,
    cubeScaleXY,
    cubeScaleZ
  };
};

export const calculateFromCalibration = (design: number, real: number, manualAxisZ?: number): ShrinkageResult => {
  const shrinkagePercent = real > 0 ? ((design / real) - 1) * 100 : 0;
  return calculateFromShrinkage(shrinkagePercent, manualAxisZ);
};
