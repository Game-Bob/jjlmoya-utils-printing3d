import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MasterPricingMarginCalculatorUI } from '../ui';

const slug = '3d-druck-preisrechner';
const title = '3D-Druck-Preisrechner: Marge, Markup und Marktpositionierung';
const description =
  'Berechnen Sie den empfohlenen 3D-Druck-Verkaufspreis basierend auf Herstellungskosten, Zielmarge, Markup und Preisen der Konkurrenz mit präzisen Finanzformeln.';

const currencyOptions = [
  { code: 'EUR', label: '\u20ac', symbol: '\u20ac' },
  { code: 'USD', label: '$', symbol: '$' },
  { code: 'GBP', label: '\u00a3', symbol: '\u00a3' },
  { code: 'CAD', label: 'C$', symbol: 'C$' },
  { code: 'AUD', label: 'A$', symbol: 'A$' },
  { code: 'CHF', label: 'Fr', symbol: 'Fr' },
  { code: 'CNY', label: '\u00a5', symbol: '\u00a5' },
  { code: 'INR', label: '\u20b9', symbol: '\u20b9' },
  { code: 'BRL', label: 'R$', symbol: 'R$' },
  { code: 'MXN', label: '$', symbol: '$' },
  { code: 'RUB', label: '\u20bd', symbol: '\u20bd' },
  { code: 'PLN', label: 'z\u0142', symbol: 'z\u0142' },
  { code: 'SEK', label: 'kr', symbol: 'kr' },
  { code: 'NOK', label: 'kr', symbol: 'kr' },
  { code: 'DKK', label: 'kr', symbol: 'kr' },
  { code: 'TRY', label: '\u20ba', symbol: '\u20ba' },
  { code: 'JPY', label: '\u00a5', symbol: '\u00a5' },
];

const faqData = [
  {
    question: 'Was ist der Unterschied zwischen Marge und Markup im 3D-Druck?',
    answer:
      'Die Marge ist der Gewinn dividiert durch den Verkaufspreis. Das Markup (Aufschlag) ist der Gewinn dividiert durch die Kosten. Ein Aufschlag von 50 % auf Kosten von 40,00 führt zu einem Preis von 60,00 und einer Marge von 33,33 %, nicht von 50 %.',
  },
  {
    question: 'Warum muss die Zielmarge unter 100 % liegen?',
    answer:
      'Die Margenformel dividiert die Kosten durch eins minus den Margensatz. Bei einer Marge von 100 % wird der Nenner zu Null, sodass kein endlicher Verkaufspreis existiert.',
  },
  {
    question: 'Sollte der Preis der Konkurrenz mein 3D-Druck-Angebot bestimmen?',
    answer:
      'Der Konkurrenzpreis ist ein Positionierungssignal, kein Ersatz für die Kostenberechnung. Wenn Ihr berechneter Preis über dem Markt liegt, überprüfen Sie Kosten, Oberflächengüte, Lieferzeit und Mehrwert, bevor Sie Rabatte gewähren.',
  },
  {
    question: 'Berücksichtigt der Rechner Steuern oder die Mehrwertsteuer?',
    answer:
      'Nein. Er berechnet den empfohlenen Verkaufspreis vor Steuern. Fügen Sie Mehrwertsteuer, Umsatzsteuer, Plattformgebühren oder Zahlungsabwicklungsgebühren gemäß Ihren lokalen Rechnungslegungsvorschriften hinzu.',
  },
];

const howToData = [
  { name: 'Gesamte Herstellungskosten eingeben', text: 'Nutzen Sie die Gesamtkosten des Auftrags, einschließlich fixer und variabler Kosten, Material, Maschinenlaufzeit, Arbeit und Nachbearbeitung.' },
  { name: 'Margen- oder Markup-Modus wählen', text: 'Wählen Sie aus, ob der empfohlene PVP die Formel für die Zielmarge oder die Markup-Formel verwenden soll.' },
  { name: 'Konkurrenz-Vergleichspreis festlegen', text: 'Geben Sie einen vergleichbaren Marktpreis ein, um zu sehen, ob Ihr Angebot über, unter oder auf dem Niveau der Konkurrenz liegt.' },
  { name: 'Empfohlenen Preis kopieren', text: 'Nutzen Sie den Kopier-Button, um PVP, Nettogewinn, reale Marge und Marktvergleich in ein Angebot oder eine Rechnung zu übernehmen.' },
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
  step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  featureList: [
    '3d-druck preisrechner',
    '3d-druck gewinnmarge rechner',
    'markup vs marge 3d-druck',
    '3d-druck verkaufspreis rechner',
    'marktpositionierungs-indikator',
  ],
  inLanguage: 'de',
};

