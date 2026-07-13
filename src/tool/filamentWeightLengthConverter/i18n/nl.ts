import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FilamentWeightLengthConverterUI } from '../ui';

const slug = 'filament-gewicht-lengte-omzetter';
const title = 'Filament Gewicht naar Lengte Omzetter: Nauwkeurige Materiaalschatting';
const description = 'Zet filamentgrammen om naar meters en volume met materiaaldichtheid, 1,75 mm of 2,85 mm diameter, met een directe spoeltoereikendheidscheck.';

const faqData = [
  {
    question: 'Hoe reken je filamentgrammen om naar meters?',
    answer: 'Deel de massa door de materiaaldichtheid om het volume te krijgen, converteer dat volume van kubieke centimeters naar kubieke millimeters, en deel het vervolgens door het cirkelvormige dwarsdoorsnedeoppervlak van de filamentdiameter.',
  },
  {
    question: 'Waarom is de dichtheid van filamentmateriaal belangrijk?',
    answer: 'Hetzelfde gewicht aan PLA, PETG, ABS, TPU of gevuld filament neemt een ander volume in omdat elke polymeer een andere dichtheid heeft. Lengte is volume gedeeld door filamentoppervlak, dus dichtheid heeft direct invloed op de meterschatting.',
  },
  {
    question: 'Is 1,75 mm filament altijd even lang per kilogram?',
    answer: 'Nee. Diametertolerantie, materiaaldichtheid, additieven en vochtgehalte veranderen allemaal de werkelijke lengte. De calculator geeft een plantschatting op basis van nominale diameter en dichtheid.',
  },
  {
    question: 'Kan ik de calculator gebruiken voor 2,85 mm filament?',
    answer: 'Ja. Voer 2,85 mm in, of schakel over naar imperiale eenheden en voer de equivalente diameter in. Het dwarsdoorsnedeoppervlak wordt direct bijgewerkt.',
  },
];

