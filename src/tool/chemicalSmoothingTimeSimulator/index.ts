import type { ToolDefinition } from '../../types';
import { chemicalSmoothingTimeSimulator } from './entry';
export * from './entry';

export const CHEMICAL_SMOOTHING_TIME_SIMULATOR_TOOL: ToolDefinition = {
  entry: chemicalSmoothingTimeSimulator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
  FAQComponent: () => import('./faq.astro'),
};
