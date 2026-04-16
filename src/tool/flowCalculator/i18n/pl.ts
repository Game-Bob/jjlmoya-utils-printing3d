import type { ToolLocaleContent } from '../../../types';
import type { FlowCalculatorUI } from '../ui';

export const content: ToolLocaleContent<FlowCalculatorUI> = {
  slug: 'kalkulator-przeplywu-objetosciowego',
  title: 'Przepływ Objętościowy: Zrozumienie Rzeczywistych Limitów Prędkości Twojej Drukarki 3D',
  description: 'Oblicz maksymalny objętościowy natężenie przepływu swojej drukarki 3D. Zrozum rzeczywiste ograniczenia sprzętowe swojego hotendu.',
  ui: {
    title: 'Kalkulator Przepływu Objętościowego',
    autoAdjust: 'AUTO DOPASOWANIE 120%',
    configLabel: 'KONFIGURACJA',
    nozzleLabel: 'DYSZA',
    lineWidthLabel: 'SZEROKOŚĆ LINII',
    layerHeightLabel: 'WYSOKOŚĆ WARSTWY',
    speedLabel: 'PRĘDKOŚĆ',
    temperatureLabel: 'TEMPERATURA',
    materialLabel: 'MATERIAŁ',
    hotendLimitLabel: 'LIMIT HOTENDU',
    hotendTooltip: 'Podstawowa zdolność topnienia sprzętu bez uwzględnienia materiału lub temperatury.',
    presetEnder: 'Standard MK8/V6. Krótka strefa topnienia.',
    presetBambu: 'Szybki hotend ceramiczny.',
    presetVolcano: 'Bardzo długa strefa topnienia 21mm.',
    presetHF: 'Niestandardowe ekstrudery o ultra-wysokiej wydajności.',
    baseLimitLabel: 'LIMIT PODSTAWOWY',
    resetButton: 'Resetuj wartości',
    volumetricFlowLabel: 'RZECZYWISTY PRZEPŁYW OBJĘTOŚCIOWY',
    maxSpeedLabel: 'MAKSYMALNA PRĘDKOŚĆ',
    statusLabel: 'STATUS',
    safeStatus: 'BEZPIECZNIE',
    stratifiedLabel: 'WARSTWOWA WYDAJNOŚĆ',
    chartHeightLabel: 'WYSOKOŚĆ WARSTWY (MM)',
    chartSpeedLabel: 'LIMIT PRĘDKOŚCI (MM/S)',
    chartSafeLabel: 'BEZPIECZNY ZAKRES',
    copyButton: 'KOPIUJ EFEKTYWNY LIMIT',
  },
  seo: [
    {
      type: 'title',
      text: 'Przepływ Objętościowy: Zrozumienie Rzeczywistych Limitów Prędkości Twojej Drukarki 3D',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'W druku 3D FDM <strong>przepływ objętościowy</strong> jest czynnikiem, który określa, jak szybko można drukować, zanim sprzęt zawiedzie. Chociaż prędkości silników mogą wydawać się imponujące, najważniejsza jest zdolność Twojego hotendu do stałego topnienia plastiku.',
    },
    {
      type: 'title',
      text: 'Co to jest Przepływ Objętościowy (mm³/s)?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Jest to całkowita objętość filamentu wytłaczanego na sekundę. Oblicza się ją mnożąc trzy kluczowe zmienne: prędkość druku, szerokość linii i wysokość warstwy. Jeśli spróbujesz wytłaczać więcej plastiku, niż Twój blok grzejny jest w stanie stopić, napotkasz przerażającą <strong>niedostateczną ekstruzję (underextrusion)</strong>.',
    },
  ],
  faqTitle: 'Często zadawane pytania',
  bibliographyTitle: 'Referencje',
  faq: [
    {
      question: 'Jaki jest maksymalny przepływ mojej drukarki?',
      answer: 'To zależy wyłącznie od Twojego hotendu. Standardowy hotend (typu V6) typowo topi od 10 do 12 mm³/s. Modele o wysokim przepływie, takie jak Volcano lub Revo High Flow, osiągają 30-35 mm³/s.',
    },
    {
      question: 'Dlaczego PETG płynie wolniej niż PLA?',
      answer: 'PETG ma znacznie wyższą lepkość po stopieniu. Oznacza to, że stawia większy opór podczas przechodzenia przez dyszę, więc jego efektywny limit przepływu jest typowo o 15% niższy niż PLA w tej samej temperaturze.',
    },
    {
      question: 'Jak szerokość linii wpływa na przepływ?',
      answer: 'Szerokość linii jest najbardziej bezpośrednim mnożnikiem wraz z wysokością warstwy. Jeśli przejdziesz z 0,4 mm na 0,6 mm szerokości przy tej samej prędkości, będziesz wymagać o 50% większego przepływu od swojego ekstrudera.',
    },
  ],
  bibliography: [
    {
      name: 'E3D-Online: Natężenie przepływu i limity prędkości',
      url: 'https://e3d-online.com/pages/revo-high-flow-volumetric-flow-rate-calculator',
    },
    {
      name: 'OrcaSlicer Wiki: Kalibracja',
      url: 'https://github.com/OrcaSlicer/OrcaSlicer/wiki/Calibration',
    },
    {
      name: 'Bambu Lab: Kalibracja Natężenia Przepływu',
      url: 'https://wiki.bambulab.com/en/software/bambu-studio/calibration_flow_rate',
    },
  ],
  howTo: [
    {
      name: 'Skonfiguruj swój sprzęt',
      text: 'Wybierz średnicę dyszy i wybierz popularny zestaw ustawień hotendu.',
    },
    {
      name: 'Dostosuj parametry',
      text: 'Przesuń suwaki dla szerokości linii, wysokości warstwy i prędkości druku.',
    },
    {
      name: 'Skopiuj wartość',
      text: 'Skopiuj maksymalną wartość przepływu i użyj jej w swoim slicerze.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Jaki jest maksymalny przepływ mojej drukarki?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Zależy to wyłącznie od Twojego hotendu. Standardowy hotend typowo topi między 10 a 12 mm³/s.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Kalkulator Przepływu Objętościowego',
      description: 'Oblicz maksymalne objętościowe natężenie przepływu swojej drukarki 3D.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Jak obliczyć przepływ objętościowy',
      step: [
        {
          '@type': 'HowToStep',
          text: 'Skonfiguruj swój sprzęt',
        },
        {
          '@type': 'HowToStep',
          text: 'Dostosuj parametry',
        },
      ],
    },
  ],
};
