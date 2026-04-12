import type { ToolDefinition } from '../../types';
import FlowCalculatorComponent from './component.astro';
import FlowCalculatorSEO from './seo.astro';
import FlowCalculatorBibliography from './bibliography.astro';
import FlowCalculatorFAQ from './faq.astro';
import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export {
  FlowCalculatorComponent,
  FlowCalculatorSEO,
  FlowCalculatorBibliography,
  FlowCalculatorFAQ,
};

export const FLOW_CALCULATOR_TOOL: ToolDefinition = {
  entry: {
    id: 'flow-calculator',
    icons: {
      bg: 'mdi:water-percent',
      fg: 'mdi:speedometer',
    },
    i18n: {
      es: async () => es,
      en: async () => en,
      fr: async () => fr,
    },
  },
  Component: FlowCalculatorComponent,
  SEOComponent: FlowCalculatorSEO,
  BibliographyComponent: FlowCalculatorBibliography,
  FAQComponent: FlowCalculatorFAQ,
};
