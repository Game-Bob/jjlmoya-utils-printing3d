import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TechnicalResinUvCuringUI } from '../ui';

const slug = 'kalkulator-czasu-utwardzania-uv-zywicy-technicznej';
const title = 'Kalkulator Czasu Utwardzania UV dla Żywicy Technicznej';
const description = 'Oszacuj bezpieczny czas utwardzania końcowego żywicy SLA na podstawie rodzaju żywicy, maksymalnej grubości ścianki, mocy stacji mycia i utwardzania oraz długości fali UV.';

const faqData = [
  { question: 'Jak długo należy utwardzać wydruki z żywicy SLA?', answer: 'Prawidłowy czas zależy od rodzaju żywicy, grubości ścianki, mocy stacji utwardzania, długości fali i geometrii ekspozycji. Małe elementy ze standardowej żywicy mogą wymagać zaledwie kilku minut, podczas gdy grube elementy z żywicy wytrzymałej potrzebują więcej czasu, ale powinny przestrzegać limitu bezpieczeństwa.' },
  { question: 'Czy zbyt duża ekspozycja UV może uczynić żywicę kruchą?', answer: 'Tak. Nadmierna ekspozycja na UV może sprawić, że wiele elementów z żywicy fotopolimerowej stanie się kruchych, żółtych lub mniej elastycznych. Kalkulator ogranicza czas, gdy surowe oszacowanie wchodzi w obszar degradacji.' },
  { question: 'Czy wydruki z żywicy powinny być suche przed utwardzaniem?', answer: 'Tak. Wydruki z żywicy powinny być czyste i całkowicie suche przed utwardzaniem UV. Pozostałości alkoholu mogą powodować bielenie, uwięzione zanieczyszczenia i niespójne wyniki utwardzania końcowego.' },
  { question: 'Czy 385 nm czy 405 nm jest lepsze do utwardzania żywicy?', answer: 'Żaden nie jest uniwersalnie lepszy. Najlepsza długość fali to ta, która jest dopasowana do systemu fotoinicjatora żywicy i stacji utwardzania. Wiele żywic biurkowych jest zoptymalizowanych pod kątem 405 nm, podczas gdy niektóre żywice techniczne dobrze reagują na 385 nm.' },
];

