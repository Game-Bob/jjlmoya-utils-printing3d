import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MachineHourlyRateCalculatorUI } from '../ui';

const slug = 'kalkulator-stawki-godzinowej-maszyny-kosztow-produkcji';
const title = 'Kalkulator Stawki Godzinowej Maszyny i Kosztów Produkcji';
const description =
  'Oblicz rzeczywisty koszt operacyjny drukarki 3D na podstawie poboru mocy, taryfy energetycznej, ceny zakupu, okresu użytkowania i czasu druku.';

const faqData = [
  {
    question: 'Jak obliczyć koszt godzinowy drukarki 3D?',
    answer:
      'Dodaj godzinowy koszt energii elektrycznej do godzinowego kosztu amortyzacji. Energia elektryczna to waty podzielone przez 1000 pomnożone przez taryfę energetyczną. Amortyzacja to cena zakupu podzielona przez godziny okresu użytkowania.',
  },
  {
    question: 'Dlaczego amortyzacja ma znaczenie w wycenie druku 3D?',
    answer:
      'Amortyzacja reprezentuje wartość maszyny zużytą podczas produkcji części. Ignorowanie jej może sprawić, że wydruk będzie wyglądał na opłacalny, podczas gdy drukarka po cichu traci wartość odsprzedaży, niezawodność i zdolność do wymiany.',
  },
  {
    question: 'Jaki okres użytkowania powinienem przyjąć dla drukarki 3D klasy desktop?',
    answer:
      'Wartość orientacyjna 5000 godzin to praktyczny punkt wyjścia dla wielu drukarek desktopowych, ale farmy produkcyjne powinny zastąpić ją historią konserwacji, oczekiwanym cyklem wymiany i rzeczywistymi danymi o czasie pracy.',
  },
  {
    question: 'Czy to to samo co pełna wycena druku 3D?',
    answer:
      'Nie. Ten kalkulator obejmuje energię elektryczną maszyny i amortyzację sprzętu. Pełna wycena powinna również obejmować filament lub żywicę, robociznę, nieudane wydruki, obróbkę końcową, opakowanie, koszty ogólne i marżę.',
  },
];

const howToData = [
  { name: 'Wprowadź zmierzony pobór mocy drukarki', text: 'Użyj średniej liczby watów podczas porównywalnego druku, a nie tylko mocy znamionowej zasilacza.' },
  { name: 'Ustaw czas druku', text: 'Przesuń suwak czasu do oczekiwanego czasu maszynowego dla zlecenia lub partii produkcyjnej.' },
  { name: 'Dodaj dane dotyczące energii i środka trwałego', text: 'Wprowadź taryfę energetyczną, cenę zakupu maszyny i szacowany okres użytkowania w godzinach pracy.' },
  { name: 'Odczytaj podział kosztów', text: 'Użyj całkowitego kosztu, stawki godzinowej i składu energii elektrycznej versus amortyzacji, aby wycenić czas maszynowy.' },
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'PLN' },
  featureList: [
    'Kalkulator poboru mocy drukarki 3D',
    'Kalkulator godzinowej amortyzacji maszyny',
    'Szacowanie kosztów operacyjnych druku 3D',
    'Skład kosztów: energia elektryczna versus amortyzacja',
  ],
  inLanguage: 'pl',
};

