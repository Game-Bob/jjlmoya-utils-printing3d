import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PrintDurationEstimatorUI } from '../ui';

const slug = '3d-utskriftstids-beraknare-efter-lagerhojd-och-hastighet';
const title = '3D Utskriftstidsberäknare efter Lagerhöjd och Hastighet';
const description =
  'Uppskatta tiden för en 3D-utskrift utan att öppna en skivare genom att kombinera modellhöjd, lagerhöjd, utskriftshastighet, fyllning, komplexitet, förflyttningsomkostnad och filamentanvändning.';

const faqData = [
  {
    question: 'Hur lång tid tar min 3D-utskrift utan skivare?',
    answer:
      'Du kan uppskatta det från totala antalet lager, ungefärlig materialvolym, genomsnittlig utskriftshastighet, fyllning och en marginal för förflyttningar och riktningsändringar. En skivare är fortfarande mer exakt för slutgiltiga jobb.',
  },
  {
    question: 'Varför påverkar lagerhöjden utskriftstiden så mycket?',
    answer:
      'Lagerhöjden ändrar antalet Z-lager. En profil på 0,12 mm skapar långt fler lager än en profil på 0,28 mm för samma modellhöjd, så skrivaren upprepar omkretsar, fyllning och lagerbytesomkostnad många fler gånger.',
  },
  {
    question: 'Varför är verklig utskriftstid längre än hastighet dividerat med avstånd?',
    answer:
      'Skrivare håller sällan den begärda hastigheten genom hörn, korta segment, små detaljer, retraktioner, Z-rörelser och förflyttningsbanor. Accelerationsgränser och omkostnad gör verklig tid längre än idealisk rörelseberäkning.',
  },
  {
    question: 'Är detta mer exakt än en skivares uppskattning?',
    answer:
      'Nej. Denna kalkylator är för tidig planering, offerter och jämförelser. En skivare kan inspektera exakt geometri, stöd, sömmar, accelerationsinställningar, extrusionsbredd och verktygsbanaordning.',
  },
];

