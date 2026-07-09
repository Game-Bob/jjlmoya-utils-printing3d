import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { StepperDriverMicrosteppingCalculatorUI } from '../ui';

export const content: ToolLocaleContent<StepperDriverMicrosteppingCalculatorUI> = {
  slug: 'stappenmotor-microstepping-calculator-3d-printer',
  title: 'Stappenmotor Stappen per mm en Microstepping Calculator',
  description: 'Bereken de exacte stappen per mm (of stappen per inch) en de theoretische mechanische resolutie voor stappenmotoren van 3D-printers. Ondersteunt TMC2209, TMC2208, riemen en loodschroeven.',
  ui: {
    title: 'Stappenmotor Microstepping Calculator',
    presetsLabel: 'VOORINSTELLINGEN',
    presetBelt16: 'GT2 riem & 16T poelie (X/Y)',
    presetBelt20: 'GT2 riem & 20T poelie (X/Y)',
    presetZLead8: 'T8 loodschroef 8mm spoed (Z)',
    presetZLead2: 'T8 loodschroef 2mm spoed (Z)',
    unitSystemLabel: 'Eenheidssysteem',
    metricLabel: 'Metrisch',
    imperialLabel: 'Imperiaal',
    configLabel: 'MOTOR- EN DRIVERCONFIGURATIE',
    motorStepAngleLabel: 'Staphoek motor',
    driverMicrosteppingLabel: 'Driver Microstepping',
    transmissionModeLabel: 'Transmissietype',
    transmissionBelt: 'Riemoverbrenging',
    transmissionLeadScrew: 'Loodschroef / Draadstang',
    beltPitchLabel: 'Riemsteek',
    pulleyTeethLabel: 'Poelietanden',
    leadScrewPitchLabel: 'Loodschroefspoed (Afstand per Omw)',
    resultsLabel: 'BEREKENDE UITVOER',
    stepsPerUnitLabel: 'Firmware Configuratie (Stappen)',
    mechanicalResolutionLabel: 'Theoretische Resolutie',
    stepsPerUnitUnitMetric: 'stappen/mm',
    stepsPerUnitUnitImperial: 'stappen/inch',
    mechanicalResolutionUnitMetric: 'micrometers/stap',
    mechanicalResolutionUnitImperial: 'duizendsten/stap',
    formulaLabel: 'WISKUNDIGE FORMULES',
    formulaStepsPerRevolution: 'Stappen/Omw = 360 / Staphoek',
    formulaMicrostepsPerRev: 'Microstappen/Omw = Stappen/Omw * Microstappen',
    formulaDistancePerRev: 'Afstand/Omw = Tanden * Steek (of Loodschroefspoed)',
    formulaStepsPerUnit: 'Stappen/Eenheid = Microstappen/Omw / Afstand/Omw',
    formulaResolution: 'Resolutie = Afstand/Omw / Microstappen/Omw',
    explainResolutionLabel: 'Wat betekent dit?',
    explainResolutionText: 'Dit vertegenwoordigt de kleinste theoretische lineaire beweging die je 3D-printeras kan maken wanneer de driver een enkele microstap beveelt. Lagere resolutiewaarden duiden op een fijnere mechanische positioneringsprecisie.',
    copyButton: 'Kopieer Firmware Commando',
    copiedButton: 'Gekopieerd!',
    stepAngleUnit: '°',
    microstepsUnit: 'x',
    pitchUnitMetric: 'mm',
    pitchUnitImperial: 'in',
    teethUnit: 'tanden',
    stepAngle18: '1,8° (200 stappen/omw)',
    stepAngle09: '0,9° (400 stappen/omw)',
    stepAngle75: '7,5° (48 stappen/omw)',
    stepAngle15: '15° (24 stappen/omw)',
    microstep1: '1x (Volle Stap)',
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
      text: 'Stappenmotor Kalibratie en Firmware Stappen per Millimeter Configuratie Gids',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bij consumenten- en professionele 3D-printers vertrouwt precisiebeweging op stappenmotoren, stappenmotor-drivers en lineaire transmissiemechanismen. Stappenmotoren draaien niet continu; ze verdelen een volledige rotatie in een vast aantal discrete stappen. Om de controllerkaart van de 3D-printer de printkop of het printbed over een exacte afstand te laten verplaatsen, moet de firmware precies weten hoeveel motorstappen (inclusief microstappen) overeenkomen met één eenheid lineaire afstand (millimeter of inch). Deze waarde staat bekend als de stappen per millimeter of stappen per inch en is een kritieke instelling die is opgeslagen in firmwareconfiguraties zoals Marlin, Klipper of RepRapFirmware.',
    },
    {
      type: 'paragraph',
      html: 'Als deze configuratie zelfs maar gering afwijkt, komen de fysieke bewegingen van de 3D-printer niet overeen met de digitale instructies die door de slicersoftware zijn gegenereerd. Deze discrepantie leidt tot maatonnauwkeurigheid in geprinte objecten, waarbij onderdelen groter of kleiner uitvallen dan bedoeld, de gaten niet uitgelijnd zijn en meerledige samenstellingen niet in elkaar passen. Het begrijpen van de fysieke componenten, drivereigenschappen en transmissieverhoudingen stelt gebruikers in staat om mathematisch perfecte waarden te berekenen in plaats van te vertrouwen op trial-and-error kalibratiemethoden die mechanische fouten introduceren.',
    },
    {
      type: 'title',
      text: 'Vergelijking van Stappenmotorspecificaties en Mechanische Kenmerken',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De meest gebruikte stappenmotoren in 3D-printen zijn hybride stappenmotoren in het NEMA 17-formaat. Deze motoren zijn er typisch in twee staphoekvariaties: 1,8 graden per stap en 0,9 graden per stap. Een 1,8-graden stappenmotor heeft 200 volle stappen nodig om een volledige 360-graden rotatie te voltooien. Een 0,9-graden stappenmotor heeft 400 volle stappen nodig voor dezelfde rotatie. De keuze tussen deze specificaties beïnvloedt de positioneringsnauwkeurigheid, het maximale koppel en het operationele geluid van het printsysteem.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: '1,8 Graden Stappenmotor',
          description: 'Standaard motoroptie voor de meeste commerciële 3D-printers. Biedt robuust koppel bij hogere snelheden en is zuinig.',
          points: [
            '200 volle stappen per omwenteling',
            'Betere koppelbehoud bij hoge snelheid',
            'Lagere vereisten voor elektrische inductie',
            'Voldoende resolutie voor algemene FDM-toepassingen'
          ]
        },
        {
          title: '0,9 Graden Stappenmotor',
          description: 'Hoogprecisie motoroptie, populair voor printers met fijne details en hoge resolutie extrudersystemen.',
          points: [
            '400 volle stappen per omwenteling',
            'Dubbele mechanische resolutie vóór microstepping',
            'Verminderde positioneringsfout en lagere resonantietrillingen',
            'Hogere tegen-EMK bij hoge snelheden verlaagt de koppelgrens'
          ]
        }
      ],
      columns: 2,
    },
    {
      type: 'paragraph',
      html: 'Hoewel een 0,9-graden motor de dubbele fysieke positioneringscapaciteit biedt, vraagt het om twee keer zoveel stap impulsen van de microcontroller op het moederbord om dezelfde rotatiesnelheid te bereiken. Bij snelle printplatforms met oudere 8-bit microcontrollers kan dit de verwerkingswachtrij verzadigen en printstotteringen of snelheidsbeperkingen veroorzaken. Bij moderne 32-bit controllers is deze beperking zelden een probleem, waardoor 0,9-graden motoren een uitstekende upgrade zijn voor X- en Y-assen waar de oppervlakteafwerking kritisch is.',
    },
    {
      type: 'title',
      text: 'Verklarende Woordenlijst van Stappenmotor en Driver Terminologie',
      level: 2,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Staphoek',
          definition: 'De hoekverdraaiing van de motoras bij een enkele volle stap spoel excitatievolgorde, typisch 1,8 of 0,9 graden.',
        },
        {
          term: 'Microstepping',
          definition: 'Een door de driver gecontroleerde methode die een volle stap splitst in kleinere substappen door de stroom tussen de motorfasen te balanceren, waardoor de beweging wordt vloeiender gemaakt en trillingen worden verminderd.',
        },
        {
          term: 'Riemsteed',
          definition: 'De afstand tussen de middelpunten van twee aangrenzende tanden op een synchrone tandriem, gebruikelijk 2,0 millimeter voor GT2-riemen gebruikt in 3D-printen.',
        },
        {
          term: 'Loodschroefspoed',
          definition: 'De lineaire afstand die een moer aflegt langs de loodschroef tijdens één volledige 360-graden rotatie van de schroefas.',
        },
        {
          term: 'Koppelbehoud',
          definition: 'De maximale hoeveelheid koppel die de motor kan uitoefenen op een stilstaande as wanneer de nominale stroom op de spoelen wordt toegepast.',
        },
        {
          term: 'Tegen-EMK (Back-EMF)',
          definition: 'De spanning die wordt opgewekt door de rotatie van de motorspoelen in het magnetische veld, die de voedingsspanning tegenwerkt en de maximale snelheid en het maximale koppel beperkt.',
        }
      ],
    },
    {
      type: 'title',
      text: 'Berekenen van Stappen per Millimeter voor Tandriemen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Voor de horizontale bewegingsassen (meestal X en Y van cartesiaanse, CoreXY en Delta 3D-printers worden synchrone tandriemen gebruikt om de rotatiebeweging van de stappenmotor om te zetten in lineaire beweging. De mechanische berekening hangt volledig af van de riemsteed en het aantal tanden van de aandrijfpoelie die aan de motoras is bevestigd. Het tandprofiel van de riem moet overeenkomen met het tandprofiel van de poelie om speling en slip te voorkomen.',
    },
    {
      type: 'table',
      headers: ['Poeliemaat', 'Riemtype', 'Riemsteed', 'Stappen/omw (1,8°, 16x)', 'Stappen per mm (Metrisch)', 'Stappen per inch (Imperiaal)'],
      rows: [
        ['16 tanden', 'GT2', '2,0 mm', '3200', '100,00 stappen/mm', '2540,00 stappen/in'],
        ['20 tanden', 'GT2', '2,0 mm', '3200', '80,00 stappen/mm', '2032,00 stappen/in'],
        ['32 tanden', 'GT2', '2,0 mm', '3200', '50,00 stappen/mm', '1270,00 stappen/in'],
        ['20 tanden', 'GT3', '3,0 mm', '3200', '53,33 stappen/mm', '1354,67 stappen/in'],
        ['16 tanden (0,9°)', 'GT2', '2,0 mm', '6400', '200,00 stappen/mm', '5080,00 stappen/in'],
        ['20 tanden (0,9°)', 'GT2', '2,0 mm', '6400', '160,00 stappen/mm', '4064,00 stappen/in']
      ],
    },
    {
      type: 'tip',
      title: 'Praktische Keuze bij het Selecteren van een Poelie',
      html: 'Het kiezen van een 16-tands poelie in plaats van een 20-tands poelie verhoogt de mechanische resolutie met 25 procent en verhoogt de lineaire kracht die op de wagen wordt uitgeoefend. Kleinere poelies dwingen de tandriem echter om rond een kleinere radius te buigen, wat de riemslijtage na verloop van tijd kan vergroten en hogere trillingsfrequenties kan introduceren. Voor standaard constructies vormen 20-tands poelies een gebalanceerd compromis tussen riemlevensduur en resolutie.',
    },
    {
      type: 'title',
      text: 'Microstepping Realiteiten: Koppelverlies en de Interpolatieoplossing',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Veelgebruikers geloven dat het verhogen van de driver microstepping resolutie naar hoge waarden zoals 64, 128 of 256 de nauwkeurigheid van hun 3D-printer oneindig zal schalen. Dit is een veelvoorkomend misverstand. In werkelijkheid neemt het incrementele koppel tussen microstappen drastisch af naarmate de microstepping verdeling toeneemt. De elektrische stroom wordt verdeeld in sinus- en cosinuscurven om de motoras tussen fysieke polen te positioneren. Als de externe wrijving of belasting op de as het incrementele koppel van een microstap overschrijdt, zal de motoras niet bewegen totdat er verschillende microstap pulsen zijn verzameld.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Theoretische vs Fysieke Microstepping Koppelbeperking',
      html: 'Bij 16 microstappen is het incrementele koppel per microstap ongeveer 9,8 procent van het houdkoppel van de motor. Bij 256 microstappen daalt het incrementele koppel tot slechts 0,6 procent van het houdkoppel. Elke kleine mechanische binding, spanning in de riem of wrijving van de wagen zal fysieke beweging van 1/256e van een stap gemakkelijk verhinderen, wat betekent dat hoge native microstepping geen echte positienauwkeurigheid garandeert.',
    },
    {
      type: 'card',
      title: 'Trinamic Driver Interpolatiefunctie',
      html: 'Moderne stappenmotordrivers zoals de TMC2208, TMC2209 en TMC5160 lossen dit probleem op door stapopdrachten te ontvangen met een betrouwbare 16 microstappen resolutie en die stappen intern te interpoleren naar 256 microstappen voordat de spoelstroomveranderingen worden uitgevoerd. Dit zorgt voor de soepele, stille werking van 256 microstappen met behoud van het betrouwbare houdkoppel en de verminderde verwerkingsoverhead van een 16 microstappen configuratie. Houd in firmware je configuratie op 16 microstappen en laat de driver de interne interpolatie afhandelen.',
    },
    {
      type: 'title',
      text: 'Berekenen van Stappen per Millimeter voor Z-as Loodschroeven en stangen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De verticale Z-as van de meeste desktop 3D-printers gebruikt loodschroeven of draadstangen. Loodschroeven zijn ontworpen voor krachtoverbrenging en hebben precisie geslepen draadprofielen die speling minimaliseren. Bij het berekenen van stappen per mm voor een loodschroef mah de spoed van de schroefdraad niet worden verward met de loodspoed. De loodspoed is de feitelijke lineaire afstand die de moer van de loodschroef aflegt tijdens één volledige 360-graden rotatie van de schroef. De loodspoed wordt berekend door de draadspoed te vermenigvuldigen met het aantal draadstarten.',
    },
    {
      type: 'list',
      items: [
        'Enkelstart loodschroef: Spoed is 2mm, aantal starten is 1. De loodspoed is 2mm per omwenteling.',
        'Tweestart loodschroef: Spoed is 2mm, aantal starten is 2. De loodspoed is 4mm per omwenteling.',
        'Vierstart loodschroef (Gebruikelijk T8x8): Spoed is 2mm, aantal starten is 4. De loodspoed is 8mm per omwenteling.',
        'Standaard metrische draadstangen (bijv. M8): Enkelstart. Loodspoed is gelijk aan standaard metrische spoed, namelijk 1,25 mm per omwenteling.'
      ],
    },
    {
      type: 'paragraph',
      html: 'Omdat loodschroeven een mechanisch voordeel hebben ten opzichte van riemsystemen, bereiken ze veel hogere stappen per mm waarden, wat duidt op kleinere mechanische resolutiewaarden. Deze hoge resolutie is cruciaal voor Z-assen omdat lagen typisch worden geprint met tussenwaarden tussen 0,1 mm en 0,3 mm. Een hogere stappen per mm waarde stelt de printer in staat om consistente laaghoogten in te stellen zonder positioneringsfouten.',
    },
    {
      type: 'title',
      text: 'Samenvatting van Sleutelstappen voor Driver en Motor Integratie',
      level: 2,
    },
    {
      type: 'summary',
      title: 'Uitvoerbare Stappen om Je Printer Firmware te Configureren',
      items: [
        'Identificeer de staphoek van de motor via het gegevensblad van de fabrikant (meestal 1,8 of 0,9 graden).',
        'Bepaal de microstepping instellingen van de driver, geconfigureerd via fysieke jumpers of software UART commando\'s (16 wordt aanbevolen).',
        'Meet of zoek de riemsteed op en tel de poelietanden voor de riemassen.',
        'Controleer de loodspoed van de loodschroef (spoed maal aantal starten) voor de Z-as.',
        'Voer deze parameters in onze calculator in om de exacte stappen/mm of stappen/inch configuratiewaarde te krijgen.',
        'Schrijf de berekende waarden naar je firmware configuratiebestanden of sla ze op met terminalcommando\'s zoals M92.'
      ],
    },
  ],
  faq: [
    {
      question: 'Waarom wijken mijn berekende stappen/mm af van mijn handmatige kalibratieresultaat?',
      answer: 'Berekende stappen/mm zijn wiskundig exact op basis van de fysieke componentgeometrie. Als een handmatige kalibratie een andere waarde suggereert, komt dit meestal doordat de gebruiker het filament of de asverplaatsing mat met een schuifmaat terwijl mechanische speling, riemrek of extruderslip fouten introduceerde. Je moet altijd de wiskundig berekende waarde gebruiken voor bewegingsassen en in plaats daarvan de onderliggende mechanische problemen oplossen.',
    },
    {
      question: 'Wat gebeurt er als ik de microstepping-waarde te hoog instel in de firmware?',
      answer: 'Het instellen van de microstepping op 64, 128 of 256 in de firmware verhoogt de puls frequentievereiste voor je controllerkaart. Als het moederbord niet snel genoeg stap pulsen kan genereren, kan de printer vastlopen, stotteren of de maximale verplaatsingssnelheid beperken. Het is het beste om 16 microstappen in de firmware te gebruiken met driver-niveau interpolatie ingeschakeld.',
    },
    {
      question: 'Hoe verander ik de stappen per mm instellingen op mijn 3D-printer?',
      answer: 'Je kunt de waarden tijdelijk wijzigen met het M92 commando gevolgd door de as letter en de waarde (bijv. M92 X80.00 Y80.00 Z400.00). Om deze waarden permanent te maken, stuur je het M500 commando om ze op te slaan in het EEPROM, of bewerk je het bestand Configuration.h in Marlin firmware en flash je opnieuw, of bewerk je het bestand printer.cfg in Klipper.',
    },
    {
      question: 'Wat is het verschil tussen riemsteed en poelietanden?',
      answer: 'De riemsteed is de afstand tussen twee opeenvolgende tanden op de riem, gemeten van middelpunt tot middelpunt. Poelietanden is het totale aantal fysieke tanden op het tandwiel dat op de motoras is bevestigd. Het vermenigvuldigen van het aantal tanden met de steed geeft de totale lineaire afstand per motoromwenteling.',
    },
    {
      question: 'Kan ik verschillende microstepping waarden gebruiken voor verschillende assen?',
      answer: 'Ja, je kunt verschillende microstepping waarden configureren voor X, Y, Z en E assen. Het is bijvoorbeeld heel gebruikelijk om X en Y op 16 microstappen te laten draaien, Z op 16 microstappen en de extruder op 16 of 32 microstappen, afhankelijk van de overbrengingsverhouding van de extrudersamenstelling.',
    }
  ],
  bibliography,
  howTo: [
    {
      name: 'Bepaal Motor- en Driver Specificaties',
      text: 'Vind je motor staphoek (typisch 1,8 of 0,9 graden) en je driver microstepping waarde (16 is standaard).',
    },
    {
      name: 'Bepaal Transmissiegegevens',
      text: 'Kies tussen riemaandrijving (specificeer riemsteed en poelietanden) en loodschroef (specificeer de loodspoed).',
    },
    {
      name: 'Configureer Firmware Instellingen',
      text: 'Voer de waarden in, selecteer je gewenste eenheidssysteem en kopieer het gegenereerde stappenconfiguratiecommando naar je printerconfiguratie.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Waarom wijken mijn berekende stappen/mm af van mijn handmatige kalibratieresultaat?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Berekende stappen/mm zijn wiskundig exact op basis van fysieke componentgeometrie. Handmatige kalibratie introduceert vaak fouten door riemspanning of filamentcompressie.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Stappenmotor Microstepping Calculator',
      description: 'Bereken stapconfiguratiewaarden en fysieke resolutielimieten voor 3D-printer motoren en drivers.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Hoe bereken je stappen per mm van een stappenmotor',
      step: [
        {
          '@type': 'HowToStep',
          text: 'Bepaal Motor- en Driver Specificaties',
        },
        {
          '@type': 'HowToStep',
          text: 'Bepaal Transmissiegegevens',
        },
        {
          '@type': 'HowToStep',
          text: 'Configureer Firmware Instellingen',
        },
      ],
    },
  ],
};