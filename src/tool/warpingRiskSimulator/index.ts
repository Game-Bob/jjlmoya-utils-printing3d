import type { ToolDefinition } from '../../types';
import { warpingRiskSimulator } from './entry';
export * from './entry';

export const WARPING_RISK_SIMULATOR_TOOL: ToolDefinition = {
  entry: warpingRiskSimulator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
  FAQComponent: () => import('./faq.astro'),
};
