import { analyzeBedMesh, type BedMeshAnalyzerResult, type CornerSummary } from './logic';
import { renderBedMeshCanvas, type CanvasPoint, type CornerKey, type MeshCellPolygon } from './canvas';
import { canvasPointFromPointer } from './pointer';
type UnitSystem = 'metric' | 'imperial';
class BedMeshTool {
    private readonly sampleMesh = '0.120 0.080 0.030 -0.020 -0.050\n0.090 0.040 0.000 -0.030 -0.070\n0.050 0.010 -0.025 -0.055 -0.090\n0.010 -0.020 -0.060 -0.095 -0.130\n-0.020 -0.050 -0.090 -0.140 -0.180';
    private units: UnitSystem = 'metric';
    private rotationX = 0.92;
    private rotationZ = -0.72;
    private dragging = false;
    private lastX = 0;
    private lastY = 0;
    private hoveredCell: MeshCellPolygon | null = null;
    private cellPolygons: MeshCellPolygon[] = [];
    constructor() {
      this.raw().value = this.sampleMesh;
      this.bind();
      this.update();
    }
    private raw() { return document.getElementById('bma-raw') as HTMLTextAreaElement; }
    private input(id: string) { return document.getElementById(id) as HTMLInputElement; }
    private select(id: string) { return document.getElementById(id) as HTMLSelectElement; }
    private canvas() { return document.getElementById('bma-canvas') as HTMLCanvasElement; }
    private labels() { return (document.getElementById('bma-labels') as HTMLElement).dataset; }
    private data() { return (document.getElementById('bma-data') as HTMLElement).dataset; }
    private bind() {
      this.raw().addEventListener('input', () => this.update());
      this.select('bma-points').addEventListener('input', () => this.update());
      this.select('bma-screw').addEventListener('input', () => this.applyScrew());
      this.input('bma-pitch').addEventListener('input', () => this.update());
      this.input('bma-sample').addEventListener('click', () => {
        this.raw().value = this.sampleMesh;
        this.update();
      });
      document.querySelectorAll<HTMLElement>('[data-bma-units]').forEach((button) => {
        button.addEventListener('click', () => this.setUnits(button.dataset.bmaUnits === 'imperial' ? 'imperial' : 'metric'));
      });
      this.bindCanvas();
    }
    private bindCanvas() {
      const canvas = this.canvas();
      canvas.addEventListener('pointerdown', (event) => {
        this.dragging = true;
        this.lastX = event.clientX;
        this.lastY = event.clientY;
        canvas.setPointerCapture(event.pointerId);
      });
      canvas.addEventListener('pointermove', (event) => {
        if (!this.dragging) {
          this.updateHover(event);
          return;
        }
        this.rotationZ += (event.clientX - this.lastX) * 0.01;
        this.rotationX += (event.clientY - this.lastY) * 0.006;
        this.lastX = event.clientX;
        this.lastY = event.clientY;
        this.update();
      });
      canvas.addEventListener('pointerleave', () => this.clearHover());
      canvas.addEventListener('pointerup', (event) => {
        this.dragging = false;
        this.updateHover(event);
      });
    }
    private setUnits(units: UnitSystem) {
      if (units === this.units) return;
      const pitchMm = this.pitchMm();
      this.units = units;
      this.input('bma-pitch').value = this.units === 'metric' ? pitchMm.toFixed(2) : (pitchMm / 25.4).toFixed(4);
      this.syncUnits();
      this.update();
    }
    private syncUnits() {
      const unit = this.units === 'metric' ? this.data().mm || 'mm' : this.data().inch || 'in';
      this.text('bma-pitch-unit', unit);
      this.text('bma-range-unit', unit);
      this.text('bma-mean-unit', unit);
      document.querySelectorAll('[data-bma-units]').forEach((button) => button.classList.toggle('active', (button as HTMLElement).dataset.bmaUnits === this.units));
    }
    private pitchMm() {
      const raw = parseFloat(this.input('bma-pitch').value) || 0;
      return this.units === 'metric' ? raw : raw * 25.4;
    }
    private formatLength(mm: number) {
      return this.units === 'metric' ? mm.toFixed(3) : (mm / 25.4).toFixed(4);
    }
    private applyScrew() {
      const value = this.select('bma-screw').value;
      if (value !== 'custom') this.input('bma-pitch').value = this.units === 'metric' ? Number(value).toFixed(2) : (Number(value) / 25.4).toFixed(4);
      this.update();
    }
    private currentResult() {
      return analyzeBedMesh({
        rawText: this.raw().value,
        levelingPoints: Number(this.select('bma-points').value) === 3 ? 3 : 4,
        screwPitchMm: this.pitchMm(),
      });
    }
    private update() {
      this.syncUnits();
      const result = this.currentResult();
      this.renderSummary(result);
      this.renderActions(result);
      this.renderCanvas(result);
    }
    private renderSummary(result: BedMeshAnalyzerResult) {
      const error = document.getElementById('bma-error');
      error?.toggleAttribute('hidden', result.ok);
      if (!result.ok) {
        const key = result.errors[0] || 'parseError';
        if (error) error.textContent = this.labels()[key] || this.labels().parseError || '';
      }
      this.text('bma-size', `${result.rows} x ${result.cols}`);
      this.text('bma-health', String(result.flatnessHealth));
      this.text('bma-range', this.formatLength(result.range));
      this.text('bma-mean', this.formatLength(result.mean));
      const diagnosisKey = `diagnosis${result.diagnosisKey.charAt(0).toUpperCase()}${result.diagnosisKey.slice(1)}`;
      this.text('bma-diagnosis', this.diagnosisText(result, diagnosisKey));
      document.querySelector('.bma-root')?.setAttribute('data-health', this.healthState(result));
    }
    private diagnosisText(result: BedMeshAnalyzerResult, diagnosisKey: string) {
      if (result.range > 0.5) return this.labels().warningWarped || '';
      return this.labels()[diagnosisKey] || '';
    }
    private renderActions(result: BedMeshAnalyzerResult) {
      const body = document.getElementById('bma-actions');
      if (!body) return;
      body.innerHTML = '';
      result.corners.forEach((corner) => {
        body.insertAdjacentHTML('beforeend', this.actionRow(corner));
      });
      this.highlightInstruction(this.hoveredCell?.cornerKey || null);
    }
    private healthState(result: BedMeshAnalyzerResult) {
      if (result.range > 0.5) return 'bad';
      return result.flatnessHealth > 78 ? 'good' : 'warn';
    }
    private directionLabel(corner: CornerSummary) {
      if (corner.direction === 'none') return this.labels().none || '';
      return corner.direction === 'clockwise' ? this.labels().clockwise || '' : this.labels().counterClockwise || '';
    }
    private actionText(corner: CornerSummary) {
      const direction = this.directionLabel(corner);
      if (corner.direction === 'none') return direction;
      const lift = corner.deltaMm > 0 ? this.labels().raise : this.labels().lower;
      const unit = this.units === 'metric' ? this.data().mm : this.data().inch;
      return `${lift} ${this.formatLength(Math.abs(corner.deltaMm))} ${unit} -> ${direction}, ${corner.turnFraction} (${Math.abs(corner.rotationDeg).toFixed(0)}${this.data().degree})`;
    }
    private actionRow(corner: CornerSummary) {
      const sign = corner.deltaMm >= 0 ? '+' : '';
      const label = this.labels()[corner.labelKey] || corner.labelKey;
      return `<tr data-bma-corner="${corner.key}"><td>${label}</td><td>${sign}${this.formatLength(corner.deltaMm)}</td><td>${this.actionText(corner)}</td></tr>`;
    }
    private renderCanvas(result: BedMeshAnalyzerResult) {
      this.cellPolygons = renderBedMeshCanvas({
        result,
        canvas: this.canvas(),
        rotationX: this.rotationX,
        rotationZ: this.rotationZ,
        hoveredCell: this.hoveredCell,
        levelingPoints: Number(this.select('bma-points').value) === 3 ? 3 : 4,
      });
    }
    private updateHover(event: PointerEvent) {
      const point = this.canvasPoint(event);
      const nextCell = [...this.cellPolygons].reverse().find((cell) => this.pointInPolygon(point, cell.points)) || null;
      if (this.isSameHoveredCell(nextCell)) return;
      this.hoveredCell = nextCell;
      this.highlightInstruction(nextCell?.cornerKey || null);
      this.renderCanvas(this.currentResult());
    }
    private canvasPoint(event: PointerEvent) {
      return canvasPointFromPointer(this.canvas(), event);
    }
    private isSameHoveredCell(nextCell: MeshCellPolygon | null) {
      if (!nextCell || !this.hoveredCell) return nextCell === this.hoveredCell;
      return nextCell.row === this.hoveredCell.row && nextCell.col === this.hoveredCell.col;
    }
    private clearHover() {
      if (!this.hoveredCell) return;
      this.hoveredCell = null;
      this.highlightInstruction(null);
      this.renderCanvas(this.currentResult());
    }
    private pointInPolygon(point: CanvasPoint, polygon: CanvasPoint[]) {
      let inside = false;
      for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i, i += 1) {
        const intersects = ((polygon[i].y > point.y) !== (polygon[j].y > point.y))
          && point.x < ((polygon[j].x - polygon[i].x) * (point.y - polygon[i].y)) / (polygon[j].y - polygon[i].y) + polygon[i].x;
        if (intersects) inside = !inside;
      }
      return inside;
    }
    private highlightInstruction(cornerKey: CornerKey | null) {
      document.querySelectorAll<HTMLTableRowElement>('#bma-actions tr').forEach((row) => {
        row.classList.toggle('is-linked', Boolean(cornerKey && row.dataset.bmaCorner === cornerKey));
      });
    }
    private text(id: string, value: string) {
      const element = document.getElementById(id);
      if (element) element.textContent = value;
    }
  }
export const initBedMeshAnalyzer = () => new BedMeshTool();
