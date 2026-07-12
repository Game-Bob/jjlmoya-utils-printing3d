import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { EStepsCalibrationCalculatorUI } from '../ui';

export const content: ToolLocaleContent<EStepsCalibrationCalculatorUI> = {
  slug: 'kalkulator-kalibracji-e-steps',
  title: 'Kalkulator kalibracji E steps i asystent diagnostyczny ekstrudera',
  description: 'Oblicz skorygowane E-steps ekstrudera na podstawie zmierzonego testu ekstruzji i oznacz odchylenia powyżej 5%, zanim ukryją problem mechaniczny.',
  ui: {
    unitSystemLabel: 'Jednostki',
    metricLabel: 'Metryczne',
    imperialLabel: 'US',
    inputGroupLabel: 'Test ekstruzji',
    currentEStepsLabel: 'Bieżące E-steps',
    requestedLengthLabel: 'Żądana długość ekstruzji',
    actualLengthLabel: 'Zmierzone długość ekstruzji',
    newEStepsLabel: 'Nowe E-steps',
    errorLabel: 'Wykryty błąd',
    commandLabel: 'Polecenie konsoli',
    copyCommandLabel: 'Kopiuj polecenie M92',
    copiedLabel: 'Skopiowano',
    normalStatusLabel: 'Zakres kalibracji',
    criticalStatusLabel: 'Krytyczne odchylenie',
    normalMessage: 'Zmierzone odchylenie mieści się w 5%. Zastosuj wartość dopiero po potwierdzeniu, że ścieżka filamentu jest czysta, i powtórz test raz.',
    criticalMessage: 'Krytyczne ostrzeżenie: Odchylenie przekracza 5%. Prawdopodobna usterka mechaniczna: zatkana dysza, poślizg ekstrudera lub nieprawidłowe napięcie sprężyny dociskacza. Sprawdź sprzęt przed zastosowaniem tych nowych E-steps.',
    diagnosticTitle: 'Kontrole mechaniczne przed zapisaniem firmware',
    diagnosticOne: 'Podgrzej dyszę do rzeczywistej temperatury drukowania i ekstruduj powoli z wolną hotendą.',
    diagnosticTwo: 'Sprawdź koło napędowe, napięcie dociskacza, ślady gryzienia filamentu i opór szpuli przed zaufaniem liczbie.',
    diagnosticThree: 'Powtórz test 100 mm po czyszczeniu lub zmianach napięcia; nie dostrajaj firmware wokół ślizgającego się ekstrudera.',
    referenceTitle: 'Reguła decyzyjna',
    formulaLabel: 'Wzór',
    formulaText: 'bieżące E-steps x żądane / zmierzone',
    safeBandLabel: 'Błąd 0-5%',
    safeBandText: 'Stosuj tylko po powtarzalnym teście.',
    criticalBandLabel: 'Błąd > 5%',
    criticalBandText: 'Najpierw sprawdź zatkanie, poślizg, napięcie i opór.',
    repeatTestLabel: 'Po M92',
    repeatTestText: 'Wykonaj ten sam test ekstruzji ponownie przed zapisaniem.',
    mmUnit: 'mm',
    inchUnit: 'cal',
    stepsUnit: 'kroki/mm',
    controlsAriaLabel: 'Wejścia kalibracji E-steps',
    resultsAriaLabel: 'Wyniki kalibracji E-steps',
  },
  seo: [
    { type: 'title', text: 'Co właściwie mierzy kalibracja E-steps', level: 2 },
    {
      type: 'paragraph',
      html: 'E-steps określają, ile kroków silnika krokowego firmware ekstrudera wysyła na jeden milimetr ruchu filamentu. W Marlin wartość jest zwykle przechowywana za pomocą <code>M92 E...</code>, podczas gdy Klipper często wyraża tę samą fizyczną zależność poprzez odległość obrotu. Pomiar jest prosty: wydaj polecenie znanej długości ekstruzji, fizycznie zmierz, ile filamentu się przemieściło, a następnie skoryguj wartość firmware przez stosunek między żądanym a rzeczywistym ruchem. Wzór to <code>nowe E-steps = bieżące E-steps * żądana długość / rzeczywista długość</code>.',
    },
    {
      type: 'paragraph',
      html: 'Niebezpieczną częścią jest interpretacja. Kalkulator może wygenerować liczbę z dowolnego pomiaru, w tym złego. Jeśli ekstruder szlifuje filament, jeśli dysza jest częściowo zatkana lub jeśli sprężyna dociskacza jest zbyt luźna, zmierzona długość ekstruzji będzie niska. Podniesienie E-steps może wydawać się naprawiać test 100 mm, ale nie naprawia sprzętu. Zmusza silnik do mocniejszego lub dłuższego pchania przez tę samą usterkę, co może sprawić, że rzeczywiste wydruki będą niespójne.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '100 mm', label: 'typowa żądana długość dla powtarzalnego testu ekstrudera' },
        { value: '5%', label: 'próg diagnostyczny, gdzie kontrola sprzętu powinna być pierwsza' },
        { value: 'M92', label: 'polecenie Marlin używane do ustawiania kroków na jednostkę' },
        { value: '2 miejsca dziesiętne', label: 'precyzja wyjścia używana dla skopiowanego polecenia osi E' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Nie kalibruj wokół usterki mechanicznej',
      html: 'Odchylenie powyżej 5% jest wystarczająco duże, że drukarka może niedoekstrudować lub przeekstrudować z powodu, który nie jest matematyką firmware. Sprawdź ścieżkę ekstrudera przed zapisaniem nowej wartości za pomocą <code>M500</code> lub edycją konfiguracji Klipper.',
    },
    { type: 'title', text: 'Jak przeprowadzić czysty test ekstruzji 100 mm', level: 2 },
    {
      type: 'paragraph',
      html: 'Niezawodny test E-steps zaczyna się od gorącej dyszy i stabilnej ścieżki filamentu. Podgrzej hotend do normalnej temperatury drukowania dla filamentu, ponieważ ochrona przed zimną ekstruzją istnieje nie bez powodu i ponieważ przeciwciśnienie stopionego plastiku zmienia obciążenie ekstrudera. Oznacz filament w znanej odległości powyżej wejścia ekstrudera, wydaj polecenie powolnej ekstruzji 100 mm i zmierz pozostałą odległość, aby określić, ile filamentu faktycznie się przemieściło.',
    },
    {
      type: 'list',
      items: [
        'Użyj wolnej prędkości posuwu ekstruzji, aby hotend mogła topić materiał bez gromadzenia nienormalnego ciśnienia.',
        'Zrób znak na filamencie suwmiarką lub cienkim markerem zamiast szacować na oko.',
        'Pozwól szpuli swobodnie się obracać, aby opór szpuli nie wyglądał jak błąd E-steps.',
        'Przeprowadź test z tą samą średnicą i typem filamentu, których zwykle używasz do drukowania.',
        'Powtórz pomiar po zmianie napięcia koła napędowego, stanu dyszy lub temperatury hotendu.',
      ],
    },
    {
      type: 'table',
      headers: ['Zmierzony wynik', 'Błąd', 'Pierwsza interpretacja', 'Najlepsze następne działanie'],
      rows: [
        ['98 do 102 mm', '0 do 2%', 'Mały normalny rozrzut pomiaru', 'Powtórz raz i uśrednij jeśli potrzeba'],
        ['95 do 105 mm', '2 do 5%', 'Korekta firmware może być uzasadniona', 'Sprawdź ścieżkę, następnie zastosuj obliczoną wartość'],
        ['Poniżej 95 mm', 'Powyżej 5%', 'Prawdopodobnie poślizg, zatkanie, opór lub problem z ciśnieniem', 'Sprawdź mechanikę przed firmware'],
        ['Powyżej 105 mm', 'Powyżej 5%', 'Błędna poprzednia wartość lub problem z konfiguracją pomiaru', 'Zweryfikuj jednostki i powtórz test'],
      ],
    },
    {
      type: 'tip',
      title: 'Używaj jednej czystej zmiennej',
      html: 'Nie zmieniaj jednocześnie przepływu, mnożnika ekstruzji, pressure advance i E-steps. E-steps powinny opisywać ruch silnik-filament, podczas gdy przepływ i mnożnik ekstruzji dostosowują wydajność materiałową slicera dla konkretnego filamentu i profilu drukowania.',
    },
    { type: 'title', text: 'Dlaczego ostrzeżenie 5% jest ważne', level: 2 },
    {
      type: 'paragraph',
      html: 'Błąd ekstruzji 5% oznacza, że polecnie 100 mm wyprodukowało mniej niż 95 mm lub więcej niż 105 mm rzeczywistego ruchu. To nie jest mały problem zaokrąglenia. Przy typowym filamencie 1,75 mm, 5 mm brakującego podawania w krótkim teście stanowi widoczny deficyt materiału. W rzeczywistych wydrukach może objawiać się słabymi ścianami, rzadkimi górnymi powierzchniami, niespójnymi pierwszymi warstwami i słabą niezawodnością wymiarową. Co ważniejsze, niedoekstruzja w tej skali często ma fizyczną przyczynę.',
    },
    {
      type: 'paragraph',
      html: 'Asystent diagnostyczny oznacza ten próg, ponieważ korekta firmware może ukryć objawy. Jeśli koło zębate jest wypełnione pyłem plastikowym, silnik może przeskakiwać tylko podczas szybkich ruchów. Jeśli dysza jest częściowo zatkana, powolny test może zdać po dużej korekcie, ale drukarka nadal będzie zawodzić podczas wypełnienia o wysokim przepływie. Jeśli napięcie dociskacza jest zbyt wysokie, filament może się odkształcić i zaklinować w dalszej części; jeśli jest zbyt niskie, może się ślizgać. Właściwą naprawą jest mechaniczna, a nie większa liczba osi E.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Zdrowy błąd kalibracji',
          description: 'Mała niezgodność spowodowana poprzednią wartością firmware, tolerancją średnicy koła zębatego lub szumem pomiarowym.',
          points: ['Zwykle w granicach 5%', 'Powtarzalne w dwóch testach', 'Brak klikania lub pyłu filamentu', 'Korekta pozostaje umiarkowana'],
        },
        {
          title: 'Błąd ekstruzji spowodowany usterką',
          description: 'Duża niezgodność spowodowana niemożnością przesunięcia filamentu przez ekstruder zgodnie z poleceniem.',
          highlight: true,
          points: ['Powyżej 5%', 'Zmienia się między powtórzonymi testami', 'Klikanie, szlifowanie lub ślady gryzienia', 'Często gorsze przy wyższej prędkości'],
        },
      ],
    },
    {
      type: 'summary',
      title: 'Przed zaakceptowaniem krytycznej korekty',
      items: [
        'Sprawdź dyszę pod kątem częściowego zatkania i wyczyść lub wymień, jeśli ekstruzja faluje lub pulsuje.',
        'Wyczyść szczotką zęby koła napędowego i usuń pył filamentu.',
        'Ustaw napięcie dociskacza tak, aby koło chwytało bez spłaszczania filamentu.',
        'Sprawdź opór szpuli, osadzenie rurki Bowden i tarcie ścieżki filamentu.',
        'Wykonaj ten sam pomiar ponownie przed zmianą firmware.',
      ],
    },
    { type: 'title', text: 'Marlin M92, M500 i odległość obrotu Klipper', level: 2 },
    {
      type: 'paragraph',
      html: 'W firmware typu Marlin, <code>M92 E...</code> ustawia kroki ekstrudera na milimetr dla bieżącej sesji. Wiele drukarek potrzebuje następnie <code>M500</code>, aby zapisać wartość w EEPROM, w przeciwnym razie ustawienie może zniknąć po restarcie. Niektóre zablokowane lub zmodyfikowane przez dostawcę wersje firmware mogą ignorować zapisy EEPROM lub wymagać zmiany konfiguracji źródła firmware. Zawsze weryfikuj wartość po restarcie za pomocą <code>M503</code>, jeśli drukarka to obsługuje.',
    },
    {
      type: 'paragraph',
      html: 'Klipper powszechnie używa <code>rotation_distance</code> zamiast E-steps w printer.cfg. Fizyczna idea kalibracji jest taka sama, ale kierunek numeryczny jest odwrócony, ponieważ odległość obrotu opisuje, ile filamentu przesuwa się na obrót silnika, a nie ile kroków jest potrzebnych na milimetr. To narzędzie wyprowadza polecenie <code>M92</code>, ponieważ jest przeznaczone do bezpośredniego użytku w konsolach Marlin i kompatybilnych interfejsach firmware. Użytkownicy Klipper mogą nadal używać zmierzonego błędu jako sygnału diagnostycznego przed ponownym obliczeniem odległości obrotu.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'E-steps', definition: 'Liczba kroków silnika, które firmware wysyła, aby przesunąć jeden milimetr filamentu na osi ekstrudera.' },
        { term: 'M92', definition: 'Polecenie G-code używane przez firmware Marlin do ustawienia kroków na jednostkę dla jednej lub więcej osi.' },
        { term: 'M500', definition: 'Polecenie Marlin, które zapisuje bieżące ustawienia w EEPROM, gdy jest obsługiwane przez drukarkę.' },
        { term: 'Odległość obrotu', definition: 'Ustawienie Klipper reprezentujące przemieszczenie filamentu na pełny obrót silnika.' },
        { term: 'Mnożnik ekstruzji', definition: 'Skalowanie przepływu na poziomie slicera dla profilu materiału, oddzielone od maszynowych E-steps.' },
      ],
    },
    {
      type: 'card',
      title: 'Przepływ pracy polecenia konsoli',
      html: 'Wyślij skopiowane polecenie <code>M92 E...</code>, powtórz test ekstruzji i zapisz wartość dopiero po tym, jak zmierzona długość będzie powtarzalna. Pojedynczy dobry numer to słabszy dowód niż dwa spójne pomiary.',
    },
    { type: 'title', text: 'Problemy mechaniczne wyglądające jak złe E-steps', level: 2 },
    {
      type: 'paragraph',
      html: 'Częściowo zatkana dysza to najczęstsza pułapka. Silnik ekstrudera może obracać się o prawidłową ilość, podczas gdy ciśnienie gromadzi się w hotendzie, powodując, że koło napędowe gryzie filament zamiast go przesuwać. Zmierzona długość ekstruzji staje się krótka, wzór podnosi E-steps, a następny wydruk może nadal niedoekstrudować, ponieważ zatkanie dyszy pozostaje. Jeśli ekstrudowany filament ostro faluje, pulsuje, wychodzi cienki lub zmienia kierunek przy opuszczaniu dyszy, wyczyść hotend przed kalibracją.',
    },
    {
      type: 'paragraph',
      html: 'Poślizg ekstrudera może wynikać z przeciwnych błędów napięcia. Zbyt mała siła sprężyny pozwala kole obracać się względem filamentu. Zbyt duża siła sprężyny może spłaszczyć miękki filament, zwiększyć tarcie w rurce Bowden lub stworzyć głębokie ślady gryzienia, które zaklinują się przy wejściu do heat break. Elastyczny filament jest szczególnie wrażliwy. Próg diagnostyczny istnieje, aby skłonić użytkownika do zatrzymania się i sprawdzenia tych warunków przed przekształceniem problemu trakcyjnego w liczbę firmware.',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Krytyczne objawy podczas testu',
      html: 'Zatrzymaj się i sprawdź sprzęt, jeśli ekstruder klika, pojawia się pył filamentu, silnik staje się niezwykle gorący, ekstruzja wychodzi pulsacyjnie lub zmierzona długość zmienia się o kilka milimetrów między powtórzonymi testami 100 mm.',
    },
    {
      type: 'proscons',
      title: 'Korygowanie E steps po dużym błędzie',
      items: [
        { pro: 'Może przywrócić dokładne podawanie filamentu, gdy poprzednia wartość firmware była rzeczywiście błędna.', con: 'Może ukryć ślizgające się koło napędowe lub zatkaną dyszę, gdy jest używane bez kontroli.' },
        { pro: 'Proste polecenie łatwe do zastosowania i powtórzenia.', con: 'Błędnie zapisana wartość wpływa na każdy profil slicera i każdy materiał.' },
        { pro: 'Przydatne po zmianie przełożenia ekstrudera lub sprzętu silnika.', con: 'Nie zastępuje kalibracji przepływu na drukowanych ścianach.' },
      ],
    },
    { type: 'title', text: 'E-steps vs kalibracja przepływu', level: 2 },
    {
      type: 'paragraph',
      html: 'Kalibracja E-steps należy do warstwy maszynowej. Pyta, czy mechanizm ekstrudera przesuwa żądaną długość surowego filamentu. Kalibracja przepływu należy do warstwy profilu drukowania. Pyta, czy konkretny filament, temperatura, dysza, szerokość linii i strategia slicera wytwarzają zamierzoną grubość ściany i jakość powierzchni. Mieszanie tych dwóch tworzy mylące profile: drukarka może zdać test E-steps 100 mm i nadal potrzebować mnożnika ekstruzji 0,96 dla jednej marki PETG.',
    },
    {
      type: 'paragraph',
      html: 'Kalibruj E-steps po zmianie sprzętu ekstrudera, kroków silnika, mikrokrokowania, przełożenia lub średnicy koła napędowego. Kalibruj przepływ po zmianie marki filamentu, koloru, rozmiaru dyszy, temperatury lub szerokości linii slicera. Pressure advance, linear advance i retrakcja to oddzielne narzędzia kontroli ciśnienia i powinny być dostrojone po tym, jak bazowy ruch ekstruzji jest godny zaufania.',
    },
    {
      type: 'table',
      headers: ['Kalibracja', 'Warstwa', 'Zmienia się gdy', 'Nie używaj do naprawy'],
      rows: [
        ['E-steps', 'Firmware lub konfiguracja maszyny', 'Zmiana sprzętu ekstrudera lub ustawień silnika', 'Wilgotny filament, zatkane dysze, przepływ slicera'],
        ['Mnożnik przepływu', 'Profil materiału slicera', 'Zmiana marki, koloru, dyszy, temperatury filamentu', 'Złe przełożenie lub ślizgający się ekstruder'],
        ['Pressure advance', 'Dynamika firmware', 'Zmiana ścieżki, prędkości, przyspieszenia, materiału ekstrudera', 'Statyczna niedoekstruzja'],
        ['Retrakcja', 'Zachowanie podróży slicera', 'Zmiana stringingu, oozingu, artefaktów podróży', 'Błędy bazowej odległości podawania'],
      ],
    },
    {
      type: 'message',
      title: 'Zasada technika wsparcia',
      html: 'Jeśli wartość kalibracji zmienia się dramatycznie, załóż, że pomiar mówi ci coś o maszynie. Najpierw sprawdź, potem oblicz, na końcu zapisz.',
    },
    { type: 'title', text: 'Powtarzalność i jakość pomiaru', level: 2 },
    {
      type: 'paragraph',
      html: 'Dobry wynik E-steps jest powtarzalny. Jeśli jeden test mierzy 94 mm, następny 99 mm, a kolejny 96 mm, średnia jest mniej ważna niż rozrzut. Zmienne wyniki wskazują na trakcję, temperaturę, ciśnienie lub technikę pomiaru. Przed zapisaniem nowej wartości powtórz ekstruzję co najmniej dwa razy po każdej zmianie mechanicznej. Dwa wyniki powinny być wystarczająco blisko, aby nowa liczba firmware nie goniła szumu.',
    },
    {
      type: 'tip',
      title: 'Mierz powyżej ekstrudera, gdy to możliwe',
      html: 'Oznaczanie filamentu przed wejściem do ekstrudera zapobiega pomyłce spowodowanej zakrzywionym filamentem wychodzącym z dyszy. Zmierz odległość od stałego punktu odniesienia do znaku przed i po poleceniu.',
    },
    {
      type: 'summary',
      title: 'Niezawodna sekwencja kalibracji',
      items: [
        'Podgrzej dyszę i usuń stary materiał.',
        'Oznacz filament precyzyjną odległością referencyjną.',
        'Ekstruduj 100 mm powoli i zmierz rzeczywisty ruch.',
        'Użyj kalkulatora i sprawdź błędy powyżej 5%.',
        'Zastosuj <code>M92 E...</code>, przetestuj ponownie, a następnie zapisz tylko jeśli powtarzalne.',
      ],
    },
  ],
  faq: [
    {
      question: 'Jakiego wzoru używa ten kalkulator E-steps?',
      answer: 'Używa nowe E-steps = bieżące E-steps * żądana długość ekstruzji / zmierzona długość ekstruzji.',
    },
    {
      question: 'Dlaczego narzędzie ostrzega przy błędzie powyżej 5%?',
      answer: 'Odchylenie powyżej 5% jest wystarczająco duże, aby sugerować problem mechaniczny, taki jak poślizg ekstrudera, częściowe zatkanie, opór szpuli lub nieprawidłowe napięcie dociskacza. Sprawdź sprzęt przed zapisaniem nowej wartości firmware.',
    },
    {
      question: 'Czy mogę użyć polecenia M92 w Klipper?',
      answer: 'Skopiowane polecenie M92 jest przeznaczone dla firmware kompatybilnego z Marlin. Klipper zwykle używa rotation_distance, ale ten sam zmierzony błąd jest nadal przydatny do diagnozowania ekstrudera.',
    },
    {
      question: 'Czy powinienem natychmiast zapisać nową wartość?',
      answer: 'Nie. Zastosuj ją tymczasowo, powtórz test ekstruzji i zapisz dopiero po tym, jak zmierzony ruch będzie powtarzalny.',
    },
    {
      question: 'Czy kalibracja E-steps to to samo co kalibracja przepływu?',
      answer: 'Nie. E-steps kalibrują ruch maszyny. Przepływ lub mnożnik ekstruzji kalibruje wydajność materiałową slicera dla konkretnego filamentu i profilu drukowania.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Wprowadź bieżące E-steps', text: 'Odczytaj bieżące kroki ekstrudera na milimetr z firmware lub ustawień drukarki.' },
    { name: 'Wykonaj test ekstruzji', text: 'Wydaj polecenie znanej długości, zwykle 100 mm, z hotendą w temperaturze drukowania.' },
    { name: 'Zmierz rzeczywisty ruch', text: 'Wprowadź fizycznie zmierzony ruch filamentu i przejrzyj wykryty błąd.' },
    { name: 'Sprawdź w razie potrzeby', text: 'Jeśli błąd przekracza 5%, sprawdź sprzęt przed zastosowaniem polecenia M92.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Kalkulator kalibracji E-steps i asystent diagnostyczny ekstrudera',
      description: 'Oblicz skorygowane E-steps ekstrudera drukarki 3D i oznacz duże odchylenia z ryzykiem mechanicznym.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Jakiego wzoru używa ten kalkulator E-steps?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Używa nowe E-steps = bieżące E-steps * żądana długość ekstruzji / zmierzona długość ekstruzji.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Jak skalibrować E-steps ekstrudera drukarki 3D',
      step: [
        { '@type': 'HowToStep', text: 'Wprowadź bieżącą wartość E-steps.' },
        { '@type': 'HowToStep', text: 'Wydaj polecenie znanej długości ekstruzji, zwykle 100 mm.' },
        { '@type': 'HowToStep', text: 'Zmierz rzeczywisty ruch filamentu i oblicz korektę.' },
        { '@type': 'HowToStep', text: 'Najpierw sprawdź sprzęt, jeśli wykryty błąd przekracza 5%.' },
      ],
    },
  ],
};
