import type { ToolDefinition } from '../../types';
import { stepperDriverMicrosteppingCalculator } from './entry';
export * from './entry';

export const STEPPER_DRIVER_MICROSTEPPING_CALCULATOR_TOOL: ToolDefinition = {
  entry: stepperDriverMicrosteppingCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
  FAQComponent: () => import('./faq.astro'),
};
