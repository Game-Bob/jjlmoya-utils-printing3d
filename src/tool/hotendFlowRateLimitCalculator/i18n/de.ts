import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HotendFlowRateLimitCalculatorUI } from '../ui';

const slug = 'volumenstrom-rechner';
const title = 'Volumenstrom Rechner: Präzise Hotend Grenzen';
const description =
  'Berechnen Sie den volumetrischen Durchfluss beim 3D-Druck in mm3/s, vergleichen Sie ihn mit der Schmelzkapazität des Hotends und erkennen Sie, wann Geschwindigkeit, Linienbreite und Schichthöhe zu Unterextrusion führen.';

const faqData = [
  {
    question: 'Was ist der volumetrische Durchfluss beim 3D-Druck?',
    answer:
      'Der volumetrische Durchfluss ist das Kunststoffvolumen, das pro Sekunde vom Hotend angefordert wird. Er wird berechnet als Linienbreite multipliziert mit Schichthöhe multipliziert mit Druckgeschwindigkeit und ergibt ein Ergebnis in mm3/s.',
  },
  {
    question: 'Was passiert, wenn der volumetrische Durchfluss das Hotend-Limit überschreitet?',
    answer:
      'Das Hotend kann den Kunststoff bei der angeforderten Rate nicht vollständig schmelzen. Der Druck steigt, die Extrusion wird inkonsistent, und der Druck kann Unterextrusion, schwache Wände, matte raue Oberflächen oder übersprungene Extruderschritte aufweisen.',
  },
  {
    question: 'Ist ein V6 wirklich auf 15 mm3/s begrenzt?',
    answer:
      '15 mm3/s ist eine praktische Planungskonstante für ein gut eingestelltes Standard-Schmelzzonen-Hotend. Tatsächliche Werte hängen vom Filament, der Temperatur, der Düse, der Heizleistung, dem Extrudergriff und der akzeptablen Verschlechterung der visuellen Qualität ab.',
  },
  {
    question: 'Warum reduziert eine erhöhte Schichthöhe die sichere Geschwindigkeit?',
    answer:
      'Die Schichthöhe ist ein direkter Multiplikator in der Durchflussgleichung. Wenn Linienbreite und Hotend-Kapazität gleich bleiben, halbiert eine Verdoppelung der Schichthöhe ungefähr die maximale Geschwindigkeit, bevor das Hotend sein Schmelzlimit erreicht.',
  },
];

