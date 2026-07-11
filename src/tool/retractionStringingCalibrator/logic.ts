export type ExtrusionSystem = 'direct' | 'bowden';
export type FilamentMaterial = 'pla' | 'petg' | 'tpu' | 'abs' | 'nylon';

export interface RetractionStringingParams {
  extrusionSystem: ExtrusionSystem;
  material: FilamentMaterial;
  ptfeTubeLengthMm: number;
  nozzleDiameterMm: number;
  printTemperatureC: number;
  stringingSeverity: number;
}

export interface RetractionStringingResult {
  suggestedDistanceMm: number;
  testMinDistanceMm: number;
  testMaxDistanceMm: number;
  distanceStepMm: number;
  suggestedSpeedMms: number;
  testMinSpeedMms: number;
  testMaxSpeedMms: number;
  safetyLimitMm: number;
  heatCreepRisk: 'low' | 'watch' | 'high';
  pressureScore: number;
  temperatureOffsetC: number;
  travelSpeedMms: number;
  recommendationKey: 'balanced' | 'lowerTemperature' | 'reduceDistance' | 'slowFlexible' | 'checkBowden';
}

interface MaterialProfile {
  elasticity: number;
  speedMin: number;
  speedMax: number;
  baseTempC: number;
  tempSensitivity: number;
  maxDirectMm: number;
  maxBowdenMm: number;
  stepMm: number;
}

const MATERIALS: Record<FilamentMaterial, MaterialProfile> = {
  pla: { elasticity: 0.018, speedMin: 35, speedMax: 55, baseTempC: 205, tempSensitivity: 0.08, maxDirectMm: 2.2, maxBowdenMm: 7, stepMm: 0.2 },
  petg: { elasticity: 0.022, speedMin: 30, speedMax: 48, baseTempC: 235, tempSensitivity: 0.09, maxDirectMm: 2, maxBowdenMm: 6.5, stepMm: 0.2 },
  tpu: { elasticity: 0.009, speedMin: 18, speedMax: 30, baseTempC: 220, tempSensitivity: 0.04, maxDirectMm: 1.2, maxBowdenMm: 3.5, stepMm: 0.1 },
  abs: { elasticity: 0.019, speedMin: 35, speedMax: 55, baseTempC: 245, tempSensitivity: 0.06, maxDirectMm: 2.2, maxBowdenMm: 6.8, stepMm: 0.2 },
  nylon: { elasticity: 0.024, speedMin: 28, speedMax: 42, baseTempC: 255, tempSensitivity: 0.07, maxDirectMm: 1.8, maxBowdenMm: 6, stepMm: 0.2 },
};

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);
const round1 = (value: number) => Math.round(value * 10) / 10;
const round5 = (value: number) => Math.round(value / 5) * 5;
const isBowden = (params: RetractionStringingParams) => params.extrusionSystem === 'bowden';

const getDistance = (params: RetractionStringingParams, profile: MaterialProfile) => {
  const nozzleBoost = (clamp(params.nozzleDiameterMm, 0.2, 1.2) - 0.4) * 1.8;
  const tempBoost = Math.max(0, params.printTemperatureC - profile.baseTempC) * profile.tempSensitivity;
  const severityBoost = clamp(params.stringingSeverity, 0, 10) * 0.08;

  if (params.extrusionSystem === 'bowden') {
    const tube = clamp(params.ptfeTubeLengthMm, 150, 1200);
    const elasticDistance = tube * profile.elasticity;
    return elasticDistance + nozzleBoost + tempBoost + severityBoost;
  }

  return 0.5 + clamp(params.nozzleDiameterMm, 0.2, 1.2) * 2 + nozzleBoost * 0.35 + tempBoost * 0.35 + severityBoost;
};

const getSafetyLimit = (params: RetractionStringingParams, profile: MaterialProfile) => {
  if (isBowden(params)) return profile.maxBowdenMm;
  return profile.maxDirectMm;
};

const getSpread = (params: RetractionStringingParams, severity: number) => {
  if (isBowden(params)) return 0.65 + severity * 0.04;
  return 0.25 + severity * 0.018;
};

const getHeatCreepRisk = (distance: number, safetyLimit: number, pressureScore: number): RetractionStringingResult['heatCreepRisk'] => {
  if (distance > 7 || pressureScore > 82) return 'high';
  if (distance > safetyLimit * 0.78 || pressureScore > 64) return 'watch';
  return 'low';
};

const getTravelSpeed = (params: RetractionStringingParams) => {
  if (params.material === 'tpu') return 130;
  if (isBowden(params)) return 170;
  return 150;
};

const getRecommendation = (
  params: RetractionStringingParams,
  heatCreepRisk: RetractionStringingResult['heatCreepRisk'],
  tempExcess: number,
): RetractionStringingResult['recommendationKey'] => {
  if (params.material === 'tpu') return 'slowFlexible';
  if (heatCreepRisk === 'high') return 'reduceDistance';
  if (tempExcess > 15) return 'lowerTemperature';
  if (isBowden(params) && params.ptfeTubeLengthMm > 850) return 'checkBowden';
  return 'balanced';
};

const getSpeedRange = (profile: MaterialProfile, severity: number, tempExcess: number) => {
  const speedBias = severity * 1.8 + Math.max(0, tempExcess) * 0.18;
  const suggestedSpeedMms = round5(clamp(profile.speedMin + speedBias, profile.speedMin, profile.speedMax));
  const testMinSpeedMms = round5(clamp(suggestedSpeedMms - 8, profile.speedMin, profile.speedMax));
  const testMaxSpeedMms = round5(clamp(suggestedSpeedMms + 8, testMinSpeedMms + 5, profile.speedMax));
  return { suggestedSpeedMms, testMinSpeedMms, testMaxSpeedMms };
};

export const calculateRetractionStringing = (params: RetractionStringingParams): RetractionStringingResult => {
  const profile = MATERIALS[params.material] ?? MATERIALS.pla;
  const safetyLimitMm = getSafetyLimit(params, profile);
  const rawDistance = getDistance(params, profile);
  const suggestedDistanceMm = round1(clamp(rawDistance, 0.35, safetyLimitMm));
  const severity = clamp(params.stringingSeverity, 0, 10);
  const spread = getSpread(params, severity);
  const testMinDistanceMm = round1(clamp(suggestedDistanceMm - spread, 0.2, safetyLimitMm));
  const testMaxDistanceMm = round1(clamp(suggestedDistanceMm + spread, testMinDistanceMm + profile.stepMm, safetyLimitMm));
  const tempExcess = params.printTemperatureC - profile.baseTempC;
  const speedRange = getSpeedRange(profile, severity, tempExcess);
  const pressureScore = Math.round(clamp((suggestedDistanceMm / safetyLimitMm) * 70 + Math.max(0, tempExcess) * 0.8 + severity * 2, 0, 100));
  const heatCreepRisk = getHeatCreepRisk(suggestedDistanceMm, safetyLimitMm, pressureScore);

  return {
    suggestedDistanceMm,
    testMinDistanceMm,
    testMaxDistanceMm,
    distanceStepMm: profile.stepMm,
    ...speedRange,
    safetyLimitMm,
    heatCreepRisk,
    pressureScore,
    temperatureOffsetC: heatCreepRisk === 'high' || tempExcess > 12 ? -5 : 0,
    travelSpeedMms: getTravelSpeed(params),
    recommendationKey: getRecommendation(params, heatCreepRisk, tempExcess),
  };
};
