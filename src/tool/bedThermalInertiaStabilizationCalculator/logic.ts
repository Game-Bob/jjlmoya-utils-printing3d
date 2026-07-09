export type BedPlateMaterial = 'borosilicateGlass' | 'peiSpringSteel' | 'aluminum';

export interface BedThermalInertiaParams {
  material: BedPlateMaterial;
  thicknessMm: number;
  targetTemperatureC: number;
  heaterPowerW: number;
  bedLengthMm?: number;
  bedWidthMm?: number;
  ambientTemperatureC?: number;
}

export interface BedThermalInertiaResult {
  warmupSeconds: number;
  stabilizationSeconds: number;
  recommendedDelaySeconds: number;
  plateMassKg: number;
  thermalEnergyWh: number;
  diffusionLagSeconds: number;
  materialConductivityWmK: number;
  readiness: 'quick' | 'balanced' | 'slow';
}

interface MaterialProperties {
  densityKgM3: number;
  specificHeatJkgK: number;
  conductivityWmK: number;
  contactFactor: number;
}

const MATERIALS: Record<BedPlateMaterial, MaterialProperties> = {
  borosilicateGlass: {
    densityKgM3: 2230,
    specificHeatJkgK: 830,
    conductivityWmK: 1.2,
    contactFactor: 1.55,
  },
  peiSpringSteel: {
    densityKgM3: 7850,
    specificHeatJkgK: 490,
    conductivityWmK: 16,
    contactFactor: 0.78,
  },
  aluminum: {
    densityKgM3: 2700,
    specificHeatJkgK: 900,
    conductivityWmK: 205,
    contactFactor: 0.42,
  },
};

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);
const roundTo = (value: number, step: number) => Math.round(value / step) * step;

const getReadiness = (seconds: number): BedThermalInertiaResult['readiness'] => {
  if (seconds > 240) return 'slow';
  if (seconds > 90) return 'balanced';
  return 'quick';
};

const getPlateMassKg = (opts: { lengthM: number; widthM: number; thicknessM: number; material: MaterialProperties }) =>
  opts.lengthM * opts.widthM * opts.thicknessM * opts.material.densityKgM3;

const getDiffusionLagSeconds = (thicknessM: number, material: MaterialProperties) => {
  const thermalDiffusivity = material.conductivityWmK / (material.densityKgM3 * material.specificHeatJkgK);
  return (thicknessM * thicknessM) / (Math.PI * Math.PI * thermalDiffusivity);
};

const getStabilizationSeconds = (opts: { diffusionLagSeconds: number; warmupSeconds: number; thicknessMm: number; heaterPowerW: number; material: MaterialProperties }) => {
  const surfacePenalty = Math.pow(opts.thicknessMm / 1.8, 0.65) * opts.material.contactFactor;
  const powerRatio = Math.pow(220 / opts.heaterPowerW, 0.22);
  const diffusionDelay = opts.diffusionLagSeconds * surfacePenalty * powerRatio;
  const warmupDelay = opts.warmupSeconds * 0.16 * opts.material.contactFactor;
  return Math.max(20, diffusionDelay + warmupDelay);
};

export const calculateBedThermalInertia = (params: BedThermalInertiaParams): BedThermalInertiaResult => {
  const material = MATERIALS[params.material] ?? MATERIALS.borosilicateGlass;
  const thicknessMm = clamp(params.thicknessMm, 0.1, 15);
  const heaterPowerW = clamp(params.heaterPowerW, 20, 1500);
  const ambientTemperatureC = params.ambientTemperatureC ?? 25;
  const targetTemperatureC = clamp(params.targetTemperatureC, ambientTemperatureC + 5, 140);
  const lengthM = clamp(params.bedLengthMm ?? 235, 120, 500) / 1000;
  const widthM = clamp(params.bedWidthMm ?? 235, 120, 500) / 1000;
  const thicknessM = thicknessMm / 1000;
  const plateMassKg = getPlateMassKg({ lengthM, widthM, thicknessM, material });
  const deltaK = targetTemperatureC - ambientTemperatureC;
  const storedEnergyJ = plateMassKg * material.specificHeatJkgK * deltaK;
  const effectiveHeaterPowerW = heaterPowerW * 0.72;
  const warmupSeconds = storedEnergyJ / effectiveHeaterPowerW;
  const diffusionLagSeconds = getDiffusionLagSeconds(thicknessM, material);
  const stabilizationSeconds = getStabilizationSeconds({ diffusionLagSeconds, warmupSeconds, thicknessMm, heaterPowerW, material });
  const recommendedDelaySeconds = roundTo(stabilizationSeconds, 5);

  return {
    warmupSeconds: roundTo(warmupSeconds, 5),
    stabilizationSeconds,
    recommendedDelaySeconds,
    plateMassKg,
    thermalEnergyWh: storedEnergyJ / 3600,
    diffusionLagSeconds,
    materialConductivityWmK: material.conductivityWmK,
    readiness: getReadiness(recommendedDelaySeconds),
  };
};
