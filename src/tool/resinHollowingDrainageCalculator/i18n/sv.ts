import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ResinHollowingDrainageCalculatorUI } from '../ui';

const slug = 'kalkylator-urholkning-dranering-sla-harts';
const title = 'Kalkylator för Urholkning och Dränering av SLA Harts';
const description = 'Beräkna konservativ väggtjocklek, dräneringshålsdiameter, minsta antal ventilationshål och komplexitetsjusterade hartsbesparingar för ihåliga SLA- och DLP-hartstryck.';

const faqData = [
  { question: 'Varför rekommenderar kalkylatorn alltid minst två dräneringshål?', answer: 'Ett ihåligt hartstryck behöver en väg för flytande harts att rinna ut och en annan väg för luft att komma in. Två öppningar hjälper också till att bryta sugkoppseffekten mot släppfilmen under avlösningen.' },
  { question: 'Varför är hartsbesparingen lägre än den teoretiska hålvolymen?', answer: 'Flytande harts stannar kvar på innerväggar, ribbor, hörn, stöd och små fickor. Kalkylatorn drar av 5, 10 eller 15 procent från den teoretiska hålvolymen baserat på geometrisk komplexitet.' },
  { question: 'Är 1,5 mm väggtjocklek alltid tillräckligt?', answer: 'Nej. Det är en minsta säkerhetsgräns för många skrivbordshartstryck. Höga delar, tunga delar, tekniska belastningar, varma miljöer eller aggressiv slipning kan kräva tjockare väggar.' },
  { question: 'Var ska dräneringshål placeras?', answer: 'Placera hålen så nära byggplattans sida och de lägsta hartssamlingspunkterna som möjligt i utskriftsriktningen, och kontrollera sedan i slicern att inga slutna hålrum återstår.' },
];

const howToData = [
  { name: 'Ange modellvolym och höjd', text: 'Använd slicervolymen efter stöd och orientering, och ange sedan höjden på delen i utskriftsriktningen.' },
  { name: 'Välj geometrisk komplexitet', text: 'Välj enkel, måttlig eller hög komplexitet så att instängt harts dras av från den teoretiska hålbesparingen.' },
  { name: 'Välj hartstyp', text: 'Välj standard-, seg- eller tekniskt harts. Mer trögflytande harts får en rekommendation om större dräneringsdiameter.' },
  { name: 'Kontrollera rekommendationer för vägg och dränering', text: 'Använd väggtjocklek, dräneringsdiameter, antal hål och checklistan innan du slicear den slutliga filen.' },
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
  inLanguage: 'sv',
};

