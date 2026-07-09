import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { TreeSupportDensityCalculatorUI } from '../ui';

export const content: ToolLocaleContent<TreeSupportDensityCalculatorUI> = {
  slug: 'baumstuetzen-dichte-rechner',
  title: 'Baumstützen Dichte Rechner',
  description: 'Schätze den Kronendurchmesser, das Stützvolumen, die Astanzahl, den Kontaktdurchmesser und die Stabilität von Baumstützen anhand der Stützhöhe, des Astwinkels, der Astdichte und des Stammbasisdurchmessers.',
  ui: {
    unitSystemLabel: 'Einheiten',
    metricLabel: 'Metrisch',
    imperialLabel: 'US',
    presetsLabel: 'Voreinstellungen',
    miniaturePresetLabel: 'Mini',
    balancedPresetLabel: 'Ausgewogen',
    tallPresetLabel: 'Hoch',
    supportHeightLabel: 'Stützpunkthöhe',
    branchAngleLabel: 'Astwinkel',
    branchDensityLabel: 'Astdichte',
    baseTrunkDiameterLabel: 'Stammbasisdurchmesser',
    canopyDiameterLabel: 'Kronendurchmesser oben',
    supportVolumeLabel: 'Geschätztes Stützvolumen',
    stabilityLabel: 'Stabilität',
    filamentMassLabel: 'Filamentmasse',
    branchCountLabel: 'Anzahl Äste',
    contactDiameterLabel: 'Kontaktdurchmesser',
    trunkVolumeLabel: 'Stammvolumen',
    branchVolumeLabel: 'Astvolumen',
    stabilityScoreSeparator: '-',
    stabilityScoreSuffix: '/100',
    stabilityLow: 'geringe Stabilität',
    stabilityBalanced: 'ausgewogene Stabilität',
    stabilityHigh: 'hohe Stabilität',
    controlsAriaLabel: 'Baumstützen-Dichte-Eingaben',
    resultsAriaLabel: 'Baumstützen-Dichte-Ergebnisse',
    copyButton: 'Stützenkonfiguration kopieren',
    copiedButton: 'Kopiert',
    copiedSummaryTemplate: 'Baumstützen-Schätzung: Krone {canopy}, Volumen {volume}, Stabilität {stability} ({score}/100).',
    millimetersUnit: 'mm',
    inchesUnit: 'in',
    cubicCentimetersUnit: 'cm³',
    cubicInchesUnit: 'in³',
    gramsUnit: 'g',
    ouncesUnit: 'oz',
    degreesUnit: '°',
    percentUnit: '%',
  },
  seo: [
    { type: 'title', text: 'Wie die Dichte von Baumstützen den Filamentverbrauch und die Stabilität beeinflusst', level: 2 },
    {
      type: 'paragraph',
      html: 'Baumstützen sind effizient, weil sie die Aufgabe in einen <strong>Lastpfad</strong> und ein <strong>Kontaktmuster</strong> aufteilen. Der Stamm trägt den größten Teil der vertikalen Last von der Bauplatte, während kleinere Äste sich nur dort zu Überhängen ausbreiten, wo Kontakt benötigt wird. Ein Baumstützen-Dichte-Rechner ist nützlich, weil die sichtbarsten Slicer-Einstellungen wie Astwinkel und Astdichte mit der Stützpunkthöhe und dem Stammbasisdurchmesser interagieren. Eine geringe Astdichte kann Filament sparen, reduziert aber auch die Anzahl der Pfade, die Wackeln widerstehen. Ein steiler Astwinkel kann hohe Merkmale mit weniger horizontaler Ausdehnung erreichen, konzentriert die Last jedoch nahe am Stamm und kann bei hohen schmalen Stützen versagen.',
    },
    {
      type: 'paragraph',
      html: 'Der Rechner schätzt drei Werte, die in der Slicer-Vorschau schwer mit bloßem Auge zu beurteilen sind: den oberen Kronendurchmesser, das Stützvolumen und die Stabilitätsbewertung. Der obere Kronendurchmesser zeigt, wie breit die Astkrone nahe am Modell wird. Das Stützvolumen schätzt das benötigte Druckmaterial für Stamm und Äste. Die Stabilität kombiniert Winkel, Dichte, Basisdurchmesser, Höhe und Kronenausdehnung zu einer praktischen Bewertung. Das Ziel ist nicht, die Slicer-Engine zu ersetzen; das Ziel ist, Startwerte vor dem Slicen zu wählen, damit du weniger Zeit mit dem Iterieren von Stützenvorschauen verbringst.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '35-50°', label: 'übliche Astwinkel-Spanne für ausgewogene Reichweite und Festigkeit' },
        { value: '25-55%', label: 'praktische Astdichte-Bandbreite für viele FDM-Drucke' },
        { value: '2-8 mm', label: 'typischer Stammbasisdurchmesser für Hobby-Drucker-Baumstützen' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Dies ist ein Planungsrechner, kein Slicer Geometrie Export',
      html: 'Jeder Slicer erzeugt Baumstützen anders. Cura, PrusaSlicer, Bambu Studio, OrcaSlicer und andere Werkzeuge verwenden unterschiedliche Namen und Algorithmen für Astgenerierung, Kollisionsvermeidung, Stützschnittstelle und Kontaktpunkte. Nutze die Ausgabe als Abstimmungsrichtung und bestätige die endgültige Geometrie in der Slicer-Vorschau vor dem Druck.',
    },
    { type: 'title', text: 'Astwinkel: Reichweite, Lastpfad und Ausfallrisiko', level: 2 },
    {
      type: 'paragraph',
      html: 'Der Astwinkel steuert, wie aggressiv sich eine Baumstütze vom Stamm zum Modell ausbreitet. Ein niedrigerer Winkel hält die Äste vertikaler, was normalerweise die Steifigkeit verbessert und seitliches Wackeln reduziert. Ein höherer Winkel reicht weiter über leeren Raum, was die Anzahl der benötigten Stämme reduzieren kann, aber die Biegebelastung erhöht und lange ungestützte Astsegmente erzeugen kann. Bei hohen Stützen kann eine kleine Änderung von 50 auf 60 Grad einen stabilen Baum in eine flexible Struktur verwandeln, die vibriert, wenn die Düse sie berührt.',
    },
    {
      type: 'paragraph',
      html: 'Der beste Astwinkel hängt von der Stützpunkthöhe ab. Ein kurzer Baum unter einem kleinen Überhang kann einen weiteren Winkel verwenden, weil die Astlänge begrenzt ist. Ein hoher Stützpunkt benötigt einen konservativeren Winkel, besonders bei flexiblen Materialien, schnellen Bewegungen oder einer Bettoberfläche, die Stützen leicht freigibt. Wenn der Stützpunkt hoch und der Astwinkel weit ist, erhöhe den Stammbasisdurchmesser oder die Dichte, damit die Astkrone nicht von einer dünnen Säule getragen wird.',
    },
    {
      type: 'table',
      headers: ['Astwinkel', 'Beste Verwendung', 'Risiko bei Übernutzung', 'Anpassung'],
      rows: [
        ['20-35°', 'Hohe Stützen und schmale Türme', 'Kann mehr Stämme erfordern, da Reichweite begrenzt', 'Dichte nur erhöhen, wo Kontaktabdeckung schlecht ist'],
        ['36-50°', 'Allgemeine Baumstützen-Abstimmung', 'Normalerweise ausgewogen, hängt aber von der Höhe ab', 'Hier für die meisten PLA- und PETG-Drucke beginnen'],
        ['51-65°', 'Breite Überhänge mit moderater Höhe', 'Äste können sich bei Bewegung oder Kontakt biegen', 'Dickeren Stammbasis und moderate Dichte verwenden'],
        ['66-75°', 'Spezialfälle mit sehr weiter Reichweite', 'Hohe Biegebelastung und schwache Astwurzeln', 'Sorgfältig in der Vorschau prüfen und Stützendruck verlangsamen'],
      ],
    },
    {
      type: 'tip',
      title: 'Reichweite nicht allein durch den Winkel erzwingen',
      html: 'Wenn Äste weit reisen müssen, versuche einen zusätzlichen Stamm hinzuzufügen oder die Kronendichte zu erhöhen, bevor du den Winkel an die Obergrenze bringst. Ein zweiter nahegelegener Stamm verbraucht oft weniger Material als ein überdehnter Baum, der eine schwere Basis zum Überleben braucht.',
    },
    { type: 'title', text: 'Astdichte: Kontaktabdeckung ohne Stützennarben', level: 2 },
    {
      type: 'paragraph',
      html: 'Die Astdichte beschreibt, wie viel Aststruktur nahe der gestützten Fläche erzeugt wird. Geringe Dichte reduziert Filament und erleichtert die Entfernung, kann aber Überhangkanten unzureichend abstützen. Hohe Dichte verbessert die Abdeckung und verteilt die Last auf mehrere Kontakte, erhöht aber Druckzeit, Kontaktnarben und die Wahrscheinlichkeit, dass Stützen mit empfindlichen Oberflächen verschmelzen. Die richtige Dichte ist daher nicht die höchste Zahl, die sicher aussieht; es ist die niedrigste Zahl, die Überhänge vor dem Durchhängen bewahrt und gleichzeitig ausreichend Steifigkeit erhält.',
    },
    {
      type: 'paragraph',
      html: 'Bei dekorativen Modellen kann die Dichte oft reduziert werden, da eine leichte Unterseitenstruktur akzeptabel sein kann. Bei mechanischen Teilen erfordert die Dichte mehr Sorgfalt, da ungestützte Löcher, Fasen und Passflächen die Passgenauigkeit beeinträchtigen können. Auch die Materialien spielen eine Rolle. PLA verträgt leichtere Stützen, da es steif ist und saubere Brücken druckt. PETG benötigt oft größere Luftspalte und einen sorgfältigen Kontaktdurchmesser, da es stark an Stützen haftet. TPU und flexible Filamente benötigen konservative Geometrie, da dünne Äste abgelenkt werden können, anstatt den Überhang in Position zu halten.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Geringe Dichte',
          description: 'Am besten, wenn Entfernungsqualität und Filamenteinsparung wichtiger sind als perfekte Unterseiten-Oberfläche.',
          points: ['Schnellster Stützendruck', 'Schwächste Kontaktabdeckung', 'Nützlich für organische Miniaturen'],
        },
        {
          title: 'Ausgewogene Dichte',
          description: 'Eine praktische Voreinstellung für gemischte Geometrie, bei der Überhänge gestützt werden müssen, aber die Modelloberfläche sauber bleiben soll.',
          highlight: true,
          points: ['Gute Materialeffizienz', 'Moderater Entfernungsaufwand', 'Funktioniert für viele PLA- und PETG-Jobs'],
        },
        {
          title: 'Hohe Dichte',
          description: 'Nützlich für schwere Überhänge, hohe Stützpunkte und fragile Kontaktbereiche, erhöht aber Narben.',
          points: ['Beste Lastverteilung', 'Mehr Volumen und Druckzeit', 'Höheres Risiko verschmolzener Kontakte'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Erhöhung der Astdichte',
      items: [
        { pro: 'Mehr Kontaktpunkte reduzieren Durchhängen unter gekrümmten Überhängen.', con: 'Mehr Kontaktpunkte können nach der Entfernung sichtbarere Spuren hinterlassen.' },
        { pro: 'Eine dichtere Krone verteilt die Last auf mehrere Äste.', con: 'Der Slicer kann eine sperrige Krone erzeugen, die schwer mit Seitenschneidern zu erreichen ist.' },
        { pro: 'Hohe Stützen werden weniger empfindlich gegenüber Düsenberührungen.', con: 'Druckzeit und Filamentverbrauch steigen schnell, wenn Dichte mit einer großen Krone kombiniert wird.' },
      ],
    },
    { type: 'title', text: 'Stammbasisdurchmesser und warum hohe Baumstützen versagen', level: 2 },
    {
      type: 'paragraph',
      html: 'Der Stammbasisdurchmesser ist das Fundament des Baumes. Ein dünner Stamm kann für eine kurze Stütze völlig ausreichen, aber derselbe Durchmesser wird riskant, wenn der gestützte Punkt hoch ist. Höhe erhöht die Hebelwirkung: Ein kleiner Düsenaufprall, eine Bewegungsberührung oder Kühlventilator-Vibration erzeugt mehr Bewegung an der Krone. Ist der Stamm für die Höhe zu dünn, kann die Stütze nicht sofort brechen; sie kann sich langsam neigen, den Kontaktpunkt verschieben oder sich vom Bett lösen, bevor der Überhang fertig ist.',
    },
    {
      type: 'paragraph',
      html: 'Ein größerer Stammdurchmesser verbessert die Steifigkeit und Betthaftung, verbraucht aber auch Material. Der Rechner behandelt den Stammdurchmesser als Stabilitätseingabe und nicht als kosmetische Einstellung. Wenn die Stabilitätsbewertung niedrig ist, ist eine Durchmessererhöhung oft effektiver als die Erhöhung der Astdichte, da sie den Lastpfad von der Bauplatte stärkt. Wenn die Bewertung bereits hoch ist, kann ein größerer Stamm die Entfernung nur erschweren und Filament verschwenden.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Stützpunkthöhe', definition: 'Der vertikale Abstand von der Bauplatte zum Modellbereich, der Stützung benötigt.' },
        { term: 'Astwinkel', definition: 'Der Winkel, den Äste beim Ausbreiten vom Stamm zu den Stützkontaktpunkten verwenden.' },
        { term: 'Astdichte', definition: 'Die relative Menge an Aststruktur und Kontaktabdeckung, die nahe der gestützten Fläche erzeugt wird.' },
        { term: 'Stammbasisdurchmesser', definition: 'Der ungefähre Durchmesser der Hauptstützsäule des Baumes an ihrem Startpunkt auf der Bauplatte.' },
        { term: 'Kronendurchmesser', definition: 'Die geschätzte Breite der oberen Astkrone nahe dem Modellüberhang.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Eine hohe Krone auf einem dünnen Stamm ist die klassische Baumstützen Versagensart',
      html: 'Wenn der Kronendurchmesser um ein Vielfaches größer ist als der Stammdurchmesser, verhält sich die Stütze wie eine kopflastige Struktur. Füge einen weiteren Stamm hinzu, reduziere den Astwinkel oder erhöhe den Basisdurchmesser, bevor du einfach mehr Astdichte hinzufügst.',
    },
    { type: 'title', text: 'Oberer Kronendurchmesser und Modellfreiheit', level: 2 },
    {
      type: 'paragraph',
      html: 'Der obere Kronendurchmesser ist wichtig, weil Baumstützen um das Modell herum passen, Kollisionen vermeiden und entfernbar bleiben müssen. Eine große Krone kann den Überhang gut stützen, kann aber auch Details umschließen, in Hohlräume eindringen oder Äste erzeugen, die schwer zu brechen sind. Eine kleine Krone ist leichter zu entfernen, kann aber die Kontaktkraft auf wenige Punkte konzentrieren und Kanten durchhängen lassen. Der Rechner schätzt den Kronendurchmesser aus Stützhöhe, Astwinkel, Dichte und Basisdurchmesser, damit du vorhersagen kannst, ob die erzeugte Stützenkrone kompakt oder ausladend sein wird.',
    },
    {
      type: 'paragraph',
      html: 'Die Slicer-Vorschau ist für die Kronenfreiheit unerlässlich. Achte auf Äste, die durch kleine Löcher, unter erhabenem Text, um Finger von Figuren oder zwischen mechanischen Merkmalen verlaufen. Wenn ein Ast einen Bereich erreichen kann, kann er sich dort auch verfangen. Geringere Dichte, kleinerer Kontaktdurchmesser, engere Stützenblocker oder manuelles Malen können verhindern, dass Baumstützen schwieriger zu entfernen sind als Standardgitterstützen.',
    },
    {
      type: 'table',
      headers: ['Kronenverhalten', 'Wahrscheinliche Ursache', 'Druckfolge', 'Lösung'],
      rows: [
        ['Krone ist zu schmal', 'Winkel und Dichte sind konservativ', 'Überhangkanten hängen zwischen Kontaktpunkten durch', 'Dichte erhöhen oder manuelle Stützpunkte hinzufügen'],
        ['Krone ist breit aber instabil', 'Hoher Winkel bei einer hohen Stütze', 'Düsenkontakt kann die Struktur erschüttern', 'Winkel reduzieren oder Stammdurchmesser erhöhen'],
        ['Krone umschließt Details', 'Hohe Dichte um komplexe Geometrie', 'Stützenentfernung hinterlässt sichtbare Narben', 'Stützenblocker verwenden oder Dichte reduzieren'],
        ['Krone berührt Modellseitenwände', 'Stützenfreiheit zu gering', 'Äste können mit dem Teil verschmelzen', 'X/Y-Abstand erhöhen oder Kontaktdurchmesser reduzieren'],
      ],
    },
    {
      type: 'card',
      title: 'Der Kronendurchmesser ist eine Vorschauwarnung',
      html: 'Ein großer geschätzter Kronendurchmesser ist nicht automatisch schlecht. Er bedeutet, dass die Slicer-Vorschau Aufmerksamkeit verdient, weil die Stützenkrone zur dominierenden Herausforderung bei der Entfernung werden kann.',
    },
    { type: 'title', text: 'Stützvolumen, Filamentlänge und Druckzeit', level: 2 },
    {
      type: 'paragraph',
      html: 'Das Stützvolumen sind die praktischen Kosten der gewählten Einstellungen. Eine Baumstütze kann in der Vorschau leicht aussehen, aber eine dichte Krone und ein dicker Stamm können trotzdem erhebliches Filament verbrauchen. Der Rechner gibt das geschätzte Volumen in Kubikzentimetern an. Dies hilft, Einstellungen vor dem Slicen zu vergleichen, besonders wenn du entscheidest, ob ein höherer Stamm, eine höhere Dichte oder zusätzliche Astreichweite das Material wert ist.',
    },
    {
      type: 'paragraph',
      html: 'Volumen lässt sich nicht perfekt in Druckzeit übersetzen, da Slicer unterschiedliche Linienbreiten, Wandanzahlen, Füllmuster, Beschleunigungsgrenzen und Stützgeschwindigkeiten verwenden. Dennoch bleibt das Volumen ein starker Indikator. Wenn zwei Einstellungen ähnliche Stabilität erzeugen, aber eine viel weniger Volumen verbraucht, ist die Einstellung mit geringerem Volumen normalerweise der bessere Ausgangspunkt. Wenn die Einstellung mit geringerem Volumen auch eine niedrige Stabilitätsbewertung liefert, kann die Einsparung verschwinden, wenn der Druck fehlschlägt oder die Unterseite Nacharbeit benötigt.',
    },
    {
      type: 'summary',
      title: 'So reduzierst du das Stützvolumen sicher',
      items: [
        'Reduziere zuerst die Astdichte, wenn die Stabilitätsbewertung bereits hoch ist.',
        'Reduziere den Astwinkel, wenn die Krone sehr breit und kopflastig ist.',
        'Verwende einen kleineren Stammbasis nur bei kurzen Stützen mit moderaten Überhanglasten.',
        'Teile einen großen Baum in zwei kleinere Bäume auf, wenn die Reichweite eine sperrige Krone erzeugt.',
        'Stimme den Kontaktdurchmesser separat ab, damit Oberflächennarben keine unnötige Dichte erzwingen.',
      ],
    },
    {
      type: 'message',
      title: 'Materialeinsparung ist nur sinnvoll, wenn die Stütze überlebt',
      html: 'Eine fehlgeschlagene Stütze kostet meist mehr Filament als eine etwas stärkere. Behandle große Sparprozente als Einladung zur sorgfältigen Vorschau, nicht als Beweis, dass die leichteste Stütze automatisch richtig ist.',
    },
    { type: 'title', text: 'Baumstützen-Kontaktdurchmesser und Oberflächenqualität', level: 2 },
    {
      type: 'paragraph',
      html: 'Der Kontaktdurchmesser steuert, wie viel der Baumstütze das Modell berührt. Kleine Kontakte lassen sich sauber entfernen und reduzieren Narben, können sich aber von schweren oder heißen Überhängen lösen. Größere Kontakte halten besser und verteilen Wärme, können aber mit PETG verschweißen, erhabene Punkte auf PLA hinterlassen oder detailschädigend auf dekorativen Drucken wirken. Dieser Rechner schätzt einen Kontaktdurchmesser aus Ast- durchmesser und Dichte, damit das Ergebnis mit der Stützenstruktur verbunden bleibt, anstatt als isolierter kosmetischer Wert behandelt zu werden.',
    },
    {
      type: 'paragraph',
      html: 'Kontakteinstellungen sollten mit dem oberen Z-Abstand und dem Schnittstellenverhalten abgestimmt werden. Wenn der vertikale Spalt zu klein ist, kann selbst ein winziger Kontakt stark haften. Wenn der vertikale Spalt zu groß ist, kann ein breiter Kontakt den Überhang immer noch nicht stützen, weil das Filament Raum zum Durchhängen hat. Für funktionale Teile teste den Kontaktdurchmesser an einem Kalibrierungsüberhang aus demselben Material, derselben Düsengröße, Schichthöhe und Kühleinstellungen, die für das echte Modell verwendet werden.',
    },
    {
      type: 'list',
      items: [
        'Verwende kleinere Kontaktdurchmesser auf sichtbaren kosmetischen Oberflächen.',
        'Verwende größere Kontakte unter schweren Brücken, dicken Überhängen oder hochtemperatur Materialien.',
        'Erhöhe den oberen Z-Abstand, bevor du die Baumdichte beschuldigst, wenn Stützen schwer zu entfernen sind.',
        'Reduziere die Stützschnittstellengeschwindigkeit, wenn Kontaktpunkte während des Drucks abgelöst werden.',
        'Prüfe, ob der Slicer diese Einstellung Kontaktdurchmesser, Spitzendurchmesser oder Stützschnittstellenkontakt nennt.',
      ],
    },
    {
      type: 'tip',
      title: 'PETG erfordert besondere Vorsicht',
      html: 'PETG verbindet sich aggressiv mit Stützmaterial, das aus demselben Filament gedruckt wurde. Eine moderate Baumdichte mit sorgfältigem Z-Abstand funktioniert oft besser als eine sehr dichte Krone mit großen Kontakten.',
    },
    { type: 'title', text: 'Empfohlener Arbeitsablauf für Slicer-Baumstützen', level: 2 },
    {
      type: 'paragraph',
      html: 'Beginne mit der Eingabe der Höhe des höchsten Stützpunktes, nicht der Gesamtmodellhöhe. Ein Modell kann hoch sein, während der gestützte Bereich nahe am Bett liegt, oder kurz, während ein kritischer Überhang hoch auf einer schmalen Insel sitzt. Wähle dann einen Astwinkel im ausgewogenen Bereich und stelle die Astdichte entsprechend der benötigten Oberflächenqualität ein. Lege schließlich den Stammbasisdurchmesser basierend auf Höhe und erwarteter Last fest. Der Rechner zeigt, ob die Kombination volumen-effizient, stabil oder riskant ist.',
    },
    {
      type: 'paragraph',
      html: 'Wechsle nach der Berechnung zur Slicer-Vorschau und inspiziere die erzeugte Baumstütze von der ersten Stützschicht bis zum endgültigen Kontakt. Achte auf schwebende Anfänge, sehr dünne Astwurzeln, Äste, die zu nahe am Modell vorbeiführen, und ungestützte Überhanginseln. Wenn die Stütze im Rechner instabil ist und in der Vorschau spärlich aussieht, verstärke den Stamm oder reduziere den Astwinkel. Wenn die Stütze stabil aber optisch sperrig ist, reduziere die Dichte und prüfe, ob das Kontaktmuster den Überhang noch abdeckt.',
    },
    {
      type: 'diagnostic',
      variant: 'success',
      title: 'Eine gute Baumstützen Einstellung ist in der Vorschau langweilig',
      html: 'Die Vorschau sollte einen klaren Stamm, kurze Astpfade, ausreichend Kontakte unter dem Überhang und offenen Raum um Details zeigen. Wenn der Baum visuell dramatisch aussieht, macht er möglicherweise zu viel.',
    },
    {
      type: 'summary',
      title: 'Schnelle Abstimmungssequenz',
      items: [
        'Gib die Stützpunkthöhe ein, nicht nur die Modellhöhe.',
        'Beginne nahe 45-50° für den Astwinkel.',
        'Verwende 30-45% Dichte für allgemeine PLA-Drucke, dann basierend auf der Vorschau anpassen.',
        'Erhöhe den Stammdurchmesser, bevor du hohe Stützen extrem dicht machst.',
        'Bestätige Kontaktdurchmesser und Freiheit in der tatsächlichen Slicer-Vorschau.',
      ],
    },
    { type: 'title', text: 'Wann Baumstützen besser sind als normale Stützen', level: 2 },
    {
      type: 'paragraph',
      html: 'Baumstützen sind am stärksten, wenn Stützung in isolierten Bereichen benötigt wird: Figurenarme, Helme, Kreaturenhörner, organische Skulpturen, dekorative Bögen und gekrümmte Überhänge. Sie vermeiden das Füllen des gesamten Bereichs unter dem Modell, verbrauchen daher oft weniger Filament und hinterlassen weniger Narben als klobige Gitterstützen. Sie sind auch nützlich, wenn Standardstützen eine große Wand erzeugen würden, die schwer von einer gekrümmten Oberfläche zu entfernen ist.',
    },
    {
      type: 'paragraph',
      html: 'Standardstützen können dennoch besser sein für flache technische Überhänge, breite horizontale Regale und Oberflächen, die eine gleichmäßige Stützschnittstelle benötigen. Eine Baumstützenkrone berührt ausgewählte Punkte, während normale Stützen eine gleichmäßigere Ebene bieten können. Wenn die Unterseite maßgenau sein muss, vergleiche beide Ansätze. Ein dichter Baum kann mehr Material verbrauchen als eine einfache rechtwinklige Stütze, wenn der Überhang breit und flach ist.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Baumstützen',
          description: 'Am besten für organische Geometrie, spärliche Kontaktbereiche und Modelle, bei denen Entfernungszugang wichtig ist.',
          highlight: true,
          points: ['Weniger Material bei isolierten Überhängen', 'Saubererer Zugang um gekrümmte Formen', 'Empfindlich gegenüber Astwinkel und Stammsteifigkeit'],
        },
        {
          title: 'Normale Stützen',
          description: 'Am besten für breite flache Überhänge, vorhersagbare Schnittstellen und einfache mechanische Oberflächen.',
          points: ['Gleichmäßige Unterseitenabdeckung', 'Oft einfacher zu kalkulieren', 'Können viel mehr Filament unter komplexen Modellen verbrauchen'],
        },
      ],
    },
    {
      type: 'card',
      title: 'Verwende beide Stützentypen, wenn das Modell es verlangt',
      html: 'Viele Slicer erlauben Stützbemalung, Blocker oder Modifikator-Meshes. Ein Modell kann Baumstützen für organische Merkmale und normale Stützen für eine flache technische Oberfläche verwenden.',
    },
  ],
  faq: [
    {
      question: 'Was ist ein guter Astwinkel für Baumstützen?',
      answer: 'Ein praktischer Startbereich liegt bei etwa 40-50°. Verwende niedrigere Winkel für hohe Stützen und höhere Winkel nur, wenn du mehr Reichweite benötigst und der Stamm stark genug ist.',
    },
    {
      question: 'Verbessert eine höhere Baumstützen-Dichte immer die Druckqualität?',
      answer: 'Nein. Höhere Dichte verbessert Kontaktabdeckung und Stabilität, erhöht aber auch Filament, Druckzeit und Stützennarben. Verwende die niedrigste Dichte, die den Überhang zuverlässig stützt.',
    },
    {
      question: 'Wie wähle ich den Stammbasisdurchmesser?',
      answer: 'Erhöhe den Stammbasisdurchmesser mit steigender Stützpunkthöhe. Hohe Stützen benötigen einen stärkeren Lastpfad, während kurze Stützen oft einen kleineren Stamm zur Materialeinsparung verwenden können.',
    },
    {
      question: 'Warum ist der Kronendurchmesser wichtig?',
      answer: 'Der Kronendurchmesser sagt voraus, wie breit die obere Astkrone wird. Eine breite Krone kann gut stützen, aber mit Details kollidieren, sich in Hohlräumen verfangen oder schwer zu entfernen sein.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Stützpunkthöhe eingeben', text: 'Verwende den vertikalen Abstand von der Bauplatte zum Modellbereich, der Stützung benötigt.' },
    { name: 'Astwinkel und Dichte einstellen', text: 'Wähle die geplanten Slicer-Werte für Astwinkel und Astdichte.' },
    { name: 'Stammbasisdurchmesser hinzufügen', text: 'Gib den ungefähren Hauptstammdurchmesser des Baumes ein, den der Slicer verwendet.' },
    { name: 'Stabilität und Volumen überprüfen', text: 'Vergleiche die Stabilitätsbewertung, den Kronendurchmesser und das geschätzte Stützvolumen vor dem Slicen.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Baumstützen-Dichte-Rechner',
      description: 'Optimiere die Dichte von 3D-Druck-Baumstützen, Astwinkel, Stammbasisdurchmesser, Kronendurchmesser, Stützvolumen und Stabilität.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Was ist ein guter Astwinkel für Baumstützen?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ein praktischer Startbereich liegt bei etwa 40-50°, mit niedrigeren Winkeln für hohe Stützen und weiteren Winkeln nur bei Bedarf an mehr Reichweite.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'So stimmst du die Dichte von Baumstützen für einen 3D-Druck ab',
      step: [
        { '@type': 'HowToStep', text: 'Gib die Stützpunkthöhe ein.' },
        { '@type': 'HowToStep', text: 'Stelle Astwinkel, Astdichte und Stammbasisdurchmesser ein.' },
        { '@type': 'HowToStep', text: 'Überprüfe Kronendurchmesser, Stützvolumen und Stabilitätsbewertung.' },
        { '@type': 'HowToStep', text: 'Wende die Werte in der Slicer-Vorschau an und passe Kontakteinstellungen an.' },
      ],
    },
  ],
};
