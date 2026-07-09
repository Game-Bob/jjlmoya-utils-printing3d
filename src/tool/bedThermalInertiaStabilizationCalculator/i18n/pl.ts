import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { BedThermalInertiaStabilizationCalculatorUI } from '../ui';

export const content: ToolLocaleContent<BedThermalInertiaStabilizationCalculatorUI> = {
  slug: 'kalkulator-stabilizacji-bezwladnosci-termicznej-stolu',
  title: 'Kalkulator Stabilizacji Bezwładności Cieplnej Stołu',
  description: 'Oszacuj, jak długo pozostawić nagrzany stół drukarki 3D w spoczynku po osiągnięciu wartości zadanej, używając materiału płyty, grubości, temperatury docelowej, mocy grzałki i rozmiaru stołu.',
  ui: {
    unitSystemLabel: 'Jednostki',
    metricLabel: 'Metryczne',
    imperialLabel: 'US',
    materialLabel: 'Materiał płyty',
    borosilicateGlassLabel: 'Szkło borokrzemowe',
    peiSpringSteelLabel: 'Stal sprężynująca PEI',
    aluminumLabel: 'Płyta aluminiowa',
    thicknessLabel: 'Grubość płyty',
    targetTemperatureLabel: 'Docelowa temperatura stołu',
    heaterPowerLabel: 'Moc grzałki',
    bedSizeLabel: 'Obszar grzany',
    presetsLabel: 'Ustawienia wstępne',
    enderPresetLabel: 'Szkło 235',
    voronPresetLabel: 'PEI 300',
    largePresetLabel: 'Aluminium 350',
    recommendedDelayLabel: 'Opóźnienie przed drukiem',
    delayMarkerLabel: 'Opóźnienie',
    warmupTimeLabel: 'Idealne nagrzewanie',
    plateMassLabel: 'Masa płyty',
    energyStoredLabel: 'Zmagazynowane ciepło',
    conductionLagLabel: 'Opóźnienie przewodzenia',
    conductivityLabel: 'Przewodność',
    readinessLabel: 'Gotowość',
    readinessQuick: 'krótkie moczenie',
    readinessBalanced: 'normalne moczenie',
    readinessSlow: 'długie moczenie',
    controlsAriaLabel: 'Parametry bezwładności cieplnej stołu',
    resultsAriaLabel: 'Wyniki stabilizacji stołu',
    copyButton: 'Kopiuj opóźnienie',
    copiedButton: 'Skopiowano',
    copiedSummaryTemplate: 'Szacunek stabilizacji: poczekaj {delay} s ({minutes} min) po wartości zadanej; idealne nagrzewanie około {warmup} min, gotowość: {readiness}.',
    thicknessUnitMetric: 'mm',
    thicknessUnitImperial: 'in',
    temperatureUnitMetric: '°C',
    temperatureUnitImperial: '°F',
    bedSizeUnitMetric: 'mm',
    bedSizeUnitImperial: 'in',
    wattsUnit: 'W',
    secondsUnit: 's',
    minutesUnit: 'min',
    kilogramsUnit: 'kg',
    poundsUnit: 'lb',
    wattHoursUnit: 'Wh',
    conductivityUnit: 'W/mK',
  },
  seo: [
    { type: 'title', text: 'Dlaczego nagrzany stół wymaga stabilizacji po osiągnięciu wartości zadanej', level: 2 },
    {
      type: 'paragraph',
      html: 'Wyświetlacz drukarki zwykle pokazuje temperaturę zmierzoną w pobliżu termistora, a nie dokładną temperaturę górnej powierzchni drukującej. W wielu maszynach termistor jest przyklejony pod grzałką, zatopiony w uchwycie stołu lub umieszczony z dala od obszaru, w którym zaczyna się pierwsza warstwa. Sterownik może wskazywać <strong>60 °C</strong>, podczas gdy górna część grubej szklanej płyty wciąż dogania temperaturę. To opóźnienie to bezwładność cieplna: płyta magazynuje ciepło, przenosi je przez swoją grubość i jednocześnie traci ciepło do powietrza.',
    },
    {
      type: 'paragraph',
      html: 'Pierwsza warstwa jest szczególnie wrażliwa na to opóźnienie, ponieważ przyczepność zależy od lepkości polimeru, energii powierzchniowej i nacisku kontaktowego. Stół, który wciąż nagrzewa się na powierzchni, może powodować unoszenie się narożników, matowe linie skirtu lub pozornie niespójny offset Z, nawet gdy mesh i wysokość dyszy są prawidłowe. Oczekiwanie obliczonego interwału moczenia cieplnego po osiągnięciu wartości zadanej przez stół jest często bardziej powtarzalne niż losowe podnoszenie wartości zadanej.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '1,2', label: 'W/mK typowa przewodność szkła borokrzemowego' },
        { value: '16', label: 'W/mK przybliżona przewodność stali sprężynującej' },
        { value: '205', label: 'W/mK przybliżona przewodność aluminium' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Opóźnienie to szacunek powierzchni, a nie zamiennik autotune PID',
      html: 'Strojenie PID kontroluje sposób, w jaki grzałka podąża za termistorem. Stabilizacja termiczna szacuje, jak długo powierzchnia druku potrzebuje, aby zbliżyć się do wartości zadanej kontrolowanej przez termistor. Dobrze dostrojona pętla PID może nadal wymagać opóźnienia moczenia cieplnego, gdy płyta jest gruba, słabo przewodząca lub luźno połączona z grzałką.',
    },
    { type: 'title', text: 'Wybór materiału dominuje nad bezwładnością cieplną stołu', level: 2 },
    {
      type: 'paragraph',
      html: 'Kalkulator traktuje materiał jako ścisłe wejście, ponieważ szkło, stal sprężynująca PEI i aluminium nie są wymiennymi systemami termicznymi. Szkło borokrzemowe ma niską przewodność cieplną i znaczną pojemność cieplną, więc górna powierzchnia może pozostawać w tyle za stroną grzewczą przez zauważalny okres. Stal sprężynująca jest cieńsza i przewodzi lepiej niż szkło, więc zwykle wyrównuje się szybciej, mimo że stal jest gęsta. Aluminium przewodzi ciepło bardzo dobrze, dlatego odlewane lub obrabiane stoły aluminiowe są preferowane w większych drukarkach, ale gruba płyta aluminiowa może nadal magazynować dużo energii.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Szkło borokrzemowe',
          description: 'Niska przewodność i umiarkowana pojemność cieplna powodują najdłuższe opóźnienie powierzchniowe, zwłaszcza przy grubości 3-5 mm.',
          points: ['Dobra płaskość przy odpowiednim podparciu', 'Wolna odpowiedź powierzchni', 'Wrażliwość na klipsy i lokalny kontakt grzałki'],
        },
        {
          title: 'Stal sprężynująca PEI',
          description: 'Cienkie blachy stalowe reagują szybciej i zwykle potrzebują mniej czasu odpoczynku, ale magnetyczne podstawy i warstwy kleju dodają oporu kontaktowego.',
          highlight: true,
          points: ['Szybkie praktyczne moczenie', 'Łatwa wymiana powierzchni', 'Układ magnes-klej wciąż ma znaczenie'],
        },
        {
          title: 'Płyta aluminiowa',
          description: 'Wysoka przewodność szybko rozprowadza ciepło po stole; grubość i moc grzałki stają się głównymi czynnikami opóźnienia.',
          points: ['Doskonałe boczne rozprowadzanie ciepła', 'Wysoka zmagazynowana energia na dużych stołach', 'Najlepsze przy równomiernym pokryciu grzałki'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Powierzchnia druku', 'Zachowanie termiczne', 'Typowy problem stabilizacji', 'Praktyczna odpowiedź pierwszej warstwy'],
      rows: [
        ['Szkło borokrzemowe 4 mm', 'Wolne przewodzenie przez grubość', 'Powierzchnia opóźniona względem termistora', 'Poczekaj dłużej przed sondowaniem lub drukowaniem'],
        ['Stal PEI 0,4-0,6 mm', 'Cienka przewodząca blacha', 'Interfejs magnes/klej kontroluje opóźnienie', 'Krótkie moczenie cieplne zwykle wystarcza'],
        ['Aluminium 5-8 mm', 'Szybkie przewodzenie, ale dużo zmagazynowanego ciepła', 'Duża masa potrzebuje czasu na osiągnięcie równowagi', 'Użyj stałego moczenia na dużych stołach'],
        ['Złożone układy', 'Interfejsy warstw dominują', 'Szczeliny powietrzne i kleje dodają oporu cieplnego', 'Zmierz rzeczywistą temperaturę powierzchni, jeśli to możliwe'],
      ],
    },
    {
      type: 'tip',
      title: 'Nie używaj opóźnienia dla szkła przy stali sprężynującej',
      html: 'Opóźnienie prawidłowe dla płyty borokrzemowej 4 mm może być nadmierne dla blachy PEI 0,5 mm. I odwrotnie, opóźnienie dla blachy PEI może być zbyt krótkie dla szkła i sprawić, że pierwsza warstwa będzie wyglądać jak problem z offsetem Z.',
    },
    { type: 'title', text: 'Jak grubość zmienia czas nagrzewania i opóźnienie powierzchni', level: 2 },
    {
      type: 'paragraph',
      html: 'Grubość wpływa na dwie różne części procesu. Po pierwsze, grubsza płyta ma więcej masy, więc wymaga więcej energii do podniesienia średniej temperatury. Po drugie, ciepło musi dyfundować przez dłuższą ścieżkę, zanim powierzchnia podąży za stroną grzewczą. Kalkulator szacuje zarówno idealną energię nagrzewania, jak i opóźnienie dyfuzji przez płytę, a następnie łączy je w zalecane opóźnienie po tym, jak drukarka zgłosi, że stół osiągnął wartość zadaną.',
    },
    {
      type: 'paragraph',
      html: 'Zależność nie jest liniowa dla opóźnienia powierzchni. Czas dyfuzji wzrasta z kwadratem grubości, dlatego mała zmiana z 3 mm na 4 mm szkła może mieć większe znaczenie niż oczekiwano. Bardzo cienka blacha stalowa może wyrównać się szybko, ale magnetyczna podstawa, folia klejąca, powłoka PEI i uwięzione powietrze mogą nadal spowalniać rzeczywisty transfer. Na stołach aluminiowych płyta sama szybko rozprowadza ciepło, ale stół może pozostać globalnie niestabilny, jeśli pokrycie grzałki jest nierówne lub płyta jest duża.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Bezwładność cieplna', definition: 'Tendencja płyty do opierania się zmianom temperatury, ponieważ ma masę i pojemność cieplną.' },
        { term: 'Dyfuzyjność cieplna', definition: 'Właściwość materiału łącząca przewodność, gęstość i pojemność cieplną, opisująca szybkość przemieszczania się zmian temperatury przez materiał.' },
        { term: 'Moczenie cieplne', definition: 'Celowe oczekiwanie po osiągnięciu wartości zadanej, aby powierzchnia druku, grzałka, uchwyt i układ stołu zbliżyły się do stabilniejszego stanu.' },
        { term: 'Opór kontaktowy', definition: 'Dodatkowy opór cieplny spowodowany niedoskonałym kontaktem, warstwami kleju, magnesami, klipsami, szczelinami powietrznymi lub odkształconymi powierzchniami.' },
        { term: 'Przesterowanie wartości zadanej', definition: 'Zdarzenie sterowania, w którym temperatura termistora wzrasta powyżej celu przed ustabilizowaniem się, często niezwiązane z temperaturą powierzchni.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Zasady dotyczące grubości',
      items: [
        'Cienkie blachy stalowe PEI zwykle stabilizują się szybko, gdy grzałka i magnetyczna podstawa są ciepłe.',
        'Szkło powyżej 3 mm zasługuje na prawdziwe opóźnienie przed rozpoczęciem ruchów pierwszej warstwy.',
        'Duże płyty aluminiowe mogą wymagać moczenia cieplnego ze względu na całkowitą masę, nawet gdy przewodzenie jest doskonałe.',
        'Szczeliny powietrzne pod wymiennymi powierzchniami mogą dominować w obliczeniach; czyść powierzchnie styku i osadzaj płytę konsekwentnie.',
      ],
    },
    { type: 'title', text: 'Moc grzałki, rozmiar stołu i zmagazynowane ciepło', level: 2 },
    {
      type: 'paragraph',
      html: 'Moc grzałki określa, jak szybko energia może dostać się do układu stołu. Grzałka 220 W pod szklanym stołem 235 mm ma zupełnie inną gęstość mocy niż grzałka silikonowa 600 W pod aluminiową płytą 300 mm. Kalkulator używa mocy, temperatury docelowej, powierzchni stołu i masy płyty do oszacowania idealnego czasu nagrzewania. Następnie stosuje składnik stabilizacji, ponieważ powierzchnia zwykle nadal się zmienia po tym, jak system sterowany termistorem po raz pierwszy osiągnie cel.',
    },
    {
      type: 'paragraph',
      html: 'Moc nie jest lekarstwem na słabą dystrybucję ciepła. Mocna grzałka może szybko podnieść termistor, podczas gdy krawędzie, klipsy lub niepodparte strefy pozostają w tyle. Duże drukarki powinny uwzględniać pokrycie grzałki, izolację, montaż stołu, temperaturę komory i to, czy sondowanie zaczyna się natychmiast po zdarzeniu wartości zadanej. W przypadku ABS, ASA, nylonu i innych cieplejszych materiałów stabilny stół i komora są często ważniejsze niż samo osiągnięcie wysokiej numerycznej temperatury stołu.',
    },
    {
      type: 'table',
      headers: ['Objaw', 'Prawdopodobna przyczyna termiczna', 'Regulacja do wypróbowania'],
      rows: [
        ['Pierwsze linie skirtu są matowe lub ledwo się kleją', 'Powierzchnia jest jeszcze chłodniejsza niż termistor', 'Zwiększ opóźnienie stabilizacji przed pierwszą warstwą'],
        ['Środek klei się, ale narożniki się unoszą', 'Nierównomierna temperatura powierzchni lub straty krawędziowe', 'Dodaj izolację, sprawdź pokrycie grzałki, poczekaj dłużej'],
        ['Siatka sondowania zmienia się między zimnymi a gorącymi przebiegami', 'Układ stołu wciąż się rozszerza lub relaksuje', 'Moczenie przed sondowaniem, nie tylko przed drukowaniem'],
        ['Wykres PID wygląda stabilnie, ale przyczepność się zmienia', 'Sterownik jest stabilny przy czujniku, nie przy powierzchni druku', 'Użyj opóźnienia powierzchni i zweryfikuj termometrem kontaktowym'],
      ],
    },
    {
      type: 'card',
      title: 'Dlaczego wynikiem jest opóźnienie po wartości zadanej',
      html: 'Drukarka już obsługuje podnoszenie temperatury do docelowej. Ten kalkulator odpowiada na węższe pytanie dotyczące pierwszej warstwy: gdy wyświetlacz mówi, że stół jest gotowy, ile dodatkowych sekund powinna odpoczywać powierzchnia, zanim zacznie się ekstruzja?',
    },
    { type: 'title', text: 'Autotune PID a rzeczywista stabilizacja powierzchni stołu', level: 2 },
    {
      type: 'paragraph',
      html: 'Autotune PID stołu jest cenny, ponieważ redukuje oscylacje przy mierzonym czujniku. Nie może usunąć fizyki grubej lub słabo przewodzącej płyty. Szklana powierzchnia może nadal pozostawać w tyle, podczas gdy czujnik spodni wygląda stabilnie. Blacha ze stali sprężynującej może wyglądać stabilnie szybko, ale zimna magnetyczna podstawa może nadal wyciągać z niej ciepło. Najbardziej powtarzalnym przepływem pracy jest wyregulowanie sterownika, użycie rozsądnego opóźnienia stołu i rozpoczęcie kalibracji pierwszej warstwy dopiero po tym, jak układ stołu jest termicznie powtarzalny.',
    },
    {
      type: 'proscons',
      title: 'Rozpoczęcie natychmiastowe vs oczekiwanie na stabilizację',
      items: [
        { pro: 'Natychmiastowe rozpoczęcie skraca całkowity czas druku.', con: 'Pierwsza warstwa może być drukowana na powierzchni poniżej zamierzonej temperatury.' },
        { pro: 'Obliczone opóźnienie poprawia powtarzalność między wydrukami.', con: 'Dodaje czas bezczynności, zwłaszcza na szkle i dużych stołach aluminiowych.' },
        { pro: 'Moczenie przed sondowaniem może zmniejszyć dryft siatki.', con: 'Bardzo długie moczenia mogą marnować energię, jeśli wybrany materiał ich nie potrzebuje.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Nie maskuj opóźnienia termicznego nadmiernym dociskiem',
      html: 'Jeśli pierwsza warstwa klei się tylko przy agresywnie niskim offsecie Z, powierzchnia stołu może być chłodniejsza niż oczekiwano. Nadmierny docisk może maskować problem termiczny, powodując stopkę słonia, ocieranie dyszy i szorstką teksturę powierzchni.',
    },
    {
      type: 'message',
      title: 'Najlepsza sekwencja kalibracji',
      html: 'Podgrzej stół, poczekaj obliczone opóźnienie, wykonaj sondowanie siatki (jeśli drukarka sonduje na gorąco), a następnie wyreguluj wysokość pierwszej warstwy. Kalibracja offsetu Z na niestabilnym układzie stołu sprawi, że następny wydruk będzie niespójny, nawet gdy żadne ustawienie mechaniczne nie zostało zmienione.',
    },
    { type: 'title', text: 'Jak użyć czasu stabilizacji w kodzie G startowym', level: 2 },
    {
      type: 'paragraph',
      html: 'Zalecane opóźnienie może być użyte ręcznie lub wstawione do startowego kodu G. Prostym przepływem pracy jest podgrzanie stołu za pomocą <code>M190</code>, odczekanie obliczonej liczby sekund za pomocą polecenia wstrzymania, a następnie kontynuacja z sondowaniem, nagrzewaniem dyszy, czyszczeniem i drukowaniem. Niektórzy użytkownicy wolą najpierw podgrzać stół, rozpocząć nagrzewanie komory lub podgrzewanie wstępne dyszy podczas moczenia, a sondować dopiero po tym, jak stół przestanie dryfować.',
    },
    {
      type: 'list',
      items: [
        'Używaj tego samego opóźnienia przy porównywaniu filamentów, aby testy przyczepności były uczciwe.',
        'Stosuj dłuższe opóźnienia dla szkła, wysokich temperatur stołu, dużych płyt lub zimnych pomieszczeń.',
        'Stosuj krótsze opóźnienia dla cienkich blach stalowych, gdy magnetyczna podstawa jest już ciepła.',
        'Sonduj po moczeniu, jeśli siatka zmienia się z temperaturą.',
        'Przelicz po zmianie materiału płyty, grubości, mocy grzałki lub rozmiaru stołu.',
      ],
    },
    {
      type: 'tip',
      title: 'Użyj pierwszego wydruku dnia jako przypadku referencyjnego',
      html: 'Drugi wydruk rozpoczęty natychmiast po zakończonej pracy zaczyna się od ciepłego układu stołu i może wymagać mniej czekania. Do kalibracji oceń opóźnienie z zimnej drukarki, ponieważ ten stan najprawdopodobniej ujawni opóźnienie termiczne.',
    },
    {
      type: 'diagnostic',
      variant: 'success',
      title: 'Dobre opóźnienie sprawia, że strojenie pierwszej warstwy jest nudne',
      html: 'Gdy moczenie cieplne jest odpowiednie, kształt skirtu, połysk linii, przyczepność narożników i kompensacja siatki stają się bardziej powtarzalne z wydruku na wydruk. Nie powinieneś musieć gonić za offsetem Z za każdym razem, gdy maszyna uruchamia się na zimno.',
    },
    { type: 'title', text: 'Pomiar i poprawa rzeczywistej stabilizacji stołu', level: 2 },
    {
      type: 'paragraph',
      html: 'Kalkulator jest celowo praktyczny, ale najlepszą walidacją jest pomiar powierzchni. Termopara kontaktowa przymocowana do powierzchni druku, cienka sonda pod arkuszem ofiarnym lub skalibrowany termometr na podczerwień ze znaną emisyjnością mogą ujawnić, ile czasu zajmuje powierzchni ustabilizowanie się. Odczyty w podczerwieni na szkle, PEI i błyszczącym metalu mogą być mylące, więc używaj spójnych punktów pomiarowych i unikaj porównywania różnych wykończeń powierzchni tak, jakby miały tę samą emisyjność.',
    },
    {
      type: 'paragraph',
      html: 'Wydajność termiczną często można poprawić bez zmiany oprogramowania sprzętowego. Izolowanie spodu zmniejsza utratę ciepła i skraca nagrzewanie. Czyszczenie arkusza magnetycznego i elastycznej płyty poprawia kontakt. Wymiana słabych klipsów, spłaszczanie wypaczonych płyt i unikanie częściowego kontaktu grzałki zmniejszają nierównomierne pola temperaturowe. Zamknięte drukarki korzystają z cieplejszej komory, ale ciepło komory zmienia również paski, elementy bramy i zachowanie sondowania, więc procedury termiczne powinny być powtarzalne, a nie improwizowane.',
    },
    {
      type: 'table',
      headers: ['Ulepszenie lub nawyk', 'Wpływ na stabilizację', 'Ostrożność'],
      rows: [
        ['Izolacja spodu', 'Mniejsza utrata ciepła i szybsza równowaga', 'Upewnij się, że okablowanie i kleje są przystosowane do temperatury stołu'],
        ['Lepsze pokrycie grzałki', 'Bardziej równomierna temperatura powierzchni', 'Unikaj pęcherzy i słabej przyczepności grzałki silikonowej'],
        ['Konsekwentne osadzanie wymiennej płyty', 'Mniejsza zmienność oporu kontaktowego', 'Kurz lub okruchy filamentu mogą tworzyć lokalne zimne punkty'],
        ['Gorące sondowanie siatki po moczeniu', 'Siatka odzwierciedla rozszerzony kształt stołu', 'Uchwyt sondy i głowica również muszą być stabilne termicznie'],
      ],
    },
    {
      type: 'summary',
      title: 'Praktyczna lista kontrolna stabilizacji',
      items: [
        'Wybierz rzeczywisty materiał płyty; szkło, stal i aluminium wymagają różnych opóźnień.',
        'Wprowadź grubość i moc grzałki, zamiast polegać na nazwach modeli drukarek.',
        'Użyj obliczonego opóźnienia po zgłoszeniu wartości zadanej przez stół, zwłaszcza przed kalibracją pierwszej warstwy.',
        'Zmierz powierzchnię, jeśli problemy z przyczepnością utrzymują się pomimo stabilnego wykresu PID.',
        'Sprawdź ponownie opóźnienie po zmianie płyt, magnesów, izolacji, grzałek lub rozmiaru stołu.',
      ],
    },
  ],
  faq: [
    {
      question: 'Dlaczego czekać po osiągnięciu przez stół temperatury docelowej?',
      answer: 'Termistor może osiągnąć wartość zadaną, zanim górna powierzchnia druku w pełni się nagrzeje. Czekanie pozwala płycie, powłoce, magnetycznej podstawie i układowi grzałki zbliżyć się do bardziej stabilnej temperatury.',
    },
    {
      question: 'Czy szkło potrzebuje więcej czasu stabilizacji niż stal PEI?',
      answer: 'Zwykle tak. Szkło borokrzemowe ma znacznie niższą przewodność cieplną i jest często grubsze, więc powierzchnia pozostaje bardziej w tyle niż cienka blacha stalowa PEI.',
    },
    {
      question: 'Czy to to samo co autotune PID?',
      answer: 'Nie. Autotune PID kontroluje zachowanie grzałki na czujniku. Ten kalkulator szacuje, jak długo rzeczywista powierzchnia druku powinna odpoczywać po osiągnięciu wartości zadanej przez stół sterowany czujnikiem.',
    },
    {
      question: 'Czy sondować przed czy po moczeniu cieplnym?',
      answer: 'Jeśli siatka zmienia się, gdy stół się nagrzewa, sonduj po ustabilizowaniu się stołu. To sprawia, że siatka jest bliższa kształtowi używanemu podczas pierwszej warstwy.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Wybierz materiał płyty', text: 'Wybierz szkło borokrzemowe, stal sprężynującą PEI lub aluminium, aby obliczenie używało prawidłowej przewodności i pojemności cieplnej.' },
    { name: 'Wprowadź fizyczny układ stołu', text: 'Dodaj grubość płyty, obszar grzany, temperaturę docelową i moc grzałki.' },
    { name: 'Odczytaj zalecane opóźnienie', text: 'Użyj opóźnienia przed drukiem po tym, jak drukarka zgłosi, że stół osiągnął wartość zadaną.' },
    { name: 'Stosuj konsekwentnie', text: 'Używaj tego samego opóźnienia moczenia cieplnego przed sondowaniem lub kalibracją pierwszej warstwy dla powtarzalnych wyników.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Kalkulator Stabilizacji Bezwładności Cieplnej Stołu',
      description: 'Oszacuj opóźnienie stabilizacji powierzchni nagrzanego stołu drukarki 3D na podstawie materiału płyty, grubości, temperatury, mocy grzałki i rozmiaru stołu.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Dlaczego czekać po osiągnięciu przez stół temperatury docelowej?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Termistor może osiągnąć wartość zadaną, zanim górna powierzchnia druku w pełni się nagrzeje, więc opóźnienie moczenia cieplnego poprawia powtarzalność pierwszej warstwy.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Jak oszacować opóźnienie stabilizacji stołu drukarki 3D',
      step: [
        { '@type': 'HowToStep', text: 'Wybierz materiał płyty.' },
        { '@type': 'HowToStep', text: 'Wprowadź grubość, temperaturę docelową, moc grzałki i rozmiar stołu.' },
        { '@type': 'HowToStep', text: 'Poczekaj zalecane opóźnienie po osiągnięciu wartości zadanej przez stół.' },
        { '@type': 'HowToStep', text: 'Sonduj lub drukuj po ustabilizowaniu się układu stołu.' },
      ],
    },
  ],
};
