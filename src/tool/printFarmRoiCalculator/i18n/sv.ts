import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PrintFarmRoiCalculatorUI } from '../ui';

const slug = '3d-print-farm-roi-kalkylator';
const title = '3D Print Farm ROI Kalkylator';
const description =
  'Simulera månatlig lönsamhet, återbetalningstid och årlig ROI for en 3D-skrivarfarm baserat på beläggning, felfrekvens, el, fasta kostnader och rörliga timkostnader.';

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
    question: 'Hur beräknar man ROI för en 3D-skrivarfarm?',
    answer:
      'Uppskatta produktiva timmar per månad, multiplicera dem med försäljningspriset per maskintimme, dra av fasta kostnader, el och rörliga timkostnader, och jämför sedan den årliga vinsten med den ursprungliga investeringen.',
  },
  {
    question: 'Varför påverkar framgångsgraden återbetalningstiden för skrivarfarmen?',
    answer:
      'Misslyckade utskrifter förbrukar maskinkapacitet, material, munstycken, energi och operatörens uppmärksamhet utan att producera fakturerbara timmar. En lägre framgångsgrad minskar de verkliga produktiva timmarna och fördröjer återbetalningen.',
  },
  {
    question: 'Vad ska inkluderas i den rörliga kostnaden per timme?',
    answer:
      'Inkludera förbrukning av filament eller resurs, munstycksslitage, slitage på byggplattan, rutinmässiga underhållsdelar, förbrukningsvaror och eventuella timkostnader som varierar med faktisk framgångsrik produktionstid.',
  },
  {
    question: 'Är återbetalningstid detsamma som ROI?',
    answer:
      'Nej. Återbetalningstiden uppskattar hur många månader som behövs for att återvinna den ursprungliga investeringen från den månatliga nettovinsten. ROI jämför den årliga vinsten med den ursprungliga investeringen i procent.',
  },
];

