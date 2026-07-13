import { calculateMachineHourlyRate } from './logic';

const CURRENCY_RATES = {
  EUR: 1,
  USD: 1.09,
  GBP: 0.84,
  CAD: 1.48,
  AUD: 1.64,
  CHF: 0.96,
  CNY: 7.9,
  INR: 91,
  BRL: 5.92,
  MXN: 19.72,
  RUB: 96,
  PLN: 4.26,
  SEK: 11.35,
  NOK: 11.55,
  DKK: 7.46,
  TRY: 35.95,
  JPY: 171,
} as const;

type CurrencyCode = keyof typeof CURRENCY_RATES;
type DominantCost = 'electricity' | 'depreciation' | 'balanced';

class MachineHourlyRateApp {
  private readonly storageKey = 'jjlmoya-printing3d-machine-hourly-rate-v2';
  private animatedValues = new Map<string, number>();
  private animationFrames = new Map<string, number>();
  private currency: CurrencyCode = 'EUR';

  constructor(private root: HTMLElement) {
    this.restoreState();
    this.bind();
    this.updateCurrencySymbols();
    this.render();
  }

  private bind() {
    this.root.querySelectorAll<HTMLInputElement>('[data-mhr-input]').forEach((input) => {
      input.addEventListener('input', () => this.render());
    });
    this.currencySelect()?.addEventListener('change', (event) => {
      this.setCurrency((event.currentTarget as HTMLSelectElement).value as CurrencyCode);
    });
  }

  private restoreState() {
    try {
      const raw = window.localStorage?.getItem(this.storageKey);
      if (!raw) return;
      const values = JSON.parse(raw) as Record<string, string>;
      if (values.currency && values.currency in CURRENCY_RATES) {
        this.currency = values.currency as CurrencyCode;
        const select = this.currencySelect();
        if (select) select.value = this.currency;
      }
      Object.entries(values).forEach(([name, value]) => {
        const input = this.input(name);
        if (input) input.value = value;
      });
    } catch {
      window.localStorage?.removeItem(this.storageKey);
    }
  }

  private saveState() {
    try {
      const values: Record<string, string> = { currency: this.currency };
      this.root.querySelectorAll<HTMLInputElement>('[data-mhr-input]').forEach((input) => {
        if (input.dataset.mhrInput) values[input.dataset.mhrInput] = input.value;
      });
      window.localStorage?.setItem(this.storageKey, JSON.stringify(values));
    } catch {
    }
  }

  private render() {
    this.syncDurationOutput();
    const hours = this.value('hours');
    const watts = this.value('watts');
    const usefulLife = Math.max(this.value('useful-life'), 1);
    const result = calculateMachineHourlyRate({
      watts,
      hours,
      tariffPerKwh: this.value('tariff'),
      purchasePrice: this.value('purchase-price'),
      usefulLifeHours: usefulLife,
    });

    this.animateMoney('total', result.totalCost, 2);
    this.animateMoney('hourly', result.hourlyRate, 3);
    this.animateMoney('electricity', result.electricityCost, 2);
    this.animateMoney('depreciation', result.depreciationCost, 2);
    this.animateMoney('electricity-hour', result.hourlyElectricityCost, 3);
    this.animateMoney('depreciation-hour', result.hourlyDepreciationCost, 3);
    this.text('energy-used', ((watts / 1000) * hours).toFixed(2));
    this.text('life-share', `${((hours / usefulLife) * 100).toFixed(2)}%`);
    this.text('driver', this.driverLabel(result.dominantCost));
    this.text('electricity-share', `${result.electricitySharePercent.toFixed(1)}%`);
    this.text('depreciation-share', `${result.depreciationSharePercent.toFixed(1)}%`);
    this.text('insight', this.insightText(result.dominantCost));
    this.root.style.setProperty('--mhr-electricity-share', `${result.electricitySharePercent}%`);
    this.root.style.setProperty('--mhr-depreciation-share', `${result.depreciationSharePercent}%`);
    this.root.dataset.dominant = result.dominantCost;
    this.saveState();
  }

