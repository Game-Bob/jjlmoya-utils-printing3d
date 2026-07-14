export type SuiteModuleId =
  | 'quote'
  | 'margin'
  | 'labor'
  | 'roi'
  | 'threads'
  | 'fits'
  | 'drying'
  | 'purge';

export interface PrecisionSuiteInputs {
  materialCost: number;
  printHours: number;
  machineRate: number;
  energyKwh: number;
  energyPrice: number;
  failureRate: number;
  marginPercent: number;
  laborMinutes: number;
  laborRate: number;
  postProcessMinutes: number;
  postProcessRate: number;
  farmPrinters: number;
  printerCost: number;
  monthlyOrders: number;
  avgSalePrice: number;
  threadNominalMm: number;
  threadPitchMm: number;
  threadClassFactor: number;
  shaftNominalMm: number;
  holeAllowanceMm: number;
  shaftAllowanceMm: number;
  filamentMassG: number;
  ambientHumidity: number;
  dryingTemperatureC: number;
  materialDryingFactor: number;
  objectVolumeCm3: number;
  purgeVolumeCm3: number;
  materialDensity: number;
}

export interface PrecisionSuiteResult {
  quoteCost: number;
  recommendedPrice: number;
  grossMargin: number;
  laborCost: number;
  postProcessCost: number;
  monthlyProfit: number;
  roiMonths: number;
  threadMinorDiameter: number;
  threadClearance: number;
  fitClearance: number;
  dryingHours: number;
  moistureRisk: number;
  purgeRatio: number;
  purgeMassG: number;
  severity: 'nominal' | 'watch' | 'critical';
}

export const suiteDefaults: PrecisionSuiteInputs = {
  materialCost: 3.8,
  printHours: 6.5,
  machineRate: 2.4,
  energyKwh: 0.42,
  energyPrice: 0.24,
  failureRate: 8,
  marginPercent: 42,
  laborMinutes: 18,
  laborRate: 28,
  postProcessMinutes: 22,
  postProcessRate: 24,
  farmPrinters: 8,
  printerCost: 650,
  monthlyOrders: 180,
  avgSalePrice: 22,
  threadNominalMm: 12,
  threadPitchMm: 1.75,
  threadClassFactor: 0.16,
  shaftNominalMm: 20,
  holeAllowanceMm: 0.12,
  shaftAllowanceMm: -0.04,
  filamentMassG: 1000,
  ambientHumidity: 55,
  dryingTemperatureC: 55,
  materialDryingFactor: 1.1,
  objectVolumeCm3: 84,
  purgeVolumeCm3: 34,
  materialDensity: 1.24,
};

const finite = (value: number, fallback: number) => (Number.isFinite(value) ? value : fallback);
const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

const getSeverity = (purgeRatio: number, moistureRisk: number, fitClearance: number): 'nominal' | 'watch' | 'critical' => {
  if (purgeRatio > 0.3 || moistureRisk > 0.68 || fitClearance < 0) {
    return 'critical';
  }
  if (purgeRatio > 0.18 || moistureRisk > 0.45) {
    return 'watch';
  }
  return 'nominal';
};

const normalizePart1 = (p: PrecisionSuiteInputs, getVal: (key: keyof PrecisionSuiteInputs, min?: number) => number, getClamp: (key: keyof PrecisionSuiteInputs, min: number, max: number) => number) => ({
  materialCost: getVal('materialCost'),
  printHours: getVal('printHours'),
  machineRate: getVal('machineRate'),
  energyKwh: getVal('energyKwh'),
  energyPrice: getVal('energyPrice'),
  failureRate: getClamp('failureRate', 0, 95) / 100,
  marginPercent: getClamp('marginPercent', 0, 95) / 100,
  laborMinutes: getVal('laborMinutes'),
  laborRate: getVal('laborRate'),
  postProcessMinutes: getVal('postProcessMinutes'),
  postProcessRate: getVal('postProcessRate'),
  farmPrinters: getVal('farmPrinters', 1),
  printerCost: getVal('printerCost'),
  monthlyOrders: getVal('monthlyOrders'),
  avgSalePrice: getVal('avgSalePrice'),
});

