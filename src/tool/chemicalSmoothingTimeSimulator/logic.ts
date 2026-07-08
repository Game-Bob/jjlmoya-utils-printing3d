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

export const calculateChemicalSmoothingTime = (params: ChemicalSmoothingParams): ChemicalSmoothingResult => {
  const material = MATERIAL_BASE[params.material] ?? MATERIAL_BASE.abs;
  const chamberVolumeL = Math.max(params.chamberVolumeL, 0.5);
  const partVolumeCm3 = Math.max(params.partVolumeCm3, 1);
  const tempDelta = Math.max(Math.min(params.chamberTemperatureC - material.tempRef, 18), -12);
  const temperatureFactor = Math.exp(-tempDelta * material.tempSlope);
  const chamberFactor = Math.pow(chamberVolumeL / 8, 0.18);
  const partFactor = Math.pow(partVolumeCm3 / 60, 0.14);
  const detailFactor = DETAIL_FACTOR[params.surfaceDetail] ?? 1;
  const rawSeconds = material.seconds * temperatureFactor * chamberFactor * partFactor * detailFactor;
  const materialMin = params.material === 'abs' ? 90 : 70;
  const materialMax = params.material === 'abs' ? 1500 : 1080;
  const exposureSeconds = Math.round(Math.min(Math.max(rawSeconds, materialMin), materialMax) / 5) * 5;
  const vaporIntensity = Math.min(Math.max((params.chamberTemperatureC / material.tempRef) * (partVolumeCm3 / (chamberVolumeL * 1000)) * 18, 0.15), 2.8);
  const riskScore = Math.min(
    100,
    Math.round(
      28 +
        Math.max(params.chamberTemperatureC - material.tempRef, 0) * 4.2 +
        (DETAIL_FACTOR[params.surfaceDetail] - 0.72) * 28 +
        Math.max(8 - chamberVolumeL, 0) * 1.6 +
        Math.max(partVolumeCm3 - 120, 0) * 0.08,
    ),
  );
  const recommendation = riskScore >= 68 ? 'aggressive' : riskScore >= 42 ? 'standard' : 'gentle';
  const dryHours = Math.round((material.dryHours * (0.85 + partFactor * 0.25) * (params.surfaceDetail === 'fine' ? 1.15 : 1)) * 2) / 2;

  return {
    exposureSeconds,
    exposureMinutes: exposureSeconds / 60,
    dryHours,
    vaporIntensity,
    riskScore,
    recommendation,
    trialSeconds: Math.max(30, Math.round(exposureSeconds * 0.32 / 5) * 5),
  };
};
