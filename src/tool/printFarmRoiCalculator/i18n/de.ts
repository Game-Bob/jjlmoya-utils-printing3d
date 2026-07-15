import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PrintFarmRoiCalculatorUI } from '../ui';

const slug = '3d-druckfarm-roi-rechner';
const title = '3D Druckfarm ROI Rechner';
const description =
  'Simulieren Sie die monatliche Rentabilität, die Amortisationszeit und den jährlichen ROI für eine 3D-Druckfarm basierend auf Auslastung, Fehlerrate, Strom, Gemeinkosten und variablen Stundensätzen.';

const currencyOptions = [
  { code: 'EUR', label: 'EUR', symbol: '€' },
  { code: 'USD', label: 'USD', symbol: '$' },
  { code: 'GBP', label: 'GBP', symbol: '£' },
  { code: 'CAD', label: 'CAD', symbol: 'C$' },
  { code: 'AUD', label: 'AUD', symbol: 'A$' },
  { code: 'CHF', label: 'CHF', symbol: 'Fr' },
  { code: 'CNY', label: 'CNY', symbol: '¥' },
  { code: 'INR', label: 'INR', symbol: '₹' },
  { code: 'BRL', label: 'BRL', symbol: 'R$' },
  { code: 'MXN', label: 'MXN', symbol: 'MX$' },
  { code: 'RUB', label: 'RUB', symbol: '₽' },
  { code: 'PLN', label: 'PLN', symbol: 'zł' },
  { code: 'SEK', label: 'SEK', symbol: 'kr' },
  { code: 'NOK', label: 'NOK', symbol: 'kr' },
  { code: 'DKK', label: 'DKK', symbol: 'kr' },
  { code: 'TRY', label: 'TRY', symbol: '₺' },
  { code: 'JPY', label: 'JPY', symbol: '¥' },
];

const faqData = [
  {
    question: 'Wie berechnet man den ROI für eine 3D-Druckfarm?',
    answer:
      'Schätzen Sie die produktiven monatlichen Stunden, multiplizieren Sie diese mit dem Verkaufspreis pro Maschinenstunde, ziehen Sie feste, Strom- und variable Stundensätze ab und vergleichen Sie den jährlichen Gewinn mit der Anfangsinvestition.',
  },
  {
    question: 'Warum beeinflusst die Erfolgsquote die Amortisation einer Druckfarm?',
    answer:
      'Fehlgeschlagene Drucke verbrauchen Maschinenkapazität, Material, Düsen, Energie und die Aufmerksamkeit des Bedieners, ohne abrechenbare Stunden zu erzeugen. Eine geringere Erfolgsquote verringert die realen produktiven Stunden und verzögert die Amortisation.',
  },
  {
    question: 'Was sollte in die variablen Kosten pro Stunde einbezogen werden?',
    answer:
      'Beziehen Sie Filament- oder Harzverbrauch, Düsenverschleiß, Druckplattenverschleiß, routinemäßige Wartungsteile, Verbrauchsmaterialien und alle Stundensätze ein, die mit der tatsächlichen erfolgreichen Produktionszeit skalieren.',
  },
  {
    question: 'Ist die Amortisationszeit das Gleiche wie der ROI?',
    answer:
      'Nein. Die Amortisationszeit schätzt, wie viele Monate benötigt werden, um die Anfangsinvestition aus dem monatlichen Nettogewinn zurückzugewinnen. Der ROI vergleicht den jährlichen Gewinn als Prozentsatz mit der ursprünglichen Investition.',
  },
];

const howToData = [
  { name: 'Größe der Farm eingeben', text: 'Geben Sie die Anzahl der aktiven Drucker und die Anfangsinvestition für Maschinen, Einrichtung, Arbeitsstationen und Inbetriebnahme ein.' },
  { name: 'Monatliche Betriebskosten hinzufügen', text: 'Geben Sie feste Gemeinkosten und Strom als monatliche Kosten ein, und fügen Sie dann die variablen Kosten pro produktiver Maschinenstunde hinzu.' },
  { name: 'Auslastung und Erfolgsquote festlegen', text: 'Verwenden Sie realistische Belegungs- und Erfolgsprozentsätze, damit das Modell Leerlaufzeiten und fehlgeschlagene Drucke berücksichtigt.' },
  { name: 'Rentabilitätskennzahlen ablesen', text: 'Vergleichen Sie die monatlichen Einnahmen mit den Kosten und nutzen Sie die Amortisationsmonate sowie den jährlichen ROI, um die Rentabilität der Investition zu beurteilen.' },
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
    '3D-Druckfarm ROI-Rechner',
    '3D-Druck Investitions-Amortisations-Simulator',
    'Druckfarm-Rentabilitätsrechner',
    'Anpassung von Auslastung und fehlgeschlagenen Drucken',
    'Modell für Betriebskosten in mehreren Währungen',
  ],
  inLanguage: 'de',
};

