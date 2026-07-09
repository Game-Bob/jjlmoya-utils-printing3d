export function updateUnitLabels(units: 'metric' | 'imperial', textFn: (id: string, val: string) => void): void {
  const locEl = document.getElementById('sdmc-localization-data');
  if (!locEl) return;
  const locData = locEl.dataset;
  if (units === 'imperial') {
    textFn('sdmc-pitch-unit', locData.pitchImperial ?? 'in');
    textFn('sdmc-lead-unit', locData.pitchImperial ?? 'in');
    textFn('sdmc-res-steps-label', locData.stepsImperial ?? 'steps/in');
    textFn('sdmc-res-res-label', locData.resImperial ?? 'mm');
  } else {
    textFn('sdmc-pitch-unit', locData.pitchMetric ?? 'mm');
    textFn('sdmc-lead-unit', locData.pitchMetric ?? 'mm');
    textFn('sdmc-res-steps-label', locData.stepsMetric ?? 'steps/mm');
    textFn('sdmc-res-res-label', locData.resMetric ?? 'mm');
  }
}

export function convertInputs(units: 'metric' | 'imperial', inputFn: (id: string) => HTMLInputElement | HTMLSelectElement | null): void {
  const beltPitchEl = inputFn('sdmc-belt-pitch') as HTMLInputElement | null;
  const leadScrewLeadEl = inputFn('sdmc-leadscrew-lead') as HTMLInputElement | null;
  if (!beltPitchEl || !leadScrewLeadEl) return;

  if (units === 'imperial') {
    beltPitchEl.value = (parseFloat(beltPitchEl.value) / 25.4).toFixed(4);
    leadScrewLeadEl.value = (parseFloat(leadScrewLeadEl.value) / 25.4).toFixed(4);
  } else {
    beltPitchEl.value = (parseFloat(beltPitchEl.value) * 25.4).toFixed(2);
    leadScrewLeadEl.value = (parseFloat(leadScrewLeadEl.value) * 25.4).toFixed(2);
  }
}

export function applyPresetValues(
  preset: string,
  units: 'metric' | 'imperial',
  inputFn: (id: string) => HTMLInputElement | HTMLSelectElement | null,
  setDropdownFn: (dropdownId: string, val: string) => void
): void {
  const isMetric = units === 'metric';
  if (preset.startsWith('belt')) {
    applyBeltPreset(preset, isMetric, inputFn, setDropdownFn);
  } else {
    applyLeadScrewPreset(preset, isMetric, inputFn, setDropdownFn);
  }
}

function applyBeltPreset(
  preset: string,
  isMetric: boolean,
  inputFn: (id: string) => HTMLInputElement | HTMLSelectElement | null,
  setDropdownFn: (dropdownId: string, val: string) => void
): void {
  const beltPitchEl = inputFn('sdmc-belt-pitch') as HTMLInputElement | null;
  const pulleyTeethEl = inputFn('sdmc-pulley-teeth') as HTMLInputElement | null;
  setDropdownFn('sdmc-dropdown-transmission', 'belt');
  if (beltPitchEl) beltPitchEl.value = isMetric ? '2.0' : '0.0787';
  if (pulleyTeethEl) {
    pulleyTeethEl.value = preset === 'belt16' ? '16' : '20';
  }
}

function applyLeadScrewPreset(
  preset: string,
  isMetric: boolean,
  inputFn: (id: string) => HTMLInputElement | HTMLSelectElement | null,
  setDropdownFn: (dropdownId: string, val: string) => void
): void {
  const leadScrewLeadEl = inputFn('sdmc-leadscrew-lead') as HTMLInputElement | null;
  setDropdownFn('sdmc-dropdown-transmission', 'leadscrew');
  if (leadScrewLeadEl) {
    if (preset === 'zlead8') {
      leadScrewLeadEl.value = isMetric ? '8.0' : '0.3150';
    } else {
      leadScrewLeadEl.value = isMetric ? '2.0' : '0.0787';
    }
  }
}

export function toggleDropdown(menu: HTMLElement, trigger: HTMLButtonElement): void {
  document.querySelectorAll('.sdmc-dropdown-menu').forEach((otherMenu) => {
    if (otherMenu !== menu) {
      otherMenu.classList.remove('open');
      otherMenu.previousElementSibling?.classList.remove('active');
    }
  });
  const isOpen = menu.classList.toggle('open');
  trigger.classList.toggle('active', isOpen);
}

export function closeAllDropdowns(): void {
  document.querySelectorAll('.sdmc-dropdown-menu').forEach((menu) => {
    menu.classList.remove('open');
    menu.previousElementSibling?.classList.remove('active');
  });
}