const getNormalizedInputs = (input: Partial<PrecisionSuiteInputs>): PrecisionSuiteInputs => {
  const p = { ...suiteDefaults, ...input };
  const getVal = (key: keyof PrecisionSuiteInputs, min = 0) => Math.max(min, finite(p[key], suiteDefaults[key]));
  const getClamp = (key: keyof PrecisionSuiteInputs, min: number, max: number) => clamp(finite(p[key], suiteDefaults[key]), min, max);

  const part1 = normalizePart1(p, getVal, getClamp);
  return {
    ...part1,
    threadNominalMm: getVal('threadNominalMm', 0.1),
    threadPitchMm: getVal('threadPitchMm', 0.1),
    threadClassFactor: getClamp('threadClassFactor', 0.05, 0.4),
    shaftNominalMm: getVal('shaftNominalMm', 0.1),
    holeAllowanceMm: finite(p.holeAllowanceMm, suiteDefaults.holeAllowanceMm),
    shaftAllowanceMm: finite(p.shaftAllowanceMm, suiteDefaults.shaftAllowanceMm),
    filamentMassG: getVal('filamentMassG', 1),
    ambientHumidity: getClamp('ambientHumidity', 0, 100),
    dryingTemperatureC: getClamp('dryingTemperatureC', 25, 90),
    materialDryingFactor: getVal('materialDryingFactor', 0.2),
    objectVolumeCm3: getVal('objectVolumeCm3'),
    purgeVolumeCm3: getVal('purgeVolumeCm3'),
    materialDensity: getVal('materialDensity', 0.1),
  } as PrecisionSuiteInputs;
};

const calculatePhysicsResult = (p: PrecisionSuiteInputs) => {
  const threadMinorDiameter = p.threadNominalMm - 1.226869 * p.threadPitchMm;
  const threadClearance = p.threadPitchMm * p.threadClassFactor;
  const fitClearance = p.shaftNominalMm + p.holeAllowanceMm - (p.shaftNominalMm + p.shaftAllowanceMm);
  const humidityLoad = 1 + p.ambientHumidity / 100;
  const temperatureAcceleration = Math.pow(2, (p.dryingTemperatureC - 45) / 10);
  const dryingHours = (p.filamentMassG / 1000) * 4.2 * humidityLoad * p.materialDryingFactor / temperatureAcceleration;
  const moistureRisk = clamp((p.ambientHumidity / 100) * p.materialDryingFactor * (45 / p.dryingTemperatureC), 0, 1);
  const totalVolume = p.objectVolumeCm3 + p.purgeVolumeCm3;
  const purgeRatio = totalVolume > 0 ? p.purgeVolumeCm3 / totalVolume : 0;
  const purgeMassG = p.purgeVolumeCm3 * p.materialDensity;

  return {
    threadMinorDiameter,
    threadClearance,
    fitClearance,
    dryingHours,
    moistureRisk,
    purgeRatio,
    purgeMassG,
  };
};

const calculateBusinessResult = (p: PrecisionSuiteInputs) => {
  const laborCost = (p.laborMinutes / 60) * p.laborRate;
  const postProcessCost = (p.postProcessMinutes / 60) * p.postProcessRate;
  const directCost = p.materialCost + p.printHours * p.machineRate + p.printHours * p.energyKwh * p.energyPrice + laborCost + postProcessCost;
  const quoteCost = directCost / Math.max(0.05, 1 - p.failureRate);
  const recommendedPrice = quoteCost / Math.max(0.05, 1 - p.marginPercent);
  const grossMargin = recommendedPrice > 0 ? (recommendedPrice - quoteCost) / recommendedPrice : 0;
  const monthlyRevenue = p.monthlyOrders * p.avgSalePrice;
  const monthlyVariableCost = p.monthlyOrders * quoteCost;
  const monthlyProfit = monthlyRevenue - monthlyVariableCost;
  const roiMonths = monthlyProfit > 0 ? (p.farmPrinters * p.printerCost) / monthlyProfit : Number.POSITIVE_INFINITY;

  return {
    laborCost,
    postProcessCost,
    quoteCost,
    recommendedPrice,
    grossMargin,
    monthlyProfit,
    roiMonths,
  };
};

export const calculatePrecisionSuite = (input: Partial<PrecisionSuiteInputs>): PrecisionSuiteResult => {
  const p = getNormalizedInputs(input);
  const biz = calculateBusinessResult(p);
  const phys = calculatePhysicsResult(p);
  const severity = getSeverity(phys.purgeRatio, phys.moistureRisk, phys.fitClearance);

  return {
    ...biz,
    ...phys,
    severity,
  };
};
