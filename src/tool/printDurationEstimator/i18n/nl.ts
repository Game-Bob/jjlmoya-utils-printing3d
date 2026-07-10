import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PrintDurationEstimatorUI } from '../ui';

const slug = '3d-printtijd-schatten-op-basis-van-laaghoogte-en-snelheid';
const title = '3D Printtijd Schatten op Basis van Laaghoogte en Snelheid';
const description =
  'Schat de duur van een 3D-print zonder een slicer te openen door modelhoogte, laaghoogte, printsnelheid, vulling, complexiteit, verplaatsingsoverhead en filamentverbruik te combineren.';

const faqData = [
  {
    question: 'Hoe lang duurt mijn 3D-print zonder slicer?',
    answer:
      'Je kunt dit schatten aan de hand van het totale aantal lagen, het geschatte materiaalvolume, de gemiddelde printsnelheid, de vulling en een marge voor verplaatsingen en richtingsveranderingen. Een slicer blijft nauwkeuriger voor definitieve taken.',
  },
  {
    question: 'Waarom verandert laaghoogte de printtijd zo sterk?',
    answer:
      'Laaghoogte verandert het aantal Z-lagen. Een profiel van 0,12 mm creëert veel meer lagen dan een profiel van 0,28 mm voor dezelfde modelhoogte, waardoor de printer omtrekken, vulling en laagwissel-overhead veel vaker herhaalt.',
  },
  {
    question: 'Waarom is de echte printtijd langer dan snelheid gedeeld door afstand?',
    answer:
      'Printers behouden zelden de gevraagde snelheid in bochten, korte segmenten, kleine details, retracties, Z-bewegingen en verplaatsingen. Acceleratielimieten en overhead maken de werkelijke duur langer dan de ideale bewegingsberekening.',
  },
  {
    question: 'Is dit nauwkeuriger dan een slicer-schatting?',
    answer:
      'Nee. Deze calculator is bedoeld voor vroege planning, offertes en verkennende vergelijkingen. Een slicer kan de exacte geometrie, ondersteuningen, naden, acceleratie-instellingen, extrusiebreedte en gereedschapspadvolgorde inspecteren.',
  },
];

