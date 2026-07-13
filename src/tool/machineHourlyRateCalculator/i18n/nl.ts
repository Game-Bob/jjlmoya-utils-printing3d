import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MachineHourlyRateCalculatorUI } from '../ui';

const slug = 'machine-uurtarief-productiekosten-calculator';
const title = 'Machine uurtarief & Productiekosten Calculator';
const description =
  'Bereken de werkelijke operationele kosten van een 3D-printer op basis van stroomverbruik, elektriciteitstarief, aankoopprijs, gebruiksduur en printduur.';

const faqData = [
  {
    question: 'Hoe bereken ik de uurkosten van een 3D-printer?',
    answer:
      'Tel de elektriciteitskosten per uur op bij de afschrijvingskosten per uur. Elektriciteit is watt gedeeld door 1000 vermenigvuldigd met het elektriciteitstarief. Afschrijving is de aankoopprijs gedeeld door de gebruiksduur in uren.',
  },
  {
    question: 'Waarom is afschrijving belangrijk bij het prijzen van 3D-prints?',
    answer:
      'Afschrijving vertegenwoordigt de machinewaarde die wordt verbruikt tijdens de productie van onderdelen. Het negeren ervan kan een print winstgevend laten lijken terwijl de printer stilletjes inruilwaarde, betrouwbaarheid en vervangingscapaciteit verliest.',
  },
  {
    question: 'Welke gebruiksduur moet ik aanhouden voor een desktop 3D-printer?',
    answer:
      'Een richtwaarde van 5000 uur is een praktisch startpunt voor veel desktopprinters, maar productiefarms moeten dit vervangen door onderhoudshistorie, verwachte vervangingscyclus en werkelijke bedrijfstijdgegevens.',
  },
  {
    question: 'Is dit hetzelfde als een volledige 3D-printofferte?',
    answer:
      'Nee. Deze calculator dekt machine-elektriciteit en hardware-amortisatie. Een complete offerte moet ook filament of hars, arbeid, mislukte prints, nabewerking, verpakking, overhead en marge omvatten.',
  },
];

