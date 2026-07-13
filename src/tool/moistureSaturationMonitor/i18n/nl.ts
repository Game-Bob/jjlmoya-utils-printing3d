import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MoistureSaturationMonitorUI } from '../ui';

const slug = 'filament-dehydratatie-schatter';
const title = 'Filament Dehydratatie Schatter: Gids voor Thermische Regeneratie';
const description = 'Modelleer hygroscopische filamentsaturatie met exponentiële adsorptiekinetiek, blootstelling aan vochtigheid, polymeertype en temperatuur van de droogkamer.';

const faqData = [
  {
    question: 'Hoe berekent de filament dehydratatie schatter vochtsaturatie?',
    answer: 'Het maakt gebruik van een exponentieel saturatiemodel: maximale materiaalabsorptie vermenigvuldigd met één min e tot de negatieve kinetische coëfficiënt maal de blootstellingstijd, en vervolgens geschaald naar de relatieve vochtigheid van de omgeving.',
  },
  {
    question: 'Waarom moet Nylon meer drogen dan PLA?',
    answer: 'Nylon heeft een hogere vochtcapaciteit en een snellere adsorptiecoëfficiënt dan PLA, waardoor het bij dezelfde luchtvochtigheid en blootstellingstijd sneller een schadelijk vochtgehalte bereikt.',
  },
  {
    question: 'Betekent een hogere droogtemperatuur altijd veiliger drogen?',
    answer: 'Nee. Een hogere temperatuur versnelt de dehydratatie, maar elk polymeer heeft een veilig kamerbereik. Overschrijding hiervan kan het filament zacht maken, de spoel vervormen of het printgedrag beïnvloeden.',
  },
  {
    question: 'Wat betekent de indicator voor hydrolyserisico?',
    answer: 'Het vergelijkt het geschatte watergehalte met de kritieke drempelwaarde van het materiaal en geeft een waarschuwing wanneer het geabsorbeerde vocht hoog genoeg is om bubbels, stringing, zwakke lagen of schade aan polymeerketens te veroorzaken.',
  },
];

