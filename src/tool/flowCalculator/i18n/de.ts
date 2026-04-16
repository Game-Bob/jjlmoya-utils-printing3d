import type { ToolLocaleContent } from '../../../types';
import type { FlowCalculatorUI } from '../ui';

export const content: ToolLocaleContent<FlowCalculatorUI> = {
  slug: 'volumetrischer-durchflussrechner',
  title: 'Volumetrischer Durchfluss: Die tatsächlichen Geschwindigkeitsgrenzen Ihres 3D Druckers verstehen',
  description: 'Berechnen Sie die maximale volumetrische Durchflussrate Ihres 3D-Druckers. Verstehen Sie die realen Hardware-Einschränkungen Ihres Hotends.',
  ui: {
    title: 'Rechner für volumetrischen Durchfluss',
    autoAdjust: 'AUTO-ANPASSUNG 120%',
    configLabel: 'KONFIGURATION',
    nozzleLabel: 'DÜSE',
    lineWidthLabel: 'LINIENBREITE',
    layerHeightLabel: 'SCHICHTHÖHE',
    speedLabel: 'GESCHWINDIGKEIT',
    temperatureLabel: 'TEMPERATUR',
    materialLabel: 'MATERIAL',
    hotendLimitLabel: 'HOTEND-LIMIT',
    hotendTooltip: 'Basis-Schmelzkapazität der Hardware ohne Berücksichtigung von Material oder Temperatur.',
    presetEnder: 'Standard MK8/V6. Kurze Schmelzzone.',
    presetBambu: 'Hochgeschwindigkeits-Keramik-Hotend.',
    presetVolcano: 'Extra lange 21mm Schmelzzone.',
    presetHF: 'Spezielle Ultra-Hochleistungs-Extruder.',
    baseLimitLabel: 'BASIS-LIMIT',
    resetButton: 'Werte zurücksetzen',
    volumetricFlowLabel: 'REALER VOLUMETRISCHER DURCHFLUSS',
    maxSpeedLabel: 'MAXIMALE GESCHWINDIGKEIT',
    statusLabel: 'STATUS',
    safeStatus: 'SICHER',
    stratifiedLabel: 'GESTAFELTE LEISTUNG',
    chartHeightLabel: 'SCHICHTHÖHE (MM)',
    chartSpeedLabel: 'GESCHWINDIGKEITSLIMIT (MM/S)',
    chartSafeLabel: 'SICHERER BEREICH',
    copyButton: 'EFFEKTIVES LIMIT KOPIEREN',
  },
  seo: [
    {
      type: 'title',
      text: 'Volumetrischer Durchfluss: Die tatsächlichen Geschwindigkeitsgrenzen Ihres 3D-Druckers verstehen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Beim FDM-3D-Druck ist der <strong>volumetrische Durchfluss</strong> der Faktor, der bestimmt, wie schnell Sie drucken können, bevor Ihre Hardware versagt. Während Motorgeschwindigkeiten beeindruckend erscheinen mögen, ist es die Fähigkeit Ihres Hotends, Kunststoff gleichmäßig zu schmelzen, auf die es wirklich ankommt.',
    },
    {
      type: 'title',
      text: 'Was ist der volumetrische Durchfluss (mm³/s)?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Es handelt sich um das Gesamtvolumen des pro Sekunde extrudierten Filaments. Er wird berechnet, indem drei Schlüsselvariablen multipliziert werden: Druckgeschwindigkeit, Linienbreite und Schichthöhe. Wenn Sie versuchen, mehr Kunststoff zu extrudieren, als Ihr Heizblock schmelzen kann, werden Sie mit gefürchteter <strong>Unterextrusion</strong> konfrontiert.',
    },
  ],
  faqTitle: 'Häufig gestellte Fragen',
  bibliographyTitle: 'Referenzen',
  faq: [
    {
      question: 'Was ist der maximale Durchfluss meines Druckers?',
      answer: 'Das hängt ganz von Ihrem Hotend ab. Ein Standard-Hotend (Typ V6) schmilzt typischerweise zwischen 10 und 12 mm³/s. High-Flow-Modelle wie Volcano oder Revo High Flow erreichen 30-35 mm³/s.',
    },
    {
      question: 'Warum fließt PETG langsamer als PLA?',
      answer: 'PETG hat im geschmolzenen Zustand eine viel höhere Viskosität. Das bedeutet, dass es beim Durchgang durch die Düse mehr Widerstand bietet, sodass sein effektives Durchflusslimit bei gleicher Temperatur typischerweise 15% niedriger ist als bei PLA.',
    },
    {
      question: 'Wie beeinflusst die Linienbreite den Durchfluss?',
      answer: 'Die Linienbreite ist zusammen mit der Schichthöhe der direkteste Multiplikator. Wenn Sie bei gleicher Geschwindigkeit von 0,4 mm auf 0,6 mm Breite gehen, verlangen Sie Ihrem Extruder 50% mehr Durchfluss ab.',
    },
  ],
  bibliography: [
    {
      name: 'E3D-Online: Durchflussrate und Geschwindigkeitsgrenzen',
      url: 'https://e3d-online.com/pages/revo-high-flow-volumetric-flow-rate-calculator',
    },
    {
      name: 'OrcaSlicer Wiki: Kalibrierung',
      url: 'https://github.com/OrcaSlicer/OrcaSlicer/wiki/Calibration',
    },
    {
      name: 'Bambu Lab: Kalibrierung der Durchflussrate',
      url: 'https://wiki.bambulab.com/en/software/bambu-studio/calibration_flow_rate',
    },
  ],
  howTo: [
    {
      name: 'Konfigurieren Sie Ihre Hardware',
      text: 'Wählen Sie Ihren Düsendurchmesser und ein beliebtes Hotend-Preset aus.',
    },
    {
      name: 'Passen Sie Ihre Parameter an',
      text: 'Bewegen Sie die Schieberegler für Linienbreite, Schichthöhe und Druckgeschwindigkeit.',
    },
    {
      name: 'Wert kopieren',
      text: 'Kopieren Sie den maximalen Durchflusswert und verwenden Sie ihn in Ihrem Slicer.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Was ist der maximale Durchfluss meines Druckers?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Das hängt ganz von Ihrem Hotend ab. Ein Standard-Hotend schmilzt typischerweise zwischen 10 und 12 mm³/s.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Rechner für volumetrischen Durchfluss',
      description: 'Berechnen Sie die maximale volumetrische Durchflussrate Ihres 3D-Druckers.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'So berechnen Sie den volumetrischen Durchfluss',
      step: [
        {
          '@type': 'HowToStep',
          text: 'Konfigurieren Sie Ihre Hardware',
        },
        {
          '@type': 'HowToStep',
          text: 'Passen Sie Ihre Parameter an',
        },
      ],
    },
  ],
};
