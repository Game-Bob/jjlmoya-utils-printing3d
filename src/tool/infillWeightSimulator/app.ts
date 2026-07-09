import { calculateInfillWeight } from './logic';
import type { InfillPattern } from './logic';

const GRAMS_PER_OUNCE = 28.349523125;
const GRAMS_PER_POUND = 453.59237;
const CURRENCY_RATES = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.78,
  CAD: 1.36,
  AUD: 1.52,
  CHF: 0.9,
  CNY: 7.25,
  INR: 83.5,
  BRL: 5.45,
  MXN: 18.1,
  RUB: 88,
  PLN: 3.95,
  SEK: 10.55,
  NOK: 10.65,
  DKK: 6.85,
  TRY: 33,
  JPY: 157,
} as const;
const VALID_PATTERNS: InfillPattern[] = ['lines', 'grid', 'triangles', 'gyroid', 'cubic', 'honeycomb', 'concentric'];

type CurrencyCode = keyof typeof CURRENCY_RATES;

interface CurrentInputs {
  infillPercent: number;
  shellSharePercent: number;
  pattern: InfillPattern;
  wastePercent: number;
}

interface StoredInfillWeightState extends CurrentInputs {
  unit: 'metric' | 'imperial';
  currency: CurrencyCode;
  fullWeightGrams: number;
  spoolPrice: number;
}

class InfillWeightApp {
  private readonly storageKey = 'jjlmoya-printing3d-infill-weight-state-v1';
  private unit: 'metric' | 'imperial' = 'metric';
  private currency: CurrencyCode = 'USD';
  private fullWeightGrams = 240;

  constructor(private root: HTMLElement) {
    this.restoreState();
    this.bind();
    this.render();
  }

  private input(id: string) {
    return this.root.querySelector<HTMLInputElement>(id);
  }

  private output(id: string) {
    return this.root.querySelector<HTMLElement>(id);
  }

  private bind() {
    this.root.querySelectorAll('input, select:not(#iws-currency)').forEach((el) => {
      el.addEventListener('input', () => this.render());
    });
    this.bindCurrency();
    this.bindUnits();
  }

  private bindCurrency() {
    this.root.querySelector<HTMLSelectElement>('#iws-currency')?.addEventListener('change', (event) => {
      const nextCurrency = event.currentTarget.value as CurrencyCode;
      this.convertVisibleSpoolPrice(nextCurrency);
      this.currency = nextCurrency;
      this.render();
    });
  }

  private bindUnits() {
    this.root.querySelectorAll<HTMLButtonElement>('[data-unit]').forEach((button) => {
      button.addEventListener('click', () => this.changeUnit(button));
    });
  }

  private changeUnit(button: HTMLButtonElement) {
    const nextUnit = button.dataset.unit === 'imperial' ? 'imperial' : 'metric';
    if (nextUnit === this.unit) return;
    this.captureWeightInGrams();
    this.convertVisibleSpoolPriceUnit(nextUnit);
    this.unit = nextUnit;
    this.root.querySelectorAll('[data-unit]').forEach((item) => item.classList.toggle('is-active', item === button));
    this.syncWeightInput();
    this.render();
  }

  private restoreState() {
    try {
      const raw = window.localStorage?.getItem(this.storageKey);
      if (!raw) return;
      const state = JSON.parse(raw) as Partial<StoredInfillWeightState>;
      if (!this.isValidState(state)) return;
      this.applyState(state);
    } catch {
      window.localStorage?.removeItem(this.storageKey);
    }
  }

  private applyState(state: StoredInfillWeightState) {
    this.unit = state.unit;
    this.currency = state.currency;
    this.fullWeightGrams = state.fullWeightGrams;
    this.setInputValue('#iws-infill', state.infillPercent);
    this.setInputValue('#iws-shell', state.shellSharePercent);
    this.setInputValue('#iws-spool-price', state.spoolPrice);
    this.setInputValue('#iws-waste', state.wastePercent);
    this.setSelectValue('#iws-pattern', state.pattern);
    this.setSelectValue('#iws-currency', state.currency);
    this.syncUnitButtons();
    this.syncWeightInput();
  }

  private isValidState(state: Partial<StoredInfillWeightState>): state is StoredInfillWeightState {
    return this.hasValidEnums(state) && this.hasValidNumbers(state);
  }

