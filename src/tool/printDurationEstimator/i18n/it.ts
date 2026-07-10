import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PrintDurationEstimatorUI } from '../ui';

const slug = 'stimatore-tempo-stampa-3d-per-altezza-strato-e-velocita';
const title = 'Stimatore Tempo di Stampa 3D per Altezza Strato e Velocità';
const description =
  'Stima la durata di una stampa 3D senza aprire un affettatore combinando l\'altezza del modello, l\'altezza dello strato, la velocità di stampa, il riempimento, la complessità, il sovraccarico di spostamento e l\'uso di filamento.';

const faqData = [
  {
    question: 'Quanto durerà la mia stampa 3D senza un affettatore?',
    answer:
      'Puoi stimarlo dal numero totale di strati, dal volume approssimativo del materiale, dalla velocità media di stampa, dal riempimento e da un margine per spostamenti e cambi di direzione. Un affettatore rimane più preciso per i lavori finali.',
  },
  {
    question: 'Perché l\'altezza dello strato cambia così tanto il tempo di stampa?',
    answer:
      'L\'altezza dello strato modifica il numero di strati in Z. Un profilo da 0,12 mm crea molti più strati di uno da 0,28 mm per la stessa altezza del modello, quindi la stampante ripete perimetri, riempimento e sovraccarico di cambiamento strato molte più volte.',
  },
  {
    question: 'Perché il tempo di stampa reale è maggiore della velocità divisa per la distanza?',
    answer:
      'Le stampanti raramente mantengono la velocità richiesta negli angoli, nei segmenti corti, nei piccoli dettagli, nelle retrazioni, nei movimenti Z e nei percorsi di spostamento. I limiti di accelerazione e il sovraccarico rendono la durata reale maggiore del calcolo del movimento ideale.',
  },
  {
    question: 'È più preciso della stima di un affettatore?',
    answer:
      'No. Questo calcolatore è per la pianificazione anticipata, i preventivi e i confronti esplorativi. Un affettatore può ispezionare la geometria esatta, i supporti, le cuciture, le impostazioni di accelerazione, la larghezza di estrusione e l\'ordine dei percorsi utensile.',
  },
];

const howToData = [
  { name: 'Inserisci l\'altezza del modello', text: 'Usa l\'altezza Z del modello o dell\'oggetto più alto nel lavoro di stampa pianificato.' },
  { name: 'Scegli l\'altezza dello strato', text: 'Usa il valore reale del profilo di stampa, ad esempio 0,20 mm per una tipica configurazione FDM di qualità bozza.' },
  { name: 'Aggiungi velocità, impronta e riempimento', text: 'Usa la velocità media di stampa, un\'area di impronta XY approssimativa e la percentuale di riempimento target.' },
  { name: 'Regola complessità e sovraccarico', text: 'Aumenta la complessità per dettagli minuscoli e aumenta il sovraccarico per molti spostamenti, supporti o retrazioni.' },
  { name: 'Confronta scenari di velocità', text: 'Usa le righe a 40, 60 e 80 mm/s per vedere se l\'aumento della velocità cambia significativamente la durata totale del lavoro.' },
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'it',
};

