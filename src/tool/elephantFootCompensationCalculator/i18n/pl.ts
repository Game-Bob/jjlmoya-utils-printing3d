import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ElephantFootCompensationCalculatorUI } from '../ui';

const slug = 'kalkulator-kompensacji-stopni-slonia';
const title = 'Kalkulator Kompensacji Stopy Słonia: Precyzyjna Korekta Wymiarowa';
const description = 'Oblicz ujemne rozwinięcie poziome i głębokość sfazowania CAD dla pierwszej warstwy wydruku 3D na podstawie zmierzonego błędu wymiarowego, wysokości warstwy, ciśnienia Z-offset i temperatury stołu.';

const faqData = [
  {
    question: 'Jaka jest najlepsza wartość kompensacji stopy słonia?',
    answer: 'Najlepsza wartość to zmierzony błąd podstawy skorygowany o wysokość pierwszej warstwy, efektywne ciśnienie Z i temperaturę stołu. Ten kalkulator podaje ją jako ujemną wartość rozwinięcia poziomego slicera.',
  },
  {
    question: 'Czy powinienem użyć rozwinięcia poziomego czy sfazowania CAD?',
    answer: 'Użyj rozwinięcia poziomego slicera do szybkiej korekty na poziomie profilu. Użyj sfazowania CAD dla części funkcjonalnych, gdzie dolna krawędź dotyka innej części, leży na powierzchni referencyjnej lub musi pozostać powtarzalna między slicerami.',
  },
  {
    question: 'Dlaczego temperatura stołu wpływa na stopę słonia?',
    answer: 'Bardziej gorący stół utrzymuje dolny polimer dłużej miękki. Zmiękczony pasek może płynąć poziomo pod ciśnieniem dyszy, dlatego kalkulator zwiększa korektę powyżej punktu odniesienia 60 °C.',
  },
  {
    question: 'Czy stopa słonia to to samo co nadmierne wytłaczanie?',
    answer: 'Nie. Nadmierne wytłaczanie wpływa na wiele warstw. Stopa słonia koncentruje się u podstawy, gdzie pierwsze warstwy są kompresowane i ogrzewane przez stół, choć nadmierne wytłaczanie może ją pogorszyć.',
  },
];

