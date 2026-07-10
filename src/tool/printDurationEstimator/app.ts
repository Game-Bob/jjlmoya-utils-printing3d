import { calculatePrintDuration, calculateSpeedScenarios } from './logic';

const INCH_TO_MM = 25.4;
const IN2_TO_MM2 = 645.16;
const G_PER_OUNCE = 28.349523125;
const M_PER_FOOT = 0.3048;

class PrintDurationEstimatorApp {
  private unit: 'metric' | 'imperial' = 'metric';
  private readonly storageKey = 'jjlmoya-printing3d-duration-estimator-v1';

  constructor(private root: HTMLElement) {
    this.restore();
    this.bind();
    this.render();
  }

  private input(id: string) {
    return this.root.querySelector<HTMLInputElement>(id);
  }

  private output(id: string) {
    return this.root.querySelector<HTMLElement>(id);
  }

  private numberValue(id: string) {
    return parseFloat(this.input(id)?.value || '0') || 0;
  }

  private bind() {
    this.root.querySelectorAll('input').forEach((input) => input.addEventListener('input', () => this.render()));
    this.root.querySelectorAll<HTMLButtonElement>('[data-unit]').forEach((button) => {
      button.addEventListener('click', () => this.changeUnit(button.dataset.unit === 'imperial' ? 'imperial' : 'metric'));
    });
  }

  private changeUnit(nextUnit: 'metric' | 'imperial') {
    if (nextUnit === this.unit) return;
    const mm = this.visibleHeightMm();
    const layer = this.visibleLayerMm();
    const speed = this.visibleSpeedMmS();
    const area = this.visibleAreaMm2();
    this.unit = nextUnit;
    this.setValue('#pde-height', nextUnit === 'imperial' ? mm / INCH_TO_MM : mm);
    this.setValue('#pde-layer', nextUnit === 'imperial' ? layer / INCH_TO_MM : layer);
    this.setValue('#pde-speed', nextUnit === 'imperial' ? speed / INCH_TO_MM : speed);
    this.setValue('#pde-area', nextUnit === 'imperial' ? area / IN2_TO_MM2 : area);
    this.root.querySelectorAll('[data-unit]').forEach((item) => item.classList.toggle('is-active', item.getAttribute('data-unit') === nextUnit));
    this.render();
  }

  private setValue(id: string, value: number) {
    const input = this.input(id);
    if (input) input.value = value < 1 ? value.toFixed(3) : value.toFixed(1);
  }

  private visibleHeightMm() {
    const value = this.numberValue('#pde-height');
    return this.unit === 'imperial' ? value * INCH_TO_MM : value;
  }

  private visibleLayerMm() {
    const value = this.numberValue('#pde-layer');
    return this.unit === 'imperial' ? value * INCH_TO_MM : value;
  }

  private visibleSpeedMmS() {
    const value = this.numberValue('#pde-speed');
    return this.unit === 'imperial' ? value * INCH_TO_MM : value;
  }

  private visibleAreaMm2() {
    const value = this.numberValue('#pde-area');
    return this.unit === 'imperial' ? value * IN2_TO_MM2 : value;
  }

  private params() {
    return {
      modelHeightMm: this.visibleHeightMm(),
      layerHeightMm: this.visibleLayerMm(),
      printSpeedMmS: this.visibleSpeedMmS(),
      footprintAreaMm2: this.visibleAreaMm2(),
      infillPercent: this.numberValue('#pde-infill'),
      complexityFactor: this.numberValue('#pde-complexity'),
      overheadPercent: this.numberValue('#pde-overhead'),
      filamentDiameterMm: this.numberValue('#pde-filament'),
      extrusionWidthMm: 0.45,
      filamentDensityGcm3: this.numberValue('#pde-density'),
    };
  }

  private render() {
    const params = this.params();
    const result = calculatePrintDuration(params);
    this.output('#pde-infill-output')!.textContent = params.infillPercent.toFixed(0);
    this.output('#pde-complexity-output')!.textContent = params.complexityFactor.toFixed(2);
    this.output('#pde-overhead-output')!.textContent = params.overheadPercent.toFixed(0);
    this.output('#pde-time')!.textContent = this.formatTime(result.totalMinutes);
    this.output('#pde-layers')!.textContent = result.totalLayers.toString();
    this.output('#pde-material')!.textContent = `${result.materialVolumeCm3.toFixed(1)} ${this.text('cm3Unit')} / ${this.formatMass(result.filamentWeightG)}`;
    this.output('#pde-filament-length')!.textContent = this.formatLength(result.filamentLengthM);
    this.output('#pde-effective-speed')!.textContent = `${this.formatSpeed(result.effectiveSpeedMmS)}`;
    this.output('#pde-base')!.textContent = this.formatTime(result.baseMinutes);
    this.output('#pde-overhead-time')!.textContent = this.formatTime(result.overheadMinutes);
    this.updateScenarioRows(params);
    this.updateUnits();
    this.updateInsight(result.totalMinutes);
    this.save();
  }