const seoData = [
    {
      type: 'title',
      text: 'Vad gör SLA-harts Hålighets- och Dräneringskalkylatorn?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Detta verktyg löser en av de mest kritiska utmaningarna inom SLA-, DLP- och LCD-harts 3D-utskrift: att optimera ihåliga modeller. Att skriva ut solida hartsdelar är dyrt, tungt och ökar dragkrafterna under utskriftsprocessen. Att göra modellen ihålig minskar materialanvändningen, men att införa ihåliga håligheter utan ordentlig dränering leder till instängt ohärdat harts och utskriftsfel på grund av vakuumkrafter. Denna kalkylator beräknar den idealiska väggtjockleken, föreslår rätt diameter och mängd dräneringshål och uppskattar den faktiska hartsbesparingen genom att ta hänsyn till det flytande harts som oundvikligen fastnar på innerväggarna i den utskrivna delen.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
          {
            value: '1,5 mm',
            label: 'Minsta rekommenderade väggtjocklek för stationär SLA'
          },
          {
            value: '2 hål',
            label: 'Minsta antal ventilationshål som krävs för att bryta vakuumet'
          },
          {
            value: '10-15%',
            label: 'Hartsvolymreducering på grund av intern ythäftning'
          },
          {
            value: '30-70%',
            label: 'Genomsnittlig total viktminskning som uppnås genom hålighetsbildning'
          }
        ]
    },
    {
      type: 'title',
      text: 'Hur väggtjockleken påverkar hartsbesparingen',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Väggtjockleken är den primära variabeln som avgör mängden harts som sparas. En tjockare vägg ökar den strukturella styrkan men förbrukar snabbt mer harts, vilket minskar effektiviteten av att göra modellen ihålig. Omvänt blir en vägg som är för tunn ömtålig, benägen att skeva under härdningen och kan misslyckas med att motstå de mekaniska dragkrafterna när skrivaren separerar varje lager från FEP-filmen. Målet är att hitta den optimala punkten där modellen behåller sin form och funktion samtidigt som materialbesparingarna maximeras.'
    },
    {
      type: 'proscons',
      title: 'För och nackdelar med ihåliga hartstryck',
      items: [
          {
            pro: 'Massiv minskning av materialkostnader och total utskriftsvikt',
            con: 'Kräver efterbehandling för att tvätta och härda interna håligheter'
          },
          {
            pro: 'Mindre yta per lager minskar dragkrafterna på FEP-filmen',
            con: 'Felaktigt placerade hål kan förstöra modellens visuella estetik'
          },
          {
            pro: 'Minskar termisk spänning och skevhet under efterhärdning',
            con: 'Risk för att instängt flytande harts gör att delen spricker senare'
          }
        ]
    },
    {
      type: 'title',
      text: 'Förstå sugkoppseffekten i ihåliga hartsutskrifter',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Vid utskrift av ihåliga delar utan ventilation skapas ett vakuum mellan modellen och hartstankens film när plattformen höjs. Denna sugkoppseffekt kan dra loss modellen eller spräcka dess väggar.'
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Faran med förseglade ihåliga utrymmen',
      html: 'Lämna aldrig ett ihåligt utrymme helt förseglat. Instängt flytande harts inuti en utskriven del kommer långsamt att bryta ner de härdade väggarna över tid, vilket såsom småningom leder till att modellen spricker, läcker giftigt harts eller helt faller sönder. Inkludera alltid minst två hål för att tvätta insidan och härda den med en intern UV-ljuskälla.'
    },
    {
      type: 'title',
      text: 'Bästa praxis for placering av dräneringshål',
      level: 2
    },
    {
      type: 'list',
      items: [
          'Placera dräneringshål så nära byggplattan som möjligt för att låta hartset slippa ut tidigt under utskriften.',
          'Använd alltid minst två hål: ett för att låta det flytande hartset rinna ut och ett annat för att låta luft komma in.',
          'Rikta hålen på osynliga ytor, såsom undersidan av baser eller bakom fogar, för att bevara estetiken.',
          'Se till att varje isolerad intern kammare eller ficka har sin egen uppsättning dräneringshål.'
        ]
    },
    {
      type: 'title',
      text: 'Hur kalkylatorn justerar för geometrisk komplexitet',
      level: 2
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
          {
            title: 'Enkel geometri',
            description: 'Modeller med låg detaljnivå, sfärer eller block. Fångar minimalt med harts (ca 5 %) på platta inre ytor.'
          },
          {
            title: 'Måttlig geometri',
            description: 'Karaktärsmodeller of vanliga mekaniska delar. Interna stöd och kurvor behåller måttligt med harts (ca 10 %).',
            highlight: true
          },
          {
            title: 'Hög komplexitet',
            description: 'Mycket detaljerade miniatyrer, fackverksstrukturer eller komplexa ihåliga kanaler. Behåller betydande mängder harts (ca 15 %+) på grund av kapillärverkan.'
          }
        ]
    },
    {
      type: 'title',
      text: 'Förstå hartsviskositet och storlek på dräneringshål',
      level: 2
    },
    {
      type: 'table',
      headers: [
          'Hartsklass',
          'Viskositetsnivå',
          'Minsta håldiameter',
          'Rekommenderad placering'
        ],
      rows: [
          [
              'Standardharts',
              'Låg-Medium',
              '2,0 - 3,0 mm',
              'Bas eller dolda plana ytor'
            ],
          [
              'Tufft / Flexibelt',
              'Medium-Hög',
              '3,0 - 4,5 mm',
              'Hörn och fogar for att undvika avflagning'
            ],
          [
              'Tekniskt / Gjutbart',
              'Mycket Hög',
              '4,5 - 6,0 mm',
              'Direkt siktlinje för gravitationsdränering'
            ]
        ]
    },
    {
      type: 'title',
      text: 'När man ska öka väggtjockleken över 1,5 mm',
      level: 2
    },
    {
      type: 'tip',
      title: 'Skala och funktion dikterar väggtjockleken',
      html: 'Även om 1,5 mm är ett tillförlitligt minimum för små visningsfigurer, bör du öka väggtjockleken för större utskrifter. För delar som är högre än 150 mm, sikta på 2,0 mm till 2,5 mm väggar. För belastade mekaniska komponenter eller delar som skrivs ut med flexibla hartser bör väggarna vara 3,0 mm eller tjockare för att förhindra strukturell kollaps under belastning.'
    },
    {
      type: 'title',
      text: 'Teknisk ordlista för ihålig SLA-utskrift',
      level: 2
    },
    {
      type: 'glossary',
      items: [
          {
            term: 'SLA Hålighetsbildning',
            definition: 'Processen att omvandla en solid 3D-modell till ett ihåligt skal med en specifik väggtjocklek för att spara harts och utskriftstid.'
          },
          {
            term: 'Sugkoppseffekt',
            definition: 'Vakuumkraften som skapas när en sluten ihålig hålighet dras bort från släppfilmen under utskrift.'
          },
          {
            term: 'Dragkraft',
            definition: 'Den mekaniska spänning som modellen och stöden utsätts för när det härdade lagret separeras från karets botten.'
          },
          {
            term: 'Hartsinneslutning',
            definition: 'Kvarhållandet av flytande ohärdat harts inuti inre hörn, stöd och texturer på grund av ytspänning.'
          }
        ]
    },
    {
      type: 'title',
      text: 'Sammanfattande checklista for framgångsrika ihåliga utskrifter',
      level: 2
    },
    {
      type: 'summary',
      title: 'SLA Checklista före skivning',
      items: [
          'Kontrollera att hålighetsväggarnas tjocklek är lämplig för modellens skala.',
          'Bekräfta att minst två dräneringshål är placerade vid de lägsta utskriftspunkterna.',
          'Kontrollera om det finns isolerade inre tomrum som saknar ventilation.',
          'Planera för intern tvätt med IPA och intern UV-led-härdning.'
        ]
    }
  ];

