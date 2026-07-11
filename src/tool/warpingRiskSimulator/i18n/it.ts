import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WarpingRiskSimulatorUI } from '../ui';

const slug = 'simulatore-rischio-warping-stampa-3d';
const title = 'Simulatore di Rischio Warping per la Stampa 3D';
const description = 'Stima il sollevamento del primo strato e il rischio di warping basandosi sul ritiro del materiale, area di impronta, diagonale più lunga, temperatura del piatto, temperatura ambiente e condizioni della camera.';

const faqData = [
  {
    question: 'Perché la diagonale più lunga influisce sul warping più dell\'area di impronta?',
    answer: 'La diagonale più lunga rappresenta il percorso di contrazione continua più esteso. Un pezzo lungo può accumulare abbastanza ritiro lineare da sollevare gli angoli anche se l\'area di contatto totale sembra grande.',
  },
  {
    question: 'Questo simulatore garantisce che la mia stampa non si deformi?',
    answer: 'No. È una stima del rischio. Filamento umido, piani di stampa sporchi, altezza del primo strato, correnti d\'aria, geometria del pezzo e scelte di raffreddamento dello slicer possono modificare il risultato.',
  },
  {
    question: 'Quali materiali hanno più bisogno di una camera chiusa?',
    answer: 'ABS, ASA, Nylon e PC sono i più sensibili alla camera in questo modello perché combinano temperature di lavorazione più elevate, un ritiro più forte e una maggiore tensione di raffreddamento.',
  },
  {
    question: 'Come viene stimata la larghezza del brim?',
    answer: 'Il simulatore parte dal cinque percento della diagonale più lunga e lo scala in base al rischio calcolato, quindi regola il risultato su valori pratici dello slicer.',
  },
];

