import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PostProcessingCostCalculatorUI } from '../ui';

const slug = 'nachbearbeitungskosten-rechner-3d-druck';
const title = '3D Druck Nachbearbeitungskosten Rechner';
const description =
  'Schätzen Sie die Kosten für manuelle Nachbearbeitung, Stützstrukturentfernung, Schleifen, Lackieren, weitere Arbeitsschritte, Verbrauchsmaterialien und währungsbereingte Nachbearbeitungskosten für 3D-gedruckte Teile.';

const faqData = [
  {
    question: 'Wie berechnet man die Nachbearbeitungskosten für 3D-Drucke?',
    answer:
      'Addieren Sie alle Minuten der manuellen Nachbearbeitung, multiplizieren Sie die Summe mit dem Stundensatz geteilt durch 60, und addieren Sie dann die Verbrauchsmaterialien. Dieser Rechner zeigt außerdem den Kostenanteil jeder einzelnen Nachbearbeitungsphase.',
  },
  {
    question: 'Sollten Verbrauchsmaterialien in den manuellen Nachbearbeitungskosten enthalten sein?',
    answer:
      'Ja. Schleifpapier, Füllgrundierung, Farbe, Handschuhe, Abdeckband, IPA, Reinigungsflüssigkeit für Resin, Tücher und Werkzeugverschleiß können groß genug sein, um ein Angebot für fertigbearbeitete Teile zu verändern.',
  },
  {
    question: 'Ändert die Währungsumrechnung die Kostenformel?',
    answer:
      'Nein. Die Währung ändert nur die angezeigte Geldgröße. Die Arbeitsformel bleibt gleich: Minuten multipliziert mit dem Stundensatz geteilt durch 60 plus Verbrauchsmaterialien.',
  },
  {
    question: 'Welchen Stundensatz sollte ich für die Nachbearbeitungsarbeit verwenden?',
    answer:
      'Verwenden Sie den kalkulierten Werkstatt-Stundensatz, nicht nur den Nettolohn. Berücksichtigen Sie Löhne, Lohnnebenkosten, bezahlte nicht abrechenbare Zeit, Aufsicht und den erforderlichen Qualifikationsgrad für die kosmetische Nachbearbeitung.',
  },
];

const howToData = [
  { name: 'Nachbearbeitungsminuten eingeben', text: 'Geben Sie Stützstrukturentfernung, Schleifen, Lackieren und andere manuelle Zeiten in Minuten ein.' },
  { name: 'Stundensatz und Verbrauchsmaterialien festlegen', text: 'Geben Sie Ihren stündlichen Nachbearbeitungssatz und die direkten Verbrauchsmaterialkosten in der gewählten Währung ein.' },
  { name: 'Währung und Faktor wählen', text: 'Verwenden Sie die Währungsauswahl für Symbole und einen optionalen Umrechnungsfaktor für Angebotsanpassungen.' },
  { name: 'Ergebnis kopieren', text: 'Verwenden Sie die Kopierschaltfläche, um Gesamtbetrag, Arbeitskosten, Verbrauchsmaterialien und Minuten in ein Angebot einzufügen.' },
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
    '3D-Druck Nachbearbeitungskosten Rechner',
    'Arbeitskosten-Schätzung 3D-Druck',
    'Kosten manuelle Nachbearbeitung 3D-Druck',
    'Stundensatz-Rechner Nachbearbeitung',
  ],
  inLanguage: 'de',
};

