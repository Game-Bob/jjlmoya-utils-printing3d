import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HotendFlowRateLimitCalculatorUI } from '../ui';

const slug = 'kalkulator-przeplywu-objektosciowego';
const title = 'Kalkulator Przepływu Objętościowego: Precyzyjne Limity Hotendu';
const description =
  'Oblicz przepływ objętościowy w druku 3D w mm3/s, porównaj go z wydajnością topienia hotendu i określ, kiedy prędkość, szerokość linii oraz wysokość warstwy spowodują niedoextruzję.';

const faqData = [
  {
    question: 'Czym jest przepływ objętościowy w druku 3D?',
    answer:
      'Przepływ objętościowy to objętość tworzywa żądana z hotendu każdej sekundy. Oblicza się go jako szerokość linii pomnożoną przez wysokość warstwy pomnożoną przez prędkość druku, co daje wynik w mm3/s.',
  },
  {
    question: 'Co się stanie, gdy przepływ objętościowy przekroczy limit hotendu?',
    answer:
      'Hotend nie jest w stanie w pełni stopić tworzywa z żądaną prędkością. Ciśnienie rośnie, ekstruzja staje się niestabilna, a wydruk może wykazywać niedoextruzję, słabe ściany, matowe chropowate powierzchnie lub pomijane kroki ekstrudera.',
  },
  {
    question: 'Czy V6 naprawdę jest ograniczone do 15 mm3/s?',
    answer:
      '15 mm3/s to praktyczna stała planistyczna dla dobrze dostrojonego standardowego hotendu ze strefą topienia. Rzeczywiste wartości zależą od filamentu, temperatury, dyszy, mocy grzałki, chwytu ekstrudera oraz akceptowalnego poziomu utraty jakości wizualnej.',
  },
  {
    question: 'Dlaczego zwiększenie wysokości warstwy zmniejsza bezpieczną prędkość?',
    answer:
      'Wysokość warstwy jest bezpośrednim mnożnikiem w równaniu przepływu. Jeśli szerokość linii i wydajność hotendu pozostają takie same, podwojenie wysokości warstwy mniej więcej o połowę zmniejsza maksymalną prędkość, zanim hotend osiągnie swój limit topienia.',
  },
];

