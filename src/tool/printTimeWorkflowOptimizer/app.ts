import { calculatePrintTimeScenario } from './logic';
import type { MaterialId, ModelComplexity, PieceType, PrintTimeScenarioParams } from './logic';

const INCH_TO_MM = 25.4;
const CM3_TO_IN3 = 0.0610237441;
const GRAMS_PER_OUNCE = 28.349523125;
const STANDARD_HOTEND_FLOW_LIMIT_MM3S = 12;
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

type UnitSystem = 'metric' | 'imperial';
type Scenario = 'a' | 'b';
type ScenarioResult = ReturnType<typeof calculatePrintTimeScenario>;
type CurrencyCode = keyof typeof CURRENCY_RATES;

interface StoredPrintTimeWorkflowState {
  unit: UnitSystem;
  currency: CurrencyCode;
  activeTab?: Scenario;
  values: Record<string, string>;
}

class PrintTimeWorkflowApp {
  private readonly storageKey = 'jjlmoya-printing3d-print-time-workflow-state-v1';
  private unit: UnitSystem = 'metric';
  private currency: CurrencyCode = 'USD';
  private activeTab: Scenario = 'a';

  constructor(private root: HTMLElement) {
    this.restoreState();
    this.bind();
    this.render();
  }

  private bind() {
    this.root.querySelectorAll('input, select:not([data-ptwo-currency])').forEach((el) => el.addEventListener('input', () => this.render()));
    this.bindCurrency();
    this.bindMobileTabs();
    this.root.querySelectorAll<HTMLButtonElement>('[data-ptwo-unit]').forEach((button) => {
      button.addEventListener('click', () => this.changeUnit(button));
    });
  }

  private bindMobileTabs() {
    this.root.querySelectorAll<HTMLButtonElement>('[data-ptwo-tab]').forEach((button) => {
      button.addEventListener('click', () => {
        this.activeTab = button.dataset.ptwoTab === 'b' ? 'b' : 'a';
        this.syncMobileTabs();
        this.saveState();
      });
    });
  }

  private bindCurrency() {
    this.root.querySelector<HTMLSelectElement>('[data-ptwo-currency]')?.addEventListener('change', (event) => {
      const nextCurrency = event.currentTarget.value as CurrencyCode;
      this.convertVisibleFilamentPrices(nextCurrency);
      this.currency = nextCurrency;
      this.render();
    });
  }

  private changeUnit(button: HTMLButtonElement) {
    const nextUnit = button.dataset.ptwoUnit === 'imperial' ? 'imperial' : 'metric';
    if (nextUnit === this.unit) return;
    this.convertVisibleInputs(nextUnit);
    this.unit = nextUnit;
    this.root.querySelectorAll<HTMLButtonElement>('[data-ptwo-unit]').forEach((item) => {
      item.classList.toggle('is-active', item === button);
    });
    this.render();
  }

  private restoreState() {
    try {
      const raw = window.localStorage?.getItem(this.storageKey);
      if (!raw) return;
      const state = JSON.parse(raw) as Partial<StoredPrintTimeWorkflowState>;
      if (!this.isValidState(state)) return;
      this.unit = state.unit;
      this.currency = state.currency;
      this.activeTab = state.activeTab || 'a';
      if (this.unit === 'imperial') {
        (['a', 'b'] as Scenario[]).forEach((scenario) => {
          this.convertRangeScale(`layer-${scenario}`, 'imperial');
          this.convertRangeScale(`width-${scenario}`, 'imperial');
          this.convertRangeScale(`speed-${scenario}`, 'imperial');
        });
      }
      Object.entries(state.values).forEach(([name, value]) => {
        const input = this.input(name);
        if (input) input.value = value;
      });
      this.setCurrencySelect(state.currency);
      this.root.querySelectorAll<HTMLButtonElement>('[data-ptwo-unit]').forEach((button) => {
        button.classList.toggle('is-active', button.dataset.ptwoUnit === this.unit);
      });
      this.syncSliderOutputs();
      this.syncMobileTabs();
    } catch {
      window.localStorage?.removeItem(this.storageKey);
    }
  }

  private isValidState(state: Partial<StoredPrintTimeWorkflowState>): state is StoredPrintTimeWorkflowState {
    return (
      (state.unit === 'metric' || state.unit === 'imperial') &&
      typeof state.currency === 'string' &&
      state.currency in CURRENCY_RATES &&
      (state.activeTab === undefined || state.activeTab === 'a' || state.activeTab === 'b') &&
      !!state.values &&
      typeof state.values === 'object'
    );
  }

