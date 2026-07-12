import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TechnicalResinUvCuringUI } from '../ui';

const slug = 'technischer-resin-uv-haertungsrechner';
const title = 'Technischer Resin UV Härtungszeit Rechner';
const description = 'Schätzen Sie die sichere SLA-Resin-Nachhärtungszeit basierend auf Harztyp, maximaler Wandstärke, Leistung der Wasch- und Härtungsstation und UV-Wellenlänge.';

const faqData = [
  { question: 'Wie lange sollte ich SLA-Harz-Drucke nachhärten?', answer: 'Die korrekte Zeit hängt von Harztyp, Wandstärke, Leistung der Härtungsstation, Wellenlänge und Belichtungsgeometrie ab. Kleine Standardharzteile benötigen möglicherweise nur wenige Minuten, während dicke technische Harzteile eine längere Belichtung benötigen, aber eine Sicherheitsgrenze respektieren sollten.' },
  { question: 'Kann zu viel UV-Härtung Harz spröde machen?', answer: 'Ja. Übermäßige UV-Belichtung kann viele Photopolymerharzteile spröde, gelb oder weniger flexibel machen. Der Rechner begrenzt die Zeit, wenn die Rohschätzung in einen Degradationsbereich gerät.' },
  { question: 'Sollten Harzdrucke vor dem Härten getrocknet werden?', answer: 'Ja. Harzdrucke sollten vor der UV-Härtung sauber und vollständig trocken sein. Alkoholrückstände können Weißverfärbung, eingeschlossene Verunreinigungen und inkonsistente Nachhärtungsergebnisse verursachen.' },
  { question: 'Ist 385 nm oder 405 nm besser für die Harzhärtung?', answer: 'Keines ist universell besser. Die beste Wellenlänge ist die, die auf das Photoinitiatorsystem des Harzes und die Härtungsstation abgestimmt ist. Viele Desktop-Harze sind für 405 nm optimiert, während einige technische Harze gut auf 385 nm ansprechen.' },
];

