import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PostProcessingCostCalculatorUI } from '../ui';

const slug = 'kostnadskalkylator-efterbehandling-3d-skrivare';
const title = 'Kostnadskalkylator för efterbehandling av 3D utskrifter';
const description =
  'Beräkna kostnaderna för manuell ytfinish, borttagning av stöd, slipning, målning, övrigt manuellt arbete, förbrukningsmaterial och valutaanpassade efterbehandlingskostnader för 3D-utskrivna detaljer.';

const faqData = [
  {
    question: 'Hur beräknar man efterbehandlingskostnaderna för 3D-utskrifter?',
    answer:
      'Summera alla minuter manuell ytfinish, multiplicera summan med timlönen dividerat med 60 och lägg sedan till förbrukningsmaterialet. Den här kalkylatorn visar också kostnadsandelen för varje finishfas.',
  },
  {
    question: 'Ska förbrukningsmaterial inkluderas i kostnaden för manuell ytfinish?',
    answer:
      'Ja. Sandpapper, fyllgrundning, färg, handskar, maskeringstejp, IPA, rengöringsvätska för resin, trasor och slitage på småverktyg kan vara tillräckligt stora för att förändra offerten för en färdigbearbetad detalj.',
  },
  {
    question: 'Ändrar valutaomvandlingen kostnadsformeln?',
    answer:
      'Nej. Valutan ändrar bara den visade monetära skalan. Arbetsformeln förblir: minuter multiplicerat med timlönen dividerat med 60 plus förbrukningsmaterial.',
  },
  {
    question: 'Vilken timkostnad ska jag använda för arbete inom 3D-utskrift?',
    answer:
      'Använd verkstadens fullt belagda timkostnad, inte bara nettolönen. Ta med löner, sociala avgifter, betald ej fakturerbar tid, tillsyn och den kvalifikationsnivå som krävs för kosmetisk ytfinish.',
  },
];

