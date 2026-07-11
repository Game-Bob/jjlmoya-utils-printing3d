import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WarpingRiskSimulatorUI } from '../ui';

const slug = 'symulator-ryzyka-wypaczania-druk-3d';
const title = 'Symulator Ryzyka Wypaczania (Warpingu) dla Druku 3D';
const description = 'Oszacuj unoszenie pierwszej warstwy i ryzyko wypaczania na podstawie skurczu materiału, powierzchni styku, najdłuższej przekątnej, temperatury stołu, temperatury otoczenia oraz warunków komory.';

const faqData = [
  {
    question: 'Dlaczego najdłuższa przekątna wpływa na wypaczanie bardziej niż powierzchnia styku?',
    answer: 'Najdłuższa przekątna reprezentuje największą ciągłą ścieżkę skurczu. Długi element może zgromadzić wystarczający liniowy skurcz, aby unieść narożniki, nawet jeśli całkowita powierzchnia kontaktu wydaje się duża.',
  },
  {
    question: 'Czy ten symulator gwarantuje, że mój wydruk nie ulegnie wypaczeniu?',
    answer: 'Nie. Jest to oszacowanie ryzyka. Wilgotny filament, brudne stoły robocze, wysokość pierwszej warstwy, przeciągi, geometria elementu oraz ustawienia chłodzenia we slicerze mogą zmienić wynik.',
  },
  {
    question: 'Które materiały najbardziej potrzebują zamkniętej komory?',
    answer: 'ABS, ASA, Nylon i PC są najbardziej wrażliwe na komorę w tym modelu, ponieważ łączą wyższe temperatury przetwarzania, silniejszy skurcz i większe naprężenia chłodzące.',
  },
  {
    question: 'Jak szacowana jest szerokość brimu?',
    answer: 'Symulator zaczyna od pięciu procent najdłuższej przekątnej i skaluje ją w oparciu o obliczone ryzyko, a następnie dopasowuje wynik do praktycznych wartości slicera.',
  },
];

