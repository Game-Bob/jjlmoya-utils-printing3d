import type { UnitSystem } from './logic';

const STORAGE_KEY = 'jjlmoya:nozzle-flow-rate-calculator';

export interface NozzleFlowStoredState {
  unitSystem: UnitSystem;
  values: Record<string, number>;
}

export function loadNozzleFlowState(): NozzleFlowStoredState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) as NozzleFlowStoredState : null;
  } catch {
    return null;
  }
}

export function saveNozzleFlowState(state: NozzleFlowStoredState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    return;
  }
}
