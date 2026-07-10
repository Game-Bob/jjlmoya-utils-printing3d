import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PrintDurationEstimatorUI } from '../ui';

const slug = '3d-druckzeit-schaetzer-nach-schichthoehe-und-geschwindigkeit';
const title = '3D Druckzeit Schätzer nach Schichthöhe und Geschwindigkeit';
const description =
  'Schätzen Sie die Druckdauer einer 3D-Impression, ohne einen Slicer zu öffnen, indem Sie Modellhöhe, Schichthöhe, Druckgeschwindigkeit, Füllung, Komplexität, Reise-Overhead und Filamentverbrauch kombinieren.';

const faqData = [
  {
    question: 'Wie lange wird mein 3D-Druck ohne Slicer dauern?',
    answer:
      'Sie können dies aus der Gesamtzahl der Schichten, dem ungefähren Materialvolumen, der durchschnittlichen Druckgeschwindigkeit, der Füllung und einem Spielraum für Reisebewegungen und Richtungswechsel abschätzen. Ein Slicer bleibt für endgültige Aufträge genauer.',
  },
  {
    question: 'Warum verändert die Schichthöhe die Druckzeit so stark?',
    answer:
      'Die Schichthöhe ändert die Anzahl der Z-Schichten. Ein 0,12-mm-Profil erzeugt weit mehr Schichten als ein 0,28-mm-Profil bei gleicher Modellhöhe, sodass der Drucker Umfänge, Füllung und Schichtwechsel-Overhead viel häufiger wiederholt.',
  },
  {
    question: 'Warum ist die tatsächliche Druckzeit länger als Geschwindigkeit geteilt durch Strecke?',
    answer:
      'Drucker halten die eingestellte Geschwindigkeit selten in Kurven, kurzen Segmenten, kleinen Details, Retraktionen, Z-Bewegungen und Reisewegen. Beschleunigungsgrenzen und Overhead machen die tatsächliche Dauer länger als die ideale Bewegungsberechnung.',
  },
  {
    question: 'Ist das genauer als eine Slicer-Schätzung?',
    answer:
      'Nein. Dieser Rechner dient der frühzeitigen Planung, Angebotserstellung und Vergleichszwecken. Ein Slicer kann die genaue Geometrie, Stützen, Nähte, Beschleunigungseinstellungen, Extrusionsbreite und Werkzeugpfadreihenfolge prüfen.',
  },
];

