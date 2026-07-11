import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BulkFilamentRoiEstimatorUI } from '../ui';

const slug = 'bulk-filament-rendementscalculator';
const title = 'Bulk Filament ROI Calculator';
const description = 'Vergelijk 1kg filament spoelen met 3kg, 5kg of aangepaste bulk spoelen, inclusief vochtigheidsrisico, echte besparing en lokale valuta notatie.';

const faqData = [
  {
    question: 'Is een 5kg filament spoel altijd goedkoper dan vijf 1kg spoelen kopen?',
    answer: 'Nee. Het is alleen goedkoper als de prijs per gram lager is en u het materiaal kunt verbruiken voordat vocht de afdrukkwaliteit aantast. Langzaam verbruik kan een bulk korting in verspilling veranderen.',
  },
  {
    question: 'Waarom trekt de calculator een risicostraf af?',
    answer: 'De straf schat de waardevermindering wanneer de verwachte verbruikstijd langer is dan uw veilige opslagperiode. Het is geen wisselkoersomrekening of laboratorium vochtmodel; het is een risicoaanpassing voor planning.',
  },
  {
    question: 'Heb ik live wisselkoersen nodig?',
    answer: 'Nee. De tool gebruikt een lokale benaderingstabel om zichtbare prijzen om te rekenen wanneer u van valuta wisselt. Het behoudt gelijkwaardigheid zonder een server te raadplegen, dus definitieve aankoopbeslissingen moeten nog steeds gebaseerd zijn op de prijs die uw winkel of bank toont.',
  },
  {
    question: 'Welke veilige opslagtijd moet ik invoeren voor PLA, PETG, TPU of Nylon?',
    answer: 'Gebruik de periode waarin u dat specifieke materiaal droog kunt houden in uw omgeving. PLA kan mogelijk langer worden opgeslagen dan Nylon of TPU, maar een open ruimte, vochtig klimaat of slechte zakafsluiting kan het veilige venster drastisch verkorten.',
  },
];

