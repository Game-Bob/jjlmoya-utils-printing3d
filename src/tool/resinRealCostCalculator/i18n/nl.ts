import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ResinRealCostCalculatorUI } from '../ui';

const slug = 'echte-harskosten-calculator-sla-dlp';
const title = 'Echte harskostencalculator voor SLA en DLP afdrukken';
const description = 'Bereken de theoretische en werkelijke harskosten met dichtheidsomzetting, slidervolume en een afvalcorrectie van 10 tot 15 procent voor complexe SLA- en DLP-onderdelen.';

const faqData = [
  {
    question: 'Waarom zijn de werkelijke harskosten hoger dan de slidenkosten?',
    answer: 'De slider rapporteert meestal alleen de netto uitgeharde hars in het model en de ondersteuningen. Het houdt niet altijd rekening met hars die achterblijft op de bouwplaat, vastzit in holle wanden, verlies door wassen, mislukte ondersteuningen of residu dat niet schoon kan worden teruggegoten.',
  },
  {
    question: 'Moet ik grammen of milliliters invoeren?',
    answer: 'Gebruik wat uw slider exporteert. Als het grammen rapporteert, voer dan de harsdichtheid van de fles of het technische gegevensblad in, zodat de calculator massa kan omzetten naar volume voordat de prijs van de afdruk wordt berekend.',
  },
  {
    question: 'Welke complexiteitsfactor moet ik gebruiken?',
    answer: 'Gebruik laag voor massieve onderdelen met eenvoudige ondersteuningen, gemiddeld voor typische miniaturen en functionele harsonderdelen, en hoog voor holle onderdelen, dichte ondersteuningen, holtes en stukken die na het printen vloeibare hars vasthouden.',
  },
  {
    question: 'Valt alcohol, handschoenen, filters of machinetijd hieronder?',
    answer: 'Nee. Dit hulpmiddel isoleert de harsmateriaalkosten. Verbruiksartikelen, arbeid, energie voor nabehandeling, mislukkingen en machineafschrijving moeten worden toegevoegd in een bredere werkofferte.',
  },
];