const howToData = [
  { name: 'Wybierz materiał', text: 'Wybierz PLA, PETG, ABS, ASA, Nylon, PC lub TPU, aby symulator mógł zastosować klasę skurczu.' },
  { name: 'Wprowadź powierzchnię i przekątną', text: 'Użyj powierzchni dotykającej stołu oraz najdłuższej odległości między narożnikami elementu.' },
  { name: 'Skonfiguruj środowisko termiczne', text: 'Wprowadź temperaturę stołu i otoczenia, a następnie wskaż, czy drukarka ma zamkniętą komorę.' },
  { name: 'Skopiuj ustawienia slicera', text: 'Użyj sugerowanego brimu, adhezji, chłodzenia i ustawień komory jako profilu początkowego.' },
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

export const content: ToolLocaleContent<WarpingRiskSimulatorUI> = {
  slug,
  title,
  description,
  ui: {
    unitSystemLabel: 'System jednostek',
    unitMetric: 'Metryczny',
    unitImperial: 'Imperialny',
    unitCelsius: '°C',
    unitFahrenheit: '°F',
    unitMillimeter: 'mm',
    unitInch: 'cal',
    noBrim: '0',
    materialLabels: {
      PLA: 'PLA',
      PETG: 'PETG',
      ABS: 'ABS',
      ASA: 'ASA',
      Nylon: 'Nylon',
      PC: 'PC',
      TPU: 'TPU',
    },
    material: 'Materiał',
    footprintArea: 'Powierzchnia styku',
    footprintHelp: 'Powierzchnia rzeczywiście dotykająca stołu roboczego, nie całkowita powierzchnia modelu.',
    diagonal: 'Najdłuższa przekątna',
    diagonalHelp: 'Najdłuższa odległość między narożnikami pierwszej warstwy. Jest to główny wektor naprężeń termicznych.',
    bedTemperature: 'Temperatura stołu',
    bedTemperatureWarning: 'Ostrzeżenie temperaturowe',
    ambientTemperature: 'Temperatura otoczenia',
    chamber: 'Zamknięta komora',
    chamberOn: 'Zamknięta lub aktywnie chroniona',
    chamberOff: 'Otwarta drukarka',
    riskLow: 'Niskie',
    riskMedium: 'Średnie',
    riskHigh: 'Wysokie',
    riskCritical: 'Krytyczne',
    riskIndex: 'Wskaźnik ryzyka',
    thermalIndex: 'Wskaźnik naprężeń termicznych',
    deltaT: 'Delta T',
    brimRecommendation: 'Zalecenie brimu',
    adhesionDiagnosis: 'Diagnoza adhezji',
    adhesionStrength: 'Drabina wytrzymałości adhezyjnej',
    criticalWarnings: 'Krytyczne ostrzeżenia',
    whyDiagonalMatters: 'Dlaczego przekątna ma znaczenie',
    recommendedSettings: 'Zalecane ustawienia slicera',
    copySettings: 'Kopiuj ustawienia',
    copied: 'Skopiowano',
    simulatorNotice: 'To oszacowanie ryzyka, a nie gwarancja sukcesu. Wilgotność filamentu, zanieczyszczenie stołu, Z offset, przeciągi i zmiany chłodzenia pozostają zmiennymi zewnętrznymi.',
    warnings: {
      openTechnicalMaterial: '{material} bez zamkniętej komory to poważny stan wypaczania.',
      bedTemperatureHigh: 'Temperatura stołu dla {material} przekracza zalecany zakres {min}-{max} {unit}. Spodziewaj się mięknienia, stopy słonia lub artefaktów adhezji.',
      bedTemperatureLow: 'Temperatura stołu dla {material} jest poniżej zalecanego zakresu {min}-{max} {unit}. Chwyt pierwszej warstwy może być zbyt słaby dla tej geometrii.',
      narrowFootprint: 'Powierzchnia styku jest wąska w porównaniu z przekątną, więc unoszenie narożników może szybko narastać.',
      highDeltaT: 'Różnica temperatury stołu i otoczenia jest bardzo wysoka; kontroluj przepływ powietrza i szybkość chłodzenia.',
    },
    diagnosis: {
      critical: 'Brim jest obowiązkowy. Użyj dedykowanej powierzchni adhezyjnej i unikaj drukowania tego materiału na otwartym powietrzu.',
      highEnclosed: 'Szeroki brim i klej są zdecydowanie zalecane.',
      highOpen: 'Użyj brimu, kleju i zamkniętej komory przed rozpoczęciem.',
      mediumEasyMaterial: 'Użyj czystej powierzchni PEI; brim jest opcjonalny dla ostrych narożników.',
      medium: 'Użyj brimu lub mouse ears na narożnikach i sprawdź adhezję do stołu.',
      low: 'Bezpieczne w normalnych warunkach pierwszej warstwy.',
    },
    adhesionOptions: {
      low: ['Czyste PEI lub teksturowana płyta: normalny chwyt, najłatwiejsze usuwanie.'],
      medium: ['Klej w sztyfcie lub warstwa antyadhezyjna PVA: lekki dodatkowy chwyt i bezpieczniejsze uwalnianie PETG.', 'Mouse ears: zlokalizowany chwyt dla narożników bez pełnego brimu.'],
      high: ['Szeroki brim plus klej w sztyfcie: szerokie wsparcie mechaniczne z umiarkowanym czyszczeniem.', 'Magigoo lub podobny klej: silniejszy chwyt dla ABS, ASA, PETG i wariantów Nylonu.'],
      criticalDefault: ['Brim o pełnej szerokości: maksymalna powierzchnia styku pierwszej warstwy.', 'Klej o wysokiej wytrzymałości: użyj PEI plus klej o wysokiej wytrzymałości.', 'Zamknięta komora: niezbędna do konsekwentnego działania kleju.'],
      criticalTechnical: ['Brim o pełnej szerokości: maksymalna powierzchnia styku pierwszej warstwy.', 'Klej o wysokiej wytrzymałości: użyj kleju specyficznego dla Nylonu lub PC.', 'Zamknięta komora: niezbędna do konsekwentnego działania kleju.'],
    },
    slicerSettings: {
      brimWidth: 'Szerokość brimu: {value}',
      bedAdhesion: 'Adhezja stołu: {value}',
      lowAdhesion: 'Czyste PEI lub teksturowana płyta',
      highAdhesion: 'PEI plus klej w sztyfcie, Magigoo lub klej specyficzny dla materiału',
      cooling: 'Chłodzenie: {value}',
      normalCooling: 'Normalne chłodzenie elementu po warstwie 3',
      technicalCooling: 'Chłodzenie elementu wyłączone dla pierwszych 5-8 warstw',
      enclosedChamber: 'Trzymaj komorę zamkniętą, aż element ostygnie poniżej zakresu przemiany szklistej',
      openChamber: 'Chroń drukarkę przed przeciągami i przepływem powietrza w pomieszczeniu',
      skirtEnough: '0 mm, spódnica wystarczy',
    },
    diagonalExplanation: 'Najdłuższa przekątna zachowuje się jak główny wektor naprężeń: podczas chłodzenia elementu skurcz gromadzi się wzdłuż tego rozpięcia i obciąża narożniki, nawet gdy powierzchnia styku wydaje się duża.',
  },
  seo: [
    { type: 'title', text: 'Jak oszacować ryzyko wypaczania przed slicowaniem wydruku 3D', level: 2 },
    {
      type: 'paragraph',
      html: 'Wypaczanie to nie tylko problem materiałowy i nie tylko problem adhezji stołu. Pojawia się, gdy wydrukowana warstwa stygnie, kurczy się i tworzy wystarczające naprężenie wewnętrzne, aby pokonać chwyt pierwszej warstwy. Mały wspornik ABS może zawieść, ponieważ polimer silnie się kurczy; duży znak PLA może zawieść, ponieważ przekątna jest wystarczająco długa, aby zgromadzić skurcz na szerokim rozpięciu. Dlatego użyteczne pytanie nie brzmi po prostu <strong>czy ten materiał się wypaczy?</strong>, ale <strong>czy ta geometria i środowisko termiczne wytwarzają większą siłę ciągnącą, niż stół roboczy jest w stanie wytrzymać?</strong>',
    },
    {
      type: 'paragraph',
      html: 'Ten symulator używa heurystycznego Wskaźnika Naprężeń Termicznych: <strong>współczynnik skurczu materiału razy najdłuższa przekątna razy różnica temperatury stół-otoczenie, podzielone przez powierzchnię styku</strong>. Formuła jest celowo praktyczna. Nie udaje analizy metodą elementów skończonych, ale łączy zmienne, które operatorzy mogą zmierzyć przed drukowaniem: rodzinę materiału, powierzchnię kontaktu, najdłuższe liniowe rozpięcie, temperaturę stołu, temperaturę otoczenia i czy drukarka jest zamknięta.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Użyj wyniku jako sygnału zapobiegawczego',
      badge: 'Oszacowanie',
      html: 'Niski wynik oznacza, że wydruk raczej się nie uniesie, jeśli pierwsza warstwa jest czysta i dobrze wyregulowana. Wysoki lub krytyczny wynik oznacza, że profil slicera należy zmienić przed drukowaniem: szerszy brim, klej, mniejsze chłodzenie, ochrona przed przeciągami lub inny materiał. Symulator nie widzi wilgotnego filamentu, tłustego PEI, dyszy zbyt daleko od stołu ani elementu z malutkimi punktami kontaktu na narożnikach.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '5%', label: 'początkowa szerokość brimu jako ułamek najdłuższej przekątnej', icon: 'mdi:ruler' },
        { value: '1,85x', label: 'poważny mnożnik otwartej komory dla ABS, ASA, Nylonu i PC', icon: 'mdi:home-alert' },
        { value: '0-100', label: 'skala ryzyka odwzorowana ze Wskaźnika Naprężeń Termicznych', icon: 'mdi:gauge' },
      ],
    },
    { type: 'title', text: 'Dlaczego najdłuższa przekątna może być bardziej niebezpieczna niż powierzchnia', level: 2 },
    {
      type: 'paragraph',
      html: 'Powierzchnia styku informuje, ile powierzchni jest dostępne do adhezji. Przekątna informuje, jak daleko skurcz termiczny może się kumulować, zanim dotrze do narożnika lub cienkiego końca. Dwa elementy mogą mieć tę samą powierzchnię i zachowywać się bardzo różnie: kompaktowa kwadratowa podstawa ma krótkie ścieżki skurczu we wszystkich kierunkach, podczas gdy długi wąski pasek koncentruje skurcz wzdłuż jednej linii i próbuje oderwać się na końcach.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Kompaktowa powierzchnia styku',
          description: 'Kwadratowa lub okrągła podstawa rozkłada skurcz przez wiele krótkich ścieżek. Narożniki są bliżej środka, więc dźwignia do unoszenia jest mniejsza.',
          icon: 'mdi:crop-square',
          points: ['Lepsze rozłożenie obciążenia', 'Mniejsza dźwignia narożników', 'Brim często opcjonalny przy łatwych materiałach'],
        },
        {
          title: 'Powierzchnia z długą przekątną',
          description: 'Długi prostokąt, rama, ostrze, panel obudowy lub szyna pozwala skurczowi narastać wzdłuż jednego dominującego kierunku. Końce i narożniki otrzymują najwyższą siłę odrywającą.',
          icon: 'mdi:vector-line',
          highlight: true,
          points: ['Wyższe skumulowane naprężenie', 'Narożniki odrywają się pierwsze', 'Brim lub mouse ears często potrzebne'],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Jak szybko zmierzyć przekątną',
      html: 'W podglądzie slicera spójrz na pierwszą warstwę z góry i zmierz najdłuższą odległość między narożnikami części dotykającej stołu. W przypadku prostokątnej powierzchni styku użyj przekątnej prostokąta, nie tylko długości X lub Y. W przypadku nieregularnego elementu użyj najdłuższego prostego odcinka między dwoma zewnętrznymi punktami.',
    },
    {
      type: 'table',
      headers: ['Wzór geometrii', 'Typowy objaw', 'Działanie zapobiegawcze'],
      rows: [
        ['Długa cienka szyna', 'Końce się unoszą, podczas gdy środek pozostaje przymocowany', 'Użyj brimu lub mouse ears na obu końcach'],
        ['Duży płaski panel', 'Narożniki stopniowo zawijają się do góry', 'Użyj zamkniętej komory, wolniejszego chłodzenia i kleju'],
        ['Mały wysoki element', 'Podstawa pozostaje przymocowana, ale wieża się chwieje', 'Wypaczanie nie jest głównym ryzykiem; popraw stabilność'],
        ['Otwarta rama', 'Wewnętrzne narożniki ciągną do wewnątrz', 'Dodaj brim, zwiększ szerokość pierwszej warstwy, zmniejsz wentylator'],
      ],
    },
    { type: 'title', text: 'Klasy skurczu materiałów używane przez symulator', level: 2 },
    {
      type: 'paragraph',
      html: 'Różne termoplasty kurczą się w różnym stopniu podczas chłodzenia od temperatury ekstruzji do temperatury pokojowej. PLA i TPU są ogólnie wybaczające, ponieważ drukują w niższych temperaturach i wytwarzają mniejsze naprężenia chłodzące. PETG znajduje się pośrodku: silnie przylega, ale może ciągnąć ostre narożniki. ABS, ASA, Nylon i PC są traktowane jako techniczne materiały wysokiego ryzyka, ponieważ łączą wyższe temperatury ekstruzji, silniejszy skurcz i większą potrzebę ciepłej, stabilnej komory.',
    },
    {
      type: 'table',
      headers: ['Materiał', 'Klasa skurczu', 'Typowa strategia stołu', 'Wrażliwość na komorę'],
      rows: [
        ['PLA', 'Niski', 'Czyste PEI, umiarkowany stół', 'Niska'],
        ['TPU', 'Niski', 'Czysta płyta, unikaj nadmiernego docisku', 'Niska'],
        ['PETG', 'Średni', 'Teksturowane PEI lub warstwa antyadhezyjna', 'Średnia'],
        ['ABS', 'Wysoki', 'PEI plus klej lub zawiesina ABS gdzie odpowiednie', 'Bardzo wysoka'],
        ['ASA', 'Wysoki', 'PEI plus klej, kontrolowane chłodzenie', 'Bardzo wysoka'],
        ['Nylon', 'Wysoki', 'Klej specyficzny dla materiału, suchy filament', 'Bardzo wysoka'],
        ['PC', 'Wysoki', 'Stół o wysokiej temperaturze i klej', 'Bardzo wysoka'],
      ],
    },
    {
      type: 'proscons',
      title: 'Zmiana materiału zamiast walki z wypaczaniem',
      items: [
        { pro: 'Przejście z ABS na ASA może poprawić trwałość zewnętrzną przy zachowaniu podobnego zachowania termicznego.', con: 'ASA nadal wymaga dyscypliny komory i może się wypaczać na długich elementach.' },
        { pro: 'Przejście z ABS na PETG zmniejsza skurcz i jest często wystarczające dla wsporników i obudów.', con: 'PETG ma niższą odporność cieplną i inną sztywność niż ABS czy PC.' },
        { pro: 'Nylon wypełniony włóknem może zmniejszyć niektóre ścieżki skurczu i poprawić sztywność.', con: 'Wymaga suszenia, dysz odpornych na ścieranie i silnej kontroli adhezji.' },
      ],
    },
    { type: 'title', text: 'Delta T: dlaczego temperatura stołu i otoczenia mają znaczenie', level: 2 },
    {
      type: 'paragraph',
      html: 'Symulator używa <strong>Delty T</strong> jako temperatury stołu minus temperatura otoczenia. To nie to samo co temperatura dyszy, ale jest użytecznym przybliżeniem gradientu termicznego, któremu podlega dolna część elementu. Gorący stół zmniejsza wczesny skurcz na styku, ale bardzo zimne pomieszczenie lub silny przepływ powietrza mogą nadal wyciągać ciepło z górnych warstw i tworzyć gradient naprężeń między zakotwiczoną podstawą a stygnącym korpusem elementu.',
    },
    {
      type: 'paragraph',
      html: 'Dla PLA umiarkowana Delta T może być nieszkodliwa, ponieważ materiał kurczy się mniej agresywnie. Dla ABS, ASA, Nylonu i PC ta sama geometria przy tej samej temperaturze stołu może zawieść, jeśli drukarka jest wystawiona na przeciągi. Dlatego obliczenia stosują poważny mnożnik, gdy te techniczne materiały są drukowane bez zamkniętej komory.',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Otwarta drukarka z ABS, ASA, Nylonem lub PC',
      badge: 'Stan krytyczny',
      html: 'Jeśli komora jest otwarta, wydruk jest narażony na lokalne chłodzenie, ruch drzwi, przepływ HVAC i szybkie zmiany temperatury warstw. Pierwsza warstwa może wyglądać idealnie przez pierwsze dwadzieścia minut, a mimo to później się unieść, gdy element zgromadzi więcej naprężeń skurczowych.',
    },
    {
      type: 'list',
      icon: 'mdi:thermometer',
      items: [
        'Cieplejsza komora zmniejsza różnicę temperatury między nowymi a starszymi warstwami.',
        'Zamknięta komora spowalnia również chłodzenie po druku, co zmniejsza nagłe odrywanie narożników.',
        'Osłony przeciągowe pomagają, ale nie są równoważne stabilnej ogrzewanej komorze dla PC lub Nylonu.',
        'Zwiększenie temperatury stołu może poprawić chwyt, ale może też zwiększyć stopę słonia na miękkich materiałach.',
      ],
    },
    { type: 'title', text: 'Jak interpretowany jest Wskaźnik Naprężeń Termicznych', level: 2 },
    {
      type: 'paragraph',
      html: 'Wskaźnik Naprężeń Termicznych jest wynikiem względnym, a nie mierzoną siłą w niutonach. Rośnie, gdy wzrasta współczynnik skurczu, przekątna lub Delta T. Spada, gdy zwiększa się powierzchnia styku, ponieważ większa powierzchnia kontaktu może rozłożyć to samo obciążenie ciągnące. Wartość jest następnie odwzorowywana na procent ryzyka 0-100, aby można było szybko porównać różne ustawienia druku.',
    },
    {
      type: 'table',
      headers: ['Zakres ryzyka', 'Znaczenie', 'Zalecana reakcja'],
      rows: [
        ['0-31%', 'Niskie', 'Wyczyść stół, sprawdź pierwszą warstwę, specjalna adhezja nie jest potrzebna dla większości kształtów'],
        ['32-57%', 'Średnie', 'Użyj brimu na ostrych narożnikach, zmniejsz początkowy wentylator, sprawdź kontakt powierzchni'],
        ['58-81%', 'Wysokie', 'Użyj szerokiego brimu, kleju, zamkniętej komory jeśli materiał tego wymaga, unikaj przeciągów'],
        ['82-100%', 'Krytyczne', 'Traktuj jako prawdopodobne wypaczenie, chyba że geometria, materiał lub środowisko ulegną zmianie'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:calculator-variant',
      title: 'Dlaczego dzielić przez powierzchnię styku?',
      html: 'Większa powierzchnia styku daje stołowi więcej możliwości przeciwstawienia się sile odrywania. Model nagradza elementy z szerokim, ciągłym kontaktem i karze wąskie podstawy, małe stópki i długie elementy, które mają tylko cienki pasek dotykający powierzchni.',
    },
    { type: 'title', text: 'Szerokość brimu, mouse ears i wybór kleju', level: 2 },
    {
      type: 'paragraph',
      html: 'Zalecenie brimu zaczyna się od <strong>Przekątna x 0,05</strong>. Przekątna 180 mm zaczyna się więc w okolicy 9 mm przed skalowaniem ryzyka. W praktyce brim nie powinien być wybierany tylko na podstawie materiału. Krótka kostka PLA może nie potrzebować brimu, podczas gdy długi miecz, znak lub szyna PLA mogą skorzystać z skromnego brimu, ponieważ przekątna jest dominującą ścieżką naprężeń.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: 'Brim', description: 'Najlepszy uniwersalny wybór do zwiększania kontaktu pierwszej warstwy wokół całego elementu.', icon: 'mdi:border-outside', points: ['Łatwy do usunięcia na PLA', 'Bardzo przydatny na narożnikach ABS'] },
        { title: 'Mouse ears', description: 'Lokalne okrągłe podkładki umieszczane na narożnikach lub cienkich końcach, gdzie zaczyna się unoszenie.', icon: 'mdi:circle-outline', points: ['Mniejsze sprzątanie', 'Dobre do szyn i ram'] },
        { title: 'Klej', description: 'Poprawia chemiczny lub mechaniczny chwyt między polimerem a powierzchnią druku.', icon: 'mdi:water-plus', points: ['Przydatny dla Nylonu i PC', 'Wybór specyficzny dla powierzchni ma znaczenie'] },
      ],
    },
    {
      type: 'tip',
      title: 'Nie rób z brimu jedynego rozwiązania',
      html: 'Jeśli symulator zgłasza krytyczne ryzyko, szerszy brim może opóźnić awarię, ale nie usunie podstawowego naprężenia. Połącz brim z zamkniętą komorą, wolniejszym początkowym chłodzeniem, czystszym stołem i zmianami geometrii, takimi jak zaokrąglone narożniki lub podzielone elementy.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Wypaczanie (warping)', definition: 'Odkształcenie ku górze spowodowane skurczem chłodzącym przewyższającym adhezję stołu.' },
        { term: 'Powierzchnia styku', definition: 'Powierzchnia modelu dotykająca stołu roboczego na pierwszej warstwie.' },
        { term: 'Najdłuższa przekątna', definition: 'Najdłuższy prosty odcinek przez kształt kontaktu pierwszej warstwy.' },
        { term: 'Delta T', definition: 'Różnica temperatury między stołem a otaczającym powietrzem w pomieszczeniu.' },
        { term: 'Brim', definition: 'Dodatkowe pętle obwodu pierwszej warstwy drukowane wokół elementu w celu zwiększenia adhezji.' },
      ],
    },
    { type: 'title', text: 'Praktyczne ustawienia slicera dla elementów wysokiego ryzyka', level: 2 },
    {
      type: 'list',
      icon: 'mdi:tune',
      items: [
        'Zwiększ szerokość linii pierwszej warstwy, aby stworzyć większy kontakt, ale unikaj nadmiernego Z squish, który powoduje grzbiety.',
        'Użyj wolniejszej pierwszej warstwy, aby polimer związał się ze stołem, zanim późniejsze warstwy zaczną ciągnąć.',
        'Wyłącz lub zmniejsz chłodzenie elementu dla ABS, ASA, Nylonu i PC podczas pierwszych warstw.',
        'Dodaj brim wystarczająco szeroki, aby sięgał poza ostre narożniki i wąskie końce.',
        'Unikaj umieszczania dużych elementów z materiałów technicznych w pobliżu drzwi komory, otworów wentylacyjnych lub zimnych paneli bocznych.',
      ],
    },
    {
      type: 'message',
      title: 'Zmiany geometrii zmniejszające ryzyko',
      ariaLabel: 'Pomysły na łagodzenie geometrii',
      html: 'Zaokrąglij ostre narożniki, podziel bardzo długie panele na krótsze sekcje, dodaj tymczasowe wypustki do cienkich końców, zorientuj element tak, aby najdłuższa ścieżka naprężeń była krótsza, lub dodaj podkładki ofiarne, które można przyciąć po druku. Te zmiany często działają lepiej niż samo podniesienie temperatury stołu.',
    },
    {
      type: 'summary',
      title: 'Szybka lista kontrolna',
      items: [
        'Materiał o wysokim skurczu plus otwarta komora to najsilniejszy znak ostrzegawczy.',
        'Długa przekątna plus mała powierzchnia styku oznacza, że narożniki i końce zasługują na brim lub mouse ears.',
        'Wysoka temperatura stołu nie anuluje zimnego pomieszczenia lub przeciągów.',
        'Wynik to oszacowanie planistyczne; kalibracja pierwszej warstwy i stan filamentu nadal decydują o końcowym wydruku.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
