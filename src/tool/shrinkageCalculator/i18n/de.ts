import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ShrinkageCalculatorUI } from '../ui';

const slug = '3d-druck-schrumpfungsrechner';
const title = '3D Schrumpfungsrechner: Skalierungsfaktor und Schrumpfung';
const description = 'Berechnen Sie, wie stark Sie Ihre 3D-Designs je nach Material (ABS, Nylon, ASA) skalieren sollten, um die thermische Schrumpfung auszugleichen und exakte Maße zu erhalten.';

const faqData = [
  {
    question: 'Warum schrumpft ABS stärker als PLA?',
    answer: 'ABS ist ein amorphes Polymer, das höhere Temperaturen zum Extrudieren benötigt. Beim Abkühlen von 250°C auf Raumtemperatur ist der thermische Gradient größer, was dazu führt, dass die Moleküle enger zusammenrücken als bei PLA.',
  },
  {
    question: 'Wann sollte ich eine manuelle Kalibrierung verwenden?',
    answer: 'Sie sollten sie immer dann verwenden, wenn Sie die Filamentmarke wechseln oder wenn Sie mechanische Toleranzen unter 0,1 mm benötigen. Der Schrumpfungskoeffizient kann sogar zwischen verschiedenen Farben derselben Marke variieren.',
  },
  {
    question: 'Beeinflusst das Infill die Schrumpfung?',
    answer: 'Ja. Je höher die Infill-Dichte, desto größer ist die Materialmenge, die beim Abkühlen eine Kraft zur Mitte des Teils hin ausübt. Massive Teile neigen dazu, etwas stärker zu schrumpfen als hohle Teile.',
  },
];