const howToData = [
  { name: 'Scegli il materiale', text: 'Seleziona PLA, PETG, ABS, ASA, Nylon, PC o TPU in modo che il simulatore applichi una classe di ritiro.' },
  { name: 'Inserisci impronta e diagonale', text: 'Usa l\'area della superficie a contatto con il piatto e la distanza più lunga da angolo ad angolo del pezzo.' },
  { name: 'Imposta l\'ambiente termico', text: 'Inserisci la temperatura del piatto e quella ambiente, poi indica se la stampante ha una camera chiusa.' },
  { name: 'Copia le impostazioni dello slicer', text: 'Usa il brim, l\'adesione, il raffreddamento e le impostazioni della camera suggeriti come profilo iniziale.' },
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

export const content: ToolLocaleContent<WarpingRiskSimulatorUI> = {
  slug,
  title,
  description,
  ui: {
    unitSystemLabel: 'Sistema di unità',
    unitMetric: 'Metrico',
    unitImperial: 'Imperiale',
    unitCelsius: '°C',
    unitFahrenheit: '°F',
    unitMillimeter: 'mm',
    unitInch: 'pol',
    noBrim: '0',
    material: 'Materiale',
    footprintArea: 'Area di impronta',
    footprintHelp: 'Area effettivamente a contatto con il piatto di stampa, non la superficie totale del modello.',
    diagonal: 'Diagonale più lunga',
    diagonalHelp: 'Distanza da angolo ad angolo più lunga del primo strato. Questo è il vettore principale di tensione termica.',
    bedTemperature: 'Temperatura del piatto',
    bedTemperatureWarning: 'Avviso di temperatura',
    ambientTemperature: 'Temperatura ambiente',
    chamber: 'Camera chiusa',
    chamberOn: 'Chiusa o protetta attivamente',
    chamberOff: 'Stampante aperta',
    riskLow: 'Basso',
    riskMedium: 'Medio',
    riskHigh: 'Alto',
    riskCritical: 'Critico',
    riskIndex: 'Indice di rischio',
    thermalIndex: 'Indice di tensione termica',
    deltaT: 'Delta T',
    brimRecommendation: 'Raccomandazione brim',
    adhesionDiagnosis: 'Diagnosi di adesione',
    adhesionStrength: 'Scala di adesione',
    criticalWarnings: 'Avvisi critici',
    whyDiagonalMatters: 'Perché la diagonale è importante',
    recommendedSettings: 'Impostazioni consigliate dello slicer',
    copySettings: 'Copia impostazioni',
    copied: 'Copiato',
    simulatorNotice: 'Questa è una stima del rischio, non una garanzia di successo. Umidità del filamento, contaminazione del piatto, Z offset, correnti d\'aria e modifiche al raffreddamento rimangono variabili esterne.',
    warnings: {
      openTechnicalMaterial: '{material} senza camera chiusa è una condizione grave di warping.',
      bedTemperatureHigh: 'La temperatura del piatto per {material} supera l\'intervallo consigliato di {min}-{max} {unit}. Previeni ammorbidimento, piede d\'elefante o artefatti di adesione.',
      bedTemperatureLow: 'La temperatura del piatto per {material} è inferiore all\'intervallo consigliato di {min}-{max} {unit}. La presa del primo strato potrebbe essere troppo debole per questa geometria.',
      narrowFootprint: 'L\'impronta è stretta rispetto alla diagonale, quindi il sollevamento degli angoli può accumularsi rapidamente.',
      highDeltaT: 'Il divario di temperatura tra piatto e ambiente è molto alto; controlla il flusso d\'aria e la velocità di raffreddamento.',
    },
    diagnosis: {
      critical: 'Il brim è obbligatorio. Usa una superficie adesiva dedicata ed evita di stampare questo materiale all\'aperto.',
      highEnclosed: 'Brim largo e adesivo sono fortemente raccomandati.',
      highOpen: 'Usa brim, adesivo e una camera chiusa prima di iniziare.',
      mediumEasyMaterial: 'Usa una superficie PEI pulita; il brim è opzionale per angoli acuti.',
      medium: 'Usa brim o mouse ears agli angoli e verifica l\'adesione al piatto.',
      low: 'Sicuro in condizioni normali del primo strato.',
    },
    adhesionOptions: {
      low: ['PEI pulito o foglio strutturato: presa normale, rimozione più facile.'],
      medium: ['Colla stick o strato distaccante PVA: presa extra leggera e rilascio PETG più sicuro.', 'Mouse ears: presa localizzata per angoli senza brim completo.'],
      high: ['Brim largo più colla stick: ampio supporto meccanico con pulizia moderata.', 'Magigoo o adesivo simile: presa più forte per ABS, ASA, PETG e varianti di Nylon.'],
      criticalDefault: ['Brim a larghezza intera: impronta massima del primo strato.', 'Adesivo ad alta resistenza: usa PEI più un adesivo ad alta resistenza.', 'Camera chiusa: necessaria affinché l\'adesivo funzioni in modo consistente.'],
      criticalTechnical: ['Brim a larghezza intera: impronta massima del primo strato.', 'Adesivo ad alta resistenza: usa un adesivo specifico per materiale abbinato a Nylon o PC.', 'Camera chiusa: necessaria affinché l\'adesivo funzioni in modo consistente.'],
    },
    slicerSettings: {
      brimWidth: 'Larghezza brim: {value}',
      bedAdhesion: 'Adesione al piatto: {value}',
      lowAdhesion: 'PEI pulito o foglio strutturato',
      highAdhesion: 'PEI più colla stick, Magigoo o adesivo specifico per materiale',
      cooling: 'Raffreddamento: {value}',
      normalCooling: 'Raffreddamento normale del pezzo dopo lo strato 3',
      technicalCooling: 'Raffreddamento del pezzo spento per i primi 5-8 strati',
      enclosedChamber: 'Tieni la camera chiusa finché il pezzo non si raffredda sotto l\'intervallo di transizione vetrosa',
      openChamber: 'Proteggi la stampante da correnti d\'aria e flusso d\'aria ambiente',
      skirtEnough: '0 mm, la gonna è sufficiente',
    },
    diagonalExplanation: 'La diagonale più lunga si comporta come il vettore di tensione principale: mentre il pezzo si raffredda, il ritiro si accumula lungo quella campata e carica gli angoli anche quando l\'area di impronta sembra generosa.',
  },
  seo: [
    { type: 'title', text: 'Come stimare il rischio di warping prima di slicare una stampa 3D', level: 2 },
    {
      type: 'paragraph',
      html: 'Il warping non è solo un problema di materiale e non è solo un problema di adesione al piatto. Si verifica quando uno strato stampato si raffredda, si contrae e crea abbastanza tensione interna da superare la presa del primo strato. Una piccola staffa in ABS può fallire perché il polimero si ritira fortemente; un grande cartello in PLA può fallire perché la diagonale è abbastanza lunga da accumulare contrazione su un\'ampia campata. La domanda utile quindi non è semplicemente <strong>questo materiale si deformerà?</strong> ma <strong>questa geometria e ambiente termico creano più forza di trazione di quanto il piatto possa resistere?</strong>',
    },
    {
      type: 'paragraph',
      html: 'Questo simulatore utilizza un Indice di Tensione Termica euristico: <strong>fattore di ritiro del materiale per diagonale più lunga per differenza di temperatura piatto-ambiente, diviso per area di impronta</strong>. La formula è volutamente pratica. Non pretende di essere un\'analisi agli elementi finiti, ma combina le variabili che gli operatori possono misurare prima di stampare: famiglia di materiale, area di contatto, campata lineare più lunga, temperatura del piatto, temperatura ambiente e se la stampante è chiusa.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Usa il risultato come segnale preventivo',
      badge: 'Stima',
      html: 'Un punteggio basso significa che la stampa difficilmente si solleverà se il primo strato è pulito e ben calibrato. Un punteggio alto o critico significa che il profilo dello slicer deve essere modificato prima di stampare: brim più largo, adesivo, meno raffreddamento, protezione dalle correnti d\'aria o un materiale diverso. Il simulatore non può vedere filamento umido, PEI oleoso, un ugello troppo lontano dal piatto o un pezzo con punti di contatto minuscoli agli angoli.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '5%', label: 'larghezza iniziale del brim come frazione della diagonale più lunga', icon: 'mdi:ruler' },
        { value: '1,85x', label: 'moltiplicatore severo per camera aperta per ABS, ASA, Nylon e PC', icon: 'mdi:home-alert' },
        { value: '0-100', label: 'scala di rischio mappata dall\'Indice di Tensione Termica', icon: 'mdi:gauge' },
      ],
    },
    { type: 'title', text: 'Perché la diagonale più lunga può essere più pericolosa dell\'area', level: 2 },
    {
      type: 'paragraph',
      html: 'L\'area di impronta indica quanta superficie è disponibile per l\'adesione. La diagonale indica quanto lontano la contrazione termica può accumularsi prima di raggiungere un angolo o un\'estremità sottile. Due pezzi possono avere la stessa area e comportarsi in modo molto diverso: una base quadrata compatta ha percorsi di contrazione brevi in tutte le direzioni, mentre una striscia lunga e stretta concentra il ritiro lungo una singola linea e cerca di sollevarsi alle estremità.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Impronta compatta',
          description: 'Una base quadrata o rotonda distribuisce la contrazione attraverso molti percorsi brevi. Gli angoli sono più vicini al centro, quindi il braccio di leva per il sollevamento è minore.',
          icon: 'mdi:crop-square',
          points: ['Migliore distribuzione del carico', 'Minore leva angolare', 'Brim spesso opzionale su materiali facili'],
        },
        {
          title: 'Impronta a diagonale lunga',
          description: 'Un lungo rettangolo, telaio, lama, pannello di chiusura o guida permette al ritiro di accumularsi lungo una direzione dominante. Le estremità e gli angoli ricevono la massima forza di distacco.',
          icon: 'mdi:vector-line',
          highlight: true,
          points: ['Maggiore tensione accumulata', 'Gli angoli si sollevano per primi', 'Brim o mouse ears spesso necessari'],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Come misurare rapidamente la diagonale',
      html: 'Nell\'anteprima dello slicer, guarda il primo strato dall\'alto e misura la distanza da angolo ad angolo più lunga della parte che tocca il piatto. Per un\'impronta rettangolare, usa la diagonale del rettangolo, non solo la lunghezza X o Y. Per un pezzo irregolare, usa la campata dritta più lunga tra due punti esterni.',
    },
    {
      type: 'table',
      headers: ['Configurazione geometrica', 'Sintomo tipico', 'Azione preventiva'],
      rows: [
        ['Guida lunga e sottile', 'Le estremità si sollevano mentre il centro rimane attaccato', 'Usa brim o mouse ears a entrambe le estremità'],
        ['Grande pannello piatto', 'Gli angoli si curvano verso l\'alto gradualmente', 'Usa camera chiusa, raffreddamento più lento e adesivo'],
        ['Pezzo piccolo e alto', 'La base rimane attaccata ma la torre traballa', 'Il warping non è il rischio principale; migliora la stabilità'],
        ['Telaio aperto', 'Gli angoli interni tirano verso l\'interno', 'Aggiungi brim, aumenta la larghezza del primo strato, riduci la ventola'],
      ],
    },
    { type: 'title', text: 'Classi di ritiro dei materiali utilizzate dal simulatore', level: 2 },
    {
      type: 'paragraph',
      html: 'Diversi termoplastici si contraggono in quantità diverse quando si raffreddano dalla temperatura di estrusione alla temperatura ambiente. PLA e TPU sono generalmente tolleranti perché stampano a temperature più basse e generano meno tensione di raffreddamento. Il PETG sta nel mezzo: aderisce fortemente ma può ancora tirare sugli angoli acuti. ABS, ASA, Nylon e PC sono trattati come materiali tecnici ad alto rischio perché combinano temperature di estrusione più elevate, un ritiro più forte e una maggiore necessità di una camera calda e stabile.',
    },
    {
      type: 'table',
      headers: ['Materiale', 'Classe di ritiro', 'Strategia comune del piatto', 'Sensibilità alla camera'],
      rows: [
        ['PLA', 'Bassa', 'PEI pulito, piatto moderato', 'Bassa'],
        ['TPU', 'Bassa', 'Foglio pulito, evitare schiacciamento eccessivo', 'Bassa'],
        ['PETG', 'Media', 'PEI strutturato o strato distaccante', 'Media'],
        ['ABS', 'Alta', 'PEI più adesivo o impasto ABS dove appropriato', 'Molto alta'],
        ['ASA', 'Alta', 'PEI più adesivo, raffreddamento controllato', 'Molto alta'],
        ['Nylon', 'Alta', 'Adesivo specifico per materiale, filamento asciutto', 'Molto alta'],
        ['PC', 'Alta', 'Piatto ad alta temperatura e adesivo', 'Molto alta'],
      ],
    },
    {
      type: 'proscons',
      title: 'Cambiare materiale invece di combattere il warping',
      items: [
        { pro: 'Passare da ABS ad ASA può migliorare la durata esterna mantenendo un comportamento termico simile.', con: 'L\'ASA necessita ancora di disciplina della camera e può deformarsi su pezzi lunghi.' },
        { pro: 'Passare da ABS a PETG riduce il ritiro ed è spesso sufficiente per staffe e alloggiamenti.', con: 'Il PETG ha una resistenza al calore inferiore e una rigidità diversa da ABS o PC.' },
        { pro: 'Il Nylon caricato con fibre può ridurre alcuni percorsi di ritiro e migliorare la rigidità.', con: 'Richiede essiccazione, ugelli resistenti all\'abrasione e un forte controllo dell\'adesione.' },
      ],
    },
    { type: 'title', text: 'Delta T: perché temperatura del piatto e temperatura ambiente contano entrambe', level: 2 },
    {
      type: 'paragraph',
      html: 'Il simulatore usa <strong>Delta T</strong> come temperatura del piatto meno temperatura ambiente. Non è la stessa cosa della temperatura dell\'ugello, ma è un utile indicatore del gradiente termico che la parte inferiore del pezzo sperimenta. Un piatto caldo riduce la contrazione precoce all\'interfaccia, ma una stanza molto fredda o un forte flusso d\'aria possono comunque estrarre calore dagli strati superiori e creare un gradiente di tensione tra la base ancorata e il corpo in raffreddamento del pezzo.',
    },
    {
      type: 'paragraph',
      html: 'Per il PLA, un Delta T moderato può essere innocuo perché il materiale si contrae meno aggressivamente. Per ABS, ASA, Nylon e PC, la stessa geometria alla stessa temperatura del piatto può fallire se la stampante è esposta a correnti d\'aria. Ecco perché il calcolo applica un moltiplicatore severo quando questi materiali tecnici vengono stampati senza camera chiusa.',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Stampante aperta con ABS, ASA, Nylon o PC',
      badge: 'Condizione critica',
      html: 'Se la camera è aperta, la stampa è esposta a raffreddamento locale, movimento di porte, flusso d\'aria HVAC e rapidi cambiamenti di temperatura degli strati. Il primo strato può sembrare perfetto per i primi venti minuti e sollevarsi comunque più tardi mentre il pezzo accumula più tensione di ritiro.',
    },
    {
      type: 'list',
      icon: 'mdi:thermometer',
      items: [
        'Una camera più calda riduce la differenza di temperatura tra i nuovi strati e quelli più vecchi.',
        'Una camera chiusa rallenta anche il raffreddamento dopo la stampa, riducendo il distacco improvviso degli angoli.',
        'Le barriere anticorrente d\'aria aiutano, ma non equivalgono a una camera riscaldata stabile per PC o Nylon.',
        'Aumentare la sola temperatura del piatto può migliorare la presa, ma può anche aumentare il piede d\'elefante sui materiali morbidi.',
      ],
    },
    { type: 'title', text: 'Come viene interpretato l\'Indice di Tensione Termica', level: 2 },
    {
      type: 'paragraph',
      html: 'L\'Indice di Tensione Termica è un punteggio relativo, non una forza misurata in newton. Aumenta quando il fattore di ritiro, la diagonale o il Delta T aumentano. Diminuisce quando l\'area di impronta aumenta perché una maggiore superficie di contatto può distribuire lo stesso carico di trazione. Il valore viene quindi mappato su una percentuale di rischio da 0 a 100 in modo che diverse configurazioni di stampa possano essere confrontate rapidamente.',
    },
    {
      type: 'table',
      headers: ['Intervallo di rischio', 'Significato', 'Risposta consigliata'],
      rows: [
        ['0-31%', 'Basso', 'Pulisci il piatto, verifica il primo strato, nessuna adesione speciale necessaria per la maggior parte delle forme'],
        ['32-57%', 'Medio', 'Usa brim sugli angoli acuti, riduci la ventola iniziale, ispeziona il contatto dell\'impronta'],
        ['58-81%', 'Alto', 'Usa brim largo, adesivo, camera chiusa se il materiale lo richiede, evita correnti d\'aria'],
        ['82-100%', 'Critico', 'Consideralo probabile che si deformi a meno che geometria, materiale o ambiente non cambino'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:calculator-variant',
      title: 'Perché dividere per l\'area di impronta?',
      html: 'Un\'impronta più grande dà al piatto più opportunità di resistere alla forza di distacco. Il modello premia i pezzi con contatto ampio e continuo e penalizza le basi strette, i piedi piccoli e i pezzi lunghi che hanno solo una sottile striscia a contatto con la superficie.',
    },
    { type: 'title', text: 'Larghezza del brim, mouse ears e scelte di adesivo', level: 2 },
    {
      type: 'paragraph',
      html: 'La raccomandazione del brim parte da <strong>Diagonale x 0,05</strong>. Una diagonale di 180 mm parte quindi vicino a 9 mm prima della scalatura in base al rischio. In pratica, il brim non dovrebbe essere scelto solo in base al materiale. Un piccolo cubo in PLA potrebbe non aver bisogno di brim, mentre una spada, un cartello o una guida lunga in PLA possono beneficiare di un brim modesto perché la diagonale è il percorso di tensione dominante.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: 'Brim', description: 'La scelta polivalente migliore per aumentare il contatto del primo strato attorno all\'intero pezzo.', icon: 'mdi:border-outside', points: ['Facile da rimuovere su PLA', 'Molto utile sugli angoli ABS'] },
        { title: 'Mouse ears', description: 'Cuscinetti circolari localizzati posizionati agli angoli o alle estremità sottili dove inizia il sollevamento.', icon: 'mdi:circle-outline', points: ['Meno pulizia', 'Buono per guide e telai'] },
        { title: 'Adesivo', description: 'Migliora la presa chimica o meccanica tra il polimero e la superficie di stampa.', icon: 'mdi:water-plus', points: ['Utile per Nylon e PC', 'La scelta specifica per superficie è importante'] },
      ],
    },
    {
      type: 'tip',
      title: 'Non fare del brim l\'unica soluzione',
      html: 'Se il simulatore segnala un rischio critico, un brim più largo può ritardare il fallimento ma non eliminare la tensione sottostante. Combina il brim con camera chiusa, raffreddamento iniziale più lento, un piatto più pulito e modifiche geometriche come angoli arrotondati o pezzi divisi.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Warping', definition: 'Deformazione verso l\'alto causata dalla contrazione di raffreddamento che supera l\'adesione al piatto.' },
        { term: 'Area di impronta', definition: 'L\'area del modello che tocca il piatto di stampa sul primo strato.' },
        { term: 'Diagonale più lunga', definition: 'La campata dritta più lunga attraverso la forma di contatto del primo strato.' },
        { term: 'Delta T', definition: 'La differenza di temperatura tra il piatto e l\'aria ambiente circostante.' },
        { term: 'Brim', definition: 'Anelli perimetrali extra del primo strato stampati attorno al pezzo per aumentare l\'adesione.' },
      ],
    },
    { type: 'title', text: 'Impostazioni pratiche dello slicer per pezzi ad alto rischio', level: 2 },
    {
      type: 'list',
      icon: 'mdi:tune',
      items: [
        'Aumenta la larghezza della linea del primo strato per creare più contatto, ma evita uno schiacciamento Z eccessivo che causa creste.',
        'Usa un primo strato più lento in modo che il polimero aderisca al piatto prima che gli strati successivi tirino su di esso.',
        'Disattiva o riduci il raffreddamento del pezzo per ABS, ASA, Nylon e PC durante i primi strati.',
        'Aggiungi un brim abbastanza largo da superare gli angoli acuti e le estremità strette.',
        'Evita di posizionare grandi pezzi in materiale tecnico vicino a porte della camera, prese d\'aria o pannelli laterali freddi.',
      ],
    },
    {
      type: 'message',
      title: 'Modifiche geometriche che riducono il rischio',
      ariaLabel: 'Idee di mitigazione geometrica',
      html: 'Arrotonda gli angoli acuti, dividi i pannelli molto lunghi in sezioni più corte, aggiungi linguette temporanee alle estremità sottili, orienta il pezzo in modo che il percorso di tensione più lungo sia più corto, o aggiungi cuscinetti sacrificali che possono essere tagliati dopo la stampa. Questi cambiamenti spesso funzionano meglio che semplicemente alzare la temperatura del piatto.',
    },
    {
      type: 'summary',
      title: 'Lista di controllo rapida',
      items: [
        'Materiale ad alto ritiro più camera aperta è il segnale di avvertimento più forte.',
        'Diagonale lunga più impronta piccola significa che angoli ed estremità meritano brim o mouse ears.',
        'La temperatura elevata del piatto non annulla una stanza fredda o un ambiente pieno di correnti d\'aria.',
        'Il risultato è una stima di pianificazione; la calibrazione del primo strato e le condizioni del filamento decidono ancora la stampa finale.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