const howToData = [
  {
    name: 'Voer flesgegevens in',
    text: 'Voeg de netto flesprijs, het nominale volume in milliliters en de dichtheid van het harsgegevensblad of etiket toe.',
  },
  {
    name: 'Plak slidergebruik',
    text: 'Voer het harsverbruik van het model in dat is geëxporteerd door Lychee, Chitubox, PrusaSlicer of een andere slider en kies grammen of milliliters.',
  },
  {
    name: 'Kies complexiteit',
    text: 'Selecteer lage, gemiddelde of hoge complexiteit om een afvalcorrectie van 10, 12,5 of 15 procent toe te passen op het slidervolume.',
  },
  {
    name: 'Vergelijk theoretische en werkelijke kosten',
    text: 'Gebruik de theoretische kosten voor slidervergelijking en de werkelijke gecorrigeerde kosten voor offertes, batchverwerking en planning van de harsvoorraad.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<ResinRealCostCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    bottlePanel: 'Harsfles',
    modelPanel: 'Slidermodel',
    resultPanel: 'Werkelijke harskosten',
    unitSystemLabel: 'Eenheden',
    metricLabel: 'Metrisch',
    imperialLabel: 'VS',
    currencyLabel: 'Valuta',
    currencyOptions: [
      { code: 'EUR', label: '€', symbol: '€' },
      { code: 'USD', label: '$', symbol: '$' },
      { code: 'GBP', label: '£', symbol: '£' },
      { code: 'CAD', label: 'C$', symbol: 'C$' },
      { code: 'AUD', label: 'A$', symbol: 'A$' },
      { code: 'CHF', label: 'Fr', symbol: 'Fr' },
      { code: 'CNY', label: '¥', symbol: '¥' },
      { code: 'INR', label: '₹', symbol: '₹' },
      { code: 'BRL', label: 'R$', symbol: 'R$' },
      { code: 'MXN', label: '$', symbol: '$' },
      { code: 'RUB', label: '₽', symbol: '₽' },
      { code: 'PLN', label: 'zł', symbol: 'zł' },
      { code: 'SEK', label: 'kr', symbol: 'kr' },
      { code: 'NOK', label: 'kr', symbol: 'kr' },
      { code: 'DKK', label: 'kr', symbol: 'kr' },
      { code: 'TRY', label: '₺', symbol: '₺' },
      { code: 'JPY', label: '¥', symbol: '¥' },
    ],
    bottlePriceLabel: 'Flesprijs',
    bottleVolumeLabel: 'Flesvolume',
    resinPresetLabel: 'Harsvoorinstelling',
    resinPresetOptions: [
      { label: 'Aangepast / handmatige dichtheid', density: '' },
      { label: 'Generieke standaardhars - 1,10 g/cm3', density: '1.10' },
      { label: 'Generieke waterwasbare hars - 1,08 g/cm3', density: '1.08' },
      { label: 'Generieke ABS-achtige hars - 1,10 g/cm3', density: '1.10' },
      { label: 'Generieke taaie hars - 1,12 g/cm3', density: '1.12' },
      { label: 'Generieke flexibele hars - 1,05 g/cm3', density: '1.05' },
      { label: 'Generieke hoge-temperatuurhars - 1,15 g/cm3', density: '1.15' },
      { label: 'Generieke gietbare hars - 1,12 g/cm3', density: '1.12' },
      { label: 'Generieke keramiekgevulde hars - 1,35 g/cm3', density: '1.35' },
      { label: 'Anycubic Standard - 1,10 g/cm3', density: '1.10' },
      { label: 'Anycubic ABS-Like - 1,10 g/cm3', density: '1.10' },
      { label: 'Elegoo Standard - 1,10 g/cm3', density: '1.10' },
      { label: 'Elegoo ABS-Like - 1,05 g/cm3', density: '1.05' },
      { label: 'Siraya Tech Fast - 1,09 g/cm3', density: '1.09' },
      { label: 'Siraya Tech Blu - 1,12 g/cm3', density: '1.12' },
      { label: 'Phrozen Aqua Gray 4K - 1,10 g/cm3', density: '1.10' },
      { label: 'Formlabs Standard - 1,10 g/cm3', density: '1.10' },
      { label: 'Formlabs Tough 2000 - 1,18 g/cm3', density: '1.18' },
    ],
    densityLabel: 'Harsdichtheid (g/cm3)',
    modelAmountLabel: 'Sliderhoeveelheid',
    unitLabel: 'Hoeveelheidseenheid',
    mlUnit: 'ml',
    fluidOunceUnit: 'fl oz',
    gramsUnit: 'g',
    ounceUnit: 'oz',
    complexityLabel: 'Onderdeelcomplexiteit',
    lowComplexity: 'Laag',
    mediumComplexity: 'Gemiddeld',
    highComplexity: 'Hoog',
    lowHint: 'Massieve onderdelen, lichte ondersteuningen, +10%',
    mediumHint: 'Typische harsklus, +12,5%',
    highHint: 'Holle onderdelen of dichte ondersteuningen, +15%',
    theoreticalCostLabel: 'Sliderkosten',
    realCostLabel: 'Werkelijke kosten',
    wasteCostLabel: 'Afvalcorrectie',
    correctedVolumeLabel: 'Gecorrigeerd volume',
    costPerMlLabel: 'Kosten per ml',
    bottlePrintsLabel: 'Afdrukken per fles',
    savedSettingsLabel: 'Afvalfactor',
    hollowPartTip: 'Holle onderdelen met afvoergaten kunnen meer dan 15 procent afval veroorzaken omdat er hars achterblijft op binnenwanden, in holtes, op ondersteuningen en in het wasproces.',
    conversionLabel: 'Netto slidervolume',
    netFromSlicerLabel: 'netto van slider',
    persistenceNote: 'Flesprijs, flesvolume en dichtheid worden lokaal opgeslagen in deze browser.',
  },
  seo: [
    {
      type: 'title',
      text: 'Waarom SLA en DLP harskosten een afvalcorrectie nodig hebben',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De hoeveelheid hars die een slider weergeeft, is een nuttig startpunt, maar is niet hetzelfde als de hoeveelheid hars die tijdens een echte afdruk uit de fles verdwijnt. SLA-, MSLA-, LCD- en DLP-printen gebruiken allemaal een bak gevuld met vloeibaar fotopolymeer. Het onderdeel hardt laag voor laag uit, maar niet-uitgeharde hars bedekt nog steeds het model, de ondersteuningen, de bouwplaat, de bakfolie en elke interne holte die open is naar het harsbad. Een calculator die het slidervolume vermenigvuldigt met de flesprijs per milliliter geeft een schoon theoretisch getal. Een werkplaatsofferte heeft echter het gecorrigeerde getal nodig.',
    },
    {
      type: 'paragraph',
      html: 'Deze calculator scheidt de <strong>sliderkosten</strong> van de <strong>werkelijke harskosten</strong>. De sliderkosten zijn de netto hars die door de software wordt gerapporteerd. De werkelijke kosten passen een gecontroleerde afvalfactor van 10 tot 15 procent toe. Dat bereik is bewust smal gehouden: het is hoog genoeg om veelvoorkomende harsverwerkingsverliezen te dekken, maar niet zo hoog dat het mislukkingen, arbeid, alcohol, handschoenen, filters of nabehandeling onder de materiaalpost verbergt. Het resultaat is een praktische variabele materiaalkost voor één afdruk of batch.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '10%', label: 'Lage correctie voor massieve onderdelen en lichte ondersteuningen' },
        { value: '12,5%', label: 'Standaardcorrectie voor normale harsklussen' },
        { value: '15%', label: 'Hoge correctie voor holtes en dichte ondersteuningen' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Meng materiaalkosten niet met opdrachtkosten',
      html: 'Het hier geretourneerde getal is alleen harsmateriaal. Een volledige verkoopprijs moet ook mislukte afdrukken, reinigingsalcohol, nitrilhandschoenen, papieren handdoeken, filters, nabehandelingstijd, verpakking, machineslijtage, ontwerptijd en marge omvatten.',
    },
    {
      type: 'title',
      text: 'De formule achter de calculator',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De eerste stap is de flesprijs per milliliter: <code>kosten_per_ml = flesprijs / flesvolume_ml</code>. Een fles van 1000 ml gekocht voor 42 EUR heeft een basiskost van 0,042 EUR per ml. Als de slider zegt dat een miniatuur 38 ml verbruikt, zijn de theoretische harskosten 38 x 0,042, oftewel 1,60 EUR. Dat getal is nuttig voor het vergelijken van oriëntatie, uitholling, ondersteuningsstrategieën en batches in de slider, maar gaat ervan uit dat elke milliliter die de slider rapporteert de enige verbruikte hars is.',
    },
    {
      type: 'paragraph',
      html: 'De tweede stap past het gecorrigeerde volume toe: <code>werkelijk_volume = slidervolume x (1 + afvalfactor)</code>. Met de standaardfactor van 12,5 procent wordt een model van 38 ml 42,75 ml. De werkelijke materiaalkosten worden 42,75 x 0,042 EUR, oftewel 1,80 EUR. Het verschil is klein bij één klein model, maar wordt zichtbaar bij het offreren van een tray met miniaturen, tandheelkundige modellen, juwelenmodellen, technische prototypes of productiearmaturen.',
    },
    {
      type: 'table',
      headers: ['Slidervolume', 'Fleskosten', 'Factor', 'Theoretische kosten', 'Werkelijke kosten'],
      rows: [
        ['25 ml', '42 EUR / 1000 ml', '10%', '1,05 EUR', '1,16 EUR'],
        ['80 ml', '42 EUR / 1000 ml', '12,5%', '3,36 EUR', '3,78 EUR'],
        ['150 ml', '42 EUR / 1000 ml', '15%', '6,30 EUR', '7,25 EUR'],
        ['420 ml', '42 EUR / 1000 ml', '15%', '17,64 EUR', '20,29 EUR'],
      ],
    },
    {
      type: 'tip',
      title: 'Gebruik batchvolume, niet onderdeelvolume, voor productieseries',
      html: 'Als u de bouwplaat vult met meerdere kopieën, bereken dan vanuit het slidervolume voor de hele plaat. Steunttorens, gedeelde ondersteuningsstructuren en oriëntatiewijzigingen kunnen de batch efficiënter maken dan het vermenigvuldigen van een geïsoleerd onderdeel met het aantal kopieën.',
    },
    {
      type: 'title',
      text: 'De juiste complexiteitsfactor kiezen',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Lage complexiteit',
          description: 'Gebruik 10 procent voor massieve onderdelen, eenvoudige beugels, kalibratiestukken, schaakstukken en modellen met weinig ondersteuningen.',
          points: ['Weinig interne retentie', 'Lage ondersteuningsdichtheid', 'Makkelijk terugdruppelen in de bak'],
        },
        {
          title: 'Gemiddelde complexiteit',
          description: 'Gebruik 12,5 procent voor normale miniaturen, tandheelkundige modellen, tabletop-onderdelen en functionele stukken met gematigde ondersteuningen.',
          points: ['Typisch nabewerkingsverlies', 'Enige hars op ondersteuningen', 'Goede standaard offertefactor'],
          highlight: true,
        },
        {
          title: 'Hoge complexiteit',
          description: 'Gebruik 15 procent voor holle schalen, holtes, dichte ondersteuningsbossen, roosterstructuren en onderdelen die na het uitlekken zware resten achterlaten.',
          points: ['Meer ingesloten vloeistof', 'Meer wasverlies', 'Hogere verwerkingsonzekerheid'],
        },
      ],
    },
    {
      type: 'paragraph',
      html: 'De complexiteitsfactor is geen straf voor slecht slidderen. Het is een correctie voor hoe vloeibare hars zich gedraagt. Een eenvoudig massief blok dat correct is gekanteld, kan na een paar minuten bijna volledig uitlekken. Een hol standbeeld met kleine afvoergaten kan een film van hars binnen de wand, rond de ondersteuningen en nabij zuignappen vasthouden. Dichte ondersteuningsbasissen houden ook hars vast tussen de pilaren. Zelfs als u het onderdeel boven de bak laat uitlekken, maakt de hars die de wascontainer, handschoenen, papieren handdoek en filter bereikt, deel uit van het werkelijke materiaal dat door de klus wordt verbruikt.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Wanneer 15 procent niet genoeg is',
      html: 'Als een hol model slechte afvoer, blinde holtes, dikke interne ondersteuningen of een gestructureerd interieur heeft, kan het afval de 15 procent overschrijden. Beschouw deze calculator in dat geval als de harsbasislijn en voeg een aparte risicotoeslag toe aan de offerte.',
    },
    {
      type: 'summary',
      title: 'Snelle factorselectie',
      items: [
        'Kies 10 procent wanneer het model massief, compact en gemakkelijk te laten uitlekken is.',
        'Kies 12,5 procent wanneer u onzeker bent of een gemengde tray print.',
        'Kies 15 procent wanneer het onderdeel hol, zwaar ondersteund of geometrisch rommelig is.',
        'Voeg een aparte faaltoeslag toe bij het printen van een nieuwe hars, nieuwe oriëntatie of een breekbaar klantonderdeel.',
      ],
    },
    {
      type: 'title',
      text: 'Dichtheid gebruiken wanneer de slider in grammen rapporteert',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Veel sliders kunnen het harsverbruik rapporteren in milliliters, grammen of beide. Harsflessen worden meestal verkocht op nominaal volume, meestal 500 ml, 1000 ml of 1 liter. Als de slider exporteert in grammen, converteert de calculator massa naar volume met behulp van dichtheid: <code>volume_ml = grammen / dichtheid</code>. De dichtheid van hars wordt normaal geschreven in g/cm3, en 1 cm3 is hetzelfde volume als 1 ml. Een hars met dichtheid 1,10 g/cm3 betekent dat 110 g ongeveer overeenkomt met 100 ml.',
    },
    {
      type: 'table',
      headers: ['Slidermassa', 'Dichtheid', 'Omgezet volume', 'Waarom het belangrijk is'],
      rows: [
        ['55 g', '1,10 g/cm3', '50,0 ml', 'Veelgebruikte schatting voor standaardhars'],
        ['55 g', '1,05 g/cm3', '52,4 ml', 'Lagere dichtheid betekent meer volume'],
        ['55 g', '1,20 g/cm3', '45,8 ml', 'Gevulde of keramische harsen kunnen dichter zijn'],
      ],
    },
    {
      type: 'tip',
      title: 'Vind de dichtheid op het technische gegevensblad',
      html: 'Gebruik de voorinstellingscatalogus voor gangbare harsen en behandel de dichtheidsinvoer als de uiteindelijke bron van waarheid. Als uw exacte hars, kleur of batch afwijkt van de voorinstelling, overschrijf dan het veld met de waarde van het technische gegevensblad van de fabrikant. Ga er niet van uit dat alle harsen 1,00 g/ml zijn.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Dichtheid', definition: 'Massa per volume-eenheid. Bij harskostenberekening kunt u hiermee grammen van de slider omzetten naar milliliters van de fles.' },
        { term: 'Theoretische kosten', definition: 'Het schone slidervolume vermenigvuldigd met de fleskosten per milliliter, vóór afvalcorrectie.' },
        { term: 'Gecorrigeerd volume', definition: 'Het modelvolume na toevoeging van de geselecteerde afvalfactor van 10, 12,5 of 15 procent.' },
        { term: 'Afvoergat', definition: 'Een opening in een hol harsonderdeel die niet-uitgeharde hars laat ontsnappen uit het interieur vóór wassen en uitharden.' },
      ],
    },
    {
      type: 'title',
      text: 'Waarom holle harsafdrukken vaak duurder zijn dan verwacht',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Het uithollen van een groot model kan het volume uitgeharde hars drastisch verminderen, maar het maakt de afdruk niet vrij van verborgen kosten. Holle wanden hebben afvoergaten nodig, de interne geometrie moet wasbaar zijn en niet-uitgeharde hars die in het model is opgesloten, kan later lekken, het onderdeel doen barsten of de uiteindelijke uitharding verstoren. De slider kan een veel lager nettovolume tonen na uitholling, maar het verwerkingsproces wordt gevoeliger. Daarom gebruikt hoge complexiteit standaard 15 procent.',
    },
    {
      type: 'proscons',
      title: 'Uitholling en kostenbeheersing',
      items: [
        { pro: 'Grote displaymodellen kunnen veel minder uitgeharde hars gebruiken.', con: 'Slechte afvoer kan vloeibare hars in het onderdeel houden.' },
        { pro: 'Lagere loskrachten kunnen het succes op grote doorsneden verbeteren.', con: 'Extra gaten, pluggen en reinigingstijd kunnen de arbeid verhogen.' },
        { pro: 'Een lichter model is gemakkelijker te verzenden en te monteren.', con: 'Dunne wanden kunnen falen als wanddikte en belichting niet zijn afgestemd.' },
      ],
    },
    {
      type: 'card',
      title: 'Praktische holle printregel',
      html: 'Als een hol onderdeel uit de printer komt en nog druppelt na normaal uitlekken, gebruik dan de hoge factor en inspecteer de afvoergatindeling. Als het na het wassen blijft lekken, is het probleem niet alleen de kosten; het kan een kwaliteits- en veiligheidsprobleem worden omdat niet-uitgeharde hars in het object achterblijft.',
    },
    {
      type: 'title',
      text: 'Sliderschattingen lezen zonder te laag in te schatten',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Lychee, Chitubox, PrusaSlicer en andere harssliders schatten het harsverbruik op basis van de mesh, ondersteuningen, uitholling en soms het harsprofiel. Deze schattingen zijn goed genoeg om versies van dezelfde klus te vergelijken. Ze zijn zwakker als uiteindelijke offerte omdat ze uw workflow niet kennen. Een werkplaats die na elke klus hars filtert, verliest een andere hoeveelheid dan een hobbyist die dezelfde hars in de bak houdt. Een gebruiker die in twee IPA-fasen wast, verliest een andere hoeveelheid dan een gebruiker die een afgesloten wasstation gebruikt en onderdelen volledig laat uitlekken voordat ze worden verplaatst.',
    },
    {
      type: 'list',
      items: [
        'Voer de schatting voor de volle plaat in na ondersteuningen, niet het oorspronkelijke onondersteunde meshvolume.',
        'Gebruik dezelfde valuta voor flesprijs en uiteindelijke offerte; de calculator kan de zichtbare flesprijs omrekenen tussen gangbare valutas met geschatte wisselkoersfactoren.',
        'Werk de flesprijs bij bij aankoop van speciale hars, omdat gietbare, flexibele, tandheelkundige en hogetemperatuurharsen verschillende keren duurder kunnen zijn dan standaardhars.',
        'Gebruik dichtheidsconversie wanneer de slidermassa en het flesvolume niet dezelfde eenheid delen.',
        'Houd het faalpercentage apart, vooral bij het printen van breekbare miniaturen, dunne tandheelkundige schalen of nieuwe ondersteuningsstrategieën.',
      ],
    },
    {
      type: 'message',
      title: 'Betere offertegewoonte',
      html: 'Sla uw gebruikelijke harsflesgegevens op, plak de sliderschatting, kies de complexiteit en noteer beide getallen. De theoretische kosten verklaren de sliderschatting; de werkelijke kosten beschermen uw materiaalvoorraad.',
    },
    {
      type: 'title',
      text: 'Wat deze calculator niet bevat',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Een harsafdruk heeft meer kosten dan alleen hars. Dit hulpmiddel richt zich bewust op variabel harsverbruik omdat dat het getal is dat het vaakst wordt onderschat bij het vergelijken van slideruitvoer met werkelijk flesgebruik. Het omvat niet: alcoholvervanging, wasmiddel, waterbehandeling, papieren handdoeken, wegwerphandschoenen, slijtage van FEP-of releasefolie, LCD-schermveroudering, printerafschrijving, elektriciteit, nabehandelingstijd, schuren, gronden, ondersteuningsverwijdering, verpakking of marktplaatskosten.',
    },
    {
      type: 'table',
      headers: ['Kostenpost', 'Hier inbegrepen?', 'Waar te boeken'],
      rows: [
        ['Vloeibare hars gebruikt door afdruk', 'Ja', 'Deze calculator'],
        ['Harsresidu en normaal verwerkingsafval', 'Ja', 'Complexiteitsfactor'],
        ['Mislukte afdrukken', 'Nee', 'Voeg faaltoeslag toe op basis van materiaal en modelrisico'],
        ['IPA, handschoenen, handdoeken, filters', 'Nee', 'Verbruikspost'],
        ['Ondersteuningsverwijdering en schuren', 'Nee', 'Arbeids- of afwerkingspost'],
        ['Printerafschrijving', 'Nee', 'Uurtarief machine'],
      ],
    },
    {
      type: 'summary',
      title: 'Betrouwbare harskostenworkflow',
      items: [
        'Bereken de prijs per milliliter van de fles die u daadwerkelijk hebt gekocht.',
        'Converteer grammen naar milliliters met de harsdichtheid wanneer nodig.',
        'Gebruik de slideruitvoer na ondersteuningen en uitholling.',
        'Pas een correctie van 10 tot 15 procent toe op basis van geometrie en verwerkingsverlies.',
        'Houd mislukkingen, arbeid, verbruiksartikelen en marge buiten het harsmateriaalgetal.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
