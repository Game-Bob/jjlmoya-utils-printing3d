import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TechnicalResinUvCuringUI } from '../ui';

const slug = 'teknisk-harts-uv-hardningstid-kalkylator';
const title = 'Teknisk Harts UV Härdningstid Kalkylator';
const description = 'Uppskatta säker SLA-harts efterhärdningstid baserat på hartsyp, maximal väggtjocklek, effekt på tvätt- och härdningsstation och UV-våglängd.';

const faqData = [
  { question: 'Hur länge ska jag härda SLA-hartsutskrifter?', answer: 'Rätt tid beror på hartsyp, väggtjocklek, härdningsstationens effekt, våglängd och exponeringsgeometri. Små standardhartsdelar kan behöva bara några minuter, medan tjocka tekniska hartsdelar behöver längre tid men bör respektera en säkerhetsgräns.' },
  { question: 'Kan för mycket UV-härdning göra harts sprött?', answer: 'Ja. Överdriven UV-exponering kan göra många fotopolymerhartsdelar spröda, gula eller mindre flexibla. Kalkylatorn begränsar tiden när den grova uppskattningen når ett nedbrytningsområde.' },
  { question: 'Ska hartsutskrifter vara torra före härdning?', answer: 'Ja. Hartsutskrifter ska vara rena och helt torra före UV-härdning. Alkoholrester kan orsaka vitfärgning, instängd kontaminering och inkonsekventa efterhärdningsresultat.' },
  { question: 'Är 385 nm eller 405 nm bättre för hartshärdning?', answer: 'Inget är universellt bättre. Den bästa våglängden är den som matchar hartss fotoinitiatorsystem och härdningsstationen. Många bordshatser är optimerade för 405 nm, medan vissa tekniska hartser svarar bra på 385 nm.' },
];

const howToData = [
  { name: 'Välj hartsförinställning', text: 'Välj standard, flexibel, styv/tålig, gjutbar eller utbrännbar enligt hartsflaskan eller avsedd användning.' },
  { name: 'Ange den tjockaste väggen', text: 'Mät den maximala väggtjockleken som måste få UV-efterhärdning.' },
  { name: 'Ange stationsparametrar', text: 'Ställ in härdningsstationens effekt och våglängd för att matcha din UV-kammare.' },
  { name: 'Följ säkerhetschecklistan', text: 'Torka delen, exponera varje sida, ta bort skuggkastande stöd och respektera det maximala säkra timervärdet.' },
];