const howToData = [
  { name: 'Harz-Voreinstellung auswählen', text: 'Wählen Sie Standard, Flexibel, Starr/Zäh, Gießbar oder Ausbrennen entsprechend der Harzflasche oder dem Verwendungszweck.' },
  { name: 'Stärkste Wand eingeben', text: 'Messen Sie die maximale Wandstärke, die eine UV-Nachhärtung erhalten muss.' },
  { name: 'Stationsparameter eingeben', text: 'Stellen Sie die Leistung der Härtungsstation und die Wellenlänge entsprechend Ihrer UV-Kammer ein.' },
  { name: 'Sicherheitscheckliste befolgen', text: 'Trocknen Sie das Teil, belichten Sie jede Seite, entfernen Sie schattenwerfende Stützen und respektieren Sie den maximalen sicheren Timer-Wert.' },
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
  { type: 'title', text: 'Wie die SLA-Harz-Nachhärtungszeit gewählt wird', level: 2 },
  {
    type: 'paragraph',
    html: 'Nachhärtung ist die kontrollierte UV-Belichtung, die nach dem Waschen eines Harzdrucks angewendet wird. Das Ziel ist nicht einfach, die Oberfläche trocken erscheinen zu lassen. Ein korrekt nachgehärtetes SLA- oder MSLA-Teil erreicht eine bessere Umsetzung reaktiver Gruppen im Polymernetzwerk, was Steifigkeit, Hitzebeständigkeit, Dimensionsstabilität und Handhabungssicherheit verbessert. Unterhärtung hinterlässt klebrige, schwache oder chemisch aktive Oberflächen. Überhärtung kann das Material in Richtung Versprödung, sichtbare Vergilbung und Elongationsverlust treiben. Ein nützlicher <strong>SLA-Harz-UV-Härtungszeit-Schätzer</strong> muss daher Harzchemie, Wandstärke, Lichtintensität, Wellenlänge, Temperatur und Belichtungsgeometrie ausbalancieren.',
  },
  {
    type: 'paragraph',
    html: 'Der Rechner verwendet Harz-Voreinstellungen, weil verschiedene Harzfamilien nicht identisch reagieren. Ein Standard-Desktop-Harz härtet normalerweise schneller als eine flexible urethanartige Formulierung. Zähes oder starres Engineering-Harz benötigt oft längere Belichtung und manchmal milde Wärme, um sich den Datenblatt-Eigenschaften anzunähern. Gießbare und Ausbrennharze sind empfindlich, weil übermäßige Aushärtung die Sprödigkeit oder aschebedingte Prozessprobleme erhöhen kann. Das Ergebnis ist ein empfohlener Timer-Wert, eine sichere Obergrenze, eine optionale Temperaturvorgabe und ein praktischer Lichtabstand.',
  },
  {
    type: 'stats',
    columns: 4,
    items: [
      { value: '385/405 nm', label: 'übliche Desktop-Harz-Härtungswellenlängen' },
      { value: '1-22 min', label: 'typischer gedeckelter Rechnerausgang' },
      { value: '0,4-12 mm', label: 'Wandstärken-Modellbereich' },
      { value: '6-120 W', label: 'Leistungsbereich der Härtungsstation' },
    ],
  },
  {
    type: 'diagnostic',
    variant: 'warning',
    title: 'Härten Sie niemals nasse Harzdrucke',
    html: 'Alkohol, der auf dem Teil verbleibt, kann ungehärtete Rückstände einschließen, Oberflächen aufhellen, die Härtungskammer kontaminieren und das Verhältnis zwischen UV-Dosis und endgültigem Materialverhalten verzerren. Waschen Sie zuerst, lassen Sie das Teil vollständig trocknen, dann härten Sie.',
  },
  { type: 'title', text: 'Warum die Wandstärke die UV-Härtungszeit ändert', level: 2 },
  {
    type: 'paragraph',
    html: 'Eine dünne Miniaturhülle und eine dicke funktionelle Halterung können dasselbe Harz verwenden, benötigen aber unterschiedliches Nachhärtungsverhalten. UV-Licht wird von Pigmenten, Füllstoffen, Photoinitiatoren und dem Polymer selbst absorbiert und gestreut. Die Oberfläche erhält die stärkste Dosis, während tieferes Material weniger Energie erhält. Deshalb fragt der Rechner nach der <strong>maximalen Wandstärke</strong> statt nach der Gesamthöhe oder Gesamtmasse. Der dickste optisch relevante Querschnitt ist der Teil, der am wahrscheinlichsten unterhärtet bleibt, wenn die Außenseite bereits fertig aussieht.',
  },
  {
    type: 'paragraph',
    html: 'Der Anstieg ist proportional, aber nicht perfekt linear. Eine Verdopplung der Wandstärke erfordert nicht immer genau den doppelten Timer-Wert, weil die Härtung auch von mehreren Seiten fortgesetzt wird, wenn das Teil gedreht wird, und weil viele Harzdrucke hohl sind. Das Modell verwendet einen harzspezifischen Exponenten: zähe Harze skalieren aggressiver mit der Dicke, während gießbare Profile unter einer engeren Sicherheitsgrenze bleiben. Bei sehr dicken massiven Teilen ist die bessere Lösung oft Aushöhlen, Entwässern, Drehen und stufenweises Härten anstatt einer einzigen langen Belichtung.',
  },
  {
    type: 'table',
    headers: ['Geometriezustand', 'Härtungsimplikation', 'Praktische Maßnahme'],
    rows: [
      ['Dünne dekorative Hülle', 'Geringer interner Härtungsbedarf', 'Verwenden Sie die berechnete Zeit ohne zusätzliche Minuten.'],
      ['Dicker massiver Ansatz', 'Höheres Risiko eines unterhärteten Kerns', 'Geben Sie die lokale maximale Wandstärke ein, nicht die durchschnittliche Schalendicke.'],
      ['Hohlteil mit Entwässerungslöchern', 'Licht erreicht die Außenseite; Innenseite bleibt möglicherweise beschattet', 'Härten Sie zuerst die Außenseite, belichten Sie dann das Innere, wenn die Geometrie es erlaubt.'],
      ['Undurchsichtiges oder dunkles Harz', 'Geringere Penetration und mehr Streuung', 'Bleiben Sie nahe an der Herstelleranleitung und drehen Sie häufiger.'],
    ],
  },
  {
    type: 'tip',
    title: 'Messen Sie die dickste strukturelle Wand',
    html: 'Verwenden Sie bei einem hohlen Harzdruck die dickste Schale oder Verstärkungsrippe. Bei einem massiven Ingenieurteil verwenden Sie den dicksten massiven Abschnitt, der die endgültigen mechanischen Eigenschaften erreichen muss.',
  },
  { type: 'title', text: 'Stationsleistung, Abstand und UV-Dosis', level: 2 },
  {
    type: 'paragraph',
    html: 'Eine mit 40 W angegebene Wasch- und Härtungsstation liefert nicht 40 W nutzbare UV-Energie in jeden Quadratzentimeter des Teils. Die Nennleistung umfasst elektrische und optische Verluste, LED-Anordnung, Kammerreflektivität, Drehtischabdeckung und Abstand von der Lichtquelle. Dennoch ist die Leistung ein nützlicher Schätzer: Eine Hochleistungsstation benötigt normalerweise einen kürzeren Timer als eine schwache nagellampenartige Härtungsbox. Der Rechner wendet einen inversen Leistungsfaktor an, sodass der Timer mit steigender Stationsleistung abnimmt.',
  },
  {
    type: 'paragraph',
    html: 'Der Abstand ist wichtig, weil die Bestrahlungsstärke abnimmt, wenn sich das Teil von den LEDs entfernt, und weil eine sehr nahe Platzierung Hotspots erzeugen kann. Ein Teil, das zu nahe an einer LED-Bank platziert wird, kann eine Seite aggressiv aushärten, während Ecken oder vertiefte Oberflächen weich bleiben. Ein zu weit entferntes Teil benötigt möglicherweise längere Belichtung, aber das Hinzufügen von Zeit kann die bereits beleuchteten Seiten überhärten. Deshalb enthält der Ausgang einen empfohlenen Abstand in Zentimetern oder Zoll. Es ist eine Geometriekontrolle, nicht nur ein Bequemlichkeitswert.',
  },
  {
    type: 'comparative',
    columns: 3,
    items: [
      {
        title: 'Zu nah',
        description: 'Hohe lokale Intensität erzeugt ungleiche Dosis und Oberflächenspannung.',
        points: ['Vergilbung auf belichteten Seiten', 'Spröde dünne Merkmale', 'Beschattete Hohlräume bleiben unterhärtet'],
      },
      {
        title: 'Ausgeglichen',
        description: 'Moderater Abstand ermöglicht eine gleichmäßigere UV-Verteilung durch Kammer und Drehtisch.',
        highlight: true,
        points: ['Saubereres mechanisches Ergebnis', 'Weniger Hotspot-Risiko', 'Bessere Wiederholbarkeit'],
      },
      {
        title: 'Zu weit',
        description: 'Niedrige Bestrahlungsstärke verleitet Benutzer zur Kompensation mit übermäßiger Zeit.',
        points: ['Lange Zyklen', 'Inkonsistente Aushärtung', 'Falsches Vertrauen durch trockene Oberflächen'],
      },
    ],
  },
  {
    type: 'message',
    title: 'Drehen Sie, wenn die Kammer nicht alle Seiten belichtet',
    html: 'Wenn ein Teil tiefe Aussparungen, Hinterschnitte oder breite flache Seiten hat, teilen Sie die Belichtung in kürzere Zyklen auf und drehen Sie das Teil. Eine gleichmäßige Dosis ist normalerweise besser als eine lange statische Härtung.',
  },
  { type: 'title', text: '385 nm Versus 405 nm bei der Harzhärtung', level: 2 },
  {
    type: 'paragraph',
    html: 'Die meisten MSLA-Desktop-Drucker und Härtungsstationen verwenden 405-nm-LEDs, weil diese Wellenlänge mit vielen Desktop-Photoinitiatorsystemen übereinstimmt und für erschwingliche LED-Arrays effizient ist. Einige technische Harze sprechen auch stark auf 385 nm an, eine kürzere Wellenlänge näher am UV-A-Bereich. Der Unterschied ist nicht automatisch besser oder schlechter. Ein für 405 nm formuliertes Harz benötigt möglicherweise mehr Zeit unter 385 nm, wenn das Spektrum nicht abgestimmt ist; ein anderes Harz kann bei 385 nm effizient aushärten. Der Rechner behandelt die Wellenlänge als einen harzabhängigen Multiplikator.',
  },
  {
    type: 'paragraph',
    html: 'Die wichtige Benutzeraktion ist Konsistenz. Wenn ein Harzhersteller einen Nachhärtungsplan für eine bestimmte Härtungseinheit, Wellenlänge und Temperatur angibt, verwenden Sie diesen Plan als Referenz. Verwenden Sie diesen Rechner, wenn das Harz generisch ist, wenn die Stationsleistung von der Referenzmaschine abweicht oder wenn die Druckgeometrie dicker als ein einfacher Kalibrierungscoupon ist. Mischen Sie nicht einen industriellen 385-nm-Plan mit einer 405-nm-Desktop-Station, ohne die Belichtungsannahmen anzupassen.',
  },
  {
    type: 'glossary',
    items: [
      { term: 'Photoinitiator', definition: 'Eine Harzkomponente, die Licht absorbiert und Polymerisationsreaktionen startet.' },
      { term: 'UV-Dosis', definition: 'Die accumulierte Lichtenergie, die das Teil während der Härtung erhält, beeinflusst durch Bestrahlungsstärke und Zeit.' },
      { term: 'Nachhärtung', definition: 'UV- und manchmal Wärmebehandlung nach dem Waschen, die die Materialeigenschaften über den gedruckten Zustand hinaus verbessert.' },
      { term: 'Überhärtung', definition: 'Übermäßige Belichtung, die ein Harzteil spröde, gelb, verzogen oder weniger schlagfest machen kann.' },
    ],
  },
  {
    type: 'diagnostic',
    variant: 'info',
    title: 'Trocken anfühlen ist nicht gleich vollständig ausgehärtet',
    html: 'Eine Harzoberfläche kann aufhören, sich klebrig anzufühlen, bevor das innere Netzwerk das beabsichtigte mechanische Verhalten erreicht. Verwenden Sie Geometrie, Harztyp und Stationsleistung anstelle des Oberflächengefühls.',
  },
  { type: 'title', text: 'Harz-Voreinstellungen und mechanisches Risiko', level: 2 },
  {
    type: 'paragraph',
    html: 'Standardharze sind normalerweise für einfaches Drucken und schnelle Nachbearbeitung optimiert. Sie sind die verzeihendste Kategorie im Rechner. Flexible Harze benötigen eine sorgfältigere Handhabung, weil die gewünschte Eigenschaft die Dehnung ist, nicht die maximale Härte. Zu viel UV kann die Flexibilität verringern und ein weiches Teil in etwas verwandeln, das früher reißt. Starre und zähe Harze benötigen oft mehr Dosis, um Festigkeit zu entwickeln, aber sie haben auch eine Obergrenze, ab der zusätzliche Härtung die Leistung nicht mehr verbessert und stattdessen die Sprödigkeit erhöht.',
  },
  {
    type: 'paragraph',
    html: 'Gießbare und Ausbrennharze haben eine andere Priorität. Ihre endgültige Verwendung kann Investitionsguss oder sauberes Ausbrennen beinhalten, daher sind Oberflächenqualität, Ascheverhalten und Dimensionsstabilität wichtig. Ein sehr hart überhärtetes gießbares Teil kann während der Handhabung spröde werden oder in nachgelagerten Prozessschritten schlecht abschneiden. Der Rechner wendet eine engere Grenze auf diese Kategorien an, weil der sicherste Arbeitsablauf kontrollierte Härtung ist, nicht maximale Belichtung.',
  },
  {
    type: 'table',
    headers: ['Harz-Voreinstellung', 'Hauptziel', 'Überhärtungssymptom', 'Rechner-Verhalten'],
    rows: [
      ['Standard', 'Allgemeine Härte und sichere Handhabung', 'Vergilbung und spröde dünne Details', 'Moderate Basiszeit und mittlere Grenze.'],
      ['Flexibel', 'Dehnung erhalten, Klebrigkeit entfernen', 'Flexibilitätsverlust und Einreißen', 'Längere Basiszeit mit vorsichtiger Dosisempfindlichkeit.'],
      ['Starr / Zäh', 'Ingenieursteifigkeit und -festigkeit erreichen', 'Sprödbruch statt zähem Versagen', 'Höhere Basiszeit und optionale Warmhärtung.'],
      ['Gießbar', 'Saubere Handhabung vor dem Gießprozess', 'Spröde Muster und Oberflächenverdunklung', 'Niedrigere Sicherheitsgrenze zur Vermeidung aggressiver Belichtung.'],
      ['Ausbrennen', 'Kontrollierte Härtung vor thermischem Ausbrennen', 'Abplatzen oder Dimensionsspannung', 'Moderate Zeit mit konservativer Grenze.'],
    ],
  },
  {
    type: 'proscons',
    title: 'Zusätzliche Minuten nach dem Rechner',
    items: [
      { pro: 'Kann helfen, wenn eine Seite während eines kurzen Zyklus beschattet war.', con: 'Kann bereits belichtete Seiten degradieren, wenn das Teil nicht gedreht wurde.' },
      { pro: 'Kann die Klebrigkeit bei sehr dicken oder dunklen Teilen verringern.', con: 'Kann zähe und flexible Harze spröder versagen lassen.' },
      { pro: 'Nützlich als zweiter kurzer Zyklus nach Inspektion.', con: 'Unsicher als Routinegewohnheit ohne Überprüfung der Sicherheitsgrenze.' },
    ],
  },
  { type: 'title', text: 'Temperatur während der technischen Harz-Nachhärtung', level: 2 },
  {
    type: 'paragraph',
    html: 'Einige Engineering-Harze spezifizieren erhöhte Nachhärtungstemperatur, weil Wärme die molekulare Beweglichkeit erhöht und dem Polymernetzwerk hilft, seine beabsichtigten Eigenschaften zu erreichen. Warmhärtung kann die Wärmeformbeständigkeitstemperatur, den Modul und die endgültige Festigkeit für kompatible Materialien verbessern. Sie sollte nicht blind auf jedes Harz angewendet werden. Eine Miniatur, die in Standardharz gedruckt wurde, benötigt möglicherweise überhaupt keine Wärme, während ein zähes Engineering-Harz je nach Herstellerdaten von 40-60 °C profitieren kann. Der Rechner gibt daher Raumtemperatur für Harzfamilien zurück, bei denen Wärme nicht angenommen wird, und ein bescheidenes Temperaturziel, wo es nützlich ist.',
  },
  {
    type: 'paragraph',
    html: 'Temperaturkontrolle ist auch ein Sicherheitsthema. Zu viel Hitze kann dünne Abschnitte verziehen, Stützennarben aufweichen oder die Vergilbung beschleunigen. Eine Wasch- und Härtungsstation ohne beheizte Kammer sollte nicht als gleichwertig mit einem Laborofen behandelt werden. Wenn das Harzdatenblatt einen präzisen thermischen Zyklus angibt, hat dieses Datenblatt Vorrang. Der Rechner ist ein praktischer Schätzer für übliche Desktop-Arbeitsabläufe, kein Ersatz für zertifizierte medizinische, dentale, Luft- und Raumfahrt- oder Gussprozessvalidierung.',
  },
  {
    type: 'card',
    title: 'Wenn die Ausgabe Raumtemperatur sagt',
    html: 'Raumtemperatur bedeutet, dass der Rechner für diese Harz-Voreinstellung keine beheizte Nachhärtung erfordert. Es bedeutet nicht, dass das Teil kalt, nass oder in einer zugigen Werkstatt gehärtet werden kann. Halten Sie das Teil trocken und lassen Sie das Harz vor der Belichtung eine normale Raumtemperatur erreichen.',
  },
  {
    type: 'tip',
    title: 'Vermeiden Sie Härten unmittelbar nach der IPA Entfernung',
    html: 'Lassen Sie nach dem Waschen den Alkohol aus Löchern, Hohlräumen und geprägtem Text verdunsten. Zehn bis dreißig Minuten Trocknung können wichtiger sein als eine weitere Minute UV.',
  },
  { type: 'title', text: 'Diagnose von unter- und überhärteten Harzteilen', level: 2 },
  {
    type: 'paragraph',
    html: 'Unterhärtete Harzteile zeigen normalerweise klebrige Oberflächen, schwache kleine Merkmale, anhaltenden Geruch, weiche Kanten oder Rückstände, die auf Handschuhe übertragen werden. Diese Symptome treten am häufigsten auf, wenn das Teil nicht gründlich gewaschen wurde, nass gehärtet wurde, eine große Wandstärke hatte oder im Schatten der Kammer stand. Überhärtete Teile zeigen andere Symptome: sprödes Bruchversagen, Vergilbung, kreidige Oberflächen, gekräuselte dünne Kanten oder Flexibilitätsverlust. Die Lösung hängt vom Symptom ab. Mehr UV ist nicht die Antwort auf jedes Harzdruckproblem.',
  },
  {
    type: 'diagnostic',
    variant: 'error',
    title: 'Spröde und gelb bedeutet, keine Belichtung mehr hinzufügen',
    html: 'Wenn ein Teil bereits spröde oder sichtbar gelb geworden ist, wird zusätzliche Härtung die Zähigkeit nicht wiederherstellen. Drucken Sie neu, reduzieren Sie den Timer-Wert, verbessern Sie die Drehung und respektieren Sie die Grenze.',
  },
  {
    type: 'summary',
    title: 'Fehlerbehebungsreihenfolge',
    items: [
      'Bestätigen Sie, dass das Teil vor dem Härten gewaschen und getrocknet wurde.',
      'Überprüfen Sie, ob Stützen oder die Modellorientierung UV-Schatten erzeugt haben.',
      'Geben Sie die dickste Wand ein, nicht die durchschnittliche Modellgröße.',
      'Verwenden Sie die Sicherheitsgrenze, wenn die Rohschätzung zu lang wäre.',
      'Drehen Sie komplexe Teile, anstatt eine statische Belichtung zu verlängern.',
    ],
  },
  {
    type: 'table',
    headers: ['Symptom', 'Wahrscheinliche Ursache', 'Korrektur'],
    rows: [
      ['Klebrige Oberfläche nach dem Härten', 'Restharz oder IPA, zu geringe Dosis oder beschattete Seite', 'Bei Kontamination erneut waschen, vollständig trocknen, dann einen kurzen gedrehten Zyklus anwenden.'],
      ['Dünne Merkmale brechen leicht', 'Überhärtung oder inhärent sprödes Harz', 'Timer reduzieren und nahe LED-Platzierung vermeiden.'],
      ['Eine Seite gelb, andere weich', 'Ungleichmäßige Kammerbelichtung', 'Abstand vergrößern und während des Härtens drehen.'],
      ['Flexibles Harz wird steif', 'Dosis zu hoch für elastomeres Verhalten', 'Weniger Zeit verwenden und bei klebfreier Handhabung stoppen.'],
    ],
  },
  { type: 'title', text: 'So verwenden Sie diesen UV-Wasch- und Härtungsstations-Zeitrechner', level: 2 },
  {
    type: 'paragraph',
    html: 'Beginnen Sie mit der Harz-Voreinstellung, die dem Materialetikett am nächsten kommt. Wenn die Flasche zäh, starr, ABS-ähnlich, Engineering oder hochschlagfest sagt, verwenden Sie die Voreinstellung starr/zäh. Wenn sie elastisch, biegsam oder gummiartig ist, verwenden Sie flexibel. Für Investitionsguss oder aschefreie Arbeitsabläufe verwenden Sie gießbar oder ausbrennen. Messen Sie dann die maximale Wandstärke. Geben Sie die Nennleistung der Härtungsstation ein und wählen Sie 385 nm oder 405 nm entsprechend der Stations- oder Harzdokumentation. Der Ausgangs-Timer-Wert ist der erste Zyklus, den Sie ausführen sollten.',
  },
  {
    type: 'paragraph',
    html: 'Verwenden Sie vor dem Start die Checkliste. Das Teil muss trocken, aus mehreren Winkeln sichtbar und frei von Stützstrukturen sein, die Schatten werfen. Wenn das Modell komplex ist, härten Sie für einen Teil der empfohlenen Zeit, drehen Sie es und beenden Sie den Rest des Zyklus. Wenn der Rechner warnt, dass die Sicherheitsgrenze angewendet wurde, überschreiben Sie sie nicht mit einer langen Belichtung. Die Grenze existiert, weil diese Harzkategorie jenseits dieses Punktes eher degradiert als verbessert.',
  },
  {
    type: 'list',
    items: [
      'Verwenden Sie Herstelleranweisungen, wenn ein Harzdatenblatt einen validierten Nachhärtungszyklus angibt.',
      'Verwenden Sie diesen Rechner, wenn Stationsleistung, Wellenlänge oder Teiledicke vom Referenzarbeitsablauf abweichen.',
      'Härten Sie keine Teile, die stark nach Lösungsmittel riechen oder Flüssigkeit in Entwässerungslöchern haben.',
      'Gehen Sie nicht davon aus, dass stärkeres Licht sicherer ist; es kann schneller lokale Überhärtung erzeugen.',
      'Notieren Sie erfolgreiche Zeiten nach Harz, Farbe, Wandstärke und Stationsmodell.',
    ],
  },
  {
    type: 'summary',
    title: 'Sichere Nachhärtungsregel',
    items: [
      'Zuerst reinigen.',
      'Vollständig trocknen.',
      'Innerhalb des berechneten Fensters härten.',
      'Zur Abdeckung drehen.',
      'Stoppen, bevor das Harz spröde, gelb oder verzogen wird.',
    ],
  },
];

