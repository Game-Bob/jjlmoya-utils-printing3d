import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { EStepsCalibrationCalculatorUI } from '../ui';

export const content: ToolLocaleContent<EStepsCalibrationCalculatorUI> = {
  slug: 'e-steps-kalibratie-calculator',
  title: 'E steps Kalibratiecalculator en Extruder Diagnose Assistent',
  description: 'Bereken gecorrigeerde extruder E-steps op basis van een gemeten extrusietest en markeer afwijkingen boven 5% voordat ze een mechanisch probleem verbergen.',
  ui: {
    unitSystemLabel: 'Eenheden',
    metricLabel: 'Metrisch',
    imperialLabel: 'VS',
    inputGroupLabel: 'Extrusietest',
    currentEStepsLabel: 'Huidige E-steps',
    requestedLengthLabel: 'Gevraagde extrusielengte',
    actualLengthLabel: 'Gemeten extrusielengte',
    newEStepsLabel: 'Nieuwe E-steps',
    errorLabel: 'Gedetecteerde fout',
    commandLabel: 'Consolecommando',
    copyCommandLabel: 'Kopieer M92-commando',
    copiedLabel: 'Gekopieerd',
    normalStatusLabel: 'Kalibratiebereik',
    criticalStatusLabel: 'Kritieke afwijking',
    normalMessage: 'De gemeten afwijking ligt binnen 5%. Pas de waarde alleen toe nadat je hebt bevestigd dat het filamentpad schoon is en herhaal de test een keer.',
    criticalMessage: 'Kritieke waarschuwing: De afwijking is meer dan 5%. Een mechanische fout is waarschijnlijk: verstopping, extruderglip of onjuiste spannung van de idlerveer. Inspecteer de hardware voordat je deze nieuwe E-steps toepast.',
    diagnosticTitle: 'Mechanische controles voordat je firmware opslaat',
    diagnosticOne: 'Verwarm het mondstuk tot de werkelijke printtemperatuur en extrudeer langzaam met de hotend vrij.',
    diagnosticTwo: 'Controleer het aandrijfritsel, de idlerspanning, filamentbijtsporen en spoolweerstand voordat je het getal vertrouwt.',
    diagnosticThree: 'Herhaal de 100 mm-test na reiniging of spanningswijzigingen; stem firmware niet af op een slippende extruder.',
    referenceTitle: 'Beslissingsregel',
    formulaLabel: 'Formule',
    formulaText: 'huidige E-steps x gevraagd / gemeten',
    safeBandLabel: '0-5% fout',
    safeBandText: 'Alleen toepassen na een herhaalbare test.',
    criticalBandLabel: '> 5% fout',
    criticalBandText: 'Controleer eerst verstopping, slip, spanning en weerstand.',
    repeatTestLabel: 'Na M92',
    repeatTestText: 'Voer dezelfde extrusietest opnieuw uit voordat je opslaat.',
    mmUnit: 'mm',
    inchUnit: 'in',
    stepsUnit: 'stappen/mm',
    controlsAriaLabel: 'E-steps kalibratie-invoer',
    resultsAriaLabel: 'E-steps kalibratieresultaten',
  },
  seo: [
    { type: 'title', text: 'Wat E-steps-kalibratie werkelijk meet', level: 2 },
    {
      type: 'paragraph',
      html: 'E-steps bepalen hoeveel stappen de stappenmotor-firmware van de extruder verzendt voor één millimeter filamentbeweging. In Marlin wordt de waarde meestal opgeslagen met <code>M92 E...</code>, terwijl Klipper dezelfde fysieke relatie vaak uitdrukt via rotatieafstand. De meting is eenvoudig: geef een bekende extrusielengte op, meet fysiek hoeveel filament er is bewogen en corrigeer vervolgens de firmwarewaarde met de verhouding tussen gevraagde en werkelijke beweging. De formule is <code>nieuwe E-steps = huidige E-steps * gevraagde lengte / werkelijke lengte</code>.',
    },
    {
      type: 'paragraph',
      html: 'Het gevaarlijke deel is de interpretatie. Een calculator kan een getal produceren uit elke meting, inclusief een slechte. Als de extruder filament vermaalt, als het mondstuk gedeeltelijk verstopt is of als de idlerveer te los zit, zal de gemeten extrusielengte laag zijn. Het verhogen van E-steps lijkt de 100 mm-test te verhelpen, maar het verhelpt de hardware niet. Het dwingt de motor om harder of langer door dezelfde fout te duwen, waardoor echte prints inconsistent kunnen worden.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '100 mm', label: 'veelgebruikte gevraagde lengte voor een herhaalbare extrudertest' },
        { value: '5%', label: 'diagnostische drempel waarbij hardware-inspectie eerst moet komen' },
        { value: 'M92', label: 'Marlin-commando gebruikt om stappen per eenheid in te stellen' },
        { value: '2 decimalen', label: 'uitvoernauwkeurigheid gebruikt voor het gekopieerde E-as-commando' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Niet kalibreren rond een mechanische fout',
      html: 'Een afwijking boven 5% is groot genoeg dat de printer mogelijk onder- of overextrudeert om een reden die geen firmware-wiskunde is. Inspecteer het extruderpad voordat je een nieuwe waarde opslaat met <code>M500</code> of een Klipper-configuratie bewerkt.',
    },
    { type: 'title', text: 'Een schone 100 mm-extrusietest uitvoeren', level: 2 },
    {
      type: 'paragraph',
      html: 'Een betrouwbare E-steps-test begint met een heet mondstuk en een stabiel filamentpad. Verhit de hotend tot een normale printtemperatuur voor het filament, omdat koude-extrusiebeveiliging niet voor niets bestaat en omdat de tegendruk van gesmolten plastic de belasting van de extruder verandert. Markeer het filament op een bekende afstand boven de extruderinlaat, geef een langzame 100 mm-extrusie op en meet de resterende afstand om te bepalen hoeveel filament er werkelijk is bewogen.',
    },
    {
      type: 'list',
      items: [
        'Gebruik een langzame extrusiesnelheid zodat de hotend materiaal kan smelten zonder abnormale druk op te bouwen.',
        'Zet de filamentmarkering met een schuifmaat of een fijne stift in plaats van op het oog te schatten.',
        'Houd de spoel vrij draaibaar zodat spoolweerstand niet als een E-steps-fout lijkt.',
        'Voer de test uit met dezelfde filamentdiameter en hetzelfde materiaaltype dat je normaal print.',
        'Herhaal de meting na het wijzigen van de aandrijfritselspanning, mondstukconditie of hotendtemperatuur.',
      ],
    },
    {
      type: 'table',
      headers: ['Gemeten resultaat', 'Fout', 'Eerste interpretatie', 'Beste volgende actie'],
      rows: [
        ['98 tot 102 mm', '0 tot 2%', 'Kleine normale meetspreiding', 'Een keer herhalen en indien nodig middelen'],
        ['95 tot 105 mm', '2 tot 5%', 'Firmwarecorrectie kan redelijk zijn', 'Pad controleren, dan berekende waarde toepassen'],
        ['Onder 95 mm', 'Boven 5%', 'Waarschijnlijk slip, verstopping, weerstand of drukprobleem', 'Mechanica inspecteren vóór firmware'],
        ['Boven 105 mm', 'Boven 5%', 'Eerdere waarde fout of meetopstellingprobleem', 'Eenheden verifiëren en test herhalen'],
      ],
    },
    {
      type: 'tip',
      title: 'Gebruik één schone variabele',
      html: 'Verander niet tegelijkertijd stroomsnelheid, extrusiemultiplier, pressure advance en E-steps. E-steps moeten de motor-naar-filament-beweging beschrijven, terwijl stroom en extrusiemultiplier de materiaaloutput van de slicer aanpassen voor een specifiek filament en printprofiel.',
    },
    { type: 'title', text: 'Waarom de 5%-waarschuwing belangrijk is', level: 2 },
    {
      type: 'paragraph',
      html: 'Een extrusiefout van 5% betekent dat een 100 mm-commando minder dan 95 mm of meer dan 105 mm werkelijke beweging heeft opgeleverd. Dat is geen klein afrondingsprobleem. Bij een typisch 1,75 mm-filament vertegenwoordigt 5 mm ontbrekende aanvoer over een korte test een zichtbaar materiaaltekort. In echte prints kan het zich uiten als zwakke wanden, schaarse bovenvlakken, inconsistente eerste lagen en slechte dimensionale betrouwbaarheid. Belangrijker nog, onder-extrusie op deze schaal heeft vaak een fysieke oorzaak.',
    },
    {
      type: 'paragraph',
      html: 'De diagnoseassistent markeert die drempel omdat firmwarecorrectie symptomen kan verbergen. Als het gekartelde tandwiel vol plasticstof zit, kan de motor alleen overslaan tijdens snelle bewegingen. Als het mondstuk gedeeltelijk verstopt is, kan een langzame test slagen na een grote correctie, maar de printer faalt nog steeds tijdens hogestroomopvulling. Als de idlerspanning te hoog is, kan het filament vervormen en stroomafwaarts vastlopen; als het te laag is, kan het slippen. De juiste reparatie is mechanisch, niet een groter E-as-getal.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Gezonde kalibratiefout',
          description: 'Kleine afwijking veroorzaakt door eerdere firmwarewaarde, tandwieldiametertolerantie of meetruis.',
          points: ['Meestal binnen 5%', 'Herhaalbaar over twee tests', 'Geen klikken of filamentstof', 'Correctie blijft bescheiden'],
        },
        {
          title: 'Foutgestuurde extrusiefout',
          description: 'Grote afwijking doordat de extruder het filament niet kan verplaatsen zoals opgedragen.',
          highlight: true,
          points: ['Boven 5%', 'Verandert tussen herhaalde tests', 'Klikken, malen of bijtsporen', 'Vaak erger bij hogere snelheid'],
        },
      ],
    },
    {
      type: 'summary',
      title: 'Voordat je een kritieke correctie accepteert',
      items: [
        'Inspecteer het mondstuk op gedeeltelijke verstopping en reinig of vervang het als extrusie golft of pulseert.',
        'Borstel de tanden van het aandrijfritsel en verwijder filamentstof.',
        'Stel de idlerspanning zo in dat het tandwiel grip heeft zonder het filament plat te drukken.',
        'Controleer spoolweerstand, Bowdenbuiszitting en wrijving van het filamentpad.',
        'Voer dezelfde meting opnieuw uit voordat je de firmware wijzigt.',
      ],
    },
    { type: 'title', text: 'Marlin M92, M500 en Klipper Rotatieafstand', level: 2 },
    {
      type: 'paragraph',
      html: 'Op Marlin-achtige firmware stelt <code>M92 E...</code> de extruderstappen per millimeter in voor de huidige sessie. Veel printers hebben daarna <code>M500</code> nodig om de waarde in EEPROM op te slaan, anders kan de instelling na een herstart verdwijnen. Sommige vergrendelde of door leveranciers aangepaste firmwarebuilds kunnen EEPROM-opslag negeren of vereisen in plaats daarvan het wijzigen van de firmwarebronconfiguratie. Controleer de waarde altijd na een herstart met <code>M503</code> als de printer dit ondersteunt.',
    },
    {
      type: 'paragraph',
      html: 'Klipper gebruikt doorgaans <code>rotation_distance</code> in plaats van E-steps in printer.cfg. Het fysieke kalibratie-idee is hetzelfde, maar de numerieke richting is omgekeerd omdat rotatieafstand beschrijft hoeveel filament er per motoromwenteling beweegt, niet hoeveel stappen er per millimeter nodig zijn. Deze tool geeft een <code>M92</code>-commando omdat het bedoeld is om direct bruikbaar te zijn in Marlin-consoles en compatibele firmware-interfaces. Klipper-gebruikers kunnen de gemeten fout nog steeds gebruiken als diagnos signaal voordat ze de rotatieafstand herberekenen.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'E-steps', definition: 'Het aantal motorstappen dat firmware verzendt om één millimeter filament op de extruderas te verplaatsen.' },
        { term: 'M92', definition: 'Een G-code-commando dat door Marlin-firmware wordt gebruikt om stappen per eenheid in te stellen voor een of meer assen.' },
        { term: 'M500', definition: 'Een Marlin-commando dat huidige instellingen opslaat in EEPROM wanneer de printer dit ondersteunt.' },
        { term: 'Rotatieafstand', definition: 'Klipper-instelling die de filamentverplaatsing per volledige motoromwenteling weergeeft.' },
        { term: 'Extrusiemultiplier', definition: 'Slicer-niveau stroomschaling voor een materiaalprofiel, gescheiden van machine-E-steps.' },
      ],
    },
    {
      type: 'card',
      title: 'Console commandowerkstroom',
      html: 'Stuur het gekopieerde <code>M92 E...</code>-commando, herhaal de extrusietest en sla de waarde pas op nadat de gemeten lengte herhaalbaar is. Een enkel goed getal is zwakker bewijs dan twee consistente metingen.',
    },
    { type: 'title', text: 'Mechanische problemen die op slechte E-steps lijken', level: 2 },
    {
      type: 'paragraph',
      html: 'Een gedeeltelijk verstopt mondstuk is de meest voorkomende valkuil. De extrudermotor kan de juiste hoeveelheid draaien terwijl er druk opbouwt in de hotend, waardoor het aandrijfritsel het filament vermaalt in plaats van het voort te bewegen. De gemeten extrusielengte wordt kort, de formule verhoogt de E-steps en de volgende print kan nog steeds onder-extruderen omdat de mondstukverstopping blijft bestaan. Als geëxtrudeerd filament scherp golft, pulseert, dun uitkomt of van richting verandert bij het verlaten van het mondstuk, reinig dan de hotend voordat je kalibreert.',
    },
    {
      type: 'paragraph',
      html: 'Extruderslip kan ontstaan door tegengestelde spanningsfouten. Te weinig veerkracht laat het tandwiel tegen het filament draaien. Te veel veerkracht kan zacht filament ovaal maken, de wrijving in een Bowdenbuis verhogen of diepe bijtsporen creëren die vastlopen bij de heat break-ingang. Flexibel filament is bijzonder gevoelig. De diagnos drempel bestaat om de gebruiker te laten stoppen en deze omstandigheden te inspecteren voordat een tractieprobleem wordt omgezet in een firmwaregetal.',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Kritieke symptomen tijdens de test',
      html: 'Stop en inspecteer de hardware als de extruder klikt, filamentstof verschijnt, de motor ongewoon heet wordt, extrusie in pulsen uitkomt of de gemeten lengte met meerdere millimeters verandert tussen herhaalde 100 mm-tests.',
    },
    {
      type: 'proscons',
      title: 'E steps corrigeren na een grote fout',
      items: [
        { pro: 'Kan nauwkeurige filamenteaanvoer herstellen wanneer de oude firmwarewaarde werkelijk verkeerd was.', con: 'Kan een slippend aandrijfritsel of verstopt mondstuk verbergen wanneer het zonder inspectie wordt gebruikt.' },
        { pro: 'Eenvoudig commando is gemakkelijk toe te passen en te herhalen.', con: 'Een verkeerd opgeslagen waarde beinvloedt elk slicer-profiel en elk materiaal.' },
        { pro: 'Nuttig na het wijzigen van de extruderoverbrengingsverhouding of motorhardware.', con: 'Geen vervanging voor stroomkalibratie op geprinte wanden.' },
      ],
    },
    { type: 'title', text: 'E-steps versus stroomkalibratie', level: 2 },
    {
      type: 'paragraph',
      html: 'E-steps-kalibratie hoort bij de machinelaag. Het vraagt of het extrudermechanisme de gevraagde lengte ruw filament verplaatst. Stroomkalibratie hoort bij de printprofielleag. Het vraagt of een specifiek filament, temperatuur, mondstuk, lijnbreedte en slicer-strategie de beoogde wanddikte en oppervlaktekwaliteit produceren. Het mengen van beide creëert verwarrende profielen: een printer kan een 100 mm E-steps-test doorstaan en nog steeds een extrusiemultiplier van 0,96 nodig hebben voor een bepaald PETG-merk.',
    },
    {
      type: 'paragraph',
      html: 'Kalibreer E-steps na het wijzigen van extruderhardware, motorstappen, microstepping, overbrengingsverhouding of aandrijfritseldiameter. Kalibreer stroom na het wijzigen van filamentmerk, kleur, mondstukgrootte, temperatuur of slicer-lijnbreedte. Pressure advance, linear advance en retractie zijn aparte drukregelingsinstrumenten en moeten worden afgesteld nadat de basis-extrusiebeweging betrouwbaar is.',
    },
    {
      type: 'table',
      headers: ['Kalibratie', 'Laag', 'Verandert wanneer', 'Niet gebruiken om te corrigeren'],
      rows: [
        ['E-steps', 'Firmware of machineconfig', 'Extruderhardware of motoropstelling verandert', 'Nat filament, mondstukverstoppingen, slicerstroom'],
        ['Stroommultiplier', 'Slicer-materiaalprofiel', 'Filamentmerk, kleur, mondstuk, temperatuur verandert', 'Verkeerde overbrenging of slippende extruder'],
        ['Pressure advance', 'Firmwaredynamiek', 'Extruderpad, snelheid, acceleratie, materiaal verandert', 'Statische onder-extrusie'],
        ['Retractie', 'Slicer-verplaatsingsgedrag', 'Stringing, oozing, verplaatsingsartefacten veranderen', 'Basisafstandsfouten bij aanvoer'],
      ],
    },
    {
      type: 'message',
      title: 'Supporttechnicusregel',
      html: 'Als een kalibratiewaarde dramatisch verandert, neem dan aan dat de meting je iets over de machine vertelt. Eerst inspecteren, dan berekenen, als laatste opslaan.',
    },
    { type: 'title', text: 'Herhaalbaarheid en meetkwaliteit', level: 2 },
    {
      type: 'paragraph',
      html: 'Een goed E-steps-resultaat is herhaalbaar. Als de ene test 94 mm meet, de volgende 99 mm en de volgende 96 mm, is het gemiddelde minder belangrijk dan de spreiding. Variabele resultaten wijzen op tractie, temperatuur, druk of meettechniek. Voordat je een nieuwe waarde opslaat, herhaal je de extrusie minstens twee keer na elke mechanische wijziging. De twee resultaten moeten dicht genoeg bij elkaar liggen zodat het nieuwe firmwaregetal geen ruis achterna zit.',
    },
    {
      type: 'tip',
      title: 'Meet waar mogelijk boven de extruder',
      html: 'Het markeren van filament voordat het de extruder binnengaat, voorkomt verwarring door gebogen filament dat uit het mondstuk komt. Meet de afstand van een vast referentiepunt tot de markering voor en na het commando.',
    },
    {
      type: 'summary',
      title: 'Betrouwbare kalibratievolgorde',
      items: [
        'Verwarm het mondstuk en verwijder oud materiaal.',
        'Markeer filament met een precieze referentieafstand.',
        'Extrudeer 100 mm langzaam en meet de werkelijke beweging.',
        'Gebruik de calculator en inspecteer fouten boven 5%.',
        'Pas <code>M92 E...</code> toe, test opnieuw en sla alleen op als het herhaalbaar is.',
      ],
    },
  ],
  faq: [
    {
      question: 'Welke formule gebruikt deze E-steps-calculator?',
      answer: 'Het gebruikt nieuwe E-steps = huidige E-steps * gevraagde extrusielengte / gemeten extrusielengte.',
    },
    {
      question: 'Waarom waarschuwt de tool bij fouten boven 5%?',
      answer: 'Een afwijking boven 5% is groot genoeg om te wijzen op een mechanisch probleem zoals extruderslip, gedeeltelijke verstopping, spoolweerstand of onjuiste idlerspanning. Inspecteer de hardware voordat je een nieuwe firmwarewaarde opslaat.',
    },
    {
      question: 'Kan ik het M92-commando in Klipper gebruiken?',
      answer: 'Het gekopieerde M92-commando is bedoeld voor Marlin-compatibele firmware. Klipper gebruikt meestal rotation_distance, maar dezelfde gemeten fout is nog steeds nuttig voor het diagnosticeren van de extruder.',
    },
    {
      question: 'Moet ik de nieuwe waarde onmiddellijk opslaan?',
      answer: 'Nee. Pas het tijdelijk toe, herhaal de extrusietest en sla alleen op nadat de gemeten beweging herhaalbaar is.',
    },
    {
      question: 'Is E-steps-kalibratie hetzelfde als stroomkalibratie?',
      answer: 'Nee. E-steps kalibreren machinebeweging. Stroom of extrusiemultiplier kalibreert de materiaaloutput van de slicer voor een specifiek filament en printprofiel.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Voer huidige E-steps in', text: 'Lees de huidige extruderstappen per millimeter uit firmware of printerinstellingen.' },
    { name: 'Voer een extrusietest uit', text: 'Geef een bekende lengte op, normaal 100 mm, met de hotend op printtemperatuur.' },
    { name: 'Meet werkelijke beweging', text: 'Voer de fysiek gemeten filamentbeweging in en bekijk de gedetecteerde fout.' },
    { name: 'Inspecteer indien nodig', text: 'Als de fout boven 5% is, controleer dan de hardware voordat je het M92-commando toepast.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'E-steps Kalibratiecalculator en Extruder Diagnose Assistent',
      description: 'Bereken gecorrigeerde 3D-printer extruder E-steps en markeer grote mechanische risicoafwijkingen.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Welke formule gebruikt deze E-steps-calculator?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Het gebruikt nieuwe E-steps = huidige E-steps * gevraagde extrusielengte / gemeten extrusielengte.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Hoe kalibreer je 3D-printer extruder E-steps',
      step: [
        { '@type': 'HowToStep', text: 'Voer de huidige E-steps-waarde in.' },
        { '@type': 'HowToStep', text: 'Geef een bekende extrusielengte op, meestal 100 mm.' },
        { '@type': 'HowToStep', text: 'Meet de werkelijke filamentbeweging en bereken de correctie.' },
        { '@type': 'HowToStep', text: 'Inspecteer eerst de hardware als de gedetecteerde fout boven 5% is.' },
      ],
    },
  ],
};
