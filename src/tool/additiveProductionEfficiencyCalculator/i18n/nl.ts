import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AdditiveProductionEfficiencyCalculatorUI } from '../ui';

const slug = 'additive-productie-efficientie-calculator';
const title = 'Additieve Productie efficiëntiecalculator';
const description =
  'Vergelijk batchprinten vs sequentieel printen met printtijd, voorverwarmingsoverhead, verplaatsingstransities, purgetijd, statistisch uitvalrisico en een automatische levensvatbaarheidsaanbeveling.';

const faqData = [
  {
    question: 'Wanneer is batchprinten sneller dan sequentieel printen?',
    answer:
      'Batchprinten is meestal sneller wanneer voorverwarmen aanzienlijk is, de onderdelen veilig op de bouwplaat passen, de verplaatsingsafstand tussen onderdelen beperkt is en het historische uitvalpercentage laag genoeg is dat het gecombineerde batchrisico onder de kritieke drempel blijft.',
  },
  {
    question: 'Waarom kan sequentieel printen worden aanbevolen, zelfs als het langer duurt?',
    answer:
      'Sequentieel printen beperkt het verlies van één mislukt onderdeel. Als het batchrisico berekend als 1 - (1 - uitvalpercentage)^N de kritieke drempel overschrijdt, beveelt de calculator sequentieel printen aan om de productiewachtrij te beschermen.',
  },
  {
    question: 'Vervangt de calculator slicer-schattingen?',
    answer:
      'Nee. Een slicer kent exacte toolpaths, acceleraties, extrudatiebreedtes, koeling en botsingsvrijheid. Deze calculator is bedoeld voor productieplanning vóór het slicen, vooral bij het vergelijken van een enkele volledige-bedklus met herhaalde enkelvoudige-onderdeelklussen.',
  },
  {
    question: 'Welk uitvalpercentage moet ik invoeren?',
    answer:
      'Gebruik je eigen werkplaatsgeschiedenis voor vergelijkbaar materiaal, printer, geometrie en operatoromstandigheden. Als je het nog niet bijhoudt, begin dan conservatief met 2-5% voor afgestemde FDM-productie en verhoog het voor nieuwe materialen, lange klussen of slecht gevalideerde armaturen.',
  },
];