  private hasValidEnums(state: Partial<StoredInfillWeightState>) {
    return (
      (state.unit === 'metric' || state.unit === 'imperial') &&
      typeof state.currency === 'string' &&
      state.currency in CURRENCY_RATES &&
      typeof state.pattern === 'string' &&
      VALID_PATTERNS.includes(state.pattern as InfillPattern)
    );
  }

  private hasValidNumbers(state: Partial<StoredInfillWeightState>) {
    const keys = ['fullWeightGrams', 'infillPercent', 'shellSharePercent', 'spoolPrice', 'wastePercent'] as const;
    return keys.every((key) => this.isFiniteNumber(state[key]));
  }

  private isFiniteNumber(value: unknown): value is number {
    return typeof value === 'number' && Number.isFinite(value);
  }

  private setInputValue(id: string, value: number) {
    const input = this.input(id);
    if (input) input.value = value.toString();
  }

  private setSelectValue(id: string, value: string) {
    const select = this.root.querySelector<HTMLSelectElement>(id);
    if (select) select.value = value;
  }

  private syncUnitButtons() {
    this.root.querySelectorAll<HTMLButtonElement>('[data-unit]').forEach((button) => {
      button.classList.toggle('is-active', button.dataset.unit === this.unit);
    });
  }

  private saveState(inputs: CurrentInputs) {
    try {
      const state: StoredInfillWeightState = {
        ...inputs,
        unit: this.unit,
        currency: this.currency,
        fullWeightGrams: this.fullWeightGrams,
        spoolPrice: this.numberValue('#iws-spool-price'),
      };
      window.localStorage?.setItem(this.storageKey, JSON.stringify(state));
    } catch {
    }
  }

  private numberValue(id: string) {
    return parseFloat(this.input(id)?.value || '0') || 0;
  }

  private captureWeightInGrams() {
    const visibleWeight = this.numberValue('#iws-full-weight');
    this.fullWeightGrams = this.unit === 'imperial' ? visibleWeight * GRAMS_PER_OUNCE : visibleWeight;
  }

  private syncWeightInput() {
    const weightInput = this.input('#iws-full-weight');
    if (!weightInput) return;
    weightInput.value =
      this.unit === 'imperial' ? (this.fullWeightGrams / GRAMS_PER_OUNCE).toFixed(2) : this.fullWeightGrams.toFixed(0);
  }

  private convertVisibleSpoolPrice(nextCurrency: CurrencyCode) {
    const priceInput = this.input('#iws-spool-price');
    if (!priceInput || nextCurrency === this.currency) return;
    const converted = (this.numberValue('#iws-spool-price') / CURRENCY_RATES[this.currency]) * CURRENCY_RATES[nextCurrency];
    priceInput.value = ['JPY', 'INR', 'RUB', 'TRY'].includes(nextCurrency) ? converted.toFixed(0) : converted.toFixed(2);
  }

  private convertVisibleSpoolPriceUnit(nextUnit: 'metric' | 'imperial') {
    const priceInput = this.input('#iws-spool-price');
    if (!priceInput || nextUnit === this.unit) return;
    const ratio = nextUnit === 'imperial' ? GRAMS_PER_POUND / 1000 : 1000 / GRAMS_PER_POUND;
    priceInput.value = (this.numberValue('#iws-spool-price') * ratio).toFixed(2);
  }

  private visibleSpoolPricePerKg() {
    const visiblePrice = this.numberValue('#iws-spool-price');
    return this.unit === 'imperial' ? visiblePrice * (1000 / GRAMS_PER_POUND) : visiblePrice;
  }

  private formatWeight(grams: number) {
    if (this.unit !== 'imperial') return `${grams.toFixed(0)} ${this.datasetText('gramUnit')}`;
    const ounces = grams / GRAMS_PER_OUNCE;
    return ounces >= 16
      ? `${(ounces / 16).toFixed(2)} ${this.datasetText('poundUnit')}`
      : `${ounces.toFixed(2)} ${this.datasetText('ounceUnit')}`;
  }

  private resultWeight(grams: number) {
    return this.unit === 'imperial' ? (grams / GRAMS_PER_OUNCE).toFixed(2) : grams.toFixed(0);
  }

  private currentPattern() {
    const value = this.root.querySelector<HTMLSelectElement>('#iws-pattern')?.value as InfillPattern | undefined;
    return value && VALID_PATTERNS.includes(value) ? value : 'gyroid';
  }

  private currentInputs(): CurrentInputs {
    return {
      infillPercent: this.numberValue('#iws-infill'),
      shellSharePercent: this.numberValue('#iws-shell'),
      pattern: this.currentPattern(),
      wastePercent: this.numberValue('#iws-waste'),
    };
  }

