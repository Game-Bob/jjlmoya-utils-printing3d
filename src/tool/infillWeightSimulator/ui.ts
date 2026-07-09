export interface InfillWeightSimulatorUI {
  inputsAriaLabel: string;
  resultsAriaLabel: string;
  gramUnit: string;
  ounceUnit: string;
  poundUnit: string;
  kilogramUnit: string;
  percentUnit: string;
  unitSystemLabel: string;
  metricLabel: string;
  imperialLabel: string;
  currencyLabel: string;
  currencyOptions: {
    code: string;
    label: string;
    symbol: string;
  }[];
  fullWeightLabel: string;
  fullWeightHint: string;
  infillLabel: string;
  patternLabel: string;
  patternOptions: {
    value: string;
    label: string;
  }[];
  shellShareLabel: string;
  shellShareHint: string;
  spoolPriceLabel: string;
  wasteLabel: string;
  estimatedWeightLabel: string;
  filamentSavedLabel: string;
  materialCostLabel: string;
  costSavedLabel: string;
  effectiveDensityLabel: string;
  shellLabel: string;
  infillCoreLabel: string;
  patternImpactLabel: string;
  comparisonLabel: string;
  fullInfillLabel: string;
  targetInfillLabel: string;
  insightLow: string;
  insightBalanced: string;
  insightHigh: string;
}
