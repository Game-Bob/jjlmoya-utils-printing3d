export type UnitSystem = 'metric' | 'imperial';

export interface HygroscopicMaterial {
  id: string;
  sMax: number;
  kineticK: number;
  critical: number;
  dryTempC: number;
  tempMinC: number;
  tempMaxC: number;
}

export interface MoistureSaturationParams {
  materialId: string;
  relativeHumidity: number;
  exposureDays: number;
  dryTempC: number;
  spoolMassGrams: number;
}

export interface MoistureSaturationResult {
  material: HygroscopicMaterial;
  absorbedPercent: number;
  saturationRatio: number;
  absorbedGrams: number;
  dryHours: number;
  riskLevel: 'stable' | 'watch' | 'critical';
  hydrolysisIndex: number;
  curvePoints: Array<{ day: number; percent: number }>;
}

export const HYGROSCOPIC_MATERIALS: HygroscopicMaterial[] = [
  { id: 'pla', sMax: 0.65, kineticK: 0.08, critical: 0.32, dryTempC: 45, tempMinC: 40, tempMaxC: 55 },
  { id: 'petg', sMax: 0.85, kineticK: 0.11, critical: 0.38, dryTempC: 65, tempMinC: 55, tempMaxC: 70 },
  { id: 'abs', sMax: 0.55, kineticK: 0.07, critical: 0.3, dryTempC: 75, tempMinC: 65, tempMaxC: 80 },
  { id: 'asa', sMax: 0.5, kineticK: 0.065, critical: 0.28, dryTempC: 80, tempMinC: 70, tempMaxC: 85 },
  { id: 'tpu', sMax: 1.45, kineticK: 0.18, critical: 0.55, dryTempC: 55, tempMinC: 45, tempMaxC: 60 },
  { id: 'pa', sMax: 3.2, kineticK: 0.34, critical: 0.9, dryTempC: 80, tempMinC: 70, tempMaxC: 90 },
  { id: 'pc', sMax: 0.75, kineticK: 0.12, critical: 0.36, dryTempC: 85, tempMinC: 75, tempMaxC: 95 },
  { id: 'pva', sMax: 5.8, kineticK: 0.42, critical: 1.25, dryTempC: 50, tempMinC: 40, tempMaxC: 55 },
];

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));
const finite = (value: number, fallback: number) => (Number.isFinite(value) ? value : fallback);

export const getMaterial = (materialId: string) => {
  return HYGROSCOPIC_MATERIALS.find((material) => material.id === materialId) ?? HYGROSCOPIC_MATERIALS[0];
};

const getRiskLevel = (hydrolysisIndex: number): MoistureSaturationResult['riskLevel'] => {
  if (hydrolysisIndex >= 1.15) return 'critical';
  if (hydrolysisIndex >= 0.68) return 'watch';
  return 'stable';
};

const getCurvePoints = (material: HygroscopicMaterial, days: number, rhFactor: number) => {
  const sampleDays = Math.max(7, Math.ceil(days || 7));
  return Array.from({ length: 16 }, (_, index) => {
    const day = (sampleDays / 15) * index;
    return {
      day,
      percent: material.sMax * (1 - Math.exp(-material.kineticK * day)) * rhFactor,
    };
  });
};

export const calculateMoistureSaturation = (params: MoistureSaturationParams): MoistureSaturationResult => {
  const material = getMaterial(params.materialId);
  const relativeHumidity = clamp(finite(params.relativeHumidity, 55), 0, 100);
  const exposureDays = clamp(finite(params.exposureDays, 14), 0, 180);
  const dryTempC = clamp(finite(params.dryTempC, material.dryTempC), 25, 110);
  const spoolMassGrams = clamp(finite(params.spoolMassGrams, 1000), 1, 5000);
  const rhFactor = relativeHumidity / 100;
  const absorbedPercent = material.sMax * (1 - Math.exp(-material.kineticK * exposureDays)) * rhFactor;
  const saturationRatio = clamp(absorbedPercent / material.sMax, 0, 1);
  const absorbedGrams = spoolMassGrams * (absorbedPercent / 100);
  const thermalFactor = clamp((dryTempC - 30) / Math.max(1, material.dryTempC - 30), 0.35, 1.45);
  const dryHours = clamp(1.1 + (absorbedPercent / material.critical) * 4.6 / thermalFactor, 0.5, 28);
  const hydrolysisIndex = clamp((absorbedPercent / material.critical) * (relativeHumidity / 65), 0, 2.4);

  return {
    material,
    absorbedPercent,
    saturationRatio,
    absorbedGrams,
    dryHours,
    riskLevel: getRiskLevel(hydrolysisIndex),
    hydrolysisIndex,
    curvePoints: getCurvePoints(material, exposureDays, rhFactor),
  };
};

export const toCelsius = (value: number, unitSystem: UnitSystem) => (unitSystem === 'imperial' ? (value - 32) / 1.8 : value);
export const fromCelsius = (value: number, unitSystem: UnitSystem) => (unitSystem === 'imperial' ? value * 1.8 + 32 : value);
export const toGrams = (value: number, unitSystem: UnitSystem) => (unitSystem === 'imperial' ? value * 453.59237 : value);
export const fromGrams = (value: number, unitSystem: UnitSystem) => (unitSystem === 'imperial' ? value / 453.59237 : value);
