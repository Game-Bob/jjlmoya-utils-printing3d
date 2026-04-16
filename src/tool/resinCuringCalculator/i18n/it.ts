import type { ToolLocaleContent } from '../../../types';
import type { ResinCuringCalculatorUI } from '../ui';

export const content: ToolLocaleContent<ResinCuringCalculatorUI> = {
  slug: 'calcolatore-polimerizzazione-resina-uv',
  title: 'Calcolatore Tempo di Polimerizzazione Resina UV',
  description: 'Determina l\'esatto tempo di polimerizzazione per le tue stampe 3D in resina. Basato sulla potenza della lampada in watt, tipo di resina e distanza. Guida tecnica professionale.',
  ui: {
    title: 'Calcolatore Polimerizzazione Resina UV',
    configLabel: 'CONFIGURAZIONE',
    brandLabel: 'Marca Attrezzatura',
    powerLabel: 'Potenza Lampada (W)',
    powerUnit: 'W',
    distanceLabel: 'Distanza LED (cm)',
    distanceUnit: 'cm',
    materialLabel: 'Tipo di Materiale',
    weightLabel: 'Peso Stimato (g)',
    weightUnit: 'g',
    ipaCheckbox: 'Pulito con Alcol Isopropilico?',
    safetyLabel: 'SICUREZZA UV',
    safetySunglasses: 'Occhiali UV Certificati',
    safetyGloves: 'Guanti in Nitrile',
    sunglassesTooltip: 'L\'esposizione diretta a 405nm può danneggiare permanentemente la retina.',
    glovesTooltip: 'La resina semi-polimerizzata è altamente irritante. Usa sempre protezioni.',
    wavelength: 'Lunghezza d\'onda',
    wavelengthValue: '405 nm',
    statusLabel: 'Stato',
    modeLabel: 'Modalità',
    modeValue: 'Industriale',
    curingTime: 'm:s',
    startButton: 'Avvia/Ferma Ciclo Polimerizzazione',
    intensityChart: 'Intensità UV (Dose)',
    nearLabel: 'Vicino (2cm)',
    farLabel: 'Lontano (30cm)',
    theoreticalLabel: 'Dose Teorica',
    yourConfigLabel: 'La tua Configurazione',
    evaporateWarning: 'Fai evaporare l\'alcol (min. 10 min) per evitare macchie bianche.',
    safeDistance: 'Distanza sicura rilevata per una polimerizzazione uniforme.',
    riskDistance: 'Rischio di deformazione termica (Distanza Critica).',
    optimeStatus: 'Ottimale',
    longStatus: 'Lungo',
    fastStatus: 'Veloce',
  },
  seo: [
    {
      type: 'title',
      text: 'Calcolatore Tempo di Polimerizzazione Resina UV: Guida Professionale',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Nella stampa 3D a resina (SLA, DLP o LCD), la <strong>polimerizzazione UV è il passaggio finale essenziale</strong> che converte un pezzo morbido e appiccicoso in un oggetto resistente con proprietà meccaniche dichiarate. Senza una corretta post-polimerizzazione, la tua stampa sarà strutturalmente debole, tossica e instabile.',
    },
    {
      type: 'title',
      text: 'Cos\'è la Polimerizzazione della Resina UV?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Quando una stampante 3D a resina completa la stampa, il pezzo si trova in quello che i tecnici chiamano <strong>"stato verde" (green state)</strong>. Sebbene abbia la sua forma finale, le catene molecolari del polimero non sono completamente reticolate. La polimerizzazione UV completa la reticolazione, eliminando l\'appiccicosità e migliorando durezza, resistenza e stabilità termica.',
    },
  ],
  faqTitle: 'Domande Frequenti',
  bibliographyTitle: 'Riferimenti',
  faq: [
    {
      question: 'Quanto tempo richiede la polimerizzazione della resina UV?',
      answer: 'Dipende dalla potenza della tua lampada. Una stazione da 40W richiede tipicamente 2-4 minuti per pezzi di medie dimensioni, mentre lampade DIY a bassa potenza possono richiedere fino a 10 minuti.',
    },
    {
      question: 'Posso polimerizzare la resina con una lampada per unghie?',
      answer: 'È possibile se la lampada copre lo spettro dei 405nm, ma queste lampade solitamente hanno una bassa potenza (6W-12W), allungando significativamente i tempi e rischiando una scarsa polimerizzazione superficiale.',
    },
    {
      question: 'È necessaria la polimerizzazione in acqua?',
      answer: 'Non è obbligatoria, ma altamente raccomandata (Water Curing). L\'acqua blocca il contatto con l\'ossigeno, che inibisce la polimerizzazione superficiale, risultando in pezzi meno appiccicosi.',
    },
    {
      question: 'Come capisco se la resina è polimerizzata correttamente?',
      answer: 'Il pezzo deve essere completamente asciutto al tatto (non appiccicoso), aver perso la sua lucentezza "umida", mostrare un leggero cambiamento di colore e non avere più il forte odore della resina liquida.',
    },
    {
      question: 'Perché la mia resina trasparente diventa gialla?',
      answer: 'È l\'effetto di una sovra-polimerizzazione o di una temperatura eccessiva. Usa il fattore "Trasparente" nel nostro calcolatore per ridurre il tempo e tieni i LED ad almeno 5cm di distanza.',
    },
  ],
  bibliography: [
    {
      name: 'Formlabs - Post-polimerizzazione delle stampe a resina',
      url: 'https://formlabs.com/blog/how-to-post-cure-3d-prints/',
    },
    {
      name: 'E3D-Online: La Scienza della Polimerizzazione UV',
      url: 'https://e3d-online.com/pages/resin-printing-guide',
    },
  ],
  howTo: [
    {
      name: 'Configura la tua attrezzatura',
      text: 'Seleziona la marca della tua macchina UV e regola la potenza in watt.',
    },
    {
      name: 'Regola i parametri fisici',
      text: 'Specifica la distanza tra i LED e il pezzo, il tipo di resina e il peso stimato.',
    },
    {
      name: 'Avvia la polimerizzazione',
      text: 'Usa il tempo calcolato come guida e monitora il tuo pezzo durante il processo.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Quanto tempo richiede la polimerizzazione della resina UV?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Una stazione da 40W richiede tipicamente 2-4 minuti per pezzi di medie dimensioni, mentre lampade a bassa potenza possono richiedere fino a 10 minuti.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Calcolatore Polimerizzazione Resina UV',
      description: 'Determina l\'esatto tempo di polimerizzazione per le tue stampe 3D in resina in base alla potenza della lampada, alla distanza e al tipo di materiale.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Come calcolare il tempo di polimerizzazione della resina UV',
      step: [
        {
          '@type': 'HowToStep',
          text: 'Configura la tua attrezzatura',
        },
        {
          '@type': 'HowToStep',
          text: 'Regola i parametri fisici',
        },
      ],
    },
  ],
};
