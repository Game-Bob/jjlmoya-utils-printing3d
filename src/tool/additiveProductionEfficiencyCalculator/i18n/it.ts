import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AdditiveProductionEfficiencyCalculatorUI } from '../ui';

const slug = 'calcolatore-efficienza-produzione-additiva';
const title = 'Calcolatore di Efficienza per la Produzione Additiva';
const description =
  'Confronta la stampa batch e la stampa sequenziale con tempo di stampa, overhead di preriscaldamento, transizioni di spostamento, tempo di spurgo, rischio statistico di fallimento e una raccomandazione automatica di fattibilità.';

const faqData = [
  {
    question: 'Quando la stampa batch è più veloce di quella sequenziale?',
    answer:
      'La stampa batch è solitamente più veloce quando il preriscaldamento è significativo, i pezzi si adattano in sicurezza al piatto di costruzione, la distanza di spostamento tra i pezzi è modesta e il tasso di fallimento storico è sufficientemente basso da mantenere il rischio batch combinato sotto la soglia critica.',
  },
  {
    question: 'Perché la stampa sequenziale può essere consigliata anche se richiede più tempo?',
    answer:
      'La stampa sequenziale limita la perdita da un singolo pezzo fallito. Se il rischio batch calcolato come 1 - (1 - tasso di fallimento)^N supera la soglia critica, il calcolatore raccomanda la stampa sequenziale per proteggere la coda di produzione.',
  },
  {
    question: 'Il calcolatore sostituisce le stime dello slicer?',
    answer:
      'No. Uno slicer conosce percorsi utensile esatti, accelerazioni, larghezze di estrusione, raffreddamento e distanze di sicurezza. Questo calcolatore è per la pianificazione della produzione prima dello slicing, specialmente quando si confronta un singolo lavoro a pieno piatto con lavori ripetuti a pezzo singolo.',
  },
  {
    question: 'Quale tasso di fallimento dovrei inserire?',
    answer:
      'Usa la cronologia del tuo laboratorio per materiale, stampante, geometria e condizioni operative simili. Se non lo tracci ancora, inizia in modo conservativo con 2-5% per produzione FDM ottimizzata e aumentalo per materiali nuovi, lavori lunghi o attrezzature poco validate.',
  },
];

