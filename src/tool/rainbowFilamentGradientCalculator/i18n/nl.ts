import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { RainbowFilamentGradientCalculatorUI } from '../ui';

export const content: ToolLocaleContent<RainbowFilamentGradientCalculatorUI> = {
  slug: 'regenboog-filament-overgangslengte-calculator',
  title: 'Regenboog Filament Overgangslengte Calculator voor 3D prints',
  description: 'Schat regenboogfilament-kleurcycli, spoelgebruik en waar gradiëntovergangen verschijnen langs de Z-hoogte van een geslicete 3D-print.',
  ui: {
    unitMetric: 'Metrisch',
    unitImperial: 'US',
    cycleLength: 'Kleurcycluslengte',
    partWeight: 'Gewicht geslicet onderdeel',
    density: 'Dichtheid',
    diameter: 'Filamentdiameter',
    partHeight: 'Geprinte Z-hoogte',
    startOffset: 'Startoffset op spoel',
    presets: 'Materiaalvoorinstellingen',
    pla: 'PLA regenboog',
    petg: 'PETG-mengsel',
    silk: 'Zijde multicolor',
    usedFilament: 'Filament verbruikt',
    cyclesInPart: 'Cycli in onderdeel',
    heightPerCycle: 'Z per cyclus',
    gramsPerCycle: 'Massa per cyclus',
    zMap: 'Z-overgangskaart',
    transitionBands: 'Zichtbare overgangsbanden',
    phaseWindow: 'Cyclusfase',
    copySummary: 'Gradiëntsamenvatting kopiëren',
    reset: 'Resetten',
    emptyValue: '0',
    copyTemplate: 'Regenboogfilament schatting',
    copyCycles: 'kleurcycli',
    copyUsed: 'verbruikt',
    copyZCycle: 'per cyclus',
  },
  seo: [
    { type: 'title', text: 'Hoe een regenboogfilament-overgangslengte-calculator werkt', level: 2 },
    { type: 'paragraph', html: 'Een regenboogfilament-overgangslengte-calculator verbindt twee slicer-getallen die meestal apart worden bekeken: <strong>modelmassa</strong> en <strong>printhoogte</strong>. De slicer vertelt hoeveel gram materiaal het onderdeel verbruikt, terwijl de filamentfabrikant of een handmatige meting vertelt hoeveel meter de spoel nodig heeft om één volledige kleurcyclus te voltooien. Zodra die waarden in hetzelfde materiaalstroommodel zitten, kun je schatten hoeveel kleurcycli in het object verschijnen en waar elke kleurband op de Z-as terechtkomt.' },
    { type: 'paragraph', html: 'De kernconversie is fysiek in plaats van visueel. Een geslicet onderdeel van 180 g verbruikt niet automatisch dezelfde filamentlengte op elke spoel, omdat de lengte afhangt van dichtheid en diameter. PLA, PETG, zijde-PLA, gevulde mengsels en doorschijnende mengsels kunnen verschillende dichtheden hebben. Een nominaal filament van 1,75 mm heeft ook tolerantievariatie, dus een calculator zou de diameter moeten laten aanpassen in plaats van altijd de standaardwaarde aan te nemen.' },
    { type: 'stats', columns: 4, items: [
      { value: '1,75 mm', label: 'veelvoorkomende FDM-filamentdiameter', icon: 'mdi:circle-slice-8' },
      { value: '1,24 g/cm3', label: 'typische PLA-dichtheid voor schattingen', icon: 'mdi:flask' },
      { value: '30 m', label: 'voorbeeld volledige regenboogkleurcyclus', icon: 'mdi:palette' },
      { value: 'Z-as', label: 'waar cycluslengte zichtbaar wordt', icon: 'mdi:arrow-up-down' },
    ] },
    { type: 'tip', title: 'Meet een echte cyclus voordat je de preview vertrouwt', html: 'Fabrikanten beschrijven regenboogfilament vaak als snelle, middelmatige of lange overgang, maar de bruikbare invoer is de gemeten afstand van een kleur die terugkeert naar dezelfde kleur. Wikkel alleen een klein monster af als het veilig is voor de spoel, of print een dunne spoeltoren en bereken de verbruikte filamentlengte terug uit slicer-schattingen.' },

    { type: 'title', text: 'Waarom onderdeelgewicht kleurveranderingen beter voorspelt dan printtijd', level: 2 },
    { type: 'paragraph', html: 'Printtijd is een slechte voorspeller voor kleurgebruik van een regenboogspoel. Een decoratieve vaas kan vele uren duren in spiraalmodus terwijl deze weinig materiaal verbruikt, en een dichte mechanische beugel kan snel veel filament verbruiken. De spoel verandert van kleur op basis van de <strong>lengte filament die door de extruder wordt getrokken</strong>, niet op basis van verstreken minuten, verplaatsingsafstand of het aantal lagen.' },
    { type: 'paragraph', html: 'Het slicer-gewicht is nuttig omdat het al wanden, infill, bovenste en onderste lagen, ondersteuning (indien ingeschakeld), brims, skirts en spoelstructuren bevat. Dat gewicht kan worden omgezet in volume door het te delen door de materiaaldichtheid. Het volume kan vervolgens worden gedeeld door de dwarsdoorsnede van het filament om de totale filamentlengte te schatten. Dit is waarom dezelfde STL ander gradiëntgedrag kan vertonen wanneer je infill, wand aantal, ondersteuningsinstellingen of schaal wijzigt.' },
    { type: 'table', headers: ['Slicer-wijziging', 'Effect op filamentverbruik', 'Effect op regenbooggradiënt'], rows: [
      ['Meer infill', 'Verhoogt totale grammen en meters', 'Meer kleurcyclusvoortgang binnen dezelfde Z-hoogte'],
      ['Meer wanden', 'Verhoogt verbruik over de meeste lagen', 'Overgangen comprimeren verticaal en komen vaker voor'],
      ['Hoger model metzelfde massa', 'Vergelijkbare meters over meer Z-hoogte', 'Overgangen rekken verder uit elkaar'],
      ['Ondersteuning ingeschakeld', 'Verbruikt kleuren buiten het zichtbare deel', 'Zichtbare fase kan verschuiven ten opzichte van het kale model'],
      ['Grote brim of raft', 'Verbruikt filament vóór de eerste zichtbare laag', 'Startkleur schuift naar voren op de spoel'],
    ] },
    { type: 'diagnostic', variant: 'info', title: 'Gebruik de slicer schatting na definitieve instellingen', badge: 'Belangrijk', html: 'Voer de berekening uit nadat je laaghoogte, wand aantal, infill, ondersteuning, brim en schaal hebt gekozen. Een regenboogspoel-kleurcyclus-schatting gemaakt vóór het genereren van ondersteuning kan zichtbaar fout zijn omdat het ondersteuningsmateriaal een deel van de kleursequentie vóór en tijdens het object verbruikt.' },

    { type: 'title', text: 'Inzicht in kleurcycluslengte op regenboogfilament-spoelen', level: 2 },
    { type: 'paragraph', html: 'Kleurcycluslengte is de filamentafstand die nodig is om de sequentie te herhalen. Op een regenboogspoel met zes kleuren kan één cyclus rood, oranje, geel, groen, blauw, violet doorlopen en dan terugkeren naar rood. De cyclus kan kort genoeg zijn voor meerdere overgangen in een klein figuurtje, of lang genoeg zodat een middelgrote print slechts één langzame verandering laat zien. Een <strong>regenboogspoel-kleurcyclus-calculator</strong> is het nuttigst wanneer dit getal realistisch is.' },
    { type: 'paragraph', html: 'Niet alle overgangsfilamenten hebben gelijke kleurzones. Sommige producten mengen geleidelijk met lange vervagingen, terwijl andere sterkere blokken hebben. De calculator behandelt de volledige cyclus als gelijkmatig verdeelde kleurbanden omdat dat de meest praktische schatting is op basis van alleen slicer-gegevens. Als je spoel ongelijke secties heeft, gebruik dan de Z-kaart als fasegids en verwacht dat de werkelijke visuele menging zachter of asymmetrischer is.' },
    { type: 'comparative', columns: 3, items: [
      { title: 'Korte cyclus regenboog', description: 'Het beste voor miniaturen, ornamenten, kleine vazen en naamplaatjes. Meerdere kleurveranderingen met minder materiaal.', icon: 'mdi:weather-sunset-up', points: ['Snelle zichtbare overgangen', 'Kan druk ogen op grote platte vlakken'] },
      { title: 'Middelmatige cyclus regenboog', description: 'Een gebalanceerde keuze voor bureau-objecten en middelgrote sculpturen. Produceert meestal één tot drie grote overgangen.', icon: 'mdi:palette-swatch', highlight: true, points: ['Voorspelbaar op gangbare prints', 'Goed voor objecten van 100-300 g'] },
      { title: 'Lange cyclus regenboog', description: 'Beter voor hoge vazen, grote draken, lampen en enkelwandige prints die langzame, vloeiende gradiënten nodig hebben.', icon: 'mdi:palette-outline', points: ['Gelijkmatige kleurverandering', 'Kleine modellen kunnen één kleur blijven'] },
    ] },
    { type: 'glossary', items: [
      { term: 'Kleurcyclus', definition: 'De filamentlengte die nodig is om de volledige kleursequentie vanaf een startkleur terug naar dezelfde kleur te herhalen.' },
      { term: 'Fase', definition: 'De huidige positie binnen de kleurcyclus op het moment dat het zichtbare deel begint met printen.' },
      { term: 'Overgangsband', definition: 'Een verticaal gebied van het geprinte object waar het geschatte kleursegment verandert langs de Z-as.' },
      { term: 'Startoffset', definition: 'Filamentlengte die al is verbruikt voordat het model begint, inclusief eerdere prints, spoeling, skirt, brim of handmatig trimmen.' },
    ] },

    { type: 'title', text: 'Hoe de kleurovergangspositie langs de Z-as te schatten', level: 2 },
    { type: 'paragraph', html: 'De Z-kaart is een schatter, geen slicer-simulator. Het gaat ervan uit dat materiaalverbruik proportioneel is verdeeld over de printhoogte. Dat is een goed eerste-ordemodel voor veel vaasmodus-prints, sculpturen met constante doorsnede en decoratieve objecten. Het wordt minder nauwkeurig wanneer het model een zware basis, een hol midden, een dichte bovenkant of grote ondersteuningen heeft die materiaal ongelijkmatig over de hoogte verbruiken.' },
    { type: 'paragraph', html: 'Voor een model met een grotendeels uniforme doorsnede geeft het delen van de printhoogte door de kleurcycli een intuïtief antwoord: als een object van 160 mm twee volledige kleurcycli gebruikt, neemt elke cyclus ongeveer 80 mm Z-hoogte in beslag. Als het slechts 0,4 cycli gebruikt, toont de print minder dan de helft van de regenboogsequentie. Als het 4 cycli gebruikt, herhalen kleuren zich vaak en kunnen ze een gestreept uiterlijk creëren in plaats van een enkele gelijkmatige gradiënt.' },
    { type: 'list', icon: 'mdi:arrow-up-down', items: [
      'Gebruik de geprinte Z-hoogte, niet de totale machineverplaatsingshoogte.',
      'Neem brim- of raft-verbruik op als startoffset als deze kenmerken vóór het object worden geprint.',
      'Bereken voor multi-objectplaten het gecombineerde geslicete gewicht als de objecten laag voor laag sequentieel worden geprint.',
      'Bereken voor sequentieel printen elk object afzonderlijk en schuif de startoffset voor het volgende object op.',
      'Voeg voor een spoeltoren of meerkleurige afvalstructuur de geschatte massa toe aan de offset of het totale verbruik, afhankelijk van wanneer deze wordt geprint.',
    ] },
    { type: 'card', icon: 'mdi:layers-triple', title: 'Waarom de onderkant mogelijk niet overeenkomt met de voorspelde eerste kleur', html: 'Veel printers spoelen, tekenen een primlijn, printen een skirt of een brim vóór de eerste zichtbare wand. Die kenmerken verbruiken filament en verschuiven de startfase. Als de eerste zichtbare laag een specifieke kleur moet hebben, meet of schat dan dit pre-print verbruik en voer het in als startoffset.' },

    { type: 'title', text: 'Dichtheid, diameter en waarom twee 180 g-prints verschillende filamentlengtes kunnen gebruiken', level: 2 },
    { type: 'paragraph', html: 'Dezelfde massa kan verschillende filamentlengtes vertegenwoordigen omdat dichtheid het volume per gram verandert. PLA wordt vaak geschat rond 1,24 g/cm3, PETG rond 1,27 g/cm3, en sommige zijde- of gevulde mengsels kunnen voldoende verschillen om overgangen op hoge prints enkele millimeters te verplaatsen.' },
    { type: 'paragraph', html: 'Niet alle overgangsfilamenten hebben gelijke kleurzones. De calculator behandelt de volledige cyclus als gelijkmatig verdeelde kleurbanden. Als je spoel ongelijke secties heeft, gebruik dan de Z-kaart als gids.' },
    { type: 'table', headers: ['Materiaalfamilie', 'Planningsdichtheid', 'Gradiëntplanningsnotitie'], rows: [
      ['PLA regenboog', '1,24 g/cm3', 'Goede standaard voor de meeste standaard regenboogspoelen'],
      ['Zijde-PLA', '1,18-1,24 g/cm3', 'Pigmenten en additieven variëren; controleer merkgegevens indien beschikbaar'],
      ['PETG meerkleurig', '1,25-1,29 g/cm3', 'Iets dichter, dus dezelfde grammen kunnen minder lengte gebruiken'],
      ['Gevuld PLA', 'Varieert sterk', 'Hout-, metaal-, steen- of glitzer-additieven kunnen de schatting beïnvloeden'],
    ] },
    { type: 'proscons', title: 'Het slicer gewicht gebruiken als hoofdinput', items: [
      { pro: 'Het bevat echte printinstellingen zoals wanden, infill, ondersteuning en schaal.', con: 'Het hangt af van het dichtheidsprofiel van de slicer dat redelijk nauwkeurig is.' },
      { pro: 'Het is sneller dan handmatig extruderbewegingen uit G-code optellen.', con: 'Het onthult geen ongelijke materiaalverdeling op elke laag.' },
      { pro: 'Het werkt met verschillende modellen en slicers met minimale gegevensinvoer.', con: 'Primlijnen, spoeling en mislukte starts moeten apart worden verrekend.' },
    ] },

    { type: 'title', text: 'De calculator gebruiken voor een echte regenboogfilament-print', level: 2 },
    { type: 'paragraph', html: 'Begin met het slicen van het model met definitieve instellingen. Kopieer het geschatte filamentgewicht van de slicer, voer vervolgens de materiaaldichtheid en filamentdiameter in. Voer de gemeten of geadverteerde kleurcycluslengte in. Voer ten slotte de geprinte Z-hoogte van het model in. De calculator retourneert het gebruikte filament, het aantal cycli in het onderdeel, grammen per volledige kleurcyclus en geschatte Z-afstand per cyclus.' },
    { type: 'list', icon: 'mdi:check-circle', items: [
      'Als cycli in onderdeel lager zijn dan 0,25, verwacht dan een subtiele kleurverandering in plaats van een regenboogobject.',
      'Als cycli in onderdeel rond 1,0 liggen, kan het model een volledige zwaai door het palet van de spoel laten zien.',
      'Als cycli in onderdeel tussen 2,0 en 4,0 liggen, toont het object herhaalde kleurbanden.',
      'Als Z per cyclus groter is dan de modelhoogte, vergroot dan de schaal, voeg massa toe of kies een spoel met snellere overgang.',
      'Als Z per cyclus erg klein is, verminder dan infill of kies een spoel met langere overgang voor gelijkmatigere gradiënten.',
    ] },
    { type: 'summary', title: 'Snelle planningsregel', items: [
      'Meer grammen op dezelfde hoogte comprimeren de regenboog verticaal.',
      'Meer hoogte met dezelfde grammen rekt de gradiënt uit.',
      'Kortere kleurcycluslengte creëert meer overgangen.',
      'Startoffset bepaalt welk deel van de regenboog als eerste verschijnt.',
    ] },
    { type: 'message', title: 'Voor display stukken', ariaLabel: 'Planningsadvies voor display-stukken', html: 'Wanneer de kleurgrens op een specifiek kenmerk moet vallen, print dan een kleine verticale testkolom met hetzelfde slicer-profiel. Vergelijk de gemeten bandhoogtes met de schatting en pas vervolgens de cycluslengte of startoffset aan voordat je aan de volledige print begint.' },

    { type: 'title', text: 'Veelgestelde vragen over regenboogspoel-kleurplanning', level: 2 },
    { type: 'paragraph', html: '<strong>Hoeveel regenboogfilament heb ik nodig voor één volledige kleurcyclus?</strong> Vermenigvuldig de cycluslengte met grammen per meter voor jouw filamentdiameter en dichtheid. Voor standaard 1,75 mm PLA is één meter ongeveer 3 g, dus een cyclus van 30 m is ongeveer 90 g. De calculator voert deze conversie direct uit omdat werkelijke dichtheid en diameter het antwoord veranderen.' },
    { type: 'paragraph', html: '<strong>Waarom bleef mijn print meestal één kleur?</strong> Het onderdeel heeft waarschijnlijk minder dan een betekenisvolle fractie van de spoelcyclus gebruikt. Kleine modellen, lage infill en zeer lang overgangs-regenboogfilament kunnen binnen één of twee naburige kleuren blijven. Het model groter maken, meerdere objecten tegelijk printen, wanden verhogen of een snellere-cyclus spoel kiezen kan overgangen zichtbaarder maken.' },
    { type: 'paragraph', html: '<strong>Kan ik een specifieke kleur afdwingen aan de bovenkant van het model?</strong> Je kunt het schatten met startoffset, maar exacte plaatsing vereist kennis van de huidige spoelfase. Als de bovenkant bijvoorbeeld blauw moet zijn, moet je het filament mogelijk vooruit helpen door een spoelobject te printen, te beginnen bij een bekende zichtbare kleur, of een andere modelschaal te kiezen.' },
    { type: 'diagnostic', variant: 'warning', title: 'Grote geometrieveranderingen verminderen de Z kaart nauwkeurigheid', badge: 'Modelvorm', html: 'Een zwaar voetstuk en een dun bovenste beeld kunnen het meeste materiaal onderaan verbruiken, zodat werkelijke overgangen zich lager clusteren dan een proportionele Z-schatting suggereert. Gebruik voor die modellen de calculator voor het totale aantal cycli en inspecteer vervolgens de laagpreview van de slicer om te begrijpen waar het extrusievolume geconcentreerd is.' },
  ],
  faq: [
    {
      question: 'Wat is regenboogfilament-overgangslengte?',
      answer: 'Het is de hoeveelheid filament, meestal gemeten in meters of voet, die de spoel nodig heeft om door één volledige kleursequentie te gaan en terug te keren naar de startkleur.',
    },
    {
      question: 'Waarom vraagt de calculator om onderdeelgewicht in plaats van printtijd?',
      answer: 'Kleurveranderingen zijn afhankelijk van de lengte filament die door de extruder wordt verbruikt. Slicer-gewicht kan worden omgezet in volume en vervolgens in filamentlengte, terwijl printtijd het materiaalverbruik niet direct beschrijft.',
    },
    {
      question: 'Hoe nauwkeurig is de Z-overgangskaart?',
      answer: 'Het is een planningsschatting. Het is het meest nauwkeurig voor modellen met vrij gelijkmatige materiaalverdeling over de hoogte, en minder nauwkeurig voor vormen met een dichte basis, holle secties, ondersteuning of grote spoelstructuren.',
    },
    {
      question: 'Kan ik dit gebruiken voor zijde-PLA of PETG-regenboogfilament?',
      answer: 'Ja. Kies een materiaalvoorinstelling of voer de dichtheid van het spoel-datasheet in. Dichtheid verandert de geschatte filamentlengte en dus het voorspelde aantal kleurcycli.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Model slicen', text: 'Gebruik de definitieve slicer-instellingen en kopieer het geschatte onderdeelgewicht.' },
    { name: 'Spoelgegevens invoeren', text: 'Stel de kleurcycluslengte, dichtheid, filamentdiameter en eventuele startoffset in.' },
    { name: 'Z-kaart lezen', text: 'Gebruik cycli, Z per cyclus en zichtbare banden om te bepalen of de gradiënt subtiel, volledig of herhaald zal zijn.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Regenboog Filament Overgangslengte Calculator',
      description: 'Schat het kleurcyclusgebruik van regenboogfilament en overgangsposities langs de Z-as van een 3D-print.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Wat is regenboogfilament-overgangslengte?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Het is de hoeveelheid filament die de spoel nodig heeft om door één volledige kleursequentie te gaan en terug te keren naar de startkleur.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Regenboog Filament Overgangslengte Calculator voor 3D-prints',
      description: 'Schat regenboogfilament-kleurcycli, spoelgebruik en waar gradiëntovergangen verschijnen langs de Z-hoogte van een geslicete 3D-print.',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Model slicen', text: 'Gebruik de definitieve slicer-instellingen en kopieer het geschatte onderdeelgewicht.' },
        { '@type': 'HowToStep', position: 2, name: 'Spoelgegevens invoeren', text: 'Stel de kleurcycluslengte, dichtheid, filamentdiameter en eventuele startoffset in.' },
        { '@type': 'HowToStep', position: 3, name: 'Z-kaart lezen', text: 'Gebruik cycli, Z per cyclus en zichtbare banden om te bepalen of de gradiënt subtiel, volledig of herhaald zal zijn.' }
      ],
    },
  ],
};