export const content: ToolLocaleContent<TechnicalResinUvCuringUI> = {
  slug, title, description,
  ui: {
    controlsAriaLabel: 'Eingabesteuerung für technische Resin-UV-Härtung',
    resultsAriaLabel: 'Empfohlene Resin-Nachhärtungsparameter',
    unitSystemLabel: 'Einheiten',
    metricLabel: 'Metrisch',
    imperialLabel: 'US',
    resinGroupLabel: 'Harz-Voreinstellung',
    stationGroupLabel: 'Härtungsstation',
    preparationLabel: 'Vor dem Härten',
    resinTypeLabel: 'Harztyp',
    standardLabel: 'Standard',
    flexibleLabel: 'Flexibel',
    toughLabel: 'Starr / Zäh',
    castableLabel: 'Gießbar',
    burnoutLabel: 'Ausbrennen',
    wallThicknessLabel: 'Maximale Wandstärke',
    wallThicknessHelp: 'Verwenden Sie die dickste massive Wand oder Schale, die UV-Licht zum Härten durchdringen muss.',
    stationPowerLabel: 'Stationsleistung',
    stationPowerHelp: 'Nominale elektrische Leistung der Härtungsstation oder des UV-Lampen-Arrays.',
    wavelengthLabel: 'Wellenlänge',
    wavelength385Label: '385 nm',
    wavelength405Label: '405 nm',
    cleanDryReminder: 'Das Teil muss vor der UV-Belichtung sauber und perfekt trocken sein. Härten Sie keine Teile, die noch Alkohol tragen.',
    dryCheckLabel: 'Ist das Teil vollständig trocken und frei von Alkoholrückständen?',
    exposureCheckLabel: 'Ist das Teil so positioniert, dass Licht jede Seite erreicht?',
    supportsCheckLabel: 'Ist das Teil frei von Stützen, die Schatten werfen könnten?',
    degradationWarning: 'Übermäßige Härtungszeit macht das Teil spröde und gelb. Respektieren Sie die technischen Grenzen.',
    recommendedTimeLabel: 'Timer-Einstellung',
    temperatureLabel: 'Härtungstemperatur',
    noTemperatureLabel: 'Raumtemperatur',
    ambientTemperatureNoteMetric: 'Bei Raumtemperatur härten (18-25 °C). Für diese Voreinstellung ist keine beheizte Kammer erforderlich.',
    ambientTemperatureNoteImperial: 'Bei Raumtemperatur härten (64-77 °F). Für diese Voreinstellung ist keine beheizte Kammer erforderlich.',
    distanceLabel: 'Lichtabstand',
    maxSafeLabel: 'Sicherheitsgrenze',
    doseIndexLabel: 'UV-Dosis-Index',
    safetySafeLabel: 'Innerhalb des sicheren Fensters',
    safetyCautionLabel: 'Nahe der Obergrenze',
    safetyLimitLabel: 'Sicherheitsgrenze angewendet',
    limitMessage: 'Die angeforderte Belichtung würde die Harz-Sicherheitsgrenze überschreiten. Verwenden Sie den gedeckelten Timer-Wert und drehen Sie das Teil zwischen den Zyklen, wenn Seiten beschattet sind.',
    cautionMessage: 'Die Empfehlung ist technisch nutzbar, aber nahe am Degradationsbereich. Halten Sie das Teil trocken, drehen Sie es und vermeiden Sie das Hinzufügen zusätzlicher Minuten aus Gewohnheit.',
    safeMessage: 'Die Empfehlung liegt innerhalb des normalen Nachhärtungsfensters für dieses Harzprofil und diese Stationsleistung.',
    timerUnit: 'min',
    mmUnit: 'mm',
    inchUnit: 'in',
    cmUnit: 'cm',
    inUnit: 'in',
    wattUnit: 'W',
    celsiusUnit: '°C',
    fahrenheitUnit: '°F',
  },
  seo: seoData,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
