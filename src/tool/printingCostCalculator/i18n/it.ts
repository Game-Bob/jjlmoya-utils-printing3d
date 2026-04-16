import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PrintingCostCalculatorUI } from '../ui';

const slug = 'calcolatore-costi-stampa-3d';
const title = 'Calcolatore Costi Stampa 3D: Filamento ed Energia';
const description = 'Calcola il prezzo reale delle tue stampe 3D. Include costo del materiale, elettricità, ammortamento macchina e manodopera.';

const faqData = [
  {
    question: 'Perché il costo dell\'elettricità varia così tanto?',
    answer: 'Il consumo maggiore deriva dal mantenimento del piano caldo (bed). Materiali come l\'ABS (100°C) consumano molto più del PLA (60°C). Anche il fatto che la stampante sia aperta o chiusa influenza il costo.',
  },
  {
    question: 'Come faccio a sapere quanti watt consuma la mia stampante?',
    answer: 'La maggior parte delle stampanti domestiche consuma in media 100-150W durante il funzionamento. Puoi misurarlo con precisione usando una presa intelligente o un wattmetro.',
  },
  {
    question: 'Cos\'è il margine di scarto?',
    answer: 'È il filamento che non fa parte del pezzo finale: supporti, raft, skirt e spurgo iniziale. Raccomandiamo un minimo del 5% per essere realistici.',
  },
];

const howToData = [
  {
    name: 'Inserisci i dati tecnici',
    text: 'Scrivi il peso del pezzo (fornito dal software slicer come Cura), il tempo di stampa e il consumo della tua macchina.',
  },
  {
    name: 'Configura i costi economici',
    text: 'Regola il prezzo della bobina, la tua tariffa elettrica e il valore che attribuisci alla tua ora di lavoro manuale.',
  },
  {
    name: 'Analizza il profitto',
    text: 'Sposta il cursore del margine per vedere il prezzo di vendita suggerito e controlla il grafico a torta per vedere dove finiscono i soldi.',
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

const howToSchema: WithContext<HowToThing> = {
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'it',
};

export const content: ToolLocaleContent<PrintingCostCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    materialTitle: 'Materiale',
    partWeightLabel: 'Peso del pezzo (netto)',
    gramsUnit: 'grammi',
    spoolPriceLabel: 'Prezzo bobina (1kg)',
    spoolPriceUnit: '€/kg',
    wasteMarginLabel: 'Margine di scarto: ',
    energyTitle: 'Energia e Tempo',
    printTimeLabel: 'Tempo di stampa',
    hoursUnit: 'ore',
    averagePowerLabel: 'Consumo medio',
    wattsUnit: 'watt',
    electricityRateLabel: 'Tariffa elettrica',
    kwhPriceUnit: '€/kWh',
    amortizationTitle: 'Ammortamento e Lavoro',
    machineCostHourLabel: 'Costo macchina per ora',
    priceHourUnit: '€/h',
    laborCostHourLabel: 'Manodopera (manuale)',
    minutesUnit: 'minuti',
    manufacturingCostLabel: 'Costo di Produzione',
    suggestedPriceLabel: 'Prezzo Suggerito (+{margin}%)',
    costBreakdownTitle: 'Ripartizione dei Costi',
    plasticLabel: 'Plastica',
    electricityLabel: 'Elettricità',
    machineLabel: 'Macchina',
    laborLabel: 'Manodopera',
    proTip: 'Sapevi che scaldare il piano a 100°C per l\'ABS può raddoppiare il costo dell\'elettricità rispetto al PLA? Non dimenticare di contare i fallimenti: se il 10% dei tuoi pezzi fallisce, il tuo costo reale è del 10% superiore.',
  },
  seo: [
    {
      type: 'title',
      text: 'Calcolare il Costo Reale della Stampa 3D: Oltre il Filamento',
      level: 1,
    },
    {
      type: 'paragraph',
      html: 'Quando iniziamo nel mondo della produzione additiva, è comune pensare che l\'unico costo sia la plastica che esce dall\'ugello. Tuttavia, se vuoi trasformarlo in un business o semplicemente gestire meglio il tuo hobby, devi capire che la <strong>redditività</strong> risiede nei dettagli che non sono visibili a prima vista.',
    },
    {
      type: 'title',
      text: 'I 4 Pilastri del Costo nella Stampa 3D',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Il nostro calcolatore scompone il prezzo finale in quattro aree fondamentali:',
    },
    {
      type: 'summary',
      items: [
        'Materiale e Scarto: Include il peso del pezzo, ma anche la plastica usata nei supporti, skirt e spurghi. Raccomandiamo sempre di aggiungere un margine del 5-10% per i possibili fallimenti di stampa.',
        'Consumo Elettrico: Una stampante 3D non consuma lo stesso stampando PLA (piano a 60°C) rispetto ad ABS o Nylon (piano a 100°C+). Il prezzo del kWh può fare la differenza nei pezzi lunghi.',
        'Ammortamento Macchina: Ogni ora che la stampante è in funzione, i suoi componenti (cinghie, ventole, ugelli) si usurano. Includere un piccolo costo orario ti permetterà di pagare le riparazioni future.',
        'Manodopera: Il tuo tempo è il bene più prezioso. La preparazione del file, la pulizia del piano e la post-lavorazione del pezzo devono essere contabilizzate.',
      ],
    },
    {
      type: 'title',
      text: 'Come calcolare l\'ammortamento?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Un modo semplice è dividere il prezzo d\'acquisto della stampante per la sua vita utile stimata in ore. Ad esempio, se una stampante costa 400 € e prevedi che lavori almeno 2000 ore prima di una revisione importante, il suo costo di ammortamento è <strong>0,20 € l\'ora</strong>.',
    },
    {
      type: 'tip',
      title: 'Risparmiare sull\'Elettricità',
      html: '<p>Se stampi molto, considera di chiudere la tua stampante con un enclosure (box). Questo non solo aiuta a stampare materiali tecnici, ma trattiene anche il calore e fa sì che il piano riscaldato consumi molto meno per mantenere la temperatura.</p>',
    },
    {
      type: 'title',
      text: 'Strategie per il Prezzo di Vendita',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Una volta conosciuto il costo base, devi decidere il tuo margine. Nel mondo della stampa 3D su richiesta, un margine del 50-100% sul costo totale è comune per coprire il rischio di fallimenti imprevisti e il profitto commerciale. Se il pezzo richiede molto lavoro manuale di scartatura e pittura, il margine dovrebbe essere più alto.',
    },
    {
      type: 'summary',
      items: [
        'Prezzo per tempo: Ideale per servizi di stampa pura.',
        'Prezzo per grammo: Comune per pezzi massicci ma semplici.',
        'Prezzo per valore: Se il design è unico, il prezzo non dovrebbe basarsi solo sul costo, ma su ciò che il cliente è disposto a pagare.',
      ],
    },
  ],
  faqTitle: 'Domande Frequenti sui Costi 3D',
  faq: faqData,
  bibliographyTitle: 'Bibliografia e Risorse',
  bibliography: [
    {
      name: 'PrusaPrinters: Calcolare i costi della stampa 3D',
      url: 'https://blog.prusa3d.com/es/calculadora-precio-impresion-3d_38905/',
    },
    {
      name: 'Simplify3D: Stima dei Materiali e dei Costi',
      url: 'https://forum.simplify3d.com/viewtopic.php?t=11758',
    },
    {
      name: '3DHubs: Guida ai costi della produzione additiva',
      url: 'https://www.hubs.com/knowledge-base/cost-3d-printing/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
