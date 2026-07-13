import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AdditiveProductionEfficiencyCalculatorUI } from '../ui';

const slug = 'additiv-produktion-effektivitet-kalkylator';
const title = 'Kalkylator för effektivitet vid additiv produktion';
const description =
  'Jämför batchnivåutskrift och sekventiell utskrift med utskriftstid, förvärmningsomkostnad, resövergångar, rensningstid, statistisk felrisk och en automatisk rekommendation om genomförbarhet.';

const faqData = [
  {
    question: 'När är batchnivåutskrift snabbare än sekventiell utskrift?',
    answer:
      'Batchnivåutskrift är vanligtvis snabbare när förvärmningen är betydande, delarna får plats på byggplattan på ett säkert sätt, reseavståndet mellan delarna är måttligt och den historiska feltoleransen är tillräckligt låg för att den kombinerade batchrisken ska hållas under den kritiska tröskeln.',
  },
  {
    question: 'Varför kan sekventiell utskrift rekommenderas även om det tar längre tid?',
    answer:
      'Sekventiell utskrift begränsar förlusten från en misslyckad del. Om batchrisken beräknad som 1 - (1 - feltolerans)^N överskrider den kritiska tröskeln, rekommenderar kalkylatorn sekventiell utskrift för att skydda produktionskön.',
  },
  {
    question: 'Ersätter kalkylatorn skärarens uppskattningar?',
    answer:
      'Nej. En skärare känner till exakta verktygsbanor, accelerationer, extruderingsbredder, kylning och kollisionsavstånd. Denna kalkylator är avsedd för produktionsplanering före skärning, särskilt när man jämför ett enda helbäddsjobb med upprepade enkeldelsjobb.',
  },
  {
    question: 'Vilken feltolerans ska jag ange?',
    answer:
      'Använd din egen verksamhetshistorik för liknande material, skrivare, geometri och operatörsförhållanden. Om du inte följer upp det ännu, börja konservativt med 2-5% för inställd FDM-produktion och höj för nya material, långa jobb eller dåligt validerade fixturer.',
  },
];

