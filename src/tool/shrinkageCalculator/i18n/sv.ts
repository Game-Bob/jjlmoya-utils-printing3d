import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ShrinkageCalculatorUI } from '../ui';

const slug = 'kalkylator-3d-utskrift-krympning';
const title = '3D krympkalkylator: Skalfaktor och krympning';
const description = 'Beräkna hur mycket du bör skala dina 3D-designer baserat på materialet (ABS, Nylon, ASA) för att kompensera för termisk krympning och få exakta mått.';

const faqData = [
  {
    question: 'Varför krymper ABS mer än PLA?',
    answer: 'ABS är en amorf polymer som kräver högre temperaturer för att extruderas. När det svalnar från 250°C till rumstemperatur är temperaturskillnaden större, vilket gör att molekylerna packas ihop mer aggressivt än i PLA.',
  },
  {
    question: 'När ska jag använda manuell kalibrering?',
    answer: 'Du bör använda det varje gång du byter filamentmärke eller när du behöver mekaniska toleranser under 0,1 mm. Krympningskoefficienten kan variera även mellan olika färger av samma märke.',
  },
  {
    question: 'Påverkar infill krympningen?',
    answer: 'Ja. Ju högre infill-densitet, desto större mängd material utövar kraft mot delens mitt medan den svalnar. Solida delar tenderar att krympa något mer än ihåliga delar.',
  },
];

