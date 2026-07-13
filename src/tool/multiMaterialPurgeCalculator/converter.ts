import { calculateMultiMaterialPurge, colorProfiles, transitionFactorMatrix } from './logic';
import type { FilamentColorId, PurgeTransition } from './logic';

type UnitSystem = 'metric' | 'imperial';
type CurrencyCode = 'EUR' | 'USD' | 'GBP' | 'JPY' | 'CAD' | 'AUD' | 'CHF' | 'MXN' | 'BRL' | 'CNY' | 'IDR' | 'KRW' | 'PLN' | 'RUB' | 'SEK' | 'TRY';
type SavedState = {
  unitSystem?: UnitSystem;
  currency?: CurrencyCode;
  values?: Record<string, string>;
  transitions?: Array<{ from?: FilamentColorId; to?: FilamentColorId; count?: string }>;
};

class MultiMaterialPurgeCalculator {
  private root: HTMLElement;
  private storageKey = 'multi-material-purge-calculator:v1';
  private unitSystem: UnitSystem = 'metric';
  private currency: CurrencyCode = 'EUR';
  private rates: Record<CurrencyCode, number> = {
    EUR: 1,
    USD: 1.09,
    GBP: 0.84,
    JPY: 171,
    CAD: 1.49,
    AUD: 1.65,
    CHF: 0.96,
    MXN: 19.6,
    BRL: 5.95,
    CNY: 7.86,
    IDR: 17600,
    KRW: 1500,
    PLN: 4.28,
    RUB: 96,
    SEK: 11.2,
    TRY: 35.4,
  };

  constructor(root: HTMLElement) {
    this.root = root;
    this.loadState();
    this.bindEvents();
    this.calculate();
  }

  private el<T extends HTMLElement>(selector: string) {
    return this.root.querySelector(selector) as T;
  }

  private numberValue(id: string, fallback: number) {
    const value = parseFloat(this.el<HTMLInputElement>(`#${id}`).value || '');
    return Number.isFinite(value) ? value : fallback;
  }

  private volumeToCm3(value: number) {
    return this.unitSystem === 'imperial' ? value * 16.387064 : value;
  }

  private volumeFromCm3(value: number) {
    return this.unitSystem === 'imperial' ? value / 16.387064 : value;
  }

  private massFromG(value: number) {
    return this.unitSystem === 'imperial' ? value / 28.349523125 : value;
  }

  private volumeUnit() {
    return this.unitSystem === 'imperial' ? this.root.dataset.in3Unit || '' : this.root.dataset.cm3Unit || '';
  }

  private massUnit() {
    return this.unitSystem === 'imperial' ? this.root.dataset.ozUnit || '' : this.root.dataset.gUnit || '';
  }

  private colorName(color: FilamentColorId) {
    try {
      const labels = JSON.parse(this.root.dataset.colorLabels || '{}') as Record<string, string>;
      return labels[color] || color;
    } catch {
      return color;
    }
  }

  private bindEvents() {
    this.root.querySelectorAll('input').forEach((input) => input.addEventListener('input', () => this.calculate()));
    this.root.querySelectorAll<HTMLButtonElement>('[data-unit-system]').forEach((button) => {
      button.addEventListener('click', () => this.setUnitSystem(button.dataset.unitSystem === 'imperial' ? 'imperial' : 'metric'));
    });
    this.el<HTMLSelectElement>('#mmpc-currency').addEventListener('change', (event) => {
      this.setCurrency((event.target as HTMLSelectElement).value as CurrencyCode);
    });
    this.root.querySelectorAll<HTMLButtonElement>('.mmpc-color').forEach((button) => {
      button.addEventListener('click', () => {
        const picker = button.closest('.mmpc-color-picker');
        picker?.querySelectorAll('.mmpc-color').forEach((item) => item.setAttribute('aria-pressed', 'false'));
        button.setAttribute('aria-pressed', 'true');
        this.calculate();
      });
    });
  }

  private applyStoredUnitSystem(unitSystem?: string) {
    if (unitSystem === 'metric' || unitSystem === 'imperial') {
      this.unitSystem = unitSystem;
      this.root.querySelectorAll<HTMLButtonElement>('[data-unit-system]').forEach((button) => {
        button.setAttribute('aria-pressed', String(button.dataset.unitSystem === this.unitSystem));
      });
    }
  }

