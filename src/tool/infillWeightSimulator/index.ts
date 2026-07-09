import type { ToolDefinition } from '../../types';
import { infillWeightSimulator } from './entry';

export * from './entry';

export const INFILL_WEIGHT_SIMULATOR_TOOL: ToolDefinition = {
  entry: infillWeightSimulator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
  FAQComponent: () => import('./faq.astro'),
};
