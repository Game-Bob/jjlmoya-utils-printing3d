import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MasterPricingMarginCalculatorUI } from '../ui';

const slug = '3d-print-pris-kalkylator';
const title = '3D print priskalkylator: Marginal, Pålägg och Marknadsposition';
const description =
  'Beräkna rekommenderat försäljningspris (PVP) för 3D-utskrifter baserat på tillverkningskostnad, marginalmål, pålägg (markup) och konkurrentpriser med strikt finansiell matematik.';

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
    question: 'Vad är skillnaden mellan marginal och pålägg (markup) i 3D-printing?',
    answer:
      'Marginal är vinst delat med försäljningspris. Pålägg är vinst delat med tillverkningskostnad. Ett pålägg på 50 % på en kostnad av 40,00 ger ett pris på 60,00 och en verklig marginal på 33,33 %, inte 50 %.',
  },
  {
    question: 'Varför måste marginalmålet vara under 100 %?',
    answer:
      'Marginalformeln dividerar kostnaden med ett minus marginalprocenten. Vid 100 % marginal blir nämnaren noll, vilket innebär att det inte finns något ändligt försäljningspris.',
  },
  {
    question: 'Bör konkurrentpriser bestämma min offert för 3D-print?',
    answer:
      'Konkurrentpriset är en positioneringssignal, inte en ersättning för kostnadskalkyler. Om ditt beräknade pris ligger över marknaden, se över kostnader, ytfinish, ledtid och mervärde innan du ger rabatt.',
  },
  {
    question: 'Inkluderar kalkylatorn skatter eller moms?',
    answer:
      'Nej. Den beräknar rekommenderat försäljningspris före moms. Lägg till moms, plattformsavgifter eller betalningsavgifter enligt lokala regler.',
  },
];

