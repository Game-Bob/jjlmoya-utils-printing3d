import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PrintingCostCalculatorUI } from '../ui';

const slug = '3d-druck-kostenrechner';
const title = '3D Druck Kostenrechner: Filament und Energie';
const description = 'Berechnen Sie den tatsächlichen Preis Ihrer 3D-Drucke. Enthält Materialkosten, Strom, Maschinenabschreibung und Arbeitsaufwand.';

const faqData = [
  {
    question: 'Warum variieren die Stromkosten so stark?',
    answer: 'Der höchste Verbrauch entsteht durch das Warmhalten des Druckbetts. Materialien wie ABS (100°C) verbrauchen deutlich mehr als PLA (60°C). Auch die Bauweise des Druckers (offen oder geschlossen) hat einen Einfluss.',
  },
  {
    question: 'Wie finde ich heraus, wie viel Watt mein Drucker verbraucht?',
    answer: 'Die meisten Heimdrucker verbrauchen während des Betriebs durchschnittlich 100-150W. Sie können dies genau mit einem smarten Zwischenstecker oder einem Wattmeter messen.',
  },
  {
    question: 'Was ist die Verschnittmarge?',
    answer: 'Es handelt sich um das Filament, das nicht Teil des fertigen Stücks ist: Stützstrukturen, Raft, Skirt und anfängliche Reinigungsschritte. Wir empfehlen mindestens 5% für eine realistische Kalkulation.',
  },
];