const howToData = [
  { name: 'Kies het polymeer', text: 'Selecteer PLA, PETG, ABS, ASA, TPU, Nylon, PC of PVA zodat het model de juiste evenwichtscapaciteit en kinetische coëfficiënt kan laden.' },
  { name: 'Voer de opslagvochtigheid in', text: 'Stel de relatieve vochtigheid in waaraan de spoel is blootgesteld, op basis van de vochtigheidsmeting van de kamer, doos of werkplaats.' },
  { name: 'Stel de blootstellingstijd in', text: 'Voer in hoeveel dagen het filament buiten een verzegelde droogdoos of actieve droger heeft doorgebracht.' },
  { name: 'Selecteer de droogtemperatuur', text: 'Gebruik een kamertemperatuur binnen het veilige bereik voor het polymeer en het spoelmateriaal.' },
  { name: 'Start de droogcyclus', text: 'Start de opgeslagen droogtimer en laat de kamerweergave geleidelijk leeglopen naarmate de geschatte vochtbelasting wordt verwijderd.' },
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

export const content: ToolLocaleContent<MoistureSaturationMonitorUI> = {
  slug,
  title,
  description,
  ui: {
    unitSystemLabel: 'Eenheden',
    metricLabel: 'Metrisch',
    imperialLabel: 'Imperiaal',
    materialLabel: 'Polymeer',
    materialPlaLabel: 'PLA',
    materialPetgLabel: 'PETG',
    materialAbsLabel: 'ABS',
    materialAsaLabel: 'ASA',
    materialTpuLabel: 'TPU',
    materialPaLabel: 'Nylon PA',
    materialPcLabel: 'Polycarbonaat',
    materialPvaLabel: 'PVA support',
    humidityLabel: 'Relatieve vochtigheid',
    exposureLabel: 'Blootstellingstijd',
    dryTempLabel: 'Droogkamer',
    spoolMassLabel: 'Spoelmassa',
    calculateLabel: 'Start droogcyclus',
    pauseCycleLabel: 'Pauzeer cyclus',
    resumeCycleLabel: 'Hervat cyclus',
    resetCycleLabel: 'Reset cyclus',
    saturationLabel: 'Vochtgehalte',
    absorbedLabel: 'Geabsorbeerd water',
    dryingTimeLabel: 'Droogcyclus',
    remainingTimeLabel: 'Resterende tijd',
    cycleProgressLabel: 'Cyclusvoortgang',
    hydrolysisLabel: 'Hydrolyserisico',
    stableLabel: 'Stabiel',
    watchLabel: 'Bewakingszone',
    criticalLabel: 'Kritiek',
    chamberReadyLabel: 'Kamer gereed',
    chamberRunningLabel: 'Droogcyclus loopt',
    chamberCompleteLabel: 'Vocht verwijderd',
    curveLabel: 'Adsorptiecurve',
    kineticLabel: 'Saturatiekinetiek',
    equilibriumLabel: 'Exponentiële benadering van evenwichtsverzadiging',
    daysUnit: 'dagen',
    percentUnit: '%',
    gramsUnit: 'g',
    poundsUnit: 'lb',
    celsiusUnit: 'C',
    fahrenheitUnit: 'F',
    hoursUnit: 'u',
    minutesUnit: 'm',
    secondsUnit: 's',
    noValueLabel: '-',
  },
  seo: [
    { type: 'title', text: 'Adsorptiekinetiek begrijpen: waarom Nylon zich niet gedraagt als PLA', level: 2 },
    { type: 'paragraph', html: 'Een serieuze <strong>3D filament droogtijd calculator</strong> kan vocht niet als een rechte lijn behandelen. Hygroscopische polymeren absorberen niet elke dag voor altijd hetzelfde percentage water. Ze naderen een evenwichtstoestand: snel in het begin, langzamer in de buurt van saturatie, en sterk afhankelijk van de relatieve vochtigheid van de omgeving. Daarom is een spoel die twee dagen op 70% RV heeft gelegen niet simpelweg half zo nat als een spoel die er vier dagen heeft gelegen. Het eerste deel van de blootstelling veroorzaakt vaak de steilste vochttoename, vooral bij Nylon, TPU, PVA en andere materialen met polaire groepen die watermoleculen aantrekken.' },
    { type: 'paragraph', html: 'Deze tool modelleert het vochtgehalte met <code>S_h = S_max x (1 - e^(-k x t)) x RV/100</code>. Waarbij <code>S_max</code> de evenwichtsabsorptiecapaciteit van het polymeer is, <code>k</code> de adsorptiesnelheid, <code>t</code> de blootstellingstijd en <code>RV</code> het resultaat schaalt naar de opslagomgeving. De output is geen laboratoriumcertificaat; het is een technisch planningsmodel dat verklaart waarom dezelfde werkplaats PLA printbaar kan houden terwijl Nylon gaat sissen, bubbelen, stringing veroorzaken en laagsterkte verliezen.' },
    { type: 'stats', columns: 4, items: [
      { value: '0.65%', label: 'Plannings-evenwichtscapaciteit voor PLA' },
      { value: '3.2%', label: 'Plannings-evenwichtscapaciteit voor Nylon PA' },
      { value: '5.8%', label: 'Plannings-evenwichtscapaciteit voor PVA support filament' },
      { value: 'RV geschaald', label: 'Omgevingsvochtigheid vermenigvuldigt de saturatiecurve' },
    ] },
    { type: 'diagnostic', variant: 'info', title: 'Vochtsymptomen zijn processymptomen', badge: 'Printaanwijzing', html: 'Knetterende geluiden, stoomballonnetjes, overgangen van een satijnen naar een ruw oppervlak, overmatige stringing, zwakke wanden en troebele extrusie zijn geen willekeurige slicerproblemen. Ze wijzen er vaak op dat water in de smeltzone in stoom verandert of dat hydrolyse de lengte van de polymeerketens heeft verkort vóór de depositie.' },

    { type: 'title', text: 'Hoe het exponentiële saturatiemodel droogbeslissingen verandert', level: 2 },
    { type: 'paragraph', html: 'Lineaire rekenmachines vragen meestal om een materiaal en geven een vast aantal uren terug. Dat werkt als een snelle herinnering, maar verbergt de werkelijke vraag: hoeveel vocht heeft het filament daadwerkelijk geabsorbeerd? Een spoel die drie weken in een verzegelde droogdoos bij 15% RV heeft gelegen, heeft mogelijk weinig of geen regeneratie nodig. Hetzelfde polymeer dat een weekend open in een vochtige garage ligt, kan een volledige droogcyclus nodig hebben. Saturatiemodellering koppelt de droogaanbeveling aan de blootstellingsgeschiedenis in plaats van elke spoel als even nat te behandelen.' },
    { type: 'table', headers: ['Invoer', 'Fysische betekenis', 'Effect op de schatting'], rows: [
      ['Relatieve vochtigheid', 'Wateractiviteit rond de spoel', 'Een hogere RV verhoogt het evenwichtsdoel en het uiteindelijke geabsorbeerde percentage.'],
      ['Blootstellingstijd', 'Hoe lang de diffusie heeft kunnen vorderen', 'De eerste dagen zijn het belangrijkst; de curve vertraagt naarmate de saturatie nadert.'],
      ['Materiaalcoëfficiënt', 'Hoe snel een polymeer het evenwicht nadert', 'Nylon en PVA reageren sneller dan PLA of ASA.'],
      ['Droogtemperatuur', 'Thermische energie beschikbaar voor desorptie', 'Een hogere veilige kamertemperatuur verkort de geschatte cyclus.'],
      ['Spoelmassa', 'Hoeveelheid aanwezig polymeer', 'Het percentage is de materiaalstatus; geabsorbeerde grammen schalen met de spoelmassa.'],
    ] },
    { type: 'tip', title: `Schat de omgeving in, niet de weer-app`, html: 'Gebruik de luchtvochtigheid in de droogdoos, printerbehuizing, kast of werkplaats waar het filament daadwerkelijk lag. Een lokaal weerbericht kan sterk afwijken van de luchtvochtigheid naast een verwarmde printer, op een kelderplank of in een verzegelde container med droogmiddel.' },
    { type: 'card', icon: 'mdi:chart-bell-curve', title: 'Waarom de ring vertraagt in de buurt van saturatie', html: 'De visuele ring volgt hetzelfde exponentiële gedrag als de vergelijking. Hij vult zich snel als het polymeer droog is omdat het vochtverloop sterk is. Nabij het evenwicht wordt dit verloop zwakker, waardoor de schijnbare vulsnelheid vertraagt. Die vertraging is natuurkunde, geen animatietruc.' },

    { type: 'title', text: 'Bereiken van de filament droogcalculator per materiaal', level: 2 },
    { type: 'paragraph', html: 'Droogaanbevelingen moeten rekening houden met het polymeer en de spoel. PLA kan zacht worden of vervormen bij oververhitting. PETG verdraagt meer warmte, maar profiteert nog steeds van een conservatieve kamerregeling. Nylon vereist normaal gesproken een warmere en langere cyclus omdat het meer water absorbeert en dit hardnekkiger vasthoudt. PVA is extreem vochtgevoelig en kan onprintbaar worden als het blootgesteld blijft. PC print vaak beter na het drogen, zelfs als het er niet direct nat uitziet. De schatter gebruikt deze verschillen om een generieke <strong>filament dehydratatie calculator</strong> om te zetten in een materiaalspecifieke gids.' },
    { type: 'comparative', columns: 2, items: [
      { title: 'Lage tot matige hygroscopische respons', description: 'PLA, ABS en ASA absorberen over het algemeen minder water en langzamer, maar lijden na langdurige vochtige blootstelling nog steeds kwaliteitsverlies.', points: ['Kortere droogcycli', 'Lagere evenwichtsvochtigheid', 'Symptomen treden geleidelijk op'] },
      { title: 'Hoge hygroscopische respons', description: 'Nylon, TPU, PVA en sommige PC-kwaliteiten vereisen actievere opslag en meer gedisciplineerde regeneratie.', points: ['Hogere geabsorbeerde watermassa', 'Snellere vroege saturatie', 'Groter risico op bubbels en zwakke lagen'] },
    ] },
    { type: 'table', headers: ['Materiaal', 'Typisch kamerdoel', 'Planningsnotitie'], rows: [
      ['PLA', '40-55 C', 'Vermijd overmatige hitte omdat PLA en sommige spoelkernen kunnen vervormen.'],
      ['PETG', '55-70 C', 'Verbetert na enkele uren vaak de oppervlakteconsistentie en vermindert stringing.'],
      ['ABS / ASA', '65-85 C', 'Lagere absorptie dan Nylon, maar profiteert van droge opslag.'],
      ['TPU', '45-60 C', 'Flexibele kwaliteiten kunnen voldoende vocht absorberen om te schuimen of te draden.'],
      ['Nylon PA', '70-90 C', 'Heeft meestal actieve droging nodig voor kritische functionele prints.'],
      ['PVA', '40-55 C', 'Vochtgevoelig supportmateriaal; direct na gebruik weer verzegelen.'],
    ] },
    { type: 'proscons', title: 'Vaste droogtabel versus saturatiemonitor', items: [
      { pro: 'Een vaste tabel is snel wanneer u alleen een standaardcyclus nodig heeft.', con: 'Het kan geen onderscheid maken tussen een spoel uit een droogdoos en een spoel uit de vochtige buitenlucht.' },
      { pro: 'Saturatiemodellering verklaart waarom vroege blootstelling ernstig kan zijn.', con: 'Het hangt nog steeds af van geschatte materiaalcoëfficiënten en de opslaggeschiedenis.' },
      { pro: 'Een droogtemperatuur-invoer weerspiegelt de werkelijke kameropstelling.', con: 'Het vervangt niet de veilige temperatuurlimieten van de filamentfabrikant.' },
      { pro: 'Geabsorbeerde grammen maken het resultaat tastbaar voor volle en gedeeltelijke spoelen.', con: 'De spoelmassa laat niet zien of de buitenste wikkelingen natter zijn dan de kern.' },
    ] },

    { type: 'title', text: 'Hydrolyserisico: wanneer nat filament beschadigd filament wordt', level: 2 },
    { type: 'paragraph', html: 'Vocht is niet alleen een problem voor de printkwaliteit. Bij extrusietemperaturen kan geabsorbeerd water bijdragen aan hydrolyse in gevoelige polymeren. Hydrolyse verbreekt de moleculaire ketens, waardoor de taaiheid, rek en betrouwbaarheid afnemen. Dit effect is vooral belangrijk voor technische materialen die worden gebruikt in beugels, mallen, tandwielen, kanalen en dragende onderdelen. Een natte spoel kan nog steeds extruderen, maar het onderdeel kan voortijdig falen omdat het polymeer tijdens de verwerking chemisch is aangetast.' },
    { type: 'glossary', items: [
      { term: 'Hygroscopie', definition: 'De neiging van een materiaal om water uit de omringende lucht aan te trekken en vast te houden.' },
      { term: 'Evenwichtsvocht', definition: 'Het vochtgehalte dat een polymeer nadert na voldoende tijd bij een gegeven luchtvochtigheid.' },
      { term: 'Adsorptiecoëfficiënt', definition: 'Een vereenvoudigde kinetische waarde die regelt hoe snel de saturatiecurve stijgt.' },
      { term: 'Desorptie', definition: 'Het omgekeerde proces: water dat het polymeer verlaat tijdens verwarmd drogen.' },
      { term: 'Hydrolyse', definition: 'Chemische ketensplijting veroorzaakt door water onder invloed van warmte, relevant voor verschillende technische polymeren.' },
    ] },
    { type: 'diagnostic', variant: 'warning', title: 'Een droog oppervlak garandeert geen droge kern', badge: 'Diffusielimiet', html: 'Filament droogt van buiten naar binnen. Een korte hete luchtstoot kan het oppervlak verbeteren, terwijl de binnenste wikkelingen van een compacte spoel vochtig blijven. Grote spoelen, kartonnen zijkanten en strak gewikkeld filament kunnen de regeneratie allemaal vertragen.' },
    { type: 'message', title: 'De visual regel', html: 'Wanneer de ring verandert van helder blauw naar een gedempt grijsblauw, markeert de tool de overgang van normaal vochtbeheer naar een hydrolyse-bewakingszone. Dat is het punt waarop drogen deel uitmaakt van de kwaliteitscontrole, niet alleen een cosmetische opschoning.' },

    { type: 'title', text: 'Een betrouwbare filament droogworkflow opbouwen', level: 2 },
    { type: 'paragraph', html: 'Een nuttige <strong>saturatiegids voor hygroscopische materialen</strong> combineert voorspelling met routine. Meet de opslagvochtigheid, label spoelen met de openingsdatum, bewaar gevoelige polymeren in verzegelde dozen, vervang droogmiddel voordat het verzadigd raakt, en droog vóór prints waarbij mechanische prestaties belangrijk zijn. De beste workflow voorkomt herhaalde nat-droogcycli, omdat elke onnodige hittecyclus het materiaal kan verouderen, spoelen kan vervormen of productietijd kan verspillen.' },
    { type: 'list', items: [
      'Droog Nylon, PVA, TPU en PC vóór lange prints wanneer de opslaggeschiedenis onzeker is.',
      'Houd ook PLA en PETG verzegeld; een lagere absorptie betekent niet geen absorptie.',
      'Gebruik een onafhankelijke thermometer in de droger, omdat de weergegeven temperaturen optimistisch kunnen zijn.',
      'Laat het filament rechtstreeks uit een droogdoos invoeren tijdens prints van meerdere uren in vochtige kamers.',
      'Vervang of regenereer het droogmiddel wanneer de indicatorkorrels of vochtigheidssensoren laten zien dat de vochtigheid in de doos stijgt.',
      'Vermijd drogen boven de glasovergangs- of verzachtingstemperatuur van het filament en de spoel.',
    ] },
    { type: 'card', icon: 'mdi:air-filter', title: 'De droogkamer is een regeneratiesysteem', html: 'De kamer moet stabiele warmte, luchtstroom en een afvoermogelijkheid voor vocht bieden. Het verwarmen van een verzegelde doos zonder ventilatie of droogmiddel kan het water simpelweg verplaatsen van het filament naar de lucht in de kamer en weer terug.' },
    { type: 'summary', title: 'Praktische interpretatiechecklist', items: [
      'Het vochtpercentage beschrijft de materiaalstatus; geabsorbeerde grammen beschrijven de vochtbelasting op de spoel.',
      'Een hoge luchtvochtigheid en snelle materialen zorgen voor een steile vroege saturatie.',
      'De droogtijd moet toenemen met de saturatie en afnemen met een veilige kamertemperatuur.',
      'Hydrolyserisico is het meest kritisch voor extrusie bij hoge temperaturen en functionele onderdelen.',
      'Het specificatieblad van de fabrikant gaat vóór elke generieke droogschatting.'
    ] },

    { type: 'title', text: 'SEO antwoord: hoe lang moet ik 3D-printer filament drogen?', level: 2 },
    { type: 'paragraph', html: 'De juiste droogtijd hangt af van het materiaal, de blootstelling aan vocht, de spoelmassa en de kamertemperatuur. PLA heeft na matige blootstelling misschien maar een paar uur nodig, PETG en TPU hebben vaak langer nodig, en Nylon of PVA kunnen een aanzienlijke regeneratiecyclus vereisen na een vochtige opslag. Een sterke workflow voor het <strong>vochtgehalte bij 3D-printen</strong> schat eerst het geabsorbeerde water, en selecteert vervolgens een veilige droogtemperatuur en voldoende droogtijd. Dat is betrouwbaarder dan het toepassen van één universeel getal op elk polymeer.', },
    { type: 'diagnostic', variant: 'success', title: `Beste use-case voor deze monitor`, badge: 'Engineering preflight', html: 'Gebruik de schatter vóór kritieke prints, productiejobs, dure engineering-polymeren of elke klus waarbij een mislukt oppervlak, een broze laag of een onderdeel met te weinig sterkte meer zou kost dan een droogcyclus.' },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