const seoData = [
  { type: 'title', text: 'Hur SLA-Harts Efterhärdningstid Väljs', level: 2 },
  {
    type: 'paragraph',
    html: 'Efterhärdning är den kontrollerade UV-exponering som tillämpas efter att en hartsutskrift har tvättats. Målet är inte bara att få ytan att kännas torr. En korrekt efterhärdad SLA- eller MSLA-del uppnår bättre omvandling av reaktiva grupper i polymernätverket, vilket förbättrar styvhet, värmebeständighet, dimensionell stabilitet och hanteringssäkerhet. Underhärdning lämnar klibbiga, svaga eller kemiskt aktiva ytor. Överhärdning kan driva materialet mot sprödhet, synlig gulning och förlust av förlängning. En användbar <strong>SLA-harts UV-härdningstidsuppskattare</strong> måste därför balansera hartskemi, väggtjocklek, ljusintensitet, våglängd, temperatur och exponeringsgeometri.',
  },
  {
    type: 'paragraph',
    html: 'Kalkylatorn använder hartsförinställningar eftersom olika hartsfamiljer inte svarar identiskt. Ett standard bordsharts härdar vanligtvis snabbare än en flexibel uretanliknande formulering. Tåligt eller styvt tekniskt harts behöver ofta längre exponering och ibland mild värme för att närma sig sina databladsegenskaper. Gjutbara och utbrännbara hartser är känsliga eftersom överdriven härdning kan öka sprödhet eller askrelaterade processproblem. Resultatet är ett rekommenderat timervärde, en säker övre gräns, en valfri temperaturmål och ett praktiskt ljusavstånd.',
  },
  {
    type: 'stats',
    columns: 4,
    items: [
      { value: '385/405 nm', label: 'vanliga bordsharts härdningsvåglängder' },
      { value: '1-22 min', label: 'typisk begränsad kalkylatorutgång' },
      { value: '0,4-12 mm', label: 'väggtjockleksmodellintervall' },
      { value: '6-120 W', label: 'effektintervall för härdningsstation' },
    ],
  },
  {
    type: 'diagnostic',
    variant: 'warning',
    title: 'Härda aldrig våta hartsutskrifter',
    html: 'Alkohol kvar på delen kan fånga ohärdade rester, vitfärga ytor, kontaminera härdningskammaren och förvränga förhållandet mellan UV-dos och slutligt materialbeteende. Tvätta först, låt delen torka helt, härda sedan.',
  },
  { type: 'title', text: 'Varför Väggtjocklek Ändrar UV-Härdningstid', level: 2 },
  {
    type: 'paragraph',
    html: 'Ett tunt miniatyrskal och en tjock funktionell konsol kan använda samma harts men behöver olika efterhärdningsbeteende. UV-ljus absorberas och sprids av pigment, fyllmedel, fotoinitiatorer och polymeren själv. Ytan får den starkaste dosen, medan djupare material får mindre energi. Därför frågar kalkylatorn efter <strong>maximal väggtjocklek</strong> istället för total höjd eller total massa. Den tjockaste optiskt relevanta sektionen är den del som mest sannolikt förblir underhärdad när utsidan redan ser färdig ut.',
  },
  {
    type: 'paragraph',
    html: 'Ökningen är proportionell men inte perfekt linjär. Att fördubbla väggtjockleken kräver inte alltid exakt dubbla timervärdet eftersom härdningen fortsätter från flera sidor när delen roteras och eftersom många hartsutskrifter är ihåliga. Modellen använder en hartsspecifik exponent: tåliga hartser skalas mer aggressivt med tjockleken, medan gjutbara profiler hålls under en snävare säkerhetsgräns. För mycket tjocka solida delar är den bättre lösningen ofta urholkning, dränering, rotation och stegvis härdning istället för en enda lång exponering.',
  },
  {
    type: 'table',
    headers: ['Geometriskt tillstånd', 'Härdningsimplikation', 'Praktisk åtgärd'],
    rows: [
      ['Tunt kosmetiskt skal', 'Lågt internt härdningsbehov', 'Använd beräknad tid utan att lägga till extra minuter.'],
      ['Tjock solid klack eller tapp', 'Högre risk för underhärdad kärna', 'Ange lokal maximal väggtjocklek, inte genomsnittlig skal-tjocklek.'],
      ['Ihålig del med dräneringshål', 'Ljus når utsidan; insidan kan förbli skuggad', 'Härda utsidan först, exponera sedan insidan om geometrin tillåter.'],
      ['Ogenomskinligt eller mörkt harts', 'Lägre penetration och mer spridning', 'Håll dig nära tillverkarens anvisningar och rotera oftare.'],
    ],
  },
  {
    type: 'tip',
    title: 'Mät den tjockaste strukturella väggen',
    html: 'För en ihålig hartsutskrift, använd det tjockaste skalet eller förstärkningsribban. För en solid teknisk del, använd den tjockaste solida sektionen som måste nå slutliga mekaniska egenskaper.',
  },
  { type: 'title', text: 'Stationseffekt, Avstånd och UV-Dos', level: 2 },
  {
    type: 'paragraph',
    html: 'En tvätt- och härdningsstation klassad till 40 W levererar inte 40 W användbar UV-energi till varje kvadratcentimeter av delen. Märkeffekten inkluderar elektriska och optiska förluster, LED-arrangemang, kammarreflektivitet, täckning av vändskiva och avstånd från ljuskällan. Ändå är effekten en användbar uppskattare: en högeffektsstation behöver vanligtvis en kortare timer än en svag nagellampsliknande härdningslåda. Kalkylatorn tillämpar en omvänd effektfaktor så att timern minskar när stationseffekten ökar.',
  },
  {
    type: 'paragraph',
    html: 'Avstånd är viktigt eftersom bestrålningen minskar när delen rör sig bort från lysdioderna, och eftersom mycket nära placering kan skapa hotspots. En del placerad för nära en LED-bank kan härda en sida aggressivt medan hörn eller försänkta ytor förblir mjuka. En del placerad för långt bort kan behöva längre exponering, men att lägga till tid kan överhärda redan belysta sidor. Därför inkluderar utgången ett rekommenderat avstånd i centimeter eller tum. Det är en geometrikontroll, inte bara ett bekvämlighetsvärde.',
  },
  {
    type: 'comparative',
    columns: 3,
    items: [
      {
        title: 'För nära',
        description: 'Hög lokal intensitet skapar ojämn dos och ytspänning.',
        points: ['Gulning på exponerade sidor', 'Spröda tunna detaljer', 'Skuggade håligheter förblir underhärdade'],
      },
      {
        title: 'Balanserat',
        description: 'Måttligt avstånd låter kammaren och vändskivan fördela UV mer jämnt.',
        highlight: true,
        points: ['Renare mekaniskt resultat', 'Mindre risk för hotspots', 'Bättre repeterbarhet'],
      },
      {
        title: 'För långt',
        description: 'Låg bestrålning uppmuntrar användare att kompensera med överdriven tid.',
        points: ['Långa cykler', 'Inkonsekvent härdning', 'Falskt förtroende från torra ytor'],
      },
    ],
  },
  {
    type: 'message',
    title: 'Rotera när kammaren inte exponerar alla sidor',
    html: 'Om en del har djupa urtag, underskärningar eller breda platta sidor, dela exponeringen i kortare cykler och rotera delen. En enhetlig dos är vanligtvis bättre än en lång statisk härdning.',
  },
  { type: 'title', text: '385 nm Versus 405 nm vid Hartshärdning', level: 2 },
  {
    type: 'paragraph',
    html: 'De flesta konsument-MSLA-skrivare och härdningsstationer använder 405 nm LEDs eftersom den våglängden matchar många bordsfotoinitiatorsystem och är effektiv för prisvärda LED-arrayer. Vissa tekniska hartser svarar också starkt på 385 nm, en kortare våglängd närmare UV-A-området. Skillnaden är inte automatiskt bättre eller sämre. Ett harts formulerat för 405 nm kan behöva mer tid under 385 nm om spektrat inte är matchat; ett annat harts kan härda effektivt vid 385 nm. Kalkylatorn behandlar våglängd som en hartsberoende multiplikator.',
  },
  {
    type: 'paragraph',
    html: 'Den viktiga användaråtgärden är konsistens. Om en harts tillverkare specificerar ett efterhärdningsschema för en viss härdningsenhet, våglängd och temperatur, använd det schemat som referens. Använd denna kalkylator när hartset är generiskt, när stationseffekten skiljer sig från referensmaskinen, eller när utskriftsgeometrin är tjockare än en enkel kalibreringskupong. Blanda inte ett industriellt 385 nm-schema med en 405 nm bordsstation utan att justera exponeringsantagandena.',
  },
  {
    type: 'glossary',
    items: [
      { term: 'Fotoinitiator', definition: 'En harts-komponent som absorberar ljus och startar polymerisationsreaktioner.' },
      { term: 'UV-dos', definition: 'Den ackumulerade ljusenergi som delen tar emot under härdning, påverkad av bestrålning och tid.' },
      { term: 'Efterhärdning', definition: 'UV- och ibland värmebehandling efter tvätt som förbättrar materialegenskaperna bortom det utskrivna tillståndet.' },
      { term: 'Överhärdning', definition: 'Överdriven exponering som kan göra en hartsdel spröd, gul, deformerad eller mindre slagfast.' },
    ],
  },
  {
    type: 'diagnostic',
    variant: 'info',
    title: 'Torr vid beröring är inte samma som helt härdad',
    html: 'En hartsyta kan sluta kännas klibbig innan det interna nätverket når det avsedda mekaniska beteendet. Använd geometri, hartstyp och stationseffekt istället för ytkänsla.',
  },
  { type: 'title', text: 'Hartsförinställningar och Mekanisk Risk', level: 2 },
  {
    type: 'paragraph',
    html: 'Standardhartser är vanligtvis optimerade för enkel utskrift och snabb efterbearbetning. De är den mest förlåtande kategorin i kalkylatorn. Flexibla hartser kräver mer försiktig hantering eftersom den önskade egenskapen är förlängning, inte maximal hårdhet. För mycket UV kan minska flexibiliteten och förvandla en mjuk del till något som spricker tidigare. Styva och tåliga hartser behöver ofta mer dos för att utveckla styrka, men de har också en övre gräns där ytterligare härdning inte längre förbättrar prestandan och istället ökar sprödheten.',
  },
  {
    type: 'paragraph',
    html: 'Gjutbara och utbrännbara hartser har en annan prioritet. Deras slutliga användning kan involvera investeringsgjutning eller ren förbränning, så ytkvalitet, askbeteende och dimensionell stabilitet är viktiga. En mycket hårt överhärdad gjutbar del kan bli spröd under hantering eller prestera dåligt i efterföljande processsteg. Kalkylatorn tillämpar en snävare gräns på dessa kategorier eftersom det säkraste arbetsflödet är kontrollerad härdning, inte maximal exponering.',
  },
  {
    type: 'table',
    headers: ['Hartsförinställning', 'Huvudmål', 'Överhärdningssymptom', 'Kalkylatorbeteende'],
    rows: [
      ['Standard', 'Allmän hårdhet och säker hantering', 'Gulning och spröda tunna detaljer', 'Måttlig bas tid och medelgräns.'],
      ['Flexibel', 'Behålla förlängning medan klibbighet tas bort', 'Förlust av flexibilitet och rivning', 'Längre bas tid med försiktig doskänslighet.'],
      ['Styv / Tålig', 'Nå teknisk styvhet och styrka', 'Sprött brott istället för tåligt misslyckande', 'Högre bas tid och valfri varmhärdning.'],
      ['Gjutbar', 'Ren hantering före gjutprocessen', 'Spröda mönster och ytmörkning', 'Lägre säkerhetsgräns för att undvika aggressiv exponering.'],
      ['Utbrännbar', 'Kontrollerad härdning före termisk utbränning', 'Flisning eller dimensionell spänning', 'Måttlig tid med konservativ gräns.'],
    ],
  },
  {
    type: 'proscons',
    title: 'Lägga till extra minuter efter kalkylatorn',
    items: [
      { pro: 'Kan hjälpa om en sida var skuggad under en kort cykel.', con: 'Kan försämra redan exponerade sidor när delen inte roterades.' },
      { pro: 'Kan minska klibbighet på mycket tjocka eller mörka delar.', con: 'Kan göra tåliga och flexibla hartser sprödare.' },
      { pro: 'Användbart som en andra kort cykel efter inspektion.', con: 'Osäkert som rutinvan utan att kontrollera säkerhetsgränsen.' },
    ],
  },
  { type: 'title', text: 'Temperatur Under Teknisk Harts Efterhärdning', level: 2 },
  {
    type: 'paragraph',
    html: 'Vissa tekniska hartser specificerar förhöjd efterhärdningstemperatur eftersom värme ökar molekylär rörlighet och hjälper polymernätverket att nå sina avsedda egenskaper. Varmhärdning kan förbättra värmeböjningstemperatur, modul och slutlig hållfasthet för kompatibla material. Det bör inte tillämpas blint på alla hartser. En miniatyr utskriven i standard harts kan inte behöva värme alls, medan ett tåligt tekniskt harts kan dra nytta av 40-60 °C beroende på tillverkardata. Kalkylatorn returnerar därför rumstemperatur för hartsfamiljer där värme inte antas, och ett blygsamt temperaturmål där det är användbart.',
  },
  {
    type: 'paragraph',
    html: 'Temperaturkontroll är också en säkerhetsfråga. För mycket värme kan deformera tunna sektioner, mjuka upp stödärr eller påskynda gulning. En tvätt- och härdningsstation utan uppvärmd kammare bör inte behandlas som motsvarande en laboratorieugn. Om hartset datablad specificerar en exakt termisk cykel, har det databladet företräde. Kalkylatorn är en praktisk uppskattare för vanliga bordsarbetsflöden, inte en ersättning för certifierad medicinsk, dental, flyg- eller gjutprocessvalidering.',
  },
  {
    type: 'card',
    title: 'När utgången säger rumstemperatur',
    html: 'Rumstemperatur betyder att kalkylatorn inte kräver en uppvärmd efterhärdning för den hartsförinställningen. Det betyder inte att delen kan härdas kall, våt eller i en dragig verkstad. Håll delen torr och låt hartset nå normal rumstemperatur före exponering.',
  },
  {
    type: 'tip',
    title: 'Undvik att härda direkt efter IPA borttagning',
    html: 'Efter tvätt, låt alkohol avdunsta från hål, håligheter och relieftext. Tio till trettio minuters torkning kan betyda mer än att lägga till ytterligare en minut UV.',
  },
  { type: 'title', text: 'Diagnos av Under- och Överhärdade Hartsdelar', level: 2 },
  {
    type: 'paragraph',
    html: 'Underhärdade hartsdelar visar vanligtvis klibbiga ytor, svaga små detaljer, kvarvarande lukt, mjuka kanter eller rester som överförs till handskar. Dessa symptom är vanligast när delen inte tvättats ordentligt, härdades våt, hade stor väggtjocklek eller stod i skugga inuti kammaren. Överhärdade delar visar andra symptom: sprött brott, gulning, kritiga ytor, krullade tunna kanter eller förlust av flexibilitet. Lösningen beror på symptomet. Mer UV är inte svaret på varje hartsutskriftsproblem.',
  },
  {
    type: 'diagnostic',
    variant: 'error',
    title: 'Spröd och gul betyder sluta lägga till exponering',
    html: 'Om en del redan har blivit spröd eller synligt gul, kommer extra härdning inte att återställa segheten. Skriv ut igen, minska timervärdet, förbättra rotationen och respektera gränsen.',
  },
  {
    type: 'summary',
    title: 'Felsökningsordning',
    items: [
      'Bekräfta att delen tvättades och torkades före härdning.',
      'Kontrollera om stöd eller modellorientering skapade UV-skuggor.',
      'Ange den tjockaste väggen, inte den genomsnittliga modellstorleken.',
      'Använd säkerhetsgränsen när den grova uppskattningen skulle vara för lång.',
      'Rotera komplexa delar istället för att förlänga en statisk exponering.',
    ],
  },
  {
    type: 'table',
    headers: ['Symptom', 'Trolig orsak', 'Korrigering'],
    rows: [
      ['Klibbig yta efter härdning', 'Restharts eller IPA, otillräcklig dos eller skuggad sida', 'Tvätta igen om förorenad, torka helt, applicera sedan en kort roterad cykel.'],
      ['Tunna detaljer går lätt sönder', 'Överhärdning eller i sig sprött harts', 'Minska timern och undvik nära LED-placering.'],
      ['En sida gul, andra mjuk', 'Ojämn kammarexponering', 'Öka avståndet och rotera under härdning.'],
      ['Flexibelt harts blir styvt', 'Dos för hög för elastomert beteende', 'Använd mindre tid och stanna vid icke-klibbig hantering.'],
    ],
  },
  { type: 'title', text: 'Hur Man Använder Denna UV-Tvätt- och Härdningsstation Tidskalkylator', level: 2 },
  {
    type: 'paragraph',
    html: 'Börja med den hartsförinställning som ligger närmast materialets etikett. Om flaskan säger tålig, styv, ABS-liknande, teknisk eller högslagfast, använd den styv/tålig förinställningen. Om den är elastisk, böjlig eller gummiaktig, använd flexibel. För investeringsgjutning eller askfria arbetsflöden, använd gjutbar eller utbrännbar. Mät sedan den maximala väggtjockleken. Ange härdningsstationens märkeffekt och välj 385 nm eller 405 nm enligt dokumentationen för stationen eller hartset. Utgångens timervärde är den första cykeln du bör köra.',
  },
  {
    type: 'paragraph',
    html: 'Använd checklistan innan du trycker på start. Delen måste vara torr, synlig från flera vinklar och fri från stödstrukturer som kastar skuggor. Om modellen är komplex, härda under en del av den rekommenderade tiden, rotera den och slutför resten av cykeln. Om kalkylatorn varnar att säkerhetsgränsen har tillämpats, åsidosätt den inte med en lång exponering. Gränsen finns eftersom den harts-kategorin är mer benägen att försämras än förbättras bortom den punkten.',
  },
  {
    type: 'list',
    items: [
      'Använd tillverkarinstruktioner när ett hartsdatablad ger en validerad efterhärdningscykel.',
      'Använd denna kalkylator när stationseffekt, våglängd eller deltjocklek skiljer sig från referensarbetsflödet.',
      'Härda inte delar som luktar starkt av lösningsmedel eller har vätska i dräneringshål.',
      'Anta inte att starkare ljus är säkrare; det kan skapa lokal överhärdning snabbare.',
      'Registrera framgångsrika tider per harts, färg, väggtjocklek och stationsmodell.',
    ],
  },
  {
    type: 'summary',
    title: 'Säker efterhärdningsregel',
    items: [
      'Rengör först.',
      'Torka helt.',
      'Härda inom det beräknade fönstret.',
      'Rotera för täckning.',
      'Stoppa innan hartset blir sprött, gult eller deformerat.',
    ],
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org', '@type': 'HowTo',
  name: title, description,
  step: howToData.map((step, index) => ({
    '@type': 'HowToStep', position: index + 1,
    name: step.name, text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org', '@type': 'SoftwareApplication',
  name: title, description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<TechnicalResinUvCuringUI> = {
  slug, title, description,
  ui: {
    controlsAriaLabel: 'Inmatningskontroller för teknisk harts UV-härdning',
    resultsAriaLabel: 'Rekommenderade harts efterhärdningsparametrar',
    unitSystemLabel: 'Enheter',
    metricLabel: 'Metriskt',
    imperialLabel: 'US',
    resinGroupLabel: 'Hartsförinställning',
    stationGroupLabel: 'Härdningsstation',
    preparationLabel: 'Före härdning',
    resinTypeLabel: 'Hartstyp',
    standardLabel: 'Standard',
    flexibleLabel: 'Flexibel',
    toughLabel: 'Styv / Tålig',
    castableLabel: 'Gjutbar',
    burnoutLabel: 'Utbrännbar',
    wallThicknessLabel: 'Maximal väggtjocklek',
    wallThicknessHelp: 'Använd den tjockaste solida väggen eller skalet som UV-ljus måste tränga igenom för att härda.',
    stationPowerLabel: 'Stationseffekt',
    stationPowerHelp: 'Nominell elektrisk effekt för härdningsstationen eller UV-lampanordningen.',
    wavelengthLabel: 'Våglängd',
    wavelength385Label: '385 nm',
    wavelength405Label: '405 nm',
    cleanDryReminder: 'Delen måste vara ren och perfekt torr före UV-exponering. Härda inte delar som fortfarande bär alkohol.',
    dryCheckLabel: 'Är delen helt torr och fri från alkoholrester?',
    exposureCheckLabel: 'Är delen placerad så att ljus når varje sida?',
    supportsCheckLabel: 'Är delen fri från stöd som kan kasta skuggor?',
    degradationWarning: 'Överdriven härdningstid gör delen spröd och gul. Respektera de tekniska gränserna.',
    recommendedTimeLabel: 'Timerinställning',
    temperatureLabel: 'Härdningstemperatur',
    noTemperatureLabel: 'Rumstemperatur',
    ambientTemperatureNoteMetric: 'Härda vid rumstemperatur (18-25 °C). Ingen uppvärmd kammare krävs för denna förinställning.',
    ambientTemperatureNoteImperial: 'Härda vid rumstemperatur (64-77 °F). Ingen uppvärmd kammare krävs för denna förinställning.',
    distanceLabel: 'Ljusavstånd',
    maxSafeLabel: 'Säkerhetsgräns',
    doseIndexLabel: 'UV-dosindex',
    safetySafeLabel: 'Inom det säkra fönstret',
    safetyCautionLabel: 'Nära övre gränsen',
    safetyLimitLabel: 'Säkerhetsgräns tillämpad',
    limitMessage: 'Den begärda exponeringen skulle överskrida hartsets säkerhetsgräns. Använd det begränsade timervärdet och rotera delen mellan cykler om sidor är skuggade.',
    cautionMessage: 'Rekommendationen är tekniskt användbar men nära nedbrytningsområdet. Håll delen torr, rotera den och undvik att lägga till extra minuter av vana.',
    safeMessage: 'Rekommendationen ligger inom det normala efterhärdningsfönstret för denna hartsprofil och stationseffekt.',
    timerUnit: 'min',
    mmUnit: 'mm',
    inchUnit: 'in',
    cmUnit: 'cm',
    inUnit: 'in',
    wattUnit: 'W',
    celsiusUnit: '°C',
    fahrenheitUnit: '°F',
  },
  seo: seoData,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
