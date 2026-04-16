import type { ToolLocaleContent } from '../../../types';
import type { FlowCalculatorUI } from '../ui';

export const content: ToolLocaleContent<FlowCalculatorUI> = {
  slug: 'volumetrische-flow-calculator',
  title: 'Volumetrische Flow: De werkelijke snelheidslimieten van je 3D printer begrijpen',
  description: 'Bereken de maximale volumetrische flow van je 3D-printer. Begrijp de werkelijke hardwarebeperkingen van je hotend.',
  ui: {
    title: 'Volumetrische Flow Calculator',
    autoAdjust: 'AUTO AANPASSEN 120%',
    configLabel: 'CONFIGURATIE',
    nozzleLabel: 'NOZZLE',
    lineWidthLabel: 'LIJNBREEDTE',
    layerHeightLabel: 'LAAGHOOGTE',
    speedLabel: 'SNELHEID',
    temperatureLabel: 'TEMPERATUUR',
    materialLabel: 'MATERIAAL',
    hotendLimitLabel: 'HOTEND LIMIET',
    hotendTooltip: 'Basis smeltcapaciteit van de hardware zonder rekening te houden met materiaal of temperatuur.',
    presetEnder: 'Standaard MK8/V6. Korte smeltzone.',
    presetBambu: 'Hogesnelheid keramische hotend.',
    presetVolcano: 'Extra lange 21 mm smeltzone.',
    presetHF: 'Aangepaste ultra-high-performance extruders.',
    baseLimitLabel: 'BASISLIMIET',
    resetButton: 'Waarden resetten',
    volumetricFlowLabel: 'WERKELIJKE VOLUMETRISCHE FLOW',
    maxSpeedLabel: 'MAXIMALE SNELHEID',
    statusLabel: 'STATUS',
    safeStatus: 'VEILIG',
    stratifiedLabel: 'GELAAGDE PRESTATIES',
    chartHeightLabel: 'LAAGHOOGTE (MM)',
    chartSpeedLabel: 'SNELHEIDSLIMIET (MM/S)',
    chartSafeLabel: 'VEILIG BEREIK',
    copyButton: 'EFFECTIEVE LIMIET KOPIËREN',
  },
  seo: [
    {
      type: 'title',
      text: 'Volumetrische Flow: De werkelijke snelheidslimieten van je 3D-printer begrijpen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bij FDM 3D-printen is de <strong>volumetrische flow</strong> de factor die bepaalt hoe snel je kunt printen voordat je hardware faalt. Hoewel motorsnelheden indrukwekkend kunnen lijken, is het her vermogen van je hotend om plastic consistent te smelten dat er echt toe doet.',
    },
    {
      type: 'title',
      text: 'Wat is Volumetrische Flow (mm³/s)?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Het is het totale volume filament dat per seconde wordt geëxtrudeerd. Het wordt berekend door drie belangrijke variabelen te vermenigvuldigen: printsnelheid, lijnbreedte en laaghoogte. Als je probeert meer plastic te extruderen dan je heaterblok kan smelten, krijg je te maken met de gevreesde <strong>onder-extrusie</strong>.',
    },
  ],
  faqTitle: 'Veelgestelde vragen',
  bibliographyTitle: 'Referenties',
  faq: [
    {
      question: 'Wat is de maximale flow van mijn printer?',
      answer: 'Het hangt volledig af van je hotend. Een standaard hotend (V6-type) smelt meestal tussen 10 en 12 mm³/s. High-flow-modellen zoals Volcano of Revo High Flow bereiken 30-35 mm³/s.',
    },
    {
      question: 'Waarom vloeit PETG langzamer dan PLA?',
      answer: 'PETG heeft een veel hogere viscositeit wanneer het gesmolten is. Dit betekent dat het meer weerstand biedt bij het passeren van de nozzle, waardoor de effectieve flowlimiet meestal 15% lager is dan die van PLA bij dezelfde temperatuur.',
    },
    {
      question: 'Hoe beïnvloedt de lijnbreedte de flow?',
      answer: 'Lijnbreedte is de meest directe factor samen met laaghoogte. Als je van 0,4 mm naar 0,6 mm breedte gaat bij dezelfde snelheid, vraag je 50% meer flow van je extruder.',
    },
  ],
  bibliography: [
    {
      name: 'E3D-Online: Flowsnelheid en snelheidslimieten',
      url: 'https://e3d-online.com/pages/revo-high-flow-volumetric-flow-rate-calculator',
    },
    {
      name: 'OrcaSlicer Wiki: Kalibratie',
      url: 'https://github.com/OrcaSlicer/OrcaSlicer/wiki/Calibration',
    },
    {
      name: 'Bambu Lab: Flow Rate Kalibratie',
      url: 'https://wiki.bambulab.com/en/software/bambu-studio/calibration_flow_rate',
    },
  ],
  howTo: [
    {
      name: 'Configureer je hardware',
      text: 'Selecteer je nozzle-diameter en kies een populaire hotend-preset.',
    },
    {
      name: 'Pas je parameters aan',
      text: 'Verplaats de schuifregelaars voor lijnbreedte, laaghoogte en printsnelheid.',
    },
    {
      name: 'Kopieer de waarde',
      text: 'Kopieer de maximale flowwaarde en gebruik deze in je slicer.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Wat is de maximale flow van mijn printer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Het hangt volledig af van je hotend. Een standaard hotend smelt meestal tussen 10 en 12 mm³/s.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Volumetrische Flow Calculator',
      description: 'Bereken de maximale volumetrische flow van je 3D-printer.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Hoe bereken je de volumetrische flow',
      step: [
        {
          '@type': 'HowToStep',
          text: 'Configureer je hardware',
        },
        {
          '@type': 'HowToStep',
          text: 'Pas je parameters aan',
        },
      ],
    },
  ],
};
