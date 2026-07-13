import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HotendFlowRateLimitCalculatorUI } from '../ui';

const slug = 'volumetrische-stroomsnelheid-calculator';
const title = 'Volumetrische Stroomsnelheid Calculator: Precieze Hotend Limieten';
const description =
  'Bereken de volumetrische doorstroom bij 3D-printen in mm3/s, vergelijk deze met de smeltcapaciteit van de hotend en identificeer wanneer snelheid, lijnbreedte en laaghoogte onder-extrusie veroorzaken.';

const faqData = [
  {
    question: 'Wat is volumetrische stroomsnelheid bij 3D-printen?',
    answer:
      'Volumetrische stroomsnelheid is het volume plastic dat per seconde door de hotend wordt gevraagd. Het wordt berekend als lijnbreedte vermenigvuldigd met laaghoogte vermenigvuldigd met printsnelheid, met een resultaat in mm3/s.',
  },
  {
    question: 'Wat gebeurt er als de volumetrische doorstroom de hotendlimiet overschrijdt?',
    answer:
      'De hotend kan het plastic niet volledig smelten op de gevraagde snelheid. De druk stijgt, extrusie wordt inconsistenter en de print kan onder-extrusie, zwakke wanden, matte ruwe oppervlakken of overgeslagen extruderstappen vertonen.',
  },
  {
    question: 'Is een V6 echt beperkt tot 15 mm3/s?',
    answer:
      '15 mm3/s is een praktische planningsconstante voor een goed afgestelde standaard smeltzone-hotend. Werkelijke waarden zijn afhankelijk van filament, temperatuur, nozzle, verwarmingsvermogen, extrudergrip en hoeveel visuele kwaliteitsverlies acceptabel is.',
  },
  {
    question: 'Waarom verhoogt een grotere laaghoogte de veilige snelheid niet?',
    answer:
      'Laaghoogte is een directe vermenigvuldiger in de doorstroomvergelijking. Als lijnbreedte en hotendcapaciteit gelijk blijven, halveert het verdubbelen van de laaghoogte ongeveer de maximale snelheid voordat de hotend zijn smeltlimiet bereikt.',
  },
];

