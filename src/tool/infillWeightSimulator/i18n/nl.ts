import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InfillWeightSimulatorUI } from '../ui';

const slug = '3d-print-gewicht-infill-percentage-calculator';
const title = '3D Print Gewicht Infill Percentage Calculator';
const description =
  'Schat het onderdeelgewicht, bespaard filament en materiaalkosten bij het wijzigen van infill-percentage en -patroon op basis van een 100% infill referentiegewicht.';

const faqData = [
  {
    question: 'Kan ik het 3D-printgewicht schatten op basis van het 100% infill gewicht?',
    answer:
      'Ja, maar de schatting moet schillen, wanden, toplagen en onderlagen gescheiden houden van de interne infill. Een onderdeel wordt niet gewichtloos bij 0% infill omdat de buitenste omtrek nog steeds materiaal gebruikt.',
  },
  {
    question: 'Waarom verandert het infill-patroon het geschatte gewicht?',
    answer:
      'Verschillende patronen creëren verschillende gereedschapspadlengtes bij dezelfde nominale dichtheid. Lijnen en concentrische patronen zijn meestal lichter, terwijl honingraat, kubus en driehoeken de neiging hebben om meer interne wandlengte toe te voegen.',
  },
  {
    question: 'Is het slicer-gewicht nauwkeuriger dan deze calculator?',
    answer:
      'Een slicer is nauwkeuriger zodra het model, de nozzle, extrusiebreedte, wandtelling, toplagen en materiaalprofiel bekend zijn. Deze calculator is ontworpen voor snelle planning voordat je vele versies opnieuw sliced.',
  },
  {
    question: 'Welk schilpercentage moet ik gebruiken?',
    answer:
      'Voor veel decoratieve of middelgrote FDM-onderdelen is 20-35% schilaandeel een praktisch startbereik. Kleine onderdelen, dunne objecten en onderdelen met veel gaten kunnen een hoger schilaandeel hebben.',
  },
];

