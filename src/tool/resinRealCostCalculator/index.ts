import type { ToolDefinition } from '../../types';
import { resinRealCostCalculator } from './entry';

export * from './entry';

export const RESIN_REAL_COST_CALCULATOR_TOOL: ToolDefinition = {
  entry: resinRealCostCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
  FAQComponent: () => import('./faq.astro'),
};
