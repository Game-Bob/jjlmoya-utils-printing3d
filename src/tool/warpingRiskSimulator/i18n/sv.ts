import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WarpingRiskSimulatorUI } from '../ui';

const slug = 'warping-riskosimulator-3d-utskrift';
const title = 'Warping riskosimulator för 3D utskrift';
const description = 'Uppskatta första lagrets lyftning och warping-risk baserat på materialkrympning, fotavtrycksarea, längsta diagonalen, bäddtemperatur, rumstemperatur och kammarförhållanden.';

const faqData = [
  {
    question: 'Varför påverkar den längsta diagonalen warping mer än fotavtrycksarean?',
    answer: 'Den längsta diagonalen representerar den största kontinuerliga krympningsvägen. En lång del kan ackumulera tillräckligt med linjär krympning för att lyfta hörn även om den totala kontaktytan verkar stor.',
  },
  {
    question: 'Garantierar denna simulator att min utskrift inte kommer att skeva?',
    answer: 'Nej. Det är en riskuppskattning. Fuktigt filament, smutsiga byggplattor, första lagrets höjd, drag, delgeometri och skärarens kylningsval kan förändra resultatet.',
  },
  {
    question: 'Vilka material behöver mest en sluten kammare?',
    answer: 'ABS, ASA, Nylon och PC är de mest kammarkänsliga i denna modell eftersom de kombinerar högre processtemperaturer, starkare krympning och större kylspänning.',
  },
  {
    question: 'Hur uppskattas brim-bredden?',
    answer: 'Simulatorn börjar med fem procent av den längsta diagonalen och skalar den baserat på beräknad risk, och klämmer sedan resultatet till praktiska skärarvärden.',
  },
];

