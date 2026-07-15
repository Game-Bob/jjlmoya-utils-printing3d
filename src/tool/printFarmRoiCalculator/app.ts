import { calculatePrintFarmRoi } from './logic';

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
type PrintFarmRoiParams = Parameters<typeof calculatePrintFarmRoi>[0];
type PrintFarmRoiResult = ReturnType<typeof calculatePrintFarmRoi>;

class PrintFarmRoiApp {
  private readonly storageKey = 'jjlmoya-printing3d-print-farm-roi-v1';
  private currency: CurrencyCode = 'EUR';
  private latestReportRows: string[][] = [];

  constructor(private root: HTMLElement) {
    const defaultCurrency = root.dataset.defaultCurrency as CurrencyCode;
    if (defaultCurrency in CURRENCY_RATES) this.currency = defaultCurrency;
    this.restoreCurrency();
    this.bind();
    this.syncCurrencyUi();
    this.render();
  }

  private bind() {
    this.root.querySelectorAll<HTMLInputElement>('[data-pfroi-input]').forEach((input) => {
      input.addEventListener('input', () => this.render());
    });
    this.currencyButton()?.addEventListener('click', () => this.toggleCurrencyMenu());
    this.root.querySelectorAll<HTMLButtonElement>('[data-pfroi-currency-menu] [role="option"]').forEach((option) => {
      option.addEventListener('click', () => this.chooseCurrency(option));
    });
    this.root.querySelector<HTMLButtonElement>('[data-pfroi-stress]')?.addEventListener('click', () => this.applyStressScenario());
    this.root.querySelector<HTMLButtonElement>('[data-pfroi-export]')?.addEventListener('click', () => this.exportSummary());
    document.addEventListener('click', (event) => {
      if (!this.root.contains(event.target as Node)) this.closeCurrencyMenu();
    });
  }

  private render() {
    this.syncRanges();
    const result = calculatePrintFarmRoi(this.params());
    this.renderOutputs(result);
    this.renderBars(result);
    this.latestReportRows = this.reportRows(result);
  }

  private params(): PrintFarmRoiParams {
    return {
      printerCount: this.value('printer-count'),
      initialInvestment: this.value('initial-investment'),
      fixedMonthlyCost: this.value('fixed-cost'),
      electricityMonthlyCost: this.value('electricity-cost'),
      hourlyRate: this.value('hourly-rate'),
      occupancyPercent: this.value('occupancy'),
      successRatePercent: this.value('success-rate'),
      variableCostPerHour: this.value('variable-cost'),
      averageHoursPerPart: this.value('average-hours-part'),
    };
  }

  private renderOutputs(result: PrintFarmRoiResult) {
    this.text('payback', this.paybackText(result));
    this.text('profit', this.money(result.netMonthlyProfit));
    this.text('roi', `${result.annualizedRoiPercent.toFixed(1)}${this.percentUnit()}`);
    this.text('hours', `${Math.round(result.realProductiveHours).toLocaleString(this.locale())} ${this.hoursUnit()}`);
    this.text('margin', `${result.marginPercent.toFixed(1)}${this.percentUnit()}`);
    this.text('break-even-parts', this.breakEvenPartsText(result, true));
    this.text('break-even-hours', this.breakEvenHoursText(result));
    this.text('revenue', this.money(result.grossMonthlyRevenue));
    this.text('costs', this.money(result.totalOperatingCosts));
    this.text('fixed-cost', this.money(this.value('fixed-cost')));
    this.text('electricity-cost', this.money(this.value('electricity-cost')));
    this.text('variable-cost', this.money(result.variableMonthlyCost));
    this.text('insight', result.netMonthlyProfit > 0 ? this.datasetText('positiveInsight') : this.datasetText('negativeInsight'));
    this.root.dataset.state = result.netMonthlyProfit > 0 ? 'positive' : 'negative';
  }

  private renderBars(result: PrintFarmRoiResult) {
    const maxBar = Math.max(result.grossMonthlyRevenue, result.totalOperatingCosts, 1);
    this.bar('revenue', (result.grossMonthlyRevenue / maxBar) * 100);
    this.bar('costs', (result.totalOperatingCosts / maxBar) * 100);
  }

