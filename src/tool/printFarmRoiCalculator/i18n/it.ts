import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PrintFarmRoiCalculatorUI } from '../ui';

const slug = 'calcolatore-roi-farm-stampa-3d';
const title = 'Calcolatore ROI per farm di stampa 3D';
const description =
  'Simula la redditività mensile, il periodo di ammortamento e il ROI annualizzato per una farm di stampa 3D utilizzando l occupazione, la percentuale di errore, l elettricità, i costi fissi e i costi variabili orari.';

const currencyOptions = [
  { code: 'EUR', label: 'EUR', symbol: '€' },
  { code: 'USD', label: 'USD', symbol: '$' },
  { code: 'GBP', label: 'GBP', symbol: '£' },
  { code: 'CAD', label: 'CAD', symbol: 'C$' },
  { code: 'AUD', label: 'AUD', symbol: 'A$' },
  { code: 'CHF', label: 'CHF', symbol: 'Fr' },
  { code: 'CNY', label: 'CNY', symbol: '¥' },
  { code: 'INR', label: 'INR', symbol: '₹' },
  { code: 'BRL', label: 'BRL', symbol: 'R$' },
  { code: 'MXN', label: 'MXN', symbol: 'MX$' },
  { code: 'RUB', label: 'RUB', symbol: '₽' },
  { code: 'PLN', label: 'PLN', symbol: 'zł' },
  { code: 'SEK', label: 'SEK', symbol: 'kr' },
  { code: 'NOK', label: 'NOK', symbol: 'kr' },
  { code: 'DKK', label: 'DKK', symbol: 'kr' },
  { code: 'TRY', label: 'TRY', symbol: '₺' },
  { code: 'JPY', label: 'JPY', symbol: '¥' },
];

const faqData = [
  {
    question: 'Come si calcola il ROI per una farm di stampa 3D?',
    answer:
      'Stima le ore mensili produttive, moltiplicale per il prezzo di vendita per ora macchina, sottrai i costi fissi, l elettricità e i costi orari variabili, quindi confronta il profitto annuale con l investimento iniziale.',
  },
  {
    question: 'Perché la percentuale di successo influisce sull ammortamento della farm di stampa?',
    answer:
      'Le stampe non riuscite consumano capacità della macchina, materiale, ugelli, energia e attenzione dell operatore senza produrre ore fatturabili. Una minore percentuale di successo riduce le ore produttive reali e ritarda l ammortamento.',
  },
  {
    question: 'Cosa dovrebbe essere incluso nel costo variabile orario?',
    answer:
      'Includi il consumo di filamento o resina, l usura dell ugello, l usura del piatto di stampa, i componenti per la manutenzione ordinaria, i materiali di consumo e qualsiasi quota oraria che varia in base al tempo effettivo di produzione riuscita.',
  },
  {
    question: 'L ammortamento è la stessa cosa del ROI?',
    answer:
      'No. L ammortamento stima quanti mesi sono necessari per recuperare l investimento iniziale dal profitto netto mensile. Il ROI confronta il profitto annualizzato con l investimento originale come percentuale.',
  },
];

const howToData = [
  { name: 'Inserisci la scala della farm', text: 'Aggiungi il numero di stampanti attive e l investimento iniziale per macchine, configurazione, postazioni di lavoro e messa in servizio.' },
  { name: 'Aggiungi i costi operativi mensili', text: 'Inserisci le spese generali fisse e l elettricità come costi mensili, quindi aggiungi il costo variabile per ora macchina produttiva.' },
  { name: 'Imposta l occupazione e la percentuale di successo', text: 'Utilizza percentuali di occupazione e successo realistiche in modo che il modello escluda i tempi di inattività e le stampe non riuscite.' },
  { name: 'Leggi i risultati di redditività', text: 'Confronta i ricavi mensili con i costi, quindi utilizza i mesi di ammortamento e il ROI annualizzato per valutare la fattibilità dell investimento.' },
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
  step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  featureList: [
    'Calcolatore ROI per farm di stampa 3D',
    'Simulatore ammortamento investimento nella stampa 3D',
    'Calcolatore redditività farm di stampa',
    'Regolazione occupazione e stampe non riuscite',
    'Modello costo operativo multivaluta',
  ],
  inLanguage: 'it',
};

