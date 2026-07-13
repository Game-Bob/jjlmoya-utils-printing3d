import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MachineHourlyRateCalculatorUI } from '../ui';

const slug = 'maskin-timpris-produktionskostnad-kalkylator';
const title = 'Maskin Timpris & Produktionskostnad Kalkylator';
const description =
  'Beräkna den verkliga driftskostnaden för en 3D-skrivare utifrån strömförbrukning, eltariff, inköpspris, livslängd och utskriftstid.';

const faqData = [
  {
    question: 'Hur beräknar jag timkostnaden för en 3D-skrivare?',
    answer:
      'Lägg ihop den timvisa elkostnaden med den timvisa avskrivningskostnaden. El är watt dividerat med 1000 multiplicerat med eltariffen. Avskrivning är inköpspris dividerat med livslängd i timmar.',
  },
  {
    question: 'Varför är avskrivning viktig vid prissättning av 3D-utskrifter?',
    answer:
      'Avskrivning representerar det maskinvärde som förbrukas vid tillverkning av delar. Att ignorera det kan få en utskrift att se lönsam ut medan skrivaren tyst förlorar andrahandsvärde, tillförlitlighet och ersättningskapacitet.',
  },
  {
    question: 'Vilken livslängd ska jag använda för en skrivbords-3D-skrivare?',
    answer:
      'Ett riktvärde på 5000 timmar är en praktisk startpunkt för många skrivbordsskrivare, men produktionsanläggningar bör ersätta det med underhållshistorik, förväntad ersättningscykel och faktiska driftsdata.',
  },
  {
    question: 'Är detta samma sak som en fullständig 3D-utskriftsoffert?',
    answer:
      'Nej. Denna kalkylator täcker maskinens el och hårdvaruamortering. En komplett offert bör även inkludera filament eller harts, arbete, misslyckade utskrifter, efterbearbetning, förpackning, omkostnader och marginal.',
  },
];

