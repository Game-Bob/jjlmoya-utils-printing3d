import type { ToolDefinition } from '../../types';
import { flowCalculator } from './entry';
export * from './entry';

export const FLOW_CALCULATOR_TOOL: ToolDefinition = {
  entry: flowCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
  FAQComponent: () => import('./faq.astro'),
};
