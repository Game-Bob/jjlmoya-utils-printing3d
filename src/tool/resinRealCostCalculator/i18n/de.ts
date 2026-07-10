import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ResinRealCostCalculatorUI } from '../ui';

const slug = 'echte-harzkosten-rechner-sla-dlp';
const title = 'Rechner für echte Harzkosten bei SLA und DLP Druckverfahren';
const description = 'Berechne die theoretischen und tatsächlichen Harzkosten mit Dichteumrechnung, Slicervolumen und einer Abfallkorrektur von 10 bis 15 Prozent für komplexe SLA- und DLP-Teile.';

const faqData = [
  {
    question: 'Warum sind die tatsächlichen Harzkosten höher als die Slicerkosten?',
    answer: 'Der Slicer gibt in der Regel nur das netto ausgehärtete Harz im Modell und in den Stützen an. Er berücksichtigt nicht immer Harz, das auf der Bauplatte zurückbleibt, in Hohlwänden eingeschlossen ist, durch Waschverluste, fehlgeschlagene Stützen oder Rückstände, die nicht sauber zurückgegossen werden können.',
  },
  {
    question: 'Soll ich Gramm oder Milliliter eingeben?',
    answer: 'Verwende, was dein Slicer exportiert. Wenn er Gramm angibt, gib die Harzdichte aus der Flasche oder dem Datenblatt ein, damit der Rechner die Masse vor der Preisberechnung in Volumen umrechnen kann.',
  },
  {
    question: 'Welchen Komplexitätsfaktor soll ich verwenden?',
    answer: 'Verwende Niedrig für massive Teile mit einfachen Stützen, Mittel für typische Miniaturen und funktionale Harzteile und Hoch für hohle Teile, dichte Stützen, Hohlräume und Teile, die nach dem Druck flüssiges Harz zurückhalten.',
  },
  {
    question: 'Sind Alkohol, Handschuhe, Filter oder Maschinenzeit enthalten?',
    answer: 'Nein. Dieses Werkzeug isoliert die Harzmaterialkosten. Verbrauchsmaterialien, Arbeit, Nachhärtungsenergie, Fehldrucke und Maschinenabschreibung sollten in einem breiteren Angebot hinzugefügt werden.',
  },
];

