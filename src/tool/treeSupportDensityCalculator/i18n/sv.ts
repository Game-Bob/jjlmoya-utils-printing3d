import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { TreeSupportDensityCalculatorUI } from '../ui';

export const content: ToolLocaleContent<TreeSupportDensityCalculatorUI> = {
  slug: 'tradstod-densitetskalkylator',
  title: 'Trädstöd Densitet Kalkylator',
  description: 'Uppskatta kronans diameter, stödvolym, antal grenar, kontaktdiameter och stabilitet för trädstöd baserat på stödhöjd, grenvinkel, gren densitet och basstam diameter.',
  ui: {
    unitSystemLabel: 'Enheter',
    metricLabel: 'Metriska',
    imperialLabel: 'US',
    presetsLabel: 'Förinställningar',
    miniaturePresetLabel: 'Mini',
    balancedPresetLabel: 'Balanserad',
    tallPresetLabel: 'Hög',
    supportHeightLabel: 'Stödhöjd',
    branchAngleLabel: 'Grenvinkel',
    branchDensityLabel: 'Gren densitet',
    baseTrunkDiameterLabel: 'Basstam diameter',
    canopyDiameterLabel: 'Krona diameter',
    supportVolumeLabel: 'Beräknad stödvolym',
    stabilityLabel: 'Stödstabilitet',
    filamentMassLabel: 'Filamentmassa',
    branchCountLabel: 'Antal grenar',
    contactDiameterLabel: 'Kontaktdiameter',
    trunkVolumeLabel: 'Stamvolym',
    branchVolumeLabel: 'Grenvolym',
    stabilityScoreSeparator: '-',
    stabilityScoreSuffix: '/100',
    stabilityLow: 'låg stabilitet',
    stabilityBalanced: 'balanserad stabilitet',
    stabilityHigh: 'hög stabilitet',
    controlsAriaLabel: 'Trädstöd densitet indata',
    resultsAriaLabel: 'Trädstöd densitet resultat',
    copyButton: 'Kopiera stödinställningar',
    copiedButton: 'Kopierat',
    copiedSummaryTemplate: 'Trädstöd uppskattning: krona {canopy}, stödvolym {volume}, stabilitet {stability} ({score}/100).',
    millimetersUnit: 'mm',
    inchesUnit: 'tum',
    cubicCentimetersUnit: 'cm3',
    cubicInchesUnit: 'in3',
    gramsUnit: 'g',
    ouncesUnit: 'oz',
    degreesUnit: 'grader',
    percentUnit: '%',
  },
  seo: [
    { type: 'title', text: 'Hur trädstöd densitet påverkar filamentanvändning och stabilitet', level: 2 },
    {
      type: 'paragraph',
      html: 'Trädstöd är effektiva eftersom de delar upp arbetet i en <strong>lastväg</strong> och ett <strong>kontaktmönster</strong>. Stammen bär större delen av den vertikala lasten från byggplattan, medan mindre grenar sprider sig mot överhäng endast där kontakt behövs. En trädstöd densitetskalkylator är användbar eftersom de mest synliga skärarinställningarna, såsom grenvinkel och gren densitet, samverkar med stödhöjd och basstam diameter. En låg gren densitet kan spara filament, men den minskar också antalet vägar som motverkar vobbling. En brant grenvinkel kan nå höga detaljer med mindre horisontell spridning, men den koncentrerar lasten nära stammen och kan misslyckas på höga smala stöd.',
    },
    {
      type: 'paragraph',
      html: 'Kalkylatorn uppskattar tre värden som är svåra att bedöma med ögat i en skärförhandsvisning: övre kronans diameter, stödvolym och stabilitetspoäng. Övre kronans diameter talar om hur bred grenkronan blir nära modellen. Stödvolym uppskattar det tryckta material som behövs för stam och grenar. Stabilitet kombinerar vinkel, densitet, basdiameter, höjd och kronspridning till en praktisk poäng. Målet är inte att ersätta skärmotorn; målet är att välja startvärden innan skärning så att du lägger mindre tid på att iterera stödförhandsvisningar.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '35-50 grader', label: 'vanligt intervall för grenvinkel vid balanserad räckvidd och styrka' },
        { value: '25-55%', label: 'praktiskt densitetsintervall för många FDM-utskrifter' },
        { value: '2-8 mm', label: 'typiskt basstam diameterintervall för hobby-skrivares trädstöd' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Detta är en planeringskalkylator, inte en geometrisk export från skärmotorn',
      html: 'Varje skärmotor genererar trädstöd olika. Cura, PrusaSlicer, Bambu Studio, OrcaSlicer och andra verktyg använder olika namn och algoritmer för grengenerering, kollisionsundvikande, stödgränssnitt och kontaktpunkter. Använd resultatet som en riktning för inställningarna, bekräfta sedan den slutliga geometrin i skärförhandsvisning innan utskrift.',
    },
    { type: 'title', text: 'Grenvinkel: Räckvidd, lastväg och risk för misslyckande', level: 2 },
    {
      type: 'paragraph',
      html: 'Grenvinkel styr hur aggressivt ett trädstöd sprider sig från stammen mot modellen. En lägre vinkel håller grenarna närmare vertikalen, vilket vanligtvis förbättrar styvhet och minskar lateral vobble. En högre vinkel når längre över tomt utrymme, vilket kan minska antalet stammar som behövs, men det ökar böjlasten och kan skapa långa oströdda grensegment. För höga stöd kan en liten förändring från 50 grader till 60 grader förvandla ett stabilt träd till en flexibel struktur som vibrerar när munstycket vidrör det.',
    },
    {
      type: 'paragraph',
      html: 'Bästa grenvinkel beror på stödpunktshöjd. Ett kort träd under ett litet överhäng kan använda en vidare vinkel eftersom grenlängden är begränsad. En hög stödpunkt behöver en mer konservativ vinkel, särskilt med flexibla material, snabba transportförflyttningar eller en bädd som släpper stöd lätt. Om stödpunkten är hög och grenvinkeln är vid, öka basstam diametern eller densiteten så att grenkronan inte stöds av en tunn pelare.',
    },
    {
      type: 'table',
      headers: ['Grenvinkel', 'Bästa användning', 'Risk vid överanvändning', 'Justering'],
      rows: [
        ['20-35 grader', 'Höga stöd och smala torn', 'Kan kräva fler stammar eftersom räckvidden är begränsad', 'Öka densitet endast där kontaktäckningen är dålig'],
        ['36-50 grader', 'Allmän trädstödsinställning', 'Vanligtvis balanserad, men beror fortfarande på höjd', 'Börja här för de flesta PLA- och PETG-utskrifter'],
        ['51-65 grader', 'Breda överhäng med måttlig höjd', 'Grenar kan böjas under transport eller kontakt', 'Använd tjockare basstam och måttlig densitet'],
        ['66-75 grader', 'Specialfall med mycket bred räckvidd', 'Hög böjbelastning och svaga grenrötter', 'Förhandsgranska noga och sänk stödutskriftshastighet'],
      ],
    },
    {
      type: 'tip',
      title: 'Försök inte nå räckvidd enbart med vinkel',
      html: 'Om grenar måste färdas långt, prova att lägga till en extra stam eller öka kronans densitet innan du trycker vinkeln till övre gränsen. En andra närliggande stam använder ofta mindre material än ett överdrivet träd som behöver en tung bas för att överleva.',
    },
    { type: 'title', text: 'Gren DENSitet: Kontaktäckning utan stödärr', level: 2 },
    {
      type: 'paragraph',
      html: 'Gren densitet beskriver hur mycket grenstruktur som skapas nära det stödda området. Låg densitet minskar filament och gör borttagning enklare, men kan lämna överhängskanter understödda. Hög densitet förbättrar täckning och fördelar last över fler kontakter, men ökar utskriftstid, kontaktärr och risken att stöd smälter samman med känsliga ytor. Rätt densitet är därför inte den högsta siffran som ser säker ut; det är den lägsta siffran som håller överhäng från att sjunka samtidigt som tillräcklig styvhet bibehålls.',
    },
    {
      type: 'paragraph',
      html: 'För dekorativa modeller kan densitet ofta minskas eftersom lätt undersidestextur kan vara acceptabel. För mekaniska delar kräver densitet mer omsorg eftersom oströdda hål, fasningar och passytor kan påverka passform. Material spelar också roll. PLA kan tolerera lättare stöd eftersom det är styvt och skriver rena broar. PETG behöver ofta större luftgap och noggrann kontaktdiameter eftersom det binder starkt till stöd. TPU och flexibla filament behöver konservativ geometri eftersom tunna grenar kan avböjas istället för att hålla överhänget på plats.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Låg densitet',
          description: 'Bäst när borttagningskvalitet och filamentsparande är viktigare än perfekt undersida.',
          points: ['Snabbast stödutskrift', 'Svagast kontaktäckning', 'Användbart för organiska miniatyrer'],
        },
        {
          title: 'Balanserad densitet',
          description: 'En praktisk standard för blandad geometri där överhäng behöver stöd men modellens yta måste hållas ren.',
          highlight: true,
          points: ['God materialeffektivitet', 'Måttlig borttagningsinsats', 'Fungerar för många PLA- och PETG-jobb'],
        },
        {
          title: 'Hög densitet',
          description: 'Användbart för tunga överhäng, höga stödpunkter och ömtåliga kontaktregioner, men ökar ärr.',
          points: ['Bästa lastfördelning', 'Mer volym och utskriftstid', 'Högre risk för sammansmälta kontakter'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Ökning av gren densitet',
      items: [
        { pro: 'Fler kontaktpunkter minskar sjunkning under böjda överhäng.', con: 'Fler kontaktpunkter kan lämna mer synliga märken efter borttagning.' },
        { pro: 'En tätare krona fördelar last över flera grenar.', con: 'Skärmotorn kan generera en stor krona som är svårare att komma åt med tång.' },
        { pro: 'Höga stöd blir mindre känsliga för munstyckets knackningar.', con: 'Utskriftstid och filamentåtgång ökar snabbt när densitet kombineras med en stor krona.' },
      ],
    },
    { type: 'title', text: 'Basstam diameter och varför höga trädstöd misslyckas', level: 2 },
    {
      type: 'paragraph',
      html: 'Basstam diametern är grunden för trädet. En tunn stam kan vara fullt tillräcklig för ett kort stöd, men samma diameter blir riskabel när stödets punkt är hög. Höjd ökar hävstång: en liten munstyckesstöt, transportberöring eller fläktvibration producerar mer rörelse vid kronan. Om stammen är för tunn för höjden, kan stödet inte gå sönder omedelbart; det kan långsamt luta, flytta kontaktpunkten eller lossna från bädden innan överhänget är färdigt.',
    },
    {
      type: 'paragraph',
      html: 'En större stamdiameter förbättrar styvhet och vidhäftning till bädden, men den förbrukar också material. Kalkylatorn behandlar stamdiameter som en stabilitetsinput snarare än en kosmetisk inställning. Om stabilitetspoängen är låg, är en ökning av diametern ofta mer effektiv än att öka gren densitet eftersom den stärker lastvägen från byggplattan. Om poängen redan är hög, kan en större stam endast göra borttagning svårare och slösa filament.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Stödhöjd', definition: 'Det vertikala avståndet från byggplattan till den modellregion som behöver stöd.' },
        { term: 'Grenvinkel', definition: 'Den vinkel som används av grenar när de sprider sig från stammen mot stödkontaktpunkter.' },
        { term: 'Gren densitet', definition: 'Den relativa mängden grenstruktur och kontaktäckning som skapas nära det stödda området.' },
        { term: 'Basstam diameter', definition: 'Den ungefärliga diametern på den huvudsakliga trädstödskolonnen där den börjar på byggplattan.' },
        { term: 'Krona diameter', definition: 'Den uppskattade bredden på den övre grenkronan nära modellens överhäng.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'En hög krona på en tunn stam är det klassiska trädstödsfelmomentet',
      html: 'Om kronans diameter är många gånger större än stamdiametern, beter sig stödet som en tung överbyggnad. Lägg till en till stam, minska grenvinkeln eller öka basdiametern innan du helt enkelt lägger till mer gren densitet.',
    },
    { type: 'title', text: 'Övre krona diameter och modellfrigång', level: 2 },
    {
      type: 'paragraph',
      html: 'Övre krona diameter är viktig eftersom trädstöd måste passa runt modellen, undvika kollisioner och förbli borttagbara. En stor krona kan stödja överhänget väl, men den kan också linda runt detaljer, gå in i hålrum eller skapa grenar som är svåra att bryta loss. En liten krona är lättare att ta bort, men den kan koncentrera kontaktkraften på få punkter och låta kanter hänga ner. Kalkylatorn uppskattar kronans diameter utifrån stödhöjd, grenvinkel, densitet och basdiameter så att du kan förutsäga om den genererade stödkronan blir kompakt eller utbredd.',
    },
    {
      type: 'paragraph',
      html: 'Skärförhandsvisning är avgörande för kronfrigång. Håll utkik efter grenar som passerar genom små hål, under upphöjd text, runt fingrar på figurer eller mellan mekaniska detaljer. Om en gren kan nå ett område, kan den också fånga sig själv där. Lägre densitet, mindre kontaktdiameter, tätare stödblockerare eller manuell målning kan hålla trädstöd från att bli svårare att ta bort än vanliga rutnätsstöd.',
    },
    {
      type: 'table',
      headers: ['Kronbeteende', 'Trolig orsak', 'Utskriftskonsekvens', 'Åtgärd'],
      rows: [
        ['Kronan är för smal', 'Vinkel och densitet är båda konservativa', 'Överhängskanter sjunker mellan kontaktpunkter', 'Öka densitet eller lägg till manuella stödpunkter'],
        ['Kronan är bred men instabil', 'Hög vinkel på ett högt stöd', 'Munstyckeskontakt kan skaka strukturen', 'Minska vinkel eller öka stamdiameter'],
        ['Kronan omger detaljer', 'Densitet är hög runt komplex geometri', 'Borttagning lämnar synliga ärr på ytor', 'Använd stödblockerare eller lägre densitet'],
        ['Kronan vidrör modellens sidoväggar', 'Stödets frigång är för liten', 'Grenar kan smälta samman med detaljen', 'Öka X/Y-avstånd eller minska kontaktdiameter'],
      ],
    },
    {
      type: 'card',
      title: 'Krona diameter är en förhandsgranskningsvarning',
      html: 'En stor uppskattad krona är inte automatiskt dålig. Det innebär att skärförhandsvisningen förtjänar uppmärksamhet eftersom stödkronan kan bli den dominerande utmaningen vid borttagning.',
    },
    { type: 'title', text: 'Stödvolym, filamentlängd och utskriftstid', level: 2 },
    {
      type: 'paragraph',
      html: 'Stödvolym är den praktiska kostnaden för de valda inställningarna. Ett trädstöd kan se lätt ut i förhandsvisningen, men en tät krona och tjock stam kan fortfarande förbruka betydande filament. Kalkylatorn rapporterar uppskattad volym i kubikcentimeter och en motsvarande filamentlängd för 1,75 mm filament. Detta hjälper dig att jämföra inställningar innan skärning, särskilt när du överväger om en högre stam, högre densitet eller extra grenräckvidd är värt materialet.',
    },
    {
      type: 'paragraph',
      html: 'Volym motsvarar inte perfekt utskriftstid eftersom skärmotorer använder olika linjebredder, väggantal, fyllnadsmönster, accelerationsbegränsningar och stödhastigheter. Stödvolym förblir dock en stark indikator. Om två inställningar producerar liknande stabilitet men en använder betydligt mindre volym, är inställningen med lägre volym vanligtvis den bättre startpunkten. Om inställningen med lägre volym också ger låg stabilitetspoäng, kan besparingen försvinna när utskriften misslyckas eller undersidan behöver omarbetas.',
    },
    {
      type: 'summary',
      title: 'Hur du minskar stödvolym på ett säkert sätt',
      items: [
        'Sänk gren densitet först när stabilitetspoängen redan är hög.',
        'Minska grenvinkel när kronan är mycket bred och tung upptill.',
        'Använd en mindre basstam endast på korta stöd med måttliga överhängsbelastningar.',
        'Dela upp ett stort träd i två mindre träd när räckvidden skapar en stor krona.',
        'Justera kontaktdiameter separat så att ytärr inte tvingar fram onödig densitet.',
      ],
    },
    {
      type: 'message',
      title: 'Materialsbesparing är bara användbar om stödet överlever',
      html: 'Ett misslyckat stöd kostar vanligtvis mer filament än ett något starkare. Betrakta stora besparingsprocent som en inbjudan att förhandsgranska noggrant, inte som bevis på att det lättaste stödet automatiskt är korrekt.',
    },
    { type: 'title', text: 'Trädstöd kontaktdiameter och ytkvalitet', level: 2 },
    {
      type: 'paragraph',
      html: 'Kontaktdiameter styr hur mycket av trädstödet som vidrör modellen. Små kontakter lossnar rent och minskar ärr, men de kan lossna från tunga eller heta överhäng. Större kontakter håller bättre och fördelar värme, men de kan svetsa fast i PETG, lämna upphöjda prickar på PLA eller skada resin-liknande ytdetaljer på dekorativa utskrifter. Denna kalkylator uppskattar en kontaktdiameter utifrån grens diameter och densitet så att resultatet förblir kopplat till stödstrukturen snarare än att behandlas som ett isolerat kosmetiskt värde.',
    },
    {
      type: 'paragraph',
      html: 'Kontaktinställningar bör justeras tillsammans med top Z-avstånd och gränssnittsbeteende. Om det vertikala gapet är för litet kan även en liten kontakt binda starkt. Om det vertikala gapet är för stort kan en bred kontakt fortfarande misslyckas med att stödja överhänget eftersom filamentet har plats att sjunka. För funktionella delar, testa kontaktdiameter på ett kalibreringsöverhäng tillverkt av samma material, munstycksstorlek, lagerhöjd och kylinställningar som används för den verkliga modellen.',
    },
    {
      type: 'list',
      items: [
        'Använd mindre kontaktdiametrar på synliga kosmetiska ytor.',
        'Använd större kontakter under tunga broar, tjocka överhäng eller hög temperaturmaterial.',
        'Öka top Z-avståndet innan du skyller på träddensitet när stöd är svåra att ta bort.',
        'Sänk stödgränssnittshastigheten om kontaktpunkter slås loss under utskrift.',
        'Kontrollera om skärmotorn kallar denna inställning kontaktdiameter, tipsdiameter eller stödgränssnittskontakt.',
      ],
    },
    {
      type: 'tip',
      title: 'PETG kräver extra försiktighet',
      html: 'PETG binder aggressivt till stödmaterial som skrivs från samma filament. En måttlig träddensitet med noggrannt Z-avstånd fungerar ofta bättre än en mycket tät krona med stora kontakter.',
    },
    { type: 'title', text: 'Rekommenderad startprocess för skärmotorns trädstöd', level: 2 },
    {
      type: 'paragraph',
      html: 'Börja med att ange höjden på den högsta stödpunkten snarare än hela modellhöjden. En modell kan vara lång medan den stödda regionen ligger nära bädden, eller kort medan ett kritiskt överhäng sitter högt på en smal ö. Välj sedan en grenvinkel i det balanserade intervallet och ställ in gren densitet enligt den ytkvalitet du behöver. Slutligen sätt basstam diameter baserat på höjd och förväntad last. Kalkylatorn visar om kombinationen är volymeffektiv, stabil eller riskabel.',
    },
    {
      type: 'paragraph',
      html: 'Efter beräkning, gå till skärförhandsvisning och inspektera det genererade trädet från första stödlagret till den slutliga kontakten. Leta efter flytande starter, mycket tunna grenrötter, grenar som passerar för nära modellen och oströdda överhängsöar. Om stödet är instabilt i kalkylatorn och ser glest ut i förhandsvisningen, förstärk stammen eller minska grenvinkeln. Om stödet är stabilt men visuellt stort, minska densitet och kontrollera om kontaktmönstret fortfarande täcker överhänget.',
    },
    {
      type: 'diagnostic',
      variant: 'success',
      title: 'En bra trädstödsinställning är tråkig i förhandsvisningen',
      html: 'Förhandsvisningen ska visa en tydlig stam, korta grenvägar, tillräckligt med kontakter under överhänget och öppen plats runt detaljer. Om trädet ser visuellt dramatiskt ut, gör det förmodligen för mycket.',
    },
    {
      type: 'summary',
      title: 'Snabb justeringssekvens',
      items: [
        'Ange stödpunktshöjd, inte bara modellhöjd.',
        'Börja nära 45-grader för grenvinkel.',
        'Använd 30-45% densitet för allmänna PLA-utskrifter, justera sedan från förhandsvisning.',
        'Öka stamdiameter innan du gör höga stöd extremt täta.',
        'Bekräfta kontaktdiameter och frigång på den faktiska skärförhandsvisningen.',
      ],
    },
    { type: 'title', text: 'När trädstöd är bättre än vanliga stöd', level: 2 },
    {
      type: 'paragraph',
      html: 'Trädstöd är starkast när stöd behövs i isolerade regioner: figurarmar, hjälmar, varelsehorns, organiska rekonstruerade skal, dekorativa bågar och böjda överhäng. De undviker att fylla hela området under modellen, så de använder ofta mindre filament och lämnar färre ärr än blockiga rutnätsstöd. De är också användbara när standardstöd skulle skapa en stor vägg som är svår att ta bort från en böjd yta.',
    },
    {
      type: 'paragraph',
      html: 'Standardstöd kan fortfarande vara bättre för platta tekniska överhäng, breda horisontella hyllplan och ytor som behöver konsekvent stödgränssnitt. En trädstödskrona vidrör utvalda punkter, medan vanliga stöd kan ge ett mer enhetligt plan. Om undersidan måste vara dimensionellt noggrann, jämför båda metoderna. Ett tätt träd kan använda mer material än ett enkelt rätlinjigt stöd om överhänget är brett och platt.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Trädstöd',
          description: 'Bäst för organisk geometri, glesa kontaktområden och modeller där åtkomst för borttagning har betydelse.',
          highlight: true,
          points: ['Lägre materialbehov på isolerade överhäng', 'Renare åtkomst runt böjda former', 'Känsligt för grenvinkel och stammens styvhet'],
        },
        {
          title: 'Vanliga stöd',
          description: 'Bäst för breda platta överhäng, förutsägbara gränssnitt och enkla mekaniska ytor.',
          points: ['Enhetlig undersida täckning', 'Ofta enklare att resonera om', 'Kan använda mycket mer filament under komplexa modeller'],
        },
      ],
    },
    {
      type: 'card',
      title: 'Använd båda stödtyperna när modellen kräver det',
      html: 'Många skärmotorer tillåter målning av stöd, blockering eller modifieringsnät. En modell kan använda trädstöd för organiska detaljer och vanliga stöd för en plan ingenjörsyta.',
    },
  ],
  faq: [
    {
      question: 'Vad är en bra grenvinkel för trädstöd?',
      answer: 'Ett praktiskt startintervall är omkring 40-50 grader. Använd lägre vinklar för höga stöd endast när du behöver mer räckvidd och stammen är tillräckligt stark.',
    },
    {
      question: 'Förbättrar högre trädstödsdensitet alltid utskriftskvaliteten?',
      answer: 'Nej. Högre densitet förbättrar kontaktäckning och stabilitet, men det ökar också filament, utskriftstid och stödärr. Använd den lägsta densitet som stöder överhänget pålitligt.',
    },
    {
      question: 'Hur ska jag välja basstam diameter?',
      answer: 'Öka basstam diameter i takt med stödpunktshöjden. Höga stöd behöver en starkare lastväg, medan korta stöd ofta kan använda en mindre stam för att spara material.',
    },
    {
      question: 'Varför är kronans diameter viktig?',
      answer: 'Kronans diameter förutsäger hur bred den övre grenkronen blir. En bred krona kan stödja väl, men den kan kollidera med detaljer, fastna i hålrum eller bli svår att ta bort.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Ange stödpunktshöjd', text: 'Använd det vertikala avståndet från byggplattan till modellens område som behöver stöd.' },
    { name: 'Ställ in grenvinkel och densitet', text: 'Välj de planerade skärmotorns grenvinkel och gren densitetsvärden.' },
    { name: 'Lägg till basstam diameter', text: 'Ange den ungefärliga huvudträdsskolonnens diameter som används av skärmotorn.' },
    { name: 'Granska stabilitet och volym', text: 'Jämför stabilitetspoäng, kronans diameter och uppskattad stödvolym före skärning.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Trädstöd Densitet Kalkylator',
      description: 'Optimera 3D-utskrift trädstödsdensitet, grenvinkel, basstam diameter, kronans diameter, stödvolym och stabilitet.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Vad är en bra grenvinkel för trädstöd?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ett praktiskt startintervall är omkring 40-50 grader, med lägre vinklar för höga stöd och bredare vinklar endast när extra räckvidd behövs.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Hur man justerar trädstödets densitet för en 3D-utskrift',
      step: [
        { '@type': 'HowToStep', text: 'Ange stödpunktens höjd.' },
        { '@type': 'HowToStep', text: 'Ställ in grenvinkel, gren densitet och basstam diameter.' },
        { '@type': 'HowToStep', text: 'Granska kronans diameter, stödvolym och stabilitetspoäng.' },
        { '@type': 'HowToStep', text: 'Tillämpa värdena i skärförhandsvisning och justera kontaktinställningar.' },
      ],
    },
  ],
};