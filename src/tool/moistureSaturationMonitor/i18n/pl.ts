import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MoistureSaturationMonitorUI } from '../ui';

const slug = 'estymator-dehydratacji-filamentu';
const title = 'Estymator Dehydratacji Filamentu: Poradnik Regeneracji Termicznej';
const description = 'Modeluje nasycenie higroskopijne filamentu za pomocą wykładniczej kinetyki adsorpcji, ekspozycji na wilgoć, typu polimeru i temperatury komory suszenia.';

const faqData = [
  {
    question: 'Jak estymator dehydratacji filamentu oblicza nasycenie wilgocią?',
    answer: 'Używa wykładniczego modelu nasycenia: maksymalna absorpcja materiału pomnożona przez jeden minus e do potęgi minus współczynnik kinetyczny razy czas ekspozycji, a następnie skalowana przez wilgotność względną otoczenia.',
  },
  {
    question: 'Dlaczego Nylon wymaga dłuższego suszenia niż PLA?',
    answer: 'Nylon ma większą pojemność wilgoci i szybszy współczynnik adsorpcji niż PLA, przez co szybciej osiąga szkodliwą zawartość wody przy tej samej wilgotności i czasie ekspozycji.',
  },
  {
    question: 'Czy wyższa temperatura suszenia zawsze oznacza bezpieczniejsze suszenie?',
    answer: 'Nie. Wyższa temperatura przyspiesza dehydratację, ale każdy polimer ma swój bezpieczny zakres temperatur w komorze. Jego przekroczenie może zmiękczyć filament, zdeformować szpulę lub zmienić zachowanie podczas drukowania.',
  },
  {
    question: 'Co oznacza wskaźnik ryzyka hydrolizy?',
    answer: 'Porównuje szacowaną zawartość wody z krytycznym progiem materiału i ostrzega, gdy wchłonięta wilgoć jest wystarczająco wysoka, by nasilić powstawanie pęcherzy, nitkowanie (stringing), osłabić spójność warstw lub uszkodzić łańcuchy polimerowe.',
  },
];

const howToData = [
  { name: 'Wybierz polimer', text: 'Wybierz PLA, PETG, ABS, ASA, TPU, Nylon, PC lub PVA, aby model załadował poprawną pojemność równowagową i współczynnik kinetyczny.' },
  { name: 'Wpisz wilgotność przechowywania', text: 'Wstaw wilgotność względną miejsca, w którym znajdowała się szpula, na podstawie odczytu z pomieszczenia, pojemnika lub warsztatu.' },
  { name: 'Ustaw czas ekspozycji', text: 'Wpisz, ile dni filament spędził poza zamkniętym pudełkiem (dry boxem) lub aktywną suszarką.' },
  { name: 'Wybierz temperaturę suszenia', text: 'Ustaw temperaturę komory suszenia w bezpiecznym zakresie dla danego polimeru i materiału szpuli.' },
  { name: 'Uruchom cykl suszenia', text: 'Włącz zapamiętany licznik czasu suszenia, a następnie obserwuj, jak wskaźnik komory stopniowo spada w miarę usuwania szacowanego ładunku wilgoci.' },
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
  applicationCategory: 'EngineeringApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'pl',
};

