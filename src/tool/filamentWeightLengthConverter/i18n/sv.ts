import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FilamentWeightLengthConverterUI } from '../ui';

const slug = 'filament-vikt-till-langd-omvandlare';
const title = 'Filamentvikt till längdomvandlare: Noggrann materialberäkning';
const description = 'Omvandla filamentgram till meter och volym med materialdensitet, 1,75 mm eller 2,85 mm diameter samt en omedelbar kontroll av om spolen räcker.';

const faqData = [
  {
    question: 'Hur omvandlar man filamentgram till meter?',
    answer: 'Dividera massan med materialets densitet för att få volym, omvandla volymen från kubikcentimeter till kubikmillimeter och dividera sedan med filamentdiameterns cirkulära tvärsnittsarea.',
  },
  {
    question: 'Varför spelar filamentets materialdensitet roll?',
    answer: 'Samma vikt av PLA, PETG, ABS, TPU eller fyllt filament upptar olika volymer eftersom varje polymer har en annan densitet. Längden är volym dividerat med filamentets area, så densiteten påverkar direkt meteruppskattningen.',
  },
  {
    question: 'Är 1,75 mm filament alltid samma längd per kilogram?',
    answer: 'Nej. Diametertolerans, materialdensitet, tillsatser och fuktinnehåll förändrar den verkliga längden. Kalkylatorn ger en planeringsuppskattning baserad på nominell diameter och densitet.',
  },
  {
    question: 'Kan jag använda kalkylatorn för 2,85 mm filament?',
    answer: 'Ja. Ange 2,85 mm eller växla till imperiala enheter och ange motsvarande diameter. Tvärsnittsarean uppdateras omedelbart.',
  },
];

