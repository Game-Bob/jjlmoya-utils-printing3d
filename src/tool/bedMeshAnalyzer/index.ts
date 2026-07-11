import type { ToolDefinition } from '../../types';
import { bedMeshAnalyzer } from './entry';
export * from './entry';

export const BED_MESH_ANALYZER_TOOL: ToolDefinition = {
  entry: bedMeshAnalyzer,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
  FAQComponent: () => import('./faq.astro'),
};
