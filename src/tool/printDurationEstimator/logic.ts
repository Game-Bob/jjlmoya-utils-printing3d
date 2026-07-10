export interface PrintDurationParams {
  modelHeightMm: number;
  layerHeightMm: number;
  printSpeedMmS: number;
  footprintAreaMm2: number;
  infillPercent: number;
  complexityFactor: number;
  overheadPercent: number;
  filamentDiameterMm: number;
  extrusionWidthMm: number;
  filamentDensityGcm3: number;
}

export interface PrintDurationResult {
  totalLayers: number;
  effectiveSpeedMmS: number;
  extrusionLengthMm: number;
  baseMinutes: number;
  overheadMinutes: number;
  totalMinutes: number;
  materialVolumeCm3: number;
  filamentLengthM: number;
  filamentWeightG: number;
}

export interface SpeedScenario {
  speedMmS: number;
  totalMinutes: number;
}

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const normalizeParams = (params: PrintDurationParams): PrintDurationParams => ({
  modelHeightMm: Math.max(params.modelHeightMm, 0),
  layerHeightMm: Math.max(params.layerHeightMm, 0.01),
  printSpeedMmS: Math.max(params.printSpeedMmS, 1),
  footprintAreaMm2: Math.max(params.footprintAreaMm2, 0),
  infillPercent: clamp(params.infillPercent, 0, 100),
  complexityFactor: clamp(params.complexityFactor, 0.8, 1.2),
  overheadPercent: clamp(params.overheadPercent, 0, 60),
  filamentDiameterMm: Math.max(params.filamentDiameterMm, 0.1),
  extrusionWidthMm: Math.max(params.extrusionWidthMm, 0.1),
  filamentDensityGcm3: Math.max(params.filamentDensityGcm3, 0.1),
});

const calculateMaterialVolumeMm3 = (params: PrintDurationParams) => {
  const shellShare = 0.28;
  const infillRatio = params.infillPercent / 100;
  const effectiveSolidRatio = clamp(shellShare + (1 - shellShare) * infillRatio, 0.05, 1);

  return params.modelHeightMm * params.footprintAreaMm2 * effectiveSolidRatio;
};

export const calculatePrintDuration = (rawParams: PrintDurationParams): PrintDurationResult => {
  const params = normalizeParams(rawParams);
  const totalLayers = Math.ceil(params.modelHeightMm / params.layerHeightMm);
  const materialVolumeMm3 = calculateMaterialVolumeMm3(params);
  const roadAreaMm2 = params.extrusionWidthMm * params.layerHeightMm;
  const extrusionLengthMm = roadAreaMm2 > 0 ? materialVolumeMm3 / roadAreaMm2 : 0;
  const effectiveSpeedMmS = params.printSpeedMmS / params.complexityFactor;
  const baseMinutes = extrusionLengthMm / effectiveSpeedMmS / 60;
  const layerChangeMinutes = totalLayers * 0.45 / 60;
  const overheadMinutes = baseMinutes * (params.overheadPercent / 100) + layerChangeMinutes;
  const totalMinutes = baseMinutes + overheadMinutes;
  const materialVolumeCm3 = materialVolumeMm3 / 1000;
  const filamentAreaMm2 = Math.PI * (params.filamentDiameterMm / 2) ** 2;
  const filamentLengthM = filamentAreaMm2 > 0 ? materialVolumeMm3 / filamentAreaMm2 / 1000 : 0;
  const filamentWeightG = materialVolumeCm3 * params.filamentDensityGcm3;

  return {
    totalLayers,
    effectiveSpeedMmS,
    extrusionLengthMm,
    baseMinutes,
    overheadMinutes,
    totalMinutes,
    materialVolumeCm3,
    filamentLengthM,
    filamentWeightG,
  };
};

export const calculateSpeedScenarios = (
  params: PrintDurationParams,
  speedsMmS = [40, 60, 80],
): SpeedScenario[] =>
  speedsMmS.map((speedMmS) => ({
    speedMmS,
    totalMinutes: calculatePrintDuration({ ...params, printSpeedMmS: speedMmS }).totalMinutes,
  }));
