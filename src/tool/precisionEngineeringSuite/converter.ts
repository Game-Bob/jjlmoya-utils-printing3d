import { calculatePrecisionSuite, suiteDefaults } from './logic';
import type { PrecisionSuiteInputs, SuiteModuleId, PrecisionSuiteResult } from './logic';
import {
  currencyRates,
  currencySymbols,
  regionCurrency,
} from './types';
import type {
  UnitSystem,
  CurrencyCode,
  StatusTextMap,
  CopyFieldMap,
  DisplayUnitMap,
} from './types';
import {
  fromMetric,
  readInputs,
  moneyKeys,
} from './helpers';
import { drawTelemetryChart } from './chart';
import {
  loadSavedState,
  saveCurrentState,
  restoreUnitSystem,
  restoreCurrency,
  restoreModule,
  restoreValues,
} from './state';

class PrecisionEngineeringSuite {
  private root: HTMLElement;
  private readonly storageKey = 'precision-engineering-suite:v1';
  private module: SuiteModuleId = 'quote';
  private unitSystem: UnitSystem = 'metric';
  private currency: CurrencyCode = 'EUR';

  constructor(root: HTMLElement) {
    this.root = root;
    this.bind();
    this.observeTheme();
    const restored = this.loadState();
    if (!restored) this.applyLocaleCurrency();
    this.updateUnits();
    this.calculate();
  }

  private el<T extends HTMLElement>(selector: string) {
    return this.root.querySelector(selector) as T;
  }

  private fmt(value: number, suffix = '') {
    if (!Number.isFinite(value)) return `9999.00+${suffix}`;
    return `${value.toFixed(2)}${suffix}`;
  }

  private money(valueEur: number) {
    const value = valueEur * currencyRates[this.currency];
    return `${currencySymbols[this.currency]}${this.fmt(value)}`;
  }

  private datasetJson<T>(key: string, fallback: T): T {
    try {
      const raw = this.root.dataset[key];
      return raw ? JSON.parse(raw) as T : fallback;
    } catch {
      return fallback;
    }
  }

  private bind() {
    this.root.querySelectorAll<HTMLInputElement>('[data-input]').forEach((input) => input.addEventListener('input', () => this.calculate()));
    this.root.querySelectorAll<HTMLButtonElement>('[data-module]').forEach((button) => {
      button.addEventListener('click', () => {
        this.module = (button.dataset.module || 'quote') as SuiteModuleId;
        this.root.querySelectorAll<HTMLButtonElement>('[data-module]').forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
        this.calculate();
      });
    });
    this.root.querySelectorAll<HTMLButtonElement>('[data-unit-system]').forEach((button) => {
      button.addEventListener('click', () => this.setUnit(button.dataset.unitSystem === 'imperial' ? 'imperial' : 'metric'));
    });
    this.el<HTMLSelectElement>('#pes-currency').addEventListener('change', (event) => {
      this.setCurrency((event.target as HTMLSelectElement).value as CurrencyCode);
    });
    this.el<HTMLButtonElement>('#pes-copy').addEventListener('click', () => this.copy());
  }

  private loadState() {
    const state = loadSavedState(this.storageKey);
    if (!state) return false;
    const us = restoreUnitSystem(this.root, state.unitSystem);
    if (us) this.unitSystem = us;
    const cur = restoreCurrency(this.el<HTMLSelectElement>('#pes-currency'), state.currency);
    if (cur) this.currency = cur;
    const mod = restoreModule(this.root, state.module);
    if (mod) this.module = mod;
    restoreValues(this.root, state.values);
    return true;
  }

  private observeTheme() {
    const observer = new MutationObserver(() => this.calculate());
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  }

  private applyLocaleCurrency() {
    const region = (navigator.language.split('-')[1] || '').toUpperCase();
    const detected = regionCurrency[region];
    if (detected) this.setCurrency(detected);
  }

