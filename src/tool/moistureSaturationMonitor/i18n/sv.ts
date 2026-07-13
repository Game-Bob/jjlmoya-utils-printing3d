import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MoistureSaturationMonitorUI } from '../ui';

const slug = 'filament-dehydratiserings-estimator';
const title = 'Filament Dehydratiserings Estimator: Guide för Termisk Regenerering';
const description = 'Modellera hygroskopisk filamentsaturation med exponentiell adsorptionskinetik, fuktponering, polymertyp och torkkammartemperatur.';

const faqData = [
  {
    question: 'Hur beräknar filament dehydratiserings estimatorn fuktmättnad?',
    answer: 'Den använder en exponentiell mättnadsmodell: maximal materialabsorption multiplicerad med ett minus e till minus kinetisk koefficient gånger exponeringstid, och sedan skalad efter omgivningens relativa fuktighet.',
  },
  {
    question: 'Varför behöver Nylon mer torkning än PLA?',
    answer: 'Nylon har högre fuktkapacitet och snabbare adsorptionskoefficient än PLA, så det når en skadlig vattenhalt tidigare under samma luftfuktighet och exponeringstid.',
  },
  {
    question: 'Betyder en högre torktemperatur alltid säkrare torkning?',
    answer: 'Nej. Högre temperatur påskyndar dehydratiseringen, men varje polymer har ett säkert kammartemperaturintervall. Att överskrida det kan mjuka upp filamentet, deformera spolen eller förändra utskriftsbeteendet.',
  },
  {
    question: 'Vad betyder indikatorn för hydrolysrisk?',
    answer: 'Den jämför beräknad vattenhalt med materialets kritiska tröskelvärde och varnar när absorberad fukt är tillräckligt hög för att öka bubblor, stringing, svaga lager eller skada polymerkedjor.',
  },
];

