import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BulkFilamentRoiEstimatorUI } from '../ui';

const slug = 'filament-roi-rechner';
const title = 'Filament ROI Rechner für Bulk Spulen';
const description = 'Vergleichen Sie 1kg Filament Spulen mit 3kg, 5kg oder kundenspezifischen Bulk Spulen inklusive Feuchtigkeitsrisiko, echter Ersparnis und lokaler Währungsformatierung.';

const faqData = [
  {
    question: 'Ist eine 5kg Filament Spule immer günstiger als fünf 1kg Spulen?',
    answer: 'Nein. Sie ist nur dann günstiger, wenn der Preis pro Gramm niedriger ist und Sie das Material verbrauchen können, bevor Feuchtigkeit die Druckqualität beeinträchtigt. Langsamer Verbrauch kann aus einem Mengenrabatt Verschwendung werden lassen.',
  },
  {
    question: 'Warum zieht der Rechner eine Risikostrafe ab?',
    answer: 'Die Strafe schätzt den Wertverlust, wenn die voraussichtliche Verbrauchszeit länger ist als Ihr sicheres Lagerungsfenster. Es ist keine Wechselkursumrechnung und kein Laborfeuchtigkeitsmodell, sondern eine Planungsrisikoanpassung für realistische Kaufentscheidungen.',
  },
  {
    question: 'Brauche ich aktuelle Wechselkurse?',
    answer: 'Nein. Das Tool verwendet eine lokale Näherungstabelle, um sichtbare Preise umzurechnen, wenn Sie die Währung wechseln. Es behält die Äquivalenz, ohne einen Server zu kontaktieren. Endgültige Kaufentscheidungen sollten sich am Preis Ihres Shops oder Ihrer Bank orientieren.',
  },
  {
    question: 'Welche Lagerungszeit soll ich für PLA, PETG, TPU oder Nylon eingeben?',
    answer: 'Geben Sie den Zeitraum ein, in dem Sie das Material in Ihrer Umgebung zuverlässig trocken halten können. PLA verträgt längere Lagerung als Nylon oder TPU, aber ein offener Raum, feuchtes Klima oder eine schlechte Versiegelung kann das sichere Fenster drastisch verkürzen.',
  },
];

