import type { BedMeshAnalyzerResult } from './logic';

export type CornerKey = 'frontLeft' | 'frontRight' | 'rearLeft' | 'rearRight' | 'rearCenter';
export type CanvasPoint = { x: number; y: number };
export type MeshCellPolygon = { row: number; col: number; cornerKey: CornerKey; points: CanvasPoint[] };

interface RenderOptions {
  canvas: HTMLCanvasElement;
  result: BedMeshAnalyzerResult;
  rotationX: number;
  rotationZ: number;
  levelingPoints: 3 | 4;
  hoveredCell: MeshCellPolygon | null;
}

interface ProjectionDims {
  w: number;
  h: number;
  zScale: number;
  cx: number;
  cy: number;
}

interface CellCoords {
  row: number;
  col: number;
}

interface MeshPoint3D {
  x: number;
  y: number;
  z: number;
}

export const renderBedMeshCanvas = (options: RenderOptions) => {
  const ctx = options.canvas.getContext('2d');
  if (!ctx) return [];
  clearCanvas(options.canvas, ctx);
  if (!options.result.ok) return [];
  const polygons = drawCells(ctx, options);
  renderHoverCell(ctx, options.hoveredCell);
  return polygons;
};

const clearCanvas = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = getComputedStyle(document.querySelector('.bma-root') as HTMLElement).getPropertyValue('--bma-canvas');
  ctx.fillRect(0, 0, canvas.width, canvas.height);
};

const drawCells = (ctx: CanvasRenderingContext2D, options: RenderOptions) => {
  const polygons: MeshCellPolygon[] = [];
  const dims = { w: 500, h: 300, zScale: 420, cx: options.canvas.width / 2, cy: options.canvas.height / 2 + 32 };
  for (let row = 0; row < options.result.rows - 1; row += 1) {
    for (let col = 0; col < options.result.cols - 1; col += 1) {
      const points = cellPoints(options.result, { row, col }, dims, options);
      const cornerKey = cornerForCell(options.result, row, col, options.levelingPoints);
      polygons.push({ row, col, cornerKey, points });
      drawCell(ctx, points, cellColor(options.result, row, col));
    }
  }
  return polygons;
};

const cellPoints = (result: BedMeshAnalyzerResult, coords: CellCoords, dims: ProjectionDims, options: RenderOptions) => {
  const { row, col } = coords;
  const x0 = (col / (result.cols - 1) - 0.5) * dims.w;
  const x1 = ((col + 1) / (result.cols - 1) - 0.5) * dims.w;
  const y0 = (row / (result.rows - 1) - 0.5) * dims.h;
  const y1 = ((row + 1) / (result.rows - 1) - 0.5) * dims.h;
  const z00 = (result.values[row][col] - result.mean) * dims.zScale;
  const z10 = (result.values[row][col + 1] - result.mean) * dims.zScale;
  const z11 = (result.values[row + 1][col + 1] - result.mean) * dims.zScale;
  const z01 = (result.values[row + 1][col] - result.mean) * dims.zScale;
  return [
    project({ x: x0, y: y0, z: z00 }, dims, options),
    project({ x: x1, y: y0, z: z10 }, dims, options),
    project({ x: x1, y: y1, z: z11 }, dims, options),
    project({ x: x0, y: y1, z: z01 }, dims, options),
  ];
};

const project = ({ x, y, z }: MeshPoint3D, dims: ProjectionDims, options: RenderOptions) => {
  const xr = x * Math.cos(options.rotationZ) - y * Math.sin(options.rotationZ);
  const yr = x * Math.sin(options.rotationZ) + y * Math.cos(options.rotationZ);
  const yy = yr * Math.cos(options.rotationX) - z * Math.sin(options.rotationX);
  return { x: dims.cx + xr, y: dims.cy + yy };
};

const cellColor = (result: BedMeshAnalyzerResult, row: number, col: number) => {
  const z = (result.values[row][col] + result.values[row][col + 1] + result.values[row + 1][col + 1] + result.values[row + 1][col]) / 4;
  const t = result.range ? (z - result.min) / result.range : 0.5;
  if (t < 0.5) return `rgb(${Math.round(50 + t * 160)}, ${Math.round(110 + t * 210)}, ${Math.round(235 - t * 160)})`;
  return `rgb(${Math.round(80 + (t - 0.5) * 350)}, ${Math.round(220 - (t - 0.5) * 230)}, ${Math.round(110 - (t - 0.5) * 110)})`;
};

const cornerForCell = (result: BedMeshAnalyzerResult, row: number, col: number, levelingPoints: 3 | 4): CornerKey => {
  const rowRatio = row / Math.max(1, result.rows - 2);
  const colRatio = col / Math.max(1, result.cols - 2);
  if (levelingPoints === 3) return triangleCorner(rowRatio, colRatio);
  if (rowRatio < 0.5 && colRatio < 0.5) return 'frontLeft';
  if (rowRatio < 0.5) return 'frontRight';
  if (colRatio < 0.5) return 'rearLeft';
  return 'rearRight';
};

const triangleCorner = (rowRatio: number, colRatio: number): CornerKey => {
  if (rowRatio > 0.58) return 'rearCenter';
  return colRatio < 0.5 ? 'frontLeft' : 'frontRight';
};

const drawCell = (ctx: CanvasRenderingContext2D, points: CanvasPoint[], fillStyle: string) => {
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  points.slice(1).forEach((point) => ctx.lineTo(point.x, point.y));
  ctx.closePath();
  ctx.fillStyle = fillStyle;
  ctx.fill();
  ctx.strokeStyle = 'rgba(255,255,255,0.22)';
  ctx.stroke();
};

const renderHoverCell = (ctx: CanvasRenderingContext2D, hoveredCell: MeshCellPolygon | null) => {
  if (!hoveredCell) return;
  const { points } = hoveredCell;
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  points.slice(1).forEach((point) => ctx.lineTo(point.x, point.y));
  ctx.closePath();
  ctx.fillStyle = 'rgba(255, 255, 255, 0.18)';
  ctx.fill();
  ctx.lineWidth = 4;
  ctx.strokeStyle = getComputedStyle(document.querySelector('.bma-root') as HTMLElement).getPropertyValue('--bma-blue').trim() || '#6aa7ff';
  ctx.shadowColor = ctx.strokeStyle;
  ctx.shadowBlur = 18;
  ctx.stroke();
  ctx.restore();
};