export const content: ToolLocaleContent<PrintFarmRoiCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Eingabefelder für den ROI der Druckfarm',
    resultsAriaLabel: 'Ergebnisse für den ROI der Druckfarm',
    currencyLabel: 'Währung',
    currencyOptions,
    printerCountLabel: 'Anzahl der Drucker',
    initialInvestmentLabel: 'Anfangsinvestition',
    fixedMonthlyCostLabel: 'Monatliche Fixkosten',
    electricityMonthlyCostLabel: 'Monatliche Stromkosten',
    hourlyRateLabel: 'Verkaufspreis pro Stunde',
    occupancyLabel: 'Durchschnittliche Auslastung',
    successRateLabel: 'Erfolgsquote',
    variableCostLabel: 'Variable Kosten pro Stunde',
    averageHoursPerPartLabel: 'Durchschnittliche Stunden pro Teil',
    paybackLabel: 'Amortisationszeit',
    netProfitLabel: 'Monatlicher Nettogewinn',
    annualRoiLabel: 'Jährlicher ROI',
    productiveHoursLabel: 'Reale produktive Stunden',
    revenueLabel: 'Einnahmen',
    costsLabel: 'Kosten',
    fixedCostShortLabel: 'Fix',
    electricityShortLabel: 'Strom',
    variableCostShortLabel: 'Variabel',
    marginLabel: 'Nettomarge',
    breakEvenPartsLabel: 'Break-even-Teile',
    breakEvenHoursLabel: 'Break-even-Stunden',
    stressScenarioLabel: 'Worst-Case-Szenario',
    exportSummaryLabel: 'Zusammenfassung herunterladen',
    chartLabel: 'Monatliche Einnahmen im Vergleich zu den Betriebskosten',
    monthsUnit: 'Monate',
    hoursUnit: 'h',
    percentUnit: '%',
    notViableLabel: 'Nicht rentabel',
    positiveInsight: 'Der monatliche Gewinn ist nach Berücksichtigung von Auslastung, Erfolgsquote und Betriebskosten positiv.',
    negativeInsight: 'Die Betriebskosten übersteigen die bereinigten Einnahmen; verbessern Sie die Auslastung, die Preisgestaltung oder die Fehlerrate vor einer Skalierung.',
    currencySymbol: '€',
    defaultCurrencyCode: 'EUR',
    pendingLabel: '-',
    partsUnit: 'Teile/Monat',
    reportFilename: 'druckfarm-roi-zusammenfassung.csv',
    reportTitle: 'ROI-Rentabilitätsbericht der 3D-Druckfarm',
    reportCurrencyLabel: 'Währung',
  },
  seo: [
    { type: 'title', text: 'Wie dieser 3D Druckfarm ROI Rechner funktioniert', level: 2 },
    {
      type: 'paragraph',
      html: 'Ein <strong>3D-Druckfarm-ROI-Rechner</strong> sollte eine spezifische Investitionsfrage beantworten: Wird eine Gruppe von Druckern ihre Einrichtungskosten schnell genug amortisieren, um das Kapital, den Platz, die Wartung und das betriebliche Risiko zu rechtfertigen? Dieser Simulator modelliert diese Frage ausgehend von der monatlichen Maschinenkapazität. Jeder Drucker trägt in einem Standardmonat von 30 Tagen 720 Bruttostunden bei, und das Modell zieht dann Leerlaufzeiten und die Druckfehlerrate ab. Das Ergebnis ist nicht die theoretische Kapazität, sondern die abrechenbare Produktionszeit, die Leerlaufzeiten, Auftragswarteschlangen, fehlgeschlagene Drucke, Neudrucke, Kalibrierungen und praktische Ausfallzeiten übersteht.',
    },
    {
      type: 'paragraph',
      html: 'Die Berechnungskette ist bewusst transparent. Die monatlichen Bruttostunden entsprechen <code>Drucker x 720</code>. Die realen produktiven Stunden entsprechen den Bruttostunden multipliziert mit der durchschnittlichen Auslastung und der Erfolgsquote. Der monatliche Umsatz entspricht den produktiven Stunden multipliziert mit dem Stundensatz für den Kunden. Die Betriebskosten setzen sich aus monatlichen Fixkosten, Stromkosten und variablen Stundensätzen zusammen. Der monatliche Nettogewinn ist der Umsatz abzüglich dieser Betriebskosten. Die Amortisationszeit teilt die Anfangsinvestition durch den monatlichen Nettogewinn, während der jährliche ROI den Nettogewinn von zwölf Monaten mit der Anfangsinvestition vergleicht.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '720 h', label: 'Monatliche Bruttokapazität pro Drucker', icon: 'mdi:clock-outline' },
        { value: 'U x S', label: 'Auslastungs- und Erfolgsausgleich', icon: 'mdi:percent-outline' },
        { value: 'Umsatz - Kosten', label: 'Monatlicher Nettogewinn', icon: 'mdi:finance' },
        { value: 'Investition / Gewinn', label: 'Amortisationszeit', icon: 'mdi:calendar-clock' },
      ],
    },
    {
      type: 'tip',
      title: 'Nutzen Sie konservative Eingaben für Investitionsentscheidungen',
      html: '<p>Geben Sie für einen ersten Durchlauf die Auslastung ein, die Sie mit der aktuellen Nachfrage verteidigen können, nicht die Auslastung, die Sie nach einer Verbesserung des Marketings zu erreichen hoffen. Eine Farm, die nur bei optimistischer Belegung funktioniert, ist noch keine robuste Investition.</p>',
    },
    { type: 'title', text: 'Warum die Auslastung die Rentabilität der Druckfarm verändert', level: 2 },
    {
      type: 'paragraph',
      html: 'Die Auslastung ist der Prozentsatz der verfügbaren Maschinenzeit, in dem tatsächlich bezahlte oder verkaufbare Arbeiten gedruckt werden. Sie ist der stärkste Hebel in vielen Modellen kleiner Farmen, da die Anfangsinvestition fest ist. Ein für die Produktion gekaufter Drucker kostet das Gleiche, egal ob er acht oder zwanzig Stunden pro Tag gebucht ist. Eine höher Auslastung verteilt Miete, Einrichtung, Ersatzteilbestand, Software und Maschinenabschreibung auf mehr abrechenbare Stunden.',
    },
    {
      type: 'paragraph',
      html: 'Der Rechner behandelt die Auslastung als direkten Multiplikator der Bruttokapazität. Zehn Drucker erzeugen 7200 Bruttomaschinenstunden pro Monat. Bei einer Auslastung von 40% gehen nur 2880 Stunden in das Einnahmemodell ein, bevor die Erfolgsquote berücksichtigt wird. Bei einer Auslastung von 75% gehen 5400 Stunden in das Modell ein. Der Unterschied kann darüber entscheiden, ob die Amortisation Monate oder Jahre dauert oder nie eintritt.',
    },
    {
      type: 'table',
      headers: ['Auslastungsgrad', 'Betriebliche Bedeutung', 'Auswirkung auf den ROI'],
      rows: [
        ['Unter 30%', 'Maschinen warten die meiste Zeit des Monats auf Bestellungen, Dateien, Bediener oder Wartung.', 'Die Anfangsinvestition ist schwer wieder hereinzuholen, es sei denn, die Preise pro Stunde sind hoch.'],
        ['30-55%', 'Häufiger Bereich in der Anfangsphase für Farmen mit gemischter Nachfrage und manuellem Handling.', 'Die Rentabilität hängt stark von den Fixkosten und der Fehlerrate ab.'],
        ['55-75%', 'Gesunder Buchungsgrad mit Spielraum für dringende Aufträge, Wartung und Einrichtungsänderungen.', 'Häufig der erste Bereich, in dem eine Amortisation realistisch wird.'],
        ['Über 75%', 'Hohe Auslastung, die eine zuverlässige Planung, Materialfluss und vorbeugende Wartung erfordert.', 'Starkes ROI-Potenzial, aber wenig Toleranz für Ausfälle oder Engpässe beim Bediener.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Eine hohe Auslastung ist nicht gleichbedeutend mit hohem Gewinn',
      badge: 'Preisrisiko',
      html: '<p>Eine Farm kann ausgelastet sein und trotzdem Geld verlieren, wenn der Stundensatz zu niedrig ist, Neudrucke häufig vorkommen, der Materialabfall hoch ist oder die Fixkosten unterschätzt wurden. Vergleichen Sie die Auslastung immer mit der Marge, nicht nur mit dem Umsatz.</p>',
    },
    { type: 'title', text: 'Berücksichtigung von fehlgeschlagenen Drucken und Neudrucken', level: 2 },
    {
      type: 'paragraph',
      html: 'Die Erfolgsquote unterscheidet diesen Simulator von einem einfachen Kapazitätsrechner. Fehlgeschlagene Drucke verbrauchen die gleiche Zeit wie erfolgreiche Drucke, erzeugen aber kein verkaufbares Produkt. Sie verbrauchen außerdem Filament, Harz, Druckplatten, Düsen, Strom, Arbeit und das Vertrauen der Kunden. Eine Farm mit einer Erfolgsquote von 90% verliert jeden zehnten potenziellen Produktionsblock, bevor Einnahmen erzielt werden.',
    },
    {
      type: 'paragraph',
      html: 'Die Erfolgsquote sollte an vergleichbaren Arbeiten gemessen werden. Eine Farm, die wiederholt PLA-Halterungen druckt, kann nach einer Prozessoptimierung eine sehr hohe Erfolgsquote aufrechterhalten. Eine Farm, die individuelle Kundenmodelle, hohe Teile, technische Polymere, Harzminiaturen oder Multimaterial-Aufträge produziert, muss von einer niedrigeren Quote ausgehen. Wenn Sie einfache und riskante Arbeiten mischen, führen Sie den Rechner zweimal aus: einmal für die Standardproduktion und einmal für Sonderanfertigungen.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Serienproduktion',
          description: 'Bekannte Bauteilgeometrie, optimierte Profile, vorhersagbare Materialien und stabile Nachfrage.',
          icon: 'mdi:repeat',
          points: ['Höhere Erfolgsquote angenommen', 'Geringere Unsicherheit bei der Einrichtung', 'Besseres Vertrauen in die Amortisation'],
        },
        {
          title: 'Individueller Druckdienst',
          description: 'Dateien variieren je nach Kunde, Geometrie, Stützstruktur und Qualitätserwartung.',
          icon: 'mdi:file-cad',
          highlight: true,
          points: ['Moderate Erfolgsquote angenommen', 'Größere Abweichung bei Angeboten', 'Benötigt Puffer für Neudrucke'],
        },
        {
          title: 'Experimentelle Materialien',
          description: 'Technische Polymere, flexible Materialien, gefüllte Filamente und Harzprozessoptimierung.',
          icon: 'mdi:flask-outline',
          points: ['Niedrigere Erfolgsquote angenommen', 'Höherer Verschleiß von Verbrauchsmaterialien', 'Vorsichtige ROI-Eingaben nutzen'],
        },
      ],
    },
    {
      type: 'message',
      title: 'Die Fehlerrate gehört in das Finanzmodell',
      ariaLabel: 'Hinweis zur Berücksichtigung von Druckfehlern',
      html: '<p>Verstecken Sie Neudrucke nicht in vagen Gemeinkosten. Eine sichtbare Erfolgsquote macht den Investitionsfall einfacher zu hinterfragen, zu verbessern und zu erklären.</p>',
    },
    { type: 'title', text: 'Aufbau eines zuverlässigen monatlichen Kostenmodells', level: 2 },
    {
      type: 'paragraph',
      html: 'Die Betriebskosten sind in diesem Tool dreistufig aufgebaut. Die monatlichen Fixkosten decken Ausgaben ab, die auch bei stillstehenden Druckern anfallen: Miete, Internet, Versicherungen, Software, Buchhaltung, Lagerung, grundlegende Arbeitskräfte und andere Gemeinkosten. Die monatlichen Stromkosten erfassen die von Druckern und direkt zugehörigen Produktionsgeräten verbrauchte Energie. Die variablen Kosten pro Stunde decken Kosten ab, die mit der produktiven Maschinenzeit skalieren, wie Filament, Harz, Düsen, PTFE-Schläuche, Druckplattenverschleiß, Filter, Schmiermittel, Wartungsteile und Reinigungsmaterialien.',
    },
    {
      type: 'paragraph',
      html: 'Die Beibehaltung von Strom als separater monatlicher Eingabe ist für Farmen nützlich, da der Stromverbrauch oft anhand von Rechnungen erfasst und nicht pro Druck berechnet wird. Eine Farm mit beheiztem Bett, die PETG, ASA, ABS oder Nylon herstellt, kann ein ganz anderes Energieprofil aufweisen als eine PLA-Farm im selben Raum. Wenn Sie den Strom bereits pro Maschinenstunde berechnen, können Sie diesen Wert in die variablen Kosten pro Stunde einbeziehen und das monatliche Stromfeld auf Null setzen.',
    },
    {
      type: 'table',
      headers: ['Kosteneingabe', 'Einbeziehen', 'Vermeiden'],
      rows: [
        ['Monatliche Fixkosten', 'Miete, Versicherung, Internet, Software, Basispersonal, Lagerung.', 'Material, das nur verbraucht wird, wenn die Drucker laufen.'],
        ['Monatliche Stromkosten', 'Druckerenergie, Trockner, Waschanlagen, Härten, Belüftung, Klimatisierung.', 'Nicht damit zusammenhängender Haushalts- oder Bürostrom.'],
        ['Variable Kosten pro Stunde', 'Filament, Harz, Düsen, Wartungsverbrauchsmaterialien, Stundensätze für Verschleiß.', 'Einmalige Anschaffungskosten für Maschinen.'],
        ['Anfangsinvestition', 'Drucker, Regale, Einrichtung, Werkzeuge, Trockner, Farm-Management-Hardware.', 'Monatliche Kosten, die nach dem Start wiederkehren.'],
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Monatliche Bruttostunden', definition: 'Theoretische Maschinenkapazität vor Berücksichtigung von Auslastung und fehlgeschlagenen Drucken.' },
        { term: 'Reale produktive Stunden', definition: 'Verbleibende Kapazität nach Anwendung von Auslastung und Erfolgsquote.' },
        { term: 'Amortisationszeit', definition: 'Monate, die erforderlich sind, damit der monatliche Nettogewinn die Anfangsinvestition wieder einbringt.' },
        { term: 'Jährlicher ROI', definition: 'Nettogewinn von zwölf Monaten dividiert durch die Anfangsinvestition.' },
        { term: 'Variable Stundenkosten', definition: 'Pauschale für Verbrauchsmaterialien und Wartung, die mit der produktiven Druckzeit skaliert.' },
      ],
    },
    { type: 'title', text: 'Festlegung des Verkaufspreises pro Maschinenstunde', level: 2 },
    {
      type: 'paragraph',
      html: 'Der Verkaufspreis pro Stunde ist der Betrag, der dem Kunden für eine produktive Maschinenstunde berechnet wird. Er kann direkt in Angeboten ausgewiesen oder in eine Preisformel integriert werden, die auch Material, Arbeit, Nachbearbeitung, Verpackung und Marge enthält. Wichtig ist die Konsistenz: Wenn der Stundensatz das Material enthalten soll, fügen Sie dasselbe Material nicht noch einmal als variable Kosten pro Stunde hinzu. Wenn der Stundensatz nur die Maschinenzeit darstellt, stellen Sie sicher, dass Material und Arbeit an anderer Stelle im Geschäftsmodell abgebildet sind.',
    },
    {
      type: 'paragraph',
      html: 'Ein Stundensatz, der bei einzelnen Aufträgen wettbewerbsfähig erscheint, kann auf Farmebene scheitern. Lange Drucke blockieren Kapazitäten, die für andere Arbeiten hätten genutzt werden können. Feine Schichthöhen, langsame Materialien, hohe Teile und stützintensive Geometrien reduzieren den Durchsatz. Ein <strong>Druckfarm-Rentabilitätsrechner</strong> sollte daher zusammen mit realen Angebotsdaten verwendet werden: durchschnittliche Auftragsdauer, durchschnittliches bezahltes Stundenäquivalent, Kundenakzeptanzrate und monatliches Bestellvolumen.',
    },
    {
      type: 'proscons',
      title: 'Stundenbasierte Preisgestaltung in einer Druckfarm',
      items: [
        { pro: 'Macht die Maschinenauslastung sichtbar und schützt lange Drucke vor zu niedrigen Preisen.', con: 'Kunden benötigen möglicherweise Erklärungen, wenn ein leichtes Teil viele Stunden dauert.' },
        { pro: 'Funktioniert gut für die interne ROI-Planung und Kapazitätsentscheidungen.', con: 'Ersetzt nicht die Preisgestaltung für Material, Arbeit, Nachbearbeitung und Risiko.' },
        { pro: 'Ermöglicht den schnellen Vergleich zwischen Druckertypen und Auslastungsszenarien.', con: 'Kann irreführend sein, wenn Fehlerrate und Warteschlangenzeit ignoriert werden.' },
      ],
    },
    {
      type: 'card',
      icon: 'mdi:cash-clock',
      title: 'Preiskontrollpunkt',
      html: '<p>Wenn eine kleine Änderung des Stundensatzes die Amortisation vollständig verändert, reagiert die Investition empfindlich auf die Marktpreise. Validieren Sie den Satz anhand der tatsächlichen Kundennachfrage, bevor Sie weitere Drucker kaufen.</p>',
    },
    { type: 'title', text: 'Interpretation von Amortisationszeit und jährlichem ROI', level: 2 },
    {
      type: 'paragraph',
      html: 'Die Amortisationszeit ist leicht zu verstehen, da sie in Monaten ausgedrückt wird. Wenn die Anfangsinvestition 18000 beträgt und der monatliche Nettogewinn 3000, beträgt die Amortisation sechs Monate. Wenn der monatliche Nettogewinn null oder negativ ist, ist die Amortisation nicht rentabel, da die Farm die Investition unter den aktuellen Annahmen nie wieder hereinholt. Die Amortisationszeit ist nützlich für die Liquiditätsplanung, die Gerätefinanzierung und die Entscheidung, ob eine Expansion jetzt oder erst nach einer Verbesserung der Nachfrage stattfinden sollte.',
    },
    {
      type: 'paragraph',
      html: 'Der jährliche ROI ist strenger, da er den Nettogewinn eines Jahres mit der Anfangsinvestition vergleicht. Eine Farm kann einen positiven monatlichen Gewinn erzielen, aber dennoch einen schwachen jährlichen ROI aufweisen, wenn die Amortisation langsam ist. Beispielsweise erzielt eine Farm, die bei einer Investition von 24000 monatlich 1000 nach Kosten einbringt, 12000 pro Jahr vor Berücksichtigung der ursprünglichen Investition, sodass der ROI im ersten Jahr negativ bleibt. Das bedeutet nicht automatisch, dass das Geschäft schlecht ist, aber es bedeutet, dass der Investor einen längeren Zeithorizont benötigt.',
    },
    {
      type: 'summary',
      title: 'Entscheidungsregeln',
      items: [
        'Nutzen Sie die Amortisationszeit, um die Geschwindigkeit der Kapitalrückgewinnung zu verstehen.',
        'Nutzen Sie den jährlichen ROI, um die Druckfarm mit anderen Kapitalanlagen zu vergleichen.',
        'Führen Sie das Modell mit geringerer Auslastung und Erfolgsquote erneut aus, bevor Sie sich zu einer Expansion verpflichten.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Szenariotests bieten den eigentlichen Nutzen',
      badge: 'Planung',
      html: '<p>Führen Sie einen Basisfall, einen konservativen Fall und einen Stressfall aus. Die beste Investition ist nicht diejenige, die nur im optimistischen Szenario gut aussieht, sondern diejenige, die auch dann verständlich bleibt, wenn sich Nachfrage, Fehlerraten oder Stromkosten gegen Sie entwickeln.</p>',
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
