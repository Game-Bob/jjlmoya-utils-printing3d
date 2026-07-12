import type { ToolDefinition } from '../../types';
import { technicalResinUvCuringCalculator } from './entry';
export * from './entry';

export const TECHNICAL_RESIN_UV_CURING_CALCULATOR_TOOL: ToolDefinition = {
  entry: technicalResinUvCuringCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
