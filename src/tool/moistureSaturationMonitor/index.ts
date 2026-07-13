import type { ToolDefinition } from '../../types';
import { moistureSaturationMonitor } from './entry';

export * from './entry';

export const MOISTURE_SATURATION_MONITOR_TOOL: ToolDefinition = {
  entry: moistureSaturationMonitor,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
  FAQComponent: () => import('./faq.astro'),
};