export const content: ToolLocaleContent<PrintDurationEstimatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Ingressi dello stimatore tempo di stampa 3D',
    resultsAriaLabel: 'Risultati stimati del tempo di stampa 3D',
    unitSystemLabel: 'Unità',
    metricLabel: 'Metrico',
    imperialLabel: 'US',
    modelHeightLabel: 'Altezza del modello',
    modelHeightHint: 'Dimensione Z più alta della stampa.',
    layerHeightLabel: 'Altezza dello strato',
    speedLabel: 'Velocità media di stampa',
    footprintLabel: 'Area d\'impronta stimata',
    footprintHint: 'Area XY approssimativa usata come proxy del volume.',
    infillLabel: 'Densità di riempimento',
    complexityLabel: 'Fattore di complessità',
    complexityHint: '0,80 per forme semplici, 1,20 per dettagli minuscoli e segmenti corti.',
    overheadLabel: 'Sovraccarico di spostamento',
    filamentDiameterLabel: 'Diametro del filamento',
    densityLabel: 'Densità del materiale',
    timeLabel: 'Tempo di stampa stimato',
    layersLabel: 'Strati totali',
    materialLabel: 'Stima del materiale',
    filamentLabel: 'Lunghezza del filamento',
    effectiveSpeedLabel: 'Velocità effettiva',
    baseTimeLabel: 'Tempo di estrusione',
    overheadTimeLabel: 'Tempo di sovraccarico',
    comparisonLabel: 'Confronto di velocità',
    minutesUnit: 'min',
    hoursUnit: 'h',
    layersUnit: 'strati',
    gramUnit: 'g',
    ounceUnit: 'oz',
    meterUnit: 'm',
    footUnit: 'ft',
    percentUnit: '%',
    mmUnit: 'mm',
    inchUnit: 'in',
    mm2Unit: 'mm²',
    in2Unit: 'in²',
    mmSUnit: 'mm/s',
    inSUnit: 'in/s',
    cm3Unit: 'cm³',
    densityUnit: 'g/cm³',
    multiplierUnit: 'x',
    lowInsight: 'Stima breve: il sovraccarico dell\'affettatore, il riscaldamento del piatto e il raffreddamento possono diventare una grande parte del tempo reale trascorso.',
    balancedInsight: 'Stima equilibrata: i cambiamenti di velocità contano, ma il numero di strati e il sovraccarico influenzano ancora la durata finale.',
    highInsight: 'Stima lunga: considera strati più spessi, meno riempimento, meno supporti o la suddivisione del modello prima di limitarti ad aumentare la velocità.',
  },
  seo: [
    { type: 'title', text: 'Come Stimare il Tempo di Stampa 3D dall\'Altezza dello Strato e dalla Velocità', level: 2 },
    {
      type: 'paragraph',
      html: 'Uno <strong>stimatore del tempo di stampa 3D per altezza dello strato e velocità</strong> è utile quando hai bisogno di un numero di pianificazione prima di aprire un affettatore, confrontare diversi profili di stampa o preventivare un pezzo a partire da dimensioni approssimative. L\'idea centrale è semplice: l\'altezza del modello divisa per l\'altezza dello strato dà il numero di strati, e la quantità stimata di percorso estruso divisa per la velocità media dà il tempo di movimento. La parte difficile è che la stampa FDM reale non è un nastro trasportatore pulito. L\'ugello rallenta nelle curve, le retrazioni interrompono l\'estrusione, gli spostamenti aggiungono distanza senza stampa e i segmenti corti raramente raggiungono la velocità comandata.',
    },
    {
      type: 'paragraph',
      html: 'Questo calcolatore va intenzionalmente oltre la formula più basilare. Invece di assumere che <code>altezza / altezza strato / velocità</code> sia sufficiente, combina un volume approssimativo del modello, la densità di riempimento, la larghezza della linea di estrusione, un fattore di complessità, il tempo di cambio strato e una percentuale di sovraccarico di spostamento. Il risultato è ancora una stima, non un sostituto dell\'affettatore, ma risponde alla domanda pratica che gli utenti cercano: <strong>quanto durerà la mia stampa 3D</strong> se cambio l\'altezza dello strato, il riempimento o la velocità.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0,20 mm', label: 'Altezza strato FDM comune per stampe equilibrate', icon: 'mdi:layers-outline' },
        { value: '15-20 %', label: 'Intervallo iniziale utile per sovraccarico di spostamento e movimento', icon: 'mdi:routes' },
        { value: '40-80 mm/s', label: 'Velocità di confronto tipiche per stampanti desktop', icon: 'mdi:speedometer' },
        { value: '1,75 mm', label: 'Diametro filamento comune per calcolare la lunghezza del materiale', icon: 'mdi:circle-outline' },
      ],
    },
    {
      type: 'tip',
      title: 'Usa la velocità media, non la velocità massima',
      html: '<p>Se il tuo profilo dell\'affettatore indica 120 mm/s ma le pareti esterne vanno a 40 mm/s, i piccoli perimetri a 25 mm/s e il riempimento a 90 mm/s, la velocità media di stampa non è 120 mm/s. Per la pianificazione, una velocità media realistica produce spesso una stima migliore del movimento più veloce del profilo.</p>',
    },

    { type: 'title', text: 'Perché l\'Altezza dello Strato ha un Effetto così Grande sulla Durata', level: 2 },
    {
      type: 'paragraph',
      html: 'L\'altezza dello strato controlla quante volte la stampante deve ripetere la stessa sequenza di base: perimetro, struttura interna, superfici superiore e inferiore, spostamento verso l\'isola successiva e movimento Z verso lo strato successivo. Un modello alto 80 mm ha bisogno di 400 strati a 0,20 mm, ma circa 667 strati a 0,12 mm. Anche se ogni strato sottile usa leggermente meno plastica per passata, la stampante esegue molte più transizioni di strato, più contorni ripetuti e più opportunità di movimento lento limitato dall\'accelerazione.',
    },
    {
      type: 'table',
      headers: ['Altezza modello', 'Altezza strato', 'Numero di strati', 'Interpretazione per la pianificazione'],
      rows: [
        ['80 mm', '0,28 mm', '286 strati', 'Profilo veloce di bozza con strati visibili.'],
        ['80 mm', '0,20 mm', '400 strati', 'Qualità e durata equilibrate per molti pezzi.'],
        ['80 mm', '0,12 mm', '667 strati', 'Profilo di dettaglio fine che può aggiungere molte ore.'],
        ['160 mm', '0,20 mm', '800 strati', 'I pezzi alti diventano pesanti in durata anche a velocità normali.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Quando l\'altezza dello strato è il vero collo di bottiglia',
      badge: 'Verifica strati',
      html: '<p>Se aumentare la velocità di stampa non cambia quasi la stima, il lavoro potrebbe essere dominato dal numero di strati, dai segmenti corti e dal sovraccarico. In tal caso, passare da 0,12 mm a 0,20 mm può far risparmiare più tempo che aumentare la stampante da 60 mm/s a 80 mm/s.</p>',
    },
    {
      type: 'summary',
      title: 'Regole decisionali sull\'altezza dello strato',
      items: [
        'Usa strati più spessi per prototipi, staffe, fissaggi e pezzi dove la finitura superficiale Z non è critica.',
        'Usa strati più sottili per curve morbide, testo piccolo, miniature e superfici estetiche.',
        'Nei pezzi alti, i cambiamenti di altezza dello strato si accumulano rapidamente perché ogni strato extra ripete il sovraccarico.',
      ],
    },

    { type: 'title', text: 'Velocità di Stampa, Accelerazione e il Fattore di Complessità', level: 2 },
    {
      type: 'paragraph',
      html: 'Un valore di velocità di stampa è un obiettivo, non una promessa. La stampante deve accelerare fino a quella velocità, decelerare prima delle curve, obbedire ai limiti di jerk o deviazione di giunzione, e talvolta rallentare per raffreddamento, ponti, sporgenze, tempo minimo dello strato e piccole isole. Ecco perché un <strong>calcolatore da velocità di stampa a tempo di stampa</strong> ha bisogno di un fattore di complessità. Una scatola pulita con lunghe linee di riempimento diritte può funzionare vicino alla velocità richiesta. Una figurina dettagliata, un logo, un reticolo, un pezzo filettato o una scultura organica possono passare la maggior parte del tempo in segmenti corti dove i limiti di accelerazione contano più della velocità massima.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Geometria semplice',
          description: 'Scatole, pannelli e lunghi percorsi di riempimento possono usare un moltiplicatore di complessità più basso.',
          icon: 'mdi:cube-outline',
          points: ['Percorsi continui più lunghi', 'Meno isole', 'Meno sovraccarico di retrazione'],
        },
        {
          title: 'Geometria mista',
          description: 'La maggior parte delle staffe, custodie, oggetti di scena e pezzi domestici si avvicina al moltiplicatore predefinito.',
          icon: 'mdi:shape-outline',
          highlight: true,
          points: ['Contano sia i perimetri che il riempimento', 'Spostamenti moderati', 'Perdite di accelerazione equilibrate'],
        },
        {
          title: 'Geometria dettagliata',
          description: 'Piccole caratteristiche, testo, reticoli, supporti e superfici curve organiche necessitano di un moltiplicatore più alto.',
          icon: 'mdi:vector-polyline',
          points: ['Segmenti corti dominano', 'Più avvii e arresti', 'Più retrazioni e spostamenti'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Aumentare la velocità di stampa: cosa migliora e cosa no',
      items: [
        { pro: 'Le lunghe linee di riempimento possono finire più velocemente con l\'aumento della velocità.', con: 'Le pareti esterne e i piccoli dettagli possono ancora essere limitati dal profilo.' },
        { pro: 'I grandi prototipi a basso dettaglio possono beneficiare di un movimento più rapido.', con: 'Accelerazione, ringing, flusso di estrusione e raffreddamento possono limitare la velocità utilizzabile.' },
        { pro: 'Una tabella di confronto delle velocità mostra rapidamente il risparmio potenziale.', con: 'Non può prevedere i rallentamenti specifici dell\'affettatore come il tempo minimo dello strato.' },
      ],
    },
    {
      type: 'message',
      title: 'Le stime di velocità sono più utili per il confronto relativo',
      ariaLabel: 'Nota sulla stima della velocità',
      html: '<p>Usa le righe a 40, 60 e 80 mm/s per confrontare in modo indicativo. Se 80 mm/s fa risparmiare solo una piccola quantità, la stampa è probabilmente limitata da strati, sovraccarico o complessità, più che dalla velocità grezza.</p>',
    },

    { type: 'title', text: 'Riempimento, Volume e Tempo di Materiale', level: 2 },
    {
      type: 'paragraph',
      html: 'Il calcolatore usa l\'area d\'impronta e l\'altezza del modello come approssimazione del volume, poi scala quel volume per un rapporto di solido effettivo. Questo non è così preciso come leggere la geometria della mesh, ma cattura una verità fisica importante: le pareti e le pelli non scompaiono quando si riduce il riempimento. Un pezzo stampato con il 15 % di riempimento ha ancora perimetri, strati superiori, strati inferiori, piccole parti piene e talvolta interfacce di supporto. Il calcolatore mantiene una quota di guscio nella stima in modo che un riempimento basso non faccia crollare il tempo di stampa in modo irrealistico fino a quasi nulla.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Aumenta l\'area d\'impronta per oggetti larghi, scatole, piatti piani, vassoi e custodie ampie.',
        'Riduci l\'area d\'impronta per torri strette, figurine sottili, piccole staffe e telai aperti.',
        'Usa la percentuale di riempimento come controllo di pianificazione, non come densità totale del pezzo.',
        'Ricorda che supporti, orli, zattere, torri di purga e scarti multicolore aggiungono tempo al di fuori del modello stesso.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:printer-3d-nozzle',
      title: 'Esempio: perché il 20 % di riempimento non è il 20 % del tempo di stampa',
      html: '<p>Una custodia alta 80 mm può avere quattro pareti, sei strati inferiori, sei strati superiori, mozzi filettati e una grande cavità interna. Ridurre il riempimento dal 40 % al 20 % riduce la lunghezza del percorso interno, ma le pareti e le pelli vengono ancora stampate su ogni strato. Per i modelli con molti perimetri, cambiare il numero di pareti o l\'altezza dello strato può influenzare il tempo più del solo cambiamento del riempimento.</p>',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Area d\'impronta', definition: 'L\'area XY approssimativa occupata dal modello, usata qui come input di volume grossolano.' },
        { term: 'Rapporto di solido effettivo', definition: 'Una miscela di pianificazione di materiale di guscio e materiale di riempimento usata per stimare il volume estruso.' },
        { term: 'Cordone di estrusione', definition: 'Il cordone di plastica depositato dall\'ugello; la sua sezione trasversale dipende dall\'altezza dello strato e dalla larghezza di estrusione.' },
        { term: 'Lunghezza del filamento', definition: 'La lunghezza di filamento grezzo necessaria per fornire il volume di plastica stimato.' },
      ],
    },

    { type: 'title', text: 'Sovraccarico di Spostamento: Il Pezzo Mancante nei Calcolatori Semplici', level: 2 },
    {
      type: 'paragraph',
      html: 'Una stima di durata semplice ignora spesso il movimento senza estrusione. Le stampanti reali si muovono tra le isole, retraggono e primano il filamento, puliscono, saltano in Z, evitano le parti già stampate, cambiano direzione e talvolta si fermano per raffreddare. Queste azioni non creano materiale visibile, ma consumano tempo reale. Una percentuale fissa di sovraccarico è un modo pratico per contabilizzare gli spostamenti quando non si dispone di un percorso completo dell\'affettatore. L\'intervallo predefinito del 15-20 % è un punto di partenza utile per i pezzi FDM ordinari a materiale singolo.',
    },
    {
      type: 'table',
      headers: ['Condizione di stampa', 'Sovraccarico suggerito', 'Motivo'],
      rows: [
        ['Pezzo singolo e semplice', '10-15 %', 'Poche isole, meno retrazioni, percorsi per lo più continui.'],
        ['Pezzo funzionale tipico', '15-22 %', 'Perimetri, riempimento e spostamenti moderati.'],
        ['Molti pezzi piccoli su una piastra', '22-35 %', 'Spostamenti frequenti tra oggetti e avvii ripetuti.'],
        ['Supporti o superfici dettagliate', '25-40 %', 'Le interfacce di supporto, i segmenti corti e le retrazioni aggiungono tempo.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Il riscaldamento del piatto non è incluso',
      badge: 'Tempo totale del lavoro',
      html: '<p>La stima si concentra sul tempo di movimento e estrusione. Aggiungi tempo separato per il riscaldamento del piatto e dell\'ugello, la palpazione, la livellatura della mesh, il caricamento del filamento, il raffreddamento e la rimozione del pezzo quando pianifichi l\'occupazione effettiva della macchina.</p>',
    },
    {
      type: 'tip',
      title: 'Calibra il sovraccarico da una stampa reale',
      html: '<p>Prendi un lavoro finito, confronta la durata dell\'affettatore o del cronometro con questo calcolatore, poi regola sovraccarico e complessità finché la stima corrisponde. Questa calibrazione locale migliorerà la pianificazione futura più che usare valori generici per sempre.</p>',
    },

    { type: 'title', text: 'Quando Fidarsi di Questo Calcolatore e Quando Usare un Affettatore', level: 2 },
    {
      type: 'paragraph',
      html: 'Questo strumento è più utile per stime preliminari, conversazioni di preventivo, dimostrazioni in classe e confronto tra altezza dello strato e velocità prima di impegnarsi con un profilo. È particolarmente utile quando lo STL esatto non è ancora disponibile, quando un cliente fornisce solo dimensioni approssimative, o quando vuoi sapere se vale la pena indagare un cambiamento. Non è progettato per sostituire le stime dell\'affettatore per lavori di produzione critici, perché gli affettatori ispezionano la geometria esatta della mesh, le velocità per caratteristica, i percorsi di supporto, l\'ordine delle pareti, le superfici superiore e inferiore, il posizionamento delle cuciture, il controllo dell\'accelerazione e il comportamento specifico del firmware della macchina.',
    },
    {
      type: 'list',
      icon: 'mdi:calculator-variant-outline',
      items: [
        'Usa questo calcolatore per confrontare rapidamente profili di strato da 0,12 mm, 0,20 mm e 0,28 mm.',
        'Usalo per stimare se un modello alto è limitato dal numero di strati prima di cambiare la velocità.',
        'Usalo per ottenere un volume di materiale, lunghezza del filamento e peso approssimativi da dimensioni approssimative.',
        'Usa un affettatore prima di acquistare materiale, prenotare tempo macchina o promettere date di consegna.',
      ],
    },
    {
      type: 'table',
      headers: ['Domanda', 'Risposta del calcolatore', 'Risposta dell\'affettatore'],
      rows: [
        ['Strati più spessi faranno risparmiare tempo?', 'Buona stima indicativa dal numero di strati.', 'Risultato esatto per percorso e superficie specifica.'],
        ['80 mm/s sarà molto più veloce di 60 mm/s?', 'Confronto utile di scenari di velocità.', 'Comportamento esatto per caratteristica di velocità e accelerazione.'],
        ['Quanto filamento potrei bisogno?', 'Volume, lunghezza e peso approssimativi.', 'Rapporto materiale specifico del profilo.'],
        ['Posso preventivare questo lavoro di produzione?', 'Solo per selezione preliminare.', 'Necessario per il preventivo finale e la pianificazione.'],
      ],
    },
    {
      type: 'summary',
      title: 'Flusso di lavoro migliore',
      items: [
        'Inizia con questo stimatore per restringere le opzioni di altezza strato, velocità e riempimento.',
        'Regola complessità e sovraccarico usando una stampa conosciuta della tua macchina.',
        'Riaffetta il profilo candidato finale prima di impegnarti su costi, tempi o consegna.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
