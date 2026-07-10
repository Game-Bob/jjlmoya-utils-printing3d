import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ResinRealCostCalculatorUI } from '../ui';

const slug = 'verklig-hartskostnad-kalkylator-sla-dlp';
const title = 'Verklig harts kostnadskalkylator för SLA och DLP utskrifter';
const description = 'Beräkna teoretisk och verklig hartskostnad med densitetskonvertering, slidervolym och en avfallskorrigering på 10 till 15 procent för komplexa SLA- och DLP-delar.';

const faqData = [
  {
    question: 'Varför är den verkliga hartskostnaden högre än slidervolymen?',
    answer: 'Slidern rapporterar vanligtvis endast netto härdat harts i modellen och stöden. Den tar inte alltid hänsyn till harts som blir kvar på byggplattan, fastnat i ihåliga väggar, tvättförluster, misslyckade stöd eller rester som inte kan hällas tillbaka rent.',
  },
  {
    question: 'Ska jag ange gram eller milliliter?',
    answer: 'Använd vad din slider exporterar. Om den rapporterar gram, ange hartset densitet från flaskan eller databladet så att kalkylatorn kan omvandla massa till volym innan priset för utskriften beräknas.',
  },
  {
    question: 'Vilken komplexitetsfaktor ska jag använda?',
    answer: 'Använd låg för solida delar med enkla stöd, medel för typiska miniatyrer och funktionella hartadelar, och hög för ihåliga delar, täta stöd, hålrum och delar som håller kvar flytande harts efter utskrift.',
  },
  {
    question: 'Ingår alkohol, handskar, filter eller maskintid?',
    answer: 'Nej. Detta verktyg isolerar hartset materialkostnad. Förbrukningsvaror, arbete, efterhärdningsenergi, misslyckanden och maskinavskrivning bör läggas till i en bredare offert.',
  },
];

