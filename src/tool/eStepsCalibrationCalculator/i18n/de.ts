import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { EStepsCalibrationCalculatorUI } from '../ui';

export const content: ToolLocaleContent<EStepsCalibrationCalculatorUI> = {
  slug: 'e-steps-kalibrierungsrechner',
  title: 'E steps Kalibrierungsrechner und Extruder Diagnose Assistent',
  description: 'Berechne korrigierte Extruder-E-steps aus einem gemessenen Extrusionstest und markiere Abweichungen über 5 %, bevor sie ein mechanisches Problem verbergen.',
  ui: {
    unitSystemLabel: 'Einheiten',
    metricLabel: 'Metrisch',
    imperialLabel: 'US',
    inputGroupLabel: 'Extrusionstest',
    currentEStepsLabel: 'Aktuelle E-steps',
    requestedLengthLabel: 'Angeforderte Extrusionslänge',
    actualLengthLabel: 'Gemessene Extrusionslänge',
    newEStepsLabel: 'Neue E-steps',
    errorLabel: 'Erkannter Fehler',
    commandLabel: 'Konsolenbefehl',
    copyCommandLabel: 'M92-Befehl kopieren',
    copiedLabel: 'Kopiert',
    normalStatusLabel: 'Kalibrierungsbereich',
    criticalStatusLabel: 'Kritische Abweichung',
    normalMessage: 'Die gemessene Abweichung liegt innerhalb von 5 %. Wende den Wert nur an, nachdem der Filamentweg sauber ist, und wiederhole den Test einmal.',
    criticalMessage: 'Kritische Warnung: Die Abweichung liegt über 5 %. Ein mechanischer Fehler ist wahrscheinlich: Düsenverstopfung, Extruderschlupf oder falsche Andruckfederspannung. Überprüfe die Hardware, bevor du diese neuen E-steps anwendest.',
    diagnosticTitle: 'Mechanische Prüfungen vor dem Speichern der Firmware',
    diagnosticOne: 'Heize die Düse auf die tatsächliche Drucktemperatur und extrudiere langsam bei freiem Hotend.',
    diagnosticTwo: 'Überprüfe Antriebsritzel, Federspannung, Filament-Abdruckspuren und Spulenwiderstand, bevor du dem Wert vertraust.',
    diagnosticThree: 'Wiederhole den 100-mm-Test nach Reinigung oder Spannungsänderungen; stimme die Firmware nicht auf einen durchrutschenden Extruder ab.',
    referenceTitle: 'Entscheidungsregel',
    formulaLabel: 'Formel',
    formulaText: 'aktuelle E-steps x angeforderte / gemessene',
    safeBandLabel: '0-5 % Fehler',
    safeBandText: 'Nur nach einem wiederholbaren Test anwenden.',
    criticalBandLabel: '> 5 % Fehler',
    criticalBandText: 'Zuerst Verstopfung, Schlupf, Spannung und Widerstand prüfen.',
    repeatTestLabel: 'Nach M92',
    repeatTestText: 'Führe denselben Extrusionstest erneut durch, bevor du speicherst.',
    mmUnit: 'mm',
    inchUnit: 'Zoll',
    stepsUnit: 'Schritte/mm',
    controlsAriaLabel: 'E-steps-Kalibrierungseingaben',
    resultsAriaLabel: 'E-steps-Kalibrierungsergebnisse',
  },
  seo: [
    { type: 'title', text: 'Was E-steps-Kalibrierung tatsächlich misst', level: 2 },
    {
      type: 'paragraph',
      html: 'E-steps definieren, wie viele Schrittmotor-Schritte die Extruder-Firmware für einen Millimeter Filamentbewegung sendet. Bei Marlin wird der Wert normalerweise mit <code>M92 E...</code> gespeichert, während Klipper dieselbe physikalische Beziehung oft durch die Rotationsdistanz ausdrückt. Die Messung ist einfach: Befehle eine bekannte Extrusionslänge, messe physisch, wie viel Filament sich bewegt hat, und korrigiere den Firmware-Wert um das Verhältnis zwischen angeforderter und tatsächlicher Bewegung. Die Formel lautet <code>neue E-steps = aktuelle E-steps * angeforderte Länge / tatsächliche Länge</code>.',
    },
    {
      type: 'paragraph',
      html: 'Der gefährliche Teil ist die Interpretation. Ein Rechner kann aus jeder Messung eine Zahl erzeugen, auch aus einer schlechten. Wenn der Extruder das Filament durchreibt, die Düse teilweise verstopft ist oder die Andruckfeder zu locker ist, wird die gemessene Extrusionslänge gering sein. Eine Erhöhung der E-steps scheint den 100-mm-Test zu beheben, behebt jedoch nicht das Hardwareproblem. Es zwingt den Motor, stärker oder länger durch denselben Fehler zu drücken, was echte Drucke inkonsistent machen kann.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '100 mm', label: 'übliche angeforderte Länge für einen wiederholbaren Extrudertest' },
        { value: '5 %', label: 'diagnostische Schwelle, ab der zuerst eine Hardwareprüfung erfolgen sollte' },
        { value: 'M92', label: 'Marlin-Befehl zum Einstellen der Schritte pro Einheit' },
        { value: '2 Dezimalen', label: 'Ausgabepräzision für den kopierten E-Achsen-Befehl' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Nicht um einen mechanischen Fehler herum kalibrieren',
      html: 'Eine Abweichung über 5 % ist groß genug, dass der Drucker möglicherweise aus einem Grund unter- oder überextrudiert, der nichts mit der Firmware-Mathematik zu tun hat. Überprüfe den Extruderpfad, bevor du einen neuen Wert mit <code>M500</code> speicherst oder eine Klipper-Konfiguration bearbeitest.',
    },
    { type: 'title', text: 'So führst du einen sauberen 100-mm-Extrusionstest durch', level: 2 },
    {
      type: 'paragraph',
      html: 'Ein zuverlässiger E-steps-Test beginnt mit einer heißen Düse und einem stabilen Filamentweg. Heize das Hotend auf eine normale Drucktemperatur für das Filament, da der Kalt-Extrusionsschutz aus gutem Grund existiert und der Gegendruck des geschmolzenen Kunststoffs die Belastung des Extruders verändert. Markiere das Filament in einem bekannten Abstand über dem Extrudereinlass, befehle eine langsame 100-mm-Extrusion und messe den verbleibenden Abstand, um zu bestimmen, wie viel Filament sich tatsächlich bewegt hat.',
    },
    {
      type: 'list',
      items: [
        'Verwende eine langsame Extrusionsgeschwindigkeit, damit das Hotend Material schmelzen kann, ohne abnormalen Druck aufzubauen.',
        'Markiere das Filament mit einem Messschieber oder einem feinen Stift anstatt nach Augenmaß.',
        'Halte die Spule frei drehbar, damit Spulenwiderstand nicht wie ein E-steps-Fehler aussieht.',
        'Führe den Test mit demselben Filamentdurchmesser und -materialtyp aus, den du normalerweise druckst.',
        'Wiederhole die Messung nach Änderung der Ritzelspannung, des Düsenzustands oder der Hotend-Temperatur.',
      ],
    },
    {
      type: 'table',
      headers: ['Gemessenes Ergebnis', 'Fehler', 'Erste Interpretation', 'Beste nächste Aktion'],
      rows: [
        ['98 bis 102 mm', '0 bis 2 %', 'Kleine normale Messstreuung', 'Einmal wiederholen und ggf. mitteln'],
        ['95 bis 105 mm', '2 bis 5 %', 'Firmware-Korrektur kann sinnvoll sein', 'Pfad prüfen, dann berechneten Wert anwenden'],
        ['Unter 95 mm', 'Über 5 %', 'Wahrscheinlich Schlupf, Verstopfung, Widerstand oder Druckproblem', 'Mechanik vor Firmware-Änderung prüfen'],
        ['Über 105 mm', 'Über 5 %', 'Falscher vorheriger Wert oder Messaufbauproblem', 'Einheiten prüfen und Test wiederholen'],
      ],
    },
    {
      type: 'tip',
      title: 'Nutze eine saubere Variable',
      html: 'Ändere nicht gleichzeitig Flussrate, Extrusionsmultiplikator, Pressure Advance und E-steps. E-steps sollten die Motor-zu-Filament-Bewegung beschreiben, während Fluss und Extrusionsmultiplikator den Slicer-Materialausstoß für ein bestimmtes Filament und Druckprofil justieren.',
    },
    { type: 'title', text: 'Warum die 5-%-Warnung wichtig ist', level: 2 },
    {
      type: 'paragraph',
      html: 'Ein Extrusionsfehler von 5 % bedeutet, dass ein 100-mm-Befehl weniger als 95 mm oder mehr als 105 mm tatsächliche Bewegung erzeugt hat. Das ist kein kleines Rundungsproblem. Bei einem typischen 1,75-mm-Filament stellt ein fehlender Vorschub von 5 mm über einen kurzen Test ein sichtbares Materialdefizit dar. Bei echten Drucken kann es sich als schwache Wände, spärliche Deckflächen, inkonsistente erste Schichten und schlechte Maßhaltigkeit äußern. Noch wichtiger: Unterextrusion in diesem Ausmaß hat oft eine physikalische Ursache.',
    },
    {
      type: 'paragraph',
      html: 'Der Diagnoseassistent markiert diese Schwelle, weil eine Firmware-Korrektur Symptome verbergen kann. Wenn das Ritzel mit Plastikstaub bedeckt ist, kann der Motor nur bei schnellen Bewegungen überspringen. Wenn die Düse teilweise verstopft ist, kann ein langsamer Test nach einer großen Korrektur bestehen, aber der Drucker wird bei hohem Durchfluss immer noch versagen. Wenn die Federspannung zu hoch ist, kann das Filament sich verformen und stromabwärts verklemmen; ist sie zu niedrig, kann es durchrutschen. Die richtige Reparatur ist mechanisch, nicht eine größere E-Achsen-Zahl.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Gesunder Kalibrierungsfehler',
          description: 'Kleine Abweichung durch vorherigen Firmware-Wert, Getrieberad-Toleranz oder Messrauschen.',
          points: ['Gewöhnlich innerhalb von 5 %', 'Wiederholbar über zwei Tests', 'Kein Klicken oder Filamentstaub', 'Korrektur bleibt moderat'],
        },
        {
          title: 'Fehlerbedingter Extrusionsfehler',
          description: 'Große Abweichung, weil der Extruder das Filament nicht wie befohlen bewegen kann.',
          highlight: true,
          points: ['Über 5 %', 'Ändert sich zwischen wiederholten Tests', 'Klicken, Durchreiben oder Abdruckspuren', 'Oft schlimmer bei höherer Geschwindigkeit'],
        },
      ],
    },
    {
      type: 'summary',
      title: 'Vor der Annahme einer kritischen Korrektur',
      items: [
        'Überprüfe die Düse auf teilweise Verstopfung und reinige oder ersetze sie, wenn die Extrusion wellt oder pulsiert.',
        'Bürste die Antriebsritzelzähne und entferne Filamentstaub.',
        'Stelle die Federspannung so ein, dass das Ritzel greift, ohne das Filament zu quetschen.',
        'Überprüfe Spulenwiderstand, Bowdenrohrsitz und Reibung im Filamentpfad.',
        'Führe dieselbe Messung erneut durch, bevor du die Firmware änderst.',
      ],
    },
    { type: 'title', text: 'Marlin M92, M500 und Klipper Rotationsdistanz', level: 2 },
    {
      type: 'paragraph',
      html: 'Bei Marlin-basierter Firmware setzt <code>M92 E...</code> die Extruderschritte pro Millimeter für die aktuelle Sitzung. Viele Drucker benötigen anschließend <code>M500</code>, um den Wert im EEPROM zu speichern, da die Einstellung sonst nach einem Neustart verschwinden kann. Einige gesperrte oder vom Hersteller modifizierte Firmware-Versionen ignorieren möglicherweise EEPROM-Speicherungen oder erfordern stattdessen eine Änderung der Firmware-Quellkonfiguration. Überprüfe den Wert nach einem Neustart immer mit <code>M503</code>, falls der Drucker dies unterstützt.',
    },
    {
      type: 'paragraph',
      html: 'Klipper verwendet üblicherweise <code>rotation_distance</code> anstelle von E-steps in printer.cfg. Die physikalische Kalibrierungsidee ist dieselbe, aber die numerische Richtung ist umgekehrt, da die Rotationsdistanz beschreibt, wie viel Filament sich pro Motorumdrehung bewegt, nicht wie viele Schritte pro Millimeter benötigt werden. Dieses Tool gibt einen <code>M92</code>-Befehl aus, da es für die direkte Verwendung in Marlin-Konsolen und kompatiblen Firmware-Schnittstellen gedacht ist. Klipper-Benutzer können den gemessenen Fehler dennoch als Diagnosesignal vor der Neuberechnung der Rotationsdistanz nutzen.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'E-steps', definition: 'Die Anzahl der Motors Schritte, die die Firmware sendet, um einen Millimeter Filament auf der Extruderachse zu bewegen.' },
        { term: 'M92', definition: 'Ein G-Code-Befehl, der von Marlin-Firmware verwendet wird, um Schritte pro Einheit für eine oder mehrere Achsen festzulegen.' },
        { term: 'M500', definition: 'Ein Marlin-Befehl, der aktuelle Einstellungen im EEPROM speichert, sofern vom Drucker unterstützt.' },
        { term: 'Rotationsdistanz', definition: 'Klipper-Einstellung, die den Filamentweg pro vollständiger Motorumdrehung angibt.' },
        { term: 'Extrusionsmultiplikator', definition: 'Slicer-Ebene Flussskalierung für ein Materialprofil, getrennt von den Maschinen-E-steps.' },
      ],
    },
    {
      type: 'card',
      title: 'Konsolenbefehl Workflow',
      html: 'Sende den kopierten <code>M92 E...</code>-Befehl, wiederhole den Extrusionstest und speichere den Wert erst, nachdem die gemessene Länge wiederholbar ist. Ein einzelner guter Wert ist weniger aussagekräftig als zwei konsistente Messungen.',
    },
    { type: 'title', text: 'Mechanische Probleme, die wie schlechte E-steps aussehen', level: 2 },
    {
      type: 'paragraph',
      html: 'Eine teilweise verstopfte Düse ist die häufigste Falle. Der Extrudermotor kann sich um den korrekten Betrag drehen, während sich im Hotend Druck aufbaut, wodurch das Antriebsritzel das Filament zerkaut anstatt es vorzuschieben. Die gemessene Extrusionslänge wird kurz, die Formel erhöht die E-steps, und der nächste Druck kann immer noch unterextrudieren, weil die Düsenverstopfung bestehen bleibt. Wenn extrudiertes Filament stark wellt, pulsiert, dünn austritt oder beim Verlassen der Düse die Richtung ändert, reinige das Hotend vor dem Kalibrieren.',
    },
    {
      type: 'paragraph',
      html: 'Extruderschlupf kann durch entgegengesetzte Spannungsfehler entstehen. Zu wenig Federkraft lässt das Ritzel gegen das Filament durchdrehen. Zu viel Federkraft kann weiches Filament oval quetschen, die Reibung in einem Bowdenrohr erhöhen oder tiefe Abdruckspuren erzeugen, die am Hitzebrechereingang verklemmen. Flexibles Filament ist besonders empfindlich. Die Diagnoseschwelle existiert, um den Benutzer zu veranlassen, innezuhalten und diese Bedingungen zu prüfen, bevor ein Traktionsproblem in eine Firmware-Zahl umgewandelt wird.',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Kritische Symptome während des Tests',
      html: 'Anhalten und Hardware überprüfen, wenn der Extruder klickt, Filamentstaub auftritt, der Motor ungewöhnlich heiß wird, die Extrusion pulsiert oder sich die gemessene Länge zwischen wiederholten 100-mm-Tests um mehrere Millimeter ändert.',
    },
    {
      type: 'proscons',
      title: 'Korrektur der E steps nach einem großen Fehler',
      items: [
        { pro: 'Kann den genauen Filamentvorschub wiederherstellen, wenn der alte Firmware-Wert tatsächlich falsch war.', con: 'Kann ein durchrutschendes Antriebsritzel oder eine verstopfte Düse verbergen, wenn es ohne Überprüfung verwendet wird.' },
        { pro: 'Einfacher Befehl, leicht anzuwenden und zu wiederholen.', con: 'Ein falsch gespeicherter Wert beeinflusst jedes Slicer-Profil und jedes Material.' },
        { pro: 'Nützlich nach Änderung der Extruder-Getriebeübersetzung oder Motorhardware.', con: 'Kein Ersatz für die Flusskalibrierung an gedruckten Wänden.' },
      ],
    },
    { type: 'title', text: 'E-steps vs. Flusskalibrierung', level: 2 },
    {
      type: 'paragraph',
      html: 'Die E-steps-Kalibrierung gehört zur Maschinenebene. Sie fragt, ob der Extrudermechanismus die angeforderte Länge Rohfilament bewegt. Die Flusskalibrierung gehört zur Druckprofilebene. Sie fragt, ob ein bestimmtes Filament, Temperatur, Düse, Linienbreite und Slicer-Strategie die beabsichtigte Wandstärke und Oberflächenqualität erzeugen. Die Vermischung beider erzeugt verwirrende Profile: Ein Drucker kann einen 100-mm-E-steps-Test bestehen und dennoch einen Extrusionsmultiplikator von 0,96 für eine bestimmte PETG-Marke benötigen.',
    },
    {
      type: 'paragraph',
      html: 'Kalibriere E-steps nach Änderung der Extruderhardware, Motors Schritte, Mikroschrittanzahl, Getriebeübersetzung oder Ritzeldurchmesser. Kalibriere den Fluss nach Wechsel von Filamentmarke, Farbe, Düsengröße, Temperatur oder Slicer-Linienbreite. Pressure Advance, Linear Advance und Retraktion sind separate Drucksteuerungswerkzeuge und sollten eingestellt werden, nachdem die Basis-Extrusionsbewegung vertrauenswürdig ist.',
    },
    {
      type: 'table',
      headers: ['Kalibrierung', 'Ebene', 'Ändert sich wenn', 'Nicht verwenden um zu beheben'],
      rows: [
        ['E-steps', 'Firmware oder Maschinenkonfig', 'Extruderhardware oder Motoraufbau sich ändert', 'Feuchtes Filament, Düsenverstopfungen, Slicer-Fluss'],
        ['Flussmultiplikator', 'Slicer-Materialprofil', 'Filamentmarke, Farbe, Düse, Temperatur sich ändert', 'Falsche Übersetzung oder durchrutschender Extruder'],
        ['Pressure Advance', 'Firmware-Dynamik', 'Extruderpfad, Geschwindigkeit, Beschleunigung, Material sich ändert', 'Statische Unterextrusion'],
        ['Retraktion', 'Slicer-Fahrverhalten', 'Fädenziehen, Nässen, Fahrartefakte sich ändern', 'Basisfehler bei der Vorschubdistanz'],
      ],
    },
    {
      type: 'message',
      title: 'Faustregel für Support Techniker',
      html: 'Wenn sich ein Kalibrierungswert dramatisch ändert, nimm an, dass die Messung dir etwas über die Maschine sagt. Erst inspizieren, dann berechnen, zuletzt speichern.',
    },
    { type: 'title', text: 'Wiederholbarkeit und Messqualität', level: 2 },
    {
      type: 'paragraph',
      html: 'Ein gutes E-steps-Ergebnis ist wiederholbar. Wenn ein Test 94 mm misst, der nächste 99 mm und der nächste 96 mm, ist der Durchschnitt weniger wichtig als die Streuung. Unterschiedliche Ergebnisse deuten auf Traktion, Temperatur, Druck oder Messtechnik hin. Bevor du einen neuen Wert speicherst, wiederhole die Extrusion nach jeder mechanischen Änderung mindestens zweimal. Die beiden Ergebnisse sollten nahe genug beieinanderliegen, dass die neue Firmware-Zahl nicht dem Rauschen hinterherläuft.',
    },
    {
      type: 'tip',
      title: 'Möglichst oberhalb des Extruders messen',
      html: 'Das Markieren des Filaments vor dem Eintritt in den Extruder vermeidet Verwirrung durch gebogenes Filament, das aus der Düse austritt. Miss den Abstand von einem festen Referenzpunkt zur Markierung vor und nach dem Befehl.',
    },
    {
      type: 'summary',
      title: 'Zuverlässige Kalibrierungsreihenfolge',
      items: [
        'Heize die Düse vor und entferne altes Material.',
        'Markiere das Filament mit einem präzisen Referenzabstand.',
        'Extrudiere 100 mm langsam und messe die tatsächliche Bewegung.',
        'Nutze den Rechner und überprüfe jeden Fehler über 5 %.',
        'Wende <code>M92 E...</code> an, teste erneut und speichere nur, wenn wiederholbar.',
      ],
    },
  ],
  faq: [
    {
      question: 'Welche Formel verwendet dieser E-steps-Rechner?',
      answer: 'Er verwendet neue E-steps = aktuelle E-steps * angeforderte Extrusionslänge / gemessene Extrusionslänge.',
    },
    {
      question: 'Warum warnt das Tool bei über 5 % Fehler?',
      answer: 'Eine Abweichung über 5 % ist groß genug, um auf ein mechanisches Problem wie Extruderschlupf, Teilverstopfung, Spulenwiderstand oder falsche Federspannung hinzuweisen. Überprüfe die Hardware, bevor du einen neuen Firmware-Wert speicherst.',
    },
    {
      question: 'Kann ich den M92-Befehl in Klipper verwenden?',
      answer: 'Der kopierte M92-Befehl ist für Marlin-kompatible Firmware gedacht. Klipper verwendet normalerweise rotation_distance, aber derselbe gemessene Fehler ist dennoch nützlich für die Extruderdiagnose.',
    },
    {
      question: 'Sollte ich den neuen Wert sofort speichern?',
      answer: 'Nein. Wende ihn vorübergehend an, wiederhole den Extrusionstest und speichere nur, nachdem die gemessene Bewegung wiederholbar ist.',
    },
    {
      question: 'Ist die E-steps-Kalibrierung dasselbe wie die Flusskalibrierung?',
      answer: 'Nein. E-steps kalibrieren die Maschinenbewegung. Fluss- oder Extrusionsmultiplikator kalibriert den Slicer-Materialausstoß für ein bestimmtes Filament und Druckprofil.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Aktuelle E-steps eingeben', text: 'Lies die aktuellen Extruderschritte pro Millimeter aus der Firmware oder den Druckereinstellungen.' },
    { name: 'Extrusionstest durchführen', text: 'Befehle eine bekannte Länge, normalerweise 100 mm, bei auf Drucktemperatur aufgeheiztem Hotend.' },
    { name: 'Tatsächliche Bewegung messen', text: 'Gib die physisch gemessene Filamentbewegung ein und überprüfe den erkannten Fehler.' },
    { name: 'Bei Bedarf inspizieren', text: 'Wenn der Fehler über 5 % liegt, prüfe die Hardware, bevor du den M92-Befehl anwendest.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'E-steps Kalibrierungsrechner und Extruder-Diagnose-Assistent',
      description: 'Berechne korrigierte 3D-Drucker-Extruder-E-steps und markiere große Abweichungen mit mechanischem Risiko.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Welche Formel verwendet dieser E-steps-Rechner?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Er verwendet neue E-steps = aktuelle E-steps * angeforderte Extrusionslänge / gemessene Extrusionslänge.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'So kalibrierst du die Extruder-E-steps eines 3D-Druckers',
      step: [
        { '@type': 'HowToStep', text: 'Gib den aktuellen E-steps-Wert ein.' },
        { '@type': 'HowToStep', text: 'Befehle eine bekannte Extrusionslänge, üblicherweise 100 mm.' },
        { '@type': 'HowToStep', text: 'Messe die tatsächliche Filamentbewegung und berechne die Korrektur.' },
        { '@type': 'HowToStep', text: 'Überprüfe zuerst die Hardware, wenn der erkannte Fehler über 5 % liegt.' },
      ],
    },
  ],
};
