export type PEISheetType = 'smooth' | 'textured' | 'satin' | 'powderCoated';
export type PrintedMaterial = 'pla' | 'petg' | 'absAsa' | 'tpu' | 'nylonPc';
export type CleaningMethod = 'ipa' | 'dishSoap' | 'acetoneOccasional' | 'abrasivePad' | 'mixed';

export interface PEISheetLifespanParams {
  sheetType: PEISheetType;
  printCount: number;
  bedTemperatureC: number;
  primaryMaterial: PrintedMaterial;
  metalSpatulaUse: boolean;
  cleaningMethod: CleaningMethod;
  weakZones?: number;
  nozzleCrashIncidents?: number;
  petgOverbondIncidents?: number;
  lowZOffsetFrequency?: number;
}

export interface PEISheetLifespanResult {
  remainingLifePercent: number;
  consumedLifePercent: number;
  equivalentCycles: number;
  estimatedTotalCycles: number;
  remainingPrints: number;
  adhesionRiskPercent: number;
  riskLevel: 'low' | 'moderate' | 'high' | 'critical';
  wearMode: 'normal' | 'thermal' | 'chemical' | 'mechanical' | 'localized' | 'combined';
  recommendationKey: 'soapWash' | 'raiseZ' | 'zoneMap' | 'releaseLayer' | 'gentleRelease' | 'replaceCriticalZone';
}

interface SheetProfile {
  baselineCycles: number;
  thermalToleranceC: number;
  abrasionSensitivity: number;
  chemicalSensitivity: number;
}

const SHEET_PROFILES: Record<PEISheetType, SheetProfile> = {
  smooth: { baselineCycles: 520, thermalToleranceC: 95, abrasionSensitivity: 1.25, chemicalSensitivity: 1.35 },
  textured: { baselineCycles: 720, thermalToleranceC: 110, abrasionSensitivity: 0.86, chemicalSensitivity: 0.9 },
  satin: { baselineCycles: 620, thermalToleranceC: 105, abrasionSensitivity: 1.0, chemicalSensitivity: 1.05 },
  powderCoated: { baselineCycles: 820, thermalToleranceC: 115, abrasionSensitivity: 0.78, chemicalSensitivity: 0.84 },
};

const MATERIAL_FACTORS: Record<PrintedMaterial, number> = {
  pla: 0.82,
  petg: 1.28,
  absAsa: 1.18,
  tpu: 0.95,
  nylonPc: 1.45,
};

const CLEANING_FACTORS: Record<CleaningMethod, number> = {
  ipa: 1.0,
  dishSoap: 0.86,
  acetoneOccasional: 1.28,
  abrasivePad: 1.42,
  mixed: 1.12,
};

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);
const round = (value: number) => Math.round(value);

const getRiskLevel = (risk: number): PEISheetLifespanResult['riskLevel'] => {
  if (risk >= 78) return 'critical';
  if (risk >= 55) return 'high';
  if (risk >= 32) return 'moderate';
  return 'low';
};

const getWearMode = (opts: {
  thermalPenalty: number;
  cleaningPenalty: number;
  spatulaPenalty: number;
}): PEISheetLifespanResult['wearMode'] => {
  const active = [opts.thermalPenalty > 1.18, opts.cleaningPenalty > 1.18, opts.spatulaPenalty > 1.18].filter(Boolean).length;
  if (active > 1) return 'combined';
  if (opts.spatulaPenalty > 1.18) return 'mechanical';
  if (opts.cleaningPenalty > 1.18) return 'chemical';
  if (opts.thermalPenalty > 1.18) return 'thermal';
  return 'normal';
};

const getRecommendation = (opts: {
  remaining: number;
  risk: number;
  wearMode: PEISheetLifespanResult['wearMode'];
  lowZOffsetFrequency: number;
  petgOverbondIncidents: number;
  weakZones: number;
}): PEISheetLifespanResult['recommendationKey'] => {
  if (opts.weakZones >= 5 || opts.risk >= 86) return 'replaceCriticalZone';
  if (opts.lowZOffsetFrequency >= 60) return 'raiseZ';
  if (opts.petgOverbondIncidents >= 1) return 'releaseLayer';
  if (opts.weakZones >= 2 || opts.remaining <= 42) return 'zoneMap';
  if (opts.wearMode === 'mechanical' || opts.wearMode === 'combined') return 'gentleRelease';
  return 'soapWash';
};