  private saveState() {
    try {
      const values: Record<string, string> = {};
      this.root.querySelectorAll<HTMLInputElement | HTMLSelectElement>('[data-ptwo-input]').forEach((input) => {
        if (input.dataset.ptwoInput) values[input.dataset.ptwoInput] = input.value;
      });
      window.localStorage?.setItem(
        this.storageKey,
        JSON.stringify({ unit: this.unit, currency: this.currency, activeTab: this.activeTab, values }),
      );
    } catch {
    }
  }

  private syncMobileTabs() {
    this.root.querySelectorAll<HTMLButtonElement>('[data-ptwo-tab]').forEach((button) => {
      const isActive = button.dataset.ptwoTab === this.activeTab;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });
    this.root.querySelectorAll<HTMLElement>('[data-ptwo-scenario]').forEach((card) => {
      card.classList.toggle('is-mobile-active', card.dataset.ptwoScenario === this.activeTab);
    });
  }

  private setCurrencySelect(currency: CurrencyCode) {
    const select = this.root.querySelector<HTMLSelectElement>('[data-ptwo-currency]');
    if (select) select.value = currency;
  }

  private convertVisibleFilamentPrices(nextCurrency: CurrencyCode) {
    if (nextCurrency === this.currency) return;
    (['a', 'b'] as Scenario[]).forEach((scenario) => {
      const input = this.input(`price-${scenario}`);
      if (!input) return;
      const converted = (this.value(`price-${scenario}`) / CURRENCY_RATES[this.currency]) * CURRENCY_RATES[nextCurrency];
      input.value = ['JPY', 'INR', 'RUB', 'TRY'].includes(nextCurrency) ? converted.toFixed(0) : converted.toFixed(2);
    });
  }

  private convertVisibleInputs(nextUnit: UnitSystem) {
    (['a', 'b'] as Scenario[]).forEach((scenario) => {
      this.convertRangeScale(`layer-${scenario}`, nextUnit);
      this.convertRangeScale(`width-${scenario}`, nextUnit);
      this.convertRangeScale(`speed-${scenario}`, nextUnit);
      this.setValue(`height-${scenario}`, this.convertLength(this.value(`height-${scenario}`), nextUnit));
      this.setValue(`layer-${scenario}`, this.convertLength(this.value(`layer-${scenario}`), nextUnit));
      this.setValue(`width-${scenario}`, this.convertLength(this.value(`width-${scenario}`), nextUnit));
      this.setValue(`speed-${scenario}`, this.convertLength(this.value(`speed-${scenario}`), nextUnit));
      this.setValue(`volume-${scenario}`, this.convertVolume(this.value(`volume-${scenario}`), nextUnit));
    });
  }

  private convertRangeScale(name: string, nextUnit: UnitSystem) {
    const input = this.input(name);
    if (!input || input.type !== 'range') return;
    const convert = (value: string) => this.convertLength(parseFloat(value), nextUnit).toString();
    input.min = convert(input.min);
    input.max = convert(input.max);
    input.step = convert(input.step);
  }

  private convertLength(value: number, nextUnit: UnitSystem) {
    return nextUnit === 'imperial' ? value / INCH_TO_MM : value * INCH_TO_MM;
  }

  private convertVolume(value: number, nextUnit: UnitSystem) {
    return nextUnit === 'imperial' ? value * CM3_TO_IN3 : value / CM3_TO_IN3;
  }

  private value(name: string) {
    return parseFloat(this.input(name)?.value || '0') || 0;
  }

  private setValue(name: string, value: number) {
    const input = this.input(name);
    if (!input) return;
    input.value = value < 1 ? value.toFixed(3) : value.toFixed(1);
    const sliderOutput = input.previousElementSibling?.querySelector('output');
    if (sliderOutput) sliderOutput.textContent = input.value;
  }

  private syncSliderOutputs() {
    this.root.querySelectorAll<HTMLInputElement>('input[type="range"][data-ptwo-input]').forEach((input) => {
      const output = input.previousElementSibling?.querySelector('output');
      if (output) output.textContent = input.value;
    });
  }

  private input(name: string) {
    return this.root.querySelector<HTMLInputElement>(`[data-ptwo-input="${name}"]`);
  }

  private output(id: string) {
    return this.root.querySelector<HTMLElement>(`[data-ptwo-output="${id}"]`);
  }