export const content: ToolLocaleContent<MachineHourlyRateCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Dane wejściowe stawki godzinowej maszyny',
    resultsAriaLabel: 'Wyniki stawki godzinowej maszyny',
    settingsLabel: 'Ustawienia wyceny',
    currencyLabel: 'Waluta',
    currencyOptions: [
      { code: 'EUR', label: '\u20ac', symbol: '\u20ac' },
      { code: 'USD', label: '$', symbol: '$' },
      { code: 'GBP', label: '\u00a3', symbol: '\u00a3' },
      { code: 'CAD', label: 'C$', symbol: 'C$' },
      { code: 'AUD', label: 'A$', symbol: 'A$' },
      { code: 'CHF', label: 'Fr', symbol: 'Fr' },
      { code: 'CNY', label: '\u00a5', symbol: '\u00a5' },
      { code: 'INR', label: '\u20b9', symbol: '\u20b9' },
      { code: 'BRL', label: 'R$', symbol: 'R$' },
      { code: 'MXN', label: '$', symbol: '$' },
      { code: 'RUB', label: '\u20bd', symbol: '\u20bd' },
      { code: 'PLN', label: 'z\u0142', symbol: 'z\u0142' },
      { code: 'SEK', label: 'kr', symbol: 'kr' },
      { code: 'NOK', label: 'kr', symbol: 'kr' },
      { code: 'DKK', label: 'kr', symbol: 'kr' },
      { code: 'TRY', label: '\u20ba', symbol: '\u20ba' },
      { code: 'JPY', label: '\u00a5', symbol: '\u00a5' },
    ],
    durationLabel: 'Czas produkcji',
    powerLabel: 'Średnia moc',
    tariffLabel: 'Taryfa energetyczna',
    purchasePriceLabel: 'Cena zakupu maszyny',
    usefulLifeLabel: 'Szacowany okres użytkowania',
    totalCostLabel: 'Łączny koszt operacyjny',
    hourlyRateLabel: 'Stawka godzinowa maszyny',
    electricityLabel: 'Energia elektryczna',
    depreciationLabel: 'Amortyzacja',
    electricityPerHourLabel: 'Koszt energii na godzinę',
    depreciationPerHourLabel: 'Koszt środka trwałego na godzinę',
    compositionLabel: 'Skład kosztów: energia elektryczna versus amortyzacja',
    insightLabel: 'Wskazówka dotycząca rentowności',
    utilizationLabel: 'Presja wykorzystania',
    utilizationValueLabel: 'Okres użytkowania zużyty',
    utilizationHint: 'To zlecenie zużywa pokazaną część szacowanego okresu eksploatacji maszyny.',
    batchLabel: 'Koszt operacyjny partii',
    energyUsedLabel: 'Zużyta energia',
    costDriverLabel: 'Główny czynnik',
    energyDriverLabel: 'Energia',
    assetDriverLabel: 'Środek trwały',
    balancedDriverLabel: 'Zrównoważony',
    electricityDominant: 'Zlecenie jest napędzane energią: taryfa, rozmiar podgrzewanego stołu, temperatura komory i czas nagrzewania na biegu jałowym wpłyną na wycenę bardziej niż cena zakupu.',
    depreciationDominant: 'Zlecenie jest napędzane środkiem trwałym: cena maszyny i okres użytkowania dominują, więc każda niewykorzystana godzina osłabia ekonomikę tej drukarki.',
    balancedDominant: 'Energia elektryczna i amortyzacja są na tyle blisko, że obie powinny pojawić się w stawce godzinowej warsztatu, zamiast ukrywać jedną w marży.',
    hoursUnit: 'h',
    wattsUnit: 'W',
    kwhUnit: 'kWh',
    currencySymbol: 'z\u0142',
  },
  seo: [
    { type: 'title', text: 'Co oznacza stawka godzinowa maszyny w druku 3D', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>Stawka godzinowa maszyny</strong> to koszt utrzymania drukarki produktywnie zajętej przez jedną godzinę przed dodaniem materiału, robocizny, obróbki końcowej, opakowania i zysku. W druku 3D liczba ta jest często niedoceniana, ponieważ koszty widoczne, takie jak filament, są łatwiejsze do zauważenia niż koszty ukryte, takie jak energia elektryczna i amortyzacja sprzętu. Drukarka desktopowa może zużywać tylko kilka groszy energii na godzinę, ale profesjonalna maszyna, która kosztowała kilka tysięcy euro, musi odzyskać swoją wartość przez ograniczony okres użytkowania. Ten kalkulator izoluje te dwa koszty maszynowe, aby wycena produkcji zaczynała się od mierzalnej podstawy.',
    },
    {
      type: 'paragraph',
      html: 'Kalkulator używa dwóch przejrzystych formuł. Koszt energii elektrycznej to <code>(W / 1000) x T x taryfa</code>, gdzie <code>W</code> to średnia liczba watów, <code>T</code> to czas druku w godzinach, a taryfa to cena energii za kilowatogodzinę. Koszt amortyzacji to <code>(cena zakupu / godziny okresu użytkowania) x T</code>. Całkowity koszt operacyjny to suma obu. Ponieważ oba wyrazy skalują się z czasem, te same formuły dają również czystą stawkę godzinową: energia elektryczna na godzinę plus amortyzacja na godzinę.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'W / 1000', label: 'Zamienia waty na kilowaty', icon: 'mdi:flash-outline' },
        { value: 'kWh', label: 'Jednostka rozliczeniowa energii', icon: 'mdi:meter-electric-outline' },
        { value: 'P / life', label: 'Liniowy koszt maszyny na godzinę', icon: 'mdi:chart-line' },
        { value: 'Ce + Ca', label: 'Całkowity koszt operacyjny', icon: 'mdi:calculator-variant-outline' },
      ],
    },
    {
      type: 'tip',
      title: 'Użyj zmierzonej średniej mocy',
      html: '<p>Etykieta zasilacza to maksymalna wydajność, a nie zużycie drukarki podczas rzeczywistej pracy. Aby uzyskać lepsze <strong>dane wejściowe do kalkulatora poboru mocy drukarki 3D</strong>, zmierz reprezentatywny wydruk za pomocą miernika energii i uśrednij fazy nagrzewania, drukowania, wentylatora, stołu i czuwania.</p>',
    },
    { type: 'title', text: 'Koszt energii: zamiana watów na koszt produkcji', level: 2 },
    {
      type: 'paragraph',
      html: 'Koszt energii zależy od średniego poboru mocy, nie tylko od nominalnej mocy drukarki. Maszyna z zasilaczem 350 W może średnio zużywać 90 W przy małym zleceniu PLA po nagrzaniu, podczas gdy duża zamknięta drukarka z podgrzewanym stołem i komorą może pozostawać znacznie wyższa w przypadku polimerów technicznych. Powierzchnia podgrzewanego stołu, temperatura komory, temperatura dyszy, temperatura otoczenia, cykl wentylatora i czas bezczynności przed wyjęciem części mogą zmienić efektywną moc.',
    },
    {
      type: 'paragraph',
      html: 'Przeliczenie na kilowatogodziny jest proste, ale ważne. Drukarka 180 W pracująca przez 8 godzin zużywa <code>0,18 kW x 8 h = 1,44 kWh</code>. Przy 0,25 zł za kWh, ta część zlecenia kosztuje 0,36 zł. Może to brzmieć niewiele, ale farmy z wieloma maszynami, długimi zleceniami PETG lub ASA, podgrzewanymi szafami suszącymi i klimatyzacją mogą zamienić małe godzinowe różnice w znaczący miesięczny rachunek.',
    },
    {
      type: 'table',
      headers: ['Dane wejściowe', 'Co wprowadzić', 'Częsty błąd'],
      rows: [
        ['Średnia moc', 'Zmierzona liczba watów w całym cyklu drukowania', 'Użycie mocy znamionowej zasilacza lub szczytowego poboru przy nagrzewaniu.'],
        ['Czas', 'Czas zajęcia maszyny w godzinach', 'Ignorowanie nagrzewania, chłodzenia lub czasu blokowania kolejki.'],
        ['Taryfa', 'Rzeczywista cena za kWh z rachunku', 'Użycie nieaktualnej średniej krajowej zamiast taryfy warsztatu.'],
        ['Waluta', 'Waluta używana w modelu wyceny', 'Mieszanie kosztów sprzętu w euro z założeniami energetycznymi w dolarach.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Koszt energii jest niski, dopóki skala nie uczyni go widocznym',
      badge: 'Planowanie farmy',
      html: '<p>Jedna mała drukarka może nie uzasadniać szczegółowej księgowości energetycznej. Dwadzieścia drukarek wykonujących codziennie długie zlecenia już tak. Ta sama formuła energii może być używana na zlecenie, na drukarkę, na komórkę lub na miesiąc, zmieniając tylko czas.</p>',
    },
    { type: 'title', text: 'Amortyzacja: ukryty koszt rentowności drukarki', level: 2 },
    {
      type: 'paragraph',
      html: 'Amortyzacja to finansowe uznanie, że drukarka jest zużywana przez użytkowanie. Prowadnice się zużywają, wentylatory starzeją się, stoły tracą płaskość, hotendy się zapychają, elektronika staje się przestarzała, a maszyna ostatecznie wymaga wymiany. Jeśli drukarka kosztuje 900 zł, a warsztat spodziewa się 5000 godzin użytecznej pracy, maszyna zużywa 0,18 zł wartości środka trwałego każdą produktywną godzinę. Dziesięciogodzinne zlecenie niesie zatem 1,80 zł kosztów sprzętu, zanim uwzględni się materiał lub robociznę.',
    },
    {
      type: 'paragraph',
      html: 'Amortyzacja liniowa jest tutaj celowo praktyczna. Nie próbuje modelować prawa podatkowego, wartości odsprzedaży, finansowania ani zdarzeń konserwacyjnych. Zamiast tego odpowiada na pytanie o wycenę produkcji: ile z tego zakupu maszyny powinno zostać przypisane do każdej godziny pracy? Ta liczba jest podstawą wyszukiwań <strong>stawki amortyzacji godzinowej drukarki 3D</strong> i dla każdej farmy, która chce, aby pieniądze na wymianę istniały, gdy drukarka osiągnie koniec swojego ekonomicznego okresu użytkowania.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Hobbystyczna drukarka desktopowa',
          description: 'Niska cena zakupu i nieregularne użytkowanie. Energia elektryczna może być widoczna przy zleceniach z podgrzewanym stołem, ale amortyzacja nadal ma znaczenie, jeśli części są sprzedawane.',
          icon: 'mdi:printer-3d-nozzle-outline',
          points: ['Niższa ekspozycja kapitałowa', 'Okres użytkowania często niepewny', 'Praca ręczna zwykle dominuje w wycenach'],
        },
        {
          title: 'Drukarka farmy prosumenckiej',
          description: 'Umiarkowana cena zakupu, wysoki czas pracy, powtarzalne materiały i wiele identycznych zleceń sprawiają, że godzinowa amortyzacja jest kluczowym elementem wyceny.',
          icon: 'mdi:factory',
          highlight: true,
          points: ['Dobre dopasowanie do założeń 3000-8000 godzin', 'Śledź rzeczywiste naprawy', 'Oddziel czas maszynowy od robocizny'],
        },
        {
          title: 'System przemysłowy',
          description: 'Wysoki koszt kapitału oznacza, że amortyzacja może dominować. Umowy serwisowe, środowisko komory budowania i czas kwalifikacji mogą wymagać dodatkowych linii kosztów.',
          icon: 'mdi:domain',
          points: ['Koszt kapitału dominuje', 'Przestoje są kosztowne', 'Dodaj koszty serwisu i obiektu'],
        },
      ],
    },
    {
      type: 'message',
      title: 'Wprowadzenie okresu użytkowania zasługuje na uwagę',
      ariaLabel: 'Uwaga dotycząca okresu użytkowania',
      html: '<p>Domyślne 5000 godzin to punkt wyjścia, a nie uniwersalna prawda. Lekko używana maszyna hobbystyczna może stać się przestarzała przed osiągnięciem tej liczby, podczas gdy dobrze utrzymana maszyna farmowa może ją przekroczyć. Użyj liczby, która odpowiada Twojej polityce wymiany.</p>',
    },
    { type: 'title', text: 'Wybór godzin okresu użytkowania bez zgadywania', level: 2 },
    {
      type: 'paragraph',
      html: 'Okres użytkowania jest najbardziej wrażliwym założeniem księgowym w tym kalkulatorze, ponieważ znajduje się w mianowniku wzoru na amortyzację. Jeśli tej samej drukarce za 900 zł przypisze się 3000 godzin użytkowania, amortyzacja wynosi 0,30 zł na godzinę. Przy 9000 godzinach użytkowania spada do 0,10 zł na godzinę. Drukarka się nie zmieniła, ale zmieniły się oczekiwania biznesowe. Dlatego wycena powinna dokumentować przyjęty okres użytkowania, zamiast ukrywać go w ogólnej marży.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Korzystaj z dzienników konserwacji, gdy są dostępne: wymiany dysz, awarie wentylatorów, zużycie prowadnic, pasków, płyt, hotendów i powierzchni stołu ujawniają rzeczywistą krzywą kosztów.',
        'Rozdziel rodziny drukarek. Mały bedslinger, maszyna produkcyjna CoreXY i drukarka żywiczna nie powinny mieć jednego wspólnego okresu użytkowania.',
        'Niższy okres użytkowania dla maszyn eksperymentalnych, które spędzają wiele godzin na nieudanym strojeniu, testach materiałów lub walidacji specyficznej dla klienta.',
        'Zwiększ okres użytkowania tylko wtedy, gdy czas pracy, konserwacja zapobiegawcza, części zamienne i historia wymian potwierdzają założenie.',
        'Zweryfikuj założenie po większych modernizacjach, ponieważ nowy system ruchu, obudowa lub hotend mogą zmienić ekonomiczny okres użytkowania środka trwałego.',
      ],
    },
    {
      type: 'table',
      headers: ['Założenie okresu użytkowania', 'Najlepsze dopasowanie', 'Konsekwencja cenowa'],
      rows: [
        ['2000-3000 h', 'Maszyny eksperymentalne, tanie, słabo udokumentowane lub intensywnie używane', 'Wyższa amortyzacja godzinowa chroni kapitał na wymianę.'],
        ['4000-6000 h', 'Standardowe maszyny desktopowe lub prosumenckie z regularnym użytkowaniem produkcyjnym', 'Zrównoważony zakres początkowy dla wielu małych farm.'],
        ['7000-10000 h', 'Stabilna flota drukarek z danymi konserwacyjnymi i kontrolowanymi materiałami', 'Niższy godzinowy koszt środka trwałego, ale wymaga zaufania do czasu pracy.'],
        ['Powyżej 10000 h', 'Aktywa przemysłowe lub intensywnie serwisowane z udokumentowanym cyklem życia', 'Przydatne tylko wtedy, gdy serwis i przestoje są rozliczane osobno.'],
      ],
    },
    {
      type: 'summary',
      title: 'Lista kontrolna okresu użytkowania',
      items: [
        'Dopasuj okres użytkowania do klasy drukarki, a nie do ogólnej liczby z internetu.',
        'Udokumentuj założenie, aby wyceny pozostały wytłumaczalne miesiące później.',
        'Przelicz, gdy maszyna zostanie przekwalifikowana z użytku hobbystycznego na płatną produkcję.',
      ],
    },
    { type: 'title', text: 'Interpretacja podziału energia elektryczna versus amortyzacja', level: 2 },
    {
      type: 'paragraph',
      html: 'Pasek składu pokazuje, czy zlecenie jest napędzane energią, czy środkiem trwałym. Zlecenia napędzane energią silnie reagują na taryfę energetyczną, strategię podgrzewanego stołu, temperaturę komory, zachowanie przy nagrzewaniu i warunki otoczenia. Zlecenia napędzane środkiem trwałym reagują silniej na cenę zakupu, okres użytkowania i wykorzystanie. Zrównoważony podział oznacza, że żadna linia nie powinna być ignorowana; obie należą do podstawowej stawki godzinowej maszyny.',
    },
    {
      type: 'paragraph',
      html: 'Ten podział jest przydatny, ponieważ te same całkowite koszty mogą mieć różne sposoby zaradcze. Jeśli dominuje energia elektryczna, pomocne może być obniżenie temperatury stołu, grupowanie części w celu uniknięcia wielokrotnego nagrzewania, izolowanie obudowy lub drukowanie w godzinach niższej taryfy. Jeśli dominuje amortyzacja, lepszą dźwignią jest wykorzystanie: utrzymuj drukarkę zajętą dochodowymi zleceniami, unikaj nieaktywnego kapitału i starannie dobieraj rozmiar maszyny, zamiast kupować moc, która pozostaje niewykorzystana.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Koszt energii elektrycznej', definition: 'Energia rozliczeniowa zużyta przez drukarkę w wybranym czasie.' },
        { term: 'Amortyzacja', definition: 'Udział ceny zakupu maszyny przypisany do godzin wykorzystanych przez zlecenie.' },
        { term: 'Okres użytkowania', definition: 'Oczekiwana liczba produktywnych godzin pracy przed ekonomiczną wymianą drukarki.' },
        { term: 'Stawka godzinowa maszyny', definition: 'Koszt energii elektrycznej na godzinę plus koszt amortyzacji na godzinę przed materiałem, robocizną, kosztami ogólnymi i zyskiem.' },
        { term: 'Koszt operacyjny', definition: 'Koszt maszyny poniesiony w celu utrzymania produkcji przez określony czas.' },
      ],
    },
    {
      type: 'proscons',
      title: 'Co ten kalkulator zawiera i wyklucza',
      items: [
        { pro: 'Zawiera zmierzony pobór mocy, taryfę energetyczną, czas, cenę zakupu i okres użytkowania.', con: 'Nie zawiera filamentu, żywicy, podpór, nieudanych wydruków, robocizny, czynszu, oprogramowania, opakowania ani marży.' },
        { pro: 'Pokazuje podział kosztów, aby użytkownicy mogli zidentyfikować główny czynnik ekonomiczny.', con: 'Używa amortyzacji liniowej, więc nie modeluje harmonogramów amortyzacji podatkowej ani wartości odsprzedaży.' },
        { pro: 'Działa dla jednego wydruku, jednej partii lub miesięcznego bloku produkcyjnego poprzez zmianę czasu.', con: 'Wymaga uczciwych założeń dotyczących mocy i okresu użytkowania, aby uniknąć fałszywej precyzji.' },
      ],
    },
    { type: 'title', text: 'Wykorzystanie wyniku do ustalenia opłacalnej ceny za godzinę', level: 2 },
    {
      type: 'paragraph',
      html: 'Obliczona stawka godzinowa to podłoga dla czasu maszynowego, a nie ostateczna cena sprzedaży. Kompletna wycena druku 3D zazwyczaj dodaje materiał, odpady podpór, odpady z przepłukiwania, robociznę operatora, czas krojenia i przygotowania, dodatek na nieudane wydruki, materiały eksploatacyjne do konserwacji, czynsz, oprogramowanie, opłaty płatnicze, podatki i docelową marżę. Stawka godzinowa maszyny jest jednak niezbędna, ponieważ zapobiega traktowaniu samej drukarki jako darmowej.',
    },
    {
      type: 'paragraph',
      html: 'Na przykład, jeśli kalkulator zwróci 0,225 zł za godzinę maszynową, a zlecenie zajmuje drukarkę przez 14 godzin, koszt operacyjny maszyny wynosi 3,15 zł. Jeśli materiał to 4,80 zł, alokacja robocizny to 6,00 zł, dodatek na błędy to 1,20 zł, a marża jest stosowana później, wycena staje się finansowo możliwa do prześledzenia. Kiedy klient pyta, dlaczego długi wydruk kosztuje więcej niż sugeruje waga plastiku, czas maszynowy staje się wytłumaczalną pozycją.',
    },
    {
      type: 'card',
      icon: 'mdi:cash-clock',
      title: 'Wskazówka dotycząca rentowności',
      html: '<p>To obliczenie jest podstawą do określenia <strong>ceny za godzinę</strong> każdej farmy drukarskiej. Gdy znany jest koszt maszyny na godzinę, warsztat może zdecydować, czy naliczać czas maszynowy bezpośrednio, włączyć go do marży materiałowej, czy użyć go wewnętrznie do porównania drukarek i materiałów.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Nie wyceniaj tylko według gramów',
      badge: 'Ukryty koszt',
      html: '<p>Lekka część, która zajmuje drukarkę przez 20 godzin, może zużywać więcej wydajności maszyny niż ciężka część wydrukowana szybko. Wycena oparta na wadze bez czasu maszynowego często zaniża wartość powolnych, wysokich, drobnowarstwowych lub niskoprzepływowych zleceń.</p>',
    },
    { type: 'title', text: 'Praktyczne przykłady szacowania kosztów operacyjnych druku 3D', level: 2 },
    {
      type: 'paragraph',
      html: 'Dostrojone zlecenie PLA na desktopie może średnio zużywać 120 W, działać przez 6 godzin, używać taryfy 0,22 zł/kWh i znajdować się na drukarce za 600 zł z okresem użytkowania 5000 godzin. Energia elektryczna to tylko 0,158 zł, podczas gdy amortyzacja to 0,720 zł. Całkowity koszt operacyjny maszyny wynosi około 0,878 zł, a stawka godzinowa około 0,146 zł. W tym przypadku zlecenie jest wyraźnie napędzane środkiem trwałym: lepsze wykorzystanie maszyny wpływa na rentowność bardziej niż małe zmiany mocy.',
    },
    {
      type: 'paragraph',
      html: 'Zlecenie ASA na większej zamkniętej drukarce może średnio zużywać 420 W przez 18 godzin przy 0,30 zł/kWh. Jeśli drukarka kosztuje 1800 zł, a okres użytkowania wynosi 4500 godzin, energia elektryczna to 2,268 zł, a amortyzacja to 7,200 zł, co daje całkowity koszt maszyny 9,468 zł. Mimo że zużycie energii jest znacznie wyższe, amortyzacja nadal dominuje, ponieważ koszt kapitału i długie zajęcie maszyny są znaczące.',
    },
    {
      type: 'paragraph',
      html: 'Drukarka żywiczna może opowiadać inną historię. Drukarka może zużywać skromną moc, ale obliczenie nadal ma zastosowanie do zajętości maszyny. Jeśli budowa trwa 9 godzin na maszynie za 2500 zł, która ma wyprodukować 4000 godzin użytkowania, sama amortyzacja wynosi 5,625 zł. Ta liczba należy do wyceny przed dodaniem żywicy, rękawiczek, IPA lub płynu do mycia, utwardzania, podpór i pracy przy czyszczeniu.',
    },
    {
      type: 'summary',
      title: 'Zasady decyzyjne',
      items: [
        'Używaj zmierzonych średnich watów dla dokładności energii elektrycznej.',
        'Używaj realistycznych godzin okresu użytkowania dla odzysku środka trwałego.',
        'Traktuj wynik jako podłogę czasu maszynowego, a następnie dodaj materiał, robociznę, koszty ogólne, ryzyko i marżę.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
