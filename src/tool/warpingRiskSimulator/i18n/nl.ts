import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WarpingRiskSimulatorUI } from '../ui';

const slug = 'warping-risicosimulator-3d-printen';
const title = 'Warping Risicosimulator voor 3D Printen';
const description = 'Schat het loskomen van de eerste laag en het warpingsrisico op basis van materiaalkrimp, voetafdruk, langste diagonaal, bedtemperatuur, kamertemperatuur en behuizingsomstandigheden.';

const faqData = [
  {
    question: 'Waarom beïnvloedt de langste diagonaal warping meer dan het voetafdrukoppervlak?',
    answer: 'De langste diagonaal vertegenwoordigt het grootste continue krimppad. Een lang onderdeel kan voldoende lineaire krimp ophopen om hoeken op te tillen, zelfs als het totale contactoppervlak groot lijkt.',
  },
  {
    question: 'Garandeert deze simulator dat mijn print niet kromtrekt?',
    answer: 'Nee. Het is een risicoschatting. Vochtig filament, vuile bouwplaten, eerste laaghoogte, tocht, onderdeelgeometrie en koelkeuzes van de slicer kunnen het resultaat veranderen.',
  },
  {
    question: 'Welke materialen hebben het meest een behuizing nodig?',
    answer: 'ABS, ASA, Nylon en PC zijn het meest behuizingsgevoelig in dit model omdat ze hogere verwerkingstemperaturen, sterkere krimp en grotere koelspanning combineren.',
  },
  {
    question: 'Hoe wordt de brim-breedte geschat?',
    answer: 'De simulator begint met vijf procent van de langste diagonaal en schaalt deze op basis van het berekende risico, waarna het resultaat wordt begrensd tot praktische slicer-waarden.',
  },
];

