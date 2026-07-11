import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { BedMeshAnalyzerUI } from '../ui';

export const content: ToolLocaleContent<BedMeshAnalyzerUI> = {
  slug: 'bettnetz-analyzer',
  title: 'Bettnetz Analyse für 3D Drucker',
  description: 'Marlin- oder Klipper-Bettnetzdaten parsen, die Oberfläche visualisieren, Neigung oder Verzug diagnostizieren und Z-Fehler in Schraubendrehanweisungen umrechnen.',
  ui: {
    controlsAriaLabel: 'Eingabefelder der Bettnetz-Analyse',
    resultsAriaLabel: 'Ergebnisse der Bettnetz-Analyse',
    dataLabel: 'Rohdaten des Netzes',
    dataPlaceholder: 'G29-Befehlsergebnis hier einfügen...',
    sampleButtonLabel: 'Beispielnetz verwenden',
    levelingPointsLabel: 'Nivellierpunkte',
    threePointLabel: '3 Punkte',
    fourPointLabel: '4 Punkte',
    screwTypeLabel: 'Schraubentyp',
    customScrewLabel: 'Andere',
    pitchLabel: 'Gewindesteigung',
    unitSystemLabel: 'Einheiten',
    metricLabel: 'Metrisch',
    imperialLabel: 'US',
    heatmapLabel: 'Interaktive Betttopografie',
    lowScaleLabel: 'Niedrig',
    flatScaleLabel: 'Flach',
    highScaleLabel: 'Hoch',
    healthLabel: 'Zustand der Ebenheit',
    rangeLabel: 'Gesamtabweichung',
    meshSizeLabel: 'Netzgröße',
    meanLabel: 'Mittelwert Z',
    diagnosisLabel: 'Diagnose',
    instructionsLabel: 'Anleitung zur mechanischen Justage',
    cornerHeader: 'Ecke',
    deltaHeader: 'Korrektur',
    actionHeader: 'Was tun',
    frontLeft: 'Vorn links',
    frontRight: 'Vorn rechts',
    rearLeft: 'Hinten links',
    rearRight: 'Hinten rechts',
    rearCenter: 'Hinten Mitte',
    clockwiseLabel: 'im Uhrzeigersinn drehen',
    counterClockwiseLabel: 'gegen den Uhrzeigersinn drehen',
    noTurnLabel: 'diese Schraube unverändert lassen',
    raiseLabel: 'Bett anheben um',
    lowerLabel: 'Bett absenken um',
    warningWarped: 'Starker Verzug: Das Problem liegt vermutlich an der Oberfläche, nicht nur an der Nivellierung. Erwägen Sie den Austausch oder das Planfräsen der Bauplatte.',
    parseError: 'Das Netz konnte nicht geparst werden. Fügen Sie Zeilen mit dezimalen Z-Werten aus G29, M420 V oder Klipper BED_MESH_OUTPUT ein.',
    notEnoughNumbers: 'Es wurden nicht genügend Netzzahlen gefunden. Ein gültiges Netz benötigt mindestens zwei Zeilen und zwei Spalten.',
    raggedRows: 'Die erkannten Zeilen haben nicht die gleiche Länge. Prüfen Sie auf abgeschnittene oder fehlerhafte Netzausgabe.',
    badPitch: 'Die Gewindesteigung muss größer als Null sein.',
    diagnosisFlat: 'Das Bett ist bereits nahezu eben. Es sollte nur eine feine Einstellung der ersten Lage nötig sein.',
    diagnosisFrontHigh: 'Die Vorderseite ist höher als die Rückseite. Korrigieren Sie zuerst die vorderen Schrauben, bevor Sie einzelne Punkte verfolgen.',
    diagnosisRearHigh: 'Die Rückseite ist höher als die Vorderseite. Korrigieren Sie zuerst die hinteren Schrauben.',
    diagnosisLeftHigh: 'Die linke Seite ist höher als die rechte Seite. Dies ist hauptsächlich eine Neigung der X-Achse über das Bett hinweg.',
    diagnosisRightHigh: 'Die rechte Seite ist höher als die linke Seite. Dies ist hauptsächlich eine Neigung der X-Achse über das Bett hinweg.',
    diagnosisTwisted: 'Die gegenüberliegenden Ecken stimmen nicht überein. Das Bett ist verzogen oder der Gantry ist nicht konsistent ausgerichtet.',
    diagnosisConcave: 'Die Mitte ist niedriger als die Ecken. Nivellierschrauben können diese konkave Form nicht vollständig beseitigen.',
    diagnosisConvex: 'Die Mitte ist höher als die Ecken. Prüfen Sie Magnete, Klammern, Plattenverspannung oder thermische Verformung.',
    diagnosisWarped: 'Der Z-Bereich liegt über 0,5 mm, was auf übermäßigen Oberflächenverzug hindeutet und nicht auf einen gewöhnlichen Nivellierfehler.',
    mmUnit: 'mm',
    inchUnit: 'in',
    degreeUnit: 'Grad',
  },
  seo: [
    { type: 'title', text: 'So liest man ein 3D-Drucker-Bettnetz', level: 2 },
    {
      type: 'paragraph',
      html: 'Ein Bettnetz ist ein Raster gemessener Z-Offsets, die ein Sensor oder die Düse über die druckbare Fläche aufnimmt. Firmware wie Marlin und Klipper nutzt dieses Raster, um kleine Höhenunterschiede während der ersten Lagen auszugleichen. Die Werte werden üblicherweise in Millimetern angegeben: Ein positiver Wert bedeutet, dass der gemessene Punkt relativ zur gewählten Bezugsebene hoch liegt, ein negativer Wert bedeutet, dass er tief liegt. Die praktische Frage ist nicht nur, ob die Firmware den Ausgleich bewältigt. Die wichtige Frage ist, ob das physische Bett, der Gantry und die Nivellierschrauben gut genug sind, damit die Kompensation nicht übermäßig arbeiten muss.',
    },
    {
      type: 'paragraph',
      html: 'Diese Analyse übersetzt rohe Netzausgaben in drei Entscheidungen: Wie groß ist die gesamte Z-Abweichung, sieht die Form nach Neigung oder Verformung aus, und welche Schrauben sollten justiert werden. Diese Unterscheidung ist wichtig, denn ein geneigtes Bett und ein verzogenes Bett erfordern unterschiedliche Reparaturen. Eine Neigung lässt sich oft durch Drehen der Eckschrauben beheben. Eine konkave Glasplatte, verbogene Magnetfolie, lockerer Y-Schlitten oder ein verzogener Gantry können selbst dann eine schlechte erste Lage verursachen, wenn jede Ecke perfekt nivelliert ist.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0,00 mm', label: 'idealer Bereich, auf echten Betten selten erreicht' },
        { value: '0,10 mm', label: 'meist hervorragend für typische FDM-Erste-Lagen' },
        { value: '0,30 mm', label: 'spürbar, aber mit Netzausgleich oft noch druckbar' },
        { value: '0,50 mm+', label: 'Oberfläche oder Mechanik sollte überprüft werden' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Netzwerte sind keine Schraubenanweisungen',
      html: 'Die Firmware meldet eine Höhenkarte. Eine Schraubenanweisung wird aus Eckmittelwerten, Gewindesteigung und der mechanischen Drehrichtung abgeleitet. Nehmen Sie immer kleine Änderungen vor, fahren Sie erneut auf Referenz und messen Sie wieder.',
    },
    { type: 'title', text: 'Was G29- und BED_MESH_OUTPUT-Werte bedeuten', level: 2 },
    {
      type: 'paragraph',
      html: 'Marlin-Anwender erhalten Bettdaten meist über <code>G29</code>, <code>M420 V</code> oder einen Nivellierbericht im Terminal. Klipper-Anwender können das Netz mit <code>BED_MESH_OUTPUT</code>, der Weboberfläche oder gespeicherten Profildaten einsehen. Die Ausgabeformate unterscheiden sich, aber die wichtigen Daten sind dieselben: Zeilen und Spalten dezimaler Z-Messwerte. Manche Berichte enthalten Bezeichnungen, Koordinaten, Klammern, Indexnummern oder Firmware-Text. Ein guter Parser sollte den umgebenden Text ignorieren und nur die Zahlen extrahieren, die das Netz bilden.',
    },
    {
      type: 'paragraph',
      html: 'Die zuverlässigste Netzeingabe ist ein rechteckiger Block, in dem jede Zeile die gleiche Anzahl von Werten hat. Ein 3x3-Netz hat 9 Werte, ein 5x5-Netz hat 25 Werte und ein 7x7-Netz hat 49 Werte. Auch rechteckige Netze sind gültig, wenn das Abtastraster unterschiedliche X- und Y-Anzahlen verwendet. Wenn Zeilen unterschiedliche Längen haben, sind die Daten wahrscheinlich unvollständig oder mit anderen Zahlen wie Koordinaten, Vorschubgeschwindigkeiten oder Befehlszählern vermischt. Führen Sie in diesem Fall den Bericht erneut aus und fügen Sie nur das Zahlenraster ein.',
    },
    {
      type: 'table',
      headers: ['Hinweis in der Ausgabe', 'Bedeutung', 'Vorgehen'],
      rows: [
        ['Alle Zeilen gleich lang', 'Das Netz ist vermutlich vollständig.', 'Direkt analysieren und Gesamtabweichung vergleichen.'],
        ['Eine Zeile ist kürzer', 'Das Terminalkopieren wurde abgeschnitten.', 'Bericht erneut von Anfang an kopieren.'],
        ['Viele zusätzliche Ganzzahlen', 'Das Einfügen enthält Index- oder Koordinatenbezeichnungen.', 'Nach Möglichkeit nur den Matrizenabschnitt einfügen.'],
        ['Nur eine einzige lange Zeile', 'Das Werkzeug kann eine quadratische Rekonstruktion versuchen.', '9, 25, 49 oder eine andere Quadratzahl verwenden.'],
      ],
    },
    {
      type: 'tip',
      title: 'Nach dem Aufheizen messen',
      html: 'Für aussagekräftige Daten das Bett auf Drucktemperatur heizen und vor dem Messen die thermische Stabilisierung abwarten. Aluminiumplatten und Magnetfolien können sich nach einigen Minuten bei Temperatur verformen.',
    },
    { type: 'title', text: 'Gesamtabweichung: Die Kennzahl, die Ärger auf der ersten Lage vorhersagt', level: 2 },
    {
      type: 'paragraph',
      html: 'Die Gesamtabweichung ist der absolute Unterschied zwischen dem höchsten und dem niedrigsten Netzpunkt. Liegt der Maximalwert bei +0,180 mm und der Minimalwert bei −0,120 mm, beträgt die Gesamtabweichung 0,300 mm. Diese einzelne Zahl ist einfach zu verstehen, denn sie beschreibt die gesamte vertikale Arbeit, die die Firmware über das Bett hinweg leisten muss. Eine geringe Abweichung bedeutet, dass der Düsenabstand von vorn nach hinten und von links nach rechts ähnlich bleibt. Eine große Abweichung bedeutet, dass ein Bereich gequetscht werden kann, während ein anderer immer noch Probleme mit der Haftung hat.',
    },
    {
      type: 'paragraph',
      html: 'Der akzeptable Bereich hängt von der Schichthöhe, Düsendurchmesser, Filament, Oberflächenbeschaffenheit und der Stärke des Andrucks der ersten Lage ab. Bei einer Schichthöhe von 0,20 mm ist ein Oberflächenbereich von 0,10 mm in der Regel komfortabel. Ein Bereich von 0,30 mm kann noch druckbar sein, wenn der Netzausgleich aktiviert und die Überblendhöhe sinnvoll eingestellt ist, aber der Spielraum wird kleiner. Über 0,50 mm sollte der Anwender mechanische oder oberflächliche Probleme vermuten, denn das Bett ist nicht mehr nur leicht aus der Nivellierung.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Unter 0,10 mm',
          description: 'Hervorragend für die meisten FDM-Drucker für Privatanwender. Die Erste-Lagen-Justage beschränkt sich hauptsächlich auf den Z-Offset und die Sauberkeit der Oberfläche.',
          highlight: true,
          points: ['Minimale Schraubenkorrektur', 'Geringe Kompensationslast', 'Gute Wiederholgenauigkeit'],
        },
        {
          title: '0,10 bis 0,30 mm',
          description: 'Häufig bei Hobbymaschinen. Der Netzausgleich kann helfen, aber das Ausrichten der Ecken kann die Haftung verbessern.',
          points: ['Wiederholgenauigkeit der Sonde ist wichtig', 'Kanten und Ecken beobachten', 'Schrauben in kleinen Schritten verstellen'],
        },
        {
          title: 'Über 0,50 mm',
          description: 'Wahrscheinlich Verzug, Schlittenbewegung, Plattenverspannung oder Gantry-Fehler. Die reine Schraubennivellierung löst das Problem möglicherweise nicht.',
          points: ['Hardware inspizieren', 'Aufgeheizten Zustand prüfen', 'Neue Platte erwägen'],
        },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Ein guter Bereich kann trotzdem schlecht drucken',
      html: 'Ist der Bereich klein, die erste Lage aber schlecht, überprüfen Sie den Z-Offset, die Extrusion, eine verschmutzte PEI-Oberfläche, die Wiederholgenauigkeit der Sonde, Rückstände an der Düse und ob das Netzprofil vor dem Druck tatsächlich geladen wird.',
    },
    { type: 'title', text: 'Neigung, Verwindung, Konkavität und Konvexität', level: 2 },
    {
      type: 'paragraph',
      html: 'Ein Bettnetz ist mehr als ein Maximal- und Minimalwert. Die Verteilung zeigt Ihnen, welche Art von Korrektur realistisch ist. Wenn die gesamte vordere Reihe hoch und die hintere Reihe tief ist, ist das Bett global von vorn nach hinten geneigt. Wenn die linke Seite hoch und die rechte Seite tief ist, ist das Bett über die X-Achse geneigt. Diese Fälle sind ideal für eine Schraubenjustage, denn die physische Bettenebene ist einfach nicht mit der Bewegungsebene der Düse ausgerichtet.',
    },
    {
      type: 'paragraph',
      html: 'Ein verzogenes Netz ist anders: Ein diagonales Paar ist hoch, während das gegenüberliegende diagonale Paar tief ist. Das kann durch ungleichmäßigen Schraubendruck, einen verzogenen Y-Schlitten, einen nicht rechtwinkligen X-Gantry oder eine nachgebende Bettstützplatte verursacht werden. Ein konkaves Netz hat eine Mitte, die niedriger ist als die Ecken, während ein konvexes Netz eine Mitte hat, die höher ist als die Ecken. Schrauben an den Rändern können eine Wölbung in der Mitte nicht vollständig beseitigen, da sie die Mitte der Bauplatte nicht direkt beeinflussen.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Neigung', definition: 'Ein weitgehend ebener Höhenunterschied, bei dem eine Seite des Betts höher ist als die gegenüberliegende Seite.' },
        { term: 'Verwindung', definition: 'Ein diagonaler Versatz, bei dem gegenüberliegende Ecken nicht übereinstimmen, oft verursacht durch ungleichmäßige Unterstützung oder Rahmenausrichtung.' },
        { term: 'Konkaves Bett', definition: 'Eine Oberfläche, deren Mitte niedriger ist als die umgebenden Ecken oder Kanten.' },
        { term: 'Konvexes Bett', definition: 'Eine Oberfläche, deren Mitte höher ist als die umgebenden Ecken oder Kanten.' },
        { term: 'Verzug', definition: 'Eine nicht-ebene Form, die so groß ist, dass sie durch normale Schraubennivellierung nicht beseitigt werden kann.' },
      ],
    },
    {
      type: 'card',
      title: 'Warum sich eine Mittelwölbung mit Eckschrauben nur schwer beheben lässt',
      html: 'Eckschrauben definieren die Auflageebene am Rand des Betts. Ist die Mitte aufgrund von Hitze, Magneten, Klammern oder Plattenverspannung nach oben gewölbt, kann das Absenken der Ecken die Ränder verschlechtern, während die Mitte hoch bleibt.',
    },
    { type: 'title', text: 'Z-Fehler in Schraubendrehung umrechnen', level: 2 },
    {
      type: 'paragraph',
      html: 'Die mechanische Umrechnung basiert auf der Gewindesteigung. Die Gewindesteigung ist der vertikale Weg, den eine volle Schraubendrehung zurücklegt. Eine gängige M3-Grobgewindeschraube hat eine Steigung von 0,50 mm, M4 grob etwa 0,70 mm und M5 grob etwa 0,80 mm. Wenn eine Ecke bei einer M3-Schraube um 0,125 mm bewegt werden muss, beträgt die Drehung <code>0,125 × 360 / 0,50 = 90 Grad</code>, also eine Vierteldrehung. Das ist weitaus leichter umsetzbar als eine abstrakte Z-Zahl.',
    },
    {
      type: 'paragraph',
      html: 'Die Drehrichtung hängt von der Mechanik des Druckers ab. Viele Federbett-Drucker heben das Bett in Richtung Düse, wenn der Knopf von unten gegen den Uhrzeigersinn gedreht wird, aber Maschinen unterscheiden sich. Die Analyse verwendet eine konventionelle Anweisungsform und zeigt an, ob die Ecke angehoben oder abgesenkt werden sollte. Wenn die Knopfrichtung Ihres Druckers umgekehrt ist, behalten Sie die Millimeterkorrektur und den Bruchteil einer Umdrehung bei, kehren aber die Richtung um. Der sicherste Arbeitsablauf ist, eine Schraube um die Hälfte des empfohlenen Betrags zu verstellen, erneut zu messen und dann zu wiederholen.',
    },
    {
      type: 'table',
      headers: ['Schraube', 'Typische Grobsteigung', 'Korrektur 0,10 mm', 'Korrektur 0,20 mm'],
      rows: [
        ['M3', '0,50 mm/Umdrehung', '72 Grad', '144 Grad'],
        ['M4', '0,70 mm/Umdrehung', '51 Grad', '103 Grad'],
        ['M5', '0,80 mm/Umdrehung', '45 Grad', '90 Grad'],
        ['Benutzerdefiniert', 'Eigener Wert', '360 × 0,10 / Steigung', '360 × 0,20 / Steigung'],
      ],
    },
    {
      type: 'tip',
      title: 'Den letzten 0,02 mm nicht mechanisch hinterherjagen',
      html: 'Die Wiederholgenauigkeit der Sonde, die Betttemperatur und die Federkompression können sich leicht um Hundertstelmillimeter verändern. Hören Sie auf, wenn das Netz in einem praktikablen Bereich liegt, und nutzen Sie den Z-Offset für die finale Erste-Lagen-Justage.',
    },
    { type: 'title', text: 'Drei-Punkt- versus Vier-Punkt-Bettnivellierung', level: 2 },
    {
      type: 'paragraph',
      html: 'Die Drei-Punkt-Nivellierung ist mechanisch elegant, weil drei Punkte eine Ebene definieren, ohne sie zu überbestimmen. Ein Drei-Schrauben-Bett hat normalerweise zwei vordere Schrauben und eine hintere Mittelschraube oder eine ähnliche Dreiecksanordnung. Die Vier-Punkt-Nivellierung ist bei vielen kartesischen Betten üblich, aber vier Schrauben können sich gegenseitig behindern: Das Anziehen einer Ecke kann das Bett verziehen oder die Last auf der gegenüberliegenden Ecke verändern. Die Analyse unterstützt beide Verfahren, weil der richtige Anweisungssatz von der Maschine abhängt.',
    },
    {
      type: 'paragraph',
      html: 'Bei Vier-Punkt-Betten vergleicht die Analyse die vier Ecken und gibt für jede eine Anweisung aus. Bei Drei-Punkt-Betten verwendet sie vorn links, vorn rechts und hinten Mitte. Dies kann die genaue physische Position jedes Druckermodells nicht kennen, daher behandeln Sie die Bezeichnungen als Karte: Vorn ist die Kante, die dem Anwender bei den meisten Betten am nächsten ist, und hinten ist die hintere Kante. Wenn Ihr Koordinatensystem umgekehrt ist, übertragen Sie die Anweisung gedanklich auf Ihre Maschine, bevor Sie die Schrauben berühren.',
    },
    {
      type: 'proscons',
      title: 'Vor und Nachteile der Nivelliersysteme',
      items: [
        { pro: 'Drei Schrauben definieren eine stabile Ebene mit weniger Wechselwirkungen.', con: 'Nicht jeder Drucker ist für eine dreieckige Auflage ausgelegt.' },
        { pro: 'Vier Schrauben passen zu vielen Standardbetten und sind leicht zu verstehen.', con: 'Sie können eine dünne Platte überbestimmen und Verwindung erzeugen.' },
        { pro: 'Der Netzausgleich kann kleine Restfehler verbergen.', con: 'Er kann lockere Mechanik, verzogene Platten oder schlechte Sondendaten nicht beheben.' },
      ],
    },
    {
      type: 'message',
      title: 'Empfohlene Einstellreihenfolge',
      html: 'Korrigieren Sie zuerst die globale Neigung, dann die diagonale Verwindung, und führen Sie anschließend eine neue Netzmessung durch. Vermeiden Sie große Änderungen an allen Schrauben auf einmal, da jede Schraube die Ebene verändert, die für die anderen gilt.',
    },
    { type: 'title', text: 'Warum Netzausgleich kein Ersatz für Mechanik ist', level: 2 },
    {
      type: 'paragraph',
      html: 'Der Bettnetzausgleich bewegt Z während des Drucks, sodass die Düse der gemessenen Oberfläche folgt. Das ist leistungsfähig, hat aber Grenzen. Ein großer Netzbereich verursacht sichtbare Z-Bewegungen, kann den Extrusionsdruck auf der ersten Lage beeinträchtigen und dazu führen, dass die Unterseite des Teils leicht der Bettform folgt. Wenn das Netz über mehrere Millimeter ausgeblendet wird, können die unteren Lagen allmählich von der Bettform zur nominellen Modellform übergehen. Das ist bei kleinen Korrekturen akzeptabel, bei starkem Verzug jedoch unerwünscht.',
    },
    {
      type: 'paragraph',
      html: 'Eine gute Mechanik reduziert den Korrekturbedarf. Prüfen Sie, ob die Schlittenräder oder -schienen kein Spiel haben, die Sondenhalterung starr ist, die Düse vor dem Messen sauber ist, die Bauplatte konsistent aufliegt und der Gantry rechtwinklig ist. Bei Betten mit Federn können stärkere Federn oder Silikon-Abstandshalter die Wiederholgenauigkeit verbessern. Bei magnetischen PEI-Systemen kann Schmutz unter der Folie eine lokale Erhöhung erzeugen, die als rätselhafte Beule im Netz erscheint.',
    },
    {
      type: 'list',
      items: [
        'Düse vor dem Messen reinigen, wenn die Düse die Oberfläche berührt.',
        'Bett aufheizen und ausreichend warten, bis die Platte thermisch zur Ruhe kommt.',
        'Sicherstellen, dass das gespeicherte Netz in der Startsequenz des Drucks geladen wird.',
        'Bettklammern, Magnete und Folienauflage auf lokale Erhöhungen prüfen.',
        'Rechtwinkligkeit des Gantry überprüfen, wenn das Netz diagonale Verwindung zeigt.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Über 0,5 mm bedeutet Hardware Prüfung',
      html: 'Wenn die Gesamtabweichung 0,5 mm überschreitet, drehen Sie nicht endlos an den Schrauben. Suchen Sie nach einer verbogenen Platte, lockerem Schlitten, ungleichmäßigen Abstandshaltern, Sonden-Offset-Fehlern oder einer Oberfläche, die sich beim Erhitzen verformt.',
    },
    { type: 'title', text: 'Ein praktischer Arbeitsablauf für bessere erste Lagen', level: 2 },
    {
      type: 'paragraph',
      html: 'Beginnen Sie mit einem mechanisch stabilen Drucker. Heizen Sie das Bett auf, warten Sie, fahren Sie alle Achsen auf Referenz und führen Sie die Netzmessung durch. Fügen Sie die Daten in die Analyse ein und lesen Sie zuerst die Gesamtabweichung. Ist der Bereich extrem, stoppen Sie und überprüfen Sie die Hardware. Ist der Bereich moderat und die Diagnose sagt vorn, hinten, links oder rechts hoch, wenden Sie die Schraubenempfehlungen in kleinen Schritten an. Messen Sie nach jedem Durchgang erneut. Zwei konservative Durchgänge sind in der Regel besser als ein aggressiver, da Federkompression und Bettverformung nicht perfekt linear sind.',
    },
    {
      type: 'paragraph',
      html: 'Sobald das Netz in Ordnung ist, stellen Sie die Schrauben nicht mehr nach und justieren Sie die erste Lage mit Z-Offset, Extrusionsbreite, Geschwindigkeit und Oberflächenvorbereitung. Ein perfekt ausgerichtetes Bett mit falschem Z-Offset druckt trotzdem schlecht. Ein leicht unvollkommenes Bett mit sauberer PEI-Folie, korrektem Z-Offset und aktivem Netzausgleich kann wunderschön drucken. Die Analyse ist dazu gedacht, zunächst die mechanische Frage zu beantworten: Wo soll der Anwender drehen, wie weit, und ob Drehen überhaupt die richtige Reparatur ist.',
    },
    {
      type: 'summary',
      title: 'Bester Arbeitsablauf für das Bettnetz',
      items: [
        'Bei Drucktemperatur messen, nicht kalt.',
        'Die Gesamtabweichung nutzen, um zu entscheiden, ob das Netz normal oder übermäßig ist.',
        'Die Form klassifizieren, bevor Schrauben verstellt werden.',
        'Eckfehler mithilfe der Gewindesteigung in eine Drehung umrechnen.',
        'Nach kleinen Korrekturen erneut messen und aufhören, wenn der Restfehler praktikabel ist.',
      ],
    },
    {
      type: 'card',
      title: 'Das Ziel ist keine schöne Grafik',
      html: 'Das nützliche Ergebnis ist eine bessere erste Lage. Eine Netzgrafik hilft Ihnen, die Oberfläche zu sehen, aber die Schraubentabelle ist der Teil, der Messung in Reparatur verwandelt.',
    },
  ],
  faq: [
    {
      question: 'Kann ich sowohl Marlin- als auch Klipper-Netzdaten einfügen?',
      answer: 'Ja. Der Parser extrahiert dezimale Z-Werte aus mehrzeiligem Text und funktioniert daher mit üblichen G29-, M420 V- und BED_MESH_OUTPUT-Berichten, sofern das Zahlenraster vorhanden ist.'
    },
    {
      question: 'Welche Bettnetz-Abweichung ist akzeptabel?',
      answer: 'Unter 0,10 mm ist hervorragend, 0,10 bis 0,30 mm ist üblich und mit Netzausgleich meist druckbar, und über 0,50 mm deutet auf ein Oberflächen- oder Mechanikproblem hin.'
    },
    {
      question: 'Warum warnt das Werkzeug bei Verzug über 0,5 mm?',
      answer: 'In diesem Bereich ist die Schraubennivellierung oft nicht mehr das Hauptproblem. Die Bauplatte, der Schlitten, die Sonde oder der Gantry könnten verzogen, locker oder thermisch verformt sein.'
    },
    {
      question: 'Gelten die Schraubenrichtungsanweisungen für jeden Drucker?',
      answer: 'Nein. Die berechneten Millimeter und Grad sind universell, aber die Knopfrichtung kann je nach Maschine variieren. Wenn sich Ihr Bett entgegengesetzt zur Angabe bewegt, kehren Sie die Richtung um und behalten den Betrag bei.'
    },
    {
      question: 'Ersetzt der Netzausgleich die manuelle Nivellierung?',
      answer: 'Nein. Der Netzausgleich ist am besten für kleine Restfehler geeignet. Die mechanische Nivellierung hält die Korrektur gering und verbessert die Gleichmäßigkeit der ersten Lage.'
    },
  ],
  bibliography,
  howTo: [
    { name: 'Netzausgabe einfügen', text: 'Das numerische Bettnetz aus Marlin oder Klipper kopieren und in das Rohdatenfeld einfügen.' },
    { name: 'Mechanik auswählen', text: 'Drei oder vier Nivellierpunkte sowie die Gewindesteigung der verwendeten Schrauben auswählen.' },
    { name: 'Diagnose lesen', text: 'Prüfen, ob die Oberfläche geneigt, verzogen, konkav, konvex oder übermäßig verbogen ist.' },
    { name: 'Vorsichtig justieren', text: 'Jede Schraube um den empfohlenen Bruchteil einer Umdrehung drehen, dann erneut messen, bevor ein weiterer Durchgang erfolgt.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Bettnetz-Analyse für 3D-Drucker',
      description: 'Marlin- und Klipper-Bettnetzdaten analysieren und Z-Eckfehler in Anweisungen zur Drehung von Nivellierschrauben umrechnen.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Welche Bettnetz-Abweichung ist akzeptabel?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Unter 0,10 mm ist hervorragend, 0,10 bis 0,30 mm ist üblich und mit Netzausgleich meist druckbar, und über 0,50 mm deutet auf ein Oberflächen- oder Mechanikproblem hin.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'So analysiert man ein 3D-Drucker-Bettnetz',
      step: [
        { '@type': 'HowToStep', text: 'Rohdaten des Marlin- oder Klipper-Netzes einfügen.' },
        { '@type': 'HowToStep', text: 'Anzahl der Nivellierpunkte und Gewindesteigung auswählen.' },
        { '@type': 'HowToStep', text: 'Abweichung, Diagnose und Wärmekarte anzeigen.' },
        { '@type': 'HowToStep', text: 'Schraubendrehanweisungen anwenden und erneut messen.' },
      ],
    },
  ],
};