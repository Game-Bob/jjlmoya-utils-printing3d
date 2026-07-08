import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ChemicalSmoothingTimeSimulatorUI } from '../ui';

export const content: ToolLocaleContent<ChemicalSmoothingTimeSimulatorUI> = {
  slug: 'calcolatore-tempo-lisciatura-chimica-abs-pvb',
  title: 'Calcolatore del Tempo di Lisciatura Chimica con Vapore di Acetone per ABS e Alcol Isopropilico per PVB',
  description: 'Stima il tempo conservativo di esposizione al vapore e di asciugatura per la lisciatura chimica di ABS con acetone o di PVB con alcol isopropilico in base al volume della camera, temperatura, volume del pezzo e dettaglio superficiale.',
  ui: {
    unitSystemLabel: 'Unità',
    metricLabel: 'Metrico',
    imperialLabel: 'US',
    materialLabel: 'Materiale',
    absLabel: 'ABS + acetone',
    pvbLabel: 'PVB + alcol isopropilico',
    chamberVolumeLabel: 'Camera vapore',
    chamberTemperatureLabel: 'Temp. camera',
    partVolumeLabel: 'Volume pezzo',
    surfaceDetailLabel: 'Dettaglio superficie',
    fineDetailLabel: 'Dettagli fini',
    balancedDetailLabel: 'Equilibrato',
    coarseDetailLabel: 'Linee strato marcate',
    presetsLabel: 'Preimpostazioni',
    miniPresetLabel: 'Mini',
    displayPresetLabel: 'Pezzo espositivo',
    enclosurePresetLabel: 'Grande contenitore',
    exposureLabel: 'Esposizione stimata',
    dryTimeLabel: 'Asciugatura post-lisciatura',
    firstTrialLabel: 'Prima prova',
    riskLabel: 'Rischio dettaglio',
    vaporMapLabel: 'Intensità vapore',
    chamberUnitMetric: 'L',
    chamberUnitImperial: 'gal',
    temperatureUnitMetric: '°C',
    temperatureUnitImperial: '°F',
    partUnitMetric: 'cm³',
    partUnitImperial: 'in³',
    secondsUnit: 's',
    minutesUnit: 'min',
    hoursUnit: 'h',
    controlsAriaLabel: 'Input lisciatura chimica',
    resultsAriaLabel: 'Risultati lisciatura chimica',
    recommendationGentle: 'finestra delicata',
    recommendationStandard: 'osservare attentamente',
    recommendationAggressive: 'alto rischio di perdita dettaglio',
    safetyNote: 'Usalo solo come stima conservativa di pianificazione. Il vapore di solvente è infiammabile e pericoloso: lavora lontano da fonti di ignizione, usa ventilazione e DPI, e inizia con una breve esposizione di prova.',
    copyButton: 'Copia piano lisciatura',
    copiedButton: 'Copiato',
    copiedSummaryTemplate: 'Stima lisciatura chimica: {minutes} min ({seconds} s) di esposizione, prima prova a {trialSeconds} s, asciugare per circa {dryHours} h.',
  },
  seo: [
    { type: 'title', text: 'Come stimare il tempo di lisciatura a vapore di acetone per ABS senza fondere i dettagli', level: 2 },
    {
      type: 'paragraph',
      html: 'La lisciatura a vapore di acetone per ABS è un processo controllato di dissoluzione superficiale. Il vapore di acetone ammorbidisce la pelle esterna dell\'ABS, consentendo ai segni visibili degli strati FDM di rilassarsi in una superficie più lucida. La finestra utile è stretta: un\'esposizione troppo scarsa lascia le linee di strato invariate, mentre un\'esposizione eccessiva arrotonda i bordi, ammorbidisce il testo in rilievo, chiude piccoli fori e può far incurvare le pareti sottili. Una stima del tempo è quindi meglio trattata come una <strong>finestra di partenza per prove brevi</strong>, non come una ricetta fissa.',
    },
    {
      type: 'paragraph',
      html: 'Il calcolatore utilizza cinque variabili pratiche che influenzano fortemente la durata della lisciatura: la coppia polimero-solvente, il volume della camera, la temperatura della camera, il volume del pezzo stampato e il livello di dettaglio superficiale. La temperatura è importante perché la pressione di vapore e l\'attività del solvente aumentano rapidamente man mano che la camera si riscalda. Le dimensioni del pezzo sono importanti perché i pezzi più grandi presentano più superficie e massa termica. Il livello di dettaglio è importante perché il dente di un ingranaggio in miniatura, un logo o una linguetta a scatto possono essere rovinati da un tempo che sembra perfetto su un semplice contenitore rettangolare.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '30-35%', label: 'prima prova sensata del tempo stimato' },
        { value: 'ABS/PVB', label: 'polimeri stampabili comuni per lisciatura a vapore' },
        { value: 'ore', label: 'tempo di asciugatura prima di maneggiare o assemblare' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'La lisciatura a vapore è un\'operazione di finitura, non un passo di calibrazione dimensionale',
      html: 'Se un pezzo stampato deve ospitare un cuscinetto, una filettatura, una guarnizione, uno scatto a pressione o un inserto, maschera l\'area critica o verifica il processo di lisciatura su una copia di sacrificio. La lisciatura chimica modifica i bordi e può alterare le tolleranze funzionali.',
    },
    { type: 'title', text: 'ABS con acetone vs PVB con alcol isopropilico per lisciatura a vapore', level: 2 },
    {
      type: 'paragraph',
      html: 'L\'ABS viene solitamente lisciato con acetone perché l\'acetone è un solvente efficace per la superficie dell\'acrilonitrile butadiene stirene. Il PVB, spesso venduto come filamento destinato a stampe trasparenti o lucide, viene comunemente lisciato con alcol isopropilico. L\'obiettivo visivo è simile, ma il comportamento del processo è diverso. L\'ABS con acetone può diventare lucido e arrotondato rapidamente, specialmente in una camera calda. Il PVB con alcol isopropilico è spesso più indulgente per lo sviluppo graduale della lucentezza, ma può ancora perdere nitidezza se esposto troppo a lungo.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'ABS con vapore di acetone',
          description: 'Azione di lisciatura rapida e forte con alto rischio di ammorbidire testo piccolo, angoli, perni e pareti sottili quando la camera è calda.',
          points: ['Ideale per gusci visibili e accessori', 'Sensibile alla temperatura', 'Necessita lunga degassificazione prima dell\'uso in spazi chiusi'],
        },
        {
          title: 'PVB con vapore di alcol isopropilico',
          description: 'Spesso scelto per parti visive lucide e stampe traslucide dove si desidera una risposta di lisciatura più lenta e controllabile.',
          highlight: true,
          points: ['Utile per pezzi espositivi', 'Può preservare meglio i dettagli con cicli brevi', 'Asciugare completamente prima di lucidare o imballare'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Materiale', 'Solvente tipico', 'Carattere del processo', 'Modalità di guasto principale'],
      rows: [
        ['ABS', 'Acetone', 'Ammorbidimento superficiale rapido e lucentezza intensa', 'Bordi arrotondati, pareti sottili incurvate, fori chiusi'],
        ['PVB', 'Alcol isopropilico', 'Lucentezza più graduale e riduzione della velatura', 'Superficie appiccicosa, texture sbavata, dettaglio fine ammorbidito'],
        ['ASA', 'Acetone o altri solventi', 'Famiglia simile all\'ABS ma dipendente dalla formulazione', 'I pezzi resistenti ai UV possono ancora perdere bordi nitidi'],
        ['PLA/PETG', 'Non adatto a questo calcolatore', 'I solventi comuni non si comportano come la lisciatura ABS/PVB', 'Finitura scadente o sperimentazione pericolosa con solventi'],
      ],
    },
    {
      type: 'tip',
      title: 'Usa l\'impostazione del materiale come coppia di solventi, non solo come nome della plastica',
      html: 'Seleziona ABS quando il processo è lisciatura a vapore di acetone e PVB quando è lisciatura a vapore di alcol isopropilico. Diverse miscele di filamento, additivi, pigmenti e storia di ricottura possono modificare la risposta reale, quindi prova con la bobina esatta usata per la stampa finale.',
    },
    { type: 'title', text: 'Perché il volume della camera modifica la durata della lisciatura chimica', level: 2 },
    {
      type: 'paragraph',
      html: 'Il volume della camera influenza la rapidità con cui si accumula la concentrazione di vapore e l\'uniformità con cui circonda il pezzo stampato. Un piccolo barattolo può diventare aggressivo rapidamente perché una piccola quantità di solvente occupa un piccolo spazio di testa. Una camera più grande di solito richiede più tempo per raggiungere lo stesso ambiente di vapore efficace, ma può essere più uniforme se la fonte di solvente è distribuita e il pezzo è sollevato sopra il contatto con il liquido. Il calcolatore aumenta il tempo di esposizione dolcemente all\'aumentare del volume della camera, perché la relazione è reale ma non perfettamente lineare nelle configurazioni di finitura domestiche.',
    },
    {
      type: 'paragraph',
      html: 'L\'uniformità conta tanto quanto la concentrazione media. Un pezzo posizionato troppo vicino a un panno imbevuto di solvente, una pozzanghera o una piastra riscaldata può subire un attacco direzionale: una faccia diventa lucida e morbida mentre il lato opposto rimane opaco. Una camera più alta può anche creare gradienti, specialmente se il vapore si condensa sul coperchio e gocciola. L\'interpretazione più sicura di un tempo calcolato è quindi un intervallo di ispezione programmato: rimuovi il pezzo, ispeziona la lucentezza umida e fermati prima che le caratteristiche nitide inizino a fluire.',
    },
    {
      type: 'list',
      items: [
        'Solleva il pezzo su un supporto resistente ai solventi in modo che non tocchi mai il solvente liquido.',
        'Mantieni le fonti assorbenti di solvente lontane dalla superficie del modello per evitare sovraesposizione unilaterale.',
        'Usa una camera abbastanza grande da permettere al vapore di circolare attorno a tutte le facce visibili.',
        'Evita la condensa che gocciola dal coperchio; le gocce creano segni, crateri e punti lucidi.',
        'Non aumentare la quantità di solvente all\'infinito per compensare una camera grande; concentrazione e rischio di sicurezza aumentano insieme.',
      ],
    },
    {
      type: 'card',
      title: 'Una camera più grande non è automaticamente più sicura',
      html: 'Grandi volumi sigillati possono contenere più vapore infiammabile. Una camera più grande può rallentare la lisciatura, ma può anche creare un\'atmosfera pericolosa più ampia. Usa la camera pratica più piccola che dia al pezzo spazio libero ed esposizione uniforme.',
    },
    { type: 'title', text: 'Temperatura, pressione di vapore e perdita di dettaglio', level: 2 },
    {
      type: 'paragraph',
      html: 'La temperatura è uno degli input più forti perché l\'evaporazione del solvente aumenta man mano che la camera si riscalda. Pochi gradi possono cambiare la finitura da una lenta lisciatura satinata a un rapido brillamento e arrotondamento dei bordi. Il vapore di acetone caldo attorno all\'ABS è particolarmente spietato: la superficie può passare da opaca a dall\'aspetto umido a ammorbidita in un breve intervallo. Il calcolatore accorcia il tempo di esposizione all\'aumentare della temperatura della camera e aumenta il punteggio di rischio quando le temperature salgono sopra un riferimento ambiente normale.',
    },
    {
      type: 'paragraph',
      html: 'Il riscaldamento attivo è il punto in cui molti processi di lisciatura hobbistica diventano pericolosi. I vapori di acetone e alcol isopropilico sono infiammabili, e riscaldatori improvvisati, interruttori, relè, scintille, piastre calde ed elettronica mal sigillata possono creare un serio rischio di incendio. Se la temperatura è controllata, dovrebbe essere fatta con apparecchiature progettate per contesti di vapore pericoloso, non con un riscaldatore esposto all\'interno di un contenitore sigillato. Per la maggior parte degli utenti, la lisciatura a temperatura ambiente con brevi ispezioni è il flusso di lavoro più difendibile.',
    },
    {
      type: 'table',
      headers: ['Condizione camera', 'Comportamento previsto', 'Risposta pratica'],
      rows: [
        ['Stanza fresca sotto 18 °C', 'Azione lenta del vapore e lucentezza ritardata', 'Usa intervalli più lunghi ma controlla la condensa irregolare'],
        ['Temperatura ambiente 20-25 °C', 'Base prevedibile per la maggior parte dei test', 'Inizia con la stima del calcolatore e la prima prova'],
        ['Camera calda 26-32 °C', 'Ammorbidimento più rapido e rischio dettaglio maggiore', 'Accorcia i cicli ed evita parti funzionali delicate'],
        ['Camera calda o riscaldata attivamente', 'Ambiente di vapore molto aggressivo', 'Non improvvisare; rischio di incendio e sovraesposizione aumentano drasticamente'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Non usare mai fiamme libere o elementi riscaldanti esposti',
      html: 'I vapori di acetone e alcol isopropilico possono incendiarsi. Tieni le camere di lisciatura lontane da fiamme, scintille, utensili caldi, interruttori che producono archi, motori a spazzole, riscaldatori non classificati per servizio vapore e manipolazione soggetta a staticità.',
    },
    { type: 'title', text: 'Volume del pezzo, superficie e sensibilità geometrica', level: 2 },
    {
      type: 'paragraph',
      html: 'L\'input chiamato volume del pezzo è un indicatore pratico delle dimensioni complessive del pezzo. Non è un sostituto perfetto dell\'area superficiale, ma è facile da stimare dalle statistiche dello slicer e di solito indica se la stampa è un piccolo pulsante, una figurina espositiva o un grande pannello di contenitore. I pezzi più grandi spesso necessitano di un\'esposizione più lunga per sviluppare una finitura visiva uniforme, ma hanno anche più bordi, angoli e sezioni sottili che possono mostrare un assorbimento irregolare del solvente.',
    },
    {
      type: 'paragraph',
      html: 'La geometria può dominare il risultato. Un vaso cilindrico liscio e un supporto a traliccio possono avere lo stesso volume ma una tolleranza alla lisciatura completamente diversa. Nervature sottili, lettere in rilievo marcate, piccoli fori, canali interni, code di rondine e clip si ammorbidiscono più velocemente delle grandi superfici piane. Quando il pezzo ha geometria critica, usa l\'impostazione di dettaglio fine anche se le linee di strato sono visibili, poi ripeti cicli brevi invece di tentare una lunga esposizione.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Lisciatura a vapore', definition: 'Un processo di finitura dove il vapore di solvente ammorbidisce solo la superficie esterna di una stampa polimerica.' },
        { term: 'Sovraesposizione', definition: 'Un intervallo di lisciatura abbastanza lungo da arrotondare i dettagli, deformare pareti sottili o lasciare una superficie appiccicosa.' },
        { term: 'Degassificazione', definition: 'Il periodo dopo la lisciatura in cui il solvente assorbito evapora dalla superficie ammorbidita.' },
        { term: 'Dettaglio superficiale', definition: 'Piccola geometria come testo, texture, fori, creste, clip e bordi taglienti che può essere persa durante la lisciatura.' },
        { term: 'Provino di sacrificio', definition: 'Una piccola stampa di prova realizzata con lo stesso filamento e impostazioni per validare la risposta al solvente prima di finire il pezzo reale.' },
      ],
    },
    {
      type: 'summary',
      title: 'Regole geometriche per scegliere il livello di dettaglio',
      items: [
        'Usa dettaglio fine per testo, ingranaggi, fori piccoli, scatti a pressione, filettature o pareti sottili.',
        'Usa equilibrato per parti decorative con linee di strato moderate e nessun accoppiamento stretto.',
        'Usa linee di strato marcate solo per forme semplici dove i bordi arrotondati sono accettabili.',
        'Dividi modelli complessi in zone mascherate e non mascherate quando solo il guscio esterno necessita di lucentezza.',
      ],
    },
    { type: 'title', text: 'Leggere i risultati del calcolatore', level: 2 },
    {
      type: 'paragraph',
      html: 'L\'output di esposizione è il tempo di vapore totale stimato per un primo passaggio conservativo. Viene mostrato in minuti e secondi perché le finestre di finitura corte sono più facili da gestire con un timer. La prima prova è deliberatamente più breve, di solito circa un terzo dell\'esposizione calcolata. Estrarre il pezzo presto permette di verificare se la superficie sta iniziando a lucidarsi prima che la perdita di dettaglio diventi permanente.',
    },
    {
      type: 'paragraph',
      html: 'Il tempo di asciugatura stima quanto tempo la stampa deve riposare prima della manipolazione ravvicinata, assemblaggio, verniciatura, imballaggio o sigillatura. L\'asciugatura non riguarda solo la sensazione di secchezza superficiale. Il solvente può rimanere nel polimero ammorbidito e continuare a influenzare l\'accoppiamento, l\'odore, l\'adesione della vernice e la sensazione meccanica. I pezzi in ABS lisciati con acetone spesso necessitano di degassificazione più lunga rispetto ai pezzi in PVB lisciati con alcol isopropilico, specialmente quando il pezzo è spesso o l\'esposizione è stata aggressiva.',
    },
    {
      type: 'proscons',
      title: 'Una lunga esposizione vs diversi cicli brevi',
      items: [
        { pro: 'Una singola esposizione è più rapida e facile da programmare.', con: 'Dà poco preavviso prima che i dettagli fini si ammorbidiscano.' },
        { pro: 'I cicli brevi facilitano l\'arresto a una finitura satinata o semi-lucida.', con: 'Richiedono più manipolazione e apertura ripetuta della camera.' },
        { pro: 'Ispezioni multiple riducono la possibilità di distruggere una stampa unica.', con: 'La finitura può essere leggermente meno uniforme se il pezzo si raffredda o si asciuga tra i cicli.' },
      ],
    },
    {
      type: 'message',
      title: 'Miglior uso della stima',
      html: 'Imposta un timer per la prima prova, ispeziona il pezzo sotto luce radente, poi continua con incrementi brevi. Fermati mentre le linee di strato sono ancora appena visibili; la superficie spesso continua a rilassarsi per un breve periodo dopo la rimozione.',
    },
    { type: 'title', text: 'Flusso di lavoro sicuro per la lisciatura chimica di ABS e PVB', level: 2 },
    {
      type: 'paragraph',
      html: 'Un flusso di lavoro sicuro inizia prima di aprire il solvente. Stampa un piccolo provino con lo stesso filamento, altezza dello strato, numero di pareti e impostazioni di raffreddamento. Pulisci il pezzo finale in modo che polvere e oli non rimangano intrappolati sotto la pelle ammorbidita. Prepara un supporto non reattivo, timer, guanti compatibili con il solvente, protezione oculare, ventilazione e un luogo dove il pezzo possa asciugarsi senza essere toccato. Tieni i contenitori di solvente chiusi quando non stai caricando attivamente la camera.',
    },
    {
      type: 'list',
      items: [
        'Conferma che il filamento sia effettivamente ABS o PVB, non PLA, PETG, miscela di PC o materiale riciclato sconosciuto.',
        'Rimuovi i supporti e carteggia solo prima della lisciatura; carteggiare dopo la lisciatura può tagliare la lucentezza in modo irregolare.',
        'Maschera fori, sedi di cuscinetti, filettature e superfici di accoppiamento se le dimensioni sono importanti.',
        'Inizia con il tempo della prima prova, poi aggiungi brevi intervalli se la finitura è ancora troppo opaca.',
        'Asciuga il pezzo in un\'area ventilata finché l\'odore di solvente e la viscosità non siano scomparsi.',
        'Smaltisci i panni per solventi e i materiali contaminati secondo le norme locali sui rifiuti pericolosi.',
      ],
    },
    {
      type: 'tip',
      title: 'Non giudicare la finitura mentre la superficie è bagnata',
      html: 'Una superficie di ABS o PVB appena esposta può apparire più lucida di quanto sarà dopo l\'asciugatura. Ispeziona sia la lucentezza che la geometria: se gli angoli sembrano gonfi o il testo piccolo si sta ammorbidendo, fermati anche se le linee di strato sono ancora debolmente visibili.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'La ventilazione fa parte del tempo di processo',
      html: 'L\'asciugatura post-lisciatura dovrebbe avvenire dove i vapori non possono accumularsi. Un pezzo riposto immediatamente in un cassetto, borsa per spedizioni, vetrina o contenitore elettronico può trattenere odore e solvente più a lungo del previsto.',
    },
    { type: 'title', text: 'Problemi comuni e azioni correttive', level: 2 },
    {
      type: 'table',
      headers: ['Sintomo', 'Causa probabile', 'Prossimo aggiustamento'],
      rows: [
        ['Linee di strato ancora nitide', 'Esposizione troppo breve o camera troppo fredda', 'Ripeti con incrementi brevi invece di raddoppiare il tempo'],
        ['Bordi arrotondati o testo sfocato', 'Sovraesposizione per il livello di dettaglio', 'Usa impostazione dettaglio fine, temperatura più bassa o maschera le caratteristiche'],
        ['Superficie appiccicosa dopo asciugatura', 'Troppo solvente assorbito o ventilazione insufficiente', 'Estendi il tempo di asciugatura e riduci l\'esposizione futura'],
        ['Un lato più lucido dell\'altro', 'Fonte di vapore irregolare o pezzo troppo vicino al solvente', 'Solleva il pezzo, distribuisci la fonte, ruota solo tra i cicli'],
        ['Velatura bianca o macchie opache', 'Condensa, umidità o evaporazione irregolare', 'Riduci la saturazione della camera ed evita gocce dal coperchio'],
      ],
    },
    {
      type: 'paragraph',
      html: 'Se un pezzo diventa appiccicoso, non tentare di ripararlo aggiungendo immediatamente più vapore. Più solvente di solito approfondisce la zona ammorbidita. Lascia asciugare completamente il pezzo, poi decidi se un ciclo di follow-up molto breve vale il rischio. Se i bordi sono già colati, la forma non può essere ripristinata dall\'asciugatura. Per i pezzi critici, la soluzione più affidabile è la ristampa con impostazioni dello slicer regolate e l\'uso di una finestra di finitura più corta.',
    },
    {
      type: 'card',
      title: 'Impostazioni dello slicer che riducono il tempo di lisciatura',
      html: 'Altezza dello strato inferiore, estrusione stabile, filamento asciutto, raffreddamento adeguato e pressure advance ben regolato riducono la quantità di lavoro chimico necessario. La lisciatura chimica dovrebbe raffinare una stampa, non nascondere ringing grave, lacune, sbavature, texture di filamento umido o sottoestrusione.',
    },
    {
      type: 'summary',
      title: 'Lista di controllo pratica di finitura',
      items: [
        'Stima l\'esposizione con il materiale, camera, temperatura, dimensione del pezzo e livello di dettaglio esatti.',
        'Esegui un provino di sacrificio o una prima prova prima di impegnare il pezzo finale.',
        'Usa cicli brevi quando il dettaglio è importante e fermati prima che la superficie perda nitidezza.',
        'Concedi abbastanza tempo di asciugatura per far scomparire odore di solvente, appiccicosità e morbidezza dimensionale.',
        'Tratta il controllo del vapore infiammabile come un requisito di sicurezza, non come una comodità opzionale.',
      ],
    },
  ],
  faq: [
    {
      question: 'Quanto tempo dovrebbe rimanere l\'ABS nel vapore di acetone?',
      answer: 'Non esiste un tempo universale perché contano il volume della camera, la temperatura, la geometria del pezzo e la formulazione del filamento. Usa la stima del calcolatore come punto di partenza, poi ispeziona al tempo più breve della prima prova prima di continuare.',
    },
    {
      question: 'Il PVB può essere lisciato con vapore di alcol isopropilico?',
      answer: 'Sì, molti filamenti di PVB sono progettati per la lisciatura con alcol isopropilico. Il processo è solitamente più graduale dell\'ABS con acetone, ma la sovraesposizione può ancora rendere la superficie appiccicosa o offuscare i dettagli fini.',
    },
    {
      question: 'Una camera più calda riduce il tempo di lisciatura?',
      answer: 'Sì. Il vapore di solvente più caldo di solito agisce più velocemente, ma aumenta anche l\'infiammabilità e il rischio di perdita di dettaglio. Evita riscaldatori improvvisati e tieni il vapore lontano da fonti di ignizione.',
    },
    {
      question: 'Quanto tempo dovrebbe asciugare un pezzo lisciato?',
      answer: 'Prevedi ore, non minuti. L\'ABS lisciato con acetone spesso necessita di degassificazione più lunga rispetto al PVB lisciato con alcol isopropilico, specialmente per pezzi spessi o esposizioni aggressive.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Scegli la coppia materiale-solvente', text: 'Seleziona ABS per lisciatura a vapore di acetone o PVB per lisciatura a vapore di alcol isopropilico.' },
    { name: 'Inserisci le condizioni della camera', text: 'Aggiungi il volume della camera a vapore e la temperatura della camera usando unità metriche o US.' },
    { name: 'Descrivi il pezzo', text: 'Inserisci il volume approssimativo del pezzo e scegli un livello di dettaglio superficiale che corrisponda alle caratteristiche più piccole.' },
    { name: 'Usa la prima prova', text: 'Ispeziona il pezzo al tempo di prova più breve prima di eseguire l\'esposizione completa stimata.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Calcolatore del Tempo di Lisciatura Chimica con Vapore di Acetone per ABS e Alcol Isopropilico per PVB',
      description: 'Stima il tempo di esposizione al vapore chimico e di asciugatura per la finitura di ABS con acetone e PVB con alcol isopropilico.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Quanto tempo dovrebbe rimanere l\'ABS nel vapore di acetone?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Usa una stima conservativa basata su volume della camera, temperatura, dimensione del pezzo e livello di dettaglio, poi ispeziona a un tempo di prima prova più breve.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Come stimare il tempo di lisciatura chimica per stampe in ABS o PVB',
      step: [
        { '@type': 'HowToStep', text: 'Seleziona ABS con acetone o PVB con alcol isopropilico.' },
        { '@type': 'HowToStep', text: 'Inserisci volume e temperatura della camera.' },
        { '@type': 'HowToStep', text: 'Inserisci volume del pezzo e livello di dettaglio superficiale.' },
        { '@type': 'HowToStep', text: 'Inizia con la prima prova e continua solo se il dettaglio rimane sicuro.' },
      ],
    },
  ],
};
