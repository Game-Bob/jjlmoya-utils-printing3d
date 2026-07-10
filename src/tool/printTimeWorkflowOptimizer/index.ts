import type { ToolDefinition } from '../../types';
import { printTimeWorkflowOptimizer } from './entry';

export * from './entry';

export const PRINT_TIME_WORKFLOW_OPTIMIZER_TOOL: ToolDefinition = {
  entry: printTimeWorkflowOptimizer,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
  FAQComponent: () => import('./faq.astro'),
};
