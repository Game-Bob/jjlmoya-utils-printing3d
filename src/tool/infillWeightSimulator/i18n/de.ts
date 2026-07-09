import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InfillWeightSimulatorUI } from '../ui';

const slug = '3d-druck-gewicht-infill-prozent-rechner';
const title = '3D Druck Gewicht Infill Prozent Rechner';
const description =
  'Schätze Bauteilgewicht, gespartes Filament und Materialkosten beim Ändern von Infill-Prozentsatz und -Muster ausgehend von einem 100%-Infill-Referenzgewicht.';

const faqData = [
  {
    question: 'Kann ich das 3D-Druck-Gewicht aus dem 100%-Infill-Gewicht schätzen?',
    answer:
      'Ja, aber die Schätzung sollte Hüllen, Wände, Deckschichten und Bodenschichten vom inneren Infill getrennt halten. Ein Bauteil wird bei 0% Infill nicht gewichtslos, weil der äußere Umfang weiterhin Material verwendet.',
  },
  {
    question: 'Warum ändert das Infill-Muster das geschätzte Gewicht?',
    answer:
      'Verschiedene Muster erzeugen bei gleicher nomineller Dichte unterschiedliche Werkzeugpfadlängen. Linien- und konzentrische Muster sind normalerweise leichter, während Waben-, Kubik- und Dreiecksmuster tendenziell mehr innere Wandlänge hinzufügen.',
  },
  {
    question: 'Ist das Slicer-Gewicht genauer als dieser Rechner?',
    answer:
      'Ein Slicer ist genauer, sobald das Modell, die Düse, die Extrusionsbreite, die Wandanzahl, die Deckschichten und das Materialprofil bekannt sind. Dieser Rechner ist für die schnelle Planung vor dem erneuten Slicen vieler Versionen ausgelegt.',
  },
  {
    question: 'Welchen Hüllenanteil sollte ich verwenden?',
    answer:
      'Für viele dekorative oder mittelgroße FDM-Teile ist ein Hüllenanteil von 20-35% ein praktischer Ausgangsbereich. Kleine Teile, dünne Objekte und Teile mit vielen Löchern können einen höheren Hüllenanteil haben.',
  },
];

const howToData = [
  {
    name: 'Von einer 100%-Infill-Referenz ausgehen',
    text: 'Verwende das vom Slicer gemeldete Gewicht für dasselbe Modell bei 100% Infill oder wiege einen bekannten vollständig dichten Referenzdruck.',
  },
  {
    name: 'Ziel-Infill und -Muster wählen',
    text: 'Bewege den Infill-Regler und wähle das Muster, das der Slicer-Einstellung am nächsten kommt, die du verwenden willst.',
  },
  {
    name: 'Hüllen- und Verschwendungsannahmen anpassen',
    text: 'Erhöhe den Hüllenanteil für dünne oder umfangsintensive Modelle und füge Verschwendung für Reinigung, Saum, Randunterstützung, Stützen und Fehlstarts hinzu.',
  },
  {
    name: 'Gewichts- und Kosteneinsparungen ablesen',
    text: 'Vergleiche das endgültige geschätzte Gewicht mit der 100%-Infill-Baseline, um zu entscheiden, ob die Materialeinsparung den Steifigkeitskompromiss wert ist.',
  },
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
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'de',
};