const howToData = [
  {
    name: 'Start vanaf een 100% infill referentie',
    text: 'Gebruik het gewicht dat je slicer rapporteert voor hetzelfde model bij 100% infill, of weeg een bekende volledig dichte referentieprint.',
  },
  {
    name: 'Kies doel-infill en patroon',
    text: 'Beweeg de infill-schuifregelaar en kies het patroon dat het dichtst bij de slicer-instelling ligt die je van plan bent te gebruiken.',
  },
  {
    name: 'Pas schil- en verspillingaannames aan',
    text: 'Verhoog het schilaandeel voor dunne of perimeter-zware modellen en voeg verspilling toe voor purge, skirt, brim, ondersteuning en mislukte starts.',
  },
  {
    name: 'Lees gewichts- en kostenbesparingen af',
    text: 'Vergelijk het uiteindelijke geschatte gewicht met de 100% infill-baseline om te beslissen of de materiaalbesparing de stijfheidscompromis waard is.',
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
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<InfillWeightSimulatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Infill-gewicht invoer',
    resultsAriaLabel: 'Geschatte printgewicht resultaten',
    unitSystemLabel: 'Eenheden',
    metricLabel: 'Metrisch',
    imperialLabel: 'US',
    currencyLabel: 'Valuta',
    currencyOptions: [
      { code: 'USD', label: '$', symbol: '$' },
      { code: 'EUR', label: '€', symbol: '€' },
      { code: 'GBP', label: '£', symbol: '£' },
      { code: 'CAD', label: 'C$', symbol: 'C$' },
      { code: 'AUD', label: 'A$', symbol: 'A$' },
      { code: 'CHF', label: 'Fr', symbol: 'Fr' },
      { code: 'CNY', label: '¥', symbol: '¥' },
      { code: 'INR', label: '₹', symbol: '₹' },
      { code: 'BRL', label: 'R$', symbol: 'R$' },
      { code: 'MXN', label: '$', symbol: '$' },
      { code: 'RUB', label: '₽', symbol: '₽' },
      { code: 'PLN', label: 'zł', symbol: 'zł' },
      { code: 'SEK', label: 'kr', symbol: 'kr' },
      { code: 'NOK', label: 'kr', symbol: 'kr' },
      { code: 'DKK', label: 'kr', symbol: 'kr' },
      { code: 'TRY', label: '₺', symbol: '₺' },
      { code: 'JPY', label: '¥', symbol: '¥' },
    ],
    fullWeightLabel: '100% infill gewicht',
    fullWeightHint: 'Gebruik de slicer-waarde voor hetzelfde model bij volledige dichtheid.',
    infillLabel: 'Doel-infill',
    patternLabel: 'Infill-patroon',
    patternOptions: [
      { value: 'lines', label: 'Lijnen - lichte paden' },
      { value: 'grid', label: 'Raster - slicer-baseline' },
      { value: 'triangles', label: 'Driehoeken - stijve cellen' },
      { value: 'gyroid', label: 'Gyroid - gladde lattice' },
      { value: 'cubic', label: 'Kubisch - 3D-stijfheid' },
      { value: 'honeycomb', label: 'Honingraat - dichte wanden' },
      { value: 'concentric', label: 'Concentrisch - contouren volgend' },
    ],
    shellShareLabel: 'Schilaandeel',
    shellShareHint: 'Wanden, toplagen, onderlagen en massieve kenmerken die niet schalen met infill.',
    spoolPriceLabel: 'Filamentprijs',
    wasteLabel: 'Verspilling',
    estimatedWeightLabel: 'Geschat onderdeelgewicht',
    filamentSavedLabel: 'Filament bespaard',
    materialCostLabel: 'Materiaalkosten',
    costSavedLabel: 'Kosten bespaard',
    effectiveDensityLabel: 'Effectieve dichtheid',
    shellLabel: 'Schil',
    infillCoreLabel: 'Infill-kern',
    patternImpactLabel: 'Patroonvermenigvuldiger',
    comparisonLabel: 'Baseline-vergelijking',
    fullInfillLabel: '100% infill',
    targetInfillLabel: 'Doelopstelling',
    insightLow: 'Zeer lage infill kan veel filament besparen, maar bovenoppervlakken, schroefbazen, clips en dragende zones hebben mogelijk extra wanden of lokale modificatoren nodig.',
    insightBalanced: 'Dit is een gebalanceerde planningszone voor veel visuele en lichte functionele prints: de schil draagt de vorm terwijl de infill de stijfheid en kosten regelt.',
    insightHigh: 'Hoge infill verkleint de besparingskloof snel. Overweeg meer wanden, een sterker patroon of materiaalkeuze voordat je overal dichte infill gebruikt.',
  },
  seo: [
    { type: 'title', text: 'Hoe een 3D-print gewicht infill percentage calculator werkt', level: 2 },
    {
      type: 'paragraph',
      html: 'Een <strong>3D-print gewicht infill percentage calculator</strong> schat hoeveel plastic overblijft wanneer een model wordt geprint met minder dan 100% interne dichtheid. Het belangrijke detail is dat FDM-gewicht geen simpele vermenigvuldiging is van vol gewicht met infill-percentage. Een model geprint met 20% infill weegt meestal niet 20% van de volledig dichte versie, omdat wanden, toplagen, onderlagen, kleine massieve gebieden, brims en ondersteuningsinterfaces nog steeds filament verbruiken. Deze calculator begint met het bekende of door de slicer gerapporteerde gewicht bij 100% infill, scheidt een configureerbaar schilaandeel, en schaalt vervolgens de interne kern op basis van doel-infill en patroongedrag.',
    },
    {
      type: 'paragraph',
      html: 'De methode is ontworpen voor snelle vergelijking voordat je tijd besteedt aan het opnieuw slicen van een bestand. Als een volledig dichte PETG-beugel wordt geschat op 240 g, leidt overschakelen naar 20% gyroid mogelijk niet tot een onderdeel van 48 g. Met een schilaandeel van 28% is de massa van de omtrek al ongeveer 67 g voordat de interne dichtheid wordt meegeteld. De infill-kern voegt vervolgens materiaal toe volgens de geselecteerde dichtheid en patroonvermenigvuldiger. Het resultaat is een planningschatting die realistischer is dan lineaire infill-wiskunde, maar nog steeds snel genoeg voor vroege beslissingen.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '20-35%', label: 'Typisch schilaandeel voor veel middelgrote FDM-onderdelen', icon: 'mdi:cube-outline' },
        { value: '0,88x', label: 'Lichte contourenvermenigvuldiger voor concentrische infill', icon: 'mdi:chart-line' },
        { value: '1,16x', label: 'Dichte padvermenigvuldiger voor honingraatplanning', icon: 'mdi:hexagon-multiple' },
        { value: '100%', label: 'Referentiegewicht gebruikt als basis voor besparingen', icon: 'mdi:weight-gram' },
      ],
    },
    {
      type: 'tip',
      title: 'Gebruik hetzelfde slicer profiel voor de referentie',
      html: '<p>Voor de schoonste schatting genereer je het 100% infill gewicht met dezelfde nozzle, extrusiebreedte, wandtelling, toplagen, onderlagen, materiaaldichtheid en ondersteuningsinstellingen die je voor de doelprint zult gebruiken. Het wijzigen van die instellingen verandert de schilmassa, waardoor de infill-vergelijking minder betekenisvol wordt.</p>',
    },

    { type: 'title', text: 'Waarom infill-gewicht niet lineair is', level: 2 },
    {
      type: 'paragraph',
      html: 'De term <em>infill-percentage</em> klinkt als een directe dichtheidswaarde, maar slicers passen het alleen toe op het interne gebied dat overblijft nadat contouren en massieve oppervlakken zijn gegenereerd. Een simpele kubus met twee wanden en zes toplagen kan een groot intern volume hebben, dus infill-percentage beïnvloedt het gewicht sterk. Een dunne telefoonstandaard, een versnellingsbehuizing met veel gaten, of een miniatuur met smalle ledematen kunnen zoveel omtrekgeometrie hebben dat het verlagen van infill een kleinere besparing oplevert dan verwacht. Daarom stelt de calculator het <strong>schilaandeel</strong> beschikbaar in plaats van het te verbergen.',
    },
    {
      type: 'table',
      headers: ['Modeltype', 'Waarschijnlijk schilaandeel', 'Wat het betekent voor besparingen'],
      rows: [
        ['Grote rechthoekige behuizing', '15-25%', 'De meeste massa is intern volume, dus infill verandert het gewicht sterk.'],
        ['Decoratief figuur of organisch model', '25-45%', 'Veel bochten en smalle gebieden creëren perimeter-zware geometrie.'],
        ['Dunne beugel of paneel', '35-60%', 'Wanden en oppervlakken domineren; infill-vermindering bespaart mogelijk minder plastic.'],
        ['Kleine mechanische clip', '45-70%', 'Het model kan bijna massief zijn van alleen de contouren.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Wanneer de schatting te zwaar lijkt',
      badge: 'Controleer schilaandeel',
      html: '<p>Als een 10% infill-instelling nog steeds een hoog geschat gewicht oplevert, is het schilaandeel waarschijnlijk groot. Dat kan correct zijn voor kleine of dunne onderdelen. Controleer de wandtelling, boven- en onderdikte, en of het model veel gescheiden eilanden of smalle ribben heeft.</p>',
    },
    {
      type: 'summary',
      title: 'Praktische interpretatie',
      items: [
        'Infill-percentage beïnvloedt alleen de interne kern, niet de hele print.',
        'Een 0% infill-onderdeel heeft nog steeds wanden, huiden, naden en soms massieve kleine kenmerken.',
        'Volledige gewichtsreferentie, schilaandeel, patroonkeuze en verspillingmarge samen geven een beter planningsgetal.',
      ],
    },

    { type: 'title', text: 'Infill-patroon gewichtsvermenigvuldigers', level: 2 },
    {
      type: 'paragraph',
      html: 'Twee prints kunnen beide op 25% infill zijn ingesteld en toch verschillende hoeveelheden filament gebruiken omdat de gereedschapspadgeometrie verandert. Lijnen en concentrische patronen produceren vaak lichtere interne paden omdat ze sommige kruisingsstructuren vermijden. Raster, driehoeken, kubus, gyroid en honingraat creëren verschillende hoeveelheden overlap, directionele versterking en padlengte. De calculator modelleert dit met een kleine <strong>patroonvermenigvuldiger</strong> toegepast op de interne kern, niet op het hele onderdeel.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Lijnen en concentrisch',
          description: 'Nuttig wanneer minimaal gewicht en snel printen belangrijker zijn dan uniforme stijfheid.',
          icon: 'mdi:format-line-spacing',
          points: ['Lagere paddichtheid', 'Goed voor decoratieve onderdelen', 'Directionele sterkte kan ongelijk zijn'],
        },
        {
          title: 'Raster en gyroid',
          description: 'Gebalanceerde keuzes voor veelvoorkomende visuele en functionele prints waar stijfheid telt.',
          icon: 'mdi:grid',
          highlight: true,
          points: ['Voorspelbare slicer-baseline', 'Goede stijfheid-gewicht verhouding', 'Gyroid verdeelt lasten gelijkmatig'],
        },
        {
          title: 'Kubus, driehoeken, honingraat',
          description: 'Zwaardere planningskeuzes die stijfheid kunnen verbeteren maar filamentbesparing verminderen.',
          icon: 'mdi:hexagon-outline',
          points: ['Meer interne wandlengte', 'Betere multidirectionele stijfheid', 'Langere printtijd is gebruikelijk'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Patroonkeuze afwegingen',
      items: [
        { pro: 'Lichtere patronen verlagen de materiaalkosten en kunnen de printtijd verkorten.', con: 'Ze kunnen zwakkere richtingen of minder ondersteuning van het bovenoppervlak creëren.' },
        { pro: 'Dichte patronen verbeteren het gevoel van stijve onderdelen en verminderen buiging.', con: 'Ze kunnen de kosten van hogere infill benaderen zonder een zwak wandontwerp op te lossen.' },
        { pro: 'Gyroid verdeelt lasten gelijkmatig in vele richtingen.', con: 'Het kan langzamer printen op machines met conservatieve acceleratie-instellingen.' },
      ],
    },
    {
      type: 'message',
      title: 'Patroonvermenigvuldigers zijn planningsaannames',
      ariaLabel: 'Opmerking patroonvermenigvuldiger',
      html: '<p>Slicer-engines implementeren patronen verschillend. Behandel de vermenigvuldiger als een vroege schatter en bevestig belangrijke productieklussen met een echte slicer-preview en het materiaalverbruiksrapport.</p>',
    },

    { type: 'title', text: 'Filament- en kostenbesparingen berekenen', level: 2 },
    {
      type: 'paragraph',
      html: 'De materiaalkostenschatting vermenigvuldigt de uiteindelijke grammen met de spoelprijs per kilogram. Als de calculator een print van 126 g voorspelt en de spoel kost $24 per kg, is het plastic deel ongeveer $3,02 vóór machinetijd, elektriciteit, arbeid, verpakking en mislukte prints. De bespaarde kosten vergelijken hetzelfde model met de 100% infill-baseline, met hetzelfde verspillingspercentage. Dit is nuttig voor offertes, batchplanning en om te beslissen of een zwaardere infill-instelling het extra materiaal waard is.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Gebruik het verspillingspercentage voor purge-lijnen, skirts, brims, ondersteuning, rafts, kleurwisselingen en korte mislukte starts.',
        'Voor enkele prototypes is een verspillingmarge van 5-10% meestal realistischer dan nul.',
        'Voor productiebatches met ondersteuning of schurende materialen, registreer het werkelijke resterende en mislukte gewicht over meerdere klussen.',
        'Bij het vergelijken van PLA, PETG, ABS, ASA, nylon en gevulde composieten, gebruik de spoelprijs voor het exacte materiaal, niet een gemiddelde.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:cash-multiple',
      title: 'Voorbeeld: van dicht prototype naar productie infill',
      html: '<p>Een 100% infill prototype weegt 240 g. Met een schilaandeel van 28%, 20% gyroid, 6% verspilling en $24/kg filament, komt de schatting uit in de lage honderden grammen in plaats van 48 g. Dat verschil telt bij het offerten van 40 exemplaren: kleine fouten per onderdeel worden hele spoelen plastic.</p>',
    },
    {
      type: 'table',
      headers: ['Invoer', 'Waarom het belangrijk is', 'Veelgemaakte fout'],
      rows: [
        ['100% gewicht', 'Bepaalt de maximale materiaal-baseline.', 'Een andere wandtelling gebruiken dan de doelprint.'],
        ['Doel-infill', 'Bepaalt de dichtheid van de interne kern.', 'Aannemen dat 20% infill 20% van het totale onderdeelgewicht betekent.'],
        ['Patroon', 'Verandert de gereedschapspadlengte en stijfheid.', 'Patroon negeren bij het vergelijken van slicer-voorinstellingen.'],
        ['Verspilling', 'Voegt werkelijk filament toe dat buiten het eindonderdeel wordt gebruikt.', 'Ondersteuning en mislukte starts vergeten.'],
      ],
    },

    { type: 'title', text: 'Infill kiezen voor gewichtsbesparing zonder zwakke onderdelen', level: 2 },
    {
      type: 'paragraph',
      html: 'Gewichtsbesparing is alleen waardevol als het onderdeel nog steeds zijn functie vervult. Voor visuele modellen, display-rekwisieten, cosplay-onderdelen en afdekkingen kan lage infill met voldoende toplagen perfect zijn. Voor beugels, bevestigingen, behuizingen met schroeven, snap-kenmerken en onderdelen blootgesteld aan hitte of schokken, is de beste verbetering vaak meer wanden of lokale versterking in plaats van simpelweg de globale infill te verhogen. Een onderdeel met vier wanden en 20% gyroid kan op de juiste plaatsen sterker zijn dan een onderdeel met twee wanden en 50% infill.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Schilaandeel', definition: 'Het deel van het volledig dichte gewicht dat toebehoort aan wanden, toplagen, onderlagen en onvermijdelijke massieve geometrie.' },
        { term: 'Nominale infill', definition: 'Het percentage geselecteerd in de slicer voor het interne gebied na het genereren van schillen.' },
        { term: 'Effectieve dichtheid', definition: 'De geschatte totale dichtheid van de afgewerkte print na combinatie van schilaandeel, infill-percentage en patroonvermenigvuldiger.' },
        { term: 'Verspillingmarge', definition: 'Extra filament gebruikt voor niet-onderdeel materiaal zoals purge, brim, ondersteuning, tests en mislukte starts.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Gebruik gewichtsbesparing niet als enige ontwerpcriterium',
      badge: 'Functionele prints',
      html: '<p>Onderdelen die over laaglijnen worden belast, onderdelen met schroefdraadinserts en onderdelen met schroefcompressie hebben aparte mechanische overwegingen nodig. Infill helpt, maar wanddikte, oriëntatie, materiaal, temperatuur en spanningsconcentratie zijn vaak belangrijker dan dichtheid alleen.</p>',
    },
    {
      type: 'summary',
      title: 'Snelle beslisregels',
      items: [
        'Decoratieve prints: verlaag eerst infill, controleer dan de kwaliteit van het bovenoppervlak.',
        'Lichte functionele prints: gebruik een gebalanceerd patroon en voldoende wanden vóór hoge infill.',
        'Beugels en bevestigingen: versterk gaten, hoeken en lastpaden met lokale modificatoren.',
        'Batchklussen: bevestig de uiteindelijke schatting met de slicer voordat je materiaal koopt.',
      ],
    },

    { type: 'title', text: 'Wanneer de calculator vertrouwen en wanneer opnieuw slicen?', level: 2 },
    {
      type: 'paragraph',
      html: 'Deze calculator is het beste voor snelle schattingen, vroege offertes, materiaalaankoop en het vergelijken van vele infill-opties zonder de slicer herhaaldelijk te openen. Het is geen vervanging voor de slicer wanneer dimensionale instellingen veranderen. Als je nozzle-diameter, extrusiebreedte, wandtelling, bovendikte, onderdikte, adaptieve lagen, ondersteuningsstijl, strijken, vaasmodus of materiaaldichtheid wijzigt, moeten de 100%-baseline en het schilaandeel worden bijgewerkt.',
    },
    {
      type: 'list',
      icon: 'mdi:calculator-variant-outline',
      items: [
        'Gebruik de calculator wanneer het model en profiel grotendeels vaststaan en je dichtheid of patroon verkent.',
        'Slice opnieuw wanneer wandtelling, ondersteuningsgeneratie, nozzle-grootte of materiaalprofiel verandert.',
        'Weeg een afgewerkt onderdeel wanneer je productiekostengegevens of voorraadprognoses nodig hebt.',
        'Registreer werkelijke grammen voor herhaalde klussen; echte gegevens verbeteren snel je schilaandeel-aannames.',
      ],
    },
    {
      type: 'tip',
      title: 'Een betrouwbare workflow voor offertes',
      html: '<p>Maak een volledig dichte slicer-referentie, schat verschillende infill-opties met deze calculator, kies de twee meest veelbelovende en slice alleen die twee finale kandidaten opnieuw. Dit houdt offertes snel terwijl de uiteindelijke prijzen gebaseerd blijven op slicer-specifieke materiaalrapporten.</p>',
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
