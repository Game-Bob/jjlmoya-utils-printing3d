import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { PowerSupplyEstimatorUI } from '../ui';

export const content: ToolLocaleContent<PowerSupplyEstimatorUI> = {
  slug: 'stromforsorjning-storlek-kalkylator-3d-skrivare',
  title: 'Kalkylator för Strömförsörjning till 3D skrivare: Hotends, Värmda Bäddar, Motorer och 12V till 24V uppgraderingar',
  description: 'Uppskatta PSU watt och maximal ström för en 3D-skrivaruppgradering genom att lägga ihop värmd bädd, hotend-patron, stegmotorer, extra belastning och säkerhetsmarginal.',
  ui: {
    systemVoltageLabel: 'Systemspänning',
    bedPowerLabel: 'Värmd bädd',
    hotendPowerLabel: 'Hotend-patron',
    motorsLabel: 'Motorer',
    motorPowerLabel: 'Per motor',
    auxiliaryPowerLabel: 'Extra belastning',
    safetyMarginLabel: 'Säkerhetsmarginal',
    totalLoadLabel: 'Direkt belastning',
    psuRequiredLabel: 'Krävd PSU',
    currentRequiredLabel: 'Maximal ström',
    recommendedPsuLabel: 'närmaste vanliga PSU',
    utilizationLabel: 'belastning på vald storlek',
    thermalMapLabel: 'Termisk effektkarta',
    bedSegmentLabel: 'Bädd',
    hotendSegmentLabel: 'Hotend',
    motorsSegmentLabel: 'Motorer',
    auxiliarySegmentLabel: 'Extra',
    headroomSegmentLabel: 'Marginal',
    scenarioLabel: 'Förinställningar',
    scenarioBedSlinger: 'Rörlig bädd',
    scenarioCoreXY: 'CoreXY',
    scenarioLargeFormat: 'Stort format',
    copyButton: 'Kopiera sammanfattning',
    copiedButton: 'Kopierad',
    controlsAriaLabel: 'Strömförsörjningsdata',
    resultsAriaLabel: 'Strömförsörjningsresultat',
    copiedSummaryTemplate: '3D-skrivar PSU: {requiredWatts} W krävs, {currentAmps} A vid {voltage} V, rekommenderas {recommendedWatts} W.',
    wattsUnit: 'W',
    ampsUnit: 'A',
    voltsUnit: 'V',
    percentUnit: '%',
    countUnit: 'x',
  },
  seo: [
    { type: 'title', text: 'Hur man Dimensionerar Strömförsörjningen till en 3D-skrivare Utan att Gissa', level: 2 },
    {
      type: 'paragraph',
      html: 'Strömförsörjningen till en 3D-skrivare dimensioneras utifrån de belastningar som kan vara aktiva samtidigt: den värmda bädden, hotend-värmepatronen, stegmotorerna, kontrollerkortet, fläktar, lysdioder, sensorer, kammarvärmereläer och all extra elektronik. Det grundläggande elektriska sambandet är enkelt: <strong>watt är lika med volt multiplicerat med ampere</strong>. En skrivare som behöver 420 W på ett 24 V-system kan dra cirka 17,5 A innan extra utrymme för start, regleringsförluster eller framtida uppgraderingar beaktas.',
    },
    {
      type: 'paragraph',
      html: 'Misstaget som orsakar många instabila skrivarbyggen är att använda den genomsnittliga utskriftsförbrukningen istället för den maximala kontrollerade belastningen. Under en normal PLA-utskrift kan bädden cykla med partiell driftcykel när temperaturen har nåtts, men under uppvärmning kan både bädden och hotenden köras på 100% samtidigt. Om PSU:n dimensioneras endast från en smartplug-avläsning tagen mitt i utskriften kan den verka tillräcklig samtidigt som den är marginell under uppvärmning, ABS-kammaranvändning eller en återhämtningscykel i ett kallt rum.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: 'P = V x A', label: 'grundläggande dimensioneringsformel' },
        { value: '20-35%', label: 'typisk praktisk marginal' },
        { value: '24V', label: 'lägre ström än 12V för samma watt' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Behandla inte PSU watt som tillstånd att överbelasta kontakter',
      html: 'En 500 W PSU gör inte varje terminal, PCB-bana, XT-kontakt, barreljack eller skruvblock säkert för 500 W. Ström måste kontrolleras på kabel- och kontaktnivå, särskilt för värmda bäddar och kammarvärmare.',
    },
    { type: 'title', text: 'Vilka Belastningar Borde Inkluderas i en Beräkning av PSU-effekt?', level: 2 },
    {
      type: 'paragraph',
      html: 'För en FDM-skrivare är den värmda bädden vanligtvis den dominerande effektbelastningen. En vanlig bädd på 220 x 220 mm kan vara cirka 180-250 W, medan en större bädd på 300 x 300 mm kan vara 300-500 W beroende på spänning och konstruktion. AC bäddar är annorlunda eftersom deras värmeeffekt inte tillhandahålls av skrivarens DC-PSU; i så fall inkludera endast DC-kontroll elektronik, fläktar, hotend, motorer och den lilla ström som används av solid-state-reläets ingång.',
    },
    {
      type: 'paragraph',
      html: 'Hotend-värmepatronen är nästa uppenbara belastning. Standardpatroner är ofta 30 W eller 40 W, högeffektiva hotends använder ofta 50 W eller 60 W, och vissa högtemperaturkonfigurationer använder 80 W eller mer. En patron med fler watt förbrukar inte automatiskt den effekten konstant, men PSU:n måste stödja full märkeffekt eftersom firmware kan beordra 100% driftcykel under uppvärmning eller återhämtning efter ett stort extrusionsbehov.',
    },
    {
      type: 'list',
      items: [
        'Värmd bädd effekt från bäddens specifikation eller uppmätt spänning och resistans.',
        'Hotend-patron effekt från dess märkvärde, inte från genomsnittlig driftcykel.',
        'Stegmotorers utrymme baserat på motorantal och drivrutiners ströminställningar.',
        'Extra effekt för kontroller, fläktar, Raspberry Pi, lysdioder, sensorer, reläer och verktygshuvudkort.',
        'Säkerhetsmarginal för transient belastning, kondensatoråldring, kammarvärme och framtida uppgraderingar.',
      ],
    },
    {
      type: 'table',
      headers: ['Komponent', 'Typiskt intervall', 'Dimensioneringsanteckning'],
      rows: [
        ['220 mm värmd bädd', '180-250 W', 'Ofta den största DC-belastningen på en skrivbordsskrivare.'],
        ['300 mm värmd bädd', '300-500 W', 'Kontrollera kabelarea och bäddens MOSFET-väg noggrant.'],
        ['Hotend-patron', '30-80 W', 'Använd patronens märkeffekt, inte observerad medeleffekt.'],
        ['Stegmotorer', '6-15 W var', 'Beror på strömgräns, spänning, drivrutinsläge och hållström.'],
        ['Fläktar och elektronik', '10-60 W', 'Verktygshuvudkort, lysdioder och enkortsdatorer summeras snabbt.'],
      ],
    },
    { type: 'title', text: '12V vs 24V Strömförsörjningsbehov', level: 2 },
    {
      type: 'paragraph',
      html: 'För samma effekt behöver en 24 V-skrivare hälften så mycket ström som en 12 V-skrivare. En belastning på 360 W drar 30 A vid 12 V men bara 15 A vid 24 V. Lägre ström minskar spänningsfall i kablar, minskar värme i kontakter och ger bädd- och hotendkretsar mer praktiskt utrymme. Det är därför många moderna 3D-skrivare och uppgraderingskort föredrar 24 V för värmare och rörelseelektronik.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '12V system',
          description: 'Användbara för äldre skrivare och bilstilsaccessoarer, men hög bädd-effekt kan kräva mycket hög ström.',
          points: ['Högre strömstyrka för samma watt', 'Känsligare för kontaktresistans', 'Vanliga på äldre RepRap-maskiner'],
        },
        {
          title: '24V system',
          description: 'Föredragna för många moderna skrivare eftersom samma värmeeffekt levereras med lägre ström.',
          highlight: true,
          points: ['Lägre strömstyrka för samma watt', 'Mindre spänningsfall i kablaget', 'Bättre lämpade för större DC-värmda bäddar'],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Använd ström som en praktisk kablagerealitetskontroll',
      html: 'Efter beräkning av erforderliga watt, dividera med spänningen för att få maximal ström. Det amperetalet är värdet som betyder något för PSU-terminaler, säkringar, strömbrytare, kabelarea, bäddkontakter och korts ingångsmärkvärden.',
    },
    {
      type: 'proscons',
      title: 'Ändra spänning under en uppgradering',
      items: [
        { pro: 'Att gå från 12 V till 24 V kan minska ström och kontaktuppvärmning för samma bädd-effekt.', con: 'Fläktar, lysdioder, pumpar och vissa kontrollkort kan behöva bytas ut eller utrustas med buck-omvandlare.' },
        { pro: '24 V-hotends och bäddar når ofta temperaturen snabbare när de är korrekt specificerade.', con: 'En felaktigt matchad 12 V-värmare på 24 V kan bli farligt överbelastad.' },
        { pro: 'Drivrutins- och rörelsesystem fungerar ofta bättre med modern 24 V-elektronik.', con: 'Varje accessoars spänning måste granskas före första uppstart.' },
      ],
    },
    { type: 'title', text: 'Hur Mycket Säkerhetsmarginal Ska en 3D-skrivar PSU Ha?', level: 2 },
    {
      type: 'paragraph',
      html: 'En säkerhetsmarginal är inte bortkastad kapacitet; det är utrymme för drift. Switchade nätaggregat trivs bäst när de inte permanent drivs vid sin märkeffekt i en varm kammare. En skrivar-PSU monterad under en uppvärmd kammare, bredvid en bäddkabelkedja eller inuti en dåligt ventilerad bas kan gå varmare än samma PSU på en öppen bänk. Värme förkortar kondensatorernas livslängd och kan utlösa avstängningar under belastning.',
    },
    {
      type: 'paragraph',
      html: 'För en typisk skrivbordsskrivare är 20% marginal ett rimligt minimum när belastningsuppskattningen är korrekt. För stora bäddar, högeffektiva hotends, kammerfläktar, LED-belysning eller framtida verktygshuvuduppgraderingar är 30-35% bekvämare. För experimentella skrivare, högtemperaturmaskiner eller byggen som kan lägga till en andra hotend, aktiv kammarvärmningsstyrning eller många accessoarer, är att välja ett steg över den beräknade PSU-storleken vanligtvis det lugnare ingenjörsvalet.',
    },
    {
      type: 'table',
      headers: ['Marginal', 'Användningsfall', 'Praktisk betydelse'],
      rows: [
        ['10%', 'Noggranna belastningar, öppen ram, kvalitets-PSU', 'Fungerar bara när varje belastning och kabelväg redan är verifierad.'],
        ['20%', 'Normal skrivbordsskrivare', 'Bra grundlinje för en stabil standardbyggnad.'],
        ['30%', 'Uppgraderad bädd, högeffektiv hotend, sluten elektronik', 'Bättre termisk komfort och framtida flexibilitet.'],
        ['40%+', 'Storformat eller experimentell skrivare', 'Användbart när belastningsantaganden kan ändras senare.'],
      ],
    },
    {
      type: 'card',
      title: 'Varför en större PSU inte tvingar mer effekt in i skrivaren',
      html: 'En reglerad DC-strömförsörjning levererar spänning; de anslutna belastningarna drar ström enligt resistans, driftcykel och styrelektronik. En 600 W-PSU på en skrivare som behöver 300 W trycker inte 600 W in i bädden. Den har helt enkelt tillräcklig kapacitet för att leverera strömmen utan att arbeta vid sin gräns.',
    },
    { type: 'title', text: 'Strömförbrukning för Värmd Bädd och Termiskt Beteende', level: 2 },
    {
      type: 'paragraph',
      html: 'Värmda bäddar är resistiva belastningar, så deras teoretiska effekt kan uppskattas från spänning och resistans med <code>P = V² / R</code>. Om en 24 V-bädd har 2,4 ohm resistans är den ungefär en 240 W-bädd. Verklig effekt varierar med matningsspänning, kabelingsförluster, MOSFET-resistans och bäddtemperatur eftersom resistansen kan ändras något när värmaren värms upp.',
    },
    {
      type: 'paragraph',
      html: 'En bädd som cyklar med 35% driftcykel under en stabil PLA-utskrift kan fortfarande kräva 100% vid uppstart. För PSU-dimensionering, använd full värmares märkeffekt. För elkostnadsuppskattning är genomsnittlig driftcykel mer användbar. Att blanda dessa två frågor är en vanlig källa till underdimensionerade PSU:er: energiförbrukningen över en tvåtimmars utskrift är inte samma sak som momentan elektrisk kapacitet.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Undantag för AC bädd',
      html: 'Om skrivaren använder en nätansluten AC bädd, inkludera inte bäddens effekt i DC-PSU-belastningen. Dimensionera istället AC-kablage, säkring, relä, dragavlastning, jordning och termiskt skydd separat. DC-PSU:n driver fortfarande styrenheten, hotenden, motorerna och tillbehören.',
    },
    {
      type: 'list',
      items: [
        'Isolerad bäddundersida: mindre värmeförlust och lägre genomsnittlig driftcykel efter uppvärmning.',
        'Tjock aluminiumplatta: långsammare uppvärmning men jämnare värmefördelning.',
        'Stor glasplatta: mer termisk massa, ofta längre uppvärmning vid samma effekt.',
        'Kallt rum eller öppen ram: mer återhämtningseffekt behövs för att bibehålla temperaturen.',
      ],
    },
    { type: 'title', text: 'Hotend, Motorer, Fläktar och Extra Belastningar', level: 2 },
    {
      type: 'paragraph',
      html: 'Stegmotorer är ofta överskattade eller underskattade eftersom deras elektriska beteende inte är så enkelt som att addera märkspänning och -ström. Moderna chopper-drivrutiner reglerar lindningsströmmen, och effekten som tas från PSU:n beror på drivrutinsinställningar, motorhastighet, hållströmsreducering och mekanisk belastning. För PSU-dimensionering är ett praktiskt utrymme på 8-15 W per aktiv stegmotor ofta tillräckligt för vanliga skrivbordsskrivare, men motorer med mycket hög ström eller många Z-motorer förtjänar en direkt beräkning från drivrutinskonfigurationen.',
    },
    {
      type: 'paragraph',
      html: 'Extra belastningar är lätta att glömma eftersom varje post är liten: hotendfläkt, delkylningsfläkt, styrenhetsfläkt, kammarcirkulationsfläktar, lysdioder, filamentsensor, sond, moderkort, display, verktygshuvudkort, Raspberry Pi, kamera, USB-hubb och buck-omvandlarförluster. En skrivare med en enkortsdator och kammarbelysning kan lägga till 20-40 W utan att kännas som en stor elektrisk förändring.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Kontinuerlig märkning', definition: 'Den belastning en strömförsörjning är avsedd att leverera under långa perioder under specificerade kylnings- och temperaturförhållanden.' },
        { term: 'Toppbelastning', definition: 'En kortvarig efterfrågan som kan vara högre än genomsnittlig belastning, såsom uppvärmning eller samtidig värmaråterhämtning.' },
        { term: 'Spänningsfall', definition: 'Spänningen som förloras över kablar och kontakter eftersom verkliga ledare har resistans.' },
        { term: 'Driftcykel', definition: 'Andelen tid en styrd värmare är påslagen under en kontrollperiod.' },
        { term: 'Marginal', definition: 'Extra kapacitet över beräknad belastning som håller PSU:n borta från sin gräns.' },
      ],
    },
    {
      type: 'summary',
      title: 'Checklista för extra belastning',
      items: [
        'Lägg ihop alla fläktar vid deras märkeffekt eller spänning gånger ström.',
        'Inkludera enkortsdatorer och kameror om de strömförsörjs från skrivarens PSU.',
        'Reservera effekt för LED-remsor, verktygshuvudkort, reläer, sensorer och buck-omvandlarförluster.',
        'Räkna om efter att ha lagt till kammarvärmare, extra extrudrar eller högeffekts delkylning.',
      ],
    },
    { type: 'title', text: 'Läsa Kalkylatorns Utdata', level: 2 },
    {
      type: 'paragraph',
      html: 'Den direkta belastningen är summan av bädd, hotend, motorer och extra ingångar före marginalen. Värdet för krävd PSU lägger till den valda säkerhetsmarginalen. Värdet för maximal ström dividerar det kravet med systemspänningen och svarar därmed på den praktiska kablagingsfrågan: hur många ampere måste PSU:n och ingångsvägen säkert bära vid den valda spänningen?',
    },
    {
      type: 'paragraph',
      html: 'Den rekommenderade PSU-storleken avrundar uppåt till en vanlig wattklass. Om det erforderliga värdet är 382 W kan en 400 W-PSU verka matematiskt tillräcklig, men en 450 W- eller 500 W-modell kan vara att föredra om den har bättre kylning, bättre terminaler, erkända säkerhetscertifieringar eller en ärligare kontinuerlig märkning. Märkeffekten är bara en del av PSU-kvaliteten.',
    },
    {
      type: 'table',
      headers: ['Utdata', 'Använd för', 'Varningssignal'],
      rows: [
        ['Erforderliga watt', 'Välja PSU-kapacitet', 'Värdet ligger inom några watt från PSU-märkningen.'],
        ['Maximal ström', 'Kabel-, säkrings- och kontaktkontroll', 'Strömmen överskrider kortets eller terminalernas märkvärden.'],
        ['Rekommenderad storlek', 'Inköpslista', 'Billig namnlös PSU med påstådd hög effekt och små terminaler.'],
        ['Utilisation', 'Termisk komfortuppskattning', 'Kontinuerlig belastning över cirka 80-85%.'],
      ],
    },
    {
      type: 'message',
      title: 'Praktisk köpregel',
      html: 'Välj den första kvalitets-PSU:n ovanför det beräknade kravet och kontrollera sedan utspänning, strömstyrka, kylriktning, kammarventilation, skyddsjordning, säkringsstrategi och kontaktmärkvärden före installation.',
    },
    { type: 'title', text: 'Vanliga PSU-storleksmisstag vid 3D-skrivaruppgraderingar', level: 2 },
    {
      type: 'list',
      items: [
        'Använda genomsnittlig smartplug-watt istället för maximal DC-värmarbelastning.',
        'Glömma att 12 V-system behöver dubbelt så mycket ström som 24 V-system vid samma watt.',
        'Lägga till en större bädd men behålla originalets kortkontakt och kabelarea.',
        'Installera en högeffekts hotend-patron utan att kontrollera MOSFET, säkring och firmwares termiska skydd.',
        'Strömförsörja Raspberry Pi, kamera, lysdioder och fläktar från skrivaren utan att lägga till extra belastning.',
        'Köpa en PSU baserat på annonserad peak-effekt istället för kontinuerlig märkning och säkerhetscertifiering.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Stoppa om kablar eller kontakter blir varma',
      html: 'Varma kablar, brunaktiga terminaler, smälta höljen, intermittent återställning eller bäddtemperaturfall under rörelse är inte inställningsproblem. De är elektriska symptom som kräver inspektion före fortsatt utskrift.',
    },
    {
      type: 'paragraph',
      html: 'Kalkylatorn uppskattar PSU-kapacitet; den certifierar inte hela det elektriska systemet. En säker skrivare behöver också korrekt jordning, dragavlastning, säkringar, ändhylsor där lämpligt, krympkontakter dimensionerade för den faktiska strömmen, firmware-termiskt rymningsskydd och en kabellayout som håller nätspänning separerad från lågspänningselektronik.',
    },
    {
      type: 'card',
      title: 'När man ska dela upp strömförsörjningar',
      html: 'Stora skrivare använder ibland separata strömförsörjningar för bädd, rörelseelektronik och tillbehör. Uppdelning kan minska strömmen genom ett kort och förenkla service, men jord, switchlogik, säkringar och nödstoppsbeteende måste utformas medvetet.',
    },
    { type: 'title', text: 'Arbetade Exempel: Standardskrivare, CoreXY-uppgradering och Stor Bädd', level: 2 },
    {
      type: 'paragraph',
      html: 'En kompakt bäddslinger med en 220 W-bädd, 40 W-hotend, fyra motorer på 10 W och 25 W elektronik har en direkt belastning på 325 W. Med 25% marginal är den erforderliga PSU-kapaciteten cirka 406 W. På 24 V är det ungefär 16,9 A, så en kvalitets 450 W eller 500 W 24 V-PSU är ett rimligt mål beroende på kontaktlayout och kylning.',
    },
    {
      type: 'paragraph',
      html: 'En CoreXY-uppgradering med en 300 W-bädd, 60 W högeffektiv hotend, fem motorer på 12 W och 45 W extra belastning summerar till 465 W före marginal. Med 30% marginal krävs cirka 605 W eller 25,2 A vid 24 V. Det bygget hör till 600-750 W-klassen, och bäddkablaget bör behandlas som en huvudströmväg snarare än en eftertanke.',
    },
    {
      type: 'paragraph',
      html: 'En storformatsskrivare med en 600 W DC-bädd, 80 W-hotend, sex motorer på 14 W och 80 W extra belastning når 844 W före marginal. Med 35% marginal är kravet cirka 1139 W. Vid den tidpunkten överväger många byggare en AC bädd eller separerad kraftarkitektur eftersom DC-ström, kablaget, säkringar och värmehantering blir centrala konstruktionsbegränsningar.',
    },
    {
      type: 'summary',
      title: 'Slutlig dimensioneringsarbetsflöde',
      items: [
        'Lista varje belastning som kan köras under uppvärmning eller återhämtning.',
        'Beräkna direkta watt, lägg sedan till realistisk marginal.',
        'Konvertera watt till ampere vid den faktiska systemspänningen.',
        'Välj en kvalitets-PSU med kontinuerlig märkning ovanför resultatet.',
        'Kontrollera kablar, kontakter, säkringar, kortmärkvärden och kylning innan du slår på skrivaren.',
      ],
    },
  ],
  faq: [
    {
      question: 'Hur många watt behöver min 3D-skrivares strömförsörjning?',
      answer: 'Lägg ihop den värmda bädden, hotend-patronen, motorerna, elektroniken, fläktarna och tillbehören och lägg sedan till en säkerhetsmarginal. Många uppgraderade skrivbords 24 V-skrivare landar mellan 400 W och 600 W, medan stora bäddar kan kräva mycket mer.',
    },
    {
      question: 'Är 24V bättre än 12V för en 3D-skrivar PSU?',
      answer: 'För samma watt använder 24 V hälften av strömmen jämfört med 12 V. Lägre ström innebär vanligtvis mindre spänningsfall och mindre kontaktuppvärmning, men alla värmare, fläktar, kort och tillbehör måste vara kompatibla med den valda spänningen.',
    },
    {
      question: 'Ska jag inkludera den värmda bädden i DC-PSU-beräkningen?',
      answer: 'Inkludera den om det är en DC-värmd bädd som drivs av skrivarens PSU. Inkludera inte en nätansluten AC bädd i DC-PSU-effekten; dimensionera dess nätsladd, relä, säkring och säkerhetsskydd separat.',
    },
    {
      question: 'Vilken säkerhetsmarginal ska jag använda som PSU-reserv?',
      answer: 'Använd minst 20% för ett normalt känt bygge. Använd 30-35% för uppgraderade bäddar, högeffektiva hotends, sluten elektronik eller framtida tillbehör.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Ange värmarbelastningar', text: 'Lägg till märkeffekten för den värmda bädden och hotend-patronen.' },
    { name: 'Lägg till rörelse och tillbehör', text: 'Ange motorantal, marginal per motor, fläktar, kort, lysdioder och andra extra belastningar.' },
    { name: 'Välj spänning och marginal', text: 'Välj 12 V eller 24 V och ställ in en säkerhetsmarginal som matchar byggrisken.' },
    { name: 'Kontrollera watt och ampere', text: 'Använd erforderliga watt för PSU-val och maximala ampere för kabel-, säkrings- och kontaktkontroller.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Kalkylator för Strömförsörjningsstorlek till 3D-skrivare',
      description: 'Uppskatta PSU-effekt och ström för en 3D-skrivare från bädd-, hotend-, motor-, extra- och marginalbelastningar.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Hur många watt behöver min 3D-skrivares strömförsörjning?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Lägg ihop den värmda bädden, hotend-patronen, motorerna, elektroniken, fläktarna och tillbehören och lägg sedan till en säkerhetsmarginal.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Hur man dimensionerar en 3D-skrivares strömförsörjning',
      step: [
        { '@type': 'HowToStep', text: 'Ange värmarbelastningar.' },
        { '@type': 'HowToStep', text: 'Lägg till rörelse- och tillbehörsbelastningar.' },
        { '@type': 'HowToStep', text: 'Välj systemspänning och säkerhetsmarginal.' },
        { '@type': 'HowToStep', text: 'Välj en kvalitets-PSU ovanför det beräknade kravet.' },
      ],
    },
  ],
};
