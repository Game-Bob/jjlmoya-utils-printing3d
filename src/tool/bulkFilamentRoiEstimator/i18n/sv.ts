import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BulkFilamentRoiEstimatorUI } from '../ui';

const slug = 'bulkfilament-avkastningsberaknare';
const title = 'Bulkfilament ROI Kalkylator';
const description = 'Jamfor 1kg filament spolar med 3kg, 5kg eller anpassade bulk spolar inklusive fuktrisk, verklig besparing och lokal valutaformatering.';

const faqData = [
  {
    question: 'Ar en 5kg filament spole alltid billigare an att kopa fem 1kg spolar?',
    answer: 'Nej. Den ar bara billigare om kostnaden per gram ar lagre och du kan forbruka materialet innan fukt forsamrar utskriftskvaliteten. Langsam forbrukning kan gora ett bulkrabatt till sloseri.',
  },
  {
    question: 'Varfor subtraherar kalkylatorn en riskstraff?',
    answer: 'Straffen uppskattar vardeforlusten nar den forvantade forbrukningstiden overstiger ditt sakra forvaringsfönster. Det ar inte en valutaomvandling eller en laboratoriefuktsmodell; det ar en justering av planeringsrisk.',
  },
  {
    question: 'Behover jag levande valutakurser?',
    answer: 'Nej. Verktyget anvander en lokal ungefarstabell for att omvandla synliga priser nar du vaxlar valuta. Det bevarar likvardighet utan att kontakta en server, sa slutgiltiga kopbeslut bor fortfarande baseras pa priset som din butik eller bank visar.',
  },
  {
    question: 'Vilken saker forvaringstid ska jag ange for PLA, PETG, TPU eller Nylon?',
    answer: 'Anvand den period under vilken du kan halla det specifika materialet torrt i din miljo. PLA tolererar kanske langre forvaring an Nylon eller TPU, men ett oppet rum, fuktigt klimat eller dalig forsegling kan dramatiskt forkorta det sakra fonstret.',
  },
];