  private calculate(inputs: CurrentInputs) {
    return calculateInfillWeight({
      fullWeightGrams: this.fullWeightGrams,
      infillPercent: inputs.infillPercent,
      pattern: inputs.pattern,
      spoolPrice: this.visibleSpoolPricePerKg(),
      shellSharePercent: inputs.shellSharePercent,
      wastePercent: inputs.wastePercent,
    });
  }

  private render() {
    this.captureWeightInGrams();
    const inputs = this.currentInputs();
    const result = this.calculate(inputs);
    this.updateOutputs(inputs, result);
    this.saveState(inputs);
  }

  private updateOutputs(inputs: CurrentInputs, result: ReturnType<typeof calculateInfillWeight>) {
    this.output('#iws-infill-output')!.textContent = inputs.infillPercent.toFixed(0);
    this.output('#iws-shell-output')!.textContent = inputs.shellSharePercent.toFixed(0);
    this.updateResultCards(result);
    this.updateDynamicLabels();
    this.updateBars(result);
    this.updateInsight(inputs.infillPercent);
  }

  private updateResultCards(result: ReturnType<typeof calculateInfillWeight>) {
    this.output('#iws-weight')!.textContent = this.resultWeight(result.estimatedWeightGrams);
    this.output('#iws-saved')!.textContent = this.resultWeight(result.filamentSavedGrams);
    this.output('#iws-cost')!.textContent = result.materialCost.toFixed(2);
    this.output('#iws-cost-saved')!.textContent = result.savedCost.toFixed(2);
    this.output('#iws-effective-density')!.textContent = result.effectiveDensityPercent.toFixed(0);
    this.output('#iws-shell-weight')!.textContent = this.formatWeight(result.shellWeightGrams);
    this.output('#iws-core-weight')!.textContent = this.formatWeight(result.infillWeightGrams);
    this.output('#iws-full-weight-label')!.textContent = this.formatWeight(result.baselineWeightGrams);
    this.output('#iws-target-weight-label')!.textContent = this.formatWeight(result.estimatedWeightGrams);
    this.output('#iws-pattern-impact')!.textContent = `${result.patternMultiplier.toFixed(2)}x`;
  }

  private updateDynamicLabels() {
    const massUnit = this.unit === 'imperial' ? this.datasetText('ounceUnit') : this.datasetText('gramUnit');
    const priceUnit = this.unit === 'imperial' ? this.datasetText('poundUnit') : this.datasetText('kilogramUnit');
    this.setAllText('[data-weight-unit], [data-result-unit]', massUnit);
    this.setAllText('[data-price-mass-unit]', priceUnit);
    this.setAllText('[data-currency-symbol]', this.currencySymbol());
  }

  private currencySymbol() {
    return this.root.querySelector<HTMLOptionElement>(`#iws-currency option[value="${this.currency}"]`)?.dataset.symbol || '';
  }

  private setAllText(selector: string, value: string) {
    this.root.querySelectorAll<HTMLElement>(selector).forEach((el) => {
      el.textContent = value;
    });
  }

  private datasetText(key: keyof DOMStringMap) {
    return this.root.dataset[key] || '';
  }

  private updateBars(result: ReturnType<typeof calculateInfillWeight>) {
    const targetWidth = Math.max((result.estimatedWeightGrams / Math.max(result.baselineWeightGrams, 1)) * 100, 2);
    this.output('#iws-density-bar')!.style.setProperty('--meter-fill', `${Math.min(result.effectiveDensityPercent, 100)}%`);
    this.output('#iws-target-bar')!.style.width = `${Math.min(targetWidth, 100)}%`;
    this.output('#iws-full-bar')!.style.width = '100%';
  }

  private updateInsight(infillPercent: number) {
    const insight = this.output('#iws-insight');
    if (!insight) return;
    insight.textContent = this.insightFor(infillPercent, insight.textContent || '');
  }

  private insightFor(infillPercent: number, fallback: string) {
    if (infillPercent < 15) return this.root.dataset.insightLow || fallback;
    if (infillPercent > 55) return this.root.dataset.insightHigh || fallback;
    return this.root.dataset.insightBalanced || fallback;
  }
}

export const initInfillWeightSimulator = () => {
  document.querySelectorAll<HTMLElement>('[data-iws-root]').forEach((root) => {
    if (root.dataset.ready) return;
    root.dataset.ready = 'true';
    new InfillWeightApp(root);
  });
};
