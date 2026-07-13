import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FilamentWeightLengthConverterUI } from '../ui';

const slug = 'convertitore-peso-lunghezza-filamento';
const title = 'Convertitore Peso Lunghezza Filamento: Stima Precisa del Materiale';
const description = 'Converti grammi di filamento in metri e volume con densità del materiale, diametro da 1,75 mm o 2,85 mm e controllo immediato della sufficienza della bobina.';

const faqData = [
  {
    question: 'Come si convertono i grammi di filamento in metri?',
    answer: 'Dividi la massa per la densità del materiale per ottenere il volume, converti quel volume da centimetri cubi a millimetri cubi, poi dividi per l\'area della sezione circolare del diametro del filamento.',
  },
  {
    question: 'Perché la densità del materiale del filamento è importante?',
    answer: 'Lo stesso peso di PLA, PETG, ABS, TPU o filamento caricato occupa un volume diverso perché ogni polimero ha una densità differente. La lunghezza è volume diviso area del filamento, quindi la densità modifica direttamente la stima in metri.',
  },
  {
    question: 'Il filamento da 1,75 mm ha sempre la stessa lunghezza per chilogrammo?',
    answer: 'No. La tolleranza del diametro, la densità del materiale, gli additivi e il contenuto di umidità modificano tutti la lunghezza reale. Il calcolatore fornisce una stima di pianificazione basata sul diametro e sulla densità nominali.',
  },
  {
    question: 'Posso usare il calcolatore per filamento da 2,85 mm?',
    answer: 'Sì. Inserisci 2,85 mm o passa al sistema imperiale e inserisci il diametro equivalente. L\'area della sezione si aggiorna immediatamente.',
  },
];

const howToData = [
  { name: 'Inserisci la massa del filamento', text: 'Digita la quantità di filamento richiesta dallo slicer, il peso rimanente su una bobina o qualsiasi valore in grammi che vuoi convertire.' },
  { name: 'Scegli il materiale', text: 'Seleziona PLA, PETG, ABS, TPU, Nylon, PC o una miscela caricata in modo che il calcolatore possa usare la densità corretta.' },
  { name: 'Imposta il diametro del filamento', text: 'Usa 1,75 mm, 2,85 mm o un diametro misurato se vuoi che la stima della lunghezza rifletta una bobina specifica.' },
  { name: 'Controlla la sufficienza della bobina', text: 'Inserisci opzionalmente il peso residuo della bobina per vedere se hai abbastanza materiale e l\'esatta eccedenza o carenza.' },
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
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'EngineeringApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'it',
};

