import type { Printing3dCategoryEntry } from '../types';

export const printing3dCategory: Printing3dCategoryEntry = {
  icon: 'mdi:printer-3d',
  tools: [],
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

