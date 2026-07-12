export type HollowingComplexity = 'simple' | 'moderate' | 'high';
export type ResinType = 'standard' | 'tough' | 'engineering';

export interface HollowingDrainageParams {
  volumeCm3: number;
  heightMm: number;
  complexity: HollowingComplexity;
  resinType: ResinType;
}

export interface HollowingDrainageResult {
  wallThicknessMm: number;
  drainDiameterMm: number;
  minimumDrainHoles: number;
  trapFactor: number;
  theoreticalHollowVolumeCm3: number;
  adjustedResinSavingMl: number;
  trappedResinAllowanceMl: number;
}

export const COMPLEXITY_FACTORS: Record<HollowingComplexity, number> = {
  simple: 0.05,
  moderate: 0.1,
  high: 0.15,
};

export const COMPLEXITY_DRAIN_BONUS_MM: Record<HollowingComplexity, number> = {
  simple: 0,
  moderate: 0.6,
  high: 1.2,
};

export const RESIN_VISCOSITY_DRAIN_BONUS_MM: Record<ResinType, number> = {
  standard: 0,
  tough: 0.4,
  engineering: 0.8,
};

const clampNonNegative = (value: number) => Math.max(0, Number.isFinite(value) ? value : 0);
const roundTo = (value: number, decimals: number) => {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
};

export const calculateHollowingDrainage = (params: HollowingDrainageParams): HollowingDrainageResult => {
  const volumeCm3 = clampNonNegative(params.volumeCm3);
  const heightMm = clampNonNegative(params.heightMm);
  const trapFactor = COMPLEXITY_FACTORS[params.complexity] ?? COMPLEXITY_FACTORS.moderate;
  const complexityDrainBonus = COMPLEXITY_DRAIN_BONUS_MM[params.complexity] ?? COMPLEXITY_DRAIN_BONUS_MM.moderate;
  const resinDrainBonus = RESIN_VISCOSITY_DRAIN_BONUS_MM[params.resinType] ?? RESIN_VISCOSITY_DRAIN_BONUS_MM.standard;
  const wallThicknessMm = Math.max(1.5, 1.5 + heightMm / 200);
  const drainDiameterMm = 2 + complexityDrainBonus + resinDrainBonus;
  const minimumDrainHoles = volumeCm3 > 150 ? 3 : Math.max(2, volumeCm3 > 50 ? 2 : 2);
  const theoreticalHollowVolumeCm3 = Math.max(0, volumeCm3 * 0.62);
  const adjustedResinSavingMl = theoreticalHollowVolumeCm3 * (1 - trapFactor);
  const trappedResinAllowanceMl = theoreticalHollowVolumeCm3 - adjustedResinSavingMl;

  return {
    wallThicknessMm: roundTo(wallThicknessMm, 2),
    drainDiameterMm: roundTo(drainDiameterMm, 1),
    minimumDrainHoles,
    trapFactor,
    theoreticalHollowVolumeCm3: roundTo(theoreticalHollowVolumeCm3, 1),
    adjustedResinSavingMl: roundTo(adjustedResinSavingMl, 1),
    trappedResinAllowanceMl: roundTo(trappedResinAllowanceMl, 1),
  };
};
