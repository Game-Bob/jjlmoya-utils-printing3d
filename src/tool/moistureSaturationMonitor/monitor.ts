/* eslint-disable complexity, max-lines */
import {
  calculateMoistureSaturation,
  fromCelsius,
  fromGrams,
  getMaterial,
  toCelsius,
  toGrams,
  type UnitSystem,
} from './logic';
import {
  formatRemaining,
  getCycleElapsed,
  getCycleProgress,
  getCycleViewState,
  loadCycle,
  saveCycle,
  type CycleSession,
} from './cycle';
import { updateCursorHud } from './pointer';

const root = document.querySelector<HTMLElement>('.msm-root');

if (root) {
  const $ = <T extends HTMLElement>(selector: string) => root.querySelector<T>(selector);
  const materialSelect = $<HTMLElement>('#msm-material-select');
  const materialTrigger = $<HTMLButtonElement>('#msm-material-trigger');
  const materialTriggerLabel = $<HTMLElement>('#msm-material-trigger span');
  const rh = $<HTMLInputElement>('#msm-rh');
  const rhSlider = $<HTMLInputElement>('#msm-rh-slider');
  const days = $<HTMLInputElement>('#msm-days');
  const daysSlider = $<HTMLInputElement>('#msm-days-slider');
  const temp = $<HTMLInputElement>('#msm-temp');
  const tempSlider = $<HTMLInputElement>('#msm-temp-slider');
  const mass = $<HTMLInputElement>('#msm-mass');
  const massSlider = $<HTMLInputElement>('#msm-mass-slider');
  const saturation = $<HTMLElement>('#msm-saturation');
  const absorbed = $<HTMLElement>('#msm-absorbed');
  const hours = $<HTMLElement>('#msm-hours');
  const risk = $<HTMLElement>('#msm-risk');
  const ring = $<SVGCircleElement>('#msm-ring-humidity');
  const visual = $<HTMLElement>('.msm-visual');
  const chamberFill = $<HTMLElement>('#msm-chamber-fill');
  const chamberLabel = $<HTMLElement>('#msm-chamber-label');
  const dryButton = $<HTMLButtonElement>('#msm-dry');
  const resetButton = $<HTMLButtonElement>('#msm-reset-cycle');
  const remaining = $<HTMLElement>('#msm-remaining');
  const progress = $<HTMLElement>('#msm-progress');
  const progressFill = $<HTMLElement>('#msm-progress-fill');
  const cursorHud = $<HTMLElement>('#msm-cursor-hud');
  const hudState = $<HTMLElement>('#msm-hud-state');
  const hudTime = $<HTMLElement>('#msm-hud-time');
  const hudFill = $<HTMLElement>('#msm-hud-fill');
  const tempUnit = $<HTMLElement>('[data-temp-unit]');
  const massUnit = $<HTMLElement>('[data-mass-unit]');
  const curve = $<SVGPathElement>('#msm-curve-line');
  let unitSystem: UnitSystem = 'metric';
  let activeResult = calculateMoistureSaturation({
    materialId: 'pla',
    relativeHumidity: 62,
    exposureDays: 21,
    dryTempC: 45,
    spoolMassGrams: 1000,
  });
  let cycleSession: CycleSession | null = null;
  let timerId = 0;
  const circumference = 2 * Math.PI * 92;

  const numberValue = (input: HTMLInputElement | null, fallback: number) => {
    const value = Number(input?.value);
    return Number.isFinite(value) ? value : fallback;
  };

  const syncPair = (input: HTMLInputElement | null, slider: HTMLInputElement | null) => {
    input?.addEventListener('input', () => {
      if (slider) slider.value = input.value;
      if (cycleSession) resetCycle();
      else render();
    });
    slider?.addEventListener('input', () => {
      if (input) input.value = slider.value;
      if (cycleSession) resetCycle();
      else render();
    });
  };

  const labels = {
    percent: root.dataset.percentUnit ?? '',
    grams: root.dataset.gramsUnit ?? '',
    pounds: root.dataset.poundsUnit ?? '',
    celsius: root.dataset.celsiusUnit ?? '',
    fahrenheit: root.dataset.fahrenheitUnit ?? '',
    hours: root.dataset.hoursUnit ?? '',
    minutes: root.dataset.minutesUnit ?? '',
    seconds: root.dataset.secondsUnit ?? '',
    noValue: root.dataset.noValueLabel ?? '',
    stable: root.dataset.stableLabel ?? '',
    watch: root.dataset.watchLabel ?? '',
    critical: root.dataset.criticalLabel ?? '',
    ready: root.dataset.readyLabel ?? '',
    running: root.dataset.runningLabel ?? '',
    complete: root.dataset.completeLabel ?? '',
    start: root.dataset.startLabel ?? '',
    pause: root.dataset.pauseLabel ?? '',
    resume: root.dataset.resumeLabel ?? '',
  };


  const renderCurve = (points: Array<{ day: number; percent: number }>, maxPercent: number) => {
    if (!curve) return;
    const limit = Math.max(maxPercent, ...points.map((point) => point.percent), 0.1);
    const path = points.map((point, index) => {
      const x = (index / Math.max(1, points.length - 1)) * 320;
      const y = 74 - (point.percent / limit) * 58;
      return `${index === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)}`;
    }).join(' ');
    curve.setAttribute('d', path);
    const length = curve.getTotalLength?.() ?? 0;
    if (length > 0) {
      const drain = getCycleProgress(cycleSession);
      curve.style.strokeDasharray = `${length}`;
      curve.style.strokeDashoffset = `${length * drain}`;
    }
  };

  const getMassUnit = () => {
    if (unitSystem === 'imperial') return labels.pounds;
    return labels.grams;
  };

  const getRiskLabel = (riskLevel: typeof activeResult.riskLevel) => {
    if (riskLevel === 'critical') return labels.critical;
    if (riskLevel === 'watch') return labels.watch;
    return labels.stable;
  };

  const getStateText = (isPaused: boolean) => {
    if (!cycleSession) return labels.ready;
    if (cycleSession.completed) return labels.complete;
    if (isPaused) return labels.ready;
    return labels.running;
  };

  const getCycleButtonText = (isPaused: boolean) => {
    if (!cycleSession || cycleSession.completed) return labels.start;
    if (isPaused) return labels.resume;
    return labels.pause;
  };

  const getInputResult = () => {
    const selected = getMaterial(materialSelect?.dataset.value ?? 'pla');
    const dryTempC = toCelsius(numberValue(temp, fromCelsius(selected.dryTempC, unitSystem)), unitSystem);
    const spoolMassGrams = toGrams(numberValue(mass, fromGrams(1000, unitSystem)), unitSystem);
    return calculateMoistureSaturation({
      materialId: selected.id,
      relativeHumidity: numberValue(rh, 62),
      exposureDays: numberValue(days, 21),
      dryTempC,
      spoolMassGrams,
    });
  };

  const render = () => {
    const result = getInputResult();
    activeResult = result;
    const cycleProgress = getCycleProgress(cycleSession);
    const remainingRatio = 1 - cycleProgress;
    const ringRatio = Math.min(1, result.saturationRatio * remainingRatio);
    ring?.style.setProperty('stroke-dasharray', `${circumference}`);
    ring?.style.setProperty('stroke-dashoffset', `${circumference * (1 - ringRatio)}`);
    visual?.setAttribute('data-risk', result.riskLevel);
    visual?.style.setProperty('--msm-pulse', `${0.8 + result.saturationRatio * 1.8}s`);
    if (saturation) saturation.textContent = (result.absorbedPercent * remainingRatio).toFixed(2);
    if (absorbed) {
      const massValue = fromGrams(result.absorbedGrams * remainingRatio, unitSystem);
      absorbed.textContent = `${massValue.toFixed(unitSystem === 'imperial' ? 3 : 1)} ${getMassUnit()}`;
    }
    if (hours) hours.textContent = `${result.dryHours.toFixed(1)} ${labels.hours}`;
    if (risk) risk.textContent = getRiskLabel(result.riskLevel);
    if (chamberFill) chamberFill.style.setProperty('--msm-fill', `${Math.round(ringRatio * 100)}%`);
    renderCurve(result.curvePoints, result.material.sMax);
    renderCycle();
  };

  const renderCycle = () => {
    const ratio = getCycleProgress(cycleSession);
    const remainingRatio = 1 - ratio;
    if (progress) progress.textContent = `${Math.round(ratio * 100)}%`;
    if (progressFill) progressFill.style.width = `${Math.round(remainingRatio * 100)}%`;
    if (hudFill) hudFill.style.width = `${Math.round(remainingRatio * 100)}%`;
    if (!cycleSession) {
      if (remaining) remaining.textContent = labels.noValue;
      if (hudTime) hudTime.textContent = labels.noValue;
      if (hudState) hudState.textContent = labels.ready;
      if (chamberLabel) chamberLabel.textContent = labels.ready;
      if (dryButton) dryButton.textContent = labels.start;
      cursorHud?.setAttribute('data-visible', 'false');
      visual?.setAttribute('data-cycle', 'idle');
      return;
    }
    const isPaused = cycleSession.pausedAt !== null && !cycleSession.completed;
    const leftMs = cycleSession.completed ? 0 : cycleSession.durationMs - getCycleElapsed(cycleSession);
    const remainingText = formatRemaining(leftMs, labels);
    const stateText = getStateText(isPaused);
    if (remaining) remaining.textContent = remainingText;
    if (hudTime) hudTime.textContent = remainingText;
    if (hudState) hudState.textContent = stateText;
    if (chamberLabel) chamberLabel.textContent = stateText;
    if (dryButton) dryButton.textContent = getCycleButtonText(isPaused);
    visual?.setAttribute('data-cycle', getCycleViewState(cycleSession));
  };

  const tickCycle = () => {
    if (cycleSession && !cycleSession.completed && cycleSession.pausedAt === null) {
      const elapsed = getCycleElapsed(cycleSession);
      if (elapsed >= cycleSession.durationMs) {
        cycleSession.completed = true;
        saveCycle(cycleSession);
        window.clearInterval(timerId);
        timerId = 0;
      }
      render();
    } else {
      renderCycle();
    }
  };

  const ensureTimer = () => {
    if (timerId || !cycleSession || cycleSession.pausedAt !== null || cycleSession.completed) return;
    timerId = window.setInterval(tickCycle, 1000);
  };

  const startCycle = () => {
    const selected = getMaterial(materialSelect?.dataset.value ?? 'pla');
    const dryTempC = toCelsius(numberValue(temp, fromCelsius(selected.dryTempC, unitSystem)), unitSystem);
    const spoolMassGrams = toGrams(numberValue(mass, fromGrams(1000, unitSystem)), unitSystem);
    cycleSession = {
      materialId: activeResult.material.id,
      relativeHumidity: numberValue(rh, 62),
      exposureDays: numberValue(days, 21),
      dryTempC,
      spoolMassGrams,
      unitSystem,
      durationMs: Math.round(activeResult.dryHours * 60 * 60 * 1000),
      startedAt: Date.now(),
      pausedAt: null,
      accumulatedPauseMs: 0,
      completed: false,
    };
    saveCycle(cycleSession);
    ensureTimer();
    render();
  };

  const toggleCycle = () => {
    if (!cycleSession || cycleSession.completed) {
      startCycle();
      return;
    }
    if (cycleSession.pausedAt === null) {
      cycleSession.pausedAt = Date.now();
      window.clearInterval(timerId);
      timerId = 0;
    } else {
      cycleSession.accumulatedPauseMs += Date.now() - cycleSession.pausedAt;
      cycleSession.pausedAt = null;
      ensureTimer();
    }
    saveCycle(cycleSession);
    render();
  };

  const resetCycle = () => {
    cycleSession = null;
    window.clearInterval(timerId);
    timerId = 0;
    saveCycle(cycleSession);
    render();
  };

  const setSelectedMaterial = (materialId: string) => {
    if (!materialSelect) return;
    materialSelect.dataset.value = materialId;
    root.querySelectorAll<HTMLButtonElement>('[data-material-option]').forEach((item) => {
      const selected = item.dataset.materialOption === materialId;
      item.setAttribute('aria-selected', String(selected));
      if (selected && materialTriggerLabel) materialTriggerLabel.textContent = item.textContent?.trim() ?? '';
    });
  };

  const restoreCycleControls = () => {
    if (!cycleSession) return;
    unitSystem = cycleSession.unitSystem ?? 'metric';
    root.querySelectorAll<HTMLButtonElement>('[data-unit-system]').forEach((item) => {
      item.setAttribute('aria-pressed', String(item.dataset.unitSystem === unitSystem));
    });
    setSelectedMaterial(cycleSession.materialId);
    setTemperatureBounds();
    if (rh) rh.value = String(cycleSession.relativeHumidity);
    if (rhSlider) rhSlider.value = String(cycleSession.relativeHumidity);
    if (days) days.value = String(cycleSession.exposureDays);
    if (daysSlider) daysSlider.value = String(cycleSession.exposureDays);
    if (temp) temp.value = String(Math.round(fromCelsius(cycleSession.dryTempC, unitSystem)));
    if (tempSlider) tempSlider.value = temp.value;
    if (mass) mass.value = unitSystem === 'imperial' ? fromGrams(cycleSession.spoolMassGrams, unitSystem).toFixed(2) : String(Math.round(cycleSession.spoolMassGrams));
    if (massSlider) massSlider.value = mass.value;
    if (tempUnit) tempUnit.textContent = unitSystem === 'imperial' ? labels.fahrenheit : labels.celsius;
    if (massUnit) massUnit.textContent = unitSystem === 'imperial' ? labels.pounds : labels.grams;
  };

  const setMaterialDefaults = () => {
    const selected = getMaterial(materialSelect?.dataset.value ?? 'pla');
    const visibleTemp = Math.round(fromCelsius(selected.dryTempC, unitSystem));
    if (temp) temp.value = String(visibleTemp);
    if (tempSlider) {
      tempSlider.min = String(Math.round(fromCelsius(selected.tempMinC, unitSystem)));
      tempSlider.max = String(Math.round(fromCelsius(selected.tempMaxC, unitSystem)));
      tempSlider.value = String(visibleTemp);
    }
    render();
  };

  const setTemperatureBounds = () => {
    const selected = getMaterial(materialSelect?.dataset.value ?? 'pla');
    if (!tempSlider) return;
    tempSlider.min = String(Math.round(fromCelsius(selected.tempMinC, unitSystem)));
    tempSlider.max = String(Math.round(fromCelsius(selected.tempMaxC, unitSystem)));
  };

  root.querySelectorAll<HTMLButtonElement>('[data-unit-system]').forEach((button) => {
    button.addEventListener('click', () => {
      const next = button.dataset.unitSystem === 'imperial' ? 'imperial' : 'metric';
      if (next === unitSystem) return;
      const currentTempC = toCelsius(numberValue(temp, 45), unitSystem);
      const currentMassG = toGrams(numberValue(mass, 1000), unitSystem);
      unitSystem = next;
      root.querySelectorAll<HTMLButtonElement>('[data-unit-system]').forEach((item) => {
        item.setAttribute('aria-pressed', String(item === button));
      });
      if (temp) temp.value = String(Math.round(fromCelsius(currentTempC, unitSystem)));
      if (tempSlider) tempSlider.value = temp.value;
      if (mass) mass.value = unitSystem === 'imperial' ? fromGrams(currentMassG, unitSystem).toFixed(2) : String(Math.round(currentMassG));
      if (massSlider) massSlider.value = mass.value;
      if (tempUnit) tempUnit.textContent = unitSystem === 'imperial' ? labels.fahrenheit : labels.celsius;
      if (massUnit) massUnit.textContent = unitSystem === 'imperial' ? labels.pounds : labels.grams;
      setTemperatureBounds();
      if (cycleSession) resetCycle();
      else render();
    });
  });

  syncPair(rh, rhSlider);
  syncPair(days, daysSlider);
  syncPair(temp, tempSlider);
  syncPair(mass, massSlider);
  materialTrigger?.addEventListener('click', () => {
    const isOpen = materialSelect?.dataset.open === 'true';
    materialSelect?.setAttribute('data-open', String(!isOpen));
    materialTrigger.setAttribute('aria-expanded', String(!isOpen));
  });
  materialTrigger?.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      materialSelect?.setAttribute('data-open', 'false');
      materialTrigger.setAttribute('aria-expanded', 'false');
    }
  });
  root.querySelectorAll<HTMLButtonElement>('[data-material-option]').forEach((option) => {
    option.addEventListener('click', () => {
      if (!materialSelect || !option.dataset.materialOption) return;
      setSelectedMaterial(option.dataset.materialOption);
      materialSelect.setAttribute('data-open', 'false');
      materialTrigger?.setAttribute('aria-expanded', 'false');
      resetCycle();
      setMaterialDefaults();
    });
    option.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        materialSelect?.setAttribute('data-open', 'false');
        materialTrigger?.setAttribute('aria-expanded', 'false');
        materialTrigger?.focus();
      }
    });
  });
  document.addEventListener('click', (event) => {
    if (!materialSelect?.contains(event.target as Node)) {
      materialSelect?.setAttribute('data-open', 'false');
      materialTrigger?.setAttribute('aria-expanded', 'false');
    }
  });
  dryButton?.addEventListener('click', toggleCycle);
  resetButton?.addEventListener('click', resetCycle);
  visual?.addEventListener('pointermove', (event) => {
    if (!cursorHud || !cycleSession) return;
    updateCursorHud(visual, cursorHud, event);
  });
  visual?.addEventListener('pointerleave', () => {
    cursorHud?.setAttribute('data-visible', 'false');
  });

  cycleSession = loadCycle();
  restoreCycleControls();
  if (cycleSession && getCycleProgress(cycleSession) >= 1) {
    cycleSession.completed = true;
    saveCycle(cycleSession);
  }
  ensureTimer();
  if (cycleSession) render();
  else setMaterialDefaults();
}
