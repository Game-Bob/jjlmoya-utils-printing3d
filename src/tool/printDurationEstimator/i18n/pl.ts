import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PrintDurationEstimatorUI } from '../ui';

const slug = 'oceniacz-czasu-druku-3d-po-wysokosci-warstwy-i-predkosci';
const title = 'Oceniacz Czasu Druku 3D po Wysokości Warstwy i Prędkości';
const description =
  'Oszacuj czas trwania druku 3D bez otwierania slicera, łącząc wysokość modelu, wysokość warstwy, prędkość druku, wypełnienie, złożoność, narzut na przemieszczenia i zużycie filamentu.';

const faqData = [
  {
    question: 'Jak długo potrwa mój druk 3D bez slicera?',
    answer:
      'Możesz to oszacować na podstawie całkowitej liczby warstw, przybliżonej objętości materiału, średniej prędkości druku, wypełnienia i marginesu na przemieszczenia i zmiany kierunku. Slicer pozostaje dokładniejszy dla końcowych prac.',
  },
  {
    question: 'Dlaczego wysokość warstwy tak bardzo zmienia czas druku?',
    answer:
      'Wysokość warstwy zmienia liczbę warstw w osi Z. Profil 0,12 mm tworzy znacznie więcej warstw niż profil 0,28 mm dla tej samej wysokości modelu, więc drukarka powtarza obwody, wypełnienie i narzut zmiany warstwy znacznie więcej razy.',
  },
  {
    question: 'Dlaczego rzeczywisty czas druku jest dłuższy niż prędkość podzielona przez odległość?',
    answer:
      'Drukarki rzadko utrzymują zadaną prędkość na zakrętach, krótkich odcinkach, małych szczegółach, przy retrakcjach, ruchach Z i przemieszczeniach. Ograniczenia przyspieszenia i narzut sprawiają, że rzeczywisty czas jest dłuższy niż idealne obliczenie ruchu.',
  },
  {
    question: 'Czy jest to dokładniejsze niż oszacowanie slicera?',
    answer:
      'Nie. Ten kalkulator służy do wczesnego planowania, wycen i porównań. Slicer może sprawdzić dokładną geometrię, podpory, szwy, ustawienia przyspieszenia, szerokość ekstruzji i kolejność ścieżek narzędzia.',
  },
];

const howToData = [
  { name: 'Wprowadź wysokość modelu', text: 'Użyj wysokości Z modelu lub najwyższego obiektu w planowanej pracy druku.' },
  { name: 'Wybierz wysokość warstwy', text: 'Użyj rzeczywistej wartości profilu druku, na przykład 0,20 mm dla typowej konfiguracji FDM jakości szkicowej.' },
  { name: 'Dodaj prędkość, powierzchnię i wypełnienie', text: 'Użyj średniej prędkości druku, przybliżonej powierzchni XY i docelowego procentu wypełnienia.' },
  { name: 'Dostosuj złożoność i narzut', text: 'Zwiększ złożoność dla bardzo małych detali i zwiększ narzut dla wielu przemieszczeń, podpór lub retrakcji.' },
  { name: 'Porównaj scenariusze prędkości', text: 'Użyj wierszy 40, 60 i 80 mm/s, aby sprawdzić, czy zwiększenie prędkości druku znacząco zmienia całkowity czas trwania pracy.' },
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
  step: howToData.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'pl',
};

