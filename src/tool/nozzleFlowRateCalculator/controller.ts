import {
  calculateInverseNozzleFlow,
  calculateNozzleFlow,
  convertFromMetric,
  convertToMetric,
  type NozzleFlowInput,
  type UnitSystem,
} from './logic';
import { loadNozzleFlowState, saveNozzleFlowState } from './storage';

interface ControllerConfig {
  root: HTMLElement;
  locale: string;
  ui: Record<string, string>;
}

interface InputUpdate {
  root: HTMLElement;
  key: string;
  value: number;
  kind: 'length' | 'speed' | 'flow';
  system: UnitSystem;
}

const DEFAULT_VALUES = { nozzle: 0.4, width: 0.48, layer: 0.2, speed: 120, limit: 15 };
const FLOW_PRESETS: Record<string, number> = {
  'e3d-v6-pla': 15,
  'e3d-v6-petg': 12,
  'e3d-v6-abs': 10,
  'volcano-pla': 28,
  'volcano-petg': 24,
  'volcano-abs': 20,
  'bambu-pla': 32,
  'bambu-petg': 26,
  'bambu-abs': 24,
};

function readNumber(root: HTMLElement, key: string): number {
  const input = root.querySelector<HTMLInputElement>(`[data-input="${key}"]`);
  return Number((input?.value ?? '0').replace(',', '.'));
}

function valuesInMetric(root: HTMLElement, system: UnitSystem): NozzleFlowInput {
  return {
    nozzleDiameterMm: convertToMetric(readNumber(root, 'nozzle'), 'length', system),
    lineWidthMm: convertToMetric(readNumber(root, 'width'), 'length', system),
    layerHeightMm: convertToMetric(readNumber(root, 'layer'), 'length', system),
    speedMmPerSecond: convertToMetric(readNumber(root, 'speed'), 'speed', system),
    flowLimitMm3PerSecond: convertToMetric(readNumber(root, 'limit'), 'flow', system),
  };
}

function setInputValue({ root, key, value, kind, system }: InputUpdate): void {
  const input = root.querySelector<HTMLInputElement>(`[data-input="${key}"]`);
  let decimals = 3;
  if (kind === 'flow') decimals = system === 'imperial' ? 6 : 2;
  else if (system === 'imperial' && kind === 'length') decimals = 5;
  if (input) input.value = trimInputZeros(convertFromMetric(value, kind, system).toFixed(decimals));
}

function trimInputZeros(value: string): string {
  return value.replace(/(\.\d*?)0+$/, '$1').replace(/\.$/, '');
}

function getInputKind(key: string): InputUpdate['kind'] {
  if (key === 'limit' || key === 'inverse-flow') return 'flow';
  if (key === 'speed' || key === 'inverse-speed') return 'speed';
  return 'length';
}

function updateUnits(root: HTMLElement, system: UnitSystem): void {
  root.dataset.unitSystem = system;
  root.querySelectorAll<HTMLElement>('[data-unit]').forEach((unit) => {
    unit.textContent = unit.dataset[system] ?? unit.textContent;
  });
  root.querySelectorAll<HTMLElement>('[data-unit-button]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.unitButton === system));
  });
}

