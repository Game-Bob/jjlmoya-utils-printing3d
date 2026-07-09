import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { BedThermalInertiaStabilizationCalculatorUI } from '../ui';

export const content: ToolLocaleContent<BedThermalInertiaStabilizationCalculatorUI> = {
  slug: 'calcolatore-stabilizzazione-inerzia-termica-piano-stampa',
  title: 'Calcolatore di Stabilizzazione per Inerzia Termica del Piano di Stampa',
  description: 'Stimare per quanto tempo far riposare un piano di stampa 3D riscaldato dopo aver raggiunto il setpoint, utilizzando materiale, spessore, temperatura target, potenza del riscaldatore e dimensioni del piano.',
  ui: {
    unitSystemLabel: 'Unità',
    metricLabel: 'Metriche',
    imperialLabel: 'US',
    materialLabel: 'Materiale del piano',
    borosilicateGlassLabel: 'Vetro borosilicato',
    peiSpringSteelLabel: 'Acciaio per molle PEI',
    aluminumLabel: 'Piastra in alluminio',
    thicknessLabel: 'Spessore piastra',
    targetTemperatureLabel: 'Temperatura target',
    heaterPowerLabel: 'Potenza riscaldatore',
    bedSizeLabel: 'Area riscaldata',
    presetsLabel: 'Preimpostazioni',
    enderPresetLabel: 'Vetro 235',
    voronPresetLabel: 'PEI 300',
    largePresetLabel: 'Alluminio 350',
    recommendedDelayLabel: 'Attesa prima della stampa',
    delayMarkerLabel: 'Attesa',
    warmupTimeLabel: 'Riscaldamento ideale',
    plateMassLabel: 'Massa piastra',
    energyStoredLabel: 'Calore accumulato',
    conductionLagLabel: 'Ritardo di conduzione',
    conductivityLabel: 'Conducibilità',
    readinessLabel: 'Prontezza',
    readinessQuick: 'ammollo rapido',
    readinessBalanced: 'ammollo normale',
    readinessSlow: 'ammollo lungo',
    controlsAriaLabel: 'Parametri di inerzia termica del piano riscaldato',
    resultsAriaLabel: 'Risultati di stabilizzazione del piano riscaldato',
    copyButton: 'Copia attesa',
    copiedButton: 'Copiato',
    copiedSummaryTemplate: 'Stima stabilizzazione: attendere {delay} s ({minutes} min) dopo setpoint; riscaldamento ideale circa {warmup} min, prontezza {readiness}.',
    thicknessUnitMetric: 'mm',
    thicknessUnitImperial: 'in',
    temperatureUnitMetric: '°C',
    temperatureUnitImperial: '°F',
    bedSizeUnitMetric: 'mm',
    bedSizeUnitImperial: 'in',
    wattsUnit: 'W',
    secondsUnit: 's',
    minutesUnit: 'min',
    kilogramsUnit: 'kg',
    poundsUnit: 'lb',
    wattHoursUnit: 'Wh',
    conductivityUnit: 'W/mK',
  },
  seo: [
    { type: 'title', text: 'Perché un piano riscaldato necessita di stabilizzazione dopo aver raggiunto il setpoint', level: 2 },
    {
      type: 'paragraph',
      html: 'Il display di una stampante mostra di solito la temperatura misurata vicino al termistore, non la temperatura esatta della superficie di stampa superiore. Su molte macchine il termistore è incollato sotto il riscaldatore, incassato nel supporto del piano o posizionato lontano dall\'area in cui inizia il primo strato. Il controllore può indicare <strong>60 °C</strong> mentre la parte superiore di una spessa lastra di vetro sta ancora raggiungendo la temperatura. Quel ritardo è l\'inerzia termica: la piastra immagazzina calore, lo sposta attraverso il suo spessore e perde calore verso l\'aria contemporaneamente.',
    },
    {
      type: 'paragraph',
      html: 'Il primo strato è insolitamente sensibile a questo ritardo perché l\'adesione dipende dalla viscosità del polimero, dall\'energia superficiale e dalla pressione di contatto. Un piano che si sta ancora riscaldando sulla superficie può causare il sollevamento degli angoli, linee di skirt dall\'aspetto secco o un offset Z apparentemente incoerente anche quando mesh e altezza ugello sono corretti. Attendere un intervallo di ammollo calcolato dopo che il piano ha raggiunto il setpoint è spesso più ripetibile che aumentare il setpoint in modo casuale.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '1,2', label: 'W/mK conducibilità tipica del vetro borosilicato' },
        { value: '16', label: 'W/mK conducibilità approssimativa dell\'acciaio per molle' },
        { value: '205', label: 'W/mK conducibilità approssimativa dell\'alluminio' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Il ritardo è una stima superficiale, non un sostituto dell\'autotune PID',
      html: 'La regolazione PID controlla come il riscaldatore segue il termistore. La stabilizzazione termica stima quanto tempo la superficie di stampa impiega per avvicinarsi al setpoint controllato dal termistore. Un anello PID ben regolato può comunque necessitare di un ritardo di ammollo quando il piano è spesso, scarsamente conduttivo o debolmente accoppiato al riscaldatore.',
    },
    { type: 'title', text: 'La scelta del materiale domina l\'inerzia termica del piano', level: 2 },
    {
      type: 'paragraph',
      html: 'Il calcolatore tratta il materiale come un input rigoroso perché vetro, acciaio per molle PEI e alluminio non sono sistemi termici intercambiabili. Il vetro borosilicato ha una bassa conducibilità termica e una capacità termica significativa, quindi la superficie superiore può rimanere indietro rispetto al lato riscaldante per un periodo notevole. L\'acciaio per molle è più sottile e conduce meglio del vetro, quindi di solito si equalizza più velocemente anche se è denso. L\'alluminio conduce il calore estremamente bene, motivo per cui i piani in alluminio fuso o lavorato sono preferiti sulle stampanti più grandi, ma una spessa piastra di alluminio può comunque immagazzinare molta energia.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Vetro borosilicato',
          description: 'La bassa conducibilità e la moderata capacità termica creano il ritardo superficiale più lungo, specialmente a spessori di 3-5 mm.',
          points: ['Buona planarità se ben supportato', 'Risposta superficiale lenta', 'Sensibile a clip e contatto locale del riscaldatore'],
        },
        {
          title: 'Acciaio per molle PEI',
          description: 'Le lamiere sottili in acciaio rispondono più velocemente e di solito necessitano di meno riposo, ma le basi magnetiche e gli strati adesivi aggiungono resistenza di contatto.',
          highlight: true,
          points: ['Ammollo pratico rapido', 'Cambio superficie facile', 'L\'insieme magnete-adesivo conta comunque'],
        },
        {
          title: 'Piastra in alluminio',
          description: 'L\'elevata conducibilità distribuisce rapidamente il calore sul piano; spessore e potenza del riscaldatore diventano i principali fattori di ritardo.',
          points: ['Eccellente distribuzione laterale del calore', 'Elevata energia immagazzinata su piani grandi', 'Ottimale quando la copertura del riscaldatore è uniforme'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Superficie di stampa', 'Comportamento termico', 'Problema di stabilizzazione tipico', 'Risposta pratica del primo strato'],
      rows: [
        ['Vetro borosilicato 4 mm', 'Conduzione lenta attraverso lo spessore', 'La superficie è in ritardo sul termistore', 'Aspettare più a lungo prima di sondare o stampare'],
        ['Acciaio PEI 0,4-0,6 mm', 'Lamina conduttiva sottile', 'L\'interfaccia magnete/adesivo controlla il ritardo', 'Di solito basta un breve ammollo'],
        ['Alluminio 5-8 mm', 'Conduzione rapida ma calore immagazzinato elevato', 'Grande massa che richiede tempo per l\'equilibrio', 'Usare un ammollo costante su piani grandi'],
        ['Impilamenti compositi', 'Le interfacce degli strati dominano', 'Traferri e adesivi aggiungono resistenza termica', 'Misurare la temperatura superficiale reale quando possibile'],
      ],
    },
    {
      type: 'tip',
      title: 'Non riutilizzare il ritardo del vetro per l\'acciaio PEI',
      html: 'Un ritardo corretto per una piastra di borosilicato da 4 mm può essere eccessivo per una lamiera in acciaio PEI da 0,5 mm. Al contrario, un ritardo per lamiera PEI può essere troppo breve per il vetro e far sembrare il primo strato un problema di offset Z.',
    },
    { type: 'title', text: 'Come lo spessore modifica il tempo di riscaldamento e il ritardo superficiale', level: 2 },
    {
      type: 'paragraph',
      html: 'Lo spessore influisce su due parti diverse del processo. Primo, una piastra più spessa ha più massa, quindi richiede più energia per aumentare la sua temperatura media. Secondo, il calore deve diffondersi attraverso un percorso più lungo prima che la superficie segua il lato riscaldante. Il calcolatore stima sia l\'energia di riscaldamento ideale sia un ritardo di diffusione attraverso la piastra, quindi li combina in un\'attesa consigliata dopo che la stampante segnala che il piano ha raggiunto il setpoint.',
    },
    {
      type: 'paragraph',
      html: 'La relazione non è lineare per il ritardo superficiale. Il tempo di diffusione aumenta con il quadrato dello spessore, motivo per cui un piccolo cambiamento da 3 mm a 4 mm di vetro può contare più del previsto. Una lamiera d\'acciaio molto sottile può equalizzarsi rapidamente, ma la base magnetica, la pellicola adesiva, il rivestimento PEI e l\'aria intrappolata possono comunque rallentare il trasferimento reale. Sui piani in alluminio, la piastra stessa distribuisce rapidamente il calore, ma il piano può rimanere globalmente instabile se la copertura del riscaldatore è irregolare o la piastra è grande.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Inerzia termica', definition: 'La tendenza di una piastra a resistere ai cambiamenti di temperatura perché ha massa e capacità termica.' },
        { term: 'Diffusività termica', definition: 'Una proprietà del materiale che combina conducibilità, densità e capacità termica per descrivere quanto velocemente i cambiamenti di temperatura si muovono attraverso di esso.' },
        { term: 'Ammollo termico', definition: 'Un\'attesa deliberata dopo aver raggiunto il setpoint in modo che superficie, riscaldatore, supporto e insieme del piano si avvicinino a uno stato più stabile.' },
        { term: 'Resistenza di contatto', definition: 'Resistenza termica extra causata da contatto imperfetto, strati adesivi, magneti, clip, traferri o superfici deformate.' },
        { term: 'Superamento del setpoint', definition: 'Un evento di controllo in cui la temperatura del termistore supera il target prima di stabilizzarsi, spesso non correlato alla temperatura superficiale.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Regole pratiche sullo spessore',
      items: [
        'Le lamiere sottili in acciaio PEI di solito si stabilizzano rapidamente una volta che riscaldatore e base magnetica sono caldi.',
        'Le piastre di vetro sopra i 3 mm meritano un vero ritardo prima che inizino le manovre del primo strato.',
        'Le grandi piastre in alluminio possono necessitare di ammollo a causa della massa totale anche quando la conduzione è eccellente.',
        'I traferri sotto le superfici rimovibili possono dominare il calcolo; pulire le superfici di contatto e posizionare la piastra in modo coerente.',
      ],
    },
    { type: 'title', text: 'Potenza del riscaldatore, dimensioni del piano e calore immagazzinato', level: 2 },
    {
      type: 'paragraph',
      html: 'La potenza del riscaldatore determina la velocità con cui l\'energia può entrare nell\'insieme del piano. Un riscaldatore da 220 W sotto un piano in vetro da 235 mm ha una densità di potenza molto diversa da un riscaldatore in silicone da 600 W sotto una piastra in alluminio da 300 mm. Il calcolatore utilizza potenza, temperatura target, area del piano e massa della piastra per stimare il tempo di riscaldamento ideale. Applica quindi una componente di stabilizzazione perché la superficie di solito continua a cambiare dopo che il sistema controllato dal termistore ha raggiunto il target per la prima volta.',
    },
    {
      type: 'paragraph',
      html: 'La potenza non è una cura per una scarsa distribuzione del calore. Un riscaldatore potente può alzare rapidamente il termistore mentre bordi, clip o zone non supportate restano indietro. Le stampanti grandi dovrebbero considerare la copertura del riscaldatore, l\'isolamento, il montaggio del piano, la temperatura della camera e se il probing inizia immediatamente dopo l\'evento di setpoint. Per ABS, ASA, nylon e altri materiali caldi, un piano e una camera stabili sono spesso più importanti che raggiungere semplicemente un\'alta temperatura numerica del piano.',
    },
    {
      type: 'table',
      headers: ['Sintomo', 'Probabile causa termica', 'Regolazione da provare'],
      rows: [
        ['Prime linee di skirt opache o che aderiscono a malapena', 'La superficie è ancora più fredda del termistore', 'Aumentare il ritardo di stabilizzazione prima del primo strato'],
        ['Il centro aderisce ma gli angoli si sollevano', 'Temperatura superficiale irregolare o perdite ai bordi', 'Aggiungere isolamento, verificare copertura riscaldatore, attendere di più'],
        ['La mesh di probing cambia tra esecuzioni a freddo e a caldo', 'L\'insieme del piano si sta ancora espandendo o rilassando', 'Ammollo prima del probing, non solo prima della stampa'],
        ['Il grafico PID sembra stabile ma l\'adesione varia', 'Il controllore è stabile al sensore, non alla superficie', 'Usare un ritardo superficiale e verificare con un termometro a contatto'],
      ],
    },
    {
      type: 'card',
      title: 'Perché l\'output è un ritardo dopo il setpoint',
      html: 'La stampante gestisce già la salita alla temperatura target. Questo calcolatore risponde a una domanda più specifica sul primo strato: una volta che il display dice che il piano è pronto, quanti secondi extra deve riposare la superficie prima che inizi l\'estrusione?',
    },
    { type: 'title', text: 'Autotune PID vs stabilizzazione reale della superficie del piano', level: 2 },
    {
      type: 'paragraph',
      html: 'L\'autotune PID del piano è prezioso perché riduce l\'oscillazione al sensore misurato. Non può rimuovere la fisica di una piastra spessa o poco conduttiva. Una superficie in vetro può ancora essere in ritardo mentre il sensore inferiore sembra stabile. Una lamiera d\'acciaio per molle può sembrare stabile rapidamente, ma una base magnetica fredda può continuare a sottrarre calore. Il flusso di lavoro più ripetibile è regolare il controllore, usare un ritardo del piano sensato e iniziare la calibrazione del primo strato solo dopo che l\'insieme del piano è termicamente ripetibile.',
    },
    {
      type: 'proscons',
      title: 'Iniziare immediatamente vs attendere la stabilizzazione',
      items: [
        { pro: 'Iniziare immediatamente riduce il tempo totale di stampa.', con: 'Il primo strato potrebbe essere stampato su una superficie al di sotto della temperatura prevista.' },
        { pro: 'Un ritardo calcolato migliora la ripetibilità tra le stampe.', con: 'Aggiunge tempo di inattività, specialmente su vetro e grandi piani in alluminio.' },
        { pro: 'L\'ammollo prima del probing può ridurre la deriva della mesh.', con: 'Ammolli molto lunghi possono sprecare energia se il materiale scelto non li richiede.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Non mascherare il ritardo termico con una compressione eccessiva',
      html: 'Se il primo strato aderisce solo con un offset Z aggressivamente basso, la superficie del piano potrebbe essere più fredda del previsto. Una compressione eccessiva può nascondere il problema termico causando piede d\'elefante, sfregamento dell\'ugello e texture superficiale ruvida.',
    },
    {
      type: 'message',
      title: 'Migliore sequenza di calibrazione',
      html: 'Riscaldare il piano, attendere il ritardo calcolato, eseguire il probing della mesh (se la stampante esegue probing a caldo), quindi regolare l\'altezza del primo strato. Calibrare l\'offset Z su un insieme di piano instabile renderà la stampa successiva incoerente anche se nessuna impostazione meccanica è cambiata.',
    },
    { type: 'title', text: 'Come usare il tempo di stabilizzazione nel G-code di avvio', level: 2 },
    {
      type: 'paragraph',
      html: 'Il ritardo consigliato può essere usato manualmente o inserito nel G-code di avvio. Un flusso semplice consiste nel riscaldare il piano con <code>M190</code>, attendere il numero calcolato di secondi con un comando di pausa, quindi continuare con probing, riscaldamento ugello, spurgo e stampa. Alcuni utenti preferiscono riscaldare prima il piano, iniziare il riscaldamento della camera o il preriscaldamento dell\'ugello durante l\'ammollo, ed eseguire il probing solo dopo che il piano ha smesso di derivare.',
    },
    {
      type: 'list',
      items: [
        'Usare lo stesso ritardo quando si confrontano filamenti in modo che i test di adesione siano equi.',
        'Applicare ritardi più lunghi per vetro, temperature elevate del piano, piastre grandi o ambienti freddi.',
        'Applicare ritardi più brevi per lamiere sottili in acciaio quando la base magnetica è già calda.',
        'Eseguire il probing dopo l\'ammollo se la mesh cambia con la temperatura.',
        'Ricalcolare dopo aver cambiato materiale della piastra, spessore, potenza del riscaldatore o dimensioni del piano.',
      ],
    },
    {
      type: 'tip',
      title: 'Usare la prima stampa del giorno come caso di riferimento',
      html: 'Una seconda stampa iniziata immediatamente dopo un lavoro finito parte con un insieme di piano caldo e potrebbe richiedere meno attesa. Per la calibrazione, valutare il ritardo da una stampante fredda perché è la condizione con più probabilità di rivelare il ritardo termico.',
    },
    {
      type: 'diagnostic',
      variant: 'success',
      title: 'Un buon ritardo rende noiosa la regolazione del primo strato',
      html: 'Quando l\'ammollo è corretto, la forma dello skirt, la lucentezza delle linee, l\'adesione degli angoli e la compensazione della mesh diventano più ripetibili da una stampa all\'altra. Non si dovrebbe dover inseguire l\'offset Z ogni volta che la macchina parte da fredda.',
    },
    { type: 'title', text: 'Misurare e migliorare la stabilizzazione reale del piano', level: 2 },
    {
      type: 'paragraph',
      html: 'Il calcolatore è volutamente pratico, ma la migliore validazione è una misurazione superficiale. Una termocoppia a contatto applicata sulla superficie di stampa, una sonda sottile sotto un foglio sacrificale o un termometro a infrarossi calibrato con emissività nota possono rivelare quanto tempo impiega la superficie a stabilizzarsi. Le letture a infrarossi su vetro, PEI e metallo lucido possono essere fuorvianti, quindi utilizzare punti di misurazione consistenti ed evitare di confrontare diverse finiture superficiali come se avessero la stessa emissività.',
    },
    {
      type: 'paragraph',
      html: 'Le prestazioni termiche possono spesso essere migliorate senza modificare il firmware. Isolare il lato inferiore riduce la perdita di calore e accorcia il riscaldamento. Pulire il foglio magnetico e la piastra flessibile migliora il contatto. Sostituire clip deboli, appiattire piastre deformate ed evitare il contatto parziale del riscaldatore riducono i campi di temperatura irregolari. Le stampanti chiuse beneficiano di una camera più calda, ma il calore della camera cambia anche cinghie, componenti del portale e comportamento del probing, quindi le routine termiche dovrebbero essere ripetibili piuttosto che improvvisate.',
    },
    {
      type: 'table',
      headers: ['Miglioramento o abitudine', 'Effetto sulla stabilizzazione', 'Attenzione'],
      rows: [
        ['Isolamento inferiore', 'Meno perdita di calore ed equilibrio più rapido', 'Mantenere cavi e adesivi classificati per la temperatura del piano'],
        ['Migliore copertura del riscaldatore', 'Temperatura superficiale più uniforme', 'Evitare bolle e scarsa adesione del riscaldatore in silicone'],
        ['Posizionamento coerente della piastra rimovibile', 'Minore variazione della resistenza di contatto', 'Polvere o briciole di filamento possono creare punti freddi locali'],
        ['Probing mesh a caldo dopo ammollo', 'La mesh riflette la forma espansa del piano', 'Il supporto della sonda e la testa devono essere anch\'essi termicamente stabili'],
      ],
    },
    {
      type: 'summary',
      title: 'Elenco di verifica pratico per la stabilizzazione',
      items: [
        'Selezionare il materiale effettivo della piastra; vetro, acciaio e alluminio richiedono ritardi diversi.',
        'Inserire spessore e potenza del riscaldatore anziché affidarsi ai nomi dei modelli di stampante.',
        'Usare il ritardo calcolato dopo che il piano segnala il setpoint, specialmente prima della calibrazione del primo strato.',
        'Misurare la superficie se i problemi di adesione persistono nonostante un grafico PID stabile.',
        'Riverificare il ritardo dopo aver cambiato piastre, magneti, isolamento, riscaldatori o dimensioni del piano.',
      ],
    },
  ],
  faq: [
    {
      question: 'Perché attendere dopo che il piano ha raggiunto la temperatura target?',
      answer: 'Il termistore può raggiungere il setpoint prima che la superficie superiore di stampa si sia completamente riscaldata. L\'attesa consente a piastra, rivestimento, base magnetica e insieme del riscaldatore di avvicinarsi a una temperatura più stabile.',
    },
    {
      question: 'Il vetro necessita di più tempo di stabilizzazione dell\'acciaio PEI?',
      answer: 'Di solito sì. Il vetro borosilicato ha una conducibilità termica molto più bassa ed è spesso più spesso, quindi la superficie è più in ritardo rispetto a una sottile lamiera d\'acciaio PEI.',
    },
    {
      question: 'È la stessa cosa dell\'autotune PID?',
      answer: 'No. L\'autotune PID controlla il comportamento del riscaldatore al sensore. Questo calcolatore stima quanto tempo la superficie di stampa reale deve riposare dopo che il piano controllato dal sensore ha raggiunto il setpoint.',
    },
    {
      question: 'Devo sondare prima o dopo l\'ammollo termico?',
      answer: 'Se la mesh cambia quando il piano si riscalda, sondare dopo che il piano si è stabilizzato. Questo rende la mesh più vicina alla forma utilizzata durante il primo strato.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Scegliere il materiale del piano', text: 'Selezionare vetro borosilicato, acciaio per molle PEI o alluminio in modo che il calcolo utilizzi la conducibilità e la capacità termica corrette.' },
    { name: 'Inserire l\'insieme fisico del piano', text: 'Aggiungere spessore della piastra, area riscaldata, temperatura target e potenza del riscaldatore.' },
    { name: 'Leggere il ritardo consigliato', text: 'Usare l\'attesa prima della stampa dopo che la stampante segnala che il piano ha raggiunto il setpoint.' },
    { name: 'Applicarlo coerentemente', text: 'Usare lo stesso ritardo di ammollo prima del probing o della calibrazione del primo strato per risultati ripetibili.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Calcolatore di Stabilizzazione per Inerzia Termica del Piano di Stampa',
      description: 'Stimare il ritardo di stabilizzazione della superficie di un piano riscaldato per stampa 3D da materiale, spessore, temperatura, potenza del riscaldatore e dimensioni del piano.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Perché attendere dopo che il piano ha raggiunto la temperatura target?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Il termistore può raggiungere il setpoint prima che la superficie superiore di stampa si sia completamente riscaldata, quindi un ritardo di ammollo migliora la ripetibilità del primo strato.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Come stimare il ritardo di stabilizzazione del piano di una stampante 3D',
      step: [
        { '@type': 'HowToStep', text: 'Selezionare il materiale del piano.' },
        { '@type': 'HowToStep', text: 'Inserire spessore, temperatura target, potenza del riscaldatore e dimensioni del piano.' },
        { '@type': 'HowToStep', text: 'Attendere il ritardo consigliato dopo che il piano ha raggiunto il setpoint.' },
        { '@type': 'HowToStep', text: 'Sondare o stampare dopo che l\'insieme del piano si è stabilizzato.' },
      ],
    },
  ],
};
