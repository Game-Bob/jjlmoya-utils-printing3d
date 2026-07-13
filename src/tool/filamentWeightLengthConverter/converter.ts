import {
  calculateFilamentWeightLength,
  FILAMENT_MATERIALS,
  toGrams,
  fromGrams,
  toMm,
  fromMm,
  getConvertedValues,
  MATERIAL_COLORS,
} from './logic';
import type { UnitSystem } from './logic';
import { restoreState, saveState } from './storage';
import type { StoredFilamentWeightLengthState } from './storage';

class FilamentWeightLengthConverter {
  private root: HTMLElement;
  private unitSystem: UnitSystem = 'metric';
  private inputs: Record<string, HTMLInputElement | HTMLSelectElement> = {};
  private outputs: Record<string, HTMLElement | SVGElement> = {};
  private lastSpoolTotalGrams = 1000;

  constructor(root: HTMLElement) {
    this.root = root;
    this.bindElements();
    this.restoreState();
    this.bindEvents();
    this.configureSliderForUnit();
    this.syncUnitControls();
    this.calculate();
  }

  private bindElements() {
    ['material', 'density', 'weight', 'weight-slider', 'diameter', 'stock'].forEach((id) => {
      this.inputs[id] = this.root.querySelector(`#fwlc-${id}`) as HTMLInputElement | HTMLSelectElement;
    });
    ['length', 'length-unit', 'stock-label', 'stock-delta', 'volume', 'area', 'gpm', 'spool', 'spool-fill', 'cut-line', 'ruler-fill', 'ruler-label', 'cut-caption', 'tooltip'].forEach((id) => {
      this.outputs[id] = this.root.querySelector(`#fwlc-${id}`) as HTMLElement | SVGElement;
    });
  }

  private bindEvents() {
    this.input('weight-slider').addEventListener('input', () => {
      this.input('weight').value = this.input('weight-slider').value;
      this.calculate();
    });
    this.input('weight').addEventListener('input', () => this.syncWeightSlider());
    ['material', 'density', 'weight', 'diameter', 'stock'].forEach((id) => {
      this.input(id).addEventListener('input', () => this.calculate());
    });
    this.input('material').addEventListener('change', () => this.setMaterialDensity());
    this.root.querySelectorAll<HTMLButtonElement>('[data-unit-system]').forEach((button) => {
      button.addEventListener('click', () => this.setUnitSystem(button.dataset.unitSystem === 'imperial' ? 'imperial' : 'metric'));
    });
    const spool = this.output('spool');
    spool?.addEventListener('mousemove', (event) => this.showSpoolTooltip(event as MouseEvent));
    spool?.addEventListener('mouseleave', () => this.hideSpoolTooltip());
  }

  private input(id: string) {
    return this.inputs[id] as HTMLInputElement;
  }

  private output(id: string) {
    return this.outputs[id] as HTMLElement;
  }

  private label(key: string) {
    return this.root.dataset[key] ?? '';
  }

  private numberValue(id: string, fallback: number) {
    const value = parseFloat(this.input(id).value || '');
    return Number.isFinite(value) ? value : fallback;
  }

  private setMaterialDensity() {
    const material = FILAMENT_MATERIALS.find((item) => item.id === this.input('material').value);
    if (material) {
      this.input('density').value = String(material.density);
    }
    this.calculate();
  }

  private setUnitSystem(next: UnitSystem) {
    if (next === this.unitSystem) {
      return;
    }
    const weightGrams = toGrams(this.numberValue('weight', 0), this.unitSystem);
    const stockValue = this.input('stock').value === '' ? '' : String(fromGrams(toGrams(this.numberValue('stock', 0), this.unitSystem), next).toFixed(2).replace(/\.?0+$/, ''));
    const diameterMm = toMm(this.numberValue('diameter', 1.75), this.unitSystem);
    this.unitSystem = next;
    this.input('weight').value = fromGrams(weightGrams, next).toFixed(2).replace(/\.?0+$/, '');
    this.input('stock').value = stockValue;
    this.input('diameter').value = fromMm(diameterMm, next).toFixed(next === 'imperial' ? 4 : 2).replace(/\.?0+$/, '');
    this.syncUnitControls();
    this.configureSliderForUnit();
    this.syncWeightSlider();
    this.calculate();
  }

  private format(value: number, digits = 2) {
    return new Intl.NumberFormat('en', { maximumFractionDigits: digits }).format(value);
  }

