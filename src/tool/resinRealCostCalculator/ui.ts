export interface ResinRealCostCalculatorUI {
  bottlePanel: string;
  modelPanel: string;
  resultPanel: string;
  unitSystemLabel: string;
  metricLabel: string;
  imperialLabel: string;
  currencyLabel: string;
  currencyOptions: {
    code: string;
    label: string;
    symbol: string;
  }[];
  bottlePriceLabel: string;
  bottleVolumeLabel: string;
  resinPresetLabel: string;
  resinPresetOptions: {
    label: string;
    density: string;
  }[];
  densityLabel: string;
  modelAmountLabel: string;
  unitLabel: string;
  mlUnit: string;
  fluidOunceUnit: string;
  gramsUnit: string;
  ounceUnit: string;
  complexityLabel: string;
  lowComplexity: string;
  mediumComplexity: string;
  highComplexity: string;
  lowHint: string;
  mediumHint: string;
  highHint: string;
  theoreticalCostLabel: string;
  realCostLabel: string;
  wasteCostLabel: string;
  correctedVolumeLabel: string;
  costPerMlLabel: string;
  bottlePrintsLabel: string;
  savedSettingsLabel: string;
  hollowPartTip: string;
  conversionLabel: string;
  netFromSlicerLabel: string;
  persistenceNote: string;
}
