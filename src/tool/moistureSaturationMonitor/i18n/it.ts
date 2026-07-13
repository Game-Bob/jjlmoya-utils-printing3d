import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MoistureSaturationMonitorUI } from '../ui';

const slug = 'estimatore-disidratazione-filamento';
const title = 'Estimatore di Disidratazione del Filamento: Guia alla Rigenerazione Termica';
const description = 'Modella la saturazione igroscopica del filamento con cinetica di adsorbimento esponenziale, esposizione all\'umidità, tipo di polimero e temperatura della camera di essiccazione.';

const faqData = [
  {
    question: 'Come calcola la saturazione dell\'umidità l\'estimatore di disidratazione del filamento?',
    answer: 'Utilizza un modello di saturazione esponenziale: l\'assorbimento massimo del materiale moltiplicato per uno meno e elevato al coefficiente cinetico negativo per il tempo di esposizione, quindi scalato in base all\'umidità relativa dell\'ambiente.',
  },
  {
    question: 'Perché il nylon ha bisogno di più essiccazione rispetto al PLA?',
    answer: 'Il nylon ha una capacità di umidità superiore e un coefficiente di adsorbimento più rapido rispetto al PLA, quindi raggiunge un contenuto d\'acqua dannoso molto prima a parità di umidità e tempo di esposizione.',
  },
  {
    question: 'Una temperatura di essiccazione più alta significa sempre un\'essiccazione più sicura?',
    answer: 'No. Una temperatura più elevata accelera la disidratazione, ma ogni polimero ha un intervallo sicuro per la camera. Il superamento di questo intervallo può ammorbidire il filamento, deformare la bobina o alterare il comportamento di stampa.',
  },
  {
    question: 'Cosa significa l\'indicatore del rischio di idrolisi?',
    answer: 'Confronta il contenuto d\'acqua stimato con la soglia critica del materiale ed emette un avviso quando l\'umidità assorbita è sufficientemente alta da aumentare bolle, stringing, strati deboli o danni alle catene polimeriche.',
  },
];