const howToData = [
  { name: 'Ange filamentmassan', text: 'Skriv in den mängd filament som skivaren anger, vikten kvar på en spole eller valfritt gramvärde du vill omvandla.' },
  { name: 'Välj materialet', text: 'Välj PLA, PETG, ABS, TPU, Nylon, PC eller ett fyllt blandmaterial så att kalkylatorn kan använda rätt densitet.' },
  { name: 'Ställ in filamentdiametern', text: 'Använd 1,75 mm, 2,85 mm eller en uppmätt diameter om du vill att längduppskattningen ska spegla en specifik spole.' },
  { name: 'Kontrollera om spolen räcker', text: 'Ange eventuellt den återstående spolvikten för att se om du har tillräckligt med material samt exakt över- eller underskott.' },
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
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<FilamentWeightLengthConverterUI> = {
  slug,
  title,
  description,
  ui: {
    unitSystemLabel: 'Enheter',
    metricLabel: 'Metriska',
    imperialLabel: 'Imperial',
    inputsTitle: 'Materialuppskattning',
    materialLabel: 'Material',
    materialPlaLabel: 'PLA',
    materialPetgLabel: 'PETG',
    materialAbsLabel: 'ABS',
    materialAsaLabel: 'ASA',
    materialTpuLabel: 'TPU',
    materialPaLabel: 'Nylon PA',
    materialPcLabel: 'Polykarbonat',
    materialWoodLabel: 'Träfyllt PLA',
    materialCarbonLabel: 'Kolfiberblandning',
    materialMetalLabel: 'Metallfyllt PLA',
    densityLabel: 'Densitet',
    densityUnit: 'g/cm3',
    weightLabel: 'Filamentvikt',
    weightSliderLabel: 'Reglage för utskriftsvikt',
    diameterLabel: 'Filamentdiameter',
    stockLabel: 'Återstående spolvikt',
    stockPlaceholder: 'Valfri lagerkontroll',
    spoolStateLabel: 'Spolstatus',
    spoolScaleLabel: 'Förbrukad / tillgänglig massa',
    cutLineLabel: 'Stopplinje för materialslut',
    resultLengthLabel: 'Beräknad filamentlängd',
    resultVolumeLabel: 'Polymer volym',
    resultAreaLabel: 'Tvärsnittsarea',
    resultGramsMeterLabel: 'Linjär massa',
    enoughLabel: 'Spolen räcker',
    shortLabel: 'Spolen räcker inte',
    noStockLabel: 'Lagerkontroll inaktiv',
    surplusLabel: 'Överskott',
    missingLabel: 'Saknas',
    formulaLabel: 'Beräkningsväg',
    formulaText: 'volym = massa / densitet -> längd = volym / tvärsnittsarea',
    linearMassMetricUnit: 'g/m',
    linearMassImperialUnit: 'oz/ft',
    gramsUnit: 'g',
    ouncesUnit: 'oz',
    metersUnit: 'm',
    feetUnit: 'ft',
    cm3Unit: 'cm3',
    in3Unit: 'in3',
    in2Unit: 'in2',
    mm2Unit: 'mm2',
    mmUnit: 'mm',
    inchUnit: 'in',
  },
  seo: [
    { type: 'title', text: 'Varför en densitetsbaserad filamentgram-till-meter-kalkylator är mer noggrann', level: 2 },
    { type: 'paragraph', html: 'En filamentvikts-till-längd-omvandlare är bara så bra som materialmodellen bakom den. En generisk kalkylator antar ofta att ett kilogram av varje filament upptar samma volym, men FFF-filament säljs efter vikt medan skrivaren förbrukar en cylindrisk sträng efter längd. Bryggan mellan dessa två mått är <strong>densitet</strong>. PLA på cirka 1,24 g/cm3, PETG runt 1,27 g/cm3, ABS nära 1,04 g/cm3 och TPU omkring 1,21 g/cm3 omvandlas inte till samma antal meter, även om spolvikten och diametern är identiska.' },
    { type: 'paragraph', html: 'Beräkningen börjar med massa. Att dividera gram med densitet ger volym i kubikcentimeter. Den volymen omvandlas sedan till kubikmillimeter eftersom filamentdiameter normalt mäts i millimeter. Tvärsnittsarean är arean av en cirkel: pi multiplicerat med radien i kvadrat. Slutligen divideras volymen med arean för att få en längd i millimeter, som kan omvandlas till meter eller fot. Resultatet är en praktisk uppskattning för att kontrollera om materialet som en skivare rapporterar kan skrivas ut från lagret som finns kvar på en spole.' },
    { type: 'stats', columns: 4, items: [
      { value: '1.24', label: 'Typisk PLA-densitet i g/cm3' },
      { value: '2.405', label: 'Area i mm2 för nominellt 1,75 mm filament' },
      { value: '6.379', label: 'Area i mm2 för nominellt 2,85 mm filament' },
      { value: '3 inputs', label: 'Massa, densitet och diameter definierar omvandlingen' },
    ] },
    { type: 'table', headers: ['Material', 'Planeringsdensitet', 'Varför siffran är viktig'], rows: [
      ['PLA', '1,24 g/cm3', 'Vanlig referens för skrivbordsskrivning och en bra baslinje för prototyper.'],
      ['PETG', '1,27 g/cm3', 'Något tätare än PLA, så samma grammängd ger mindre längd.'],
      ['ABS', '1,04 g/cm3', 'Lägre densitet innebär mer längd per gram än PLA vid samma diameter.'],
      ['TPU', '1,21 g/cm3', 'Flexibelt filament ligger nära PLA men är ändå värt att modellera separat.'],
      ['Fyllda blandmaterial', 'Varierar', 'Trä-, kolfiber-, metall- och glastillsatser kan flytta densiteten långt från baspolymeren.'],
    ] },
    { type: 'title', text: 'De exakta omvandlingsformlerna för filamentlageruppskattning', level: 2 },
    { type: 'paragraph', html: 'Den matematiska modellen är medvetet liten eftersom varje term har en fysikalisk betydelse. Tvärsnittsarean är <code>pi x (diameter / 2)^2</code>. Volymen är <code>vikt / densitet</code>. Längden är <code>volym x 1000 / tvärsnittsarea</code> när volymen är i cm3 och tvärsnittsarean i mm2; resultatet är millimeter som sedan divideras med 1000 för att få meter. Detta är samma geometri som används för att resonera kring extrusionsvolym, maximalt flöde och materialåtgång i skivare.' },
    { type: 'diagnostic', variant: 'info', title: 'Diametertolerans är den största vardagliga osäkerheten', badge: 'Mätanmärkning', html: 'En nominell 1,75 mm-spole är kanske inte exakt 1,75 mm över hela rullen. Eftersom arean beror på radien i kvadrat kan en liten diameterskillnad förändra både den beräknade längden och den verkliga extrusionsvolymen. För vanliga lagerkontroller räcker nominell diameter. För kalibrering, använd ett skjutmått på flera punkter och ange medeldiametern.' },
    { type: 'list', items: [
      'Använd gram när du kopierar materialåtgång från skivare som PrusaSlicer, Cura, Bambu Studio eller OrcaSlicer.',
      'Använd uppmätt återstående spolvikt efter att ha dragit bort tomspolens taravikt om du vill ha en tillförlitlig kontroll av om materialet räcker.',
      'Använd densitet från tillverkarens datablad vid utskrift av specialkompositer.',
      'Använd 2,85 mm istället för 1,75 mm när maskinen matar grövre filament, eftersom tvärsnittsarean är dramatiskt annorlunda.',
    ] },
    { type: 'tip', title: 'Inkludera inte tomspolevikt i återstående lager', html: 'En spole på en våg inkluderar vikten av plast- eller papperskärnan. Om tomspolen väger 180 g och vågen visar 430 g bör den användbara filamentuppskattningen vara 250 g. Att ange bruttovikten gör den gröna signalen för tillräckligt lager alltför optimistisk.' },
    { type: 'title', text: '1,75 mm vs 2,85 mm filamentlängd från samma vikt', level: 2 },
    { type: 'paragraph', html: 'Diametern har större påverkan än många användare förväntar sig. En 2,85 mm-sträng har mer än dubbelt så stor tvärsnittsarea som en 1,75 mm-sträng, så ett kilogram blir betydligt färre meter. Detta betyder inte att en diameter är mer ekonomisk i sig; båda kan skriva ut samma delvolym. Det innebär att längdsiffran inte kan jämföras utan diameterns sammanhang. När en skivare rapporterar gram normaliserar den redan materialåtgången efter vikt; när en materialslutsensor eller manuell spoluppskattning tänker i meter blir diametern central.' },
    { type: 'comparative', columns: 2, items: [
      { title: '1,75 mm filament', description: 'Längre stränglängd per kilogram och det dominerande formatet för dagens skrivbordsskrivare.', points: ['Användbar för kompakta matare', 'Fler meter på samma spolmassa', 'Nominell area cirka 2,405 mm2'] },
      { title: '2,85 mm filament', description: 'Kortare stränglängd per kilogram med större matningstvärsnitt, ofta på äldre eller professionella maskiner.', points: ['Nominell area cirka 6,379 mm2', 'Mindre känslig för matarkompression i vissa uppställningar', 'Får inte använda 1,75 mm-antaganden'] },
    ] },
    { type: 'table', headers: ['Scenario', 'Vad som förändras', 'Planeringskonsekvens'], rows: [
      ['Samma polymer, grövre diameter', 'Arean ökar', 'Färre meter för samma gram.'],
      ['Samma diameter, lägre densitet', 'Volymen ökar', 'Fler meter för samma gram.'],
      ['Samma gram, fyllt filament', 'Densiteten kan öka', 'Färre meter än förväntat.'],
      ['Fuktigt filament', 'Uppmätt massa ökar något', 'Spolen kan verka tyngre utan att tillföra användbar torr polymer.'],
    ] },
    { type: 'title', text: 'Hur du använder spolkontrollen innan du startar en lång utskrift', level: 2 },
    { type: 'paragraph', html: 'Det valfria fältet för återstående lager förvandlar omvandlaren till en godkänn- eller underkänn-instrumentpanel. Ange den massa som jobbet kräver som filamentvikt och ange sedan det användbara filament som finns kvar på den aktuella spolen. Resultatet jämför gram direkt och omvandlar även skillnaden till meter eller fot med samma material- och diametermodell. Grönt betyder att spolen har tillräckligt lager; rött betyder att jobbet är för kort och visar exakt hur mycket som saknas.' },
    { type: 'card', icon: 'mdi:traffic-light', title: 'Varför både gram och meter visas', html: 'Gram är inköps- och skivarspråket. Meter är stränglängdsspråket som används av vissa firmwareskärmar, materialslutsuppskattningar och manuella spolberäkningar. Att visa båda förhindrar ett vanligt planeringsmisstag: att ha tillräcklig längd under ett densitetsantagande men inte tillräcklig massa under det faktiska materialet.' },
    { type: 'proscons', title: 'Metoder för lagerverifiering', items: [
      { pro: 'Att väga spolen går snabbt och fungerar även när rullen är delvis använd.', con: 'Du måste känna till eller uppskatta tomspolens taravikt.' },
      { pro: 'Att använda skivarens gram är vanligtvis konsekvent med materialets inköpsvikt.', con: 'Skivarens uppskattningar kan ändras med rensningsvolym, stöd, brätte och modifieringsmaskor.' },
      { pro: 'Längd är intuitivt när man jämför filamentslingor och materialslutsavstånd.', con: 'Längd ändras med densitet och diameter, så den är inte universell över material.' },
      { pro: 'Densitetsbaserad omvandling hanterar PLA, PETG, ABS, TPU och kompositer bättre.', con: 'Tillverkarspecifika tillsatser kan kräva ett anpassat densitetsvärde.' },
    ] },
    { type: 'title', text: 'Komposit- och specialfilament behöver egna densitetsvärden', level: 2 },
    { type: 'paragraph', html: 'Fyllda filament är huvudorsaken till att en seriös materialberäknare bör visa densitet istället för att dölja den. Träfyllt PLA, kolfibernylon, metallfyllt PLA, glödtråd, glasfyllda konstruktionsmaterial och keramikliknande blandningar kan avvika kraftigt från baspolymeren. Ett metallfyllt filament kan kännas tungt eftersom densiteten är hög; samma 500 g kan representera mycket mindre volym och mindre längd än standard-PLA. För en dyr ingenjörsutskrift är den skillnaden inte akademisk. Den kan avgöra om de sista tio procenten av en utskrift blir klara eller tar slut.' },
    { type: 'glossary', items: [
      { term: 'Densitet', definition: 'Massa per volymenhet, här uttryckt som gram per kubikcentimeter.' },
      { term: 'Tvärsnittsarea', definition: 'Den cirkulära arean av filamentsträngen beräknad från diametern.' },
      { term: 'Linjär massa', definition: 'Hur många gram en meter eller en fot filament väger för det valda materialet och diametern.' },
      { term: 'Taravikt', definition: 'Tomspolens vikt som måste subtraheras från en vågavläsning.' },
      { term: 'Nominell diameter', definition: 'Den annonserade filamentstorleken, vanligtvis 1,75 mm eller 2,85 mm, före mätning av verklig tolerans.' },
    ] },
    { type: 'message', title: 'Tillverkarens data vinner', html: 'När spolen eller det tekniska databladet anger densitet, använd det värdet. Generiska densitetsförinställningar är användbara för planering, men leverantörsspecifika formler, pigmentmängder och förstärkningar kan förändra siffran.' },
    { type: 'title', text: 'Praktiska exempel för materialuppskattning vid 3D-utskrift', level: 2 },
    { type: 'paragraph', html: 'Tänk dig att en skivare rapporterar att en PETG-konsol behöver 186 g och du har en delvis använd spole. PETG vid 1,27 g/cm3 med 1,75 mm filament omvandlas till cirka sextioen meter. Om den användbara spolvikten efter taravdrag är 220 g rapporterar instrumentpanelen ett överskott på 34 g och omvandlar den marginalen till cirka elva meter. Den marginalen kan räcka till en rensningslinje och ett litet brätte, men inte till ett stort supportmisstag. Lagerkontrollen uppmuntrar användaren att lägga till en realistisk buffert innan utskriften lämnas utan uppsikt.' },
    { type: 'paragraph', html: 'Jämför nu med ABS. Eftersom ABS har lägre densitet än PETG blir samma 186 g större volym och därmed större längd vid samma 1,75 mm diameter. Det gör inte ABS-delen billigare i sig, eftersom pris per kilogram och utskriftsinställningar också spelar roll, men det förklarar varför en meteruppskattning som kopierats från ett material kan vilseleda för ett annat. För lagerhantering är massa den stabila utgångspunkten och densitet skapar bryggan till längd.' },
    { type: 'summary', title: 'Checklista för pålitlig materialplanering', items: [
      'Dra bort tomspolens taravikt innan du anger återstående lager.',
      'Använd den faktiska materialdensiteten för fyllda, förstärkta eller premiumfilament.',
      'Kontrollera om din maskin använder 1,75 mm eller 2,85 mm filament innan du litar på någon längdsiffra.',
      'Håll en marginal för rensning, stöd, brätten, misslyckade första lager och ändringar i skivarprofilen.',
      'Behandla grön status som en planeringskontroll, inte en garanti mot stopp eller materialslutsensorsfel.',
    ] },
    { type: 'title', text: 'SEO-fokuserat svar: filamentvikt till längd i en mening', level: 2 },
    { type: 'paragraph', html: 'För att omvandla 3D-skrivare filamentvikt till längd, dividera vikten i gram med materialets densitet för att få volym, multiplicera med 1000 för att omvandla cm3 till mm3, dividera med <code>pi x (diameter / 2)^2</code> och dividera sedan med 1000 för att få meter. Denna densitetsmedvetna metod är noggrannare än ett fast gram-till-meter-diagram eftersom PLA, PETG, ABS, TPU, Nylon, PC och kompositfilament alla har olika densitetsvärden.' },
    { type: 'diagnostic', variant: 'success', title: 'När uppskattningen är mest pålitlig', badge: 'Bästa praxis', html: 'Resultatet är som starkast när skivarens vikt är slutgiltig, den återstående spolvikten har taravdrag, diametern är uppmätt eller känd och densiteten kommer från tillverkaren. Under dessa förhållanden blir omvandlaren en praktisk förekontroll för långa utskrifter, produktionsbatcher och dyra tekniska polymerer.' },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
