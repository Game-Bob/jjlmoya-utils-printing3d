import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ElephantFootCompensationCalculatorUI } from '../ui';

const slug = 'calcolatore-compensazione-piede-elefante';
const title = 'Calcolatore di Compensazione del Piede d\'Elefante: Correzione Dimensionale di Precisione';
const description = 'Calcola l\'espansione orizzontale negativa e la profondità dello smusso CAD per il primo strato di stampa 3D utilizzando l\'errore dimensionale misurato, l\'altezza dello strato, la pressione Z-offset e la temperatura del piatto.';

const faqData = [
  {
    question: 'Qual è il miglior valore di compensazione per il piede d\'elefante?',
    answer: 'Il miglior valore è l\'errore di base misurato corretto per l\'altezza del primo strato, la pressione Z effettiva e la temperatura del piatto. Questo calcolatore lo riporta come valore di espansione orizzontale negativa dello slicer.',
  },
  {
    question: 'Dovrei usare l\'espansione orizzontale o uno smusso CAD?',
    answer: 'Usa l\'espansione orizzontale dello slicer per una correzione rapida a livello di profilo. Usa uno smusso CAD per parti funzionali in cui il bordo inferiore tocca un\'altra parte, si trova su una superficie di riferimento o deve rimanere ripetibile tra slicer diversi.',
  },
  {
    question: 'Perché la temperatura del piatto influisce sul piede d\'elefante?',
    answer: 'Un piatto più caldo mantiene il polimero inferiore più morbido più a lungo. Il cordone ammorbidito può fluire orizzontalmente sotto la pressione dell\'ugello, quindi il calcolatore aumenta la correzione al di sopra del punto di riferimento di 60 °C.',
  },
  {
    question: 'Il piede d\'elefante è la stessa cosa della sovraestrusione?',
    answer: 'No. La sovraestrusione colpisce molti strati. Il piede d\'elefante si concentra alla base dove i primi strati vengono compressi e riscaldati dal piatto, sebbene la sovraestrusione possa peggiorarlo.',
  },
];

