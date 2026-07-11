import type { ToolDefinition } from '../../types';
import { retractionStringingCalibrator } from './entry';
export * from './entry';

export const RETRACTION_STRINGING_CALIBRATOR_TOOL: ToolDefinition = {
  entry: retractionStringingCalibrator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
  FAQComponent: () => import('./faq.astro'),
};
