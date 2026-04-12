import type { Printing3dCategoryEntry } from '../types';
import { PRINTING_COST_CALCULATOR_TOOL } from '../tool/printingCostCalculator';
import { SHRINKAGE_CALCULATOR_TOOL } from '../tool/shrinkageCalculator';
import { FLOW_CALCULATOR_TOOL } from '../tool/flowCalculator';

export const printing3dCategory: Printing3dCategoryEntry = {
  icon: 'mdi:printer-3d',
  tools: [
    PRINTING_COST_CALCULATOR_TOOL.entry,
    SHRINKAGE_CALCULATOR_TOOL.entry,
    FLOW_CALCULATOR_TOOL.entry,
  ],
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};
