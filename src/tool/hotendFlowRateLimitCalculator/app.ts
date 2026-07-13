import { calculateHotendFlowRateLimit } from './logic';

const INCH_TO_MM = 25.4;
type UnitSystem = 'metric' | 'imperial';

class HotendFlowRateLimitApp {
  private unit: UnitSystem = 'metric';
  private animated = new Map<string, number>();
  private frames = new Map<string, number>();

  constructor(private root: HTMLElement) {
    this.bind();
    this.render(true);
  }

  private bind() {
    this.root.querySelectorAll<HTMLInputElement | HTMLSelectElement>('[data-hfr-input]').forEach((input) => {
      input.addEventListener('input', () => this.render(input.dataset.hfrInput === 'hotend'));
      input.addEventListener('change', () => this.render(input.dataset.hfrInput === 'hotend'));
    });
    this.root.querySelectorAll<HTMLButtonElement>('[data-hfr-unit]').forEach((button) => {
      button.addEventListener('click', () => this.changeUnit(button));
    });
  }

  private changeUnit(button: HTMLButtonElement) {
    const next = button.dataset.hfrUnit === 'imperial' ? 'imperial' : 'metric';
    if (next === this.unit) return;
    this.convertRangeScale('line-width', next);
    this.convertRangeScale('layer-height', next);
    this.convertRangeScale('speed', next);
    this.setValue('line-width', this.convertLength(this.value('line-width'), next));
    this.setValue('layer-height', this.convertLength(this.value('layer-height'), next));
    this.setValue('speed', this.convertLength(this.value('speed'), next));
    this.unit = next;
    this.root.querySelectorAll<HTMLButtonElement>('[data-hfr-unit]').forEach((item) => item.classList.toggle('is-active', item === button));
    this.render(true);
  }

  private convertRangeScale(name: string, next: UnitSystem) {
    const input = this.input(name);
    if (!input || input.type !== 'range') return;
    const range = input as HTMLInputElement;
    range.min = this.convertLength(parseFloat(range.min), next).toString();
    range.max = this.convertLength(parseFloat(range.max), next).toString();
    range.step = this.convertLength(parseFloat(range.step), next).toString();
  }

  private convertLength(value: number, next: UnitSystem) {
    return next === 'imperial' ? value / INCH_TO_MM : value * INCH_TO_MM;
  }

  private render(isHardwareChange = false) {
    this.syncSliderLabels();
    const factor = this.unit === 'imperial' ? INCH_TO_MM : 1;
    const result = calculateHotendFlowRateLimit({
      lineWidthMm: this.value('line-width') * factor,
      layerHeightMm: this.value('layer-height') * factor,
      speedMmS: this.value('speed') * factor,
      hotendLimitMm3S: this.value('hotend'),
    });

    this.root.dataset.state = result.state;
    this.root.style.setProperty('--hfr-load', `${Math.min(result.loadPercent, 120) / 120}`);
    this.root.style.setProperty('--hfr-arc-progress', `${Math.min(result.loadPercent, 120) / 120}`);
    this.root.style.setProperty('--hfr-arc-offset', `${(298 - 298 * (Math.min(result.loadPercent, 120) / 120)).toFixed(2)}px`);
    this.root.querySelector<HTMLElement>('[data-hfr-gauge]')?.classList.toggle('is-recalibrating', isHardwareChange);
    window.setTimeout(() => this.root.querySelector<HTMLElement>('[data-hfr-gauge]')?.classList.remove('is-recalibrating'), 520);

    this.animate('flow', result.flowMm3S, (value) => value.toFixed(2));
    this.animate('load', result.loadPercent, (value) => `${value.toFixed(0)}%`);
    this.animate('max-speed', this.visibleSpeed(result.maxSafeSpeedMmS), (value) => `${Math.round(value)} ${this.speedUnit()}`);
    this.animate('reserve', result.remainingMm3S, (value) => `${value.toFixed(2)} ${this.root.dataset.flowUnit}`);
    this.text('state', this.stateText(result.state));
    this.text('hint', this.hintText(result.state));
    this.rotateNeedle(result.loadPercent);
  }

