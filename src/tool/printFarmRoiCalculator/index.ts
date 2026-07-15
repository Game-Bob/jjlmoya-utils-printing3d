import type { ToolDefinition } from '../../types';
import { printFarmRoiCalculator } from './entry';

export * from './entry';

export const PRINT_FARM_ROI_CALCULATOR_TOOL: ToolDefinition = {
  entry: printFarmRoiCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
  FAQComponent: () => import('./faq.astro'),
};
