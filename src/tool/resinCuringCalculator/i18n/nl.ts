import type { ToolLocaleContent } from '../../../types';
import type { ResinCuringCalculatorUI } from '../ui';

export const content: ToolLocaleContent<ResinCuringCalculatorUI> = {
  slug: 'uv-resin-uithardingscalculator',
  title: 'UV Resin Uithardingstijd Calculator',
  description: 'Bepaal de exacte uithardingstijd voor je resin 3D-prints. Gebaseerd op lampvermogen in watt, resintype en afstand. Professionele technische gids.',
  ui: {
    title: 'UV Resin Uithardingscalculator',
    configLabel: 'CONFIGURATIE',
    brandLabel: 'Apparatuur Merk',
    powerLabel: 'Lampvermogen (W)',
    powerUnit: 'W',
    distanceLabel: 'LED-afstand (cm)',
    distanceUnit: 'cm',
    materialLabel: 'Materiaaltype',
    weightLabel: 'Geschat gewicht (g)',
    weightUnit: 'g',
    ipaCheckbox: 'Gereinigd met Isopropylalcohol?',
    safetyLabel: 'UV VEILIGHEID',
    safetySunglasses: 'Gecertificeerde UV-bril',
    safetyGloves: 'Nitril handschoenen',
    sunglassesTooltip: 'Directe blootstelling aan 405nm kan je netvlies permanent beschadigen.',
    glovesTooltip: 'Half-uitgeharde resin is zeer irriterend. Gebruik altijd bescherming.',
    wavelength: 'Golflengte',
    wavelengthValue: '405 nm',
    statusLabel: 'Status',
    modeLabel: 'Modus',
    modeValue: 'Industrieel',
    curingTime: 'm:s',
    startButton: 'Start/Stop Uithardingscyclus',
    intensityChart: 'UV-intensiteit (Dosis)',
    nearLabel: 'Dichtbij (2cm)',
    farLabel: 'Ver weg (30cm)',
    theoreticalLabel: 'Theoretische dosis',
    yourConfigLabel: 'Jouw configuratie',
    evaporateWarning: 'Laat alcohol verdampen (min. 10 min) om witte vlekken te voorkomen.',
    safeDistance: 'Veilige afstand gedetecteerd voor gelijkmatige uitharding.',
    riskDistance: 'Risico op hittevervorming (Kritieke afstand).',
    optimeStatus: 'Optimaal',
    longStatus: 'Lang',
    fastStatus: 'Snel',
  },
  seo: [
    {
      type: 'title',
      text: 'UV-Resin Uithardingstijd Calculator: Professionele Gids',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bij resin 3D-printen (SLA, DLP of LCD) is <strong>UV-uitharding de essentiële laatste stap</strong> die een zacht, plakkerig onderdeel verandert in een resistent object met verklaarde mechanische eigenschappen. Zonder de juiste na-uitharding zal je print structureel zwak, giftig en onstabiel zijn.',
    },
    {
      type: 'title',
      text: 'Wat is UV-Resin Uitharding?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wanneer een resin 3D-printer klaar is met printen, bevindt het onderdeel zich in wat technici de <strong>"groene staat"</strong> noemen. Hoewel het zijn uiteindelijke vorm heeft, zijn de moleculaire ketens van het polymeer niet volledig vernet. UV-uitharding voltooit de vernetting, elimineert de plakkerigheid en verbetert de hardheid, sterkte en thermische stabiliteit.',
    },
  ],
  faqTitle: 'Veelgestelde vragen',
  bibliographyTitle: 'Referenties',
  faq: [
    {
      question: 'Hoe lang duurt het uitharden van UV-resin?',
      answer: 'Het hangt af van het vermogen van je lamp. Een station van 40W doet er doorgaans 2-4 minuten over voor middelgrote onderdelen, terwijl DIY-lampen met een lager vermogen tot 10 minuten nodig kunnen hebben.',
    },
    {
      question: 'Kan ik resin uitharden met een nagellamp?',
      answer: 'Het is mogelijk als de lamp het 405nm-spectrum dekt, maar deze lampen hebben doorgaans een laag vermogen (6W-12W), waardoor de tijden aanzienlijk worden verlengd en er mogelijk een slechte oppervlakte-uitharding ontstaat.',
    },
    {
      question: 'Is uitharden in water noodzakelijk?',
      answer: 'Niet verplicht, maar zeer aanbevolen (Water Curing). Water blokkeert het contact met zuurstof, wat de oppervlaktepolymerisatie belemmert, wat resulteert in minder plakkerige onderdelen.',
    },
    {
      question: 'Hoe weet ik of de resin goed is uitgehard?',
      answer: 'Het onderdeel moet volledig droog aanvoelen (niet plakkerig), zijn "natte" glans hebben verloren, een lichte kleurverandering vertonen en niet meer de sterke geur van vloeibare resin hebben.',
    },
    {
      question: 'Waarom wordt mijn transparante resin geel?',
      answer: 'Het is het effect van over-uitharding of een te hoge temperatuur. Gebruik de "Transparant" factor in onze calculator om de tijd te verkorten en houd de LED\'s op ten minste 5 cm afstand.',
    },
  ],
  bibliography: [
    {
      name: 'Formlabs - Na-uitharding van resin-prints',
      url: 'https://formlabs.com/blog/how-to-post-cure-3d-prints/',
    },
    {
      name: 'E3D-Online: Wetenschap van UV-uitharding',
      url: 'https://e3d-online.com/pages/resin-printing-guide',
    },
  ],
  howTo: [
    {
      name: 'Configureer je apparatuur',
      text: 'Selecteer je type UV-machine en pas het vermogen aan in watt.',
    },
    {
      name: 'Pas fysieke parameters aan',
      text: 'Geef de afstand tussen de LED\'s en het onderdeel op, evenals het resintype en het geschatte gewicht.',
    },
    {
      name: 'Start uitharding',
      text: 'Gebruik de berekende tijd als richtlijn en houd je onderdeel tijdens het proces in de gaten.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Hoe lang duurt het uitharden van UV-resin?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Een station van 40W doet er doorgaans 2-4 minuten over voor middelgrote onderdelen, terwijl lampen met een lager vermogen tot 10 minuten nodig kunnen hebben.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'UV-Resin Uithardingscalculator',
      description: 'Bepaal de exacte uithardingstijd voor je resin 3D-prints op basis van lampvermogen, afstand en materiaaltype.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Uithardingstijd van UV-resin berekenen',
      step: [
        {
          '@type': 'HowToStep',
          text: 'Configureer je apparatuur',
        },
        {
          '@type': 'HowToStep',
          text: 'Pas fysieke parameters aan',
        },
      ],
    },
  ],
};
