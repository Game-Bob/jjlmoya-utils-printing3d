import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WarpingRiskSimulatorUI } from '../ui';

const slug = 'warping-risiko-simulator-3d-druck';
const title = 'Warping Risikosimulator für den 3D Druck';
const description = 'Schätzen Sie das Abheben der ersten Schicht und das Warping-Risiko anhand von Material-schrumpfung, Grundfläche, längster Diagonale, Betttemperatur, Raumtemperatur und Gehäusebedingungen.';

const faqData = [
  {
    question: 'Warum beeinflusst die längste Diagonale das Warping stärker als die Grundfläche?',
    answer: 'Die längste Diagonale stellt den längsten durchgehenden Schrumpfungspfad dar. Ein langes Bauteil kann genügend lineare Schrumpfung ansammeln, um Ecken anzuheben, selbst wenn die gesamte Kontaktfläche groß erscheint.',
  },
  {
    question: 'Garantiert dieser Simulator, dass mein Druck nicht verzieht?',
    answer: 'Nein. Es handelt sich um eine Risikoschätzung. Feuchtes Filament, verschmutzte Bauplatten, erste Schichthöhe, Zugluft, Bauteilgeometrie und Kühlungseinstellungen des Slicers können das Ergebnis verändern.',
  },
  {
    question: 'Welche Materialien benötigen am meisten ein Gehäuse?',
    answer: 'ABS, ASA, Nylon und PC sind in diesem Modell am gehäuseempfindlichsten, da sie höhere Verarbeitungstemperaturen, stärkere Schrumpfung und größere Kühlspannung kombinieren.',
  },
  {
    question: 'Wie wird die Brim-Breite geschätzt?',
    answer: 'Der Simulator beginnt mit fünf Prozent der längsten Diagonale und skaliert sie basierend auf dem berechneten Risiko, dann wird das Ergebnis auf praktische Slicer-Werte begrenzt.',
  },
];

const howToData = [
  { name: 'Wählen Sie das Material', text: 'Wählen Sie PLA, PETG, ABS, ASA, Nylon, PC oder TPU, damit der Simulator eine Schrumpfungsklasse anwenden kann.' },
  { name: 'Geben Sie Grundfläche und Diagonale ein', text: 'Verwenden Sie die Oberfläche, die das Bett berührt, und den längsten Eck-zu-Eck-Abstand des Bauteils.' },
  { name: 'Stellen Sie die thermische Umgebung ein', text: 'Geben Sie Bett- und Raumtemperatur ein und geben Sie an, ob der Drucker ein geschlossenes Gehäuse hat.' },
  { name: 'Kopieren Sie die Slicer-Einstellungen', text: 'Verwenden Sie die vorgeschlagenen Brim-, Haftungs-, Kühlungs- und Gehäuseeinstellungen als Startprofil.' },
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'de',
};

