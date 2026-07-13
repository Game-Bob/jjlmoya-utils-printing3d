import type { ToolDefinition } from '../../types';
import { additiveProductionEfficiencyCalculator } from './entry';

export * from './entry';

export const ADDITIVE_PRODUCTION_EFFICIENCY_CALCULATOR_TOOL: ToolDefinition = {
  entry: additiveProductionEfficiencyCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
  FAQComponent: () => import('./faq.astro'),
};
