export type FlowState = 'IDEAL_FLOW' | 'LIMIT_ZONE' | 'CRITICAL_FLOW';

export interface HotendPreset {
  id: string;
  label: string;
  limitMm3S: number;
}

export interface HotendFlowRateLimitParams {
  lineWidthMm: number;
  layerHeightMm: number;
  speedMmS: number;
  hotendLimitMm3S: number;
}

export interface HotendFlowRateLimitResult {
  flowMm3S: number;
  loadPercent: number;
  remainingMm3S: number;
  maxSafeSpeedMmS: number;
  state: FlowState;
}

export const HOTEND_PRESETS: HotendPreset[] = [
  { id: 'v6', label: 'V6 / MK8', limitMm3S: 15 },
  { id: 'revo-hf', label: 'Revo HF', limitMm3S: 18 },
  { id: 'volcano', label: 'Volcano', limitMm3S: 25 },
  { id: 'bambu-hf', label: 'Bambu HF', limitMm3S: 32 },
  { id: 'rapido-uhf', label: 'Rapido UHF', limitMm3S: 45 },
];

const positive = (value: number, fallback: number) => {
  if (!Number.isFinite(value) || value <= 0) return fallback;
  return value;
};

export const calculateHotendFlowRateLimit = (
  params: HotendFlowRateLimitParams,
): HotendFlowRateLimitResult => {
  const lineWidthMm = positive(params.lineWidthMm, 0.42);
  const layerHeightMm = positive(params.layerHeightMm, 0.2);
  const speedMmS = positive(params.speedMmS, 1);
  const hotendLimitMm3S = positive(params.hotendLimitMm3S, 1);
  const flowMm3S = lineWidthMm * layerHeightMm * speedMmS;
  const loadPercent = (flowMm3S / hotendLimitMm3S) * 100;
  let state: FlowState = 'IDEAL_FLOW';
  if (loadPercent >= 90) {
    state = 'CRITICAL_FLOW';
  } else if (loadPercent >= 70) {
    state = 'LIMIT_ZONE';
  }

  return {
    flowMm3S,
    loadPercent,
    remainingMm3S: hotendLimitMm3S - flowMm3S,
    maxSafeSpeedMmS: hotendLimitMm3S / (lineWidthMm * layerHeightMm),
    state,
  };
};
