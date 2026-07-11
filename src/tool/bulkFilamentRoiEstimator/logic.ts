export type CurrencyCode = 'EUR' | 'USD' | 'GBP' | 'JPY' | 'CAD' | 'AUD' | 'CHF' | 'MXN' | 'BRL';

export interface BulkFilamentRoiParams {
  currency: CurrencyCode;
  standardPrice: number;
  standardWeightKg: number;
  bulkPrice: number;
  bulkWeightKg: number;
  monthlyConsumptionKg: number;
  safeStorageMonths: number;
}

export interface BulkFilamentRoiResult {
  standardCostPerGram: number;
  bulkCostPerGram: number;
  grossSavings: number;
  riskPenalty: number;
  realSavings: number;
  consumptionMonths: number;
  safeStorageMonths: number;
  degradationRisk: boolean;
  viability: 'profitable' | 'neutral' | 'poor';
  savingsRate: number;
}

const clampNumber = (value: number, fallback: number) => (Number.isFinite(value) && value > 0 ? value : fallback);

const degradationPenalty = (bulkPrice: number, consumptionMonths: number, safeStorageMonths: number) => {
  if (consumptionMonths <= safeStorageMonths) return 0;
  const overrunRatio = (consumptionMonths - safeStorageMonths) / safeStorageMonths;
  return Math.min(bulkPrice * 0.45, bulkPrice * overrunRatio * 0.22);
};

const classifyViability = (realSavings: number, equivalentStandardCost: number, bulkCostPerGram: number, standardCostPerGram: number): BulkFilamentRoiResult['viability'] => {
  if (realSavings < 0 || bulkCostPerGram >= standardCostPerGram) return 'poor';
  if (realSavings > equivalentStandardCost * 0.08) return 'profitable';
  return 'neutral';
};

export const currencySymbols: Record<CurrencyCode, string> = {
  EUR: 'EUR',
  USD: 'USD',
  GBP: 'GBP',
  JPY: 'JPY',
  CAD: 'CAD',
  AUD: 'AUD',
  CHF: 'CHF',
  MXN: 'MXN',
  BRL: 'BRL',
};

export const calculateBulkFilamentRoi = (params: BulkFilamentRoiParams): BulkFilamentRoiResult => {
  const standardWeightKg = clampNumber(params.standardWeightKg, 1);
  const bulkWeightKg = clampNumber(params.bulkWeightKg, 3);
  const monthlyConsumptionKg = clampNumber(params.monthlyConsumptionKg, 0.1);
  const safeStorageMonths = clampNumber(params.safeStorageMonths, 3);
  const standardPrice = Math.max(0, params.standardPrice || 0);
  const bulkPrice = Math.max(0, params.bulkPrice || 0);

  const standardCostPerGram = standardPrice / (standardWeightKg * 1000);
  const bulkCostPerGram = bulkPrice / (bulkWeightKg * 1000);
  const grossSavings = (standardCostPerGram - bulkCostPerGram) * bulkWeightKg * 1000;
  const consumptionMonths = bulkWeightKg / monthlyConsumptionKg;
  const degradationRisk = consumptionMonths > safeStorageMonths;
  const riskPenalty = degradationPenalty(bulkPrice, consumptionMonths, safeStorageMonths);
  const realSavings = grossSavings - riskPenalty;
  const equivalentStandardCost = standardCostPerGram * bulkWeightKg * 1000;
  const savingsRate = equivalentStandardCost > 0 ? realSavings / equivalentStandardCost : 0;
  const viability = classifyViability(realSavings, equivalentStandardCost, bulkCostPerGram, standardCostPerGram);

  return {
    standardCostPerGram,
    bulkCostPerGram,
    grossSavings,
    riskPenalty,
    realSavings,
    consumptionMonths,
    safeStorageMonths,
    degradationRisk,
    viability,
    savingsRate,
  };
};
