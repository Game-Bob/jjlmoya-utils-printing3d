import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PrintTimeWorkflowOptimizerUI } from '../ui';

const slug = 'ottimizzatore-tempo-stampa-3d';
const title = 'Ottimizzatore di Tempo per Stampa 3D';
const description =
  'Confronta due configurazioni di stampa FDM: strati, tempo corretto, consumo filamento, costo, compromesso qualita e avvisi velocita hardware.';

const faqData = [
  {
    question: 'In cosa differisce da un semplice calcolatore?',
    answer:
      'Include sovraccarico complessita, retrazione per strato, volume regolato, massa filamento, costo e confronto scenari.',
  },
  {
    question: 'PuO sostituire le stime del slicer?',
    answer:
      'No. Un slicer conosce percorsi esatti. Questo strumento serve per pianificare prima del slicing.',
  },
  {
    question: 'Cosa cambia limpostazione complessita?',
    answer:
      'Bassa/media/alta applicano coefficienti per spostamenti, perdite accelerazione, angoli e isole.',
  },
  {
    question: 'Perche lo strumento avverte oltre 100 mm/s?',
    answer:
      'Molte stampanti superano 100 mm/s ma estrusione e raffreddamento rendono alte velocita rischiose senza calibrazione.',
  },
];
const howToData = [
  { name: 'Inserire dimensioni e volume modello', text: 'Aggiungere altezza e volume da CAD, slicer o approssimazione.' },
  { name: 'Regolare scenario A', text: 'Scegliere altezza strato, velocita, larghezza linea, riempimento, materiale, complessita.' },
  { name: 'Regolare scenario B', text: 'Regolare seconda configurazione per confronto.' },
  { name: 'Leggere impatto', text: 'Confrontare tempo, filamento, costo, strati, efficienza, flusso.' },
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
  step: howToData.map((step, i) => ({ '@type': 'HowToStep', position: i + 1, name: step.name, text: step.text })),
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

export const content: ToolLocaleContent<PrintTimeWorkflowOptimizerUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Input workflow stampa',
    resultsAriaLabel: 'Risultati workflow stampa',
    unitSystemLabel: 'Unita',
    metricLabel: 'Metrico',
    imperialLabel: 'US',
    currencyLabel: 'Valuta',
    currencyOptions: [
      { code: 'USD', label: '$', symbol: '$' },
      { code: 'EUR', label: 'EUR', symbol: 'EUR' },
      { code: 'GBP', label: 'GBP', symbol: 'GBP' },
      { code: 'CAD', label: 'C$', symbol: 'C$' },
      { code: 'AUD', label: 'A$', symbol: 'A$' },
      { code: 'CHF', label: 'Fr', symbol: 'Fr' },
      { code: 'CNY', label: 'CNY', symbol: 'CNY' },
      { code: 'INR', label: 'INR', symbol: 'INR' },
      { code: 'BRL', label: 'R$', symbol: 'R$' },
      { code: 'MXN', label: 'MXN', symbol: 'MXN' },
      { code: 'RUB', label: 'RUB', symbol: 'RUB' },
      { code: 'PLN', label: 'PLN', symbol: 'PLN' },
      { code: 'SEK', label: 'SEK', symbol: 'SEK' },
      { code: 'NOK', label: 'NOK', symbol: 'NOK' },
      { code: 'DKK', label: 'DKK', symbol: 'DKK' },
      { code: 'TRY', label: 'TRY', symbol: 'TRY' },
      { code: 'JPY', label: 'JPY', symbol: 'JPY' },
    ],
    scenarioALabel: 'Scenario A',
    scenarioBLabel: 'Scenario B',
    modelHeightLabel: 'Altezza modello',
    modelVolumeLabel: 'Volume stimato',
    layerHeightLabel: 'Altezza strato',
    speedLabel: 'Velocita',
    lineWidthLabel: 'Larghezza linea',
    infillLabel: 'Riempimento',
    complexityLabel: 'Complessita',
    complexityTooltip: 'Stima tempo morto: accelerazioni, angoli, retrazioni, isole, movimenti brevi.',
    pieceTypeLabel: 'Tipo pezzo',
    solidPieceLabel: 'Pieno continuo',
    hollowPieceLabel: 'Cavo molte cavita',
    materialLabel: 'Materiale',
    filamentPriceLabel: 'Prezzo filamento',
    lowComplexity: 'Bassa facce semplici',
    mediumComplexity: 'Media geometria mista',
    highComplexity: 'Alta molte isole',
    estimatedTimeLabel: 'Tempo stimato',
    filamentLabel: 'Filamento',
    costLabel: 'Costo materiale',
    layersLabel: 'Strati',
    efficiencyLabel: 'Efficienza',
    flowLabel: 'Flusso volumetrico',
    flowTooltip: 'Oltre 10-12 mm3/s = rischio sottoestrusione.',
    flowUnit: 'mm3/s',
    qualityTradeoffLabel: 'Compromesso qualita',
    speedReductionLabel: '-10% velocita',
    speedReductionAddsLabel: 'aggiunge',
    speedReductionMinutesLabel: 'min',
    qualityGainLabel: '~8% superficie piu pulita',
    hardwareWarning: 'Velocita >100 mm/s. Verificare flusso hotend, raffreddamento, accelerazione.',
    flowWarning: 'Flusso oltre zona comfort hotend standard.',
    bestValueLabel: 'Miglior valore',
    timeDeltaLabel: 'Differenza tempo',
    costDeltaLabel: 'Differenza costo',
    materialDeltaLabel: 'Differenza materiale',
    winnerBadge: 'Miglior valore',
    scenarioPrefix: 'Scenario',
    inScenarioLabel: 'in',
    fasterDirection: 'piu veloce',
    cheaperDirection: 'piu economico',
    lighterDirection: 'piu leggero',
    criterionAlignedLabel: 'Allineato miglior valore',
    criterionTradeoffLabel: 'Compromesso miglior valore',
    infoGlyph: 'i',
    metricVolumeUnit: 'cm3',
    imperialVolumeUnit: 'in3',
    gramUnit: 'g',
    ounceUnit: 'oz',
    kilogramUnit: 'kg',
    hourUnit: 'h',
    minuteUnit: 'min',
    millimeterUnit: 'mm',
    metricSpeedUnit: 'mm/s',
    imperialSpeedUnit: 'in/s',
    inchUnit: 'in',
    percentUnit: '%',
    materials: [
      { value: 'pla', label: 'PLA' },
      { value: 'petg', label: 'PETG' },
      { value: 'abs', label: 'ABS' },
      { value: 'asa', label: 'ASA' },
      { value: 'nylon', label: 'Nylon' },
      { value: 'tpu', label: 'TPU' },
    ],
  },
  seo: [
    { type: 'title', text: 'Come stimare il tempo di stampa 3D prima di sliccare', level: 2 },
    {
      type: 'paragraph',
      html: 'Un <strong>estimatore del tempo di stampa 3D</strong> utile non puó basarsi solo sul volume diviso per la velocitá. Le stampanti FDM impiegano tempo ad accelerare, rallentare negli angoli, retrarre il filamento, spostarsi tra le isole, raffreddare gli strati piccoli e recuperare la pressione dopo i cambi di direzione. L\'ottimizzatore modella il pezzo come volume stampabile, larghezza linea, altezza strato, velocitá, numero di strati e un coefficiente di complessitá, in modo che la pianificazione anticipata sia piú vicina alle decisioni reali del flusso di lavoro.',
    },
    {
      type: 'paragraph',
      html: 'Il tempo di estrusione di base si calcola dal volume diviso per la portata volumetrica: velocitá moltiplicata per larghezza linea e altezza strato. Poi lo strumento applica un coefficiente di correzione per la complessitá del modello e aggiunge una tolleranza fissa di retrazione per strato. Questo non pretende di eguagliare la precisione di uno slicer, ma offre un confronto piú onesto tra una configurazione bozza a 0,20 mm e una configurazione di qualitá a 0,12 mm rispetto a un calcolatore lineare.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '1.15x', label: 'Overhead basso per blocchi semplici e parti lisce', icon: 'mdi:cube-outline' },
        { value: '1.60x', label: 'Overhead alto per molte isole e retrazioni', icon: 'mdi:vector-polyline' },
        { value: '0.5 s', label: 'Tolleranza di retrazione pianificata aggiunta per strato', icon: 'mdi:timer-outline' },
        { value: '100 mm/s', label: 'Soglia di avviso per stampante standard a rischio estrusione', icon: 'mdi:alert-outline' },
      ],
    },
    {
      type: 'tip',
      title: 'Usa il volume dello slicer quando possibile',
      html: '<p>Il miglior input di volume è il volume del materiale dallo slicer o dal CAD per il modello, non il bounding box esterno. I bounding box includono aria vuota intorno a curve, fori, maniglie e cavitá, quindi possono esagerare tempo e filamento.</p>',
    },
    { type: 'title', text: 'Perché l\'altezza strato cambia il tempo in modo cosí significativo', level: 2 },
    {
      type: 'paragraph',
      html: 'L\'altezza strato influisce sul tempo di stampa in due modi. Primo, modifica la portata volumetrica: uno strato da 0,12 mm alla stessa velocitá e larghezza estrude il 40% in meno di plastica al secondo rispetto a uno strato da 0,20 mm. Secondo, aumenta il numero di strati, quindi l\'overhead di cambio strato, le retrazioni, l\'assestamento della pressione e le decisioni di raffreddamento si verificano piú spesso. Ecco perché piccoli cambiamenti estetici possono trasformare una stampa di cinque ore in una di otto ore.',
    },
    {
      type: 'table',
      headers: ['Altezza strato', 'Uso tipico', 'Conseguenza sul flusso di lavoro'],
      rows: [
        ['0,28-0,32 mm', 'Pezzi bozza, grandi attrezzature, controlli rapidi', 'Pochi strati e alta portata, ma linee di strato visibili.'],
        ['0,18-0,22 mm', 'Stampa generale PLA e PETG', 'Tempo, resistenza e qualitá superficiale equilibrati per molte stampanti desktop.'],
        ['0,10-0,14 mm', 'Miniature, gusci curvi, parti visibili al consumatore', 'Lavori molto piú lunghi perché la portata cala e il numero di strati aumenta.'],
        ['Sotto 0,10 mm', 'Casi speciali di finitura', 'Spesso limitato dalla precisione della macchina, dal raffreddamento e da rendimenti visivi decrescenti.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Gli strati fini possono essere piú lenti di quanto suggerisca la formula',
      badge: 'Raffreddamento e tempo minimo di strato',
      html: '<p>I modelli piccoli possono raggiungere il tempo minimo di strato nello slicer. Quando ció accade, la stampante rallenta per far raffreddare la plastica, anche se la formula volumetrica dice che la macchina potrebbe muoversi piú velocemente.</p>',
    },
    {
      type: 'summary',
      title: 'Regole dell\'altezza strato',
      items: [
        'Un\'altezza strato inferiore riduce il flusso al secondo alla stessa velocitá.',
        'Piú strati aggiungono overhead ripetuto anche quando il volume del modello rimane invariato.',
        'Il miglior confronto è basato su scenari: profilo bozza contro profilo qualitá.',
      ],
    },
    { type: 'title', text: 'Overhead di complessitá del modello e tempo morto', level: 2 },
    {
      type: 'paragraph',
      html: 'Il tempo morto è il divario tra l\'estrusione teorica e l\'orologio del lavoro. Una parete diritta a forma di vaso ha pochi spostamenti e poche retrazioni. Un involucro meccanico con molti fori, sporgenze, etichette, nervature e isole separate costringe la stampante ad avviarsi e fermarsi molte volte. I limiti di accelerazione fanno sí che l\'ugello potrebbe non raggiungere mai la velocitá comandata su segmenti brevi, quindi la velocitá media di movimento reale è inferiore al valore del cursore.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: 'Complessitá bassa', description: 'Modelli lisci, contorni continui, poche isole e spostamenti interni limitati.', icon: 'mdi:shape-outline', points: ['Overhead ridotto', 'Velocitá stabile', 'Poche retrazioni'] },
        { title: 'Complessitá media', description: 'Parti funzionali comuni con fori, curve miste, cambi di riempimento e spostamenti moderati.', icon: 'mdi:cog-outline', highlight: true, points: ['Default equilibrato', 'Qualche perdita di spostamento', 'Base di preventivo utile'] },
        { title: 'Complessitá alta', description: 'Superfici strutturate, molte caratteristiche separate, interfacce di supporto e sezioni con molte retrazioni.', icon: 'mdi:transit-connection-variant', points: ['Overhead elevato', 'Maggior rischio di stringing', 'Tempo reale piú lungo'] },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Coefficiente di overhead', definition: 'Un moltiplicatore che approssima gli spostamenti, le perdite di accelerazione, le retrazioni e altri tempi non catturati dal calcolo di estrusione costante.' },
        { term: 'Portata volumetrica', definition: 'La quantitá di plastica spinta attraverso l\'ugello al secondo, calcolata come velocitá per larghezza linea per altezza strato.' },
        { term: 'Numero di strati', definition: 'L\'altezza del modello divisa per l\'altezza strato, arrotondata per eccesso perché gli ultimi strati parziali richiedono comunque un passaggio.' },
        { term: 'Sub-estrusione', definition: 'Un difetto in cui l\'hotend o l\'estrusore non riesce a fornire abbastanza plastica fusa per la velocitá e la geometria di linea richieste.' },
      ],
    },
    {
      type: 'message',
      title: 'Tratta la complessitá come una manopola di calibrazione',
      ariaLabel: 'Nota sul coefficiente di complessitá',
      html: '<p>Se il tuo slicer riporta costantemente tempi piú lunghi di questo ottimizzatore per modelli simili, aumenta la complessitá. Se la tua stampante direct drive con accelerazione regolata batte la stima, diminuiscila per le pianificazioni future.</p>',
    },
    { type: 'title', text: 'Consumo di filamento, costo e riempimento', level: 2 },
    {
      type: 'paragraph',
      html: 'Il tempo è solo una parte della decisione sul flusso di lavoro. Il peso e il costo del filamento contano quando si fa un preventivo per pezzi, si pianificano lavori batch o si decide se un profilo di dettaglio fine vale la pena di occupare la stampante. L\'ottimizzatore stima il volume stampabile corretto preservando una quota di guscio e scalando la regione interna in base alla percentuale di riempimento, quindi moltiplica quel volume per la densitá del materiale.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Usa PLA intorno a 1,24 g/cm³ e PETG intorno a 1,27 g/cm³ per una pianificazione rapida dei materiali.',
        'Aumenta il volume stimato quando supporti, brim, raft o strutture di purge fanno parte del lavoro.',
        'Un riempimento inferiore riduce filamento e tempo, ma pareti, strati superiori e inferiori consumano comunque materiale.',
        'Per lotti di produzione, confronta le stime del calcolatore con il peso effettivo della bobina usata e regola i preventivi futuri.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:cash-clock',
      title: 'Esempio di decisione sul flusso di lavoro',
      html: '<p>Un pezzo in PLA da 120 cm³ a 0,20 mm di strato puó essere accettabile per una dima da officina, mentre la versione da 0,12 mm ha un aspetto migliore ma occupa la stampante piú a lungo. Confrontare tempo e costo del materiale fianco a fianco rende visibile il compromesso prima di impegnare la macchina.</p>',
    },
    {
      type: 'proscons',
      title: 'Ottimizzare velocitá contro qualitá',
      items: [
        { pro: 'Una velocitá maggiore puó liberare capacitá di stampa per piú lavori al giorno.', con: 'Puó rivelare ringing, angoli deboli, scarso raffreddamento e limiti di flusso dell\'hotend.' },
        { pro: 'Una velocitá inferiore migliora spesso la finitura superficiale e la consistenza dimensionale.', con: 'Aumenta il tempo in coda e puó rendere i piccoli pezzi commerciali meno redditizi.' },
        { pro: 'Un\'altezza strato inferiore migliora le superfici curve e le miniature.', con: 'Moltiplica il numero di strati e l\'overhead ripetuto della macchina.' },
      ],
    },
    { type: 'title', text: 'Avvisi hardware e limiti pratici di velocitá', level: 2 },
    {
      type: 'paragraph',
      html: 'Un valore di velocitá nello slicer non è una garanzia che l\'ugello mantenga quella velocitá ovunque. Le stampanti Cartesian standard a letto mobile, i vecchi estrusori Bowden, gli hotend con zona di fusione corta e il raffreddamento debole dei pezzi possono avere difficoltá oltre 100 mm/s a meno che accelerazione, jerk, pressure advance, temperatura e calibrazione del flusso siano regolati. L\'avviso non significa che la stampa fallirá; significa che la configurazione richiesta dovrebbe essere verificata rispetto al comportamento dell\'hardware.',
    },
    {
      type: 'table',
      headers: ['Sintomo', 'Causa probabile', 'Risposta di pianificazione'],
      rows: [
        ['Pareti sottili o vuoti', 'L\'hotend non puó fondere abbastanza plastica o l\'estrusore slitta', 'Ridurre la velocitá, aumentare la temperatura con cautela, o ridurre larghezza linea/altezza strato.'],
        ['Ringing vicino agli angoli', 'Accelerazione e vibrazioni del telaio dominano', 'Ridurre l\'accelerazione o la velocitá per le pareti visibili.'],
        ['Piccole caratteristiche arricciate', 'Il raffreddamento non tiene il passo', 'Ridurre la velocitá, aumentare la ventola, o stampare piú copie.'],
        ['Stringing su parti complesse', 'Molti spostamenti e retrazioni', 'Aumentare l\'overhead di complessitá e regolare retrazione/temperatura.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'La portata volumetrica è il vero limite di velocitá',
      badge: 'Controlla mm³/s',
      html: '<p>Due profili con la stessa velocitá di movimento possono richiedere diverse velocitá di fusione. Uno strato da 0,30 mm e una linea da 0,50 mm a 80 mm/s necessitano di molta piú plastica al secondo rispetto a uno strato da 0,12 mm e una linea da 0,42 mm alla stessa velocitá.</p>',
    },
    {
      type: 'summary',
      title: 'Usa l\'ottimizzatore prima di sliccare',
      items: [
        'Confronta due profili candidati invece di indovinare da un singolo numero.',
        'Osserva insieme numero di strati, portata volumetrica e avvisi hardware.',
        'Mantieni l\'ultima interazione in locale in modo che la pianificazione ripetuta possa continuare dalla configurazione precedente.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
