import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ShrinkageCalculatorUI } from '../ui';

const slug = '3d-print-krimp-calculator';
const title = '3D Krimp Calculator: Schalingsfactor en Krimp';
const description = 'Bereken hoeveel je je 3D-ontwerpen moet schalen op basis van het materiaal (ABS, Nylon, ASA) om thermische krimp te compenseren en exacte afmetingen te krijgen.';

const faqData = [
  {
    question: 'Waarom krimpt ABS meer dan PLA?',
    answer: 'ABS is een amorf polymeer dat hogere temperaturen vereist om geëxtrudeerd te worden. Bij het afkoelen van 250°C naar kamertemperatuur is de thermische gradiënt groter, waardoor moleculen zich agressiever samentrekken dan bij PLA.',
  },
  {
    question: 'Wanneer moet ik handmatige kalibratie gebruiken?',
    answer: 'Je zou dit moeten gebruiken telkens wanneer je van filamentmerk wisselt of wanneer je mechanische toleranties onder de 0,1 mm nodig hebt. De krimpcoëfficiënt kan zelfs variëren tussen verschillende kleuren van hetzelfde merk.',
  },
  {
    question: 'Heeft de infill invloed op de krimp?',
    answer: 'Ja. Hoe hoger de infill-dichtheid, hoe groter de hoeveelheid materiaal die kracht uitoefent naar het midden van het onderdeel terwijl het afkoelt. Massieve onderdelen hebben de neiging iets meer te krimpen dan holle onderdelen.',
  },
];

