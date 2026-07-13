import { calculateElephantFootCompensation, type MaterialPreset, type ElephantFootCompensationResult } from './logic';

interface SavedElephantFootState {
  unitSystem?: 'metric' | 'imperial';
  material?: MaterialPreset;
  physical?: ElephantFootLab['physical'];
}

interface ProfileArgs {
  left: number;
  right: number;
  topY: number;
  baseY: number;
  bulge: number;
  color: string;
  dashed: boolean;
}

class ElephantFootLab {
  private readonly storageKey = 'jjlmoya:elephant-foot-compensation:v1';
  private unitSystem: 'metric' | 'imperial' = 'metric';
  private material: MaterialPreset = 'pla';
  private root = document.getElementById('main-tool') as HTMLElement;
  private raf = 0;
  public physical = { errorMm: 0.18, layerMm: 0.2, zMm: 0.12, toleranceMm: 0.05, bedC: 60 };

  constructor() {
    this.restore();
    this.bindSegments();
    this.bindInputs();
    this.bindCopy();
    this.reflectActiveControls();
    this.renderControls();
    this.update();
  }

  private input(id: string) {
    return document.getElementById(id) as HTMLInputElement;
  }

  private lbl(name: string) {
    return this.root.dataset[name] || '';
  }

  private value(id: string) {
    return parseFloat(this.input(id).value) || 0;
  }

  private bindSegments() {
    document.querySelectorAll<HTMLButtonElement>('[data-material]').forEach((button) => {
      button.addEventListener('click', () => this.selectMaterial(button));
    });
    document.querySelectorAll<HTMLButtonElement>('[data-units]').forEach((button) => {
      button.addEventListener('click', () => this.selectUnits(button));
    });
  }

  private selectMaterial(button: HTMLButtonElement) {
    this.material = (button.dataset.material || 'pla') as MaterialPreset;
    this.setActive('[data-material]', button);
    this.physical.bedC = parseFloat(button.dataset.bed || '60');
    this.physical.toleranceMm = parseFloat(button.dataset.tolerance || '0.05');
    this.renderControls();
    this.update();
  }

  private selectUnits(button: HTMLButtonElement) {
    this.capturePhysical();
    this.unitSystem = button.dataset.units === 'imperial' ? 'imperial' : 'metric';
    this.setActive('[data-units]', button);
    this.renderControls();
    this.update();
  }

  private bindInputs() {
    ['efc-error', 'efc-layer', 'efc-z', 'efc-bed', 'efc-tolerance'].forEach((id) => {
      this.input(id).addEventListener('input', () => this.update());
    });
    [['efc-error-range', 'efc-error'], ['efc-layer-range', 'efc-layer'], ['efc-z-range', 'efc-z']].forEach(([rangeId, inputId]) => {
      this.input(rangeId).addEventListener('input', () => this.syncRange(rangeId, inputId));
    });
  }

  private syncRange(rangeId: string, inputId: string) {
    const value = parseFloat(this.input(rangeId).value);
    this.input(inputId).value = this.unitSystem === 'imperial' ? (value / 25.4).toFixed(3) : value.toFixed(2);
    this.update();
  }

  private bindCopy() {
    document.getElementById('efc-copy')?.addEventListener('click', () => this.copy());
  }

  private restore() {
    try {
      const raw = window.localStorage?.getItem(this.storageKey);
      if (raw) this.applySavedState(JSON.parse(raw) as SavedElephantFootState);
    } catch {
      window.localStorage?.removeItem(this.storageKey);
    }
  }

  private applySavedState(saved: SavedElephantFootState) {
    if (this.isUnitSystem(saved.unitSystem)) this.unitSystem = saved.unitSystem;
    if (this.isMaterial(saved.material)) this.material = saved.material;
    if (saved.physical) this.physical = this.savedPhysical(saved.physical);
  }

  private savedPhysical(physical: Partial<typeof this.physical>) {
    return {
      errorMm: this.numberOr(physical.errorMm, this.physical.errorMm),
      layerMm: this.numberOr(physical.layerMm, this.physical.layerMm),
      zMm: this.numberOr(physical.zMm, this.physical.zMm),
      toleranceMm: this.numberOr(physical.toleranceMm, this.physical.toleranceMm),
      bedC: this.numberOr(physical.bedC, this.physical.bedC),
    };
  }

  private save() {
    try {
      window.localStorage?.setItem(this.storageKey, JSON.stringify({ unitSystem: this.unitSystem, material: this.material, physical: this.physical }));
    } catch {}
  }

