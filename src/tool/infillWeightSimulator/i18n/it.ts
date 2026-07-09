import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InfillWeightSimulatorUI } from '../ui';

const slug = 'calcolatore-peso-percentuale-infill-3d';
const title = 'Calcolatore Peso Percentuale Infill Stampa 3D';
const description =
  'Stima il peso del pezzo, il filamento risparmiato e il costo del materiale modificando la percentuale e il motivo di riempimento a partire da un peso di riferimento con infill al 100%.';

const faqData = [
  {
    question: 'Posso stimare il peso di una stampa 3D dal peso con infill al 100%?',
    answer:
      'Sì, ma la stima deve tenere separati gusci, pareti, strati superiori e inferiori dal riempimento interno. Un pezzo non diventa senza peso con infill allo 0% perché il perimetro esterno utilizza ancora materiale.',
  },
  {
    question: 'Perché il motivo di riempimento cambia il peso stimato?',
    answer:
      'Motivi diversi creano lunghezze di percorso utensile diverse alla stessa densità nominale. I motivi a linee e concentrici sono solitamente più leggeri, mentre alveolare, cubico e triangoli tendono ad aggiungere più lunghezza di parete interna.',
  },
  {
    question: 'Il peso del slicer è più accurato di questo calcolatore?',
    answer:
      'Un slicer è più accurato una volta noti il modello, l\'ugello, la larghezza di estrusione, il numero di pareti, gli strati superiori e il profilo del materiale. Questo calcolatore è progettato per una pianificazione rapida prima di risliciare molte versioni.',
  },
  {
    question: 'Quale percentuale di guscio dovrei usare?',
    answer:
      'Per molti pezzi FDM decorativi o di medie dimensioni, una quota di guscio del 20-35% è un intervallo di partenza pratico. Pezzi piccoli, oggetti sottili e parti con molti fori possono avere una quota di guscio più alta.',
  },
];

