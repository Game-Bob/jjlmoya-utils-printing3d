export type UnitSystem = 'metric' | 'imperial';

export interface GradientInput {
  colorCycleLengthM: number;
  partWeightG: number;
  densityGcm3: number;
  filamentDiameterMm: number;
  partHeightMm: number;
  startOffsetM: number;
}

export interface GradientBand {
  index: number;
  startMm: number;
  endMm: number;
  startPercent: number;
  endPercent: number;
  colorIndex: number;
}

export interface GradientResult {
  filamentUsedM: number;
  cyclesInPart: number;
  gramsPerCycle: number;
  heightPerCycleMm: number;
  phaseStartPercent: number;
  phaseEndPercent: number;
  bands: GradientBand[];
}

const FILAMENT_COLORS = 6;

export function calculateGradient(input: GradientInput): GradientResult {
  const radiusCm = (input.filamentDiameterMm / 10) / 2;
  const filamentAreaCm2 = Math.PI * radiusCm * radiusCm;
  const filamentVolumeCm3 = input.partWeightG / input.densityGcm3;
  const filamentUsedM = filamentVolumeCm3 / filamentAreaCm2 / 100;
  const cyclesInPart = filamentUsedM / input.colorCycleLengthM;
  const gramsPerMeter = filamentAreaCm2 * 100 * input.densityGcm3;
  const gramsPerCycle = gramsPerMeter * input.colorCycleLengthM;
  const heightPerCycleMm = cyclesInPart > 0 ? input.partHeightMm / cyclesInPart : 0;
  const phaseStartPercent = ((input.startOffsetM % input.colorCycleLengthM) / input.colorCycleLengthM) * 100;
  const phaseEndPercent = ((input.startOffsetM + filamentUsedM) % input.colorCycleLengthM) / input.colorCycleLengthM * 100;
  const bands = buildBands(input.partHeightMm, cyclesInPart, input.startOffsetM, input.colorCycleLengthM);

  return {
    filamentUsedM,
    cyclesInPart,
    gramsPerCycle,
    heightPerCycleMm,
    phaseStartPercent,
    phaseEndPercent,
    bands,
  };
}

function buildBands(partHeightMm: number, cyclesInPart: number, startOffsetM: number, cycleLengthM: number): GradientBand[] {
  if (partHeightMm <= 0 || cyclesInPart <= 0 || cycleLengthM <= 0) return [];

  const colorStep = 1 / FILAMENT_COLORS;
  const totalColorSteps = Math.ceil((cyclesInPart + colorStep) * FILAMENT_COLORS) + FILAMENT_COLORS;
  const startPhaseCycles = startOffsetM / cycleLengthM;
  const bands: GradientBand[] = [];

  for (let step = 0; step < totalColorSteps; step += 1) {
    const cycleStart = Math.floor(startPhaseCycles * FILAMENT_COLORS) / FILAMENT_COLORS + step / FILAMENT_COLORS;
    const cycleEnd = cycleStart + colorStep;
    const relativeStart = cycleStart - startPhaseCycles;
    const relativeEnd = cycleEnd - startPhaseCycles;
    const startPercent = Math.max(0, relativeStart / cyclesInPart);
    const endPercent = Math.min(1, relativeEnd / cyclesInPart);

    if (endPercent <= 0 || startPercent >= 1 || endPercent <= startPercent) continue;

    bands.push({
      index: bands.length,
      startMm: startPercent * partHeightMm,
      endMm: endPercent * partHeightMm,
      startPercent: startPercent * 100,
      endPercent: endPercent * 100,
      colorIndex: ((Math.floor(cycleStart * FILAMENT_COLORS) % FILAMENT_COLORS) + FILAMENT_COLORS) % FILAMENT_COLORS,
    });
  }

  return bands.slice(0, 72);
}

export function mmToIn(mm: number): number {
  return mm / 25.4;
}

export function inToMm(inches: number): number {
  return inches * 25.4;
}

export function gToOz(g: number): number {
  return g / 28.349523125;
}

export function ozToG(oz: number): number {
  return oz * 28.349523125;
}