const howToData = [
  {
    name: 'Voer de standaard spoelprijs in',
    text: 'Typ de prijs van de 1kg spoel die u normaal zou kopen. Het standaard spoelgewicht kan worden aangepast als uw leverancier een ander formaat gebruikt.',
  },
  {
    name: 'Voer de bulk aanbieding in',
    text: 'Kies 3kg, 5kg of een aangepast gewicht en typ de volledige prijs van die grotere spoel in dezelfde valuta.',
  },
  {
    name: 'Modelleer het opslagrisico',
    text: 'Voeg uw maandelijkse verbruik en de maximale opslagtijd toe die u vertrouwt voordat vocht, brosheid of drooginspanning een echte kostenpost wordt.',
  },
  {
    name: 'Lees de echte besparing',
    text: 'Gebruik het werkelijke besparingsbedrag als aankoopsignaal omdat het zowel de bulk korting als de degradatiestraf bevat.',
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

export const content: ToolLocaleContent<BulkFilamentRoiEstimatorUI> = {
  slug,
  title,
  description,
  ui: {
    currencyLabel: 'Valuta',
    unitSystemLabel: 'Eenheden',
    metricLabel: 'Metrisch',
    imperialLabel: 'Imperiaal',
    standardTitle: 'Standaard spoel',
    bulkTitle: 'Bulk spoel',
    consumptionTitle: 'Verbruik en opslag',
    standardWeightLabel: 'Standaard gewicht',
    standardPriceLabel: 'Standaard spoelprijs',
    bulkWeightLabel: 'Bulk gewicht',
    bulkPresetThreeMetricLabel: '3 kg',
    bulkPresetFiveMetricLabel: '5 kg',
    bulkPresetThreeImperialLabel: '6,6 lb',
    bulkPresetFiveImperialLabel: '11 lb',
    otherWeightLabel: 'Anders',
    bulkPriceLabel: 'Bulk spoelprijs',
    customWeightLabel: 'Aangepast bulk gewicht',
    monthlyUseLabel: 'Maandelijks verbruik',
    safeStorageLabel: 'Veilige opslagperiode',
    kgUnit: 'kg',
    lbUnit: 'lb',
    monthsUnit: 'maanden',
    realSavingsLabel: 'Echte besparing na risico',
    grossSavingsLabel: 'Bruto besparing',
    riskPenaltyLabel: 'Vochtrisicostraf',
    breakEvenLabel: 'Verbruikstijd',
    viabilityLabel: 'Levensvatbaarheid',
    tableMetricLabel: 'Metrisch',
    tableStandardLabel: '1kg spoel',
    tableStandardImperialLabel: '2,2lb spoel',
    tableBulkLabel: 'Bulk spoel',
    costPerGramMetric: 'Kosten per gram',
    costPerOunceMetric: 'Kosten per ounce',
    totalSpoolMetric: 'Spoelprijs',
    usableWindowMetric: 'Verbruiksvenster',
    profitableLabel: 'Winstgevend',
    neutralLabel: 'Neutraal',
    poorLabel: 'Slechte waarde',
    humidityWarningTitle: 'Vochtigheidsdegradatierisico',
    humidityWarning: 'Degradatierisico: het kopen van deze spoel kan geldverlies opleveren als u geen droogsysteem of luchtdichte opslag heeft.',
    safeMessage: 'Het opslagrisico valt binnen uw geselecteerde veilige venster. Houd de spoel verzegeld en droog om de verwachte besparing te behouden.',
  },
  seo: [
    {
      type: 'title',
      text: 'Hoe u beslist of bulk filament echt goedkoper is',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Een 3kg of 5kg filament spoel ziet er aantrekkelijk uit omdat de prijs per kilogram meestal lager is dan een enkele 1kg spoel. De fout is om alleen het afrekentotaal te vergelijken. Een correcte vergelijking normaliseert beide aanbiedingen naar <strong>kosten per gram</strong>, vermenigvuldigt het verschil met de hoeveelheid materiaal die u werkelijk zult kopen, en vraagt zich vervolgens af of het materiaal afdrukbaar blijft totdat u het opgebruikt.',
    },
    {
      type: 'paragraph',
      html: 'De kernformule is eenvoudig: deel elke spoelprijs door het gewicht in grammen. Als een 1kg spoel 24,99 kost en een 5kg spoel 89,99, kost de 1kg spoel 0,02499 per gram en de bulk spoel 0,017998 per gram. De schijnbare besparing is het gramverschil vermenigvuldigd met 5000 gram. Dat getal is nuttig, maar nog steeds onvolledig als de spoel maandenlang open blijft staan.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '1000g', label: 'Referentiemassa voor een gangbare desktop filament spoel' },
        { value: '3-5kg', label: 'Typisch bulk formaat waar kortingen zichtbaar worden' },
        { value: '0 API', label: 'Valuta equivalentie gebruikt lokale benaderingskoersen in plaats van live server aanroep' },
      ],
    },
    {
      type: 'table',
      headers: ['Vraag', 'Wat in te voeren', 'Waarom het belangrijk is'],
      rows: [
        ['Wat koop ik normaal?', 'De 1kg spoelprijs', 'Dit stelt de basiskosten per gram vast.'],
        ['Wat is de bulk aanbieding?', 'Totale prijs en bulk gewicht', 'Dit creëert de gekorte kosten per gram.'],
        ['Hoe snel print ik?', 'Maandelijks verbruikte kg', 'Dit schat hoe lang de spoel opgeslagen blijft.'],
        ['Hoe goed is mijn opslag?', 'Veilige maanden voor degradatie', 'Dit bepaalt wanneer de risicostraf begint.'],
      ],
    },
    {
      type: 'title',
      text: 'Waarom vocht de ROI berekening verandert',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Filament is geen contant equivalent dat veilig op een plank ligt. Veel polymeren absorberen vocht uit de lucht, en nat filament kan printen met bellen, stringing, brosse extrusie, troebele oppervlakken, zwakke laaghechting en inconsistente stroom. De exacte snelheid hangt af van het materiaal, de luchtvochtigheid, de verpakking en of de spoel wordt opgeslagen in een droge doos, verzegelde zak of open houder.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'De verborgen bulk spoel faalmodus',
      badge: 'Planningsrisico',
      html: 'Een 5kg spoel kan een slechte aankoop zijn, zelfs als de prijs per gram uitstekend is. Als uw printer 0,5kg per maand verbruikt en uw veilige opslagvenster 3 maanden is, heeft die spoel ongeveer 10 maanden nodig om op te raken. De korting moet groot genoeg zijn om de extra droog-, verzegel-, mislukte print- of afvalmateriaalrisico te dekken.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Snelle gebruiker',
          description: 'Een kleine printfarm, cosplay bouwer of productiebatch kan 3kg tot 5kg snel verbruiken. Bulk filament is meestal zinvol omdat de opslagtijd kort is.',
          points: ['Hoog maandelijks gebruik', 'Korte schapblootstelling', 'Korting wordt echt bespaard geld'],
        },
        {
          title: 'Intermittente hobbygebruiker',
          description: 'Een gebruiker die in het weekend print of af en toe reparaties uitvoert, kan vele maanden nodig hebben om een grote spoel op te maken. Vochtrisico kan de korting tenietdoen.',
          points: ['Laag maandelijks gebruik', 'Lange open levensduur', 'Droge opslag is belangrijker'],
        },
        {
          title: 'Technische materiaalgebruiker',
          description: 'Materialen zoals Nylon, TPU, PC mengsels en sommige PETG kwaliteiten vereisen vaak strengere droogdiscipline. Bulkaankopen moeten worden gecombineerd met opslagapparatuur.',
          points: ['Hogere vochtgevoeligheid', 'Droge doos aanbevolen', 'Strafdrempel moet conservatief zijn'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Wat de echte besparing betekent',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De tool toont eerst de bruto besparing en trekt vervolgens een degradatiestraf af wanneer de geschatte verbruikstijd het veilige opslagvenster overschrijdt. Deze straf is bewust conservatief in plaats van een laboratoriumvoorspelling. Het vertegenwoordigt de economische realiteit dat nat of verouderd filament vaak niet voor de hand liggende kosten creëert: droogstroom, extra hantering, mislukte prints, verstopte spuitmonden, oppervlaktedefecten en de mogelijkheid dat een deel van de spoel ongeschikt wordt voor zichtbaar of structureel werk.',
    },
    {
      type: 'list',
      items: [
        'Positieve echte besparing betekent dat de bulk korting de opslagrisico-aanpassing overleeft.',
        'Neutraal betekent dat de beslissing afhangt van gemak, kleurbeschikbaarheid, verzending en of u al een droge doos bezit.',
        'Slechte waarde betekent dat de bulk spoel niet goedkoper is per gram of dat de risico-gecorrigeerde besparing negatief is.',
        'Het waarschuwingsbericht verschijnt wanneer de verbruiksmaanden groter zijn dan het door u ingevoerde veilige opslagvenster.',
      ],
    },
    {
      type: 'proscons',
      title: 'Bulk filament aankoop afwegingen',
      items: [
        { pro: 'Lagere kosten per gram voor hoog-volume printen.', con: 'Meer kapitaal vastgezet in één materiaal, kleur en leveranciersbatch.' },
        { pro: 'Minder spoelwisselingen tijdens lange productieruns.', con: 'Een grotere blootgestelde massa kan degraderen voordat deze is verbruikt.' },
        { pro: 'Minder verpakkingsafval per kilogram.', con: 'Grote spoelen kunnen sterkere houders of externe spoelstandaards nodig hebben.' },
        { pro: 'Nuttig voor herhaalde farm taken en batchproductie.', con: 'Slechte keuze voor zeldzame kleuren, experimentele materialen of langzaam hobbygebruik.' },
      ],
    },
    {
      type: 'title',
      text: 'Hoe u een veilig opslagvenster kiest',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Het veilige opslagvenster is geen universele materiaalconstante. Het is de hoeveelheid tijd die u persoonlijk vertrouwt dat het filament afdrukbaar blijft onder uw opslagomstandigheden. Een verzegelde zak met verse droogmiddel in een droge kamer is heel anders dan een open spoel naast een printer in een vochtige garage. Voor een conservatieve aankoopbeslissing voert u het aantal maanden in waarna u de spoel zou gaan drogen voor belangrijke prints.',
    },
    {
      type: 'table',
      headers: ['Situatie', 'Voorgesteld planningsgedrag', 'Reden'],
      rows: [
        ['Open spoelhouder in vochtige kamer', 'Gebruik een kort veilig venster', 'Vochtblootstelling is continu.'],
        ['Luchtdichte doos met droogmiddel', 'Gebruik een langer veilig venster', 'De spoel is beschermd tussen prints.'],
        ['Droge doos die de printer voedt', 'Gebruik een langer maar realistisch venster', 'Printen en opslag zijn beide gecontroleerd.'],
        ['Nylon, TPU, PC of oplosbare ondersteuning', 'Wees conservatief', 'Deze materialen kunnen snel printproblemen veroorzaken wanneer ze nat zijn.'],
        ['PLA gebruikt voor ruwe prototypes', 'Risicotolerantie kan hoger zijn', 'Kleine cosmetische problemen kunnen acceptabel zijn voor niet-kritische onderdelen.'],
      ],
    },
    {
      type: 'tip',
      title: 'Gebruik de calculator voor de aanbieding afloopt',
      html: 'Flitsaanbiedingen doen bulk spoelen vaak urgent aanvoelen. Voer de aanbiedingsprijs, indien mogelijk inclusief verzendkosten, en uw realistische maandelijkse gebruik in. Als de verbruikstijd langer is dan uw opslagvenster, moet de aanbieding sterk genoeg zijn om het extra risico te dekken.',
    },
    {
      type: 'title',
      text: 'Valuta omrekening zonder wisselkoers API',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Deze calculator is ontworpen om client-side te werken. Het haalt geen live wisselkoersen op, maar de valutaselecteur past nog steeds een lokale omrekeningsmultiplicator toe wanneer de gebruiker van valuta wisselt. Dat betekent dat een spoel ingevoerd als 24,99 EUR een benaderd equivalent wordt in USD, GBP, JPY of een andere ondersteunde valuta in plaats van alleen het symbool te vervangen. De koersen zijn planningsschattingen, dus afrekenprijzen, kaartkosten, belastingen en marktspecifieke conversiespreads moeten nog steeds worden gecontroleerd voor aankoop.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Kosten per gram', definition: 'De spoelprijs gedeeld door het totale filament in grammen. Dit is de genormaliseerde eenheid voor een eerlijke vergelijking.' },
        { term: 'Bruto besparing', definition: 'Het prijsvoordeel voordat vocht- of opslagrisico wordt overwogen.' },
        { term: 'Risicostraf', definition: 'Een planningsaftrek die wordt toegepast wanneer de spoel langer nodig heeft om te verbruiken dan het veilige opslagvenster.' },
        { term: 'Echte besparing', definition: 'Bruto besparing minus de risicostraf. Dit is het belangrijkste aankoopsignaal.' },
        { term: 'Verbruiksvenster', definition: 'Bulk spoelgewicht gedeeld door geschat maandelijks gebruik.' },
      ],
    },
    {
      type: 'summary',
      title: 'Praktische aankoopregel',
      items: [
        'Koop bulk wanneer de echte besparing duidelijk positief is en het verbruiksvenster past bij uw opslagopstelling.',
        'Vermijd bulk wanneer u een zeldzame kleur koopt die na een project ongebruikt blijft.',
        'Behandel droogapparatuur als onderdeel van het bulk filamentsysteem, niet als een optionele luxe voor vochtgevoelige polymeren.',
        'Vergelijk geleverde prijzen, niet alleen productpagina prijzen, wanneer de verzending verschilt tussen spoelgroottes.',
      ],
    },
    {
      type: 'message',
      title: 'Bottom line',
      html: 'Een bulk spoel is winstgevend wanneer drie voorwaarden samenkomen: lagere kosten per gram, voldoende maandelijks verbruik en opslag die het filament afdrukbaar houdt. Als een voorwaarde ontbreekt, kan de schijnbare korting een verkapt materiaalverlies worden.',
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
