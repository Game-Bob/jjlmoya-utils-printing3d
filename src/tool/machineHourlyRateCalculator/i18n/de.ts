import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MachineHourlyRateCalculatorUI } from '../ui';

const slug = 'maschinen-stundensatz-produktionskosten-rechner';
const title = 'Maschinenstundensatz und Produktionskostenrechner';
const description =
  'Berechnen Sie die tatsächlichen Betriebskosten eines 3D-Druckers aus Stromverbrauch, Stromtarif, Kaufpreis, Nutzungsdauer und Druckdauer.';

const faqData = [
  {
    question: 'Wie berechne ich die stündlichen Kosten eines 3D-Druckers?',
    answer:
      'Addieren Sie die stündlichen Stromkosten und die stündlichen Abschreibungskosten. Stromkosten ergeben sich aus Watt geteilt durch 1000 multipliziert mit dem Stromtarif. Die Abschreibung ist der Kaufpreis geteilt durch die Nutzungsdauer in Stunden.',
  },
  {
    question: 'Warum ist die Abschreibung bei der Preisgestaltung für 3D-Drucke wichtig?',
    answer:
      'Die Abschreibung repräsentiert den Maschinenwert, der während der Produktion der Teile verbraucht wird. Wenn man sie ignoriert, kann ein Druck profitabel erscheinen, während der Drucker stillschweigend an Wiederverkaufswert, Zuverlässigkeit und Ersatzkapazität verliert.',
  },
  {
    question: 'Welche Nutzungsdauer sollte ich für einen Desktop-3D-Drucker annehmen?',
    answer:
      'Ein Richtwert von 5000 Stunden ist ein praktischer Ausgangspunkt für viele Desktop-Drucker, aber Produktionsfarmen sollten ihn durch Wartungshistorie, erwarteten Ersatzzyklus und tatsächliche Betriebszeiten ersetzen.',
  },
  {
    question: 'Ist das dasselbe wie ein vollständiges 3D-Druck-Angebot?',
    answer:
      'Nein. Dieser Rechner deckt Maschinenstrom und Hardware-Amortisation ab. Ein vollständiges Angebot sollte auch Filament oder Harz, Arbeitszeit, Fehldrucke, Nachbearbeitung, Verpackung, Gemeinkosten und Gewinnmarge enthalten.',
  },
];

const howToData = [
  { name: 'Gemessene Druckerleistung eingeben', text: 'Verwenden Sie die durchschnittliche Wattzahl während eines vergleichbaren Drucks, nicht nur die Nennleistung des Netzteils.' },
  { name: 'Druckdauer einstellen', text: 'Bewegen Sie den Dauerregler auf die erwartete Maschinenzeit für den Auftrag oder die Produktionscharge.' },
  { name: 'Energie- und Anlagenwerte eingeben', text: 'Geben Sie den Stromtarif, den Kaufpreis der Maschine und die geschätzte Nutzungsdauer in Betriebsstunden ein.' },
  { name: 'Kostenaufteilung ablesen', text: 'Nutzen Sie die Gesamtkosten, den Stundensatz und die Zusammensetzung aus Strom versus Abschreibung, um die Maschinenzeit zu bepreisen.' },
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
    '3D-Drucker Stromverbrauchsrechner',
    'Stündliche Abschreibung für Maschinen',
    'Betriebskostenschätzer für den 3D-Druck',
    'Kostenaufteilung Strom versus Amortisation',
  ],
  inLanguage: 'de',
};