const howToData = [
  { name: 'Wybierz architekturę hotendu', text: 'Wybierz preset standardowego V6, Volcano, Bambu High-Flow lub Ultra-High-Flow, aby ustawić stałą wydajności topienia.' },
  { name: 'Ustaw geometrię linii', text: 'Dostosuj szerokość linii i wysokość warstwy do profilu slicera, którego planujesz użyć.' },
  { name: 'Dostosuj prędkość druku', text: 'Użyj precyzyjnego suwaka prędkości, aby obserwować, jak wskaźnik obciążenia zbliża się do stref 70%, 90% i przepływu krytycznego.' },
  { name: 'Odczytaj bezpieczną prędkość i rezerwę', text: 'Porównaj bieżący mm3/s z maksymalną bezpieczną prędkością i pozostałą rezerwą wydajności topienia.' },
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
  step: howToData.map((step, i) => ({ '@type': 'HowToStep', position: i + 1, name: step.name, text: step.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'pl',
};

export const content: ToolLocaleContent<HotendFlowRateLimitCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Parametry wejściowe limitu przepływu objętościowego',
    resultsAriaLabel: 'Wyniki kalkulatora przepływu objętościowego',
    unitSystemLabel: 'Jednostki',
    metricLabel: 'Metryczne',
    imperialLabel: 'US',
    hotendLabel: 'Architektura hotendu',
    lineWidthLabel: 'Szerokość linii',
    layerHeightLabel: 'Wysokość warstwy',
    speedLabel: 'Prędkość druku',
    flowLabel: 'Przepływ objętościowy',
    loadLabel: 'Obciążenie termiczne',
    maxSpeedLabel: 'Maks. bezpieczna prędkość',
    reserveLabel: 'Rezerwa topienia',
    stateLabel: 'Stan systemu',
    idealState: 'PRZEPŁYW IDEALNY',
    limitState: 'GRANICA LEPKOŚCI',
    criticalState: 'PRZEPŁYW KRYTYCZNY',
    idealHint: 'Hotend ma wystarczający zapas termiczny dla stabilnego ciśnienia topienia i równomiernej ekstruzji.',
    limitHint: 'Profil jest blisko granicy lepkości. Niewielkie zmiany materiału lub temperatury mogą ujawnić niedoextruzję.',
    criticalHint: 'Żądany przepływ przekracza niezawodne okno topienia. Zmniejsz prędkość, szerokość linii lub wysokość warstwy.',
    millimeterUnit: 'mm',
    inchUnit: 'in',
    metricSpeedUnit: 'mm/s',
    imperialSpeedUnit: 'in/s',
    flowUnit: 'mm3/s',
  },
  seo: [
    { type: 'title', text: 'Jak Działa Kalkulator Maksymalnego Przepływu Objętościowego', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>Kalkulator maksymalnego przepływu objętościowego</strong> odpowiada na bardziej użyteczne pytanie niż prosty kalkulator prędkości: czy hotend jest w stanie stopić ilość tworzywa żądaną przez slicer? Układy ruchu mogą deklarować wysokie prędkości przemieszczania, ale ekstruzja jest ograniczona przez transfer ciepła, długość strefy topienia, ciśnienie w dyszy, lepkość filamentu, stabilność grzałki i chwyt ekstrudera. Kalkulator modeluje żądaną prędkość topienia jako <code>Vf = szerokość linii x wysokość warstwy x prędkość</code>, a wynik jest podawany w <code>mm3/s</code>.',
    },
    {
      type: 'paragraph',
      html: 'Narzędzie porównuje ten chwilowy przepływ z wybraną wydajnością hotendu. Standardowe hotendy V6 są reprezentowane z niższą stałą prędkości topienia, architektury z dłuższą strefą topienia, takie jak Volcano, używają wyższej stałej, a nowoczesne hotendy High-Flow używają większych wartości. Celem nie jest obiecywanie uniwersalnego limitu laboratoryjnego; chodzi o szybkie sprawdzenie inżynieryjne, zanim profil slicera zażąda więcej tworzywa, niż sprzęt jest w stanie niezawodnie upłynnić.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'mm3/s', label: 'Jednostka wydajności topienia hotendu', icon: 'mdi:cube-scan' },
        { value: '70%', label: 'Granica strefy komfortu dla stabilnych profili produkcyjnych', icon: 'mdi:gauge-low' },
        { value: '90%', label: 'Granica lepkości, przy której awarie stają się wrażliwe', icon: 'mdi:gauge' },
        { value: '100%+', label: 'Przepływ krytyczny, gdzie dominuje ryzyko niedoextruzji', icon: 'mdi:alert-outline' },
      ],
    },
    {
      type: 'tip',
      title: 'Używaj szerokości linii ze slicera, a nie średnicy dyszy',
      html: '<p>Równanie przepływu wykorzystuje szerokość linii ekstruzji ze slicera. Dysza 0,4 mm często drukuje linię o szerokości 0,42-0,48 mm. Jeśli kalkulator używa średnicy dyszy zamiast szerokości linii, może niedoszacować zapotrzebowanie na przepływ i ukryć profil, który jest już blisko limitu hotendu.</p>',
    },
    { type: 'title', text: 'Dlaczego Prędkość i Prędkość Topienia to Nie To Samo Ograniczenie', level: 2 },
    {
      type: 'paragraph',
      html: 'Drukarka może poruszać się z prędkością 300 mm/s i nadal zawodzić przy 90 mm/s, jeśli objętość ekstruzji jest zbyt wysoka. Prędkość nabiera znaczenia dopiero po uwzględnieniu szerokości linii i wysokości warstwy. Drukowanie linii 0,45 mm przy warstwie 0,20 mm i prędkości 150 mm/s wymaga 13,5 mm3/s. Drukowanie linii 0,60 mm przy warstwie 0,30 mm i tej samej prędkości wymaga 27 mm3/s. Prędkość ruchu jest identyczna, ale drugi profil wymaga od hotendu topienia dwa razy więcej tworzywa na sekundę.',
    },
    {
      type: 'table',
      headers: ['Szerokość linii', 'Wysokość warstwy', 'Prędkość', 'Żądany przepływ'],
      rows: [
        ['0,42 mm', '0,16 mm', '120 mm/s', '8,06 mm3/s'],
        ['0,45 mm', '0,20 mm', '150 mm/s', '13,50 mm3/s'],
        ['0,50 mm', '0,25 mm', '180 mm/s', '22,50 mm3/s'],
        ['0,60 mm', '0,30 mm', '150 mm/s', '27,00 mm3/s'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Niedoextruzja często wygląda jak problem konfiguracyjny',
      badge: 'Sufit przepływu',
      html: '<p>Gdy profil przekracza wydajność topienia, użytkownicy często regulują retrakcję, pressure advance, temperaturę lub kroki E. Te ustawienia mają znaczenie, ale nie sprawią, że krótka strefa topienia przetwarza nieograniczoną ilość tworzywa. Najpierw sprawdź, czy żądana wartość mm3/s mieści się w oknie wydajności hotendu.</p>',
    },
    {
      type: 'summary',
      title: 'Zasady równania przepływu',
      items: [
        'Szerokość linii, wysokość warstwy i prędkość mnożą się bezpośrednio.',
        'Niewielki wzrost dwóch ustawień geometrii może przeciążyć hotend, nawet gdy prędkość wygląda skromnie.',
        'Maksymalna bezpieczna prędkość to limit hotendu podzielony przez szerokość linii i wysokość warstwy.',
      ],
    },
    { type: 'title', text: 'Wskaźniki Wydajności Cieplnej według Architektury Hotendu', level: 2 },
    {
      type: 'paragraph',
      html: 'Architektura hotendu kontroluje, jak długo filament pozostaje w strefie grzania i jak efektywnie ciepło przenika do rdzenia filamentu. Kompaktowa strefa topienia V6 jest responsywna i lekka, ale jej praktyczny sufit przepływu jest niższy niż w przypadku długiej strefy topienia Volcano. Konstrukcje ceramiczne High-Flow i Ultra-High-Flow zwiększają kontakt grzałki, długość ścieżki topienia lub wewnętrzną powierzchnię, aby utrzymać wyższe prędkości ekstruzji.',
    },
    {
      type: 'table',
      headers: ['Architektura hotendu', 'Wydajność planistyczna', 'Najlepsze zastosowanie', 'Uwaga inżynieryjna'],
      rows: [
        ['V6 / MK8', '15 mm3/s', 'Profile jakościowe, umiarkowana prędkość PLA/PETG, standardowe drukarki biurkowe', 'Może szybko osiągnąć limity ciśnienia przy szerokich liniach lub wysokich warstwach.'],
        ['Revo High Flow', '18 mm3/s', 'High-Flow upgrade w kompaktowym formacie', 'Wciąż wymaga walidacji temperatury i materiału.'],
        ['Volcano', '25 mm3/s', 'Duże dysze, grube warstwy, części funkcjonalne, szybkie profile szkicowe', 'Długie strefy topienia mogą bardziej kapać i wymagają regulacji retrakcji.'],
        ['Bambu HF', '32 mm3/s', 'Profile szybkich zamkniętych drukarek i szybka produkcja PLA', 'Wartości profilu silnie zależą od chłodzenia i zachowania filamentu.'],
        ['Rapido UHF / podobne', '45 mm3/s', 'Ekstremalny przepływ, duże szerokości ekstruzji, wydajność produkcyjna', 'Moment obrotowy ekstrudera, moc grzałki i geometria dyszy stają się czynnikami ograniczającymi.'],
      ],
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: 'Krótka strefa topienia', description: 'Kompaktowa, responsywna, lżejsza głowica, mniejsza pojemność cieplna.', icon: 'mdi:thermometer-low', points: ['Dobra kontrola detali', 'Niższy sufit przepływu', 'Mniejsza bezwładność cieplna'] },
        { title: 'Długa strefa topienia', description: 'Więcej czasu kontaktu filamentu z ciepłem przed osiągnięciem dyszy.', icon: 'mdi:thermometer-lines', highlight: true, points: ['Wyższe mm3/s', 'Lepsza wydajność grubych warstw', 'Większe zarządzanie wyciekiem'] },
        { title: 'Rdzeń High Flow', description: 'Nowoczesna geometria zwiększa powierzchnię kontaktu lub sprzężenie grzałki bez prostego wydłużania.', icon: 'mdi:heat-wave', points: ['Szybka odpowiedź', 'Wysoka przepustowość', 'Wymaga dostrojonych profili'] },
      ],
    },
    {
      type: 'message',
      title: 'Wartości wzorcowe to stałe planistyczne',
      ariaLabel: 'Uwaga o wartościach wzorcowych hotendu',
      html: '<p>Ustawione limity są celowo konserwatywnymi stałymi planistycznymi. Rzeczywista wydajność topienia różni się w zależności od składu filamentu, średnicy dyszy, wkładu grzejnego, umiejscowienia termistora, temperatury ekstruzji oraz akceptowalnego poziomu utraty jakości części.</p>',
    },
    { type: 'title', text: 'Interpretacja Stref Wskaźnika Obciążenia', level: 2 },
    {
      type: 'paragraph',
      html: 'Wskaźnik obciążenia przekształca matematykę przepływu na wizualny stan pracy. Poniżej 70% obciążenia hotend ma zapas na normalne wahania filamentu, niewielkie oscylacje temperatury i zmiany prędkości na ścieżce narzędzia. Między 70% a 90% ekstruzja może być nadal udana, ale profil staje się wrażliwy. Powyżej 90% wydruk jest na tyle blisko sufitu topienia, że zmiany partii materiału, wilgoć lub nieco chłodniejsza dysza mogą wepchnąć go w widoczną niedoextruzję.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        '0-70%: dobry zapas produkcyjny dla powtarzalnych części i normalnych wahań materiału.',
        '70-90%: przydatne do testowania prędkości, ale należy walidować ściany, górne powierzchnie i wiązanie wypełnienia.',
        '90%+: traktuj jako strefę krytyczną, chyba że filament i hotend zostały zmierzone za pomocą wieży przepływu.',
        'Powyżej 100%: zmniejsz prędkość, szerokość linii lub wysokość warstwy, zanim zaczniesz szukać niezwiązanych ustawień slicera.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:gauge-full',
      title: 'Dlaczego wskaźnik może być lepszy niż okno ostrzegawcze',
      html: '<p>Okno ostrzegawcze informuje użytkownika o tym, co poszło nie tak po przekroczeniu progu. Wskaźnik obciążenia pokazuje zbliżanie się do tego progu. Ułatwia to zatrzymanie się na zaplanowanym marginesie operacyjnym, zamiast reagować dopiero wtedy, gdy profil stał się już niestabilny.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Przepływ krytyczny to nie tylko problem jakości powierzchni',
      badge: 'Wytrzymałość mechaniczna',
      html: '<p>Niedostatecznie stopiony filament może słabo wiązać się między ścieżkami i warstwami. Nawet jeśli zewnętrzna ściana wygląda akceptowalnie, wiązanie wypełnienia, przyczepność obwodów i wytrzymałość na uderzenia mogą ucierpieć, jeśli prędkość przepływu przekracza wydajność topienia.</p>',
    },
    { type: 'title', text: 'Jak Używać Kalkulatora z Profilem Slicera', level: 2 },
    {
      type: 'paragraph',
      html: 'Zacznij od rzeczywistych wartości slicera dla szerokości linii, wysokości warstwy oraz prędkości ściany zewnętrznej lub ogólnej prędkości druku. Wybierz najbliższą architekturę hotendu. Przesuwaj suwak prędkości, aż wskaźnik osiągnie preferowane obciążenie. Wyświetlona maksymalna bezpieczna prędkość to prędkość, która dokładnie osiągnęłaby limit hotendu dla bieżącej geometrii linii. Do pracy produkcyjnej używaj niższej wartości niż matematyczne maksimum.',
    },
    {
      type: 'paragraph',
      html: 'Jeśli wskaźnik wejdzie w strefę krytyczną, istnieją trzy bezpośrednie sposoby na zmniejszenie przepływu: obniżenie prędkości, zmniejszenie szerokości linii lub zmniejszenie wysokości warstwy. Temperatura może zwiększyć praktyczny przepływ dla niektórych materiałów, ale zmienia też połysk, mostkowanie, zachowanie nawisów, stringing i dokładność wymiarową. Kalkulator celowo koncentruje się na geometrii i wydajności sprzętu, ponieważ są to najbardziej przejrzyste dźwignie.',
    },
    {
      type: 'proscons',
      title: 'Sposoby na zmniejszenie zapotrzebowania na przepływ',
      items: [
        { pro: 'Zmniejszenie prędkości zachowuje geometrię linii i zamierzenia wymiarowe.', con: 'Zwiększa czas druku i może zmniejszyć wydajność farmy.' },
        { pro: 'Zmniejszenie wysokości warstwy poprawia jakość powierzchni i redukuje mm3/s.', con: 'Zwiększa liczbę warstw i może wydłużyć zadanie mimo niższego przepływu.' },
        { pro: 'Zmniejszenie szerokości linii może obniżyć ciśnienie i poprawić drobne detale.', con: 'Może osłabić cienkie ściany i zwiększyć liczbę ścieżek narzędzia.' },
      ],
    },
    {
      type: 'tip',
      title: 'Waliduj za pomocą wieży przepływu',
      html: '<p>Użyj kalkulatora, aby wybrać realistyczny zakres prędkości, a następnie wydrukuj wieżę testową przepływu dla konkretnego filamentu i temperatury. Najlepszym limitem produkcyjnym jest najwyższy przepływ, który nadal daje stabilne ściany, równomierny połysk, dobrą przyczepność warstw i brak pomijania kroków ekstrudera.</p>',
    },
    { type: 'title', text: 'Objawy Przekroczenia Wydajności Topienia Hotendu', level: 2 },
    {
      type: 'paragraph',
      html: 'Profil przekraczający limit topienia hotendu może zawodzić stopniowo. Najpierw górne powierzchnie mogą wykazywać cienkie ślady lub małe szczeliny. Następnie linie wypełnienia stają się niestabilne, obwody tracą połysk, a narożniki wykazują słabą regenerację ciśnienia. W poważniejszych przypadkach ekstruder pstryka, mieli filament, pomija kroki lub pozostawia kruche sekcje, ponieważ filament wchodzący do dyszy nie jest w pełni zmiękczony.',
    },
    {
      type: 'table',
      headers: ['Zaobserwowany objaw', 'Prawdopodobna przyczyna związana z przepływem', 'Reakcja kalkulatora'],
      rows: [
        ['Cienkie ściany przy dużej prędkości', 'Żądane mm3/s przekracza wydajność topienia na długich prostych ruchach', 'Zmniejsz prędkość, aż obciążenie spadnie poniżej 90%.'],
        ['Szorstka matowa ekstruzja', 'Filament nie jest w pełni nagrzany w rdzeniu', 'Zmniejsz przepływ lub ostrożnie zwiększ temperaturę dla tego materiału.'],
        ['Pstrykanie ekstrudera', 'Ciśnienie wsteczne przekracza chwyt ekstrudera lub moment obrotowy silnika', 'Natychmiast zmniejsz przepływ i sprawdź napięcie napędu filamentu.'],
        ['Słabe wiązanie wypełnienia', 'Materiał wychodzi zbyt chłodny lub niestabilnie stopiony', 'Użyj większego zapasu termicznego dla części konstrukcyjnych.'],
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Przepływ objętościowy', definition: 'Objętość tworzywa żądana z hotendu na sekundę, wyrażona w mm3/s.' },
        { term: 'Wydajność topienia', definition: 'Praktyczna ilość filamentu, jaką hotend może stale topić przy zachowaniu jakości druku.' },
        { term: 'Szerokość linii', definition: 'Szerokość ekstrudowanej ścieżki w slicerze, zwykle nieco większa niż średnica dyszy.' },
        { term: 'Wysokość warstwy', definition: 'Grubość pionowa każdej drukowanej warstwy; bezpośredni mnożnik w zapotrzebowaniu na przepływ.' },
        { term: 'Rezerwa przepływu', definition: 'Różnica między wydajnością hotendu a bieżącym żądanym przepływem.' },
      ],
    },
    {
      type: 'summary',
      title: 'Praktyczny przepływ pracy',
      items: [
        'Oblicz żądany przepływ przed zwiększeniem prędkości.',
        'Utrzymuj profile produkcyjne poniżej strefy krytycznej, chyba że potwierdzone testami.',
        'Używaj presetów hotendu jako stałych planistycznych, a następnie doprecyzuj kalibracją dla konkretnego materiału.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
