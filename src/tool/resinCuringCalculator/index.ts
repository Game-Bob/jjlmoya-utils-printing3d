import type { ToolDefinition } from '../../types';
import ResinCuringCalculatorComponent from './component.astro';
import ResinCuringCalculatorSEO from './seo.astro';
import ResinCuringCalculatorBibliography from './bibliography.astro';
import ResinCuringCalculatorFAQ from './faq.astro';
import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export {
  ResinCuringCalculatorComponent,
  ResinCuringCalculatorSEO,
  ResinCuringCalculatorBibliography,
  ResinCuringCalculatorFAQ,
};

export const RESIN_CURING_CALCULATOR_TOOL: ToolDefinition = {
  entry: {
    id: 'resin-curing-calculator',
    icons: {
      bg: 'mdi:flask',
      fg: 'mdi:lightbulb-on',
    },
    i18n: {
      es: async () => es,
      en: async () => en,
      fr: async () => fr,
    },
  },
  Component: ResinCuringCalculatorComponent,
  SEOComponent: ResinCuringCalculatorSEO,
  BibliographyComponent: ResinCuringCalculatorBibliography,
  FAQComponent: ResinCuringCalculatorFAQ,
};
