import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MultiMaterialPurgeCalculatorUI } from '../ui';

const slug = 'kalkulator-purge-wielomaterialowy';
const title = 'Kalkulator Purge Multi Material: Analizuj i Optymalizuj Odpady Filamentu';
const description = 'Szacuj objętość wieży purge AMS i MMU, masę zmarnowanego filamentu oraz koszt przejść za pomocą macierzy intensywności pigmentu dla zmian kolorów.';

const faqData = [
  {
    question: 'Dlaczego przejściu z czarnego na biały przypisano wyższy współczynnik purge niż z białego na czarny?',
    answer: 'Ciemne pigmenty zanieczyszczają jasne polimery bardziej widocznie niż jasne pigmenty ciemne polimery. Kalkulator modeluje więc przejście z czarnego na biały jako przejście o wysokim współczynniku, a z białego na czarny jako przejście o niższym współczynniku.',
  },
  {
    question: 'Czy ten kalkulator zastępuje objętości płukania z slicera?',
    answer: 'Nie. Jest to narzędzie diagnostyczne do szacowania ekonomiki purge przed slicowaniem lub budżetowaniem. Wynik kalibracji slicera należy wykorzystać do ostatecznego dostrojenia dla konkretnej maszyny.',
  },
  {
    question: 'Jaki współczynnik purge powinienem uznać za zbyt wysoki?',
    answer: 'Narzędzie oznacza wysoki współczynnik odpadów powyżej 30 procent całkowitej objętości wytłoczonej. Próg ten zazwyczaj oznacza, że należy przeanalizować kolejność kolorów, grupowanie, purge-to-infill lub podział modelu.',
  },
  {
    question: 'Czy mogę go używać do zmian materiału, a nie tylko koloru?',
    answer: 'Obecna macierz koncentruje się na zanieczyszczeniu pigmentem. Mieszane polimery, rozpuszczalne podpory, materiały ścierne i zmiany temperatury mogą wymagać dodatkowego purge poza współczynnikiem koloru.',
  },
];

