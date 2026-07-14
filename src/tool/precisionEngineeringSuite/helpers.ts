import type { PrecisionSuiteInputs } from './logic';
import { suiteDefaults } from './logic';
import type { UnitSystem, CurrencyCode } from './types';
import { currencyRates } from './types';

export const lengthKeys = ['threadNominalMm', 'threadPitchMm', 'shaftNominalMm', 'holeAllowanceMm', 'shaftAllowanceMm'];
export const volumeKeys = ['objectVolumeCm3', 'purgeVolumeCm3'];
export const massKeys = ['filamentMassG'];
export const moneyKeys = ['materialCost', 'machineRate', 'energyPrice', 'laborRate', 'postProcessRate', 'printerCost', 'avgSalePrice'];

export const toMetric = (key: keyof PrecisionSuiteInputs, value: number, unitSystem: UnitSystem): number => {
  if (unitSystem === 'metric') return value;
  if (lengthKeys.includes(key)) return value * 25.4;
  if (volumeKeys.includes(key)) return value * 16.387064;
  if (massKeys.includes(key)) return value * 28.349523125;
  if (key === 'dryingTemperatureC') return (value - 32) * 5 / 9;
  return value;
};

export const fromMetric = (key: string, value: number, unitSystem: UnitSystem): number => {
  if (unitSystem === 'metric') return value;
  if (lengthKeys.includes(key)) return value / 25.4;
  if (volumeKeys.includes(key)) return value / 16.387064;
  if (massKeys.includes(key)) return value / 28.349523125;
  if (key === 'dryingTemperatureC') return value * 9 / 5 + 32;
  return value;
};

export const readInputs = (root: HTMLElement, currency: CurrencyCode, unitSystem: UnitSystem): Partial<PrecisionSuiteInputs> => {
  const data: Record<string, number> = {};
  root.querySelectorAll<HTMLInputElement>('[data-input]').forEach((input) => {
    const key = input.dataset.input as keyof PrecisionSuiteInputs;
    const raw = parseFloat(input.value || '');
    const value = Number.isFinite(raw) ? raw : suiteDefaults[key];
    const isMoney = moneyKeys.includes(key);
    data[key] = isMoney ? value / currencyRates[currency] : toMetric(key, value, unitSystem);
  });
  return data;
};
