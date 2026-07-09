import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { StepperDriverMicrosteppingCalculatorUI } from '../ui';

export const content: ToolLocaleContent<StepperDriverMicrosteppingCalculatorUI> = {
  slug: 'kalkulator-mikrokrokowania-drivera-silnika-krokowego-3d',
  title: 'Kalkulator Kroków na mm i Mikrokrokowania dla Silników Krokowych',
  description: 'Oblicz dokładne kroki na mm (lub kroki na cal) oraz teoretyczną rozdzielczość mechaniczną dla silników krokowych w drukarce 3D. Obsługuje TMC2209, TMC2208, paski i śruby pociągowe.',
  ui: {
    title: 'Kalkulator Mikrokrokowania Drivera Silnika Krokowego',
    presetsLabel: 'PREZETY',
    presetBelt16: 'Pasek GT2 i koło pasowe T16 (X/Y)',
    presetBelt20: 'Pasek GT2 i koło pasowe T20 (X/Y)',
    presetZLead8: 'Śruba pociągowa T8 skok 8mm (Z)',
    presetZLead2: 'Śruba pociągowa T8 skok 2mm (Z)',
    unitSystemLabel: 'System Jednostek',
    metricLabel: 'Metryczny',
    imperialLabel: 'Imperialny',
    configLabel: 'KONFIGURACJA SILNIKA I DRIVERA',
    motorStepAngleLabel: 'Kąt Kroku Silnika',
    driverMicrosteppingLabel: 'Mikrokrokowanie Drivera',
    transmissionModeLabel: 'Rodzaj Przekładni',
    transmissionBelt: 'Napęd Pasowy',
    transmissionLeadScrew: 'Śruba Pociągowa / Pręt Gwintowany',
    beltPitchLabel: 'Skok Paska',
    pulleyTeethLabel: 'Zęby Koła Pasowego',
    leadScrewPitchLabel: 'Skok Śruby Pociągowej (Dystans na Obrót)',
    resultsLabel: 'OBLICZONE WYNIKI',
    stepsPerUnitLabel: 'Konfiguracja Firmware (Kroki)',
    mechanicalResolutionLabel: 'Rozdzielczość Teoretyczna',
    stepsPerUnitUnitMetric: 'kroki/mm',
    stepsPerUnitUnitImperial: 'kroki/cal',
    mechanicalResolutionUnitMetric: 'mikrony/krok',
    mechanicalResolutionUnitImperial: 'tysiączne/krok',
    formulaLabel: 'WZORY MATEMATYCZNE',
    formulaStepsPerRevolution: 'Kroki/Ob = 360 / Kąt Kroku',
    formulaMicrostepsPerRev: 'Mikrokroki/Ob = Kroki/Ob * Mikrokroki',
    formulaDistancePerRev: 'Dystans/Ob = Zęby * Skok (lub Skok Śruby)',
    formulaStepsPerUnit: 'Kroki/Jednostka = Mikrokroki/Ob / Dystans/Ob',
    formulaResolution: 'Rozdzielczość = Dystans/Ob / Mikrokroki/Ob',
    explainResolutionLabel: 'Co to oznacza?',
    explainResolutionText: 'Reprezentuje najmniejszy teoretyczny ruch liniowy, jaki może wykonać oś twojej drukarki 3D, gdy driver wyda polecenie pojedynczego mikrokroku. Niższe wartości rozdzielczości oznaczają lepszą precyzję pozycjonowania mechanicznego.',
    copyButton: 'Kopiuj Polecenie Firmware',
    copiedButton: 'Skopiowano!',
    stepAngleUnit: '°',
    microstepsUnit: 'x',
    pitchUnitMetric: 'mm',
    pitchUnitImperial: 'in',
    teethUnit: 'zęby',
    stepAngle18: '1,8° (200 kroków/ob)',
    stepAngle09: '0,9° (400 kroków/ob)',
    stepAngle75: '7,5° (48 kroków/ob)',
    stepAngle15: '15° (24 kroki/ob)',
    microstep1: '1x (Pełny Krok)',
    microstep2: '2x',
    microstep4: '4x',
    microstep8: '8x',
    microstep16: '16x',
    microstep32: '32x',
    microstep64: '64x',
    microstep128: '128x',
    microstep256: '256x',
  },
  seo: [
    {
      type: 'title',
      text: 'Przewodnik Kalibracji Silników Krokowych i Konfiguracji Kroków na Milimetr w Firmware',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'W amatorskich i profesjonalnych drukarkach 3D precyzyjny ruch opiera się na silnikach krokowych, driverach i mechanizmach przekładni liniowej. Silniki krokowe nie obracają się w sposób ciągły; zamiast tego dzielą pełny obrót na ustaloną liczbę dyskretnych kroków. Aby płyta sterująca drukarki 3D mogła przesunąć głowicę lub stół roboczy na dokładną odległość, firmware musi precyzyjnie wiedzieć, ile kroków silnika (w tym mikrokroków) odpowiada jednej jednostce odległości liniowej (milimetrowi lub calowi). Ta wartość jest znana jako kroki na milimetr lub kroki na cal i jest krytycznym ustawieniem przechowywanym w konfiguracjach firmware takich jak Marlin, Klipper czy RepRapFirmware.',
    },
    {
      type: 'paragraph',
      html: 'Jeśli ta konfiguracja jest nawet nieznacznie nieprawidłowa, fizyczne ruchy drukarki 3D nie będą zgodne z cyfrowymi instrukcjami generowanymi przez program do krojenia. Ta niezgodność prowadzi do niedokładności wymiarowych wydruków, gdzie elementy są większe lub mniejsze niż zamierzono, otwory są nieprawidłowo ustawione, a wieloelementowe zespoły nie pasują do siebie. Zrozumienie komponentów fizycznych, charakterystyki drivera i przełożeń pozwala operatorom obliczyć matematycznie doskonałe wartości, zamiast polegać na metodach kalibracji metodą prób i błędów, które wprowadzają błędy mechaniczne.',
    },
    {
      type: 'title',
      text: 'Porównanie Specyfikacji Silników Krokowych i Atrybutów Mechanicznych',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Najczęściej używanymi silnikami krokowymi w druku 3D są hybrydowe silniki krokowe w formacie NEMA 17. Silniki te są zazwyczaj dostępne w dwóch wariantach kąta kroku: 1,8 stopnia na krok i 0,9 stopnia na krok. Silnik krokowy o kącie 1,8 stopnia wymaga 200 pełnych kroków, aby wykonać pełny obrót o 360 stopni. Silnik o kącie 0,9 stopnia wymaga 400 pełnych kroków, aby wykonać ten sam obrót. Wybór między tymi specyfikacjami wpływa na dokładność pozycjonowania, maksymalny moment obrotowy i hałas operacyjny systemu drukowania.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Silnik Krokowy 1,8 Stopnia',
          description: 'Standardowa opcja silnika dla większości komercyjnych drukarek 3D. Oferuje solidny moment obrotowy przy wyższych prędkościach i jest ekonomiczny.',
          points: [
            '200 pełnych kroków na obrót',
            'Lepsze utrzymanie momentu przy wysokich prędkościach',
            'Niższe wymagania dotyczące indukcyjności elektrycznej',
            'Wystarczająca rozdzielczość dla ogólych zastosowań FDM'
          ]
        },
        {
          title: 'Silnik Kroku 0,9 Stopnia',
          description: 'Opcja silnika wysokiej precyzji, kochana za drukarki o drobnym detalu i systemy ekstruzji o wysokiej rozdzielczości.',
          points: [
            '400 pełnych kroków na obrót',
            'Podwójna rozdzielczość mechaniczna przed mikrokrokowaniem',
            'Zmniejszony błąd pozycjonowania i niższe drgania rezonansowe',
            'Wyższa siła elektromotoryczna wsteczna przy wysokich prędkościach zmniejsza limit momentu'
          ]
        }
      ],
      columns: 2,
    },
    {
      type: 'paragraph',
      html: 'Podczas gdy silnik o kącie 0,9 stopnia oferuje podwójną fizyczną zdolność pozycjonowania, wymaga dwukrotnie więcej impulsów krokowych z mikrokoncilera płyty głównej, aby osiągnąć tę samą prędkość obrotową. Na platformach drukujących o dużej prędkości działających na starszych mikrokoncierach 8-bitowych może to nasycić kolejkę przetwarzania i spowodować zacinanie się druku lub ograniczenia prędkości. Na nowoczesnych kontrolerach 32-bitowych to ograniczenie rzadko jest problemem, co czyni silniki o kącie 0,9 stopnia doskonałym ulepszeniem dla osi X i Y, gdzie wykończenie powierzchni ma krytyczne znaczenie.',
    },
    {
      type: 'title',
      text: 'Słowniczek Terminologii Silników Krokowych i Driverów',
      level: 2,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Kąt Kroku',
          definition: 'Obrobowy ruch wału silnika podczas pojedynczej sekwencji wzbudzenia cewki w pełnym kroku, typowo 1,8 lub 0,9 stopnia.',
        },
        {
          term: 'Mikrokrokowanie',
          definition: 'Metoda kontrolowana przez driver, która dzieli pojedynczy pełny krok na mniejsze podkroki poprzez balansowanie prądu między fazami silnika, wygładzając ruch i redukując drgania.',
        },
        {
          term: 'Skok Paska',
          definition: 'Odległość między środkami dwóch sąsiednich zębów na synchronicznym pasku zębatym, powszechnie 2,0 milimetra dla pasków GT2 używanych w druku 3D.',
        },
        {
          term: 'Skok Śruby Pociągowej',
          definition: 'Odległość liniowa, jaką nakrętka przemieszcza się wzdłuż śruby pociągowej podczas jednego pełnego obrotu 360 stopni wału śruby.',
        },
        {
          term: 'Moment Utrzymania',
          definition: 'Maksymalna ilość momentu obrotowego, jaką silnik może wywrzeć na nieruchomy wał przy znamionowym prądzie przyłożonym do cewek.',
        },
        {
          term: 'Siła Elektromotoryczna Wsteczna (Back-EMF)',
          definition: 'Napięcie generowane przez rotację cewek silnika wewnątrz pola magnetycznego, które przeciwdziała napięciu zasilającemu i ogranicza maksymalną prędkośc i moment obrotowy.',
        }
      ],
    },
    {
      type: 'title',
      text: 'Obliczanie Kroków na Milimetr dla Pasków Zębatych',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dla poziomych osi ruchu (zazwyczaj X i Y) drukarek 3D kartezjańskich, CoreXY i Delta, stosuje się synchroniczne paski zębate do konwercji ruchu obrotowego silnika krokowego na ruch liniowy. Obliczenie mechaniczne zależy wyłącznie od skoku paska i liczby zębów na kole pasowym napędowym przymocowanym do wału silnika. Profil zęba paska musi pasować do profilu zęba koła pasowego, aby zapobiec luzom i poślizgowi.',
    },
    {
      type: 'table',
      headers: ['Rozmiar Koła Pasowego', 'Typ Paska', 'Skok Paska', 'Kroki/ob (1,8°, 16x)', 'Kroki na mm (Metryczny)', 'Kroki na Cal (Imperialny)'],
      rows: [
        ['16 zębów', 'GT2', '2,0 mm', '3200', '100,00 kroki/mm', '2540,00 kroki/in'],
        ['20 zębów', 'GT2', '2,0 mm', '3200', '80,00 kroki/mm', '2032,00 kroki/in'],
        ['32 zębów', 'GT2', '2,0 mm', '3200', '50,00 kroki/mm', '1270,00 kroki/in'],
        ['20 zębów', 'GT3', '3,0 mm', '3200', '53,33 kroki/mm', '1354,67 kroki/in'],
        ['16 zębów (0,9°)', 'GT2', '2,0 mm', '6400', '200,00 kroki/mm', '5080,00 kroki/in'],
        ['20 zębów (0,9°)', 'GT2', '2,0 mm', '6400', '160,00 kroki/mm', '4064,00 kroki/in']
      ],
    },
    {
      type: 'tip',
      title: 'Praktyczny Wybór Konstrukcyjny przy Doborze Koła Pasowego',
      html: 'Wybór koła pasowego z 16 zębami zamiast 20 zębów zwiększa rozdzielczość mechaniczną o 25 procent i zwiększa siłę liniową wuczoną na wózek. Jednakże mniejsze koła pasowe zmuszają pas zębaty do wyginania się wokół ciaśniejszego promienia, co może z czasem zwiększyć zużycie paska i wprowadzić wyższe częstotliwości drgań. Do standardowych konstrukcji koła pasowe z 20 zębami stanowią zrównoważony kompromis między żywotnością paska a rozdzielczością.',
    },
    {
      type: 'title',
      text: 'Rzeczywistość Mikrokrokowania: Straty Momentu i Rozwiązanie Interpolacji',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Wielu użytkowników wierzy, że zwiększenie rozdzielczości mikrokrokowania drivera do wysokich wartości, takich jak 64, 128 lub 256, nieskończenie zwiększy dokładność ich drukarki 3D. Jest to częste błędne przekonanie. W rzeczywistości przyrost momentu między mikrokrokami spada drastycznie wraz ze wzrostem podziału mikrokrokowania. Prąd elektryczny jest dzielony na krzywe sinusoidalne i cosinusoidalne, aby umiegościć wał silnika między fizycznymi biegunami. Jeśli zewnętrzne tarcie lub obciążenie na osi przekracza przyrost momentu mikrokroku, wał silnika nie poruszy się, dopóki nie zgromadzi się kilka impulsów mikrokroku.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Ograniczenie Momentu Mikrokrokowania Teoretycznego vs Fizycznego',
      html: 'Przy 16 mikrokrokach przyrost momentu na mikrokrok wynosi około 9,8 procent momentu utrzymania silnika. Przy 256 mikrokrokach moment przyrostowy spada do zaledwie 0,6 procent momentu utrzymania. Każde niewielk zaciśnięcie mechaniczne, nierównowaga naciągu paska lub tarcie wózka łatwo uniemożliwi fizyczny ruch 1/256 kroku, co oznacza, że wysokie rodzinne mikrokrokowanie nie gwarantuje rzeczywistej dokładności pozycjonowania.',
    },
    {
      type: 'card',
      title: 'Funkcja Interpolacji Driverów Trinamic',
      html: 'Nowoczesne drivery, takie jak TMC2208, TMC2209 i TMC5160, rozwiązują ten problem, odbierając polecenia kroków przy niezawodnej rozdzielczości 16 mikrokroków i wewnętrznie interpolując te kroki do 256 mikrokroków przed wykonaniem zmian prądu w cewkach. Zapewnia to płynną, cichą pracę 256 mikrokroków przy jednoczesnym utrzymaniu niezawodnego momentu utrzymania i zmniejszonego obciążenia przetwarzania kontrolera konfiguracji 16 mikrokroków. W firmware utrzymuj konfigurację na 16 mikrokrokach i pozwól driverowi zarządzać wewnętrzną interpolacją.',
    },
    {
      type: 'title',
      text: 'Obliczanie Kroków na Milimetr dla Śrub Pociągowych i Prętów Gwintowanych Osi Z',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Pionowa oś Z większości biurkowych drukarek 3D wykorzystuje śruby pociągowe lub pręty gwintowane. Śruby pociągowe są zaprojektowane do przenoszenia myszy i mają precyzyjne szlifowane profile gwintów, które minimalizują luzy. Podczas obliczania kroków na mm dla śruby pociągowej skok gwintu nie może być mylony z posuwem. Posuw to rzeczywista odległość liniowa przemieszczana przez nakrętkę śruby pociągowej podczas jednego pełnego obrotu 360 stopni śruby. Posuw oblicza się, mnożąc skok gwintu przez liczbę wątków gwintu.',
    },
    {
      type: 'list',
      items: [
        'Śruba pociągowa z pojedynczym wątkiem: Skok wynosi 2 mm, liczba wątków to 1. Posuw wynosi 2 mm na obrót.',
        'Śruba pociągowa z podwójnym wątkiem: Skok wynosi 2 mm, liczba wątków to 2. Posuw wynosi 4 mm na obrót.',
        'Śruba pociągowa z poczwórnym wątkiem (typua T8x8): Skok wynosi 2 mm, liczba wątków to 4. Posu wynosi 8 mm na obrót.',
        'Standardowe metryczne pręty gwintowane (np. M8): Pojedynczy wątek. Posuw jest równy standardowemu skokowi metrycznemu, który wynosi 1,25 mm na obrót.'
      ],
    },
    {
      type: 'paragraph',
      html: 'Ponieważ śruby pociągowe mają przewagę mechaniczną nad systemami pasowymi, osiągając znacznie wyższe wartości kroków na mm, co wskazuje na mniejsze wartości rozdzielczości mechanicznej. Ta wysoka rozdzielczość jest krytyczna dla osi Z, ponieważ warstwy są drukowane typowo w przyrostach między 0,1 mm a 0,3 mm. Wyższa wartość kroków na mm pozwala drukarce ustawić spójne wysokości warst bez błędów pozycjonowania.',
    },
    {
      type: 'title',
      text: 'Podsumowanie Kluczowych Kroków dla Integracji Drivera i Silnika',
      level: 2,
    },
    {
      type: 'summary',
      title: 'Praktyczne Kroki do Konfiguracji Firmware Twojej Drukarki',
      items: [
        'Identyfikuj kąt kroku silnika z arkusza danych producenta (zazwyczaj 1,8 lub 0,9 stopnia).',
        'Określ ustawienia mikrokrokowania drivera skonfigurowane za pomocą fizycznych zwore lub programowych poleceń UART (16 jest zalecane).',
        'Zmierz lub sprawdź skok paska i policz zęby na kole pasowym dla osi z paskiem.',
        'Zweryfikuj posuw śruby pociągowej (skok razy liczba wątków) dla osi Z.',
        'Wprowadź te parametry do naszego kalkulatora, aby uzyskać dokładną wartość konfiguracji w krokach/mm lub krokach cal.',
        'Zapisz obliczone wartości w plikach konfiguracji firmware lub zapisz je za pomocą poleceń terminala, takich jak M92.'
      ],
    },
  ],
  faq: [
    {
      question: 'Dlaczego moje obliczone kroki/mm różnią się od wyniku ręcznej kalibracji?',
      answer: 'Obliczone kroki/mm są matematycznie dokładne w oparciu o fizyczną geometrię komponentów. Jeśli kalibracja ręczna sugeruje inną wartość, zwykle oznacza to, że operator zmierzył filament lub przemieszczenie osi suwmiarką, podczas gdy luzy mechaniczne, rozciągnięcie paska lub poślizg ekstrudera powodowały błędy. Zawsze powinieneś używać wartości obliczonej matematycznie dla osi ruchu i zamiast tego naprawiać leżące u podstaw problemy mechaniczne.',
    },
    {
      question: 'Co się stanie, jeśli ustawię wartość mikrokrokowania zbyt wysoko w firmware?',
      answer: 'Ustawienie mikrokrokowania na 64, 128 lub 256 w firmware zwiększa zapotrzebowanie na częstotliwość impulsów na płycie koncilera. Jeśli płyta główna nie może generować impulsów krokowych wystarczająco szybko, drukarka może zamarznąć, zająknąć lub ograniczyć maksymalną prędkość przemieszczenia. Najlepiej używać 16 mikrokorków w firmware z włączoną interpolacją na poziomie drivera.',
    },
    {
      question: 'Jak zmienić ustawienia kroków na mm na mojej drukarce 3D?',
      answer: 'Możesz tymczasowo zmienić wartości za pomocą polecenia M92, po którym następuje litera osi i wartość (np. M92 X80.00 Y80.00 Z400.00). Aby utrwalić te wartości, wyślij polecenie M500, aby zapisać je w EEPROM, lub edytuj plik Configuration.h w firmware Marlin i zaprogramuj go ponownie, lub edytuj plik printer.cfg w Klipper.',
    },
    {
      question: 'Jaka jest różnica między skokiem paska a zębami koła pasowego?',
      answer: 'Skok paska to odległość między dwoma kolejnymi zębami na pasku, mierzona od środka do środka. Zęby koła pasowego to całkowita liczba fizycznych zębów na kółku przymocowanym do wału silnika. Pomnożenie liczby zębów przez skok daje całkowitą odległość liniową przebytą na obrót silnika.',
    },
    {
      question: 'Czy mogę używać różnych wartości mikrokrokowania dla różnych osi?',
      answer: 'Tak, możesz skonfigurować różne wartości mikrokrokowania dla osi X, Y, Z i E. Na przykład bardzo powszechne używanie 16 mikrokoków dla X i Y, 16 mikrokoków dla Z i 16 lub 32 mikrokoków dla ekstrudera w zależności od przełożenia zespołu ekstrudera.',
    }
  ],
  bibliography,
  howTo: [
    {
      name: 'Określ Specyfikacje Silnika i Drivera',
      text: 'Znajdź kąt kroku swojego silnika (typowo 1,8 lub 0,9 stopnia) i wartość mikrokrokowania swojego drivera (16 to standard).',
    },
    {
      name: 'Określ Dane Przekładni',
      text: 'Wybierz między napędem pasowym (określ skok paska i zęby koła pasowego) a śrubą pociągową (określ posuw śruby).',
    },
    {
      name: 'Skonfiguruj Ustawienia Firmware',
      text: 'Wprowadź wartości, wybierz preferowany system jednostek i skopiuj wygenerowane polecenie konfiguracji kroków do konfiguracji swojej drukarki.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Dlaczego moje obliczone kroki/mm różnią się od wyniku ręcznej kalibracji?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Obliczone kroki/mm są matematycznie dokładne w oparciu o fizyczną geometrię komponentów. Ręczna kalibcja często wprowadza błędy spowodowane napięciem paska lub kompreją filamentu.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Kalkulator Mikrokrokowania Drivera Silnika Krokowego',
      description: 'Oblicz wartości konfiguracji kroków i granice rozdzielczości fizycznej dla silników i driverów drukarek 3D.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Jak obliczyć kroki na mm silnika krokowego',
      step: [
        {
          '@type': 'HowToStep',
          text: 'Określ Specyfikacje Silnika i Drivera',
        },
        {
          '@type': 'HowToStep',
          text: 'Określ Szczegóły Przekładni',
        },
        {
          '@type': 'HowToStep',
          text: 'Skonfiguruj Ustawienia Firmware',
        },
      ],
    },
  ],
};