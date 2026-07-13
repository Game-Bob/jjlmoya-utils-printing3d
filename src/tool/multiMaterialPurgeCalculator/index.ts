import type { ToolDefinition } from '../../types';
import { multiMaterialPurgeCalculator } from './entry';

export * from './entry';

export const MULTI_MATERIAL_PURGE_CALCULATOR_TOOL: ToolDefinition = {
  entry: multiMaterialPurgeCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
  FAQComponent: () => import('./faq.astro'),
};
