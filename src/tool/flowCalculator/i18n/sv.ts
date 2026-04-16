import type { ToolLocaleContent } from '../../../types';
import type { FlowCalculatorUI } from '../ui';

export const content: ToolLocaleContent<FlowCalculatorUI> = {
  slug: 'volymetrisk-flodes-kalkylator',
  title: 'Volymetriskt flöde: Förstå de verkliga hastighetsgränserna för din 3D skrivare',
  description: 'Beräkna det maximala volymetriska flödet för din 3D-skrivare. Förstå de verkliga hårdvarubegränsningarna för din hotend.',
  ui: {
    title: 'Volymetrisk flödeskalkylator',
    autoAdjust: 'AUTOJUSTERA 120%',
    configLabel: 'KONFIGURATION',
    nozzleLabel: 'NOZZLE',
    lineWidthLabel: 'LINJEBREDD',
    layerHeightLabel: 'LAGERHÖJD',
    speedLabel: 'HASTIGHET',
    temperatureLabel: 'TEMPERATUR',
    materialLabel: 'MATERIAL',
    hotendLimitLabel: 'HOTEND-GRÄNS',
    hotendTooltip: 'Hårdvarans grundläggande smältkapacitet utan hänsyn till material eller temperatur.',
    presetEnder: 'Standard MK8/V6. Kort smältzon.',
    presetBambu: 'Högkvalitativ keramisk hotend.',
    presetVolcano: 'Extra lång 21 mm smältzon.',
    presetHF: 'Specialiserade extrudrar med ultrahög prestanda.',
    baseLimitLabel: 'BASGRÄNS',
    resetButton: 'Återställ värden',
    volumetricFlowLabel: 'REALT VOLYMETRISKT FLÖDE',
    maxSpeedLabel: 'MAXIMAL HASTIGHET',
    statusLabel: 'STATUS',
    safeStatus: 'SÄKER',
    stratifiedLabel: 'SKIKTAD PRESTANDA',
    chartHeightLabel: 'LAGERHÖJD (MM)',
    chartSpeedLabel: 'HASTIGHETSGRÄNS (MM/S)',
    chartSafeLabel: 'SÄKERT OMRÅDE',
    copyButton: 'KOPIERA EFFEKTIV GRÄNS',
  },
  seo: [
    {
      type: 'title',
      text: 'Volymetriskt flöde: Förstå de verkliga hastighetsgränserna för din 3D-skrivare',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Inom FDM 3D-utskrift är det <strong>volymetriska flödet</strong> den faktor som avgör hur snabbt du kan skriva ut innan din hårdvara misslyckas. Även om motorernas hastigheter kan verka imponerande, är det din hotends förmåga att smälta plast konsekvent som verkligen räknas.',
    },
    {
      type: 'title',
      text: 'Vad är volymetriskt flöde (mm³/s)?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Det är den totala volymen filament som extruderas per sekund. Det beräknas genom att multiplicera tre nyckelvariabler: utskriftshastighet, linjebredd och lagerhöjd. Om du försöker extrudera mer plast än vad ditt värmeblock kan smälta, kommer du att stöta på den fruktade <strong>underextrudering (underextrusion)</strong>.',
    },
  ],
  faqTitle: 'Vanliga frågor',
  bibliographyTitle: 'Referenser',
  faq: [
    {
      question: 'Vad är det maximala flödet på min skrivare?',
      answer: 'Det beror helt på din hotend. En standard-hotend (V6-typ) smälter vanligtvis mellan 10 och 12 mm³/s. Högflödesmodeller som Volcano eller Revo High Flow når 30–35 mm³/s.',
    },
    {
      question: 'Varför flödar PETG långsammare än PLA?',
      answer: 'PETG har mycket högre viskositet när det är smält. Det betyder att det ger mer motstånd när det passerar genom munstycket, så dess effektiva flödesgräns är vanligtvis 15 % lägre än PLA vid samma temperatur.',
    },
    {
      question: 'Hur påverkar linjebredden flödet?',
      answer: 'Linjebredd är den mest direkta multiplikatorn tillsammans med lagerhöjd. Om du går från 0,4 mm till 0,6 mm bredd vid samma hastighet kräver du 50 % mer flöde från din extruder.',
    },
  ],
  bibliography: [
    {
      name: 'E3D-Online: Flödeshastighet och hastighetsgränser',
      url: 'https://e3d-online.com/pages/revo-high-flow-volumetric-flow-rate-calculator',
    },
    {
      name: 'OrcaSlicer Wiki: Kalibrering',
      url: 'https://github.com/OrcaSlicer/OrcaSlicer/wiki/Calibration',
    },
    {
      name: 'Bambu Lab: Kalibrering av flödeshastighet',
      url: 'https://wiki.bambulab.com/en/software/bambu-studio/calibration_flow_rate',
    },
  ],
  howTo: [
    {
      name: 'Konfigurera din hårdvara',
      text: 'Välj din munstycksdiameter och välj en populär hotend-förinställning.',
    },
    {
      name: 'Justera dina parametrar',
      text: 'Flytta reglagen för linjebredd, lagerhöjd och utskriftshastighet.',
    },
    {
      name: 'Kopiera värdet',
      text: 'Kopiera det maximala flödesvärdet och använd det i din slicer.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Vad är det maximala flödet på min skrivare?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Det beror helt på din hotend. En standard-hotend smälter vanligtvis mellan 10 och 12 mm³/s.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Volymetrisk flödeskalkylator',
      description: 'Beräkna det maximala volymetriska flödet för din 3D-skrivare.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Hur man beräknar volymetriskt flöde',
      step: [
        {
          '@type': 'HowToStep',
          text: 'Konfigurera din hårdvara',
        },
        {
          '@type': 'HowToStep',
          text: 'Justera dina parametrar',
        },
      ],
    },
  ],
};
