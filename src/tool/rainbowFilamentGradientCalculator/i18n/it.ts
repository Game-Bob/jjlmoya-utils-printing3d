import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { RainbowFilamentGradientCalculatorUI } from '../ui';

export const content: ToolLocaleContent<RainbowFilamentGradientCalculatorUI> = {
  slug: 'calcolatore-transizione-filamento-arcobaleno',
  title: 'Calcolatore della Lunghezza di Transizione del Filamento Arcobaleno per Stampe 3D',
  description: 'Stima i cicli di colore del filamento arcobaleno, l\'uso della bobina e dove appariranno le transizioni sfumate lungo l\'altezza Z di una stampa 3D slicata.',
  ui: {
    unitMetric: 'Metrico',
    unitImperial: 'US',
    cycleLength: 'Lunghezza ciclo colore',
    partWeight: 'Peso del pezzo slicato',
    density: 'Densità',
    diameter: 'Diametro filamento',
    partHeight: 'Altezza Z stampata',
    startOffset: 'Offset iniziale sulla bobina',
    presets: 'Preimpostazioni materiale',
    pla: 'PLA arcobaleno',
    petg: 'Miscela PETG',
    silk: 'Seta multicolore',
    usedFilament: 'Filamento usato',
    cyclesInPart: 'Cicli nel pezzo',
    heightPerCycle: 'Z per ciclo',
    gramsPerCycle: 'Massa per ciclo',
    zMap: 'Mappa transizione Z',
    transitionBands: 'Bande di transizione visibili',
    phaseWindow: 'Fase del ciclo',
    copySummary: 'Copia riepilogo sfumatura',
    reset: 'Reimposta',
    emptyValue: '0',
    copyTemplate: 'Stima filamento arcobaleno',
    copyCycles: 'cicli di colore',
    copyUsed: 'usato',
    copyZCycle: 'per ciclo',
  },
  seo: [
    { type: 'title', text: 'Come funziona un calcolatore della lunghezza di transizione del filamento arcobaleno', level: 2 },
    { type: 'paragraph', html: 'Un calcolatore della lunghezza di transizione del filamento arcobaleno collega due numeri dello slicer solitamente visti separatamente: <strong>massa del modello</strong> e <strong>altezza stampata</strong>. Lo slicer indica quanti grammi di materiale consumerà il pezzo, mentre il produttore del filamento o una misurazione manuale indica quanti metri la bobina deve svolgere per completare un ciclo colore completo. Una volta che questi valori sono nello stesso modello di flusso del materiale, puoi stimare quanti cicli di colore appaiono nell\'oggetto e dove ogni banda di colore si trova sull\'asse Z.' },
    { type: 'paragraph', html: 'La conversione principale è fisica, non visiva. Un pezzo slicato che pesa 180 g non consuma automaticamente la stessa lunghezza di filamento su ogni bobina, perché la lunghezza dipende dalla densità e dal diametro. PLA, PETG, PLA seta, miscele riempite e miscele traslucide possono avere densità diverse. Un filamento nominale da 1,75 mm ha anche variazioni di tolleranza, quindi un calcolatore dovrebbe permettere di regolare il diametro invece di assumere il valore predefinito per sempre.' },
    {
      type: 'stats', columns: 4, items: [
        { value: '1,75 mm', label: 'diametro FDM comune', icon: 'mdi:circle-slice-8' },
        { value: '1,24 g/cm3', label: 'densità PLA tipica per stime', icon: 'mdi:flask' },
        { value: '30 m', label: 'esempio di ciclo arcobaleno completo', icon: 'mdi:palette' },
        { value: 'Asse Z', label: 'dove la lunghezza del ciclo diventa visibile', icon: 'mdi:arrow-up-down' },
      ]
    },
    { type: 'tip', title: 'Misura un ciclo reale prima di fidarti dell\'anteprima', html: 'I produttori spesso descrivono il filamento arcobaleno come a transizione rapida, media o lunga, ma l\'input utile è la distanza misurata da un colore al ritorno dello stesso colore. Srotola un piccolo campione solo se è sicuro per la bobina, o stampa una torre di purga sottile e ricalcola la lunghezza di filamento consumato dalle stime dello slicer.' },

    { type: 'title', text: 'Perché il peso del pezzo predice i cambi di colore meglio del tempo di stampa', level: 2 },
    { type: 'paragraph', html: 'Il tempo di stampa è un cattivo predittore dell\'uso del colore di una bobina arcobaleno. Un vaso decorativo può richiedere molte ore in modalità spirale consumando poco materiale, mentre una staffa meccanica densa può consumare rapidamente una grande quantità di filamento. La bobina cambia colore in base alla <strong>lunghezza del filamento tirato attraverso l\'estrusore</strong>, non in base ai minuti trascorsi, alla distanza di viaggio o al numero di strati.' },
    { type: 'paragraph', html: 'Il peso dello slicer è utile perché include già pareti, riempimento, strati superiori e inferiori, supporti (se attivati), brim, skirt e strutture di purga. Quel peso può essere convertito in volume dividendolo per la densità del materiale. Il volume può poi essere diviso per l\'area della sezione trasversale del filamento per stimare la lunghezza totale del filamento. Ecco perché lo stesso STL può mostrare un comportamento di sfumatura diverso quando cambi riempimento, numero di pareti, impostazioni di supporto o scala.' },
    {
      type: 'table', headers: ['Modifica slicer', 'Effetto sull\'uso del filamento', 'Effetto sulla sfumatura arcobaleno'], rows: [
        ['Più riempimento', 'Aumenta i grammi e i metri totali', 'Più progresso del ciclo colore nella stessa altezza Z'],
        ['Più pareti', 'Aumenta l\'uso nella maggior parte degli strati', 'Le transizioni si comprimono verticalmente e diventano più frequenti'],
        ['Modello più alto con stessa massa', 'Metri simili su più altezza Z', 'Le transizioni si allontanano'],
        ['Supporti attivati', 'Consuma colori fuori dal pezzo visibile', 'La fase visibile può spostarsi rispetto al modello nudo'],
        ['Brim o zattera grandi', 'Consuma filamento prima del primo strato visibile', 'Il colore iniziale avanza sulla bobina'],
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Usa la stima dello slicer dopo le impostazioni finali', badge: 'Importante', html: 'Esegui il calcolo dopo aver scelto l\'altezza dello strato, il numero di pareti, il riempimento, i supporti, il brim e la scala. Una stima del ciclo colore fatta prima della generazione dei supporti può essere visibilmente errata perché il materiale di supporto consuma parte della sequenza di colori prima e durante l\'oggetto.' },

    { type: 'title', text: 'Capire la lunghezza del ciclo colore sulle bobine di filamento arcobaleno', level: 2 },
    { type: 'paragraph', html: 'La lunghezza del ciclo colore è la distanza di filamento necessaria per ripetere la sequenza. Su una bobina arcobaleno a sei colori, un ciclo potrebbe percorrere rosso, arancione, giallo, verde, blu, viola, poi tornare al rosso. Il ciclo può essere abbastanza corto per diverse transizioni in una piccola figurina, o abbastanza lungo da far sì che una stampa media mostri solo un lento cambiamento. Un <strong>calcolatore del ciclo colore per bobina arcobaleno</strong> è più utile quando questo numero è realistico.' },
    { type: 'paragraph', html: 'Non tutti i filamenti a transizione hanno zone di colore uguali. Alcuni prodotti si fondono gradualmente con lunghi gradienti, mentre altri hanno blocchi più marcati. Il calcolatore tratta il ciclo completo come bande di colore uniformemente distribuite perché questa è la stima più pratica dai soli dati dello slicer. Se la tua bobina ha sezioni disuguali, usa la mappa Z come guida di fase e aspettati che la miscela visiva reale sia più morbida o asimmetrica.' },
    {
      type: 'comparative', columns: 3, items: [
        { title: 'Arcobaleno a ciclo corto', description: 'Ideale per miniature, ornamenti, vasi piccoli e targhette. Cambi di colore multipli con meno materiale.', icon: 'mdi:weather-sunset-up', points: ['Transizioni visibili rapide', 'Può sembrare affollato su grandi superfici piane'] },
        { title: 'Arcobaleno a ciclo medio', description: 'Una scelta equilibrata per oggetti da scrivania e sculture medie. Produce generalmente da una a tre transizioni principali.', icon: 'mdi:palette-swatch', highlight: true, points: ['Prevedibile sulle stampe comuni', 'Buono per oggetti da 100-300 g'] },
        { title: 'Arcobaleno a ciclo lungo', description: 'Meglio per vasi alti, grandi draghi, lampade e stampe a parete singola che necessitano di gradienti lenti e fluidi.', icon: 'mdi:palette-outline', points: ['Transizione di colore morbida', 'I modelli piccoli possono rimanere di un solo colore'] },
      ]
    },
    {
      type: 'glossary', items: [
        { term: 'Ciclo di colore', definition: 'La lunghezza di filamento necessaria affinché la sequenza completa di colori si ripeta da un colore iniziale allo stesso colore.' },
        { term: 'Fase', definition: 'La posizione attuale all\'interno del ciclo di colore nel momento in cui la parte visibile inizia a essere stampata.' },
        { term: 'Banda di transizione', definition: 'Una regione verticale dell\'oggetto stampato in cui il segmento di colore stimato cambia lungo l\'asse Z.' },
        { term: 'Offset iniziale', definition: 'La lunghezza di filamento già consumata prima dell\'inizio del modello, incluse stampe precedenti, purga, skirt, brim o rifilatura manuale.' },
      ]
    },

    { type: 'title', text: 'Come stimare la posizione della transizione di colore lungo l\'asse Z', level: 2 },
    { type: 'paragraph', html: 'La mappa Z è uno stimatore, non un simulatore dello slicer. Assume che il consumo di materiale sia distribuito proporzionalmente lungo l\'altezza stampata. È un buon modello di primo ordine per molte stampe in modalità vaso, sculture a sezione costante e oggetti decorativi. Diventa meno preciso quando il modello ha una base pesante, un centro cavo, una parte superiore densa o grandi supporti che consumano materiale in modo diseguale in altezza.' },
    { type: 'paragraph', html: 'Per un modello con sezione trasversale abbastanza uniforme, dividere l\'altezza stampata per i cicli di colore dà una risposta intuitiva: se un oggetto di 160 mm usa due cicli di colore completi, ogni ciclo occupa circa 80 mm di altezza Z. Se usa solo 0,4 cicli, la stampa mostrerà meno della metà della sequenza arcobaleno. Se usa 4 cicli, i colori si ripetono spesso e possono creare un aspetto striato piuttosto che un singolo gradiente uniforme.' },
    {
      type: 'list', icon: 'mdi:arrow-up-down', items: [
        'Usa l\'altezza Z stampata, non l\'altezza totale di movimento della macchina.',
        'Includi il consumo di brim o zattera come offset iniziale se queste caratteristiche sono stampate prima dell\'oggetto.',
        'Per piastre multi-oggetto, calcola il peso slicato combinato se gli oggetti sono stampati sequenzialmente per strato.',
        'Per la stampa sequenziale, calcola ogni oggetto separatamente e anticipa l\'offset iniziale per l\'oggetto successivo.',
        'Per una torre di purga o una struttura di scarto multicolore, aggiungi la sua massa stimata all\'offset o all\'uso totale a seconda di quando viene stampata.',
      ]
    },
    { type: 'card', icon: 'mdi:layers-triple', title: 'Perché la parte inferiore potrebbe non corrispondere al primo colore previsto', html: 'Molte stampanti purgano, tracciano una linea di priming, stampano una skirt o un brim prima della prima parete visibile. Queste caratteristiche consumano filamento e spostano la fase iniziale. Se il primo strato visibile deve essere di un colore specifico, misura o stima questo consumo di pre-stampa e inseriscilo come offset iniziale.' },

    { type: 'title', text: 'Densità, diametro e perché due stampe da 180 g possono usare lunghezze di filamento diverse', level: 2 },
    { type: 'paragraph', html: 'La stessa massa può rappresentare lunghezze di filamento diverse perché la densità cambia il volume per grammo. Il PLA è spesso stimato intorno a 1,24 g/cm3, il PETG intorno a 1,27 g/cm3, e alcune miscele di seta o riempite possono differire abbastanza da spostare le transizioni di diversi millimetri sulle stampe alte.' },
    { type: 'paragraph', html: 'Non tutti i filamenti a transizione hanno zone di colore uguali. Il calcolatore tratta il ciclo completo come bande di colore uniformemente distribuite. Se la tua bobina ha sezioni disuguali, usa la mappa Z come guida.' },
    {
      type: 'table', headers: ['Famiglia di materiale', 'Densità di pianificazione', 'Nota sulla pianificazione del gradiente'], rows: [
        ['PLA arcobaleno', '1,24 g/cm3', 'Buon default per la maggior parte delle bobine arcobaleno standard'],
        ['Seta PLA', '1,18-1,24 g/cm3', 'Pigmenti e additivi variano; controlla i dati della marca se disponibili'],
        ['PETG multicolore', '1,25-1,29 g/cm3', 'Leggermente più denso, quindi gli stessi grammi possono usare meno lunghezza'],
        ['PLA riempito', 'Varia ampiamente', 'Additivi di legno, metallo, pietra o glitter possono spostare la stima'],
      ]
    },
    {
      type: 'proscons', title: 'Usare il peso dello slicer come input principale', items: [
        { pro: 'Include impostazioni di stampa reali come pareti, riempimento, supporti e scala.', con: 'Dipende dal profilo di densità dello slicer che sia ragionevolmente accurato.' },
        { pro: 'È più veloce che sommare manualmente i movimenti di estrusione dal G-code.', con: 'Non rivela la distribuzione diseguale del materiale a ogni strato.' },
        { pro: 'Funziona con diversi modelli e slicer con un inserimento dati minimo.', con: 'Le linee di priming, la purga e gli avvii falliti devono essere contabilizzati separatamente.' },
      ]
    },

    { type: 'title', text: 'Come usare il calcolatore per una vera stampa con filamento arcobaleno', level: 2 },
    { type: 'paragraph', html: 'Inizia slicando il modello con le impostazioni finali. Copia il peso stimato del filamento dallo slicer, quindi inserisci la densità del materiale e il diametro del filamento. Inserisci la lunghezza del ciclo di colore misurata o dichiarata. Infine, inserisci l\'altezza Z stampata del modello. Il calcolatore restituisce il filamento usato, il numero di cicli nel pezzo, i grammi per ciclo di colore completo e la distanza Z stimata per ciclo.' },
    {
      type: 'list', icon: 'mdi:check-circle', items: [
        'Se i cicli nel pezzo sono inferiori a 0,25, aspettati un cambiamento di colore sottile piuttosto che un oggetto arcobaleno.',
        'Se i cicli nel pezzo sono intorno a 1,0, il modello può mostrare una spazzata completa attraverso la tavolozza della bobina.',
        'Se i cicli nel pezzo sono tra 2,0 e 4,0, l\'oggetto mostrerà bande di colore ripetute.',
        'Se Z per ciclo è maggiore dell\'altezza del modello, aumenta la scala, aggiungi massa o scegli una bobina a transizione più rapida.',
        'Se Z per ciclo è molto piccolo, riduci il riempimento o scegli una bobina a transizione più lunga per gradienti più morbidi.',
      ]
    },
    {
      type: 'summary', title: 'Regola rapida di pianificazione', items: [
        'Più grammi nella stessa altezza comprimono l\'arcobaleno verticalmente.',
        'Più altezza con gli stessi grammi allunga il gradiente.',
        'Una lunghezza del ciclo di colore più corta crea più transizioni.',
        'L\'offset iniziale controlla quale parte dell\'arcobaleno appare per prima.',
      ]
    },
    { type: 'message', title: 'Per pezzi da esposizione', ariaLabel: 'Consiglio di pianificazione per pezzi da esposizione', html: 'Quando il confine di colore deve cadere su una caratteristica specifica, stampa una piccola colonna di prova verticale con lo stesso profilo slicer. Confronta le altezze delle bande misurate con la stima, poi regola la lunghezza del ciclo o l\'offset iniziale prima di impegnarti nella stampa completa.' },

    { type: 'title', text: 'Domande comuni sulla pianificazione dei colori delle bobine arcobaleno', level: 2 },
    { type: 'paragraph', html: '<strong>Quanto filamento arcobaleno mi serve per un ciclo di colore completo?</strong> Moltiplica la lunghezza del ciclo per i grammi al metro per il tuo diametro e densità di filamento. Per PLA standard da 1,75 mm, un metro equivale a circa 3 g, quindi un ciclo di 30 m è vicino a 90 g. Il calcolatore esegue questa conversione direttamente perché densità e diametro reali modificano la risposta.' },
    { type: 'paragraph', html: '<strong>Perché la mia stampa è rimasta per lo più di un colore?</strong> Il pezzo probabilmente ha usato meno di una frazione significativa del ciclo della bobina. I modelli piccoli, il riempimento basso e il filamento arcobaleno a transizione molto lunga possono rimanere entro uno o due colori vicini. Ingrandire il modello, stampare più oggetti contemporaneamente, aumentare le pareti o scegliere una bobina a ciclo più rapido può rendere le transizioni più visibili.' },
    { type: 'paragraph', html: '<strong>Posso forzare un colore specifico nella parte superiore del modello?</strong> Puoi stimarlo con l\'offset iniziale, ma un posizionamento esatto richiede la conoscenza della fase attuale della bobina. Se la parte superiore deve essere blu, ad esempio, potresti dover avanzare il filamento stampando un oggetto di purga, partendo da un colore visibile noto o scegliendo una scala di modello diversa.' },
    { type: 'diagnostic', variant: 'warning', title: 'Grandi cambiamenti geometrici riducono la precisione della mappa Z', badge: 'Forma del modello', html: 'Un piedistallo pesante e una statua superiore sottile possono consumare la maggior parte del materiale vicino alla base, quindi le transizioni reali si raggrupperanno più in basso di quanto suggerisca una stima Z proporzionale. Per questi modelli, usa il calcolatore per il conteggio totale dei cicli, poi ispeziona l\'anteprima degli strati dello slicer per capire dove è concentrato il volume di estrusione.' },
  ],
  faq: [
    {
      question: 'Cos\'è la lunghezza di transizione del filamento arcobaleno?',
      answer: 'È la quantità di filamento, solitamente misurata in metri o piedi, necessaria alla bobina per percorrere una sequenza completa di colori e tornare al colore iniziale.',
    },
    {
      question: 'Perché il calcolatore chiede il peso del pezzo invece del tempo di stampa?',
      answer: 'I cambiamenti di colore dipendono dalla lunghezza del filamento consumato dall\'estrusore. Il peso dello slicer può essere convertito in volume e poi in lunghezza di filamento, mentre il tempo di stampa non descrive direttamente l\'uso del materiale.',
    },
    {
      question: 'Quanto è precisa la mappa di transizione Z?',
      answer: 'È una stima di pianificazione. È più precisa per modelli con distribuzione del materiale abbastanza uniforme in altezza, e meno precisa per forme con base densa, sezioni cave, supporti o grandi strutture di purga.',
    },
    {
      question: 'Posso usarlo per filamento arcobaleno in seta PLA o PETG?',
      answer: 'Sì. Scegli una preimpostazione del materiale o inserisci la densità dalla scheda tecnica della bobina. La densità modifica la lunghezza stimata del filamento e quindi il numero previsto di cicli di colore.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Slica il modello', text: 'Usa le impostazioni finali dello slicer e copia il peso stimato del pezzo.' },
    { name: 'Inserisci i dati della bobina', text: 'Imposta la lunghezza del ciclo di colore, la densità, il diametro del filamento e l\'eventuale offset iniziale.' },
    { name: 'Leggi la mappa Z', text: 'Usa i cicli, Z per ciclo e le bande visibili per decidere se la sfumatura sarà sottile, completa o ripetuta.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Calcolatore della Lunghezza di Transizione del Filamento Arcobaleno',
      description: 'Stima l\'uso del ciclo di colore del filamento arcobaleno e le posizioni di transizione lungo l\'asse Z di una stampa 3D.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Cos\'è la lunghezza di transizione del filamento arcobaleno?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'È la quantità di filamento necessaria alla bobina per percorrere una sequenza completa di colori e tornare al colore iniziale.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Calcolatore della Lunghezza di Transizione del Filamento Arcobaleno per Stampe 3D',
      description: 'Stima i cicli di colore del filamento arcobaleno, l\'uso della bobina e dove appariranno le transizioni sfumate lungo l\'altezza Z di una stampa 3D slicata.',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Slica il modello', text: 'Usa le impostazioni finali dello slicer e copia il peso stimato del pezzo.' },
        {
          '@type': 'HowToStep', position: 2, name: 'Inserisci i dati della bobina', text: 'Imposta la lunghezza del ciclo di colore, la densità, il diametro del filamento e l\'eventuale offset iniziale.'
        },
        { '@type': 'HowToStep', position: 3, name: 'Leggi la mappa Z', text: 'Usa i cicli, Z per ciclo e le bande visibili per decidere se la sfumatura sarà sottile, completa o ripetuta.' }
      ],
    },
  ],
};
