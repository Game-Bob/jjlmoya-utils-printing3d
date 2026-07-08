import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { PowerSupplyEstimatorUI } from '../ui';

export const content: ToolLocaleContent<PowerSupplyEstimatorUI> = {
  slug: 'voeding-dimensionering-3d-printer-calculator',
  title: 'Voedingscalculator voor 3D printers: Hotends, Verwarmde Bedden, Motoren en 12V naar 24V Upgrades',
  description: 'Schat het PSU wattage en de maximale stroom voor een 3D-printerupgrade door het verwarmde bed, de hotend-cartridge, stappenmotoren, hulpbelasting en veiligheidsmarge op te tellen.',
  ui: {
    systemVoltageLabel: 'Systeemspanning',
    bedPowerLabel: 'Verwarmd bed',
    hotendPowerLabel: 'Hotend-cartridge',
    motorsLabel: 'Motoren',
    motorPowerLabel: 'Per motor',
    auxiliaryPowerLabel: 'Hulpbelasting',
    safetyMarginLabel: 'Veiligheidsmarge',
    totalLoadLabel: 'Directe belasting',
    psuRequiredLabel: 'Benodigde voeding',
    currentRequiredLabel: 'Maximale stroom',
    recommendedPsuLabel: 'dichtstbijzijnde standaard voeding',
    utilizationLabel: 'belasting op gekozen formaat',
    thermalMapLabel: 'Thermische vermogenskaart',
    bedSegmentLabel: 'Bed',
    hotendSegmentLabel: 'Hotend',
    motorsSegmentLabel: 'Motoren',
    auxiliarySegmentLabel: 'Hulp',
    headroomSegmentLabel: 'Reserve',
    scenarioLabel: 'Voorinstellingen',
    scenarioBedSlinger: 'Bed slinger',
    scenarioCoreXY: 'CoreXY',
    scenarioLargeFormat: 'Groot formaat',
    copyButton: 'Samenvatting kopiëren',
    copiedButton: 'Gekopieerd',
    controlsAriaLabel: 'Voedingsinvoer',
    resultsAriaLabel: 'Voedingsresultaten',
    copiedSummaryTemplate: '3D-printer voeding: {requiredWatts} W nodig, {currentAmps} A bij {voltage} V, aanbevolen {recommendedWatts} W.',
    wattsUnit: 'W',
    ampsUnit: 'A',
    voltsUnit: 'V',
    percentUnit: '%',
    countUnit: 'x',
  },
  seo: [
    { type: 'title', text: 'Hoe de Voeding van een 3D-Printer te Dimensioneren Zonder te Gokken', level: 2 },
    {
      type: 'paragraph',
      html: 'De voeding van een 3D-printer wordt gedimensioneerd op basis van de belastingen die tegelijkertijd actief kunnen zijn: het verwarmde bed, de hotend-verwarmingscartridge, stappenmotoren, controllerboard, ventilatoren, LEDs, probes, kamerverwarmingsrelais en eventuele hulpelektronica. De basis elektrische relatie is eenvoudig: <strong>watt is gelijk aan volt maal ampère</strong>. Een printer die 420 W nodig heeft op een 24 V-systeem kan ongeveer 17,5 A trekken, voordat extra marge voor opstart, regelingverliezen of toekomstige uitbreidingen wordt meegerekend.',
    },
    {
      type: 'paragraph',
      html: 'De fout die veel onstabiele printerbuilds veroorzaakt, is het gebruik van het gemiddelde printverbruik in plaats van de maximale geregelde belasting. Tijdens een normale PLA-print kan het bed op gedeeltelijk vermogen cyclen zodra de temperatuur is bereikt, maar tijdens het opwarmen kunnen zowel het bed als de hotend tegelijkertijd op 100% draaien. Als de voeding alleen wordt gedimensioneerd op een slimme stekkermeting die halverwege de print is genomen, kan deze toereikend lijken terwijl hij nog marginaal is tijdens het opwarmen, ABS-behuizingsgebruik of een herstelcyclus in een koude ruimte.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: 'P = V x A', label: 'kern dimensioneerformule' },
        { value: '20-35%', label: 'typische praktische reserve' },
        { value: '24V', label: 'lagere stroom dan 12V voor hetzelfde wattage' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Behandel het PSU wattage niet als toestemming om connectoren te overbelasten',
      html: 'Een voeding van 500 W maakt niet elke terminal, PCB-spoor, XT-connector, barrel jack of schroefblok veilig voor 500 W. De stroom moet op draad- en connectorniveau worden gecontroleerd, vooral voor verwarmde bedden en kamerverwarmers.',
    },
    { type: 'title', text: 'Welke Belastingen Moeten Worden Opgenomen in een PSU-Wattageberekening?', level: 2 },
    {
      type: 'paragraph',
      html: 'Voor een FDM-printer is het verwarmde bed meestal de dominante vermogensbelasting. Een gangbaar bed van 220 x 220 mm kan rond de 180-250 W liggen, terwijl een groter bed van 300 x 300 mm 300-500 W kan zijn, afhankelijk van de spanning en constructie. AC bedden zijn anders omdat hun verwarmingsvermogen niet wordt geleverd door de DC-voeding van de printer; neem in dat geval alleen de DC-besturingselektronica, ventilatoren, hotend, motoren en de kleine stroom van de solid-state relaisingang op.',
    },
    {
      type: 'paragraph',
      html: 'De hotend-verwarmingscartridge is de volgende voor de hand liggende belasting. Standaard cartridges zijn vaak 30 W of 40 W, high-flow hotends gebruiken vaak 50 W of 60 W, en sommige hogetemperatuuropstellingen gebruiken 80 W of meer. Een cartridge met meer watt verbruikt dat vermogen niet automatisch constant, maar de voeding moet het volledige nominale vermogen ondersteunen omdat de firmware tijdens het opwarmen of herstel na een grote extrusievraag 100% duty cycle kan bevelen.',
    },
    {
      type: 'list',
      items: [
        'Verwarmd bed wattage uit de bedspecificatie of gemeten spanning en weerstand.',
        'Hotend-cartridge wattage volgens de nominale waarde, niet de gemiddelde duty cycle.',
        'Stappenmotorreserve op basis van motoraantal en driverstroominstellingen.',
        'Hulpvermogen voor controller, ventilatoren, Raspberry Pi, LEDs, probes, relais en toolheadboards.',
        'Veiligheidsmarge voor transiënte belasting, veroudering van condensatoren, behuizingswarmte en toekomstige upgrades.',
      ],
    },
    {
      type: 'table',
      headers: ['Component', 'Typisch bereik', 'Dimensioneertip'],
      rows: [
        ['220 mm verwarmd bed', '180-250 W', 'Vaak de grootste DC-belasting op een desktopprinter.'],
        ['300 mm verwarmd bed', '300-500 W', 'Controleer draaddikte en bed-MOSFET-pad zorgvuldig.'],
        ['Hotend-cartridge', '30-80 W', 'Gebruik het cartridge-nominale vermogen, niet het waargenomen gemiddelde vermogen.'],
        ['Stappenmotoren', '6-15 W elk', 'Hangt af van stroomlimiet, spanning, drivermodus en houdstroom.'],
        ['Ventilatoren en elektronica', '10-60 W', 'Toolheadboards, LEDs en single-board computers tellen snel op.'],
      ],
    },
    { type: 'title', text: '12V vs 24V Voedingsbehoeften', level: 2 },
    {
      type: 'paragraph',
      html: 'Voor hetzelfde wattage heeft een 24 V-printer de helft van de stroom van een 12 V-printer nodig. Een belasting van 360 W trekt 30 A bij 12 V, maar slechts 15 A bij 24 V. Lagere stroom vermindert de spanningsval in draden, vermindert warmte in connectoren en geeft bed- en hotendcircuits meer praktische reserve. Dit is waarom veel moderne 3D-printers en upgradeboards de voorkeur geven aan 24 V voor verwarmers en bewegingselektronica.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '12V systemen',
          description: 'Nuttig voor oudere printers en autotechniek-achtige accessoires, maar hoog bedvermogen kan zeer hoge stromen vereisen.',
          points: ['Hogere stroomsterkte voor dezelfde watts', 'Gevoeliger voor connectorweerstand', 'Gebruikelijk op oudere RepRap-machines'],
        },
        {
          title: '24V systemen',
          description: 'Voorkeur voor veel moderne printers omdat hetzelfde verwarmingsvermogen met lagere stroom wordt geleverd.',
          highlight: true,
          points: ['Lagere stroomsterkte voor dezelfde watts', 'Minder spanningsval in bekabeling', 'Beter geschikt voor grotere DC-verwarmde bedden'],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Gebruik stroom als praktische bekabelingscontrole',
      html: 'Deel na het berekenen van het benodigde wattage door de spanning om de maximale stroom te krijgen. Dat ampèrenummer is de waarde die telt voor PSU-terminals, zekeringen, schakelaars, draaddikte, bedconnectoren en board-ingangsclassificaties.',
    },
    {
      type: 'proscons',
      title: 'Spanning wijzigen tijdens een upgrade',
      items: [
        { pro: 'Overstappen van 12 V naar 24 V kan de stroom en connectorverwarming voor hetzelfde bedvermogen verminderen.', con: 'Ventilatoren, LEDs, pompen en sommige controllerboards hebben mogelijk vervanging of buck-converters nodig.' },
        { pro: '24 V hotends en bedden bereiken vaak sneller de temperatuur als ze correct gespecificeerd zijn.', con: 'Een verkeerd gekoppelde 12 V-verwarmer op 24 V kan gevaarlijk overbelast raken.' },
        { pro: 'Driver- en bewegingssystemen gedragen zich vaak beter met moderne 24 V-elektronica.', con: 'Elke accessoirespanning moet worden gecontroleerd vóór de eerste keer inschakelen.' },
      ],
    },
    { type: 'title', text: 'Hoeveel Veiligheidsreserve Moet een 3D-Printervoeding Hebben?', level: 2 },
    {
      type: 'paragraph',
      html: 'Een veiligheidsmarge is geen verspilde capaciteit, maar bedrijfsruimte. Schakelende voedingen zijn het comfortabelst wanneer ze niet permanent op hun nominale vermogen worden aangedreven in een warme behuizing. Een printervoeding die onder een verwarmde kamer, naast een bedkabelketting of in een slecht geventileerde basis is gemonteerd, kan heter draaien dan dezelfde voeding op een open bank. Warmte verkort de levensduur van condensatoren en kan uitschakelingen onder belasting veroorzaken.',
    },
    {
      type: 'paragraph',
      html: 'Voor een typische desktopprinter is 20% reserve een redelijk minimum wanneer de belastingschatting nauwkeurig is. Voor grote bedden, high-flow hotends, kamerventilatoren, LED-verlichting of toekomstige toolhead-upgrades is 30-35% comfortabeler. Voor experimentele printers, hogetemperatuurmachines of builds die een tweede hotend, actieve kamerverwarmingsregelingen of veel accessoires kunnen toevoegen, is het kiezen van een standaard voedingstrap boven de berekende vereiste meestal de rustigere technische keuze.',
    },
    {
      type: 'table',
      headers: ['Marge', 'Toepassing', 'Praktische betekenis'],
      rows: [
        ['10%', 'Strikt bekende belastingen, open frame, kwaliteitsvoeding', 'Werkt alleen wanneer elke belasting en elk draadpad al geverifieerd is.'],
        ['20%', 'Normale desktopprinter', 'Goede basis voor een stabiele standaard build.'],
        ['30%', 'Geüpgraded bed, high-flow hotend, ingesloten elektronica', 'Beter thermisch comfort en toekomstige flexibiliteit.'],
        ['40%+', 'Groot formaat of experimentele printer', 'Nuttig wanneer belastingaannames later kunnen veranderen.'],
      ],
    },
    {
      type: 'card',
      title: 'Waarom een grotere voeding niet meer vermogen in de printer duwt',
      html: 'Een geregelde DC-voeding biedt spanning; de aangesloten belastingen trekken stroom volgens weerstand, duty cycle en besturingselektronica. Een voeding van 600 W op een printer die 300 W nodig heeft, duwt geen 600 W in het bed. Hij heeft gewoon voldoende capaciteit om de stroom te leveren zonder op zijn limiet te werken.',
    },
    { type: 'title', text: 'Vermogensopname van het Verwarmde Bed en Thermisch Gedrag', level: 2 },
    {
      type: 'paragraph',
      html: 'Verwarmde bedden zijn resistieve belastingen, dus hun theoretische vermogen kan worden geschat uit spanning en weerstand met <code>P = V² / R</code>. Als een 24 V-bed een weerstand van 2,4 ohm heeft, is het ongeveer een 240 W-bed. Het werkelijke vermogen varieert met de voedingsspanning, bedradingsverliezen, MOSFET-weerstand en bedtemperatuur, omdat de weerstand licht kan veranderen naarmate de verwarmer opwarmt.',
    },
    {
      type: 'paragraph',
      html: 'Een bed dat tijdens een stabiele PLA-print op 35% duty cycle fietst, kan bij het opstarten nog steeds 100% vragen. Gebruik voor de voedingsdimensionering het volledige nominale verwarmingsvermogen. Voor schatting van de elektriciteitskosten is de gemiddelde duty cycle nuttiger. Het door elkaar halen van die twee vragen is een veelvoorkomende bron van ondergedimensioneerde voedingen: het energieverbruik tijdens een twee uur durende print is niet hetzelfde als de momentane elektrische capaciteit.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'AC bed uitzondering',
      html: 'Als de printer een netgevoed AC-verwarmd bed gebruikt, neem het bedwattage dan niet op in de DC-voedingsbelasting. Dimensioneer in plaats daarvan de AC-bekabeling, zekering, relais, trekontlasting, aarding en thermische beveiliging afzonderlijk. De DC-voeding voedt nog steeds de controller, hotend, motoren en accessoires.',
    },
    {
      type: 'list',
      items: [
        'Geïsoleerde onderkant van het bed: minder warmteverlies en lagere gemiddelde duty cycle na opwarmen.',
        'Dikke aluminium gereedschapsplaat: langzamere opwarming maar gelijkmatigere warmteverdeling.',
        'Grote glasplaat: meer thermische massa, vaak langere opwarming bij hetzelfde wattage.',
        'Koude ruimte of open frame: meer herstelvermogen nodig om de temperatuur te handhaven.',
      ],
    },
    { type: 'title', text: 'Hotend, Motoren, Ventilatoren en Hulpbelastingen', level: 2 },
    {
      type: 'paragraph',
      html: 'Stappenmotoren worden vaak over- of onderschat omdat hun elektrisch gedrag niet zo eenvoudig is als het optellen van nominale spanning en stroom. Moderne chopper-drivers regelen de wikkelstroom, en het vermogen dat uit de voeding wordt opgenomen, hangt af van driverinstellingen, motorsnelheid, houdstroomreductie en mechanische belasting. Voor voedingsdimensionering is een praktische reserve van 8-15 W per actieve stappenmotor vaak voldoende voor gangbare desktopprinters, maar motoren met zeer hoge stroom of veel Z-motoren verdienen een directe berekening vanuit de driverconfiguratie.',
    },
    {
      type: 'paragraph',
      html: 'Hulpbelastingen zijn gemakkelijk te vergeten omdat elk item klein is: hotendventilator, onderdeelkoelventilator, controllerventilator, kamercirculatieventilatoren, LEDs, filamentdetector, probe, mainboard, display, toolheadboard, Raspberry Pi, camera, USB-hub en buck-converterverliezen. Een printer met een single-board computer en behuizingsverlichting kan 20-40 W toevoegen zonder te voelen als een grote elektrische verandering.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Continu vermogen', definition: 'De belasting die een voeding is ontworpen om gedurende lange perioden te leveren onder gespecificeerde koel- en temperatuuromstandigheden.' },
        { term: 'Piekbelasting', definition: 'Een kortdurende vraag die hoger kan zijn dan de gemiddelde belasting, zoals bij opwarming of gelijktijdig verwarmingsherstel.' },
        { term: 'Spanningsval', definition: 'De spanning die verloren gaat over draden en connectoren omdat echte geleiders weerstand hebben.' },
        { term: 'Duty cycle', definition: 'Het percentage van de tijd dat een geregelde verwarmer is ingeschakeld tijdens een regelperiode.' },
        { term: 'Reserve', definition: 'Extra capaciteit boven de berekende belasting die de voeding weg van zijn limiet houdt.' },
      ],
    },
    {
      type: 'summary',
      title: 'Checklist hulpbelasting',
      items: [
        'Tel alle ventilatoren op bij hun nominale wattage of spanning maal stroom.',
        'Neem single-board computers en camera\'s op als ze vanuit de printervoeding worden gevoed.',
        'Reserveer vermogen voor LED-strips, toolheadboards, relais, probes en buck-converterverliezen.',
        'Herbereken na het toevoegen van behuizingsverwarmers, extra extruders of hoge-stroom onderdeelkoeling.',
      ],
    },
    { type: 'title', text: 'De Calculatoruitvoer Lezen', level: 2 },
    {
      type: 'paragraph',
      html: 'De directe belasting is de som van de bed-, hotend-, motor- en hulpingangen vóór de reserve. De benodigde voedingswaarde voegt de geselecteerde veiligheidsmarge toe. De maximale stroomwaarde deelt die vereiste door de systeemspanning, waarmee de praktische bekabelingsvraag wordt beantwoord: hoeveel ampère moeten de voeding en het ingangspad veilig kunnen dragen bij de gekozen spanning?',
    },
    {
      type: 'paragraph',
      html: 'De aanbevolen voedingsgrootte rondt naar boven af naar een gangbare wattageklasse. Als de vereiste waarde 382 W is, kan een voeding van 400 W wiskundig voldoende lijken, maar een 450 W- of 500 W-model kan de voorkeur hebben als het betere koeling, betere terminals, erkende veiligheidscertificeringen of een eerlijker continu vermogen biedt. Het labelwattage is slechts één onderdeel van de voedingskwaliteit.',
    },
    {
      type: 'table',
      headers: ['Uitvoer', 'Te gebruiken voor', 'Waarschuwingssignaal'],
      rows: [
        ['Benodigde watts', 'Kiezen van voedingscapaciteit', 'Waarde ligt binnen enkele watts van het voedingslabel.'],
        ['Maximale stroom', 'Controle van draden, zekeringen en connectoren', 'Stroom overschrijdt board- of terminalclassificaties.'],
        ['Aanbevolen grootte', 'Boodschappenlijstje', 'Goedkope merkloze voeding die hoge watts claimt met kleine terminals.'],
        ['Benutting', 'Schatting van thermisch comfort', 'Continue belasting boven ongeveer 80-85%.'],
      ],
    },
    {
      type: 'message',
      title: 'Praktische aankoopregel',
      html: 'Kies de eerste kwaliteitsvoeding boven de berekende vereiste en controleer vervolgens de uitgangsspanning, stroomclassificatie, koelingsrichting, behuizingsventilatie, beschermende aarding, zekeringstrategie en connectorclassificaties vóór installatie.',
    },
    { type: 'title', text: 'Veelvoorkomende Fouten bij Voedingsdimensionering in 3D-Printer-Upgrades', level: 2 },
    {
      type: 'list',
      items: [
        'Gemiddeld slimme-stekker-wattage gebruiken in plaats van maximale DC-verwarmerbelasting.',
        'Vergeten dat 12 V-systemen het dubbele van de stroom van 24 V-systemen nodig hebben bij hetzelfde wattage.',
        'Een groter bed toevoegen maar de originele board-ingangsconnector en draaddikte behouden.',
        'Een hoogvermogen hotend-cartridge installeren zonder MOSFET, zekering en firmware thermische beveiligingen te controleren.',
        'Raspberry Pi, camera, LEDs en ventilatoren vanuit de printer voeden zonder hulpbelasting toe te voegen.',
        'Een voeding kopen op geadverteerd piekvermogen in plaats van continu vermogen en veiligheidscertificering.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Stop als draden of connectoren heet worden',
      html: 'Warme draden, gebruinde terminals, gesmolten behuizingen, intermitterende resets of bedtemperatuurdalingen tijdens beweging zijn geen afstemmingsproblemen. Het zijn elektrische symptomen die inspectie vereisen voordat er verder wordt geprint.',
    },
    {
      type: 'paragraph',
      html: 'De calculator schat de voedingscapaciteit; hij certificeert niet het hele elektrische systeem. Een veilige printer vereist ook correcte aarding, trekontlasting, zekeringen, adereindhulzen waar nodig, voor de werkelijke stroom geschikte krimpconnectoren, firmware thermische wegloopbeveiliging en een bekabelingsindeling die netspanning gescheiden houdt van laagspanningselektronica.',
    },
    {
      type: 'card',
      title: 'Wanneer voedingen splitsen',
      html: 'Grote printers gebruiken soms aparte voedingen voor bed, bewegingselektronica en accessoires. Splitsen kan de stroom door één board verminderen en service vereenvoudigen, maar aardingen, schakellogica, zekeringen en noodstopgedrag moeten bewust worden ontworpen.',
    },
    { type: 'title', text: 'Uitgewerkte Voorbeelden: Standaard Printer, CoreXY-Upgrade en Groot Bed', level: 2 },
    {
      type: 'paragraph',
      html: 'Een compacte bed-slinger met een 220 W-bed, 40 W-hotend, vier motoren op 10 W en 25 W elektronica heeft een directe belasting van 325 W. Met 25% reserve is de benodigde voedingscapaciteit ongeveer 406 W. Op 24 V is dat ongeveer 16,9 A, dus een kwaliteitsvoeding van 450 W of 500 W op 24 V is een verstandig doel, afhankelijk van connectorindeling en koeling.',
    },
    {
      type: 'paragraph',
      html: 'Een CoreXY-upgrade met een 300 W-bed, 60 W high-flow hotend, vijf motoren op 12 W en 45 W hulpbelasting telt op tot 465 W vóór de marge. Met 30% reserve is ongeveer 605 W of 25,2 A bij 24 V nodig. Die build hoort in de 600-750 W-klasse en de bedbekabeling moet worden behandeld als een hoofdstroompad en niet als een bijzaak.',
    },
    {
      type: 'paragraph',
      html: 'Een grootformaatprinter met een 600 W DC-bed, 80 W-hotend, zes motoren op 14 W en 80 W hulpbelasting bereikt 844 W vóór de marge. Met 35% reserve is de vereiste ongeveer 1139 W. Op dat punt overwegen veel bouwers een AC bed of een gescheiden vermogensarchitectuur omdat de DC-stroom, bekabeling, zekeringen en warmtebeheer de centrale ontwerpbeperkingen worden.',
    },
    {
      type: 'summary',
      title: 'Definitief dimensioneerworkflow',
      items: [
        'Lijst elke belasting die kan draaien tijdens opwarmen of herstel.',
        'Bereken de directe watts en voeg een realistische reserve toe.',
        'Converteer watts naar ampère bij de werkelijke systeemspanning.',
        'Kies een kwaliteitsvoeding met continu vermogen boven het resultaat.',
        'Controleer draden, connectoren, zekeringen, boardclassificaties en koeling voordat u de printer inschakelt.',
      ],
    },
  ],
  faq: [
    {
      question: 'Hoeveel watt heeft de voeding van mijn 3D-printer nodig?',
      answer: 'Tel het verwarmde bed, de hotend-cartridge, de motoren, de elektronica, de ventilatoren en de accessoires bij elkaar op en voeg vervolgens een veiligheidsreserve toe. Veel geüpgradede desktop 24 V-printers vallen tussen 400 W en 600 W, terwijl grote bedden veel meer kunnen vereisen.',
    },
    {
      question: 'Is 24V beter dan 12V voor een 3D-printervoeding?',
      answer: 'Voor hetzelfde wattage gebruikt 24 V de helft van de stroom van 12 V. Lagere stroom betekent meestal minder spanningsval en minder connectorverwarming, maar alle verwarmers, ventilatoren, boards en accessoires moeten compatibel zijn met de gekozen spanning.',
    },
    {
      question: 'Moet ik het verwarmde bed opnemen in de DC-voedingsberekening?',
      answer: 'Neem het op als het een DC-verwarmd bed is dat door de printervoeding wordt gevoed. Neem een netgevoed AC bed niet op in het DC-voedingswattage; dimensioneer de netbekabeling, het relais, de zekering en de veiligheidsvoorzieningen afzonderlijk.',
    },
    {
      question: 'Welke veiligheidsmarge moet ik gebruiken als voedingsreserve?',
      answer: 'Gebruik ten minste 20% voor een normale bekende build. Gebruik 30-35% voor geüpgradede bedden, high-flow hotends, ingesloten elektronica of toekomstige accessoires.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Voer verwarmingsbelastingen in', text: 'Voeg het nominale wattage van het verwarmde bed en de hotend-cartridge toe.' },
    { name: 'Voeg beweging en accessoires toe', text: 'Voer het aantal motoren, de reserve per motor, ventilatoren, boards, LEDs en andere hulpbelastingen in.' },
    { name: 'Kies spanning en marge', text: 'Selecteer 12 V of 24 V en stel een veiligheidsmarge in die past bij het buildrisico.' },
    { name: 'Controleer watts en ampères', text: 'Gebruik de benodigde watts voor voedingsselectie en de maximale ampères voor controle van draden, zekeringen en connectoren.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Voedingsdimensioneringscalculator voor 3D-printer',
      description: 'Schat het PSU wattage en de stroom van een 3D-printer op basis van bed-, hotend-, motor-, hulp- en reservebelastingen.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Hoeveel watt heeft de voeding van mijn 3D-printer nodig?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Tel het verwarmde bed, de hotend-cartridge, de motoren, de elektronica, de ventilatoren en de accessoires bij elkaar op en voeg vervolgens een veiligheidsreserve toe.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Hoe de voeding van een 3D-printer te dimensioneren',
      step: [
        { '@type': 'HowToStep', text: 'Voer de verwarmingsbelastingen in.' },
        { '@type': 'HowToStep', text: 'Voeg de bewegings- en accessoirebelastingen toe.' },
        { '@type': 'HowToStep', text: 'Selecteer de systeemspanning en veiligheidsmarge.' },
        { '@type': 'HowToStep', text: 'Kies een kwaliteitsvoeding boven de berekende vereiste.' },
      ],
    },
  ],
};
