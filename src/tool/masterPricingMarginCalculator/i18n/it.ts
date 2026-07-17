import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MasterPricingMarginCalculatorUI } from '../ui';

const slug = 'calcolatore-prezzo-stampa-3d';
const title = 'Calcolatore Prezzi Stampa 3D: Margine, Markup e Posizionamento';
const description =
  'Calcola il prezzo di vendita consigliato per la stampa 3D a partire dal costo di produzione, dal margine di profitto desiderato, dal ricarico (markup) e dai prezzi dei concorrenti.';

const currencyOptions = [
  { code: 'EUR', label: '\u20ac', symbol: '\u20ac' },
  { code: 'USD', label: '$', symbol: '$' },
  { code: 'GBP', label: '\u00a3', symbol: '\u00a3' },
  { code: 'CAD', label: 'C$', symbol: 'C$' },
  { code: 'AUD', label: 'A$', symbol: 'A$' },
  { code: 'CHF', label: 'Fr', symbol: 'Fr' },
  { code: 'CNY', label: '\u00a5', symbol: '\u00a5' },
  { code: 'INR', label: '\u20b9', symbol: '\u20b9' },
  { code: 'BRL', label: 'R$', symbol: 'R$' },
  { code: 'MXN', label: '$', symbol: '$' },
  { code: 'RUB', label: '\u20bd', symbol: '\u20bd' },
  { code: 'PLN', label: 'z\u0142', symbol: 'z\u0142' },
  { code: 'SEK', label: 'kr', symbol: 'kr' },
  { code: 'NOK', label: 'kr', symbol: 'kr' },
  { code: 'DKK', label: 'kr', symbol: 'kr' },
  { code: 'TRY', label: '\u20ba', symbol: '\u20ba' },
  { code: 'JPY', label: '\u00a5', symbol: '\u00a5' },
];

const faqData = [
  {
    question: 'Qual è la differenza tra margine e markup nella stampa 3D?',
    answer:
      'Il margine è il profitto diviso per il prezzo di vendita. Il markup (ricarico) è il profitto diviso per il costo. Un ricarico del 50% su un costo di 40,00 dà un prezzo di 60,00 e un margine del 33,33%, non del 50%.',
  },
  {
    question: 'Perché il margine obiettivo deve essere inferiore al 100%?',
    answer:
      'La formula del margine divide il costo per uno meno il tasso di margine. Al 100% di margine, il denominatore diventa zero, quindi non esiste un prezzo di vendita finito.',
  },
  {
    question: 'Il prezzo dei concorrenti dovrebbe determinare il mio preventivo di stampa 3D?',
    answer:
      'Il prezzo dei concorrenti è un indicatore di posizionamento, non un sostituto del calcolo dei costi. Se il tuo prezzo calcolato è superiore al mercato, verifica costi, livello di finitura e tempi prima di applicare sconti.',
  },
  {
    question: 'Il calcolatore include le tasse o l\'IVA?',
    answer:
      'No. Calcola il prezzo al pubblico consigliato prima delle tasse. Aggiungi IVA, tasse sulle vendite o commissioni di piattaforma in base alle tue regole di fatturazione locali.',
  },
];

const howToData = [
  { name: 'Inserisci il costo totale di produzione', text: 'Usa il costo completo del lavoro, inclusi costi fissi, variabili, materiale, tempo macchina, manodopera e post-elaborazione.' },
  { name: 'Scegli la modalità margine o markup', text: 'Seleziona se il prezzo al pubblico consigliato deve utilizzare la formula del margine obiettivo o del ricarico.' },
  { name: 'Imposta il prezzo di riferimento del concorrente', text: 'Inserisci un prezzo di mercato comparabile per vedere se il tuo preventivo si colloca sopra, sotto o vicino alla concorrenza.' },
  { name: 'Copia il prezzo consigliato', text: 'Usa il pulsante copia per trasferire il prezzo consigliato, il profitto netto, il margine reale e il confronto di mercato in un preventivo o fattura.' },
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
    'calcolatore prezzi stampa 3d',
    'calcolatore margine profitto stampa 3d',
    'markup vs margine stampa 3d',
    'calcolatore prezzo vendita stampa 3d',
    'indicatore posizionamento di mercato',
  ],
  inLanguage: 'it',
};

