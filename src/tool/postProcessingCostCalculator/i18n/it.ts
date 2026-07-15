import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PostProcessingCostCalculatorUI } from '../ui';

const slug = 'calcolatore-costo-post-elaborazione-stampa-3d';
const title = 'Calcolatore del costo di post elaborazione per la stampa 3D';
const description =
  'Stima i costi di finitura manuale, rimozione dei supporti, carteggiatura, verniciatura, altri lavori manuali, materiali di consumo e costo di post-elaborazione adattato alla valuta per pezzi stampati in 3D.';

const faqData = [
  {
    question: 'Come si calcola il costo di post-elaborazione nella stampa 3D?',
    answer:
      'Somma tutti i minuti di finitura manuale, moltiplica il totale per il costo orario della manodopera diviso 60, poi aggiungi i materiali di consumo. Questo calcolatore mostra anche l\'incidenza di costo di ogni fase di finitura.',
  },
  {
    question: 'I materiali di consumo devono essere inclusi nel costo della finitura manuale?',
    answer:
      'Sì. Carta vetrata, primer riempitivo, vernice, guanti, nastro per mascheratura, IPA, liquido per la pulizia della resina, panni e usura di piccoli utensili possono essere abbastanza significativi da modificare il preventivo di un pezzo rifinito.',
  },
  {
    question: 'La conversione valutaria cambia la formula di costo?',
    answer:
      'No. La valuta modifica solo la scala monetaria visualizzata. La formula della manodopera rimane: minuti moltiplicati per il costo orario diviso 60, più i materiali di consumo.',
  },
  {
    question: 'Quale tariffa oraria devo usare per la manodopera nella stampa 3D?',
    answer:
      'Usa la tariffa di manodopera caricata dell\'officina, non solo la paga netta. Includi salari, oneri previdenziali, tempo non fatturabile retribuito, supervisione e il livello di qualifica richiesto per la finitura estetica.',
  },
];

const howToData = [
  { name: 'Inserisci i minuti di finitura', text: 'Aggiungi la rimozione dei supporti, la carteggiatura, la verniciatura e qualsiasi altro tempo manuale in minuti.' },
  { name: 'Imposta la tariffa e i materiali di consumo', text: 'Inserisci la tua tariffa oraria di finitura e il costo diretto dei materiali di consumo nella valuta selezionata.' },
  { name: 'Scegli la valuta e il fattore', text: 'Usa il selettore valuta per i simboli e il fattore di conversione opzionale per gli aggiustamenti del preventivo.' },
  { name: 'Copia il risultato', text: 'Usa il pulsante di copia per incollare totale, manodopera, materiali di consumo e minuti in un preventivo.' },
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
    'calcolatore costo post-elaborazione 3D',
    'stima costo manodopera stampa 3D',
    'costo finitura manuale stampa 3D',
    'calcolatore tariffa oraria post-elaborazione',
  ],
  inLanguage: 'it',
};

