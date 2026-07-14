import type { ToolDefinition } from '../../types';
import { precisionEngineeringSuite } from './entry';

export * from './entry';

export const PRECISION_ENGINEERING_SUITE_TOOL: ToolDefinition = {
  entry: precisionEngineeringSuite,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
  FAQComponent: () => import('./faq.astro'),
};