export const content: ToolLocaleContent<MoistureSaturationMonitorUI> = {
  slug,
  title,
  description,
  ui: {
    unitSystemLabel: 'Jednostki',
    metricLabel: 'Metryczne',
    imperialLabel: 'Imperialne',
    materialLabel: 'Polimer',
    materialPlaLabel: 'PLA',
    materialPetgLabel: 'PETG',
    materialAbsLabel: 'ABS',
    materialAsaLabel: 'ASA',
    materialTpuLabel: 'TPU',
    materialPaLabel: 'Nylon PA',
    materialPcLabel: 'Poliwęglan',
    materialPvaLabel: 'PVA podpora',
    humidityLabel: 'Wilgotność względna',
    exposureLabel: 'Czas ekspozycji',
    dryTempLabel: 'Komora suszenia',
    spoolMassLabel: 'Masa szpuli',
    calculateLabel: 'Uruchom cykl suszenia',
    pauseCycleLabel: 'Wstrzymaj cykl',
    resumeCycleLabel: 'Wznów cykl',
    resetCycleLabel: 'Resetuj cykl',
    saturationLabel: 'Zawartość wilgoci',
    absorbedLabel: 'Wchłonięta woda',
    dryingTimeLabel: 'Cykl suszenia',
    remainingTimeLabel: 'Pozostały czas',
    cycleProgressLabel: 'Postęp cyklu',
    hydrolysisLabel: 'Ryzyko hydrolizy',
    stableLabel: 'Stabilny',
    watchLabel: 'Strefa obserwacji',
    criticalLabel: 'Krytyczny',
    chamberReadyLabel: 'Komora gotowa',
    chamberRunningLabel: 'Cykl suszenia w toku',
    chamberCompleteLabel: 'Wilgoć usunięta',
    curveLabel: 'Krzywa adsorpcji',
    kineticLabel: 'Kinetyka nasycenia',
    equilibriumLabel: 'Wykładnicze dążenie do nasycenia równowagowego',
    daysUnit: 'dni',
    percentUnit: '%',
    gramsUnit: 'g',
    poundsUnit: 'lb',
    celsiusUnit: 'C',
    fahrenheitUnit: 'F',
    hoursUnit: 'h',
    minutesUnit: 'm',
    secondsUnit: 's',
    noValueLabel: '-',
  },
  seo: [
    { type: 'title', text: 'Zrozumienie kinetyki adsorpcji: dlaczego Nylon nie zachowuje się jak PLA', level: 2 },
    { type: 'paragraph', html: 'Rzetelny <strong>estymator czasu suszenia filamentu 3D</strong> nie może traktować wilgoci jako linii prostej. Polimery higroskopijne nie wchłaniają codziennie tej samej ilości wody w nieskończoność. Dążą do stanu równowagi: szybko na początku, wolniej w pobliżu nasycenia, a tempo to silnie zależy od wilgotności względnej otoczenia. Właśnie dlatego szpula pozostawiona przy 70% wilgotności względnej przez dwa dni nie jest po prostu o połowę mniej wilgotna niż ta pozostawiona na cztery dni. Początkowa faza ekspozycji często wywołuje najbardziej stromy przyrost wilgoci, zwłaszcza w przypadku Nylonu, TPU, PVA oraz innych materiałów zawierających grupy polarne przyciągające cząsteczki wody.' },
    { type: 'paragraph', html: 'Narzędzie to modeluje zawartość wilgoci wzorem <code>S_h = S_max x (1 - e^(-k x t)) x RH/100</code>. Gdzie <code>S_max</code> to równowagowa zdolność absorpcji polimeru, <code>k</code> to szybkość adsorpcji, <code>t</code> to czas ekspozycji, a <code>RH</code> dopasowuje wynik do środowiska przechowywania. Wynik nie stanowi laboratoryjnego certyfikatu, lecz jest inżynieryjnym modelem planowania, który wyjaśnia, dlaczego te same warunki warsztatowe pozostawiają PLA zdatnym do druku, podczas gdy Nylon zaczyna syczeć, pęcherzykować, nitkować i tracić wytrzymałość spoiwa międzywarstwowego.' },
    { type: 'stats', columns: 4, items: [
      { value: '0.65%', label: 'Planowana pojemność równowagowa dla PLA' },
      { value: '3.2%', label: 'Planowana pojemność równowagowa dla Nylon PA' },
      { value: '5.8%', label: 'Planowana pojemność równowagowa dla filamentu podporowego PVA' },
      { value: 'Skalowanie RH', label: 'Wilgotność otoczenia modyfikuje krzywą nasycenia' },
    ] },
    { type: 'diagnostic', variant: 'info', title: 'Objawy wilgoci to objawy procesu', badge: 'Wskazówka druku', html: 'Trzaski, pęcherzyki pary, utrata satynowego połysku na rzecz szorstkiej powierzchni, nadmierne nitkowanie, słabe ścianki i mętny wytłok to nie są losowe błędy slicera. Często wskazują na to, że woda gwałtownie zamienia się w parę w strefie topnienia lub że hydroliza skróciła długość łańcuchów polimerowych przed osadzeniem ścieżki.' },

    { type: 'title', text: 'Jak model wykładniczego nasycenia zmienia decyzje o suszeniu', level: 2 },
    { type: 'paragraph', html: 'Liniowe kalkulatory zazwyczaj pytają o materiał i podają sztywną liczbę godzin. Pomaga to jako szybkie przypomnienie, lecz ukrywa kluczową kwestię: ile wilgoci faktycznie wchłonął filament? Szpula przechowywana w szczelnym suchym pudełku (dry boxie) przy 15% wilgotności względnej przez trzy tygodnie może wymagać minimalnej regeneracji lub nie wymagać jej wcale. Ten sam polimer leżący otwarcie w wilgotnym garażu przez weekend może potrzebować pełnego cyklu w komorze suszenia. Modelowanie nasycenia wiąże zalecenia dotyczące suszenia z historią ekspozycji, zamiast traktować każdą szpulę jako jednakowo zawilgoconą.' },
    { type: 'table', headers: ['Dane wejściowe', 'Znaczenie fizyczne', 'Wpływ na estymację'], rows: [
      ['Wilgotność względna', 'Aktywność wody wokół szpuli', 'Wyższa wilgotność otoczenia podnosi równowagowy cel i końcowy procent wchłoniętej wilgoci.'],
      ['Czas ekspozycji', 'Jak długo pozwolono na postępowanie dyfuzji', 'Pierwsze dni mają największe znaczenie; krzywa spowalnia w miarę zbliżania się do nasycenia.'],
      ['Współczynnik materiałowy', 'Jak szybko polimer zbliża się do równowagi', 'Nylon i PVA reagują znacznie szybciej niż PLA czy ASA.'],
      ['Temperatura suszenia', 'Energia termiczna dostępna do desorpcji', 'Wyższa, bezpieczna temperatura komory skraca szacowany cykl.'],
      ['Masa szpuli', 'Ilość obecnego polimeru', 'Procent określa stan materiału; wchłonięte gramy są proporcjonalne do masy szpuli.'],
    ] },
    { type: 'tip', title: 'Szacuj mikroklimat, nie prognozę pogody', html: 'Użyj wilgotności panującej wewnątrz pudełka do przechowywania, obudowy drukarki, szafki lub warsztatu, w którym rzeczywiście leżał filament. Lokalne prognozy pogody mogą drastycznie różnić się od wilgotności tuż obok nagrzanej drukarki, na półce w piwnicy lub w zamkniętym pojemniku z pochłaniaczem wilgoci.' },
    { type: 'card', icon: 'mdi:chart-bell-curve', title: 'Dlaczego pierścień zwalnia w pobliżu nasycenia', html: 'Wizualny pierścień odwzorowuje to samo zachowanie wykładnicze co równanie. Napełnia się szybko, gdy polimer jest suchy, ponieważ gradient wilgotności jest silny. W miarę zbliżania się do równowagi gradient słabnie, przez co widoczne tempo napełniania spada. To spowolnienie wynika z fizyki, a nie z zabiegu animacyjnego.' },

    { type: 'title', text: 'Zakresy suszenia komorowego według materiałów', level: 2 },
    { type: 'paragraph', html: 'Zalecenia dotyczące suszenia muszą uwzględniać zarówno polimer, jak i szpulę. PLA może ulec zmiękczeniu lub odkształceniu termicznemu (pełzaniu) przy przegrzaniu. PETG toleruje wyższe temperatury, lecz wciąż korzysta na umiarkowanej kontroli komory. Nylon z reguły wymaga wyższej temperatury i dłuższego cyklu, ponieważ pochłania więcej wody i silniej ją wiąże. PVA jest skrajnie wrażliwy na wilgoć i może stać się niezdatny do użytku, jeśli pozostanie odsłonięty. PC często drukuje się znacznie lepiej po wysuszeniu, nawet gdy nie wygląda na wilgotny. Estymator wykorzystuje te różnice, by przekształcić ogólny <strong>kalkulator suszenia filamentu</strong> w szczegółowy przewodnik dla każdego materiału.' },
    { type: 'comparative', columns: 2, items: [
      { title: 'Niska do umiarkowanej reakcja higroskopijna', description: 'PLA, ABS i ASA ogólnie wchłaniają mniej wody i wolniej, lecz po długiej ekspozycji na wilgoć również tracą na jakości.', points: ['Krótsze cykle suszenia', 'Niższa wilgotność równowagowa', 'Objawy mogą pojawiać się stopniowo'] },
      { title: 'Wysoka reakcja higroskopijna', description: 'Nylon, TPU, PVA oraz niektóre odmiany PC wymagają bardziej aktywnego przechowywania i zdyscyplinowanej regeneracji.', points: ['Większa masa wchłoniętej wody', 'Szybsze nasycenie początkowe', 'Większe ryzyko pęcherzenia i osłabienia warstw'] },
    ] },
    { type: 'table', headers: ['Materiał', 'Typowa temperatura komory', 'Uwaga planistyczna'], rows: [
      ['PLA', '40-55 C', 'Unikaj nadmiernego ciepła, ponieważ PLA oraz niektóre szpule mogą się zdeformować.'],
      ['PETG', '55-70 C', 'Często poprawia spójność powierzchni i redukuje nitkowanie po kilku godzinach.'],
      ['ABS / ASA', '65-85 C', 'Mniejsza absorpcja niż w przypadku Nylonu, ale zyskuje na suchym przechowywaniu.'],
      ['TPU', '45-60 C', 'Elastyczne odmiany mogą wchłonąć dość wilgoci, by spienić się lub mocno nitkować.'],
      ['Nylon PA', '70-90 C', 'Zazwyczaj wymaga aktywnego suszenia przed krytycznymi wydrukami funkcjonalnymi.'],
      ['PVA', '40-55 C', 'Materiał podporowy wrażliwy na wilgoć; należy natychmiast zamknąć szczelnie po użyciu.'],
    ] },
    { type: 'proscons', title: 'Sztywna tabela suszenia vs monitor nasycenia', items: [
      { pro: 'Sztywna tabela działa szybko, gdy potrzebujesz jedynie domyślnego cyklu.', con: 'Nie odróżnia szpuli wyjętej z dry boxu od szpuli leżącej w wilgotnym powietrzu.' },
      { pro: 'Modelowanie nasycenia wyjaśnia, dlaczego początkowa ekspozycja może być dotkliwa.', con: 'Wciąż opiera się na przybliżonych współczynnikach materiałowych i historii przechowywania.' },
      { pro: 'Wprowadzenie temperatury suszenia odzwierciedla rzeczywiste ustawienie suszarki.', con: 'Nie zastępuje bezpiecznych limitów temperaturowych podawanych przez producenta filamentu.' },
      { pro: 'Wchłonięte gramy dają namacalny wynik dla pełnych i częściowo zużytych szpul.', con: 'Masa szpuli nie zdradza, czy zewnętrzne zwoje są bardziej wilgotne niż jej rdzeń.' },
    ] },

    { type: 'title', text: 'Ryzyko hydrolizy: kiedy wilgotny filament staje się trwale uszkodzony', level: 2 },
    { type: 'paragraph', html: 'Wilgoć to nie tylko problem z estetyką wydruku. W temperaturach wytłaczania woda wnikająca w podatne polimery wywołuje hydrolizę. Hydroliza zrywa łańcuchy cząsteczkowe, drastycznie zmniejszając udarność, wydłużenie przy zerwaniu oraz niezawodność części. Ma to krytyczne znaczenie dla elementów konstrukcyjnych (wsporniki, uchwyty, koła zębate). Wilgotna szpula może nadal bezproblemowo tłoczyć plastik, jednak gotowy element pęknie znacznie szybciej, ponieważ polimer uległ degradacji chemicznej podczas przetwórstwa.' },
    { type: 'glossary', items: [
      { term: 'Higroskopijność', definition: 'Skłonność materiału do przyciągania i zatrzymywania wody z otaczającego powietrza.' },
      { term: 'Wilgotność równowagowa', definition: 'Zawartość wilgoci, do której dąży polimer po odpowiednio długim czasie w danej wilgotności otoczenia.' },
      { term: 'Współczynnik adsorpcji', definition: 'Uproszczona wartość kinetyczna określająca tempo wznoszenia się krzywej nasycenia.' },
      { term: 'Desorcja', definition: 'Proces odwrotny: uwalnianie wody z polimeru podczas suszenia termicznego.' },
      { term: 'Hydroliza', definition: 'Chemiczne rozrywanie łańcuchów polimeru wywołane przez wodę pod wpływem wysokiej temperatury.' },
    ] },
    { type: 'diagnostic', variant: 'warning', title: 'Sucha powierzchnia nie gwarantuje suchego rdzenia', badge: 'Limit dyfuzji', html: 'Filament schnie od zewnątrz do wewnątrz. Krótkie suszenie w wysokiej temperaturze może poprawić stan powierzchni, podczas gdy wewnętrzne zwoje gęsto nawiniętej szpuli pozostaną wilgotne. Duże szpule, tekturowe boki i ciasny nawój spowalniają proces regeneracji.' },
    { type: 'message', title: 'Reguła wizualna', html: 'Gdy pierścień zmienia barwę z czystego błękitu na stłumiony szaroniebieski, narzędzie sygnalizuje przejście od normalnego poziomu wilgoci do strefy zagrożenia hydrolizą. To moment, w którym suszenie staje się wymogiem kontroli jakości, a nie tylko zabiegiem kosmetycznym.' },

    { type: 'title', text: 'Budowanie niezawodnego procesu suszenia filamentu', level: 2 },
    { type: 'paragraph', html: 'Skuteczny <strong>przewodnik po nasyceniu materiałów higroskopijnych</strong> łączy analizę z nawykami. Mierz wilgotność przechowywania, opisuj szpule datami otwarcia, przechowuj wrażliwe polimery w szczelnych pojemnikach, wymieniaj pochłaniacz wilgoci, zanim się nasyci, i susz filament przed drukiem elementów obciążonych mechanicznie. Najlepszy schemat pracy unika wielokrotnych cykli zawilgocenia i suszenia - każdy zbędny cykl suszenia termicznego może degradować materiał, wypaczać szpule lub marnować czas pracy urządzenia.' },
    { type: 'list', items: [
      'Susz Nylon, PVA, TPU i PC przed długimi wydrukami, gdy historia ich przechowywania jest niepewna.',
      'Przechowuj PLA i PETG również w szczelnych opakowaniach; niska absorpcja to nie brak absorpcji.',
      'Używaj niezależnego termometru wewnątrz suszarki, ponieważ odczyty wbudowane bywają zawyżone.',
      'Podawaj filament bezpośrednio z dry boxu podczas wielogodzinnych wydruków w wilgotnych pomieszczeniach.',
      'Wymieniaj lub regeneruj pochłaniacz wilgoci, gdy indykator lub czujnik wilgotności w pojemniku wykazuje tendencję wzrostową.',
      'Unikaj suszenia powyżej temperatury zeszklenia lub mięknięcia filamentu oraz samej szpuli.',
    ] },
    { type: 'card', icon: 'mdi:air-filter', title: 'Komora suszenia to system regeneracji', html: 'Komora musi zapewniać stabilne ciepło, przepływ powietrza i ujście dla wilgoci. Ogrzewanie zamkniętego pudełka bez wentylacji lub sorbentu spowoduje jedynie przejście wody z tworzywa do powietrza wewnątrz i jej powrotne wchłonięcie po schłodzeniu.' },
    { type: 'summary', title: 'Praktyczna lista kontrolna interpretacji', items: [
      'Procent wilgoci opisuje stan tworzywa; wchłonięte gramy określają całkowity ładunek wody w szpuli.',
      'Wysoka wilgotność i szybko reagujące materiały generują strome nasycenie początkowe.',
      'Czas suszenia powinien rosnąć wraz z nasyceniem i maleć przy wyższej, bezpiecznej temperaturze komory.',
      'Ryzyko hydrolizy ma największe znaczenie przy ekstruzji wysokotemperaturowej i częściach wytrzymałościowych.',
      'Karta techniczna producenta (TDS) ma zawsze pierwszeństwo przed ogólnych szacunkami suszenia.'
    ] },

    { type: 'title', text: 'SEO odpowiedź: jak długo powinienem suszyć filament do drukarki 3D?', level: 2 },
    { type: 'paragraph', html: 'Prawidłowy czas suszenia zależy od materiału, stopnia narażenia na wilgoć, masy szpuli i temperatury w komorze. PLA po umiarkowanej ekspozycji może potrzebować zaledwie kilku godzin, PETG i TPU zazwyczaj wymagają dłuższego czasu, natomiast Nylon lub PVA po wilgotnym okresie przechowywania mogą wymagać pełnego, wielogodzinnego cyklu regeneracji. Skuteczny proces <strong>kontroli wilgotności w druku 3D</strong> najpierw szacuje wchłoniętą wodę, a następnie dobiera bezpieczną temperaturę suszenia i odpowiedni czas na desorpcję. Jest to o wiele bardziej niezawodne niż stosowanie jednej uniwersalnej liczby godzin dla każdego tworzywa.', },
    { type: 'diagnostic', variant: 'success', title: 'Najlepsze zastosowanie dla tego monitora', badge: 'Przygotowanie inżynieryjne', html: 'Użyj estymatora przed krytycznymi wydrukami, seriami produkcyjnymi, stosowaniem drogich tworzyw konstrukcyjnych lub przed jakimkolwiek zadaniem, w którym wada powierzchni, krucha warstwa lub osłabiony element przyniosłyby większe straty niż koszt cyklu suszenia.' },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