const howToData = [
  { name: 'Voer de hoeveelheid in', text: 'Stel het totale aantal benodigde onderdelen voor de productierun in.' },
  { name: 'Voer tijdsinputs toe', text: 'Voer de printtijd per onderdeel, voorverwarmtijd, overgangsafstand, verplaatsingssnelheid en purge- of stabilisatietijd in.' },
  { name: 'Stel historisch risico in', text: 'Gebruik een uitvalpercentage van vergelijkbare klussen en kies het maximaal aanvaardbare batchrisico.' },
  { name: 'Lees de aanbeveling', text: 'Vergelijk totale tijd, bespaarde tijd, relatieve efficiëntie, transitieoverhead en statistisch batchrisico.' },
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

export const content: ToolLocaleContent<AdditiveProductionEfficiencyCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Inputs additieve productie-efficiëntie',
    resultsAriaLabel: 'Resultaten additieve productie-efficiëntie',
    visualizerAriaLabel: 'Generatief risico en bedindelingsvisualisatie',
    unitSystemLabel: 'Eenheden',
    metricLabel: 'Metrisch',
    imperialLabel: 'US',
    piecesLabel: 'Onderdelen',
    unitPrintTimeLabel: 'Printtijd per onderdeel (min)',
    preheatTimeLabel: 'Voorverwarmtijd (min)',
    transitionDistanceLabel: 'Gemiddelde overgang',
    travelSpeedLabel: 'Verplaatsingssnelheid',
    failureRateLabel: 'Historisch uitvalpercentage',
    purgeTimeLabel: 'Purge / stabilisatie (min)',
    criticalRiskLabel: 'Kritiek batchrisico',
    batchLabel: 'Batchprinten',
    sequentialLabel: 'Sequentieel printen',
    recommendationLabel: 'Aanbevolen strategie',
    savingsLabel: 'Absolute tijdswinst',
    efficiencyLabel: 'Relatieve efficiëntie',
    riskLabel: 'Batchuitvalrisico',
    layoutLabel: 'Bouwplaat choreografie',
    transitionLabel: 'Transitieoverhead',
    batchWinsLabel: 'Batch',
    sequentialWinsLabel: 'Sequentieel',
    riskOverrideLabel: 'risico-override',
    fasterLabel: 'bespaard',
    slowerLabel: 'extra',
    lowRiskLabel: 'Laag batchrisico',
    moderateRiskLabel: 'Matig batchrisico',
    criticalRiskStatusLabel: 'Kritiek batchrisico',
    minutesUnit: 'min',
    percentUnit: '%',
    millimeterUnit: 'mm',
    inchUnit: 'in',
    metricSpeedUnit: 'mm/s',
    imperialSpeedUnit: 'in/s',
  },
  seo: [
    { type: 'title', text: 'Batchprinten vs Sequentieel Printen: Wat de Calculator Meet', level: 2 },
    {
      type: 'paragraph',
      html: 'Kiezen tussen <strong>batchprinten vs sequentieel printen</strong> is niet alleen een kwestie van het vullen van de bouwplaat. Een volledige-bedbatch kan opwarmtijd besparen en operatorinterventie verminderen, maar concentreert het productierisico in één lang blootstellingsvenster. Sequentieel printen herhaalt de instellingsoverhead, maar isoleert mislukkingen zodat één slecht onderdeel niet automatisch de waarde van de gehele bouwplaat besmet. Deze calculator zet die afweging om in cijfers: totale minuten, verplaatsingstransities, relatieve efficiëntie en statistisch batchrisico.',
    },
    {
      type: 'paragraph',
      html: 'De batchformule is <code>Tbatch = Tc + (N x Tp) + ((N x Dtrans) / (Vtravel x 60))</code>. De sequentiële formule is <code>Tseq = N x (Tc + Tp + Tpurge)</code>. De risicoformule is <code>Riskbatch = 1 - (1 - Pfailure)^N</code>. Deze vergelijkingen zijn opzettelijk transparant omdat productieplanning eenvoudiger is wanneer de reden achter een aanbeveling zichtbaar is in plaats van verborgen in een black box.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '1', label: 'Voorverwarmcyclus in batchmodus', icon: 'mdi:heat-wave' },
        { value: 'N', label: 'Voorverwarmcycli in sequentiële modus', icon: 'mdi:repeat' },
        { value: '60', label: 'Seconden gebruikt om verplaatsing naar minuten te normaliseren', icon: 'mdi:timer-outline' },
        { value: '1 - (1-p)^N', label: 'Samengesteld batchuitvalmodel', icon: 'mdi:chart-bell-curve' },
      ],
    },
    {
      type: 'tip',
      title: 'Gebruik één consistente definitie van uitval',
      html: '<p>Een uitvalpercentage is alleen nuttig als de werkplaats uitval consistent definieert. Bepaal of het cosmetische afkeuringen, dimensionale uitschieters, supportlittekens, eerste-laagfouten, spoolklitten, stroomstoringen en operatorverwijderingen omvat. Het mixen van definities laat het risicomodel er precies uitzien terwijl het ruisgegevens krijgt.</p>',
    },
    { type: 'title', text: 'Hoe Batchprinten Tijd Bespaart', level: 2 },
    {
      type: 'paragraph',
      html: 'Batchprinten wint normaal gesproken op machinebenutting wanneer de voorverwarmtijd groot is in vergelijking met de printtijd van één onderdeel. Het één keer verwarmen van de bed en nozzle voor een run van 24 onderdelen kan 23 herhaalde opwarmcycli vermijden. In een farm-omgeving is dit belangrijk omdat opwarmen dode capaciteit is: de printer verbruikt kalendertijd, energie en operatoraandacht voordat er verkoopbare geometrie wordt geproduceerd.',
    },
    {
      type: 'paragraph',
      html: 'De verplaatsingsterm voorkomt dat het model doet alsof batchindelingen gratis zijn. Elk onderdeel kan een niet-printende transitie toevoegen waarbij de nozzle de plaat kruist, eilanden vermijdt, combing-bewegingen uitvoert of naar de volgende objectgrens gaat. De calculator gebruikt de gemiddelde transitieafstand en verplaatsingssnelheid om deze overhead in minuten te schatten. De term is klein op compacte indelingen en meer zichtbaar wanneer onderdelen verspreid zijn over een groot bed.',
    },
    {
      type: 'table',
      headers: ['Batchvariabele', 'Productiebetekenis', 'Planningsfout die het voorkomt'],
      rows: [
        ['N', 'Totaal aantal onderdelen in de run', 'Een bed met tien onderdelen behandelen als tien geïsoleerde klussen zonder gedeelde voorverwarming.'],
        ['Tp', 'Één volledige onderdeelprinttijd', 'Alleen laagtijd van een klein kenmerk gebruiken in plaats van een schatting van een afgewerkt onderdeel.'],
        ['Tc', 'Bed- en nozzle-opwarmtijd', 'Tijd vóór extrudatie negeren bij het calculeren van wachtrijcapaciteit.'],
        ['Dtrans', 'Gemiddelde afstand tussen onderdelen', 'Aannemen dat een vol bed geen bewegingsstraf zonder extrudatie heeft.'],
        ['Vtravel', 'Kopverplaatsingssnelheid', 'Vergeten dat trage verplaatsingsprofielen verspreide arrays minder efficiënt maken.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Batchtijd is het meest gevoelig voor voorverwarming en hoeveelheid',
      badge: 'Capaciteitsplanning',
      html: '<p>Als voorverwarmen 12 minuten is en de klus 30 onderdelen bevat, besteedt de sequentiële modus 360 minuten alleen aan het herhalen van opwarmen. De batchmodus besteedt die 12 minuten één keer. Daarom kan dezelfde printer er dramatisch productiever uitzien wanneer kleine onderdelen zorgvuldig worden genesteld.</p>',
    },
    { type: 'title', text: 'Waarom Sequentieel Printen Nog Steeds Wint bij Risicovolle Klussen', level: 2 },
    {
      type: 'paragraph',
      html: 'Sequentieel printen kan er langzamer uitzien omdat de printer voorverwarming en purge- of stabilisatietijd herhaalt voor elke eenheid. Het voordeel is insluiting. Als onderdeel 17 faalt in een sequentieel plan, zijn de vorige 16 stukken mogelijk al voltooid en verwijderd. Als onderdeel 17 faalt in een batch vanwege nozzlesleep, adhesieverlies, thermische kruip of een materiaalprobleem, kan het mislukte object tegen naburige onderdelen botsen of de operator dwingen de hele plaat af te keuren.',
    },
    {
      type: 'paragraph',
      html: 'Het risicomodel combineert de historische faalkans over het aantal onderdelen. Een uitvalpercentage van 3% per onderdeel betekent niet dat een batch van 24 onderdelen 3% risico heeft. De kans dat elk onderdeel slaagt is <code>(1 - 0.03)^24</code>, en de kans dat ten minste één onderdeel faalt is het complement. Dit maakt grote batches minder aantrekkelijk wanneer het proces niet stabiel is.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Batchprinten',
          description: 'Het beste wanneer het proces stabiel is, onderdelen sterke hechting hebben, de bedindeling botsingsveilig is en de voorverwarmtijd het schema domineert.',
          icon: 'mdi:grid',
          highlight: true,
          points: ['Eén opwarmcyclus', 'Hoge doorvoer', 'Hogere gedeelde-uitvalblootstelling'],
        },
        {
          title: 'Sequentieel printen',
          description: 'Het beste wanneer afkeuringen duur zijn, klussen hoog zijn, materialen gevoelig zijn of de gebruiker elk onderdeel van het volgende wil isoleren.',
          icon: 'mdi:format-list-numbered',
          points: ['Uitvalinsluiting', 'Meer herhaalde overhead', 'Vereist vrijheidsplanning'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Productierisico afweging',
      items: [
        { pro: 'Batchprinten vermindert inactieve opwarmtijd en kan kleine herhalende onderdelen in één onbemande run voltooien.', con: 'Eén adhesie- of extrudatiefout kan de hele plaat bedreigen en een lange operatorhersteltijd verbruiken.' },
        { pro: 'Sequentieel printen maakt het eenvoudiger om één eenheid te valideren, te verwijderen en door te gaan met minder accumulerend verlies.', con: 'Herhaald opwarmen en stabiliseren kan meer tijd verbruiken dan de werkelijke geometrie bij kleine onderdelen.' },
        { pro: 'Een batch kan verpakking vereenvoudigen omdat alle onderdelen samen klaar zijn.', con: 'Een lange batch stelt elke eenheid bloot aan dezelfde omgevingsdrift, spoolprobleem of thermische degradatieperiode.' },
      ],
    },
    { type: 'title', text: 'Een Kritieke Batchrisicodrempel Kiezen', level: 2 },
    {
      type: 'paragraph',
      html: 'De kritieke risicodrempel is de lijn waar de calculator overschakelt van tijdoptimalisatie naar levensvatbaarheidsbescherming. Een prototypewerkplaats kan 45% batchrisico tolereren als het materiaal goedkoop is en de operator experimenteert. Een productiefarm die klantonderdelen verscheept, kan 15-25% gebruiken voor gangbare materialen en lagere drempels voor nachtklussen, dure technische polymeren of onderdelen met veel nabewerking.',
    },
    {
      type: 'table',
      headers: ['Drempel', 'Goed gebruiksscenario', 'Interpretatie'],
      rows: [
        ['10-20%', 'Dure onderdelen, nachtklussen, hoogwaardige klantorders', 'Bescherm betrouwbaarheid, zelfs wanneer batchmodus tijd bespaart.'],
        ['25-35%', 'Normale afgestemde FDM-productie met bekend materiaal', 'Gebalanceerde drempel voor tijdwinst en uitvalblootstelling.'],
        ['40-60%', 'Interne prototypen of goedkope armaturen', 'Accepteert meer risico om sneller printercapaciteit vrij te maken.'],
        ['Boven 60%', 'Alleen verkenning', 'Nuttig om tijdspotentieel te zien, maar zwak als productielevensvatbaarheidsregel.'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:clipboard-pulse-outline',
      title: 'Hoe schat u uw beginnende uitvalpercentage',
      html: '<p>Beoordeel de laatste 50 tot 200 vergelijkbare prints op dezelfde printerfamilie. Tel klussen die herdruk, handmatige redding of klantafwijzing nodig hadden. Deel mislukkingen door totale pogingen en scheid vervolgens op materiaal en geometrie wanneer er voldoende gegevens zijn. PLA-beugels, PETG-clips, ASA-behuizingen en TPU-pakkingen mogen niet één generiek risiconummer delen.</p>',
    },
    {
      type: 'summary',
      title: 'Risicodrempelregels',
      items: [
        'Verlaag de drempel wanneer materiaal, deadline of nabewerkingskosten hoog zijn.',
        'Verhoog deze alleen wanneer mislukte onderdelen goedkoop zijn en de wachtrij profiteert van agressief batchen.',
        'Herbereken na proceswijzigingen zoals een nieuw bedoppervlak, nozzle, filamentleverancier of behuizingstemperatuur.',
      ],
    },
    { type: 'title', text: 'Verplaatsingstransities, Kopbeweging en Indelingsefficiëntie', level: 2 },
    {
      type: 'paragraph',
      html: 'Verplaatsingstransities zijn de verborgen kosten van print-in-place-efficiëntie. Een slicer kan vele malen per laag van het ene onderdeel naar het andere springen, vooral wanneer meerdere objecten dezelfde Z-hoogte delen. De gemiddelde transitieafstand hoeft niet perfect te zijn; het hoeft alleen weer te geven of de indeling compact, matig gespreid of verspreid over het bouwoppervlak is. Een compacte array met gemiddeld 25 mm transities gedraagt zich heel anders dan een volledige-bedindeling met sprongen van 180 mm.',
    },
    {
      type: 'paragraph',
      html: 'De verplaatsingssnelheid moet het echte profiel weerspiegelen, niet het advertentiemaximum van de machine. Acceleratielimieten, firmware-instellingen, opties om kruisen van omtrekken te vermijden, Z-hop en combing-strategie kunnen de effectieve verplaatsing trager maken dan het slicerveld suggereert. Als een machine conservatieve verplaatsing gebruikt voor kwetsbare eerste lagen of hoge onderdelen, verlaag dan de waarde om te voorkomen dat de batchefficiëntie wordt overschat.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Batchprinten', definition: 'Meerdere kopieën of objecten in één gedeelde klus op de bouwplaat printen.' },
        { term: 'Sequentieel printen', definition: 'Één object tegelijk printen voordat naar het volgende object wordt gegaan, vaak met vrijheidsbeperkingen rond de toolhead.' },
        { term: 'Transitieafstand', definition: 'Gemiddelde niet-extruderende verplaatsingsafstand die nodig is om tussen onderdelen of printzones te bewegen.' },
        { term: 'Purge- of stabilisatietijd', definition: 'Extra tijd per sequentiële eenheid voor priming, thermische stabilisatie, wissen of operatorveilige herstartgedrag.' },
        { term: 'Kritiek risico', definition: 'Maximaal aanvaardbare kans dat ten minste één onderdeel in de batch faalt.' },
      ],
    },
    {
      type: 'message',
      title: 'Botsingsvrijheid is belangrijk in echte sequentiële modus',
      ariaLabel: 'Waarschuwing vrijheid sequentieel printen',
      html: '<p>Veel slicers beperken sequentieel printen omdat de hotend, fan duct, X-gantry of bedclips kunnen botsen met afgewerkte onderdelen. Gebruik deze calculator voor planning en verifieer vervolgens de sequentiële vrijheid in de slicer voordat u de klus vastlegt.</p>',
    },
    { type: 'title', text: 'Hoe de Resultaten te Gebruiken voor Additieve Productieoptimalisatie', level: 2 },
    {
      type: 'paragraph',
      html: 'De absolute tijdswinst laat zien hoeveel minuten de batchmodus wint of verliest ten opzichte van de sequentiële modus. Het relatieve efficiëntiepercentage normaliseert dat verschil ten opzichte van de sequentiële tijd, wat handig is bij het vergelijken van klussen van verschillende grootte. 20 minuten besparen op een run van 40 minuten is operationeel enorm; 20 minuten besparen op een run van 30 uur rechtvaardigt mogelijk niet het hogere risico.',
    },
    {
      type: 'paragraph',
      html: 'De aanbeveling combineert snelheid en levensvatbaarheid. Als batch sneller is en het risico onder de drempel, beveelt de tool batch aan. Als het batchrisico de drempel overschrijdt, wordt sequentieel aanbevolen, zelfs als het langzamer is. Als batch langzamer is omdat de transitieoverhead groot is of de voorverwarming klein, wint sequentieel op tijd zonder dat de risico-override nodig is.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Gebruik de calculator voordat u een grote bouwplaat nestelt, zodat het productieplan is gebaseerd op wachtrijtijd en uitvalblootstelling.',
        'Voer een what-if-vergelijking uit met een lager uitvalpercentage na kalibratie om te zien hoe procesverbetering de strategie verandert.',
        'Verhoog de purgetijd wanneer sequentiële klussen reiniging, priming, bedinspectie of operatorinterventie tussen eenheden vereisen.',
        'Verlaag de verplaatsingssnelheid bij gebruik van Z-hop, vermijd-kruisen-van-omtrekken, kwetsbare hoge onderdelen of firmwareacceleratielimieten.',
        'Registreer de werkelijke runresultaten en werk het uitvalpercentage bij in plaats van te vertrouwen op een algemene vuistregel.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Optimaliseer niet alleen voor de snelste kloktijd',
      badge: 'Operationele kosten',
      html: '<p>Een mislukte batch van 12 uur kan meer kosten dan de tijd die op het machinedisplay wordt weergegeven. Neem materiaal, elektriciteit, operatordiagnose, verloren wachtrijslot, nabewerkingsvertraging en impact van klantdeadlines mee bij het beslissen of de tijdswinst het samengestelde risico waard is.</p>',
    },
    { type: 'title', text: 'Praktische Voorbeelden voor 3D-printtijdcalculator Workflows', level: 2 },
    {
      type: 'paragraph',
      html: 'Voor kleine PLA-clips met een printtijd van 20 minuten per onderdeel en 10 minuten opwarmen, domineert batchprinten vaak. De gedeelde voorverwarming bespaart een groot deel van de klus en compacte plaatsing houdt de transitieoverhead laag. Als de werkplaats een uitvalpercentage van 1-2% heeft, blijft het risico mogelijk aanvaardbaar voor gematigde hoeveelheden. Dit is het klassieke hoge-doorvoer gebruiksscenario voor batchprinten.',
    },
    {
      type: 'paragraph',
      html: 'Voor hoge PETG-beugels met marginale hechting kan sequentieel printen veiliger zijn. Zelfs als batch twee uur bespaart, kan één gekrulde hoek nozzlebotsing, laagverschuiving of objectloslating veroorzaken die naburige stukken verpest. De calculator laat het verschil zien tussen een verleidelijke tijdwinst en een risicoprofiel dat niet langer past bij de productiebedoeling.',
    },
    {
      type: 'paragraph',
      html: 'Voor print-in-place efficiëntiebeslissingen, voer hetzelfde onderdeel twee keer uit: eenmaal met het huidige uitvalpercentage en eenmaal met het streefpercentage na kalibratie. Als het verminderen van uitval van 6% naar 2% de aanbeveling van sequentieel naar batch laat omslaan, is de beste investering mogelijk het reinigen van het bed, het afstemmen van de eerste laag, droog filament, behuizingsstabiliteit of een gevalideerde brim-strategie in plaats van het kopen van een andere printer.',
    },
    {
      type: 'summary',
      title: 'Beslissingschecklist',
      items: [
        'Batch wanneer voorverwarming groot is, de indeling compact is en het historische uitvalpercentage laag is.',
        'Sequentieel wanneer elke afkeuring duur, hoog, riskant is of waarschijnlijk buren beschadigt.',
        'Stem het proces af wanneer een kleine vermindering van het uitvalpercentage grote batchefficiëntie mogelijk maakt.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
