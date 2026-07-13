import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MachineHourlyRateCalculatorUI } from '../ui';

const slug = 'calcolatore-costo-orario-macchina-produzione';
const title = 'Calcolatore del Costo Orario Macchina e Costo di Produzione';
const description =
  'Calcola il costo operativo reale di una stampante 3D dal consumo energetico, dalla tariffa elettrica, dal prezzo di acquisto, dalla vita utile e dalla durata di stampa.';

const faqData = [
  {
    question: 'Come si calcola il costo orario di una stampante 3D?',
    answer:
      'Somma il costo elettrico orario al costo di ammortamento orario. L\'elettricità è data dai watt divisi per 1000 moltiplicati per la tariffa elettrica. L\'ammortamento è il prezzo di acquisto diviso per le ore di vita utile.',
  },
  {
    question: 'Perché l\'ammortamento è importante nella determinazione dei prezzi di stampa 3D?',
    answer:
      'L\'ammortamento rappresenta il valore della macchina consumato durante la produzione dei pezzi. Ignorarlo può far sembrare redditizia una stampa mentre la stampante perde silenziosamente valore di rivendita, affidabilità e capacità di sostituzione.',
  },
  {
    question: 'Quale vita utile dovrei usare per una stampante 3D da scrivania?',
    answer:
      'Un valore indicativo di 5000 ore è un punto di partenza pratico per molte stampanti da scrivania, ma le fattorie di produzione dovrebbero sostituirlo con la cronologia di manutenzione, il ciclo di sostituzione previsto e i dati effettivi di funzionamento.',
  },
  {
    question: 'È la stessa cosa di un preventivo completo di stampa 3D?',
    answer:
      'No. Questo calcolatore copre l\'elettricità della macchina e l\'ammortamento dell\'hardware. Un preventivo completo dovrebbe includere anche filamento o resina, manodopera, stampe fallite, post-elaborazione, imballaggio, spese generali e margine.',
  },
];

const howToData = [
  { name: 'Inserisci la potenza misurata della stampante', text: 'Utilizza i watt medi durante una stampa comparabile, non solo la potenza nominale dell\'alimentatore.' },
  { name: 'Imposta la durata di stampa', text: 'Sposta il cursore della durata sul tempo macchina previsto per il lavoro o il lotto di produzione.' },
  { name: 'Aggiungi i dati di energia e cespite', text: 'Inserisci la tariffa elettrica, il prezzo di acquisto della macchina e la vita utile stimata in ore di funzionamento.' },
  { name: 'Leggi la ripartizione dei costi', text: 'Usa il costo totale, la tariffa oraria e la composizione tra elettricità e ammortamento per prezzare il tempo macchina.' },
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
    'Calcolatore consumo energetico stampante 3D',
    'Calcolatore ammortamento orario macchina',
    'Stimatore costo operativo stampa 3D',
    'Composizione costo: elettricità versus ammortamento',
  ],
  inLanguage: 'it',
};

