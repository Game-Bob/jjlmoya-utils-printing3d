import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ResinRealCostCalculatorUI } from '../ui';

const slug = 'calcolatore-costo-reale-resina-sla-dlp';
const title = 'Calcolatore del costo reale della resina per stampe SLA e DLP';
const description = 'Calcola il costo teorico e reale della resina con conversione della densità, volume dello slicer e una correzione per lo spreco dal 10 al 15 percento per parti SLA e DLP complesse.';

const faqData = [
  {
    question: 'Perché il costo reale della resina è superiore al costo dello slicer?',
    answer: 'Lo slicer riporta solitamente solo la resina polimerizzata netta nel modello e nei supporti. Non tiene sempre conto della resina rimasta sulla piattaforma di costruzione, intrappolata nelle pareti cave, persa durante il lavaggio, nei supporti falliti o dei residui che non possono essere versati pulitamente nel contenitore.',
  },
  {
    question: 'Devo inserire grammi o millilitri?',
    answer: 'Usa ciò che esporta il tuo slicer. Se riporta grammi, inserisci la densità della resina dalla bottiglia o dalla scheda tecnica in modo che il calcolatore converta la massa in volume prima di calcolare il prezzo della stampa.',
  },
  {
    question: 'Quale fattore di complessità dovrei usare?',
    answer: 'Usa basso per parti piene con supporti semplici, medio per miniature tipiche e parti funzionali in resina, e alto per parti cave, supporti densi, cavità e pezzi che trattengono resina liquida dopo la stampa.',
  },
  {
    question: 'Include alcol, guanti, filtri o tempo macchina?',
    answer: 'No. Questo strumento isola il costo del materiale resina. Consumabili, manodopera, energia di post-polimerizzazione, fallimenti e ammortamento della macchina devono essere aggiunti in un preventivo più ampio.',
  },
];