export const content: ToolLocaleContent<MasterPricingMarginCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Dati di input per il prezzo di stampa 3D',
    resultsAriaLabel: 'Risultati del calcolo dei prezzi di stampa 3D',
    currencyLabel: 'Valuta',
    currencyOptions,
    currencyOptionSeparator: ' - ',
    costLabel: 'Costo totale di produzione',
    competitorLabel: 'Prezzo di riferimento della concorrenza',
    marginLabel: 'Margine desiderato',
    markupLabel: 'Markup desiderato',
    conversionFactorLabel: 'Fattore di conversione globale',
    conversionFactorUnit: 'x',
    conversionHint: 'Lascia a 1 quando i costi sono già inseriti nella valuta selezionata. Utilizzalo per scalare i listini o convertire i prezzi.',
    modeLabel: 'Metodo PVP',
    marginModeLabel: 'Margine',
    markupModeLabel: 'Markup',
    pvpRecommendedLabel: 'PVP consigliato',
    netProfitLabel: 'Profitto netto',
    realMarginLabel: 'Margine reale',
    marketComparisonLabel: 'Vs. concorrenza',
    marketPositionLabel: 'Posizione di mercato',
    aboveMarketLabel: 'Sopra il mercato',
    belowMarketLabel: 'Sotto il mercato',
    atMarketLabel: 'In linea con il mercato',
    pvpByMarginLabel: 'PVP per margine',
    pvpByMarkupLabel: 'PVP per markup',
    formulaMarginLabel: 'PVP_margine = C / (1 - M / 100)',
    formulaMarkupLabel: 'PVP_markup = C x (1 + U / 100)',
    sliderOutputSeparator: ' | ',
    copyLabel: 'Copia prezzo',
    copiedLabel: 'Copiato',
    copyTemplate: 'PVP consigliato: {pvp}; profitto netto: {profit}; margine reale: {margin}; confronto di mercato: {comparison}',
    pendingLabel: '-',
    currencySymbol: '\u20ac',
  },
  seo: [
    { type: 'title', text: 'Come funziona questo calcolatore di prezzi per la stampa 3D', level: 2 },
    {
      type: 'paragraph',
      html: 'Un <strong>calcolatore prezzi stampa 3D</strong> affidabile deve partire dal costo totale di produzione, non dal semplice peso del filamento. Il costo di produzione deve comprendere l\'allocazione dei costi fissi, i costi variabili della macchina, i materiali, lo sfrido e le stampe fallite, la manodopera per la preparazione e la rimozione supporti, il post-trattamento, l\'imballaggio e ogni spesa diretta associata alla commessa. Conoscendo questo costo, il prezzo di vendita può essere calcolato tramite margine o markup. Confondere questi due metodi è una delle cause principali per cui molti servizi di stampa 3D formulano preventivi apparentemente redditizi ma che in realtà non raggiungono la marginalità attesa.',
    },
    {
      type: 'paragraph',
      html: 'Il calcolatore applica formule matematiche rigorose: <code>PVP_margine = C / (1 - M / 100)</code> e <code>PVP_markup = C x (1 + U / 100)</code>. Il profitto netto è calcolato come <code>PVP - C</code>. Il margine reale rappresenta il profitto diviso per il prezzo finale (non per il costo). Il cursore del margine obiettivo è limitato sotto il 100% poiché un margine del 100% richiederebbe costi nulli o un prezzo di vendita infinito. I risultati sono espressi con due decimali fissi e senza separatori delle migliaia per agevolare il copia-incolla nei sistemi di preventivazione ed ERP.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'M < 100', label: 'Validazione rigida del margine', icon: 'mdi:shield-check-outline' },
        { value: '2 decimali', label: 'Uscita monetaria fissa', icon: 'mdi:calculator-variant-outline' },
        { value: 'Live', label: 'Calcolo dinamico con cursori', icon: 'mdi:flash-outline' },
        { value: 'Mercato', label: 'Posizionamento competitivo', icon: 'mdi:chart-timeline-variant' },
      ],
    },
    {
      type: 'tip',
      title: 'Usa una terminologia di prezzo univoca in azienda',
      html: '<p>Stabilisci chiaramente se nelle negoziazioni commerciali si parla di margine o di markup. Un preventivo che indica un "40%" generico senza specificare la base di calcolo può generare prezzi finali molto differenti.</p>',
    },
    { type: 'title', text: 'Margine vs Markup nella Stampa 3D', level: 2 },
    {
      type: 'paragraph',
      html: 'La questione <strong>markup vs margine stampa 3d</strong> sorge quando i titolari di un servizio di stampa notano che un ricarico (markup) del 30% sui costi non genera un margine del 30% sul fatturato. Il markup si calcola sul costo. Il margine si calcola sul prezzo di vendita. Se un pezzo costa 50,00 e viene venduto a 75,00, il profitto netto è di 25,00. Il markup è del 50,00% (25,00 diviso 50,00), mentre il margine è del 33,33% (25,00 diviso 75,00). Entrambi gli indicatori sono corretti, ma analizzano aspetti finanziari diversi.',
    },
    {
      type: 'table',
      headers: ['Costo', 'Obiettivo', 'Formula', 'PVP', 'Profitto netto', 'Margine reale'],
      rows: [
        ['50.00', '50% markup', '50.00 x 1.50', '75.00', '25.00', '33.33%'],
        ['50.00', '50% margine', '50.00 / 0.50', '100.00', '50.00', '50.00%'],
        ['80.00', '25% markup', '80.00 x 1.25', '100.00', '20.00', '20.00%'],
        ['80.00', '25% margine', '80.00 / 0.75', '106.67', '26.67', '25.00%'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Un markup elevato può comunque produrre un margine modesto',
      badge: 'Precisione finanziaria',
      html: '<p>Un markup del 100% raddoppia il costo di produzione, ma il margine reale ottenuto è del 50%. Se la tua attività necessita di un margine reale del 60% per coprire i costi fissi e finanziare la crescita, un markup del 100% non è sufficiente.</p>',
    },
    {
      type: 'glossary',
      items: [
        { term: 'PVP', definition: 'Prezzo di vendita consigliato al pubblico al netto delle tasse (salvo diverse indicazioni della politica aziendale).' },
        { term: 'Costo C', definition: 'Costo totale di produzione attribuito alla commessa prima del calcolo del profitto.' },
        { term: 'Margine M', definition: 'Rapporto tra profitto e prezzo di vendita, espresso in percentuale.' },
        { term: 'Markup U', definition: 'Rapporto tra profitto e costo di produzione, espresso in percentuale.' },
        { term: 'Profitto netto', definition: 'Prezzo di vendita meno il costo di produzione al netto di tasse e oneri finanziari.' },
      ],
    },
    { type: 'title', text: 'Cosa comprende il costo totale di produzione', level: 2 },
    {
      type: 'paragraph',
      html: 'Un <strong>calcolatore prezzo vendita stampa 3d</strong> è tanto preciso quanto lo sono i dati di costo inseriti. Per preventivare in modo professionale, il costo non deve ridursi ai soli grammi di materiale moltiplicati per il prezzo della bobina. Deve includere l\'energia della macchina, l\'usura dell\'ugello o della pellicola FEP, lo sfrido della resina, i tempi di attrezzaggio, la preparazione del file nel software di slicing, la rimozione manuale dei supporti, la levigatura, la verniciatura, il controllo qualità, l\'imballo, le commissioni sui pagamenti e una quota per eventuali stampe fallite. Il calcolatore assume che il costo inserito in input includa già tutti questi fattori.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Includi i costi variabili dei materiali: filamento, resina, polvere, materiale di supporto e purga.',
        'Calcola l\'ammortamento orario della stampante, la manutenzione ordinaria e l\'energia elettrica.',
        'Valuta la manodopera per la gestione dei file, il post-trattamento, la finitura, l\'imballo e la gestione del cliente.',
        'Aggiungi i materiali di consumo per la finitura: primer, vernici, carte abrasive, IPA, guanti e solventi.',
        'Prevedi una quota d\'errore per geometrie complesse, tolleranze severe o lunghe stampe notturne.',
      ],
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Costo del solo materiale',
          description: 'Rapido per stime hobbistiche ma non sostenibile per un\'attività commerciale.',
          icon: 'mdi:printer-3d-nozzle',
          points: ['Esclude la manodopera', 'Ignora l\'usura delle stampanti', 'Sottostima la finitura delle parti'],
        },
        {
          title: 'Costo di produzione',
          description: 'La base di partenza ideale per applicare margine e markup in modo scientifico.',
          icon: 'mdi:factory',
          highlight: true,
          points: ['Include l\'ammortamento orario', 'Include la manodopera', 'Garantisce preventivi ripetibili'],
        },
        {
          title: 'Prezzo caricato complessivo',
          description: 'Potrebbe includere già spese generali e margine, rischiando un doppio conteggio della marginalità.',
          icon: 'mdi:receipt-text-outline',
          points: ['Utile per audit interni', 'Sconsigliato come input per il calcolatore', 'Richiede una chiara politica contabile'],
        },
      ],
    },
    {
      type: 'card',
      icon: 'mdi:calculator-variant-outline',
      title: 'Il calcolatore non stima il costo di produzione',
      html: '<p>Esso si limita a convertire un costo noto in un prezzo di vendita consigliato. Se il costo è incerto, occorre prima strutturare un modello di costo per materiali, manodopera e finitura, e poi usare questo calcolatore per la marginalità e il posizionamento.</p>',
    },
    { type: 'title', text: 'Come definire i prezzi della stampa 3D basandosi sul margine', level: 2 },
    {
      type: 'paragraph',
      html: 'Spesso per capire <strong>come definire i prezzi della stampa 3d</strong> si ricorre a coefficienti fissi. La definizione dei prezzi tramite margine è tuttavia superiore quando si hanno obiettivi aziendali precisi. Se il margine richiesto è del 40% su un costo di 60,00, il prezzo si calcola come <code>60,00 / (1 - 0,40)</code>, pari a 100,00. Il profitto sarà di 40,00 e il margine reale del 40,00%. Questa metodologia assicura che ogni linea di prodotto contribuisca in modo coerente alla redditività aziendale.',
    },
    {
      type: 'paragraph',
      html: 'La regola fondamentale è che il margine non può raggiungere il 100%. Con un margine del 99%, un costo di 10,00 genera un prezzo di 1000,00. Al 99,99%, lo stesso costo si traduce in 100000,00. Questa caratteristica matematica evidenzia perché i margini commerciali debbano essere realistici. Margini eccessivamente alti indicano di solito una sottostima del costo reale o un prodotto ad altissimo valore aggiunto per un mercato di nicchia.',
    },
    {
      type: 'table',
      headers: ['Margine obiettivo', 'Moltiplicatore sul costo', 'Un costo di 40.00 diventa', 'Caso d\'uso'],
      rows: [
        ['20%', '1.2500x', '50.00', 'Stampa standard molto competitiva, basso livello di servizio.'],
        ['35%', '1.5385x', '61.54', 'Lavorazioni professionali di routine con spese generali normali.'],
        ['50%', '2.0000x', '80.00', 'Servizi specializzati, finiture manuali, ordini urgenti o lotti ridotti.'],
        ['70%', '3.3333x', '133.33', 'Valore aggiunto tecnologico, lavorazioni complesse o posizionamento premium.'],
      ],
    },
    {
      type: 'summary',
      title: 'Checklist per la definizione del prezzo basato sul margine',
      items: [
        'Usa il costo totale di produzione come base.',
        'Mantieni il margine obiettivo inferiore al 100%.',
        'Confronta il PVP risultante con il prezzo dei concorrenti prima di inviare l\'offerta.',
        'Se il prezzo è troppo alto, esamina i costi prima di ridurre il profitto.',
      ],
    },
    { type: 'title', text: 'Utilizzare il markup senza confonderlo con il margine', level: 2 },
    {
      type: 'paragraph',
      html: 'La definizione dei prezzi tramite ricarico (markup) è pratica quando si applica un moltiplicatore fisso a determinate categorie di costo. Ad esempio, un servizio potrebbe prevedere l\'80% di markup sulle stampe standard, il 120% sui prototipi finiti e il 200% sui lavori urgenti. La formula del markup è lineare: costo moltiplicato per uno più il tasso di ricarico. Un costo di 35,00 con ricarico dell\'80% produce un prezzo di 63,00. Il profitto è di 28,00, ma il margine reale generato è del 44,44% e non dell\'80%.',
    },
    {
      type: 'proscons',
      title: 'Margine vs Markup',
      items: [
        { pro: 'Il margine si allinea direttamente con i report finanziari sulla redditività aziendale.', con: 'Richiede che il team di vendita comprenda la non-linearità della curva dei prezzi.' },
        { pro: 'Il markup è estremamente semplice e veloce da applicare ai listini di costo.', con: 'Può mascherare il vero margine se il personale assimila la percentuale di ricarico alla redditività.' },
        { pro: 'Mostrare entrambe le formule garantisce la massima trasparenza finanziaria.', con: 'L\'azienda deve comunque definire una linea guida per stabilire quale valore proporre al cliente.' },
      ],
    },
    {
      type: 'message',
      title: 'Quando il markup è utile',
      ariaLabel: 'Guida al markup',
      html: '<p>Il markup è pratico per regole interne veloci: aggiungi il 60% alla stampa FDM standard, il 90% ai modelli in resina o il 150% alle lavorazioni urgenti. Controlla sempre l\'indicatore del margine reale per verificare la sostenibilità aziendale.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Il markup è uno strumento valido',
      badge: 'Nota metodologica',
      html: '<p>Il markup è una metrica di calcolo corretta se compresa da tutti. L\'errore comune consiste nell\'utilizzare erroneamente il termine "margine" quando in realtà si sta applicando un ricarico sui costi.</p>',
    },
    { type: 'title', text: 'Prezzo della concorrenza e posizionamento di mercato', level: 2 },
    {
      type: 'paragraph',
      html: 'Il prezzo di riferimento del concorrente trasforma il calcolatore da semplice foglio di calcolo a strumento decisionale. Se il PVP consigliato è superiore a quello della concorrenza, il sistema lo segnala con una colorazione di avviso. Questo non significa che l\'offerta sia errata: un prezzo superiore può essere giustificato da tempi di consegna più rapidi, tracciabilità del materiale, finitura estetica superiore, consulenza ingegneristica, collaudo dimensionale o minore rischio per il cliente. È tuttavia essenziale che chi formula l\'offerta sia consapevole del posizionamento rispetto al mercato.',
    },
    {
      type: 'paragraph',
      html: 'Il confronto con la concorrenza deve essere basato su elementi equivalenti. Un componente FDM grezzo non è paragonabile a un prototipo levigato, trattato con primer e verniciato. Un\'offerta online anonima con tolleranze generiche e tempi di spedizione lunghi non è la stessa cosa di un servizio professionale locale che valida i file CAD e garantisce l\'assemblaggio. Inserisci il prezzo del concorrente che offre lo stesso livello di qualità, servizio e tempistiche.',
    },
    {
      type: 'table',
      headers: ['Posizionamento', 'Analisi', 'Azione consigliata'],
      rows: [
        ['Sotto la concorrenza', 'Il prezzo è competitivo ma potrebbe esserci una perdita di profitto utile.', 'Verifica se il margine desiderato è troppo basso o se il concorrente offre un servizio inferiore.'],
        ['Allineato alla concorrenza', 'Il prezzo è in linea con il mercato di riferimento.', 'Punta sulla qualità del servizio, tempi di consegna e affidabilità per differenziarti.'],
        ['Sopra la concorrenza', 'Il preventivo richiede una giustificazione o una revisione dei costi.', 'Analizza i costi di produzione, i requisiti di finitura o l\'urgenza prima di praticare sconti.'],
      ],
    },
    {
      type: 'tip',
      title: 'Evita la corsa al prezzo più basso',
      html: '<p>Un servizio di stampa strutturato, con macchinari calibrati, materiali tracciati e competenze di post-elaborazione non deve allinearsi a prezzi low-cost. Competi sul valore che il cliente può riscontrare.</p>',
    },
    { type: 'title', text: 'Selettore di valuta e fattore di conversione globale', level: 2 },
    {
      type: 'paragraph',
      html: 'La preventivazione per l\'estero richiede una gestione coerente delle valute. Il selettore di valuta modifica il simbolo e converte gli importi in base ai fattori utilizzati nella suite. Il fattore di conversione globale è un moltiplicatore commerciale separato. Mantieni il valore a <code>1</code> se il costo di produzione e il prezzo della concorrenza sono già nella valuta selezionata. Usa un fattore personalizzato per applicare listini regionali, gestire coperture sul tasso di cambio o applicare coefficienti di distribuzione.',
    },
    {
      type: 'paragraph',
      html: 'Il fattore si applica esclusivamente ai valori monetari, non alle percentuali di margine o markup. Questo assicura che gli indici finanziari mantengano il loro significato: un margine del 35% in euro resta un margine del 35% in dollari. Il risultato finale è formattato con due decimali e senza separatore delle migliaia per una copia pulita e senza errori nei campi di testo delle fatture o dei gestionali.',
    },
    {
      type: 'summary',
      title: 'Regole di gestione valuta e coefficienti',
      items: [
        'Seleziona la valuta desiderata dal cliente prima di copiare il prezzo consigliato.',
        'Mantieni il fattore a 1 per i preventivi standard in valuta locale.',
        'Usa il fattore per ricarichi commerciali controllati, non per alterare il calcolo di margine o markup.',
        'Gestisci tasse, IVA e arrotondamenti nel sistema di fatturazione aziendale.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Tasse e commissioni sui pagamenti sono calcolate a parte',
      badge: 'Politica di preventivazione',
      html: '<p>Se occorre recuperare IVA, imposte locali sulle vendite, commissioni delle piattaforme di pagamento o assicurazioni di spedizione, aggiungile in base alle politiche aziendali dopo aver calcolato il PVP con questo strumento.</p>',
    },
    { type: 'title', text: 'Definire una strategia di prezzo per i servizi di stampa 3D', level: 2 },
    {
      type: 'paragraph',
      html: 'Una valida <strong>strategia prezzi per i servizi di stampa 3D</strong> deve coniugare accuratezza dei costi di produzione, disciplina nei profitti e consapevolezza del mercato. L\'accuratezza dei costi evita vendite in perdita. La disciplina protegge i margini aziendali da sconti non pianificati. La consapevolezza del mercato impedisce di formulare offerte non competitive. Questo calcolatore si colloca esattamente all\'intersezione di queste tre esigenze.',
    },
    {
      type: 'list',
      icon: 'mdi:target',
      items: [
        'Crea target di margine distinti per stampe standard, prototipi funzionali, modelli estetici, lavorazioni urgenti e lotti di produzione.',
        'Applica regole di markup solo se il team commerciale può visualizzare anche il margine reale generato.',
        'Monitora il tasso di conversione dei preventivi in base alla posizione di mercato per prendere decisioni basate sui dati e non sulle ipotesi.',
        'Analizza la redditività reale a commessa conclusa e aggiorna il modello di costo se manodopera o scarti sono stati sottostimati.',
        'Stabilisci un importo d\'ordine minimo per coprire i costi di gestione, attrezzaggio e preventivazione per i lavori più piccoli.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:chart-timeline-variant',
      title: 'Analizza il profitto reale della stampa 3D dopo la consegna',
      html: '<p>Il profitto stimato è utile in fase di preventivo, ma è la redditività reale a consuntivo che migliora il business. Confronta i costi preventivati con quelli effettivi e adegua i target di margine futuri per famiglia di prodotto.</p>',
    },
    {
      type: 'summary',
      title: 'Workflow di preventivazione consigliato',
      items: [
        'Calcola il costo totale di produzione.',
        'Scegli consapevolmente tra metodo del margine e del markup.',
        'Verifica il margine reale e il profitto netto risultanti.',
        'Effettua un confronto con il prezzo di un concorrente equivalente.',
        'Copia il PVP consigliato nel tuo preventivo e gestisci le tasse separatamente.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
