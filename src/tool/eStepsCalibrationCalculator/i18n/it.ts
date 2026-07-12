import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { EStepsCalibrationCalculatorUI } from '../ui';

export const content: ToolLocaleContent<EStepsCalibrationCalculatorUI> = {
  slug: 'calcolatore-calibrazione-e-steps',
  title: 'Calcolatore di calibrazione E steps e assistente diagnostico estrusore',
  description: 'Calcola gli E-steps corretti dell\'estrusore da un test di estrusione misurato e segnala le deviazioni superiori al 5% prima che nascondano un problema meccanico.',
  ui: {
    unitSystemLabel: 'Unità',
    metricLabel: 'Metrico',
    imperialLabel: 'US',
    inputGroupLabel: 'Test di estrusione',
    currentEStepsLabel: 'E-steps attuali',
    requestedLengthLabel: 'Lunghezza estrusione richiesta',
    actualLengthLabel: 'Lunghezza estrusione misurata',
    newEStepsLabel: 'Nuovi E-steps',
    errorLabel: 'Errore rilevato',
    commandLabel: 'Comando console',
    copyCommandLabel: 'Copia comando M92',
    copiedLabel: 'Copiato',
    normalStatusLabel: 'Intervallo di calibrazione',
    criticalStatusLabel: 'Deviazione critica',
    normalMessage: 'La deviazione misurata è entro il 5%. Applica il valore solo dopo aver confermato che il percorso del filamento è pulito e ripeti il test una volta.',
    criticalMessage: 'Avviso critico: La deviazione è superiore al 5%. È probabile un guasto meccanico: otturazione, slittamento dell\'estrusore o tensione della molla del tenditore errata. Ispeziona l\'hardware prima di applicare questi nuovi E-steps.',
    diagnosticTitle: 'Controlli meccanici prima di salvare il firmware',
    diagnosticOne: 'Riscalda l\'ugello alla temperatura di stampa reale ed estrudere lentamente con l\'hotend libero.',
    diagnosticTwo: 'Controlla l\'ingranaggio motore, la tensione del tenditore, i segni di morsicatura del filamento e la resistenza della bobina prima di fidarti del numero.',
    diagnosticThree: 'Ripeti il test da 100 mm dopo la pulizia o le modifiche alla tensione; non regolare il firmware attorno a un estrusore che slitta.',
    referenceTitle: 'Regola decisionale',
    formulaLabel: 'Formula',
    formulaText: 'E-steps attuali x richiesto / misurato',
    safeBandLabel: 'Errore 0-5%',
    safeBandText: 'Applicare solo dopo un test ripetibile.',
    criticalBandLabel: 'Errore > 5%',
    criticalBandText: 'Ispeziona prima otturazione, slittamento, tensione e resistenza.',
    repeatTestLabel: 'Dopo M92',
    repeatTestText: 'Esegui di nuovo lo stesso test di estrusione prima di salvare.',
    mmUnit: 'mm',
    inchUnit: 'poll',
    stepsUnit: 'passi/mm',
    controlsAriaLabel: 'Input calibrazione E-steps',
    resultsAriaLabel: 'Risultati calibrazione E-steps',
  },
  seo: [
    { type: 'title', text: 'Cosa misura realmente la calibrazione degli E-steps', level: 2 },
    {
      type: 'paragraph',
      html: 'Gli E-steps definiscono quanti passi del motore passo-passo il firmware dell\'estrusore invia per un millimetro di movimento del filamento. In Marlin il valore viene solitamente memorizzato con <code>M92 E...</code>, mentre Klipper esprime spesso la stessa relazione fisica attraverso la distanza di rotazione. La misurazione è semplice: comanda una lunghezza di estrusione nota, misura fisicamente quanto filamento si è mosso, quindi correggi il valore del firmware in base al rapporto tra movimento richiesto ed effettivo. La formula è <code>nuovi E-steps = E-steps attuali * lunghezza richiesta / lunghezza effettiva</code>.',
    },
    {
      type: 'paragraph',
      html: 'La parte pericolosa è l\'interpretazione. Un calcolatore può produrre un numero da qualsiasi misurazione, anche una sbagliata. Se l\'estrusore sta macinando il filamento, se l\'ugello è parzialmente ostruito o se la molla del tenditore è troppo lenta, la lunghezza di estrusione misurata sarà bassa. Aumentare gli E-steps può sembrare risolvere il test da 100 mm, ma non risolve l\'hardware. Forza il motore a spingere più forte o più a lungo attraverso lo stesso difetto, il che può rendere le stampe reali incoerenti.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '100 mm', label: 'lunghezza richiesta comune per un test dell\'estrusore ripetibile' },
        { value: '5%', label: 'soglia diagnostica dove l\'ispezione hardware dovrebbe venire prima' },
        { value: 'M92', label: 'comando Marlin usato per impostare i passi per unità' },
        { value: '2 decimali', label: 'precisione di output usata per il comando dell\'asse E copiato' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Non calibrare attorno a un guasto meccanico',
      html: 'Una deviazione superiore al 5% è abbastanza grande che la stampante potrebbe essere in sotto-estrusione o sovra-estrusione per un motivo che non è matematico del firmware. Ispeziona il percorso dell\'estrusore prima di salvare un nuovo valore con <code>M500</code> o modificare una configurazione Klipper.',
    },
    { type: 'title', text: 'Come eseguire un test di estrusione pulito da 100 mm', level: 2 },
    {
      type: 'paragraph',
      html: 'Un test affidabile degli E-steps inizia con un ugello caldo e un percorso del filamento stabile. Riscalda l\'hotend a una temperatura di stampa normale per il filamento, perché la protezione di estrusione a freddo esiste per una ragione e perché la contropressione della plastica fusa cambia il carico sull\'estrusore. Segna il filamento a una distanza nota sopra l\'ingresso dell\'estrusore, comanda una lenta estrusione di 100 mm e misura la distanza rimanente per determinare quanto filamento si è effettivamente mosso.',
    },
    {
      type: 'list',
      items: [
        'Usa una velocità di alimentazione lenta in modo che l\'hotend possa fondere il materiale senza accumulare pressione anomala.',
        'Fai il segno sul filamento con un calibro o un pennarello sottile invece di stimare a occhio.',
        'Tieni la bobina libera di ruotare in modo che la resistenza della bobina non sembri un errore di E-steps.',
        'Esegui il test con lo stesso diametro e tipo di filamento che usi normalmente per stampare.',
        'Ripeti la misurazione dopo aver cambiato la tensione dell\'ingranaggio motore, lo stato dell\'ugello o la temperatura dell\'hotend.',
      ],
    },
    {
      type: 'table',
      headers: ['Risultato misurato', 'Errore', 'Prima interpretazione', 'Migliore azione successiva'],
      rows: [
        ['Da 98 a 102 mm', 'Da 0 a 2%', 'Piccola dispersione di misura normale', 'Ripeti una volta e fai la media se necessario'],
        ['Da 95 a 105 mm', 'Da 2 a 5%', 'La correzione del firmware può essere ragionevole', 'Controlla il percorso, poi applica il valore calcolato'],
        ['Sotto 95 mm', 'Oltre 5%', 'Probabile slittamento, otturazione, resistenza o problema di pressione', 'Ispeziona la meccanica prima del firmware'],
        ['Oltre 105 mm', 'Oltre 5%', 'Valore precedente errato o problema di configurazione della misura', 'Verifica le unità e ripeti il test'],
      ],
    },
    {
      type: 'tip',
      title: 'Usa una variabile pulita',
      html: 'Non modificare contemporaneamente portata, moltiplicatore di estrusione, pressure advance ed E-steps. Gli E-steps dovrebbero descrivere il movimento motore-filamento, mentre portata e moltiplicatore di estrusione regolano l\'uscita del materiale dello slicer per un filamento e un profilo di stampa specifici.',
    },
    { type: 'title', text: 'Perché l\'avviso del 5% è importante', level: 2 },
    {
      type: 'paragraph',
      html: 'Un errore di estrusione del 5% significa che un comando di 100 mm ha prodotto meno di 95 mm o più di 105 mm di movimento reale. Non è un piccolo problema di arrotondamento. Con un filamento tipico da 1,75 mm, 5 mm di alimentazione mancante in un test breve rappresentano un deficit di materiale visibile. Nelle stampe reali può manifestarsi come pareti deboli, superfici superiori rade, primi strati incoerenti e scarsa affidabilità dimensionale. Ancora più importante, la sotto-estrusione a questa scala ha spesso una causa fisica.',
    },
    {
      type: 'paragraph',
      html: 'L\'assistente diagnostico segnala quella soglia perché la correzione del firmware può nascondere i sintomi. Se l\'ingranaggio scanalato è pieno di polvere di plastica, il motore potrebbe saltare solo durante i movimenti rapidi. Se l\'ugello è parzialmente ostruito, un test lento potrebbe superare dopo una grande correzione, ma la stampante fallirà comunque durante il riempimento ad alto flusso. Se la tensione del tenditore è troppo alta, il filamento può deformarsi e incepparsi a valle; se è troppo bassa, può slittare. La riparazione giusta è meccanica, non un numero di asse E più grande.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Errore di calibrazione sano',
          description: 'Piccola discrepanza causata dal valore precedente del firmware, tolleranza del diametro dell\'ingranaggio o rumore di misura.',
          points: ['Di solito entro il 5%', 'Ripetibile in due test', 'Nessun clic o polvere di filamento', 'La correzione rimane modesta'],
        },
        {
          title: 'Errore di estrusione da guasto',
          description: 'Grande discrepanza causata dall\'incapacità dell\'estrusore di muovere il filamento come comandato.',
          highlight: true,
          points: ['Oltre 5%', 'Cambia tra test ripetuti', 'Clic, macinazione o segni di morsicatura', 'Spesso peggiore a velocità più alta'],
        },
      ],
    },
    {
      type: 'summary',
      title: 'Prima di accettare una correzione critica',
      items: [
        'Ispeziona l\'ugello per ostruzioni parziali e puliscilo o sostituiscilo se l\'estrusione si increspa o pulsa.',
        'Spazzola i denti dell\'ingranaggio motore e rimuovi la polvere di filamento.',
        'Imposta la tensione del tenditore in modo che l\'ingranaggio afferri senza appiattire il filamento.',
        'Controlla la resistenza della bobina, la sede del tubo Bowden e l\'attrito del percorso del filamento.',
        'Esegui la stessa misurazione di nuovo prima di modificare il firmware.',
      ],
    },
    { type: 'title', text: 'Marlin M92, M500 e distanza di rotazione Klipper', level: 2 },
    {
      type: 'paragraph',
      html: 'Sul firmware in stile Marlin, <code>M92 E...</code> imposta i passi dell\'estrusore per millimetro per la sessione corrente. Molte stampanti necessitano di <code>M500</code> successivamente per salvare il valore in EEPROM, altrimenti l\'impostazione può scomparire dopo il riavvio. Alcune versioni di firmware bloccate o modificate dal fornitore potrebbero ignorare i salvataggi EEPROM o richiedere invece la modifica della configurazione del sorgente del firmware. Verifica sempre il valore dopo il riavvio con <code>M503</code> se la stampante lo supporta.',
    },
    {
      type: 'paragraph',
      html: 'Klipper utilizza comunemente <code>rotation_distance</code> anziché gli E-steps in printer.cfg. L\'idea di calibrazione fisica è la stessa, ma la direzione numerica è invertita perché la distanza di rotazione desccribe quanto filamento si muove per rotazione del motore, non quanti passi sono necessari per millimetro. Questo strumento produce un comando <code>M92</code> perché è pensato per essere direttamente utilizzabile nelle console Marlin e nelle interfacce firmware compatibili. Gli utenti di Klipper possono comunque utilizzare l\'errore misurato come segnale diagnostico prima di ricalcolare la distanza di rotazione.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'E-steps', definition: 'Il numero di passi del motore che il firmware invia per spostare un millimetro di filamento sull\'asse dell\'estrusore.' },
        { term: 'M92', definition: 'Un comando G-code utilizzato dal firmware Marlin per impostare i passi per unità per uno o più assi.' },
        { term: 'M500', definition: 'Un comando Marlin che salva le impostazioni correnti in EEPROM quando supportato dalla stampante.' },
        { term: 'Distanza di rotazione', definition: 'Impostazione Klipper che rappresenta l\'avanzamento del filamento per rotazione completa del motore.' },
        { term: 'Moltiplicatore di estrusione', definition: 'Scala del flusso a livello di slicer per un profilo materiale, separata dagli E-steps della macchina.' },
      ],
    },
    {
      type: 'card',
      title: 'Flusso di lavoro del comando console',
      html: 'Invia il comando <code>M92 E...</code> copiato, ripeti il test di estrusione e salva il valore solo dopo che la lunghezza misurata è ripetibile. Un singolo numero buono è una prova più debole di due misurazioni coerenti.',
    },
    { type: 'title', text: 'Problemi meccanici che sembrano E-steps sbagliati', level: 2 },
    {
      type: 'paragraph',
      html: 'Un ugello parzialmente ostruito è la trappola più comune. Il motore dell\'estrusore può girare della quantità corretta mentre la pressione si accumula nell\'hotend, facendo sì che l\'ingranaggio motore morda il filamento invece di avanzarlo. La lunghezza di estrusione misurata diventa corta, la formula aumenta gli E-steps e la stampa successiva potrebbe ancora sotto-estrudere perché l\'ostruzione dell\'ugello rimane. Se il filamento estruso si increspa bruscamente, pulsa, esce sottile o cambia direzione mentre lascia l\'ugello, pulisci l\'hotend prima di calibrare.',
    },
    {
      type: 'paragraph',
      html: 'Lo slittamento dell\'estrusore può derivare da errori di tensione opposti. Troppa poca forza della molla permette all\'ingranaggio di girare contro il filamento. Troppa forza della molla può ovalizzare il filamento morbido, aumentare l\'attrito in un tubo Bowden o creare profondi segni di morsicatura che si inceppano all\'ingresso del heat break. Il filamento flessibile è particolarmente sensibile. La soglia diagnostica esiste per far fermare l\'utente e ispezionare queste condizioni prima di convertire un problema di trazione in un numero del firmware.',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Sintomi critici durante il test',
      html: 'Fermati e ispeziona l\'hardware se l\'estrusore scatta, appare polvere di filamento, il motore diventa insolitamente caldo, l\'estrusione esce a impulsi o la lunghezza misurata cambia di diversi millimetri tra test ripetuti da 100 mm.',
    },
    {
      type: 'proscons',
      title: 'Correggere gli E steps dopo un grande errore',
      items: [
        { pro: 'Può ripristinare un\'alimentazione precisa del filamento quando il vecchio valore del firmware era realmente sbagliato.', con: 'Può nascondere un ingranaggio motore che slitta o un ugello ostruito quando usato senza ispezione.' },
        { pro: 'Comando semplice facile da applicare e ripetere.', con: 'Un valore salvato errato influisce su tutti i profili slicer e tutti i materiali.' },
        { pro: 'Utile dopo aver cambiato il rapporto di trasmissione dell\'estrusore o l\'hardware del motore.', con: 'Non sostituisce la calibrazione del flusso sulle pareti stampate.' },
      ],
    },
    { type: 'title', text: 'E-steps vs calibrazione del flusso', level: 2 },
    {
      type: 'paragraph',
      html: 'La calibrazione degli E-steps appartiene al livello della macchina. Chiede se il meccanismo dell\'estrusore muove la lunghezza richiesta di filamento grezzo. La calibrazione del flusso appartiene al livello del profilo di stampa. Chiede se un filamento, una temperatura, un ugello, una larghezza di linea e una strategia slicer specifici producono lo spessore della parete e la qualità superficiale desiderati. Mescolare i due crea profili confusi: una stampante può superare un test E-steps da 100 mm e comunque aver bisogno di un moltiplicatore di estrusione di 0,96 per una marca di PETG.',
    },
    {
      type: 'paragraph',
      html: 'Calibra gli E-steps dopo aver cambiato l\'hardware dell\'estrusore, i passi del motore, il microstepping, il rapporto di trasmissione o il diametro dell\'ingranaggio motore. Calibra il flusso dopo aver cambiato marca di filamento, colore, dimensione dell\'ugello, temperatura o larghezza di linea dello slicer. Pressure advance, linear advance e retrazione sono strumenti separati di controllo della pressione e devono essere regolati dopo che il movimento di estrusione di base è affidabile.',
    },
    {
      type: 'table',
      headers: ['Calibrazione', 'Livello', 'Cambia quando', 'Non usarlo per correggere'],
      rows: [
        ['E-steps', 'Firmware o configurazione macchina', 'Cambia hardware estrusore o impostazioni motore', 'Filamento umido, otturazioni ugello, flusso slicer'],
        ['Moltiplicatore flusso', 'Profilo materiale slicer', 'Cambia marca, colore, ugello, temperatura del filamento', 'Rapporto di trasmissione errato o estrusore che slitta'],
        ['Pressure advance', 'Dinamiche firmware', 'Cambia percorso, velocità, accelerazione, materiale estrusore', 'Sotto-estrusione statica'],
        ['Retrazione', 'Comportamento viaggio slicer', 'Cambiano stringing, oozing, artefatti di viaggio', 'Errori di distanza di alimentazione di base'],
      ],
    },
    {
      type: 'message',
      title: 'Regola del tecnico di supporto',
      html: 'Se un valore di calibrazione cambia drasticamente, presupponi che la misurazione ti stia parlando della macchina. Ispeziona prima, calcola dopo, salva per ultimo.',
    },
    { type: 'title', text: 'Ripetibilità e qualità della misurazione', level: 2 },
    {
      type: 'paragraph',
      html: 'Un buon risultato di E-steps è ripetibile. Se un test misura 94 mm, il successivo 99 mm e il successivo 96 mm, la media è meno importante della dispersione. Risultati variabili indicano trazione, temperatura, pressione o tecnica di misurazione. Prima di salvare un nuovo valore, ripeti l\'estrusione almeno due volte dopo qualsiasi modifica meccanica. I due risultati dovrebbero essere abbastanza vicini da far sì che il nuovo numero del firmware non insegua il rumore.',
    },
    {
      type: 'tip',
      title: 'Misura sopra l\'estrusore quando possibile',
      html: 'Segnare il filamento prima che entri nell\'estrusore evita confusione dovuta al filamento curvo che esce dall\'ugello. Misura la distanza da un punto di riferimento fisso al segno prima e dopo il comando.',
    },
    {
      type: 'summary',
      title: 'Sequenza di calibrazione affidabile',
      items: [
        'Riscalda l\'ugello e pulisci il materiale vecchio.',
        'Segna il filamento con una distanza di riferimento precisa.',
        'Estrudi 100 mm lentamente e misura il movimento effettivo.',
        'Usa il calcolatore e ispeziona qualsiasi errore superiore al 5%.',
        'Applica <code>M92 E...</code>, riprova, poi salva solo se ripetibile.',
      ],
    },
  ],
  faq: [
    {
      question: 'Che formula usa questo calcolatore di E-steps?',
      answer: 'Usa nuovi E-steps = E-steps attuali * lunghezza di estrusione richiesta / lunghezza di estrusione misurata.',
    },
    {
      question: 'Perché lo strumento avverte sopra il 5% di errore?',
      answer: 'Una deviazione superiore al 5% è abbastanza grande da suggerire un problema meccanico come slittamento dell\'estrusore, ostruzione parziale, resistenza della bobina o tensione del tenditore errata. Ispeziona l\'hardware prima di salvare un nuovo valore del firmware.',
    },
    {
      question: 'Posso usare il comando M92 in Klipper?',
      answer: 'Il comando M92 copiato è destinato al firmware compatibile con Marlin. Klipper di solito usa rotation_distance, ma lo stesso errore misurato è ancora utile per diagnosticare l\'estrusore.',
    },
    {
      question: 'Dovrei salvare immediatamente il nuovo valore?',
      answer: 'No. Applicalo temporaneamente, ripeti il test di estrusione e salva solo dopo che il movimento misurato è ripetibile.',
    },
    {
      question: 'La calibrazione degli E-steps è la stessa della calibrazione del flusso?',
      answer: 'No. Gli E-steps calibrano il movimento della macchina. Il flusso o moltiplicatore di estrusione calibra l\'uscita del materiale dello slicer per un filamento e un profilo di stampa specifici.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Inserisci gli E-steps attuali', text: 'Leggi i passi attuali dell\'estrusore per millimetro dal firmware o dalle impostazioni della stampante.' },
    { name: 'Esegui un test di estrusione', text: 'Comanda una lunghezza nota, normalmente 100 mm, con l\'hotend a temperatura di stampa.' },
    { name: 'Misura il movimento effettivo', text: 'Inserisci il movimento del filamento misurato fisicamente e rivedi l\'errore rilevato.' },
    { name: 'Ispeziona se necessario', text: 'Se l\'errore è superiore al 5%, controlla l\'hardware prima di applicare il comando M92.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Calcolatore di calibrazione E-steps e assistente diagnostico estrusore',
      description: 'Calcola gli E-steps corretti dell\'estrusore della stampante 3D e segnala le grandi deviazioni con rischio meccanico.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Che formula usa questo calcolatore di E-steps?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Usa nuovi E-steps = E-steps attuali * lunghezza di estrusione richiesta / lunghezza di estrusione misurata.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Come calibrare gli E-steps dell\'estrusore di una stampante 3D',
      step: [
        { '@type': 'HowToStep', text: 'Inserisci il valore attuale degli E-steps.' },
        { '@type': 'HowToStep', text: 'Comanda una lunghezza di estrusione nota, generalmente 100 mm.' },
        { '@type': 'HowToStep', text: 'Misura il movimento reale del filamento e calcola la correzione.' },
        { '@type': 'HowToStep', text: 'Ispeziona prima l\'hardware se l\'errore rilevato è superiore al 5%.' },
      ],
    },
  ],
};
