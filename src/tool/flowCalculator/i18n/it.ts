import type { ToolLocaleContent } from '../../../types';
import type { FlowCalculatorUI } from '../ui';

export const content: ToolLocaleContent<FlowCalculatorUI> = {
  slug: 'calcolatore-flusso-volumetrico',
  title: 'Flusso Volumetrico: Capire i Reali Limiti di Velocità della tua Stampante 3D',
  description: 'Calcola la portata volumetrica massima della tua stampante 3D. Comprendi i reali limiti hardware del tuo hotend.',
  ui: {
    title: 'Calcolatore Flusso Volumetrico',
    autoAdjust: 'AUTOREGOLAZIONE 120%',
    configLabel: 'CONFIGURAZIONE',
    nozzleLabel: 'UGELLO',
    lineWidthLabel: 'LARGHEZZA LINEA',
    layerHeightLabel: 'ALTEZZA STRATO',
    speedLabel: 'VELOCITÀ',
    temperatureLabel: 'TEMPERATURA',
    materialLabel: 'MATERIALE',
    hotendLimitLabel: 'LIMITE HOTEND',
    hotendTooltip: 'Capacità di fusione base dell\'hardware senza considerare materiale o temperatura.',
    presetEnder: 'Standard MK8/V6. Zona di fusione corta.',
    presetBambu: 'Hotend ceramico ad alta velocità.',
    presetVolcano: 'Zona di fusione extra-lunga da 21mm.',
    presetHF: 'Estrusori kustom ad altissime prestazioni.',
    baseLimitLabel: 'LIMITE BASE',
    resetButton: 'Reimposta valori',
    volumetricFlowLabel: 'FLUSSO VOLUMETRICO REALE',
    maxSpeedLabel: 'VELOCITÀ MASSIMA',
    statusLabel: 'STATO',
    safeStatus: 'SICURO',
    stratifiedLabel: 'PRESTAZIONI STRATIFICATE',
    chartHeightLabel: 'ALTEZZA STRATO (MM)',
    chartSpeedLabel: 'LIMITE VELOCITÀ (MM/S)',
    chartSafeLabel: 'INTERVALLO SICURO',
    copyButton: 'COPIA LIMITE EFFETTIVO',
  },
  seo: [
    {
      type: 'title',
      text: 'Flusso Volumetrico: Capire i Reali Limiti di Velocità della tua Stampante 3D',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Nella stampa 3D FDM, il <strong>flusso volumetrico</strong> è il fattore che determina quanto velocemente puoi stampare prima che l\'hardware fallisca. Mentre le velocità dei motori possono sembrare impressionanti, è la capacità del tuo hotend di fondere la plastica in modo costante che conta davvero.',
    },
    {
      type: 'title',
      text: 'Cos\'è il Flusso Volumetrico (mm³/s)?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'È il volume totale di filamento estruso al secondo. Si calcola moltiplicando tre variabili chiave: velocità di stampa, larghezza della linea e altezza dello strato. Se provi a estrudere più plastica di quella che il tuo blocco riscaldante può fondere, andrai incontro alla temuta <strong>sottoestrusione</strong>.',
    },
  ],
  faqTitle: 'Domande Frequenti',
  bibliographyTitle: 'Riferimenti',
  faq: [
    {
      question: 'Qual è il flusso massimo della mia stampante?',
      answer: 'Dipende interamente dal tuo hotend. Un hotend standard (tipo V6) fonde tipicamente tra 10 e 12 mm³/s. Modelli ad alto flusso come Volcano o Revo High Flow raggiungono i 30-35 mm³/s.',
    },
    {
      question: 'Perché il PETG scorre più lentamente del PLA?',
      answer: 'Il PETG ha una viscosità molto più alta quando fuso. Ciò significa che offre più resistenza passando attraverso l\'ugello, quindi il suo limite di flusso effettivo è tipicamente più basso del 15% rispetto al PLA alla stessa temperatura.',
    },
    {
      question: 'In che modo la larghezza della linea influenza il flusso?',
      answer: 'La larghezza della linea è il moltiplicatore più diretto insieme all\'altezza dello strato. Se passi da 0,4mm a 0,6mm di larghezza alla stessa velocità, stai richiedendo il 50% di flusso in più al tuo estrusore.',
    },
  ],
  bibliography: [
    {
      name: 'E3D-Online: Portata e limiti di velocità',
      url: 'https://e3d-online.com/pages/revo-high-flow-volumetric-flow-rate-calculator',
    },
    {
      name: 'OrcaSlicer Wiki: Calibrazione',
      url: 'https://github.com/OrcaSlicer/OrcaSlicer/wiki/Calibration',
    },
    {
      name: 'Bambu Lab: Calibrazione Portata Flusso',
      url: 'https://wiki.bambulab.com/en/software/bambu-studio/calibration_flow_rate',
    },
  ],
  howTo: [
    {
      name: 'Configura il tuo hardware',
      text: 'Seleziona il diametro dell\'ugello e scegli un preset di hotend popolare.',
    },
    {
      name: 'Regola i tuoi parametri',
      text: 'Sposta i cursori per la larghezza della linea, l\'altezza dello strato e la velocità di stampa.',
    },
    {
      name: 'Copia il valore',
      text: 'Copia il valore del flusso massimo e usalo nel tuo slicer.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Qual è il flusso massimo della mia stampante?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Dipende interamente dal tuo hotend. Un hotend standard fonde tipicamente tra 10 e 12 mm³/s.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Calcolatore Flusso Volumetrico',
      description: 'Calcola la portata volumetrica massima della tua stampante 3D.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Come calcolare il flusso volumetrico',
      step: [
        {
          '@type': 'HowToStep',
          text: 'Configura il tuo hardware',
        },
        {
          '@type': 'HowToStep',
          text: 'Regola i tuoi parametri',
        },
      ],
    },
  ],
};