const howToData = [
  { name: 'Ange farmens storlek', text: 'Lägg till antalet aktiva skrivare och den initiala investeringen för maskiner, installation, arbetsstationer och driftsättning.' },
  { name: 'Lägg till månatliga driftskostnader', text: 'Ange fasta omkostnader och el som månatliga kostnader, och lägg sedan till den rörliga kostnaden per produktiv maskintimme.' },
  { name: 'Ställ in beläggning och framgångsgrad', text: 'Använd realistiska procentsatser för beläggning och framgång så att modellen räknar bort stilleståndstid och misslyckade utskrifter.' },
  { name: 'Läs av lönsamhetsresultaten', text: 'Jämför månatliga intäkter med kostnader, och använd sedan återbetalningsmånader och årlig ROI för att bedöma investeringens livskraft.' },
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
    '3D-print farm ROI-kalkylator',
    '3D-skrivare payback simulator',
    'Lönsamhetskalkylator för skrivarfarm',
    'Justering för beläggning och misslyckade utskrifter',
    'Driftskostnadsmodell i flera valutor',
  ],
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<PrintFarmRoiCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'ROI-indata for skrivarfarm',
    resultsAriaLabel: 'ROI-resultat for skrivarfarm',
    currencyLabel: 'Valuta',
    currencyOptions,
    printerCountLabel: 'Antal skrivare',
    initialInvestmentLabel: 'Initial investering',
    fixedMonthlyCostLabel: 'Fast månadskostnad',
    electricityMonthlyCostLabel: 'Månatlig elkostnad',
    hourlyRateLabel: 'Försäljningspris per timme',
    occupancyLabel: 'Genomsnittlig beläggning',
    successRateLabel: 'Framgångsgrad',
    variableCostLabel: 'Rörlig kostnad per timme',
    averageHoursPerPartLabel: 'Genomsnittliga timmar per del',
    paybackLabel: 'Återbetalningstid',
    netProfitLabel: 'Månatlig nettovinst',
    annualRoiLabel: 'Årlig ROI',
    productiveHoursLabel: 'Verkliga produktiva timmar',
    revenueLabel: 'Intäkter',
    costsLabel: 'Kostnader',
    fixedCostShortLabel: 'Fast',
    electricityShortLabel: 'El',
    variableCostShortLabel: 'Rörlig',
    marginLabel: 'Nettomarginal',
    breakEvenPartsLabel: 'Break-even delar',
    breakEvenHoursLabel: 'Break-even timmar',
    stressScenarioLabel: 'Värsta scenario',
    exportSummaryLabel: 'Ladda ner sammanfattning',
    chartLabel: 'Månatliga intäkter jämfört med driftskostnader',
    monthsUnit: 'månader',
    hoursUnit: 'h',
    percentUnit: '%',
    notViableLabel: 'Inte livskraftig',
    positiveInsight: 'Den månatliga vinsten är positiv efter att beläggning, framgångsgrad och driftskostnader har räknats in.',
    negativeInsight: 'Driftskostnaderna överstiger de justerade intäkterna; förbättra beläggningen, priserna eller felfrekvensen innan du skalar upp.',
    currencySymbol: 'kr',
    defaultCurrencyCode: 'SEK',
    pendingLabel: '-',
    partsUnit: 'delar/månad',
    reportFilename: 'roi-sammanfattning-skrivarfarm.csv',
    reportTitle: 'ROI-Livskraftighetsrapport för 3D-Skrivarfarm',
    reportCurrencyLabel: 'Valuta',
  },
  seo: [
    { type: 'title', text: 'Hur denna 3D Print Farm ROI Kalkylator fungerar', level: 2 },
    {
      type: 'paragraph',
      html: 'En <strong>3D-print farm ROI-kalkylator</strong> bör svara på en specifik investeringsfråga: kommer en grupp skrivare att återvinna sin installationskostnad tillräckligt snabbt for att motivera kapitalet, utrymmet, underhållet och den operationella risken? Denna simulator modellerar den frågan utifrån månatlig maskinkapacitet. Varje skrivare bidrar med 720 bruttotimmar under en standardmånad på 30 dagar, och modellen räknar sedan bort dessa timmar baserat på beläggning och utskriftsframgång. Resultatet är inte teoretisk kapacitet; det är den fakturerbara produktionstiden som överlever stillestånd, jobbkörningar, misslyckade utskrifter, ominspelningar, kalibrering och praktisk stilleståndstid.',
    },
    {
      type: 'paragraph',
      html: 'Beräkningskedjan är avsiktligt transparent. Månatliga bruttotimmar är lika med <code>skrivare x 720</code>. Verkliga produktiva timmar är lika med bruttotimmar multiplicerat med genomsnittlig beläggning och framgångsgrad. Månatliga intäkter är lika med produktiva timmar multiplicerat med timpriset mot kund. Driftskostnaderna kombinerar fasta månatliga omkostnader, el och rörliga timkostnader. Månatlig nettovinst är intäkterna minus driftskostnaderna. Återbetalningstiden delar den initiala investeringen med den månatliga nettovinsten, medan den årliga ROI:n jämför tolv månaders nettovinst med den initiala investeringen.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '720 h', label: 'Månatlig bruttokapacitet per skrivare', icon: 'mdi:clock-outline' },
        { value: 'B x F', label: 'Justering for beläggning och framgång', icon: 'mdi:percent-outline' },
        { value: 'Intäkter - kostnader', label: 'Månatlig nettovinst', icon: 'mdi:finance' },
        { value: 'Investering / vinst', label: 'Återbetalningstid', icon: 'mdi:calendar-clock' },
      ],
    },
    {
      type: 'tip',
      title: 'Använd konservativa indata för investeringsbeslut',
      html: '<p>För en första analys, ange den beläggning som du kan försvara med nuvarande efterfrågan, inte den beläggning du hoppas nå efter att marknadsföringen har förbättrats. En farm som bara fungerar vid en optimistisk beläggning är ännu inte en robust investering.</p>',
    },
    { type: 'title', text: 'Varför beläggningen förändrar skrivarfarmens lönsamhet', level: 2 },
    {
      type: 'paragraph',
      html: 'Beläggningen är procentandelen av tillgänglig maskintid som faktiskt används för att skriva ut betalt eller säljbart arbete. Det är den starkaste hävstången i många små farmmodeller eftersom den initiala investeringen är fast. En skrivare som köpts för produktion kostar lika mycket oavsett om den är bokad åtta timmar per dag eller tjugo timmar per dag. Högre beläggning sprider hyra, installation, reservdelslager, programvara och maskinavskrivning över fler fakturerbara timmar.',
    },
    {
      type: 'paragraph',
      html: 'Kalkylatorn behandlar beläggning som en direkt multiplikator på bruttokapaciteten. Tio skrivare skapar 7200 bruttomaskintimmar per månad. Vid 40% beläggning går endast 2880 timmar in i intäktsmodellen före justeringen av framgångsgraden. Vid 75% beläggning går 5400 timmar in i modellen. Skillnaden kan avgöra om återbetalningen tar månader, år eller aldrig inträffar.',
    },
    {
      type: 'table',
      headers: ['Beläggningsnivå', 'Operativ betydelse', 'ROI-konsekvens'],
      rows: [
        ['Under 30%', 'Maskiner tillbringar merparten av månaden med att vänta på order, filer, operatörer eller underhåll.', 'Den initiala investeringen är svår att återvinna om inte timpriset är högt.'],
        ['30-55%', 'Vanligt tidigt skede för farmer med blandad efterfrågan och manuell hantering.', 'Lönsamheten beror starkt på fasta omkostnader och felfrekvens.'],
        ['55-75%', 'Hälsosam bokningsnivå med utrymme för akuta jobb, underhåll och installationsändringar.', 'Ofta det första intervallet där återbetalning blir realistisk.'],
        ['Över 75%', 'Hög beläggning som kräver pålitlig schemaläggning, materialflöde och förebyggande underhåll.', 'Stark ROI-potential men liten tolerans för haverier eller flaskhalsar hos operatören.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Hög beläggning är inte detsamma som hög vinst',
      badge: 'Prisrisk',
      html: '<p>En farm kan ha mycket att göra men ändå förlora pengar om timpriset är för lågt, ominspelningar är vanliga, materialspill är högt eller fasta omkostnader underskattades. Jämför alltid beläggning med marginal, inte bara med intäkter.</p>',
    },
    { type: 'title', text: 'Ta hänsyn till misslyckade utskrifter och ominspelningar', level: 2 },
    {
      type: 'paragraph',
      html: 'Den angivna framgångsgraden är det som skiljer denna 3D-skrivarinvesteringssimulator från en enkel kapacitetskalkylator. Misslyckade utskrifter förbrukar samma kalendertid som framgångsrika utskrifter men genererar ingen säljbar produkt. De kan också förbruka filament, harts, byggplattor, munstycken, el, arbete och kundens förtroende. En farm med 90% framgångsgrad förlorar ett av tio potentiella produktionsblock innan intäkterna räknas.',
    },
    {
      type: 'paragraph',
      html: 'Framgångsgraden bör mätas över jämförbart arbete. En farm som skriver ut upprepade PLA-fixturer kan upprätthålla eine mycket hög framgångsgrad efter processjustering. En farm som producerar unika kundmodeller, höga delar, tekniska polymerer, hartsminiatyrer eller jobb med flera material kan behöva ett lägre antagande. Om du blandar enkelt och riskabelt arbete, kör kalkylatorn två gånger: en gång för standardproduktion och eine gång för anpassade jobb.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Upprepad produktion',
          description: 'Känd geometri, justerade profiler, förutsägbara material och stabil efterfrågan.',
          icon: 'mdi:repeat',
          points: ['Högre framgångsantagande', 'Lägre osäkerhet vid installation', 'Bättre förtroende för återbetalning'],
        },
        {
          title: 'Anpassad utskriftstjänst',
          description: 'Filer varierar beroende på kund, geometri, supportstrategi och kvalitetskrav.',
          icon: 'mdi:file-cad',
          highlight: true,
          points: ['Måttlig framgångsgrad antas', 'Mer variation i offerter', 'Kräver reserv för ominspelning'],
        },
        {
          title: 'Experimentella material',
          description: 'Tekniska polymerer, flexibla material, fyllda filament och hartsjustering.',
          icon: 'mdi:flask-outline',
          points: ['Lägre framgångsantagande', 'Högre slitage på förbrukningsvaror', 'Använd försiktiga ROI-indata'],
        },
      ],
    },
    {
      type: 'message',
      title: 'Felfrekvensen hör hemma i den ekonomiska modellen',
      ariaLabel: 'Notering om misslyckade utskrifter',
      html: '<p>Dölj inte ominspelningar i vaga omkostnader. En synlig framgångsgrad gör det lättare att utmana, förbättra och förklara investeringsfallet.</p>',
    },
    { type: 'title', text: 'Bygga en pålitlig månatlig kostnadsmodell', level: 2 },
    {
      type: 'paragraph',
      html: 'Driftskostnaden har tre lager i detta verktyg. Fast månadskostnad täcker utgifter som finns även när skrivarna står stilla: hyra, internet, försäkringar, programvara, bokföring, lagring, grundläggande arbetskraft och andra omkostnader. Månatlig elkostnad fångar upp energi som används av skrivare och direkt relaterad produktionsutrustning. Rörlig kostnad per timme täcker kostnader som varierar med produktiv maskintid, såsom filament, harts, munstycken, PTFE-slangar, slitage på byggplattan, filter, smörjmedel, underhållsdelar och rengöringsartiklar.',
    },
    {
      type: 'paragraph',
      html: 'Att hålla el som en separat månatlig indata är användbart för farmer eftersom energiförbrukningen ofta spåras från räkningar eller undermätning snarare än beräknas per utskrift. En farm med uppvärmd bädd som producerar PETG, ASA, ABS or nylon kan ha en helt annan energiprofil än eine PLA-farm i samma rum. Om du redan beräknar el per maskintimme kan du inkludera den siffran i den rörliga kostnaden per timme och sätta det månatliga elfältet till noll.',
    },
    {
      type: 'table',
      headers: ['Kostnadsindata', 'Inkludera', 'Undvik'],
      rows: [
        ['Fast månadskostnad', 'Hyra, försäkring, internet, programvara, baspersonal, lagring.', 'Material som endast används när skrivarna körs.'],
        ['Månatlig elkostnad', 'Skrivarenergi, torkare, tvättstationer, härdning, ventilation, klimatdel.', 'Orelaterad hushålls- eller kontorel.'],
        ['Rörlig kostnad per timme', 'Filament, harts, munstycken, förbrukningsvaror for underhåll, timslitage.', 'Engångskostnad for maskinköp.'],
        ['Initial investering', 'Skrivare, ställningar, installation, verktyg, torkare, maskinvaruhantering.', 'Månatliga kostnader som återkommer efter lanseringen.'],
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Månatliga bruttotimmar', definition: 'Teoretisk maskinkapacitet före justeringar för beläggning och misslyckade utskrifter.' },
        { term: 'Verkliga produktiva timmar', definition: 'Kapacitet som återstår efter beläggning och framgångsgrad.' },
        { term: 'Återbetalningstid', definition: 'Månader som krävs för att den månatliga nettovinsten ska återvinna den initiala investeringen.' },
        { term: 'Årlig ROI', definition: 'Tolv månaders nettovinst delat med den initiala investeringen.' },
        { term: 'Rörlig timkostnad', definition: 'Förbrukningsvaror och underhållsbidrag som varierar med produktiv utskriftstid.' },
      ],
    },
    { type: 'title', text: 'Fastställa försäljningspriset per maskintimme', level: 2 },
    {
      type: 'paragraph',
      html: 'Försäljningspriset per timme är det belopp som debiteras kunden för en produktiv maskintimme. Det kan visas direkt på offerter eller byggas in i en prisformel som också inkluderar material, arbete, efterbehandling, förpackning och marginal. Nyckeln är konsistens: om timpriset är avsett att inkludera material, lägg inte också till samma material igen som rörlig kostnad per timme. Om timpriset endast är maskintid, se till att material och arbete representeras på annat håll i affärsmodellen.',
    },
    {
      type: 'paragraph',
      html: 'Ett pris som ser konkurrenskraftigt ut på enskilda jobb kan misslyckas i farmskala. Långa utskrifter upptar kapacitet som kunde ha tjänat annat arbete. Fina lagerhöjder, långsamma material, höga delar och supporttunga geometrier minskar alla genomströmningen. En **lönsamhetskalkylator för skrivarfarm** bör därför användas tillsammans med verkliga offertuppgifter: genomsnittlig jobblängd, genomsnittligt betald timmotsvarighet, kundacceptans och månatlig ordervolym.',
    },
    {
      type: 'proscons',
      title: 'Timprissättning i en skrivarfarm',
      items: [
        { pro: 'Gör maskinbeläggningen synlig och skyddar långa utskrifter från att underprissättas.', con: 'Kunder kan behöva förklaring när en lätt del tar många timmar.' },
        { pro: 'Fungerar bra för intern ROI-planering och kapacitetsbeslut.', con: 'Ersätter inte prissättning av material, arbete, efterbehandling och risk.' },
        { pro: 'Möjliggör snabb jämförelse mellan skrivartyper och beläggningsscenarier.', con: 'Kan vara vilseledande om felfrekvens och kötid ignoreras.' },
      ],
    },
    {
      type: 'card',
      icon: 'mdi:cash-clock',
      title: 'Priskontrollpunkt',
      html: '<p>Om en liten förändring i timpriset helt förändrar återbetalningen är investeringen känslig för marknadspriser. Validera priset mot faktisk kundefterfrågan innan du köper fler skrivare.</p>',
    },
    { type: 'title', text: 'Tolka återbetalningstid och årlig ROI', level: 2 },
    {
      type: 'paragraph',
      html: 'Återbetalningstiden är lätt att förstå eftersom den uttrycks i månader. Om den initiala investeringen är 18000 och den månatliga nettovinsten är 3000 är återbetalningen sex månader. Om den månatliga nettovinsten är noll eller negativ är återbetalningen inte livskraftig eftersom farmen aldrig återvinner investeringen under nuvarande antaganden. Återbetalning är användbart för likviditetsplanering, utrustningsfinansiering och för att besluta om expansion ska ske nu eller efter att efterfrågan förbättrats.',
    },
    {
      type: 'paragraph',
      html: 'Årlig ROI är strängare eftersom den jämför ett års nettovinst med den initiala investeringen. En farm kan ha positiv månadsvinst men ändå visa en svag årlig ROI om återbetalningen är långsam. Till exempel genererar en farm som tjänar 1000 per månad efter kostnader på en investering på 24000 totalt 12000 per år innan den ursprungliga investeringen beaktas, så det första årets ROI förblir negativ. Det betyder inte automatiskt att affären är dålig, men det betyder att investeraren behöver en längre horisont.',
    },
    {
      type: 'summary',
      title: 'Beslutsregler',
      items: [
        'Använd återbetalningstid för to understand kassaåtervinningens hastighet.',
        'Använd årlig ROI för att jämföra farmen mot andra användningar av kapital.',
        'Kör om modellen med lägre beläggning och framgångsgrad innan du binder dig till expansion.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Scenariotestning är det verkliga värdet',
      badge: 'Planning',
      html: '<p>Kör ett basfall, ett konservativt fall och ett stressat fall. Den bästa investeringen är inte den som ser bra ut bara i det optimistiska scenariot; det är den som förblir förståelig när efterfrågan, misslyckanden eller elkostnader går emot dig.</p>',
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
