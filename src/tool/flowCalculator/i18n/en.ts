import type { ToolLocaleContent } from '../../../types';
import type { FlowCalculatorUI } from '../ui';

export const content: ToolLocaleContent<FlowCalculatorUI> = {
  slug: 'volumetric-flow-calculator',
  title: 'Volumetric Flow: Understanding the Real Speed Limits of Your 3D Printer',
  description: 'Calculate the maximum volumetric flow rate of your 3D printer. Understand the real hardware limitations of your hotend.',
  ui: {
    title: 'Volumetric Flow Calculator',
    autoAdjust: 'AUTO ADJUST 120%',
    configLabel: 'CONFIGURATION',
    nozzleLabel: 'NOZZLE',
    lineWidthLabel: 'LINE WIDTH',
    layerHeightLabel: 'LAYER HEIGHT',
    speedLabel: 'SPEED',
    temperatureLabel: 'TEMPERATURE',
    materialLabel: 'MATERIAL',
    hotendLimitLabel: 'HOTEND LIMIT',
    hotendTooltip: 'Base melting capacity of the hardware without considering material or temperature.',
    presetEnder: 'Standard MK8/V6. Short melt zone.',
    presetBambu: 'High-speed ceramic hotend.',
    presetVolcano: 'Extra-long 21mm melt zone.',
    presetHF: 'Custom ultra-high-performance extruders.',
    baseLimitLabel: 'BASE LIMIT',
    resetButton: 'Reset values',
    volumetricFlowLabel: 'REAL VOLUMETRIC FLOW',
    maxSpeedLabel: 'MAXIMUM SPEED',
    statusLabel: 'STATUS',
    safeStatus: 'SAFE',
    stratifiedLabel: 'STRATIFIED PERFORMANCE',
    chartHeightLabel: 'LAYER HEIGHT (MM)',
    chartSpeedLabel: 'SPEED LIMIT (MM/S)',
    chartSafeLabel: 'SAFE RANGE',
    copyButton: 'COPY EFFECTIVE LIMIT',
  },
  seo: [
    {
      type: 'title',
      text: 'Volumetric Flow: Understanding the Real Speed Limits of Your 3D Printer',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'In FDM 3D printing, <strong>volumetric flow</strong> is the factor that determines how fast you can print before your hardware fails. While motor speeds can seem impressive, it\'s your hotend\'s ability to melt plastic consistently that really matters.',
    },
    {
      type: 'title',
      text: 'What is Volumetric Flow (mm³/s)?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'It\'s the total volume of filament extruded per second. It\'s calculated by multiplying three key variables: print speed, line width, and layer height. If you try to extrude more plastic than your heater block can melt, you\'ll face dreaded <strong>underextrusion</strong>.',
    },
  ],
  faqTitle: 'Frequently Asked Questions',
  bibliographyTitle: 'References',
  faq: [
    {
      question: 'What is the maximum flow of my printer?',
      answer: 'It depends entirely on your hotend. A standard hotend (V6-type) typically melts between 10 and 12 mm³/s. High-flow models like Volcano or Revo High Flow reach 30-35 mm³/s.',
    },
    {
      question: 'Why does PETG flow slower than PLA?',
      answer: 'PETG has much higher viscosity when molten. This means it offers more resistance passing through the nozzle, so its effective flow limit is typically 15% lower than PLA at the same temperature.',
    },
    {
      question: 'How does line width affect flow?',
      answer: 'Line width is the most direct multiplier along with layer height. If you go from 0.4mm to 0.6mm width at the same speed, you\'re demanding 50% more flow from your extruder.',
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
      name: 'Configure your hardware',
      text: 'Select your nozzle diameter and choose a popular hotend preset.',
    },
    {
      name: 'Adjust your parameters',
      text: 'Move the sliders for line width, layer height, and print speed.',
    },
    {
      name: 'Copy the value',
      text: 'Copy the maximum flow value and use it in your slicer.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the maximum flow of my printer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'It depends entirely on your hotend. A standard hotend typically melts between 10 and 12 mm³/s.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Volumetric Flow Calculator',
      description: 'Calculate the maximum volumetric flow rate of your 3D printer.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How to calculate volumetric flow',
      step: [
        {
          '@type': 'HowToStep',
          text: 'Configure your hardware',
        },
        {
          '@type': 'HowToStep',
          text: 'Adjust your parameters',
        },
      ],
    },
  ],
};