export function initDropdown(dropdown: HTMLElement): void {
  const trigger = dropdown.querySelector('.sdmc-dropdown-trigger') as HTMLButtonElement | null;
  const menu = dropdown.querySelector('.sdmc-dropdown-menu') as HTMLElement | null;
  const hiddenInput = dropdown.querySelector('input[type="hidden"]') as HTMLInputElement | null;

  if (!trigger || !menu || !hiddenInput) return;

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleDropdown(menu, trigger);
  });

  dropdown.querySelectorAll('.sdmc-dropdown-option').forEach((opt) => {
    const optionEl = opt as HTMLElement;
    optionEl.addEventListener('click', () => {
      dropdown.querySelectorAll('.sdmc-dropdown-option').forEach((o) => o.classList.remove('active'));
      optionEl.classList.add('active');
      hiddenInput.value = optionEl.dataset.value || '';
      const triggerText = trigger.querySelector('.sdmc-trigger-text');
      if (triggerText) triggerText.textContent = optionEl.textContent;
      menu.classList.remove('open');
      trigger.classList.remove('active');
      hiddenInput.dispatchEvent(new Event('change', { bubbles: true }));
    });
  });
}

export function setDropdownValue(dropdownId: string, val: string): void {
  const dropdown = document.getElementById(dropdownId);
  if (!dropdown) return;
  const hiddenInput = dropdown.querySelector('input[type="hidden"]') as HTMLInputElement | null;
  const trigger = dropdown.querySelector('.sdmc-dropdown-trigger') as HTMLButtonElement | null;

  if (hiddenInput) hiddenInput.value = val;
  dropdown.querySelectorAll('.sdmc-dropdown-option').forEach((opt) => {
    const optionEl = opt as HTMLElement;
    const isMatch = optionEl.dataset.value === val;
    optionEl.classList.toggle('active', isMatch);
    if (isMatch && trigger) {
      const triggerText = trigger.querySelector('.sdmc-trigger-text');
      if (triggerText) triggerText.textContent = optionEl.textContent;
    }
  });
}

export function copyCommand(): void {
  const cmdEl = document.getElementById('sdmc-cmd-text');
  if (!cmdEl) return;
  navigator.clipboard.writeText(cmdEl.textContent || '').then(() => {
    const btn = document.getElementById('sdmc-btn-copy');
    if (btn) {
      const original = btn.textContent;
      const locEl = document.getElementById('sdmc-localization-data');
      btn.textContent = locEl?.dataset.copied || 'Copied!';
      setTimeout(() => { btn.textContent = original; }, 2000);
    }
  });
}

export function getParams(
  inputFn: (id: string) => HTMLInputElement | HTMLSelectElement | null,
  units: 'metric' | 'imperial'
): { beltPitch: number; pulleyTeeth: number; leadScrewPitch: number } {
  const beltPitchEl = inputFn('sdmc-belt-pitch');
  const pulleyTeethEl = inputFn('sdmc-pulley-teeth');
  const leadScrewPitchEl = inputFn('sdmc-leadscrew-lead');

  const beltPitch = beltPitchEl ? parseFloat(beltPitchEl.value) || 0 : 0;
  const leadScrewPitch = leadScrewPitchEl ? parseFloat(leadScrewPitchEl.value) || 0 : 0;
  const pulleyTeeth = pulleyTeethEl ? parseInt(pulleyTeethEl.value, 10) || 0 : 0;

  if (units === 'imperial') {
    return { beltPitch: beltPitch * 25.4, pulleyTeeth, leadScrewPitch: leadScrewPitch * 25.4 };
  }

  return { beltPitch, pulleyTeeth, leadScrewPitch };
}

export function animateSVG(rotationAngle: number, inputFn: (id: string) => HTMLInputElement | HTMLSelectElement | null): number {
  const newAngle = (rotationAngle + 25) % 360;
  const shaftMark = document.getElementById('sdmc-svg-shaft-mark');
  if (shaftMark) {
    shaftMark.setAttribute('transform', `rotate(${newAngle}, 130, 80)`);
  }
  const transmissionEl = inputFn('sdmc-transmission');
  if (!transmissionEl) return newAngle;
  moveSVGCarriage(newAngle, transmissionEl.value);
  return newAngle;
}

function moveSVGCarriage(rotationAngle: number, mode: string): void {
  if (mode === 'belt') {
    const carriage = document.getElementById('sdmc-svg-belt-carriage');
    if (carriage) {
      carriage.setAttribute('x', String(150 + ((rotationAngle / 360) * 120)));
    }
  } else {
    const nut = document.getElementById('sdmc-svg-leadscrew-nut');
    if (nut) {
      nut.setAttribute('x', String(110 + ((rotationAngle / 360) * 150)));
    }
  }
}