const howToData = [
  { name: 'Wydrukuj kupon testowy', text: 'Użyj tego samego materiału, temperatury stołu, wysokości pierwszej warstwy i ustawień pierwszej warstwy co w druku produkcyjnym.' },
  { name: 'Zmierz błąd podstawy', text: 'Odejmij stabilny wymiar górnej ściany od najszerszego wymiaru podstawy.' },
  { name: 'Wprowadź ciśnienie i temperaturę', text: 'Podaj wysokość pierwszej warstwy, efektywną szczelinę ciśnienia Z i temperaturę stołu.' },
  { name: 'Zastosuj korektę', text: 'Użyj ujemnej wartości rozwinięcia poziomego w slicerze lub wymodeluj sugerowane sfazowanie 45 stopni.' },
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

export const content: ToolLocaleContent<ElephantFootCompensationCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    controlsAriaLabel: 'Dane wejściowe kompensacji stopy słonia',
    resultsAriaLabel: 'Wyniki korekty stopy słonia',
    canvasAriaLabel: 'Wizualizacja przekroju poprzecznego bieżącego i skorygowanego profilu stopy słonia',
    unitSystemLabel: 'Jednostki',
    metricLabel: 'Metryczne',
    imperialLabel: 'Imperialne',
    materialLabel: 'Preset materiału',
    plaLabel: 'PLA',
    petgLabel: 'PETG',
    absAsaLabel: 'ABS/ASA',
    customMaterialLabel: 'Niestandardowy',
    measuredErrorLabel: 'Zmierzone odchylenie podstawy',
    layerHeightLabel: 'Wysokość pierwszej warstwy',
    zPressureLabel: 'Szczelina ciśnienia Z-offset',
    bedTemperatureLabel: 'Temperatura stołu',
    targetToleranceLabel: 'Docelowa tolerancja',
    expansionLabel: 'Rozwinięcie slicera',
    chamferLabel: 'Sfazowanie CAD',
    thermalFactorLabel: 'Czynnik termiczny',
    verdictLabel: 'Cel dokładności wymiarowej',
    currentProfileLabel: 'Zmierzone stopa słonia',
    correctedProfileLabel: 'Profil po korekcie',
    slicerCommandLabel: 'Polecenie slicera',
    cadCommandLabel: 'Polecenie CAD',
    copyButton: 'Skopiuj raport korekty',
    copiedButton: 'Skopiowano',
    copyTemplate: 'Kompensacja stopy słonia: rozwinięcie poziome slicera {expansion}, sfazowanie CAD {chamfer} pod kątem 45°, czynnik termiczny {phi}, werdykt: {verdict}.',
    slicerCommandTemplate: 'Rozwinięcie poziome: {expansion} {unit}',
    cadCommandTemplate: '45° x {chamfer} {unit}',
    correctionCanvasTemplate: 'E_korr {correction} {unit}',
    pressureCanvasTemplate: 'phi_temp {phi} | stosunek ciśnienia Z {ratio}',
    optimalVerdict: '< 0,05 mm tolerancji: korekta opcjonalna, zweryfikuj suwmiarką.',
    watchVerdict: 'Kontrolowane odchylenie: zastosuj kompensację slicera i wydrukuj ponownie kupon.',
    severeVerdict: 'Poważne rozszerzenie podstawy: skoryguj ciśnienie Z przed poleganiem na offsecie slicera.',
    mmUnit: 'mm',
    inchUnit: 'cal',
    celsiusUnit: '°C',
    fahrenheitUnit: '°F',
    degreeUnit: '°',
    multiplierUnit: 'x',
  },
  seo: [
    { type: 'title', text: 'Kompensacja stopy słonia jako problem dokładności wymiarowej', level: 2 },
    { type: 'paragraph', html: 'Stopa słonia to rozszerzenie na zewnątrz pierwszych wydrukowanych warstw poza nominalną granicę CAD. Na kostce kalibracyjnej pojawia się jako warga u podstawy. W częściach inżynieryjnych staje się błędem funkcjonalnym: jaskółcze ogony blokują się, otwory w pobliżu platformy roboczej zamykają się, zatrzaski tracą luz, płyty łączące chwieją się na podniesionej krawędzi, a płytki wzorcowe nie leżą płasko. Dlatego użyteczny <strong>kalkulator kompensacji stopy słonia</strong> nie może być traktowany jak kosmetyczna regulacja przepływu. Musi przekształcić zmierzony błąd wymiarowy w ujemną wartość rozwinięcia poziomego i, gdy to możliwe, w sfazowanie CAD, które usuwa ściśniętą ścieżkę materiału z samego projektu.' },
    { type: 'paragraph', html: 'Ten kalkulator modeluje korektę z trzech fizycznych danych wejściowych, które silnie wpływają na wadę: zmierzonego błędu podstawy, wysokości pierwszej warstwy i efektywnej szczeliny ciśnienia Z. Główna zależność to <code>E_korr = Błąd x (WysokośćWarstwy / CiśnienieZOffset) x phi_temp</code>. Mnożnik temperatury <code>phi_temp</code> wzrasta powyżej referencyjnego stołu 60 °C, ponieważ gorętsza podstawa utrzymuje polimer dłużej miękki i pozwala obciążeniu dyszy wypychać materiał na boki. Wynik jest raportowany jako ujemne rozwinięcie poziome dla slicera i jako głębokość sfazowania 45 stopni dla CAD.' },
    { type: 'stats', columns: 3, items: [
      { value: '0,01 mm', label: 'rozdzielczość danych do strojenia wymiarowego' },
      { value: '45°', label: 'domyślny kąt sfazowania CAD' },
      { value: 'phi_temp', label: 'mnożnik przepływu temperatury stołu' },
    ] },
    { type: 'diagnostic', variant: 'info', title: 'Zmierz błąd, a nie wizualną wargę', html: 'Wydrukuj kwadratowy lub prostokątny kupon, zmierz nominalną ścianę lub wymiar zewnętrzny powyżej podstawy, a następnie zmierz ten sam wymiar przez pierwsze warstwy. Różnica między tymi dwoma pomiarami to błąd stopy słonia. Nie szacuj na podstawie zdjęcia; narzędzie jest zaprojektowane dla danych z suwmiarki.' },

    { type: 'title', text: 'Dlaczego stopa słonia występuje: ciśnienie dyszy, ciepło i przepływ plastiku', level: 2 },
    { type: 'paragraph', html: 'Pierwsza warstwa jest celowo kompresowana, aby filament zwilżył stół i przylegał. Ta kompresja zamienia dyszę w mały aplikator ciśnienia. Stopiony polimer opuszcza dyszę, jest ściskany między dyszą a powierzchnią roboczą i musi zająć dostępną objętość. Gdy szczelina Z jest zbyt mała, nie ma wystarczająco dużo miejsca w pionie dla poleconego paska wytłaczania, więc materiał płynie na boki. Podstawa staje się szersza, nawet gdy reszta wydruku jest wymiarowo dokładna.' },
    { type: 'paragraph', html: 'Temperatura stołu zmienia nasilenie. PLA w 60 °C może być blisko swojego obszaru przejścia szklistego, PETG w 75 °C pozostaje lepki i podatny, a ABS lub ASA na stole 100 °C pozostaje ciepły w pierwszych kilku warstwach. Bardziej gorący stół nie tylko poprawia przyczepność; opóźnia również krzepnięcie u podstawy. Dlatego ten kalkulator stosuje czynnik termiczny: <strong>1,00 w 60 °C, plus 0,05 za każde dodatkowe 5 °C</strong>. Stół PETG 75 °C używa zatem czynnika około 1,15 przed ograniczeniem.' },
    { type: 'comparative', columns: 3, items: [
      { title: 'Zdominowany przez ciśnienie Z', description: 'Bardzo niska szczelina dyszy spłaszcza pasek i wypycha plastik na zewnątrz. Błąd jest najbardziej widoczny w pierwszej warstwie i często poprawia się po korekcie Z-offset.', points: ['Szeroka pierwsza linia', 'Błyszcząca zgnieciona powierzchnia', 'Krawędź jak brim'] },
      { title: 'Zdominowany termicznie', description: 'Podstawa pozostaje miękka, ponieważ ciepło stołu lub komory jest wysokie. Warga może rozciągać się przez kilka warstw nawet przy rozsądnej pierwszej warstwie.', highlight: true, points: ['Zaokrąglona dolna krawędź', 'Częste w PETG lub ABS', 'Wolne chłodzenie'] },
      { title: 'Zdominowany przez przepływ', description: 'Mnożnik wytłaczania, średnica filamentu lub przepływ pierwszej warstwy są zbyt wysokie. Cały dolny obszar może wyglądać na przepełniony, nie tylko obwód.', points: ['Szorstki wierzch pierwszej warstwy', 'Zbyt szerokie linie', 'Zamknięte szczeliny'] },
    ] },
    { type: 'tip', title: 'Użyj Z offset jako danych, a nie zgadywania', html: 'Szczelina ciśnienia Z to efektywny luz, który zmusza pasek do stołu. Jeśli Twój slicer raportuje pierwszą warstwę 0,20 mm, ale rzeczywiste zgniecenie zachowuje się jak 0,10 mm, użyj mniejszej szczeliny ciśnienia. To sprawia, że obliczona kompensacja jest większa, co odpowiada fizyce bardziej ściśniętego paska.' },

    { type: 'title', text: 'Jak zmierzyć rozszerzenie podstawy dla kalkulatora', level: 2 },
    { type: 'paragraph', html: 'Użyj prostego kuponu testowego ze znanym wymiarem zewnętrznym, takim jak 20,00 mm, 30,00 mm lub 40,00 mm. Kupon powinien mieć proste pionowe boki, co najmniej 8 do 12 mm wysokości i żadnego sfazowania przy pierwszym teście. Zmierz wymiar korpusu kilka milimetrów nad stołem, gdzie stopa słonia zniknęła. Następnie zmierz ten sam wymiar w najszerszej części podstawy. Różnica to całkowity błąd zewnętrzny dla tej osi.' },
    { type: 'paragraph', html: 'Jeśli kostka 20,00 mm mierzy 20,02 mm w środku, ale 20,24 mm u podstawy, błąd podstawy względem stabilnego korpusu wynosi 0,22 mm. Wprowadź 0,22 mm, a nie różnicę od wartości nominalnej. To usuwa niezwiązany skurcz, błąd kroków XY lub odchylenie szerokości linii slicera z obliczenia stopy słonia. Izolujesz deformację podstawy, a nie kalibrujesz całej drukarki.' },
    { type: 'list', items: [
      'Mierz po ostygnięciu części do temperatury pokojowej, zwłaszcza dla ABS, ASA, PETG i dużych części PLA.',
      'Używaj lekkiego nacisku suwmiarki; ściskanie zmiękczonej lub teksturowanej podstawy może ukryć prawdziwą wargę.',
      'Wykonuj pomiary po bokach X i Y, ponieważ ruch stołu, kierunek wentylatora i przekrzywienie bramy mogą sprawić, że wada będzie asymetryczna.',
      'Ignoruj materiał brimu i rąbka. Usuń brim dokładnie przed pomiarem rzeczywistej ściany części.',
      'Wydrukuj ponownie ten sam kupon po zastosowaniu kompensacji, aby następny pomiar był porównywalny.',
    ] },
    { type: 'table', headers: ['Obserwacja', 'Prawdopodobna przyczyna', 'Najlepsza pierwsza akcja'], rows: [
      ['Podstawa jest szersza, ale górna ściana jest dokładna', 'Stopa słonia od ciśnienia pierwszej warstwy', 'Użyj tego kalkulatora i zastosuj ujemne rozwinięcie poziome.'],
      ['Każda warstwa jest za duża', 'Skala XY, mnożnik wytłaczania lub błąd średnicy filamentu', 'Skalibruj przepływ i XY przed kompensacją stopy słonia.'],
      ['Tylko rogi pęcznieją', 'Wyprzedzenie ciśnienia, prędkość lub problem z chłodzeniem', 'Dostosuj wyprzedzenie ciśnienia lub prędkość w rogach.'],
      ['Spód jest szorstki i półprzezroczysty', 'Dysza zbyt blisko lub przepływ pierwszej warstwy zbyt wysoki', 'Podnieś Z-offset lub zmniejsz przepływ pierwszej warstwy przed kompensacją.'],
    ] },

    { type: 'title', text: 'Ujemne rozwinięcie poziome vs sfazowanie CAD', level: 2 },
    { type: 'paragraph', html: 'Rozwinięcie poziome slicera przesuwa granicę wielokąta do wewnątrz lub na zewnątrz przed generowaniem ścieżek narzędzia. W przypadku korekty stopy słonia ustawienie jest zwykle ujemne: jeśli podstawa mierzy 0,20 mm zbyt szeroko, slicer może potrzebować wartości bliskiej -0,20 mm, zmodyfikowanej tutaj przez wysokość warstwy, ciśnienie Z i temperaturę stołu. Jest to szybkie, odwracalne i przydatne dla partii, w których każda część ma podobne odkształcenie pierwszej warstwy.' },
    { type: 'paragraph', html: 'Sfazowanie CAD usuwa materiał z samego modelu. Kalkulator podaje głębokość sfazowania 45 stopni jako <code>Błąd x sqrt(2)</code>, co odpowiada przekątnej ściany, która usuwa poziomą wargę podstawy. Sfazowania CAD są często lepsze dla krytycznych interfejsów, ponieważ zachowują zamierzone wymiary górnej ściany, jednocześnie dając pierwszej warstwie kontrolowaną ścieżkę odciążenia. Są również bardziej przenośne między slicerami, ponieważ geometria przenosi kompensację.' },
    { type: 'proscons', title: 'Wybór metody korekty', items: [
      { pro: 'Ujemne rozwinięcie poziome można szybko zmienić dla profilu materiału lub drukarki.', con: 'Może wpływać na mały tekst, cienkie ściany, kołki i otwory, jeśli jest stosowane globalnie.' },
      { pro: 'Sfazowania CAD są jawne i solidne dla powierzchni łączących w pobliżu platformy roboczej.', con: 'Wymagają edycji modelu i mogą być niewygodne dla pobranych części.' },
      { pro: 'Połączenie łagodnego offsetu slicera z małym sfazowaniem może kontrolować poważne podstawy PETG lub ABS.', con: 'Kumulowanie korekt bez ponownego mierzenia może zmniejszyć część.' },
    ] },
    { type: 'message', title: 'Nie kompensuj na ślepo', html: 'Jeśli pierwsza warstwa jest widocznie zbyt zgnieciona, najpierw napraw Z-offset. Kompensacja powinna usunąć pozostałe przewidywalne rozszerzenie podstawy, a nie ukrywać dyszę, która orze pierwszą warstwę.' },

    { type: 'title', text: 'Sugerowana kompensacja według materiału', level: 2 },
    { type: 'paragraph', html: 'Zachowanie materiału ma znaczenie, ponieważ temperatura przyczepności, przejście szkliste, szybkość chłodzenia i lepkość wpływają na to, jak daleko dolny pasek może płynąć przed zamarznięciem. PLA często dobrze reaguje na małe ujemne rozwinięcie poziome po uregulowaniu Z-offset. PETG może wymagać większej korekty, ponieważ jest zwykle drukowany goręcej na stole i z pierwszą warstwą ustawioną na silną przyczepność. ABS i ASA mogą wymagać odciążenia CAD na częściach funkcjonalnych, ponieważ gorący stół i komora utrzymują podstawę dłużej miękką.' },
    { type: 'table', headers: ['Materiał', 'Typowy zakres stołu', 'Początkowy cel tolerancji', 'Uwagi dotyczące kompensacji'], rows: [
      ['PLA', '55-65 °C', '< 0,05 mm', 'Zacznij od dokładnego Z-offset, następnie użyj małego ujemnego rozwinięcia poziomego. Sfazowanie jest przydatne dla podstaw wciskanych.'],
      ['PETG', '70-85 °C', '< 0,07 mm', 'Spodziewaj się wyższego czynnika termicznego. Unikaj nadmiernego przepływu pierwszej warstwy, ponieważ PETG może tworzyć lepką zaokrągloną wargę.'],
      ['ABS/ASA', '90-110 °C', '< 0,08 mm', 'Używaj sfazowań CAD dla części produkcyjnych. Ciepło komory może utrzymywać pierwsze warstwy podatne.'],
      ['TPU', '40-60 °C', 'specyficzne dla aplikacji', 'Elastyczny filament może odkształcać się pod suwmiarką. Mierz delikatnie i preferuj odciążenie geometryczne nad agresywnymi offsetami globalnymi.'],
    ] },
    { type: 'card', title: 'Dlaczego tabela jest punktem wyjścia', html: 'Teksturowane PEI, gładkie szklane stoły, średnica dyszy, szerokość linii, prędkość pierwszej warstwy, opóźnienie chłodzenia, temperatura komory i marka filamentu mogą zmienić zmierzony błąd. Tabela ustawia oczekiwania; kalkulator powinien być napędzany przez Twój zmierzony kupon.' },
    { type: 'summary', title: 'Priorytety strojenia materiału', items: [
      'PLA: najpierw skoryguj Z-offset, następnie użyj małej kompensacji slicera.',
      'PETG: obserwuj temperaturę stołu i przepływ pierwszej warstwy, ponieważ podstawa pozostaje ruchoma.',
      'ABS/ASA: preferuj sfazowania CAD na interfejsach produkcyjnych i weryfikuj po nagrzaniu komory.',
      'Materiały elastyczne: metoda pomiaru ma znaczenie, ponieważ podstawa może ulec kompresji pod szczękami suwmiarki.',
    ] },

    { type: 'title', text: 'Ustawienia slicera współdziałające z kompensacją stopy słonia', level: 2 },
    { type: 'paragraph', html: 'Różne slicery udostępniają ustawienie pod nazwami takimi jak Horizontal Expansion, Initial Layer Horizontal Expansion, Elephant Foot Compensation, XY Compensation lub rozwinięcie pierwszej warstwy. Globalne rozwinięcie poziome zmienia cały obrys części. Ustawienie tylko dla pierwszej warstwy wpływa tylko na dolne warstwy i jest zwykle bezpieczniejsze dla dokładności wymiarowej. Gdy slicer obsługuje oba, użyj kompensacji pierwszej warstwy dla stopy słonia i zarezerwuj globalną kompensację XY dla skalibrowanych błędów rozmiaru, które utrzymują się na całej wysokości.' },
    { type: 'paragraph', html: 'Szerokość linii i przepływ pierwszej warstwy również współdziałają z korektą. Bardzo szeroka linia pierwszej warstwy może poprawić przyczepność do stołu, ale zwiększa objętość, która musi zmieścić się pod dyszą. Jeśli pasek nie ma gdzie pójść w pionie, rozprzestrzenia się poziomo. Zmniejszenie przepływu pierwszej warstwy ze 105 procent do 100 procent, podniesienie Z-offset o 0,02 mm lub obniżenie temperatury stołu o 5 °C może zmniejszyć wymagane ujemne rozwinięcie czyściej niż zastosowanie dużego offsetu.' },
    { type: 'glossary', items: [
      { term: 'Rozwinięcie poziome', definition: 'Offset slicera, który rozszerza lub zwęża kontury modelu przed generowaniem ścieżek narzędzia.' },
      { term: 'Rozwinięcie pierwszej warstwy', definition: 'Wariant, który stosuje się tylko do pierwszej warstwy lub warstw dolnych, co czyni go bardziej odpowiednim dla stopy słonia.' },
      { term: 'Szczelina ciśnienia Z', definition: 'Efektywna przestrzeń dysza-stół, która określa, jak bardzo pierwszy pasek jest ściśnięty.' },
      { term: 'Czynnik termiczny', definition: 'Mnożnik używany tutaj do reprezentowania zwiększonego przepływu bocznego, gdy stół jest cieplejszy niż 60 °C.' },
      { term: 'Sfazowanie CAD', definition: 'Modelowana ścięta krawędź, która daje ściśniętemu materiałowi pierwszej warstwy geometryczną strefę odciążenia.' },
    ] },
    { type: 'diagnostic', variant: 'warning', title: 'Duże ujemne rozwinięcie może zniszczyć małe cechy', html: 'Wartość taka jak -0,35 mm może naprawić zewnętrzną podstawę dużego pudełka, ale wymazać drobne wytłoczone litery, zmniejszyć wąskie żebra i zmienić średnicę małych słupków. Gdy wymagana korekta jest duża, potraktuj to jako sygnał do ponownego sprawdzenia Z-offset, przepływu pierwszej warstwy lub temperatury stołu.' },

    { type: 'title', text: 'Przepływ pracy dla precyzyjnej korekty stopy słonia', level: 2 },
    { type: 'list', items: [
      'Wydrukuj prosty kupon kalibracyjny z tym samym materiałem, temperaturą stołu, wysokością pierwszej warstwy i prędkością pierwszej warstwy, co w rzeczywistej części.',
      'Zmierz stabilny wymiar korpusu powyżej podstawy, następnie zmierz najszerszy wymiar podstawy i odejmij dwa.',
      'Wprowadź zmierzony błąd, wysokość pierwszej warstwy, efektywną szczelinę ciśnienia Z, temperaturę stołu i docelową tolerancję.',
      'Zastosuj raportowane ujemne rozwinięcie poziome w slicerze lub dodaj raportowane sfazowanie 45 stopni w CAD.',
      'Wydrukuj ponownie kupon i zmierz ponownie po ostygnięciu.',
      'Jeśli błąd resztkowy pozostaje powyżej tolerancji, dostosuj w półkrokach zamiast skakać do ekstremalnego globalnego offsetu.',
      'Zablokuj ustawienie w profilu materiału dopiero po tym, jak dwa powtarzalne kupony zgodzą się w ramach Twojego celu tolerancji.',
    ] },
    { type: 'tip', title: 'Użyj tego samego stanu stołu co w produkcji', html: 'Pierwszy zimny wydruk na grubym stole może zachowywać się inaczej niż piąty wydruk po 30-minutowym nagrzaniu stołu. Jeśli praca produkcyjna jest wykonywana po nagrzaniu, kalibruj kupon również po nagrzaniu.' },
    { type: 'diagnostic', variant: 'success', title: 'Dobry cel korekty', html: 'W praktycznej pracy wymiarowej FDM odchylenie podstawy poniżej 0,05 mm jest często wystarczająco małe, aby dopasowanie montażowe było kontrolowane przez normalny projekt luzu, a nie przez wargę stopy słonia. Węższe cele wymagają sztywnych maszyn, stabilnego filamentu i powtarzalnej techniki pomiarowej.' },
    { type: 'summary', title: 'Kluczowe wnioski', items: [
      'Stopa słonia to problem odkształcenia pod wpływem ciśnienia i temperatury, a nie tylko defekt wizualny.',
      'Używaj zmierzonego błędu podstawy względem stabilnej ściany, nie tylko nominalnego rozmiaru CAD.',
      'Ujemne rozwinięcie poziome to korekta slicera; sfazowanie 45 stopni to korekta CAD.',
      'Temperatura stołu podnosi czynnik termiczny, ponieważ podstawa pozostaje bardziej miękka i płynie na boki dłużej.',
      'Poważne wartości kompensacji powinny wywołać sprawdzenie Z i przepływu pierwszej warstwy przed użyciem produkcyjnym.',
    ] },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
