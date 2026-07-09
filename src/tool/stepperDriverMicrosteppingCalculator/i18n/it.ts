import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { StepperDriverMicrosteppingCalculatorUI } from '../ui';

export const content: ToolLocaleContent<StepperDriverMicrosteppingCalculatorUI> = {
  slug: 'calcolatrice-microstepping-driver-motore-passo-3d',
  title: 'Calcolatrice di Passi per mm e Microstepping per Motori Passo Passo',
  description: 'Calcola i passi esatti per mm (o passi per pollice) e la risoluzione meccanica teorica per motori passo-passo di stampanti 3D. Supporta TMC2209, TMC2208, cinghie e viti madri.',
  ui: {
    title: 'Calcolatrice Microstepping per Driver Passo Passo',
    presetsLabel: 'PRESET',
    presetBelt16: 'Cinghia GT2 e puleggia T16 (X/Y)',
    presetBelt20: 'Cinghia GT2 e puleggia T20 (X/Y)',
    presetZLead8: 'Vite madre T8 avanzamento 8mm (Z)',
    presetZLead2: 'Vite madre T8 avanzamento 2mm (Z)',
    unitSystemLabel: 'Sistema di Unità',
    metricLabel: 'Metrico',
    imperialLabel: 'Imperiale',
    configLabel: 'CONFIGURAZIONE MOTORE E DRIVER',
    motorStepAngleLabel: 'Angolo di Passo del Motore',
    driverMicrosteppingLabel: 'Microstepping del Driver',
    transmissionModeLabel: 'Tipo di Trasmissione',
    transmissionBelt: 'Trasmissione a Cinghia',
    transmissionLeadScrew: 'Vite Madre / Barra Filettata',
    beltPitchLabel: 'Passo della Cinghia',
    pulleyTeethLabel: 'Denti della Puleggia',
    leadScrewPitchLabel: 'Avanzamento della Vite Madre (Distanza per Giro)',
    resultsLabel: 'RISULTATI CALCOLATI',
    stepsPerUnitLabel: 'Configurazione Firmware (Passi)',
    mechanicalResolutionLabel: 'Risoluzione Teorica',
    stepsPerUnitUnitMetric: 'passi/mm',
    stepsPerUnitUnitImperial: 'passi/pollice',
    mechanicalResolutionUnitMetric: 'micron/passo',
    mechanicalResolutionUnitImperial: 'millesimi/passo',
    formulaLabel: 'FORMULE MATEMATICHE',
    formulaStepsPerRevolution: 'Passi/Giro = 360 / Angolo di Passo',
    formulaMicrostepsPerRev: 'Micropassi/Giro = Passi/Giro * Micropassi',
    formulaDistancePerRev: 'Distanza/Giro = Denti * Passo (o Avanzamento Vite Madre)',
    formulaStepsPerUnit: 'Passi/Unità = Micropassi/Giro / Distanza/Giro',
    formulaResolution: 'Risoluzione = Distanza/Giro / Micropassi/Giro',
    explainResolutionLabel: 'Cosa significa?',
    explainResolutionText: 'Rappresenta il più piccolo movimento lineare teorico che l\'asse della tua stampante 3D può compiere quando il driver comanda un singolo micropasso. Valori di risoluzione più bassi indicano una maggiore precisione di posizionamento meccanico.',
    copyButton: 'Copia Comando Firmware',
    copiedButton: 'Copiato!',
    stepAngleUnit: '°',
    microstepsUnit: 'x',
    pitchUnitMetric: 'mm',
    pitchUnitImperial: 'in',
    teethUnit: 'denti',
    stepAngle18: '1,8° (200 passi/giro)',
    stepAngle09: '0,9° (400 passi/giro)',
    stepAngle75: '7,5° (48 passi/giro)',
    stepAngle15: '15° (24 passi/giro)',
    microstep1: '1x (Passo Intero)',
    microstep2: '2x',
    microstep4: '4x',
    microstep8: '8x',
    microstep16: '16x',
    microstep32: '32x',
    microstep64: '64x',
    microstep128: '128x',
    microstep256: '256x',
  },
  seo: [
    {
      type: 'title',
      text: 'Guida alla Calibrazione dei Motori Passo-Passo e Configurazione dei Passi per Millimetro nel Firmware',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Nelle stampanti 3D consumer e professionali, il movimento di precisione si basa su motori passo-passo, driver e meccanismi di trasmissione lineare. I motori passo-passo non ruotano in modo continuo; suddividono invece una rotazione completa in un numero fisso di passi discreti. Affinché la scheda di controllo della stampante 3D possa spostare la testina di stampa o il piano di stampa di una distanza esatta, il firmware deve sapere con precisione quanti passi del motore (inclusi i micropassi) corrispondono a un\'unità di distanza lineare (millimetro o pollice). Questo valore è noto come passi per millimetro o passi per pollice ed è un\'impostazione critica memorizzata nelle configurazioni del firmware come Marlin, Klipper o RepRapFirmware.',
    },
    {
      type: 'paragraph',
      html: 'Se questa configurazione è anche solo leggermente errata, i movimenti fisici della stampante 3D non corrisponderanno alle istruzioni digitali generate dal software di slicing. Questa discrepanza porta a imprecisioni dimensionali negli oggetti stampati: i pezzi risultano più grandi o più piccoli del previsto, i fori risultano disallineati e gli assemblaggi multipezzo non si incastrano correttamente. Comprendere i componenti fisici, le caratteristiche del driver e i rapporti di trasmissione consente agli operatori di calcolare valori matematicamente perfetti anziché affidarsi a metodi di calibrazione per tentativi che introducono errori meccanici.',
    },
    {
      type: 'title',
      text: 'Confronto tra Specifiche dei Motori Passo-Passo e Attributi Meccanici',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'I motori passo-passo più comuni utilizzati nella stampa 3D sono i motori passo-passo ibridi nel formato NEMA 17. Questi motori sono generalmente disponibili in due varianti di angolo di passo: 1,8 gradi per passo e 0,9 gradi per passo. Un motore passo-passo da 1,8 gradi richiede 200 passi interi per completare una rotazione completa di 360 gradi. Un motore da 0,9 gradi richiede 400 passi interi per completare la stessa rotazione. La scelta tra queste specifiche influenza la precisione di posizionamento, la coppia massima e il rumore operativo del sistema di stampa.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Motore Passo Passo da 1,8 Gradi',
          description: 'Opzione motore standard per la maggior parte delle stampanti 3D commerciali. Offre una coppia robustad alle alte velocità ed ed economico.',
          points: [
            '200 passi interi per rivoluzione',
            'Migliore ritenzione della coppia ad alta velocità',
            'Minori requisiti di induttanza elettrica',
            'Risoluzione sufficiente per applicazioni FDM generali'
          ]
        },
        {
          title: 'Motore Passo Passo da 0,9 Gradi',
          description: 'Opzione motore ad alta precisione apprezzata per stampanti di dettaglio fine e sistemi di estrusione ad alta risoluzione.',
          points: [
            '400 passi interi per rivoluzione',
            'Doppia risoluzione meccanica prima del microstepping',
            'Errore di posizionamento ridotto e minori vibrazioni di risonanza',
            'Maggiore forza controelettromotrice allealte velocità che riduce il limite di coppia'
          ]
        }
      ],
      columns: 2,
    },
    {
      type: 'paragraph',
      html: 'Sebbene un motore da 0,9 gradi offra il doppio della capacità di posizionamento fisico, richiede il doppio degli impulsi di passo dal microcontrollore della scheda madre per raggiungere la stessa velocità di rotazione. Su piattaforme di stampa ad alta velocità con vecchi microcontrollori a 8 bit, ciò può saturare la coda di elaborazione e causare balbettii o limitazioni di velocità. Sui controllori moderni a 32 bit, questa limitazione è raramente un problema, rendendo i motori da 0,9 gradi un eccellente aggiornamento per gli assi X e Y quando la finitura superficiale è critica.',
    },
    {
      type: 'title',
      text: 'Glossario della Terminologia dei Motori Passo-Passo e dei Driver',
      level: 2,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Angolo di Passo',
          definition: 'La rotazione angolare dell\'albero motore quando si verifica una singola sequenza di eccitazione della bobina a passo intero, tipicamente 1,8 o 0,9 gradi.',
        },
        {
          term: 'Microstepping',
          definition: 'Metodo controllato dal driver che divide un singolo passo intero in sotto-passi più piccoli bilanciando la corrente tra le fasi del motore, smorzando il movimento e riducendo le vibrazioni.',
        },
        {
          term: 'Passo della Cinghia',
          definition: 'La distanza tra i centri di due denti adiacenti su una cinghia dentata sincrona, comunemente 2,0 millimetri per le cinghie GT2 utilizzate nella stampa 3D di consumo.',
        },
        {
          term: 'Avanzamento della Vite Madre',
          definition: 'La distanza lineare percorsa da un dado lungo la vite madre durante un giro completo di 360 gradi dell\'albero della vite.',
        },
        {
          term: 'Coppia di Tenuta',
          definition: 'La quantità massima di coppia che il motore può esercitare su un albero stazionario quando viene applicata la corrente nominale alle bobine.',
        },
        {
          term: 'Forza Controelettromotrice (Back-EMF)',
          definition: 'La tensione generata dalla rotazione delle bobine del motore all\'interno del campo magnetico, che si oppone alla tensione di alimentazione e limita la velocità e la coppia massime.',
        }
      ],
    },
    {
      type: 'title',
      text: 'Calcolo dei Passi per Millimetro per le Cinghie Dentate',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Per gli assi di movimento orizzontale (solitamente X e Y) delle stampanti 3D cartesiane, CoreXY e Delta, vengono utilizzate cinghie dentate sincrone per convertire il movimento di rotazione del motore passo-passo in movimento lineare. Il calcolo meccanico dipende interamente dal passo della cinghia e dal numero di denti sulla puleggia motrice collegata all\'albero del motore. Il profilo del dente della cinghia deve corrispondere al profilo del dente della puleggia per evitare giochi e slittamento.',
    },
    {
      type: 'table',
      headers: ['Dimensione Puleggia', 'Tipo Cinghia', 'Passo Cinghia', 'Passi/giro (1,8°, 16x)', 'Passi per mm (Metrico)', 'Passi per Pollice (Imperiale)'],
      rows: [
        ['16 Denti', 'GT2', '2,0 mm', '3200', '100,00 passi/mm', '2540,00 passi/in'],
        ['20 Denti', 'GT2', '2,0 mm', '3200', '80,00 passi/mm', '2032,00 passi/in'],
        ['32 Denti', 'GT2', '2,0 mm', '3200', '50,00 passi/mm', '1270,00 passi/in'],
        ['20 Denti', 'GT3', '3,0 mm', '3200', '53,33 passi/mm', '1354,67 passi/in'],
        ['16 Denti (0,9°)', 'GT2', '2,0 mm', '6400', '200,00 passi/mm', '5080,00 passi/in'],
        ['20 Denti (0,9°)', 'GT2', '2,0 mm', '6400', '160,00 passi/mm', '4064,00 passi/in']
      ],
    },
    {
      type: 'tip',
      title: 'Scelta Progettuale Pratica per la Selezione della Puleggia',
      html: 'Scegliere una puleggia da 16 denti invece di una da 20 denti aumenta la risoluzione meccanica del 25 per cento e la forza lineare esercitata sul carrello. Tuttavia, le pulegge più piccole costringono la cinghia a piegarsi con un raggio più stretto, il che può aumentare l\'usura della cinghia nel tempo e introdurre frequenze di vibrazione più elevate. Per le costruzioni standard, le pulegge da 20 denti rappresentano un compromesso equilibrato tra durata della cinghia e risoluzione.',
    },
    {
      type: 'title',
      text: 'Realtà del Microstepping: Perdite di Coppia e la Soluzione di Interpolazione',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Molti operatori credono che aumentare la risoluzione del microstepping del driver a valori elevati come 64, 128 o 256 migliorerà infinitamente la precisione della loro stampante 3D. Questa è una convinzione errata comune. In realtà, la coppia incrementale tra i micropassi diminuisce drasticamente all\'aumentare della divisione del microstepping. La corrente elettrica viene divisa in curve seno e coseno per posizionare l\'albero motore tra i poli fisici. Se l\'attrito esterno o il carico sull\'asse supera la coppia incrementale di un micropasso, l\'albero motore non si muoverà finché non si saranno accumulati diversi impulsi di micropasso.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Limitazione di Coppia del Microstepping Teorico vs Fisico',
      html: 'A 16 micromicropassi, la coppia incrementale per micropasso è pari a circa il 9,8 per cento della coppia di tenuta del motore. A 256 micropassi, la coppia incrementale scende a solo lo 0,6 per cento della coppia di tenuta. Qualsiasi piccolo grippaggio meccanico, squilibrio della tensione della cinghia o attrito del carrello impedirà facilmente il movimento fisico di 1/256 di passo, il che significa che un alto microstepping nativo non garantisce una reale precisione posizionale',
    },
    {
      type: 'card',
      title: 'Funzione di Interpolazione dei Driver Trinamic',
      html: 'I driver moderni come il TMC2208, il TMC2209 e il TMC5160 risolvono questo problema ricevendo comandi di passo con una risoluzione affidabile di 16 micropassi e interpolando internamente quei passi a 256 micropassi prima di eseguire le modifiche della corrente delle bobine. Questo fornisce il funzionamento fluido e silenzioso di 256 micropassi mantenendo al contempo la coppia di tenuta affidabile e il ridotto sovraccarico di elaborazione del controllore della configurazione a 16 micropassi. Nel firmware, mantieni la configurazione a 16 micropassi e lascia che sia il driver a gestire l\'interpolazione interna.',
    },
    {
      type: 'title',
      text: 'Calcolo dei Passi per Millimetro per le Viti Madri e le Barre Filettate dell\'Asse Z',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'L\'asse Z verticale della maggior parte delle stampanti 3D da scrivania utilizza viti madri o barre filettate filettate. Le viti madri sono progettate per la trasmissione di potenza e hanno profili di filettatura rettificati di precisione che minimizzano il gioco. Nel calcolare i passi per mm per una vite madre, il passo del filetto non deve essere confuso con l\'avanzamento. L\'avanzamento è la distanza lineare effettiva percorsa dal dado della vite madre durante una rotazione completa di 360 gradi della vite. L\'avanzamento si calcola moltiplicando il passo del filetto per il numero di principi del filetto.',
    },
    {
      type: 'list',
      items: [
        'Vite madre a principio singolo: Passo del filetto è 2 mm, conteggio principi è 1. L\'avanzamento è di 2 mm per rivoluzione.',
        'Vite madre a due principi: Passo del filetto è 2 mm, conteggio principi è 2. L\'avanzamento è di 4 mm per rivoluzione.',
        'Vite madre a quattro principi (T8x8 comune): Passo del filetto è 2 mm, conteggio principi è 4. L\'avanzamento è di 8 mm per revoluzione.',
        'Barre filettate metriche standard (es. M8): Principio singolo. L\'avanzamento è uguale al passo metrico standard, che è di 1,25 mm per rivoluzione.'
      ],
    },
    {
      type: 'paragraph',
      html: 'Poiché le viti madri hanno un vantaggio meccanico rispetto ai sistemi a cinghia, raggiungono valori di passi per mm molto più elevati, che indicano valori di risoluzione meccanica più piccoli. Questa alta risoluzione è fondamentale per gli assi Z perché gli strati vengono solitamente stampati con incrementi tra 0,1 mm e 0,3 mm. Un valore di passi per mm più elevato consente alla stampante di stabilire altezze di strato consistenti senza errori di posizionamento.',
    },
    {
      type: 'title',
      text: 'Riepilogo dei Passaggi Chiave per l\'Integrazione del Driver e del Motore',
      level: 2,
    },
    {
      type: 'summary',
      title: 'Pass Pratici per Configurare il Firmware della Tua Stampante',
      items: [
        'Identifica l\'angolo di passo del motore dalla scheda tecnica del produttore (solitamente 1,8 o 0,9 gradi).',
        'Determina le impostazioni di microstepping del driver configurate tramite ponticelli fisici o comandi UART software (16 è il valore raccomandato).',
        'Misura o verifica il passo della cinghia e conta i denti della puleggia per gli assi a cinghia.',
        'Verifica l\'avanzamento della vite madre (passo per numero di visualizzazioni video principi per l\'asse Z.',
        'Inserisci questi parametri nella nostra calcolatrice per ottenere il valore esatto di configurazione in passi/mm o passi/pollice.',
        'Scrivi i valori calcolati nei file di configurazione del firmware o salvali utilizzando comandi da terminale come M92.'
      ],
    },
  ],
  faq: [
    {
      question: 'Perché i miei passi/mm calcolati sono diversi dal risultato della mia calibrazione manuale?',
      answer: 'I passi/mm calcolati sono matematicamente esatti in base alla geometria fisica dei componenti. Se una calibrazione manuale suggerisce un valore diverso, di solito è perché l\'operatore ha misurato il filamento o la corsa dell\'asse con un calibro mentre il gioco meccanico, l\'elasticità della cinghia o lo slittamento dell\'estrusore introducevano errori. Dovresti sempre usare il valore calcolato matematicamente per gli assi di movimento e risolvere i problemi meccanici sottostanti invece di aggiustare i passi.',
    },
    {
      question: 'Cosa succede se imposto il valore di microstepping troppo alto nel firmware?',
      answer: 'Impostare il microstepping a 64, 128 o 256 nel firmware aumenta la richiesta di frequenza degli impulsi sulla scheda di controllo. Se la scheda madre non è in grado di generare impulsi di passo abbastanza velocemente, la stampante potrebbe bloccarsi, balbettare o limitare la velocità massima di spostamento spostamento.. È meglio usare 16 micropassi nel firmware con l\'interpolazione a livello di driver attivata.',
    },
    {
      question: 'Come posso modificare le impostazioni dei passi per mm sulla mia stampante 3D?',
      answer: 'Puoi modificare i valori temporaneamente usando il comando M92 seguito dalla lettera dell\'asse e dal valore (ad es., M92 X80.00 Y80.00 Z400.00). Per rendere questi valori permanenti, invia il comando M500 per salvarli nell\'EEPROM oppure modifica il file Configuration.h nel firmware Marlin e rifalla il flashing, oppure modifica il file printer.cfg in Klipper.',
    },
    {
      question: 'Qual è la differenza tra passo della cinghia e denti della puleggia?',
      answer: 'Il passo della cinghia è la distanza tra due denti consecutivi della cinghia, misurata da centro a centro. I denti della puleggia è il numero totale di denti fisici sull\'ingranaggio collegato all\'albero del motore. Moltiplicando il numero di denti per il passo si ottiene la distanza lineare totale percorsa per ogni rivoluzione del motore.',
    },
    {
      question: 'Posso usare valori di microstepping diversi per assi diversi?',
      answer: 'Sì, è possibile configurare valori di microstepping diversi per gli assi X, Y, Z ed E. Ad esempio, è molto comune usare 16 micropassi su X e Y, 16 micropassi su Z e 16 o 32 micropassi sull\'estrusore a seconda del rapporto di riduzione del gruppo estrusore.',
    }
  ],
  bibliography,
  howTo: [
    {
      name: 'Determina le Specifiche del Motore e del Driver',
      text: 'Trova l\'angolo di passo del tuo motore (tipicamente 1,8 o 0,9 gradi) e il valore di microstepping del tuo driver (16 è lo standard).',
    },
    {
      name: 'Determina i Dettagli della Trasmissione',
      text: 'Scegli tra trasmissione a cinghia (specifica il passo della cinghia e i denti della puleggia) e vite madre (specifica il\'avanzamento della vite).',
    },
    {
      name: 'Configura le Impostazioni del Firmware',
      text: 'Inserisci i valori, seleziona il sistema di unità preferito e copia il comando di configurazione dei passi generato nella configurazione della tua stampante.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Perché i miei passi/mm calcolati sono diversi dal risultato della mia calibrazione manuale?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'I passi/mm calcolati sono matematicamente esatti in base alla geometria fisica dei componenti. La calibrazione manuale introduce spesso errori dovuti alla tensione della cinghia o alla compressione del filamento.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Calcolatrice Microstepping per Driver Passo-Passo',
      description: 'Calcola i valori di configurazione dei passi e i limiti di risoluzione fisica per motori e driver di stampanti 3D.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Come calcolare i passi per mm di un motore passo-passo',
      step: [
        {
          '@type': 'HowToStep',
          text: 'Determina le Specifiche del Motore e del Driver',
        },
        {
          '@type': 'HowToStep',
          text: 'Determina i Dettagli della Trasmissione',
        },
        {
          '@type': 'HowToStep',
          text: 'Configura le Impostazioni del Firmware',
        },
      ],
    },
  ],
};