const howToData = [
  {
    name: 'Standardspulenpreis eingeben',
    text: 'Geben Sie den Preis der 1kg Spule ein, die Sie normalerweise kaufen würden. Das Standardgewicht kann angepasst werden, wenn Ihr Lieferant ein anderes Format verwendet.',
  },
  {
    name: 'Das Bulk Angebot eingeben',
    text: 'Wählen Sie 3kg, 5kg oder ein eigenes Gewicht und geben Sie den Gesamtpreis dieser größeren Spule in derselben Währung ein.',
  },
  {
    name: 'Lagerungsrisiko modellieren',
    text: 'Tragen Sie Ihren monatlichen Verbrauch und die maximale Lagerungszeit ein, die Sie als sicher betrachten, bevor Feuchtigkeit, Versprödung oder Trocknungsaufwand zu echten Kosten werden.',
  },
  {
    name: 'Die echte Ersparnis ablesen',
    text: 'Verwenden Sie die echte Ersparnis als Kaufentscheidung, da sie sowohl den Mengenrabatt als auch die Degradationsstrafe berücksichtigt.',
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

export const content: ToolLocaleContent<BulkFilamentRoiEstimatorUI> = {
  slug,
  title,
  description,
  ui: {
    currencyLabel: 'Währung',
    unitSystemLabel: 'Einheiten',
    metricLabel: 'Metrisch',
    imperialLabel: 'Imperial',
    standardTitle: 'Standardspule',
    bulkTitle: 'Bulk Spule',
    consumptionTitle: 'Verbrauch und Lagerung',
    standardWeightLabel: 'Standardgewicht',
    standardPriceLabel: 'Standardspulenpreis',
    bulkWeightLabel: 'Bulk Gewicht',
    bulkPresetThreeMetricLabel: '3 kg',
    bulkPresetFiveMetricLabel: '5 kg',
    bulkPresetThreeImperialLabel: '6,6 lb',
    bulkPresetFiveImperialLabel: '11 lb',
    otherWeightLabel: 'Andere',
    bulkPriceLabel: 'Bulk Spulenpreis',
    customWeightLabel: 'Eigenes Gewicht',
    monthlyUseLabel: 'Monatlicher Verbrauch',
    safeStorageLabel: 'Sicheres Lagerungsfenster',
    kgUnit: 'kg',
    lbUnit: 'lb',
    monthsUnit: 'Monate',
    realSavingsLabel: 'Echte Ersparnis nach Risiko',
    grossSavingsLabel: 'Bruttoersparnis',
    riskPenaltyLabel: 'Feuchtigkeitsrisikostrafe',
    breakEvenLabel: 'Verbrauchszeit',
    viabilityLabel: 'Wirtschaftlichkeit',
    tableMetricLabel: 'Metrisch',
    tableStandardLabel: '1kg Spule',
    tableStandardImperialLabel: '2,2lb Spule',
    tableBulkLabel: 'Bulk Spule',
    costPerGramMetric: 'Kosten pro Gramm',
    costPerOunceMetric: 'Kosten pro Unze',
    totalSpoolMetric: 'Spulenpreis',
    usableWindowMetric: 'Verbrauchsfenster',
    profitableLabel: 'Profitabel',
    neutralLabel: 'Neutral',
    poorLabel: 'Schlechter Wert',
    humidityWarningTitle: 'Feuchtigkeitsdegradationsrisiko',
    humidityWarning: 'Degradationsrisiko: Der Kauf dieser Spule könnte Geld verlieren, wenn Sie kein Trocknungssystem oder keine luftdichte Lagerung haben.',
    safeMessage: 'Das Lagerungsrisiko liegt innerhalb Ihres gewählten sicheren Fensters. Halten Sie die Spule versiegelt und trocken, um die erwartete Ersparnis zu erhalten.',
  },
  seo: [
    {
      type: 'title',
      text: 'Wie Sie entscheiden, ob Bulk Filament wirklich guenstiger ist',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Eine 3kg oder 5kg Filament Spule sieht attraktiv aus, weil der Preis pro Kilogramm meist niedriger ist als bei einer einzelnen 1kg Spule. Der Fehler liegt darin, nur den Gesamtpreis zu vergleichen. Ein korrekter Vergleich normalisiert beide Angebote auf <strong>Kosten pro Gramm</strong>, multipliziert die Differenz mit der Materialmenge, die Sie tatsaechlich kaufen, und fragt dann, ob das Material bis zum Verbrauch druckbar bleibt.',
    },
    {
      type: 'paragraph',
      html: 'Die Kernformel ist einfach: Teilen Sie jeden Spulenpreis durch sein Gewicht in Gramm. Wenn eine 1kg Spule 24,99 kostet und eine 5kg Spule 89,99, kostet die 1kg Spule 0,02499 pro Gramm und die Bulk Spule 0,017998 pro Gramm. Die scheinbare Ersparnis ist die Grammdifferenz multipliziert mit 5000 Gramm. Diese Zahl ist nützlich, aber noch unvollständig, wenn die Spule monatelang offen liegt.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '1000g', label: 'Referenzmasse einer üblichen Desktop Filament Spule' },
        { value: '3-5kg', label: 'Typisches Bulk Format, bei dem Rabatte sichtbar werden' },
        { value: '0 APIs', label: 'Währungsäquivalenz verwendet lokale Näherungskurse statt live Serveraufruf' },
      ],
    },
    {
      type: 'table',
      headers: ['Frage', 'Was eingeben', 'Warum wichtig'],
      rows: [
        ['Was kaufe ich normalerweise?', 'Der 1kg Spulenpreis', 'Dies setzt die Basiskosten pro Gramm fest.'],
        ['Was ist das Bulk Angebot?', 'Gesamtpreis und Bulk Gewicht', 'Dies erzeugt die rabattierten Kosten pro Gramm.'],
        ['Wie schnell drucke ich?', 'Monatlich verbrauchte kg', 'Dies schätzt, wie lange die Spule gelagert bleibt.'],
        ['Wie gut ist meine Lagerung?', 'Sichere Monate vor Degradation', 'Dies definiert, wann die Risikostrafe beginnt.'],
      ],
    },
    {
      type: 'title',
      text: 'Warum Feuchtigkeit die ROI Berechnung verändert',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Filament ist kein Bargeldäquivalent, das sicher im Regal liegt. Viele Polymere absorbieren Feuchtigkeit aus der Luft, und nasses Filament kann mit Blasen, Fädenbildung, sprödem Extrudat, trüben Oberflächen, schwacher Schichthaftung und ungleichmäßigem Fluss drucken. Die genaue Geschwindigkeit hängt vom Material, der Luftfeuchtigkeit, der Verpackung und davon ab, ob die Spule in einer Trockenbox, einem versiegelten Beutel oder einer offenen Halterung gelagert wird.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Die versteckte Bulk Spulen Gefahr',
      badge: 'Planungsrisiko',
      html: 'Eine 5kg Spule kann ein schlechter Kauf sein, selbst wenn der Preis pro Gramm exzellent ist. Wenn Ihr Drucker 0,5kg pro Monat verbraucht und Ihr sicheres Lagerungsfenster 3 Monate beträgt, benötigt diese Spule etwa 10 Monate zur Aufbrauchung. Der Rabatt muss gross genug sein, um die zusätzlichen Trocknungs-, Versiegelungs- und Fehldruckkosten oder das Materialrisiko zu decken.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Vielnutzer',
          description: 'Eine kleine Druckfarm, ein Cosplay Bauer oder eine Produktionsserie kann 3kg bis 5kg schnell verbrauchen. Bulk Filament ist meist sinnvoll, weil die Lagerungszeit kurz ist.',
          points: ['Hoher monatlicher Verbrauch', 'Kurze Lagerdauer', 'Rabatt wird zu echtem Geldersparnis'],
        },
        {
          title: 'Gelegentlicher Hobby Nutzer',
          description: 'Ein Nutzer, der am Wochenende druckt oder gelegentlich Reparaturen durchführt, benötigt viele Monate, um eine grosse Spule aufzubrauchen. Feuchtigkeitsrisiko kann den Rabatt zunichtemachen.',
          points: ['Niedriger monatlicher Verbrauch', 'Lange offene Lagerungszeit', 'Trockene Lagerung ist entscheidend'],
        },
        {
          title: 'Nutzer technischer Materialien',
          description: 'Materialien wie Nylon, TPU, PC Mischungen und einige PETG Sorten erfordern oft strengere Trocknungsdisziplin. Bulk Käufe sollten mit Lagerungsausrüstung kombiniert werden.',
          points: ['Höhere Feuchtigkeitsempfindlichkeit', 'Trockenbox empfohlen', 'Strafschwelle sollte konservativ sein'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Was die echte Ersparnis bedeutet',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Das Tool zeigt zunächst die Bruttoersparnis an und zieht dann eine Degradationsstrafe ab, wenn die geschätzte Verbrauchszeit das sichere Lagerungsfenster überschreitet. Diese Strafe ist bewusst konservativ und kein Laborvorhersagemodell. Sie spiegelt die wirtschaftliche Realität wider, dass nasses oder überaltertes Filament oft nicht offensichtliche Kosten verursacht: Trocknungsstrom, zusätzliche Handhabung, Fehldrucke, verstopfte Düsen, Oberflächenfehler und die Möglichkeit, dass ein Teil der Spule für sichtbare oder strukturelle Arbeiten ungeeignet wird.',
    },
    {
      type: 'list',
      items: [
        'Positive echte Ersparnis bedeutet, dass der Bulk Rabatt die Lagerungsrisikoanpassung übersteht.',
        'Neutral bedeutet, dass die Entscheidung von Bequemlichkeit, Farbverfügbarkeit, Versand und davon abhängt, ob Sie bereits eine Trockenbox besitzen.',
        'Schlechter Wert bedeutet, dass die Bulk Spule entweder nicht günstiger pro Gramm ist oder die risikobereinigte Ersparnis negativ ausfällt.',
        'Die Warnmeldung erscheint, wenn die Verbrauchsmonate größer sind als das von Ihnen eingegebene sichere Lagerungsfenster.',
      ],
    },
    {
      type: 'proscons',
      title: 'Bulk Filament Kauf Vor und Nachteile',
      items: [
        { pro: 'Niedrigere Kosten pro Gramm für hohe Druckvolumen.', con: 'Mehr Kapital in einem Material, einer Farbe und einer Lieferantencharge gebunden.' },
        { pro: 'Weniger Spulenwechsel bei langen Produktionsläufen.', con: 'Eine größere freiliegende Masse kann degradieren, bevor sie verbraucht ist.' },
        { pro: 'Weniger Verpackungsmüll pro Kilogramm.', con: 'Grosse Spulen benötigen unter Umständen stärkere Halterungen oder externe Spulenständer.' },
        { pro: 'Nützlich für wiederkehrende Farm Aufträge und Serienproduktion.', con: 'Schlecht geeignet für seltene Farben, experimentelle Materialien oder langsamen Hobby Gebrauch.' },
      ],
    },
    {
      type: 'title',
      text: 'So wählen Sie ein sicheres Lagerungsfenster',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Das sichere Lagerungsfenster ist keine universelle Materialkonstante. Es ist der Zeitraum, den Sie persönlich dem Filament unter Ihren Lagerungsbedingungen zutrauen, druckbar zu bleiben. Ein versiegelter Beutel mit frischem Trockenmittel in einem trockenen Raum ist etwas völlig anderes als eine open Spule neben einem Drucker in einer feuchten Garage. Für eine konservative Kaufentscheidung geben Sie die Anzahl der Monate ein, nach denen Sie die Spule vor wichtigen Drucken trocknen würden.',
    },
    {
      type: 'table',
      headers: ['Situation', 'Empfohlenes Planungsverhalten', 'Grund'],
      rows: [
        ['Offene Spulenhalterung in feuchtem Raum', 'Kurzes sicheres Fenster nutzen', 'Feuchtigkeitseinwirkung ist kontinuierlich.'],
        ['Luftdichte Box mit Trockenmittel', 'Längeres sicheres Fenster nutzen', 'Die Spule ist zwischen den Drucken geschützt.'],
        ['Trockenbox speist den Drucker', 'Längeres, aber realistisches Fenster', 'Druck und Lagerung sind beide kontrolliert.'],
        ['Nylon, TPU, PC oder lösliche Stützmaterialien', 'Konservativ sein', 'Diese Materialien werden bei Feuchtigkeit schnell druckkritisch.'],
        ['PLA für grobe Prototypen', 'Höhere Risikotoleranz möglich', 'Kleinere optische Mängel sind für nicht kritische Teile akzeptabel.'],
      ],
    },
    {
      type: 'tip',
      title: 'Den Rechner vor Aktionsende nutzen',
      html: 'Blitzrabatte lassen Bulk Spulen oft dringend erscheinen. Geben Sie den Aktionspreis, möglichst inklusive Versand, und Ihren realistischen monatlichen Verbrauch ein. Wenn die Verbrauchszeit länger als Ihr Lagerungsfenster ist, muss der Rabatt stark genug sein, um das zusätzliche Risiko abzudecken.',
    },
    {
      type: 'title',
      text: 'Währungsumrechnung ohne Wechselkursschnittstelle',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dieser Rechner ist bewusst clientseitig ausgelegt. Er ruft keine live Wechselkurse ab, aber der Währungsselektor wendet dennoch einen lokalen Umrechnungsmultiplikator an, wenn der Benutzer die Währung wechselt. Das bedeutet, dass eine als 24,99 EUR eingegebene Spule einen Näherungswert in USD, GBP, JPY oder einer anderen unterstützten Währung erhält, anstatt nur das Symbol zu ersetzen. Die Kurse sind Planungsschätzungen, daher sollten Kassenpreise, Kartengebühren, Steuern und marktspezifische Wechselkursspannen vor dem Kauf überprüft werden.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Kosten pro Gramm', definition: 'Der Spulenpreis geteilt durch die gesamten Filament Gramm. Dies ist die normierte Einheit für fairen Vergleich.' },
        { term: 'Bruttoersparnis', definition: 'Der Preisvorteil, bevor Feuchtigkeits- oder Lagerungsrisiko berücksichtigt wird.' },
        { term: 'Risikostrafe', definition: 'Ein Planungsabzug, der angewendet wird, wenn die Spule länger zum Verbrauch benötigt als das sichere Lagerungsfenster.' },
        { term: 'Echte Ersparnis', definition: 'Bruttoersparnis minus Risikostrafe. Dies ist das wichtigste Kaufsignal.' },
        { term: 'Verbrauchsfenster', definition: 'Bulk Spulengewicht geteilt durch geschätzten monatlichen Verbrauch.' },
      ],
    },
    {
      type: 'summary',
      title: 'Praktische Kaufregel',
      items: [
        'Kaufen Sie Bulk, wenn die echte Ersparnis klar positiv ist und das Verbrauchsfenster zu Ihrer Lagerungssituation passt.',
        'Vermeiden Sie Bulk, wenn Sie eine seltene Farbe kaufen, die nach einem Projekt ungenutzt bleibt.',
        'Betrachten Sie Trocknungsgeräte als Teil des Bulk Filament Systems, nicht als optionales Extra für feuchtigkeitsempfindliche Polymere.',
        'Vergleichen Sie gelieferte Preise, nicht nur Produktseitenpreise, wenn sich die Versandkosten zwischen Spulengrößen unterscheiden.',
      ],
    },
    {
      type: 'message',
      title: 'Fazit',
      html: 'Eine Bulk Spule ist profitabel, wenn drei Bedingungen erfüllt sind: niedrigere Kosten pro Gramm, ausreichender monatlicher Verbrauch und eine Lagerung, die das Filament druckbar hält. Wenn eine Bedingung nicht erfüllt ist, kann der scheinbare Rabatt zu einem versteckten Materialverlust werden.',
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
