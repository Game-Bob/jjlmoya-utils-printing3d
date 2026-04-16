import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ShrinkageCalculatorUI } from '../ui';

const slug = 'kalkulator-skurczu-druku-3d';
const title = 'Kalkulator Skurczu 3D: Współczynnik Skali i Skurcz';
const description = 'Oblicz, o ile powinieneś przeskalować swoje projekty 3D w zależności od materiału (ABS, Nylon, ASA), aby skompensować skurcz termiczny i uzyskać dokładne wymiary.';

const faqData = [
  {
    question: 'Dlaczego ABS kurczy się bardziej niż PLA?',
    answer: 'ABS to polimer amorficzny, który wymaga wyższych temperatur do wytłaczania. Podczas stygnięcia z 250°C do temperatury pokojowej gradient termiczny jest większy, co powoduje, że cząsteczki upakowują się bardziej agresywnie niż w przypadku PLA.',
  },
  {
    question: 'Kiedy powinienem użyć kalibracji manualnej?',
    answer: 'Należy jej używać przy każdej zmianie marki filamentu lub gdy wymagane są tolerancje mechaniczne poniżej 0,1 mm. Współczynnik skurczu może się różnić nawet między różnymi kolorami tej samej marki.',
  },
  {
    question: 'Czy wypełnienie wpływa na skurcz?',
    answer: 'Tak. Im wyższa gęstość wypełnienia, tym większa ilość materiału wywierająca siłę w kierunku środka elementu podczas jego stygnięcia. Pełne elementy zwykle kurczą się nieco bardziej niż puste w środku.',
  },
];

const howToData = [
  {
    name: 'Wybierz materiał',
    text: 'Wybierz spośród predefiniowanych materiałów (ABS, ASA, Nylon itp.), aby zastosować standardowe współczynniki branżowe.',
  },
  {
    name: 'Skalibruj na podstawie rzeczywistego wydruku',
    text: 'Jeśli potrzebujesz pełnej precyzji, wydrukuj kostkę 100 mm, zmierz ją po wystygnięciu i wprowadź dane w trybie kalibracji.',
  },
  {
    name: 'Skopiuj współczynnik do Slicera',
    text: 'Skopiuj wynikowy procent skali i zastosuj go do odpowiednich osi w oprogramowaniu slicer (Cura, PrusaSlicer).',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'PLN' },
  inLanguage: 'pl',
};