export const content: ToolLocaleContent<PostProcessingCostCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Eingaben für Nachbearbeitungskosten',
    resultsAriaLabel: 'Ergebnisse der Nachbearbeitungskosten',
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
    currencyOptionSeparator: ' - ',
    supportLabel: 'Stützstrukturentfernung',
    sandingLabel: 'Schleifen',
    paintingLabel: 'Lackieren',
    otherLabel: 'Sonstige Arbeit',
    hourlyRateLabel: 'Stundensatz',
    consumablesLabel: 'Verbrauchsmaterialien',
    conversionFactorLabel: 'Umrechnungsfaktor',
    conversionFactorUnit: 'x',
    conversionHint: 'Lassen Sie den Wert auf 1, wenn der Satz bereits in lokaler Währung eingegeben wurde; ändern Sie ihn, um einen globalen Angebotsmultiplikator anzuwenden.',
    minutesUnit: 'Min.',
    hourUnit: 'Std.',
    rateUnitSeparator: '/',
    totalLabel: 'Nachbearbeitungsgesamt',
    laborLabel: 'Arbeit',
    consumablesBreakdownLabel: 'Verbrauchsmaterialien',
    timeLabel: 'Manuelle Zeit',
    effectiveRateLabel: 'Effektiver Satz',
    breakdownLabel: 'Kostenanteil nach Nachbearbeitungsphase',
    copyLabel: 'Ergebnis kopieren',
    copiedLabel: 'Kopiert',
    copyTemplate: 'Nachbearbeitungskosten: {total} ({minutes}; Arbeit {labor}; Verbrauchsmaterialien {consumables})',
    pendingLabel: '-',
    currencySymbol: '€',
  },
  seo: [
    { type: 'title', text: 'Was dieser 3D-Druck Nachbearbeitungskosten Rechner misst', level: 2 },
    {
      type: 'paragraph',
      html: 'Ein <strong>3D-Druck Nachbearbeitungskosten Rechner</strong> soll eine praktische Kalkulationsfrage beantworten: Wie viel Geld wird nach dem Ende des Drucks verbraucht? Das gedruckte Teil hat möglicherweise bereits Maschinenzeit- und Materialkosten, aber viele bezahlte Aufträge werden bei der Stützstrukturentfernung, dem Schleifen, der Grundierung, dem Lackieren, der Reinigung, dem Abkleben, der Kontrolle und der Nacharbeit gewonnen oder verloren. Dieser Rechner unterteilt diese manuellen Nachbearbeitungsschritte in Minuten, multipliziert sie mit einem Stundensatz und addiert die direkten Verbrauchsmaterialien, damit die endgültige Zahl in ein Angebot übernommen werden kann.',
    },
    {
      type: 'paragraph',
      html: 'Die Grundformel ist bewusst transparent: <code>((Stützentfernung + Schleifen + Lackieren + sonstige Minuten) x (Stundensatz / 60)) + Verbrauchsmaterialien</code>. Der optionale Umrechnungsfaktor multipliziert den Stundensatz und die Verbrauchsmaterialien, wenn ein Betrieb Werte für Währungsumrechnung, regionale Preislisten, Subunternehmer-Aufschläge oder eine temporäre Anpassung skalieren möchte. Gibt der Benutzer einen lokalen Arbeitssatz direkt ein, sollte der Faktor bei <code>1</code> bleiben, und das Ergebnis bleibt unabhängig von Wechselkursannahmen.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'Min. x Satz/60', label: 'Arbeitskosten-Formel', icon: 'mdi:clock-outline' },
        { value: '5 Phasen', label: 'Stützentfernung, Schleifen, Lackieren, Sonstiges, Verbrauchsmaterialien', icon: 'mdi:chart-bar-stacked' },
        { value: '1x', label: 'Standard-Umrechnungsfaktor', icon: 'mdi:swap-horizontal' },
        { value: 'Live', label: 'Kein Berechnen-Button erforderlich', icon: 'mdi:flash-outline' },
      ],
    },
    {
      type: 'tip',
      title: 'Den Menschen kalkulieren, nicht den Drucker',
      html: '<p>Nachbearbeitung ist meist arbeitsintensiv. Ein langer Druck kann günstig in der Nachbearbeitung sein, während ein kleines Sichtteil mit Stützen auf kosmetischen Flächen aufwändige Facharbeit erfordert. Behandeln Sie die <strong>Arbeitskosten-Schätzung für den 3D-Druck</strong> als eigene Position, anstatt sie im Materialaufschlag zu verstecken.</p>',
    },
    { type: 'title', text: 'Stützstrukturentfernung: Der erste manuelle Kostentreiber', level: 2 },
    {
      type: 'paragraph',
      html: 'Stützstrukturentfernung ist nicht nur die Zeit, die benötigt wird, um Kunststoff vom Modell zu lösen. Dazu können Schneiden, Erwärmen, Auflösen, Spülen, Schaben, Abschneiden von Stützresten, Schutz fragiler Merkmale und Prüfung, ob Stütznarben zusätzliche Oberflächenarbeit erfordern, gehören. FDM-Baumstützen, dichte Grenzschichten, SLA-Stützspitzen und SLS-Entpulverung erzeugen jeweils unterschiedliche Arbeitsprofile. Für eine zuverlässige <strong>Schätzung der manuellen Nachbearbeitungskosten beim 3D-Druck</strong> sollte die Stützentfernungszeit anhand vergleichbarer Aufträge gemessen werden, anstatt sie aus der Druckdauer zu schätzen.',
    },
    {
      type: 'table',
      headers: ['Stützsituation', 'Typisches Zeitverhalten', 'Kalkulationshinweis'],
      rows: [
        ['Leicht lösbare Stützen', 'Kurze, vorhersehbare Entfernung', 'Oft eignet sich eine feste Minutenpauschale pro Teil.'],
        ['Dichte Stützgrenzschicht', 'Längeres Schneiden und Oberflächennachbearbeitung', 'Schleifminuten separat erfassen, damit der Kostentreiber sichtbar bleibt.'],
        ['Resin-Miniaturen oder filigrane Modelle', 'Langsames Abschneiden ohne Beschädigung', 'Höheren Stundensatz verwenden, wenn Facharbeit erforderlich ist.'],
        ['Lösliche Stützstrukturen', 'Weniger manuelles Schneiden, aber mehr Prozesszeit', 'Lösungshandhabung und Trocknungszeit einbeziehen, wenn der Bediener beteiligt ist.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Stützstrukturentfernung nicht nach Stützvolumen im Slicer kalkulieren',
      badge: 'Arbeitsrisiko',
      html: '<p>Das Stützvolumen kann gering sein, während der Zugang schwierig ist. Eine kleine Stütze innerhalb eines engen Bereichs kann mehr Arbeitsaufwand bedeuten als eine große externe Stütze, die sich sauber ablöst.</p>',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Stützentfernungsminuten für wiederkehrende Teilfamilien erfassen.',
        'Entfernung und Schleifen trennen, damit Stützstrategieentscheidungen leichter verglichen werden können.',
        'Schätzung bei filigraner Geometrie, dünnen Stiften, Miniaturen und kundensichtigen Oberflächen erhöhen.',
        'Dieselbe Währungs- und Stundensatzbasis wie im restlichen Angebot verwenden.',
      ],
    },
    { type: 'title', text: 'Schleifen, Spachteln und Oberflächenvorbereitung', level: 2 },
    {
      type: 'paragraph',
      html: 'Schleifen ist oft der größte versteckte Kostenfaktor bei fertigen 3D-Drucken, weil es iterativ ist. Der Bediener durchläuft möglicherweise Grobschleifen, Spachtel, Aushärtungs- oder Trockenzeit, Feinschleifen, Punktkorrekturen und Prüfung unter schrägem Licht. Schichthöhe, Materialhärte, Stütznarben, geforderter Glanzgrad und Teilegeometrie bestimmen den Handarbeitsaufwand. Eine Funktionshalterung benötigt vielleicht fünf Minuten; ein Ausstellungsprototyp kann eine Stunde erfordern, bevor die Farbe überhaupt geöffnet wird.',
    },
    {
      type: 'paragraph',
      html: 'Der Rechner behandelt Schleifen als Minuten multipliziert mit dem stündlichen Nachbearbeitungssatz, weil der Prozess eher vom Bediener als von der Maschine begrenzt wird. Verbrauchsmaterialien wie Schleifmittel, Füllgrundierung, Spachtel, Staubtücher und Abklebbedarf sollten in das Verbrauchsmaterialienfeld eingegeben werden, anstatt im Stundensatz versteckt zu werden. Dadurch bleibt die <strong>Analyse der 3D-Druck-Nachbearbeitungskosten</strong> lesbar: Arbeit zeigt Zeitdruck, Verbrauchsmaterialien zeigen eingekaufte Inputs.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Funktionale Oberfläche',
          description: 'Scharfe Kanten gesäubert, Stützen entfernt und grobe Narben ausreichend für Montage geglättet.',
          icon: 'mdi:wrench-outline',
          points: ['Geringster Schleifaufwand', 'Minimale Verbrauchsmaterialien', 'Prüfung auf Passung ausgerichtet'],
        },
        {
          title: 'Präsentationsoberfläche',
          description: 'Sichtbare Flächen geglättet, selektiv grundiert und Schichtlinien für Kundenpräsentation reduziert.',
          icon: 'mdi:eye-outline',
          highlight: true,
          points: ['Moderater Schleifaufwand', 'Grundierung und Spachtel wahrscheinlich', 'Kosmetische Flächen treiben Arbeit an'],
        },
        {
          title: 'Lackierfertige Oberfläche',
          description: 'Stufenschleifen, Spachteln, Abkleben und Fehlerkorrektur vor den Farbanstrichen.',
          icon: 'mdi:spray',
          points: ['Höchster manueller Aufwand', 'Verbrauchsmaterialien relevant', 'Nacharbeitsaufschlag empfohlen'],
        },
      ],
    },
    {
      type: 'message',
      title: 'Schleifmittel sind Verbrauchsmaterialien',
      ariaLabel: 'Hinweis zu Verbrauchsmaterialien',
      html: '<p>Schleifpapier, Schleifschwämme, Nadelfeilen, Spachtel, Handschuhe und Tücher sind nicht kostenlos. Ihren direkten Kostenanteil angeben, wenn der Auftrag einen nennenswerten Teil davon verbraucht.</p>',
    },
    { type: 'title', text: 'Lackier- und Beschichtungskostenschätzung', level: 2 },
    {
      type: 'paragraph',
      html: 'Lackierminuten sollten die aktive Bedienerzeit umfassen: Abkleben, Mischen, Spritzen, Pinselarbeit, Nachbessern, Abkleben entfernen, Arbeitsbereich reinigen und Kontrolle. Passive Trocknungs- oder Aushärtungszeit sollte nur dann eingerechnet werden, wenn sie den Bediener blockiert oder seltene Kabinenkapazitäten belegt, die als Arbeit oder Gemeinkosten berechnet werden. Diese Unterscheidung verhindert, dass ein <strong>Stundensatz-Rechner für die Nachbearbeitung</strong> jede Wartestunde in Arbeitskosten umwandelt, obwohl niemand aktiv am Teil arbeitet.',
    },
    {
      type: 'table',
      headers: ['Lackieraufgabe', 'Als Arbeit erfassen?', 'Als Verbrauchsmaterialien erfassen?'],
      rows: [
        ['Abkleben und Abkleben entfernen', 'Ja, aktive Minuten', 'Klebeband, Folie, Stopfen und Schablonen'],
        ['Farbe oder Beschichtung mischen', 'Ja, aktive Minuten', 'Farbe, Verdünner, Becher, Filter, Handschuhe'],
        ['Spritzen oder Pinseln', 'Ja, aktive Minuten', 'Beschichtungsmaterial und Reinigungslösung'],
        ['Trocknungszeit', 'Nur wenn bezahlte Arbeit oder Kabinenkapazität blockiert wird', 'Normalerweise kein direktes Material, außer Wärme oder Lampen werden separat berechnet'],
      ],
    },
    {
      type: 'tip',
      title: 'Farbkomplexität explizit berechnen',
      html: '<p>Ein einfacher Grundierungsanstrich und eine zweifarbige abgeklebte Oberfläche können ähnliche Materialkosten, aber sehr unterschiedliche Arbeitskosten haben. Das Lackierminutenfeld nutzen, um den Unterschied sichtbar zu machen, bevor die Marge angewendet wird.</p>',
    },
    {
      type: 'proscons',
      title: 'Feste Nachbearbeitungspauschale vs. gemessene Nachbearbeitungsminuten',
      items: [
        { pro: 'Eine Pauschale ist schnell für Wiederholungsaufträge mit stabilen Anforderungen.', con: 'Sie verbirgt, welche Phase Gewinn frisst, wenn sich ein Auftrag ändert.' },
        { pro: 'Gemessene Minuten machen die Kalkulation nachprüfbar und leicht aktualisierbar.', con: 'Sie erfordern, dass der Betrieb tatsächliche Nachbearbeitungszeiten für gängige Teiletypen erfasst.' },
        { pro: 'Der visuelle Kostenbalken macht kundennahe Angebote intern leichter erklärbar.', con: 'Er ersetzt nicht das Urteil über kosmetisches Risiko und Nacharbeitswahrscheinlichkeit.' },
      ],
    },
    { type: 'title', text: 'Verbrauchsmaterialien und Nachbearbeitungsgemeinkosten', level: 2 },
    {
      type: 'paragraph',
      html: 'Verbrauchsmaterialien sind direkte Materialien, die bei der Nachbearbeitung verbraucht werden. Dazu können Schleifpapier, Grundierung, Spachtel, Farbe, Reinigungsflüssigkeit für Resin, IPA, Tücher, Nitrilhandschuhe, Klingen, Abdeckband, Schutzstopfen, Einwegbecher, Filter, Polierpaste und Klarlack gehören. Einige Betriebe berechnen diese als Gemeinkosten, aber sie als direkte Felder zu kalkulieren ist sicherer für Aufträge mit ungewöhnlichen Oberflächenstandards, großen Oberflächen, aggressivem Schleifen oder lösungsmittelintensiven Arbeitsabläufen.',
    },
    {
      type: 'paragraph',
      html: 'Ein separates Verbrauchsmaterialienfeld hilft auch bei <strong>Gemeinkosten-Rechnern für die Nachbearbeitung</strong>. Gemeinkosten sind normalerweise breiter als Verbrauchsmaterialien: Miete, Absaugung, Beleuchtung, Luftfilterung, Kompressornutzung, Wartung, Software, Aufsicht und Verwaltungszeit. Dieser Rechner gibt vor, keine einzelnen Gemeinkostenposten zuzuweisen. Stattdessen liefert er einen sauberen Direktkosten-Zwischensumme, der in ein größeres Angebotsmodell einfließen kann, in dem Gemeinkosten und Marge anschließend aufgeschlagen werden.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Stundensatz', definition: 'Der stündliche Kosten- oder Verkaufssatz für aktive manuelle Nachbearbeitungszeit.' },
        { term: 'Verbrauchsmaterialien', definition: 'Direkte Materialien, die bei der Nachbearbeitung verbraucht werden, wie Schleifmittel, Beschichtungen, Handschuhe und Reinigungsflüssigkeiten.' },
        { term: 'Umrechnungsfaktor', definition: 'Ein globaler Multiplikator, der auf Geldbeträge für Währungsskalierung oder Angebotsanpassungen angewendet wird.' },
        { term: 'Direktkosten', definition: 'Ein Kostenfaktor, der einem bestimmten Teil oder einer bestimmten Charge zugeordnet werden kann.' },
        { term: 'Gemeinkosten', definition: 'Betriebskosten, die die Produktion unterstützen, aber nicht auf einfache, messbare Weise von einem einzigen Teil verursacht werden.' },
      ],
    },
    {
      type: 'card',
      icon: 'mdi:receipt-text-outline',
      title: 'Wo die Marge hingehört',
      html: '<p>Dieses Tool berechnet die Nachbearbeitungskosten vor dem Gewinn. Wenden Sie die Marge an, nachdem Material, Maschinenzeit, Nachbearbeitung, Risiko und Gemeinkosten zusammengestellt wurden, da sonst arbeitsintensive Aufträge zu niedrig kalkuliert werden könnten.</p>',
    },
    { type: 'title', text: 'Währungsauswahl und Umrechnungsfaktor', level: 2 },
    {
      type: 'paragraph',
      html: 'Die Währungsauswahl ändert das Symbol und kann bestehende Geldbeträge mithilfe praktischer Referenzfaktoren umrechnen. Die Berechnung selbst ist währungsneutral: Ein Satz von 30 pro Stunde und 10 an Verbrauchsmaterialien ergibt dieselbe Struktur, unabhängig davon, ob das Symbol Euro, Dollar, Pfund, Yen oder eine andere unterstützte Währung ist. Das ist nützlich für internationale Angebote, weil die Mathematik stabil bleibt, während die Darstellung dem Kunden- oder Werkstattstandort entspricht.',
    },
    {
      type: 'paragraph',
      html: 'Der Umrechnungsfaktor ist für Fälle gedacht, in denen der Benutzer keine automatische Wechselkursumrechnung möchte oder einen benutzerdefinierten kommerziellen Multiplikator benötigt. Ein Faktor von <code>1</code> bedeutet, dass der Stundensatz und die Verbrauchsmaterialien bereits in der gewählten Landeswährung eingegeben wurden. Ein Faktor von <code>1,15</code> erhöht beide Geldbeträge um fünfzehn Prozent. Ein Faktor von <code>0,92</code> reduziert sie um acht Prozent. Da der Faktor Geld und nicht Minuten beeinflusst, bleibt die visuelle Aufschlüsselung proportional zu den angepassten Kosten.',
    },
    {
      type: 'summary',
      title: 'Währungsregeln',
      items: [
        'Selektor für Symbole und bequeme Skalierung zwischen gängigen Währungen verwenden.',
        'Umrechnungsfaktor bei 1 belassen, wenn die Eingaben bereits lokal sind.',
        'Benutzerdefinierten Faktor für regionale Angebotsbücher, Subunternehmer-Aufschläge oder temporäre kommerzielle Anpassungen verwenden.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Wechselkurse sind keine Buchhaltungsrichtlinie',
      badge: 'Preishinweis',
      html: '<p>Für offizielle Rechnungen, Steuern oder Buchungsberichte den Wechselkurs und die Rundungsrichtlinie verwenden, die das Unternehmen vorschreibt. Dieser Rechner dient der Schätzung von Produktionskosten und der Angebotsvorbereitung.</p>',
    },
    { type: 'title', text: 'Visuelle Aufschlüsselung zur Gewinnverbesserung nutzen', level: 2 },
    {
      type: 'paragraph',
      html: 'Der proportionale Balken ist mehr als Dekoration. Er zeigt, welche Nachbearbeitungsphase Geld verbraucht. Wenn Schleifen dominiert, kann eine Änderung der Druckausrichtung, der Schichthöhe, der Stützgrenzschicht oder des Materials die manuelle Zeit reduzieren. Wenn Lackieren dominiert, benötigt das Angebot möglicherweise eine separate Nachbearbeitungsstufe. Wenn Verbrauchsmaterialien dominieren, kann Großeinkauf oder ein anderer Beschichtungsprozess mehr bringen als Arbeitseffizienz. Wenn Stützentfernung dominiert, kann die Neugestaltung der Stützkontaktpunkte die wertvollste Maßnahme sein.',
    },
    {
      type: 'list',
      icon: 'mdi:target',
      items: [
        'Wenn die Stützentfernung den größten Anteil hat, Stützstil, Stützdichte, Kontakt-Z-Abstand und Ausrichtung prüfen.',
        'Wenn Schleifen am größten ist, Schichthöhe, Nahtplatzierung, Spachtelstrategie prüfen und ob die kalkulierte Oberfläche für den Preis zu hoch angesetzt ist.',
        'Wenn Lackieren am größten ist, einfarbige, abgeklebte und Premium-Oberflächen in separate Angebotsstufen aufteilen.',
        'Wenn Verbrauchsmaterialien am größten sind, prüfen, ob Beschichtungen, Resin-Reinigungsmittel, Schleifmittel und Abklebematerial verschwendet oder unzureichend kalkuliert werden.',
      ],
    },
    {
      type: 'table',
      headers: ['Dominanter Kostenfaktor', 'Wahrscheinliche Ursache', 'Kalkulationsreaktion'],
      rows: [
        ['Stützentfernung', 'Schwieriger Zugang, dichte Stützen, filigraner Details', 'Stützkomplexitätszuschlag hinzufügen oder Ausrichtung überarbeiten.'],
        ['Schleifen', 'Hohe kosmetische Anforderung, sichtbare Schichten, Stütznarben', 'Oberflächenklassen erstellen und lackierfertige Vorbereitung berechnen.'],
        ['Lackieren', 'Abkleben, mehrere Farben, Kabinenreinigung', 'Lackieren als separaten Serviceposten kalkulieren.'],
        ['Verbrauchsmaterialien', 'Beschichtungen, Schleifmittel, Lösungsmittel, Schutzartikel', 'Direkte Verbrauchsmaterialerfassung oder Mindestmaterialgebühren verwenden.'],
      ],
    },
    {
      type: 'summary',
      title: 'Angebotsworkflow',
      items: [
        'Aktive manuelle Minuten nach Phase messen.',
        'Einen kalkulierten Nachbearbeitungs-Stundensatz verwenden.',
        'Direkte Verbrauchsmaterialien separat hinzufügen.',
        'Das berechnete Ergebnis in das Angebot kopieren, dann im vollständigen Preismodell Gemeinkosten und Marge aufschlagen.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
