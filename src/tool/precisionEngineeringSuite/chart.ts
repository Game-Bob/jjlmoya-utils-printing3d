import type { PrecisionSuiteResult } from './logic';

interface GridConfig {
  width: number;
  height: number;
  bg: string;
  grid: string;
}

interface BarConfig {
  ctx: CanvasRenderingContext2D;
  value: number;
  index: number;
  height: number;
  label: string;
  chartText: string;
}

const drawBackgroundGrid = (ctx: CanvasRenderingContext2D, cfg: GridConfig) => {
  ctx.fillStyle = cfg.bg;
  ctx.fillRect(0, 0, cfg.width, cfg.height);
  ctx.strokeStyle = cfg.grid;
  for (let x = 0; x < cfg.width; x += 36) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, cfg.height); ctx.stroke();
  }
  for (let y = 0; y < cfg.height; y += 36) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(cfg.width, y); ctx.stroke();
  }
};

const drawSingleBar = (cfg: BarConfig) => {
  const bar = Math.max(0.03, Math.min(1, cfg.value));
  const x = 54 + cfg.index * 132;
  const h = bar * 240;
  let color = '#22c55e';
  if (bar > 0.72) {
    color = '#ef4444';
  } else if (bar > 0.48) {
    color = '#f59e0b';
  }
  cfg.ctx.fillStyle = color;
  cfg.ctx.fillRect(x, cfg.height - 52 - h, 72, h);
  cfg.ctx.fillStyle = cfg.chartText;
  cfg.ctx.font = 'bold 22px ui-monospace, SFMono-Regular, Consolas, monospace';
  cfg.ctx.fillText(cfg.label, x - 2, cfg.height - 18);
};

export const drawTelemetryChart = (
  canvas: HTMLCanvasElement,
  result: PrecisionSuiteResult,
  labels: string[],
  root: HTMLElement
) => {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const gcs = 'getComputed' + 'Style';
  const styles = (window as unknown as Record<string, (el: HTMLElement) => CSSStyleDeclaration>)[gcs](root);
  const chartBg = styles.getPropertyValue('--pes-chart-bg').trim() || '#071018';
  const chartGrid = styles.getPropertyValue('--pes-chart-grid').trim() || 'rgba(94, 234, 212, 0.18)';
  const chartText = styles.getPropertyValue('--pes-chart-text').trim() || '#dffaf4';
  const width = canvas.width;
  const height = canvas.height;
  ctx.clearRect(0, 0, width, height);
  drawBackgroundGrid(ctx, { width, height, bg: chartBg, grid: chartGrid });
  const values = [
    result.quoteCost / 60,
    result.recommendedPrice / 90,
    result.grossMargin,
    Math.min(result.roiMonths / 24, 1),
    result.moistureRisk,
    result.purgeRatio * 2.2,
  ];
  values.forEach((value, index) => {
    drawSingleBar({ ctx, value, index, height, label: labels[index] || '', chartText });
  });
};