const howToData = [
  { name: 'Geben Sie die Modellhöhe ein', text: 'Verwenden Sie die Z-Höhe des Modells oder des höchsten Objekts im geplanten Druckauftrag.' },
  { name: 'Wählen Sie die Schichthöhe', text: 'Verwenden Sie den tatsächlichen Profilwert, z. B. 0,20 mm für eine typische FDM-Entwurfseinstellung.' },
  { name: 'Fügen Sie Geschwindigkeit, Grundfläche und Füllung hinzu', text: 'Verwenden Sie die durchschnittliche Druckgeschwindigkeit, eine ungefähre XY-Grundfläche und den angestrebten Füllprozentsatz.' },
  { name: 'Passen Sie Komplexität und Overhead an', text: 'Erhöhen Sie die Komplexität für winzige Details und erhöhen Sie den Overhead für viele Reisebewegungen, Stützen oder Retraktionen.' },
  { name: 'Vergleichen Sie Geschwindigkeitsszenarien', text: 'Verwenden Sie die Zeilen für 40, 60 und 80 mm/s, um zu sehen, ob eine höhere Druckgeschwindigkeit die Gesamtdauer wesentlich verändert.' },
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

export const content: ToolLocaleContent<PrintDurationEstimatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Eingaben des 3D-Druckzeit-Schätzers',
    resultsAriaLabel: 'Geschätzte 3D-Druckzeit-Ergebnisse',
    unitSystemLabel: 'Einheiten',
    metricLabel: 'Metrisch',
    imperialLabel: 'US',
    modelHeightLabel: 'Modellhöhe',
    modelHeightHint: 'Höchste Z-Abmessung des Drucks.',
    layerHeightLabel: 'Schichthöhe',
    speedLabel: 'Durchschnittliche Druckgeschwindigkeit',
    footprintLabel: 'Geschätzte Grundfläche',
    footprintHint: 'Ungefähre XY-Fläche als Volumen-Proxy.',
    infillLabel: 'Fülldichte',
    complexityLabel: 'Komplexitätsfaktor',
    complexityHint: '0,80 für einfache Formen, 1,20 für winzige Details und kurze Segmente.',
    overheadLabel: 'Reise-Overhead',
    filamentDiameterLabel: 'Filamentdurchmesser',
    densityLabel: 'Materialdichte',
    timeLabel: 'Geschätzte Druckzeit',
    layersLabel: 'Schichten gesamt',
    materialLabel: 'Materialschätzung',
    filamentLabel: 'Filamentlänge',
    effectiveSpeedLabel: 'Effektive Geschwindigkeit',
    baseTimeLabel: 'Extrusionszeit',
    overheadTimeLabel: 'Overhead-Zeit',
    comparisonLabel: 'Geschwindigkeitsvergleich',
    minutesUnit: 'min',
    hoursUnit: 'h',
    layersUnit: 'Schichten',
    gramUnit: 'g',
    ounceUnit: 'oz',
    meterUnit: 'm',
    footUnit: 'ft',
    percentUnit: '%',
    mmUnit: 'mm',
    inchUnit: 'in',
    mm2Unit: 'mm²',
    in2Unit: 'in²',
    mmSUnit: 'mm/s',
    inSUnit: 'in/s',
    cm3Unit: 'cm³',
    densityUnit: 'g/cm³',
    multiplierUnit: 'x',
    lowInsight: 'Kurze Schätzung: Slicer-Overhead, Bettaufheizung und Abkühlung können einen großen Teil der tatsächlichen Zeit ausmachen.',
    balancedInsight: 'Ausgewogene Schätzung: Geschwindigkeitsänderungen sind relevant, aber Schichtanzahl und Overhead prägen weiterhin die Enddauer.',
    highInsight: 'Lange Schätzung: Erwägen Sie dickere Schichten, weniger Füllung, weniger Stützen oder das Teilen des Modells, bevor Sie einfach die Geschwindigkeit erhöhen.',
  },
  seo: [
    { type: 'title', text: 'So Schätzen Sie die 3D Druckzeit aus Schichthöhe und Geschwindigkeit', level: 2 },
    {
      type: 'paragraph',
      html: 'Ein <strong>3D-Druckzeit-Schätzer nach Schichthöhe und Geschwindigkeit</strong> ist nützlich, wenn Sie eine Planungszahl benötigen, bevor Sie einen Slicer öffnen, mehrere Druckprofile vergleichen oder ein Teil anhand grober Abmessungen kalkulieren möchten. Die Grundidee ist einfach: Die Modellhöhe geteilt durch die Schichthöhe ergibt die Schichtanzahl, und die geschätzte extrudierte Pfadlänge geteilt durch die Durchschnittsgeschwindigkeit ergibt die Bewegungszeit. Die Schwierigkeit besteht darin, dass echter FDM-Druck kein sauberes Förderband ist. Die Düse verlangsamt in Kurven, Retraktionen unterbrechen die Extrusion, Reisebewegungen fügen nichtdruckende Strecke hinzu, und kurze Segmente erreichen selten die befohlene Geschwindigkeit.',
    },
    {
      type: 'paragraph',
      html: 'Dieser Rechner geht bewusst über die einfachste Formel hinaus. Anstatt anzunehmen, dass <code>Höhe / Schichthöhe / Geschwindigkeit</code> ausreicht, kombiniert er ein ungefähres Modellvolumen, die Fülldichte, die Extrusionslinienbreite, einen Komplexitätsfaktor, die Schichtwechselzeit und einen Reise-Overhead-Prozentsatz. Das Ergebnis ist immer noch eine Schätzung, kein Slicer-Ersatz, aber es beantwortet die praktische Frage, nach der Nutzer suchen: <strong>wie lange wird mein 3D-Druck dauern</strong>, wenn ich Schichthöhe, Füllung oder Geschwindigkeit ändere.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0,20 mm', label: 'Übliche FDM-Schichthöhe für ausgewogene Drucke', icon: 'mdi:layers-outline' },
        { value: '15-20 %', label: 'Nützlicher Startbereich für Reise- und Bewegungs-Overhead', icon: 'mdi:routes' },
        { value: '40-80 mm/s', label: 'Typische Vergleichsgeschwindigkeiten für Desktop-Drucker', icon: 'mdi:speedometer' },
        { value: '1,75 mm', label: 'Üblicher Filamentdurchmesser für die Materiallängenberechnung', icon: 'mdi:circle-outline' },
      ],
    },
    {
      type: 'tip',
      title: 'Verwenden Sie die Durchschnittsgeschwindigkeit, nicht die Höchstgeschwindigkeit',
      html: '<p>Wenn Ihr Slicer-Profil 120 mm/s angibt, aber Außenwände mit 40 mm/s, kleine Umfänge mit 25 mm/s und Füllung mit 90 mm/s laufen, beträgt die durchschnittliche Druckgeschwindigkeit nicht 120 mm/s. Für die Planung liefert eine realistische Durchschnittsgeschwindigkeit oft eine bessere Schätzung als die schnellste Bewegung im Profil.</p>',
    },

    { type: 'title', text: 'Warum die Schichthöhe einen so Großen Einfluss auf die Dauer Hat', level: 2 },
    {
      type: 'paragraph',
      html: 'Die Schichthöhe bestimmt, wie oft der Drucker dieselbe Grundsequenz wiederholen muss: Umfang, interne Struktur, Ober- und Unterseiten, Reisebewegung zur nächsten Insel und Z-Bewegung zur nächsten Schicht. Ein 80 mm hohes Modell benötigt 400 Schichten bei 0,20 mm, aber etwa 667 Schichten bei 0,12 mm. Auch wenn jede dünne Schicht etwas weniger Kunststoff pro Durchgang verbraucht, führt der Drucker weit mehr Schichtübergänge, mehr wiederholte Konturen und mehr Gelegenheiten für langsame, beschleunigungsbegrenzte Bewegung aus.',
    },
    {
      type: 'table',
      headers: ['Modellhöhe', 'Schichthöhe', 'Schichtanzahl', 'Planungsinterpretation'],
      rows: [
        ['80 mm', '0,28 mm', '286 Schichten', 'Schnelles Entwurfsprofil mit sichtbaren Schichtlinien.'],
        ['80 mm', '0,20 mm', '400 Schichten', 'Ausgewogene Qualität und Dauer für viele Teile.'],
        ['80 mm', '0,12 mm', '667 Schichten', 'Feindetail-Profil, das viele Stunden hinzufügen kann.'],
        ['160 mm', '0,20 mm', '800 Schichten', 'Hohe Teile werden selbst bei normaler Geschwindigkeit zeitintensiv.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Wenn die Schichthöhe der eigentliche Engpass ist',
      badge: 'Schichten prüfen',
      html: '<p>Wenn eine Erhöhung der Druckgeschwindigkeit die Schätzung kaum verändert, wird der Auftrag möglicherweise von der Schichtanzahl, kurzen Segmenten und Overhead dominiert. In diesem Fall kann der Wechsel von 0,12 mm auf 0,20 mm mehr Zeit sparen, als den Drucker von 60 mm/s auf 80 mm/s zu beschleunigen.</p>',
    },
    {
      type: 'summary',
      title: 'Entscheidungsregeln zur Schichthöhe',
      items: [
        'Verwenden Sie dickere Schichten für Prototypen, Halterungen, Vorrichtungen und Teile, bei denen die Z-Oberflächenbeschaffenheit nicht kritisch ist.',
        'Verwenden Sie dünnere Schichten für flache Kurven, kleine Texte, Miniaturen und kosmetische Oberflächen.',
        'Bei hohen Teilen summieren sich Schichthöhenänderungen schnell, da jede zusätzliche Schicht den Overhead wiederholt.',
      ],
    },

    { type: 'title', text: 'Druckgeschwindigkeit, Beschleunigung und der Komplexitätsfaktor', level: 2 },
    {
      type: 'paragraph',
      html: 'Ein Druckgeschwindigkeitswert ist ein Ziel, kein Versprechen. Der Drucker muss auf diese Geschwindigkeit beschleunigen, vor Kurven abbremsen, die Grenzen von Jerk oder Junction Deviation einhalten und manchmal für Kühlung, Brücken, Überhänge, Mindestschichtzeit und kleine Inseln verlangsamen. Deshalb benötigt ein <strong>Druckgeschwindigkeits-zu-Druckzeit-Rechner</strong> einen Komplexitätsfaktor. Eine saubere Box mit langen geraden Fülllinien kann nahe der angeforderten Geschwindigkeit arbeiten. Eine detaillierte Figur, ein Logo, ein Gitter, ein Gewindeteil oder eine organische Skulptur verbringt die meiste Zeit möglicherweise in kurzen Segmenten, in denen Beschleunigungsgrenzen mehr zählen als die Höchstgeschwindigkeit.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Einfache Geometrie',
          description: 'Boxen, Platten und lange Füllbahnen können einen niedrigeren Komplexitätsmultiplikator verwenden.',
          icon: 'mdi:cube-outline',
          points: ['Längere durchgehende Pfade', 'Weniger Inseln', 'Weniger Retraktions-Overhead'],
        },
        {
          title: 'Gemischte Geometrie',
          description: 'Die meisten Halterungen, Gehäuse, Requisiten und Haushaltsteile liegen nahe dem Standardmultiplikator.',
          icon: 'mdi:shape-outline',
          highlight: true,
          points: ['Umfänge und Füllung sind beide wichtig', 'Mäßige Reisebewegungen', 'Ausgewogene Beschleunigungsverluste'],
        },
        {
          title: 'Detailreiche Geometrie',
          description: 'Kleine Merkmale, Texte, Gitter, Stützen und organische Kurvenoberflächen benötigen einen höheren Multiplikator.',
          icon: 'mdi:vector-polyline',
          points: ['Kurze Segmente dominieren', 'Mehr Starts und Stopps', 'Mehr Retraktionen und Reisebewegungen'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Druckgeschwindigkeit erhöhen: was sich verbessert und was nicht',
      items: [
        { pro: 'Lange Fülllinien können bei höherer Geschwindigkeit schneller fertig werden.', con: 'Außenwände und kleine Details können weiterhin durch Profilgrenzen begrenzt sein.' },
        { pro: 'Große, detailarme Prototypen können von schnellerer Bewegung profitieren.', con: 'Beschleunigung, Ringing, Extrusionsfluss und Kühlung können die nutzbare Geschwindigkeit begrenzen.' },
        { pro: 'Eine Geschwindigkeitsvergleichstabelle zeigt schnell die mögliche Einsparung.', con: 'Sie kann slicer-spezifische Verlangsamungen wie die Mindestschichtzeit nicht vorhersagen.' },
      ],
    },
    {
      type: 'message',
      title: 'Geschwindigkeitsschätzungen sind am nützlichsten für relative Vergleiche',
      ariaLabel: 'Hinweis zur Geschwindigkeitsschätzung',
      html: '<p>Verwenden Sie die Zeilen für 40, 60 und 80 mm/s zum richtungsweisenden Vergleich. Wenn 80 mm/s nur wenig Einsparung bringt, wird der Druck wahrscheinlich durch Schichten, Overhead oder Komplexität begrenzt, nicht durch die Rohgeschwindigkeit.</p>',
    },

    { type: 'title', text: 'Füllung, Volumen und Materialzeit', level: 2 },
    {
      type: 'paragraph',
      html: 'Der Rechner verwendet Grundfläche und Modellhöhe als groben Volumen-Proxy und skaliert dieses Volumen dann mit einem effektiven Feststoffverhältnis. Dies ist nicht so genau wie das Auslesen der Netzgeometrie, erfasst aber eine wichtige physikalische Wahrheit: Wände und Häute verschwinden nicht, wenn die Füllung reduziert wird. Ein mit 15 % Füllung gedrucktes Teil hat immer noch Umfänge, Deckschichten, Unterschichten, massive kleine Merkmale und manchmal Stützschnittstellen. Der Rechner behält einen Schalenanteil in der Schätzung bei, damit eine niedrige Füllung die Druckzeit nicht unrealistisch auf fast nichts zusammenfallen lässt.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Erhöhen Sie die Grundfläche für breite Objekte, Boxen, flache Platten, Tabletts und große Gehäuse.',
        'Verringern Sie die Grundfläche für schmale Türme, dünne Figuren, kleine Halterungen und offene Rahmen.',
        'Verwenden Sie den Füllprozentsatz als Planungssteuerung, nicht als Gesamtdichte des Teils.',
        'Denken Sie daran, dass Stützen, Ränder, Flöße, Reinigungstürme und mehrfarbige Abfälle Zeit außerhalb des Modells selbst hinzufügen.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:printer-3d-nozzle',
      title: 'Beispiel: warum 20 % Füllung nicht 20 % Druckzeit sind',
      html: '<p>Ein 80 mm hohes Gehäuse kann vier Wände, sechs Unterschichten, sechs Deckschichten, Schraubennaben und einen großen Innenhohlraum haben. Die Reduzierung der Füllung von 40 % auf 20 % verkürzt die innere Pfadlänge, aber die Wände und Häute werden immer noch auf jeder Schicht gedruckt. Bei umfangsreichen Modellen kann die Änderung der Wandanzahl oder Schichthöhe die Zeit stärker beeinflussen als die alleinige Änderung der Füllung.</p>',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Grundfläche', definition: 'Die ungefähre XY-Fläche, die das Modell einnimmt, hier als grobe Volumeneingabe verwendet.' },
        { term: 'Effektives Feststoffverhältnis', definition: 'Eine Planungsmischung aus Schalenmaterial und Füllmaterial zur Schätzung des extrudierten Volumens.' },
        { term: 'Extrusionslinie', definition: 'Die von der Düse abgelegte Kunststoffraupe; ihr Querschnitt hängt von Schichthöhe und Extrusionsbreite ab.' },
        { term: 'Filamentlänge', definition: 'Die Länge des Rohfilaments, die benötigt wird, um das geschätzte Kunststoffvolumen zu liefern.' },
      ],
    },

    { type: 'title', text: 'Reise Overhead: Das Fehlende Stück in Einfachen Rechnern', level: 2 },
    {
      type: 'paragraph',
      html: 'Eine einfache Dauerschätzung ignoriert oft nicht-extrudierende Bewegung. Echte Drucker bewegen sich zwischen Inseln, retrahieren und primen Filament, wischen, hüpfen in Z, vermeiden gedruckte Teile, ändern die Richtung und pausieren manchmal zum Kühlen. Diese Aktionen erzeugen kein sichtbares Material, verbrauchen aber Echtzeit. Ein fester Overhead-Prozentsatz ist eine praktische Methode, um Reisebewegungen zu berücksichtigen, wenn kein vollständiger Slicer-Werkzeugpfad vorliegt. Der Standardbereich von 15-20 % ist ein nützlicher Ausgangspunkt für gewöhnliche FDM-Einmaterialteile.',
    },
    {
      type: 'table',
      headers: ['Druckbedingung', 'Empfohlener Overhead', 'Grund'],
      rows: [
        ['Einzelnes einfaches Teil', '10-15 %', 'Wenige Inseln, weniger Retraktionen, meist durchgehende Pfade.'],
        ['Typisches Funktionsteil', '15-22 %', 'Mäßige Umfänge, Füllung und Reisebewegungen.'],
        ['Viele kleine Teile auf einer Platte', '22-35 %', 'Häufige Reisebewegungen zwischen Objekten und wiederholte Starts.'],
        ['Stützen oder detaillierte Oberflächen', '25-40 %', 'Stützschnittstellen, kurze Segmente und Retraktionen addieren Zeit.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Bettaufheizung ist nicht enthalten',
      badge: 'Gesamte Auftragszeit',
      html: '<p>Die Schätzung konzentriert sich auf Bewegungs- und Extrusionszeit. Planen Sie separate Zeit für Bettaufheizung, Düsenaufheizung, Sondierung, Mesh-Nivellierung, Filamentladen, Abkühlung und Teileentnahme bei der Planung der tatsächlichen Maschinenbelegung ein.</p>',
    },
    {
      type: 'tip',
      title: 'Kalibrieren Sie den Overhead anhand eines echten Drucks',
      html: '<p>Nehmen Sie einen fertigen Auftrag, vergleichen Sie die Slicer- oder Stoppuhrdauer mit diesem Rechner und passen Sie dann Overhead und Komplexität an, bis die Schätzung übereinstimmt. Diese lokale Kalibrierung verbessert die zukünftige Planung mehr als die dauerhafte Verwendung generischer Werte.</p>',
    },

    { type: 'title', text: 'Wann Sie Diesem Rechner Vertrauen und Wann Sie Einen Slicer Verwenden Sollten', level: 2 },
    {
      type: 'paragraph',
      html: 'Dieses Werkzeug ist am stärksten für frühe Schätzungen, Angebotsgespräche, Unterrichtsdemonstrationen und den Vergleich von Schichthöhe versus Geschwindigkeit, bevor Sie sich auf ein Profil festlegen. Es ist besonders nützlich, wenn die genaue STL noch nicht verfügbar ist, wenn ein Kunde nur ungefähre Abmessungen angibt, oder wenn Sie wissen möchten, ob eine Änderung eine Untersuchung wert ist. Es ist nicht dafür ausgelegt, Slicer-Schätzungen für produktionskritische Aufträge zu ersetzen, da Slicer die genaue Netzgeometrie, geschwindigkeitsabhängige Merkmale, Stützpfade, Wandreihenfolge, Ober- und Unterseiten, Nahtplatzierung, Beschleunigungssteuerung und maschinenspezifisches Firmware-Verhalten prüfen.',
    },
    {
      type: 'list',
      icon: 'mdi:calculator-variant-outline',
      items: [
        'Verwenden Sie diesen Rechner, um 0,12 mm-, 0,20 mm- und 0,28 mm-Schichtprofile schnell zu vergleichen.',
        'Verwenden Sie ihn, um abzuschätzen, ob ein hohes Modell vor einer Geschwindigkeitsänderung durch die Schichtanzahl begrenzt ist.',
        'Verwenden Sie ihn, um ein grobes Materialvolumen, Filamentlänge und Gewicht aus ungefähren Abmessungen zu erhalten.',
        'Verwenden Sie einen Slicer, bevor Sie Material kaufen, Maschinenzeit reservieren oder Liefertermine versprechen.',
      ],
    },
    {
      type: 'table',
      headers: ['Frage', 'Antwort des Rechners', 'Antwort des Slicers'],
      rows: [
        ['Werden dickere Schichten Zeit sparen?', 'Gute richtungsweisende Schätzung anhand der Schichtanzahl.', 'Exaktes ergebnis für pfad und oberfläche.'],
        ['Wird 80 mm/s viel schneller sein als 60 mm/s?', 'Nützlicher Geschwindigkeitsszenarien-Vergleich.', 'Exaktes verhalten nach geschwindigkeit und beschleunigung.'],
        ['Wie viel Filament könnte ich brauchen?', 'Ungefähres Volumen, Länge und Gewicht.', 'Profilspezifischer materialbericht.'],
        ['Kann ich diesen Produktionsauftrag kalkulieren?', 'Nur zur vorläufigen Auswahl.', 'Erforderlich für endgültiges angebot und planung.'],
      ],
    },
    {
      type: 'summary',
      title: 'Bester Workflow',
      items: [
        'Beginnen Sie mit diesem Schätzer, um die Auswahl an Schichthöhe, Geschwindigkeit und Füllung einzugrenzen.',
        'Passen Sie Komplexität und Overhead mit einem bekannten Druck Ihrer eigenen Maschine an.',
        'Slicen Sie das endgültige Kandidatenprofil erneut, bevor Sie sich auf Kosten, Zeit oder Lieferung festlegen.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
