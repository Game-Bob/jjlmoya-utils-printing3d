import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { PowerSupplyEstimatorUI } from '../ui';

export const content: ToolLocaleContent<PowerSupplyEstimatorUI> = {
  slug: 'kalkulator-doboru-zasilacza-drukarki-3d',
  title: 'Kalkulator Doboru Zasilacza do Drukarki 3D: Hotendy, Stoły Grzewcze, Silniki i Aktualizacje z 12V na 24V',
  description: 'Oszacuj moc i maksymalny prąd zasilacza dla modernizacji drukarki 3D, uwzględniając stół grzewczy, kartridż hotendu, silniki krokowe, obciążenie pomocnicze i margines bezpieczeństwa.',
  ui: {
    systemVoltageLabel: 'Napięcie systemu',
    bedPowerLabel: 'Stół grzewczy',
    hotendPowerLabel: 'Kartridż hotendu',
    motorsLabel: 'Silniki',
    motorPowerLabel: 'Na silnik',
    auxiliaryPowerLabel: 'Obciążenie pomocnicze',
    safetyMarginLabel: 'Margines bezpieczeństwa',
    totalLoadLabel: 'Obciążenie bezpośrednie',
    psuRequiredLabel: 'Wymagany zasilacz',
    currentRequiredLabel: 'Prąd maksymalny',
    recommendedPsuLabel: 'najbliższy standardowy zasilacz',
    utilizationLabel: 'obciążenie wybranego rozmiaru',
    thermalMapLabel: 'Mapa mocy cieplnej',
    bedSegmentLabel: 'Stół',
    hotendSegmentLabel: 'Hotend',
    motorsSegmentLabel: 'Silniki',
    auxiliarySegmentLabel: 'Pomoc.',
    headroomSegmentLabel: 'Zapas',
    scenarioLabel: 'Ustawienia wstępne',
    scenarioBedSlinger: 'Stół ruchomy',
    scenarioCoreXY: 'CoreXY',
    scenarioLargeFormat: 'Wielkoformatowa',
    copyButton: 'Kopiuj podsumowanie',
    copiedButton: 'Skopiowano',
    controlsAriaLabel: 'Parametry zasilacza',
    resultsAriaLabel: 'Wyniki zasilacza',
    copiedSummaryTemplate: 'Zasilacz drukarki 3D: {requiredWatts} W wymagane, {currentAmps} A przy {voltage} V, zalecany {recommendedWatts} W.',
    wattsUnit: 'W',
    ampsUnit: 'A',
    voltsUnit: 'V',
    percentUnit: '%',
    countUnit: 'x',
  },
  seo: [
    { type: 'title', text: 'Jak Dobrać Zasilacz do Drukarki 3D Bez Zgadywania', level: 2 },
    {
      type: 'paragraph',
      html: 'Zasilacz do drukarki 3D dobiera się na podstawie obciążeń, które mogą być aktywne jednocześnie: stół grzewczy, kartridż grzewczy hotendu, silniki krokowe, płyta sterownika, wentylatory, diody LED, sondy, przekaźniki grzałki komory i wszelka elektronika pomocnicza. Podstawowa zależność elektryczna jest prosta: <strong>wat to wolt pomnożony przez amper</strong>. Drukarka, która potrzebuje 420 W przy systemie 24 V, może pobierać około 17,5 A, zanim uwzględni się dodatkowy zapas na rozruch, straty regulacji lub przyszłe rozbudowy.',
    },
    {
      type: 'paragraph',
      html: 'Błędem, który powoduje wiele niestabilnych konstrukcji drukarek, jest używanie średniego zużycia podczas druku zamiast maksymalnego obciążenia sterowanego. Podczas normalnego druku PLA stół może pracować z częściowym wypełnieniem po osiągnięciu temperatury, ale podczas nagrzewania zarówno stół, jak i hotend mogą pracować jednocześnie na 100%. Jeśli zasilacz jest dobierany tylko na podstawie odczytu inteligentnego gniazdka z połowy wydruku, może wydawać się wystarczający, będąc jednocześnie na granicy podczas nagrzewania, użytkowania z obudową ABS lub cyklu odzyskiwania w zimnym pomieszczeniu.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: 'P = V x A', label: 'podstawowy wzór doboru' },
        { value: '20-35%', label: 'typowy praktyczny zapas' },
        { value: '24V', label: 'niższy prąd niż 12V przy tej samej mocy' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Nie traktuj mocy zasilacza jako pozwolenia na przeciążanie złączy',
      html: 'Zasilacz 500 W nie czyni każdego zacisku, ścieżki PCB, złącza XT, wtyku baryłkowego czy bloku śrubowego bezpiecznym dla 500 W. Prąd należy sprawdzać na poziomie przewodów i złączy, szczególnie w przypadku stołów grzewczych i grzałek komory.',
    },
    { type: 'title', text: 'Jakie Obciążenia Należy Uwzględnić w Obliczeniach Mocy Zasilacza?', level: 2 },
    {
      type: 'paragraph',
      html: 'W przypadku drukarki FDM stół grzewczy jest zazwyczaj dominującym obciążeniem mocy. Typowy stół 220 x 220 mm może mieć około 180-250 W, podczas gdy większy stół 300 x 300 mm może osiągać 300-500 W w zależności od napięcia i konstrukcji. Stoły AC są inne, ponieważ ich moc grzewcza nie jest dostarczana przez zasilacz DC drukarki; w takim przypadku należy uwzględnić tylko elektronikę sterującą DC, wentylatory, hotend, silniki i niewielki prąd pobierany przez wejście przekaźnika półprzewodnikowego.',
    },
    {
      type: 'paragraph',
      html: 'Kartridż grzewczy hotendu to kolejne oczywiste obciążenie. Standardowe kartridże mają często 30 W lub 40 W, hotendy o wysokim przepływie często używają 50 W lub 60 W, a niektóre konfiguracje wysokotemperaturowe używają 80 W lub więcej. Kartridż o wyższej mocy nie pobiera automatycznie tej mocy stale, ale zasilacz musi obsługiwać pełną moc znamionową, ponieważ firmware może nakazać 100% wypełnienia podczas nagrzewania lub odzyskiwania po dużym zapotrzebowaniu na wytłaczanie.',
    },
    {
      type: 'list',
      items: [
        'Moc stołu grzewczego ze specyfikacji stołu lub zmierzonego napięcia i rezystancji.',
        'Moc kartridża hotendu z wartości znamionowej, a nie ze średniego cyklu pracy.',
        'Zapas na silniki krokowe na podstawie liczby silników i ustawień prądu sterownika.',
        'Moc pomocnicza dla sterownika, wentylatorów, Raspberry Pi, diod LED, sond, przekaźników i płytek głowicy.',
        'Margines bezpieczeństwa dla obciążeń przejściowych, starzenia kondensatorów, ciepła obudowy i przyszłych modernizacji.',
      ],
    },
    {
      type: 'table',
      headers: ['Komponent', 'Typowy zakres', 'Wskazówka doboru'],
      rows: [
        ['Stół grzewczy 220 mm', '180-250 W', 'Często największe obciążenie DC w drukarce biurkowej.'],
        ['Stół grzewczy 300 mm', '300-500 W', 'Dokładnie sprawdź przekrój przewodów i ścieżkę MOSFET stołu.'],
        ['Kartridż hotendu', '30-80 W', 'Użyj wartości znamionowej kartridża, a nie zaobserwowanej mocy średniej.'],
        ['Silniki krokowe', '6-15 W każdy', 'Zależy od limitu prądu, napięcia, trybu sterownika i prądu trzymania.'],
        ['Wentylatory i elektronika', '10-60 W', 'Płytki głowicy, diody LED i komputery jednopłytkowe szybko się sumują.'],
      ],
    },
    { type: 'title', text: 'Wymagania Zasilania: 12V kontra 24V', level: 2 },
    {
      type: 'paragraph',
      html: 'Przy tej samej mocy drukarka 24 V potrzebuje połowy prądu drukarki 12 V. Obciążenie 360 W pobiera 30 A przy 12 V, ale tylko 15 A przy 24 V. Niższy prąd zmniejsza spadek napięcia w przewodach, zmniejsza ciepło w złączach i daje obwodom stołu i hotendu większy praktyczny zapas. Dlatego wiele nowoczesnych drukarek 3D i płytek modernizacyjnych preferuje 24 V dla grzałek i elektroniki ruchu.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Systemy 12V',
          description: 'Przydatne w starszych drukarkach i akcesoriach samochodowych, ale wysoka moc stołu może wymagać bardzo wysokich prądów.',
          points: ['Wyższy amperaż przy tych samych watach', 'Bardziej wrażliwe na rezystancję złączy', 'Powszechne w starszych maszynach z ery RepRap'],
        },
        {
          title: 'Systemy 24V',
          description: 'Preferowane w wielu nowoczesnych drukarkach, ponieważ ta sama moc grzewcza jest dostarczana przy niższym prądzie.',
          highlight: true,
          points: ['Niższy amperaż przy tych samych watach', 'Mniejszy spadek napięcia w okablowaniu', 'Lepiej nadają się do większych stołów grzewczych DC'],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Użyj prądu jako praktycznej weryfikacji okablowania',
      html: 'Po obliczeniu wymaganej mocy podziel przez napięcie, aby uzyskać prąd maksymalny. Ta wartość w amperach jest istotna dla zacisków zasilacza, bezpieczników, przełączników, przekroju przewodów, złączy stołu i wartości znamionowych wejścia płyty.',
    },
    {
      type: 'proscons',
      title: 'Zmiana napięcia podczas modernizacji',
      items: [
        { pro: 'Przejście z 12 V na 24 V może zmniejszyć prąd i nagrzewanie złączy przy tej samej mocy stołu.', con: 'Wentylatory, diody LED, pompy i niektóre płyty sterowników mogą wymagać wymiany lub przetwornic obniżających.' },
        { pro: 'Hotendy i stoły 24 V często osiągają temperaturę szybciej, jeśli są prawidłowo wyspecyfikowane.', con: 'Nieprawidłowo podłączona grzałka 12 V do 24 V może być niebezpiecznie przeciążona.' },
        { pro: 'Układy sterowników i ruchu często działają lepiej z nowoczesną elektroniką 24 V.', con: 'Każde napięcie akcesoriów musi zostać sprawdzone przed pierwszym włączeniem.' },
      ],
    },
    { type: 'title', text: 'Jaki Margines Bezpieczeństwa Powinien Mieć Zasilacz Drukarki 3D?', level: 2 },
    {
      type: 'paragraph',
      html: 'Margines bezpieczeństwa to nie zmarnowana pojemność; to przestrzeń operacyjna. Zasilacze impulsowe są najbardziej komfortowe, gdy nie są stale obciążone mocą znamionową w ciepłej obudowie. Zasilacz drukarki zamontowany pod ogrzewaną komorą, obok łańcucha kablowego stołu lub wewnątrz słabo wentylowanej podstawy może pracować w wyższej temperaturze niż ten sam zasilacz na otwartym stole. Ciepło skraca żywotność kondensatorów i może powodować wyłączanie pod obciążeniem.',
    },
    {
      type: 'paragraph',
      html: 'Dla typowej drukarki biurkowej 20% zapasu to rozsądne minimum, gdy oszacowanie obciążenia jest dokładne. Dla dużych stołów, hotendów o wysokim przepływie, wentylatorów komory, oświetlenia LED lub przyszłych modernizacji głowicy, 30-35% jest bardziej komfortowe. Dla drukarek eksperymentalnych, maszyn wysokotemperaturowych lub konstrukcji, które mogą dodać drugi hotend, aktywne sterowanie ogrzewaniem komory lub wiele akcesoriów, wybór jednego standardowego stopnia zasilacza powyżej obliczonego wymagania jest zwykle spokojniejszym wyborem inżynierskim.',
    },
    {
      type: 'table',
      headers: ['Margines', 'Zastosowanie', 'Praktyczne znaczenie'],
      rows: [
        ['10%', 'Ściśle znane obciążenia, otwarta rama, wysokiej jakości zasilacz', 'Działa tylko wtedy, gdy każde obciążenie i ścieżka przewodów są już zweryfikowane.'],
        ['20%', 'Normalna drukarka biurkowa', 'Dobra podstawa dla stabilnej konstrukcji standardowej.'],
        ['30%', 'Ulepszony stół, hotend o wysokim przepływie, zamknięta elektronika', 'Lepszy komfort termiczny i elastyczność na przyszłość.'],
        ['40%+', 'Drukarka wielkoformatowa lub eksperymentalna', 'Przydatne, gdy założenia obciążenia mogą się później zmienić.'],
      ],
    },
    {
      type: 'card',
      title: 'Dlaczego większy zasilacz nie wtłacza więcej mocy do drukarki',
      html: 'Regulowany zasilacz DC dostarcza napięcie; podłączone obciążenia pobierają prąd zgodnie z rezystancją, cyklem pracy i elektroniką sterującą. Zasilacz 600 W w drukarce, która potrzebuje 300 W, nie wtłacza 600 W do stołu. Ma po prostu wystarczającą pojemność, aby dostarczyć prąd bez pracy na granicy swoich możliwości.',
    },
    { type: 'title', text: 'Pobór Mocy Stołu Grzewczego i Zachowanie Termiczne', level: 2 },
    {
      type: 'paragraph',
      html: 'Stoły grzewcze są obciążeniami rezystancyjnymi, więc ich teoretyczną moc można oszacować na podstawie napięcia i rezystancji za pomocą <code>P = V² / R</code>. Jeśli stół 24 V ma rezystancję 2,4 oma, jest to w przybliżeniu stół 240 W. Rzeczywista moc zmienia się w zależności od napięcia zasilania, strat w okablowaniu, rezystancji MOSFET i temperatury stołu, ponieważ rezystancja może się nieznacznie zmieniać w miarę nagrzewania grzałki.',
    },
    {
      type: 'paragraph',
      html: 'Stół, który pracuje z 35% cyklem pracy podczas stabilnego druku PLA, może nadal wymagać 100% przy uruchomieniu. Do doboru zasilacza użyj pełnej mocy znamionowej grzałki. Do szacowania kosztów energii elektrycznej średni cykl pracy jest bardziej przydatny. Mylenie tych dwóch kwestii jest częstym źródłem niedowymiarowanych zasilaczy: zużycie energii podczas dwugodzinnego wydruku to nie to samo co chwilowa pojemność elektryczna.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Wyjątek dla stołu AC',
      html: 'Jeśli drukarka używa stołu AC zasilanego z sieci, nie uwzględniaj mocy stołu w obciążeniu zasilacza DC. Zamiast tego zwymiaruj oddzielnie okablowanie AC, bezpiecznik, przekaźnik, odciążenie przewodu, uziemienie i zabezpieczenie termiczne. Zasilacz DC nadal zasila sterownik, hotend, silniki i akcesoria.',
    },
    {
      type: 'list',
      items: [
        'Izolowany spód stołu: mniejsze straty ciepła i niższy średni cykl pracy po nagrzaniu.',
        'Gruba płyta aluminiowa: wolniejsze nagrzewanie, ale bardziej równomierny rozkład ciepła.',
        'Duża płyta szklana: większa masa termiczna, często dłuższe nagrzewanie przy tej samej mocy.',
        'Zimne pomieszczenie lub otwarta rama: więcej mocy odzyskiwania potrzebnej do utrzymania temperatury.',
      ],
    },
    { type: 'title', text: 'Hotend, Silniki, Wentylatory i Obciążenia Pomocnicze', level: 2 },
    {
      type: 'paragraph',
      html: 'Silniki krokowe są często przeszacowywane lub niedoszacowywane, ponieważ ich zachowanie elektryczne nie jest tak proste jak dodawanie napięcia i prądu znamionowego. Nowoczesne sterowniki chopperowe regulują prąd uzwojenia, a moc pobierana z zasilacza zależy od ustawień sterownika, prędkości silnika, redukcji prądu trzymania i obciążenia mechanicznego. Do doboru zasilacza praktyczny zapas 8-15 W na aktywny silnik krokowy jest często wystarczający dla typowych drukarek biurkowych, ale silniki o bardzo wysokim prądzie lub wiele silników Z zasługują na bezpośrednie obliczenia z konfiguracji sterownika.',
    },
    {
      type: 'paragraph',
      html: 'Obciążenia pomocnicze łatwo przeoczyć, ponieważ każdy element jest mały: wentylator hotendu, wentylator chłodzenia wydruku, wentylator sterownika, wentylatory cyrkulacji komory, diody LED, czujnik filamentu, sonda, płyta główna, wyświetlacz, płytka głowicy, Raspberry Pi, kamera, koncentrator USB i straty przetwornicy obniżającej. Drukarka z komputerem jednopłytkowym i oświetleniem obudowy może dodać 20-40 W, nie sprawiając wrażenia dużej zmiany elektrycznej.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Moc ciągła', definition: 'Obciążenie, które zasilacz jest przeznaczony do dostarczania przez długi czas w określonych warunkach chłodzenia i temperatury.' },
        { term: 'Obciążenie szczytowe', definition: 'Krótkotrwałe zapotrzebowanie, które może być wyższe niż średnie obciążenie, jak podczas nagrzewania lub jednoczesnego odzyskiwania grzałek.' },
        { term: 'Spadek napięcia', definition: 'Napięcie tracone na przewodach i złączach, ponieważ rzeczywiste przewodniki mają rezystancję.' },
        { term: 'Cykl pracy', definition: 'Procent czasu, w którym sterowana grzałka jest włączona podczas okresu regulacji.' },
        { term: 'Zapas', definition: 'Dodatkowa pojemność powyżej obliczonego obciążenia, która utrzymuje zasilacz z dala od jego granicy.' },
      ],
    },
    {
      type: 'summary',
      title: 'Lista kontrolna obciążeń pomocniczych',
      items: [
        'Zsumuj wszystkie wentylatory według ich mocy znamionowej lub napięcia razy prąd.',
        'Uwzględnij komputery jednopłytkowe i kamery, jeśli są zasilane z zasilacza drukarki.',
        'Zarezerwuj moc na paski LED, płytki głowicy, przekaźniki, sondy i straty przetwornic obniżających.',
        'Przelicz po dodaniu grzałek obudowy, dodatkowych ekstruderów lub chłodzenia wydruku o wysokim prądzie.',
      ],
    },
    { type: 'title', text: 'Odczytywanie Wyników Kalkulatora', level: 2 },
    {
      type: 'paragraph',
      html: 'Obciążenie bezpośrednie to suma stołu, hotendu, silników i wejść pomocniczych przed zapasem. Wartość wymaganego zasilacza dodaje wybrany margines bezpieczeństwa. Wartość prądu maksymalnego dzieli to wymaganie przez napięcie systemu, odpowiadając tym samym na praktyczne pytanie dotyczące okablowania: ile amperów musi bezpiecznie przenosić zasilacz i ścieżka wejściowa przy wybranym napięciu?',
    },
    {
      type: 'paragraph',
      html: 'Zalecany rozmiar zasilacza zaokrągla w górę do powszechnej klasy mocy. Jeśli wymagana wartość wynosi 382 W, zasilacz 400 W może wydawać się matematycznie wystarczający, ale model 450 W lub 500 W może być lepszy, jeśli ma lepsze chłodzenie, lepsze zaciski, uznane certyfikaty bezpieczeństwa lub bardziej uczciwą moc ciągłą. Moc na etykiecie to tylko jeden z elementów jakości zasilacza.',
    },
    {
      type: 'table',
      headers: ['Wynik', 'Zastosowanie', 'Sygnał ostrzegawczy'],
      rows: [
        ['Wymagane waty', 'Wybór pojemności zasilacza', 'Wartość mieści się w granicach kilku watów od etykiety zasilacza.'],
        ['Prąd maksymalny', 'Kontrola przewodów, bezpieczników i złączy', 'Prąd przekracza wartości znamionowe płyty lub zacisków.'],
        ['Zalecany rozmiar', 'Lista zakupowa', 'Tani zasilacz bez marki obiecujący wysoką moc przy małych zaciskach.'],
        ['Wykorzystanie', 'Szacowanie komfortu termicznego', 'Obciążenie ciągłe powyżej około 80-85%.'],
      ],
    },
    {
      type: 'message',
      title: 'Praktyczna zasada zakupu',
      html: 'Wybierz pierwszy wysokiej jakości zasilacz powyżej obliczonego wymagania, a następnie przed instalacją sprawdź napięcie wyjściowe, prąd znamionowy, orientację chłodzenia, wentylację obudowy, uziemienie ochronne, strategię bezpieczników i wartości znamionowe złączy.',
    },
    { type: 'title', text: 'Typowe Błędy w Doborze Zasilacza Przy Modernizacji Drukarek 3D', level: 2 },
    {
      type: 'list',
      items: [
        'Używanie średnich watów z inteligentnego gniazdka zamiast maksymalnego obciążenia grzałek DC.',
        'Zapominanie, że systemy 12 V potrzebują dwukrotnie większego prądu niż systemy 24 V przy tej samej mocy.',
        'Dodawanie większego stołu przy zachowaniu oryginalnego złącza wejściowego płyty i przekroju przewodów.',
        'Instalowanie kartridża hotendu o wysokiej mocy bez sprawdzenia MOSFET, bezpiecznika i zabezpieczeń termicznych firmware.',
        'Zasilanie Raspberry Pi, kamery, diod LED i wentylatorów z drukarki bez dodawania obciążenia pomocniczego.',
        'Kupowanie zasilacza na podstawie reklamowanej mocy szczytowej zamiast mocy ciągłej i certyfikatu bezpieczeństwa.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Zatrzymaj się, jeśli przewody lub złącza się nagrzewają',
      html: 'Ciepłe przewody, zbrązowiałe zaciski, stopione obudowy, sporadyczne resety lub spadki temperatury stołu podczas ruchu nie są problemami ze strojeniem. To objawy elektryczne, które wymagają inspekcji przed dalszym drukowaniem.',
    },
    {
      type: 'paragraph',
      html: 'Kalkulator szacuje pojemność zasilacza; nie certyfikuje całego systemu elektrycznego. Bezpieczna drukarka wymaga również prawidłowego uziemienia, odciążenia przewodów, bezpieczników, tulejek zaciskowych tam, gdzie to właściwe, złączy zaciskanych o odpowiednim przekroju dla rzeczywistego prądu, zabezpieczenia przed niekontrolowanym wzrostem temperatury w firmware oraz układu okablowania, który oddziela napięcie sieciowe od elektroniki niskonapięciowej.',
    },
    {
      type: 'card',
      title: 'Kiedy rozdzielić zasilacze',
      html: 'Duże drukarki czasami używają oddzielnych zasilaczy dla stołu, elektroniki ruchu i akcesoriów. Rozdzielenie może zmniejszyć prąd płynący przez jedną płytę i uprościć serwis, ale masy, logika przełączania, bezpieczniki i zachowanie zatrzymania awaryjnego muszą być celowo zaprojektowane.',
    },
    { type: 'title', text: 'Przykłady Praktyczne: Drukarka Standardowa, Modernizacja CoreXY i Duży Stół', level: 2 },
    {
      type: 'paragraph',
      html: 'Kompaktowa drukarka z ruchomym stołem ze stołem 220 W, hotendem 40 W, czterema silnikami po 10 W i 25 W elektroniki ma obciążenie bezpośrednie 325 W. Przy 25% zapasu wymagana pojemność zasilacza wynosi około 406 W. Przy 24 V to około 16,9 A, więc wysokiej jakości zasilacz 450 W lub 500 W 24 V jest rozsądnym celem w zależności od układu złączy i chłodzenia.',
    },
    {
      type: 'paragraph',
      html: 'Modernizacja CoreXY ze stołem 300 W, hotendem wysokoprzepływowym 60 W, pięcioma silnikami po 12 W i 45 W obciążenia pomocniczego daje łącznie 465 W przed marginesem. Przy 30% zapasu potrzeba około 605 W, czyli 25,2 A przy 24 V. Ta konstrukcja należy do klasy 600-750 W, a okablowanie stołu należy traktować jako główną ścieżkę prądową, a nie jako dodatek.',
    },
    {
      type: 'paragraph',
      html: 'Drukarka wielkoformatowa ze stołem DC 600 W, hotendem 80 W, sześcioma silnikami po 14 W i 80 W obciążenia pomocniczego osiąga 844 W przed marginesem. Przy 35% zapasu wymaganie wynosi około 1139 W. W tym momencie wielu konstruktorów rozważa stół AC lub oddzielną architekturę zasilania, ponieważ prąd DC, okablowanie, bezpieczniki i zarządzanie ciepłem stają się głównymi ograniczeniami projektowymi.',
    },
    {
      type: 'summary',
      title: 'Końcowy proces doboru',
      items: [
        'Wypisz każde obciążenie, które może działać podczas nagrzewania lub odzyskiwania.',
        'Oblicz bezpośrednie waty, a następnie dodaj realistyczny zapas.',
        'Przelicz waty na ampery przy rzeczywistym napięciu systemu.',
        'Wybierz wysokiej jakości zasilacz o mocy ciągłej powyżej wyniku.',
        'Przed włączeniem drukarki sprawdź przewody, złącza, bezpieczniki, wartości znamionowe płyty i chłodzenie.',
      ],
    },
  ],
  faq: [
    {
      question: 'Ile watów potrzebuje zasilacz mojej drukarki 3D?',
      answer: 'Dodaj stół grzewczy, kartridż hotendu, silniki, elektronikę, wentylatory i akcesoria, a następnie dodaj margines bezpieczeństwa. Wiele zmodernizowanych biurkowych drukarek 24 V mieści się między 400 W a 600 W, podczas gdy duże stoły mogą wymagać znacznie więcej.',
    },
    {
      question: 'Czy 24V jest lepsze niż 12V dla zasilacza drukarki 3D?',
      answer: 'Przy tej samej mocy 24 V używa połowy prądu 12 V. Niższy prąd zwykle oznacza mniejszy spadek napięcia i mniejsze nagrzewanie złączy, ale wszystkie grzałki, wentylatory, płyty i akcesoria muszą być kompatybilne z wybranym napięciem.',
    },
    {
      question: 'Czy powinienem uwzględnić stół grzewczy w obliczeniach zasilacza DC?',
      answer: 'Uwzględnij, jeśli jest to stół grzewczy DC zasilany z zasilacza drukarki. Nie uwzględniaj stołu AC zasilanego z sieci w mocy zasilacza DC; zwymiaruj oddzielnie jego okablowanie sieciowe, przekaźnik, bezpiecznik i zabezpieczenia.',
    },
    {
      question: 'Jaki margines bezpieczeństwa powinienem zastosować jako zapas zasilacza?',
      answer: 'Użyj co najmniej 20% dla normalnej, znanej konstrukcji. Użyj 30-35% dla ulepszonych stołów, hotendów o wysokim przepływie, zamkniętej elektroniki lub przyszłych akcesoriów.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Wprowadź obciążenia grzewcze', text: 'Dodaj znamionową moc stołu grzewczego i kartridża hotendu.' },
    { name: 'Dodaj ruch i akcesoria', text: 'Wprowadź liczbę silników, zapas na silnik, wentylatory, płyty, diody LED i inne obciążenia pomocnicze.' },
    { name: 'Wybierz napięcie i margines', text: 'Wybierz 12 V lub 24 V i ustaw margines bezpieczeństwa odpowiedni do ryzyka konstrukcji.' },
    { name: 'Sprawdź waty i ampery', text: 'Użyj wymaganych watów do wyboru zasilacza, a maksymalnych amperów do kontroli przewodów, bezpieczników i złączy.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Kalkulator Doboru Zasilacza do Drukarki 3D',
      description: 'Oszacuj moc i prąd zasilacza drukarki 3D na podstawie obciążeń stołu, hotendu, silników, pomocniczych i zapasu.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Ile watów potrzebuje zasilacz mojej drukarki 3D?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Dodaj stół grzewczy, kartridż hotendu, silniki, elektronikę, wentylatory i akcesoria, a następnie dodaj margines bezpieczeństwa.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Jak dobrać zasilacz do drukarki 3D',
      step: [
        { '@type': 'HowToStep', text: 'Wprowadź obciążenia grzałek.' },
        { '@type': 'HowToStep', text: 'Dodaj obciążenia ruchu i akcesoriów.' },
        { '@type': 'HowToStep', text: 'Wybierz napięcie systemu i margines bezpieczeństwa.' },
        { '@type': 'HowToStep', text: 'Wybierz wysokiej jakości zasilacz powyżej obliczonego wymagania.' },
      ],
    },
  ],
};