const howToData = [
  {
    name: 'Material auswählen',
    text: 'Wählen Sie aus voreingestellten Materialien (ABS, ASA, Nylon usw.), um branchenübliche Koeffizienten anzuwenden.',
  },
  {
    name: 'Mit einem realen Teil kalibrieren',
    text: 'Wenn Sie absolute Präzision benötigen, drucken Sie einen 100-mm-Würfel, messen Sie ihn nach dem Abkühlen und geben Sie die Daten im Kalibrierungsmodus ein.',
  },
  {
    name: 'Faktor in den Slicer übertragen',
    text: 'Kopieren Sie den resultierenden Skalierungsprozentsatz und wenden Sie ihn auf die entsprechenden Achsen Ihrer Slicer-Software (Cura, PrusaSlicer) an.',
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

export const content: ToolLocaleContent<ShrinkageCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    tabPresets: 'Materialeinstellungen',
    tabCalibration: 'Manuelle Kalibrierung',
    labelDefaultMaterial: 'Standardmaterial',
    labelEstimatedShrinkage: 'Geschätzte Schrumpfung',
    unitPercent: '%',
    labelDesignSize: 'Designmaß (Slicer)',
    labelRealSize: 'Maß des gedruckten Teils (Real)',
    unitMm: 'mm',
    labelAxesCompensation: 'Achsenkompensation',
    labelAxisXY: 'X/Y',
    labelAxisZ: 'Z',
    textZWarning: '* Die Z-Achse schrumpft aufgrund der Schichthaftung normalerweise weniger.',
    labelRecommendationTitle: 'Technische Empfehlung',
    labelResultSlicerScale: 'SKALIERUNGSPROZENTSATZ (SLICER)',
    labelResultFactor: 'MULTIPLIER-FAKTOR',
    btnCopy: 'Prozentsatz kopieren',
    btnCopied: 'Kopiert!',
    recommendations: {
      'ABS': 'Eine Kammertemperatur von mindestens 40°C wird empfohlen, um zusätzliches Warping durch Schrumpfung zu minimieren.',
      'ASA': 'Hervorragende UV-Beständigkeit. Reduzieren Sie die Bauteilkühlung, um die strukturelle Haftung zu verbessern.',
      'Nylon': 'Sehr hygroskopisches Material. Vor dem Drucken 6-8h bei 80°C trocknen, um Blasenbildung zu vermeiden.',
      'PETG': 'Geringe Schrumpfung. Verwenden Sie einen Flow-Multiplikator von 95-98%, wenn Sie Überextrusion in massiven Teilen haben.',
      'PLA': 'Minimale Schrumpfung. Sorgen Sie für einen guten Luftstrom (100% Bauteillüfter) für feine Details.'
    }
  },
  seo: [
    {
      type: 'title',
      text: '3D-Druck Schrumpfungsrechner: Maßhaltigkeit im Fokus',
      level: 1,
    },
    {
      type: 'paragraph',
      html: 'Wenn Sie ein Liebhaber des <strong>3D-Drucks</strong> sind, standen Sie wahrscheinlich schon vor diesem Problem: Sie entwerfen ein Teil mit perfekten Maßen (zum Beispiel einen Würfel von 20x20x20 mm), drucken es aus und stellen beim Messen mit dem Messschieber fest, dass es nur 19,7 mm misst. Was ist passiert? Die Antwort lautet: <strong>Materialschrumpfung</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Schrumpfung ist ein unvermeidliches physikalisches Phänomen, das auftritt, wenn Thermoplaste vom geschmolzenen Zustand (bei hohen Temperaturen) in den festen Zustand bei Raumtemperatur übergehen. Beim Abkühlen organisieren sich die Moleküle neu und "ziehen sich zusammen", was das Gesamtvolumen des Teils verringert. Unser <strong>Schrumpfungsrechner</strong> soll Ihnen helfen, diese Veränderung vorherzusehen und die Skalierung in Ihrem Slicer so anzupassen, dass Ihre Teile beim ersten Versuch passen.',
    },
    {
      type: 'title',
      text: 'Warum schrumpfen Kunststoffe?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Beim FDM-Druck (Fused Deposition Modeling) tragen wir Schichten aus heißem Kunststoff (zwischen 200°C und 300°C) auf eine Oberfläche auf. Während das Material abkühlt, unterliegt es dem sogenannten <strong>Wärmeausdehnungskoeffizienten</strong>. Grundsätzlich hält thermische Energie die Moleküle auseinander; wenn diese Energie verschwindet, ziehen sie sich durch intermolekulare Kräfte näher zusammen.',
    },
    {
      type: 'paragraph',
      html: 'Nicht alle Materialien verhalten sich gleich. Amorphe Kunststoffe (wie PLA) haben eine ungeordnete Struktur, die dazu neigt, weniger zu schrumpfen. Im Gegensatz dazu haben Kunststoffe, die zur Kristallbildung neigen oder sehr hohe Temperaturen erfordern (wie ABS oder Nylon), eine wesentlich aggressivere und schwerer zu kontrollierende Schrumpfung.',
    },
    {
      type: 'title',
      text: 'Gängige Materialien und ihre Schrumpfungsbereiche',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'ABS (Acrylnitril-Butadien-Styrol): 0,8% – 2,0%. Es ist eines der schwierigsten Materialien aufgrund seiner hohen Schrumpfung, die oft zu "Warping" (Verformung der Ecken) führt.',
        'ASA: 0,5% – 0,9%. Eine UV-beständige Alternative zu ABS mit etwas geringerer Schrumpfung.',
        'Nylon (PA): 0,7% – 2,5%. Je nachdem, ob es mit Kohle- oder Glasfaser verstärkt ist, kann die Schrumpfung drastisch variieren.',
        'PETG: 0,2% – 0,5%. Sehr dimensionsstabil, ideal für mechanische Teile, die keine thermische Beständigkeit von ABS erfordern.',
        'PLA: 0,1% – 0,3%. Der Goldstandard für einfache Handhabung; die Schrumpfung ist für die meisten Anwendungen fast vernachlässigbar.',
      ],
    },
    {
      type: 'title',
      text: 'Wie man den Skalierungsfaktor berechnet',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Viele Anwender machen den Fehler, einfach den Prozentsatz zu addieren (wenn 2 % fehlen, skalieren sie auf 102 %). Mathematisch gesehen muss die Skalierung jedoch anders sein, um einen Verlust auszugleichen. Die korrekte Formel, die unser Rechner verwendet, lautet: <br><strong>Skalierungsfaktor = 1 / (1 - S)</strong>',
    },
    {
      type: 'paragraph',
      html: 'Dabei ist <strong>S</strong> der Schrumpfungsprozentsatz in Dezimalform (z. B. 0,02 für 2 %). Bei einem Material, das um 2 % schrumpft, beträgt der Skalierungsfaktor beispielsweise 1,0204, was bedeutet, dass wir im Slicer (Cura, PrusaSlicer, Bambu Studio) die Skalierung auf <strong>102,04 %</strong> einstellen müssen.',
    },
    {
      type: 'title',
      text: 'Manuelle Kalibrierung: Wunschmaß vs. Reales Maß',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Der umgekehrte Kalibrierungsprozess ist einfach: Drucken Sie ein Testobjekt mit einem bekannten Maß (z. B. einen 100-mm-Kalibrierungswürfel). Sobald es vollständig abgekühlt ist (mindestens 30 Minuten warten ist entscheidend), messen Sie das Teil mit einem digitalen Messschieber. Geben Sie beide Werte in den Rechner ein, und dieser liefert Ihnen den exakten Anpassungsprozentsatz für diese Filamentrolle.',
    },
    {
      type: 'title',
      text: 'Nicht-gleichmäßige Schrumpfung: Das Problem der X-, Y- und Z-Achsen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Beim 3D-Druck ist die Physik nicht in alle Richtungen gleich. Da Schichten übereinander aufgetragen werden, begrenzt die <strong>Schichthaftung</strong> in der Z-Achse normalerweise die vertikale Schrumpfung. In der Regel werden Sie feststellen, dass Maße in der horizontalen Ebene (X- und Y-Achsen) mehr Kompensation erfordern als die Höhe (Z-Achse).',
    },
    {
      type: 'tip',
      title: 'Profi Tipp',
      html: '<p>Wenn Sie mit Nylon oder technischen Materialien arbeiten, messen Sie das Teil immer 24 Stunden nach dem Drucken. Manche Kunststoffe absorbieren Feuchtigkeit aus der Umgebung und können nach dem Abkühlen leicht "aufquellen", was das endgültige Maß verändert.</p>',
    },
    {
      type: 'title',
      text: 'Faktoren, die die endgültige Präzision beeinflussen',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Extrudertemperatur: Bei höheren Temperaturen tritt das Material stärker gedehnt ein, leidet aber meist auch unter einer plötzlichen Abkühlung.',
        'Betttemperatur: Ein heißes Bett verhindert, dass die Basis des Teils schneller schrumpft als die Oberseite, was Warping reduziert.',
        'Infill-Dichte: Sehr dichte Teile haben mehr Kunststoffmasse, die eine interne Schrumpfungskraft zur Mitte hin ausübt.',
        'Bauteillüfter: Bei Materialien wie ABS kann ein zu starker Lüfter Risse und eine übermäßige, ungleichmäßige Schrumpfung verursachen.',
      ],
    },
  ],
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Quellenangaben',
  bibliography: [
    {
      name: 'Simplify3D: Maßhaltigkeit und Schrumpfung',
      url: 'https://www.simplify3d.com/resources/print-quality-troubleshooting/dimensional-accuracy/',
    },
    {
      name: 'Prusa Research: Materialtabelle und Schrumpfungsfaktoren',
      url: 'https://help.prusa3d.com/materials',
    },
    {
      name: 'MatterHackers: Materialschrumpfung im 3D-Druck verstehen',
      url: 'https://www.matterhackers.com/articles/how-to-fix-shrinkage-and-warping',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
