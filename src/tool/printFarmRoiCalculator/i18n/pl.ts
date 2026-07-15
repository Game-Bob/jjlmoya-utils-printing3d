import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PrintFarmRoiCalculatorUI } from '../ui';

const slug = 'kalkulator-roi-farmy-druku-3d';
const title = 'Kalkulator ROI farmy druku 3D';
const description =
  'Symuluj miesięczną rentowność, okres zwrotu i roczny ROI dla farmy druku 3D przy użyciu obłożenia, wskaźnika niepowodzeń, energii elektrycznej, kosztów stałych i zmiennych stawek godzinowych.';

const currencyOptions = [
  { code: 'EUR', label: 'EUR', symbol: '€' },
  { code: 'USD', label: 'USD', symbol: '$' },
  { code: 'GBP', label: 'GBP', symbol: '£' },
  { code: 'CAD', label: 'CAD', symbol: 'C$' },
  { code: 'AUD', label: 'AUD', symbol: 'A$' },
  { code: 'CHF', label: 'CHF', symbol: 'Fr' },
  { code: 'CNY', label: 'CNY', symbol: '¥' },
  { code: 'INR', label: 'INR', symbol: '₹' },
  { code: 'BRL', label: 'BRL', symbol: 'R$' },
  { code: 'MXN', label: 'MXN', symbol: 'MX$' },
  { code: 'RUB', label: 'RUB', symbol: '₽' },
  { code: 'PLN', label: 'PLN', symbol: 'zł' },
  { code: 'SEK', label: 'SEK', symbol: 'kr' },
  { code: 'NOK', label: 'NOK', symbol: 'kr' },
  { code: 'DKK', label: 'DKK', symbol: 'kr' },
  { code: 'TRY', label: 'TRY', symbol: '₺' },
  { code: 'JPY', label: 'JPY', symbol: '¥' },
];

const faqData = [
  {
    question: 'Jak obliczyć ROI dla farmy druku 3D?',
    answer:
      'Oszacuj produktywne godziny miesięczne, pomnóż je przez cenę sprzedaży za godzinę pracy maszyny, odejmij koszty stałe, energię elektryczną i zmienne koszty godzinowe, a następnie porównaj roczny zysk z inwestycją początkową.',
  },
  {
    question: 'Dlaczego wskaźnik powodzenia wpływa na okres zwrotu farmy druku?',
    answer:
      'Nieudane wydruki zużywają wydajność maszyn, materiał, dysze, energię i uwagę operatora, nie generując godzin płatnych. Niższy wskaźnik powodzenia zmniejsza rzeczywiste godziny produktywne i opóźnia okres zwrotu.',
  },
  {
    question: 'Co należy uwzględnić w zmiennych kosztach godzinowych?',
    answer:
      'Uwzględnij zużycie filamentu lub żywicy, zużycie dysz, zużycie powierzchni roboczej, rutynowe części konserwacyjne, materiały eksploatacyjne i wszelkie stawki godzinowe, które zależą od rzeczywistego, pomyślnego czasu produkcji.',
  },
  {
    question: 'Czy okres zwrotu to to samo co ROI?',
    answer:
      'Nie. Okres zwrotu szacuje, ile miesięcy potrzeba na odzyskanie inwestycji początkowej z miesięcznego zysku netto. ROI porównuje roczny zysk z pierwotną inwestycją jako wartość procentową.',
  },
];

const howToData = [
  { name: 'Wprowadź skalę farmy', text: 'Dodaj liczbę aktywnych drukarek oraz inwestycję początkową na maszyny, konfigurację, stanowiska robocze i uruchomienie.' },
  { name: 'Dodaj miesięczne koszty operacyjne', text: 'Wprowadź stałe koszty ogólne i energię elektryczną jako koszty miesięczne, a następnie dodaj zmienny koszt na produktywną godzinę pracy maszyny.' },
  { name: 'Ustaw obłożenie i wskaźnik powodzenia', text: 'Użyj realistycznych wartości procentowych obłożenia i powodzenia, aby model uwzględniał czas bezczynności i nieudane wydruki.' },
  { name: 'Odczytaj wyniki rentowności', text: 'Porównaj miesięczne przychody z kosztami, a następnie użyj miesięcy zwrotu i rocznego ROI, aby ocenić rentowność inwestycji.' },
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
  step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  featureList: [
    'Kalkulator ROI farmy druku 3D',
    'Symulator okresu zwrotu z inwestycji w druk 3D',
    'Kalkulator rentowności farmy druku',
    'Dostosowanie obłożenia i nieudanych wydruków',
    'Wielowalutowy model kosztów operacyjnych',
  ],
  inLanguage: 'pl',
};

