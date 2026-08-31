export type UnitSystem = 'metric' | 'imperial';

export interface NozzleFlowInput {
  nozzleDiameterMm: number;
  lineWidthMm: number;
  layerHeightMm: number;
  speedMmPerSecond: number;
  flowLimitMm3PerSecond: number;
}

export interface NozzleFlowResult {
  crossSectionMm2: number;
  requestedFlowMm3PerSecond: number;
  safeSpeedMmPerSecond: number;
  productionSpeedMmPerSecond: number;
  marginMm3PerSecond: number;
  loadPercent: number;
  layerRatioPercent: number;
  state: 'ready' | 'watch' | 'critical';
  layerWarning: boolean;
}

export type InverseSolveFor = 'layer' | 'width';

export interface InverseNozzleFlowInput {
  targetFlowMm3PerSecond: number;
  desiredSpeedMmPerSecond: number;
  lineWidthMm: number;
  layerHeightMm: number;
  solveFor: InverseSolveFor;
}

export interface InverseNozzleFlowResult {
  suggestedMm: number;
  targetAreaMm2: number;
  possible: boolean;
}

export const IMPERIAL_TO_MM = 25.4;

function positive(value: number): number {
  return Number.isFinite(value) && value > 0 ? value : 0;
}

export function stadiumAreaMm2(lineWidthMm: number, layerHeightMm: number): number {
  const width = positive(lineWidthMm);
  const height = Math.min(positive(layerHeightMm), width);
  return (width - height) * height + (Math.PI * height * height) / 4;
}

export function calculateNozzleFlow(input: NozzleFlowInput): NozzleFlowResult {
  const area = stadiumAreaMm2(input.lineWidthMm, input.layerHeightMm);
  const speed = positive(input.speedMmPerSecond);
  const limit = positive(input.flowLimitMm3PerSecond);
  const requested = area * speed;
  const safeSpeed = area > 0 && limit > 0 ? limit / area : 0;
  const productionSpeed = safeSpeed * 0.85;
  const margin = limit - requested;
  const load = limit > 0 ? (requested / limit) * 100 : 0;
  const layerRatio = input.nozzleDiameterMm > 0
    ? (input.layerHeightMm / input.nozzleDiameterMm) * 100
    : 0;
  let state: NozzleFlowResult['state'] = 'critical';
  if (load <= 70) state = 'ready';
  else if (load <= 100) state = 'watch';
  return {
    crossSectionMm2: area,
    requestedFlowMm3PerSecond: requested,
    safeSpeedMmPerSecond: safeSpeed,
    productionSpeedMmPerSecond: productionSpeed,
    marginMm3PerSecond: margin,
    loadPercent: load,
    layerRatioPercent: layerRatio,
    state,
    layerWarning: layerRatio > 80,
  };
}

function solveLayerHeight(targetArea: number, widthInput: number): InverseNozzleFlowResult {
  const width = positive(widthInput);
  const coefficient = Math.PI / 4 - 1;
  const maximumArea = stadiumAreaMm2(width, width);
  const discriminant = width * width + 4 * coefficient * targetArea;
  if (width <= 0) return { suggestedMm: 0, targetAreaMm2: targetArea, possible: false };
  if (discriminant < 0) return { suggestedMm: 0, targetAreaMm2: targetArea, possible: false };
  if (targetArea > maximumArea) return { suggestedMm: 0, targetAreaMm2: targetArea, possible: false };
  const suggested = (-width + Math.sqrt(discriminant)) / (2 * coefficient);
  return { suggestedMm: suggested, targetAreaMm2: targetArea, possible: suggested > 0 && suggested <= width };
}

function solveLineWidth(targetArea: number, layerInput: number): InverseNozzleFlowResult {
  const layer = positive(layerInput);
  const minimumArea = stadiumAreaMm2(layer, layer);
  if (layer <= 0) return { suggestedMm: 0, targetAreaMm2: targetArea, possible: false };
  if (targetArea < minimumArea) return { suggestedMm: 0, targetAreaMm2: targetArea, possible: false };
  const suggested = targetArea / layer + (1 - Math.PI / 4) * layer;
  return { suggestedMm: suggested, targetAreaMm2: targetArea, possible: suggested >= layer };
}

export function calculateInverseNozzleFlow(input: InverseNozzleFlowInput): InverseNozzleFlowResult {
  const targetFlow = positive(input.targetFlowMm3PerSecond);
  const speed = positive(input.desiredSpeedMmPerSecond);
  const targetArea = speed > 0 ? targetFlow / speed : 0;
  if (targetArea <= 0) return { suggestedMm: 0, targetAreaMm2: 0, possible: false };
  if (input.solveFor === 'layer') return solveLayerHeight(targetArea, input.lineWidthMm);
  return solveLineWidth(targetArea, input.layerHeightMm);
}

export function convertToMetric(value: number, kind: 'length' | 'speed' | 'flow', system: UnitSystem): number {
  if (system === 'metric') return value;
  if (kind === 'length') return value * IMPERIAL_TO_MM;
  if (kind === 'speed') return value * IMPERIAL_TO_MM;
  return value * IMPERIAL_TO_MM ** 3;
}

export function convertFromMetric(value: number, kind: 'length' | 'speed' | 'flow', system: UnitSystem): number {
  if (system === 'metric') return value;
  if (kind === 'length') return value / IMPERIAL_TO_MM;
  if (kind === 'speed') return value / IMPERIAL_TO_MM;
  return value / IMPERIAL_TO_MM ** 3;
}