const howToData = [
  { name: 'Ange total tillverkningskostnad', text: 'Använd hela kostnaden för jobbet, inklusive fasta kostnader, rörliga kostnader, material, maskintid, arbete och efterbehandling.' },
  { name: 'Välj marginal- eller påläggsläge', text: 'Välj om det rekommenderade priset (PVP) ska använda formeln för marginalmål eller påläggsformeln.' },
  { name: 'Ange konkurrentens referenspris', text: 'Ange ett jämförbart marknadspris för att se om din offert ligger över, under eller nära konkurrenterna.' },
  { name: 'Kopiera det rekommenderade priset', text: 'Använd kopieringsknappen för att överföra PVP, nettovinst, verklig marginal och marknadsjämförelse till en offert eller faktura.' },
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
    '3d-print priskalkylator',
    '3d-printing vinstmarginal kalkylator',
    'pålägg vs marginal 3d-printing',
    '3d-print försäljningspris kalkylator',
    'marknadspositionering indikator',
  ],
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<MasterPricingMarginCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Inmatningsvärden för 3D-print prissättning',
    resultsAriaLabel: 'Resultat för 3D-print prissättning',
    currencyLabel: 'Valuta',
    currencyOptions,
    currencyOptionSeparator: ' - ',
    costLabel: 'Total tillverkningskostnad',
    competitorLabel: 'Konkurrentens referenspris',
    marginLabel: 'Marginalmål',
    markupLabel: 'Påläggsmål',
    conversionFactorLabel: 'Global omräkningsfaktor',
    conversionFactorUnit: 'x',
    conversionHint: 'Lämna som 1 om kostnaderna redan är angivna i den valda valutan. Används för prislisteskalering eller valutajustering.',
    modeLabel: 'PVP-metod',
    marginModeLabel: 'Marginal',
    markupModeLabel: 'Pålägg',
    pvpRecommendedLabel: 'Rekommenderat PVP',
    netProfitLabel: 'Nettovinst',
    realMarginLabel: 'Verklig marginal',
    marketComparisonLabel: 'Mot konkurrenter',
    marketPositionLabel: 'Marknadsposition',
    aboveMarketLabel: 'Över marknadspris',
    belowMarketLabel: 'Under marknadspris',
    atMarketLabel: 'På marknadspris',
    pvpByMarginLabel: 'PVP efter marginal',
    pvpByMarkupLabel: 'PVP efter pålägg',
    formulaMarginLabel: 'PVP_marginal = C / (1 - M / 100)',
    formulaMarkupLabel: 'PVP_palagg = C x (1 + U / 100)',
    sliderOutputSeparator: ' | ',
    copyLabel: 'Kopiera pris',
    copiedLabel: 'Kopierat',
    copyTemplate: 'Rekommenderat PVP: {pvp}; nettovinst: {profit}; verklig marginal: {margin}; marknadsjämförelse: {comparison}',
    pendingLabel: '-',
    currencySymbol: '\u20ac',
  },
  seo: [
    { type: 'title', text: 'Så fungerar denna priskalkylator för 3D-print', level: 2 },
    {
      type: 'paragraph',
      html: 'En pålitlig <strong>3d-print priskalkylator</strong> måste utgå från den totala tillverkningskostnaden, inte bara filamentvikten. Kostnadsvärdet bör inkludera fasta kostnader, rörliga maskinkostnader, material, marginal för misslyckade utskrifter, arbete, efterbehandling, förpackning och eventuella direktkostnader för jobbet. När kostnaden är känd kan försäljningspriset beräknas med antingen en marginal eller ett pålägg. Dessa två metoder är inte utbytbara, och att blanda ihop dem är ett av de vanligaste sätten för en 3D-printbyrå att erbjuda priser som ser lönsamma ut men som inte når den planerade marginalen.',
    },
    {
      type: 'paragraph',
      html: 'Kalkylatorn använder strikta formler: <code>PVP_marginal = C / (1 - M / 100)</code> och <code>PVP_palagg = C x (1 + U / 100)</code>. Nettovinsten är alltid <code>PVP - C</code>. Verklig marginal är vinsten delat med det slutliga priset, inte med kostnaden. Reglaget för marginalmål är begränsat under 100 eftersom en marginal på 100 % skulle kräva noll i kostnad eller ett oändligt pris. Resultatet visas alltid med två fasta decimaler utan tusentalsavgränsare så att talet kan klistras in rent i fakturor, kalkylblad, affärssystem eller offerter.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'M < 100', label: 'Strikt marginalvalidering', icon: 'mdi:shield-check-outline' },
        { value: '2 decimaler', label: 'Fast valutaformat', icon: 'mdi:calculator-variant-outline' },
        { value: 'Live', label: 'Direkt omräkning via reglage', icon: 'mdi:flash-outline' },
        { value: 'Marknad', label: 'Konkurrentpositionering', icon: 'mdi:chart-timeline-variant' },
      ],
    },
    {
      type: 'tip',
      title: 'Använd ett gemensamt prisspråk i företaget',
      html: '<p>Bestäm om säljsamtal använder marginal, pålägg eller båda med tydliga etiketter. En offert som anger "40 %" utan att nämna basen kan betyda två helt olika priser.</p>',
    },
    { type: 'title', text: 'Marginal vs. Pålägg (Markup) i 3D-printing', level: 2 },
    {
      type: 'paragraph',
      html: 'Frågan om <strong>pålägg vs marginal 3d-printing</strong> uppstår ofta när en verkstadsägare märker att ett pålägg på 30 % inte skapar en vinstmarginal på 30 %. Pålägg mäts mot kostnaden. Marginal mäts mot försäljningspriset. Om en printad del kostar 50,00 och säljs för 75,00 är nettovinsten 25,00. Pålägget är 50,00 % eftersom 25,00 dividerat med 50,00 är lika med 0,50. Marginalen är 33,33 % eftersom 25,00 dividerat med 75,00 är lika med 0,3333. Båda är korrekta, men de besvarar olika affärsfrågor.',
    },
    {
      type: 'table',
      headers: ['Kostnad', 'Mål', 'Formel', 'PVP', 'Nettovinst', 'Verklig marginal'],
      rows: [
        ['50.00', '50% pålägg', '50.00 x 1.50', '75.00', '25.00', '33.33%'],
        ['50.00', '50% marginal', '50.00 / 0.50', '100.00', '50.00', '50.00%'],
        ['80.00', '25% pålägg', '80.00 x 1.25', '100.00', '20.00', '20.00%'],
        ['80.00', '25% marginal', '80.00 / 0.75', '106.67', '26.67', '25.00%'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Ett högt pålägg kan fortfarande ge en blygsam marginal',
      badge: 'Finansiell precision',
      html: '<p>Ett pålägg på 100 % fördubblar kostnaden, men marginalen är 50 %. Om ett företag behöver en verklig marginal på 60 % för att täcka omkostnader och tillväxt, räcker det inte med ett pålägg på 100 %.</p>',
    },
    {
      type: 'glossary',
      items: [
        { term: 'PVP', definition: 'Rekommenderat försäljningspris före skatt, om inte annat anges i offertpolicyn.' },
        { term: 'Kostnad C', definition: 'Den totala tillverkningskostnaden som tilldelats jobbet innan vinst läggs till.' },
        { term: 'Marginal M', definition: 'Vinst delat med försäljningspris, uttryckt i procent.' },
        { term: 'Pålägg U', definition: 'Vinst delat med tillverkningskostnad, uttryckt i procent.' },
        { term: 'Nettovinst', definition: 'Försäljningspris minus tillverkningskostnad före skatt och finansiella justeringar.' },
      ],
    },
    { type: 'title', text: 'Vad som ingår i den totala tillverkningskostnaden', level: 2 },
    {
      type: 'paragraph',
      html: 'En <strong>3d-print försäljningspris kalkylator</strong> är bara så noggrann som den kostnadssiffra som matas in. För professionella offerter bör kostnaden inte bara innebära filamentgram multiplicerat med spolpris. Den bör omfatta material, maskinenergi, slitage på dysor och FEP-film, resinbortfall, förberedelse av byggplatta, operatörstid, förberedelse i slicer, supportborttagning, slipning, målning, kvalitetskontroll, förpackning och en rimlig marginal för misslyckade utskrifter. Kalkylatorn förutsätter att den angivna kostnaden redan täcker dessa poster.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Inkludera rörlig materialkostnad för filament, resin, pulver, support och spillmaterial.',
        'Inkludera maskintidskostnad baserad på avskrivning, underhåll, energi och förväntad livslängd.',
        'Inkludera arbete för förberedelse, övervakning, efterbehandling, packning och kundkommunikation.',
        'Inkludera direkta efterbehandlingsmaterial som primer, färg, slipmedel, IPA, handskar och polermedel.',
        'Planera för en uppmätt felmarginal för riskfyllda geometrier, snäva toleranser eller långa nattjobb.',
      ],
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Endast materialkostnad',
          description: 'Snabbt för hobbyuppskattningar men för snävt för kommersiellt arbete.',
          icon: 'mdi:printer-3d-nozzle',
          points: ['Ignorerar arbete', 'Ignorerar maskinslitage', 'Underskattar färdiga delar'],
        },
        {
          title: 'Tillverkningskostnad',
          description: 'Bästa inmatningen för marginal och pålägg eftersom den representerar jobbet före vinst.',
          icon: 'mdi:factory',
          highlight: true,
          points: ['Inkluderar maskintid', 'Inkluderar arbete', 'Möjliggör repeterbara offerter'],
        },
        {
          title: 'Fullkostnadspris',
          description: 'Kan redan innehålla omkostnader och vinst, så att lägga till marginal igen kan innebära dubbelräkning.',
          icon: 'mdi:receipt-text-outline',
          points: ['Användbart vid revision', 'Riskabelt som kalkylatorinmatning', 'Kräver tydlig redovisningspolicy'],
        },
      ],
    },
    {
      type: 'card',
      icon: 'mdi:calculator-variant-outline',
      title: 'Kalkylatorn gissar inte kostnaden',
      html: '<p>Den omvandlar en känd kostnad till ett rekommenderat pris. Om kostnaden är osäker, bygg först en kostnadsmodell för material, tid, arbete och efterbehandling, och använd sedan detta verktyg för vinst- och marknadspositionering.</p>',
    },
    { type: 'title', text: 'Hur man prissätter 3D-utskrifter med en målmarginal', level: 2 },
    {
      type: 'paragraph',
      html: 'De som söker efter <strong>hur man prissätter 3d-utskrifter</strong> börjar ofta med en multiplikator eftersom det känns enkelt. Marginalprissättning är bättre när företaget har ett definierat lönsamhetsmål. Om den marginal som krävs är 40 % och tillverkningskostnaden är 60,00 är priset <code>60,00 / (1 - 0,40)</code>, vilket motsvarar 100,00. Vinsten är 40,00 och den verkliga marginalen är 40,00 %. Denna metod är vanlig när en verkstad vill att varje produktfamilj ska bidra med en konsekvent andel av intäkterna efter kostnad.',
    },
    {
      type: 'paragraph',
      html: 'Viktig regel är att marginalen inte kan nå 100 %. Vid 99 % marginal blir en kostnad på 10,00 ett pris på 1 000,00. Vid 99,99 % blir samma kostnad 100 000,00. Detta matematiska beteende är inte en bugg; det visar varför marginalmål måste vara kommersiellt realistiska. Mycket höga marginalmål innebär vanligtvis att kostnadsmodellen är för låg eller att produkten har ett exceptionellt värde.',
    },
    {
      type: 'table',
      headers: ['Målmarginal', 'Multiplikator på kostnad', 'Kostnad på 40.00 blir', 'Typiskt fall'],
      rows: [
        ['20%', '1.2500x', '50.00', 'Konkurrensutsatt standardutskrift med låg servicebelastning.'],
        ['35%', '1.5385x', '61.54', 'Rutinmässigt professionellt arbete med normala omkostnader.'],
        ['50%', '2.0000x', '80.00', 'Mer krävande service, efterbehandling, brådskande arbete eller mindre serier.'],
        ['70%', '3.3333x', '133.33', 'Specialiserat värde, svåra jobb eller premiumpositionering.'],
      ],
    },
    {
      type: 'summary',
      title: 'Checklista för marginalprissättning',
      items: [
        'Använd den totala tillverkningskostnaden som bas.',
        'Håll marginalmålet under 100 %.',
        'Jämför det resulterande PVP-priset med konkurrentpriset innan du skickar offerten.',
        'Om priset är högt, undersök kostnadsdrivare innan du sänker vinsten.',
      ],
    },
    { type: 'title', text: 'Hur man använder pålägg utan att förväxla det med marginal', level: 2 },
    {
      type: 'paragraph',
      html: 'Påläggsprissättning är användbart när en verkstad tillämpar en tydlig multiplikator på kostnadskategorier. Till exempel kan en tjänst lägga till 80 % pålägg på standardutskrifter, 120 % på färdiga prototyper och 200 % på små brådskande jobb. Påläggsformeln är direkt: kostnaden multiplicerad med ett plus påläggsgraden. En kostnad på 35,00 med 80 % pålägg blir 63,00. Nettovinsten är 28,00, men den verkliga marginalen är 44,44 %, inte 80 %.',
    },
    {
      type: 'proscons',
      title: 'Marginalmetod vs. påläggsmetod',
      items: [
        { pro: 'Marginalmetoden ligger i linje med vinst som andel av intäkterna.', con: 'Säljteam måste förstå varför höga marginaler skapar icke-linjära prisökningar.' },
        { pro: 'Påläggsmetoden är snabb och enkel att applicera på kostnadsböcker.', con: 'Den kan dölja den faktiska marginalen om personalen läser påläggsprocenten som lönsamhet.' },
        { pro: 'Att visa båda formlerna visar den verkliga finansiella effekten.', con: 'Företaget behöver fortfarande en policy för vilken siffra som blir det offererade PVP-priset.' },
      ],
    },
    {
      type: 'message',
      title: 'När pålägg är praktiskt',
      ariaLabel: 'Påläggsvägledning',
      html: '<p>Pålägg fungerar bra för enkla interna regler: lägg till 60 % på FDM-serier, 90 % på resinfigurer eller 150 % på expressdelar. Använd den verkliga marginalen för att kontrollera om reglerna når målen.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Pålägg är inte fel',
      badge: 'Metodnotering',
      html: '<p>Pålägg är ett giltigt prisspråk när alla förstår grunden. Problemet är inte pålägget i sig, utan att kalla det "marginal" i offerter eller kalkylblad.</p>',
    },
    { type: 'title', text: 'Konkurrentpris och marknadspositionering', level: 2 },
    {
      type: 'paragraph',
      html: 'Konkurrentens referenspris gör kalkylatorn till ett kommersiellt beslutsverktyg istället för ett rent formelblad. Om det rekommenderade PVP-priset ligger över referenspriset visas resultatet med en mjuk varningsfärg. Det betyder inte automatiskt att offerten är fel. Ett högre pris kan motiveras av snabbare ledtid, bättre materialspårbarhet, finare ytfinish, ingenjörsstöd, dimensionskontroll eller lägre risk. Men säljaren bör veta varför priset ligger över marknadspris innan det skickas.',
    },
    {
      type: 'paragraph',
      html: 'Konkurrentjämförelser bör använda en jämförbar referens. En grov FDM-del med synliga lager är inte detsamma som en slipad, grundad och lackad prototyp. En marknadsplatsannons med osäkert material, lösa toleranser och lång leveranstid är inte detsamma som en lokal ingenjörstjänst som granskar CAD-filer och garanterar passform. Ange det konkurrentpris som bäst matchar samma material, process, ytbehandling, antal och leveranslöfte.',
    },
    {
      type: 'table',
      headers: ['Position', 'Tolkning', 'Åtgärd'],
      rows: [
        ['Under marknadspris', 'Offerten är attraktiv men kan lämna vinst kvar på bordet.', 'Kontrollera om marginalmålet är för lågt eller om konkurrenten erbjuder mindre service.'],
        ['Nära marknadspris', 'Priset är kommersiellt i linje med referensen.', 'Använd servicekvalitet, ledtid och tillförlitlighet för att differentiera dig.'],
        ['Över marknadspris', 'Offerten behöver motiveras eller kostnadsgranskas.', 'Undersök kostnadsdrivare, efterbehandlingsomfattning och kundnytta före rabatter.'],
      ],
    },
    {
      type: 'tip',
      title: 'Delta inte i ett priskrig mot botten',
      html: '<p>En verkstad med verkliga arbetskostnader, kalibrerade maskiner, dokumenterade material och efterbehandlingskompetens bör inte automatiskt matcha ett lågt referenspris. Konkurrera med det värde kunden kan verifiera.</p>',
    },
    { type: 'title', text: 'Valutaväljare och global omräkningsfaktor', level: 2 },
    {
      type: 'paragraph',
      html: 'Internationell prissättning kräver konsekvent hantering av pengar. Valutaväljaren ändrar symbolen och räknar om beloppen med samma referensfaktorer som används i resten av sviten. Den globala omräkningsfaktorn är en separat kommersiell multiplikator. Använd faktorn <code>1</code> när tillverkningskostnad och konkurrentpris redan är angivna i den valda valutan. Använd en anpassad faktor om företaget vill tillämpa en regional prislista, växelkursbuffert eller distributörsjustering.',
    },
    {
      type: 'paragraph',
      html: 'Faktorn tillämpas på penningbelopp, inte på marginal- eller påläggsprocent. Detta är viktigt eftersom procentsatser bör behålla sin innebörd över valutor. En marginal på 35 % i euro är fortfarande en marginal på 35 % i dollar efter att både kostnad och konkurrentreferens har konverterats. Resultatet visas med två decimaler utan tusentalsavgränsare, vilket underlättar inmatning i faktureringssystem.',
    },
    {
      type: 'summary',
      title: 'Valuta och faktorregler',
      items: [
        'Välj kundens valuta innan du kopierar det rekommenderade priset.',
        'Håll faktorn på 1 för normala offerter i lokal valuta.',
        'Använd faktorn för kontrollerad kommersiell skalning, inte för att ändra innebörden av marginal eller pålägg.',
        'Moms och avrundningar hanteras separat utanför denna priskalkyl.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Skatter och plattformsavgifter är separata',
      badge: 'Offertpolicy',
      html: '<p>Om moms, försäljningsskatt, betalningsavgifter eller fraktförsäkring ska täckas, läggs dessa till efter att PVP-priset beräknats enligt företagets policy.</p>',
    },
    { type: 'title', text: 'Bygga en prissättningsstrategi för 3D-printing', level: 2 },
    {
      type: 'paragraph',
      html: 'En stark <strong>prissättningsstrategi för 3D-printing</strong> kombinerar kostnadsnoggrannhet, vinstdisciplin och marknadsmedvetenhet. Kostnadsnoggrannhet förhindrar försäljning under tillverkningskostnad. Vinstdisciplin förhindrar att godtyckliga rabatter urholkar marginalerna. Marknadsmedvetenhet förhindrar att tjänsten kopplas bort från marknaden. Denna kalkylator sitter precis där dessa tre delar möts.',
    },
    {
      type: 'list',
      icon: 'mdi:target',
      items: [
        'Skapa separata marginalmål för standardutskrifter, tekniska prototyper, kosmetiska modeller, brådskande arbeten och serieproduktion.',
        'Använd påläggsregler endast om personalen samtidigt kan se den verkliga marginalen som regeln ger.',
        'Följ upp vinstprocent per marknadsposition så att priser över marknaden kan motiveras med bevis.',
        'Utvärdera den faktiska lönsamheten efter leverans och uppdatera kostnadsmodellen om arbete eller efterbehandling underskattades.',
        'Håll ett lägsta orderpris för små jobb där administration, inställning och kommunikation dominerar kostnaderna.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:chart-timeline-variant',
      title: 'Utvärdera vinsten från 3D utskrifter efter avslutat jobb',
      html: '<p>Den planerade nettovinsten är användbar före offert, men den verkliga vinsten efter leverans är det som förbättrar ditt prissystem. Jämför uppskattad kostnad med faktisk kostnad och justera framtida marginalmål.</p>',
    },
    {
      type: 'summary',
      title: 'Arbetsflöde för färdig offert',
      items: [
        'Uppskatta hela tillverkningskostnaden.',
        'Välj marginal eller pålägg medvetet.',
        'Kontrollera verklig marginal och nettovinst.',
        'Jämför med ett likvärdigt konkurrentpris.',
        'Kopiera PVP till offerten och hantera moms separat.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