const howToData = [
  { name: 'Inserisci la quantità', text: 'Imposta il numero totale di pezzi richiesti per la tiratura produttiva.' },
  { name: 'Aggiungi dati temporali', text: 'Inserisci il tempo di stampa per pezzo, il tempo di preriscaldamento, la distanza di transizione, la velocità di spostamento e il tempo di spurgo o stabilizzazione.' },
  { name: 'Imposta il rischio storico', text: 'Usa una percentuale di fallimento da lavori comparabili e scegli il rischio batch massimo accettabile.' },
  { name: 'Leggi la raccomandazione', text: 'Confronta tempo totale, tempo risparmiato, efficienza relativa, overhead di transizione e rischio batch statistico.' },
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
  step: howToData.map((step, i) => ({ '@type': 'HowToStep', position: i + 1, name: step.name, text: step.text })),
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

export const content: ToolLocaleContent<AdditiveProductionEfficiencyCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Input efficienza produzione additiva',
    resultsAriaLabel: 'Risultati efficienza produzione additiva',
    visualizerAriaLabel: 'Visualizzazione rischio generativo e layout piatto',
    unitSystemLabel: 'Unità',
    metricLabel: 'Metrico',
    imperialLabel: 'US',
    piecesLabel: 'Pezzi',
    unitPrintTimeLabel: 'Tempo di stampa per pezzo (min)',
    preheatTimeLabel: 'Tempo di preriscaldamento (min)',
    transitionDistanceLabel: 'Transizione media',
    travelSpeedLabel: 'Velocità di spostamento',
    failureRateLabel: 'Tasso di fallimento storico',
    purgeTimeLabel: 'Spurgo / stabilizzazione (min)',
    criticalRiskLabel: 'Rischio batch critico',
    batchLabel: 'Stampa batch',
    sequentialLabel: 'Stampa sequenziale',
    recommendationLabel: 'Strategia consigliata',
    savingsLabel: 'Risparmio di tempo assoluto',
    efficiencyLabel: 'Efficienza relativa',
    riskLabel: 'Rischio di fallimento batch',
    layoutLabel: 'Coreografia del piatto',
    transitionLabel: 'Overhead di transizione',
    batchWinsLabel: 'Batch',
    sequentialWinsLabel: 'Sequenziale',
    riskOverrideLabel: 'override rischio',
    fasterLabel: 'risparmiato',
    slowerLabel: 'extra',
    lowRiskLabel: 'Rischio batch basso',
    moderateRiskLabel: 'Rischio batch moderato',
    criticalRiskStatusLabel: 'Rischio batch critico',
    minutesUnit: 'min',
    percentUnit: '%',
    millimeterUnit: 'mm',
    inchUnit: 'in',
    metricSpeedUnit: 'mm/s',
    imperialSpeedUnit: 'in/s',
  },
  seo: [
    { type: 'title', text: 'Stampa Batch vs Stampa Sequenziale: Cosa Misura il Calcolatore', level: 2 },
    {
      type: 'paragraph',
      html: 'Scegliere tra <strong>stampa batch vs stampa sequenziale</strong> non è solo una questione di riempire il piatto di costruzione. Un batch a pieno piatto può risparmiare tempo di riscaldamento e ridurre l\'intervento dell\'operatore, ma concentra il rischio produttivo in un\'unica finestra di esposizione lunga. La stampa sequenziale ripete l\'overhead di configurazione, ma isola i fallimenti in modo che un pezzo difettoso non contamini automaticamente il valore dell\'intero piatto. Questo calcolatore trasforma questo compromesso in numeri: minuti totali, transizioni di spostamento, efficienza relativa e rischio batch statistico.',
    },
    {
      type: 'paragraph',
      html: 'La formula batch è <code>Tbatch = Tc + (N x Tp) + ((N x Dtrans) / (Vtravel x 60))</code>. La formula sequenziale è <code>Tseq = N x (Tc + Tp + Tpurge)</code>. La formula del rischio è <code>Riskbatch = 1 - (1 - Pfailure)^N</code>. Queste equazioni sono intenzionalmente trasparenti perché la pianificazione della produzione è più semplice quando la ragione dietro una raccomandazione è visibile piuttosto che nascosta in una scatola nera.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '1', label: 'Ciclo di preriscaldamento in modalità batch', icon: 'mdi:heat-wave' },
        { value: 'N', label: 'Cicli di preriscaldamento in modalità sequenziale', icon: 'mdi:repeat' },
        { value: '60', label: 'Secondi usati per normalizzare lo spostamento in minuti', icon: 'mdi:timer-outline' },
        { value: '1 - (1-p)^N', label: 'Modello di fallimento batch composto', icon: 'mdi:chart-bell-curve' },
      ],
    },
    {
      type: 'tip',
      title: 'Usa una definizione coerente di fallimento',
      html: '<p>Un tasso di fallimento è utile solo se il laboratorio definisce il fallimento in modo coerente. Decidi se include rifiuti estetici, outlier dimensionali, segni di supporto, fallimenti del primo strato, grovigli di bobina, interruzioni di corrente e rimozioni da parte dell\'operatore. Mescolare le definizioni fa sembrare il modello di rischio preciso mentre lo alimenta con dati rumorosi.</p>',
    },
    { type: 'title', text: 'Come la Stampa Batch Risparmia Tempo', level: 2 },
    {
      type: 'paragraph',
      html: 'La stampa batch di solito vince sull\'utilizzo della macchina quando il tempo di preriscaldamento è grande rispetto al tempo di stampa del singolo pezzo. Riscaldare il piatto e l\'ugello una volta per una tiratura di 24 pezzi può evitare 23 cicli di riscaldamento ripetuti. In un ambiente di farm questo è importante perché il riscaldamento è capacità morta: la stampante consuma tempo di calendario, energia e attenzione dell\'operatore prima che venga prodotta qualsiasi geometria vendibile.',
    },
    {
      type: 'paragraph',
      html: 'Il termine di spostamento impedisce al modello di fingere che i layout batch siano gratuiti. Ogni pezzo può aggiungere una transizione di non stampa in cui l\'ugello attraversa il piatto, evita isole, esegue movimenti di pettinatura o si sposta al confine dell\'oggetto successivo. Il calcolatore usa la distanza di transizione media e la velocità di spostamento per stimare questo overhead in minuti. Il termine è piccolo su layout compatti e più visibile quando i pezzi sono sparsi su un piatto grande.',
    },
    {
      type: 'table',
      headers: ['Variabile batch', 'Significato produttivo', 'Errore di pianificazione che previene'],
      rows: [
        ['N', 'Pezzi totali nella tiratura', 'Trattare un piatto da dieci pezzi come dieci lavori isolati senza preriscaldamento condiviso.'],
        ['Tp', 'Tempo di stampa di un pezzo completo', 'Usare il tempo di strato solo da una piccola caratteristica invece di una stima del pezzo finito.'],
        ['Tc', 'Tempo di riscaldamento piatto e ugello', 'Ignorare il tempo prima dell\'inizio dell\'estrusione quando si quota la capacità della coda.'],
        ['Dtrans', 'Distanza media tra i pezzi', 'Presumere che un piatto affollato non abbia penalità di movimento non di estrusione.'],
        ['Vtravel', 'Velocità di spostamento della testa', 'Dimenticare che i profili di spostamento lenti rendono gli array sparsi meno efficienti.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Il tempo batch è più sensibile a preriscaldamento e quantità',
      badge: 'Pianificazione capacità',
      html: '<p>Se il preriscaldamento è di 12 minuti e il lavoro contiene 30 pezzi, la modalità sequenziale spende 360 minuti solo per ripetere il riscaldamento. La modalità batch spende quei 12 minuti una volta. Ecco perché la stessa stampante può apparire drammaticamente più produttiva quando i pezzi piccoli sono annidati con cura.</p>',
    },
    { type: 'title', text: 'Perché la Stampa Sequenziale Vince Ancora nei Lavori Rischiosi', level: 2 },
    {
      type: 'paragraph',
      html: 'La stampa sequenziale può sembrare più lenta perché la stampante ripete il preriscaldamento e il tempo di spurgo o stabilizzazione per ogni unità. Il vantaggio è il contenimento. Se il pezzo 17 fallisce in un piano sequenziale, i 16 pezzi precedenti potrebbero essere già completi e rimossi. Se il pezzo 17 fallisce in un batch a causa di trascinamento dell\'ugello, perdita di adesione, creep termico o un problema di materiale, l\'oggetto fallito potrebbe urtare i pezzi vicini o causare all\'operatore la rottamazione dell\'intero piatto.',
    },
    {
      type: 'paragraph',
      html: 'Il modello di rischio combina la probabilità di fallimento storico attraverso il conteggio dei pezzi. Un tasso di fallimento del 3% per un singolo pezzo non significa che un batch di 24 pezzi abbia un rischio del 3%. La probabilità che ogni pezzo abbia successo è <code>(1 - 0.03)^24</code>, e la probabilità che almeno un pezzo fallisca è il complemento. Questo rende i grandi batch meno attraenti quando il processo non è stabile.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Stampa batch',
          description: 'Ideale quando il processo è stabile, i pezzi hanno forte adesione, il layout del piatto è sicuro dalle collisioni e il tempo di preriscaldamento domina la schedulazione.',
          icon: 'mdi:grid',
          highlight: true,
          points: ['Un ciclo di riscaldamento', 'Alta produttività', 'Maggiore esposizione a fallimenti condivisi'],
        },
        {
          title: 'Stampa sequenziale',
          description: 'Ideale quando gli scarti sono costosi, i lavori sono alti, i materiali sono sensibili o l\'utente vuole isolare ogni pezzo dal successivo.',
          icon: 'mdi:format-list-numbered',
          points: ['Contenimento dei fallimenti', 'Più overhead ripetuto', 'Richiede pianificazione delle distanze di sicurezza'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Compromesso del rischio produttivo',
      items: [
        { pro: 'La stampa batch riduce il tempo di riscaldamento inattivo e può completare piccoli pezzi ripetitivi in una singola tiratura senza supervisione.', con: 'Un singolo fallimento di adesione o estrusione può minacciare l\'intero piatto e consumare una lunga finestra di recupero dell\'operatore.' },
        { pro: 'La stampa sequenziale facilita la validazione di un\'unità, la rimozione e la continuazione con una perdita cumulativa minore.', con: 'Riscaldamento e stabilizzazione ripetuti possono consumare più tempo della geometria effettiva su pezzi piccoli.' },
        { pro: 'Un batch può semplificare l\'imballaggio perché tutti i pezzi finiscono insieme.', con: 'Un batch lungo espone ogni unità alla stessa deriva ambientale, problema di bobina o periodo di degrado termico.' },
      ],
    },
    { type: 'title', text: 'Scegliere una Soglia di Rischio Batch Critico', level: 2 },
    {
      type: 'paragraph',
      html: 'La soglia di rischio critico è la linea in cui il calcolatore passa la raccomandazione dall\'ottimizzazione del tempo alla protezione della fattibilità. Un laboratorio di prototipi può tollerare un rischio batch del 45% se il materiale è economico e l\'operatore sta sperimentando. Una farm produttiva che spedisce pezzi ai clienti può usare il 15-25% per materiali comuni e soglie più basse per lavori notturni, polimeri ingegneristici costosi o pezzi con elevata manodopera di post-elaborazione.',
    },
    {
      type: 'table',
      headers: ['Soglia', 'Buon caso d\'uso', 'Interpretazione'],
      rows: [
        ['10-20%', 'Pezzi costosi, lavori notturni, ordini clienti di alto valore', 'Proteggi l\'affidabilità anche quando la modalità batch risparmia tempo.'],
        ['25-35%', 'Produzione FDM normale ottimizzata con materiale noto', 'Soglia bilanciata per risparmio di tempo ed esposizione a scarti.'],
        ['40-60%', 'Prototipi interni o attrezzature economiche', 'Accetta più rischio per liberare capacità della stampante più velocemente.'],
        ['Oltre 60%', 'Solo esplorazione', 'Utile per vedere il potenziale di tempo, ma debole come regola di fattibilità produttiva.'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:clipboard-pulse-outline',
      title: 'Come stimare il tuo tasso di fallimento iniziale',
      html: '<p>Rivedi le ultime 50-200 stampe comparabili sulla stessa famiglia di stampanti. Conta i lavori che hanno richiesto ristampa, salvataggio manuale o rifiuto del cliente. Dividi i fallimenti per i tentativi totali, poi separa per materiale e geometria quando ci sono abbastanza dati. Staffe in PLA, clip in PETG, involucri in ASA e guarnizioni in TPU non dovrebbero condividere un numero di rischio generico.</p>',
    },
    {
      type: 'summary',
      title: 'Regole della soglia di rischio',
      items: [
        'Abbassa la soglia quando materiale, scadenza o costo di post-elaborazione sono elevati.',
        'Alzala solo quando i pezzi falliti sono economici e la coda beneficia di un batch aggressivo.',
        'Ricalcola dopo cambiamenti di processo come una nuova superficie del piatto, ugello, fornitore di filamento o temperatura della camera.',
      ],
    },
    { type: 'title', text: 'Transizioni di Spostamento, Movimento della Testa ed Efficienza del Layout', level: 2 },
    {
      type: 'paragraph',
      html: 'Le transizioni di spostamento sono il costo nascosto dell\'efficienza di stampa in-place. Uno slicer può saltare da un pezzo all\'altro molte volte per strato, specialmente quando più oggetti condividono la stessa altezza Z. La distanza di transizione media non deve essere perfetta; deve solo rappresentare se il layout è compatto, moderatamente distanziato o sparso sulla superficie di costruzione. Un array compatto con transizioni medie di 25 mm si comporta molto diversamente da una disposizione a pieno piatto con salti di 180 mm.',
    },
    {
      type: 'paragraph',
      html: 'La velocità di spostamento dovrebbe riflettere il profilo reale, non il massimo pubblicitario della macchina. Limiti di accelerazione, impostazioni del firmware, opzioni di evitamento perimetri, Z-hop e strategia di pettinatura possono rendere lo spostamento effettivo più lento di quanto suggerisca il campo dello slicer. Se una macchina usa spostamento conservativo per primi strati fragili o pezzi alti, abbassa il valore per evitare di sovrastimare l\'efficienza batch.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Stampa batch', definition: 'Stampare più copie o oggetti in un unico lavoro condiviso sul piatto di costruzione.' },
        { term: 'Stampa sequenziale', definition: 'Stampare un oggetto alla volta prima di passare all\'oggetto successivo, spesso con vincoli di distanza di sicurezza attorno alla testa utensile.' },
        { term: 'Distanza di transizione', definition: 'Distanza media di spostamento non di estrusione necessaria per muoversi tra pezzi o zone di stampa.' },
        { term: 'Tempo di spurgo o stabilizzazione', definition: 'Tempo extra per unità sequenziale per priming, assestamento termico, pulizia o comportamento di riavvio sicuro per l\'operatore.' },
        { term: 'Rischio critico', definition: 'Probabilità massima accettabile che almeno un pezzo nel batch fallisca.' },
      ],
    },
    {
      type: 'message',
      title: 'La distanza di sicurezza dalle collisioni conta nella vera modalità sequenziale',
      ariaLabel: 'Avviso distanza di sicurezza stampa sequenziale',
      html: '<p>Molti slicer limitano la stampa sequenziale perché hotend, condotto della ventola, gantry X o clip del piatto possono entrare in collisione con pezzi finiti. Usa questo calcolatore per la pianificazione, poi verifica la distanza di sicurezza sequenziale all\'interno dello slicer prima di avviare il lavoro.</p>',
    },
    { type: 'title', text: 'Come Usare i Risultati per l\'Ottimizzazione della Produzione Additiva', level: 2 },
    {
      type: 'paragraph',
      html: 'Il risparmio di tempo assoluto mostra quanti minuti la modalità batch guadagna o perde rispetto alla modalità sequenziale. La percentuale di efficienza relativa normalizza quella differenza rispetto al tempo sequenziale, utile quando si confrontano lavori di diverse dimensioni. Risparmiare 20 minuti su una tiratura di 40 minuti è operativamente enorme; risparmiare 20 minuti su una tiratura di 30 ore potrebbe non giustificare un rischio più elevato.',
    },
    {
      type: 'paragraph',
      html: 'La raccomandazione combina velocità e fattibilità. Se il batch è più veloce e il rischio è sotto la soglia, lo strumento raccomanda batch. Se il rischio batch supera la soglia, viene raccomandato sequenziale anche se è più lento. Se il batch è più lento perché l\'overhead di transizione è grande o il preriscaldamento è piccolo, il sequenziale vince in tempo senza bisogno dell\'override del rischio.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Usa il calcolatore prima di annidare un grande piatto di costruzione in modo che il piano di produzione sia basato sul tempo di coda e sull\'esposizione ai fallimenti.',
        'Esegui un confronto what-if con un tasso di fallimento inferiore dopo la calibrazione per vedere come il miglioramento del processo cambia la strategia.',
        'Aumenta il tempo di spurgo quando i lavori sequenziali richiedono pulizia, priming, ispezione del piatto o intervento dell\'operatore tra le unità.',
        'Riduci la velocità di spostamento quando usi Z-hop, evitamento perimetri, pezzi alti fragili o limiti di accelerazione del firmware.',
        'Registra i risultati effettivi della tiratura e aggiorna il tasso di fallimento invece di affidarti a una regola empirica generica.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Non ottimizzare solo per il tempo di clock più veloce',
      badge: 'Costo operativo',
      html: '<p>Un batch di 12 ore fallito può costare più del tempo mostrato sul display della macchina. Includi materiale, elettricità, diagnosi dell\'operatore, slot di coda perso, ritardo di post-elaborazione e impatto sulla scadenza del cliente quando decidi se il risparmio di tempo vale il rischio composto.</p>',
    },
    { type: 'title', text: 'Esempi Pratici per Flussi di Lavoro del Calcolatore di Tempo di Stampa 3D', level: 2 },
    {
      type: 'paragraph',
      html: 'Per piccole clip in PLA con un tempo di stampa di 20 minuti per pezzo e riscaldamento di 10 minuti, la stampa batch spesso domina. Il preriscaldamento condiviso risparmia una grande frazione del lavoro, e il posizionamento compatto mantiene basso l\'overhead di transizione. Se il laboratorio ha un tasso di fallimento dell\'1-2%, il rischio può rimanere accettabile per quantità moderate. Questo è il classico caso d\'uso ad alta produttività per la stampa batch.',
    },
    {
      type: 'paragraph',
      html: 'Per staffe alte in PETG con adesione marginale, la stampa sequenziale può essere più sicura. Anche se il batch risparmia due ore, un angolo arricciato può causare impatto dell\'ugello, spostamento di strato o distacco dell\'oggetto che rovina i pezzi vicini. Il calcolatore espone la differenza tra un risparmio di tempo allettante e un profilo di rischio che non si adatta più all\'intento produttivo.',
    },
    {
      type: 'paragraph',
      html: 'Per decisioni di efficienza di stampa in-place, esegui lo stesso pezzo due volte: una con il tasso di fallimento attuale e una con il tasso target dopo la calibrazione. Se ridurre i fallimenti dal 6% al 2% inverte la raccomandazione da sequenziale a batch, il miglior investimento potrebbe essere la pulizia del piatto, la regolazione del primo strato, il filamento asciutto, la stabilità della camera o una strategia di brim validata piuttosto che comprare un\'altra stampante.',
    },
    {
      type: 'summary',
      title: 'Checklist decisionale',
      items: [
        'Batch quando il preriscaldamento è grande, il layout è compatto e il tasso di fallimento storico è basso.',
        'Sequenziale quando ogni scarto è costoso, alto, rischioso o probabile di danneggiare i vicini.',
        'Ottimizza il processo quando una piccola riduzione del tasso di fallimento sblocca un\'efficienza batch significativa.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
