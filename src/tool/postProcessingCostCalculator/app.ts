import { calculatePostProcessingCost } from './logic';

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

class PostProcessingCostApp {
  private readonly storageKey = 'jjlmoya-printing3d-post-processing-cost-v1';
  private currency: CurrencyCode = 'EUR';

  constructor(private root: HTMLElement) {
    this.restoreState();
    this.bind();
    this.updateCurrencySymbols();
    this.render();
  }

  private bind() {
    this.root.querySelectorAll<HTMLInputElement>('[data-ppc-input]').forEach((input) => {
      input.addEventListener('input', () => this.render());
    });
    this.currencySelect()?.addEventListener('change', (event) => {
      this.setCurrency((event.currentTarget as HTMLSelectElement).value as CurrencyCode);
    });
    this.root.querySelector<HTMLButtonElement>('[data-ppc-copy]')?.addEventListener('click', () => this.copyResult());
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
      this.root.querySelectorAll<HTMLInputElement>('[data-ppc-input]').forEach((input) => {
        if (input.dataset.ppcInput) values[input.dataset.ppcInput] = input.value;
      });
      window.localStorage?.setItem(this.storageKey, JSON.stringify(values));
    } catch {
    }
  }

  private render() {
    const result = calculatePostProcessingCost({
      supportMinutes: this.value('support'),
      sandingMinutes: this.value('sanding'),
      paintingMinutes: this.value('painting'),
      otherMinutes: this.value('other'),
      hourlyRate: this.value('hourly-rate'),
      consumablesCost: this.value('consumables'),
      conversionFactor: this.value('conversion-factor') || 1,
    });

    this.text('total', this.money(result.totalCost, 2));
    this.text('labor', this.money(result.laborCost, 2));
    this.text('consumables', this.money(result.consumablesCost, 2));
    this.text('minutes', `${result.totalMinutes.toFixed(0)} ${this.root.dataset.minutesUnit || ''}`.trim());
    this.text(
      'effective-rate',
      `${this.money(result.effectiveHourlyRate, 2)}${this.root.dataset.rateUnitSeparator || ''}${this.root.dataset.hourUnit || ''}`,
    );
    this.setShare('support', result.shares.support);
    this.setShare('sanding', result.shares.sanding);
    this.setShare('painting', result.shares.painting);
    this.setShare('other', result.shares.other);
    this.setShare('consumables', result.shares.consumables);
    this.saveState();
  }

  private setCurrency(nextCurrency: CurrencyCode) {
    if (!(nextCurrency in CURRENCY_RATES) || nextCurrency === this.currency) return;
    const ratio = CURRENCY_RATES[nextCurrency] / CURRENCY_RATES[this.currency];
    ['hourly-rate', 'consumables'].forEach((name) => {
      const input = this.input(name);
      if (!input) return;
      input.value = this.formatCurrencyInput((parseFloat(input.value) || 0) * ratio, nextCurrency);
    });
    this.currency = nextCurrency;
    this.updateCurrencySymbols();
    this.render();
  }

  private outputText(name: string) {
    return this.output(name)?.textContent ?? '';
  }

  private buildCopyText() {
    const template = this.root.dataset.copyTemplate ?? '{total}';
    return template
      .replace('{total}', this.outputText('total'))
      .replace('{labor}', this.outputText('labor'))
      .replace('{consumables}', this.outputText('consumables'))
      .replace('{minutes}', this.outputText('minutes'));
  }

  private flashCopyButton() {
    const button = this.root.querySelector<HTMLButtonElement>('[data-ppc-copy]');
    if (!button) return;
    const original = button.textContent || '';
    button.textContent = this.root.dataset.copiedLabel || original;
    window.setTimeout(() => {
      button.textContent = original;
    }, 1400);
  }

  private async copyResult() {
    await navigator.clipboard?.writeText(this.buildCopyText());
    this.flashCopyButton();
  }

  private setShare(name: string, value: number) {
    const percent = Math.max(value, 0);
    this.root.style.setProperty(`--ppc-${name}`, `${percent}%`);
    this.text(`${name}-share`, `${percent.toFixed(1)}%`);
  }

  private value(name: string) {
    return parseFloat(this.input(name)?.value || '0') || 0;
  }

  private input(name: string) {
    return this.root.querySelector<HTMLInputElement>(`[data-ppc-input="${name}"]`);
  }

  private currencySelect() {
    return this.root.querySelector<HTMLSelectElement>('[data-ppc-currency]');
  }

  private output(name: string) {
    return this.root.querySelector<HTMLElement>(`[data-ppc-output="${name}"]`);
  }

  private text(name: string, value: string) {
    this.root.querySelectorAll<HTMLElement>(`[data-ppc-output="${name}"]`).forEach((output) => {
      output.textContent = value;
    });
  }

  private money(value: number, digits: number) {
    return `${this.currencySymbol()}${this.formatMoneyAmount(value, digits)}`;
  }

  private currencySymbol() {
    return this.currencySelect()?.selectedOptions[0]?.dataset.symbol || this.root.dataset.currency || '';
  }

  private updateCurrencySymbols() {
    this.root.querySelectorAll<HTMLElement>('[data-ppc-symbol]').forEach((element) => {
      element.textContent = this.currencySymbol();
    });
  }

  private formatCurrencyInput(value: number, currency = this.currency) {
    if (['JPY', 'INR', 'RUB', 'TRY'].includes(currency)) return value.toFixed(0);
    return Number(value.toFixed(4)).toString();
  }

  private formatMoneyAmount(value: number, digits: number) {
    const resolvedDigits = ['JPY', 'INR', 'RUB', 'TRY'].includes(this.currency) ? 0 : digits;
    return new Intl.NumberFormat(document.documentElement.lang || navigator.language || 'en', {
      minimumFractionDigits: resolvedDigits,
      maximumFractionDigits: resolvedDigits,
      useGrouping: false,
    }).format(value);
  }
}

export const initPostProcessingCostCalculator = () => {
  document.querySelectorAll<HTMLElement>('[data-ppc-root]').forEach((root) => {
    if (root.dataset.ready) return;
    root.dataset.ready = 'true';
    new PostProcessingCostApp(root);
  });
};
