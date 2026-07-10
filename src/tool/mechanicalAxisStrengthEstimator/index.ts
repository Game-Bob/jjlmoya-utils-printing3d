import type { ToolDefinition } from '../../types';
import { mechanicalAxisStrengthEstimator } from './entry';
export * from './entry';

export const MECHANICAL_AXIS_STRENGTH_ESTIMATOR_TOOL: ToolDefinition = {
  entry: mechanicalAxisStrengthEstimator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
  FAQComponent: () => import('./faq.astro'),
};