export const content: ToolLocaleContent<PrintFarmRoiCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Dati di input del ROI della farm di stampa',
    resultsAriaLabel: 'Risultati del ROI della farm di stampa',
    currencyLabel: 'Valuta',
    currencyOptions,
    printerCountLabel: 'Numero di stampanti',
    initialInvestmentLabel: 'Investimento iniziale',
    fixedMonthlyCostLabel: 'Costo mensile fisso',
    electricityMonthlyCostLabel: 'Costo mensile dell elettricità',
    hourlyRateLabel: 'Tariffa di vendita oraria',
    occupancyLabel: 'Occupazione media',
    successRateLabel: 'Percentuale di successo',
    variableCostLabel: 'Costo variabile orario',
    averageHoursPerPartLabel: 'Ore medie per pezzo',
    paybackLabel: 'Periodo di ammortamento',
    netProfitLabel: 'Profitto netto mensile',
    annualRoiLabel: 'ROI annualizzato',
    productiveHoursLabel: 'Ore produttive reali',
    revenueLabel: 'Ricavi',
    costsLabel: 'Costi',
    fixedCostShortLabel: 'Fisso',
    electricityShortLabel: 'Elettricità',
    variableCostShortLabel: 'Variabel',
    marginLabel: 'Margine netto',
    breakEvenPartsLabel: 'Pezzi per il pareggio',
    breakEvenHoursLabel: 'Ore per il pareggio',
    stressScenarioLabel: 'Peggiore scenario possibile',
    exportSummaryLabel: 'Scarica il riepilogo',
    chartLabel: 'Ricavi mensili rispetto ai costi operativi',
    monthsUnit: 'mesi',
    hoursUnit: 'h',
    percentUnit: '%',
    notViableLabel: 'Non fattibile',
    positiveInsight: 'Il profitto mensile è positivo dopo aver considerato occupazione, percentuale di successo e costi operativi.',
    negativeInsight: 'I costi operativi superano i ricavi corretti; migliora occupazione, prezzi o percentuale di errore prima di scalare.',
    currencySymbol: '€',
    defaultCurrencyCode: 'EUR',
    pendingLabel: '-',
    partsUnit: 'pezzi/mese',
    reportFilename: 'riepilogo-roi-farm-stampa.csv',
    reportTitle: 'Rapporto sulla Fattibilità del ROI della Farm di Stampa 3D',
    reportCurrencyLabel: 'Valuta',
  },
  seo: [
    { type: 'title', text: 'Come funziona questo calcolatore ROI per farm di stampa 3D', level: 2 },
    {
      type: 'paragraph',
      html: 'Un <strong>calcolatore ROI per farm di stampa 3D</strong> deve rispondere a una domanda specifica sull\'investimento: un gruppo di stampanti recupererà i costi di configurazione abbastanza rapidamente da giustificare il capitale, lo spazio, la manutenzione e il rischio operativo? Questo simulatore modella tale domanda a partir dalla capacità mensile della macchina. Ogni stampante contribuisce con 720 ore lorde in un mese standard di 30 giorni, quindi il modello applica le detrazioni per occupazione e percentuale di errore di stampa. Il risultato non è la capacità teorica; è il tempo di produzione fatturabile che sopravvive ai periodi di inattività, alle code di lavoro, alle stampe fallite, alle ristampe, alla calibrazione e ai tempi di inattività pratici.',
    },
    {
      type: 'paragraph',
      html: 'La catena di calcolo è intenzionalmente trasparente. Le ore lorde mensili sono pari a <code>stampanti x 720</code>. Le ore produttive reali sono pari alle ore lorde moltiplicate per l\'occupazione media e la percentuale di successo. I ricavi mensili sono pari alle ore produttive moltiplicate per la tariffa oraria rivolta al cliente. I costi operativi combinano spese generali mensili fisse, elettricità e costi orari variabili. Il profitto netto mensile corrisponde ai ricavi meno i costi operativi. Il periodo di ammortamento divide l\'investimento iniziale per il profitto netto mensile, mentre il ROI annualizzato confronta dodici mesi di profitto netto con l\'investimento iniziale.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '720 h', label: 'Capacità lorda mensile per stampante', icon: 'mdi:clock-outline' },
        { value: 'U x S', label: 'Regolazione di occupazione e successo', icon: 'mdi:percent-outline' },
        { value: 'Ricavi - costi', label: 'Profitto netto mensile', icon: 'mdi:finance' },
        { value: 'Investimento / profitto', label: 'Periodo di ammortamento', icon: 'mdi:calendar-clock' },
      ],
    },
    {
      type: 'tip',
      title: 'Utilizza input conservativi per le decisioni di investimento',
      html: '<p>Per una prima analisi, inserisci l\'occupazione che puoi difendere con la domanda attuale, non quella che speri di raggiungere dopo aver migliorato il marketing. Una farm che funziona solo con un\'occupazione ottimistica non rappresenta ancora un investimento solido.</p>',
    },
    { type: 'title', text: 'Perche l occupazione influisce sulla redditività della farm di stampa', level: 2 },
    {
      type: 'paragraph',
      html: 'L\'occupazione è la percentuale di tempo macchina disponibile effettivamente utilizzata per stampare lavori pagati o vendibili. Rappresenta la leva più forte in molti modelli di farm di piccole dimensioni perché l\'investimento iniziale è fisso. Una stampante acquistata per la produzione ha lo stesso costo sia che venga prenotata per otto ore al giorno sia che lo sia per venti ore al giorno. Un\'occupazione più elevata distribuisce affitto, configurazione, scorte di ricambi, software e ammortamento delle macchine su più ore fatturabili.',
    },
    {
      type: 'paragraph',
      html: 'Il calcolatore tratta l\'occupazione como un moltiplicatore diretto sulla capacità lorda. Dieci stampanti generano 7200 ore macchina lorde al mese. Con un\'occupazione al 40%, solo 2880 ore entrano nel modello dei ricavi prima della regolazione per la percentuale di successo. Con un\'occupazione al 75%, le ore che entrano nel modello sono 5400. La differenza può stabilire se l\'ammortamento richiede mesi, anni o non si verifica mai.',
    },
    {
      type: 'table',
      headers: ['Livello di occupazione', 'Significato operativo', 'Implicazione sul ROI'],
      rows: [
        ['Sotto il 30%', 'Le macchine trascorrono la maggior parte del mese in attesa di ordini, file, operatori o manutenzione.', 'L investimento iniziale è difficile da recuperare a meno que la tariffa oraria non sia elevata.'],
        ['30-55%', 'Intervallo comune nella fase iniziale per farm con domanda mista e gestione manuale.', 'La redditività dipende fortemente dalle spese generali fisse e dalla percentuale di errore.'],
        ['55-75%', 'Livello di prenotazione sano con spazio per lavori urgenti, manutenzione e modifiche di configurazione.', 'Spesso è il primo intervallo in cui l ammortamento diventa realistico.'],
        ['Sopra il 75%', 'Elevata occupazione che richiede una programmazione affidabile, un flusso di materiali e manutenzione preventiva.', 'Forte potenziale di ROI ma scarsa tolleranza per guasti o colli di bottiglia dell operatore.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Un occupazione elevata non equivale a un profitto elevato',
      badge: 'Rischio prezzi',
      html: '<p>Una farm può essere impegnata e continuare a perdere denaro se la tariffa oraria è troppo bassa, se le ristampe sono frequenti, se lo spreco di materiale è elevato o se le spese generali fisse sono state sottostimate. Confronta sempre l\'occupazione con il margine netto, non solo con i ricavi.</p>',
    },
    { type: 'title', text: 'Considerare le stampe fallite e le ristampe', level: 2 },
    {
      type: 'paragraph',
      html: 'La percentuale di successo inserita è ciò che separa questo simulatore di ammortamento dell\'investimento nella stampa 3D da un semplice calcolatore di capacità. Le stampe fallite consumano lo stesso tempo di calendario delle stampe riuscite, ma non creano lo stesso output vendibile. Possono inoltre consumare filamento, resina, piatti di stampa, ugelli, elettricità, manodopera e la fiducia del cliente. Una farm con una percentuale di successo del 90% perde uno su dieci blocchi di produzione potenziali prima che i ricavi vengano conteggiati.',
    },
    {
      type: 'paragraph',
      html: 'La percentuale di successo dovrebbe essere misurata su lavori comparabili. Una farm che stampa ripetutamente maschere in PLA può mantenere una percentuale di successo molto elevata dopo la messa a punto del processo. Una farm che produce modelli personalizzati una tantum, pezzi alti, polimeri tecnici, miniature in resina o lavori multi-materiale potrebbe richiedere un\'ipotesi inferiore. Se combini lavori semplici e rischiosi, esegui il calcolatore due volte: una volta per la produzione standard e una volta per i lavori personalizzati.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Produzione ripetuta',
          description: 'Geometria del pezzo nota, profili messi a punto, materiali prevedibili e domanda stabile.',
          icon: 'mdi:repeat',
          points: ['Ipotesi di successo più elevata', 'Minore incertezza di configurazione', 'Maggiore fiducia nell ammortamento'],
        },
        {
          title: 'Servizio di stampa personalizzato',
          description: 'I file variano in base al cliente, alla geometria, alla strategia dei supporti e alle aspettative di qualità.',
          icon: 'mdi:file-cad',
          highlight: true,
          points: ['Ipotesi di successo moderata', 'Maggiore varianza nei preventivi', 'Richiede una tolleranza per le ristampe'],
        },
        {
          title: 'Materiali sperimentali',
          description: 'Polimeri tecnici, materiali flessibili, filamenti caricati e messa a punto del processo di resina.',
          icon: 'mdi:flask-outline',
          points: ['Ipotesi di successo inferiore', 'Maggiore usura dei materiali di consumo', 'Usa input di ROI prudenti'],
        },
      ],
    },
    {
      type: 'message',
      title: 'La percentuale di errore appartiene al modello finanziario',
      ariaLabel: 'Nota di calcolo stampe non riuscite',
      html: '<p>Non nascondere le ristampe all\'interno di spese generali generiche. Un input visibile della percentuale di successo rende il caso di investimento più facile da verificare, migliorare e spiegare.</p>',
    },
    { type: 'title', text: 'Costruire un modello di costi mensili affidabile', level: 2 },
    {
      type: 'paragraph',
      html: 'Il costo operativo ha tre livelli in questo strumento. Il costo fisso mensile copre le spese che esistono anche quando le stampanti sono inattive: affitto, internet, assicurazioni, software, contabilità, stoccaggio, copertura della manodopera di base e altre spese generali. Il costo mensile dell\'elettricità rileva l\'energia utilizzata dalle stampanti e dalle attrezzature di produzione direttamente collegate. Il costo variabile orario copre i costi che variano in base al tempo macchina produttivo, come filamento, resina, ugelli, tubi in PTFE, usura del piatto di stampa, filtri, lubrificante, parti di manutenzione e materiali di consumo per la pulizia.',
    },
    {
      type: 'paragraph',
      html: 'Mantenere l\'elettricità come input mensile separato è utile per le farm perché il consumo energetico viene spesso monitorato dalle bollette o da contatori secondari anziché calcolato stampa per stampa. Una farm con piatti riscaldati che produce PETG, ASA, ABS o nylon può avere un profilo energetico molto diverso da una farm PLA nella stessa stanza. Se calcoli già l\'elettricità per ora macchina, puoi includere quella cifra all\'interno del costo variabile orario e impostare il campo dell\'elettricità mensile a zero.',
    },
    {
      type: 'table',
      headers: ['Input di costo', 'Includi', 'Evita'],
      rows: [
        ['Costo mensile fisso', 'Affitto, assicurazione, internet, software, personale di base, stoccaggio.', 'Materiale utilizzato solo quando le stampanti sono in funzione.'],
        ['Costo mensile dell elettricità', 'Energia per stampanti, essiccatori, stazioni di lavaggio, polimerizzazione, ventilazione, quota clima.', 'Energia per uso domestico o ufficio non correlata.'],
        ['Costo variabile orario', 'Filamento, resina, ugelli, materiali di consumo per manutenzione, quota usura oraria.', 'Costo di acquisto della macchina una tantum.'],
        ['Investimento inicial', 'Stampanti, scaffali, configurazione, strumenti, essiccatori, hardware di gestione farm.', 'Costi mensili ricorrenti dopo il lancio.'],
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Ore mensili lorde', definition: 'Capacità macchina teorica prima delle regolazioni di occupazione e stampe fallite.' },
        { term: 'Ore produttive reali', definition: 'Capacità che rimane dopo aver applicato occupazione e percentuale di successo.' },
        { term: 'Periodo di ammortamento', definition: 'Mesi necessari affinché il profitto netto mensile recuperi l investimento iniziale.' },
        { term: 'ROI annualizzato', definition: 'Dodici mesi di profitto netto divisi per l investimento iniziale.' },
        { term: 'Costo variabile orario', definition: 'Materiali di consumo e quota di manutenzione che variano in base al tempo di stampa produttivo.' },
      ],
    },
    { type: 'title', text: 'Impostare la tariffa di vendita per ora macchina', level: 2 },
    {
      type: 'paragraph',
      html: 'La tariffa di vendita oraria è l\'importo addebitato al cliente per un\'ora macchina produttiva. Può essere indicata direttamente nei preventivi o inserita all\'interno di una formula di prezzo che include anche materiale, manodopera, finitura, imballaggio e margine. La chiave è la coerenza: se la tariffa oraria è intesa per includere il materiale, non aggiungere nuovamente lo stesso materiale come costo variabile orario. Se la tariffa oraria riguarda solo il tempo macchina, assicurati che il materiale e la manodopera siano rappresentati altrove nel modello di business.',
    },
    {
      type: 'paragraph',
      html: 'Una tariffa che sembra competitiva su singoli lavori può fallire su scala di farm. Le stampe lunghe occupano capacità che avrebbe potuto servire ad altri lavori. Altezze di strato sottili, materiali lenti, pezzi alti e geometrie con molti supporti riducono la produttività. Un <strong>calcolatore di redditività per farm di stampa</strong> dovrebbe quindi essere utilizzato insieme ai dati di preventivo reali: durata media del lavoro, equivalente orario pagato medio, percentuale di accettazione del cliente e volume d\'ordine mensile.',
    },
    {
      type: 'proscons',
      title: 'Prezzi orari in una farm di stampa',
      items: [
        { pro: 'Rende visibile l occupazione della macchina e protegge le stampe lunghe da prezzi troppo bassi.', con: 'I clienti potrebbero richiedere spiegazioni quando un pezzo leggero richiede molte ore.' },
        { pro: 'Funziona bene per la pianificazione del ROI interno e le decisioni sulla capacità.', con: 'Non sostituisce la determinazione del prezzo di materiale, manodopera, finitura e rischio.' },
        { pro: 'Consente un rapido confronto tra tipi di stampante e scenari di occupazione.', con: 'Può essere fuorviante se la percentuale di errore e il tempo di attesa vengono ignorati.' },
      ],
    },
    {
      type: 'card',
      icon: 'mdi:cash-clock',
      title: 'Punto di controllo dei prezzi',
      html: '<p>Se una piccola variazione della tariffa oraria modifica completamente l\'ammortamento, l\'investimento è sensibile ai prezzi di mercato. Valida la tariffa rispetto alla domanda effettiva dei clienti prima di acquistare altre stampanti.</p>',
    },
    { type: 'title', text: 'Interpretare il periodo di ammortamento e il ROI annualizzato', level: 2 },
    {
      type: 'paragraph',
      html: 'Il periodo di ammortamento è facile da capire perché è espresso in mesi. Se l\'investimento iniziale è di 18000 e il profitto netto mensile è di 3000, l\'ammortamento è di sei mesi. Se il profitto netto mensile è zero o negativo, l\'ammortamento non è fattibile perché la farm non recupera mai l\'investimento in base alle ipotesi attuali. L\'ammortamento è utile per la pianificazione della cassa, il finanziamento delle attrezzature e per decidere se l\'espansione deve avvenire ora o dopo che la domanda sarà migliorata.',
    },
    {
      type: 'paragraph',
      html: 'Il ROI annualizzato è più rigoroso perché confronta un anno di profitto netto con l\'investimento iniziale. Una farm può avere un profitto mensile positivo ma mostrare comunque un ROI annualizzato debole se l\'ammortamento è lento. Ad esempio, una farm che guadagna 1000 al mese al netto dei costi su un investimento di 24000 produce 12000 all\'anno prima di considerare l\'investimento originale, quindi il ROI del primo anno rimane negativo. Ciò non significa automaticamente che l\'attività sia pessima, ma significa che l\'investitore ha bisogno di un orizzonte più lungo.',
    },
    {
      type: 'summary',
      title: 'Reglas de decisión',
      items: [
        'Utilizza il periodo di ammortamento per comprendere la velocità di recupero della cassa.',
        'Utilizza il ROI annualizzato per confrontare la farm con altri utilizzi del capitale.',
        'Riesegui il modello con un occupazione e una percentuale di successo inferiori prima di impegnarti nell espansione.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Il test degli scenari è il vero valore',
      badge: 'Pianificazione',
      html: '<p>Esegui un caso base, un caso conservativo e un caso di stress. L\'investimento migliore non è quello che sembra eccellente solo nello scenario ottimistico; è quello che rimane comprensibile quando la domanda, gli errori o i costi dell\'elettricità si muovono contro di te.</p>',
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
