import { calculateMasterPricing, type PricingMode } from './logic';

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

class MasterPricingApp {
  private readonly storageKey = 'jjlmoya-printing3d-master-pricing-margin-v1';
  private currency: CurrencyCode = 'EUR';

  constructor(private root: HTMLElement) {
    this.restoreState();
    this.bind();
    this.updateCurrencySymbols();
    this.render();
  }

  private bind() {
    this.root.querySelectorAll<HTMLInputElement>('[data-mpm-input]').forEach((input) => {
      input.addEventListener('input', () => this.render());
    });
    this.root.querySelectorAll<HTMLInputElement>('[data-mpm-mode]').forEach((input) => {
      input.addEventListener('change', () => this.render());
    });
    this.currencySelect()?.addEventListener('change', (event) => {
      this.setCurrency((event.currentTarget as HTMLSelectElement).value as CurrencyCode);
    });
    this.root.querySelector<HTMLButtonElement>('[data-mpm-copy]')?.addEventListener('click', () => this.copyPrice());
  }

  private restoreState() {
    try {
      const raw = window.localStorage?.getItem(this.storageKey);
      if (!raw) return;
      const values = JSON.parse(raw) as Record<string, string>;
      this.restoreCurrency(values.currency);
      this.restoreInputs(values);
      this.restoreMode(values.mode);
    } catch {
      window.localStorage?.removeItem(this.storageKey);
    }
  }

  private restoreCurrency(value?: string) {
    if (!value || !(value in CURRENCY_RATES)) return;
    this.currency = value as CurrencyCode;
    const select = this.currencySelect();
    if (select) select.value = this.currency;
  }

  private restoreInputs(values: Record<string, string>) {
    Object.entries(values).forEach(([name, value]) => {
      const input = this.input(name);
      if (input) input.value = value;
    });
  }

  private restoreMode(value?: string) {
    if (!value) return;
    const mode = this.root.querySelector<HTMLInputElement>(`[data-mpm-mode][value="${value}"]`);
    if (mode) mode.checked = true;
  }

  private saveState() {
    try {
      const values: Record<string, string> = { currency: this.currency, mode: this.mode() };
      this.root.querySelectorAll<HTMLInputElement>('[data-mpm-input]').forEach((input) => {
        if (input.dataset.mpmInput) values[input.dataset.mpmInput] = input.value;
      });
      window.localStorage?.setItem(this.storageKey, JSON.stringify(values));
    } catch {
    }
  }

  private render() {
    const result = calculateMasterPricing({
      manufacturingCost: this.value('cost'),
      targetMargin: this.value('margin'),
      targetMarkup: this.value('markup'),
      competitorPrice: this.value('competitor'),
      conversionFactor: this.value('conversion-factor') || 1,
      mode: this.mode(),
    });

    const marginInput = this.input('margin');
    if (marginInput && this.value('margin') !== result.validatedMargin) {
      marginInput.value = result.validatedMargin.toFixed(2);
    }

    this.text('pvp', this.money(result.recommendedPvp));
    this.text('profit', this.money(result.netProfit));
    this.text('real-margin', `${result.realMargin.toFixed(2)}%`);
    this.text('comparison', this.marketComparison(result.competitorDelta, result.competitorDeltaPercent));
    this.text('pvp-margin', this.money(result.pvpByMargin));
    this.text('pvp-markup', this.money(result.pvpByMarkup));
    this.text('margin-value', `${result.validatedMargin.toFixed(2)}%`);
    this.text('markup-value', `${this.value('markup').toFixed(1)}%`);
    this.text('position', this.marketPosition(result));
    this.root.dataset.market = this.marketState(result);
    this.root.style.setProperty('--mpm-market-spread', `${Math.min(Math.abs(result.competitorDeltaPercent), 100).toFixed(2)}%`);
    this.saveState();
  }

  private marketState(result: ReturnType<typeof calculateMasterPricing>) {
    if (result.isAboveMarket) return 'above';
    if (Math.abs(result.competitorDelta) < 0.005) return 'at';
    return 'below';
  }

  private marketPosition(result: ReturnType<typeof calculateMasterPricing>) {
    if (result.effectiveCompetitorPrice <= 0) return this.root.dataset.atMarketLabel || '';
    if (Math.abs(result.competitorDelta) < 0.005) return this.root.dataset.atMarketLabel || '';
    return result.isAboveMarket ? this.root.dataset.aboveMarketLabel || '' : this.root.dataset.belowMarketLabel || '';
  }

  private marketComparison(delta: number, percent: number) {
    const sign = delta > 0 ? '+' : '';
    return `${sign}${this.money(delta)} (${sign}${percent.toFixed(2)}%)`;
  }

  private mode(): PricingMode {
    return this.root.querySelector<HTMLInputElement>('[data-mpm-mode]:checked')?.value === 'markup' ? 'markup' : 'margin';
  }

  private setCurrency(nextCurrency: CurrencyCode) {
    if (!(nextCurrency in CURRENCY_RATES) || nextCurrency === this.currency) return;
    const ratio = CURRENCY_RATES[nextCurrency] / CURRENCY_RATES[this.currency];
    ['cost', 'competitor'].forEach((name) => {
      const input = this.input(name);
      if (!input) return;
      input.value = Number(((parseFloat(input.value) || 0) * ratio).toFixed(4)).toString();
    });
    this.currency = nextCurrency;
    this.updateCurrencySymbols();
    this.render();
  }

  private buildCopyText() {
    const template = this.root.dataset.copyTemplate ?? '{pvp}';
    return template
      .replace('{pvp}', this.outputText('pvp'))
      .replace('{profit}', this.outputText('profit'))
      .replace('{margin}', this.outputText('real-margin'))
      .replace('{comparison}', this.outputText('comparison'));
  }

  private async copyPrice() {
    await navigator.clipboard?.writeText(this.buildCopyText());
    const button = this.root.querySelector<HTMLButtonElement>('[data-mpm-copy]');
    if (!button) return;
    const original = button.textContent || '';
    button.textContent = this.root.dataset.copiedLabel || original;
    window.setTimeout(() => {
      button.textContent = original;
    }, 1400);
  }

  private value(name: string) {
    return parseFloat(this.input(name)?.value || '0') || 0;
  }

  private input(name: string) {
    return this.root.querySelector<HTMLInputElement>(`[data-mpm-input="${name}"]`);
  }

  private currencySelect() {
    return this.root.querySelector<HTMLSelectElement>('[data-mpm-currency]');
  }

  private outputText(name: string) {
    return this.root.querySelector<HTMLElement>(`[data-mpm-output="${name}"]`)?.textContent ?? '';
  }

  private text(name: string, value: string) {
    this.root.querySelectorAll<HTMLElement>(`[data-mpm-output="${name}"]`).forEach((output) => {
      output.textContent = value;
    });
  }

  private money(value: number) {
    return `${this.currencySymbol()}${new Intl.NumberFormat('en', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      useGrouping: false,
    }).format(value)}`;
  }

  private currencySymbol() {
    return this.currencySelect()?.selectedOptions[0]?.dataset.symbol || this.root.dataset.currency || '';
  }

  private updateCurrencySymbols() {
    this.root.querySelectorAll<HTMLElement>('[data-mpm-symbol]').forEach((element) => {
      element.textContent = this.currencySymbol();
    });
  }
}

export const initMasterPricingMarginCalculator = () => {
  document.querySelectorAll<HTMLElement>('[data-mpm-root]').forEach((root) => {
    if (root.dataset.ready) return;
    root.dataset.ready = 'true';
    new MasterPricingApp(root);
  });
};
