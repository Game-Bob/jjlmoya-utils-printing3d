import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { RainbowFilamentGradientCalculatorUI } from '../ui';

export const content: ToolLocaleContent<RainbowFilamentGradientCalculatorUI> = {
  slug: 'regnbage-filament-overgangslangd-kalkylator',
  title: 'Kalkylator för regnågsfiberövergångslängd vid 3D utskrifter',
  description: 'Uppskatta regnågsfilamentets färgcykler, spoleanvändning och var gradientövergångar kommer att synas längs Z-höjden på en skivad 3D-utskrift.',
  ui: {
    unitMetric: 'Metriskt',
    unitImperial: 'US',
    cycleLength: 'Färgcykellängd',
    partWeight: 'Vikt av skivad del',
    density: 'Densitet',
    diameter: 'Filamentdiameter',
    partHeight: 'Utskriven Z-höjd',
    startOffset: 'Startförskjutning på spolen',
    presets: 'Materialförinställningar',
    pla: 'PLA regnåge',
    petg: 'PETG-blandning',
    silk: 'Silke flerfärg',
    usedFilament: 'Använt filament',
    cyclesInPart: 'Cykler i delen',
    heightPerCycle: 'Z per cykel',
    gramsPerCycle: 'Massa per cykel',
    zMap: 'Z-övergångskarta',
    transitionBands: 'Synliga övergångsband',
    phaseWindow: 'Cykelfas',
    copySummary: 'Kopiera gradientsammanfattning',
    reset: 'Återställ',
    emptyValue: '0',
    copyTemplate: 'Regnågsfilamentuppskattning',
    copyCycles: 'färgcykler',
    copyUsed: 'använt',
    copyZCycle: 'per cykel',
  },
  seo: [
    { type: 'title', text: 'Hur en regnågsfiberövergångslängdskalkylator fungerar', level: 2 },
    { type: 'paragraph', html: 'En regnågsfiberövergångslängdskalkylator kopplar samman två skivningsnummer som vanligtvis ses separat: <strong>modellmassa</strong> och <strong>utskriftshöjd</strong>. Skivaren talar om hur många gram material delen kommer att förbruka, medan filamenttillverkaren eller en manuell mätning talar om hur många meter spolen behöver för att slutföra en hel färgcykel. När dessa värden finns i samma materialflödesmodell kan du uppskatta hur många färgcykler som visas i objektet och var varje färgband hamnar på Z-axeln.' },
    { type: 'paragraph', html: 'Kärnkonverteringen är fysisk snarare än visuell. En skivad del som väger 180 g förbrukar inte automatiskt samma filamentlängd på varje spole, eftersom längden beror på densitet och diameter. PLA, PETG, silke-PLA, fyllda blandningar och genomskinliga blandningar kan ha olika densiteter. Ett nominellt 1,75 mm-filament har också toleransvariation, så en kalkylator bör låta dig justera diametern istället för att alltid anta standardvärdet.' },
    { type: 'stats', columns: 4, items: [
      { value: '1,75 mm', label: 'vanlig FDM-filamentdiameter', icon: 'mdi:circle-slice-8' },
      { value: '1,24 g/cm3', label: 'typisk PLA-densitet som används för uppskattningar', icon: 'mdi:flask' },
      { value: '30 m', label: 'exempel på en komplett regnågsfärgcykel', icon: 'mdi:palette' },
      { value: 'Z-axel', label: 'där cykellängden blir synlig', icon: 'mdi:arrow-up-down' },
    ] },
    { type: 'tip', title: 'Mät en verklig cykel innan du litar på förhandsgranskningen', html: 'Tillverkare beskriver ofta regnågsfilament som snabb, medel eller lång övergång, men den användbara indatan är det uppmätta avståndet från en färg som återvänder till samma färg. Linda bara av ett litet prov om det är säkert för spolen, eller skriv ut ett tunt reningstorn och baklängdesberäkna den förbrukade filamentlängden från skivaruppskattningar.' },

    { type: 'title', text: 'Varför delens vikt förutsäger färgförändringar bättre än utskriftstid', level: 2 },
    { type: 'paragraph', html: 'Utskriftstid är en dålig prediktor för färganvändning på en regnågsspole. En dekorativ vas kan ta många timmar i spiralläge samtidigt som den förbrukar lite material, och en tät mekanisk konsol kan snabbt förbruka en stor mängd filament. Spolen ändrar färg baserat på <strong>längden filament som dras genom extrudern</strong>, inte baserat på förflutna minuter, förflyttningsavstånd eller antalet lager.' },
    { type: 'paragraph', html: 'Skivarvikten är användbar eftersom den redan inkluderar väggar, infill, övre och nedre lager, stöd (om aktiverade), brims, kjolar och reningsstrukturer. Den vikten kan omvandlas till volym genom att dividera med materialdensiteten. Volymen kan sedan divideras med filamentets tvärsnittsarea för att uppskatta den totala filamentlängden. Det är därför samma STL kan visa olika gradientbeteende när du ändrar infill, väggantal, stödinställningar eller skala.' },
    { type: 'table', headers: ['Skivarändring', 'Effekt på filamentförbrukning', 'Effekt på regnågsgradient'], rows: [
      ['Mer infill', 'Ökar totala gram och meter', 'Mer färgcykelframsteg inom samma Z-höjd'],
      ['Fler väggar', 'Ökar förbrukningen på de flesta lager', 'Övergångar komprimeras vertikalt och blir vanligare'],
      ['Högre modell med samma massa', 'Liknande meter över mer Z-höjd', 'Övergångar sträcker sig längre isär'],
      ['Stöd aktiverade', 'Förbrukar färger utanför den synliga delen', 'Synlig fas kan skifta jämfört med modellen utan stöd'],
      ['Stor brim eller flotte', 'Förbrukar filament före första synliga lagret', 'Startfärgen flyttas framåt på spolen'],
    ] },
    { type: 'diagnostic', variant: 'info', title: 'Använd skivaruppskattningen efter slutgiltiga inställningar', badge: 'Viktigt', html: 'Gör beräkningen efter att ha valt lagerhöjd, väggantal, infill, stöd, brim och skala. En uppskattning av regnågsspolens färgcykel gjord före stödgenerering kan vara synligt felaktig eftersom stödmaterialet förbrukar en del av färgsekvensen före och under objektet.' },

    { type: 'title', text: 'Förstå färgcykellängd på regnågsfilamentspolar', level: 2 },
    { type: 'paragraph', html: 'Färgcykellängd är det avstånd filament som behövs för att sekvensen ska upprepas. På en regnågsspole med sex färger kan en cykel gå röd, orange, gul, grön, blå, violett och sedan återgå till röd. Cykeln kan vara kort nog för flera övergångar i en liten figur, eller lång nog för att en medelstor utskrift bara visar en långsam förändring. En <strong>regnågsspole-färgcykelkalkylator</strong> är mest användbar när detta nummer är realistiskt.' },
    { type: 'paragraph', html: 'Alla övergångsfilament har inte lika färgzoner. Vissa produkter blandas gradvis med långa övertoningar, medan andra har starkare block. Kalkylatorn behandlar hela cykeln som jämnt fördelade färgband eftersom det är den mest praktiska uppskattningen från enbart skivardata. Om din spole har ojämna sektioner, använd Z-kartan som fasguide och förvänta dig att den faktiska visuella blandningen är mjukare eller asymmetrisk.' },
    { type: 'comparative', columns: 3, items: [
      { title: 'Kort cykel regnåge', description: 'Bäst för miniatyrer, ornament, små vaser och namnskyltar. Flera färgbyten med mindre material.', icon: 'mdi:weather-sunset-up', points: ['Snabba synliga övergångar', 'Kan se rörig ut på stora plana ytor'] },
      { title: 'Medel cykel regnåge', description: 'Ett balanserat val för skrivbordsobjekt och medelstora skulpturer. Producerar vanligtvis en till tre större övergångar.', icon: 'mdi:palette-swatch', highlight: true, points: ['Förutsägbar på vanliga utskrifter', 'Bra för objekt på 100-300 g'] },
      { title: 'Lång cykel regnåge', description: 'Bättre för höga vaser, stora drakar, lampor och enkelväggiga utskrifter som behöver långsamma, mjuka gradienter.', icon: 'mdi:palette-outline', points: ['Mjuk färgförändring', 'Små modeller kan förbli en färg'] },
    ] },
    { type: 'glossary', items: [
      { term: 'Färgcykel', definition: 'Den filamentlängd som krävs för att hela färgsekvensen ska upprepas från en startfärg tillbaka till samma färg.' },
      { term: 'Fas', definition: 'Den aktuella positionen inom färgcykeln i det ögonblick den synliga delen börjar skrivas ut.' },
      { term: 'Övergångsband', definition: 'Ett vertikalt område av det utskrivna objektet där det uppskattade färgsegmentet ändras längs Z-axeln.' },
      { term: 'Startförskjutning', definition: 'Filamentlängd som redan förbrukats innan modellen börjar, inklusive tidigare utskrifter, rening, kjol, brim eller manuell trimning.' },
    ] },

    { type: 'title', text: 'Hur man uppskattar färgövergångsposition längs Z-axeln', level: 2 },
    { type: 'paragraph', html: 'Z-kartan är en uppskattare, inte en skivarsimulator. Den antar att materialförbrukningen är proportionellt fördelad över utskriftshöjden. Det är en bra första ordningens modell för många vaslägesutskrifter, skulpturer med jämn tvärsektion och dekorativa objekt. Den blir mindre exakt när modellen har en tung bas, en ihålig mitt, en tät topp eller stora stöd som förbrukar material ojämnt över höjden.' },
    { type: 'paragraph', html: 'För en modell med mestadels enhetlig tvärsektion ger division av utskriftshöjden med färgcyklerna ett intuitivt svar: om ett 160 mm-objekt använder två hela färgcykler, upptar varje cykel ungefär 80 mm Z-höjd. Om det bara använder 0,4 cykler kommer utskriften att visa mindre än hälften av regnågssekvensen. Om det använder 4 cykler upprepas färgerna ofta och kan skapa ett randigt utseende snarare än en enda jämn gradient.' },
    { type: 'list', icon: 'mdi:arrow-up-down', items: [
      'Använd utskriven Z-höjd, inte total maskinförflyttningshöjd.',
      'Inkludera brim- eller flotteförbrukning som startförskjutning om dessa funktioner skrivs ut före objektet.',
      'För plattor med flera objekt, beräkna den kombinerade skivade vikten om objekten skrivs ut sekventiellt lager för lager.',
      'För sekventiell utskrift, beräkna varje objekt separat och flytta fram startförskjutningen för nästa objekt.',
      'För ett reningstorn eller flerfärgsavfallsstruktur, lägg till dess uppskattade massa till förskjutningen eller totala förbrukningen beroende på när den skrivs ut.',
    ] },
    { type: 'card', icon: 'mdi:layers-triple', title: 'Varför botten kanske inte matchar den förutsagda första färgen', html: 'Många skrivare rengör, ritar en primlina, skriver ut en kjol eller en brim före den första synliga väggen. Dessa funktioner förbrukar filament och flyttar startfasen. Om det första synliga lagret måste vara en specifik färg, mät eller uppskatta denna före-utskriftsförbrukning och ange den som startförskjutning.' },

    { type: 'title', text: 'Densitet, diameter och varför två 180 g-utskrifter kan använda olika filamentlängder', level: 2 },
    { type: 'paragraph', html: 'Samma massa kan representera olika filamentlängder eftersom densiteten ändrar volymen per gram. PLA uppskattas ofta till cirka 1,24 g/cm3, PETG till cirka 1,27 g/cm3, och vissa silkes- eller fyllda blandningar kan skilja sig tillräckligt för att flytta övergångar flera millimeter på höga utskrifter.' },
    { type: 'paragraph', html: 'Alla övergångsfilament har inte lika färgzoner. Kalkylatorn behandlar hela cykeln som jämnt fördelade färgband. Om din spole har ojämna sektioner, använd Z-kartan som guide.' },
    { type: 'table', headers: ['Materialfamilj', 'Planeringsdensitet', 'Gradientplaneringsnot'], rows: [
      ['PLA regnåge', '1,24 g/cm3', 'Bra standard för de flesta vanliga regnågsspolar'],
      ['Silke-PLA', '1,18-1,24 g/cm3', 'Pigment och tillsatser varierar; kontrollera märkesdata om tillgängligt'],
      ['PETG flerfärg', '1,25-1,29 g/cm3', 'Något tätare, så samma gram kan använda mindre längd'],
      ['Fyllt PLA', 'Varierar kraftigt', 'Trä-, metall-, sten- eller glittertillsatser kan ändra uppskattningen'],
    ] },
    { type: 'proscons', title: 'Använda skivarvikten som huvudindata', items: [
      { pro: 'Den inkluderar verkliga utskriftsinställningar som väggar, infill, stöd och skala.', con: 'Den är beroende av att skivarens densitetsprofil är rimligt korrekt.' },
      { pro: 'Det är snabbare än att manuellt summera extruderrörelser från G-kod.', con: 'Den avslöjar inte ojämn materialfördelning på varje lager.' },
      { pro: 'Den fungerar med olika modeller och skivare med minimal datainmatning.', con: 'Primlinjer, rening och misslyckade starter måste redovisas separat.' },
    ] },

    { type: 'title', text: 'Använda kalkylatorn för en verklig regnågsfilamentutskrift', level: 2 },
    { type: 'paragraph', html: 'Börja med att skiva modellen med slutgiltiga inställningar. Kopiera den uppskattade filamentvikten från skivaren, ange sedan materialdensiteten och filamentdiametern. Ange den uppmätta eller annonserade färgcykellängden. Ange slutligen den utskrivna Z-höjden för modellen. Kalkylatorn returnerar använt filament, antal cykler i delen, gram per hel färgcykel och uppskattat Z-avstånd per cykel.' },
    { type: 'list', icon: 'mdi:check-circle', items: [
      'Om cykler i delen är under 0,25, förvänta dig en subtil nyansförändring snarare än ett regnågsobjekt.',
      'Om cykler i delen är runt 1,0 kan modellen visa ett fullt svep genom spolens palett.',
      'Om cykler i delen är mellan 2,0 och 4,0 kommer objektet att visa upprepade färgband.',
      'Om Z per cykel är större än modellhöjden, öka skalan, lägg till massa eller välj en spole med snabbare övergång.',
      'Om Z per cykel är mycket liten, minska infill eller välj en spole med längre övergång för jämnare gradienter.',
    ] },
    { type: 'summary', title: 'Snabb planeringsregel', items: [
      'Fler gram på samma höjd komprimerar regnågen vertikalt.',
      'Mer höjd med samma gram sträcker ut gradienten.',
      'Kortare färgcykellängd skapar fler övergångar.',
      'Startförskjutning styr vilken del av regnågen som visas först.',
    ] },
    { type: 'message', title: 'För utställningsföremål', ariaLabel: 'Planeringsråd för utställningsföremål', html: 'När färggränsen måste hamna på en specifik funktion, skriv ut en liten vertikal testkolonn med samma skivarprofil. Jämför de uppmätta bandhöjderna med uppskattningen, justera sedan cykellängden eller startförskjutningen innan du påbörjar den fullständiga utskriften.' },

    { type: 'title', text: 'Vanliga frågor om regnågsspole-färgplanering', level: 2 },
    { type: 'paragraph', html: '<strong>Hur mycket regnågsfilament behöver jag för en hel färgcykel?</strong> Multiplicera cykellängden med gram per meter för din filamentdiameter och densitet. För standard 1,75 mm PLA är en meter ungefär 3 g, så en 30 m cykel är nära 90 g. Kalkylatorn utför denna omvandling direkt eftersom verklig densitet och diameter ändrar svaret.' },
    { type: 'paragraph', html: '<strong>Varför förblev min utskrift mestadels en färg?</strong> Delen använde troligen mindre än en meningsfull bråkdel av spolecykeln. Små modeller, låg infill och mycket långövergångs-regnågsfilament kan stanna inom en eller två närliggande färger. Att skala upp modellen, skriva ut flera objekt samtidigt, öka väggar eller välja en snabbare cykelspole kan göra övergångar mer synliga.' },
    { type: 'paragraph', html: '<strong>Kan jag framtvinga en specifik färg på toppen av modellen?</strong> Du kan uppskatta det med startförskjutning, men exakt placering kräver kunskap om den aktuella spolefasen. Om toppen måste vara blå, till exempel, kan du behöva föra fram filamentet genom att skriva ut ett reningsobjekt, börja från en känd synlig färg eller välja en annan modellskala.' },
    { type: 'diagnostic', variant: 'warning', title: 'Stora geometriförändringar minskar noggrannheten i Z kartan', badge: 'Modellform', html: 'En tung piedestal och tunn övre staty kan förbruka det mesta av materialet nära botten, så verkliga övergångar kommer att klustras lägre än en proportionell Z uppskattning antyder. För dessa modeller, använd kalkylatorn för totalt cykelantal, inspektera sedan skivarens lagergranskning för att förstå var extrusionsvolymen är koncentrerad.' },
  ],
  faq: [
    {
      question: 'Vad är regnågsfilamentövergångslängd?',
      answer: 'Det är mängden filament, vanligtvis mätt i meter eller fot, som spolen behöver för att gå igenom en hel färgsekvens och återgå till startfärgen.',
    },
    {
      question: 'Varför frågar kalkylatorn efter delvikt istället för utskriftstid?',
      answer: 'Färgförändringar beror på filamentlängden som extrudern förbrukar. Skivarvikt kan omvandlas till volym och sedan till filamentlängd, medan utskriftstid inte direkt beskriver materialanvändning.',
    },
    {
      question: 'Hur noggrann är Z-övergångskartan?',
      answer: 'Det är en planeringsuppskattning. Den är mest exakt för modeller med ganska jämn materialfördelning över höjden och mindre exakt för former med en tät bas, ihåliga sektioner, stöd eller stora reningsstrukturer.',
    },
    {
      question: 'Kan jag använda detta för silke-PLA eller PETG-regnågsfilament?',
      answer: 'Ja. Välj en materialförinställning eller ange densiteten från spolens datablad. Densitet ändrar den uppskattade filamentlängden och därmed det förutsagda antalet färgcykler.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Skiva modellen', text: 'Använd de slutgiltiga skivarinställningarna och kopiera den uppskattade delvikten.' },
    { name: 'Ange spoldata', text: 'Ställ in färgcykellängd, densitet, filamentdiameter och eventuell startförskjutning.' },
    { name: 'Läs Z-kartan', text: 'Använd cykler, Z per cykel och synliga band för att avgöra om gradienten blir subtil, fullständig eller upprepad.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Regnågsfiberövergångslängdskalkylator',
      description: 'Uppskatta regnågsfilamentets färgcykelanvändning och övergångspositioner längs Z-axeln på en 3D-utskrift.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Vad är regnågsfilamentövergångslängd?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Det är mängden filament som spolen behöver för att gå igenom en hel färgsekvens och återgå till startfärgen.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Kalkylator för regnågsfiberövergångslängd vid 3D utskrifter',
      description: 'Uppskatta regnågsfilamentets färgcykler, spoleanvändning och var gradientövergångar kommer att synas längs Z-höjden på en skivad 3D-utskrift.',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Skiva modellen', text: 'Använd de slutgiltiga skivarinställningarna och kopiera den uppskattade delvikten.' },
        { '@type': 'HowToStep', position: 2, name: 'Ange spoldata', text: 'Ställ in färgcykellängd, densitet, filamentdiameter och eventuell startförskjutning.' },
        { '@type': 'HowToStep', position: 3, name: 'Läs Z-kartan', text: 'Använd cykler, Z per cykel och synliga band för att avgöra om gradienten blir subtil, fullständig eller upprepad.' }
      ],
    },
  ],
};
