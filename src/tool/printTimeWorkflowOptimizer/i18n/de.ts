import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PrintTimeWorkflowOptimizerUI } from '../ui';

const slug = '3d-druckzeit-workflow-optimierer';
const title = '3D Druckzeit Workflow Optimierer';
const description =
  'Vergleichen Sie zwei FDM-Druckeinstellungen nebeneinander: Schichtanzahl, korrigierte Druckzeit, Filamentverbrauch, Kosten, Qualitätsabwägungen und Hardware-Geschwindigkeitswarnungen.';

const faqData = [
  {
    question: 'Worin unterscheidet sich das von einem einfachen Druckzeitrechner?',
    answer:
      'Er berücksichtigt Modellkomplexität, schichtbasierte Rückzugzeit, füllungsangepasstes Volumen, Filamentmasse, Materialkosten und einen Szenarienvergleich.',
  },
  {
    question: 'Kann dieser Rechner Slicer-Zeitschätzungen ersetzen?',
    answer:
      'Nein. Ein Slicer kennt genaue Werkzeugpfade. Dieser Optimierer dient zur Planung vor dem Slicen.',
  },
  {
    question: 'Was ändert die Komplexitätseinstellung?',
    answer:
      'Niedrige, mittlere und hohe Komplexität wenden Überlastkoeffizienten für Verfahrbewegungen, Beschleunigungsverluste, Ecken und Inseln an.',
  },
  {
    question: 'Warum warnt das Tool über 100 mm/s?',
    answer:
      'Viele Standarddrucker können sich schneller bewegen, aber Extrusionskonsistenz und Kühlung machen hohe Geschwindigkeiten ohne Kalibrierung riskant.',
  },
];

const howToData = [
  { name: 'Modellgrösse und Volumen eingeben', text: 'Höhe und Volumen aus CAD, Slicer oder Näherung hinzufügen.' },
  { name: 'Szenario A einstellen', text: 'Schichthöhe, Geschwindigkeit, Linienbreite, Füllung, Material und Komplexität wählen.' },
  { name: 'Szenario B einstellen', text: 'Zweite Konfiguration zum Vergleich anpassen.' },
  { name: 'Auswirkung lesen', text: 'Zeit, Filament, Kosten, Schichten, Effizienz und Durchfluss vergleichen.' },
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
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'de',
};

