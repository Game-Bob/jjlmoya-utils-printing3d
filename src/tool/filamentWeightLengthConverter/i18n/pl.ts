import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FilamentWeightLengthConverterUI } from '../ui';

const slug = 'konwerter-wagi-dlugosci-filamentu';
const title = 'Konwerter wagi filamentu na długość: dokładne oszacowanie materiału';
const description = 'Przelicz gramy filamentu na metry i objętość na podstawie gęstości materiału, średnicy 1,75 mm lub 2,85 mm z natychmiastowym sprawdzeniem wystarczalności szpuli.';

const faqData = [
  {
    question: 'Jak przeliczyć gramy filamentu na metry?',
    answer: 'Podziel masę przez gęstość materiału, aby uzyskać objętość, przelicz tę objętość z centymetrów sześciennych na milimetry sześcienne, a następnie podziel przez pole powierzchni przekroju kołowego filamentu.',
  },
  {
    question: 'Dlaczego gęstość materiału filamentu ma znaczenie?',
    answer: 'Ta sama waga PLA, PETG, ABS, TPU lub filamentu z wypełnieniem zajmuje inną objętość, ponieważ każdy polimer ma inną gęstość. Długość to objętość podzielona przez pole przekroju filamentu, więc gęstość bezpośrednio zmienia oszacowaną liczbę metrów.',
  },
  {
    question: 'Czy filament o średnicy 1,75 mm zawsze ma tę samą długość na kilogram?',
    answer: 'Nie. Tolerancja średnicy, gęstość materiału, dodatki i wilgotność - wszystko to zmienia rzeczywistą długość. Kalkulator podaje szacunkową wartość planistyczną opartą na nominalnej średnicy i gęstości.',
  },
  {
    question: 'Czy mogę użyć kalkulatora dla filamentu 2,85 mm?',
    answer: 'Tak. Wpisz 2,85 mm lub przełącz na jednostki imperialne i wprowadź równoważną średnicę. Pole przekroju aktualizuje się natychmiast.',
  },
];

const howToData = [
  { name: 'Wprowadź masę filamentu', text: 'Wpisz ilość filamentu podaną przez slicer, wagę pozostałą na szpuli lub dowolną wartość w gramach, którą chcesz przeliczyć.' },
  { name: 'Wybierz materiał', text: 'Wybierz PLA, PETG, ABS, TPU, Nylon, PC lub mieszankę z wypełnieniem, aby kalkulator mógł użyć odpowiedniej gęstości.' },
  { name: 'Ustaw średnicę filamentu', text: 'Użyj 1,75 mm, 2,85 mm lub zmierzonej średnicy, jeśli chcesz, aby oszacowanie długości odzwierciedlało konkretną szpulę.' },
  { name: 'Sprawdź wystarczalność szpuli', text: 'Opcjonalnie wprowadź pozostałą wagę szpuli, aby sprawdzić, czy masz wystarczająco dużo materiału, oraz dokładny nadmiar lub niedobór.' },
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
  applicationCategory: 'EngineeringApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'pl',
};