export const content: ToolLocaleContent & { ui: ResinHollowingDrainageCalculatorUI } = {
  slug, title, description,
  ui: {
    unitSystemLabel: 'Enheter',
    metricLabel: 'Metrisk',
    imperialLabel: 'US',
    modelInputsLabel: 'Modellinmatningar',
    volumeLabel: 'Total Modellvolym',
    heightLabel: 'Delhöjd',
    complexityLabel: 'Geometrisk Komplexitet',
    resinTypeLabel: 'Hartstyp',
    simpleLabel: 'Enkel',
    moderateLabel: 'Måttlig',
    highLabel: 'Hög',
    standardLabel: 'Standard',
    toughLabel: 'Seg',
    engineeringLabel: 'Teknisk',
    resultsLabel: 'Resultat för Urholkning och Dränering',
    wallThicknessLabel: 'Rekommenderad Vägg',
    drainDiameterLabel: 'Dräneringsdiameter',
    drainHoleCountLabel: 'Minsta Hål',
    adjustedSavingLabel: 'Beräknad Hartsbesparing',
    adjustedSavingNote: 'Justerad efter komplexitet för att ta hänsyn till flytande harts som stannar kvar på inre ytor.',
    trapFactorLabel: 'Faktor för Instängt Harts',
    trapFactorHelp: 'Denna faktor ändras med den geometriska komplexiteten för att kompensera för ytspänningen hos trögflytande harts i blinda hålrum.',
    theoreticalSavingLabel: 'Teoretisk Hålvolym',
    trappedAllowanceLabel: 'Marginal för Instängt Harts',
    savingUnitLabel: 'Besparing',
    percentLabel: '%',
    cm3Unit: 'cm3',
    cubicInUnit: 'in3',
    mmUnit: 'mm',
    inchUnit: 'in',
    mlUnit: 'ml',
    drainPlacementNote: 'Obs: Dräneringshål ska placeras nära byggplattans sida och de lägsta hartssamlingspunkterna i utskriftsriktningen.',
    vacuumWarning: 'Ihåliga kroppar kräver alltid minst två dräneringshål för att bryta vakuumet mot släppfilmen.',
    trappedResinWarning: 'Komplexa geometrier stänger in flytande harts inuti; denna beräkning uppskattar marginalen.',
    checklistTitle: 'Checklista Före Slicing',
    checklistItems: ['Se till att dräneringshålen är placerade i området nära byggplattan.', 'Kontrollera att väggtjockleken inte understiger 1,5 mm.', 'Bekräfta att det inte finns några slutna hartsöar eller tomrum i modellen.'],
  },
  seo: seoData, faq: faqData, bibliography, howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
