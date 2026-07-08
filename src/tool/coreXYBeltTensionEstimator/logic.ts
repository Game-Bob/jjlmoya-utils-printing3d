export type BeltPitch = 'gt2-6' | 'gt2-9' | 'custom';
export type MeasurementMode = 'frequency' | 'deflection';

export interface CoreXYBeltTensionParams {
  spanMm: number;
  linearDensityGm: number;
  frequencyHz: number;
  deflectionMm: number;
  forceN: number;
  mode: MeasurementMode;
  recommendedMinN?: number;
  recommendedMaxN?: number;
}

export interface CoreXYBeltTensionResult {
  tensionN: number;
  tensionLbf: number;
  recommendedMinN: number;
  recommendedMaxN: number;
  targetN: number;
  frequencyAtTargetHz: number;
  frequencyMinHz: number;
  frequencyMaxHz: number;
  status: 'low' | 'ok' | 'high';
  wearIndex: number;
  deflectionAtTargetMm: number;
}

export const BELT_PRESETS: Record<BeltPitch, { label: string; densityGm: number; minN: number; maxN: number }> = {
  'gt2-6': { label: 'GT2 6 mm', densityGm: 4.1, minN: 18, maxN: 32 },
  'gt2-9': { label: 'GT2 9 mm', densityGm: 6.2, minN: 25, maxN: 45 },
  custom: { label: 'Custom', densityGm: 4.1, minN: 18, maxN: 32 },
};

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const computeStatus = (tensionN: number, min: number, max: number): 'low' | 'ok' | 'high' => {
  if (tensionN < min) return 'low';
  if (tensionN > max) return 'high';
  return 'ok';
};

const computeWearIndex = (tensionN: number, recommendedMinN: number, recommendedMaxN: number) => {
  const normalizedLoad = clamp((tensionN - recommendedMinN) / Math.max(recommendedMaxN - recommendedMinN, 1), 0, 1);
  const overload = tensionN > recommendedMaxN ? clamp((tensionN - recommendedMaxN) / recommendedMaxN, 0, 1.5) : 0;
  const slackPenalty = tensionN < recommendedMinN ? clamp((recommendedMinN - tensionN) / recommendedMinN, 0, 1) * 18 : 0;
  return clamp(28 + normalizedLoad * 42 + overload * 35 + slackPenalty, 0, 100);
};

export const calculateCoreXYBeltTension = (params: CoreXYBeltTensionParams): CoreXYBeltTensionResult => {
  const spanM = Math.max(params.spanMm, 1) / 1000;
  const linearDensityKgM = Math.max(params.linearDensityGm, 0.1) / 1000;
  const frequencyHz = Math.max(params.frequencyHz, 0);
  const deflectionM = Math.max(params.deflectionMm, 0.01) / 1000;
  const forceN = Math.max(params.forceN, 0);

  const frequencyTension = Math.pow(2 * spanM * frequencyHz, 2) * linearDensityKgM;
  const deflectionTension = (forceN * spanM) / (4 * deflectionM);
  const tensionN = params.mode === 'deflection' ? deflectionTension : frequencyTension;
  const recommendedMinN = Math.max(params.recommendedMinN ?? (params.linearDensityGm >= 5.2 ? 25 : 18), 1);
  const recommendedMaxN = Math.max(params.recommendedMaxN ?? (params.linearDensityGm >= 5.2 ? 45 : 32), recommendedMinN + 1);
  const targetN = (recommendedMinN + recommendedMaxN) / 2;
  const freq = (t: number) => Math.sqrt(t / linearDensityKgM) / (2 * spanM);
  const deflectionAtTargetMm = ((forceN * spanM) / (4 * targetN)) * 1000;
  const status = computeStatus(tensionN, recommendedMinN, recommendedMaxN);
  const wearIndex = computeWearIndex(tensionN, recommendedMinN, recommendedMaxN);

  return {
    tensionN,
    tensionLbf: tensionN * 0.224809,
    recommendedMinN,
    recommendedMaxN,
    targetN,
    frequencyAtTargetHz: freq(targetN),
    frequencyMinHz: freq(recommendedMinN),
    frequencyMaxHz: freq(recommendedMaxN),
    status,
    wearIndex,
    deflectionAtTargetMm,
  };
};