  private numberOr(value: unknown, fallback: number) {
    return typeof value === 'number' && Number.isFinite(value) ? value : fallback;
  }

  private isUnitSystem(value: unknown): value is 'metric' | 'imperial' {
    return value === 'metric' || value === 'imperial';
  }

  private isMaterial(value: unknown): value is MaterialPreset {
    return value === 'pla' || value === 'petg' || value === 'abs' || value === 'custom';
  }

  private reflectActiveControls() {
    const materialButton = document.querySelector<HTMLElement>(`[data-material="${this.material}"]`);
    const unitButton = document.querySelector<HTMLElement>(`[data-units="${this.unitSystem}"]`);
    if (materialButton) this.setActive('[data-material]', materialButton);
    if (unitButton) this.setActive('[data-units]', unitButton);
  }

  private setActive(selector: string, active: HTMLElement) {
    document.querySelectorAll(selector).forEach((item) => item.classList.toggle('active', item === active));
  }

  private capturePhysical() {
    const lengthFactor = this.unitSystem === 'imperial' ? 25.4 : 1;
    this.physical = {
      errorMm: this.value('efc-error') * lengthFactor,
      layerMm: this.value('efc-layer') * lengthFactor,
      zMm: this.value('efc-z') * lengthFactor,
      toleranceMm: this.value('efc-tolerance') * lengthFactor,
      bedC: this.unitSystem === 'imperial' ? (this.value('efc-bed') - 32) * (5 / 9) : this.value('efc-bed'),
    };
  }

  private renderControls() {
    const lengthDivisor = this.unitSystem === 'imperial' ? 25.4 : 1;
    const lengthUnit = this.unitSystem === 'imperial' ? this.lbl('inch') : this.lbl('mm');
    const decimals = this.unitSystem === 'imperial' ? 3 : 2;
    this.setLengthInput('efc-error', this.physical.errorMm, lengthDivisor, decimals);
    this.setLengthInput('efc-layer', this.physical.layerMm, lengthDivisor, decimals);
    this.setLengthInput('efc-z', this.physical.zMm, lengthDivisor, decimals);
    this.setLengthInput('efc-tolerance', this.physical.toleranceMm, lengthDivisor, decimals);
    this.input('efc-bed').value = this.unitSystem === 'imperial' ? (this.physical.bedC * 9 / 5 + 32).toFixed(0) : this.physical.bedC.toFixed(0);
    ['efc-error-unit', 'efc-layer-unit', 'efc-z-unit', 'efc-tolerance-unit', 'efc-expansion-unit', 'efc-chamfer-unit'].forEach((id) => this.text(id, lengthUnit));
    this.text('efc-bed-unit', this.unitSystem === 'imperial' ? this.lbl('f') : this.lbl('c'));
  }

  private setLengthInput(id: string, valueMm: number, divisor: number, decimals: number) {
    this.input(id).value = (valueMm / divisor).toFixed(decimals);
  }

  private params() {
    this.capturePhysical();
    this.input('efc-error-range').value = `${Math.min(this.physical.errorMm, 0.8)}`;
    this.input('efc-layer-range').value = `${Math.min(Math.max(this.physical.layerMm, 0.04), 0.4)}`;
    this.input('efc-z-range').value = `${Math.min(Math.max(this.physical.zMm, 0.02), 0.35)}`;
    return {
      measuredErrorMm: this.physical.errorMm,
      layerHeightMm: this.physical.layerMm,
      zPressureOffsetMm: this.physical.zMm,
      bedTemperatureC: this.physical.bedC,
      targetToleranceMm: this.physical.toleranceMm,
      material: this.material,
    };
  }

  private displayLength(valueMm: number) {
    return this.unitSystem === 'imperial' ? (valueMm / 25.4).toFixed(4) : valueMm.toFixed(3);
  }

  private update() {
    const result = calculateElephantFootCompensation(this.params());
    this.renderText(result);
    this.save();
    cancelAnimationFrame(this.raf);
    this.raf = requestAnimationFrame(() => this.draw(result));
  }

  private renderText(result: ElephantFootCompensationResult) {
    const unit = this.unitSystem === 'imperial' ? this.lbl('inch') : this.lbl('mm');
    this.text('efc-expansion', this.displayLength(result.slicerHorizontalExpansionMm));
    this.text('efc-chamfer', this.displayLength(result.chamferDepthMm));
    this.text('efc-phi', result.thermalFactor.toFixed(2));
    this.text('efc-verdict', this.lbl(result.severity));
    document.querySelector('.efc-verdict')?.setAttribute('data-state', result.severity);
    this.text('efc-slicer', this.lbl('slicerTemplate').replace('{expansion}', this.displayLength(result.slicerHorizontalExpansionMm)).replace('{unit}', unit));
    this.text('efc-cad', this.lbl('cadTemplate').replace('{chamfer}', this.displayLength(result.chamferDepthMm)).replace('{unit}', unit));
  }

