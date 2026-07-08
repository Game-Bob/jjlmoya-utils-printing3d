import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { RainbowFilamentGradientCalculatorUI } from '../ui';

export const content: ToolLocaleContent<RainbowFilamentGradientCalculatorUI> = {
  slug: 'kalkulator-dlugosci-przejscia-filamentu-teczowego',
  title: 'Kalkulator Długości Przejścia Filamentu Tęczowego do Wydruków 3D',
  description: 'Oszacuj cykle kolorów filamentu tęczowego, zużycie szpuli i gdzie przejścia gradientu pojawią się wzdłuż wysokości Z wycinka 3D.',
  ui: {
    unitMetric: 'Metryczny',
    unitImperial: 'US',
    cycleLength: 'Długość cyklu koloru',
    partWeight: 'Waga wycinka',
    density: 'Gęstość',
    diameter: 'Średnica filamentu',
    partHeight: 'Wydrukowana wysokość Z',
    startOffset: 'Przesunięcie początkowe na szpuli',
    presets: 'Ustawienia wstępne materiału',
    pla: 'PLA tęczowy',
    petg: 'Mieszanka PETG',
    silk: 'Jedwabny multicolor',
    usedFilament: 'Zużyty filament',
    cyclesInPart: 'Cykle w części',
    heightPerCycle: 'Z na cykl',
    gramsPerCycle: 'Masa na cykl',
    zMap: 'Mapa przejść Z',
    transitionBands: 'Widoczne pasma przejściowe',
    phaseWindow: 'Faza cyklu',
    copySummary: 'Kopiuj podsumowanie gradientu',
    reset: 'Resetuj',
    emptyValue: '0',
    copyTemplate: 'Oszacowanie filamentu tęczowego',
    copyCycles: 'cykle kolorów',
    copyUsed: 'zużyto',
    copyZCycle: 'na cykl',
  },
  seo: [
    { type: 'title', text: 'Jak działa kalkulator długości przejścia filamentu tęczowego', level: 2 },
    { type: 'paragraph', html: 'Kalkulator długości przejścia filamentu tęczowego łączy dwie liczby z slicera, które zwykle są widziane osobno: <strong>masę modelu</strong> i <strong>wysokość wydruku</strong>. Slicer informuje, ile gramów materiału zużyje część, podczas gdy producent filamentu lub pomiar ręczny informuje, ile metrów szpula potrzebuje do ukończenia jednego pełnego cyklu koloru. Gdy te wartości znajdą się w tym samym modelu przepływu materiału, możesz oszacować, ile cykli kolorów pojawi się w obiekcie i gdzie każde pasmo koloru znajdzie się na osi Z.' },
    { type: 'paragraph', html: 'Podstawowa konwersja jest fizyczna, a nie wizualna. Wycinek o wadze 180 g nie zużywa automatycznie tej samej długości filamentu na każdej szpuli, ponieważ długość zależy od gęstości i średnicy. PLA, PETG, jedwabne PLA, wypełniane mieszanki i półprzezroczyste mieszanki mogą mieć różne gęstości. Nominalny filament 1,75 mm ma również tolerancje produkcyjne, więc kalkulator powinien umożliwiać regulację średnicy zamiast zawsze zakładać wartość domyślną.' },
    { type: 'stats', columns: 4, items: [
      { value: '1,75 mm', label: 'typowa średnica filamentu FDM', icon: 'mdi:circle-slice-8' },
      { value: '1,24 g/cm3', label: 'typowa gęstość PLA używana w oszacowaniach', icon: 'mdi:flask' },
      { value: '30 m', label: 'przykład pełnego tęczowego cyklu koloru', icon: 'mdi:palette' },
      { value: 'Oś Z', label: 'gdzie długość cyklu staje się widoczna', icon: 'mdi:arrow-up-down' },
    ] },
    { type: 'tip', title: 'Zmierz jeden rzeczywisty cykl przed zaufaniem podglądowi', html: 'Producenci często opisują filament tęczowy jako szybkie, średnie lub długie przejście, ale użytecznym wejściem jest zmierzona odległość od jednego koloru do powrotu tego samego koloru. Rozwiń małą próbkę tylko jeśli jest to bezpieczne dla szpuli, lub wydrukuj cienką wieżę do czyszczenia i wstecznie oblicz zużytą długość filamentu z oszacowań slicera.' },

    { type: 'title', text: 'Dlaczego waga części przewiduje zmiany kolorów lepiej niż czas wydruku', level: 2 },
    { type: 'paragraph', html: 'Czas wydruku jest słabym predyktorem zużycia kolorów na tęczowej szpuli. Dekoracyjny wazon może zająć wiele godzin w trybie spiralnym, zużywając przy tym mało materiału, a gęsty wspornik mechaniczny może szybko zużyć dużą ilość filamentu. Szpula zmienia kolor w zależności od <strong>długości filamentu przeciągniętego przez ekstruder</strong>, a nie od upływających minut, odległości przemieszczania czy liczby warstw.' },
    { type: 'paragraph', html: 'Waga z slicera jest użyteczna, ponieważ już uwzględnia ściany, wypełnienie, górne i dolne warstwy, podpory (jeśli włączone), ranty, spódnice i struktury do czyszczenia. Tę wagę można przeliczyć na objętość, dzieląc przez gęstość materiału. Objętość można następnie podzielić przez pole przekroju poprzecznego filamentu, aby oszacować całkowitą długość filamentu. Dlatego ten sam STL może wykazywać inne zachowanie gradientu przy zmianie wypełnienia, liczby ścian, ustawień podpór lub skali.' },
    { type: 'table', headers: ['Zmiana w slicerze', 'Wpływ na zużycie filamentu', 'Wpływ na gradient tęczowy'], rows: [
      ['Więcej wypełnienia', 'Zwiększa całkowite gramy i metry', 'Więcej postępu cyklu koloru w tej samej wysokości Z'],
      ['Więcej ścian', 'Zwiększa zużycie na większości warstw', 'Przejścia kompresują się pionowo i stają się częstsze'],
      ['Wyższy model z tą samą masą', 'Podobne metry na większej wysokości Z', 'Przejścia rozciągają się bardziej'],
      ['Podpory włączone', 'Zużywa kolory poza widoczną częścią', 'Widoczna faza może się przesunąć względem samego modelu'],
      ['Duży rant lub tratwa', 'Zużywa filament przed pierwszą widoczną warstwą', 'Kolor początkowy przesuwa się do przodu na szpuli'],
    ] },
    { type: 'diagnostic', variant: 'info', title: 'Użyj oszacowania slicera po ostatecznych ustawieniach', badge: 'Ważne', html: 'Wykonaj obliczenia po wybraniu wysokości warstwy, liczby ścian, wypełnienia, podpór, rantu i skali. Oszacowanie cyklu kolorów tęczowej szpuli wykonane przed generowaniem podpór może być widocznie błędne, ponieważ materiał podpory zużywa część sekwencji kolorów przed i podczas obiektu.' },

    { type: 'title', text: 'Zrozumienie długości cyklu kolorów na szpulach filamentu tęczowego', level: 2 },
    { type: 'paragraph', html: 'Długość cyklu koloru to dystans filamentu potrzebny do powtórzenia sekwencji. Na sześciokolorowej tęczowej szpuli jeden cykl może przebiegać czerwony, pomarańczowy, żółty, zielony, niebieski, fioletowy, a następnie wrócić do czerwonego. Cykl może być wystarczająco krótki dla kilku przejść w małej figurce lub wystarczająco długi, aby średni wydruk pokazał tylko jedną powolną zmianę. <strong>Kalkulator cyklu kolorów tęczowej szpuli</strong> jest najbardziej przydatny, gdy ta liczba jest realistyczna.' },
    { type: 'paragraph', html: 'Nie wszystkie filamenty przejściowe mają równe strefy kolorów. Niektóre produkty mieszają się stopniowo z długimi przejściami, podczas gdy inne mają silniejsze bloki. Kalkulator traktuje pełny cykl jako równomiernie rozłożone pasma kolorów, ponieważ jest to najbardziej praktyczne oszacowanie z samych danych slicera. Jeśli twoja szpula ma nierówne sekcje, użyj mapy Z jako przewodnika fazy i spodziewaj się, że rzeczywista mieszanka wizualna będzie bardziej miękka lub asymetryczna.' },
    { type: 'comparative', columns: 3, items: [
      { title: 'Tęcza krótkiego cyklu', description: 'Najlepsza do miniatur, ozdób, małych wazonów i tabliczek nazwisk. Wiele zmian kolorów przy mniejszej ilości materiału.', icon: 'mdi:weather-sunset-up', points: ['Szybkie widoczne przejścia', 'Może wyglądać chaotycznie na dużych płaskich powierzchniach'] },
      { title: 'Tęcza średniego cyklu', description: 'Zrównoważony wybór do obiektów biurkowych i średnich rzeźb. Zwykle tworzy od jednego do trzech głównych przejść.', icon: 'mdi:palette-swatch', highlight: true, points: ['Przewidywalna na typowych wydrukach', 'Dobra do obiektów 100-300 g'] },
      { title: 'Tęcza długiego cyklu', description: 'Lepsza do wysokich wazonów, dużych smoków, lamp i wydruków pojedynczej ściany wymagających powolnych, płynnych gradientów.', icon: 'mdi:palette-outline', points: ['Płynna podróż kolorów', 'Małe modele mogą pozostać jednego koloru'] },
    ] },
    { type: 'glossary', items: [
      { term: 'Cykl koloru', definition: 'Długość filamentu potrzebna do powtórzenia pełnej sekwencji kolorów od koloru początkowego z powrotem do tego samego koloru.' },
      { term: 'Faza', definition: 'Aktualna pozycja wewnątrz cyklu koloru w momencie rozpoczęcia drukowania widocznej części.' },
      { term: 'Pasma przejściowe', definition: 'Obszar pionowy wydrukowanego obiektu, w którym szacowany segment koloru zmienia się wzdłuż osi Z.' },
      { term: 'Przesunięcie początkowe', definition: 'Długość filamentu już zużyta przed rozpoczęciem modelu, w tym poprzednie wydruki, czyszczenie, spódnica, rant lub ręczne przycinanie.' },
    ] },

    { type: 'title', text: 'Jak oszacować pozycję przejścia koloru wzdłuż osi Z', level: 2 },
    { type: 'paragraph', html: 'Mapa Z jest estymatorem, a nie symulatorem slicera. Zakłada, że zużycie materiału jest rozłożone proporcjonalnie na wysokości wydruku. To dobry model pierwszego rzędu dla wielu wydruków w trybie wazonu, rzeźb o stałym przekroju i obiektów dekoracyjnych. Staje się mniej dokładny, gdy model ma ciężką podstawę, pusty środek, gęstą górę lub duże podpory, które zużywają materiał nierównomiernie na wysokości.' },
    { type: 'paragraph', html: 'Dla modelu o w miarę jednolitym przekroju, podzielenie wysokości wydruku przez cykle kolorów daje intuicyjną odpowiedź: jeśli obiekt 160 mm używa dwóch pełnych cykli kolorów, każdy cykl zajmuje około 80 mm wysokości Z. Jeśli używa tylko 0,4 cyklu, wydruk pokaże mniej niż połowę tęczowej sekwencji. Jeśli używa 4 cykli, kolory powtarzają się często i mogą stworzyć pasiasty wygląd zamiast pojedynczego płynnego gradientu.' },
    { type: 'list', icon: 'mdi:arrow-up-down', items: [
      'Użyj wydrukowanej wysokości Z, a nie całkowitej wysokości przemieszczania maszyny.',
      'Uwzględnij zużycie rantu lub tratwy jako przesunięcie początkowe, jeśli te elementy są drukowane przed obiektem.',
      'Dla płyt z wieloma obiektami, oblicz łączną wagę wycinka, jeśli obiekty są drukowane sekwencyjnie warstwa po warstwie.',
      'Dla drukowania sekwencyjnego, oblicz każdy obiekt osobno i przesuń przesunięcie początkowe dla następnego obiektu.',
      'Dla wieży do czyszczenia lub wielokolorowej struktury odpadowej, dodaj jej szacowaną masę do przesunięcia lub całkowitego zużycia w zależności od czasu drukowania.',
    ] },
    { type: 'card', icon: 'mdi:layers-triple', title: 'Dlaczego spód może nie pasować do przewidywanego pierwszego koloru', html: 'Wiele drukarek czyści, rysuje linię startową, drukuje spódnicę lub rant przed pierwszą widoczną ścianą. Te elementy zużywają filament i przesuwają fazę początkową. Jeśli pierwsza widoczna warstwa musi mieć określony kolor, zmierz lub oszacuj to zużycie przed drukiem i wprowadź je jako przesunięcie początkowe.' },

    { type: 'title', text: 'Gęstość, średnica i dlaczego dwa wydruki 180 g mogą używać różnych długości filamentu', level: 2 },
    { type: 'paragraph', html: 'Ta sama masa może reprezentować różne długości filamentu, ponieważ gęstość zmienia objętość na gram. PLA jest często szacowany na około 1,24 g/cm3, PETG na około 1,27 g/cm3, a niektóre jedwabne lub wypełniane mieszanki mogą różnić się na tyle, aby przesunąć przejścia o kilka milimetrów na wysokich wydrukach.' },
    { type: 'paragraph', html: 'Nie wszystkie filamenty przejściowe mają równe strefy kolorów. Kalkulator traktuje pełny cykl jako równomiernie rozłożone pasma kolorów. Jeśli twoja szpula ma nierówne sekcje, użyj mapy Z jako przewodnika.' },
    { type: 'table', headers: ['Rodzina materiałów', 'Gęstość planowania', 'Uwaga dotycząca planowania gradientu'], rows: [
      ['PLA tęczowy', '1,24 g/cm3', 'Dobry domyślny dla większości standardowych szpul tęczowych'],
      ['Jedwabne PLA', '1,18-1,24 g/cm3', 'Pigmenty i dodatki różnią się; sprawdź dane marki jeśli dostępne'],
      ['PETG multicolor', '1,25-1,29 g/cm3', 'Nieco gęstsze, więc te same gramy mogą zużywać mniej długości'],
      ['Wypełniane PLA', 'Bardzo zróżnicowane', 'Dodatki drewna, metalu, kamienia lub brokatu mogą zmienić oszacowanie'],
    ] },
    { type: 'proscons', title: 'Używanie wagi z slicera jako głównego wejścia', items: [
      { pro: 'Uwzględnia rzeczywiste ustawienia druku, takie jak ściany, wypełnienie, podpory i skalę.', con: 'Zależy od tego, czy profil gęstości slicera jest rozsądnie dokładny.' },
      { pro: 'Jest szybszy niż ręczne sumowanie ruchów ekstruzji z G-code.', con: 'Nie ujawnia nierównomiernego rozkładu materiału na każdej warstwie.' },
      { pro: 'Działa z różnymi modelami i slicerami przy minimalnym wprowadzaniu danych.', con: 'Linie startowe, czyszczenie i nieudane starty muszą być rozliczone osobno.' },
    ] },

    { type: 'title', text: 'Jak używać kalkulatora do rzeczywistego wydruku z filamentu tęczowego', level: 2 },
    { type: 'paragraph', html: 'Zacznij od wycięcia modelu z ostatecznymi ustawieniami. Skopiuj szacowaną wagę filamentu z slicera, następnie wprowadź gęstość materiału i średnicę filamentu. Wprowadź zmierzoną lub reklamowaną długość cyklu koloru. Na koniec wprowadź wydrukowaną wysokość Z modelu. Kalkulator zwraca użyty filament, liczbę cykli w części, gramy na pełny cykl koloru i szacowany dystans Z na cykl.' },
    { type: 'list', icon: 'mdi:check-circle', items: [
      'Jeśli cykle w części są poniżej 0,25, spodziewaj się subtelnej zmiany odcienia zamiast tęczowego obiektu.',
      'Jeśli cykle w części wynoszą około 1,0, model może pokazać jeden pełny przebieg przez paletę szpuli.',
      'Jeśli cykle w części wynoszą od 2,0 do 4,0, obiekt będzie wykazywał powtarzające się pasma kolorów.',
      'Jeśli Z na cykl jest większe niż wysokość modelu, zwiększ skalę, dodaj masy lub wybierz szpulę z szybszym przejściem.',
      'Jeśli Z na cykl jest bardzo małe, zmniejsz wypełnienie lub wybierz szpulę z dłuższym przejściem dla gładszych gradientów.',
    ] },
    { type: 'summary', title: 'Szybka zasada planowania', items: [
      'Więcej gramów na tej samej wysokości kompresuje tęczę pionowo.',
      'Więcej wysokości z tymi samymi gramami rozciąga gradient.',
      'Krótsza długość cyklu koloru tworzy więcej przejść.',
      'Przesunięcie początkowe kontroluje, która część tęczy pojawi się jako pierwsza.',
    ] },
    { type: 'message', title: 'Dla elementów wystawowych', ariaLabel: 'Porada planowania dla elementów wystawowych', html: 'Gdy granica koloru musi trafić na konkretną cechę, wydrukuj małą pionową kolumnę testową z tym samym profilem slicera. Porównaj zmierzone wysokości pasm z oszacowaniem, a następnie dostosuj długość cyklu lub przesunięcie początkowe przed przystąpieniem do pełnego wydruku.' },

    { type: 'title', text: 'Często zadawane pytania dotyczące planowania kolorów tęczowej szpuli', level: 2 },
    { type: 'paragraph', html: '<strong>Ile filamentu tęczowego potrzebuję na jeden pełny cykl koloru?</strong> Pomnóż długość cyklu przez gramy na metr dla swojej średnicy i gęstości filamentu. Dla standardowego PLA 1,75 mm, jeden metr to około 3 g, więc cykl 30 m to blisko 90 g. Kalkulator wykonuje tę konwersję bezpośrednio, ponieważ rzeczywista gęstość i średnica zmieniają odpowiedź.' },
    { type: 'paragraph', html: '<strong>Dlaczego mój wydruk pozostał w większości jednego koloru?</strong> Część prawdopodobnie zużyła mniej niż znaczący ułamek cyklu szpuli. Małe modele, niskie wypełnienie i filament tęczowy o bardzo długim przejściu mogą pozostać w obrębie jednego lub dwóch sąsiednich kolorów. Zwiększenie skali modelu, drukowanie wielu obiektów jednocześnie, zwiększenie ścian lub wybór szpuli z szybszym cyklem może uczynić przejścia bardziej widocznymi.' },
    { type: 'paragraph', html: '<strong>Czy mogę wymusić określony kolor na górze modelu?</strong> Możesz go oszacować za pomocą przesunięcia początkowego, ale dokładne umiejscowienie wymaga znajomości aktualnej fazy szpuli. Jeśli góra ma być niebieska, na przykład, możesz potrzebować przesunąć filament do przodu przez wydrukowanie obiektu do czyszczenia, zaczynając od znanego widocznego koloru lub wybierając inną skalę modelu.' },
    { type: 'diagnostic', variant: 'warning', title: 'Duże zmiany geometrii zmniejszają dokładność mapy Z', badge: 'Kształt modelu', html: 'Ciężki piedestał i cienka górna statua mogą zużywać większość materiału przy podstawie, więc rzeczywiste przejścia skupią się niżej niż sugeruje proporcjonalne oszacowanie Z. Dla takich modeli użyj kalkulatora do całkowitej liczby cykli, a następnie sprawdź podgląd warstw slicera, aby zrozumieć, gdzie skoncentrowana jest objętość ekstruzji.' },
  ],
  faq: [
    {
      question: 'Co to jest długość przejścia filamentu tęczowego?',
      answer: 'To ilość filamentu, zwykle mierzona w metrach lub stopach, potrzebna szpuli do przejścia przez jedną pełną sekwencję kolorów i powrotu do koloru początkowego.',
    },
    {
      question: 'Dlaczego kalkulator pyta o wagę części zamiast czasu wydruku?',
      answer: 'Zmiany kolorów zależą od długości filamentu zużytego przez ekstruder. Wagę z slicera można przeliczyć na objętość, a następnie na długość filamentu, podczas gdy czas wydruku nie opisuje bezpośrednio zużycia materiału.',
    },
    {
      question: 'Jak dokładna jest mapa przejść Z?',
      answer: 'To oszacowanie planistyczne. Jest najbardziej dokładna dla modeli o dość równomiernym rozkładzie materiału na wysokości i mniej dokładna dla kształtów z gęstą podstawą, pustymi sekcjami, podporami lub dużymi strukturami do czyszczenia.',
    },
    {
      question: 'Czy mogę tego użyć do jedwabnego PLA lub PETG filamentu tęczowego?',
      answer: 'Tak. Wybierz ustawienie wstępne materiału lub wprowadź gęstość z karty danych szpuli. Gęstość zmienia szacowaną długość filamentu, a tym samym przewidywaną liczbę cykli kolorów.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Wytnij model', text: 'Użyj ostatecznych ustawień slicera i skopiuj szacowaną wagę części.' },
    { name: 'Wprowadź dane szpuli', text: 'Ustaw długość cyklu koloru, gęstość, średnicę filamentu i ewentualne przesunięcie początkowe.' },
    { name: 'Odczytaj mapę Z', text: 'Użyj cykli, Z na cykl i widocznych pasm, aby zdecydować, czy gradient będzie subtelny, pełny czy powtarzający się.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Kalkulator Długości Przejścia Filamentu Tęczowego',
      description: 'Oszacuj zużycie cyklu kolorów filamentu tęczowego i pozycje przejść wzdłuż osi Z wydruku 3D.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Co to jest długość przejścia filamentu tęczowego?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'To ilość filamentu potrzebna szpuli do przejścia przez jedną pełną sekwencję kolorów i powrotu do koloru początkowego.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Kalkulator Długości Przejścia Filamentu Tęczowego do Wydruków 3D',
      description: 'Oszacuj cykle kolorów filamentu tęczowego, zużycie szpuli i gdzie przejścia gradientu pojawią się wzdłuż wysokości Z wycinka 3D.',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Wytnij model', text: 'Użyj ostatecznych ustawień slicera i skopiuj szacowaną wagę części.' },
        { '@type': 'HowToStep', position: 2, name: 'Wprowadź dane szpuli', text: 'Ustaw długość cyklu koloru, gęstość, średnicę filamentu i ewentualne przesunięcie początkowe.' },
        { '@type': 'HowToStep', position: 3, name: 'Odczytaj mapę Z', text: 'Użyj cykli, Z na cykl i widocznych pasm, aby zdecydować, czy gradient będzie subtelny, pełny czy powtarzający się.' }
      ],
    },
  ],
};
