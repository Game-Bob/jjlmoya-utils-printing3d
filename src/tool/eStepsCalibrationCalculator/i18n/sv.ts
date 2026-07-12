import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { EStepsCalibrationCalculatorUI } from '../ui';

export const content: ToolLocaleContent<EStepsCalibrationCalculatorUI> = {
  slug: 'e-steps-kalibreringskalkylator',
  title: 'E steps kalibreringskalkylator och extruderdiagnosassistent',
  description: 'Beräkna korrigerade extruder E-steps från ett uppmätt extrusionstest och flagga avvikelser över 5% innan de döljer ett mekaniskt problem.',
  ui: {
    unitSystemLabel: 'Enheter',
    metricLabel: 'Metriskt',
    imperialLabel: 'US',
    inputGroupLabel: 'Extrusionstest',
    currentEStepsLabel: 'Nuvarande E-steps',
    requestedLengthLabel: 'Begärd extrusionslängd',
    actualLengthLabel: 'Uppmätt extrusionslängd',
    newEStepsLabel: 'Nya E-steps',
    errorLabel: 'Upptäckt fel',
    commandLabel: 'Konsolkommando',
    copyCommandLabel: 'Kopiera M92-kommando',
    copiedLabel: 'Kopierat',
    normalStatusLabel: 'Kalibreringsområde',
    criticalStatusLabel: 'Kritisk avvikelse',
    normalMessage: 'Den uppmätta avvikelsen är inom 5%. Applicera värdet först efter att ha bekräftat att filamentbanan är ren och upprepa testet en gång.',
    criticalMessage: 'Kritisk varning: Avvikelsen är över 5%. Ett mekaniskt fel är troligt: blockering, extruderslirning eller felaktig fjäderspänning på idler. Inspektera hårdvaran innan du applicerar dessa nya E-steps.',
    diagnosticTitle: 'Mekaniska kontroller innan du sparar firmware',
    diagnosticOne: 'Värm munstycket till den verkliga utskriftstemperaturen och extrudera långsamt med hotend fri.',
    diagnosticTwo: 'Kontrollera drivhjulet, idlerspänning, filamentbettmärken och spoolmotstånd innan du litar på siffran.',
    diagnosticThree: 'Upprepa 100 mm-testet efter rengöring eller spänningsändringar; justera inte firmware runt en slirande extruder.',
    referenceTitle: 'Beslutsregel',
    formulaLabel: 'Formel',
    formulaText: 'nuvarande E-steps x begärd / uppmätt',
    safeBandLabel: '0-5% fel',
    safeBandText: 'Applicera endast efter ett repeterbart test.',
    criticalBandLabel: '> 5% fel',
    criticalBandText: 'Inspektera blockering, slirning, spänning och motstånd först.',
    repeatTestLabel: 'Efter M92',
    repeatTestText: 'Kör samma extrusionstest igen innan du sparar.',
    mmUnit: 'mm',
    inchUnit: 'tum',
    stepsUnit: 'steg/mm',
    controlsAriaLabel: 'E-steps kalibreringsinmatning',
    resultsAriaLabel: 'E-steps kalibreringsresultat',
  },
  seo: [
    { type: 'title', text: 'Vad E-steps-kalibrering faktiskt mäter', level: 2 },
    {
      type: 'paragraph',
      html: 'E-steps definierar hur många steg stegmotorn firmwaran för extrudern skickar för en millimeter filamentrörelse. I Marlin lagras värdet vanligtvis med <code>M92 E...</code>, medan Klipper ofta uttrycker samma fysiska relation genom rotationsavstånd. Mätningen är enkel: kommandera en känd extrusionslängd, mät fysiskt hur mycket filament som rörde sig, korrigera sedan firmwarevärdet med förhållandet mellan begärd och faktisk rörelse. Formeln är <code>nya E-steps = nuvarande E-steps * begärd längd / faktisk längd</code>.',
    },
    {
      type: 'paragraph',
      html: 'Den farliga delen är tolkningen. En kalkylator kan producera ett tal från vilken mätning som helst, även en dålig. Om extrudern maler filamentet, om munstycket är delvis blockerat eller om idlerfjädern är för lös, kommer den uppmätta extrusionslängden att vara låg. Att höja E-steps kan verka fixa 100 mm-testet, men det fixar inte hårdvaran. Det tvingar motorn att trycka hårdare eller längre genom samma fel, vilket kan göra riktiga utskrifter inkonsekventa.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '100 mm', label: 'vanlig begärd längd för ett repeterbart extrudertest' },
        { value: '5%', label: 'diagnostisk tröskel där hårdvaruinspektion bör komma först' },
        { value: 'M92', label: 'Marlin-kommando som används för att ställa in steg per enhet' },
        { value: '2 decimaler', label: 'utskriftsnoggrannhet som används för det kopierade E-axelkommandot' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Kalibrera inte runt ett mekaniskt fel',
      html: 'En avvikelse över 5% är tillräckligt stor för att skrivaren kan under- eller överextrudera av en anledning som inte är firmwarematematik. Inspektera extruderbanan innan du sparar ett nytt värde med <code>M500</code> eller redigerar en Klipper-konfiguration.',
    },
    { type: 'title', text: 'Hur man utför ett rent 100 mm extrusionstest', level: 2 },
    {
      type: 'paragraph',
      html: 'Ett pålitligt E-steps-test börjar med ett varmt munstycke och en stabil filamentbana. Värm hotenden till en normal utskriftstemperatur för filamentet, eftersom kalltextrusionsskydd finns av en anledning och eftersom mottryck från smält plast förändrar belastningen på extrudern. Markera filamentet på ett känt avstånd ovanför extruderinloppet, kommandera en långsam 100 mm-extrusion och mät det återstående avståndet för att bestämma hur mycket filament som faktiskt rörde sig.',
    },
    {
      type: 'list',
      items: [
        'Använd en långsam extrusionsmatningshastighet så att hotenden kan smälta material utan att bygga upp onormalt tryck.',
        'Gör filamentmärket med ett skjutmått eller en fin markör istället för att uppskatta med ögat.',
        'Håll spolen fri att rotera så att spoolmotstånd inte ser ut som ett E-steps-fel.',
        'Utför testet med samma filamentdiameter och materialtyp som du normalt skriver ut.',
        'Upprepa mätningen efter att ha ändrat drivhjulsspänning, munstyckeskick eller hotendtemperatur.',
      ],
    },
    {
      type: 'table',
      headers: ['Uppmätt resultat', 'Fel', 'Första tolkning', 'Bästa nästa åtgärd'],
      rows: [
        ['98 till 102 mm', '0 till 2%', 'Liten normal mätspridning', 'Upprepa en gång och medelvärde om nödvändigt'],
        ['95 till 105 mm', '2 till 5%', 'Firmwarekorrigering kan vara rimlig', 'Kontrollera banan, applicera sedan beräknat värde'],
        ['Under 95 mm', 'Över 5%', 'Troligen slirning, blockering, motstånd eller tryckproblem', 'Inspektera mekanik innan firmware'],
        ['Över 105 mm', 'Över 5%', 'Felaktigt tidigare värde eller mätuppställningsproblem', 'Verifiera enheter och upprepa test'],
      ],
    },
    {
      type: 'tip',
      title: 'Använd en ren variabel',
      html: 'Ändra inte flödeshastighet, extrusionsmultiplikator, pressure advance och E-steps samtidigt. E-steps bör beskriva motor-till-filament-rörelse, medan flöde och extrusionsmultiplikator justerar slicerns materialutmatning för ett specifikt filament och utskriftsprofil.',
    },
    { type: 'title', text: 'Varför 5%-varningen är viktig', level: 2 },
    {
      type: 'paragraph',
      html: 'Ett extrusionsfel på 5% innebär att ett 100 mm-kommando producerade mindre än 95 mm eller mer än 105 mm verklig rörelse. Det är inte ett litet avrundningsproblem. Med ett typiskt 1,75 mm-filament representerar 5 mm saknad matning över ett kort test en synlig materialbrist. I verkliga utskrifter kan det visa sig som svaga väggar, glesa ovanytor, inkonsekventa första lager och dålig dimensionell tillförlitlighet. Än viktigare, under-extrusion i denna skala har ofta en fysisk orsak.',
    },
    {
      type: 'paragraph',
      html: 'Diagnosassistenten flaggar den tröskeln eftersom firmwarekorrigering kan dölja symptom. Om det räfflade hjulet är fyllt med plastdamm kan motorn hoppa endast under snabba rörelser. Om munstycket är delvis blockerat kan ett långsamt test passera efter en stor korrigering men skrivaren kommer fortfarande att misslyckas under höglödesfyllning. Om idlerspänningen är för hög kan filamentet deformeras och fastna nedström; om den är för låg kan det slira. Rätt reparation är mekanisk, inte ett större E-axelnummer.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Friskt kalibreringsfel',
          description: 'Liten avvikelse orsakad av tidigare firmwarevärde, kugghjulsdiametertolerans eller mätbrus.',
          points: ['Vanligtvis inom 5%', 'Repeterbart över två test', 'Inga klick eller filamentdamm', 'Korrigeringen förblir måttlig'],
        },
        {
          title: 'Felorsakat extrusionsfel',
          description: 'Stor avvikelse orsakad av att extrudern inte kan flytta filament som kommenderat.',
          highlight: true,
          points: ['Över 5%', 'Ändras mellan upprepade test', 'Klick, malning eller bettmärken', 'Ofta värre vid högre hastighet'],
        },
      ],
    },
    {
      type: 'summary',
      title: 'Innan du accepterar en kritisk korrigering',
      items: [
        'Inspektera munstycket för partiell blockering och rengör eller byt ut det om extrusionen vågor eller pulserar.',
        'Borsta drivhjulets tänder och ta bort filamentdamm.',
        'Ställ in idlerspänningen så att hjulet greppar utan att platta till filamentet.',
        'Kontrollera spoolmotstånd, Bowdenrörets passform och filamentbanans friktion.',
        'Utför samma mätning igen innan du ändrar firmware.',
      ],
    },
    { type: 'title', text: 'Marlin M92, M500 och Klipper rotationsavstånd', level: 2 },
    {
      type: 'paragraph',
      html: 'På Marlin-liknande firmware ställer <code>M92 E...</code> in extruderns steg per millimeter för den aktuella sessionen. Många skrivare behöver <code>M500</code> efteråt för att spara värdet i EEPROM, annars kan inställningen försvinna efter omstart. Vissa låsta eller leverantörsmodifierade firmwarebyggen kan ignorera EEPROM-sparningar eller kräva att firmwarekällkonfigurationen ändras istället. Verifiera alltid värdet efter omstart med <code>M503</code> om skrivaren stöder det.',
    },
    {
      type: 'paragraph',
      html: 'Klipper använder vanligtvis <code>rotation_distance</code> istället för E-steps i printer.cfg. Den fysiska kalibreringsiden är densamma, men den numeriska riktningen är inverterad eftersom rotationsavstånd beskriver hur mycket filament som rör sig per motorrotation, inte hur många steg som behövs per millimeter. Detta verktyg matar ut ett <code>M92</code>-kommando eftersom det är avsett att vara direkt användbart i Marlin-konsoler och kompatibla firmwaregränssnitt. Klipper-användare kan fortfarande använda det uppmätta felet som en diagnostisk signal innan de omberäknar rotationsavståndet.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'E-steps', definition: 'Antalet motorsteg som firmware skickar för att flytta en millimeter filament på extruderaxeln.' },
        { term: 'M92', definition: 'Ett G-kodkommando som används av Marlin firmware för att ställa in steg per enhet för en eller flera axlar.' },
        { term: 'M500', definition: 'Ett Marlin-kommando som sparar nuvarande inställningar till EEPROM när skrivaren stöder det.' },
        { term: 'Rotationsavstånd', definition: 'Klipper-inställning som representerar filamentförflyttning per full motorrotation.' },
        { term: 'Extrusionsmultiplikator', definition: 'Flödesskalning på slicernivå för en materialprofil, separat från maskinens E-steps.' },
      ],
    },
    {
      type: 'card',
      title: 'Konsolkommandots arbetsflöde',
      html: 'Skicka det kopierade <code>M92 E...</code>-kommandot, upprepa extrusionstestet och spara endast värdet efter att den uppmätta längden är repeterbar. Ett enda bra nummer är svagare bevis än två konsekventa mätningar.',
    },
    { type: 'title', text: 'Mekaniska problem som ser ut som dåliga E-steps', level: 2 },
    {
      type: 'paragraph',
      html: 'Ett delvis blockerat munstycke är den vanligaste fallgropen. Extrudermotorn kan rotera rätt mängd medan trycket byggs upp i hotenden, vilket får drivhjulet att tugga filamentet istället för att mata det. Den uppmätta extrusionslängden blir kort, formeln höjer E-steps och nästa utskrift kan fortfarande under-extrudera eftersom munstycksblockeringen kvarstår. Om extruderat filament vågor kraftigt, pulserar, kommer ut tunt eller ändrar riktning när det lämnar munstycket, rengör hotenden innan kalibrering.',
    },
    {
      type: 'paragraph',
      html: 'Extruderslirning kan komma från motsatta spänningsfel. För lite fjäderkraft låter hjulet snurra mot filamentet. För mycket fjäderkraft kan ovalisera mjukt filament, öka friktionen i ett Bowdenrör eller skapa djupa bettmärken som fastnar vid heat break-ingången. Flexibelt filament är särskilt känsligt. Den diagnostiska tröskeln finns för att få användaren att stanna och inspektera dessa förhållanden innan ett dragproblem omvandlas till ett firmwarenummer.',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Kritiska symptom under testet',
      html: 'Stanna och inspektera hårdvaran om extrudern klickar, filamentdamm uppträder, motorn blir ovanligt varm, extrusionen kommer ut i pulser eller den uppmätta längden ändras med flera millimeter mellan upprepade 100 mm-test.',
    },
    {
      type: 'proscons',
      title: 'Korrigera E steps efter ett stort fel',
      items: [
        { pro: 'Kan återställa exakt filamentmatning när det gamla firmwarevärdet verkligen var felaktigt.', con: 'Kan dölja ett slirande drivhjul eller blockerat munstycke när det används utan inspektion.' },
        { pro: 'Enkelt kommando är lätt att applicera och upprepa.', con: 'Felaktigt sparat värde påverkar varje slicerprofil och varje material.' },
        { pro: 'Användbart efter att ha ändrat extruderns utväxling eller motorhårdvara.', con: 'Inte en ersättning för flödeskalibrering på utskrivna väggar.' },
      ],
    },
    { type: 'title', text: 'E-steps vs flödeskalibrering', level: 2 },
    {
      type: 'paragraph',
      html: 'E-steps-kalibrering tillhör maskinlagret. Den frågar om extrudermekanismen flyttar den begärda längden av råfilament. Flödeskalibrering tillhör utskriftsprofilslagret. Den frågar om ett specifikt filament, temperatur, munstycke, linjebredd och slicerstrategi producerar den avsedda väggtjockleken och ytkvaliteten. Att blanda de två skapar förvirrande profiler: en skrivare kan klara ett 100 mm E-steps-test och ändå behöva en extrusionsmultiplikator på 0,96 för ett PETG-märke.',
    },
    {
      type: 'paragraph',
      html: 'Kalibrera E-steps efter att ha ändrat extruderhårdvara, motorsteg, mikrostegning, utväxling eller drivhjulsdiameter. Kalibrera flöde efter att ha ändrat filamentmärke, färg, munstycksstorlek, temperatur eller slicerlinjebredd. Pressure advance, linear advance och retraction är separata tryckkontrollverktyg och bör justeras efter att baslinjens extrusionsrörelse är pålitlig.',
    },
    {
      type: 'table',
      headers: ['Kalibrering', 'Lager', 'Ändras när', 'Använd inte för att fixa'],
      rows: [
        ['E-steps', 'Firmware eller maskinkonfig', 'Extruderhårdvara eller motorinställningar ändras', 'Fuktigt filament, munstycksblockeringar, slicerflöde'],
        ['Flödesmultiplikator', 'Slicer materialprofil', 'Filamentmärke, färg, munstycke, temperatur ändras', 'Felaktig utväxling eller slirande extruder'],
        ['Pressure advance', 'Firmwaredynamik', 'Extruderbana, hastighet, acceleration, material ändras', 'Statisk under-extrusion'],
        ['Retraction', 'Slicer förflyttningsbeteende', 'Stringing, oozing, förflyttningsartefakter ändras', 'Baslinjefel i matningsavstånd'],
      ],
    },
    {
      type: 'message',
      title: 'Supportteknikers regel',
      html: 'Om ett kalibreringsvärde ändras dramatiskt, anta att mätningen berättar något om maskinen. Inspektera först, beräkna sedan, spara sist.',
    },
    { type: 'title', text: 'Repeterbarhet och mätkvalitet', level: 2 },
    {
      type: 'paragraph',
      html: 'Ett bra E-steps-resultat är repeterbart. Om ett test mäter 94 mm, nästa 99 mm och nästa 96 mm, är medelvärdet mindre viktigt än spridningen. Variabla resultat pekar på dragning, temperatur, tryck eller mätteknik. Innan du sparar ett nytt värde, upprepa extrusionen minst två gånger efter varje mekanisk förändring. De två resultaten bör vara tillräckligt nära för att det nya firmwarenumret inte ska jaga brus.',
    },
    {
      type: 'tip',
      title: 'Mät ovanför extrudern när möjligt',
      html: 'Att markera filament innan det går in i extrudern undviker förvirring från böjt filament som kommer ut ur munstycket. Mät avståndet från en fast referenspunkt till märket före och efter kommandot.',
    },
    {
      type: 'summary',
      title: 'Pålitlig kalibreringssekvens',
      items: [
        'Värm munstycket och rengör gammalt material.',
        'Markera filament med ett precist referensavstånd.',
        'Extrudera 100 mm långsamt och mät faktisk rörelse.',
        'Använd kalkylatorn och inspektera eventuella fel över 5%.',
        'Applicera <code>M92 E...</code>, testa igen och spara endast om repeterbart.',
      ],
    },
  ],
  faq: [
    {
      question: 'Vilken formel använder denna E-steps-kalkylator?',
      answer: 'Den använder nya E-steps = nuvarande E-steps * begärd extrusionslängd / uppmätt extrusionslängd.',
    },
    {
      question: 'Varför varnar verktyget vid fel över 5%?',
      answer: 'En avvikelse över 5% är tillräckligt stor för att tyda på ett mekaniskt problem som extruderslirning, partiell blockering, spoolmotstånd eller felaktig idlerspänning. Inspektera hårdvaran innan du sparar ett nytt firmwarevärde.',
    },
    {
      question: 'Kan jag använda M92-kommandot i Klipper?',
      answer: 'Det kopierade M92-kommandot är avsett för Marlin-kompatibel firmware. Klipper använder vanligtvis rotation_distance, men samma uppmätta fel är fortfarande användbart för att diagnostisera extrudern.',
    },
    {
      question: 'Ska jag spara det nya värdet omedelbart?',
      answer: 'Nej. Applicera det temporärt, upprepa extrusionstestet och spara först efter att den uppmätta rörelsen är repeterbar.',
    },
    {
      question: 'Är E-steps-kalibrering samma sak som flödeskalibrering?',
      answer: 'Nej. E-steps kalibrerar maskinrörelse. Flöde eller extrusionsmultiplikator kalibrerar slicerns materialutmatning för ett specifikt filament och utskriftsprofil.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Ange nuvarande E-steps', text: 'Läs av nuvarande extrudersteg per millimeter från firmware eller skrivarinställningar.' },
    { name: 'Utför ett extrusionstest', text: 'Kommandera en känd längd, normalt 100 mm, med hotenden vid utskriftstemperatur.' },
    { name: 'Mät faktisk rörelse', text: 'Ange den fysiskt uppmätta filamentrörelsen och granska det upptäckta felet.' },
    { name: 'Inspektera om nödvändigt', text: 'Om felet är över 5%, kontrollera hårdvaran innan du applicerar M92-kommandot.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'E-steps kalibreringskalkylator och extruderdiagnosassistent',
      description: 'Beräkna korrigerade 3D-skrivare extruder E-steps och flagga stora avvikelser med mekanisk risk.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Vilken formel använder denna E-steps-kalkylator?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Den använder nya E-steps = nuvarande E-steps * begärd extrusionslängd / uppmätt extrusionslängd.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Hur man kalibrerar 3D-skrivarens extruder E-steps',
      step: [
        { '@type': 'HowToStep', text: 'Ange nuvarande E-steps-värde.' },
        { '@type': 'HowToStep', text: 'Kommandera en känd extrusionslängd, vanligtvis 100 mm.' },
        { '@type': 'HowToStep', text: 'Mät den faktiska filamentrörelsen och beräkna korrigeringen.' },
        { '@type': 'HowToStep', text: 'Inspektera hårdvaran först om det upptäckta felet är över 5%.' },
      ],
    },
  ],
};
