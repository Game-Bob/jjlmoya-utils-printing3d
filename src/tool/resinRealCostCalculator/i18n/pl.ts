import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ResinRealCostCalculatorUI } from '../ui';

const slug = 'kalkulator-rzeczywistego-kosztu-zywicy-sla-dlp';
const title = 'Kalkulator rzeczywistego kosztu żywicy dla wydruków SLA i DLP';
const description = 'Oblicz teoretyczny i rzeczywisty koszt żywicy z konwersją gęstości, objętością z slicera i korektą odpadu od 10 do 15 procent dla złożonych części SLA i DLP.';

const faqData = [
  {
    question: 'Dlaczego rzeczywisty koszt żywicy jest wyższy niż koszt slicera?',
    answer: 'Slicer zazwyczaj raportuje tylko netto utwardzonej żywicy w modelu i podporach. Nie zawsze uwzględnia żywicę pozostającą na platformie roboczej, uwięzioną w pustych ścianach, straty podczas mycia, nieudane podpory lub pozostałości, których nie można czysto z powrotem przelać.',
  },
  {
    question: 'Czy mam wprowadzać gramy czy mililitry?',
    answer: 'Użyj tego, co eksportuje twój slicer. Jeśli raportuje gramy, wprowadź gęstość żywicy z butelki lub karty technicznej, aby kalkulator mógł przeliczyć masę na objętość przed obliczeniem ceny wydruku.',
  },
  {
    question: 'Którego współczynnika złożoności powinienem użyć?',
    answer: 'Użyj niskiego dla pełnych części z prostymi podporami, średniego dla typowych miniatur i funkcjonalnych części żywicznych, oraz wysokiego dla pustych części, gęstych podpór, wnęk i elementów zatrzymujących płynną żywicę po wydruku.',
  },
  {
    question: 'Czy to obejmuje alkohol, rękawiczki, filtry lub czas pracy maszyny?',
    answer: 'Nie. To narzędzie izoluje koszt materiału żywicznego. Materiały eksploatacyjne, robocizna, energia do utwardzania końcowego, nieudane wydruki i amortyzacja maszyny powinny być dodane w szerszej wycenie.',
  },
];

const howToData = [
  {
    name: 'Wprowadź dane butelki',
    text: 'Dodaj cenę netto butelki, objętość nominalną w mililitrach i gęstość podaną w karcie technicznej lub na etykiecie żywicy.',
  },
  {
    name: 'Wklej użycie z slicera',
    text: 'Wprowadź zużycie żywicy modelu wyeksportowane przez Lychee, Chitubox, PrusaSlicer lub inny slicer, a następnie wybierz gramy lub mililitry.',
  },
  {
    name: 'Wybierz złożoność',
    text: 'Wybierz niską, średnią lub wysoką złożoność, aby zastosować korektę odpadu na poziomie 10, 12,5 lub 15 procent do objętości slicera.',
  },
  {
    name: 'Porównaj koszt teoretyczny i rzeczywisty',
    text: 'Użyj kosztu teoretycznego do porównania slicerów i rzeczywistego skorygowanego kosztu do wycen, grupowania partii i planowania zapasów żywicy.',
  },
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'pl',
};

