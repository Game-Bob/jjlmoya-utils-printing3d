import type { ToolDefinition } from '../../types';
import { wallPerimeterOptimizer } from './entry';

export * from './entry';

export const WALL_PERIMETER_OPTIMIZER_TOOL: ToolDefinition = {
  entry: wallPerimeterOptimizer,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
  FAQComponent: () => import('./faq.astro'),
};
