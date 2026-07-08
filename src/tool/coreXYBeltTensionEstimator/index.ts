import type { ToolDefinition } from '../../types';
import { coreXYBeltTensionEstimator } from './entry';
export * from './entry';

export const COREXY_BELT_TENSION_ESTIMATOR_TOOL: ToolDefinition = {
  entry: coreXYBeltTensionEstimator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
  FAQComponent: () => import('./faq.astro'),
};
