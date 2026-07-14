import type { SavedPrecisionSuiteState, UnitSystem, CurrencyCode } from './types';
import { currencyRates } from './types';
import type { SuiteModuleId } from './logic';

export const loadSavedState = (storageKey: string): SavedPrecisionSuiteState | null => {
  try {
    const raw = window.localStorage?.getItem(storageKey);
    return raw ? JSON.parse(raw) as SavedPrecisionSuiteState : null;
  } catch {
    window.localStorage?.removeItem(storageKey);
    return null;
  }
};

export const saveCurrentState = (
  storageKey: string,
  root: HTMLElement,
  cfg: { module: string; unitSystem: string; currency: string }
) => {
  try {
    const values = Object.fromEntries(
      Array.from(root.querySelectorAll<HTMLInputElement>('[data-input]')).map((input) => [
        input.dataset.input || '',
        input.value,
      ])
    );
    window.localStorage?.setItem(
      storageKey,
      JSON.stringify({
        module: cfg.module,
        unitSystem: cfg.unitSystem,
        currency: cfg.currency,
        values,
      })
    );
  } catch {
    window.localStorage?.removeItem(storageKey);
  }
};

export const restoreUnitSystem = (root: HTMLElement, unitSystem?: UnitSystem): UnitSystem | null => {
  if (unitSystem !== 'metric' && unitSystem !== 'imperial') return null;
  root.querySelectorAll<HTMLButtonElement>('[data-unit-system]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.unitSystem === unitSystem));
  });
  return unitSystem;
};

export const restoreCurrency = (el: HTMLSelectElement | null, currency?: CurrencyCode): CurrencyCode | null => {
  if (!currency || !(currency in currencyRates)) return null;
  if (el) el.value = currency;
  return currency;
};

export const restoreModule = (root: HTMLElement, module?: string): SuiteModuleId | null => {
  if (!module) return null;
  const selected = root.querySelector<HTMLButtonElement>(`[data-module="${module}"]`);
  if (!selected) return null;
  root.querySelectorAll<HTMLButtonElement>('[data-module]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button === selected));
  });
  return module as SuiteModuleId;
};

export const restoreValues = (root: HTMLElement, values?: Record<string, string>) => {
  Object.entries(values ?? {}).forEach(([key, value]) => {
    const input = root.querySelector<HTMLInputElement>(`[data-input="${key}"]`);
    if (input && typeof value === 'string') input.value = value;
  });
};
