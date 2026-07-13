import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FilamentWeightLengthConverterUI } from '../ui';

const slug = 'filament-gewicht-laenge-umrechner';
const title = 'Filament Gewicht zu Länge Umrechner: Präzise Materialberechnung';
const description = 'Filament-Gramm in Meter und Volumen umrechnen mit Angabe der Materialdichte, 1,75 mm oder 2,85 mm Durchmesser sowie einer sofortigen Spulenreichweitenprüfung.';

const faqData = [
  {
    question: 'Wie rechnet man Filament-Gramm in Meter um?',
    answer: 'Teilen Sie die Masse durch die Materialdichte, um das Volumen zu erhalten. Rechnen Sie dieses Volumen von Kubikzentimetern in Kubikmillimeter um und teilen Sie es dann durch die kreisförmige Querschnittsfläche des Filamentdurchmessers.',
  },
  {
    question: 'Warum ist die Dichte des Filamentmaterials wichtig?',
    answer: 'Das gleiche Gewicht von PLA, PETG, ABS, TPU oder gefülltem Filament belegt ein unterschiedliches Volumen, weil jedes Polymer eine andere Dichte hat. Die Länge ist Volumen geteilt durch Filamentfläche, daher ändert die Dichte direkt die Meter-Schätzung.',
  },
  {
    question: 'Hat 1,75-mm-Filament immer die gleiche Länge pro Kilogramm?',
    answer: 'Nein. Durchmessertoleranz, Materialdichte, Additive und Feuchtigkeitsgehalt verändern die tatsächliche Länge. Der Rechner liefert eine Planungsschätzung auf Basis des Nenndurchmessers und der Dichte.',
  },
  {
    question: 'Kann ich den Rechner für 2,85-mm-Filament verwenden?',
    answer: 'Ja. Geben Sie 2,85 mm ein oder wechseln Sie zu imperialen Einheiten und geben Sie den entsprechenden Durchmesser ein. Die Querschnittsfläche wird sofort aktualisiert.',
  },
];

const howToData = [
  { name: 'Filamentmasse eingeben', text: 'Geben Sie die vom Slicer benötigte Filamentmenge, das Restgewicht auf einer Spule oder einen beliebigen Gramm-Wert ein, den Sie umrechnen möchten.' },
  { name: 'Material auswählen', text: 'Wählen Sie PLA, PETG, ABS, TPU, Nylon, PC oder eine gefüllte Mischung, damit der Rechner die korrekte Dichte verwenden kann.' },
  { name: 'Filamentdurchmesser festlegen', text: 'Verwenden Sie 1,75 mm, 2,85 mm oder einen gemessenen Durchmesser, wenn die Längenschätzung eine bestimmte Spule widerspiegeln soll.' },
  { name: 'Spulenreichweite prüfen', text: 'Geben Sie optional das verbleibende Spulengewicht ein, um zu sehen, ob genügend Material vorhanden ist, sowie den genauen Überschuss oder Fehlbetrag.' },
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
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'EngineeringApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'de',
};

