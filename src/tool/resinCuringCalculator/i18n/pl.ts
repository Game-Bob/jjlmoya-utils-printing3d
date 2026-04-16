import type { ToolLocaleContent } from '../../../types';
import type { ResinCuringCalculatorUI } from '../ui';

export const content: ToolLocaleContent<ResinCuringCalculatorUI> = {
  slug: 'kalkulator-utwardzania-zywicy-uv',
  title: 'Kalkulator Czasu Utwardzania Żywicy UV',
  description: 'Określ dokładny czas utwardzania dla swoich wydruków 3D z żywicy. Na podstawie mocy lampy w watach, rodzaju żywicy i odległości. Profesjonalny przewodnik techniczny.',
  ui: {
    title: 'Kalkulator Utwardzania Żywicy UV',
    configLabel: 'KONFIGURACJA',
    brandLabel: 'Marka Sprzętu',
    powerLabel: 'Moc Lampy (W)',
    powerUnit: 'W',
    distanceLabel: 'Odległość LED (cm)',
    distanceUnit: 'cm',
    materialLabel: 'Rodzaj Materiału',
    weightLabel: 'Szacowana Waga (g)',
    weightUnit: 'g',
    ipaCheckbox: 'Wyczyszczone Alkoholem Izopropylowym?',
    safetyLabel: 'BEZPIECZEŃSTWO UV',
    safetySunglasses: 'Certyfikowane Okulary UV',
    safetyGloves: 'Rękawice Nitrylowe',
    sunglassesTooltip: 'Bezpośrednia ekspozycja na 405nm może trwale uszkodzić siatkówkę oka.',
    glovesTooltip: 'Częściowo utwardzona żywica silnie drażni. Zawsze używaj ochrony.',
    wavelength: 'Długość fali',
    wavelengthValue: '405 nm',
    statusLabel: 'Status',
    modeLabel: 'Tryb',
    modeValue: 'Przemysłowy',
    curingTime: 'm:s',
    startButton: 'Start/Stop Cyklu Utwardzania',
    intensityChart: 'Intensywność UV (Dawka)',
    nearLabel: 'Blisko (2cm)',
    farLabel: 'Daleko (30cm)',
    theoreticalLabel: 'Teoretyczna Dawka',
    yourConfigLabel: 'Twoja Konfiguracja',
    evaporateWarning: 'Odczekaj na odparowanie alkoholu (min. 10 min), aby uniknąć białych plam.',
    safeDistance: 'Wykryto bezpieczną odległość dla jednolitego utwardzania.',
    riskDistance: 'Ryzyko deformacji termicznej (Odległość Krytyczna).',
    optimeStatus: 'Optymalny',
    longStatus: 'Długi',
    fastStatus: 'Szybki',
  },
  seo: [
    {
      type: 'title',
      text: 'Kalkulator Czasu Utwardzania Żywicy UV: Profesjonalny Przewodnik',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'W druku 3D z żywicy (SLA, DLP lub LCD), <strong>utwardzanie UV jest niezbędnym końcowym etapem</strong>, który przekształca miękki, lepki element w wytrzymały obiekt o określonych właściwościach mechanicznych. Bez odpowiedniego utwardzania wtórnego wydruk będzie słaby strukturalnie, toksyczny i niestabilny.',
    },
    {
      type: 'title',
      text: 'Co to jest utwardzanie żywicy UV?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Gdy drukarka 3D z żywicy kończy drukowanie, element znajduje się w stanie, który technicy nazywają <strong>"green state"</strong>. Chociaż ma on swój ostateczny kształt, łańcuchy molekularne polimeru nie są w pełni usieciowane. Utwardzanie UV dopełnia proces usieciowania, eliminując lepkość oraz poprawiając twardość, wytrzymałość i stabilność termiczną.',
    },
  ],
  faqTitle: 'Często zadawane pytania',
  bibliographyTitle: 'Referencje',
  faq: [
    {
      question: 'Jak długo trwa utwardzanie żywicy UV?',
      answer: 'To zależy od mocy Twojej lampy. Stacja 40W zazwyczaj utwardza średnie elementy w 2-4 minuty, podczas gdy lampy DIY o mniejszej mocy mogą wymagać nawet 10 minut.',
    },
    {
      question: 'Czy mogę utwardzać żywicę lampą do paznokci?',
      answer: 'Jest to możliwe, jeśli lampa obsługuje spektrum 405 nm, ale takie lampy mają zazwyczaj niską moc (6W-12W), co znacznie wydłuża czas i może skutkować słabym utwardzeniem powierzchni.',
    },
    {
      question: 'Czy utwardzanie w wodzie jest konieczne?',
      answer: 'Nie jest obowiązkowe, ale bardzo zalecane (Water Curing). Woda blokuje kontakt z tlenem, który hamuje polimeryzację powierzchniową, co skutkuje mniej lepkimi elementami.',
    },
    {
      question: 'Skąd mam wiedzieć, czy żywica jest odpowiednio utwardzona?',
      answer: 'Część powinna być całkowicie sucha w dotyku (nie lepić się), stracić swój "mokry" połysk, wykazywać lekką zmianę koloru i nie mieć już silnego zapachu płynnej żywicy.',
    },
    {
      question: 'Dlaczego moja przezroczysta żywica żółknie?',
      answer: 'Jest to efekt nadmiernego utwardzania lub zbyt wysokiej temperatury. Użyj parametru "Przezroczysty" w naszym kalkulatorze, aby skrócić czas i trzymaj diody LED w odległości co najmniej 5 cm.',
    },
  ],
  bibliography: [
    {
      name: 'Formlabs - Utwardzanie wtórne wydruków z żywicy',
      url: 'https://formlabs.com/blog/how-to-post-cure-3d-prints/',
    },
    {
      name: 'E3D-Online: Nauka o utwardzaniu UV',
      url: 'https://e3d-online.com/pages/resin-printing-guide',
    },
  ],
  howTo: [
    {
      name: 'Skonfiguruj swój sprzęt',
      text: 'Wybierz markę swojej maszyny UV i ustaw moc w watach.',
    },
    {
      name: 'Dostosuj parametry fizyczne',
      text: 'Określ odległość między diodami LED a modelem, rodzaj żywicy oraz szacowaną wagę.',
    },
    {
      name: 'Rozpocznij utwardzanie',
      text: 'Użyj obliczonego czasu jako wskazówki i monitoruj model podczas procesu.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Jak długo trwa utwardzanie żywicy UV?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Stacja 40W zazwyczaj utwardza średnie elementy w 2-4 minuty, podczas gdy lampy o mniejszej mocy mogą wymagać do 10 minut.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Kalkulator Utwardzania Żywicy UV',
      description: 'Określ dokładny czas utwardzania wydruków 3D z żywicy na podstawie mocy lampy, odległości i rodzaju materiału.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Jak obliczyć czas utwardzania żywicy UV',
      step: [
        {
          '@type': 'HowToStep',
          text: 'Skonfiguruj swój sprzęt',
        },
        {
          '@type': 'HowToStep',
          text: 'Dostosuj parametry fizyczne',
        },
      ],
    },
  ],
};
