import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InfillWeightSimulatorUI } from '../ui';

const slug = 'kalkulator-wagi-procentu-wypelnienia-3d';
const title = 'Kalkulator Wagi i Procentu Wypełnienia Wydruku 3D';
const description =
  'Oszacuj wagę części, zaoszczędzony filament i koszty materiału przy zmianie procentu i wzoru wypełnienia na podstawie referencyjnej wagi przy 100% wypełnieniu.';

const faqData = [
  {
    question: 'Czy mogę oszacować wagę wydruku 3D na podstawie wagi przy 100% wypełnieniu?',
    answer:
      'Tak, ale oszacowanie powinno utrzymywać powłoki, ściany, górne warstwy i dolne warstwy oddzielnie od wewnętrznego wypełnienia. Część nie staje się nieważka przy 0% wypełnienia, ponieważ zewnętrzny obwód nadal zużywa materiał.',
  },
  {
    question: 'Dlaczego wzór wypełnienia zmienia szacowaną wagę?',
    answer:
      'Różne wzory tworzą różne długości ścieżek narzędzia przy tej samej nominalnej gęstości. Wzory liniowe i koncentryczne są zwykle lżejsze, podczas gdy plaster miodu, sześcienny i trójkąty mają tendencję do dodawania większej długości wewnętrznych ścian.',
  },
  {
    question: 'Czy waga z slicera jest dokładniejsza niż ten kalkulator?',
    answer:
      'Slicer jest dokładniejszy, gdy znane są model, dysza, szerokość ekstruzji, liczba ścian, górne warstwy i profil materiału. Ten kalkulator jest przeznaczony do szybkiego planowania przed ponownym krojeniem wielu wersji.',
  },
  {
    question: 'Jaki procent powłoki powinienem użyć?',
    answer:
      'Dla wielu dekoracyjnych lub średniej wielkości części FDM, 20-35% udziału powłoki to praktyczny zakres początkowy. Małe części, cienkie obiekty i części z wieloma otworami mogą mieć wyższy udział powłoki.',
  },
];

