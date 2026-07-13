export interface MultiMaterialPurgeCurrencyOption {
  code: string;
  label: string;
}

export interface MultiMaterialPurgeCalculatorUI {
  unitSystemLabel: string;
  metricLabel: string;
  imperialLabel: string;
  currencyLabel: string;
  currencyOptions: MultiMaterialPurgeCurrencyOption[];
  modelInputsTitle: string;
  objectVolumeLabel: string;
  basePurgeLabel: string;
  densityLabel: string;
  priceLabel: string;
  transitionsTitle: string;
  fromLabel: string;
  toLabel: string;
  colorLabels: Record<string, string>;
  countLabel: string;
  objectLabel: string;
  purgeTowerLabel: string;
  totalWasteLabel: string;
  wasteCostLabel: string;
  purgeRatioLabel: string;
  massLabel: string;
  loadbarAriaLabel: string;
  alertTitle: string;
  alertText: string;
  efficientText: string;
  factorGuideTitle: string;
  transitionLabel: string;
  factorLabel: string;
  volumeLabel: string;
  cm3Unit: string;
  in3Unit: string;
  gUnit: string;
  ozUnit: string;
}
