import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { WallPerimeterOptimizerUI } from '../ui';

export const content: ToolLocaleContent<WallPerimeterOptimizerUI> = {
  slug: 'ottimizzatore-di-perimetri-e-pareti',
  title: 'Ottimizzatore di Perimetri e Pareti',
  description: 'Calcola il numero esatto di perimetri e una larghezza di linea sicura in modo che lo spessore di parete stampato corrisponda al modello CAD senza spazi interni.',
  ui: {
    controlsAriaLabel: 'Input dell\'ottimizzatore di perimetri parete',
    resultsAriaLabel: 'Risultati dell\'ottimizzatore di perimetri parete',
    unitSystemLabel: 'Unità',
    metricLabel: 'Metrico',
    imperialLabel: 'US',
    tooltipLabel: 'Maggiori informazioni',
    nozzleLabel: 'Diametro ugello',
    nozzleHelp: 'Diametro fisico del foro dell\'ugello. La larghezza di linea sicura è limitata all\'80-120% di questo valore.',
    lineWidthLabel: 'Larghezza linea',
    lineWidthHelp: 'Larghezza di estrusione dello slicer per pareti esterne ed interne.',
    cadThicknessLabel: 'Spessore parete CAD',
    cadThicknessHelp: 'Spessore di parete progettato che dovrebbe essere riprodotto da perimetri interi.',
    commonNozzlesLabel: 'Dimensioni ugello comuni',
    infillStrategyLabel: 'Strategia di riempimento parete',
    perimeterFirstLabel: 'Perimetri prima',
    solidInfillFallbackLabel: 'Riempimento solido di riserva',
    solidInfillTip: 'Consiglio: se preferisci non aggiungere altri perimetri, usa riempimento solido o gap fill affidabile nelle pareti sottili in modo che lo slicer non lasci vuoti interni.',
    copySolidInfillNote: 'Se mantieni meno perimetri, usa riempimento solido o gap fill verificato per gli interni di pareti sottili.',
    visualLabel: 'Sezione trasversale che mostra i perimetri impacchettati dentro lo spessore di parete CAD',
    cadEnvelopeLabel: 'Involucro parete CAD',
    lineLabel: 'Linea di estrusione',
    recommendedPerimetersLabel: 'Perimetri consigliati',
    realThicknessLabel: 'Spessore reale',
    residualLabel: 'Errore residuo',
    verdictLabel: 'Verdetto di precisione',
    exactLabel: 'Esatto',
    adjustLabel: 'Richiede regolazione larghezza linea',
    impossibleLabel: 'Impossibile con questo ugello',
    adjustedWidthLabel: 'Larghezza linea regolata',
    noAdjustmentLabel: 'Nessuna regolazione',
    slicerBlockLabel: 'Configurazione slicer',
    perimetersUnitLabel: 'perimetri',
    copyLabel: 'Copia impostazioni',
    copiedLabel: 'Blocco slicer copiato.',
    safeRangeLabel: 'Intervallo larghezza linea sicura',
    compareLabel: 'Opzioni perimetri più vicine',
    perimetersColumn: 'Perimetri',
    lineWidthColumn: 'Larghezza linea',
    realThicknessColumn: 'Spessore reale',
    errorColumn: 'Errore',
    messageExact: 'La larghezza di linea selezionata si trova entro 0,05 mm dalla parete CAD. Questa è una buona parete fatta solo di perimetri.',
    messageAdjust: 'La larghezza corrente lascia uno spazio misurabile. Usa la larghezza di linea regolata per chiudere la parete esattamente con perimetri interi.',
    messageTooThin: 'La parete CAD è più sottile del diametro dell\'ugello. Riprogetta la parete, usa un ugello più piccolo o accetta un elemento non strutturale a linea singola.',
    messageOutsideRange: 'Nessuna regolazione nell\'intervallo sicuro 80-120% del diametro ugello può chiudere questa parete esattamente. Modifica la parete CAD o cambia la dimensione dell\'ugello.',
    mmUnit: 'mm',
    inchUnit: 'pol',
  },
  seo: [
    { type: 'title', text: 'Perché lo spessore di parete deve corrispondere a perimetri interi', level: 2 },
    {
      type: 'paragraph',
      html: 'Gli slicer FDM costruiscono una parete a partire da cordoni di estrusione discreti. Una parete CAD di 1,20 mm non è un\'istruzione solida continua; diventa uno, due, tre o più perimetri a seconda della larghezza di linea, del diametro dell\'ugello e delle regole dello slicer. Se il conto non torna, lo slicer deve scegliere tra lasciare uno spazio interno stretto, inserire un sottile percorso di gap fill, sovraestrudere una regione o modificare silenziosamente l\'ordine dei percorsi utensile. Le parti funzionali ne soffrono perché la parete che sembrava solida in CAD può contenere una cucitura debole o un cordone irregolare all\'interno della sezione.',
    },
    {
      type: 'paragraph',
      html: 'L\'equazione utile è semplice: <strong>spessore reale parete = numero perimetri × larghezza linea</strong>. La difficoltà sta nello scegliere valori che rimangano stampabili. Una larghezza di linea può di solito scendere un po\' sotto o salire sopra il diametro dell\'ugello, ma non può essere arbitraria. Questo ottimizzatore cerca numeri interi di perimetri, misura l\'errore residuo rispetto allo spessore CAD e propone una regolazione della larghezza di linea solo quando la larghezza esatta rimane entro un intervallo conservativo dell\'80-120% del diametro ugello.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0,05 mm', label: 'soglia di precisione usata per il verdetto' },
        { value: '80-120%', label: 'banda sicura di larghezza linea attorno al diametro ugello' },
        { value: 'n × larghezza', label: 'equazione principale dello spessore parete' },
        { value: '2 decimali', label: 'precisione pratica minima dello slicer' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'I perimetri sono geometria intera',
      html: 'Uno slicer non può stampare 2,6 perimetri normali. Se una parete è troppo larga per due linee e troppo stretta per tre, necessita di comportamento gap fill o di una dimensione CAD corretta.',
    },
    { type: 'title', text: 'Come scegliere lo spessore di parete CAD per un ugello da 0,4 mm', level: 2 },
    {
      type: 'paragraph',
      html: 'Un ugello da 0,4 mm usa comunemente una larghezza di linea intorno a 0,40-0,48 mm. Con una larghezza di linea di 0,42 mm, due perimetri producono 0,84 mm, tre perimetri producono 1,26 mm e quattro perimetri producono 1,68 mm. Una parete progettata di 1,20 mm sembra ragionevole in CAD, ma dista 0,06 mm da tre perimetri da 0,42 mm. È vicino, ma non esatto. L\'ottimizzatore può suggerire 3 perimetri a 0,40 mm, il che chiude perfettamente la parete e rimane esattamente al diametro dell\'ugello.',
    },
    {
      type: 'paragraph',
      html: 'Per le parti meccaniche, spesso è meglio progettare le pareti come multipli della larghezza di linea prevista piuttosto che forzare lo slicer a ripararle. Gli obiettivi CAD comuni per un ugello da 0,4 mm sono circa 0,8 mm per gusci leggeri, 1,2 mm per pareti funzionali normali, 1,6 mm per alloggiamenti più resistenti e 2,0 mm o più per elementi portanti. I valori esatti dovrebbero seguire la larghezza di linea dello slicer, non solo il diametro nominale dell\'ugello.',
    },
    {
      type: 'table',
      headers: ['Ugello', 'Intervallo larghezza linea sicura', 'Buoni target a 2 pareti', 'Buoni target a 3 pareti'],
      rows: [
        ['0,2 mm', '0,16-0,24 mm', '0,32-0,48 mm', '0,48-0,72 mm'],
        ['0,4 mm', '0,32-0,48 mm', '0,64-0,96 mm', '0,96-1,44 mm'],
        ['0,6 mm', '0,48-0,72 mm', '0,96-1,44 mm', '1,44-2,16 mm'],
        ['0,8 mm', '0,64-0,96 mm', '1,28-1,92 mm', '1,92-2,88 mm'],
      ],
    },
    {
      type: 'tip',
      title: 'Progetta all\'indietro partendo dal profilo dello slicer',
      html: 'Prima di modellare clip a scatto, nervature, bossoli o pareti di contenitori, decidi ugello e larghezza di linea. Imposta poi le dimensioni della parete come multipli puliti in modo che lo slicer non inventi percorsi di gap fill nelle aree critiche.',
    },
    { type: 'title', text: 'Limiti della larghezza di linea: perché l\'80-120% è una banda sicura', level: 2 },
    {
      type: 'paragraph',
      html: 'Un ugello può depositare un cordone leggermente più largo del suo foro perché la plastica viene pressata contro lo strato precedente e appiattita in un percorso ovale. Può anche stampare una linea leggermente più stretta, ma troppo stretta chiede alla stampante di creare un cordone controllato con supporto laterale limitato. Entrambi gli estremi hanno compromessi. Linee molto larghe possono sovrappressurizzare l\'hotend, spalmare gli angoli, nascondere piccoli dettagli e ridurre la precisione dimensionale. Linee molto strette possono riempire insufficientemente le pareti, indebolire l\'unione e rendere la consistenza dell\'estrusione più sensibile al pressure advance e al diametro del filamento.',
    },
    {
      type: 'paragraph',
      html: 'L\'intervallo 80-120% usato qui è intenzionalmente conservativo. Molti slicer permettono valori più ampi per modalità speciali, stampa in vaso o ugelli grossolani, e gli utenti esperti possono spingersi oltre questo intervallo dopo test. Questo strumento mira a una pianificazione affidabile di pareti meccaniche, dove la raccomandazione deve essere abbastanza sicura da essere copiata in un profilo normale senza causare sotto-estrusione o sovra-estrusione evidente. Se una corrispondenza esatta richiede una larghezza di linea fuori intervallo, lo strumento segnala il progetto come impraticabile invece di fingere che lo slicer possa risolverlo pulitamente.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: 'Troppo stretto', description: 'Il cordone potrebbe non pressare abbastanza materiale nella sezione di parete.', points: ['Unione interlinea debole', 'Spazi visibili', 'Pareti sottili fragili'] },
        { title: 'Intervallo sicuro', description: 'Il cordone rimane vicino al comportamento fisico dell\'ugello.', highlight: true, points: ['Estrusione prevedibile', 'Buon controllo dimensionale', 'Profili riutilizzabili'] },
        { title: 'Troppo largo', description: 'L\'ugello potrebbe spingere più plastica di quanta il percorso possa accettare.', points: ['Angoli rigonfi', 'Crestature superficiali', 'Contropressione più alta'] },
      ],
    },
    {
      type: 'message',
      title: 'Sicuro non significa calibrato',
      html: 'Anche una larghezza matematicamente perfetta necessita di un flusso calibrato. Se il moltiplicatore di estrusione è sbagliato, la parete fisica può comunque risultare spessa o sottile al calibro.',
    },
    { type: 'title', text: 'Diagnosticare gli spazi interni nell\'anteprima dello slicer', level: 2 },
    {
      type: 'paragraph',
      html: 'Il modo più rapido per identificare una discrepanza di perimetri è ispezionare l\'anteprima strato per strato. Cerca una sottile striscia pallida tra le pareti esterna ed interna, una singola linea vagante di gap fill, o un\'area dove lo slicer alterna tra due e tre linee lungo la stessa caratteristica. Questi schemi sono comuni nelle pareti di contenitori, bossoli, clip e nervature sottili perché la dimensione CAD è spesso scelta visivamente piuttosto che come multiplo della larghezza di estrusione.',
    },
    {
      type: 'paragraph',
      html: 'Uno spazio nella parete non è sempre visibile all\'esterno della stampa. La parte può sembrare pulita mentre l\'interno contiene un vuoto stretto che riduce la rigidezza. Questo è importante per bossoli per viti, perni a pressione, staffe, telai di droni, ingranaggi e qualsiasi parte dove il carico viaggia attraverso la parete. Se lo spazio si trova tra i perimetri, la parete può spaccarsi più facilmente perché il percorso di carico attraversa materiale debolmente legato o mancante invece di cordoni continui.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Il gap fill è una riparazione, non un progetto di parete',
      html: 'Gli slicer moderni possono inserire sottili percorsi di gap fill, ma quei percorsi sono spesso stampati con velocità, flusso e raffreddamento diversi. Per geometrie portanti, un multiplo pulito di perimetri è più prevedibile.',
    },
    {
      type: 'summary',
      title: 'Lista di verifica per l\'anteprima',
      items: [
        'Passa all\'anteprima per tipo di linea o caratteristica, non solo alla vista a colore solido.',
        'Ispeziona le pareti in corrispondenza di fori, nervature, bossoli e linguette sottili.',
        'Controlla se appaiono percorsi di gap fill nelle regioni strutturali.',
        'Confronta lo spessore di parete CAD con multipli interi della larghezza di linea.',
        'Usa la larghezza di linea regolata solo quando rimane nell\'intervallo sicuro dell\'ugello.',
      ],
    },
    { type: 'title', text: 'Quando il risultato è esatto, richiede regolazione o è impossibile', level: 2 },
    {
      type: 'paragraph',
      html: 'Il verdetto usa una soglia residua di 0,05 mm perché la maggior parte dei sistemi FDM da scrivania hanno variazioni pratiche dovute a flusso, diametro del filamento, dilatazione termica, calibrazione del movimento e tecnica di misurazione. Se le impostazioni attuali rientrano in quella banda, lo strumento chiama il risultato esatto. Non significa che ogni campione stampato misurerà perfettamente al micron; significa che la geometria dello slicer stessa è allineata abbastanza vicino che l\'errore rimanente è probabilmente di calibrazione o comportamento del materiale piuttosto che di aritmetica dei perimetri.',
    },
    {
      type: 'paragraph',
      html: 'Richiede regolazione significa che la larghezza di linea corrente lascia un residuo maggiore, ma lo stesso numero di perimetri può chiudere la parete con una larghezza sicura. Per esempio, una parete di 1,20 mm con larghezza di linea 0,42 mm dà tre linee a 1,26 mm. Regolare a 0,40 mm rende tre linee esattamente 1,20 mm. Impossibile significa che o la parete è più sottile del diametro dell\'ugello o la larghezza di linea esatta necessaria cadrebbe fuori dalla banda sicura dell\'ugello. In tal caso, riprogettare la parete o cambiare la dimensione dell\'ugello è meglio che forzare lo slicer.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Perimetro', definition: 'Un anello di parete generato dallo slicer attorno al contorno di uno strato.' },
        { term: 'Larghezza linea', definition: 'La larghezza comandata di un cordone estruso, a volte chiamata larghezza di estrusione.' },
        { term: 'Residuo', definition: 'La differenza assoluta tra lo spessore di parete CAD e lo spessore prodotto da perimetri interi.' },
        { term: 'Gap fill', definition: 'Un percorso generato dallo slicer per occupare lo spazio rimanente che i perimetri normali non riempiono pulitamente.' },
      ],
    },
    {
      type: 'proscons',
      title: 'Regolare la larghezza di linea versus modificare il CAD',
      items: [
        { pro: 'La regolazione della larghezza di linea è veloce e può preservare il file del modello.', con: 'Colpisce ogni parete che usa quel profilo a meno che non sia delimitata con cura.' },
        { pro: 'La modifica CAD rende esplicita l\'intenzione di progetto per stampe future.', con: 'Richiede più tempo quando molte caratteristiche sono già vincolate.' },
        { pro: 'Cambiare la dimensione dell\'ugello può salvare pareti molto sottili o molto spesse.', con: 'Cambia la risoluzione dei dettagli, il tempo di stampa e il volume di estrusione.' },
      ],
    },
    { type: 'title', text: 'Applicare l\'output in Cura, PrusaSlicer e slicer simili', level: 2 },
    {
      type: 'paragraph',
      html: 'Il blocco di copia contiene intenzionalmente solo i due valori che contano: numero di perimetri e larghezza di linea. In Cura, il numero di perimetri corrisponde al conteggio linee di parete, e la larghezza di linea corrisponde alla larghezza di linea di parete o alla larghezza di linea globale a seconda della struttura del profilo. In PrusaSlicer e derivati, usa perimeters per il conteggio anelli e extrusion width per la larghezza di linea. Se lo slicer ha larghezze di perimetro esterno ed interno separate, mantienile uguali per la parete in ottimizzazione a meno che tu non capisca come lo slicer le combina.',
    },
    {
      type: 'paragraph',
      html: 'Dopo aver modificato le impostazioni dello slicer, ritaglia e ispeziona la stessa parete in anteprima. L\'anteprima visiva dovrebbe mostrare il numero previsto di cordoni che riempiono l\'involucro CAD senza un canale stretto residuo. Poi stampa un piccolo coupon di prova che includa lo stesso spessore di parete e misuralo dopo il raffreddamento. Se il coupon è sistematicamente fuori ma l\'anteprima è corretta, regola il flusso o l\'espansione orizzontale separatamente; non usare il numero di perimetri per compensare un errore di calibrazione.',
    },
    {
      type: 'card',
      title: 'Flusso di lavoro per tolleranze meccaniche',
      html: 'Usa quest\'ordine per parti funzionali: scegli ugello, scegli larghezza di linea sicura, modella multipli di parete, taglia senza spazi interni, stampa un coupon, misura la parete reale, poi regola il flusso o la compensazione dimensionale. Saltare il passo geometrico fa sì che la calibrazione insegua un bersaglio mobile.',
    },
    {
      type: 'table',
      headers: ['Concetto dello slicer', 'Nome campo tipico', 'Cosa inserire'],
      rows: [
        ['Conteggio anelli', 'Conteggio linee parete / Perimetri', 'Numero intero di perimetri consigliato'],
        ['Larghezza cordone estrusione', 'Larghezza linea / Larghezza estrusione', 'Larghezza linea consigliata o regolata'],
        ['Percorsi di riparazione sottili', 'Gap fill / Riempi spazi tra pareti', 'Evitare di fare affidamento per pareti strutturali'],
        ['Correzione dimensionale', 'Espansione orizzontale / Compensazione XY', 'Regola solo dopo che il calcolo parete è pulito'],
      ],
    },
    { type: 'title', text: 'Casi speciali: pareti sottili, nervature, bossoli e caratteristiche di tolleranza', level: 2 },
    {
      type: 'paragraph',
      html: 'Le pareti sottili al di sotto del diametro dell\'ugello non sono pareti di perimetro normali. Gli slicer possono stamparle con rilevamento parete sottile, linee di estrusione singole o larghezza di linea variabile, ma il risultato è di solito cosmetico o leggermente caricato. Per una nervatura strutturale, progetta la nervatura abbastanza spessa per almeno due linee stabili o accetta che si comporti come una rete flessibile. Per i bossoli per viti, usa abbastanza perimetri in modo che il carico della vite viaggi attraverso anelli continui piuttosto che un anello riempito di gap fill.',
    },
    {
      type: 'paragraph',
      html: 'Le caratteristiche di tolleranza necessitano di cura extra perché la correzione della parete può interagire con la dimensione del foro e l\'accoppiamento. Se una clip o uno scatto è progettato come parete di 0,9 mm e il profilo usa linee da 0,45 mm, due perimetri sono puliti. Se la stessa clip misura 1,0 mm, lo slicer può aggiungere un piccolo percorso centrale che cambia rigidità e accoppiamento. Una parete matematicamente più pulita spesso rende le caratteristiche a molla più ripetibili perché ogni copia usa lo stesso numero di cordoni continui.',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Non forzare geometria sottile impossibile',
      html: 'Se la parete CAD è al di sotto del diametro dell\'ugello, la soluzione corretta è di solito un ugello più piccolo, una caratteristica più spessa o un metodo di fabbricazione diverso. Forzare un ugello largo in una parete sotto-ugello crea una forma di cordone imprevedibile.',
    },
    {
      type: 'list',
      items: [
        'Usa almeno due linee pulite per nervature che sopportano carico di flessione.',
        'Usa tre o più perimetri attorno ai bossoli per viti quando lo spazio lo permette.',
        'Evita canali residui nelle clip perché diventano iniziatori di cricche.',
        'Valida gli accoppiamenti a pressione con la stessa larghezza di linea usata nella parte finale.',
      ],
    },
  ],
  faq: [
    {
      question: 'Quanti perimetri dovrebbe usare una parete da 1,2 mm con un ugello da 0,4 mm?',
      answer: 'Di solito tre perimetri. Con una larghezza di linea di 0,40 mm, tre perimetri equivalgono esattamente a 1,20 mm. Con una larghezza di linea di 0,42 mm, lo spessore reale è di 1,26 mm.',
    },
    {
      question: 'Perché il calcolatore limita la larghezza di linea all\'80-120% del diametro ugello?',
      answer: 'Questo intervallo mantiene le raccomandazioni in una zona stampabile conservativa. Valori più larghi o più stretti possono funzionare in casi speciali, ma sono meno affidabili per la pianificazione di pareti meccaniche.',
    },
    {
      question: 'Dovrei cambiare lo spessore CAD o la larghezza di linea dello slicer?',
      answer: 'Se la regolazione è piccola e dentro l\'intervallo sicuro, cambiare la larghezza di linea è rapido. Per parti di produzione ripetuta, modificare il CAD in multipli puliti è di solito più manutenibile.',
    },
    {
      question: 'Un verdetto esatto garantisce che la parte stampata misurerà esatta?',
      answer: 'No. Significa che la geometria dello slicer chiude pulitamente. La calibrazione del flusso, il ritiro del materiale, la temperatura e la compensazione XY influenzano ancora la misurazione fisica.',
    },
    {
      question: 'Cosa devo fare quando il risultato è impossibile?',
      answer: 'Usa un ugello più piccolo, riprogetta lo spessore di parete come multiplo di una larghezza di linea sicura, o accetta che la caratteristica sarà un percorso di parete sottile non strutturale.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Inserisci diametro ugello', text: 'Scegli una dimensione di ugello comune o digita il diametro misurato dell\'ugello.' },
    { name: 'Imposta larghezza linea', text: 'Inserisci la larghezza di linea parete dello slicer; lo strumento la vincola a un intervallo sicuro di ugello.' },
    { name: 'Inserisci spessore parete CAD', text: 'Usa lo spessore di parete progettato dal modello.' },
    { name: 'Copia impostazioni slicer', text: 'Applica il numero di perimetri consigliato e la larghezza di linea regolata se necessario.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Ottimizzatore di Perimetri e Pareti',
      description: 'Calcola il numero di perimetri FDM e una larghezza di linea sicura per uno spessore di parete CAD esatto.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Quanti perimetri dovrebbe usare una parete da 1,2 mm con un ugello da 0,4 mm?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Di solito tre perimetri. Con una larghezza di linea di 0,40 mm, tre perimetri equivalgono esattamente a 1,20 mm.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Come ottimizzare lo spessore di parete FDM per perimetri interi',
      step: [
        { '@type': 'HowToStep', text: 'Inserisci il diametro dell\'ugello.' },
        { '@type': 'HowToStep', text: 'Inserisci la larghezza di linea dello slicer.' },
        { '@type': 'HowToStep', text: 'Inserisci lo spessore di parete CAD.' },
        { '@type': 'HowToStep', text: 'Applica i perimetri e la larghezza di linea consigliati.' },
      ],
    },
  ],
};
