import type { ToolDefinition } from '../../types';
import { machineHourlyRateCalculator } from './entry';

export * from './entry';

export const MACHINE_HOURLY_RATE_CALCULATOR_TOOL: ToolDefinition = {
  entry: machineHourlyRateCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
  FAQComponent: () => import('./faq.astro'),
};
