import type { ToolDefinition } from '../../types';
import { metricThreadToleranceCalculator } from './entry';
export * from './entry';

export const METRIC_THREAD_TOLERANCE_CALCULATOR_TOOL: ToolDefinition = {
  entry: metricThreadToleranceCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
  FAQComponent: () => import('./faq.astro'),
};