  private scenarioParams(scenario: Scenario): PrintTimeScenarioParams {
    const lengthFactor = this.unit === 'imperial' ? INCH_TO_MM : 1;
    const volumeFactor = this.unit === 'imperial' ? 1 / CM3_TO_IN3 : 1;
    return {
      modelHeightMm: this.value(`height-${scenario}`) * lengthFactor,
      estimatedVolumeCm3: this.value(`volume-${scenario}`) * volumeFactor,
      layerHeightMm: this.value(`layer-${scenario}`) * lengthFactor,
      speedMmS: this.value(`speed-${scenario}`) * lengthFactor,
      lineWidthMm: this.value(`width-${scenario}`) * lengthFactor,
      infillPercent: this.value(`infill-${scenario}`),
      complexity: this.select(`complexity-${scenario}`) as ModelComplexity,
      pieceType: this.select(`piece-${scenario}`) as PieceType,
      material: this.select(`material-${scenario}`) as MaterialId,
      filamentPricePerKg: this.visibleFilamentPriceInUsd(`price-${scenario}`),
    };
  }

  private visibleFilamentPriceInUsd(name: string) {
    return this.value(name) / CURRENCY_RATES[this.currency];
  }

  private select(name: string) {
    return this.root.querySelector<HTMLSelectElement>(`[data-ptwo-input="${name}"]`)?.value || '';
  }

  private render() {
    this.syncMobileTabs();
    const results = {
      a: this.renderScenario('a'),
      b: this.renderScenario('b'),
    };
    this.renderComparison(results);
    this.updateUnitLabels();
    this.saveState();
  }

  private renderScenario(scenario: Scenario) {
    const params = this.scenarioParams(scenario);
    const result = calculatePrintTimeScenario(params);
    this.text(`time-${scenario}`, this.formatTime(result.totalSeconds));
    this.text(`filament-${scenario}`, this.formatMass(result.filamentGrams));
    this.text(`cost-${scenario}`, this.formatCurrencyAmount(result.filamentCost));
    this.text(`layers-${scenario}`, result.layers.toString());
    this.text(`efficiency-${scenario}`, `${result.efficiencyScore.toFixed(0)}/100`);
    this.text(`flow-${scenario}`, `${result.volumetricFlowMm3S.toFixed(1)} ${this.datasetText('flowUnit')}`);
    this.output(`flow-${scenario}`)?.classList.toggle('is-hot', result.volumetricFlowMm3S > STANDARD_HOTEND_FLOW_LIMIT_MM3S);
    this.text(
      `tradeoff-${scenario}`,
      `${this.datasetText('speedReductionLabel')} ${this.datasetText(
        'speedReductionAddsLabel',
      )} ${result.slowerQualityMinutes.toFixed(0)} ${this.datasetText(
        'speedReductionMinutesLabel',
      )} ${this.datasetText('qualityGainLabel')}`,
    );
    this.output(`meter-${scenario}`)?.style.setProperty('--ptwo-fill', `${result.efficiencyScore}%`);
    this.output(`warning-${scenario}`)?.classList.toggle('is-visible', result.hardwareWarning);
    this.output(`flow-warning-${scenario}`)?.classList.toggle(
      'is-visible',
      result.volumetricFlowMm3S > STANDARD_HOTEND_FLOW_LIMIT_MM3S,
    );
    return result;
  }

  private renderComparison(results: Record<Scenario, ScenarioResult>) {
    const winner = this.bestScenario(results);
    const loser: Scenario = winner === 'a' ? 'b' : 'a';
    const winnerLabel = winner.toUpperCase();
    const timeDelta = Math.abs(results.a.totalSeconds - results.b.totalSeconds);
    const costDelta = Math.abs(results.a.filamentCost - results.b.filamentCost);
    const materialDelta = Math.abs(results.a.filamentGrams - results.b.filamentGrams);

    this.text('best-value', `${this.datasetText('scenarioPrefix')} ${winnerLabel}`);
    const timeWinner = results.a.totalSeconds <= results.b.totalSeconds ? 'A' : 'B';
    const costWinner = results.a.filamentCost <= results.b.filamentCost ? 'A' : 'B';
    const materialWinner = results.a.filamentGrams <= results.b.filamentGrams ? 'A' : 'B';
    this.text(
      'time-delta-text',
      `${this.formatTime(timeDelta)} ${this.datasetText('fasterDirection')} ${this.datasetText(
        'inScenarioLabel',
      )} ${timeWinner}`,
    );
    this.text(
      'cost-delta-text',
      `${this.currencySymbol()}${this.formatCurrencyAmount(costDelta)} ${this.datasetText(
        'cheaperDirection',
      )} ${this.datasetText('inScenarioLabel')} ${costWinner}`,
    );
    this.text(
      'material-delta-text',
      `${this.formatMass(materialDelta)} ${this.datasetText('lighterDirection')} ${this.datasetText(
        'inScenarioLabel',
      )} ${materialWinner}`,
    );
    this.setArrow('time-arrow', timeWinner === winnerLabel);
    this.setArrow('cost-arrow', costWinner === winnerLabel);
    this.setArrow('material-arrow', materialWinner === winnerLabel);

    (['a', 'b'] as Scenario[]).forEach((scenario) => {
      const card = this.root.querySelector<HTMLElement>(`[data-ptwo-scenario="${scenario}"]`);
      card?.classList.toggle('is-winner', scenario === winner);
      card?.classList.toggle('is-loser', scenario === loser);
      this.text(`badge-${scenario}`, scenario === winner ? this.datasetText('winnerBadge') : '');
    });
  }

