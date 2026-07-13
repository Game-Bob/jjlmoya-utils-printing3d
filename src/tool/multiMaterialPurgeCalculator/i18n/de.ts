import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MultiMaterialPurgeCalculatorUI } from '../ui';

const slug = 'multi-material-purge-rechner';
const title = 'Multi Material Purge Rechner: Filamentabfall analysieren und optimieren';
const description = 'Berechnen Sie das Volumen des Purge Towers, die verschwendete Filamentmasse und die Wechselkosten mit einer Pigmentintensitätsmatrix für Farbwechsel bei AMS und MMU.';

const faqData = [
  {
    question: 'Warum wird Schwarz-auf-Weiß ein höherer Purge-Faktor zugewiesen als Weiß-auf-Schwarz?',
    answer: 'Dunkle Pigmente verunreinigen helle Polymere sichtbarer als helle Pigmente dunkle Polymere. Der Rechner modelliert daher Schwarz-auf-Weiß als Übergang mit hohem Faktor und Weiß-auf-Schwarz als Übergang mit niedrigerem Faktor.',
  },
  {
    question: 'Ersetzt dieser Rechner die Spülvolumina des Slicers?',
    answer: 'Nein. Es ist ein diagnostischer Planer, der die Purge-Ökonomie vor dem Slicen oder der Budgetierung abschätzt. Verwenden Sie das Slicer-Kalibrierungsergebnis für die endgültige maschinenspezifische Abstimmung.',
  },
  {
    question: 'Ab welchem Purge-Verhältnis sollte ich von zu hoch sprechen?',
    answer: 'Das Tool markiert ein hohes Abfallverhältnis ab 30 Prozent des gesamten extrudierten Volumens. Dieser Schwellenwert bedeutet in der Regel, dass die Farbreihenfolge, Gruppierung, Purge-to-Infill oder die Modellaufteilung überprüft werden sollte.',
  },
  {
    question: 'Kann ich es auch für Materialwechsel verwenden, nicht nur für Farbwechsel?',
    answer: 'Die aktuelle Matrix konzentriert sich auf Pigmentverschleppung. Mischpolymerisate, lösliche Stützstrukturen, abrasive Materialien und Temperaturänderungen können zusätzliches Purge über den Farbfaktor hinaus erfordern.',
  },
];

