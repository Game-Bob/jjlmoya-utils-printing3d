import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { PowerSupplyEstimatorUI } from '../ui';

export const content: ToolLocaleContent<PowerSupplyEstimatorUI> = {
  slug: 'calcolatore-dimensionamento-alimentatore-stampante-3d',
  title: 'Calcolatore per il Dimensionamento dell\'Alimentatore della Stampante 3D per Hotend, Piani Riscaldati, Motori e Aggiornamenti da 12V a 24V',
  description: 'Stima la potenza e la corrente massima dell\'alimentatore per un aggiornamento della stampante 3D aggiungendo piano riscaldato, cartuccia dell\'hotend, motori passo-passo, carico ausiliario e margine di sicurezza.',
  ui: {
    systemVoltageLabel: 'Tensione di sistema',
    bedPowerLabel: 'Piano riscaldato',
    hotendPowerLabel: 'Cartuccia hotend',
    motorsLabel: 'Motori',
    motorPowerLabel: 'Per motore',
    auxiliaryPowerLabel: 'Carico ausiliario',
    safetyMarginLabel: 'Margine di sicurezza',
    totalLoadLabel: 'Carico diretto',
    psuRequiredLabel: 'Alimentatore richiesto',
    currentRequiredLabel: 'Corrente massima',
    recommendedPsuLabel: 'alimentatore standard più vicino',
    utilizationLabel: 'carico sulla taglia scelta',
    thermalMapLabel: 'Mappa di potenza termica',
    bedSegmentLabel: 'Piano',
    hotendSegmentLabel: 'Hotend',
    motorsSegmentLabel: 'Motori',
    auxiliarySegmentLabel: 'Aus.',
    headroomSegmentLabel: 'Margine',
    scenarioLabel: 'Preimpostazioni',
    scenarioBedSlinger: 'Piano mobile',
    scenarioCoreXY: 'CoreXY',
    scenarioLargeFormat: 'Grande formato',
    copyButton: 'Copia riepilogo',
    copiedButton: 'Copiato',
    controlsAriaLabel: 'Parametri alimentatore',
    resultsAriaLabel: 'Risultati alimentatore',
    copiedSummaryTemplate: 'Alimentatore stampante 3D: {requiredWatts} W richiesti, {currentAmps} A a {voltage} V, consigliato {recommendedWatts} W.',
    wattsUnit: 'W',
    ampsUnit: 'A',
    voltsUnit: 'V',
    percentUnit: '%',
    countUnit: 'x',
  },
  seo: [
    { type: 'title', text: 'Come Dimensionare l\'Alimentatore di una Stampante 3D Senza Tirare a Indovinare', level: 2 },
    {
      type: 'paragraph',
      html: 'L\'alimentatore di una stampante 3D si dimensiona in base ai carichi che possono essere attivi contemporaneamente: il piano riscaldato, la cartuccia riscaldante dell\'hotend, i motori passo-passo, la scheda di controllo, ventole, LED, sonde, relè del riscaldatore della camera e qualsiasi elettronica ausiliaria. La relazione elettrica di base è semplice: <strong>i watt sono uguali ai volt per gli ampere</strong>. Una stampante che necessita di 420 W su un sistema a 24 V può richiedere circa 17,5 A prima di considerare qualsiasi margine extra per l\'avvio, le perdite di regolazione o futuri ampliamenti.',
    },
    {
      type: 'paragraph',
      html: 'L\'errore che causa molte stampanti instabili è usare il consumo medio di stampa invece del carico massimo controllato. Durante una normale stampa in PLA il piano può ciclare a potenza parziale una volta raggiunta la temperatura, ma durante il riscaldamento piano e hotend possono funzionare entrambi al 100%. Se l\'alimentatore viene dimensionato solo dalla lettura di una presa smart presa a metà stampa, può sembrare adeguato mentre è ancora al limite durante il riscaldamento, l\'uso con camera chiusa per ABS o un ciclo di recupero in una stanza fredda.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: 'P = V x A', label: 'formula base di dimensionamento' },
        { value: '20-35%', label: 'margine pratico tipico' },
        { value: '24V', label: 'meno corrente di 12V a parità di watt' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Non considerare la potenza dell\'alimentatore come un permesso a sovraccaricare i connettori',
      html: 'Un alimentatore da 500 W non rende ogni terminale, pista PCB, connettore XT, connettore barrel o morsettiera sicuri per 500 W. La corrente va verificata a livello di cavo e connettore, specialmente per piani riscaldati e riscaldatori della camera.',
    },
    { type: 'title', text: 'Quali Carichi Vanno Inclusi nel Calcolo della Potenza dell\'Alimentatore?', level: 2 },
    {
      type: 'paragraph',
      html: 'Per una stampante FDM, il piano riscaldato è solitamente il carico di potenza dominante. Un piano comune da 220 x 220 mm può essere intorno a 180-250 W, mentre uno più grande da 300 x 300 mm può raggiungere 300-500 W a seconda della tensione e della costruzione. I piani AC sono diversi perché la loro potenza di riscaldamento non è fornita dall\'alimentatore DC della stampante; in quel caso includere solo l\'elettronica di controllo DC, ventole, hotend, motori e la piccola corrente assorbita dall\'ingresso del relè a stato solido.',
    },
    {
      type: 'paragraph',
      html: 'La cartuccia riscaldante dell\'hotend è il successivo carico evidente. Le cartucce di serie sono spesso da 30 W o 40 W, gli hotend ad alto flusso usano frequentemente 50 W o 60 W, e alcune configurazioni ad alta temperatura usano 80 W o più. Una cartuccia con più watt non consuma automaticamente quella potenza in modo costante, ma l\'alimentatore deve supportare la piena potenza nominale perché il firmware può comandare un duty cycle del 100% durante il riscaldamento o il recupero dopo una grande richiesta di estrusione.',
    },
    {
      type: 'list',
      items: [
        'Potenza del piano riscaldato dalla specifica del piano o misurando tensione e resistenza.',
        'Potenza della cartuccia dell\'hotend dalla sua potenza nominale, non dal duty cycle medio.',
        'Margine per i motori passo-passo in base al numero di motori e alle impostazioni di corrente del driver.',
        'Potenza ausiliaria per controllore, ventole, Raspberry Pi, LED, sonde, relè e schede della testa utensile.',
        'Margine di sicurezza per carichi transitori, invecchiamento dei condensatori, calore della camera e futuri aggiornamenti.',
      ],
    },
    {
      type: 'table',
      headers: ['Componente', 'Intervallo tipico', 'Nota di dimensionamento'],
      rows: [
        ['Piano riscaldato 220 mm', '180-250 W', 'Spesso il maggior carico DC su una stampante desktop.'],
        ['Piano riscaldato 300 mm', '300-500 W', 'Verificare con attenzione la sezione dei cavi e il percorso MOSFET del piano.'],
        ['Cartuccia hotend', '30-80 W', 'Usare la potenza nominale della cartuccia, non la potenza media osservata.'],
        ['Motori passo-passo', '6-15 W ciascuno', 'Dipende da limite di corrente, tensione, modalità driver e corrente di mantenimento.'],
        ['Ventole ed elettronica', '10-60 W', 'Schede della testa, LED e computer a scheda singola si sommano rapidamente.'],
      ],
    },
    { type: 'title', text: 'Esigenze di Alimentazione: 12V contro 24V', level: 2 },
    {
      type: 'paragraph',
      html: 'A parità di potenza, una stampante a 24 V necessita della metà della corrente di una a 12 V. Un carico di 360 W assorbe 30 A a 12 V ma solo 15 A a 24 V. Una corrente inferiore riduce la caduta di tensione nei cavi, riduce il calore nei connettori e dà ai circuiti del piano e dell\'hotend un maggiore margine pratico. Ecco perché molte stampanti 3D moderne e schede di aggiornamento preferiscono i 24 V per riscaldatori ed elettronica di movimento.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Sistemi a 12V',
          description: 'Utili per stampanti più vecchie e accessori di tipo automotive, ma l\'elevata potenza del piano può richiedere correnti molto alte.',
          points: ['Amperaggio più alto a parità di watt', 'Più sensibili alla resistenza dei connettori', 'Comuni sulle macchine più vecchie dell\'era RepRap'],
        },
        {
          title: 'Sistemi a 24V',
          description: 'Preferiti per molte stampanti moderne perché la stessa potenza di riscaldamento viene erogata con una corrente inferiore.',
          highlight: true,
          points: ['Amperaggio più basso a parità di watt', 'Minore caduta di tensione nel cablaggio', 'Più adatti a piani riscaldati DC di grandi dimensioni'],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Usa la corrente come verifica pratica del cablaggio',
      html: 'Dopo aver calcolato i watt richiesti, dividi per la tensione per ottenere la corrente massima. Quel valore in ampere è quello che conta per i terminali dell\'alimentatore, fusibili, interruttori, sezione dei cavi, connettori del piano e valori nominali di ingresso della scheda.',
    },
    {
      type: 'proscons',
      title: 'Cambiare tensione durante un aggiornamento',
      items: [
        { pro: 'Passare da 12 V a 24 V può ridurre la corrente e il riscaldamento dei connettori a parità di potenza del piano.', con: 'Ventole, LED, pompe e alcune schede di controllo potrebbero richiedere sostituzione o convertitori buck.' },
        { pro: 'Hotend e piani a 24 V raggiungono spesso la temperatura più velocemente se correttamente specificati.', con: 'Un riscaldatore da 12 V erroneamente collegato a 24 V può essere pericolosamente sovralimentato.' },
        { pro: 'I sistemi driver e di movimento spesso si comportano meglio con l\'elettronica moderna a 24 V.', con: 'Ogni tensione degli accessori deve essere verificata prima della prima accensione.' },
      ],
    },
    { type: 'title', text: 'Quanto Margine di Sicurezza Deve Avere l\'Alimentatore di una Stampante 3D?', level: 2 },
    {
      type: 'paragraph',
      html: 'Un margine di sicurezza non è capacità sprecata: è spazio operativo. Gli alimentatori switching sono più a loro agio quando non vengono spinti permanentemente alla loro potenza nominale in un involucro caldo. Un alimentatore montato sotto una camera riscaldata, accanto a una catena portacavi del piano o all\'interno di una base poco ventilata può funzionare più caldo dello stesso alimentatore su un banco aperto. Il calore accorcia la vita dei condensatori e può causare spegnimenti sotto carico.',
    },
    {
      type: 'paragraph',
      html: 'Per una tipica stampante desktop, il 20% di margine è un minimo ragionevole quando la stima del carico è accurata. Per piani grandi, hotend ad alto flusso, ventole della camera, illuminazione LED o futuri aggiornamenti della testa, il 30-35% è più confortevole. Per stampanti sperimentali, macchine ad alta temperatura o build che potrebbero aggiungere un secondo hotend, controlli attivi di riscaldamento della camera o molti accessori, scegliere un gradino standard di alimentatore sopra il requisito calcolato è di solito la scelta ingegneristica più tranquilla.',
    },
    {
      type: 'table',
      headers: ['Margine', 'Caso d\'uso', 'Significato pratico'],
      rows: [
        ['10%', 'Carichi noti con precisione, telaio aperto, alimentatore di qualità', 'Funziona solo quando ogni carico e percorso dei cavi è già verificato.'],
        ['20%', 'Stampante desktop normale', 'Buona base per una build stabile di tipo stock.'],
        ['30%', 'Piano potenziato, hotend ad alto flusso, elettronica in camera chiusa', 'Miglior comfort termico e flessibilità futura.'],
        ['40%+', 'Stampante grande formato o sperimentale', 'Utile quando le ipotesi di carico potrebbero cambiare in futuro.'],
      ],
    },
    {
      type: 'card',
      title: 'Perché un alimentatore più grande non spinge più potenza nella stampante',
      html: 'Un alimentatore DC regolato fornisce tensione; i carichi collegati assorbono corrente in base a resistenza, duty cycle ed elettronica di controllo. Un alimentatore da 600 W su una stampante che necessita 300 W non spinge 600 W nel piano. Ha semplicemente capacità sufficiente per fornire la corrente senza operare al suo limite.',
    },
    { type: 'title', text: 'Assorbimento del Piano Riscaldato e Comportamento Termico', level: 2 },
    {
      type: 'paragraph',
      html: 'I piani riscaldati sono carichi resistivi, quindi la loro potenza teorica può essere stimata da tensione e resistenza usando <code>P = V² / R</code>. Se un piano a 24 V ha 2,4 ohm di resistenza, è approssimativamente un piano da 240 W. La potenza reale varia con la tensione di alimentazione, le perdite di cablaggio, la resistenza del MOSFET e la temperatura del piano perché la resistenza può cambiare leggermente quando il riscaldatore si scalda.',
    },
    {
      type: 'paragraph',
      html: 'Un piano che cicla al 35% di duty cycle durante una stampa PLA stabile può comunque richiedere il 100% all\'avvio. Per il dimensionamento dell\'alimentatore, usare la piena potenza nominale del riscaldatore. Per la stima del costo dell\'elettricità, il duty cycle medio è più utile. Confondere queste due domande è una fonte comune di alimentatori sottodimensionati: il consumo energetico durante una stampa di due ore non è la stessa cosa della capacità elettrica istantanea.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Eccezione piano AC',
      html: 'Se la stampante utilizza un piano AC alimentato dalla rete, non includere la potenza del piano nel carico dell\'alimentatore DC. Invece, dimensionare separatamente il cablaggio AC, il fusibile, il relè, lo scarico della trazione, la messa a terra e la protezione termica. L\'alimentatore DC continua ad alimentare il controllore, l\'hotend, i motori e gli accessori.',
    },
    {
      type: 'list',
      items: [
        'Lato inferiore del piano isolato: minore perdita di calore e duty cycle medio più basso dopo il riscaldamento.',
        'Spessa piastra di alluminio fresato: riscaldamento più lento ma distribuzione del calore più uniforme.',
        'Grande lastra di vetro: maggiore massa termica, spesso riscaldamento più lungo a parità di potenza.',
        'Stanza fredda o telaio aperto: maggiore potenza di recupero necessaria per mantenere la temperatura.',
      ],
    },
    { type: 'title', text: 'Hotend, Motori, Ventole e Carichi Ausiliari', level: 2 },
    {
      type: 'paragraph',
      html: 'I motori passo-passo sono spesso sovrastimati o sottostimati perché il loro comportamento elettrico non è semplice come sommare tensione e corrente nominali. I moderni driver chopper regolano la corrente degli avvolgimenti e la potenza prelevata dall\'alimentatore dipende dalle impostazioni del driver, dalla velocità del motore, dalla riduzione della corrente di mantenimento e dal carico meccanico. Per il dimensionamento dell\'alimentatore, un margine pratico di 8-15 W per passo-passo attivo è spesso adeguato per le comuni stampanti desktop, ma motori a corrente molto alta o molti motori Z meritano un calcolo diretto dalla configurazione del driver.',
    },
    {
      type: 'paragraph',
      html: 'I carichi ausiliari sono facili da dimenticare perché ogni elemento è piccolo: ventola dell\'hotend, ventola di raffreddamento del pezzo, ventola del controllore, ventole di circolazione della camera, LED, sensore del filamento, sonda, scheda madre, display, scheda della testa, Raspberry Pi, fotocamera, hub USB e perdite del convertitore buck. Una stampante con un computer a scheda singola e illuminazione della camera può aggiungere 20-40 W senza sembrare un grande cambiamento elettrico.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Potenza continua', definition: 'Il carico che un alimentatore è progettato per erogare per lunghi periodi in condizioni specificate di raffreddamento e temperatura.' },
        { term: 'Carico di picco', definition: 'Una richiesta di breve durata che può essere superiore al carico medio, come il riscaldamento o il recupero simultaneo dei riscaldatori.' },
        { term: 'Caduta di tensione', definition: 'La tensione persa attraverso cavi e connettori perché i conduttori reali hanno resistenza.' },
        { term: 'Duty cycle', definition: 'La percentuale di tempo in cui un riscaldatore controllato è acceso durante un periodo di controllo.' },
        { term: 'Margine', definition: 'Capacità extra oltre il carico calcolato che mantiene l\'alimentatore lontano dal suo limite.' },
      ],
    },
    {
      type: 'summary',
      title: 'Lista di controllo del carico ausiliario',
      items: [
        'Sommare tutte le ventole alla loro potenza nominale o tensione per corrente.',
        'Includere computer a scheda singola e fotocamere se alimentati dall\'alimentatore della stampante.',
        'Riservare potenza per strisce LED, schede della testa, relè, sonde e perdite dei convertitori buck.',
        'Ricalcolare dopo aver aggiunto riscaldatori della camera, estrusori extra o raffreddamento del pezzo ad alta corrente.',
      ],
    },
    { type: 'title', text: 'Interpretare i Risultati del Calcolatore', level: 2 },
    {
      type: 'paragraph',
      html: 'Il carico diretto è la somma del piano, dell\'hotend, dei motori e degli ingressi ausiliari prima del margine. Il valore dell\'alimentatore richiesto aggiunge il margine di sicurezza selezionato. Il valore di corrente massima divide quel requisito per la tensione di sistema, rispondendo così alla domanda pratica di cablaggio: quanti ampere devono trasportare in sicurezza l\'alimentatore e il percorso di ingresso alla tensione scelta?',
    },
    {
      type: 'paragraph',
      html: 'La taglia di alimentatore consigliata arrotonda alla classe di potenza comune superiore. Se il valore richiesto è 382 W, un alimentatore da 400 W può sembrare matematicamente sufficiente, ma un modello da 450 W o 500 W può essere preferibile se ha un raffreddamento migliore, terminali migliori, certificazioni di sicurezza riconosciute o una potenza continua più onesta. La potenza sull\'etichetta è solo una parte della qualità di un alimentatore.',
    },
    {
      type: 'table',
      headers: ['Risultato', 'Usalo per', 'Segnale d\'allarme'],
      rows: [
        ['Watt richiesti', 'Scegliere la capacità dell\'alimentatore', 'Il valore è entro pochi watt dall\'etichetta dell\'alimentatore.'],
        ['Corrente massima', 'Verifica di cavi, fusibili e connettori', 'La corrente supera i valori nominali della scheda o dei terminali.'],
        ['Taglia consigliata', 'Lista acquisti', 'Alimentatore economico senza marca che dichiara watt elevati con terminali minuscoli.'],
        ['Utilizzo', 'Stima del comfort termico', 'Il carico continuo supera circa l\'80-85%.'],
      ],
    },
    {
      type: 'message',
      title: 'Regola pratica d\'acquisto',
      html: 'Scegli il primo alimentatore di qualità sopra il requisito calcolato, poi verifica la tensione di uscita, la corrente nominale, l\'orientamento del raffreddamento, la ventilazione della camera, la messa a terra di protezione, la strategia dei fusibili e i valori nominali dei connettori prima dell\'installazione.',
    },
    { type: 'title', text: 'Errori Comuni nel Dimensionamento dell\'Alimentatore negli Aggiornamenti delle Stampanti 3D', level: 2 },
    {
      type: 'list',
      items: [
        'Usare i watt medi della presa smart invece del carico massimo DC dei riscaldatori.',
        'Dimenticare che i sistemi a 12 V necessitano del doppio della corrente dei sistemi a 24 V a parità di potenza.',
        'Aggiungere un piano più grande mantenendo il connettore di ingresso e la sezione dei cavi originali della scheda.',
        'Installare una cartuccia hotend ad alta potenza senza verificare MOSFET, fusibile e protezioni termiche del firmware.',
        'Alimentare Raspberry Pi, fotocamera, LED e ventole dalla stampante senza aggiungere il carico ausiliario.',
        'Comprare un alimentatore basandosi sulla potenza di picco pubblicizzata invece che sulla potenza continua e la certificazione di sicurezza.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Fermati se cavi o connettori si scaldano',
      html: 'Cavi caldi, terminali anneriti, alloggiamenti fusi, reset intermittenti o cadute di temperatura del piano durante il movimento non sono problemi di regolazione. Sono sintomi elettrici che richiedono un\'ispezione prima di continuare a stampare.',
    },
    {
      type: 'paragraph',
      html: 'Il calcolatore stima la capacità dell\'alimentatore; non certifica l\'intero sistema elettrico. Una stampante sicura richiede anche una corretta messa a terra, scarico della trazione, fusibili, capicorda adeguati, connettori crimpati dimensionati per la corrente effettiva, protezione termica nel firmware e un layout di cablaggio che mantenga la tensione di rete separata dall\'elettronica a bassa tensione.',
    },
    {
      type: 'card',
      title: 'Quando suddividere gli alimentatori',
      html: 'Le grandi stampanti a volte utilizzano alimentatori separati per piano, elettronica di movimento e accessori. La suddivisione può ridurre la corrente attraverso una singola scheda e semplificare la manutenzione, ma le masse, la logica di commutazione, i fusibili e il comportamento di arresto di emergenza devono essere progettati deliberatamente.',
    },
    { type: 'title', text: 'Esempi Pratici: Stampante Stock, Aggiornamento CoreXY e Piano Grande', level: 2 },
    {
      type: 'paragraph',
      html: 'Una stampante compatta a piano mobile con piano da 220 W, hotend da 40 W, quattro motori a 10 W e 25 W di elettronica ha un carico diretto di 325 W. Con il 25% di margine, la capacità dell\'alimentatore richiesta è di circa 406 W. A 24 V sono circa 16,9 A, quindi un alimentatore di qualità da 450 W o 500 W a 24 V è un obiettivo sensato a seconda della disposizione dei connettori e del raffreddamento.',
    },
    {
      type: 'paragraph',
      html: 'Un aggiornamento CoreXY con piano da 300 W, hotend ad alto flusso da 60 W, cinque motori a 12 W e 45 W di carico ausiliario totalizza 465 W prima del margine. Con il 30% di margine necessita di circa 605 W, ovvero 25,2 A a 24 V. Quella build rientra nella classe 600-750 W, e il cablaggio del piano va trattato come un percorso di corrente principale e non come un ripensamento.',
    },
    {
      type: 'paragraph',
      html: 'Una stampante grande formato con piano DC da 600 W, hotend da 80 W, sei motori a 14 W e 80 W di carico ausiliario raggiunge 844 W prima del margine. Con il 35% di margine il requisito è di circa 1139 W. A quel punto molti costruttori prendono in considerazione un piano AC o un\'architettura di alimentazione separata perché la corrente DC, il cablaggio, i fusibili e la gestione termica diventano i vincoli di progettazione principali.',
    },
    {
      type: 'summary',
      title: 'Flusso di lavoro finale di dimensionamento',
      items: [
        'Elencare ogni carico che può funzionare durante il riscaldamento o il recupero.',
        'Calcolare i watt diretti, poi aggiungere un margine realistico.',
        'Convertire i watt in ampere alla tensione effettiva del sistema.',
        'Scegliere un alimentatore di qualità a potenza continua sopra il risultato.',
        'Verificare cavi, connettori, fusibili, valori nominali della scheda e raffreddamento prima di accendere la stampante.',
      ],
    },
  ],
  faq: [
    {
      question: 'Quanti watt servono per l\'alimentatore della mia stampante 3D?',
      answer: 'Somma il piano riscaldato, la cartuccia dell\'hotend, i motori, l\'elettronica, le ventole e gli accessori, poi aggiungi un margine di sicurezza. Molte stampanti desktop a 24 V aggiornate si collocano tra 400 W e 600 W, mentre i piani grandi possono richiedere molto di più.',
    },
    {
      question: '24V è meglio di 12V per l\'alimentatore di una stampante 3D?',
      answer: 'A parità di potenza, i 24 V usano metà della corrente dei 12 V. Una corrente inferiore di solito significa meno caduta di tensione e meno riscaldamento dei connettori, ma tutti i riscaldatori, le ventole, le schede e gli accessori devono essere compatibili con la tensione scelta.',
    },
    {
      question: 'Devo includere il piano riscaldato nel calcolo dell\'alimentatore DC?',
      answer: 'Includilo se è un piano riscaldato DC alimentato dall\'alimentatore della stampante. Non includere un piano AC di rete nella potenza dell\'alimentatore DC; dimensiona separatamente il suo cablaggio di rete, relè, fusibile e protezioni di sicurezza.',
    },
    {
      question: 'Che margine di sicurezza dovrei usare come riserva dell\'alimentatore?',
      answer: 'Usa almeno il 20% per una build normale e conosciuta. Usa il 30-35% per piani potenziati, hotend ad alto flusso, elettronica in camera chiusa o accessori futuri.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Inserisci i carichi di riscaldamento', text: 'Aggiungi la potenza nominale del piano riscaldato e della cartuccia dell\'hotend.' },
    { name: 'Aggiungi movimento e accessori', text: 'Inserisci il numero di motori, il margine per motore, le ventole, le schede, i LED e altri carichi ausiliari.' },
    { name: 'Scegli tensione e margine', text: 'Seleziona 12 V o 24 V e imposta un margine di sicurezza adeguato al rischio della build.' },
    { name: 'Verifica watt e ampere', text: 'Usa i watt richiesti per scegliere l\'alimentatore e gli ampere massimi per verificare cavi, fusibili e connettori.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Calcolatore per il Dimensionamento dell\'Alimentatore della Stampante 3D',
      description: 'Stima potenza e corrente dell\'alimentatore di una stampante 3D in base ai carichi di piano, hotend, motori, ausiliari e margine.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Quanti watt servono per l\'alimentatore della mia stampante 3D?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Somma il piano riscaldato, la cartuccia dell\'hotend, i motori, l\'elettronica, le ventole e gli accessori, poi aggiungi un margine di sicurezza.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Come dimensionare l\'alimentatore di una stampante 3D',
      step: [
        { '@type': 'HowToStep', text: 'Inserisci i carichi dei riscaldatori.' },
        { '@type': 'HowToStep', text: 'Aggiungi i carichi di movimento e accessori.' },
        { '@type': 'HowToStep', text: 'Seleziona la tensione di sistema e il margine di sicurezza.' },
        { '@type': 'HowToStep', text: 'Scegli un alimentatore di qualità sopra il requisito calcolato.' },
      ],
    },
  ],
};
