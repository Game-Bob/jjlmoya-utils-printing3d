import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TechnicalResinUvCuringUI } from '../ui';

const slug = 'calcolatore-tempo-polimerizzazione-uv-resina-tecnica';
const title = 'Calcolatore del Tempo di Polimerizzazione UV per Resina Tecnica';
const description = 'Stima il tempo sicuro di post-polimerizzazione della resina SLA in base al tipo di resina, allo spessore massimo della parete, alla potenza della stazione di lavaggio e polimerizzazione e alla lunghezza d\'onda UV.';

const faqData = [
  { question: 'Per quanto tempo devo polimerizzare le stampe in resina SLA?', answer: 'Il tempo corretto dipende dal tipo di resina, dallo spessore della parete, dalla potenza della stazione di polimerizzazione, dalla lunghezza d\'onda e dalla geometria di esposizione. I piccoli pezzi in resina standard possono richiedere solo pochi minuti, mentre i pezzi spessi in resina resistente necessitano di più tempo ma devono rispettare un limite di sicurezza.' },
  { question: 'Troppa polimerizzazione UV può rendere la resina fragile?', answer: 'Sì. L\'esposizione UV eccessiva può rendere molti pezzi in resina fotopolimerica fragili, gialli o meno flessibili. Il calcolatore limita il tempo quando la stima grezza entra in una regione di degradazione.' },
  { question: 'Le stampe in resina devono essere asciutte prima della polimerizzazione?', answer: 'Sì. Le stampe in resina devono essere pulite e completamente asciutte prima della polimerizzazione UV. I residui di alcol possono causare sbiancamento, contaminazione intrappolata e risultati di post-polimerizzazione inconsistenti.' },
  { question: 'È meglio 385 nm o 405 nm per la polimerizzazione della resina?', answer: 'Nessuno è universalmente migliore. La lunghezza d\'onda migliore è quella abbinata al sistema fotoiniziatore della resina e alla stazione di polimerizzazione. Molte resine da scrivania sono ottimizzate per 405 nm, mentre alcune resine tecniche rispondono bene a 385 nm.' },
];

const howToData = [
  { name: 'Seleziona il preset di resina', text: 'Scegli standard, flessibile, rigida/resistente, colabile o bruciabile secondo il flacone di resina o l\'uso previsto.' },
  { name: 'Inserisci la parete più spessa', text: 'Misura lo spessore massimo della parete che deve ricevere la post-polimerizzazione UV.' },
  { name: 'Inserisci i parametri della stazione', text: 'Imposta la potenza della stazione di polimerizzazione e la lunghezza d\'onda per corrispondere alla tua camera UV.' },
  { name: 'Segui la lista di controllo di sicurezza', text: 'Asciuga il pezzo, esponi ogni faccia, rimuovi i supporti che proiettano ombre e rispetta il valore massimo sicuro del timer.' },
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
  inLanguage: 'it',
};