const howToData = [
  { name: 'Kies het materiaal', text: 'Selecteer PLA, PETG, ABS, ASA, Nylon, PC of TPU zodat de simulator een krimpklasse kan toepassen.' },
  { name: 'Voer voetafdruk en diagonaal in', text: 'Gebruik het oppervlak dat het bed raakt en de langste hoek-tot-hoek afstand van het onderdeel.' },
  { name: 'Stel de thermische omgeving in', text: 'Voer de bed- en kamertemperatuur in en geef aan of de printer een gesloten behuizing heeft.' },
  { name: 'Kopieer slicer-instellingen', text: 'Gebruik de voorgestelde brim-, hechtings-, koelings- en behuizingsinstellingen als startprofiel.' },
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

export const content: ToolLocaleContent<WarpingRiskSimulatorUI> = {
  slug,
  title,
  description,
  ui: {
    unitSystemLabel: 'Eenhedensysteem',
    unitMetric: 'Metrisch',
    unitImperial: 'Imperial',
    unitCelsius: '°C',
    unitFahrenheit: '°F',
    unitMillimeter: 'mm',
    unitInch: 'in',
    noBrim: '0',
    material: 'Materiaal',
    footprintArea: 'Voetafdruk oppervlak',
    footprintHelp: 'Oppervlak dat daadwerkelijk de bouwplaat raakt, niet de totale oppervlakte van het model.',
    diagonal: 'Langste diagonaal',
    diagonalHelp: 'Langste hoek-tot-hoek afstand van de eerste laag. Dit is de belangrijkste thermische spanningsvector.',
    bedTemperature: 'Bedtemperatuur',
    bedTemperatureWarning: 'Temperatuurwaarschuwing',
    ambientTemperature: 'Kamertemperatuur',
    chamber: 'Gesloten behuizing',
    chamberOn: 'Gesloten of actief afgeschermd',
    chamberOff: 'Open printer',
    riskLow: 'Laag',
    riskMedium: 'Middel',
    riskHigh: 'Hoog',
    riskCritical: 'Kritiek',
    riskIndex: 'Risico-index',
    thermalIndex: 'Thermische spanningsindex',
    deltaT: 'Delta T',
    brimRecommendation: 'Brim-aanbeveling',
    adhesionDiagnosis: 'Hechtingsdiagnose',
    adhesionStrength: 'Hechtingssterkteladder',
    criticalWarnings: 'Kritieke waarschuwingen',
    whyDiagonalMatters: 'Waarom de diagonaal ertoe doet',
    recommendedSettings: 'Aanbevolen slicer-instellingen',
    copySettings: 'Instellingen kopiëren',
    copied: 'Gekopieerd',
    simulatorNotice: 'Dit is een risicoschatting, geen succesgarantie. Vochtigheid van filament, bedvervuiling, Z-offset, tocht en wijzigingen in koeling blijven externe variabelen.',
    warnings: {
      openTechnicalMaterial: '{material} zonder gesloten behuizing is een ernstige warping-conditie.',
      bedTemperatureHigh: 'De bedtemperatuur voor {material} ligt boven het aanbevolen bereik van {min}-{max} {unit}. Verwachte verweking, olifantenvoet of hechtingsartefacten.',
      bedTemperatureLow: 'De bedtemperatuur voor {material} ligt onder het aanbevolen bereik van {min}-{max} {unit}. De grip van de eerste laag is mogelijk te zwak voor deze geometrie.',
      narrowFootprint: 'De voetafdruk is smal in vergelijking met de diagonaal, dus hoekloskomen kan snel ophopen.',
      highDeltaT: 'Het verschil tussen bed- en kamertemperatuur is zeer hoog; controleer de luchtstroom en koelsnelheid.',
    },
    diagnosis: {
      critical: 'Brim is verplicht. Gebruik een speciale hechtingslaag en vermijd het printen van dit materiaal in de open lucht.',
      highEnclosed: 'Brede brim en hechtmiddel worden sterk aanbevolen.',
      highOpen: 'Gebruik brim, hechtmiddel en een gesloten behuizing voordat u begint.',
      mediumEasyMaterial: 'Gebruik een schoon PEI-oppervlak; brim is optioneel voor scherpe hoeken.',
      medium: 'Gebruik brim of muisoren op de hoeken en controleer de bedhechting.',
      low: 'Veilig onder normale omstandigheden van de eerste laag.',
    },
    adhesionOptions: {
      low: ['Schoon PEI of gestructureerde plaat: normale grip, gemakkelijkste verwijdering.'],
      medium: ['Lijmstift of PVA-loslaaglaag: lichte extra grip en veiligere PETG-loslating.', 'Muisoren: gelokaliseerde grip voor hoeken zonder volledige brim.'],
      high: ['Brede brim plus lijmstift: brede mechanische ondersteuning met matige reiniging.', 'Magigoo of vergelijkbaar hechtmiddel: sterkere grip voor ABS, ASA, PETG en Nylon-varianten.'],
      criticalDefault: ['Volledige breedte brim: maximaal eerste laag voetafdruk.', 'Hoogsterkte hechtmiddel: gebruik PEI plus een hoogsterkte hechtmiddel.', 'Gesloten behuizing: nodig voor consistente werking van het hechtmiddel.'],
      criticalTechnical: ['Volledige breedte brim: maximaal eerste laag voetafdruk.', 'Hoogsterkte hechtmiddel: gebruik een materiaalspecifiek hechtmiddel voor Nylon of PC.', 'Gesloten behuizing: nodig voor consistente werking van het hechtmiddel.'],
    },
    slicerSettings: {
      brimWidth: 'Brim-breedte: {value}',
      bedAdhesion: 'Bedhechting: {value}',
      lowAdhesion: 'Schoon PEI of gestructureerde plaat',
      highAdhesion: 'PEI plus lijmstift, Magigoo of materiaalspecifiek hechtmiddel',
      cooling: 'Koeling: {value}',
      normalCooling: 'Normale onderdeelkoeling na laag 3',
      technicalCooling: 'Onderdeelkoeling uit voor de eerste 5-8 lagen',
      enclosedChamber: 'Houd de behuizing gesloten tot het onderdeel onder het glasovergangsbereik is afgekoeld',
      openChamber: 'Bescherm de printer tegen tocht en ruimteluchtstroom',
      skirtEnough: '0 mm, rok is voldoende',
    },
    diagonalExplanation: 'De langste diagonaal gedraagt zich als de hoofdspanningsvector: terwijl het onderdeel afkoelt, hoopt krimp zich op langs die overspanning en belast het de hoeken, zelfs wanneer het voetafdrukoppervlak royaal lijkt.',
  },
  seo: [
    { type: 'title', text: 'Hoe u het warpingsrisico kunt schatten voordat u een 3D-print slicet', level: 2 },
    {
      type: 'paragraph',
      html: 'Warping is niet alleen een materiaalprobleem en het is niet alleen een bedhechtingsprobleem. Het treedt op wanneer een geprinte laag afkoelt, samentrekt en voldoende interne spanning creëert om de grip van de eerste laag te overwinnen. Een kleine ABS-beugel kan falen omdat het polymeer sterk krimpt; een groot PLA-bord kan falen omdat de diagonaal lang genoeg is om samentrekking over een brede overspanning te accumuleren. De nuttige vraag is dus niet simpelweg <strong>zal dit materiaal kromtrekken?</strong> maar <strong>creëren deze geometrie en thermische omgeving meer trekkracht dan de bouwplaat kan weerstaan?</strong>',
    },
    {
      type: 'paragraph',
      html: 'Deze simulator gebruikt een heuristische Thermische Spanningsindex: <strong>materiaalkrimpfactor maal langste diagonaal maal bed-kamer temperatuurverschil, gedeeld door voetafdrukoppervlak</strong>. De formule is bewust praktisch. Het pretendeert geen eindige-elementenanalyse te zijn, maar combineert de variabelen die operators vóór het printen kunnen meten: materiaalfamilie, contactoppervlak, langste lineaire overspanning, bedtemperatuur, kamertemperatuur en of de printer gesloten is.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Gebruik het resultaat als een preventief signaal',
      badge: 'Schatting',
      html: 'Een lage score betekent dat de print waarschijnlijk niet zal loskomen als de eerste laag schoon en goed afgesteld is. Een hoge of kritieke score betekent dat het slicerprofiel moet worden gewijzigd vóór het printen: bredere brim, hechtmiddel, minder koeling, tochtbescherming of een ander materiaal. De simulator kan geen vochtig filament, vettig PEI, een te ver van het bed verwijderde nozzle of een onderdeel met kleine contactpunten op de hoeken zien.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '5%', label: 'initiële brim-breedte als fractie van de langste diagonaal', icon: 'mdi:ruler' },
        { value: '1,85x', label: 'ernstige open-behuizing vermenigvuldiger voor ABS, ASA, Nylon en PC', icon: 'mdi:home-alert' },
        { value: '0-100', label: 'risicoschaal afgeleid van de Thermische Spanningsindex', icon: 'mdi:gauge' },
      ],
    },
    { type: 'title', text: 'Waarom de langste diagonaal gevaarlijker kan zijn dan oppervlakte', level: 2 },
    {
      type: 'paragraph',
      html: 'Het voetafdrukoppervlak vertelt u hoeveel oppervlak beschikbaar is voor hechting. De diagonaal vertelt u hoe ver thermische krimp kan accumuleren voordat het een hoek of dun uiteinde bereikt. Twee onderdelen kunnen hetzelfde oppervlak hebben en zich heel anders gedragen: een compact vierkant kussentje heeft korte krimprichtingen in alle richtingen, terwijl een lange smalle strip de krimp langs één enkele lijn concentreert en probeert aan de uiteinden los te komen.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Compacte voetafdruk',
          description: 'Een vierkante of ronde basis verdeelt de krimp via vele korte paden. Hoeken zijn dichter bij het centrum, dus de hefboom voor optillen is kleiner.',
          icon: 'mdi:crop-square',
          points: ['Betere lastverdeling', 'Lagere hefboomwerking op hoeken', 'Brim vaak optioneel bij makkelijke materialen'],
        },
        {
          title: 'Lange diagonaal voetafdruk',
          description: 'Een lange rechthoek, frame, blad, behuizingspaneel of rail laat krimp ophopen langs één dominante richting. Uiteinden en hoeken krijgen de hoogste peelkracht.',
          icon: 'mdi:vector-line',
          highlight: true,
          points: ['Hogere geaccumuleerde spanning', 'Hoeken komen eerst los', 'Brim of muisoren vaak nodig'],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Hoe u de diagonaal snel meet',
      html: 'Kijk in de slicervoorbeeld van boven naar de eerste laag en meet de langste hoek-tot-hoek afstand van het deel dat het bed raakt. Gebruik voor een rechthoekige voetafdruk de diagonaal van de rechthoek, niet alleen de X- of Y-lengte. Gebruik voor een onregelmatig onderdeel de langste rechte overspanning tussen twee buitenste punten.',
    },
    {
      type: 'table',
      headers: ['Geometriepatroon', 'Typisch symptoom', 'Preventieve actie'],
      rows: [
        ['Lange dunne rail', 'Uiteinden komen los terwijl het midden blijft hechten', 'Gebruik brim of muisoren aan beide uiteinden'],
        ['Groot plat paneel', 'Hoeken krullen geleidelijk omhoog', 'Gebruik gesloten behuizing, langzamere koeling en hechtmiddel'],
        ['Klein hoog onderdeel', 'Basis blijft vast maar toren wiebelt', 'Warping is niet het hoofdrisico; verbeter stabiliteit'],
        ['Open frame', 'Binnenhoeken trekken naar binnen', 'Voeg brim toe, vergroot eerste laagbreedte, verminder ventilator'],
      ],
    },
    { type: 'title', text: 'Materiaalkrimpklassen gebruikt door de simulator', level: 2 },
    {
      type: 'paragraph',
      html: 'Verschillende thermoplasten krimpen in verschillende mate bij afkoeling van extrusietemperatuur naar kamertemperatuur. PLA en TPU zijn over het algemeen vergevingsgezind omdat ze bij lagere temperaturen printen en minder koelspanning creëren. PETG zit in het midden: het hecht sterk maar kan nog steeds aan scherpe hoeken trekken. ABS, ASA, Nylon en PC worden behandeld als technische hoogrisicomaterialen omdat ze hogere extrusietemperaturen, sterkere krimp en een grotere behoefte aan een warme, stabiele behuizing combineren.',
    },
    {
      type: 'table',
      headers: ['Materiaal', 'Krimpklasse', 'Gebruikelijke bedstrategie', 'Behuizingsgevoeligheid'],
      rows: [
        ['PLA', 'Laag', 'Schoon PEI, matig bed', 'Laag'],
        ['TPU', 'Laag', 'Schone plaat, overmatig knijpen vermijden', 'Laag'],
        ['PETG', 'Middel', 'Gestructureerd PEI of loslaaglaag', 'Middel'],
        ['ABS', 'Hoog', 'PEI plus hechtmiddel of ABS-suspensie waar geschikt', 'Zeer hoog'],
        ['ASA', 'Hoog', 'PEI plus hechtmiddel, gecontroleerde koeling', 'Zeer hoog'],
        ['Nylon', 'Hoog', 'Materiaalspecifiek hechtmiddel, droog filament', 'Zeer hoog'],
        ['PC', 'Hoog', 'Hoge temperatuur bed en hechtmiddel', 'Zeer hoog'],
      ],
    },
    {
      type: 'proscons',
      title: 'Materiaal wisselen in plaats van warping bestrijden',
      items: [
        { pro: 'Overschakelen van ABS naar ASA kan de buitenbestendigheid verbeteren terwijl het thermische gedrag vergelijkbaar blijft.', con: 'ASA heeft nog steeds behuizingsdiscipline nodig en kan kromtrekken op lange onderdelen.' },
        { pro: 'Overschakelen van ABS naar PETG vermindert krimp en is vaak voldoende voor beugels en behuizingen.', con: 'PETG heeft een lagere hittebestendigheid en een andere stijfheid dan ABS of PC.' },
        { pro: 'Vezelgevuld Nylon kan sommige krimprichtingen verminderen en de stijfheid verbeteren.', con: 'Het vereist droging, slijtvaste nozzles en sterke hechtingscontrole.' },
      ],
    },
    { type: 'title', text: 'Delta T: waarom bedtemperatuur en kamertemperatuur beide belangrijk zijn', level: 2 },
    {
      type: 'paragraph',
      html: 'De simulator gebruikt <strong>Delta T</strong> als de bedtemperatuur minus kamertemperatuur. Dit is niet hetzelfde als de nozzletemperatuur, maar het is een nuttige proxy voor de thermische gradiënt die het onderste deel van het onderdeel ervaart. Een heet bed vermindert vroege krimp bij de interface, maar een zeer koude kamer of sterke luchtstroom kan nog steeds warmte uit de bovenste lagen trekken en een spanningsgradiënt creëren tussen de verankerde basis en het afkoelende onderdeellichaam.',
    },
    {
      type: 'paragraph',
      html: 'Voor PLA kan een matige Delta T onschadelijk zijn omdat het materiaal minder agressief krimpt. Voor ABS, ASA, Nylon en PC kan dezelfde geometrie bij dezelfde bedtemperatuur falen als de printer aan tocht wordt blootgesteld. Daarom past de berekening een ernstige vermenigvuldiger toe wanneer deze technische materialen zonder gesloten behuizing worden geprint.',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Open printer met ABS, ASA, Nylon of PC',
      badge: 'Kritieke conditie',
      html: 'Als de behuizing open is, wordt de print blootgesteld aan lokale koeling, deurbeweging, HVAC-luchtstroom en snelle laagtemperatuurveranderingen. De eerste laag kan er de eerste twintig minuten perfect uitzien en toch later loskomen naarmate het onderdeel meer krimpspanning opslaat.',
    },
    {
      type: 'list',
      icon: 'mdi:thermometer',
      items: [
        'Een warmere behuizing vermindert het temperatuurverschil tussen nieuwe en oudere lagen.',
        'Een gesloten behuizing vertraagt ook de koeling na het printen, wat plotseling hoekloskomen vermindert.',
        'Tochtschermen helpen, maar ze zijn niet gelijkwaardig aan een stabiele verwarmde behuizing voor PC of Nylon.',
        'Alleen de bedtemperatuur verhogen kan de grip verbeteren, maar kan ook olifantenvoet op zachte materialen vergroten.',
      ],
    },
    { type: 'title', text: 'Hoe de Thermische Spanningsindex wordt geïnterpreteerd', level: 2 },
    {
      type: 'paragraph',
      html: 'De Thermische Spanningsindex is een relatieve score, geen gemeten kracht in newton. Deze stijgt wanneer de krimpfactor, diagonaal of Delta T stijgt. Deze daalt wanneer het voetafdrukoppervlak toeneemt omdat meer contactoppervlak dezelfde treklast kan verdelen. De waarde wordt vervolgens toegewezen aan een risicopercentage van 0-100 zodat verschillende printinstellingen snel kunnen worden vergeleken.',
    },
    {
      type: 'table',
      headers: ['Risicobereik', 'Betekenis', 'Aanbevolen reactie'],
      rows: [
        ['0-31%', 'Laag', 'Reinig het bed, controleer de eerste laag, geen speciale hechting nodig voor de meeste vormen'],
        ['32-57%', 'Middel', 'Gebruik brim op scherpe hoeken, verminder vroege ventilator, inspecteer voetafdrukcontact'],
        ['58-81%', 'Hoog', 'Gebruik brede brim, hechtmiddel, gesloten behuizing indien nodig, vermijd tocht'],
        ['82-100%', 'Kritiek', 'Behandelen als waarschijnlijk kromtrekken tenzij geometrie, materiaal of omgeving verandert'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:calculator-variant',
      title: 'Waarom delen door het voetafdrukoppervlak?',
      html: 'Een grotere voetafdruk geeft het bed meer kans om de peelkracht te weerstaan. Het model beloont onderdelen met breed, continu contact en bestraft smalle bases, kleine voetjes en lange onderdelen die slechts een dunne strook op het oppervlak hebben.',
    },
    { type: 'title', text: 'Brim-breedte, muisoren en hechtmiddelkeuzes', level: 2 },
    {
      type: 'paragraph',
      html: 'De brim-aanbeveling begint bij <strong>Diagonaal x 0,05</strong>. Een diagonaal van 180 mm begint daarom nabij 9 mm vóór risicoschaling. In de praktijk moet brim niet alleen op basis van materiaal worden gekozen. Een korte PLA-kubus heeft mogelijk geen brim nodig, terwijl een lang PLA-zwaard, -bord of -rail kan profiteren van een bescheiden brim omdat de diagonaal het dominante spanningspad is.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: 'Brim', description: 'Beste allround keuze voor het vergroten van het contact van de eerste laag rond het hele onderdeel.', icon: 'mdi:border-outside', points: ['Gemakkelijk te verwijderen op PLA', 'Zeer nuttig op ABS-hoeken'] },
        { title: 'Muisoren', description: 'Lokale ronde kussentjes geplaatst op hoeken of dunne uiteinden waar het loskomen begint.', icon: 'mdi:circle-outline', points: ['Minder schoonmaak', 'Goed voor rails en frames'] },
        { title: 'Hechtmiddel', description: 'Verbetert de chemische of mechanische grip tussen polymeer en printoppervlak.', icon: 'mdi:water-plus', points: ['Nuttig voor Nylon en PC', 'Oppervlaktespecifieke keuze is belangrijk'] },
      ],
    },
    {
      type: 'tip',
      title: 'Maak brim niet de enige oplossing',
      html: 'Als de simulator een kritiek risico meldt, kan een bredere brim het falen vertragen maar de onderliggende spanning niet wegnemen. Combineer brim met gesloten behuizing, langzamere initiële koeling, een schoner bed en geometrieveranderingen zoals afgeronde hoeken of gesplitste onderdelen.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Warping', definition: 'Opwaartse vervorming veroorzaakt door koelkrimp die de bedhechting overwint.' },
        { term: 'Voetafdrukoppervlak', definition: 'Het oppervlak van het model dat op de eerste laag de bouwplaat raakt.' },
        { term: 'Langste diagonaal', definition: 'De langste rechte overspanning over de contactvorm van de eerste laag.' },
        { term: 'Delta T', definition: 'Het temperatuurverschil tussen het bed en de omringende ruimtelucht.' },
        { term: 'Brim', definition: 'Extra eerste laag omtreklussen geprint rond het onderdeel om de hechting te vergroten.' },
      ],
    },
    { type: 'title', text: 'Praktische slicer-instellingen voor hoogrisico-onderdelen', level: 2 },
    {
      type: 'list',
      icon: 'mdi:tune',
      items: [
        'Vergroot de lijnbreedte van de eerste laag om meer contact te creëren, maar vermijd overmatige Z-squish die ribbels veroorzaakt.',
        'Gebruik een langzamere eerste laag zodat het polymeer aan het bed hecht voordat latere lagen eraan trekken.',
        'Schakel de onderdeelkoeling uit of verminder deze voor ABS, ASA, Nylon en PC tijdens de eerste lagen.',
        'Voeg een brim toe die breed genoeg is om voorbij scherpe hoeken en smalle uiteinden te reiken.',
        'Vermijd het plaatsen van grote technische materiaalonderdelen nabij behuizingsdeuren, ventilatieopeningen of koude zijpanelen.',
      ],
    },
    {
      type: 'message',
      title: 'Geometrieveranderingen die het risico verminderen',
      ariaLabel: 'Ideeën voor geometrieverzachting',
      html: 'Rond scherpe hoeken af, verdeel zeer lange panelen in kortere secties, voeg tijdelijke lipjes toe aan dunne uiteinden, oriënteer het onderdeel zodat het langste spanningspad korter is, of voeg offerkussentjes toe die na het printen kunnen worden bijgesneden. Deze veranderingen werken vaak beter dan simpelweg de bedtemperatuur verhogen.',
    },
    {
      type: 'summary',
      title: 'Snelle interpretatiechecklist',
      items: [
        'Hoogkrimpend materiaal plus open behuizing is het sterkste waarschuwingssignaal.',
        'Lange diagonaal plus kleine voetafdruk betekent dat hoeken en uiteinden brim of muisoren verdienen.',
        'Hoge bedtemperatuur heft een koude kamer of tochtige omgeving niet op.',
        'Het resultaat is een planningschatting; kalibratie van de eerste laag en filamentconditie bepalen nog steeds de uiteindelijke print.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
