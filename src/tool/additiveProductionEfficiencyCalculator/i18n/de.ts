import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AdditiveProductionEfficiencyCalculatorUI } from '../ui';

const slug = 'additive-produktion-effizienz-rechner';
const title = 'Additive Produktionseffizienz Rechner';
const description =
  'Vergleichen Sie Batch-Druck vs. sequenziellen Druck mit Druckzeit, Aufheizzeit, Verfahrwegen, Purgezeit, statistischem Ausfallrisiko und einer automatischen Eignungsempfehlung.';

const faqData = [
  {
    question: 'Wann ist Batch-Druck schneller als sequenzieller Druck?',
    answer:
      'Batch-Druck ist in der Regel schneller, wenn das Aufheizen signifikant ist, die Teile sicher auf der Bauplatte platziert werden können, die Verfahrwege zwischen den Teilen moderat sind und die historische Ausfallrate niedrig genug ist, dass das kombinierte Batch-Risiko unter dem kritischen Schwellenwert bleibt.',
  },
  {
    question: 'Warum kann sequenzieller Druck empfohlen werden, auch wenn er länger dauert?',
    answer:
      'Sequenzieller Druck begrenzt den Verlust durch ein fehlgeschlagenes Teil. Wenn das als 1 - (1 - Ausfallrate)^N berechnete Batch-Risiko den kritischen Schwellenwert überschreitet, empfiehlt der Rechner den sequenziellen Druck, um die Produktionsreihenfolge zu schützen.',
  },
  {
    question: 'Ersetzt der Rechner Slicer-Schätzungen?',
    answer:
      'Nein. Ein Slicer kennt exakte Werkzeugpfade, Beschleunigungen, Extrusionsbreiten, Kühlung und Kollisionsabstände. Dieser Rechner dient der Produktionsplanung vor dem Slicen, insbesondere beim Vergleich eines vollen Bauplatten-Jobs mit wiederholten Einzelteil-Jobs.',
  },
  {
    question: 'Welche Ausfallrate sollte ich eingeben?',
    answer:
      'Verwenden Sie Ihre eigene Werkstatthistorie für ähnliches Material, Drucker, Geometrie und Betriebsbedingungen. Wenn Sie noch keine Daten erfassen, beginnen Sie konservativ mit 2-5 % für optimierten FDM-Produktionsdruck und erhöhen Sie den Wert bei neuen Materialien, langen Jobs oder schlecht validierten Vorrichtungen.',
  },
];

