import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ElephantFootCompensationCalculatorUI } from '../ui';

const slug = 'elefantfots-kompensationskalkylator';
const title = 'Elefantfotskompensationskalkylator: Precision Dimensional Korrigering';
const description = 'Beräkna negativ horisontell expansion och CAD-fasdjup för 3D-utskriftens första lager med hjälp av uppmätt dimensionsfel, lagertjocklek, Z-offset-tryck och bäddtemperatur.';

const faqData = [
  {
    question: 'Vad är det bästa värdet för elefantfotskompensation?',
    answer: 'Det bästa värdet är det uppmätta basfelet korrigerat för första lagrets höjd, effektivt Z-tryck och bäddtemperatur. Kalkylatorn rapporterar det som ett negativt horisontellt expansionsvärde för skäraren.',
  },
  {
    question: 'Ska jag använda horisontell expansion eller en CAD-fas?',
    answer: 'Använd skärarens horisontella expansion för snabb profilnivåkorrigering. Använd en CAD-fas för funktionella delar där underkanten vidrör en annan del, sitter på en referensyta eller måste förbli repeterbar mellan skärare.',
  },
  {
    question: 'Varför påverkar bäddtemperaturen elefantfot?',
    answer: 'En varmare bädd håller den nedre polymeren mjukare längre. Den mjuknade strängen kan flyta horisontellt under munstyckets tryck, så kalkylatorn ökar korrigeringen ovanför referenspunkten 60 °C.',
  },
  {
    question: 'Är elefantfot samma sak som överextrudering?',
    answer: 'Nej. Överextrudering påverkar många lager. Elefantfot är koncentrerad till basen där de första lagren komprimeras och värms av bädden, även om överextrudering kan förvärra det.',
  },
];