export const content: ToolLocaleContent<MachineHourlyRateCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Eingaben zum Maschinenstundensatz',
    resultsAriaLabel: 'Ergebnisse zum Maschinenstundensatz',
    settingsLabel: 'Angebotseinstellungen',
    currencyLabel: 'Währung',
    currencyOptions: [
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
    ],
    durationLabel: 'Produktionszeit',
    powerLabel: 'Durchschnittsleistung',
    tariffLabel: 'Stromtarif',
    purchasePriceLabel: 'Maschinenkaufpreis',
    usefulLifeLabel: 'Geschätzte Nutzungsdauer',
    totalCostLabel: 'Betriebskosten-Ticker',
    hourlyRateLabel: 'Maschinenstundensatz',
    electricityLabel: 'Strom',
    depreciationLabel: 'Amortisation',
    electricityPerHourLabel: 'Stromkosten pro Stunde',
    depreciationPerHourLabel: 'Anlagenkosten pro Stunde',
    compositionLabel: 'Kostenaufteilung Strom versus Amortisation',
    insightLabel: 'Rentabilitätshinweis',
    utilizationLabel: 'Auslastungsdruck',
    utilizationValueLabel: 'Nutzungsdauer verbraucht',
    utilizationHint: 'Dieser Auftrag verbraucht den angezeigten Anteil der angenommenen Maschinenlebensdauer.',
    batchLabel: 'Chargen-Betriebskosten',
    energyUsedLabel: 'Energieverbrauch',
    costDriverLabel: 'Haupttreiber',
    energyDriverLabel: 'Energie',
    assetDriverLabel: 'Anlage',
    balancedDriverLabel: 'Ausgeglichen',
    electricityDominant: 'Der Auftrag ist stromgetrieben: Tarif, Größe des Heizbetts, Kammertemperatur und Aufwärmzeit im Leerlauf beeinflussen das Angebot mehr als der Kaufpreis.',
    depreciationDominant: 'Der Auftrag ist anlagengetrieben: Maschinenpreis und Nutzungsdauer dominieren, daher schwächt jede ungenutzte Stunde die Wirtschaftlichkeit dieses Druckers.',
    balancedDominant: 'Strom und Amortisation liegen so nah beieinander, dass beide im Werkstattstundensatz erscheinen sollten, anstatt einen im Aufschlag zu verstecken.',
    hoursUnit: 'h',
    wattsUnit: 'W',
    kwhUnit: 'kWh',
    currencySymbol: '\u20ac',
  },
  seo: [
    { type: 'title', text: 'Was ein Maschinenstundensatz im 3D-Druck bedeutet', level: 2 },
    {
      type: 'paragraph',
      html: 'Ein <strong>Maschinenstundensatz</strong> sind die Kosten, einen Drucker eine Stunde lang produktiv zu beschäftigen, bevor Material, Arbeit, Nachbearbeitung, Verpackung und Gewinn hinzugerechnet werden. Beim 3D-Druck wird diese Zahl oft unterschätzt, weil sichtbare Kosten wie Filament leichter zu erkennen sind als versteckte Kosten wie Strom und Hardware-Abschreibung. Ein Desktop-Drucker verbraucht vielleicht nur wenige Cent Strom pro Stunde, aber eine professionelle Maschine, die mehrere tausend Euro gekostet hat, muss ihren Wert über eine begrenzte Nutzungsdauer zurückgewinnen. Dieser Rechner isoliert diese beiden Maschinenkosten, damit das Produktionsangebot mit einer messbaren Basis beginnt.',
    },
    {
      type: 'paragraph',
      html: 'Der Rechner verwendet zwei transparente Formeln. Die Stromkosten sind <code>(W / 1000) x T x Tarif</code>, wobei <code>W</code> die durchschnittliche Wattzahl, <code>T</code> die Druckdauer in Stunden und der Tarif der Strompreis pro Kilowattstunde ist. Die Amortisationskosten sind <code>(Kaufpreis / Nutzungsdauer in Stunden) x T</code>. Die gesamten Betriebskosten sind die Summe beider. Da beide Größen mit der Zeit skalieren, liefern dieselben Formeln auch einen sauberen Stundensatz: Strom pro Stunde plus Abschreibung pro Stunde.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'W / 1000', label: 'Wandelt Watt in Kilowatt um', icon: 'mdi:flash-outline' },
        { value: 'kWh', label: 'Energieabrechnungseinheit', icon: 'mdi:meter-electric-outline' },
        { value: 'P / life', label: 'Lineare Maschinenkosten pro Stunde', icon: 'mdi:chart-line' },
        { value: 'Ce + Ca', label: 'Gesamte Betriebskosten', icon: 'mdi:calculator-variant-outline' },
      ],
    },
    {
      type: 'tip',
      title: 'Gemessene Durchschnittsleistung verwenden',
      html: '<p>Das Netzteil-Label gibt die maximale Leistung an, nicht den Verbrauch des Druckers während eines realen Auftrags. Messen Sie für eine bessere <strong>Eingabe in den 3D-Drucker-Stromverbrauchsrechner</strong> einen repräsentativen Druck mit einem Energiemessgerät und mitteln Sie die Aufwärm-, Druck-, Lüfter-, Bett- und Standby-Phasen.</p>',
    },
    { type: 'title', text: 'Stromkosten: Watt in Produktionskosten umwandeln', level: 2 },
    {
      type: 'paragraph',
      html: 'Die Stromkosten hängen von der durchschnittlichen Leistungsaufnahme ab, nicht nur von der Nennleistung des Druckers. Eine Maschine mit einem 350-W-Netzteil kann bei einem kleinen PLA-Auftrag nach dem Aufwärmen durchschnittlich 90 W verbrauchen, während ein großer geschlossener Drucker mit beheiztem Bett und Kammer bei technischen Polymeren deutlich höher liegen kann. Die Größe der beheizten Fläche, die Kammertemperatur, die Düsentemperatur, die Raumtemperatur, der Lüfterbetrieb und die Leerlaufzeit vor der Teileentnahme können die tatsächliche Leistungsaufnahme beeinflussen.',
    },
    {
      type: 'paragraph',
      html: 'Die Umrechnung in Kilowattstunden ist einfach, aber wichtig. Ein 180-W-Drucker, der 8 Stunden läuft, verbraucht <code>0,18 kW x 8 h = 1,44 kWh</code>. Bei 0,25 € pro kWh kostet dieser Teil des Auftrags 0,36 €. Das klingt gering, aber Farmen mit vielen Maschinen, langen PETG- oder ASA-Aufträgen, beheizten Trockenschränken und Klimaanlagen können kleine stündliche Unterschiede in eine bedeutende monatliche Rechnung verwandeln.',
    },
    {
      type: 'table',
      headers: ['Eingabe', 'Was einzugeben ist', 'Häufiger Fehler'],
      rows: [
        ['Durchschnittsleistung', 'Gemessene Watt über den gesamten Druckzyklus', 'Verwendung der Netzteil-Nennleistung oder des Spitzenwerts beim Aufheizen.'],
        ['Dauer', 'Maschinenbelegungszeit in Stunden', 'Ignorieren von Vorheiz-, Abkühl- oder Wartezeiten.'],
        ['Tarif', 'Tatsächlicher Preis pro kWh aus der Stromrechnung', 'Verwendung eines veralteten Durchschnittswerts statt des tatsächlichen Tarifs.'],
        ['Währung', 'Die im Angebotsmodell verwendete Währung', 'Vermischung von Euro-Hardwarekosten mit Dollar-Energieannahmen.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Stromkosten sind gering, bis der Maßstab sie sichtbar macht',
      badge: 'Farmplanung',
      html: '<p>Ein kleiner Drucker rechtfertigt vielleicht keine aufwändige Energiekostenrechnung. Zwanzig Drucker, die täglich lange Aufträge bearbeiten, schon. Dieselbe Stromformel kann pro Auftrag, pro Drucker, pro Zelle oder pro Monat verwendet werden, indem nur die Dauer geändert wird.</p>',
    },
    { type: 'title', text: 'Amortisation: Die versteckten Kosten hinter der Druckerrentabilität', level: 2 },
    {
      type: 'paragraph',
      html: 'Amortisation ist die finanzielle Anerkennung, dass ein Drucker durch Nutzung verbraucht wird. Führungen verschleißen, Lüfter altern, Betten verlieren ihre Ebenheit, Hotends verstopfen, Elektronik wird obsolet und die Maschine muss irgendwann ersetzt werden. Wenn ein Drucker 900 € kostet und die Werkstatt 5000 Nutzungsstunden erwartet, verbraucht die Maschine 0,18 € Anlagenwert pro produktiver Stunde. Ein Zehn-Stunden-Auftrag trägt daher 1,80 € Hardwarekosten, bevor Material oder Arbeit berücksichtigt werden.',
    },
    {
      type: 'paragraph',
      html: 'Die lineare Abschreibung ist hier bewusst praktisch gehalten. Sie versucht nicht, Steuerrecht, Wiederverkaufswert, Finanzierung oder Wartungsereignisse abzubilden. Stattdessen beantwortet sie die produktionsbezogene Preisfrage: Wie viel dieses Maschinenkaufs sollte jeder Arbeitsstunde zugeordnet werden? Diese Zahl ist die Grundlage für <strong>Berechnungen des stündlichen Abschreibungssatzes für 3D-Drucker</strong> und für jede Farm, die sicherstellen möchte, dass Ersatzgeld vorhanden ist, wenn der Drucker das Ende seiner wirtschaftlichen Nutzungsdauer erreicht.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Hobby Desktop Drucker',
          description: 'Niedriger Kaufpreis und unregelmäßige Nutzung. Strom kann bei beheizten Bett-Aufträgen sichtbar sein, aber die Amortisation spielt trotzdem eine Rolle, wenn Teile verkauft werden.',
          icon: 'mdi:printer-3d-nozzle-outline',
          points: ['Geringerer Kapitaleinsatz', 'Nutzungsdauer oft unsicher', 'Handarbeit dominiert meist die Angebote'],
        },
        {
          title: 'Prosumer Farmen Drucker',
          description: 'Moderater Kaufpreis, hohe Auslastung, wiederkehrende Materialien und viele identische Aufträge machen die stündliche Abschreibung zu einer wichtigen Preiskomponente.',
          icon: 'mdi:factory',
          highlight: true,
          points: ['Gut geeignet für 3000-8000 Stunden Lebensdauer', 'Tatsächliche Reparaturen erfassen', 'Maschinenzeit von Arbeit trennen'],
        },
        {
          title: 'Industrieanlage',
          description: 'Hohe Kapitalkosten bedeuten, dass die Amortisation dominieren kann. Serviceverträge, Baukammerumgebung und Qualifikationszeit können zusätzliche Kostenpositionen erfordern.',
          icon: 'mdi:domain',
          points: ['Kapitalkosten dominieren', 'Ausfallzeiten sind teuer', 'Service und Betriebskosten hinzufügen'],
        },
      ],
    },
    {
      type: 'message',
      title: 'Die Nutzungsdauerauswahl verdient Aufmerksamkeit',
      ariaLabel: 'Hinweis zur Nutzungsdauer',
      html: '<p>Die Standardeinstellung von 5000 Stunden ist ein Ausgangspunkt, keine universelle Wahrheit. Eine wenig genutzte Hobbymaschine könnte durch Veralterung eher ersetzt werden, bevor diese Zahl erreicht ist, während eine gut gewartete Farmmaschine sie überschreiten kann. Verwenden Sie die Zahl, die Ihrer Ersatzstrategie entspricht.</p>',
    },
    { type: 'title', text: 'Nutzungsdauer ohne Ratespiel wählen', level: 2 },
    {
      type: 'paragraph',
      html: 'Die Nutzungsdauer ist die sensitivste buchhalterische Annahme in diesem Rechner, da sie im Nenner der Amortisationsformel steht. Wenn demselben 900-€-Drucker 3000 Nutzungsstunden zugewiesen werden, beträgt die Abschreibung 0,30 € pro Stunde. Bei 9000 Nutzungsstunden sinkt sie auf 0,10 € pro Stunde. Der Drucker hat sich nicht geändert, aber die Geschäftserwartung hat sich geändert. Deshalb sollte ein Angebot die gewählte Lebensdauerannahme dokumentieren, anstatt sie in einem pauschalen Aufschlag zu verstecken.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Verwenden Sie Wartungsprotokolle, wenn verfügbar: Düsenwechsel, Lüfterausfälle, Führungsverschleiß, Riemen, Platinen, Hotends und Bettflächen zeigen die tatsächliche Kostenkurve.',
        'Trennen Sie Druckerfamilien. Ein kleiner Bettschleuderer, eine CoreXY-Produktionsmaschine und ein Harzdrucker sollten nicht eine gemeinsame Nutzungsdauer haben.',
        'Niedrigere Nutzungsdauer für Versuchsmaschinen, die viele Stunden mit fehlgeschlagenem Tuning, Materialtests oder kundenspezifischer Validierung verbringen.',
        'Erhöhen Sie die Nutzungsdauer nur, wenn Betriebszeit, vorbeugende Wartung, Ersatzteile und Ersatzhistorie die Annahme stützen.',
        'Überprüfen Sie die Annahme nach größeren Upgrades, da ein neues Bewegungssystem, Gehäuse oder Hotend die wirtschaftliche Lebensdauer des Wirtschaftsguts verändern kann.',
      ],
    },
    {
      type: 'table',
      headers: ['Nutzungsdauerannahme', 'Beste Passung', 'Preiskonsequenz'],
      rows: [
        ['2000-3000 h', 'Experimentelle, kostengünstige, schlecht dokumentierte oder stark beanspruchte Maschinen', 'Höhere stündliche Abschreibung schützt Ersatzkapital.'],
        ['4000-6000 h', 'Standard-Desktop- oder Prosumer-Maschinen mit regelmäßigem Produktionseinsatz', 'Ausgewogener Bereich für viele kleine Farmen.'],
        ['7000-10000 h', 'Stabile Druckerflotte mit Wartungsdaten und kontrollierten Materialien', 'Niedrigere stündliche Anlagenkosten, erfordert aber Vertrauen in die Betriebszeit.'],
        ['Über 10000 h', 'Industrieanlagen oder stark gewartete Anlagen mit dokumentiertem Lebenszyklus', 'Nur sinnvoll, wenn Service und Ausfallzeiten separat erfasst werden.'],
      ],
    },
    {
      type: 'summary',
      title: 'Checkliste Nutzungsdauer',
      items: [
        'Passen Sie die Nutzungsdauer an die Druckerklasse an, nicht an eine generische Internetzahl.',
        'Dokumentieren Sie die Annahme, damit Angebote Monate später nachvollziehbar bleiben.',
        'Berechnen Sie neu, wenn die Maschine vom Hobbyeinsatz zur bezahlten Produktion umgewidmet wird.',
      ],
    },
    { type: 'title', text: 'Die Aufteilung Strom vs. Amortisation verstehen', level: 2 },
    {
      type: 'paragraph',
      html: 'Der Zusammensetzungsbalken zeigt, ob ein Auftrag strom- oder anlagengetrieben ist. Stromgetriebene Aufträge reagieren stark auf den Stromtarif, die Heizbettstrategie, die Kammertemperatur, das Aufwärmverhalten und die Raumtemperatur. Anlagengetriebene Aufträge reagieren stärker auf Kaufpreis, Nutzungsdauer und Auslastung. Bei einer ausgeglichenen Aufteilung sollte keine Position ignoriert werden; beide gehören in den Basis-Maschinenstundensatz.',
    },
    {
      type: 'paragraph',
      html: 'Diese Aufteilung ist nützlich, weil dieselben Gesamtkosten unterschiedliche Maßnahmen erfordern können. Wenn Strom dominiert, können eine Reduzierung der Betttemperatur, das Zusammenfassen von Teilen zur Vermeidung wiederholter Aufwärmphasen, die Isolierung eines Gehäuses oder das Drucken in günstigeren Tarifzeiten helfen. Wenn die Amortisation dominiert, ist der bessere Hebel die Auslastung: Halten Sie den Drucker mit profitablen Aufträgen ausgelastet, vermeiden Sie ungenutztes Kapital und wählen Sie die Maschinengröße sorgfältig, anstatt Kapazität zu kaufen, die ungenutzt bleibt.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Stromkosten', definition: 'Die abgerechnete Energie, die der Drucker während der gewählten Dauer verbraucht.' },
        { term: 'Amortisation', definition: 'Der Anteil des Maschinenkaufpreises, der den vom Auftrag genutzten Stunden zugeordnet wird.' },
        { term: 'Nutzungsdauer', definition: 'Die erwartete Anzahl produktiver Betriebsstunden, bevor der Drucker wirtschaftlich ersetzt wird.' },
        { term: 'Maschinenstundensatz', definition: 'Stromkosten pro Stunde plus Abschreibungskosten pro Stunde vor Material, Arbeit, Gemeinkosten und Gewinn.' },
        { term: 'Betriebskosten', definition: 'Die Maschinenkosten, die anfallen, um die Produktion für eine bestimmte Dauer aufrechtzuerhalten.' },
      ],
    },
    {
      type: 'proscons',
      title: 'Was dieser Rechner beinhaltet und ausschließt',
      items: [
        { pro: 'Enthält gemessenen Stromverbrauch, Stromtarif, Dauer, Kaufpreis und Nutzungsdauer.', con: 'Enthält kein Filament, Harz, Stützen, Fehldrucke, Arbeit, Miete, Software, Verpackung oder Marge.' },
        { pro: 'Zeigt die Kostenaufteilung, damit Benutzer den Hauptwirtschaftstreiber identifizieren können.', con: 'Verwendet lineare Abschreibung und bildet daher keine steuerlichen Abschreibungspläne oder Wiederverkaufswerte ab.' },
        { pro: 'Funktioniert für einen Druck, eine Charge oder einen monatlichen Produktionsblock durch Änderung der Dauer.', con: 'Erfordert ehrliche Leistungs- und Nutzungsdauerannahmen, um falsche Genauigkeit zu vermeiden.' },
      ],
    },
    { type: 'title', text: 'Das Ergebnis zur Festlegung eines profitablen Preises pro Stunde nutzen', level: 2 },
    {
      type: 'paragraph',
      html: 'Der berechnete Stundensatz ist die Untergrenze für die Maschinenzeit, nicht der endgültige Verkaufspreis. Ein vollständiges 3D-Druck-Angebot enthält normalerweise Material, Stützabfall, Düsenreinigungsabfall, Bedienerarbeit, Slicing- und Vorbereitungszeit, Fehldrucktoleranz, Wartungsverbrauchsmaterialien, Miete, Software, Zahlungsgebühren, Steuern und die angestrebte Marge. Der Maschinenstundensatz ist dennoch unerlässlich, weil er verhindert, dass der Drucker selbst als kostenlos behandelt wird.',
    },
    {
      type: 'paragraph',
      html: 'Wenn der Rechner beispielsweise 0,225 € pro Maschinenstunde ausgibt und ein Auftrag den Drucker 14 Stunden belegt, betragen die Maschinenbetriebskosten 3,15 €. Wenn das Material 4,80 € kostet, die Arbeitszeit 6,00 € beträgt, die Fehlerquote 1,20 € und danach eine Gewinnmarge aufgeschlagen wird, wird das Angebot finanziell nachvollziehbar. Wenn ein Kunde fragt, warum ein langer Druck mehr kostet als das Plastikgewicht vermuten lässt, wird die Maschinenzeit zu einer erklärbaren Position.',
    },
    {
      type: 'card',
      icon: 'mdi:cash-clock',
      title: 'Rentabilitätshinweis',
      html: '<p>Diese Berechnung ist die Grundlage für die Festlegung des <strong>Preises pro Stunde</strong> jeder Druckfarm. Sobald die Maschinenkosten pro Stunde bekannt sind, kann die Werkstatt entscheiden, ob sie die Maschinenzeit direkt berechnet, in den Materialaufschlag einbezieht oder intern verwendet, um Drucker und Materialien zu vergleichen.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Nicht nur nach Gramm anbieten',
      badge: 'Versteckte Kosten',
      html: '<p>Ein leichtes Teil, das den Drucker 20 Stunden belegt, kann mehr Maschinenkapazität verbrauchen als ein schweres, schnell gedrucktes Teil. Eine gewichtsbasierte Preisgestaltung ohne Maschinenzeit unterbewertet oft langsame, hohe, feinschichtige oder niedrig durchflussintensive Aufträge.</p>',
    },
    { type: 'title', text: 'Praktische Beispiele für Betriebskostenschätzungen im 3D-Druck', level: 2 },
    {
      type: 'paragraph',
      html: 'Ein gut eingestellter PLA-Desktop-Auftrag verbraucht durchschnittlich 120 W, läuft 6 Stunden, hat einen Tarif von 0,22 €/kWh und sitzt auf einem 600-€-Drucker mit 5000 Stunden Nutzungsdauer. Der Strom kostet nur 0,158 €, während die Amortisation 0,720 € beträgt. Die gesamten Maschinenbetriebskosten liegen bei etwa 0,878 €, der Stundensatz bei etwa 0,146 €. In diesem Fall ist der Auftrag eindeutig anlagengetrieben: Eine bessere Maschinenauslastung beeinflusst die Rentabilität mehr als kleine Änderungen der Leistungsaufnahme.',
    },
    {
      type: 'paragraph',
      html: 'Ein ASA-Auftrag auf einem größeren geschlossenen Drucker verbraucht durchschnittlich 420 W für 18 Stunden bei 0,30 €/kWh. Wenn der Drucker 1800 € kostet und die Nutzungsdauer 4500 Stunden beträgt, liegen die Stromkosten bei 2,268 € und die Amortisation bei 7,200 €, was Maschinenkosten von insgesamt 9,468 € ergibt. Obwohl der Energieverbrauch viel höher ist, dominiert die Abschreibung immer noch, weil die Kapitalkosten und die lange Maschinenbelegung erheblich sind.',
    },
    {
      type: 'paragraph',
      html: 'Ein Harzdrucker kann eine andere Geschichte erzählen. Der Drucker verbraucht vielleicht wenig Strom, aber die Berechnung gilt dennoch für die Maschinenbelegung. Wenn ein Bauvorgang 9 Stunden auf einer 2500-€-Maschine mit einer erwarteten Nutzungsdauer von 4000 Stunden dauert, beträgt die Amortisation allein 5,625 €. Diese Zahl gehört ins Angebot, bevor Harz, Handschuhe, IPA oder Waschflüssigkeit, Nachhärtung, Stützen und Reinigungsarbeit hinzugefügt werden.',
    },
    {
      type: 'summary',
      title: 'Entscheidungsregeln',
      items: [
        'Verwenden Sie gemessene Durchschnittswatt für die Stromgenauigkeit.',
        'Verwenden Sie realistische Nutzungsdauerstunden für die Anlagenrückgewinnung.',
        'Behandeln Sie das Ergebnis als Maschinenzeituntergrenze und addieren Sie dann Material, Arbeit, Gemeinkosten, Risiko und Marge.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