const seoData = [
  { type: 'title', text: 'Come Viene Scelto il Tempo di Post-Polimerizzazione della Resina SLA', level: 2 },
  {
    type: 'paragraph',
    html: 'La post-polimerizzazione è l\'esposizione UV controllata applicata dopo che una stampa in resina è stata lavata. L\'obiettivo non è semplicemente rendere la superficie asciutta al tatto. Un pezzo SLA o MSLA correttamente polimerizzato raggiunge una migliore conversione dei gruppi reattivi all\'interno della rete polimerica, migliorando rigidità, resistenza al calore, stabilità dimensionale e sicurezza di manipolazione. La sotto-polimerizzazione lascia superfici appiccicose, deboli o chimicamente attive. La sovra-polimerizzazione può spingere il materiale verso la fragilizzazione, l\'ingiallimento visibile e la perdita di allungamento. Un <strong>calcolatore del tempo di polimerizzazione UV per resina SLA</strong> utile deve bilanciare la chimica della resina, lo spessore della parete, l\'intensità luminosa, la lunghezza d\'onda, la temperatura e la geometria di esposizione.',
  },
  {
    type: 'paragraph',
    html: 'Il calcolatore utilizza preimpostazioni di resina perché diverse famiglie di resine non rispondono in modo identico. Una resina da scrivania standard generalmente polimerizza più velocemente di una formulazione flessibile tipo uretanica. La resina resistente o rigida per ingegneria spesso necessita di esposizione più lunga e talvolta calore moderato per avvicinarsi alle proprietà della scheda tecnica. Le resine colabili e bruciabili sono sensibili perché una polimerizzazione eccessiva può aumentare la fragilità o i problemi legati alle ceneri. Il risultato è un valore del timer raccomandato, un limite superiore sicuro, una temperatura target opzionale e una distanza pratica della luce.',
  },
  {
    type: 'stats',
    columns: 4,
    items: [
      { value: '385/405 nm', label: 'lunghezze d\'onda comuni di polimerizzazione delle resine da scrivania' },
      { value: '1-22 min', label: 'uscita tipica con limite di sicurezza del calcolatore' },
      { value: '0,4-12 mm', label: 'intervallo del modello di spessore della parete' },
      { value: '6-120 W', label: 'intervallo di potenza della stazione di polimerizzazione' },
    ],
  },
  {
    type: 'diagnostic',
    variant: 'warning',
    title: 'Non polimerizzare mai stampe in resina bagnate',
    html: 'L\'alcol lasciato sul pezzo può intrappolare residui non polimerizzati, sbiancare le superfici, contaminare la camera di polimerizzazione e distorcere la relazione tra dose UV e comportamento finale del materiale. Lava prima, lascia asciugare completamente il pezzo, poi polimerizza.',
  },
  { type: 'title', text: 'Perché lo Spessore della Parete Cambia il Tempo di Polimerizzazione UV', level: 2 },
  {
    type: 'paragraph',
    html: 'Un guscio sottile in miniatura e un supporto funzionale spesso possono usare la stessa resina ma necessitano di un comportamento di post-polimerizzazione diverso. La luce UV viene assorbita e dispersa da pigmenti, cariche, fotoiniziatori e dal polimero stesso. La superficie riceve la dose più forte, mentre il materiale più profondo riceve meno energia. Ecco perché il calcolatore chiede lo <strong>spessore massimo della parete</strong> piuttosto che l\'altezza totale o la massa totale. La sezione otticamente rilevante più spessa è la parte più probabile che rimanga sotto-polimerizzata quando l\'esterno sembra già finito.',
  },
  {
    type: 'paragraph',
    html: 'L\'aumento è proporzionale ma non perfettamente lineare. Raddoppiare lo spessore della parete non richiede sempre esattamente il doppio del valore del timer perché la polimerizzazione continua anche da più facce quando il pezzo viene ruotato e perché molte stampe in resina sono cave. Il modello utilizza un esponente specifico della resina: le resine resistenti scalano più aggressivamente con lo spessore, mentre i profili colabili rimangono sotto un limite di sicurezza più stretto. Per pezzi solidi molto spessi, la soluzione migliore è spesso la cavità, il drenaggio, la rotazione e la polimerizzazione a fasi anziché una singola esposizione lunga.',
  },
  {
    type: 'table',
    headers: ['Condizione geometrica', 'Implicazione di polimerizzazione', 'Azione pratica'],
    rows: [
      ['Guscio cosmetico sottile', 'Bassa domanda di polimerizzazione interna', 'Usa il tempo calcolato senza aggiungere minuti extra.'],
      ['Rialzo o attacco solido spesso', 'Maggiore rischio di nucleo sotto-polimerizzato', 'Inserisci lo spessore massimo locale della parete, non la media del guscio.'],
      ['Pezzo cavo con fori di drenaggio', 'La luce raggiunge l\'esterno; l\'interno può rimanere ombreggiato', 'Polimerizza prima l\'esterno, poi esponi l\'interno se la geometria lo permette.'],
      ['Resina opaca o scura', 'Minore penetrazione e più dispersione', 'Rimani vicino alle istruzioni del produttore e ruota più spesso.'],
    ],
  },
  {
    type: 'tip',
    title: 'Misura la parete strutturale più spessa',
    html: 'Per una stampa in resina cava, usa il guscio più spesso o la nervatura di rinforzo. Per un pezzo solido di ingegneria, usa la sezione solida più spessa che deve raggiungere le proprietà meccaniche finali.',
  },
  { type: 'title', text: 'Potenza della Stazione, Distanza e Dose UV', level: 2 },
  {
    type: 'paragraph',
    html: 'Una stazione di lavaggio e polimerizzazione nominale a 40 W non fornisce 40 W di energia UV utile in ogni centimetro quadrato del pezzo. La potenza nominale include perdite elettriche e ottiche, disposizione dei LED, riflettività della camera, copertura del piatto rotante e distanza dalla sorgente luminosa. Tuttavia, la potenza è uno stimatore utile: una stazione ad alta potenza richiede generalmente un timer più corto di una debole scatola di polimerizzazione tipo lampada per unghie. Il calcolatore applica un fattore di potenza inverso in modo che il timer diminuisca all\'aumentare della potenza della stazione.',
  },
  {
    type: 'paragraph',
    html: 'La distanza è importante perché l\'irradianza diminuisce man mano che il pezzo si allontana dai LED e perché un posizionamento molto vicino può creare punti caldi. Un pezzo posizionato troppo vicino a un banco di LED può polimerizzare aggressivamente una faccia mentre angoli o superfici incassate rimangono morbide. Un pezzo posizionato troppo lontano può richiedere un\'esposizione più lunga, ma aggiungere tempo può sovra-polimerizzare le facce già illuminate. Ecco perché l\'uscita include una distanza raccomandata in centimetri o pollici. È un controllo geometrico, non semplicemente un valore di convenienza.',
  },
  {
    type: 'comparative',
    columns: 3,
    items: [
      {
        title: 'Troppo vicino',
        description: 'L\'alta intensità locale crea dose diseguale e stress superficiale.',
        points: ['Ingiallimento sulle facce esposte', 'Dettagli sottili fragili', 'Cavità ombreggiate rimangono sotto-polimerizzate'],
      },
      {
        title: 'Bilanciato',
        description: 'La distanza moderata permette alla camera e al piatto rotante di distribuire i raggi UV più uniformemente.',
        highlight: true,
        points: ['Risultato meccanico più pulito', 'Meno rischio di punti caldi', 'Migliore ripetibilità'],
      },
      {
        title: 'Troppo lontano',
        description: 'La bassa irradianza incoraggia gli utenti a compensare con tempo eccessivo.',
        points: ['Cicli lunghi', 'Polimerizzazione incoerente', 'Falsa fiducia da superfici asciutte'],
      },
    ],
  },
  {
    type: 'message',
    title: 'Ruota quando la camera non espone tutte le facce',
    html: 'Se un pezzo ha incavi profondi, sottosquadri o lati piatti larghi, dividi l\'esposizione in cicli più brevi e ruota il pezzo. Una dose uniforme è generalmente meglio di una lunga polimerizzazione statica.',
  },
  { type: 'title', text: '385 nm Versus 405 nm nella Polimerizzazione della Resina', level: 2 },
  {
    type: 'paragraph',
    html: 'La maggior parte delle stampanti MSLA consumer e delle stazioni di polimerizzazione utilizza LED a 405 nm perché quella lunghezza d\'onda corrisponde a molti sistemi fotoiniziatori da scrivania ed è efficiente per array LED convenienti. Alcune resine tecniche rispondono anche fortemente a 385 nm, una lunghezza d\'onda più corta più vicina alla gamma UV-A. La differenza non è automaticamente migliore o peggiore. Una resina formulata per 405 nm può richiedere più tempo sotto 385 nm se lo spettro non è abbinato; un\'altra resina può polimerizzare efficientemente a 385 nm. Il calcolatore tratta la lunghezza d\'onda come un moltiplicatore dipendente dalla resina.',
  },
  {
    type: 'paragraph',
    html: 'L\'azione importante dell\'utente è la coerenza. Se un produttore di resina specifica un programma di post-polimerizzazione per una particolare unità di polimerizzazione, lunghezza d\'onda e temperatura, usa quel programma come riferimento. Usa questo calcolatore quando la resina è generica, quando la potenza della stazione differisce dalla macchina di riferimento, o quando la geometria di stampa è più spessa di un semplice coupon di calibrazione. Non mescolare un programma industriale a 385 nm con una stazione da scrivania a 405 nm senza regolare le ipotesi di esposizione.',
  },
  {
    type: 'glossary',
    items: [
      { term: 'Fotoiniziatore', definition: 'Componente della resina che assorbe la luce e avvia le reazioni di polimerizzazione.' },
      { term: 'Dose UV', definition: 'L\'energia luminosa accumulata ricevuta dal pezzo durante la polimerizzazione, influenzata dall\'irradianza e dal tempo.' },
      { term: 'Post-polimerizzazione', definition: 'Trattamento UV e talvolta termico dopo il lavaggio che migliora le proprietà del materiale oltre lo stato stampato.' },
      { term: 'Sovra-polimerizzazione', definition: 'Esposizione eccessiva che può rendere un pezzo di resina fragile, giallo, deformato o meno resistente agli urti.' },
    ],
  },
  {
    type: 'diagnostic',
    variant: 'info',
    title: 'Asciutto al tatto non è la stessa cosa di completamente polimerizzato',
    html: 'Una superficie di resina può smettere di sentirsi appiccicosa prima che la rete interna raggiunga il comportamento meccanico previsto. Usa geometria, tipo di resina e potenza della stazione invece della sensazione superficiale.',
  },
  { type: 'title', text: 'Preimpostazioni di Resina e Rischio Meccanico', level: 2 },
  {
    type: 'paragraph',
    html: 'Le resine standard sono generalmente ottimizzate per facilità di stampa e post-elaborazione rapida. Sono la categoria più indulgente nel calcolatore. Le resine flessibili richiedono una manipolazione più attenta perché la proprietà desiderata è l\'allungamento, non la durezza massima. Troppi UV possono ridurre la flessibilità e trasformare un pezzo morbido in qualcosa che si crepa prima. Le resine rigide e resistenti spesso necessitano di più dose per sviluppare resistenza, ma hanno anche un limite superiore dove la polimerizzazione aggiuntiva non migliora più le prestazioni e invece aumenta la fragilità.',
  },
  {
    type: 'paragraph',
    html: 'Le resine colabili e bruciabili hanno una priorità diversa. Il loro uso finale può comportare fusione a cera persa o combustione pulita, quindi la qualità della superficie, il comportamento delle ceneri e la stabilità dimensionale sono importanti. Un pezzo colabile fortemente sovra-polimerizzato può diventare fragile durante la manipolazione o avere scarse prestazioni nelle fasi di processo successive. Il calcolatore applica un limite più stretto a queste categorie perché il flusso di lavoro più sicuro è la polimerizzazione controllata, non l\'esposizione massima.',
  },
  {
    type: 'table',
    headers: ['Preimpostazione resina', 'Obiettivo principale', 'Sintomo di sovra-polimerizzazione', 'Comportamento del calcolatore'],
    rows: [
      ['Standard', 'Durezza generale e manipolazione sicura', 'Ingiallimento e dettagli sottili fragili', 'Tempo base moderato e limite medio.'],
      ['Flessibile', 'Mantenere l\'allungamento rimuovendo l\'appiccicosità', 'Perdita di flessibilità e strappo', 'Tempo base più lungo con sensibilità di dose cautelativa.'],
      ['Rigida / Resistente', 'Raggiungere rigidità e resistenza ingegneristiche', 'Rottura fragile invece di cedimento resistente', 'Tempo base più alto e polimerizzazione calda opzionale.'],
      ['Colabile', 'Manipolazione pulita prima del processo di colata', 'Modelli fragili e scurimento superficiale', 'Limite di sicurezza più basso per evitare esposizione aggressiva.'],
      ['Bruciabile', 'Polimerizzazione controllata prima della combustione termica', 'Scheggiatura o stress dimensionale', 'Tempo moderato con limite conservativo.'],
    ],
  },
  {
    type: 'proscons',
    title: 'Aggiungere minuti extra dopo il calcolatore',
    items: [
      { pro: 'Può aiutare se una faccia era ombreggiata durante un ciclo breve.', con: 'Può degradare le facce già esposte quando il pezzo non è stato ruotato.' },
      { pro: 'Può ridurre l\'appiccicosità su pezzi molto spessi o scuri.', con: 'Può rendere le resine resistenti e flessibili più fragili.' },
      { pro: 'Utile come secondo ciclo breve dopo ispezione.', con: 'Pericoloso come abitudine di routine senza verificare il limite di sicurezza.' },
    ],
  },
  { type: 'title', text: 'Temperatura Durante la Post-Polimerizzazione della Resina Tecnica', level: 2 },
  {
    type: 'paragraph',
    html: 'Alcune resine ingegneristiche specificano una temperatura elevata di post-polimerizzazione perché il calore aumenta la mobilità molecolare e aiuta la rete polimerica a raggiungere le proprietà previste. La polimerizzazione a caldo può migliorare la temperatura di deflessione termica, il modulo e la resistenza finale per materiali compatibili. Non dovrebbe essere applicata ciecamente a ogni resina. Una miniatura stampata in resina standard potrebbe non aver bisogno di calore, mentre una resina resistente ingegneristica può beneficiare di 40-60 °C a seconda dei dati del produttore. Il calcolatore restituisce quindi temperatura ambiente per le famiglie di resina dove il calore non è assunto, e una temperatura target modesta dove è utile.',
  },
  {
    type: 'paragraph',
    html: 'Il controllo della temperatura è anche una questione di sicurezza. Troppo calore può deformare sezioni sottili, ammorbidire cicatrici di supporti o accelerare l\'ingiallimento. Una stazione di lavaggio e polimerizzazione senza camera riscaldata non deve essere trattata come equivalente a un forno da laboratorio. Se la scheda tecnica della resina specifica un ciclo termico preciso, quella scheda tecnica prevale. Il calcolatore è uno stimatore pratico per flussi di lavoro da scrivania comuni, non un sostituto per la validazione di processi medici, dentistici, aerospaziali o di fusione certificati.',
  },
  {
    type: 'card',
    title: 'Quando l\'uscita dice temperatura ambiente',
    html: 'Temperatura ambiente significa che il calcolatore non richiede una post-polimerizzazione riscaldata per quella preimpostazione di resina. Non significa che il pezzo possa polimerizzare freddo, bagnato o in un\'officina piena di correnti d\'aria. Mantieni il pezzo asciutto e lascia che la resina raggiunga una temperatura interna normale prima dell\'esposizione.',
  },
  {
    type: 'tip',
    title: 'Evita di polimerizzare immediatamente dopo la rimozione dell\'IPA',
    html: 'Dopo il lavaggio, lascia che l\'alcol evapori da fori, cavità e testo in rilievo. Dieci o trenta minuti di asciugatura possono contare più che aggiungere un altro minuto di UV.',
  },
  { type: 'title', text: 'Diagnosi di Pezzi di Resina Sotto-Polimerizzati e Sovra-Polimerizzati', level: 2 },
  {
    type: 'paragraph',
    html: 'I pezzi di resina sotto-polimerizzati di solito mostrano superfici appiccicose, caratteristiche piccole deboli, odore persistente, bordi morbidi o residui che si trasferiscono sui guanti. Questi sintomi sono più comuni quando il pezzo non è stato lavato accuratamente, è stato polimerizzato bagnato, aveva uno spessore di parete elevato o era all\'ombra nella camera. I pezzi sovra-polimerizzati mostrano sintomi diversi: rottura fragile, ingiallimento, superfici gessose, bordi sottili arricciati o perdita di flessibilità. La soluzione dipende dal sintomo. Più UV non è la risposta a ogni problema di stampa in resina.',
  },
  {
    type: 'diagnostic',
    variant: 'error',
    title: 'Fragile e giallo significa smettere di aggiungere esposizione',
    html: 'Se un pezzo è già diventato fragile o visibilmente giallo, la polimerizzazione extra non recupererà la tenacità. Ristampa, riduci il valore del timer, migliora la rotazione e rispetta il limite.',
  },
  {
    type: 'summary',
    title: 'Ordine di risoluzione dei problemi',
    items: [
      'Conferma che il pezzo sia stato lavato e asciugato prima della polimerizzazione.',
      'Verifica se i supporti o l\'orientamento del modello hanno creato ombre UV.',
      'Inserisci la parete più spessa, non la dimensione media del modello.',
      'Usa il limite di sicurezza quando la stima grezza sarebbe troppo lunga.',
      'Ruota i pezzi complessi invece di prolungare un\'esposizione statica.',
    ],
  },
  {
    type: 'table',
    headers: ['Sintomo', 'Causa probabile', 'Correzione'],
    rows: [
      ['Superficie appiccicosa dopo la polimerizzazione', 'Resina residua o IPA, dose insufficiente o faccia ombreggiata', 'Rilava se contaminato, asciuga completamente, poi applica un breve ciclo rotante.'],
      ['I dettagli sottili si rompono facilmente', 'Sovra-polimerizzazione o resina intrinsecamente fragile', 'Riduci il timer ed evita il posizionamento vicino dei LED.'],
      ['Un lato giallo, l\'altro morbido', 'Esposizione disuguale della camera', 'Aumenta la distanza e ruota durante la polimerizzazione.'],
      ['La resina flessibile diventa rigida', 'Dose troppo alta per il comportamento elastomerico', 'Usa meno tempo e fermati al tatto non appiccicoso.'],
    ],
  },
  { type: 'title', text: 'Come Usare Questo Calcolatore di Tempo per Stazione di Lavaggio e Polimerizzazione UV', level: 2 },
  {
    type: 'paragraph',
    html: 'Inizia con la preimpostazione di resina più vicina all\'etichetta del materiale. Se la bottiglia dice resistente, rigida, tipo ABS, ingegneristica o alto impatto, usa la preimpostazione rigida/resistente. Se è elastica, flessibile o tipo gomma, usa flessibile. Per fusione a cera persa o flussi di lavoro senza ceneri, usa colabile o bruciabile. Quindi misura lo spessore massimo della parete. Inserisci la potenza nominale della stazione di polimerizzazione e scegli 385 nm o 405 nm secondo la documentazione della stazione o della resina. Il valore del timer in uscita è il primo ciclo che dovresti eseguire.',
  },
  {
    type: 'paragraph',
    html: 'Prima di premere avvio, usa la lista di controllo. Il pezzo deve essere asciutto, visibile da più angolazioni e libero da strutture di supporto che proiettano ombre. Se il modello è complesso, polimerizza per parte del tempo raccomandato, ruotalo e termina il resto del ciclo. Se il calcolatore avverte che il limite di sicurezza è stato applicato, non sostituirlo con un\'esposizione lunga. Il limite esiste perché quella categoria di resina ha più probabilità di degradarsi che migliorare oltre quel punto.',
  },
  {
    type: 'list',
    items: [
      'Usa le istruzioni del produttore quando una scheda tecnica di resina fornisce un ciclo di post-polimerizzazione validato.',
      'Usa questo calcolatore quando la potenza della stazione, la lunghezza d\'onda o lo spessore del pezzo differiscono dal flusso di lavoro di riferimento.',
      'Non polimerizzare pezzi che odorano fortemente di solvente o hanno liquido intrappolato nei fori di drenaggio.',
      'Non presumere che una luce più forte sia più sicura; può creare sovra-polimerizzazione locale più veloce.',
      'Registra i tempi di successo per resina, colore, spessore della parete e modello di stazione.',
    ],
  },
  {
    type: 'summary',
    title: 'Regola di post polimerizzazione sicura',
    items: [
      'Pulisci prima.',
      'Asciuga completamente.',
      'Polimerizza entro la finestra calcolata.',
      'Ruota per copertura.',
      'Ferma prima che la resina diventi fragile, gialla o deformata.',
    ],
  },
];

