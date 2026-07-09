import type { ToolDefinition } from '../../types';
import { peiSheetLifespanEstimator } from './entry';
export * from './entry';

export const PEI_SHEET_LIFESPAN_ESTIMATOR_TOOL: ToolDefinition = {
  entry: peiSheetLifespanEstimator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
  FAQComponent: () => import('./faq.astro'),
};