export const content: ToolLocaleContent<PostProcessingCostCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Parametri del costo di post-elaborazione',
    resultsAriaLabel: 'Risultati del costo di post-elaborazione',
    currencyLabel: 'Valuta',
    currencyOptions: [
      { code: 'EUR', label: '€', symbol: '€' },
      { code: 'USD', label: '$', symbol: '$' },
      { code: 'GBP', label: '£', symbol: '£' },
      { code: 'CAD', label: 'C$', symbol: 'C$' },
      { code: 'AUD', label: 'A$', symbol: 'A$' },
      { code: 'CHF', label: 'Fr', symbol: 'Fr' },
      { code: 'CNY', label: '¥', symbol: '¥' },
      { code: 'INR', label: '₹', symbol: '₹' },
      { code: 'BRL', label: 'R$', symbol: 'R$' },
      { code: 'MXN', label: '$', symbol: '$' },
      { code: 'RUB', label: '₽', symbol: '₽' },
      { code: 'PLN', label: 'zł', symbol: 'zł' },
      { code: 'SEK', label: 'kr', symbol: 'kr' },
      { code: 'NOK', label: 'kr', symbol: 'kr' },
      { code: 'DKK', label: 'kr', symbol: 'kr' },
      { code: 'TRY', label: '₺', symbol: '₺' },
      { code: 'JPY', label: '¥', symbol: '¥' },
    ],
    currencyOptionSeparator: ' - ',
    supportLabel: 'Rimozione supporti',
    sandingLabel: 'Carteggiatura',
    paintingLabel: 'Verniciatura',
    otherLabel: 'Altra manodopera',
    hourlyRateLabel: 'Tariffa oraria',
    consumablesLabel: 'Materiali di consumo',
    conversionFactorLabel: 'Fattore di conversione',
    conversionFactorUnit: 'x',
    conversionHint: 'Lascia a 1 se la tariffa è già inserita nella valuta locale; modificalo per applicare un moltiplicatore globale al preventivo.',
    minutesUnit: 'min',
    hourUnit: 'h',
    rateUnitSeparator: '/',
    totalLabel: 'Totale post-elaborazione',
    laborLabel: 'Manodopera',
    consumablesBreakdownLabel: 'Materiali di consumo',
    timeLabel: 'Tempo manuale',
    effectiveRateLabel: 'Tariffa effettiva',
    breakdownLabel: 'Incidenza del costo per fase di finitura',
    copyLabel: 'Copia risultato',
    copiedLabel: 'Copiato',
    copyTemplate: 'Costo post-elaborazione: {total} ({minutes}; manodopera {labor}; materiali di consumo {consumables})',
    pendingLabel: '-',
    currencySymbol: '€',
  },
  seo: [
    { type: 'title', text: 'Cosa misura questo calcolatore del costo di post-elaborazione per la stampa 3D', level: 2 },
    {
      type: 'paragraph',
      html: 'Un <strong>calcolatore del costo di post-elaborazione per la stampa 3D</strong> deve rispondere a una domanda pratica di preventivazione: quanti soldi vengono consumati dopo che la stampante si ferma? Il pezzo stampato potrebbe avere già un costo di tempo macchina e un costo di materiale, ma molti lavori a pagamento si vincono o si perdono nella rimozione dei supporti, nella carteggiatura, nel primer, nella verniciatura, nella pulizia, nella mascheratura, nel collaudo e nelle rilavorazioni. Questo calcolatore suddivide queste operazioni di finitura manuale in minuti, le moltiplica per una tariffa oraria di post-elaborazione e aggiunge i materiali di consumo diretti in modo che il numero finale possa essere incollato in un preventivo.',
    },
    {
      type: 'paragraph',
      html: 'La formula di base è volutamente trasparente: <code>((supporti + carteggiatura + verniciatura + altri minuti) x (tariffa oraria / 60)) + materiali di consumo</code>. Il fattore di conversione opzionale moltiplica la tariffa oraria e i materiali di consumo quando un\'officina vuole adeguare i valori per la conversione valutaria, i listini regionali, il ricarico ai subappaltatori o un aggiustamento temporaneo. Se l\'utente inserisce direttamente una tariffa di manodopera locale, il fattore deve restare a <code>1</code> e il risultato rimane indipendente dalle ipotesi sui tassi di cambio.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'min x tariffa/60', label: 'Formula del costo di manodopera', icon: 'mdi:clock-outline' },
        { value: '5 fasi', label: 'Supporti, carteggiatura, verniciatura, altro, consumabili', icon: 'mdi:chart-bar-stacked' },
        { value: '1x', label: 'Fattore di conversione predefinito', icon: 'mdi:swap-horizontal' },
        { value: 'In tempo reale', label: 'Nessun pulsante di calcolo richiesto', icon: 'mdi:flash-outline' },
      ],
    },
    {
      type: 'tip',
      title: 'Preventiva la persona, non la stampante',
      html: '<p>La post-elaborazione è quasi sempre guidata dalla manodopera. Una stampa lenta può essere economica da rifinire, mentre un piccolo pezzo estetico con supporti su superfici a vista può richiedere una lavorazione manuale qualificata e costosa. Tratta la <strong>stima del costo di manodopera per la stampa 3D</strong> come voce autonoma invece di nasconderla nel ricarico sul materiale.</p>',
    },
    { type: 'title', text: 'Rimozione supporti: primo fattore di costo manuale', level: 2 },
    {
      type: 'paragraph',
      html: 'La rimozione dei supporti non è solo il tempo necessario per staccare la plastica da un modello. Può includere taglio, riscaldamento, dissoluzione, risciacquo, raschiatura, rifinitura dei residui di supporto, protezione degli elementi fragili e verifica se le cicatrici dei supporti richiedono ulteriori lavorazioni superficiali. I supporti ad albero FDM, gli strati di interfaccia densi, le punte di supporto SLA e la depolvering SLS creano profili di manodopera diversi. Per una stima affidabile del <strong>costo di finitura manuale nella stampa 3D</strong>, il tempo di rimozione dei supporti dovrebbe essere misurato su lavori comparabili piuttosto che stimato in base alla durata di stampa.',
    },
    {
      type: 'table',
      headers: ['Situazione supporti', 'Comportamento tipico del tempo', 'Nota per il preventivo'],
      rows: [
        ['Supporti a distacco facile', 'Rimozione breve e prevedibile', 'Spesso adatto a una quota fissa di minuti per pezzo.'],
        ['Interfaccia di supporto densa', 'Rifinitura più lunga e pulizia superficiale', 'Aggiungere i minuti di carteggiatura separatamente per mantenere visibile il fattore di costo.'],
        ['Miniature in resina o modelli delicati', 'Taglio lento per evitare danni', 'Usare una tariffa di manodopera più alta se è richiesta lavorazione manuale specializzata.'],
        ['Supporto solubile', 'Meno taglio manuale ma più tempo di processo', 'Includere la gestione della soluzione e l\'asciugatura se l\'operatore è coinvolto.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Non calcolare la rimozione dei supporti solo dal volume di supporto nello slicer',
      badge: 'Rischio manodopera',
      html: '<p>Il volume del supporto può essere basso mentre l\'accesso è difficile. Un piccolo supporto nascosto all\'interno di un elemento stretto può costare più manodopera di un grande supporto esterno che si stacca in modo pulito.</p>',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Registra i minuti di rimozione supporti per famiglie di pezzi ricorrenti.',
        'Separa la rimozione dalla carteggiatura per confrontare più facilmente le scelte di strategia dei supporti.',
        'Aumenta la stima per geometrie fragili, perni sottili, miniature e superfici rivolte al cliente.',
        'Usa la stessa valuta e la stessa base tariffaria oraria del resto del preventivo.',
      ],
    },
    { type: 'title', text: 'Carteggiatura, stuccatura e preparazione superficiale', level: 2 },
    {
      type: 'paragraph',
      html: 'La carteggiatura è spesso il costo nascosto più elevato nelle stampe 3D finite perché è iterativa. L\'operatore potrebbe passare attraverso carteggiatura grossolana, stucco, tempo di cura o asciugatura, carteggiatura fine, correzione puntuale e ispezione sotto luce radente. Altezza dello strato, durezza del materiale, cicatrici dei supporti, livello di lucentezza richiesto e geometria del pezzo modificano tutti la quantità di lavoro manuale. Un supporto funzionale può richiedere cinque minuti; un prototipo da esposizione può richiedere un\'ora prima ancora di aprire la vernice.',
    },
    {
      type: 'paragraph',
      html: 'Il calcolatore tratta la carteggiatura come minuti moltiplicati per la tariffa oraria di finitura perché il processo è limitato dall\'operatore più che dalla macchina. I materiali di consumo come abrasivi, primer riempitivo, stucco, panni antistatici e materiali di mascheratura dovrebbero andare nel campo consumabili invece di essere inglobati nella tariffa di manodopera. Questo mantiene leggibile l\'<strong>analisi del costo di finitura della stampa 3D</strong>: la manodopera mostra la pressione del tempo, i consumabili mostrano gli input acquistati.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Finitura funzionale',
          description: 'Spigoli affilati puliti, supporti rimossi e cicatrici ridotte quanto basta per il montaggio.',
          icon: 'mdi:wrench-outline',
          points: ['Meno tempo di carteggiatura', 'Consumabili minimi', 'Controllo incentrato sull\'accoppiamento'],
        },
        {
          title: 'Finitura da presentazione',
          description: 'Facce visibili levigata, primer usato selettivamente e linee di strato ridotte per la revisione del cliente.',
          icon: 'mdi:eye-outline',
          highlight: true,
          points: ['Tempo di carteggiatura moderato', 'Primer e stucco probabili', 'Le superfici estetiche guidano la manodopera'],
        },
        {
          title: 'Finitura pronta per la verniciatura',
          description: 'Carteggiatura progressiva, stuccatura, mascheratura e correzione difetti prima delle mani di colore.',
          icon: 'mdi:spray',
          points: ['Tempo manuale più elevato', 'I consumabili contano', 'Si consiglia un margine per le rilavorazioni'],
        },
      ],
    },
    {
      type: 'message',
      title: 'Gli abrasivi sono materiali di consumo',
      ariaLabel: 'Nota sui consumabili',
      html: '<p>La carta vetrata, le spugne abrasive, le lime ad ago, lo stucco, i guanti e i panni non sono gratuiti. Aggiungi il loro costo diretto quando il lavoro ne consuma una quota significativa.</p>',
    },
    { type: 'title', text: 'Stima del costo di verniciatura e rivestimento', level: 2 },
    {
      type: 'paragraph',
      html: 'I minuti di verniciatura devono includere il tempo attivo dell\'operatore: mascheratura, miscelazione, spruzzatura, lavoro a pennello, ritocco, rimozione della mascheratura, pulizia dell\'area di lavoro e collaudo. Il tempo passivo di asciugatura o polimerizzazione dovrebbe essere aggiunto solo se blocca l\'operatore o occupa spazio cabina scarso addebitato come manodopera o costi generali. Questa distinzione evita che un <strong>calcolatore della tariffa oraria di post-elaborazione</strong> trasformi ogni ora di attesa in costo di manodopera quando nessuno sta lavorando attivamente sul pezzo.',
    },
    {
      type: 'table',
      headers: ['Operazione di verniciatura', 'Registrare come manodopera?', 'Registrare come consumabili?'],
      rows: [
        ['Mascheratura e rimozione maschera', 'Sì, minuti attivi', 'Nastro, film, tappi e mascherine'],
        ['Miscelazione vernice o rivestimento in resina', 'Sì, minuti attivi', 'Vernice, solvente, bicchieri, filtri, guanti'],
        ['Spruzzatura o pennellatura', 'Sì, minuti attivi', 'Materiale di rivestimento e solvente di pulizia'],
        ['Tempo di asciugatura', 'Solo se blocca manodopera retribuita o capacità cabina', 'Di solito nessun materiale diretto salvo calore o lampade fatturate separatamente'],
      ],
    },
    {
      type: 'tip',
      title: 'Addebita esplicitamente la complessità del colore',
      html: '<p>Una semplice mano di primer e una finitura bicolore mascherata possono avere un costo del materiale simile ma un costo della manodopera molto diverso. Usa il campo dei minuti di verniciatura per evidenziare la differenza prima di applicare il margine.</p>',
    },
    {
      type: 'proscons',
      title: 'Quota fissa di finitura vs minuti di finitura misurati',
      items: [
        { pro: 'Una quota fissa è rapida per lavori ripetuti con requisiti di finitura stabili.', con: 'Nasconde quale fase consuma il profitto quando un lavoro cambia.' },
        { pro: 'I minuti misurati rendono la stima verificabile e facile da aggiornare.', con: 'Richiedono all\'officina di rilevare i tempi di finitura reali per i tipi di pezzi comuni.' },
        { pro: 'La barra visiva dei costi rende i preventivi orientati al cliente più facili da spiegare internamente.', con: 'Non sostituisce il giudizio sul rischio estetico e sulla probabilità di rilavorazione.' },
      ],
    },
    { type: 'title', text: 'Materiali di consumo e costi generali di post-elaborazione', level: 2 },
    {
      type: 'paragraph',
      html: 'I materiali di consumo sono materiali diretti consumati durante la finitura. Possono includere carta vetrata, primer, stucco, vernice, liquido di lavaggio per resina, IPA, panni, guanti in nitrile, lame, nastro da mascheratura, tappi di protezione, bicchieri monouso, filtri, prodotto lucidante e vernice protettiva. Alcune officine li inseriscono nei costi generali, ma quantificarli come campo diretto è più prudente per lavori con standard di finitura insoliti, grandi superfici, carteggiatura intensiva o processi ricchi di solventi.',
    },
    {
      type: 'paragraph',
      html: 'Un campo separato per i consumabili aiuta anche con i flussi di lavoro del <strong>calcolatore dei costi generali di post-elaborazione</strong>. I costi generali sono normalmente più ampi dei consumabili: affitto, estrazione, illuminazione, filtrazione dell\'aria, utilizzo del compressore, manutenzione, software, supervisione e tempo amministrativo. Questo calcolatore non pretende di allocare ogni voce di costo generale. Fornisce invece un subtotale di costo diretto pulito che può alimentare un modello di preventivo più ampio in cui i costi generali e il margine vengono applicati in seguito.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Tariffa di manodopera', definition: 'Il costo orario o la tariffa di vendita assegnata al tempo di finitura manuale attiva.' },
        { term: 'Materiali di consumo', definition: 'Materiali diretti esauriti durante la post-elaborazione, come abrasivi, rivestimenti, guanti e liquidi detergenti.' },
        { term: 'Fattore di conversione', definition: 'Un moltiplicatore globale applicato agli input monetari per la scala valutaria o gli aggiustamenti del preventivo.' },
        { term: 'Costo diretto', definition: 'Un costo che può essere ricondotto al pezzo o al lotto specifico in lavorazione.' },
        { term: 'Costi generali', definition: 'Costi aziendali che supportano la produzione ma non sono consumati da un singolo pezzo in quantità facilmente misurabile.' },
      ],
    },
    {
      type: 'card',
      icon: 'mdi:receipt-text-outline',
      title: 'Dove va il margine',
      html: '<p>Questo strumento calcola il costo di finitura prima del profitto. Applica il margine dopo aver assemblato materiale, tempo macchina, post-elaborazione, rischio e costi generali, altrimenti i lavori ad alta intensità di manodopera rischiano di essere sottoquotati.</p>',
    },
    { type: 'title', text: 'Selezione della valuta e fattore di conversione', level: 2 },
    {
      type: 'paragraph',
      html: 'La selezione della valuta cambia il simbolo e può convertire i valori monetari esistenti usando fattori di riferimento pratici. Il calcolo è neutro rispetto alla valuta: una tariffa di 30 all\'ora e 10 di consumabili producono la stessa struttura indipendentemente dal fatto che il simbolo sia euro, dollaro, sterlina, yen o un\'altra valuta supportata. Questo è utile per i preventivi internazionali perché la matematica rimane stabile mentre la presentazione si adatta al cliente o alla sede dell\'officina.',
    },
    {
      type: 'paragraph',
      html: 'Il fattore di conversione esiste per i casi in cui l\'utente non vuole una conversione automatica del tasso di cambio o ha bisogno di un moltiplicatore commerciale personalizzato. Un fattore di <code>1</code> significa che la tariffa oraria e i consumabili sono già inseriti nella valuta locale selezionata. Un fattore di <code>1,15</code> aumenta entrambi i valori monetari del quindici percento. Un fattore di <code>0,92</code> li riduce dell\'otto percento. Poiché il fattore incide sul denaro e non sui minuti, la ripartizione visiva rimane proporzionale al costo aggiustato.',
    },
    {
      type: 'summary',
      title: 'Regole sulle valute',
      items: [
        'Usa il selettore per i simboli e la scalatura pratica tra le valute comuni.',
        'Mantieni il fattore di conversione a 1 quando gli input sono già nella valuta locale.',
        'Usa un fattore personalizzato per i listini regionali, il ricarico ai subappaltatori o gli aggiustamenti commerciali temporanei.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'I tassi di cambio non sono una politica contabile',
      badge: 'Nota sui prezzi',
      html: '<p>Per fatture ufficiali, dichiarazioni fiscali o report contabili, usa il tasso di cambio e la politica di arrotondamento richiesti dalla tua azienda. Questo calcolatore è destinato alla stima dei costi di produzione e alla preparazione dei preventivi.</p>',
    },
    { type: 'title', text: 'Usare la ripartizione visiva per migliorare il margine', level: 2 },
    {
      type: 'paragraph',
      html: 'La barra proporzionale è più che decorazione. Mostra quale fase di finitura sta consumando denaro. Se la carteggiatura domina, cambiare l\'orientamento di stampa, l\'altezza dello strato, l\'interfaccia di supporto o il materiale può ridurre il tempo manuale. Se la verniciatura domina, il preventivo potrebbe aver bisogno di un livello di finitura separato. Se i consumabili dominano, l\'acquisto all\'ingrosso o un processo di rivestimento diverso può essere più efficace dell\'efficienza della manodopera. Se la rimozione dei supporti domina, riprogettare i punti di contatto dei supporti può essere l\'intervento di maggior valore.',
    },
    {
      type: 'list',
      icon: 'mdi:target',
      items: [
        'Quando la rimozione dei supporti è la sezione più grande, rivedi lo stile, la densità, la distanza Z di contatto e l\'orientamento dei supporti.',
        'Quando la carteggiatura è la più alta, rivedi altezza strato, posizione della giuntura, strategia di riempimento e se la finitura preventivata è troppo elevata per il prezzo.',
        'Quando la verniciatura è la più alta, separa le finiture monocromatiche, mascherate e premium in livelli di preventivo distinti.',
        'Quando i consumabili sono i più alti, verifica se rivestimenti, liquido di lavaggio resina, abrasivi e materiali di mascheratura vengono sprecati o recuperati in misura insufficiente.',
      ],
    },
    {
      type: 'table',
      headers: ['Costo dominante', 'Causa probabile', 'Risposta al prezzo'],
      rows: [
        ['Rimozione supporti', 'Accesso difficile, supporti densi, dettagli fragili', 'Aggiungere un supplemento per la complessità dei supporti o rivedere l\'orientamento.'],
        ['Carteggiatura', 'Requisito estetico elevato, strati visibili, cicatrici di supporto', 'Creare livelli di finitura e addebitare la preparazione pronta per la verniciatura.'],
        ['Verniciatura', 'Mascheratura, colori multipli, pulizia cabina', 'Preventivare la verniciatura come voce di servizio separata.'],
        ['Consumabili', 'Rivestimenti, abrasivi, solventi, forniture protettive', 'Usare il monitoraggio diretto dei consumabili o addebiti minimi di materiale.'],
      ],
    },
    {
      type: 'summary',
      title: 'Flusso di lavoro per il preventivo',
      items: [
        'Misura i minuti manuali attivi per fase.',
        'Usa una tariffa oraria di finitura caricata.',
        'Aggiungi i consumabili diretti separatamente.',
        'Copia il risultato calcolato nel preventivo, poi applica costi generali e margine nel modello di prezzo completo.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
