import type { ToolDefinition } from '../../types';
import { postProcessingCostCalculator } from './entry';

export * from './entry';

export const POST_PROCESSING_COST_CALCULATOR_TOOL: ToolDefinition = {
  entry: postProcessingCostCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
  FAQComponent: () => import('./faq.astro'),
};