function updateResult(root: HTMLElement, config: ControllerConfig, system: UnitSystem): void {
  const result = calculateNozzleFlow(valuesInMetric(root, system));
  root.querySelector<HTMLElement>('[data-scene]')!.innerHTML = buildScene(result, system, config);
  const values = {
    requested: convertFromMetric(result.requestedFlowMm3PerSecond, 'flow', system),
    safe: convertFromMetric(result.safeSpeedMmPerSecond, 'speed', system),
    production: convertFromMetric(result.productionSpeedMmPerSecond, 'speed', system),
    margin: convertFromMetric(result.marginMm3PerSecond, 'flow', system),
  };
  setText(root, 'requested', format(values.requested, config.locale, 'flow'));
  setText(root, 'safe-speed', format(values.safe, config.locale, 'speed'));
  setText(root, 'production-speed', format(values.production, config.locale, 'speed'));
  setText(root, 'margin', format(values.margin, config.locale, 'flow'));
  setText(root, 'load', `${Math.round(result.loadPercent)}%`);
  root.querySelector<HTMLElement>('[data-state]')!.className = `nozzle-flow-state is-${result.state}`;
  root.querySelector<HTMLElement>('[data-state-label]')!.textContent = config.ui[`${result.state}State`] ?? '';
  root.querySelector<HTMLElement>('[data-state-hint]')!.textContent = config.ui[`${result.state}Hint`] ?? '';
  const layerNote = root.querySelector<HTMLElement>('[data-layer-note]');
  if (layerNote) {
    layerNote.hidden = !result.layerWarning;
    layerNote.textContent = config.ui.layerWarning ?? '';
  }
  saveNozzleFlowState({ unitSystem: system, values: valuesInMetric(root, system) as unknown as Record<string, number> });
}

function updateInverse(root: HTMLElement, config: ControllerConfig, system: UnitSystem): void {
  const values = valuesInMetric(root, system);
  const solveFor = getInverseSolveFor(root);
  const result = calculateInverseNozzleFlow({
    targetFlowMm3PerSecond: convertToMetric(readNumber(root, 'inverse-flow'), 'flow', system),
    desiredSpeedMmPerSecond: convertToMetric(readNumber(root, 'inverse-speed'), 'speed', system),
    lineWidthMm: values.lineWidthMm,
    layerHeightMm: values.layerHeightMm,
    solveFor,
  });
  const output = root.querySelector<HTMLElement>('[data-inverse-result]');
  const outputUnit = root.querySelector<HTMLElement>('[data-inverse-result-unit]');
  if (output) output.textContent = getInverseOutput(result, system, config);
  if (outputUnit) outputUnit.textContent = result.possible ? getLengthUnit(system) : '';
  const note = root.querySelector<HTMLElement>('[data-inverse-note]');
  if (note) note.textContent = result.possible ? (config.ui.inverseHint ?? '') : (config.ui.inverseNoSolution ?? '');
}

function getInverseSolveFor(root: HTMLElement): 'layer' | 'width' {
  return root.querySelector<HTMLSelectElement>('[data-inverse-solve]')?.value === 'width' ? 'width' : 'layer';
}

function getLengthUnit(system: UnitSystem): string {
  return system === 'metric' ? 'mm' : 'in';
}

function getInverseOutput(result: ReturnType<typeof calculateInverseNozzleFlow>, system: UnitSystem, config: ControllerConfig): string {
  if (!result.possible) return config.ui.inverseNoSolution ?? '';
  return format(convertFromMetric(result.suggestedMm, 'length', system), config.locale, 'length');
}

function setText(root: HTMLElement, key: string, value: string): void {
  const target = root.querySelector<HTMLElement>(`[data-result="${key}"]`);
  if (target) target.textContent = value;
}

function format(value: number, locale: string, _kind: 'flow' | 'speed' | 'length'): string {
  const browserLocale = locale === 'en' ? 'en-US' : locale;
  return value.toLocaleString(browserLocale, { maximumFractionDigits: 2 });
}

function stateColor(state: ReturnType<typeof calculateNozzleFlow>['state']): string {
  if (state === 'critical') return 'var(--n-coral)';
  if (state === 'watch') return 'var(--n-gold)';
  return 'var(--n-teal)';
}

