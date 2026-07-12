import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ResinHollowingDrainageCalculatorUI } from '../ui';

const slug = 'sla-hohlkoerper-entwaesserungsrechner';
const title = 'SLA Hohlkörper Entwässerungsrechner';
const description = 'Berechnen Sie konservative Wandstärken, Ablauflochdurchmesser, minimale Entlüftungsanzahl und komplexitätsangepasste Harzeinsparungen für hohle SLA und DLP Harzdrucke.';

const faqData = [
  { question: 'Warum empfiehlt der Rechner immer mindestens zwei Ablauflöcher?', answer: 'Ein hohler Harzdruck benötigt einen Weg für flüssiges Harz zum Austritt und einen weiteren für Lufteintritt. Zwei Öffnungen helfen auch, den Saugnapfeffekt gegen die Trennfolie während des Ablösens zu brechen.' },
  { question: 'Warum ist die Harzeinsparung geringer als das theoretische Hohlvolumen?', answer: 'Flüssiges Harz bleibt an Innenwänden, Verrippungen, Ecken, Stützstrukturen und kleinen Taschen haften. Der Rechner subtrahiert 5, 10 oder 15 Prozent vom theoretischen Hohlvolumen.' },
  { question: 'Ist 1,5 mm immer ausreichend als Wandstärke?', answer: 'Nein. Es ist eine Mindestsicherheitsgrenze für viele Desktop Harzdrucke. Große Teile, schwere Teile, technische Belastungen, heiße Umgebungen oder aggressives Schleifen können dickere Wände erfordern.' },
  { question: 'Wo sollten Ablauflöcher platziert werden?', answer: 'Platzieren Sie Löcher so nah wie möglich an der Bauplattformseite und den niedrigsten Harzsammelpunkten in der Druckausrichtung.' },
];

