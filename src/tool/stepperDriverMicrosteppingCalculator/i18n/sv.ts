import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { StepperDriverMicrosteppingCalculatorUI } from '../ui';

export const content: ToolLocaleContent<StepperDriverMicrosteppingCalculatorUI> = {
  slug: 'stegmotor-mikrostegnings-kalkylator-3d-skrivare',
  title: 'Kalkylator för Steg per mm och Mikrostepping för Stegmotorer',
  description: 'Beräkna exakta steg per mm (eller steg per tum) och teoretisk mekanisk upplösning för stegmotorer i 3D-skrivare. Stöder TMC2209, TMC2208, remmar och ledarskruvar.',
  ui: {
    title: 'Stegmotor Mikrostepping Kalkylator',
    presetsLabel: 'FÖRINSTÄLLNINGAR',
    presetBelt16: 'GT2 rem & 16T remskiva (X/Y)',
    presetBelt20: 'GT2 rem & 20T remskiva (X/Y)',
    presetZLead8: 'T8 ledarskruv stigning 8mm (Z)',
    presetZLead2: 'T8 ledarskruv stigning 2mm (Z)',
    unitSystemLabel: 'Enhetssystem',
    metricLabel: 'Metriskt',
    imperialLabel: 'Imperial',
    configLabel: 'MOTOR- OCH DRIVERKONFIGURATION',
    motorStepAngleLabel: 'Stegvinkel för Motor',
    driverMicrosteppingLabel: 'Driver Mikrostepping',
    transmissionModeLabel: 'Överföringstyp',
    transmissionBelt: 'Remdrift',
    transmissionLeadScrew: 'Ledarskruv / Gängad Stång',
    beltPitchLabel: 'Remdelning',
    pulleyTeethLabel: 'Remskivans Tänder',
    leadScrewPitchLabel: 'Stigning för Ledarskruv (Avstånd per Varv)',
    resultsLabel: 'BERÄKNADE RESULTAT',
    stepsPerUnitLabel: 'Firmware-konfiguration (Steg)',
    mechanicalResolutionLabel: 'Teoretisk Upplösning',
    stepsPerUnitUnitMetric: 'steg/mm',
    stepsPerUnitUnitImperial: 'steg/tum',
    mechanicalResolutionUnitMetric: 'mikron/steg',
    mechanicalResolutionUnitImperial: 'tusendelar/steg',
    formulaLabel: 'MATEMATISKA FORMLER',
    formulaStepsPerRevolution: 'Steg/Varv = 360 / Stegvinkel',
    formulaMicrostepsPerRev: 'Mikrosteg/Varv = Steg/Varv * Mikrosteg',
    formulaDistancePerRev: 'Sträcka/Varv = Tänder * Delning (eller Stigning)',
    formulaStepsPerUnit: 'Steg/Enhet = Mikrosteg/Varv / Sträcka/Varv',
    formulaResolution: 'Upplösning = Sträcka/Varv / Mikrosteg/Varv',
    explainResolutionLabel: 'Vad betyder detta?',
    explainResolutionText: 'Detta representerar den minsta teoretiska linjära rörelsen som din 3D-skrivares axel kan göra när drivern kommenderar ett enda mikrosteg. Lägre upplösningsvärden indikerar finare mekanisk positioneringsprecision.',
    copyButton: 'Kopiera Firmware-kommando',
    copiedButton: 'Kopierad!',
    stepAngleUnit: '°',
    microstepsUnit: 'x',
    pitchUnitMetric: 'mm',
    pitchUnitImperial: 'in',
    teethUnit: 'tänder',
    stepAngle18: '1,8° (200 steg/varv)',
    stepAngle09: '0,9° (400 steg/varv)',
    stepAngle75: '7,5° (48 steg/varv)',
    stepAngle15: '15° (24 steg/varv)',
    microstep1: '1x (Fullt Steg)',
    microstep2: '2x',
    microstep4: '4x',
    microstep8: '8x',
    microstep16: '16x',
    microstep32: '32x',
    microstep64: '64x',
    microstep128: '128x',
    microstep256: '256x',
  },
  seo: [
    {
      type: 'title',
      text: 'Guide för Kalibrering av Stegmotorer och Konfiguration av Steg per Millimeter i Firmware',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'I konsument- och professionella 3D-skrivare är precisionsrörelse beroende av stegmotorer, stegmotordrivare och linjära transmissionsmekanismer. Stegmotorer roterar inte kontinuerligt; istället delar de en full rotation upp i ett fast antal diskreta steg. För att 3D-skrivarens kontrollkort ska kunna flytta skrivhuvudet eller skrivbordet en exakt sträcka måste firmware veta precis hur många motorsteg (inklusive mikrosteg) som motsvarar en enhet linjärt avstånd (millimeter eller tum). Detta värde kallas steg per millimeter eller steg per tum och är en kritisk inställning som lagras i firmware-konfigurationer som Marlin, Klipper eller RepRapFirmware.',
    },
    {
      type: 'paragraph',
      html: 'Om konfigurationen är även något felaktig, kommer de fysiska rörelserna av 3D-skrivaren inte matcha de digitala instruktionerna från mjukvaran för skivning. Denna missmatchning leder till dimensionella felaktigheter i utskrivna objekt, där delar blir större eller mindre än avsett, hål blir felinriktade och flerdelade sammansättningar passar inte ihop. Att förstå de fysiska komponenterna driveregenskaperna och transmissionsförhållandena gör det möjligt för operatörer att beräkna matematiskt perfekta värden istället för att förlita sig på kalibreringsmetoder med trial-and-error som introducerar mekaniska fel.',
    },
    {
      type: 'title',
      text: 'Jämförelse av Stegmotorers Specifikationer och Mekaniska Egenskaper',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De vanligaste stegmotorerna som används i 3D-utskrift är hybrida stegmotorer i NEMA 17-formfaktorn. Dessa motorer finns typiskt i två stegvinkelvarianter: 1,8 grader per steg och 0,9 grader per steg. En 1,8-graders stegmotor kräver 200 fulla steg för att genomföra en full 360-graders rotation. En 0,9-graders stegmotor kräver 400 fulla steg för samma rotation. Att välja mellan dessa specifikationer påverkar positioneringsnoggrannheten, det maximala vridmomentet och driftljudet från skrivsystemet.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Stegmotor på 1,8 Grader',
          description: 'Standardmotoralternativ för de flesta kommersiella 3D-skrivare. Erbjuder robust vridmoment vid högre hastigheter och är ekonomisk.',
          points: [
            '200 fulla steg per varv',
            'Bättre momenthållning vid hög hastighet',
            'Lägre krav på elektrisk induktans',
            'Tillräcklig upplösning för allmänna FDM-tillämpningar'
          ]
        },
        {
          title: 'Stegmotor på 0,9 Grader',
          description: 'Högre precisionsmotoralternativ som är populärt för finkänsliga skrivare och högtupplösande extrudersystem.',
          points: [
            '400 fulla steg per varv',
            'Dubbel mekanisk upplösning före mikrostegning',
            'Minskade positionsfel och lägre resonansvibrationer',
            'Högre bak-EMK vid höga hastigheter minskar momentgränsen'
          ]
        }
      ],
      columns: 2,
    },
    {
      type: 'paragraph',
      html: 'Medan en 0,9-graders motor erbjuder dubbel fysisk positioneringskapacitet kräver den dubbla mängden stegpulser från moderkortets mikrokontroller för att uppnå samma rotationshastighet. För höghastighetsskrivplattformar som körs på äldre 8-bitars mikrokontroller kan detta mätta bearbetningskön och orsaka hicka i utskriften eller hastighetsbegränsningar. På moderna 32-bitarskontroller är denna begränsning sällan ett problem vilket gör 0,9-graders motorer till en utmärkt uppgradering för X- och Y-axlar där ytfinishen är kritisk.',
    },
    {
      type: 'title',
      text: 'Ordlista för Stegmotor- och Driverterminologi',
      level: 2,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Stegvinkel',
          definition: 'Vinkelrotationen av motoraxeln när en sekvens av fullstegsspolexcitering inträffar, typiskt 1,8 eller 0,9 grader.',
        },
        {
          term: 'Mikrostegning',
          definition: 'En metod som styrs av drivern och delar ett enstaka fullt steg i mindre understeg genom att balansera strömmen mellan motorfaserna, vilket jämnar ut rörelse och minskar vibrationer.',
        },
        {
          term: 'Remdelning',
          definition: 'Avståndet mellan centrum på två intilliggande tänder på en synkron kuggrem, vanligen 2,0 millimeter för GT2-remmar som används i 3D-utskrift.',
        },
        {
          term: 'Stigning för Ledarskruv',
          definition: ' Det linjära avståndet som en mutter färdas längs ledarskruven under en full 360-graders rotation av skruvaxeln.',
        },
        {
          term: 'Hållmoment',
          definition: 'Den maximal mängd vridmoment som motorn kan utöva på en stationär axel när märkström appliceras på spolarna.',
        },
        {
          term: 'Bakåtriktad Elektromotorisk Kraft (Back-EMF)',
          definition: 'Spänning som genereras av rotationen av motorspolarna inuti magnetfältet, som motarbetar matningspänningen och begränsar maximal hastighet och moment.',
        }
      ],
    },
    {
      type: 'title',
      text: 'Beräkning av Steg per Millimeter för Kuggremmar',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'För de horisontella rörelseaxlarna (vanligen X och Y) hos kartesiska, CoreXY- och Delta-3D-skrivare används synkrona kuggremmar för att omvandla rotationsrörelsen från stegmotorn till linjär rörelse. Den mekaniska beräkningen beror helt på remdelningen och antalet tänder på drivremsskivan som är kopplad till motoraxeln. Kuggremmens tandprofil måste matcha remskivans tandprofil för att förhindra glapp och slirning.',
    },
    {
      type: 'table',
      headers: ['Remskivestorlek', 'Remtyp', 'Remdelning', 'Steg/varv (1,8°, 16x)', 'Steg per mm (Metrisk)', 'Steg per Tum (Imperial)'],
      rows: [
        ['16 Tänder', 'GT2', '2,0 mm', '3200', '100,00 steg/mm', '2540,00 steg/in'],
        ['20 Tänder', 'GT2', '2,0 mm', '3200', '80,00 steg/mm', '2032,00 steg/in'],
        ['32 Tänder', 'GT2', '2,0 mm', '3200', '50,00 steg/mm', '1270,00 steg/in'],
        ['20 Tänder', 'GT3', '3,0 mm', '3200', '53,33 steg/mm', '1354,67 steg/in'],
        ['16 Tänder (0,9°)', 'GT2', '2,0 mm', '6400', '200,00 steg/mm', '5080,00 steg/in'],
        ['20 Tänder (0,9°)', 'GT2', '2,0 mm', '6400', '160,00 steg/mm', '4064,00 steg/in']
      ],
    },
    {
      type: 'tip',
      title: 'Praktiskt Designval för Remskiveval',
      html: 'Att välja en 16-tands remskiva istället för en 20-tands remskiva ökar den mekaniska upplösningen med 25 procent och ökar den linjära kraften som utövas på vagnen. Dock tvingar mindre remskivan kuggremmen att böjas runt en snävare radie, vilket kan öka remslitaget över tid och introducera högre vibrationsfrekvenser. För standardbyggen representerar 20-tands remskivor en balanserad kompromiss mellan remmens livslängd och upplösning.',
    },
    {
      type: 'title',
      text: 'Verkligheter med Mikrostegning: Vridmomentförluster och Interpolationslösningen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Många operatörer tror att en ökning av driverns mikrostegningsupplösning till höga värden som 64, 128 eller 256 oändligt möjlighet att öka noggrannheten hos deras 3D-skrivare. Detta är en vanlig missuppfattning. I verkligheten minsker inkrementella vridmomentet mellan mikrosteg dramatiskt i takt med att mikrostegsindelningen ökar. Den elkriska strömmen delas upp i sinus och cosinuskurvor för att placera motoraxeln mellan fysiska poler. Om den yttre friktionen eller belastningen på axeln överstiger det inkrementella momentet för ett mikrosteg kommer motoraxeln inte att röra sig förrän flera mikrostegspulser har ackumulerats.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Teoretisk vs Fysisk Mikrostegnings Vridmomentbegränsning',
      html: 'Vid 16 mikrosteg är det inkrementella vridmomentet per mikrosteg cirka 9,8 procent av motorns hållmoment. Vid 256 mikrosteg sjunker det inkrementella momentet till endast 0,6 procent av hållmomentet. Varje lite mekanisk kärvning, obalans i remspänning eller vagnsfriktion kommer enkelt att förhindra fysisk rörelse av 1/256 av ett steg, vilket innebär att hög inbyggd mikrostegning inte garanterar verklig positioneringsnoggrannhet.',
    },
    {
      type: 'card',
      title: 'Interpolationsfunktion för Trinamic drivere',
      html: 'Moderna stegmotorsdrivere som TMC2208, TMC2209 och TMC5160 löser detta problem genom att ta emot stegkommandon med en tillförlitlig upplösning på 16 mikrosteg och internt interpolera dessa steg till 256 mikrosteg innan spolströmförändringarna genomförs. Detta ger den mjuka, tysta driften av 256 mikrosteg samtidigt som det bibehåller det tillförlitliga hållmomentet och minskad processorbelastning hos kontrollern för 16 mikrosteg konfiguration. Håll din konfiguration på 16 mikrosteg i firmware och låt drivern hantera den interna interpoleringen.',
    },
    {
      type: 'title',
      text: 'Beräkning av Steg per Millimeter för Ledarskruvar och Gängade Stänger för Z-axeln',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Den vertikala Z-axeln för de flesta bords 3D-skrivare använder ledarskruvar eller gängade stänger. Ledarskruvar är utformade för kraftöverföring och har precisionsslipade gängprofiler som minimerar glappt. Vid bering av steg per mm för en ledarskruv får gängstigningen inte förväxlas med stigningen. Stigningen är det faktiska linjära avståndet som muttern färdas längs ledarskruven under en full 360-graders rotation av skruven. Stigningen beräknas genom att multiplicera gängstigningen med antalet gängstarter.',
    },
    {
      type: 'list',
      items: [
        'Enstartad ledarskruv: Gängstigning är 2 mm, antal starter är 1. Stigningen är 2 mm per varv.',
        'Tvåstartad ledarskruv: Gängstigning är 2 mm, antal starter är 2. Stigningen är 4 mm per varv.',
        'Fyrstarad ledarskruv (vanlig T8x8): Gängstigning är 2 mm, antal starter är 4. Stigningen är 8 mm per varv.',
        'Standard metriska gängade stänger (t.ex. M8): Enstartad. Stigningen är lika med standard metrisk gängstigning, vilken är 1,25 mm per varv.'
      ],
    },
    {
      type: 'paragraph',
      html: 'Eftersom ledarskruvar har en mekanisk fördel jämfört med remsystem, uppnår de mycket högre steg per mm-värden vilket indikerar mindre mekaniska upplösningsvärden. Denna höga upplösning är kritisk för Z-axlar eftersom lager typiskt skrivs ut i steg mellan 0,1 mm och 0,3 mm. Ett högre steg per mm-värde gör det möjligt för skrivaren att etablera konsekventa lagerhöjder utan positionsfel.',
    },
    {
      type: 'title',
      text: 'Sammanfattning av Viktiga Steg för Driver och Integrging av Motor',
      level: 2,
    },
    {
      type: 'summary',
      title: 'Handlingssteg för att Konfigurera Din Skrivares Firmware',
      items: [
        'Identifiera motorns stegvinkel från tillverkarens datablad (vanligtvis 1,8 eller 0,9 grader).',
        'Bestäm driverns mikrostegsinställningar som konfigurerats via fysiska byglar eller mjukvarustyrda UART-kommandon (16 rekommenderas).',
        'Mät eller slå upp remdelningen och räkna remskivans tänder för remaxlarna.',
        'Verifiera ledarskruvens stigning (gängstigning gånger antal starter) för Z-axeln.',
        'Mät in dessa parametrar i vår kalkylator för att få det exakta konfigurationsvärdet i steg/mm eller steg/tum.',
        'Skriv de beräknade värdena till din firmwares konfigurationsfiler eller spara dem med terminalkommandon som M92.'
      ],
    },
  ],
  faq: [
    {
      question: 'Varför skiljer sig mina beräknade steg/mm från mitt manuella kalibreringsresultat?',
      answer: 'Beräknade steg/mm är matematiskt exakta baserade på fysisk komponentgeometri. Om manuell kalibrering föreslår ett annat värde är det vanligen för att användaren mätte filamentet eller axelförflyttningen med ett skjutmått samtidigt som mekaniskt glapp, remsträckning eller glidning i extrudern introducerade fel. Du bör alltid använda det matematiskt beräknade värdet för rörelseaxlarna och istället åtgärda de underliggande mekaniska problemen.',
    },
    {
      question: 'Vad händer om jag ställer mikrostegsinställningen för högt i firmware?',
      answer: 'Att ställa in mikrostegningen till 64, 128 eller 256 i firmware ökar puls frekvensbehovet på ditt kontrollkort. Om moderkortet inte kan generera stegpulser tillräckligt snabbt kan skrivaren frysa, hicka eller begränsa den maximala rörelsehastigheten. Det är bäst att använda 16 mikrosteg i firmware med driverns interpolering aktiverad.',
    },
    {
      question: 'Hur ändrar jag inställningarna för steg per mm på min 3D-skrivare?',
      answer: 'Du kan du ändra värdena temporärt genom att använda kommandot M92 följt av axelbokstaven och värdet (t.ex. M92 X80.00 Y80.00 Z400.00). För att göra dessa värden permanenta, skicka kommandot M500 för att spara dem i EEPROM, eller redigera filen Configuration.h i Marlin firmware och flasha om, eller redigera filen printer.cfg i Klipper.',
    },
    {
      question: 'Vad är skillnaden mellan remdelning och remskivetänder?',
      answer: 'Remdelning är avståndet mellan två konsekutiva tänder på remmen, mätt från centrum till centrum. Remskivetänder är det totala antalet fysiska tänder på kugghjulet som är fäst på motoraxn. Multiplicering av tandantalet med delningen ger det totala linjära avståndet per motorrevolution.',
    },
    {
      question: 'Kan jag använda olika mikrostegningsvärden för olika axlar?',
      answer: 'Ja, du kan konfigurera olika mikrostegningsvärden för X-, Y-, Z- och E-axlar. Till exempel är det mycket vanligt att köra X och Y på 16 mikrosteg, Z på 16 mikrosteg och extrudern på 16 eller 32 mikrosteg beroende på utväxlingsförhållandet i extruderenheten.',
    }
  ],
  bibliography,
  howTo: [
    {
      name: 'Bestäm Motor- och Driverspecifikationer',
      text: 'Hitta din motors stegvinkel (vanligtvis 1,8 eller 0,9 grader) och driverns mikrostegningsvärde (16 är standard).',
    },
    {
      name: 'Bestäm Transmissionsdata',
      text: 'Välj mellan remdrift (ange remdelning och remskivans tänder) och ledarskruv (ange skruvens stigning).',
    },
    {
      name: 'Konfigurera Firmware-inställningar',
      text: 'Mät in värdena, välj önskat enhetssystem och kopiera det genererade stegkonfigurationskommandot till din skrivares konfiguration.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Varför skiljer sig mina beräknade steg/mm från mitt manuella kalibreringsresultat?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Beräknade steg/mm är matematiskt exakta baserade på fysisk komponentgeometri. Manuell kalibrering introducerar ofta fel på grund av remspänning eller filamentkompression.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Stegmotor Mikrostepping Kalkylator',
      description: 'Beräkna konfigurationsvärden för steg och fysiska upplösningsgränser för 3D-skrivarmotorer och drivere.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Hur man beräknar steg per mm för en stegmotor',
      step: [
        {
          '@type': 'HowToStep',
          text: 'Bestäm Motor- och Driverspecifikationer',
        },
        {
          '@type': 'HowToStep',
          text: 'Bestäm Transmissionsdata',
        },
        {
          '@type': 'HowToStep',
          text: 'Konfigurera Firmware-inställningar',
        },
      ],
    },
  ],
};