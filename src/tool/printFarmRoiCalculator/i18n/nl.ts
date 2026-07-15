import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PrintFarmRoiCalculatorUI } from '../ui';

const slug = 'roi-calculator-3d-printfarm';
const title = '3D Print Farm ROI Calculator';
const description =
  'Simuleer de maandelijkse winstgevendheid, terugverdientijd en geannualiseerde ROI voor een 3D-print farm met behulp van bezetting, uitvalpercentage, elektriciteit, vaste kosten en variabele stundentarieven.';

const currencyOptions = [
  { code: 'EUR', label: 'EUR', symbol: '€' },
  { code: 'USD', label: 'USD', symbol: '$' },
  { code: 'GBP', label: 'GBP', symbol: '£' },
  { code: 'CAD', label: 'CAD', symbol: 'C$' },
  { code: 'AUD', label: 'AUD', symbol: 'A$' },
  { code: 'CHF', label: 'CHF', symbol: 'Fr' },
  { code: 'CNY', label: 'CNY', symbol: '¥' },
  { code: 'INR', label: 'INR', symbol: '₹' },
  { code: 'BRL', label: 'BRL', symbol: 'R$' },
  { code: 'MXN', label: 'MXN', symbol: 'MX$' },
  { code: 'RUB', label: 'RUB', symbol: '₽' },
  { code: 'PLN', label: 'PLN', symbol: 'zł' },
  { code: 'SEK', label: 'SEK', symbol: 'kr' },
  { code: 'NOK', label: 'NOK', symbol: 'kr' },
  { code: 'DKK', label: 'DKK', symbol: 'kr' },
  { code: 'TRY', label: 'TRY', symbol: '₺' },
  { code: 'JPY', label: 'JPY', symbol: '¥' },
];

const faqData = [
  {
    question: 'Hoe bereken je de ROI voor een 3D-print farm?',
    answer:
      'Schat de productieve maandelijkse uren, vermenigvuldig deze met de verkoopprijs per machine-uur, trek de vaste kosten, elektriciteitskosten en variabele uurkosten eraf en vergelijk de jaarlijkse winst met de initiële investering.',
  },
  {
    question: 'Waarom beïnvloedt het succespercentage de terugverdientijd van een print farm?',
    answer:
      'Mislukte prints verbruiken machinecapaciteit, materiaal, nozzles, energie en aandacht van de operator zonder declareerbare uren op te leveren. Een lager succespercentage vermindert de reële productieve uren en vertraagt de terugverdientijd.',
  },
  {
    question: 'Wat moet er worden opgenomen in de variabele kosten per uur?',
    answer:
      'Neem het verbruik van filament of hars op, slijtage van nozzles, slijtage van het bouwplatform, routine-onderdelen voor onderhoud, verbruiksartikelen en eventuele uurtarieven die variëren met de daadwerkelijke succesvolle productietijd.',
  },
  {
    question: 'Is de terugverdientijd hetzelfde als ROI?',
    answer:
      'Nee. De terugverdientijd schat hoeveel maanden er nodig zijn om de initiële investering terug te verdienen uit de maandelijkse nettowinst. ROI vergelijkt de geannualiseerde winst als percentage met de oorspronkelijke investering.',
  },
];

