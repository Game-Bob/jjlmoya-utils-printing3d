import type { NozzleFlowResult, UnitSystem } from './logic';
import type { NozzleFlowRateCalculatorUI } from './ui';

export interface SceneLabels {
  unit: string;
  requested: string;
  limit: string;
  state: string;
}

function number(value: number, digits = 1): string {
  return value.toFixed(digits);
}

function ribbonWidth(result: NozzleFlowResult): number {
  return Math.min(210, Math.max(40, result.loadPercent * 1.8));
}

function stateColor(state: NozzleFlowResult['state']): string {
  if (state === 'critical') return 'var(--n-coral)';
  if (state === 'watch') return 'var(--n-gold)';
  return 'var(--n-teal)';
}

export function renderNozzleFlowScene(
  result: NozzleFlowResult,
  system: UnitSystem,
  ui: NozzleFlowRateCalculatorUI,
  labels: SceneLabels,
): string {
  const width = ribbonWidth(result);
  const limitX = 270;
  const accent = stateColor(result.state);
  const unit = system === 'metric' ? ui.flowUnit : 'in³/s';
  return `<svg class="nozzle-flow-scene" viewBox="0 0 560 300" role="img" aria-label="${labels.requested} ${number(result.requestedFlowMm3PerSecond)} ${unit}, ${labels.limit} ${number(result.requestedFlowMm3PerSecond + result.marginMm3PerSecond)} ${unit}">
    <path class="scene-grid" d="M28 245H532M28 205H532M28 165H532" />
    <path class="nozzle-shell" d="M75 42H165L146 105H94Z" />
    <path class="nozzle-tip" d="M106 105H134L128 139H112Z" />
    <path class="melt-line" d="M120 139V222" />
    <path class="ribbon-safe" d="M120 222C170 222 214 212 270 212H496" />
    <path class="ribbon-flow" style="stroke:${accent};stroke-width:${Math.max(12, width / 8)}" d="M120 222C174 222 220 216 ${limitX} ${216 + Math.min(22, result.loadPercent / 4)}H${limitX + width}" />
    <line class="limit-mark" x1="${limitX}" y1="153" x2="${limitX}" y2="256" />
    <circle class="flow-node" cx="${limitX + width}" cy="${216 + Math.min(22, result.loadPercent / 4)}" r="8" style="fill:${accent}" />
    <text class="scene-label" x="28" y="25">${labels.state}</text>
    <text class="scene-value" x="28" y="278">${number(result.requestedFlowMm3PerSecond)} ${unit}</text>
    <text class="scene-caption" x="${limitX - 10}" y="145">${labels.limit}</text>
    <text class="scene-caption" x="${limitX + width - 12}" y="278">${labels.requested}</text>
  </svg>`;
}