const howToData = [
  { name: 'Wählen Sie eine Hotend-Architektur', text: 'Wählen Sie eine Voreinstellung für Standard V6, Volcano, Bambu High-Flow oder Ultra-High-Flow, um die Schmelzkapazitätskonstante festzulegen.' },
  { name: 'Liniengeometrie einstellen', text: 'Passen Sie Linienbreite und Schichthöhe an das Slicer-Profil an, das Sie verwenden möchten.' },
  { name: 'Druckgeschwindigkeit anpassen', text: 'Nutzen Sie den Feingeschwindigkeitsregler, um zu beobachten, wie sich die Auslastungsanzeige den 70 %-, 90 %- und kritischen Durchflusszonen nähert.' },
  { name: 'Sichere Geschwindigkeit und Reserve ablesen', text: 'Vergleichen Sie den aktuellen mm3/s-Wert mit der maximalen sicheren Geschwindigkeit und der verbleibenden Schmelzrate-Reserve.' },
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
  step: howToData.map((step, i) => ({ '@type': 'HowToStep', position: i + 1, name: step.name, text: step.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'de',
};

export const content: ToolLocaleContent<HotendFlowRateLimitCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Eingaben für den Volumenstrom-Grenzwert',
    resultsAriaLabel: 'Ergebnisse des Volumenstrom-Rechners',
    unitSystemLabel: 'Einheiten',
    metricLabel: 'Metrisch',
    imperialLabel: 'US',
    hotendLabel: 'Hotend-Architektur',
    lineWidthLabel: 'Linienbreite',
    layerHeightLabel: 'Schichthöhe',
    speedLabel: 'Druckgeschwindigkeit',
    flowLabel: 'Volumenstrom',
    loadLabel: 'Thermische Auslastung',
    maxSpeedLabel: 'Max. sichere Geschwindigkeit',
    reserveLabel: 'Schmelzreserve',
    stateLabel: 'Systemzustand',
    idealState: 'IDEALER DURCHFLUSS',
    limitState: 'VISKOSITÄTSGRENZE',
    criticalState: 'KRITISCHER DURCHFLUSS',
    idealHint: 'Das Hotend hat ausreichend thermische Reserven für stabilen Schmelzdruck und gleichmäßige Extrusion.',
    limitHint: 'Das Profil befindet sich nahe der Viskositätsgrenze. Kleine Material- oder Temperaturänderungen können Unterextrusion offenbaren.',
    criticalHint: 'Der angeforderte Durchfluss überschreitet das zuverlässige Schmelzfenster. Reduzieren Sie Geschwindigkeit, Linienbreite oder Schichthöhe.',
    millimeterUnit: 'mm',
    inchUnit: 'in',
    metricSpeedUnit: 'mm/s',
    imperialSpeedUnit: 'in/s',
    flowUnit: 'mm3/s',
  },
  seo: [
    { type: 'title', text: 'Wie der Maximale Volumenstrom-Rechner Funktioniert', level: 2 },
    {
      type: 'paragraph',
      html: 'Ein <strong>maximaler Volumenstrom-Rechner</strong> beantwortet eine nützlichere Frage als ein einfacher Geschwindigkeitsrechner: Kann das Hotend die vom Slicer angeforderte Kunststoffmenge schmelzen? Bewegungssysteme können hohe Verfahrgeschwindigkeiten versprechen, aber die Extrusion wird durch Wärmeübertragung, Schmelzzonenlänge, Düsendruck, Filamentviskosität, Heizerstabilität und Extrudergriff begrenzt. Der Rechner modelliert die angeforderte Schmelzrate als <code>Vf = Linienbreite x Schichthöhe x Geschwindigkeit</code>, mit dem Ergebnis in <code>mm3/s</code>.',
    },
    {
      type: 'paragraph',
      html: 'Das Werkzeug vergleicht diesen momentanen Durchfluss mit einer ausgewählten Hotend-Kapazität. Standard-V6-Hotends werden mit einer niedrigeren Schmelzratenkonstante abgebildet, Architekturen mit längerer Schmelzzone wie Volcano verwenden eine höhere Konstante, und moderne High-Flow-Hotends verwenden größere Werte. Der Zweck ist nicht, eine universelle Laborgrenze zu versprechen, sondern eine schnelle technische Prüfung zu ermöglichen, bevor ein Slicer-Profil mehr Kunststoff anfordert, als die Hardware zuverlässig verflüssigen kann.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'mm3/s', label: 'Einheit für die Hotend-Schmelzkapazität', icon: 'mdi:cube-scan' },
        { value: '70%', label: 'Komfortzonengrenze für stabile Produktionsprofile', icon: 'mdi:gauge-low' },
        { value: '90%', label: 'Viskositätsgrenze, an der Fehler empfindlich werden', icon: 'mdi:gauge' },
        { value: '100%+', label: 'Kritischer Durchfluss, bei dem Unterextrusion dominiert', icon: 'mdi:alert-outline' },
      ],
    },
    {
      type: 'tip',
      title: 'Slicer Linienbreite verwenden, nicht Düsendurchmesser',
      html: '<p>Die Durchflussgleichung verwendet die Extrusionslinienbreite aus dem Slicer. Eine 0,4-mm-Düse druckt oft eine Linie von 0,42-0,48 mm. Wenn der Rechner den Düsendurchmesser anstelle der Linienbreite verwendet, kann er den Durchflussbedarf unterschätzen und ein Profil verbergen, das sich bereits nahe der Hotend-Grenze befindet.</p>',
    },
    { type: 'title', text: 'Warum Geschwindigkeit und Schmelzrate Nicht Dasselbe Limit Sind', level: 2 },
    {
      type: 'paragraph',
      html: 'Ein Drucker kann sich mit 300 mm/s bewegen und dennoch bei 90 mm/s versagen, wenn das Extrusionsvolumen zu hoch ist. Die Geschwindigkeit wird erst aussagekräftig, wenn Linienbreite und Schichthöhe einbezogen werden. Der Druck einer 0,45-mm-Linie bei 0,20-mm-Schichten und 150 mm/s erfordert 13,5 mm3/s. Der Druck einer 0,60-mm-Linie bei 0,30-mm-Schichten und derselben Geschwindigkeit erfordert 27 mm3/s. Die Bewegungsgeschwindigkeit ist identisch, aber das zweite Profil verlangt vom Hotend, doppelt so viel Kunststoff pro Sekunde zu schmelzen.',
    },
    {
      type: 'table',
      headers: ['Linienbreite', 'Schichthöhe', 'Geschwindigkeit', 'Angeforderter Durchfluss'],
      rows: [
        ['0,42 mm', '0,16 mm', '120 mm/s', '8,06 mm3/s'],
        ['0,45 mm', '0,20 mm', '150 mm/s', '13,50 mm3/s'],
        ['0,50 mm', '0,25 mm', '180 mm/s', '22,50 mm3/s'],
        ['0,60 mm', '0,30 mm', '150 mm/s', '27,00 mm3/s'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Unterextrusion sieht oft wie ein Einstellungsproblem aus',
      badge: 'Durchflussdeckel',
      html: '<p>Wenn ein Profil die Schmelzkapazität überschreitet, versuchen Anwender oft, Retraktion, Pressure Advance, Temperatur oder E-Steps anzupassen. Diese Einstellungen sind wichtig, aber sie können keine kurze Schmelzzone unbegrenzt Kunststoff verarbeiten lassen. Überprüfen Sie zuerst, ob der angeforderte mm3/s-Wert innerhalb des Hotend-Kapazitätsfensters liegt.</p>',
    },
    {
      type: 'summary',
      title: 'Regeln der Durchflussgleichung',
      items: [
        'Linienbreite, Schichthöhe und Geschwindigkeit multiplizieren sich direkt.',
        'Eine kleine Erhöhung von zwei Geometrieeinstellungen kann ein Hotend überfordern, selbst wenn die Geschwindigkeit moderat erscheint.',
        'Die maximale sichere Geschwindigkeit ist das Hotend-Limit geteilt durch Linienbreite und Schichthöhe.',
      ],
    },
    { type: 'title', text: 'Vergleichswerte zur Thermischen Leistung nach Hotend-Architektur', level: 2 },
    {
      type: 'paragraph',
      html: 'Die Hotend-Architektur bestimmt, wie lange das Filament in der beheizten Zone verbleibt und wie effizient Wärme in den Kern des Filaments gelangt. Eine kompakte V6-Schmelzzone ist reaktionsschnell und leicht, aber ihre praktische Durchflussgrenze ist niedriger als die einer langen Volcano-Schmelzzone. High-Flow-Keramik- und Ultra-High-Flow-Designs erhöhen den Heizkontakt, die Schmelzpfadlänge oder die innere Oberfläche, um höhere Extrusionsraten zu ermöglichen.',
    },
    {
      type: 'table',
      headers: ['Hotend-Architektur', 'Planungskapazität', 'Bester Anwendungsfall', 'Technischer Hinweis'],
      rows: [
        ['V6 / MK8', '15 mm3/s', 'Qualitätsprofile, moderate PLA/PETG-Geschwindigkeit, Standard-Desktop-Drucker', 'Kann bei breiten Linien oder hohen Schichten schnell Druckgrenzen erreichen.'],
        ['Revo High Flow', '18 mm3/s', 'High-Flow-Nachrüstung mit kompaktem Formfaktor', 'Erfordert dennoch Temperatur- und Materialvalidierung.'],
        ['Volcano', '25 mm3/s', 'Große Düsen, dicke Schichten, Funktionsteile, schnelle Entwurfsprofile', 'Lange Schmelzzonen können mehr Nachlaufen verursachen und erfordern Retraktionsoptimierung.'],
        ['Bambu HF', '32 mm3/s', 'Hochgeschwindigkeitsprofile für geschlossene Drucker und schnelle PLA-Produktion', 'Profilwerte hängen stark von Kühlung und Filamentverhalten ab.'],
        ['Rapido UHF / ähnlich', '45 mm3/s', 'Extremer Durchfluss, große Extrusionsbreiten, Produktionsdurchsatz', 'Extruderdrehmoment, Heizleistung und Düsengeometrie werden zu limitierenden Faktoren.'],
      ],
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: 'Kurze Schmelzzone', description: 'Kompakt, reaktionsschnell, leichterer Werkzeugkopf, geringere Wärmespeicherung.', icon: 'mdi:thermometer-low', points: ['Gute Detailkontrolle', 'Niedrigere Durchflussgrenze', 'Weniger thermische Trägheit'] },
        { title: 'Lange Schmelzzone', description: 'Mehr Kontaktzeit für das Filament, um Wärme vor dem Erreichen der Düse aufzunehmen.', icon: 'mdi:thermometer-lines', highlight: true, points: ['Höhere mm3/s', 'Bessere Dickchicht-Ausgabe', 'Mehr Nachlauf-Management'] },
        { title: 'High Flow Kern', description: 'Moderne Geometrie erhöht die Kontaktfläche oder Heizkopplung, ohne die Länge einfach zu verlängern.', icon: 'mdi:heat-wave', points: ['Schnelle Reaktion', 'Hoher Durchsatz', 'Erfordert optimierte Profile'] },
      ],
    },
    {
      type: 'message',
      title: 'Vergleichswerte sind Planungskonstanten',
      ariaLabel: 'Hinweis zu Hotend-Vergleichswerten',
      html: '<p>Die voreingestellten Grenzwerte sind bewusst konservative Planungskonstanten. Die tatsächliche Schmelzkapazität variiert mit der Filamentzusammensetzung, dem Düsendurchmesser, der Heizpatrone, der Thermistorplatzierung, der Extrusionstemperatur und der akzeptablen Qualitätseinbuße des Bauteils.</p>',
    },
    { type: 'title', text: 'Die Auslastungsanzeige-Zonen Verstehen', level: 2 },
    {
      type: 'paragraph',
      html: 'Die Auslastungsanzeige übersetzt die Durchflussberechnung in einen visuellen Betriebszustand. Unter 70 % Auslastung hat das Hotend Spielraum für normale Filamentschwankungen, geringe Temperaturoszillationen und Geschwindigkeitsänderungen entlang des Werkzeugpfads. Zwischen 70 % und 90 % kann die Extrusion erfolgreich bleiben, aber das Profil wird empfindlich. Über 90 % ist der Druck so nahe an der Schmelzgrenze, dass Materialchargenschwankungen, Feuchtigkeit oder eine etwas kältere Düse ihn in sichtbare Unterextrusion treiben können.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        '0-70 %: gute Produktionsreserve für wiederholbare Teile und normale Materialschwankungen.',
        '70-90 %: nützlich für Geschwindigkeitstests, aber Wände, Deckflächen und Infill-Verbund validieren.',
        '90 %+: als kritische Zone behandeln, es sei denn, Filament und Hotend wurden mit einem Durchflussturm vermessen.',
        'Über 100 %: Geschwindigkeit, Linienbreite oder Schichthöhe reduzieren, bevor irrelevante Slicer-Einstellungen geändert werden.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:gauge-full',
      title: 'Warum die Anzeige besser sein kann als ein Warnfeld',
      html: '<p>Ein Warnfeld teilt dem Benutzer mit, was nach dem Überschreiten eines Schwellenwerts schiefgelaufen ist. Eine Auslastungsanzeige zeigt die Annäherung an diesen Schwellenwert an. Dies erleichtert es, bei einer geplanten Betriebsmarge anzuhalten, anstatt erst zu reagieren, wenn das Profil bereits instabil geworden ist.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Kritischer Durchfluss ist nicht nur ein Oberflächenqualitätsproblem',
      badge: 'Mechanische Festigkeit',
      html: '<p>Nicht vollständig aufgeschmolzenes Filament kann schlecht zwischen Bahnen und Schichten verbinden. Selbst wenn die Außenwand akzeptabel aussieht, können Infill-Verbund, Randhaftung und Schlagfestigkeit leiden, wenn die Durchflussrate die Schmelzkapazität überschreitet.</p>',
    },
    { type: 'title', text: 'So Verwenden Sie den Rechner mit Einem Slicer-Profil', level: 2 },
    {
      type: 'paragraph',
      html: 'Beginnen Sie mit den tatsächlichen Slicer-Werten für Linienbreite, Schichthöhe und Außenwand- oder allgemeine Druckgeschwindigkeit. Wählen Sie die nächstgelegene Hotend-Architektur. Bewegen Sie den Geschwindigkeitsregler, bis die Anzeige Ihre gewünschte Auslastung erreicht. Die angezeigte maximale sichere Geschwindigkeit ist die Geschwindigkeit, die genau das Hotend-Limit für die aktuelle Liniengeometrie erreichen würde. Verwenden Sie für Produktionsarbeiten einen niedrigeren Wert als das rechnerische Maximum.',
    },
    {
      type: 'paragraph',
      html: 'Wenn die Anzeige in die kritische Zone gelangt, gibt es drei direkte Möglichkeiten, den Durchfluss zu reduzieren: Geschwindigkeit verringern, Linienbreite reduzieren oder Schichthöhe verringern. Die Temperatur kann den praktischen Durchfluss für einige Materialien erhöhen, verändert aber auch Glanz, Brückenbildung, Überhangverhalten, Fadenbildung und Maßgenauigkeit. Der Rechner konzentriert sich bewusst auf Geometrie und Hardwarekapazität, da dies die transparentesten Stellhebel sind.',
    },
    {
      type: 'proscons',
      title: 'Möglichkeiten zur Reduzierung des Durchflussbedarfs',
      items: [
        { pro: 'Geschwindigkeitsreduzierung erhält Liniengeometrie und Maßhaltigkeit.', con: 'Sie erhöht die Druckzeit und kann den Farmdurchsatz verringern.' },
        { pro: 'Reduzierung der Schichthöhe verbessert die Oberflächenqualität und reduziert mm3/s.', con: 'Sie erhöht die Schichtanzahl und kann den Job trotz geringeren Durchflusses verlängern.' },
        { pro: 'Reduzierung der Linienbreite kann Druck mindern und feine Details verbessern.', con: 'Sie kann dünne Wände schwächen und die Anzahl der Werkzeugpfade erhöhen.' },
      ],
    },
    {
      type: 'tip',
      title: 'Mit einem Durchflussturm validieren',
      html: '<p>Verwenden Sie den Rechner, um einen realistischen Geschwindigkeitsbereich zu wählen, und drucken Sie dann einen Durchflusstestturm für das spezifische Filament und die Temperatur. Die beste Produktionsgrenze ist der höchste Durchfluss, der noch stabile Wände, gleichbleibenden Glanz, gute Schichthaftung und keine Extruderschritte auslässt.</p>',
    },
    { type: 'title', text: 'Symptome bei Überschreitung der Hotend-Schmelzkapazität', level: 2 },
    {
      type: 'paragraph',
      html: 'Ein Profil jenseits der Hotend-Schmelzgrenze kann allmählich versagen. Zuerst können Deckflächen dünne Spuren oder kleine Lücken aufweisen. Dann werden Infill-Linien inkonsistent, Konturen verlieren an Glanz und Ecken zeigen schwache Druckwiederherstellung. In schwereren Fällen klickt der Extruder, mahlt Filament, überspringt Schritte oder hinterlässt spröde Abschnitte, weil das in die Düse eintretende Filament nicht vollständig erweicht ist.',
    },
    {
      type: 'table',
      headers: ['Beobachtetes Symptom', 'Wahrscheinliche durchflussbezogene Ursache', 'Reaktion des Rechners'],
      rows: [
        ['Dünne Wände bei hoher Geschwindigkeit', 'Angeforderte mm3/s überschreitet Schmelzkapazität bei langen geraden Bewegungen', 'Geschwindigkeit reduzieren, bis die Auslastung unter 90 % fällt.'],
        ['Raue matte Extrusion', 'Filament ist nicht vollständig durch den Kern erwärmt', 'Durchfluss reduzieren oder Temperatur vorsichtig für dieses Material erhöhen.'],
        ['Extruder klickt', 'Gegendruck übersteigt Extrudergriff oder Motordrehmoment', 'Durchfluss sofort reduzieren und Filamentantriebsspannung prüfen.'],
        ['Schwacher Infill-Verbund', 'Material tritt zu kühl oder inkonsistent geschmolzen aus', 'Mehr thermische Reserve für Strukturteile verwenden.'],
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Volumetrischer Durchfluss', definition: 'Das Kunststoffvolumen, das pro Sekunde vom Hotend angefordert wird, ausgedrückt in mm3/s.' },
        { term: 'Schmelzkapazität', definition: 'Die praktische Menge Filament, die ein Hotend bei gleichbleibender Druckqualität schmelzen kann.' },
        { term: 'Linienbreite', definition: 'Die Breite einer extrudierten Bahn im Slicer, meist etwas größer als der Düsendurchmesser.' },
        { term: 'Schichthöhe', definition: 'Die vertikale Dicke jeder gedruckten Schicht; ein direkter Multiplikator im Durchflussbedarf.' },
        { term: 'Durchflussreserve', definition: 'Die Differenz zwischen Hotend-Kapazität und aktuell angefordertem Durchfluss.' },
      ],
    },
    {
      type: 'summary',
      title: 'Praktischer Durchfluss Workflow',
      items: [
        'Berechnen Sie den angeforderten Durchfluss, bevor Sie die Geschwindigkeit erhöhen.',
        'Halten Sie Produktionsprofile unterhalb der kritischen Zone, es sei denn, sie wurden durch Tests validiert.',
        'Verwenden Sie Hotend-Voreinstellungen als Planungskonstanten und verfeinern Sie diese dann mit materialspezifischer Kalibrierung.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