const howToData = [
  { name: 'Modellvolumen und Höhe eingeben', text: 'Verwenden Sie das Slicervolumen nach Stützstrukturen und Ausrichtung, und geben Sie dann die Höhe des Teils in Druckausrichtung ein.' },
  { name: 'Geometrische Komplexität wählen', text: 'Wählen Sie einfach, mäßig oder hoch, damit eingeschlossenes Harz von der theoretischen Hohleinsparung abgezogen wird.' },
  { name: 'Harztyp wählen', text: 'Wählen Sie Standard, Zäh oder Engineering. Zähere Harze erhalten eine größere Ablaufdurchmesserempfehlung.' },
  { name: 'Wand und Ablaufempfehlungen prüfen', text: 'Verwenden Sie Wandstärke, Ablaufdurchmesser, Lochanzahl und Checkliste vor dem endgültigen Slicen.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org', '@type': 'HowTo',
  name: title, description,
  step: howToData.map((step, index) => ({
    '@type': 'HowToStep', position: index + 1,
    name: step.name, text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org', '@type': 'SoftwareApplication',
  name: title, description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'de',
};

const seoData = [
    {
      type: 'title',
      text: 'Was macht der SLA Hohlkörper Entwässerungsrechner?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Dieses Tool löst eine der wichtigsten Herausforderungen beim SLA-, DLP- und LCD-Harz-3D-Druck: die Optimierung hohler Modelle. Der Druck massiver Harzteile ist teuer, schwer und erhöht die Abzugskräfte während des Druckvorgangs. Das Aushöhlen des Modells reduziert den Materialverbrauch, aber das Einführen von Hohlräumen ohne ordnungsgemäße Entwässerung führt zu eingeschlossenem, nicht ausgehärtetem Harz und Druckfehlern aufgrund von Vakuumkräften. Dieser Rechner ermittelt die ideale Wandstärke, schlägt den richtigen Durchmesser und die richtige Anzahl von Ablauflöchern vor und schätzt die tatsächliche Harzersparnis, indem er das flüssige Harz berücksichtigt, das unweigerlich an den Innenwänden des gedruckten Teils haften bleibt.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
          {
            value: '1,5 mm',
            label: 'Empfohlene Mindestwandstärke für Desktop-SLA'
          },
          {
            value: '2 Löcher',
            label: 'Mindestanzahl an Entlüftungen zur Vakuumbrechung'
          },
          {
            value: '10-15%',
            label: 'Harzvolumenreduzierung durch interne Oberflächenhaftung'
          },
          {
            value: '30-70%',
            label: 'Durchschnittliche Gewichtsreduzierung durch Aushöhlung'
          }
        ]
    },
    {
      type: 'title',
      text: 'Wie die Wandstärke die Harzeinsparung beeinflusst',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Die Wandstärke ist die primäre Variable, die die Menge des eingesparten Harzes bestimmt. Eine dickere Wand erhöht die strukturelle Festigkeit, verbraucht jedoch schnell mehr Harz und verringert die Effizienz des Aushöhlens. Umgekehrt ist eine zu dünne Wand zerbrechlich, neigt beim Aushärten zum Verzug und hält den mechanischen Abzugskräften möglicherweise nicht stand, wenn der Drucker jede Schicht von der FEP-Folie trennt. Das Ziel ist es, den optimalen Punkt zu finden, an dem das Modell seine Form und Nützlichkeit behält und gleichzeitig Materialeinsparungen maximiert werden.'
    },
    {
      type: 'proscons',
      title: 'Vorteile und Nachteile des Aushöhlens von Harzdrucken',
      items: [
          {
            pro: 'Massive Reduzierung der Materialkosten und des Gesamtgewichts des Drucks',
            con: 'Erfordert eine Nachbearbeitung zum Waschen und Härten interner Hohlräume'
          },
          {
            pro: 'Geringere Oberfläche pro Schicht reduziert die Abzugskräfte auf die FEP-Folie',
            con: 'Falsch platzierte Löcher können die visuelle Ästhetik des Modells ruinieren'
          },
          {
            pro: 'Reduziert thermische Spannungen und Verzug während des Nachhärtens',
            con: 'Risiko, dass eingeschlossenes flüssiges Harz später Risse im Teil verursacht'
          }
        ]
    },
    {
      type: 'title',
      text: 'Den Saugnapfeffekt bei hohlen Harzdrucken verstehen',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Wenn ein hohles Modell gedruckt wird, bildet es beim Eintauchen in die Wanne eine geschlossene Kammer. Wenn diese Kammer keine Belüftungslöcher aufweist, erzeugt jeder Hebezyklus ein starkes Teilvakuum (Saugnapfeffekt) zwischen der ausgehärteten Schicht und der Trennfolie. Diese Kraft zieht am Druck, was zu Schichtablösungen, Schichtlinien, Stützfehlern oder sogar zum vollständigen Abreißen des Modells von der Bauplatte führt. Das Hinzufügen von Belüftungslöchern ermöglicht das Eindringen von Luft, wodurch der Druckunterschied ausgeglichen und ein reibungsloser Abzugszyklus gewährleistet wird.'
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Gefahr von versiegelten Hohlräumen',
      html: 'Lassen Sie einen Hohlraum niemals vollständig versiegelt. Eingeschlossenes flüssiges Harz im Inneren eines gedruckten Teils baut die ausgehärteten Wände im Laufe der Zeit langsam ab, was schließlich dazu führt, dass das Modell reißt, giftiges Harz austritt oder vollständig zerfällt. Fügen Sie immer mindestens zwei Löcher hinzu, um das Innere zu waschen und mit einer internen UV-Lichtquelle auszuhärten.'
    },
    {
      type: 'title',
      text: 'Bewährte Verfahren zur Platzierung von Ablauflöchern',
      level: 2
    },
    {
      type: 'list',
      items: [
          'Platzieren Sie Ablauflöcher so nah wie möglich an der Bauplatte, damit das Harz frühzeitig während des Drucks entweichen kann.',
          'Verwenden Sie immer mindestens zwei Löcher: eines, damit das flüssige Harz abfließen kann, und ein weiteres, damit Luft einströmen kann.',
          'Richten Sie die Löcher auf nicht sichtbaren Oberflächen aus, z. B. auf der Unterseite von Basen oder hinter Verbindungsstellen, um die Ästhetik zu wahren.',
          'Stellen Sie sicher, dass jede isolierte interne Kammer oder Tasche über eigene Entwässerungslöcher verfügt.'
        ]
    },
    {
      type: 'title',
      text: 'Wie der Rechner die Geometriekomplexität berücksichtigt',
      level: 2
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
          {
            title: 'Einfache Geometrie',
            description: 'Modelle mit geringen Details, Kugeln oder Blöcke. Hält minimales Harz (ca. 5%) auf flachen Innenflächen zurück.'
          },
          {
            title: 'Mittlere Geometrie',
            description: 'Charaktermodelle oder standardmäßige mechanische Teile. Interne Stützen und Kurven halten mäßig Harz zurück (ca. 10%).',
            highlight: true
          },
          {
            title: 'Hohe Komplexität',
            description: 'Sehr detaillierte Miniaturen, Gitterstrukturen oder komplexe Hohlkanäle. Hält aufgrund von Kapillareffekten erheblich Harz zurück (ca. 15%+).'
          }
        ]
    },
    {
      type: 'title',
      text: 'Harzviskosität und Ablauflochgröße verstehen',
      level: 2
    },
    {
      type: 'table',
      headers: [
          'Harzklasse',
          'Viskositätsniveau',
          'Min. Lochdurchmesser',
          'Empfohlene Platzierung'
        ],
      rows: [
          [
              'Standardharz',
              'Niedrig-Mittel',
              '2,0 - 3,0 mm',
              'Basis oder versteckte flache Oberflächen'
            ],
          [
              'Zäh / Flexibel',
              'Mittel-Hoch',
              '3,0 - 4,5 mm',
              'Ecken und Verbindungen, um Ablösungen zu vermeiden'
            ],
          [
              'Technisch / Gießbar',
              'Sehr Hoch',
              '4,5 - 6,0 mm',
              'Direkte Sichtlinie für Schwerkraftentwässerung'
            ]
        ]
    },
    {
      type: 'title',
      text: 'Wann die Wandstärke über 1,5 mm erhöht werden sollte',
      level: 2
    },
    {
      type: 'tip',
      title: 'Maßstab und Funktion bestimmen die Wandstärke',
      html: 'Während 1,5 mm ein zuverlässiges Minimum für kleine Dekorteile ist, sollten Sie die Wandstärke für größere Drucke erhöhen. Für Teile, die höher als 150 mm sind, sollten Sie eine Wandstärke von 2,0 mm bis 2,5 mm anstreben. Für tragende mechanische Komponenten oder Teile, die mit flexiblen Harzen gedruckt werden, sollten die Wände 3,0 mm oder dicker sein, um ein strukturelles Versagen unter Last zu verhindern.'
    },
    {
      type: 'title',
      text: 'Technisches Glossar für den hohlen SLA-Druck',
      level: 2
    },
    {
      type: 'glossary',
      items: [
          {
            term: 'SLA-Aushöhlung',
            definition: 'Der Prozess des Umwandelns eines soliden 3D-Modells in eine hohle Schale mit einer bestimmten Wandstärke, um Harz und Druckzeit zu sparen.'
          },
          {
            term: 'Saugnapfeffekt',
            definition: 'Die Vakuumkraft, die entsteht, wenn ein geschlossener Hohlraum während des Drucks von der Trennfolie weggezogen wird.'
          },
          {
            term: 'Abzugskraft',
            definition: 'Die mechanische Spannung, die auf das Modell und die Stützen einwirkt, wenn die ausgehärtete Schicht vom Wannenboden getrennt wird.'
          },
          {
            term: 'Harzeinschluss',
            definition: 'Das Zurückhalten von flüssigem, nicht ausgehärtetem Harz in Innenecken, Stützen und Texturen aufgrund von Oberflächenspannung.'
          }
        ]
    },
    {
      type: 'title',
      text: 'Zusammenfassende Checkliste für erfolgreiche Hohldrucke',
      level: 2
    },
    {
      type: 'summary',
      title: 'Preflight SLA Checkliste',
      items: [
          'Überprüfen Sie, ob die Aushöhlungsstärke für den Modellmaßstab angemessen ist.',
          'Bestätigen Sie, dass mindestens zwei Ablauflöcher an den tiefsten Druckpunkten platziert sind.',
          'Suchen Sie nach isolierten internen Hohlräumen, die keine Belüftung aufweisen.',
          'Planen Sie das interne Waschen mit IPA und das interne UV-LED-Härten ein.'
        ]
    }
  ];

export const content: ToolLocaleContent & { ui: ResinHollowingDrainageCalculatorUI } = {
  slug, title, description,
  ui: {
    unitSystemLabel: 'Einheiten',
    metricLabel: 'Metrisch',
    imperialLabel: 'US',
    modelInputsLabel: 'Modelleingaben',
    volumeLabel: 'Gesamtmodellvolumen',
    heightLabel: 'Teilhöhe',
    complexityLabel: 'Geometriekomplexität',
    resinTypeLabel: 'Harztyp',
    simpleLabel: 'Einfach',
    moderateLabel: 'Mäßig',
    highLabel: 'Hoch',
    standardLabel: 'Standard',
    toughLabel: 'Zäh',
    engineeringLabel: 'Engineering',
    resultsLabel: 'Hohlkörper und Entwässerungsergebnis',
    wallThicknessLabel: 'Empfohlene Wandstärke',
    drainDiameterLabel: 'Ablaufdurchmesser',
    drainHoleCountLabel: 'Mindestlöcher',
    adjustedSavingLabel: 'Geschätzte Harzeinsparung',
    adjustedSavingNote: 'Angepasst an die Komplexität, um auf Innenflächen zurückgehaltenes flüssiges Harz zu berücksichtigen.',
    trapFactorLabel: 'Eingeschlossener Harzfaktor',
    trapFactorHelp: 'Dieser Faktor ändert sich mit der geometrischen Komplexität, um die Oberflächenspannung von viskosem Harz in blinden Hohlräumen zu kompensieren.',
    theoreticalSavingLabel: 'Theoretisches Hohlvolumen',
    trappedAllowanceLabel: 'Zurückgehaltener Harzzuschlag',
    savingUnitLabel: 'Einsparung',
    percentLabel: '%',
    cm3Unit: 'cm3',
    cubicInUnit: 'in3',
    mmUnit: 'mm',
    inchUnit: 'in',
    mlUnit: 'ml',
    drainPlacementNote: 'Hinweis: Ablauflöcher sollten nahe der Bauplattformseite und den niedrigsten Harzsammelpunkten in der Druckausrichtung positioniert werden.',
    vacuumWarning: 'Hohlkörper erfordern immer mindestens zwei Ablauflöcher, um das Vakuum gegen die Trennfolie zu brechen.',
    trappedResinWarning: 'Komplexe Geometrien halten flüssiges Harz im Inneren zurück; diese Berechnung schätzt den Zuschlag.',
    checklistTitle: 'Checkliste vor dem Slicen',
    checklistItems: ['Stellen Sie sicher, dass sich die Ablauflöcher im Bereich nahe der Bauplattform befinden.', 'Achten Sie darauf, dass die Wandstärke nicht unter 1,5 mm liegt.', 'Bestätigen Sie, dass sich keine geschlossenen Harzinseln oder Hohlräume im Modell befinden.'],
  },
  seo: seoData, faq: faqData, bibliography, howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
