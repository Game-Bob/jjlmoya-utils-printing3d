import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ChemicalSmoothingTimeSimulatorUI } from '../ui';

export const content: ToolLocaleContent<ChemicalSmoothingTimeSimulatorUI> = {
  slug: 'abs-pvb-chemie-glaettzeit-rechner',
  title: 'ABS Aceton und PVB IPA Dampfglättzeit Rechner',
  description: 'Schätze konservative Dampfexpositions- und Trocknungszeiten für die chemische Glättung von ABS mit Aceton oder PVB mit Isopropylalkohol anhand von Kammervolumen, Temperatur, Bauteilvolumen und Oberflächendetail.',
  ui: {
    unitSystemLabel: 'Einheiten',
    metricLabel: 'Metrisch',
    imperialLabel: 'US',
    materialLabel: 'Material',
    absLabel: 'ABS + Aceton',
    pvbLabel: 'PVB + IPA',
    chamberVolumeLabel: 'Dampfkammer',
    chamberTemperatureLabel: 'Kammertemp.',
    partVolumeLabel: 'Bauteilvolumen',
    surfaceDetailLabel: 'Oberflächendetail',
    fineDetailLabel: 'Feine Details',
    balancedDetailLabel: 'Ausgewogen',
    coarseDetailLabel: 'Starke Schichtlinien',
    presetsLabel: 'Voreinstellungen',
    miniPresetLabel: 'Mini',
    displayPresetLabel: 'Ausstellungsstück',
    enclosurePresetLabel: 'Großes Gehäuse',
    exposureLabel: 'Geschätzte Exposition',
    dryTimeLabel: 'Trocknung nach dem Glätten',
    firstTrialLabel: 'Erster Testzug',
    riskLabel: 'Detailrisiko',
    vaporMapLabel: 'Dampfintensität',
    chamberUnitMetric: 'L',
    chamberUnitImperial: 'gal',
    temperatureUnitMetric: '°C',
    temperatureUnitImperial: '°F',
    partUnitMetric: 'cm³',
    partUnitImperial: 'in³',
    secondsUnit: 's',
    minutesUnit: 'min',
    hoursUnit: 'h',
    controlsAriaLabel: 'Eingaben zur chemischen Glättung',
    resultsAriaLabel: 'Ergebnisse der chemischen Glättung',
    recommendationGentle: 'sanftes Fenster',
    recommendationStandard: 'genau beobachten',
    recommendationAggressive: 'hohes Detailverlustrisiko',
    safetyNote: 'Nur als konservative Planungsschätzung verwenden. Lösungsmitteldampf ist entzündlich und gefährlich: Arbeite fern von Zündquellen, mit Belüftung und PSA, und beginne mit einem kurzen Testexpositionsversuch.',
    copyButton: 'Glättplan kopieren',
    copiedButton: 'Kopiert',
    copiedSummaryTemplate: 'Schätzung der chemischen Glättung: {minutes} min ({seconds} s) Exposition, erster Testzug bei {trialSeconds} s, trocknen für etwa {dryHours} h.',
  },
  seo: [
    { type: 'title', text: 'So schätzt du die ABS-Aceton-Dampfglättzeit ein, ohne Details zu schmelzen', level: 2 },
    {
      type: 'paragraph',
      html: 'Die ABS-Aceton-Dampfglättung ist ein kontrollierter Oberflächenlösevorgang. Acetondampf erweicht die äußere Haut von ABS, sodass sichtbare FDM-Schichtrillen zu einer glänzenderen Oberfläche verschmelzen. Das nutzbare Fenster ist eng: zu wenig Exposition lässt Schichtlinien unverändert, während zu viel Exposition Kanten abrundet, geprägte Texte erweicht, kleine Löcher schließt und dünne Wände durchhängen lassen kann. Eine Zeitschätzung ist daher am besten als <strong>Startfenster für kurze Testzüge</strong> zu behandeln, nicht als festes Rezept.',
    },
    {
      type: 'paragraph',
      html: 'Der Rechner verwendet fünf praktische Variablen, die die Glättdauer stark beeinflussen: Polymer-Lösungsmittel-Paar, Kammervolumen, Kammertemperatur, Bauteilvolumen und Oberflächendetailgrad. Die Temperatur ist wichtig, weil Dampfdruck und Lösungsmittelaktivität mit der Erwärmung der Kammer schnell ansteigen. Die Bauteilgröße ist wichtig, weil größere Teile mehr Oberfläche und thermische Masse bieten. Der Detailgrad ist wichtig, weil ein Miniatur-Zahnradzahn, Logo oder Schnappverschluss durch eine Zeit ruiniert werden kann, die an einem einfachen rechteckigen Gehäuse perfekt aussieht.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '30-35 %', label: 'sinnvoller erster Testzug der geschätzten Zeit' },
        { value: 'ABS/PVB', label: 'gängige druckbare Polymere für die Dampfglättung' },
        { value: 'Stunden', label: 'Trocknungszeit vor Handhabung oder Montage' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Dampfglättung ist ein Endbearbeitungsschritt, kein Kalibrierschritt',
      html: 'Wenn ein gedrucktes Bauteil ein Lager, Gewinde, Dichtung, Schnappverschluss oder Pressfit-Einsatz aufnehmen muss, maskiere den kritischen Bereich oder validiere den Glättprozess an einem Opferexemplar. Chemische Glättung verändert Kanten und kann funktionale Toleranzen verändern.',
    },
    { type: 'title', text: 'ABS mit Aceton vs PVB mit IPA Dampfglättung', level: 2 },
    {
      type: 'paragraph',
      html: 'ABS wird üblicherweise mit Aceton geglättet, da Aceton ein wirksames Lösungsmittel für die Oberfläche von Acrylnitril-Butadien-Styrol ist. PVB, oft als Filament für transparente oder glänzende Drucke verkauft, wird üblicherweise mit Isopropylalkohol geglättet. Das visuelle Ziel ist ähnlich, aber das Prozessverhalten ist unterschiedlich. ABS mit Aceton kann schnell glänzend und abgerundet werden, besonders in einer warmen Kammer. PVB mit IPA ist oft nachsichtiger bei der allmählichen Glanzentwicklung, kann aber bei zu langer Exposition an Schärfe verlieren.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'ABS mit Acetondampf',
          description: 'Schnelle, starke Glättwirkung mit hohem Risiko der Erweichung von kleinem Text, Ecken, Stiften und dünnen Wänden bei warmer Kammer.',
          points: ['Am besten für sichtbare Gehäuse und Requisiten', 'Temperaturempfindlich', 'Benötigt lange Ausgasung vor Verwendung in geschlossenen Räumen'],
        },
        {
          title: 'PVB mit IPA Dampf',
          description: 'Oft gewählt für glänzende Präsentationsteile und transluzente Drucke, bei denen eine langsamere, kontrollierbarere Glättreaktion gewünscht wird.',
          highlight: true,
          points: ['Nützlich für Ausstellungsstücke', 'Kann Details bei kurzen Zyklen besser erhalten', 'Vor dem Polieren oder Verpacken gründlich trocknen'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Material', 'Typisches Lösungsmittel', 'Prozesscharakter', 'Hauptfehlermodus'],
      rows: [
        ['ABS', 'Aceton', 'Schnelle Oberflächenerweichung und starker Glanz', 'Abgerundete Kanten, durchhängende dünne Wände, geschlossene Löcher'],
        ['PVB', 'Isopropylalkohol', 'Allmählicherer Glanz und Schleierreduzierung', 'Klebrige Oberfläche, verschmierte Textur, erweichte feine Details'],
        ['ASA', 'Aceton oder andere Lösungsmittel', 'ABS-ähnliche Familie, aber formulierungsabhängig', 'UV-beständige Teile können dennoch scharfe Kanten verlieren'],
        ['PLA/PETG', 'Für diesen Rechner nicht geeignet', 'Gängige Lösungsmittel verhalten sich nicht wie ABS/PVB-Glättung', 'Schlechtes Finish oder unsichere Lösungsmittelexperimente'],
      ],
    },
    {
      type: 'tip',
      title: 'Verwende die Materialeinstellung als Lösungsmittelpaar, nicht nur als Plastiknamen',
      html: 'Wähle ABS, wenn der Prozess Acetondampfglättung ist, und PVB, wenn der Prozess IPA-Dampfglättung ist. Unterschiedliche Filamentmischungen, Additive, Pigmente und Tempervorgeschichte können die tatsächliche Reaktion verändern, also teste mit der exakten Spule, die für den endgültigen Druck verwendet wird.',
    },
    { type: 'title', text: 'Warum das Kammervolumen die Dauer der chemischen Glättung verändert', level: 2 },
    {
      type: 'paragraph',
      html: 'Das Kammervolumen beeinflusst, wie schnell sich die Dampfkonzentration aufbaut und wie gleichmäßig sie das gedruckte Bauteil umgibt. Ein kleines Glas kann schnell aggressiv werden, weil eine kleine Menge Lösungsmittel einen kleinen Gasraum einnimmt. Eine größere Kammer benötigt normalerweise mehr Zeit, um die gleiche wirksame Dampfumgebung zu erreichen, kann aber gleichmäßiger sein, wenn die Lösungsmittelquelle verteilt und das Teil über Flüssigkeitskontakt angehoben ist. Der Rechner erhöht die Expositionszeit sanft mit wachsendem Kammervolumen, da der Zusammenhang real, aber in heimischen Endbearbeitungssetups nicht perfekt linear ist.',
    },
    {
      type: 'paragraph',
      html: 'Gleichmäßigkeit ist genauso wichtig wie die Durchschnittskonzentration. Ein Teil, das zu nah an einem lösungsmittelgetränkten Tuch, einer Pfütze oder einer beheizten Platte platziert wird, kann einen gerichteten Angriff erhalten: eine Seite wird glänzend und weich, während die gegenüberliegende Seite matt bleibt. Eine höhere Kammer kann auch Gradienten erzeugen, besonders wenn sich Dampf am Deckel niederschlägt und tropft. Die sicherste Interpretation einer berechneten Zeit ist daher ein geplantes Inspektionsintervall: Entferne das Teil, inspiziere den Nassglanz und stoppe, bevor scharfe Merkmale zu fließen beginnen.',
    },
    {
      type: 'list',
      items: [
        'Positioniere das Teil auf einem lösungsmittelbeständigen Ständer, sodass es niemals flüssiges Lösungsmittel berührt.',
        'Halte saugfähige Lösungsmittelquellen von der Modelloberfläche fern, um einseitige Überexposition zu vermeiden.',
        'Verwende eine Kammer, die groß genug ist, damit Dampf um alle sichtbaren Flächen zirkulieren kann.',
        'Vermeide tropfende Kondensation vom Deckel; Tropfen erzeugen Narben, Krater und Glanzstellen.',
        'Erhöhe die Lösungsmittelmenge nicht endlos, um eine große Kammer auszugleichen; Konzentration und Sicherheitsrisiko steigen gemeinsam.',
      ],
    },
    {
      type: 'card',
      title: 'Eine größere Kammer ist nicht automatisch sicherer',
      html: 'Große abgedichtete Volumen können mehr entzündlichen Dampf enthalten. Eine größere Kammer kann die Glättung verlangsamen, aber auch eine größere gefährliche Atmosphäre schaffen. Verwende die kleinste praktische Kammer, die dem Teil Freiraum und gleichmäßige Exposition bietet.',
    },
    { type: 'title', text: 'Temperatur, Dampfdruck und Detailverlust', level: 2 },
    {
      type: 'paragraph',
      html: 'Die Temperatur ist einer der stärksten Einflussfaktoren, da die Lösungsmittelverdunstung mit der Erwärmung der Kammer zunimmt. Ein paar Grad können das Finish von langsamer satinierter Glättung zu schnellem Glanz und Kantenabrundung verändern. Warmer Acetondampf um ABS ist besonders unnachgiebig: Die Oberfläche kann in kurzer Zeit von matt zu nass aussehend zu erweicht übergehen. Der Rechner verkürzt die Expositionszeit mit steigender Kammertemperatur und erhöht die Risikobewertung, wenn die Temperaturen über eine normale Raumtemperaturreferenz steigen.',
    },
    {
      type: 'paragraph',
      html: 'Aktive Beheizung ist der Punkt, an dem viele Hobby-Glättprozesse unsicher werden. Aceton- und IPA-Dämpfe sind entzündlich, und improvisierte Heizungen, Schalter, Relais, Funken, Heizplatten und schlecht abgedichtete Elektronik können ernsthafte Brandgefahr darstellen. Wenn die Temperatur überhaupt gesteuert wird, sollte dies mit Geräten erfolgen, die für gefährliche Dampfkontexte ausgelegt sind, nicht mit einer offenen Heizung in einem versiegelten Behälter. Für die meisten Anwender ist die Raumtemperaturglättung mit kurzen Inspektionen der vertretbarere Arbeitsablauf.',
    },
    {
      type: 'table',
      headers: ['Kammerzustand', 'Erwartetes Verhalten', 'Praktische Reaktion'],
      rows: [
        ['Kühler Raum unter 18 °C', 'Langsame Dampfwirkung und verzögerter Glanz', 'Längere Intervalle verwenden, aber auf ungleichmäßige Kondensation prüfen'],
        ['Raumtemperatur 20-25 °C', 'Vorhersagbare Basislinie für die meisten Tests', 'Mit der Rechnerschätzung und dem ersten Testzug beginnen'],
        ['Warme Kammer 26-32 °C', 'Schnellere Erweichung und höheres Detailrisiko', 'Zyklen verkürzen und feine Funktionsteile vermeiden'],
        ['Heiße oder aktiv beheizte Kammer', 'Sehr aggressive Dampfumgebung', 'Nicht improvisieren; Brand- und Überexpositionsrisiko steigen stark'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Nie offene Flamme oder freiliegende Heizelemente verwenden',
      html: 'Aceton- und Isopropylalkoholdämpfe können sich entzünden. Halte Glättkammern fern von Flammen, Funken, heißen Werkzeugen, Lichtbogen schlagenden Schaltern, Bürstenmotoren, nicht für Dampfbetrieb ausgelegten Heizungen und statikanfälliger Handhabung.',
    },
    { type: 'title', text: 'Bauteilvolumen, Oberfläche und Geometrieempfindlichkeit', level: 2 },
    {
      type: 'paragraph',
      html: 'Die als Bauteilvolumen bezeichnete Eingabe ist ein praktischer Indikator für die Gesamtgröße des Teils. Sie ist kein perfekter Ersatz für die Oberfläche, aber aus Slicer-Statistiken leicht zu schätzen und zeigt normalerweise, ob der Druck ein kleiner Knopf, eine Ausstellungsfigur oder eine große Gehäuseverkleidung ist. Größere Teile benötigen oft längere Exposition, um ein gleichmäßiges visuelles Finish zu entwickeln, haben aber auch mehr Kanten, Ecken und dünne Abschnitte, die eine ungleichmäßige Lösungsmittelaufnahme zeigen können.',
    },
    {
      type: 'paragraph',
      html: 'Die Geometrie kann das Ergebnis dominieren. Eine glatte zylindrische Vase und eine Gitterhalterung können das gleiche Volumen, aber eine völlig unterschiedliche Glättungstoleranz haben. Dünne Rippen, scharfe geprägte Beschriftungen, kleine Löcher, innere Kanäle, Schwalbenschwänze und Clips erweichen schneller als breite flache Oberflächen. Wenn das Teil kritische Geometrie aufweist, verwende die Feindetail-Einstellung, auch wenn Schichtlinien sichtbar sind, und wiederhole kurze Zyklen, anstatt eine lange Exposition zu versuchen.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Dampfglättung', definition: 'Ein Endbearbeitungsprozess, bei dem Lösungsmitteldampf nur die äußere Oberfläche eines Polymerdrucks erweicht.' },
        { term: 'Überexposition', definition: 'Ein Glättintervall, das lang genug ist, um Details abzurunden, dünne Wände zu verformen oder eine klebrige Oberfläche zu hinterlassen.' },
        { term: 'Ausgasung', definition: 'Der Zeitraum nach der Glättung, in dem absorbiertes Lösungsmittel aus der erweichten Oberfläche verdunstet.' },
        { term: 'Oberflächendetail', definition: 'Kleine Geometrie wie Text, Textur, Löcher, Rillen, Clips und scharfe Kanten, die während der Glättung verloren gehen können.' },
        { term: 'Opferprobe', definition: 'Ein kleiner Testdruck aus demselben Filament und denselben Einstellungen, um die Lösungsmittelreaktion zu validieren, bevor das eigentliche Teil fertiggestellt wird.' },
      ],
    },
    {
      type: 'summary',
      title: 'Geometrieregeln zur Wahl des Detailgrades',
      items: [
        'Verwende feine Details für Text, Zahnräder, kleine Löcher, Schnappverschlüsse, Gewinde oder dünne Wände.',
        'Verwende ausgewogen für dekorative Teile mit moderaten Schichtlinien und keinen engen Passungen.',
        'Verwende starke Schichtlinien nur für einfache Formen, bei denen abgerundete Kanten akzeptabel sind.',
        'Teile komplexe Modelle in maskierte und unmaskierte Zonen auf, wenn nur die Außenhülle Glanz benötigt.',
      ],
    },
    { type: 'title', text: 'Die Rechnerausgaben lesen', level: 2 },
    {
      type: 'paragraph',
      html: 'Die Expositionsausgabe ist die geschätzte Gesamtdampfzeit für einen konservativen ersten Durchgang. Sie wird in Minuten und Sekunden angezeigt, da kurze Endbearbeitungsfenster mit einem Timer leichter zu verwalten sind. Der erste Testzug ist bewusst kürzer, normalerweise etwa ein Drittel der berechneten Exposition. Das frühe Herausnehmen des Teils ermöglicht dir zu prüfen, ob die Oberfläche zu glänzen beginnt, bevor der Detailverlust dauerhaft wird.',
    },
    {
      type: 'paragraph',
      html: 'Die Trocknungszeit schätzt, wie lange der Druck vor enger Handhabung, Montage, Lackierung, Verpackung oder Versiegelung ruhen sollte. Trocknung bedeutet nicht nur, dass sich die Oberfläche trocken anfühlt. Lösungsmittel kann im erweichten Polymer verbleiben und weiterhin Passung, Geruch, Haftung von Farbe und mechanisches Gefühl beeinträchtigen. Mit Aceton geglättete ABS-Teile benötigen oft längere Ausgasung als mit IPA geglättete PVB-Teile, besonders wenn das Teil dick oder die Exposition aggressiv war.',
    },
    {
      type: 'proscons',
      title: 'Eine lange Exposition vs. mehrere kurze Zyklen',
      items: [
        { pro: 'Eine einzelne Exposition ist schneller und einfacher zu planen.', con: 'Sie gibt wenig Warnung, bevor feine Merkmale erweichen.' },
        { pro: 'Kurze Zyklen erleichtern das Stoppen bei einem satinierten oder halbglänzenden Finish.', con: 'Sie erfordern mehr Handhabung und wiederholtes Kammeröffnen.' },
        { pro: 'Mehrere Inspektionen reduzieren die Wahrscheinlichkeit, einen Einzeldruck zu zerstören.', con: 'Das Finish kann leicht ungleichmäßig sein, wenn das Teil zwischen den Zyklen abkühlt oder trocknet.' },
      ],
    },
    {
      type: 'message',
      title: 'Beste Verwendung der Schätzung',
      html: 'Stelle einen Timer für den ersten Testzug ein, inspiziere das Teil unter streifendem Licht und fahre dann in kurzen Schritten fort. Stoppe, während Schichtlinien noch kaum sichtbar sind; die Oberfläche entspannt sich oft noch kurze Zeit nach der Entnahme weiter.',
    },
    { type: 'title', text: 'Sicherer Arbeitsablauf für die chemische Glättung von ABS und PVB', level: 2 },
    {
      type: 'paragraph',
      html: 'Ein sicherer Arbeitsablauf beginnt vor dem Öffnen des Lösungsmittels. Drucke eine kleine Probe mit demselben Filament, derselben Schichthöhe, Wandanzahl und Kühleinstellungen. Reinige das endgültige Teil, damit Staub und Öle nicht unter der erweichten Haut eingeschlossen werden. Bereite einen nicht reaktiven Ständer, Timer, lösungsmittelkompatible Handschuhe, Augenschutz, Belüftung und einen Ort vor, an dem das Teil trocknen kann, ohne berührt zu werden. Halte Lösungsmittelbehälter geschlossen, wenn du die Kammer nicht aktiv befüllst.',
    },
    {
      type: 'list',
      items: [
        'Bestätige, dass das Filament tatsächlich ABS oder PVB ist, nicht PLA, PETG, PC-Mischung oder unbekanntes Recyclingmaterial.',
        'Entferne Stützen und schleife nur vor der Glättung; Schleifen nach der Glättung kann den Glanz ungleichmäßig durchtrennen.',
        'Maskiere Löcher, Lagersitze, Gewinde und Passflächen, wenn die Maße wichtig sind.',
        'Beginne mit der Zeit des ersten Testzugs, dann füge kurze Intervalle hinzu, wenn das Finish noch zu matt ist.',
        'Trockne das Teil in einem belüfteten Bereich, bis Lösungsmittelgeruch und Klebrigkeit verschwunden sind.',
        'Entsorge Lösungsmitteltücher und kontaminierte Materialien gemäß den örtlichen Vorschriften für Gefahrstoffe.',
      ],
    },
    {
      type: 'tip',
      title: 'Beurteile das Finish nicht, während die Oberfläche nass ist',
      html: 'Eine frisch exponierte ABS- oder PVB-Oberfläche kann glänzender aussehen, als sie nach dem Trocknen sein wird. Inspiziere sowohl Glanz als auch Geometrie: Wenn Ecken geschwollen aussehen oder kleiner Text weich wird, stoppe, auch wenn Schichtlinien noch schwach sichtbar sind.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Belüftung ist Teil der Prozesszeit',
      html: 'Die Trocknung nach der Glättung sollte dort erfolgen, wo sich keine Dämpfe ansammeln können. Ein sofort in eine Schublade, einen Versandbeutel, eine Vitrine oder ein Elektronikgehäuse gelegtes Teil kann Geruch und Lösungsmittel länger als erwartet behalten.',
    },
    { type: 'title', text: 'Häufige Probleme und Korrekturmaßnahmen', level: 2 },
    {
      type: 'table',
      headers: ['Symptom', 'Wahrscheinliche Ursache', 'Nächste Anpassung'],
      rows: [
        ['Schichtlinien noch scharf', 'Exposition zu kurz oder Kammer zu kühl', 'Mit kurzen Schritten wiederholen, statt Zeit zu verdoppeln'],
        ['Kanten abgerundet oder Text unscharf', 'Überexposition für den Detailgrad', 'Feindetail-Einstellung, niedrigere Temperatur oder Merkmale maskieren'],
        ['Klebrige Oberfläche nach Trocknung', 'Zu viel Lösungsmittel absorbiert oder unzureichende Belüftung', 'Trocknungszeit verlängern und zukünftige Exposition reduzieren'],
        ['Eine Seite glänzender als andere', 'Ungleichmäßige Dampfquelle oder Teil zu nah am Lösungsmittel', 'Teil anheben, Quelle verteilen, nur zwischen Zyklen drehen'],
        ['Weißer Schleier oder wolkige Flecken', 'Kondensation, Feuchtigkeit oder ungleichmäßige Verdunstung', 'Kammersättigung reduzieren und Deckeltropfen vermeiden'],
      ],
    },
    {
      type: 'paragraph',
      html: 'Wenn ein Teil klebrig wird, versuche nicht, es sofort durch Hinzufügen von mehr Dampf zu reparieren. Mehr Lösungsmittel vertieft normalerweise die erweichte Zone. Lasse das Teil vollständig trocknen und entscheide dann, ob ein sehr kurzer Folgezyklus das Risiko wert ist. Wenn Kanten bereits geflossen sind, kann die Form durch Trocknen nicht wiederhergestellt werden. Bei kritischen Teilen ist die zuverlässigere Lösung der Nachdruck mit angepassten Slicer-Einstellungen und die Verwendung eines kürzeren Endbearbeitungsfensters.',
    },
    {
      type: 'card',
      title: 'Slicereinstellungen, die die Glättzeit reduzieren',
      html: 'Niedrigere Schichthöhe, stabile Extrusion, trockenes Filament, angemessene Kühlung und gut eingestellter Pressure Advance reduzieren die Menge der erforderlichen chemischen Arbeit. Die chemische Glättung sollte einen Druck verfeinern, nicht starkes Ringing, Lücken, Blobs, nasses Filament oder Unterextrusion verbergen.',
    },
    {
      type: 'summary',
      title: 'Praktische Endbearbeitungsliste',
      items: [
        'Schätze die Exposition mit dem genauen Material, der Kammer, Temperatur, Bauteilgröße und Detailgrad.',
        'Führe eine Opferprobe oder einen ersten Testzug durch, bevor du das endgültige Teil fertigstellst.',
        'Verwende kurze Zyklen, wenn Details wichtig sind, und stoppe, bevor die Oberfläche an Schärfe verliert.',
        'Erlaube ausreichend Trocknungszeit, damit Lösungsmittelgeruch, Klebrigkeit und dimensionale Weichheit verschwinden.',
        'Behandle entzündliche Dampfkontrolle als Sicherheitsanforderung, nicht als optionale Bequemlichkeit.',
      ],
    },
  ],
  faq: [
    {
      question: 'Wie lange sollte ABS in Acetondampf bleiben?',
      answer: 'Es gibt keine universelle Zeit, da Kammervolumen, Temperatur, Bauteilgeometrie und Filamentformulierung eine Rolle spielen. Verwende die Rechnerschätzung als Ausgangspunkt und inspiziere dann zur kürzeren ersten Testzugzeit, bevor du fortfährst.',
    },
    {
      question: 'Kann PVB mit Isopropylalkoholdampf geglättet werden?',
      answer: 'Ja, viele PVB-Filamente sind für die IPA-Glättung ausgelegt. Der Prozess ist normalerweise allmählicher als bei ABS mit Aceton, aber Überexposition kann die Oberfläche dennoch klebrig machen oder feine Details verschmieren.',
    },
    {
      question: 'Verkürzt eine wärmere Kammer die Glättzeit?',
      answer: 'Ja. Wärmerer Lösungsmitteldampf wirkt normalerweise schneller, erhöht aber auch die Entzündlichkeit und das Detailverlustrisiko. Vermeide improvisierte Heizungen und halte Dampf von Zündquellen fern.',
    },
    {
      question: 'Wie lange sollte ein geglättetes Teil trocknen?',
      answer: 'Plane Stunden, nicht Minuten. Mit Aceton geglättetes ABS benötigt oft längere Ausgasung als mit IPA geglättetes PVB, besonders bei dicken Teilen oder aggressiven Expositionen.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Wähle das Material-Lösungsmittel-Paar', text: 'Wähle ABS für Acetondampfglättung oder PVB für IPA-Dampfglättung.' },
    { name: 'Gib die Kammerbedingungen ein', text: 'Füge Kammervolumen und Kammertemperatur in metrischen oder US-Einheiten hinzu.' },
    { name: 'Beschreibe das Bauteil', text: 'Gib das ungefähre Bauteilvolumen ein und wähle einen Oberflächendetailgrad, der den kleinsten Merkmalen entspricht.' },
    { name: 'Verwende den ersten Testzug', text: 'Inspiziere das Teil zur kürzeren Testzeit, bevor du die volle geschätzte Exposition ausführst.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'ABS Aceton und PVB IPA Dampfglättzeit Rechner',
      description: 'Schätze die chemische Dampfglätt-Expositions- und Trocknungszeit für die ABS-Aceton- und PVB-IPA-Endbearbeitung.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Wie lange sollte ABS in Acetondampf bleiben?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Verwende eine konservative Schätzung basierend auf Kammervolumen, Temperatur, Bauteilgröße und Detailgrad, dann inspiziere zu einer kürzeren ersten Testzugzeit.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'So schätzt du die chemische Glättzeit für ABS- oder PVB-Drucke',
      step: [
        { '@type': 'HowToStep', text: 'Wähle ABS mit Aceton oder PVB mit IPA.' },
        { '@type': 'HowToStep', text: 'Gib Kammervolumen und -temperatur ein.' },
        { '@type': 'HowToStep', text: 'Gib Bauteilvolumen und Oberflächendetailgrad ein.' },
        { '@type': 'HowToStep', text: 'Beginne mit dem ersten Testzug und fahre nur fort, wenn Details sicher bleiben.' },
      ],
    },
  ],
};
