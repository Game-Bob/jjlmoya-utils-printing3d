import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PostProcessingCostCalculatorUI } from '../ui';

const slug = 'kalkulator-kosztow-postprocessingu-druk-3d';
const title = 'Kalkulator kosztów postprocessingu w druku 3D';
const description =
  'Oszacuj koszty ręcznego wykończenia, usuwania supportów, szlifowania, malowania, innych prac ręcznych, materiałów eksploatacyjnych i kosztów postprocessingu przeliczonych na wybraną walutę dla części drukowanych w 3D.';

const faqData = [
  {
    question: 'Jak obliczyć koszty postprocessingu w druku 3D?',
    answer:
      'Zsumuj wszystkie minuty ręcznego wykończenia, pomnóż sumę przez stawkę godzinową robocizny podzieloną przez 60, a następnie dodaj materiały eksploatacyjne. Kalkulator pokazuje również udział kosztowy każdej fazy wykończenia.',
  },
  {
    question: 'Czy materiały eksploatacyjne powinny być wliczone w koszty ręcznego wykończenia?',
    answer:
      'Tak. Papier ścierny, primer wypełniający, farba, rękawice, taśma maskująca, IPA, płyn do czyszczenia żywicy, ściereczki i zużycie drobnych narzędzi mogą być wystarczająco znaczące, by zmienić wycenę gotowej części.',
  },
  {
    question: 'Czy przeliczenie waluty zmienia formułę kosztów?',
    answer:
      'Nie. Waluta zmienia jedynie wyświetlaną skalę pieniężną. Formuła robocizny pozostaje taka sama: minuty pomnożone przez stawkę godzinową podzieloną przez 60 plus materiały eksploatacyjne.',
  },
  {
    question: 'Jakiej stawki godzinowej użyć dla robocizny w druku 3D?',
    answer:
      'Użyj pełnej stawki robocizny warsztatu, nie tylko wynagrodzenia netto. Uwzględnij wynagrodzenia, składki pracodawcy, płatny czas nieprodukcyjny, nadzór i poziom kwalifikacji wymagany do wykończenia kosmetycznego.',
  },
];

const howToData = [
  { name: 'Wprowadź minuty wykończenia', text: 'Dodaj czas usuwania supportów, szlifowania, malowania i innych prac ręcznych w minutach.' },
  { name: 'Ustaw stawkę i materiały eksploatacyjne', text: 'Wprowadź godzinową stawkę wykończenia i bezpośredni koszt materiałów eksploatacyjnych w wybranej walucie.' },
  { name: 'Wybierz walutę i współczynnik', text: 'Użyj selektora waluty dla symboli i opcjonalnego współczynnika przeliczeniowego do korekt wyceny.' },
  { name: 'Skopiuj wynik', text: 'Użyj przycisku kopiowania, aby wkleić sumę, robociznę, materiały eksploatacyjne i minuty do oferty.' },
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
    'kalkulator kosztów postprocessingu 3D',
    'szacowanie kosztów robocizny w druku 3D',
    'koszty ręcznego wykończenia druku 3D',
    'kalkulator stawki godzinowej postprocessingu',
  ],
  inLanguage: 'pl',
};