const howToData = [
  { name: 'Skriv ut en testkupong', text: 'Använd samma material, bäddtemperatur, första lagrets höjd och första lagrets inställningar som vid produktionsutskriften.' },
  { name: 'Mät basfelet', text: 'Subtrahera den stabila övre väggdimensionen från den bredaste basdimensionen.' },
  { name: 'Ange tryck och temperatur', text: 'Ange första lagrets höjd, effektivt Z-trycksgap och bäddtemperatur.' },
  { name: 'Applicera korrigeringen', text: 'Använd det negativa horisontella expansionsvärdet i skäraren eller modellera den föreslagna 45-gradersfasen.' },
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<ElephantFootCompensationCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    controlsAriaLabel: 'Elefantfotskompensationsingångar',
    resultsAriaLabel: 'Elefantfotskorrigeringsresultat',
    canvasAriaLabel: 'Tvärsnittsvisualisering av nuvarande och korrigerad elefantfotsprofil',
    unitSystemLabel: 'Enheter',
    metricLabel: 'Metriskt',
    imperialLabel: 'Imperialiskt',
    materialLabel: 'Materialförinställning',
    plaLabel: 'PLA',
    petgLabel: 'PETG',
    absAsaLabel: 'ABS/ASA',
    customMaterialLabel: 'Anpassad',
    measuredErrorLabel: 'Uppmätt basfel',
    layerHeightLabel: 'Första lagrets höjd',
    zPressureLabel: 'Z-offset-trycksgap',
    bedTemperatureLabel: 'Bäddtemperatur',
    targetToleranceLabel: 'Måltolerans',
    expansionLabel: 'Skärarens expansion',
    chamferLabel: 'CAD-fas',
    thermalFactorLabel: 'Termisk faktor',
    verdictLabel: 'Dimensionsnoggrannhetsmål',
    currentProfileLabel: 'Uppmätt elefantfot',
    correctedProfileLabel: 'Korrigerad profil',
    slicerCommandLabel: 'Skärarkommando',
    cadCommandLabel: 'CAD-kommando',
    copyButton: 'Kopiera korrigeringsrapport',
    copiedButton: 'Kopierad',
    copyTemplate: 'Elefantfotskompensation: skärarens horisontella expansion {expansion}, CAD-fas {chamfer} vid 45°, termisk faktor {phi}, utlåtande: {verdict}.',
    slicerCommandTemplate: 'Horisontell expansion: {expansion} {unit}',
    cadCommandTemplate: '45° x {chamfer} {unit}',
    correctionCanvasTemplate: 'E_korr {correction} {unit}',
    pressureCanvasTemplate: 'phi_temp {phi} | Z-tryckförhållande {ratio}',
    optimalVerdict: '< 0.05 mm tolerans: korrigering valfri, verifiera med skjutmått.',
    watchVerdict: 'Kontrollerad avvikelse: applicera skärarkompensation och skriv ut kupongen igen.',
    severeVerdict: 'Allvarlig basspridning: korrigera Z-trycket innan du förlitar dig på skärarens offset.',
    mmUnit: 'mm',
    inchUnit: 'tum',
    celsiusUnit: '°C',
    fahrenheitUnit: '°F',
    degreeUnit: '°',
    multiplierUnit: 'x',
  },
  seo: [
    { type: 'title', text: 'Elefantfotskompensation som ett dimensionsnoggrannhetsproblem', level: 2 },
    { type: 'paragraph', html: 'Elefantfot är den utåtriktade expansionen av de första utskrivna lagren bortom den nominella CAD-gränsen. På en kalibreringskub visas den som en basläpp. På tekniska delar blir det ett funktionellt fel: laxstjärtar fastnar, hål nära byggplattan stängs, snäppfästen förlorar spelrum, passningsplattor gungar på en upphöjd kant och mätblock sitter inte längre plant. En användbar <strong>elefantfotskompensationskalkylator</strong> kan därför inte behandlas som en kosmetisk flödesjustering. Den måste omvandla ett uppmätt dimensionsfel till ett negativt horisontellt expansionsvärde och, när möjligt, en CAD-fas som tar bort den komprimerade materialvägen från själva designen.' },
    { type: 'paragraph', html: 'Denna kalkylator modellerar korrigeringen från tre fysiska ingångar som starkt påverkar defekten: uppmätt basfel, första lagrets höjd och det effektiva Z-trycksgapet. Kärnrelationen är <code>E_korr = Fel x (Lagerhöjd / ZOffsetTryck) x phi_temp</code>. Temperaturmultiplikatorn <code>phi_temp</code> ökar ovanför en referensbädd på 60 °C eftersom en varmare bas håller polymeren mjukare längre och låter munstycksbelastningen trycka materialet åt sidan. Resultatet rapporteras som negativ horisontell expansion för skäraren och som 45-graders fasdjup för CAD.' },
    { type: 'stats', columns: 3, items: [
      { value: '0.01 mm', label: 'ingångsupplösning för dimensionsinställning' },
      { value: '45°', label: 'standard CAD-fasvinkel' },
      { value: 'phi_temp', label: 'bäddtemperatur-flödesmultiplikator' },
    ] },
    { type: 'diagnostic', variant: 'info', title: 'Mät felet, inte den visuella läppen', html: 'Skriv ut en fyrkantig eller rektangulär kupong, mät den nominella väggen eller yttermåttet ovanför basen, mät sedan samma mått över de första lagren. Skillnaden mellan dessa två mätningar är elefantfotsfelet. Uppskatta inte från ett fotografi; verktyget är designat för skjutmåttsdata.' },

    { type: 'title', text: 'Varför elefantfot uppstår: munstyckstryck, värme och plastflöde', level: 2 },
    { type: 'paragraph', html: 'Första lagret komprimeras avsiktligt så att filamentet fuktar bädden och fäster. Den kompressionen förvandlar munstycket till en liten tryckapplicator. Smält polymer lämnar munstycket, kläms mellan munstycke och byggyta och måste uppta den tillgängliga volymen. När Z-gapet är för litet finns det inte tillräckligt med vertikalt utrymme för den beordrade extruderingssträngen, så materialet flyter åt sidan. Basen blir bredare även när resten av utskriften är dimensionsmässigt korrekt.' },
    { type: 'paragraph', html: 'Bäddtemperaturen ändrar allvarlighetsgraden. PLA vid 60 °C kan vara nära sitt glasövergångsområde, PETG vid 75 °C förblir klibbig och eftergivlig, och ABS eller ASA på en 100 °C-bädd förblir varma i de första lagren. En varmare bädd förbättrar inte bara vidhäftningen; den fördröjer också stelningen vid basen. Det är därför denna kalkylator tillämpar en termisk faktor: <strong>1.00 vid 60 °C, plus 0.05 för varje ytterligare 5 °C</strong>. En 75 °C PETG-bädd använder därför en faktor på cirka 1.15 före begränsning.' },
    { type: 'comparative', columns: 3, items: [
      { title: 'Z trycksdominerad', description: 'Ett mycket lågt munstycksgap plattar till strängen och trycker plasten utåt. Felet är skarpast i första lagret och förbättras ofta efter Z-offsetkorrigering.', points: ['Bred första linje', 'Blank krossad yta', 'Brim-liknande kant'] },
      { title: 'Termiskt dominerad', description: 'Basen förblir mjuk eftersom bädd- eller kammarvärmen är hög. Läppen kan sträcka sig genom flera lager även med ett rimligt första lager.', highlight: true, points: ['Rundad underkant', 'Vanligt vid PETG eller ABS', 'Långsam kylning'] },
      { title: 'Flödesdominerad', description: 'Extruderingsmultiplikatorn, filamentdiametern eller första lagrets flöde är för högt. Hela bottemområdet kan se överfyllt ut, inte bara omkretsen.', points: ['Grov ovansida av första lagret', 'För breda linjer', 'Stängda luckor'] },
    ] },
    { type: 'tip', title: 'Använd Z offset som indata, inte en gissning', html: 'Z-trycksgapet är det effektiva spelet som tvingar strängen in i bädden. Om din skärare rapporterar ett första lager på 0.20 mm men den faktiska klämningen beter sig som 0.10 mm, använd det mindre tryckgapet. Det gör den beräknade kompensationen större, vilket matchar fysiken för en mer komprimerad sträng.' },

    { type: 'title', text: 'Hur man mäter basexpansion för kalkylatorn', level: 2 },
    { type: 'paragraph', html: 'Använd en enkel testkupong med en känd yttermått, såsom 20.00 mm, 30.00 mm eller 40.00 mm. Kupongen ska ha raka vertikala sidor, minst 8 till 12 mm höjd och ingen fas vid första testet. Mät kroppsmåttet några millimeter ovanför bädden där elefantfoten har försvunnit. Mät sedan samma mått vid den bredaste delen av basen. Skillnaden är det totala yttre felet för den axeln.' },
    { type: 'paragraph', html: 'Om en 20.00 mm-kub mäter 20.02 mm i mitten men 20.24 mm vid basen, är basfelet relativt den stabila kroppen 0.22 mm. Ange 0.22 mm istället för skillnaden från nominellt värde. Detta tar bort orelaterad krympning, XY-stegfel eller skärarens linjebreddsbias från elefantfotsberäkningen. Du isolerar basdeformationen, inte kalibrerar hela skrivaren.' },
    { type: 'list', items: [
      'Mät efter att delen har svalnat till rumstemperatur, särskilt för ABS, ASA, PETG och stora PLA-delar.',
      'Använd lätt skjutmåttstryck; att klämma en mjuknad eller texturerad bas kan dölja den verkliga läppen.',
      'Ta mätningar på X- och Y-sidorna eftersom bäddrörelse, fläktriktning och portalskevhet kan göra defekten asymmetrisk.',
      'Ignorera brim- och kjolmaterial. Ta bort brimmet rent innan du mäter den faktiska delväggen.',
      'Skriv ut samma kupong igen efter att ha applicerat kompensation så att nästa mätning är jämförbar.',
    ] },
    { type: 'table', headers: ['Observation', 'Trolig orsak', 'Bästa första åtgärd'], rows: [
      ['Basen är bredare men övre väggen är korrekt', 'Elefantfot från första lagrets tryck', 'Använd denna kalkylator och applicera negativ horisontell expansion.'],
      ['Varje lager är för stort', 'XY-skala, extruderingsmultiplikator eller filamentdiameterfel', 'Kalibrera flöde och XY före elefantfotskompensation.'],
      ['Endast hörn buktar ut', 'Tryckframförhållning, hastighet eller kylningsproblem', 'Justera tryckframförhållning eller hörnhastighet.'],
      ['Bottensidan är grov och genomskinlig', 'Munstycke för nära eller första lagrets flöde för högt', 'Höj Z-offset eller minska första lagrets flöde före kompensation.'],
    ] },

    { type: 'title', text: 'Negativ horisontell expansion vs CAD-fas', level: 2 },
    { type: 'paragraph', html: 'Skärarens horisontella expansion flyttar polygongränsen inåt eller utåt före verktygsbanegenerering. För elefantfotskorrigering är inställningen normalt negativ: om basen mäter 0.20 mm för bred kan skäraren behöva ett värde nära -0.20 mm, modifierat här av lagertjocklek, Z-tryck och bäddtemperatur. Detta är snabbt, reversibelt och användbart för batchar där varje del har en liknande första lagers deformation.' },
    { type: 'paragraph', html: 'En CAD-fas tar bort material från själva modellen. Kalkylatorn rapporterar ett 45-graders fasdjup som <code>Fel x sqrt(2)</code>, vilket motsvarar en diagonal yta som rensar den horisontella basläppen. CAD-faser är ofta bättre för kritiska gränssnitt eftersom de bevarar de avsedda övre väggdimensionerna samtidigt som de ger det första lagret en kontrollerad avlastningsväg. De är också mer portabla mellan skärare eftersom geometrin bär kompensationen.' },
    { type: 'proscons', title: 'Välja en korrigeringsmetod', items: [
      { pro: 'Negativ horisontell expansion kan ändras snabbt per material- eller skrivarprofil.', con: 'Det kan påverka liten text, tunna väggar, stift och hål om det tillämpas globalt.' },
      { pro: 'CAD-faser är explicita och robusta för passningsytor nära byggplattan.', con: 'De kräver modelredigeringar och kan vara obekväma för nedladdade delar.' },
      { pro: 'Att kombinera en mild skärares offset med en liten fas kan kontrollera allvarliga PETG- eller ABS-baser.', con: 'Att stapla korrigeringar utan att mäta om kan göra delen för liten.' },
    ] },
    { type: 'message', title: 'Kompensera inte blint', html: 'Om första lagret är synligt överkrossat, åtgärda först Z-offset. Kompensation ska ta bort den återstående förutsägbara basexpansionen, inte dölja ett munstycke som plöjer genom det första lagret.' },

    { type: 'title', text: 'Föreslagen kompensation per material', level: 2 },
    { type: 'paragraph', html: 'Materialbeteende spelar roll eftersom vidhäftningstemperatur, glasövergång, kylningshastighet och viskositet påverkar hur långt den nedre strängen kan flyta innan den fryser. PLA svarar ofta bra på en liten negativ horisontell expansion efter att Z-offset är rimligt. PETG kan behöva en större korrigering eftersom det vanligtvis skrivs ut varmare på bädden och med ett första lager inställt för stark vidhäftning. ABS och ASA kan kräva CAD-avlastning på funktionella delar eftersom den varma bädden och kammaren håller basen mjuk längre.' },
    { type: 'table', headers: ['Material', 'Typiskt bäddintervall', 'Starttoleransmål', 'Kompensationsanteckningar'], rows: [
      ['PLA', '55-65 °C', '< 0.05 mm', 'Börja med korrekt Z-offset, använd sedan liten negativ horisontell expansion. En fas är användbar för presspassningsbaser.'],
      ['PETG', '70-85 °C', '< 0.07 mm', 'Förvänta dig en högre termisk faktor. Undvik överdrivet första lagers flöde eftersom PETG kan bilda en klibbig rundad läpp.'],
      ['ABS/ASA', '90-110 °C', '< 0.08 mm', 'Använd CAD-faser för produktionsdelar. Kammarvärme kan hålla de första lagren eftergivliga.'],
      ['TPU', '40-60 °C', 'applikationsspecifik', 'Flexibelt filament kan deformeras under skjutmått. Mät försiktigt och föredra geometrisk avlastning framför aggressiva globala offsetvärden.'],
    ] },
    { type: 'card', title: 'Varför tabellen är en startpunkt', html: 'Ett texturerat PEI-ark, slät glasbädd, munstycksdiameter, linjebredd, första lagrets hastighet, kylningsfördröjning, kammartemperatur och filamentmärke kan alla ändra det uppmätta felet. Tabellen sätter förväntningar; kalkylatorn bör drivas av din uppmätta kupong.' },
    { type: 'summary', title: 'Prioriteringar för materialinställning', items: [
      'PLA: korrigera Z-offset först, använd sedan liten skärarkompensation.',
      'PETG: övervaka bäddtemperatur och första lagrets flöde eftersom basen förblir rörlig.',
      'ABS/ASA: föredra CAD-faser på produktionsgränssnitt och verifiera efter kammaruppvärmning.',
      'Flexibla material: mätmetoden spelar roll eftersom basen kan komprimeras under skjutmåttets käftar.',
    ] },

    { type: 'title', text: 'Skärarinställningar som interagerar med elefantfotskompensation', level: 2 },
    { type: 'paragraph', html: 'Olika skärare visar inställningen under namn som Horizontal Expansion, Initial Layer Horizontal Expansion, Elephant Foot Compensation, XY Compensation eller första lagers expansion. En global horisontell expansion ändrar hela delens kontur. En endast-första-lager-inställning påverkar endast de nedre lagren och är vanligtvis säkrare för dimensionsnoggrannhet. När en skärare stöder båda, använd första lagers kompensation för elefantfot och reservera global XY-kompensation för kalibrerade storleksfel som kvarstår genom hela höjden.' },
    { type: 'paragraph', html: 'Linjebredd och första lagrets flöde interagerar också med korrigeringen. En mycket bred första lagers linje kan förbättra bäddvidhäftningen men ökar volymen som måste passa under munstycket. Om strängen inte har någonstans att ta vägen vertikalt, sprider den sig horisontellt. Att sänka första lagrets flöde från 105 procent till 100 procent, höja Z-offset med 0.02 mm eller sänka bäddtemperaturen med 5 °C kan minska den erforderliga negativa expansionen renare än att applicera en stor offset.' },
    { type: 'glossary', items: [
      { term: 'Horisontell expansion', definition: 'En skärares offset som expanderar eller drar ihop modellkonturer innan verktygsbanor genereras.' },
      { term: 'Första lagers expansion', definition: 'En variant som endast tillämpas på första lagret eller nedre lager, vilket gör den mer lämplig för elefantfot.' },
      { term: 'Z-trycksgap', definition: 'Det effektiva munstycke-till-bädd-utrymmet som bestämmer hur mycket den första strängen komprimeras.' },
      { term: 'Termisk faktor', definition: 'En multiplikator som används här för att representera ökat lateralt flöde när bädden är varmare än 60 °C.' },
      { term: 'CAD-fas', definition: 'En modellerad fasad kant som ger komprimerat första lagers material en geometrisk avlastningszon.' },
    ] },
    { type: 'diagnostic', variant: 'warning', title: 'Stor negativ expansion kan förstöra små detaljer', html: 'Ett värde som -0.35 mm kan fixa ytterbasen på en stor låda men radera små präglade bokstäver, minska smala ribbor och ändra diametern på små stolpar. När den erforderliga korrigeringen är stor, behandla det som en signal att ompröva Z-offset, första lagrets flöde eller bäddtemperatur.' },

    { type: 'title', text: 'Arbetsflöde för en precisionskorrigering av elefantfot', level: 2 },
    { type: 'list', items: [
      'Skriv ut en enkel kalibreringskupong med samma material, bäddtemperatur, första lagrets höjd och första lagrets hastighet som används för den verkliga delen.',
      'Mät den stabila kroppsdimensionen ovanför basen, mät sedan den bredaste basdimensionen och subtrahera de två.',
      'Ange uppmätt fel, första lagrets höjd, effektivt Z-trycksgap, bäddtemperatur och måltolerans.',
      'Applicera den rapporterade negativa horisontella expansionen i skäraren, eller lägg till den rapporterade 45-gradersfasen i CAD.',
      'Skriv ut kupongen igen och mät igen efter kylning.',
      'Om kvarvarande fel kvarstår över toleransen, justera i halvsteg istället för att hoppa till en extrem global offset.',
      'Lås in inställningen i en materialprofil först efter att två reproducerbara kuponger överensstämmer inom ditt toleransmål.',
    ] },
    { type: 'tip', title: 'Använd samma bäddtillstånd som produktion', html: 'En första kall utskrift på en tjock bädd kan bete sig annorlunda än den femte utskriften efter att bädden har värmts i 30 minuter. Om produktionsjobbet körs efter värmegenomblötning, kalibrera kupongen även efter värmegenomblötning.' },
    { type: 'diagnostic', variant: 'success', title: 'Bra korrigeringsmål', html: 'För praktiskt FDM-dimensionsarbete är en basavvikelse under 0.05 mm ofta tillräckligt liten för att monteringspassning styrs av normalt speldesign snarare än av elefantfotsläppen. Tätare mål kräver styva maskiner, stabilt filament och repeterbar mätteknik.' },
    { type: 'summary', title: 'Viktiga slutsatser', items: [
      'Elefantfot är ett tryck- och temperaturdeformationsproblem, inte bara en visuell defekt.',
      'Använd uppmätt basfel relativt den stabila väggen, inte bara nominell CAD-storlek.',
      'Negativ horisontell expansion är skärarkorrigeringen; en 45-graders fas är CAD-korrigeringen.',
      'Bäddtemperaturen höjer den termiska faktorn eftersom basen förblir mjukare och flyter i sidled längre.',
      'Allvarliga kompensationsvärden bör utlösa kontroller av Z och första lagrets flöde före produktionsanvändning.',
    ] },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
