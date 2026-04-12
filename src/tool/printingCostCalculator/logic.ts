export interface PrintingCostResult {
  material: number;
  energy: number;
  machine: number;
  labor: number;
  total: number;
  suggested: number;
}

export interface PrintingCostParams {
  weight: number;
  spoolPrice: number;
  waste: number;
  hours: number;
  watts: number;
  kwh: number;
  machineRate: number;
  laborRate: number;
  laborMin: number;
  margin: number;
}

export const calculatePrintingCost = (params: PrintingCostParams): PrintingCostResult => {
  const {
    weight,
    spoolPrice,
    waste,
    hours,
    watts,
    kwh,
    machineRate,
    laborRate,
    laborMin,
    margin,
  } = params;

  const cMaterial = (weight / 1000) * spoolPrice * (1 + waste / 100);
  const cEnergy = (watts / 1000) * hours * kwh;
  const cMachine = machineRate * hours;
  const cLabor = (laborMin / 60) * laborRate;

  const total = cMaterial + cEnergy + cMachine + cLabor;
  const suggested = total * (1 + margin / 100);

  return {
    material: cMaterial,
    energy: cEnergy,
    machine: cMachine,
    labor: cLabor,
    total,
    suggested,
  };
};