const howToData = [
  { name: 'Scegliere il polimero', text: 'Selezionare PLA, PETG, ABS, ASA, TPU, Nylon, PC o PVA per consentire al modello di caricare la corretta capacità di equilibrio e il coefficiente cinetico.' },
  { name: 'Inserire l\'umidità di stoccaggio', text: 'Impostare l\'umidità relativa a cui è stata esposta la bobina, utilizzando il valore rilevato nella stanza, nella scatola o in officina.' },
  { name: 'Impostare il tempo di esposizione', text: 'Inserire il numero di giorni trascorsi dal filamento al di fuori di una scatola asciutta sigillata o di un essiccatore attivo.' },
  { name: 'Selezionare la temperatura di essiccazione', text: 'Utilizzare una temperatura della camera compresa nell\'intervallo sicuro per il polimero e il materiale della bobina.' },
  { name: 'Avviare il ciclo di essiccazione', text: 'Avviare il timer di essiccazione persistente, quindi lasciare che la visualizzazione della camera si svuoti gradualmente mentre il carico di umidità stimato viene rimosso.' },
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

export const content: ToolLocaleContent<MoistureSaturationMonitorUI> = {
  slug,
  title,
  description,
  ui: {
    unitSystemLabel: 'Unità',
    metricLabel: 'Metrico',
    imperialLabel: 'Imperiale',
    materialLabel: 'Polimero',
    materialPlaLabel: 'PLA',
    materialPetgLabel: 'PETG',
    materialAbsLabel: 'ABS',
    materialAsaLabel: 'ASA',
    materialTpuLabel: 'TPU',
    materialPaLabel: 'Nylon PA',
    materialPcLabel: 'Policarbonato',
    materialPvaLabel: 'PVA supporto',
    humidityLabel: 'Umidità relativa',
    exposureLabel: 'Tempo di esposizione',
    dryTempLabel: 'Camera di essiccazione',
    spoolMassLabel: 'Massa della bobina',
    calculateLabel: 'Avvia ciclo essiccazione',
    pauseCycleLabel: 'Pausa ciclo',
    resumeCycleLabel: 'Riprendi ciclo',
    resetCycleLabel: 'Reimposta ciclo',
    saturationLabel: 'Contenuto di umidità',
    absorbedLabel: 'Acqua assorbita',
    dryingTimeLabel: 'Ciclo di essiccazione',
    remainingTimeLabel: 'Tempo rimanente',
    cycleProgressLabel: 'Progresso del ciclo',
    hydrolysisLabel: 'Rischio idrolisi',
    stableLabel: 'Stabile',
    watchLabel: 'Zona di controllo',
    criticalLabel: 'Critico',
    chamberReadyLabel: 'Camera pronta',
    chamberRunningLabel: 'Ciclo essiccazione in corso',
    chamberCompleteLabel: 'Umidità rimossa',
    curveLabel: 'Curva di adsorbimento',
    kineticLabel: 'Cinetica di saturation',
    equilibriumLabel: 'Approccio esponenziale alla saturazione di equilibrio',
    daysUnit: 'giorni',
    percentUnit: '%',
    gramsUnit: 'g',
    poundsUnit: 'lb',
    celsiusUnit: 'C',
    fahrenheitUnit: 'F',
    hoursUnit: 'h',
    minutesUnit: 'm',
    secondsUnit: 's',
    noValueLabel: '-',
  },
  seo: [
    { type: 'title', text: 'Comprendere la cinetica di adsorbimento: perché il Nylon non si comporta come il PLA', level: 2 },
    { type: 'paragraph', html: 'Un <strong>estimatore serio del tempo di essiccazione del filamento 3D</strong> non può trattare l\'umidità como una linea retta. I polimeri igroscopici non assorbono la stessa percentuale di acqua ogni giorno all\'infinito. Si avvicinano a uno stato di equilibrio: velocemente all\'inizio, più lentamente in prossimità della saturazione e con una forte dipendenza dall\'umidità relativa dell\'ambiente. Per questo una bobina lasciata al 70% di umidità relativa per due giorni non è semplicemente umida la metà rispetto a una lasciata per quattro giorni. La prima parte dell\'esposizione produce spesso l\'aumento di umidità più ripido, specialmente nel Nylon, TPU, PVA e altri materiali con gruppi polari che attirano le molecole d\'acqua.' },
    { type: 'paragraph', html: 'Questo strumento modella il contenuto di umidità con la formula <code>S_h = S_max x (1 - e^(-k x t)) x RH/100</code>. Dove <code>S_max</code> è la capacità di assorbimento all\'equilibrio del polimero, <code>k</code> è la velocità di adsorbimento, <code>t</code> è il tempo di esposizione e <code>RH</code> scala il risultato in base all\'ambiente di stoccaggio. Il risultato non è un certificato di laboratorio; è un modello di pianificazione ingegneristica che spiega perché la stessa officina può lasciare il PLA stampabile pur facendo sfrigolare, bollire e produrre stringing al Nylon, facendogli perdere resistenza tra i livelli.' },
    { type: 'stats', columns: 4, items: [
      { value: '0.65%', label: 'Capacità di equilibrio pianificata per il PLA' },
      { value: '3.2%', label: 'Capacità di equilibrio pianificata per il Nylon PA' },
      { value: '5.8%', label: 'Capacità di equilibrio pianificata per il filamento di supporto PVA' },
      { value: 'RH scalata', label: 'L\'umidità ambiente moltiplica la curva di saturazione' },
    ] },
    { type: 'diagnostic', variant: 'info', title: 'I sintomi dell\'umidità sono sintomi del processo', badge: 'Indizio di stampa', html: 'I suoni di scoppiettio, le bolle di vapore, i cambiamenti di superficie da satinata a ruvida, lo stringing eccessivo, le pareti deboli e l\'estrusione torbida non sono problemi casuali dello slicer. Spesso indicano che l\'acqua si sta trasformando improvvisamente in vapore nella zona di fusione o che l\'idrolisi ha ridotto la lunghezza delle catene polimeriche prima della deposizione.' },

    { type: 'title', text: 'Come il modello di saturazione esponenziale cambia le decisioni di essiccazione', level: 2 },
    { type: 'paragraph', html: 'I calcolatori lineari di solito richiedono un materiale e restituiscono un numero fisso di ore. Questo funziona come promemoria rapido, ma nasconde la vera domanda: quanta umidità ha effettivamente assorbito il filamento? Una bobina conservata in una scatola asciutta sigillata al 15% di umidità relativa per tre settimane potrebbe richiedere una rigenerazione minima o nulla. Lo stesso polimero lasciato all\'aria aperta in un garage umido per un fine settimana può richiedere un ciclo completo in camera. Il modello di saturazione collega la raccomandazione di essiccazione alla storia dell\'esposizione invece di trattare ogni bobina come se fosse bagnata allo stesso modo.' },
    { type: 'table', headers: ['Ingresso', 'Significato fisico', 'Effetto sulla stima'], rows: [
      ['Umidità relativa', 'Attività dell\'acqua intorno alla bobina', 'Un\'umidità relativa più elevata innalza l\'obiettivo di equilibrio e la percentuale finale assorbita.'],
      ['Tempo di esposizione', 'Quanto tempo è stato consentito alla diffusione di progredire', 'I primi giorni sono i più importanti; la curva rallenta man mano che si avvicina alla saturazione.'],
      ['Coefficiente del materiale', 'La rapidità con cui un polimero si avvicina all\'equilibrio', 'Il Nylon e il PVA si muovono più velocemente del PLA o dell\'ASA.'],
      ['Temperatura di essiccazione', 'Energia termica disponibile per il desorbimento', 'Una temperatura della camera sicura più elevata accorcia il ciclo stimato.'],
      ['Massa della bobina', 'Quantità di polimero presente', 'La percentuale indica lo stato del materiale; i grammi assorbiti si calcolano in proporzione alla massa della bobina.'],
    ] },
    { type: 'tip', title: 'Stimare l\'ambiente reale, non l\'app del meteo', html: 'Utilizzare l\'umidità all\'interno della scatola di conservazione, dell\'involucro della stampante, dell\'armadio o dell\'officina in cui si trovava effettivamente il filamento. Le previsioni meteo locali possono differire notevolmente rispetto all\'umidità accanto a una stampante riscaldata, su uno scaffale del seminterrato o in un contenitore sigillato con essiccante.' },
    { type: 'card', icon: 'mdi:chart-bell-curve', title: 'Perché l\'anello rallenta in prossimità della saturazione', html: 'L\'anello visivo segue lo stesso andamento esponenziale dell\'equazione. Si riempie rapidamente quando il polimero è asciutto perché il gradiente di umidità è forte. Vicino all\'equilibrio il gradiente si indebolisce, rallentando la velocità apparente di riempimento. Questo rallentamento è una legge fisica, non un trucco di animazione.' },

    { type: 'title', text: 'Intervalli del calcolatore di disidratazione del filamento per materiale', level: 2 },
    { type: 'paragraph', html: 'Le raccomandazioni di essiccazione devono rispettare il polimero e la bobina. Il PLA può ammorbidirsi o deformarsi se surriscaldato. Il PETG tollera meglio il calore, ma beneficia comunque di un controllo prudente della camera. Il Nylon richiede normalmente un ciclo più caldo e lungo perché assorbe più acqua e la trattiene in modo più tenace. Il PVA è estremamente sensibile all\'umidità e può diventare impossibile da stampare se lasciato esposto. Il PC spesso stampa meglio dopo l\'essiccazione, anche quando non appare visibilmente umido. L\'estimatore sfrutta queste differenze per trasformare un generico <strong>calcolatore di disidratazione del filamento</strong> in una guida specifica per ciascun materiale.' },
    { type: 'comparative', columns: 2, items: [
      { title: 'Risposta igroscopica da bassa a moderata', description: 'PLA, ABS e ASA assorbono generalmente meno acqua e più lentamente, ma subiscono comunque una perdita di qualità dopo una lunga esposizione all\'umidità.', points: ['Ciclo di essiccazione più brevi', 'Umidità di equilibrio inferiore', 'I sintomi possono manifestarsi gradualmente'] },
      { title: 'Risposta igroscopica elevata', description: 'Nylon, TPU, PVA e alcuni gradi di PC richiedono uno stoccaggio più attivo e una rigenerazione più rigorosa.', points: ['Maggiore massa d\'acqua assorbita', 'Saturazione iniziale più rapida', 'Maggiore rischio di bolle e strati deboli'] },
    ] },
    { type: 'table', headers: ['Materiale', 'Target tipico della camera', 'Nota di pianificazione'], rows: [
      ['PLA', '40-55 C', 'Evitare il calore eccessivo perché il PLA e alcuni corpi delle bobine possono deformarsi.'],
      ['PETG', '55-70 C', 'Spesso migliora la consistenza della superficie e riduce lo stringing dopo diverse ore.'],
      ['ABS / ASA', '65-85 C', 'Assorbimento inferiore rispetto al Nylon, ma beneficia dello stoccaggio a secco.'],
      ['TPU', '45-60 C', 'I gradi flessibili possono assorbire abbastanza umidità da schiumare o produrre fili.'],
      ['Nylon PA', '70-90 C', 'Di solito necessita di un\'essiccazione attiva prima di stampe funzionali critiche.'],
      ['PVA', '40-55 C', 'Materiale di supporto sensibile all\'umidità; conservare sigillato immediatamente.'],
    ] },
    { type: 'proscons', title: 'Tabella di essiccazione fissa vs monitor di saturazione', items: [
      { pro: 'Una tabella fissa è rapida quando serve solo un ciclo predefinito.', con: 'Non può distinguere una bobina prelevata da una scatola asciutta da una esposta all\'aria umida.' },
      { pro: 'Il modello di saturazione spiega perché l\'esposizione iniziale può essere grave.', con: 'Dipende comunque da coefficienti di materiale approssimativi e dalla storia di conservazione.' },
      { pro: 'L\'inserimento della temperatura rispecchia l\'effettiva configurazione della camera.', con: 'Non sostituisce i limiti di temperatura sicuri indicati dal produttore del filamento.' },
      { pro: 'I grammi assorbiti rendono tangibile il risultato per bobine intere e parziali.', con: 'La massa della bobina non rivela se gli avvolgimenti esterni sono più umidi del nucleo.' },
    ] },

    { type: 'title', text: 'Rischio di idrolisi: quando il filamento umido si danneggia', level: 2 },
    { type: 'paragraph', html: 'L\'umidità non è solo un problema di qualità di stampa. Alle temperature di estrusione, l\'acqua assorbita può favorire l\'idrolisi nei polimeri sensibili. L\'idrolisi spezza le catene molecolari, riducendo la tenacità, l\'allungamento e l\'affidabilità. L\'effetto è particolarmente importante per i materiali ingegneristici utilizzati in staffe, attrezzature, ingranaggi, condotti e parti sottoposte a carico. Una bobina umida può comunque estrudere, ma la parte può cedere prima del tempo perché il polimero è stato degradato chimicamente durante il processo.' },
    { type: 'glossary', items: [
      { term: 'Igroscopia', definition: 'La tendenza di un materiale ad attrarre e trattenere l\'acqua dall\'aria circostante.' },
      { term: 'Umidità di equilibrio', definition: 'Il contenuto di umidità a cui si avvicina un polimero dopo un tempo sufficiente a una data umidità.' },
      { term: 'Coefficiente di adsorbimento', definition: 'Un valore cinetico semplificato che controlla la velocità di aumento della curva di saturazione.' },
      { term: 'Desorbimento', definition: 'Il processo inverso: l\'acqua che lascia il polimero durante l\'essiccazione a caldo.' },
      { term: 'Idrolisi', definition: 'Scissione chimica delle catene causata dall\'acqua sotto l\'azione del calore, rilevante per diversi polimeri ingegneristici.' },
    ] },
    { type: 'diagnostic', variant: 'warning', title: 'Una superficie asciutta non garantisce un nucleo asciutto', badge: 'Limite di diffusione', html: 'Il filamento si asciuga dall\'esterno verso l\'interno. Un breve soffio caldo può migliorare la superficie mentre gli avvolgimenti interni di una bobina densa rimangono umidi. Bobine grandi, lati in cartone e filamento avvolto stretto possono rallentare la rigenerazione.' },
    { type: 'message', title: 'La regola visiva', html: 'Quando l\'anello passa dal blu pulito a uno stato grigio-blu spento, lo strumento indica il passaggio da una normale gestione dell\'umidità a una zona di controllo dell\'idrolisi. Questo è il punto in cui l\'essiccazione diventa parte del controllo qualità, non solo una pulizia estetica.' },

    { type: 'title', text: 'Costruire un flusso di lavoro di essiccazione affidabile', level: 2 },
    { type: 'paragraph', html: 'Una guida utile per la saturazione dei materiali igroscopici unisce la previsione alla routine. Misurare l\'umidità di stoccaggio, etichettare le bobine con le date di apertura, tenere i polimeri sensibili in scatole sigillate, ricaricare l\'essiccante prima che si saturi ed essiccare prima di stampe in cui le prestazioni meccaniche sono importanti. Il miglior flusso di lavoro evita ripetuti cicli di umido-asciutto, perché ogni ciclo di calore non necessario può invecchiare il materiale, deformare le bobine o sprecare tempo di produzione.' },
    { type: 'list', items: [
      'Essiccare Nylon, PVA, TPU e PC prima di stampe lunghe se la storia di stoccaggio è incerta.',
      'Tenere sigillati anche PLA e PETG; un assorbimento inferiore non significa assorbimento zero.',
      'Utilizzare un termometro indipendente all\'interno dell\'essiccatore poiché le temperature del display possono essere ottimistiche.',
      'Alimentare il filamento direttamente da una scatola asciutta durante le stampe di più ore in ambienti umidi.',
      'Sostituire o ricaricare l\'essiccante quando le perle indicatrici o i sensori di umidità mostrano che la scatola sta salendo.',
      'Evitare l\'essiccazione al di sopra della temperatura di transizione vetrosa o dell\'intervallo di rammollimento del filamento e della bobina.',
    ] },
    { type: 'card', icon: 'mdi:air-filter', title: 'La camera di essiccazione è un sistema di rigenerazione', html: 'La camera deve fornire calore stabile, flusso d\'aria e una via d\'uscita per l\'umidità. Riscaldare una scatola sigillata senza ventilazione o essiccante può semplicemente spostare l\'acqua dal filamento all\'aria della camera e viceversa.' },
    { type: 'summary', title: 'Lista di controllo per l\'interpretazione pratica', items: [
      'La percentuale di umidità descrive lo stato del materiale; i grammi assorbiti descrivono il carico d\'acqua nella bobina.',
      'L\'elevata umidità e i materiali rapidi creano una saturazione iniziale ripida.',
      'Il tempo di essiccazione deve aumentare con la saturazione e diminuire con la temperatura sicura della camera.',
      'Il rischio di idrolisi è più importante per l\'estrusione ad alta temperatura e le parti funzionali.',
      'La scheda tecnica del produttore prevale su qualsiasi stima generica di essiccazione.'
    ] },

    { type: 'title', text: 'Risposta SEO: quanto tempo devo essiccare il filamento della stampante 3D?', level: 2 },
    { type: 'paragraph', html: 'Il tempo di essiccazione corretto dipende dal materiale, dall\'esposizione all\'umidità, dalla massa della bobina e della temperatura della camera. Il PLA potrebbe richiedere solo poche ore dopo un\'esposizione moderata, il PETG e il TPU hanno spesso bisogno di più tempo, mentre il Nylon o il PVA possono richiedere un ciclo di rigenerazione significativo dopo lo stoccaggio in condizioni umide. Un solido flusso di lavoro per il <strong>contenuto di umidità nella stampa 3D</strong> stima prima l\'acqua assorbita, quindi seleziona una temperatura sicura dell\'essiccatore e un tempo sufficiente per il desorbimento. Questo è più affidabile rispetto all\'applicazione di un unico numero universale a ogni polimero.', },
    { type: 'diagnostic', variant: 'success', title: 'Migliore caso d\'uso per questo monitor', badge: 'Preflight ingegneristico', html: 'Utilizzare l\'estimatore prima di stampe critiche, lotti di produzione, polimeri ingegneristici costosi o qualsiasi lavoro in cui una superficie difettosa, uno strato fragile o una parte poco resistente costerebbe più di un ciclo di essiccazione.' },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
