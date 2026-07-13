import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MultiMaterialPurgeCalculatorUI } from '../ui';

const slug = 'multi-material-purge-kalkylator';
const title = 'Multi Material Purge Calculator: Analysera & Optimera Filamentavfall';
const description = 'Uppskatta AMS- och MMU-purgetornvolym, bortkastad filamentmassa och övergångskostnad med en pigmentintensitetsmatris för färgbyten.';

const faqData = [
  {
    question: 'Varför tilldelas svart till vitt en högre purgefaktor än vitt till svart?',
    answer: 'Mörka pigment förorenar ljusa polymerer mer synligt än ljusa pigment förorenar mörka polymerer. Kalkylatorn modellerar därför svart till vitt som en övergång med hög faktor och vitt till svart som en övergång med lägre faktor.',
  },
  {
    question: 'Är denna kalkylator en ersättning för slicerns spolvolymer?',
    answer: 'Nej. Det är en diagnostisk planerare som uppskattar purge-ekonomin före slicing eller budgetering. Använd slicerns kalibreringsresultat för slutgiltig maskinspecifik justering.',
  },
  {
    question: 'Vilket purgeförhållande bör jag betrakta som för högt?',
    answer: 'Verktyget flaggar ett högt avfallsförhållande över 30 procent av den totala extruderade volymen. Den tröskeln innebär vanligtvis att färgordning, gruppering, purge-to-infill eller modelluppdelning bör ses över.',
  },
  {
    question: 'Kan jag använda det för materialbyten, inte bara färgbyten?',
    answer: 'Den nuvarande matrisen fokuserar på pigmentförorening. Blandade polymerer, lösliga stödmaterial, slipande material och temperaturförändringar kan kräva extra purge utöver färgfaktorn.',
  },
];

