import type { ToolDefinition } from '../../types';
import { resinCuringCalculator } from './entry';
export * from './entry';

export const RESIN_CURING_CALCULATOR_TOOL: ToolDefinition = {
  entry: resinCuringCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
  FAQComponent: () => import('./faq.astro'),
};