export const content: ToolLocaleContent<FilamentWeightLengthConverterUI> = {
  slug,
  title,
  description,
  ui: {
    unitSystemLabel: 'Unità',
    metricLabel: 'Metrico',
    imperialLabel: 'Imperiale',
    inputsTitle: 'Stima del materiale in stock',
    materialLabel: 'Materiale',
    materialPlaLabel: 'PLA',
    materialPetgLabel: 'PETG',
    materialAbsLabel: 'ABS',
    materialAsaLabel: 'ASA',
    materialTpuLabel: 'TPU',
    materialPaLabel: 'Nylon PA',
    materialPcLabel: 'Policarbonato',
    materialWoodLabel: 'PLA con legno',
    materialCarbonLabel: 'Miscela fibra di carbonio',
    materialMetalLabel: 'PLA con metallo',
    densityLabel: 'Densità',
    densityUnit: 'g/cm3',
    weightLabel: 'Peso filamento',
    weightSliderLabel: 'Cursore peso di stampa',
    diameterLabel: 'Diametro filamento',
    stockLabel: 'Peso residuo bobina',
    stockPlaceholder: 'Controllo stock opzionale',
    spoolStateLabel: 'Stato bobina',
    spoolScaleLabel: 'Massa consumata / disponibile',
    cutLineLabel: 'Linea di arresto esaurimento',
    resultLengthLabel: 'Lunghezza filamento stimata',
    resultVolumeLabel: 'Volume polimero',
    resultAreaLabel: 'Area sezione',
    resultGramsMeterLabel: 'Massa lineare',
    enoughLabel: 'Bobina sufficiente',
    shortLabel: 'Bobina insufficiente',
    noStockLabel: 'Controllo stock non attivo',
    surplusLabel: 'Eccedenza',
    missingLabel: 'Mancante',
    formulaLabel: 'Percorso di calcolo',
    formulaText: 'volume = massa / densità -> lunghezza = volume / area sezione',
    linearMassMetricUnit: 'g/m',
    linearMassImperialUnit: 'oz/ft',
    gramsUnit: 'g',
    ouncesUnit: 'oz',
    metersUnit: 'm',
    feetUnit: 'ft',
    cm3Unit: 'cm3',
    in3Unit: 'in3',
    in2Unit: 'in2',
    mm2Unit: 'mm2',
    mmUnit: 'mm',
    inchUnit: 'poll',
  },
  seo: [
    { type: 'title', text: 'Perché un calcolatore grammi-metri basato sulla densità è più accurato', level: 2 },
    { type: 'paragraph', html: 'Un convertitore peso-lunghezza filamento vale quanto il modello di materiale che ha alle spalle. Un calcolatore generico assume spesso che ogni chilogrammo di filamento occupi lo stesso volume, ma il filamento FFF viene venduto a peso mentre l\'estrusore consuma un filo cilindrico a lunghezza. Il ponte tra queste due misurazioni è la <strong>densità</strong>. PLA a circa 1,24 g/cm3, PETG intorno a 1,27 g/cm3, ABS vicino a 1,04 g/cm3 e TPU circa 1,21 g/cm3 non si convertono nello stesso numero di metri, anche quando il peso della bobina e il diametro sono identici.' },
    { type: 'paragraph', html: 'Il calcolo parte dalla massa. Dividere i grammi per la densità restituisce il volume in centimetri cubi. Quel volume viene poi convertito in millimetri cubi perché il diametro del filamento è solitamente misurato in millimetri. L\'area della sezione è l\'area di un cerchio: pi greco moltiplicato per il raggio al quadrato. Infine, il volume diviso per l\'area restituisce una lunghezza in millimetri, che può essere convertita in metri o piedi. Il risultato è una stima pratica per verificare se il materiale riportato da uno slicer può essere stampato con lo stock attualmente sulla bobina.' },
    { type: 'stats', columns: 4, items: [
      { value: '1,24', label: 'Densità tipica PLA in g/cm3' },
      { value: '2,405', label: 'Area in mm2 per filamento nominale da 1,75 mm' },
      { value: '6,379', label: 'Area in mm2 per filamento nominale da 2,85 mm' },
      { value: '3 input', label: 'Massa, densità e diametro definiscono la conversione' },
    ] },
    { type: 'table', headers: ['Materiale', 'Densità di pianificazione', 'Perché il valore è importante'], rows: [
      ['PLA', '1,24 g/cm3', 'Riferimento comune per la stampa desktop e una buona base di partenza per i prototipi.'],
      ['PETG', '1,27 g/cm3', 'Leggermente più denso del PLA, quindi la stessa quantità in grammi produce meno lunghezza.'],
      ['ABS', '1,04 g/cm3', 'Densità inferiore significa più lunghezza per grammo rispetto al PLA allo stesso diametro.'],
      ['TPU', '1,21 g/cm3', 'Il filamento flessibile è vicino al PLA ma vale comunque la pena modellarlo separatamente.'],
      ['Miscele caricate', 'Variabile', 'Additivi di legno, fibra di carbonio, metallo e vetro possono allontanare la densità dal polimero base.'],
    ] },
    { type: 'title', text: 'Le formule di conversione esatte per la stima dello stock di filamento', level: 2 },
    { type: 'paragraph', html: 'Il modello matematico è volutamente piccolo perché ogni termine ha un significato fisico. L\'area della sezione è <code>pi x (diametro / 2)^2</code>. Il volume è <code>peso / densità</code>. La lunghezza è <code>volume x 1000 / area sezione</code> quando il volume è in cm3 e l\'area della sezione è in mm2; il risultato è in millimetri, poi diviso per 1000 per ottenere i metri. Questa è la stessa geometria usata per ragionare sul volume di estrusione, la portata massima e l\'uso del materiale negli slicer.' },
    { type: 'diagnostic', variant: 'info', title: 'La tolleranza del diametro è la maggiore incertezza quotidiana', badge: 'Nota sulla misurazione', html: 'Una bobina nominale da 1,75 mm potrebbe non essere esattamente 1,75 mm su tutto il rotolo. Poiché l\'area dipende dal raggio al quadrato, una piccola differenza di diametro modifica la lunghezza calcolata e il volume di estrusione reale. Per i normali controlli di stock, il diametro nominale va bene. Per la calibrazione, usa un calibro in più punti e inserisci il diametro medio.' },
    { type: 'list', items: [
      'Usa i grammi quando copi il consumo di materiale da slicer come PrusaSlicer, Cura, Bambu Studio o OrcaSlicer.',
      'Usa il peso residuo misurato della bobina dopo aver sottratto la tara della bobina vuota se vuoi un controllo di sufficienza affidabile.',
      'Usa la densità dalla scheda tecnica del produttore quando stampi compositi speciali.',
      'Usa 2,85 mm invece di 1,75 mm quando la macchina alimenta filamento più grande, perché l\'area della sezione è drasticamente diversa.',
    ] },
    { type: 'tip', title: 'Non includere la tara della bobina vuota nello stock residuo', html: 'Una bobina su una bilancia include il peso del nucleo in plastica o cartone. Se la bobina vuota pesa 180 g e la bilancia indica 430 g, la stima del filamento utilizzabile dovrebbe essere 250 g. Inserire il peso lordo della bobina rende il segnale verde di sufficienza troppo ottimistico.' },
    { type: 'title', text: 'Lunghezza del filamento da 1,75 mm vs 2,85 mm a parità di peso', level: 2 },
    { type: 'paragraph', html: 'Il diametro ha un impatto maggiore di quanto molti utenti si aspettino. Un filo da 2,85 mm ha più del doppio dell\'area della sezione rispetto a un filo da 1,75 mm, quindi un chilogrammo diventa molti meno metri. Questo non significa che un diametro sia più economico di per sé; entrambi possono stampare lo stesso volume di pezzo. Significa che il numero di lunghezza di stock non può essere confrontato senza il contesto del diametro. Quando uno slicer riporta i grammi, sta già normalizzando l\'uso del materiale a peso; quando un sensore di esaurimento della stampante o una stima manuale della bobina ragiona in metri, il diametro diventa centrale.' },
    { type: 'comparative', columns: 2, items: [
      { title: 'Filamento da 1,75 mm', description: 'Lunghezza del filo maggiore per chilogrammo e formato dominante per le attuali stampanti desktop.', points: ['Utile per estrusori compatti', 'Più metri sulla stessa massa di bobina', 'Area nominale circa 2,405 mm2'] },
      { title: 'Filamento da 2,85 mm', description: 'Lunghezza del filo inferiore per chilogrammo con una sezione di alimentazione più grande, spesso visto su macchine più vecchie o professionali.', points: ['Area nominale circa 6,379 mm2', 'Meno sensibile alla compressione dell\'alimentatore in alcune configurazioni', 'Non usare le assunzioni da 1,75 mm'] },
    ] },
    { type: 'table', headers: ['Scenario', 'Cosa cambia', 'Conseguenza nella pianificazione'], rows: [
      ['Stesso polimero, diametro maggiore', 'L\'area aumenta', 'I metri diminuiscono a parità di grammi.'],
      ['Stesso diametro, densità inferiore', 'Il volume aumenta', 'I metri aumentano a parità di grammi.'],
      ['Stessi grammi, filamento caricato', 'La densità può aumentare', 'I metri potrebbero essere inferiori al previsto.'],
      ['Filamento umido', 'La massa misurata aumenta leggermente', 'La bobina può sembrare più pesante senza aggiungere polimero secco utile.'],
    ] },
    { type: 'title', text: 'Come usare il controllo di sufficienza della bobina prima di una stampa lunga', level: 2 },
    { type: 'paragraph', html: 'Il campo opzionale dello stock residuo trasforma il convertitore in un cruscotto verde-rosso. Inserisci la massa richiesta dal lavoro come peso del filamento, poi inserisci il filamento utilizzabile rimasto sulla bobina corrente. L\'output confronta i grammi direttamente e converte anche la differenza in metri o piedi usando lo stesso modello di materiale e diametro. Verde significa che la bobina ha abbastanza stock; rosso significa che il lavoro è in carenza e mostra il divario esatto.' },
    { type: 'card', icon: 'mdi:traffic-light', title: 'Perché vengono mostrati sia grammi che metri', html: 'I grammi sono il linguaggio dell\'acquisto e dello slicer. I metri sono il linguaggio della lunghezza del filo usato da alcuni schermi firmware, stime di esaurimento e calcoli manuali della bobina. Mostrare entrambi previene un comune errore di pianificazione: avere abbastanza lunghezza sotto un\'assunzione di densità ma non abbastanza massa per il materiale reale.' },
    { type: 'proscons', title: 'Metodi di validazione dello stock', items: [
      { pro: 'Pesare la bobina è rapido e funziona anche quando il rotolo è parzialmente usato.', con: 'Devi conoscere o stimare la tara della bobina vuota.' },
      { pro: 'Usare i grammi dello slicer è solitamente coerente con il peso di acquisto del materiale.', con: 'Le stime dello slicer possono cambiare con volume di purge, supporti, brim e mesh modificatori.' },
      { pro: 'La lunghezza è intuitiva quando si confrontano percorsi di filamento e distanze di esaurimento.', con: 'La lunghezza cambia con densità e diametro, quindi non è universale tra materiali diversi.' },
      { pro: 'La conversione basata sulla densità gestisce meglio PLA, PETG, ABS, TPU e compositi.', con: 'Additivi specifici del produttore possono richiedere un valore di densità personalizzato.' },
    ] },
    { type: 'title', text: 'I filamenti compositi e speciali necessitano di valori di densità personalizzati', level: 2 },
    { type: 'paragraph', html: 'I filamenti caricati sono il motivo principale per cui un serio stimatore di materiale dovrebbe esporre la densità invece di nasconderla. PLA con legno, nylon con fibra di carbonio, PLA con metallo, filamento fosforescente, materiali tecnici con vetro e miscele simili alla ceramica possono discostarsi bruscamente dal polimero base. Un filamento con metallo può sembrare pesante perché la densità è alta; gli stessi 500 g possono rappresentare molto meno volume e meno lunghezza rispetto al PLA standard. Per una stampa tecnica costosa, questa differenza non è accademica. Può decidere se il dieci percento finale di una stampa finisce o esaurisce il materiale.' },
    { type: 'glossary', items: [
      { term: 'Densità', definition: 'Massa per unità di volume, qui espressa come grammi per centimetro cubo.' },
      { term: 'Area della sezione', definition: 'L\'area circolare del filo di filamento calcolata dal diametro.' },
      { term: 'Massa lineare', definition: 'Quanti grammi pesa un metro o un piede di filamento per il materiale e diametro selezionati.' },
      { term: 'Tara', definition: 'Il peso della bobina vuota che deve essere sottratto dalla lettura della bilancia.' },
      { term: 'Diametro nominale', definition: 'La dimensione pubblicizzata del filamento, solitamente 1,75 mm o 2,85 mm, prima di misurare la tolleranza reale.' },
    ] },
    { type: 'message', title: 'I dati del produttore vincono', html: 'Quando la bobina o la scheda tecnica elenca la densità, usa quel valore. I preset di densità generici sono utili per la pianificazione, ma le formule specifiche del fornitore, i carichi di pigmenti e i rinforzi possono modificare il numero.' },
    { type: 'title', text: 'Esempi pratici per la stima del materiale nella stampa 3D', level: 2 },
    { type: 'paragraph', html: 'Immagina che uno slicer riporti che una staffa in PETG necessita di 186 g e tu hai una bobina parzialmente usata. PETG a 1,27 g/cm3 con filamento da 1,75 mm si converte in circa sessantuno metri. Se il peso utilizzabile della bobina dopo la tara è 220 g, il cruscotto riporta un\'eccedenza di 34 g e converte quel margine in circa undici metri. Quel margine può essere sufficiente per una linea di purge e un piccolo brim, ma non per un grosso errore di supporti. Il controllo di stock incoraggia l\'utente ad aggiungere un buffer realistico prima di lasciare una stampa incustodita.' },
    { type: 'paragraph', html: 'Ora confronta con l\'ABS. Poiché l\'ABS è meno denso del PETG, gli stessi 186 g diventano più volume e quindi più lunghezza allo stesso diametro di 1,75 mm. Questo non rende il pezzo in ABS più economico di per sé, perché il prezzo al chilogrammo e le impostazioni di stampa contano anch\'essi, ma spiega perché una stima di metri residui copiata da un materiale può ingannare per un altro. Per il controllo di inventario, la massa è il punto di partenza stabile e la densità crea il ponte verso la lunghezza.' },
    { type: 'summary', title: 'Lista di controllo per una pianificazione affidabile del materiale', items: [
      'Sottrai la tara della bobina vuota prima di inserire lo stock residuo.',
      'Usa la densità effettiva del materiale per filamenti caricati, rinforzati o premium.',
      'Controlla se la tua macchina usa filamento da 1,75 mm o 2,85 mm prima di fidarti di qualsiasi valore di lunghezza.',
      'Mantieni un margine per purge, supporti, brim, primi strati falliti e modifiche al profilo dello slicer.',
      'Considera lo stato verde di sufficienza come un controllo di pianificazione, non una garanzia contro inceppamenti o guasti del sensore di esaurimento.',
    ] },
    { type: 'title', text: 'Risposta SEO: peso del filamento in lunghezza in una frase', level: 2 },
    { type: 'paragraph', html: 'Per convertire il peso del filamento per stampa 3D in lunghezza, dividi il peso in grammi per la densità del materiale per ottenere il volume, moltiplica per 1000 per convertire cm3 in mm3, dividi per <code>pi x (diametro / 2)^2</code>, e poi dividi per 1000 per leggere i metri. Questo metodo basato sulla densità è più accurato di una tabella fissa grammi-metri perché PLA, PETG, ABS, TPU, Nylon, PC e filamenti compositi hanno tutti valori di densità diversi.' },
    { type: 'diagnostic', variant: 'success', title: 'Quando la stima è più affidabile', badge: 'Buona pratica', html: 'Il risultato è migliore quando il peso dello slicer è definitivo, il peso residuo della bobina ha la tara rimossa, il diametro è misurato o noto e la densità proviene dal produttore. In queste condizioni, il convertitore diventa un controllo di preflight pratico per stampe lunghe, lotti di produzione e polimeri tecnici costosi.' },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