export const content: ToolLocaleContent<PrintDurationEstimatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Parametry oceniacza czasu druku 3D',
    resultsAriaLabel: 'Oszacowane wyniki czasu druku 3D',
    unitSystemLabel: 'Jednostki',
    metricLabel: 'Metryczne',
    imperialLabel: 'US',
    modelHeightLabel: 'Wysokość modelu',
    modelHeightHint: 'Najwyższy wymiar Z wydruku.',
    layerHeightLabel: 'Wysokość warstwy',
    speedLabel: 'Średnia prędkość druku',
    footprintLabel: 'Szacowana powierzchnia podstawy',
    footprintHint: 'Przybliżona powierzchnia XY jako przybliżenie objętości.',
    infillLabel: 'Gęstość wypełnienia',
    complexityLabel: 'Współczynnik złożoności',
    complexityHint: '0,80 dla prostych kształtów, 1,20 dla małych detali i krótkich odcinków.',
    overheadLabel: 'Narzut na przemieszczenia',
    filamentDiameterLabel: 'Średnica filamentu',
    densityLabel: 'Gęstość materiału',
    timeLabel: 'Szacowany czas druku',
    layersLabel: 'Łączna liczba warstw',
    materialLabel: 'Szacunek materiału',
    filamentLabel: 'Długość filamentu',
    effectiveSpeedLabel: 'Efektywna prędkość',
    baseTimeLabel: 'Czas ekstruzji',
    overheadTimeLabel: 'Czas narzutu',
    comparisonLabel: 'Porównanie prędkości',
    minutesUnit: 'min',
    hoursUnit: 'h',
    layersUnit: 'warstw',
    gramUnit: 'g',
    ounceUnit: 'oz',
    meterUnit: 'm',
    footUnit: 'ft',
    percentUnit: '%',
    mmUnit: 'mm',
    inchUnit: 'cal',
    mm2Unit: 'mm²',
    in2Unit: 'cal²',
    mmSUnit: 'mm/s',
    inSUnit: 'cal/s',
    cm3Unit: 'cm³',
    densityUnit: 'g/cm³',
    multiplierUnit: 'x',
    lowInsight: 'Krótkie oszacowanie: narzut slicera, nagrzewanie stołu i chłodzenie mogą stanowić dużą część rzeczywistego czasu.',
    balancedInsight: 'Zrównoważone oszacowanie: zmiany prędkości mają znaczenie, ale liczba warstw i narzut nadal kształtują końcowy czas.',
    highInsight: 'Długie oszacowanie: rozważ grubsze warstwy, mniejsze wypełnienie, mniej podpór lub podzielenie modelu, zanim po prostu zwiększysz prędkość.',
  },
  seo: [
    { type: 'title', text: 'Jak Oszacować Czas Druku 3D na Podstawie Wysokości Warstwy i Prędkości', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>Oceniacz czasu druku 3D po wysokości warstwy i prędkości</strong> jest przydatny, gdy potrzebujesz liczby do planowania przed otwarciem slicera, porównujesz kilka profili druku lub wyceniasz część na podstawie przybliżonych wymiarów. Główna idea jest prosta: wysokość modelu podzielona przez wysokość warstwy daje liczbę warstw, a szacowana ilość ekstrudowanej ścieżki podzielona przez średnią prędkość daje czas ruchu. Trudność polega na tym, że prawdziwy druk FDM nie jest czystą taśmą produkcyjną. Dysza zwalnia na zakrętach, retrakcje przerywają ekstruzję, przemieszczenia dodają dystans bez druku, a krótkie odcinki rzadko osiągają zadaną prędkość.',
    },
    {
      type: 'paragraph',
      html: 'Ten kalkulator celowo wykracza poza najbardziej podstawową formułę. Zamiast zakładać, że <code>wysokość / wysokość warstwy / prędkość</code> wystarczy, łączy przybliżoną objętość modelu, gęstość wypełnienia, szerokość linii ekstruzji, współczynnik złożoności, czas zmiany warstwy i procent narzutu na przemieszczenia. Wynik nadal jest oszacowaniem, a nie zamiennikiem slicera, ale odpowiada na praktyczne pytanie, które zadają użytkownicy: <strong>jak długo potrwa mój druk 3D</strong>, jeśli zmienię wysokość warstwy, wypełnienie lub prędkość.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0,20 mm', label: 'Typowa wysokość warstwy FDM dla zrównoważonych wydruków', icon: 'mdi:layers-outline' },
        { value: '15-20 %', label: 'Przydatny zakres początkowy narzutu na przemieszczenia i ruch', icon: 'mdi:routes' },
        { value: '40-80 mm/s', label: 'Typowe prędkości porównawcze dla drukarek biurkowych', icon: 'mdi:speedometer' },
        { value: '1,75 mm', label: 'Typowa średnica filamentu do obliczania długości materiału', icon: 'mdi:circle-outline' },
      ],
    },
    {
      type: 'tip',
      title: 'Używaj średniej prędkości, a nie prędkości maksymalnej',
      html: '<p>Jeśli twój profil slicera wskazuje 120 mm/s, ale ściany zewnętrzne działają z prędkością 40 mm/s, małe obwody z prędkością 25 mm/s, a wypełnienie z prędkością 90 mm/s, średnia prędkość druku nie wynosi 120 mm/s. Do planowania realistyczna średnia prędkość często daje lepsze oszacowanie niż najszybszy ruch w profilu.</p>',
    },

    { type: 'title', text: 'Dlaczego Wysokość Warstwy Ma Tak Duży Wpływ na Czas Trwania', level: 2 },
    {
      type: 'paragraph',
      html: 'Wysokość warstwy kontroluje, ile razy drukarka musi powtórzyć tę samą podstawową sekwencję: obwód, strukturę wewnętrzną, górne i dolne powierzchnie, przemieszczenie do następnej wyspy i ruch Z do następnej warstwy. Model o wysokości 80 mm potrzebuje 400 warstw przy 0,20 mm, ale około 667 warstw przy 0,12 mm. Nawet jeśli każda cienka warstwa zużywa nieco mniej plastiku na przejście, drukarka wykonuje znacznie więcej przejść między warstwami, więcej powtarzających się konturów i więcej okazji do wolnego ruchu ograniczonego przyspieszeniem.',
    },
    {
      type: 'table',
      headers: ['Wysokość modelu', 'Wysokość warstwy', 'Liczba warstw', 'Interpretacja dla planowania'],
      rows: [
        ['80 mm', '0,28 mm', '286 warstw', 'Szybki profil szkicowy z widocznymi warstwami.'],
        ['80 mm', '0,20 mm', '400 warstw', 'Zrównoważona jakość i czas dla wielu części.'],
        ['80 mm', '0,12 mm', '667 warstw', 'Profil drobnych detali, który może dodać wiele godzin.'],
        ['160 mm', '0,20 mm', '800 warstw', 'Wysokie części stają się czasochłonne nawet przy normalnych prędkościach.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Kiedy wysokość warstwy jest prawdziwym wąskim gardłem',
      badge: 'Sprawdź warstwy',
      html: '<p>Jeśli zwiększenie prędkości druku prawie nie zmienia oszacowania, praca może być zdominowana przez liczbę warstw, krótkie odcinki i narzut. W takim przypadku przejście z 0,12 mm na 0,20 mm może zaoszczędzić więcej czasu niż zwiększenie prędkości drukarki z 60 mm/s do 80 mm/s.</p>',
    },
    {
      type: 'summary',
      title: 'Zasady podejmowania decyzji o wysokości warstwy',
      items: [
        'Używaj grubszych warstw do prototypów, wsporników, uchwytów i części, gdzie wykończenie powierzchni Z nie jest krytyczne.',
        'Używaj cieńszych warstw do łagodnych krzywizn, małego tekstu, miniatur i powierzchni kosmetycznych.',
        'W wysokich częściach zmiany wysokości warstwy szybko się kumulują, ponieważ każda dodatkowa warstwa powtarza narzut.',
      ],
    },

    { type: 'title', text: 'Prędkość Druku, Przyspieszenie i Współczynnik Złożoności', level: 2 },
    {
      type: 'paragraph',
      html: 'Wartość prędkości druku to cel, a nie obietnica. Drukarka musi przyspieszyć do tej prędkości, zwolnić przed zakrętami, przestrzegać ograniczeń jerk lub junction deviation, a czasami zwolnić dla chłodzenia, mostków, nawisów, minimalnego czasu warstwy i małych wysp. Dlatego <strong>kalkulator prędkości druku na czas druku</strong> potrzebuje współczynnika złożoności. Czyste pudełko z długimi prostymi liniami wypełnienia może działać blisko zadanej prędkości. Szczegółowa figurka, logo, krata, część gwintowana lub organiczna rzeźba mogą spędzać większość czasu na krótkich odcinkach, gdzie ograniczenia przyspieszenia są ważniejsze niż maksymalna prędkość.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Prosta geometria',
          description: 'Pudełka, panele i długie ścieżki wypełnienia mogą używać niższego mnożnika złożoności.',
          icon: 'mdi:cube-outline',
          points: ['Dłuższe ciągłe ścieżki', 'Mniej wysp', 'Mniejszy narzut na retrakcje'],
        },
        {
          title: 'Mieszana geometria',
          description: 'Większość wsporników, obudów, rekwizytów i części domowych znajduje się blisko domyślnego mnożnika.',
          icon: 'mdi:shape-outline',
          highlight: true,
          points: ['Obwody i wypełnienie mają znaczenie', 'Umiarkowane przemieszczenia', 'Zrównoważone straty przyspieszenia'],
        },
        {
          title: 'Szczegółowa geometria',
          description: 'Małe cechy, tekst, kraty, podpory i organiczne zakrzywione powierzchnie wymagają wyższego mnożnika.',
          icon: 'mdi:vector-polyline',
          points: ['Krótkie odcinki dominują', 'Więcej startów i zatrzymań', 'Więcej retrakcji i przemieszczeń'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Zwiększanie prędkości druku: co się poprawia, a co nie',
      items: [
        { pro: 'Długie linie wypełnienia mogą kończyć się szybciej przy zwiększonej prędkości.', con: 'Ściany zewnętrzne i małe detale mogą być nadal ograniczone przez profil.' },
        { pro: 'Duże, mało szczegółowe prototypy mogą skorzystać z szybszego ruchu.', con: 'Przyspieszenie, dzwonienie, przepływ ekstruzji i chłodzenie mogą ograniczyć użyteczną prędkość.' },
        { pro: 'Tabela porównawcza prędkości szybko pokazuje potencjalne oszczędności.', con: 'Nie może przewidzieć spowolnień specyficznych dla slicera, takich jak minimalny czas warstwy.' },
      ],
    },
    {
      type: 'message',
      title: 'Oszacowania prędkości są najbardziej przydatne do porównań względnych',
      ariaLabel: 'Uwaga o oszacowaniu prędkości',
      html: '<p>Użyj wierszy 40, 60 i 80 mm/s do porównania orientacyjnego. Jeśli 80 mm/s daje tylko niewielką oszczędność, wydruk jest prawdopodobnie ograniczony przez warstwy, narzut lub złożoność, a nie przez surową prędkość.</p>',
    },

    { type: 'title', text: 'Wypełnienie, Objętość i Czas Materiału', level: 2 },
    {
      type: 'paragraph',
      html: 'Kalkulator używa powierzchni podstawy i wysokości modelu jako przybliżenia objętości, a następnie skaluje tę objętość przez efektywny współczynnik litej substancji. Nie jest to tak dokładne jak odczyt geometrii siatki, ale oddaje ważną prawdę fizyczną: ściany i skóry nie znikają po zmniejszeniu wypełnienia. Część wydrukowana z 15 % wypełnienia nadal ma obwody, górne warstwy, dolne warstwy, małe lite elementy, a czasami interfejsy podpór. Kalkulator zachowuje udział powłoki w oszacowaniu, aby niskie wypełnienie nie redukowało czasu druku w nierealistyczny sposób do prawie zera.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Zwiększ powierzchnię podstawy dla szerokich obiektów, pudełek, płaskich płyt, tac i dużych obudów.',
        'Zmniejsz powierzchnię podstawy dla wąskich wież, cienkich figurek, małych wsporników i otwartych ram.',
        'Używaj procentu wypełnienia jako elementu planowania, a nie całkowitej gęstości części.',
        'Pamiętaj, że podpory, ranty, tratwy, wieże oczyszczające i odpady wielokolorowe dodają czas poza samym modelem.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:printer-3d-nozzle',
      title: 'Przykład: dlaczego 20 % wypełnienia to nie 20 % czasu druku',
      html: '<p>Obudowa o wysokości 80 mm może mieć cztery ściany, sześć dolnych warstw, sześć górnych warstw, gwintowane boby i dużą wewnętrzną wnękę. Zmniejszenie wypełnienia z 40 % do 20 % skraca długość wewnętrznej ścieżki, ale ściany i skóry są nadal drukowane na każdej warstwie. W modelach z wieloma obwodami zmiana liczby ścian lub wysokości warstwy może wpływać na czas bardziej niż sama zmiana wypełnienia.</p>',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Powierzchnia podstawy', definition: 'Przybliżona powierzchnia XY zajmowana przez model, używana tutaj jako przybliżone wejście objętości.' },
        { term: 'Efektywny współczynnik litej substancji', definition: 'Planowa mieszanka materiału powłoki i materiału wypełnienia używana do oszacowania ekstrudowanej objętości.' },
        { term: 'Ścieżka ekstruzji', definition: 'Ścieżka plastiku układana przez dyszę; jej przekrój poprzeczny zależy od wysokości warstwy i szerokości ekstruzji.' },
        { term: 'Długość filamentu', definition: 'Długość surowego filamentu potrzebna do dostarczenia szacowanej objętości plastiku.' },
      ],
    },

    { type: 'title', text: 'Narzut na Przemieszczenia: Brakujący Element w Prostych Kalkulatorach', level: 2 },
    {
      type: 'paragraph',
      html: 'Proste oszacowanie czasu często ignoruje ruch bez ekstruzji. Prawdziwe drukarki przemieszczają się między wyspami, wciągają i przygotowują filament, wycierają, podskakują w osi Z, omijają wydrukowane części, zmieniają kierunek, a czasami zatrzymują się dla chłodzenia. Te działania nie tworzą widocznego materiału, ale zużywają rzeczywisty czas. Stały procent narzutu to praktyczny sposób uwzględnienia przemieszczeń, gdy nie masz pełnej ścieżki slicera. Domyślny zakres 15-20 % jest użytecznym punktem wyjścia dla zwykłych części FDM z jednego materiału.',
    },
    {
      type: 'table',
      headers: ['Warunek druku', 'Sugerowany narzut', 'Powód'],
      rows: [
        ['Pojedyncza prosta część', '10-15 %', 'Mało wysp, mniej retrakcji, głównie ciągłe ścieżki.'],
        ['Typowa część funkcjonalna', '15-22 %', 'Umiarkowane obwody, wypełnienie i przemieszczenia.'],
        ['Wiele małych części na jednej płycie', '22-35 %', 'Częste przemieszczenia między obiektami i powtarzające się starty.'],
        ['Podpory lub szczegółowe powierzchnie', '25-40 %', 'Interfejsy podpór, krótkie odcinki i retrakcje dodają czas.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Nagrzewanie stołu nie jest uwzględnione',
      badge: 'Całkowity czas pracy',
      html: '<p>Oszacowanie koncentruje się na czasie ruchu i ekstruzji. Dodaj oddzielny czas na nagrzewanie stołu i dyszy, sondowanie, poziomowanie siatki, ładowanie filamentu, chłodzenie i zdejmowanie części podczas planowania rzeczywistego zajęcia maszyny.</p>',
    },
    {
      type: 'tip',
      title: 'Skalibruj narzut na podstawie rzeczywistego wydruku',
      html: '<p>Weź ukończoną pracę, porównaj czas slicera lub stopera z tym kalkulatorem, a następnie dostosuj narzut i złożoność, aż oszacowanie będzie zgodne. Ta lokalna kalibracja poprawi przyszłe planowanie bardziej niż wieczne używanie ogólnych wartości.</p>',
    },

    { type: 'title', text: 'Kiedy Ufać Temu Kalkulatorowi, a Kiedy Używać Slicera', level: 2 },
    {
      type: 'paragraph',
      html: 'To narzędzie jest najbardziej przydatne do wczesnych oszacowań, rozmów o wycenach, demonstracji w klasie i porównywania wysokości warstwy z prędkością przed podjęciem decyzji o profilu. Jest szczególnie przydatne, gdy dokładny plik STL nie jest jeszcze dostępny, gdy klient podaje tylko przybliżone wymiary, lub gdy chcesz sprawdzić, czy zmiana jest warta zbadania. Nie jest zaprojektowany do zastępowania oszacowań slicera w krytycznych pracach produkcyjnych, ponieważ slicery sprawdzają dokładną geometrię siatki, prędkości dla poszczególnych cech, ścieżki podpór, kolejność ścian, górne i dolne powierzchnie, umiejscowienie szwów, kontrolę przyspieszenia i specyficzne zachowanie oprogramowania układowego maszyny.',
    },
    {
      type: 'list',
      icon: 'mdi:calculator-variant-outline',
      items: [
        'Użyj tego kalkulatora do szybkiego porównania profili warstw 0,12 mm, 0,20 mm i 0,28 mm.',
        'Użyj go, aby oszacować, czy wysoki model jest ograniczony liczbą warstw przed zmianą prędkości.',
        'Użyj go, aby uzyskać przybliżoną objętość materiału, długość filamentu i wagę z przybliżonych wymiarów.',
        'Użyj slicera przed zakupem materiału, rezerwacją czasu maszyny lub obiecywaniem terminów dostawy.',
      ],
    },
    {
      type: 'table',
      headers: ['Pytanie', 'Odpowiedź kalkulatora', 'Odpowiedź slicera'],
      rows: [
        ['Czy grubsze warstwy zaoszczędzą czas?', 'Dobre orientacyjne oszacowanie na podstawie liczby warstw.', 'Dokładny wynik dla konkretnej ścieżki i powierzchni.'],
        ['Czy 80 mm/s będzie znacznie szybsze niż 60 mm/s?', 'Przydatne porównanie scenariuszy prędkości.', 'Dokładne zachowanie dla prędkości i przyspieszenia.'],
        ['Ile filamentu mogę potrzebować?', 'Przybliżona objętość, długość i waga.', 'Raport materiałowy specyficzny dla profilu.'],
        ['Czy mogę wycenić tę pracę produkcyjną?', 'Tylko do wstępnej selekcji.', 'Wymagane do ostatecznej wyceny i planowania.'],
      ],
    },
    {
      type: 'summary',
      title: 'Najlepszy przepływ pracy',
      items: [
        'Zacznij od tego oceniacza, aby zawęzić wybór wysokości warstwy, prędkości i wypełnienia.',
        'Dostosuj złożoność i narzut, używając znanego wydruku z własnej maszyny.',
        'Przeslicuj końcowy profil kandydata przed zobowiązaniem się do kosztu, czasu lub dostawy.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