export const content: ToolLocaleContent<PrintFarmRoiCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Dane wejściowe ROI farmy druku',
    resultsAriaLabel: 'Wyniki ROI farmy druku',
    currencyLabel: 'Waluta',
    currencyOptions,
    printerCountLabel: 'Liczba drukarek',
    initialInvestmentLabel: 'Inwestycja początkowa',
    fixedMonthlyCostLabel: 'Stały koszt miesięczny',
    electricityMonthlyCostLabel: 'Miesięczny koszt energii',
    hourlyRateLabel: 'Stawka sprzedaży za godzinę',
    occupancyLabel: 'Średnie obłożenie',
    successRateLabel: 'Wskaźnik powodzenia',
    variableCostLabel: 'Koszt zmienny za godzinę',
    averageHoursPerPartLabel: 'Średnia liczba godzin na część',
    paybackLabel: 'Okres zwrotu',
    netProfitLabel: 'Miesięczny zysk netto',
    annualRoiLabel: 'Roczny ROI',
    productiveHoursLabel: 'Rzeczywiste godziny produktywne',
    revenueLabel: 'Przychody',
    costsLabel: 'Koszty',
    fixedCostShortLabel: 'Stałe',
    electricityShortLabel: 'Prąd',
    variableCostShortLabel: 'Zmienne',
    marginLabel: 'Marża netto',
    breakEvenPartsLabel: 'Próg rentowności w częściach',
    breakEvenHoursLabel: 'Próg rentowności w godzinach',
    stressScenarioLabel: 'Najgorszy scenariusz',
    exportSummaryLabel: 'Pobierz podsumowanie',
    chartLabel: 'Miesięczne przychody w porównaniu z kosztami operacyjnymi',
    monthsUnit: 'miesięcy',
    hoursUnit: 'h',
    percentUnit: '%',
    notViableLabel: 'Nieopłacalne',
    positiveInsight: 'Miesięczny zysk jest dodatni po uwzględnieniu obłożenia, wskaźnika powodzenia i kosztów operacyjnych.',
    negativeInsight: 'Koszty operacyjne przekraczają skorygowane przychody; popraw obłożenie, ceny lub wskaźnik niepowodzeń przed skalowaniem.',
    currencySymbol: 'zł',
    defaultCurrencyCode: 'PLN',
    pendingLabel: '-',
    partsUnit: 'części/miesiąc',
    reportFilename: 'podsumowanie-roi-farmy-druku.csv',
    reportTitle: 'Raport Rentowności ROI Farmy Druku 3D',
    reportCurrencyLabel: 'Waluta',
  },
  seo: [
    { type: 'title', text: 'Jak działa ten kalkulator ROI farmy druku 3D', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>Kalkulator ROI farmy druku 3D</strong> powinien odpowiedzieć na konkretne pytanie inwestycyjne: czy grupa drukarek zwróci koszty konfiguracji wystarczająco szybko, aby uzasadnić kapitał, przestrzeń, konserwację i ryzyko operacyjne? Ten simulator modeluje to pytanie na podstawie miesięcznej wydajności maszyn. Każda drukarka zapewnia 720 godzin brutto w standardowym 30-dniowym miesiącu, a następnie model pomniejsza te godziny o obłożenie i wskaźnik powodzenia wydruków. Wynikiem nie jest wydajność teoretyczna; to czas produkcji podlegający rozliczeniu, który przetrwa okresy bezczynności, kolejki zadań, nieudane wydruki, ponowne wydruki, kalibrację i praktyczne przestoje.',
    },
    {
      type: 'paragraph',
      html: 'Łańcuch obliczeniowy jest celowo przejrzysty. Miesięczne godziny brutto są równe <code>drukarki x 720</code>. Rzeczywiste godziny produktywne są równe godzinom brutto pomnożonym przez średnie obłożenie i wskaźnik powodzenia. Miesięczny przychód jest równy godzinom produktywnym pomnożonym przez stawkę godzinową dla klienta. Koszty operacyjne łączą stałe miesięczne koszty ogólne, energię elektryczną i zmienne koszty godzinowe. Miesięczny zysk netto to przychód pomniejszony o te koszty operacyjne. Okres zwrotu dzieli inwestycję początkową przez miesięczny zysk netto, podczas gdy roczny ROI porównuje dwanaście miesięcy zysku netto z inwestycją początkową.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '720 h', label: 'Miesięczna wydajność brutto na drukarkę', icon: 'mdi:clock-outline' },
        { value: 'O x P', label: 'Korekta obłożenia i powodzenia', icon: 'mdi:percent-outline' },
        { value: 'Przychody - koszty', label: 'Miesięczny zysk netto', icon: 'mdi:finance' },
        { value: 'Inwestycja / zysk', label: 'Okres zwrotu', icon: 'mdi:calendar-clock' },
      ],
    },
    {
      type: 'tip',
      title: 'Używaj ostrożnych danych wejściowych przy decyzjach inwestycyjnych',
      html: '<p>W pierwszym podejściu wprowadź obłożenie, które możesz utrzymać przy obecnym popycie, a nie obłożenie, które masz nadzieję osiągnąć po poprawie marketingu. Farma, która działa tylko przy optymistycznym obłożeniu, nie jest jeszcze solidną inwestycją.</p>',
    },
    { type: 'title', text: 'Dlaczego obłożenie zmienia rentowność farmy druku', level: 2 },
    {
      type: 'paragraph',
      html: 'Obłożenie to procent dostępnego czasu maszyn, który jest faktycznie wykorzystywany na drukowanie płatnych lub sprzedawalnych prac. Jest to najsilniejsza dźwignia w wielu modelach małych farm, ponieważ inwestycja początkowa jest stała. Drukarka kupiona do produkcji kosztuje tyle samo bez względu na to, czy jest zarezerwowana na osiem godzin dziennie, czy na dwadzieścia godzin dziennie. Wyższe obłożenie rozkłada czynsz, konfigurację, zapas części zamiennych, oprogramowanie i amortyzację maszyn na większą liczbę godzin płatnych.',
    },
    {
      type: 'paragraph',
      html: 'Kalkulator traktuje obłożenie jako bezpośredni mnożnik wydajności brutto. Dziesięć drukarek generuje 7200 godzin brutto miesięcznie. Przy 40% obłożeniu tylko 2880 godzin wchodzi do modelu przychodów przed korektą o wskaźnik powodzenia. Przy 75% obłożeniu do modelu wchodzi 5400 godzin. Różnica ta może zdecydować o tym, czy zwrot potrwa miesiące, lata, czy nie nastąpi nigdy.',
    },
    {
      type: 'table',
      headers: ['Poziom obłożenia', 'Znaczenie operacyjne', 'Konsekwencje dla ROI'],
      rows: [
        ['Poniżej 30%', 'Maszyny spędzają większość miesiąca czekając na zamówienia, pliki, operatorów lub konserwację.', 'Inwestycja początkowa jest trudna do odzyskania, chyba że stawka godzinowa jest wysoka.'],
        ['30-55%', 'Typowy zakres na wczesnym etapie dla farm o zróżnicowanym popycie i obsłudze ręcznej.', 'Rentowność zależy w dużej mierze od stałych kosztów ogólnych i wskaźnika niepowodzeń.'],
        ['55-75%', 'Zdrowy poziom rezerwacji z miejscem na pilne zlecenia, konserwację i zmiany konfiguracji.', 'Często pierwszy zakres, w którym okres zwrotu staje się realistyczny.'],
        ['Powyżej 75%', 'Wysokie obłożenie wymagające niezawodnego planowania, przepływu materiałów i konserwacji zapobiegawczej.', 'Silny potencjał ROI, ale mała tolerancja na awarie lub wąskie gardła operatora.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Wysokie obłożenie to nie to samo co wysoki zysk',
      badge: 'Ryzyko cenowe',
      html: '<p>A farma może być zajęta i nadal przynosić straty, jeśli stawka godzinowa jest zbyt niska, ponowne wydruki są częste, straty materiału są duże lub stałe koszty ogólne zostały niedoszacowane. Zawsze porównuj obłożenie z marżą, a nie tylko z przychodami.</p>',
    },
    { type: 'title', text: 'Uwzględnianie nieudanych wydruków i ponownych wydruków', level: 2 },
    {
      type: 'paragraph',
      html: 'Wprowadzony wskaźnik powodzenia jest tym, co odróżnia ten simulator zwrotu z inwestycji w druk 3D od zwykłego kalkulatora wydajności. Nieudane wydruki zużywają tyle samo czasu kalendarzowego co udane, ale nie generują sprzedawalnych produktów. Mogą również zużywać filament, żywicę, stoły robocze, dysze, prąd, pracę i zaufanie klientów. Farma ze wskaźnikiem powodzenia na poziomie 90% traci jeden na dziesięć potencjalnych bloków produkcyjnych, zanim przychody zostaną zliczone.',
    },
    {
      type: 'paragraph',
      html: 'Wskaźnik powodzenia powinien być mierzony na porównywalnych pracach. Farma drukująca powtarzalne uchwyty z PLA może utrzymać bardzo wysoki wskaźnik powodzenia po dostrojeniu procesu. Farma produkująca jednorazowe modele klientów, wysokie części, polimery techniczne, miniatury z żywicy lub zlecenia z wielu materiałów może wymagać przyjęcia niższej wartości. Jeśli łączysz proste i ryzykowne prace, uruchom kalkulator dwukrotnie: raz dla standardowej produkcji i raz dla zleceń niestandardowych.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Produkcja powtarzalna',
          description: 'Znana geometria części, dostrojone profile, przewidywalne materiały i stabilny popyt.',
          icon: 'mdi:repeat',
          points: ['Wyższe założenie powodzenia', 'Mniejsza niepewność konfiguracji', 'Lepsza pewność okresu zwrotu'],
        },
        {
          title: 'Niestandardowe usługi druku',
          description: 'Pliki różnią się w zależności od klienta, geometrii, strategii podpór i oczekiwań jakościowych.',
          icon: 'mdi:file-cad',
          highlight: true,
          points: ['Umiarkowane założenie powodzenia', 'Większa zmienność wycen', 'Wymaga rezerwy na ponowne wydruki'],
        },
        {
          title: 'Materiały eksperymentalne',
          description: 'Polimery inżynieryjne, materiały elastyczne, filamenty z wypełniaczami i dostrajanie procesu żywicy.',
          icon: 'mdi:flask-outline',
          points: ['Niższe założenie powodzenia', 'Większe zużycie materiałów eksploatacyjnych', 'Używaj ostrożnych danych ROI'],
        },
      ],
    },
    {
      type: 'message',
      title: 'Wskaźnik niepowodzeń powinien być w modelu finansowym',
      ariaLabel: 'Uwaga o rozliczaniu nieudanych wydruków',
      html: '<p>Nie ukrywaj ponownych wydruków w niejasnych kosztach ogólnych. Widoczny wskaźnik powodzenia ułatwia weryfikację, poprawę i wyjaśnienie zasadności inwestycji.</p>',
    },
    { type: 'title', text: 'Budowanie niezawodnego miesięcznego modelu kosztów', level: 2 },
    {
      type: 'paragraph',
      html: 'Koszt operacyjny ma w tym narzędziu trzy warstwy. Stały koszt miesięczny pokrywa wydatki, które istnieją nawet wtedy, gdy drukarki są bezczynne: czynsz, internet, ubezpieczenie, oprogramowanie, księgowość, przechowywanie, podstawowe koszty pracy i inne koszty ogólne. Miesięczny koszt energii elektrycznej rejestruje energię zużywaną przez drukarki i bezpośrednio powiązany sprzęt produkcyjny. Koszt zmienny za godzinę pokrywa koszty, które skalują się z produktywnym ze skalowaniem czasu pracy maszyn, takie jak filament, żywica, dysze, rurki PTFE, zużycie powierzchni roboczej, filtry, smary, części konserwacyjne i materiały eksploatacyjne do czyszczenia.',
    },
    {
      type: 'paragraph',
      html: 'Utrzymywanie energii elektrycznej jako oddzielnego miesięcznego kosztu wejściowego jest przydatne dla farm, ponieważ zużycie energii jest często śledzone na podstawie rachunków lub podliczników, a nie obliczane na wydruk. Farma z podgrzewanym stołem produkująca PETG, ASA, ABS lub nylon może mieć zupełnie inny profil energetyczny niż farma PLA w tym samym pomieszczeniu. Jeśli obliczasz już energię elektryczną na godzinę pracy maszyny, możesz uwzględnić tę kwotę w zmiennych kosztach godzinowych i ustawić miesięczny koszt energii na zero.',
    },
    {
      type: 'table',
      headers: ['Wprowadzany koszt', 'Uwzględnij', 'Unikaj'],
      rows: [
        ['Stały koszt miesięczny', 'Czynsz, ubezpieczenie, internet, oprogramowanie, personel podstawowy, przechowywanie.', 'Materiał używany tylko wtedy, gdy drukarki pracują.'],
        ['Miesięczny koszt energii', 'Energia drukarek, suszarki, stacje mycia, utwardzanie, wentylacja, udział w klimatyzacji.', 'Niezwiązana energia domowa lub biurowa.'],
        ['Koszt zmienny za godzinę', 'Filament, żywica, dysze, materiały eksploatacyjne do konserwacji, godzinowa marża zużycia.', 'Jednorazowy koszt zakupu maszyny.'],
        ['Inwestycja początkowa', 'Drukarki, regały, konfiguracja, narzędzia, suszarki, sprzęt do zarządzania farmą.', 'Koszty miesięczne powtarzające się po uruchomieniu.'],
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Godziny brutto miesięcznie', definition: 'Teoretyczna wydajność maszyn przed korektą obłożenia i nieudanych wydruków.' },
        { term: 'Rzeczywiste godziny produktywne', definition: 'Wydajność, która pozostaje po zastosowaniu obłożenia i wskaźnika powodzenia.' },
        { term: 'Okres zwrotu', definition: 'Miesiące potrzebne na odzyskanie inwestycji początkowej z miesięcznego zysku netto.' },
        { term: 'Roczny ROI', definition: 'Dwanaście miesięcy zysku netto podzielone przez inwestycję początkową.' },
        { term: 'Zmienny koszt godzinowy', definition: 'Materiały eksploatacyjne i marża na konserwację, które skalują się z produktywnym czasem drukowania.' },
      ],
    },
    { type: 'title', text: 'Ustalanie stawki sprzedaży za godzinę pracy maszyny', level: 2 },
    {
      type: 'paragraph',
      html: 'Stawka sprzedaży za godzinę to kwota naliczana klientowi za jedną produktywną godzinę pracy maszyny. Może być wykazana bezpośrednio w ofertach lub wbudowana w formułę cenową, która obejmuje również materiał, robociznę, wykończenie, pakowanie i marżę. Kluczem jest spójność: jeśli stawka godzinowa ma obejmować materiał, nie dodawaj tego samego materiału ponownie jako zmienny koszt godzinowy. Jeśli stawka godzinowa to tylko czas maszyny, upewnij się, że materiał i robocizna są reprezentowane w innym miejscu modelu biznesowego.',
    },
    {
      type: 'paragraph',
      html: 'Stawka, która wydaje się konkurencyjna przy pojedynczych zleceniach, może zawieść w skali farmy. Długie wydruki zajmują wydajność, która mogłaby obsłużyć inne prace. Cienkie warstwy, wolne materiały, wysokie części i geometria wymagająca wielu podpór zmniejszają przepustowość. Dlatego kalkulator rentowności farmy druku powinien być używany razem z rzeczywistymi danymi dotyczącymi wyceny: średnim czasem trwania zlecenia, średnim opłaconym ekwiwalentem godzinowym, wskaźnikiem akceptacji klientów i miesięcznym wolumenem zamówień.',
    },
    {
      type: 'proscons',
      title: 'Cennik godzinowy na farmie druku',
      items: [
        { pro: 'Sprawia, że obłożenie maszyny jest widoczne i chroni długie wydruki przed zbyt niską wyceną.', con: 'Klienci mogą potrzebować wyjaśnień, gdy lekka część zajmuje wiele godzin.' },
        { pro: 'Działa dobrze w przypadku wewnętrznego planowania ROI i decyzji dotyczących wydajności.', con: 'Nie zastępuje wyceny materiału, robocizny, wykończenia i ryzyka.' },
        { pro: 'Umożliwia szybkie porównanie typów drukarek i scenariuszy obłożenia.', con: 'Może wprowadzać w błąd, jeśli zignoruje się wskaźnik niepowodzeń i czas oczekiwania.' },
      ],
    },
    {
      type: 'card',
      icon: 'mdi:cash-clock',
      title: 'Punkt kontrolny cen',
      html: '<p>Jeśli niewielka zmiana stawki godzinowej całkowicie zmienia okres zwrotu, inwestycja jest wrażliwa na ceny rynkowe. Zweryfikuj stawkę pod kątem rzeczywistego popytu klientów przed zakupem kolejnych drukarek.</p>',
    },
    { type: 'title', text: 'Interpretacja okresu zwrotu i rocznego ROI', level: 2 },
    {
      type: 'paragraph',
      html: 'Okres zwrotu jest łatwy do zrozumienia, ponieważ jest wyrażony w miesiącach. Jeśli inwestycja początkowa wynosi 18000, a miesięczny zysk netto wynosi 3000, okres zwrotu wynosi sześć miesięcy. Jeśli miesięczny zysk netto wynosi zero lub jest ujemny, okres zwrotu jest nieopłacalny, ponieważ farma nigdy nie odzyskuje inwestycji przy obecnych założeniach. Zwrot jest przydatny do planowania gotówki, finansowania sprzętu i decydowania, czy ekspansja powinna nastąpić teraz, czy po poprawie popytu.',
    },
    {
      type: 'paragraph',
      html: 'Roczny ROI jest bardziej rygorystyczny, ponieważ porównuje jeden rok zysku netto z inwestycją początkową. Farma może mieć dodatni zysk miesięczny, ale nadal wykazywać słaby roczny ROI, jeśli zwrot jest powolny. Na przykład farma, która zarabia 1000 miesięcznie po kosztach przy inwestycji wynoszącej 24000 wynosi 12000 rocznie przed uwzględnieniem pierwotnej inwestycji, więc ROI w pierwszym roku pozostaje ujemny. Nie oznacza to automatycznie, że biznes jest zły, ale oznacza, że inwestor potrzebuje dłuższego horyzontu czasowego.',
    },
    {
      type: 'summary',
      title: 'Zasady decyzyjne',
      items: [
        'Użyj okresu zwrotu, aby zrozumieć szybkość odzyskiwania gotówki.',
        'Użyj rocznego ROI, aby porównać farmę z innymi sposobami wykorzystania kapitału.',
        'Uruchom ponownie model z niższym obłożeniem i wskaźnikiem powodzenia przed podjęciem decyzji o ekspansji.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Testowanie scenariuszy to prawdziwa wartość',
      badge: 'Planowanie',
      html: '<p>Uruchom przypadek bazowy, przypadek ostrożny i przypadek skrajny. Najlepsza inwestycja to nie ta, która wygląda świetnie tylko w scenariuszu optymistycznym; to ta, która pozostaje zrozumiała, gdy popyt, awarie lub koszty energii elektrycznej zmieniają się na Twoją niekorzyść.</p>',
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