  private draw(result: ElephantFootCompensationResult) {
    const canvas = document.getElementById('efc-canvas') as HTMLCanvasElement | null;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const dark = document.documentElement.classList.contains('theme-dark') || document.body.classList.contains('theme-dark');
    const accent = dark ? '#78d7b0' : '#147b5a';
    this.drawBackground(ctx, canvas, dark);
    this.drawProfiles(ctx, { canvas, result, accent, dark });
    this.drawCanvasLabels(ctx, result, accent);
  }

  private drawBackground(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, dark: boolean) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = dark ? '#171d1b' : '#f8faf9';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 1;
    ctx.strokeStyle = dark ? 'rgba(237, 243, 241, 0.06)' : 'rgba(29, 44, 40, 0.08)';
    for (let y = 84; y < canvas.height; y += 84) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }
  }

  private drawProfiles(ctx: CanvasRenderingContext2D, data: { canvas: HTMLCanvasElement; result: ElephantFootCompensationResult; accent: string; dark: boolean }) {
    const { canvas, result, accent, dark } = data;
    const baseY = canvas.height * 0.72;
    const topY = canvas.height * 0.25;
    const left = canvas.width * 0.25;
    const right = canvas.width * 0.75;
    const bulge = Math.min(this.physical.errorMm * 520, 120);
    const corrected = Math.max(bulge - result.correctedExpansionMm * 520, 0);
    this.profile(ctx, { left, right, topY, baseY, bulge, color: dark ? '#edf3f1' : '#17211f', dashed: false });
    this.profile(ctx, { left, right, topY, baseY, bulge: corrected, color: accent, dashed: true });
  }

  private drawCanvasLabels(ctx: CanvasRenderingContext2D, result: ElephantFootCompensationResult, accent: string) {
    ctx.fillStyle = accent;
    ctx.font = '22px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace';
    ctx.fillText(this.lbl('canvasCorrectionTemplate').replace('{correction}', this.displayLength(result.correctedExpansionMm)).replace('{unit}', this.unitSystem === 'imperial' ? this.lbl('inch') : this.lbl('mm')), 42, 58);
    ctx.font = '16px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace';
    ctx.fillText(this.lbl('canvasPressureTemplate').replace('{phi}', result.thermalFactor.toFixed(2)).replace('{ratio}', result.pressureRatio.toFixed(2)), 42, 88);
  }

  private profile(ctx: CanvasRenderingContext2D, args: ProfileArgs) {
    ctx.save();
    ctx.strokeStyle = args.color;
    ctx.lineWidth = args.dashed ? 4 : 5;
    ctx.setLineDash(args.dashed ? [12, 10] : []);
    ctx.beginPath();
    ctx.moveTo(args.left, args.topY);
    ctx.lineTo(args.right, args.topY);
    ctx.lineTo(args.right, args.baseY - 72);
    ctx.quadraticCurveTo(args.right + args.bulge, args.baseY - 35, args.right + args.bulge, args.baseY);
    ctx.lineTo(args.left - args.bulge, args.baseY);
    ctx.quadraticCurveTo(args.left - args.bulge, args.baseY - 35, args.left, args.baseY - 72);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
  }

  private text(id: string, value: string) {
    const node = document.getElementById(id);
    if (node) node.textContent = value;
  }

  private copy() {
    const result = calculateElephantFootCompensation(this.params());
    const unit = this.unitSystem === 'imperial' ? this.lbl('inch') : this.lbl('mm');
    const text = this.lbl('template')
      .replace('{expansion}', `${this.displayLength(result.slicerHorizontalExpansionMm)} ${unit}`)
      .replace('{chamfer}', `${this.displayLength(result.chamferDepthMm)} ${unit}`)
      .replace('{phi}', result.thermalFactor.toFixed(2))
      .replace('{verdict}', this.lbl(result.severity));
    navigator.clipboard?.writeText(text);
    const button = document.getElementById('efc-copy');
    if (!button) return;
    button.textContent = this.lbl('copied');
    setTimeout(() => {
      button.textContent = this.lbl('copy');
    }, 1100);
  }
}

export const initElephantFootLab = () => new ElephantFootLab();
