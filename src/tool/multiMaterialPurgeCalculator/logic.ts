export type FilamentColorId = 'white' | 'natural' | 'yellow' | 'red' | 'blue' | 'green' | 'gray' | 'black';

export interface FilamentColorProfile {
  id: FilamentColorId;
  hex: string;
  opacity: number;
  pigment: number;
}

export interface PurgeTransition {
  from: FilamentColorId;
  to: FilamentColorId;
  count: number;
}

export interface MultiMaterialPurgeParams {
  objectVolumeCm3: number;
  basePurgeVolumeCm3: number;
  densityGcm3: number;
  pricePerKg: number;
  transitions: PurgeTransition[];
}

export interface TransitionResult extends PurgeTransition {
  factor: number;
  purgeVolumeCm3: number;
  wasteMassG: number;
  cost: number;
}

export interface MultiMaterialPurgeResult {
  totalPurgeVolumeCm3: number;
  objectVolumeCm3: number;
  totalVolumeCm3: number;
  wasteMassG: number;
  wasteCost: number;
  purgeRatio: number;
  objectRatio: number;
  severity: 'efficient' | 'watch' | 'high';
  transitions: TransitionResult[];
}

export const colorProfiles: Record<FilamentColorId, FilamentColorProfile> = {
  white: { id: 'white', hex: '#f8fafc', opacity: 0.96, pigment: 0.12 },
  natural: { id: 'natural', hex: '#f6e7c2', opacity: 0.42, pigment: 0.16 },
  yellow: { id: 'yellow', hex: '#f5c84b', opacity: 0.74, pigment: 0.42 },
  red: { id: 'red', hex: '#d94141', opacity: 0.82, pigment: 0.72 },
  blue: { id: 'blue', hex: '#2f6fe4', opacity: 0.78, pigment: 0.66 },
  green: { id: 'green', hex: '#26a269', opacity: 0.76, pigment: 0.58 },
  gray: { id: 'gray', hex: '#818a95', opacity: 0.86, pigment: 0.46 },
  black: { id: 'black', hex: '#111827', opacity: 0.98, pigment: 1 },
};

export const transitionFactorMatrix: Record<FilamentColorId, Record<FilamentColorId, number>> = {
  white: { white: 0, natural: 0.55, yellow: 0.7, red: 0.78, blue: 0.82, green: 0.78, gray: 0.68, black: 0.8 },
  natural: { white: 1.15, natural: 0, yellow: 0.62, red: 0.82, blue: 0.86, green: 0.78, gray: 0.72, black: 0.88 },
  yellow: { white: 1.35, natural: 0.75, yellow: 0, red: 0.82, blue: 0.92, green: 0.78, gray: 0.82, black: 0.95 },
  red: { white: 1.48, natural: 0.92, yellow: 1.08, red: 0, blue: 0.92, green: 0.9, gray: 0.86, black: 0.82 },
  blue: { white: 1.52, natural: 0.96, yellow: 1.12, red: 0.96, blue: 0, green: 0.82, gray: 0.88, black: 0.84 },
  green: { white: 1.44, natural: 0.9, yellow: 1, red: 0.9, blue: 0.86, green: 0, gray: 0.84, black: 0.82 },
  gray: { white: 1.25, natural: 0.72, yellow: 0.82, red: 0.82, blue: 0.84, green: 0.8, gray: 0, black: 0.72 },
  black: { white: 1.6, natural: 1.15, yellow: 1.42, red: 1.28, blue: 1.24, green: 1.22, gray: 1.05, black: 0 },
};

const positive = (value: number, fallback: number) => (Number.isFinite(value) && value >= 0 ? value : fallback);

const mapTransition = (
  transition: PurgeTransition,
  basePurgeVolumeCm3: number,
  densityGcm3: number,
  pricePerKg: number
): TransitionResult => {
  const count = Math.max(0, Math.round(positive(transition.count, 0)));
  const factor = transitionFactorMatrix[transition.from]?.[transition.to] ?? 1;
  const purgeVolumeCm3 = basePurgeVolumeCm3 * factor * count;
  const wasteMassG = purgeVolumeCm3 * densityGcm3;
  const cost = (wasteMassG / 1000) * pricePerKg;

  return { ...transition, count, factor, purgeVolumeCm3, wasteMassG, cost };
};

const getSeverity = (purgeRatio: number): 'efficient' | 'watch' | 'high' => {
  if (purgeRatio > 0.3) {
    return 'high';
  }
  return purgeRatio > 0.18 ? 'watch' : 'efficient';
};

export const calculateMultiMaterialPurge = (params: MultiMaterialPurgeParams): MultiMaterialPurgeResult => {
  const objectVolumeCm3 = positive(params.objectVolumeCm3, 120);
  const basePurgeVolumeCm3 = positive(params.basePurgeVolumeCm3, 18);
  const densityGcm3 = positive(params.densityGcm3, 1.24);
  const pricePerKg = positive(params.pricePerKg, 24);

  const transitions = params.transitions.map((t) =>
    mapTransition(t, basePurgeVolumeCm3, densityGcm3, pricePerKg)
  );

  const totalPurgeVolumeCm3 = transitions.reduce((sum, item) => sum + item.purgeVolumeCm3, 0);
  const wasteMassG = transitions.reduce((sum, item) => sum + item.wasteMassG, 0);
  const wasteCost = transitions.reduce((sum, item) => sum + item.cost, 0);
  const totalVolumeCm3 = objectVolumeCm3 + totalPurgeVolumeCm3;
  const purgeRatio = totalVolumeCm3 > 0 ? totalPurgeVolumeCm3 / totalVolumeCm3 : 0;
  const objectRatio = totalVolumeCm3 > 0 ? objectVolumeCm3 / totalVolumeCm3 : 1;

  return {
    totalPurgeVolumeCm3,
    objectVolumeCm3,
    totalVolumeCm3,
    wasteMassG,
    wasteCost,
    purgeRatio,
    objectRatio,
    severity: getSeverity(purgeRatio),
    transitions,
  };
};


