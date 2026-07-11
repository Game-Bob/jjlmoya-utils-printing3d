import type { ToolDefinition } from '../../types';
import { bridgingOptimizer } from './entry';
export * from './entry';

export const BRIDGING_OPTIMIZER_TOOL: ToolDefinition = {
  entry: bridgingOptimizer,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
