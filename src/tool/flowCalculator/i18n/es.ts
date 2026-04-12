import type { ToolLocaleContent } from '../../../types';
import type { FlowCalculatorUI } from '../ui';

export const content: ToolLocaleContent<FlowCalculatorUI> = {
  slug: 'calculadora-caudal-volumetrico',
  title: 'Caudal Volumétrico: Comprendiendo el Límite Real de tu Impresora 3D',
  description: 'Calcula el flujo volumétrico máximo de tu impresora 3D. Comprendiendo los límites reales de velocidad e limitaciones de hardware.',
  ui: {
    title: 'Calculadora de Caudal 3D',
    autoAdjust: 'AJUSTE AUTO 120%',
    configLabel: 'CONFIGURACIÓN',
    nozzleLabel: 'BOQUILLA',
    lineWidthLabel: 'ANCHO LÍNEA',
    layerHeightLabel: 'ALTURA CAPA',
    speedLabel: 'VELOCIDAD',
    temperatureLabel: 'TEMPERATURA',
    materialLabel: 'MATERIAL',
    hotendLimitLabel: 'LÍMITE HOTEND',
    hotendTooltip: 'Capacidad base de fundido del hardware sin considerar material ni temperatura.',
    presetEnder: 'Estándar MK8/V6. Zona de fundido corta.',
    presetBambu: 'Hotend cerámico de alta velocidad.',
    presetVolcano: 'Zona de fundido extra larga de 21mm.',
    presetHF: 'Extrusores custom de altísimo rendimiento.',
    baseLimitLabel: 'LÍMITE BASE',
    resetButton: 'Restablecer valores',
    volumetricFlowLabel: 'CAUDAL VOLUMÉTRICO REAL',
    maxSpeedLabel: 'VELOCIDAD MÁXIMA',
    statusLabel: 'ESTADO',
    safeStatus: 'SEGURO',
    stratifiedLabel: 'RENDIMIENTO ESTRATIFICADO',
    chartHeightLabel: 'ALTURA CAPA (MM)',
    chartSpeedLabel: 'LÍMITE VELOCIDAD (MM/S)',
    chartSafeLabel: 'GAMA SEGURA',
    copyButton: 'COPIAR LÍMITE EFECTIVO',
  },
  seo: [
    {
      type: 'title',
      text: 'Caudal Volumétrico: Comprendiendo el Límite Real de tu Impresora 3D',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En la impresión 3D FDM, el <strong>flujo volumétrico</strong> es el factor que determina qué tan rápido puedes imprimir antes de que tu hardware falle. Mientras que la velocidad de los motores puede parecer impresionante, es la capacidad de tu hotend para fundir plástico de forma constante lo que realmente manda.',
    },
    {
      type: 'title',
      text: '¿Qué es el Caudal Volumétrico (mm³/s)?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Se trata del volumen total de filamento que se extruye por segundo. Se calcula multiplicando tres variables clave: la velocidad de impresión, el ancho de línea y la altura de capa. Si intentas extruir más plástico del que tu bloque calentador puede fundir, te enfrentarás a la temida <strong>subextrusión</strong>.',
    },
  ],
  faqTitle: 'Preguntas Frecuentes',
  bibliographyTitle: 'Referencias',
  faq: [
    {
      question: '¿Cuál es el caudal máximo de mi impresora?',
      answer: 'Depende totalmente de tu hotend. Un hotend estándar (tipo V6) suele fundir entre 10 y 12 mm³/s. Los modelos de alto flujo como Volcano o Revo High Flow suben hasta los 30-35 mm³/s.',
    },
    {
      question: '¿Por qué el PETG fluye más lento que el PLA?',
      answer: 'El PETG tiene una viscosidad mucho más alta cuando se funde. Esto significa que ofrece más resistencia al pasar por la boquilla, por lo que su límite de caudal efectivo suele ser un 15% menor que el del PLA a la misma temperatura.',
    },
    {
      question: '¿Cómo afecta el ancho de línea al caudal?',
      answer: 'El ancho de línea es el multiplicador más directo junto a la altura de capa. Si pasas de un ancho de 0.4mm a 0.6mm con la misma velocidad, estás pidiendo un 50% más de flujo a tu extrusor.',
    },
  ],
  bibliography: [
    {
      name: 'E3D-Online: Flow rate and speed limits',
      url: 'https://e3d-online.com/pages/revo-high-flow-volumetric-flow-rate-calculator',
    },
    {
      name: 'OrcaSlicer Wiki: Calibration',
      url: 'https://github.com/OrcaSlicer/OrcaSlicer/wiki/Calibration',
    },
    {
      name: 'Bambu Lab: Flow Rate Calibration',
      url: 'https://wiki.bambulab.com/en/software/bambu-studio/calibration_flow_rate',
    },
  ],
  howTo: [
    {
      name: 'Configura tu hardware',
      text: 'Selecciona el diámetro de tu boquilla y elige uno de los presets de hotends populares.',
    },
    {
      name: 'Ajusta tus parámetros',
      text: 'Mueve los deslizadores de ancho de línea, altura de capa y velocidad.',
    },
    {
      name: 'Copia el valor',
      text: 'Copia el valor de flujo máximo y úsalo en tu laminador.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Cuál es el caudal máximo de mi impresora?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Depende totalmente de tu hotend. Un hotend estándar (tipo V6) suele fundir entre 10 y 12 mm³/s.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Calculadora de Caudal Volumétrico',
      description: 'Calcula el flujo volumétrico máximo de tu impresora 3D.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Cómo calcular el caudal volumétrico',
      step: [
        {
          '@type': 'HowToStep',
          text: 'Configura tu hardware',
        },
        {
          '@type': 'HowToStep',
          text: 'Ajusta tus parámetros',
        },
      ],
    },
  ],
};