export const content: ToolLocaleContent<MachineHourlyRateCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Input tariffa oraria macchina',
    resultsAriaLabel: 'Risultati tariffa oraria macchina',
    settingsLabel: 'Impostazioni preventivo',
    currencyLabel: 'Valuta',
    currencyOptions: [
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
    ],
    durationLabel: 'Tempo di produzione',
    powerLabel: 'Potenza media',
    tariffLabel: 'Tariffa elettrica',
    purchasePriceLabel: 'Prezzo di acquisto macchina',
    usefulLifeLabel: 'Vita utile stimata',
    totalCostLabel: 'Costo operativo totale',
    hourlyRateLabel: 'Tariffa oraria macchina',
    electricityLabel: 'Elettricità',
    depreciationLabel: 'Ammortamento',
    electricityPerHourLabel: 'Costo energetico per ora',
    depreciationPerHourLabel: 'Costo del cespite per ora',
    compositionLabel: 'Composizione costo: elettricità versus ammortamento',
    insightLabel: 'Indicazione di redditività',
    utilizationLabel: 'Pressione di utilizzo',
    utilizationValueLabel: 'Vita utile consumata',
    utilizationHint: 'Questo lavoro consuma la quota mostrata della vita utile stimata della macchina.',
    batchLabel: 'Costo operativo lotto',
    energyUsedLabel: 'Energia utilizzata',
    costDriverLabel: 'Fattore principale',
    energyDriverLabel: 'Energia',
    assetDriverLabel: 'Cespite',
    balancedDriverLabel: 'Equilibrato',
    electricityDominant: 'Il lavoro è guidato dall\'energia: la tariffa, la dimensione del piatto riscaldato, la temperatura della camera e il tempo di riscaldamento a vuoto influenzeranno il preventivo più del prezzo di acquisto.',
    depreciationDominant: 'Il lavoro è guidato dal cespite: il prezzo della macchina e la vita utile dominano, quindi ogni ora non utilizzata indebolisce l\'economia di questa stampante.',
    balancedDominant: 'Elettricità e ammortamento sono abbastanza vicini che entrambi dovrebbero apparire nella tariffa oraria dell\'officina invece di nasconderne uno all\'interno del margine.',
    hoursUnit: 'h',
    wattsUnit: 'W',
    kwhUnit: 'kWh',
    currencySymbol: '\u20ac',
  },
  seo: [
    { type: 'title', text: 'Cosa significa una tariffa oraria macchina nella stampa 3D', level: 2 },
    {
      type: 'paragraph',
      html: 'Una <strong>tariffa oraria macchina</strong> è il costo di tenere una stampante occupata produttivamente per un\'ora prima di aggiungere materiale, manodopera, post-elaborazione, imballaggio e profitto. Nella stampa 3D, questo numero è spesso sottostimato perché i costi visibili come il filamento sono più facili da notare rispetto ai costi nascosti come l\'elettricità e l\'ammortamento dell\'hardware. Una stampante da scrivania può consumare solo pochi centesimi di elettricità all\'ora, ma una macchina professionale costata diverse migliaia di euro deve recuperare il suo valore in una vita utile finita. Questo calcolatore isola questi due costi macchina in modo che il preventivo di produzione inizi con una base misurabile.',
    },
    {
      type: 'paragraph',
      html: 'Il calcolatore utilizza due formule trasparenti. Il costo elettrico è <code>(W / 1000) x T x tariffa</code>, dove <code>W</code> è la potenza media in watt, <code>T</code> è la durata di stampa in ore e la tariffa è il prezzo dell\'elettricità per kilowattora. Il costo di ammortamento è <code>(prezzo di acquisto / ore di vita utile) x T</code>. Il costo operativo totale è la somma di entrambi. Poiché entrambi i termini scalano con il tempo, le stesse formule producono anche una tariffa oraria chiara: elettricità all\'ora più ammortamento all\'ora.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'W / 1000', label: 'Converte i watt in kilowatt', icon: 'mdi:flash-outline' },
        { value: 'kWh', label: 'Unità di fatturazione energetica', icon: 'mdi:meter-electric-outline' },
        { value: 'P / life', label: 'Costo macchina lineare per ora', icon: 'mdi:chart-line' },
        { value: 'Ce + Ca', label: 'Costo operativo totale', icon: 'mdi:calculator-variant-outline' },
      ],
    },
    {
      type: 'tip',
      title: 'Utilizza i watt medi misurati',
      html: '<p>L\'etichetta dell\'alimentatore indica la capacità massima, non il consumo della stampante durante un lavoro reale. Per un migliore <strong>input nel calcolatore di consumo della stampante 3D</strong>, misura una stampa rappresentativa con un misuratore a parete e fai la media delle fasi di riscaldamento, stampa, ventola, piatto e attesa.</p>',
    },
    { type: 'title', text: 'Costo elettrico: trasformare i watt in costo di produzione', level: 2 },
    {
      type: 'paragraph',
      html: 'Il costo elettrico dipende dal consumo medio di energia, non solo dalla potenza nominale della stampante. Una macchina con un alimentatore da 350 W può consumare in media 90 W in un piccolo lavoro PLA dopo il riscaldamento, mentre una grande stampante chiusa con piatto caldo e camera può rimanere molto più alta per i polimeri tecnici. L\'area del piatto riscaldato, la temperatura della camera, la temperatura dell\'ugello, la temperatura ambiente, il ciclo della ventola e il tempo di inattività prima della rimozione del pezzo possono tutti modificare la potenza effettiva.',
    },
    {
      type: 'paragraph',
      html: 'La conversione in kilowattora è semplice ma importante. Una stampante da 180 W che funziona per 8 ore utilizza <code>0,18 kW x 8 h = 1,44 kWh</code>. A 0,25 € per kWh, quella parte del lavoro costa 0,36 €. Può sembrare poco, ma le fattorie con molte macchine, lunghi lavori in PETG o ASA, armadi di essiccazione riscaldati e climatizzazione possono trasformare piccole differenze orarie in una bolletta mensile significativa.',
    },
    {
      type: 'table',
      headers: ['Input', 'Cosa inserire', 'Errore comune'],
      rows: [
        ['Potenza media', 'Watt misurati sull\'intero ciclo di stampa', 'Usare la potenza nominale dell\'alimentatore o il picco di riscaldamento.'],
        ['Durata', 'Tempo di occupazione macchina in ore', 'Ignorare il preriscaldamento, il raffreddamento o i tempi di attesa.'],
        ['Tariffa', 'Prezzo effettivo per kWh dalla bolletta', 'Usare una media nazionale obsoleta invece della tariffa dell\'officina.'],
        ['Valuta', 'La valuta utilizzata nel tuo modello di preventivo', 'Mescolare costo hardware in euro con ipotesi energetiche in dollari.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Il costo energetico è basso finché la scala non lo rende visibile',
      badge: 'Pianificazione fattoria',
      html: '<p>Una stampante piccola potrebbe non giustificare una contabilità energetica elaborata. Venti stampanti che eseguono lunghi lavori ogni giorno sì. La stessa formula elettrica può essere utilizzata per lavoro, per stampante, per cella o per mese cambiando solo la durata.</p>',
    },
    { type: 'title', text: 'Ammortamento: il costo nascosto dietro la redditività della stampante', level: 2 },
    {
      type: 'paragraph',
      html: 'L\'ammortamento è il riconoscimento finanziario che una stampante si consuma con l\'uso. Le guide si usurano, le ventole invecchiano, i piani perdono planarità, gli hotend si ostruiscono, l\'elettronica diventa obsoleta e la macchina necessita eventualmente di sostituzione. Se una stampante costa 900 € e l\'officina prevede 5000 ore di funzionamento utile, la macchina consuma 0,18 € di valore del cespite ogni ora produttiva. Un lavoro di dieci ore comporta quindi 1,80 € di costo hardware prima ancora di considerare materiale o manodopera.',
    },
    {
      type: 'paragraph',
      html: 'L\'ammortamento a quote costanti è intenzionalmente pratico qui. Non cerca di modellare la legge fiscale, il valore di rivendita, il finanziamento o gli eventi di manutenzione. Invece, risponde alla domanda di determinazione del prezzo di produzione: quanto di questo acquisto della macchina dovrebbe essere assegnato a ogni ora di lavoro? Quel numero è il fondamento per le ricerche di <strong>tasso di ammortamento orario per stampante 3D</strong> e per qualsiasi fattoria che voglia che il denaro di sostituzione esista quando la stampante raggiunge la fine della sua vita economica.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Stampante da scrivania hobby',
          description: 'Prezzo di acquisto basso e uso irregolare. L\'elettricità può essere visibile sui lavori con piatto riscaldato, ma l\'ammortamento conta comunque se i pezzi vengono venduti.',
          icon: 'mdi:printer-3d-nozzle-outline',
          points: ['Minore esposizione di capitale', 'Vita utile spesso incerta', 'La manodopera manuale di solito domina i preventivi'],
        },
        {
          title: 'Stampante per fattoria prosumer',
          description: 'Prezzo di acquisto moderato, alta produttività, materiali ripetuti e molti lavori identici rendono l\'ammortamento orario un dato fondamentale per i preventivi.',
          icon: 'mdi:factory',
          highlight: true,
          points: ['Adatta per ipotesi di vita di 3000-8000 ore', 'Registrare le riparazioni effettive', 'Separare il tempo macchina dalla manodopera'],
        },
        {
          title: 'Sistema industriale',
          description: 'L\'alto costo del capitale significa che l\'ammortamento può dominare. I contratti di servizio, l\'ambiente della camera di costruzione e il tempo di qualifica possono richiedere linee di costo aggiuntive.',
          icon: 'mdi:domain',
          points: ['Il costo del capitale domina', 'I tempi di inattività sono costosi', 'Aggiungere servizio e spese generali di struttura'],
        },
      ],
    },
    {
      type: 'message',
      title: 'L\'input della vita utile merita attenzione',
      ariaLabel: 'Nota sulla vita utile',
      html: '<p>Il valore predefinito di 5000 ore è un punto di partenza, non una verità universale. Una macchina hobby poco utilizzata può diventare obsoleta prima di raggiungere quel numero, mentre una macchina da fattoria ben mantenuta può superarlo. Usa il numero che corrisponde alla tua politica di sostituzione.</p>',
    },
    { type: 'title', text: 'Scegliere le ore di vita utile senza congetture', level: 2 },
    {
      type: 'paragraph',
      html: 'La vita utile è l\'ipotesi contabile più sensibile in questo calcolatore perché si trova al denominatore della formula di ammortamento. Se alla stessa stampante da 900 € vengono assegnate 3000 ore utili, l\'ammortamento è di 0,30 € all\'ora. Con 9000 ore utili, scende a 0,10 € all\'ora. La stampante non è cambiata, ma l\'aspettativa aziendale è cambiata. Ecco perché un preventivo dovrebbe documentare la vita utile scelta invece di seppellirla in un margine generico.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Usa i registri di manutenzione quando disponibili: sostituzioni ugello, guasti ventole, usura guide, cinghie, schede, hotend e superfici del piatto rivelano la curva di costo reale.',
        'Separa le famiglie di stampanti. Un piccolo bedslinger, una macchina di produzione CoreXY e una stampante resina non dovrebbero condividere un unico numero di vita utile.',
        'Vita utile inferiore per macchine sperimentali che passano molte ore in regolazioni fallite, test di materiali o validazioni specifiche del cliente.',
        'Aumenta la vita utile solo quando la disponibilità, la manutenzione preventiva, i pezzi di ricambio e la cronologia delle sostituzioni supportano l\'ipotesi.',
        'Rivedi l\'ipotesi dopo aggiornamenti importanti perché un nuovo sistema di movimento, contenitore o hotend può cambiare la vita economica del cespite.',
      ],
    },
    {
      type: 'table',
      headers: ['Ipotesi di vita utile', 'Migliore adattamento', 'Conseguenza sul prezzo'],
      rows: [
        ['2000-3000 h', 'Macchine sperimentali, economiche, poco documentate o ad uso intensivo', 'Ammortamento orario più elevato protegge il capitale di sostituzione.'],
        ['4000-6000 h', 'Macchine da scrivania standard o prosumer con uso regolare in produzione', 'Intervallo iniziale equilibrato per molte piccole fattorie.'],
        ['7000-10000 h', 'Flotta di stampanti stabile con dati di manutenzione e materiali controllati', 'Costo orario del cespite inferiore ma richiede fiducia nella disponibilità.'],
        ['Oltre 10000 h', 'Beni industriali o pesantemente mantenuti con ciclo di vita documentato', 'Utile solo quando servizio e tempi di inattività sono contabilizzati separatamente.'],
      ],
    },
    {
      type: 'summary',
      title: 'Lista di controllo vita utile',
      items: [
        'Abbina la vita utile alla classe di stampante, non a un numero generico trovato su Internet.',
        'Documenta l\'ipotesi in modo che i preventivi rimangano spiegabili mesi dopo.',
        'Ricalcola quando la macchina viene riutilizzata dall\'uso hobby alla produzione a pagamento.',
      ],
    },
    { type: 'title', text: 'Interpretare la suddivisione tra elettricità e ammortamento', level: 2 },
    {
      type: 'paragraph',
      html: 'La barra di composizione mostra se un lavoro è guidato dall\'energia o dal cespite. I lavori guidati dall\'energia rispondono fortemente alla tariffa elettrica, alla strategia del piatto riscaldato, alla temperatura della camera, al comportamento di riscaldamento e alle condizioni ambientali. I lavori guidati dal cespite rispondono più fortemente al prezzo di acquisto, alla vita utile e all\'utilizzo. Una suddivisione equilibrata significa che nessuna linea dovrebbe essere ignorata; entrambe appartengono alla tariffa oraria base della macchina.',
    },
    {
      type: 'paragraph',
      html: 'Questa suddivisione è utile perché lo stesso costo totale può avere diversi rimedi. Se l\'elettricità domina, ridurre la temperatura del piatto, raggruppare i pezzi per evitare riscaldamenti ripetuti, isolare un contenitore o stampare durante finestre tariffarie più basse può aiutare. Se l\'ammortamento domina, la leva migliore è l\'utilizzo: mantieni la stampante occupata con lavori redditizi, evita il capitale inattivo e scegli la dimensione della macchina con attenzione invece di acquistare capacità che rimane inutilizzata.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Costo elettrico', definition: 'L\'energia fatturata consumata dalla stampante durante la durata selezionata.' },
        { term: 'Ammortamento', definition: 'La quota del prezzo di acquisto della macchina assegnata alle ore utilizzate dal lavoro.' },
        { term: 'Vita utile', definition: 'Il numero previsto di ore di funzionamento produttivo prima che la stampante venga sostituita economicamente.' },
        { term: 'Tariffa oraria macchina', definition: 'Costo elettrico all\'ora più costo di ammortamento all\'ora prima di materiale, manodopera, spese generali e profitto.' },
        { term: 'Costo operativo', definition: 'Il costo macchina sostenuto per mantenere la produzione in funzione per una durata specifica.' },
      ],
    },
    {
      type: 'proscons',
      title: 'Cosa include ed esclude questo calcolatore',
      items: [
        { pro: 'Include consumo energetico misurato, tariffa elettrica, durata, prezzo di acquisto e vita utile.', con: 'Non include filamento, resina, supporti, stampe fallite, manodopera, affitto, software, imballaggio o margine.' },
        { pro: 'Mostra la suddivisione dei costi in modo che gli utenti possano identificare il principale fattore economico.', con: 'Utilizza l\'ammortamento a quote costanti, quindi non modella i programmi di ammortamento fiscale o il valore di rivendita.' },
        { pro: 'Funziona per una stampa, un lotto o un blocco di produzione mensile cambiando la durata.', con: 'Richiede ipotesi oneste sulla potenza e sulla vita utile per evitare falsa precisione.' },
      ],
    },
    { type: 'title', text: 'Usare il risultato per fissare un prezzo redditizio all\'ora', level: 2 },
    {
      type: 'paragraph',
      html: 'La tariffa oraria calcolata è il pavimento per il tempo macchina, non il prezzo di vendita finale. Un preventivo completo di stampa 3D aggiunge normalmente materiale, rifiuti di supporto, spurgo, manodopera dell\'operatore, tempo di slicing e preparazione, tolleranza per errori, consumabili di manutenzione, affitto, software, commissioni di pagamento, tasse e il margine target. La tariffa oraria macchina è comunque essenziale perché impedisce che la stampante stessa venga trattata come gratuita.',
    },
    {
      type: 'paragraph',
      html: 'Ad esempio, se il calcolatore restituisce 0,225 € per ora macchina e un lavoro occupa la stampante per 14 ore, il costo operativo macchina è di 3,15 €. Se il materiale è 4,80 €, l\'allocazione della manodopera è 6,00 €, la tolleranza per errori è 1,20 € e il margine viene applicato successivamente, il preventivo diventa finanziariamente tracciabile. Quando un cliente chiede perché una stampa lunga costa più di quanto suggerisca il peso della plastica, il tempo macchina diventa una voce spiegabile.',
    },
    {
      type: 'card',
      icon: 'mdi:cash-clock',
      title: 'Indicazione di redditività',
      html: '<p>Questo calcolo è la base per definire il <strong>prezzo all\'ora</strong> di qualsiasi fattoria di stampa. Una volta noto il costo macchina all\'ora, l\'officina può decidere se fatturare il tempo macchina direttamente, includerlo nel margine del materiale o usarlo internamente per confrontare stampanti e materiali.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Non preventivare solo per grammi',
      badge: 'Costo nascosto',
      html: '<p>Un pezzo leggero che occupa la stampante per 20 ore può consumare più capacità macchina di un pezzo pesante stampato rapidamente. La determinazione del prezzo basata sul peso senza tempo macchina spesso sottovaluta i lavori lenti, alti, a strato sottile o a basso flusso.</p>',
    },
    { type: 'title', text: 'Esempi pratici per stime di costo operativo nella stampa 3D', level: 2 },
    {
      type: 'paragraph',
      html: 'Un lavoro PLA da scrivania ben regolato può consumare in media 120 W, funzionare per 6 ore, utilizzare una tariffa di 0,22 €/kWh e trovarsi su una stampante da 600 € con una vita utile di 5000 ore. L\'elettricità è solo 0,158 €, mentre l\'ammortamento è 0,720 €. Il costo operativo totale della macchina è di circa 0,878 € e la tariffa oraria è di circa 0,146 €. In questo caso, il lavoro è chiaramente guidato dal cespite: un migliore utilizzo della macchina influisce sulla redditività più di piccoli cambiamenti di potenza.',
    },
    {
      type: 'paragraph',
      html: 'Un lavoro ASA su una stampante chiusa più grande può consumare in media 420 W per 18 ore a 0,30 €/kWh. Se la stampante costa 1800 € e la vita utile è di 4500 ore, l\'elettricità è 2,268 € e l\'ammortamento è 7,200 €, per un costo macchina totale di 9,468 €. Anche se il consumo energetico è molto più alto, l\'ammortamento domina ancora perché il costo del capitale e la lunga occupazione della macchina sono sostanziali.',
    },
    {
      type: 'paragraph',
      html: 'Una stampante resina può raccontare una storia diversa. La stampante può consumare energia modesta, ma il calcolo si applica comunque all\'occupazione della macchina. Se una costruzione richiede 9 ore su una macchina da 2500 € che dovrebbe produrre 4000 ore utili, il solo ammortamento è di 5,625 €. Quel numero appartiene al preventivo prima di aggiungere resina, guanti, IPA o liquido di lavaggio, post-polimerizzazione, supporti e manodopera di pulizia.',
    },
    {
      type: 'summary',
      title: 'Regole decisionali',
      items: [
        'Usa i watt medi misurati per la precisione elettrica.',
        'Usa ore di vita utile realistiche per il recupero del cespite.',
        'Tratta il risultato come il pavimento del tempo macchina, poi aggiungi materiale, manodopera, spese generali, rischio e margine.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
