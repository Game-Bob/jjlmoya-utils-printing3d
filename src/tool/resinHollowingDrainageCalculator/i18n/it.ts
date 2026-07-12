import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ResinHollowingDrainageCalculatorUI } from '../ui';

const slug = 'calcolatore-svuotamento-drenaggio-resina-sla';
const title = 'Calcolatore di Svuotamento e Drenaggio per Resina SLA';
const description = 'Calcola lo spessore conservativo della parete, il diametro del foro di scarico, il numero minimo di sfiati e il risparmio di resina ottimizzato per la complessità per stampe cave in resina SLA e DLP.';

const faqData = [
  { question: 'Perché il calcolatore raccomanda sempre almeno due fori di scarico?', answer: 'Una stampa in resina cava necessita di una via per far uscire la resina liquida e di un\'altra per far entrare l\'aria. Due aperture aiutano anche a rompere l\'effetto ventosa contro la pellicola di rilascio durante il distacco.' },
  { question: 'Perché il risparmio di resina è inferiore al volume vuoto teorico?', answer: 'La resina liquida rimane sulle pareti interne, sulle nervature, negli angoli, sui supporti e nelle piccole tasche. Il calcolatore sottrae il 5, 10 o 15 percento dal volume vuoto teorico in base alla complessità geometrica.' },
  { question: 'Lo spessore della parete di 1,5 mm è sempre sufficiente?', answer: 'No. È un limite minimo di sicurezza per molte stampe in resina desktop. Parti alte, pesanti, carichi strutturali, ambienti caldi o levigature aggressive potrebbero richiedere pareti più spesse.' },
  { question: 'Dove devono essere posizionati i fori di scarico?', answer: 'Posiziona i fori il più vicino possibile al lato del piano di stampa e ai punti di raccolta della resina più bassi nell\'orientamento di stampa, quindi verifica che non rimangano tasche sigillate nello slicer.' },
];