const howToData = [
  {
    name: 'Gib die Flaschendaten ein',
    text: 'Füge den Nettopreis der Flasche, das Nennvolumen in Millilitern und die Dichte aus dem Harzdatenblatt oder -etikett hinzu.',
  },
  {
    name: 'Füge die Slicernutzung ein',
    text: 'Gib den vom Slicer exportierten Harzverbrauch des Modells ein (Lychee, Chitubox, PrusaSlicer oder ein anderer Slicer) und wähle Gramm oder Milliliter.',
  },
  {
    name: 'Wähle die Komplexität',
    text: 'Wähle niedrige, mittlere oder hohe Komplexität, um eine Abfallkorrektur von 10, 12,5 oder 15 Prozent auf das Slicervolumen anzuwenden.',
  },
  {
    name: 'Vergleiche theoretische und tatsächliche Kosten',
    text: 'Verwende die theoretischen Kosten für den Slicervergleich und die tatsächlichen korrigierten Kosten für Angebote, Chargenbildung und Harzbestandsplanung.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'de',
};

export const content: ToolLocaleContent<ResinRealCostCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    bottlePanel: 'Harzflasche',
    modelPanel: 'Slicermodell',
    resultPanel: 'Echte Harzkosten',
    unitSystemLabel: 'Einheiten',
    metricLabel: 'Metrisch',
    imperialLabel: 'US',
    currencyLabel: 'Währung',
    currencyOptions: [
      { code: 'EUR', label: '€', symbol: '€' },
      { code: 'USD', label: '$', symbol: '$' },
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
    bottlePriceLabel: 'Flaschenpreis',
    bottleVolumeLabel: 'Flaschenvolumen',
    resinPresetLabel: 'Harzvoreinstellung',
    resinPresetOptions: [
      { label: 'Benutzerdefiniert / manuelle Dichte', density: '' },
      { label: 'Generisches Standardharz - 1,10 g/cm3', density: '1.10' },
      { label: 'Generisches wasserwaschbares Harz - 1,08 g/cm3', density: '1.08' },
      { label: 'Generisches ABS-ähnliches Harz - 1,10 g/cm3', density: '1.10' },
      { label: 'Generisches zähes Harz - 1,12 g/cm3', density: '1.12' },
      { label: 'Generisches flexibles Harz - 1,05 g/cm3', density: '1.05' },
      { label: 'Generisches Hochtemperaturharz - 1,15 g/cm3', density: '1.15' },
      { label: 'Generisches Gießharz - 1,12 g/cm3', density: '1.12' },
      { label: 'Generisches keramikgefülltes Harz - 1,35 g/cm3', density: '1.35' },
      { label: 'Anycubic Standard - 1,10 g/cm3', density: '1.10' },
      { label: 'Anycubic ABS-Like - 1,10 g/cm3', density: '1.10' },
      { label: 'Elegoo Standard - 1,10 g/cm3', density: '1.10' },
      { label: 'Elegoo ABS-Like - 1,05 g/cm3', density: '1.05' },
      { label: 'Siraya Tech Fast - 1,09 g/cm3', density: '1.09' },
      { label: 'Siraya Tech Blu - 1,12 g/cm3', density: '1.12' },
      { label: 'Phrozen Aqua Gray 4K - 1,10 g/cm3', density: '1.10' },
      { label: 'Formlabs Standard - 1,10 g/cm3', density: '1.10' },
      { label: 'Formlabs Tough 2000 - 1,18 g/cm3', density: '1.18' },
    ],
    densityLabel: 'Harzdichte (g/cm3)',
    modelAmountLabel: 'Slicermenge',
    unitLabel: 'Mengeneinheit',
    mlUnit: 'ml',
    fluidOunceUnit: 'fl oz',
    gramsUnit: 'g',
    ounceUnit: 'oz',
    complexityLabel: 'Teilekomplexität',
    lowComplexity: 'Niedrig',
    mediumComplexity: 'Mittel',
    highComplexity: 'Hoch',
    lowHint: 'Massive Teile, leichte Stützen, +10%',
    mediumHint: 'Typischer Harzjob, +12,5%',
    highHint: 'Hohle Teile oder dichte Stützen, +15%',
    theoreticalCostLabel: 'Slicerkosten',
    realCostLabel: 'Tatsächliche Kosten',
    wasteCostLabel: 'Abfallkorrektur',
    correctedVolumeLabel: 'Korrigiertes Volumen',
    costPerMlLabel: 'Kosten pro ml',
    bottlePrintsLabel: 'Drucke pro Flasche',
    savedSettingsLabel: 'Abfallfaktor',
    hollowPartTip: 'Hohle Teile mit Entlüftungslöchern können mehr als 15 Prozent Abfall verursachen, da Harz an Innenwänden, in Hohlräumen, an Stützen und im Waschprozess zurückbleibt.',
    conversionLabel: 'Nettovolumen vom Slicer',
    netFromSlicerLabel: 'netto vom Slicer',
    persistenceNote: 'Flaschenpreis, Flaschenvolumen und Dichte werden lokal in diesem Browser gespeichert.',
  },
  seo: [
    {
      type: 'title',
      text: 'Warum SLA und DLP Harzkosten eine Abfallkorrektur benötigen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die von einem Slicer angezeigte Harzmenge ist ein nützlicher Ausgangspunkt, aber sie entspricht nicht der Harzmenge, die bei einem echten Druck aus der Flasche verschwindet. SLA-, MSLA-, LCD- und DLP-Druck verwenden alle eine Wanne voller flüssigem Photopolymer. Das Teil härtet Schicht für Schicht aus, aber unausgehärtetes Harz bedeckt weiterhin das Modell, die Stützen, die Bauplatte, die Wannenfolie und jeden inneren Hohlraum, der zum Harzbad hin offen ist. Ein Rechner, der das Slicervolumen mit dem Preis pro Milliliter der Flasche multipliziert, liefert eine saubere theoretische Zahl. Ein Werkstattangebot benötigt jedoch die korrigierte Zahl.',
    },
    {
      type: 'paragraph',
      html: 'Dieser Rechner trennt die <strong>Slicerkosten</strong> von den <strong>tatsächlichen Harzkosten</strong>. Die Slicerkosten sind das vom Software gemeldete Nettoharz. Die tatsächlichen Kosten wenden einen kontrollierten Abfallfaktor von 10 bis 15 Prozent an. Diese Spanne ist bewusst eng gewählt: Sie ist hoch genug, um übliche Harzhandhabungsverluste zu berücksichtigen, aber nicht so hoch, dass Fehldrucke, Arbeit, Alkohol, Handschuhe, Filter oder Nachhärtung unter der Materialposition versteckt werden. Das Ergebnis sind praktische variable Materialkosten für einen einzelnen Druck oder eine Charge.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '10%', label: 'Niedrige Korrektur für massive Teile und leichte Stützen' },
        { value: '12,5%', label: 'Standardkorrektur für normale Harzarbeiten' },
        { value: '15%', label: 'Hohe Korrektur für Hohlräume und dichte Stützen' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Vermische nicht Materialkosten mit Auftragskosten',
      html: 'Die hier zurückgegebene Zahl betrifft nur das Harzmaterial. Ein vollständiger Verkaufspreis sollte auch Fehldrucke, Reinigungsalkohol, Nitrilhandschuhe, Papiertücher, Filter, Nachhärtungszeit, Verpackung, Maschinenverschleiß, Konstruktionszeit und Gewinnspanne umfassen.',
    },
    {
      type: 'title',
      text: 'Die Formel hinter dem Rechner',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Der erste Schritt ist der Flaschenpreis pro Milliliter: <code>kosten_pro_ml = flaschenpreis / flaschenvolumen_ml</code>. Eine 1000-ml-Flasche, die für 42 EUR gekauft wurde, hat Grundkosten von 0,042 EUR pro ml. Wenn der Slicer angibt, dass eine Miniatur 38 ml verbraucht, betragen die theoretischen Harzkosten 38 x 0,042, also 1,60 EUR. Diese Zahl ist nützlich, um Ausrichtung, Aushöhlung, Stützstrategien und Chargen innerhalb des Slicers zu vergleichen, aber sie geht davon aus, dass jeder vom Slicer gemeldete Milliliter die einzige verbrauchte Harzmenge ist.',
    },
    {
      type: 'paragraph',
      html: 'Der zweite Schritt wendet das korrigierte Volumen an: <code>tatsächliches_volumen = slicervolumen x (1 + abfallfaktor)</code>. Mit dem Standardfaktor von 12,5 Prozent wird aus einem 38-ml-Modell 42,75 ml. Die tatsächlichen Materialkosten betragen dann 42,75 x 0,042 EUR, also 1,80 EUR. Der Unterschied ist bei einem winzigen Modell gering, wird aber sichtbar, wenn man ein Tablett mit Miniaturen, Zahnmodelle, Schmuckmaster, technische Prototypen oder Produktionsvorrichtungen anbietet.',
    },
    {
      type: 'table',
      headers: ['Slicervolumen', 'Flaschenkosten', 'Faktor', 'Theoretische Kosten', 'Tatsächliche Kosten'],
      rows: [
        ['25 ml', '42 EUR / 1000 ml', '10%', '1,05 EUR', '1,16 EUR'],
        ['80 ml', '42 EUR / 1000 ml', '12,5%', '3,36 EUR', '3,78 EUR'],
        ['150 ml', '42 EUR / 1000 ml', '15%', '6,30 EUR', '7,25 EUR'],
        ['420 ml', '42 EUR / 1000 ml', '15%', '17,64 EUR', '20,29 EUR'],
      ],
    },
    {
      type: 'tip',
      title: 'Verwende für Produktionsserien das Chargenvolumen, nicht das Teilvolumen',
      html: 'Wenn du die Bauplatte mit mehreren Kopien füllst, berechne anhand des Slicervolumens für die gesamte Platte. Stütztürme, gemeinsame Stützstrukturen und Ausrichtungsänderungen können die Charge effizienter machen, als ein einzelnes Teil mit der Kopienanzahl zu multiplizieren.',
    },
    {
      type: 'title',
      text: 'Den richtigen Komplexitätsfaktor wählen',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Niedrige Komplexität',
          description: 'Verwende 10 Prozent für massive Teile, einfache Halterungen, Kalibrierstücke, Schachfiguren und Modelle mit wenigen Stützen.',
          points: ['Wenig innere Retention', 'Niedrige Stützendichte', 'Einfaches Rücktropfen in die Wanne'],
        },
        {
          title: 'Mittlere Komplexität',
          description: 'Verwende 12,5 Prozent für normale Miniaturen, zahntechnische Modelle, Tabletop-Teile und funktionale Stücke mit mäßigen Stützen.',
          points: ['Typische Nachbearbeitungsverluste', 'Etwas Harz an Stützen', 'Guter Standard-Angebotsfaktor'],
          highlight: true,
        },
        {
          title: 'Hohe Komplexität',
          description: 'Verwende 15 Prozent für Hohlschalen, Hohlräume, dichte Stützenwälder, Gitterstrukturen und Teile, die nach dem Abtropfen starke Rückstände hinterlassen.',
          points: ['Mehr eingeschlossene Flüssigkeit', 'Mehr Waschverluste', 'Höhere Handhabungsunsicherheit'],
        },
      ],
    },
    {
      type: 'paragraph',
      html: 'Der Komplexitätsfaktor ist keine Strafe für schlechtes Slicen. Es ist eine Korrektur dafür, wie sich flüssiges Harz verhält. Ein einfacher massiver Block, der richtig geneigt ist, kann nach einigen Minuten fast vollständig abtropfen. Eine hohle Statue mit kleinen Entlüftungslöchern kann einen Harzfilm innerhalb der Wand, um die Stützen herum und in der Nähe von Saugnäpfen zurückhalten. Dichte Stützenbasen halten ebenfalls Harz zwischen den Säulen. Selbst wenn du das Teil über der Wanne abtropfen lässt, ist das Harz, das in den Waschbehälter, an die Handschuhe, das Papiertuch und den Filter gelangt, Teil des tatsächlichen Materials, das der Auftrag verbraucht.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Wenn 15 Prozent nicht ausreichen',
      html: 'Wenn ein Hohlmodell schlechte Entwässerung, blinde Hohlräume, dicke innere Stützen oder eine texturierte Innenseite hat, kann der Abfall 15 Prozent übersteigen. Behandle in diesem Fall diesen Rechner als Harzbasislinie und füge eine separate Risikoreserve zum Angebot hinzu.',
    },
    {
      type: 'summary',
      title: 'Schnelle Faktorauswahl',
      items: [
        'Wähle 10 Prozent, wenn das Modell massiv, kompakt und leicht zu entwässern ist.',
        'Wähle 12,5 Prozent, wenn du unsicher bist oder ein gemischtes Tablett druckst.',
        'Wähle 15 Prozent, wenn das Teil hohl, stark gestützt oder geometrisch unordentlich ist.',
        'Füge eine separate Fehlertoleranz hinzu, wenn du ein neues Harz, eine neue Ausrichtung oder ein zerbrechliches Kundenteil druckst.',
      ],
    },
    {
      type: 'title',
      text: 'Dichte verwenden, wenn der Slicer in Gramm berichtet',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Viele Slicer können den Harzverbrauch in Millilitern, Gramm oder beidem angeben. Harzflaschen werden normalerweise nach Nennvolumen verkauft, üblicherweise 500 ml, 1000 ml oder 1 Liter. Wenn der Slicer in Gramm exportiert, rechnet der Rechner Masse mit Hilfe der Dichte in Volumen um: <code>volumen_ml = gramm / dichte</code>. Die Harzdichte wird normalerweise in g/cm3 angegeben, und 1 cm3 entspricht dem gleichen Volumen wie 1 ml. Ein Harz mit einer Dichte von 1,10 g/cm3 bedeutet, dass 110 g ungefähr 100 ml entsprechen.',
    },
    {
      type: 'table',
      headers: ['Slicermasse', 'Dichte', 'Umgerechnetes Volumen', 'Warum es wichtig ist'],
      rows: [
        ['55 g', '1,10 g/cm3', '50,0 ml', 'Übliche Schätzung für Standardharz'],
        ['55 g', '1,05 g/cm3', '52,4 ml', 'Geringere Dichte bedeutet mehr Volumen'],
        ['55 g', '1,20 g/cm3', '45,8 ml', 'Gefüllte oder keramische Harze können dichter sein'],
      ],
    },
    {
      type: 'tip',
      title: 'Finde die Dichte im technischen Datenblatt',
      html: 'Verwende den Voreinstellungskatalog für gängige Harze und behandle die Dichteeingabe als endgültige Quelle der Wahrheit. Wenn dein genaues Harz, deine Farbe oder Charge von der Voreinstellung abweicht, überschreibe das Feld mit dem Wert aus dem technischen Datenblatt des Herstellers. Gehe nicht davon aus, dass alle Harze 1,00 g/ml haben.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Dichte', definition: 'Masse pro Volumeneinheit. Bei der Harzkostenberechnung ermöglicht sie die Umrechnung von Gramm aus dem Slicer in Milliliter aus der Flasche.' },
        { term: 'Theoretische Kosten', definition: 'Das saubere Slicervolumen multipliziert mit den Flaschenkosten pro Milliliter, vor der Abfallkorrektur.' },
        { term: 'Korrigiertes Volumen', definition: 'Das Modellvolumen nach Hinzufügen des ausgewählten Abfallfaktors von 10, 12,5 oder 15 Prozent.' },
        { term: 'Entlüftungsloch', definition: 'Eine Öffnung in einem hohlen Harzteil, die es unausgehärtetem Harz ermöglicht, das Innere vor dem Waschen und Aushärten zu verlassen.' },
      ],
    },
    {
      type: 'title',
      text: 'Warum hohle Harzdrucke oft teurer sind als erwartet',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Das Aushöhlen eines großen Modells kann das ausgehärtete Harzvolumen drastisch reduzieren, macht den Druck aber nicht frei von versteckten Kosten. Hohlwände benötigen Entlüftungslöcher, die innere Geometrie muss waschbar sein, und unausgehärtetes Harz, das im Modell eingeschlossen ist, kann später auslaufen, das Teil reißen oder die endgültige Aushärtung beeinträchtigen. Der Slicer zeigt möglicherweise ein viel niedrigeres Nettovolumen nach dem Aushöhlen an, aber der Handhabungsprozess wird empfindlicher. Deshalb verwendet hohe Komplexität standardmäßig 15 Prozent.',
    },
    {
      type: 'proscons',
      title: 'Aushöhlung und Kostenkontrolle',
      items: [
        { pro: 'Große Ausstellungsmodelle können viel weniger ausgehärtetes Harz verbrauchen.', con: 'Schlechte Entwässerung kann flüssiges Harz im Inneren des Teils halten.' },
        { pro: 'Geringere Abzugskräfte können den Erfolg bei großen Querschnitten verbessern.', con: 'Zusätzliche Löcher, Stopfen und Reinigungszeit können die Arbeit erhöhen.' },
        { pro: 'Ein leichteres Modell ist einfacher zu versenden und zu montieren.', con: 'Dünne Wände können versagen, wenn Wandstärke und Belichtung nicht abgestimmt sind.' },
      ],
    },
    {
      type: 'card',
      title: 'Faustregel für Hohldruck',
      html: 'Wenn ein hohles Teil aus dem Drucker kommt und nach normalem Abtropfen noch tropft, verwende den hohen Faktor und überprüfe die Anordnung der Entlüftungslöcher. Wenn es nach dem Waschen weiterhin undicht ist, ist das Problem nicht nur der Kosten; es kann zu einem Qualitäts- und Sicherheitsproblem werden, da unausgehärtetes Harz im Objekt verbleibt.',
    },
    {
      type: 'title',
      text: 'Slicerschätzungen lesen, ohne zu niedrig zu kalkulieren',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Lychee, Chitubox, PrusaSlicer und andere Harzslicer schätzen den Harzverbrauch anhand des Netzes, der Stützen, der Aushöhlung und manchmal des Harzprofils. Diese Schätzungen sind gut genug, um Versionen desselben Auftrags zu vergleichen. Sie sind als endgültiges Angebot schwächer, da sie deinen Arbeitsablauf nicht kennen. Eine Werkstatt, die Harz nach jedem Auftrag filtert, verliert eine andere Menge als ein Hobbyist, der dasselbe Harz in der Wanne behält. Ein Benutzer, der in zwei IPA-Stufen wäscht, verliert eine andere Menge als einer, der eine versiegelte Waschstation verwendet und die Teile vor dem Bewegen gründlich abtropfen lässt.',
    },
    {
      type: 'list',
      items: [
        'Gib die Schätzung der gesamten Platte nach den Stützen ein, nicht das ursprüngliche ungestützte Netzvolumen.',
        'Verwende dieselbe Währung für den Flaschenpreis und das endgültige Angebot; der Rechner kann den sichtbaren Flaschenpreis zwischen gängigen Währungen mit ungefähren Wechselkursfaktoren umrechnen.',
        'Aktualisiere den Flaschenpreis beim Kauf von Spezialharz, da Gießharze, flexible, dentale und Hochtemperaturharze ein Vielfaches von Standardharz kosten können.',
        'Verwende die Dichteumrechnung, wenn die Slicermasse und das Flaschenvolumen nicht dieselbe Einheit teilen.',
        'Halte die Fehlerrate getrennt, insbesondere beim Drucken von zerbrechlichen Miniaturen, dünnen dentalen Schalen oder neuen Stützstrategien.',
      ],
    },
    {
      type: 'message',
      title: 'Bessere Angebotsgewohnheit',
      html: 'Speichere deine üblichen Harzflaschendaten, füge die Slicerschätzung ein, wähle die Komplexität und notiere beide Zahlen. Die theoretischen Kosten erklären die Slicerschätzung; die tatsächlichen Kosten schützen deinen Materialbestand.',
    },
    {
      type: 'title',
      text: 'Was dieser Rechner nicht enthält',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ein Harzdruck hat mehr Kosten als nur Harz. Dieses Werkzeug konzentriert sich bewusst auf den variablen Harzverbrauch, da dies die Zahl ist, die beim Vergleich der Slicerausgabe mit dem tatsächlichen Flaschenverbrauch am häufigsten unterschätzt wird. Es enthält nicht: Alkoholersatz, Reinigungsmittel, Wasseraufbereitung, Papiertücher, Einweghandschuhe, FEP- oder Trennfolienverschleiß, LCD-Bildschirmalterung, Druckerabschreibung, Strom, Nachhärtungszeit, Schleifen, Grundieren, Stützenentfernung, Verpackung oder Marktplatzgebühren.',
    },
    {
      type: 'table',
      headers: ['Kostenpunkt', 'Hier enthalten?', 'Wo verbuchen'],
      rows: [
        ['Flüssigharz für den Druck', 'Ja', 'Dieser Rechner'],
        ['Harzrückstände und normale Handhabungsverluste', 'Ja', 'Komplexitätsfaktor'],
        ['Fehldrucke', 'Nein', 'Fehlertoleranz nach Material und Modellrisiko hinzufügen'],
        ['IPA, Handschuhe, Tücher, Filter', 'Nein', 'Verbrauchsmaterialposition'],
        ['Stützenentfernung und Schleifen', 'Nein', 'Arbeits- oder Nachbearbeitungsposition'],
        ['Druckerabschreibung', 'Nein', 'Stündlicher Maschinensatz'],
      ],
    },
    {
      type: 'summary',
      title: 'Zuverlässiger Harzkosten Workflow',
      items: [
        'Berechne den Preis pro Milliliter aus der Flasche, die du tatsächlich gekauft hast.',
        'Rechne Gramm bei Bedarf mit der Harzdichte in Milliliter um.',
        'Verwende die Slicerausgabe nach Stützen und Aushöhlung.',
        'Wende eine Korrektur von 10 bis 15 Prozent basierend auf Geometrie und Handhabungsverlust an.',
        'Halte Fehldrucke, Arbeit, Verbrauchsmaterialien und Gewinnspanne außerhalb der Harzmaterialzahl.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
