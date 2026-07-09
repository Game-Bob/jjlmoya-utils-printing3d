import type { ToolDefinition } from '../../types';
import { nozzleWearEstimator } from './entry';
export * from './entry';

export const NOZZLE_WEAR_ESTIMATOR_TOOL: ToolDefinition = {
  entry: nozzleWearEstimator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
  FAQComponent: () => import('./faq.astro'),
};
