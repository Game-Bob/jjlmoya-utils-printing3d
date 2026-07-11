import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { WallPerimeterOptimizerUI } from '../ui';

export const content: ToolLocaleContent<WallPerimeterOptimizerUI> = {
  slug: 'wand-perimeter-optimierer',
  title: 'Optimierer für Wand und Perimeter',
  description: 'Berechne die exakte Anzahl von Perimetern und eine sichere Linienbreite, damit die gedruckte Wandstärke mit dem CAD-Modell übereinstimmt, ohne innere Hohlräume.',
  ui: {
    controlsAriaLabel: 'Eingaben für Wand und Perimeter Optimierer',
    resultsAriaLabel: 'Ergebnisse des Optimierers für Wand und Perimeter',
    unitSystemLabel: 'Einheiten',
    metricLabel: 'Metrisch',
    imperialLabel: 'US',
    tooltipLabel: 'Weitere Informationen',
    nozzleLabel: 'Düsendurchmesser',
    nozzleHelp: 'Durchmesser der Düsenöffnung. Die sichere Linienbreite liegt bei 80-120 % dieses Wertes.',
    lineWidthLabel: 'Linienbreite',
    lineWidthHelp: 'Extrusionsbreite des Slicers für Außen- und Innenwände.',
    cadThicknessLabel: 'CAD-Wandstärke',
    cadThicknessHelp: 'Die konstruierte Wandstärke, die durch ganze Perimeterschleifen abgebildet werden soll.',
    commonNozzlesLabel: 'Gängige Düsengrößen',
    infillStrategyLabel: 'Wandfüllstrategie',
    perimeterFirstLabel: 'Zuerst Perimeterschleifen',
    solidInfillFallbackLabel: 'Solid-Infill-Ersatzlösung',
    solidInfillTip: 'Tipp: Wenn du keine weiteren Perimeterschleifen hinzufügen möchtest, verwende Solid Infill oder zuverlässigen Gap Fill in dünnen Wänden, damit der Slicer keine inneren Hohlräume hinterlässt.',
    copySolidInfillNote: 'Wenn du weniger Perimeterschleifen verwendest, setze für dünne Wandinnenseiten Solid Infill oder geprüften Gap Fill ein.',
    visualLabel: 'Querschnitt der Perimeterschleifen innerhalb der CAD-Wandstärke',
    cadEnvelopeLabel: 'CAD-Wandhülle',
    lineLabel: 'Extrusionslinie',
    recommendedPerimetersLabel: 'Empfohlene Perimeterschleifen',
    realThicknessLabel: 'Tatsächliche Dicke',
    residualLabel: 'Restabweichung',
    verdictLabel: 'Präzisionsurteil',
    exactLabel: 'Exakt',
    adjustLabel: 'Linienbreite anpassen erforderlich',
    impossibleLabel: 'Mit dieser Düse unmöglich',
    adjustedWidthLabel: 'Angepasste Linienbreite',
    noAdjustmentLabel: 'Keine Anpassung',
    slicerBlockLabel: 'Slicer-Konfiguration',
    perimetersUnitLabel: 'Perimeterschleifen',
    copyLabel: 'Einstellungen kopieren',
    copiedLabel: 'Slicer-Block kopiert.',
    safeRangeLabel: 'Sicherer Linienbreitenbereich',
    compareLabel: 'Nächstgelegene Perimeter-Optionen',
    perimetersColumn: 'Perimeterschleifen',
    lineWidthColumn: 'Linienbreite',
    realThicknessColumn: 'Tatsächliche Dicke',
    errorColumn: 'Abweichung',
    messageExact: 'Die gewählte Linienbreite liegt innerhalb von 0,05 mm an der CAD-Wand. Dies ist eine saubere, rein aus Perimeterschleifen bestehende Wand.',
    messageAdjust: 'Die aktuelle Breite hinterlässt eine messbare Lücke. Verwende die angepasste Linienbreite, um die Wand mit ganzen Perimeterschleifen exakt zu schließen.',
    messageTooThin: 'Die CAD-Wand ist dünner als der Düsendurchmesser. Konstruiere die Wand neu, verwende eine kleinere Düse oder akzeptiere ein nicht-strukturelles Einzellinienelement.',
    messageOutsideRange: 'Keine Anpassung im sicheren Bereich von 80-120% des Düsendurchmessers kann diese Wand exakt schließen. Ändere die CAD-Wand oder die Düsengröße.',
    mmUnit: 'mm',
    inchUnit: 'in',
  },
  seo: [
    { type: 'title', text: 'Warum die Wandstärke mit ganzen Perimeterschleifen übereinstimmen muss', level: 2 },
    {
      type: 'paragraph',
      html: 'FDM-Slicer bauen eine Wand aus diskreten Extrusionsbahnen auf. Eine CAD-Wand von 1,20 mm ist keine durchgehende massive Anweisung; sie wird zu einer, zwei, drei oder mehr Perimeterschleifen, abhängig von Linienbreite, Düsendurchmesser und Slicer-Regeln. Wenn die Rechnung nicht aufgeht, muss der Slicer eine schmale innere Lücke lassen, einen dünnen Gap-Fill-Pfad einfügen, eine Region überextrudieren oder die Werkzeugpfadreihenfolge stillschweigend ändern. Funktionale Teile leiden darunter, weil die im CAD massiv wirkende Wand eine schwache Naht oder eine inkonsistente Raupe im Querschnitt enthalten kann.',
    },
    {
      type: 'paragraph',
      html: 'Die Gleichung ist einfach: <strong>tatsächliche Wandstärke = Anzahl Perimeterschleifen × Linienbreite</strong>. Die Schwierigkeit besteht darin, Werte zu wählen, die druckbar bleiben. Eine Linienbreite kann normalerweise etwas unter oder über dem Düsendurchmesser liegen, aber nicht beliebig. Dieser Optimierer durchsucht ganzzahlige Perimeteranzahlen, misst die Restabweichung zur CAD-Stärke und schlägt eine Anpassung der Linienbreite nur vor, wenn die exakte Breite innerhalb eines konservativen Bereichs von 80-120 % des Düsendurchmessers bleibt.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0,05 mm', label: 'Präzisionsschwelle für das Urteil' },
        { value: '80-120 %', label: 'Sicherer Linienbreitenbereich um den Düsendurchmesser' },
        { value: 'n × Breite', label: 'Kernformel für die Wandstärke' },
        { value: '2 Dezimalstellen', label: 'Minimale praktische Slicer-Genauigkeit' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Perimeterschleifen sind ganzzahlige Geometrie',
      html: 'Ein Slicer kann keine 2,6 normalen Perimeterschleifen drucken. Wenn eine Wand für zwei Linien zu breit und für drei zu schmal ist, braucht es Gap-Fill-Verhalten oder eine korrigierte CAD-Dimension.',
    },
    { type: 'title', text: 'So wählst du die CAD-Wandstärke für eine 0,4-mm-Düse', level: 2 },
    {
      type: 'paragraph',
      html: 'Eine 0,4-mm-Düse verwendet üblicherweise eine Linienbreite von etwa 0,40-0,48 mm. Bei einer Linienbreite von 0,42 mm ergeben zwei Perimeterschleifen 0,84 mm, drei Perimeterschleifen 1,26 mm und vier Perimeterschleifen 1,68 mm. Eine konstruierte Wand von 1,20 mm wirkt in CAD sinnvoll, liegt aber 0,06 mm neben drei Perimeterschleifen à 0,42 mm. Das ist nah, aber nicht exakt. Der Optimierer schlägt möglicherweise 3 Perimeterschleifen bei 0,40 mm vor, was die Wand perfekt schließt und exakt dem Düsendurchmesser entspricht.',
    },
    {
      type: 'paragraph',
      html: 'Bei mechanischen Teilen ist es oft besser, Wandstärken als Vielfache der angestrebten Linienbreite zu konstruieren, anstatt den Slicer zur Reparatur zu zwingen. Typische CAD-Wandziele für eine 0,4-mm-Düse liegen bei etwa 0,8 mm für leichte Hüllen, 1,2 mm für normale funktionale Wände, 1,6 mm für stabilere Gehäuse und 2,0 mm oder mehr für lasttragende Elemente. Die genauen Werte sollten der Slicer-Linienbreite folgen, nicht nur dem nominellen Düsendurchmesser.',
    },
    {
      type: 'table',
      headers: ['Düse', 'Sicherer Linienbreitenbereich', 'Gute 2-Wand-Ziele', 'Gute 3-Wand-Ziele'],
      rows: [
        ['0,2 mm', '0,16-0,24 mm', '0,32-0,48 mm', '0,48-0,72 mm'],
        ['0,4 mm', '0,32-0,48 mm', '0,64-0,96 mm', '0,96-1,44 mm'],
        ['0,6 mm', '0,48-0,72 mm', '0,96-1,44 mm', '1,44-2,16 mm'],
        ['0,8 mm', '0,64-0,96 mm', '1,28-1,92 mm', '1,92-2,88 mm'],
      ],
    },
    {
      type: 'tip',
      title: 'Vom Slicerprofil aus rückwärts konstruieren',
      html: 'Bevor du Schnappverbindungen, Rippen, Bossen oder Gehäusewände modellierst, lege Düse und Linienbreite fest. Setze dann die Wandmaße auf saubere Vielfache, damit der Slicer in kritischen Bereichen keine Gap-Fill-Pfade erfinden muss.',
    },
    { type: 'title', text: 'Grenzen der Linienbreite: Warum 80 bis 120 Prozent ein sicherer Bereich sind', level: 2 },
    {
      type: 'paragraph',
      html: 'Eine Düse kann eine etwas breitere Raupe als ihre Öffnung legen, weil das Plastik gegen die vorherige Schicht gedrückt und zu einer ovalen Bahn geformt wird. Sie kann auch eine etwas schmalere Linie drucken, aber zu schmal verlangt vom Drucker, eine kontrollierte Raupe mit begrenzter seitlicher Stützung zu erzeugen. Beide Extreme haben Nachteile: Sehr breite Linien können den Hotend überdrucken, Ecken verschmieren, feine Details verdecken und die Maßhaltigkeit verschlechtern. Sehr schmale Linien können Wände unterfüllen, die Verbindung schwächen und die Extrusionskonsistenz empfindlicher gegenüber Pressure Advance und Filamentdurchmesser machen.',
    },
    {
      type: 'paragraph',
      html: 'Der hier verwendete Bereich von 80-120 % ist bewusst konservativ. Viele Slicer erlauben breitere Werte für spezielle Modi, Vase-Druck oder grobe Düsen, und erfahrene Anwender können nach Tests über diesen Bereich hinausgehen. Dieses Werkzeug zielt auf zuverlässige mechanische Wandplanung ab, bei der die Empfehlung sicher genug ist, um sie in ein normales Profil zu übernehmen, ohne offensichtliche Unter- oder Überextrusion zu verursachen. Wenn eine exakte Übereinstimmung eine Linienbreite außerhalb des Bereichs erfordert, meldet das Werkzeug das Design als unpraktisch, anstatt vorzutäuschen, der Slicer könne es sauber lösen.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: 'Zu schmal', description: 'Die Raupe drückt möglicherweise nicht genug Material in den Wandquerschnitt.', points: ['Schwache Zwischenlagenbindung', 'Sichtbare Lücken', 'Spröde dünne Wände'] },
        { title: 'Sicherer Bereich', description: 'Die Raupe bleibt nahe am physikalischen Düsenverhalten.', highlight: true, points: ['Vorhersehbare Extrusion', 'Gute Maßhaltigkeit', 'Wiederverwendbare Profile'] },
        { title: 'Zu breit', description: 'Die Düse drückt mehr Plastik, als der Pfad aufnehmen kann.', points: ['Ausgebeulte Ecken', 'Oberflächenrillen', 'Höherer Gegendruck'] },
      ],
    },
    {
      type: 'message',
      title: 'Sicher bedeutet nicht kalibriert',
      html: 'Selbst eine mathematisch perfekte Breite benötigt einen kalibrierten Durchfluss. Wenn der Extrusionsmultiplikator falsch ist, kann die physische Wand mit dem Messschieber dennoch dick oder dünn gemessen werden.',
    },
    { type: 'title', text: 'Diagnose innerer Wandlücken in der Slicer-Vorschau', level: 2 },
    {
      type: 'paragraph',
      html: 'Der schnellste Weg, eine Perimeter-Diskrepanz zu erkennen, ist die schichtweise Vorschaubetrachtung. Achte auf einen blassen Streifen zwischen Außen- und Innenwänden, eine einzelne wandernde Gap-Fill-Linie oder einen Bereich, in dem der Slicer entlang desselben Merkmals zwischen zwei und drei Linien wechselt. Diese Muster treten häufig bei Gehäusewänden, Bossen, Clips und dünnen Rippen auf, weil das CAD-Maß oft optisch statt als Vielfaches der Extrusionsbreite gewählt wird.',
    },
    {
      type: 'paragraph',
      html: 'Ein Wandspalt ist nicht immer von außen sichtbar. Das Teil kann sauber aussehen, während es innen einen schmalen Hohlraum enthält, der die Steifigkeit verringert. Dies ist relevant für Schraubenbossen, Presspass-Stifte, Halterungen, Drohnenrahmen, Getriebe und alle Teile, bei denen Last durch die Wand übertragen wird. Wenn der Spalt zwischen den Perimeterschleifen liegt, kann die Wand leichter aufreißen, weil der Lastpfad schwach gebundenes oder fehlendes Material statt durchgehender Bahnen durchquert.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Gap Fill ist eine Reparatur, keine Wandplanung',
      html: 'Moderne Slicer können dünne Gap-Fill-Pfade einfügen, aber diese Pfade werden oft mit anderer Geschwindigkeit, Flussrate und Kühlung gedruckt. Bei lasttragender Geometrie ist ein sauberes Perimetervielfaches vorhersagbarer.',
    },
    {
      type: 'summary',
      title: 'Vorscha Checkliste',
      items: [
        'Wechsle zur Linientyp- oder Merkmalsvorschau, nicht nur zur einfarbigen Ansicht.',
        'Prüfe Wände an Löchern, Rippen, Bossen und dünnen Laschen.',
        'Kontrolliere, ob Gap-Fill-Pfade in strukturellen Bereichen auftreten.',
        'Vergleiche die CAD-Wandstärke mit ganzen Vielfachen der Linienbreite.',
        'Verwende eine angepasste Linienbreite nur, wenn sie im sicheren Düsenbereich liegt.',
      ],
    },
    { type: 'title', text: 'Wann das Ergebnis exakt ist, eine Anpassung erfordert oder unmöglich ist', level: 2 },
    {
      type: 'paragraph',
      html: 'Das Urteil verwendet eine Restabweichung von 0,05 mm, weil die meisten Desktop-FDM-Systeme praktische Abweichungen durch Durchfluss, Filamentdurchmesser, Wärmeausdehnung, Bewegungskalibrierung und Messtechnik aufweisen. Wenn die aktuellen Einstellungen innerhalb dieser Bandbreite liegen, bezeichnet das Werkzeug das Ergebnis als exakt. Das bedeutet nicht, dass jedes gedruckte Exemplar perfekt aufs Mikrometer genau misst; es bedeutet, dass die Slicer-Geometrie selbst eng genug ausgerichtet ist, dass die verbleibende Abweichung wahrscheinlich auf Kalibrierung oder Materialverhalten zurückzuführen ist, nicht auf die Perimeter-Arithmetik.',
    },
    {
      type: 'paragraph',
      html: 'Anpassung erforderlich bedeutet, dass die aktuelle Linienbreite eine größere Restabweichung hinterlässt, aber dieselbe Perimeteranzahl die Wand mit einer sicheren Breite schließen kann. Bei einer 1,20-mm-Wand mit 0,42-mm-Linienbreite ergeben sich drei Linien zu 1,26 mm. Die Anpassung auf 0,40 mm macht drei Linien exakt 1,20 mm. Unmöglich bedeutet, dass entweder die Wand dünner als der Düsendurchmesser ist oder die benötigte exakte Linienbreite außerhalb des sicheren Düsenbereichs liegt. In diesem Fall ist eine Neukonstruktion der Wand oder ein Düsenwechsel besser, als den Slicer zu zwingen.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Perimeter', definition: 'Eine vom Slicer um den Umriss einer Schicht erzeugte Wandschleife.' },
        { term: 'Linienbreite', definition: 'Die befohlene Breite einer extrudierten Bahn, manchmal auch Extrusionsbreite genannt.' },
        { term: 'Restabweichung', definition: 'Der absolute Unterschied zwischen CAD-Wandstärke und der durch ganze Perimeterschleifen erzeugten Dicke.' },
        { term: 'Gap Fill', definition: 'Ein vom Slicer erzeugter Pfad, um verbleibenden Raum zu füllen, den normale Perimeterschleifen nicht sauber ausfüllen.' },
      ],
    },
    {
      type: 'proscons',
      title: 'Linienbreite anpassen versus CAD bearbeiten',
      items: [
        { pro: 'Die Anpassung der Linienbreite ist schnell und kann die Modelldatei bewahren.', con: 'Sie wirkt sich auf jede Wand mit diesem Profil aus, wenn sie nicht sorgfältig eingegrenzt wird.' },
        { pro: 'Die CAD-Bearbeitung macht die Konstruktionsabsicht für zukünftige Drucke explizit.', con: 'Sie dauert länger, wenn viele Elemente bereits bemaßt sind.' },
        { pro: 'Der Wechsel der Düsengröße kann sehr dünne oder sehr dicke Wände retten.', con: 'Er ändert die Detailauflösung, Druckzeit und das Extrusionsvolumen.' },
      ],
    },
    { type: 'title', text: 'Anwendung der Ausgabe in Cura, PrusaSlicer und ähnlichen Slicern', level: 2 },
    {
      type: 'paragraph',
      html: 'Der Kopierblock enthält absichtlich nur die beiden relevanten Werte: Perimeteranzahl und Linienbreite. In Cura entspricht die Perimeteranzahl der Wandlinienanzahl und die Linienbreite der Wandlinienbreite oder globalen Linienbreite, je nach Profilstruktur. In PrusaSlicer und Ablegern verwende Perimeters für die Schleifenanzahl und Extrusion Width für die Linienbreite. Wenn der Slicer getrennte Außen- und Innenperimeterbreiten hat, setze sie für die zu optimierende Wand gleich, es sei denn, du verstehst, wie der Slicer sie kombiniert.',
    },
    {
      type: 'paragraph',
      html: 'Nach dem Ändern der Slicer-Einstellungen erneut slicen und dieselbe Wand in der Vorschau prüfen. Die visuelle Vorschau sollte die erwartete Anzahl von Bahnen zeigen, die die CAD-Hülle ohne schmalen Restkanal ausfüllen. Drucke dann einen kleinen Teststreifen mit derselben Wandstärke und messe ihn nach dem Abkühlen. Wenn der Streifen systematisch abweicht, die Vorschau aber korrekt ist, justiere den Durchfluss oder die horizontale Expansion separat; verwende nicht die Perimeteranzahl, um einen Kalibrierungsfehler auszugleichen.',
    },
    {
      type: 'card',
      title: 'Arbeitsablauf für mechanische Toleranzen',
      html: 'Verwende diese Reihenfolge für funktionale Teile: Düse wählen, sichere Linienbreite wählen, Wandvielfache modellieren, ohne innere Lücken slicen, Teststreifen drucken, tatsächliche Wand messen, dann Durchfluss oder Maßkompensation anpassen. Wenn der Geometrieschritt übersprungen wird, jagt die Kalibrierung einem beweglichen Ziel hinterher.',
    },
    {
      type: 'table',
      headers: ['Slicer-Konzept', 'Typischer Feldname', 'Eingabe'],
      rows: [
        ['Schleifenanzahl', 'Wandlinienanzahl / Perimeters', 'Empfohlene ganze Perimeteranzahl'],
        ['Extrusionsbahnbreite', 'Linienbreite / Extrusionsbreite', 'Empfohlene oder angepasste Linienbreite'],
        ['Dünne Reparaturpfade', 'Gap Fill / Lücken zwischen Wänden füllen', 'Bei Strukturwänden nicht darauf verlassen'],
        ['Maßkorrektur', 'Horizontale Expansion / XY-Kompensation', 'Erst justieren, nachdem die Wand-Mathematik sauber ist'],
      ],
    },
    { type: 'title', text: 'Sonderfälle: Dünne Wände, Rippen, Bossen und Toleranzelemente', level: 2 },
    {
      type: 'paragraph',
      html: 'Dünne Wände unter dem Düsendurchmesser sind keine normalen Perimeterwände. Slicer können sie mit Dünnwanderkennung, einzelnen Extrusionslinien oder variabler Linienbreite drucken, aber das Ergebnis ist meist kosmetisch oder leicht belastbar. Für eine strukturelle Rippe konstruiere die Rippe dick genug für mindestens zwei stabile Linien oder akzeptiere, dass sie sich wie ein flexibles Steg verhält. Für Schraubenbossen verwende genügend Perimeterschleifen, damit die Schraubenlast durch durchgehende Schleifen und nicht durch einen mit Gap Fill gefüllten Ring verläuft.',
    },
    {
      type: 'paragraph',
      html: 'Toleranzelemente erfordern besondere Aufmerksamkeit, weil die Wandkorrektur mit Lochgröße und Passung interagieren kann. Wenn ein Clip oder Schnappelement als 0,9-mm-Wand konstruiert ist und das Profil 0,45-mm-Linien verwendet, sind zwei Perimeterschleifen sauber. Wenn derselbe Clip 1,0 mm misst, kann der Slicer einen kleinen Mittelpfad hinzufügen, der Steifigkeit und Passung verändert. Eine mathematisch sauberere Wand macht Federlemente oft wiederholbarer, weil jede Kopie dieselbe Anzahl durchgehender Bahnen verwendet.',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Erzwinge keine unmögliche dünne Geometrie',
      html: 'Wenn die CAD-Wand unter dem Düsendurchmesser liegt, ist die richtige Lösung normalerweise eine kleinere Düse, ein dickeres Element oder ein anderes Fertigungsverfahren. Eine breite Düse in eine sub-Düsen-Wand zu zwingen, erzeugt eine unberechenbare Raupenform.',
    },
    {
      type: 'list',
      items: [
        'Verwende mindestens zwei saubere Linien für Rippen, die Biegebelastung tragen.',
        'Verwende drei oder mehr Perimeterschleifen um Schraubenbossen, wenn der Platz es zulässt.',
        'Vermeide Restkanäle in Clips, da sie zu Rissausgangspunkten werden.',
        'Validiere Presspassungen mit derselben Linienbreite, die im endgültigen Teil verwendet wird.',
      ],
    },
  ],
  faq: [
    {
      question: 'Wie viele Perimeterschleifen sollte eine 1,2-mm-Wand mit einer 0,4-mm-Düse verwenden?',
      answer: 'Normalerweise drei Perimeterschleifen. Bei einer Linienbreite von 0,40 mm ergeben drei Perimeterschleifen exakt 1,20 mm. Bei einer Linienbreite von 0,42 mm beträgt die tatsächliche Dicke 1,26 mm.',
    },
    {
      question: 'Warum begrenzt der Rechner die Linienbreite auf 80-120 % des Düsendurchmessers?',
      answer: 'Dieser Bereich hält die Empfehlungen in einer konservativ druckbaren Zone. Breitere oder schmalere Werte können in Spezialfällen funktionieren, sind aber für die mechanische Wandplanung weniger zuverlässig.',
    },
    {
      question: 'Sollte ich die CAD-Stärke oder die Slicer-Linienbreite ändern?',
      answer: 'Wenn die Anpassung klein und innerhalb des sicheren Bereichs ist, ist die Änderung der Linienbreite schnell. Für wiederholte Serienteile ist die Bearbeitung von CAD auf saubere Vielfache meist wartbarer.',
    },
    {
      question: 'Garantiert ein exaktes Urteil, dass das gedruckte Teil exakt misst?',
      answer: 'Nein. Es bedeutet, dass die Slicer-Geometrie sauber aufgeht. Durchflusskalibrierung, Materialschwund, Temperatur und XY-Kompensation beeinflussen weiterhin die physische Messung.',
    },
    {
      question: 'Was soll ich tun, wenn das Ergebnis unmöglich ist?',
      answer: 'Verwende eine kleinere Düse, konstruiere die Wandstärke als Vielfaches einer sicheren Linienbreite neu oder akzeptiere, dass das Element ein nicht-struktureller Dünnwandpfad sein wird.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Düsendurchmesser eingeben', text: 'Wähle eine gängige Düsengröße oder gib den gemessenen Düsendurchmesser ein.' },
    { name: 'Linienbreite einstellen', text: 'Gib die Slicer-Wandlinienbreite ein; das Tool begrenzt sie auf einen sicheren Düsenbereich.' },
    { name: 'CAD-Wandstärke eingeben', text: 'Verwende die konstruierte Wandstärke aus dem Modell.' },
    { name: 'Slicer-Einstellungen kopieren', text: 'Übernimm die empfohlene Perimeteranzahl und die angepasste Linienbreite, falls erforderlich.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Wand- und Perimeter-Optimierer',
      description: 'Berechne die FDM-Perimeteranzahl und eine sichere Linienbreite für exakte CAD-Wandstärke.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Wie viele Perimeterschleifen sollte eine 1,2-mm-Wand mit einer 0,4-mm-Düse verwenden?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Normalerweise drei Perimeterschleifen. Bei einer Linienbreite von 0,40 mm ergeben drei Perimeterschleifen exakt 1,20 mm.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'So optimierst du die FDM-Wandstärke für ganze Perimeterschleifen',
      step: [
        { '@type': 'HowToStep', text: 'Gib den Düsendurchmesser ein.' },
        { '@type': 'HowToStep', text: 'Gib die Slicer-Linienbreite ein.' },
        { '@type': 'HowToStep', text: 'Gib die CAD-Wandstärke ein.' },
        { '@type': 'HowToStep', text: 'Übernimm die empfohlenen Perimeterschleifen und die Linienbreite.' },
      ],
    },
  ],
};