export const content: ToolLocaleContent<WarpingRiskSimulatorUI> = {
  slug,
  title,
  description,
  ui: {
    unitSystemLabel: 'Einheitensystem',
    unitMetric: 'Metrisch',
    unitImperial: 'Imperial',
    unitCelsius: '°C',
    unitFahrenheit: '°F',
    unitMillimeter: 'mm',
    unitInch: 'in',
    noBrim: '0',
    materialLabels: {
      PLA: 'PLA',
      PETG: 'PETG',
      ABS: 'ABS',
      ASA: 'ASA',
      Nylon: 'Nylon',
      PC: 'PC',
      TPU: 'TPU',
    },
    material: 'Material',
    footprintArea: 'Grundfläche',
    footprintHelp: 'Fläche, die tatsächlich die Bauplatte berührt, nicht die Gesamtoberfläche des Modells.',
    diagonal: 'Längste Diagonale',
    diagonalHelp: 'Längster Eck-zu-Eck-Abstand der ersten Schicht. Dies ist der Hauptvektor der thermischen Spannung.',
    bedTemperature: 'Betttemperatur',
    bedTemperatureWarning: 'Temperaturwarnung',
    ambientTemperature: 'Raumtemperatur',
    chamber: 'Geschlossenes Gehäuse',
    chamberOn: 'Geschlossen oder aktiv abgeschirmt',
    chamberOff: 'Offener Drucker',
    riskLow: 'Niedrig',
    riskMedium: 'Mittel',
    riskHigh: 'Hoch',
    riskCritical: 'Kritisch',
    riskIndex: 'Risikoindex',
    thermalIndex: 'Thermischer Spannungsindex',
    deltaT: 'Delta T',
    brimRecommendation: 'Brim-Empfehlung',
    adhesionDiagnosis: 'Haftungsdiagnose',
    adhesionStrength: 'Haftfestigkeitsleiter',
    criticalWarnings: 'Kritische Warnungen',
    whyDiagonalMatters: 'Warum die Diagonale wichtig ist',
    recommendedSettings: 'Empfohlene Slicer-Einrichtung',
    copySettings: 'Einstellungen kopieren',
    copied: 'Kopiert',
    simulatorNotice: 'Dies ist eine Risikoschätzung, keine Erfolgsgarantie. Filamentfeuchtigkeit, Bettverschmutzung, Z-Offset, Zugluft und Kühlungsänderungen bleiben externe Variablen.',
    warnings: {
      openTechnicalMaterial: '{material} ohne geschlossenes Gehäuse ist eine schwerwiegende Warping-Bedingung.',
      bedTemperatureHigh: 'Die Betttemperatur für {material} liegt über dem empfohlenen Bereich von {min}-{max} {unit}. Erwarten Sie Erweichung, Elefantenfuß oder Haftungsartefakte.',
      bedTemperatureLow: 'Die Betttemperatur für {material} liegt unter dem empfohlenen Bereich von {min}-{max} {unit}. Die Haftung der ersten Schicht könnte für diese Geometrie zu schwach sein.',
      narrowFootprint: 'Die Grundfläche ist im Vergleich zur Diagonale schmal, daher kann sich das Abheben der Ecken schnell aufbauen.',
      highDeltaT: 'Der Unterschied zwischen Bett- und Raumtemperatur ist sehr hoch; kontrollieren Sie den Luftstrom und die Abkühlrate.',
    },
    diagnosis: {
      critical: 'Brim ist obligatorisch. Verwenden Sie eine spezielle Haftfläche und vermeiden Sie es, dieses Material offen zu drucken.',
      highEnclosed: 'Breiter Brim und Haftmittel werden dringend empfohlen.',
      highOpen: 'Verwenden Sie Brim, Haftmittel und ein Gehäuse, bevor Sie beginnen.',
      mediumEasyMaterial: 'Verwenden Sie eine saubere PEI-Oberfläche; Brim ist für scharfe Ecken optional.',
      medium: 'Verwenden Sie Brim oder Mouse Ears an den Ecken und überprüfen Sie die Betthaftung.',
      low: 'Sicher unter normalen Bedingungen der ersten Schicht.',
    },
    adhesionOptions: {
      low: ['Sauberes PEI oder strukturierte Folie: normale Haftung, leichteste Entfernung.'],
      medium: ['Klebestift oder PVA-Trennschicht: leichte zusätzliche Haftung und sicherere PETG-Entnahme.', 'Mouse Ears: lokalisierte Haftung für Ecken ohne vollständigen Brim.'],
      high: ['Breiter Brim plus Klebestift: breite mechanische Unterstützung mit moderater Reinigung.', 'Magigoo oder ähnliches Haftmittel: stärkere Haftung für ABS, ASA, PETG und Nylon-Varianten.'],
      criticalDefault: ['Vollbreiter Brim: maximale Grundfläche der ersten Schicht.', 'Hochfestes Haftmittel: verwenden Sie PEI plus ein hochfestes Haftmittel.', 'Gehäuse: erforderlich, damit das Haftmittel konsistent wirkt.'],
      criticalTechnical: ['Vollbreiter Brim: maximale Grundfläche der ersten Schicht.', 'Hochfestes Haftmittel: verwenden Sie ein materialspezifisches Haftmittel für Nylon oder PC.', 'Gehäuse: erforderlich, damit das Haftmittel konsistent wirkt.'],
    },
    slicerSettings: {
      brimWidth: 'Brim-Breite: {value}',
      bedAdhesion: 'Betthaftung: {value}',
      lowAdhesion: 'Sauberes PEI oder strukturierte Folie',
      highAdhesion: 'PEI plus Klebestift, Magigoo oder materialspezifisches Haftmittel',
      cooling: 'Kühlung: {value}',
      normalCooling: 'Normale Bauteilkühlung nach Schicht 3',
      technicalCooling: 'Bauteilkühlung für die ersten 5-8 Schichten ausgeschaltet',
      enclosedChamber: 'Halten Sie das Gehäuse geschlossen, bis das Bauteil unter den Glasübergang abgekühlt ist',
      openChamber: 'Schützen Sie den Drucker vor Zugluft und Raumluftströmung',
      skirtEnough: '0 mm, Skirt reicht aus',
    },
    diagonalExplanation: 'Die längste Diagonale verhält sich wie der Hauptspannungsvektor: beim Abkühlen des Bauteils sammelt sich die Schrumpfung entlang dieser Spannweite und belastet die Ecken, selbst wenn die Grundfläche großzügig erscheint.',
  },
  seo: [
    { type: 'title', text: 'Wie Sie das Warping-Risiko vor dem Slicen eines 3D-Drucks abschätzen', level: 2 },
    {
      type: 'paragraph',
      html: 'Warping ist nicht nur ein Materialproblem und nicht nur ein Betthaftungsproblem. Es tritt auf, wenn eine gedruckte Schicht abkühlt, sich zusammenzieht und genügend innere Spannung erzeugt, um die Haftung der ersten Schicht zu überwinden. Eine kleine ABS-Halterung kann versagen, weil das Polymer stark schrumpft; ein großes PLA-Schild kann versagen, weil die Diagonale lang genug ist, um Schrumpfung über eine weite Spannweite zu akkumulieren. Die nützliche Frage ist daher nicht einfach <strong>wird dieses Material sich verziehen?</strong> sondern <strong>erzeugen diese Geometrie und thermische Umgebung mehr Zugkraft, als die Bauplatte widerstehen kann?</strong>',
    },
    {
      type: 'paragraph',
      html: 'Dieser Simulator verwendet einen heuristischen Thermischen Spannungsindex: <strong>Material-schrumpfungsfaktor mal längste Diagonale mal Bett-Raum-Temperaturdifferenz, geteilt durch Grundfläche</strong>. Die Formel ist bewusst praktisch gehalten. Sie erhebt keinen Anspruch auf Finite-Elemente-Analyse, kombiniert aber die Variablen, die Bediener vor dem Druck messen können: Materialfamilie, Kontaktfläche, längste lineare Spannweite, Betttemperatur, Raumtemperatur und ob der Drucker geschlossen ist.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Verwenden Sie das Ergebnis als präventives Signal',
      badge: 'Schätzung',
      html: 'Ein niedriger Wert bedeutet, dass der Druck unwahrscheinlich abhebt, wenn die erste Schicht sauber und gut eingestellt ist. Ein hoher oder kritischer Wert bedeutet, dass das Slicer-Profil vor dem Druck geändert werden sollte: breiterer Brim, Haftmittel, weniger Kühlung, Zugluftschutz oder ein anderes Material. Der Simulator kann kein feuchtes Filament, öliges PEI, eine zu weit vom Bett entfernte Düse oder ein Bauteil mit winzigen Kontaktstellen an den Ecken erkennen.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '5%', label: 'anfängliche Brim-Breite als Bruchteil der längsten Diagonale', icon: 'mdi:ruler' },
        { value: '1,85x', label: 'schwerer Offengehäuse-Multiplikator für ABS, ASA, Nylon und PC', icon: 'mdi:home-alert' },
        { value: '0-100', label: 'Risikoskala abgebildet vom Thermischen Spannungsindex', icon: 'mdi:gauge' },
      ],
    },
    { type: 'title', text: 'Warum die längste Diagonale gefährlicher sein kann als die Fläche', level: 2 },
    {
      type: 'paragraph',
      html: 'Die Grundfläche zeigt Ihnen, wie viel Oberfläche für die Haftung zur Verfügung steht. Die Diagonale zeigt Ihnen, wie weit thermische Schrumpfung akkumulieren kann, bevor sie eine Ecke oder ein dünnes Ende erreicht. Zwei Teile können die gleiche Fläche haben und sich sehr unterschiedlich verhalten: eine kompakte quadratische Basis hat kurze Schrumpfungspfade in alle Richtungen, während ein langer schmaler Streifen die Schrumpfung entlang einer einzigen Linie konzentriert und versucht, sich an den Enden abzulösen.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Kompakte Grundfläche',
          description: 'Eine quadratische oder runde Basis verteilt die Schrumpfung über viele kurze Pfade. Ecken sind näher am Zentrum, daher ist der Hebelarm zum Abheben kleiner.',
          icon: 'mdi:crop-square',
          points: ['Bessere Lastverteilung', 'Geringere Eckenhebelwirkung', 'Brim bei einfachen Materialien oft optional'],
        },
        {
          title: 'Langdiagonale Grundfläche',
          description: 'Ein langes Rechteck, Rahmen, Blatt, Gehäusepaneel oder eine Schiene erlaubt Schrumpfungsaufbau entlang einer dominanten Richtung. Enden und Ecken erhalten die höchste Abziehkraft.',
          icon: 'mdi:vector-line',
          highlight: true,
          points: ['Höhere akkumulierte Spannung', 'Ecken heben zuerst ab', 'Brim oder Mouse Ears oft erforderlich'],
        },
      ],
    },
    {
      type: 'tip',
      title: 'So messen Sie die Diagonale schnell',
      html: 'In der Slicer-Vorschau betrachten Sie die erste Schicht von oben und messen den längsten Eck-zu-Eck-Abstand des Teils, das das Bett berührt. Verwenden Sie bei einer rechteckigen Grundfläche die Diagonale des Rechtecks, nicht nur die X- oder Y-Länge. Verwenden Sie bei einem unregelmäßigen Teil die längste gerade Spannweite zwischen zwei äußeren Punkten.',
    },
    {
      type: 'table',
      headers: ['Geometriemuster', 'Typisches Symptom', 'Vorbeugende Maßnahme'],
      rows: [
        ['Lange dünne Schiene', 'Enden heben ab, während die Mitte haftet', 'Brim oder Mouse Ears an beiden Enden verwenden'],
        ['Großes flaches Panel', 'Ecken krümmen sich allmählich nach oben', 'Gehäuse, langsamere Kühlung und Haftmittel verwenden'],
        ['Kleines hohes Teil', 'Basis haftet, aber Turm wackelt', 'Warping ist nicht das Hauptrisiko; Stabilität verbessern'],
        ['Offener Rahmen', 'Innenecken ziehen nach innen', 'Brim hinzufügen, erste Schichtbreite erhöhen, Lüfter reduzieren'],
      ],
    },
    { type: 'title', text: 'Vom Simulator verwendete Material-schrumpfungsklassen', level: 2 },
    {
      type: 'paragraph',
      html: 'Verschiedene Thermoplaste schrumpfen unterschiedlich stark beim Abkühlen von der Extrusionstemperatur auf Raumtemperatur. PLA und TPU sind im Allgemeinen verzeihend, da sie bei niedrigeren Temperaturen drucken und weniger Kühlspannung erzeugen. PETG liegt in der Mitte: es haftet stark, kann aber immer noch an scharfen Ecken ziehen. ABS, ASA, Nylon und PC werden als technische Hochrisikomaterialien behandelt, da sie höhere Extrusionstemperaturen, stärkere Schrumpfung und einen größeren Bedarf an einem warmen, stabilen Gehäuse kombinieren.',
    },
    {
      type: 'table',
      headers: ['Material', 'Schrumpfungsklasse', 'Übliche Bettstrategie', 'Gehäuseempfindlichkeit'],
      rows: [
        ['PLA', 'Niedrig', 'Sauberes PEI, moderates Bett', 'Niedrig'],
        ['TPU', 'Niedrig', 'Saubere Folie, übermäßiges Quetschen vermeiden', 'Niedrig'],
        ['PETG', 'Mittel', 'Texturiertes PEI oder Trennschicht', 'Mittel'],
        ['ABS', 'Hoch', 'PEI plus Haftmittel oder ABS-Slurry wo angemessen', 'Sehr hoch'],
        ['ASA', 'Hoch', 'PEI plus Haftmittel, kontrollierte Kühlung', 'Sehr hoch'],
        ['Nylon', 'Hoch', 'Materialspezifisches Haftmittel, trockenes Filament', 'Sehr hoch'],
        ['PC', 'Hoch', 'Hochtemperaturbett und Haftmittel', 'Sehr hoch'],
      ],
    },
    {
      type: 'proscons',
      title: 'Materialwechsel statt Warping Bekämpfung',
      items: [
        { pro: 'Wechsel von ABS zu ASA kann die Außenbeständigkeit verbessern und ähnliches thermisches Verhalten beibehalten.', con: 'ASA benötigt weiterhin Gehäusedisziplin und kann sich bei langen Teilen verziehen.' },
        { pro: 'Wechsel von ABS zu PETG reduziert die Schrumpfung und ist oft ausreichend für Halterungen und Gehäuse.', con: 'PETG hat eine geringere Hitzebeständigkeit und eine andere Steifigkeit als ABS oder PC.' },
        { pro: 'Fasergefülltes Nylon kann einige Schrumpfungspfade reduzieren und die Steifigkeit verbessern.', con: 'Es erfordert Trocknung, verschleißfeste Düsen und strenge Haftungskontrolle.' },
      ],
    },
    { type: 'title', text: 'Delta T: Warum Bett- und Raumtemperatur beide wichtig sind', level: 2 },
    {
      type: 'paragraph',
      html: 'Der Simulator verwendet <strong>Delta T</strong> als Betttemperatur minus Raumtemperatur. Dies ist nicht dasselbe wie die Düsentemperatur, aber ein nützlicher Indikator für den thermischen Gradienten, den der untere Teil des Bauteils erfährt. Ein heißes Bett reduziert die frühe Schrumpfung an der Grenzfläche, aber ein sehr kalter Raum oder starker Luftstrom können dennoch Wärme aus den oberen Schichten ziehen und einen Spannungsgradienten zwischen der verankerten Basis und dem abkühlenden Bauteilkörper erzeugen.',
    },
    {
      type: 'paragraph',
      html: 'Für PLA kann ein moderates Delta T harmlos sein, da das Material weniger aggressiv schrumpft. Für ABS, ASA, Nylon und PC kann dieselbe Geometrie bei derselben Betttemperatur versagen, wenn der Drucker Zugluft ausgesetzt ist. Deshalb wendet die Berechnung einen schweren Multiplikator an, wenn diese technischen Materialien ohne geschlossenes Gehäuse gedruckt werden.',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Offener Drucker mit ABS, ASA, Nylon oder PC',
      badge: 'Kritischer Zustand',
      html: 'Wenn das Gehäuse offen ist, ist der Druck lokaler Kühlung, Türbewegung, HVAC-Luftstrom und schnellen Schichttemperaturänderungen ausgesetzt. Die erste Schicht kann in den ersten zwanzig Minuten perfekt aussehen und sich dennoch später ablösen, da das Bauteil mehr Schrumpfungsspannung speichert.',
    },
    {
      type: 'list',
      icon: 'mdi:thermometer',
      items: [
        'Ein wärmeres Gehäuse reduziert den Temperaturunterschied zwischen neuen und älteren Schichten.',
        'Ein geschlossenes Gehäuse verlangsamt auch die Abkühlung nach dem Druck, was plötzliches Eckablösen reduziert.',
        'Zugluftschilde helfen, sind aber nicht gleichwertig mit einem stabilen beheizten Gehäuse für PC oder Nylon.',
        'Eine alleinige Erhöhung der Betttemperatur kann die Haftung verbessern, kann aber auch den Elefantenfuß bei weichen Materialien verstärken.',
      ],
    },
    { type: 'title', text: 'Wie der Thermische Spannungsindex interpretiert wird', level: 2 },
    {
      type: 'paragraph',
      html: 'Der Thermische Spannungsindex ist ein relativer Wert, keine gemessene Kraft in Newton. Er steigt, wenn Schrumpfungsfaktor, Diagonale oder Delta T steigen. Er fällt, wenn die Grundfläche zunimmt, da mehr Kontaktfläche dieselbe Zuglast verteilen kann. Der Wert wird dann auf einen Risikoprozentsatz von 0-100 abgebildet, damit verschiedene Druckeinstellungen schnell verglichen werden können.',
    },
    {
      type: 'table',
      headers: ['Risikobereich', 'Bedeutung', 'Empfohlene Reaktion'],
      rows: [
        ['0-31%', 'Niedrig', 'Bett reinigen, erste Schicht prüfen, keine spezielle Haftung für die meisten Formen nötig'],
        ['32-57%', 'Mittel', 'Brim an scharfen Ecken verwenden, frühen Lüfter reduzieren, Grundflächenkontakt prüfen'],
        ['58-81%', 'Hoch', 'Breiten Brim, Haftmittel, Gehäuse wenn nötig verwenden, Zugluft vermeiden'],
        ['82-100%', 'Kritisch', 'Als wahrscheinlich verzugsgefährdet behandeln, es sei denn, Geometrie, Material oder Umgebung ändern sich'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:calculator-variant',
      title: 'Warum durch die Grundfläche teilen?',
      html: 'Eine größere Grundfläche gibt dem Bett mehr Möglichkeit, der Abziehkraft zu widerstehen. Das Modell belohnt Teile mit breitem, durchgehendem Kontakt und bestraft schmale Basen, kleine Füße und lange Teile, die nur einen dünnen Streifen auf der Oberfläche haben.',
    },
    { type: 'title', text: 'Brim-Breite, Mouse Ears und Haftmittelauswahl', level: 2 },
    {
      type: 'paragraph',
      html: 'Die Brim-Empfehlung beginnt bei <strong>Diagonale x 0,05</strong>. Eine Diagonale von 180 mm beginnt daher nahe 9 mm vor der Risikoskalierung. In der Praxis sollte Brim nicht allein nach Material gewählt werden. Ein kurzer PLA-Würfel benötigt möglicherweise keinen Brim, während ein langes PLA-Schwert, -Schild oder eine -Schiene von einem bescheidenen Brim profitieren kann, da die Diagonale der dominante Spannungspfad ist.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: 'Brim', description: 'Beste Allzweckwahl zur Erhöhung des Erstschichtkontakts um das gesamte Teil.', icon: 'mdi:border-outside', points: ['Leicht zu entfernen bei PLA', 'Sehr nützlich an ABS-Ecken'] },
        { title: 'Mouse Ears', description: 'Lokale runde Pads an Ecken oder dünnen Enden, wo das Abheben beginnt.', icon: 'mdi:circle-outline', points: ['Weniger Reinigung', 'Gut für Schienen und Rahmen'] },
        { title: 'Haftmittel', description: 'Verbessert die chemische oder mechanische Haftung zwischen Polymer und Bauoberfläche.', icon: 'mdi:water-plus', points: ['Nützlich für Nylon und PC', 'Oberflächenspezifische Wahl ist wichtig'] },
      ],
    },
    {
      type: 'tip',
      title: 'Machen Sie Brim nicht zur einzigen Lösung',
      html: 'Wenn der Simulator ein kritisches Risiko meldet, kann ein breiterer Brim das Versagen verzögern, aber nicht die zugrunde liegende Spannung beseitigen. Kombinieren Sie Brim mit Gehäuse, langsamerer Anfangskühlung, einem saubereren Bett und Geometrieänderungen wie abgerundeten Ecken oder geteilten Teilen.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Warping', definition: 'Aufwärtsverformung durch Kühlschrumpfung, die die Betthaftung überwindet.' },
        { term: 'Grundfläche', definition: 'Die Fläche des Modells, die auf der ersten Schicht die Bauplatte berührt.' },
        { term: 'Längste Diagonale', definition: 'Die längste gerade Spannweite über die Kontaktform der ersten Schicht.' },
        { term: 'Delta T', definition: 'Der Temperaturunterschied zwischen dem Bett und der umgebenden Raumluft.' },
        { term: 'Brim', definition: 'Zusätzliche Erstschicht-Umfangsloops, die um das Teil gedruckt werden, um die Haftung zu erhöhen.' },
      ],
    },
    { type: 'title', text: 'Praktische Slicer-Einstellungen für Hochrisikoteile', level: 2 },
    {
      type: 'list',
      icon: 'mdi:tune',
      items: [
        'Erhöhen Sie die Linienbreite der ersten Schicht, um mehr Kontakt zu schaffen, vermeiden Sie jedoch übermäßiges Z-Quetschen, das Riefen verursacht.',
        'Verwenden Sie eine langsamere erste Schicht, damit das Polymer auf dem Bett haftet, bevor spätere Schichten daran ziehen.',
        'Deaktivieren oder reduzieren Sie die Bauteilkühlung für ABS, ASA, Nylon und PC während der ersten Schichten.',
        'Fügen Sie einen Brim hinzu, der breit genug ist, um scharfe Ecken und schmale Enden zu überragen.',
        'Vermeiden Sie es, große technische Materialteile in der Nähe von Gehäusetüren, Lüftungsschlitzen oder kalten Seitenwänden zu platzieren.',
      ],
    },
    {
      type: 'message',
      title: 'Geometrieänderungen, die das Risiko reduzieren',
      ariaLabel: 'Ideen zur Geometrieminderung',
      html: 'Runden Sie scharfe Ecken ab, teilen Sie sehr lange Paneele in kürzere Abschnitte, fügen Sie temporäre Laschen an dünnen Enden hinzu, orientieren Sie das Teil so, dass der längste Spannungspfad kürzer ist, oder fügen Sie Opferpads hinzu, die nach dem Druck abgeschnitten werden können. Diese Änderungen wirken oft besser als einfach die Betttemperatur zu erhöhen.',
    },
    {
      type: 'summary',
      title: 'Schnelle Interpretationscheckliste',
      items: [
        'Hohes Schrumpfmaterial plus offenes Gehäuse ist das stärkste Warnsignal.',
        'Lange Diagonale plus kleine Grundfläche bedeutet, dass Ecken und Enden Brim oder Mouse Ears verdienen.',
        'Hohe Betttemperatur annulliert keinen kalten Raum oder zugige Umgebung.',
        'Das Ergebnis ist eine Planungsschätzung; Erstschichtkalibrierung und Filamentzustand entscheiden immer noch über den endgültigen Druck.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