function buildScene(result: ReturnType<typeof calculateNozzleFlow>, system: UnitSystem, config: ControllerConfig): string {
  const unit = system === 'metric' ? config.ui.flowUnit : 'in³/s';
  const requested = convertFromMetric(result.requestedFlowMm3PerSecond, 'flow', system);
  const state = config.ui[`${result.state}State`];
  const load = Math.min(210, Math.max(40, result.loadPercent * 1.8));
  const color = stateColor(result.state);
  return `<svg class="nozzle-flow-scene" viewBox="0 0 560 300" role="img" aria-label="${state} ${format(requested, config.locale, 'flow')} ${unit}"><path class="scene-grid" d="M28 245H532M28 205H532M28 165H532" /><path class="nozzle-shell" d="M75 42H165L146 105H94Z" /><path class="nozzle-tip" d="M106 105H134L128 139H112Z" /><path class="melt-line" d="M120 139V222" /><path class="ribbon-safe" d="M120 222C170 222 214 212 270 212H496" /><path class="ribbon-flow" style="stroke:${color};stroke-width:${Math.max(12, load / 8)}" d="M120 222C174 222 220 216 270 ${216 + Math.min(22, result.loadPercent / 4)}H${270 + load}" /><line class="limit-mark" x1="270" y1="153" x2="270" y2="256" /><circle class="flow-node" cx="${270 + load}" cy="${216 + Math.min(22, result.loadPercent / 4)}" r="8" style="fill:${color}" /><text class="scene-label" x="28" y="25">${state}</text><text class="scene-value" x="28" y="278">${format(requested, config.locale, 'flow')} ${unit}</text><text class="scene-caption" x="258" y="145">${config.ui.flowLimitLabel}</text><text class="scene-caption" x="${258 + load}" y="278">${config.ui.requestedFlowLabel}</text></svg>`;
}

function applyPreset(root: HTMLElement, preset: string, system: UnitSystem): void {
  const presets = {
    quality: { nozzle: 0.4, width: 0.44, layer: 0.16, speed: 70, limit: 12 },
    balanced: DEFAULT_VALUES,
    draft: { nozzle: 0.6, width: 0.72, layer: 0.32, speed: 100, limit: 20 },
  };
  const values = presets[preset as keyof typeof presets] ?? DEFAULT_VALUES;
  setInputValue({ root, key: 'nozzle', value: values.nozzle, kind: 'length', system });
  setInputValue({ root, key: 'width', value: values.width, kind: 'length', system });
  setInputValue({ root, key: 'layer', value: values.layer, kind: 'length', system });
  setInputValue({ root, key: 'speed', value: values.speed, kind: 'speed', system });
  setInputValue({ root, key: 'limit', value: values.limit, kind: 'flow', system });
}

function restoreStoredValues(root: HTMLElement, stored: ReturnType<typeof loadNozzleFlowState>, system: UnitSystem): void {
  if (!stored?.values) return;
  setInputValue({ root, key: 'nozzle', value: stored.values.nozzleDiameterMm ?? DEFAULT_VALUES.nozzle, kind: 'length', system });
  setInputValue({ root, key: 'width', value: stored.values.lineWidthMm ?? DEFAULT_VALUES.width, kind: 'length', system });
  setInputValue({ root, key: 'layer', value: stored.values.layerHeightMm ?? DEFAULT_VALUES.layer, kind: 'length', system });
  setInputValue({ root, key: 'speed', value: stored.values.speedMmPerSecond ?? DEFAULT_VALUES.speed, kind: 'speed', system });
  setInputValue({ root, key: 'limit', value: stored.values.flowLimitMm3PerSecond ?? DEFAULT_VALUES.limit, kind: 'flow', system });
}

function bindInputs(config: ControllerConfig, getSystem: () => UnitSystem): void {
  config.root.querySelectorAll<HTMLInputElement>('[data-input]').forEach((input) => {
    input.addEventListener('input', () => {
      if (input.dataset.input === 'limit') {
      const preset = config.root.querySelector<HTMLSelectElement>('[data-flow-preset]');
      if (preset) preset.value = 'custom';
      }
      updateResult(config.root, config, getSystem());
      updateInverse(config.root, config, getSystem());
    });
    input.addEventListener('blur', () => {
      const raw = input.value.trim();
      const value = Number(raw.replace(',', '.'));
      if (!raw || !Number.isFinite(value)) return;
      const kind = getInputKind(input.dataset.input ?? '');
      setInputValue({ root: config.root, key: input.dataset.input ?? '', value: convertToMetric(value, kind, getSystem()), kind, system: getSystem() });
    });
  });
}