export const content: ToolLocaleContent<PrintTimeWorkflowOptimizerUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Eingaben für den Druckzeit-Workflow',
    resultsAriaLabel: 'Ergebnisse des Druckzeit-Workflows',
    unitSystemLabel: 'Einheiten',
    metricLabel: 'Metrisch',
    imperialLabel: 'US',
    currencyLabel: 'Währung',
    currencyOptions: [
      { code: 'USD', label: '$', symbol: '$' },
      { code: 'EUR', label: 'EUR', symbol: 'EUR' },
      { code: 'GBP', label: 'GBP', symbol: 'GBP' },
      { code: 'CAD', label: 'C$', symbol: 'C$' },
      { code: 'AUD', label: 'A$', symbol: 'A$' },
      { code: 'CHF', label: 'Fr', symbol: 'Fr' },
      { code: 'CNY', label: 'CNY', symbol: 'CNY' },
      { code: 'INR', label: 'INR', symbol: 'INR' },
      { code: 'BRL', label: 'R$', symbol: 'R$' },
      { code: 'MXN', label: 'MXN', symbol: 'MXN' },
      { code: 'RUB', label: 'RUB', symbol: 'RUB' },
      { code: 'PLN', label: 'PLN', symbol: 'PLN' },
      { code: 'SEK', label: 'SEK', symbol: 'SEK' },
      { code: 'NOK', label: 'NOK', symbol: 'NOK' },
      { code: 'DKK', label: 'DKK', symbol: 'DKK' },
      { code: 'TRY', label: 'TRY', symbol: 'TRY' },
      { code: 'JPY', label: 'JPY', symbol: 'JPY' },
    ],
    scenarioALabel: 'Szenario A',
    scenarioBLabel: 'Szenario B',
    modelHeightLabel: 'Modellhöhe',
    modelVolumeLabel: 'Geschätztes Volumen',
    layerHeightLabel: 'Schichthöhe',
    speedLabel: 'Geschwindigkeit',
    lineWidthLabel: 'Linienbreite',
    infillLabel: 'Füllung',
    complexityLabel: 'Komplexität',
    complexityTooltip: 'Komplexität schätzt Totzeit durch Beschleunigungen, Ecken, Rückzüge, Inseln und kurze Verfahrbewegungen.',
    pieceTypeLabel: 'Teiletyp',
    solidPieceLabel: 'Massiv / durchgehend',
    hollowPieceLabel: 'Hohl / viele Hohlräume',
    materialLabel: 'Material',
    filamentPriceLabel: 'Filamentpreis',
    lowComplexity: 'Niedrig - einfache Flächen',
    mediumComplexity: 'Mittel - gemischte Geometrie',
    highComplexity: 'Hoch - viele Inseln',
    estimatedTimeLabel: 'Geschätzte Zeit',
    filamentLabel: 'Filament',
    costLabel: 'Materialkosten',
    layersLabel: 'Schichten',
    efficiencyLabel: 'Effizienz',
    flowLabel: 'Volumenstrom',
    flowTooltip: 'Wenn dieser Wert 10-12 mm3/s an einem Standard-Hotend übersteigt, steigt das Unterextrusionsrisiko.',
    flowUnit: 'mm3/s',
    qualityTradeoffLabel: 'Qualitätsabwägung',
    speedReductionLabel: '-10% Geschwindigkeit',
    speedReductionAddsLabel: 'fügt',
    speedReductionMinutesLabel: 'Min',
    qualityGainLabel: 'für etwa 8% sauberere Oberfläche',
    hardwareWarning: 'Geschwindigkeit über 100 mm/s. Hotend-Durchfluss, Kühlung, Beschleunigung und Extrusionskalibrierung prüfen.',
    flowWarning: 'Volumenstrom über der Komfortzone eines Standard-Hotends.',
    bestValueLabel: 'Bestes Verhältnis',
    timeDeltaLabel: 'Zeitdifferenz',
    costDeltaLabel: 'Kostendifferenz',
    materialDeltaLabel: 'Materialdifferenz',
    winnerBadge: 'Bestes Verhältnis',
    scenarioPrefix: 'Szenario',
    inScenarioLabel: 'in',
    fasterDirection: 'schneller',
    cheaperDirection: 'günstiger',
    lighterDirection: 'leichter',
    criterionAlignedLabel: 'Entspricht dem besten Verhältnis',
    criterionTradeoffLabel: 'Kompromiss für bestes Verhältnis',
    infoGlyph: 'i',
    metricVolumeUnit: 'cm3',
    imperialVolumeUnit: 'in3',
    gramUnit: 'g',
    ounceUnit: 'oz',
    kilogramUnit: 'kg',
    hourUnit: 'h',
    minuteUnit: 'Min',
    millimeterUnit: 'mm',
    metricSpeedUnit: 'mm/s',
    imperialSpeedUnit: 'in/s',
    inchUnit: 'in',
    percentUnit: '%',
    materials: [
      { value: 'pla', label: 'PLA' },
      { value: 'petg', label: 'PETG' },
      { value: 'abs', label: 'ABS' },
      { value: 'asa', label: 'ASA' },
      { value: 'nylon', label: 'Nylon' },
      { value: 'tpu', label: 'TPU' },
    ],
  },
  seo: [
    { type: 'title', text: '3D-Druckzeit vor dem Slicen abschätzen', level: 2 },
    {
      type: 'paragraph',
      html: 'Ein nützlicher <strong>3D-Druckzeit-Rechner</strong> kann nicht einfach nur Volumen durch Geschwindigkeit teilen. FDM-Drucker verbringen Zeit mit Beschleunigen, Abbremsen in Kurven, Filamentrueckzug, Verfahrbewegungen zwischen Inseln, Kühlen kleiner Schichten und Druckerholung nach Richtungswechseln. Der Optimierer modelliert das Bauteil als druckbares Volumen, Linienbreite, Schichthöhe, Geschwindigkeit, Schichtanzahl und einen Komplexitätskoeffizienten, damit die frühe Planung realen Workflow-Entscheidungen näher kommt.',
    },
    {
      type: 'paragraph',
      html: 'Die Basis-Extrusionszeit wird aus Volumen dividiert durch volumetrischen Durchfluss berechnet: Geschwindigkeit multipliziert mit Linienbreite und Schichthöhe. Dann wendet das Tool einen Korrekturkoeffizienten für die Modellkomplexität an und addiert einen festen Rückzugsbetrag pro Schicht. Dies erhebt nicht den Anspruch von Slicer-Präzision, ermöglicht aber einen ehrlicheren Vergleich zwischen einer 0,20-mm-Entwurfseinstellung und einer 0,12-mm-Qualitätseinstellung als ein linearer Rechner.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '1.15x', label: 'Geringer Overhead für einfache Blöcke und glatte Teile', icon: 'mdi:cube-outline' },
        { value: '1.60x', label: 'Hoher Overhead für viele Inseln und Rückzüge', icon: 'mdi:vector-polyline' },
        { value: '0.5 s', label: 'Planmässiger Rückzugsbetrag pro Schicht', icon: 'mdi:timer-outline' },
        { value: '100 mm/s', label: 'Warnschwelle für Standarddrucker bei Extrusionsrisiko', icon: 'mdi:alert-outline' },
      ],
    },
    {
      type: 'tip',
      title: 'Möglichst Slicer Volumen verwenden',
      html: '<p>Die beste Volumeneingabe ist das Slicer- oder CAD-Materialvolumen des Modells, nicht die äussere Bounding-Box. Bounding-Boxen enthalten leere Luft um Kurven, Löcher, Griffe und Hohlräume und können daher Zeit und Filament übertreiben.</p>',
    },
    { type: 'title', text: 'Warum die Schichthöhe die Zeit so stark beeinflusst', level: 2 },
    {
      type: 'paragraph',
      html: 'Die Schichthöhe wirkt sich doppelt auf die Druckzeit aus. Erstens ändert sie den volumetrischen Durchsatz: Eine 0,12-mm-Schicht extrudiert bei gleicher Geschwindigkeit und Breite 40% weniger Kunststoff pro Sekunde als eine 0,20-mm-Schicht. Zweitens erhöht sie die Schichtanzahl, sodass Schichtwechsel-Overhead, Rückzüge, Druckberuhigung und Kühlentscheidungen häufiger auftreten. Deshalb können kleine kosmetische Aenderungen aus einem Fünf-Stunden-Druck einen Acht-Stunden-Druck machen.',
    },
    {
      type: 'table',
      headers: ['Schichthöhe', 'Typische Verwendung', 'Auswirkung auf den Workflow'],
      rows: [
        ['0,28-0,32 mm', 'Entwurfsteile, grosse Vorrichtungen, schnelle Prüfungen', 'Niedrige Schichtzahl und hoher Durchsatz, aber sichtbare Schichtlinien.'],
        ['0,18-0,22 mm', 'Allgemeiner PLA- und PETG-Druck', 'Ausgewogene Zeit, Festigkeit und Oberflächenqualität für viele Desktop-Drucker.'],
        ['0,10-0,14 mm', 'Miniaturen, gebogene Hülle, sichtbare Konsumententeile', 'Deutlich längere Aufträge, da Durchsatz sinkt und Schichtzahl steigt.'],
        ['Unter 0,10 mm', 'Spezielle Nachbearbeitungsfälle', 'Häufig begrenzt durch Maschinengenauigkeit, Kühlung und abnehmende visuelle Erträge.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Feine Schichten können langsamer sein als die Formel vermuten lässt',
      badge: 'Kühlung und minimale Schichtzeit',
      html: '<p>Kleine Modelle können im Slicer die minimale Schichtzeit erreichen. Dann verlangsamt der Drucker, um das Plastik abkühlen zu lassen, selbst wenn die volumetrische Formel besagt, dass die Maschine schneller sein könnte.</p>',
    },
    {
      type: 'summary',
      title: 'Regeln zur Schichthöhe',
      items: [
        'Geringere Schichthöhe reduziert den Durchfluss pro Sekunde bei gleicher Geschwindigkeit.',
        'Mehr Schichten erhöhen den wiederholten Overhead, selbst wenn das Modellvolumen unverändert bleibt.',
        'Der beste Vergleich ist szenarienbasiert: Entwurfsprofil gegen Qualitätsprofil.',
      ],
    },
    { type: 'title', text: 'Modellkomplexität und Totzeit', level: 2 },
    {
      type: 'paragraph',
      html: 'Totzeit ist die Lücke zwischen theoretischer Extrusion und der tatsächlichen Auftragszeit. Eine gerade vasenähnliche Wand hat wenig Verfahrwege und wenige Rückzüge. Ein mechanisches Gehäuse mit vielen Löchern, Vorsprüngen, Beschriftungen, Rippen und getrennten Inseln zwingt den Drucker zu vielen Start-Stopp-Vorgängen. Beschleunigungsgrenzen bedeuten, dass die Düse auf kurzen Segmenten möglicherweise nie die befohlene Geschwindigkeit erreicht, sodass die tatsächliche Durchschnittsgeschwindigkeit niedriger ist als der Schiebereglerwert.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: 'Niedrige Komplexität', description: 'Glatte Modelle, durchgehende Konturen, wenige Inseln, begrenzte interne Verfahrwege.', icon: 'mdi:shape-outline', points: ['Geringerer Overhead', 'Stabile Geschwindigkeit', 'Wenige Rückzüge'] },
        { title: 'Mittlere Komplexität', description: 'Typische Funktionsteile mit Löchern, gemischten Kurven, Füllungsänderungen und mässigen Verfahrwegen.', icon: 'mdi:cog-outline', highlight: true, points: ['Ausgewogener Standard', 'Etwas Verfahrverlust', 'Nützliche Angebotsbasis'] },
        { title: 'Hohe Komplexität', description: 'Texturierte Oberflächen, viele getrennte Merkmale, Stützschnittstellen und retraktionsintensive Bereiche.', icon: 'mdi:transit-connection-variant', points: ['Hoher Overhead', 'Erhöhtes Fadenziehrisiko', 'Längere tatsächliche Druckzeit'] },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Overhead-Koeffizient', definition: 'Ein Multiplikator, der Verfahrbewegungen, Beschleunigungsverluste, Rückzüge und andere Zeiten annähert, die von der gleichmässigen Extrusionsberechnung nicht erfasst werden.' },
        { term: 'Volumetrischer Durchfluss', definition: 'Die Menge an Kunststoff, die pro Sekunde durch die Düse gedrückt wird, berechnet als Geschwindigkeit mal Linienbreite mal Schichthöhe.' },
        { term: 'Schichtanzahl', definition: 'Die Modellhöhe geteilt durch die Schichthöhe, aufgerundet, da teilweise letzte Schichten immer noch einen Durchlauf erfordern.' },
        { term: 'Unterextrusion', definition: 'Ein Defekt, bei dem der Hotend oder Extruder nicht genug geschmolzenes Plastik für die angeforderte Geschwindigkeit und Liniengeometrie liefern kann.' },
      ],
    },
    {
      type: 'message',
      title: 'Behandeln Sie Komplexität als Kalibrierungsknopf',
      ariaLabel: 'Hinweis zum Komplexitätskoeffizienten',
      html: '<p>Wenn Ihr Slicer für ähnliche Modelle durchweg längere Zeiten als dieser Optimierer meldet, erhöhen Sie die Komplexität. Wenn Ihr Direct-Drive-Drucker mit abgestimmter Beschleunigung die Schätzung unterbietet, senken Sie sie für zukünftige Planungen.</p>',
    },
    { type: 'title', text: 'Filamentverbrauch, Kosten und Füllung', level: 2 },
    {
      type: 'paragraph',
      html: 'Zeit ist nur ein Teil der Workflow-Entscheidung. Filamentgewicht und -kosten sind wichtig bei der Angebotserstellung, der Planung von Chargenarbeiten oder der Entscheidung, ob sich ein feindetailiertes Profil lohnt, das den Drucker länger belegt. Der Optimierer schätzt das korrigierte druckbare Volumen, indem er einen Schalenanteil beibehalt und den Innenbereich nach Füllungsprozentsatz skaliert, und multipliziert dieses Volumen dann mit der Materialdichte.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Verwenden Sie PLA mit etwa 1,24 g/cm3 und PETG mit etwa 1,27 g/cm3 für eine schnelle Materialplanung.',
        'Erhöhen Sie das geschätzte Volumen, wenn Stützen, Bäder, Rafts oder Reinigungsstrukturen Teil des Auftrags sind.',
        'Weniger Füllung reduziert Filament und Zeit, aber Wände, obere und untere Schichten verbrauchen weiterhin Material.',
        'Vergleichen Sie bei Produktionschargen die Rechnerschätzungen mit dem tatsächlich verwendeten Spulengewicht und passen Sie zukünftige Angebote an.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:cash-clock',
      title: 'Beispiel für eine Workflow Entscheidung',
      html: '<p>Ein 120-cm3-PLA-Teil mit 0,20-mm-Schichten mag für eine Werkstattvorrichtung akzeptabel sein, während die 0,12-mm-Version besser aussieht, aber den Drucker länger belegt. Der Vergleich von Zeit und Materialkosten nebeneinander macht den Kompromiss sichtbar, bevor die Maschine gebunden ist.</p>',
    },
    {
      type: 'proscons',
      title: 'Geschwindigkeit gegen Qualität optimieren',
      items: [
        { pro: 'Höhere Geschwindigkeit kann Druckerkapazität für mehr Aufträge pro Tag freisetzen.', con: 'Sie kann Ringing, schwache Ecken, schlechte Kühlung und Hotend-Durchflussgrenzen aufdecken.' },
        { pro: 'Niedrigere Geschwindigkeit verbessert oft die Oberflächengüte und Dimensionsgenauigkeit.', con: 'Sie erhöht die Wartezeit und kann kleine kommerzielle Teile weniger rentabel machen.' },
        { pro: 'Geringere Schichthöhe verbessert gebogene Oberflächen und Miniaturen.', con: 'Sie vervielfacht die Schichtanzahl und den wiederholten Maschinen-Overhead.' },
      ],
    },
    { type: 'title', text: 'Hardware-Warnungen und praktische Geschwindigkeitsgrenzen', level: 2 },
    {
      type: 'paragraph',
      html: 'Ein Slicer-Geschwindigkeitswert ist keine Garantie dafür, dass die Düse diese Geschwindigkeit überall hält. Standard-Cartesian-Bedslinger, ältere Bowden-Extruder, Hotends mit kurzer Schmelzzone und schwache Teilkühlung können über 100 mm/s Probleme bekommen, sofern nicht Beschleunigung, Jerk, Pressure Advance, Temperatur und Durchflusskalibrierung abgestimmt sind. Die Warnung bedeutet nicht, dass der Druck fehlschlägt; sie bedeutet, dass die angeforderte Einstellung gegen das Hardwareverhalten geprüft werden sollte.',
    },
    {
      type: 'table',
      headers: ['Symptom', 'Wahrscheinliche Ursache', 'Planungsmassnahme'],
      rows: [
        ['Dünne Wände oder Lücken', 'Hotend kann nicht genug Kunststoff schmelzen oder Extruder rutscht', 'Geschwindigkeit reduzieren, Temperatur vorsichtig erhöhen oder Linienbreite/Schichthöhe verringern.'],
        ['Ringing an Ecken', 'Beschleunigung und Rahmenvibration dominieren', 'Beschleunigung verringern oder Geschwindigkeit für sichtbare Wände reduzieren.'],
        ['Gekräuselte kleine Details', 'Kühlung kann nicht mithalten', 'Geschwindigkeit reduzieren, Lüfter erhöhen oder mehrere Kopien drucken.'],
        ['Fadenziehen bei komplexen Teilen', 'Viele Verfahrwege und Rückzüge', 'Komplexitäts-Overhead erhöhen und Rückzug/Temperatur anpassen.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Der volumetrische Durchfluss ist die wahre Geschwindigkeitsgrenze',
      badge: 'mm3/s prüfen',
      html: '<p>Zwei Profile mit derselben Bewegungsgeschwindigkeit können unterschiedliche Schmelzraten verlangen. Eine 0,30-mm-Schicht und 0,50-mm-Linie bei 80 mm/s benötigen weit mehr Kunststoff pro Sekunde als eine 0,12-mm-Schicht und 0,42-mm-Linie bei derselben Geschwindigkeit.</p>',
    },
    {
      type: 'summary',
      title: 'Optimierer vor dem Slicen verwenden',
      items: [
        'Vergleichen Sie zwei Kandidatenprofile, anstatt aus einer einzelnen Zahl zu raten.',
        'Beobachten Sie Schichtanzahl, volumetrischen Durchfluss und Hardware-Warnungen gemeinsam.',
        'Behalten Sie die letzte Interaktion lokal, damit die wiederholte Planung von der vorherigen Einstellung fortgesetzt werden kann.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