const howToData = [
  { name: 'Voer farmgrootte in', text: 'Voeg het aantal actieve printers toe en de initiële investering voor machines, installatie, werkstations en inbedrijfstelling.' },
  { name: 'Voeg maandelijkse bedrijfskosten toe', text: 'Voer de vaste overheadkosten en elektriciteit in als maandelijkse kosten en voeg vervolgens de variabele kosten per productief machine-uur toe.' },
  { name: 'Stel bezetting en succespercentage in', text: 'Gebruik realistische bezettings- en succespercentages, zodat het model rekening houdt met inactiviteit en mislukte prints.' },
  { name: 'Lees de winstgevendheid af', text: 'Vergelijk de maandelijkse omzet met de kosten en gebruik vervolgens de terugverdientijd in maanden en de geannualiseerde ROI om de haalbaarheid van de investering te beoordelen.' },
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
  step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  featureList: [
    '3D-print farm ROI-calculator',
    '3D-print investerings-terugverdientijd-simulator',
    'Print farm winstgevendheidscalculator',
    'Aanpassing bezettingsgraad en mislukte prints',
    'Multi-valuta bedrijfskostenmodel',
  ],
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<PrintFarmRoiCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Print farm ROI invoergegevens',
    resultsAriaLabel: 'Print farm ROI resultaten',
    currencyLabel: 'Valuta',
    currencyOptions,
    printerCountLabel: 'Aantal printers',
    initialInvestmentLabel: 'Initiële investering',
    fixedMonthlyCostLabel: 'Vaste maandelijkse kosten',
    electricityMonthlyCostLabel: 'Maandelijkse elektriciteitskosten',
    hourlyRateLabel: 'Verkooptarief per uur',
    occupancyLabel: 'Gemiddelde bezettingsgraad',
    successRateLabel: 'Succespercentage',
    variableCostLabel: 'Variabele kosten per uur',
    averageHoursPerPartLabel: 'Gemiddeld aantal uren per onderdeel',
    paybackLabel: 'Terugverdientijd',
    netProfitLabel: 'Maandelijke nettowinst',
    annualRoiLabel: 'Geannualiseerde ROI',
    productiveHoursLabel: 'Reële productieve uren',
    revenueLabel: 'Omzet',
    costsLabel: 'Kosten',
    fixedCostShortLabel: 'Vast',
    electricityShortLabel: 'Elektriciteit',
    variableCostShortLabel: 'Variabel',
    marginLabel: 'Nettomarge',
    breakEvenPartsLabel: 'Break-even onderdelen',
    breakEvenHoursLabel: 'Break-even uren',
    stressScenarioLabel: 'Slechtste scenario',
    exportSummaryLabel: 'Samenvatting downloaden',
    chartLabel: 'Maandelijkse omzet versus bedrijfskosten',
    monthsUnit: 'maanden',
    hoursUnit: 'u',
    percentUnit: '%',
    notViableLabel: 'Niet haalbaar',
    positiveInsight: 'De maandelijkse winst is positief na correctie voor bezettingsgraad, succespercentage en bedrijfskosten.',
    negativeInsight: 'De bedrijfskosten overstijgen de gecorrigeerde omzet; verbeter de bezettingsgraad, de prijsstelling of het uitvalpercentage voordat u opschaalt.',
    currencySymbol: '€',
    defaultCurrencyCode: 'EUR',
    pendingLabel: '-',
    partsUnit: 'onderdelen/maand',
    reportFilename: 'print-farm-roi-samenvatting.csv',
    reportTitle: '3D Print Farm ROI Haalbaarheidsrapport',
    reportCurrencyLabel: 'Valuta',
  },
  seo: [
    { type: 'title', text: 'Hoe deze 3D Print Farm ROI Calculator werkt', level: 2 },
    {
      type: 'paragraph',
      html: 'Een <strong>3D-print farm ROI-calculator</strong> moet antwoord geven op een specifieke investeringsvraag: zal een groep printers zijn installatiekosten snel genoeg terugverdienen om het kapitaal, de ruimte, het onderhoud en het operationele risico te rechtvaligen? Deze simulator modelleert die vraag op basis van de maandelijkse machinecapaciteit. Elke printer draagt 720 bruto-uren bij in een standaardmaand van 30 dagen, waarna het model die uren corrigeert voor bezettingsgraad en succespercentage. Het resultaat is niet de theoretische capaciteit, maar de declareerbare productietijd die overblijft na inactiviteit, wachtrijen, mislukte prints, herdrukken, kalibratie en praktische stilstand.',
    },
    {
      type: 'paragraph',
      html: 'De berekeningsketen is bewust transparant. De bruto maandelijkse uren zijn gelijk aan <code>printers x 720</code>. De reële productieve uren zijn gelijk aan de bruto-uren vermenigvuldigd met de gemiddelde bezettingsgraad en het succespercentage. De maandelijkse omzet is gelijk aan de productieve uren vermenigvuldigd met het uurtarief voor de klant. De bedrijfskosten combineren vaste maandelijkse overheadkosten, elektriciteit en variabele uurkosten. De maandelijkse nettowinst is de omzet minus die bedrijfskosten. De terugverdientijd deelt de initiële investering door de maandelijkse nettowinst, terwijl de geannualiseerde ROI twaalf maanden nettowinst vergelijkt met de initiële investering.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '720 u', label: 'Maandelijkse brutocapaciteit per printer', icon: 'mdi:clock-outline' },
        { value: 'U x S', label: 'Correctie voor bezetting en succes', icon: 'mdi:percent-outline' },
        { value: 'Omzet - kosten', label: 'Maandelijkse nettowinst', icon: 'mdi:finance' },
        { value: 'Investering / winst', label: 'Terugverdientijd', icon: 'mdi:calendar-clock' },
      ],
    },
    {
      type: 'tip',
      title: 'Gebruik conservatieve invoerwaarden voor investeringsbeslissingen',
      html: '<p>Voer voor een eerste analyse de bezettingsgraad in die u met de huidige vraag kunt waarmaken, niet de bezettingsgraad die u hoopt te bereiken nadat de marketing is verbeterd. Een farm die alleen rendabel is bij een optimistische bezettingsgraad is nog geen solide investering.</p>',
    },
    { type: 'title', text: 'Waarom de bezettingsgraad de winstgevendheid van de print farm beïnvloedt', level: 2 },
    {
      type: 'paragraph',
      html: 'De bezettingsgraad is het percentage van de beschikbare machinetijd dat daadwerkelijk wordt gebruikt voor het printen van betaald of verkoopbaar werk. Het is de sterkste hefboom in veel kleine farm-modellen omdat de initiële investering vaststaat. Een printer die voor productie is gekocht, kost hetzelfde of hij nu acht uur per dag of twintig uur per dag is geboekt. Een hogere bezettingsgraad verdeelt de huur, installatie, reserveonderdelen, software en afschrijving van de machine over meer declareerbare uren.',
    },
    {
      type: 'paragraph',
      html: 'De calculator behandelt de bezettingsgraad als een directe vermenigvuldigingsfactor voor de brutocapaciteit. Tien printers genereren 7200 bruto machine-uren per maand. Bij een bezettingsgraad van 40% gaat er slechts 2880 uur naar het omzetmodel vóór de correctie voor het succespercentage. Bij een bezettingsgraad van 75% gaat er 5400 uur naar het model. Het verschil kan bepalen of het terugverdienen maanden of jaren duurt, of dat het nooit gebeurt.',
    },
    {
      type: 'table',
      headers: ['Bezettingsniveau', 'Operationele betekenis', 'ROI-implicatie'],
      rows: [
        ['Onder 30%', 'Machines wachten het grootste deel van de maand op bestellingen, bestanden, operators of onderhoud.', 'De initiële investering is moeilijk terug te verdienen, tenzij de uurprijs hoog is.'],
        ['30-55%', 'Veelvoorkomend beginbereik voor farms met gemengde vraag en handmatige verwerking.', 'De winstgevendheid hangt sterk af van de vaste overheadkosten en het uitvalpercentage.'],
        ['55-75%', 'Gezond boekingsniveau met ruimte voor spoedklussen, onderhoud en wijzigingen in de installatie.', 'Vaak het eerste bereik waar de terugverdientijd realistisch wordt.'],
        ['Boven 75%', 'Hoge bezettingsgraad die een betrouwbare planning, materiaalstroom en preventief onderhoud vereist.', 'Sterk ROI-potentieel, maar weinig tolerantie voor storingen of knelpunten bij operators.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Een hoge bezettingsgraad is niet hetzelfde als een hoge winst',
      badge: 'Prijsrisico',
      html: '<p>Een farm kan druk zijn en toch geld verliezen als het uurtarief te laag is, herdrukken frequent zijn, materiaalverspilling hoog is of vaste overheadkosten zijn onderschat. Vergelijk de bezettingsgraad altijd met de marge, niet alleen met de omzet.</p>',
    },
    { type: 'title', text: 'Rekening houden met mislukte prints en herdrukken', level: 2 },
    {
      type: 'paragraph',
      html: 'Het succespercentage is wat deze 3D-print investeringssimulator onderscheidt van een eenvoudige capaciteitscalculator. Mislukte prints verbruiken evenveel tijd als succesvolle prints, maar leveren geen verkoopbare output op. Ze verbruiken bovendien filament, hars, bouwplaten, nozzles, elektriciteit, arbeid en goodwill van de klant. Een farm met een succespercentage van 90% verliest één op de tien potentiële productieblokken voordat de omzet wordt geteld.',
    },
    {
      type: 'paragraph',
      html: 'Het succespercentage moet worden gemeten over vergelijkbaar werk. Een farm die herhaaldelijk PLA-hulpmiddelen print, kan na procesafstemming een zeer hoog succespercentage behouden. Een farm die eenmalige klantmodellen, hoge onderdelen, technische polymeren, harsminiaturen of multi-materiaal opdrachten produceert, moet uitgaan van een lagere aanname. Als u eenvoudig en riskant werk combineert, voert u de calculator twee keer uit: eenmaal voor standaardproductie en eenmaal voor maatwerk.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Herhaalde productie',
          description: 'Bekende geometrie van onderdelen, afgestemde profielen, voorspelbare materialen en stabiele vraag.',
          icon: 'mdi:repeat',
          points: ['Hogere aanname van succes', 'Minder onzekerheid bij installatie', 'Beter vertrouwen in terugverdientijd'],
        },
        {
          title: 'Op maat gemaakte printservice',
          description: 'Bestanden variëren per klant, geometrie, ondersteuningsstrategie en kwaliteitsverwachting.',
          icon: 'mdi:file-cad',
          highlight: true,
          points: ['Matig succespercentage aangenomen', 'Meer variatie in offertes', 'Heeft marge nodig voor herdrukken'],
        },
        {
          title: 'Experimentele materialen',
          description: 'Technische polymeren, flexibele materialen, gevulde filamenten en procesafstemming voor hars.',
          icon: 'mdi:flask-outline',
          points: ['Lagere aanname van succes', 'Hogere slijtage van verbruiksartikelen', 'Gebruik voorzichtige ROI-invoerwaarden'],
        },
      ],
    },
    {
      type: 'message',
      title: 'Het uitvalpercentage hoort thuis in het financiële model',
      ariaLabel: 'Opmerking over boekhouding mislukte prints',
      html: '<p>Verberg herdrukken niet in vage overheadkosten. Een zichtbaar succespercentage maakt de investeringscase gemakkelijker te betwisten, te verbeteren en uit te leggen.</p>',
    },
    { type: 'title', text: 'Een betrouwbaar maandelijks kostenmodel opbouwen', level: 2 },
    {
      type: 'paragraph',
      html: 'De bedrijfskosten hebben in deze tool drie lagen. De vaste maandelijkse kosten dekken uitgaven die ook bestaan als printers stilstaan: huur, internet, verzekeringen, software, boekhouding, opslag, basispersoneelskosten en andere overhead. De maandelijkse elektriciteitskosten registreren de energie die wordt gebruikt door printers en direct gerelateerde productieapparatuur. De variabele kosten per uur dekken kosten die variëren met de productieve machinetijd, zoals filament, hars, nozzles, PTFE-tubes, slijtage van het bouwplatform, filters, smeermiddel, onderhoudsonderdelen en reinigingsmiddelen.',
    },
    {
      type: 'paragraph',
      html: 'Het apart invoeren van elektriciteit als maandelijkse kosten is handig voor farms omdat het stroomverbruik vaak wordt bijgehouden via rekeningen of tussenmeters in plaats van per print te worden berekend. Een farm met verwarmde bedden die PETG, ASA, ABS of nylon produceert, kan een heel ander energieprofiel hebben dan een PLA-farm in dezelfde ruimte. Als u elektriciteit al per machine-uur berekent, kunt u dat bedrag opnemen in de variabele kosten per uur en het veld voor maandelijkse elektriciteit op nul zetten.',
    },
    {
      type: 'table',
      headers: ['Kosteninvoer', 'Opnemen', 'Vermijden'],
      rows: [
        ['Vaste maandelijkse kosten', 'Huur, verzekering, internet, software, basispersoneel, opslag.', 'Materiaal dat alleen wordt gebruikt als printers draaien.'],
        ['Maandelijkse elektriciteitskosten', 'Printerenergie, drogers, wasstations, uitharding, ventilatie, aandeel klimaatbeheersing.', 'Niet-gerelateerde huishoudelijke of kantoorstroom.'],
        ['Variabele kosten per uur', 'Filament, hars, nozzles, verbruiksartikelen voor onderhoud, slijtagevergoeding per uur.', 'Eenmalige aanschafkosten van de machine.'],
        ['Initiële investering', 'Printers, rekken, installatie, gereedschap, drogers, hardware voor farmbeheer.', 'Maandelijkse kosten die terugkeren na de lancering.'],
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Bruto maandelijkse uren', definition: 'Theoretische machinecapaciteit vóór correcties voor bezettingsgraad en mislukte prints.' },
        { term: 'Reale productieve uren', definition: 'Capaciteit die overblijft na toepassing van bezettingsgraad en succespercentage.' },
        { term: 'Terugverdientijd', definition: 'Maanden die nodig zijn om de initiële investering terug te verdienen uit de maandelijkse nettowinst.' },
        { term: 'Geannualiseerde ROI', definition: 'Twaalf maanden nettowinst gedeeld door de initiële investering.' },
        { term: 'Variabele uurkosten', definition: 'Vergoeding voor verbruiksartikelen en onderhoud die varieert met de productieve printtijd.' },
      ],
    },
    { type: 'title', text: 'Het verkooptarief per machine-uur bepalen', level: 2 },
    {
      type: 'paragraph',
      html: 'Het verkooptarief per uur is het bedrag dat aan de klant in rekening wordt gebracht voor één productief machine-uur. Het kan rechtstreeks op offertes worden vermeld of worden opgenomen in een prijsformule die ook materiaal, arbeid, afwerking, verpakking en marge omvat. De sleutel is consistentie: als het uurtarief bedoeld is om materiaal te omvatten, voeg dan niet hetzelfde materiaal nogmaals toe als variabele kosten per uur. Als het uurtarief alleen machinetijd is, zorg er dan voor dat materiaal en arbeid elders in het bedrijfsmodel zijn vertegenwoordigd.',
    },
    {
      type: 'paragraph',
      html: 'Een tarief dat concurrerend lijkt bij individuele opdrachten kan mislukken op farmgrootte. Lange prints nemen capaciteit in beslag die voor andere opdrachten had kunnen worden gebruikt. Fijne laaghoogtes, trage materialen, hoge onderdelen en geometrieën met veel ondersteuning verminderen de doorvoer. Een <strong>print farm winstgevendheidscalculator</strong> moet daarom worden gebruikt in combinatie met reële offertegegevens: gemiddelde opdrachtduur, gemiddeld betaald uurequivalent, acceptatiegraad van klanten en maandelijks ordervolume.',
    },
    {
      type: 'proscons',
      title: 'Uurtarieven in een print farm',
      items: [
        { pro: 'Maakt machinebezetting zichtbaar en voorkomt dat lange prints ondergeprijsd worden.', con: 'Klanten kunnen uitleg nodig hebben wanneer een licht onderdeel vele uren in beslag neemt.' },
        { pro: 'Werkt goed voor interne ROI-planning en capaciteitsbeslissingen.', con: 'Vervangt de prijsstelling voor materiaal, arbeid, afwerking en risico niet.' },
        { pro: 'Maakt een snelle vergelijking mogelijk tussen printertypes en bezettingsscenario s.', con: 'Kan misleidend zijn als het uitvalpercentage en de wachttijd worden genegeerd.' },
      ],
    },
    {
      type: 'card',
      icon: 'mdi:cash-clock',
      title: 'Prijscontrolepunt',
      html: '<p>Als een kleine verandering in het uurtarief de terugverdientijd volledig verandert, is de investering gevoelig voor marktprijzen. Valideer het tarief ten opzichte van de daadwerkelijke vraag van klanten voordat u meer printers koopt.</p>',
    },
    { type: 'title', text: 'Terugverdientijd en geannualiseerde ROI interpreteren', level: 2 },
    {
      type: 'paragraph',
      html: 'De terugverdientijd is gemakkelijk te begrijpen omdat deze in maanden wordt uitgedrukt. Als de initiële investering 18000 is en de maandelijkse nettowinst 3000, is de terugverdientijd zes maanden. Als de maandelijkse nettowinst nul of negatief is, is de terugverdientijd niet haalbaar omdat de farm de investering onder de huidige aannames nooit terugverdient. De terugverdientijd is nuttig voor de cashplanning, financiering van apparatuur en om te beslissen of uitbreiding nu moet plaatsvinden of nadat de vraag verbetert.',
    },
    {
      type: 'paragraph',
      html: 'De geannualiseerde ROI is strenger omdat deze een jaar nettowinst vergelijkt met de initiële investering. Een farm can een positieve maandelijkse winst hebben, maar toch een zwakke geannualiseerde ROI laten zien als het terugverdienen langzaam gaat. Bijvoorbeeld, een farm die 1000 per maand verdient na kosten op een investering van 24000 genereert 12000 per jaar voordat de oorspronkelijke investering in aanmerking wordt genomen, waardoor de ROI in het eerste jaar negatief blijft. Dat betekent niet automatisch dat het bedrijf slecht is, maar wel dat de investeerder een langere horizon nodig heeft.',
    },
    {
      type: 'summary',
      title: 'Beslisregels',
      items: [
        'Gebruik de terugverdientijd om de snelheid van het cashherstel te begrijpen.',
        'Gebruik de geannualiseerde ROI om de farm te vergelijken met andere kapitaalbestedingen.',
        'Voer het model opnieuw uit met een lagere bezettingsgraad en succespercentage voordat u besluit uit te breiden.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Szenariotests bieden de eigenlijke waarde',
      badge: 'Planning',
      html: '<p>Voer een basisscenario, een conservatief scenario en een stressscenario uit. De beste investering is niet de investering die er alleen in het optimistische scenario geweldig uitziet, maar de investering die begrijpelijk blijft wanneer de vraag, storingen of elektriciteitskosten zich tegen u keren.</p>',
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
