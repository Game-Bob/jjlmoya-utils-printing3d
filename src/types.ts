import type { SEOSection as SharedSEOSection } from '@jjlmoya/utils-shared';
import type { WithContext, Thing } from 'schema-dts';

export type SEOSection = SharedSEOSection | { type: 'tool'; toolKey: string };

export type KnownLocale =
  | 'ar' | 'da' | 'de' | 'en' | 'es' | 'fi'
  | 'fr' | 'id' | 'it' | 'ja' | 'ko' | 'nb' | 'nl'
  | 'pl' | 'pt' | 'ru' | 'sv' | 'tr' | 'zh';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BibliographyEntry {
  name: string;
  url: string;
}

export interface HowToStep {
  name: string;
  text: string;
}

export interface ToolLocaleContent<TUI = Record<string, string>> {
  slug: string;
  title: string;
  description: string;
  ui: TUI;
  seo: SEOSection[];
  faq: FAQItem[];
  bibliography: BibliographyEntry[];
  howTo: HowToStep[];
  schemas: WithContext<Thing>[];
}

export interface CategoryLocaleContent {
  slug: string;
  title: string;
  description: string;
  seo: SEOSection[];
}

export type LocaleLoader<T> = () => Promise<T>;

export type LocaleMap<T> = Partial<Record<KnownLocale, LocaleLoader<T>>>;

export interface Printing3dToolEntry<TUI = Record<string, string>> {
  id: string;
  icons: {
    bg: string;
    fg: string;
  };
  i18n: LocaleMap<ToolLocaleContent<TUI>>;
}

export interface Printing3dCategoryEntry {
  icon: string;
  tools: Printing3dToolEntry<any>[];
  i18n: LocaleMap<CategoryLocaleContent>;
}

export interface ToolDefinition {
  entry: Printing3dToolEntry<any>;
  Component: unknown;
  SEOComponent: unknown;
  BibliographyComponent: unknown;
  FAQComponent: unknown;
}

