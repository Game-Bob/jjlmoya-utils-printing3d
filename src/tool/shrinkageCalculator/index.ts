import type { ToolDefinition } from '../../types';
import ShrinkageCalculatorComponent from './component.astro';
import ShrinkageCalculatorSEO from './seo.astro';
import ShrinkageCalculatorBibliography from './bibliography.astro';
import ShrinkageCalculatorFAQ from './faq.astro';

export const SHRINKAGE_CALCULATOR_TOOL: ToolDefinition = {
  entry: {
    id: 'shrinkageCalculator',
    icons: {
      bg: 'mdi:ruler',
      fg: 'mdi:rotate-right',
    },
    i18n: {
      es: () => import('./i18n/es').then((m) => m.content),
      en: () => import('./i18n/en').then((m) => m.content),
      fr: () => import('./i18n/fr').then((m) => m.content),
    },
  },
  Component: ShrinkageCalculatorComponent,
  SEOComponent: ShrinkageCalculatorSEO,
  BibliographyComponent: ShrinkageCalculatorBibliography,
  FAQComponent: ShrinkageCalculatorFAQ,
};

export {
  ShrinkageCalculatorComponent,
  ShrinkageCalculatorSEO,
  ShrinkageCalculatorBibliography,
  ShrinkageCalculatorFAQ,
};
