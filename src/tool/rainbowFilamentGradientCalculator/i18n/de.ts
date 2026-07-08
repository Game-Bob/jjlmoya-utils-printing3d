import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { RainbowFilamentGradientCalculatorUI } from '../ui';

export const content: ToolLocaleContent<RainbowFilamentGradientCalculatorUI> = {
  slug: 'regenbogen-filament-verlaufslaenge-rechner',
  title: 'Regenbogen Filament Verlaufslängen Rechner für 3D Drucke',
  description: 'Schätze Regenbogen-Filament-Farbzyklen, Spulenverbrauch und wo Farbverläufe entlang der Z-Höhe eines geslicten 3D-Drucks erscheinen.',
  ui: {
    unitMetric: 'Metrisch',
    unitImperial: 'US',
    cycleLength: 'Farbzykluslänge',
    partWeight: 'Geslictes Teilgewicht',
    density: 'Dichte',
    diameter: 'Filamentdurchmesser',
    partHeight: 'Gedruckte Z-Höhe',
    startOffset: 'Startversatz auf Spule',
    presets: 'Material-Voreinstellungen',
    pla: 'PLA-Regenbogen',
    petg: 'PETG-Blend',
    silk: 'Seide-Mehrfarbig',
    usedFilament: 'Filamentverbrauch',
    cyclesInPart: 'Zyklen im Teil',
    heightPerCycle: 'Z pro Zyklus',
    gramsPerCycle: 'Masse pro Zyklus',
    zMap: 'Z-Übergangskarte',
    transitionBands: 'Sichtbare Übergangsbänder',
    phaseWindow: 'Zyklusphase',
    copySummary: 'Verlaufszusammenfassung kopieren',
    reset: 'Zurücksetzen',
    emptyValue: '0',
    copyTemplate: 'Regenbogen-Filament-Schätzung',
    copyCycles: 'Farbzyklen',
    copyUsed: 'verbraucht',
    copyZCycle: 'pro Zyklus',
  },
  seo: [
    { type: 'title', text: 'Wie ein Regenbogen-Filament-Verlaufslängen-Rechner funktioniert', level: 2 },
    { type: 'paragraph', html: 'Ein Regenbogen-Filament-Verlaufslängen-Rechner verbindet zwei Slicer-Werte, die normalerweise getrennt betrachtet werden: <strong>Modellmasse</strong> und <strong>Druckhöhe</strong>. Der Slicer zeigt an, wie viele Gramm Material das Teil verbrauchen wird, während der Filamenthersteller oder eine manuelle Messung angibt, wie viele Meter die Spule für einen vollständigen Farbzyklus benötigt. Sobald diese Werte im selben Materialflussmodell zusammengeführt sind, kannst du abschätzen, wie viele Farbzyklen im Objekt erscheinen und wo jedes Farbband auf der Z-Achse landet.' },
    { type: 'paragraph', html: 'Die Kernumrechnung ist physikalisch, nicht visuell. Ein geslictes Teil mit 180 g verbraucht nicht automatisch auf jeder Spule dieselbe Filamentlänge, denn die Länge hängt von Dichte und Durchmesser ab. PLA, PETG, Seiden-PLA, gefüllte Blends und transluzente Blends können unterschiedliche Dichten haben. Ein nomineller 1,75-mm-Filament hat zudem Toleranzschwankungen, daher sollte ein Rechner die Anpassung des Durchmessers erlauben.' },
    { type: 'stats', columns: 4, items: [
      { value: '1,75 mm', label: 'übliche FDM-Filamentdurchmesser', icon: 'mdi:circle-slice-8' },
      { value: '1,24 g/cm3', label: 'typische PLA-Dichte für Schätzungen', icon: 'mdi:flask' },
      { value: '30 m', label: 'Beispiel eines vollständigen Regenbogen-Farbzyklus', icon: 'mdi:palette' },
      { value: 'Z-Achse', label: 'wo die Zykluslänge sichtbar wird', icon: 'mdi:arrow-up-down' },
    ] },
    { type: 'tip', title: 'Miss einen echten Zyklus, bevor du der Vorschau vertraust', html: 'Hersteller beschreiben Regenbogen-Filament oft als schnell, mittel oder lang im Übergang, aber der nützliche Wert ist die gemessene Entfernung von einer Farbe zurück zur selben Farbe. Wickle nur dann eine kleine Probe ab, wenn es für die Spule sicher ist, oder drucke einen dünnen Reinigungsturm und berechne die verbrauchte Filamentlänge aus den Slicer-Schätzungen zurück.' },

    { type: 'title', text: 'Warum das Teilgewicht Farbwechsel besser vorhersagt als die Druckzeit', level: 2 },
    { type: 'paragraph', html: 'Die Druckzeit ist ein schlechter Indikator für den Farbverbrauch einer Regenbogenspule. Eine dekorative Vase kann im Spiralmodus viele Stunden dauern, dabei aber wenig Material verbrauchen, während eine dichte mechanische Halterung schnell viel Filament verbraucht. Die Spule wechselt die Farbe entsprechend der <strong>Länge des durch den Extruder gezogenen Filaments</strong>, nicht nach verstrichenen Minuten, Verfahrwegen oder der Anzahl der Schichten.' },
    { type: 'paragraph', html: 'Das Slicer-Gewicht ist nützlich, weil es bereits Wände, Infill, obere und untere Schichten, Stützen (falls aktiviert), Ränder, Röcke und Reinigungsstrukturen enthält. Dieses Gewicht kann durch Division durch die Materialdichte in Volumen umgerechnet werden. Das Volumen wiederum kann durch die Querschnittsfläche des Filaments geteilt werden, um die gesamte Filamentlänge zu schätzen. Deshalb kann derselbe STL bei Änderung von Infill, Wandanzahl, Stützeinstellungen oder Skalierung ein anderes Verlaufsverhalten zeigen.' },
    { type: 'table', headers: ['Slicer-Änderung', 'Auswirkung auf Filamentverbrauch', 'Auswirkung auf Regenbogenverlauf'], rows: [
      ['Mehr Infill', 'Erhöht Gramm und Meter', 'Mehr Farbzyklus-Fortschritt innerhalb derselben Z-Höhe'],
      ['Mehr Wände', 'Erhöht Verbrauch in den meisten Schichten', 'Übergänge komprimieren sich vertikal und werden häufiger'],
      ['Höheres Modell bei gleicher Masse', 'Ähnliche Meter über mehr Z-Höhe', 'Übergänge dehnen sich weiter auseinander'],
      ['Stützen aktiviert', 'Verbraucht Farben außerhalb des sichtbaren Teils', 'Sichtbare Phase kann sich gegenüber dem reinen Modell verschieben'],
      ['Großer Rand oder Floß', 'Verbraucht Filament vor der ersten sichtbaren Schicht', 'Startfarbe verschiebt sich auf der Spule nach vorne'],
    ] },
    { type: 'diagnostic', variant: 'info', title: 'Verwende die Slicer Schätzung nach den endgültigen Einstellungen', badge: 'Wichtig', html: 'Führe die Berechnung erst durch, nachdem Schichthöhe, Wandanzahl, Infill, Stützen, Rand und Skalierung festgelegt wurden. Eine Regenbogenspulen-Farbzyklus-Schätzung vor der Stützgenerierung kann sichtbar falsch sein, weil das Stützmaterial einen Teil der Farbsequenz vor und während des Objekts verbraucht.' },

    { type: 'title', text: 'Farbzykluslänge bei Regenbogen-Filamentspulen verstehen', level: 2 },
    { type: 'paragraph', html: 'Die Farbzykluslänge ist die Filamentstrecke, die benötigt wird, damit sich die Sequenz wiederholt. Bei einer sechsfarbigen Regenbogenspule könnte ein Zyklus Rot, Orange, Gelb, Grün, Blau, Violett durchlaufen und dann zu Rot zurückkehren. Der Zyklus kann kurz genug sein für mehrere Übergänge in einer kleinen Figur oder lang genug, sodass ein mittlerer Druck nur einen langsamen Farbwechsel zeigt. Ein <strong>Regenbogenspulen-Farbzyklus-Rechner</strong> ist am nützlichsten, wenn dieser Wert realistisch ist.' },
    { type: 'paragraph', html: 'Nicht alle Übergangsfilamente haben gleichmäßige Farbzonen. Manche Produkte mischen allmählich mit langen Verläufen, während andere stärkere Blöcke aufweisen. Der Rechner behandelt den vollständigen Zyklus als gleichmäßig verteilte Farbbänder, da dies die praktischste Schätzung allein aus Slicer-Daten ist. Wenn deine Spule ungleichmäßige Abschnitte hat, verwende die Z-Karte als Phasenleitfaden und erwarte, dass der tatsächliche visuelle Verlauf weicher oder asymmetrischer ist.' },
    { type: 'comparative', columns: 3, items: [
      { title: 'Kurzzyklus Regenbogen', description: 'Am besten für Miniaturen, Ornamente, kleine Vasen und Namensschilder. Mehrere Farbwechsel mit weniger Material möglich.', icon: 'mdi:weather-sunset-up', points: ['Schnelle sichtbare Übergänge', 'Kann auf großen, flachen Flächen unruhig wirken'] },
      { title: 'Mittelzyklus Regenbogen', description: 'Eine ausgewogene Wahl für Schreibtischobjekte und mittlere Skulpturen. Ergibt meist ein bis drei größere Übergänge.', icon: 'mdi:palette-swatch', highlight: true, points: ['Vorhersagbar bei üblichen Drucken', 'Gut für 100-300 g Objekte'] },
      { title: 'Langzyklus Regenbogen', description: 'Besser für hohe Vasen, große Drachen, Lampen und Einwanddrucke, die langsame, fließende Verläufe benötigen.', icon: 'mdi:palette-outline', points: ['Sanfter Farbverlauf', 'Kleine Modelle bleiben möglicherweise einfarbig'] },
    ] },
    { type: 'glossary', items: [
      { term: 'Farbzyklus', definition: 'Die Filamentlänge, die benötigt wird, damit die vollständige Farbsequenz von einer Startfarbe zurück zur selben Farbe wiederholt wird.' },
      { term: 'Phase', definition: 'Die aktuelle Position innerhalb des Farbzyklus in dem Moment, in dem der sichtbare Teil zu drucken beginnt.' },
      { term: 'Übergangsband', definition: 'Ein vertikaler Bereich des gedruckten Objekts, in dem sich das geschätzte Farbsegment entlang der Z-Achse ändert.' },
      { term: 'Startversatz', definition: 'Die Filamentlänge, die bereits vor Beginn des Modells verbraucht wurde, einschließlich vorheriger Drucke, Reinigung, Rand, Rock oder manuellem Trimmen.' },
    ] },

    { type: 'title', text: 'So schätzt du die Farbübergangsposition entlang der Z-Achse', level: 2 },
    { type: 'paragraph', html: 'Die Z-Karte ist ein Schätzer, kein Slicer-Simulator. Sie geht davon aus, dass der Materialverbrauch proportional über die Druckhöhe verteilt ist. Das ist ein gutes Modell erster Ordnung für viele Vasenmodus-Drucke, Skulpturen mit gleichmäßigen Querschnitten und dekorative Objekte. Es wird ungenauer, wenn das Modell eine schwere Basis, einen hohlen Mittelteil, eine dichte Oberseite oder große Stützen aufweist, die Material ungleichmäßig über die Höhe verbrauchen.' },
    { type: 'paragraph', html: 'Bei einem Modell mit weitgehend gleichmäßigem Querschnitt ergibt die Division der Druckhöhe durch die Farbzyklen eine intuitive Antwort: Wenn ein 160-mm-Objekt zwei vollständige Farbzyklen verwendet, belegt jeder Zyklus etwa 80 mm Z-Höhe. Bei nur 0,4 Zyklen zeigt der Druck weniger als die Hälfte der Regenbogensequenz. Bei 4 Zyklen wiederholen sich die Farben häufig und erzeugen eher einen gestreiften Look als einen einzelnen glatten Verlauf.' },
    { type: 'list', icon: 'mdi:arrow-up-down', items: [
      'Verwende die gedruckte Z-Höhe, nicht die gesamte Maschinenverfahrhöhe.',
      'Füge Rand- oder Floßverbrauch als Startversatz hinzu, wenn diese Merkmale vor dem Objekt gedruckt werden.',
      'Berechne bei Multi-Objekt-Platten das kombinierte Slicing-Gewicht, wenn die Objekte schichtweise nacheinander gedruckt werden.',
      'Berechne bei sequenziellem Druck jedes Objekt einzeln und erhöhe den Startversatz für das nächste Objekt.',
      'Füge bei einem Reinigungsturm oder einer Mehrfarben-Abfallstruktur die geschätzte Masse je nach Druckzeitpunkt zum Versatz oder Gesamtverbrauch hinzu.',
    ] },
    { type: 'card', icon: 'mdi:layers-triple', title: 'Warum der Boden nicht mit der vorhergesagten ersten Farbe übereinstimmen kann', html: 'Viele Drucker reinigen, ziehen eine Prime-Linie, drucken einen Rock oder einen Rand vor der ersten sichtbaren Wand. Diese Merkmale verbrauchen Filament und verschieben die Startphase. Wenn die erste sichtbare Schicht eine bestimmte Farbe haben muss, miss oder schätze diesen Vorabdruckverbrauch und gib ihn als Startversatz ein.' },

    { type: 'title', text: 'Dichte, Durchmesser und warum zwei 180-g-Drucke unterschiedliche Filamentlängen verbrauchen können', level: 2 },
    { type: 'paragraph', html: 'Dieselbe Masse kann unterschiedliche Filamentlängen darstellen, weil die Dichte das Volumen pro Gramm verändert. PLA wird oft mit etwa 1,24 g/cm3 geschätzt, PETG mit etwa 1,27 g/cm3, und einige Seiden- oder gefüllte Mischungen können sich stark genug unterscheiden, um Übergänge bei hohen Drucken um mehrere Millimeter zu verschieben.' },
    { type: 'paragraph', html: 'Nicht alle Übergangsfilamente haben gleichmäßige Farbzonen. Der Rechner behandelt den vollständigen Zyklus als gleichmäßig verteilte Farbbänder. Wenn deine Spule ungleichmäßige Abschnitte hat, verwende die Z-Karte als Leitfaden.' },
    { type: 'table', headers: ['Materialfamilie', 'Planungsdichte', 'Hinweis zur Verlaufsplanung'], rows: [
      ['PLA-Regenbogen', '1,24 g/cm3', 'Gute Voreinstellung für die meisten Standard-Regenbogenspulen'],
      ['Seiden-PLA', '1,18-1,24 g/cm3', 'Pigmente und Additive variieren; Markendaten prüfen wenn verfügbar'],
      ['PETG-Mehrfarbig', '1,25-1,29 g/cm3', 'Etwas dichter, daher kann dieselbe Grammzahl weniger Länge verbrauchen'],
      ['Gefülltes PLA', 'Variiert stark', 'Holz-, Metall-, Stein- oder Glitzer-Additive können die Schätzung verschieben'],
    ] },
    { type: 'proscons', title: 'Verwendung des Slicer Gewichts als Haupteingabe', items: [
      { pro: 'Es enthält echte Druckeinstellungen wie Wände, Infill, Stützen und Skalierung.', con: 'Es hängt davon ab, dass das Dichteprofil des Slicers einigermaßen genau ist.' },
      { pro: 'Es ist schneller als manuelles Summieren der Extrusionsbewegungen aus dem G-Code.', con: 'Es zeigt keine ungleichmäßige Materialverteilung auf jeder Schicht.' },
      { pro: 'Es funktioniert mit verschiedenen Modellen und Slicern bei minimaler Dateneingabe.', con: 'Prime-Linien, Reinigung und fehlgeschlagene Starts müssen separat berücksichtigt werden.' },
    ] },

    { type: 'title', text: 'So verwendest du den Rechner für einen echten Regenbogen-Filamentdruck', level: 2 },
    { type: 'paragraph', html: 'Slice das Modell mit den endgültigen Einstellungen. Kopiere das geschätzte Filamentgewicht aus dem Slicer, gib dann die Materialdichte und den Filamentdurchmesser ein. Gib die gemessene oder angegebene Farbzykluslänge ein. Gib schließlich die gedruckte Z-Höhe des Modells ein. Der Rechner zeigt Filamentverbrauch, Anzahl der Zyklen im Teil, Gramm pro vollständigem Farbzyklus und geschätzte Z-Distanz pro Zyklus an.' },
    { type: 'list', icon: 'mdi:check-circle', items: [
      'Bei weniger als 0,25 Zyklen im Teil ist eher ein subtiler Farbwechsel als ein Regenbogenobjekt zu erwarten.',
      'Bei etwa 1,0 Zyklen im Teil kann das Modell einen vollständigen Durchlauf durch die Spulenpalette zeigen.',
      'Bei 2,0 bis 4,0 Zyklen im Teil zeigt das Objekt wiederholte Farbbänder.',
      'Wenn Z pro Zyklus größer als die Modellhöhe ist, vergrößere den Maßstab, füge Masse hinzu oder wähle eine Spule mit schnellerem Übergang.',
      'Wenn Z pro Zyklus sehr klein ist, reduziere den Infill oder wähle eine Spule mit längerem Übergang für glattere Verläufe.',
    ] },
    { type: 'summary', title: 'Schnelle Planungsregel', items: [
      'Mehr Gramm bei gleicher Höhe komprimieren den Regenbogen vertikal.',
      'Mehr Höhe bei gleicher Grammzahl streckt den Verlauf.',
      'Kürzere Farbzykluslänge erzeugt mehr Übergänge.',
      'Der Startversatz bestimmt, welcher Teil des Regenbogens zuerst erscheint.',
    ] },
    { type: 'message', title: 'Für Ausstellungsstücke', ariaLabel: 'Planungshinweis für Ausstellungsstücke', html: 'Wenn die Farbgrenze auf einem bestimmten Merkmal landen muss, drucke eine kleine vertikale Testsäule mit demselben Slicer-Profil. Vergleiche die gemessenen Bandhöhen mit der Schätzung und passe die Zykluslänge oder den Startversatz an, bevor du den vollständigen Druck startest.' },

    { type: 'title', text: 'Häufige Long-Tail-Fragen zur Regenbogenspulen-Farbplanung', level: 2 },
    { type: 'paragraph', html: '<strong>Wie viel Regenbogen-Filament brauche ich für einen vollständigen Farbzyklus?</strong> Multipliziere die Zykluslänge mit Gramm pro Meter für deinen Filamentdurchmesser und deine Dichte. Bei Standard-1,75-mm-PLA entspricht ein Meter etwa 3 g, also liegt ein 30-m-Zyklus bei etwa 90 g. Der Rechner führt diese Umrechnung direkt durch, da reale Dichte und Durchmesser das Ergebnis verändern.' },
    { type: 'paragraph', html: '<strong>Warum blieb mein Druck meist einfarbig?</strong> Das Teil hat wahrscheinlich weniger als einen nennenswerten Bruchteil des Spulenzyklus verbraucht. Kleine Modelle, geringer Infill und sehr langsam übergängiges Regenbogen-Filament können innerhalb von ein oder zwei benachbarten Farben bleiben. Das Hochskalieren des Modells, der gleichzeitige Druck mehrerer Objekte, mehr Wände oder die Wahl einer Spule mit schnellerem Zyklus können die Übergänge sichtbarer machen.' },
    { type: 'paragraph', html: '<strong>Kann ich eine bestimmte Farbe an der Oberseite des Modells erzwingen?</strong> Du kannst sie mit dem Startversatz schätzen, aber eine genaue Platzierung erfordert die Kenntnis der aktuellen Spulenphase. Wenn die Oberseite beispielsweise blau sein soll, musst du das Filament möglicherweise durch Drucken eines Reinigungsobjekts vorschieben, von einer bekannten sichtbaren Farbe ausgehen oder einen anderen Modellmaßstab wählen.' },
    { type: 'diagnostic', variant: 'warning', title: 'Große Geometrieänderungen reduzieren die Z Karten Genauigkeit', badge: 'Modellform', html: 'Ein schwerer Sockel und eine dünne obere Statue verbrauchen möglicherweise das meiste Material unten, sodass die tatsächlichen Übergänge tiefer liegen als eine proportionale Z-Schätzung vermuten lässt. Verwende für solche Modelle den Rechner für die Gesamtzykluszahl und überprüfe dann die Slicer-Schichtvorschau, um zu verstehen, wo das Extrusionsvolumen konzentriert ist.' },
  ],
  faq: [
    {
      question: 'Was ist die Regenbogen-Filament-Übergangslänge?',
      answer: 'Es ist die Filamentmenge, meist in Metern oder Fuß gemessen, die die Spule benötigt, um eine vollständige Farbsequenz zu durchlaufen und zur Startfarbe zurückzukehren.',
    },
    {
      question: 'Warum fragt der Rechner nach dem Teilgewicht statt nach der Druckzeit?',
      answer: 'Farbwechsel hängen von der Filamentlänge ab, die der Extruder verbraucht. Das Slicer-Gewicht kann in Volumen und dann in Filamentlänge umgerechnet werden, während die Druckzeit den Materialverbrauch nicht direkt beschreibt.',
    },
    {
      question: 'Wie genau ist die Z-Übergangskarte?',
      answer: 'Sie ist ein Planungsschätzer. Am genauesten ist sie bei Modellen mit ziemlich gleichmäßiger Materialverteilung über die Höhe und weniger genau bei Formen mit dichter Basis, hohlen Abschnitten, Stützen oder großen Reinigungsstrukturen.',
    },
    {
      question: 'Kann ich das für Seiden-PLA oder PETG-Regenbogen-Filament verwenden?',
      answer: 'Ja. Wähle eine Materialvoreinstellung oder gib die Dichte aus dem Spulen-Datenblatt ein. Die Dichte verändert die geschätzte Filamentlänge und damit die vorhergesagte Farbzyklusanzahl.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Modell slicen', text: 'Verwende die endgültigen Slicer-Einstellungen und kopiere das geschätzte Teilgewicht.' },
    { name: 'Spulendaten eingeben', text: 'Stelle die Farbzykluslänge, Dichte, Filamentdurchmesser und einen eventuellen Startversatz ein.' },
    { name: 'Z-Karte lesen', text: 'Nutze Zyklen, Z pro Zyklus und sichtbare Bänder, um zu entscheiden, ob der Verlauf subtil, vollständig oder wiederholt sein wird.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Regenbogen-Filament-Verlaufslängen-Rechner',
      description: 'Schätze die Farbzyklusnutzung und Übergangspositionen von Regenbogen-Filament entlang der Z-Achse eines 3D-Drucks.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Was ist die Regenbogen-Filament-Übergangslänge?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Es ist die Filamentmenge, die die Spule benötigt, um eine vollständige Farbsequenz zu durchlaufen und zur Startfarbe zurückzukehren.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Regenbogen-Filament-Verlaufslängen-Rechner für 3D-Drucke',
      description: 'Schätze Regenbogen-Filament-Farbzyklen, Spulenverbrauch und wo Farbverläufe entlang der Z-Höhe eines geslicten 3D-Drucks erscheinen.',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Modell slicen', text: 'Verwende die endgültigen Slicer-Einstellungen und kopiere das geschätzte Teilgewicht.' },
        { '@type': 'HowToStep', position: 2, name: 'Spulendaten eingeben', text: 'Stelle die Farbzykluslänge, Dichte, Filamentdurchmesser und einen eventuellen Startversatz ein.' },
        { '@type': 'HowToStep', position: 3, name: 'Z-Karte lesen', text: 'Nutze Zyklen, Z pro Zyklus und sichtbare Bänder, um zu entscheiden, ob der Verlauf subtil, vollständig oder wiederholt sein wird.' }
      ],
    },
  ],
};