  private updateScenarioRows(params: ReturnType<PrintDurationEstimatorApp['params']>) {
    const rows = this.root.querySelectorAll<HTMLElement>('[data-scenario]');
    calculateSpeedScenarios(params).forEach((scenario, index) => {
      const row = rows[index];
      if (!row) return;
      row.querySelector<HTMLElement>('[data-scenario-speed]')!.textContent = this.formatSpeed(scenario.speedMmS);
      row.querySelector<HTMLElement>('[data-scenario-time]')!.textContent = this.formatTime(scenario.totalMinutes);
      row.style.setProperty('--bar', `${Math.max(12, Math.min(100, (scenario.totalMinutes / Math.max(params.modelHeightMm, 1)) * 10))}%`);
    });
  }

  private updateUnits() {
    this.root.querySelectorAll<HTMLElement>('[data-height-unit], [data-layer-unit]').forEach((el) => {
      el.textContent = this.unit === 'imperial' ? this.text('inchUnit') : this.text('mmUnit');
    });
    this.output('[data-area-unit]')!.textContent = this.unit === 'imperial' ? this.text('in2Unit') : this.text('mm2Unit');
    this.output('[data-speed-unit]')!.textContent = this.unit === 'imperial' ? this.text('inSUnit') : this.text('mmSUnit');
  }

  private updateInsight(totalMinutes: number) {
    let key = 'balancedInsight';
    if (totalMinutes < 180) key = 'lowInsight';
    if (totalMinutes > 720) key = 'highInsight';
    this.output('#pde-insight')!.textContent = this.text(key);
  }

  private formatTime(minutes: number) {
    const safe = Math.max(minutes, 0);
    const hours = Math.floor(safe / 60);
    const mins = Math.round(safe % 60);
    return hours > 0 ? `${hours} ${this.text('hoursUnit')} ${mins} ${this.text('minutesUnit')}` : `${mins} ${this.text('minutesUnit')}`;
  }

  private formatMass(grams: number) {
    return this.unit === 'imperial' ? `${(grams / G_PER_OUNCE).toFixed(2)} ${this.text('ounceUnit')}` : `${grams.toFixed(1)} ${this.text('gramUnit')}`;
  }

  private formatLength(meters: number) {
    return this.unit === 'imperial' ? `${(meters / M_PER_FOOT).toFixed(1)} ${this.text('footUnit')}` : `${meters.toFixed(1)} ${this.text('meterUnit')}`;
  }

  private formatSpeed(mmS: number) {
    return this.unit === 'imperial'
      ? `${(mmS / INCH_TO_MM).toFixed(2)} ${this.text('inSUnit')}`
      : `${mmS.toFixed(0)} ${this.text('mmSUnit')}`;
  }

  private text(key: string) {
    return this.root.dataset[key] || '';
  }

  private save() {
    const state = Object.fromEntries(Array.from(this.root.querySelectorAll<HTMLInputElement>('input')).map((input) => [input.id, input.value]));
    window.localStorage?.setItem(this.storageKey, JSON.stringify({ unit: this.unit, state }));
  }

  private restore() {
    try {
      const saved = JSON.parse(window.localStorage?.getItem(this.storageKey) || '{}') as { unit?: 'metric' | 'imperial'; state?: Record<string, string> };
      if (saved.unit === 'imperial') this.unit = 'imperial';
      this.root.querySelectorAll('[data-unit]').forEach((item) => item.classList.toggle('is-active', item.getAttribute('data-unit') === this.unit));
      Object.entries(saved.state || {}).forEach(([id, value]) => {
        const input = this.input(`#${id}`);
        if (input) input.value = value;
      });
    } catch {
    }
  }
}

export const initPrintDurationEstimator = () => {
  document.querySelectorAll<HTMLElement>('[data-pde-root]').forEach((root) => {
    if (root.dataset.ready) return;
    root.dataset.ready = 'true';
    new PrintDurationEstimatorApp(root);
  });
};