export const calculatePEISheetLifespan = (params: PEISheetLifespanParams): PEISheetLifespanResult => {
  const profile = SHEET_PROFILES[params.sheetType] ?? SHEET_PROFILES.textured;
  const printCount = clamp(params.printCount, 0, 10000);
  const bedTemperatureC = clamp(params.bedTemperatureC, 20, 140);
  const materialFactor = MATERIAL_FACTORS[params.primaryMaterial] ?? MATERIAL_FACTORS.pla;
  const cleaningPenalty = CLEANING_FACTORS[params.cleaningMethod] ?? CLEANING_FACTORS.ipa;
  const overToleranceC = Math.max(0, bedTemperatureC - profile.thermalToleranceC);
  const thermalPenalty = 1 + (overToleranceC / 45) * 0.75 + Math.max(0, bedTemperatureC - 75) / 260;
  const spatulaPenalty = params.metalSpatulaUse ? 1 + 0.42 * profile.abrasionSensitivity : 1;
  const chemicalAdjusted = 1 + (cleaningPenalty - 1) * profile.chemicalSensitivity;
  const weakZones = clamp(params.weakZones ?? 0, 0, 16);
  const nozzleCrashIncidents = clamp(params.nozzleCrashIncidents ?? 0, 0, 20);
  const petgOverbondIncidents = clamp(params.petgOverbondIncidents ?? 0, 0, 20);
  const lowZOffsetFrequency = clamp(params.lowZOffsetFrequency ?? 0, 0, 100);
  const incidentCycles = weakZones * 32 + nozzleCrashIncidents * 68 + petgOverbondIncidents * 52 + lowZOffsetFrequency * 1.35;
  const equivalentCycles = printCount * materialFactor * thermalPenalty * spatulaPenalty * chemicalAdjusted + incidentCycles;
  const consumedLifePercent = clamp((equivalentCycles / profile.baselineCycles) * 100, 0, 155);
  const remainingLifePercent = clamp(100 - consumedLifePercent, 0, 100);
  const fatigueRisk = Math.pow(consumedLifePercent / 100, 1.45) * 72;
  const materialReleaseRisk = Math.max(0, materialFactor - 1) * 18;
  const incidentRisk = weakZones * 5.5 + nozzleCrashIncidents * 8 + petgOverbondIncidents * 7 + lowZOffsetFrequency * 0.18;
  const adhesionRiskPercent = clamp(fatigueRisk + materialReleaseRisk + incidentRisk + Math.max(0, cleaningPenalty - 1) * 22 + (params.metalSpatulaUse ? 10 : 0), 3, 98);
  const baseWearMode = getWearMode({ thermalPenalty, cleaningPenalty: chemicalAdjusted, spatulaPenalty });
  const wearMode = weakZones >= 3 ? 'localized' : nozzleCrashIncidents + petgOverbondIncidents >= 2 ? 'mechanical' : baseWearMode;

  return {
    remainingLifePercent: round(remainingLifePercent),
    consumedLifePercent: round(clamp(consumedLifePercent, 0, 100)),
    equivalentCycles: round(equivalentCycles),
    estimatedTotalCycles: profile.baselineCycles,
    remainingPrints: round(Math.max(0, profile.baselineCycles - equivalentCycles) / Math.max(0.55, materialFactor * thermalPenalty)),
    adhesionRiskPercent: round(adhesionRiskPercent),
    riskLevel: getRiskLevel(adhesionRiskPercent),
    wearMode,
    recommendationKey: getRecommendation({ remaining: remainingLifePercent, risk: adhesionRiskPercent, wearMode, lowZOffsetFrequency, petgOverbondIncidents, weakZones }),
  };
};