const howToData = [
  { name: 'Voer het gemeten stroomverbruik van de printer in', text: 'Gebruik het gemiddelde wattage tijdens een vergelijkbare print, niet alleen het nominale vermogen van de voeding.' },
  { name: 'Stel de printduur in', text: 'Verplaats de duurschuif naar de verwachte machinetijd voor de klus of productiebatch.' },
  { name: 'Voeg energie- en activagegevens toe', text: 'Voer het elektriciteitstarief, de aankoopprijs van de machine en de geschatte gebruiksduur in bedrijfsuren in.' },
  { name: 'Lees de kostenverdeling', text: 'Gebruik de totale kosten, het uurtarief en de samenstelling van elektriciteit versus afschrijving om machinetijd te prijzen.' },
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
    '3D-printer stroomverbruikcalculator',
    'Machine-uurafschrijvingscalculator',
    'Operationele kosten 3D-print schatter',
    'Kostensamenstelling elektriciteit versus amortisatie',
  ],
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<MachineHourlyRateCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Machine-uurtarief invoer',
    resultsAriaLabel: 'Machine-uurtarief resultaten',
    settingsLabel: 'Offerte-instellingen',
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
    durationLabel: 'Productietijd',
    powerLabel: 'Gemiddeld vermogen',
    tariffLabel: 'Elektriciteitstarief',
    purchasePriceLabel: 'Aankoopprijs machine',
    usefulLifeLabel: 'Geschatte gebruiksduur',
    totalCostLabel: 'Operationele kosten ticker',
    hourlyRateLabel: 'Machine-uurtarief',
    electricityLabel: 'Elektriciteit',
    depreciationLabel: 'Amortisatie',
    electricityPerHourLabel: 'Energiekosten per uur',
    depreciationPerHourLabel: 'Activa-kosten per uur',
    compositionLabel: 'Kostensamenstelling elektriciteit versus amortisatie',
    insightLabel: 'Winstgevendheidsinzicht',
    utilizationLabel: 'Bezettingsdruk',
    utilizationValueLabel: 'Gebruiksduur verbruikt',
    utilizationHint: 'Deze klus verbruikt het getoonde aandeel van de verwachte machinelevensduur.',
    batchLabel: 'Batch operationele kosten',
    energyUsedLabel: 'Energie verbruikt',
    costDriverLabel: 'Hoofddrijfveer',
    energyDriverLabel: 'Energie',
    assetDriverLabel: 'Actief',
    balancedDriverLabel: 'Evenwichtig',
    electricityDominant: 'De klus is energieledig: tarief, formaat van het verwarmde bed, kamertemperatuur en opwarmtijd in stilstand beïnvloeden de offerte meer dan de aankoopprijs.',
    depreciationDominant: 'De klus is activaledig: machineprijs en gebruiksduur domineren, dus elk ongebruikt uur verzwakt de economie van deze printer.',
    balancedDominant: 'Elektriciteit en amortisatie liggen dicht genoeg bij elkaar dat beide in het uurtarief van de werkplaats moeten verschijnen in plaats van één in de marge te verbergen.',
    hoursUnit: 'h',
    wattsUnit: 'W',
    kwhUnit: 'kWh',
    currencySymbol: '\u20ac',
  },
  seo: [
    { type: 'title', text: 'Wat een machine-uurtarief betekent in 3D-printen', level: 2 },
    {
      type: 'paragraph',
      html: 'Een <strong>machine-uurtarief</strong> zijn de kosten van het een uur productief bezig houden van een printer voordat materiaal, arbeid, nabewerking, verpakking en winst worden toegevoegd. Bij 3D-printen wordt dit getal vaak onderschat omdat zichtbare kosten zoals filament gemakkelijker opvallen dan verborgen kosten zoals elektriciteit en hardware-afschrijving. Een desktop-printer verbruikt misschien maar een paar cent aan stroom per uur, maar een professionele machine die enkele duizenden euro\'s kost, moet zijn waarde terugverdienen over een beperkte gebruiksduur. Deze calculator isoleert die twee machinekosten zodat de productie-offerte begint met een meetbare basis.',
    },
    {
      type: 'paragraph',
      html: 'De calculator gebruikt twee transparante formules. Elektrische kosten zijn <code>(W / 1000) x T x tarief</code>, waarbij <code>W</code> het gemiddelde wattage is, <code>T</code> de printduur in uren en tarief de elektriciteitsprijs per kilowattuur. Amortisatiekosten zijn <code>(aankoopprijs / gebruiksduur in uren) x T</code>. De totale operationele kosten zijn de som van beide. Omdat beide termen schalen met de tijd, leveren dezelfde formules ook een schoon uurtarief op: elektriciteit per uur plus afschrijving per uur.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'W / 1000', label: 'Zet watt om naar kilowatt', icon: 'mdi:flash-outline' },
        { value: 'kWh', label: 'Energie-factureringseenheid', icon: 'mdi:meter-electric-outline' },
        { value: 'P / life', label: 'Lineaire machinekosten per uur', icon: 'mdi:chart-line' },
        { value: 'Ce + Ca', label: 'Totale operationele kosten', icon: 'mdi:calculator-variant-outline' },
      ],
    },
    {
      type: 'tip',
      title: 'Gebruik gemeten gemiddeld wattage',
      html: '<p>Het voedinglabel is een maximale capaciteit, niet het verbruik van de printer tijdens een echte klus. Meet voor een betere <strong>invoer voor de 3D-printer stroomverbruikcalculator</strong> een representatieve print met een energiemeter en middeld de opwarm-, print-, ventilator-, bed- en stand-byfasen.</p>',
    },
    { type: 'title', text: 'Elektriciteitskosten: watt omzetten in productiekosten', level: 2 },
    {
      type: 'paragraph',
      html: 'Elektriciteitskosten zijn afhankelijk van het gemiddelde stroomverbruik, niet alleen van het nominale wattage van de printer. Een machine met een 350 W voeding kan gemiddeld 90 W verbruiken bij een kleine PLA-klus na het opwarmen, terwijl een grote gesloten printer met een verwarmd bed en kamer veel hoger kan blijven voor technische polymeren. Het verwarmde bedoppervlak, de kamertemperatuur, de nozzletemperatuur, de omgevingstemperatuur, de ventilatorcyclus en de inactieve tijd voor het verwijderen van het onderdeel kunnen allemaal het effectieve vermogen veranderen.',
    },
    {
      type: 'paragraph',
      html: 'De omrekening naar kilowattuur is eenvoudig maar belangrijk. Een 180 W printer die 8 uur draait, verbruikt <code>0,18 kW x 8 h = 1,44 kWh</code>. Bij €0,25 per kWh kost dat deel van de klus €0,36. Dat klinkt misschien klein, maar farms met veel machines, lange PETG- of ASA-klussen, verwarmde droogkasten en klimaatbeheersing kunnen kleine uurlijkse verschillen omzetten in een significante maandelijkse rekening.',
    },
    {
      type: 'table',
      headers: ['Invoer', 'Wat in te vullen', 'Veelgemaakte fout'],
      rows: [
        ['Gemiddeld vermogen', 'Gemeten watt over de hele printcyclus', 'Het nominale vermogen van de voeding of piek opwarmverbruik gebruiken.'],
        ['Duur', 'Machinebezettingstijd in uren', 'Voorverwarmen, afkoelen of wachttijden negeren.'],
        ['Tarief', 'Werkelijke prijs per kWh van de rekening', 'Een verouderd nationaal gemiddelde gebruiken in plaats van het werkplaatstarief.'],
        ['Valuta', 'De valuta gebruikt in uw offertemodel', 'Euro hardwarekosten mengen met dollar energieaannames.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Energiekosten zijn laag tot schaal het zichtbaar maakt',
      badge: 'Farmplanning',
      html: '<p>Eén kleine printer rechtvaardigt misschien geen uitgebreide energieboekhouding. Twintig printers die elke dag lange klussen draaien wel. Dezelfde elektriciteitsformule kan per klus, per printer, per cel of per maand worden gebruikt door alleen de duur te wijzigen.</p>',
    },
    { type: 'title', text: 'Amortisatie: de verborgen kosten achter printerwinstgevendheid', level: 2 },
    {
      type: 'paragraph',
      html: 'Amortisatie is de financiële erkenning dat een printer wordt verbruikt door gebruik. Geleiders slijten, ventilatoren verouderen, bedden verliezen vlakheid, hotends raken verstopt, elektronica raakt verouderd en de machine moet uiteindelijk worden vervangen. Als een printer €900 kost en de werkplaats verwacht 5000 gebruiksuren, verbruikt de machine €0,18 aan activawaarde elk productief uur. Een tienuurse klus draagt daarom €1,80 aan hardwarekosten voordat materiaal of arbeid worden overwogen.',
    },
    {
      type: 'paragraph',
      html: 'Lineaire afschrijving is hier bewust praktisch. Het probeert geen belastingwet, inruilwaarde, financiering of onderhoudsgebeurtenissen te modelleren. In plaats daarvan beantwoordt het de productieprijsvraag: hoeveel van deze machineaankoop moet aan elk gewerkt uur worden toegewezen? Dat getal is de basis voor <strong>uurafschrijvingstarief 3D-printer</strong> zoekopdrachten en voor elke farm die wil dat vervangingsgeld bestaat wanneer de printer het einde van zijn economische levensduur bereikt.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Hobby desktopprinter',
          description: 'Lage aankoopprijs en onregelmatig gebruik. Elektriciteit kan zichtbaar zijn bij klussen met verwarmd bed, maar amortisatie doet er nog toe als onderdelen worden verkocht.',
          icon: 'mdi:printer-3d-nozzle-outline',
          points: ['Lagere kapitaalblootstelling', 'Gebruiksduur vaak onzeker', 'Handarbeid domineert meestal offertes'],
        },
        {
          title: 'Prosumer farmprinter',
          description: 'Gematigde aankoopprijs, hoge bedrijfstijd, herhaalde materialen en veel identieke klussen maken uurafschrijving een belangrijke offerte-invoer.',
          icon: 'mdi:factory',
          highlight: true,
          points: ['Goede pasvorm voor 3000-8000 uur levensaannames', 'Werkelijke reparaties bijhouden', 'Machinetijd scheiden van arbeid'],
        },
        {
          title: 'Industrieel systeem',
          description: 'Hoge kapitaalkosten betekenen dat amortisatie kan domineren. Servicecontracten, bouwkameromgeving en kwalificatietijd kunnen extra kostlijnen nodig maken.',
          icon: 'mdi:domain',
          points: ['Kapitaalkosten domineren', 'Stilstand is duur', 'Service en faciliteitsoverhead toevoegen'],
        },
      ],
    },
    {
      type: 'message',
      title: 'De gebruiksduurinvoer verdient aandacht',
      ariaLabel: 'Notitie over gebruiksduur',
      html: '<p>De standaard 5000 uur is een startpunt, geen universele waarheid. Een licht gebruikte hobbymachine kan verouderd raken voordat dat getal wordt bereikt, terwijl een goed onderhouden farmmachine het kan overschrijden. Gebruik het getal dat past bij uw vervangingsbeleid.</p>',
    },
    { type: 'title', text: 'Gebruiksduur kiezen zonder giswerk', level: 2 },
    {
      type: 'paragraph',
      html: 'De gebruiksduur is de meest gevoelige boekhoudkundige aanname in deze calculator omdat deze in de noemer van de amortisatieformule staat. Als dezelfde €900-printer 3000 gebruiksuren krijgt toegewezen, is de afschrijving €0,30 per uur. Bij 9000 gebruiksuren daalt deze naar €0,10 per uur. De printer is niet veranderd, maar de bedrijfsverwachting is veranderd. Daarom moet een offerte de gekozen levensduuraanname documenteren in plaats van deze in een generieke opslag te begraven.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Gebruik onderhoudslogboeken wanneer beschikbaar: nozzlevervangingen, ventilatorstoringen, geleiderslijtage, riemen, boards, hotends en bedoppervlakken onthullen de werkelijke kostencurve.',
        'Scheid printerfamilies. Een kleine bedslinger, een CoreXY-productiemachine en een harsprinter moeten niet één gebruiksduurgetal delen.',
        'Lagere gebruiksduur voor experimentele machines die vele uren besteden aan mislukte afstelling, materiaaltests of klantspecifieke validatie.',
        'Verhoog de gebruiksduur alleen wanneer bedrijfstijd, preventief onderhoud, reserveonderdelen en vervangingshistorie de aanname ondersteunen.',
        'Herzie de aanname na grote upgrades omdat een nieuw bewegingssysteem, behuizing of hotend de economische levensduur van het actief kan veranderen.',
      ],
    },
    {
      type: 'table',
      headers: ['Gebruiksduuraanname', 'Beste pasvorm', 'Prijskonsequentie'],
      rows: [
        ['2000-3000 h', 'Experimentele, goedkope, slecht gedocumenteerde of zwaar gebruikte machines', 'Hogere uurafschrijving beschermt vervangingskapitaal.'],
        ['4000-6000 h', 'Standaard desktop- of prosumermachines met regelmatig productiegebruik', 'Evenwichtig startbereik voor veel kleine farms.'],
        ['7000-10000 h', 'Stabiel printerpark met onderhoudsgegevens en gecontroleerde materialen', 'Lagere uurlijkse activakosten maar vereist vertrouwen in bedrijfstijd.'],
        ['Boven 10000 h', 'Industriële of zwaar onderhouden activa met gedocumenteerde levenscyclus', 'Alleen nuttig wanneer service en stilstand apart worden verantwoord.'],
      ],
    },
    {
      type: 'summary',
      title: 'Checklist gebruiksduur',
      items: [
        'Stem de gebruiksduur af op de printerklasse, niet op een generiek internetgetal.',
        'Documenteer de aanname zodat offertes maanden later uitlegbaar blijven.',
        'Herbereken wanneer de machine wordt herbestemd van hobbygebruik naar betaalde productie.',
      ],
    },
    { type: 'title', text: 'De splitsing elektriciteit versus amortisatie lezen', level: 2 },
    {
      type: 'paragraph',
      html: 'De samenstellingsbalk toont of een klus energieledig of activaledig is. Energieledige klussen reageren sterk op elektriciteitstarief, verwarmde bedstrategie, kamertemperatuur, opwarmgedrag en ruimteomstandigheden. Activaledige klussen reageren sterker op aankoopprijs, gebruiksduur en bezetting. Een evenwichtige splitsing betekent dat geen van beide lijnen mag worden genegeerd; beide horen in het basis machine-uurtarief.',
    },
    {
      type: 'paragraph',
      html: 'Deze splitsing is nuttig omdat dezelfde totale kosten verschillende remedies kunnen hebben. Als elektriciteit domineert, kunnen het verlagen van de bedtemperatuur, het groeperen van onderdelen om herhaald opwarmen te voorkomen, het isoleren van een behuizing of het printen tijdens lagere tariefvensters helpen. Als amortisatie domineert, is de betere hefboom bezetting: houd de printer bezet met winstgevende klussen, vermijd inactief kapitaal en kies de machinegrootte zorgvuldig in plaats van capaciteit te kopen die ongebruikt blijft.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Elektriciteitskosten', definition: 'De gefactureerde energie verbruikt door de printer tijdens de geselecteerde duur.' },
        { term: 'Amortisatie', definition: 'Het aandeel van de machineaankoopprijs toegewezen aan de door de klus gebruikte uren.' },
        { term: 'Gebruiksduur', definition: 'Het verwachte aantal productieve bedrijfsuren voordat de printer economisch wordt vervangen.' },
        { term: 'Machine-uurtarief', definition: 'Elektriciteitskosten per uur plus afschrijvingskosten per uur vóór materiaal, arbeid, overhead en winst.' },
        { term: 'Operationele kosten', definition: 'De machinekosten gemaakt om de productie gedurende een specifieke duur draaiende te houden.' },
      ],
    },
    {
      type: 'proscons',
      title: 'Wat deze calculator wel en niet bevat',
      items: [
        { pro: 'Bevat gemeten stroomverbruik, elektriciteitstarief, duur, aankoopprijs en gebruiksduur.', con: 'Bevat geen filament, hars, ondersteuningen, mislukte prints, arbeid, huur, software, verpakking of marge.' },
        { pro: 'Toont de kostensplitsing zodat gebruikers de belangrijkste economische drijfveer kunnen identificeren.', con: 'Gebruikt lineaire afschrijving, dus het modelleert geen fiscale afschrijvingsschema\'s of inruilwaarde.' },
        { pro: 'Werkt voor één print, één batch of een maandelijkse productieblok door de duur te wijzigen.', con: 'Vereist eerlijke vermogens- en gebruiksduuraannames om valse precisie te voorkomen.' },
      ],
    },
    { type: 'title', text: 'Het resultaat gebruiken om een winstgevende prijs per uur te bepalen', level: 2 },
    {
      type: 'paragraph',
      html: 'Het berekende uurtarief is de vloer voor machinetijd, niet de uiteindelijke verkoopprijs. Een complete 3D-printofferte voegt normaal gesproken materiaal, ondersteuningsafval, spoelafval, operatorarbeid, slice- en voorbereidingstijd, faalprinttoeslag, onderhoudsverbruiksgoederen, huur, software, betalingskosten, belastingen en de beoogde marge toe. Het machine-uurtarief blijft essentieel omdat het voorkomt dat de printer zelf als gratis wordt behandeld.',
    },
    {
      type: 'paragraph',
      html: 'Als de calculator bijvoorbeeld €0,225 per machine-uur teruggeeft en een klus bezet de printer 14 uur, zijn de operationele machinekosten €3,15. Als materiaal €4,80 is, arbeidstoewijzing €6,00, faaltoeslag €1,20 en daarna marge wordt toegepast, wordt de offerte financieel traceerbaar. Wanneer een klant vraagt waarom een lange print meer kost dan het plasticgewicht suggereert, wordt machinetijd een uitlegbare lijnpost.',
    },
    {
      type: 'card',
      icon: 'mdi:cash-clock',
      title: 'Winstgevendheidsinzicht',
      html: '<p>Deze berekening is de basis voor het definiëren van de <strong>prijs per uur</strong> van elke printfarm. Zodra de machinekosten per uur bekend zijn, kan de werkplaats besluiten of machinetijd direct wordt gefactureerd, in de materiaalopslag wordt gebundeld, of intern wordt gebruikt om printers en materialen te vergelijken.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Offerteer niet alleen per gram',
      badge: 'Verborgen kosten',
      html: '<p>Een licht onderdeel dat de printer 20 uur bezet, kan meer machinecapaciteit verbruiken dan een zwaar onderdeel dat snel wordt geprint. Gewichtsgebaseerde prijsstelling zonder machinetijd onderwaardeert vaak langzame, hoge, fijnlaagse of lage-doorstroming klussen.</p>',
    },
    { type: 'title', text: 'Praktische voorbeelden voor operationele kosten 3D-print schattingen', level: 2 },
    {
      type: 'paragraph',
      html: 'Een afgestelde PLA desktop-klus kan gemiddeld 120 W verbruiken, 6 uur duren, een tarief van €0,22/kWh gebruiken en op een €600-printer met een gebruiksduur van 5000 uur zitten. Elektriciteit is slechts €0,158, terwijl amortisatie €0,720 is. De totale machine-operationele kosten zijn ongeveer €0,878 en het uurtarief is ongeveer €0,146. In dit geval is de klus duidelijk activaledig: betere machinebezetting beïnvloedt de winstgevendheid meer dan kleine vermogensveranderingen.',
    },
    {
      type: 'paragraph',
      html: 'Een ASA-klus op een grotere gesloten printer kan gemiddeld 420 W verbruiken gedurende 18 uur bij €0,30/kWh. Als de printer €1800 kost en de gebruiksduur 4500 uur is, zijn de elektriciteitskosten €2,268 en de amortisatie €7,200, voor een totale machinekost van €9,468. Hoewel het energieverbruik veel hoger is, domineert afschrijving nog steeds omdat de kapitaalkosten en de lange machinebezetting aanzienlijk zijn.',
    },
    {
      type: 'paragraph',
      html: 'Een harsprinter kan een ander verhaal vertellen. De printer verbruikt misschien bescheiden stroom, maar de berekening is nog steeds van toepassing op machinebezetting. Als een bouw 9 uur duurt op een machine van €2500 die naar verwachting 4000 gebruiksuren produceert, is alleen de amortisatie al €5,625. Dat getal hoort in de offerte voordat hars, handschoenen, IPA of wasvloeistof, nabehandeling, ondersteuningen en schoonmaakwerk worden toegevoegd.',
    },
    {
      type: 'summary',
      title: 'Beslisregels',
      items: [
        'Gebruik gemeten gemiddeld wattage voor elektriciteitsnauwkeurigheid.',
        'Gebruik realistische gebruiksduururen voor activa-terugwinning.',
        'Behandel het resultaat als de machinetijdvloer en voeg vervolgens materiaal, arbeid, overhead, risico en marge toe.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