const howToData = [
  { name: 'Wybierz ustawienie wstępne żywicy', text: 'Wybierz standardową, elastyczną, sztywną/wytrzymałą, odlewniczą lub wypalaną zgodnie z butelką żywicy lub przeznaczeniem.' },
  { name: 'Wprowadź najgrubszą ściankę', text: 'Zmierz maksymalną grubość ścianki, która musi otrzymać utwardzanie końcowe UV.' },
  { name: 'Wprowadź parametry stacji', text: 'Ustaw moc stacji utwardzania i długość fali, aby dopasować je do komory UV.' },
  { name: 'Postępuj zgodnie z listą kontrolną bezpieczeństwa', text: 'Osusz element, wystaw każdą powierzchnię, usuń podpory rzucające cień i przestrzegaj maksymalnej bezpiecznej wartości timera.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org', '@type': 'HowTo',
  name: title, description,
  step: howToData.map((step, index) => ({
    '@type': 'HowToStep', position: index + 1,
    name: step.name, text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org', '@type': 'SoftwareApplication',
  name: title, description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'pl',
};

const seoData = [
  { type: 'title', text: 'Jak Wybiera Się Czas Utwardzania Końcowego Żywicy SLA', level: 2 },
  {
    type: 'paragraph',
    html: 'Utwardzanie końcowe to kontrolowana ekspozycja na UV stosowana po umyciu wydruku z żywicy. Celem nie jest po prostu sprawienie, aby powierzchnia była sucha w dotyku. Prawidłowo utwardzony element SLA lub MSLA osiąga lepszą konwersję grup reaktywnych w sieci polimerowej, co poprawia sztywność, odporność na ciepło, stabilność wymiarową i bezpieczeństwo obsługi. Niedostateczne utwardzanie pozostawia lepkie, słabe lub chemicznie aktywne powierzchnie. Nadmierne utwardzanie może popchnąć materiał w kierunku kruchości, widocznego żółknięcia i utraty wydłużenia. Przydatny <strong>kalkulator czasu utwardzania UV żywicy SLA</strong> musi zatem równoważyć chemię żywicy, grubość ścianki, natężenie światła, długość fali, temperaturę i geometrię ekspozycji.',
  },
  {
    type: 'paragraph',
    html: 'Kalkulator używa ustawień wstępnych żywicy, ponieważ różne rodziny żywic nie reagują identycznie. Standardowa żywica biurkowa zwykle utwardza się szybciej niż elastyczna formuła na bazie uretanu. Wytrzymała lub sztywna żywica inżynieryjna często wymaga dłuższej ekspozycji i czasami łagodnego ciepła, aby zbliżyć się do właściwości z karty danych. Żywice odlewnicze i wypalane są wrażliwe, ponieważ nadmierne utwardzanie może zwiększyć kruchość lub problemy związane z popiołem. Wynikiem jest zalecana wartość timera, bezpieczny górny limit, opcjonalna temperatura docelowa i praktyczna odległość światła.',
  },
  {
    type: 'stats',
    columns: 4,
    items: [
      { value: '385/405 nm', label: 'typowe długości fal utwardzania żywic biurkowych' },
      { value: '1-22 min', label: 'typowy ograniczony wynik kalkulatora' },
      { value: '0,4-12 mm', label: 'zakres modelu grubości ścianki' },
      { value: '6-120 W', label: 'zakres mocy stacji utwardzania' },
    ],
  },
  {
    type: 'diagnostic',
    variant: 'warning',
    title: 'Nigdy nie utwardzaj mokrych wydruków z żywicy',
    html: 'Alkohol pozostawiony na elemencie może uwięzić nieutwardzone pozostałości, wybielić powierzchnie, zanieczyścić komorę utwardzania i zniekształcić zależność między dawką UV a końcowym zachowaniem materiału. Najpierw umyj, pozostaw element do całkowitego wyschnięcia, następnie utwardź.',
  },
  { type: 'title', text: 'Dlaczego Grubość Ścianki Zmienia Czas Utwardzania UV', level: 2 },
  {
    type: 'paragraph',
    html: 'Cienka miniaturowa powłoka i gruby funkcjonalny wspornik mogą używać tej samej żywicy, ale wymagają innego zachowania podczas utwardzania końcowego. Światło UV jest absorbowane i rozpraszane przez pigmenty, wypełniacze, fotoinicjatory i sam polimer. Powierzchnia otrzymuje najsilniejszą dawkę, podczas gdy głębszy materiał otrzymuje mniej energii. Dlatego kalkulator pyta o <strong>maksymalną grubość ścianki</strong> zamiast całkowitej wysokości lub całkowitej masy. Najgrubszy optycznie istotny przekrój to część, która najprawdopodobniej pozostanie niedostatecznie utwardzona, gdy zewnętrzna strona już wygląda na gotową.',
  },
  {
    type: 'paragraph',
    html: 'Wzrost jest proporcjonalny, ale nie idealnie liniowy. Podwojenie grubości ścianki nie zawsze wymaga dokładnie podwójnej wartości timera, ponieważ utwardzanie trwa również z wielu powierzchni, gdy element jest obracany, i ponieważ wiele wydruków z żywicy jest pustych w środku. Model wykorzystuje wykładnik specyficzny dla żywicy: żywice wytrzymałe skalują się bardziej agresywnie z grubością, podczas gdy profile odlewnicze pozostają pod ściślejszym limitem bezpieczeństwa. W przypadku bardzo grubych litych elementów lepszym rozwiązaniem jest często drążenie, drenaż, obracanie i stopniowe utwardzanie zamiast pojedynczej długiej ekspozycji.',
  },
  {
    type: 'table',
    headers: ['Stan geometrii', 'Implikacje utwardzania', 'Działanie praktyczne'],
    rows: [
      ['Cienka powłoka kosmetyczna', 'Niskie zapotrzebowanie na utwardzanie wewnętrzne', 'Użyj obliczonego czasu bez dodawania dodatkowych minut.'],
      ['Gruby lity występ lub zaczep', 'Wyższe ryzyko niedostatecznie utwardzonego rdzenia', 'Wprowadź lokalną maksymalną grubość ścianki, nie średnią grubość powłoki.'],
      ['Wydrążony element z otworami drenażowymi', 'Światło dociera do zewnątrz; wnętrze może pozostać zacienione', 'Najpierw utwardź zewnątrz, następnie wystaw wnętrze, jeśli geometria na to pozwala.'],
      ['Nieprzezroczysta lub ciemna żywica', 'Niższa penetracja i więcej rozpraszania', 'Trzymaj się blisko instrukcji producenta i obracaj częściej.'],
    ],
  },
  {
    type: 'tip',
    title: 'Zmierz najgrubszą ścianę konstrukcyjną',
    html: 'W przypadku wydruku z żywicy z pustym wnętrzem użyj najgrubszej powłoki lub żebra wzmacniającego. W przypadku litego elementu inżynieryjnego użyj najgrubszej litej sekcji, która musi osiągnąć końcowe właściwości mechaniczne.',
  },
  { type: 'title', text: 'Moc Stacji, Odległość i Dawka UV', level: 2 },
  {
    type: 'paragraph',
    html: 'Stacja mycia i utwardzania o mocy nominalnej 40 W nie dostarcza 40 W użytecznej energii UV do każdego centymetra kwadratowego elementu. Moc nominalna obejmuje straty elektryczne i optyczne, rozmieszczenie diod LED, refleksyjność komory, pokrycie obrotnicy i odległość od źródła światła. Niemniej jednak moc jest użytecznym estymatorem: stacja o wysokiej mocy zwykle wymaga krótszego timera niż słaba skrzynka utwardzająca typu lampa do paznokci. Kalkulator stosuje odwrotny współczynnik mocy, tak aby timer zmniejszał się wraz ze wzrostem mocy stacji.',
  },
  {
    type: 'paragraph',
    html: 'Odległość ma znaczenie, ponieważ natężenie napromienienia spada wraz z oddalaniem się elementu od diod LED, a bardzo bliskie umieszczenie może tworzyć gorące punkty. Element umieszczony zbyt blisko jednego banku LED może agresywnie utwardzać jedną powierzchnię, podczas gdy narożniki lub wgłębione powierzchnie pozostają miękkie. Element umieszczony zbyt daleko może wymagać dłuższej ekspozycji, ale dodanie czasu może nadmiernie utwardzić już oświetlone powierzchnie. Dlatego wynik zawiera zalecaną odległość w centymetrach lub calach. Jest to kontrola geometrii, a nie tylko wartość wygody.',
  },
  {
    type: 'comparative',
    columns: 3,
    items: [
      {
        title: 'Zbyt blisko',
        description: 'Wysokie lokalne natężenie tworzy nierówną dawkę i naprężenia powierzchniowe.',
        points: ['Żółknięcie na wystawionych powierzchniach', 'Kruche cienkie detale', 'Zacienione wnęki pozostają niedostatecznie utwardzone'],
      },
      {
        title: 'Zbalansowane',
        description: 'Umiarkowana odległość pozwala komorze i obrotnicy równomierniej rozprowadzać UV.',
        highlight: true,
        points: ['Czystszy wynik mechaniczny', 'Mniejsze ryzyko gorących punktów', 'Lepsza powtarzalność'],
      },
      {
        title: 'Zbyt daleko',
        description: 'Niskie natężenie napromienienia zachęca użytkowników do kompensacji nadmiernym czasem.',
        points: ['Długie cykle', 'Niespójne utwardzanie', 'Fałszywe przekonanie z suchych powierzchni'],
      },
    ],
  },
  {
    type: 'message',
    title: 'Obracaj, gdy komora nie wystawia wszystkich powierzchni',
    html: 'Jeśli element ma głębokie wgłębienia, podcięcia lub szerokie płaskie boki, podziel ekspozycję na krótsze cykle i obracaj element. Jednolita dawka jest zwykle lepsza niż jedna długa statyczna ekspozycja.',
  },
  { type: 'title', text: '385 nm Versus 405 nm w Utwardzaniu Żywicy', level: 2 },
  {
    type: 'paragraph',
    html: 'Większość konsumenckich drukarek MSLA i stacji utwardzania używa diod LED 405 nm, ponieważ ta długość fali odpowiada wielu systemom fotoinicjatorów biurkowych i jest wydajna dla niedrogich układów LED. Niektóre żywice techniczne również silnie reagują na 385 nm, krótszą długość fali bliższą zakresowi UV-A. Różnica nie jest automatycznie lepsza ani gorsza. Żywica sformułowana pod kątem 405 nm może wymagać więcej czasu pod 385 nm, jeśli widmo nie jest dopasowane; inna żywica może efektywnie utwardzać się przy 385 nm. Kalkulator traktuje długość fali jako mnożnik zależny od żywicy.',
  },
  {
    type: 'paragraph',
    html: 'Ważnym działaniem użytkownika jest konsekwencja. Jeśli producent żywicy określa harmonogram utwardzania końcowego dla konkretnej jednostki utwardzania, długości fali i temperatury, użyj tego harmonogramu jako odniesienia. Użyj tego kalkulatora, gdy żywica jest generyczna, gdy moc stacji różni się od maszyny referencyjnej lub gdy geometria wydruku jest grubsza niż prosty coupon kalibracyjny. Nie mieszaj przemysłowego harmonogramu 385 nm ze stacją biurkową 405 nm bez dostosowania założeń ekspozycji.',
  },
  {
    type: 'glossary',
    items: [
      { term: 'Fotoinicjator', definition: 'Składnik żywicy, który absorbuje światło i rozpoczyna reakcje polimeryzacji.' },
      { term: 'Dawka UV', definition: 'Skumulowana energia świetlna otrzymana przez element podczas utwardzania, zależna od natężenia napromienienia i czasu.' },
      { term: 'Utwardzanie końcowe', definition: 'Obróbka UV, a czasami termiczna po myciu, która poprawia właściwości materiału poza stan wydrukowany.' },
      { term: 'Przedawkowanie UV', definition: 'Nadmierna ekspozycja, która może sprawić, że element z żywicy będzie kruchy, żółty, odkształcony lub mniej odporny na uderzenia.' },
    ],
  },
  {
    type: 'diagnostic',
    variant: 'info',
    title: 'Suchy w dotyku to nie to samo co całkowicie utwardzony',
    html: 'Powierzchnia żywicy może przestać być lepka, zanim wewnętrzna sieć osiągnie zamierzone zachowanie mechaniczne. Używaj geometrii, rodzaju żywicy i mocy stacji zamiast odczucia powierzchni.',
  },
  { type: 'title', text: 'Ustawienia Wstępne Żywicy i Ryzyko Mechaniczne', level: 2 },
  {
    type: 'paragraph',
    html: 'Standardowe żywice są zwykle zoptymalizowane pod kątem łatwości drukowania i szybkiej obróbki końcowej. Są najbardziej wyrozumiałą kategorią w kalkulatorze. Żywice elastyczne wymagają bardziej ostrożnego obchodzenia się, ponieważ pożądaną właściwością jest wydłużenie, a nie maksymalna twardość. Zbyt dużo UV może zmniejszyć elastyczność i zmienić miękki element w coś, co pęka wcześniej. Sztywne i wytrzymałe żywice często potrzebują większej dawki, aby rozwinąć wytrzymałość, ale mają również górną granicę, powyżej której dodatkowe utwardzanie nie poprawia już wydajności, a zamiast tego zwiększa kruchość.',
  },
  {
    type: 'paragraph',
    html: 'Żywice odlewnicze i wypalane mają inny priorytet. Ich końcowe zastosowanie może obejmować odlewanie precyzyjne lub czyste wypalanie, więc jakość powierzchni, zachowanie popiołu i stabilność wymiarowa są ważne. Bardzo twardy, nadmiernie utwardzony element odlewniczy może stać się kruchy podczas obsługi lub słabo działać w dalszych etapach procesu. Kalkulator stosuje ściślejszy limit do tych kategorii, ponieważ najbezpieczniejszym przepływem pracy jest kontrolowane utwardzanie, a nie maksymalna ekspozycja.',
  },
  {
    type: 'table',
    headers: ['Ustawienie wstępne żywicy', 'Główny cel', 'Objaw nadmiernego utwardzania', 'Zachowanie kalkulatora'],
    rows: [
      ['Standardowa', 'Ogólna twardość i bezpieczna obsługa', 'Żółknięcie i kruche cienkie detale', 'Umiarkowany czas bazowy i średni limit.'],
      ['Elastyczna', 'Zachowanie wydłużenia przy usuwaniu lepkości', 'Utrata elastyczności i rozrywanie', 'Dłuższy czas bazowy z ostrożną czułością dawki.'],
      ['Sztywna / Wytrzymała', 'Osiągnięcie sztywności i wytrzymałości inżynieryjnej', 'Kruche pękanie zamiast wytrzymałego zniszczenia', 'Wyższy czas bazowy i opcjonalne ciepłe utwardzanie.'],
      ['Odlewnicza', 'Czysta obsługa przed procesem odlewania', 'Kruche wzory i ciemnienie powierzchni', 'Niższy limit bezpieczeństwa, aby uniknąć agresywnej ekspozycji.'],
      ['Wypalana', 'Kontrolowane utwardzanie przed wypalaniem termicznym', 'Odpryskiwanie lub naprężenia wymiarowe', 'Umiarkowany czas z konserwatywnym limitem.'],
    ],
  },
  {
    type: 'proscons',
    title: 'Dodawanie dodatkowych minut po kalkulatorze',
    items: [
      { pro: 'Może pomóc, jeśli jedna powierzchnia była zacieniona podczas krótkiego cyklu.', con: 'Może degradować już wystawione powierzchnie, gdy element nie został obrócony.' },
      { pro: 'Może zmniejszyć lepkość na bardzo grubych lub ciemnych elementach.', con: 'Może sprawić, że żywice wytrzymałe i elastyczne będą bardziej kruche.' },
      { pro: 'Przydatny jako drugi krótki cykl po kontroli.', con: 'Niebezpieczny jako rutynowy nawyk bez sprawdzania limitu bezpieczeństwa.' },
    ],
  },
  { type: 'title', text: 'Temperatura Podczas Utwardzania Końcowego Żywicy Technicznej', level: 2 },
  {
    type: 'paragraph',
    html: 'Niektóre żywice inżynieryjne określają podwyższoną temperaturę utwardzania końcowego, ponieważ ciepło zwiększa mobilność molekularną i pomaga sieci polimerowej osiągnąć zamierzone właściwości. Ciepłe utwardzanie może poprawić temperaturę ugięcia cieplnego, moduł i ostateczną wytrzymałość dla zgodnych materiałów. Nie należy go stosować ślepo do każdej żywicy. Miniatura wydrukowana w standardowej żywicy może w ogóle nie potrzebować ciepła, podczas gdy wytrzymała żywica inżynieryjna może skorzystać z 40-60 °C w zależności od danych producenta. Kalkulator zwraca zatem temperaturę pokojową dla rodzin żywic, w których ciepło nie jest zakładane, i skromną temperaturę docelową, gdzie jest to przydatne.',
  },
  {
    type: 'paragraph',
    html: 'Kontrola temperatury jest również kwestią bezpieczeństwa. Zbyt dużo ciepła może odkształcić cienkie sekcje, zmiękczyć blizny po podporach lub przyspieszyć żółknięcie. Stacja mycia i utwardzania bez ogrzewanej komory nie powinna być traktowana jako odpowiednik pieca laboratoryjnego. Jeśli karta danych żywicy określa precyzyjny cykl termiczny, ta karta danych ma pierwszeństwo. Kalkulator jest praktycznym estymatorem dla typowych przepływów pracy biurkowej, a nie zamiennikiem certyfikowanej medycznej, dentystycznej, lotniczej lub odlewniczej walidacji procesu.',
  },
  {
    type: 'card',
    title: 'Gdy wynik mówi temperatura pokojowa',
    html: 'Temperatura pokojowa oznacza, że kalkulator nie wymaga ogrzewanego utwardzania końcowego dla tego ustawienia wstępnego żywicy. Nie oznacza to, że element może być utwardzany na zimno, mokro lub w przeciągowym warsztacie. Utrzymuj element suchy i pozwól żywicy osiągnąć normalną temperaturę wewnętrzną przed ekspozycją.',
  },
  {
    type: 'tip',
    title: 'Unikaj utwardzania bezpośrednio po usunięciu IPA',
    html: 'Po myciu pozwól alkoholowi odparować z otworów, wnęk i tekstu reliefowego. Dziesięć do trzydziestu minut suszenia może mieć większe znaczenie niż dodanie kolejnej minuty UV.',
  },
  { type: 'title', text: 'Diagnozowanie Niedostatecznie i Nadmiernie Utwardzonych Elementów Żywicznych', level: 2 },
  {
    type: 'paragraph',
    html: 'Niedostatecznie utwardzone elementy żywiczne zwykle wykazują lepkie powierzchnie, słabe małe cechy, utrzymujący się zapach, miękkie krawędzie lub pozostałości przenoszące się na rękawiczki. Objawy te są najczęstsze, gdy element nie został dokładnie umyty, był utwardzany na mokro, miał dużą grubość ścianki lub stał w cieniu wewnątrz komory. Nadmiernie utwardzone elementy wykazują inne objawy: kruche pękanie, żółknięcie, kredowate powierzchnie, zawinięte cienkie krawędzie lub utratę elastyczności. Rozwiązanie zależy od objawu. Więcej UV nie jest odpowiedzią na każdy problem z drukiem żywicznym.',
  },
  {
    type: 'diagnostic',
    variant: 'error',
    title: 'Kruchy i żółty oznacza zaprzestanie dodawania ekspozycji',
    html: 'Jeśli element stał się już kruchy lub widocznie żółty, dodatkowe utwardzanie nie przywróci wytrzymałości. Wydrukuj ponownie, zmniejsz wartość timera, popraw obracanie i przestrzegaj limitu.',
  },
  {
    type: 'summary',
    title: 'Kolejność rozwiązywania problemów',
    items: [
      'Potwierdź, że element został umyty i wysuszony przed utwardzaniem.',
      'Sprawdź, czy podpory lub orientacja modelu stworzyły cienie UV.',
      'Wprowadź najgrubszą ściankę, a nie średni rozmiar modelu.',
      'Użyj limitu bezpieczeństwa, gdy surowe oszacowanie byłoby zbyt długie.',
      'Obracaj złożone elementy zamiast przedłużać statyczną ekspozycję.',
    ],
  },
  {
    type: 'table',
    headers: ['Objaw', 'Prawdopodobna przyczyna', 'Korekta'],
    rows: [
      ['Lepka powierzchnia po utwardzaniu', 'Pozostałości żywicy lub IPA, niewystarczająca dawka lub zacieniona powierzchnia', 'Wypłucz ponownie, jeśli zanieczyszczony, osusz całkowicie, następnie zastosuj krótki obrócony cykl.'],
      ['Cienkie cechy łatwo się łamią', 'Nadmierne utwardzanie lub z natury krucha żywica', 'Zmniejsz timer i unikaj bliskiego umieszczania diod LED.'],
      ['Jedna strona żółta, druga miękka', 'Nierównomierna ekspozycja komory', 'Zwiększ odległość i obracaj podczas utwardzania.'],
      ['Elastyczna żywica staje się sztywna', 'Dawka zbyt wysoka dla zachowania elastomerowego', 'Użyj mniej czasu i zatrzymaj się przy nielepkim dotyku.'],
    ],
  },
  { type: 'title', text: 'Jak Korzystać z Tego Kalkulatora Czasu Stacji Mycia i Utwardzania UV', level: 2 },
  {
    type: 'paragraph',
    html: 'Zacznij od ustawienia wstępnego żywicy najbliższego etykiecie materiału. Jeśli butelka mówi wytrzymała, sztywna, ABS-podobna, inżynieryjna lub o wysokiej odporności na uderzenia, użyj ustawienia sztywna/wytrzymała. Jeśli jest elastyczna, giętka lub gumopodobna, użyj elastyczna. Do odlewania precyzyjnego lub przepływów pracy bezpopiołowych użyj odlewnicza lub wypalana. Następnie zmierz maksymalną grubość ścianki. Wprowadź nominalną moc stacji utwardzania i wybierz 385 nm lub 405 nm zgodnie z dokumentacją stacji lub żywicy. Wyjściowa wartość timera to pierwszy cykl, który powinieneś uruchomić.',
  },
  {
    type: 'paragraph',
    html: 'Przed naciśnięciem startu użyj listy kontrolnej. Element musi być suchy, widoczny z wielu kątów i wolny od struktur podporowych, które rzucają cienie. Jeśli model jest złożony, utwardzaj przez część zalecanego czasu, obróć go i dokończ resztę cyklu. Jeśli kalkulator ostrzega, że zastosowano limit bezpieczeństwa, nie zastępuj go jedną długą ekspozycją. Limit istnieje, ponieważ ta kategoria żywicy jest bardziej podatna na degradację niż poprawę poza tym punktem.',
  },
  {
    type: 'list',
    items: [
      'Używaj instrukcji producenta, gdy karta danych żywicy podaje zwalidowany cykl utwardzania końcowego.',
      'Używaj tego kalkulatora, gdy moc stacji, długość fali lub grubość elementu różnią się od referencyjnego przepływu pracy.',
      'Nie utwardzaj elementów, które silnie pachną rozpuszczalnikiem lub mają płyn uwięziony w otworach drenażowych.',
      'Nie zakładaj, że silniejsze światło jest bezpieczniejsze; może szybciej tworzyć lokalne nadmierne utwardzanie.',
      'Zapisuj udane czasy według żywicy, koloru, grubości ścianki i modelu stacji.',
    ],
  },
  {
    type: 'summary',
    title: 'Zasada bezpiecznego utwardzania końcowego',
    items: [
      'Najpierw wyczyść.',
      'Całkowicie osusz.',
      'Utwardzaj w obliczonym oknie.',
      'Obracaj dla pokrycia.',
      'Zatrzymaj się, zanim żywica stanie się krucha, żółta lub odkształcona.',
    ],
  },
];

export const content: ToolLocaleContent<TechnicalResinUvCuringUI> = {
  slug, title, description,
  ui: {
    controlsAriaLabel: 'Elementy sterujące wprowadzania danych utwardzania UV żywicy technicznej',
    resultsAriaLabel: 'Zalecane parametry utwardzania końcowego żywicy',
    unitSystemLabel: 'Jednostki',
    metricLabel: 'Metryczne',
    imperialLabel: 'US',
    resinGroupLabel: 'Ustawienie wstępne żywicy',
    stationGroupLabel: 'Stacja utwardzania',
    preparationLabel: 'Przed utwardzaniem',
    resinTypeLabel: 'Rodzaj żywicy',
    standardLabel: 'Standardowa',
    flexibleLabel: 'Elastyczna',
    toughLabel: 'Sztywna / Wytrzymała',
    castableLabel: 'Odlewnicza',
    burnoutLabel: 'Wypalana',
    wallThicknessLabel: 'Maksymalna grubość ścianki',
    wallThicknessHelp: 'Użyj najgrubszej litej ściany lub powłoki, przez którą światło UV musi przeniknąć, aby utwardzić.',
    stationPowerLabel: 'Moc stacji',
    stationPowerHelp: 'Nominalna moc elektryczna stacji utwardzania lub układu lamp UV.',
    wavelengthLabel: 'Długość fali',
    wavelength385Label: '385 nm',
    wavelength405Label: '405 nm',
    cleanDryReminder: 'Element musi być czysty i idealnie suchy przed ekspozycją na UV. Nie utwardzaj elementów, które nadal zawierają alkohol.',
    dryCheckLabel: 'Czy element jest całkowicie suchy i wolny od pozostałości alkoholu?',
    exposureCheckLabel: 'Czy element jest ustawiony tak, aby światło docierało do każdej powierzchni?',
    supportsCheckLabel: 'Czy element jest wolny od podpór, które mogą rzucać cienie?',
    degradationWarning: 'Nadmierny czas utwardzania sprawia, że element staje się kruchy i żółty. Przestrzegaj limitów technicznych.',
    recommendedTimeLabel: 'Ustawienie timera',
    temperatureLabel: 'Temperatura utwardzania',
    noTemperatureLabel: 'Pokojowa',
    ambientTemperatureNoteMetric: 'Utwardzaj w temperaturze pokojowej (18-25 °C). Dla tego ustawienia wstępnego nie jest wymagana ogrzewana komora.',
    ambientTemperatureNoteImperial: 'Utwardzaj w temperaturze pokojowej (64-77 °F). Dla tego ustawienia wstępnego nie jest wymagana ogrzewana komora.',
    distanceLabel: 'Odległość światła',
    maxSafeLabel: 'Limit bezpieczeństwa',
    doseIndexLabel: 'Indeks dawki UV',
    safetySafeLabel: 'W bezpiecznym oknie',
    safetyCautionLabel: 'Blisko górnego limitu',
    safetyLimitLabel: 'Zastosowano limit bezpieczeństwa',
    limitMessage: 'Żądana ekspozycja przekroczyłaby limit bezpieczeństwa żywicy. Użyj ograniczonej wartości timera i obracaj element między cyklami, jeśli powierzchnie są zacienione.',
    cautionMessage: 'Zalecenie jest technicznie użyteczne, ale blisko obszaru degradacji. Utrzymuj element suchy, obracaj go i unikaj dodawania dodatkowych minut z przyzwyczajenia.',
    safeMessage: 'Zalecenie mieści się w normalnym oknie utwardzania końcowego dla tego profilu żywicy i mocy stacji.',
    timerUnit: 'min',
    mmUnit: 'mm',
    inchUnit: 'in',
    cmUnit: 'cm',
    inUnit: 'in',
    wattUnit: 'W',
    celsiusUnit: '°C',
    fahrenheitUnit: '°F',
  },
  seo: seoData,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