export const content: ToolLocaleContent<MasterPricingMarginCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: '3D-Druck Preiseingaben',
    resultsAriaLabel: '3D-Druck Preisergebnisse',
    currencyLabel: 'Währung',
    currencyOptions,
    currencyOptionSeparator: ' - ',
    costLabel: 'Gesamte Herstellungskosten',
    competitorLabel: 'Vergleichspreis der Konkurrenz',
    marginLabel: 'Zielmarge',
    markupLabel: 'Zielmarkup',
    conversionFactorLabel: 'Globaler Umrechnungsfaktor',
    conversionFactorUnit: 'x',
    conversionHint: 'Belassen Sie den Wert bei 1, wenn die Kosten bereits in der ausgewählten Währung eingegeben wurden. Nutzen Sie ihn für währungs- oder preisübergreifende Skalierung.',
    modeLabel: 'PVP-Methode',
    marginModeLabel: 'Marge',
    markupModeLabel: 'Markup',
    pvpRecommendedLabel: 'Empfohlener PVP',
    netProfitLabel: 'Nettogewinn',
    realMarginLabel: 'Reale Marge',
    marketComparisonLabel: 'Vgl. Konkurrenz',
    marketPositionLabel: 'Marktposition',
    aboveMarketLabel: 'Über Marktpreis',
    belowMarketLabel: 'Unter Marktpreis',
    atMarketLabel: 'Auf Marktpreis',
    pvpByMarginLabel: 'PVP nach Marge',
    pvpByMarkupLabel: 'PVP nach Markup',
    formulaMarginLabel: 'PVP_marge = C / (1 - M / 100)',
    formulaMarkupLabel: 'PVP_markup = C x (1 + U / 100)',
    sliderOutputSeparator: ' | ',
    copyLabel: 'Preis kopieren',
    copiedLabel: 'Kopiert',
    copyTemplate: 'Empfohlener PVP: {pvp}; Nettogewinn: {profit}; reale Marge: {margin}; Marktvergleich: {comparison}',
    pendingLabel: '-',
    currencySymbol: '\u20ac',
  },
  seo: [
    { type: 'title', text: 'Wie dieser 3D-Druck-Preisrechner funktioniert', level: 2 },
    {
      type: 'paragraph',
      html: 'Ein zuverlässiger <strong>3D-Druck-Preisrechner</strong> muss von den gesamten Herstellungskosten ausgehen, nicht nur vom reinen Filamentgewicht. Der Kostenwert sollte fixe Zuweisungen, variable Maschinenkosten, Material, Fehlguss-Zulagen, Arbeitszeit, Nachbearbeitung, Verpackung und alle direkten Projektkosten enthalten. Sobald diese Kosten bekannt sind, kann der Verkaufspreis entweder mit einer Zielmarge oder einem Aufschlag (Markup) berechnet werden. Diese beiden Methoden sind nicht austauschbar. Sie zu verwechseln ist einer der schnellsten Wege für einen 3D-Druck-Dienstleister, Angebote zu erstellen, die zwar profitabel aussehen, aber nicht die geplante Marge erreichen.',
    },
    {
      type: 'paragraph',
      html: 'Der Rechner verwendet exakte Formeln: <code>PVP_marge = C / (1 - M / 100)</code> und <code>PVP_markup = C x (1 + U / 100)</code>. Der Nettogewinn ist immer <code>PVP - C</code>. Die reale Marge ist der Gewinn dividiert durch den Endpreis, nicht durch die Kosten. Der Zielmargen-Schieberegler ist unter 100 begrenzt, da eine 100%-Marge Nullkosten oder einen unendlichen Preis erfordern würde. Die Ausgabe verwendet immer zwei feste Dezimalstellen und keine Tausendertrennzeichen, damit die Zahl sauber in Rechnungen, Tabellen oder ERP-Systeme kopiert werden kann.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'M < 100', label: 'Strikte Margenvalidierung', icon: 'mdi:shield-check-outline' },
        { value: '2 Dezimalstellen', label: 'Fester Geldbetrag', icon: 'mdi:calculator-variant-outline' },
        { value: 'Live', label: 'Echtzeit-Berechnung per Schieberegler', icon: 'mdi:flash-outline' },
        { value: 'Markt', label: 'Konkurrenz-Positionierung', icon: 'mdi:chart-timeline-variant' },
      ],
    },
    {
      type: 'tip',
      title: 'Nutzen Sie eine einheitliche Preissprache im Unternehmen',
      html: '<p>Legen Sie fest, ob in Verkaufsgesprächen Marge, Aufschlag oder beides mit expliziten Bezeichnungen verwendet werden. Ein Angebot mit der Angabe "40 %" ohne Nennung der Basis kann zwei sehr unterschiedliche Preise bedeuten.</p>',
    },
    { type: 'title', text: 'Marge vs. Markup im 3D-Druck', level: 2 },
    {
      type: 'paragraph',
      html: 'Die Frage <strong>markup vs marge 3d-druck</strong> taucht meistens dann auf, wenn ein Shopbesitzer bemerkt, dass ein Aufschlag von 30 % keine Gewinnmarge von 30 % erzeugt. Das Markup wird an den Kosten gemessen. Die Marge wird am Verkaufspreis gemessen. Wenn ein gedrucktes Teil 50,00 kostet und für 75,00 verkauft wird, beträgt der Nettogewinn 25,00. Das Markup liegt bei 50,00 %, da 25,00 dividiert durch 50,00 gleich 0,50 ist. Die Marge beträgt 33,33 %, da 25,00 dividiert durch 75,00 gleich 0,3333 ist. Beide Werte sind korrekt, beantworten aber unterschiedliche geschäftliche Fragen.',
    },
    {
      type: 'table',
      headers: ['Kosten', 'Ziel', 'Formel', 'PVP', 'Nettogewinn', 'Reale Marge'],
      rows: [
        ['50.00', '50% markup', '50.00 x 1.50', '75.00', '25.00', '33.33%'],
        ['50.00', '50% marge', '50.00 / 0.50', '100.00', '50.00', '50.00%'],
        ['80.00', '25% markup', '80.00 x 1.25', '100.00', '20.00', '20.00%'],
        ['80.00', '25% marge', '80.00 / 0.75', '106.67', '26.67', '25.00%'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Ein hohes Markup kann dennoch eine bescheidene Marge erzeugen',
      badge: 'Finanzielle Präzision',
      html: '<p>Ein Markup von 100 % verdoppelt die Kosten, aber die Marge beträgt 50 %. Wenn ein Unternehmen eine reale Marge von 60 % benötigt, um Gemeinkosten und Wachstum zu decken, reicht ein Aufschlag von 100 % nicht aus.</p>',
    },
    {
      type: 'glossary',
      items: [
        { term: 'PVP', definition: 'Empfohlener Verkaufspreis vor Steuern, sofern in den Richtlinien nichts anderes angegeben ist.' },
        { term: 'Kosten C', definition: 'Die gesamten Herstellungskosten, die dem Auftrag vor Hinzufügen des Gewinns zugewiesen wurden.' },
        { term: 'Marge M', definition: 'Gewinn dividiert durch Verkaufspreis, ausgedrückt als Prozentsatz.' },
        { term: 'Markup U', definition: 'Gewinn dividiert durch Kosten, ausgedrückt als Prozentsatz.' },
        { term: 'Nettogewinn', definition: 'Verkaufspreis minus Herstellungskosten vor Steuern und Zinsbereinigungen.' },
      ],
    },
    { type: 'title', text: 'Bestandteile der Gesamtherstellungskosten', level: 2 },
    {
      type: 'paragraph',
      html: 'Ein <strong>3D-Druck Verkaufspreis Rechner</strong> ist nur so genau wie die eingegebenen Kosten. Für eine professionelle Angebotserstellung sollten die Kosten nicht nur aus dem Filamentgewicht multipliziert mit dem Spulenpreis bestehen. Sie müssen Material, Maschinenstrom, Düsen- und FEP-Verschleiß, Harzverlust, Vorbereitung der Druckplatte, Bedienerzeit, Slicer-Vorbereitung, Stützentfernung, Schleifen, Lackieren, Qualitätskontrolle, Verpackung, Transaktionsgebühren und eine angemessene Fehlerrate für Fehldrucke enthalten. Der Rechner setzt voraus, dass die eingegebenen Kosten diese Posten bereits abdecken.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Berücksichtigen Sie variable Materialkosten für Filament, Harz, Pulver, Stützen, Reinigungsmaterial und Raft.',
        'Berücksichtigen Sie Maschinenzeitkosten aus Abschreibung, Wartung, Energie und erwarteter Lebensdauer.',
        'Berücksichtigen Sie Arbeitszeit für Vorbereitung, Überwachung, Nachbearbeitung, Verpackung und Kundenkommunikation.',
        'Berücksichtigen Sie direkte Nachbearbeitungsmaterialien wie Grundierung, Farbe, Schleifmittel, IPA, Handschuhe, Klebeband und Polierpasten.',
        'Planen Sie eine gemessene Fehlguss-Toleranz für riskante Geometrien, enge Toleranzen oder anspruchsvolle optische Finishes ein.',
      ],
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Reine Materialkosten',
          description: 'Schnell für Hobbyschätzungen, aber zu ungenau für kommerzielle Arbeiten.',
          icon: 'mdi:printer-3d-nozzle',
          points: ['Ignoriert Arbeitszeit', 'Ignoriert Maschinenverschleiß', 'Unterbewertet fertige Teile'],
        },
        {
          title: 'Herstellungskosten',
          description: 'Die beste Eingabe für Marge und Markup, da sie das Projekt vor dem Gewinn darstellt.',
          icon: 'mdi:factory',
          highlight: true,
          points: ['Inklusive Maschinenzeit', 'Inklusive Arbeitszeit', 'Ermöglicht reproduzierbare Angebote'],
        },
        {
          title: 'Vollkostenpreis',
          description: 'Kann bereits Gemeinkosten und Gewinn enthalten, sodass das Hinzufügen von Marge zu Doppelzählungen führen kann.',
          icon: 'mdi:receipt-text-outline',
          points: ['Nützlich für Audits', 'Riskant als Rechnereingabe', 'Erfordert klare Buchhaltungsrichtlinien'],
        },
      ],
    },
    {
      type: 'card',
      icon: 'mdi:calculator-variant-outline',
      title: 'Der Rechner schätzt keine Kosten',
      html: '<p>Er wandelt bekannte Kosten in einen empfohlenen Preis um. Wenn die Kosten unsicher sind, erstellen Sie zuerst ein Kostenmodell für Material, Zeit, Arbeit und Nachbearbeitung, und nutzen Sie dann dieses Tool für Gewinn und Marktpositionierung.</p>',
    },
    { type: 'title', text: 'Preise für 3D-Drucke mit einer Zielmarge festlegen', level: 2 },
    {
      type: 'paragraph',
      html: 'Wer nach <strong>Preisfindung im 3D-Druck</strong> sucht, beginnt oft mit einem einfachen Multiplikator. Die Preisfindung nach Marge ist jedoch besser, wenn das Unternehmen ein definiertes Rentabilitätsziel hat. Wenn die erforderliche Marge 40 % beträgt und die Herstellungskosten 60,00 betragen, lautet der Preis <code>60,00 / (1 - 0,40)</code>, was 100,00 entspricht. Der Gewinn beträgt 40,00 und die reale Marge liegt bei 40,00 %. Diese Methode ist üblich, wenn ein Shop möchte, dass jede Produktfamilie einen konsistenten Beitrag zum Gesamtumsatz leistet.',
    },
    {
      type: 'paragraph',
      html: 'Die wichtigste Regel ist, dass die Marge nicht 100 % erreichen kann. Bei einer Zielmarge von 99 % werden aus 10,00 Kosten ein Preis von 1000,00. Bei 99,99 % werden aus denselben Kosten 100000,00. Dieses mathematische Verhalten ist kein Fehler; es zeigt, warum Margenziele wirtschaftlich realistisch sein müssen. Extrem hohe Margenziele bedeuten meist, dass das Kostenmodell zu niedrig angesetzt ist, das Produkt einen außergewöhnlichen Wert besitzt oder es sich um einen Nischenmarkt handelt.',
    },
    {
      type: 'table',
      headers: ['Zielmarge', 'Multiplikator auf Kosten', 'Kosten von 40.00 werden zu', 'Anwendungsfall'],
      rows: [
        ['20%', '1.2500x', '50.00', 'Sehr wettbewerbsintensiver Standarddruck mit geringem Serviceaufwand.'],
        ['35%', '1.5385x', '61.54', 'Routinearbeiten im professionellen Bereich mit normalen Gemeinkosten.'],
        ['50%', '2.0000x', '80.00', 'Aufwendigerer Service, Veredelung, Eilaufträge oder kleinere Chargen.'],
        ['70%', '3.3333x', '133.33', 'Spezialisierter Mehrwert, schwierige Projekte oder Premium-Positionierung.'],
      ],
    },
    {
      type: 'summary',
      title: 'Checkliste für die Preisfindung nach Marge',
      items: [
        'Nutzen Sie die Gesamtherstellungskosten als Basis.',
        'Halten Sie die Zielmarge unter 100 %.',
        'Vergleichen Sie den resultierenden PVP vor der Angebotsabgabe mit dem Konkurrenzpreis.',
        'Untersuchen Sie bei zu hohem Preis die Kostentreiber, bevor Sie den Gewinn reduzieren.',
      ],
    },
    { type: 'title', text: 'Aufschlag nutzen, ohne ihn mit der Marge zu verwechseln', level: 2 },
    {
      type: 'paragraph',
      html: 'Die Preisfindung nach Aufschlag (Markup) ist nützlich, wenn ein Shop einen klaren Multiplikator auf Kostenkategorien anwendet. Beispielsweise kann ein Dienstleister 80 % Aufschlag auf Standarddrucke, 120 % Aufschlag auf fertige Prototypen und 200 % Aufschlag auf kleine Eilaufträge aufschlagen. Die Markup-Formel ist direkt: Kosten multipliziert mit eins plus Aufschlagsatz. Kosten von 35,00 mit 80 % Aufschlag ergeben 63,00. Der Nettogewinn beträgt 28,00, aber die reale Marge liegt bei 44,44 %, nicht bei 80 %.',
    },
    {
      type: 'proscons',
      title: 'Marge vs. Aufschlag (Markup)',
      items: [
        { pro: 'Die Margenmethode orientiert sich direkt am Gewinn als Anteil am Umsatz.', con: 'Verkaufsteams müssen verstehen, warum hohe Margen nicht-lineare Preiserhöhungen verursachen.' },
        { pro: 'Die Aufschlagsmethode lässt sich schnell auf Kostenlisten anwenden.', con: 'Kann die tatsächliche Marge verschleiern, wenn Mitarbeiter den Aufschlagsprozentsatz mit der Rentabilität verwechseln.' },
        { pro: 'Das Anzeigen beider Formeln verdeutlicht den tatsächlichen finanziellen Effekt.', con: 'Das Unternehmen benötigt dennoch eine klare Richtlinie, welcher Wert der angebotene PVP wird.' },
      ],
    },
    {
      type: 'message',
      title: 'Wann Markup praktisch ist',
      ariaLabel: 'Markup-Leitfaden',
      html: '<p>Aufschläge eignen sich gut für einfache interne Regeln: 60 % auf wiederkehrende FDM-Arbeiten, 90 % auf Resin-Miniaturen oder 150 % auf Eilteile aufschlagen. Nutzen Sie die reale Margenausgabe, um zu prüfen, ob diese Regeln das Geschäftsziel erfüllen.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Markup ist nicht falsch',
      badge: 'Methodenhinweis',
      html: '<p>Das Markup ist eine gültige Preissprache, wenn alle Beteiligten die Grundlage verstehen. Das Problem ist nicht das Markup selbst, sondern die Bezeichnung des Aufschlags als "Marge" in Angeboten oder Tabellen.</p>',
    },
    { type: 'title', text: 'Konkurrenzpreis und Marktpositionierung', level: 2 },
    {
      type: 'paragraph',
      html: 'Der Vergleichspreis der Konkurrenz macht den Rechner zu einem kommerziellen Entscheidungswerkzeug anstelle eines reinen Formelblatts. Liegt der empfohlene PVP über dem Vergleichspreis, wird das Ergebnis mit einer Warnfarbe angezeigt. Das bedeutet nicht automatisch, dass das Angebot falsch ist. Ein höherer Preis kann durch schnellere Lieferzeit, bessere Materialrückverfolgbarkeit, hochwertigere Oberflächengüte, Konstruktionsunterstützung, Maßprüfung, lokale Abholung oder geringeres Risiko gerechtfertigt sein. Der Vertrieb sollte jedoch vor dem Versand wissen, warum der Preis über dem Markt liegt.',
    },
    {
      type: 'paragraph',
      html: 'Ein Konkurrenzvergleich sollte auf einem gleichwertigen Vergleich basieren. Ein rohes FDM-Teil mit sichtbaren Schichten ist nicht dasselbe wie ein geschliffener, grundierter und lackierter Prototyp. Ein Marktplatzeintrag mit unsicherem Material, lockerer Toleranz und langem Versand ist nicht dasselbe wie ein lokaler Ingenieurdienstleister, der CAD-Dateien prüft und Passgenauigkeit garantiert. Geben Sie den Konkurrenzpreis ein, der in Material, Prozess, Finish, Menge, Lieferzusage und Kundenerwartung am besten übereinstimmt.',
    },
    {
      type: 'table',
      headers: ['Position', 'Interpretation', 'Maßnahme'],
      rows: [
        ['Unter Konkurrenzpreis', 'Das Angebot ist attraktiv, lässt aber eventuell Gewinn liegen.', 'Prüfen Sie, ob die Zielmarge zu niedrig ist oder der Konkurrent weniger Service bietet.'],
        ['Nahe Konkurrenzpreis', 'Der Preis ist kommerziell an der Referenz ausgerichtet.', 'Nutzen Sie Servicequalität, Lieferzeit und Zuverlässigkeit zur Differenzierung.'],
        ['Über Konkurrenzpreis', 'Das Angebot erfordert eine Rechtfertigung oder Kostenprüfung.', 'Prüfen Sie Kostentreiber, Veredelungsumfang, Dringlichkeit und Kundennutzen vor einer Rabattierung.'],
      ],
    },
    {
      type: 'tip',
      title: 'Beteiligen Sie sich nicht am Preiskampf nach unten',
      html: '<p>Ein Dienstleister mit realen Arbeitskosten, kalibrierten Maschinen, dokumentierten Materialien und Nachbearbeitungskompetenz sollte einen niedrigen Vergleichspreis nicht automatisch matchen. Konkurrieren Sie über den Wert, den der Kunde überprüfen kann.</p>',
    },
    { type: 'title', text: 'Währungsauswahl und globaler Umrechnungsfaktor', level: 2 },
    {
      type: 'paragraph',
      html: 'Die internationale Angebotserstellung erfordert einen konsistenten Umgang mit Geld. Der Währungswähler ändert das Symbol und skaliert bestehende Geldeingaben mit den in der Suite genutzten Referenzfaktoren. Der globale Umrechnungsfaktor ist ein separater kommerzieller Multiplikator. Verwenden Sie den Faktor <code>1</code>, wenn Herstellungskosten und Konkurrenzpreis bereits in der ausgewählten Währung vorliegen. Verwenden Sie einen benutzerdefinierten Faktor, wenn ein Unternehmen eine regionale Preisliste, einen Wechselkurspuffer oder einen Vertriebsabschlag anwenden möchte.',
    },
    {
      type: 'paragraph',
      html: 'Der Faktor gilt für Geldbeträge, nicht für Margen- oder Aufschlagsprozentsätze. Dies ist wichtig, da Prozentsätze ihre Bedeutung über Währungen hinweg behalten sollten. Eine Marge von 35 % in Euro bleibt nach der Umrechnung von Kosten und Konkurrenzpreis eine Marge von 35 % in Dollar. Die Ausgabe bleibt fest auf zwei Dezimalstellen ohne Tausendertrennzeichen eingestellt, was das saubere Kopieren und Einfügen in Tabellenkalkulationen unterstützt.',
    },
    {
      type: 'summary',
      title: 'Währungs- und Faktorregeln',
      items: [
        'Wählen Sie die kundenorientierte Währung aus, bevor Sie den Preis kopieren.',
        'Belassen Sie den Faktor bei 1 für normale Angebote in lokaler Währung.',
        'Nutzen Sie den Faktor für eine kontrollierte kommerzielle Skalierung, nicht zur Änderung der Margen- oder Markup-Bedeutung.',
        'Prüfen Sie Steuern und Rechnungsrundungen außerhalb dieser Netto-Preiskalkulation.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Steuern und Plattformgebühren sind separat zu betrachten',
      badge: 'Angebotsrichtlinie',
      html: '<p>Wenn Mehrwertsteuer, Umsatzsteuer, Zahlungsabwicklung, Plattformprovisionen oder Versandversicherungen erstattet werden müssen, fügen Sie diese gemäß der Unternehmensrichtlinie nach der PVP-Berechnung hinzu.</p>',
    },
    { type: 'title', text: 'Aufbau einer Preisstrategie für 3D-Druck-Dienstleistungen', level: 2 },
    {
      type: 'paragraph',
      html: 'Eine starke <strong>Preisstrategie für 3D-Druck-Dienstleistungen</strong> kombiniert Kostengenauigkeit, Profitdisziplin und Marktgespür. Kostengenauigkeit verhindert den Verkauf unter den realen Produktionskosten. Profitdisziplin verhindert, dass willkürliche Rabatte das Geschäft untergraben. Und Marktgespür verhindert, dass sich das Angebot von der Marktbarriere abkoppelt. Dieser Rechner setzt genau an der Schnittstelle dieser drei Eingangsgrößen an.',
    },
    {
      type: 'list',
      icon: 'mdi:target',
      items: [
        'Erstellen Sie separate Margenziele für Standarddrucke, technische Prototypen, ästhetische Modelle, Eilaufträge und Serienfertigungen.',
        'Verwenden Sie Aufschlagsregeln nur dann, wenn Mitarbeiter auch die dadurch erzielte reale Marge einsehen können.',
        'Verfolgen Sie die Gewinnrate nach Marktposition, sodass Angebote über dem Marktpreis mit Belegen statt mit Vermutungen begründet werden können.',
        'Überprüfen Sie den tatsächlichen Gewinn nach der Lieferung und aktualisieren Sie das Kostenmodell, wenn Arbeit, Fehldrucke oder Nachbearbeitung unterschätzt wurden.',
        'Halten Sie einen Mindestbestellwert für kleine Aufträge ein, bei denen Angebotserstellung, Einrichtung und Kommunikation die Herstellungskosten dominieren.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:chart-timeline-variant',
      title: 'Berechnen Sie den Gewinn aus 3D-Drucken nach Projektabschluss',
      html: '<p>Der geplante Nettogewinn ist vor der Angebotserstellung nützlich, aber der tatsächliche Gewinn verbessert das Preissystem. Vergleichen Sie geschätzte Kosten mit Ist-Kosten und passen Sie zukünftige Margenziele nach Teilefamilien an.</p>',
    },
    {
      type: 'summary',
      title: 'Workflow für fertige Angebote',
      items: [
        'Schätzen Sie die gesamten Herstellungskosten.',
        'Wählen Sie Marge oder Markup ganz bewusst.',
        'Prüfen Sie die reale Marge und den Nettogewinn.',
        'Vergleichen Sie das Ergebnis mit einem gleichwertigen Konkurrenzpreis.',
        'Kopieren Sie den PVP in das Angebot und weisen Sie Steuern separat aus.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
