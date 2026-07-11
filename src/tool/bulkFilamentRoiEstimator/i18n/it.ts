import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BulkFilamentRoiEstimatorUI } from '../ui';

const slug = 'calcolatore-roi-filamento-alla-ruvida';
const title = 'Calcolatore ROI Filamento Alla Ruvida';
const description = 'Confronta bobine da 1kg con bobine da 3kg, 5kg o formati bulk personalizzati, considerando il rischio umidità, il risparmio reale e la valuta locale.';

const faqData = [
  {
    question: 'Una bobina da 5kg è sempre più conveniente di cinque bobine da 1kg?',
    answer: "No. Lo è solo quando il costo al grammo è inferiore e puoi consumare il materiale prima che l'esposizione all'umidità riduca la qualità di stampa. Un consumo lento può trasformare uno sconto in spreco.",
  },
  {
    question: 'Perché il calcolatore sottrae una penale di rischio?',
    answer: 'La penale stima il valore perso quando il tempo di consumo previsto supera la finestra di conservazione sicura. Non è una conversione valutaria né un modello di umidità da laboratorio; è un aggiustamento del rischio per la pianificazione.',
  },
  {
    question: 'Servono tassi di cambio in tempo reale?',
    answer: "No. Lo strumento usa una tabella approssimativa di tassi di cambio locali per convertire i prezzi visibili quando cambi valuta. Preserva l'equivalenza senza contattare un server, quindi le decisioni di acquisto finali dovrebbero comunque basarsi sul prezzo mostrato dal negozio o dalla banca.",
  },
  {
    question: 'Che tempo di conservazione devo inserire per PLA, PETG, TPU o Nylon?',
    answer: 'Usa il periodo in cui puoi mantenere asciutto quel materiale nel tuo ambiente. Il PLA può tollerare una conservazione più lunga di Nylon o TPU, ma una stanza aperta, un clima umido o una chiusura non ermetica possono accorciare drasticamente la finestra sicura.',
  },
];

const howToData = [
  {
    name: 'Inserire il prezzo della bobina standard',
    text: 'Inserisci il prezzo della bobina da 1kg che acquisti abitualmente. Il peso della bobina standard può essere regolato se il tuo fornitore utilizza un altro formato.',
  },
  {
    name: "Inserire l'offerta bulk",
    text: 'Scegli 3kg, 5kg o un peso personalizzato e inserisci il prezzo totale di quella bobina più grande nella stessa valuta.',
  },
  {
    name: 'Modellare il rischio di stoccaggio',
    text: "Aggiungi il tuo consumo mensile e la durata massima di stoccaggio che ritieni sicura prima che umidità, fragilità o sforzo di essiccazione diventino un costo reale.",
  },
  {
    name: "Leggere il risparmio reale",
    text: 'Usa la cifra del risparmio reale come segnale di acquisto perché include sia lo sconto bulk che la penale di degrado.',
  },
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
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'it',
};

