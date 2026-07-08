import type { ToolDefinition } from '../../types';
import { powerSupplyEstimator } from './entry';
export * from './entry';

export const POWER_SUPPLY_ESTIMATOR_TOOL: ToolDefinition = {
  entry: powerSupplyEstimator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
  FAQComponent: () => import('./faq.astro'),
};