const howToData = [
  { name: 'Ange minuter för ytfinish', text: 'Lägg till borttagning av stöd, slipning, målning och annan manuell tid i minuter.' },
  { name: 'Ange timkostnad och förbrukningsmaterial', text: 'Ange din timkostnad för ytfinish och den direkta kostnaden för förbrukningsmaterial i vald valuta.' },
  { name: 'Välj valuta och faktor', text: 'Använd valutaväljaren för symboler och den valfria omräkningsfaktorn för offertjusteringar.' },
  { name: 'Kopiera resultatet', text: 'Använd kopieringsknappen för att klistra in total, arbete, förbrukningsmaterial och minuter i en offert.' },
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
    'kostnadskalkylator efterbehandling 3D-utskrift',
    'arbetskosnadsuppskattning 3D-utskrift',
    'manuell ytfinishkostnad 3D-utskrift',
    'timkostnadskalkylator efterbehandling',
  ],
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<PostProcessingCostCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Indata för efterbehandlingskostnad',
    resultsAriaLabel: 'Resultat för efterbehandlingskostnad',
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
    supportLabel: 'Borttagning av stöd',
    sandingLabel: 'Slipning',
    paintingLabel: 'Målning',
    otherLabel: 'Övrigt arbete',
    hourlyRateLabel: 'Timkostnad',
    consumablesLabel: 'Förbrukningsmaterial',
    conversionFactorLabel: 'Omräkningsfaktor',
    conversionFactorUnit: 'x',
    conversionHint: 'Lämna på 1 om kostnaden redan är angiven i lokal valuta; ändra den för att tillämpa en global offertmultiplikator.',
    minutesUnit: 'min',
    hourUnit: 'h',
    rateUnitSeparator: '/',
    totalLabel: 'Efterbehandling totalt',
    laborLabel: 'Arbete',
    consumablesBreakdownLabel: 'Förbrukningsmaterial',
    timeLabel: 'Manuell tid',
    effectiveRateLabel: 'Effektiv kostnad',
    breakdownLabel: 'Kostnadsandel per finishfas',
    copyLabel: 'Kopiera resultat',
    copiedLabel: 'Kopierat',
    copyTemplate: 'Efterbehandlingskostnad: {total} ({minutes}; arbete {labor}; förbrukningsmaterial {consumables})',
    pendingLabel: '-',
    currencySymbol: '€',
  },
  seo: [
    { type: 'title', text: 'Vad den här kostnadskalkylatorn för efterbehandling av 3D-utskrifter mäter', level: 2 },
    {
      type: 'paragraph',
      html: 'En <strong>kostnadskalkylator för efterbehandling av 3D-utskrifter</strong> ska besvara en praktisk offertfråga: hur mycket pengar förbrukas efter att skrivaren stannar? Den utskrivna detaljen kan redan ha en kostnad för maskintid och material, men många betalda jobb avgörs vid borttagning av stöd, slipning, fyllning, grundning, målning, rengöring, maskering, inspektion och omarbetning. Den här kalkylatorn delar upp dessa manuella finishuppgifter i minuter, multiplicerar dem med en timkostnad för efterbehandling och lägger till direkt förbrukningsmaterial så att det slutliga värdet kan klistras in i en offert.',
    },
    {
      type: 'paragraph',
      html: 'Basformeln är avsiktligt transparent: <code>((stöd + slipning + målning + övriga minuter) x (timkostnad / 60)) + förbrukningsmaterial</code>. Den valfria omräkningsfaktorn multiplicerar timkostnaden och förbrukningsmaterialet när en verkstad vill skala värden för valutaomvandling, regionala prislistor, underentreprenörsmarkup eller en tillfällig justering. Om användaren anger en lokal arbetskostnad direkt ska faktorn stanna på <code>1</code> och resultatet förblir oberoende av valutakursantaganden.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'min x kostnad/60', label: 'Formel för arbetskostnad', icon: 'mdi:clock-outline' },
        { value: '5 faser', label: 'Stöd, slipning, målning, övrigt, förbrukningsmaterial', icon: 'mdi:chart-bar-stacked' },
        { value: '1x', label: 'Standard omräkningsfaktor', icon: 'mdi:swap-horizontal' },
        { value: 'Live', label: 'Ingen beräkningsknapp behövs', icon: 'mdi:flash-outline' },
      ],
    },
    {
      type: 'tip',
      title: 'Prissätt personen, inte skrivaren',
      html: '<p>Efterbehandling styrs oftast av arbetsinsatsen. En långsam utskrift kan vara billig att bearbeta, medan en liten kosmetisk detalj med stöd på synliga ytor kan kräva dyr och kvalificerad hantering. Behandla <strong>arbetskosnadsuppskattningen för 3D-utskrift</strong> som en egen rad i stället för att dölja den i materialpåslaget.</p>',
    },
    { type: 'title', text: 'Borttagning av stöd: den första manuella kostnadsdrivaren', level: 2 },
    {
      type: 'paragraph',
      html: 'Borttagning av stöd är inte bara den tid som behövs för att dra plastik från en modell. Det kan inkludera skärning, uppvärmning, upplösning, sköljning, skrapning, klippning av stödrester, skydd av ömtåliga element och kontroll av om stödärr kräver extra ytarbete. FDM-trädstöd, täta interfacesskikt, SLA-stödspetsar och SLS-depowdering skapar alla olika arbetsprofiler. För en tillförlitlig uppskattning av <strong>manuell ytfinishkostnad vid 3D-utskrift</strong> bör borttagningstiden mätas på jämförbara jobb i stället för att uppskattas utifrån utskriftstiden.',
    },
    {
      type: 'table',
      headers: ['Stödsituation', 'Typiskt tidsbeteende', 'Offertnotering'],
      rows: [
        ['Lättborttagbara stöd', 'Kort, förutsägbar borttagning', 'Ofta lämpligt med en fast minutersättning per detalj.'],
        ['Tätt stödgränssnitt', 'Längre klippning och ytrengöring', 'Lägg till slipminuter separat så att kostnadsdrivaren förblir synlig.'],
        ['Resinminiatyrer eller ömtåliga modeller', 'Långsam klippning för att undvika skador', 'Använd en högre timkostnad om kvalificerat handarbete krävs.'],
        ['Lösligt stöd', 'Mindre manuell skärning men mer processtid', 'Ta med lösningshantering och torkning om operatören är involverad.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Prissätt inte borttagning av stöd enbart utifrån stödvolymen i slicern',
      badge: 'Arbetsrisk',
      html: '<p>Stödvolymen kan vara liten medan åtkomsten är besvärlig. Ett litet stöd gömt inuti en smal funktion kan kosta mer arbete än ett stort externt stöd som lossnar rent.</p>',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Registrera borttagningstider för återkommande detaljtyfamiljer.',
        'Skilja borttagning från slipning så att stöddstrategibeslut är lättare att jämföra.',
        'Öka uppskattningen för ömtålig geometri, tunna pinnar, miniatyrer och kundriktade ytor.',
        'Använd samma valuta och timkostnadsbas som resten av offerten.',
      ],
    },
    { type: 'title', text: 'Slipning, spackling och ytförberedelse', level: 2 },
    {
      type: 'paragraph',
      html: 'Slipning är ofta den största dolda kostnaden i färdigbearbetade 3D-utskrifter eftersom den är iterativ. Operatören kan gå igenom grovslipning, spackel, härdnings- eller torktid, finslipning, punktkorrigering och inspektion under snedljus. Lagerhöjd, materialhårdhet, stödärr, önskat glansnivå och detaljgeometri påverkar alla mängden handarbete. En funktionell fästanordning kan behöva fem minuter; en utställningsprototyp kan behöva en timme innan färgen ens öppnas.',
    },
    {
      type: 'paragraph',
      html: 'Kalkylatorn behandlar slipning som minuter multiplicerat med timkostnaden för ytfinish eftersom processen begränsas av operatören snarare än maskinen. Förbrukningsmaterial som slipmedel, fyllgrundning, spackel, dammfria trasor och maskeringsmaterial hör till förbrukningsmaterialsfältet i stället för att gömmas i timkostnaden. Det håller <strong>kostnadsanalysen för 3D-printfinish</strong> läsbar: arbete visar tidspress, förbrukningsmaterial visar inköpta insatsvaror.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Funktionell finish',
          description: 'Skarpa kanter rensade, stöd borttagna och grova ärr reducerade tillräckligt för montering.',
          icon: 'mdi:wrench-outline',
          points: ['Minst sliptid', 'Minimalt förbrukningsmaterial', 'Inspektion fokuserad på passning'],
        },
        {
          title: 'Presentationsfinish',
          description: 'Synliga ytor jämnade, grundning använd selektivt och lagerlinjer reducerade för kundgranskning.',
          icon: 'mdi:eye-outline',
          highlight: true,
          points: ['Måttlig sliptid', 'Grundning och spackel troligt', 'Kosmetiska ytor driver arbetet'],
        },
        {
          title: 'Målningsklar finish',
          description: 'Progressiv slipning, spackling, maskering och defektkorrigering före färgskikt.',
          icon: 'mdi:spray',
          points: ['Högst manuell tid', 'Förbrukningsmaterial spelar roll', 'Omarbetningsmargin rekommenderas'],
        },
      ],
    },
    {
      type: 'message',
      title: 'Slipmedel är förbrukningsmaterial',
      ariaLabel: 'Notering om förbrukningsmaterial',
      html: '<p>Sandpapper, slipsvampar, nålfilar, spackel, handskar och trasor är inte gratis. Lägg till deras direkta kostnad när jobbet förbrukar en meningsfull andel av dem.</p>',
    },
    { type: 'title', text: 'Uppskattning av målnings- och beläggningskostnad', level: 2 },
    {
      type: 'paragraph',
      html: 'Målningsminuter ska inkludera operatörens aktiva tid: maskering, blandning, sprutning, penselmålning, retuschering, avmaskning, rengöring av arbetsområdet och inspektion. Passiv torkningstid eller härdningstid ska bara läggas till när den blockerar operatören eller upptar sällsynt kabinkapacitet som debiteras som arbete eller omkostnader. Denna distinktion förhindrar att en <strong>timkostnadskalkylator för efterbehandling</strong> förvandlar varje väntetimme till arbetskostnad när ingen aktivt arbetar med detaljen.',
    },
    {
      type: 'table',
      headers: ['Målningsuppgift', 'Registrera som arbete?', 'Registrera som förbrukningsmaterial?'],
      rows: [
        ['Maskering och avmaskning', 'Ja, aktiva minuter', 'Tejp, film, pluggar och schabloner'],
        ['Blandning av färg eller resinbeläggning', 'Ja, aktiva minuter', 'Färg, thinner, muggar, filter, handskar'],
        ['Sprutning eller penselmålning', 'Ja, aktiva minuter', 'Beläggningsmedel och rengöringslösningsmedel'],
        ['Torktid', 'Bara om den blockerar betalt arbete eller kabinkapacitet', 'Vanligtvis inget direkt material om inte värme eller lampor debiteras separat'],
      ],
    },
    {
      type: 'tip',
      title: 'Fakturera färgkomplexitet explicit',
      html: '<p>En enkel grundfärg och en tvåtonig maskerad finish kan ha liknande materialkostnad men mycket olika arbetskostnad. Använd minuterfältet för målning för att synliggöra skillnaden innan marginalen tillämpas.</p>',
    },
    {
      type: 'proscons',
      title: 'Fast finishbelopp kontra uppmätta finishminuter',
      items: [
        { pro: 'Ett fast belopp är snabbt för upprepade jobb med stabila finishkrav.', con: 'Det döljer vilken fas som konsumerar vinsten när ett jobb förändras.' },
        { pro: 'Uppmätta minuter gör uppskattningen granskningsbar och lätt att uppdatera.', con: 'De kräver att verkstaden spårar verklig fishetid för vanliga detaljtyper.' },
        { pro: 'Den visuella kostnadsstapeln gör kundorienterade offerter lättare att förklara internt.', con: 'Den ersätter inte bedömningen av kosmetisk risk och omarbetningssannolikhet.' },
      ],
    },
    { type: 'title', text: 'Förbrukningsmaterial och overhead för efterbehandling', level: 2 },
    {
      type: 'paragraph',
      html: 'Förbrukningsmaterial är direkt material som förbrukas under ytfinisharbetet. De kan inkludera sandpapper, grundning, spackel, färg, resintvättvätska, IPA, pappershanddukar, nitrilhandskar, blad, maskeringstejp, skyddsproppar, engångsmuggar, filter, polermedel och klarlack. Vissa verkstäder räknar in dem i overheadkostnaderna, men att kalkylera dem som ett direkt fält är säkrare för jobb med ovanliga finishkrav, stor yta, aggressiv slipning eller lösningsmedelsintensiva arbetsflöden.',
    },
    {
      type: 'paragraph',
      html: 'Ett separat förbrukningsmaterialsfält hjälper också med arbetsflöden för <strong>overheadkalkylator för efterbehandling</strong>. Overhead är normalt bredare än förbrukningsmaterial: hyra, frånluft, belysning, luftfiltrering, kompressoranvändning, underhåll, programvara, tillsyn och administrativ tid. Den här kalkylatorn anspråkar inte på att fördela varje overheadpost. I stället ger den en ren direktkostnads-delsumma som kan matas in i en större offertmodell där overhead och marginal sedan tillämpas.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Arbetstimkostnad', definition: 'Den timkostnad eller det säljpris som tilldelats aktiv manuell finishetid.' },
        { term: 'Förbrukningsmaterial', definition: 'Direkt material som förbrukas under efterbehandling, till exempel slipmedel, beläggningar, handskar och rengöringsvätskor.' },
        { term: 'Omräkningsfaktor', definition: 'En global multiplikator som tillämpas på monetära indata för valutaskalning eller offertjusteringar.' },
        { term: 'Direktkostnad', definition: 'En kostnad som kan kopplas till den specifika detalj eller batch som bearbetas.' },
        { term: 'Overhead', definition: 'Verksamhetskostnader som stödjer produktionen men inte förbrukas av en enda detalj i en enkel mätbar mängd.' },
      ],
    },
    {
      type: 'card',
      icon: 'mdi:receipt-text-outline',
      title: 'Var marginalen hör hemma',
      html: '<p>Det här verktyget beräknar finishkostnaden före vinst. Tillämpa marginalen efter att material, maskintid, efterbehandling, risk och overhead har sammansatts, annars kan arbetsintensiva jobb prissättas för lågt.</p>',
    },
    { type: 'title', text: 'Valutaval och omräkningsfaktor', level: 2 },
    {
      type: 'paragraph',
      html: 'Valutaval ändrar symbolen och kan omvandla befintliga monetära indata med hjälp av praktiska referensfaktorer. Beräkningen i sig är valutaneutral: en kostnad på 30 per timme och 10 i förbrukningsmaterial ger samma struktur oavsett om symbolen är euro, dollar, pund, yen eller en annan valuta som stöds. Det är användbart för internationella offerter eftersom matematiken förblir stabil medan presentationen matchar kundens eller verkstadens plats.',
    },
    {
      type: 'paragraph',
      html: 'Omräkningsfaktorn finns för fall där användaren inte vill ha automatisk valutakursomvandling eller behöver en anpassad kommersiell multiplikator. En faktor på <code>1</code> innebär att timkostnaden och förbrukningsmaterialet redan är angivna i den valda lokala valutan. En faktor på <code>1,15</code> ökar båda monetära indatan med femton procent. En faktor på <code>0,92</code> minskar dem med åtta procent. Eftersom faktorn påverkar pengar och inte minuter förblir den visuella fördelningen proportionell mot den justerade kostnaden.',
    },
    {
      type: 'summary',
      title: 'Valutaregler',
      items: [
        'Använd väljaren för symboler och bekväm skalning mellan vanliga valutor.',
        'Håll omräkningsfaktorn på 1 när indatan redan är i lokal valuta.',
        'Använd en anpassad faktor för regionala prislistor, underentreprenörsmarkup eller tillfälliga kommersiella justeringar.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Valutakurser är inte redovisningspolicy',
      badge: 'Prissättningsnotering',
      html: '<p>För officiella fakturor, skatter eller redovisningsrapporter, använd den valutakurs och avrundningspolicy som ditt företag kräver. Den här kalkylatorn är till för att uppskatta produktionskostnader och förbereda offerter.</p>',
    },
    { type: 'title', text: 'Använda den visuella fördelningen för att förbättra vinsten', level: 2 },
    {
      type: 'paragraph',
      html: 'Den proportionella stapeln är mer än dekoration. Den visar vilken finishfas som förbrukar pengar. Om slipning dominerar kan ändrad utskriftsorientering, lagerhöjd, stödgränssnitt eller material minska den manuella tiden. Om målning dominerar kan offerten behöva en separat finishnivå. Om förbrukningsmaterial dominerar kan bulkköp eller en annan beläggningsprocess ha större inverkan än arbetseffektivitet. Om borttagning av stöd dominerar kan omdesign av stödkontaktpunkter vara den mest värdefulla åtgärden.',
    },
    {
      type: 'list',
      icon: 'mdi:target',
      items: [
        'När borttagning av stöd är det största avsnittet, granska stödstil, stödtäthet, kontakt-Z-avstånd och orientering.',
        'När slipning är störst, granska lagerhöjd, sömpacering, fyllningsstrategi och om den offererade finishen är för hög för priset.',
        'När målning är störst, dela upp enfärgade, maskerade och premiumfinisher i separata offertnivåer.',
        'När förbrukningsmaterial är störst, kontrollera om beläggningar, resintvättvätska, slipmedel och maskeringsmaterial slösas bort eller underdebiteras.',
      ],
    },
    {
      type: 'table',
      headers: ['Dominerande kostnad', 'Trolig orsak', 'Prissättningsrespons'],
      rows: [
        ['Borttagning av stöd', 'Svår åtkomst, täta stöd, ömtåliga detaljer', 'Lägg till ett tillägg för stödkomplexitet eller revidera orienteringen.'],
        ['Slipning', 'Höga kosmetiska krav, synliga lager, stödärr', 'Skapa finishgrader och debitera för målningsklar förberedelse.'],
        ['Målning', 'Maskering, flera färger, kabinrengöring', 'Offerera målning som en separat servicerad.'],
        ['Förbrukningsmaterial', 'Beläggningar, slipmedel, lösningsmedel, skyddstillbehör', 'Använd direkt spårning av förbrukningsmaterial eller minimala materialkostnader.'],
      ],
    },
    {
      type: 'summary',
      title: 'Offertarbetsflöde',
      items: [
        'Mät aktiva manuella minuter per fas.',
        'Använd en fullt belagd timkostnad för ytfinish.',
        'Lägg till direkt förbrukningsmaterial separat.',
        'Kopiera det beräknade resultatet till offerten och tillämpa sedan overhead och marginal i den fullständiga prissättningsmodellen.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
