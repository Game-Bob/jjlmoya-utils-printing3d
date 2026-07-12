import type { ToolDefinition } from '../../types';
import { resinHollowingDrainageCalculator } from './entry';

export * from './entry';

export const RESIN_HOLLOWING_DRAINAGE_CALCULATOR_TOOL: ToolDefinition = {
  entry: resinHollowingDrainageCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
  FAQComponent: () => import('./faq.astro'),
};
