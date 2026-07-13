import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MoistureSaturationMonitorUI } from '../ui';

const slug = 'filament-dehydrierungs-schaetzer';
const title = `Filament-Dehydrierungs-Schätzer: Leitfaden zur thermischen Regeneration`;
const description = 'Modellieren Sie die hygroskopische Filamentsättigung mit exponentieller Adsorptionskinetik, Feuchtigkeitsbelastung, Polymertyp und Trocknungskammertemperatur.';

const faqData = [
  {
    question: 'Wie berechnet der Filament-Dehydrierungs-Schätzer die Feuchtigkeitssättigung?',
    answer: 'Er verwendet ein exponentielles Sättigungsmodell: maximale Materialabsorption multipliziert mit eins minus e hoch minus kinetischem Koeffizienten mal Expositionszeit, skaliert durch die relative Umgebungsfeuchtigkeit.',
  },
  {
    question: 'Warum muss Nylon länger getrocknet werden als PLA?',
    answer: 'Nylon hat eine höhere Feuchtigkeitskapazität und einen schnelleren Adsorptionskoeffizienten als PLA, sodass es bei gleicher Feuchtigkeit und Expositionszeit schneller einen schädlichen Wassergehalt erreicht.',
  },
  {
    question: 'Bedeutet eine höhere Trocknungstemperatur immer sichereres Trocknen?',
    answer: 'Nein. Höhere Temperaturen beschleunigen die Dehydrierung, aber jedes Polymer hat einen sicheren Kammerbereich. Das Überschreiten dieses Bereichs kann das Filament erweichen, die Spule verformen oder das Druckverhalten verändern.',
  },
  {
    question: 'Was bedeutet der Hydrolyserisiko-Indikator?',
    answer: 'Er vergleicht den geschätzten Wassergehalt mit dem kritischen Schwellenwert des Materials und warnt, wenn die absorbierte Feuchtigkeit hoch genug ist, um Blasenbildung, Stringing, schwache Schichten oder Schäden an den Polymerketten zu verursachen.',
  },
];

const howToData = [
  { name: 'Polymer auswählen', text: 'Wählen Sie PLA, PETG, ABS, ASA, TPU, Nylon, PC oder PVA, damit das Modell die richtige Gleichgewichtskapazität und den richtigen kinetischen Koeffizienten laden kann.' },
  { name: 'Lagerfeuchtigkeit eingeben', text: 'Stellen Sie die relative Luftfeuchtigkeit ein, der die Spule ausgesetzt war, basierend on der Messung in Raum, Box oder Werkstatt.' },
  { name: 'Expositionszeit einstellen', text: 'Geben Sie an, wie viele Tage das Filament außerhalb einer versiegelten Trockenbox oder eines aktiven Trockners verbracht hat.' },
  { name: 'Trocknungstemperatur wählen', text: 'Verwenden Sie eine Kammertemperatur innerhalb des sicheren Bereichs für das Polymer und das Spulenmaterial.' },
  { name: 'Trocknungszyklus starten', text: 'Starten Sie den gespeicherten Trocknungstimer und lassen Sie die Kammeranzeige allmählich sinken, während die geschätzte Feuchtigkeitslast entfernt wird.' },
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
  applicationCategory: 'EngineeringApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'de',
};

