export interface MachineHourlyRateParams {
  watts: number;
  hours: number;
  tariffPerKwh: number;
  purchasePrice: number;
  usefulLifeHours: number;
}

export interface MachineHourlyRateResult {
  electricityCost: number;
  depreciationCost: number;
  totalCost: number;
  hourlyElectricityCost: number;
  hourlyDepreciationCost: number;
  hourlyRate: number;
  electricitySharePercent: number;
  depreciationSharePercent: number;
  dominantCost: 'electricity' | 'depreciation' | 'balanced';
}

const safePositive = (value: number, fallback: number) => {
  if (!Number.isFinite(value) || value <= 0) return fallback;
  return value;
};

const dominantCost = (
  electricitySharePercent: number,
  depreciationSharePercent: number,
): MachineHourlyRateResult['dominantCost'] => {
  const shareDelta = Math.abs(electricitySharePercent - depreciationSharePercent);
  if (shareDelta < 8) return 'balanced';
  return electricitySharePercent > depreciationSharePercent ? 'electricity' : 'depreciation';
};

export const calculateMachineHourlyRate = (params: MachineHourlyRateParams): MachineHourlyRateResult => {
  const watts = Math.max(params.watts, 0);
  const hours = safePositive(params.hours, 1);
  const tariffPerKwh = Math.max(params.tariffPerKwh, 0);
  const purchasePrice = Math.max(params.purchasePrice, 0);
  const usefulLifeHours = safePositive(params.usefulLifeHours, 5000);

  const hourlyElectricityCost = (watts / 1000) * tariffPerKwh;
  const hourlyDepreciationCost = purchasePrice / usefulLifeHours;
  const electricityCost = hourlyElectricityCost * hours;
  const depreciationCost = hourlyDepreciationCost * hours;
  const totalCost = electricityCost + depreciationCost;
  const hourlyRate = hourlyElectricityCost + hourlyDepreciationCost;
  const electricitySharePercent = totalCost > 0 ? (electricityCost / totalCost) * 100 : 0;
  const depreciationSharePercent = totalCost > 0 ? (depreciationCost / totalCost) * 100 : 0;

  return {
    electricityCost,
    depreciationCost,
    totalCost,
    hourlyElectricityCost,
    hourlyDepreciationCost,
    hourlyRate,
    electricitySharePercent,
    depreciationSharePercent,
    dominantCost: dominantCost(electricitySharePercent, depreciationSharePercent),
  };
};