const howToData = [
  {
    name: 'Ange flaskdata',
    text: 'Lägg till flaskans nettpris, nominell volym i milliliter och densiteten som visas på hartset datablad eller etikett.',
  },
  {
    name: 'Klistra in slideranvändning',
    text: 'Ange modellens hartsförbrukning som exporterats av Lychee, Chitubox, PrusaSlicer eller en annan slider och välj gram eller milliliter.',
  },
  {
    name: 'Välj komplexitet',
    text: 'Välj låg, medel eller hög komplexitet för att tillämpa en avfallskorrigering på 10, 12,5 eller 15 procent på slidervolymen.',
  },
  {
    name: 'Jämför teoretisk och verklig kostnad',
    text: 'Använd den teoretiska kostnaden för sliderjämförelse och den verkliga korrigerade kostnaden för offerter, batchhantering och hartsplanering.',
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
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<ResinRealCostCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    bottlePanel: 'Hartsflaska',
    modelPanel: 'Slidermodell',
    resultPanel: 'Verklig hartskostnad',
    unitSystemLabel: 'Enheter',
    metricLabel: 'Metriskt',
    imperialLabel: 'US',
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
    bottlePriceLabel: 'Flaskpris',
    bottleVolumeLabel: 'Flaskvolym',
    resinPresetLabel: 'Hartsförinställning',
    resinPresetOptions: [
      { label: 'Anpassad / manuell densitet', density: '' },
      { label: 'Generiskt standardharts - 1,10 g/cm3', density: '1.10' },
      { label: 'Generiskt vattenbusharts - 1,08 g/cm3', density: '1.08' },
      { label: 'Generiskt ABS-liknande harts - 1,10 g/cm3', density: '1.10' },
      { label: 'Generiskt segt harts - 1,12 g/cm3', density: '1.12' },
      { label: 'Generiskt flexibelt harts - 1,05 g/cm3', density: '1.05' },
      { label: 'Generiskt högtemperaturharts - 1,15 g/cm3', density: '1.15' },
      { label: 'Generiskt gjutharts - 1,12 g/cm3', density: '1.12' },
      { label: 'Generiskt keramikfyllt harts - 1,35 g/cm3', density: '1.35' },
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
    densityLabel: 'Hartsdensitet (g/cm3)',
    modelAmountLabel: 'Slidermängd',
    unitLabel: 'Mängdenhet',
    mlUnit: 'ml',
    fluidOunceUnit: 'fl oz',
    gramsUnit: 'g',
    ounceUnit: 'oz',
    complexityLabel: 'Delkomplexitet',
    lowComplexity: 'Låg',
    mediumComplexity: 'Medel',
    highComplexity: 'Hög',
    lowHint: 'Solida delar, lätta stöd, +10%',
    mediumHint: 'Typiskt hartset, +12,5%',
    highHint: 'Ihåliga delar eller täta stöd, +15%',
    theoreticalCostLabel: 'Sliderkostnad',
    realCostLabel: 'Verklig kostnad',
    wasteCostLabel: 'Avfallskorrigering',
    correctedVolumeLabel: 'Korrigerad volym',
    costPerMlLabel: 'Kostnad per ml',
    bottlePrintsLabel: 'Utskrifter per flaska',
    savedSettingsLabel: 'Avfallsfaktor',
    hollowPartTip: 'Ihåliga delar med dräneringshål kan överstiga 15 procent avfall eftersom harts blir kvar på innerväggar, i hålrum, på stöd och i tvättprocessen.',
    conversionLabel: 'Netto slidervolym',
    netFromSlicerLabel: 'netto från slider',
    persistenceNote: 'Flaskpris, flaskvolym och densitet sparas lokalt i denna webbläsare.',
  },
  seo: [
    {
      type: 'title',
      text: 'Varför SLA och DLP hartskostnader behöver en avfallskorrigering',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Den mängd harts som visas av en slider är en användbar utgångspunkt, men den är inte densamma som den mängd harts som försvinner från flaskan under en verklig utskrift. SLA-, MSLA-, LCD- och DLP-utskrift använder alla ett bad fyllt med flytande fotopolymer. Delen härdar lager för lager, men ohärdat harts täcker fortfarande modellen, stöden, byggplattan, badfolien och varje inre hålrum som är öppet mot hartset bad. En kalkylator som multiplicerar slidervolymen med flaskans pris per milliliter ger ett rent teoretiskt tal. En verkstadssoffert behöver dock det korrigerade talet.',
    },
    {
      type: 'paragraph',
      html: 'Denna kalkylator separerar <strong>sliderkostnaden</strong> från den <strong>verkliga hartskostnaden</strong>. Sliderkostnaden är netto hartset som rapporteras av programvaran. Den verkliga kostnaden tillämpar en kontrollerad avfallsfaktor på 10 till 15 procent. Det intervallet är medvetet smalt: det är tillräckligt högt för att täcka vanliga hartsförlusterna, men inte så högt att det döljer misslyckanden, arbete, alkohol, handskar, filter eller efterhärdning under materialraden. Resultatet är en praktisk rörlig materialkostnad för en enskild utskrift eller batch.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '10%', label: 'Låg korrigering för solida delar och lätta stöd' },
        { value: '12,5%', label: 'Standardkorrigering för normala hartset' },
        { value: '15%', label: 'Hög korrigering för hålrum och täta stöd' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Blanda inte materialkostnad med arbetskostnad',
      html: 'Siffran som returneras här är endast hartsmaterial. Ett fullständigt försäljningspris bör även inkludera misslyckade utskrifter, rengöringsal alkohol, nitrilhandskar, pappershanddukar, filter, efterhärdningstid, förpackning, maskinslitage, designtid och marginal.',
    },
    {
      type: 'title',
      text: 'Formeln bakom kalkylatorn',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Första steget är flaskpriset per milliliter: <code>kostnad_per_ml = flaskpris / flaskvolym_ml</code>. En flaska på 1000 ml köpt för 42 EUR har en baskostnad på 0,042 EUR per ml. Om slidern säger att en miniatyr förbrukar 38 ml, är den teoretiska hartskostnaden 38 x 0,042, eller 1,60 EUR. Den siffran är användbar för att jämföra orientering, urholkning, stödstrategier och batcher i slidern, men den antar att varje milliliter som slidern rapporterar är det enda harts som förbrukas.',
    },
    {
      type: 'paragraph',
      html: 'Andra steget tillämpar korrigerad volym: <code>verklig_volym = slidervolym x (1 + avfallsfaktor)</code>. Med standardfaktorn 12,5 procent blir en modell på 38 ml 42,75 ml. Den verkliga materialkostnaden blir 42,75 x 0,042 EUR, eller 1,80 EUR. Skillnaden är liten på en enda liten modell, men blir synlig vid offerering av en bricka med miniatyrer, dentalmodeller, smyckesmaster, ingenjörsprototyper eller produktionsfixturer.',
    },
    {
      type: 'table',
      headers: ['Slidervolym', 'Flaskkostnad', 'Faktor', 'Teoretisk kostnad', 'Verklig kostnad'],
      rows: [
        ['25 ml', '42 EUR / 1000 ml', '10%', '1,05 EUR', '1,16 EUR'],
        ['80 ml', '42 EUR / 1000 ml', '12,5%', '3,36 EUR', '3,78 EUR'],
        ['150 ml', '42 EUR / 1000 ml', '15%', '6,30 EUR', '7,25 EUR'],
        ['420 ml', '42 EUR / 1000 ml', '15%', '17,64 EUR', '20,29 EUR'],
      ],
    },
    {
      type: 'tip',
      title: 'Använd batchvolym, inte delvolym, för produktionsserier',
      html: 'Om du fyller byggplattan med flera kopior, beräkna från slidervolymen för hela plattan. Stödtorn, delade stödstrukturer och orienteringsförändringar kan göra batchen mer effektiv än att multiplicera en enskild del med antalet kopior.',
    },
    {
      type: 'title',
      text: 'Att välja rätt komplexitetsfaktor',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Låg komplexitet',
          description: 'Använd 10 procent för solida delar, enkla fästen, kalibreringsbitar, schackpjäser och modeller med få stöd.',
          points: ['Lite inre retention', 'Låg stödtäthet', 'Enkel droppning tillbaka i badet'],
        },
        {
          title: 'Medel komplexitet',
          description: 'Använd 12,5 procent för normala miniatyrer, dentalmodeller, tabletop-delar och funktionella bitar med måttliga stöd.',
          points: ['Typisk efterbehandlingsförlust', 'Lite harts på stöd', 'Bra standardsofferingsfaktor'],
          highlight: true,
        },
        {
          title: 'Hög komplexitet',
          description: 'Använd 15 procent för ihåliga skal, hålrum, täta stödskogar, gallerstrukturer och delar som lämnar tunga rester efter dränering.',
          points: ['Mer instängd vätska', 'Mer tvättförlust', 'Högre hanteringsosäkerhet'],
        },
      ],
    },
    {
      type: 'paragraph',
      html: 'Komplexitetsfaktorn är inte ett straff för dålig slidning. Det är en korrigering för hur flytande harts beter sig. Ett enkelt solidt block som lutas korrekt kan droppa nästan helt efter några minuter. En ihålig staty med små dräneringshål kan hålla en film av harts innanför väggen, runt stöden och nära sugkoppar. Tätta stödbasen håller också harts mellan pelarna. Även när du låter delen droppa över badet, är hart set som når tvättbehållaren, handskarna, pappershandduken och filtret en del av det verkliga material som förbrukats av jobbet.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'När 15 procent inte räcker',
      html: 'Om en ihålig modell har dålig dränering, blinda hålrum, tjocka inre stöd eller en texturerad interiör, kan avfallet överstiga 15 procent. I så fall behandla denna kalkylator som hartsbaslinjen och lägg till en separat riskreserv i offerten.',
    },
    {
      type: 'summary',
      title: 'Snabb faktorval',
      items: [
        'Välj 10 procent när modellen är solid, kompakt och lätt att dränera.',
        'Välj 12,5 procent när du är osäker eller skriver ut en blandad bricka.',
        'Välj 15 procent när delen är ihålig, kraftigt stödd eller geometriskt rörig.',
        'Lägg till en separat feltolerans när du skriver ut nytt harts, ny orientering eller en ömtålig kunddel.',
      ],
    },
    {
      type: 'title',
      text: 'Använda densitet när slidern rapporterar i gram',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Många sliders kan rapportera hartsförbrukning i milliliter, gram eller båda. Hartsflaskor säljs vanligtvis efter nominell volym, vanligtvis 500 ml, 1000 ml eller 1 liter. Om slidern exporterar i gram, omvandlar kalkylatorn massa till volym med hjälp av densitet: <code>volym_ml = gram / densitet</code>. Hartsdensitet skrivs normalt i g/cm3 och 1 cm3 är samma volym som 1 ml. Ett harts med densitet 1,10 g/cm3 innebär att 110 g är ungefär 100 ml.',
    },
    {
      type: 'table',
      headers: ['Slidermassa', 'Densitet', 'Omvandlad volym', 'Varför det är viktigt'],
      rows: [
        ['55 g', '1,10 g/cm3', '50,0 ml', 'Vanlig uppskattning för standardharts'],
        ['55 g', '1,05 g/cm3', '52,4 ml', 'Lägre densitet innebär mer volym'],
        ['55 g', '1,20 g/cm3', '45,8 ml', 'Fyllda eller keramiska harts kan vara tätare'],
      ],
    },
    {
      type: 'tip',
      title: 'Hitta densiteten på det tekniska databladet',
      html: 'Använd förinställningskatalogen för vanliga hartset och behandla densitetsinmatningen som den slutliga sanningskällan. Om ditt exakta harts, färg eller batch skiljer sig från förinställningen, åsidosätt fältet med värdet från tillverkarens tekniska datablad. Anta inte att alla hartset är 1,00 g/ml.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Densitet', definition: 'Massa per volymenhet. Vid hartskostnadsberäkning gör det det möjligt att omvandla gram från slidern till milliliter från flaskan.' },
        { term: 'Teoretisk kostnad', definition: 'Den rena slidervolymen multiplicerad med flaskkostnaden per milliliter, före avfallskorrigering.' },
        { term: 'Korrigerad volym', definition: 'Modellvolymen efter tillägg av den valda avfallsfaktorn på 10, 12,5 eller 15 procent.' },
        { term: 'Dräneringshål', definition: 'En öppning i en ihålig hartset som låter ohärdat harts lämna insidan före tvätt och härdning.' },
      ],
    },
    {
      type: 'title',
      text: 'Varför ihåliga hartsutskrifter ofta kostar mer än förväntat',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Att urholka en stor modell kan dramatiskt minska volymen härdat harts, men det gör inte utskriften fri från dolda kostnader. Ihåliga väggar behöver dräneringshål, den inre geometrin måste vara tvättbar och ohärdat harts som fastnat inuti modellen kan läcka ut senare, spricka delen eller störa den slutgiltiga härdningen. Slidern kan visa en mycket lägre netto volym efter urholkning, men hanteringsprocessen blir mer känslig. Därför använder hög komplexitet 15 procent som standard.',
    },
    {
      type: 'proscons',
      title: 'Urholkning och kostnadskontroll',
      items: [
        { pro: 'Stora utställningsmodeller kan använda mycket mindre härdat harts.', con: 'Dålig dränering kan hålla flytande harts inuti delen.' },
        { pro: 'Lägre avdragskrafter kan förbättra framgången på stora tvärsnitt.', con: 'Extra hål, pluggar och rengöringstid kan öka arbetet.' },
        { pro: 'En lättare modell är lättare att skicka och montera.', con: 'Tunna väggar kan misslyckas om väggtjocklek och exponering inte är inställd.' },
      ],
    },
    {
      type: 'card',
      title: 'Praktisk ihålig utskriftsregel',
      html: 'Om en ihålig del kommer ut ur skrivaren och fortfarande droppar efter normal dränering, använd den höga faktorn och inspektera dräneringshålets layout. Om den fortsätter att läcka efter tvätt, är problemet inte bara kostnaden; det kan bli ett kvalitets- och säkerhetsproblem eftersom ohärdat hartset finns kvar inuti föremålet.',
    },
    {
      type: 'title',
      text: 'Läsa slideruppskattningar utan att underofferera',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Lychee, Chitubox, PrusaSlicer och andra hartssliderar uppskattar hartsförbrukningen från maskor, stöd, urholkning och ibland hartsprofil. Dessa uppskattningar är tillräckligt bra för att jämföra versioner av samma jobb. De är svagare som slutgiltig offert eftersom de inte känner till ditt arbetsflöde. En verkstad som filtrerar hartset efter varje jobb förlorar en annan mängd än en hobbyist som behåller samma hartset i badet. En användare som tvättar i två IPA-steg förlorar en annan mängd än en som använder en förseglad tvättstation och låter delarna droppa helt innan de flyttas.',
    },
    {
      type: 'list',
      items: [
        'Ange uppskattningen för hela plattan efter stöd, inte den ursprungliga ostödda maskvolymen.',
        'Använd samma valuta för flaskpris och slutgiltig offert; kalkylatorn kan konvertera det synliga flaskpriset mellan vanliga valutor med ungefärliga växelkursfaktorer.',
        'Uppdatera flaskpriset vid köp av specialharts, eftersom gjutharts, flexibla, dentala och högtemperaturhartset kan kosta flera gånger mer än standardharts.',
        'Använd densitetskonvertering när slidermassan och flaskvolymen inte delar samma enhet.',
        'Håll feltalen separat, särskilt vid utskrift av ömtåliga miniatyrer, tunna dentala skal eller nya stödstrategier.',
      ],
    },
    {
      type: 'message',
      title: 'Bättre offertvanor',
      html: 'Spara dina vanliga hartsflaskdata, klistra in slideruppskattningen, välj komplexitet och anteckna båda siffrorna. Den teoretiska kostnaden förklarar slideruppskattningen; den verkliga kostnaden skyddar ditt materiallager.',
    },
    {
      type: 'title',
      text: 'Vad denna kalkylator inte innehåller',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En hartset har fler kostnader än bara hartset. Detta verktyg fokuserar avsiktligt på variabel hartsförbrukning eftersom det är den siffra som oftast underskattas när man jämför sliderutdata med verklig flaskförbrukning. Det inkluderar inte alkoholersättning, rengöringsmedel, vattenbehandling, pappershanddukar, engångshandskar, FEP-eller släppfilms-slitage, LCD-skärmens åldrande, skrivaravskrivning, el, efterhärdningstid, slipning, grundning, borttagning av stöd, förpackning eller marknadsplatsavgifter.',
    },
    {
      type: 'table',
      headers: ['Kostnadspost', 'Ingår här?', 'Var att redovisa'],
      rows: [
        ['Flytande hartset som används vid utskrift', 'Ja', 'Denna kalkylator'],
        ['Hartsrester och normalt hanteringsavfall', 'Ja', 'Komplexitetsfaktor'],
        ['Misslyckade utskrifter', 'Nej', 'Lägg till feltolerans efter material och modellrisk'],
        ['IPA, handskar, handdukar, filter', 'Nej', 'Förbrukningsartikel'],
        ['Borttagning av stöd och slipning', 'Nej', 'Arbets- eller efterbehandlingspost'],
        ['Skrivaravskrivning', 'Nej', 'Timtaxa maskin'],
      ],
    },
    {
      type: 'summary',
      title: 'Pålitligt arbetsflöde för hartskostnad',
      items: [
        'Beräkna priset per milliliter från flaskan du faktiskt köpte.',
        'Omvandla gram till milliliter med hartsdensitet vid behov.',
        'Använd sliderutdata efter stöd och urholkning.',
        'Tillämpa en korrigering på 10 till 15 procent baserat på geometri och hanteringsförlust.',
        'Håll misslyckanden, arbete, förbrukningsvaror och marginal utanför hartset materialnummer.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
