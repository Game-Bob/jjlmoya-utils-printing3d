import { StepperCalculator } from './calculator';
import { updateUnitLabels, convertInputs, applyPresetValues, initDropdown, closeAllDropdowns, setDropdownValue, getParams, animateSVG, copyCommand } from './uiHelper';

interface SavedState {
  units?: 'metric' | 'imperial';
  stepAngle?: string;
  microsteps?: string;
  transmission?: string;
  beltPitch?: string;
  pulleyTeeth?: string;
  leadscrewLead?: string;
}

export class StepperCalculatorTool {
  private storageKey: string = 'jjlmoya-printing3d-stepper-calculator-state-v2';
  private units: 'metric' | 'imperial' = 'metric';
  private rotationAngle: number = 0;

  constructor() {
    this.restore();
    this.initDropdowns();
    this.bind();
    this.updateUI();
  }

  private input(id: string): HTMLInputElement | HTMLSelectElement | null {
    return document.getElementById(id) as HTMLInputElement | HTMLSelectElement | null;
  }

  private text(id: string, val: string): void {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  }

  private initDropdowns(): void {
    document.querySelectorAll('.sdmc-custom-dropdown').forEach((dropdown) => {
      initDropdown(dropdown as HTMLElement);
    });
    document.addEventListener('click', closeAllDropdowns);
  }

  private bind(): void {
    document.querySelectorAll('[data-sdmc-units]').forEach((btn) => {
      const button = btn as HTMLElement;
      button.addEventListener('click', () => {
        this.setUnits((button.dataset.sdmcUnits as 'metric' | 'imperial') || 'metric');
      });
    });

    document.querySelectorAll('[data-sdmc-preset]').forEach((btn) => {
      const button = btn as HTMLElement;
      button.addEventListener('click', () => {
        this.applyPreset(button.dataset.sdmcPreset || 'belt20');
      });
    });

    ['sdmc-step-angle', 'sdmc-microsteps', 'sdmc-transmission'].forEach((id) => {
      this.input(id)?.addEventListener('change', () => {
        this.updateUI();
        this.save();
      });
    });

    ['sdmc-belt-pitch', 'sdmc-pulley-teeth', 'sdmc-leadscrew-lead'].forEach((id) => {
      this.input(id)?.addEventListener('input', () => {
        this.calculate();
        this.save();
      });
    });

    document.getElementById('sdmc-btn-copy')?.addEventListener('click', copyCommand);
  }

  private setUnits(units: 'metric' | 'imperial'): void {
    if (this.units === units) return;
    this.units = units;

    document.querySelectorAll('[data-sdmc-units]').forEach((btn) => {
      const button = btn as HTMLElement;
      button.classList.toggle('active', button.dataset.sdmcUnits === units);
    });

    convertInputs(units, this.input.bind(this));
    updateUnitLabels(units, this.text.bind(this));

    this.calculate();
    this.save();
  }

  private applyPreset(preset: string): void {
    document.querySelectorAll('[data-sdmc-preset]').forEach((btn) => {
      btn.classList.toggle('active', (btn as HTMLElement).dataset.sdmcPreset === preset);
    });

    setDropdownValue('sdmc-dropdown-step-angle', '1.8');
    setDropdownValue('sdmc-dropdown-microsteps', '16');

    applyPresetValues(preset, this.units, this.input.bind(this), setDropdownValue);
    this.updateUI();
    this.save();
  }

  private updateUI(): void {
    const modeEl = this.input('sdmc-transmission');
    if (!modeEl) return;
    const mode = modeEl.value;
    const beltPanel = document.getElementById('sdmc-panel-belt');
    const leadscrewPanel = document.getElementById('sdmc-panel-leadscrew');
    const beltGroup = document.getElementById('sdmc-svg-belt-group');
    const leadscrewGroup = document.getElementById('sdmc-svg-leadscrew-group');

    if (beltPanel && leadscrewPanel && beltGroup && leadscrewGroup) {
      if (mode === 'belt') {
        beltPanel.style.display = 'grid';
        leadscrewPanel.style.display = 'none';
        beltGroup.style.display = 'block';
        leadscrewGroup.style.display = 'none';
      } else {
        beltPanel.style.display = 'none';
        leadscrewPanel.style.display = 'grid';
        beltGroup.style.display = 'none';
        leadscrewGroup.style.display = 'block';
      }
    }

    this.calculate();
  }

