import { FILAMENT_MATERIALS } from './logic';
import type { UnitSystem } from './logic';

export interface StoredFilamentWeightLengthState {
  unitSystem: UnitSystem;
  material: string;
  density: string;
  weight: string;
  diameter: string;
  stock: string;
}

const STORAGE_KEY = 'jjlmoya-printing3d-filament-weight-length-state-v1';

export const isValidState = (state: Partial<StoredFilamentWeightLengthState>): boolean => {
  const validUnit = state.unitSystem === 'metric' || state.unitSystem === 'imperial';
  const validMaterial = typeof state.material === 'string' && FILAMENT_MATERIALS.some((item) => item.id === state.material);
  const numericValues = [state.density, state.weight, state.diameter].map((value) => parseFloat(String(value ?? '')));
  const stockIsValid = state.stock === '' || Number.isFinite(parseFloat(String(state.stock ?? '')));
  return validUnit && validMaterial && numericValues.every(Number.isFinite) && stockIsValid;
};

export const restoreState = (): StoredFilamentWeightLengthState | null => {
  try {
    const raw = window.localStorage?.getItem(STORAGE_KEY);
    if (!raw) {
      return null;
    }
    const state = JSON.parse(raw) as Partial<StoredFilamentWeightLengthState>;
    if (isValidState(state)) {
      return state as StoredFilamentWeightLengthState;
    }
  } catch {
    window.localStorage?.removeItem(STORAGE_KEY);
  }
  return null;
};

export const saveState = (state: StoredFilamentWeightLengthState) => {
  try {
    window.localStorage?.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
  }
};
