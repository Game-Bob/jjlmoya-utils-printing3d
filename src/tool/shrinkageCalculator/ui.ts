export interface ShrinkageCalculatorUI {
  tabPresets: string;
  tabCalibration: string;
  labelDefaultMaterial: string;
  labelEstimatedShrinkage: string;
  unitPercent: string;
  labelDesignSize: string;
  labelRealSize: string;
  unitMm: string;
  labelAxesCompensation: string;
  labelAxisXY: string;
  labelAxisZ: string;
  textZWarning: string;
  labelRecommendationTitle: string;
  labelResultSlicerScale: string;
  labelResultFactor: string;
  btnCopy: string;
  btnCopied: string;
  recommendations: Record<string, string>;
}
