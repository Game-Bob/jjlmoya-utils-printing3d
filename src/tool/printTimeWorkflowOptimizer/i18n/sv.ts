import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PrintTimeWorkflowOptimizerUI } from '../ui';

const slug = '3d-utskriftstids-optimerare';
const title = 'Optimerare for 3D utskriftstid';
const description =
  'Jaemfoer tvaa FDM-utskriftsinstaellningar: lagertal, korrigerad tid, filamentfoerbrukning, kostnad, kvalitetsavvaegning och varuningar.';

const faqData = [
  {
    question: 'Skillnad mot enkel tidsraeknare?',
    answer:
      'Innehaaller komplexitetsoverhead, retraktionstid per lager, fyllningsvolym, filamentmassa, kostnad och scenarioejaemfoerelse.',
  },
  {
    question: 'Kan den ersaetta slicer-uppskattningar?',
    answer:
      'Nej. Slicer kaenner exakta verktygsbanor. Detta verktyg planerar infoer slicning.',
  },
  {
    question: 'Vad aendrar komplexitetsinstaellningen?',
    answer:
      'Laag/medel/hoeg tillampa overheadkoefficienter foer foerflyttningar, accelerationsfoerluster, hoern och oear.',
  },
  {
    question: 'Varför varnar verktyget oever 100 mm/s?',
    answer:
      'Maanga skrivare kan gaa snabbare aen 100 mm/s men extrudering och kylning goer hoega hastigheter riskabla utan kalibrering.',
  },
];
const howToData = [
  { name: 'Ange modellstorlek och volym', text: 'Laegg till hoejd och volym fraan CAD, slicer eller uppskattning.' },
  { name: 'Justera scenario A', text: 'Vaelj lagerhoejd, hastighet, linjebredd, fyllning, material, komplexitet.' },
  { name: 'Justera scenario B', text: 'Justera andra konfigurationen foer jaemfoerelse.' },
  { name: 'Laes paaverkan', text: 'Jaemfoer tid, filament, kostnad, lager, effektivitet, flode.' },
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
  step: howToData.map((step, i) => ({ '@type': 'HowToStep', position: i + 1, name: step.name, text: step.text })),
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

export const content: ToolLocaleContent<PrintTimeWorkflowOptimizerUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Indata arbetsflode',
    resultsAriaLabel: 'Resultat arbetsflode',
    unitSystemLabel: 'Enheter',
    metricLabel: 'Metriskt',
    imperialLabel: 'US',
    currencyLabel: 'Valuta',
    currencyOptions: [
      { code: 'USD', label: '$', symbol: '$' },
      { code: 'EUR', label: 'EUR', symbol: 'EUR' },
      { code: 'GBP', label: 'GBP', symbol: 'GBP' },
      { code: 'CAD', label: 'C$', symbol: 'C$' },
      { code: 'AUD', label: 'A$', symbol: 'A$' },
      { code: 'CHF', label: 'Fr', symbol: 'Fr' },
      { code: 'CNY', label: 'CNY', symbol: 'CNY' },
      { code: 'INR', label: 'INR', symbol: 'INR' },
      { code: 'BRL', label: 'R$', symbol: 'R$' },
      { code: 'MXN', label: 'MXN', symbol: 'MXN' },
      { code: 'RUB', label: 'RUB', symbol: 'RUB' },
      { code: 'PLN', label: 'PLN', symbol: 'PLN' },
      { code: 'SEK', label: 'SEK', symbol: 'SEK' },
      { code: 'NOK', label: 'NOK', symbol: 'NOK' },
      { code: 'DKK', label: 'DKK', symbol: 'DKK' },
      { code: 'TRY', label: 'TRY', symbol: 'TRY' },
      { code: 'JPY', label: 'JPY', symbol: 'JPY' },
    ],
    scenarioALabel: 'Scenario A',
    scenarioBLabel: 'Scenario B',
    modelHeightLabel: 'Modellhoejd',
    modelVolumeLabel: 'Beraecknat volym',
    layerHeightLabel: 'Lagerhoejd',
    speedLabel: 'Hastighet',
    lineWidthLabel: 'Linjebredd',
    infillLabel: 'Fyllning',
    complexityLabel: 'Komplexitet',
    complexityTooltip: 'Beraecknar dodtid: accelerationer, hoern, retractioner, oear, korta foerflyttningar.',
    pieceTypeLabel: 'Deltyp',
    solidPieceLabel: 'Solid kontinuerlig',
    hollowPieceLabel: 'Ihaolig maanga haolrum',
    materialLabel: 'Material',
    filamentPriceLabel: 'Filamentpris',
    lowComplexity: 'Laag enkla ytor',
    mediumComplexity: 'Medel blandad geometri',
    highComplexity: 'Hoeg maanga oear',
    estimatedTimeLabel: 'Beraecknad tid',
    filamentLabel: 'Filament',
    costLabel: 'Materialkostnad',
    layersLabel: 'Lager',
    efficiencyLabel: 'Effektivitet',
    flowLabel: 'Volymetriskt flode',
    flowTooltip: 'Oever 10-12 mm3/s = risk foer underextrudering.',
    flowUnit: 'mm3/s',
    qualityTradeoffLabel: 'Kvalitetsavvaegning',
    speedReductionLabel: '-10% hastighet',
    speedReductionAddsLabel: 'laegger till',
    speedReductionMinutesLabel: 'min',
    qualityGainLabel: '~8% renare yta',
    hardwareWarning: 'Hastighet >100 mm/s. Kontrollera hotend-flode, kylning, acceleration.',
    flowWarning: 'Flode oever standard hotend komfortzon.',
    bestValueLabel: 'Baesta vaerde',
    timeDeltaLabel: 'Tidsskillnad',
    costDeltaLabel: 'Kostnadsskillnad',
    materialDeltaLabel: 'Materialskillnad',
    winnerBadge: 'Baesta vaerde',
    scenarioPrefix: 'Scenario',
    inScenarioLabel: 'i',
    fasterDirection: 'snabbare',
    cheaperDirection: 'billigare',
    lighterDirection: 'laettare',
    criterionAlignedLabel: 'Anpassat baesta vaerde',
    criterionTradeoffLabel: 'Avvaegning baesta vaerde',
    infoGlyph: 'i',
    metricVolumeUnit: 'cm3',
    imperialVolumeUnit: 'in3',
    gramUnit: 'g',
    ounceUnit: 'oz',
    kilogramUnit: 'kg',
    hourUnit: 'h',
    minuteUnit: 'min',
    millimeterUnit: 'mm',
    metricSpeedUnit: 'mm/s',
    imperialSpeedUnit: 'in/s',
    inchUnit: 'in',
    percentUnit: '%',
    materials: [
      { value: 'pla', label: 'PLA' },
      { value: 'petg', label: 'PETG' },
      { value: 'abs', label: 'ABS' },
      { value: 'asa', label: 'ASA' },
      { value: 'nylon', label: 'Nylon' },
      { value: 'tpu', label: 'TPU' },
    ],
  },
  seo: [
    { type: 'title', text: 'Hur du uppskattar 3D-utskriftstiden innan slicing', level: 2 },
    {
      type: 'paragraph',
      html: 'En anvandbar <strong>3D-utskriftstidsberaknare</strong> kan inte bara vara volym dividerat med hastighet. FDM-skrivare tillbringar tid med att accelerera, sakta ner for horn, dra tillbaka filament, forflytta sig mellan oar, kyla sma lager och aterhamta tryck efter riktningsandringar. Optimeraren modellerar delen som utskrivbar volym, linjebredd, Lagerhojd, hastighet, antal lager och en komplexitetskoefficient sa att tidig planering ligger narmare verkliga arbetsflodesbeslut.',
    },
    {
      type: 'paragraph',
      html: 'Grundextruderingstiden beraknas fran volym dividerat med volymetriskt genomflode: hastighet multiplicerat med linjebredd och Lagerhojd. Sedan tillampar verktyget en korrigeringskoefficient for modellkomplexitet och lagger till ett fast retraktionsutrymme per lager. Detta gors inte anspråk pa slicerprecision, men ger en mer samingsenlig jamforelse mellan en 0,20 mm utkastsinstallation och en 0,12 mm kvalitetsinstallation an en linjar kalkylator.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '1.15x', label: 'Lag komplexitetsoverhead for enkla block och jamma delar', icon: 'mdi:cube-outline' },
        { value: '1.60x', label: 'Hog komplexitetsoverhead for manga oar och retraktioner', icon: 'mdi:vector-polyline' },
        { value: '0.5 s', label: 'Planerat retraktionsutrymme tillagt per lager', icon: 'mdi:timer-outline' },
        { value: '100 mm/s', label: 'Varningstrossel for standardskrivare vid extrusionsrisk', icon: 'mdi:alert-outline' },
      ],
    },
    {
      type: 'tip',
      title: 'Anvand slicervolymen nar mojligt',
      html: '<p>Det basta volyminmatet ar slicer- eller CAD-materialvolymen for modellen, inte den yttre begransningsrutan. Begransningsrutor innehaller tom luft runt kurvor, hal, handtag och haligheter, sa de kan overdriva tid och filament.</p>',
    },
    { type: 'title', text: 'Varfor Lagerhojd forandrar tiden sa starkt', level: 2 },
    {
      type: 'paragraph',
      html: 'Lagerhojd påverkar utskriftstiden pa tva satt. Forst andrar den volymetriskt genomflode: ett 0,12 mm lager vid samma hastighet och bredd extruderar 40% mindre plast per sekund an ett 0,20 mm lager. For det andra okar det antalet lager, sa lagerbytesoverhead, retraktioner, tryckutjamning och kylningsbeslut intraffar oftare. Det ar darfor sma kosmetiska forandringar kan forvandla en femtimmarsskrivning till en attatimmarsskrivning.',
    },
    {
      type: 'table',
      headers: ['Lagerhojd', 'Typisk anvandning', 'Arbetsflodeskonsekvens'],
      rows: [
        ['0,28-0,32 mm', 'Utkastsdelar, stora fixturer, snabba kontroller', 'Lagt antal lager och hogt genomflode, men synliga lagerlinjer.'],
        ['0,18-0,22 mm', 'Allman PLA- och PETG-utskrift', 'Balanserad tid, styrka och ytkvalitet for manga skrivbordsskrivare.'],
        ['0,10-0,14 mm', 'Miniatyrer, bøjda skal, synliga konsumentdelar', 'Mycket langre jobb eftersom genomflodet sjunker och antalet lager okar.'],
        ['Under 0,10 mm', 'Speciella efterbehandlingsfall', 'Ofta begransat av maskinprecision, kylning och avtagande visuell avkastning.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Fina lager kan vara langsammare an formeln antyder',
      badge: 'Kylning och minsta lagertid',
      html: '<p>Sma modeller kan na minsta lagertid i slicern. Nar det hander saktar skrivaren ner for att lata plasten svalna, aven om den volymetriska formeln sager att maskinen kunde rora sig snabbare.</p>',
    },
    {
      type: 'summary',
      title: 'Regler for Lagerhojd',
      items: [
        'Lagre Lagerhojd minskar flodet per sekund vid samma hastighet.',
        'Fler lager lagger till upprepad overhead aven nar modellvolymen ar oforandrad.',
        'Den basta jamforelsen ar scenariobaserad: utkastsprofil mot kvalitetsprofil.',
      ],
    },
    { type: 'title', text: 'Modellkomplexitetsoverhead och dodtid', level: 2 },
    {
      type: 'paragraph',
      html: 'Dodtid ar gapet mellan teoretisk extrudering och den faktiska jobbtiden. En rak vasliknande vag har lite forflyttning och fa retraktioner. Ett mekaniskt kapsling med manga hal, utsprang, etiketter, ribbor och separerade oar tvingar skrivaren att starta och stoppa manga ganger. Accelerationsbegransningar innebar att munstycket kanske aldrig nar kommandorad hastighet pa korta segment, sa den verkliga genomsnittliga forflyttningshastigheten ar lagre an skjutvardet.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: 'Lag komplexitet', description: 'Slata modeller, kontinuerliga konturer, fa oar och begransad intern forflyttning.', icon: 'mdi:shape-outline', points: ['Lagre overhead', 'Stabil hastighet', 'Fa retraktioner'] },
        { title: 'Medel komplexitet', description: 'Vanliga funktionella delar med hal, blandade kurvor, fyllningsandringar och moderat forflyttning.', icon: 'mdi:cog-outline', highlight: true, points: ['Balanserat standard', 'En del forflyttningsforlust', 'Anvandbar offertbaslinje'] },
        { title: 'Hog komplexitet', description: 'Texturerade ytor, manga separerade funktioner, stodgranssnitt och retraktionsintensiva sektioner.', icon: 'mdi:transit-connection-variant', points: ['Hog overhead', 'Storre risk for tradbildning', 'Langre faktisk klottid'] },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Overheadkoefficient', definition: 'En multiplikator som approximerar forflyttningar, accelerationsforluster, retraktioner och annan tid som inte fångas av jamn extrusionsberakning.' },
        { term: 'Volymetriskt flode', definition: 'Mangden plast som trycks genom munstycket per sekund, beraknat som hastighet ganger linjebredd ganger Lagerhojd.' },
        { term: 'Antal lager', definition: 'Modellhojden delat med Lagerhojd, avrundat uppat eftersom delvisa slutlager fortfarande kraver ett pass.' },
        { term: 'Underextrudering', definition: 'En defekt dar munstycket eller extrudern inte kan leverera tillrackligt med smalt plast for den begarda hastigheten och linjegeometrin.' },
      ],
    },
    {
      type: 'message',
      title: 'Behandla komplexitet som en kalibreringsratt',
      ariaLabel: 'Not om komplexitetskoefficient',
      html: '<p>Om din slicer konsekvent rapporterar langre tider an denna optimeerare for liknande modeller, oka komplexiteten. Om din direktdrivna skrivare med justerad acceleration slar uppskattningen, sanka den for framtida planering.</p>',
    },
    { type: 'title', text: 'Filamentforbrukning, kostnad och fyllning', level: 2 },
    {
      type: 'paragraph',
      html: 'Tid ar bara en del av arbetsflodesbeslutet. Filamentvikt och kostnad spelar roll nar man offererar delar, planerar batchjobb eller bestammer om en fin detaljprofil ar vard att binda upp skrivaren. Optimeraren uppskattar korrigerad utskrivbar volym genom att bevara en skal andel och skala det interna omradet efter fyllningsprocent, multiplicerar sedan den volymen med materialdensitet.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Anvand PLA runt 1,24 g/cm³ och PETG runt 1,27 g/cm³ for snabb materialplanering.',
        'Hoj den uppskattade volymen nar stod, kanter, flottar eller rengoringsstrukturer ingar i jobbet.',
        'Lagre fyllning minskar filament och tid, men vaggar, topp- och bottenlager forbruckar fortfarande material.',
        'For produktionsbatcher, jamfor kalkylator uppskattningar med faktisk spole vikt som anvants och justera framtida offerter.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:cash-clock',
      title: 'Exempel pa arbetsflodesbeslut',
      html: '<p>En 120 cm³ PLA-del med 0,20 mm lager kan vara acceptabel for en verkstadsjigg, medan 0,12 mm versionen ser battre ut men upptar skrivaren langre. Att jamfora tid och materialkostnad sida vid sida gor avvagningen synlig innan maskinen binds.</p>',
    },
    {
      type: 'proscons',
      title: 'Optimera hastighet kontra kvalitet',
      items: [
        { pro: 'Hogre hastighet kan frigora skrivarkapacitet for fler jobb per dag.', con: 'Det kan avsloja ringing, svaga horn, dalig kylning och hotend-flodesbegransningar.' },
        { pro: 'Lagre hastighet forbattrar ofta ytfinishen och dimensionsnoggrannheten.', con: 'Det okar kotiden och kan gora sma kommersiella delar mindre lonande.' },
        { pro: 'Lagre Lagerhojd forbattrar bøjda ytor och miniatyrer.', con: 'Det multiplicerar antalet lager och upprepad maskin overhead.' },
      ],
    },
    { type: 'title', text: 'Hardwarevarningar och praktiska hastighetsbegransningar', level: 2 },
    {
      type: 'paragraph',
      html: 'Ett hastighetsvarde i slicern ar ingen garanti for att munstycket kommer att uppratthalla den hastigheten overallt. Standard kartesiska sangslungare, aldre Bowden-extruders, hotends med kort smalzoon och svag delkylning kan ha svarigheter over 100 mm/s om inte acceleration, jerk, pressure advance, temperatur och flodeskalibrering ar justerade. Varningen betyder inte att utskriften kommer att misslyckas; den betyder att den begarda installationen bor kontrolleras mot hardwarebeteendet.',
    },
    {
      type: 'table',
      headers: ['Symptom', 'Trolig orsak', 'Planeringssvar'],
      rows: [
        ['Tunna vaggar eller luckor', 'Munstycket kan inte smalta tillrackligt med plastic eller extrudern halkar', 'Minska hastigheten, oka temperaturen forsiktigt, eller minska linjebredd/Lagerhojd.'],
        ['Ringing nara horn', 'Acceleration och ramvibrationer dominerar', 'Minska accelerationen eller hastigheten for synliga vaggar.'],
        ['Kravela sma funktioner', 'Kylningen hanger inte med', 'Minska hastigheten, oka flakt, eller skriv ut flera kopior.'],
        ['Tradbildning pa komplexa delar', 'Manga forflyttningar och retraktioner', 'Oka komplexitetsoverheaden och justera retraktion/temperatur.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Volymetriskt flode ar det verkliga hastighetstaket',
      badge: 'Kontrollera mm³/s',
      html: '<p>Tva profiler med samma forflyttningshastighet kan krava olika smalthastigheter. Ett 0,30 mm lager och 0,50 mm linje vid 80 mm/s behover mycket mer plast per sekund an ett 0,12 mm lager och 0,42 mm linje vid samma hastighet.</p>',
    },
    {
      type: 'summary',
      title: 'Anvand optimeeraren innan slicing',
      items: [
        'Jamfor tva kandidatprofiler istallet for att gissa fran ett enda nummer.',
        'Overvaka antal lager, volymetriskt flode och hardwarevarningar tillsammans.',
        'Behalla den senaste interaktionen lokalt sa att upprepad planering kan fortsatta fran den foregaende installationen.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