  private reportRows(result: PrintFarmRoiResult) {
    return [
      [this.datasetText('reportCurrencyLabel'), this.currency],
      [this.labelText('printer-count'), this.inputValue('printer-count')],
      [this.labelText('occupancy'), `${this.value('occupancy')}${this.percentUnit()}`],
      [this.labelText('success-rate'), `${this.value('success-rate')}${this.percentUnit()}`],
      [this.labelText('hourly-rate'), this.money(this.value('hourly-rate'))],
      [this.labelText('variable-cost'), this.money(this.value('variable-cost'))],
      [this.labelText('average-hours-part'), `${this.value('average-hours-part')} ${this.hoursUnit()}`],
      [this.outputLabel('payback'), this.paybackText(result)],
      [this.outputLabel('profit'), this.money(result.netMonthlyProfit)],
      [this.outputLabel('roi'), `${result.annualizedRoiPercent.toFixed(1)}${this.percentUnit()}`],
      [this.outputLabel('break-even-parts'), this.breakEvenPartsText(result, false)],
      [this.outputLabel('break-even-hours'), this.breakEvenHoursText(result)],
    ];
  }

  private applyStressScenario() {
    this.setInput('occupancy', '20');
    this.setInput('success-rate', '80');
    this.render();
  }

  private exportSummary() {
    const rows = [[this.datasetText('reportTitle'), ''], ...this.latestReportRows];
    const csv = rows.map((row) => row.map((cell) => `"${cell.replace(/"/g, '""')}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = this.datasetText('reportFilename') || 'print-farm-roi-summary.csv';
    link.click();
    URL.revokeObjectURL(link.href);
  }

  private setCurrency(next: CurrencyCode) {
    if (!(next in CURRENCY_RATES) || next === this.currency) return;
    const ratio = CURRENCY_RATES[next] / CURRENCY_RATES[this.currency];
    ['initial-investment', 'fixed-cost', 'electricity-cost', 'hourly-rate', 'variable-cost'].forEach((name) => {
      const input = this.input(name);
      if (input) input.value = this.formatInput(this.value(name) * ratio, next);
    });
    this.currency = next;
    this.saveCurrency();
    this.syncCurrencyUi();
    this.render();
  }

  private chooseCurrency(option: HTMLButtonElement) {
    const next = option.dataset.value as CurrencyCode;
    this.setCurrency(next);
    this.closeCurrencyMenu();
  }

  private toggleCurrencyMenu() {
    const menu = this.currencyMenu();
    const button = this.currencyButton();
    if (!menu || !button) return;
    const isOpen = menu.dataset.open === 'true';
    menu.dataset.open = String(!isOpen);
    button.setAttribute('aria-expanded', String(!isOpen));
  }

  private closeCurrencyMenu() {
    const menu = this.currencyMenu();
    if (menu) menu.dataset.open = 'false';
    this.currencyButton()?.setAttribute('aria-expanded', 'false');
  }

  private restoreCurrency() {
    try {
      const saved = window.localStorage?.getItem(this.storageKey) as CurrencyCode | null;
      if (saved && saved in CURRENCY_RATES) this.currency = saved;
    } catch {
    }
  }

  private saveCurrency() {
    try {
      window.localStorage?.setItem(this.storageKey, this.currency);
    } catch {
    }
  }

  private syncCurrencyUi() {
    this.root.querySelectorAll<HTMLElement>('[data-pfroi-symbol]').forEach((element) => {
      element.textContent = this.symbol();
    });
    const currentSymbol = this.root.querySelector<HTMLElement>('[data-pfroi-current-symbol]');
    if (currentSymbol) currentSymbol.textContent = this.symbol();
    const label = this.currencyButton()?.querySelector('small');
    if (label) label.textContent = this.currency;
    this.root.querySelectorAll<HTMLButtonElement>('[data-pfroi-currency-menu] [role="option"]').forEach((button) => {
      button.setAttribute('aria-selected', String(button.dataset.value === this.currency));
    });
  }

  private syncRanges() {
    this.root.querySelectorAll<HTMLInputElement>('.pfroi-range input').forEach((input) => {
      const output = input.closest('label')?.querySelector('output');
      if (output) output.textContent = `${input.value}${this.percentUnit()}`;
    });
  }

  private value(name: string) {
    return parseFloat(this.input(name)?.value || '0') || 0;
  }

  private setInput(name: string, value: string) {
    const input = this.input(name);
    if (input) input.value = value;
  }

  private input(name: string) {
    return this.root.querySelector<HTMLInputElement>(`[data-pfroi-input="${name}"]`);
  }

  private currencyMenu() {
    return this.root.querySelector<HTMLElement>('[data-pfroi-currency-menu]');
  }

  private currencyButton() {
    return this.root.querySelector<HTMLButtonElement>('[data-pfroi-currency-button]');
  }

  private symbol() {
    return this.root.querySelector<HTMLElement>(`[data-pfroi-currency-menu] [data-value="${this.currency}"]`)?.dataset.symbol || this.datasetText('currency');
  }

  private money(value: number) {
    return `${this.symbol()}${new Intl.NumberFormat(this.locale(), {
      maximumFractionDigits: ['JPY', 'INR', 'RUB', 'TRY'].includes(this.currency) ? 0 : 2,
      minimumFractionDigits: ['JPY', 'INR', 'RUB', 'TRY'].includes(this.currency) ? 0 : 2,
    }).format(value)}`;
  }

  private finiteOrFallback(value: number, text: string) {
    return Number.isFinite(value) ? text : this.notViableText();
  }

  private paybackText(result: PrintFarmRoiResult) {
    return this.finiteOrFallback(result.paybackMonths, `${result.paybackMonths.toFixed(1)} ${this.monthsUnit()}`);
  }

  private breakEvenPartsText(result: PrintFarmRoiResult, localized: boolean) {
    const parts = localized ? result.breakEvenParts.toLocaleString(this.locale()) : String(result.breakEvenParts);
    return this.finiteOrFallback(result.breakEvenParts, `${parts} ${this.partsUnit()}`);
  }

  private breakEvenHoursText(result: PrintFarmRoiResult) {
    return this.finiteOrFallback(result.breakEvenProductiveHours, `${result.breakEvenProductiveHours.toFixed(1)} ${this.hoursUnit()}`);
  }

  private notViableText() {
    return this.datasetText('notViable');
  }

  private partsUnit() {
    return this.datasetText('partsUnit');
  }

  private hoursUnit() {
    return this.datasetText('hoursUnit');
  }

  private monthsUnit() {
    return this.datasetText('monthsUnit');
  }

  private percentUnit() {
    return this.datasetText('percentUnit');
  }

  private datasetText(name: string) {
    return this.root.dataset[name] || '';
  }

  private inputValue(inputName: string) {
    return this.input(inputName)?.value || '';
  }

  private labelText(inputName: string) {
    return this.input(inputName)?.closest('label')?.querySelector('span')?.textContent?.trim() || inputName;
  }

  private outputLabel(outputName: string) {
    return this.root.querySelector(`[data-pfroi-output="${outputName}"]`)?.closest('article, .pfroi-payback')?.querySelector('span')?.textContent?.trim() || outputName;
  }

  private text(name: string, value: string) {
    this.root.querySelectorAll<HTMLElement>(`[data-pfroi-output="${name}"]`).forEach((output) => {
      output.textContent = value;
    });
  }

  private bar(name: string, value: number) {
    const bar = this.root.querySelector<HTMLElement>(`[data-pfroi-bar="${name}"]`);
    if (bar) bar.style.width = `${Math.max(2, Math.min(100, value))}%`;
  }

  private formatInput(value: number, currency: CurrencyCode) {
    return ['JPY', 'INR', 'RUB', 'TRY'].includes(currency) ? value.toFixed(0) : Number(value.toFixed(2)).toString();
  }

  private locale() {
    return document.documentElement.lang || navigator.language || 'en';
  }
}

export const initPrintFarmRoiCalculator = () => {
  document.querySelectorAll<HTMLElement>('[data-pfroi-root]').forEach((root) => {
    if (root.dataset.ready) return;
    root.dataset.ready = 'true';
    new PrintFarmRoiApp(root);
  });
};
