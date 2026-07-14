import {
  calculateMetricThreadTolerance,
  type ThreadMaterial,
  type ThreadTechnology,
} from './logic';

const $ = <T extends Element>(root: ParentNode, selector: string) => root.querySelector<T>(selector);
const $$ = <T extends Element>(root: ParentNode, selector: string) => Array.from(root.querySelectorAll<T>(selector));

const format = (value: number) => value.toFixed(2);

interface MetricThreadElements {
  diameterInput: HTMLInputElement;
  pitchInput: HTMLInputElement;
  materialInput: HTMLSelectElement;
  maleResult: HTMLElement;
  femaleResult: HTMLElement;
  correctionResult: HTMLElement;
  clearanceResult: HTMLElement;
  cadString: HTMLElement;
  copyButton: HTMLButtonElement;
  warning: HTMLElement;
  malePath: SVGPathElement;
  femalePath: SVGPathElement;
  clearance: SVGPathElement;
}

const threadPath = (baseY: number, amplitude: number, pitchPx: number, phase: number, points = 13) => {
  const startX = 70;
  const segments: string[] = [`M ${startX} ${baseY}`];
  for (let index = 0; index < points; index += 1) {
    const x1 = startX + index * pitchPx + pitchPx * 0.5;
    const x2 = startX + (index + 1) * pitchPx;
    const peakY = baseY + phase * amplitude;
    segments.push(`L ${x1.toFixed(1)} ${peakY.toFixed(1)} L ${x2.toFixed(1)} ${baseY.toFixed(1)}`);
  }
  return segments.join(' ');
};

const clearancePath = (maleY: number, femaleY: number, pitchPx: number) => {
  const upper = threadPath(femaleY, 22, pitchPx, -1);
  const lower = threadPath(maleY, 22, pitchPx, 1).replace(/^M/, 'L');
  return `${upper} ${lower} Z`;
};

const getElements = (root: HTMLElement): MetricThreadElements | null => {
  const elements = {
    diameterInput: $<HTMLInputElement>(root, '#mtt-diameter'),
    pitchInput: $<HTMLInputElement>(root, '#mtt-pitch'),
    materialInput: $<HTMLSelectElement>(root, '#mtt-material'),
    maleResult: $<HTMLElement>(root, '#mtt-male-result'),
    femaleResult: $<HTMLElement>(root, '#mtt-female-result'),
    correctionResult: $<HTMLElement>(root, '#mtt-correction'),
    clearanceResult: $<HTMLElement>(root, '#mtt-clearance-value'),
    cadString: $<HTMLElement>(root, '#mtt-cad-string'),
    copyButton: $<HTMLButtonElement>(root, '#mtt-copy'),
    warning: $<HTMLElement>(root, '#mtt-warning'),
    malePath: $<SVGPathElement>(root, '#mtt-male'),
    femalePath: $<SVGPathElement>(root, '#mtt-female'),
    clearance: $<SVGPathElement>(root, '#mtt-clearance'),
  };

  if (Object.values(elements).some((element) => !element)) return null;
  return elements as MetricThreadElements;
};

const setActiveButton = (buttons: HTMLButtonElement[], activeButton: HTMLButtonElement) => {
  buttons.forEach((button) => button.classList.remove('active'));
  activeButton.classList.add('active');
};

const renderVisual = (
  elements: Pick<MetricThreadElements, 'femalePath' | 'malePath' | 'clearance'>,
  pitchMm: number,
  effectiveCorrectionMm: number,
) => {
  const pitchPx = Math.max(32, Math.min(70, pitchMm * 42));
  const visualGap = Math.max(12, Math.min(60, effectiveCorrectionMm * 42));
  const femaleY = 132 - visualGap * 0.35;
  const maleY = 198 + visualGap * 0.35;
  elements.femalePath.setAttribute('d', threadPath(femaleY, 22, pitchPx, -1));
  elements.malePath.setAttribute('d', threadPath(maleY, 22, pitchPx, 1));
  elements.clearance.setAttribute('d', clearancePath(maleY - 11, femaleY + 11, pitchPx));
};

const wireCopyButton = (
  root: HTMLElement,
  copyButton: HTMLButtonElement,
  cadString: HTMLElement,
) => {
  copyButton.addEventListener('click', async () => {
    await navigator.clipboard?.writeText(cadString.textContent ?? '');
    copyButton.textContent = root.dataset.copied ?? '';
    window.setTimeout(() => {
      copyButton.textContent = root.dataset.copy ?? '';
    }, 1300);
  });
};

export const initMetricThreadToleranceCalculator = () => {
  const root = document.getElementById('main-tool');
  if (!root || root.dataset.metricThreadReady === 'true') return;
  root.dataset.metricThreadReady = 'true';

  const elements = getElements(root);
  if (!elements) return;

  let technology: ThreadTechnology = 'fdm-standard';

  const render = () => {
    const diameterMm = Number(elements.diameterInput.value);
    const pitchMm = Number(elements.pitchInput.value);
    const material = elements.materialInput.value as ThreadMaterial;
    const result = calculateMetricThreadTolerance({ diameterMm, pitchMm, technology, material });
    const male = format(result.maleCadDiameterMm);
    const female = format(result.femaleCadDiameterMm);
    const correction = format(result.effectiveCorrectionMm);
    const clearanceValue = format(result.totalDiametralClearanceMm);

    elements.maleResult.textContent = male;
    elements.femaleResult.textContent = female;
    elements.correctionResult.textContent = correction;
    elements.clearanceResult.textContent = clearanceValue;
    elements.cadString.textContent = root.dataset.copyTemplate
      ?.replace('{male}', male)
      .replace('{female}', female)
      .replace('{correction}', correction)
      .replace('{clearance}', clearanceValue) ?? '';
    elements.warning.hidden = result.warning === 'none';
    renderVisual(elements, pitchMm, result.effectiveCorrectionMm);
  };

  const threadButtons = $$<HTMLButtonElement>(root, '[data-thread]');
  threadButtons.forEach((button) => {
    button.addEventListener('click', () => {
      setActiveButton(threadButtons, button);
      if (button.dataset.thread !== 'custom') {
        elements.diameterInput.value = button.dataset.diameter ?? elements.diameterInput.value;
        elements.pitchInput.value = button.dataset.pitch ?? elements.pitchInput.value;
      }
      render();
    });
  });

  const techButtons = $$<HTMLButtonElement>(root, '[data-tech]');
  techButtons.forEach((button) => {
    button.addEventListener('click', () => {
      setActiveButton(techButtons, button);
      technology = (button.dataset.tech ?? 'fdm-standard') as ThreadTechnology;
      render();
    });
  });

  [elements.diameterInput, elements.pitchInput, elements.materialInput].forEach((input) => input.addEventListener('input', render));
  wireCopyButton(root, elements.copyButton, elements.cadString);
  render();
};
