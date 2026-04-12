import type { ToolLocaleContent } from '../../../types';
import type { ResinCuringCalculatorUI } from '../ui';

export const content: ToolLocaleContent<ResinCuringCalculatorUI> = {
  slug: 'uv-resin-curing-calculator',
  title: 'UV Resin Curing Time Calculator',
  description: 'Determine the exact curing time for your resin 3D prints. Based on lamp power in watts, resin type, and distance. Professional technical guide.',
  ui: {
    title: 'UV Resin Curing Calculator',
    configLabel: 'CONFIGURATION',
    brandLabel: 'Equipment Brand',
    powerLabel: 'Lamp Power (W)',
    powerUnit: 'W',
    distanceLabel: 'LED Distance (cm)',
    distanceUnit: 'cm',
    materialLabel: 'Material Type',
    weightLabel: 'Estimated Weight (g)',
    weightUnit: 'g',
    ipaCheckbox: 'Cleaned with Isopropyl Alcohol?',
    safetyLabel: 'UV SAFETY',
    safetySunglasses: 'Certified UV Glasses',
    safetyGloves: 'Nitrile Gloves',
    sunglassesTooltip: 'Direct exposure to 405nm can permanently damage your retina.',
    glovesTooltip: 'Semi-cured resin is highly irritating. Always use protection.',
    wavelength: 'Wavelength',
    wavelengthValue: '405 nm',
    statusLabel: 'Status',
    modeLabel: 'Mode',
    modeValue: 'Industrial',
    curingTime: 'm:s',
    startButton: 'Start/Stop Curing Cycle',
    intensityChart: 'UV Intensity (Dose)',
    nearLabel: 'Close (2cm)',
    farLabel: 'Far (30cm)',
    theoreticalLabel: 'Theoretical Dose',
    yourConfigLabel: 'Your Configuration',
    evaporateWarning: 'Evaporate alcohol (min. 10 min) to prevent white spots.',
    safeDistance: 'Safe distance detected for uniform curing.',
    riskDistance: 'Risk of heat deformation (Critical Distance).',
    optimeStatus: 'Optimal',
    longStatus: 'Long',
    fastStatus: 'Fast',
  },
  seo: [
    {
      type: 'title',
      text: 'UV Resin Curing Time Calculator: Professional Guide',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'In resin 3D printing (SLA, DLP, or LCD), <strong>UV curing is the essential final step</strong> that converts a soft, sticky piece into a resistant object with declared mechanical properties. Without proper post-curing, your print will be structurally weak, toxic, and unstable.',
    },
    {
      type: 'title',
      text: 'What is UV Resin Curing?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'When a resin 3D printer finishes printing, the piece is in what technicians call the <strong>"green state"</strong>. Although it has its final shape, the polymer\'s molecular chains are not completely cross-linked. UV curing completes the cross-linking, eliminating stickiness and improving hardness, strength, and thermal stability.',
    },
  ],
  faqTitle: 'Frequently Asked Questions',
  bibliographyTitle: 'References',
  faq: [
    {
      question: 'How long does UV resin curing take?',
      answer: 'It depends on your lamp\'s power. A 40W station typically takes 2-4 minutes for medium-sized pieces, while lower-power DIY lamps may need up to 10 minutes.',
    },
    {
      question: 'Can I cure resin with a nail lamp?',
      answer: 'It\'s possible if the lamp covers the 405nm spectrum, but these lamps usually have low power (6W-12W), significantly extending times and potentially causing poor surface curing.',
    },
    {
      question: 'Is water curing necessary?',
      answer: 'Not mandatory, but highly recommended (Water Curing). Water blocks oxygen contact, which inhibits surface polymerization, resulting in less sticky pieces.',
    },
    {
      question: 'How do I know if resin is properly cured?',
      answer: 'The piece should be completely dry to the touch (not sticky), have lost its "wet" shine, show a slight color shift, and lack the strong smell of liquid resin.',
    },
    {
      question: 'Why does my clear resin turn yellow?',
      answer: 'It\'s the effect of over-curing or excessive temperature. Use the "Transparent" factor in our calculator to reduce time and keep LEDs at least 5cm away.',
    },
  ],
  bibliography: [
    {
      name: 'Formlabs - Post-curing Resin Prints',
      url: 'https://formlabs.com/blog/how-to-post-cure-3d-prints/',
    },
    {
      name: 'E3D-Online: UV Curing Science',
      url: 'https://e3d-online.com/pages/resin-printing-guide',
    },
  ],
  howTo: [
    {
      name: 'Configure your equipment',
      text: 'Select your UV machine brand and adjust the power in watts.',
    },
    {
      name: 'Adjust physical parameters',
      text: 'Specify the distance between LEDs and piece, resin type, and estimated weight.',
    },
    {
      name: 'Start curing',
      text: 'Use the calculated time as a guide and monitor your piece during the process.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How long does UV resin curing take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A 40W station typically takes 2-4 minutes for medium-sized pieces, while lower-power lamps may need up to 10 minutes.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'UV Resin Curing Calculator',
      description: 'Determine the exact curing time for your resin 3D prints based on lamp power, distance, and material type.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How to calculate UV resin curing time',
      step: [
        {
          '@type': 'HowToStep',
          text: 'Configure your equipment',
        },
        {
          '@type': 'HowToStep',
          text: 'Adjust physical parameters',
        },
      ],
    },
  ],
};