const howToData = [
  { name: 'Anzahl eingeben', text: 'Legen Sie die Gesamtzahl der für die Produktionsserie benötigten Teile fest.' },
  { name: 'Zeitangaben hinzufügen', text: 'Geben Sie Druckzeit pro Teil, Aufheizzeit, Übergangsdistanz, Verfahrgeschwindigkeit und Purge- oder Stabilisierungszeit ein.' },
  { name: 'Historisches Risiko festlegen', text: 'Verwenden Sie einen Ausfallprozentsatz aus vergleichbaren Jobs und wählen Sie das maximal akzeptable Batch-Risiko.' },
  { name: 'Empfehlung ablesen', text: 'Vergleichen Sie Gesamtzeit, Zeitersparnis, relative Effizienz, Übergangs-Overhead und statistisches Batch-Risiko.' },
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

export const content: ToolLocaleContent<AdditiveProductionEfficiencyCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Eingaben zur additiven Produktionseffizienz',
    resultsAriaLabel: 'Ergebnisse zur additiven Produktionseffizienz',
    visualizerAriaLabel: 'Generatives Risiko- und Bauplatten-Layout-Visualisierung',
    unitSystemLabel: 'Einheiten',
    metricLabel: 'Metrisch',
    imperialLabel: 'US',
    piecesLabel: 'Teile',
    unitPrintTimeLabel: 'Druckzeit pro Teil (min)',
    preheatTimeLabel: 'Aufheizzeit (min)',
    transitionDistanceLabel: 'Mittlerer Übergang',
    travelSpeedLabel: 'Verfahrgeschwindigkeit',
    failureRateLabel: 'Historische Ausfallrate',
    purgeTimeLabel: 'Purgen / Stabilisieren (min)',
    criticalRiskLabel: 'Kritisches Batch-Risiko',
    batchLabel: 'Batch-Druck',
    sequentialLabel: 'Sequenzieller Druck',
    recommendationLabel: 'Empfohlene Strategie',
    savingsLabel: 'Absolute Zeitersparnis',
    efficiencyLabel: 'Relative Effizienz',
    riskLabel: 'Batch-Ausfallrisiko',
    layoutLabel: 'Bauplatten-Choreografie',
    transitionLabel: 'Übergangs-Overhead',
    batchWinsLabel: 'Batch',
    sequentialWinsLabel: 'Sequenziell',
    riskOverrideLabel: 'Risiko-Override',
    fasterLabel: 'gespart',
    slowerLabel: 'extra',
    lowRiskLabel: 'Niedriges Batch-Risiko',
    moderateRiskLabel: 'Mäßiges Batch-Risiko',
    criticalRiskStatusLabel: 'Kritisches Batch-Risiko',
    minutesUnit: 'min',
    percentUnit: '%',
    millimeterUnit: 'mm',
    inchUnit: 'in',
    metricSpeedUnit: 'mm/s',
    imperialSpeedUnit: 'in/s',
  },
  seo: [
    { type: 'title', text: 'Batchdruck vs. Sequenzieller Druck: Was der Rechner misst', level: 2 },
    {
      type: 'paragraph',
      html: 'Die Wahl zwischen <strong>Batch-Druck vs. sequenziellem Druck</strong> ist nicht nur eine Frage der Befüllung der Bauplatte. Ein Vollbetten-Batch kann Aufwärmzeit sparen und manuelle Eingriffe reduzieren, konzentriert aber das Produktionsrisiko in einem langen Belichtungsfenster. Sequenzieller Druck wiederholt den Rüst-Overhead, isoliert jedoch Fehler, sodass ein schlechtes Teil nicht automatisch den Wert der gesamten Bauplatte beeinträchtigt. Dieser Rechner verwandelt diesen Zielkonflikt in Zahlen: Gesamtminuten, Verfahrübergänge, relative Effizienz und statistisches Batch-Risiko.',
    },
    {
      type: 'paragraph',
      html: 'Die Batch-Formel lautet <code>Tbatch = Tc + (N x Tp) + ((N x Dtrans) / (Vtravel x 60))</code>. Die sequenzielle Formel lautet <code>Tseq = N x (Tc + Tp + Tpurge)</code>. Die Risikoformel lautet <code>Riskbatch = 1 - (1 - Pfailure)^N</code>. Diese Gleichungen sind bewusst transparent, weil die Produktionsplanung einfacher ist, wenn der Grund hinter einer Empfehlung sichtbar und nicht in einer Blackbox verborgen ist.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '1', label: 'Aufheizzyklus im Batch-Modus', icon: 'mdi:heat-wave' },
        { value: 'N', label: 'Aufheizzyklen im sequenziellen Modus', icon: 'mdi:repeat' },
        { value: '60', label: 'Sekunden zur Normalisierung von Verfahrwegen in Minuten', icon: 'mdi:timer-outline' },
        { value: '1 - (1-p)^N', label: 'Zusammengesetztes Batch-Ausfallmodell', icon: 'mdi:chart-bell-curve' },
      ],
    },
    {
      type: 'tip',
      title: 'Eine konsistente Definition von Ausfall verwenden',
      html: '<p>Eine Ausfallrate ist nur nützlich, wenn die Werkstatt den Ausfall einheitlich definiert. Legen Sie fest, ob kosmetische Ausschüsse, Maßabweichungen, Stützstruktur-Narben, Fehler in der ersten Schicht, Spulenverwicklungen, Stromausfälle und Bedienereingriffe eingeschlossen sind. Die Vermischung von Definitionen lässt das Risikomodell präzise erscheinen, während es mit verrauschten Daten gefüttert wird.</p>',
    },
    { type: 'title', text: 'Wie Batchdruck Zeit spart', level: 2 },
    {
      type: 'paragraph',
      html: 'Batch-Druck gewinnt normalerweise bei der Maschinenauslastung, wenn die Aufheizzeit im Vergleich zur Einzelteil-Druckzeit groß ist. Das einmalige Aufheizen von Bett und Düse für einen 24-Teile-Durchlauf kann 23 wiederholte Aufwärmzyklen vermeiden. In einer Farm-Umgebung ist das wichtig, weil Aufwärmen tote Kapazität bedeutet: Der Drucker verbraucht Kalenderzeit, Energie und Bedieneraufmerksamkeit, bevor eine verkaufbare Geometrie produziert wird.',
    },
    {
      type: 'paragraph',
      html: 'Der Verfahrterm verhindert, dass das Modell so tut, als ob Batch-Layouts kostenlos wären. Jedes Teil kann einen nicht-druckenden Übergang hinzufügen, bei dem die Düse über die Platte fährt, Inseln umgeht, Combing-Bewegungen ausführt oder zur nächsten Objektgrenze bewegt. Der Rechner verwendet die durchschnittliche Übergangsdistanz und Verfahrgeschwindigkeit, um diesen Overhead in Minuten zu schätzen. Der Term ist bei kompakten Layouts klein und bei über eine große Platte verteilten Teilen deutlicher sichtbar.',
    },
    {
      type: 'table',
      headers: ['Batch-Variable', 'Produktionsbedeutung', 'Planungsfehler, den sie verhindert'],
      rows: [
        ['N', 'Teile insgesamt im Durchlauf', 'Ein Zehn-Teile-Bett wie zehn isolierte Jobs ohne gemeinsames Aufheizen zu behandeln.'],
        ['Tp', 'Druckzeit eines kompletten Teils', 'Die Schichtzeit nur von einem kleinen Merkmal statt einer Schätzung für das fertige Teil zu verwenden.'],
        ['Tc', 'Aufwärmzeit von Bett und Düse', 'Die Zeit vor Extrusionsbeginn bei der Kapazitätsplanung zu ignorieren.'],
        ['Dtrans', 'Durchschnittlicher Abstand zwischen Teilen', 'Anzunehmen, dass ein dicht gepacktes Bett keine Nicht-Extrusions-Bewegungsstrafe hat.'],
        ['Vtravel', 'Kopf-Verfahrgeschwindigkeit', 'Zu vergessen, dass langsame Verfahrprofile weit verteilte Anordnungen weniger effizient machen.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Batch Zeit reagiert am empfindlichsten auf Aufheizung und Menge',
      badge: 'Kapazitätsplanung',
      html: '<p>Wenn das Aufheizen 12 Minuten dauert und der Job 30 Teile umfasst, verbringt der sequenzielle Modus 360 Minuten nur mit wiederholtem Aufheizen. Der Batch-Modus investiert diese 12 Minuten einmal. Deshalb kann derselbe Drucker deutlich produktiver wirken, wenn kleine Teile sorgfältig verschachtelt werden.</p>',
    },
    { type: 'title', text: 'Warum sequenzieller Druck bei riskanten Jobs immer noch gewinnt', level: 2 },
    {
      type: 'paragraph',
      html: 'Sequenzieller Druck kann langsamer erscheinen, weil der Drucker Aufheiz- und Purge- oder Stabilisierungszeit für jede Einheit wiederholt. Der Vorteil ist die Eindämmung. Wenn Teil 17 in einem sequenziellen Plan ausfällt, können die vorherigen 16 Stücke bereits fertig und entfernt sein. Wenn Teil 17 in einem Batch aufgrund von Düsenzug, Haftungsverlust, thermischem Kriechen oder einem Materialproblem ausfällt, kann das fehlgeschlagene Objekt benachbarte Teile beschädigen oder den Bediener zwingen, die gesamte Platte zu verschrotten.',
    },
    {
      type: 'paragraph',
      html: 'Das Risikomodell multipliziert die historische Ausfallwahrscheinlichkeit über die Teileanzahl. Eine 3%ige Einzelteil-Ausfallrate bedeutet nicht, dass ein 24-Teile-Batch ein 3%iges Risiko hat. Die Wahrscheinlichkeit, dass jedes Teil erfolgreich ist, beträgt <code>(1 - 0,03)^24</code>, und die Wahrscheinlichkeit, dass mindestens ein Teil ausfällt, ist die Komplementärwahrscheinlichkeit. Das macht große Batches weniger attraktiv, wenn der Prozess nicht stabil ist.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Batchdruck',
          description: 'Am besten geeignet, wenn der Prozess stabil ist, Teile stark haften, das Bett-Layout kollisionssicher ist und die Aufheizzeit den Zeitplan dominiert.',
          icon: 'mdi:grid',
          highlight: true,
          points: ['Ein Aufwärmzyklus', 'Hoher Durchsatz', 'Höhere gemeinsame Ausfallgefährdung'],
        },
        {
          title: 'Sequenzieller Druck',
          description: 'Am besten geeignet, wenn Ausschüsse teuer sind, Jobs hoch sind, Materialien empfindlich sind oder der Benutzer jedes Teil vom nächsten isolieren möchte.',
          icon: 'mdi:format-list-numbered',
          points: ['Fehlereindämmung', 'Mehr wiederholter Overhead', 'Erfordert Abstandsplanung'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Produktionsrisiko Abwägung',
      items: [
        { pro: 'Batch-Druck reduziert die untätige Aufwärmzeit und kann kleine Wiederholungsteile in einem unbeaufsichtigten Durchlauf fertigstellen.', con: 'Ein Haftungs- oder Extrusionsfehler kann die gesamte Platte gefährden und ein langes Bediener-Erholungsfenster verbrauchen.' },
        { pro: 'Sequenzieller Druck erleichtert die Validierung einer Einheit, ihre Entnahme und die Fortsetzung mit geringerem kumulierten Verlust.', con: 'Wiederholtes Aufheizen und Stabilisieren kann bei kleinen Teilen mehr Zeit verbrauchen als die eigentliche Geometrie.' },
        { pro: 'Ein Batch kann die Verpackung vereinfachen, da alle Teile gleichzeitig fertig werden.', con: 'Ein langer Batch setzt jede Einheit derselben Umgebungsdrift, Spulenproblemen oder thermischen Degradationsperiode aus.' },
      ],
    },
    { type: 'title', text: 'Auswahl eines kritischen Batch-Risikoschwellenwerts', level: 2 },
    {
      type: 'paragraph',
      html: 'Der kritische Risikoschwellenwert ist die Linie, an der der Rechner die Empfehlung von Zeitoptimierung auf Bestandsschutz umstellt. Eine Prototypen-Werkstatt toleriert vielleicht 45 % Batch-Risiko, wenn das Material billig ist und der Bediener experimentiert. Eine Produktionsfarm, die Kundenteile versendet, verwendet 15-25 % für gängige Materialien und niedrigere Schwellenwerte für Übernacht-Jobs, teure technische Polymere oder Teile mit hohem Nachbearbeitungsaufwand.',
    },
    {
      type: 'table',
      headers: ['Schwellenwert', 'Guter Anwendungsfall', 'Interpretation'],
      rows: [
        ['10-20 %', 'Teure Teile, Übernacht-Jobs, hochwertige Kundenaufträge', 'Zuverlässigkeit schützen, auch wenn der Batch-Modus Zeit spart.'],
        ['25-35 %', 'Normaler optimierter FDM-Produktionsdruck mit bekanntem Material', 'Ausgewogener Schwellenwert für Zeitersparnis und Ausschussrisiko.'],
        ['40-60 %', 'Interne Prototypen oder billige Vorrichtungen', 'Akzeptiert mehr Risiko, um Druckerkapazität schneller freizugeben.'],
        ['Über 60 %', 'Nur zur Erkundung', 'Nützlich, um Zeitpotenzial zu sehen, aber schwach als Produktionsfähigkeitsregel.'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:clipboard-pulse-outline',
      title: 'So schätzen Sie Ihre anfängliche Ausfallrate',
      html: '<p>Überprüfen Sie die letzten 50 bis 200 vergleichbaren Drucke auf derselben Druckerfamilie. Zählen Sie Jobs, die Nachdruck, manuelle Rettung oder Kundenablehnung benötigten. Teilen Sie die Ausfälle durch die Gesamtversuche, dann trennen Sie nach Material und Geometrie, wenn genügend Daten vorhanden sind. PLA-Halter, PETG-Clips, ASA-Gehäuse und TPU-Dichtungen sollten nicht eine generische Risikozahl teilen.</p>',
    },
    {
      type: 'summary',
      title: 'Risikoschwellen Regeln',
      items: [
        'Senken Sie den Schwellenwert, wenn Material, Termin oder Nachbearbeitungskosten hoch sind.',
        'Erhöhen Sie ihn nur, wenn fehlgeschlagene Teile billig sind und die Warteschlange von aggressiver Bündelung profitiert.',
        'Berechnen Sie neu nach Prozessänderungen wie einer neuen Bettoberfläche, Düse, Filamentlieferant oder Gehäusetemperatur.',
      ],
    },
    { type: 'title', text: 'Verfahrübergänge, Kopfbewegung und Layout Effizienz', level: 2 },
    {
      type: 'paragraph',
      html: 'Verfahrübergänge sind die versteckten Kosten der In-Situ-Effizienz. Ein Slicer kann viele Male pro Schicht von einem Teil zum anderen springen, insbesondere wenn mehrere Objekte dieselbe Z-Höhe teilen. Die durchschnittliche Übergangsdistanz muss nicht perfekt sein; sie muss nur repräsentieren, ob das Layout kompakt, moderat beabstandet oder über die Baufläche verteilt ist. Eine kompakte Anordnung mit 25 mm durchschnittlichen Übergängen verhält sich ganz anders als eine Vollbetten-Anordnung mit 180 mm Sprüngen.',
    },
    {
      type: 'paragraph',
      html: 'Die Verfahrgeschwindigkeit sollte das reale Profil widerspiegeln, nicht das Werbemaximum der Maschine. Beschleunigungsgrenzen, Firmware-Einstellungen, Optionen zur Vermeidung von Konturüberschreitungen, Z-Hop und Combing-Strategie können die effektive Verfahrgeschwindigkeit langsamer machen, als das Slicer-Feld vermuten lässt. Wenn eine Maschine konservative Verfahrwege für empfindliche erste Schichten oder hohe Teile verwendet, senken Sie den Wert, um eine Überschätzung der Batch-Effizienz zu vermeiden.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Batch-Druck', definition: 'Drucken mehrerer Kopien oder Objekte in einem gemeinsamen Job auf der Bauplatte.' },
        { term: 'Sequenzieller Druck', definition: 'Drucken eines Objekts nach dem anderen, bevor zum nächsten Objekt übergegangen wird, oft mit Abstandsauflagen um den Werkzeugkopf.' },
        { term: 'Übergangsdistanz', definition: 'Durchschnittliche nicht-extrudierende Verfahrstrecke, die benötigt wird, um zwischen Teilen oder Druckzonen zu wechseln.' },
        { term: 'Purge- oder Stabilisierungszeit', definition: 'Zusätzliche Zeit pro sequenzieller Einheit zum Vorspülen, thermischen Beruhigen, Abwischen oder bedienersicheren Neustart.' },
        { term: 'Kritisches Risiko', definition: 'Maximal akzeptable Wahrscheinlichkeit, dass mindestens ein Teil im Batch ausfällt.' },
      ],
    },
    {
      type: 'message',
      title: 'Kollisionsabstand ist im echten sequenziellen Modus wichtig',
      ariaLabel: 'Warnhinweis zum Abstand beim sequenziellen Druck',
      html: '<p>Viele Slicer schränken den sequenziellen Druck ein, weil Hotend, Lüfterkanal, X-Portal oder Bettclips mit fertigen Teilen kollidieren können. Verwenden Sie diesen Rechner für die Planung und überprüfen Sie dann den sequenziellen Abstand im Slicer, bevor Sie den Job freigeben.</p>',
    },
    { type: 'title', text: 'So verwenden Sie die Ergebnisse zur Optimierung der additiven Fertigung', level: 2 },
    {
      type: 'paragraph',
      html: 'Die absolute Zeitersparnis zeigt, wie viele Minuten der Batch-Modus gegenüber dem sequenziellen Modus gewinnt oder verliert. Der relative Effizienzprozentsatz normalisiert diese Differenz an der sequenziellen Zeit, was beim Vergleich von Jobs unterschiedlicher Größe nützlich ist. 20 Minuten bei einem 40-Minuten-Durchlauf zu sparen, ist operativ enorm; 20 Minuten bei einem 30-Stunden-Durchlauf zu sparen, rechtfertigt möglicherweise kein höheres Risiko.',
    },
    {
      type: 'paragraph',
      html: 'Die Empfehlung kombiniert Geschwindigkeit und Bestandssicherung. Wenn Batch schneller ist und das Risiko unter dem Schwellenwert liegt, empfiehlt das Tool Batch. Wenn das Batch-Risiko den Schwellenwert überschreitet, wird sequenziell empfohlen, auch wenn es langsamer ist. Wenn Batch langsamer ist, weil der Übergangs-Overhead groß oder die Aufheizzeit gering ist, gewinnt sequenziell in der Zeit, ohne dass ein Risiko-Override erforderlich ist.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Verwenden Sie den Rechner vor der Verschachtelung eines großen Bauplatte, damit der Produktionsplan auf Durchlaufzeit und Fehlergefährdung basiert.',
        'Führen Sie einen Was-wäre-wenn-Vergleich mit niedrigerer Ausfallrate nach der Kalibrierung durch, um zu sehen, wie Prozessverbesserungen die Strategie ändern.',
        'Erhöhen Sie die Purge-Zeit, wenn sequenzielle Jobs Reinigung, Vorspülen, Bettinspektion oder Bedienereingriffe zwischen den Einheiten erfordern.',
        'Reduzieren Sie die Verfahrgeschwindigkeit bei Verwendung von Z-Hop, Vermeidung von Konturüberschreitungen, empfindlichen hohen Teilen oder Firmware-Beschleunigungsgrenzen.',
        'Dokumentieren Sie die tatsächlichen Laufergebnisse und aktualisieren Sie die Ausfallrate, anstatt sich auf eine generische Faustregel zu verlassen.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Nicht nur auf die schnellste Uhrzeit optimieren',
      badge: 'Betriebskosten',
      html: '<p>Ein fehlgeschlagener 12-Stunden-Batch kann mehr kosten als die auf dem Maschinendisplay angezeigte Zeit. Berücksichtigen Sie Material, Strom, Bedienerdiagnose, verlorenen Warteschlangenplatz, Nachbearbeitungsverzögerung und Auswirkungen auf Kundentermine, wenn Sie entscheiden, ob die Zeitersparnis das zusammengesetzte Risiko wert ist.</p>',
    },
    { type: 'title', text: 'Praktische Beispiele für 3D Druck Zeitrechner Workflows', level: 2 },
    {
      type: 'paragraph',
      html: 'Bei kleinen PLA-Clips mit einer Einzelteil-Druckzeit von 20 Minuten und 10 Minuten Aufwärmzeit dominiert oft der Batch-Druck. Das gemeinsame Aufheizen spart einen großen Teil der Jobzeit, und eine kompakte Platzierung hält den Übergangs-Overhead niedrig. Wenn die Werkstatt eine Ausfallrate von 1-2 % hat, bleibt das Risiko für moderate Mengen akzeptabel. Dies ist der klassische Hochdurchsatz-Anwendungsfall für Batch-Druck.',
    },
    {
      type: 'paragraph',
      html: 'Bei hohen PETG-Haltern mit marginaler Haftung kann sequenzieller Druck sicherer sein. Selbst wenn Batch zwei Stunden spart, kann eine eingekringelte Ecke zu Düsenaufprall, Schichtverschiebung oder Objektablösung führen, die benachbarte Teile ruiniert. Der Rechner zeigt die Differenz zwischen einer verlockenden Zeitersparnis und einem Risikoprofil, das nicht mehr zur Produktionsabsicht passt.',
    },
    {
      type: 'paragraph',
      html: 'Für In-Situ-Effizienzentscheidungen führen Sie dasselbe Teil zweimal aus: einmal mit der aktuellen Ausfallrate und einmal mit der Zielrate nach der Kalibrierung. Wenn die Reduzierung von Ausfällen von 6 % auf 2 % die Empfehlung von sequenziell auf Batch umschlagen lässt, ist die beste Investition möglicherweise die Bettreinigung, die Erstschicht-Abstimmung, trockenes Filament, Gehäusestabilität oder eine validierte Brim-Strategie, anstatt einen weiteren Drucker zu kaufen.',
    },
    {
      type: 'summary',
      title: 'Entscheidungs Checkliste',
      items: [
        'Batch, wenn die Aufheizzeit groß, das Layout kompakt und die historische Ausfallrate niedrig ist.',
        'Sequenziell, wenn jeder Ausschuss teuer, hoch, riskant oder wahrscheinlich benachbarte Teile beschädigt.',
        'Prozess optimieren, wenn eine kleine Reduzierung der Ausfallrate eine große Batch-Effizienz freisetzt.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