export const content: ToolLocaleContent<BulkFilamentRoiEstimatorUI> = {
  slug,
  title,
  description,
  ui: {
    currencyLabel: 'Valuta',
    unitSystemLabel: 'Unità',
    metricLabel: 'Metrico',
    imperialLabel: 'Imperiale',
    standardTitle: 'Bobina standard',
    bulkTitle: 'Bobina bulk',
    consumptionTitle: 'Consumo e stoccaggio',
    standardWeightLabel: 'Peso standard',
    standardPriceLabel: 'Prezzo bobina standard',
    bulkWeightLabel: 'Peso bulk',
    bulkPresetThreeMetricLabel: '3 kg',
    bulkPresetFiveMetricLabel: '5 kg',
    bulkPresetThreeImperialLabel: '6,6 lb',
    bulkPresetFiveImperialLabel: '11 lb',
    otherWeightLabel: 'Altro',
    bulkPriceLabel: 'Prezzo bobina bulk',
    customWeightLabel: 'Peso bulk personalizzato',
    monthlyUseLabel: 'Consumo mensile',
    safeStorageLabel: 'Finestra stoccaggio sicuro',
    kgUnit: 'kg',
    lbUnit: 'lb',
    monthsUnit: 'mesi',
    realSavingsLabel: 'Risparmio reale dopo il rischio',
    grossSavingsLabel: 'Risparmio lordo',
    riskPenaltyLabel: 'Penale rischio umidità',
    breakEvenLabel: 'Tempo di consumo',
    viabilityLabel: 'Vabilità',
    tableMetricLabel: 'Metrica',
    tableStandardLabel: 'Bobina 1kg',
    tableStandardImperialLabel: 'Bobina 2,2lb',
    tableBulkLabel: 'Bobina bulk',
    costPerGramMetric: 'Costo al grammo',
    costPerOunceMetric: "Costo all'oncia",
    totalSpoolMetric: 'Prezzo bobina',
    usableWindowMetric: 'Finestra di consumo',
    profitableLabel: 'Redditizio',
    neutralLabel: 'Neutro',
    poorLabel: 'Scarso rapporto',
    humidityWarningTitle: "Rischio di degrado da umidità",
    humidityWarning: "Rischio di degrado: l'acquisto di questa bobina può far perdere denaro se non si dispone di un sistema di essiccazione o stoccaggio ermetico.",
    safeMessage: "Il rischio di stoccaggio rientra nella tua finestra di stoccaggio sicuro. Tieni la bobina sigillata e asciutta per preservare il risparmio previsto.",
  },
  seo: [
    {
      type: 'title',
      text: 'Come capire se il filament in bulk è davvero più conveniente',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Una bobina di filament da 3kg o 5kg sembra vantaggiosa perché il prezzo al chilo esposto è generalmente inferiore a quello di una bobina da 1kg. L'errore è confrontare solo il totale alla cassa. Un confronto corretto normalizza entrambe le offerte in <strong>costo al grammo</strong>, moltiplica la differenza per la quantità di materiale che acquisterai effettivamente, quindi determina se il materiale rimarrà stampabile fino al termine.",
    },
    {
      type: 'paragraph',
      html: "La formula di base è semplice: dividi ogni prezzo della bobina per il suo peso in grammi. Se una bobina da 1kg costa 24,99 e una bobina da 5kg costa 89,99, la bobina da 1kg costa 0,02499 al grammo e la bobina bulk costa 0,017998 al grammo. Il risparmio apparente è la differenza al grammo moltiplicata per 5000 grammi. Questo dato è utile, ma resta incompleto se la bobina rimane aperta per mesi.",
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '1000g', label: "Massa di riferimento di una comune bobina da scrivania" },
        { value: '3-5kg', label: 'Formato bulk tipico in cui gli sconti diventano visibili' },
        { value: '0 API', label: "L'equivalenza valutaria utilizza tassi locali approssimativi invece di una chiamata server in tempo reale" },
      ],
    },
    {
      type: 'table',
      headers: ['Domanda', 'Cosa inserire', 'Perché è importante'],
      rows: [
        ["Qual è il mio acquisto abituale?", 'Il prezzo della bobina da 1kg', 'Stabilisce il costo di riferimento al grammo.'],
        ["Qual è l'offerta bulk?", 'Il prezzo totale e il peso del lotto', 'Crea il costo al grammo ridotto.'],
        ['Quanto velocemente stampi?', 'Kg consumati al mese', 'Stima la durata di stoccaggio della bobina.'],
        ['Qual è il tuo livello di stoccaggio?', 'Mesi di sicurezza prima del degrado', 'Definisce quando inizia la penale di rischio.'],
      ],
    },
    {
      type: 'title',
      text: "Perché l'umidità modifica il calcolo del ROI",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Il filament non è un equivalente di tesoro depositato in sicurezza su uno scaffale. Molti polimeri assorbono l'umidità dall'aria e un filament umido può stampare con bolle, filamenti, estrusione fragile, superfici torbide, scarsa adesione degli strati e flusso irregolare. La velocità esatta dipende dal materiale, dall'umidità, dall'imballaggio e dal fatto che la bobina sia conservata in una scatola asciutta, un sacchetto sigillato o un supporto aperto.",
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: "La modalità di guasto nascosta della bobina bulk",
      badge: 'Rischio di pianificazione',
      html: "Una bobina da 5kg può essere un cattivo acquisto anche quando il prezzo al grammo è eccellente. Se la tua stampante consuma 0,5kg al mese e la tua finestra di stoccaggio sicuro è di 3 mesi, quella bobina richiede circa 10 mesi per essere terminata. Lo sconto deve essere sufficientemente grande da coprire il costo dell'essiccazione, della sigillatura, dei fallimenti di stampa o del rischio di scarto.",
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Utente veloce',
          description: "Una piccola fattoria di stampa, un creatore di cosplay o un lotto di produzione può consumare 3kg-5kg rapidamente. Il filament in bulk è generalmente redditizio perché il tempo di stoccaggio è breve.",
          points: ['Elevato utilizzo mensile', 'Bassa esposizione allo stoccaggio', 'Lo sconto diventa denaro risparmiato'],
        },
        {
          title: 'Hobbista intermittente',
          description: "Un utente che stampa nei weekend o per riparazioni occasionali può impiegare diversi mesi per finire una bobina grande. Il rischio di umidità può cancellare lo sconto.",
          points: ['Basso utilizzo mensile', 'Lunga vita aperta', 'Lo stoccaggio asciutto è più importante'],
        },
        {
          title: 'Utente di materiali tecnici',
          description: "Materiali come Nylon, TPU, miscele PC e alcuni gradi di PETG richiedono spesso una disciplina di essiccazione più rigorosa. Gli acquisti in bulk dovrebbero essere accompagnati da attrezzature di stoccaggio.",
          points: ['Maggiore sensibilità all\'umidità', 'Scatola asciutta raccomandata', 'La soglia di penale deve essere conservativa'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Cosa significa il dato del risparmio reale',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Lo strumento mostra prima il risparmio lordo, poi sottrae una penale di degrado quando il tempo di consumo stimato supera la finestra di stoccaggio sicuro. Questa penale è deliberatamente conservativa piuttosto che una previsione da laboratorio. Rappresenta la realtà economica per cui un filament umido o troppo vecchio crea spesso costi non ovvi: elettricità per essiccare, movimentazione extra, fallimenti di stampa, ugelli ostruiti, difetti di superficie e la possibilità che parte della bobina diventi inadatta per lavori visibili o strutturali.",
    },
    {
      type: 'list',
      items: [
        'Un risparmio reale positivo significa che lo sconto bulk resiste all\'aggiustamento del rischio di stoccaggio.',
        'Neutro significa che la decisione dipende dalla comodità, dalla disponibilità dei colori, dalla spedizione e dal fatto che possiedi già una scatola asciutta.',
        "Scarso significa che la bobina bulk non è più conveniente al grammo o che il risparmio aggiustato per il rischio è negativo.",
        "Il messaggio di avviso appare quando i mesi di consumo sono superiori alla finestra di stoccaggio sicuro che hai inserito.",
      ],
    },
    {
      type: 'proscons',
      title: 'Compromessi dell\'acquisto di filament in bulk',
      items: [
        { pro: 'Costo al grammo inferiore per la stampa di grande volume.', con: "Più capitale immobilizzato in un singolo materiale, colore e lotto del fornitore." },
        { pro: "Meno cambi di bobina durante le lunghe serie di produzione.", con: "Una massa esposta più grande può degradarsi prima di essere consumata." },
        { pro: "Meno rifiuti di imballaggio per chilogrammo.", con: "Le bobine grandi potrebbero richiedere supporti più robusti o supporti esterni." },
        { pro: "Utile per lavori ripetitivi in fattoria e produzione a lotti.", con: "Scelta sbagliata per colori rari, materiali sperimentali o uso lento per hobby." },
      ],
    },
    {
      type: 'title',
      text: 'Come scegliere una finestra di stoccaggio sicuro',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "La finestra di stoccaggio sicuro non è una costante universale del materiale. È il tempo durante il quale ritieni personalmente che il filament rimarrà stampabile nelle tue condizioni di stoccaggio. Un sacchetto sigillato con disidratante fresco in una stanza asciutta è molto diverso da una bobina aperta accanto a una stampante in un garage umido. Per una decisione di acquisto conservativa, inserisci il numero di mesi dopo il quale inizieresti a essiccare la bobina prima di stampe importanti.",
    },
    {
      type: 'table',
      headers: ['Situazione', 'Comportamento di pianificazione suggerito', 'Motivo'],
      rows: [
        ['Supporto aperto in una stanza umida', 'Usa una finestra breve', "L'esposizione all'umidità è continua."],
        ['Scatola ermetica con disidratante', 'Usa una finestra più lunga', 'La bobina è protetta tra le stampe.'],
        ['Scatola asciutta che alimenta la stampante', 'Usa una finestra lunga ma realistica', 'Stampa e stoccaggio sono entrambi controllati.'],
        ['Nylon, TPU, PC o supporto solubile', 'Sii conservativo', 'Questi materiali possono diventare problematici rapidamente quando umidi.'],
        ['PLA usato per prototipi approssimativi', 'La tolleranza al rischio può essere maggiore', 'Difetti estetici minori possono essere accettabili per pezzi non critici.'],
      ],
    },
    {
      type: 'tip',
      title: "Usa il calcolatore prima della fine della promozione",
      html: "Le offerte lampo rendono spesso le bobine bulk urgenti. Inserisci il prezzo promozionale, il prezzo inclusa la spedizione se possibile, e il tuo consumo mensile realistico. Se il tempo di consumo supera la finestra di stoccaggio, la promozione deve essere sufficientemente interessante da compensare il rischio aggiunto.",
    },
    {
      type: 'title',
      text: 'Conversione di valuta senza API di tassi di cambio',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Questo stimatore è progettato per funzionare lato client. Non recupera tassi di cambio in tempo reale, ma il selettore di valuta applica comunque un moltiplicatore di conversione locale quando l'utente cambia valuta. Ciò significa che una bobina inserita a 24,99 EUR diventa un equivalente approssimativo in USD, GBP, JPY o un'altra valuta supportata invece di sostituire semplicemente il simbolo. I tassi sono stime di pianificazione, quindi i prezzi alla cassa, le commissioni della carta, le tasse e le differenze di conversione specifiche del mercato devono sempre essere verificati prima dell'acquisto.",
    },
    {
      type: 'glossary',
      items: [
        { term: 'Costo al grammo', definition: "Il prezzo della bobina diviso per il numero totale di grammi di filament. È l'unità normalizzata utilizzata per un confronto equo." },
        { term: 'Risparmio lordo', definition: "Il vantaggio di prezzo prima di considerare il rischio di umidità o stoccaggio." },
        { term: 'Penale di rischio', definition: "Una deduzione di pianificazione applicata quando la bobina impiega più tempo a essere consumata rispetto alla finestra di stoccaggio sicuro." },
        { term: 'Risparmio reale', definition: "Il risparmio lordo meno la penale di rischio. È il principale segnale di acquisto." },
        { term: 'Finestra di consumo', definition: 'Il peso della bobina bulk diviso per il consumo mensile stimato.' },
      ],
    },
    {
      type: 'summary',
      title: "Regola pratica d'acquisto",
      items: [
        "Acquista in bulk quando il risparmio reale è chiaramente positivo e la finestra di consumo corrisponde alla tua configurazione di stoccaggio.",
        'Evita il bulk quando acquisti un colore raro che rimarrà inutilizzato dopo un progetto.',
        "Tratta l'attrezzatura di essiccazione come parte del sistema di filament in bulk, non come un lusso facoltativo per polimeri sensibili all'umidità.",
        "Confronta i prezzi consegnati, non solo i prezzi sulla pagina del prodotto, quando la spedizione differisce tra le dimensioni delle bobine.",
      ],
    },
    {
      type: 'message',
      title: 'Risultato finale',
      html: "Una bobina bulk è redditizia quando tre condizioni sono soddisfatte: un costo al grammo inferiore, un consumo mensile sufficiente e uno stoccaggio che mantiene il filament stampabile. Se una condizione manca, lo sconto apparente può trasformarsi in una perdita di materiali mascherata.",
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