const howToData = [
  { name: 'Inserisci il volume e l\'altezza del modello', text: 'Usa il volume dello slicer dopo i supporti e l\'orientamento, quindi inserisci l\'altezza della parte nell\'orientamento di stampa.' },
  { name: 'Scegli la complessità geometrica', text: 'Seleziona una complessità semplice, moderata o alta in modo che la resina intrappolata venga sottratta dal risparmio teorico dello svuotamento.' },
  { name: 'Scegli il tipo di resina', text: 'Seleziona resina standard, resistente o ingegneristica. Le resine più viscose ricevono una raccomandazione per un diametro di scarico maggiore.' },
  { name: 'Controlla le raccomandazioni su pareti e scarichi', text: 'Verifica lo spessore della parete, il diametro di scarico, il numero di fori e la checklist prima di affettare il file finale.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org', '@type': 'HowTo',
  name: title, description,
  step: howToData.map((step, index) => ({
    '@type': 'HowToStep', position: index + 1,
    name: step.name, text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org', '@type': 'SoftwareApplication',
  name: title, description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'it',
};

const seoData = [
    {
      type: 'title',
      text: 'Cosa fa il Calcolatore di Svuotamento e Drenaggio della Resina SLA?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Questo strumento risolve una delle sfide più critiche nella stampa 3D a resina SLA, DLP e LCD: l\'ottimizzazione dei modelli vuoti. La stampa di parti in resina solida è costosa, pesante e aumenta le forze di distacco durante il processo di stampa. Lo svuotamento del modello riduce l\'uso di materiale, ma l\'introduzione di cavità vuote senza un adeguato drenaggio porta al ristagno di resina non polimerizzata e a fallimenti di stampa a causa delle forze di vuoto. Questo calcolatore calcola lo spessore ideale della parete, suggerisce il diametro e la quantità corretti di fori di drenaggio e stima il risparmio effettivo di resina tenendo conto della resina liquida che inevitabilmente rimane intrappolata sulle pareti interne della parte stampata.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
          {
            value: '1.5 mm',
            label: 'Spessore minimo della parete consigliato per SLA desktop'
          },
          {
            value: '2 fori',
            label: 'Numero minimo di sfiati necessari per rompere il vuoto'
          },
          {
            value: '10-15%',
            label: 'Riduzione del volume di resina dovuta alla ritenzione sulle pareti interne'
          },
          {
            value: '30-70%',
            label: 'Riduzione media del peso totale ottenuta con lo svuotamento'
          }
        ]
    },
    {
      type: 'title',
      text: 'Come lo spessore della parete influisce sul risparmio di resina',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Lo spessore della parete è la variabile principale che determina la quantidade di resina risparmiata. Una parete più spessa aumenta la resistenza strutturale ma consuma rapidamente più resina, riducendo l\'efficienza dello svuotamento. Al contrario, una parete troppo sottile sarà fragile, soggetta a deformazioni durante la polimerizzazione e potrebbe non resistere alle forze meccaniche di distacco mentre la stampante separa ogni livello dal film FEP. L\'obiettivo è trovare il punto di equilibrio in cui il modello mantiene la sua forma e utilità massimizzando al tempo stesso il risparmio di materiale.'
    },
    {
      type: 'proscons',
      title: 'Pro e contro dello svuotamento delle stampe in resina',
      items: [
          {
            pro: 'Massiccia riduzione dei costi del materiale e del peso complessivo della stampa',
            con: 'Richiede un post-trattamento per lavare e polimerizzare le cavità interne'
          },
          {
            pro: 'Una minore area superficial per strato riduce le forze di distacco sul film FEP',
            con: 'Fori posizionati male possono rovinare l\'estetica visiva del modello'
          },
          {
            pro: 'Riduce lo stress termico e la deformazione durante la post-polimerizzazione',
            con: 'Rischio che la resina liquida intrappolata causi la successiva fessurazione della parte'
          }
        ]
    },
    {
      type: 'title',
      text: 'Capire l\'effetto ventosa nelle stampe in resina cave',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Quando viene stampato un modello vuoto, si forma una camera chiusa quando si immerge nella vasca. Se questa camera è priva di fori di ventilazione, ogni ciclo di sollevamento crea un forte vuoto parziale (effetto ventosa) tra lo strato polimerizzato e la pellicola di rilascio. Questa forza tira la stampa, provocando la separazione degli strati, linee di livello, fallimenti dei supporti o persino il distacco completo del modello dalla piastra di costruzione. L\'aggiunta di fori di ventilazione consente all\'aria di entrare, neutralizzando la differenza di pressione e garantendo cicli di distacco fluidi.'
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Il pericolo degli spazi vuoti sigillati',
      html: 'Non lasciare mai uno spazio vuoto completamente sigillato. La resina liquida intrappolata all\'interno di una parte stampata degraderà lentamente le pareti polimerizzate nel tempo, causando infine la fessurazione del modello, la perdita di resina tossica o la completa disintegrazione. Includere sempre almeno due fori per lavare l\'interno e polimerizzarlo con una fonte di luce UV interna.'
    },
    {
      type: 'title',
      text: 'Linee guida per il posizionamento dei fori di drenaggio',
      level: 2
    },
    {
      type: 'list',
      items: [
          'Posizionare i fori di drenaggio il più vicino possibile alla piastra di costruzione per consentire alla resina di fuoriuscire all\'inizio della stampa.',
          'Utilizzare sempre almeno due fori: uno per far defluire la resina liquida e un altro per far entrare l\'aria.',
          'Orientare i fori su superfici non visibili, come il fondo delle basi o dietro i giunti, per preservare l\'estetica.',
          'Assicurarsi che ogni camera interna isolata o tasca abbia il proprio set di fori di drenaggio.'
        ]
    },
    {
      type: 'title',
      text: 'Come il calcolatore si adatta alla complessità geometrica',
      level: 2
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
          {
            title: 'Geometria semplice',
            description: 'Modelli a basso dettaglio, sfere o blocchi. Trattiene una quantità minima di resina (circa il 5%) su pareti interne piatte.'
          },
          {
            title: 'Geometria moderata',
            description: 'Modelli di personaggi o parti meccaniche standard. I supporti interni e le curve trattengono una quantità moderata di resina (circa il 10%).',
            highlight: true
          },
          {
            title: 'Alta complessità',
            description: 'Miniature altamente dettagliate, strutture a traliccio o canali vuoti complessi. Trattiene una quantità significativa di resina (circa il 15%+) a causa dell\'azione capillare.'
          }
        ]
    },
    {
      type: 'title',
      text: 'Comprendere la viscosità della resina e il dimensionamento dei fori di drenaggio',
      level: 2
    },
    {
      type: 'table',
      headers: [
          'Classe resina',
          'Livello viscosità',
          'Diametro min foro',
          'Posizionamento consigliato'
        ],
      rows: [
          [
              'Resina standard',
              'Basso-Medio',
              '2.0 - 3.0 mm',
              'Base o superfici piane nascoste'
            ],
          [
              'Resistente / Flessibile',
              'Medio-Alto',
              '3.0 - 4.5 mm',
              'Angoli e giunti per evitare il distacco'
            ],
          [
              'Ingegneristica / Calcinabile',
              'Molto Alto',
              '4.5 - 6.0 mm',
              'Linea di vista diretta per drenaggio a gravità'
            ]
        ]
    },
    {
      type: 'title',
      text: 'Quando aumentare lo spessore della parete oltre 1,5 mm',
      level: 2
    },
    {
      type: 'tip',
      title: 'Scala e funzione dettano lo spessore della parete',
      html: 'Sebbene 1,5 mm sia un minimo affidabile per piccole figure da esposizione, dovresti aumentare lo spessore della parete per stampe più grandi. Per parti più alte di 150 mm, punta a pareti da 2,0 mm a 2,5 mm. Per componenti meccanici portanti o parti stampate con resine flessibili/elastomeriche, le pareti dovrebbero be da 3,0 mm o più spesse per prevenire il collasso strutturale sotto carico.'
    },
    {
      type: 'title',
      text: 'Tecnico Glossario per la stampa SLA cava',
      level: 2
    },
    {
      type: 'glossary',
      items: [
          {
            term: 'Svuotamento SLA',
            definition: 'Il processo di conversione di un modello 3D solido in un guscio vuoto con uno spessore di parete specifico per risparmiare resina e tempo di stampa.'
          },
          {
            term: 'Effettivita ventosa',
            definition: 'La forza di vuoto creata quando una cavità vuota chiusa viene allontanata dal film di rilascio durante la stampa.'
          },
          {
            term: 'Forza di distacco',
            definition: 'La tensione meccanica subita dal modello e dai supporti mentre lo strato polimerizzato viene separata dal fondo della vasca.'
          },
          {
            term: 'Ristagno di resina',
            definition: 'La ritenzione di resina liquida non polimerizzata all\'interno di angoli interni, supporti e texture a causa della tensione superficiale.'
          }
        ]
    },
    {
      type: 'title',
      text: 'Lista di controllo per stampe cave di successo',
      level: 2
    },
    {
      type: 'summary',
      title: 'Lista di controllo SLA preslicing',
      items: [
          'Verificare che lo spessore dello svuotamento sia appropriato per la scala del modello.',
          'Confermare che siano posizionati almeno due fori di drenaggio nei punti di stampa più bassi.',
          'Verificare la presenza di vuoti interni isolati privi di ventilazione.',
          'Pianificare il lavaggio interno con IPA e la polimerizzazione con LED UV interni.'
        ]
    }
  ];

export const content: ToolLocaleContent & { ui: ResinHollowingDrainageCalculatorUI } = {
  slug, title, description,
  ui: {
    unitSystemLabel: 'Unità',
    metricLabel: 'Metrico',
    imperialLabel: 'US',
    modelInputsLabel: 'Input del modello',
    volumeLabel: 'Volume totale del modello',
    heightLabel: 'Altezza della parte',
    complexityLabel: 'Complessità geometrica',
    resinTypeLabel: 'Tipo di resina',
    simpleLabel: 'Semplice',
    moderateLabel: 'Moderata',
    highLabel: 'Alta',
    standardLabel: 'Standard',
    toughLabel: 'Resistente',
    engineeringLabel: 'Ingegneristica',
    resultsLabel: 'Risultato svuotamento e drenaggio',
    wallThicknessLabel: 'Parete consigliata',
    drainDiameterLabel: 'Diametro di scarico',
    drainHoleCountLabel: 'Fori minimi',
    adjustedSavingLabel: 'Risparmio di resina stimato',
    adjustedSavingNote: 'Ottimizzato per la complessità per tenere conto della resina liquida trattenuta sulle superfici interne.',
    trapFactorLabel: 'Fattore resina intrappolata',
    trapFactorHelp: 'Questo fattore varia con la complessità geometrica per compensare la tensione superficiale della resina viscosa nelle cavità cieche.',
    theoreticalSavingLabel: 'Volume vuoto teorico',
    trappedAllowanceLabel: 'Tolleranza resina trattenuta',
    savingUnitLabel: 'Risparmio',
    percentLabel: '%',
    cm3Unit: 'cm3',
    cubicInUnit: 'in3',
    mmUnit: 'mm',
    inchUnit: 'in',
    mlUnit: 'ml',
    drainPlacementNote: 'Nota: I fori di scarico devono essere posizionati vicino al lato del piano di stampa e ai punti di raccolta della resina più bassi nell\'orientamento di stampa.',
    vacuumWarning: 'I corpi cavi richiedono sempre almeno due fori di scarico per rompere il vuoto contro la pellicola di rilascio.',
    trappedResinWarning: 'Le geometrie complesse trattengono la resina liquida all\'interno; questo calcolo stima la tolleranza.',
    checklistTitle: 'Checklist pre-slicing',
    checklistItems: ['Assicurarsi che i fori di scarico siano posizionati nella zona vicino al piano di stampa.', 'Verificare che lo spessore della parete non scenda sotto 1,5 mm.', 'Confermare che non ci siano isole di resina chiuse o vuoti nel modello.'],
  },
  seo: seoData, faq: faqData, bibliography, howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
