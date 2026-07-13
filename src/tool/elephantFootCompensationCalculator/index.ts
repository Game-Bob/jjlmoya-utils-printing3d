import type { ToolDefinition } from '../../types';
import { elephantFootCompensationCalculator } from './entry';
export * from './entry';

export const ELEPHANT_FOOT_COMPENSATION_CALCULATOR_TOOL: ToolDefinition = {
  entry: elephantFootCompensationCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
  FAQComponent: () => import('./faq.astro'),
};
