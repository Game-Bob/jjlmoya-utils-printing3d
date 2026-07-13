import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HotendFlowRateLimitCalculatorUI } from '../ui';

const slug = 'calcolatore-portata-volumetrica';
const title = 'Calcolatore di Portata Volumetrica: Limiti Precise dell\'Hotend';
const description =
  'Calcola la portata volumetrica della stampa 3D in mm3/s, confrontala con la capacità di fusione dell\'hotend e identifica quando velocità, larghezza di linea e altezza strato causeranno sottoestrusione.';

const faqData = [
  {
    question: 'Cos\'è la portata volumetrica nella stampa 3D?',
    answer:
      'La portata volumetrica è il volume di plastica richiesto all\'hotend ogni secondo. Si calcola come larghezza di linea moltiplicata per altezza strato moltiplicata per velocità di stampa, ottenendo un risultato in mm3/s.',
  },
  {
    question: 'Cosa succede se la portata volumetrica supera il limite dell\'hotend?',
    answer:
      'L\'hotend non può fondere completamente la plastica alla velocità richiesta. La pressione aumenta, l\'estrusione diventa inconsistente e la stampa può mostrare sottoestrusione, pareti deboli, superfici ruvide opache o passi saltati dell\'estrusore.',
  },
  {
    question: 'Un V6 è davvero limitato a 15 mm3/s?',
    answer:
      '15 mm3/s è una costante di pianificazione pratica per un hotend standard a zona di fusione ben tarato. I valori reali dipendono dal filamento, dalla temperatura, dall\'ugello, dalla potenza del riscaldatore, dalla presa dell\'estrusore e da quanto è accettabile la perdita di qualità visiva.',
  },
  {
    question: 'Perché l\'aumento dell\'altezza strato riduce la velocità sicura?',
    answer:
      'L\'altezza strato è un moltiplicatore diretto nell\'equazione di flusso. Se larghezza di linea e capacità dell\'hotend rimangono invariate, raddoppiare l\'altezza strato riduce circa della metà la velocità massima prima che l\'hotend raggiunga il suo limite di fusione.',
  },
];

const howToData = [
  { name: 'Scegli un\'architettura di hotend', text: 'Seleziona un preset standard V6, Volcano, Bambu high-flow o ultra-high-flow per impostare la costante di capacità di fusione.' },
  { name: 'Imposta la geometria di linea', text: 'Regola larghezza di linea e altezza strato per corrispondere al profilo del slicer che intendi utilizzare.' },
  { name: 'Regola la velocità di stampa', text: 'Usa il cursore di velocità fine per osservare l\'indicatore di stress avvicinarsi alle zone di flusso del 70%, 90% e critico.' },
  { name: 'Leggi la velocità sicura e la riserva', text: 'Confronta gli mm3/s attuali con la velocità massima sicura e la riserva di tasso di fusione rimanente.' },
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
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'it',
};

