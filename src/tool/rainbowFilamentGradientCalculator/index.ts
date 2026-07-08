import type { ToolDefinition } from '../../types';
import { rainbowFilamentGradientCalculator } from './entry';
export * from './entry';

export const RAINBOW_FILAMENT_GRADIENT_CALCULATOR_TOOL: ToolDefinition = {
  entry: rainbowFilamentGradientCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
  FAQComponent: () => import('./faq.astro'),
};