const howToData = [
  { name: 'Välj material', text: 'Välj PLA, PETG, ABS, ASA, Nylon, PC eller TPU så att simulatorn kan tillämpa en krympningsklass.' },
  { name: 'Ange fotavtryck och diagonal', text: 'Använd ytan som vidrör bädden och det längsta hörn-till-hörn-avståndet för delen.' },
  { name: 'Ställ in den termiska miljön', text: 'Ange bädd- och rumstemperatur, och ange om skrivaren har en sluten kammare.' },
  { name: 'Kopiera skärarinställningar', text: 'Använd de föreslagna brim-, vidhäftnings-, kylnings- och kammarinställningarna som startprofil.' },
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

export const content: ToolLocaleContent<WarpingRiskSimulatorUI> = {
  slug,
  title,
  description,
  ui: {
    unitSystemLabel: 'Enhetssystem',
    unitMetric: 'Metriskt',
    unitImperial: 'Imperial',
    unitCelsius: '°C',
    unitFahrenheit: '°F',
    unitMillimeter: 'mm',
    unitInch: 'tum',
    noBrim: '0',
    material: 'Material',
    footprintArea: 'Fotavtrycksarea',
    footprintHelp: 'Yta som faktiskt vidrör byggplattan, inte modellens totala yta.',
    diagonal: 'Längsta diagonalen',
    diagonalHelp: 'Längsta hörn-till-hörn-avståndet för första lagret. Detta är den huvudsakliga termiska spänningsvektorn.',
    bedTemperature: 'Bäddtemperatur',
    bedTemperatureWarning: 'Temperaturvarning',
    ambientTemperature: 'Rumstemperatur',
    chamber: 'Sluten kammare',
    chamberOn: 'Stängd eller aktivt skärmad',
    chamberOff: 'Öppen skrivare',
    riskLow: 'Låg',
    riskMedium: 'Medel',
    riskHigh: 'Hög',
    riskCritical: 'Kritisk',
    riskIndex: 'Riskindex',
    thermalIndex: 'Termiskt spänningsindex',
    deltaT: 'Delta T',
    brimRecommendation: 'Brim-rekommendation',
    adhesionDiagnosis: 'Vidhäftningsdiagnos',
    adhesionStrength: 'Vidhäftningsstyrkestege',
    criticalWarnings: 'Kritiska varningar',
    whyDiagonalMatters: 'Varför diagonalen spelar roll',
    recommendedSettings: 'Rekommenderade skärarinställningar',
    copySettings: 'Kopiera inställningar',
    copied: 'Kopierad',
    simulatorNotice: 'Detta är en riskuppskattning, ingen framgångsgaranti. Filamentfuktighet, bäddkontaminering, Z-offset, drag och kylningsändringar förblir externa variabler.',
    warnings: {
      openTechnicalMaterial: '{material} utan sluten kammare är ett allvarligt warping-tillstånd.',
      bedTemperatureHigh: 'Bäddtemperaturen för {material} är över det rekommenderade intervallet {min}-{max} {unit}. Förvänta dig mjukgöring, elefantfot eller vidhäftningsartefakter.',
      bedTemperatureLow: 'Bäddtemperaturen för {material} är under det rekommenderade intervallet {min}-{max} {unit}. Första lagrets grepp kan vara för svagt för denna geometri.',
      narrowFootprint: 'Fotavtrycket är smalt jämfört med diagonalen, så hörnlyftning kan ackumuleras snabbt.',
      highDeltaT: 'Skillnaden mellan bädd- och rumstemperatur är mycket hög; kontrollera luftflöde och kylningshastighet.',
    },
    diagnosis: {
      critical: 'Brim är obligatoriskt. Använd en dedikerad vidhäftningsyta och undvik att skriva ut detta material i öppen luft.',
      highEnclosed: 'Bred brim och vidhäftningsmedel rekommenderas starkt.',
      highOpen: 'Använd brim, vidhäftningsmedel och en sluten kammare innan du börjar.',
      mediumEasyMaterial: 'Använd en ren PEI-yta; brim är valfritt för skarpa hörn.',
      medium: 'Använd brim eller mouseöron på hörnen och verifiera bäddvidhäftning.',
      low: 'Säker under normala första lagret förhållanden.',
    },
    adhesionOptions: {
      low: ['Rent PEI eller texturerad plåt: normalt grepp, enklast borttagning.'],
      medium: ['Limstift eller PVA-släppskikt: lätt extra grepp och säkrare PETG-släpp.', 'Mouseöron: lokaliserat grepp för hörn utan full brim.'],
      high: ['Bred brim plus limstift: brett mekaniskt stöd med måttlig rengöring.', 'Magigoo eller liknande vidhäftningsmedel: starkare grepp för ABS, ASA, PETG och Nylon-varianter.'],
      criticalDefault: ['Fullbredds brim: maximalt fotavtryck för första lagret.', 'Högstyrka vidhäftningsmedel: använd PEI plus ett högstyrka vidhäftningsmedel.', 'Sluten kammare: nödvändig för att vidhäftningsmedlet ska fungera konsekvent.'],
      criticalTechnical: ['Fullbredds brim: maximalt fotavtryck för första lagret.', 'Högstyrka vidhäftningsmedel: använd ett materialspecifikt vidhäftningsmedel matchat till Nylon eller PC.', 'Sluten kammare: nödvändig för att vidhäftningsmedlet ska fungera konsekvent.'],
    },
    slicerSettings: {
      brimWidth: 'Brim-bredd: {value}',
      bedAdhesion: 'Bäddvidhäftning: {value}',
      lowAdhesion: 'Rent PEI eller texturerad plåt',
      highAdhesion: 'PEI plus limstift, Magigoo eller materialspecifikt vidhäftningsmedel',
      cooling: 'Kylning: {value}',
      normalCooling: 'Normal delkylning efter lager 3',
      technicalCooling: 'Delkylning avstängd för de första 5-8 lagren',
      enclosedChamber: 'Håll kammaren stängd tills delen svalnat under glasövergångsintervallet',
      openChamber: 'Skydda skrivaren från drag och rumsluftflöde',
      skirtEnough: '0 mm, kjol räcker',
    },
    diagonalExplanation: 'Den längsta diagonalen fungerar som den huvudsakliga spänningsvektorn: när delen svalnar ackumuleras krympning längs det spannet och belastar hörnen även när fotavtrycksarean ser generös ut.',
  },
  seo: [
    { type: 'title', text: 'Hur man uppskattar warping-risk innan man skärar en 3D-utskrift', level: 2 },
    {
      type: 'paragraph',
      html: 'Warping är inte bara ett materialproblem och det är inte bara ett bäddvidhäftningsproblem. Det uppstår när ett utskrivet lager kyls, drar ihop sig och skapar tillräckligt med inre spänning för att övervinna greppet av det första lagret. En liten ABS-fäste kan misslyckas eftersom polymeren krymper kraftigt; en stor PLA-skylt kan misslyckas eftersom diagonalen är tillräckligt lång för att ackumulera sammandragning över ett brett spann. Den användbara frågan är därför inte helt enkelt <strong>kommer detta material att skeva?</strong> utan <strong>skapar denna geometri och termiska miljö mer dragkraft än byggplattan kan motstå?</strong>',
    },
    {
      type: 'paragraph',
      html: 'Denna simulator använder ett heuristiskt Termiskt Spänningsindex: <strong>materialkrympningsfaktor gånger längsta diagonalen gånger bädd-till-rumstemperaturskillnad, dividerat med fotavtrycksarea</strong>. Formeln är avsiktligt praktisk. Den låtsas inte vara finita elementanalys, men den kombinerar de variabler som operatörer kan mäta före utskrift: materialfamilj, kontaktyta, längsta linjära spann, bäddtemperatur, rumstemperatur och om skrivaren är sluten.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Använd resultatet som en preventiv signal',
      badge: 'Uppskattning',
      html: 'En låg poäng betyder att utskriften osannolikt lyfter om det första lagret är rent och väl inställt. En hög eller kritisk poäng betyder att skärarprofilen bör ändras före utskrift: bredare brim, vidhäftningsmedel, mindre kylning, dragskydd eller ett annat material. Simulatorn kan inte se fuktigt filament, oljigt PEI, ett munstycke för långt från bädden eller en del med minimala kontaktpunkter vid hörnen.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '5%', label: 'initial brim-bredd som en andel av den längsta diagonalen', icon: 'mdi:ruler' },
        { value: '1,85x', label: 'allvarlig öppen-kammare multiplikator för ABS, ASA, Nylon och PC', icon: 'mdi:home-alert' },
        { value: '0-100', label: 'risk skala kartlagd från Termiskt Spänningsindex', icon: 'mdi:gauge' },
      ],
    },
    { type: 'title', text: 'Varför den längsta diagonalen kan vara farligare än area', level: 2 },
    {
      type: 'paragraph',
      html: 'Fotavtrycksarean talar om hur mycket yta som finns tillgänglig för vidhäftning. Diagonalen talar om hur långt termisk krympning kan ackumuleras innan den når ett hörn eller en tunn ände. Två delar kan ha samma area och bete sig mycket olika: en kompakt kvadratisk dyna har korta krympningsvägar i alla riktningar, medan en lång smal remsa koncentrerar krympning längs en enda linje och försöker lossna vid ändarna.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Kompakt fotavtryck',
          description: 'En kvadratisk eller rund bas distribuerar krympning genom många korta vägar. Hörn är närmare centrum, så hävstången för lyftning är mindre.',
          icon: 'mdi:crop-square',
          points: ['Bättre lastfördelning', 'Lägre hörn-hävstång', 'Brim ofta valfritt på enkla material'],
        },
        {
          title: 'Långt diagonal fotavtryck',
          description: 'En lång rektangel, ram, blad, kammarpanel eller skena tillåter krympning att byggas upp längs en dominerande riktning. Ändar och hörn får den högsta skalkraften.',
          icon: 'mdi:vector-line',
          highlight: true,
          points: ['Högre ackumulerad spänning', 'Hörn lyfter först', 'Brim eller mouseöron ofta nödvändiga'],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Hur man snabbt mäter diagonalen',
      html: 'I skärarförhandsgranskningen, titta på första lagret ovanifrån och mät det längsta hörn-till-hörn-avståndet för delen som vidrör bädden. För ett rektangulärt fotavtryck, använd rektangelns diagonal, inte bara X- eller Y-längden. För en oregelbunden del, använd det längsta raka spannet mellan två yttre punkter.',
    },
    {
      type: 'table',
      headers: ['Geometrimönster', 'Typiskt symptom', 'Förebyggande åtgärd'],
      rows: [
        ['Lång tunn skena', 'Ändar lyfter medan mitten förblir fast', 'Använd brim eller mouseöron i båda ändar'],
        ['Stor flat panel', 'Hörn krullar sig gradvis uppåt', 'Använd sluten kammare, långsammare kylning och vidhäftningsmedel'],
        ['Liten hög del', 'Basen förblir fast men tornet vinglar', 'Warping är inte huvudrisken; förbättra stabilitet'],
        ['Öppen ram', 'Inre hörn drar inåt', 'Lägg till brim, öka första lagrets bredd, minska fläkt'],
      ],
    },
    { type: 'title', text: 'Materialkrympningsklasser som används av simulatorn', level: 2 },
    {
      type: 'paragraph',
      html: 'Olika termoplaster krymper i olika grad när de kyls från extrusionstemperatur till rumstemperatur. PLA och TPU är generellt förlåtande eftersom de skriver ut vid lägre temperaturer och skapar mindre kylspänning. PETG ligger i mitten: det fäster starkt men kan fortfarande dra i skarpa hörn. ABS, ASA, Nylon och PC behandlas som tekniska högriskmaterial eftersom de kombinerar högre extrusionstemperaturer, starkare krympning och ett större behov av en varm, stabil kammare.',
    },
    {
      type: 'table',
      headers: ['Material', 'Krympningsklass', 'Vanlig bäddstrategi', 'Kammarkänslighet'],
      rows: [
        ['PLA', 'Låg', 'Rent PEI, måttlig bädd', 'Låg'],
        ['TPU', 'Låg', 'Ren plåt, undvik överdriven klämning', 'Låg'],
        ['PETG', 'Medel', 'Texturerat PEI eller släppskikt', 'Medel'],
        ['ABS', 'Hög', 'PEI plus vidhäftningsmedel eller ABS-slam där lämpligt', 'Mycket hög'],
        ['ASA', 'Hög', 'PEI plus vidhäftningsmedel, kontrollerad kylning', 'Mycket hög'],
        ['Nylon', 'Hög', 'Materialspecificerat vidhäftningsmedel, torrt filament', 'Mycket hög'],
        ['PC', 'Hög', 'Hög temperatur bädd och vidhäftningsmedel', 'Mycket hög'],
      ],
    },
    {
      type: 'proscons',
      title: 'Byt material istället för att bekämpa warping',
      items: [
        { pro: 'Att byta från ABS till ASA kan förbättra utomhushållbarheten medan man behåller liknande termiskt beteende.', con: 'ASA behöver fortfarande kammardisciplin och kan skeva på långa delar.' },
        { pro: 'Att byta från ABS till PETG minskar krympning och är ofta tillräckligt för fästen och höljen.', con: 'PETG har lägre värmebeständighet och annan styvhet än ABS eller PC.' },
        { pro: 'Fiberfyllt Nylon kan minska vissa krympningsvägar och förbättra styvheten.', con: 'Det kräver torkning, slitstarka munstycken och stark vidhäftningskontroll.' },
      ],
    },
    { type: 'title', text: 'Delta T: varför bäddtemperatur och rumstemperatur båda spelar roll', level: 2 },
    {
      type: 'paragraph',
      html: 'Simulatorn använder <strong>Delta T</strong> som bäddtemperatur minus rumstemperatur. Detta är inte samma sak som munstyckstemperatur, men det är en användbar proxy för den termiska gradienten som den nedre delen av delen upplever. En varm bädd minskar tidig krympning vid gränsytan, men ett mycket kallt rum eller starkt luftflöde kan fortfarande dra värme från de övre lagren och skapa en spänningsgradient mellan den förankrade basen och den svalnande delen.',
    },
    {
      type: 'paragraph',
      html: 'För PLA kan en måttlig Delta T vara ofarlig eftersom materialet drar ihop sig mindre aggressivt. För ABS, ASA, Nylon och PC kan samma geometri vid samma bäddtemperatur misslyckas om skrivaren är utsatt för drag. Det är därför beräkningen tillämpar en allvarlig multiplikator när dessa tekniska material skrivs ut utan sluten kammare.',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Öppen skrivare med ABS, ASA, Nylon eller PC',
      badge: 'Kritiskt tillstånd',
      html: 'Om kammaren är öppen utsätts utskriften för lokal kylning, dörrrörelse, HVAC-luftflöde och snabba lagertemperaturförändringar. Det första lagret kan se perfekt ut under de första tjugo minuterna och ändå lyfta senare när delen lagrar mer krympningsspänning.',
    },
    {
      type: 'list',
      icon: 'mdi:thermometer',
      items: [
        'En varmare kammare minskar temperaturskillnaden mellan nya och äldre lager.',
        'En sluten kammare saktar också ner kylningen efter utskriften, vilket minskar plötslig hörnskalning.',
        'Dragskydd hjälper, men de är inte likvärdiga med en stabil uppvärmd kammare för PC eller Nylon.',
        'Att öka bäddtemperaturen ensam kan förbättra greppet, men kan också öka elefantfot på mjuka material.',
      ],
    },
    { type: 'title', text: 'Hur Termiskt Spänningsindex tolkas', level: 2 },
    {
      type: 'paragraph',
      html: 'Termiskt Spänningsindex är en relativ poäng, inte en uppmätt kraft i newton. Den stiger när krympningsfaktor, diagonal eller Delta T stiger. Den faller när fotavtrycksarean ökar eftersom mer kontaktyta kan distribuera samma dragbelastning. Värdet mappas sedan till en riskprocent på 0-100 så att olika utskriftsinställningar snabbt kan jämföras.',
    },
    {
      type: 'table',
      headers: ['Riskintervall', 'Betydelse', 'Rekommenderat svar'],
      rows: [
        ['0-31%', 'Låg', 'Rengör bädden, verifiera första lagret, ingen speciell vidhäftning behövs för de flesta former'],
        ['32-57%', 'Medel', 'Använd brim på skarpa hörn, minska tidig fläkt, inspektera fotavtryckskontakt'],
        ['58-81%', 'Hög', 'Använd bred brim, vidhäftningsmedel, sluten kammare om materialet kräver, undvik drag'],
        ['82-100%', 'Kritisk', 'Behandla som troligt att skeva om inte geometri, material eller miljö ändras'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:calculator-variant',
      title: 'Varför dividera med fotavtrycksarea?',
      html: 'Ett större fotavtryck ger bädden mer möjlighet att motstå skalkraft. Modellen belönar delar med brett, kontinuerligt kontakt och straffar smala baser, små fötter och långa delar som bara har en tunn remsa som vidrör ytan.',
    },
    { type: 'title', text: 'Brim-bredd, mouseöron och val av vidhäftningsmedel', level: 2 },
    {
      type: 'paragraph',
      html: 'Brim-rekommendationen börjar från <strong>Diagonal x 0,05</strong>. En diagonal på 180 mm börjar därför nära 9 mm före riskskalning. I praktiken bör brim inte väljas enbart efter material. En kort PLA-kub kan behöva ingen brim, medan ett långt PLA-svärd, skylt eller skena kan dra nytta av en blygsam brim eftersom diagonalen är den dominerande spänningsvägen.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: 'Brim', description: 'Bästa allround-val för att öka första lagrets kontakt runt hela delen.', icon: 'mdi:border-outside', points: ['Lätt att ta bort på PLA', 'Mycket användbar på ABS-hörn'] },
        { title: 'Mouseöron', description: 'Lokala cirkulär dynor placerade vid hörn eller tunna ändar där lyftning börjar.', icon: 'mdi:circle-outline', points: ['Mindre rengöring', 'Bra för skenor och ramar'] },
        { title: 'Vidhäftningsmedel', description: 'Förbättrar kemiskt eller mekaniskt grepp mellan polymer och utskriftsyta.', icon: 'mdi:water-plus', points: ['Användbart för Nylon och PC', 'Ytspecifikt val spelar roll'] },
      ],
    },
    {
      type: 'tip',
      title: 'Gör inte brim till den enda lösningen',
      html: 'Om simulatorn rapporterar kritisk risk kan en bredare brim försena misslyckande men inte ta bort den underliggande spänningen. Kombinera brim med sluten kammare, långsammare initial kylning, en renare bädd och geometriändringar som rundade hörn eller delade delar.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Warping', definition: 'Uppåtgående deformation orsakad av kylkrympning som övervinner bäddvidhäftning.' },
        { term: 'Fotavtrycksarea', definition: 'Området av modellen som vidrör byggplattan på första lagret.' },
        { term: 'Längsta diagonalen', definition: 'Det längsta raka spannet över första lagrets kontaktform.' },
        { term: 'Delta T', definition: 'Temperaturskillnaden mellan bädden och den omgivande rumsluften.' },
        { term: 'Brim', definition: 'Extra första lagret omkretsloopar utskrivna runt delen för att öka vidhäftning.' },
      ],
    },
    { type: 'title', text: 'Praktiska skärarinställningar för högriskdelar', level: 2 },
    {
      type: 'list',
      icon: 'mdi:tune',
      items: [
        'Öka första lagrets linjebredd för att skapa mer kontakt, men undvik överdriven Z-klämning som orsakar åsar.',
        'Använd ett långsammare första lager så att polymeren binder till bädden innan senare lager drar i den.',
        'Inaktivera eller minska delkylning för ABS, ASA, Nylon och PC under de första lagren.',
        'Lägg till en brim som är tillräckligt bred för att nå bortom skarpa hörn och smala ändar.',
        'Undvik att placera stora tekniska materialdelar nära kammardörrar, ventiler eller kalla sidopaneler.',
      ],
    },
    {
      type: 'message',
      title: 'Geometriändringar som minskar risken',
      ariaLabel: 'Idea för geometrisk mildring',
      html: 'Runda skarpa hörn, dela mycket långa paneler i kortare sektioner, lägg till temporära flikar på tunna ändar, orientera delen så att den längsta spänningsvägen blir kortare, eller lägg till offerdynor som kan trimmas efter utskrift. Dessa ändringar fungerar ofta bättre än att bara höja bäddtemperaturen.',
    },
    {
      type: 'summary',
      title: 'Snabb tolkningschecklista',
      items: [
        'Högkrympande material plus öppen kammare är den starkaste varningssignalen.',
        'Lång diagonal plus litet fotavtryck innebär att hörn och ändar förtjänar brim eller mouseöron.',
        'Hög bäddtemperatur upphäver inte ett kallt rum eller dragig miljö.',
        'Resultatet är en planeringsuppskattning; första lagrets kalibrering och filamentets skick avgör fortfarande den slutliga utskriften.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