const howToData = [
  {
    name: 'Technische Daten eingeben',
    text: 'Geben Sie das Gewicht des Teils ein (aus Ihrer Slicer-Software wie Cura), die Druckzeit und den Verbrauch Ihrer Maschine.',
  },
  {
    name: 'Wirtschaftliche Kosten konfigurieren',
    text: 'Passen Sie den Preis Ihrer Spule, Ihren Stromtarif und den Wert Ihrer manuellen Arbeitsstunde an.',
  },
  {
    name: 'Gewinn analysieren',
    text: 'Bewegen Sie den Margen-Schieberegler, um den empfohlenen Verkaufspreis zu sehen, und prüfen Sie das Kreisdiagramm, um die Kostenverteilung zu verstehen.',
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

const howToSchema: WithContext<HowToThing> = {
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'de',
};

export const content: ToolLocaleContent<PrintingCostCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    materialTitle: 'Material',
    partWeightLabel: 'Teilgewicht (netto)',
    gramsUnit: 'Gramm',
    spoolPriceLabel: 'Spulenpreis (1kg)',
    spoolPriceUnit: '€/kg',
    wasteMarginLabel: 'Verschnittmarge: ',
    energyTitle: 'Energie und Zeit',
    printTimeLabel: 'Druckzeit',
    hoursUnit: 'Stunden',
    averagePowerLabel: 'Durchschnittsverbrauch',
    wattsUnit: 'Watt',
    electricityRateLabel: 'Stromtarif',
    kwhPriceUnit: '€/kWh',
    amortizationTitle: 'Abschreibung und Arbeit',
    machineCostHourLabel: 'Maschinenkosten pro Stunde',
    priceHourUnit: '€/h',
    laborCostHourLabel: 'Arbeit (manuell)',
    minutesUnit: 'Minuten',
    manufacturingCostLabel: 'Herstellungskosten',
    suggestedPriceLabel: 'Empfohlener Preis (+{margin}%)',
    costBreakdownTitle: 'Kostenaufschlüsselung',
    plasticLabel: 'Kunststoff',
    electricityLabel: 'Strom',
    machineLabel: 'Maschine',
    laborLabel: 'Arbeit',
    proTip: 'Wussten Sie, dass das Aufheizen des Druckbetts auf 100°C für ABS die Stromkosten im Vergleich zu PLA verdoppeln kann? Vergessen Sie nicht, Fehldrucke einzukalkulieren: Wenn 10% Ihrer Teile scheitern, liegen Ihre tatsächlichen Kosten 10% höher.',
  },
  seo: [
    {
      type: 'title',
      text: 'Berechnung der tatsächlichen Kosten des 3D-Drucks: Mehr als nur Filament',
      level: 1,
    },
    {
      type: 'paragraph',
      html: 'Wenn wir in die Welt der additiven Fertigung einsteigen, denken wir oft, dass der Kunststoff aus der Düse der einzige Kostenfaktor ist. Wenn Sie daraus jedoch ein Geschäft machen oder einfach Ihr Hobby besser verwalten möchten, müssen Sie verstehen, dass die <strong>Rentabilität</strong> in den Details liegt, die auf den ersten Blick nicht sichtbar sind.',
    },
    {
      type: 'title',
      text: 'Die 4 Säulen der Kosten im 3D-Druck',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Unser Rechner schlüsselt den Endpreis in vier grundlegende Bereiche auf:',
    },
    {
      type: 'summary',
      items: [
        'Material und Verschnitt: Beinhaltet das Gewicht des Teils sowie den für Stützen, Skirts und Reinigung verwendeten Kunststoff. Wir empfehlen immer eine Marge von 5-10% für mögliche Fehldrucke.',
        'Stromverbrauch: Ein 3D-Drucker verbraucht beim Drucken von PLA (Bett bei 60°C) nicht dasselbe wie bei ABS oder Nylon (Bett bei 100°C+). Der kWh-Preis kann bei großen Teilen einen Unterschied machen.',
        'Maschinenabschreibung: Jede Stunde, in der der Drucker läuft, verschleißen seine Komponenten (Riemen, Lüfter, Düsen). Ein kleiner Stundensatz ermöglicht es Ihnen, zukünftige Reparaturen zu finanzieren.',
        'Arbeitsaufwand: Ihre Zeit ist das Wertvollste. Das Vorbereiten der Datei, das Reinigen des Betts und die Nachbearbeitung des Teils müssen berücksichtigt werden.',
      ],
    },
    {
      type: 'title',
      text: 'Wie berechnet man die Abschreibung?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ein einfacher Weg ist, den Kaufpreis Ihres Druckers durch seine geschätzte Lebensdauer in Stunden zu teilen. Wenn ein Drucker beispielsweise 400 € kostet und Sie erwarten, dass er mindestens 2000 Stunden vor einer größeren Überholung arbeitet, betragen die Abschreibungskosten <strong>0,20 € pro Stunde</strong>.',
    },
    {
      type: 'tip',
      title: 'Strom sparen',
      html: '<p>Wenn Sie viel drucken, ziehen Sie ein Gehäuse für Ihren Drucker in Betracht. Dies hilft nicht nur beim Drucken technischer Materialien, sondern speichert auch Wärme, sodass das Heizbett deutlich weniger Energie benötigt, um die Temperatur zu halten.</p>',
    },
    {
      type: 'title',
      text: 'Strategien für den Verkaufspreis',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Sobald Sie Ihre Basiskosten kennen, müssen Sie Ihre Marge festlegen. In der Welt des 3D-Drucks auf Abruf ist eine Marge von 50-100% über den Gesamtkosten üblich, um das Risiko unerwarteter Fehler und den kommerziellen Gewinn abzudecken. Erfordert das Teil viel manuelles Schleifen und Lackieren, sollte die Marge höher sein.',
    },
    {
      type: 'summary',
      items: [
        'Preise nach Zeit: Ideal für reine Druckdienstleistungen.',
        'Preise nach Gramm: Gebräuchlich für massive, aber einfache Teile.',
        'Preise nach Wert: Wenn das Design einzigartig ist, sollte der Preis nicht nur auf den Kosten basieren, sondern darauf, was der Kunde bereit ist zu zahlen.',
      ],
    },
  ],
  faqTitle: 'Häufig gestellte Fragen zu 3D-Kosten',
  faq: faqData,
  bibliographyTitle: 'Literaturverzeichnis und Ressourcen',
  bibliography: [
    {
      name: 'PrusaPrinters: 3D-Druckkosten berechnen',
      url: 'https://blog.prusa3d.com/es/calculadora-precio-impresion-3d_38905/',
    },
    {
      name: 'Simplify3D: Material- und Kostenschätzung',
      url: 'https://forum.simplify3d.com/viewtopic.php?t=11758',
    },
    {
      name: '3DHubs: Leitfaden für Kosten in der additiven Fertigung',
      url: 'https://www.hubs.com/knowledge-base/cost-3d-printing/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
