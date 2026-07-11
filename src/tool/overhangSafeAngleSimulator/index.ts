import type { ToolDefinition } from '../../types';
import { overhangSafeAngleSimulator } from './entry';
export * from './entry';

export const OVERHANG_SAFE_ANGLE_SIMULATOR_TOOL: ToolDefinition = {
  entry: overhangSafeAngleSimulator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
  FAQComponent: () => import('./faq.astro'),
};
