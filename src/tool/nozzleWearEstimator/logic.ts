export type NozzleMaterial = 'brass' | 'platedBrass' | 'hardenedSteel' | 'stainlessSteel' | 'ruby' | 'tungstenCarbide';
export type FilamentAbrasiveness = 'standard' | 'glow' | 'wood' | 'metalFill' | 'carbonFiber' | 'glassFiber' | 'ceramic';
export type NozzleDiameter = '0.25' | '0.4' | '0.6' | '0.8';

export interface NozzleWearParams {
  nozzleMaterial: NozzleMaterial;
  filament: FilamentAbrasiveness;
  extrudedKg: number;
  nozzleDiameterMm: NozzleDiameter;
  printTemperatureC?: number;
  abrasiveSharePercent?: number;
}

export interface NozzleWearResult {
  remainingLifePercent: number;
  consumedLifePercent: number;
  equivalentAbrasiveKg: number;
  estimatedTotalKg: number;
  remainingKg: number;
  boreGrowthMicrons: number;
  riskLevel: 'fresh' | 'watch' | 'worn' | 'replace';
  wearMode: 'normal' | 'abrasive' | 'thermal' | 'diameterSensitive' | 'severe';
  recommendationKey: 'keepPrinting' | 'calibrateFlow' | 'inspectBore' | 'switchNozzle' | 'replaceNow';
}

interface NozzleProfile {
  abrasiveKgAtEnd: number;
  hardnessFactor: number;
}

const NOZZLE_PROFILES: Record<NozzleMaterial, NozzleProfile> = {
  brass: { abrasiveKgAtEnd: 1.2, hardnessFactor: 1 },
  platedBrass: { abrasiveKgAtEnd: 2.5, hardnessFactor: 1.35 },
  stainlessSteel: { abrasiveKgAtEnd: 3.8, hardnessFactor: 1.7 },
  hardenedSteel: { abrasiveKgAtEnd: 8.5, hardnessFactor: 3.2 },
  ruby: { abrasiveKgAtEnd: 18, hardnessFactor: 6.8 },
  tungstenCarbide: { abrasiveKgAtEnd: 24, hardnessFactor: 8.5 },
};

const FILAMENT_FACTORS: Record<FilamentAbrasiveness, number> = {
  standard: 0.08,
  wood: 0.75,
  glow: 1.15,
  metalFill: 1.65,
  carbonFiber: 2.55,
  glassFiber: 2.85,
  ceramic: 3.4,
};

const DIAMETER_FACTORS: Record<NozzleDiameter, number> = {
  '0.25': 1.45,
  '0.4': 1,
  '0.6': 0.72,
  '0.8': 0.55,
};

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);
const round = (value: number) => Math.round(value);
const round1 = (value: number) => Math.round(value * 10) / 10;

const getRiskLevel = (consumed: number): NozzleWearResult['riskLevel'] => {
  if (consumed >= 90) return 'replace';
  if (consumed >= 68) return 'worn';
  if (consumed >= 38) return 'watch';
  return 'fresh';
};

const getWearMode = (opts: {
  consumed: number;
  filamentFactor: number;
  diameterFactor: number;
  thermalPenalty: number;
}): NozzleWearResult['wearMode'] => {
  if (opts.consumed >= 92) return 'severe';
  if (opts.thermalPenalty > 1.18) return 'thermal';
  if (opts.diameterFactor > 1.2) return 'diameterSensitive';
  if (opts.filamentFactor >= 1.5) return 'abrasive';
  return 'normal';
};

const getRecommendation = (consumed: number, mode: NozzleWearResult['wearMode']): NozzleWearResult['recommendationKey'] => {
  if (consumed >= 90) return 'replaceNow';
  if (consumed >= 75) return 'switchNozzle';
  if (consumed >= 55 || mode === 'diameterSensitive') return 'inspectBore';
  if (consumed >= 32 || mode === 'abrasive') return 'calibrateFlow';
  return 'keepPrinting';
};

export const calculateNozzleWear = (params: NozzleWearParams): NozzleWearResult => {
  const profile = NOZZLE_PROFILES[params.nozzleMaterial] ?? NOZZLE_PROFILES.brass;
  const filamentFactor = FILAMENT_FACTORS[params.filament] ?? FILAMENT_FACTORS.standard;
  const diameterFactor = DIAMETER_FACTORS[params.nozzleDiameterMm] ?? DIAMETER_FACTORS['0.4'];
  const extrudedKg = clamp(params.extrudedKg, 0, 250);
  const abrasiveShare = clamp(params.abrasiveSharePercent ?? 100, 0, 100) / 100;
  const printTemperatureC = clamp(params.printTemperatureC ?? 220, 150, 340);
  const thermalPenalty = 1 + Math.max(0, printTemperatureC - 260) / 360;
  const equivalentAbrasiveKg = extrudedKg * abrasiveShare * filamentFactor * diameterFactor * thermalPenalty;
  const estimatedTotalKg = profile.abrasiveKgAtEnd;
  const consumedLifePercent = clamp((equivalentAbrasiveKg / estimatedTotalKg) * 100, 0, 140);
  const remainingLifePercent = clamp(100 - consumedLifePercent, 0, 100);
  const nominalDiameter = Number(params.nozzleDiameterMm) || 0.4;
  const boreGrowthMicrons = clamp(Math.pow(consumedLifePercent / 100, 1.15) * nominalDiameter * 260 / profile.hardnessFactor, 0, nominalDiameter * 420);
  const riskLevel = getRiskLevel(consumedLifePercent);
  const wearMode = getWearMode({ consumed: consumedLifePercent, filamentFactor, diameterFactor, thermalPenalty });

  return {
    remainingLifePercent: round(remainingLifePercent),
    consumedLifePercent: round(clamp(consumedLifePercent, 0, 100)),
    equivalentAbrasiveKg: round1(equivalentAbrasiveKg),
    estimatedTotalKg: round1(estimatedTotalKg),
    remainingKg: round1(Math.max(0, estimatedTotalKg - equivalentAbrasiveKg) / Math.max(0.05, filamentFactor * diameterFactor * thermalPenalty)),
    boreGrowthMicrons: round(boreGrowthMicrons),
    riskLevel,
    wearMode,
    recommendationKey: getRecommendation(consumedLifePercent, wearMode),
  };
};