const howToData = [
  {
    name: 'Ange standard spolpris',
    text: 'Skriv priset pa 1kg spolen du normalt skulle kopa. Standard spolvikten kan justeras om din leverantor anvander ett annat format.',
  },
  {
    name: 'Ange bulkerbjudandet',
    text: 'Valj 3kg, 5kg eller en anpassad vikt och skriv fulla priset for den storre spolen i samma valuta.',
  },
  {
    name: 'Modellera forvaringsrisk',
    text: 'Lagg till din manatliga forbrukning och den maximala forvaringstid du litar pa innan fukt, sprohet eller torkningsarbete blir en verklig kostnad.',
  },
  {
    name: 'Las den verkliga besparingen',
    text: 'Anvand den verkliga besparingssiffran som kopsignal eftersom den inkluderar bade bulkrabatten och degraderingsstraffen.',
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

const howToSchema: WithContext<HowTo> = {
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<BulkFilamentRoiEstimatorUI> = {
  slug,
  title,
  description,
  ui: {
    currencyLabel: 'Valuta',
    unitSystemLabel: 'Enheter',
    metricLabel: 'Metriskt',
    imperialLabel: 'Imperie',
    standardTitle: 'Standard spole',
    bulkTitle: 'Bulk spole',
    consumptionTitle: 'Forbrukning och forvaring',
    standardWeightLabel: 'Standard vikt',
    standardPriceLabel: 'Standard spolpris',
    bulkWeightLabel: 'Bulk vikt',
    bulkPresetThreeMetricLabel: '3 kg',
    bulkPresetFiveMetricLabel: '5 kg',
    bulkPresetThreeImperialLabel: '6,6 lb',
    bulkPresetFiveImperialLabel: '11 lb',
    otherWeightLabel: 'Annat',
    bulkPriceLabel: 'Bulk spolpris',
    customWeightLabel: 'Anpassad bulk vikt',
    monthlyUseLabel: 'Manatlig forbrukning',
    safeStorageLabel: 'Sakert forvaringsfonster',
    kgUnit: 'kg',
    lbUnit: 'lb',
    monthsUnit: 'manader',
    realSavingsLabel: 'Verklig besparing efter risk',
    grossSavingsLabel: 'Bruttobesparing',
    riskPenaltyLabel: 'Fuktriskstraff',
    breakEvenLabel: 'Forbrukningstid',
    viabilityLabel: 'Barkraft',
    tableMetricLabel: 'Metriskt',
    tableStandardLabel: '1kg spole',
    tableStandardImperialLabel: '2,2lb spole',
    tableBulkLabel: 'Bulk spole',
    costPerGramMetric: 'Kostnad per gram',
    costPerOunceMetric: 'Kostnad per uns',
    totalSpoolMetric: 'Spolpris',
    usableWindowMetric: 'Forbrukningsfonster',
    profitableLabel: 'Lonsamt',
    neutralLabel: 'Neutralt',
    poorLabel: 'Dalipt varde',
    humidityWarningTitle: 'Fuktnedbrytningsrisk',
    humidityWarning: 'Nedbrytningsrisk: att kopa denna spole kan forlora pengar om du inte har ett torkningssystem eller lufttat forvaring.',
    safeMessage: 'Forvaringsrisken ligger inom ditt valda sakra fonster. Hall spolen forseglad och torr for att bevara den forvantade besparingen.',
  },
  seo: [
    {
      type: 'title',
      text: 'Hur du bestammer om bulkfilament verkligen ar billigare',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En 3kg eller 5kg filament spole ser attraktiv ut eftersom priset per kilogram vanligtvis ar lagre an en enskild 1kg spole. Misstaget ar att bara jamfora totalsumman i kassan. En korrekt jamforelse normaliserar bada erbjudandena till <strong>kostnad per gram</strong>, multiplicerar skillnaden med den mangd material du faktiskt kommer att kopa, och fragar sedan om materialet forblir utskrivbart tills du har forbrukat det.',
    },
    {
      type: 'paragraph',
      html: 'Grundformeln ar enkel: dela varje spolpris med dess vikt i gram. Om en 1kg spole kostar 24.99 och en 5kg spole kostar 89.99, kostar 1kg spolen 0.02499 per gram och bulk spolen 0.017998 per gram. Den skenbara besparingen ar grams skillnaden multiplicerad med 5000 gram. Den siffran ar anvandbar, men den ar fortfarande ofullstandig om spolen kommer att ligga oppen i manader.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '1000g', label: 'Referensmassa for en vanlig skrivbordsfilament spole' },
        { value: '3-5kg', label: 'Typiskt bulkformat dar rabatter blir synliga' },
        { value: '0 API', label: 'Valutajamforelse anvander lokala ungefarstal i stallet for en live serveranrop' },
      ],
    },
    {
      type: 'table',
      headers: ['Fraga', 'Vad du ska ange', 'Varfor det ar viktigt'],
      rows: [
        ['Vad koper jag normalt?', 'Priset for 1kg spolen', 'Detta satter baskostnaden per gram.'],
        ['Vad ar bulkerbjudandet?', 'Totalt pris och bulk vikt', 'Detta skapar den rabatterade kostnaden per gram.'],
        ['Hur snabbt skriver jag ut?', 'Kg forbrukade per manad', 'Detta uppskattar hur lange spolen kommer att forvaras.'],
        ['Hur bra ar min forvaring?', 'Sakra manader innan nedbrytning', 'Detta definierar nar riskstraffen borjar.'],
      ],
    },
    {
      type: 'title',
      text: 'Varfor fukt forandrar ROI-berakningen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Filament ar inte en kontantekvivalent som sitter sakert pa en hylla. Mang polymerer absorberar fukt fran luften, och vat filament kan skriva ut med bubblor, tradning, spro extrahering, grona ytor, svag lagerhaftning och inkonsekvent flode. Den exakta hastigheten beror pa material, fuktighet, forpackning och om spolen forvaras i en torr lada, forseglad pase eller oppen hallare.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Det dolda bulk spole feltillstandet',
      badge: 'Planeringsrisk',
      html: 'En 5kg spole kan vara ett dalipt kop aven nar priset per gram ar utmarkt. Om din skrivare forbrukar 0.5kg per manad och ditt sakra forvaringsfonster ar 3 manader, behover den spolen cirka 10 manader att forbruka. Rabatten maste vara tillrackligt stor for att tacka de extra torknings-, forseglings- och misslyckade utskriftskostnaderna eller risken for avfallsmaterial.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Snabb anvandare',
          description: 'En liten utskriftsfarm, cosplay-byggare eller produktionsbatch kan snabbt forbruka 3kg till 5kg. Bulkfilament ar vanligtvis vettigt eftersom forvaringstiden ar kort.',
          points: ['Hog manatlig anvandning', 'Kort exponering pa hyllan', 'Rabatt blir verkliga pengar sparade'],
        },
        {
          title: 'Tillfallig hobbyanvandare',
          description: 'En anvandare som skriver ut pa helger eller for tillfalliga reparationer kan ta manga manader att avsluta en stor spole. Fuktrisk kan utplana rabatten.',
          points: ['Lag manatlig anvandning', 'Langa livslangd oppen', 'Torr forvaring ar viktigare'],
        },
        {
          title: 'Teknisk materialanvandare',
          description: 'Material som Nylon, TPU, PC-blandningar och vissa PETG-kvaliteter kraver ofta striktare torkningsdisciplin. Bulk kop bor kombineras med forvaringsutrustning.',
          points: ['Hogre fuktkanslighet', 'Torr lada rekommenderas', 'Strafftroskel bor vara konservativ'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Vad den verkliga besparingssiffran betyder',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Verktyget visar forst bruttobesparingen och subtraherar sedan en degraderingsstraff nar den uppskattade forbrukningstiden overstiger det sakra forvaringsfonstret. Denna straff ar medvetet konservativ snarare an en laboratorieforutsagelse. Den representerar den ekonomiska verkligheten att vat eller aldrat filament ofta skapar icke-uppenbara kostnader: torkningsel, extra hantering, misslyckade utskrifter, igensatta munstycken, ytdefekter och mojligheten att en del av spolen blir olamplig for synligt eller strukturellt arbete.',
    },
    {
      type: 'list',
      items: [
        'Positiv verklig besparing innebar att bulkrabatten overlever justeringen av forvaringsrisken.',
        'Neutral innebar att beslutet beror pa bekvamlighet, tillgang pa farg, frakt och om du redan ager en torr lada.',
        'Dalipt varde innebar att bulk spolen antingen inte ar billigare per gram eller att den riskjusterade besparingen ar negativ.',
        'Varningsmeddelandet visas nar forbrukningsmanaderna ar storre an ditt angivna sakra forvaringsfonster.',
      ],
    },
    {
      type: 'proscons',
      title: 'Avvagningar for bulkfilamentkop',
      items: [
        { pro: 'Lagre kostnad per gram for hogvolymutskrift.', con: 'Mer kapital last i ett material, en farg och en leverantorsbatch.' },
        { pro: 'Farre spolbyten under langa produktionskorningar.', con: 'En storre exponerad massa kan brytas ner innan den forbrukas.' },
        { pro: 'Mindre forpackningsavfall per kilogram.', con: 'Stora spolar kan behova starkare hallare eller externa spolstatir.' },
        { pro: 'Anvandbart for repetitiva farmjobb och batchproduktion.', con: 'Dalipt val for sallsynta farger, experimentella material eller langsamt hobbybruk.' },
      ],
    },
    {
      type: 'title',
      text: 'Hur du valjer ett sakert forvaringsfonster',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Det sakra forvaringsfonstret ar inte en universell materialkonstant. Det ar den tid du personligen litar pa att filamentet forblir utskrivbart under dina forvaringsforhallanden. En forseglad pase med farsk torkmedel i ett torrt rum ar mycket annorlunda an en oppen spole bredvid en skrivare i ett fuktigt garage. For ett konservativt kopbeslut, ange antalet manader efter vilket du skulle borja torka spolen innan viktiga utskrifter.',
    },
    {
      type: 'table',
      headers: ['Situation', 'Foreslaget planeringsbeteende', 'Anledning'],
      rows: [
        ['Öppen spolehallare i fuktigt rum', 'Anvand ett kort saker fonster', 'Fuktexponeringen ar kontinuerlig.'],
        ['Lufttat lada med torkmedel', 'Anvand ett langre saker fonster', 'Spolen ar skyddad mellan utskrifterna.'],
        ['Torr lada som matar skrivaren', 'Anvand ett langre men realistiskt fonster', 'Bade utskrift och forvaring ar kontrollerade.'],
        ['Nylon, TPU, PC eller losligt stod', 'Var konservativ', 'Dessa material kan bli utskriftsproblematiska snabbt nar de ar vata.'],
        ['PLA som anvands for grova prototyper', 'Riskttoleransen kan vara hogre', 'Mindre kosmetiska problem kan vara acceptabla for icke-kritiska delar.'],
      ],
    },
    {
      type: 'tip',
      title: 'Anvand kalkylatorn innan rean slutar',
      html: 'Blixtrabatter far ofta bulk spolar att kannas brdskande. Ange reapriset, frakt inkluderat om mojligt, och din realistiska manatliga anvandning. Om forbrukningstiden ar langre an ditt forvaringsfonster maste rean vara tillrackligt stark for att tacka den okade risken.',
    },
    {
      type: 'title',
      text: 'Valutaomvandling utan vaxelkurs-API',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Denna kalkylator ar utformad for att vara klientsidig. Den hamtar inte levande vaxelkurser, men valutavaljaren tillampar anda en lokal omvandlingsmultiplikator nar anvandaren vaxlar valuta. Det innebar att en spole angiven som 24.99 EUR blir en ungefar likvardig i USD, GBP, JPY eller en annan vald valuta istallet for att bara ersatta symbolen. Kurserna ar planeringsuppskattningar, sa kassapriser, kortavgifter, skatter och marknadsspecifika omvandlingsskillnader bor fortfarande kontrolleras innan kop.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Kostnad per gram', definition: 'Spolpriset delat med totala filamentgram. Detta ar den normaliserade enheten som anvands for rattvis jamforelse.' },
        { term: 'Bruttobesparing', definition: 'Prisfordelen innan fukt- eller forvaringsrisk beaktas.' },
        { term: 'Riskstraff', definition: 'Ett planeringsavdrag som tillampas nar spolen tar langre tid att forbruka an det sakra forvaringsfonstret.' },
        { term: 'Verklig besparing', definition: 'Bruttobesparing minus riskstraffen. Detta ar den viktigaste kopsignalen.' },
        { term: 'Forbrukningsfonster', definition: 'Bulk spolvikt delat med uppskattad manatlig anvandning.' },
      ],
    },
    {
      type: 'summary',
      title: 'Praktisk kopregel',
      items: [
        'Kop bulk nar den verkliga besparingen ar tydligt positiv och forbrukningsfonstret passar din forvaringsuppstallning.',
        'Undvik bulk nar du koper en sallsynt farg som kommer att ligga oanvand efter ett projekt.',
        'Behandla torkningsutrustning som en del av bulkfilamentsystemet, inte som en valfri lyx for fuktkansliga polymerer.',
        'Jamfor levererade priser, inte bara produktsidans priser, nar frakten skiljer sig mellan spolstorlekar.',
      ],
    },
    {
      type: 'message',
      title: 'Slutsats',
      html: 'En bulk spole ar lonsam nar tre villkor sammanfaller: lagre kostnad per gram, tillracklig manatlig forbrukning och forvaring som haller filamentet utskrivbart. Om ett villkor misslyckas kan den skenbara rabatten bli en forkledd materialforlust.',
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
