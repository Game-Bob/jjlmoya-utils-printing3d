import type { ToolDefinition } from '../../types';
import { hotendFlowRateLimitCalculator } from './entry';

export * from './entry';

export const HOTEND_FLOW_RATE_LIMIT_CALCULATOR_TOOL: ToolDefinition = {
  entry: hotendFlowRateLimitCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
  FAQComponent: () => import('./faq.astro'),
};
