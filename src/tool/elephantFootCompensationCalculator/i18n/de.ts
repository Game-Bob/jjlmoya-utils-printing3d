import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ElephantFootCompensationCalculatorUI } from '../ui';

const slug = 'elefantenfuss-kompensationsrechner';
const title = 'Elefantenfuß Kompensationsrechner: Präzise Maßkorrektur';
const description = 'Berechnen Sie die negative horizontale Expansion und die CAD-Fasen-tiefe für die erste Schicht beim 3D-Druck anhand des gemessenen Maßfehlers, der Schichthöhe, des Z-Offset-Drucks und der Betttemperatur.';

const faqData = [
  {
    question: 'Was ist der beste Wert für die Elefantenfuß-Kompensation?',
    answer: 'Der beste Wert ist der gemessene Basisfehler, korrigiert um Schichthöhe, effektiven Z-Druck und Betttemperatur. Dieser Rechner gibt ihn als negativen Slicer-Horizontal-Expansionswert aus.',
  },
  {
    question: 'Sollte ich horizontale Expansion oder eine CAD-Fase verwenden?',
    answer: 'Verwenden Sie die Slicer-Horizontaleexpansion für eine schnelle Profilkorrektur. Verwenden Sie eine CAD-Fase für Funktionsbauteile, bei denen die untere Kante ein anderes Teil berührt, auf einer Referenzfläche sitzt oder über mehrere Slicer hinweg reproduzierbar bleiben muss.',
  },
  {
    question: 'Warum beeinflusst die Betttemperatur den Elefantenfuß?',
    answer: 'Ein heißeres Bett hält das untere Polymer länger weich. Die erweichte Raupe kann unter Düsendruck horizontal fließen, daher erhöht der Rechner die Korrektur oberhalb des 60 °C-Referenzpunkts.',
  },
  {
    question: 'Ist Elefantenfuß dasselbe wie Überextrusion?',
    answer: 'Nein. Überextrusion betrifft viele Schichten. Elefantenfuß konzentriert sich auf die Basis, wo die ersten Schichten komprimiert und vom Bett erhitzt werden, obwohl Überextrusion ihn verstärken kann.',
  },
];

