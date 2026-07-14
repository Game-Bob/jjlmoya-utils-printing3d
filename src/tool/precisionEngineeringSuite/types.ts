export type UnitSystem = 'metric' | 'imperial';

export type CurrencyCode =
  | 'EUR'
  | 'USD'
  | 'GBP'
  | 'CAD'
  | 'AUD'
  | 'CHF'
  | 'MXN'
  | 'BRL'
  | 'ARS'
  | 'CLP'
  | 'COP'
  | 'PEN'
  | 'JPY'
  | 'CNY'
  | 'KRW'
  | 'INR'
  | 'PLN'
  | 'RUB'
  | 'SEK'
  | 'NOK'
  | 'DKK'
  | 'TRY';

export interface SavedPrecisionSuiteState {
  module?: string;
  unitSystem?: UnitSystem;
  currency?: CurrencyCode;
  values?: Record<string, string>;
}

export type StatusTextMap = Record<'nominal' | 'watch' | 'critical', string>;
export type CopyFieldMap = Record<string, string>;
export type DisplayUnitMap = Record<string, string>;

export const currencyRates: Record<CurrencyCode, number> = {
  EUR: 1,
  USD: 1.09,
  GBP: 0.84,
  CAD: 1.49,
  AUD: 1.65,
  CHF: 0.96,
  MXN: 19.6,
  BRL: 5.95,
  ARS: 1015,
  CLP: 1010,
  COP: 4300,
  PEN: 4.06,
  JPY: 171,
  CNY: 7.86,
  KRW: 1500,
  INR: 91,
  PLN: 4.28,
  RUB: 96,
  SEK: 11.2,
  NOK: 11.6,
  DKK: 7.46,
  TRY: 35.4,
};

export const currencySymbols: Record<CurrencyCode, string> = {
  EUR: '€',
  USD: '$',
  GBP: '£',
  CAD: 'C$',
  AUD: 'A$',
  CHF: 'Fr',
  MXN: '$',
  BRL: 'R$',
  ARS: '$',
  CLP: '$',
  COP: '$',
  PEN: 'S/',
  JPY: '¥',
  CNY: '¥',
  KRW: '₩',
  INR: '₹',
  PLN: 'zł',
  RUB: '₽',
  SEK: 'kr',
  NOK: 'kr',
  DKK: 'kr',
  TRY: '₺',
};

export const regionCurrency: Record<string, CurrencyCode> = {
  US: 'USD',
  GB: 'GBP',
  CA: 'CAD',
  AU: 'AUD',
  CH: 'CHF',
  MX: 'MXN',
  BR: 'BRL',
  AR: 'ARS',
  CL: 'CLP',
  CO: 'COP',
  PE: 'PEN',
  JP: 'JPY',
  CN: 'CNY',
  KR: 'KRW',
  IN: 'INR',
  PL: 'PLN',
  RU: 'RUB',
  SE: 'SEK',
  NO: 'NOK',
  DK: 'DKK',
  TR: 'TRY',
  ES: 'EUR',
  FR: 'EUR',
  DE: 'EUR',
  IT: 'EUR',
  PT: 'EUR',
  NL: 'EUR',
};
