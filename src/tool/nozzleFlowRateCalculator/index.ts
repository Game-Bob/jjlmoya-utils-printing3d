import type { ToolDefinition } from '../../types';
import { nozzleFlowRateCalculator } from './entry';

export * from './entry';

export const NOZZLE_FLOW_RATE_CALCULATOR_TOOL: ToolDefinition = {
  entry: nozzleFlowRateCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
  FAQComponent: () => import('./faq.astro'),
};