const howToData = [
  { name: 'Testkupon drucken', text: 'Verwenden Sie dasselbe Material, dieselbe Betttemperatur, erste Schichthöhe und Erste-Schicht-Einstellungen wie beim Produktionsdruck.' },
  { name: 'Basisfehler messen', text: 'Subtrahieren Sie das stabile obere Wandmaß vom breitesten Basis-maß.' },
  { name: 'Druck und Temperatur eingeben', text: 'Geben Sie erste Schichthöhe, effektiven Z-Druckspalt und Betttemperatur an.' },
  { name: 'Korrektur anwenden', text: 'Verwenden Sie den negativen Horizontal-Expansionswert im Slicer oder modellieren Sie die vorgeschlagene 45-Grad-Fase.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'de',
};

export const content: ToolLocaleContent<ElephantFootCompensationCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    controlsAriaLabel: 'Eingaben zur Elefantenfuß-Kompensation',
    resultsAriaLabel: 'Ergebnisse der Elefantenfuß-Korrektur',
    canvasAriaLabel: 'Querschnittsvisualisierung des aktuellen und korrigierten Elefantenfußprofils',
    unitSystemLabel: 'Einheiten',
    metricLabel: 'Metrisch',
    imperialLabel: 'Imperial',
    materialLabel: 'Materialvorgabe',
    plaLabel: 'PLA',
    petgLabel: 'PETG',
    absAsaLabel: 'ABS/ASA',
    customMaterialLabel: 'Benutzerdefiniert',
    measuredErrorLabel: 'Gemessener Basisfehler',
    layerHeightLabel: 'Erste Schichthöhe',
    zPressureLabel: 'Z-Offset-Druckspalt',
    bedTemperatureLabel: 'Betttemperatur',
    targetToleranceLabel: 'Zieltoleranz',
    expansionLabel: 'Slicer-Expansion',
    chamferLabel: 'CAD-Fase',
    thermalFactorLabel: 'Thermischer Faktor',
    verdictLabel: 'Maßgenauigkeitsziel',
    currentProfileLabel: 'Gemessener Elefantenfuß',
    correctedProfileLabel: 'Korrigiertes Profil',
    slicerCommandLabel: 'Slicer-Befehl',
    cadCommandLabel: 'CAD-Befehl',
    copyButton: 'Korrekturbericht kopieren',
    copiedButton: 'Kopiert',
    copyTemplate: 'Elefantenfuß-Kompensation: Slicer-Horizontaleexpansion {expansion}, CAD-Fase {chamfer} bei 45 Grad, thermischer Faktor {phi}, Ergebnis: {verdict}.',
    slicerCommandTemplate: 'Horizontaleexpansion: {expansion} {unit}',
    cadCommandTemplate: '45 Grad x {chamfer} {unit}',
    correctionCanvasTemplate: 'E_korr {correction} {unit}',
    pressureCanvasTemplate: 'phi_temp {phi} | Z-Druckverhältnis {ratio}',
    optimalVerdict: '< 0,05 mm Toleranz: Korrektur optional, mit Messschieber überprüfen.',
    watchVerdict: 'Kontrollierte Abweichung: Slicer-Kompensation anwenden und Kupon nachdrucken.',
    severeVerdict: 'Schwere Basisverbreiterung: Z-Druck vor Verwendung des Slicer-Offsets korrigieren.',
    mmUnit: 'mm',
    inchUnit: 'in',
    celsiusUnit: '°C',
    fahrenheitUnit: '°F',
    degreeUnit: 'Grad',
    multiplierUnit: 'x',
  },
  seo: [
    { type: 'title', text: 'Elefantenfuß-Kompensation als Maßgenauigkeitsproblem', level: 2 },
    { type: 'paragraph', html: 'Elefantenfuß ist die Auswärts-expansion der ersten gedruckten Schichten über die CAD-Nenn-grenze hinaus. An einem Kalibrierwürfel erscheint er als Basislippe. An technischen Bauteilen wird er zu einem funktionalen Fehler: Schwalbenschwänze klemmen, Bohrungen nahe der Bauplatte schließen sich, Schnappverbindungen verlieren Spiel, Passplatten wackeln auf einer erhöhten Kante und Messblöcke sitzen nicht mehr bündig. Ein nützlicher <strong>Elefantenfuß-Kompensationsrechner</strong> kann daher nicht wie eine kosmetische Flussanpassung behandelt werden. Er muss einen gemessenen Maßfehler in einen negativen Horizontal-Expansionswert und, wenn möglich, in eine CAD-Fase umwandeln, die den komprimierten Materialpfad aus dem Design selbst entfernt.' },
    { type: 'paragraph', html: 'Dieser Rechner modelliert die Korrektur aus drei physikalischen Eingaben, die den Defekt stark beeinflussen: gemessener Basisfehler, erste Schichthöhe und der effektive Z-Druckspalt. Die Kernbeziehung ist <code>E_korr = Fehler x (Schichthöhe / Z-Offset-Druck) x phi_temp</code>. Der Temperatur-multiplikator <code>phi_temp</code> steigt oberhalb eines 60 °C-Referenzbetts, weil ein heißeres Bett das Polymer länger weich hält und der Düsendruck das Material seitlich verschieben kann. Das Ergebnis wird als negative Horizontal-expansion für den Slicer und als 45-Grad-Fasentiefe für CAD ausgegeben.' },
    { type: 'stats', columns: 3, items: [
      { value: '0,01 mm', label: 'Eingabeauflösung für die Maßabstimmung' },
      { value: '45 Grad', label: 'Standard-CAD-Fasenwinkel' },
      { value: 'phi_temp', label: 'Bett-Temperatur-Flussmultiplikator' },
    ] },
    { type: 'diagnostic', variant: 'info', title: 'Messen Sie den Fehler, nicht die visuelle Lippe', html: 'Drucken Sie einen quadratischen oder rechteckigen Kupon, messen Sie das Nennmaß der Wand oder Außenabmessung oberhalb der Basis, dann messen Sie dieselbe Abmessung über die ersten Schichten. Die Differenz zwischen diesen beiden Messungen ist der Elefantenfußfehler. Schätzen Sie nicht anhand eines Fotos; das Werkzeug ist für Messschieberdaten ausgelegt.' },

    { type: 'title', text: 'Warum Elefantenfuß entsteht: Düsendruck, Wärme und Kunststofffluss', level: 2 },
    { type: 'paragraph', html: 'Die erste Schicht wird absichtlich komprimiert, damit das Filament das Bett benetzt und haftet. Diese Kompression verwandelt die Düse in einen kleinen Druckapplikator. Geschmolzenes Polymer tritt aus der Düse aus, wird zwischen Düse und Bauoberfläche gequetscht und muss das verfügbare Volumen einnehmen. Wenn der Z-Spalt zu klein ist, gibt es nicht genug vertikalen Raum für die befohlene Extrusionsraupe, sodass das Material seitlich ausweicht. Die Basis wird breiter, selbst wenn der Rest des Drucks maßhaltig ist.' },
    { type: 'paragraph', html: 'Die Betttemperatur verändert die Schwere. PLA bei 60 °C kann nahe seinem Glasübergangsbereich liegen, PETG bei 75 °C bleibt klebrig und nachgiebig, und ABS oder ASA auf einem 100 °C-Bett bleiben in den ersten Schichten warm. Ein heißeres Bett verbessert nicht nur die Haftung; es verzögert auch die Verfestigung an der Basis. Deshalb wendet dieser Rechner einen thermischen Faktor an: <strong>1,00 bei 60 °C, plus 0,05 für alle weiteren 5 °C</strong>. Ein 75 °C-PETG-Bett verwendet daher einen Faktor von etwa 1,15 vor der Begrenzung.' },
    { type: 'comparative', columns: 3, items: [
      { title: 'Z Druck dominiert', description: 'Ein sehr niedriger Düsenabstand flacht die Raupe und drückt Kunststoff nach außen. Der Fehler ist in der ersten Schicht am stärksten und verbessert sich oft nach Z-Offset-Korrektur.', points: ['Breite erste Linie', 'Glänzende, gequetschte Oberfläche', 'Brim-artige Kante'] },
      { title: 'Thermisch dominiert', description: 'Die Basis bleibt weich, weil Bett- oder Kammerwärme hoch ist. Die Lippe kann sich selbst bei angemessener erster Schicht über mehrere Schichten erstrecken.', highlight: true, points: ['Abgerundete Unterkante', 'Häufig bei PETG oder ABS', 'Langsame Abkühlung'] },
      { title: 'Flussdominiert', description: 'Extrusionsmultipli-kator, Filamentdurch-messer oder Erste-Schicht-Fluss ist zu hoch. Der gesamte untere Bereich kann überfüllt aussehen, nicht nur der Umfang.', points: ['Raue Oberseite der ersten Schicht', 'Zu breite Linien', 'Geschlossene Lücken'] },
    ] },
    { type: 'tip', title: 'Verwenden Sie den Z Offset als Eingabe, nicht als Schätzung', html: 'Der Z-Druckspalt ist der effektive Abstand, der die Raupe in das Bett zwingt. Wenn Ihr Slicer eine erste Schicht von 0,20 mm meldet, aber die tatsächliche Quetschung sich wie 0,10 mm verhält, verwenden Sie den kleineren Druckspalt. Das macht die berechnete Kompensation größer, was der Physik einer stärker komprimierten Raupe entspricht.' },

    { type: 'title', text: 'So messen Sie die Basisexpansion für den Rechner', level: 2 },
    { type: 'paragraph', html: 'Verwenden Sie einen einfachen Testkupon mit einer bekannten Außenabmessung, wie 20,00 mm, 30,00 mm oder 40,00 mm. Der Kupon sollte gerade vertikale Seiten haben, mindestens 8 bis 12 mm Höhe und keine Fase beim ersten Test. Messen Sie die Körperabmessung einige Millimeter über dem Bett, wo der Elefantenfuß verschwunden ist. Messen Sie dann dieselbe Abmessung an der breitesten Stelle der Basis. Die Differenz ist der gesamte Außenfehler für diese Achse.' },
    { type: 'paragraph', html: 'Wenn ein 20,00-mm-Würfel in der Mitte 20,02 mm, aber an der Basis 20,24 mm misst, beträgt der Basisfehler relativ zum stabilen Körper 0,22 mm. Geben Sie 0,22 mm ein, nicht die Abweichung vom Nennmaß. Dies entfernt unzusammenhängende Schrumpfung, XY-Schrittfehler oder Slicer-Linienbreitenverzerrung aus der Elefantenfußberechnung. Sie isolieren die Basisverformung, nicht die Kalibrierung des gesamten Druckers.' },
    { type: 'list', items: [
      'Messen Sie, nachdem das Teil auf Raumtemperatur abgekühlt ist, besonders bei ABS, ASA, PETG und großen PLA-Teilen.',
      'Verwenden Sie leichten Messschieberdruck; das Zusammendrücken einer erweichten oder texturierten Basis kann die wahre Lippe verbergen.',
      'Nehmen Sie Messungen auf X- und Y-Seiten vor, da Bettbewegung, Lüfterrichtung und Gantry-Schrägstellung den Defekt asymmetrisch machen können.',
      'Ignorieren Sie Brim- und Saummaterial. Entfernen Sie Brim vor der Messung der eigentlichen Teilwand sauber.',
      'Drucken Sie denselben Kupon nach Anwendung der Kompensation nach, damit die nächste Messung vergleichbar ist.',
    ] },
    { type: 'table', headers: ['Beobachtung', 'Wahrscheinliche Ursache', 'Beste erste Maßnahme'], rows: [
      ['Basis ist breiter, aber obere Wand ist genau', 'Elefantenfuß durch Erste-Schicht-Druck', 'Diesen Rechner verwenden und negative Horizontalexpansion anwenden.'],
      ['Jede Schicht ist übermaßig', 'XY-Maßstab, Extrusionsmultiplikator oder Filamentdurchmesserfehler', 'Fluss und XY vor der Elefantenfuß-Kompensation kalibrieren.'],
      ['Nur Ecken wölben sich', 'Druckvorlauf, Geschwindigkeit oder Kühlungsproblem', 'Druckvorlauf oder Eckengeschwindigkeit abstimmen.'],
      ['Bodenfläche ist rau und durchscheinend', 'Düse zu nah oder Erste-Schicht-Fluss zu hoch', 'Z-Offset erhöhen oder Erste-Schicht-Fluss vor der Kompensation reduzieren.'],
    ] },

    { type: 'title', text: 'Negative Horizontalexpansion vs. CAD-Fase', level: 2 },
    { type: 'paragraph', html: 'Die Slicer-Horizontalexpansion verschiebt die Polygongrenze vor der Werkzeugpfadgenerierung nach innen oder außen. Für die Elefantenfuß-Korrektur ist die Einstellung normalerweise negativ: Wenn die Basis 0,20 mm zu breit misst, benötigt der Slicer möglicherweise einen Wert nahe -0,20 mm, modifiziert durch Schichthöhe, Z-Druck und Betttemperatur. Dies ist schnell, umkehrbar und nützlich für Chargen, bei denen jedes Teil eine ähnliche Erste-Schicht-Deformation aufweist.' },
    { type: 'paragraph', html: 'Eine CAD-Fase entfernt Material aus dem Modell selbst. Der Rechner gibt eine 45-Grad-Fasentiefe als <code>Fehler x sqrt(2)</code> aus, was einer diagonalen Fläche entspricht, die die horizontale Basislippe beseitigt. CAD-Fasen sind oft besser für kritische Schnittstellen, da sie die beabsichtigten oberen Wandabmessungen erhalten, während sie der ersten Schicht einen kontrollierten Entlastungspfad bieten. Sie sind auch über Slicer hinweg portabler, da die Geometrie die Kompensation trägt.' },
    { type: 'proscons', title: 'Wahl einer Korrekturmethode', items: [
      { pro: 'Negative Horizontalexpansion kann pro Material- oder Druckerprofil schnell geändert werden.', con: 'Sie kann kleine Texte, dünne Wände, Stifte und Löcher beeinträchtigen, wenn sie global angewendet wird.' },
      { pro: 'CAD-Fasen sind explizit und robust für Passflächen nahe der Bauplatte.', con: 'Sie erfordern Modellbearbeitungen und sind möglicherweise nicht für heruntergeladene Teile geeignet.' },
      { pro: 'Die Kombination eines milden Slicer-Offsets mit einer kleinen Fase kann schwere PETG- oder ABS-Basen kontrollieren.', con: 'Das Stapeln von Korrekturen ohne Nachmessen kann das Teil untermaßig machen.' },
    ] },
    { type: 'message', title: 'Nicht blind kompensieren', html: 'Wenn die erste Schicht sichtbar überquetscht ist, korrigieren Sie zuerst den Z-Offset. Die Kompensation sollte die verbleibende vorhersehbare Basisexpansion entfernen, nicht eine Düse verstecken, die durch die erste Schicht pflügt.' },

    { type: 'title', text: 'Empfohlene Kompensation nach Material', level: 2 },
    { type: 'paragraph', html: 'Das Materialverhalten ist wichtig, weil Haftungstemperatur, Glasübergang, Abkühlrate und Viskosität beeinflussen, wie weit die untere Raupe fließen kann, bevor sie erstarrt. PLA spricht oft gut auf eine kleine negative Horizontalexpansion an, nachdem der Z-Offset angemessen ist. PETG benötigt möglicherweise eine größere Korrektur, weil es üblicherweise heißer auf dem Bett gedruckt wird und die erste Schicht für starke Haftung optimiert ist. ABS und ASA können bei Funktionsbauteilen eine CAD-Entlastung erfordern, weil das heiße Bett und Gehäuse die Basis länger weich halten.' },
    { type: 'table', headers: ['Material', 'Typischer Bettbereich', 'Starttoleranz-ziel', 'Kompensations-hinweise'], rows: [
      ['PLA', '55-65 °C', '< 0,05 mm', 'Mit genauem Z-Offset beginnen, dann kleine negative Horizontalexpansion verwenden. Eine Fase ist für Presspassungsbasen nützlich.'],
      ['PETG', '70-85 °C', '< 0,07 mm', 'Höheren thermischen Faktor erwarten. Übermäßigen Erste-Schicht-Fluss vermeiden, da PETG eine klebrige abgerundete Lippe bilden kann.'],
      ['ABS/ASA', '90-110 °C', '< 0,08 mm', 'CAD-Fasen für Produktionsteile verwenden. Kammerwärme kann die ersten Schichten nachgiebig halten.'],
      ['TPU', '40-60 °C', 'anwendungs-spezifisch', 'Flexibles Filament kann sich unter Messschiebern verformen. Vorsichtig messen und geometrische Entlastung gegenüber aggressiven globalen Offsets bevorzugen.'],
    ] },
    { type: 'card', title: 'Warum die Tabelle ein Ausgangspunkt ist', html: 'Ein texturiertes PEI-Blatt, glattes Glasbett, Düsendurchmesser, Linienbreite, Erste-Schicht-Geschwindigkeit, Kühlverzögerung, Gehäuse-temperatur und Filamentmarke können alle den gemessenen Fehler verändern. Die Tabelle setzt Erwartungen; der Rechner sollte von Ihrem gemessenen Kupon gesteuert werden.' },
    { type: 'summary', title: 'Prioritäten bei der Materialabstimmung', items: [
      'PLA: Zuerst Z-Offset korrigieren, dann kleine Slicer-Kompensation verwenden.',
      'PETG: Betttemperatur und Erste-Schicht-Fluss beobachten, da die Basis beweglich bleibt.',
      'ABS/ASA: CAD-Fasen an Produktionsschnittstellen bevorzugen und nach Kammeraufwärmung überprüfen.',
      'Flexible Materialien: Die Messmethode ist wichtig, da die Basis unter den Messschieberbacken zusammengedrückt werden kann.',
    ] },

    { type: 'title', text: 'Slicer-Einstellungen, die mit der Elefantenfuß-Kompensation interagieren', level: 2 },
    { type: 'paragraph', html: 'Verschiedene Slicer zeigen die Einstellung unter Namen wie Horizontal Expansion, Initial Layer Horizontal Expansion, Elephant Foot Compensation, XY Compensation oder First-Layer-Expansion an. Eine globale Horizontalexpansion ändert die gesamte Teilekontur. Eine Nur-Erste-Schicht-Einstellung betrifft nur die unteren Schichten und ist normalerweise sicherer für die Maßgenauigkeit. Wenn ein Slicer beide unterstützt, verwenden Sie die Erste-Schicht-Kompensation für Elefantenfuß und reservieren Sie die globale XY-Kompensation für kalibrierte Größenfehler, die über die gesamte Höhe bestehen.' },
    { type: 'paragraph', html: 'Linienbreite und Erste-Schicht-Fluss interagieren ebenfalls mit der Korrektur. Eine sehr breite Erste-Schicht-Linie kann die Betthaftung verbessern, erhöht aber das Volumen, das unter die Düse passen muss. Wenn die Raupe vertikal nirgendwo hin kann, breitet sie sich horizontal aus. Die Reduzierung des Erste-Schicht-Flusses von 105 Prozent auf 100 Prozent, die Erhöhung des Z-Offsets um 0,02 mm oder die Senkung der Betttemperatur um 5 °C kann die erforderliche negative Expansion sauberer reduzieren als die Anwendung eines großen Offsets.' },
    { type: 'glossary', items: [
      { term: 'Horizontaleexpansion', definition: 'Ein Slicer-Offset, der Modellkonturen vor der Werkzeugpfadgenerierung erweitert oder verkleinert.' },
      { term: 'Erste-Schicht-Expansion', definition: 'Eine Variante, die nur auf die erste Schicht oder untere Schichten angewendet wird und daher besser für Elefantenfuß geeignet ist.' },
      { term: 'Z-Druckspalt', definition: 'Der effektive Düse-Bett-Abstand, der bestimmt, wie stark die erste Raupe komprimiert wird.' },
      { term: 'Thermischer Faktor', definition: 'Ein Multiplikator, der hier verwendet wird, um den erhöhten lateralen Fluss darzustellen, wenn das Bett heißer als 60 °C ist.' },
      { term: 'CAD-Fase', definition: 'Eine modellierte abgeschrägte Kante, die komprimiertem Erste-Schicht-Material eine geometrische Entlastungszone bietet.' },
    ] },
    { type: 'diagnostic', variant: 'warning', title: 'Große negative Expansion kann kleine Merkmale beschädigen', html: 'Ein Wert wie -0,35 mm kann die Außenbasis einer großen Box korrigieren, aber winzige geprägte Buchstaben auslöschen, schmale Rippen reduzieren und den Durchmesser kleiner Pfosten verändern. Wenn die erforderliche Korrektur groß ist, behandeln Sie dies als Signal, Z-Offset, Erste-Schicht-Fluss oder Betttemperatur zu überprüfen.' },

    { type: 'title', text: 'Arbeitsablauf für eine präzise Elefantenfuß-Korrektur', level: 2 },
    { type: 'list', items: [
      'Drucken Sie einen einfachen Kalibrierkupon mit demselben Material, derselben Betttemperatur, ersten Schichthöhe und Erste-Schicht-Geschwindigkeit, die für das echte Teil verwendet werden.',
      'Messen Sie das stabile Körpermaß oberhalb der Basis, dann messen Sie das breiteste Basismaß und subtrahieren Sie die beiden.',
      'Geben Sie gemessenen Fehler, erste Schichthöhe, effektiven Z-Druckspalt, Betttemperatur und Zieltoleranz ein.',
      'Wenden Sie die gemeldete negative Horizontalexpansion im Slicer an oder fügen Sie die gemeldete 45-Grad-Fase in CAD hinzu.',
      'Drucken Sie den Kupon nach und messen Sie erneut nach dem Abkühlen.',
      'Wenn ein Restfehler über der Toleranz bleibt, passen Sie in Halbschritten an, anstatt zu einem extremen globalen Offset zu springen.',
      'Speichern Sie die Einstellung nur dann in einem Materialprofil, wenn zwei reproduzierbare Kupons innerhalb Ihres Toleranzziels übereinstimmen.',
    ] },
    { type: 'tip', title: 'Verwenden Sie denselben Bettzustand wie in der Produktion', html: 'Ein erster Kaltdruck auf einem dicken Bett kann sich anders verhalten als der fünfte Druck, nachdem das Bett 30 Minuten lang eingeweicht hat. Wenn der Produktionsauftrag nach dem Wärmeeinweichen läuft, kalibrieren Sie den Kupon ebenfalls nach dem Wärmeeinweichen.' },
    { type: 'diagnostic', variant: 'success', title: 'Gutes Korrekturziel', html: 'Für praktische FDM-Maßarbeiten ist eine Basisabweichung unter 0,05 mm oft klein genug, dass die Passung durch normales Spieldesign und nicht durch die Elefantenfußlippe gesteuert wird. Engere Ziele erfordern starre Maschinen, stabiles Filament und wiederholbare Messtechnik.' },
    { type: 'summary', title: 'Wichtige Erkenntnisse', items: [
      'Elefantenfuß ist ein Druck- und Temperaturverformungsproblem, nicht nur ein visueller Defekt.',
      'Verwenden Sie den gemessenen Basisfehler relativ zur stabilen Wand, nicht allein die CAD-Nenngröße.',
      'Negative Horizontalexpansion ist die Slicer-Korrektur; eine 45-Grad-Fase ist die CAD-Korrektur.',
      'Die Betttemperatur erhöht den thermischen Faktor, weil die Basis weicher bleibt und länger seitlich fließt.',
      'Schwere Kompensationswerte sollten vor dem Produktionseinsatz Überprüfungen von Z und Fluss der ersten Schicht auslösen.',
    ] },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