  private applyStoredCurrency(currency?: string) {
    if (currency && currency in this.rates) {
      this.currency = currency as CurrencyCode;
      this.el<HTMLSelectElement>('#mmpc-currency').value = currency;
    }
  }

  private applyStoredInputs(values?: Record<string, string>) {
    Object.entries(values ?? {}).forEach(([id, value]) => {
      const input = this.root.querySelector<HTMLInputElement>(`#${id}`);
      if (input && typeof value === 'string') {
        input.value = value;
      }
    });
  }

  private applyStoredTransitions(transitions?: Array<{ from?: FilamentColorId; to?: FilamentColorId; count?: string }>) {
    this.root.querySelectorAll<HTMLElement>('[data-transition-row]').forEach((row, index) => {
      const transition = transitions?.[index];
      if (!transition) return;
      this.setPickerColor(row, 'from', transition.from);
      this.setPickerColor(row, 'to', transition.to);
      const count = row.querySelector<HTMLInputElement>('[data-transition-count]');
      if (count && typeof transition.count === 'string') {
        count.value = transition.count;
      }
    });
  }

  private loadState() {
    try {
      const raw = window.localStorage?.getItem(this.storageKey);
      if (!raw) return;
      const state = JSON.parse(raw) as SavedState;
      this.applyStoredUnitSystem(state.unitSystem);
      this.applyStoredCurrency(state.currency);
      this.applyStoredInputs(state.values);
      this.applyStoredTransitions(state.transitions);
    } catch {
      window.localStorage?.removeItem(this.storageKey);
    }
  }

  private setPickerColor(row: HTMLElement, pickerName: 'from' | 'to', color?: FilamentColorId) {
    if (!color || !(color in colorProfiles)) return;
    const picker = row.querySelector<HTMLElement>(`[data-color-picker="${pickerName}"]`);
    picker?.querySelectorAll('.mmpc-color').forEach((item) => item.setAttribute('aria-pressed', 'false'));
    picker?.querySelector<HTMLButtonElement>(`[data-color="${color}"]`)?.setAttribute('aria-pressed', 'true');
  }

  private saveState() {
    try {
      const inputIds = ['mmpc-object-volume', 'mmpc-base-purge', 'mmpc-density', 'mmpc-price'];
      const values = Object.fromEntries(inputIds.map((id) => [id, this.el<HTMLInputElement>(`#${id}`).value]));
      const transitions = Array.from(this.root.querySelectorAll<HTMLElement>('[data-transition-row]')).map((row) => ({
        from: row.querySelector<HTMLButtonElement>('[data-color-picker="from"] [aria-pressed="true"]')?.dataset.color as FilamentColorId | undefined,
        to: row.querySelector<HTMLButtonElement>('[data-color-picker="to"] [aria-pressed="true"]')?.dataset.color as FilamentColorId | undefined,
        count: row.querySelector<HTMLInputElement>('[data-transition-count]')?.value,
      }));
      window.localStorage?.setItem(this.storageKey, JSON.stringify({ unitSystem: this.unitSystem, currency: this.currency, values, transitions }));
    } catch {
      window.localStorage?.removeItem(this.storageKey);
    }
  }

  private setCurrency(next: CurrencyCode) {
    if (next === this.currency) return;
    const price = this.el<HTMLInputElement>('#mmpc-price');
    const rate = this.rates[next] / this.rates[this.currency];
    const zeroDecimal = ['JPY', 'IDR', 'KRW'].includes(next);
    price.value = (parseFloat(price.value || '0') * rate).toFixed(zeroDecimal ? 0 : 2);
    this.currency = next;
    this.calculate();
  }