  private setUnit(next: UnitSystem) {
    if (next === this.unitSystem) return;
    const metricValues = readInputs(this.root, this.currency, this.unitSystem);
    this.unitSystem = next;
    this.root.querySelectorAll<HTMLInputElement>('[data-input]').forEach((input) => {
      const key = input.dataset.input as keyof PrecisionSuiteInputs;
      const metric = metricValues[key] ?? suiteDefaults[key];
      const val = this.unitSystem === 'metric' ? metric as number : fromMetric(key, metric as number, this.unitSystem);
      input.value = moneyKeys.includes(key) ? (metric as number * currencyRates[this.currency]).toFixed(2) : val.toFixed(2);
    });
    this.root.querySelectorAll<HTMLButtonElement>('[data-unit-system]').forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.unitSystem === next));
    });
    this.updateUnits();
    this.calculate();
  }

  private setCurrency(next: CurrencyCode) {
    if (next === this.currency || !(next in currencyRates)) return;
    const euroValues = readInputs(this.root, this.currency, this.unitSystem);
    this.currency = next;
    this.el<HTMLSelectElement>('#pes-currency').value = next;
    this.root.querySelectorAll<HTMLInputElement>('[data-input]').forEach((input) => {
      const key = input.dataset.input as keyof PrecisionSuiteInputs;
      if (!moneyKeys.includes(key)) return;
      const valueEur = euroValues[key] ?? suiteDefaults[key];
      input.value = (valueEur as number * currencyRates[this.currency]).toFixed(2);
    });
    this.updateUnits();
    this.calculate();
  }

  private updateUnits() {
    const unit = (key: string, metric: string, imperial: string) => {
      const node = this.root.querySelector<HTMLElement>(`[data-unit-for="${key}"]`);
      if (node) node.textContent = this.unitSystem === 'metric' ? metric : imperial;
    };
    ['threadNominalMm', 'threadPitchMm', 'shaftNominalMm', 'holeAllowanceMm'].forEach((key) => unit(key, 'mm', 'in'));
    ['objectVolumeCm3', 'purgeVolumeCm3'].forEach((key) => unit(key, 'cm3', 'in3'));
    unit('filamentMassG', 'g', 'oz');
    unit('dryingTemperatureC', 'C', 'F');
    this.root.querySelectorAll<HTMLElement>('[data-money-unit="true"]').forEach((node) => {
      const key = node.dataset.unitFor;
      const symbol = currencySymbols[this.currency];
      let suffix = symbol;
      if (key === 'machineRate' || key === 'laborRate' || key === 'postProcessRate') {
        suffix = `${symbol}/h`;
      } else if (key === 'energyPrice') {
        suffix = `${symbol}/kWh`;
      }
      node.textContent = suffix;
    });
  }

  private calculate() {
    const inputs = readInputs(this.root, this.currency, this.unitSystem);
    const result = calculatePrecisionSuite(inputs);
    const units = this.datasetJson<DisplayUnitMap>('displayUnits', {});
    this.el<HTMLElement>('#pes-quote-cost').textContent = this.money(result.quoteCost);
    this.el<HTMLElement>('#pes-price').textContent = this.money(result.recommendedPrice);
    this.el<HTMLElement>('#pes-margin').textContent = this.fmt(result.grossMargin * 100, '%');
    this.el<HTMLElement>('#pes-roi').textContent = this.fmt(result.roiMonths, ` ${units.months || ''}`.trimEnd());
    const lengthUnit = this.unitSystem === 'metric' ? units.millimeter || '' : units.inch || '';
    this.el<HTMLElement>('#pes-thread-minor').textContent = this.fmt(fromMetric('threadNominalMm', result.threadMinorDiameter, this.unitSystem), ` ${lengthUnit}`.trimEnd());
    this.el<HTMLElement>('#pes-fit').textContent = this.fmt(fromMetric('shaftNominalMm', result.fitClearance, this.unitSystem), ` ${lengthUnit}`.trimEnd());
    this.el<HTMLElement>('#pes-dry').textContent = this.fmt(result.dryingHours, ` ${units.hour || ''}`.trimEnd());
    this.el<HTMLElement>('#pes-purge').textContent = this.fmt(result.purgeRatio * 100, '%');
    this.el<HTMLElement>('.pes-telemetry').dataset.severity = result.severity;
    this.updateStatus(result.severity);
    this.updatePhysics(result);
    this.drawTelemetry(result);
    this.updateTwin(result);
    saveCurrentState(this.storageKey, this.root, { module: this.module, unitSystem: this.unitSystem, currency: this.currency });
  }

  private updateStatus(severity: string) {
    let label = this.root.dataset.nominalLabel;
    if (severity === 'critical') {
      label = this.root.dataset.criticalLabel;
    } else if (severity === 'watch') {
      label = this.root.dataset.watchLabel;
    }

    const texts = this.datasetJson<StatusTextMap>('statusTexts', { nominal: '', watch: '', critical: '' });
    let text = texts.nominal;
    if (severity === 'critical') {
      text = texts.critical;
    } else if (severity === 'watch') {
      text = texts.watch;
    }

    this.el<HTMLElement>('#pes-status-label').textContent = label || '';
    this.el<HTMLElement>('#pes-status-text').textContent = text;
  }

  private updatePhysics(result: PrecisionSuiteResult) {
    const templates = this.datasetJson<Record<string, string>>('physicsCopy', {});
    const copies: Record<SuiteModuleId, string> = {
      quote: templates.quote,
      margin: templates.margin,
      labor: templates.labor,
      roi: templates.roi,
      threads: templates.threads,
      fits: templates.fits,
      drying: templates.drying,
      purge: templates.purge,
    };
    const template = copies[this.module] || '';
    let copy = template;
    if (this.module === 'margin') {
      copy = template.replace('{margin}', this.fmt(result.grossMargin * 100, '%'));
    } else if (this.module === 'labor') {
      const totalLabor = result.laborCost + result.postProcessCost;
      copy = template.replace('{laborCost}', this.money(totalLabor));
    }
    this.el<HTMLElement>('#pes-physics-copy').textContent = copy;
  }

  private drawTelemetry(result: PrecisionSuiteResult) {
    const canvas = this.el<HTMLCanvasElement>('#pes-telemetry-canvas');
    const labels = this.datasetJson<string[]>('chartLabels', []);
    drawTelemetryChart(canvas, result, labels, this.root);
  }

  private updateTwin(result: PrecisionSuiteResult) {
    const units = this.datasetJson<DisplayUnitMap>('displayUnits', {});
    const clearance = Math.max(-0.4, Math.min(0.8, result.fitClearance));
    const hole = this.el<SVGRectElement>('#pes-hole');
    const shaft = this.el<SVGRectElement>('#pes-shaft');
    const label = this.el<SVGTextElement>('#pes-twin-label');
    const holeWidth = 210 + clearance * 80;
    const shaftWidth = 150 - Math.min(0.2, clearance) * 22;
    hole.setAttribute('width', String(holeWidth));
    hole.setAttribute('x', String(360 - holeWidth / 2));
    shaft.setAttribute('width', String(shaftWidth));
    shaft.setAttribute('x', String(360 - shaftWidth / 2));
    const lengthUnit = this.unitSystem === 'metric' ? units.millimeter || '' : units.inch || '';
    label.textContent = `${this.fmt(fromMetric('shaftNominalMm', result.fitClearance, this.unitSystem), ` ${lengthUnit}`.trimEnd())} ${units.clearance || ''}`.trim();
  }

  private async copy() {
    const inputs = readInputs(this.root, this.currency, this.unitSystem);
    const result = calculatePrecisionSuite(inputs);
    const fields = this.datasetJson<CopyFieldMap>('copyFields', {});
    const units = this.datasetJson<DisplayUnitMap>('displayUnits', {});
    const symbol = currencySymbols[this.currency];
    const text = `[${fields.quoteCost}: ${this.money(result.quoteCost)} | ${fields.pvp}: ${this.money(result.recommendedPrice)} | ${fields.currency}: ${symbol} ${this.currency} | ${fields.margin}: ${this.fmt(result.grossMargin * 100)}% | ${fields.roi}: ${this.fmt(result.roiMonths, ` ${units.months || ''}`.trimEnd())} | ${fields.threadMinor}: ${this.fmt(result.threadMinorDiameter, ` ${units.millimeter || ''}`.trimEnd())} | ${fields.fitClearance}: ${this.fmt(result.fitClearance, ` ${units.millimeter || ''}`.trimEnd())} | ${fields.drying}: ${this.fmt(result.dryingHours, ` ${units.hour || ''}`.trimEnd())} | ${fields.purgeRatio}: ${this.fmt(result.purgeRatio * 100)}%]`;
    await navigator.clipboard?.writeText(text);
    const button = this.el<HTMLButtonElement>('#pes-copy');
    button.textContent = this.root.dataset.copiedLabel || '';
    window.setTimeout(() => { button.textContent = this.root.dataset.copyLabel || ''; }, 1200);
  }
}

const initPrecisionEngineeringSuite = () => {
  document.querySelectorAll<HTMLElement>('.pes-root').forEach((root) => new PrecisionEngineeringSuite(root));
};

document.addEventListener('astro:page-load', initPrecisionEngineeringSuite);
initPrecisionEngineeringSuite();