const howToData = [
  {
    name: 'Ange objekt- och baspurgevolym',
    text: 'Skriv in den verkliga modellvolymen och standardpurgevolymen som din AMS- eller MMU-profil använder för ett normalt filamentbyte.',
  },
  {
    name: 'Välj ursprungs- och destinationsfärger',
    text: 'Använd de cirkulära färgväljarna för varje övergång. Övergångsfaktorn uppdateras omedelbart från pigmentmatrisen.',
  },
  {
    name: 'Ställ in övergångsantal',
    text: 'Ange hur många gånger varje färgpar förekommer i jobbet. Upprepade mörkt-till-ljust-byten kommer att dominera den totala purge-uppskattningen.',
  },
  {
    name: 'Läs förhållande, massa och kostnad',
    text: 'Använd objekt- mot purgestapeln, avfallsmassan och kostnadsresultatet för att avgöra om utskriften bör omorganiseras före produktion.',
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

export const content: ToolLocaleContent<MultiMaterialPurgeCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    unitSystemLabel: 'Enheter',
    metricLabel: 'Metriskt',
    imperialLabel: 'Imperiskt',
    currencyLabel: 'Valuta',
    currencyOptions: [
      { code: 'EUR', label: 'EUR' },
      { code: 'USD', label: 'USD' },
      { code: 'GBP', label: 'GBP' },
      { code: 'JPY', label: 'JPY' },
      { code: 'CAD', label: 'CAD' },
      { code: 'AUD', label: 'AUD' },
      { code: 'CHF', label: 'CHF' },
      { code: 'MXN', label: 'MXN' },
      { code: 'BRL', label: 'BRL' },
      { code: 'CNY', label: 'CNY' },
      { code: 'IDR', label: 'IDR' },
      { code: 'KRW', label: 'KRW' },
      { code: 'PLN', label: 'PLN' },
      { code: 'RUB', label: 'RUB' },
      { code: 'SEK', label: 'SEK' },
      { code: 'TRY', label: 'TRY' },
    ],
    modelInputsTitle: 'Kostnadsmodell',
    objectVolumeLabel: 'Objektvolym',
    basePurgeLabel: 'Bas-purge per byte',
    densityLabel: 'Densitet g/cm3',
    priceLabel: 'Pris per kg',
    transitionsTitle: 'Pigmentövergångsmatris',
    fromLabel: 'Från',
    toLabel: 'Till',
    colorLabels: {
      white: 'Vit',
      natural: 'Natur',
      yellow: 'Gul',
      red: 'Röd',
      blue: 'Blå',
      green: 'Grön',
      gray: 'Grå',
      black: 'Svart',
    },
    countLabel: 'Byten',
    objectLabel: 'Objektets verkliga plast',
    purgeTowerLabel: 'Purgetorn avfall',
    totalWasteLabel: 'Purgevolym',
    wasteCostLabel: 'Avfallskostnad',
    purgeRatioLabel: 'Purgeförhållande',
    massLabel: 'Avfallsmassa',
    loadbarAriaLabel: 'Objektvolym jämförd med purgetornvolym',
    alertTitle: 'Högt avfallsförhållande upptäckt',
    alertText: 'Högt avfallsförhållande upptäckt: Gruppering av liknande färger rekommenderas.',
    efficientText: 'Purgeförhållandet ligger inom planeringsgränsen.',
    factorGuideTitle: 'Purgefaktor-guide per övergång',
    transitionLabel: 'Övergång',
    factorLabel: 'Faktor',
    volumeLabel: 'Purgevolym',
    cm3Unit: 'cm3',
    in3Unit: 'in3',
    gUnit: 'g',
    ozUnit: 'oz',
  },
  seo: [
    {
      type: 'title',
      text: 'Hur AMS- och MMU-purgeavfall blir en verklig produktionskostnad',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En multi-material-utskrift förbrukar inte filament endast i det synliga objektet. Varje färg- eller materialbyte lämnar smält polymer i hotenden, smältzonen, munstycket och ibland i början av nästa extrusionsbana. Skrivaren måste trycka tillräckligt med nytt filament genom den banan innan nästa synliga yta är ren. I AMS-, MMU-, verktygshuvudväxlare- och palette-arbetsflöden blir den rengöringsextrusionen ofta ett purgetorn, purgeblock, purgelinje eller avfallskanal. Den viktiga ekonomiska poängen är enkel: tornet kan prissättas som vilken annan del som helst eftersom det har volym, massa och materialkostnad.',
    },
    {
      type: 'paragraph',
      html: 'Generiska kalkylatorer multiplicerar ofta antalet byten med en fast spolvolym. Det är användbart för en grov budget, men det missar det dyraste felsättet i färgutskrift: <strong>asymmetrisk kontaminering</strong>. Vitt till svart kräver inte samma rengöring som svart till vitt. En liten mängd svart pigment som förs in i vitt PLA, PETG eller ABS syns snabbt, medan en liten mängd vitt som förs in i svart vanligtvis döljs av den mörkare pigmentbelastningen. Detta verktyg använder en övergångsmatris så att varje riktning har sin egen multiplikator.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '30%', label: 'Hög purgeförhållande-varningströskel som används av instrumentpanelen' },
        { value: '1.6x', label: 'Standard svart-till-vitt övergångsmultiplikator' },
        { value: '0.8x', label: 'Standard vitt-till-svart övergångsmultiplikator' },
        { value: '0 knappar', label: 'Alla beräkningar uppdateras omedelbart medan du redigerar' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Det dyra symptomet att hålla utkik efter',
      badge: 'Avfallsrevision',
      html: 'När purgetornet överstiger 30 procent av den kombinerade objekt- och purgevolymen är jobbet inte längre bara en färgglad utskrift. Det är en materialomvandlingsprocess där en stor del av inköpt filament blir icke-produktivt utfall. Det är den punkt där färgordning, modelluppdelning, purge-to-infill och batchningshantering förtjänar uppmärksamhet innan maskinen startar.',
    },
    {
      type: 'title',
      text: 'Övergångsmatrisen bakom kalkylatorn',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kärnmodellen är <code>Vtotal = sum(Vbas x Ka,b)</code>. <code>Vbas</code> är baspurgevolymen för ett standard filamentbyte. <code>Ka,b</code> är faktorn för att gå från färg <code>a</code> till färg <code>b</code>. En faktor under 1 innebär att övergången vanligtvis är enklare än baslinjen. En faktor över 1 innebär att nästa färg är känslig för kontaminering eller att den föregående färgen har stark pigmentöverföring. Resultatet är en purgevolym i kubikcentimeter, som sedan omvandlas till massa med hjälp av filamentdensitet.',
    },
    {
      type: 'paragraph',
      html: 'Kostnadsformeln är <code>Cavfall = ((Vtotal x densitet) / 1000) x prisKg</code>. Om purgetornet använder 80 cm3 PLA vid 1,24 g/cm3 förbrukar det 99,2 g filament. Vid 24 per kilogram kostar det tornet 2,38 i material innan elektricitet, maskintid, misslyckade färgövergångar eller efterbehandling räknas in. För en hobbyutskrift kan det vara acceptabelt. För återkommande produktion är det en kostnadspost.',
    },
    {
      type: 'table',
      headers: ['Övergång', 'Standardfaktor', 'Varför den viktas så'],
      rows: [
        ['Vitt till svart', '0,80x', 'Svart döljer små ljusa rester, så toleransen för synlig kontaminering är högre.'],
        ['Svart till vitt', '1,60x', 'Mörka rester i vitt är omedelbart synliga och kräver vanligtvis en längre spolning.'],
        ['Natur till vitt', '1,15x', 'Genomskinligt eller naturligt material kan färga opakt vitt tills smältbanan är renare.'],
        ['Gult till vitt', '1,35x', 'Gula pigment kan värma eller missfärga ljusa ytor, även om det är mindre allvarligt än svart.'],
        ['Rött till gult', '1,08x', 'Röd överföring ändrar nyansen kraftigt i gula och orange-nära färger.'],
        ['Grått till svart', '0,72x', 'Grå rester döljs vanligtvis av svart pigment, så purgen kan vara lägre.'],
      ],
    },
    {
      type: 'tip',
      title: 'Använd din slicerkalibrering som basvolym',
      html: 'Kör först leverantörens eller communityns spolkalibrering för din skrivare och ange sedan resultatet som baspurgevolym. Matrisen bör skala en känd baslinje, inte ersätta maskinspecifik justering för munstycksdiameter, hotendvolym, filamentbanlängd och slicerbeteende.',
    },
    {
      type: 'title',
      text: 'Varför polymeropacitet ändrar erforderlig purgevolym',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Opacitet styr hur synlig föregående färgs kontaminering är i nästa material. Opakt vitt är krävande eftersom det reflekterar ljus starkt och visar mörkare partiklar eller strimmor nära ytan. Naturliga och genomskinliga filament beter sig annorlunda: de kan dölja mindre massa men visa nyans genom djupet, särskilt i tunna väggar eller bakgrundsbelysta delar. Mättade färger som rött och blått kan också missfärga efterföljande ljusa färger eftersom pigmentkoncentrationen som krävs för stark kroma förblir synlig vid låga restnivåer.',
    },
    {
      type: 'paragraph',
      html: 'Skrivaren kan inte färgvetenskap. Den extruderar bara en längd eller volym. Användaren måste avgöra om det synliga resultatet behöver kosmetisk renhet, funktionell separation eller endast grov färgändring. En leksak, logotyp, skyltyta, litofanram eller kundvänd apparathölje kan behöva aggressiv purge. En dold invändig stödstruktur, konceptprototyp eller baksidan av en jigg kan tolerera mer överföring. Kalkylatorn synliggör den avvägningen genom att låta purgetornet växa när övergångsriktningen är svårare.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Ljusa destinationen',
          description: 'Vitt, natur, gult och ljusgrått är känsliga destinationer. Mörka eller mättade föregående färger behöver längre purge innan dessa färger ser rena ut.',
          points: ['Använd högre faktorer', 'Gruppera ljusa sektioner tillsammans', 'Undvik att upprepade gånger gå från svart till vitt'],
        },
        {
          title: 'Mörka destinationen',
          description: 'Svart, marinblått, mörkgrönt och mörkgrått kan dölja rester från ljusare färger. Dessa övergångar kan ofta använda mindre multiplikatorer.',
          points: ['Lägre synlig risk', 'Bra mål efter ljusa färger', 'Användbar slutfärg i en sekvens'],
        },
        {
          title: 'Övergång med liknande nyans',
          description: 'Att röra sig mellan besläktade färger kostar vanligtvis mindre än att gå från mörkt till ljust. Rött till orange eller grått till svart är normalt enklare än blått till gult.',
          points: ['Färgordning spelar roll', 'Nyansfamiljer minskar avfall', 'Batcha liknande objekt tillsammans'],
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Bas-purgevolym', definition: 'Den normala volym din slicer eller kalibreringsprofil extruderar för ett vanligt filamentbyte före matrisskalning.' },
        { term: 'Övergångsfaktor', definition: 'En multiplikator tilldelad en riktning av en färgändring, såsom svart till vitt eller vitt till svart.' },
        { term: 'Purgeförhållande', definition: 'Purgevolym dividerad med total extruderad volym, inklusive både objekt och purgetorn.' },
        { term: 'Pigmentöverföring', definition: 'Synlig rest av den föregående filamentfärgen som finns kvar i hotenden och visas i nästa extrusionsfas.' },
        { term: 'Purge-to-infill', definition: 'En slicerstrategi som omdirigerar en del av rengöringsextrusionen till dold fyllning istället för ett torn eller avfallskanal.' },
      ],
    },
    {
      type: 'title',
      text: 'Hur man minskar AMS-filamentavfall utan att förstöra färgkvaliteten',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Den första optimeringen är färgordning. Om en modell kan delas upp, skrivas ut i grupper eller arrangeras så att mörkt-till-ljust-övergångar sker färre gånger, kan purgetornet krympa dramatiskt. Upprepade svart-till-vitt-byten är dyra eftersom varje cykel ber skrivaren att avlägsna ett starkt pigment före en känslig destination. Om samma visuella design kan skrivas ut som vitt-till-svart en gång, eller som separata delar som monteras senare, ändras materialbudgeten omedelbart.',
    },
    {
      type: 'paragraph',
      html: 'Den andra optimeringen är destinationsval. När flera färger är valbara, välj en mörk slutfärg för detaljer som visas efter ljusa områden. Svart text över en vit skylt är till exempel vanligtvis billigare än vit text över en svart skylt eftersom det senare tvingar skrivaren att rengöra mörka rester före varje vitt segment. Detta är inte bara ett estetiskt beslut; det ändrar den fysiska mängden polymer som måste tryckas genom hotenden.',
    },
    {
      type: 'list',
      items: [
        'Gruppera liknande färger i modellen eller utskriftskön så att besläktade nyanser delar övergångar.',
        'Använd purge-to-infill när intern färgkontaminering är acceptabel och delen har tillräcklig fyllnadsvolym.',
        'Minska färgbyten genom att dela upp badges, logotyper, etiketter eller dekorativa inlägg i separata utskrivna delar.',
        'Använd mörkare färger efter ljusare färger när designen tillåter det.',
        'Justera spolningsmultiplikatorer med fysiska färgprover, inte bara slicerns standardvärden.',
        'Budgetera purge-kostnad separat för kundofferter så att dekorativt flerfärgsarbete inte underprissätts.',
      ],
    },
    {
      type: 'proscons',
      title: 'Optimeringsavvägningar',
      items: [
        { pro: 'Lägre purgefaktorer minskar tornmassa och filamentkostnad.', con: 'För lite purge kan skapa ränder, toning eller oacceptabla kundvända ytor.' },
        { pro: 'Att dela upp modeller kan eliminera många färgbyten.', con: 'Montering tillför arbete, toleranshantering, lim, fästelement eller synliga skarvar.' },
        { pro: 'Purge-to-infill omvandlar avfall till användbar intern plast.', con: 'Det fungerar bäst när objektet har tillräcklig dold volym och kontaminering är strukturellt acceptabel.' },
        { pro: 'Batchning av liknande färger förbättrar utskriftsgårdens ekonomi.', con: 'Det kan försena brådskande engångsjobb som behöver en specifik färgsekvens.' },
      ],
    },
    {
      type: 'title',
      text: 'Budgetering av multi-material-utskrifter för kunder och utskriftsgårdar',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En utskriftsoffert som endast prissätter den slutliga objektvolymen är felaktig för AMS- och MMU-jobb. Kunden köper tillverkningsprocessen, och processen inkluderar icke-produktiv extrusjon. En liten nyckelring med många lager-för-lager-färgbyten kan slösa mer material än en större enfärgad konsol. Kalkylatorn gör det synligt genom att jämföra objektvolym och purgetornvolym som två konkurrerande block istället för att dölja avfall i en enda siffra.',
    },
    {
      type: 'paragraph',
      html: 'För en utskriftsgård är purgeförhållandet också en schemaläggningssignal. Jobb med hög purge upptar skrivaren medan filament omvandlas till tornplast, så den ekonomiska förlusten är inte bara material. Maskintiden som spenderas på att byta filament, kapa, ladda, torka och återuppbygga tryck är tid som inte spenderas på att producera säljbar volym. När purgeförhållandet är högt, överväg om föremålet bör ha en flerfärgstilläggsavgift, om färger bör begränsas, eller om en målad, etikett- eller monteringslösning är billigare.',
    },
    {
      type: 'card',
      title: 'Offertregel för flerfärgsarbete',
      html: 'Priserna objektet och prissätt sedan purgetornet som en separat avfallspost. Om kunden ändrar från två färger till fyra färger, eller lägger till små isolerade detaljer på många lager, uppdatera offerten eftersom övergångsantalet ändras även när den synliga modellvolymen knappt rör sig.',
    },
    {
      type: 'table',
      headers: ['Purgeförhållande', 'Tolkning', 'Rekommenderad åtgärd'],
      rows: [
        ['Under 15%', 'Effektivt flerfärgsjobb', 'Normala offertantaganden är vanligtvis acceptabla.'],
        ['15% till 30%', 'Materialförlust är synlig', 'Granska övergångar och kontrollera om purge-to-infill hjälper.'],
        ['Över 30%', 'Högt avfallsförhållande', 'Gruppera färger, dela modellen, höj offerten eller designa om färglayouten.'],
        ['Över 50%', 'Torn dominerar ekonomin', 'Behandla utskriften som ett speciellt produktionsjobb, inte en rutinmässig objektutskrift.'],
      ],
    },
    {
      type: 'title',
      text: 'Läsa instrumentpanelsresultaten',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De två horisontella blocken är avsiktligt dramatiska. Grönt är den verkliga objektvolymen. Det randiga purgeblocket är material som inte blir den synliga produkten. Om det randiga blocket börjar se fysiskt jämförbart ut med objektblocket förtjänar utskriften granskning. Detta visuella förhållande är ofta mer övertygande än gram eller valuta eftersom det visar användaren exakt hur mycket plast som tilldelas rengöring.',
    },
    {
      type: 'paragraph',
      html: 'Massresultatet kommer från volym multiplicerad med densitet. PLA är ofta runt 1,24 g/cm3, PETG är vanligtvis nära 1,27 g/cm3, ABS är lägre och fyllda filament varierar kraftigt. Prisresultatet använder det valda priset per kilogram. Om du använder speciellt silke-PLA, kolfiberblandningar, lösligt stödmaterial eller konstruktionsfilament, ersätt standardpriset och densiteten. Samma purgevolym kan ha mycket olika ekonomisk tyngd beroende på material.',
    },
    {
      type: 'summary',
      title: 'Beslutskontrollista',
      items: [
        'Använd uppmätt slicer-purgekalibrering som basvolym.',
        'Räkna upprepade övergångar, inte bara antalet färger som laddats i AMS eller MMU.',
        'Håll först uppsikt över svart-till-vitt, mättat-till-ljust och genomskinliga destinationsövergångar.',
        'Behandla ett purgeförhållande över 30 procent som en omdesign- eller offertvarning.',
        'Använd kostnadsresultatet för materialbudgetering och den visuella stapeln för snabb designgranskning.',
      ],
    },
    {
      type: 'message',
      title: 'Praktisk slutsats',
      html: 'En multi-material-utskrift är effektiv när färgbyten är arrangerade så att purgetornet förblir litet i förhållande till objektet. Om tornet växer förbi 30-procentsvarningslinjen är den billigaste optimeringen vanligtvis inte en ny spole eller en snabbare profil; det är en bättre färgstrategi.',
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
