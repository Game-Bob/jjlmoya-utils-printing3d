export type WarpingMaterial = 'PLA' | 'PETG' | 'ABS' | 'ASA' | 'Nylon' | 'PC' | 'TPU';

export type UnitSystem = 'metric' | 'imperial';

export type RiskLevel = 'low' | 'medium' | 'high' | 'critical';

export interface WarpingRiskInput {
  material: WarpingMaterial;
  footprintAreaCm2: number;
  diagonalMm: number;
  bedTemperatureC: number;
  ambientTemperatureC: number;
  enclosedChamber: boolean;
}

export interface MaterialWarpingProfile {
  label: WarpingMaterial;
  shrinkageFactor: number;
  shrinkageClass: 'low' | 'medium' | 'high';
  technical: boolean;
  recommendedBedC: {
    min: number;
    max: number;
  };
}

export interface WarpingRiskResult {
  thermalTensionIndex: number;
  riskPercent: number;
  riskLevel: RiskLevel;
  deltaTemperatureC: number;
  brimWidthMm: number;
  chamberMultiplier: number;
}

export const MATERIAL_PROFILES: Record<WarpingMaterial, MaterialWarpingProfile> = {
  PLA: { label: 'PLA', shrinkageFactor: 0.18, shrinkageClass: 'low', technical: false, recommendedBedC: { min: 45, max: 65 } },
  PETG: { label: 'PETG', shrinkageFactor: 0.32, shrinkageClass: 'medium', technical: false, recommendedBedC: { min: 70, max: 90 } },
  ABS: { label: 'ABS', shrinkageFactor: 0.92, shrinkageClass: 'high', technical: true, recommendedBedC: { min: 90, max: 115 } },
  ASA: { label: 'ASA', shrinkageFactor: 0.82, shrinkageClass: 'high', technical: true, recommendedBedC: { min: 90, max: 110 } },
  Nylon: { label: 'Nylon', shrinkageFactor: 1.08, shrinkageClass: 'high', technical: true, recommendedBedC: { min: 70, max: 100 } },
  PC: { label: 'PC', shrinkageFactor: 1.2, shrinkageClass: 'high', technical: true, recommendedBedC: { min: 105, max: 125 } },
  TPU: { label: 'TPU', shrinkageFactor: 0.16, shrinkageClass: 'low', technical: false, recommendedBedC: { min: 30, max: 60 } },
};

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export const inchesToMm = (value: number) => value * 25.4;
export const mmToInches = (value: number) => value / 25.4;
export const squareInchesToCm2 = (value: number) => value * 6.4516;
export const cm2ToSquareInches = (value: number) => value / 6.4516;
export const fahrenheitToCelsius = (value: number) => (value - 32) / 1.8;
export const celsiusToFahrenheit = (value: number) => value * 1.8 + 32;

function riskLevelFromPercent(percent: number): RiskLevel {
  if (percent >= 82) return 'critical';
  if (percent >= 58) return 'high';
  if (percent >= 32) return 'medium';
  return 'low';
}

export const calculateWarpingRisk = (input: WarpingRiskInput): WarpingRiskResult => {
  const profile = MATERIAL_PROFILES[input.material];
  const safeArea = Math.max(input.footprintAreaCm2, 1);
  const safeDiagonal = Math.max(input.diagonalMm, 1);
  const deltaTemperatureC = Math.max(input.bedTemperatureC - input.ambientTemperatureC, 1);
  const chamberMultiplier = !input.enclosedChamber && profile.technical ? 1.85 : 1;
  const rawItt = (profile.shrinkageFactor * safeDiagonal * deltaTemperatureC) / safeArea;
  const thermalTensionIndex = rawItt * chamberMultiplier;
  const riskPercent = Math.round(clamp((thermalTensionIndex / 5.2) * 100, 0, 100));
  const riskLevel = riskLevelFromPercent(riskPercent);
  const brimBase = safeDiagonal * 0.05;
  const brimWidthMm = riskLevel === 'low' ? 0 : clamp(brimBase * (riskPercent / 55), 3, 18);

  return {
    thermalTensionIndex,
    riskPercent,
    riskLevel,
    deltaTemperatureC,
    brimWidthMm,
    chamberMultiplier,
  };
};
