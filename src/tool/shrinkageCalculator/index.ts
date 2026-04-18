import type { ToolDefinition } from '../../types';
import { shrinkageCalculator } from './entry';
export * from './entry';

export const SHRINKAGE_CALCULATOR_TOOL: ToolDefinition = {
  entry: shrinkageCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
  FAQComponent: () => import('./faq.astro'),
};
