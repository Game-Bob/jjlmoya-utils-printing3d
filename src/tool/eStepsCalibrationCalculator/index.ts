import type { ToolDefinition } from '../../types';
import { eStepsCalibrationCalculator } from './entry';
export * from './entry';

export const E_STEPS_CALIBRATION_CALCULATOR_TOOL: ToolDefinition = {
  entry: eStepsCalibrationCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
  FAQComponent: () => import('./faq.astro'),
};
