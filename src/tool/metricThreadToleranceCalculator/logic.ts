export type ThreadTechnology = 'resin' | 'fdm-standard' | 'fdm-calibrated';
export type ThreadMaterial = 'pla' | 'petg' | 'abs-asa' | 'nylon' | 'tpu';

export interface MetricThreadPreset {
  label: string;
  diameterMm: number;
  pitchMm: number;
}

export interface MetricThreadToleranceParams {
  diameterMm: number;
  pitchMm: number;
  technology: ThreadTechnology;
  material: ThreadMaterial;
}

export interface MetricThreadToleranceResult {
  correctionMm: number;
  maleCadDiameterMm: number;
  femaleCadDiameterMm: number;
  radialClearanceMm: number;
  totalDiametralClearanceMm: number;
  technologyFactor: number;
  materialMultiplier: number;
  effectiveCorrectionMm: number;
  warning: 'none' | 'flexible-material';
}

export const ISO_METRIC_THREADS: MetricThreadPreset[] = [
  { label: 'M3', diameterMm: 3, pitchMm: 0.5 },
  { label: 'M4', diameterMm: 4, pitchMm: 0.7 },
  { label: 'M5', diameterMm: 5, pitchMm: 0.8 },
  { label: 'M6', diameterMm: 6, pitchMm: 1 },
  { label: 'M8', diameterMm: 8, pitchMm: 1.25 },
  { label: 'M10', diameterMm: 10, pitchMm: 1.5 },
  { label: 'M12', diameterMm: 12, pitchMm: 1.75 },
];

export const TECHNOLOGY_FACTORS: Record<ThreadTechnology, number> = {
  resin: 0.5,
  'fdm-standard': 1,
  'fdm-calibrated': 0.8,
};

export const MATERIAL_MULTIPLIERS: Record<ThreadMaterial, number> = {
  pla: 1,
  petg: 1.08,
  'abs-asa': 1.12,
  nylon: 1.15,
  tpu: 1.35,
};

const clampPositive = (value: number, fallback: number) => (Number.isFinite(value) && value > 0 ? value : fallback);

export const calculateThreadCorrection = (diameterMm: number, pitchMm: number, technology: ThreadTechnology) => {
  const diameter = clampPositive(diameterMm, 3);
  const pitch = clampPositive(pitchMm, 0.5);
  return TECHNOLOGY_FACTORS[technology] * Math.sqrt(pitch) * Math.log10(diameter);
};

export const calculateMetricThreadTolerance = (
  params: MetricThreadToleranceParams,
): MetricThreadToleranceResult => {
  const diameter = clampPositive(params.diameterMm, 3);
  const pitch = clampPositive(params.pitchMm, 0.5);
  const technologyFactor = TECHNOLOGY_FACTORS[params.technology];
  const materialMultiplier = MATERIAL_MULTIPLIERS[params.material];
  const correctionMm = calculateThreadCorrection(diameter, pitch, params.technology);
  const effectiveCorrectionMm = correctionMm * materialMultiplier;

  return {
    correctionMm,
    maleCadDiameterMm: diameter - effectiveCorrectionMm,
    femaleCadDiameterMm: diameter + effectiveCorrectionMm,
    radialClearanceMm: effectiveCorrectionMm / 2,
    totalDiametralClearanceMm: effectiveCorrectionMm * 2,
    technologyFactor,
    materialMultiplier,
    effectiveCorrectionMm,
    warning: params.material === 'tpu' ? 'flexible-material' : 'none',
  };
};
