import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InfillWeightSimulatorUI } from '../ui';

const slug = '3d-print-vikt-infill-procent-raknare';
const title = '3D Print Vikt Infill Procent Räknare';
const description =
  'Uppskatta delvikt, sparad filament och materialkostnad när du ändrar infill-procent och -mönster från en 100% infill referensvikt.';

const faqData = [
  {
    question: 'Kan jag uppskatta 3D-printvikt från 100% infill-vikt?',
    answer:
      'Ja, men uppskattningen bör hålla skal, väggar, topplager och bottenlager separerade från den interna infillen. En del blir inte viktlös vid 0% infill eftersom den yttre omkretsen fortfarande använder material.',
  },
  {
    question: 'Varför ändrar infill-mönstret den uppskattade vikten?',
    answer:
      'Olika mönster skapar olika verktygsspårlängder vid samma nominella densitet. Linje- och koncentriska mönster är vanligtvis lättare, medan bikaka, kubisk och trianglar tenderar att lägga till mer inre vägglängd.',
  },
  {
    question: 'Är slicer-vikten mer exakt än den här räknaren?',
    answer:
      'En slicer är mer exakt när modellen, munstycket, extruderingsbredden, väggantalet, topplagren och materialprofilen är kända. Den här räknaren är designad för snabb planering innan du skivar om många versioner.',
  },
  {
    question: 'Vilken skalprocent ska jag använda?',
    answer:
      'För många dekorativa eller medelstora FDM-delar är 20-35% skalandel ett praktiskt startintervall. Små delar, tunna objekt och delar med många hål kan ha en högre skalandel.',
  },
];