  private syncUnitControls() {
    this.root.querySelectorAll<HTMLButtonElement>('[data-unit-system]').forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.unitSystem === this.unitSystem));
    });
    this.root.querySelectorAll<HTMLElement>('[data-weight-unit]').forEach((unit) => {
      unit.textContent = this.label(this.unitSystem === 'imperial' ? 'ouncesUnit' : 'gramsUnit');
    });
    this.root.querySelectorAll<HTMLElement>('[data-diameter-unit]').forEach((unit) => {
      unit.textContent = this.label(this.unitSystem === 'imperial' ? 'inchUnit' : 'mmUnit');
    });
  }

  private configureSliderForUnit() {
    this.input('weight-slider').max = this.unitSystem === 'imperial' ? '35.27' : '1000';
    this.input('weight-slider').step = this.unitSystem === 'imperial' ? '0.1' : '1';
  }

  private syncWeightSlider() {
    const slider = this.input('weight-slider');
    const max = parseFloat(slider.max || '1000');
    slider.value = String(Math.max(0, Math.min(max, this.numberValue('weight', 0))));
  }

  private currentMaterialColor(stockState: string) {
    if (stockState === 'short') {
      return '#ef4444';
    }
    return MATERIAL_COLORS[this.input('material').value] ?? '#16c4b8';
  }

  private updateSpoolElements(totalGrams: number, consumedGrams: number, remainingAfterPrint: number, stockState: string) {
    const consumedRatio = Math.max(0, Math.min(1, consumedGrams / totalGrams));
    const fillRatio = Math.max(0, Math.min(1, remainingAfterPrint / totalGrams));
    const circumference = 2 * Math.PI * 48;
    const fill = this.output('spool-fill') as unknown as SVGCircleElement;
    const cutLine = this.output('cut-line') as unknown as SVGLineElement;
    const color = this.currentMaterialColor(stockState);

    fill.style.stroke = color;
    fill.style.strokeDasharray = `${circumference}`;
    fill.style.strokeDashoffset = `${circumference * (1 - fillRatio)}`;
    this.output('ruler-fill').style.width = `${consumedRatio * 100}%`;
    const weightUnit = this.label(this.unitSystem === 'imperial' ? 'ouncesUnit' : 'gramsUnit');
    this.output('ruler-label').textContent = `${this.format(fromGrams(Math.min(consumedGrams, totalGrams), this.unitSystem), 1)} ${weightUnit} / ${this.format(fromGrams(totalGrams, this.unitSystem), 1)} ${weightUnit}`;
    const isShort = stockState === 'short';
    this.output('cut-caption').style.visibility = isShort ? 'visible' : 'hidden';
    cutLine.style.opacity = isShort ? '1' : '0';
    const stopRatio = isShort ? Math.max(0, Math.min(1, totalGrams / Math.max(consumedGrams, 1))) : consumedRatio;
    cutLine.style.transform = `rotate(${stopRatio * 360}deg)`;
    cutLine.style.stroke = '#ef4444';
    this.lastSpoolTotalGrams = totalGrams;
    this.root.style.setProperty('--fwlc-material-color', color);
  }

  private updateSpoolVisualization(result: ReturnType<typeof calculateFilamentWeightLength>, consumedGrams: number) {
    const hasStock = result.hasStockCheck;
    let totalGrams = 1000;
    let remainingAfterPrint = Math.max(0, 1000 - consumedGrams);
    let stockState = 'none';

    if (hasStock) {
      totalGrams = Math.max(consumedGrams + result.deltaGrams, 1);
      remainingAfterPrint = Math.max(0, result.deltaGrams);
      stockState = result.isEnough ? 'enough' : 'short';
    }

    this.updateSpoolElements(totalGrams, consumedGrams, remainingAfterPrint, stockState);
  }

  private showSpoolTooltip(event: MouseEvent) {
    const tooltip = this.output('tooltip');
    const x = event.offsetX - 80;
    const y = event.offsetY - 80;
    const angle = (Math.atan2(y, x) + Math.PI / 2 + Math.PI * 2) % (Math.PI * 2);
    const ratio = angle / (Math.PI * 2);
    const grams = this.lastSpoolTotalGrams * ratio;
    const weightUnit = this.label(this.unitSystem === 'imperial' ? 'ouncesUnit' : 'gramsUnit');
    tooltip.textContent = `${this.format(fromGrams(grams, this.unitSystem), 1)} ${weightUnit}`;
    tooltip.style.left = `${event.offsetX + 10}px`;
    tooltip.style.top = `${event.offsetY + 10}px`;
    tooltip.dataset.visible = 'true';
  }

  private hideSpoolTooltip() {
    this.output('tooltip').dataset.visible = 'false';
  }

  private applyStoredState(state: StoredFilamentWeightLengthState) {
    this.unitSystem = state.unitSystem;
    this.input('material').value = state.material;
    this.input('density').value = state.density;
    this.input('weight').value = state.weight;
    this.input('diameter').value = state.diameter;
    this.input('stock').value = state.stock;
  }

  private restoreState() {
    const state = restoreState();
    if (state) {
      this.applyStoredState(state);
    }
  }

  private saveState() {
    saveState({
      unitSystem: this.unitSystem,
      material: this.input('material').value,
      density: this.input('density').value,
      weight: this.input('weight').value,
      diameter: this.input('diameter').value,
      stock: this.input('stock').value,
    });
  }

  private calculate() {
    const stockValue = this.input('stock').value.trim();
    this.syncWeightSlider();
    const consumedGrams = toGrams(this.numberValue('weight', 0), this.unitSystem);
    const result = calculateFilamentWeightLength({
      weightGrams: consumedGrams,
      density: this.numberValue('density', 1.24),
      diameterMm: toMm(this.numberValue('diameter', 1.75), this.unitSystem),
      remainingGrams: stockValue === '' ? undefined : toGrams(parseFloat(stockValue), this.unitSystem),
    });

    this.updateOutputKPIs(result);
    this.updateSpoolVisualization(result, consumedGrams);
    this.updateStockOutput(result);
    this.saveState();
  }

  private updateOutputKPIs(result: ReturnType<typeof calculateFilamentWeightLength>) {
    const isImp = this.unitSystem === 'imperial';
    const vals = getConvertedValues(result, this.unitSystem);

    this.output('length').textContent = this.format(vals.length, vals.length > 100 ? 1 : 2);
    this.output('length-unit').textContent = this.label(isImp ? 'feetUnit' : 'metersUnit');
    this.output('volume').textContent = `${this.format(vals.volume, 2)} ${this.label(isImp ? 'in3Unit' : 'cm3Unit')}`;
    this.output('area').textContent = `${this.format(vals.area, isImp ? 5 : 3)} ${this.label(isImp ? 'in2Unit' : 'mm2Unit')}`;
    this.output('gpm').textContent = `${this.format(vals.gramsPerLength, 2)} ${this.label(isImp ? 'linearMassImperialUnit' : 'linearMassMetricUnit')}`;
  }

  private updateStockOutput(result: ReturnType<typeof calculateFilamentWeightLength>) {
    const readout = this.root.querySelector('.fwlc-readout') as HTMLElement;
    if (!result.hasStockCheck) {
      readout.dataset.stockState = 'none';
      this.output('stock-label').textContent = this.label('noStockLabel');
      this.output('stock-delta').textContent = '-';
      return;
    }
    const isImp = this.unitSystem === 'imperial';
    const vals = getConvertedValues(result, this.unitSystem);
    const deltaWeight = fromGrams(result.deltaGrams, this.unitSystem);
    
    readout.dataset.stockState = result.isEnough ? 'enough' : 'short';
    this.output('stock-label').textContent = this.label(result.isEnough ? 'enoughLabel' : 'shortLabel');
    
    const prefix = this.label(result.isEnough ? 'surplusLabel' : 'missingLabel');
    const wUnit = this.label(isImp ? 'ouncesUnit' : 'gramsUnit');
    const lUnit = this.label(isImp ? 'feetUnit' : 'metersUnit');
    
    this.output('stock-delta').textContent = `${prefix}: ${this.format(Math.abs(deltaWeight), 1)} ${wUnit} / ${this.format(Math.abs(vals.deltaLength), 2)} ${lUnit}`;
  }
}

const initFilamentWeightLengthConverter = () => {
  document.querySelectorAll<HTMLElement>('.fwlc-root').forEach((root) => new FilamentWeightLengthConverter(root));
};

document.addEventListener('astro:page-load', initFilamentWeightLengthConverter);
initFilamentWeightLengthConverter();
