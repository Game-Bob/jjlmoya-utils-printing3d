export type StructuralMaterial = 'pla' | 'petg' | 'abs' | 'pc' | 'nylon';
export type InfillPattern = 'grid' | 'gyroid' | 'cubic';
export type LoadAxis = 'x' | 'y' | 'z';
export type LayerRelation = 'parallel' | 'perpendicular';
export type PrintQuality = 'draft' | 'standard' | 'highStrength';

export interface MechanicalAxisStrengthParams {
  material: StructuralMaterial;
  infillPercent: number;
  infillPattern: InfillPattern;
  perimeters: number;
  loadAxis?: LoadAxis;
  sectionWidthMm?: number;
  sectionHeightMm?: number;
  lineWidthMm?: number;
  printQuality?: PrintQuality;
}

export interface MechanicalAxisStrengthResult {
  tensileStrengthMpa: number;
  elasticModulusGpa: number;
  criticalDelaminationAxis: LoadAxis;
  layerRelation: LayerRelation;
  anisotropyPenaltyPercent: number;
  xStrengthMpa: number;
  yStrengthMpa: number;
  zStrengthMpa: number;
  nominalAreaMm2: number;
  effectiveAreaMm2: number;
  maxForceN: number;
  maxLoadKg: number;
  currentWallLoadKg: number;
  fourWallLoadKg: number;
  fourWallForceN: number;
  failureMode: 'road fracture' | 'layer delamination';
  declaredOrientation: boolean;
}

interface MaterialProfile {
  tensileMpa: number;
  modulusGpa: number;
  zFactor: number;
}

interface StrengthContext {
  material: MaterialProfile;
  pattern: (typeof INFILL_FACTORS)[InfillPattern];
  printQuality: (typeof QUALITY_FACTORS)[PrintQuality];
  infill: number;
}

interface AxisStrengths {
  xStrengthMpa: number;
  yStrengthMpa: number;
  zStrengthMpa: number;
}

const MATERIALS: Record<StructuralMaterial, MaterialProfile> = {
  pla: { tensileMpa: 58, modulusGpa: 3.3, zFactor: 0.42 },
  petg: { tensileMpa: 50, modulusGpa: 2.1, zFactor: 0.46 },
  abs: { tensileMpa: 42, modulusGpa: 1.9, zFactor: 0.38 },
  pc: { tensileMpa: 66, modulusGpa: 2.4, zFactor: 0.48 },
  nylon: { tensileMpa: 62, modulusGpa: 1.6, zFactor: 0.44 },
};

const INFILL_FACTORS: Record<InfillPattern, { strength: number; zSupport: number; modulus: number; areaEfficiency: number }> = {
  grid: { strength: 0.94, zSupport: 0.9, modulus: 1.02, areaEfficiency: 0.55 },
  gyroid: { strength: 1.02, zSupport: 1.08, modulus: 0.96, areaEfficiency: 0.68 },
  cubic: { strength: 1.08, zSupport: 1.0, modulus: 1.06, areaEfficiency: 0.64 },
};

const QUALITY_FACTORS: Record<PrintQuality, { xy: number; z: number; modulus: number }> = {
  draft: { xy: 0.88, z: 0.76, modulus: 0.92 },
  standard: { xy: 1, z: 1, modulus: 1 },
  highStrength: { xy: 1.08, z: 1.22, modulus: 1.04 },
};

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);
const roundTo = (value: number, digits: number) => Number(value.toFixed(digits));

const infillEfficiency = (infillPercent: number) => {
  const ratio = clamp(infillPercent, 0, 100) / 100;
  return 0.34 + Math.pow(ratio, 0.72) * 0.66;
};

const perimeterEfficiency = (perimeters: number) => {
  const shells = clamp(perimeters, 1, 12);
  return 0.82 + Math.min(shells, 8) * 0.045;
};

const effectiveAreaFactor = (opts: { infillPercent: number; perimeters: number; sectionWidthMm: number; sectionHeightMm: number; lineWidthMm: number; pattern: InfillPattern }) => {
  const width = clamp(opts.sectionWidthMm, 1, 500);
  const height = clamp(opts.sectionHeightMm, 1, 500);
  const lineWidth = clamp(opts.lineWidthMm, 0.2, 1.2);
  const perimeters = clamp(opts.perimeters, 1, 12);
  const nominalArea = width * height;
  const shellThickness = Math.min(Math.min(width, height) / 2, perimeters * lineWidth);
  const innerWidth = Math.max(0, width - shellThickness * 2);
  const innerHeight = Math.max(0, height - shellThickness * 2);
  const innerArea = innerWidth * innerHeight;
  const shellArea = nominalArea - innerArea;
  const pattern = INFILL_FACTORS[opts.pattern] ?? INFILL_FACTORS.gyroid;
  const infillArea = innerArea * (clamp(opts.infillPercent, 0, 100) / 100) * pattern.areaEfficiency;
  return {
    nominalArea,
    effectiveArea: Math.max(lineWidth * lineWidth, shellArea + infillArea),
  };
};

const validateLoadAxis = (loadAxis?: LoadAxis): LoadAxis => {
  if (loadAxis === 'x' || loadAxis === 'y' || loadAxis === 'z') return loadAxis;
  throw new Error('loadAxis is required because FDM tensile strength depends on orientation relative to layer deposition.');
};

const getAxisStrength = (axis: LoadAxis, strengths: AxisStrengths) => {
  if (axis === 'x') return strengths.xStrengthMpa;
  if (axis === 'y') return strengths.yStrengthMpa;
  return strengths.zStrengthMpa;
};

