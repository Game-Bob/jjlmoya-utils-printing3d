export interface TreeSupportDensityParams {
  supportHeightMm: number;
  branchAngleDeg: number;
  branchDensityPercent: number;
  baseTrunkDiameterMm: number;
}

export interface TreeSupportDensityResult {
  topCanopyDiameterMm: number;
  estimatedSupportVolumeCm3: number;
  trunkVolumeCm3: number;
  branchVolumeCm3: number;
  branchCount: number;
  stabilityScore: number;
  stability: 'low' | 'balanced' | 'high';
  filamentMassG: number;
  contactDiameterMm: number;
}

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);
const roundTo = (value: number, decimals: number) => Number(value.toFixed(decimals));

const cylinderVolumeCm3 = (diameterMm: number, lengthMm: number) => {
  const radiusMm = diameterMm / 2;
  return (Math.PI * radiusMm * radiusMm * lengthMm) / 1000;
};

const getStability = (score: number): TreeSupportDensityResult['stability'] => {
  if (score < 52) return 'low';
  if (score < 76) return 'balanced';
  return 'high';
};

const getGeometry = (opts: { supportHeightMm: number; branchAngleDeg: number; branchDensityPercent: number; baseTrunkDiameterMm: number }) => {
  const angleRad = (opts.branchAngleDeg * Math.PI) / 180;
  const branchReachMm = Math.tan(angleRad) * opts.supportHeightMm * 0.34;
  const densitySpreadFactor = 0.72 + opts.branchDensityPercent / 125;
  const topCanopyDiameterMm = Math.max(opts.baseTrunkDiameterMm * 1.7, branchReachMm * densitySpreadFactor + opts.baseTrunkDiameterMm);
  const branchCount = Math.round(clamp(3 + opts.branchDensityPercent / 7 + opts.supportHeightMm / 42, 4, 22));
  const averageBranchLengthMm = Math.sqrt(Math.pow(topCanopyDiameterMm / 2, 2) + Math.pow(opts.supportHeightMm * 0.28, 2));
  const branchDiameterMm = clamp(opts.baseTrunkDiameterMm * (0.34 + opts.branchDensityPercent / 260), 0.55, opts.baseTrunkDiameterMm * 0.72);
  return { topCanopyDiameterMm, branchCount, averageBranchLengthMm, branchDiameterMm };
};

const getVolumes = (opts: { supportHeightMm: number; branchDensityPercent: number; baseTrunkDiameterMm: number; branchDiameterMm: number; averageBranchLengthMm: number; branchCount: number }) => {
  const trunkVolumeCm3 = cylinderVolumeCm3(opts.baseTrunkDiameterMm, opts.supportHeightMm) * 0.86;
  const rawBranchVolumeCm3 = cylinderVolumeCm3(opts.branchDiameterMm, opts.averageBranchLengthMm) * opts.branchCount;
  const branchVolumeCm3 = rawBranchVolumeCm3 * (0.62 + opts.branchDensityPercent / 180);
  return { trunkVolumeCm3, branchVolumeCm3, estimatedSupportVolumeCm3: trunkVolumeCm3 + branchVolumeCm3 };
};

const getStabilityScore = (opts: { supportHeightMm: number; branchAngleDeg: number; branchDensityPercent: number; baseTrunkDiameterMm: number; topCanopyDiameterMm: number }) => {
  const slendernessPenalty = clamp((opts.supportHeightMm / opts.baseTrunkDiameterMm - 16) * 1.55, 0, 34);
  const angleBonus = 100 - Math.abs(opts.branchAngleDeg - 42) * 1.7;
  const densityBonus = 44 + opts.branchDensityPercent * 0.58;
  const diameterBonus = clamp(opts.baseTrunkDiameterMm * 7.5, 12, 100);
  const canopyPenalty = clamp((opts.topCanopyDiameterMm / opts.baseTrunkDiameterMm - 6.5) * 4, 0, 24);
  return clamp(angleBonus * 0.28 + densityBonus * 0.28 + diameterBonus * 0.28 + 36 - slendernessPenalty - canopyPenalty, 0, 100);
};

export const calculateTreeSupportDensity = (params: TreeSupportDensityParams): TreeSupportDensityResult => {
  const supportHeightMm = clamp(params.supportHeightMm, 5, 320);
  const branchAngleDeg = clamp(params.branchAngleDeg, 15, 70);
  const branchDensityPercent = clamp(params.branchDensityPercent, 5, 90);
  const baseTrunkDiameterMm = clamp(params.baseTrunkDiameterMm, 1, 18);
  const geometry = getGeometry({ supportHeightMm, branchAngleDeg, branchDensityPercent, baseTrunkDiameterMm });
  const volumes = getVolumes({ supportHeightMm, branchDensityPercent, baseTrunkDiameterMm, ...geometry });
  const contactDiameterMm = clamp(geometry.branchDiameterMm * 0.72, 0.35, 2.8);
  const stabilityScore = getStabilityScore({ supportHeightMm, branchAngleDeg, branchDensityPercent, baseTrunkDiameterMm, topCanopyDiameterMm: geometry.topCanopyDiameterMm });

  return {
    topCanopyDiameterMm: roundTo(geometry.topCanopyDiameterMm, 1),
    estimatedSupportVolumeCm3: roundTo(volumes.estimatedSupportVolumeCm3, 2),
    trunkVolumeCm3: roundTo(volumes.trunkVolumeCm3, 2),
    branchVolumeCm3: roundTo(volumes.branchVolumeCm3, 2),
    branchCount: geometry.branchCount,
    stabilityScore: roundTo(stabilityScore, 0),
    stability: getStability(stabilityScore),
    filamentMassG: roundTo(volumes.estimatedSupportVolumeCm3 * 1.24, 1),
    contactDiameterMm: roundTo(contactDiameterMm, 2),
  };
};
