import type { ToolDefinition } from '../../types';
import { filamentWeightLengthConverter } from './entry';

export * from './entry';

export const FILAMENT_WEIGHT_LENGTH_CONVERTER_TOOL: ToolDefinition = {
  entry: filamentWeightLengthConverter,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
  FAQComponent: () => import('./faq.astro'),
};
