import { calculateAdditiveProductionEfficiency } from './logic';

const INCH_TO_MM = 25.4;

type UnitSystem = 'metric' | 'imperial';

class AdditiveProductionEfficiencyApp {
  private readonly storageKey = 'jjlmoya-printing3d-additive-production-efficiency-v1';
  private unit: UnitSystem = 'metric';
  private animatedValues = new Map<string, number>();
  private animationFrames = new Map<string, number>();
  private glyphTick = 0;

  constructor(private root: HTMLElement) {
    this.restoreState();
    this.bind();
    this.render();
  }

  private bind() {
    this.root.querySelectorAll<HTMLInputElement>('[data-apec-input]').forEach((input) => {
      input.addEventListener('input', () => this.render());
    });
    this.root.querySelectorAll<HTMLButtonElement>('[data-apec-unit]').forEach((button) => {
      button.addEventListener('click', () => this.changeUnit(button));
    });
  }

  private restoreState() {
    try {
      const raw = window.localStorage?.getItem(this.storageKey);
      if (!raw) return;
      const state = JSON.parse(raw) as { unit?: UnitSystem; values?: Record<string, string> };
      if (state.unit === 'imperial') {
        this.unit = 'imperial';
        this.convertRangeScale('transition-distance', 'imperial');
        this.convertRangeScale('travel-speed', 'imperial');
      }
      Object.entries(state.values || {}).forEach(([name, value]) => {
        const input = this.input(name);
        if (input) input.value = value;
      });
      this.root.querySelectorAll<HTMLButtonElement>('[data-apec-unit]').forEach((button) => {
        button.classList.toggle('is-active', button.dataset.apecUnit === this.unit);
      });
      this.syncSliderOutputs();
    } catch {
      window.localStorage?.removeItem(this.storageKey);
    }
  }

  private saveState() {
    try {
      const values: Record<string, string> = {};
      this.root.querySelectorAll<HTMLInputElement>('[data-apec-input]').forEach((input) => {
        if (input.dataset.apecInput) values[input.dataset.apecInput] = input.value;
      });
      window.localStorage?.setItem(this.storageKey, JSON.stringify({ unit: this.unit, values }));
    } catch {
    }
  }

  private changeUnit(button: HTMLButtonElement) {
    const nextUnit = button.dataset.apecUnit === 'imperial' ? 'imperial' : 'metric';
    if (nextUnit === this.unit) return;
    this.convertRangeScale('transition-distance', nextUnit);
    this.convertRangeScale('travel-speed', nextUnit);
    this.setValue('transition-distance', this.convertLength(this.value('transition-distance'), nextUnit));
    this.setValue('travel-speed', this.convertLength(this.value('travel-speed'), nextUnit));
    this.unit = nextUnit;
    this.root.querySelectorAll<HTMLButtonElement>('[data-apec-unit]').forEach((item) => {
      item.classList.toggle('is-active', item === button);
    });
    this.render();
  }

  private convertRangeScale(name: string, nextUnit: UnitSystem) {
    const input = this.input(name);
    if (!input || input.type !== 'range') return;
    input.min = this.convertLength(parseFloat(input.min), nextUnit).toString();
    input.max = this.convertLength(parseFloat(input.max), nextUnit).toString();
    input.step = this.convertLength(parseFloat(input.step), nextUnit).toString();
  }

  private convertLength(value: number, nextUnit: UnitSystem) {
    return nextUnit === 'imperial' ? value / INCH_TO_MM : value * INCH_TO_MM;
  }

  private value(name: string) {
    return parseFloat(this.input(name)?.value || '0') || 0;
  }

  private setValue(name: string, value: number) {
    const input = this.input(name);
    if (!input) return;
    input.value = value < 10 ? value.toFixed(2) : value.toFixed(1);
  }

  private input(name: string) {
    return this.root.querySelector<HTMLInputElement>(`[data-apec-input="${name}"]`);
  }

  private output(name: string) {
    return this.root.querySelector<HTMLElement>(`[data-apec-output="${name}"]`);
  }

