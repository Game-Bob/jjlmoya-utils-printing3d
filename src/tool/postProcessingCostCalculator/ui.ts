export interface PostProcessingCostCalculatorUI {
  inputsAriaLabel: string;
  resultsAriaLabel: string;
  currencyLabel: string;
  currencyOptions: {
    code: string;
    label: string;
    symbol: string;
  }[];
  currencyOptionSeparator: string;
  supportLabel: string;
  sandingLabel: string;
  paintingLabel: string;
  otherLabel: string;
  hourlyRateLabel: string;
  consumablesLabel: string;
  conversionFactorLabel: string;
  conversionFactorUnit: string;
  conversionHint: string;
  minutesUnit: string;
  hourUnit: string;
  rateUnitSeparator: string;
  totalLabel: string;
  laborLabel: string;
  consumablesBreakdownLabel: string;
  timeLabel: string;
  effectiveRateLabel: string;
  breakdownLabel: string;
  copyLabel: string;
  copiedLabel: string;
  copyTemplate: string;
  pendingLabel: string;
  currencySymbol: string;
}
