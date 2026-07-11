import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { WallPerimeterOptimizerUI } from '../ui';

export const content: ToolLocaleContent<WallPerimeterOptimizerUI> = {
  slug: 'vagg-perimeteroptimerare',
  title: 'Vägg och Perimeteroptimerare',
  description: 'Beräkna exakt antal perimetrar och en säker linjebredd så att den utskrivna väggtjockleken matchar CAD-modellen utan interna mellanrum.',
  ui: {
    controlsAriaLabel: 'Indata för vägg-perimeteroptimeraren',
    resultsAriaLabel: 'Resultat från vägg-perimeteroptimeraren',
    unitSystemLabel: 'Enheter',
    metricLabel: 'Metriska',
    imperialLabel: 'US',
    tooltipLabel: 'Mer information',
    nozzleLabel: 'Munstyckesdiameter',
    nozzleHelp: 'Fysisk munstyckesöppningsdiameter. Säker linjebredd är begränsad till 80-120% av detta värde.',
    lineWidthLabel: 'Linjebredd',
    lineWidthHelp: 'Slicerns extruderingsbredd för yttre och inre väggar.',
    cadThicknessLabel: 'CAD-väggtjocklek',
    cadThicknessHelp: 'Konstruerad väggtjocklek som ska återges med hela perimetrar.',
    commonNozzlesLabel: 'Vanliga munstycksstorlekar',
    infillStrategyLabel: 'Väggfyllnadsstrategi',
    perimeterFirstLabel: 'Perimetrar först',
    solidInfillFallbackLabel: 'Massiv infill som reserv',
    solidInfillTip: 'Tips: om du föredrar att inte lägga till fler perimetrar, använd massiv infill eller pålitlig gap fill i tunna väggar så att slicern inte lämnar inre hålrum.',
    copySolidInfillNote: 'Om du behåller färre perimetrar, använd massiv infill eller verifierad gap fill för tunna väggars interiörer.',
    visualLabel: 'Tvärsnitt som visar perimetrar packade innanför CAD-väggtjockleken',
    cadEnvelopeLabel: 'CAD-väggens omfång',
    lineLabel: 'Extruderingslinje',
    recommendedPerimetersLabel: 'Rekommenderade perimetrar',
    realThicknessLabel: 'Verklig tjocklek',
    residualLabel: 'Restfel',
    verdictLabel: 'Precisionsdom',
    exactLabel: 'Exakt',
    adjustLabel: 'Kräver justering av linjebredd',
    impossibleLabel: 'Omöjligt med detta munstycke',
    adjustedWidthLabel: 'Justerad linjebredd',
    noAdjustmentLabel: 'Ingen justering',
    slicerBlockLabel: 'Slicerkonfiguration',
    perimetersUnitLabel: 'perimetrar',
    copyLabel: 'Kopiera inställningar',
    copiedLabel: 'Slicerblock kopierat.',
    safeRangeLabel: 'Säkert linjebreddsintervall',
    compareLabel: 'Närmaste perimeteralternativ',
    perimetersColumn: 'Perimetrar',
    lineWidthColumn: 'Linjebredd',
    realThicknessColumn: 'Verklig tjocklek',
    errorColumn: 'Fel',
    messageExact: 'Den valda linjebredden ligger inom 0,05 mm från CAD-väggen. Detta är en bra vägg som endast består av perimetrar.',
    messageAdjust: 'Den aktuella bredden lämnar ett mätbart mellanrum. Använd den justerade linjebredden för att stänga väggen exakt med hela perimetrar.',
    messageTooThin: 'CAD-väggen är tunnare än munstyckesdiametern. Omkonstruera väggen, använd ett mindre munstycke eller acceptera ett icke-strukturellt enkellinjeelement.',
    messageOutsideRange: 'Ingen justering inom det säkra intervallet 80-120% av munstyckesdiametern kan stänga denna vägg exakt. Omkonstruera CAD-väggen eller ändra munstyckesstorlek.',
    mmUnit: 'mm',
    inchUnit: 'tum',
  },
  seo: [
    { type: 'title', text: 'Varför väggtjocklek måste matcha hela perimetrar', level: 2 },
    {
      type: 'paragraph',
      html: 'FDM-slicers bygger en vägg från diskreta extruderingsbanor. En CAD-vägg på 1,20 mm är inte en kontinuerlig solid instruktion; den blir en, två, tre eller fler perimetrar beroende på linjebredd, munstyckesdiameter och slicerregler. Om matematiken inte går jämnt ut måste slicern välja mellan att lämna ett smalt inre mellanrum, infoga en tunn gap-fill-bana, överextrudera en region eller tyst ändra verktygsbaneordningen. Funktionella delar lider eftersom väggen som såg solid ut i CAD kan innehålla en svag söm eller en inkonsekvent sträng inuti sektionen.',
    },
    {
      type: 'paragraph',
      html: 'Den användbara ekvationen är enkel: <strong>verklig väggtjocklek = antal perimetrar × linjebredd</strong>. Svårigheten är att välja värden som förblir utskrivbara. En linjebredd kan vanligtvis röra sig lite under eller över munstyckesdiametern, men den kan inte vara godtycklig. Denna optimerare söker igenom heltalsantal perimetrar, mäter restfelet mot CAD-tjockleken och föreslår en justering av linjebredden endast när den exakta bredden håller sig inom ett konservativt intervall på 80-120% av munstyckesdiametern.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0,05 mm', label: 'precisionströskel som används för domen' },
        { value: '80-120%', label: 'säkert linjebreddsband runt munstyckesdiameter' },
        { value: 'n × bredd', label: 'kärnekvation för väggtjocklek' },
        { value: '2 decimaler', label: 'minsta praktiska slicerprecision' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Perimetrar är heltalsgeometri',
      html: 'En slicer kan inte skriva ut 2,6 normala perimetrar. Om en vägg är för bred för två linjer och för smal för tre behöver den gap-fill-beteende eller en korrigerad CAD-dimension.',
    },
    { type: 'title', text: 'Hur man väljer CAD-väggtjocklek för ett 0,4 mm munstycke', level: 2 },
    {
      type: 'paragraph',
      html: 'Ett 0,4 mm munstycke använder vanligtvis en linjebredd runt 0,40-0,48 mm. Med en linjebredd på 0,42 mm ger två perimetrar 0,84 mm, tre perimetrar 1,26 mm och fyra perimetrar 1,68 mm. En konstruerad vägg på 1,20 mm ser rimlig ut i CAD, men den är 0,06 mm från tre perimetrar på 0,42 mm. Det är nära, men inte exakt. Optimeraren kan föreslå 3 perimetrar vid 0,40 mm, vilket stänger väggen perfekt och förblir exakt vid munstyckesdiametern.',
    },
    {
      type: 'paragraph',
      html: 'För mekaniska delar är det ofta bättre att konstruera väggar som multiplar av den avsedda linjebredden istället för att tvinga slicern att reparera dem. Vanliga CAD-väggmål för ett 0,4 mm munstycke är runt 0,8 mm för lätta skal, 1,2 mm för normala funktionella väggar, 1,6 mm för starkare höljen och 2,0 mm eller mer för lastbärande egenskaper. De exakta värdena bör följa slicerns linjebredd, inte bara den nominella munstyckesdiametern.',
    },
    {
      type: 'table',
      headers: ['Munstycke', 'Säkert linjebreddsintervall', 'Bra 2-väggsmål', 'Bra 3-väggsmål'],
      rows: [
        ['0,2 mm', '0,16-0,24 mm', '0,32-0,48 mm', '0,48-0,72 mm'],
        ['0,4 mm', '0,32-0,48 mm', '0,64-0,96 mm', '0,96-1,44 mm'],
        ['0,6 mm', '0,48-0,72 mm', '0,96-1,44 mm', '1,44-2,16 mm'],
        ['0,8 mm', '0,64-0,96 mm', '1,28-1,92 mm', '1,92-2,88 mm'],
      ],
    },
    {
      type: 'tip',
      title: 'Konstruera från slicerprofilen baklänges',
      html: 'Innan du modellerar snäppfästen, ribbor, bossar eller höljesväggar, bestäm munstycke och linjebredd. Ställ sedan in väggdimensionerna som rena multiplar så att slicern inte hittar på gap-fill-banor i kritiska områden.',
    },
    { type: 'title', text: 'Linjebreddsgränser: varför 80 till 120 procent är ett säkert band', level: 2 },
    {
      type: 'paragraph',
      html: 'Ett munstycke kan lägga en sträng något bredare än sin öppning eftersom plast pressas mot föregående lager och plattas till till en oval bana. Det kan också skriva ut en något smalare linje, men för smal ber skrivaren att skapa en kontrollerad sträng med begränsat lateralt stöd. Båda extremvärden har avvägningar. Mycket breda linjer kan övertrycka hotend, smeta ut hörn, dölja små detaljer och minska dimensionsnoggrannheten. Mycket smala linjer kan underfylla väggar, försvaga bindning och göra extruderingskonsistensen mer känslig för pressure advance och filamentdiameter.',
    },
    {
      type: 'paragraph',
      html: 'Intervallet 80-120% som används här är avsiktligt konservativt. Många slicers tillåter bredare värden för speciallägen, vasutskrift eller grova munstycken, och erfarna användare kan gå utanför detta intervall efter testning. Detta verktyg är inriktat på tillförlitlig mekanisk väggplanering, där rekommendationen bör vara tillräckligt säker för att kopiera in i en normal profil utan att orsaka uppenbar under- eller överextrudering. Om en exakt matchning kräver en linjebredd utanför intervallet rapporterar verktyget designen som opraktisk istället för att låtsas att slicern kan lösa det rent.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: 'För smal', description: 'Strängen trycker kanske inte in tillräckligt med material i väggsektionen.', points: ['Svag bindning mellan linjer', 'Synliga mellanrum', 'Sköra tunna väggar'] },
        { title: 'Säkert intervall', description: 'Strängen håller sig nära fysiskt munstyckesbeteende.', highlight: true, points: ['Förutsägbar extrudering', 'Bra dimensionskontroll', 'Återanvändbara profiler'] },
        { title: 'För bred', description: 'Munstycket kan trycka mer plast än banan kan ta emot.', points: ['Bubbliga hörn', 'Ytribbor', 'Högre mottryck'] },
      ],
    },
    {
      type: 'message',
      title: 'Säkert betyder inte kalibrerat',
      html: 'Även en matematiskt perfekt bredd behöver en kalibrerad flödeshastighet. Om extruderingsmultiplikatorn är fel kan den fysiska väggen fortfarande mäta tjock eller tunn med tjocklek.',
    },
    { type: 'title', text: 'Diagnostisera inre väggmellanrum i slicerförhandsgranskningen', level: 2 },
    {
      type: 'paragraph',
      html: 'Det snabbaste sättet att identifiera en perimetermismatch är att inspektera förhandsgranskningen lager för lager. Leta efter en blek strimma mellan yttre och inre väggar, en enda vandrande gap-fill-linje eller ett område där slicern växlar mellan två och tre linjer längs samma egenskap. Dessa mönster är vanliga i höljesväggar, bossar, clips och tunna ribbor eftersom CAD-dimensionen ofta väljs visuellt snarare än som en multipel av extruderingsbredden.',
    },
    {
      type: 'paragraph',
      html: 'Ett väggmellanrum är inte alltid synligt på utsidan av utskriften. Delen kan se ren ut medan insidan innehåller en smal tomrum som minskar styvheten. Detta spelar roll för skruvbossar, presspassningsstift, fästen, dronramar, kugghjul och alla delar där lasten går genom väggen. Om mellanrummet sitter mellan perimetrar kan väggen spricka lättare eftersom lastbanan korsar svagt bundet eller saknat material istället för kontinuerliga banor.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Gap fill är en reparation, inte en väggplan',
      html: 'Moderna slicers kan infoga tunna gap-fill-banor, men de banorna skrivs ofta ut med annan hastighet, flöde och kylningsbeteende. För lastbärande geometri är en ren multipel av perimetrar mer förutsägbar.',
    },
    {
      type: 'summary',
      title: 'Checklista för förhandsgranskning',
      items: [
        'Växla till linjetyps- eller egenskapsförhandsgranskning, inte bara enfärgad förhandsgranskning.',
        'Inspektera väggar vid hål, ribbor, bossar och tunna flikar.',
        'Kontrollera om gap-fill-banor visas i strukturella regioner.',
        'Jämför CAD-väggtjockleken med hela multiplar av linjebredden.',
        'Använd justerad linjebredd endast när den håller sig inom munstyckets säkra intervall.',
      ],
    },
    { type: 'title', text: 'När resultatet är exakt, kräver justering eller är omöjligt', level: 2 },
    {
      type: 'paragraph',
      html: 'Domen använder en resttröskel på 0,05 mm eftersom de flesta desktop-FDM-system har praktisk variation från flöde, filamentdiameter, termisk expansion, rörelsekalibrering och mätteknik. Om de aktuella inställningarna hamnar inom det bandet kallar verktyget resultatet exakt. Det betyder inte att varje utskrivet prov kommer att mäta perfekt till mikron; det betyder att slicergeometrin i sig är tillräckligt nära inriktad att kvarvarande fel sannolikt är kalibrering eller materialbeteende snarare än perimeteraritmetik.',
    },
    {
      type: 'paragraph',
      html: 'Kräver justering betyder att den aktuella linjebredden lämnar ett större restfel, men samma antal perimetrar kan stänga väggen med en säker bredd. Till exempel ger en 1,20 mm vägg vid 0,42 mm linjebredd tre linjer på 1,26 mm. Justering till 0,40 mm gör tre linjer exakt 1,20 mm. Omöjligt betyder att väggen är tunnare än munstyckesdiametern eller att den exakta linjebredden som behövs skulle hamna utanför det säkra munstyckesbandet. I så fall är det bättre att omkonstruera väggen eller byta munstyckesstorlek än att tvinga slicern.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Perimeter', definition: 'En väggögla som genereras av slicern runt konturen av ett lager.' },
        { term: 'Linjebredd', definition: 'Den beordrade bredden av en extruderad bana, ibland kallad extruderingsbredd.' },
        { term: 'Restfel', definition: 'Den absoluta skillnaden mellan CAD-väggtjocklek och tjockleken som produceras av hela perimetrar.' },
        { term: 'Gap fill', definition: 'En slicer-genererad bana som används för att fylla utrymme som normala perimetrar inte fyller rent.' },
      ],
    },
    {
      type: 'proscons',
      title: 'Justera linjebredd versus redigera CAD',
      items: [
        { pro: 'Justering av linjebredd är snabb och kan bevara modellfilen.', con: 'Det påverkar varje vägg som använder profilen om den inte avgränsas noggrant.' },
        { pro: 'CAD-redigering gör designavsikten explicit för framtida utskrifter.', con: 'Det tar längre tid när många egenskaper redan är begränsade.' },
        { pro: 'Att byta munstyckesstorlek kan rädda mycket tunna eller mycket tjocka väggar.', con: 'Det ändrar detaljupplösning, utskriftstid och extruderingsvolym.' },
      ],
    },
    { type: 'title', text: 'Tillämpa resultatet i Cura, PrusaSlicer och liknande slicers', level: 2 },
    {
      type: 'paragraph',
      html: 'Kopieringsblocket innehåller avsiktligt bara de två värden som spelar roll: antal perimetrar och linjebredd. I Cura mappas antalet perimetrar till vägglinjeantal, och linjebredd mappas till vägglinjebredd eller global linjebredd beroende på profilstruktur. I PrusaSlicer och derivat, använd perimeters för ögleantal och extrusion width för linjebredd. Om slicern har separata yttre och inre perimeterbredder, håll dem lika för väggen som optimeras om du inte förstår hur slicern kombinerar dem.',
    },
    {
      type: 'paragraph',
      html: 'Efter att ha ändrat slicerinställningar, skiva om och inspektera samma vägg i förhandsgranskningen. Den visuella förhandsgranskningen bör visa det förväntade antalet banor som fyller CAD-omfånget utan en smal kvarvarande kanal. Skriv sedan ut en liten testkupong som inkluderar samma väggtjocklek och mät den efter kylning. Om kupongen konsekvent är fel men förhandsgranskningen är korrekt, justera flöde eller horisontell expansion separat; använd inte antal perimetrar för att kompensera för ett kalibreringsfel.',
    },
    {
      type: 'card',
      title: 'Mekaniskt toleransarbetsflöde',
      html: 'Använd denna ordning för funktionella delar: välj munstycke, välj säker linjebredd, modellera väggmultipler, skiva utan inre mellanrum, skriv ut en kupong, mät verklig vägg, justera sedan flöde eller dimensionskompensation. Att hoppa över geometristeget får kalibreringen att jaga ett rörligt mål.',
    },
    {
      type: 'table',
      headers: ['Slicerkoncept', 'Typiskt fältnamn', 'Vad du ska ange'],
      rows: [
        ['Ögleantal', 'Vägglinjeantal / Perimetrar', 'Rekommenderat heltalsperimeterantal'],
        ['Extruderingsbanbredd', 'Linjebredd / Extruderingsbredd', 'Rekommenderad eller justerad linjebredd'],
        ['Tunna reparationsbanor', 'Gap fill / Fyll mellanrum mellan väggar', 'Undvik att förlita dig på det för strukturella väggar'],
        ['Dimensionskorrigering', 'Horisontell expansion / XY-kompensation', 'Justera först efter att väggmatematiken är ren'],
      ],
    },
    { type: 'title', text: 'Specialfall: tunna väggar, ribbor, bossar och tolerategenskaper', level: 2 },
    {
      type: 'paragraph',
      html: 'Tunna väggar under munstyckesdiameter är inte normala perimeterväggar. Slicers kan skriva ut dem med tunnväggsdetektering, enstaka extruderingslinjer eller variabel linjebredd, men resultatet är vanligtvis kosmetiskt eller lätt belastat. För en strukturell ribba, konstruera ribban tillräckligt tjock för minst två stabila linjer eller acceptera att den beter sig som ett flexibelt nät. För skruvbossar, använd tillräckligt med perimetrar så att skruvbelastningen går genom kontinuerliga öglor snarare än en gap-fill-fylld ring.',
    },
    {
      type: 'paragraph',
      html: 'Toleransegenskaper behöver extra omsorg eftersom väggkorrigering kan interagera med hålstorlek och passform. Om en clip eller snäppfunktion är konstruerad som en 0,9 mm vägg och profilen använder 0,45 mm linjer, är två perimetrar rena. Om samma clip är 1,0 mm kan slicern lägga till en liten mittbana som ändrar styvhet och passform. En matematiskt renare vägg gör ofta fjäderegenskaper mer repeterbara eftersom varje kopia använder samma antal kontinuerliga banor.',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Tvinga inte omöjlig tunn geometri',
      html: 'Om CAD-väggen är under munstyckesdiameter är den korrekta lösningen vanligtvis ett mindre munstycke, en tjockare egenskap eller en annan tillverkningsmetod. Att tvinga ett brett munstycke in i en sub-munstyckesvägg skapar oförutsägbar strängform.',
    },
    {
      type: 'list',
      items: [
        'Använd minst två rena linjer för ribbor som bär böjbelastning.',
        'Använd tre eller fler perimetrar runt skruvbossar när utrymmet tillåter.',
        'Undvik kvarvarande kanaler i clips eftersom de blir sprickstartare.',
        'Validera presspassningar med samma linjebredd som används i slutdelen.',
      ],
    },
  ],
  faq: [
    {
      question: 'Hur många perimetrar ska en 1,2 mm vägg använda med ett 0,4 mm munstycke?',
      answer: 'Vanligtvis tre perimetrar. Med en linjebredd på 0,40 mm motsvarar tre perimetrar exakt 1,20 mm. Med en linjebredd på 0,42 mm är den verkliga tjockleken 1,26 mm.',
    },
    {
      question: 'Varför begränsar kalkylatorn linjebredd till 80-120% av munstyckesdiametern?',
      answer: 'Det intervallet håller rekommendationerna i en konservativ utskrivbar zon. Bredare eller smalare värden kan fungera i speciella fall, men de är mindre tillförlitliga för mekanisk väggplanering.',
    },
    {
      question: 'Ska jag ändra CAD-tjocklek eller slicerns linjebredd?',
      answer: 'Om justeringen är liten och inom det säkra intervallet är det snabbt att ändra linjebredd. För upprepade produktionsdelar är CAD-redigering till rena multiplar vanligtvis mer underhållbart.',
    },
    {
      question: 'Garantierar en exakt dom att den utskrivna delen kommer att mäta exakt?',
      answer: 'Nej. Det betyder att slicergeometrin stänger rent. Flödeskalibrering, materialkrympning, temperatur och XY-kompensation påverkar fortfarande den fysiska mätningen.',
    },
    {
      question: 'Vad ska jag göra när resultatet är omöjligt?',
      answer: 'Använd ett mindre munstycke, omkonstruera väggtjockleken som en multipel av en säker linjebredd, eller acceptera att egenskapen blir en icke-strukturell tunnväggsbana.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Ange munstyckesdiameter', text: 'Välj en vanlig munstyckesstorlek eller skriv den uppmätta munstyckesdiametern.' },
    { name: 'Ställ in linjebredd', text: 'Ange slicerns vägglinjebredd; verktyget begränsar den till ett säkert munstyckesintervall.' },
    { name: 'Ange CAD-väggtjocklek', text: 'Använd den konstruerade väggtjockleken från modellen.' },
    { name: 'Kopiera slicerinställningar', text: 'Tillämpa det rekommenderade antalet perimetrar och justerad linjebredd om det behövs.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Vägg och Perimeteroptimerare',
      description: 'Beräkna FDM-perimeterantal och säker linjebredd för exakt CAD-väggtjocklek.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Hur många perimetrar ska en 1,2 mm vägg använda med ett 0,4 mm munstycke?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Vanligtvis tre perimetrar. Med en linjebredd på 0,40 mm motsvarar tre perimetrar exakt 1,20 mm.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Hur du optimerar FDM-väggtjocklek för hela perimetrar',
      step: [
        { '@type': 'HowToStep', text: 'Ange munstyckesdiametern.' },
        { '@type': 'HowToStep', text: 'Ange slicerns linjebredd.' },
        { '@type': 'HowToStep', text: 'Ange CAD-väggtjockleken.' },
        { '@type': 'HowToStep', text: 'Tillämpa de rekommenderade perimetrarna och linjebredden.' },
      ],
    },
  ],
};
