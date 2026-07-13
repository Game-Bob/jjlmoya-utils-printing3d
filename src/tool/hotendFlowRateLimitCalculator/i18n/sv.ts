import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HotendFlowRateLimitCalculatorUI } from '../ui';

const slug = 'volumetrisk-flodeshastighetskalkylator';
const title = 'Volumetrisk Flödeshastighetskalkylator: Precisa Hotendgränser';
const description =
  'Beräkna volymetriskt flöde för 3D-utskrift i mm3/s, jämför det med hotendens smältkapacitet och identifiera när hastighet, linjebredd och lagertjocklek orsakar underextrusion.';

const faqData = [
  {
    question: 'Vad är volymetriskt flöde vid 3D-utskrift?',
    answer:
      'Volymetriskt flöde är den volym plast som begärs från hotenden varje sekund. Det beräknas som linjebredd multiplicerat med lagertjocklek multiplicerat med utskriftshastighet, vilket ger ett resultat i mm3/s.',
  },
  {
    question: 'Vad händer om det volymetriska flödet överskrider hotendens gräns?',
    answer:
      'Hotenden kan inte fullständigt smälta plasten i den begärda takten. Trycket stiger, extrusionen blir inkonsekvent och utskriften kan visa underextrusion, svaga väggar, matta grova ytor eller hoppade extrudersteg.',
  },
  {
    question: 'Är en V6 verkligen begränsad till 15 mm3/s?',
    answer:
      '15 mm3/s är en praktisk planeringskonstant för en väl inställd standard hotend med smältzon. Verkliga värden beror på filament, temperatur, munstycke, värmareffekt, extrudergrepp och hur mycket visuell kvalitetsförlust som är acceptabel.',
  },
  {
    question: 'Varför minskar säker hastighet när lagertjockleken ökar?',
    answer:
      'Lagertjocklek är en direkt multiplikator i flödesekvationen. Om linjebredd och hotendkapacitet förblir desamma, halveras ungefär maxhastigheten innan hotenden når sin smältgräns när lagertjockleken fördubblas.',
  },
];

