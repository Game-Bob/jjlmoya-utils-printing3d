import type { ToolDefinition } from '../../types';
import { printDurationEstimator } from './entry';

export * from './entry';

export const PRINT_DURATION_ESTIMATOR_TOOL: ToolDefinition = {
  entry: printDurationEstimator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
  FAQComponent: () => import('./faq.astro'),
};