const howToData = [
  { name: 'Välj polymer', text: 'Välj PLA, PETG, ABS, ASA, TPU, Nylon, PC eller PVA så att modellen kan ladda rätt jämviktskapacitet och kinetisk koefficient.' },
  { name: 'Ange lagringsfuktighet', text: 'Ställ in den relativa luftfuktigheten där spolen exponerades, med hjälp av fuktmätningen för rummet, lådan eller verkstaden.' },
  { name: 'Ställ in exponeringstid', text: 'Ange hur många dagar filamentet tillbringade utanför en förseglad dry box eller aktiv torkare.' },
  { name: 'Välj torktemperatur', text: 'Använd en kammartemperatur inom det säkra intervallet för polymeren och spolmaterialet.' },
  { name: 'Starta torkcykeln', text: 'Starta den sparade torktimern och låt sedan kammarvisualiseringen tömmas gradvis i takt med att den uppskattade fuktbelastningen avlägsnas.' },
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

export const content: ToolLocaleContent<MoistureSaturationMonitorUI> = {
  slug,
  title,
  description,
  ui: {
    unitSystemLabel: 'Enheter',
    metricLabel: 'Metrisk',
    imperialLabel: 'Imperial',
    materialLabel: 'Polymer',
    materialPlaLabel: 'PLA',
    materialPetgLabel: 'PETG',
    materialAbsLabel: 'ABS',
    materialAsaLabel: 'ASA',
    materialTpuLabel: 'TPU',
    materialPaLabel: 'Nylon PA',
    materialPcLabel: 'Polykarbonat',
    materialPvaLabel: 'PVA-support',
    humidityLabel: 'Relativ fuktighet',
    exposureLabel: 'Exponeringstid',
    dryTempLabel: 'Torkkammare',
    spoolMassLabel: 'Spolens massa',
    calculateLabel: 'Starta torkcykel',
    pauseCycleLabel: 'Pausa cykel',
    resumeCycleLabel: 'Återuppta cykel',
    resetCycleLabel: 'Återställ cykel',
    saturationLabel: 'Fukthalt',
    absorbedLabel: 'Absorberat vatten',
    dryingTimeLabel: 'Torkcykel',
    remainingTimeLabel: 'Tid kvar',
    cycleProgressLabel: 'Cykelstatus',
    hydrolysisLabel: 'Hydrolysrisk',
    stableLabel: 'Stabil',
    watchLabel: 'Bevakningszon',
    criticalLabel: 'Kritisk',
    chamberReadyLabel: 'Kammare klar',
    chamberRunningLabel: 'Torkcykel pågår',
    chamberCompleteLabel: 'Fukt tömd',
    curveLabel: 'Adsorptionskurva',
    kineticLabel: 'Mättnadskinetik',
    equilibriumLabel: 'Exponentiellt närmande till jämviktsmättnad',
    daysUnit: 'dagar',
    percentUnit: '%',
    gramsUnit: 'g',
    poundsUnit: 'lb',
    celsiusUnit: 'C',
    fahrenheitUnit: 'F',
    hoursUnit: 'h',
    minutesUnit: 'm',
    secondsUnit: 's',
    noValueLabel: '-',
  },
  seo: [
    { type: 'title', text: 'Att förstå adsorptionskinetik: varför Nylon inte beter sig som PLA', level: 2 },
    { type: 'paragraph', html: 'En seriös <strong>torktidsberäknare för 3D-filament</strong> kan inte behandla fukt som en rak linje. Hygroskopiska polymerer absorberar inte samma procentandel vatten varje dag för alltid. De närmar sig ett jämviktstillstånd: snabbt i början, långsammare nära mättnad, och starkt beroende av omgivningens relativa fuktighet. Det är därför en spole som legat i 70% relativ luftfuktighet i två dagar inte bara är hälften så våt som en spole som legat där i fyra dagar. Den första delen av exponeringen ger ofta den brantaste fuktökningen, särskilt i Nylon, TPU, PVA och andra material med polära grupper som attraherar vattenmolekyler.' },
    { type: 'paragraph', html: 'Detta verktyg modellerar fukthalten med <code>S_h = S_max x (1 - e^(-k x t)) x RH/100</code>. Där <code>S_max</code> är polymerens jämviktsabsorptionskapacitet, <code>k</code> är adsorptionshastigheten, <code>t</code> är exponeringstiden och <code>RH</code> skalar resultatet till lagringsmiljön. Resultatet är inte ett laboratoriecertifikat; det är en ingenjörsmässig planeringsmodell som förklarar varför samma verkstad kan lämna PLA utskriftsklart medan Nylon fräser, bubblar, stringar och förlorar lagerstyrka.' },
    { type: 'stats', columns: 4, items: [
      { value: '0.65%', label: 'Planerad jämviktskapacitet för PLA' },
      { value: '3.2%', label: 'Planerad jämviktskapacitet för Nylon PA' },
      { value: '5.8%', label: 'Planerad jämviktskapacitet för PVA-supportfilament' },
      { value: 'RH-skalad', label: 'Omgivande luftfuktighet multiplicerar mättnadskurvan' },
    ] },
    { type: 'diagnostic', variant: 'info', title: 'Fuktsymptom är processymptom', badge: 'Utskriftsledtråd', html: 'Smällande ljud, ångbubblor, förändringar från satin till grov yta, överdriven stringing, svaga väggar och grumligt extrudat är inte slumpmässiga slicerproblem. De indikerar ofta att vatten förångas i smältzonen eller att hydrolys har förkortat polymerkedjelängden före deponering.' },

    { type: 'title', text: 'Hur den exponentiella mättnadsmodellen förändrar torkbeslut', level: 2 },
    { type: 'paragraph', html: 'Linjära kalkylatorer frågar vanligtvis efter ett material och returnerar ett fast antal timmar. Det fungerar för en snabb påminnelse, men döljer den verkliga frågan: hur mycket fukt har filamentet faktiskt absorberat? En spole som förvarats i en förseglad dry box vid 15% relativ luftfuktighet i tre veckor kan behöva lite eller ingen regenerering. Samma polymer som ligger öppen i ett fuktigt garage under en helg kan behöva en hel kammarcykel. Mättnadsmodellering kopplar torkrekommendationen till exponeringshistorik istället for att behandla varje spole som lika våt.' },
    { type: 'table', headers: ['Indata', 'Fysikalisk betydelse', 'Effekt på uppskattningen'], rows: [
      ['Relativ fuktighet', 'Vattenaktivitet runt spolen', 'Högre RH höjer jämviktsmålet och den slutliga absorberade procenten.'],
      ['Exponeringstid', 'Hur länge diffusionen har tillåtits fortskrida', 'De första dagarna är viktigast; kurvan planar ut när den närmar sig mättnad.'],
      ['Materialkoefficient', 'Hur snabbt en polymer närmar sig jämvikt', 'Nylon och PVA rör sig snabbare än PLA eller ASA.'],
      ['Torktemperatur', 'Termisk energi tillgänglig för desorption', 'Högre säker kammartemperatur förkortar den uppskattade cykeln.'],
      ['Spolens massa', 'Mängden polymer närvarande', 'Procentandelen är materialtillstånd; absorberade gram skalar med spolens massa.'],
    ] },
    { type: 'tip', title: 'Uppskatta den faktiska miljön, inte väderappen', html: 'Använd luftfuktigheten inuti förvaringslådan, skrivarkabinettet, skåpet eller verkstaden där filamentet faktiskt låg. En lokal väderrapport kan skilja sig kraftigt från luftfuktigheten bredvid en uppvärmd skrivare, en källarhylla eller en förseglad behållare med torkmedel.' },
    { type: 'card', icon: 'mdi:chart-bell-curve', title: 'Varför ringen saktar ner nära mättnad', html: 'Den visuella ringen följer samma exponentiella beteende som ekvationen. Den fylls snabbt när polymeren är torr eftersom fuktgradienten är stark. Nära jämvikt blir gradienten svagare, så den skenbara fyllningshastigheten saktar ner. Den inbromsningen är fysik, inte ett animationstrick.' },

    { type: 'title', text: 'Filamenttorkintervall per material', level: 2 },
    { type: 'paragraph', html: 'Torkrekommendationer måste respektera polymeren och spolen. PLA kan mjukna eller krypa vid överhettning. PETG tål mer värme men drar ändå nytta av konservativ kammarstyrning. Nylon kräver normalt en varmare och längre cykel eftersom det absorberar mer vatten och håller det mer aggressivt. PVA är extremt fuktkänsligt och kan bli omöjligt att skriva ut med om det lämnas exponerat. PC skriver ofta ut bättre efter torkning även när det inte ser uppenbart vått ut. Estimatorn använder dessa skillnader för att förvandla en generisk <strong>filamenttorkkalkylator</strong> till en materialspecifik guide.' },
    { type: 'comparative', columns: 2, items: [
      { title: 'Låg till måttlig hygroskopisk respons', description: 'PLA, ABS och ASA absorberar i allmänhet mindre vatten och långsammare, men drabbas ändå av kvalitetsförlust efter lång fuktig exponering.', points: ['Kortare torkcykler', 'Lägre jämviktsfuktighet', 'Symptom kan uppträda gradvis'] },
      { title: 'Hög hygroskopisk respons', description: 'Nylon, TPU, PVA och vissa PC-kvaliteter kräver mer aktiv förvaring och mer disciplinerad regenerering.', points: ['Högre absorberad vattenmassa', 'Snabbare tidig mättnad', 'Större risk för bubbelbildning och svaga lager'] },
    ] },
    { type: 'table', headers: ['Material', 'Typiskt kammarmål', 'Planeringsnotering'], rows: [
      ['PLA', '40-55 C', 'Undvik överdriven värme eftersom PLA och vissa spolhylsor kan deformeras.'],
      ['PETG', '55-70 C', 'Förbättrar ofta ytkonsekvensen och stringing efter flera timmar.'],
      ['ABS / ASA', '65-85 C', 'Lägre absorption än Nylon men drar nytta av torr lagring.'],
      ['TPU', '45-60 C', 'Flexibla kvaliteter kan absorbera tillräckligt med fukt för att skumma eller stringa.'],
      ['Nylon PA', '70-90 C', 'Behöver vanligtvis aktiv torkning före kritiska funktionella utskrifter.'],
      ['PVA', '40-55 C', 'Fuktkänsligt supportmaterial; förslut omedelbart efter användning.'],
    ] },
    { type: 'proscons', title: 'Fast torktabell vs mättnadsmonitor', items: [
      { pro: 'En fast tabell är snabb när du bara behöver en standardcykel.', con: 'Den kan inte skilja en spole i dry box från en spole i fuktig utomhusluft.' },
      { pro: 'Mättnadsmodellering förklarar varför tidig exponering kan vara allvarlig.', con: 'Den beror fortfarande på ungefärliga materialkoefficienter och lagringshistorik.' },
      { pro: 'En inmatning av torktemperatur återspeglar den faktiska kammaruppsättningen.', con: 'Den ersätter inte säkra temperaturgränser från filamenttillverkaren.' },
      { pro: 'Absorberade gram gör resultatet påtagligt för fulla och delvisa spolar.', con: 'Spolens massa avslöjar inte om de yttre lindningarna är våtare än kärnan.' },
    ] },

    { type: 'title', text: 'Hydrolysrisk: när vått filament blir skadat filament', level: 2 },
    { type: 'paragraph', html: 'Fukt är inte bara ett problem för utskriftskvaliteten. Vid extruderingstemperaturer kan absorberat vatten bidra till hydrolys i känsliga polymerer. Hydrolys bryter molekylkedjor, vilket minskar seghet, töjning och tillförlitlighet. Effekten är särskilt viktig för konstruktionsmaterial som används i fästen, fixturer, kugghjul, kanaler och delar som bär last. En våt spole kan fortfarande extrudera, men delen kan gå sönder tidigare eftersom polymeren bröts ner kemiskt under bearbetningen.' },
    { type: 'glossary', items: [
      { term: 'Hygroskopi', definition: 'Ett materials tendens att attrahera och hålla kvar vatten från den omgivande luften.' },
      { term: 'Jämviktsfuktighet', definition: 'Den fukthalt en polymer närmar sig efter tillräckligt med tid vid en viss luftfuktighet.' },
      { term: 'Adsorptionskoefficient', definition: 'Ett förenklat kinetiskt värde som styr hur snabbt mättnadskurvan stiger.' },
      { term: 'Desorption', definition: 'Den omvända processen: vatten som lämnar polymeren under uppvärmd torkning.' },
      { term: 'Hydrolys', definition: 'Kemisk kedjeklyvning orsakad av vatten under värme, relevant för flera konstruktionspolymerer.' },
    ] },
    { type: 'diagnostic', variant: 'warning', title: 'En torr yta garanterar inte en torr kärna', badge: 'Diffusionsgräns', html: 'Filament torkar utifrån och in. En kort het luftstöt kan förbättra ytan medan de inre lindningarna på en tät spole förblir fuktiga. Stora spolar, kartongsidor och hårt lindat filament kan alla fördröja regenereringen.' },
    { type: 'message', title: 'Den visuella regeln', html: 'När ringen ändras från ren blå till en dämpad gråblå färg markerar verktyget en övergång från normal fukthantering till en hydrolysbevakningszon. Det är punkten där torkning blir en del av kvalitetskontrollen, inte bara kosmetisk sanering.' },

    { type: 'title', text: 'Att bygga ett tillförlitligt arbetsflöde för filamenttorkning', level: 2 },
    { type: 'paragraph', html: 'En användbar <strong>saturationsguide för hygroskopiska material</strong> kombinerar förutsägelse med rutin. Mät lagringsfuktigheten, märk spolar med öppningsdatum, förvara känsliga polymerer i förseglade lådor, byt torkmedel innan det mättas, och torka före utskrifter där mekanisk prestanda är viktig. Det bästa arbetsflödet förhindrar upprepade våt-torrcykler eftersom varje onödig värmecykel kan åldra materialet, skeva spolar eller slösa produktionstid.' },
    { type: 'list', items: [
      'Torka Nylon, PVA, TPU och PC före långa utskrifter när lagringshistoriken är osäker.',
      'Håll även PLA och PETG förseglade; lägre absorption betyder inte noll absorption.',
      'Använd en oberoende termometer inuti torkaren eftersom displaytemperaturer kan vara optimistiska.',
      'Låt filamentet matas från en dry box under utskrifter som varar flera timmar i fuktiga rum.',
      'Byt eller regenerera torkmedel när indikatorpärlor eller fuktsensorer visar att fuktigheten i lådan stiger.',
      'Undvik att torka över filamentets och spolens glastemperatur eller mjukningsområde.',
    ] },
    { type: 'card', icon: 'mdi:air-filter', title: 'Torkkammaren är ett regenereringssystem', html: 'Kammaren måste ge stabil värme, luftflöde och en väg för fukt att lämna. Att värma en förseglad låda utan ventilation eller torkmedel kan helt enkelt flytta vatten från filamentet till kammarluften och tillbaka igen.' },
    { type: 'summary', title: 'Checklista för praktisk tolkning', items: [
      'Fuktprocent beskriver materialtillståndet; absorberade gram beskriver fuktbelastningen i spolen.',
      'Hög luftfuktighet och snabba material skapar brant tidig mättnad.',
      'Torktiden bör öka med mättnad och minska med en säker kammartemperatur.',
      'Hydrolysrisk är mest kritisk för högtemperaturextrudering och funktionella delar.',
      'Tillverkarens datablad gäller före alla generella torkuppskattningar.'
    ] },

    { type: 'title', text: 'SEO-svar: hur länge ska jag torka 3D-skrivarfilament?', level: 2 },
    { type: 'paragraph', html: 'Rätt torktid beror på material, fuktexponering, spolens massa och kammartemperatur. PLA kan behöva bara några timmar efter måttlig exponering, PETG och TPU behöver ofta längre, och Nylon oder PVA kan kräva en betydande regenereringscykel efter fuktig lagring. Ett gediget arbetsflöde för <strong>fukthalt vid 3D-utskrift</strong> uppskattar först det absorberade vattnet, och väljer sedan en säker torktemperatur och tillräckligt med tid for desorption. Det är mer tillförlitligt än att tillämpa ett enda universellt värde på alla polymerer.', },
    { type: 'diagnostic', variant: 'success', title: 'Bästa användningsfall för denna monitor', badge: 'Ingenjörsinspektion', html: 'Använd estimatorn före kritiska utskrifter, produktionsserier, dyra konstruktionspolymerer eller alla jobb där en misslyckad yta, ett sprött lager eller en del med otillräcklig styrka skulle kosta mer än en torkcykel.' },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
