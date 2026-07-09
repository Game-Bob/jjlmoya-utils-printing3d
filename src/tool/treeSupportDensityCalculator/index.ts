import type { ToolDefinition } from '../../types';
import { treeSupportDensityCalculator } from './entry';
export * from './entry';

export const TREE_SUPPORT_DENSITY_CALCULATOR_TOOL: ToolDefinition = {
  entry: treeSupportDensityCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
  FAQComponent: () => import('./faq.astro'),
};