export const content: ToolLocaleContent<ResinRealCostCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    bottlePanel: 'Butelka żywicy',
    modelPanel: 'Model slicera',
    resultPanel: 'Rzeczywisty koszt żywicy',
    unitSystemLabel: 'Jednostki',
    metricLabel: 'Metryczne',
    imperialLabel: 'US',
    currencyLabel: 'Waluta',
    currencyOptions: [
      { code: 'EUR', label: '€', symbol: '€' },
      { code: 'USD', label: '$', symbol: '$' },
      { code: 'GBP', label: '£', symbol: '£' },
      { code: 'CAD', label: 'C$', symbol: 'C$' },
      { code: 'AUD', label: 'A$', symbol: 'A$' },
      { code: 'CHF', label: 'Fr', symbol: 'Fr' },
      { code: 'CNY', label: '¥', symbol: '¥' },
      { code: 'INR', label: '₹', symbol: '₹' },
      { code: 'BRL', label: 'R$', symbol: 'R$' },
      { code: 'MXN', label: '$', symbol: '$' },
      { code: 'RUB', label: '₽', symbol: '₽' },
      { code: 'PLN', label: 'zł', symbol: 'zł' },
      { code: 'SEK', label: 'kr', symbol: 'kr' },
      { code: 'NOK', label: 'kr', symbol: 'kr' },
      { code: 'DKK', label: 'kr', symbol: 'kr' },
      { code: 'TRY', label: '₺', symbol: '₺' },
      { code: 'JPY', label: '¥', symbol: '¥' },
    ],
    bottlePriceLabel: 'Cena butelki',
    bottleVolumeLabel: 'Objętość butelki',
    resinPresetLabel: 'Preset żywicy',
    resinPresetOptions: [
      { label: 'Niestandardowy / ręczna gęstość', density: '' },
      { label: 'Generyczna standardowa żywica - 1,10 g/cm3', density: '1.10' },
      { label: 'Generyczna żywica do mycia wodą - 1,08 g/cm3', density: '1.08' },
      { label: 'Generyczna żywica ABS-like - 1,10 g/cm3', density: '1.10' },
      { label: 'Generyczna wytrzymała żywica - 1,12 g/cm3', density: '1.12' },
      { label: 'Generyczna elastyczna żywica - 1,05 g/cm3', density: '1.05' },
      { label: 'Generyczna żywica wysokotemperaturowa - 1,15 g/cm3', density: '1.15' },
      { label: 'Generyczna żywica odlewnicza - 1,12 g/cm3', density: '1.12' },
      { label: 'Generyczna żywica z wypełnieniem ceramicznym - 1,35 g/cm3', density: '1.35' },
      { label: 'Anycubic Standard - 1,10 g/cm3', density: '1.10' },
      { label: 'Anycubic ABS-Like - 1,10 g/cm3', density: '1.10' },
      { label: 'Elegoo Standard - 1,10 g/cm3', density: '1.10' },
      { label: 'Elegoo ABS-Like - 1,05 g/cm3', density: '1.05' },
      { label: 'Siraya Tech Fast - 1,09 g/cm3', density: '1.09' },
      { label: 'Siraya Tech Blu - 1,12 g/cm3', density: '1.12' },
      { label: 'Phrozen Aqua Gray 4K - 1,10 g/cm3', density: '1.10' },
      { label: 'Formlabs Standard - 1,10 g/cm3', density: '1.10' },
      { label: 'Formlabs Tough 2000 - 1,18 g/cm3', density: '1.18' },
    ],
    densityLabel: 'Gęstość żywicy (g/cm3)',
    modelAmountLabel: 'Ilość ze slicera',
    unitLabel: 'Jednostka ilości',
    mlUnit: 'ml',
    fluidOunceUnit: 'fl oz',
    gramsUnit: 'g',
    ounceUnit: 'oz',
    complexityLabel: 'Złożoność części',
    lowComplexity: 'Niska',
    mediumComplexity: 'Średnia',
    highComplexity: 'Wysoka',
    lowHint: 'Pełne części, lekkie podpory, +10%',
    mediumHint: 'Typowa praca z żywicą, +12,5%',
    highHint: 'Puste części lub gęste podpory, +15%',
    theoreticalCostLabel: 'Koszt slicera',
    realCostLabel: 'Rzeczywisty koszt',
    wasteCostLabel: 'Korekta odpadu',
    correctedVolumeLabel: 'Skorygowana objętość',
    costPerMlLabel: 'Koszt za ml',
    bottlePrintsLabel: 'Wydruki na butelkę',
    savedSettingsLabel: 'Współczynnik odpadu',
    hollowPartTip: 'Puste części z otworami drenażowymi mogą przekroczyć 15 procent odpadu, ponieważ żywica pozostaje na wewnętrznych ścianach, w zagłębieniach, na podporach i w procesie mycia.',
    conversionLabel: 'Objętość netto ze slicera',
    netFromSlicerLabel: 'netto ze slicera',
    persistenceNote: 'Cena butelki, objętość butelki i gęstość są zapisywane lokalnie w tej przeglądarce.',
  },
  seo: [
    {
      type: 'title',
      text: 'Dlaczego koszt żywicy SLA i DLP wymaga korekty odpadu',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ilość żywicy pokazywana przez slicer jest użytecznym punktem wyjścia, ale nie jest równa ilości żywicy, która znika z butelki podczas rzeczywistego wydruku. Druk SLA, MSLA, LCD i DLP wykorzystuje wannę wypełnioną ciekłym fotopolimerem. Część utwardza się warstwa po warstwie, ale nieutwardzona żywica nadal pokrywa model, podpory, platformę roboczą, folię wanny i każdą wewnętrzną wnękę otwartą do kąpieli żywicznej. Kalkulator mnożący objętość slicera przez cenę za mililitr butelki daje czystą teoretyczną liczbę. Wycena warsztatowa potrzebuje jednak liczby skorygowanej.',
    },
    {
      type: 'paragraph',
      html: 'Ten kalkulator oddziela <strong>koszt slicera</strong> od <strong>rzeczywistego kosztu żywicy</strong>. Koszt slicera to netto żywicy raportowanej przez oprogramowanie. Rzeczywisty koszt stosuje kontrolowany współczynnik odpadu od 10 do 15 procent. Ten zakres jest celowo wąski: jest wystarczająco wysoki, aby uwzględnić typowe straty podczas obsługi żywicy, ale nie na tyle wysoki, aby ukryć nieudane wydruki, robociznę, alkohol, rękawiczki, filtry lub utwardzanie końcowe pod pozycją materiału. Wynikiem jest praktyczny zmienny koszt materiału dla pojedynczego wydruku lub partii.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '10%', label: 'Niska korekta dla pełnych części i lekkich podpór' },
        { value: '12,5%', label: 'Domyślna korekta dla normalnych prac żywicznych' },
        { value: '15%', label: 'Wysoka korekta dla wnęk i gęstych podpór' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Nie myl kosztu materiału z kosztem pracy',
      html: 'Liczba zwrócona tutaj dotyczy tylko materiału żywicznego. Pełna cena sprzedaży powinna również uwzględniać nieudane wydruki, alkohol do czyszczenia, rękawiczki nitrylowe, ręczniki papierowe, filtry, czas utwardzania końcowego, pakowanie, zużycie maszyny, czas projektowania i marżę.',
    },
    {
      type: 'title',
      text: 'Wzór stojący za kalkulatorem',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Pierwszym krokiem jest cena butelki za mililitr: <code>koszt_za_ml = cena_butelki / objętość_butelki_ml</code>. Butelka 1000 ml zakupiona za 42 EUR ma podstawowy koszt 0,042 EUR za ml. Jeśli slicer mówi, że miniatura zużywa 38 ml, teoretyczny koszt żywicy wynosi 38 x 0,042, czyli 1,60 EUR. Ta liczba jest przydatna do porównywania orientacji, drążenia, strategii podpór i partii w slicerze, ale zakłada, że każdy mililitr zgłoszony przez slicer jest jedyną zużytą żywicą.',
    },
    {
      type: 'paragraph',
      html: 'Drugi krok stosuje skorygowaną objętość: <code>rzeczywista_objętość = objętość_slicera x (1 + współczynnik_odpadu)</code>. Przy domyślnym współczynniku 12,5 procent model 38 ml staje się 42,75 ml. Rzeczywisty koszt materiału wynosi 42,75 x 0,042 EUR, czyli 1,80 EUR. Różnica jest niewielka w przypadku jednego małego modelu, ale staje się widoczna przy wycenie tacy miniatur, modeli dentystycznych, modeli jubilerskich, prototypów inżynieryjnych lub uchwytów produkcyjnych.',
    },
    {
      type: 'table',
      headers: ['Objętość slicera', 'Koszt butelki', 'Współczynnik', 'Koszt teoretyczny', 'Koszt rzeczywisty'],
      rows: [
        ['25 ml', '42 EUR / 1000 ml', '10%', '1,05 EUR', '1,16 EUR'],
        ['80 ml', '42 EUR / 1000 ml', '12,5%', '3,36 EUR', '3,78 EUR'],
        ['150 ml', '42 EUR / 1000 ml', '15%', '6,30 EUR', '7,25 EUR'],
        ['420 ml', '42 EUR / 1000 ml', '15%', '17,64 EUR', '20,29 EUR'],
      ],
    },
    {
      type: 'tip',
      title: 'Używaj objętości partii, a nie objętości części, do serii produkcyjnych',
      html: 'Jeśli wypełniasz platformę roboczą wieloma kopiami, obliczaj na podstawie objętości slicera dla całej platformy. Wieże podpór, współdzielone struktury podpór i zmiany orientacji mogą sprawić, że partia będzie bardziej wydajna niż mnożenie pojedynczej izolowanej części przez liczbę kopii.',
    },
    {
      type: 'title',
      text: 'Wybór odpowiedniego współczynnika złożoności',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Niska złożoność',
          description: 'Użyj 10 procent dla pełnych części, prostych wsporników, elementów kalibracyjnych, figur szachowych i modeli z niewieloma podporami.',
          points: ['Małe zatrzymywanie wewnętrzne', 'Niska gęstość podpór', 'Łatwy odpływ z powrotem do wanny'],
        },
        {
          title: 'Średnia złożoność',
          description: 'Użyj 12,5 procent dla normalnych miniatur, modeli dentystycznych, części stołowych i funkcjonalnych elementów z umiarkowanymi podporami.',
          points: ['Typowa strata po obróbce', 'Nieco żywicy na podporach', 'Dobry domyślny współczynnik wyceny'],
          highlight: true,
        },
        {
          title: 'Wysoka złożoność',
          description: 'Użyj 15 procent dla pustych powłok, wnęk, gęstych lasów podpór, struktur kratownicowych i części pozostawiających duże pozostałości po odsączeniu.',
          points: ['Więcej uwięzionej cieczy', 'Więcej strat podczas mycia', 'Wyższa niepewność obsługi'],
        },
      ],
    },
    {
      type: 'paragraph',
      html: 'Współczynnik złożoności nie jest karą za złe slicowanie. Jest korektą zachowania płynnej żywicy. Prosty pełny blok odpowiednio pochylony może odsączyć się prawie całkowicie po kilku minutach. Pusta statua z małymi otworami drenażowymi może zatrzymać film żywicy wewnątrz ściany, wokół podpór i w pobliżu przyssawek. Gęste podstawy podpór również zatrzymują żywicę między filarami. Nawet jeśli pozwolisz części ociekać nad wanną, żywica, która dociera do pojemnika do mycia, rękawiczek, ręcznika papierowego i filtra, jest częścią rzeczywistego materiału zużytego przez pracę.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Kiedy 15 procent to za mało',
      html: 'Jeśli pusty model ma słaby drenaż, ślepe wnęki, grube wewnętrzne podpory lub teksturowane wnętrze, odpad może przekroczyć 15 procent. W takim przypadku traktuj ten kalkulator jako bazę żywiczną i dodaj oddzielny dodatek ryzyka do wyceny.',
    },
    {
      type: 'summary',
      title: 'Szybki wybór współczynnika',
      items: [
        'Wybierz 10 procent, gdy model jest pełny, kompaktowy i łatwy do osuszenia.',
        'Wybierz 12,5 procent, gdy nie jesteś pewien lub drukujesz mieszaną tacę.',
        'Wybierz 15 procent, gdy część jest pusta, mocno podparta lub geometrycznie skomplikowana.',
        'Dodaj oddzielny dodatek na nieudane wydruki podczas drukowania nowej żywicy, nowej orientacji lub delikatnej części klienta.',
      ],
    },
    {
      type: 'title',
      text: 'Używanie gęstości, gdy slicer raportuje w gramach',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Wiele slicerów może raportować zużycie żywicy w mililitrach, gramach lub obu. Butelki żywicy są zwykle sprzedawane według objętości nominalnej, zazwyczaj 500 ml, 1000 ml lub 1 litr. Jeśli slicer eksportuje w gramach, kalkulator przelicza masę na objętość za pomocą gęstości: <code>objętość_ml = gramy / gęstość</code>. Gęstość żywicy jest zwykle podawana w g/cm3, a 1 cm3 to taka sama objętość jak 1 ml. Żywica o gęstości 1,10 g/cm3 oznacza, że 110 g to w przybliżeniu 100 ml.',
    },
    {
      type: 'table',
      headers: ['Masa ze slicera', 'Gęstość', 'Przeliczona objętość', 'Dlaczego to ważne'],
      rows: [
        ['55 g', '1,10 g/cm3', '50,0 ml', 'Typowe oszacowanie dla standardowej żywicy'],
        ['55 g', '1,05 g/cm3', '52,4 ml', 'Niższa gęstość oznacza większą objętość'],
        ['55 g', '1,20 g/cm3', '45,8 ml', 'Żywice z wypełniaczem lub ceramiczne mogą być gęstsze'],
      ],
    },
    {
      type: 'tip',
      title: 'Znajdź gęstość w karcie technicznej',
      html: 'Użyj katalogu presetów dla popularnych żywic, a następnie traktuj pole gęstości jako ostateczne źródło prawdy. Jeśli twoja dokładna żywica, kolor lub partia różni się od presetu, nadpisz pole wartością z karty technicznej producenta. Nie zakładaj, że wszystkie żywice mają 1,00 g/ml.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Gęstość', definition: 'Masa na jednostkę objętości. W wycenie żywicy pozwala przeliczyć gramy ze slicera na mililitry z butelki.' },
        { term: 'Koszt teoretyczny', definition: 'Czysta objętość slicera pomnożona przez koszt butelki na mililitr, przed korektą odpadu.' },
        { term: 'Skorygowana objętość', definition: 'Objętość modelu po dodaniu wybranego współczynnika odpadu 10, 12,5 lub 15 procent.' },
        { term: 'Otwór drenażowy', definition: 'Otwór w pustej części żywicznej, który pozwala nieutwardzonej żywicy opuścić wnętrze przed myciem i utwardzaniem.' },
      ],
    },
    {
      type: 'title',
      text: 'Dlaczego puste wydruki żywiczne są często droższe niż oczekiwano',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Drążenie dużego modelu może radykalnie zmniejszyć objętość utwardzonej żywicy, ale nie sprawia, że wydruk jest wolny od ukrytych kosztów. Puste ściany wymagają otworów drenażowych, geometria wewnętrzna musi być możliwa do umycia, a nieutwardzona żywica uwięziona wewnątrz modelu może później wyciekać, pękać część lub zakłócać końcowe utwardzanie. Slicer może pokazywać znacznie niższą objętość netto po drążeniu, ale proces obsługi staje się bardziej wrażliwy. Dlatego wysoka złożoność domyślnie używa 15 procent.',
    },
    {
      type: 'proscons',
      title: 'Drążenie i kontrola kosztów',
      items: [
        { pro: 'Duże modele wystawowe mogą zużywać znacznie mniej utwardzonej żywicy.', con: 'Słaby drenaż może zatrzymać płynną żywicę wewnątrz części.' },
        { pro: 'Niższe siły odrywania mogą poprawić sukces na dużych przekrojach.', con: 'Dodatkowe otwory, zatyczki i czas czyszczenia mogą zwiększyć robociznę.' },
        { pro: 'Lżejszy model jest łatwiejszy do wysyłki i montażu.', con: 'Cienkie ściany mogą ulec awarii, jeśli grubość ścianki i ekspozycja nie są dostrojone.' },
      ],
    },
    {
      type: 'card',
      title: 'Praktyczna zasada drukowania pustych części',
      html: 'Jeśli pusta część wychodzi z drukarki i nadal kapie po normalnym odsączeniu, użyj wysokiego współczynnika i sprawdź układ otworów drenażowych. Jeśli nadal przecieka po myciu, problem dotyczy nie tylko kosztów; może stać się problemem jakości i bezpieczeństwa, ponieważ nieutwardzona żywica pozostaje wewnątrz obiektu.',
    },
    {
      type: 'title',
      text: 'Czytanie szacunków slicera bez zaniżania wyceny',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Lychee, Chitubox, PrusaSlicer i inne slicery żywiczne szacują zużycie żywicy na podstawie siatki, podpór, drążenia, a czasem profilu żywicy. Te szacunki są wystarczająco dobre do porównywania wersji tej samej pracy. Są słabsze jako ostateczna wycena, ponieważ nie znają twojego przepływu pracy. Warsztat filtrujący żywicę po każdej pracy traci inną ilość niż hobbysta trzymający tę samą żywicę w wannie. Użytkownik myjący w dwóch etapach IPA traci inną ilość niż ten, który używa zamkniętej stacji myjącej i pozwala częściom dokładnie odsączyć się przed przeniesieniem.',
    },
    {
      type: 'list',
      items: [
        'Wprowadź oszacowanie całej płyty po podporach, a nie oryginalną objętość siatki bez podpór.',
        'Użyj tej samej waluty dla ceny butelki i ostatecznej wyceny; kalkulator może przeliczyć widoczną cenę butelki między popularnymi walutami za pomocą przybliżonych kursów wymiany.',
        'Aktualizuj cenę butelki przy zakupie specjalistycznej żywicy, ponieważ żywice odlewnicze, elastyczne, dentystyczne i wysokotemperaturowe mogą kosztować kilka razy więcej niż standardowa żywica.',
        'Użyj konwersji gęstości, gdy masa ze slicera i objętość butelki nie mają tej samej jednostki.',
        'Oddziel wskaźnik nieudanych wydruków, zwłaszcza podczas drukowania delikatnych miniatur, cienkich powłok dentystycznych lub nowych strategii podpór.',
      ],
    },
    {
      type: 'message',
      title: 'Lepszy nawyk wyceniania',
      html: 'Zapisz dane swojej zwykłej butelki żywicy, wklej oszacowanie ze slicera, wybierz złożoność i zapisz obie liczby. Koszt teoretyczny wyjaśnia oszacowanie slicera; rzeczywisty koszt chroni twój zapas materiału.',
    },
    {
      type: 'title',
      text: 'Czego ten kalkulator nie obejmuje',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Wydruk żywiczny ma więcej kosztów niż sama żywica. To narzędzie celowo koncentruje się na zmiennym zużyciu żywicy, ponieważ jest to liczba najczęściej niedoszacowana przy porównywaniu wyników slicera z rzeczywistym zużyciem butelki. Nie obejmuje wymiany alkoholu, detergentu, uzdatniania wody, ręczników papierowych, jednorazowych rękawiczek, zużycia folii FEP lub zwalniającej, starzenia się ekranu LCD, amortyzacji drukarki, energii elektrycznej, czasu utwardzania końcowego, szlifowania, gruntowania, usuwania podpór, pakowania ani opłat rynkowych.',
    },
    {
      type: 'table',
      headers: ['Pozycja kosztowa', 'Ujęte tutaj?', 'Gdzie uwzględnić'],
      rows: [
        ['Płynna żywica użyta do wydruku', 'Tak', 'Ten kalkulator'],
        ['Pozostałości żywicy i normalne straty obsługi', 'Tak', 'Współczynnik złożoności'],
        ['Nieudane wydruki', 'Nie', 'Dodaj dodatek na nieudane wydruki według materiału i ryzyka modelu'],
        ['IPA, rękawiczki, ręczniki, filtry', 'Nie', 'Pozycja materiałów eksploatacyjnych'],
        ['Usuwanie podpór i szlifowanie', 'Nie', 'Pozycja robocizny lub wykończenia'],
        ['Amortyzacja drukarki', 'Nie', 'Stawka godzinowa maszyny'],
      ],
    },
    {
      type: 'summary',
      title: 'Niezawodny przepływ pracy dla kosztu żywicy',
      items: [
        'Oblicz cenę za mililitr z butelki, którą faktycznie kupiłeś.',
        'W razie potrzeby przelicz gramy na mililitry za pomocą gęstości żywicy.',
        'Użyj wyniku ze slicera po podporach i drążeniu.',
        'Zastosuj korektę od 10 do 15 procent w oparciu o geometrię i straty obsługi.',
        'Trzymaj nieudane wydruki, robociznę, materiały eksploatacyjne i marżę poza liczbą kosztu materiału żywicznego.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
