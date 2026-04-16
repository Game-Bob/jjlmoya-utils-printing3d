import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ShrinkageCalculatorUI } from '../ui';

const slug = 'calcolatore-ritiro-stampa-3d';
const title = 'Calcolatore Ritiro 3D: Fattore di Scala e Restringimento';
const description = 'Calcola di quanto dovresti scalare i tuoi progetti 3D in base al materiale (ABS, Nylon, ASA) per compensare il ritiro termico e ottenere misure esatte.';

const faqData = [
  {
    question: 'Perché l\'ABS si ritira più del PLA?',
    answer: 'L\'ABS è un polimero amorfo che richiede temperature più elevate per essere estruso. Raffreddandosi da 250°C a temperatura ambiente, il gradiente termico è maggiore, portando le molecole a compattarsi più aggressivamente rispetto al PLA.',
  },
  {
    question: 'Quando dovrei usare la calibrazione manuale?',
    answer: 'Dovresti usarla ogni volta che cambi marca di filamento o quando hai bisogno di tolleranze meccaniche inferiori a 0,1 mm. Il coefficiente di ritiro varia anche tra diversi colori della stessa marca.',
  },
  {
    question: 'L\'infill influenza il ritiro?',
    answer: 'Sì. Maggiore è la densità dell\'infill, maggiore è la quantità di materiale che esercita forza verso il centro del pezzo mentre si raffredda. I pezzi pieni tendono a ritirarsi leggermente più di quelli cavi.',
  },
];