const howToData = [
  {
    name: 'Wprowadź objętość obiektu i podstawową objętość purge',
    text: 'Wpisz rzeczywistą objętość modelu oraz standardową objętość purge, którą Twój profil AMS lub MMU stosuje przy jednej normalnej zmianie filamentu.',
  },
  {
    name: 'Wybierz kolory źródłowy i docelowy',
    text: 'Użyj okrągłych selektorów kolorów dla każdego przejścia. Współczynnik przejścia aktualizuje się natychmiast z macierzy pigmentów.',
  },
  {
    name: 'Ustaw liczbę przejść',
    text: 'Określ, ile razy każda para kolorów występuje w zadaniu. Powtarzające się przejścia z ciemnego na jasny będą dominować nad całkowitym szacunkiem purge.',
  },
  {
    name: 'Odczytaj współczynnik, masę i koszt',
    text: 'Użyj paska porównania obiektu i purge, masy odpadów oraz wyniku kosztu, aby zdecydować, czy wydruk powinien zostać przeorganizowany przed produkcją.',
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
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'pl',
};

export const content: ToolLocaleContent<MultiMaterialPurgeCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    unitSystemLabel: 'Jednostki',
    metricLabel: 'Metryczne',
    imperialLabel: 'Imperialne',
    currencyLabel: 'Waluta',
    currencyOptions: [
      { code: 'EUR', label: 'EUR' },
      { code: 'USD', label: 'USD' },
      { code: 'GBP', label: 'GBP' },
      { code: 'JPY', label: 'JPY' },
      { code: 'CAD', label: 'CAD' },
      { code: 'AUD', label: 'AUD' },
      { code: 'CHF', label: 'CHF' },
      { code: 'MXN', label: 'MXN' },
      { code: 'BRL', label: 'BRL' },
      { code: 'CNY', label: 'CNY' },
      { code: 'IDR', label: 'IDR' },
      { code: 'KRW', label: 'KRW' },
      { code: 'PLN', label: 'PLN' },
      { code: 'RUB', label: 'RUB' },
      { code: 'SEK', label: 'SEK' },
      { code: 'TRY', label: 'TRY' },
    ],
    modelInputsTitle: 'Model kosztów',
    objectVolumeLabel: 'Objętość obiektu',
    basePurgeLabel: 'Podstawowy purge na zmianę',
    densityLabel: 'Gęstość g/cm3',
    priceLabel: 'Cena za kg',
    transitionsTitle: 'Macierz przejść pigmentów',
    fromLabel: 'Z',
    toLabel: 'Do',
    colorLabels: {
      white: 'Biały',
      natural: 'Naturalny',
      yellow: 'Żółty',
      red: 'Czerwony',
      blue: 'Niebieski',
      green: 'Zielony',
      gray: 'Szary',
      black: 'Czarny',
    },
    countLabel: 'Zmiany',
    objectLabel: 'Rzeczywiste tworzywo obiektu',
    purgeTowerLabel: 'Odpad wieży purge',
    totalWasteLabel: 'Objętość purge',
    wasteCostLabel: 'Koszt odpadów',
    purgeRatioLabel: 'Współczynnik purge',
    massLabel: 'Masa odpadów',
    loadbarAriaLabel: 'Objętość obiektu w porównaniu z objętością wieży purge',
    alertTitle: 'Wykryto wysoki współczynnik odpadów',
    alertText: 'Wykryto wysoki współczynnik odpadów: zalecane grupowanie podobnych kolorów.',
    efficientText: 'Współczynnik purge mieści się w limicie planowania.',
    factorGuideTitle: 'Przewodnik współczynników purge według przejścia',
    transitionLabel: 'Przejście',
    factorLabel: 'Współczynnik',
    volumeLabel: 'Objętość purge',
    cm3Unit: 'cm3',
    in3Unit: 'in3',
    gUnit: 'g',
    ozUnit: 'oz',
  },
  seo: [
    {
      type: 'title',
      text: 'Jak odpady purge AMS i MMU stają się rzeczywistym kosztem produkcji',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Wydruk wielomateriałowy nie zużywa filamentu tylko w widocznym obiekcie. Każda zmiana koloru lub materiału pozostawia stopiony polimer w hotendzie, strefie topienia, dyszy, a czasami na początku następnej ścieżki ekstruzji. Drukarka musi przepchnąć wystarczająco dużo nowego filamentu przez tę ścieżkę, zanim następna widoczna powierzchnia będzie czysta. W przepływach pracy AMS, MMU, zmieniaczy narzędzi i palette, ta ekstruzja czyszcząca często staje się wieżą purge, blokiem purge, linią purge lub zrzutem do kanału odpadów. Kluczowy punkt ekonomiczny jest prosty: wieża może być wyceniona jak każda inna część, ponieważ ma objętość, masę i koszt materiału.',
    },
    {
      type: 'paragraph',
      html: 'Ogólne kalkulatory często mnożą liczbę zmian przez jedną stałą objętość płukania. Jest to przydatne do przybliżonego budżetu, ale pomija najdroższy tryb awarii w druku kolorowym: <strong>asymetryczne zanieczyszczenie</strong>. Przejście z białego na czarny nie wymaga takiego samego czyszczenia jak z czarnego na biały. Niewielka ilość czarnego pigmentu przeniesiona do białego PLA, PETG lub ABS jest szybko widoczna, podczas gdy niewielka ilość białego przeniesiona do czarnego jest zwykle ukryta przez ciemniejszy ładunek pigmentu. To narzędzie wykorzystuje macierz przejść, aby każdy kierunek miał swój własny mnożnik.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '30%', label: 'Próg ostrzegawczy wysokiego współczynnika purge używany przez panel' },
        { value: '1.6x', label: 'Domyślny mnożnik przejścia z czarnego na biały' },
        { value: '0.8x', label: 'Domyślny mnożnik przejścia z białego na czarny' },
        { value: '0 przycisków', label: 'Wszystkie obliczenia aktualizują się natychmiast podczas edycji' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Kosztowny objaw, na który należy uważać',
      badge: 'Audyt odpadów',
      html: 'Gdy wieża purge przekracza 30 procent połączonej objętości obiektu i purge, zadanie przestaje być tylko kolorowym wydrukiem. Staje się procesem konwersji materiału, w którym duża część zakupionego filamentu staje się produktem niebędącym wyrobem gotowym. To moment, w którym kolejność kolorów, podział modelu, purge-to-infill i grupowanie zasługują na uwagę przed uruchomieniem maszyny.',
    },
    {
      type: 'title',
      text: 'Macierz przejść stojąca za kalkulatorem',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Podstawowym modelem jest <code>Vcalk = sum(Vpodst x Ka,b)</code>. <code>Vpodst</code> to podstawowa objętość purge dla jednej standardowej zmiany filamentu. <code>Ka,b</code> to współczynnik przejścia z koloru <code>a</code> do koloru <code>b</code>. Współczynnik poniżej 1 oznacza, że przejście jest zwykle łatwiejsze niż linia bazowa. Współczynnik powyżej 1 oznacza, że następny kolor jest wrażliwy na zanieczyszczenie lub poprzedni kolor ma silne przenoszenie pigmentu. Wynikiem jest objętość purge w centymetrach sześciennych, która następnie jest przeliczana na masę przy użyciu gęstości filamentu.',
    },
    {
      type: 'paragraph',
      html: 'Wzór na koszt to <code>Codpad = ((Vcalk x gęstość) / 1000) x cenaKg</code>. Jeśli wieża purge zużywa 80 cm3 PLA o gęstości 1,24 g/cm3, zużywa 99,2 g filamentu. Przy cenie 24 za kilogram, wieża ta kosztuje 2,38 w materiale, zanim uwzględnione zostaną energia elektryczna, czas maszyny, nieudane przejścia kolorów lub obróbka końcowa. W przypadku wydruku hobbystycznego może to być akceptowalne. W przypadku powtarzalnej produkcji jest to pozycja kosztowa.',
    },
    {
      type: 'table',
      headers: ['Przejście', 'Domyślny współczynnik', 'Dlaczego jest tak ważony'],
      rows: [
        ['Biały na czarny', '0,80x', 'Czerń ukrywa małe jasne pozostałości, więc tolerancja na widoczne zanieczyszczenie jest wyższa.'],
        ['Czarny na biały', '1,60x', 'Ciemne pozostałości w bieli są natychmiast widoczne i zwykle wymagają dłuższego płukania.'],
        ['Naturalny na biały', '1,15x', 'Przezroczysty lub naturalny materiał może zabarwić nieprzezroczystą biel, dopóki ścieżka topnienia nie będzie czystsza.'],
        ['Żółty na biały', '1,35x', 'Żółte pigmenty mogą ocieplić lub poplamić jasne powierzchnie, choć są mniej intensywne niż czarny.'],
        ['Czerwony na żółty', '1,08x', 'Przeniesienie czerwieni silnie zmienia odcień w żółciach i kolorach zbliżonych do pomarańczowego.'],
        ['Szary na czarny', '0,72x', 'Szare pozostałości są zwykle ukrywane przez czarny pigment, więc purge może być mniejszy.'],
      ],
    },
    {
      type: 'tip',
      title: 'Użyj kalibracji slicera jako objętości bazowej',
      html: 'Najpierw przeprowadź kalibrację płukania dostawcy lub społeczności dla swojej drukarki, a następnie wprowadź ten wynik jako podstawową objętość purge. Macierz powinna skalować znaną linię bazową, a nie zastępować maszynowego dostrajania dla średnicy dyszy, objętości hotendu, długości ścieżki filamentu i zachowania slicera.',
    },
    {
      type: 'title',
      text: 'Dlaczego nieprzezroczystość polimeru zmienia wymaganą objętość purge',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Nieprzezroczystość kontroluje, jak widoczne jest zanieczyszczenie poprzednim kolorem w następnym materiale. Nieprzezroczysta biel jest wymagająca, ponieważ silnie odbija światło i pokazuje ciemniejsze cząstki lub smugi w pobliżu powierzchni. Naturalne i przezroczyste filamenty zachowują się inaczej: mogą ukrywać mniej masy, ale pokazują odcień w głąb, szczególnie w cienkich ściankach lub elementach podświetlanych. Nasycone kolory, takie jak czerwony i niebieski, mogą również plamić kolejne jasne kolory, ponieważ stężenie pigmentu potrzebne do silnego nasycenia pozostaje widoczne przy niskich poziomach pozostałości.',
    },
    {
      type: 'paragraph',
      html: 'Drukarka nie zna nauki o kolorach. Ona tylko wytłacza długość lub objętość. Użytkownik musi zdecydować, czy widoczny wynik wymaga czystości kosmetycznej, separacji funkcjonalnej, czy tylko zgrubnej zmiany koloru. Zabawka, logo, tablica informacyjna, ramka litofanu lub obudowa eksponowana klientowi mogą wymagać agresywnego purge. Ukryta wewnętrzna podpora, prototyp koncepcyjny lub tylna strona przyrządu mogą tolerować więcej przenoszenia. Kalkulator uwidacznia ten kompromis, powodując wzrost wieży purge, gdy kierunek przejścia jest trudniejszy.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Jasny cel',
          description: 'Biały, naturalny, żółty i jasnoszary to wrażliwe cele. Ciemne lub nasycone poprzednie kolory wymagają dłuższego purge, zanim te kolory będą wyglądać czysto.',
          points: ['Używaj wyższych współczynników', 'Grupuj jasne sekcje razem', 'Unikaj wielokrotnego powracania z czarnego na biały'],
        },
        {
          title: 'Ciemny cel',
          description: 'Czarny, granatowy, ciemnozielony i ciemnoszary mogą ukryć pozostałości jaśniejszych kolorów. Te przejścia mogą często używać mniejszych mnożników.',
          points: ['Niższe widoczne ryzyko', 'Dobry cel po jasnych kolorach', 'Przydatny kolor końcowy w sekwencji'],
        },
        {
          title: 'Przejście podobnego odcienia',
          description: 'Przechodzenie między pokrewnymi kolorami zwykle kosztuje mniej niż przejście z ciemnego na jasny. Czerwony na pomarańczowy lub szary na czarny jest zazwyczaj łatwiejszy niż niebieski na żółty.',
          points: ['Kolejność kolorów ma znaczenie', 'Rodziny odcieni zmniejszają odpady', 'Grupuj podobne obiekty razem'],
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Podstawowa objętość purge', definition: 'Normalna objętość, jaką Twój slicer lub profil kalibracyjny wytłacza przy jednej zwykłej zmianie filamentu przed skalowaniem macierzy.' },
        { term: 'Współczynnik przejścia', definition: 'Mnożnik przypisany do jednego kierunku zmiany koloru, takiego jak czarny na biały lub biały na czarny.' },
        { term: 'Współczynnik purge', definition: 'Objętość purge podzielona przez całkowitą objętość wytłoczoną, obejmującą zarówno obiekt, jak i wieżę purge.' },
        { term: 'Przenoszenie pigmentu', definition: 'Widoczne pozostałości poprzedniego koloru filamentu, które pozostają w hotendzie i pojawiają się w następnej ekstruzji.' },
        { term: 'Purge-to-infill', definition: 'Strategia slicera, która przekierowuje część ekstruzji czyszczącej do ukrytego wypełnienia zamiast do wieży lub kanału odpadów.' },
      ],
    },
    {
      type: 'title',
      text: 'Jak zmniejszyć odpady filamentu AMS bez pogarszania jakości kolorów',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Pierwszą optymalizacją jest kolejność kolorów. Jeśli model można podzielić, wydrukować w grupach lub ułożyć tak, aby przejścia z ciemnego na jasny występowały rzadziej, wieża purge może drastycznie się zmniejszyć. Powtarzające się zmiany z czarnego na biały są kosztowne, ponieważ każdy cykl wymaga od drukarki usunięcia silnego pigmentu przed wrażliwym celem. Jeśli ten sam projekt wizualny można wydrukować raz jako biały na czarny lub jako oddzielne części montowane później, budżet materiałowy zmienia się natychmiast.',
    },
    {
      type: 'paragraph',
      html: 'Drugą optymalizacją jest wybór celu. Gdy dostępnych jest kilka kolorów, wybierz ciemny kolor końcowy dla detali pojawiających się po jasnych obszarach. Na przykład czarny tekst na białej tablicy jest zwykle tańszy niż biały tekst na czarnej tablicy, ponieważ ten drugi zmusza drukarkę do czyszczenia ciemnych pozostałości przed każdym białym segmentem. To nie tylko decyzja estetyczna; zmienia fizyczną ilość polimeru, który musi zostać przepchnięty przez hotend.',
    },
    {
      type: 'list',
      items: [
        'Grupuj podobne kolory w modelu lub kolejce wydruków, aby pokrewne odcienie dzieliły przejścia.',
        'Używaj purge-to-infill, gdy wewnętrzne zanieczyszczenie koloru jest akceptowalne, a część ma wystarczającą objętość wypełnienia.',
        'Zmniejsz liczbę zmian kolorów, dzieląc odznaki, loga, etykiety lub dekoracyjne wstawki na osobne drukowane elementy.',
        'Używaj ciemniejszych kolorów po jaśniejszych, gdy projekt na to pozwala.',
        'Dostrajaj mnożniki płukania za pomocą fizycznych próbek, a nie tylko domyślnych ustawień slicera.',
        'Budżetuj koszt purge osobno dla wycen klientów, aby dekoracyjna praca wielokolorowa nie była niedoszacowana.',
      ],
    },
    {
      type: 'proscons',
      title: 'Kompromisy optymalizacyjne',
      items: [
        { pro: 'Niższe współczynniki purge zmniejszają masę wieży i koszt filamentu.', con: 'Zbyt mały purge może powodować smugi, zabarwienia lub nieakceptowalne powierzchnie eksponowane klientowi.' },
        { pro: 'Dzielenie modeli może wyeliminować wiele zmian kolorów.', con: 'Montaż dodaje pracę, zarządzanie tolerancjami, klej, łączniki lub widoczne szwy.' },
        { pro: 'Purge-to-infill zamienia część odpadów w użyteczne wewnętrzne tworzywo.', con: 'Działa najlepiej tylko wtedy, gdy obiekt ma wystarczającą ukrytą objętość, a zanieczyszczenie jest strukturalnie akceptowalne.' },
        { pro: 'Grupowanie podobnych kolorów poprawia ekonomikę farmy drukarek.', con: 'Może opóźnić pilne, jednorazowe zlecenia wymagające określonej sekwencji kolorów.' },
      ],
    },
    {
      type: 'title',
      text: 'Budżetowanie wydruków wielomateriałowych dla klientów i farm drukarek',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Wycena wydruku uwzględniająca tylko końcową objętość obiektu jest błędna w przypadku zleceń AMS i MMU. Klient kupuje proces produkcyjny, a proces obejmuje ekstruzję nieprodukcyjną. Mały breloczek z wieloma warstwowymi zmianami kolorów może zmarnować więcej materiału niż większy jednokolorowy wspornik. Kalkulator uwidacznia to, porównując objętość obiektu i objętość wieży purge jako dwa konkurujące bloki, zamiast ukrywać odpady w jednej liczbie.',
    },
    {
      type: 'paragraph',
      html: 'Dla farmy drukarek współczynnik purge jest również sygnałem harmonogramowania. Zlecenia z wysokim purge zajmują drukarkę podczas konwersji filamentu w tworzywo wieży, więc strata ekonomiczna to nie tylko materiał. Czas maszyny spędzony na wymianie filamentu, cięciu, ładowaniu, wycieraniu i odbudowywaniu ciśnienia to czas nie poświęcony na produkcję zbywalnej objętości. Gdy współczynnik purge jest wysoki, rozważ, czy przedmiot powinien mieć dopłatę za wielokolorowość, czy kolory powinny być ograniczone, czy też malowane, etykietowane lub montowane rozwiązanie jest tańsze.',
    },
    {
      type: 'card',
      title: 'Zasada wyceny dla prac wielokolorowych',
      html: 'Wycena obiektu, a następnie wycena wieży purge jako osobnej pozycji odpadów. Jeśli klient zmieni z dwóch kolorów na cztery lub doda małe izolowane detale na wielu warstwach, zaktualizuj wycenę, ponieważ liczba przejść zmienia się, nawet gdy widoczna objętość modelu prawie się nie zmienia.',
    },
    {
      type: 'table',
      headers: ['Współczynnik purge', 'Interpretacja', 'Zalecane działanie'],
      rows: [
        ['Poniżej 15%', 'Wydajna praca wielokolorowa', 'Normalne założenia wyceny są zazwyczaj akceptowalne.'],
        ['15% do 30%', 'Strata materiału jest widoczna', 'Przejrzyj przejścia i sprawdź, czy purge-to-infill pomaga.'],
        ['Powyżej 30%', 'Wysoki współczynnik odpadów', 'Grupuj kolory, podziel model, podnieś wycenę lub przeprojektuj układ kolorów.'],
        ['Powyżej 50%', 'Wieża dominuje ekonomikę', 'Traktuj wydruk jako specjalne zadanie produkcyjne, a nie rutynowy wydruk obiektu.'],
      ],
    },
    {
      type: 'title',
      text: 'Odczytywanie wyników panelu',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dwa poziome bloki są celowo surowe. Zielony to rzeczywista objętość obiektu. Pasiaste purge to materiał, który nie staje się widocznym produktem. Jeśli pasiasty blok zaczyna wyglądać fizycznie porównywalnie do bloku obiektu, wydruk zasługuje na analizę. Ten wizualny współczynnik jest często bardziej przekonujący niż gramy czy waluta, ponieważ pokazuje użytkownikowi dokładnie, ile tworzywa jest przypisane do czyszczenia.',
    },
    {
      type: 'paragraph',
      html: 'Wynik masy pochodzi z objętości pomnożonej przez gęstość. PLA ma często około 1,24 g/cm3, PETG zwykle około 1,27 g/cm3, ABS jest niższy, a filamenty z wypełniaczem znacznie się różnią. Wynik ceny wykorzystuje wybraną cenę za kilogram. Jeśli używasz specjalnego jedwabistego PLA, mieszanek z włóknem węglowym, rozpuszczalnego podpory lub filamentu inżynieryjnego, zastąp domyślną cenę i gęstość. Ta sama objętość purge może mieć bardzo różną wagę ekonomiczną w zależności od materiału.',
    },
    {
      type: 'summary',
      title: 'Lista kontrolna decyzji',
      items: [
        'Użyj zmierzonej kalibracji purge z slicera jako objętości bazowej.',
        'Licz powtarzające się przejścia, a nie tylko liczbę kolorów załadowanych w AMS lub MMU.',
        'Najpierw obserwuj przejścia czarny na biały, nasycony na jasny i przezroczyste cele.',
        'Traktuj współczynnik purge powyżej 30 procent jako ostrzeżenie o przeprojektowaniu lub zmianie wyceny.',
        'Użyj wyniku kosztu do budżetowania materiału i wizualnego paska do szybkiego przeglądu projektu.',
      ],
    },
    {
      type: 'message',
      title: 'Praktyczny wynik końcowy',
      html: 'Wydruk wielomateriałowy jest wydajny, gdy zmiany kolorów są tak zaaranżowane, że wieża purge pozostaje mała w stosunku do obiektu. Jeśli wieża przekroczy linię ostrzegawczą 30 procent, najtańszą optymalizacją zwykle nie jest nowa szpula lub szybszy profil; to lepsza strategia kolorów.',
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
