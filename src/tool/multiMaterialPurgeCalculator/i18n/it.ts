import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MultiMaterialPurgeCalculatorUI } from '../ui';

const slug = 'calcolatore-di-purga-multimateriale';
const title = 'Calcolatore di Purga Multimateriale: Analizza e Ottimizza lo Spreco di Filamento';
const description = 'Stima il volume della torre di purga AMS e MMU, la massa di filamento sprecata e il costo di transizione con una matrice di intensità pigmentaria per i cambi di colore.';

const faqData = [
  {
    question: 'Perché al nero su bianco viene assegnato un fattore di purga più alto rispetto al bianco su nero?',
    answer: 'I pigmenti scuri contaminano i polimeri chiari in modo più visibile di quanto i pigmenti chiari contaminino i polimeri scuri. Il calcolatore quindi modella il nero su bianco come una transizione a fattore alto e il bianco su nero come una transizione a fattore più basso.',
  },
  {
    question: 'Questo calcolatore sostituisce i volumi di lavaggio dello slicer?',
    answer: 'No. È un pianificatore diagnostico che stima l\'economia della purga prima di slicer o budget. Usa il risultato della calibrazione dello slicer per la regolazione finale specifica della macchina.',
  },
  {
    question: 'Quale rapporto di purga dovrei considerare troppo alto?',
    answer: 'Lo strumento segnala un rapporto di spreco elevato sopra il 30 percento del volume totale estruso. Questa soglia di solito significa che l\'ordine dei colori, il raggruppamento, la purga verso riempimento o la suddivisione del modello dovrebbero essere rivisti.',
  },
  {
    question: 'Posso usarlo per cambi di materiale, non solo per cambi di colore?',
    answer: 'L\'attuale matrice si concentra sulla contaminazione da pigmenti. Polimeri misti, supporti solubili, materiali abrasivi e cambi di temperatura potrebbero richiedere una purga aggiuntiva oltre al fattore colore.',
  },
];