const howToData = [
  { name: 'Ange uppmätt skrivareffekt', text: 'Använd genomsnittlig watt under en jämförbar utskrift, inte bara nätaggregatets märkeffekt.' },
  { name: 'Ställ in utskriftstiden', text: 'Flytta tidsreglaget till den förväntade maskintiden för jobbet eller produktionsbatchen.' },
  { name: 'Lägg till energi- och tillgångsuppgifter', text: 'Ange eltariffen, maskinens inköpspris och uppskattad livslängd i drifttimmar.' },
  { name: 'Läs kostnadsfördelningen', text: 'Använd totalkostnad, timpris och sammansättningen av el versus avskrivning för att prissätta maskintid.' },
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'SEK' },
  featureList: [
    'Strömförbrukningskalkylator för 3D-skrivare',
    'Timvis avskrivningskalkylator för maskin',
    'Driftskostnadsuppskattning för 3D-utskrift',
    'Kostnadssammansättning el versus amortering',
  ],
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<MachineHourlyRateCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Indata för maskintimpris',
    resultsAriaLabel: 'Resultat för maskintimpris',
    settingsLabel: 'Offertinställningar',
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
    durationLabel: 'Produktionstid',
    powerLabel: 'Genomsnittlig effekt',
    tariffLabel: 'Eltariff',
    purchasePriceLabel: 'Inköpspris maskin',
    usefulLifeLabel: 'Uppskattad livslängd',
    totalCostLabel: 'Driftskostnad',
    hourlyRateLabel: 'Maskintimpris',
    electricityLabel: 'El',
    depreciationLabel: 'Amortering',
    electricityPerHourLabel: 'Energikostnad per timme',
    depreciationPerHourLabel: 'Tillgångskostnad per timme',
    compositionLabel: 'Kostnadssammansättning el versus amortering',
    insightLabel: 'Lönsamhetsinsikt',
    utilizationLabel: 'Utnyttjandetryck',
    utilizationValueLabel: 'Livslängd förbrukad',
    utilizationHint: 'Detta jobb förbrukar den visade andelen av den uppskattade maskinlivslängden.',
    batchLabel: 'Driftskostnad för batch',
    energyUsedLabel: 'Använd energi',
    costDriverLabel: 'Huvuddrivkraft',
    energyDriverLabel: 'Energi',
    assetDriverLabel: 'Tillgång',
    balancedDriverLabel: 'Balanserad',
    electricityDominant: 'Jobbet är energiledande: tariff, storlek på värmt bord, kammartemperatur och tomgångsuppvärmningstid påverkar offerten mer än inköpspriset.',
    depreciationDominant: 'Jobbet är tillgångsledande: maskinpris och livslängd dominerar, så varje oanvänd timme försvagar ekonomin för denna skrivare.',
    balancedDominant: 'El och amortering är tillräckligt nära för att båda ska synas i verkstadens timpris istället för att gömma en innanför marginalen.',
    hoursUnit: 'h',
    wattsUnit: 'W',
    kwhUnit: 'kWh',
    currencySymbol: 'kr',
  },
  seo: [
    { type: 'title', text: 'Vad ett maskintimpris betyder inom 3D-utskrift', level: 2 },
    {
      type: 'paragraph',
      html: 'Ett <strong>maskintimpris</strong> är kostnaden för att hålla en skrivare produktivt sysselsatt i en timme innan material, arbete, efterbearbetning, förpackning och vinst läggs till. Inom 3D-utskrift underskattas siffran ofta eftersom synliga kostnader som filament är lättare att märka än dolda kostnader som el och hårdvaruavskrivning. En skrivbordsskrivare kan förbruka bara några ören el per timme, medan en professionell maskin som kostade flera tusen euro måste återvinna sitt värde under en begränsad livslängd. Denna kalkylator isolerar dessa två maskinkostnader så att produktionsofferten börjar med en mätbar bas.',
    },
    {
      type: 'paragraph',
      html: 'Kalkylatorn använder två transparenta formler. Elkostnad är <code>(W / 1000) x T x tariff</code>, där <code>W</code> är genomsnittlig watt, <code>T</code> är utskriftstid i timmar och tariff är elpriset per kilowattimme. Amorteringskostnad är <code>(inköpspris / livslängd i timmar) x T</code>. Den totala driftskostnaden är summan av båda. Eftersom båda termerna skalar med tiden ger samma formler också ett rent timpris: el per timme plus avskrivning per timme.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'W / 1000', label: 'Omvandlar watt till kilowatt', icon: 'mdi:flash-outline' },
        { value: 'kWh', label: 'Energifaktureringsenhet', icon: 'mdi:meter-electric-outline' },
        { value: 'P / life', label: 'Linjär maskinkostnad per timme', icon: 'mdi:chart-line' },
        { value: 'Ce + Ca', label: 'Total driftskostnad', icon: 'mdi:calculator-variant-outline' },
      ],
    },
    {
      type: 'tip',
      title: 'Använd uppmätt genomsnittseffekt',
      html: '<p>Nätaggregatets etikett anger maximal kapacitet, inte skrivarens förbrukning under ett verkligt jobb. För en bättre <strong>inmatning i 3D-skrivarens strömförbrukningskalkylator</strong>, mät en representativ utskrift med en väggmätare och genomsnitta uppvärmnings-, utskrifts-, fläkt-, bädd- och standbylägena.</p>',
    },
    { type: 'title', text: 'Elkostnad: omvandla watt till produktionskostnad', level: 2 },
    {
      type: 'paragraph',
      html: 'Elkostnaden beror på genomsnittlig effektförbrukning, inte bara på skrivarens märkeffekt. En maskin med ett 350 W nätaggregat kan i genomsnitt förbruka 90 W vid ett litet PLA-jobb efter uppvärmning, medan en stor sluten skrivare med varm bädd och kammare kan förbli mycket högre för tekniska polymerer. Varmbäddsområdet, kammartemperaturen, munstyckstemperaturen, rumstemperaturen, fläktcykeln och inaktiv tid före borttagning av delen kan alla ändra den effektiva effekten.',
    },
    {
      type: 'paragraph',
      html: 'Omvandlingen till kilowattimmar är enkel men viktig. En 180 W skrivare som körs i 8 timmar använder <code>0,18 kW x 8 h = 1,44 kWh</code>. Vid 0,25 kr per kWh kostar den delen av jobbet 0,36 kr. Det kan låta lite, men anläggningar med många maskiner, långa PETG- eller ASA-jobb, uppvärmda torkskåp och klimatkontroll kan förvandla små timskillnader till en betydande månadsräkning.',
    },
    {
      type: 'table',
      headers: ['Indata', 'Vad du ska ange', 'Vanligt misstag'],
      rows: [
        ['Genomsnittlig effekt', 'Uppmätt watt över hela utskriftscykeln', 'Använda nätaggregatets märkeffekt eller toppuppvärmning.'],
        ['Tid', 'Maskinens beläggningstid i timmar', 'Ignorera förvärmning, nedkylning eller köblockeringstid.'],
        ['Tariff', 'Faktiskt pris per kWh från elräkningen', 'Använda en föråldrad nationell genomsnitt istället för verkstadens tariff.'],
        ['Valuta', 'Valutan som används i din offertmodell', 'Blanda euro hårdvarukostnad med dollar energianta-ganden.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Energikostnaden är låg tills skalan gör den synlig',
      badge: 'Anläggningsplanering',
      html: '<p>En liten skrivare kanske inte motiverar en omfattande energiredovisning. Tjugo skrivare som kör långa jobb varje dag gör det. Samma elformel kan användas per jobb, per skrivare, per cell eller per månad genom att bara ändra tiden.</p>',
    },
    { type: 'title', text: 'Amortering: den dolda kostnaden bakom skrivarens lönsamhet', level: 2 },
    {
      type: 'paragraph',
      html: 'Amortering är det finansiella erkännandet att en skrivare förbrukas genom användning. Styrningar slits, fläktar åldras, bäddar förlorar planhet, hotends täpps igen, elektronik blir föråldrad och maskinen behöver så småningom ersättas. Om en skrivare kostar 900 kr och verkstaden förväntar sig 5000 användbara drifttimmar, förbrukar maskinen 0,18 kr av tillgångsvärde varje produktiv timme. Ett tiotimmarjobb bär därför 1,80 kr i hårdvarukostnad innan material eller arbete beaktas.',
    },
    {
      type: 'paragraph',
      html: 'Linjär avskrivning är avsiktligt praktisk här. Den försöker inte modellera skattelag, andrahandsvärde, finansiering eller underhållshändelser. Istället svarar den på produktionsprissättningsfrågan: hur mycket av detta maskinköp ska tilldelas varje arbetstimme? Den siffran är grunden för sökningar efter <strong>timvis avskrivningstakt för 3D-skrivare</strong> och för varje anläggning som vill att ersättningspengar ska finnas när skrivaren når slutet av sin ekonomiska livslängd.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Hobby skrivbordsskrivare',
          description: 'Lågt inköpspris och oregelbunden användning. El kan synas vid jobb med varm bädd, men amortering spelar fortfarande roll om delar säljs.',
          icon: 'mdi:printer-3d-nozzle-outline',
          points: ['Lägre kapitalexponering', 'Livslängd ofta osäker', 'Manuellt arbete dominerar vanligtvis offerter'],
        },
        {
          title: 'Prosumer anläggningsskrivare',
          description: 'Måttligt inköpspris, hög drifttid, upprepade material och många identiska jobb gör timvis avskrivning till en viktig offertingdata.',
          icon: 'mdi:factory',
          highlight: true,
          points: ['Bra passform för 3000-8000 timmars livslängdsantaganden', 'Spåra faktiska reparationer', 'Separera maskintid från arbete'],
        },
        {
          title: 'Industriellt system',
          description: 'Hög kapitalkostnad innebär att amortering kan dominera. Serviceavtal, byggkammarmiljö och kvalificeringstid kan behöva extra kostnadsrader.',
          icon: 'mdi:domain',
          points: ['Kapitalkostnad dominerar', 'Stillestånd är dyrt', 'Lägg till service och anläggningsomkostnader'],
        },
      ],
    },
    {
      type: 'message',
      title: 'Inmatningen av livslängd förtjänar uppmärksamhet',
      ariaLabel: 'Not om livslängd',
      html: '<p>Standardinställningen 5000 timmar är en startpunkt, inte en universell sanning. En lätt använd hobbymaskin kan bli föråldrad innan den når den siffran, medan en välunderhållen anläggningsmaskin kan överskrida den. Använd siffran som matchar din ersättningspolicy.</p>',
    },
    { type: 'title', text: 'Välja livslängdstimmar utan gissningar', level: 2 },
    {
      type: 'paragraph',
      html: 'Livslängden är det mest känsliga redovisningsantagandet i denna kalkylator eftersom den sitter i nämnaren i amorteringsformeln. Om samma 900 kr-skrivare tilldelas 3000 användbara timmar är avskrivningen 0,30 kr per timme. Vid 9000 användbara timmar faller den till 0,10 kr per timme. Skrivaren ändrades inte, men affärsförväntningen ändrades. Det är därför en offert bör dokumentera den valda livslängden istället för att begrava den i en generisk påslag.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Använd underhållsloggar när de finns: munstycksbyten, fläktfel, slitbanor, remmar, kort, hotends och bäddytskikt avslöjar den verkliga kostnadskurvan.',
        'Separera skrivarfamiljer. En liten bedslinger, en CoreXY-produktionsmaskin och en hartsskrivare bör inte dela en livslängdssiffra.',
        'Lägre livslängd för experimentella maskiner som tillbringar många timmar med misslyckad inställning, materialtester eller kundspecifik validering.',
        'Höj livslängden endast när drifttid, förebyggande underhåll, reservdelar och ersättningshistorik stöder antagandet.',
        'Granska antagandet efter större uppgraderingar eftersom ett nytt rörelsesystem, hölje eller hotend kan ändra tillgångens ekonomiska livslängd.',
      ],
    },
    {
      type: 'table',
      headers: ['Livslängdsantagande', 'Bästa passform', 'Priskonsekvens'],
      rows: [
        ['2000-3000 h', 'Experimentella, billiga, dåligt dokumenterade eller hårt använda maskiner', 'Högre timvis avskrivning skyddar ersättningskapital.'],
        ['4000-6000 h', 'Standard skrivbords- eller prosumermaskiner med regelbunden produktion', 'Balanserat startintervall för många små anläggningar.'],
        ['7000-10000 h', 'Stabil skrivarflotta med underhållsdata och kontrollerade material', 'Lägre timvis tillgångskostnad men kräver förtroende för drifttid.'],
        ['Över 10000 h', 'Industriella eller tungt servade tillgångar med dokumenterad livscykel', 'Användbar endast när service och stillestånd redovisas separat.'],
      ],
    },
    {
      type: 'summary',
      title: 'Checklista för livslängd',
      items: [
        'Anpassa livslängden till skrivarklassen, inte till en generisk internetsiffra.',
        'Dokumentera antagandet så att offerter förblir förklarliga månader senare.',
        'Omberäkna när maskinen omvandlas från hobbybruk till betald produktion.',
      ],
    },
    { type: 'title', text: 'Läsa uppdelningen el versus amortering', level: 2 },
    {
      type: 'paragraph',
      html: 'Sammansättningsfältet visar om ett jobb är energiledande eller tillgångsledande. Energiledande jobb svarar starkt på eltariff, strategi för varm bädd, kammartemperatur, uppvärmningsbeteende och rumsförhållanden. Tillgångsledande jobb svarar starkare på inköpspris, livslängd och utnyttjande. En balanserad uppdelning innebär att ingen rad bör ignoreras; båda hör hemma i det grundläggande maskintimpriset.',
    },
    {
      type: 'paragraph',
      html: 'Denna uppdelning är användbar eftersom samma totalkostnad kan ha olika botemedel. Om el dominerar kan sänkning av bäddtemperatur, gruppering av delar för att undvika upprepad uppvärmning, isolering av ett hölje eller utskrift under lägre tariffönster hjälpa. Om amortering dominerar är den bättre hävstången utnyttjande: håll skrivaren sysselsatt med lönsamma jobb, undvik inaktivt kapital och välj maskinstorlek noggrant istället för att köpa kapacitet som förblir oanvänd.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Elkostnad', definition: 'Den fakturerade energi som skrivaren förbrukar under den valda tiden.' },
        { term: 'Amortering', definition: 'Den del av maskininköpspriset som tilldelas de timmar som används av jobbet.' },
        { term: 'Livslängd', definition: 'Det förväntade antalet produktiva drifttimmar innan skrivaren ersätts ekonomiskt.' },
        { term: 'Maskintimpris', definition: 'Elkostnad per timme plus avskrivningskostnad per timme före material, arbete, omkostnader och vinst.' },
        { term: 'Driftskostnad', definition: 'Maskinkostnaden för att hålla produktionen igång under en specifik tid.' },
      ],
    },
    {
      type: 'proscons',
      title: 'Vad denna kalkylator inkluderar och exkluderar',
      items: [
        { pro: 'Inkluderar uppmätt strömförbrukning, eltariff, tid, inköpspris och livslängd.', con: 'Inkluderar inte filament, harts, stöd, misslyckade utskrifter, arbete, hyra, programvara, förpackning eller marginal.' },
        { pro: 'Visar kostnadsfördelningen så att användare kan identifiera den huvudsakliga ekonomiska drivkraften.', con: 'Använder linjär avskrivning, så den modellerar inte skattemässiga avskrivningsscheman eller andrahandsvärde.' },
        { pro: 'Fungerar för en utskrift, en batch eller en månatlig produktionsblock genom att ändra tiden.', con: 'Kräver ärliga effekt- och livslängdsantaganden för att undvika falsk precision.' },
      ],
    },
    { type: 'title', text: 'Använda resultatet för att sätta ett lönsamt pris per timme', level: 2 },
    {
      type: 'paragraph',
      html: 'Det beräknade timpriset är golvet för maskintid, inte det slutgiltiga försäljningspriset. En komplett 3D-utskriftsoffert lägger normalt till material, stödavfall, rensningsavfall, operatörsarbete, skivnings- och förberedelsetid, felutskriftstillägg, underhållsförbrukning, hyra, programvara, betalningsavgifter, skatter och målvinstmarginal. Maskintimpriset är fortfarande väsentligt eftersom det förhindrar att själva skrivaren behandlas som gratis.',
    },
    {
      type: 'paragraph',
      html: 'Om kalkylatorn till exempel returnerar 0,225 kr per maskintimme och ett jobb upptar skrivaren i 14 timmar, är maskinens driftskostnad 3,15 kr. Om material är 4,80 kr, arbetsallokering är 6,00 kr, feltillstånd är 1,20 kr och marginal tillämpas därefter, blir offerten finansiellt spårbar. När en kund frågar varför en lång utskrift kostar mer än plastvikten antyder, blir maskintid en förklarlig rad.',
    },
    {
      type: 'card',
      icon: 'mdi:cash-clock',
      title: 'Lönsamhetsinsikt',
      html: '<p>Denna beräkning är grunden för att definiera <strong>priset per timme</strong> för alla utskriftsanläggningar. När maskinkostnad per timme är känd kan verkstaden besluta om att fakturera maskintid direkt, bunta ihop den i materialpåslag eller använda den internt för att jämföra skrivare och material.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Offert inte bara per gram',
      badge: 'Dold kostnad',
      html: '<p>En lätt del som upptar skrivaren i 20 timmar kan förbruka mer maskinkapacitet än en tung del som skrivs ut snabbt. Viktbaserad prissättning utan maskintid undervärderar ofta långsamma, höga, fina lager eller lågflödesjobb.</p>',
    },
    { type: 'title', text: 'Praktiska exempel för driftskostnadsuppskattning inom 3D-utskrift', level: 2 },
    {
      type: 'paragraph',
      html: 'Ett inställt PLA skrivbordsjobb kan i genomsnitt förbruka 120 W, köras i 6 timmar, använda en tariff på 0,22 kr/kWh och sitta på en skrivare för 600 kr med en livslängd på 5000 timmar. El är bara 0,158 kr, medan amortering är 0,720 kr. Den totala maskinens driftskostnad är cirka 0,878 kr och timpriset är cirka 0,146 kr. I detta fall är jobbet tydligt tillgångsledande: bättre maskinutnyttjande påverkar lönsamheten mer än små effektförändringar.',
    },
    {
      type: 'paragraph',
      html: 'Ett ASA-jobb på en större sluten skrivare kan i genomsnitt förbruka 420 W i 18 timmar vid 0,30 kr/kWh. Om skrivaren kostar 1800 kr och livslängden är 4500 timmar, är el 2,268 kr och amortering 7,200 kr, för en total maskinkostnad på 9,468 kr. Även om energianvändningen är mycket högre dominerar avskrivningen fortfarande eftersom kapitalkostnaden och den långa maskinbeläggningen är betydande.',
    },
    {
      type: 'paragraph',
      html: 'En hartsskrivare kan berätta en annan historia. Skrivaren kan förbruka måttlig ström, men beräkningen gäller fortfarande för maskinbeläggning. Om en byggtid tar 9 timmar på en maskin för 2500 kr som förväntas producera 4000 användbara timmar, är enbart amorteringen 5,625 kr. Den siffran hör hemma i offerten innan harts, handskar, IPA eller tvättvätska, efterhärdning, stöd och rengöringsarbete läggs till.',
    },
    {
      type: 'summary',
      title: 'Beslutsregler',
      items: [
        'Använd uppmätta genomsnittliga watt för elnoggrannhet.',
        'Använd realistiska livslängdstimmar för tillgångsåtervinning.',
        'Behandla resultatet som maskintidsgolvet, lägg sedan till material, arbete, omkostnader, risk och marginal.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