function bindUnits(config: ControllerConfig, system: UnitSystem): () => UnitSystem {
  let current = system;
  config.root.querySelectorAll<HTMLButtonElement>('[data-unit-button]').forEach((button) => button.addEventListener('click', () => {
    const next = button.dataset.unitButton as UnitSystem;
    const metric = valuesInMetric(config.root, current);
    const inverseFlowMetric = convertToMetric(readNumber(config.root, 'inverse-flow'), 'flow', current);
    const inverseSpeedMetric = convertToMetric(readNumber(config.root, 'inverse-speed'), 'speed', current);
    current = next;
    setInputValue({ root: config.root, key: 'nozzle', value: metric.nozzleDiameterMm, kind: 'length', system: current });
    setInputValue({ root: config.root, key: 'width', value: metric.lineWidthMm, kind: 'length', system: current });
    setInputValue({ root: config.root, key: 'layer', value: metric.layerHeightMm, kind: 'length', system: current });
    setInputValue({ root: config.root, key: 'speed', value: metric.speedMmPerSecond, kind: 'speed', system: current });
    setInputValue({ root: config.root, key: 'limit', value: metric.flowLimitMm3PerSecond, kind: 'flow', system: current });
    setInputValue({ root: config.root, key: 'inverse-flow', value: inverseFlowMetric, kind: 'flow', system: current });
    setInputValue({ root: config.root, key: 'inverse-speed', value: inverseSpeedMetric, kind: 'speed', system: current });
    updateUnits(config.root, current);
    updateResult(config.root, config, current);
    updateInverse(config.root, config, current);
  }));
  return () => current;
}

function bindPresets(config: ControllerConfig, getSystem: () => UnitSystem): void {
  config.root.querySelectorAll<HTMLButtonElement>('[data-preset]').forEach((button) => button.addEventListener('click', () => {
    const system = getSystem();
    applyPreset(config.root, button.dataset.preset ?? 'balanced', system);
    updateResult(config.root, config, system);
    updateInverse(config.root, config, system);
  }));
}

function bindFlowPresets(config: ControllerConfig, getSystem: () => UnitSystem): void {
  const select = config.root.querySelector<HTMLSelectElement>('[data-flow-preset]');
  select?.addEventListener('change', () => {
    const limit = FLOW_PRESETS[select.value];
    if (limit === undefined) return;
    setInputValue({ root: config.root, key: 'limit', value: limit, kind: 'flow', system: getSystem() });
    updateResult(config.root, config, getSystem());
    updateInverse(config.root, config, getSystem());
  });
}

function bindInverse(config: ControllerConfig, getSystem: () => UnitSystem): void {
  config.root.querySelector<HTMLSelectElement>('[data-inverse-solve]')?.addEventListener('change', () => updateInverse(config.root, config, getSystem()));
}

function bind(config: ControllerConfig): void {
  const stored = loadNozzleFlowState();
  const system: UnitSystem = stored?.unitSystem ?? 'metric';
  restoreStoredValues(config.root, stored, system);
  updateUnits(config.root, system);
  updateResult(config.root, config, system);
  updateInverse(config.root, config, system);
  const getSystem = bindUnits(config, system);
  bindInputs(config, getSystem);
  bindPresets(config, getSystem);
  bindFlowPresets(config, getSystem);
  bindInverse(config, getSystem);
}

function boot(): void {
  const root = document.querySelector<HTMLElement>('[data-nozzle-flow-tool]');
  if (!root) return;
  const configNode = root.querySelector<HTMLScriptElement>('[data-nozzle-flow-config]');
  if (!configNode) return;
  const config = JSON.parse(configNode.textContent ?? '{}') as Omit<ControllerConfig, 'root'>;
  bind({ ...config, root });
}

boot();
