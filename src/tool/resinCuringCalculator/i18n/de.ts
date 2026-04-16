import type { ToolLocaleContent } from '../../../types';
import type { ResinCuringCalculatorUI } from '../ui';

export const content: ToolLocaleContent<ResinCuringCalculatorUI> = {
  slug: 'uv-harz-aushaertungsrechner',
  title: 'UV Harz Aushärtungszeitrechner',
  description: 'Ermitteln Sie die exakte Aushärtungszeit für Ihre Harz-3D-Drucke. Basierend auf der Lampenleistung in Watt, Harztyp und Entfernung. Professioneller technischer Leitfaden.',
  ui: {
    title: 'UV Harz Aushärtungsrechner',
    configLabel: 'KONFIGURATION',
    brandLabel: 'Gerätemarke',
    powerLabel: 'Lampenleistung (W)',
    powerUnit: 'W',
    distanceLabel: 'LED-Entfernung (cm)',
    distanceUnit: 'cm',
    materialLabel: 'Materialtyp',
    weightLabel: 'Geschätztes Gewicht (g)',
    weightUnit: 'g',
    ipaCheckbox: 'Mit Isopropylalkohol gereinigt?',
    safetyLabel: 'UV-SICHERHEIT',
    safetySunglasses: 'Zertifizierte UV-Brille',
    safetyGloves: 'Nitril-Handschuhe',
    sunglassesTooltip: 'Direkte Exposition gegenüber 405 nm kann Ihre Netzhaut dauerhaft schädigen.',
    glovesTooltip: 'Teilhaft ausgehärtetes Harz ist stark reizend. Verwenden Sie immer Schutz.',
    wavelength: 'Wellenlänge',
    wavelengthValue: '405 nm',
    statusLabel: 'Status',
    modeLabel: 'Modus',
    modeValue: 'Industriell',
    curingTime: 'm:s',
    startButton: 'Aushärtezyklus Start/Stopp',
    intensityChart: 'UV-Intensität (Dosis)',
    nearLabel: 'Nah (2cm)',
    farLabel: 'Fern (30cm)',
    theoreticalLabel: 'Theoretische Dosis',
    yourConfigLabel: 'Ihre Konfiguration',
    evaporateWarning: 'Alkohol verdampfen lassen (min. 10 Min.), um weiße Flecken zu vermeiden.',
    safeDistance: 'Sicherer Abstand für gleichmäßige Aushärtung erkannt.',
    riskDistance: 'Gefahr von Hitzeverformung (Kritischer Abstand).',
    optimeStatus: 'Optimal',
    longStatus: 'Lang',
    fastStatus: 'Schnell',
  },
  seo: [
    {
      type: 'title',
      text: 'UV-Harz Aushärtungszeitrechner: Professioneller Leitfaden',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Beim Harz-3D-Druck (SLA, DLP oder LCD) ist die <strong>UV-Aushärtung der wesentliche letzte Schritt</strong>, der ein weiches, klebriges Teil in ein widerstandsfähiges Objekt mit den deklarierten mechanischen Eigenschaften verwandelt. Ohne ordnungsgemäße Nachhärtung ist Ihr Druck strukturell schwach, toxisch und instabil.',
    },
    {
      type: 'title',
      text: 'Was ist UV-Harz-Aushärtung?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wenn ein Harz-3D-Drucker den Druck beendet, befindet sich das Teil im sogenannten <strong>"Green State"</strong>. Obwohl es seine endgültige Form hat, sind die Molekülketten des Polymers noch nicht vollständig vernetzt. Die UV-Aushärtung schließt diese Vernetzung ab, beseitigt die Klebrigkeit und verbessert Härte, Festigkeit und thermische Stabilität.',
    },
  ],
  faqTitle: 'Häufig gestellte Fragen',
  bibliographyTitle: 'Referenzen',
  faq: [
    {
      question: 'Wie lange dauert die UV-Harz-Aushärtung?',
      answer: 'Das hängt von der Leistung Ihrer Lampe ab. Eine 40W-Station benötigt für mittelgroße Teile typischerweise 2-4 Minuten, während DIY-Lampen mit geringerer Leistung bis zu 10 Minuten benötigen können.',
    },
    {
      question: 'Kann ich Harz mit einer Nagellampe aushärten?',
      answer: 'Es ist möglich, wenn die Lampe das 405nm-Spektrum abdeckt, aber diese Lampen haben normalerweise eine geringe Leistung (6W-12W), was die Zeiten erheblich verlängert und potenziell zu einer schlechten Oberflächenaushärtung führt.',
    },
    {
      question: 'Ist eine Wasserhärtung notwendig?',
      answer: 'Nicht zwingend erforderlich, aber sehr empfehlenswert (Water Curing). Wasser blockiert den Kontakt mit Sauerstoff, der die Oberflächenpolymerisation hemmt, was zu weniger klebrigen Teilen führt.',
    },
    {
      question: 'Woran erkenne ich, ob das Harz richtig ausgehärtet ist?',
      answer: 'Das Teil sollte sich völlig trocken anfühlen (nicht klebrig), seinen "nassen" Glanz verloren haben, eine leichte Farbveränderung zeigen und nicht mehr stark nach flüssigem Harz riechen.',
    },
    {
      question: 'Warum vergilbt mein klares Harz?',
      answer: 'Das ist die Folge von Überhärtung oder zu hoher Temperatur. Verwenden Sie den Faktor "Transparent" in unserem Rechner, um die Zeit zu verkürzen, und halten Sie die LEDs mindestens 5 cm entfernt.',
    },
  ],
  bibliography: [
    {
      name: 'Formlabs - Nachhärtung von Harzdrucken',
      url: 'https://formlabs.com/blog/how-to-post-cure-3d-prints/',
    },
    {
      name: 'E3D-Online: Wissenschaft der UV-Aushärtung',
      url: 'https://e3d-online.com/pages/resin-printing-guide',
    },
  ],
  howTo: [
    {
      name: 'Konfigurieren Sie Ihre Ausrüstung',
      text: 'Wählen Sie Ihre UV-Maschinenmarke und passen Sie die Leistung in Watt an.',
    },
    {
      name: 'Physikalische Parameter anpassen',
      text: 'Geben Sie den Abstand zwischen LEDs und Teil, den Harztyp und das geschätzte Gewicht an.',
    },
    {
      name: 'Aushärtung starten',
      text: 'Verwenden Sie die berechnete Zeit als Orientierung und überwachen Sie Ihr Teil während des Vorgangs.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Wie lange dauert die UV-Harz-Aushärtung?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Eine 40W-Station benötigt für mittelgroße Teile typischerweise 2-4 Minuten, während Lampen mit geringerer Leistung bis zu 10 Minuten benötigen können.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'UV-Harz-Aushärtungsrechner',
      description: 'Ermitteln Sie die exakte Aushärtungszeit für Ihre Harz-3D-Drucke basierend auf Lampenleistung, Abstand und Materialtyp.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'So berechnen Sie die UV-Harz-Aushärtungszeit',
      step: [
        {
          '@type': 'HowToStep',
          text: 'Konfigurieren Sie Ihre Ausrüstung',
        },
        {
          '@type': 'HowToStep',
          text: 'Physikalische Parameter anpassen',
        },
      ],
    },
  ],
};