const howToData = [
  { name: 'Ange modellhöjden', text: 'Använd Z-höjden på modellen eller det högsta objektet i den planerade utskriften.' },
  { name: 'Välj lagerhöjden', text: 'Använd det faktiska profilvärdet, till exempel 0,20 mm för en typisk FDM-utkastkvalitetsinställning.' },
  { name: 'Lägg till hastighet, fotavtryck och fyllning', text: 'Använd genomsnittlig utskriftshastighet, en ungefärlig XY-fotavtrycksyta och önskad fyllningsprocent.' },
  { name: 'Justera komplexitet och omkostnad', text: 'Öka komplexiteten för små detaljer och öka omkostnaden för många förflyttningar, stöd eller retraktioner.' },
  { name: 'Jämför hastighetsscenarier', text: 'Använd raderna för 40, 60 och 80 mm/s för att se om högre utskriftshastighet påverkar den totala jobbtiden nämnvärt.' },
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

export const content: ToolLocaleContent<PrintDurationEstimatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Indata för 3D-utskriftstidsberäknare',
    resultsAriaLabel: 'Beräknad 3D-utskriftstid resultat',
    unitSystemLabel: 'Enheter',
    metricLabel: 'Metriskt',
    imperialLabel: 'US',
    modelHeightLabel: 'Modellhöjd',
    modelHeightHint: 'Högsta Z-måttet på utskriften.',
    layerHeightLabel: 'Lagerhöjd',
    speedLabel: 'Genomsnittlig utskriftshastighet',
    footprintLabel: 'Beräknad fotavtrycksyta',
    footprintHint: 'Ungefärlig XY-yta som volymproxy.',
    infillLabel: 'Fyllningstäthet',
    complexityLabel: 'Komplexitetsfaktor',
    complexityHint: '0,80 för enkla former, 1,20 för små detaljer och korta segment.',
    overheadLabel: 'Förflyttningsomkostnad',
    filamentDiameterLabel: 'Filamentdiameter',
    densityLabel: 'Materialdensitet',
    timeLabel: 'Beräknad utskriftstid',
    layersLabel: 'Totalt lager',
    materialLabel: 'Materialuppskattning',
    filamentLabel: 'Filamentlängd',
    effectiveSpeedLabel: 'Effektiv hastighet',
    baseTimeLabel: 'Extrusionstid',
    overheadTimeLabel: 'Omkostnadstid',
    comparisonLabel: 'Hastighetsjämförelse',
    minutesUnit: 'min',
    hoursUnit: 'h',
    layersUnit: 'lager',
    gramUnit: 'g',
    ounceUnit: 'oz',
    meterUnit: 'm',
    footUnit: 'ft',
    percentUnit: '%',
    mmUnit: 'mm',
    inchUnit: 'in',
    mm2Unit: 'mm²',
    in2Unit: 'in²',
    mmSUnit: 'mm/s',
    inSUnit: 'in/s',
    cm3Unit: 'cm³',
    densityUnit: 'g/cm³',
    multiplierUnit: 'x',
    lowInsight: 'Kort uppskattning: skivarens omkostnad, bäddvärme och nedkylning kan bli en stor del av den verkliga tiden.',
    balancedInsight: 'Balanserad uppskattning: hastighetsförändringar spelar roll, men lagerantal och omkostnad formar fortfarande sluttiden.',
    highInsight: 'Lång uppskattning: överväg tjockare lager, mindre fyllning, färre stöd eller att dela modellen innan du bara ökar hastigheten.',
  },
  seo: [
    { type: 'title', text: 'Hur Man Uppskattar 3D Utskriftstid från Lagerhöjd och Hastighet', level: 2 },
    {
      type: 'paragraph',
      html: 'En <strong>3D-utskriftstidsberäknare efter lagerhöjd och hastighet</strong> är användbar när du behöver en planeringssiffra innan du öppnar en skivare, jämför flera utskriftsprofiler eller offererar en del från grova mått. Huvudtanken är enkel: modellhöjden delad med lagerhöjden ger lagerantalet, och den uppskattade mängden extruderad bana delad med medelhastigheten ger rörelsetiden. Det svåra är att verklig FDM-utskrift inte är ett rent löpande band. Munstycket saktar ner i kurvor, retraktioner avbryter extrusion, förflyttningar lägger till icke-skrivande avstånd och korta segment når sällan den begärda hastigheten.',
    },
    {
      type: 'paragraph',
      html: 'Denna kalkylator går avsiktligt bortom den mest grundläggande formeln. Istället för att anta att <code>höjd / lagerhöjd / hastighet</code> räcker, kombinerar den en ungefärlig modellvolym, fyllningstäthet, extrusionslinjebredd, en komplexitetsfaktor, lagerbytestid och en förflyttningsomkostnadsprocent. Resultatet är fortfarande en uppskattning, inte en ersättning för skivaren, men den svarar på den praktiska frågan som användare söker: <strong>hur lång tid tar min 3D-utskrift</strong> om jag ändrar lagerhöjd, fyllning eller hastighet.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0,20 mm', label: 'Vanlig FDM-lagerhöjd för balanserade utskrifter', icon: 'mdi:layers-outline' },
        { value: '15-20 %', label: 'Användbart startintervall för förflyttnings- och rörelseomkostnad', icon: 'mdi:routes' },
        { value: '40-80 mm/s', label: 'Typiska jämförelsehastigheter för skrivbordsskrivare', icon: 'mdi:speedometer' },
        { value: '1,75 mm', label: 'Vanlig filamentdiameter för beräkning av materiallängd', icon: 'mdi:circle-outline' },
      ],
    },
    {
      type: 'tip',
      title: 'Använd medelhastigheten, inte topphastigheten',
      html: '<p>Om din skivarprofil anger 120 mm/s men ytterväggar körs i 40 mm/s, små omkretsar i 25 mm/s och fyllning i 90 mm/s, är den genomsnittliga utskriftshastigheten inte 120 mm/s. För planering ger en realistisk medelhastighet ofta en bättre uppskattning än den snabbaste rörelsen i profilen.</p>',
    },

    { type: 'title', text: 'Varför Lagerhöjd Har Så Stor Effekt på Tiden', level: 2 },
    {
      type: 'paragraph',
      html: 'Lagerhöjden bestämmer hur många gånger skrivaren måste upprepa samma grundsekvens: omkrets, inre struktur, övre och undre ytor, förflyttning till nästa ö och Z-rörelse till nästa lager. En modell som är 80 mm hög behöver 400 lager vid 0,20 mm, men cirka 667 lager vid 0,12 mm. Även om varje tunt lager använder något mindre plast per pass, utför skrivaren många fler lagerövergångar, fler upprepade konturer och fler tillfällen för långsam accelerationsbegränsad rörelse.',
    },
    {
      type: 'table',
      headers: ['Modellhöjd', 'Lagerhöjd', 'Lagerantal', 'Planeringstolkning'],
      rows: [
        ['80 mm', '0,28 mm', '286 lager', 'Snabb utkastprofil med synliga lagerlinjer.'],
        ['80 mm', '0,20 mm', '400 lager', 'Balanserad kvalitet och tid för många delar.'],
        ['80 mm', '0,12 mm', '667 lager', 'Finstilt detaljprofil som kan lägga till många timmar.'],
        ['160 mm', '0,20 mm', '800 lager', 'Höga delar blir tidskrävande även vid normal hastighet.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'När lagerhöjd är den verkliga flaskhalsen',
      badge: 'Kontrollera lager',
      html: '<p>Om ökad utskriftshastighet knappt ändrar uppskattningen kan jobbet domineras av lagerantal, korta segment och omkostnad. I så fall kan byte från 0,12 mm till 0,20 mm spara mer tid än att öka skrivaren från 60 mm/s till 80 mm/s.</p>',
    },
    {
      type: 'summary',
      title: 'Beslutsregler för lagerhöjd',
      items: [
        'Använd tjockare lager för prototyper, fästen, fixturer och delar där Z-ytytan inte är kritisk.',
        'Använd tunnare lager för mjuka kurvor, liten text, miniatyrer och kosmetiska ytor.',
        'För höga delar ackumuleras lagerhöjdsförändringar snabbt eftersom varje extra lager upprepar omkostnad.',
      ],
    },

    { type: 'title', text: 'UtskriftShastighet, Acceleration och Komplexitetsfaktorn', level: 2 },
    {
      type: 'paragraph',
      html: 'Ett utskriftshastighetsvärde är ett mål, inte ett löfte. Skrivaren måste accelerera upp till den hastigheten, bromsa inför hörn, lyda jerk- eller junction deviation-gränser och ibland sakta ner för kylning, broar, överhäng, minimilagertid och små öar. Därför behöver en <strong>beräknare för utskriftshastighet till utskriftstid</strong> en komplexitetsfaktor. En ren låda med långa raka fyllningslinjer kan arbeta nära den begärda hastigheten. En detaljerad figur, logotyp, galler, gängad del eller organisk skulptur kan tillbringa större delen av sin tid på korta segment där accelerationsgränser spelar större roll än maxhastighet.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Enkel geometri',
          description: 'Lådor, paneler och långa fyllningsbanor kan använda en lägre komplexitetsmultiplikator.',
          icon: 'mdi:cube-outline',
          points: ['Längre kontinuerliga banor', 'Färre öar', 'Mindre retraktionsomkostnad'],
        },
        {
          title: 'Blandad geometri',
          description: 'De flesta fästen, höljen, rekvisita och hushållsdelar ligger nära standardmultiplikatorn.',
          icon: 'mdi:shape-outline',
          highlight: true,
          points: ['Omkretsar och fyllning spelar båda roll', 'Måttliga förflyttningar', 'Balanserade accelerationsförluster'],
        },
        {
          title: 'Detaljerad geometri',
          description: 'Små detaljer, text, galler, stöd och organiska kurvade ytor behöver en högre multiplikator.',
          icon: 'mdi:vector-polyline',
          points: ['Korta segment dominerar', 'Fler starter och stopp', 'Fler retraktioner och förflyttningar'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Öka utskriftshastigheten: vad förbättras och vad gör det inte',
      items: [
        { pro: 'Långa fyllningslinjer kan bli klara snabbare med ökad hastighet.', con: 'Ytterväggar och små detaljer kan fortfarande begränsas av profilgränser.' },
        { pro: 'Stora detaljsvaga prototyper kan dra nytta av snabbare rörelse.', con: 'Acceleration, ringing, extrusionsflöde och kylning kan begränsa användbar hastighet.' },
        { pro: 'En hastighetsjämförelsetabell visar snabbt den potentiella besparingen.', con: 'Den kan inte förutsäga skivarspecifika inbromsningar som minimilagertid.' },
      ],
    },
    {
      type: 'message',
      title: 'Hastighetsuppskattningar är mest användbara för relativ jämförelse',
      ariaLabel: 'Anteckning om hastighetsuppskattning',
      html: '<p>Använd raderna för 40, 60 och 80 mm/s för vägledande jämförelse. Om 80 mm/s bara sparar en liten mängd begränsas utskriften troligen av lager, omkostnad eller komplexitet snarare än rå hastighet.</p>',
    },

    { type: 'title', text: 'Fyllning, Volym och Materialtid', level: 2 },
    {
      type: 'paragraph',
      html: 'Kalkylatorn använder fotavtrycksyta och modellhöjd som en grov volymproxy och skalar sedan den volymen med ett effektivt fastförhållande. Detta är inte lika exakt som att läsa nätgeometri, men det fångar en viktig fysisk sanning: väggar och skinn försvinner inte när fyllningen minskas. En del som skrivs ut med 15 % fyllning har fortfarande omkretsar, topplager, bottenlager, små massiva detaljer och ibland stödgränssnitt. Kalkylatorn behåller en skalandel i uppskattningen så att låg fyllning inte orealistiskt kollapsar utskriftstiden till nästan ingenting.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Öka fotavtrycksytan för breda objekt, lådor, platta plattor, brickor och stora höljen.',
        'Minska fotavtrycksytan för smala torn, tunna figurer, små fästen och öppna ramar.',
        'Använd fyllningsprocent som en planeringskontroll, inte som total deltäthet.',
        'Kom ihåg att stöd, kanter, flottar, rengöringstorn och flerfärgsavfall lägger till tid utanför själva modellen.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:printer-3d-nozzle',
      title: 'Exempel: varför 20 % fyllning inte är 20 % utskriftstid',
      html: '<p>Ett 80 mm högt hölje kan ha fyra väggar, sex bottenlager, sex topplager, skruvnav och en stor inre hålighet. Att sänka fyllningen från 40 % till 20 % minskar den inre banlängden, men väggarna och skinnen skrivs fortfarande ut på varje lager. För modeller med många omkretsar kan ändring av väggantal eller lagerhöjd påverka tiden mer än enbart ändring av fyllning.</p>',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Fotavtrycksyta', definition: 'Den ungefärliga XY-yta som modellen upptar, använd här som en grov volyminmatning.' },
        { term: 'Effektivt fastförhållande', definition: 'En planeringsblandning av skalmaterial och fyllnadsmaterial som används för att uppskatta extruderad volym.' },
        { term: 'Extrusionssträng', definition: 'Plaststrängen som läggs av munstycket; dess tvärsnitt beror på lagerhöjd och extrusionsbredd.' },
        { term: 'Filamentlängd', definition: 'Längden på råfilament som behövs för att leverera den uppskattade plastvolymen.' },
      ],
    },

    { type: 'title', text: 'Förflyttningsomkostnad: Den Saknade Delen i Enkla Kalkylatorer', level: 2 },
    {
      type: 'paragraph',
      html: 'En enkel tidsuppskattning ignorerar ofta icke-extruderande rörelse. Verkliga skrivare rör sig mellan öar, retraherar och primar filament, torkar, hoppar i Z, undviker utskrivna delar, ändrar riktning och pausar ibland för kylning. Dessa handlingar skapar inget synligt material, men de förbrukar verklig tid. En fast omkostnadsprocent är ett praktiskt sätt att redovisa förflyttningar när du inte har en fullständig skivarens verktygsbana. Standardintervallet 15-20 % är en användbar utgångspunkt för vanliga FDM-delar i ett material.',
    },
    {
      type: 'table',
      headers: ['Utskriftsförhållande', 'Föreslagen omkostnad', 'Anledning'],
      rows: [
        ['Enkel enkel del', '10-15 %', 'Få öar, färre retraktioner, mestadels kontinuerliga banor.'],
        ['Typisk funktionell del', '15-22 %', 'Måttliga omkretsar, fyllning och förflyttningar.'],
        ['Många små delar på en platta', '22-35 %', 'Frekventa förflyttningar mellan objekt och upprepade starter.'],
        ['Stöd eller detaljerade ytor', '25-40 %', 'Stödgränssnitt, korta segment och retraktioner lägger till tid.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Bäddvärme ingår inte',
      badge: 'Total jobbtid',
      html: '<p>Uppskattningen fokuserar på rörelse- och extrusionstid. Lägg till separat tid för bäddvärme, munstycksvärme, sondering, nätutjämning, filamentladdning, nedkylning och borttagning av del vid planering av verklig maskinanvändning.</p>',
    },
    {
      type: 'tip',
      title: 'Kalibrera omkostnad från en verklig utskrift',
      html: '<p>Ta ett färdigt jobb, jämför skivarens eller stoppurets tid med denna kalkylator, justera sedan omkostnad och komplexitet tills uppskattningen stämmer. Den lokala kalibreringen kommer att förbättra framtida planering mer än att för alltid använda generiska värden.</p>',
    },

    { type: 'title', text: 'När Ska Man Lita På Denna Kalkylator Och När Ska Man Använda En Skivare', level: 2 },
    {
      type: 'paragraph',
      html: 'Detta verktyg är starkast för tidiga uppskattningar, offertsamtal, klassrumsdemonstrationer och jämförelse av lagerhöjd kontra hastighet innan du förbinder dig till en profil. Det är särskilt användbart när den exakta STL-filen inte är tillgänglig ännu, när en kund bara tillhandahåller ungefärliga mått, eller när du vill veta om en ändring är värd att undersöka. Det är inte utformat för att ersätta skivaruppskattningar för produktionskritiska jobb, eftersom skivare inspekterar exakt nätgeometri, funktionsspecifika hastigheter, stödbanor, väggordning, övre och undre ytor, sömplacering, accelerationskontroll och maskinspecifikt firmwarebeteende.',
    },
    {
      type: 'list',
      icon: 'mdi:calculator-variant-outline',
      items: [
        'Använd denna kalkylator för att snabbt jämföra lagerprofiler på 0,12 mm, 0,20 mm och 0,28 mm.',
        'Använd den för att uppskatta om en hög modell är lagerbegränsad innan du ändrar hastigheten.',
        'Använd den för att få en grov materialvolym, filamentlängd och vikt från ungefärliga mått.',
        'Använd en skivare innan du köper material, reserverar maskintid eller lovar leveransdatum.',
      ],
    },
    {
      type: 'table',
      headers: ['Fråga', 'Svar från kalkylator', 'Svar från skivare'],
      rows: [
        ['Kommer tjockare lager att spara tid?', 'Bra vägledande uppskattning från lagerantal.', 'Exakt resultat för specifik bana och yta.'],
        ['Kommer 80 mm/s att vara mycket snabbare än 60 mm/s?', 'Användbar jämförelse av hastighetsscenarier.', 'Exakt beteende per hastighets- och accelerationsfunktion.'],
        ['Hur mycket filament kan jag behöva?', 'Ungefärlig volym, längd och vikt.', 'Profilspecifik materialrapport.'],
        ['Kan jag offerera detta produktionsjobb?', 'Endast för preliminär screening.', 'Krävs för slutgiltig offert och planering.'],
      ],
    },
    {
      type: 'summary',
      title: 'Bästa arbetsflöde',
      items: [
        'Börja med denna beräknare för att begränsa valen av lagerhöjd, hastighet och fyllning.',
        'Justera komplexitet och omkostnad med hjälp av en känd utskrift från din egen maskin.',
        'Skiva om den slutliga kandidatprofilen innan du förbinder dig till kostnad, tid eller leverans.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