export const content: ToolLocaleContent<FilamentWeightLengthConverterUI> = {
  slug,
  title,
  description,
  ui: {
    unitSystemLabel: 'Jednostki',
    metricLabel: 'Metryczne',
    imperialLabel: 'Imperialne',
    inputsTitle: 'Szacowanie zapasu materiału',
    materialLabel: 'Materiał',
    materialPlaLabel: 'PLA',
    materialPetgLabel: 'PETG',
    materialAbsLabel: 'ABS',
    materialAsaLabel: 'ASA',
    materialTpuLabel: 'TPU',
    materialPaLabel: 'Nylon PA',
    materialPcLabel: 'Poliwęglan',
    materialWoodLabel: 'PLA z wypełnieniem drewnianym',
    materialCarbonLabel: 'Mieszanka z włóknem węglowym',
    materialMetalLabel: 'PLA z wypełnieniem metalowym',
    densityLabel: 'Gęstość',
    densityUnit: 'g/cm3',
    weightLabel: 'Waga filamentu',
    weightSliderLabel: 'Suwak wagi wydruku',
    diameterLabel: 'Średnica filamentu',
    stockLabel: 'Pozostała waga szpuli',
    stockPlaceholder: 'Opcjonalne sprawdzenie zapasu',
    spoolStateLabel: 'Stan szpuli',
    spoolScaleLabel: 'Zużyta / dostępna masa',
    cutLineLabel: 'Linia zatrzymania przy końcu filamentu',
    resultLengthLabel: 'Szacowana długość filamentu',
    resultVolumeLabel: 'Objętość polimeru',
    resultAreaLabel: 'Pole przekroju',
    resultGramsMeterLabel: 'Masa liniowa',
    enoughLabel: 'Wystarczająca szpula',
    shortLabel: 'Niewystarczająca szpula',
    noStockLabel: 'Sprawdzenie zapasu nieaktywne',
    surplusLabel: 'Nadmiar',
    missingLabel: 'Brak',
    formulaLabel: 'Ścieżka obliczeń',
    formulaText: 'objętość = masa / gęstość -> długość = objętość / pole przekroju',
    linearMassMetricUnit: 'g/m',
    linearMassImperialUnit: 'oz/ft',
    gramsUnit: 'g',
    ouncesUnit: 'oz',
    metersUnit: 'm',
    feetUnit: 'ft',
    cm3Unit: 'cm3',
    in3Unit: 'in3',
    in2Unit: 'in2',
    mm2Unit: 'mm2',
    mmUnit: 'mm',
    inchUnit: 'cal',
  },
  seo: [
    { type: 'title', text: 'Dlaczego kalkulator gramów filamentu na metry oparty na gęstości jest dokładniejszy', level: 2 },
    { type: 'paragraph', html: 'Konwerter wagi filamentu na długość jest tak dobry, jak model materiału, który za nim stoi. Generyczny kalkulator często zakłada, że jeden kilogram każdego filamentu zajmuje tę samą objętość, ale filament FFF sprzedawany jest na wagę, podczas gdy ekstruder zużywa cylindryczne pasmo na długość. Pomostem między tymi dwoma pomiarami jest <strong>gęstość</strong>. PLA o gęstości około 1,24 g/cm3, PETG około 1,27 g/cm3, ABS blisko 1,04 g/cm3 i TPU około 1,21 g/cm3 nie przeliczają się na tę samą liczbę metrów, nawet gdy waga szpuli i średnica są identyczne.' },
    { type: 'paragraph', html: 'Obliczenia zaczynają się od masy. Dzieląc gramy przez gęstość, otrzymujemy objętość w centymetrach sześciennych. Objętość ta jest następnie konwertowana na milimetry sześcienne, ponieważ średnica filamentu jest zwykle mierzona w milimetrach. Pole przekroju to pole koła: pi razy promień do kwadratu. Na koniec objętość podzielona przez pole przekroju daje długość w milimetrach, którą można przeliczyć na metry lub stopy. Wynik to praktyczne oszacowanie pozwalające sprawdzić, czy materiał zgłoszony przez slicer wystarczy do wydrukowania z zapasu znajdującego się aktualnie na szpuli.' },
    { type: 'stats', columns: 4, items: [
      { value: '1,24', label: 'Typowa gęstość PLA w g/cm3' },
      { value: '2,405', label: 'Pole przekroju w mm2 dla nominalnego filamentu 1,75 mm' },
      { value: '6,379', label: 'Pole przekroju w mm2 dla nominalnego filamentu 2,85 mm' },
      { value: '3 dane', label: 'Masa, gęstość i średnica określają przeliczenie' },
    ] },
    { type: 'table', headers: ['Materiał', 'Gęstość planistyczna', 'Dlaczego ta wartość ma znaczenie'], rows: [
      ['PLA', '1,24 g/cm3', 'Powszechny punkt odniesienia dla druku desktopowego i dobra linia bazowa dla prototypów.'],
      ['PETG', '1,27 g/cm3', 'Nieco gęstszy niż PLA, więc ta sama ilość gramów daje mniejszą długość.'],
      ['ABS', '1,04 g/cm3', 'Niższa gęstość oznacza większą długość na gram niż w przypadku PLA przy tej samej średnicy.'],
      ['TPU', '1,21 g/cm3', 'Elastyczny filament jest zbliżony do PLA, ale nadal warto modelować go osobno.'],
      ['Mieszanki z wypełnieniem', 'Zmienna', 'Dodatki drewniane, z włókna węglowego, metalowe i szklane mogą znacząco odchylić gęstość od bazowego polimeru.'],
    ] },
    { type: 'title', text: 'Dokładne wzory przeliczeniowe do szacowania zapasu filamentu', level: 2 },
    { type: 'paragraph', html: 'Model matematyczny jest celowo prosty, ponieważ każdy składnik ma znaczenie fizyczne. Pole przekroju to <code>pi x (średnica / 2)^2</code>. Objętość to <code>waga / gęstość</code>. Długość to <code>objętość x 1000 / pole przekroju</code>, gdy objętość jest w cm3, a pole przekroju w mm2; wynik jest w milimetrach, następnie dzielony przez 1000 dla metrów. Jest to ta sama geometria używana do określania objętości ekstruzji, maksymalnego przepływu i zużycia materiału w slicerach.' },
    { type: 'diagnostic', variant: 'info', title: 'Tolerancja średnicy to największa codzienna niewiadoma', badge: 'Uwaga pomiarowa', html: 'Nominalna szpula 1,75 mm może nie mieć dokładnie 1,75 mm na całej długości rolki. Ponieważ pole zależy od promienia do kwadratu, niewielka różnica średnicy zmienia obliczoną długość i rzeczywistą objętość ekstruzji. Do standardowego sprawdzania zapasu wystarczy średnica nominalna. Do kalibracji użyj suwmiarki w kilku punktach i wprowadź średnią średnicę.' },
    { type: 'list', items: [
      'Używaj gramów podczas kopiowania zużycia materiału z slicerów takich jak PrusaSlicer, Cura, Bambu Studio czy OrcaSlicer.',
      'Użyj zmierzonej pozostałej wagi szpuli po odjęciu tary pustej szpuli, jeśli chcesz uzyskać wiarygodne sprawdzenie wystarczalności.',
      'Korzystaj z gęstości z karty technicznej producenta podczas drukowania specjalistycznych kompozytów.',
      'Użyj 2,85 mm zamiast 1,75 mm, gdy maszyna podaje grubszy filament, ponieważ pole przekroju różni się diametralnie.',
    ] },
    { type: 'tip', title: 'Nie wliczaj tary pustej szpuli do pozostałego zapasu', html: 'Szpula na wadze zawiera wagę plastikowego lub kartonowego rdzenia. Jeśli pusta szpula waży 180 g, a waga pokazuje 430 g, użyteczny filament to około 250 g. Wprowadzenie całkowitej wagi szpuli sprawia, że zielony sygnał wystarczalności jest zbyt optymistyczny.' },
    { type: 'title', text: 'Długość filamentu 1,75 mm vs 2,85 mm przy tej samej wadze', level: 2 },
    { type: 'paragraph', html: 'Średnica ma większy wpływ, niż wielu użytkowników się spodziewa. Pasmo 2,85 mm ma ponad dwukrotnie większe pole przekroju niż pasmo 1,75 mm, więc jeden kilogram daje znacznie mniej metrów. Nie oznacza to, że któraś średnica jest sama w sobie bardziej ekonomiczna; obie mogą wydrukować tę samą objętość elementu. Oznacza to, że liczby długości zapasu nie można porównywać bez kontekstu średnicy. Gdy slicer podaje gramy, normalizuje już zużycie materiału na masę; gdy czujnik końca filamentu w drukarce lub ręczne oszacowanie szpuli operuje w metrach, średnica staje się kluczowa.' },
    { type: 'comparative', columns: 2, items: [
      { title: 'Filament 1,75 mm', description: 'Dłuższe pasmo na kilogram i dominujący format obecnych drukarek desktopowych.', points: ['Przydatny w kompaktowych ekstruderach', 'Więcej metrów na tej samej masie szpuli', 'Pole nominalne około 2,405 mm2'] },
      { title: 'Filament 2,85 mm', description: 'Krótsze pasmo na kilogram z większym przekrojem podawania, często spotykany w starszych lub profesjonalnych maszynach.', points: ['Pole nominalne około 6,379 mm2', 'Mniej wrażliwy na kompresję w podajniku w niektórych konfiguracjach', 'Nie można stosować założeń dla 1,75 mm'] },
    ] },
    { type: 'table', headers: ['Scenariusz', 'Co się zmienia', 'Konsekwencja planistyczna'], rows: [
      ['Ten sam polimer, większa średnica', 'Zwiększa się pole', 'Metry maleją dla tych samych gramów.'],
      ['Ta sama średnica, mniejsza gęstość', 'Zwiększa się objętość', 'Metry rosną dla tych samych gramów.'],
      ['Te same gramy, filament z wypełnieniem', 'Gęstość może wzrosnąć', 'Metry mogą być krótsze niż oczekiwano.'],
      ['Wilgotny filament', 'Zmierzone masa nieznacznie wzrasta', 'Szpula może wydawać się cięższa bez dodawania użytecznego suchego polimeru.'],
    ] },
    { type: 'title', text: 'Jak korzystać ze sprawdzenia wystarczalności szpuli przed rozpoczęciem długiego wydruku', level: 2 },
    { type: 'paragraph', html: 'Opcjonalne pole pozostałego zapasu zamienia konwerter w tablicę sygnalizującą "start" lub "stop". Wprowadź masę wymaganą przez zadanie jako wagę filamentu, a następnie wpisz użyteczny filament pozostały na bieżącej szpuli. Wynik porównuje gramy bezpośrednio, a także przelicza różnicę na metry lub stopy przy użyciu tego samego modelu materiału i średnicy. Kolor zielony oznacza, że szpula ma wystarczający zapas; czerwony oznacza niedobór i pokazuje dokładną różnicę.' },
    { type: 'card', icon: 'mdi:traffic-light', title: 'Dlaczego wyświetlane są zarówno gramy, jak i metry', html: 'Gramy to język zakupów i slicerów. Metry to język długości pasma używany przez niektóre ekrany firmware, oszacowania czujnika końca filamentu i ręczne obliczenia szpuli. Wyświetlanie obu zapobiega częstemu błędowi planistycznemu: posiadaniu wystarczającej długości przy jednym założeniu gęstości, ale niewystarczającej masie przy rzeczywistym materiale.' },
    { type: 'proscons', title: 'Metody walidacji zapasu', items: [
      { pro: 'Ważenie szpuli jest szybkie i działa nawet gdy rolka jest częściowo zużyta.', con: 'Musisz znać lub oszacować tarę pustej szpuli.' },
      { pro: 'Używanie gramów ze slicera jest zwykle zgodne z wagą zakupionego materiału.', con: 'Oszacowania slicera mogą się zmieniać wraz z objętością przepłukiwania, podporami, brimem i siatkami modyfikatorów.' },
      { pro: 'Długość jest intuicyjna przy porównywaniu ścieżek filamentu i odległości do czujnika końca.', con: 'Długość zmienia się wraz z gęstością i średnicą, więc nie jest uniwersalna dla wszystkich materiałów.' },
      { pro: 'Przeliczenie oparte na gęstości lepiej radzi sobie z PLA, PETG, ABS, TPU i kompozytami.', con: 'Dodatki specyficzne dla producenta mogą wymagać niestandardowej wartości gęstości.' },
    ] },
    { type: 'title', text: 'Filamenty kompozytowe i specjalistyczne wymagają niestandardowych wartości gęstości', level: 2 },
    { type: 'paragraph', html: 'Filamenty z wypełnieniem to główny powód, dla którego poważny estymator materiału powinien ujawniać gęstość zamiast ją ukrywać. PLA z wypełnieniem drewnianym, nylon z włóknem węglowym, PLA z wypełnieniem metalowym, filament świecący, materiały inżynieryjne z wypełnieniem szklanym i mieszanki ceramiczne mogą znacznie odbiegać od bazowego polimeru. Filament z wypełnieniem metalowym może wydawać się ciężki, ponieważ ma wysoką gęstość; te same 500 g może oznaczać znacznie mniejszą objętość i długość niż standardowy PLA. W przypadku drogiego wydruku inżynieryjnego ta różnica nie jest akademicka. Może zadecydować o tym, czy ostatnie dziesięć procent wydruku zostanie ukończone, czy zabraknie materiału.' },
    { type: 'glossary', items: [
      { term: 'Gęstość', definition: 'Masa na jednostkę objętości, tutaj wyrażona w gramach na centymetr sześcienny.' },
      { term: 'Pole przekroju', definition: 'Powierzchnia kołowa pasma filamentu obliczona na podstawie średnicy.' },
      { term: 'Masa liniowa', definition: 'Ile gramów waży jeden metr lub jedna stopa filamentu dla wybranego materiału i średnicy.' },
      { term: 'Tara', definition: 'Waga pustej szpuli, którą należy odjąć od odczytu wagi.' },
      { term: 'Średnica nominalna', definition: 'Reklamowany rozmiar filamentu, zwykle 1,75 mm lub 2,85 mm, przed pomiarem rzeczywistej tolerancji.' },
    ] },
    { type: 'message', title: 'Dane producenta są najważniejsze', html: 'Gdy szpula lub karta techniczna podaje gęstość, użyj tej wartości. Fabryczne ustawienia gęstości są przydatne do planowania, ale formuły specyficzne dla dostawcy, ładunki pigmentów i wzmocnienia mogą zmienić tę liczbę.' },
    { type: 'title', text: 'Praktyczne przykłady szacowania materiału w druku 3D', level: 2 },
    { type: 'paragraph', html: 'Wyobraź sobie, że slicer zgłasza, iż wspornik z PETG wymaga 186 g, a Ty masz częściowo zużytą szpulę. PETG o gęstości 1,27 g/cm3 z filamentem 1,75 mm przelicza się na około sześćdziesiąt jeden metrów. Jeśli użyteczna waga szpuli po odjęciu tary wynosi 220 g, panel sygnalizuje nadmiar 34 g i przelicza ten margines na około jedenaście metrów. Ten margines może wystarczyć na linię przepłukiwania i mały brim, ale nie na duży błąd podpór. Sprawdzenie zapasu zachęca użytkownika do dodania realistycznego bufora przed pozostawieniem wydruku bez nadzoru.' },
    { type: 'paragraph', html: 'Teraz porównaj ABS. Ponieważ ABS jest mniej gęsty niż PETG, te same 186 g daje większą objętość, a więc większą długość przy tej samej średnicy 1,75 mm. Nie oznacza to, że element z ABS jest sam w sobie tańszy, ponieważ cena za kilogram i ustawienia druku też mają znaczenie, ale wyjaśnia, dlaczego oszacowanie pozostałych metrów skopiowane z jednego materiału może wprowadzić w błąd w przypadku innego. Do kontroli zapasu masa jest stabilnym punktem wyjścia, a gęstość tworzy pomost do długości.' },
    { type: 'summary', title: 'Niezawodna lista kontrolna planowania materiału', items: [
      'Odejmij tarę pustej szpuli przed wprowadzeniem pozostałego zapasu.',
      'Użyj rzeczywistej gęstości materiału dla filamentów z wypełnieniem, wzmocnionych i premium.',
      'Sprawdź, czy Twoja maszyna używa filamentu 1,75 mm czy 2,85 mm, zanim zaufasz jakiejkolwiek liczbie długości.',
      'Zachowaj margines na przepłukiwanie, podpory, brim, nieudane pierwsze warstwy i zmiany profilu slicera.',
      'Traktuj zielony stan wystarczalności jako kontrolę planistyczną, a nie gwarancję przed zacięciami lub awariami czujnika końca filamentu.',
    ] },
    { type: 'title', text: 'Odpowiedź zorientowana na SEO: waga filamentu na długość w jednym zdaniu', level: 2 },
    { type: 'paragraph', html: 'Aby przeliczyć wagę filamentu do drukarki 3D na długość, podziel wagę w gramach przez gęstość materiału, aby uzyskać objętość, pomnóż przez 1000, aby przeliczyć cm3 na mm3, podziel przez <code>pi x (średnica / 2)^2</code>, a następnie podziel przez 1000, aby odczytać metry. Ta metoda uwzględniająca gęstość jest dokładniejsza niż stała tabela gramów na metry, ponieważ PLA, PETG, ABS, TPU, Nylon, PC i filamenty kompozytowe mają różne wartości gęstości.' },
    { type: 'diagnostic', variant: 'success', title: 'Kiedy oszacowanie jest najbardziej wiarygodne', badge: 'Najlepsza praktyka', html: 'Wynik jest najbardziej miarodajny, gdy waga ze slicera jest ostateczna, pozostała waga szpuli ma odjętą tarę, średnica jest zmierzona lub znana, a gęstość pochodzi od producenta. W takich warunkach konwerter staje się praktycznym sprawdzeniem przed startem długich wydruków, serii produkcyjnych i drogich polimerów technicznych.' },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
