import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { BedThermalInertiaStabilizationCalculatorUI } from '../ui';

export const content: ToolLocaleContent<BedThermalInertiaStabilizationCalculatorUI> = {
  slug: 'print-bett-traegheits-stabilisierungs-rechner',
  title: 'Druckbett Trägheits Stabilisierungsrechner',
  description: 'Berechnen Sie, wie lange ein beheiztes 3D-Druckbett nach Erreichen des Sollwerts ruhen sollte, basierend auf Plattenmaterial, Dicke, Zieltemperatur, Heizleistung und Bettgröße.',
  ui: {
    unitSystemLabel: 'Einheiten',
    metricLabel: 'Metrisch',
    imperialLabel: 'US',
    materialLabel: 'Bauplattenmaterial',
    borosilicateGlassLabel: 'Borosilikatglas',
    peiSpringSteelLabel: 'PEI Federstahl',
    aluminumLabel: 'Aluminium-Werkzeugplatte',
    thicknessLabel: 'Plattendicke',
    targetTemperatureLabel: 'Ziel-Betttemperatur',
    heaterPowerLabel: 'Heizleistung',
    bedSizeLabel: 'Beheizte Fläche',
    presetsLabel: 'Voreinstellungen',
    enderPresetLabel: 'Glas 235',
    voronPresetLabel: 'PEI 300',
    largePresetLabel: 'Aluminium 350',
    recommendedDelayLabel: 'Startdruck-Verzögerung',
    delayMarkerLabel: 'Verzögerung',
    warmupTimeLabel: 'Ideale Aufheizzeit',
    plateMassLabel: 'Plattenmasse',
    energyStoredLabel: 'Gespeicherte Wärme',
    conductionLagLabel: 'Verzögerung durch Platte',
    conductivityLabel: 'Wärmeleitfähigkeit',
    readinessLabel: 'Bereitschaft',
    readinessQuick: 'kurze Einweichzeit',
    readinessBalanced: 'normale Einweichzeit',
    readinessSlow: 'lange Einweichzeit',
    controlsAriaLabel: 'Eingaben zur thermischen Trägheit des Heizbetts',
    resultsAriaLabel: 'Ergebnisse der Heizbettstabilisierung',
    copyButton: 'Bettverzögerung kopieren',
    copiedButton: 'Kopiert',
    copiedSummaryTemplate: 'Bettstabilisierungsschätzung: warte {delay} s ({minutes} min) nach dem Sollwert; ideale Aufheizzeit etwa {warmup} min, Bereitschaft: {readiness}.',
    thicknessUnitMetric: 'mm',
    thicknessUnitImperial: 'in',
    temperatureUnitMetric: '°C',
    temperatureUnitImperial: '°F',
    bedSizeUnitMetric: 'mm',
    bedSizeUnitImperial: 'in',
    wattsUnit: 'W',
    secondsUnit: 's',
    minutesUnit: 'min',
    kilogramsUnit: 'kg',
    poundsUnit: 'lb',
    wattHoursUnit: 'Wh',
    conductivityUnit: 'W/mK',
  },
  seo: [
    { type: 'title', text: 'Warum ein beheiztes Bett nach Erreichen des Sollwerts stabilisiert werden muss', level: 2 },
    {
      type: 'paragraph',
      html: 'Ein Druckerdisplay zeigt normalerweise die Temperatur in der Nähe des Thermistors an, nicht die genaue Temperatur der oberen Druckfläche. Bei vielen Maschinen ist der Thermistor unter der Heizung angebracht, in den Bettträger eingelassen oder abseits des Bereichs platziert, in dem die erste Schicht beginnt. Der Regler kann <strong>60 °C</strong> anzeigen, während die Oberseite einer dicken Glasplatte noch aufholt. Diese Verzögerung ist thermische Trägheit: Die Platte speichert Wärme, leitet sie durch ihre Dicke und verliert gleichzeitig Wärme an die Luft.',
    },
    {
      type: 'paragraph',
      html: 'Die erste Schicht ist gegenüber dieser Verzögerung besonders empfindlich, da die Haftung von der Polymerviskosität, der Oberflächenenergie und dem Anpressdruck abhängt. Ein Bett, das sich an der Oberfläche noch erwärmt, kann dazu führen, dass sich Ecken ablösen, Skirt-Linien trocken aussehen oder der Z-Offset inkonsistent erscheint, selbst wenn Mesh und Düsenhöhe korrekt sind. Das Abwarten eines berechneten Wärmeeinschaltintervalls, nachdem das Bett den Sollwert erreicht hat, ist oft zuverlässiger als das willkürliche Erhöhen des Sollwerts.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '1,2', label: 'W/mK typische Wärmeleitfähigkeit von Borosilikatglas' },
        { value: '16', label: 'W/mK ungefähre Wärmeleitfähigkeit von Federstahl' },
        { value: '205', label: 'W/mK ungefähre Wärmeleitfähigkeit von Aluminium' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Die Verzögerung ist eine Oberflächenschätzung, kein PID Autotune Ersatz',
      html: 'Die PID-Regelung steuert, wie die Heizung dem Thermistor folgt. Die thermische Stabilisierung schätzt, wie lange die Druckoberfläche braucht, um sich dem thermistorgesteuerten Sollwert anzunähern. Ein gut eingestellter PID-Regler kann dennoch eine Wärmeeinschaltverzögerung erfordern, wenn die Bauplatte dick, schlecht leitend oder lose mit der Heizung verbunden ist.',
    },
    { type: 'title', text: 'Materialwahl bestimmt die thermische Trägheit des Betts', level: 2 },
    {
      type: 'paragraph',
      html: 'Der Rechner behandelt das Material als strenge Eingabe, da Glas, PEI-Federstahl und Aluminium keine austauschbaren thermischen Systeme sind. Borosilikatglas hat eine geringe Wärmeleitfähigkeit und eine nennenswerte Wärmekapazität, sodass die Oberfläche hinter der Heizseite für eine spürbare Zeit nachhinken kann. Federstahl ist dünner und leitet besser als Glas, sodass er sich normalerweise schneller angleicht, obwohl Stahl eine hohe Dichte hat. Aluminium leitet Wärme extrem gut, weshalb gegossene oder bearbeitete Aluminiumbetten auf größeren Druckern bevorzugt werden, aber eine dicke Aluminiumplatte kann dennoch viel Energie speichern.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Borosilikatglas',
          description: 'Niedrige Leitfähigkeit und moderate Wärmekapazität verursachen die längste Oberflächenverzögerung, besonders bei 3-5 mm Dicke.',
          points: ['Gute Planheit bei guter Unterstützung', 'Langsame Oberflächenreaktion', 'Empfindlich gegenüber Klammern und lokalem Heizkontakt'],
        },
        {
          title: 'PEI Federstahl',
          description: 'Dünne Stahlbleche reagieren schneller und benötigen normalerweise weniger Ruhezeit, aber Magnetbasen und Klebeschichten erhöhen den Kontaktwiderstand.',
          highlight: true,
          points: ['Schnelle praktische Einweichzeit', 'Einfacher Plattenwechsel', 'Magnet- und Klebstoffschicht sind dennoch relevant'],
        },
        {
          title: 'Aluminiumplatte',
          description: 'Hohe Leitfähigkeit verteilt Wärme schnell über das Bett; Dicke und Heizleistung werden zu den Hauptverzögerungsfaktoren.',
          points: ['Hervorragende seitliche Wärmeverteilung', 'Hohe gespeicherte Energie bei großen Betten', 'Am besten bei gleichmäßiger Heizabdeckung'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Bauoberfläche', 'Thermisches Verhalten', 'Typisches Stabilitätsproblem', 'Praktische Reaktion der ersten Schicht'],
      rows: [
        ['4 mm Borosilikatglas', 'Langsame Wärmeleitung durch die Dicke', 'Oberfläche hinkt dem Thermistor hinterher', 'Länger warten vor dem Tasten oder Drucken'],
        ['0,4-0,6 mm PEI-Federstahl', 'Dünne leitfähige Platte', 'Magnet-/Klebstoffgrenzfläche bestimmt Verzögerung', 'Kurze Wärmeeinweichzeit reicht meist'],
        ['5-8 mm Aluminium', 'Schnelle Leitung, aber hohe gespeicherte Wärme', 'Große Masse braucht Zeit bis zum Gleichgewicht', 'Gleichmäßige Wärmeeinweichung bei großen Betten'],
        ['Verbundaufbauten', 'Schichtgrenzflächen dominieren', 'Luftspalte und Klebstoffe erhöhen Wärmewiderstand', 'Reale Oberflächentemperatur möglichst messen'],
      ],
    },
    {
      type: 'tip',
      title: 'Glasverzögerung nicht für Federstahl übernehmen',
      html: 'Eine Verzögerung, die für eine 4 mm Borosilikatplatte korrekt ist, kann für ein 0,5 mm PEI-Federstahlblech übermäßig sein. Umgekehrt kann eine PEI-Blechverzögerung für Glas zu kurz sein und die erste Schicht wie ein Z-Offset-Problem aussehen lassen.',
    },
    { type: 'title', text: 'Wie die Dicke Aufheizzeit und Oberflächenverzögerung beeinflusst', level: 2 },
    {
      type: 'paragraph',
      html: 'Die Dicke wirkt sich auf zwei verschiedene Teile des Prozesses aus. Erstens hat eine dickere Platte mehr Masse, benötigt also mehr Energie, um ihre Durchschnittstemperatur zu erhöhen. Zweitens muss Wärme durch einen längeren Weg diffundieren, bevor die Oberfläche der Heizseite folgt. Der Rechner schätzt sowohl die ideale Aufheizenergie als auch eine Diffusionsverzögerung durch die Platte und kombiniert beide zu einer empfohlenen Verzögerung, nachdem der Drucker meldet, dass das Bett den Sollwert erreicht hat.',
    },
    {
      type: 'paragraph',
      html: 'Der Zusammenhang ist bei der Oberflächenverzögerung nicht linear. Die Diffusionszeit steigt quadratisch mit der Dicke, weshalb eine kleine Änderung von 3 mm auf 4 mm Glas mehr ausmachen kann als erwartet. Ein sehr dünnes Stahlblech kann sich schnell angleichen, aber die Magnetbasis, die Klebefolie, die PEI-Beschichtung und eingeschlossene Luft können den realen Wärmetransport dennoch verlangsamen. Bei Aluminiumbetten verteilt die Platte selbst Wärme schnell, aber das Bett kann global instabil bleiben, wenn die Heizabdeckung lückenhaft oder die Platte groß ist.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Thermische Trägheit', definition: 'Die Tendenz einer Platte, Temperaturänderungen zu widerstehen, da sie Masse und Wärmekapazität besitzt.' },
        { term: 'Temperaturleitfähigkeit', definition: 'Eine Materialeigenschaft, die Wärmeleitfähigkeit, Dichte und Wärmekapazität kombiniert, um zu beschreiben, wie schnell sich Temperaturänderungen darin ausbreiten.' },
        { term: 'Wärmeeinweichung', definition: 'Eine bewusste Wartezeit nach Erreichen des Sollwerts, damit Bauoberfläche, Heizung, Träger und Bettaufbau einen gleichmäßigeren Zustand erreichen.' },
        { term: 'Kontaktwiderstand', definition: 'Zusätzlicher Wärmewiderstand durch unvollständigen Kontakt, Klebstoffschichten, Magnete, Klammern, Luftspalte oder verzogene Oberflächen.' },
        { term: 'Sollwertüberschwingen', definition: 'Ein Regelungsereignis, bei dem die Thermistor-Temperatur vor dem Einpendeln über den Zielwert steigt, oft unabhängig von der Oberflächentemperatur.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Faustregeln zur Dicke',
      items: [
        'Dünne PEI-Federstahlbleche stabilisieren sich normalerweise schnell, sobald Heizung und Magnetbasis warm sind.',
        'Glasplatten über 3 mm verdienen eine echte Verzögerung, bevor die erste Schicht beginnt.',
        'Große Aluminiumplatten können aufgrund der Gesamtmasse eine Wärmeeinweichung benötigen, auch wenn die Wärmeleitung hervorragend ist.',
        'Luftspalte unter herausnehmbaren Oberflächen können die Berechnung dominieren; reinigen Sie die Kontaktflächen und setzen Sie die Platte gleichmäßig ein.',
      ],
    },
    { type: 'title', text: 'Heizleistung, Bettgröße und gespeicherte Wärme', level: 2 },
    {
      type: 'paragraph',
      html: 'Die Heizleistung bestimmt, wie schnell Energie in den Bettaufbau gelangen kann. Ein 220-W-Heizer unter einem 235-mm-Glasbett hat eine ganz andere Leistungsdichte als ein 600-W-Silikonheizer unter einer 300-mm-Aluminiumplatte. Der Rechner verwendet Leistung, Zieltemperatur, Bettfläche und Plattenmasse, um die ideale Aufheizzeit zu schätzen. Anschließend wendet er eine Stabilisierungskomponente an, da sich die Oberfläche meist weiter verändert, nachdem das thermistorgesteuerte System den Zielwert erstmals erreicht hat.',
    },
    {
      type: 'paragraph',
      html: 'Leistung ist kein Allheilmittel für schlechte Wärmeverteilung. Ein leistungsstarker Heizer kann den Thermistor schnell anheben, während Kanten, Klammern oder ungestützte Zonen hinterherhinken. Große Drucker sollten Heizabdeckung, Isolierung, Bettmontage, Kammertemperatur und die Frage berücksichtigen, ob das Tasten unmittelbar nach dem Sollwertereignis beginnt. Bei ABS, ASA, Nylon und anderen wärmeren Materialien sind ein stabiles Bett und eine stabile Kammer oft wichtiger als das bloße Erreichen einer hohen numerischen Betttemperatur.',
    },
    {
      type: 'table',
      headers: ['Symptom', 'Wahrscheinliche thermische Ursache', 'Empfohlene Anpassung'],
      rows: [
        ['Erste Skirt-Linien matt oder haften kaum', 'Oberfläche noch kühler als Thermistor', 'Stabilisierungsverzögerung vor erster Schicht erhöhen'],
        ['Mitte haftet, Ecken lösen sich', 'Ungleichmäßige Oberflächentemperatur oder Kantenverluste', 'Isolierung anbringen, Heizabdeckung prüfen, länger warten'],
        ['Tast-Mesh ändert sich zwischen kalt und warm', 'Bettaufbau dehnt sich noch aus oder relaxiert', 'Vor dem Tasten wärmeeinweichen, nicht nur vor dem Druck'],
        ['PID-Grafik stabil, Haftung schwankt', 'Regler am Sensor stabil, nicht an Druckoberfläche', 'Oberflächenverzögerung nutzen und mit Kontaktthermometer prüfen'],
      ],
    },
    {
      type: 'card',
      title: 'Warum die Ausgabe eine Verzögerung nach Sollwert ist',
      html: 'Der Drucker übernimmt bereits das Hochheizen auf die Zieltemperatur. Dieser Rechner beantwortet eine engere Frage zur ersten Schicht: Sobald das Display sagt, das Bett sei bereit, wie viele zusätzliche Sekunden sollte die Oberfläche ruhen, bevor die Extrusion beginnt?',
    },
    { type: 'title', text: 'PID-Autotune vs. reale Bett-Oberflächenstabilisierung', level: 2 },
    {
      type: 'paragraph',
      html: 'Der PID-Autotune des Betts ist wertvoll, da er Schwingungen am gemessenen Sensor reduziert. Er kann jedoch die Physik einer dicken oder schlecht leitenden Platte nicht beseitigen. Eine Glasoberfläche kann immer noch nachhinken, während der Unterseitensensor bereits stabil aussieht. Ein Federstahlblech kann schnell stabil erscheinen, aber eine kalte Magnetbasis kann weiterhin Wärme daraus abziehen. Der zuverlässigste Arbeitsablauf ist, den Regler zu optimieren, eine sinnvolle Bettverzögerung zu verwenden und die Erstschichtkalibrierung erst zu beginnen, wenn der Bettaufbau thermisch reproduzierbar ist.',
    },
    {
      type: 'proscons',
      title: 'Sofort beginnen vs. auf Stabilisierung warten',
      items: [
        { pro: 'Sofortiger Start verkürzt die Gesamtdruckzeit.', con: 'Die erste Schicht wird möglicherweise auf einer Oberfläche unterhalb der gewünschten Temperatur gedruckt.' },
        { pro: 'Eine berechnete Verzögerung verbessert die Wiederholbarkeit zwischen Drucken.', con: 'Sie erhöht die Leerlaufzeit, besonders bei Glas und großen Aluminiumbetten.' },
        { pro: 'Wärmeeinweichung vor dem Tasten kann Mesh-Drift reduzieren.', con: 'Sehr lange Einweichzeiten können Energie verschwenden, wenn das gewählte Material sie nicht benötigt.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Thermische Verzögerung nicht mit übermäßigem Quetschen kaschieren',
      html: 'Wenn die erste Schicht nur bei aggressiv niedrigem Z-Offset haftet, ist die Bettoberfläche möglicherweise kühler als erwartet. Übermäßiges Quetschen kann das thermische Problem überdecken, dabei aber Elephant Foot, Düsenschaben und raue Oberflächentextur verursachen.',
    },
    {
      type: 'message',
      title: 'Beste Kalibrierungsreihenfolge',
      html: 'Bett heizen, berechnete Verzögerung abwarten, Mesh-Tasting durchführen (falls der Drucker heiß tastet), dann erste Schichthöhe einstellen. Die Kalibrierung des Z-Offsets auf einem instabilen Bettaufbau lässt den nächsten Druck inkonsistent wirken, auch wenn keine mechanische Einstellung geändert wurde.',
    },
    { type: 'title', text: 'So verwenden Sie die Stabilisierungszeit im Start-G-Code', level: 2 },
    {
      type: 'paragraph',
      html: 'Die empfohlene Verzögerung kann manuell oder direkt im Start-G-Code verwendet werden. Ein einfacher Arbeitsablauf besteht darin, das Bett mit <code>M190</code> zu heizen, die berechnete Anzahl Sekunden mit einem Dwell-Befehl zu warten und dann mit Tasten, Düsenvorheizen, Purgen und Drucken fortzufahren. Einige Benutzer heizen zuerst das Bett, beginnen während der Einweichzeit mit der Kammererwärmung oder dem Düsenvorheizen und tasten erst, nachdem das Bett aufgehört hat zu driften.',
    },
    {
      type: 'list',
      items: [
        'Verwenden Sie dieselbe Verzögerung beim Vergleich von Filamenten, damit Haftungstests fair sind.',
        'Längere Verzögerungen für Glas, hohe Betttemperaturen, große Platten oder kalte Räume anwenden.',
        'Kürzere Verzögerungen für dünne Federstahlbleche, wenn die Magnetbasis bereits warm ist.',
        'Nach der Wärmeeinweichung tasten, wenn sich Ihr Mesh mit der Temperatur ändert.',
        'Nach Wechsel von Bauplattenmaterial, Dicke, Heizleistung oder Bettgröße neu berechnen.',
      ],
    },
    {
      type: 'tip',
      title: 'Den ersten Druck des Tages als Referenzfall verwenden',
      html: 'Ein zweiter Druck, der sofort nach einem abgeschlossenen Auftrag beginnt, startet mit einem warmen Bettaufbau und benötigt möglicherweise weniger Wartezeit. Bewerten Sie die Verzögerung bei der Kalibrierung von einem kalten Drucker aus, da dieser Zustand thermische Verzögerungen am ehesten offenbart.',
    },
    {
      type: 'diagnostic',
      variant: 'success',
      title: 'Eine gute Verzögerung macht die Erstschicht Einstellung langweilig',
      html: 'Wenn die Wärmeeinweichung stimmt, werden Skirt-Form, Linien-Glanz, Eckhaftung und Mesh-Kompensation von Druck zu Druck reproduzierbarer. Sie sollten nicht jedes Mal den Z-Offset nachjustieren müssen, wenn die Maschine kalt startet.',
    },
    { type: 'title', text: 'Messen und Verbessern der realen Bettstabilisierung', level: 2 },
    {
      type: 'paragraph',
      html: 'Der Rechner ist bewusst praxisorientiert, aber die beste Validierung ist eine Oberflächenmessung. Ein auf der Druckoberfläche aufgeklebtes Kontakt-Thermoelement, eine dünne Sonde unter einem Opferblech oder ein kalibriertes Infrarot-Thermometer mit bekannter Emissionsrate können zeigen, wie lange die Oberfläche zum Beruhigen braucht. Infrarot-Messungen auf Glas, PEI und glänzendem Metall können irreführend sein. Verwenden Sie daher konsistente Messpunkte und vergleichen Sie nicht verschiedene Oberflächenbeschaffenheiten, als hätten sie denselben Emissionsgrad.',
    },
    {
      type: 'paragraph',
      html: 'Die thermische Leistung kann oft ohne Firmware-Änderungen verbessert werden. Die Isolierung der Unterseite reduziert Wärmeverluste und verkürzt die Aufheizzeit. Das Reinigen der Magnetfolie und des Flexplates verbessert den Kontakt. Das Ersetzen schwacher Klammern, das Glätten verzogener Platten und die Vermeidung von partiellem Heizkontakt reduzieren ungleichmäßige Temperaturfelder. Geschlossene Drucker profitieren von einer wärmeren Kammer, aber Kammerwärme verändert auch Riemen, Portalkomponenten und Tastverhalten, daher sollten thermische Abläufe reproduzierbar sein und nicht improvisiert werden.',
    },
    {
      type: 'table',
      headers: ['Upgrade oder Gewohnheit', 'Auswirkung auf die Stabilisierung', 'Vorsicht'],
      rows: [
        ['Unterseiten-Isolierung', 'Weniger Wärmeverlust und schnelleres Gleichgewicht', 'Verkabelung und Klebstoffe für Betttemperatur ausgelegt wählen'],
        ['Bessere Heizabdeckung', 'Gleichmäßigere Oberflächentemperatur', 'Blasen und schlechte Silikonheizer-Bonding vermeiden'],
        ['Konsistenter Sitz der Wechselplatte', 'Geringere Kontaktwiderstandsschwankungen', 'Staub oder Filamentkrümel können lokale Kaltstellen erzeugen'],
        ['Heißes Mesh-Tasten nach Einweichung', 'Mesh spiegelt ausgeformte Bettgeometrie', 'Tastaufnahme und Werkzeugkopf müssen ebenfalls thermisch stabil sein'],
      ],
    },
    {
      type: 'summary',
      title: 'Praktische Stabilisierungs Checkliste',
      items: [
        'Das tatsächliche Plattenmaterial auswählen; Glas, Stahl und Aluminium benötigen unterschiedliche Verzögerungen.',
        'Dicke und Heizleistung eingeben, nicht nur Druckermodellnamen verwenden.',
        'Die berechnete Verzögerung nach Bett-Sollwertmeldung anwenden, besonders vor Erstschicht-Kalibrierung.',
        'Oberfläche messen, wenn Haftungsprobleme trotz stabiler PID-Grafik bestehen bleiben.',
        'Verzögerung nach Wechsel von Bauplatten, Magneten, Isolierung, Heizern oder Bettgröße neu prüfen.',
      ],
    },
  ],
  faq: [
    {
      question: 'Warum warten, nachdem das Bett die Zieltemperatur erreicht hat?',
      answer: 'Der Thermistor kann den Sollwert erreichen, bevor sich die obere Druckfläche vollständig erwärmt hat. Das Warten ermöglicht es der Platte, Beschichtung, Magnetbasis und dem Heizaufbau, eine stabilere Temperatur zu erreichen.',
    },
    {
      question: 'Benötigt Glas mehr Stabilisierungszeit als PEI-Federstahl?',
      answer: 'In der Regel ja. Borosilikatglas hat eine viel geringere Wärmeleitfähigkeit und ist oft dicker, sodass die Oberfläche stärker nachhinkt als bei einem dünnen PEI-beschichteten Federstahlblech.',
    },
    {
      question: 'Ist das dasselbe wie PID-Autotune?',
      answer: 'Nein. Der PID-Autotune steuert das Heizverhalten am Sensor. Dieser Rechner schätzt, wie lange die tatsächliche Druckoberfläche ruhen sollte, nachdem das sensorgesteuerte Bett den Sollwert erreicht hat.',
    },
    {
      question: 'Sollte ich vor oder nach der Wärmeeinweichung tasten?',
      answer: 'Wenn sich Ihr Mesh beim Erwärmen des Betts ändert, tasten Sie nach der Stabilisierung des Betts. Dadurch entspricht das Mesh besser der Form, die während der ersten Schicht verwendet wird.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Bauplattenmaterial auswählen', text: 'Wählen Sie Borosilikatglas, PEI-Federstahl oder Aluminium, damit die Berechnung die korrekte Wärmeleitfähigkeit und Wärmekapazität verwendet.' },
    { name: 'Physikalischen Bettaufbau eingeben', text: 'Fügen Sie Plattendicke, beheizte Fläche, Zieltemperatur und Heizleistung hinzu.' },
    { name: 'Empfohlene Verzögerung ablesen', text: 'Verwenden Sie die Startdruck-Verzögerung, nachdem der Drucker meldet, dass das Bett den Sollwert erreicht hat.' },
    { name: 'Konsequent anwenden', text: 'Verwenden Sie für reproduzierbare Ergebnisse dieselbe Wärmeeinweichverzögerung vor dem Tasten oder der Erstschicht-Kalibrierung.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Druckbett-Trägheits-Stabilisierungsrechner',
      description: 'Schätzen Sie die Stabilisierungsverzögerung der Oberfläche eines beheizten 3D-Druckbetts basierend auf Plattenmaterial, Dicke, Temperatur, Heizleistung und Bettgröße.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Warum warten, nachdem das Bett die Zieltemperatur erreicht hat?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Der Thermistor kann den Sollwert erreichen, bevor die obere Druckfläche vollständig erwärmt ist, daher verbessert eine Wärmeeinschaltverzögerung die Wiederholbarkeit der ersten Schicht.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'So schätzen Sie die Stabilisierungsverzögerung eines 3D-Druckbetts',
      step: [
        { '@type': 'HowToStep', text: 'Wählen Sie das Bauplattenmaterial aus.' },
        { '@type': 'HowToStep', text: 'Geben Sie Dicke, Zieltemperatur, Heizleistung und Bettgröße ein.' },
        { '@type': 'HowToStep', text: 'Warten Sie die empfohlene Verzögerung, nachdem das Bett den Sollwert erreicht hat.' },
        { '@type': 'HowToStep', text: 'Tasten oder drucken Sie, nachdem der Bettaufbau stabilisiert ist.' },
      ],
    },
  ],
};