const howToData = [
  {
    name: 'Selecteer je materiaal',
    text: 'Kies uit vooraf ingestelde materialen (ABS, ASA, Nylon, enz.) om de standaardcoëfficiënten van de industrie toe te passen.',
  },
  {
    name: 'Kalibreer met een echt onderdeel',
    text: 'Als je totale precisie nodig hebt, print dan een kubus van 100 mm, meet deze zodra deze is afgekoeld en voer de gegevens in de kalibratiemodus in.',
  },
  {
    name: 'Kopieer de factor naar de Slicer',
    text: 'Kopieer het resulterende schalingspercentage en pas het toe op de overeenkomstige assen van je slicer-software (Cura, PrusaSlicer).',
  },
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

const howToSchema: WithContext<HowToThing> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<ShrinkageCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    tabPresets: 'Materiaalinstellingen',
    tabCalibration: 'Handmatige kalibratie',
    labelDefaultMaterial: 'Standaardmateriaal',
    labelEstimatedShrinkage: 'Geschatte krimp',
    unitPercent: '%',
    labelDesignSize: 'Ontwerpafmeting (Slicer)',
    labelRealSize: 'Gemeten onderdeelafmeting (Echt)',
    unitMm: 'mm',
    labelAxesCompensation: 'Ascompensatie',
    labelAxisXY: 'X/Y',
    labelAxisZ: 'Z',
    textZWarning: '* De Z-as krimpt meestal minder door de hechting tussen de lagen.',
    labelRecommendationTitle: 'Technische aanbeveling',
    labelResultSlicerScale: 'SCHALINGSPERCENTAGE (SLICER)',
    labelResultFactor: 'VERMENIGVULDIGINGSFACTOR',
    btnCopy: 'Percentage kopiëren',
    btnCopied: 'Gekopieerd!',
    recommendations: {
      'ABS': 'Een kamertemperatuur van ten minste 40°C wordt aanbevolen om extra warping door krimp te minimaliseren.',
      'ASA': 'Uitstekende UV-bestendigheid. Verminder de laagkoeling om de structurele hechting te verbeteren.',
      'Nylon': 'Zeer hygroscopisch materiaal. Droog het gedurende 6-8 uur op 80°C voordat je gaat printen om bellen te voorkomen.',
      'PETG': 'Minder krimp. Gebruik een flow-multiplier van 95-98% als je over-extrusie hebt in massieve onderdelen.',
      'PLA': 'Minimale krimp. Zorg voor een goede luchtstroom (100% laagventilator) voor fijne details.'
    }
  },
  seo: [
    {
      type: 'title',
      text: '3D-print Krimp Calculator: Dimensionale nauwkeurigheid',
      level: 1,
    },
    {
      type: 'paragraph',
      html: 'Als je een liefhebber bent van <strong>3D-printen</strong>, heb je waarschijnlijk wel eens te maken gehad met dit probleem: je ontwerpt een onderdeel met perfecte afmetingen (bijvoorbeeld een kubus van 20x20x20 mm), je print het, en bij het meten met de schuifmaat ontdek je dat het 19,7 mm is. Wat is er gebeurd? Het antwoord is <strong>materiaalkrimp</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Krimp is een onvermijdelijk fysiek verschijnsel dat optreedt wanneer thermoplasten overgaan van hun gesmolten toestand (bij hoge temperaturen) naar hun vaste toestand bij kamertemperatuur. Terwijl ze afkoelen, reorganiseren de moleculen zich en "trekken ze samen", waardoor het totale volume van het onderdeel afneemt. Onze <strong>krimp calculator</strong> is ontworpen om je te helpen deze verandering te voorspellen en de schaal in je slicer aan te passen, zodat je onderdelen de eerste keer direct passen.',
    },
    {
      type: 'title',
      text: 'Waarom krimpen kunststoffen?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bij FDM-printen (Fused Deposition Modeling) leggen we lagen heet plastic (tussen 200°C en 300°C) op een oppervlak. Terwijl het materiaal afkoelt, ondergaat het wat bekend staat als de <strong>thermische uitzettingscoëfficiënt</strong>. In wezen houdt thermische energie de moleculen uit elkaar; wanneer die energie verdwijnt, trekken intermoleculaire krachten ze dichter bij elkaar.',
    },
    {
      type: 'paragraph',
      html: 'Niet alle materialen gedragen zich hetzelfde. Amorfe kunststoffen (zoals PLA) hebben een ongeordende structuur die de neiging heeft minder te krimpen. Daarentegen hebben kunststoffen die de neiging hebben te kristalliseren of zeer hoge temperaturen vereisen (zoals ABS of Nylon) een veel agressievere en moeilijk te controleren krimp.',
    },
    {
      type: 'title',
      text: 'Veelvoorkomende materialen en hun krimpbereik',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'ABS (Acrylonitril-butadieen-styreen): 0,8% – 2,0%. Het is een van de moeilijkste materialen vanwege de hoge krimp, wat vaak "warping" (vervorming van de hoeken) veroorzaakt.',
        'ASA: 0,5% – 0,9%. Een UV-bestendig alternatief voor ABS met een wat meer beheerste krimp.',
        'Nylon (PA): 0,7% – 2,5%. Afhankelijk van de vulling met koolstof- of glasvezel kan de krimp drastisch variëren.',
        'PETG: 0,2% – 0,5%. Zeer dimensionaal stabiel, ideaal voor mechanische onderdelen die niet de thermische resistentie van ABS nodig hebben.',
        'PLA: 0,1% – 0,3%. De gouden standaard voor gebruiksgemak; de krimp is bijna verwaarloosbaar voor de meeste toepassingen.',
      ],
    },
    {
      type: 'title',
      text: 'Hoe bereken je de schalingsfactor',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Veel gebruikers maken de fout om simpelweg "het percentage op te tellen" (als er 2% ontbreekt, schalen ze naar 102%). Wiskundig gezien moet de schaling echter iets anders zijn om een verlies te compenseren. De juiste formule die door onze calculator wordt gebruikt is: <br><strong>Schalingsfactor = 1 / (1 - S)</strong>',
    },
    {
      type: 'paragraph',
      html: 'Waarbij <strong>S</strong> het krimppercentage is uitgedrukt in decimalen (bijv. 0,02 voor 2%). Voor een materiaal dat 2% krimpt, is de schalingsfactor bijvoorbeeld 1,0204, wat betekent dat we in de slicer (Cura, PrusaSlicer, Bambu Studio) de schaal op <strong>102,04%</strong> moeten instellen.',
    },
    {
      type: 'title',
      text: 'Handmatige kalibratie: Gewenste vs. Echte meting',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Het omgekeerde kalibratieproces is eenvoudig: print een testobject met een bekende afmeting (bijv. een kalibratiekubus van 100 mm). Zodra deze volledig is afgekoeld (minstens 30 minuten wachten is cruciaal), meet je het onderdeel met een digitale schuifmaat. Voer beide waarden in de calculator in en deze geeft je het exacte aanpassingspercentage voor die filamentrol.',
    },
    {
      type: 'title',
      text: 'Niet-uniforme krimp: Het probleem met de X-, Y- en Z-assen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bij 3D-printen is de fysica niet in alle richtingen hetzelfde. Omdat lagen bovenop elkaar worden gelegd, beperkt de <strong>laaghechting</strong> in de Z-as meestal de verticale krimp. Normaal gesproken zul je merken dat metingen in het horizontale vlak (X- en Y-as) meer compensatie vereisen dan de hoogte (Z-as).',
    },
    {
      type: 'tip',
      title: 'Pro tip',
      html: '<p>Als je met nylon of technische materialen werkt, meet het onderdeel dan altijd 24 uur na het printen. Sommige kunststoffen absorberen omgevingsvocht en kunnen na het afkoelen een beetje "opzwellen", wat de uiteindelijke meting verandert.</p>',
    },
    {
      type: 'title',
      text: 'Factoren die de uiteindelijke nauwkeurigheid beïnvloeden',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Extrudertemperatuur: Bij hogere temperaturen gaat het materiaal meer uitgezet naar binnen, maar lijdt het meestal ook onder plotselinge afkoeling.',
        'Bedtemperatuur: Een heet bed voorkomt dat de basis van het onderdeel sneller krimpt dan de bovenkant, wat warping vermindert.',
        'Infill-dichtheid: Zeer dichte onderdelen hebben meer plastic massa die interne krimpkracht naar het midden uitoefent.',
        'Laagventilator: Bij materialen zoals ABS kan een te sterke ventilator scheuren en overmatige, onregelmatige krimp veroorzaken.',
      ],
    },
  ],
  faqTitle: 'Veelgestelde vragen',
  faq: faqData,
  bibliographyTitle: 'Referenties',
  bibliography: [
    {
      name: 'Simplify3D: Dimensionale nauwkeurigheid en krimp',
      url: 'https://www.simplify3d.com/resources/print-quality-troubleshooting/dimensional-accuracy/',
    },
    {
      name: 'Prusa Research: Materiaaltabel en krimpfactoren',
      url: 'https://help.prusa3d.com/materials',
    },
    {
      name: 'MatterHackers: Materiaalkrimp bij 3D-printen begrijpen',
      url: 'https://www.matterhackers.com/articles/how-to-fix-shrinkage-and-warping',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