const howToData = [
  {
    name: 'Seleziona il tuo materiale',
    text: 'Scegli tra i materiali preimpostati (ABS, ASA, Nylon, ecc.) per applicare i coefficienti standard del settore.',
  },
  {
    name: 'Calibra con un pezzo reale',
    text: 'Se hai bisogno di precisione assoluta, stampa un cubo da 100mm, misuralo una volta freddo e inserisci i dati in modalità calibrazione.',
  },
  {
    name: 'Copia il fattore nello Slicer',
    text: 'Copia la percentuale di scala risultante e applicala agli assi corrispondenti del tuo software di slicing (Cura, PrusaSlicer).',
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
  inLanguage: 'it',
};

export const content: ToolLocaleContent<ShrinkageCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    tabPresets: 'Impostazioni Materiale',
    tabCalibration: 'Calibrazione Manuale',
    labelDefaultMaterial: 'Materiale Predefinito',
    labelEstimatedShrinkage: 'Ritiro Stimato',
    unitPercent: '%',
    labelDesignSize: 'Misura Progetto (Slicer)',
    labelRealSize: 'Misura Pezzo Stampato (Reale)',
    unitMm: 'mm',
    labelAxesCompensation: 'Compensazione Assi',
    labelAxisXY: 'X/Y',
    labelAxisZ: 'Z',
    textZWarning: '* L\'asse Z solitamente si ritira meno a causa dell\'adesione tra i livelli.',
    labelRecommendationTitle: 'Raccomandazione Tecnica',
    labelResultSlicerScale: 'PERCENTUALE DI SCALA (SLICER)',
    labelResultFactor: 'FATTORE MOLTIPLICATORE',
    btnCopy: 'Copia Percentuale',
    btnCopied: 'Copiato!',
    recommendations: {
      'ABS': 'Si raccomanda una temperatura della camera di almeno 40°C per minimizzare l\'imbarcamento (warping) dovuto al ritiro.',
      'ASA': 'Eccellente resistenza UV. Riduci la ventilazione per migliorare l\'adesione strutturale.',
      'Nylon': 'Materiale molto igroscopico. Essiccare a 80°C per 6-8 ore prima di stampare per evitare bolle.',
      'PETG': 'Minor ritiro. Usa un moltiplicatore di flusso del 95-98% se riscontri sovraestrusioni in pezzi densi.',
      'PLA': 'Ritiro minimo. Assicura un buon flusso d\'aria (ventola al 100%) per i dettagli più fini.'
    }
  },
  seo: [
    {
      type: 'title',
      text: 'Calcolatore Ritiro Stampa 3D: Accuratezza Dimensionale',
      level: 1,
    },
    {
      type: 'paragraph',
      html: 'Se sei un appassionato di <strong>stampa 3D</strong>, probabilmente avrai affrontato questo problema: progetti un pezzo con misure perfette (per esempio, un cubo 20x20x20 mm), lo stampi e, misurandolo con il calibro, scopri che misura 19,7 mm. Cosa è successo? La risposta è il <strong>ritiro del materiale</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Il ritiro è un fenomeno fisico inevitabile che si verifica quando i termoplastici passano dallo stato fuso (ad alte temperature) allo stato solido a temperatura ambiente. Raffreddandosi, le molecole si riorganizzano e si "stringono", riducendo il volume totale del pezzo. Il nostro <strong>calcolatore di ritiro</strong> è progettato per aiutarti a prevedere questo cambiamento e regolare la scala nel tuo slicer in modo che i tuoi pezzi calzino al primo colpo.',
    },
    {
      type: 'title',
      text: 'Perché la plastica si ritira?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Nella stampa FDM (Fused Deposition Modeling), depositiamo strati di plastica calda (tra 200°C e 300°C) su una superficie. Mentre il materiale si raffredda, subisce quello che è noto come <strong>coefficiente di espansione termica</strong>. Fondamentalmente, l\'energia termica tiene le molecole separate; quando l\'energia svanisce, le forze intermolecolari le avvicinano.',
    },
    {
      type: 'paragraph',
      html: 'Non tutti i materiali si comportano allo stesso modo. Le plastiche amorfe (come il PLA) hanno una struttura disordinata che tende a ritirarsi meno. Al contrario, le plastiche che tendono a cristallizzare o richiedono temperature molto elevate (come ABS o Nylon) presentano un ritiro molto più aggressivo e difficile da controllare.',
    },
    {
      type: 'title',
      text: 'Materiali Comuni e i loro Intervalli di Ritiro',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'ABS (Acrylonitrile Butadiene Styrene): 0,8% – 2,0%. È uno dei materiali più difficili per via del suo alto ritiro, che spesso causa "warping" (deformazione degli angoli).',
        'ASA: 0,5% – 0,9%. Un\'alternativa all\'ABS resistente ai raccordi UV con un ritiro un po\' più contenuto.',
        'Nylon (PA): 0,7% – 2,5%. A seconda che contenga fibre di carbonio o vetro, il ritiro può variare drasticamente.',
        'PETG: 0,2% – 0,5%. Molto stabile dimensionalmente, ideale per parti meccaniche che non richiedono la resistenza termica dell\'ABS.',
        'PLA: 0,1% – 0,3%. Lo standard di riferimento per facilità d\'uso; il suo ritiro è quasi trascurabile per la maggior parte degli utilizzi.',
      ],
    },
    {
      type: 'title',
      text: 'Come calcolare il Fattore di Scala',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Molti utenti commettono l\'errore di "aggiungere la percentuale" (se manca il 2%, scalano al 102%). Tuttavia, matematicamente, per compensare una perdita, la scala deve essere leggermente diversa. La formula corretta usata dal nostro calcolatore è: <br><strong>Fattore di Scala = 1 / (1 - S)</strong>',
    },
    {
      type: 'paragraph',
      html: 'Dove <strong>S</strong> è la percentuale di ritiro espressa in decimali (es. 0,02 per il 2%). Ad esempio, per un materiale che si ritira del 2%, il fattore di scala è 1,0204, il che significa che nello slicer (Cura, PrusaSlicer, Bambu Studio) dobbiamo impostare la scala al <strong>102,04%</strong>.',
    },
    {
      type: 'title',
      text: 'Calibrazione Manuale: Misura Desiderata vs Misura Reale',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Il processo di calibrazione inversa è semplice: stampa un oggetto di prova di misura nota (es. un cubo di calibrazione da 100mm). Una volta completamente freddo (aspettare almeno 30 minuti è cruciale), misura il pezzo con un calibro digitale. Inserisci entrambi i valori nel calcolatore e questo ti fornirà la percentuale esatta di regolazione per quella bobina di filamento.',
    },
    {
      type: 'title',
      text: 'Ritiro Non Uniforme: Il Problema degli Assi X, Y e Z',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Nella stampa 3D, la fisica non è la stessa in tutte le direzioni. Poiché gli strati vengono depositati uno sopra l\'altro, l\'<strong>adesione tra i livelli</strong> nell\'asse Z solitamente limita il ritiro verticale. Solitamente, scoprirai che le misure sul piano orizzontale (assi X e Y) richiedono più compensazione rispetto all\'altezza (asse Z).',
    },
    {
      type: 'tip',
      title: 'Consiglio da Pro',
      html: '<p>Se lavori con nylon o materiali tecnici, misura sempre il pezzo 24 ore dopo la stampa. Alcune plastiche assorbono l\'umidità ambientale e possono "gonfiarsi" leggermente dopo il raffreddamento, alterando la misura finale.</p>',
    },
    {
      type: 'title',
      text: 'Fattori che influenzano la precisione finale',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Temperatura dell\'Estrusore: A temperature più alte, il materiale entra più espanso ma subisce solitamente un raffreddamento più repentino.',
        'Temperatura del Piano: Un piano caldo impedisce alla base del pezzo di ritirarsi più velocemente della parte superiore, riducendo il warping.',
        'Densità dell\'Infill: Pezzi molto densi hanno più massa plastica che esercita una forza di ritiro interna verso il centro.',
        'Ventola di Raffreddamento: Su materiali come l\'ABS, una ventola troppo forte può causare crepe e un ritiro eccessivo e irregolare.',
      ],
    },
  ],
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Riferimenti',
  bibliography: [
    {
      name: 'Simplify3D: Accuratezza Dimensionale e Ritiro',
      url: 'https://www.simplify3d.com/resources/print-quality-troubleshooting/dimensional-accuracy/',
    },
    {
      name: 'Prusa Research: Tabella Materiali e Fattori di Ritiro',
      url: 'https://help.prusa3d.com/materials',
    },
    {
      name: 'MatterHackers: Capire il Ritiro dei Materiali da Stampa 3D',
      url: 'https://www.matterhackers.com/articles/how-to-fix-shrinkage-and-warping',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