const howToData = [
  { name: 'Voer de filamentmassa in', text: 'Typ de hoeveelheid filament die de slicer nodig heeft, het resterende gewicht op een spoel, of een andere gramwaarde die u wilt omrekenen.' },
  { name: 'Kies het materiaal', text: 'Selecteer PLA, PETG, ABS, TPU, Nylon, PC of een gevulde blend, zodat de calculator de juiste dichtheid kan gebruiken.' },
  { name: 'Stel de filamentdiameter in', text: 'Gebruik 1,75 mm, 2,85 mm of een gemeten diameter als u wilt dat de lengteschatting een specifieke spoel weerspiegelt.' },
  { name: 'Controleer de spoeltoereikendheid', text: 'Voer optioneel het resterende spoelgewicht in om te zien of u voldoende materiaal heeft en het exacte overschot of tekort.' },
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
  applicationCategory: 'EngineeringApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<FilamentWeightLengthConverterUI> = {
  slug,
  title,
  description,
  ui: {
    unitSystemLabel: 'Eenheden',
    metricLabel: 'Metrisch',
    imperialLabel: 'Imperiaal',
    inputsTitle: 'Materiaalvoorraad schatten',
    materialLabel: 'Materiaal',
    materialPlaLabel: 'PLA',
    materialPetgLabel: 'PETG',
    materialAbsLabel: 'ABS',
    materialAsaLabel: 'ASA',
    materialTpuLabel: 'TPU',
    materialPaLabel: 'Nylon PA',
    materialPcLabel: 'Polycarbonaat',
    materialWoodLabel: 'Met hout gevuld PLA',
    materialCarbonLabel: 'Koolstofvezel blend',
    materialMetalLabel: 'Met metaal gevuld PLA',
    densityLabel: 'Dichtheid',
    densityUnit: 'g/cm3',
    weightLabel: 'Filamentgewicht',
    weightSliderLabel: 'Printgewicht schuifregelaar',
    diameterLabel: 'Filamentdiameter',
    stockLabel: 'Resterend spoelgewicht',
    stockPlaceholder: 'Optionele voorraadcheck',
    spoolStateLabel: 'Spoelstatus',
    spoolScaleLabel: 'Verbruikte / beschikbare massa',
    cutLineLabel: 'Stopstreep bij leegloop',
    resultLengthLabel: 'Geschatte filamentlengte',
    resultVolumeLabel: 'Polymeervolume',
    resultAreaLabel: 'Dwarsdoorsnede',
    resultGramsMeterLabel: 'Lineaire massa',
    enoughLabel: 'Spoel toereikend',
    shortLabel: 'Spoel ontoereikend',
    noStockLabel: 'Voorraadcheck inactief',
    surplusLabel: 'Overschot',
    missingLabel: 'Tekort',
    formulaLabel: 'Berekeningswijze',
    formulaText: 'volume = massa / dichtheid -> lengte = volume / dwarsdoorsnede',
    linearMassMetricUnit: 'g/m',
    linearMassImperialUnit: 'oz/ft',
    gramsUnit: 'g',
    ouncesUnit: 'oz',
    metersUnit: 'm',
    feetUnit: 'ft',
    cm3Unit: 'cm3',
    in3Unit: 'in3',
    in2Unit: 'in2',
    mm2Unit: 'mm2',
    mmUnit: 'mm',
    inchUnit: 'in',
  },
  seo: [
    { type: 'title', text: 'Waarom een dichtheidsgebaseerde filament grammen-naar-meters calculator nauwkeuriger is', level: 2 },
    { type: 'paragraph', html: 'Een filamentgewicht-naar-lengte-omzetter is slechts zo goed als het materiaalmodel erachter. Een generieke calculator gaat er vaak van uit dat één kilogram van elk filament hetzelfde volume inneemt, maar FFF-filament wordt per massa verkocht terwijl de extruder een cilindrische streng per lengte verbruikt. De brug tussen deze twee metingen is <strong>dichtheid</strong>. PLA met ongeveer 1,24 g/cm3, PETG rond 1,27 g/cm3, ABS nabij 1,04 g/cm3 en TPU rond 1,21 g/cm3 worden niet naar hetzelfde aantal meters omgerekend, zelfs niet als het spoelgewicht en de diameter identiek zijn.' },
    { type: 'paragraph', html: 'De berekening begint met massa. Het delen van grammen door dichtheid levert het volume in kubieke centimeters op. Dat volume wordt vervolgens omgezet naar kubieke millimeters omdat filamentdiameter doorgaans in millimeters wordt gemeten. Het dwarsdoorsnedeoppervlak is de oppervlakte van een cirkel: pi vermenigvuldigd met de straal in het kwadraat. Tot slot levert volume gedeeld door oppervlakte een lengte in millimeters op, die kan worden omgerekend naar meters of voet. Het resultaat is een praktische schatting om te controleren of het materiaal dat een slicer rapporteert, kan worden geprint van de voorraad die nog op een spoel zit.' },
    { type: 'stats', columns: 4, items: [
      { value: '1,24', label: 'Typische PLA-dichtheid in g/cm3' },
      { value: '2,405', label: 'Oppervlakte in mm2 voor nominaal 1,75 mm filament' },
      { value: '6,379', label: 'Oppervlakte in mm2 voor nominaal 2,85 mm filament' },
      { value: '3 invoerwaarden', label: 'Massa, dichtheid en diameter bepalen de omrekening' },
    ] },
    { type: 'table', headers: ['Materiaal', 'Planningsdichtheid', 'Waarom dit getal ertoe doet'], rows: [
      ['PLA', '1,24 g/cm3', 'Veelgebruikte referentie voor desktop printing en een goede basislijn voor prototypes.'],
      ['PETG', '1,27 g/cm3', 'Iets dichter dan PLA, dus dezelfde gramhoeveelheid geeft minder lengte.'],
      ['ABS', '1,04 g/cm3', 'Lagere dichtheid betekent meer lengte per gram dan PLA bij dezelfde diameter.'],
      ['TPU', '1,21 g/cm3', 'Flexibel filament ligt dicht bij PLA, maar het blijft de moeite waard om dit apart te modelleren.'],
      ['Gevulde blends', 'Variabel', 'Hout-, koolstofvezel-, metaal- en glasadditieven kunnen de dichtheid ver van het basispolymeer doen afwijken.'],
    ] },
    { type: 'title', text: 'De exacte omrekenformules voor filamentvoorraadschatting', level: 2 },
    { type: 'paragraph', html: 'Het wiskundige model is bewust klein gehouden omdat elke term een fysieke betekenis heeft. Dwarsdoorsnede is <code>pi x (diameter / 2)^2</code>. Volume is <code>gewicht / dichtheid</code>. Lengte is <code>volume x 1000 / dwarsdoorsnede</code> wanneer volume in cm3 is en dwarsdoorsnede in mm2; het resultaat is millimeters, vervolgens gedeeld door 1000 voor meters. Dit is dezelfde geometrie die wordt gebruikt om extrusievolume, maximale stroomsnelheid en materiaalverbruik in slicers te beredeneren.' },
    { type: 'diagnostic', variant: 'info', title: 'Diametertolerantie is de grootste dagelijkse onzekerheid', badge: 'Meetnotitie', html: 'Een nominale 1,75 mm-spoel is mogelijk niet over de hele rol exact 1,75 mm. Omdat het oppervlak afhangt van de straal in het kwadraat, verandert een klein diameterverschil de berekende lengte en het werkelijke extrusievolume. Voor normale voorraadcontroles is de nominale diameter prima. Voor kalibratie gebruikt u een schuifmaat op meerdere punten en voert u de gemiddelde diameter in.' },
    { type: 'list', items: [
      'Gebruik grammen bij het overnemen van materiaalverbruik uit slicers zoals PrusaSlicer, Cura, Bambu Studio of OrcaSlicer.',
      'Gebruik het gemeten resterende spoelgewicht na aftrek van het lege spoeltarra voor een betrouwbare toereikendheidscheck.',
      'Gebruik de dichtheid van het gegevensblad van de fabrikant bij het printen van speciale composieten.',
      'Gebruik 2,85 mm in plaats van 1,75 mm wanneer de machine groter filament verwerkt, omdat het dwarsdoorsnedeoppervlak aanzienlijk verschilt.',
    ] },
    { type: 'tip', title: 'Reken leeg spoeltarra niet mee bij de resterende voorraad', html: 'Een spoel op een weegschaal bevat het gewicht van de plastic of kartonnen kern. Als de lege spoel 180 g weegt en de weegschaal geeft 430 g aan, dan moet de bruikbare filamentschatting 250 g zijn. Het invoeren van het bruto spoelgewicht maakt het groene toereikendheidssignaal te optimistisch.' },
    { type: 'title', text: '1,75 mm versus 2,85 mm filamentlengte bij hetzelfde gewicht', level: 2 },
    { type: 'paragraph', html: 'Diameter heeft een grotere impact dan veel gebruikers verwachten. Een 2,85 mm-streng heeft meer dan twee keer het dwarsdoorsnedeoppervlak van een 1,75 mm-streng, dus één kilogram wordt veel minder meters. Dit betekent niet dat de ene diameter op zichzelf voordeliger is; beide kunnen hetzelfde onderdeelvolume printen. Het betekent wel dat het voorraadlengtegetal niet kan worden vergeleken zonder diametercontext. Wanneer een slicer grammen rapporteert, normaliseert deze het materiaalverbruik al op basis van massa; wanneer een printer-runoutsensor of handmatige spoelschatting in meters denkt, wordt diameter centraal.' },
    { type: 'comparative', columns: 2, items: [
      { title: '1,75 mm filament', description: 'Langere strenglengte per kilogram en het dominante formaat voor huidige desktopprinters.', points: ['Handig voor compacte extruders', 'Meer meters op dezelfde spoelmassa', 'Nominaal oppervlak ongeveer 2,405 mm2'] },
      { title: '2,85 mm filament', description: 'Kortere strenglengte per kilogram met een grotere voedingsdoorsnede, vaak te zien bij oudere of professionele machines.', points: ['Nominaal oppervlak ongeveer 6,379 mm2', 'Minder gevoelig voor feedercompressie in sommige opstellingen', 'Mag niet uitgaan van 1,75 mm-aannames'] },
    ] },
    { type: 'table', headers: ['Scenario', 'Wat verandert', 'Planningsgevolg'], rows: [
      ['Zelfde polymeer, grotere diameter', 'Oppervlakte neemt toe', 'Meters nemen af voor dezelfde grammen.'],
      ['Zelfde diameter, lagere dichtheid', 'Volume neemt toe', 'Meters nemen toe voor dezelfde grammen.'],
      ['Zelfde grammen, gevuld filament', 'Dichtheid kan toenemen', 'Meters kunnen korter zijn dan verwacht.'],
      ['Nat filament', 'Gemeten massa neemt licht toe', 'De spoel kan zwaarder lijken zonder nuttig droog polymeer toe te voegen.'],
    ] },
    { type: 'title', text: 'De spoeltoereikendheidscheck gebruiken voor een lange print', level: 2 },
    { type: 'paragraph', html: 'Het optionele veld voor resterende voorraad verandert de omzetter in een go- of no-go-dashboard. Voer de massa in die de taak vereist als filamentgewicht, en voer vervolgens het bruikbare filament in dat nog op de huidige spoel zit. De uitvoer vergelijkt grammen direct en zet het verschil ook om in meters of voet met hetzelfde materiaal- en diametermodel. Groen betekent dat de spoel voldoende voorraad heeft; rood betekent dat de taak tekortschiet en toont de exacte afwijking.' },
    { type: 'card', icon: 'mdi:traffic-light', title: 'Waarom zowel grammen als meters worden getoond', html: 'Grammen zijn de taal van aankoop en slicers. Meters zijn de strenglengtetaal die door sommige firmware-schermen, runout-schattingen en handmatige spoelberekeningen wordt gebruikt. Het tonen van beide voorkomt een veelgemaakte planningsfout: voldoende lengte hebben onder de ene dichtheidsaanname, maar niet genoeg massa onder het werkelijke materiaal.' },
    { type: 'proscons', title: 'Voorraadvalidatiemethoden', items: [
      { pro: 'De spoel wegen is snel en werkt zelfs als de rol gedeeltelijk is gebruikt.', con: 'U moet het tarra van de lege spoel weten of schatten.' },
      { pro: 'Het gebruik van slicergrammen is meestal consistent met het aankoopgewicht van het materiaal.', con: 'Slicerschattingen kunnen veranderen door purgevolume, ondersteuningen, brim en modifier-meshes.' },
      { pro: 'Lengte is intuïtief bij het vergelijken van filamentpaden en runout-afstanden.', con: 'Lengte verandert met dichtheid en diameter, dus het is niet universeel over materialen heen.' },
      { pro: 'Dichtheidsgebaseerde omrekening werkt beter voor PLA, PETG, ABS, TPU en composieten.', con: 'Fabrikantspecifieke additieven kunnen een aangepaste dichtheidswaarde vereisen.' },
    ] },
    { type: 'title', text: 'Composiet- en speciale filamenten hebben aangepaste dichtheidswaarden nodig', level: 2 },
    { type: 'paragraph', html: 'Gevulde filamenten zijn de belangrijkste reden waarom een serieuze materiaalschatter dichtheid moet tonen in plaats van te verbergen. Met hout gevuld PLA, koolstofvezelnylon, met metaal gevuld PLA, gloeifilament, met glas gevulde technische materialen en keramiekachtige blends kunnen sterk afwijken van het basispolymeer. Een met metaal gevuld filament kan zwaar aanvoelen omdat de dichtheid hoog is; dezelfde 500 g kan veel minder volume en minder lengte vertegenwoordigen dan standaard PLA. Voor een dure technische print is dat verschil niet academisch. Het kan bepalen of de laatste tien procent van een print afkomt of niet.' },
    { type: 'glossary', items: [
      { term: 'Dichtheid', definition: 'Massa per volume-eenheid, hier uitgedrukt als gram per kubieke centimeter.' },
      { term: 'Dwarsdoorsnede', definition: 'Het cirkelvormige oppervlak van de filamentstreng, berekend op basis van de diameter.' },
      { term: 'Lineaire massa', definition: 'Hoeveel gram één meter of één voet filament weegt voor het geselecteerde materiaal en diameter.' },
      { term: 'Tarra', definition: 'Het lege spoelgewicht dat van een weegschaalmeting moet worden afgetrokken.' },
      { term: 'Nominale diameter', definition: 'De geadverteerde filamentmaat, meestal 1,75 mm of 2,85 mm, vóór het meten van de werkelijke tolerantie.' },
    ] },
    { type: 'message', title: 'Fabrikantgegevens winnen', html: 'Wanneer de spoel of het technische gegevensblad de dichtheid vermeldt, gebruik dan die waarde. Generieke dichtheidspresets zijn handig voor planning, maar leveranciersspecifieke formules, pigmentbeladingen en versterkingen kunnen het getal veranderen.' },
    { type: 'title', text: 'Praktische voorbeelden voor materiaalschatting bij 3D-printen', level: 2 },
    { type: 'paragraph', html: 'Stel dat een slicer rapporteert dat een PETG-beugel 186 g nodig heeft en u hebt een gedeeltelijk gebruikte spoel. PETG bij 1,27 g/cm3 met 1,75 mm filament komt overeen met ongeveer eenenzestig meter. Als het bruikbare spoelgewicht na tarra 220 g is, rapporteert het dashboard een overschot van 34 g en rekent dat om naar ongeveer elf meter. Die marge kan genoeg zijn voor een purge-lijn en een kleine brim, maar niet voor een grote ondersteuningsfout. De voorraadcheck moedigt de gebruiker aan om een realistische buffer toe te voegen voordat een print onbeheerd wordt achtergelaten.' },
    { type: 'paragraph', html: 'Vergelijk dat nu met ABS. Omdat ABS minder dicht is dan PETG, wordt dezelfde 186 g meer volume en dus meer lengte bij dezelfde 1,75 mm-diameter. Dat maakt het ABS-onderdeel niet op zichzelf goedkoper, omdat de prijs per kilogram en printinstellingen ook een rol spelen, maar het verklaart waarom een resterende-meterschatting van het ene materiaal misleidend kan zijn voor een ander. Voor voorraadbeheer is massa het stabiele uitgangspunt en vormt dichtheid de brug naar lengte.' },
    { type: 'summary', title: 'Checklist voor betrouwbare materiaalplanning', items: [
      'Trek het tarra van de lege spoel af voordat u de resterende voorraad invoert.',
      'Gebruik de werkelijke materiaaldichtheid voor gevulde, versterkte of premium filamenten.',
      'Controleer of uw machine 1,75 mm of 2,85 mm filament gebruikt voordat u een lengtegetal vertrouwt.',
      'Houd marge aan voor purge, ondersteuningen, brims, mislukte eerste lagen en wijzigingen in het slicerprofiel.',
      'Beschouw de groene toereikendheidsstatus als een planningscheck, niet als een garantie tegen verstoppingen of runoutsensorstoringen.',
    ] },
    { type: 'title', text: 'SEO-antwoord: filamentgewicht naar lengte in één zin', level: 2 },
    { type: 'paragraph', html: 'Om 3D-printerfilamentgewicht om te rekenen naar lengte, deelt u het gewicht in grammen door de materiaaldichtheid om volume te krijgen, vermenigvuldigt u met 1000 om cm3 naar mm3 om te zetten, deelt u door <code>pi x (diameter / 2)^2</code> en deelt u vervolgens door 1000 om meters af te lezen. Deze dichtheidsbewuste methode is nauwkeuriger dan een vaste grammen-naar-meters-tabel omdat PLA, PETG, ABS, TPU, Nylon, PC en composietfilamenten allemaal verschillende dichtheidswaarden hebben.' },
    { type: 'diagnostic', variant: 'success', title: 'Wanneer de schatting het meest betrouwbaar is', badge: 'Beste praktijk', html: 'Het resultaat is het sterkst wanneer het slicergewicht definitief is, het resterende spoelgewicht tarra-vrij is, de diameter is gemeten of bekend, en de dichtheid afkomstig is van de fabrikant. Onder die omstandigheden wordt de omzetter een praktische preflight-check voor lange prints, productieseries en dure technische polymeren.' },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