const howToData = [
  { name: 'Välj en hotendarkitektur', text: 'Välj en förinställning för standard V6, Volcano, Bambu högflöde eller ultra-högflöde för att ställa in smältkapacitetskonstanten.' },
  { name: 'Ställ in linjegeometri', text: 'Justera linjebredd och lagertjocklek så att de matchar den skivarprofil du planerar att använda.' },
  { name: 'Justera utskriftshastighet', text: 'Använd den finjusterade hastighetsreglaget för att se belastningsmätaren närma sig 70%, 90% och kritiska flödeszoner.' },
  { name: 'Läs av säker hastighet och reserv', text: 'Jämför aktuell mm3/s med maximal säker hastighet och återstående smälthastighetsreserv.' },
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
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<HotendFlowRateLimitCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Ingångar för volymetrisk flödesgräns',
    resultsAriaLabel: 'Resultat för volymetrisk flödesgräns',
    unitSystemLabel: 'Enheter',
    metricLabel: 'Metriska',
    imperialLabel: 'US',
    hotendLabel: 'Hotendarkitektur',
    lineWidthLabel: 'Linjebredd',
    layerHeightLabel: 'Lagertjocklek',
    speedLabel: 'Utskriftshastighet',
    flowLabel: 'Volymetriskt flöde',
    loadLabel: 'Termisk belastning',
    maxSpeedLabel: 'Max säker hastighet',
    reserveLabel: 'Smältreserv',
    stateLabel: 'Systemstatus',
    idealState: 'IDEALISKT FLÖDE',
    limitState: 'VISKOSITETSGRÄNS',
    criticalState: 'KRITISKT FLÖDE',
    idealHint: 'Hotenden har tillräcklig termisk marginal för stabilt smälttryck och konsekvent extrusion.',
    limitHint: 'Profilen är nära viskositetsgränsen. Små material- eller temperaturförändringar kan avslöja underextrusion.',
    criticalHint: 'Det begärda flödet överskrider det tillförlitliga smältfönstret. Minska hastighet, linjebredd eller lagertjocklek.',
    millimeterUnit: 'mm',
    inchUnit: 'in',
    metricSpeedUnit: 'mm/s',
    imperialSpeedUnit: 'in/s',
    flowUnit: 'mm3/s',
  },
  seo: [
    { type: 'title', text: 'Hur Kalkylatorn för Maximalt Volymetriskt Flöde Fungerar', level: 2 },
    {
      type: 'paragraph',
      html: 'En <strong>kalkylator för maximalt volymetriskt flöde</strong> svarar på en mer användbar fråga än en enkel hastighetskalkylator: kan hotenden smälta den mängd plast som skivaren begär? Rörelsesystem kan annonsera höga förflyttningshastigheter, men extrusion begränsas av värmeöverföring, smältzonslängd, munstyckstryck, filamentviskositet, värmarstabilitet och extrudergrepp. Kalkylatorn modellerar den begärda smälthastigheten som <code>Vf = linjebredd x lagertjocklek x hastighet</code>, med resultatet visat i <code>mm3/s</code>.',
    },
    {
      type: 'paragraph',
      html: 'Verktyget jämför det momentana flödet mot en vald hotendkapacitet. Standard V6-liknande hotends representeras med en lägre smälthastighetskonstant, arkitekturer med längre smältzon som Volcano använder en högre konstant, och moderna högeffektshotends använder större värden. Syftet är inte att lova en universell laboratoriegräns; det är att tillhandahålla en snabb teknisk kontroll innan en skivarprofil begär mer plast än vad hårdvaran tillförlitligt kan smälta.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'mm3/s', label: 'Enhet för hotendens smältkapacitet', icon: 'mdi:cube-scan' },
        { value: '70%', label: 'Komfortzonsgräns för stabila produktionsprofiler', icon: 'mdi:gauge-low' },
        { value: '90%', label: 'Viskositetsgräns där fel blir känsliga', icon: 'mdi:gauge' },
        { value: '100%+', label: 'Kritiskt flöde där risken för underextrusion dominerar', icon: 'mdi:alert-outline' },
      ],
    },
    {
      type: 'tip',
      title: 'Använd skivarens linjebredd, inte munstyckets diameter',
      html: '<p>Flödesekvationen använder extrusionslinjebredden från skivaren. Ett 0,4 mm munstycke skriver ofta en linje på 0,42-0,48 mm. Om kalkylatorn använder munstyckets diameter istället för linjebredd kan den underskatta flödesbehovet och dölja en profil som redan är nära hotendens gräns.</p>',
    },
    { type: 'title', text: 'Varför Hastighet och Smälthastighet Inte Är Samma Gräns', level: 2 },
    {
      type: 'paragraph',
      html: 'En skrivare kan röra sig i 300 mm/s och ändå misslyckas vid 90 mm/s om extrusionsvolymen är för hög. Hastighet blir bara meningsfull efter att linjebredd och lagertjocklek inkluderats. Att skriva en 0,45 mm linje med 0,20 mm lager och 150 mm/s begär 13,5 mm3/s. Att skriva en 0,60 mm linje med 0,30 mm lager och samma hastighet begär 27 mm3/s. Rörelsehastigheten är identisk, men den andra profilen ber hotenden att smälta dubbelt så mycket plast per sekund.',
    },
    {
      type: 'table',
      headers: ['Linjebredd', 'Lagertjocklek', 'Hastighet', 'Begärt flöde'],
      rows: [
        ['0,42 mm', '0,16 mm', '120 mm/s', '8,06 mm3/s'],
        ['0,45 mm', '0,20 mm', '150 mm/s', '13,50 mm3/s'],
        ['0,50 mm', '0,25 mm', '180 mm/s', '22,50 mm3/s'],
        ['0,60 mm', '0,30 mm', '150 mm/s', '27,00 mm3/s'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Underextrusion ser ofta ut som ett inställningsproblem',
      badge: 'Flödestak',
      html: '<p>När en profil överskrider smältkapaciteten försöker användare ofta justera retraction, pressure advance, temperatur eller esteg. De inställningarna spelar roll, men de kan inte få en kort smältzon att bearbeta obegränsad plast. Kontrollera först att den begärda mm3/s ligger inom hotendens kapacitetsfönster.</p>',
    },
    {
      type: 'summary',
      title: 'Regler för flödesekvationen',
      items: [
        'Linjebredd, lagertjocklek och hastighet multipliceras direkt.',
        'En liten ökning av två geometriinställningar kan överväldiga en hotend även när hastigheten ser blygsam ut.',
        'Maximal säker hastighet är hotendgräns delat med linjebredd och lagertjocklek.',
      ],
    },
    { type: 'title', text: 'Termiska Prestandajämförelser per Hotendarkitektur', level: 2 },
    {
      type: 'paragraph',
      html: 'Hotendarkitektur styr hur länge filamentet förblir i den uppvärmda zonen och hur effektivt värme flyttas in i filamentets kärna. En kompakt V6-smältzon är responsiv och lätt, men dess praktiska flödestak är lägre än en lång Volcano-smältzon. Högeffekts keramiska och ultra-högeffekts designer ökar värmarkontakt, smältvägslängd eller inre yta för att upprätthålla högre extrusionshastigheter.',
    },
    {
      type: 'table',
      headers: ['Hotendarkitektur', 'Planeringskapacitet', 'Bästa användning', 'Teknisk försiktighet'],
      rows: [
        ['V6 / MK8', '15 mm3/s', 'Kvalitetsprofiler, måttlig PLA/PETG-hastighet, standard skrivbordsskrivare', 'Kan snabbt nå tryckgränser med breda linjer eller höga lager.'],
        ['Revo High Flow', '18 mm3/s', 'Högflödesuppgradering med kompakt formfaktor', 'Kräver fortfarande temperatur- och materialvalidering.'],
        ['Volcano', '25 mm3/s', 'Stora munstycken, tjocka lager, funktionella delar, snabba utkastsprofiler', 'Långa smältzoner kan droppa mer och behöver retractionsoptimering.'],
        ['Bambu HF', '32 mm3/s', 'Höghastighetsprofiler för slutna skrivare och snabb PLA-produktion', 'Profilvärden beror starkt på kylning och filamentbeteende.'],
        ['Rapido UHF / liknande', '45 mm3/s', 'Extremt flöde, stora extrusionsbredder, produktionsgenomströmning', 'Extrudervridmoment, värmareffekt och munstycksgeometri blir begränsande faktorer.'],
      ],
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: 'Kort smältzon', description: 'Kompakt, responsiv, lättare verktygshuvud, lägre termisk lagring.', icon: 'mdi:thermometer-low', points: ['Bra detaljkontroll', 'Lägre flödestak', 'Mindre termisk tröghet'] },
        { title: 'Lång smältzon', description: 'Mer kontakttid för filament att absorbera värme innan det når munstycket.', icon: 'mdi:thermometer-lines', highlight: true, points: ['Högre mm3/s', 'Bättre tjocklagerutmatning', 'Mer dropphantering'] },
        { title: 'Högeffektskärna', description: 'Modern geometri ökar kontaktyta eller värmarkoppling utan att bara förlänga längden.', icon: 'mdi:heat-wave', points: ['Snabb respons', 'Hög genomströmning', 'Kräver anpassade profiler'] },
      ],
    },
    {
      type: 'message',
      title: 'Jämförelsevärden är planeringskonstanter',
      ariaLabel: 'Anteckning om hotendjämförelser',
      html: '<p>De förinställda gränserna är avsiktligt konservativa planeringskonstanter. Verklig smältkapacitet varierar med filamentsammansättning, munstycksdiameter, värmarkassett, termistorplacering, extrusionstemperatur och den mängd kvalitetsförlust som delen kan tolerera.</p>',
    },
    { type: 'title', text: 'Avläsa Belastningsmätarens Zoner', level: 2 },
    {
      type: 'paragraph',
      html: 'Belastningsmätaren översätter flödesberäkningar till ett visuellt driftstillstånd. Under 70% belastning har hotenden utrymme för normal filamentvariation, mindre temperaturväxlingar och hastighetsförändringar längs verktygsbanan. Mellan 70% och 90% kan extrusion förbli framgångsrik, men profilen blir känslig. Över 90% är utskriften tillräckligt nära smälttaket att materialbatchvariation, fukt eller ett något kallare munstycke kan trycka den i synlig underextrusion.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        '0-70%: bra produktionsmarginal för repeterbara delar och normal materialvariation.',
        '70-90%: användbar för hastighetstestning, men validera väggar, toppytor och infill-bindning.',
        '90%+: behandla som en kritisk zon om inte filamentet och hotenden har mätts med ett flödestorn.',
        'Över 100%: minska hastighet, linjebredd eller lagertjocklek innan du jagar orelaterade skivarinställningar.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:gauge-full',
      title: 'Varför mätaren kan vara bättre än en varningsruta',
      html: '<p>En varningsruta berättar för användaren vad som gick fel efter att ha passerat ett tröskelvärde. En belastningsmätare visar närmandet till det tröskelvärdet. Detta gör det lättare att stanna vid en planerad driftsmarginal istället för att bara reagera när profilen redan har blivit instabil.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Kritiskt flöde är inte bara ett ytkvalitetsproblem',
      badge: 'Mekanisk hållfasthet',
      html: '<p>Ofullständigt smält filament kan binda dåligt mellan banor och lager. Även när ytterväggen ser acceptabel ut kan infill-bindning, periferiadhesion och slaghållfasthet påverkas om flödeshastigheten överskrider smältkapaciteten.</p>',
    },
    { type: 'title', text: 'Hur du Använder Kalkylatorn med en Skivarprofil', level: 2 },
    {
      type: 'paragraph',
      html: 'Börja med skivarens faktiska värden för linjebredd, lagertjocklek och yttervägg eller allmän utskriftshastighet. Välj närmaste hotendarkitektur. Flytta hastighetsreglaget tills mätaren når din föredragna belastning. Den visade maximala säkra hastigheten är den hastighet som exakt skulle nå hotendgränsen för aktuell linjegeometri. För produktionsarbete, använd ett lägre värde än det matematiska maximumet.',
    },
    {
      type: 'paragraph',
      html: 'Om mätaren går in i den kritiska zonen finns det tre direkta sätt att minska flödet: sänka hastigheten, minska linjebredden eller minska lagertjockleken. Temperatur kan öka praktiskt flöde för vissa material, men ändrar också glans, överbryggning, överhängsbeteende, stringing och dimensionsnoggrannhet. Kalkylatorn fokuserar avsiktligt på geometri och hårdvarukapacitet eftersom det är de mest transparenta hävstängerna.',
    },
    {
      type: 'proscons',
      title: 'Sätt att minska flödesbehovet',
      items: [
        { pro: 'Sänkt hastighet bevarar linjegeometri och dimensionell avsikt.', con: 'Det ökar utskriftstiden och kan minska farm-genomströmningen.' },
        { pro: 'Minskad lagertjocklek förbättrar ytfinishen och minskar mm3/s.', con: 'Det ökar antalet lager och kan göra jobbet längre trots lägre flöde.' },
        { pro: 'Minskad linjebredd kan minska trycket och förbättra fina detaljer.', con: 'Det kan försvaga glesa väggar och öka antalet verktygsbanor.' },
      ],
    },
    {
      type: 'tip',
      title: 'Validera med ett flödestorn',
      html: '<p>Använd kalkylatorn för att välja ett realistiskt hastighetsområde, skriv sedan ut ett flödestesttorn för det specifika filamentet och temperaturen. Den bästa produktionsgränsen är det högsta flödet som fortfarande ger stabila väggar, konsekvent glans, god lagerbindning och inga hoppade extrudersteg.</p>',
    },
    { type: 'title', text: 'Symtom på att Överskrida Hotendens Smältkapacitet', level: 2 },
    {
      type: 'paragraph',
      html: 'En profil bortom hotendens smältgräns kan misslyckas gradvis. Först kan toppytor visa tunna spår eller små luckor. Sedan blir infill-linjer inkonsekventa, perimetrar förlorar glans och hörn visar svag tryckåterhämtning. I allvarligare fall klickar extrudern, maler filament, hoppar över steg eller lämnar spröda sektioner eftersom filamentet som kommer in i munstycket inte är helt uppmjukat.',
    },
    {
      type: 'table',
      headers: ['Observerat symptom', 'Trolig flödesrelaterad orsak', 'Kalkylatorns svar'],
      rows: [
        ['Tunna väggar vid hög hastighet', 'Begärd mm3/s överskrider smältkapacitet på långa raka rörelser', 'Sänk hastigheten tills belastningen återgår under 90%.'],
        ['Grov matt extrusion', 'Filamentet är inte fullt uppvärmt genom kärnan', 'Minska flödet eller öka temperaturen försiktigt för det materialet.'],
        ['Extrudern klickar', 'Mottryck överstiger extrudergrepp eller motorvridmoment', 'Minska flödet omedelbart och inspektera filamentdrivspänningen.'],
        ['Svag infill-bindning', 'Material kommer ut för kallt eller inkonsekvent smält', 'Använd mer termisk marginal för strukturella delar.'],
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Volymetriskt flöde', definition: 'Volymen plast som begärs från hotenden per sekund, uttryckt i mm3/s.' },
        { term: 'Smältkapacitet', definition: 'Den praktiska mängd filament en hotend kan smälta konsekvent samtidigt som utskriftskvaliteten bibehålls.' },
        { term: 'Linjebredd', definition: 'Bredden på en extruderad bana i skivaren, vanligtvis något större än munstyckets diameter.' },
        { term: 'Lagertjocklek', definition: 'Den vertikala tjockleken på varje utskrivet lager; en direkt multiplikator i flödesbehovet.' },
        { term: 'Flödesreserv', definition: 'Skillnaden mellan hotendkapacitet och aktuellt begärt flöde.' },
      ],
    },
    {
      type: 'summary',
      title: 'Praktiskt flödesarbetsflöde',
      items: [
        'Beräkna begärt flöde innan du ökar hastigheten.',
        'Håll produktionsprofiler under den kritiska zonen om inte validerade genom testning.',
        'Använd hotendförinställningar som planeringskonstanter, förfina sedan med materialspecifik kalibrering.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
