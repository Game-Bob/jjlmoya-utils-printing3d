import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { BedThermalInertiaStabilizationCalculatorUI } from '../ui';

export const content: ToolLocaleContent<BedThermalInertiaStabilizationCalculatorUI> = {
  slug: 'printbadds-termiska-troeghets-stabiliserings-kalkylator',
  title: 'Kalkylator för Termisk Tröghetsstabilisering av Skrivbädd',
  description: 'Uppskatta hur länge en uppvärmd 3D-skrivarbädd ska vila efter att ha nått börvärdet, baserat på plattmaterial, tjocklek, måltemperatur, värmareffekt och bäddstorlek.',
  ui: {
    unitSystemLabel: 'Enheter',
    metricLabel: 'Metriska',
    imperialLabel: 'US',
    materialLabel: 'Byggplattmaterial',
    borosilicateGlassLabel: 'Borosilikatglas',
    peiSpringSteelLabel: 'PEI-fjäderstål',
    aluminumLabel: 'Aluminiumverktygsplatta',
    thicknessLabel: 'Plattjocklek',
    targetTemperatureLabel: 'Målbäddstemperatur',
    heaterPowerLabel: 'Värmareffekt',
    bedSizeLabel: 'Uppvärmd yta',
    presetsLabel: 'Förinställningar',
    enderPresetLabel: 'Glas 235',
    voronPresetLabel: 'PEI 300',
    largePresetLabel: 'Aluminium 350',
    recommendedDelayLabel: 'Startfördröjning',
    delayMarkerLabel: 'Fördröjning',
    warmupTimeLabel: 'Idealisk uppvärmning',
    plateMassLabel: 'Plattmassa',
    energyStoredLabel: 'Lagrad värme',
    conductionLagLabel: 'Ledningsfördröjning',
    conductivityLabel: 'Värmeledningsförmåga',
    readinessLabel: 'Beredskap',
    readinessQuick: 'snabb blötläggning',
    readinessBalanced: 'normal blötläggning',
    readinessSlow: 'lång blötläggning',
    controlsAriaLabel: 'Termiska tröghetsinställningar för värmebädd',
    resultsAriaLabel: 'Stabiliseringsresultat för värmebädd',
    copyButton: 'Kopiera bäddfördröjning',
    copiedButton: 'Kopierad',
    copiedSummaryTemplate: 'Bäddstabiliseringsuppskattning: vänta {delay} s ({minutes} min) efter börvärde; idealisk uppvärmning cirka {warmup} min, beredskap {readiness}.',
    thicknessUnitMetric: 'mm',
    thicknessUnitImperial: 'in',
    temperatureUnitMetric: '°C',
    temperatureUnitImperial: '°F',
    bedSizeUnitMetric: 'mm',
    bedSizeUnitImperial: 'in',
    wattsUnit: 'W',
    secondsUnit: 's',
    minutesUnit: 'min',
    kilogramsUnit: 'kg',
    poundsUnit: 'lb',
    wattHoursUnit: 'Wh',
    conductivityUnit: 'W/mK',
  },
  seo: [
    { type: 'title', text: 'Varför en uppvärmd bädd behöver stabilisering efter att den nått börvärdet', level: 2 },
    {
      type: 'paragraph',
      html: 'En skrivardisplay visar vanligtvis temperaturen uppmätt nära termistorn, inte den exakta temperaturen på den övre skrivytan. På många maskiner är termistorn fastlimmad under värmaren, inbäddad i bäddbäraren eller placerad bort från området där första lagret börjar. Styrenheten kan visa <strong>60 °C</strong> medan toppen av en tjock glasplatta fortfarande håller på att komma ikapp. Den fördröjningen är termisk tröghet: plattan lagrar värme, flyttar värme genom sin tjocklek och förlorar samtidigt värme till luften.',
    },
    {
      type: 'paragraph',
      html: 'Det första lagret är ovanligt känsligt för denna fördröjning eftersom vidhäftning beror på polymerens viskositet, ytenergi och kontakttryck. En bädd som fortfarande värms upp på ytan kan få hörn att lyfta, skirtlinjer att se torra ut eller Z-offset att verka inkonsekvent även när mesh och munstyckshöjd är korrekta. Att vänta ett beräknat värme-blötläggningsintervall efter att bädden nått börvärdet är ofta mer repeterbart än att höja börvärdet slumpmässigt.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '1,2', label: 'W/mK typisk värmeledningsförmåga för borosilikatglas' },
        { value: '16', label: 'W/mK ungefärlig värmeledningsförmåga för fjäderstål' },
        { value: '205', label: 'W/mK ungefärlig värmeledningsförmåga för aluminium' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Fördröjningen är en ytskattning, inte en ersättning för PID autotuning',
      html: 'PID-inställning styr hur värmaren följer termistorn. Termisk stabilisering uppskattar hur lång tid skrivytan behöver för att komma nära det termistorstyrda börvärdet. En väl inställd PID-slinga kan fortfarande behöva en värme-blötläggningsfördröjning när byggplattan är tjock, dåligt ledande eller löst kopplad till värmaren.',
    },
    { type: 'title', text: 'Materialval dominerar bäddens termiska tröghet', level: 2 },
    {
      type: 'paragraph',
      html: 'Kalkylatorn behandlar material som en strikt inmatning eftersom glas, PEI-fjäderstål och aluminium inte är utbytbara termiska system. Borosilikatglas har låg värmeledningsförmåga och betydande värmekapacitet, så den övre ytan kan ligga efter värmarsidan under en märkbar period. Fjäderstål är tunnare och leder bättre än glas, så det brukar jämna ut sig snabbare även om stål är tätt. Aluminium leder värme extremt bra, vilket är varför gjutna eller bearbetade aluminiumbäddar föredras på större skrivare, men en tjock aluminiumplatta kan fortfarande lagra mycket energi.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Borosilikatglas',
          description: 'Låg ledningsförmåga och måttlig värmekapacitet skapar den längsta ytfördröjningen, särskilt vid 3-5 mm tjocklek.',
          points: ['Bra planhet när det stöds väl', 'Långsam ytrespons', 'Känsligt för klämmor och lokal värmarkontakt'],
        },
        {
          title: 'PEI fjäderstål',
          description: 'Tunna stålplåtar reagerar snabbare och behöver vanligtvis mindre vilotid, men magnetiska baser och limlager tillför kontaktmotstånd.',
          highlight: true,
          points: ['Snabb praktisk blötläggning', 'Enkla ytbyten', 'Magnet- och limpåverkan spelar fortfarande roll'],
        },
        {
          title: 'Aluminiumplatta',
          description: 'Hög ledningsförmåga sprider värme snabbt över bädden; tjocklek och värmareffekt blir de huvudsakliga fördröjningsfaktorerna.',
          points: ['Utmärkt lateral värmespridning', 'Hög lagrad energi på stora bäddar', 'Bäst när värmartäckningen är jämn'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Skrivyta', 'Termiskt beteende', 'Typiskt stabiliseringsproblem', 'Praktisk första-lager respons'],
      rows: [
        ['4 mm borosilikatglas', 'Långsam ledning genom tjockleken', 'Ytan ligger efter termistorn', 'Vänta längre innan sondering eller utskrift'],
        ['0,4-0,6 mm PEI-fjäderstål', 'Tunn ledande plåt', 'Magnet/lim-gränssnitt styr fördröjningen', 'Kort värme-blötläggning räcker oftast'],
        ['5-8 mm aluminium', 'Snabb ledning men mycket lagrad värme', 'Stor massa tar tid att nå jämvikt', 'Använd stabil blötläggning på stora bäddar'],
        ['Kompositstaplar', 'Lagergränssnitt dominerar', 'Luftspalter och lim tillför termiskt motstånd', 'Mät verklig yttemperatur när möjligt'],
      ],
    },
    {
      type: 'tip',
      title: 'Återanvänd inte en glasfördröjning för fjäderstål',
      html: 'En fördröjning som är korrekt för en 4 mm borosilikatplatta kan vara överdriven för en 0,5 mm PEI-fjäderstålplåt. Omvänt kan en PEI-plåtsfördröjning vara för kort för glas och få första lagret att se ut som ett Z-offset problem.',
    },
    { type: 'title', text: 'Hur tjocklek ändrar uppvärmningstid och ytfördröjning', level: 2 },
    {
      type: 'paragraph',
      html: 'Tjocklek påverkar två olika delar av processen. För det första har en tjockare platta mer massa, så den kräver mer energi för att höja sin medeltemperatur. För det andra måste värme diffundera genom en längre väg innan ytan följer värmarsidan. Kalkylatorn uppskattar både den ideala uppvärmningsenergin och en diffusionsfördröjning genom plattan, och kombinerar dem sedan till en rekommenderad fördröjning efter att skrivaren rapporterar att bädden nått börvärdet.',
    },
    {
      type: 'paragraph',
      html: 'Relationen är inte linjär för ytfördröjning. Diffusionstiden ökar med kvadraten på tjockleken, vilket är varför en liten förändring från 3 mm till 4 mm glas kan ha större betydelse än väntat. En mycket tunn stålplåt kan jämna ut sig snabbt, men den magnetiska basen, limfilmen, PEI-beläggningen och instängd luft kan fortfarande sakta ner verklig överföring. På aluminiumbäddar sprider plattan själv värme snabbt, men bädden kan förbli globalt instabil om värmartäckningen är ojämn eller plattan är stor.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Termisk tröghet', definition: 'En plattas tendens att motstå temperaturförändringar eftersom den har massa och värmekapacitet.' },
        { term: 'Termisk diffusivitet', definition: 'En materialegenskap som kombinerar ledningsförmåga, densitet och värmekapacitet för att beskriva hur snabbt temperaturförändringar rör sig genom den.' },
        { term: 'Värme-blötläggning', definition: 'En avsiktlig väntan efter att ha nått börvärdet så att skrivytan, värmaren, bäraren och bäddstacken närmar sig ett stabilare tillstånd.' },
        { term: 'Kontaktmotstånd', definition: 'Extra termiskt motstånd orsakat av ofullständig kontakt, limlager, magneter, klämmor, luftspalter eller deformerade ytor.' },
        { term: 'Börvärdesöverskridning', definition: 'En kontrollhändelse där termistortemperaturen stiger över målet innan den stabiliseras, ofta orelaterad till yttemperaturen.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Tumregler för tjocklek',
      items: [
        'Tunna PEI-fjäderstålsplåtar stabiliseras vanligtvis snabbt när värmaren och den magnetiska basen är varma.',
        'Glasplattor över 3 mm förtjänar en verklig fördröjning innan första lagrets rörelser påbörjas.',
        'Stora aluminiumplattor kan behöva värme-blötläggning på grund av total massa även när ledningen är utmärkt.',
        'Luftspalter under avtagbara ytor kan dominera beräkningen; rengör kontaktytorna och sätt plattan konsekvent.',
      ],
    },
    { type: 'title', text: 'Värmareffekt, bäddstorlek och lagrad värme', level: 2 },
    {
      type: 'paragraph',
      html: 'Värmareffekt avgör hur snabbt energi kan komma in i bäddstacken. En 220 W värmare under en 235 mm glasbädd har en helt annan effekttäthet än en 600 W silikonvärmare under en 300 mm aluminiumplatta. Kalkylatorn använder effekt, måltemperatur, bäddarea och plattmassa för att uppskatta idealisk uppvärmningstid. Den tillämpar sedan en stabiliseringskomponent eftersom ytan vanligtvis fortsätter att förändras efter att det termistorstyrda systemet först nått målet.',
    },
    {
      type: 'paragraph',
      html: 'Effekt är inte ett botemedel mot dålig värmefördelning. En kraftfull värmare kan höja termistorn snabbt medan kanter, klämmor eller ostödda zoner ligger efter. Stora skrivare bör överväga värmartäckning, isolering, bäddmontering, kammartemperatur och om sondering påbörjas omedelbart efter börvärdeshändelsen. För ABS, ASA, nylon och andra varmare material är en stabil bädd och kammare ofta viktigare än att helt enkelt nå en hög numerisk bäddtemperatur.',
    },
    {
      type: 'table',
      headers: ['Symptom', 'Trolig termisk orsak', 'Justering att prova'],
      rows: [
        ['Första skirtlinjerna är matta eller fäster knappt', 'Ytan är fortfarande kallare än termistorn', 'Öka stabiliseringsfördröjningen före första lagret'],
        ['Mitten fäster men hörn lyfter', 'Ojämn bäddyttemperatur eller kantförluster', 'Lägg till isolering, kontrollera värmartäckning, vänta längre'],
        ['Sonderingsmask ändras mellan kalla och varma körningar', 'Bäddstacken expanderar eller relaxerar fortfarande', 'Blötlägg före sondering, inte bara före utskrift'],
        ['PID-graf ser stabil ut men vidhäftning varierar', 'Styrenheten är stabil vid givaren, inte vid skrivytan', 'Använd ytfördröjning och verifiera med kontakttermometer'],
      ],
    },
    {
      type: 'card',
      title: 'Varför utmatningen är en fördröjning efter börvärde',
      html: 'Skrivaren hanterar redan uppvärmning till måltemperaturen. Denna kalkylator svarar på en snävare första-lager fråga: när displayen säger att bädden är redo, hur många extra sekunder ska ytan vila innan extruderingen börjar?',
    },
    { type: 'title', text: 'PID-autotuning vs verklig bäddythestabilisering', level: 2 },
    {
      type: 'paragraph',
      html: 'Bädd-PID-autotuning är värdefullt eftersom det minskar oscillation vid den uppmätta sensorn. Det kan inte ta bort fysiken hos en tjock eller dåligt ledande platta. En glasyta kan fortfarande vara försenad medan undersidans sensor ser stabil ut. En fjäderstålsplåt kan se stabil ut snabbt, men en kall magnetisk bas kan fortsätta dra värme från den. Det mest repeterbara arbetsflödet är att justera styrenheten, använda en förnuftig bäddfördröjning och påbörja första-lager kalibrering först efter att bäddstacken är termiskt repeterbar.',
    },
    {
      type: 'proscons',
      title: 'Starta omedelbart vs vänta på stabilisering',
      items: [
        { pro: 'Omedelbar start minskar total skrivtid.', con: 'Första lagret kan skrivas ut på en yta under avsedd temperatur.' },
        { pro: 'En beräknad fördröjning förbättrar repeterbarheten mellan utskrifter.', con: 'Det lägger till stilleståndstid, särskilt på glas och stora aluminiumbäddar.' },
        { pro: 'Blötläggning före sondering kan minska maskdrift.', con: 'Mycket långa blötläggningar kan slösa energi om det valda materialet inte behöver dem.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Dölj inte termisk fördröjning med överdriven klämning',
      html: 'Om första lagret bara fäster vid aggressivt låg Z-offset kan bäddyten vara kallare än väntat. Överdriven klämning kan dölja det termiska problemet samtidigt som det orsakar elefantfot, munstycksskrapning och grov yttextur.',
    },
    {
      type: 'message',
      title: 'Bästa kalibreringssekvensen',
      html: 'Värm bädden, vänta den beräknade fördröjningen, kör mesh-sondering (om din skrivare sonderar varmt), justera sedan första-lager höjden. Kalibrering av Z-offset på en instabil bäddstack gör nästa utskrift inkonsekvent även när ingen mekanisk inställning har ändrats.',
    },
    { type: 'title', text: 'Hur du använder stabiliseringstiden i start G-kod', level: 2 },
    {
      type: 'paragraph',
      html: 'Den rekommenderade fördröjningen kan användas manuellt eller infogas i start G-koden. Ett enkelt arbetsflöde är att värma bädden med <code>M190</code>, vänta det beräknade antalet sekunder med ett dwell-kommando, fortsätt sedan med sondering, munstycksuppvärmning, rensning och utskrift. Vissa användare föredrar att värma bädden först, påbörja kammaruppvärmning eller munstycksförvärmning under blötläggningen, och bara sondera efter att bädden slutat driva.',
    },
    {
      type: 'list',
      items: [
        'Använd samma fördröjning när du jämför filament så att vidhäftningstester är rättvisa.',
        'Tillämpa längre fördröjningar för glas, höga bäddtemperaturer, stora plattor eller kalla rum.',
        'Tillämpa kortare fördröjningar för tunna fjäderstålsplåtar när den magnetiska basen redan är varm.',
        'Sondera efter blötläggning om din mask ändras med temperatur.',
        'Räkna om efter byte av byggplattmaterial, tjocklek, värmareffekt eller bäddstorlek.',
      ],
    },
    {
      type: 'tip',
      title: 'Använd dagens första utskrift som referensfall',
      html: 'En andra utskrift som startas omedelbart efter ett avslutat jobb börjar med en varm bäddstack och kan behöva mindre väntan. För kalibrering, bedöm fördröjningen från en kall skrivare eftersom det är det tillstånd som mest sannolikt avslöjar termisk fördröjning.',
    },
    {
      type: 'diagnostic',
      variant: 'success',
      title: 'En bra fördröjning gör första lagers justering tråkig',
      html: 'När värme-blötläggningen är rätt blir skirtform, linjeglans, hörnfästning och maskkompensation mer repeterbara från utskrift till utskrift. Du bör inte behöva jaga Z-offset varje gång maskinen startar kall.',
    },
    { type: 'title', text: 'Mätning och förbättring av verklig bäddstabilisering', level: 2 },
    {
      type: 'paragraph',
      html: 'Kalkylatorn är avsiktligt praktisk, men den bästa valideringen är en ytmätning. Ett kontakttermoelement fäst på skrivytan, en tunn sond under en offerplåt eller en kalibrerad infraröd termometer med känd emissionsförmåga kan avslöja hur lång tid ytan tar att stabilisera sig. Infraröda avläsningar på glas, PEI och blank metall kan vara missvisande, så använd konsekventa mätpunkter och undvik att jämföra olika ytfinishar som om de hade samma emissionsförmåga.',
    },
    {
      type: 'paragraph',
      html: 'Termisk prestanda kan ofta förbättras utan att ändra firmware. Isolering av undersidan minskar värmeförlust och förkortar uppvärmningen. Rengöring av den magnetiska plåten och flexplattan förbättrar kontakten. Byte av svaga klämmor, uträtning av deformerade plattor och undvikande av partiell värmarkontakt minskar ojämna temperaturfält. Slutna skrivare drar nytta av en varmare kammare, men kammarvärme ändrar också remmar, portalkomponenter och sonderingsbeteende, så termiska rutiner bör vara repeterbara snarare än improviserade.',
    },
    {
      type: 'table',
      headers: ['Uppgradering eller vana', 'Effekt på stabilisering', 'Försiktighet'],
      rows: [
        ['Isolering av undersida', 'Mindre värmeförlust och snabbare jämvikt', 'Säkerställ att kablar och lim är klassade för bäddtemperatur'],
        ['Bättre värmartäckning', 'Jämnare yttemperatur', 'Undvik bubblor och dålig silikonvärmarinfästning'],
        ['Konsekvent placering av avtagbar platta', 'Mindre variation i kontaktmotstånd', 'Damm eller filamentrester kan skapa lokala kalla punkter'],
        ['Het mesh-sondering efter blötläggning', 'Masken speglar expanderad bäddform', 'Sonderingsfäste och verktygshuvud måste också vara termiskt stabila'],
      ],
    },
    {
      type: 'summary',
      title: 'Praktisk stabiliseringschecklista',
      items: [
        'Välj det faktiska plattmaterialet; glas, stål och aluminium kräver olika fördröjningar.',
        'Ange tjocklek och värmareffekt istället för att lita på skrivarmodellnamn.',
        'Använd den beräknade fördröjningen efter att bädden rapporterar börvärde, särskilt före första-lager kalibrering.',
        'Mät ytan om vidhäftningsproblem kvarstår trots en stabil PID-graf.',
        'Kontrollera fördröjningen efter byte av byggplattor, magneter, isolering, värmare eller bäddstorlek.',
      ],
    },
  ],
  faq: [
    {
      question: 'Varför vänta efter att bädden nått måltemperaturen?',
      answer: 'Termistorn kan nå börvärdet innan den övre skrivytan har värmts upp helt. Att vänta låter plattan, beläggningen, magnetiska basen och värmarstacken närma sig en stabilare temperatur.',
    },
    {
      question: 'Behöver glas mer stabiliseringstid än PEI-fjäderstål?',
      answer: 'Vanligtvis ja. Borosilikatglas har mycket lägre värmeledningsförmåga och är ofta tjockare, så ytan ligger efter mer än en tunn PEI-belagd fjäderstålsplåt.',
    },
    {
      question: 'Är detta samma sak som PID-autotuning?',
      answer: 'Nej. PID-autotuning styr värmarens beteende vid sensorn. Denna kalkylator uppskattar hur länge den verkliga skrivytan ska vila efter att den sensorstyrda bädden nått börvärdet.',
    },
    {
      question: 'Ska jag sondera före eller efter värme-blötläggningen?',
      answer: 'Om din mask ändras när bädden värms, sondera efter att bädden har stabiliserats. Det gör masken närmare formen som används under första lagret.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Välj byggplattmaterial', text: 'Välj borosilikatglas, PEI-fjäderstål eller aluminium så att beräkningen använder rätt ledningsförmåga och värmekapacitet.' },
    { name: 'Ange den fysiska bäddstacken', text: 'Lägg till plattjocklek, uppvärmd yta, måltemperatur och värmareffekt.' },
    { name: 'Läs den rekommenderade fördröjningen', text: 'Använd startfördröjningen efter att skrivaren rapporterar att bädden nått börvärdet.' },
    { name: 'Tillämpa det konsekvent', text: 'Använd samma värme-blötläggningsfördröjning före sondering eller första-lager kalibrering för repeterbara resultat.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Kalkylator för Termisk Tröghetsstabilisering av Skrivbädd',
      description: 'Uppskatta stabiliseringsfördröjningen av ytan på en uppvärmd 3D-skrivarbädd från plattmaterial, tjocklek, temperatur, värmareffekt och bäddstorlek.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Varför vänta efter att bädden nått måltemperaturen?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Termistorn kan nå börvärdet innan den övre skrivytan har värmts upp helt, så en värme-blötläggningsfördröjning förbättrar repeterbarheten av första lagret.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Hur man uppskattar stabiliseringsfördröjningen för en 3D-skrivarbädd',
      step: [
        { '@type': 'HowToStep', text: 'Välj byggplattmaterial.' },
        { '@type': 'HowToStep', text: 'Ange tjocklek, måltemperatur, värmareffekt och bäddstorlek.' },
        { '@type': 'HowToStep', text: 'Vänta den rekommenderade fördröjningen efter att bädden nått börvärdet.' },
        { '@type': 'HowToStep', text: 'Sondera eller skriv ut efter att bäddstacken har stabiliserats.' },
      ],
    },
  ],
};
