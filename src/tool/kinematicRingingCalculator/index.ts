import type { ToolDefinition } from '../../types';
import { kinematicRingingCalculator } from './entry';
export * from './entry';

export const KINEMATIC_RINGING_CALCULATOR_TOOL: ToolDefinition = {
  entry: kinematicRingingCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
  FAQComponent: () => import('./faq.astro'),
};
