export type SmoothingMaterial = 'abs' | 'pvb';
export type SurfaceDetail = 'fine' | 'balanced' | 'coarse';

export interface ChemicalSmoothingParams {
  material: SmoothingMaterial;
  chamberVolumeL: number;
  chamberTemperatureC: number;
  partVolumeCm3: number;
  surfaceDetail: SurfaceDetail;
}

export interface ChemicalSmoothingResult {
  exposureSeconds: number;
  exposureMinutes: number;
  dryHours: number;
  vaporIntensity: number;
  riskScore: number;
  recommendation: 'gentle' | 'standard' | 'aggressive';
  trialSeconds: number;
}

const DETAIL_FACTOR: Record<SurfaceDetail, number> = {
  fine: 0.72,
  balanced: 1,
  coarse: 1.28,
};

const MATERIAL_BASE: Record<SmoothingMaterial, { seconds: number; dryHours: number; tempRef: number; tempSlope: number }> = {
  abs: { seconds: 520, dryHours: 18, tempRef: 24, tempSlope: 0.055 },
  pvb: { seconds: 390, dryHours: 10, tempRef: 22, tempSlope: 0.045 },
};

const clampChamber = (v: number) => Math.max(v, 0.5);
const clampPart = (v: number) => Math.max(v, 1);
const clampTemp = (v: number, ref: number) => Math.max(Math.min(v - ref, 18), -12);

const computeRisk = (opts: { tempC: number; ref: number; detail: SurfaceDetail; chamberL: number; partCm3: number }): number =>
  Math.min(
    100,
    Math.round(
      28 +
        Math.max(opts.tempC - opts.ref, 0) * 4.2 +
        (DETAIL_FACTOR[opts.detail] - 0.72) * 28 +
        Math.max(8 - opts.chamberL, 0) * 1.6 +
        Math.max(opts.partCm3 - 120, 0) * 0.08,
    ),
  );

const computeRecommendation = (score: number): 'gentle' | 'standard' | 'aggressive' => {
  if (score >= 68) return 'aggressive';
  if (score >= 42) return 'standard';
  return 'gentle';
};

const computeDryHours = (base: number, partFactor: number, isFine: boolean): number =>
  Math.round((base * (0.85 + partFactor * 0.25) * (isFine ? 1.15 : 1)) * 2) / 2;

const computeExposure = (raw: number, material: SmoothingMaterial): number => {
  const min = material === 'abs' ? 90 : 70;
  const max = material === 'abs' ? 1500 : 1080;
  return Math.round(Math.min(Math.max(raw, min), max) / 5) * 5;
};

const computeVaporIntensity = (tempC: number, ref: number, partCm3: number, chamberL: number): number =>
  Math.min(Math.max((tempC / ref) * (partCm3 / (chamberL * 1000)) * 18, 0.15), 2.8);

const computeTrial = (exposureSeconds: number): number =>
  Math.max(30, Math.round(exposureSeconds * 0.32 / 5) * 5);

export const calculateChemicalSmoothingTime = (params: ChemicalSmoothingParams): ChemicalSmoothingResult => {
  const material = MATERIAL_BASE[params.material] ?? MATERIAL_BASE.abs;
  const chamberVolumeL = clampChamber(params.chamberVolumeL);
  const partVolumeCm3 = clampPart(params.partVolumeCm3);
  const tempDelta = clampTemp(params.chamberTemperatureC, material.tempRef);
  const temperatureFactor = Math.exp(-tempDelta * material.tempSlope);
  const chamberFactor = Math.pow(chamberVolumeL / 8, 0.18);
  const partFactor = Math.pow(partVolumeCm3 / 60, 0.14);
  const detailFactor = DETAIL_FACTOR[params.surfaceDetail] ?? 1;
  const rawSeconds = material.seconds * temperatureFactor * chamberFactor * partFactor * detailFactor;
  const exposureSeconds = computeExposure(rawSeconds, params.material);
  const vaporIntensity = computeVaporIntensity(params.chamberTemperatureC, material.tempRef, partVolumeCm3, chamberVolumeL);
  const riskScore = computeRisk({ tempC: params.chamberTemperatureC, ref: material.tempRef, detail: params.surfaceDetail, chamberL: chamberVolumeL, partCm3: partVolumeCm3 });
  const recommendation = computeRecommendation(riskScore);
  const dryHours = computeDryHours(material.dryHours, partFactor, params.surfaceDetail === 'fine');
  return {
    exposureSeconds,
    exposureMinutes: exposureSeconds / 60,
    dryHours,
    vaporIntensity,
    riskScore,
    recommendation,
    trialSeconds: computeTrial(exposureSeconds),
  };
};
