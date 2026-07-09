import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { StepperDriverMicrosteppingCalculatorUI } from '../ui';

export const content: ToolLocaleContent<StepperDriverMicrosteppingCalculatorUI> = {
  slug: 'schrittmotor-microstepping-rechner-3d-druck',
  title: 'Rechner für Schritte pro mm und Microstepping bei Schrittmotoren',
  description: 'Berechne die exakten Schritte pro mm (oder Schritte pro Zoll) und die theoretische mechanische Auflösung für Schrittmotoren im 3D-Druck. Unterstützt TMC2209, TMC2208, Zahnriemen und Gewindespindeln.',
  ui: {
    title: 'Schrittmotor Microstepping Rechner',
    presetsLabel: 'VOREINSTELLUNGEN',
    presetBelt16: 'GT2-Riemen & Riemenscheibe 16Z (X/Y)',
    presetBelt20: 'GT2-Riemen & Riemenscheibe 20Z (X/Y)',
    presetZLead8: 'T8-Gewindespindel Steigung 8mm (Z)',
    presetZLead2: 'T8-Gewindespindel Steigung 2mm (Z)',
    unitSystemLabel: 'Einheitensystem',
    metricLabel: 'Metrisch',
    imperialLabel: 'Imperial',
    configLabel: 'MOTOR- UND TREIBERKONFIGURATION',
    motorStepAngleLabel: 'Schrittwinkel des Motors',
    driverMicrosteppingLabel: 'Microstepping des Treibers',
    transmissionModeLabel: 'Übertragungsart',
    transmissionBelt: 'Zahnriemenantrieb',
    transmissionLeadScrew: 'Gewindespindel / Gewindestange',
    beltPitchLabel: 'Riemensteigung',
    pulleyTeethLabel: 'Riemenscheibenzähne',
    leadScrewPitchLabel: 'Spindelsteigung (Distanz pro Umdrehung)',
    resultsLabel: 'BERECHNETE ERGEBNISSE',
    stepsPerUnitLabel: 'Firmware-Konfiguration (Schritte)',
    mechanicalResolutionLabel: 'Theoretische Auflösung',
    stepsPerUnitUnitMetric: 'Schritte/mm',
    stepsPerUnitUnitImperial: 'Schritte/Zoll',
    mechanicalResolutionUnitMetric: 'Mikrometer/Schritt',
    mechanicalResolutionUnitImperial: 'Tausendstel/Schritt',
    formulaLabel: 'MATHEMATISCHE FORMELN',
    formulaStepsPerRevolution: 'Schritte/U = 360 / Schrittwinkel',
    formulaMicrostepsPerRev: 'Mikroschritte/U = Schritte/U * Mikroschritte',
    formulaDistancePerRev: 'Strecke/U = Zähne * Steigung (oder Spindelsteigung)',
    formulaStepsPerUnit: 'Schritte/Einheit = Mikroschritte/U / Strecke/U',
    formulaResolution: 'Auflösung = Strecke/U / Mikroschritte/U',
    explainResolutionLabel: 'Was bedeutet das?',
    explainResolutionText: 'Dies ist die kleinste theoretische lineare Bewegung, die die Achse deines 3D-Druckers ausführen kann, wenn der Treiber einen einzigen Mikroschritt befiehlt. Niedrigere Auflösungswerte bedeuten eine feinere mechanische Positioniergenauigkeit.',
    copyButton: 'Firmware-Befehl kopieren',
    copiedButton: 'Kopiert!',
    stepAngleUnit: '°',
    microstepsUnit: 'x',
    pitchUnitMetric: 'mm',
    pitchUnitImperial: 'in',
    teethUnit: 'Zähne',
    stepAngle18: '1,8° (200 Schritte/U)',
    stepAngle09: '0,9° (400 Schritte/U)',
    stepAngle75: '7,5° (48 Schritte/U)',
    stepAngle15: '15° (24 Schritte/U)',
    microstep1: '1x (Vollschritt)',
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
      text: 'Leitfaden zur Schrittmotorkalibrierung und Konfiguration von Schritten pro Millimeter im Firmware',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bei privaten und professionellen 3D-Druckern beruht die Präzisionsbewegung auf Schrittmotoren, Schrittmotortreibern und linearen Übertragungsmechanismen. Schrittmotoren rotieren nicht kontinuierlich, sondern teilen eine vollständige Umdrehung in eine festgelegte Anzahl diskreter Schritte auf. Damit die Steuerplatine des 3D-Druckers den Druckkopf oder das Druckbett exakt um eine bestimmte Strecke bewegen kann, muss die Firmware genau wissen, wie viele Motorschritte (einschließlich Mikroschritte) einer linearen Entfernungseinheit (Millimeter oder Zoll) entsprechen. Dieser Wert wird als Schritte pro Millimeter oder Schritte pro Zoll bezeichnet und ist eine kritische Einstellung, die in Firmware-Konfigurationen wie Marlin, Klipper oder RepRapFirmware gespeichert wird.',
    },
    {
      type: 'paragraph',
      html: 'Wenn diese Konfiguration auch nur geringfügig falsch ist, werden die physikalischen Bewegungen des 3D-Druckers nicht mit den digitalen Anweisungen übereinstimmen, die von der Slicer-Software generiert werden. Diese Abweichung führt zu Maßungenauigkeiten bei gedruckten Objekten: Teile werden größer oder kleiner als beabsichtigt, Löcher sind falsch ausgerichtet und mehrteilige Baugruppen passen nicht zusammen. Das Verständnis der physischen Komponenten, der Treibereigenschaften und der Übersetzungsverhältnisse ermöglicht es den Bedienern, mathematisch perfekte Werte zu berechnen, anstatt sich auf Kalibrierungsmethoden nach dem Prinzip von Versuch und Irrtum zu verlassen, die mechanische Fehler einführen.',
    },
    {
      type: 'title',
      text: 'Vergleich der Schrittmotorspezifikationen und mechanischen Eigenschaften',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die am häufigsten im 3D-Druck verwendeten Schrittmotoren sind Hybrid-Schrittmotoren im NEMA-17-Format. Diese Motoren sind typischerweise in zwei Schrittwinkel-Varianten erhältlich: 1,8 Grad pro Schritt und 0,9 Grad pro Schritt. Ein 1,8-Grad-Schrittmotor benötigt 200 Vollschritte, um eine vollständige 360-Grad-Drehung abzuschließen. Ein 0,9-Grad-Schrittmotor benötigt 400 Vollschritte für die gleiche Drehung. Die Wahl zwischen diesen Spezifikationen beeinflusst die Positioniergenauigkeit, das maximale Drehmoment und die Betriebsgeräusche des Drucksystems.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: '1,8 Grad Schrittmotor',
          description: 'Standardmotor für die meisten kommerziellen 3D-Drucker. Bietet robustes Drehmoment bei höheren Geschwindigkeiten und ist wirtschaftlich.',
          points: [
            '200 Vollschritte pro Umdrehung',
            'Bessere Drehmomentbeibehaltung bei hoher Drehzahl',
            'Niedrigere Anforderungen an die elektrische Induktivität',
            'Ausreichende Auflösung für allgemeine FDM-Anwendungen'
          ]
        },
        {
          title: '0,9 Grad Schrittmotor',
          description: 'Hochpräzise Motoroption, beliebt für feindetailreiche Drucker und hochauflösende Extrudersysteme.',
          points: [
            '400 Vollschritte pro Umdrehung',
            'Doppelte mechanische Auflösung vor dem Microstepping',
            'Verringerte Positionsfehler und niedrigere Resonanzschwingungen',
            'Höhere Gegen-EMK bei hohen Drehzahlen senkt das Drehmomentlimit'
          ]
        }
      ],
      columns: 2,
    },
    {
      type: 'paragraph',
      html: 'Während ein 0,9-Grad-Motor die doppelte physikalische Positionierfähigkeit bietet, benötigt er doppelt so viele Schrittimpulse vom Mikrocontroller der Hauptplatine, um die gleiche Drehzahl zu erreichen. Bei Hochgeschwindigkeits-Druckplattformen mit älteren 8-Bit-Mikrocontrollern kann dies zur Sättigung der Verarbeitungswarteschlange führen und Druckaussetzer oder Geschwindigkeitseinschränkungen verursachen. Bei modernen 32-Bit-Controllern ist diese Einschränkung selten ein Problem, weshalb 0,9-Grad-Motoren eine ausgezeichnete Aufrüstung für die X- und Y-Achsen darstellen, wenn die Oberflächengüte entscheidend ist.',
    },
    {
      type: 'title',
      text: 'Glossar der Schrittmotor- und Treiberterminologie',
      level: 2,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Schrittwinkel',
          definition: 'Die Winkelbewegung der Motorwelle bei einer einzigen Vollschritt-Spulenerregungssequenz, typischerweise 1,8 oder 0,9 Grad.',
        },
        {
          term: 'Microstepping',
          definition: 'Eine vom Treiber gesteuerte Methode, die einen einzelnen Vollschritt durch Ausbalancieren des Stroms zwischen den Motorphasen in kleinere Unterschritte unterteilt, wodurch die Bewegung geglättet und Vibrationen reduziert werden.',
        },
        {
          term: 'Riemensteigung',
          definition: 'Der Abstand zwischen den Mittelpunkten zweier benachbarter Zähne auf einem synchronen Zahnriemen, üblicherweise 2,0 Millimeter bei GT2-Riemen im 3D-Druck.',
        },
        {
          term: 'Spindelsteigung',
          definition: 'Die lineare Strecke, die eine Mutter entlang der Spindel bei einer vollständigen 360-Grad-Drehung der Spindelwelle zurücklegt.',
        },
        {
          term: 'Haltemoment',
          definition: 'Das maximale Drehmoment, das der Motor auf eine stationäre Welle ausüben kann, wenn der Nennstrom an die Spulen angelegt wird.',
        },
        {
          term: 'Gegen-EMK (Back-EMF)',
          definition: 'Die Spannung, die durch die Drehung der Motorspulen im Magnetfeld erzeugt wird und der Versorgungsspannung entgegenwirkt, wodurch die maximale Geschwindigkeit und das maximale Drehmoment begrenzt werden.',
        }
      ],
    },
    {
      type: 'title',
      text: 'Berechnung der Schritte pro Millimeter für Zahnriemen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Für die horizontalen Bewegungsachsen (normalerweise X und Y) von kartesischen, CoreXY- und Delta-3D-Druckern werden synchron Zahnriemen verwendet, um die Drehbewegung des Schrittmotors in eine lineare Bewegung umzuwandeln. Die mechanische Berechnung hängt vollständig von der Riemensteigung und der Anzahl der Zähne der Antriebsriemenscheibe auf der Motorwelle ab. Das Zahnprofil des Riemens muss mit dem Zahnprofil der Riemenscheibe übereinstimmen, um Spiel und Schlupf zu vermeiden.',
    },
    {
      type: 'table',
      headers: ['Riemenscheibengröße', 'Riemenart', 'Riemensteigung', 'Schritte/U (1,8°, 16x)', 'Schritte pro mm (Metrisch)', 'Schritte pro Zoll (Imperial)'],
      rows: [
        ['16 Zähne', 'GT2', '2,0 mm', '3200', '100,00 Schritte/mm', '2540,00 Schritte/in'],
        ['20 Zähne', 'GT2', '2,0 mm', '3200', '80,00 Schritte/mm', '2032,00 Schritte/in'],
        ['32 Zähne', 'GT2', '2,0 mm', '3200', '50,00 Schritte/mm', '1270,00 Schritte/in'],
        ['20 Zähne', 'GT3', '3,0 mm', '3200', '53,33 Schritte/mm', '1354,67 Schritte/in'],
        ['16 Zähne (0,9°)', 'GT2', '2,0 mm', '6400', '200,00 Schritte/mm', '5080,00 Schritte/in'],
        ['20 Zähne (0,9°)', 'GT2', '2,0 mm', '6400', '160,00 Schritte/mm', '4064,00 Schritte/in']
      ],
    },
    {
      type: 'tip',
      title: 'Praktische Konstruktionsentscheidung bei der Riemenscheibenauswahl',
      html: 'Die Wahl einer 16-Zahn-Riemenscheibe anstelle einer 20-Zahn-Riemenscheibe erhöht die mechanische Auflösung um 25 Prozent und die auf den Schlitten ausgeübte lineare Kraft. Kleinere Riemenscheiben zwingen den Zahnriemen jedoch dazu, sich um einen engeren Radius zu biegen, was mit der Zeit den Riemenverschleiß erhöhen und höhere Vibrationsfrequenzen verursachen kann. Für Standardbauten stellen 20-Zahn-Riemenscheiben einen ausgewogenen Kompromiss zwischen Riemenlebensdauer und Auflösung dar.',
    },
    {
      type: 'title',
      text: 'Realitäten des Microsteppings: Drehmomentverluste und die Interpolationslösung',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Viele Betreiber glauben, dass eine Erhöhung der Treiber-Microstepping-Auflösung auf hohe Werte wie 64, 128 oder 256 die Genauigkeit ihres 3D-Druckers unendlich steigert. Dies ist ein weit verbreiteter Irrglaube. In Wirklichkeit fällt das inkrementelle Drehmoment zwischen den Mikroschritten drastisch ab, je höher die Microstepping-Unterteilung ist. Der elektrische Strom wird in Sinus- und Cosinuskurven aufgeteilt, um die Motorwelle zwischen den physikalischen Polen zu positionieren. Wenn die äußere Reibung oder Last auf der Achse das inkrementelle Drehmoment eines Mikroschritts übersteigt, bewegt sich die Motorwelle erst, wenn sich mehrere Mikroschrittimpulse angesammelt haben.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Theoretische vs. physikalische Microstepping Drehmomentbegrenzung',
      html: 'Bei 16 Mikroschritten beträgt das inkrementelle Drehmoment pro Mikroschritt etwa 9,8 Prozent des Motordrehmoments. Bei 256 Mikroschritten fällt das inkrementelle Drehmoment auf nur 0,6 Prozent des Haltemoments. Jegliches kleines mechanisches Klemmen, Riemenspannungsungleichgrund oder Schlittenreibung verhindert die physikalische Bewegung von 1/256 eines Schrittes leicht, was bedeutet, dass hohes natives Microstepping keine tatsächliche Positioniergenauigkeit garantiert.',
    },
    {
      type: 'card',
      title: 'Trinamic Treiber Interpolationsfunktion',
      html: 'Moderne Schrittmotortreiber wie der TMC2208, TMC2209 und TMC5160 lösen dieses Problem inden sie Schrittbefehle mit einer zuverlässigen 16-Mikroschritt-Auflösung empfangen und diese Schritte intern auf 256 Mikroschritte interpolieren, bevor sie die Spulenstromänderungen ausführen. Dies ermöglicht den sanften, leisen Betrieb von 256 Mikroschritten bei gleichzeitiger Beibehaltung des zuverlässigen Haltemoments und reduzierten Controller-Overhead für die Verarbeitung einer 16-Mikroschritt-Konfiguration. Behalte in der Firmware deine Konfiguration bei 16 Mikroschritten bei und lass den Treiber die interne Interpolation übernehmen.',
    },
    {
      type: 'title',
      text: 'Berechnung der Schritte pro Millimeter für Z-Achsen-Gewindespindeln und -Stangen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die vertikale Z-Achse der meisten Desktop-3D-Drucker verwendet Gewindespindeln oder Gewindestangen. Gewindespindeln sind für die Kraftübertragung ausgelegt und haben präzisionsgeschliffene Gewindeprofile, die Spiel minimieren. Bei der Berechnung von Schritten pro mm für eine Gewindespindel darf die Gewindesteigung nicht mit der Spindelsteigung verwechselt werden. Die Spindelsteigung ist die tatsächliche lineare Strecke, die die Spindelmutter während einer vollständigen 360-Grad-Drehung der Spindel zurücklegt. Die Spindelsteigung berechnet sich durch Multiplikation der Gewindesteigung mit der Anzahl der Gewindegänge.',
    },
    {
      type: 'list',
      items: [
        'Eingängige Spindel: Die Steigung beträgt 2 mm, die Anzahl der Gänge ist 1. Die Spindelsteigung beträgt 2 mm pro Umdrehung.',
        'Zweigängige Spindel: Die Steigung beträgt 2 mm, die Anzahl der Gänge ist 2. Die Spindelsteigung beträgt 4 mm pro Umdrehung.',
        'Viergängige Spindel (übliche T8x8): Steigung 2 mm, Anzahl der Gänge 4. Die Spindelsteigung beträgt 8 mm pro Umdrehung.',
        'Standard-Metrischegewindestangen (z. B. M8): Eingängig. Die Steigung entspricht der standardmäßigen metrischen Steigung von 1,25 mm pro Umdrehung.'
      ],
    },
    {
      type: 'paragraph',
      html: 'Da Gewindespindeln einen mechanischen Vorteil gegenüber Riemensystemen haben, erreichen sie wesentlich höhere Schritte-pro-mm-Werte, was auf kleinere mechanische Auflösungswerte hindeutet. Diese hohe Auflösung ist für Z-Achsen entscheidend, da Schichten typischerweise in Schritten zwischen 0,1 mm und 0,3 mm gedruckt werden. Ein höherer Schritte-pro-mm-Wert ermöglicht es dem Drucker, konsistente Schichthöhen ohne Positionierfehler einzustellen.',
    },
    {
      type: 'title',
      text: 'Zusammenfassung der wichtigsten Schritte für die Treiber- und Motorintegration',
      level: 2,
    },
    {
      type: 'summary',
      title: 'Praktische Schritte zur Konfiguration der Firmware deines 3D Druckers',
      items: [
        'Identifiziere den Schrittwinkel des Motors aus dem Herstellerdatenblatt (normalerweise 1,8 oder 0,9 Grad).',
        'Ermittlle die Microstepping-Einstellungen des Treibers, die über physische Jumper oder softwaregesteuerte UART-Befehle konfiguriert werden (16 wird empfohlen).',
        'Messe oder schlage die Riemensteigung nach und zähle die Zähne der Riemenscheibe für die Riemenachsen.',
        'Überprüfe die Spindelsteigung (Steigung mal Anzahl der Gänge) für die Z-Achse.',
        'Gib diese Parameter in unseren Rechner ein, um den genauen Konfigurationswert in Schritten/mm oder Schritten/Zoll zu erhalten.',
        'Schreibe die berechneten Werte in die Firmware-Konfigurationsdateien oder speichere sie mit Terminalbefehlen wie M92.'
      ],
    },
  ],
  faq: [
    {
      question: 'Warum weichen meine berechneten Schritte/mm von meiner manuellen Kalibrierung ab?',
      answer: 'Berechnete Schritte/mm sind mathematisch exakt auf der Grundlage der physischen Komponentengeometrie. Wenn eine manuelle Kalibrierung einen anderen Wert ergibt, liegt dies in der Regel daran, dass der Bediener das Filament oder die Achsenbewegung mit einem Messschieber gemessen hat, während mechanisches Spiel, Riemendehnung oder Extruderschlupf Fehler verursacht haben. Du solltest immer den mathematisch berechneten Wert für die Bewegungsachsen verwenden und stattdessen die zugrunde liegenden mechanischen Probleme beheben.',
    },
    {
      question: 'Was passiert, wenn ich den Microstepping-Wert in der Firmware zu hoch einstelle?',
      answer: 'Das Einstellen des Microsteppings auf 64, 128 oder 256 in der Firmware erhöht die Impulsfrequenzanforderung an die Controllerplatine. Wenn das Motherboard nicht schnell genug Schrittimpulse erzeugen kann, kann der Drucker einfrieren, stottern oder die maximale Verfahrgeschwindigkeit begrenzen. Verwende am besten 16 Mikroschritte in der Firmware mit aktivierter Treiber-Interpolation.',
    },
    {
      question: 'Wie ändere ich die Schritte-pro-mm-Einstellungen an meinem 3D-Drucker?',
      answer: 'Du kannst die Werte vorübergehend mit dem Befehl M92 gefolgt vom Achsenbuchstaben und dem Wert ändern (z.B. M92 X80.00 Y80.00 Z400.00). Um diese Werte dauerhaft zu machen, sende den Befehl M500, um sie im EEPROM zu speichern, oder bearbeite die Datei Configuration.h in der Marlin-Firmware und flashe neu, oder bearbeite die Datei printer.cfg in Klipper.',
    },
    {
      question: 'Was ist der Unterschied zwischen Riemensteigung und Riemenscheibenzähnen?',
      answer: 'Die Riemensteigung ist der Abstand zwischen zwei aufeinanderfolgenden Zähnen des Riemens, von Mittelpunkt zu Mittelpunkt gemessen. Die Riemenscheibenzähne sind die Gesamtzahl der physischen Zähne des auf der Motorwelle montierten Zahnrads. Die Multiplikation der Zähnezahl mit der Steigung ergibt die gesamte lineare Strecke pro Motorumdrehung.',
    },
    {
      question: 'Kann ich verschiedene Microstepping-Werte für verschiedene Achsen verwenden?',
      answer: 'Ja, du kannst verschiedene Microstepping-Werte für die Achsen X, Y, Z und E konfigurieren. Zum Beispiel ist es üblich, X und Y mit 16 Mikroschritten, Z mit 16 Mikroschritten und den Extruder mit 16 oder 32 Mikroschritten zu betreiben, abhängig vom Übersetzungsverhältnis der Extruderbaugruppe.',
    }
  ],
  bibliography,
  howTo: [
    {
      name: 'Motor- und Treiberspezifikationen ermitteln',
      text: 'Finde den Schrittwinkel deines Motors (normalerweise 1,8 oder 0,9 Grad) und den Microstepping-Wert des Treibers (16 ist Standard).',
    },
    {
      name: 'Übertragungsdaten ermitteln',
      text: 'Wähle zwischen Zahnriemenantrieb ( gib die Riemensteigung und Riemenscheibenzähne an) und Gewindespindel (gib die Spindelsteigung an).',
    },
    {
      name: 'Firmware-Einstellungen konfigurieren',
      text: 'Gib die Werte ein, wähle das bevorzugte Einheitensystem aus und kopiere den generierten Schritte-Konfigurationsbefehl in deine Druckerkonfiguration.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Warum weichen meine berechneten Schritte/mm von meiner manuellen Kalibrierung ab?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Berechnete Schritte/mm sind mathematisch exakt basierend auf der physischen Bauteilgeometrie. Manuelle Kalibrierung führt aufgrund von Riemenspannung oder Filamentkomprimierung oft Fehler ein.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Schrittmotor-Microstepping-Rechner',
      description: 'Berechne Schrittkonfigurationswerte und physikalische Auflösungsgrenzen für 3D-Druckermotoren und -treiber.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Schritte pro mm eines Schrittmotors berechnen',
      step: [
        {
          '@type': 'HowToStep',
          text: 'Motor- und Treiberspezifikationen ermitteln',
        },
        {
          '@type': 'HowToStep',
          text: 'Übertragungsdaten ermitteln',
        },
        {
          '@type': 'HowToStep',
          text: 'Firmware-Einstellungen konfigurieren',
        },
      ],
    },
  ],
};