export const content: ToolLocaleContent<HotendFlowRateLimitCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Input del limite di portata volumetrica',
    resultsAriaLabel: 'Risultati del limite di portata volumetrica',
    unitSystemLabel: 'Unità',
    metricLabel: 'Metrico',
    imperialLabel: 'US',
    hotendLabel: 'Architettura dell\'hotend',
    lineWidthLabel: 'Larghezza di linea',
    layerHeightLabel: 'Altezza strato',
    speedLabel: 'Velocità di stampa',
    flowLabel: 'Portata volumetrica',
    loadLabel: 'Carico termico',
    maxSpeedLabel: 'Velocità max sicura',
    reserveLabel: 'Riserva di fusione',
    stateLabel: 'Stato del sistema',
    idealState: 'FLUSSO IDEALE',
    limitState: 'LIMITE DI VISCOSITÀ',
    criticalState: 'FLUSSO CRITICO',
    idealHint: 'L\'hotend ha margine termico sufficiente per una pressione di fusione stabile e un\'estrusione consistente.',
    limitHint: 'Il profilo è vicino al limite di viscosità. Piccoli cambiamenti di materiale o temperatura possono rivelare sottoestrusione.',
    criticalHint: 'Il flusso richiesto supera la finestra di fusione affidabile. Riduci velocità, larghezza di linea o altezza strato.',
    millimeterUnit: 'mm',
    inchUnit: 'in',
    metricSpeedUnit: 'mm/s',
    imperialSpeedUnit: 'in/s',
    flowUnit: 'mm3/s',
  },
  seo: [
    { type: 'title', text: 'Come Funziona il Calcolatore di Portata Volumetrica Massima', level: 2 },
    {
      type: 'paragraph',
      html: 'Un <strong>calcolatore di portata volumetrica massima</strong> risponde a una domanda più utile di un semplice calcolatore di velocità: l\'hotend può fondere la quantità di plastica richiesta dal slicer? I sistemi di movimento possono pubblicizzare alte velocità di spostamento, ma l\'estrusione è limitata dal trasferimento termico, dalla lunghezza della zona di fusione, dalla pressione dell\'ugello, dalla viscosità del filamento, dalla stabilità del riscaldatore e dalla presa dell\'estrusore. Il calcolatore modella il tasso di fusione richiesto come <code>Vf = larghezza di linea x altezza strato x velocità</code>, con il risultato mostrato in <code>mm3/s</code>.',
    },
    {
      type: 'paragraph',
      html: 'Lo strumento confronta quel flusso istantaneo con la capacità dell\'hotend selezionato. Gli hotend standard tipo V6 sono rappresentati con una costante di tasso di fusione più bassa, le architetture a zona di fusione più lunga come Volcano usano una costante più alta e gli hotend moderni high-flow usano valori maggiori. Lo scopo non è promettere un limite universale da laboratorio, ma fornire un rapido controllo tecnico prima che un profilo del slicer richieda più plastica di quanta l\'hardware possa liquefare in modo affidabile.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'mm3/s', label: 'Unità usata per la capacità di fusione dell\'hotend', icon: 'mdi:cube-scan' },
        { value: '70%', label: 'Limite della zona di comfort per profili di produzione stabili', icon: 'mdi:gauge-low' },
        { value: '90%', label: 'Limite di viscosità dove i guasti diventano sensibili', icon: 'mdi:gauge' },
        { value: '100%+', label: 'Flusso critico dove domina il rischio di sottoestrusione', icon: 'mdi:alert-outline' },
      ],
    },
    {
      type: 'tip',
      title: 'Usa la larghezza di linea del slicer, non il diametro dell\'ugello',
      html: '<p>L\'equazione di flusso usa la larghezza di linea di estrusione dal slicer. Un ugello da 0,4 mm stampa spesso una linea da 0,42-0,48 mm. Se il calcolatore usa il diametro dell\'ugello invece della larghezza di linea, può sottostimare la domanda di flusso e nascondere un profilo che è già vicino al limite dell\'hotend.</p>',
    },
    { type: 'title', text: 'Perché Velocità e Tasso di Fusione Non Sono lo Stesso Limite', level: 2 },
    {
      type: 'paragraph',
      html: 'Una stampante può muoversi a 300 mm/s e fallire comunque a 90 mm/s se il volume di estrusione è troppo alto. La velocità diventa significativa solo dopo aver incluso larghezza di linea e altezza strato. Stampare una linea da 0,45 mm con strati da 0,20 mm a 150 mm/s richiede 13,5 mm3/s. Stampare una linea da 0,60 mm con strati da 0,30 mm alla stessa velocità richiede 27 mm3/s. La velocità di movimento è identica, ma il secondo profilo chiede all\'hotend di fondere il doppio di plastica al secondo.',
    },
    {
      type: 'table',
      headers: ['Larghezza di linea', 'Altezza strato', 'Velocità', 'Flusso richiesto'],
      rows: [
        ['0,42 mm', '0,16 mm', '120 mm/s', '8,06 mm3/s'],
        ['0,45 mm', '0,20 mm', '150 mm/s', '13,50 mm3/s'],
        ['0,50 mm', '0,25 mm', '180 mm/s', '22,50 mm3/s'],
        ['0,60 mm', '0,30 mm', '150 mm/s', '27,00 mm3/s'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'La sottoestrusione sembra spesso un problema di taratura',
      badge: 'Tetto di flusso',
      html: '<p>Quando un profilo supera la capacità di fusione, gli utenti spesso inseguono retrazione, pressure advance, temperatura o passi dell\'estrusore. Quelle impostazioni contano, ma non possono far sì che una zona di fusione corta processi plastica illimitata. Prima verifica che gli mm3/s richiesti siano all\'interno della finestra di capacità dell\'hotend.</p>',
    },
    {
      type: 'summary',
      title: 'Regole dell\'equazione di flusso',
      items: [
        'Larghezza di linea, altezza strato e velocità si moltiplicano direttamente.',
        'Un piccolo aumento in due impostazioni geometriche può saturare un hotend anche quando la velocità sembra modesta.',
        'La velocità massima sicura è il limite dell\'hotend diviso per larghezza di linea e altezza strato.',
      ],
    },
    { type: 'title', text: 'Riferimenti di Prestazione Termica per Architettura di Hotend', level: 2 },
    {
      type: 'paragraph',
      html: 'L\'architettura dell\'hotend controlla per quanto tempo il filamento rimane nella zona riscaldata e con quale efficienza il calore si trasferisce al nucleo del filamento. Una zona di fusione compatta tipo V6 è reattiva e leggera, ma il suo tetto di flusso pratico è inferiore a quello di una zona di fusione lunga tipo Volcano. I design ceramici high-flow e ultra-high-flow aumentano il contatto del riscaldatore, la lunghezza del percorso di fusione o la superficie interna per sostenere tassi di estrusione più elevati.',
    },
    {
      type: 'table',
      headers: ['Architettura di hotend', 'Capacità di pianificazione', 'Miglior caso d\'uso', 'Precauzione tecnica'],
      rows: [
        ['V6 / MK8', '15 mm3/s', 'Profili di qualità, velocità moderata PLA/PETG, stampanti da scrivania standard', 'Può raggiungere rapidamente i limiti di pressione con linee larghe o strati alti.'],
        ['Revo High Flow', '18 mm3/s', 'Aggiornamento high-flow compatto e sostitutivo', 'Necessita ancora di validazione di temperatura e materiale.'],
        ['Volcano', '25 mm3/s', 'Ugelli grandi, strati spessi, parti funzionali, profili rapidi di bozza', 'Le zone di fusione lunghe possono gocciolare di più e necessitano di regolazione della retrazione.'],
        ['Bambu HF', '32 mm3/s', 'Profili per stampante chiusa ad alta velocità e produzione rapida di PLA', 'I valori del profilo dipendono fortemente dal raffreddamento e dal comportamento del filamento.'],
        ['Rapido UHF / simile', '45 mm3/s', 'Flusso estremo, grandi larghezze di estrusione, produttività', 'La coppia dell\'estrusore, la potenza del riscaldatore e la geometria dell\'ugello diventano fattori limitanti.'],
      ],
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: 'Zona di fusione corta', description: 'Compatta, reattiva, testina più leggera, minore accumulo termico.', icon: 'mdi:thermometer-low', points: ['Buon controllo dei dettagli', 'Tetto di flusso più basso', 'Meno inerzia termica'] },
        { title: 'Zona di fusione lunga', description: 'Più tempo di contatto per far assorbire calore al filamento prima di raggiungere l\'ugello.', icon: 'mdi:thermometer-lines', highlight: true, points: ['Mm3/s più elevato', 'Migliore resa su strati spessi', 'Più gestione del gocciolamento'] },
        { title: 'Nucleo high flow', description: 'La geometria moderna aumenta l\'area di contatto o l\'accoppiamento del riscaldatore senza semplicemente estendere la lunghezza.', icon: 'mdi:heat-wave', points: ['Risposta rapida', 'Alta produttività', 'Necessita profili tarati'] },
      ],
    },
    {
      type: 'message',
      title: 'I valori di riferimento sono costanti di pianificazione',
      ariaLabel: 'Nota di riferimento dell\'hotend',
      html: '<p>I limiti preimpostati sono costanti di pianificazione deliberatamente conservative. La capacità di fusione reale varia con la formulazione del filamento, il diametro dell\'ugello, la cartuccia del riscaldatore, il posizionamento del termistore, la temperatura di estrusione e la quantità di perdita di qualità che il pezzo può tollerare.</p>',
    },
    { type: 'title', text: 'Lettura delle Zone dell\'Indicatore di Stress', level: 2 },
    {
      type: 'paragraph',
      html: 'L\'indicatore di stress traduce i calcoli di flusso in uno stato visivo di funzionamento. Al di sotto del 70% di carico, l\'hotend ha margine per la variazione normale del filamento, l\'oscillazione minore di temperatura e i cambiamenti di velocità lungo il percorso. Tra il 70% e il 90%, l\'estrusione può rimanere riuscita, ma il profilo diventa sensibile. Al di sopra del 90%, la stampa è abbastanza vicina al tetto di fusione che la variazione del lotto di materiale, l\'umidità o un ugello leggermente più freddo possono spingerla in una sottoestrusione visibile.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        '0-70%: buon margine di produzione per pezzi ripetibili e variazione normale del materiale.',
        '70-90%: utile per test di velocità, ma valida pareti, superfici superiori e unione del riempimento.',
        '90%+: trattare come zona critica a meno che filamento e hotend non siano stati misurati con una torre di flusso.',
        'Oltre il 100%: riduci velocità, larghezza di linea o altezza strato prima di inseguire impostazioni non correlate del slicer.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:gauge-full',
      title: 'Perché l\'indicatore può essere meglio di un avviso',
      html: '<p>Un avviso dice all\'utente cosa è andato storto dopo aver superato una soglia. Un indicatore di stress mostra l\'avvicinamento a quella soglia. Questo rende più facile fermarsi a un margine operativo pianificato invece di reagire solo quando il profilo è già diventato instabile.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Il flusso critico non è solo un problema di qualità superficiale',
      badge: 'Resistenza meccanica',
      html: '<p>Il filamento non completamente fuso può aderire male tra percorsi e strati. Anche quando la parete esterna sembra accettabile, l\'unione del riempimento, l\'adesione dei perimetri e la resistenza all\'impatto possono risentirne se la portata supera la capacità di fusione.</p>',
    },
    { type: 'title', text: 'Come Usare il Calcolatore con un Profilo del Slicer', level: 2 },
    {
      type: 'paragraph',
      html: 'Inizia con i valori reali del slicer per larghezza di linea, altezza strato e velocità della parete esterna o velocità generale di stampa. Seleziona l\'architettura di hotend più vicina. Muovi il cursore della velocità fino a quando l\'indicatore raggiunge il carico preferito. La velocità massima sicura visualizzata è la velocità che raggiungerebbe esattamente il limite dell\'hotend per la geometria di linea corrente. Per lavoro di produzione, usa un valore inferiore al massimo matematico.',
    },
    {
      type: 'paragraph',
      html: 'Se l\'indicatore entra nella zona critica, ci sono tre modi diretti per ridurre il flusso: abbassare la velocità, ridurre la larghezza di linea o ridurre l\'altezza strato. La temperatura può aumentare il flusso pratico per alcuni materiali, ma cambia anche lucentezza, ponti, comportamento in sporgenza, stringing e precisione dimensionale. Il calcolatore si concentra intenzionalmente sulla geometria e sulla capacità hardware perché sono le leve più trasparenti.',
    },
    {
      type: 'proscons',
      title: 'Modi per ridurre la domanda di flusso',
      items: [
        { pro: 'Ridurre la velocità preserva la geometria di linea e l\'intento dimensionale.', con: 'Aumenta il tempo di stampa e può ridurre la produttività della farm.' },
        { pro: 'Ridurre l\'altezza strato migliora la finitura superficiale e riduce mm3/s.', con: 'Aumenta il numero di strati e può allungare il lavoro nonostante il flusso inferiore.' },
        { pro: 'Ridurre la larghezza di linea può diminuire la pressione e migliorare i dettagli fini.', con: 'Può indebolire le pareti rade e aumentare il numero di percorsi utensile.' },
      ],
    },
    {
      type: 'tip',
      title: 'Convalida con una torre di flusso',
      html: '<p>Usa il calcolatore per scegliere un intervallo di velocità realistico, poi stampa una torre di test di portata per il filamento e la temperatura specifici. Il miglior limite di produzione è la portata più alta che dà ancora pareti stabili, lucentezza uniforme, buona adesione degli strati e nessun salto dell\'estrusore.</p>',
    },
    { type: 'title', text: 'Sintomi di Superamento della Capacità di Fusione dell\'Hotend', level: 2 },
    {
      type: 'paragraph',
      html: 'Un profilo oltre il limite di fusione dell\'hotend può fallire gradualmente. Prima, le superfici superiori possono mostrare tracce sottili o piccoli spazi vuoti. Poi le linee di riempimento diventano irregolari, i perimetri perdono lucentezza e gli angoli mostrano un debole recupero di pressione. Nei casi più gravi l\'estrusore scatta, macina il filamento, salta passi o lascia sezioni fragili perché il filamento che entra nell\'ugello non è completamente ammorbidito.',
    },
    {
      type: 'table',
      headers: ['Sintomo osservato', 'Causa probabile legata al flusso', 'Risposta del calcolatore'],
      rows: [
        ['Pareti sottili ad alta velocità', 'Gli mm3/s richiesti superano la capacità di fusione in movimenti rettilinei lunghi', 'Riduci la velocità finché il carico non torna sotto il 90%.'],
        ['Estrusione ruvida opaca', 'Il filamento non è completamente riscaldato al centro', 'Riduci il flusso o aumenta con cautela la temperatura per quel materiale.'],
        ['Scatto dell\'estrusore', 'La contropressione supera la presa dell\'estrusore o la coppia del motore', 'Riduci il flusso immediatamente e controlla la tensione del trascinatore del filamento.'],
        ['Unione debole del riempimento', 'Il materiale esce troppo freddo o fuso in modo irregolare', 'Usa più margine termico per le parti strutturali.'],
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Portata volumetrica', definition: 'Il volume di plastica richiesto all\'hotend al secondo, espresso in mm3/s.' },
        { term: 'Capacità di tasso di fusione', definition: 'La quantità pratica di filamento che un hotend può fondere costantemente mantenendo la qualità di stampa.' },
        { term: 'Larghezza di linea', definition: 'La larghezza di un cordone estruso nel slicer, di solito leggermente maggiore del diametro dell\'ugello.' },
        { term: 'Altezza strato', definition: 'Lo spessore verticale di ogni strato stampato; un moltiplicatore diretto nella domanda di flusso.' },
        { term: 'Riserva di flusso', definition: 'La differenza tra la capacità dell\'hotend e il flusso attualmente richiesto.' },
      ],
    },
    {
      type: 'summary',
      title: 'Flusso di lavoro pratico della portata',
      items: [
        'Calcola il flusso richiesto prima di aumentare la velocità.',
        'Mantieni i profili di produzione al di sotto della zona critica a meno che non siano convalidati da test.',
        'Usa i preset di hotend come costanti di pianificazione, poi perfeziona con calibrazione specifica del materiale.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
