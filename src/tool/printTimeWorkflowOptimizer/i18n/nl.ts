import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PrintTimeWorkflowOptimizerUI } from '../ui';

const slug = '3d-printtijd-workflow-optimalisator';
const title = '3D Printtijd Workflow Optimalisator';
const description =
  'Vergelijk twee FDM-printinstellingen naast elkaar: lagen, gecorrigeerde tijd, filamentverbruik, kosten, kwaliteitsafweging en waarschuwingen.';

const faqData = [
  {
    question: 'Verschil met een simpele tijdscalculator?',
    answer:
      'Bevat complexiteitsoverhead, retractietijd per laag, vulvolume, filamentmassa, kosten en scenariovergelijking.',
  },
  {
    question: 'Kan het slicer-schattingen vervangen?',
    answer:
      'Nee. Slicer kent exacte gereedschapspaden. Deze tool plant voor het slicen.',
  },
  {
    question: 'Wat verandert de complexiteit?',
    answer:
      'Laag/middel/hoog passen overheadcoefficienten toe voor verplaatsingen, acceleratieverliezen, hoeken en eilanden.',
  },
  {
    question: 'Waarom waarschuwt de tool boven 100 mm/s?',
    answer:
      'Veel printers kunnen sneller dan 100 mm/s maar extrusie en koeling maken hoge snelheden risicovol zonder kalibratie.',
  },
];
const howToData = [
  { name: 'Voer modelgrootte en volume in', text: 'Voeg hoogte en volume toe uit CAD, slicervoorbeeld of benadering.' },
  { name: 'Stel scenario A in', text: 'Kies laaghoogte, snelheid, lijnbreedte, vulling, materiaal, complexiteit.' },
  { name: 'Stel scenario B in', text: 'Pas tweede configuratie aan om te vergelijken.' },
  { name: 'Lees impact', text: 'Vergelijk tijd, filament, kosten, lagen, efficientie, flow.' },
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
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<PrintTimeWorkflowOptimizerUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Inputs workflow',
    resultsAriaLabel: 'Resultaten workflow',
    unitSystemLabel: 'Eenheden',
    metricLabel: 'Metrisch',
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
    modelHeightLabel: 'Modelhoogte',
    modelVolumeLabel: 'Geschat volume',
    layerHeightLabel: 'Laaghoogte',
    speedLabel: 'Snelheid',
    lineWidthLabel: 'Lijnbreedte',
    infillLabel: 'Vulling',
    complexityLabel: 'Complexiteit',
    complexityTooltip: 'Schat dode tijd: acceleraties, hoeken, retracties, eilanden, korte verplaatsingen.',
    pieceTypeLabel: 'Type onderdeel',
    solidPieceLabel: 'Massief doorgaand',
    hollowPieceLabel: 'Hol veel holtes',
    materialLabel: 'Materiaal',
    filamentPriceLabel: 'Filamentprijs',
    lowComplexity: 'Laag eenvoudige vlakken',
    mediumComplexity: 'Middel gemengde geometrie',
    highComplexity: 'Hoog veel eilanden',
    estimatedTimeLabel: 'Geschatte tijd',
    filamentLabel: 'Filament',
    costLabel: 'Materiaalkosten',
    layersLabel: 'Lagen',
    efficiencyLabel: 'Efficientie',
    flowLabel: 'Volumetrische flow',
    flowTooltip: 'Boven 10-12 mm3/s = risico onderextrusie.',
    flowUnit: 'mm3/s',
    qualityTradeoffLabel: 'Kwaliteitsafweging',
    speedReductionLabel: '-10% snelheid',
    speedReductionAddsLabel: 'voegt',
    speedReductionMinutesLabel: 'min',
    qualityGainLabel: '~8% schoner oppervlak',
    hardwareWarning: 'Snelheid >100 mm/s. Controleer hotend flow, koeling, acceleratie.',
    flowWarning: 'Flow boven comfortzone standaard hotend.',
    bestValueLabel: 'Beste waarde',
    timeDeltaLabel: 'Tijdverschil',
    costDeltaLabel: 'Kostenverschil',
    materialDeltaLabel: 'Materiaalverschil',
    winnerBadge: 'Beste waarde',
    scenarioPrefix: 'Scenario',
    inScenarioLabel: 'in',
    fasterDirection: 'sneller',
    cheaperDirection: 'goedkoper',
    lighterDirection: 'lichter',
    criterionAlignedLabel: 'Afgestemd beste waarde',
    criterionTradeoffLabel: 'Afweging beste waarde',
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
    { type: 'title', text: 'Hoe schat ik de 3D-printtijd in voor het slicen', level: 2 },
    {
      type: 'paragraph',
      html: 'Een nuttige <strong>3D-printtijdschatter</strong> kan niet alleen volume gedeeld door snelheid zijn. FDM-printers besteden tijd aan versnellen, vertragen voor bochten, filament terugtrekken, verplaatsen tussen eilanden, kleine lagen koelen en druk herstellen na richtingsveranderingen. De optimizer modelleert het onderdeel als printbaar volume, lijnbreedte, laaghoogte, snelheid, aantal lagen en een complexiteitscoefficient, zodat vroege planning dichter bij echte workflowbeslissingen ligt.',
    },
    {
      type: 'paragraph',
      html: 'De basis-extrusietijd wordt berekend uit volume gedeeld door volumetrische doorvoer: snelheid vermenigvuldigd met lijnbreedte en laaghoogte. Vervolgens past de tool een correctiecoefficient toe voor modelcomplexiteit en voegt een vaste terugtrektoeslag per laag toe. Dit claimt geen slicerprecisie, maar geeft een eerlijkere vergelijking tussen een 0,20 mm conceptopstelling en een 0,12 mm kwaliteitsopstelling dan een lineaire rekenmachine.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '1.15x', label: 'Lage-complexiteitsoverhead voor eenvoudige blokken en gladde onderdelen', icon: 'mdi:cube-outline' },
        { value: '1.60x', label: 'Hoge-complexiteitsoverhead voor veel eilanden en terugtrekkingen', icon: 'mdi:vector-polyline' },
        { value: '0.5 s', label: 'Geplande terugtrektoeslag toegevoegd per laag', icon: 'mdi:timer-outline' },
        { value: '100 mm/s', label: 'Waarschuwingsdrempel voor standaardprinters bij extrusierisico', icon: 'mdi:alert-outline' },
      ],
    },
    {
      type: 'tip',
      title: 'Gebruik waar mogelijk het slicervolume',
      html: '<p>De beste volume-invoer is het slicer- of CAD-materiaalvolume voor het model, niet de buitenste begrenzingsdoos. Begrenzingsdozen bevatten lege lucht rond curven, gaten, handvatten en holtes, dus kunnen ze tijd en filament overdrijven.</p>',
    },
    { type: 'title', text: 'Waarom laaghoogte de tijd zo sterk beinvloedt', level: 2 },
    {
      type: 'paragraph',
      html: 'Laaghoogte beinvloedt de printtijd op twee manieren. Ten eerste verandert het de volumetrische doorvoer: een laag van 0,12 mm bij dezelfde snelheid en breedte extrudeert 40% minder plastic per seconde dan een laag van 0,20 mm. Ten tweede verhoogt het het aantal lagen, waardoor laagwisseloverhead, terugtrekkingen, drukherstel en koelbeslissingen vaker voorkomen. Daarom kunnen kleine cosmetische veranderingen een vijf uur durende print in een acht uur durende print veranderen.',
    },
    {
      type: 'table',
      headers: ['Laaghoogte', 'Typisch gebruik', 'Workflowgevolg'],
      rows: [
        ['0,28-0,32 mm', 'Conceptonderdelen, grote armaturen, snelle controles', 'Laag aantal lagen en hoge doorvoer, maar zichtbare laaglijnen.'],
        ['0,18-0,22 mm', 'Algemeen PLA- en PETG-printen', 'Gebalanceerde tijd, sterkte en oppervlaktekwaliteit voor veel desktopprinters.'],
        ['0,10-0,14 mm', 'Miniaturen, gebogen schalen, zichtbare consumentenonderdelen', 'Veel langere klussen omdat doorvoer daalt en laag aantal stijgt.'],
        ['Onder 0,10 mm', 'Speciale afwerkingsgevallen', 'Vaak beperkt door machineprecisie, koeling en afnemende visuele opbrengst.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Fijne lagen kunnen langzamer zijn dan de formule suggereert',
      badge: 'Koeling en minimale laagtijd',
      html: '<p>Kleine modellen kunnen de minimale laagtijd in de slicer bereiken. Wanneer dat gebeurt, vertraagt de printer om plastic te laten afkoelen, zelfs als de volumetrische formule zegt dat de machine sneller kan bewegen.</p>',
    },
    {
      type: 'summary',
      title: 'Laaghoogteregels',
      items: [
        'Lagere laaghoogte vermindert de stroom per seconde bij dezelfde snelheid.',
        'Meer lagen voegen herhaalde overhead toe, zelfs wanneer het modelvolume onveranderd blijft.',
        'De beste vergelijking is scenariogebaseerd: conceptprofiel versus kwaliteitsprofiel.',
      ],
    },
    { type: 'title', text: 'Modelcomplexiteitsoverhead en dode tijd', level: 2 },
    {
      type: 'paragraph',
      html: 'Dode tijd is de kloof tussen theoretische extrusie en de werkelijke kloktijd. Een rechte vaasachtige wand heeft weinig verplaatsing en weinig terugtrekkingen. Een mechanische behuizing met veel gaten, uitsteeksels, labels, ribben en gescheiden eilanden dwingt de printer om vele malen te starten en stoppen. Acceleratielimieten betekenen dat de nozzle op korte segmenten mogelijk nooit de bevolen snelheid bereikt, dus de werkelijke gemiddelde bewegingssnelheid is lager dan de schuifwaarde.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: 'Lage complexiteit', description: 'Gladde modellen, continue contouren, weinig eilanden en beperkte interne verplaatsing.', icon: 'mdi:shape-outline', points: ['Lagere overhead', 'Stabiele snelheid', 'Weinig terugtrekkingen'] },
        { title: 'Middelmatige complexiteit', description: 'Gebruikelijke functionele onderdelen met gaten, gemengde curven, vulveranderingen en matige verplaatsing.', icon: 'mdi:cog-outline', highlight: true, points: ['Gebalanceerde standaard', 'Enig verplaatsingsverlies', 'Nuttige offertebasis'] },
        { title: 'Hoge complexiteit', description: 'Gestructureerde oppervlakken, veel gescheiden kenmerken, ondersteuningsinterfaces en retractie-intensieve secties.', icon: 'mdi:transit-connection-variant', points: ['Hoge overhead', 'Meer stringingrisico', 'Langere werkelijke kloktijd'] },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Overheadcoefficient', definition: 'Een vermenigvuldiger die verplaatsingen, acceleratieverlies, terugtrekkingen en andere tijd benadert die niet wordt gevangen door constante extrusieberekening.' },
        { term: 'Volumetrische stroom', definition: 'De hoeveelheid plastic die per seconde door de nozzle wordt geduwd, berekend als snelheid maal lijnbreedte maal laaghoogte.' },
        { term: 'Laag aantal', definition: 'De modelhoogte gedeeld door laaghoogte, naar boven afgerond omdat gedeeltelijke laatste lagen nog steeds een doorgang vereisen.' },
        { term: 'Onderextrusie', definition: 'Een defect waarbij de hotend of extruder niet genoeg gesmolten plastic kan leveren voor de gevraagde snelheid en lijngeometrie.' },
      ],
    },
    {
      type: 'message',
      title: 'Beschouw complexiteit als een kalibratieknop',
      ariaLabel: 'Opmerking over complexiteitscoefficient',
      html: '<p>Als uw slicer consequent langere tijden meldt dan deze optimizer voor vergelijkbare modellen, verhoog dan de complexiteit. Als uw direct-drive printer met afgestelde acceleratie de schatting verslaat, verlaag deze dan voor toekomstige planning.</p>',
    },
    { type: 'title', text: 'Filamentverbruik, kosten en vulling', level: 2 },
    {
      type: 'paragraph',
      html: 'Tijd is slechts een onderdeel van de workflowbeslissing. Filamentgewicht en -kosten zijn belangrijk bij het offerten van onderdelen, het plannen van batchwerk of het beslissen of een fijn detailprofiel de moeite waard is om de printer bezet te houden. De optimizer schat het gecorrigeerde printbare volume door een schildeel te behouden en het interne gebied te schalen op vulpercentage, en vermenigvuldigt dat volume vervolgens met de materiaaldichtheid.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Gebruik PLA rond 1,24 g/cm³ en PETG rond 1,27 g/cm³ voor snelle materiaalplanning.',
        'Verhoog het geschatte volume wanneer ondersteuningen, randen, rafts of reinigingsstructuren deel uitmaken van de klus.',
        'Lagere vulling vermindert filament en tijd, maar wanden, bovenste en onderste lagen verbruiken nog steeds materiaal.',
        'Vergelijk voor productiebatches de calculatorschattingen met het werkelijk gebruikte spoegewicht en pas toekomstige offertes aan.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:cash-clock',
      title: 'Voorbeeld van een workflowbeslissing',
      html: '<p>Een 120 cm³ PLA-onderdeel met 0,20 mm lagen kan acceptabel zijn voor een winkelmal, terwijl de 0,12 mm versie er beter uitziet maar de printer langer bezet houdt. Door tijd en materiaalkosten naast elkaar te vergelijken, wordt de afweging zichtbaar voordat de machine wordt vastgelegd.</p>',
    },
    {
      type: 'proscons',
      title: 'Snelheid optimaliseren versus kwaliteit',
      items: [
        { pro: 'Hogere snelheid kan printercapaciteit vrijmaken voor meer klussen per dag.', con: 'Het kan ringing, zwakke hoeken, slechte koeling en hotend-stroomlimieten blootleggen.' },
        { pro: 'Lagere snelheid verbetert vaak de oppervlakteafwerking en dimensionale consistentie.', con: 'Het verhoogt de wachttijd en kan kleine commerciële onderdelen minder winstgevend maken.' },
        { pro: 'Lagere laaghoogte verbetert gebogen oppervlakken en miniaturen.', con: 'Het vermenigvuldigt het aantal lagen en herhaalde machine-overhead.' },
      ],
    },
    { type: 'title', text: 'Hardwarewaarschuwingen en praktische snelheidslimieten', level: 2 },
    {
      type: 'paragraph',
      html: 'Een slicer-snelheidswaarde is geen garantie dat de nozzle die snelheid overal zal handhaven. Standaard Cartesian bedslingers, oudere Bowden-extruders, hotends met korte smeltzone en zwakke onderdeelkoeling kunnen moeite hebben boven 100 mm/s, tenzij acceleratie, jerk, pressure advance, temperatuur en stroomkalibratie zijn afgesteld. De waarschuwing betekent niet dat de print zal mislukken; het betekent dat de gevraagde opstelling moet worden gecontroleerd tegen hardwaregedrag.',
    },
    {
      type: 'table',
      headers: ['Symptoom', 'Waarschijnlijke oorzaak', 'Planningsreactie'],
      rows: [
        ['Dunne wanden of gaten', 'Hotend kan niet genoeg plastic smelten of extruder slipt', 'Snelheid verminderen, temperatuur voorzichtig verhogen of lijnbreedte/laaghoogte verlagen.'],
        ['Ringing bij hoeken', 'Acceleratie en framevibratie domineren', 'Acceleratie verlagen of snelheid verminderen voor zichtbare wanden.'],
        ['Gekrulde kleine kenmerken', 'Koeling kan niet bijbenen', 'Snelheid verlagen, ventilator verhogen of meerdere exemplaren printen.'],
        ['Stringing bij complexe onderdelen', 'Veel verplaatsingen en terugtrekkingen', 'Complexiteitsoverhead verhogen en retractie/temperatuur aanpassen.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Volumetrische stroom is de echte snelheidslimiet',
      badge: 'Controleer mm³/s',
      html: '<p>Twee profielen met dezelfde bewegingssnelheid kunnen verschillende smeltsnelheden vereisen. Een laag van 0,30 mm en lijn van 0,50 mm bij 80 mm/s hebben veel meer plastic per seconde nodig dan een laag van 0,12 mm en lijn van 0,42 mm bij dezelfde snelheid.</p>',
    },
    {
      type: 'summary',
      title: 'Gebruik de optimizer voor het slicen',
      items: [
        'Vergelijk twee kandidaatprofielen in plaats van te raden uit één getal.',
        'Bekijk laag aantal, volumetrische stroom en hardwarewaarschuwingen samen.',
        'Bewaar de laatste interactie lokaal, zodat herhaalde planning kan doorgaan vanaf de vorige opstelling.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