  private setUnitSystem(next: UnitSystem) {
    if (next === this.unitSystem) return;
    ['mmpc-object-volume', 'mmpc-base-purge'].forEach((id) => {
      const input = this.el<HTMLInputElement>(`#${id}`);
      const currentCm3 = this.volumeToCm3(parseFloat(input.value || '0'));
      const converted = next === 'imperial' ? currentCm3 / 16.387064 : currentCm3;
      input.value = converted.toFixed(2).replace(/\.?0+$/, '');
    });
    this.unitSystem = next;
    this.root.querySelectorAll<HTMLButtonElement>('[data-unit-system]').forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.unitSystem === next));
    });
    this.calculate();
  }

  private transitions(): PurgeTransition[] {
    return Array.from(this.root.querySelectorAll<HTMLElement>('[data-transition-row]')).map((row) => {
      const from = row.querySelector<HTMLButtonElement>('[data-color-picker="from"] [aria-pressed="true"]')?.dataset.color as FilamentColorId;
      const to = row.querySelector<HTMLButtonElement>('[data-color-picker="to"] [aria-pressed="true"]')?.dataset.color as FilamentColorId;
      const count = parseFloat(row.querySelector<HTMLInputElement>('[data-transition-count]')?.value || '0');
      return { from, to, count };
    });
  }

  private money(value: number) {
    const zeroDecimal = ['JPY', 'IDR', 'KRW'].includes(this.currency);
    return new Intl.NumberFormat(document.documentElement.lang || undefined, { style: 'currency', currency: this.currency, maximumFractionDigits: zeroDecimal ? 0 : 2 }).format(value);
  }

  private formatVolume(valueCm3: number) {
    return `${this.volumeFromCm3(valueCm3).toFixed(1)} ${this.volumeUnit()}`;
  }

  private updateTransitionFactors(transitions: PurgeTransition[]) {
    this.root.querySelectorAll<HTMLElement>('[data-transition-row]').forEach((row, index) => {
      const transition = transitions[index];
      const factor = transitionFactorMatrix[transition.from]?.[transition.to] ?? 1;
      const output = row.querySelector<HTMLOutputElement>('[data-transition-factor]');
      if (output) output.value = `${factor.toFixed(2)}x`;
    });
  }

  private updateTable(result: ReturnType<typeof calculateMultiMaterialPurge>) {
    const body = this.el<HTMLTableSectionElement>('#mmpc-transition-table');
    body.innerHTML = result.transitions.map((transition) => {
      const from = this.colorName(transition.from);
      const to = this.colorName(transition.to);
      return `<tr><td>${from} -> ${to} x${transition.count}</td><td>${transition.factor.toFixed(2)}x</td><td>${this.formatVolume(transition.purgeVolumeCm3)}</td></tr>`;
    }).join('');
  }

  private calculate() {
    const transitions = this.transitions();
    const result = calculateMultiMaterialPurge({
      objectVolumeCm3: this.volumeToCm3(this.numberValue('mmpc-object-volume', 120)),
      basePurgeVolumeCm3: this.volumeToCm3(this.numberValue('mmpc-base-purge', 18)),
      densityGcm3: this.numberValue('mmpc-density', 1.24),
      pricePerKg: this.numberValue('mmpc-price', 24),
      transitions,
    });

    this.updateTransitionFactors(transitions);
    this.el<HTMLElement>('#mmpc-object-bar').style.width = `${Math.max(3, result.objectRatio * 100)}%`;
    this.el<HTMLElement>('#mmpc-purge-bar').style.width = `${Math.max(3, result.purgeRatio * 100)}%`;
    this.el<HTMLElement>('.mmpc-dashboard').dataset.severity = result.severity;
    this.el<HTMLElement>('#mmpc-object-volume-label').textContent = this.formatVolume(result.objectVolumeCm3);
    this.el<HTMLElement>('#mmpc-purge-volume-label').textContent = this.formatVolume(result.totalPurgeVolumeCm3);
    this.el<HTMLElement>('#mmpc-waste-volume').textContent = this.formatVolume(result.totalPurgeVolumeCm3);
    this.el<HTMLElement>('#mmpc-waste-mass').textContent = `${this.massFromG(result.wasteMassG).toFixed(1)} ${this.massUnit()}`;
    this.el<HTMLElement>('#mmpc-waste-cost').textContent = this.money(result.wasteCost);
    this.el<HTMLElement>('#mmpc-purge-ratio').textContent = `${(result.purgeRatio * 100).toFixed(1)}%`;
    const high = result.severity === 'high';
    this.el<HTMLElement>('#mmpc-alert-title').textContent = high ? this.root.dataset.alertTitle || '' : this.root.dataset.efficientText || '';
    this.el<HTMLElement>('#mmpc-alert-text').textContent = high ? this.root.dataset.alertText || '' : this.root.dataset.efficientText || '';
    this.updateTable(result);
    this.saveState();
  }
}

const initMultiMaterialPurgeCalculator = () => {
  document.querySelectorAll<HTMLElement>('.mmpc-root').forEach((root) => new MultiMaterialPurgeCalculator(root));
};

document.addEventListener('astro:page-load', initMultiMaterialPurgeCalculator);
initMultiMaterialPurgeCalculator();