export const content: ToolLocaleContent<PostProcessingCostCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Dane wejściowe kosztów postprocessingu',
    resultsAriaLabel: 'Wyniki kosztów postprocessingu',
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
    currencyOptionSeparator: ' - ',
    supportLabel: 'Usuwanie supportów',
    sandingLabel: 'Szlifowanie',
    paintingLabel: 'Malowanie',
    otherLabel: 'Inna robocizna',
    hourlyRateLabel: 'Stawka godzinowa',
    consumablesLabel: 'Materiały eksploatacyjne',
    conversionFactorLabel: 'Współczynnik przeliczeniowy',
    conversionFactorUnit: 'x',
    conversionHint: 'Zostaw na 1, jeśli stawka jest już wprowadzona w walucie lokalnej; zmień, aby zastosować globalny mnożnik wyceny.',
    minutesUnit: 'min',
    hourUnit: 'h',
    rateUnitSeparator: '/',
    totalLabel: 'Suma postprocessingu',
    laborLabel: 'Robocizna',
    consumablesBreakdownLabel: 'Materiały eksploatacyjne',
    timeLabel: 'Czas ręczny',
    effectiveRateLabel: 'Efektywna stawka',
    breakdownLabel: 'Udział kosztów według fazy wykończenia',
    copyLabel: 'Kopiuj wynik',
    copiedLabel: 'Skopiowano',
    copyTemplate: 'Koszty postprocessingu: {total} ({minutes}; robocizna {labor}; materiały eksploatacyjne {consumables})',
    pendingLabel: '-',
    currencySymbol: '€',
  },
  seo: [
    { type: 'title', text: 'Co mierzy ten kalkulator kosztów postprocessingu w druku 3D', level: 2 },
    {
      type: 'paragraph',
      html: 'Kalkulator <strong>kosztów postprocessingu w druku 3D</strong> powinien odpowiadać na praktyczne pytanie wycenowe: ile pieniędzy jest zużywanych po zatrzymaniu drukarki? Wydrukowana część może mieć już koszt czasu maszyny i materiału, ale wiele płatnych zleceń jest wygrywanych lub przegrywanych na etapie usuwania supportów, szlifowania, wypełniania, gruntowania, malowania, czyszczenia, maskowania, kontroli i poprawek. Ten kalkulator dzieli te ręczne czynności wykończeniowe na minuty, mnoży je przez godzinową stawkę postprocessingu i dodaje bezpośrednie materiały eksploatacyjne, tak aby końcową liczbę można było wkleić bezpośrednio do oferty.',
    },
    {
      type: 'paragraph',
      html: 'Formuła bazowa jest celowo przejrzysta: <code>((supporty + szlifowanie + malowanie + pozostałe minuty) x (stawka godzinowa / 60)) + materiały eksploatacyjne</code>. Opcjonalny współczynnik przeliczeniowy mnoży stawkę godzinową i materiały eksploatacyjne, gdy warsztat chce skalować wartości na potrzeby przeliczenia walut, regionalnych cenników, narzutu dla podwykonawców lub tymczasowej korekty. Jeśli użytkownik wpisuje bezpośrednio lokalną stawkę robocizny, współczynnik powinien pozostać na <code>1</code>, a wynik pozostaje niezależny od założeń kursów walut.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'min x stawka/60', label: 'Formuła kosztów robocizny', icon: 'mdi:clock-outline' },
        { value: '5 faz', label: 'Supporty, szlifowanie, malowanie, inne, materiały', icon: 'mdi:chart-bar-stacked' },
        { value: '1x', label: 'Domyślny współczynnik przeliczeniowy', icon: 'mdi:swap-horizontal' },
        { value: 'Na żywo', label: 'Bez przycisku oblicz', icon: 'mdi:flash-outline' },
      ],
    },
    {
      type: 'tip',
      title: 'Wyceniaj człowieka, nie drukarkę',
      html: '<p>Postprocessing jest zwykle zdominowany przez robociznę. Wolny wydruk może być tani w wykończeniu, podczas gdy mała estetyczna część z supportami na powierzchniach wizualnych może wymagać kosztownej, specjalistycznej obróbki ręcznej. Traktuj <strong>szacowanie kosztów robocizny w druku 3D</strong> jako osobną pozycję zamiast ukrywać ją w narzucie na materiał.</p>',
    },
    { type: 'title', text: 'Usuwanie supportów: pierwszy ręczny czynnik kosztotwórczy', level: 2 },
    {
      type: 'paragraph',
      html: 'Usuwanie supportów to nie tylko czas potrzebny do oderwania plastiku od modelu. Może obejmować cięcie, podgrzewanie, rozpuszczanie, płukanie, skrobanie, przycinanie pozostałości supportów, ochronę kruchych elementów i sprawdzanie, czy ślady po supportach wymagają dodatkowej obróbki powierzchni. Profile robocizny dla supportów drzewiastych FDM, gęstych warstw interfejsu, końcówek supportów SLA i odpylania SLS są odmienne. Dla wiarygodnego szacowania <strong>kosztów ręcznego wykończenia w druku 3D</strong>, czas usuwania supportów należy mierzyć na porównywalnych zleceniach, a nie szacować na podstawie czasu drukowania.',
    },
    {
      type: 'table',
      headers: ['Sytuacja supportów', 'Typowe zachowanie czasowe', 'Uwaga wycenowa'],
      rows: [
        ['Łatwo odłamywalne supporty', 'Krótkie, przewidywalne usuwanie', 'Często odpowiednia stała liczba minut na część.'],
        ['Gęsty interfejs supportów', 'Dłuższe przycinanie i czyszczenie powierzchni', 'Dodaj minuty szlifowania osobno, by czynnik kosztowy pozostał widoczny.'],
        ['Żywiczne miniatury lub delikatne modele', 'Powolne cięcie, by uniknąć uszkodzeń', 'Użyj wyższej stawki robocizny, jeśli wymagana jest specjalistyczna praca ręczna.'],
        ['Supporty rozpuszczalne', 'Mniej ręcznego cięcia, ale więcej czasu procesu', 'Uwzględnij obsługę roztworu i suszenie, jeśli operator jest zaangażowany.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Nie wyceniaj usuwania supportów tylko na podstawie objętości supportów w slicerze',
      badge: 'Ryzyko robocizny',
      html: '<p>Objętość supportów może być mała, a dostęp trudny. Mały support ukryty w wąskim elemencie może kosztować więcej robocizny niż duży zewnętrzny support, który odchodzi czysto.</p>',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Rejestruj minuty usuwania supportów dla powtarzających się rodzin części.',
        'Oddziel usuwanie od szlifowania, żeby decyzje dotyczące strategii supportów były łatwiejsze do porównania.',
        'Zwiększ szacunek dla kruchych geometrii, cienkich pinów, miniatur i powierzchni widocznych dla klienta.',
        'Używaj tej samej waluty i bazy stawki godzinowej co reszta wyceny.',
      ],
    },
    { type: 'title', text: 'Szlifowanie, szpachlowanie i przygotowanie powierzchni', level: 2 },
    {
      type: 'paragraph',
      html: 'Szlifowanie jest często największym ukrytym kosztem gotowych wydruków 3D, ponieważ jest iteracyjne. Operator może przechodzić przez grube szlifowanie, szpachlę, czas utwardzania lub suszenia, drobne szlifowanie, korektę punktową i kontrolę pod kątem nachylonym. Wysokość warstwy, twardość materiału, ślady po supportach, wymagany poziom połysku i geometria części wpływają na ilość pracy ręcznej. Funkcjonalny uchwyt może potrzebować pięciu minut; prototyp wystawienniczy może potrzebować godziny, zanim farba zostanie w ogóle otwarta.',
    },
    {
      type: 'paragraph',
      html: 'Kalkulator traktuje szlifowanie jako minuty pomnożone przez godzinową stawkę wykończenia, ponieważ proces jest ograniczony przez operatora bardziej niż przez maszynę. Materiały eksploatacyjne, takie jak ścierniwa, primer wypełniający, szpachla, ściereczki bezpyłowe i materiały maskujące, powinny trafiać do pola materiałów eksploatacyjnych zamiast być ukryte w stawce robocizny. Dzięki temu <strong>analiza kosztów wykończenia wydruku 3D</strong> pozostaje czytelna: robocizna pokazuje presję czasu, materiały eksploatacyjne pokazują zakupione nakłady.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Wykończenie funkcjonalne',
          description: 'Ostre krawędzie wyczyszczone, supporty usunięte i szorstkie ślady zredukowane wystarczająco do montażu.',
          icon: 'mdi:wrench-outline',
          points: ['Najmniej czasu szlifowania', 'Minimalne materiały eksploatacyjne', 'Kontrola skupiona na pasowaniu'],
        },
        {
          title: 'Wykończenie prezentacyjne',
          description: 'Widoczne powierzchnie wygładzone, primer stosowany selektywnie i linie warstw zredukowane do przeglądu przez klienta.',
          icon: 'mdi:eye-outline',
          highlight: true,
          points: ['Umiarkowany czas szlifowania', 'Primer i szpachla prawdopodobne', 'Powierzchnie kosmetyczne napędzają robociznę'],
        },
        {
          title: 'Wykończenie gotowe do malowania',
          description: 'Progresywne szlifowanie, szpachlowanie, maskowanie i korekcja defektów przed nałożeniem warstw koloru.',
          icon: 'mdi:spray',
          points: ['Najwyższy czas ręczny', 'Materiały eksploatacyjne mają znaczenie', 'Zalecany naddatek na poprawki'],
        },
      ],
    },
    {
      type: 'message',
      title: 'Ścierniwa są materiałami eksploatacyjnymi',
      ariaLabel: 'Uwaga o materiałach eksploatacyjnych',
      html: '<p>Papier ścierny, gąbki szlifierskie, pilniki igłowe, szpachla, rękawice i ściereczki nie są darmowe. Dodaj ich bezpośredni koszt, gdy zlecenie zużywa ich znaczną część.</p>',
    },
    { type: 'title', text: 'Szacowanie kosztów malowania i powlekania', level: 2 },
    {
      type: 'paragraph',
      html: 'Minuty malowania powinny obejmować aktywny czas operatora: maskowanie, mieszanie, natryskiwanie, malowanie pędzlem, poprawki, zdejmowanie maski, sprzątanie miejsca pracy i kontrolę. Pasywny czas schnięcia lub utwardzania należy dodawać tylko wtedy, gdy blokuje operatora lub zajmuje deficytową przestrzeń kabiny lakierniczej rozliczaną jako robocizna lub koszty ogólne. To rozróżnienie zapobiega sytuacji, w której <strong>kalkulator stawki godzinowej postprocessingu</strong> zamienia każdą godzinę oczekiwania w koszt robocizny, gdy nikt aktywnie nie pracuje nad częścią.',
    },
    {
      type: 'table',
      headers: ['Czynność malowania', 'Wpisać jako robociznę?', 'Wpisać jako materiały eksploatacyjne?'],
      rows: [
        ['Maskowanie i zdejmowanie maski', 'Tak, aktywne minuty', 'Taśma, folia, zaślepki i szablony'],
        ['Mieszanie farby lub powłoki żywicznej', 'Tak, aktywne minuty', 'Farba, rozcieńczalnik, kubki, filtry, rękawice'],
        ['Natryskiwanie lub malowanie pędzlem', 'Tak, aktywne minuty', 'Materiał powłokowy i rozpuszczalnik czyszczący'],
        ['Czas schnięcia', 'Tylko jeśli blokuje płatną robociznę lub pojemność kabiny', 'Zazwyczaj bez bezpośredniego materiału, chyba że ciepło lub lampy są rozliczane osobno'],
      ],
    },
    {
      type: 'tip',
      title: 'Naliczaj złożoność koloru wprost',
      html: '<p>Pojedyncza warstwa gruntu i wykończenie dwukolorowe z maskowaniem mogą mieć podobny koszt materiału, ale bardzo różny koszt robocizny. Użyj pola minut malowania, aby uwidocznić różnicę przed zastosowaniem marży.</p>',
    },
    {
      type: 'proscons',
      title: 'Stała ryczałtowa za wykończenie vs mierzone minuty wykończenia',
      items: [
        { pro: 'Stała ryczałtowa jest szybka dla powtarzających się zleceń ze stabilnymi wymaganiami wykończenia.', con: 'Ukrywa, która faza pochłania zysk, gdy zlecenie się zmienia.' },
        { pro: 'Mierzone minuty czynią szacunek weryfikowalnym i łatwym do aktualizacji.', con: 'Wymagają od warsztatu rejestrowania rzeczywistych czasów wykończenia dla typowych rodzajów części.' },
        { pro: 'Wizualny pasek kosztów ułatwia wyjaśnianie wycen zorientowanych na klienta wewnątrz firmy.', con: 'Nie zastępuje oceny ryzyka kosmetycznego i prawdopodobieństwa poprawek.' },
      ],
    },
    { type: 'title', text: 'Materiały eksploatacyjne i koszty ogólne postprocessingu', level: 2 },
    {
      type: 'paragraph',
      html: 'Materiały eksploatacyjne to bezpośrednie materiały zużywane podczas wykończenia. Mogą obejmować papier ścierny, primer, szpachlę, farbę, płyn do mycia żywicy, IPA, ręczniki, rękawice nitrylowe, ostrza, taśmę maskującą, zaślepki ochronne, kubki jednorazowe, filtry, preparat polerski i lakier. Niektóre warsztaty wliczają je w koszty ogólne, ale ujęcie ich jako bezpośredniego pola jest bezpieczniejsze dla zleceń o niestandardowych standardach wykończenia, dużej powierzchni, agresywnym szlifowaniu lub procesach intensywnie korzystających z rozpuszczalników.',
    },
    {
      type: 'paragraph',
      html: 'Osobne pole materiałów eksploatacyjnych pomaga również w procesach <strong>kalkulatora kosztów ogólnych postprocessingu</strong>. Koszty ogólne są zwykle szersze niż materiały eksploatacyjne: czynsz, wentylacja, oświetlenie, filtracja powietrza, użytkowanie sprężarki, konserwacja, oprogramowanie, nadzór i czas administracyjny. Ten kalkulator nie rości sobie prawa do alokowania każdej pozycji kosztów ogólnych. Zamiast tego dostarcza czystą sumę kosztów bezpośrednich, którą można wprowadzić do większego modelu wyceny, gdzie koszty ogólne i marżę stosuje się następnie.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Stawka robocizny', definition: 'Godzinowy koszt lub stawka sprzedaży przypisana do aktywnego czasu ręcznego wykończenia.' },
        { term: 'Materiały eksploatacyjne', definition: 'Bezpośrednie materiały zużywane podczas postprocessingu, takie jak ścierniwa, powłoki, rękawice i płyny czyszczące.' },
        { term: 'Współczynnik przeliczeniowy', definition: 'Globalny mnożnik stosowany do wartości pieniężnych w celu przeliczenia walut lub korekty wyceny.' },
        { term: 'Koszt bezpośredni', definition: 'Koszt, który można powiązać z konkretną częścią lub partią poddawaną wykończeniu.' },
        { term: 'Koszty ogólne', definition: 'Koszty biznesowe wspierające produkcję, które nie są zużywane przez jedną część w łatwej do zmierzenia ilości.' },
      ],
    },
    {
      type: 'card',
      icon: 'mdi:receipt-text-outline',
      title: 'Gdzie należy marża',
      html: '<p>To narzędzie oblicza koszty wykończenia przed zyskiem. Marżę stosuj po złożeniu materiału, czasu maszyny, postprocessingu, ryzyka i kosztów ogólnych - inaczej zlecenia pracochłonne mogą być za nisko wyceniane.</p>',
    },
    { type: 'title', text: 'Wybór waluty i współczynnik przeliczeniowy', level: 2 },
    {
      type: 'paragraph',
      html: 'Wybór waluty zmienia symbol i może przeliczać istniejące wartości pieniężne za pomocą praktycznych współczynników referencyjnych. Sam rachunek jest neutralny walutowo: stawka 30 na godzinę i 10 materiałów eksploatacyjnych dają tę samą strukturę niezależnie od tego, czy symbolem jest euro, dolar, funt, jen czy inna obsługiwana waluta. Jest to przydatne przy wycenach międzynarodowych, bo matematyka pozostaje stabilna, a prezentacja dostosowuje się do lokalizacji klienta lub warsztatu.',
    },
    {
      type: 'paragraph',
      html: 'Współczynnik przeliczeniowy istnieje w przypadkach, gdy użytkownik nie chce automatycznej konwersji kursów walut lub potrzebuje niestandardowego mnożnika komercyjnego. Współczynnik <code>1</code> oznacza, że stawka godzinowa i materiały eksploatacyjne są już wprowadzone w wybranej walucie lokalnej. Współczynnik <code>1,15</code> zwiększa obie wartości pieniężne o piętnaście procent. Współczynnik <code>0,92</code> redukuje je o osiem procent. Ponieważ współczynnik wpływa na pieniądze, a nie na minuty, wizualny podział pozostaje proporcjonalny do skorygowanych kosztów.',
    },
    {
      type: 'summary',
      title: 'Zasady walutowe',
      items: [
        'Używaj selektora do symboli i wygodnego skalowania między popularnymi walutami.',
        'Trzymaj współczynnik przeliczeniowy na 1, gdy dane wejściowe są już w walucie lokalnej.',
        'Używaj niestandardowego współczynnika dla regionalnych cenników, narzutu podwykonawczego lub tymczasowych korekt handlowych.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Kursy wymiany nie są polityką rachunkowości',
      badge: 'Uwaga cenowa',
      html: '<p>Do oficjalnych faktur, podatków lub raportów księgowych używaj kursu wymiany i zasad zaokrąglania wymaganych przez Twoją firmę. Ten kalkulator służy do szacowania kosztów produkcji i przygotowania ofert.</p>',
    },
    { type: 'title', text: 'Użycie wizualnego podziału do poprawy zysku', level: 2 },
    {
      type: 'paragraph',
      html: 'Proporcjonalny pasek to coś więcej niż dekoracja. Pokazuje, która faza wykończenia pochłania pieniądze. Jeśli dominuje szlifowanie, zmiana orientacji wydruku, wysokości warstwy, interfejsu supportów lub materiału może skrócić czas ręczny. Jeśli dominuje malowanie, wycena może potrzebować osobnego poziomu wykończenia. Jeśli dominują materiały eksploatacyjne, zakupy hurtowe lub inny proces powlekania mogą mieć większe znaczenie niż wydajność robocizny. Jeśli dominuje usuwanie supportów, przeprojektowanie punktów styku supportów może być najcenniejszą interwencją.',
    },
    {
      type: 'list',
      icon: 'mdi:target',
      items: [
        'Gdy usuwanie supportów jest największą sekcją, sprawdź styl supportów, gęstość, odległość Z kontaktu i orientację.',
        'Gdy szlifowanie jest największe, sprawdź wysokość warstwy, umiejscowienie szwu, strategię wypełnienia i czy wycenione wykończenie jest zbyt wysokie jak na cenę.',
        'Gdy malowanie jest największe, podziel wykończenia jednokolorowe, maskowane i premium na osobne poziomy wyceny.',
        'Gdy materiały eksploatacyjne są największe, sprawdź, czy powłoki, płyn do mycia żywicy, ścierniwa i materiały maskujące są marnowane lub niedostatecznie uwzględniane.',
      ],
    },
    {
      type: 'table',
      headers: ['Dominujący koszt', 'Prawdopodobna przyczyna', 'Reakcja cenowa'],
      rows: [
        ['Usuwanie supportów', 'Trudny dostęp, gęste supporty, kruche detale', 'Dodaj dopłatę za złożoność supportów lub zmień orientację.'],
        ['Szlifowanie', 'Wysokie wymagania kosmetyczne, widoczne warstwy, ślady supportów', 'Utwórz klasy wykończenia i nalicz opłatę za przygotowanie gotowe do malowania.'],
        ['Malowanie', 'Maskowanie, wiele kolorów, sprzątanie kabiny', 'Wyceniaj malowanie jako osobną linię usługową.'],
        ['Materiały eksploatacyjne', 'Powłoki, ścierniwa, rozpuszczalniki, materiały ochronne', 'Stosuj bezpośrednie śledzenie materiałów eksploatacyjnych lub minimalne opłaty za materiał.'],
      ],
    },
    {
      type: 'summary',
      title: 'Przebieg wyceny',
      items: [
        'Zmierz aktywne minuty ręczne według fazy.',
        'Użyj pełnej stawki godzinowej wykończenia.',
        'Dodaj bezpośrednie materiały eksploatacyjne osobno.',
        'Skopiuj obliczony wynik do oferty, a następnie zastosuj koszty ogólne i marżę w pełnym modelu cenowym.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
