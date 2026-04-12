import type { Printing3dToolEntry, ToolDefinition } from '../../types';

import PrintingCostCalculatorComponent from './component.astro';
import PrintingCostCalculatorSEO from './seo.astro';
import PrintingCostCalculatorBibliography from './bibliography.astro';
import PrintingCostCalculatorFAQ from './faq.astro';

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const printingCostCalculator: Printing3dToolEntry = {
  id: 'calculadora-coste-impresion-3d',
  icons: {
    bg: 'mdi:printer-3d',
    fg: 'mdi:calculator',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { PrintingCostCalculatorComponent, PrintingCostCalculatorSEO, PrintingCostCalculatorBibliography, PrintingCostCalculatorFAQ };

export const PRINTING_COST_CALCULATOR_TOOL: ToolDefinition = {
  entry: printingCostCalculator,
  Component: PrintingCostCalculatorComponent,
  SEOComponent: PrintingCostCalculatorSEO,
  BibliographyComponent: PrintingCostCalculatorBibliography,
  FAQComponent: PrintingCostCalculatorFAQ,
};