  private calculate(): void {
    const stepAngleEl = this.input('sdmc-step-angle');
    const microstepsEl = this.input('sdmc-microsteps');
    const transmissionEl = this.input('sdmc-transmission');

    if (!stepAngleEl || !microstepsEl || !transmissionEl) return;

    const stepAngle = parseFloat(stepAngleEl.value);
    const microsteps = parseInt(microstepsEl.value, 10);
    const transmission = transmissionEl.value;

    const params = getParams(this.input.bind(this), this.units);

    const res = StepperCalculator.calculate({
      stepAngle,
      microsteps,
      transmissionMode: transmission as 'belt' | 'leadscrew',
      beltPitch: params.beltPitch,
      pulleyTeeth: params.pulleyTeeth,
      leadScrewPitch: params.leadScrewPitch,
      unitSystem: this.units,
    });

    this.text('sdmc-res-steps', res.stepsPerUnit.toFixed(2));
    this.text('sdmc-res-resolution', res.mechanicalResolution.toFixed(3));
    const axis = transmission === 'leadscrew' ? 'Z' : 'X';
    this.text('sdmc-cmd-text', `M92 ${axis}${res.stepsPerUnit.toFixed(2)}`);
    this.rotationAngle = animateSVG(this.rotationAngle, this.input.bind(this));
  }

  private getVal(id: string, fallback: string): string {
    const el = this.input(id);
    return el ? el.value : fallback;
  }

  private setInputVal(id: string, val: string | undefined): void {
    if (!val) return;
    const el = this.input(id);
    if (el) el.value = val;
  }

  private save(): void {
    const state = {
      units: this.units,
      stepAngle: this.getVal('sdmc-step-angle', '1.8'),
      microsteps: this.getVal('sdmc-microsteps', '16'),
      transmission: this.getVal('sdmc-transmission', 'belt'),
      beltPitch: this.getVal('sdmc-belt-pitch', '2.0'),
      pulleyTeeth: this.getVal('sdmc-pulley-teeth', '20'),
      leadscrewLead: this.getVal('sdmc-leadscrew-lead', '8.0'),
    };
    localStorage.setItem(this.storageKey, JSON.stringify(state));
  }

  private restore(): void {
    const saved = localStorage.getItem(this.storageKey);
    if (!saved) return;
    try {
      const state = JSON.parse(saved);
      if (state.units) this.units = state.units;
      document.addEventListener('DOMContentLoaded', () => this.applyRestoredState(state));
    } catch {}
  }

  private applyRestoredState(state: SavedState): void {
    if (state.units) {
      document.querySelectorAll('[data-sdmc-units]').forEach((btn) => {
        const button = btn as HTMLElement;
        button.classList.toggle('active', button.dataset.sdmcUnits === this.units);
      });
    }
    this.restoreInputs(state);
    this.updateUI();
  }

  private restoreInputs(state: SavedState): void {
    if (state.stepAngle) setDropdownValue('sdmc-dropdown-step-angle', state.stepAngle);
    if (state.microsteps) setDropdownValue('sdmc-dropdown-microsteps', state.microsteps);
    if (state.transmission) setDropdownValue('sdmc-dropdown-transmission', state.transmission);

    this.setInputVal('sdmc-belt-pitch', state.beltPitch);
    this.setInputVal('sdmc-pulley-teeth', state.pulleyTeeth);
    this.setInputVal('sdmc-leadscrew-lead', state.leadscrewLead);

    if (this.units === 'imperial') updateUnitLabels(this.units, this.text.bind(this));
  }
}
