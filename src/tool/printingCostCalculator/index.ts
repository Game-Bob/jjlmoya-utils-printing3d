import { printingCostCalculator } from './entry';
export * from './entry';
export const PRINTING_COST_CALCULATOR_TOOL: ToolDefinition = {
  entry: printingCostCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
  FAQComponent: () => import('./faq.astro'),
};