export const content: ToolLocaleContent<ShrinkageCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    tabPresets: 'Ustawienia Materiału',
    tabCalibration: 'Kalibracja Manualna',
    labelDefaultMaterial: 'Materiał Domyślny',
    labelEstimatedShrinkage: 'Szacowany Skurcz',
    unitPercent: '%',
    labelDesignSize: 'Wymiar Projektowy (Slicer)',
    labelRealSize: 'Wymiar Wydrukowany (Rzeczywisty)',
    unitMm: 'mm',
    labelAxesCompensation: 'Kompensacja Osi',
    labelAxisXY: 'X/Y',
    labelAxisZ: 'Z',
    textZWarning: '* Oś Z zwykle kurczy się mniej ze względu na przyczepność międzywarstwową.',
    labelRecommendationTitle: 'Rekomendacja Techniczna',
    labelResultSlicerScale: 'PROCENT SKALI (SLICER)',
    labelResultFactor: 'WSPÓŁCZYNNIK MNOŻNIKOWY',
    btnCopy: 'Kopiuj Procent',
    btnCopied: 'Skopiowano!',
    recommendations: {
      'ABS': 'Zalecana jest temperatura komory wynosząca co najmniej 40°C, aby zminimalizować dodatkowe odkształcenia (warping) spowodowane skurczem.',
      'ASA': 'Doskonała odporność na promieniowanie UV. Zredukuj chłodzenie warstw, aby poprawić przyczepność strukturalną.',
      'Nylon': 'Materiał bardzo higroskopijny. Susz w temperaturze 80°C przez 6-8 godzin przed drukowaniem, aby uniknąć pęcherzyków.',
      'PETG': 'Mniejszy skurcz. Użyj mnożnika przepływu (flow) na poziomie 95-98%, jeśli występuje nadmierna ekstruzja w gęstych elementach.',
      'PLA': 'Minimalny skurcz. Zapewnij dobry przepływ powietrza (100% wentylatora warstwy) dla drobnych detali.'
    }
  },
  seo: [
    {
      type: 'title',
      text: 'Kalkulator Skurczu Druku 3D: Precyzja Wymiarowa',
      level: 1,
    },
    {
      type: 'paragraph',
      html: 'Jeśli jesteś entuzjastą <strong>druku 3D</strong>, prawdopodobnie spotkałeś się z tym problemem: projektujesz element o idealnych wymiarach (np. kostkę 20x20x20 mm), drukujesz go, a po zmierzeniu suwmiarką okazuje się, że ma 19,7 mm. Co się stało? Odpowiedzią jest <strong>skurcz materiału</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Skurcz to nieuniknione zjawisko fizyczne, które występuje, gdy termoplasty przechodzą ze stanu stopionego (w wysokich temperaturach) do stanu stałego w temperaturze pokojowej. Podczas stygnięcia cząsteczki reorganizują się i „zacieśniają”, zmniejszając całkowitą objętość elementu. Nasz <strong>kalkulator skurczu</strong> został zaprojektowany, aby pomóc Ci przewidzieć tę zmianę i dostosować skalę w slicerze tak, aby elementy pasowały za pierwszym razem.',
    },
    {
      type: 'title',
      text: 'Dlaczego tworzywa się kurczą?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'W druku FDM (Fused Deposition Modeling) nakładamy warstwy gorącego tworzywa (między 200°C a 300°C) na powierzchnię. Podczas stygnięcia materiał podlega zjawisku znanemu jako <strong>współczynnik rozszerzalności cieplnej</strong>. Zasadniczo energia termiczna utrzymuje cząsteczki z dala od siebie; gdy ta energia znika, siły międzycząsteczkowe przyciągają je bliżej siebie.',
    },
    {
      type: 'paragraph',
      html: 'Nie wszystkie materiały zachowują się tak samo. Tworzywa amorficzne (jak PLA) mają nieuporządkowaną strukturę, która wykazuje mniejszy skurcz. W przeciwieństwie do nich tworzywa, które mają tendencję do krystalizacji lub wymagają bardzo wysokich temperatur (jak ABS czy Nylon), charakteryzują się znacznie bardziej agresywnym i trudnym do kontrolowania skurczem.',
    },
    {
      type: 'title',
      text: 'Typowe materiały i ich zakresy skurczu',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'ABS (akrylonitryl-butadien-styren): 0,8% – 2,0%. Jest to jeden z najtrudniejszych materiałów ze względu na duży skurcz, który często powoduje „warping” (odkształcanie narożników).',
        'ASA: 0,5% – 0,9%. Odporna na promieniowanie UV alternatywa dla ABS z nieco mniejszym skurczem.',
        'Nylon (PA): 0,7% – 2,5%. W zależności od tego, czy zawiera włókno węglowe, czy szklane, jego skurcz może się drastycznie różnić.',
        'PETG: 0,2% – 0,5%. Bardzo stabilny wymiarowo, idealny do części mechanicznych, które nie wymagają odporności termicznej ABS.',
        'PLA: 0,1% – 0,3%. Złoty standard łatwości użytkowania; jego skurcz jest niemal pomijalny w większości zastosowań.',
      ],
    },
    {
      type: 'title',
      text: 'Jak obliczyć współczynnik skali',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Wielu użytkowników popełnia błąd polegający na prostym „dodaniu procentów” (jeśli brakuje 2%, skalują do 102%). Jednak matematycznie, aby skompensować stratę, skala musi być nieco inna. Poprawny wzór używany przez nasz kalkulator to: <br><strong>Współczynnik skali = 1 / (1 - S)</strong>',
    },
    {
      type: 'paragraph',
      html: 'Gdzie <strong>S</strong> to procent skurczu wyrażony w ułamku dziesiętnym (np. 0,02 dla 2%). Przykładowo, dla materiału, który kurczy się o 2%, współczynnik skali wynosi 1,0204, co oznacza, że w slicerze (Cura, PrusaSlicer, Bambu Studio) musimy ustawić skalę na <strong>102,04%</strong>.',
    },
    {
      type: 'title',
      text: 'Kalibracja Manualna: Wymiar Projektowy vs Rzeczywisty',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Proces kalibracji odwrotnej jest prosty: wydrukuj obiekt testowy o znanym wymiarze (np. kostkę kalibracyjną 100 mm). Gdy całkowicie wystygnie (odczekanie co najmniej 30 minut jest kluczowe), zmierz element suwmiarką cyfrową. Wprowadź obie wartości do kalkulatora, a on poda Ci dokładny procent korekty dla tej konkretnej szpuli filamentu.',
    },
    {
      type: 'title',
      text: 'Niejednorodny skurcz: Problem osi X, Y i Z',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'W druku 3D fizyka nie jest taka sama we wszystkich kierunkach. Ponieważ warstwy są nakładane jedna na drugą, <strong>przyczepność międzywarstwowa</strong> w osi Z zwykle ogranicza skurcz pionowy. Zazwyczaj zauważysz, że wymiary w płaszczyźnie poziomej (osie X i Y) wymagają większej kompensacji niż wysokość (oś Z).',
    },
    {
      type: 'tip',
      title: 'Pro Tip',
      html: '<p>Jeśli pracujesz z nylonem lub materiałami technicznymi, zawsze mierz element 24 godziny po wydrukowaniu. Niektóre tworzywa pochłaniają wilgoć z otoczenia i mogą nieznacznie „puchnąć” po wystygnięciu, zmieniając ostateczny wymiar.</p>',
    },
    {
      type: 'title',
      text: 'Czynniki wpływające na ostateczną dokładność',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Temperatura ekstrudera: Przy wyższych temperaturach materiał wypływa bardziej rozszerzony, ale też zwykle gwałtowniej stygnie.',
        'Temperatura stołu: Gorący stół zapobiega szybszemu kurczeniu się podstawy elementu niż jego góry, redukując warping.',
        'Gęstość wypełnienia: Bardzo gęste elementy mają większą masę tworzywa wywierającą wewnętrzną siłę skurczu w kierunku środka.',
        'Wentylator warstwy: W przypadku materiałów takich jak ABS zbyt mocny nawiew może powodować pęknięcia oraz nadmierny, nieregularny skurcz.',
      ],
    },
  ],
  faqTitle: 'Najczęściej Zadawane Pytania',
  faq: faqData,
  bibliographyTitle: 'Referencje',
  bibliography: [
    {
      name: 'Simplify3D: Precyzja wymiarowa i skurcz',
      url: 'https://www.simplify3d.com/resources/print-quality-troubleshooting/dimensional-accuracy/',
    },
    {
      name: 'Prusa Research: Tabela materiałów i współczynniki skurczu',
      url: 'https://help.prusa3d.com/materials',
    },
    {
      name: 'MatterHackers: Zrozumieć skurcz materiałów w druku 3D',
      url: 'https://www.matterhackers.com/articles/how-to-fix-shrinkage-and-warping',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