const howToData = [
  { name: 'Kies een hotend-architectuur', text: 'Selecteer een voorinstelling voor standaard V6, Volcano, Bambu high-flow of ultra-high-flow om de smeltcapaciteitsconstante in te stellen.' },
  { name: 'Stel lijngeometrie in', text: 'Pas lijnbreedte en laaghoogte aan om overeen te komen met het slicerprofiel dat u wilt gebruiken.' },
  { name: 'Printsnelheid aanpassen', text: 'Gebruik de fijnregelaar voor snelheid om te zien hoe de belastingsmeter de 70%, 90% en kritieke doorstroomzones nadert.' },
  { name: 'Veilige snelheid en reserve aflezen', text: 'Vergelijk de huidige mm3/s met de maximale veilige snelheid en de resterende smeltsnelheidsreserve.' },
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
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<HotendFlowRateLimitCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Invoer voor volumetrische stroomsnelheidslimiet',
    resultsAriaLabel: 'Resultaten van volumetrische stroomsnelheidscalculator',
    unitSystemLabel: 'Eenheden',
    metricLabel: 'Metrisch',
    imperialLabel: 'US',
    hotendLabel: 'Hotend-architectuur',
    lineWidthLabel: 'Lijnbreedte',
    layerHeightLabel: 'Laaghoogte',
    speedLabel: 'Printsnelheid',
    flowLabel: 'Volumetrische doorstroom',
    loadLabel: 'Thermische belasting',
    maxSpeedLabel: 'Max. veilige snelheid',
    reserveLabel: 'Smeltreserve',
    stateLabel: 'Systeemstatus',
    idealState: 'IDEALE DOORSTROOM',
    limitState: 'VISCOSITEITSGRENS',
    criticalState: 'KRITIEKE DOORSTROOM',
    idealHint: 'De hotend heeft voldoende thermische ruimte voor stabiele smeltdruk en consistente extrusie.',
    limitHint: 'Het profiel bevindt zich dicht bij de viscositeitsgrens. Kleine materiaal- of temperatuurveranderingen kunnen onder-extrusie zichtbaar maken.',
    criticalHint: 'De gevraagde doorstroom overschrijdt het betrouwbare smeltvenster. Verlaag snelheid, lijnbreedte of laaghoogte.',
    millimeterUnit: 'mm',
    inchUnit: 'in',
    metricSpeedUnit: 'mm/s',
    imperialSpeedUnit: 'in/s',
    flowUnit: 'mm3/s',
  },
  seo: [
    { type: 'title', text: 'Hoe de Maximale Volumetrische Stroomsnelheidscalculator Werkt', level: 2 },
    {
      type: 'paragraph',
      html: 'Een <strong>maximale volumetrische stroomsnelheidscalculator</strong> beantwoordt een nuttigere vraag dan een eenvoudige snelheidscalculator: kan de hotend de hoeveelheid plastic smelten die door de slicer wordt gevraagd? Bewegingssystemen kunnen hoge verplaatsingssnelheden adverteren, maar extrusie wordt beperkt door warmteoverdracht, smeltzonelengte, nozzledruk, filamentviscositeit, verwarmingsstabiliteit en extrudergrip. De calculator modelleert de gevraagde smeltsnelheid als <code>Vf = lijnbreedte x laaghoogte x snelheid</code>, met het resultaat weergegeven in <code>mm3/s</code>.',
    },
    {
      type: 'paragraph',
      html: 'De tool vergelijkt die momentane doorstroom met een geselecteerde hotendcapaciteit. Standaard V6-hotends worden weergegeven met een lagere smeltsnelheidsconstante, architecturen met een langere smeltzone zoals Volcano gebruiken een hogere constante, en moderne high-flow-hotends gebruiken grotere waarden. Het doel is niet om een universele laboratoriumlimiet te beloven, maar om een snelle technische controle te bieden voordat een slicerprofiel meer plastic vraagt dan de hardware betrouwbaar kan vloeibaar maken.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'mm3/s', label: 'Eenheid voor hotend-smeltcapaciteit', icon: 'mdi:cube-scan' },
        { value: '70%', label: 'Comfortzonegrens voor stabiele productieprofielen', icon: 'mdi:gauge-low' },
        { value: '90%', label: 'Viscositeitsgrens waar fouten gevoelig worden', icon: 'mdi:gauge' },
        { value: '100%+', label: 'Kritieke doorstroom waar onder-extrusierisico domineert', icon: 'mdi:alert-outline' },
      ],
    },
    {
      type: 'tip',
      title: 'Gebruik slicer lijnbreedte, niet nozzle diameter',
      html: '<p>De doorstroomvergelijking gebruikt de extrusielijnbreedte uit de slicer. Een 0,4 mm nozzle print vaak een lijn van 0,42-0,48 mm. Als de calculator de nozzle-diameter gebruikt in plaats van de lijnbreedte, kan hij de doorstroomvraag onderschatten en een profiel verbergen dat al dicht bij de hotendlimiet zit.</p>',
    },
    { type: 'title', text: 'Waarom Snelheid en Smeltsnelheid Niet dezelfde Limiet Zijn', level: 2 },
    {
      type: 'paragraph',
      html: 'Een printer kan bewegen met 300 mm/s en toch falen bij 90 mm/s als het extrusievolume te hoog is. Snelheid wordt pas betekenisvol nadat lijnbreedte en laaghoogte zijn meegenomen. Het printen van een 0,45 mm lijn met 0,20 mm lagen en 150 mm/s vraagt 13,5 mm3/s. Het printen van een 0,60 mm lijn met 0,30 mm lagen en dezelfde snelheid vraagt 27 mm3/s. De bewegingssnelheid is identiek, maar het tweede profiel vraagt de hotend om twee keer zoveel plastic per seconde te smelten.',
    },
    {
      type: 'table',
      headers: ['Lijnbreedte', 'Laaghoogte', 'Snelheid', 'Gevraagde doorstroom'],
      rows: [
        ['0,42 mm', '0,16 mm', '120 mm/s', '8,06 mm3/s'],
        ['0,45 mm', '0,20 mm', '150 mm/s', '13,50 mm3/s'],
        ['0,50 mm', '0,25 mm', '180 mm/s', '22,50 mm3/s'],
        ['0,60 mm', '0,30 mm', '150 mm/s', '27,00 mm3/s'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Onder extrusie lijkt vaak op een afstellingsprobleem',
      badge: 'Doorstroomplafond',
      html: '<p>Wanneer een profiel de smeltcapaciteit overschrijdt, proberen gebruikers vaak retractie, pressure advance, temperatuur of esteps aan te passen. Die instellingen zijn belangrijk, maar ze kunnen een korte smeltzone geen onbeperkt plastic laten verwerken. Controleer eerst of de gevraagde mm3/s binnen het hotend-capaciteitsvenster valt.</p>',
    },
    {
      type: 'summary',
      title: 'Regels van de doorstroomvergelijking',
      items: [
        'Lijnbreedte, laaghoogte en snelheid vermenigvuldigen direct.',
        'Een kleine verhoging van twee geometrie-instellingen kan een hotend overweldigen, zelfs als de snelheid bescheiden lijkt.',
        'Maximale veilige snelheid is hotendlimiet gedeeld door lijnbreedte en laaghoogte.',
      ],
    },
    { type: 'title', text: 'Thermische Prestatiebenchmarks per Hotend-architectuur', level: 2 },
    {
      type: 'paragraph',
      html: 'Hotend-architectuur bepaalt hoe lang filament in de verwarmde zone blijft en hoe efficiënt warmte naar de kern van het filament wordt verplaatst. Een compacte V6-smeltzone is responsief en licht, maar de praktische doorstroomlimiet is lager dan die van een lange Volcano-smeltzone. High-flow keramische en ultra-high-flow ontwerpen verhogen het verwarmingscontact, de smeltpadlengte of het interne oppervlak om hogere extrusiesnelheden te ondersteunen.',
    },
    {
      type: 'table',
      headers: ['Hotend-architectuur', 'Planningscapaciteit', 'Beste gebruikssituatie', 'Technische kanttekening'],
      rows: [
        ['V6 / MK8', '15 mm3/s', 'Kwaliteitsprofielen, gematigde PLA/PETG-snelheid, standaard desktopprinters', 'Kan snel druklimieten bereiken met brede lijnen of hoge lagen.'],
        ['Revo High Flow', '18 mm3/s', 'High-flow-upgrade met compacte vormfactor', 'Vereist nog steeds temperatuur- en materiaalvalidatie.'],
        ['Volcano', '25 mm3/s', 'Grote nozzles, dikke lagen, functionele onderdelen, snelle conceptprofielen', 'Lange smeltzones kunnen meer nadruppelen en vereisen retractie-optimalisatie.'],
        ['Bambu HF', '32 mm3/s', 'Hoogsnelheidsprofielen voor gesloten printers en snelle PLA-productie', 'Profielwaarden zijn sterk afhankelijk van koeling en filamentgedrag.'],
        ['Rapido UHF / vergelijkbaar', '45 mm3/s', 'Extreme doorstroom, grote extrusiebreedtes, productiedoorvoer', 'Extruderkopel, verwarmingsvermogen en nozzle-geometrie worden beperkende factoren.'],
      ],
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: 'Korte smeltzone', description: 'Compact, responsief, lichtere toolhead, lagere thermische opslag.', icon: 'mdi:thermometer-low', points: ['Goede detailcontrole', 'Lager doorstroomplafond', 'Minder thermische traagheid'] },
        { title: 'Lange smeltzone', description: 'Meer contacttijd voor filament om warmte op te nemen voordat het de nozzle bereikt.', icon: 'mdi:thermometer-lines', highlight: true, points: ['Hogere mm3/s', 'Betere dikke-laag uitvoer', 'Meer nadruppelbeheer'] },
        { title: 'High flow kern', description: 'Moderne geometrie vergroot het contactoppervlak of de verwarmingskoppeling zonder simpelweg de lengte te verlengen.', icon: 'mdi:heat-wave', points: ['Snelle respons', 'Hoge doorvoer', 'Vereist afgestemde profielen'] },
      ],
    },
    {
      type: 'message',
      title: 'Benchmarkwaarden zijn planningsconstanten',
      ariaLabel: 'Opmerking over hotend-benchmarks',
      html: '<p>De vooraf ingestelde limieten zijn bewust conservatieve planningsconstanten. De werkelijke smeltcapaciteit varieert met de filamentsamenstelling, nozzle-diameter, verwarmingselement, thermistorplaatsing, extrusietemperatuur en de mate van kwaliteitsverlies die het onderdeel kan tolereren.</p>',
    },
    { type: 'title', text: 'De Belastingsmeterzones Lezen', level: 2 },
    {
      type: 'paragraph',
      html: 'De belastingsmeter vertaalt doorstroomberekeningen naar een visuele bedrijfstoestand. Onder 70% belasting heeft de hotend ruimte voor normale filamentvariaties, kleine temperatuurschommelingen en snelheidsveranderingen langs het gereedschapspad. Tussen 70% en 90% kan extrusie succesvol blijven, maar het profiel wordt gevoelig. Boven 90% zit de print dicht genoeg bij het smeltplafond dat materiaalbatchvariaties, vocht of een iets koudere nozzle deze in zichtbare onder-extrusie kunnen duwen.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        '0-70%: goede productiereserve voor herhaalbare onderdelen en normale materiaalvariaties.',
        '70-90%: nuttig voor snelheidstesten, maar valideer wanden, bovenvlakken en infill-hechting.',
        '90%+: behandel als een kritieke zone, tenzij het filament en de hotend zijn gemeten met een doorstroomtoren.',
        'Boven 100%: verlaag snelheid, lijnbreedte of laaghoogte voordat u niet-gerelateerde slicer-instellingen aanpast.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:gauge-full',
      title: 'Waarom de meter beter kan zijn dan een waarschuwingsvenster',
      html: '<p>Een waarschuwingsvenster vertelt de gebruiker wat er mis is gegaan na het overschrijden van een drempel. Een belastingsmeter toont de nadering van die drempel. Dit maakt het gemakkelijker om te stoppen bij een geplande operationele marge in plaats van pas te reageren wanneer het profiel al instabiel is geworden.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Kritieke doorstroom is niet alleen een oppervlaktekwaliteitsprobleem',
      badge: 'Mechanische sterkte',
      html: '<p>Niet volledig gesmolten filament kan slecht hechten tussen banen en lagen. Zelfs als de buitenwand er acceptabel uitziet, kunnen infill-hechting, omtrekadhesie en slagsterkte lijden als de doorstroomsnelheid de smeltcapaciteit overschrijdt.</p>',
    },
    { type: 'title', text: 'Hoe de Calculator te Gebruiken met een Slicerprofiel', level: 2 },
    {
      type: 'paragraph',
      html: 'Begin met de werkelijke slicerwaarden voor lijnbreedte, laaghoogte en buitenwand of algemene printsnelheid. Selecteer de dichtstbijzijnde hotend-architectuur. Beweeg de snelheidsschijf totdat de meter uw gewenste belasting bereikt. De weergegeven maximale veilige snelheid is de snelheid die exact de hotendlimiet zou bereiken voor de huidige lijngeometrie. Gebruik voor productiewerk een lagere waarde dan het wiskundige maximum.',
    },
    {
      type: 'paragraph',
      html: 'Als de meter de kritieke zone binnengaat, zijn er drie directe manieren om de doorstroom te verminderen: snelheid verlagen, lijnbreedte verkleinen of laaghoogte verlagen. Temperatuur kan de praktische doorstroom voor sommige materialen verhogen, maar verandert ook glans, overbrugging, overhanggedrag, stringing en maatnauwkeurigheid. De calculator richt zich bewust op geometrie en hardwarecapaciteit omdat dit de meest transparante hefbomen zijn.',
    },
    {
      type: 'proscons',
      title: 'Manieren om de doorstroomvraag te verlagen',
      items: [
        { pro: 'Snelheid verlagen behoudt lijngeometrie en maatvoering.', con: 'Het verhoogt de printtijd en kan de productiedoorvoer verminderen.' },
        { pro: 'Laaghoogte verlagen verbetert de oppervlakteafwerking en vermindert mm3/s.', con: 'Het verhoogt het aantal lagen en kan de klus langer maken ondanks lagere doorstroom.' },
        { pro: 'Lijnbreedte verlagen kan druk verminderen en fijne details verbeteren.', con: 'Het kan dunne wanden verzwakken en het aantal gereedschapspaden vergroten.' },
      ],
    },
    {
      type: 'tip',
      title: 'Valideer met een doorstroomtoren',
      html: '<p>Gebruik de calculator om een realistische snelheidsbereik te kiezen en print vervolgens een doorstroomtesttoren voor het specifieke filament en de temperatuur. De beste productielimiet is de hoogste doorstroom die nog stabiele wanden, consistente glans, goede laaghechting en geen overslaande extruderstappen geeft.</p>',
    },
    { type: 'title', text: 'Symptomen van Overschrijding van de Hotend-smeltcapaciteit', level: 2 },
    {
      type: 'paragraph',
      html: 'Een profiel voorbij de hotend-smeltlimiet kan geleidelijk falen. Eerst kunnen bovenvlakken dunne sporen of kleine openingen vertonen. Vervolgens worden infill-lijnen inconsistent, verliezen contouren hun glans en vertonen hoeken zwakke drukherstel. In ernstigere gevallen klikt de extruder, maalt filament, slaat stappen over of laat brosse secties achter omdat het filament dat de nozzle binnengaat niet volledig is verzacht.',
    },
    {
      type: 'table',
      headers: ['Waargenomen symptoom', 'Waarschijnlijke doorstroomgerelateerde oorzaak', 'Calculatorreactie'],
      rows: [
        ['Dunne wanden bij hoge snelheid', 'Gevraagde mm3/s overschrijdt smeltcapaciteit bij lange rechte bewegingen', 'Snelheid verlagen tot de belasting onder 90% zakt.'],
        ['Ruwe matte extrusie', 'Filament is niet volledig verwarmd door de kern', 'Doorstroom verminderen of temperatuur voorzichtig verhogen voor dat materiaal.'],
        ['Extruder klikt', 'Tegendruk stijgt boven extrudergrip of motorkoppel', 'Doorstroom onmiddellijk verminderen en filamentaandrijfspanning controleren.'],
        ['Zwakke infill-hechting', 'Materiaal komt te koel of inconsistent gesmolten naar buiten', 'Meer thermische ruimte gebruiken voor structurele onderdelen.'],
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Volumetrische doorstroom', definition: 'Het volume plastic dat per seconde door de hotend wordt gevraagd, uitgedrukt in mm3/s.' },
        { term: 'Smeltcapaciteit', definition: 'De praktische hoeveelheid filament die een hotend consistent kan smelten met behoud van printkwaliteit.' },
        { term: 'Lijnbreedte', definition: 'De breedte van een geëxtrudeerde baan in de slicer, meestal iets groter dan de nozzle-diameter.' },
        { term: 'Laaghoogte', definition: 'De verticale dikte van elke geprinte laag; een directe vermenigvuldiger in de doorstroomvraag.' },
        { term: 'Doorstroomreserve', definition: 'Het verschil tussen hotendcapaciteit en de huidige gevraagde doorstroom.' },
      ],
    },
    {
      type: 'summary',
      title: 'Praktische doorstroomworkflow',
      items: [
        'Bereken de gevraagde doorstroom voordat u de snelheid verhoogt.',
        'Houd productieprofielen onder de kritieke zone, tenzij gevalideerd door tests.',
        'Gebruik hotend-voorinstellingen als planningsconstanten en verfijn deze vervolgens met materiaalspecifieke kalibratie.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