  private render() {
    this.syncSliderOutputs();
    const lengthFactor = this.unit === 'imperial' ? INCH_TO_MM : 1;
    const result = calculateAdditiveProductionEfficiency({
      pieces: this.value('pieces'),
      unitPrintMinutes: this.value('unit-print-time'),
      preheatMinutes: this.value('preheat-time'),
      transitionDistanceMm: this.value('transition-distance') * lengthFactor,
      travelSpeedMmS: this.value('travel-speed') * lengthFactor,
      failureRatePercent: this.value('failure-rate'),
      purgeMinutes: this.value('purge-time'),
      criticalRiskPercent: this.value('critical-risk'),
    });

    this.animateNumber('batch-time', result.batchMinutes, (value) => this.formatMinutes(value));
    this.animateNumber('sequential-time', result.sequentialMinutes, (value) => this.formatMinutes(value));
    this.animateNumber('savings', result.absoluteSavingsMinutes, (value) => this.formatSignedMinutes(value));
    this.animateNumber('efficiency', result.relativeEfficiencyPercent, (value) => `${value.toFixed(1)}${this.datasetText('percentUnit')}`);
    this.animateNumber('risk', result.batchRiskPercent, (value) => `${value.toFixed(1)}${this.datasetText('percentUnit')}`);
    this.animateNumber('transition', result.transitionMinutes, (value) => this.formatMinutes(value));
    this.morphText('recommendation', result.recommendedStrategy === 'batch' ? this.datasetText('batchWinsLabel') : this.datasetText('sequentialWinsLabel'));
    this.text('viability', this.viabilityText(result.viabilityLabel));
    this.text('layout-mode', result.recommendedStrategy === 'batch' ? this.datasetText('batchWinsLabel') : this.datasetText('sequentialWinsLabel'));

    this.output('recommendation-card')?.classList.toggle('is-risk-override', result.recommendedStrategy === 'sequential' && result.batchIsFaster);
    this.output('risk-meter')?.style.setProperty('--apec-risk', `${Math.min(result.batchRiskPercent, 100)}%`);
    this.root.setAttribute('data-apec-strategy', result.recommendedStrategy);
    this.root.style.setProperty('--apec-risk-level', `${Math.min(Math.max(result.batchRiskPercent, 0), 100) / 100}`);
    this.root.style.setProperty('--apec-glyph-stroke', `${(1.2 + Math.min(Math.max(result.batchRiskPercent / 100, 0), 1) * 2.4).toFixed(2)}px`);
    this.root.style.setProperty('--apec-spoke-opacity', `${(0.22 + Math.min(Math.max(result.batchRiskPercent / 100, 0), 1) * 0.46).toFixed(2)}`);
    this.setRiskPalette(result.batchRiskPercent);
    this.renderGlyph(result.batchRiskPercent);
    this.renderBedMap(Math.max(Math.round(this.value('pieces')), 1), result.recommendedStrategy, result.batchRiskPercent);
    this.saveState();
  }

  private syncSliderOutputs() {
    this.root.querySelectorAll<HTMLInputElement>('input[type="range"][data-apec-input]').forEach((input) => {
      const output = input.previousElementSibling?.querySelector('output');
      if (output) output.textContent = this.formatInputValue(input.value);
    });
    const distanceUnit = this.unit === 'imperial' ? this.datasetText('inchUnit') : this.datasetText('millimeterUnit');
    const speedUnit = this.unit === 'imperial' ? this.datasetText('imperialSpeedUnit') : this.datasetText('metricSpeedUnit');
    this.root.querySelectorAll<HTMLElement>('[data-apec-distance-unit]').forEach((el) => (el.textContent = distanceUnit));
    this.root.querySelectorAll<HTMLElement>('[data-apec-speed-unit]').forEach((el) => (el.textContent = speedUnit));
  }

  private viabilityText(label: 'low' | 'moderate' | 'critical') {
    if (label === 'critical') return `${this.datasetText('criticalRiskStatusLabel')} - ${this.datasetText('riskOverrideLabel')}`;
    if (label === 'moderate') return this.datasetText('moderateRiskLabel');
    return this.datasetText('lowRiskLabel');
  }

  private formatInputValue(value: string) {
    const parsed = parseFloat(value) || 0;
    return parsed < 10 ? parsed.toFixed(2) : parsed.toFixed(0);
  }

  private formatMinutes(minutes: number) {
    const rounded = Math.round(Math.abs(minutes));
    const hours = Math.floor(rounded / 60);
    const rest = rounded % 60;
    return hours > 0 ? `${hours}h ${rest}${this.datasetText('minutesUnit')}` : `${rest}${this.datasetText('minutesUnit')}`;
  }

  private formatSignedMinutes(minutes: number) {
    const direction = minutes >= 0 ? this.datasetText('fasterLabel') : this.datasetText('slowerLabel');
    return `${this.formatMinutes(minutes)} ${direction}`;
  }

  private text(name: string, value: string) {
    const output = this.output(name);
    if (output) output.textContent = value;
  }

  private morphText(name: string, value: string) {
    const output = this.output(name);
    if (!output || output.textContent === value) return;
    output.classList.remove('is-morphing');
    window.requestAnimationFrame(() => {
      output.classList.add('is-morphing');
      window.setTimeout(() => {
        output.textContent = value;
        output.classList.remove('is-morphing');
        output.classList.add('is-rebuilt');
        window.setTimeout(() => output.classList.remove('is-rebuilt'), 260);
      }, 120);
    });
  }