export const content: ToolLocaleContent<FilamentWeightLengthConverterUI> = {
  slug,
  title,
  description,
  ui: {
    unitSystemLabel: 'Einheitensystem',
    metricLabel: 'Metrisch',
    imperialLabel: 'Imperial',
    inputsTitle: 'Materialbestand berechnen',
    materialLabel: 'Material',
    materialPlaLabel: 'PLA',
    materialPetgLabel: 'PETG',
    materialAbsLabel: 'ABS',
    materialAsaLabel: 'ASA',
    materialTpuLabel: 'TPU',
    materialPaLabel: 'Nylon PA',
    materialPcLabel: 'Polycarbonat',
    materialWoodLabel: 'Holzgefülltes PLA',
    materialCarbonLabel: 'Carbonfaser-Mischung',
    materialMetalLabel: 'Metallgefülltes PLA',
    densityLabel: 'Dichte',
    densityUnit: 'g/cm3',
    weightLabel: 'Filamentgewicht',
    weightSliderLabel: 'Druckgewicht-Schieberegler',
    diameterLabel: 'Filamentdurchmesser',
    stockLabel: 'Verbleibendes Spulengewicht',
    stockPlaceholder: 'Optionale Bestandsprüfung',
    spoolStateLabel: 'Spulenzustand',
    spoolScaleLabel: 'Verbrauchte / verfügbare Masse',
    cutLineLabel: 'Filamentende-Markierung',
    resultLengthLabel: 'Geschätzte Filamentlänge',
    resultVolumeLabel: 'Polymer-Volumen',
    resultAreaLabel: 'Querschnittsfläche',
    resultGramsMeterLabel: 'Linienmasse',
    enoughLabel: 'Spule ausreichend',
    shortLabel: 'Spule nicht ausreichend',
    noStockLabel: 'Bestandsprüfung inaktiv',
    surplusLabel: 'Überschuss',
    missingLabel: 'Fehlbetrag',
    formulaLabel: 'Berechnungsweg',
    formulaText: 'Volumen = Masse / Dichte -> Länge = Volumen / Querschnittsfläche',
    linearMassMetricUnit: 'g/m',
    linearMassImperialUnit: 'oz/ft',
    gramsUnit: 'g',
    ouncesUnit: 'oz',
    metersUnit: 'm',
    feetUnit: 'ft',
    cm3Unit: 'cm3',
    in3Unit: 'in3',
    in2Unit: 'in2',
    mm2Unit: 'mm2',
    mmUnit: 'mm',
    inchUnit: 'in',
  },
  seo: [
    { type: 'title', text: 'Warum ein dichtebasierter Filament-Gramm-zu-Meter-Rechner genauer ist', level: 2 },
    { type: 'paragraph', html: 'Ein Filament-Gewicht-zu-Länge-Umrechner ist nur so gut wie das dahinterstehende Materialmodell. Ein einfacher Rechner nimmt oft an, dass jedes Kilogramm Filament das gleiche Volumen belegt, aber FFF-Filament wird nach Gewicht verkauft, während der Extruder einen zylindrischen Strang nach Länge verarbeitet. Die Brücke zwischen diesen beiden Messgrößen ist die <strong>Dichte</strong>. PLA mit etwa 1,24 g/cm3, PETG mit rund 1,27 g/cm3, ABS nahe 1,04 g/cm3 und TPU mit etwa 1,21 g/cm3 ergeben nicht die gleiche Meterzahl, selbst wenn Spulengewicht und Durchmesser identisch sind.' },
    { type: 'paragraph', html: 'Die Berechnung beginnt mit der Masse. Die Division von Gramm durch die Dichte ergibt das Volumen in Kubikzentimetern. Dieses Volumen wird dann in Kubikmillimeter umgerechnet, da der Filamentdurchmesser üblicherweise in Millimetern gemessen wird. Die Querschnittsfläche ist die Fläche eines Kreises: Pi multipliziert mit dem Radius zum Quadrat. Schließlich ergibt Volumen geteilt durch Fläche eine Länge in Millimetern, die in Meter oder Fuß umgerechnet werden kann. Das Ergebnis ist eine praxisnahe Schätzung, um zu prüfen, ob das vom Slicer gemeldete Material aus dem aktuellen Spulenbestand gedruckt werden kann.' },
    { type: 'stats', columns: 4, items: [
      { value: '1,24', label: 'Typische PLA-Dichte in g/cm3' },
      { value: '2,405', label: 'Fläche in mm2 für 1,75-mm-Nennfilament' },
      { value: '6,379', label: 'Fläche in mm2 für 2,85-mm-Nennfilament' },
      { value: '3 Eingaben', label: 'Masse, Dichte und Durchmesser bestimmen die Umrechnung' },
    ] },
    { type: 'table', headers: ['Material', 'Planungsdichte', 'Warum die Zahl wichtig ist'], rows: [
      ['PLA', '1,24 g/cm3', 'Häufige Referenz für den Desktop-Druck und eine gute Basislinie für Prototypen.'],
      ['PETG', '1,27 g/cm3', 'Etwas dichter als PLA, daher ergibt die gleiche Grammzahl eine geringere Länge.'],
      ['ABS', '1,04 g/cm3', 'Geringere Dichte bedeutet mehr Länge pro Gramm als bei PLA bei gleichem Durchmesser.'],
      ['TPU', '1,21 g/cm3', 'Flexibles Filament liegt nahe an PLA, ist aber dennoch eine separate Modellierung wert.'],
      ['Gefüllte Mischungen', 'Variabel', 'Holz-, Carbonfaser-, Metall- und Glasadditive können die Dichte weit vom Basispolymer entfernen.'],
    ] },
    { type: 'title', text: 'Die exakten Umrechnungsformeln für die Filamentbestandsberechnung', level: 2 },
    { type: 'paragraph', html: 'Das mathematische Modell ist bewusst klein gehalten, weil jeder Begriff eine physikalische Bedeutung hat. Die Querschnittsfläche ist <code>Pi x (Durchmesser / 2)^2</code>. Das Volumen ist <code>Gewicht / Dichte</code>. Die Länge ist <code>Volumen x 1000 / Querschnittsfläche</code>, wenn das Volumen in cm3 und die Querschnittsfläche in mm2 angegeben ist; das Ergebnis ist in Millimetern und wird dann für Meter durch 1000 geteilt. Dies ist dieselbe Geometrie, mit der in Slicern das Extrusionsvolumen, der maximale Durchfluss und der Materialverbrauch berechnet werden.' },
    { type: 'diagnostic', variant: 'info', title: 'Die Durchmessertoleranz ist die größte alltägliche Unsicherheit', badge: 'Messtechnischer Hinweis', html: 'Eine nominelle 1,75-mm-Spule kann über die gesamte Rolle nicht exakt 1,75 mm betragen. Da die Fläche vom Radiusquadrat abhängt, verändert eine kleine Durchmesserdifferenz die berechnete Länge und das tatsächliche Extrusionsvolumen. Für normale Bestandsprüfungen ist der Nenndurchmesser ausreichend. Für Kalibrierungszwecke messen Sie an mehreren Stellen mit einem Messschieber und geben Sie den Durchschnittsdurchmesser ein.' },
    { type: 'list', items: [
      'Verwenden Sie Gramm, wenn Sie Materialverbrauch aus Slicern wie PrusaSlicer, Cura, Bambu Studio oder OrcaSlicer übernehmen.',
      'Verwenden Sie das gemessene Restspulengewicht nach Abzug der leeren Spulentara, wenn Sie eine zuverlässige Bestandsprüfung wünschen.',
      'Verwenden Sie die Dichte aus dem Herstellerdatenblatt, wenn Sie spezielle Verbundwerkstoffe drucken.',
      'Verwenden Sie 2,85 mm statt 1,75 mm, wenn die Maschine dickeres Filament verarbeitet, da die Querschnittsfläche erheblich abweicht.',
    ] },
    { type: 'tip', title: 'Leerspulentara nicht in den Restbestand einrechnen', html: 'Eine Spule auf der Waage enthält das Gewicht des Kunststoff- oder Pappkerns. Wiegt die leere Spule 180 g und die Waage zeigt 430 g an, beträgt die nutzbare Filamentmenge 250 g. Die Eingabe des Bruttospulengewichts macht die grüne Bestandsmeldung zu optimistisch.' },
    { type: 'title', text: '1,75 mm vs. 2,85 mm Filamentlänge bei gleichem Gewicht', level: 2 },
    { type: 'paragraph', html: 'Der Durchmesser hat einen größeren Einfluss als viele Nutzer erwarten. Ein 2,85-mm-Strang hat mehr als die doppelte Querschnittsfläche eines 1,75-mm-Strangs, daher ergeben sich aus einem Kilogramm weitaus weniger Meter. Das bedeutet nicht, dass ein Durchmesser für sich genommen wirtschaftlicher ist; beide können das gleiche Bauteilvolumen drucken. Es bedeutet, dass die Bestandslänge nicht ohne Durchmesser-Kontext verglichen werden kann. Wenn ein Slicer Gramm angibt, normalisiert er den Materialverbrauch bereits über die Masse; wenn ein Filamentsensor oder eine manuelle Spulenschätzung in Metern denkt, wird der Durchmesser entscheidend.' },
    { type: 'comparative', columns: 2, items: [
      { title: '1,75 mm Filament', description: 'Längere Stranglänge pro Kilogramm und das vorherrschende Format aktueller Desktop-Drucker.', points: ['Geeignet für kompakte Extruder', 'Mehr Meter bei gleicher Spulenmasse', 'Nennfläche etwa 2,405 mm2'] },
      { title: '2,85 mm Filament', description: 'Kürzere Stranglänge pro Kilogramm mit größerem Vorschubquerschnitt, häufig bei älteren oder professionellen Maschinen zu finden.', points: ['Nennfläche etwa 6,379 mm2', 'Weniger empfindlich gegenüber Vorschubkompression in manchen Setups', '1,75 mm Annahmen dürfen nicht verwendet werden'] },
    ] },
    { type: 'table', headers: ['Szenario', 'Was sich ändert', 'Planungskonsequenz'], rows: [
      ['Gleiches Polymer, größerer Durchmesser', 'Fläche nimmt zu', 'Meter sinken bei gleicher Grammzahl.'],
      ['Gleicher Durchmesser, geringere Dichte', 'Volumen nimmt zu', 'Meter steigen bei gleicher Grammzahl.'],
      ['Gleiche Grammzahl, gefülltes Filament', 'Dichte kann steigen', 'Meter können kürzer ausfallen als erwartet.'],
      ['Feuchtes Filament', 'Gemessene Masse steigt leicht', 'Die Spule kann schwerer wirken, ohne nutzbares trockenes Polymer hinzuzufügen.'],
    ] },
    { type: 'title', text: 'So nutzen Sie die Spulenreichweitenprüfung vor einem langen Druck', level: 2 },
    { type: 'paragraph', html: 'Das optionale Feld für den Restbestand verwandelt den Umrechner in ein Start-oder-nicht-Start-Dashboard. Geben Sie die für den Auftrag benötigte Masse als Filamentgewicht ein, dann das nutzbare Filament auf der aktuellen Spule. Die Ausgabe vergleicht Gramm direkt und rechnet die Differenz mit demselben Material- und Durchmessermodell in Meter oder Fuß um. Grün bedeutet, die Spule hat genug Bestand; Rot bedeutet, der Auftrag ist zu knapp und zeigt die genaue Lücke an.' },
    { type: 'card', icon: 'mdi:traffic-light', title: 'Warum sowohl Gramm als auch Meter angezeigt werden', html: 'Gramm sind die Sprache des Einkaufs und des Slicers. Meter sind die Stranglängensprache, die von manchen Firmware-Bildschirmen, Filament-Runout-Schätzungen und manuellen Spulenberechnungen verwendet wird. Die Darstellung beider Werte verhindert einen häufigen Planungsfehler: genügend Länge unter einer Dichteannahme, aber nicht genug Masse unter dem tatsächlichen Material.' },
    { type: 'proscons', title: 'Bestandsprüfungsmethoden', items: [
      { pro: 'Das Wiegen der Spule ist schnell und funktioniert auch bei teilweise verbrauchter Rolle.', con: 'Sie müssen die leere Spulentara kennen oder schätzen.' },
      { pro: 'Die Verwendung von Slicer-Gramm ist in der Regel konsistent mit dem Materialkaufgewicht.', con: 'Slicer-Schätzungen können sich mit Purge-Volumen, Stützen, Brim und Modifikator-Meshes ändern.' },
      { pro: 'Länge ist intuitiv beim Vergleich von Filamentpfaden und Runout-Distanzen.', con: 'Die Länge ändert sich mit Dichte und Durchmesser, ist also nicht materialübergreifend universell.' },
      { pro: 'Die dichtebasierte Umrechnung handhabt PLA, PETG, ABS, TPU und Verbundwerkstoffe besser.', con: 'Herstellerspezifische Additive können einen individuellen Dichtewert erfordern.' },
    ] },
    { type: 'title', text: 'Verbund- und Spezialfilamente benötigen eigene Dichtewerte', level: 2 },
    { type: 'paragraph', html: 'Gefüllte Filamente sind der Hauptgrund, warum ein ernsthafter Materialrechner die Dichte anzeigen sollte, anstatt sie zu verstecken. Holzgefülltes PLA, Carbonfaser-Nylon, metallgefülltes PLA, Glow-Filament, glasfaserverstärkte Ingenieurwerkstoffe und keramikähnliche Mischungen können stark vom Basispolymer abweichen. Ein metallgefülltes Filament kann sich schwer anfühlen, weil die Dichte hoch ist; die gleichen 500 g können ein wesentlich geringeres Volumen und eine geringere Länge als Standard-PLA bedeuten. Bei einem teuren technischen Druck ist dieser Unterschied nicht akademisch. Er kann entscheiden, ob die letzten zehn Prozent eines Drucks fertiggestellt werden oder das Material ausgeht.' },
    { type: 'glossary', items: [
      { term: 'Dichte', definition: 'Masse pro Volumeneinheit, hier ausgedrückt in Gramm pro Kubikzentimeter.' },
      { term: 'Querschnittsfläche', definition: 'Die kreisförmige Fläche des Filamentstrangs, berechnet aus dem Durchmesser.' },
      { term: 'Linienmasse', definition: 'Wie viele Gramm ein Meter oder ein Fuß Filament wiegt, abhängig von Material und Durchmesser.' },
      { term: 'Taragewicht', definition: 'Das Gewicht der leeren Spule, das von einem Waagenwert abgezogen werden muss.' },
      { term: 'Nenndurchmesser', definition: 'Der angegebene Filamentdurchmesser, üblicherweise 1,75 mm oder 2,85 mm, vor Messung der tatsächlichen Toleranz.' },
    ] },
    { type: 'message', title: 'Herstellerangaben haben Vorrang', html: 'Wenn die Spule oder das technische Datenblatt die Dichte angibt, verwenden Sie diesen Wert. Allgemeine Dichtevoreinstellungen sind für die Planung nützlich, aber lieferantenspezifische Formulierungen, Pigmentanteile und Verstärkungen können die Zahl verändern.' },
    { type: 'title', text: 'Praktische Beispiele für die 3D-Druck-Materialberechnung', level: 2 },
    { type: 'paragraph', html: 'Stellen Sie sich vor, ein Slicer meldet, dass eine PETG-Halterung 186 g benötigt, und Sie haben eine teilweise verbrauchte Spule. PETG bei 1,27 g/cm3 mit 1,75-mm-Filament ergibt etwa einundsechzig Meter. Wenn das nutzbare Spulengewicht nach Abzug der Tara 220 g beträgt, meldet das Dashboard einen Überschuss von 34 g und rechnet diese Reserve in etwa elf Meter um. Diese Reserve mag für eine Purge-Linie und einen kleinen Brim ausreichen, aber nicht für einen großen Support-Fehler. Die Bestandsprüfung ermutigt den Nutzer, vor einem unbeaufsichtigten Druck einen realistischen Puffer einzuplanen.' },
    { type: 'paragraph', html: 'Vergleichen Sie nun ABS. Da ABS weniger dicht ist als PETG, wird aus denselben 186 g ein größeres Volumen und damit eine größere Länge bei gleichem 1,75-mm-Durchmesser. Das macht das ABS-Teil nicht automatisch günstiger - der Kilopreis und die Druckeinstellungen spielen ebenfalls eine Rolle -, aber es erklärt, warum eine von einem Material übernommene Restmeterschätzung bei einem anderen in die Irre führen kann. Für die Bestandsverwaltung ist die Masse der stabile Ausgangspunkt, und die Dichte schafft die Brücke zur Länge.' },
    { type: 'summary', title: 'Checkliste für zuverlässige Materialplanung', items: [
      'Leerspulentara vor Eingabe des Restbestands abziehen.',
      'Die tatsächliche Materialdichte für gefüllte, verstärkte oder Premium-Filamente verwenden.',
      'Prüfen, ob die Maschine 1,75 mm oder 2,85 mm Filament verwendet, bevor Sie einer Längenangabe vertrauen.',
      'Einen Puffer für Purge, Stützen, Brims, fehlerhafte erste Lagen und Slicer-Profiländerungen einplanen.',
      'Den grünen Bestandsstatus als Planungsprüfung betrachten, nicht als Garantie gegen Düsenverstopfungen oder Runout-Sensorfehler.',
    ] },
    { type: 'title', text: 'SEO-optimierte Antwort: Filamentgewicht in Länge in einem Satz', level: 2 },
    { type: 'paragraph', html: 'Um 3D-Drucker-Filamentgewicht in Länge umzurechnen, teilen Sie das Gewicht in Gramm durch die Materialdichte, um das Volumen zu erhalten, multiplizieren mit 1000, um cm3 in mm3 umzurechnen, teilen durch <code>Pi x (Durchmesser / 2)^2</code> und anschließend durch 1000, um Meter abzulesen. Diese dichtebewusste Methode ist genauer als eine feste Gramm-zu-Meter-Tabelle, da PLA, PETG, ABS, TPU, Nylon, PC und Verbundfilamente alle unterschiedliche Dichtewerte haben.' },
    { type: 'diagnostic', variant: 'success', title: 'Wann die Schätzung am zuverlässigsten ist', badge: 'Bewährte Praxis', html: 'Das Ergebnis ist am aussagekräftigsten, wenn das Slicer-Gewicht endgültig ist, das Restspulengewicht ohne Tara vorliegt, der Durchmesser gemessen oder bekannt ist und die Dichte vom Hersteller stammt. Unter diesen Bedingungen wird der Umrechner zu einem praktischen Preflight-Check für lange Drucke, Produktionsserien und teure technische Polymere.' },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