const howToData = [
  { name: 'Ange antalet', text: 'Ställ in det totala antalet delar som krävs för produktionskörningen.' },
  { name: 'Lägg till tidsinställningar', text: 'Ange utskriftstid per del, förvärmningstid, övergångsavstånd, reshastighet samt rensnings- eller stabiliseringstid.' },
  { name: 'Ställ in historisk risk', text: 'Använd en felprocent från jämförbara jobb och välj den maximalt acceptabla batchrisken.' },
  { name: 'Läs rekommendationen', text: 'Jämför total tid, sparad tid, relativ effektivitet, övergångsomkostnad och statistisk batchrisk.' },
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
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<AdditiveProductionEfficiencyCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Inmatningar för effektivitet vid additiv produktion',
    resultsAriaLabel: 'Resultat för effektivitet vid additiv produktion',
    visualizerAriaLabel: 'Visualisering av generativ risk och bäddlayout',
    unitSystemLabel: 'Enheter',
    metricLabel: 'Metriska',
    imperialLabel: 'US',
    piecesLabel: 'Delar',
    unitPrintTimeLabel: 'Utskriftstid per del (min)',
    preheatTimeLabel: 'Förvärmningstid (min)',
    transitionDistanceLabel: 'Genomsnittlig övergång',
    travelSpeedLabel: 'Reshastighet',
    failureRateLabel: 'Historisk feltolerans',
    purgeTimeLabel: 'Rensning / stabilisering (min)',
    criticalRiskLabel: 'Kritisk batchrisk',
    batchLabel: 'Batchnivåutskrift',
    sequentialLabel: 'Sekventiell utskrift',
    recommendationLabel: 'Rekommenderad strategi',
    savingsLabel: 'Absolut tidsbesparing',
    efficiencyLabel: 'Relativ effektivitet',
    riskLabel: 'Batchfelrisk',
    layoutLabel: 'Byggplattans koreografi',
    transitionLabel: 'Övergångsomkostnad',
    batchWinsLabel: 'Batch',
    sequentialWinsLabel: 'Sekventiell',
    riskOverrideLabel: 'riskåsidosättning',
    fasterLabel: 'sparad',
    slowerLabel: 'extra',
    lowRiskLabel: 'Låg batchrisk',
    moderateRiskLabel: 'Måttlig batchrisk',
    criticalRiskStatusLabel: 'Kritisk batchrisk',
    minutesUnit: 'min',
    percentUnit: '%',
    millimeterUnit: 'mm',
    inchUnit: 'tum',
    metricSpeedUnit: 'mm/s',
    imperialSpeedUnit: 'tum/s',
  },
  seo: [
    { type: 'title', text: 'Batchnivåutskrift vs Sekventiell utskrift: Vad kalkylatorn mäter', level: 2 },
    {
      type: 'paragraph',
      html: 'Att välja mellan <strong>batchnivåutskrift och sekventiell utskrift</strong> handlar inte bara om att fylla byggplattan. En helbäddsbatch kan spara uppvärmningstid och minska operatörsingripanden, men koncentrerar produktionsrisken till ett långt exponeringsfönster. Sekventiell utskrift upprepar inställningsomkostnaden, men isolerar fel så att en dålig del inte automatiskt kontaminerar värdet på hela byggplattan. Denna kalkylator omvandlar den avvägningen till siffror: totala minuter, resövergångar, relativ effektivitet och statistisk batchrisk.',
    },
    {
      type: 'paragraph',
      html: 'Batchformeln är <code>Tbatch = Tc + (N x Tp) + ((N x Dtrans) / (Vtravel x 60))</code>. Den sekventiella formeln är <code>Tseq = N x (Tc + Tp + Tpurge)</code>. Riskformeln är <code>Riskbatch = 1 - (1 - Pfel)^N</code>. Dessa ekvationer är avsiktligt transparenta eftersom produktionsplanering är lättare när skälet bakom en rekommendation är synligt snarare än gömd i en svart låda.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '1', label: 'Förvärmningscykel i batchläge', icon: 'mdi:heat-wave' },
        { value: 'N', label: 'Förvärmningscykler i sekventiellt läge', icon: 'mdi:repeat' },
        { value: '60', label: 'Sekunder som används för att normalisera resor till minuter', icon: 'mdi:timer-outline' },
        { value: '1 - (1-p)^N', label: 'Sammansatt batchfelsmodell', icon: 'mdi:chart-bell-curve' },
      ],
    },
    {
      type: 'tip',
      title: 'Använd en konsekvent definition av fel',
      html: '<p>En feltolerans är bara användbar om verkstaden definierar fel konsekvent. Bestäm om det inkluderar kosmetiska defekter, dimensionsavvikelser, stödärr, första lager-fel, spoletrassel, strömavbrott och operatörsborttagningar. Blandning av definitioner får riskmodellen att se precis ut samtidigt som den matas med brusiga data.</p>',
    },
    { type: 'title', text: 'Hur batchnivåutskrift sparar tid', level: 2 },
    {
      type: 'paragraph',
      html: 'Batchnivåutskrift vinner normalt på maskinutnyttjande när förvärmningstiden är stor jämfört med utskriftstiden för en enskild del. Att värma bädden och munstycket en gång för en körning med 24 delar kan undvika 23 upprepade uppvärmningscykler. I en farmmiljö spelar detta roll eftersom uppvärmning är död kapacitet: skrivaren förbrukar kalendertid, energi och operatörens uppmärksamhet innan någon säljbar geometri produceras.',
    },
    {
      type: 'paragraph',
      html: 'Restermen förhindrar att modellen låtsas att batchlayouter är gratis. Varje del kan lägga till en icke-skrivande övergång där munstycket korsar plattan, undviker öar, utför combing-rörelser eller flyttar till nästa objektsgräns. Kalkylatorn använder genomsnittligt övergångsavstånd och reshastighet för att uppskatta denna omkostnad i minuter. Termen är liten på kompakta layouter och mer synlig när delar är utspridda över en stor bädd.',
    },
    {
      type: 'table',
      headers: ['Batchvariabel', 'Produktionsbetydelse', 'Planeringsmisstag den förhindrar'],
      rows: [
        ['N', 'Totalt antal delar i körningen', 'Att behandla en bädd med tio delar som tio isolerade jobb utan gemensam förvärmning.'],
        ['Tp', 'Utskriftstid för en komplett del', 'Att använda lagertid från endast en liten detalj istället för en uppskattning av färdig del.'],
        ['Tc', 'Uppvärmningstid för bädd och munstycke', 'Att ignorera tiden innan extruderingen startar när kökapacitet beräknas.'],
        ['Dtrans', 'Genomsnittligt avstånd mellan delar', 'Att anta att en packad bädd inte har någon rörelsestraff för icke-extrudering.'],
        ['Vtravel', 'Huvudets reshastighet', 'Att glömma att långsamma resprofiler gör utspridda arrayer mindre effektiva.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Batchtiden är mest känslig för förvärmning och antal',
      badge: 'Kapacitetsplanering',
      html: '<p>Om förvärmningen är 12 minuter och jobbet innehåller 30 delar, lägger sekventiellt läge 360 minuter bara på att upprepa uppvärmning. Batchläget lägger dessa 12 minuter en gång. Det är därför samma skrivare kan se dramatiskt mer produktiv ut när små delar placeras noggrant.</p>',
    },
    { type: 'title', text: 'Varför sekventiell utskrift fortfarande vinner i riskfyllda jobb', level: 2 },
    {
      type: 'paragraph',
      html: 'Sekventiell utskrift kan se långsammare ut eftersom skrivaren upprepar förvärmning och rensnings- eller stabiliseringstid för varje enhet. Fördelen är inneslutning. Om del 17 misslyckas i en sekventiell plan kan de föregående 16 delarna redan vara klara och borttagna. Om del 17 misslyckas i en batch på grund av munstycksdrag, vidhäftningsförlust, termisk krypning eller ett materialproblem, kan det misslyckade objektet slå in i närliggande delar eller få operatören att skrota hela plattan.',
    },
    {
      type: 'paragraph',
      html: 'Riskmodellen sammansätter historisk felssannolikhet över antalet delar. En feltolerans på 3% för enskild del betyder inte att en batch med 24 delar har 3% risk. Sannolikheten att varje del lyckas är <code>(1 - 0,03)^24</code>, och sannolikheten att minst en del misslyckas är komplementet. Detta gör stora batcher mindre attraktiva när processen inte är stabil.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Batchnivåutskrift',
          description: 'Bäst när processen är stabil, delarna har stark vidhäftning, bäddlayouten är kollisionssäker och förvärmningstiden dominerar schemat.',
          icon: 'mdi:grid',
          highlight: true,
          points: ['En uppvärmningscykel', 'Hög genomströmning', 'Högre exponering för delade fel'],
        },
        {
          title: 'Sekventiell utskrift',
          description: 'Bäst när defekter är dyra, jobben är höga, material är känsliga eller användaren vill isolera varje del från nästa.',
          icon: 'mdi:format-list-numbered',
          points: ['Felinneslutning', 'Mer upprepad omkostnad', 'Kräver frigångsplanering'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Produktionsriskavvägning',
      items: [
        { pro: 'Batchnivåutskrift minskar stilleståndstid för uppvärmning och kan slutföra små repetitiva delar i en enda obevakad körning.', con: 'Ett vidhäftnings- eller extruderingsfel kan hota hela plattan och förbruka ett långt operatörsåterställningsfönster.' },
        { pro: 'Sekventiell utskrift gör det lättare att validera en enhet, ta bort den och fortsätta med mindre ackumulerad förlust.', con: 'Upprepad uppvärmning och stabilisering kan förbruka mer tid än själva geometrin på små delar.' },
        { pro: 'En batch kan förenkla packningen eftersom alla delar blir klara samtidigt.', con: 'En lång batch utsätter varje enhet för samma miljödrift, spolproblem eller termiska nedbrytningsperiod.' },
      ],
    },
    { type: 'title', text: 'Att välja en kritisk tröskel för batchrisk', level: 2 },
    {
      type: 'paragraph',
      html: 'Den kritiska risktröskeln är gränsen där kalkylatorn växlar rekommendation från tidsoptimering till genomförbarhetsskydd. En prototypverkstad kan tolerera 45% batchrisk om materialet är billigt och operatören experimenterar. En produktionsfarm som levererar kunddelar kan använda 15-25% för vanliga material och lägre trösklar för nattjobb, dyra ingenjörspolymerer eller delar med hög efterbearbetningsinsats.',
    },
    {
      type: 'table',
      headers: ['Tröskel', 'Bra användningsområde', 'Tolkning'],
      rows: [
        ['10-20%', 'Dyra delar, nattjobb, kundorder med högt värde', 'Skydda tillförlitligheten även när batchläge sparar tid.'],
        ['25-35%', 'Normal inställd FDM-produktion med känt material', 'Balanserad tröskel för tidsbesparing och defektexponering.'],
        ['40-60%', 'Interna prototyper eller billiga fixturer', 'Accepterar högre risk för att frigöra skrivarkapacitet snabbare.'],
        ['Över 60%', 'Endast utforskning', 'Användbar för att se tidspotential, men svag som produktionsgenomförbarhetsregel.'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:clipboard-pulse-outline',
      title: 'Hur du uppskattar din starttolerans för fel',
      html: '<p>Granska de senaste 50 till 200 jämförbara utskrifterna på samma skrivarfamilj. Räkna jobb som krävde omutskrift, manuell räddning eller kundavvisning. Dela fel med totala försök, separera sedan efter material och geometri när tillräckligt med data finns. PLA-fästen, PETG-klämmor, ASA-kapslingar och TPU-packningar bör inte dela en generisk risksiffra.</p>',
    },
    {
      type: 'summary',
      title: 'Regler för risktröskel',
      items: [
        'Sänk tröskeln när material, deadline eller efterbearbetningskostnad är hög.',
        'Höj den endast när misslyckade delar är billiga och kön drar nytta av aggressiv batchnings.',
        'Räkna om efter processförändringar som en ny bäddyta, munstycke, filamentleverantör eller kammartemperatur.',
      ],
    },
    { type: 'title', text: 'Resövergångar, huvudrörelse och layouteffektivitet', level: 2 },
    {
      type: 'paragraph',
      html: 'Resövergångar är den dolda kostnaden för effektivitet vid utskrift på plats. En skärare kan hoppa från en del till en annan många gånger per lager, särskilt när flera objekt delar samma Z-höjd. Det genomsnittliga övergångsavståndet behöver inte vara perfekt; det behöver bara representera om layouten är kompakt, måttligt utspridd eller spridd över byggytan. En kompakt array med 25 mm genomsnittliga övergångar beter sig mycket annorlunda än en helbäddslayout med 180 mm hopp.',
    },
    {
      type: 'paragraph',
      html: 'Reshastigheten bör återspegla den verkliga profilen, inte maskinens annonserade maxvärde. Accelerationsgränser, firmware-inställningar, alternativ för att undvika korsande perimeter, Z-hop och combing-strategi kan göra effektiv resa långsammare än skärarens fält föreslår. Om en maskin använder konservativ resa för ömtåliga första lager eller höga delar, sänk värdet för att undvika att överskatta batcheffektivitet.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Batchnivåutskrift', definition: 'Utskrift av flera kopior eller objekt i ett gemensamt jobb på byggplattan.' },
        { term: 'Sekventiell utskrift', definition: 'Utskrift av ett objekt i taget innan du går vidare till nästa objekt, ofta med frigångsbegränsningar runt verktygshuvudet.' },
        { term: 'Övergångsavstånd', definition: 'Genomsnittligt icke-extruderande reseavstånd som krävs för att flytta mellan delar eller utskriftszoner.' },
        { term: 'Rensnings- eller stabiliseringstid', definition: 'Extra tid per sekventiell enhet för priming, termisk stabilisering, avtorkning eller säker omstart för operatören.' },
        { term: 'Kritisk risk', definition: 'Maximal acceptabel sannolikhet att minst en del i batchen misslyckas.' },
      ],
    },
    {
      type: 'message',
      title: 'Kollisionsfrigång spelar roll i verkligt sekventiellt läge',
      ariaLabel: 'Varning om frigång vid sekventiell utskrift',
      html: '<p>Många skärare begränsar sekventiell utskrift eftersom hotend, fläktkanal, X-gantry eller bäddklämmor kan kollidera med färdiga delar. Använd denna kalkylator för planering och verifiera sedan sekventiell frigång i skäraren innan du startar jobbet.</p>',
    },
    { type: 'title', text: 'Hur du använder resultaten för optimering av additiv tillverkning', level: 2 },
    {
      type: 'paragraph',
      html: 'Den absoluta tidsbesparingen visar hur många minuter batchläget vinner eller förlorar jämfört med sekventiellt läge. Den relativa effektivitetsprocenten normaliserar den skillnaden mot sekventiell tid, vilket är användbart när man jämför jobb av olika storlek. Att spara 20 minuter på en 40-minuterskörning är operativt enormt; att spara 20 minuter på en 30-timmarskörning kanske inte motiverar högre risk.',
    },
    {
      type: 'paragraph',
      html: 'Rekommendationen kombinerar hastighet och genomförbarhet. Om batch är snabbare och risken är under tröskeln, rekommenderar verktyget batch. Om batchrisken överstiger tröskeln rekommenderas sekventiell även om den är långsammare. Om batch är långsammare på grund av stor övergångsomkostnad eller liten förvärmning, vinner sekventiell på tid utan att behöva riskåsidosättningen.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Använd kalkylatorn innan du kapslar en stor byggplatta så att produktionsplanen baseras på kötid och felexponering.',
        'Kör en hypotetisk jämförelse med lägre feltolerans efter kalibrering för att se hur processförbättring ändrar strategin.',
        'Öka rensningstiden när sekventiella jobb kräver rengöring, priming, bäddinspektion eller operatörsingripande mellan enheter.',
        'Sänk reshastigheten när du använder Z-hop, undvik korsande perimeter, ömtåliga höga delar eller firmware-accelerationsgränser.',
        'Registrera faktiska körresultat och uppdatera feltoleransen istället för att förlita dig på en generisk tumregel.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Optimera inte bara för snabbast möjliga tid',
      badge: 'Driftkostnad',
      html: '<p>En misslyckad 12-timmarsbatch kan kosta mer än tiden som visas på maskindisplayen. Inkludera material, el, operatörsdiagnos, förlorad köplats, försening i efterbearbetning och påverkan på kunddeadline när du bestämmer om tidsbesparingen är värd den sammansatta risken.</p>',
    },
    { type: 'title', text: 'Praktiska exempel för arbetsflöden med 3D-utskriftstidskalkylator', level: 2 },
    {
      type: 'paragraph',
      html: 'För små PLA-klämmor med 20 minuters utskriftstid per del och 10 minuters uppvärmning dominerar ofta batchnivåutskrift. Den gemensamma förvärmningen sparar en stor del av jobbet, och kompakt placering håller övergångsomkostnaden låg. Om verkstaden har 1-2% feltolerans kan risken förbli acceptabel för måttliga kvantiteter. Detta är det klassiska högkapacitetsanvändningsfallet för batchnivåutskrift.',
    },
    {
      type: 'paragraph',
      html: 'För höga PETG-fästen med marginell vidhäftning kan sekventiell utskrift vara säkrare. Även om batch sparar två timmar kan ett böjt hörn orsaka munstycksanslag, lagerförskjutning eller objektlossning som förstör närliggande delar. Kalkylatorn visar skillnaden mellan en frestande tidsbesparing och en riskprofil som inte längre passar produktionsavsikten.',
    },
    {
      type: 'paragraph',
      html: 'För beslut om effektivitet vid utskrift på plats, kör samma del två gånger: en gång med nuvarande feltolerans och en gång med måltoleransen efter kalibrering. Om minskning av fel från 6% till 2% vänder rekommendationen från sekventiell till batch, kan den bästa investeringen vara bäddrengöring, första lagers-inställning, torr filament, kammarstabilitet eller en validerad brimstrategi snarare än att köpa en ny skrivare.',
    },
    {
      type: 'summary',
      title: 'Beslutskontrollista',
      items: [
        'Använd batch när förvärmningen är stor, layouten är kompakt och den historiska feltoleransen är låg.',
        'Använd sekventiell när varje defekt är dyr, hög, riskfylld eller sannolikt skadar grannar.',
        'Justera processen när en liten minskning av feltoleransen låser upp betydande batcheffektivitet.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
