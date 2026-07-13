export type UnitSystem = 'metric' | 'imperial';

export interface FilamentMaterial {
  id: string;
  density: number;
}

export interface FilamentWeightLengthParams {
  weightGrams: number;
  density: number;
  diameterMm: number;
  remainingGrams?: number;
}

export interface FilamentWeightLengthResult {
  sectionAreaMm2: number;
  volumeCm3: number;
  lengthMeters: number;
  gramsPerMeter: number;
  hasStockCheck: boolean;
  isEnough: boolean;
  deltaGrams: number;
  deltaMeters: number;
}

export const FILAMENT_MATERIALS: FilamentMaterial[] = [
  { id: 'pla', density: 1.24 },
  { id: 'petg', density: 1.27 },
  { id: 'abs', density: 1.04 },
  { id: 'asa', density: 1.07 },
  { id: 'tpu', density: 1.21 },
  { id: 'pa', density: 1.14 },
  { id: 'pc', density: 1.20 },
  { id: 'wood', density: 1.28 },
  { id: 'carbon', density: 1.30 },
  { id: 'metal', density: 2.30 },
];

export const MATERIAL_COLORS: Record<string, string> = {
  pla: '#28c7a7',
  petg: '#29a8ff',
  abs: '#f59e0b',
  asa: '#ef6f6c',
  tpu: '#9b7cff',
  pa: '#4f9f72',
  pc: '#7dd3fc',
  wood: '#b98245',
  carbon: '#475569',
  metal: '#a8a29e',
};


const positive = (value: number, fallback: number) => (Number.isFinite(value) && value > 0 ? value : fallback);

export const calculateFilamentWeightLength = (params: FilamentWeightLengthParams): FilamentWeightLengthResult => {
  const weightGrams = positive(params.weightGrams, 0.01);
  const density = positive(params.density, 1.24);
  const diameterMm = positive(params.diameterMm, 1.75);
  const radiusMm = diameterMm / 2;
  const sectionAreaMm2 = Math.PI * radiusMm * radiusMm;
  const volumeCm3 = weightGrams / density;
  const lengthMeters = (volumeCm3 * 1000) / sectionAreaMm2 / 1000;
  const gramsPerMeter = weightGrams / lengthMeters;
  const remainingGrams = params.remainingGrams;
  const hasStockCheck = Number.isFinite(remainingGrams) && remainingGrams !== undefined && remainingGrams >= 0;
  const deltaGrams = hasStockCheck ? remainingGrams - weightGrams : 0;
  const deltaMeters = hasStockCheck ? deltaGrams / gramsPerMeter : 0;

  return {
    sectionAreaMm2,
    volumeCm3,
    lengthMeters,
    gramsPerMeter,
    hasStockCheck,
    isEnough: hasStockCheck ? deltaGrams >= 0 : true,
    deltaGrams,
    deltaMeters,
  };
};

export const toGrams = (value: number, unitSystem: UnitSystem) => {
  return unitSystem === 'imperial' ? value * 28.349523125 : value;
};

export const fromGrams = (value: number, unitSystem: UnitSystem) => {
  return unitSystem === 'imperial' ? value / 28.349523125 : value;
};

export const toMm = (value: number, unitSystem: UnitSystem) => {
  return unitSystem === 'imperial' ? value * 25.4 : value;
};

export const fromMm = (value: number, unitSystem: UnitSystem) => {
  return unitSystem === 'imperial' ? value / 25.4 : value;
};

export interface ConvertedValues {
  length: number;
  volume: number;
  area: number;
  deltaLength: number;
  gramsPerLength: number;
}

export const getConvertedValues = (result: FilamentWeightLengthResult, unitSystem: UnitSystem): ConvertedValues => {
  const isImperial = unitSystem === 'imperial';
  return {
    length: isImperial ? result.lengthMeters * 3.280839895 : result.lengthMeters,
    volume: isImperial ? result.volumeCm3 * 0.0610237441 : result.volumeCm3,
    area: isImperial ? result.sectionAreaMm2 / 645.16 : result.sectionAreaMm2,
    deltaLength: isImperial ? result.deltaMeters * 3.280839895 : result.deltaMeters,
    gramsPerLength: isImperial ? result.gramsPerMeter / 3.280839895 / 28.349523125 : result.gramsPerMeter,
  };
};

