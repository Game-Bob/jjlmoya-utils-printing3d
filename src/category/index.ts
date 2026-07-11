import type { Printing3dCategoryEntry } from '../types';
import { printingCostCalculator } from '../tool/printingCostCalculator/entry';
import { shrinkageCalculator } from '../tool/shrinkageCalculator/entry';
import { flowCalculator } from '../tool/flowCalculator/entry';
import { resinCuringCalculator } from '../tool/resinCuringCalculator/entry';
import { powerSupplyEstimator } from '../tool/powerSupplyEstimator/entry';
import { coreXYBeltTensionEstimator } from '../tool/coreXYBeltTensionEstimator/entry';
import { rainbowFilamentGradientCalculator } from '../tool/rainbowFilamentGradientCalculator/entry';
import { chemicalSmoothingTimeSimulator } from '../tool/chemicalSmoothingTimeSimulator/entry';
import { bedThermalInertiaStabilizationCalculator } from '../tool/bedThermalInertiaStabilizationCalculator/entry';
import { treeSupportDensityCalculator } from '../tool/treeSupportDensityCalculator/entry';
import { stepperDriverMicrosteppingCalculator } from '../tool/stepperDriverMicrosteppingCalculator/entry';
import { peiSheetLifespanEstimator } from '../tool/peiSheetLifespanEstimator/entry';
import { infillWeightSimulator } from '../tool/infillWeightSimulator/entry';
import { nozzleWearEstimator } from '../tool/nozzleWearEstimator/entry';
import { mechanicalAxisStrengthEstimator } from '../tool/mechanicalAxisStrengthEstimator/entry';
import { printTimeWorkflowOptimizer } from '../tool/printTimeWorkflowOptimizer/entry';
import { printDurationEstimator } from '../tool/printDurationEstimator/entry';
import { resinRealCostCalculator } from '../tool/resinRealCostCalculator/entry';
import { retractionStringingCalibrator } from '../tool/retractionStringingCalibrator/entry';
import { overhangSafeAngleSimulator } from '../tool/overhangSafeAngleSimulator/entry';
import { bedMeshAnalyzer } from '../tool/bedMeshAnalyzer/entry';
import { bridgingOptimizer } from '../tool/bridgingOptimizer/entry';

export const printing3dCategory: Printing3dCategoryEntry = {
  icon: 'mdi:printer-3d',
  tools: [
    printingCostCalculator,
    shrinkageCalculator,
    flowCalculator,
    resinCuringCalculator,
    powerSupplyEstimator,
    coreXYBeltTensionEstimator,
    rainbowFilamentGradientCalculator,
    chemicalSmoothingTimeSimulator,
    bedThermalInertiaStabilizationCalculator,
    treeSupportDensityCalculator,
    stepperDriverMicrosteppingCalculator,
    peiSheetLifespanEstimator,
    infillWeightSimulator,
    nozzleWearEstimator,
    mechanicalAxisStrengthEstimator,
    printTimeWorkflowOptimizer,
    printDurationEstimator,
    resinRealCostCalculator,
    retractionStringingCalibrator,
    overhangSafeAngleSimulator,
    bedMeshAnalyzer,
    bridgingOptimizer,
  ],
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
    de: () => import('./i18n/de').then((m) => m.content),
    id: () => import('./i18n/id').then((m) => m.content),
    it: () => import('./i18n/it').then((m) => m.content),
    ja: () => import('./i18n/ja').then((m) => m.content),
    ko: () => import('./i18n/ko').then((m) => m.content),
    nl: () => import('./i18n/nl').then((m) => m.content),
    pl: () => import('./i18n/pl').then((m) => m.content),
    pt: () => import('./i18n/pt').then((m) => m.content),
    ru: () => import('./i18n/ru').then((m) => m.content),
    sv: () => import('./i18n/sv').then((m) => m.content),
    tr: () => import('./i18n/tr').then((m) => m.content),
    zh: () => import('./i18n/zh').then((m) => m.content),
  },
};
