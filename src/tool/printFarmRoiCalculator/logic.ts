export interface PrintFarmRoiParams {
  printerCount: number;
  initialInvestment: number;
  fixedMonthlyCost: number;
  electricityMonthlyCost: number;
  hourlyRate: number;
  occupancyPercent: number;
  successRatePercent: number;
  variableCostPerHour: number;
  averageHoursPerPart: number;
}

export interface PrintFarmRoiResult {
  grossMonthlyHours: number;
  realProductiveHours: number;
  grossMonthlyRevenue: number;
  totalOperatingCosts: number;
  netMonthlyProfit: number;
  paybackMonths: number;
  annualizedRoiPercent: number;
  variableMonthlyCost: number;
  marginPercent: number;
  breakEvenProductiveHours: number;
  breakEvenParts: number;
}

const HOURS_PER_MONTH = 720;

const positive = (value: number) => (Number.isFinite(value) ? Math.max(0, value) : 0);
const percent = (value: number) => Math.min(100, positive(value)) / 100;

const normalizedParams = (params: PrintFarmRoiParams) => ({
  printerCount: Math.floor(positive(params.printerCount)),
  initialInvestment: positive(params.initialInvestment),
  fixedMonthlyCost: positive(params.fixedMonthlyCost),
  electricityMonthlyCost: positive(params.electricityMonthlyCost),
  hourlyRate: positive(params.hourlyRate),
  variableCostPerHour: positive(params.variableCostPerHour),
  averageHoursPerPart: positive(params.averageHoursPerPart),
});

const breakEven = (params: ReturnType<typeof normalizedParams>) => {
  const contributionPerHour = params.hourlyRate - params.variableCostPerHour;
  const monthlyBaseCost = params.fixedMonthlyCost + params.electricityMonthlyCost;
  const breakEvenProductiveHours = contributionPerHour > 0 ? monthlyBaseCost / contributionPerHour : Infinity;
  const breakEvenParts = Number.isFinite(breakEvenProductiveHours) && params.averageHoursPerPart > 0
    ? Math.ceil(breakEvenProductiveHours / params.averageHoursPerPart)
    : Infinity;

  return { breakEvenProductiveHours, breakEvenParts };
};

export const calculatePrintFarmRoi = (params: PrintFarmRoiParams): PrintFarmRoiResult => {
  const normalized = normalizedParams(params);

  const grossMonthlyHours = normalized.printerCount * HOURS_PER_MONTH;
  const realProductiveHours = grossMonthlyHours * percent(params.occupancyPercent) * percent(params.successRatePercent);
  const grossMonthlyRevenue = realProductiveHours * normalized.hourlyRate;
  const variableMonthlyCost = realProductiveHours * normalized.variableCostPerHour;
  const totalOperatingCosts = normalized.fixedMonthlyCost + normalized.electricityMonthlyCost + variableMonthlyCost;
  const netMonthlyProfit = grossMonthlyRevenue - totalOperatingCosts;
  const paybackMonths = netMonthlyProfit > 0 ? normalized.initialInvestment / netMonthlyProfit : Infinity;
  const annualizedRoiPercent = normalized.initialInvestment > 0 ? (((netMonthlyProfit * 12) - normalized.initialInvestment) / normalized.initialInvestment) * 100 : 0;
  const marginPercent = grossMonthlyRevenue > 0 ? (netMonthlyProfit / grossMonthlyRevenue) * 100 : 0;

  return {
    grossMonthlyHours,
    realProductiveHours,
    grossMonthlyRevenue,
    totalOperatingCosts,
    netMonthlyProfit,
    paybackMonths,
    annualizedRoiPercent,
    variableMonthlyCost,
    marginPercent,
    ...breakEven(normalized),
  };
};
