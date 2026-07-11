export type CoolingLevel = 'low' | 'medium' | 'high';
export type OverhangMaterial = 'pla' | 'petg' | 'abs' | 'tpu';
export type RiskLevel = 'safe' | 'cautious' | 'supports';

export interface OverhangSafeAngleParams {
  layerHeightMm: number;
  lineWidthMm: number;
  cooling: CoolingLevel;
  material: OverhangMaterial;
  printSpeedMms: number;
}

export interface OverhangSafeAngleResult {
  safeAngleDeg: number;
  rawAngleDeg: number;
  riskLevel: RiskLevel;
  coolingMultiplier: number;
  speedMultiplier: number;
  materialMultiplier: number;
  geometryMultiplier: number;
  bridgeRatio: number;
  maxDomesticAngleDeg: number;
  educationalTipKey: 'increaseCooling' | 'slowDown' | 'lowerLayer' | 'petgCaution' | 'baseline';
}

interface MaterialProfile {
  baseAngleDeg: number;
  multiplier: number;
  heatPenalty: number;
}

const MATERIALS: Record<OverhangMaterial, MaterialProfile> = {
  pla: { baseAngleDeg: 52, multiplier: 1.04, heatPenalty: 0.02 },
  petg: { baseAngleDeg: 48, multiplier: 0.96, heatPenalty: 0.06 },
  abs: { baseAngleDeg: 45, multiplier: 0.9, heatPenalty: 0.08 },
  tpu: { baseAngleDeg: 42, multiplier: 0.84, heatPenalty: 0.04 },
};

const COOLING_MULTIPLIERS: Record<CoolingLevel, number> = {
  low: 0.88,
  medium: 1,
  high: 1.11,
};

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);
const round1 = (value: number) => Math.round(value * 10) / 10;

const speedMultiplier = (speedMms: number, material: MaterialProfile) => {
  const speed = clamp(speedMms, 20, 150);
  const fastPenalty = Math.max(0, speed - 65) * (0.0028 + material.heatPenalty * 0.01);
  const slowBoost = Math.max(0, 55 - speed) * 0.0015;
  return clamp(1 + slowBoost - fastPenalty, 0.72, 1.08);
};

const geometryMultiplier = (layerHeightMm: number, lineWidthMm: number) => {
  const layer = clamp(layerHeightMm, 0.08, 0.32);
  const line = clamp(lineWidthMm, 0.3, 0.8);
  const ratio = layer / line;
  return clamp(1.18 - ratio * 0.42, 0.82, 1.16);
};

const getRiskLevel = (angleDeg: number): RiskLevel => {
  if (angleDeg < 45) return 'safe';
  if (angleDeg <= 60) return 'cautious';
  return 'supports';
};

const getTipKey = (
  params: OverhangSafeAngleParams,
  result: Pick<OverhangSafeAngleResult, 'riskLevel' | 'bridgeRatio'>,
): OverhangSafeAngleResult['educationalTipKey'] => {
  if (params.cooling !== 'high' && result.riskLevel !== 'safe') return 'increaseCooling';
  if (params.printSpeedMms > 85 && result.riskLevel !== 'safe') return 'slowDown';
  if (result.bridgeRatio > 0.58) return 'lowerLayer';
  if (params.material === 'petg') return 'petgCaution';
  return 'baseline';
};

export const calculateOverhangSafeAngle = (params: OverhangSafeAngleParams): OverhangSafeAngleResult => {
  const material = MATERIALS[params.material] ?? MATERIALS.pla;
  const layerHeightMm = clamp(params.layerHeightMm, 0.08, 0.32);
  const lineWidthMm = clamp(params.lineWidthMm, 0.3, 0.8);
  const coolingMultiplier = COOLING_MULTIPLIERS[params.cooling] ?? COOLING_MULTIPLIERS.medium;
  const materialMultiplier = material.multiplier;
  const speedFactor = speedMultiplier(params.printSpeedMms, material);
  const geometryFactor = geometryMultiplier(layerHeightMm, lineWidthMm);
  const rawAngleDeg = material.baseAngleDeg * coolingMultiplier * speedFactor * materialMultiplier * geometryFactor;
  const maxDomesticAngleDeg = 75;
  const safeAngleDeg = round1(clamp(rawAngleDeg, 25, maxDomesticAngleDeg));
  const bridgeRatio = round1((layerHeightMm / lineWidthMm) * 100) / 100;
  const riskLevel = getRiskLevel(safeAngleDeg);

  return {
    safeAngleDeg,
    rawAngleDeg: round1(rawAngleDeg),
    riskLevel,
    coolingMultiplier: round1(coolingMultiplier),
    speedMultiplier: round1(speedFactor),
    materialMultiplier: round1(materialMultiplier),
    geometryMultiplier: round1(geometryFactor),
    bridgeRatio,
    maxDomesticAngleDeg,
    educationalTipKey: getTipKey(params, { riskLevel, bridgeRatio }),
  };
};