const howToData = [
  {
    name: 'Inserisci il volume dell\'oggetto e la purga di base',
    text: 'Digita il volume reale del modello e il volume di purga standard che il tuo profilo AMS o MMU usa per un normale cambio di filamento.',
  },
  {
    name: 'Scegli i colori di origine e destinazione',
    text: 'Usa i selettori di colore circolari per ogni transizione. Il fattore di transizione viene aggiornato immediatamente dalla matrice dei pigmenti.',
  },
  {
    name: 'Imposta il numero di transizioni',
    text: 'Inserisci quante volte ogni coppia di colori si verifica nel lavoro. Gli scambi ripetuti da scuro a chiaro domineranno la stima totale della purga.',
  },
  {
    name: 'Leggi rapporto, massa e costo',
    text: 'Usa la barra oggetto contro purga, la massa di scarto e il risultato del costo per decidere se la stampa dovrebbe essere riorganizzata prima della produzione.',
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

export const content: ToolLocaleContent<MultiMaterialPurgeCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    unitSystemLabel: 'Unità',
    metricLabel: 'Metrico',
    imperialLabel: 'Imperiale',
    currencyLabel: 'Valuta',
    currencyOptions: [
      { code: 'EUR', label: 'EUR' },
      { code: 'USD', label: 'USD' },
      { code: 'GBP', label: 'GBP' },
      { code: 'JPY', label: 'JPY' },
      { code: 'CAD', label: 'CAD' },
      { code: 'AUD', label: 'AUD' },
      { code: 'CHF', label: 'CHF' },
      { code: 'MXN', label: 'MXN' },
      { code: 'BRL', label: 'BRL' },
      { code: 'CNY', label: 'CNY' },
      { code: 'IDR', label: 'IDR' },
      { code: 'KRW', label: 'KRW' },
      { code: 'PLN', label: 'PLN' },
      { code: 'RUB', label: 'RUB' },
      { code: 'SEK', label: 'SEK' },
      { code: 'TRY', label: 'TRY' },
    ],
    modelInputsTitle: 'Modello di costo',
    objectVolumeLabel: 'Volume oggetto',
    basePurgeLabel: 'Purga base per cambio',
    densityLabel: 'Densità g/cm3',
    priceLabel: 'Prezzo per kg',
    transitionsTitle: 'Matrice di transizione pigmentaria',
    fromLabel: 'Da',
    toLabel: 'A',
    colorLabels: {
      white: 'Bianco',
      natural: 'Naturale',
      yellow: 'Giallo',
      red: 'Rosso',
      blue: 'Blu',
      green: 'Verde',
      gray: 'Grigio',
      black: 'Nero',
    },
    countLabel: 'Cambi',
    objectLabel: 'Plastica reale dell\'oggetto',
    purgeTowerLabel: 'Scarto torre di purga',
    totalWasteLabel: 'Volume di purga',
    wasteCostLabel: 'Costo dello scarto',
    purgeRatioLabel: 'Rapporto di purga',
    massLabel: 'Massa di scarto',
    loadbarAriaLabel: 'Volume oggetto confrontato con il volume della torre di purga',
    alertTitle: 'Alto rapporto di scarto rilevato',
    alertText: 'Alto rapporto di scarto rilevato: si consiglia di raggruppare colori simili.',
    efficientText: 'Rapporto di purga entro il limite di pianificazione.',
    factorGuideTitle: 'Guida ai fattori di purga per transizione',
    transitionLabel: 'Transizione',
    factorLabel: 'Fattore',
    volumeLabel: 'Volume di purga',
    cm3Unit: 'cm3',
    in3Unit: 'in3',
    gUnit: 'g',
    ozUnit: 'oz',
  },
  seo: [
    {
      type: 'title',
      text: 'Come lo scarto di purga di AMS e MMU diventa un costo di produzione reale',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Una stampa multimateriale non consuma filamento solo nell\'oggetto visibile. Ogni cambio di colore o materiale lascia polimero fuso nella hotend, nella zona di fusione, nell\'ugello e talvolta all\'inizio del successivo percorso di estrusione. La stampante deve spingere abbastanza nuovo filamento attraverso quel percorso prima che la successiva superficie visibile sia pulita. Nei flussi di lavoro AMS, MMU, change di testa e palette, quell\'estrusione di pulizia diventa spesso una torre di purga, un blocco di purga, una linea di purga o un deposito di scarto. Il punto economico importante è semplice: la torre può essere prezzata come qualsiasi altra parte perché ha volume, massa e costo del materiale.',
    },
    {
      type: 'paragraph',
      html: 'I calcolatori generici spesso moltiplicano il numero di scambi per un volume di lavaggio fisso. Questo è utile per un budget approssimativo, ma ignora la modalità di guasto più costosa nella stampa a colori: <strong>la contaminazione asimmetrica</strong>. Il bianco su nero non richiede la stessa pulizia del nero su bianco. Una piccola quantità di pigmento nero trasportata in PLA, PETG o ABS bianco è visibile rapidamente, mentre una piccola quantità di bianco trasportata in nero è solitamente nascosta dal carico di pigmento più scuro. Questo strumento usa una matrice di transizione in modo che ogni direzione abbia il proprio moltiplicatore.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '30%', label: 'Soglia di allerta rapporto di purga alto usata dal cruscotto' },
        { value: '1,6x', label: 'Moltiplicatore di transizione predefinito nero su bianco' },
        { value: '0,8x', label: 'Moltiplicatore di transizione predefinito bianco su nero' },
        { value: '0 pulsanti', label: 'Tutti i calcoli si aggiornano istantaneamente durante la modifica' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Il sintomo costoso da tenere d\'occhio',
      badge: 'Audit scarti',
      html: 'Quando la torre di purga supera il 30 percento del volume combinato di oggetto e purga, il lavoro non è più solo una stampa colorata. È un processo di conversione del materiale in cui una grande frazione del filamento acquistato diventa produzione non-prodotto. Questo è il punto in cui l\'ordine dei colori, la suddivisione del modello, la purga verso riempimento e il raggruppamento meritano attenzione prima che la macchina inizi.',
    },
    {
      type: 'title',
      text: 'La matrice di transizione alla base del calcolatore',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Il modello centrale è <code>Vtotal = somma(Vbase x Ka,b)</code>. <code>Vbase</code> è il volume di purga di base per un cambio di filamento standard. <code>Ka,b</code> è il fattore per passare dal colore <code>a</code> al colore <code>b</code>. Un fattore inferiore a 1 significa che la transizione è solitamente più facile della linea di base. Un fattore superiore a 1 significa che il colore successivo è sensibile alla contaminazione o che il colore precedente ha un forte trascinamento di pigmento. Il risultato è un volume di purga in centimetri cubi, che viene poi convertito in massa usando la densità del filamento.',
    },
    {
      type: 'paragraph',
      html: 'La formula del costo è <code>Cwaste = ((Vtotal x densità) / 1000) x priceKg</code>. Se la torre di purga usa 80 cm3 di PLA a 1,24 g/cm3, consuma 99,2 g di filamento. A 24 al chilogrammo, quella torre costa 2,38 in materiale prima di considerare elettricità, tempo macchina, transizioni di colore fallite o post-elaborazione. Per una stampa hobbistica può essere accettabile. Per la produzione ripetuta, è una voce di costo.',
    },
    {
      type: 'table',
      headers: ['Transizione', 'Fattore predefinito', 'Perché è ponderata in questo modo'],
      rows: [
        ['Bianco su nero', '0,80x', 'Il nero nasconde piccoli residui chiari, quindi la tolleranza alla contaminazione visibile è più alta.'],
        ['Nero su bianco', '1,60x', 'Il residuo scuro nel bianco è immediatamente visibile e di solito richiede un lavaggio più lungo.'],
        ['Naturale su bianco', '1,15x', 'Il materiale traslucido o naturale può tingere il bianco opaco finché il percorso di fusione non è più pulito.'],
        ['Giallo su bianco', '1,35x', 'I pigmenti gialli possono scaldare o macchiare le superfici chiare sebbene siano meno severi del nero.'],
        ['Rosso su giallo', '1,08x', 'Il trascinamento rosso modifica fortemente la tonalità nel giallo e nei colori adiacenti all\'arancione.'],
        ['Grigio su nero', '0,72x', 'Il residuo grigio è solitamente nascosto dal pigmento nero, quindi la purga può essere inferiore.'],
      ],
    },
    {
      type: 'tip',
      title: 'Usa la calibrazione del tuo slicer come volume di base',
      html: 'Esegui prima la calibrazione di lavaggio del fornitore o della comunità per la tua stampante, quindi inserisci quel risultato come volume di purga di base. La matrice deve scalare una linea di base nota, non sostituire la regolazione specifica della macchina per diametro ugello, volume hotend, lunghezza del percorso del filamento e comportamento dello slicer.',
    },
    {
      type: 'title',
      text: 'Perché l\'opacità del polimero modifica il volume di purga richiesto',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'L\'opacità controlla quanto la contaminazione del colore precedente sia visibile nel materiale successivo. Il bianco opaco è impegnativo perché riflette fortemente la luce e mostra particelle scure o striature vicino alla superficie. I filamenti naturali e traslucidi si comportano diversamente: possono nascondere meno massa ma mostrare una tinta attraverso la profondità, specialmente in pareti sottili o parti retroilluminate. I colori saturi come rosso e blu possono anche macchiare i colori chiari successivi perché la concentrazione di pigmento necessaria per una croma forte rimane visibile a bassi livelli di residuo.',
    },
    {
      type: 'paragraph',
      html: 'La stampante non conosce la scienza del colore. Estrude solo una lunghezza o un volume. L\'utente deve decidere se il risultato visibile necessita di purezza estetica, separazione funzionale o solo un cambio di colore approssimativo. Un giocattolo, un logo, una faccia di insegna, una cornice per litofania o un involucro rivolto al cliente possono richiedere una purga aggressiva. Un supporto interno nascosto, un prototipo bozza o il retro di una maschera possono tollerare più trascinamento. Il calcolatore espone questo compromesso facendo crescere la torre di purga quando la direzione di transizione è più difficile.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Destinazione chiara',
          description: 'Bianco, naturale, giallo e grigio chiaro sono destinazioni sensibili. I colori precedenti scuri o saturi necessitano di una purga più lunga prima che questi colori appaiano puliti.',
          points: ['Usa fattori più alti', 'Raggruppa le sezioni chiare insieme', 'Evita di tornare dal nero al bianco ripetutamente'],
        },
        {
          title: 'Destinazione scura',
          description: 'Nero, blu marino, verde scuro e grigio scuro possono nascondere i residui dei colori più chiari. Queste transizioni possono spesso usare moltiplicatori più piccoli.',
          points: ['Rischio visivo inferiore', 'Buona destinazione dopo colori chiari', 'Colore finale utile in una sequenza'],
        },
        {
          title: 'Transizione di tonalità simile',
          description: 'Passare tra colori correlati di solito costa meno che passare dallo scuro al chiaro. Rosso su arancione o grigio su nero è normalmente più facile di blu su giallo.',
          points: ['L\'ordine dei colori è importante', 'Le famiglie di tonalità riducono gli scarti', 'Elabora oggetti simili insieme'],
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Volume di purga di base', definition: 'Il volume normale che il tuo slicer o profilo di calibrazione estrude per un cambio di filamento ordinario prima del ridimensionamento della matrice.' },
        { term: 'Fattore di transizione', definition: 'Un moltiplicatore assegnato a una direzione di un cambio di colore, come nero su bianco o bianco su nero.' },
        { term: 'Rapporto di purga', definition: 'Volume di purga diviso per il volume totale estruso, includendo sia l\'oggetto che la torre di purga.' },
        { term: 'Trascinamento di pigmento', definition: 'Residuo visibile del colore del filamento precedente che rimane nella hotend e appare nell\'estrusione successiva.' },
        { term: 'Purga verso riempimento', definition: 'Una strategia dello slicer che reindirizza parte dell\'estrusione di pulizia nel riempimento nascosto invece di una torre o uno scarico.' },
      ],
    },
    {
      type: 'title',
      text: 'Come ridurre lo spreco di filamento AMS senza rovinare la qualità del colore',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La prima ottimizzazione è l\'ordine dei colori. Se un modello può essere suddiviso, stampato in gruppi o disposto in modo che le transizioni da scuro a chiaro avvengano meno volte, la torre di purga può ridursi drasticamente. I cambi ripetuti da nero a bianco sono costosi perché ogni ciclo richiede alla stampante di rimuovere un pigmento forte prima di una destinazione sensibile. Se lo stesso design visivo può essere stampato come bianco su nero una volta, o come parti separate assemblate in seguito, il budget del materiale cambia immediatamente.',
    },
    {
      type: 'paragraph',
      html: 'La seconda ottimizzazione è la scelta della destinazione. Quando più colori sono opzionali, scegli un colore finale scuro per i dettagli che appaiono dopo le regioni chiare. Ad esempio, il testo nero su una targa bianca è solitamente più economico del testo bianco su una targa nera perché quest\'ultimo costringe la stampante a pulire il residuo scuro prima di ogni segmento bianco. Questa non è solo una decisione estetica; cambia la quantità fisica di polimero che deve essere spinta attraverso la hotend.',
    },
    {
      type: 'list',
      items: [
        'Raggruppa colori simili nel modello o nella coda di stampa in modo che le tonalità correlate condividano le transizioni.',
        'Usa la purga verso riempimento quando la contaminazione interna del colore è accettabile e il pezzo ha abbastanza volume di riempimento.',
        'Riduci gli scambi di colore suddividendo badge, loghi, etichette o inserti decorativi in pezzi stampati separati.',
        'Usa colori più scuri dopo colori più chiari quando il design lo permette.',
        'Regola i moltiplicatori di lavaggio con campioni fisici, non solo con le impostazioni predefinite dello slicer.',
        'Preventiva il costo della purga separatamente nei preventivi per i clienti in modo che il lavoro decorativo multicolore non sia sottoprezzato.',
      ],
    },
    {
      type: 'proscons',
      title: 'Compromessi di ottimizzazione',
      items: [
        { pro: 'Fattori di purga più bassi riducono la massa della torre e il costo del filamento.', con: 'Troppa poca purga può creare striature, tinture o superfici inaccettabili rivolte al cliente.' },
        { pro: 'Suddividere i modelli può eliminare molti cambi di colore.', con: 'L\'assemblaggio aggiunge manodopera, gestione delle tolleranze, colla, fissaggi o giunture visibili.' },
        { pro: 'La purga verso riempimento trasforma parte dello scarto in plastica interna utile.', con: 'Funziona meglio solo quando l\'oggetto ha abbastanza volume nascosto e la contaminazione è strutturalmente accettabile.' },
        { pro: 'Raggruppare colori simili migliora l\'economia della farm di stampa.', con: 'Può ritardare lavori urgenti singoli che necessitano di una sequenza di colori specifica.' },
      ],
    },
    {
      type: 'title',
      text: 'Preventivare stampe multimateriale per clienti e farm di stampa',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Un preventivo di stampa che prezza solo il volume finale dell\'oggetto è sbagliato per i lavori AMS e MMU. Il cliente sta acquistando il processo di produzione, e il processo include l\'estrusione non di prodotto. Un piccolo portachiavi con molti scambi di colore strato per strato può sprecare più materiale di una staffa monocolore più grande. Il calcolatore rende questo visibile confrontando il volume dell\'oggetto e il volume della torre di purga come due blocchi concorrenti piuttosto che nascondere lo spreco in un singolo numero.',
    },
    {
      type: 'paragraph',
      html: 'Per una farm, il rapporto di purga è anche un segnale di pianificazione. I lavori con purga alta occupano la stampante mentre convertono filamento in plastica della torre, quindi la perdita economica non è solo materiale. Il tempo macchina speso per cambiare filamento, tagliare, caricare, pulire e ricostruire la pressione è tempo non speso a produrre volume vendibile. Quando il rapporto di purga è alto, considera se l\'articolo dovrebbe avere un sovrapprezzo multicolore, se i colori dovrebbero essere limitati, o se una soluzione dipinta, con etichetta stampata o assemblata è più economica.',
    },
    {
      type: 'card',
      title: 'Regola di preventivo per lavori multicolore',
      html: 'Prezza l\'oggetto, poi prezza la torre di purga come una riga di scarto separata. Se il cliente passa da due a quattro colori, o aggiunge piccoli dettagli isolati su molti strati, aggiorna il preventivo perché il numero di transizioni cambia anche quando il volume visibile del modello si muove a malapena.',
    },
    {
      type: 'table',
      headers: ['Rapporto di purga', 'Interpretazione', 'Azione consigliata'],
      rows: [
        ['Sotto il 15%', 'Lavoro multicolore efficiente', 'Le ipotesi di preventivo normali sono solitamente accettabili.'],
        ['15% al 30%', 'La perdita di materiale è visibile', 'Rivedi le transizioni e verifica se la purga verso riempimento aiuta.'],
        ['Sopra il 30%', 'Alto rapporto di scarto', 'Raggruppa i colori, suddividi il modello, aumenta il preventivo o riprogetta la disposizione dei colori.'],
        ['Sopra il 50%', 'La torre domina l\'economia', 'Tratta la stampa come un lavoro di produzione speciale, non come una stampa di oggetti di routine.'],
      ],
    },
    {
      type: 'title',
      text: 'Leggere i risultati del cruscotto',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'I due blocchi orizzontali sono intenzionalmente severi. Il verde è il volume reale dell\'oggetto. Il blocco di purga a strisce è materiale che non diventa il prodotto visibile. Se il blocco a strisce inizia a sembrare fisicamente paragonabile al blocco dell\'oggetto, la stampa merita attenzione. Questo rapporto visivo è spesso più persuasivo dei grammi o della valuta perché mostra all\'utente esattamente quanto materiale plastico viene assegnato alla pulizia.',
    },
    {
      type: 'paragraph',
      html: 'Il risultato di massa deriva dal volume moltiplicato per la densità. Il PLA è spesso intorno a 1,24 g/cm3, il PETG è comunemente vicino a 1,27 g/cm3, l\'ABS è più basso e i filamenti caricati variano ampiamente. Il risultato del prezzo usa il prezzo selezionato per chilogrammo. Se usi PLA seta speciale, miscele di fibra di carbonio, supporto solubile o filamento tecnico, sostituisci il prezzo e la densità predefiniti. Lo stesso volume di purga può avere un peso economico molto diverso a seconda del materiale.',
    },
    {
      type: 'summary',
      title: 'Checklist decisionale',
      items: [
        'Usa la calibrazione di purga misurata dello slicer come volume di base.',
        'Conta le transizioni ripetute, non solo il numero di colori caricati nell\'AMS o nella MMU.',
        'Controlla prima le transizioni nero su bianco, saturo su chiaro e verso destinazione traslucida.',
        'Considera un rapporto di purga superiore al 30 percento come un avviso di riprogettazione o revisione del preventivo.',
        'Usa il risultato del costo per la budgettazione dei materiali e la barra visiva per una rapida revisione del design.',
      ],
    },
    {
      type: 'message',
      title: 'Risultato pratico',
      html: 'Una stampa multimateriale è efficiente quando i cambi di colore sono disposti in modo che la torre di purga rimanga piccola rispetto all\'oggetto. Se la torre cresce oltre la linea di avviso del 30 percento, l\'ottimizzazione più economica di solito non è una nuova bobina o un profilo più veloce; è una migliore strategia di colore.',
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