export const content: ToolLocaleContent<TechnicalResinUvCuringUI> = {
  slug, title, description,
  ui: {
    controlsAriaLabel: 'Controlli di immissione polimerizzazione UV resina tecnica',
    resultsAriaLabel: 'Parametri raccomandati di post-polimerizzazione resina',
    unitSystemLabel: 'Unità',
    metricLabel: 'Metrico',
    imperialLabel: 'US',
    resinGroupLabel: 'Preimpostazione resina',
    stationGroupLabel: 'Stazione di polimerizzazione',
    preparationLabel: 'Prima della polimerizzazione',
    resinTypeLabel: 'Tipo di resina',
    standardLabel: 'Standard',
    flexibleLabel: 'Flessibile',
    toughLabel: 'Rigida / Resistente',
    castableLabel: 'Colabile',
    burnoutLabel: 'Bruciabile',
    wallThicknessLabel: 'Spessore massimo della parete',
    wallThicknessHelp: 'Usa la parete o il guscio solido più spesso che la luce UV deve attraversare per polimerizzare.',
    stationPowerLabel: 'Potenza stazione',
    stationPowerHelp: 'Potenza elettrica nominale della stazione di polimerizzazione o del gruppo di lampade UV.',
    wavelengthLabel: 'Lunghezza d\'onda',
    wavelength385Label: '385 nm',
    wavelength405Label: '405 nm',
    cleanDryReminder: 'Il pezzo deve essere pulito e perfettamente asciutto prima dell\'esposizione UV. Non polimerizzare pezzi che portano ancora alcol.',
    dryCheckLabel: 'Il pezzo è completamente asciutto e libero da residui di alcol?',
    exposureCheckLabel: 'Il pezzo è posizionato in modo che la luce raggiunga ogni faccia?',
    supportsCheckLabel: 'Il pezzo è libero da supporti che potrebbero proiettare ombre?',
    degradationWarning: 'Il tempo di polimerizzazione eccessivo rende il pezzo fragile e giallo. Rispetta i limiti tecnici.',
    recommendedTimeLabel: 'Impostazione timer',
    temperatureLabel: 'Temperatura di polimerizzazione',
    noTemperatureLabel: 'Ambiente',
    ambientTemperatureNoteMetric: 'Polimerizza a temperatura ambiente (18-25 °C). Non è richiesta camera riscaldata per questa preimpostazione.',
    ambientTemperatureNoteImperial: 'Polimerizza a temperatura ambiente (64-77 °F). Non è richiesta camera riscaldata per questa preimpostazione.',
    distanceLabel: 'Distanza della luce',
    maxSafeLabel: 'Limite di sicurezza',
    doseIndexLabel: 'Indice di dose UV',
    safetySafeLabel: 'Entro la finestra sicura',
    safetyCautionLabel: 'Vicino al limite superiore',
    safetyLimitLabel: 'Limite di sicurezza applicato',
    limitMessage: 'L\'esposizione richiesta supererebbe il limite di sicurezza della resina. Usa il valore del timer limitato e ruota il pezzo tra i cicli se ci sono facce ombreggiate.',
    cautionMessage: 'La raccomandazione è tecnicamente utilizzabile ma vicina alla regione di degradazione. Mantieni il pezzo asciutto, ruotalo ed evita di aggiungere minuti extra per abitudine.',
    safeMessage: 'La raccomandazione rientra nella finestra normale di post-polimerizzazione per questo profilo di resina e potenza di stazione.',
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