const howToData = [
  {
    name: 'Partire da un riferimento con infill al 100%',
    text: 'Usa il peso riportato dal tuo slicer per lo stesso modello con infill al 100%, o pesa una stampa di riferimento nota completamente densa.',
  },
  {
    name: 'Scegliere infill e motivo target',
    text: 'Muovi il cursore dell\'infill e scegli il motivo più vicino all\'impostazione slicer che intendi utilizzare.',
  },
  {
    name: 'Regolare le ipotesi di guscio e scarto',
    text: 'Aumenta la quota di guscio per modelli sottili o pesanti in perimetri, poi aggiungi scarto per purge, tesa, bordo, supporti e avvii falliti.',
  },
  {
    name: 'Leggere i risparmi di peso e costo',
    text: 'Confronta il peso stimato finale con la baseline di infill al 100% per decidere se il risparmio di materiale vale il compromesso di rigidità.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'it',
};

export const content: ToolLocaleContent<InfillWeightSimulatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Input peso infill',
    resultsAriaLabel: 'Risultati peso stampa stimati',
    unitSystemLabel: 'Unità',
    metricLabel: 'Metrico',
    imperialLabel: 'US',
    currencyLabel: 'Valuta',
    currencyOptions: [
      { code: 'USD', label: '$', symbol: '$' },
      { code: 'EUR', label: '€', symbol: '€' },
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
    fullWeightLabel: 'Peso infill 100%',
    fullWeightHint: 'Usa il valore dello slicer per lo stesso modello a densità piena.',
    infillLabel: 'Infill target',
    patternLabel: 'Motivo di riempimento',
    patternOptions: [
      { value: 'lines', label: 'Linee - percorsi leggeri' },
      { value: 'grid', label: 'Griglia - baseline slicer' },
      { value: 'triangles', label: 'Triangoli - celle rigide' },
      { value: 'gyroid', label: 'Giroide - reticolo liscio' },
      { value: 'cubic', label: 'Cubico - rigidità 3D' },
      { value: 'honeycomb', label: 'Alveolare - pareti dense' },
      { value: 'concentric', label: 'Concentrico - segue il contorno' },
    ],
    shellShareLabel: 'Quota di guscio',
    shellShareHint: 'Pareti, strati superiori, strati inferiori e caratteristiche piene che non scalano con l\'infill.',
    spoolPriceLabel: 'Prezzo del filamento',
    wasteLabel: 'Scarto',
    estimatedWeightLabel: 'Peso stimato del pezzo',
    filamentSavedLabel: 'Filamento risparmiato',
    materialCostLabel: 'Costo del materiale',
    costSavedLabel: 'Costo risparmiato',
    effectiveDensityLabel: 'Densità effettiva',
    shellLabel: 'Guscio',
    infillCoreLabel: 'Nucleo di riempimento',
    patternImpactLabel: 'Moltiplicatore di motivo',
    comparisonLabel: 'Confronto baseline',
    fullInfillLabel: '100% infill',
    targetInfillLabel: 'Configurazione target',
    insightLow: 'Un infill molto basso può risparmiare molto filamento, ma le superfici superiori, i boss per viti, le clip e le zone portanti potrebbero necessitare di pareti extra o modificatori locali.',
    insightBalanced: 'Questa è una zona di pianificazione equilibrata per molte stampe visive e funzionali leggere: il guscio porta la forma mentre l\'infill controlla rigidità e costo.',
    insightHigh: 'Un infill alto restringe rapidamente il divario di risparmio. Considera più pareti, un motivo più forte o una scelta di materiale diversa prima di usare infill denso ovunque.',
  },
  seo: [
    { type: 'title', text: 'Come funziona un calcolatore di peso percentuale infill per stampa 3D', level: 2 },
    {
      type: 'paragraph',
      html: 'Un <strong>calcolatore di peso percentuale infill per stampa 3D</strong> stima quanto materiale plastico rimane quando un modello viene stampato con meno del 100% di densità interna. Il dettaglio importante è che il peso FDM non è una semplice moltiplicazione del peso pieno per la percentuale di infill. Un modello stampato al 20% di infill di solito non pesa il 20% della versione completamente densa, perché pareti, strati superiori, strati inferiori, piccole regioni piene, bordi e interfacce di supporto consumano ancora filamento. Questo calcolatore parte dal peso noto o riportato dal slicer al 100% di infill, separa una quota di guscio configurabile, quindi scala il nucleo interno in base all\'infill target e al comportamento del motivo.',
    },
    {
      type: 'paragraph',
      html: 'Il metodo è progettato per confronti rapidi prima di dedicare tempo a risliciare un file molte volte. Se una staffa in PETG completamente densa è stimata a 240 g, passare al 20% giroide potrebbe non produrre un pezzo da 48 g. Con una quota di guscio del 28%, la massa perimetrale è già di circa 67 g prima di contare la densità interna. Il nucleo di riempimento aggiunge quindi materiale in base alla densità selezionata e al moltiplicatore di motivo. Il risultato è una stima di pianificazione più realistica della matematica lineare dell\'infill, ma comunque abbastanza rapida per decisioni preliminari.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '20-35%', label: 'Quota di guscio tipica per molti pezzi FDM medi', icon: 'mdi:cube-outline' },
        { value: '0,88x', label: 'Moltiplicatore di contorno leggero per infill concentrico', icon: 'mdi:chart-line' },
        { value: '1,16x', label: 'Moltiplicatore di percorso denso per pianificazione alveolare', icon: 'mdi:hexagon-multiple' },
        { value: '100%', label: 'Peso di riferimento usato come base per i risparmi', icon: 'mdi:weight-gram' },
      ],
    },
    {
      type: 'tip',
      title: 'Usa lo stesso profilo slicer per il riferimento',
      html: '<p>Per la stima più pulita, genera il peso con infill al 100% con lo stesso ugello, larghezza di estrusione, numero di pareti, strati superiori, strati inferiori, densità del materiale e impostazioni di supporto che userai per la stampa target. Modificare queste impostazioni cambia la massa del guscio, quindi il confronto basato solo sull\'infill diventa meno significativo.</p>',
    },

    { type: 'title', text: 'Perché il peso dell\'infill non è lineare', level: 2 },
    {
      type: 'paragraph',
      html: 'L\'espressione <em>percentuale di infill</em> suona come un valore di densità diretto, ma i slicer lo applicano solo alla regione interna lasciata dopo la generazione dei perimetri e delle superfici piene. Un semplice cubo con due pareti e sei strati superiori può avere un grande volume interno, quindi la percentuale di infill influisce fortemente sul peso. Un supporto per telefono sottile, un alloggiamento per ingranaggi con molti fori, o una miniatura con arti stretti possono avere così tanta geometria perimetrale che ridurre l\'infill produce un risparmio minore del previsto. Ecco perché il calcolatore espone la <strong>quota di guscio</strong> invece di nasconderla.',
    },
    {
      type: 'table',
      headers: ['Tipo di modello', 'Quota di guscio probabile', 'Cosa significa per i risparmi'],
      rows: [
        ['Grande contenitore rettangolare', '15-25%', 'La maggior parte della massa è volume interno, quindi l\'infill cambia il peso significativamente.'],
        ['Figura decorativa o modello organico', '25-45%', 'Molte curve e regioni strette creano geometria pesante in perimetri.'],
        ['Staffa o pannello sottile', '35-60%', 'Pareti e superfici dominano; la riduzione dell\'infill può risparmiare meno plastica.'],
        ['Piccola clip meccanica', '45-70%', 'Il modello può essere quasi solido solo dai perimetri.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Quando la stima sembra troppo pesante',
      badge: 'Controlla quota guscio',
      html: '<p>Se un\'impostazione di infill al 10% produce ancora un peso stimato elevato, la quota di guscio è probabilmente grande. Questo può essere corretto per pezzi piccoli o sottili. Verifica il numero di pareti, lo spessore superiore e inferiore e se il modello ha molte isole separate o nervature strette.</p>',
    },
    {
      type: 'summary',
      title: 'Interpretazione pratica',
      items: [
        'La percentuale di infill influisce solo sul nucleo interno, non sull\'intera stampa.',
        'Un pezzo con infill allo 0% ha ancora pareti, pelli, giunzioni e a volte piccole caratteristiche piene.',
        'Il riferimento a peso pieno, la quota di guscio, la scelta del motivo e il margine di scarto insieme producono un numero di pianificazione migliore.',
      ],
    },

    { type: 'title', text: 'Moltiplicatori di peso per motivo di riempimento', level: 2 },
    {
      type: 'paragraph',
      html: 'Due stampe possono essere entrambe impostate al 25% di infill e utilizzare comunque diverse quantità di filamento perché la geometria del percorso utensile cambia. I motivi a linee e concentrici spesso producono percorsi interni più leggeri perché evitano alcune strutture di incrocio. Griglia, triangoli, cubico, giroide e alveolare creano diverse quantità di sovrapposizione, rinforzo direzionale e lunghezza del percorso. Il calcolatore modella questo con un piccolo <strong>moltiplicatore di motivo</strong> applicato al nucleo interno, non all\'intero pezzo.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Linee e concentrico',
          description: 'Utile quando il peso minimo e la stampa veloce contano più della rigidità uniforme.',
          icon: 'mdi:format-line-spacing',
          points: ['Densità di percorso inferiore', 'Buono per pezzi decorativi', 'La resistenza direzionale può essere irregolare'],
        },
        {
          title: 'Griglia e giroide',
          description: 'Scelte equilibrate per stampe visive e funzionali comuni dove la rigidità conta.',
          icon: 'mdi:grid',
          highlight: true,
          points: ['Baseline slicer prevedibile', 'Buon compromesso rigidità-peso', 'Il giroide distribuisce i carichi uniformemente'],
        },
        {
          title: 'Cubico, triangoli, alveolare',
          description: 'Scelte di pianificazione più pesanti che possono migliorare la rigidità ma ridurre il risparmio di filamento.',
          icon: 'mdi:hexagon-outline',
          points: ['Più lunghezza di parete interna', 'Migliore rigidità multidirezionale', 'Tempo di stampa più lungo è comune'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Compromessi nella selezione del motivo',
      items: [
        { pro: 'I motivi più leggeri riducono il costo del materiale e possono abbreviare il tempo di stampa.', con: 'Possono creare direzioni più deboli o un minore supporto della superficie superiore.' },
        { pro: 'I motivi densi migliorano la sensazione di rigidità e riducono la flessione.', con: 'Possono avvicinarsi al costo di un infill più alto senza risolvere un design di pareti deboli.' },
        { pro: 'Il giroide distribuisce i carichi uniformemente in molte direzioni.', con: 'Può stampare più lentamente su macchine con impostazioni di accelerazione conservative.' },
      ],
    },
    {
      type: 'message',
      title: 'I moltiplicatori di motivo sono ipotesi di pianificazione',
      ariaLabel: 'Nota sui moltiplicatori di motivo',
      html: '<p>I motori dei slicer implementano i motivi in modo diverso. Tratta il moltiplicatore come uno stimatore preliminare, poi conferma i lavori di produzione importanti con un\'anteprima slicer reale e il rapporto di utilizzo del materiale.</p>',
    },

    { type: 'title', text: 'Calcolo dei risparmi di filamento e costo', level: 2 },
    {
      type: 'paragraph',
      html: 'La stima del costo del materiale moltiplica i grammi finali per il prezzo della bobina al chilogrammo. Se il calcolatore prevede una stampa di 126 g e la bobina costa 24 $ al kg, la parte di plastica è di circa 3,02 $ prima di tempo macchina, elettricità, manodopera, imballaggio e stampe fallite. Il costo risparmiato confronta lo stesso modello con la baseline di infill al 100%, usando la stessa percentuale di scarto. Questo è utile per preventivi, pianificazione di lotti e per decidere se un\'impostazione di infill più pesante vale il materiale extra.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Usa la percentuale di scarto per linee di purge, tese, bordi, supporti, zattere, cambi di colore e brevi avvii falliti.',
        'Per prototipi singoli, un margine di scarto del 5-10% è solitamente più realistico di zero.',
        'Per lotti di produzione con supporti o materiali abrasivi, registra il peso reale avanzato e fallito su più lavori.',
        'Quando confronti PLA, PETG, ABS, ASA, nylon e compositi caricati, usa il prezzo della bobina per il materiale esatto, non una media generica.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:cash-multiple',
      title: 'Esempio: dal prototipo denso all\'infill di produzione',
      html: '<p>Un prototipo con infill al 100% pesa 240 g. Con una quota di guscio del 28%, 20% giroide, 6% di scarto e filamento a 24 $/kg, la stima si attesta sul centinaio di grammi anziché 48 g. Questa differenza conta quando si preventivano 40 copie: piccoli errori per pezzo diventano bobine intere di plastica.</p>',
    },
    {
      type: 'table',
      headers: ['Input', 'Perché è importante', 'Errore comune'],
      rows: [
        ['Peso 100%', 'Definisce la baseline massima di materiale.', 'Usare un numero di pareti diverso dalla stampa target.'],
        ['Infill target', 'Controlla la densità del nucleo interno.', 'Supporre che il 20% di infill significhi il 20% del peso totale del pezzo.'],
        ['Motivo', 'Modifica la lunghezza del percorso e la rigidità.', 'Ignorare il motivo quando si confrontano le preimpostazioni dello slicer.'],
        ['Scarto', 'Aggiunge filamento reale usato fuori dal pezzo finale.', 'Dimenticare supporti e avvii falliti.'],
      ],
    },

    { type: 'title', text: 'Scegliere l\'infill per risparmiare peso senza pezzi deboli', level: 2 },
    {
      type: 'paragraph',
      html: 'Il risparmio di peso è valido solo se il pezzo svolge ancora la sua funzione. Per modelli visivi, oggetti da esposizione, pezzi per cosplay e coperture, un infill basso con sufficienti strati superiori può essere perfetto. Per staffe, fissaggi, contenitori con viti, caratteristiche a scatto e pezzi esposti a calore o urti, il miglioramento migliore è spesso più pareti o rinforzo locale piuttosto che aumentare semplicemente l\'infill globale. Un pezzo con quattro pareti e 20% giroide può essere più forte nei punti giusti rispetto a un pezzo con due pareti e 50% di infill.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Quota di guscio', definition: 'La porzione del peso completamente denso che appartiene a pareti, strati superiori, strati inferiori e geometria piena inevitabile.' },
        { term: 'Infill nominale', definition: 'La percentuale selezionata nello slicer per la regione interna dopo la generazione dei gusci.' },
        { term: 'Densità effettiva', definition: 'La densità totale stimata della stampa finita dopo la combinazione di quota di guscio, percentuale di infill e moltiplicatore di motivo.' },
        { term: 'Margine di scarto', definition: 'Filamento extra utilizzato per materiale non del pezzo come purge, bordo, supporti, test e avvii falliti.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Non usare il risparmio di peso come unico criterio di progettazione',
      badge: 'Stampe funzionali',
      html: '<p>I pezzi caricati attraverso gli strati, i pezzi con inserti filettati e i pezzi con compressione di viti necessitano di un ragionamento meccanico separato. L\'infill aiuta, ma lo spessore delle pareti, l\'orientamento, il materiale, la temperatura e la concentrazione delle tensioni contano spesso più della densità da sola.</p>',
    },
    {
      type: 'summary',
      title: 'Regole rapide di decisione',
      items: [
        'Stampe decorative: riduci prima l\'infill, poi verifica la qualità della superficie superiore.',
        'Stampe funzionali leggere: usa un motivo equilibrato e pareti sufficienti prima di un infill alto.',
        'Staff e fissaggi: rinforza fori, angoli e percorsi di carico con modificatori locali.',
        'Lavori in lotti: conferma la stima finale con lo slicer prima di acquistare materiale.',
      ],
    },

    { type: 'title', text: 'Quando fidarsi del calcolatore e quando risliciare', level: 2 },
    {
      type: 'paragraph',
      html: 'Questo calcolatore è ideale per stime rapide, preventivi iniziali, acquisto di materiale e confronto di molte opzioni di infill senza aprire ripetutamente lo slicer. Non sostituisce lo slicer quando le impostazioni dimensionali cambiano. Se modifichi il diametro dell\'ugello, la larghezza di estrusione, il numero di pareti, lo spessore superiore, lo spessore inferiore, gli strati adattivi, lo stile di supporto, la stiratura, la modalità vaso o la densità del materiale, la baseline del 100% e la quota di guscio devono essere aggiornate.',
    },
    {
      type: 'list',
      icon: 'mdi:calculator-variant-outline',
      items: [
        'Usa il calcolatore quando il modello e il profilo rimangono principalmente fissi e stai esplorando densità o motivo.',
        'Rislicia quando cambiano il numero di pareti, la generazione di supporti, la dimensione dell\'ugello o il profilo del materiale.',
        'Pesa un pezzo finito quando hai bisogno di registrazioni di costo a livello di produzione o previsioni di inventario.',
        'Registra i grammi effettivi per lavori ripetuti; i dati reali miglioreranno rapidamente le tue ipotesi sulla quota di guscio.',
      ],
    },
    {
      type: 'tip',
      title: 'Un flusso di lavoro affidabile per i preventivi',
      html: '<p>Crea un riferimento slicer completamente denso, stima diverse opzioni di infill con questo calcolatore, scegli le due più promettenti, poi rislicia solo quei due candidati finali. Questo mantiene i preventivi rapidi pur continuando a basare i prezzi finali su rapporti di materiale specifici dello slicer.</p>',
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
