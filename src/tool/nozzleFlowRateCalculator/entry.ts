import type { Printing3dToolEntry } from '../../types';
import type { NozzleFlowRateCalculatorUI } from './ui';
import { createLocalizedContent } from './localized';

export const nozzleFlowRateCalculator: Printing3dToolEntry<NozzleFlowRateCalculatorUI> = {
  id: 'nozzle-flow-rate-calculator',
  icons: {
    bg: 'mdi:printer-3d-nozzle',
    fg: 'mdi:ray-start-arrow',
  },
  i18n: {
    en: () => import('./i18n/en').then((m) => m.content),
    de: () => Promise.resolve(createLocalizedContent('de')),
    es: () => Promise.resolve(createLocalizedContent('es')),
    fr: () => Promise.resolve(createLocalizedContent('fr')),
    id: () => Promise.resolve(createLocalizedContent('id')),
    it: () => Promise.resolve(createLocalizedContent('it')),
    ja: () => Promise.resolve(createLocalizedContent('ja')),
    ko: () => Promise.resolve(createLocalizedContent('ko')),
    nl: () => Promise.resolve(createLocalizedContent('nl')),
    pl: () => Promise.resolve(createLocalizedContent('pl')),
    pt: () => Promise.resolve(createLocalizedContent('pt')),
    ru: () => Promise.resolve(createLocalizedContent('ru')),
    sv: () => Promise.resolve(createLocalizedContent('sv')),
    tr: () => Promise.resolve(createLocalizedContent('tr')),
    zh: () => Promise.resolve(createLocalizedContent('zh')),
  },
};