const howToData = [
  { name: 'Voer de modelhoogte in', text: 'Gebruik de Z-hoogte van het model of het hoogste object in de geplande printtaak.' },
  { name: 'Kies de laaghoogte', text: 'Gebruik de werkelijke profielwaarde, bijvoorbeeld 0,20 mm voor een typische FDM-kladkwaliteit-instelling.' },
  { name: 'Voeg snelheid, voetafdruk en vulling toe', text: 'Gebruik de gemiddelde printsnelheid, een geschatte XY-voetafdruk en het beoogde vulpercentage.' },
  { name: 'Pas complexiteit en overhead aan', text: 'Verhoog de complexiteit voor kleine details en verhoog de overhead voor veel verplaatsingen, ondersteuningen of retracties.' },
  { name: 'Vergelijk snelheidsscenario\'s', text: 'Gebruik de rijen voor 40, 60 en 80 mm/s om te zien of een hogere printsnelheid de totale taakduur significant verandert.' },
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
  step: howToData.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
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

export const content: ToolLocaleContent<PrintDurationEstimatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Invoer van de 3D-printtijd-schatter',
    resultsAriaLabel: 'Geschatte 3D-printtijd resultaten',
    unitSystemLabel: 'Eenheden',
    metricLabel: 'Metrisch',
    imperialLabel: 'US',
    modelHeightLabel: 'Modelhoogte',
    modelHeightHint: 'Hoogste Z-afmeting van de print.',
    layerHeightLabel: 'Laaghoogte',
    speedLabel: 'Gemiddelde printsnelheid',
    footprintLabel: 'Geschatte voetafdruk',
    footprintHint: 'Geschatte XY-oppervlakte als volumenproxy.',
    infillLabel: 'Vuldichtheid',
    complexityLabel: 'Complexiteitsfactor',
    complexityHint: '0,80 voor eenvoudige vormen, 1,20 voor kleine details en korte segmenten.',
    overheadLabel: 'Verplaatsingsoverhead',
    filamentDiameterLabel: 'Filamentdiameter',
    densityLabel: 'Materiaaldichtheid',
    timeLabel: 'Geschatte printtijd',
    layersLabel: 'Totaal aantal lagen',
    materialLabel: 'Materiaalschatting',
    filamentLabel: 'Filamentlengte',
    effectiveSpeedLabel: 'Effectieve snelheid',
    baseTimeLabel: 'Extrusietijd',
    overheadTimeLabel: 'Overheadtijd',
    comparisonLabel: 'Snelheidsvergelijking',
    minutesUnit: 'min',
    hoursUnit: 'u',
    layersUnit: 'lagen',
    gramUnit: 'g',
    ounceUnit: 'oz',
    meterUnit: 'm',
    footUnit: 'ft',
    percentUnit: '%',
    mmUnit: 'mm',
    inchUnit: 'in',
    mm2Unit: 'mm²',
    in2Unit: 'in²',
    mmSUnit: 'mm/s',
    inSUnit: 'in/s',
    cm3Unit: 'cm³',
    densityUnit: 'g/cm³',
    multiplierUnit: 'x',
    lowInsight: 'Korte schatting: slicer-overhead, bed-opwarmen en afkoelen kunnen een groot deel van de werkelijke verstreken tijd worden.',
    balancedInsight: 'Evenwichtige schatting: snelheidsveranderingen doen ertoe, maar laag aantal en overhead bepalen nog steeds de uiteindelijke duur.',
    highInsight: 'Lange schatting: overweeg dikkere lagen, minder vulling, minder ondersteuningen of het splitsen van het model voordat je simpelweg de snelheid verhoogt.',
  },
  seo: [
    { type: 'title', text: 'Hoe Schat je de 3D Printtijd op Basis van Laaghoogte en Snelheid', level: 2 },
    {
      type: 'paragraph',
      html: 'Een <strong>3D-printtijd-schatter op basis van laaghoogte en snelheid</strong> is handig wanneer je een planningsgetal nodig hebt voordat je een slicer opent, meerdere printprofielen vergelijkt of een onderdeel offerte op basis van ruwe afmetingen. Het kernidee is eenvoudig: de modelhoogte gedeeld door de laaghoogte geeft het aantal lagen, en de geschatte hoeveelheid geëxtrudeerd pad gedeeld door de gemiddelde snelheid geeft de bewegingstijd. Het moeilijke deel is dat echt FDM-printen geen schone transportband is. De nozzle vertraagt in bochten, retracties onderbreken de extrusie, verplaatsingen voegen niet-printende afstand toe en korte segmenten bereiken zelden de opgelegde snelheid.',
    },
    {
      type: 'paragraph',
      html: 'Deze calculator gaat bewust verder dan de meest basale formule. In plaats van aan te nemen dat <code>hoogte / laaghoogte / snelheid</code> voldoende is, combineert hij een geschat modelvolume, vuldichtheid, extrusielijnbreedte, een complexiteitsfactor, laagwisseltijd en een verplaatsingsoverheadpercentage. Het resultaat is nog steeds een schatting, geen vervanging van de slicer, maar het beantwoordt de praktische vraag die gebruikers zoeken: <strong>hoe lang duurt mijn 3D-print</strong> als ik de laaghoogte, vulling of snelheid verander.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0,20 mm', label: 'Gebruikelijke FDM-laaghoogte voor uitgebalanceerde prints', icon: 'mdi:layers-outline' },
        { value: '15-20 %', label: 'Nuttig startbereik voor verplaatsings- en bewegings overhead', icon: 'mdi:routes' },
        { value: '40-80 mm/s', label: 'Typische vergelijkingssnelheden voor desktop printers', icon: 'mdi:speedometer' },
        { value: '1,75 mm', label: 'Gebruikelijke filamentdiameter voor het berekenen van materiaallengte', icon: 'mdi:circle-outline' },
      ],
    },
    {
      type: 'tip',
      title: 'Gebruik de gemiddelde snelheid, niet de topsnelheid',
      html: '<p>Als je slicer-profiel 120 mm/s aangeeft maar buitenwanden draaien op 40 mm/s, kleine omtrekken op 25 mm/s en vulling op 90 mm/s, dan is de gemiddelde printsnelheid geen 120 mm/s. Voor planning geeft een realistische gemiddelde snelheid vaak een betere schatting dan de snelste beweging in het profiel.</p>',
    },

    { type: 'title', text: 'Waarom Laaghoogte Zo\'n Groot Effect Heeft op de Duur', level: 2 },
    {
      type: 'paragraph',
      html: 'Laaghoogte bepaalt hoe vaak de printer dezelfde basishandeling moet herhalen: omtrek, interne structuur, boven- en onderoppervlakken, verplaatsing naar het volgende eiland en Z-beweging naar de volgende laag. Een model van 80 mm hoog heeft 400 lagen bij 0,20 mm, maar ongeveer 667 lagen bij 0,12 mm. Zelfs als elke dunne laag iets minder plastic per doorgang gebruikt, voert de printer veel meer laagovergangen, meer herhaalde contouren en meer mogelijkheden voor langzame, door acceleratie beperkte beweging uit.',
    },
    {
      type: 'table',
      headers: ['Modelhoogte', 'Laaghoogte', 'Aantal lagen', 'Planning interpretatie'],
      rows: [
        ['80 mm', '0,28 mm', '286 lagen', 'Snelkladprofiel met zichtbare laaglijnen.'],
        ['80 mm', '0,20 mm', '400 lagen', 'Gebalanceerde kwaliteit en duur voor veel onderdelen.'],
        ['80 mm', '0,12 mm', '667 lagen', 'Fijn detailprofiel dat vele uren kan toevoegen.'],
        ['160 mm', '0,20 mm', '800 lagen', 'Hoge onderdelen worden duurzaam, zelfs bij normale snelheden.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Wanneer laaghoogte de echte bottleneck is',
      badge: 'Controleer lagen',
      html: '<p>Als het verhogen van de printsnelheid de schatting nauwelijks verandert, wordt de taak mogelijk gedomineerd door het aantal lagen, korte segmenten en overhead. In dat geval kan overschakelen van 0,12 mm naar 0,20 mm meer tijd besparen dan de printer verhogen van 60 mm/s naar 80 mm/s.</p>',
    },
    {
      type: 'summary',
      title: 'Beslissingsregels voor laaghoogte',
      items: [
        'Gebruik dikkere lagen voor prototypes, beugels, bevestigingen en onderdelen waar Z-oppervlakteafwerking niet kritisch is.',
        'Gebruik dunnere lagen voor zachte curven, kleine tekst, miniaturen en cosmetische oppervlakken.',
        'Bij hoge onderdelen stapelen laaghoogteveranderingen zich snel op omdat elke extra laag de overhead herhaalt.',
      ],
    },

    { type: 'title', text: 'Printsnelheid, Acceleratie en de Complexiteitsfactor', level: 2 },
    {
      type: 'paragraph',
      html: 'Een printsnelheidswaarde is een doel, geen belofte. De printer moet versnellen naar die snelheid, vertragen voor bochten, de grenzen van jerk of junction deviation gehoorzamen en soms vertragen voor koeling, bruggen, overhangen, minimale laagtijd en kleine eilanden. Daarom heeft een <strong>printsnelheid-naar-printtijd-calculator</strong> een complexiteitsfactor nodig. Een schone doos met lange rechte vullijnen kan dicht bij de gevraagde snelheid werken. Een gedetailleerd figuurtje, logo, rooster, schroefdraadonderdeel of organisch beeldhouwwerk kan het grootste deel van de tijd doorbrengen op korte segmenten waar acceleratielimieten meer uitmaken dan de maximale snelheid.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Eenvoudige geometrie',
          description: 'Dozen, panelen en lange vulbanen kunnen een lagere complexiteitsvermenigvuldiger gebruiken.',
          icon: 'mdi:cube-outline',
          points: ['Langere continue paden', 'Minder eilanden', 'Minder retractie-overhead'],
        },
        {
          title: 'Gemengde geometrie',
          description: 'De meeste beugels, behuizingen, rekwisieten en huishoudelijke onderdelen zitten dicht bij de standaardvermenigvuldiger.',
          icon: 'mdi:shape-outline',
          highlight: true,
          points: ['Omtrekken en vulling zijn beide belangrijk', 'Matige verplaatsingen', 'Gebalanceerde acceleratieverliezen'],
        },
        {
          title: 'Gedetailleerde geometrie',
          description: 'Kleine kenmerken, tekst, roosters, ondersteuningen en organische gebogen oppervlakken hebben een hogere vermenigvuldiger nodig.',
          icon: 'mdi:vector-polyline',
          points: ['Korte segmenten domineren', 'Meer starts en stops', 'Meer retracties en verplaatsingen'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Printsnelheid verhogen: wat verbetert en wat niet',
      items: [
        { pro: 'Lange vullijnen kunnen sneller klaar zijn bij hogere snelheid.', con: 'Buitenwanden en kleine details kunnen nog steeds worden beperkt door profiellimieten.' },
        { pro: 'Grote, weinig gedetailleerde prototypes kunnen baat hebben bij snellere beweging.', con: 'Acceleratie, ringing, extrusiedebiet en koeling kunnen de bruikbare snelheid beperken.' },
        { pro: 'Een snelheidsvergelijkingstabel toont snel de potentiële besparing.', con: 'Het kan slicer-specifieke vertragingen zoals minimale laagtijd niet voorspellen.' },
      ],
    },
    {
      type: 'message',
      title: 'Snelheidsschattingen zijn het nuttigst voor relatieve vergelijking',
      ariaLabel: 'Opmerking bij snelheidsschatting',
      html: '<p>Gebruik de rijen voor 40, 60 en 80 mm/s voor richtinggevende vergelijking. Als 80 mm/s slechts een kleine besparing oplevert, wordt de print waarschijnlijk beperkt door lagen, overhead of complexiteit in plaats van door ruwe snelheid.</p>',
    },

    { type: 'title', text: 'Vulling, Volume en Materiaaltijd', level: 2 },
    {
      type: 'paragraph',
      html: 'De calculator gebruikt het voetafdruk-oppervlak en de modelhoogte als een ruwe volume-proxy en schaalt dat volume vervolgens met een effectieve vaste-stofverhouding. Dit is niet zo nauwkeurig als het uitlezen van maasgeometrie, maar het vangt een belangrijke fysieke waarheid: wanden en huiden verdwijnen niet wanneer de vulling wordt verminderd. Een onderdeel dat met 15 % vulling is geprint, heeft nog steeds omtrekken, bovenlagen, onderlagen, kleine massieve kenmerken en soms ondersteuningsinterfaces. De calculator houdt een scheelaandeel in de schatting, zodat lage vulling de printtijd niet onrealistisch tot bijna niets laat instorten.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Vergroot het voetafdruk-oppervlak voor brede objecten, dozen, platte platen, bakken en grote behuizingen.',
        'Verklein het voetafdruk-oppervlak voor smalle torens, dunne figuurtjes, kleine beugels en open frames.',
        'Gebruik het vulpercentage als planning controle, niet als totale onderdeeldichtheid.',
        'Onthoud dat ondersteuningen, randen, vlotten, reinigingstorens en meerkleurig afval tijd toevoegen buiten het model zelf.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:printer-3d-nozzle',
      title: 'Voorbeeld: waarom 20 % vulling geen 20 % printtijd is',
      html: '<p>Een behuizing van 80 mm hoog kan vier wanden, zes onderlagen, zes bovenlagen, schroefbussen en een grote interne holte hebben. Het verlagen van de vulling van 40 % naar 20 % vermindert de lengte van het interne pad, maar de wanden en huiden worden nog steeds op elke laag geprint. Bij modellen met veel omtrekken kan het veranderen van het aantal wanden of de laaghoogte de tijd meer beïnvloeden dan alleen het veranderen van de vulling.</p>',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Voetafdruk-oppervlak', definition: 'Het geschatte XY-oppervlak dat het model inneemt, hier gebruikt als een ruwe volume-invoer.' },
        { term: 'Effectieve vaste-stofverhouding', definition: 'Een planningsmengsel van scheelmateriaal en vulmateriaal gebruikt om het geëxtrudeerde volume te schatten.' },
        { term: 'Extrusielijn', definition: 'De plastic kraal die door de nozzle wordt gelegd; de dwarsdoorsnede hangt af van laaghoogte en extrusiebreedte.' },
        { term: 'Filamentlengte', definition: 'De lengte van ruw filament nodig om het geschatte plastic volume te leveren.' },
      ],
    },

    { type: 'title', text: 'Verplaatsingsoverhead: Het Ontbrekende Stuk in Eenvoudige Calculators', level: 2 },
    {
      type: 'paragraph',
      html: 'Een eenvoudige duurschatting negeert vaak niet-extruderende beweging. Echte printers bewegen tussen eilanden, retracteren en primen filament, vegen, huppelen in Z, vermijden geprinte onderdelen, veranderen van richting en pauzeren soms om te koelen. Deze acties creëren geen zichtbaar materiaal, maar verbruiken wel kloktijd. Een vast overheadpercentage is een praktische manier om verplaatsingen te verantwoorden wanneer je geen volledig slicer-gereedschapspad hebt. Het standaardbereik van 15-20 % is een nuttig startpunt voor gewone FDM-onderdelen van één materiaal.',
    },
    {
      type: 'table',
      headers: ['Printconditie', 'Voorgestelde overhead', 'Reden'],
      rows: [
        ['Enkel eenvoudig onderdeel', '10-15 %', 'Weinig eilanden, minder retracties, meestal continue paden.'],
        ['Typisch functioneel onderdeel', '15-22 %', 'Matige omtrekken, vulling en verplaatsingen.'],
        ['Veel kleine onderdelen op één plaat', '22-35 %', 'Frequente verplaatsingen tussen objecten en herhaalde starts.'],
        ['Ondersteuningen of gedetailleerde oppervlakken', '25-40 %', 'Ondersteuningsinterfaces, korte segmenten en retracties voegen tijd toe.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Bed opwarmen is niet inbegrepen',
      badge: 'Totale taaktijd',
      html: '<p>De schatting richt zich op beweging- en extrusietijd. Voeg aparte tijd toe voor bed-opwarmen, nozzle-opwarmen, sonderen, mesh-nivellering, filament laden, koelen en onderdeel verwijderen bij het plannen van de werkelijke machinebezetting.</p>',
    },
    {
      type: 'tip',
      title: 'Kalibreer overhead op basis van een echte print',
      html: '<p>Neem een voltooide taak, vergelijk de slicer- of stopwatchduur met deze calculator en pas vervolgens overhead en complexiteit aan totdat de schatting overeenkomt. Die lokale kalibratie verbetert toekomstige planning meer dan het permanent gebruiken van generieke waarden.</p>',
    },

    { type: 'title', text: 'Wanneer Vertrouw je Deze Calculator en Wanneer Gebruik je een Slicer', level: 2 },
    {
      type: 'paragraph',
      html: 'Dit hulpmiddel is het sterkst voor vroege schattingen, offertegesprekken, klassikale demonstraties en het vergelijken van laaghoogte versus snelheid voordat je je vastlegt op een profiel. Het is vooral handig wanneer de exacte STL nog niet beschikbaar is, wanneer een klant alleen geschatte afmetingen verstrekt, of wanneer je wilt weten of een verandering de moeite van het onderzoeken waard is. Het is niet ontworpen om slicer-schattingen te vervangen voor productiekritieke taken, omdat slicers de exacte maasgeometrie, kenmerkspecifieke snelheden, ondersteuningspaden, wandvolgorde, boven- en onderoppervlakken, naadplaatsing, acceleratieregeling en machinespecifiek firmwaregedrag inspecteren.',
    },
    {
      type: 'list',
      icon: 'mdi:calculator-variant-outline',
      items: [
        'Gebruik deze calculator om snel 0,12 mm-, 0,20 mm- en 0,28 mm-laagprofielen te vergelijken.',
        'Gebruik hem om te schatten of een hoog model laagbeperkt is voordat je de snelheid wijzigt.',
        'Gebruik hem om een ruw materiaalvolume, filamentlengte en gewicht te krijgen op basis van geschatte afmetingen.',
        'Gebruik een slicer voordat je materiaal koopt, machinetijd reserveert of leverdata belooft.',
      ],
    },
    {
      type: 'table',
      headers: ['Vraag', 'Antwoord van calculator', 'Antwoord van slicer'],
      rows: [
        ['Zullen dikkere lagen tijd besparen?', 'Goede richtinggevende schatting op basis van laag aantal.', 'Exact resultaat voor specifiek pad en oppervlak.'],
        ['Zal 80 mm/s veel sneller zijn dan 60 mm/s?', 'Nuttige snelheidsscenario-vergelijking.', 'Exact gedrag per snelheids- en acceleratiekenmerk.'],
        ['Hoeveel filament heb ik mogelijk nodig?', 'Geschat volume, lengte en gewicht.', 'Profielspecifiek materiaalrapport.'],
        ['Kan ik deze productietaak offerte?', 'Alleen voor voorlopige screening.', 'Vereist voor definitieve offerte en planning.'],
      ],
    },
    {
      type: 'summary',
      title: 'Beste workflow',
      items: [
        'Begin met deze schatter om de keuze voor laaghoogte, snelheid en vulling te verkleinen.',
        'Pas complexiteit en overhead aan met behulp van een bekende print van je eigen machine.',
        'Slic het definitieve kandidaatprofiel opnieuw voordat je je vastlegt op kosten, tijd of levering.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
