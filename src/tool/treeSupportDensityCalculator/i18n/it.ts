import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { TreeSupportDensityCalculatorUI } from '../ui';

export const content: ToolLocaleContent<TreeSupportDensityCalculatorUI> = {
  slug: 'calcolatore-densita-supporti-albero',
  title: 'Calcolatore Densità Supporti ad Albero',
  description: 'Stima il diametro della chioma, il volume di supporto, il numero di rami, il diametro di contatto e la stabilità dei supporti ad albero da altezza del punto di appoggio, angolo di ramificazione, densità dei rami e diametro basale del tronco.',
  ui: {
    unitSystemLabel: 'Unità',
    metricLabel: 'Metrico',
    imperialLabel: 'US',
    presetsLabel: 'Preimpostazioni',
    miniaturePresetLabel: 'Mini',
    balancedPresetLabel: 'Bilanciato',
    tallPresetLabel: 'Alto',
    supportHeightLabel: 'Altezza supporto',
    branchAngleLabel: 'Angolo rami',
    branchDensityLabel: 'Densità rami',
    baseTrunkDiameterLabel: 'Diametro basale tronco',
    canopyDiameterLabel: 'Diametro chioma superiore',
    supportVolumeLabel: 'Volume supporto stimato',
    stabilityLabel: 'Stabilità',
    filamentMassLabel: 'Massa filamento',
    branchCountLabel: 'Numero rami',
    contactDiameterLabel: 'Diametro contatto',
    trunkVolumeLabel: 'Volume tronco',
    branchVolumeLabel: 'Volume rami',
    stabilityScoreSeparator: '-',
    stabilityScoreSuffix: '/100',
    stabilityLow: 'stabilità bassa',
    stabilityBalanced: 'stabilità bilanciata',
    stabilityHigh: 'stabilità alta',
    controlsAriaLabel: 'Input densità supporto ad albero',
    resultsAriaLabel: 'Risultati densità supporto ad albero',
    copyButton: 'Copia configurazione',
    copiedButton: 'Copiato',
    copiedSummaryTemplate: 'Stima supporto ad albero: chioma {canopy}, volume {volume}, stabilità {stability} ({score}/100).',
    millimetersUnit: 'mm',
    inchesUnit: 'poll',
    cubicCentimetersUnit: 'cm³',
    cubicInchesUnit: 'poll³',
    gramsUnit: 'g',
    ouncesUnit: 'oz',
    degreesUnit: '°',
    percentUnit: '%',
  },
  seo: [
    { type: 'title', text: 'Come la Densità dei Supporti ad Albero Modifica l\'Uso di Filamento e la Stabilità', level: 2 },
    {
      type: 'paragraph',
      html: 'I supporti ad albero sono efficienti perché separano il lavoro in un <strong>percorso di carico</strong> e un <strong>modello di contatto</strong>. Il tronco sostiene la maggior parte del carico verticale dal piano di stampa, mentre rami più piccoli si estendono verso gli sbalzi solo dove serve contatto. Un calcolatore di densità dei supporti ad albero è utile perché i controlli più visibili dello slicer, come l\'angolo di ramificazione e la densità dei rami, interagiscono con l\'altezza del punto di appoggio e il diametro basale del tronco. Una bassa densità di rami può risparmiare filamento, ma riduce anche il numero di percorsi che resistono all\'oscillazione. Un angolo di ramificazione ripido può raggiungere caratteristiche alte con meno estensione orizzontale, ma concentra il carico vicino al tronco e può fallire su supporti alti e stretti.',
    },
    {
      type: 'paragraph',
      html: 'Il calcolatore stima tre valori difficili da giudicare a occhio in un\'anteprima dello slicer: il diametro della chioma superiore, il volume di supporto e il punteggio di stabilità. Il diametro della chioma superiore indica quanto diventa larga la corona di rami vicino al modello. Il volume di supporto stima il materiale stampato necessario per tronco e rami. La stabilità combina angolo, densità, diametro basale, altezza ed estensione della chioma in un punteggio pratico. L\'obiettivo non è sostituire il motore dello slicer; l\'obiettivo è scegliere valori di partenza prima di slicerare per passare meno tempo a iterare le anteprime dei supporti.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '35-50°', label: 'intervallo angolo rami comune per portata e resistenza bilanciate' },
        { value: '25-55%', label: 'banda pratica di densità rami per molte stampe FDM' },
        { value: '2-8 mm', label: 'intervallo tipico diametro basale tronco per supporti ad albero su stampanti hobbistiche' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Questo è un calcolatore di pianificazione, non un esportazione geometrica dello slicer',
      html: 'Ogni slicer genera i supporti ad albero diversamente. Cura, PrusaSlicer, Bambu Studio, OrcaSlicer e altri strumenti usano nomi e algoritmi diversi per la generazione dei rami, l\'evitamento delle collisioni, l\'interfaccia di supporto e i punti di contatto. Usa l\'output come direzione di regolazione, poi conferma la geometria finale nell\'anteprima dello slicer prima di stampare.',
    },
    { type: 'title', text: 'Angolo di Ramificazione: Portata, Percorso di Carico e Rischio di Rottura', level: 2 },
    {
      type: 'paragraph',
      html: 'L\'angolo di ramificazione controlla quanto aggressivamente un supporto ad albero si estende dal tronco verso il modello. Un angolo più basso mantiene i rami più verticali, il che di solito migliora la rigidità e riduce l\'oscillazione laterale. Un angolo più alto raggiunge più lontano sopra lo spazio vuoto, il che può ridurre il numero di tronchi necessari, ma aumenta il carico di flessione e può creare lunghi segmenti di ramo non supportati. Per i supporti alti, un piccolo cambiamento da 50 a 60 gradi può trasformare un albero stabile in una struttura flessibile che vibra quando l\'ugello la tocca.',
    },
    {
      type: 'paragraph',
      html: 'Il miglior angolo di ramificazione dipende dall\'altezza del punto di appoggio. Un albero corto sotto un piccolo sbalzo può usare un angolo più ampio perché la lunghezza del ramo è limitata. Un punto di appoggio alto necessita di un angolo più conservativo, specialmente con materiali flessibili, movimenti di trasferimento rapidi o una superficie del piano che rilascia facilmente i supporti. Se il punto di appoggio è alto e l\'angolo di ramificazione è ampio, aumenta il diametro basale del tronco o la densità in modo che la corona di rami non sia sostenuta da una colonna sottile.',
    },
    {
      type: 'table',
      headers: ['Angolo rami', 'Miglior utilizzo', 'Rischio se eccessivo', 'Regolazione'],
      rows: [
        ['20-35°', 'Supporti alti e torri strette', 'Può richiedere più tronchi perché la portata è limitata', 'Aumentare la densità solo dove la copertura di contatto è scarsa'],
        ['36-50°', 'Regolazione generale supporti ad albero', 'Di solito bilanciato, ma dipende ancora dall\'altezza', 'Iniziare qui per la maggior parte delle stampe in PLA e PETG'],
        ['51-65°', 'Sbalzi ampi con altezza moderata', 'I rami possono flettere durante spostamenti o contatti', 'Usare tronco basale più spesso e densità moderata'],
        ['66-75°', 'Casi speciali con portata molto ampia', 'Alto carico di flessione e radici dei rami deboli', 'Anteprima attenta e rallentare la stampa dei supporti'],
      ],
    },
    {
      type: 'tip',
      title: 'Non cercare la portata solo con l\'angolo',
      html: 'Se i rami devono viaggiare lontano, prova ad aggiungere un tronco extra o ad aumentare la densità della chioma prima di spingere l\'angolo al limite superiore. Un secondo tronco vicino usa spesso meno materiale di un albero eccessivamente esteso che ha bisogno di una base pesante per sopravvivere.',
    },
    { type: 'title', text: 'Densità dei Rami: Copertura di Contatto Senza Cicatrici di Supporto', level: 2 },
    {
      type: 'paragraph',
      html: 'La densità dei rami descrive quanta struttura di rami viene creata vicino all\'area supportata. Una bassa densità riduce il filamento e facilita la rimozione, ma può lasciare i bordi degli sbalzi poco supportati. Un\'alta densità migliora la copertura e distribuisce il carico su più contatti, ma aumenta il tempo di stampa, le cicatrici di contatto e la probabilità che i supporti si fondano con superfici delicate. La densità giusta non è quindi il numero più alto che sembra sicuro; è il numero più basso che impedisce agli sbalzi di abbassarsi mantenendo una rigidità sufficiente.',
    },
    {
      type: 'paragraph',
      html: 'Per i modelli decorativi, la densità può spesso essere ridotta perché una leggera texture inferiore può essere accettabile. Per le parti meccaniche, la densità richiede più attenzione perché fori non supportati, smussi e superfici di accoppiamento possono influenzare la vestibilità. Anche i materiali contano. Il PLA tollera supporti più leggeri perché è rigido e stampa ponti puliti. Il PETG spesso necessita di spazi d\'aria più grandi e un diametro di contatto accurato perché aderisce fortemente ai supporti. Il TPU e i filamenti flessibili necessitano di una geometria conservativa perché i rami sottili possono deviare invece di mantenere lo sbalzo in posizione.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Bassa densità',
          description: 'Ideale quando la qualità di rimozione e il risparmio di filamento sono più importanti della finitura perfetta della faccia inferiore.',
          points: ['Stampa supporti più veloce', 'Copertura di contatto più debole', 'Utile per miniature organiche'],
        },
        {
          title: 'Densità bilanciata',
          description: 'Un valore predefinito pratico per geometria mista dove gli sbalzi necessitano di supporto ma la superficie del modello deve rimanere pulita.',
          highlight: true,
          points: ['Buona efficienza del materiale', 'Sforzo di rimozione moderato', 'Funziona per molti lavori in PLA e PETG'],
        },
        {
          title: 'Alta densità',
          description: 'Utile per sbalzi pesanti, punti di appoggio alti e regioni di contatto fragili, ma aumenta le cicatrici.',
          points: ['Migliore distribuzione del carico', 'Più volume e tempo di stampa', 'Maggiore rischio di contatti fusi'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Aumentare la densità dei rami',
      items: [
        { pro: 'Più punti di contatto riducono l\'abbassamento sotto gli sbalzi curvi.', con: 'Più punti di contatto possono lasciare segni più visibili dopo la rimozione.' },
        { pro: 'Una chioma più densa distribuisce il carico su più rami.', con: 'Lo slicer può generare una corona voluminosa difficile da raggiungere con tronchesi flush.' },
        { pro: 'I supporti alti diventano meno sensibili ai tocchi dell\'ugello.', con: 'Il tempo di stampa e l\'uso di filamento aumentano rapidamente quando la densità è combinata con una grande chioma.' },
      ],
    },
    { type: 'title', text: 'Diametro Basale del Tronco e Perché i Supporti ad Albero Alti Falliscono', level: 2 },
    {
      type: 'paragraph',
      html: 'Il diametro basale del tronco è la fondazione dell\'albero. Un tronco sottile può essere perfettamente adeguato per un supporto corto, ma lo stesso diametro diventa rischioso quando il punto supportato è alto. L\'altezza aumenta la leva: un piccolo impatto dell\'ugello, un contatto di trasferimento o la vibrazione del ventilatore di raffreddamento producono più movimento alla chioma. Se il tronco è troppo sottile per l\'altezza, il supporto potrebbe non rompersi immediatamente; potrebbe inclinarsi lentamente, spostare il punto di contatto o staccarsi dal piano prima che lo sbalzo sia terminato.',
    },
    {
      type: 'paragraph',
      html: 'Un diametro del tronco maggiore migliora la rigidità e l\'adesione al piano, ma consuma anche materiale. Il calcolatore tratta il diametro del tronco come un input di stabilità, non come un\'impostazione cosmetica. Se il punteggio di stabilità è basso, aumentare il diametro è spesso più efficace che aumentare la densità dei rami perché rafforza il percorso di carico dal piano di stampa. Se il punteggio è già alto, un tronco più grande può solo rendere la rimozione più difficile e sprecare filamento.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Altezza del punto di appoggio', definition: 'La distanza verticale dal piano di stampa alla regione del modello che necessita di supporto.' },
        { term: 'Angolo di ramificazione', definition: 'L\'angolo usato dai rami mentre si estendono dal tronco verso i punti di contatto del supporto.' },
        { term: 'Densità dei rami', definition: 'La quantità relativa di struttura di rami e copertura di contatto creata vicino all\'area supportata.' },
        { term: 'Diametro basale del tronco', definition: 'Il diametro approssimativo della colonna principale del supporto ad albero dove inizia sul piano di stampa.' },
        { term: 'Diametro della chioma', definition: 'La larghezza stimata della corona superiore di rami vicino allo sbalzo del modello.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Una chioma alta su un tronco sottile è la modalità di rottura classica dei supporti ad albero',
      html: 'Se il diametro della chioma è molte volte maggiore del diametro del tronco, il supporto si comporta come una struttura pesante in alto. Aggiungi un altro tronco, riduci l\'angolo di ramificazione o aumenta il diametro basale prima di aggiungere semplicemente più densità di rami.',
    },
    { type: 'title', text: 'Diametro della Chioma Superiore e Spazio Libero del Modello', level: 2 },
    {
      type: 'paragraph',
      html: 'Il diametro della chioma superiore è importante perché i supporti ad albero devono adattarsi attorno al modello, evitare collisioni e rimanere rimovibili. Una grande chioma può supportare bene lo sbalzo, ma può anche avvolgere i dettagli, entrare in cavità o creare rami difficili da rompere. Una chioma piccola è più facile da rimuovere, ma può concentrare la forza di contatto su pochi punti e permettere ai bordi di abbassarsi. Il calcolatore stima il diametro della chioma da altezza del supporto, angolo di ramificazione, densità e diametro basale in modo che tu possa prevedere se la corona di supporto generata sarà compatta o espansiva.',
    },
    {
      type: 'paragraph',
      html: 'L\'anteprima dello slicer è essenziale per lo spazio libero della chioma. Osserva i rami che passano attraverso piccoli fori, sotto testo in rilievo, intorno a dita di figurine o tra caratteristiche meccaniche. Se un ramo può raggiungere un\'area, può anche intrappolarsi lì. Una densità più bassa, un diametro di contatto più piccolo, bloccanti di supporto più stretti o la pittura manuale possono impedire che i supporti ad albero diventino più difficili da rimuovere dei supporti a griglia standard.',
    },
    {
      type: 'table',
      headers: ['Comportamento chioma', 'Causa probabile', 'Conseguenza di stampa', 'Soluzione'],
      rows: [
        ['Chioma troppo stretta', 'Angolo e densità sono conservativi', 'I bordi dello sbalzo si abbassano tra i punti di contatto', 'Aumentare la densità o aggiungere punti di supporto manuali'],
        ['Chioma larga ma instabile', 'Angolo alto su un supporto alto', 'Il contatto dell\'ugello può scuotere la struttura', 'Ridurre l\'angolo o aumentare il diametro del tronco'],
        ['Chioma circonda i dettagli', 'Densità alta intorno a geometria complessa', 'I segni di rimozione sono visibili sulle superfici', 'Usare bloccanti di supporto o ridurre la densità'],
        ['Chioma tocca le pareti laterali', 'Lo spazio libero del supporto è troppo piccolo', 'I rami possono fondersi con il pezzo', 'Aumentare la distanza X/Y o ridurre il diametro di contatto'],
      ],
    },
    {
      type: 'card',
      title: 'Il diametro della chioma è un avviso di anteprima',
      html: 'Una grande chioma stimata non è automaticamente negativa. Significa che l\'anteprima dello slicer merita attenzione perché la corona di supporto può diventare la sfida di rimozione dominante.',
    },
    { type: 'title', text: 'Volume di Supporto, Lunghezza del Filamento e Tempo di Stampa', level: 2 },
    {
      type: 'paragraph',
      html: 'Il volume di supporto è il costo pratico delle impostazioni scelte. Un supporto ad albero può sembrare leggero in anteprima, ma una chioma densa e un tronco spesso possono comunque consumare filamento significativo. Il calcolatore riporta il volume stimato in centimetri cubi. Questo aiuta a confrontare le impostazioni prima di slicerare, specialmente quando decidi se un tronco più alto, una densità maggiore o una portata extra dei rami vale il materiale.',
    },
    {
      type: 'paragraph',
      html: 'Il volume non si traduce perfettamente in tempo di stampa perché gli slicer usano diverse larghezze di linea, numero di pareti, motivi di riempimento, limiti di accelerazione e velocità di supporto. Tuttavia, il volume rimane un indicatore solido. Se due impostazioni producono una stabilità simile ma una usa molto meno volume, l\'impostazione con volume inferiore è di solito il miglior punto di partenza. Se l\'impostazione con volume inferiore produce anche un punteggio di stabilità basso, il risparmio potrebbe scomparire quando la stampa fallisce o la faccia inferiore necessita di rilavorazione.',
    },
    {
      type: 'summary',
      title: 'Come ridurre il volume di supporto in sicurezza',
      items: [
        'Riduci prima la densità dei rami quando il punteggio di stabilità è già alto.',
        'Riduci l\'angolo di ramificazione quando la chioma è molto larga e pesante in alto.',
        'Usa un tronco basale più piccolo solo su supporti corti con carichi di sbalzo modesti.',
        'Dividi un albero grande in due alberi più piccoli quando la portata crea una corona voluminosa.',
        'Regola il diametro di contatto separatamente in modo che le cicatrici superficiali non forzino una densità non necessaria.',
      ],
    },
    {
      type: 'message',
      title: 'Il risparmio di materiale è utile solo se il supporto sopravvive',
      html: 'Un supporto fallito costa di solito più filamento di uno leggermente più resistente. Tratta le grandi percentuali di risparmio come un invito a previsualizzare attentamente, non come una prova che il supporto più leggero sia automaticamente corretto.',
    },
    { type: 'title', text: 'Diametro di Contatto del Supporto ad Albero e Qualità della Superficie', level: 2 },
    {
      type: 'paragraph',
      html: 'Il diametro di contatto controlla quanto del supporto ad albero tocca il modello. I contatti piccoli si puliscono bene e riducono le cicatrici, ma possono staccarsi da sbalzi pesanti o caldi. I contatti più grandi tengono meglio e distribuiscono il calore, ma possono saldarsi al PETG, lasciare punti in rilievo sul PLA o danneggiare i dettagli simil-resina sulle stampe decorative. Questo calcolatore stima un diametro di contatto dal diametro del ramo e dalla densità in modo che il risultato rimanga connesso alla struttura di supporto invece di essere trattato come un valore cosmetico isolato.',
    },
    {
      type: 'paragraph',
      html: 'Le impostazioni di contatto devono essere regolate insieme alla distanza Z superiore e al comportamento dell\'interfaccia. Se lo spazio verticale è troppo piccolo, anche un contatto minuscolo può aderire fortemente. Se lo spazio verticale è troppo grande, un contatto largo potrebbe comunque non supportare lo sbalzo perché il filamento ha spazio per abbassarsi. Per le parti funzionali, testa il diametro di contatto su uno sbalzo di calibrazione fatto dello stesso materiale, dimensione dell\'ugello, altezza dello strato e impostazioni di raffreddamento usate per il modello reale.',
    },
    {
      type: 'list',
      items: [
        'Usa diametri di contatto più piccoli su superfici cosmetiche visibili.',
        'Usa contatti più grandi sotto ponti pesanti, sbalzi spessi o materiali ad alta temperatura.',
        'Aumenta la distanza Z superiore prima di incolpare la densità dell\'albero quando i supporti sono difficili da rimuovere.',
        'Riduci la velocità dell\'interfaccia di supporto se i punti di contatto si staccano durante la stampa.',
        'Controlla se lo slicer chiama questa impostazione diametro di contatto, diametro della punta o contatto interfaccia supporto.',
      ],
    },
    {
      type: 'tip',
      title: 'Il PETG necessita di cautela extra',
      html: 'Il PETG aderisce aggressivamente al materiale di supporto stampato dallo stesso filamento. Una densità dell\'albero moderata con una distanza Z accurata funziona spesso meglio di una chioma molto densa con grandi contatti.',
    },
    { type: 'title', text: 'Flusso di Lavoro Raccomandato per i Supporti ad Albero dello Slicer', level: 2 },
    {
      type: 'paragraph',
      html: 'Inizia inserendo l\'altezza del punto di appoggio più alto, non l\'altezza totale del modello. Un modello può essere alto mentre la regione supportata è vicina al piano, o corto mentre uno sbalzo critico si trova in alto su un\'isola stretta. Poi scegli un angolo di ramificazione nella gamma bilanciata e imposta la densità dei rami secondo la qualità superficiale di cui hai bisogno. Infine, imposta il diametro basale del tronco in base all\'altezza e al carico previsto. Il calcolatore mostrerà se la combinazione è efficiente in volume, stabile o rischiosa.',
    },
    {
      type: 'paragraph',
      html: 'Dopo il calcolo, passa all\'anteprima dello slicer e ispeziona il supporto ad albero generato dal primo strato di supporto al contatto finale. Cerca partenze fluttuanti, radici di ramo molto sottili, rami che passano troppo vicino al modello e isole di sbalzo non supportate. Se il supporto è instabile nel calcolatore e appare scarso nell\'anteprima, rinforza il tronco o riduci l\'angolo di ramificazione. Se il supporto è stabile ma visivamente voluminoso, riduci la densità e controlla se il modello di contatto copre ancora lo sbalzo.',
    },
    {
      type: 'diagnostic',
      variant: 'success',
      title: 'Una buona impostazione di supporto ad albero è noiosa in anteprima',
      html: 'L\'anteprima dovrebbe mostrare un tronco chiaro, percorsi dei rami corti, sufficienti contatti sotto lo sbalzo e spazio aperto intorno ai dettagli. Se l\'albero ha un aspetto visivamente drammatico, potrebbe star facendo troppo.',
    },
    {
      type: 'summary',
      title: 'Sequenza rapida di regolazione',
      items: [
        'Inserisci l\'altezza del punto di appoggio, non solo l\'altezza del modello.',
        'Inizia vicino a 45-50° per l\'angolo di ramificazione.',
        'Usa 30-45% di densità per stampe PLA generali, poi regola dall\'anteprima.',
        'Aumenta il diametro del tronco prima di rendere i supporti alti estremamente densi.',
        'Conferma il diametro di contatto e lo spazio libero nell\'anteprima reale dello slicer.',
      ],
    },
    { type: 'title', text: 'Quando i Supporti ad Albero Sono Migliori dei Supporti Normali', level: 2 },
    {
      type: 'paragraph',
      html: 'I supporti ad albero sono più utili quando il supporto è necessario in regioni isolate: braccia di figurine, caschi, corna di creature, sculture organiche, archi decorativi e sbalzi curvi. Evitano di riempire l\'intera area sotto il modello, quindi spesso usano meno filamento e lasciano meno cicatrici dei supporti a griglia. Sono anche utili quando i supporti standard creerebbero una grande parete difficile da rimuovere da una superficie curva.',
    },
    {
      type: 'paragraph',
      html: 'I supporti standard possono comunque essere migliori per sbalzi tecnici piatti, ripiani orizzontali larghi e superfici che necessitano di un\'interfaccia di supporto uniforme. Una chioma di supporto ad albero tocca punti selezionati, mentre i supporti normali possono fornire un piano più uniforme. Se la faccia inferiore deve essere dimensionalmente accurata, confronta entrambi gli approcci. Un albero denso può usare più materiale di un semplice supporto rettilineo se lo sbalzo è largo e piatto.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Supporti ad albero',
          description: 'Migliori per geometria organica, aree di contatto sparse e modelli dove l\'accesso di rimozione è importante.',
          highlight: true,
          points: ['Meno materiale su sbalzi isolati', 'Accesso più pulito intorno a forme curve', 'Sensibile all\'angolo dei rami e alla rigidità del tronco'],
        },
        {
          title: 'Supporti normali',
          description: 'Migliori per sbalzi piatti larghi, interfacce prevedibili e superfici meccaniche semplici.',
          points: ['Copertura uniforme della faccia inferiore', 'Spesso più facili da calcolare', 'Possono usare molto più filamento sotto modelli complessi'],
        },
      ],
    },
    {
      type: 'card',
      title: 'Usa entrambi i tipi di supporto quando il modello lo richiede',
      html: 'Molti slicer permettono la pittura dei supporti, i bloccanti o le mesh modificatrici. Un modello può usare supporti ad albero per le caratteristiche organiche e supporti normali per una superficie tecnica piatta.',
    },
  ],
  faq: [
    {
      question: 'Qual è un buon angolo di ramificazione per i supporti ad albero?',
      answer: 'Un intervallo pratico di partenza è circa 40-50°. Usa angoli più bassi per supporti alti e angoli più alti solo quando serve più portata e il tronco è abbastanza robusto.',
    },
    {
      question: 'Una maggiore densità di supporto ad albero migliora sempre la qualità di stampa?',
      answer: 'No. Una densità maggiore migliora la copertura di contatto e la stabilità, ma aumenta anche filamento, tempo di stampa e cicatrici di supporto. Usa la densità più bassa che supporta lo sbalzo in modo affidabile.',
    },
    {
      question: 'Come dovrei scegliere il diametro basale del tronco?',
      answer: 'Aumenta il diametro basale del tronco all\'aumentare dell\'altezza del punto di appoggio. I supporti alti necessitano di un percorso di carico più forte, mentre i supporti corti possono spesso usare un tronco più piccolo per risparmiare materiale.',
    },
    {
      question: 'Perché il diametro della chioma è importante?',
      answer: 'Il diametro della chioma prevede quanto diventa larga la corona superiore dei rami. Una chioma larga può supportare bene, ma può collisionare con i dettagli, intrappolarsi in cavità o diventare difficile da rimuovere.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Inserisci l\'altezza del punto di appoggio', text: 'Usa la distanza verticale dal piano di stampa all\'area del modello che necessita di supporto.' },
    { name: 'Imposta angolo e densità dei rami', text: 'Scegli i valori previsti dell\'angolo di ramificazione e della densità dei rami dello slicer.' },
    { name: 'Aggiungi il diametro basale del tronco', text: 'Inserisci il diametro approssimativo del tronco principale dell\'albero usato dallo slicer.' },
    { name: 'Verifica stabilità e volume', text: 'Confronta il punteggio di stabilità, il diametro della chioma e il volume di supporto stimato prima di slicerare.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Calcolatore Densità Supporti ad Albero',
      description: 'Ottimizza la densità dei supporti ad albero, l\'angolo di ramificazione, il diametro basale del tronco, il diametro della chioma, il volume di supporto e la stabilità nella stampa 3D.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Qual è un buon angolo di ramificazione per i supporti ad albero?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Un intervallo pratico di partenza è circa 40-50°, con angoli più bassi per supporti alti e angoli più ampi solo quando serve più portata.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Come regolare la densità dei supporti ad albero per una stampa 3D',
      step: [
        { '@type': 'HowToStep', text: 'Inserisci l\'altezza del punto di appoggio.' },
        { '@type': 'HowToStep', text: 'Imposta angolo di ramificazione, densità dei rami e diametro basale del tronco.' },
        { '@type': 'HowToStep', text: 'Verifica diametro della chioma, volume di supporto e punteggio di stabilità.' },
        { '@type': 'HowToStep', text: 'Applica i valori nell\'anteprima dello slicer e regola le impostazioni di contatto.' },
      ],
    },
  ],
};