export const content: ToolLocaleContent<MoistureSaturationMonitorUI> = {
  slug,
  title,
  description,
  ui: {
    unitSystemLabel: 'Einheiten',
    metricLabel: 'Metrisch',
    imperialLabel: 'Imperial',
    materialLabel: 'Polymer',
    materialPlaLabel: 'PLA',
    materialPetgLabel: 'PETG',
    materialAbsLabel: 'ABS',
    materialAsaLabel: 'ASA',
    materialTpuLabel: 'TPU',
    materialPaLabel: 'Nylon PA',
    materialPcLabel: 'Polycarbonat',
    materialPvaLabel: 'PVA Support',
    humidityLabel: 'Relative Feuchtigkeit',
    exposureLabel: 'Expositionszeit',
    dryTempLabel: 'Trocknungskammer',
    spoolMassLabel: 'Spulenmasse',
    calculateLabel: 'Trocknungszyklus starten',
    pauseCycleLabel: 'Zyklus pausieren',
    resumeCycleLabel: 'Zyklus fortsetzen',
    resetCycleLabel: 'Zyklus zurücksetzen',
    saturationLabel: 'Feuchtigkeitsgehalt',
    absorbedLabel: 'Absorbiertes Wasser',
    dryingTimeLabel: 'Trocknungszyklus',
    remainingTimeLabel: 'Restzeit',
    cycleProgressLabel: 'Zyklusfortschritt',
    hydrolysisLabel: 'Hydrolyserisiko',
    stableLabel: 'Stabil',
    watchLabel: 'Überwachungszone',
    criticalLabel: 'Kritisch',
    chamberReadyLabel: 'Kammer bereit',
    chamberRunningLabel: 'Trocknungszyklus läuft',
    chamberCompleteLabel: 'Feuchtigkeit entfernt',
    curveLabel: 'Adsorptionskurve',
    kineticLabel: 'Sättigungskinetik',
    equilibriumLabel: 'Exponentielle Annäherung an die Gleichgewichtssättigung',
    daysUnit: 'Tage',
    percentUnit: '%',
    gramsUnit: 'g',
    poundsUnit: 'lb',
    celsiusUnit: 'C',
    fahrenheitUnit: 'F',
    hoursUnit: 'h',
    minutesUnit: 'm',
    secondsUnit: 's',
    noValueLabel: '-',
  },
  seo: [
    { type: 'title', text: 'Adsorptionskinetik verstehen: Warum sich Nylon nicht wie PLA verhält', level: 2 },
    { type: 'paragraph', html: 'Ein seriöser <strong>Filament-Trocknungszeitschätzer</strong> kann Feuchtigkeit nicht linear behandeln. Hygroskopische Polymere nehmen nicht jeden Tag unbegrenzt den gleichen Prozentsatz an Wasser auf. Sie nähern sich einem Gleichgewichtszustand: anfangs schnell, nahe der Sättigung langsamer und stark abhängig von der relativen Umgebungsfeuchtigkeit. Deshalb ist eine Spule, die zwei Tage lang bei 70 % relativer Luftfeuchtigkeit gelagert wurde, nicht einfach halb so feucht wie eine Spule, die dort vier Tage lang lag. Der erste Teil der Exposition führt oft zur stärksten Feuchtigkeitsaufnahme, insbesondere bei Nylon, TPU, PVA und anderen Materialien mit polaren Gruppen, die Wassermoleküle anziehen.' },
    { type: 'paragraph', html: 'Dieses Tool modelliert den Feuchtigkeitsgehalt mit <code>S_h = S_max x (1 - e^(-k x t)) x RH/100</code>. Dabei ist <code>S_max</code> die Gleichgewichtsabsorptionskapazität des Polymers, <code>k</code> die Adsorptionsgeschwindigkeit, <code>t</code> die Expositionszeit und <code>RH</code> skaliert das Ergebnis auf die Lagerumgebung. Das Ergebnis ist kein Laborzertifikat, sondern ein technisches Planungsmodell, das erklärt, warum dieselbe Werkstatt PLA druckbar belässt, während Nylon zischt, Blasen wirft, Fäden zieht und die Schichthaftung verliert.' },
    { type: 'stats', columns: 4, items: [
      { value: '0.65%', label: 'Geplante Gleichgewichtskapazität für PLA' },
      { value: '3.2%', label: 'Geplante Gleichgewichtskapazität für Nylon PA' },
      { value: '5.8%', label: 'Geplante Gleichgewichtskapazität für PVA-Support-Filament' },
      { value: 'RH-skaliert', label: 'Umgebungsfeuchtigkeit multipliziert die Sättigungskurve' },
    ] },
    { type: 'diagnostic', variant: 'info', title: 'Feuchtigkeitssymptome sind Prozesssymptome', badge: 'Druckhinweis', html: 'Knisternde Geräusche, Dampfblasen, raue statt glatte Oberflächen, übermäßiges Stringing, schwache Wände und trübes Extrudat sind keine zufälligen Slicer-Probleme. Sie deuten oft darauf hin, dass Wasser in der Schmelzzone verdampft oder dass Hydrolyse die Polymerkettenlänge vor der Ablagerung verkürzt hat.' },

    { type: 'title', text: 'Wie das exponentielle Sättigungsmodell Trocknungsentscheidungen verändert', level: 2 },
    { type: 'paragraph', html: 'Lineare Rechner fragen meist nach einem Material und geben eine feste Stundenzahl aus. Das ist eine schnelle Erinnerung, verbirgt aber die eigentliche Frage: Wie viel Feuchtigkeit hat das Filament tatsächlich aufgenommen? Eine Spule, die drei Wochen lang in einer versiegelten Trockenbox bei 15 % relative Luftfeuchtigkeit gelagert wurde, benötigt kaum oder gar keine Regeneration. Dasselbe Polymer, das ein Wochenende lang offen in einer feuchten Garage liegt, benötigt einen vollständigen Kammertakt. Die Sättigungsmodellierung verknüpft die Trocknungsempfehlung mit der Expositionsgeschichte, anstatt jede Spule als gleich nass zu behandeln.' },
    { type: 'table', headers: ['Eingabe', 'Physikalische Bedeutung', 'Auswirkung auf die Schätzung'], rows: [
      ['Relative Feuchtigkeit', 'Wasseraktivität um die Spule herum', 'Eine höhere relative Luftfeuchtigkeit erhöht das Gleichgewichtsziel und den endgültig absorbierten Prozentsatz.'],
      ['Expositionszeit', 'Wie lange die Diffusion fortschreiten konnte', 'Die ersten Tage sind am wichtigsten; die Kurve flacht ab, je näher sie der Sättigung kommt.'],
      ['Materialkoeffizient', 'Wie schnell sich ein Polymer dem Gleichgewicht nähert', 'Nylon und PVA sättigen schneller als PLA oder ASA.'],
      ['Trocknungstemperatur', 'Verfügbare thermische Energie für die Desorption', 'Eine höhere sichere Kammertemperatur verkürzt den geschätzten Zyklus.'],
      ['Spulenmasse', 'Menge des vorhandenen Polymers', 'Der Prozentsatz beschreibt den Materialzustand; die absorbierten Gramm skalieren mit der Spulenmasse.'],
    ] },
    { type: 'tip', title: `Schätzen Sie die Umgebung, nicht die Wetter-App`, html: 'Verwenden Sie die Luftfeuchtigkeit in der Trockenbox, dem Druckergehäuse, dem Schrank oder der Werkstatt, in der das Filament tatsächlich gelagert wurde. Ein lokaler Wetterbericht kann sich stark von der Luftfeuchtigkeit neben einem beheizten Drucker, auf einem Kellerregal oder in einem versiegelten Behälter mit Trockenmittel unterscheiden.' },
    { type: 'card', icon: 'mdi:chart-bell-curve', title: 'Warum sich der Ring nahe der Sättigung verlangsamt', html: 'Der visuelle Ring folgt dem gleichen exponentiellen Verhalten wie die Gleichung. Er füllt sich schnell, wenn das Polymer trocken ist, da das Feuchtigkeitsgefälle hoch ist. Nahe dem Gleichgewicht wird das Gefälle schwächer, sodass sich die scheinbare Füllrate verlangsamt. Diese Verlangsamung ist physikalisch bedingt und kein Animationstrick.' },

    { type: 'title', text: 'Filament-Dehydrierungs-Rechner-Bereiche nach Material', level: 2 },
    { type: 'paragraph', html: 'Trocknungsempfehlungen müssen das Polymer und die Spule berücksichtigen. PLA kann bei Überhitzung erweichen oder kriechen. PETG verträgt mehr Wärme, profitiert aber dennoch von einer konservativen Kammersteuerung. Nylon benötigt normalerweise einen heißeren und längeren Zyklus, da es mehr Wasser aufnimmt und dieses hartnäckiger bindet. PVA ist extrem feuchtigkeitsempfindlich und kann unbrauchbar werden, wenn es offen gelagert wird. PC druckt nach dem Trocknen oft besser, selbst wenn es optisch nicht nass erscheint. Der Schätzer nutzt diese Unterschiede, um einen universellen <strong>Filament-Trocknungsrechner</strong> in einen materialspezifischen Leitfaden zu verwandeln.' },
    { type: 'comparative', columns: 2, items: [
      { title: 'Geringe bis mäßige hygroskopische Reaktion', description: 'PLA, ABS und ASA nehmen Wasser langsamer und in geringeren Mengen auf, leiden aber nach langer Lagerung in feuchter Umgebung ebenfalls unter Qualitätsverlust.', points: ['Kürzere Trocknungszyklen', 'Geringere Gleichgewichtsfeuchte', 'Symptome treten oft schleichend auf'] },
      { title: 'Hohe hygroskopische Reaktion', description: 'Nylon, TPU, PVA und einige PC-Sorten erfordern eine aktivere Lagerung und eine diszipliniertere Regeneration.', points: ['Höhere absorbierte Wassermasse', 'Schnelle Sättigung zu Beginn', 'Höheres Risiko für Blasenbildung und schwache Schichten'] },
    ] },
    { type: 'table', headers: ['Material', 'Typische Zieltemperatur', 'Planungshinweis'], rows: [
      ['PLA', '40-55 C', 'Vermeiden Sie übermäßige Hitze, da sich PLA und einige Spulenkörper verformen können.'],
      ['PETG', '55-70 C', 'Verbessert nach einigen Stunden oft die Oberflächenkonsistenz und reduziert Stringing.'],
      ['ABS / ASA', '65-85 C', 'Geringere Aufnahme als Nylon, profitiert aber von trockener Lagerung.'],
      ['TPU', '45-60 C', 'Flexible Sorten können genug Feuchtigkeit aufnehmen, um zu schäumen oder Fäden zu ziehen.'],
      ['Nylon PA', '70-90 C', 'Erfordert meist eine aktive Trocknung vor kritischen Funktionsdrucken.'],
      ['PVA', '40-55 C', 'Feuchtigkeitsempfindliches Support-Material; sofort wieder versiegeln.']
    ] },
    { type: 'proscons', title: 'Feste Trocknungstabelle vs. Sättigungsmonitor', items: [
      { pro: 'Eine feste Tabelle ist schnell, wenn Sie nur einen Standardzyklus benötigen.', con: 'Sie kann nicht zwischen einer Spule aus der Trockenbox und einer aus feuchter Raumluft unterscheiden.' },
      { pro: 'Die Sättigungsmodellierung erklärt, warum eine frühe Belastung schwerwiegend sein kann.', con: 'Sie basiert dennoch auf ungefähren Materialkoeffizienten und der Lagerhistorie.' },
      { pro: 'Ein Eingang für die Trocknungstemperatur spiegelt das tatsächliche Kammer-Setup wider.', con: 'Er ersetzt nicht die Sicherheitsgrenzen des Filamentherstellers.' },
      { pro: 'Absorbiertes Wasser in Gramm macht das Ergebnis für volle und angebrochene Spulen greifbar.', con: 'Die Spulenmasse verrät nicht, ob die äußeren Wicklungen feuchter sind als der Kern.' }
    ] },

    { type: 'title', text: 'Hydrolyserisiko: Wenn feuchtes Filament dauerhaft Schaden nimmt', level: 2 },
    { type: 'paragraph', html: 'Feuchtigkeit beeinträchtigt nicht nur die Druckqualität. Bei Extrusionstemperaturen kann das absorbierte Wasser bei anfälligen Polymeren zur Hydrolyse führen. Hydrolyse spaltet Molekülketten und verringert Zähigkeit, Dehnung und Zuverlässigkeit. Dieser Effekt ist besonders wichtig für technische Werkzeuge wie Halterungen, Zahnräder, Kanäle und tragende Bauteile. Eine feuchte Spule lässt sich zwar oft noch extrudieren, aber das Bauteil kann früher versagen, weil das Polymer während der Verarbeitung chemisch geschädigt wurde.' },
    { type: 'glossary', items: [
      { term: 'Hygroskopie', definition: 'Die Eigenschaft eines Materials, Wasser aus der Umgebungsluft anzuziehen und zu binden.' },
      { term: 'Gleichgewichtsfeuchte', definition: 'Der Feuchtigkeitsgehalt, auf den sich ein Polymer nach ausreichender Zeit bei gegebener Luftfeuchtigkeit einstellt.' },
      { term: 'Adsorptionskoeffizient', definition: 'Ein vereinfachter kinetischer Wert, der bestimmt, wie schnell die Sättigungskurve ansteigt.' },
      { term: 'Desorption', definition: 'Der umgekehrte Prozess: das Entweichen von Wasser aus dem Polymer während der thermischen Trocknung.' },
      { term: 'Hydrolyse', definition: 'Chemische Kettenspaltung durch Wasser unter Hitzeeinwirkung, relevant bei mehreren technischen Polymeren.' }
    ] },
    { type: 'diagnostic', variant: 'warning', title: 'Eine trockene Oberfläche beweist keinen trockenen Kern', badge: 'Diffusionslimit', html: 'Filament trocknet von außen nach innen. Ein kurzer Heißluftstoß kann die Oberfläche verbessern, während die inneren Wicklungen einer dichten Spule feucht bleiben. Große Spulen, Pappwände und eng gewickeltes Filament können die Regeneration verlangsamen.' },
    { type: 'message', title: 'Die visuelle Regel', html: 'Wenn der Ring von klarem Blau in ein mattes Graublau wechselt, markiert das Tool den Übergang vom normalen Feuchtigkeitsmanagement in eine Hydrolyse-Überwachungszone. Ab diesem Punkt wird Trocknung zum Teil der Qualitätssicherung, nicht nur kosmetische Kosmetik.' },

    { type: 'title', text: 'Einen zuverlässigen Filament-Trocknungsworkflow aufbauen', level: 2 },
    { type: 'paragraph', html: 'Ein praktischer Leitfaden zur hygroskopischen Sättigung kombiniert Vorhersage mit Routine. Messen Sie die Lagerfeuchtigkeit, beschriften Sie Spulen mit dem Öffnungsdatum, lagern Sie empfindliche Polymere in versiegelten Boxen, tauschen Sie Trockenmittel rechtzeitig aus und trocknen Sie das Filament vor mechanisch beanspruchten Drucken. Der beste Workflow vermeidet wiederholte Feucht-Trocken-Zyklen, da jeder unnötige Hitzezyklus das Material altern lassen, Spulen verformen oder Produktionszeit kosten kann.' },
    { type: 'list', items: [
      'Trocknen Sie Nylon, PVA, TPU und PC vor langen Drucken, wenn die Lagerhistorie unklar ist.',
      'Lagern Sie auch PLA und PETG versiegelt; geringe Aufnahme bedeutet nicht keine Aufnahme.',
      'Verwenden Sie ein unabhängiges Thermometer im Trockner, da eingebaute Anzeigen oft ungenau sind.',
      'Führen Sie das Filament bei mehrstündigen Drucken in feuchten Räumen direkt aus einer Trockenbox zu.',
      'Tauschen oder regenerieren Sie Trockenmittel, sobald Indikatoren oder Feuchtigkeitssensoren einen Anstieg zeigen.',
      'Vermeiden Sie das Trocknen oberhalb der Glasübergangstemperatur oder des Erweichungsbereichs von Filament und Spule.'
    ] },
    { type: 'card', icon: 'mdi:air-filter', title: 'Die Trockungskammer ist ein Regenerationssystem', html: 'Die Kammer muss stabile Hitze, Luftzirkulation und eine Abführung für die Feuchtigkeit bieten. Das Erhitzen einer geschlossenen Box ohne Entlüftung oder Trockenmittel verlagert das Wasser oft nur vom Filament in die Luft und wieder zurück.' },
    { type: 'summary', title: 'Checkliste für die praktische Interpretation', items: [
      'Der Feuchtigkeitsprozentsatz beschreibt den Materialzustand; das absorbierte Wasser in Gramm beschreibt die tatsächliche Last in der Spule.',
      'Hohe Luftfeuchtigkeit und schnell sättigende Materialien führen zu einem steilen Anstieg zu Beginn.',
      'Die Trocknungszeit sollte mit der Sättigung steigen und mit einer höheren sicheren Kammertemperatur sinken.',
      'Das Hydrolyserisiko ist besonders bei Hochtemperaturextrusion und Funktionsteilen kritisch.',
      'Das Datenblatt des Herstellers geht jeder generischen Trocknungsschätzung vor.'
    ] },

    { type: 'title', text: 'SEO-Antwort: Wie lange sollte ich 3D-Drucker-Filament trocknen?', level: 2 },
    { type: 'paragraph', html: 'Die richtige Trocknungszeit hängt von Material, Feuchtigkeitsbelastung, Spulenmasse und Kammertemperatur ab. PLA benötigt nach mäßiger Belastung oft nur wenige Stunden, PETG und TPU meist länger, während Nylon oder PVA einen umfangreichen Regenerationszyklus nach feuchter Lagerung erfordern. Ein solider Workflow zur <strong>Feuchtigkeitskontrolle im 3D-Druck</strong> schätzt zuerst das aufgenommene Wasser ab und wählt dann eine sichere Kammertemperatur sowie ausreichend Zeit für die Desorption. Dies ist weitaus zuverlässiger, als eine universelle Zeit auf jedes Polymer anzuwenden.' },
    { type: 'diagnostic', variant: 'success', title: 'Bester Anwendungsfall für diesen Monitor', badge: 'Preflight-Check', html: 'Nutzen Sie den Schätzer vor kritischen Drucken, Serienproduktionen, teuren technischen Polymeren oder jedem Auftrag, bei dem ein Oberflächenfehler, eine spröde Schicht oder ein unterfestes Teil teurer wäre als ein Trocknungszyklus.' }
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
