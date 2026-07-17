import type { ToolDefinition } from '../../types';
import { masterPricingMarginCalculator } from './entry';

export * from './entry';

export const MASTER_PRICING_MARGIN_CALCULATOR_TOOL: ToolDefinition = {
  entry: masterPricingMarginCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
  FAQComponent: () => import('./faq.astro'),
};