const getAxisModulusFactor = (axis: LoadAxis) => {
  if (axis === 'z') return 0.55;
  if (axis === 'y') return 0.94;
  return 1;
};

const getCriticalAxis = (strengths: AxisStrengths): LoadAxis => {
  const minStrength = Math.min(strengths.xStrengthMpa, strengths.yStrengthMpa, strengths.zStrengthMpa);
  if (minStrength === strengths.zStrengthMpa) return 'z';
  if (minStrength === strengths.yStrengthMpa) return 'y';
  return 'x';
};

const getStrengths = (context: StrengthContext, perimeters: number): AxisStrengths => {
  const shells = perimeterEfficiency(perimeters);
  const xyBase = context.material.tensileMpa * context.infill * shells * context.pattern.strength * context.printQuality.xy;
  return {
    xStrengthMpa: xyBase,
    yStrengthMpa: xyBase * 0.93,
    zStrengthMpa: xyBase * context.material.zFactor * context.pattern.zSupport * context.printQuality.z * (0.9 + Math.min(perimeters, 8) * 0.018),
  };
};

const getSection = (params: MechanicalAxisStrengthParams, perimeters: number) => {
  const sectionWidthMm = clamp(params.sectionWidthMm ?? 20, 1, 500);
  const sectionHeightMm = clamp(params.sectionHeightMm ?? 10, 1, 500);
  const lineWidthMm = clamp(params.lineWidthMm ?? 0.45, 0.2, 1.2);
  const area = effectiveAreaFactor({ infillPercent: params.infillPercent, perimeters, sectionWidthMm, sectionHeightMm, lineWidthMm, pattern: params.infillPattern });
  return { area, sectionWidthMm, sectionHeightMm, lineWidthMm };
};

const getWallForce = (opts: { axis: LoadAxis; context: StrengthContext; effectiveArea: number; perimeters: number }) => {
  const strengths = getStrengths(opts.context, opts.perimeters);
  return getAxisStrength(opts.axis, strengths) * opts.effectiveArea;
};

const toResult = (opts: {
  loadAxis: LoadAxis;
  context: StrengthContext;
  strengths: AxisStrengths;
  section: ReturnType<typeof getSection>;
  selectedStrength: number;
  maxForceN: number;
  fourWallForce: number;
}): MechanicalAxisStrengthResult => {
  const xyMaxStrength = Math.max(opts.strengths.xStrengthMpa, opts.strengths.yStrengthMpa);
  return {
    tensileStrengthMpa: roundTo(opts.selectedStrength, 1),
    elasticModulusGpa: roundTo(opts.context.material.modulusGpa * (0.42 + opts.context.infill * 0.58) * opts.context.pattern.modulus * opts.context.printQuality.modulus * getAxisModulusFactor(opts.loadAxis), 2),
    criticalDelaminationAxis: getCriticalAxis(opts.strengths),
    layerRelation: opts.loadAxis === 'z' ? 'perpendicular' : 'parallel',
    anisotropyPenaltyPercent: roundTo(((xyMaxStrength - opts.strengths.zStrengthMpa) / xyMaxStrength) * 100, 0),
    xStrengthMpa: roundTo(opts.strengths.xStrengthMpa, 1),
    yStrengthMpa: roundTo(opts.strengths.yStrengthMpa, 1),
    zStrengthMpa: roundTo(opts.strengths.zStrengthMpa, 1),
    nominalAreaMm2: roundTo(opts.section.area.nominalArea, 1),
    effectiveAreaMm2: roundTo(opts.section.area.effectiveArea, 1),
    maxForceN: roundTo(opts.maxForceN, 0),
    maxLoadKg: roundTo(opts.maxForceN / 9.80665, 1),
    currentWallLoadKg: roundTo(opts.maxForceN / 9.80665, 1),
    fourWallLoadKg: roundTo(opts.fourWallForce / 9.80665, 1),
    fourWallForceN: roundTo(opts.fourWallForce, 0),
    failureMode: opts.loadAxis === 'z' ? 'layer delamination' : 'road fracture',
    declaredOrientation: true,
  };
};

export const calculateMechanicalAxisStrength = (params: MechanicalAxisStrengthParams): MechanicalAxisStrengthResult => {
  const loadAxis = validateLoadAxis(params.loadAxis);
  const perimeters = clamp(params.perimeters, 1, 12);
  const material = MATERIALS[params.material] ?? MATERIALS.pla;
  const pattern = INFILL_FACTORS[params.infillPattern] ?? INFILL_FACTORS.gyroid;
  const printQuality = QUALITY_FACTORS[params.printQuality ?? 'standard'];
  const context = { material, pattern, printQuality, infill: infillEfficiency(params.infillPercent) };
  const strengths = getStrengths(context, perimeters);
  const section = getSection(params, perimeters);
  const selectedStrength = getAxisStrength(loadAxis, strengths);
  const maxForceN = selectedStrength * section.area.effectiveArea;
  const fourWallPerimeters = Math.max(perimeters, 4);
  const fourWallArea = getSection(params, fourWallPerimeters).area;
  const fourWallForce = getWallForce({ axis: loadAxis, context, effectiveArea: fourWallArea.effectiveArea, perimeters: fourWallPerimeters });
  return toResult({ loadAxis, context, strengths, section, selectedStrength, maxForceN, fourWallForce });
};
