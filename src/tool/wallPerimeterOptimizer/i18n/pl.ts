import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { WallPerimeterOptimizerUI } from '../ui';

export const content: ToolLocaleContent<WallPerimeterOptimizerUI> = {
  slug: 'optymalizator-perymetrow-i-scian',
  title: 'Optymalizator Perymetrów i Ścian',
  description: 'Oblicz dokładną liczbę perymetrów i bezpieczną szerokość linii, aby wydrukowana grubość ściany odpowiadała modelowi CAD bez wewnętrznych szczelin.',
  ui: {
    controlsAriaLabel: 'Dane wejściowe optymalizatora perymetrów ściany',
    resultsAriaLabel: 'Wyniki optymalizatora perymetrów ściany',
    unitSystemLabel: 'Jednostki',
    metricLabel: 'Metryczne',
    imperialLabel: 'US',
    tooltipLabel: 'Więcej informacji',
    nozzleLabel: 'Średnica dyszy',
    nozzleHelp: 'Fizyczna średnica otworu dyszy. Bezpieczna szerokość linii jest ograniczona do 80-120% tej wartości.',
    lineWidthLabel: 'Szerokość linii',
    lineWidthHelp: 'Szerokość ekstruzji slicera dla ścian zewnętrznych i wewnętrznych.',
    cadThicknessLabel: 'Grubość ściany CAD',
    cadThicknessHelp: 'Zaprojektowana grubość ściany, która powinna być odwzorowana przez całe perymetry.',
    commonNozzlesLabel: 'Typowe rozmiary dysz',
    infillStrategyLabel: 'Strategia wypełniania ścian',
    perimeterFirstLabel: 'Najpierw perymetry',
    solidInfillFallbackLabel: 'Zapasowe wypełnienie lite',
    solidInfillTip: 'Wskazówka: jeśli wolisz nie dodawać więcej perymetrów, użyj wypełnienia litego lub niezawodnego gap fill w cienkich ścianach, aby slicer nie pozostawiał wewnętrznych pustek.',
    copySolidInfillNote: 'Jeśli zachowasz mniej perymetrów, użyj wypełnienia litego lub zweryfikowanego gap fill dla wnętrz cienkich ścian.',
    visualLabel: 'Przekrój poprzeczny pokazujący perymetry upakowane wewnątrz grubości ściany CAD',
    cadEnvelopeLabel: 'Obwiednia ściany CAD',
    lineLabel: 'Linia ekstruzji',
    recommendedPerimetersLabel: 'Zalecane perymetry',
    realThicknessLabel: 'Rzeczywista grubość',
    residualLabel: 'Błąd resztkowy',
    verdictLabel: 'Werdykt precyzji',
    exactLabel: 'Dokładny',
    adjustLabel: 'Wymaga regulacji szerokości linii',
    impossibleLabel: 'Niemożliwe przy tej dyszy',
    adjustedWidthLabel: 'Dostosowana szerokość linii',
    noAdjustmentLabel: 'Brak regulacji',
    slicerBlockLabel: 'Konfiguracja slicera',
    perimetersUnitLabel: 'perymetry',
    copyLabel: 'Kopiuj ustawienia',
    copiedLabel: 'Blok slicera skopiowany.',
    safeRangeLabel: 'Bezpieczny zakres szerokości linii',
    compareLabel: 'Najbliższe opcje perymetrów',
    perimetersColumn: 'Perymetry',
    lineWidthColumn: 'Szerokość linii',
    realThicknessColumn: 'Rzeczywista grubość',
    errorColumn: 'Błąd',
    messageExact: 'Wybrana szerokość linii mieści się w granicach 0,05 mm od ściany CAD. To dobra ściana składająca się tylko z perymetrów.',
    messageAdjust: 'Obecna szerokość pozostawia mierzalną szczelinę. Użyj dostosowanej szerokości linii, aby zamknąć ścianę dokładnie całymi perymetrami.',
    messageTooThin: 'Ściana CAD jest cieńsza niż średnica dyszy. Przeprojektuj ścianę, użyj mniejszej dyszy lub zaakceptuj niestrukturalny element jednoliniowy.',
    messageOutsideRange: 'Żadna regulacja w bezpiecznym zakresie 80-120% średnicy dyszy nie może dokładnie zamknąć tej ściany. Przeprojektuj ścianę CAD lub zmień rozmiar dyszy.',
    mmUnit: 'mm',
    inchUnit: 'cal',
  },
  seo: [
    { type: 'title', text: 'Dlaczego grubość ściany musi odpowiadać całym perymetrom', level: 2 },
    {
      type: 'paragraph',
      html: 'Slicery FDM budują ścianę z dyskretnych ścieżek ekstruzji. Ściana CAD o grubości 1,20 mm nie jest ciągłą instrukcją litej bryły; staje się jednym, dwoma, trzema lub więcej perymetrami w zależności od szerokości linii, średnicy dyszy i reguł slicera. Jeśli matematyka nie domyka się, slicer musi wybrać między pozostawieniem wąskiej wewnętrznej szczeliny, wstawieniem cienkiej ścieżki gap fill, nadmierną ekstruzją regionu lub cichą zmianą kolejności ścieżek narzędzia. Części funkcjonalne cierpią, ponieważ ściana, która w CAD wyglądała na lity materiał, może zawierać słaby szew lub niespójny ścieg wewnątrz przekroju.',
    },
    {
      type: 'paragraph',
      html: 'Przydatne równanie jest proste: <strong>rzeczywista grubość ściany = liczba perymetrów × szerokość linii</strong>. Trudność polega na wyborze wartości, które pozostają drukowalne. Szerokość linii może zwykle przesunąć się nieco poniżej lub powyżej średnicy dyszy, ale nie może być dowolna. Ten optymalizator przeszukuje całkowite liczby perymetrów, mierzy błąd resztkowy względem grubości CAD i proponuje regulację szerokości linii tylko wtedy, gdy dokładna szerokość pozostaje w konserwatywnym zakresie 80-120% średnicy dyszy.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0,05 mm', label: 'próg precyzji używany dla werdyktu' },
        { value: '80-120%', label: 'bezpieczny pas szerokości linii wokół średnicy dyszy' },
        { value: 'n × szerokość', label: 'główne równanie grubości ściany' },
        { value: '2 miejsca po przecinku', label: 'minimalna praktyczna precyzja slicera' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Perymetry to geometria całkowita',
      html: 'Slicer nie może wydrukować 2,6 normalnych perymetrów. Jeśli ściana jest zbyt szeroka na dwie linie i zbyt wąska na trzy, wymaga zachowania gap fill lub skorygowanego wymiaru CAD.',
    },
    { type: 'title', text: 'Jak wybrać grubość ściany CAD dla dyszy 0,4 mm', level: 2 },
    {
      type: 'paragraph',
      html: 'Dysza 0,4 mm zazwyczaj używa szerokości linii około 0,40-0,48 mm. Przy szerokości linii 0,42 mm dwa perymetry dają 0,84 mm, trzy perymetry dają 1,26 mm, a cztery perymetry dają 1,68 mm. Zaprojektowana ściana 1,20 mm wygląda rozsądnie w CAD, ale jest oddalona o 0,06 mm od trzech perymetrów 0,42 mm. To blisko, ale nie dokładnie. Optymalizator może zasugerować 3 perymetry przy 0,40 mm, co doskonale zamyka ścianę i pozostaje dokładnie przy średnicy dyszy.',
    },
    {
      type: 'paragraph',
      html: 'W przypadku części mechanicznych często lepiej jest projektować ściany jako wielokrotności zamierzonej szerokości linii, zamiast zmuszać slicer do ich naprawy. Typowe cele ścian CAD dla dyszy 0,4 mm to około 0,8 mm dla lekkich powłok, 1,2 mm dla normalnych ścian funkcjonalnych, 1,6 mm dla mocniejszych obudów i 2,0 mm lub więcej dla elementów nośnych. Dokładne wartości powinny odpowiadać szerokości linii slicera, a nie tylko nominalnej średnicy dyszy.',
    },
    {
      type: 'table',
      headers: ['Dysza', 'Bezpieczny zakres szerokości linii', 'Dobre cele 2-ścienne', 'Dobre cele 3-ścienne'],
      rows: [
        ['0,2 mm', '0,16-0,24 mm', '0,32-0,48 mm', '0,48-0,72 mm'],
        ['0,4 mm', '0,32-0,48 mm', '0,64-0,96 mm', '0,96-1,44 mm'],
        ['0,6 mm', '0,48-0,72 mm', '0,96-1,44 mm', '1,44-2,16 mm'],
        ['0,8 mm', '0,64-0,96 mm', '1,28-1,92 mm', '1,92-2,88 mm'],
      ],
    },
    {
      type: 'tip',
      title: 'Projektuj od profilu slicera wstecz',
      html: 'Przed modelowaniem zatrzasków, żeber, bossów lub ścian obudowy, zdecyduj o dyszy i szerokości linii. Następnie ustaw wymiary ściany jako czyste wielokrotności, aby slicer nie wymyślał ścieżek gap fill w krytycznych obszarach.',
    },
    { type: 'title', text: 'Granice szerokości linii: dlaczego 80 do 120 procent to bezpieczny zakres', level: 2 },
    {
      type: 'paragraph',
      html: 'Dysza może położyć ścieg nieco szerszy niż jej otwór, ponieważ plastik jest dociskany do poprzedniej warstwy i spłaszczany w owalną ścieżkę. Może również drukować nieco węższą linię, ale zbyt wąska wymaga od drukarki stworzenia kontrolowanego ściegu z ograniczonym podparciem bocznym. Oba skrajności mają kompromisy. Bardzo szerokie linie mogą nadmiernie obciążać hotend, rozmazywać narożniki, ukrywać małe detale i zmniejszać dokładność wymiarową. Bardzo wąskie linie mogą niedostatecznie wypełniać ściany, osłabiać wiązanie i zwiększać wrażliwość konsystencji ekstruzji na pressure advance i średnicę filamentu.',
    },
    {
      type: 'paragraph',
      html: 'Zakres 80-120% używany tutaj jest celowo konserwatywny. Wiele slicerów pozwala na szersze wartości w trybach specjalnych, druku wazonowym lub grubych dyszach, a doświadczeni użytkownicy mogą po testach wyjść poza ten zakres. To narzędzie jest przeznaczone do niezawodnego planowania ścian mechanicznych, gdzie zalecenie powinno być na tyle bezpieczne, aby można je było skopiować do normalnego profilu bez powodowania oczywistej niedostatecznej lub nadmiernej ekstruzji. Jeśli dokładne dopasowanie wymaga szerokości linii poza zakresem, narzędzie zgłasza projekt jako niepraktyczny, zamiast udawać, że slicer może go czysto rozwiązać.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: 'Zbyt wąski', description: 'Ścieg może nie wciskać wystarczająco dużo materiału w przekrój ściany.', points: ['Słabe wiązanie między liniami', 'Widoczne szczeliny', 'Kruche cienkie ściany'] },
        { title: 'Bezpieczny zakres', description: 'Ścieg pozostaje blisko fizycznego zachowania dyszy.', highlight: true, points: ['Przewidywalna ekstruzja', 'Dobra kontrola wymiarowa', 'Wielokrotnego użytku profile'] },
        { title: 'Zbyt szeroki', description: 'Dysza może wypychać więcej plastiku, niż ścieżka może przyjąć.', points: ['Wybrzuszone narożniki', 'Grzbiety na powierzchni', 'Wyższe ciśnienie wsteczne'] },
      ],
    },
    {
      type: 'message',
      title: 'Bezpieczny nie oznacza skalibrowany',
      html: 'Nawet matematycznie idealna szerokość potrzebuje skalibrowanego przepływu. Jeśli mnożnik ekstruzji jest błędny, fizyczna ściana nadal może być mierzona jako gruba lub cienka suwmiarką.',
    },
    { type: 'title', text: 'Diagnozowanie wewnętrznych szczelin w podglądzie slicera', level: 2 },
    {
      type: 'paragraph',
      html: 'Najszybszym sposobem na zidentyfikowanie niezgodności perymetrów jest inspekcja podglądu warstwa po warstwie. Szukaj bladego paska między ścianami zewnętrzną i wewnętrzną, pojedynczej wędrującej linii gap fill lub obszaru, w którym slicer przełącza się między dwiema a trzema liniami wzdłuż tego samego elementu. Te wzorce są powszechne w ścianach obudów, bossach, klipsach i cienkich żebrach, ponieważ wymiar CAD jest często wybierany wizualnie, a nie jako wielokrotność szerokości ekstruzji.',
    },
    {
      type: 'paragraph',
      html: 'Szczelina w ścianie nie zawsze jest widoczna na zewnątrz wydruku. Część może wyglądać czysto, podczas gdy wewnątrz zawiera wąską pustkę zmniejszającą sztywność. Ma to znaczenie dla bossów śrubowych, kołków dociskowych, wsporników, ram dronów, kół zębatych i każdej części, w której obciążenie przechodzi przez ścianę. Jeśli szczelina znajduje się między perymetrami, ściana może łatwiej pękać, ponieważ ścieżka obciążenia przecina słabo związany lub brakujący materiał zamiast ciągłych ścieżek.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Gap fill to naprawa, a nie plan ściany',
      html: 'Nowoczesne slicery mogą wstawiać cienkie ścieżki gap fill, ale te ścieżki są często drukowane z inną prędkością, przepływem i chłodzeniem. W przypadku geometrii nośnej czysta wielokrotność perymetrów jest bardziej przewidywalna.',
    },
    {
      type: 'summary',
      title: 'Lista kontrolna podglądu',
      items: [
        'Przełącz na podgląd typu linii lub elementu, a nie tylko podgląd pełnego koloru.',
        'Sprawdź ściany przy otworach, żebrach, bossach i cienkich wypustkach.',
        'Sprawdź, czy ścieżki gap fill pojawiają się w obszarach strukturalnych.',
        'Porównaj grubość ściany CAD z całkowitymi wielokrotnościami szerokości linii.',
        'Używaj dostosowanej szerokości linii tylko wtedy, gdy pozostaje w bezpiecznym zakresie dyszy.',
      ],
    },
    { type: 'title', text: 'Gdy wynik jest dokładny, wymaga regulacji lub jest niemożliwy', level: 2 },
    {
      type: 'paragraph',
      html: 'Werdykt używa progu resztkowego 0,05 mm, ponieważ większość desktopowych systemów FDM ma praktyczne odchylenia od przepływu, średnicy filamentu, rozszerzalności cieplnej, kalibracji ruchu i techniki pomiarowej. Jeśli bieżące ustawienia mieszczą się w tym paśmie, narzędzie określa wynik jako dokładny. Nie oznacza to, że każda wydrukowana próbka będzie mierzona idealnie do mikrona; oznacza to, że geometria slicera jest wystarczająco dobrze dopasowana, że pozostały błąd wynika prawdopodobnie z kalibracji lub zachowania materiału, a nie z arytmetyki perymetrów.',
    },
    {
      type: 'paragraph',
      html: 'Wymaga regulacji oznacza, że bieżąca szerokość linii pozostawia większy residuum, ale ta sama liczba perymetrów może zamknąć ścianę z bezpieczną szerokością. Na przykład ściana 1,20 mm przy szerokości linii 0,42 mm daje trzy linie o szerokości 1,26 mm. Dostosowanie do 0,40 mm sprawia, że trzy linie mają dokładnie 1,20 mm. Niemożliwe oznacza, że ściana jest cieńsza niż średnica dyszy lub dokładna potrzebna szerokość linii wypadłaby poza bezpieczne pasmo dyszy. W takim przypadku lepiej przeprojektować ścianę lub zmienić rozmiar dyszy niż zmuszać slicer.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Perymetr', definition: 'Pętla ściany generowana przez slicer wokół obrysu warstwy.' },
        { term: 'Szerokość linii', definition: 'Zadana szerokość jednej wytłaczanej ścieżki, czasami nazywana szerokością ekstruzji.' },
        { term: 'Residuum', definition: 'Bezwzględna różnica między grubością ściany CAD a grubością wytworzoną przez całe perymetry.' },
        { term: 'Gap fill', definition: 'Ścieżka generowana przez slicer używana do zajęcia pozostałej przestrzeni, której normalne perymetry nie wypełniają czysto.' },
      ],
    },
    {
      type: 'proscons',
      title: 'Dostosowanie szerokości linii versus edycja CAD',
      items: [
        { pro: 'Regulacja szerokości linii jest szybka i może zachować plik modelu.', con: 'Wpływa na każdą ścianę używającą tego profilu, chyba że zostanie starannie ograniczona.' },
        { pro: 'Edycja CAD ujawnia intencję projektową dla przyszłych wydruków.', con: 'Zajmuje więcej czasu, gdy wiele elementów jest już związanych.' },
        { pro: 'Zmiana rozmiaru dyszy może uratować bardzo cienkie lub bardzo grube ściany.', con: 'Zmienia rozdzielczość szczegółów, czas druku i objętość ekstruzji.' },
      ],
    },
    { type: 'title', text: 'Stosowanie wyniku w Cura, PrusaSlicer i podobnych slicerach', level: 2 },
    {
      type: 'paragraph',
      html: 'Blok kopiowania celowo zawiera tylko dwie wartości, które się liczą: liczbę perymetrów i szerokość linii. W Cura liczba perymetrów odwzorowuje liczbę linii ściany, a szerokość linii odwzorowuje szerokość linii ściany lub globalną szerokość linii w zależności od struktury profilu. W PrusaSlicer i pochodnych użyj perimeters dla liczby pętli i extrusion width dla szerokości linii. Jeśli slicer ma oddzielne szerokości perymetru zewnętrznego i wewnętrznego, utrzymuj je równe dla optymalizowanej ściany, chyba że rozumiesz, jak slicer je łączy.',
    },
    {
      type: 'paragraph',
      html: 'Po zmianie ustawień slicera, pokrój ponownie i sprawdź tę samą ścianę w podglądzie. Podgląd powinien pokazywać oczekiwaną liczbę ścieżek wypełniających obwiednię CAD bez wąskiego pozostałego kanału. Następnie wydrukuj małą próbkę testową zawierającą tę samą grubość ściany i zmierz ją po ostygnięciu. Jeśli próbka jest konsekwentnie poza normą, ale podgląd jest poprawny, dostosuj przepływ lub ekspansję poziomą osobno; nie używaj liczby perymetrów do kompensacji błędu kalibracji.',
    },
    {
      type: 'card',
      title: 'Przepływ pracy tolerancji mechanicznej',
      html: 'Użyj tej kolejności dla części funkcjonalnych: wybierz dyszę, wybierz bezpieczną szerokość linii, zamodeluj wielokrotności ściany, pokrój bez wewnętrznych szczelin, wydrukuj próbkę, zmierz rzeczywistą ścianę, a następnie dostosuj przepływ lub kompensację wymiarową. Pominięcie etapu geometrii sprawia, że kalibracja goni ruchomy cel.',
    },
    {
      type: 'table',
      headers: ['Koncepcja slicera', 'Typowa nazwa pola', 'Co wprowadzić'],
      rows: [
        ['Liczba pętli', 'Liczba linii ściany / Perymetry', 'Zalecana całkowita liczba perymetrów'],
        ['Szerokość ścieżki ekstruzji', 'Szerokość linii / Szerokość ekstruzji', 'Zalecana lub dostosowana szerokość linii'],
        ['Cienkie ścieżki naprawcze', 'Gap fill / Wypełnij szczeliny między ścianami', 'Unikaj polegania na tym dla ścian strukturalnych'],
        ['Korekta wymiarowa', 'Ekspansja pozioma / Kompensacja XY', 'Dostosuj dopiero po czystej matematyce ściany'],
      ],
    },
    { type: 'title', text: 'Przypadki specjalne: cienkie ściany, żebra, bossy i elementy tolerancyjne', level: 2 },
    {
      type: 'paragraph',
      html: 'Cienkie ściany poniżej średnicy dyszy nie są normalnymi ścianami perymetru. Slicery mogą je drukować z wykrywaniem cienkich ścian, pojedynczymi liniami ekstruzji lub zmienną szerokością linii, ale wynik jest zwykle kosmetyczny lub lekko obciążony. W przypadku żebra strukturalnego zaprojektuj żebro wystarczająco grube na co najmniej dwie stabilne linie lub zaakceptuj, że zachowuje się jak elastyczna siatka. W przypadku bossów śrubowych użyj wystarczającej liczby perymetrów, aby obciążenie śruby przechodziło przez ciągłe pętle, a nie przez wypełniony gap fill pierścień.',
    },
    {
      type: 'paragraph',
      html: 'Elementy tolerancyjne wymagają dodatkowej uwagi, ponieważ korekta ściany może wpływać na rozmiar otworu i pasowanie. Jeśli klips lub zatrzask jest zaprojektowany jako ściana 0,9 mm, a profil używa linii 0,45 mm, dwa perymetry są czyste. Jeśli ten sam klips ma 1,0 mm, slicer może dodać małą środkową ścieżkę, która zmienia sztywność i pasowanie. Matematycznie czystsza ściana często sprawia, że elementy sprężyste są bardziej powtarzalne, ponieważ każda kopia używa tej samej liczby ciągłych ścieżek.',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Nie wymuszaj niemożliwej cienkiej geometrii',
      html: 'Jeśli ściana CAD jest poniżej średnicy dyszy, właściwym rozwiązaniem jest zwykle mniejsza dysza, grubszy element lub inna metoda produkcji. Wymuszanie szerokiej dyszy w ścianie poniżej średnicy dyszy tworzy nieprzewidywalny kształt ściegu.',
    },
    {
      type: 'list',
      items: [
        'Użyj co najmniej dwóch czystych linii dla żeber przenoszących obciążenie zginające.',
        'Użyj trzech lub więcej perymetrów wokół bossów śrubowych, jeśli pozwala na to miejsce.',
        'Unikaj pozostałych kanałów w klipsach, ponieważ stają się inicjatorami pęknięć.',
        'Waliduj pasowania wciskowe z tą samą szerokością linii używaną w końcowej części.',
      ],
    },
  ],
  faq: [
    {
      question: 'Ile perymetrów powinna używać ściana 1,2 mm z dyszą 0,4 mm?',
      answer: 'Zazwyczaj trzy perymetry. Przy szerokości linii 0,40 mm trzy perymetry równają się dokładnie 1,20 mm. Przy szerokości linii 0,42 mm rzeczywista grubość wynosi 1,26 mm.',
    },
    {
      question: 'Dlaczego kalkulator ogranicza szerokość linii do 80-120% średnicy dyszy?',
      answer: 'Ten zakres utrzymuje zalecenia w konserwatywnej drukowalnej strefie. Szersze lub węższe wartości mogą działać w szczególnych przypadkach, ale są mniej niezawodne przy planowaniu ścian mechanicznych.',
    },
    {
      question: 'Czy powinienem zmienić grubość CAD czy szerokość linii slicera?',
      answer: 'Jeśli regulacja jest mała i mieści się w bezpiecznym zakresie, zmiana szerokości linii jest szybka. W przypadku powtarzalnych części produkcyjnych edycja CAD do czystych wielokrotności jest zwykle łatwiejsza w utrzymaniu.',
    },
    {
      question: 'Czy dokładny werdykt gwarantuje, że wydrukowana część będzie mierzona dokładnie?',
      answer: 'Nie. Oznacza to, że geometria slicera domyka się czysto. Kalibracja przepływu, skurcz materiału, temperatura i kompensacja XY nadal wpływają na pomiar fizyczny.',
    },
    {
      question: 'Co powinienem zrobić, gdy wynik jest niemożliwy?',
      answer: 'Użyj mniejszej dyszy, przeprojektuj grubość ściany jako wielokrotność bezpiecznej szerokości linii lub zaakceptuj, że element będzie niestrukturalną ścieżką cienkiej ściany.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Wprowadź średnicę dyszy', text: 'Wybierz typowy rozmiar dyszy lub wpisz zmierzoną średnicę dyszy.' },
    { name: 'Ustaw szerokość linii', text: 'Wprowadź szerokość linii ściany slicera; narzędzie ogranicza ją do bezpiecznego zakresu dyszy.' },
    { name: 'Wprowadź grubość ściany CAD', text: 'Użyj zaprojektowanej grubości ściany z modelu.' },
    { name: 'Skopiuj ustawienia slicera', text: 'Zastosuj zalecaną liczbę perymetrów i dostosowaną szerokość linii, jeśli to konieczne.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Optymalizator Perymetrów i Ścian',
      description: 'Oblicz liczbę perymetrów FDM i bezpieczną szerokość linii dla dokładnej grubości ściany CAD.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Ile perymetrów powinna używać ściana 1,2 mm z dyszą 0,4 mm?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Zazwyczaj trzy perymetry. Przy szerokości linii 0,40 mm trzy perymetry równają się dokładnie 1,20 mm.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Jak optymalizować grubość ściany FDM dla całych perymetrów',
      step: [
        { '@type': 'HowToStep', text: 'Wprowadź średnicę dyszy.' },
        { '@type': 'HowToStep', text: 'Wprowadź szerokość linii slicera.' },
        { '@type': 'HowToStep', text: 'Wprowadź grubość ściany CAD.' },
        { '@type': 'HowToStep', text: 'Zastosuj zalecane perymetry i szerokość linii.' },
      ],
    },
  ],
};