  private rotateNeedle(load: number) {
    const angle = -112 + Math.min(load, 120) * (224 / 120);
    this.root.querySelector<SVGGElement>('[data-hfr-needle]')?.style.setProperty('--hfr-angle', `${angle.toFixed(1)}deg`);
  }

  private animate(name: string, target: number, formatter: (value: number) => string) {
    const output = this.output(name);
    if (!output) return;
    const frame = this.frames.get(name);
    if (frame) window.cancelAnimationFrame(frame);
    const start = this.animated.get(name) ?? target;
    const delta = target - start;
    const startAt = window.performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startAt) / 420, 1);
      const elastic = 1 - Math.pow(1 - progress, 3);
      const value = start + delta * elastic;
      output.textContent = formatter(value);
      output.classList.toggle('is-counting', progress < 1);
      if (progress < 1) this.frames.set(name, window.requestAnimationFrame(tick));
      else {
        this.animated.set(name, target);
        output.classList.remove('is-counting');
      }
    };
    this.frames.set(name, window.requestAnimationFrame(tick));
  }

  private syncSliderLabels() {
    this.root.querySelectorAll<HTMLInputElement>('input[type="range"][data-hfr-input]').forEach((input) => {
      const output = input.previousElementSibling?.querySelector('output');
      if (!output) return;
      const value = parseFloat(input.value) || 0;
      output.textContent = input.dataset.hfrInput === 'speed' ? Math.round(value).toString() : value.toFixed(2);
    });
    this.root.querySelectorAll<HTMLElement>('[data-hfr-length-unit]').forEach((el) => (el.textContent = this.unit === 'imperial' ? this.root.dataset.inchUnit || '' : this.root.dataset.millimeterUnit || ''));
    this.root.querySelectorAll<HTMLElement>('[data-hfr-speed-unit]').forEach((el) => (el.textContent = this.speedUnit()));
  }

  private visibleSpeed(speedMmS: number) {
    return this.unit === 'imperial' ? speedMmS / INCH_TO_MM : speedMmS;
  }

  private speedUnit() {
    return this.unit === 'imperial' ? this.root.dataset.imperialSpeedUnit || '' : this.root.dataset.metricSpeedUnit || '';
  }

  private stateText(state: string) {
    if (state === 'CRITICAL_FLOW') return this.root.dataset.criticalState || '';
    if (state === 'LIMIT_ZONE') return this.root.dataset.limitState || '';
    return this.root.dataset.idealState || '';
  }

  private hintText(state: string) {
    if (state === 'CRITICAL_FLOW') return this.root.dataset.criticalHint || '';
    if (state === 'LIMIT_ZONE') return this.root.dataset.limitHint || '';
    return this.root.dataset.idealHint || '';
  }

  private value(name: string) {
    return parseFloat(this.input(name)?.value || '0') || 0;
  }

  private setValue(name: string, value: number) {
    const input = this.input(name);
    if (input) input.value = name === 'speed' ? value.toFixed(0) : value.toFixed(3);
  }

  private input(name: string) {
    return this.root.querySelector<HTMLInputElement | HTMLSelectElement>(`[data-hfr-input="${name}"]`);
  }

  private output(name: string) {
    return this.root.querySelector<HTMLElement>(`[data-hfr-output="${name}"]`);
  }

  private text(name: string, value: string) {
    const output = this.output(name);
    if (output) output.textContent = value;
  }
}

export const initHotendFlowRateLimitCalculator = () => {
  document.querySelectorAll<HTMLElement>('[data-hfr-root]').forEach((root) => {
    if (root.dataset.ready) return;
    root.dataset.ready = 'true';
    new HotendFlowRateLimitApp(root);
  });
};
