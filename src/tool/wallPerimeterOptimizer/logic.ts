export type WallPerimeterVerdict = 'exact' | 'adjust' | 'impossible';

export interface WallPerimeterOptimizerParams {
  nozzleDiameterMm: number;
  lineWidthMm: number;
  cadWallThicknessMm: number;
}

export interface WallPerimeterCandidate {
  perimeters: number;
  lineWidthMm: number;
  realThicknessMm: number;
  residualMm: number;
}

export interface WallPerimeterOptimizerResult extends WallPerimeterCandidate {
  verdict: WallPerimeterVerdict;
  safeMinLineWidthMm: number;
  safeMaxLineWidthMm: number;
  adjustedLineWidthMm: number | null;
  adjustedRealThicknessMm: number | null;
  adjustedResidualMm: number | null;
  nozzleTooLarge: boolean;
  messageKey: 'exact' | 'adjust' | 'tooThin' | 'outsideRange';
  candidates: WallPerimeterCandidate[];
}

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);
const round3 = (value: number) => Math.round(value * 1000) / 1000;

interface NormalizedWallPerimeterParams {
  nozzleDiameterMm: number;
  safeMinLineWidthMm: number;
  safeMaxLineWidthMm: number;
  lineWidthMm: number;
  cadWallThicknessMm: number;
  nozzleTooLarge: boolean;
  maxPerimeters: number;
}

type AdjustmentCandidate = WallPerimeterCandidate & {
  adjustedLineWidthMm: number;
  widthChangeMm: number;
};

const normalizeParams = (params: WallPerimeterOptimizerParams): NormalizedWallPerimeterParams => {
  const nozzleDiameterMm = clamp(params.nozzleDiameterMm || 0.4, 0.1, 1.2);
  const safeMinLineWidthMm = round3(nozzleDiameterMm * 0.8);
  const safeMaxLineWidthMm = round3(nozzleDiameterMm * 1.2);
  const lineWidthMm = clamp(params.lineWidthMm || nozzleDiameterMm * 1.05, safeMinLineWidthMm, safeMaxLineWidthMm);
  const cadWallThicknessMm = clamp(params.cadWallThicknessMm || lineWidthMm * 3, 0.05, 80);
  return {
    nozzleDiameterMm,
    safeMinLineWidthMm,
    safeMaxLineWidthMm,
    lineWidthMm,
    cadWallThicknessMm,
    nozzleTooLarge: cadWallThicknessMm < nozzleDiameterMm,
    maxPerimeters: Math.max(1, Math.min(160, Math.ceil(cadWallThicknessMm / safeMinLineWidthMm) + 3)),
  };
};

const buildCandidates = (settings: NormalizedWallPerimeterParams): WallPerimeterCandidate[] => {
  const { maxPerimeters, lineWidthMm, cadWallThicknessMm } = settings;
  return Array.from({ length: maxPerimeters }, (_, index) => {
    const perimeters = index + 1;
    const realThicknessMm = round3(perimeters * lineWidthMm);
    const residualMm = round3(Math.abs(cadWallThicknessMm - realThicknessMm));
    return { perimeters, lineWidthMm: round3(lineWidthMm), realThicknessMm, residualMm };
  }).sort((a, b) => a.residualMm - b.residualMm || a.perimeters - b.perimeters);
};

const buildAdjustmentOptions = (settings: NormalizedWallPerimeterParams): AdjustmentCandidate[] => {
  const { maxPerimeters, cadWallThicknessMm, safeMinLineWidthMm, safeMaxLineWidthMm, lineWidthMm } = settings;
  return Array.from({ length: maxPerimeters }, (_, index) => {
    const perimeters = index + 1;
    const exactWidth = cadWallThicknessMm / perimeters;
    if (exactWidth < safeMinLineWidthMm || exactWidth > safeMaxLineWidthMm) return null;
    return {
      perimeters,
      lineWidthMm: round3(lineWidthMm),
      realThicknessMm: round3(perimeters * lineWidthMm),
      residualMm: round3(Math.abs(cadWallThicknessMm - perimeters * lineWidthMm)),
      adjustedLineWidthMm: round3(exactWidth),
      widthChangeMm: Math.abs(exactWidth - lineWidthMm),
    };
  }).filter((option): option is AdjustmentCandidate => option !== null)
    .sort((a, b) => a.widthChangeMm - b.widthChangeMm || a.perimeters - b.perimeters);
};

const getVerdict = (nozzleTooLarge: boolean, residualMm: number, adjustedLineWidthMm: number | null): WallPerimeterVerdict => {
  if (nozzleTooLarge) return 'impossible';
  if (residualMm <= 0.05) return 'exact';
  if (adjustedLineWidthMm) return 'adjust';
  return 'impossible';
};

const getMessageKey = (
  nozzleTooLarge: boolean,
  verdict: WallPerimeterVerdict,
): WallPerimeterOptimizerResult['messageKey'] => {
  if (nozzleTooLarge) return 'tooThin';
  if (verdict === 'exact') return 'exact';
  if (verdict === 'adjust') return 'adjust';
  return 'outsideRange';
};

export const calculateWallPerimeterOptimizer = (params: WallPerimeterOptimizerParams): WallPerimeterOptimizerResult => {
  const settings = normalizeParams(params);
  const candidates = buildCandidates(settings);
  const best = candidates[0];
  const adjustmentOptions = buildAdjustmentOptions(settings);

  const adjustment = !settings.nozzleTooLarge && best.residualMm > 0.05 ? adjustmentOptions[0] : null;
  const recommended = adjustment ?? best;
  let adjustedLineWidthMm: number | null = null;
  let adjustedRealThicknessMm: number | null = null;
  let adjustedResidualMm: number | null = null;

  if (adjustment) {
    adjustedLineWidthMm = adjustment.adjustedLineWidthMm;
    adjustedRealThicknessMm = round3(adjustedLineWidthMm * adjustment.perimeters);
    adjustedResidualMm = round3(Math.abs(settings.cadWallThicknessMm - adjustedRealThicknessMm));
  }

  const verdict = getVerdict(settings.nozzleTooLarge, best.residualMm, adjustedLineWidthMm);

  return {
    ...recommended,
    verdict,
    safeMinLineWidthMm: settings.safeMinLineWidthMm,
    safeMaxLineWidthMm: settings.safeMaxLineWidthMm,
    adjustedLineWidthMm,
    adjustedRealThicknessMm,
    adjustedResidualMm,
    nozzleTooLarge: settings.nozzleTooLarge,
    messageKey: getMessageKey(settings.nozzleTooLarge, verdict),
    candidates: candidates.slice(0, 5),
  };
};
