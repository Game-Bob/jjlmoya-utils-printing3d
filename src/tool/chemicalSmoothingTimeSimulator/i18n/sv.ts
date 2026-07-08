import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ChemicalSmoothingTimeSimulatorUI } from '../ui';

export const content: ToolLocaleContent<ChemicalSmoothingTimeSimulatorUI> = {
  slug: 'abs-pvb-kemisk-utjammingstid-kalkylator',
  title: 'ABS Aceton och PVB IPA Ångutjämningstid Kalkylator',
  description: 'Uppskatta konservativ ångexponerings- och torktid för kemisk utjämning av ABS med aceton eller PVB med isopropylalkohol baserat på kammarvolym, temperatur, detaljvolym och ytdetalj.',
  ui: {
    unitSystemLabel: 'Enheter',
    metricLabel: 'Metriskt',
    imperialLabel: 'US',
    materialLabel: 'Material',
    absLabel: 'ABS + aceton',
    pvbLabel: 'PVB + IPA',
    chamberVolumeLabel: 'Ångkammare',
    chamberTemperatureLabel: 'Kammartemp.',
    partVolumeLabel: 'Detaljvolym',
    surfaceDetailLabel: 'Ytdetalj',
    fineDetailLabel: 'Fina detaljer',
    balancedDetailLabel: 'Balanserad',
    coarseDetailLabel: 'Grova lagerlinjer',
    presetsLabel: 'Förinställningar',
    miniPresetLabel: 'Mini',
    displayPresetLabel: 'Utställningsdetalj',
    enclosurePresetLabel: 'Stor låda',
    exposureLabel: 'Uppskattad exponering',
    dryTimeLabel: 'Torkning efter utjämning',
    firstTrialLabel: 'Första testet',
    riskLabel: 'Detaljrisk',
    vaporMapLabel: 'Ångintensitet',
    chamberUnitMetric: 'l',
    chamberUnitImperial: 'gal',
    temperatureUnitMetric: '°C',
    temperatureUnitImperial: '°F',
    partUnitMetric: 'cm³',
    partUnitImperial: 'in³',
    secondsUnit: 's',
    minutesUnit: 'min',
    hoursUnit: 'h',
    controlsAriaLabel: 'Ingångar för kemisk utjämning',
    resultsAriaLabel: 'Resultat för kemisk utjämning',
    recommendationGentle: 'milt fönster',
    recommendationStandard: 'bevaka noga',
    recommendationAggressive: 'hög risk för detaljförlust',
    safetyNote: 'Använd endast som en konservativ planeringsuppskattning. Lösningsmedelsånga är brandfarlig och farlig: arbeta borta från antändningskällor, använd ventilation och personlig skyddsutrustning, och börja med en kort testexponering.',
    copyButton: 'Kopiera utjämningsplan',
    copiedButton: 'Kopierad',
    copiedSummaryTemplate: 'Uppskattning kemisk utjämning: {minutes} min ({seconds} s) exponering, första test efter {trialSeconds} s, torka i cirka {dryHours} h.',
  },
  seo: [
    { type: 'title', text: 'Så uppskattar du ABS-aceton-ångutjämningstid utan att smälta detaljer', level: 2 },
    {
      type: 'paragraph',
      html: 'ABS-aceton-ångutjämning är en kontrollerad ytupplösningsprocess. Acetonånga mjukgör det yttre skiktet av ABS, vilket gör att synliga FDM-lageråsar kan slappna av till en blankare yta. Det användbara fönstret är smalt: för lite exponering lämnar lagerlinjer oförändrade, medan för mycket exponering rundar kanter, mjukgör präglad text, stänger små hål och kan göra att tunna väggar hänger sig. En tidsuppskattning behandlas därför bäst som ett <strong>startfönster för korta testdrag</strong>, inte som ett fast recept.',
    },
    {
      type: 'paragraph',
      html: 'Kalkylatorn använder fem praktiska variabler som starkt påverkar utjämningstiden: polymer-lösningsmedelspar, kammarvolym, kammartemperatur, volym på den utskrivna detaljen och ytdetaljnivå. Temperaturen spelar roll eftersom ångtryck och lösningsmedelsaktivitet stiger snabbt när kammaren värms upp. Detaljstorleken spelar roll eftersom större detaljer har mer yta och termisk massa. Detaljnivån spelar roll eftersom en miniatyrkuggtand, logotyp eller snäppfäste kan förstöras av en tid som ser perfekt ut på en enkel rektangulär låda.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '30-35%', label: 'förnuftigt första testdrag av den uppskattade tiden' },
        { value: 'ABS/PVB', label: 'vanliga utskrivbara polymerer för ångutjämning' },
        { value: 'timmar', label: 'torktid före hantering eller montering' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Ångutjämning är ett efterbehandlingssteg, inte ett dimensionellt kalibreringssteg',
      html: 'Om en utskriven detalj måste hålla ett lager, gänga, tätning, snäppfäste eller presspassning, maskera det kritiska området eller validera utjämningsprocessen på ett offerprov. Kemisk utjämning förändrar kanter och kan ändra funktionella toleranser.',
    },
    { type: 'title', text: 'ABS med aceton vs PVB med IPA ångutjämning', level: 2 },
    {
      type: 'paragraph',
      html: 'ABS utjämnas vanligtvis med aceton eftersom aceton är ett effektivt lösningsmedel för ytan av akrylnitrilbutadienstyren. PVB, ofta sålt som filament avsett för transparenta eller blanka utskrifter, utjämnas vanligtvis med isopropylalkohol. Det visuella målet är liknande, men processbeteendet är annorlunda. ABS med aceton kan bli blankt och avrundat snabbt, särskilt i en varm kammare. PVB med IPA är ofta mer förlåtande för gradvis glansutveckling, men kan fortfarande förlora skärpa om det exponeras för länge.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'ABS med acetonånga',
          description: 'Snabb, stark utjämningsverkan med hög risk för att mjukgöra liten text, hörn, stift och tunna väggar när kammaren är varm.',
          points: ['Bäst för synliga skal och rekvisita', 'Känslig för temperatur', 'Behöver lång avgasning före användning i slutna utrymmen'],
        },
        {
          title: 'PVB med IPA ånga',
          description: 'Ofta valt för blanka visuella detaljer och genomskinliga utskrifter där en långsammare, mer kontrollerbar utjämningsrespons önskas.',
          highlight: true,
          points: ['Användbart för utställningsdetaljer', 'Kan bevara detaljer bättre med korta cykler', 'Torka ordentligt före polering eller paketering'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Material', 'Typiskt lösningsmedel', 'Processkaraktär', 'Huvudfelsläge'],
      rows: [
        ['ABS', 'Aceton', 'Snabb ytmjukgöring och stark glans', 'Avrundade kanter, hängande tunna väggar, stängda hål'],
        ['PVB', 'Isopropylalkohol', 'Mer gradvis glans och dimreducering', 'Klibbig yta, smetig textur, mjukgjorda fina detaljer'],
        ['ASA', 'Aceton eller andra lösningsmedel', 'Liknande familj som ABS men beroende av formulering', 'UV-beständiga delar kan fortfarande förlora skarpa kanter'],
        ['PLA/PETG', 'Inte lämpligt för denna kalkylator', 'Vanliga lösningsmedel beter sig inte som ABS/PVB-utjämning', 'Dålig finish eller osäkra lösningsmedelsexperiment'],
      ],
    },
    {
      type: 'tip',
      title: 'Använd materialinställningen som ett lösningsmedelspar, inte bara ett plastnamn',
      html: 'Välj ABS när processen är acetonångutjämning och PVB när processen är IPA-ångutjämning. Olika filamentblandningar, tillsatser, pigment och glödgningshistorik kan ändra den verkliga responsen, så testa med exakt den spole som används för den slutliga utskriften.',
    },
    { type: 'title', text: 'Varför kammarvolym ändrar varaktigheten för kemisk utjämning', level: 2 },
    {
      type: 'paragraph',
      html: 'Kammarvolymen påverkar hur snabbt ångkoncentrationen byggs upp och hur jämnt den omger den utskrivna detaljen. En liten burk kan bli aggressiv snabbt eftersom en liten mängd lösningsmedel upptar ett litet utrymme ovanför vätskan. En större kammare behöver vanligtvis mer tid för att nå samma effektiva ångmiljö, men kan vara mer enhetlig om lösningsmedelskällan är distribuerad och detaljen är höjd över vätskekontakt. Kalkylatorn ökar exponeringstiden försiktigt när kammarvolymen växer, eftersom sambandet är verkligt men inte perfekt linjärt i hemmamiljöer.',
    },
    {
      type: 'paragraph',
      html: 'Enhetlighet är lika viktigt som genomsnittlig koncentration. En detalj placerad för nära en lösningsmedelsindränkt trasa, pöl eller värmd platta kan få en riktad attack: en sida blir blank och mjuk medan den motsatta sidan förblir matt. En högre kammare kan också skapa gradienter, särskilt om ånga kondenseras på locket och droppar. Den säkraste tolkningen av en beräknad tid är därför ett planerat inspektionsintervall: ta bort detaljen, inspektera den våta glansen och stoppa innan skarpa egenskaper börjar flyta.',
    },
    {
      type: 'list',
      items: [
        'Höj detaljen på ett lösningsmedelsbeständigt stativ så att den aldrig vidrör flytande lösningsmedel.',
        'Håll absorberande lösningsmedelskällor borta från modellens yta för att undvika ensidig överexponering.',
        'Använd en kammare som är tillräckligt stor så att ånga kan cirkulera runt alla synliga sidor.',
        'Undvik droppande kondensation från locket; droppar skapar ärr, kratrar och blanka fläckar.',
        'Öka inte mängden lösningsmedel oändligt för att kompensera en stor kammare; koncentration och säkerhetsrisk ökar tillsammans.',
      ],
    },
    {
      type: 'card',
      title: 'En större kammare är inte automatiskt säkrare',
      html: 'Stora förseglade volymer kan hålla mer brandfarlig ånga. En större kammare kan sakta ner utjämningen, men kan också skapa en större farlig atmosfär. Använd den minsta praktiska kammaren som ger detaljen utrymme och jämn exponering.',
    },
    { type: 'title', text: 'Temperatur, ångtryck och detaljförlust', level: 2 },
    {
      type: 'paragraph',
      html: 'Temperaturen är en av de starkaste ingångarna eftersom lösningsmedelsavdunstning ökar när kammaren värms upp. Några grader kan förändra finishen från långsam satinutjämning till snabb glans och kantavrundning. Varm acetonånga runt ABS är särskilt oförlåtande: ytan kan gå från matt till våt till mjuk på kort tid. Kalkylatorn förkortar exponeringstiden när kammartemperaturen stiger och höjer riskpoängen när temperaturer överstiger en normal rumstemperaturreferens.',
    },
    {
      type: 'paragraph',
      html: 'Aktiv uppvärmning är där många hobbyutjämningsprocesser blir osäkra. Aceton- och IPA-ångor är brandfarliga, och improviserade värmare, strömbrytare, reläer, gnistor, varma plattor och dåligt förseglad elektronik kan skapa allvarlig brandrisk. Om temperaturen kontrolleras alls, bör det göras med utrustning designad för farliga ångmiljöer, inte med en exponerad värmare inuti en förseglad behållare. För de flesta användare är rumstemperaturutjämning med korta inspektioner det mer försvarbara arbetssättet.',
    },
    {
      type: 'table',
      headers: ['Kammartillstånd', 'Förväntat beteende', 'Praktisk respons'],
      rows: [
        ['Svalt rum under 18 °C', 'Långsam ångverkan och fördröjd glans', 'Använd längre intervall men inspektera för ojämn kondensation'],
        ['Rumstemperatur 20-25 °C', 'Förutsägbar baslinje för de flesta tester', 'Börja med kalkylatorns uppskattning och första testet'],
        ['Varm kammare 26-32 °C', 'Snabbare mjukgöring och högre detaljrisk', 'Förkorta cykler och undvik fina funktionella delar'],
        ['Het eller aktivt uppvärmd kammare', 'Mycket aggressiv ångmiljö', 'Improvisera inte; brand- och överexponeringsrisk ökar kraftigt'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Använd aldrig öppen låga eller exponerade värmeelement',
      html: 'Aceton- och isopropylalkoholångor kan antändas. Håll utjämningskammare borta från lågor, gnistor, heta verktyg, strömbrytare som gnistrar, borstmotorer, värmare inte klassade för ångmiljö och statisk känslig hantering.',
    },
    { type: 'title', text: 'Detaljvolym, yta och geometrikänslighet', level: 2 },
    {
      type: 'paragraph',
      html: 'Ingången som kallas detaljvolym är en praktisk indikator på detaljens totala storlek. Det är ingen perfekt ersättning för yta, men det är lätt att uppskatta från slicerstatistik och anger vanligtvis om utskriften är en liten knapp, en utställningsfigur eller en stor lådpanel. Större detaljer behöver ofta längre exponering för att utveckla en jämn visuell finish, men har också fler kanter, hörn och tunna sektioner som kan visa ojämn lösningsmedelsupptagning.',
    },
    {
      type: 'paragraph',
      html: 'Geometri kan dominera resultatet. En slät cylindrisk vas och ett fackverksstöd kan ha samma volym men helt olika utjämningstolerans. Tuna ribbor, skarp präglad text, små hål, interna kanaler, laxstjärtar och klämmor mjuknar snabbare än breda plana ytor. När detaljen har kritisk geometri, använd inställningen för fina detaljer även om lagerlinjer är synliga, upprepa sedan korta cykler istället för att försöka en lång exponering.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Ångutjämning', definition: 'En efterbehandlingsprocess där lösningsmedelsånga endast mjukgör den yttre ytan av en polymerutskrift.' },
        { term: 'Överexponering', definition: 'Ett utjämningsintervall tillräckligt långt för att runda detaljer, deformera tunna väggar eller lämna en klibbig yta.' },
        { term: 'Avgasning', definition: 'Perioden efter utjämning då absorberat lösningsmedel avdunstar från den mjukgjorda ytan.' },
        { term: 'Ytdetalj', definition: 'Liten geometri som text, textur, hål, åsar, klämmor och vassa kanter som kan gå förlorade under utjämning.' },
        { term: 'Offerprov', definition: 'En liten testutskrift gjord av samma filament och inställningar för att validera lösningsmedelsrespons innan den verkliga detaljen färdigställs.' },
      ],
    },
    {
      type: 'summary',
      title: 'Geometriregler för att välja detaljnivå',
      items: [
        'Använd fin detalj för text, kugghjul, små hål, snäppfästen, gängor eller tunna väggar.',
        'Använd balanserad för dekorativa delar med måttliga lagerlinjer och inga täta passningar.',
        'Använd grova lagerlinjer endast för enkla former där rundade kanter är acceptabla.',
        'Dela komplexa modeller i maskerade och omaskerade zoner när endast det yttre skalet behöver glans.',
      ],
    },
    { type: 'title', text: 'Läsa kalkylatorns utdata', level: 2 },
    {
      type: 'paragraph',
      html: 'Exponeringsutdatan är den uppskattade totala ångtiden för ett konservativt första försök. Den visas i minuter och sekunder eftersom korta efterbehandlingsfönster är lättare att hantera med en timer. Det första testet är avsiktligt kortare, vanligtvis ungefär en tredjedel av den beräknade exponeringen. Att ta bort detaljen tidigt låter dig kontrollera om ytan börjar glänsa innan detaljförlust blir permanent.',
    },
    {
      type: 'paragraph',
      html: 'Torktiden uppskattar hur länge utskriften bör vila före nära hantering, montering, målning, paketering eller försegling. Torkning handlar inte bara om att ytan känns torr. Lösningsmedel kan finnas kvar i den mjukgjorda polymeren och fortsätta påverka passform, lukt, färgvidhäftning och mekanisk känsla. ABS-delar utjämnade med aceton behöver ofta längre avgasning än PVB-delar utjämnade med IPA, särskilt när delen är tjock eller exponeringen var aggressiv.',
    },
    {
      type: 'proscons',
      title: 'En lång exponering vs flera korta cykler',
      items: [
        { pro: 'En enda exponering är snabbare och lättare att schemalägga.', con: 'Den ger liten varning innan fina egenskaper mjuknar.' },
        { pro: 'Korta cykler gör det lättare att stanna vid en satin- eller halvblank finish.', con: 'De kräver mer hantering och upprepad kammaröppning.' },
        { pro: 'Flera inspektioner minskar risken att förstöra en unik utskrift.', con: 'Finishen kan vara något mindre enhetlig om delen kyls ner eller torkar mellan cyklerna.' },
      ],
    },
    {
      type: 'message',
      title: 'Bästa användning av uppskattningen',
      html: 'Ställ in en timer för det första testet, inspektera delen under strykljus, fortsätt sedan i korta steg. Stanna medan lagerlinjer fortfarande är knappt synliga; ytan fortsätter ofta att slappna av en kort tid efter borttagning.',
    },
    { type: 'title', text: 'Säker arbetsgång för kemisk utjämning av ABS och PVB', level: 2 },
    {
      type: 'paragraph',
      html: 'En säker arbetsgång börjar innan lösningsmedlet öppnas. Skriv ut ett litet prov med samma filament, lagerhöjd, väggantal och kylinställningar. Rengör den slutliga delen så att damm och oljor inte fastnar under den mjukgjorda huden. Förbered ett icke-reaktivt stativ, timer, handskar kompatibla med lösningsmedlet, ögonskydd, ventilation och en plats där delen kan torka utan att vidröras. Håll lösningsmedelsbehållare stängda när du inte aktivt laddar kammaren.',
    },
    {
      type: 'list',
      items: [
        'Bekräfta att filamentet verkligen är ABS eller PVB, inte PLA, PETG, PC-blandning eller okänt återvunnet material.',
        'Ta bort stöd och slipa endast före utjämning; slipning efter utjämning kan skära igenom glansen ojämnt.',
        'Maskera hål, lager, gängor och passytor om dimensioner spelar roll.',
        'Börja med tiden för första testet, lägg sedan till korta intervall om finishen fortfarande är för matt.',
        'Torka delen i ett ventilerat utrymme tills lösningsmedelslukt och klibbighet är borta.',
        'Kassera lösningsmedelstrasor och förorenade material enligt lokala regler för farligt avfall.',
      ],
    },
    {
      type: 'tip',
      title: 'Bedöm inte finishen medan ytan är våt',
      html: 'En nyexponerad ABS- eller PVB-yta kan se blankare ut än den kommer att vara efter torkning. Inspektera både glans och geometri: om hörn ser svullna ut eller liten text blir mjuk, stoppa även om lagerlinjer fortfarande är svagt synliga.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Ventilation är en del av processtiden',
      html: 'Torkning efter utjämning bör ske där ångor inte kan samlas. En del som omedelbart placeras i en låda, fraktpåse, vitrinskåp eller elektronikhölje kan behålla lukt och lösningsmedel längre än förväntat.',
    },
    { type: 'title', text: 'Vanliga problem och korrigerande åtgärder', level: 2 },
    {
      type: 'table',
      headers: ['Symptom', 'Trolig orsak', 'Nästa justering'],
      rows: [
        ['Lagerlinjer fortfarande skarpa', 'Exponering för kort eller kammare för sval', 'Upprepa med korta steg istället för att dubbla tiden'],
        ['Kanter rundade eller text suddig', 'Överexponering för detaljnivån', 'Använd fin detaljinställning, lägre temperatur eller maskera egenskaper'],
        ['Klibbig yta efter torkning', 'För mycket lösningsmedel absorberat eller otillräcklig ventilation', 'Förläng torktiden och minska framtida exponering'],
        ['En sida blankare än den andra', 'Ojämn ångkälla eller del för nära lösningsmedel', 'Höj delen, distribuera källan, rotera endast mellan cykler'],
        ['Vit dimma eller molniga fläckar', 'Kondensation, fukt eller ojämn avdunstning', 'Minska kammarmättnad och undvik lockdroppar'],
      ],
    },
    {
      type: 'paragraph',
      html: 'Om en del blir klibbig, försök inte reparera den genom att omedelbart tillsätta mer ånga. Mer lösningsmedel fördjupar vanligtvis den mjukgjorda zonen. Låt delen torka helt, avgör sedan om en mycket kort uppföljningscykel är värd risken. Om kanter redan har flutit, kan formen inte återställas genom torkning. För kritiska delar är den mer pålitliga lösningen att skriva ut igen med justerade slicerinställningar och använda ett kortare efterbehandlingsfönster.',
    },
    {
      type: 'card',
      title: 'Slicerinställningar som minskar utjämningstiden',
      html: 'Lägre lagerhöjd, stabil extrudering, torrt filament, lämplig kylning och väljusterad pressure advance minskar mängden kemiskt arbete som behövs. Kemisk utjämning bör förfina en utskrift, inte dölja allvarlig ringing, luckor, bubblor, våt filamenttextur eller underextrudering.',
    },
    {
      type: 'summary',
      title: 'Praktisk efterbehandlingschecklista',
      items: [
        'Uppskatta exponeringen med exakt material, kammare, temperatur, detaljstorlek och detaljnivå.',
        'Kör ett offerprov eller första testet innan du åtar dig den slutliga delen.',
        'Använd korta cykler när detaljer är viktiga och stoppa innan ytan förlorar skärpa.',
        'Tillåt tillräcklig torktid för att lösningsmedelslukt, klibbighet och dimensionell mjukhet ska försvinna.',
        'Behandla brandfarlig ångkontroll som ett säkerhetskrav, inte en valfri bekvämlighet.',
      ],
    },
  ],
  faq: [
    {
      question: 'Hur länge ska ABS vara i acetonånga?',
      answer: 'Det finns ingen universell tid eftersom kammarvolym, temperatur, detaljgeometri och filamentformulering spelar roll. Använd kalkylatorns uppskattning som utgångspunkt och inspektera sedan vid den kortare tiden för första testet innan du fortsätter.',
    },
    {
      question: 'Kan PVB utjämnas med isopropylalkoholånga?',
      answer: 'Ja, många PVB-filament är designade för IPA-utjämning. Processen är vanligtvis mer gradvis än ABS med aceton, men överexponering kan fortfarande göra ytan klibbig eller suddiga fina detaljer.',
    },
    {
      question: 'Minskar en varmare kammare utjämningstiden?',
      answer: 'Ja. Varmare lösningsmedelsånga verkar vanligtvis snabbare, men ökar också brandfarligheten och risken för detaljförlust. Undvik improviserade värmare och håll ånga borta från antändningskällor.',
    },
    {
      question: 'Hur länge ska en utjämnad del torka?',
      answer: 'Planera timmar, inte minuter. ABS utjämnat med aceton behöver ofta längre avgasning än PVB utjämnat med IPA, särskilt för tjocka delar eller aggressiva exponeringar.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Välj material-lösningsmedelspar', text: 'Välj ABS för acetonångutjämning eller PVB för IPA-ångutjämning.' },
    { name: 'Ange kammarförhållanden', text: 'Lägg till ångkammarvolym och kammartemperatur med metriska eller US-enheter.' },
    { name: 'Beskriv detaljen', text: 'Ange ungefärlig detaljvolym och välj en ytdetaljnivå som matchar de minsta egenskaperna.' },
    { name: 'Använd första testet', text: 'Inspektera detaljen vid den kortare testtiden innan du kör hela den uppskattade exponeringen.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'ABS Aceton och PVB IPA Ångutjämningstid Kalkylator',
      description: 'Uppskatta kemisk ångutjämningsexponering och torktid för ABS-aceton och PVB-IPA efterbehandling.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Hur länge ska ABS vara i acetonånga?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Använd en konservativ uppskattning baserad på kammarvolym, temperatur, detaljstorlek och detaljnivå, inspektera sedan vid en kortare första testtid.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Hur man uppskattar kemisk utjämningstid för ABS- eller PVB-utskrifter',
      step: [
        { '@type': 'HowToStep', text: 'Välj ABS med aceton eller PVB med IPA.' },
        { '@type': 'HowToStep', text: 'Ange kammarvolym och -temperatur.' },
        { '@type': 'HowToStep', text: 'Ange detaljvolym och ytdetaljnivå.' },
        { '@type': 'HowToStep', text: 'Börja med första testet och fortsätt endast om detalj förblir säker.' },
      ],
    },
  ],
};