const howToData = [
  {
    name: 'Objekt- und Basis-Purge-Volumen eingeben',
    text: 'Geben Sie das tatsächliche Modellvolumen und das Standard-Purge-Volumen ein, das Ihr AMS- oder MMU-Profil für einen normalen Filamentwechsel verwendet.',
  },
  {
    name: 'Ausgangs- und Zielfarben wählen',
    text: 'Verwenden Sie die kreisförmigen Farbauswähler für jeden Übergang. Der Übergangsfaktor wird sofort aus der Pigmentmatrix aktualisiert.',
  },
  {
    name: 'Anzahl der Übergänge festlegen',
    text: 'Geben Sie ein, wie oft jedes Farbpaar im Auftrag vorkommt. Wiederholte Dunkel-zu-Hell-Wechsel dominieren die gesamte Purge-Schätzung.',
  },
  {
    name: 'Verhältnis, Masse und Kosten ablesen',
    text: 'Nutzen Sie den Objekt-gegenüber-Purge-Balken, die Abfallmasse und das Kostenergebnis, um zu entscheiden, ob der Druck vor der Produktion umorganisiert werden sollte.',
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

export const content: ToolLocaleContent<MultiMaterialPurgeCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    unitSystemLabel: 'Einheiten',
    metricLabel: 'Metrisch',
    imperialLabel: 'Imperial',
    currencyLabel: 'Währung',
    currencyOptions: [
      { code: 'EUR', label: 'EUR' },
      { code: 'USD', label: 'USD' },
      { code: 'GBP', label: 'GBP' },
      { code: 'JPY', label: 'JPY' },
      { code: 'CAD', label: 'CAD' },
      { code: 'AUD', label: 'AUD' },
      { code: 'CHF', label: 'CHF' },
      { code: 'MXN', label: 'MXN' },
      { code: 'BRL', label: 'BRL' },
      { code: 'CNY', label: 'CNY' },
      { code: 'IDR', label: 'IDR' },
      { code: 'KRW', label: 'KRW' },
      { code: 'PLN', label: 'PLN' },
      { code: 'RUB', label: 'RUB' },
      { code: 'SEK', label: 'SEK' },
      { code: 'TRY', label: 'TRY' },
    ],
    modelInputsTitle: 'Kostenmodell',
    objectVolumeLabel: 'Objektvolumen',
    basePurgeLabel: 'Basis-Purge pro Wechsel',
    densityLabel: 'Dichte g/cm3',
    priceLabel: 'Preis pro kg',
    transitionsTitle: 'Pigment-Übergangsmatrix',
    fromLabel: 'Von',
    toLabel: 'Nach',
    colorLabels: {
      white: 'Weiß',
      natural: 'Natur',
      yellow: 'Gelb',
      red: 'Rot',
      blue: 'Blau',
      green: 'Grün',
      gray: 'Grau',
      black: 'Schwarz',
    },
    countLabel: 'Wechsel',
    objectLabel: 'Objekt (echtes Plastik)',
    purgeTowerLabel: 'Purge-Tower-Abfall',
    totalWasteLabel: 'Purge-Volumen',
    wasteCostLabel: 'Abfallkosten',
    purgeRatioLabel: 'Purge-Verhältnis',
    massLabel: 'Abfallmasse',
    loadbarAriaLabel: 'Objektvolumen im Vergleich zum Purge-Tower-Volumen',
    alertTitle: 'Hohes Abfallverhältnis erkannt',
    alertText: 'Hohes Abfallverhältnis erkannt: Gruppierung ähnlicher Farben empfohlen.',
    efficientText: 'Purge-Verhältnis innerhalb der Planungsgrenze.',
    factorGuideTitle: 'Purge-Faktor-Leitfaden nach Übergang',
    transitionLabel: 'Übergang',
    factorLabel: 'Faktor',
    volumeLabel: 'Purge-Volumen',
    cm3Unit: 'cm3',
    in3Unit: 'in3',
    gUnit: 'g',
    ozUnit: 'oz',
  },
  seo: [
    {
      type: 'title',
      text: 'Wie AMS- und MMU-Purge-Abfall zu echten Produktionskosten wird',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ein Multimaterialdruck verbraucht Filament nicht nur im sichtbaren Objekt. Jeder Farb- oder Materialwechsel hinterlässt geschmolzenes Polymer im Hotend, in der Schmelzzone, der Düse und manchmal am Anfang des nächsten Extrusionspfads. Der Drucker muss genügend neues Filament durch diesen Pfad schieben, bevor die nächste sichtbare Oberfläche sauber ist. Bei AMS-, MMU-, Toolhead-Changer- und Palette-Workflows wird diese Reinigungsextrusion oft zu einem Purge Tower, Purge Block, einer Purge Line oder zu Abfall in der Auswurfschurre. Der wichtige wirtschaftliche Punkt ist einfach: Der Turm kann wie jedes andere Teil bepreist werden, da er Volumen, Masse und Materialkosten hat.',
    },
    {
      type: 'paragraph',
      html: 'Generische Rechner multiplizieren oft die Anzahl der Wechsel mit einem festen Spülvolumen. Das ist für ein grobes Budget nützlich, übersieht aber den teuersten Fehlermodus im Farbdruck: <strong>asymmetrische Kontamination</strong>. Weiß-auf-Schwarz erfordert nicht die gleiche Reinigung wie Schwarz-auf-Weiß. Eine kleine Menge schwarzes Pigment, die in weißes PLA, PETG oder ABS eingetragen wird, ist schnell sichtbar, während eine kleine Menge Weiß in Schwarz normalerweise durch die dunklere Pigmentbeladung verborgen wird. Dieses Tool verwendet eine Übergangsmatrix, sodass jede Richtung ihren eigenen Multiplikator hat.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '30%', label: 'Hoher Purge-Verhältnis-Alarmschwellenwert des Dashboards' },
        { value: '1,6x', label: 'Standard-Übergangsmultiplikator Schwarz auf Weiß' },
        { value: '0,8x', label: 'Standard-Übergangsmultiplikator Weiß auf Schwarz' },
        { value: '0 Tasten', label: 'Alle Berechnungen aktualisieren sich sofort während der Eingabe' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Das teure Symptom, das Sie beachten sollten',
      badge: 'Abfallprüfung',
      html: 'Wenn der Purge Tower 30 Prozent des kombinierten Objekt- und Purge-Volumens übersteigt, ist der Auftrag nicht mehr nur ein bunter Druck. Es ist ein Materialumwandlungsprozess, bei dem ein großer Teil des gekauften Filaments zu Nicht-Produkt-Ausstoß wird. Das ist der Punkt, an dem Farbreihenfolge, Modellaufteilung, Purge-to-Infill und Batching Beachtung verdienen, bevor die Maschine startet.',
    },
    {
      type: 'title',
      text: 'Die Übergangsmatrix hinter dem Rechner',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Das Kernmodell ist <code>Vtotal = sum(Vbase x Ka,b)</code>. <code>Vbase</code> ist das Basis-Purge-Volumen für einen Standard-Filamentwechsel. <code>Ka,b</code> ist der Faktor für den Übergang von Farbe <code>a</code> zu Farbe <code>b</code>. Ein Faktor unter 1 bedeutet, dass der Übergang normalerweise einfacher ist als die Basislinie. Ein Faktor über 1 bedeutet, dass die nächste Farbe empfindlich auf Kontamination reagiert oder die vorherige Farbe eine starke Pigmentverschleppung aufweist. Das Ergebnis ist ein Purge-Volumen in Kubikzentimetern, das dann mit der Filamentdichte in Masse umgerechnet wird.',
    },
    {
      type: 'paragraph',
      html: 'Die Kostenformel lautet <code>Cwaste = ((Vtotal x Dichte) / 1000) x priceKg</code>. Wenn der Purge Tower 80 cm3 PLA bei 1,24 g/cm3 verbraucht, werden 99,2 g Filament benötigt. Bei 24 pro Kilogramm kostet dieser Turm 2,38 an Material, bevor Strom, Maschinenzeit, fehlgeschlagene Farbübergänge oder Nachbearbeitung berücksichtigt werden. Für einen Hobby-Druck mag das akzeptabel sein. Bei wiederholter Produktion ist es ein Kostenfaktor.',
    },
    {
      type: 'table',
      headers: ['Übergang', 'Standardfaktor', 'Warum er so gewichtet ist'],
      rows: [
        ['Weiß auf Schwarz', '0,80x', 'Schwarz verdeckt kleine helle Rückstände, daher ist die Toleranz für sichtbare Kontamination höher.'],
        ['Schwarz auf Weiß', '1,60x', 'Dunkle Rückstände in Weiß sind sofort sichtbar und erfordern meist eine längere Spülung.'],
        ['Natur auf Weiß', '1,15x', 'Transparentes oder natürliches Material kann opakes Weiß einfärben, bis der Schmelzpfad sauberer ist.'],
        ['Gelb auf Weiß', '1,35x', 'Gelbe Pigmente können helle Oberflächen erwärmen oder verfärben, sind aber weniger stark als Schwarz.'],
        ['Rot auf Gelb', '1,08x', 'Rotverschleppung verändert den Farbton in Gelb und orangefarbenen Farben stark.'],
        ['Grau auf Schwarz', '0,72x', 'Graue Rückstände werden normalerweise durch schwarzes Pigment verdeckt, daher kann das Purge geringer ausfallen.'],
      ],
    },
    {
      type: 'tip',
      title: 'Slicer Kalibrierung als Basisvolumen verwenden',
      html: 'Führen Sie zuerst die Spülkalibrierung des Herstellers oder der Community für Ihren Drucker durch und geben Sie dieses Ergebnis als Basis-Purge-Volumen ein. Die Matrix sollte eine bekannte Basislinie skalieren, nicht die maschinenspezifische Abstimmung für Düsendurchmesser, Hotend-Volumen, Filamentpfadlänge und Slicer-Verhalten ersetzen.',
    },
    {
      type: 'title',
      text: 'Warum die Polymeropazität das erforderliche Purge-Volumen verändert',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die Opazität bestimmt, wie sichtbar die Kontamination durch die vorherige Farbe im nächsten Material ist. Opakes Weiß ist anspruchsvoll, weil es Licht stark reflektiert und dunklere Partikel oder Streifen nahe der Oberfläche zeigt. Natürliche und transparente Filamente verhalten sich anders: Sie verbergen möglicherweise weniger Masse, zeigen aber eine Tönung durch die Tiefe, besonders bei dünnen Wänden oder hinterleuchteten Teilen. Gesättigte Farben wie Rot und Blau können ebenfalls nachfolgende helle Farben verfärben, da die für eine starke Chroma erforderliche Pigmentkonzentration bei niedrigen Rückstandswerten sichtbar bleibt.',
    },
    {
      type: 'paragraph',
      html: 'Der Drucker kennt keine Farbwissenschaft. Er extrudiert nur eine Länge oder ein Volumen. Der Benutzer muss entscheiden, ob das sichtbare Ergebnis kosmetische Reinheit, funktionale Trennung oder nur einen groben Farbwechsel benötigt. Ein Spielzeug, ein Logo, ein Schild, ein Lithophanerrahmen oder ein kundenorientiertes Gehäuse können aggressives Purge erfordern. Eine versteckte interne Stütze, ein Entwurfsprototyp oder die Rückseite einer Vorrichtung tolerieren möglicherweise mehr Verschleppung. Der Rechner macht diesen Zielkonflikt sichtbar, indem der Purge Tower wächst, wenn die Übergangsrichtung schwieriger ist.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Helles Ziel',
          description: 'Weiß, Natur, Gelb und Hellgrau sind empfindliche Ziele. Dunkle oder gesättigte Vorgängerfarben benötigen längeres Purge, bevor diese Farben sauber aussehen.',
          points: ['Höhere Faktoren verwenden', 'Helle Abschnitte gruppieren', 'Wiederholte Rückkehr von Schwarz zu Weiß vermeiden'],
        },
        {
          title: 'Dunkles Ziel',
          description: 'Schwarz, Marineblau, Tiefgrün und Dunkelgrau können Rückstände von helleren Farben verbergen. Diese Übergänge können oft mit kleineren Multiplikatoren verwendet werden.',
          points: ['Geringeres sichtbares Risiko', 'Gutes Ziel nach hellen Farben', 'Nützliche Endfarbe in einer Sequenz'],
        },
        {
          title: 'Ähnliche Farbtöne beim Übergang',
          description: 'Der Wechsel zwischen verwandten Farben kostet normalerweise weniger als der Übergang von dunkel zu hell. Rot zu Orange oder Grau zu Schwarz ist normalerweise einfacher als Blau zu Gelb.',
          points: ['Farbreihenfolge ist wichtig', 'Farbtonfamilien reduzieren Abfall', 'Ähnliche Objekte zusammen verarbeiten'],
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Basis-Purge-Volumen', definition: 'Das normale Volumen, das Ihr Slicer oder Kalibrierungsprofil für einen gewöhnlichen Filamentwechsel vor der Matrixskalierung extrudiert.' },
        { term: 'Übergangsfaktor', definition: 'Ein Multiplikator, der einer Richtung eines Farbänderung zugewiesen wird, z. B. Schwarz auf Weiß oder Weiß auf Schwarz.' },
        { term: 'Purge-Verhältnis', definition: 'Purge-Volumen geteilt durch das gesamte extrudierte Volumen, einschließlich Objekt und Purge Tower.' },
        { term: 'Pigmentverschleppung', definition: 'Sichtbare Rückstände der vorherigen Filamentfarbe, die im Hotend verbleiben und in der nächsten Extrusion erscheinen.' },
        { term: 'Purge-to-Infill', definition: 'Eine Slicer-Strategie, die einen Teil der Reinigungsextrusion in verdeckte Infill-Bereiche umleitet, anstatt in einen Turm oder eine Abfallschurre.' },
      ],
    },
    {
      type: 'title',
      text: 'Wie Sie AMS-Filamentabfall reduzieren, ohne die Farbqualität zu beeinträchtigen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die erste Optimierung ist die Farbreihenfolge. Wenn ein Modell aufgeteilt, in Gruppen gedruckt oder so angeordnet werden kann, dass Dunkel-zu-Hell-Übergänge seltener vorkommen, kann der Purge Tower drastisch schrumpfen. Wiederholte Schwarz-Weiß-Wechsel sind teuer, weil jeder Zyklus den Drucker zwingt, ein starkes Pigment vor einem empfindlichen Ziel zu entfernen. Wenn dasselbe visuelle Design einmal als Weiß-auf-Schwarz oder als separate, später montierte Teile gedruckt werden kann, ändert sich das Materialbudget sofort.',
    },
    {
      type: 'paragraph',
      html: 'Die zweite Optimierung ist die Wahl des Ziels. Wenn mehrere Farben optional sind, wählen Sie eine dunkle Endfarbe für Details, die nach hellen Bereichen erscheinen. Schwarzer Text auf einer weißen Tafel ist beispielsweise in der Regel günstiger als weißer Text auf einer schwarzen Tafel, weil letzteres den Drucker zwingt, vor jedem weißen Segment dunkle Rückstände zu entfernen. Dies ist nicht nur eine ästhetische Entscheidung; es verändert die physische Menge an Polymer, die durch das Hotend gedrückt werden muss.',
    },
    {
      type: 'list',
      items: [
        'Gruppieren Sie ähnliche Farben im Modell oder in der Druckwarteschlange, damit verwandte Farbtöne Übergänge teilen.',
        'Verwenden Sie Purge-to-Infill, wenn eine interne Farbkontamination akzeptabel ist und das Teil genügend Infill-Volumen hat.',
        'Reduzieren Sie Farbwechsel, indem Sie Abzeichen, Logos, Etiketten oder dekorative Einsätze in separate gedruckte Teile aufteilen.',
        'Verwenden Sie dunklere Farben nach helleren Farben, wenn das Design es erlaubt.',
        'Stimmen Sie die Spülmultiplikatoren mit physischen Mustern ab, nicht nur mit den Slicer-Standardwerten.',
        'Kalkulieren Sie die Purge-Kosten in Kundenangeboten separat, damit mehrfarbige Dekorationsarbeiten nicht unterbewertet werden.',
      ],
    },
    {
      type: 'proscons',
      title: 'Kompromisse bei der Optimierung',
      items: [
        { pro: 'Niedrigere Purge-Faktoren reduzieren die Turmmassee und die Filamentkosten.', con: 'Zu wenig Purge kann Schlieren, Verfärbungen oder inakzeptable kundenorientierte Oberflächen erzeugen.' },
        { pro: 'Das Aufteilen von Modellen kann viele Farbwechsel eliminieren.', con: 'Die Montage erfordert zusätzliche Arbeit, Toleranzmanagement, Kleber, Verbindungselemente oder sichtbare Nähte.' },
        { pro: 'Purge-to-Infill verwandelt etwas Abfall in nützliches internes Plastik.', con: 'Es funktioniert am besten nur, wenn das Objekt genügend verstecktes Volumen hat und die Kontamination strukturell akzeptabel ist.' },
        { pro: 'Die Bündelung ähnlicher Farben verbessert die Wirtschaftlichkeit der Druckfarm.', con: 'Es kann dringende Einzelaufträge verzögern, die eine bestimmte Farbsequenz benötigen.' },
      ],
    },
    {
      type: 'title',
      text: 'Kalkulation von Multimaterialdrucken für Kunden und Druckfarmen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ein Druckangebot, das nur das endgültige Objektvolumen bepreist, ist für AMS- und MMU-Aufträge falsch. Der Kunde kauft den Herstellungsprozess, und der Prozess umfasst die Nicht-Produkt-Extrusion. Ein kleiner Schlüsselanhänger mit vielen schichtweisen Farbwechseln kann mehr Material verschwenden als eine größere einfarbige Halterung. Der Rechner macht dies sichtbar, indem er Objektvolumen und Purge-Tower-Volumen als zwei konkurrierende Blöcke vergleicht, anstatt Abfall in einer einzelnen Zahl zu verstecken.',
    },
    {
      type: 'paragraph',
      html: 'Für eine Farm ist das Purge-Verhältnis auch ein Planungssignal. Aufträge mit hohem Purge belegen den Drucker, während Filament in Turmplastik umgewandelt wird, sodass der wirtschaftliche Verlust nicht nur im Material liegt. Die Maschinenzeit, die für Filamentwechsel, Schneiden, Laden, Wischen und Wiederaufbau des Drucks aufgewendet wird, ist Zeit, die nicht für die Produktion verkaufbarer Volumen genutzt wird. Wenn das Purge-Verhältnis hoch ist, sollte überlegt werden, ob der Artikel einen Mehrfarbenaufschlag erhalten, die Farben eingeschränkt werden sollten oder ob eine lackierte, bedruckte Etiketten- oder montierte Lösung günstiger ist.',
    },
    {
      type: 'card',
      title: 'Angebotsregel für Mehrfarbarbeiten',
      html: 'Berechnen Sie das Objekt und dann den Purge Tower als separate Abfallzeile. Wenn der Kunde von zwei auf vier Farben wechselt oder kleine isolierte Details auf vielen Schichten hinzufügt, aktualisieren Sie das Angebot, da sich die Anzahl der Übergänge ändert, auch wenn sich das sichtbare Modellvolumen kaum verändert.',
    },
    {
      type: 'table',
      headers: ['Purge-Verhältnis', 'Interpretation', 'Empfohlene Maßnahme'],
      rows: [
        ['Unter 15 %', 'Effizienter Mehrfarbenauftrag', 'Normale Angebotsannahmen sind in der Regel akzeptabel.'],
        ['15 % bis 30 %', 'Materialverlust ist sichtbar', 'Übergänge überprüfen und prüfen, ob Purge-to-Infill hilft.'],
        ['Über 30 %', 'Hohes Abfallverhältnis', 'Farben gruppieren, Modell aufteilen, Angebot erhöhen oder Farblayout überarbeiten.'],
        ['Über 50 %', 'Turm dominiert die Wirtschaftlichkeit', 'Den Druck als speziellen Produktionsauftrag behandeln, nicht als routinemäßigen Objektdruck.'],
      ],
    },
    {
      type: 'title',
      text: 'Die Dashboard-Ergebnisse lesen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die beiden horizontalen Blöcke sind bewusst streng gehalten. Grün ist das tatsächliche Objektvolumen. Der gestreifte Purge-Block ist Material, das nicht zum sichtbaren Produkt wird. Wenn der gestreifte Block beginnt, physisch mit dem Objektblock vergleichbar zu sein, verdient der Druck eine genauere Prüfung. Dieses visuelle Verhältnis ist oft überzeugender als Gramm oder Währung, da es dem Benutzer genau zeigt, wie viel Plastik für die Reinigung vorgesehen ist.',
    },
    {
      type: 'paragraph',
      html: 'Das Massenergebnis ergibt sich aus Volumen multipliziert mit Dichte. PLA liegt oft bei etwa 1,24 g/cm3, PETG üblicherweise bei etwa 1,27 g/cm3, ABS ist niedriger, und gefüllte Filamente variieren stark. Das Preisergebnis verwendet den ausgewählten Preis pro Kilogramm. Wenn Sie spezielles Seiden-PLA, Kohlefasermischungen, lösliche Stützstrukturen oder Ingenieurfilamente verwenden, ersetzen Sie den Standardpreis und die Standarddichte. Das gleiche Purge-Volumen kann je nach Material ein sehr unterschiedliches wirtschaftliches Gewicht haben.',
    },
    {
      type: 'summary',
      title: 'Checkliste für Entscheidungen',
      items: [
        'Verwenden Sie die gemessene Slicer-Purge-Kalibrierung als Basisvolumen.',
        'Zählen Sie wiederholte Übergänge, nicht nur die Anzahl der im AMS oder MMU geladenen Farben.',
        'Beachten Sie zuerst Übergänge von Schwarz zu Weiß, von gesättigt zu hell und zu transparenten Zielen.',
        'Behandeln Sie ein Purge-Verhältnis über 30 Prozent als Warnung für eine Neugestaltung oder Angebotsanpassung.',
        'Verwenden Sie das Kostenergebnis für die Materialbudgetierung und den visuellen Balken für eine schnelle Designüberprüfung.',
      ],
    },
    {
      type: 'message',
      title: 'Praktisches Fazit',
      html: 'Ein Multimaterialdruck ist effizient, wenn die Farbwechsel so angeordnet sind, dass der Purge Tower im Verhältnis zum Objekt klein bleibt. Wenn der Turm über die 30-Prozent-Warnlinie hinauswächst, ist die günstigste Optimierung in der Regel keine neue Spule oder ein schnelleres Profil, sondern eine bessere Farbstrategie.',
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