  private setArrow(id: string, isPositive: boolean) {
    const arrow = this.output(id);
    if (!arrow) return;
    arrow.textContent = isPositive ? '+' : '-';
    arrow.setAttribute(
      'aria-label',
      this.datasetText(
        isPositive ? 'criterionAlignedLabel' : 'criterionTradeoffLabel',
      ),
    );
    arrow.classList.toggle('is-positive', isPositive);
    arrow.classList.toggle('is-negative', !isPositive);
  }

  private bestScenario(results: Record<Scenario, ScenarioResult>): Scenario {
    const timeMax = Math.max(results.a.totalSeconds, results.b.totalSeconds, 1);
    const costMax = Math.max(results.a.filamentCost, results.b.filamentCost, 1);
    const materialMax = Math.max(results.a.filamentGrams, results.b.filamentGrams, 1);
    const score = (result: ScenarioResult) =>
      (1 - result.totalSeconds / timeMax) * 45 +
      (1 - result.filamentCost / costMax) * 25 +
      (1 - result.filamentGrams / materialMax) * 15 +
      (result.efficiencyScore / 100) * 15;
    return score(results.a) >= score(results.b) ? 'a' : 'b';
  }

  private updateUnitLabels() {
    const length = this.unit === 'imperial' ? this.datasetText('inchUnit') : this.datasetText('millimeterUnit');
    const volume = this.unit === 'imperial' ? this.root.dataset.imperialVolumeUnit : this.root.dataset.metricVolumeUnit;
    this.root.querySelectorAll<HTMLElement>('[data-ptwo-length-unit]').forEach((el) => (el.textContent = length));
    this.root.querySelectorAll<HTMLElement>('[data-ptwo-speed-unit]').forEach((el) => {
      el.textContent =
        this.unit === 'imperial'
          ? this.datasetText('imperialSpeedUnit')
          : this.datasetText('metricSpeedUnit');
    });
    this.root.querySelectorAll<HTMLElement>('[data-ptwo-volume-unit]').forEach((el) => (el.textContent = volume || ''));
    this.root.querySelectorAll<HTMLElement>('[data-currency-symbol]').forEach((el) => {
      el.textContent = this.currencySymbol();
    });
  }

  private text(id: string, value: string) {
    const output = this.output(id);
    if (output) output.textContent = value;
  }

  private datasetText(key: string) {
    return this.root.dataset[key] || '';
  }

  private formatMass(grams: number) {
    if (this.unit === 'imperial') return `${(grams / GRAMS_PER_OUNCE).toFixed(2)} ${this.root.dataset.ounceUnit}`;
    return `${grams.toFixed(0)} ${this.root.dataset.gramUnit}`;
  }

  private formatTime(seconds: number) {
    const minutes = Math.round(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const rest = minutes % 60;
    return hours > 0
      ? `${hours}${this.datasetText('hourUnit')} ${rest}${this.datasetText('minuteUnit')}`
      : `${rest}${this.datasetText('minuteUnit')}`;
  }

  private formatCurrencyAmount(usdAmount: number) {
    const amount = usdAmount * CURRENCY_RATES[this.currency];
    return ['JPY', 'INR', 'RUB', 'TRY'].includes(this.currency) ? amount.toFixed(0) : amount.toFixed(2);
  }

  private currencySymbol() {
    return this.root.querySelector<HTMLOptionElement>(`[data-ptwo-currency] option[value="${this.currency}"]`)?.dataset.symbol || '';
  }
}

export const initPrintTimeWorkflowOptimizer = () => {
  document.querySelectorAll<HTMLElement>('[data-ptwo-root]').forEach((root) => {
    if (root.dataset.ready) return;
    root.dataset.ready = 'true';
    new PrintTimeWorkflowApp(root);
  });
};
