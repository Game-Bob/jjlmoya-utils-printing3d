export type BridgeMaterial = 'pla' | 'petg' | 'abs' | 'tpu' | 'asa';
export type BridgeRiskLevel = 'green' | 'orange' | 'red';

export interface BridgingOptimizerParams {
  bridgeLengthMm: number;
  material: BridgeMaterial;
  baseSpeedMms: number;
  extrusionTemperatureC: number;
  lineWidthMm: number;
}

export interface BridgingOptimizerResult {
  bridgeSpeedMms: number;
  bridgeFanSpeedPercent: number;
  bridgeFlowRatioPercent: number;
  riskLevel: BridgeRiskLevel;
  sagIndex: number;
  estimatedSagMm: number;
  maxRecommendedLengthMm: number;
  temperatureOffsetC: number;
  adviceKey: 'safe' | 'critical' | 'supports' | 'highTemp' | 'flexible';
}

interface MaterialProfile {
  idealTemperatureC: number;
  maxLengthMm: number;
  flowBasePercent: number;
  flowDropPer50Mm: number;
  fanBasePercent: number;
  fanTempPenaltyPercent: number;
  speedStretchFactor: number;
  sagMultiplier: number;
}

const MATERIALS: Record<BridgeMaterial, MaterialProfile> = {
  pla: { idealTemperatureC: 205, maxLengthMm: 95, flowBasePercent: 96, flowDropPer50Mm: 2.2, fanBasePercent: 100, fanTempPenaltyPercent: 0, speedStretchFactor: 1.24, sagMultiplier: 0.86 },
  petg: { idealTemperatureC: 235, maxLengthMm: 75, flowBasePercent: 94, flowDropPer50Mm: 2.8, fanBasePercent: 85, fanTempPenaltyPercent: 0.2, speedStretchFactor: 1.34, sagMultiplier: 1.12 },
  abs: { idealTemperatureC: 245, maxLengthMm: 58, flowBasePercent: 95, flowDropPer50Mm: 2.4, fanBasePercent: 45, fanTempPenaltyPercent: 0.35, speedStretchFactor: 1.18, sagMultiplier: 1.34 },
  tpu: { idealTemperatureC: 225, maxLengthMm: 38, flowBasePercent: 92, flowDropPer50Mm: 3.1, fanBasePercent: 100, fanTempPenaltyPercent: 0.1, speedStretchFactor: 1.06, sagMultiplier: 1.65 },
  asa: { idealTemperatureC: 250, maxLengthMm: 55, flowBasePercent: 95, flowDropPer50Mm: 2.3, fanBasePercent: 40, fanTempPenaltyPercent: 0.35, speedStretchFactor: 1.2, sagMultiplier: 1.38 },
};

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);
const round1 = (value: number) => Math.round(value * 10) / 10;
const round0 = (value: number) => Math.round(value);

const getRiskLevel = (sagIndex: number, lengthMm: number, maxLengthMm: number): BridgeRiskLevel => {
  if (lengthMm > maxLengthMm * 1.28 || sagIndex >= 78) return 'red';
  if (lengthMm > maxLengthMm * 0.82 || sagIndex >= 48) return 'orange';
  return 'green';
};

const getAdviceKey = (
  params: BridgingOptimizerParams,
  result: Pick<BridgingOptimizerResult, 'riskLevel' | 'temperatureOffsetC'>,
): BridgingOptimizerResult['adviceKey'] => {
  if (result.riskLevel === 'red') return 'supports';
  if (params.material === 'tpu') return 'flexible';
  if (Math.abs(result.temperatureOffsetC) > 12) return 'highTemp';
  if (result.riskLevel === 'orange') return 'critical';
  return 'safe';
};

const getBridgeSpeedMms = (baseSpeedMms: number, lengthRatio: number, material: MaterialProfile, lineWidthFactor: number) => {
  const speedTarget = baseSpeedMms * (1 + lengthRatio * 0.42) * material.speedStretchFactor * lineWidthFactor;
  return round1(clamp(speedTarget, baseSpeedMms * 0.72, baseSpeedMms * 2.1));
};

const getBridgeFlowRatioPercent = (bridgeLengthMm: number, material: MaterialProfile, temperatureOffsetC: number) => {
  const flowRatio = material.flowBasePercent - (bridgeLengthMm / 50) * material.flowDropPer50Mm - Math.max(0, temperatureOffsetC) * 0.06;
  return round1(clamp(flowRatio, 88, 98));
};

const getBridgeFanSpeedPercent = (params: BridgingOptimizerParams, material: MaterialProfile, temperatureOffsetC: number) => {
  const fanTemperatureAdjustment = Math.max(0, temperatureOffsetC) * material.fanTempPenaltyPercent;
  const minimumFan = params.material === 'abs' || params.material === 'asa' ? 35 : 75;
  return round0(clamp(material.fanBasePercent + fanTemperatureAdjustment, minimumFan, 100));
};

export const calculateBridgingOptimizer = (params: BridgingOptimizerParams): BridgingOptimizerResult => {
  const material = MATERIALS[params.material] ?? MATERIALS.pla;
  const bridgeLengthMm = clamp(params.bridgeLengthMm, 5, 150);
  const baseSpeedMms = clamp(params.baseSpeedMms, 15, 180);
  const lineWidthMm = clamp(params.lineWidthMm, 0.25, 1.2);
  const extrusionTemperatureC = clamp(params.extrusionTemperatureC, 170, 290);
  const temperatureOffsetC = extrusionTemperatureC - material.idealTemperatureC;
  const lengthRatio = bridgeLengthMm / material.maxLengthMm;
  const lineWidthFactor = clamp(0.42 / lineWidthMm, 0.72, 1.32);
  const tempPenalty = Math.max(0, temperatureOffsetC) * 0.018 + Math.max(0, -temperatureOffsetC) * 0.006;
  const bridgeSpeedMms = getBridgeSpeedMms(baseSpeedMms, lengthRatio, material, lineWidthFactor);
  const bridgeFlowRatioPercent = getBridgeFlowRatioPercent(bridgeLengthMm, material, temperatureOffsetC);
  const bridgeFanSpeedPercent = getBridgeFanSpeedPercent(params, material, temperatureOffsetC);
  const coolingFactor = clamp(100 / Math.max(bridgeFanSpeedPercent, 35), 1, 2.45);
  const sagIndex = round1(clamp((lengthRatio * 48 + tempPenalty * 24 + lineWidthFactor * 5) * material.sagMultiplier * coolingFactor, 0, 100));
  const estimatedSagMm = round1(clamp((bridgeLengthMm * bridgeLengthMm) / 9000 * (bridgeFlowRatioPercent / 94) * material.sagMultiplier * coolingFactor, 0.1, 18));
  const riskLevel = getRiskLevel(sagIndex, bridgeLengthMm, material.maxLengthMm);
  const roundedTemperatureOffsetC = round1(temperatureOffsetC);
  return {
    bridgeSpeedMms,
    bridgeFanSpeedPercent,
    bridgeFlowRatioPercent,
    riskLevel,
    sagIndex,
    estimatedSagMm,
    maxRecommendedLengthMm: material.maxLengthMm,
    temperatureOffsetC: roundedTemperatureOffsetC,
    adviceKey: getAdviceKey(params, { riskLevel, temperatureOffsetC: roundedTemperatureOffsetC }),
  };
};