  private animateNumber(name: string, target: number, formatter: (value: number) => string) {
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
      const value = start + delta * eased;
      output.textContent = formatter(value);
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

  private renderGlyph(riskPercent: number) {
    const risk = Math.min(Math.max(riskPercent / 100, 0), 1);
    const points = 22;
    const center = 90;
    const baseRadius = 42 + risk * 10;
    const tension = 5 + risk * 24;
    const phase = this.glyphTick++ * 0.33;
    const coords: string[] = [];
    const spokeEls: string[] = [];

    for (let i = 0; i < points; i += 1) {
      const angle = (Math.PI * 2 * i) / points - Math.PI / 2;
      const ripple = Math.sin(i * 1.7 + phase) * tension + Math.cos(i * 0.8 - phase) * tension * 0.42;
      const radius = baseRadius + ripple;
      const x = center + Math.cos(angle) * radius;
      const y = center + Math.sin(angle) * radius;
      coords.push(`${i === 0 ? 'M' : 'L'} ${x.toFixed(2)} ${y.toFixed(2)}`);
      if (i % 2 === 0) {
        spokeEls.push(`<line x1="${center}" y1="${center}" x2="${x.toFixed(2)}" y2="${y.toFixed(2)}"></line>`);
      }
    }

    const path = `${coords.join(' ')} Z`;
    const halo = `M ${center} ${center - baseRadius - 18} A ${baseRadius + 18} ${baseRadius + 18} 0 1 1 ${center - 0.1} ${center - baseRadius - 18} Z`;
    const glyph = this.root.querySelector<SVGPathElement>('[data-apec-glyph]');
    const haloPath = this.root.querySelector<SVGPathElement>('[data-apec-glyph-halo]');
    const spokes = this.root.querySelector<SVGGElement>('[data-apec-glyph-spokes]');
    if (glyph) glyph.setAttribute('d', path);
    if (haloPath) haloPath.setAttribute('d', halo);
    if (spokes) spokes.innerHTML = spokeEls.join('');
  }

  private setRiskPalette(riskPercent: number) {
    const risk = Math.min(Math.max(riskPercent / 100, 0), 1);
    const cool = this.mixColor([78, 141, 130], [148, 95, 82], risk);
    const mid = this.mixColor([160, 122, 66], [133, 72, 63], risk);
    const hot = this.mixColor([121, 59, 55], [93, 43, 41], risk);
    this.root.style.setProperty('--apec-glyph-cool', cool);
    this.root.style.setProperty('--apec-glyph-mid', mid);
    this.root.style.setProperty('--apec-glyph-hot', hot);
  }

  private mixColor(from: [number, number, number], to: [number, number, number], amount: number) {
    const channel = (index: number) => Math.round(from[index] + (to[index] - from[index]) * amount);
    return `rgb(${channel(0)} ${channel(1)} ${channel(2)})`;
  }

  private renderBedMap(pieces: number, strategy: 'batch' | 'sequential', riskPercent: number) {
    const partLayer = this.root.querySelector<SVGGElement>('[data-apec-bed-parts]');
    const zoneLayer = this.root.querySelector<SVGGElement>('[data-apec-bed-zones]');
    const path = this.root.querySelector<SVGPathElement>('[data-apec-bed-path]');
    if (!partLayer || !zoneLayer || !path) return;

    const visiblePieces = Math.min(pieces, 30);
    const cols = Math.ceil(Math.sqrt(visiblePieces * 1.35));
    const rows = Math.ceil(visiblePieces / cols);
    const gapX = 244 / Math.max(cols - 1, 1);
    const gapY = 144 / Math.max(rows - 1, 1);
    const coords = Array.from({ length: visiblePieces }, (_, index) => ({
      x: 38 + (index % cols) * gapX,
      y: 38 + Math.floor(index / cols) * gapY,
    }));
    const speed = this.value('travel-speed');
    const opacity = Math.max(0.14, 0.62 - speed / (this.unit === 'imperial' ? 16 : 620));

    partLayer.innerHTML = coords
      .map((point, index) => {
        const delay = strategy === 'sequential' ? `${(index % 12) * 90}ms` : `${(index % 6) * 35}ms`;
        return `<g class="apec-bed-part" style="--apec-delay:${delay}" transform="translate(${point.x.toFixed(1)} ${point.y.toFixed(1)})">
          <ellipse cx="0" cy="4" rx="11" ry="5"></ellipse>
          <rect x="-11" y="-8" width="22" height="13" rx="5"></rect>
          <ellipse cx="0" cy="-8" rx="11" ry="5"></ellipse>
        </g>`;
      })
      .join('');

    zoneLayer.innerHTML =
      strategy === 'sequential'
        ? coords
            .map(
              (point, index) =>
                `<circle class="apec-bed-zone" style="--apec-delay:${(index % 12) * 90}ms" cx="${point.x.toFixed(1)}" cy="${point.y.toFixed(1)}" r="${(18 + Math.min(riskPercent, 70) * 0.12).toFixed(1)}"></circle>`,
            )
            .join('')
        : '';

    path.style.opacity = opacity.toString();
    path.setAttribute('d', coords.map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x.toFixed(1)} ${point.y.toFixed(1)}`).join(' '));
  }

  private datasetText(key: string) {
    return this.root.dataset[key] || '';
  }
}

export const initAdditiveProductionEfficiencyCalculator = () => {
  document.querySelectorAll<HTMLElement>('[data-apec-root]').forEach((root) => {
    if (root.dataset.ready) return;
    root.dataset.ready = 'true';
    new AdditiveProductionEfficiencyApp(root);
  });
};
