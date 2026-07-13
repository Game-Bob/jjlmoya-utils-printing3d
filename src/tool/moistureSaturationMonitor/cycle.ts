import type { UnitSystem } from './logic';

const STORAGE_KEY = 'moisture-saturation-monitor-cycle';

export interface CycleSession {
  materialId: string;
  relativeHumidity: number;
  exposureDays: number;
  dryTempC: number;
  spoolMassGrams: number;
  unitSystem: UnitSystem;
  durationMs: number;
  startedAt: number;
  pausedAt: number | null;
  accumulatedPauseMs: number;
  completed: boolean;
}

export interface CycleLabels {
  hours: string;
  minutes: string;
  seconds: string;
}

export const getCycleElapsed = (session: CycleSession, now = Date.now()) => {
  const endPoint = session.pausedAt ?? now;
  return Math.max(0, endPoint - session.startedAt - session.accumulatedPauseMs);
};

export const getCycleProgress = (session: CycleSession | null) => {
  if (!session) return 0;
  if (session.completed) return 1;
  return Math.min(1, getCycleElapsed(session) / Math.max(1, session.durationMs));
};

export const formatRemaining = (ms: number, labels: CycleLabels) => {
  const totalSeconds = Math.max(0, Math.ceil(ms / 1000));
  const hoursValue = Math.floor(totalSeconds / 3600);
  const minutesValue = Math.floor((totalSeconds % 3600) / 60);
  const secondsValue = totalSeconds % 60;
  if (hoursValue > 0) return `${hoursValue}${labels.hours} ${String(minutesValue).padStart(2, '0')}${labels.minutes}`;
  return `${minutesValue}${labels.minutes} ${String(secondsValue).padStart(2, '0')}${labels.seconds}`;
};

export const saveCycle = (session: CycleSession | null) => {
  if (!session) {
    localStorage.removeItem(STORAGE_KEY);
    return;
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
};

const isValidCycle = (session: CycleSession) => {
  if (!Number.isFinite(session.durationMs) || !Number.isFinite(session.startedAt)) return false;
  if (!session.materialId || !Number.isFinite(session.relativeHumidity)) return false;
  if (!Number.isFinite(session.exposureDays) || !Number.isFinite(session.dryTempC)) return false;
  return Number.isFinite(session.spoolMassGrams);
};

export const loadCycle = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CycleSession;
    return isValidCycle(parsed) ? parsed : null;
  } catch {
    return null;
  }
};

export const getCycleViewState = (session: CycleSession | null) => {
  if (!session) return 'idle';
  if (session.completed) return 'complete';
  if (session.pausedAt !== null) return 'paused';
  return 'running';
};