const howToData = [
  {
    name: 'Zacznij od referencji przy 100% wypełnienia',
    text: 'Użyj wagi zgłoszonej przez slicer dla tego samego modelu przy 100% wypełnienia lub zważ znany w pełni gęsty wydruk referencyjny.',
  },
  {
    name: 'Wybierz docelowe wypełnienie i wzór',
    text: 'Przesuń suwak wypełnienia i wybierz wzór najbliższy ustawieniu slicera, którego planujesz użyć.',
  },
  {
    name: 'Dostosuj założenia dotyczące powłoki i odpadów',
    text: 'Zwiększ udział powłoki dla cienkich modeli lub modeli o dużej ilości obwodów, a następnie dodaj odpady na przeczyszczanie, spódnicę, rondo, podpory i nieudane starty.',
  },
  {
    name: 'Odczytaj oszczędności wagi i kosztów',
    text: 'Porównaj końcową szacowaną wagę z linią bazową 100% wypełnienia, aby zdecydować, czy oszczędność materiału jest warta kompromisu w sztywności.',
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
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
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

export const content: ToolLocaleContent<InfillWeightSimulatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Dane wagi wypełnienia',
    resultsAriaLabel: 'Szacowane wyniki wagi wydruku',
    unitSystemLabel: 'Jednostki',
    metricLabel: 'Metryczne',
    imperialLabel: 'US',
    currencyLabel: 'Waluta',
    currencyOptions: [
      { code: 'USD', label: '$', symbol: '$' },
      { code: 'EUR', label: '€', symbol: '€' },
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
    fullWeightLabel: 'Waga przy 100% wypełnienia',
    fullWeightHint: 'Użyj wartości z slicera dla tego samego modelu przy pełnej gęstości.',
    infillLabel: 'Docelowe wypełnienie',
    patternLabel: 'Wzór wypełnienia',
    patternOptions: [
      { value: 'lines', label: 'Linie - lekkie ścieżki' },
      { value: 'grid', label: 'Siatka - linia bazowa slicera' },
      { value: 'triangles', label: 'Trójkąty - sztywne komórki' },
      { value: 'gyroid', label: 'Gyroid - gładka krata' },
      { value: 'cubic', label: 'Sześcienny - sztywność 3D' },
      { value: 'honeycomb', label: 'Plaster miodu - gęste ściany' },
      { value: 'concentric', label: 'Koncentryczny - podąża za konturem' },
    ],
    shellShareLabel: 'Udział powłoki',
    shellShareHint: 'Ściany, górne warstwy, dolne warstwy i stałe elementy, które nie skalują się z wypełnieniem.',
    spoolPriceLabel: 'Cena filamentu',
    wasteLabel: 'Odpady',
    estimatedWeightLabel: 'Szacowana waga części',
    filamentSavedLabel: 'Zaoszczędzony filament',
    materialCostLabel: 'Koszt materiału',
    costSavedLabel: 'Zaoszczędzony koszt',
    effectiveDensityLabel: 'Efektywna gęstość',
    shellLabel: 'Powłoka',
    infillCoreLabel: 'Rdzeń wypełnienia',
    patternImpactLabel: 'Mnożnik wzoru',
    comparisonLabel: 'Porównanie z linią bazową',
    fullInfillLabel: '100% wypełnienia',
    targetInfillLabel: 'Ustawienie docelowe',
    insightLow: 'Bardzo niskie wypełnienie może zaoszczędzić dużo filamentu, ale górne powierzchnie, gniazda śrub, klipsy i strefy nośne mogą wymagać dodatkowych ścian lub lokalnych modyfikatorów.',
    insightBalanced: 'To zrównoważona strefa planowania dla wielu wizualnych i lekkich funkcjonalnych wydruków: powłoka przenosi kształt, podczas gdy wypełnienie kontroluje sztywność i koszt.',
    insightHigh: 'Wysokie wypełnienie szybko zawęża lukę oszczędności. Rozważ więcej ścian, mocniejszy wzór lub wybór materiału przed użyciem gęstego wypełnienia wszędzie.',
  },
  seo: [
    { type: 'title', text: 'Jak działa kalkulator wagi i procentu wypełnienia wydruku 3D', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>Kalkulator wagi i procentu wypełnienia wydruku 3D</strong> szacuje, ile plastiku pozostaje, gdy model jest drukowany z mniej niż 100% gęstości wewnętrznej. Ważnym szczegółem jest to, że waga FDM nie jest prostym mnożeniem pełnej wagi przez procent wypełnienia. Model drukowany z 20% wypełnienia zwykle nie waży 20% w pełni gęstej wersji, ponieważ ściany, górne warstwy, dolne warstwy, małe stałe obszary, ronda i interfejsy podpór nadal zużywają filament. Ten kalkulator zaczyna od znanej lub zgłoszonej przez slicer wagi przy 100% wypełnienia, oddziela konfigurowalny udział powłoki, a następnie skaluje wewnętrzny rdzeń według docelowego wypełnienia i zachowania wzoru.',
    },
    {
      type: 'paragraph',
      html: 'Metoda jest przeznaczona do szybkiego porównania przed spędzeniem czasu na wielokrotnym krojeniu pliku. Jeśli w pełni gęsty wspornik PETG jest szacowany na 240 g, przejście na 20% gyroid może nie dać części o wadze 48 g. Przy 28% udziale powłoki masa obwodu wynosi już około 67 g przed uwzględnieniem gęstości wewnętrznej. Rdzeń wypełnienia dodaje następnie materiał zgodnie z wybraną gęstością i mnożnikiem wzoru. Wynikiem jest szacunek planistyczny bardziej realistyczny niż liniowa matematyka wypełnienia, a jednocześnie wystarczająco szybki do wczesnych decyzji.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '20-35%', label: 'Typowy udział powłoki dla wielu średnich części FDM', icon: 'mdi:cube-outline' },
        { value: '0,88x', label: 'Lekki mnożnik konturu dla wypełnienia koncentrycznego', icon: 'mdi:chart-line' },
        { value: '1,16x', label: 'Gęsty mnożnik ścieżki dla planowania plastra miodu', icon: 'mdi:hexagon-multiple' },
        { value: '100%', label: 'Waga referencyjna używana jako linia bazowa oszczędności', icon: 'mdi:weight-gram' },
      ],
    },
    {
      type: 'tip',
      title: 'Użyj tego samego profilu slicera dla referencji',
      html: '<p>Aby uzyskać najczystsze oszacowanie, wygeneruj wagę przy 100% wypełnienia z tą samą dyszą, szerokością ekstruzji, liczbą ścian, górnymi warstwami, dolnymi warstwami, gęstością materiału i ustawieniami podpór, których użyjesz do docelowego wydruku. Zmiana tych ustawień zmienia masę powłoki, przez co porównanie tylko wypełnienia staje się mniej znaczące.</p>',
    },

    { type: 'title', text: 'Dlaczego waga wypełnienia nie jest liniowa', level: 2 },
    {
      type: 'paragraph',
      html: 'Termin <em>procent wypełnienia</em> brzmi jak bezpośrednia wartość gęstości, ale slicery stosują go tylko do wewnętrznego obszaru pozostałego po wygenerowaniu obwodów i stałych powierzchni. Prosty sześcian z dwiema ścianami i sześcioma górnymi warstwami może mieć dużą objętość wewnętrzną, więc procent wypełnienia silnie wpływa na wagę. Cienki stojak na telefon, obudowa przekładni z wieloma otworami czy miniatura z wąskimi kończynami mogą mieć tak dużo geometrii obwodowej, że obniżenie wypełnienia daje mniejszą oszczędność niż oczekiwano. Dlatego kalkulator ujawnia <strong>udział powłoki</strong> zamiast go ukrywać.',
    },
    {
      type: 'table',
      headers: ['Typ modelu', 'Prawdopodobny udział powłoki', 'Co to oznacza dla oszczędności'],
      rows: [
        ['Duża prostokątna obudowa', '15-25%', 'Większość masy to objętość wewnętrzna, więc wypełnienie silnie zmienia wagę.'],
        ['Figura dekoracyjna lub model organiczny', '25-45%', 'Wiele krzywizn i wąskich obszarów tworzy geometrię o dużej ilości obwodów.'],
        ['Cienki wspornik lub panel', '35-60%', 'Ściany i powierzchnie dominują; redukcja wypełnienia może oszczędzić mniej plastiku.'],
        ['Mały klips mechaniczny', '45-70%', 'Model może być prawie lity tylko z samych obwodów.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Gdy oszacowanie wydaje się zbyt ciężkie',
      badge: 'Sprawdź udział powłoki',
      html: '<p>Jeśli ustawienie 10% wypełnienia nadal daje wysoką szacowaną wagę, udział powłoki jest prawdopodobnie duży. Może to być poprawne dla małych lub cienkich części. Sprawdź liczbę ścian, grubość górną i dolną oraz czy model ma wiele oddzielonych wysp lub wąskich żeber.</p>',
    },
    {
      type: 'summary',
      title: 'Praktyczna interpretacja',
      items: [
        'Procent wypełnienia wpływa tylko na wewnętrzny rdzeń, nie na cały wydruk.',
        'Część z 0% wypełnienia nadal ma ściany, skórki, szwy i czasami małe stałe cechy.',
        'Pełna waga referencyjna, udział powłoki, wybór wzoru i margines odpadów razem dają lepszą liczbę planistyczną.',
      ],
    },

    { type: 'title', text: 'Mnożniki wagi wzoru wypełnienia', level: 2 },
    {
      type: 'paragraph',
      html: 'Dwa wydruki mogą być ustawione na 25% wypełnienia i nadal używać różnych ilości filamentu, ponieważ zmienia się geometria ścieżki narzędzia. Wzory liniowe i koncentryczne często tworzą lżejsze ścieżki wewnętrzne, ponieważ unikają niektórych struktur krzyżowych. Siatka, trójkąty, sześcienny, gyroid i plaster miodu tworzą różne ilości nakładania się, wzmocnienia kierunkowego i długości ścieżki. Kalkulator modeluje to za pomocą małego <strong>mnożnika wzoru</strong> zastosowanego do wewnętrznego rdzenia, nie do całej części.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Linie i koncentryczny',
          description: 'Przydatne, gdy minimalna waga i szybkie drukowanie są ważniejsze niż jednolita sztywność.',
          icon: 'mdi:format-line-spacing',
          points: ['Niższa gęstość ścieżki', 'Dobry do części dekoracyjnych', 'Wytrzymałość kierunkowa może być nierówna'],
        },
        {
          title: 'Siatka i gyroid',
          description: 'Zrównoważone wybory dla typowych wizualnych i funkcjonalnych wydruków, gdzie liczy się sztywność.',
          icon: 'mdi:grid',
          highlight: true,
          points: ['Przewidywalna linia bazowa slicera', 'Dobry kompromis sztywność-waga', 'Gyroid równomiernie rozkłada obciążenia'],
        },
        {
          title: 'Sześcienny, trójkąty, plaster miodu',
          description: 'Cięższe wybory planistyczne, które mogą poprawić sztywność, ale zmniejszają oszczędność filamentu.',
          icon: 'mdi:hexagon-outline',
          points: ['Większa długość wewnętrznej ściany', 'Lepsza sztywność wielokierunkowa', 'Dłuższy czas drukowania jest typowy'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Kompromisy przy wyborze wzoru',
      items: [
        { pro: 'Lżejsze wzory zmniejszają koszt materiału i mogą skrócić czas drukowania.', con: 'Mogą tworzyć słabsze kierunki lub mniejsze wsparcie górnej powierzchni.' },
        { pro: 'Gęste wzory poprawiają sztywność części i zmniejszają zginanie.', con: 'Mogą zbliżyć się do kosztu wyższego wypełnienia bez rozwiązywania słabego projektu ścian.' },
        { pro: 'Gyroid równomiernie rozkłada obciążenia w wielu kierunkach.', con: 'Może drukować wolniej na maszynach z konserwatywnymi ustawieniami przyspieszenia.' },
      ],
    },
    {
      type: 'message',
      title: 'Mnożniki wzoru to założenia planistyczne',
      ariaLabel: 'Uwaga o mnożnikach wzoru',
      html: '<p>Silniki slicerów implementują wzory inaczej. Traktuj mnożnik jako wczesny estymator, a następnie potwierdź ważne prace produkcyjne rzeczywistym podglądem slicera i raportem zużycia materiału.</p>',
    },

    { type: 'title', text: 'Obliczanie oszczędności filamentu i kosztów', level: 2 },
    {
      type: 'paragraph',
      html: 'Szacunek kosztu materiału mnoży końcowe gramy przez cenę szpuli za kilogram. Jeśli kalkulator przewiduje wydruk 126 g, a szpula kosztuje 24 $ za kg, część plastikowa wynosi około 3,02 $ przed czasem maszynowym, prądem, robocizną, pakowaniem i nieudanymi wydrukami. Zaoszczędzony koszt porównuje ten sam model z linią bazową 100% wypełnienia, używając tego samego procentu odpadów. Jest to przydatne przy wycenie, planowaniu partii i decydowaniu, czy cięższe ustawienie wypełnienia jest warte dodatkowego materiału.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Użyj procentu odpadów dla linii przeczyszczających, spódnic, rond, podpór, tratw, zmian koloru i krótkich nieudanych startów.',
        'Dla pojedynczych prototypów margines odpadów 5-10% jest zwykle bardziej realistyczny niż zero.',
        'Dla partii produkcyjnych z podporami lub materiałami ściernymi rejestruj rzeczywistą wagę pozostałości i nieudanych wydruków z kilku zleceń.',
        'Porównując PLA, PETG, ABS, ASA, nylon i wypełnione kompozyty, używaj ceny szpuli dla dokładnego materiału, nie ogólnej średniej.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:cash-multiple',
      title: 'Przykład: od gęstego prototypu do wypełnienia produkcyjnego',
      html: '<p>Prototyp z 100% wypełnienia waży 240 g. Przy 28% udziale powłoki, 20% gyroid, 6% odpadów i 24 $/kg filamentu, oszacowanie wynosi około stu kilkudziesięciu gramów, a nie 48 g. Ta różnica ma znaczenie przy wycenie 40 egzemplarzy: małe błędy na część zamieniają się w całe szpule plastiku.</p>',
    },
    {
      type: 'table',
      headers: ['Dane wejściowe', 'Dlaczego to ważne', 'Częsty błąd'],
      rows: [
        ['Waga 100%', 'Określa maksymalną linię bazową materiału.', 'Użycie innej liczby ścian niż w docelowym wydruku.'],
        ['Docelowe wypełnienie', 'Kontroluje gęstość wewnętrznego rdzenia.', 'Zakładanie, że 20% wypełnienia oznacza 20% całkowitej wagi części.'],
        ['Wzór', 'Zmienia długość ścieżki i sztywność.', 'Ignorowanie wzoru przy porównywaniu ustawień wstępnych slicera.'],
        ['Odpady', 'Dodaje rzeczywisty filament użyty poza częścią końcową.', 'Zapominanie o podporach i nieudanych startach.'],
      ],
    },

    { type: 'title', text: 'Wybór wypełnienia dla oszczędności wagi bez słabych części', level: 2 },
    {
      type: 'paragraph',
      html: 'Oszczędność wagi jest wartościowa tylko wtedy, gdy część nadal spełnia swoją funkcję. Dla modeli wizualnych, rekwizytów wystawowych, części cosplay i pokryw, niskie wypełnienie z wystarczającą liczbą górnych warstw może być idealne. Dla wsporników, uchwytów, obudów ze śrubami, zatrzasków i części narażonych na ciepło lub uderzenia, najlepszym ulepszeniem jest często więcej ścian lub lokalne wzmocnienie, a nie proste podniesienie globalnego wypełnienia. Część z czterema ścianami i 20% gyroid może być mocniejsza w odpowiednich miejscach niż część z dwiema ścianami i 50% wypełnienia.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Udział powłoki', definition: 'Część w pełni gęstej wagi, która należy do ścian, górnych warstw, dolnych warstw i nieuniknionej geometrii litej.' },
        { term: 'Nominalne wypełnienie', definition: 'Procent wybrany w slicerze dla wewnętrznego obszaru po wygenerowaniu powłok.' },
        { term: 'Efektywna gęstość', definition: 'Szacowana całkowita gęstość gotowego wydruku po połączeniu udziału powłoki, procentu wypełnienia i mnożnika wzoru.' },
        { term: 'Margines odpadów', definition: 'Dodatkowy filament używany na materiał poza częścią, taki jak przeczyszczanie, rondo, podpory, testy i nieudane starty.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Nie używaj oszczędności wagi jako jedynego kryterium projektowania',
      badge: 'Wydruki funkcjonalne',
      html: '<p>Części obciążane w poprzek warstw, części z gwintowanymi wkładkami i części z dociskiem śrub wymagają oddzielnego myślenia mechanicznego. Wypełnienie pomaga, ale grubość ścian, orientacja, materiał, temperatura i koncentracja naprężeń są często ważniejsze niż sama gęstość.</p>',
    },
    {
      type: 'summary',
      title: 'Szybkie reguły decyzyjne',
      items: [
        'Wydruki dekoracyjne: najpierw zmniejsz wypełnienie, a następnie sprawdź jakość górnej powierzchni.',
        'Lekkie wydruki funkcjonalne: użyj zrównoważonego wzoru i wystarczającej liczby ścian przed wysokim wypełnieniem.',
        'Wsporniki i uchwyty: wzmocnij otwory, narożniki i ścieżki obciążenia lokalnymi modyfikatorami.',
        'Prace wsadowe: potwierdź końcowe oszacowanie slicerem przed zakupem materiału.',
      ],
    },

    { type: 'title', text: 'Kiedy ufać kalkulatorowi, a kiedy kroić ponownie', level: 2 },
    {
      type: 'paragraph',
      html: 'Ten kalkulator jest najlepszy do szybkich szacunków, wstępnych wycen, zakupu materiału i porównywania wielu opcji wypełnienia bez wielokrotnego otwierania slicera. Nie zastępuje slicera, gdy zmieniają się ustawienia wymiarowe. Jeśli zmienisz średnicę dyszy, szerokość ekstruzji, liczbę ścian, grubość górną, grubość dolną, warstwy adaptacyjne, styl podpór, prasowanie, tryb wazonu lub gęstość materiału, linia bazowa 100% i udział powłoki muszą zostać zaktualizowane.',
    },
    {
      type: 'list',
      icon: 'mdi:calculator-variant-outline',
      items: [
        'Używaj kalkulatora, gdy model i profil pozostają w większości stałe, a eksplorujesz gęstość lub wzór.',
        'Kroj ponownie, gdy zmienia się liczba ścian, generowanie podpór, rozmiar dyszy lub profil materiału.',
        'Zważ gotową część, gdy potrzebujesz zapisów kosztów na poziomie produkcyjnym lub prognoz zapasów.',
        'Rejestruj rzeczywiste gramy dla powtarzających się zleceń; rzeczywiste dane szybko poprawią twoje założenia dotyczące udziału powłoki.',
      ],
    },
    {
      type: 'tip',
      title: 'Niezawodny przepływ pracy przy wycenie',
      html: '<p>Utwórz w pełni gęstą referencję slicera, oszacuj kilka opcji wypełnienia tym kalkulatorem, wybierz dwie najbardziej obiecujące, a następnie pokrój ponownie tylko tych dwóch finalnych kandydatów. To utrzymuje szybkość wyceny, jednocześnie opierając ostateczne ceny na raportach materiałowych specyficznych dla slicera.</p>',
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