const howToData = [
  {
    name: 'Inserisci i dati della bottiglia',
    text: 'Aggiungi il prezzo netto della bottiglia, il volume nominale in millilitri e la densità indicata sulla scheda tecnica o sull\'etichetta della resina.',
  },
  {
    name: 'Incolla il consumo dello slicer',
    text: 'Inserisci il consumo di resina del modello esportato da Lychee, Chitubox, PrusaSlicer o un altro slicer, quindi scegli grammi o millilitri.',
  },
  {
    name: 'Scegli la complessità',
    text: 'Seleziona complessità bassa, media o alta per applicare una correzione per spreco del 10, 12,5 o 15 percento al volume dello slicer.',
  },
  {
    name: 'Confronta costo teorico e reale',
    text: 'Usa il costo teorico per il confronto tra slicer e il costo reale corretto per preventivi, raggruppamento lotti e pianificazione delle scorte di resina.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'it',
};

export const content: ToolLocaleContent<ResinRealCostCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    bottlePanel: 'Bottiglia di resina',
    modelPanel: 'Modello slicer',
    resultPanel: 'Costo reale resina',
    unitSystemLabel: 'Unità',
    metricLabel: 'Metrico',
    imperialLabel: 'US',
    currencyLabel: 'Valuta',
    currencyOptions: [
      { code: 'EUR', label: '€', symbol: '€' },
      { code: 'USD', label: '$', symbol: '$' },
      { code: 'GBP', label: '£', symbol: '£' },
      { code: 'CAD', label: 'C$', symbol: 'C$' },
      { code: 'AUD', label: 'A$', symbol: 'A$' },
      { code: 'CHF', label: 'Fr', symbol: 'Fr' },
      { code: 'CNY', label: '¥', symbol: '¥' },
      { code: 'INR', label: '₹', symbol: '₹' },
      { code: 'BRL', label: 'R$', symbol: 'R$' },
      { code: 'MXN', label: '$', symbol: '$' },
      { code: 'RUB', label: '₽', symbol: '₽' },
      { code: 'PLN', label: 'zł', symbol: 'zł' },
      { code: 'SEK', label: 'kr', symbol: 'kr' },
      { code: 'NOK', label: 'kr', symbol: 'kr' },
      { code: 'DKK', label: 'kr', symbol: 'kr' },
      { code: 'TRY', label: '₺', symbol: '₺' },
      { code: 'JPY', label: '¥', symbol: '¥' },
    ],
    bottlePriceLabel: 'Prezzo bottiglia',
    bottleVolumeLabel: 'Volume bottiglia',
    resinPresetLabel: 'Preimpostazione resina',
    resinPresetOptions: [
      { label: 'Personalizzato / densità manuale', density: '' },
      { label: 'Resina standard generica - 1,10 g/cm3', density: '1.10' },
      { label: 'Resina lavabile in acqua generica - 1,08 g/cm3', density: '1.08' },
      { label: 'Resina tipo ABS generica - 1,10 g/cm3', density: '1.10' },
      { label: 'Resina resistente generica - 1,12 g/cm3', density: '1.12' },
      { label: 'Resina flessibile generica - 1,05 g/cm3', density: '1.05' },
      { label: 'Resina alta temperatura generica - 1,15 g/cm3', density: '1.15' },
      { label: 'Resina colabile generica - 1,12 g/cm3', density: '1.12' },
      { label: 'Resina con carica ceramica generica - 1,35 g/cm3', density: '1.35' },
      { label: 'Anycubic Standard - 1,10 g/cm3', density: '1.10' },
      { label: 'Anycubic ABS-Like - 1,10 g/cm3', density: '1.10' },
      { label: 'Elegoo Standard - 1,10 g/cm3', density: '1.10' },
      { label: 'Elegoo ABS-Like - 1,05 g/cm3', density: '1.05' },
      { label: 'Siraya Tech Fast - 1,09 g/cm3', density: '1.09' },
      { label: 'Siraya Tech Blu - 1,12 g/cm3', density: '1.12' },
      { label: 'Phrozen Aqua Gray 4K - 1,10 g/cm3', density: '1.10' },
      { label: 'Formlabs Standard - 1,10 g/cm3', density: '1.10' },
      { label: 'Formlabs Tough 2000 - 1,18 g/cm3', density: '1.18' },
    ],
    densityLabel: 'Densità resina (g/cm3)',
    modelAmountLabel: 'Quantità slicer',
    unitLabel: 'Unità di quantità',
    mlUnit: 'ml',
    fluidOunceUnit: 'fl oz',
    gramsUnit: 'g',
    ounceUnit: 'oz',
    complexityLabel: 'Complessità pezzo',
    lowComplexity: 'Bassa',
    mediumComplexity: 'Media',
    highComplexity: 'Alta',
    lowHint: 'Pezzi pieni, supporti leggeri, +10%',
    mediumHint: 'Lavoro resina tipico, +12,5%',
    highHint: 'Pezzi cavi o supporti densi, +15%',
    theoreticalCostLabel: 'Costo slicer',
    realCostLabel: 'Costo reale',
    wasteCostLabel: 'Correzione spreco',
    correctedVolumeLabel: 'Volume corretto',
    costPerMlLabel: 'Costo per ml',
    bottlePrintsLabel: 'Stampe per bottiglia',
    savedSettingsLabel: 'Fattore spreco',
    hollowPartTip: 'I pezzi cavi con fori di drenaggio possono superare il 15 percento di spreco perché la resina rimane sulle pareti interne, nelle cavità, sui supporti e durante il lavaggio.',
    conversionLabel: 'Volume netto slicer',
    netFromSlicerLabel: 'netto dallo slicer',
    persistenceNote: 'Prezzo bottiglia, volume bottiglia e densità vengono salvati localmente in questo browser.',
  },
  seo: [
    {
      type: 'title',
      text: 'Perché il costo della resina SLA e DLP necessita di una correzione per lo spreco',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La quantità di resina mostrata da uno slicer è un utile punto di partenza, ma non equivale alla quantità di resina che scompare dalla bottiglia durante una stampa reale. La stampa SLA, MSLA, LCD e DLP utilizza tutte una vasca piena di fotopolimero liquido. Il pezzo polimerizza strato dopo strato, ma la resina non polimerizzata riveste ancora il modello, i supporti, la piattaforma di costruzione, la pellicola della vasca e qualsiasi cavità interna aperta al bagno di resina. Un calcolatore che moltiplica il volume dello slicer per il prezzo per millilitro della bottiglia fornisce un numero teorico pulito. Un preventivo di officina, tuttavia, necessita del numero corretto.',
    },
    {
      type: 'paragraph',
      html: 'Questo calcolatore separa il <strong>costo slicer</strong> dal <strong>costo reale della resina</strong>. Il costo slicer è la resina netta riportata dal software. Il costo reale applica un fattore di spreco controllato dal 10 al 15 percento. Questo intervallo è intenzionalmente stretto: è abbastanza alto da includere le perdite comuni di manipolazione della resina, ma non così alto da nascondere fallimenti, manodopera, alcol, guanti, filtri o post-polimerizzazione sotto la voce materiale. Il risultato è un costo variabile del materiale pratico per una singola stampa o lotto.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '10%', label: 'Correzione bassa per pezzi pieni e supporti leggeri' },
        { value: '12,5%', label: 'Correzione predefinita per lavori resina normali' },
        { value: '15%', label: 'Correzione alta per cavità e supporti densi' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Non mescolare costo del materiale con costo del lavoro',
      html: 'Il numero restituito qui è solo il materiale resina. Un prezzo di vendita completo dovrebbe includere anche stampe fallite, alcol per pulizia, guanti in nitrile, carta assorbente, filtri, tempo di post-polimerizzazione, imballaggio, usura della macchina, tempo di progettazione e margine.',
    },
    {
      type: 'title',
      text: 'La formula dietro il calcolatore',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Il primo passo è il prezzo della bottiglia per millilitro: <code>costo_per_ml = prezzo_bottiglia / volume_bottiglia_ml</code>. Una bottiglia da 1000 ml acquistata per 42 EUR ha un costo base di 0,042 EUR per ml. Se lo slicer dice che una miniatura consuma 38 ml, il costo teorico della resina è 38 x 0,042, ovvero 1,60 EUR. Questo numero è utile per confrontare orientamento, svuotamento, strategie di supporto e lotti all\'interno dello slicer, ma presuppone che ogni millilitro riportato dallo slicer sia l\'unica resina consumata.',
    },
    {
      type: 'paragraph',
      html: 'Il secondo passo applica il volume corretto: <code>volume_reale = volume_slicer x (1 + fattore_spreco)</code>. Con il fattore predefinito del 12,5 percento, un modello da 38 ml diventa 42,75 ml. Il costo reale del materiale diventa 42,75 x 0,042 EUR, ovvero 1,80 EUR. La differenza è piccola su un singolo modello minuscolo, ma diventa visibile quando si preventiva un vassoio di miniature, modelli dentali, maestri di gioielleria, prototipi di ingegneria o dispositivi di produzione.',
    },
    {
      type: 'table',
      headers: ['Volume slicer', 'Costo bottiglia', 'Fattore', 'Costo teorico', 'Costo reale'],
      rows: [
        ['25 ml', '42 EUR / 1000 ml', '10%', '1,05 EUR', '1,16 EUR'],
        ['80 ml', '42 EUR / 1000 ml', '12,5%', '3,36 EUR', '3,78 EUR'],
        ['150 ml', '42 EUR / 1000 ml', '15%', '6,30 EUR', '7,25 EUR'],
        ['420 ml', '42 EUR / 1000 ml', '15%', '17,64 EUR', '20,29 EUR'],
      ],
    },
    {
      type: 'tip',
      title: 'Usa il volume del lotto, non il volume del pezzo, per le produzioni in serie',
      html: 'Se stai riempiendo la piattaforma di costruzione con più copie, calcola dal volume dello slicer per l\'intera piattaforma. Le torri di supporto, le strutture di supporto condivise e i cambi di orientamento possono rendere il lotto più efficiente rispetto alla moltiplicazione di un singolo pezzo isolato per il numero di copie.',
    },
    {
      type: 'title',
      text: 'Scegliere il giusto fattore di complessità',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Complessità bassa',
          description: 'Usa il 10 percento per pezzi pieni, staffe semplici, pezzi di calibrazione, pezzi degli scacchi e modelli con pochi supporti.',
          points: ['Poca ritenzione interna', 'Bassa densità di supporti', 'Facile sgocciolamento nella vasca'],
        },
        {
          title: 'Complessità media',
          description: 'Usa il 12,5 percento per miniature normali, modelli dentali, pezzi da tavolo e pezzi funzionali con supporti moderati.',
          points: ['Perdita tipica di post-lavorazione', 'Un po\' di resina sui supporti', 'Buon fattore di preventivo predefinito'],
          highlight: true,
        },
        {
          title: 'Complessità alta',
          description: 'Usa il 15 percento per gusci cavi, cavità, foreste dense di supporti, strutture reticolari e pezzi che lasciano residui pesanti dopo lo sgocciolamento.',
          points: ['Più liquido intrappolato', 'Più perdita durante il lavaggio', 'Maggiore incertezza di manipolazione'],
        },
      ],
    },
    {
      type: 'paragraph',
      html: 'Il fattore di complessità non è una penalità per uno scarso slicing. È una correzione per come si comporta la resina liquida. Un semplice blocco pieno inclinato correttamente può sgocciolare quasi completamente dopo pochi minuti. Una statua cava con piccoli fori di drenaggio può trattenere un film di resina all\'interno della parete, attorno ai supporti e vicino alle coppe di aspirazione. Le basi di supporto dense trattengono anche la resina tra i pilastri. Anche quando lasci sgocciolare il pezzo sopra la vasca, la resina che raggiunge il contenitore di lavaggio, i guanti, la carta assorbente e il filtro fa parte del materiale reale consumato dal lavoro.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Quando il 15 percento non basta',
      html: 'Se un modello cavo ha uno scarso drenaggio, cavità cieche, spessi supporti interni o un interno testurizzato, lo spreco può superare il 15 percento. In tal caso, considera questo calcolatore come base per la resina e aggiungi una riserva di rischio separata nel preventivo.',
    },
    {
      type: 'summary',
      title: 'Selezione rapida del fattore',
      items: [
        'Scegli il 10 percento quando il modello è pieno, compatto e facile da drenare.',
        'Scegli il 12,5 percento quando non sei sicuro o stampi un vassoio misto.',
        'Scegli il 15 percento quando il pezzo è cavo, fortemente supportato o geometricamente complesso.',
        'Aggiungi una tolleranza di fallimento separata quando stampi una nuova resina, un nuovo orientamento o un pezzo fragile per un cliente.',
      ],
    },
    {
      type: 'title',
      text: 'Usare la densità quando lo slicer riporta in grammi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Molti slicer possono riportare l\'uso di resina in millilitri, grammi o entrambi. Le bottiglie di resina sono solitamente vendute per volume nominale, comunemente 500 ml, 1000 ml o 1 litro. Se lo slicer esporta in grammi, il calcolatore converte la massa in volume usando la densità: <code>volume_ml = grammi / densità</code>. La densità della resina è normalmente scritta in g/cm3, e 1 cm3 equivale allo stesso volume di 1 ml. Una resina con densità 1,10 g/cm3 significa che 110 g corrispondono approssimativamente a 100 ml.',
    },
    {
      type: 'table',
      headers: ['Massa slicer', 'Densità', 'Volume convertito', 'Perché è importante'],
      rows: [
        ['55 g', '1,10 g/cm3', '50,0 ml', 'Stima comune per resina standard'],
        ['55 g', '1,05 g/cm3', '52,4 ml', 'Densità inferiore significa più volume'],
        ['55 g', '1,20 g/cm3', '45,8 ml', 'Le resine caricate o ceramiche possono essere più dense'],
      ],
    },
    {
      type: 'tip',
      title: 'Trova la densità sulla scheda tecnica',
      html: 'Usa il catalogo delle preimpostazioni per le resine comuni, poi considera l\'input della densità come fonte di verità finale. Se la tua resina, colore o lotto esatto differisce dalla preimpostazione, sovrascrivi il campo con il valore della scheda tecnica del produttore. Non dare per scontato che tutte le resine siano 1,00 g/ml.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Densità', definition: 'Massa per unità di volume. Nel calcolo dei costi della resina, permette di convertire i grammi dello slicer in millilitri della bottiglia.' },
        { term: 'Costo teorico', definition: 'Il volume netto dello slicer moltiplicato per il costo per millilitro della bottiglia, prima della correzione per spreco.' },
        { term: 'Volume corretto', definition: 'Il volume del modello dopo l\'aggiunta del fattore di spreco selezionato del 10, 12,5 o 15 percento.' },
        { term: 'Foro di drenaggio', definition: 'Un\'apertura in un pezzo di resina cavo che permette alla resina non polimerizzata di fuoriuscire dall\'interno prima del lavaggio e della polimerizzazione.' },
      ],
    },
    {
      type: 'title',
      text: 'Perché le stampe cave in resina spesso costano più del previsto',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Svuotare un modello grande può ridurre drasticamente il volume di resina polimerizzata, ma non rende la stampa priva di costi nascosti. Le pareti cave necessitano di fori di drenaggio, la geometria interna deve essere lavabile e la resina non polimerizzata intrappolata all\'interno del modello può fuoriuscire in seguito, crepare il pezzo o interferire con la polimerizzazione finale. Lo slicer può mostrare un volume netto molto inferiore dopo lo svuotamento, ma il processo di manipolazione diventa più sensibile. Ecco perché la complessità alta usa il 15 percento come predefinito.',
    },
    {
      type: 'proscons',
      title: 'Svuotamento e controllo dei costi',
      items: [
        { pro: 'I grandi modelli espositivi possono usare molta meno resina polimerizzata.', con: 'Uno scarso drenaggio può mantenere resina liquida all\'interno del pezzo.' },
        { pro: 'Forze di distacco inferiori possono migliorare il successo su sezioni grandi.', con: 'Fori aggiuntivi, tappi e tempo di pulizia possono aumentare la manodopera.' },
        { pro: 'Un modello più leggero è più facile da spedire e montare.', con: 'Le pareti sottili possono fallire se spessore ed esposizione non sono regolati.' },
      ],
    },
    {
      type: 'card',
      title: 'Regola pratica per la stampa cava',
      html: 'Se un pezzo cavo esce dalla stampante e gocciola ancora dopo un normale sgocciolamento, usa il fattore alto e ispeziona la disposizione dei fori di drenaggio. Se continua a perdere dopo il lavaggio, il problema non è solo di costo; può diventare un problema di qualità e sicurezza perché la resina non polimerizzata rimane all\'interno dell\'oggetto.',
    },
    {
      type: 'title',
      text: 'Leggere le stime dello slicer senza sottopreventivare',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Lychee, Chitubox, PrusaSlicer e altri slicer per resina stimano l\'uso di resina dalla mesh, dai supporti, dallo svuotamento e talvolta dal profilo di resina. Queste stime sono abbastanza buone per confrontare versioni dello stesso lavoro. Sono più deboli come preventivo finale perché non conoscono il tuo flusso di lavoro. Un\'officina che filtra la resina dopo ogni lavoro perde una quantità diversa rispetto a un hobbista che tiene la stessa resina nella vasca. Un utente che lava in due fasi di IPA perde una quantità diversa rispetto a uno che usa una stazione di lavaggio sigillata e lascia sgocciolare completamente i pezzi prima di spostarli.',
    },
    {
      type: 'list',
      items: [
        'Inserisci la stima della piastra completa dopo i supporti, non il volume originale della mesh non supportata.',
        'Usa la stessa valuta per il prezzo della bottiglia e il preventivo finale; il calcolatore può convertire il prezzo visibile della bottiglia tra valute comuni con fattori di cambio approssimativi.',
        'Aggiorna il prezzo della bottiglia quando acquisti resina specializzata, perché le resine colabili, flessibili, dentali e ad alta temperatura possono costare diverse volte di più della resina standard.',
        'Usa la conversione della densità quando la massa dello slicer e il volume della bottiglia non condividono la stessa unità.',
        'Mantieni il tasso di fallimento separato, specialmente quando stampi miniature fragili, gusci dentali sottili o nuove strategie di supporto.',
      ],
    },
    {
      type: 'message',
      title: 'Miglior abitudine di preventivazione',
      html: 'Salva i dati della tua bottiglia di resina comune, incolla la stima dello slicer, scegli la complessità e registra entrambi i numeri. Il costo teorico spiega la stima dello slicer; il costo reale protegge il tuo inventario di materiale.',
    },
    {
      type: 'title',
      text: 'Cosa non include questo calcolatore',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Una stampa in resina ha più costi della sola resina. Questo strumento si concentra intenzionalmente sul consumo variabile di resina perché è il numero più spesso sottovalutato quando si confronta l\'output dello slicer con l\'uso reale della bottiglia. Non include la sostituzione dell\'alcol, detersivo, trattamento dell\'acqua, carta assorbente, guanti monouso, usura della pellicola FEP o di rilascio, invecchiamento dello schermo LCD, ammortamento della stampante, elettricità, tempo di post-polimerizzazione, levigatura, primer, rimozione dei supporti, imballaggio o commissioni di mercato.',
    },
    {
      type: 'table',
      headers: ['Voce di costo', 'Incluso qui?', 'Dove contabilizzarlo'],
      rows: [
        ['Resina liquida usata dalla stampa', 'Sì', 'Questo calcolatore'],
        ['Residuo di resina e spreco normale di manipolazione', 'Sì', 'Fattore di complessità'],
        ['Stampe fallite', 'No', 'Aggiungere tolleranza di fallimento per materiale e rischio del modello'],
        ['IPA, guanti, asciugamani, filtri', 'No', 'Voce consumabili'],
        ['Rimozione supporti e levigatura', 'No', 'Voce manodopera o finitura'],
        ['Ammortamento stampante', 'No', 'Tariffa oraria macchina'],
      ],
    },
    {
      type: 'summary',
      title: 'Flusso di lavoro affidabile per il costo della resina',
      items: [
        'Calcola il prezzo per millilitro dalla bottiglia che hai effettivamente acquistato.',
        'Converti i grammi in millilitri con la densità della resina quando necessario.',
        'Usa l\'output dello slicer dopo supporti e svuotamento.',
        'Applica una correzione dal 10 al 15 percento in base alla geometria e alla perdita di manipolazione.',
        'Mantieni fallimenti, manodopera, consumabili e margine al di fuori del numero del materiale resina.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