  private setCurrency(nextCurrency: CurrencyCode) {
    if (!(nextCurrency in CURRENCY_RATES) || nextCurrency === this.currency) return;
    const ratio = CURRENCY_RATES[nextCurrency] / CURRENCY_RATES[this.currency];
    ['tariff', 'purchase-price'].forEach((name) => {
      const input = this.input(name);
      if (!input) return;
      input.value = this.formatCurrencyInput((parseFloat(input.value) || 0) * ratio, nextCurrency);
    });
    this.currency = nextCurrency;
    this.updateCurrencySymbols();
    this.render();
  }

  private syncDurationOutput() {
    const input = this.input('hours');
    const output = input?.previousElementSibling?.querySelector('output');
    if (output && input) output.textContent = this.formatInput(input.value);
  }

  private insightText(dominant: DominantCost) {
    if (dominant === 'electricity') return this.root.dataset.electricityDominant || '';
    if (dominant === 'depreciation') return this.root.dataset.depreciationDominant || '';
    return this.root.dataset.balancedDominant || '';
  }

  private driverLabel(dominant: DominantCost) {
    if (dominant === 'electricity') return this.root.dataset.energyDriverLabel || '';
    if (dominant === 'depreciation') return this.root.dataset.assetDriverLabel || '';
    return this.root.dataset.balancedDriverLabel || '';
  }

  private value(name: string) {
    return parseFloat(this.input(name)?.value || '0') || 0;
  }

  private input(name: string) {
    return this.root.querySelector<HTMLInputElement>(`[data-mhr-input="${name}"]`);
  }

  private currencySelect() {
    return this.root.querySelector<HTMLSelectElement>('[data-mhr-currency]');
  }

  private output(name: string) {
    return this.root.querySelector<HTMLElement>(`[data-mhr-output="${name}"]`);
  }

  private text(name: string, value: string) {
    this.root.querySelectorAll<HTMLElement>(`[data-mhr-output="${name}"]`).forEach((output) => {
      output.textContent = value;
    });
  }

  private formatInput(value: string) {
    const parsed = parseFloat(value) || 0;
    return Number.isInteger(parsed) ? parsed.toFixed(0) : parsed.toFixed(1);
  }

  private money(value: number, digits: number) {
    return `${this.currencySymbol()}${this.formatMoneyAmount(value, digits)}`;
  }

  private currencySymbol() {
    return this.currencySelect()?.selectedOptions[0]?.dataset.symbol || this.root.dataset.currency || '\u20ac';
  }

  private updateCurrencySymbols() {
    this.root.querySelectorAll<HTMLElement>('[data-mhr-symbol]').forEach((element) => {
      element.textContent = this.currencySymbol();
    });
  }

  private formatCurrencyInput(value: number, currency = this.currency) {
    if (['JPY', 'INR', 'RUB', 'TRY'].includes(currency)) return value.toFixed(0);
    return Number(value.toFixed(4)).toString();
  }

  private formatMoneyAmount(value: number, digits: number) {
    const resolvedDigits = ['JPY', 'INR', 'RUB', 'TRY'].includes(this.currency) ? 0 : digits;
    return new Intl.NumberFormat(this.locale(), {
      minimumFractionDigits: resolvedDigits,
      maximumFractionDigits: resolvedDigits,
      useGrouping: false,
    }).format(value);
  }

  private locale() {
    return document.documentElement.lang || navigator.language || 'en';
  }

  private animateMoney(name: string, target: number, digits: number) {
    const output = this.output(name);
    if (!output) return;
    const previousFrame = this.animationFrames.get(name);
    if (previousFrame) window.cancelAnimationFrame(previousFrame);

    const start = this.animatedValues.get(name) ?? target;
    const delta = target - start;
    const startedAt = window.performance.now();
    const duration = 520;

    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      output.textContent = this.money(start + delta * eased, digits);
      output.classList.toggle('is-counting', progress < 1);
      if (progress < 1) {
        this.animationFrames.set(name, window.requestAnimationFrame(tick));
      } else {
        this.animatedValues.set(name, target);
        output.classList.remove('is-counting');
      }
    };

    this.animationFrames.set(name, window.requestAnimationFrame(tick));
  }
}

export const initMachineHourlyRateCalculator = () => {
  document.querySelectorAll<HTMLElement>('[data-mhr-root]').forEach((root) => {
    if (root.dataset.ready) return;
    root.dataset.ready = 'true';
    new MachineHourlyRateApp(root);
  });
};
