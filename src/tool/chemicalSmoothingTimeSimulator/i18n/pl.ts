import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ChemicalSmoothingTimeSimulatorUI } from '../ui';

export const content: ToolLocaleContent<ChemicalSmoothingTimeSimulatorUI> = {
  slug: 'kalkulator-czasu-wygladzania-chemicznego-abs-pvb',
  title: 'Kalkulator Czasu Wygładzania Chemicznego Parą Acetonu dla ABS i Alkoholem Izopropylowym dla PVB',
  description: 'Oszacuj konserwatywny czas ekspozycji na opary i suszenia dla chemicznego wygładzania ABS acetonem lub PVB alkoholem izopropylowym na podstawie objętości komory, temperatury, objętości części i szczegółowości powierzchni.',
  ui: {
    unitSystemLabel: 'Jednostki',
    metricLabel: 'Metryczne',
    imperialLabel: 'US',
    materialLabel: 'Materiał',
    absLabel: 'ABS + aceton',
    pvbLabel: 'PVB + alkohol izopropylowy',
    chamberVolumeLabel: 'Komora parowa',
    chamberTemperatureLabel: 'Temp. komory',
    partVolumeLabel: 'Objętość części',
    surfaceDetailLabel: 'Szczegółowość powierzchni',
    fineDetailLabel: 'Drobne szczegóły',
    balancedDetailLabel: 'Zrównoważony',
    coarseDetailLabel: 'Grube warstwy',
    presetsLabel: 'Ustawienia wstępne',
    miniPresetLabel: 'Mini',
    displayPresetLabel: 'Część ekspozycyjna',
    enclosurePresetLabel: 'Duża obudowa',
    exposureLabel: 'Szacowana ekspozycja',
    dryTimeLabel: 'Suszenie po wygładzaniu',
    firstTrialLabel: 'Pierwsza próba',
    riskLabel: 'Ryzyko szczegółów',
    vaporMapLabel: 'Intensywność oparów',
    chamberUnitMetric: 'l',
    chamberUnitImperial: 'gal',
    temperatureUnitMetric: '°C',
    temperatureUnitImperial: '°F',
    partUnitMetric: 'cm³',
    partUnitImperial: 'in³',
    secondsUnit: 's',
    minutesUnit: 'min',
    hoursUnit: 'h',
    controlsAriaLabel: 'Parametry wygładzania chemicznego',
    resultsAriaLabel: 'Wyniki wygładzania chemicznego',
    recommendationGentle: 'łagodne okno',
    recommendationStandard: 'uważnie obserwować',
    recommendationAggressive: 'wysokie ryzyko utraty szczegółów',
    safetyNote: 'Używaj tylko jako konserwatywnego oszacowania planistycznego. Opary rozpuszczalnika są łatwopalne i niebezpieczne: pracuj z dala od źródeł zapłonu, używaj wentylacji i ŚOI, i rozpocznij od krótkiej ekspozycji testowej.',
    copyButton: 'Kopiuj plan wygładzania',
    copiedButton: 'Skopiowano',
    copiedSummaryTemplate: 'Szacowanie wygładzania chemicznego: {minutes} min ({seconds} s) ekspozycji, pierwsza próba po {trialSeconds} s, suszyć przez około {dryHours} h.',
  },
  seo: [
    { type: 'title', text: 'Jak oszacować czas wygładzania parą acetonu dla ABS bez topienia szczegółów', level: 2 },
    {
      type: 'paragraph',
      html: 'Wygładzanie parą acetonu dla ABS to kontrolowany proces rozpuszczania powierzchni. Para acetonu zmiękcza zewnętrzną warstwę ABS, pozwalając widocznym śladom warstw FDM rozluźnić się w bardziej błyszczącą powierzchnię. Użyteczne okno jest wąskie: zbyt mała ekspozycja pozostawia linie warstw niezmienione, podczas gdy zbyt duża ekspozycja zaokrągla krawędzie, zmiękcza wytłoczony tekst, zamyka małe otwory i może powodować zwisanie cienkich ścianek. Oszacowanie czasu najlepiej traktować jako <strong>okno startowe do krótkich prób</strong>, a nie jako stały przepis.',
    },
    {
      type: 'paragraph',
      html: 'Kalkulator wykorzystuje pięć praktycznych zmiennych, które silnie wpływają na czas wygładzania: parę polimer-rozpuszczalnik, objętość komory, temperaturę komory, objętość wydrukowanej części i poziom szczegółowości powierzchni. Temperatura ma znaczenie, ponieważ prężność par i aktywność rozpuszczalnika gwałtownie rosną wraz z ogrzewaniem komory. Rozmiar części ma znaczenie, ponieważ większe części mają większą powierzchnię i masę termiczną. Poziom szczegółowości ma znaczenie, ponieważ ząb miniaturowego koła zębatego, logo lub zatrzask mogą zostać zniszczone przez czas, który wygląda idealnie na prostej prostokątnej obudowie.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '30-35%', label: 'rozsądna pierwsza próba szacowanego czasu' },
        { value: 'ABS/PVB', label: 'popularne polimery do druku do wygładzania parowego' },
        { value: 'godziny', label: 'czas suszenia przed obsługą lub montażem' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Wygładzanie parowe to operacja wykończeniowa, a nie krok kalibracji wymiarowej',
      html: 'Jeśli drukowana część ma pomieścić łożysko, gwint, uszczelkę, wciskany zatrzask lub wkładkę, zamaskuj krytyczny obszar lub zweryfikuj proces wygładzania na egzemplarzu ofiarnym. Wygładzanie chemiczne zmienia krawędzie i może zmienić tolerancje funkcjonalne.',
    },
    { type: 'title', text: 'ABS z acetonem vs PVB z alkoholem izopropylowym do wygładzania parowego', level: 2 },
    {
      type: 'paragraph',
      html: 'ABS jest zwykle wygładzany acetonem, ponieważ aceton jest skutecznym rozpuszczalnikiem dla powierzchni akrylonitrylu-butadienu-styrenu. PVB, często sprzedawany jako filament przeznaczony do przezroczystych lub błyszczących wydruków, jest powszechnie wygładzany alkoholem izopropylowym. Cel wizualny jest podobny, ale zachowanie procesu jest inne. ABS z acetonem może szybko stać się błyszczący i zaokrąglony, szczególnie w ciepłej komorze. PVB z alkoholem izopropylowym jest często bardziej wyrozumiały dla stopniowego rozwoju połysku, ale może nadal tracić ostrość, jeśli jest wystawiony zbyt długo.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'ABS z parami acetonu',
          description: 'Szybkie, silne działanie wygładzające z wysokim ryzykiem zmiękczenia małego tekstu, narożników, pinów i cienkich ścianek, gdy komora jest ciepła.',
          points: ['Najlepsze do widocznych obudów i rekwizytów', 'Wrażliwe na temperaturę', 'Wymaga długiego odgazowania przed użyciem w zamkniętych przestrzeniach'],
        },
        {
          title: 'PVB z parami alkoholu izopropylowego',
          description: 'Często wybierany do błyszczących części wizualnych i przezroczystych wydruków, gdzie pożądana jest wolniejsza, bardziej kontrolowana reakcja wygładzania.',
          highlight: true,
          points: ['Przydatne do części ekspozycyjnych', 'Może lepiej zachować szczegóły przy krótkich cyklach', 'Dokładnie wysuszyć przed polerowaniem lub pakowaniem'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Materiał', 'Typowy rozpuszczalnik', 'Charakter procesu', 'Główny tryb awarii'],
      rows: [
        ['ABS', 'Aceton', 'Szybkie zmiękczanie powierzchni i silny połysk', 'Zaokrąglone krawędzie, zwisające cienkie ścianki, zamknięte otwory'],
        ['PVB', 'Alkohol izopropylowy', 'Bardziej stopniowy połysk i redukcja zmętnienia', 'Lepka powierzchnia, rozmazana tekstura, zmiękczone drobne szczegóły'],
        ['ASA', 'Aceton lub inne rozpuszczalniki', 'Rodzina podobna do ABS, ale zależna od formuły', 'Części odporne na UV mogą nadal tracić ostre krawędzie'],
        ['PLA/PETG', 'Nieodpowiednie dla tego kalkulatora', 'Typowe rozpuszczalniki nie zachowują się jak wygładzanie ABS/PVB', 'Słabe wykończenie lub niebezpieczne eksperymenty z rozpuszczalnikami'],
      ],
    },
    {
      type: 'tip',
      title: 'Używaj ustawienia materiału jako pary rozpuszczalników, a nie tylko nazwy plastiku',
      html: 'Wybierz ABS, gdy proces polega na wygładzaniu parami acetonu, i PVB, gdy proces polega na wygładzaniu parami alkoholu izopropylowego. Różne mieszanki filamentów, dodatki, pigmenty i historia wyżarzania mogą zmienić rzeczywistą reakcję, więc przetestuj z dokładnie tą szpulą, która zostanie użyta do końcowego wydruku.',
    },
    { type: 'title', text: 'Dlaczego objętość komory zmienia czas wygładzania chemicznego', level: 2 },
    {
      type: 'paragraph',
      html: 'Objętość komory wpływa na to, jak szybko gromadzi się stężenie oparów i jak równomiernie otaczają one drukowaną część. Mały słoik może szybko stać się agresywny, ponieważ mała ilość rozpuszczalnika zajmuje małą przestrzeń nad cieczą. Większa komora zwykle potrzebuje więcej czasu, aby osiągnąć to samo efektywne środowisko parowe, ale może być bardziej równomierna, jeśli źródło rozpuszczalnika jest rozproszone, a część jest podniesiona ponad kontakt z cieczą. Kalkulator delikatnie zwiększa czas ekspozycji wraz ze wzrostem objętości komory, ponieważ zależność jest rzeczywista, ale nie idealnie liniowa w domowych konfiguracjach wykończeniowych.',
    },
    {
      type: 'paragraph',
      html: 'Równomierność jest równie ważna jak średnie stężenie. Część umieszczona zbyt blisko nasączonej rozpuszczalnikiem ściereczki, kałuży lub podgrzewanej płyty może otrzymać kierunkowe działanie: jedna strona staje się błyszcząca i miękka, podczas gdy przeciwna pozostaje matowa. Wyższa komora może również tworzyć gradienty, zwłaszcza jeśli para skrapla się na pokrywie i kapie. Najbezpieczniejszą interpretacją obliczonego czasu jest więc zaplanowany odstęp do inspekcji: wyjmij część, sprawdź mokry połysk i zatrzymaj się, zanim ostre cechy zaczną płynąć.',
    },
    {
      type: 'list',
      items: [
        'Podnieś część na stojaku odpornym na rozpuszczalniki, aby nigdy nie dotykała ciekłego rozpuszczalnika.',
        'Trzymaj chłonne źródła rozpuszczalnika z dala od powierzchni modelu, aby uniknąć jednostronnej nadmiernej ekspozycji.',
        'Używaj komory wystarczająco dużej, aby para mogła krążyć wokół wszystkich widocznych stron.',
        'Unikaj kapiącej kondensacji z pokrywy; krople tworzą blizny, kratery i błyszczące punkty.',
        'Nie zwiększaj ilości rozpuszczalnika w nieskończoność, aby skompensować dużą komorę; stężenie i ryzyko bezpieczeństwa rosną razem.',
      ],
    },
    {
      type: 'card',
      title: 'Większa komora nie jest automatycznie bezpieczniejsza',
      html: 'Duże uszczelnione objętości mogą pomieścić więcej łatwopalnych oparów. Większa komora może spowolnić wygładzanie, ale może też stworzyć większą niebezpieczną atmosferę. Używaj najmniejszej praktycznej komory, która zapewnia części luz i równomierną ekspozycję.',
    },
    { type: 'title', text: 'Temperatura, prężność par i utrata szczegółów', level: 2 },
    {
      type: 'paragraph',
      html: 'Temperatura jest jednym z najsilniejszych parametrów, ponieważ parowanie rozpuszczalnika wzrasta wraz z ogrzewaniem komory. Kilka stopni może zmienić wykończenie z powolnego satynowego wygładzania na szybki połysk i zaokrąglanie krawędzi. Ciepłe opary acetonu wokół ABS są szczególnie bezwzględne: powierzchnia może w krótkim czasie przejść od matowej do wilgotnej do zmiękczonej. Kalkulator skraca czas ekspozycji wraz ze wzrostem temperatury komory i podwyższa ocenę ryzyka, gdy temperatury przekraczają normalny poziom odniesienia temperatury pokojowej.',
    },
    {
      type: 'paragraph',
      html: 'Aktywne ogrzewanie to moment, w którym wiele hobbystycznych procesów wygładzania staje się niebezpiecznych. Opary acetonu i alkoholu izopropylowego są łatwopalne, a improwizowane grzałki, przełączniki, przekaźniki, iskry, płyty grzejne i źle uszczelniona elektronika mogą stwarzać poważne ryzyko pożaru. Jeśli temperatura jest kontrolowana, powinna być kontrolowana za pomocą sprzętu zaprojektowanego do pracy w niebezpiecznych warunkach parowych, a nie za pomocą odsłoniętej grzałki w zamkniętym pojemniku. Dla większości użytkowników wygładzanie w temperaturze pokojowej z krótkimi inspekcjami jest bardziej obronnym przepływem pracy.',
    },
    {
      type: 'table',
      headers: ['Stan komory', 'Oczekiwane zachowanie', 'Praktyczna reakcja'],
      rows: [
        ['Chłodne pomieszczenie poniżej 18 °C', 'Powolne działanie par i opóźniony połysk', 'Używaj dłuższych odstępów, ale sprawdzaj nierówną kondensację'],
        ['Temperatura pokojowa 20-25 °C', 'Przewidywalna linia bazowa dla większości testów', 'Zacznij od oszacowania kalkulatora i pierwszej próby'],
        ['Ciepła komora 26-32 °C', 'Szybsze zmiękczanie i wyższe ryzyko dla szczegółów', 'Skróć cykle i unikaj delikatnych części funkcjonalnych'],
        ['Gorąca lub aktywnie ogrzewana komora', 'Bardzo agresywne środowisko parowe', 'Nie improwizuj; ryzyko pożaru i nadmiernej ekspozycji gwałtownie wzrasta'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Nigdy nie używaj otwartego ognia ani odsłoniętych elementów grzejnych',
      html: 'Opary acetonu i alkoholu izopropylowego mogą się zapalić. Trzymaj komory wygładzające z dala od płomieni, iskier, gorących narzędzi, przełączników iskrzących, silników szczotkowych, grzałek nieprzeznaczonych do pracy w oparach i czynności podatnych na ładunki elektrostatyczne.',
    },
    { type: 'title', text: 'Objętość części, powierzchnia i wrażliwość geometryczna', level: 2 },
    {
      type: 'paragraph',
      html: 'Parametr oznaczony jako objętość części jest praktycznym wskaźnikiem całkowitego rozmiaru części. Nie jest idealnym substytutem powierzchni, ale jest łatwy do oszacowania na podstawie statystyk slicera i zazwyczaj wskazuje, czy wydruk to mały guzik, figurka wystawowa czy duży panel obudowy. Większe części często wymagają dłuższej ekspozycji, aby uzyskać równomierne wykończenie wizualne, ale mają też więcej krawędzi, narożników i cienkich sekcji, które mogą wykazywać nierównomierne wchłanianie rozpuszczalnika.',
    },
    {
      type: 'paragraph',
      html: 'Geometria może dominować wynik. Gładki cylindryczny wazon i wspornik kratownicowy mogą mieć tę samą objętość, ale całkowicie różną tolerancję wygładzania. Cienkie żebra, ostre wytłoczone napisy, małe otwory, wewnętrzne kanały, jaskółcze ogony i zatrzaski zmiękczają szybciej niż szerokie płaskie powierzchnie. Gdy część ma krytyczną geometrię, użyj ustawienia drobnych szczegółów, nawet jeśli linie warstw są widoczne, a następnie powtarzaj krótkie cykle zamiast próbować jednej długiej ekspozycji.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Wygładzanie parowe', definition: 'Proces wykończeniowy, w którym para rozpuszczalnika zmiękcza tylko zewnętrzną powierzchnię wydruku polimerowego.' },
        { term: 'Nadmierna ekspozycja', definition: 'Odstęp wygładzania wystarczająco długi, aby zaokrąglić szczegóły, odkształcić cienkie ścianki lub pozostawić lepką powierzchnię.' },
        { term: 'Odgazowanie', definition: 'Okres po wygładzaniu, podczas którego zaabsorbowany rozpuszczalnik odparowuje ze zmiękczonej powierzchni.' },
        { term: 'Szczegół powierzchni', definition: 'Mała geometria, taka jak tekst, tekstura, otwory, grzbiety, zatrzaski i ostre krawędzie, które mogą zostać utracone podczas wygładzania.' },
        { term: 'Próbka ofiarna', definition: 'Mały wydruk testowy wykonany z tego samego filamentu i ustawień w celu walidacji reakcji na rozpuszczalnik przed wykończeniem rzeczywistej części.' },
      ],
    },
    {
      type: 'summary',
      title: 'Zasady geometrii przy wyborze poziomu szczegółowości',
      items: [
        'Używaj drobnych szczegółów do tekstu, kół zębatych, małych otworów, zatrzasków, gwintów lub cienkich ścianek.',
        'Używaj zrównoważonego do części dekoracyjnych z umiarkowanymi liniami warstw i bez ciasnych pasowań.',
        'Używaj grubych warstw tylko do prostych kształtów, gdzie zaokrąglone krawędzie są akceptowalne.',
        'Podziel złożone modele na zamaskowane i niezamaskowane strefy, gdy tylko zewnętrzna powłoka wymaga połysku.',
      ],
    },
    { type: 'title', text: 'Odczytywanie wyników kalkulatora', level: 2 },
    {
      type: 'paragraph',
      html: 'Wynik ekspozycji to szacowany całkowity czas parowania dla konserwatywnego pierwszego przejścia. Jest wyświetlany w minutach i sekundach, ponieważ krótkie okna wykończeniowe są łatwiejsze do zarządzania za pomocą timera. Pierwsza próba jest celowo krótsza, zwykle około jednej trzeciej obliczonej ekspozycji. Wczesne wyjęcie części pozwala sprawdzić, czy powierzchnia zaczyna nabierać połysku, zanim utrata szczegółów stanie się trwała.',
    },
    {
      type: 'paragraph',
      html: 'Czas suszenia szacuje, jak długo wydruk powinien odpoczywać przed bliską obsługą, montażem, malowaniem, pakowaniem lub uszczelnianiem. Suszenie nie polega tylko na tym, że powierzchnia wydaje się sucha. Rozpuszczalnik może pozostać w zmiękczonym polimerze i nadal wpływać na dopasowanie, zapach, przyczepność farby i odczucie mechaniczne. Części ABS wygładzane acetonem często wymagają dłuższego odgazowania niż części PVB wygładzane alkoholem izopropylowym, zwłaszcza gdy część jest gruba lub ekspozycja była agresywna.',
    },
    {
      type: 'proscons',
      title: 'Jedna długa ekspozycja vs kilka krótkich cykli',
      items: [
        { pro: 'Pojedyncza ekspozycja jest szybsza i łatwiejsza do zaplanowania.', con: 'Daje mało ostrzeżenia, zanim drobne cechy zaczną mięknąć.' },
        { pro: 'Krótkie cykle ułatwiają zatrzymanie się na satynowym lub półpołyskowym wykończeniu.', con: 'Wymagają więcej obsługi i wielokrotnego otwierania komory.' },
        { pro: 'Wielokrotne inspekcje zmniejszają ryzyko zniszczenia unikalnego wydruku.', con: 'Wykończenie może być nieco mniej jednolite, jeśli część ochładza się lub wysycha między cyklami.' },
      ],
    },
    {
      type: 'message',
      title: 'Najlepsze wykorzystanie oszacowania',
      html: 'Ustaw timer na pierwszą próbę, sprawdź część w świetle padającym pod kątem, a następnie kontynuuj w krótkich odstępach. Zatrzymaj się, gdy linie warstw są jeszcze ledwo widoczne; powierzchnia często nadal się rozluźnia przez krótki czas po wyjęciu.',
    },
    { type: 'title', text: 'Bezpieczny przepływ pracy dla chemicznego wygładzania ABS i PVB', level: 2 },
    {
      type: 'paragraph',
      html: 'Bezpieczny przepływ pracy zaczyna się przed otwarciem rozpuszczalnika. Wydrukuj małą próbkę z tego samego filamentu, wysokości warstwy, liczby ścianek i ustawień chłodzenia. Oczyść końcową część, aby kurz i oleje nie zostały uwięzione pod zmiękczoną warstwą. Przygotuj niereaktywny stojak, timer, rękawice kompatybilne z rozpuszczalnikiem, ochronę oczu, wentylację i miejsce, gdzie część może wyschnąć bez dotykania. Trzymaj pojemniki z rozpuszczalnikiem zamknięte, gdy aktywnie nie ładujesz komory.',
    },
    {
      type: 'list',
      items: [
        'Potwierdź, że filament to rzeczywiście ABS lub PVB, a nie PLA, PETG, mieszanka PC lub nieznany materiał z recyklingu.',
        'Usuń podpory i szlifuj tylko przed wygładzaniem; szlifowanie po wygładzaniu może nierównomiernie przeciąć połysk.',
        'Zamaskuj otwory, gniazda łożysk, gwinty i powierzchnie stykowe, jeśli wymiary mają znaczenie.',
        'Zacznij od czasu pierwszej próby, a następnie dodawaj krótkie odstępy, jeśli wykończenie jest nadal zbyt matowe.',
        'Suszyć część w wentylowanym pomieszczeniu, aż zapach rozpuszczalnika i lepkość znikną.',
        'Pozbądź się ściereczek z rozpuszczalnikiem i zanieczyszczonych materiałów zgodnie z lokalnymi przepisami dotyczącymi odpadów niebezpiecznych.',
      ],
    },
    {
      type: 'tip',
      title: 'Nie oceniaj wykończenia, gdy powierzchnia jest mokra',
      html: 'Świeżo wystawiona powierzchnia ABS lub PVB może wyglądać na bardziej błyszczącą, niż będzie po wysuszeniu. Sprawdź zarówno połysk, jak i geometrię: jeśli narożniki wydają się spuchnięte, a mały tekst staje się miękki, zatrzymaj się, nawet jeśli linie warstw są jeszcze słabo widoczne.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Wentylacja jest częścią czasu procesu',
      html: 'Suszenie po wygładzaniu powinno odbywać się w miejscu, gdzie opary nie mogą się gromadzić. Część umieszczona natychmiast w szufladzie, torbie wysyłkowej, gablocie lub obudowie elektronicznej może zatrzymywać zapach i rozpuszczalnik dłużej niż oczekiwano.',
    },
    { type: 'title', text: 'Typowe problemy i działania naprawcze', level: 2 },
    {
      type: 'table',
      headers: ['Objaw', 'Prawdopodobna przyczyna', 'Następna regulacja'],
      rows: [
        ['Linie warstw wciąż ostre', 'Ekspozycja zbyt krótka lub komora zbyt chłodna', 'Powtórz z krótkimi krokami zamiast podwajania czasu'],
        ['Krawędzie zaokrąglone lub tekst rozmyty', 'Nadmierna ekspozycja dla poziomu szczegółowości', 'Użyj ustawienia drobnych szczegółów, niższej temperatury lub zamaskuj cechy'],
        ['Lepka powierzchnia po wysuszeniu', 'Zbyt dużo rozpuszczalnika wchłoniętego lub niewystarczająca wentylacja', 'Wydłuż czas suszenia i zmniejsz przyszłą ekspozycję'],
        ['Jedna strona bardziej błyszcząca niż druga', 'Nierównomierne źródło oparów lub część zbyt blisko rozpuszczalnika', 'Podnieś część, rozprosz źródło, obracaj tylko między cyklami'],
        ['Biała mgiełka lub mętne plamy', 'Kondensacja, wilgoć lub nierównomierne parowanie', 'Zmniejsz nasycenie komory i unikaj kapania z pokrywy'],
      ],
    },
    {
      type: 'paragraph',
      html: 'Jeśli część stanie się lepka, nie próbuj jej naprawić poprzez natychmiastowe dodanie więcej oparów. Więcej rozpuszczalnika zwykle pogłębia zmiękczoną strefę. Pozwól części całkowicie wyschnąć, a następnie zdecyduj, czy bardzo krótki cykl kontrolny jest wart ryzyka. Jeśli krawędzie już popłynęły, kształt nie może zostać przywrócony przez suszenie. W przypadku krytycznych części bardziej niezawodnym rozwiązaniem jest ponowne drukowanie z dostosowanymi ustawieniami slicera i użycie krótszego okna wykończeniowego.',
    },
    {
      type: 'card',
      title: 'Ustawienia slicera, które skracają czas wygładzania',
      html: 'Niższa wysokość warstwy, stabilna ekstruzja, suchy filament, odpowiednie chłodzenie i dobrze wyregulowany pressure advance zmniejszają ilość potrzebnej pracy chemicznej. Wygładzanie chemiczne powinno udoskonalać wydruk, a nie ukrywać poważne ringowanie, luki, bąble, teksturę mokrego filamentu lub niedostateczną ekstruzję.',
    },
    {
      type: 'summary',
      title: 'Praktyczna lista kontrolna wykończenia',
      items: [
        'Oszacuj ekspozycję z dokładnym materiałem, komorą, temperaturą, rozmiarem części i poziomem szczegółowości.',
        'Przeprowadź próbkę ofiarną lub pierwszą próbę przed zobowiązaniem się do końcowej części.',
        'Używaj krótkich cykli, gdy szczegóły mają znaczenie, i zatrzymaj się, zanim powierzchnia straci ostrość.',
        'Pozwól na wystarczający czas suszenia, aby zapach rozpuszczalnika, lepkość i miękkość wymiarowa zniknęły.',
        'Traktuj kontrolę łatwopalnych oparów jako wymóg bezpieczeństwa, a nie opcjonalną wygodę.',
      ],
    },
  ],
  faq: [
    {
      question: 'Jak długo ABS powinien pozostawać w oparach acetonu?',
      answer: 'Nie ma uniwersalnego czasu, ponieważ liczy się objętość komory, temperatura, geometria części i formuła filamentu. Użyj oszacowania kalkulatora jako punktu wyjścia, a następnie sprawdź w krótszym czasie pierwszej próby przed kontynuowaniem.',
    },
    {
      question: 'Czy PVB można wygładzać parami alkoholu izopropylowego?',
      answer: 'Tak, wiele filamentów PVB jest zaprojektowanych do wygładzania alkoholem izopropylowym. Proces jest zazwyczaj bardziej stopniowy niż ABS z acetonem, ale nadmierna ekspozycja może nadal powodować lepkość powierzchni lub rozmazywanie drobnych szczegółów.',
    },
    {
      question: 'Czy cieplejsza komora skraca czas wygładzania?',
      answer: 'Tak. Cieplejsze opary rozpuszczalnika zwykle działają szybciej, ale zwiększają też łatwopalność i ryzyko utraty szczegółów. Unikaj improwizowanych grzałek i trzymaj opary z dala od źródeł zapłonu.',
    },
    {
      question: 'Jak długo powinna schnąć wygładzona część?',
      answer: 'Planuj godziny, a nie minuty. ABS wygładzany acetonem często wymaga dłuższego odgazowania niż PVB wygładzany alkoholem izopropylowym, zwłaszcza w przypadku grubych części lub agresywnych ekspozycji.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Wybierz parę materiał-rozpuszczalnik', text: 'Wybierz ABS do wygładzania parami acetonu lub PVB do wygładzania parami alkoholu izopropylowego.' },
    { name: 'Wprowadź warunki komory', text: 'Dodaj objętość komory parowej i temperaturę komory, używając jednostek metrycznych lub US.' },
    { name: 'Opisz część', text: 'Wprowadź przybliżoną objętość części i wybierz poziom szczegółowości powierzchni odpowiadający najmniejszym cechom.' },
    { name: 'Użyj pierwszej próby', text: 'Sprawdź część w krótszym czasie testowym przed wykonaniem pełnej szacowanej ekspozycji.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Kalkulator Czasu Wygładzania Chemicznego Parą Acetonu dla ABS i Alkoholem Izopropylowym dla PVB',
      description: 'Oszacuj czas ekspozycji na opary chemiczne i suszenia dla wykończenia ABS acetonem i PVB alkoholem izopropylowym.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Jak długo ABS powinien pozostawać w oparach acetonu?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Użyj konserwatywnego oszacowania opartego na objętości komory, temperaturze, rozmiarze części i poziomie szczegółowości, a następnie sprawdź w krótszym czasie pierwszej próby.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Jak oszacować czas wygładzania chemicznego dla wydruków ABS lub PVB',
      step: [
        { '@type': 'HowToStep', text: 'Wybierz ABS z acetonem lub PVB z alkoholem izopropylowym.' },
        { '@type': 'HowToStep', text: 'Wprowadź objętość i temperaturę komory.' },
        { '@type': 'HowToStep', text: 'Wprowadź objętość części i poziom szczegółowości powierzchni.' },
        { '@type': 'HowToStep', text: 'Zacznij od pierwszej próby i kontynuuj tylko wtedy, gdy szczegóły pozostaną bezpieczne.' },
      ],
    },
  ],
};