const howToData = [
  {
    name: 'Välj ditt material',
    text: 'Välj bland förinställda material (ABS, ASA, Nylon, etc.) för att tillämpa koeffizienter enligt branschstandard.',
  },
  {
    name: 'Kalibrera med en verklig del',
    text: 'Om du behöver total precision, skriv ut en 100mm kub, mät den när den har svalnat och ange data i kalibreringsläget.',
  },
  {
    name: 'Kopiera faktorn till Slicern',
    text: 'Kopiera den resulterande skalningsprocenten och tillämpa den på motsvarande axlar i din slicer-mjukvara (Cura, PrusaSlicer).',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowToThing> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'SEK' },
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<ShrinkageCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    tabPresets: 'Materialinställningar',
    tabCalibration: 'Manuell kalibrering',
    labelDefaultMaterial: 'Standardmaterial',
    labelEstimatedShrinkage: 'Uppskattad krympning',
    unitPercent: '%',
    labelDesignSize: 'Designmått (Slicer)',
    labelRealSize: 'Mått på utskriven del (Verkligt)',
    unitMm: 'mm',
    labelAxesCompensation: 'Axelkompensation',
    labelAxisXY: 'X/Y',
    labelAxisZ: 'Z',
    textZWarning: '* Z-axeln krymper vanligtvis mindre på grund av vidhäftning mellan lagren.',
    labelRecommendationTitle: 'Teknisk rekommendation',
    labelResultSlicerScale: 'SKALNINGSPROCENT (SLICER)',
    labelResultFactor: 'MULTIPLIKATORFAKTOR',
    btnCopy: 'Kopiera procent',
    btnCopied: 'Kopierad!',
    recommendations: {
      'ABS': 'En kammartemperatur på minst 40°C rekommenderas för att minimera ytterligare deformation (warping) på grund av krympning.',
      'ASA': 'Utmärkt UV-beständighet. Minska lagerkylningen för att förbättra den strukturella vidhäftningen.',
      'Nylon': 'Mycket hygroskopiskt material. Torka vid 80°C i 6-8 timmar före utskrift för att undvika bubblor.',
      'PETG': 'Mindre krympning. Använd en flödesmultiplikator på 95-98 % om du har över-extrudering i solida delar.',
      'PLA': 'Minimal krympning. Säkerställ ett bra luftflöde (100% lagerfläkt) för fina detaljer.'
    }
  },
  seo: [
    {
      type: 'title',
      text: '3D-krympkalkylator: Dimensionell noggrannhet',
      level: 1,
    },
    {
      type: 'paragraph',
      html: 'Om du är en entusiast av <strong>3D-utskrifter</strong> har du troligen stött på detta problem: du designar en del med perfekta mått (till exempel en 20x20x20 mm kub), du skriver ut den, och när du mäter den med skjutmåttet upptäcker du att den mäter 19,7 mm. Vad hände? Svaret är <strong>materialkrympning</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Krympning är ett oundvikligt fysiskt fenomen som uppstår när termoplaster går från sitt smälta tillstånd (vid höga temperaturer) till sitt fasta tillstånd vid rumstemperatur. När de svalnar omorganiseras molekylerna och ”dras ihop”, vilket minskar delens totala volym. Vår <strong>krympkalkylator</strong> är utformad för att hjälpa dig att förutsäga denna förändring och justera skalan i din slicer så att dina delar passar på första försöket.',
    },
    {
      type: 'title',
      text: 'Varför krymper plast?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Vid FDM-utskrift (Fused Deposition Modeling) deponerar vi lager av varm plast (mellan 200°C och 300°C) på en yta. När materialet svalnar genomgår det vad som kallas <strong>termisk expansionskoefficient</strong>. I grund och botten håller termisk energi molekylerna åtskilda; när den energin försvinner drar intermolekylära krafter dem närmare varandra.',
    },
    {
      type: 'paragraph',
      html: 'Alla material beter sig inte likadant. Amorfa plaster (som PLA) har en oordnad struktur som tenderar att krympa mindre. Däremot har plaster som tenderar att kristallisera eller kräver mycket höga temperaturer (som ABS eller Nylon) en mycket mer aggressiv och svårkontrollerad krympning.',
    },
    {
      type: 'title',
      text: 'Vanliga material och deras krympintervall',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'ABS (akrylnitril-butadien-styren): 0,8 % – 2,0 %. Det är ett av de svåraste materialen på grund av dess höga krympning, som ofta orsakar ”warping” (hörndeformation).',
        'ASA: 0,5 % – 0,9 %. Ett UV-beständigt alternativ till ABS med något mer kontrollerad krympning.',
        'Nylon (PA): 0,7 % – 2,5 %. Beroende på om det innehåller kolfiber eller glasfiber kan dess krympning variera drastiskt.',
        'PETG: 0,2 % – 0,5 %. Mycket dimensionellt stabilt, perfekt för mekaniska delar som inte kräver termisk resistivitet som ABS.',
        'PLA: 0,1 % – 0,3 %. Guldstandarden för användarvänlighet; dess krympning är nästan försumbar för de flesta användningsområden.',
      ],
    },
    {
      type: 'title',
      text: 'Hur man beräknar skalfaktorn',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Många användare gör misstaget att bara ”lägga till procentandelen” (om 2 % saknas, skalar de till 102 %). Matematiskt sett måste skalan vara något annorlunda för att kompensera för en förlust. Den korrekta formeln som används av vår kalkylator är: <br><strong>Skalfaktor = 1 / (1 - S)</strong>',
    },
    {
      type: 'paragraph',
      html: 'Där <strong>S</strong> är krympningsprocenten uttryckt i decimaler (t.ex. 0,02 för 2 %). För ett material som krymper 2 % är till exempel skalfaktorn 1,0204, vilket innebär att vi i slicern (Cura, PrusaSlicer, Bambu Studio) måste ställa in skalan till <strong>102,04 %</strong>.',
    },
    {
      type: 'title',
      text: 'Manuell kalibrering: Önskat mått mot verkligt mått',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Den omvända kalibreringsprocessen är enkel: skriv ut ett testobjekt med ett känt mått (t.ex. en 100mm kalibreringskub). När det är helt kallt (att vänta minst 30 minuter är avgörande), mät delen med ett digitalt skjutmått. Ange båda värdena i kalkylatorn så ger den dig den exakta justeringsprocenten för den filamentrullen.',
    },
    {
      type: 'title',
      text: 'Icke-enhetlig krympning: Problemet med X-, Y- och Z-axlarna',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Inom 3D-utskrift är fysiken inte densamma i alla riktningar. Eftersom lager deponeras ovanpå varandra begränsar lagrens <strong>vidhäftning</strong> i Z-axeln vanligtvis den vertikala krympningen. Normalt kommer du att märka att mått i horisontalplanet (X- och Y-axlarna) kräver mer kompensation än höjden (Z-axeln).',
    },
    {
      type: 'tip',
      title: 'Proffstips',
      html: '<p>Om du arbetar med nylon eller tekniska material, mät alltid delen 24 timmar efter utskrift. Vissa plaster absorberar omgivande fukt och kan ”svälla” något efter avkylning, vilket ändrar det slutliga måttet.</p>',
    },
    {
      type: 'title',
      text: 'Faktorer som påverkar den slutliga noggrannheten',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Extrudertemperatur: Vid högre temperaturer kommer materialet mer expanderat men utsätts vanligtvis också för mer plötslig avkylning.',
        'Bäddtemperatur: En varm bädd förhindrar att delens bas krymper snabbare än toppen, vilket minskar warping.',
        'Infill-densitet: Mycket täta delar har mer plastmassa som utövar intern krympkraft mot centrum.',
        'Lagerfläkt: I material som ABS kan en för kraftig fläkt orsaka sprickor och överdriven, oregelbunden krympning.',
      ],
    },
  ],
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Referenser',
  bibliography: [
    {
      name: 'Simplify3D: Dimensionell noggrannhet och krympning',
      url: 'https://www.simplify3d.com/resources/print-quality-troubleshooting/dimensional-accuracy/',
    },
    {
      name: 'Prusa Research: Materialtabell och krympningsfaktorer',
      url: 'https://help.prusa3d.com/materials',
    },
    {
      name: 'MatterHackers: Förstå krympning i 3D-utskriftsmaterial',
      url: 'https://www.matterhackers.com/articles/how-to-fix-shrinkage-and-warping',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