const howToData = [
  { name: 'Stampare un coupon', text: 'Usa lo stesso materiale, temperatura del piatto, altezza del primo strato e impostazioni del primo strato della stampa di produzione.' },
  { name: 'Misurare l\'errore di base', text: 'Sottrai la dimensione stabile della parete superiore dalla dimensione più larga della base.' },
  { name: 'Inserire pressione e temperatura', text: 'Fornisci l\'altezza del primo strato, il gap di pressione Z effettivo e la temperatura del piatto.' },
  { name: 'Applicare la correzione', text: 'Usa il valore di espansione orizzontale negativa nello slicer o modella lo smusso a 45 gradi suggerito.' },
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

export const content: ToolLocaleContent<ElephantFootCompensationCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    controlsAriaLabel: 'Input di compensazione del piede d\'elefante',
    resultsAriaLabel: 'Risultati di correzione del piede d\'elefante',
    canvasAriaLabel: 'Visualizzazione in sezione trasversale del profilo attuale e corretto del piede d\'elefante',
    unitSystemLabel: 'Unità',
    metricLabel: 'Metrico',
    imperialLabel: 'Imperiale',
    materialLabel: 'Preimpostazione materiale',
    plaLabel: 'PLA',
    petgLabel: 'PETG',
    absAsaLabel: 'ABS/ASA',
    customMaterialLabel: 'Personalizzato',
    measuredErrorLabel: 'Errore di base misurato',
    layerHeightLabel: 'Altezza del primo strato',
    zPressureLabel: 'Gap di pressione Z-offset',
    bedTemperatureLabel: 'Temperatura del piatto',
    targetToleranceLabel: 'Tolleranza target',
    expansionLabel: 'Espansione dello slicer',
    chamferLabel: 'Smusso CAD',
    thermalFactorLabel: 'Fattore termico',
    verdictLabel: 'Obiettivo di precisione dimensionale',
    currentProfileLabel: 'Piede d\'elefante misurato',
    correctedProfileLabel: 'Profilo corretto',
    slicerCommandLabel: 'Comando slicer',
    cadCommandLabel: 'Comando CAD',
    copyButton: 'Copia rapporto di correzione',
    copiedButton: 'Copiato',
    copyTemplate: 'Compensazione piede d\'elefante: espansione orizzontale slicer {expansion}, smusso CAD {chamfer} a 45°, fattore termico {phi}, verdetto: {verdict}.',
    slicerCommandTemplate: 'Espansione orizzontale: {expansion} {unit}',
    cadCommandTemplate: '45° x {chamfer} {unit}',
    correctionCanvasTemplate: 'E_corr {correction} {unit}',
    pressureCanvasTemplate: 'phi_temp {phi} | rapporto pressione Z {ratio}',
    optimalVerdict: '< 0.05 mm di tolleranza: correzione opzionale, verificare con calibro.',
    watchVerdict: 'Deviazione controllata: applicare la compensazione dello slicer e ristampare il coupon.',
    severeVerdict: 'Diffusione di base grave: correggere la pressione Z prima di affidarsi all\'offset dello slicer.',
    mmUnit: 'mm',
    inchUnit: 'in',
    celsiusUnit: '°C',
    fahrenheitUnit: '°F',
    degreeUnit: '°',
    multiplierUnit: 'x',
  },
  seo: [
    { type: 'title', text: 'Compensazione del piede d\'elefante come problema di precisione dimensionale', level: 2 },
    { type: 'paragraph', html: 'Il piede d\'elefante è l\'espansione verso l\'esterno dei primi strati stampati oltre il limite CAD nominale. Su un cubo di calibrazione appare come un labbro alla base. Su parti meccaniche diventa un errore funzionale: le code di rondine si bloccano, i fori vicino al piano di costruzione si chiudono, gli incastri a scatto perdono gioco, le piastre di accoppiamento traballano su un bordo rialzato e i blocchetti di misura non siedono più a filo. Un <strong>calcolatore di compensazione del piede d\'elefante</strong> utile non può quindi essere trattato come una regolazione estetica del flusso. Deve convertire un errore dimensionale misurato in un valore di espansione orizzontale negativa e, quando possibile, in uno smusso CAD che rimuova il percorso di materiale compresso dal progetto stesso.' },
    { type: 'paragraph', html: 'Questo calcolatore modella la correzione da tre input fisici che influenzano fortemente il difetto: errore di base misurato, altezza del primo strato e gap di pressione Z effettivo. La relazione principale è <code>E_corr = Errore x (AltezzaStrato / PressioneZOffset) x phi_temp</code>. Il moltiplicatore di temperatura <code>phi_temp</code> aumenta al di sopra di un piatto di riferimento a 60 °C perché una base più calda mantiene il polimero più morbido più a lungo e consente al carico dell\'ugello di spingere il materiale lateralmente. Il risultato viene riportato come espansione orizzontale negativa per lo slicer e come profondità di smusso a 45 gradi per il CAD.' },
    { type: 'stats', columns: 3, items: [
      { value: '0.01 mm', label: 'risoluzione di input per la regolazione dimensionale' },
      { value: '45°', label: 'angolo smusso CAD predefinito' },
      { value: 'phi_temp', label: 'moltiplicatore di flusso della temperatura del piatto' },
    ] },
    { type: 'diagnostic', variant: 'info', title: 'Misura l\'errore, non il labbro visivo', html: 'Stampa un coupon quadrato o rettangolare, misura la parete nominale o la dimensione esterna sopra la base, poi misura la stessa dimensione attraverso i primi strati. La differenza tra queste due misurazioni è l\'errore del piede d\'elefante. Non stimare da una fotografia; lo strumento è progettato per dati da calibro.' },

    { type: 'title', text: 'Perché si verifica il piede d\'elefante: pressione dell\'ugello, calore e flusso di plastica', level: 2 },
    { type: 'paragraph', html: 'Il primo strato viene compresso intenzionalmente in modo che il filamento bagni il piatto e aderisca. Quella compressione trasforma l\'ugello in un piccolo applicatore di pressione. Il polimero fuso esce dall\'ugello, viene schiacciato tra ugello e superficie di costruzione e deve occupare il volume disponibile. Quando il gap Z è troppo piccolo, non c\'è abbastanza spazio verticale per il cordone di estrusione comandato, quindi il materiale fluisce lateralmente. La base si allarga anche quando il resto della stampa è dimensionalmente accurato.' },
    { type: 'paragraph', html: 'La temperatura del piatto cambia la gravità. La PLA a 60 °C può essere vicina alla sua regione di transizione vetrosa, la PETG a 75 °C rimane appiccicosa e compiacente, e l\'ABS o ASA su un piatto a 100 °C rimane calda nei primi strati. Un piatto più caldo non solo migliora l\'adesione; ritarda anche la solidificazione alla base. Ecco perché questo calcolatore applica un fattore termico: <strong>1.00 a 60 °C, più 0.05 per ogni 5 °C aggiuntivi</strong>. Un piatto PETG a 75 °C utilizza quindi un fattore di circa 1.15 prima del clamping.' },
    { type: 'comparative', columns: 3, items: [
      { title: 'Dominato dalla pressione Z', description: 'Un gap dell\'ugello molto basso appiattisce il cordone e spinge la plastica verso l\'esterno. L\'errore è più marcato nel primo strato e spesso migliora dopo la correzione del Z-offset.', points: ['Prima linea larga', 'Superficie schiacciata lucida', 'Bordo simile a brim'] },
      { title: 'Dominato termicamente', description: 'La base rimane morbida perché il calore del piatto o della camera è elevato. Il labbro può estendersi attraverso diversi strati anche con un primo strato ragionevole.', highlight: true, points: ['Bordo inferiore arrotondato', 'Comune in PETG o ABS', 'Raffreddamento lento'] },
      { title: 'Dominato dal flusso', description: 'Il moltiplicatore di estrusione, il diametro del filamento o il flusso del primo strato sono troppo alti. L\'intera regione inferiore può apparire sovra riempita, non solo il perimetro.', points: ['Parte superiore ruvida del primo strato', 'Linee troppo larghe', 'Spazi chiusi'] },
    ] },
    { type: 'tip', title: 'Usa lo Z offset come input, non come supposizione', html: 'Il gap di pressione Z è la distanza effettiva che costringe il cordone nel piatto. Se il tuo slicer riporta un primo strato di 0.20 mm ma la compressione effettiva si comporta come 0.10 mm, usa il gap di pressione più piccolo. Questo rende la compensazione calcolata maggiore, che corrisponde alla fisica di un cordone più compresso.' },

    { type: 'title', text: 'Come misurare l\'espansione di base per il calcolatore', level: 2 },
    { type: 'paragraph', html: 'Usa un coupon di prova semplice con una dimensione esterna nota, come 20.00 mm, 30.00 mm o 40.00 mm. Il coupon deve avere lati verticali dritti, almeno 8-12 mm di altezza e nessuno smusso al primo test. Misura la dimensione del corpo diversi millimetri sopra il piatto dove il piede d\'elefante è scomparso. Poi misura la stessa dimensione nella parte più larga della base. La differenza è l\'errore esterno totale per quell\'asse.' },
    { type: 'paragraph', html: 'Se un cubo di 20.00 mm misura 20.02 mm al centro ma 20.24 mm alla base, l\'errore di base relativo al corpo stabile è 0.22 mm. Inserisci 0.22 mm anziché la differenza dal nominale. Questo rimuove il ritiro non correlato, l\'errore dei passi XY o la distorsione della larghezza di linea dello slicer dal calcolo del piede d\'elefante. Stai isolando la deformazione della base, non calibrando l\'intera stampante.' },
    { type: 'list', items: [
      'Misura dopo che la parte si è raffreddata a temperatura ambiente, soprattutto per ABS, ASA, PETG e parti grandi in PLA.',
      'Usa una leggera pressione del calibro; comprimere una base ammorbidita o testurizzata può nascondere il vero labbro.',
      'Effettua misurazioni sui lati X e Y perché il movimento del piatto, la direzione della ventola e l\'inclinazione del portale possono rendere il difetto asimmetrico.',
      'Ignora il materiale di brim e skirt. Rimuovi il brim pulitamente prima di misurare la parete effettiva della parte.',
      'Ristampa lo stesso coupon dopo aver applicato la compensazione in modo che la misurazione successiva sia confrontabile.',
    ] },
    { type: 'table', headers: ['Osservazione', 'Causa probabile', 'Migliore prima azione'], rows: [
      ['La base è più larga ma la parete superiore è accurata', 'Piede d\'elefante da pressione del primo strato', 'Usa questo calcolatore e applica espansione orizzontale negativa.'],
      ['Ogni strato è sovradimensionato', 'Scala XY, moltiplicatore di estrusione o errore del diametro del filamento', 'Calibra flusso e XY prima della compensazione del piede d\'elefante.'],
      ['Solo gli angoli si gonfiano', 'Avanzamento pressione, velocità o problema di raffreddamento', 'Regola l\'avanzamento pressione o la velocità agli angoli.'],
      ['La faccia inferiore è ruvida e traslucida', 'Ugello troppo vicino o flusso del primo strato troppo alto', 'Alza lo Z-offset o riduci il flusso del primo strato prima di compensare.'],
    ] },

    { type: 'title', text: 'Espansione orizzontale negativa vs smusso CAD', level: 2 },
    { type: 'paragraph', html: 'L\'espansione orizzontale dello slicer sposta il confine del poligono verso l\'interno o l\'esterno prima della generazione del percorso utensile. Per la correzione del piede d\'elefante l\'impostazione è normalmente negativa: se la base misura 0.20 mm troppo larga, lo slicer potrebbe aver bisogno di un valore vicino a -0.20 mm, modificato qui dall\'altezza dello strato, dalla pressione Z e dalla temperatura del piatto. Questo è veloce, reversibile e utile per lotti in cui ogni parte condivide una deformazione simile del primo strato.' },
    { type: 'paragraph', html: 'Uno smusso CAD rimuove materiale dal modello stesso. Il calcolatore riporta una profondità di smusso a 45 gradi come <code>Errore x sqrt(2)</code>, che corrisponde a una faccia diagonale che elimina il labbro di base orizzontale. Gli smussi CAD sono spesso migliori per interfacce critiche perché preservano le dimensioni previste della parete superiore mentre danno al primo strato un percorso di scarico controllato. Sono anche più portabili tra slicer perché la geometria porta la compensazione.' },
    { type: 'proscons', title: 'Scelta di un metodo di correzione', items: [
      { pro: 'L\'espansione orizzontale negativa può essere modificata rapidamente per profilo di materiale o stampante.', con: 'Può influenzare testi piccoli, pareti sottili, perni e fori se applicata globalmente.' },
      { pro: 'Gli smussi CAD sono espliciti e robusti per superfici di accoppiamento vicino al piano di costruzione.', con: 'Richiedono modifiche al modello e potrebbero non essere convenienti per parti scaricate.' },
      { pro: 'Combinare un leggero offset dello slicer con un piccolo smusso può controllare basi severe in PETG o ABS.', con: 'Accumulare correzioni senza rimisurare può ridurre le dimensioni della parte.' },
    ] },
    { type: 'message', title: 'Non compensare alla cieca', html: 'Se il primo strato è visibilmente troppo schiacciato, correggi prima lo Z-offset. La compensazione dovrebbe rimuovere la restante espansione di base prevedibile, non nascondere un ugello che sta arando il primo strato.' },

    { type: 'title', text: 'Compensazione suggerita per materiale', level: 2 },
    { type: 'paragraph', html: 'Il comportamento del materiale è importante perché la temperatura di adesione, la transizione vetrosa, la velocità di raffreddamento e la viscosità influenzano quanto il cordone inferiore può fluire prima di congelarsi. La PLA spesso risponde bene a una piccola espansione orizzontale negativa dopo che lo Z-offset è ragionevole. La PETG potrebbe necessitare di una correzione maggiore perché viene comunemente stampata più calda sul piatto e con un primo strato regolato per una forte adesione. L\'ABS e l\'ASA possono richiedere uno scarico CAD su parti funzionali perché il piatto caldo e la camera mantengono la base morbida più a lungo.' },
    { type: 'table', headers: ['Materiale', 'Intervallo piatto tipico', 'Obiettivo tolleranza iniziale', 'Note sulla compensazione'], rows: [
      ['PLA', '55-65 °C', '< 0.05 mm', 'Inizia con Z-offset preciso, poi usa una piccola espansione orizzontale negativa. Uno smusso è utile per basi a pressare.'],
      ['PETG', '70-85 °C', '< 0.07 mm', 'Aspettati un fattore termico più alto. Evita il flusso eccessivo del primo strato perché la PETG può formare un labbro arrotondato appiccicoso.'],
      ['ABS/ASA', '90-110 °C', '< 0.08 mm', 'Usa smussi CAD per parti di produzione. Il calore della camera può mantenere i primi strati compiacenti.'],
      ['TPU', '40-60 °C', 'specifico dell\'applicazione', 'Il filamento flessibile può deformarsi sotto il calibro. Misura delicatamente e preferisci lo scarico geometrico rispetto a offset globali aggressivi.'],
    ] },
    { type: 'card', title: 'Perché la tabella è un punto di partenza', html: 'Un foglio PEI testurizzato, un piatto di vetro liscio, il diametro dell\'ugello, la larghezza di linea, la velocità del primo strato, il ritardo di raffreddamento, la temperatura della camera e la marca del filamento possono tutti modificare l\'errore misurato. La tabella stabilisce le aspettative; il calcolatore dovrebbe essere guidato dal tuo coupon misurato.' },
    { type: 'summary', title: 'Priorità di regolazione del materiale', items: [
      'PLA: correggi prima lo Z-offset, poi usa una piccola compensazione dello slicer.',
      'PETG: osserva la temperatura del piatto e il flusso del primo strato perché la base rimane mobile.',
      'ABS/ASA: preferisci smussi CAD sulle interfacce di produzione e verifica dopo il riscaldamento della camera.',
      'Materiali flessibili: il metodo di misurazione è importante perché la base può comprimersi sotto le ganasce del calibro.',
    ] },

    { type: 'title', text: 'Impostazioni dello slicer che interagiscono con la compensazione del piede d\'elefante', level: 2 },
    { type: 'paragraph', html: 'Diversi slicer espongono l\'impostazione con nomi come Horizontal Expansion, Initial Layer Horizontal Expansion, Elephant Foot Compensation, XY Compensation o espansione del primo strato. Un\'espansione orizzontale globale cambia l\'intero contorno della parte. Un\'impostazione solo per il primo strato riguarda solo gli strati inferiori ed è solitamente più sicura per la precisione dimensionale. Quando uno slicer supporta entrambe, usa la compensazione del primo strato per il piede d\'elefante e riserva la compensazione XY globale per errori di dimensione calibrati che persistono su tutta l\'altezza.' },
    { type: 'paragraph', html: 'La larghezza di linea e il flusso del primo strato interagiscono anche con la correzione. Una linea del primo strato molto larga può migliorare l\'adesione al piatto ma aumenta il volume che deve stare sotto l\'ugello. Se il cordone non ha spazio verticale, si espande orizzontalmente. Ridurre il flusso del primo strato dal 105 percento al 100 percento, alzare lo Z-offset di 0.02 mm o ridurre la temperatura del piatto di 5 °C può ridurre l\'espansione negativa richiesta in modo più pulito rispetto all\'applicazione di un grande offset.' },
    { type: 'glossary', items: [
      { term: 'Espansione orizzontale', definition: 'Un offset dello slicer che espande o contrae i contorni del modello prima di generare i percorsi utensile.' },
      { term: 'Espansione del primo strato', definition: 'Una variante che si applica solo al primo strato o agli strati inferiori, rendendola più adatta al piede d\'elefante.' },
      { term: 'Gap di pressione Z', definition: 'Lo spazio effettivo ugello-piatto che determina quanto il primo cordone viene compresso.' },
      { term: 'Fattore termico', definition: 'Un moltiplicatore usato qui per rappresentare l\'aumento del flusso laterale quando il piatto è più caldo di 60 °C.' },
      { term: 'Smusso CAD', definition: 'Un bordo smussato modellato che dà al materiale compresso del primo strato una zona di scarico geometrico.' },
    ] },
    { type: 'diagnostic', variant: 'warning', title: 'Una grande espansione negativa può rompere le piccole caratteristiche', html: 'Un valore come -0.35 mm può riparare la base esterna di una grande scatola ma cancellare minuscole lettere in rilievo, ridurre nervature strette e cambiare il diametro di piccoli montanti. Quando la correzione richiesta è grande, trattala come un segnale per ricontrollare Z-offset, flusso del primo strato o temperatura del piatto.' },

    { type: 'title', text: 'Flusso di lavoro per una correzione di precisione del piede d\'elefante', level: 2 },
    { type: 'list', items: [
      'Stampa un coupon di calibrazione semplice con lo stesso materiale, temperatura del piatto, altezza del primo strato e velocità del primo strato usati per la parte reale.',
      'Misura la dimensione stabile del corpo sopra la base, poi misura la dimensione più larga della base e sottrai le due.',
      'Inserisci l\'errore misurato, l\'altezza del primo strato, il gap di pressione Z effettivo, la temperatura del piatto e la tolleranza target.',
      'Applica l\'espansione orizzontale negativa riportata nello slicer o aggiungi lo smusso a 45 gradi riportato in CAD.',
      'Ristampa il coupon e misura di nuovo dopo il raffreddamento.',
      'Se l\'errore residuo rimane sopra la tolleranza, regola a metà passi invece di saltare a un offset globale estremo.',
      'Blocca l\'impostazione in un profilo materiale solo dopo che due coupon riproducibili concordano entro il tuo obiettivo di tolleranza.',
    ] },
    { type: 'tip', title: 'Usa lo stesso stato del piatto della produzione', html: 'Una prima stampa a freddo su un piatto spesso può comportarsi diversamente dalla quinta stampa dopo che il piatto si è riscaldato per 30 minuti. Se il lavoro di produzione viene eseguito dopo il riscaldamento, calibra il coupon anche dopo il riscaldamento.' },
    { type: 'diagnostic', variant: 'success', title: 'Buon obiettivo di correzione', html: 'Per il lavoro dimensionale FDM pratico, una deviazione di base inferiore a 0.05 mm è spesso abbastanza piccola che l\'accoppiamento di assemblaggio è controllato dal normale progetto di gioco anziché dal labbro del piede d\'elefante. Obiettivi più stretti richiedono macchine rigide, filamento stabile e tecnica di misurazione ripetibile.' },
    { type: 'summary', title: 'Punti chiave', items: [
      'Il piede d\'elefante è un problema di deformazione da pressione e temperatura, non solo un difetto visivo.',
      'Usa l\'errore di base misurato relativo alla parete stabile, non solo la dimensione CAD nominale.',
      'L\'espansione orizzontale negativa è la correzione dello slicer; uno smusso a 45 gradi è la correzione CAD.',
      'La temperatura del piatto aumenta il fattore termico perché la base rimane più morbida e fluisce lateralmente più a lungo.',
      'I valori di compensazione gravi dovrebbero innescare controlli di Z e flusso del primo strato prima dell\'uso in produzione.',
    ] },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