const howToData = [
  {
    name: 'Börja från en 100% infill-referens',
    text: 'Använd vikten som din slicer rapporterar för samma modell vid 100% infill, eller väg en känd helt tät referensutskrift.',
  },
  {
    name: 'Välj mål-infill och mönster',
    text: 'Flytta infill-reglaget och välj det mönster som ligger närmast den slicer-inställning du planerar att använda.',
  },
  {
    name: 'Justera skal- och spillantaganden',
    text: 'Öka skalandelen för tunna eller perimeter-tunga modeller, lägg sedan till spill för rengöring, kjol, brätte, stöd och misslyckade starter.',
  },
  {
    name: 'Läs vikt- och kostnadsbesparingar',
    text: 'Jämför den slutliga uppskattade vikten med 100% infill-baslinjen för att avgöra om materialbesparingen är värd styvhetskompromissen.',
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
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<InfillWeightSimulatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Infill-vikt inmatningar',
    resultsAriaLabel: 'Uppskattade resultat för utskriftsvikt',
    unitSystemLabel: 'Enheter',
    metricLabel: 'Metriskt',
    imperialLabel: 'US',
    currencyLabel: 'Valuta',
    currencyOptions: [
      { code: 'USD', label: '$', symbol: '$' },
      { code: 'EUR', label: '€', symbol: '€' },
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
    fullWeightLabel: '100% infill-vikt',
    fullWeightHint: 'Använd slicer-värdet för samma modell vid full densitet.',
    infillLabel: 'Mål-infill',
    patternLabel: 'Infill-mönster',
    patternOptions: [
      { value: 'lines', label: 'Linjer - lätta spår' },
      { value: 'grid', label: 'Rutnät - slicer-baslinje' },
      { value: 'triangles', label: 'Trianglar - styva celler' },
      { value: 'gyroid', label: 'Gyroid - slät gitter' },
      { value: 'cubic', label: 'Kubisk - 3D-styvhet' },
      { value: 'honeycomb', label: 'Bikaka - täta väggar' },
      { value: 'concentric', label: 'Koncentrisk - följer kontur' },
    ],
    shellShareLabel: 'Skalandel',
    shellShareHint: 'Väggar, topplager, bottenlager och solida egenskaper som inte skalar med infill.',
    spoolPriceLabel: 'Filamentpris',
    wasteLabel: 'Spill',
    estimatedWeightLabel: 'Uppskattad delvikt',
    filamentSavedLabel: 'Filament sparat',
    materialCostLabel: 'Materialkostnad',
    costSavedLabel: 'Kostnad sparad',
    effectiveDensityLabel: 'Effektiv densitet',
    shellLabel: 'Skal',
    infillCoreLabel: 'Infill-kärna',
    patternImpactLabel: 'Mönstermultiplikator',
    comparisonLabel: 'Baslinjejämförelse',
    fullInfillLabel: '100% infill',
    targetInfillLabel: 'Målkonfiguration',
    insightLow: 'Mycket låg infill kan spara mycket filament, men toppytor, skruvbossar, clips och lastbärande zoner kan behöva extra väggar eller lokala modifierare.',
    insightBalanced: 'Detta är en balanserad planeringszon för många visuella och lätta funktionella utskrifter: skalet bär formen medan infill styr styvhet och kostnad.',
    insightHigh: 'Hög infill minskar besparingsgapet snabbt. Överväg fler väggar, ett starkare mönster eller materialval innan du använder tät infill överallt.',
  },
  seo: [
    { type: 'title', text: 'Hur en 3D-print vikt infill procent räknare fungerar', level: 2 },
    {
      type: 'paragraph',
      html: 'En <strong>3D-print vikt infill procent räknare</strong> uppskattar hur mycket plast som blir kvar när en modell skrivs ut med mindre än 100% inre densitet. Den viktiga detaljen är att FDM-vikt inte är en enkel multiplikation av full vikt med infill-procent. En modell utskriven med 20% infill väger vanligtvis inte 20% av den helt täta versionen, eftersom väggar, topplager, bottenlager, små solida områden, brätten och stödgränssnitt fortfarande förbrukar filament. Den här räknaren börjar med den kända eller slicer-rapporterade vikten vid 100% infill, separerar en konfigurerbar skalandel och skalar sedan den inre kärnan efter mål-infill och mönsterbeteende.',
    },
    {
      type: 'paragraph',
      html: 'Metoden är designad för snabb jämförelse innan du lägger tid på att skiva om en fil många gånger. Om ett helt tätt PETG-fäste uppskattas till 240 g, ger byte till 20% gyroid kanske inte en 48 g-del. Med 28% skalandel är perimetermassan redan cirka 67 g innan inre densitet räknas. Infill-kärnan lägger sedan till material enligt vald densitet och mönstermultiplikator. Resultatet är en planeringsuppskattning som är mer realistisk än linjär infill-matematik men ändå tillräckligt snabb för tidiga beslut.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '20-35%', label: 'Typisk skalandel för många medelstora FDM-delar', icon: 'mdi:cube-outline' },
        { value: '0,88x', label: 'Lätt konturmultiplikator för koncentrisk infill', icon: 'mdi:chart-line' },
        { value: '1,16x', label: 'Tät spårmultiplikator för bikakeplanering', icon: 'mdi:hexagon-multiple' },
        { value: '100%', label: 'Referensvikt som används som baslinje för besparingar', icon: 'mdi:weight-gram' },
      ],
    },
    {
      type: 'tip',
      title: 'Använd samma slicer profil för referensen',
      html: '<p>För den renaste uppskattningen, generera 100% infill-vikten med samma munstycke, extruderingsbredd, väggantal, topplager, bottenlager, materialdensitet och stödinställning som du kommer att använda för målutskriften. Att ändra dessa inställningar ändrar skal-massan, så infill-jämförelsen blir mindre meningsfull.</p>',
    },

    { type: 'title', text: 'Varför infill-vikt inte är linjär', level: 2 },
    {
      type: 'paragraph',
      html: 'Uttrycket <em>infill-procent</em> låter som ett direkt densitetsvärde, men skivare tillämpar det bara på det inre området som blir kvar efter att perimetrar och solida ytor har genererats. En enkel kub med två väggar och sex topplager kan ha en stor inre volym, så infill-procent påverkar vikten kraftigt. En tunn telefonhållare, ett växelhus med många hål eller en miniatyr med smala lemmar kan ha så mycket perimetergeometri att en sänkning av infill ger mindre besparing än förväntat. Det är därför räknaren exponerar <strong>skalandel</strong> istället för att dölja den.',
    },
    {
      type: 'table',
      headers: ['Modelltyp', 'Trolig skalandel', 'Vad det betyder för besparingar'],
      rows: [
        ['Stor rektangulär kapsling', '15-25%', 'Mest massa är inre volym, så infill ändrar vikten kraftigt.'],
        ['Dekorativ figur eller organisk modell', '25-45%', 'Många kurvor och smala områden skapar perimeter-tung geometri.'],
        ['Tunt fäste eller panel', '35-60%', 'Väggar och ytor dominerar; infill-minskning kan spara mindre plast.'],
        ['Liten mekanisk klämma', '45-70%', 'Modellen kan vara nästan solid från enbart perimetrar.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'När uppskattningen verkar för tung',
      badge: 'Kontrollera skalandel',
      html: '<p>Om en 10% infill-inställning fortfarande ger en hög uppskattad vikt är skalandelen troligen stor. Det kan vara korrekt för små eller tunna delar. Verifiera väggantal, topp- och bottenstjocklek och om modellen har många separata öar eller smala ribbor.</p>',
    },
    {
      type: 'summary',
      title: 'Praktisk tolkning',
      items: [
        'Infill-procent påverkar bara den inre kärnan, inte hela utskriften.',
        'En 0% infill-del har fortfarande väggar, skinn, sömmar och ibland solida små egenskaper.',
        'Fullviktsreferens, skalandel, mönsterval och spillmarginal ger tillsammans ett bättre planeringsnummer.',
      ],
    },

    { type: 'title', text: 'Infill-mönstrets viktmultiplikatorer', level: 2 },
    {
      type: 'paragraph',
      html: 'Två utskrifter kan båda vara inställda på 25% infill och ändå använda olika mängder filament eftersom verktygsspårgeometrin ändras. Linje- och koncentriska mönster ger ofta lättare inre spår eftersom de undviker vissa korsningsstrukturer. Rutnät, trianglar, kubisk, gyroid och bikaka skapar olika mängder överlappning, riktningsförstärkning och spårlängd. Räknaren modellerar detta med en liten <strong>mönstermultiplikator</strong> som tillämpas på den inre kärnan, inte på hela delen.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Linjer och koncentrisk',
          description: 'Användbart när minimal vikt och snabb utskrift är viktigare än enhetlig styvhet.',
          icon: 'mdi:format-line-spacing',
          points: ['Lägre spårdensitet', 'Bra för dekorativa delar', 'Riktningsstyrka kan vara ojämn'],
        },
        {
          title: 'Rutnät och gyroid',
          description: 'Balanserade val för vanliga visuella och funktionella utskrifter där styvhet spelar roll.',
          icon: 'mdi:grid',
          highlight: true,
          points: ['Förutsägbar slicer-baslinje', 'Bra styvhet-vikt-avvägning', 'Gyroid fördelar laster jämnt'],
        },
        {
          title: 'Kubisk, trianglar, bikaka',
          description: 'Tyngre planeringsval som kan förbättra styvhet men minskar filamentsparande.',
          icon: 'mdi:hexagon-outline',
          points: ['Mer inre vägglängd', 'Bättre flerriktningsstyvhet', 'Längre utskriftstid är vanligt'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Mönstervalsavvägningar',
      items: [
        { pro: 'Lättare mönster minskar materialkostnad och kan förkorta utskriftstiden.', con: 'De kan skapa svagare riktningar eller mindre toppytsstöd.' },
        { pro: 'Täta mönster förbättrar känslan av styva delar och minskar böjning.', con: 'De kan närma sig kostnaden för högre infill utan att lösa svag väggdesign.' },
        { pro: 'Gyroid fördelar laster jämnt i många riktningar.', con: 'Det kan skriva ut långsammare på maskiner med konservativa accelerationsinställningar.' },
      ],
    },
    {
      type: 'message',
      title: 'Mönstermultiplikatorer är planeringsantaganden',
      ariaLabel: 'Not om mönstermultiplikator',
      html: '<p>Skivare implementerar mönster olika. Behandla multiplikatorn som en tidig uppskattare och bekräfta viktiga produktionsjobb med en riktig slicer-förhandsvisning och materialanvändningsrapporten.</p>',
    },

    { type: 'title', text: 'Beräkning av filament- och kostnadsbesparingar', level: 2 },
    {
      type: 'paragraph',
      html: 'Materialkostnadsuppskattningen multiplicerar slutliga gram med spolpriset per kilogram. Om räknaren förutsäger en 126 g utskrift och spolen kostar 24 $ per kg, är plastdelen cirka 3,02 $ före maskintid, el, arbete, förpackning och misslyckade utskrifter. Den sparade kostnaden jämför samma modell med 100% infill-baslinjen med samma spillprocent. Detta är användbart för offerter, batchplanering och att avgöra om en tyngre infill-inställning är värt det extra materialet.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Använd spillprocent för rengöringslinjer, kjolar, brätten, stöd, flottar, färgbyten och korta misslyckade starter.',
        'För enstaka prototyper är 5-10% spillmarginal vanligtvis mer realistiskt än noll.',
        'För produktionsbatcher med stöd eller slipande material, registrera faktisk överbliven och misslyckad vikt över flera jobb.',
        'När du jämför PLA, PETG, ABS, ASA, nylon och fyllda kompositer, använd spolpriset för det exakta materialet, inte ett generiskt medelvärde.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:cash-multiple',
      title: 'Exempel: från tät prototyp till produktions infill',
      html: '<p>En 100% infill-prototyp väger 240 g. Med 28% skalandel, 20% gyroid, 6% spill och 24 $/kg filament hamnar uppskattningen på låga hundratal gram snarare än 48 g. Den skillnaden spelar roll när du offererar 40 kopior: små fel per del blir hela spolar av plast.</p>',
    },
    {
      type: 'table',
      headers: ['Indata', 'Varför det är viktigt', 'Vanligt misstag'],
      rows: [
        ['100% vikt', 'Definierar den maximala materialbaslinjen.', 'Använda ett annat väggantal än målutskriften.'],
        ['Mål-infill', 'Styr den inre kärnans densitet.', 'Anta att 20% infill betyder 20% av totala delvikten.'],
        ['Mönster', 'Ändrar verktygsspårlängd och styvhet.', 'Ignorera mönster vid jämförelse av slicer-förinställningar.'],
        ['Spill', 'Lägger till verkligt filament som används utanför slutdelen.', 'Glömma stöd och misslyckade starter.'],
      ],
    },

    { type: 'title', text: 'Välja infill för viktbesparing utan svaga delar', level: 2 },
    {
      type: 'paragraph',
      html: 'Viktbesparing är bara värdefull om delen fortfarande utför sin funktion. För visuella modeller, display-rekvisita, cosplay-delar och lock kan låg infill med tillräckliga topplager vara perfekt. För fästen, fixturer, kapslingar med skruvar, snäppfunktioner och delar utsatta för värme eller stötar är den bästa förbättringen ofta fler väggar eller lokal förstärkning snarare än att helt enkelt höja den globala infillen. En del med fyra väggar och 20% gyroid kan vara starkare på rätt ställen än en del med två väggar och 50% infill.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Skalandel', definition: 'Den del av den helt täta vikten som tillhör väggar, topplager, bottenlager och oundviklig solid geometri.' },
        { term: 'Nominell infill', definition: 'Procentandelen som valts i skivaren för det inre området efter att skal har genererats.' },
        { term: 'Effektiv densitet', definition: 'Den uppskattade totala densiteten för den färdiga utskriften efter kombination av skalandel, infill-procent och mönstermultiplikator.' },
        { term: 'Spillmarginal', definition: 'Extra filament som används för icke-del-material såsom rengöring, brätte, stöd, tester och misslyckade starter.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Använd inte viktbesparing som enda designkriterium',
      badge: 'Funktionella utskrifter',
      html: '<p>Delar som belastas över lagerlinjer, delar med gänginsatser och delar med skruvkompression behöver separat mekaniskt tänkande. Infill hjälper, men väggtjocklek, orientering, material, temperatur och spänningskoncentration är ofta viktigare än densitet ensam.</p>',
    },
    {
      type: 'summary',
      title: 'Snabba beslutingsregler',
      items: [
        'Dekorativa utskrifter: minska infill först, kontrollera sedan toppytans kvalitet.',
        'Lätta funktionella utskrifter: använd ett balanserat mönster och tillräckligt med väggar före hög infill.',
        'Fästen och fixturer: förstärk hål, hörn och lastvägar med lokala modifierare.',
        'Batchjobb: bekräfta slutuppskattningen med skivaren innan du köper material.',
      ],
    },

    { type: 'title', text: 'När ska man lita på räknaren och när ska man skiva om', level: 2 },
    {
      type: 'paragraph',
      html: 'Denna räknare är bäst för snabba uppskattningar, tidiga offerter, materialinköp och jämförelse av många infill-alternativ utan att upprepade gånger öppna skivaren. Den är inte en ersättning för skivaren när dimensionella inställningar ändras. Om du ändrar munstycksdiameter, extruderingsbredd, väggantal, topptjocklek, bottenstjocklek, adaptiva lager, stödstil, strykning, vasläge eller materialdensitet måste 100%-baslinjen och skalandelen uppdateras.',
    },
    {
      type: 'list',
      icon: 'mdi:calculator-variant-outline',
      items: [
        'Använd räknaren när modellen och profilen förblir mestadels fixerade och du utforskar densitet eller mönster.',
        'Skiva om när väggantal, stödgenerering, munstycksstorlek eller materialprofil ändras.',
        'Väg en färdig del när du behöver produktionsnära kostnadsregister eller lagerprognoser.',
        'Registrera faktiska gram för upprepade jobb; verkliga data kommer snabbt att förbättra dina skalandelsantaganden.',
      ],
    },
    {
      type: 'tip',
      title: 'Ett tillförlitligt arbetsflöde för offerter',
      html: '<p>Skapa en helt tät slicer-referens, uppskatta flera infill-alternativ med denna räknare, välj de två mest lovande och skiva sedan om bara de två slutliga kandidaterna. Detta håller offerter snabba samtidigt som slutpriserna fortfarande grundar sig på slicer-specifika materialrapporter.</p>',
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
