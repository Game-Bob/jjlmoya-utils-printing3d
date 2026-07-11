import type { ToolDefinition } from '../../types';
import { bulkFilamentRoiEstimator } from './entry';

export * from './entry';

export const BULK_FILAMENT_ROI_ESTIMATOR_TOOL: ToolDefinition = {
  entry: bulkFilamentRoiEstimator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
  FAQComponent: () => import('./faq.astro'),
};
