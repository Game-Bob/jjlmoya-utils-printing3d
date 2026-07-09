import type { ToolDefinition } from '../../types';
import { bedThermalInertiaStabilizationCalculator } from './entry';
export * from './entry';

export const BED_THERMAL_INERTIA_STABILIZATION_CALCULATOR_TOOL: ToolDefinition = {
  entry: bedThermalInertiaStabilizationCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
  FAQComponent: () => import('./faq.astro'),
};
