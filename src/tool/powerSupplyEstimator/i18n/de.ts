import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { PowerSupplyEstimatorUI } from '../ui';

export const content: ToolLocaleContent<PowerSupplyEstimatorUI> = {
  slug: 'netzteil-dimensionierung-3d-drucker-rechner',
  title: 'Netzteil Dimensionierung für 3D Drucker Hotends, Heizbetten, Motoren und 12V auf 24V Upgrades berechnen',
  description: 'Berechnen Sie die benötigte Netzteilleistung und den maximalen Strom für ein 3D-Drucker-Upgrade unter Berücksichtigung von Heizbett, Hotend-Heizpatrone, Schrittmotoren, Zusatzlast und Sicherheitsreserve.',
  ui: {
    systemVoltageLabel: 'Systemspannung',
    bedPowerLabel: 'Heizbett',
    hotendPowerLabel: 'Hotend-Heizpatrone',
    motorsLabel: 'Motoren',
    motorPowerLabel: 'Pro Motor',
    auxiliaryPowerLabel: 'Zusatzlast',
    safetyMarginLabel: 'Sicherheitsreserve',
    totalLoadLabel: 'Direkte Last',
    psuRequiredLabel: 'Benötigtes Netzteil',
    currentRequiredLabel: 'Maximaler Strom',
    recommendedPsuLabel: 'nächstes Standard-Netzteil',
    utilizationLabel: 'Last auf gewählter Größe',
    thermalMapLabel: 'Thermische Leistungsverteilung',
    bedSegmentLabel: 'Bett',
    hotendSegmentLabel: 'Hotend',
    motorsSegmentLabel: 'Motoren',
    auxiliarySegmentLabel: 'Zusatz',
    headroomSegmentLabel: 'Reserve',
    scenarioLabel: 'Voreinstellungen',
    scenarioBedSlinger: 'Bett-Schlitten',
    scenarioCoreXY: 'CoreXY',
    scenarioLargeFormat: 'Großformat',
    copyButton: 'Zusammenfassung kopieren',
    copiedButton: 'Kopiert',
    controlsAriaLabel: 'Netzteil-Eingaben',
    resultsAriaLabel: 'Netzteil-Ergebnisse',
    copiedSummaryTemplate: '3D-Drucker-Netzteil: {requiredWatts} W benötigt, {currentAmps} A bei {voltage} V, empfohlen {recommendedWatts} W.',
    wattsUnit: 'W',
    ampsUnit: 'A',
    voltsUnit: 'V',
    percentUnit: '%',
    countUnit: 'x',
  },
  seo: [
    { type: 'title', text: 'Netzteil für 3D-Drucker richtig dimensionieren - ohne Rätselraten', level: 2 },
    {
      type: 'paragraph',
      html: 'Ein 3D-Drucker-Netzteil wird anhand der gleichzeitig aktiven Lasten dimensioniert: Heizbett, Hotend-Heizpatrone, Schrittmotoren, Controller-Platine, Lüfter, LEDs, Sensoren, Kammerheizungsrelais und jegliche Zusatzelektronik. Die grundlegende elektrische Beziehung ist einfach: <strong>Watt gleich Volt mal Ampere</strong>. Ein Drucker, der 420 W an einem 24-V-System benötigt, kann etwa 17,5 A ziehen, bevor zusätzliche Reserven für Anlauf, Regelverluste oder zukünftige Erweiterungen berücksichtigt werden.',
    },
    {
      type: 'paragraph',
      html: 'Der Fehler, der viele instabile Drucker verursacht, besteht darin, den durchschnittlichen Druckverbrauch statt der maximalen gesteuerten Last zu verwenden. Während eines normalen PLA-Drucks kann das Bett mit reduzierter Tastung laufen, sobald die Zieltemperatur erreicht ist, aber während der Aufheizphase können Bett und Hotend beide gleichzeitig mit 100 % laufen. Wenn das Netzteil nur anhand einer smarten Steckdosenmessung während des Drucks dimensioniert wird, kann es ausreichend erscheinen, während es beim Aufheizen, bei ABS-Einsatz mit geschlossenem Bauraum oder bei Kaltraum-Erholungszyklen an seine Grenzen stößt.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: 'P = U × I', label: 'Grundformel der Dimensionierung' },
        { value: '20-35%', label: 'typische praktische Reserve' },
        { value: '24V', label: 'weniger Strom als 12V bei gleicher Leistung' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Netzteilleistung ist keine Freigabe zur Überlastung von Steckverbindern',
      html: 'Ein 500-W-Netzteil macht nicht jede Klemme, Leiterbahn, XT-Steckverbindung, Hohlstecker oder Schraubklemme für 500 W sicher. Der Strom muss auf Kabel- und Steckerebene geprüft werden, insbesondere bei Heizbetten und Kammerheizungen.',
    },
    { type: 'title', text: 'Welche Lasten müssen in eine Netzteilleistungsberechnung einbezogen werden?', level: 2 },
    {
      type: 'paragraph',
      html: 'Bei einem FDM-Drucker ist das Heizbett in der Regel die dominierende Last. Ein übliches 220 × 220 mm Bett liegt etwa bei 180-250 W, während ein größeres 300 × 300 mm Bett je nach Spannung und Konstruktion 300-500 W erreichen kann. Wechselstrombetten sind anders, da ihre Heizleistung nicht vom DC-Netzteil des Druckers geliefert wird; in diesem Fall sind nur die DC-Steuerelektronik, Lüfter, Hotend, Motoren und der geringe Strom des Solid-State-Relais-Eingangs einzubeziehen.',
    },
    {
      type: 'paragraph',
      html: 'Die Hotend-Heizpatrone ist die nächste offensichtliche Last. Serienpatronen haben oft 30 W oder 40 W, High-Flow-Hotends verwenden häufig 50 W oder 60 W, und einige Hochtemperatur-Aufbauten nutzen 80 W oder mehr. Eine leistungsstärkere Patrone verbraucht nicht automatisch dauerhaft diese Leistung, aber das Netzteil muss die volle Nennleistung unterstützen, da die Firmware während des Aufheizens oder der Erholung nach einer großen Extrusionsanforderung 100 % Tastung befehlen kann.',
    },
    {
      type: 'list',
      items: [
        'Heizbettleistung aus der Bett-Spezifikation oder durch Messung von Spannung und Widerstand.',
        'Hotend-Patronenleistung nach Nennwert, nicht nach durchschnittlicher Tastung.',
        'Schrittmotor-Reserve basierend auf Motoranzahl und Treiberstromeinstellungen.',
        'Zusatzleistung für Controller, Lüfter, Raspberry Pi, LEDs, Sensoren, Relais und Werkzeugkopfplatinen.',
        'Sicherheitsreserve für transiente Lasten, Alterung von Kondensatoren, Gehäusewärme und zukünftige Upgrades.',
      ],
    },
    {
      type: 'table',
      headers: ['Komponente', 'Typischer Bereich', 'Dimensionierungshinweis'],
      rows: [
        ['220 mm Heizbett', '180-250 W', 'Oft die größte DC-Last bei einem Desktop-Drucker.'],
        ['300 mm Heizbett', '300-500 W', 'Kabelquerschnitt und Bett-MOSFET-Pfad sorgfältig prüfen.'],
        ['Hotend-Heizpatrone', '30-80 W', 'Nennleistung der Patrone verwenden, nicht die beobachtete Durchschnittsleistung.'],
        ['Schrittmotoren', '6-15 W pro Stück', 'Hängt von Strombegrenzung, Spannung, Treibermodus und Haltestrom ab.'],
        ['Lüfter und Elektronik', '10-60 W', 'Werkzeugkopfplatinen, LEDs und Einplatinenrechner summieren sich schnell.'],
      ],
    },
    { type: 'title', text: '12V vs. 24V Netzteilanforderungen', level: 2 },
    {
      type: 'paragraph',
      html: 'Bei gleicher Leistung benötigt ein 24-V-Drucker den halben Strom eines 12-V-Druckers. Eine 360-W-Last zieht 30 A bei 12 V, aber nur 15 A bei 24 V. Geringerer Strom reduziert den Spannungsabfall in Kabeln, reduziert Wärme in Steckverbindern und gibt Bett- und Hotend-Schaltungen mehr praktische Reserve. Deshalb bevorzugen viele moderne 3D-Drucker und Upgrade-Platinen 24 V für Heizungen und Bewegungselektronik.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '12V Systeme',
          description: 'Nützlich für ältere Drucker und automobilähnliches Zubehör, aber hohe Bettleistung kann sehr hohe Ströme erfordern.',
          points: ['Höhere Stromstärke bei gleicher Leistung', 'Empfindlicher gegenüber Steckverbinderwiderständen', 'Üblich bei älteren RepRap-Maschinen'],
        },
        {
          title: '24V Systeme',
          description: 'Für viele moderne Drucker bevorzugt, da die gleiche Heizleistung mit geringerem Strom geliefert wird.',
          highlight: true,
          points: ['Geringere Stromstärke bei gleicher Leistung', 'Weniger Spannungsabfall in der Verkabelung', 'Besser geeignet für größere DC-Heizbetten'],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Nutzen Sie den Strom als praktische Verkabelungsprüfung',
      html: 'Nach Berechnung der benötigten Watt teilen Sie durch die Spannung, um den maximalen Strom zu erhalten. Dieser Ampere-Wert ist der Wert, der für Netzteilanschlüsse, Sicherungen, Schalter, Kabelquerschnitt, Bettsteckverbinder und Platinen-Eingangsnennwerte zählt.',
    },
    {
      type: 'proscons',
      title: 'Spannungswechsel während eines Upgrades',
      items: [
        { pro: 'Der Wechsel von 12 V auf 24 V kann Strom und Erwärmung der Steckverbinder bei gleicher Bettleistung reduzieren.', con: 'Lüfter, LEDs, Pumpen und einige Controller-Platinen benötigen möglicherweise Austausch oder Tiefsetzsteller.' },
        { pro: '24-V-Hotends und -Betten erreichen die Temperatur oft schneller, wenn sie korrekt spezifiziert sind.', con: 'Eine falsch an 24 V angeschlossene 12-V-Heizung kann gefährlich überlastet sein.' },
        { pro: 'Treiber- und Bewegungssysteme verhalten sich mit moderner 24-V-Elektronik oft besser.', con: 'Jede Zubehörspannung muss vor dem ersten Einschalten überprüft werden.' },
      ],
    },
    { type: 'title', text: 'Wie viel Sicherheitsreserve sollte ein 3D-Drucker-Netzteil haben?', level: 2 },
    {
      type: 'paragraph',
      html: 'Eine Sicherheitsreserve ist keine verschwendete Kapazität, sondern Betriebsspielraum. Schaltnetzteile fühlen sich am wohlsten, wenn sie nicht dauerhaft mit ihrer Nennleistung in einem warmen Gehäuse betrieben werden. Ein Druckernetzteil, das unter einer beheizten Kammer, neben einer Bett-Kabelkette oder in einem schlecht belüfteten Sockel montiert ist, kann heißer laufen als das gleiche Netzteil auf einem offenen Tisch. Wärme verkürzt die Lebensdauer von Kondensatoren und kann Abschaltungen unter Last auslösen.',
    },
    {
      type: 'paragraph',
      html: 'Für einen typischen Desktop-Drucker sind 20 % Reserve ein vernünftiges Minimum, wenn die Lastschätzung genau ist. Für große Betten, High-Flow-Hotends, Kammerlüfter, LED-Beleuchtung oder zukünftige Werkzeugkopf-Upgrades sind 30-35 % komfortabler. Für experimentelle Drucker, Hochtemperaturmaschinen oder Aufbauten, die einen zweiten Hotend, aktive Kammerheizungssteuerungen oder viele Zubehörteile ergänzen könnten, ist die Wahl einer Standard-Netzteilstufe über der berechneten Anforderung in der Regel die gelassenere Ingenieursentscheidung.',
    },
    {
      type: 'table',
      headers: ['Reserve', 'Anwendungsfall', 'Praktische Bedeutung'],
      rows: [
        ['10%', 'Eng bekannte Lasten, offener Rahmen, Qualitätsnetzteil', 'Funktioniert nur, wenn jede Last und jeder Kabelpfad bereits verifiziert ist.'],
        ['20%', 'Normaler Desktop-Drucker', 'Gute Basis für einen stabilen Serien-ähnlichen Aufbau.'],
        ['30%', 'Aufgerüstetes Bett, High-Flow-Hotend, geschlossene Elektronik', 'Besserer thermischer Komfort und Zukunftsflexibilität.'],
        ['40%+', 'Großformat- oder experimenteller Drucker', 'Nützlich, wenn sich Lastannahmen später ändern könnten.'],
      ],
    },
    {
      type: 'card',
      title: 'Warum ein größeres Netzteil nicht mehr Leistung in den Drucker zwingt',
      html: 'Ein geregeltes DC-Netzteil bietet Spannung; die angeschlossenen Lasten ziehen Strom entsprechend Widerstand, Tastung und Steuerelektronik. Ein 600-W-Netzteil an einem Drucker, der 300 W benötigt, drückt keine 600 W ins Bett. Es hat einfach genug Kapazität, um den Strom zu liefern, ohne an seiner Grenze zu arbeiten.',
    },
    { type: 'title', text: 'Heizbett-Leistungsaufnahme und thermisches Verhalten', level: 2 },
    {
      type: 'paragraph',
      html: 'Heizbetten sind ohmsche Lasten, daher kann ihre theoretische Leistung aus Spannung und Widerstand mit <code>P = U² / R</code> geschätzt werden. Wenn ein 24-V-Bett 2,4 Ohm Widerstand hat, ist es etwa ein 240-W-Bett. Die tatsächliche Leistung variiert mit der Versorgungsspannung, Verkabelungsverlusten, MOSFET-Widerstand und Betttemperatur, da sich der Widerstand beim Erwärmen des Heizers leicht ändern kann.',
    },
    {
      type: 'paragraph',
      html: 'Ein Bett, das während eines stabilen PLA-Drucks mit 35 % Tastung taktet, kann beim Start immer noch 100 % Tastung fordern. Für die Netzteildimensionierung verwenden Sie die volle Heizleistung. Für die Stromkostenschätzung ist die durchschnittliche Tastung nützlicher. Diese beiden Fragen zu vermischen, ist eine häufige Ursache für unterdimensionierte Netzteile: Der Energieverbrauch über einen zweistündigen Druck ist nicht dasselbe wie die momentane elektrische Kapazität.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Ausnahme: Wechselstrom Heizbett',
      html: 'Wenn der Drucker ein netzbetriebenes Wechselstrom Heizbett verwendet, beziehen Sie die Bettleistung nicht in die DC-Netzteillast ein. Dimensionieren Sie stattdessen die AC-Verkabelung, Sicherung, Relais, Zugentlastung, Erdung und thermischen Schutz separat. Das DC-Netzteil versorgt weiterhin den Controller, Hotend, Motoren und Zubehör.',
    },
    {
      type: 'list',
      items: [
        'Isolierte Bettunterseite: weniger Wärmeverlust und geringere durchschnittliche Tastung nach dem Aufheizen.',
        'Dicke Aluminium-Fräsplatte: langsameres Aufheizen, aber gleichmäßigere Wärmeverteilung.',
        'Große Glasplatte: mehr thermische Masse, oft längeres Aufheizen bei gleicher Leistung.',
        'Kalter Raum oder offener Rahmen: mehr Erholungsleistung zur Temperaturerhaltung erforderlich.',
      ],
    },
    { type: 'title', text: 'Hotend, Motoren, Lüfter und Zusatzlasten', level: 2 },
    {
      type: 'paragraph',
      html: 'Schrittmotoren werden oft über- oder unterschätzt, weil ihr elektrisches Verhalten nicht so einfach ist wie das Addieren von Nennspannung und -strom. Moderne Chopper-Treiber regeln den Wicklungsstrom, und die vom Netzteil aufgenommene Leistung hängt von Treibereinstellungen, Motordrehzahl, Haltestromreduzierung und mechanischer Last ab. Für die Netzteildimensionierung ist eine praktische Reserve von 8-15 W pro aktivem Schrittmotor für gängige Desktop-Drucker oft ausreichend, aber Motoren mit sehr hohem Strom oder viele Z-Motoren verdienen eine direkte Berechnung aus der Treiberkonfiguration.',
    },
    {
      type: 'paragraph',
      html: 'Zusatzlasten werden leicht vergessen, weil jedes Element klein ist: Hotend-Lüfter, Bauteilkühlungslüfter, Controller-Lüfter, Kammer-Umwälzlüfter, LEDs, Filamentsensor, Sonde, Mainboard, Display, Werkzeugkopfplatine, Raspberry Pi, Kamera, USB-Hub und Tiefsetzstellerverluste. Ein Drucker mit einem Einplatinenrechner und Gehäusebeleuchtung kann 20-40 W hinzufügen, ohne dass es sich wie eine große elektrische Änderung anfühlt.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Dauerleistung', definition: 'Die Last, die ein Netzteil über lange Zeiträume unter spezifizierten Kühl- und Temperaturbedingungen liefern soll.' },
        { term: 'Spitzenlast', definition: 'Eine kurzfristige Anforderung, die höher als die Durchschnittslast sein kann, wie beim Aufheizen oder gleichzeitigen Heizer-Erholung.' },
        { term: 'Spannungsabfall', definition: 'Die Spannung, die in Kabeln und Steckverbindern verloren geht, weil reale Leiter einen Widerstand haben.' },
        { term: 'Tastgrad', definition: 'Der prozentuale Zeitanteil, in dem ein gesteuerter Heizer während einer Regelperiode eingeschaltet ist.' },
        { term: 'Reserve', definition: 'Zusätzliche Kapazität über der berechneten Last, die das Netzteil von seiner Grenze fernhält.' },
      ],
    },
    {
      type: 'summary',
      title: 'Checkliste Zusatzlasten',
      items: [
        'Addieren Sie alle Lüfter mit ihrer Nennleistung oder Spannung mal Strom.',
        'Beziehen Sie Einplatinenrechner und Kameras ein, wenn sie vom Druckernetzteil versorgt werden.',
        'Reservieren Sie Leistung für LED-Streifen, Werkzeugkopfplatinen, Relais, Sonden und Tiefsetzstellerverluste.',
        'Rechnen Sie nach dem Hinzufügen von Gehäuseheizungen, zusätzlichen Extrudern oder Hochstrom-Bauteilkühlung neu.',
      ],
    },
    { type: 'title', text: 'Die Rechner-Ergebnisse verstehen', level: 2 },
    {
      type: 'paragraph',
      html: 'Die direkte Last ist die Summe aus Bett, Hotend, Motoren und Zusatzeingaben vor der Reserve. Der Wert für das benötigte Netzteil fügt die gewählte Sicherheitsreserve hinzu. Der maximale Strom teilt diese Anforderung durch die Systemspannung und beantwortet damit die praktische Verkabelungsfrage: Wie viele Ampere müssen das Netzteil und der Eingangspfad bei der gewählten Spannung sicher führen können?',
    },
    {
      type: 'paragraph',
      html: 'Die empfohlene Netzteilgröße rundet auf eine gängige Leistungsklasse auf. Wenn der erforderliche Wert 382 W beträgt, mag ein 400-W-Netzteil mathematisch ausreichend erscheinen, aber ein 450-W- oder 500-W-Modell kann vorzuziehen sein, wenn es bessere Kühlung, bessere Anschlüsse, anerkannte Sicherheitszertifizierungen oder eine ehrlichere Dauerleistung bietet. Die Etikettenleistung ist nur ein Teil der Netzteilqualität.',
    },
    {
      type: 'table',
      headers: ['Ergebnis', 'Verwendung', 'Warnzeichen'],
      rows: [
        ['Benötigte Watt', 'Wahl der Netzteilleistung', 'Wert liegt innerhalb weniger Watt der Netzteilangabe.'],
        ['Maximaler Strom', 'Kabel-, Sicherungs- und Steckverbinderprüfung', 'Strom überschreitet Platinen- oder Klemmen-Nennwerte.'],
        ['Empfohlene Größe', 'Einkaufs-Auswahlliste', 'Billiges No-Name-Netzteil mit hoher Wattangabe bei winzigen Anschlüssen.'],
        ['Auslastung', 'Thermische Komfortschätzung', 'Dauerlast liegt über etwa 80-85 %.'],
      ],
    },
    {
      type: 'message',
      title: 'Praktische Kaufregel',
      html: 'Wählen Sie das erste Qualitätsnetzteil oberhalb der berechneten Anforderung und prüfen Sie dann Ausgangsspannung, Nennstrom, Kühlausrichtung, Gehäusebelüftung, Schutzerdung, Sicherungsstrategie und Steckverbindernennwerte vor der Installation.',
    },
    { type: 'title', text: 'Häufige Fehler bei der Netzteildimensionierung für 3D-Drucker-Upgrades', level: 2 },
    {
      type: 'list',
      items: [
        'Durchschnittliche Smart-Steckdosen-Watt statt maximaler DC-Heizlast verwenden.',
        'Vergessen, dass 12-V-Systeme bei gleicher Leistung den doppelten Strom von 24-V-Systemen benötigen.',
        'Ein größeres Bett hinzufügen, aber den ursprünglichen Platinen-Eingangsstecker und Kabelquerschnitt beibehalten.',
        'Eine Hochleistungs-Hotend-Patrone einbauen, ohne MOSFET-, Sicherungs- und Firmware-Temperaturschutz zu prüfen.',
        'Raspberry Pi, Kamera, LEDs und Lüfter vom Drucker versorgen, ohne Zusatzlast einzurechnen.',
        'Ein Netzteil nach beworbener Spitzenleistung statt nach Dauerleistung und Sicherheitszertifizierung kaufen.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Stopp, wenn Kabel oder Steckverbinder heiß werden',
      html: 'Warme Kabel, gebräunte Klemmen, geschmolzene Gehäuse, sporadische Resets oder Betttemperaturabfälle während der Bewegung sind keine Tuning-Probleme. Es sind elektrische Symptome, die vor dem Weiterdrucken überprüft werden müssen.',
    },
    {
      type: 'paragraph',
      html: 'Der Rechner schätzt die Netzteilleistung; er zertifiziert nicht das gesamte elektrische System. Ein sicherer Drucker benötigt auch korrekte Erdung, Zugentlastung, Sicherungen, Aderendhülsen wo angemessen, für den tatsächlichen Strom dimensionierte Crimpverbinder, Firmware-Temperaturschutz und eine Verkabelungsführung, die Netzspannung von Niederspannungselektronik getrennt hält.',
    },
    {
      type: 'card',
      title: 'Wann Netzteile aufgeteilt werden sollten',
      html: 'Große Drucker verwenden manchmal separate Netzteile für Bett, Bewegungselektronik und Zubehör. Die Aufteilung kann den Strom durch eine einzelne Platine reduzieren und die Wartung vereinfachen, aber Masseverbindungen, Schaltlogik, Sicherungen und Not-Halt-Verhalten müssen bewusst ausgelegt werden.',
    },
    { type: 'title', text: 'Praxisbeispiele: Seriendrucker, CoreXY-Upgrade und großes Bett', level: 2 },
    {
      type: 'paragraph',
      html: 'Ein kompakter Bett-Schlitten-Drucker mit 220-W-Bett, 40-W-Hotend, vier Motoren zu je 10 W und 25 W Elektronik hat eine direkte Last von 325 W. Mit 25 % Reserve beträgt die benötigte Netzteilleistung etwa 406 W. Bei 24 V sind das rund 16,9 A, sodass ein hochwertiges 450-W- oder 500-W-24-V-Netzteil je nach Anschlusslayout und Kühlung ein sinnvolles Ziel ist.',
    },
    {
      type: 'paragraph',
      html: 'Ein CoreXY-Upgrade mit 300-W-Bett, 60-W-High-Flow-Hotend, fünf Motoren zu je 12 W und 45 W Zusatzlast summiert sich vor der Reserve auf 465 W. Mit 30 % Reserve werden etwa 605 W oder 25,2 A bei 24 V benötigt. Dieser Aufbau gehört in die 600-750-W-Klasse, und die Bettverkabelung muss als Hauptstrompfad und nicht als Nebensache behandelt werden.',
    },
    {
      type: 'paragraph',
      html: 'Ein Großformatdrucker mit 600-W-DC-Bett, 80-W-Hotend, sechs Motoren zu je 14 W und 80 W Zusatzlast erreicht 844 W vor der Reserve. Mit 35 % Reserve beträgt die Anforderung etwa 1139 W. An diesem Punkt ziehen viele Erbauer ein AC-Bett oder eine getrennte Stromarchitektur in Betracht, da DC-Strom, Verkabelung, Sicherungen und Wärmemanagement zu zentralen Konstruktionsbeschränkungen werden.',
    },
    {
      type: 'summary',
      title: 'Abschließender Dimensionierungs Workflow',
      items: [
        'Listen Sie jede Last auf, die während des Aufheizens oder der Erholung laufen kann.',
        'Berechnen Sie die direkten Watt und fügen Sie eine realistische Reserve hinzu.',
        'Rechnen Sie Watt bei der tatsächlichen Systemspannung in Ampere um.',
        'Wählen Sie ein Qualitätsnetzteil mit Dauerleistung oberhalb des Ergebnisses.',
        'Prüfen Sie Kabel, Steckverbinder, Sicherungen, Platinen-Nennwerte und Kühlung, bevor Sie den Drucker einschalten.',
      ],
    },
  ],
  faq: [
    {
      question: 'Wie viele Watt benötigt mein 3D-Drucker-Netzteil?',
      answer: 'Addieren Sie Heizbett, Hotend-Patrone, Motoren, Elektronik, Lüfter und Zubehör und fügen Sie dann eine Sicherheitsreserve hinzu. Viele aufgerüstete Desktop-24-V-Drucker liegen zwischen 400 W und 600 W, während große Betten deutlich mehr benötigen können.',
    },
    {
      question: 'Ist 24V besser als 12V für ein 3D-Drucker-Netzteil?',
      answer: 'Bei gleicher Leistung nutzt 24 V den halben Strom von 12 V. Geringerer Strom bedeutet in der Regel weniger Spannungsabfall und weniger Erwärmung der Steckverbinder, aber alle Heizungen, Lüfter, Platinen und Zubehörteile müssen mit der gewählten Spannung kompatibel sein.',
    },
    {
      question: 'Sollte ich das Heizbett in die DC-Netzteilberechnung einbeziehen?',
      answer: 'Ja, wenn es sich um ein DC-Heizbett handelt, das vom Druckernetzteil versorgt wird. Beziehen Sie kein netzbetriebenes AC-Bett in die DC-Netzteilleistung ein; dimensionieren Sie dessen AC-Verkabelung, Relais, Sicherung und Sicherheitsschutz separat.',
    },
    {
      question: 'Welche Sicherheitsreserve sollte ich als Netzteil-Reserve verwenden?',
      answer: 'Verwenden Sie mindestens 20 % für einen normalen bekannten Aufbau. Verwenden Sie 30-35 % für aufgerüstete Betten, High-Flow-Hotends, geschlossene Elektronik oder zukünftiges Zubehör.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Heizlasten eingeben', text: 'Geben Sie die Nennleistung von Heizbett und Hotend-Heizpatrone ein.' },
    { name: 'Bewegung und Zubehör hinzufügen', text: 'Geben Sie Motoranzahl, Reserve pro Motor, Lüfter, Platinen, LEDs und andere Zusatzlasten ein.' },
    { name: 'Spannung und Reserve wählen', text: 'Wählen Sie 12 V oder 24 V und legen Sie eine zum Aufbaurisiko passende Sicherheitsreserve fest.' },
    { name: 'Watt und Ampere prüfen', text: 'Nutzen Sie die benötigten Watt für die Netzteilsuche und die maximalen Ampere für Kabel-, Sicherungs- und Steckverbinderprüfung.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: '3D-Drucker-Netzteil-Dimensionierungsrechner',
      description: 'Berechnen Sie die Netzteilleistung und den Strom für einen 3D-Drucker aus Bett-, Hotend-, Motor-, Zusatz- und Reserve-Lasten.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Wie viele Watt benötigt mein 3D-Drucker-Netzteil?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Addieren Sie Heizbett, Hotend-Patrone, Motoren, Elektronik, Lüfter und Zubehör und fügen Sie dann eine Sicherheitsreserve hinzu.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'So dimensionieren Sie ein 3D-Drucker-Netzteil',
      step: [
        { '@type': 'HowToStep', text: 'Heizlasten eingeben.' },
        { '@type': 'HowToStep', text: 'Bewegungs- und Zubehörlasten hinzufügen.' },
        { '@type': 'HowToStep', text: 'Systemspannung und Sicherheitsreserve auswählen.' },
        { '@type': 'HowToStep', text: 'Ein Qualitätsnetzteil oberhalb der berechneten Anforderung wählen.' },
      ],
    },
  ],
};