export const content: ToolLocaleContent<InfillWeightSimulatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Infill-Gewicht-Eingaben',
    resultsAriaLabel: 'Geschätzte Druckgewicht-Ergebnisse',
    unitSystemLabel: 'Einheiten',
    metricLabel: 'Metrisch',
    imperialLabel: 'US',
    currencyLabel: 'Währung',
    currencyOptions: [
      { code: 'USD', label: '$', symbol: '$' },
      { code: 'EUR', label: '€', symbol: '€' },
      { code: 'GBP', label: '£', symbol: '£' },
      { code: 'CAD', label: 'C$', symbol: 'C$' },
      { code: 'AUD', label: 'A$', symbol: 'A$' },
      { code: 'CHF', label: 'Fr', symbol: 'Fr' },
      { code: 'CNY', label: '¥', symbol: '¥' },
      { code: 'INR', label: '₹', symbol: '₹' },
      { code: 'BRL', label: 'R$', symbol: 'R$' },
      { code: 'MXN', label: '$', symbol: '$' },
      { code: 'RUB', label: '₽', symbol: '₽' },
      { code: 'PLN', label: 'zł', symbol: 'zł' },
      { code: 'SEK', label: 'kr', symbol: 'kr' },
      { code: 'NOK', label: 'kr', symbol: 'kr' },
      { code: 'DKK', label: 'kr', symbol: 'kr' },
      { code: 'TRY', label: '₺', symbol: '₺' },
      { code: 'JPY', label: '¥', symbol: '¥' },
    ],
    fullWeightLabel: '100%-Infill-Gewicht',
    fullWeightHint: 'Verwende den Slicer-Wert für dasselbe Modell bei voller Dichte.',
    infillLabel: 'Ziel-Infill',
    patternLabel: 'Infill-Muster',
    patternOptions: [
      { value: 'lines', label: 'Linien - leichte Pfade' },
      { value: 'grid', label: 'Gitter - Slicer-Baseline' },
      { value: 'triangles', label: 'Dreiecke - starre Zellen' },
      { value: 'gyroid', label: 'Gyroid - glattes Gitter' },
      { value: 'cubic', label: 'Kubisch - 3D-Steifigkeit' },
      { value: 'honeycomb', label: 'Wabe - dichte Wände' },
      { value: 'concentric', label: 'Konzentrisch - Konturfolgend' },
    ],
    shellShareLabel: 'Hüllenanteil',
    shellShareHint: 'Wände, Deckschichten, Bodenschichten und massive Merkmale, die nicht mit dem Infill skalieren.',
    spoolPriceLabel: 'Filamentpreis',
    wasteLabel: 'Verschwendung',
    estimatedWeightLabel: 'Geschätztes Bauteilgewicht',
    filamentSavedLabel: 'Filament gespart',
    materialCostLabel: 'Materialkosten',
    costSavedLabel: 'Kosten gespart',
    effectiveDensityLabel: 'Effektive Dichte',
    shellLabel: 'Hülle',
    infillCoreLabel: 'Infill-Kern',
    patternImpactLabel: 'Muster-Multiplikator',
    comparisonLabel: 'Baseline-Vergleich',
    fullInfillLabel: '100% Infill',
    targetInfillLabel: 'Zielaufbau',
    insightLow: 'Sehr niedriges Infill kann viel Filament sparen, aber Deckflächen, Schraubenbosse, Clips und lasttragende Zonen können zusätzliche Wände oder lokale Modifikatoren benötigen.',
    insightBalanced: 'Dies ist eine ausgewogene Planungszone für viele visuelle und leichte Funktionsdrucke: die Hülle trägt die Form, während das Infill Steifigkeit und Kosten steuert.',
    insightHigh: 'Hohes Infill verringert die Einsparlücke schnell. Ziehe mehr Wände, ein stärkeres Muster oder eine andere Materialwahl in Betracht, bevor du überall dichtes Infill verwendest.',
  },
  seo: [
    { type: 'title', text: 'Wie ein 3D-Druck-Gewicht-Infill-Prozent-Rechner funktioniert', level: 2 },
    {
      type: 'paragraph',
      html: 'Ein <strong>3D-Druck-Gewicht-Infill-Prozent-Rechner</strong> schätzt, wie viel Kunststoff übrig bleibt, wenn ein Modell mit weniger als 100% innerer Dichte gedruckt wird. Das wichtige Detail ist, dass das FDM-Gewicht keine einfache Multiplikation des Vollgewichts mit dem Infill-Prozentsatz ist. Ein mit 20% Infill gedrucktes Modell wiegt normalerweise nicht 20% der vollständig dichten Version, weil Wände, Deckschichten, Bodenschichten, kleine massive Bereiche, Säume und Stützschnittstellen immer noch Filament verbrauchen. Dieser Rechner beginnt mit dem bekannten oder vom Slicer gemeldeten Gewicht bei 100% Infill, trennt einen konfigurierbaren Hüllenanteil ab und skaliert dann den inneren Kern nach Ziel-Infill und Musterverhalten.',
    },
    {
      type: 'paragraph',
      html: 'Die Methode ist für schnelle Vergleiche ausgelegt, bevor du Zeit damit verbringst, eine Datei viele Male neu zu slicen. Wenn eine vollständig dichte PETG-Halterung auf 240 g geschätzt wird, ergibt der Wechsel zu 20% Gyroid möglicherweise kein 48-g-Teil. Bei einem Hüllenanteil von 28% liegt die Umfangsmasse bereits bei etwa 67 g, bevor die innere Dichte gezählt wird. Der Infill-Kern fügt dann Material gemäß der gewählten Dichte und dem Muster-Multiplikator hinzu. Das Ergebnis ist ein Planungswert, der realistischer ist als lineare Infill-Mathematik und dennoch schnell genug für frühe Entscheidungen.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '20-35%', label: 'Typischer Hüllenanteil für viele mittlere FDM-Teile', icon: 'mdi:cube-outline' },
        { value: '0,88x', label: 'Leichter Kontur-Multiplikator für konzentrisches Infill', icon: 'mdi:chart-line' },
        { value: '1,16x', label: 'Dichter Pfad-Multiplikator für Wabenplanung', icon: 'mdi:hexagon-multiple' },
        { value: '100%', label: 'Referenzgewicht als Baseline für Einsparungen', icon: 'mdi:weight-gram' },
      ],
    },
    {
      type: 'tip',
      title: 'Verwende dasselbe Slicer Profil für die Referenz',
      html: '<p>Für die sauberste Schätzung generiere das 100%-Infill-Gewicht mit derselben Düse, Extrusionsbreite, Wandanzahl, Deckschichten, Bodenschichten, Materialdichte und Stützeinstellung, die du für den Zieldruck verwenden wirst. Eine Änderung dieser Einstellungen ändert die Hüllenmasse, sodass der reine Infill-Vergleich weniger aussagekräftig wird.</p>',
    },

    { type: 'title', text: 'Warum Infill-Gewicht nicht linear ist', level: 2 },
    {
      type: 'paragraph',
      html: 'Der Begriff <em>Infill-Prozentsatz</em> klingt nach einem direkten Dichtewert, aber Slicer wenden ihn nur auf den inneren Bereich an, der nach der Erzeugung von Umfängen und massiven Oberflächen übrig bleibt. Ein einfacher Würfel mit zwei Wänden und sechs Deckschichten kann ein großes inneres Volumen haben, sodass der Infill-Prozentsatz das Gewicht stark beeinflusst. Ein dünner Handy-Ständer, ein Getriebegehäuse mit vielen Löchern oder eine Miniatur mit schmalen Gliedmaßen können so viel Umfangsgeometrie haben, dass die Senkung des Infills eine geringere Einsparung bringt als erwartet. Aus diesem Grund legt der Rechner den <strong>Hüllenanteil</strong> offen, anstatt ihn zu verstecken.',
    },
    {
      type: 'table',
      headers: ['Modelltyp', 'Voraussichtlicher Hüllenanteil', 'Bedeutung für Einsparungen'],
      rows: [
        ['Großes rechteckiges Gehäuse', '15-25%', 'Die meiste Masse ist Innenvolumen, daher ändert Infill das Gewicht stark.'],
        ['Dekorative Figur oder organisches Modell', '25-45%', 'Viele Kurven und schmale Bereiche erzeugen umfangsintensive Geometrie.'],
        ['Dünne Halterung oder Platte', '35-60%', 'Wände und Oberflächen dominieren; Infill-Reduzierung spart möglicherweise weniger Kunststoff.'],
        ['Kleiner mechanischer Clip', '45-70%', 'Das Modell kann allein durch Umfänge nahezu massiv sein.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Wenn die Schätzung zu schwer erscheint',
      badge: 'Hüllenanteil prüfen',
      html: '<p>Wenn eine 10%-Infill-Einstellung immer noch ein hohes geschätztes Gewicht ergibt, ist der Hüllenanteil wahrscheinlich groß. Das kann bei kleinen oder dünnen Teilen korrekt sein. Überprüfe die Wandanzahl, die Deck- und Bodendicke und ob das Modell viele getrennte Inseln oder schmale Rippen hat.</p>',
    },
    {
      type: 'summary',
      title: 'Praktische Interpretation',
      items: [
        'Der Infill-Prozentsatz betrifft nur den inneren Kern, nicht den gesamten Druck.',
        'Ein 0%-Infill-Teil hat immer noch Wände, Häute, Nähte und manchmal massive kleine Merkmale.',
        'Vollgewichts-Referenz, Hüllenanteil, Musterwahl und Verschwendungsaufschlag ergeben zusammen eine bessere Planungszahl.',
      ],
    },

    { type: 'title', text: 'Infill-Muster-Gewichts-Multiplikatoren', level: 2 },
    {
      type: 'paragraph',
      html: 'Zwei Drucke können beide auf 25% Infill eingestellt sein und dennoch unterschiedliche Filamentmengen verbrauchen, weil sich die Werkzeugpfadgeometrie ändert. Linien- und konzentrische Muster erzeugen oft leichtere innere Pfade, da sie einige Kreuzungsstrukturen vermeiden. Gitter, Dreiecke, Kubik, Gyroid und Wabe erzeugen unterschiedliche Überlappungen, Richtungsverstärkungen und Pfadlängen. Der Rechner modelliert dies mit einem kleinen <strong>Muster-Multiplikator</strong>, der auf den inneren Kern angewendet wird, nicht auf das gesamte Teil.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Linien und konzentrisch',
          description: 'Nützlich, wenn minimales Gewicht und schnelles Drucken wichtiger sind als gleichmäßige Steifigkeit.',
          icon: 'mdi:format-line-spacing',
          points: ['Niedrigere Pfaddichte', 'Gut für Dekorteile', 'Richtungsfestigkeit kann ungleichmäßig sein'],
        },
        {
          title: 'Gitter und Gyroid',
          description: 'Ausgewogene Wahl für gängige visuelle und funktionale Drucke, bei denen Steifigkeit zählt.',
          icon: 'mdi:grid',
          highlight: true,
          points: ['Vorhersagbare Slicer-Baseline', 'Guter Steifigkeits-Gewichts-Kompromiss', 'Gyroid verteilt Lasten gleichmäßig'],
        },
        {
          title: 'Kubik, Dreiecke, Wabe',
          description: 'Schwerere Planungswahlen, die die Steifigkeit verbessern, aber die Filamenteinsparung reduzieren können.',
          icon: 'mdi:hexagon-outline',
          points: ['Mehr innere Wandlänge', 'Bessere multidirektionale Steifigkeit', 'Längere Druckzeit ist üblich'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Musterauswahl und Kompromisse',
      items: [
        { pro: 'Leichtere Muster reduzieren Materialkosten und können die Druckzeit verkürzen.', con: 'Sie können schwächere Richtungen oder weniger Deckflächenunterstützung erzeugen.' },
        { pro: 'Dichte Muster verbessern das Gefühl von starren Teilen und reduzieren Flex.', con: 'Sie können sich den Kosten von höherem Infill annähern, ohne das schwache Wanddesign zu lösen.' },
        { pro: 'Gyroid verteilt Lasten gleichmäßig in viele Richtungen.', con: 'Es kann auf Maschinen mit konservativen Beschleunigungseinstellungen langsamer drucken.' },
      ],
    },
    {
      type: 'message',
      title: 'Muster Multiplikatoren sind Planungsannahmen',
      ariaLabel: 'Hinweis zu Muster-Multiplikatoren',
      html: '<p>Slicer-Engines implementieren Muster unterschiedlich. Behandle den Multiplikator als frühen Schätzer und bestätige wichtige Produktionsaufträge mit einer echten Slicer-Vorschau und dem Materialverbrauchsbericht.</p>',
    },

    { type: 'title', text: 'Berechnung von Filament- und Kosteneinsparungen', level: 2 },
    {
      type: 'paragraph',
      html: 'Die Materialkostenschätzung multipliziert die endgültigen Gramm mit dem Spulenpreis pro Kilogramm. Wenn der Rechner einen 126-g-Druck vorhersagt und die Spule 24 $ pro kg kostet, beträgt der Kunststoffanteil etwa 3,02 $ vor Maschinenzeit, Strom, Arbeit, Verpackung und Fehldrucken. Die eingesparten Kosten vergleichen dasselbe Modell mit der 100%-Infill-Baseline unter Verwendung desselben Verschwendungsprozentsatzes. Dies ist nützlich für Angebote, Chargenplanung und die Entscheidung, ob eine schwerere Infill-Einstellung das zusätzliche Material wert ist.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Verwende den Verschwendungsprozentsatz für Reinigungslinien, Säume, Randunterstützung, Stützen, Flöße, Farbwechsel und kurze Fehlstarts.',
        'Für einzelne Prototypen ist eine Verschwendungsmarge von 5-10% meist realistischer als null.',
        'Für Produktionschargen mit Stützen oder abrasiven Materialien erfasse das tatsächliche Rest- und Fehlgewicht über mehrere Aufträge.',
        'Beim Vergleich von PLA, PETG, ABS, ASA, Nylon und gefüllten Kompositen verwende den Spulenpreis für das genaue Material, nicht einen generischen Durchschnitt.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:cash-multiple',
      title: 'Beispiel: Vom dichten Prototypen zum Produktions Infill',
      html: '<p>Ein 100%-Infill-Prototyp wiegt 240 g. Bei einem Hüllenanteil von 28%, 20% Gyroid, 6% Verschwendung und 24 $/kg Filament landet die Schätzung im niedrigen dreistelligen Grammbereich statt bei 48 g. Dieser Unterschied zählt bei der Angebotserstellung für 40 Exemplare: Kleine Fehler pro Teil werden zu ganzen Spulen Kunststoff.</p>',
    },
    {
      type: 'table',
      headers: ['Eingabe', 'Warum wichtig', 'Häufiger Fehler'],
      rows: [
        ['100%-Gewicht', 'Definiert die maximale Material-Baseline.', 'Verwendung einer anderen Wandanzahl als beim Zieldruck.'],
        ['Ziel-Infill', 'Steuert die innere Kerndichte.', 'Annahme, dass 20% Infill 20% des Gesamtgewichts bedeuten.'],
        ['Muster', 'Ändert Werkzeugpfadlänge und Steifigkeit.', 'Ignorieren des Musters beim Vergleich von Slicer-Voreinstellungen.'],
        ['Verschwendung', 'Fügt echtes Filament außerhalb des Endteils hinzu.', 'Vergessen von Stützen und Fehlstarts.'],
      ],
    },

    { type: 'title', text: 'Infill für Gewichtseinsparung ohne schwache Teile wählen', level: 2 },
    {
      type: 'paragraph',
      html: 'Gewichtseinsparung ist nur wertvoll, wenn das Teil seine Aufgabe noch erfüllt. Für visuelle Modelle, Ausstellungsstücke, Cosplay-Teile und Abdeckungen kann niedriges Infill mit ausreichenden Deckschichten perfekt sein. Für Halterungen, Vorrichtungen, Gehäuse mit Schrauben, Schnappverschlüsse und Teile, die Hitze oder Stoßbelastungen ausgesetzt sind, ist die beste Verbesserung oft mehr Wände oder lokale Verstärkung, anstatt einfach das globale Infill zu erhöhen. Ein Teil mit vier Wänden und 20% Gyroid kann an den richtigen Stellen stärker sein als ein Teil mit zwei Wänden und 50% Infill.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Hüllenanteil', definition: 'Der Anteil des vollständig dichten Gewichts, der auf Wände, Deckschichten, Bodenschichten und unvermeidbare massive Geometrie entfällt.' },
        { term: 'Nominelles Infill', definition: 'Der im Slicer für den inneren Bereich nach der Hüllenerzeugung ausgewählte Prozentsatz.' },
        { term: 'Effektive Dichte', definition: 'Die geschätzte Gesamtdichte des fertigen Drucks nach Kombination von Hüllenanteil, Infill-Prozentsatz und Muster-Multiplikator.' },
        { term: 'Verschwendungsmarge', definition: 'Zusätzliches Filament für Nicht-Teile-Material wie Reinigung, Saum, Stützen, Tests und Fehlstarts.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Verwende Gewichtseinsparung nicht als einziges Designkriterium',
      badge: 'Funktionale Drucke',
      html: '<p>Teile, die über Schichtlinien belastet werden, Teile mit Gewindeeinsätzen und Teile mit Schraubenkompression benötigen separates mechanisches Denken. Infill hilft, aber Wandstärke, Ausrichtung, Material, Temperatur und Spannungskonzentration sind oft wichtiger als die Dichte allein.</p>',
    },
    {
      type: 'summary',
      title: 'Schnelle Entscheidungsregeln',
      items: [
        'Dekorative Drucke: zuerst Infill reduzieren, dann Deckflächenqualität prüfen.',
        'Leichte Funktionsdrucke: ein ausgewogenes Muster und genügend Wände vor hohem Infill verwenden.',
        'Halterungen und Vorrichtungen: Löcher, Ecken und Lastpfade mit lokalen Modifikatoren verstärken.',
        'Chargenaufträge: die endgültige Schätzung vor dem Materialkauf mit dem Slicer bestätigen.',
      ],
    },

    { type: 'title', text: 'Wann dem Rechner vertrauen und wann neu slicen?', level: 2 },
    {
      type: 'paragraph',
      html: 'Dieser Rechner eignet sich am besten für schnelle Schätzungen, erste Angebote, Materialbeschaffung und den Vergleich vieler Infill-Optionen ohne wiederholtes Öffnen des Slicers. Er ist kein Ersatz für den Slicer, wenn sich dimensionale Einstellungen ändern. Wenn du Düsendurchmesser, Extrusionsbreite, Wandanzahl, Deckdicke, Bodendicke, adaptive Schichten, Stützstil, Bügeln, Vasenmodus oder Materialdichte änderst, sollten die 100%-Baseline und der Hüllenanteil aktualisiert werden.',
    },
    {
      type: 'list',
      icon: 'mdi:calculator-variant-outline',
      items: [
        'Verwende den Rechner, wenn das Modell und das Profil weitgehend feststehen und du Dichte oder Muster auslotest.',
        'Slice neu, wenn sich Wandanzahl, Stützgenerierung, Düsengröße oder Materialprofil ändern.',
        'Wiege ein fertiges Teil, wenn du produktionsnahe Kostenaufzeichnungen oder Bestandsprognosen benötigst.',
        'Notiere tatsächliche Gramm für wiederholte Aufträge; echte Daten verbessern schnell deine Hüllenanteilsannahmen.',
      ],
    },
    {
      type: 'tip',
      title: 'Ein zuverlässiger Arbeitsablauf für Angebote',
      html: '<p>Erstelle eine vollständig dichte Slicer-Referenz, schätze mit diesem Rechner mehrere Infill-Optionen, wähle die vielversprechendsten zwei aus und slice nur diese beiden endgültigen Kandidaten neu. So bleiben Angebote schnell, während die endgültigen Preise auf slicer-spezifischen Materialberichten basieren.</p>',
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
