export interface PrecisionEngineeringSuiteUI {
  modules: Array<{
    id: string;
    label: string;
  }>;
  inputs: Array<{
    key: string;
    label: string;
    unit: string;
  }>;
  kpis: {
    quoteCost: string;
    recommendedPvp: string;
    grossMargin: string;
    roi: string;
    threadMinor: string;
    fitClearance: string;
    dryingTime: string;
    purgeRatio: string;
  };
  statusTexts: {
    nominal: string;
    watch: string;
    critical: string;
  };
  physicsCopy: Record<string, string>;
  chartLabels: string[];
  copyFields: {
    quoteCost: string;
    pvp: string;
    currency: string;
    margin: string;
    roi: string;
    threadMinor: string;
    fitClearance: string;
    drying: string;
    purgeRatio: string;
  };
  displayUnits: {
    months: string;
    millimeter: string;
    inch: string;
    hour: string;
    clearance: string;
  };
  copyLabel: string;
  copiedLabel: string;
  unitSystemLabel: string;
  metricLabel: string;
  imperialLabel: string;
  currencyLabel: string;
  currencyOptions: Array<{
    code: string;
    label: string;
  }>;
  criticalLabel: string;
  watchLabel: string;
  nominalLabel: string;
  inputsTitle: string;
  telemetryTitle: string;
  outputTitle: string;
  physicsTitle: string;
  modulesAriaLabel: string;
  telemetryAriaLabel: string;
  twinAriaLabel: string;
}
