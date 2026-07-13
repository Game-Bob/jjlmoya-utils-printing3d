import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AdditiveProductionEfficiencyCalculatorUI } from '../ui';

const slug = 'kalkulator-wydajnosci-produkcji-addytywnej';
const title = 'Kalkulator Wydajności Produkcji Addytywnej';
const description =
  'Porównaj drukowanie wsadowe z sekwencyjnym pod względem czasu wydruku, narzutu nagrzewania, przejść transportowych, czasu przeczyszczania, statystycznego ryzyka awarii i automatycznej rekomendacji opłacalności.';

const faqData = [
  {
    question: 'Kiedy drukowanie wsadowe jest szybsze niż sekwencyjne?',
    answer:
      'Drukowanie wsadowe jest zwykle szybsze, gdy nagrzewanie jest znaczące, części mieszczą się bezpiecznie na stole roboczym, odległość transportu między częściami jest umiarkowana, a historyczny wskaźnik awarii jest na tyle niski, że łączne ryzyko wsadu pozostaje poniżej progu krytycznego.',
  },
  {
    question: 'Dlaczego drukowanie sekwencyjne może być zalecane, nawet jeśli trwa dłużej?',
    answer:
      'Drukowanie sekwencyjne ogranicza stratę z jednej nieudanej części. Jeśli ryzyko wsadu obliczone jako 1 - (1 - wskaźnik awarii)^N przekracza próg krytyczny, kalkulator zaleca drukowanie sekwencyjne w celu ochrony kolejki produkcyjnej.',
  },
  {
    question: 'Czy kalkulator zastępuje oszacowania slicera?',
    answer:
      'Nie. Slicer zna dokładne ścieżki narzędzia, przyspieszenia, szerokości ekstruzji, chłodzenie i luz kolizyjny. Ten kalkulator służy do planowania produkcji przed slicowaniem, szczególnie przy porównywaniu pojedynczej pracy na pełnym stole z powtarzanymi pracami pojedynczych części.',
  },
  {
    question: 'Jaki wskaźnik awarii powinienem wprowadzić?',
    answer:
      'Użyj własnej historii warsztatu dla podobnego materiału, drukarki, geometrii i warunków operatora. Jeśli jeszcze go nie śledzisz, zacznij konserwatywnie od 2-5% dla dostrojonej produkcji FDM i zwiększ go dla nowych materiałów, długich prac lub słabo zweryfikowanych uchwytów.',
  },
];

const howToData = [
  { name: 'Wprowadź ilość', text: 'Ustaw całkowitą liczbę części wymaganych do serii produkcyjnej.' },
  { name: 'Dodaj dane czasowe', text: 'Wprowadź czas druku pojedynczej części, czas nagrzewania, odległość przejścia, prędkość transportu oraz czas przeczyszczania lub stabilizacji.' },
  { name: 'Ustaw ryzyko historyczne', text: 'Użyj procentu awarii z porównywalnych prac i wybierz maksymalne akceptowalne ryzyko wsadu.' },
  { name: 'Odczytaj rekomendację', text: 'Porównaj całkowity czas, zaoszczędzony czas, względną wydajność, narzut przejść i statystyczne ryzyko wsadu.' },
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
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'pl',
};

export const content: ToolLocaleContent<AdditiveProductionEfficiencyCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Dane wejściowe wydajności produkcji addytywnej',
    resultsAriaLabel: 'Wyniki wydajności produkcji addytywnej',
    visualizerAriaLabel: 'Wizualizacja ryzyka generatywnego i układu stołu',
    unitSystemLabel: 'Jednostki',
    metricLabel: 'Metryczne',
    imperialLabel: 'US',
    piecesLabel: 'Części',
    unitPrintTimeLabel: 'Czas druku na część (min)',
    preheatTimeLabel: 'Czas nagrzewania (min)',
    transitionDistanceLabel: 'Średnie przejście',
    travelSpeedLabel: 'Prędkość transportu',
    failureRateLabel: 'Historyczny wskaźnik awarii',
    purgeTimeLabel: 'Przeczyszczanie / stabilizacja (min)',
    criticalRiskLabel: 'Krytyczne ryzyko wsadu',
    batchLabel: 'Drukowanie wsadowe',
    sequentialLabel: 'Drukowanie sekwencyjne',
    recommendationLabel: 'Zalecana strategia',
    savingsLabel: 'Bezwzględna oszczędność czasu',
    efficiencyLabel: 'Względna wydajność',
    riskLabel: 'Ryzyko awarii wsadu',
    layoutLabel: 'Choreografia stołu roboczego',
    transitionLabel: 'Narzut przejść',
    batchWinsLabel: 'Wsad',
    sequentialWinsLabel: 'Sekwencyjne',
    riskOverrideLabel: 'nadpisanie ryzyka',
    fasterLabel: 'oszczędność',
    slowerLabel: 'dodatkowy',
    lowRiskLabel: 'Niskie ryzyko wsadu',
    moderateRiskLabel: 'Umiarkowane ryzyko wsadu',
    criticalRiskStatusLabel: 'Krytyczne ryzyko wsadu',
    minutesUnit: 'min',
    percentUnit: '%',
    millimeterUnit: 'mm',
    inchUnit: 'cal',
    metricSpeedUnit: 'mm/s',
    imperialSpeedUnit: 'cal/s',
  },
  seo: [
    { type: 'title', text: 'Drukowanie Wsadowe vs Sekwencyjne: Co Mierzy Kalkulator', level: 2 },
    {
      type: 'paragraph',
      html: 'Wybór między <strong>drukowaniem wsadowym a sekwencyjnym</strong> to nie tylko kwestia wypełnienia stołu roboczego. Pełny wsad stołu może zaoszczędzić czas nagrzewania i zmniejszyć interwencję operatora, ale koncentruje ryzyko produkcyjne w jednym długim oknie ekspozycji. Drukowanie sekwencyjne powtarza narzut konfiguracji, ale izoluje awarie, tak aby jedna wadliwa część nie zanieczyszczała automatycznie wartości całego stołu. Ten kalkulator zamienia to kompromisowe rozwiązanie na liczby: całkowite minuty, przejścia transportowe, względną wydajność i statystyczne ryzyko wsadu.',
    },
    {
      type: 'paragraph',
      html: 'Formuła wsadu to <code>Tbatch = Tc + (N x Tp) + ((N x Dtrans) / (Vtravel x 60))</code>. Formuła sekwencyjna to <code>Tseq = N x (Tc + Tp + Tpurge)</code>. Formuła ryzyka to <code>Riskbatch = 1 - (1 - Pfailure)^N</code>. Te równania są celowo przejrzyste, ponieważ planowanie produkcji jest łatwiejsze, gdy powód rekomendacji jest widoczny, a nie ukryty w czarnej skrzynce.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '1', label: 'Cykl nagrzewania w trybie wsadowym', icon: 'mdi:heat-wave' },
        { value: 'N', label: 'Cykl nagrzewania w trybie sekwencyjnym', icon: 'mdi:repeat' },
        { value: '60', label: 'Sekundy używane do normalizacji transportu na minuty', icon: 'mdi:timer-outline' },
        { value: '1 - (1-p)^N', label: 'Złożony model awarii wsadu', icon: 'mdi:chart-bell-curve' },
      ],
    },
    {
      type: 'tip',
      title: 'Używaj jednej spójnej definicji awarii',
      html: '<p>Wskaźnik awarii jest użyteczny tylko wtedy, gdy warsztat definiuje awarię w spójny sposób. Zdecyduj, czy obejmuje ona odrzuty kosmetyczne, odchylenia wymiarowe, blizny po podporach, błędy pierwszej warstwy, splątanie szpul, przerwy w zasilaniu i usunięcia przez operatora. Mieszanie definicji sprawia, że model ryzyka wygląda na precyzyjny, podczas gdy jest zasilany szumowymi danymi.</p>',
    },
    { type: 'title', text: 'Jak Drukowanie Wsadowe Oszczędza Czas', level: 2 },
    {
      type: 'paragraph',
      html: 'Drukowanie wsadowe zwykle wygrywa pod względem wykorzystania maszyny, gdy czas nagrzewania jest duży w porównaniu z czasem druku pojedynczej części. Podgrzanie stołu i dyszy raz dla serii 24 części pozwala uniknąć 23 powtarzanych cykli nagrzewania. W środowisku farmy ma to znaczenie, ponieważ nagrzewanie to martwa wydajność: drukarka zużywa czas kalendarzowy, energię i uwagę operatora, zanim zostanie wyprodukowany jakikolwiek zbywalny kształt.',
    },
    {
      type: 'paragraph',
      html: 'Czynnik transportu zapobiega udawaniu przez model, że układy wsadowe są darmowe. Każda część może dodać nie drukujące przejście, w którym dysza przecina stół, omija wyspy, wykonuje ruchy wyczesywania lub przechodzi do granicy następnego obiektu. Kalkulator używa średniej odległości przejścia i prędkości transportu do oszacowania tego narzutu w minutach. Czynnik ten jest mały w kompaktowych układach i bardziej widoczny, gdy części są rozrzucone po dużym stole.',
    },
    {
      type: 'table',
      headers: ['Zmienna wsadu', 'Znaczenie produkcyjne', 'Błąd planowania, któremu zapobiega'],
      rows: [
        ['N', 'Łączna liczba części w serii', 'Traktowanie stołu z dziesięcioma częściami jak dziesięciu izolowanych prac bez wspólnego nagrzewania.'],
        ['Tp', 'Czas druku jednej kompletnej części', 'Używanie tylko czasu warstwy z małego elementu zamiast oszacowania gotowej części.'],
        ['Tc', 'Czas nagrzewania stołu i dyszy', 'Ignorowanie czasu przed rozpoczęciem ekstruzji przy określaniu wydajności kolejki.'],
        ['Dtrans', 'Średnia odległość między częściami', 'Zakładanie, że gęsto wypełniony stół nie ma kary za ruch bez ekstruzji.'],
        ['Vtravel', 'Prędkość transportu głowicy', 'Zapominanie, że wolne profile transportu sprawiają, że rozłożone układy są mniej wydajne.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Czas wsadu jest najbardziej wrażliwy na nagrzewanie i ilość',
      badge: 'Planowanie wydajności',
      html: '<p>Jeśli nagrzewanie trwa 12 minut, a praca zawiera 30 części, tryb sekwencyjny spędza 360 minut tylko na powtarzaniu nagrzewania. Tryb wsadowy spędza te 12 minut raz. Dlatego ta sama drukarka może wyglądać dramatycznie bardziej produktywnie, gdy małe części są starannie ułożone.</p>',
    },
    { type: 'title', text: 'Dlaczego Drukowanie Sekwencyjne Nadal Wygrywa w Ryzykownych Pracach', level: 2 },
    {
      type: 'paragraph',
      html: 'Drukowanie sekwencyjne może wyglądać na wolniejsze, ponieważ drukarka powtarza nagrzewanie i czas przeczyszczania lub stabilizacji dla każdej jednostki. Zaletą jest izolacja. Jeśli część 17 ulegnie awarii w planie sekwencyjnym, poprzednie 16 sztuk może być już ukończonych i usuniętych. Jeśli część 17 ulegnie awarii we wsadzie z powodu przeciągnięcia dyszy, utraty przyczepności, pełzania termicznego lub problemu materiałowego, uszkodzony obiekt może uderzyć w sąsiednie części lub spowodować, że operator zezłomuje cały stół.',
    },
    {
      type: 'paragraph',
      html: 'Model ryzyka łączy historyczne prawdopodobieństwo awarii w zależności od liczby części. 3% wskaźnik awarii pojedynczej części nie oznacza, że wsad 24 części ma 3% ryzyka. Prawdopodobieństwo, że każda część się uda, wynosi <code>(1 - 0.03)^24</code>, a prawdopodobieństwo, że co najmniej jedna część ulegnie awarii, jest dopełnieniem. To sprawia, że duże wsady są mniej atrakcyjne, gdy proces nie jest stabilny.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Drukowanie wsadowe',
          description: 'Najlepsze, gdy proces jest stabilny, części mają silną przyczepność, układ stołu jest bezpieczny kolizyjnie, a czas nagrzewania dominuje w harmonogramie.',
          icon: 'mdi:grid',
          highlight: true,
          points: ['Jeden cykl nagrzewania', 'Wysoka przepustowość', 'Wyższa ekspozycja na wspólne awarie'],
        },
        {
          title: 'Drukowanie sekwencyjne',
          description: 'Najlepsze, gdy odrzuty są drogie, prace są wysokie, materiały są wrażliwe lub użytkownik chce odizolować każdą część od następnej.',
          icon: 'mdi:format-list-numbered',
          points: ['Izolacja awarii', 'Więcej powtarzanego narzutu', 'Wymaga planowania luzu'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Kompromis ryzyka produkcyjnego',
      items: [
        { pro: 'Drukowanie wsadowe zmniejsza jałowy czas nagrzewania i może ukończyć małe powtarzalne części w jednej bezobsługowej serii.', con: 'Jedna awaria przyczepności lub ekstruzji może zagrozić całemu stołowi i pochłonąć długi czas regeneracji operatora.' },
        { pro: 'Drukowanie sekwencyjne ułatwia walidację jednej jednostki, usunięcie jej i kontynuowanie z mniejszym skumulowanym stratą.', con: 'Powtarzane nagrzewanie i stabilizacja mogą pochłonąć więcej czasu niż rzeczywista geometria w przypadku małych części.' },
        { pro: 'Wsad może uprościć pakowanie, ponieważ wszystkie części kończą się razem.', con: 'Długi wsad naraża każdą jednostkę na te same wahania środowiskowe, problemy ze szpulą lub okres degradacji termicznej.' },
      ],
    },
    { type: 'title', text: 'Wybór Krytycznego Progu Ryzyka Wsadu', level: 2 },
    {
      type: 'paragraph',
      html: 'Krytyczny próg ryzyka to linia, w której kalkulator przełącza rekomendację z optymalizacji czasu na ochronę opłacalności. Warsztat prototypowy może tolerować 45% ryzyka wsadu, jeśli materiał jest tani, a operator eksperymentuje. Farma produkcyjna wysyłająca części klientom może używać 15-25% dla powszechnych materiałów i niższych progów dla prac nocnych, drogich polimerów inżynieryjnych lub części z dużą ilością obróbki końcowej.',
    },
    {
      type: 'table',
      headers: ['Próg', 'Dobry przypadek użycia', 'Interpretacja'],
      rows: [
        ['10-20%', 'Drogie części, prace nocne, zamówienia klientów o wysokiej wartości', 'Chroń niezawodność, nawet jeśli tryb wsadowy oszczędza czas.'],
        ['25-35%', 'Normalna dostrojona produkcja FDM ze znanym materiałem', 'Zrównoważony próg oszczędności czasu i ekspozycji na odrzuty.'],
        ['40-60%', 'Wewnętrzne prototypy lub tanie uchwyty', 'Akceptuje większe ryzyko, aby szybciez uwolnić wydajność drukarki.'],
        ['Powyżej 60%', 'Tylko eksploracja', 'Przydatne do zobaczenia potencjału czasowego, ale słabe jako reguła opłacalności produkcji.'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:clipboard-pulse-outline',
      title: 'Jak oszacować początkowy wskaźnik awarii',
      html: '<p>Przejrzyj ostatnie 50 do 200 porównywalnych wydruków na tej samej rodzinie drukarek. Policz prace, które wymagały przedruku, ręcznego ratowania lub odrzucenia przez klienta. Podziel awarie przez całkowitą liczbę prób, a następnie rozdziel według materiału i geometrii, gdy istnieje wystarczająca ilość danych. Wsporniki PLA, klipsy PETG, obudowy ASA i uszczelki TPU nie powinny dzielić jednego ogólnego numeru ryzyka.</p>',
    },
    {
      type: 'summary',
      title: 'Zasady progu ryzyka',
      items: [
        'Obniż próg, gdy koszt materiału, terminu lub obróbki końcowej jest wysoki.',
        'Podnieś go tylko wtedy, gdy wadliwe części są tanie, a kolejka korzysta z agresywnego łączenia wsadowego.',
        'Przelicz po zmianach procesu, takich jak nowa powierzchnia stołu, dysza, dostawca filamentu lub temperatura obudowy.',
      ],
    },
    { type: 'title', text: 'Przejścia Transportowe, Ruch Głowicy i Wydajność Układu', level: 2 },
    {
      type: 'paragraph',
      html: 'Przejścia transportowe to ukryty koszt wydajności drukowania w miejscu. Slicer może przeskakiwać z jednej części do drugiej wiele razy na warstwę, szczególnie gdy wiele obiektów współdzieli tę samą wysokość Z. Średnia odległość przejścia nie musi być idealna; musi tylko reprezentować, czy układ jest kompaktowy, umiarkowanie rozstawiony czy rozłożony na powierzchni roboczej. Kompaktowy układ ze średnimi przejściami 25 mm zachowuje się zupełnie inaczej niż układ na pełnym stole ze skokami 180 mm.',
    },
    {
      type: 'paragraph',
      html: 'Prędkość transportu powinna odzwierciedlać rzeczywisty profil, a nie reklamowane maksimum maszyny. Ograniczenia przyspieszenia, ustawienia firmware, opcje unikania przekraczania obwodów, Z-hop i strategia wyczesywania mogą sprawić, że efektywny transport będzie wolniejszy, niż sugeruje pole slicera. Jeśli maszyna używa konserwatywnego transportu dla delikatnych pierwszych warstw lub wysokich części, obniż wartość, aby uniknąć przeszacowania wydajności wsadu.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Drukowanie wsadowe', definition: 'Drukowanie wielu kopii lub obiektów w jednej wspólnej pracy na stole roboczym.' },
        { term: 'Drukowanie sekwencyjne', definition: 'Drukowanie jednego obiektu na raz przed przejściem do następnego, często z ograniczeniami luzu wokół głowicy narzędzia.' },
        { term: 'Odległość przejścia', definition: 'Średnia nieekstruzyjna odległość transportu potrzebna do przemieszczania się między częściami lub strefami druku.' },
        { term: 'Czas przeczyszczania lub stabilizacji', definition: 'Dodatkowy czas na jednostkę sekwencyjną na przygotowanie, stabilizację termiczną, wycieranie lub bezpieczne dla operatora zachowanie przy ponownym uruchomieniu.' },
        { term: 'Ryzyko krytyczne', definition: 'Maksymalne akceptowalne prawdopodobieństwo, że co najmniej jedna część we wsadzie ulegnie awarii.' },
      ],
    },
    {
      type: 'message',
      title: 'Luz kolizyjny ma znaczenie w prawdziwym trybie sekwencyjnym',
      ariaLabel: 'Ostrzeżenie o luzie w drukowaniu sekwencyjnym',
      html: '<p>Wiele slicerów ogranicza drukowanie sekwencyjne, ponieważ hotend, kanał wentylatora, gantry X lub zaciski stołu mogą kolidować z gotowymi częściami. Użyj tego kalkulatora do planowania, a następnie zweryfikuj luz sekwencyjny w slicerze przed zatwierdzeniem pracy.</p>',
    },
    { type: 'title', text: 'Jak Wykorzystać Wyniki do Optymalizacji Produkcji Addytywnej', level: 2 },
    {
      type: 'paragraph',
      html: 'Bezwzględna oszczędność czasu pokazuje, ile minut tryb wsadowy zyskuje lub traci w porównaniu z trybem sekwencyjnym. Względny procent wydajności normalizuje tę różnicę względem czasu sekwencyjnego, co jest przydatne przy porównywaniu prac o różnych rozmiarach. Oszczędność 20 minut w 40-minutowej serii jest operacyjnie ogromna; oszczędność 20 minut w 30-godzinnej serii może nie uzasadniać wyższego ryzyka.',
    },
    {
      type: 'paragraph',
      html: 'Rekomendacja łączy szybkość i opłacalność. Jeśli wsad jest szybszy, a ryzyko poniżej progu, narzędzie zaleca wsad. Jeśli ryzyko wsadu przekracza próg, zalecane jest drukowanie sekwencyjne, nawet jeśli jest wolniejsze. Jeśli wsad jest wolniejszy, ponieważ narzut przejść jest duży lub nagrzewanie jest małe, sekwencyjne wygrywa czasowo bez konieczności nadpisywania ryzyka.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Użyj kalkulatora przed rozmieszczeniem dużego stołu roboczego, aby plan produkcji opierał się na czasie kolejki i ekspozycji na awarie.',
        'Przeprowadź porównanie typu "co by było, gdyby" z niższym wskaźnikiem awarii po kalibracji, aby zobaczyć, jak ulepszenie procesu zmienia strategię.',
        'Zwiększ czas przeczyszczania, gdy prace sekwencyjne wymagają czyszczenia, przygotowania, inspekcji stołu lub interwencji operatora między jednostkami.',
        'Zmniejsz prędkość transportu podczas używania Z-hop, unikania przekraczania obwodów, delikatnych wysokich części lub ograniczeń przyspieszenia firmware.',
        'Rejestruj rzeczywiste wyniki serii i aktualizuj wskaźnik awarii, zamiast polegać na ogólnej zasadzie kciuka.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Nie optymalizuj tylko pod kątem najszybszego czasu zegarowego',
      badge: 'Koszt operacyjny',
      html: '<p>Nieudany 12-godzinny wsad może kosztować więcej niż czas pokazany na wyświetlaczu maszyny. Uwzględnij materiał, energię elektryczną, diagnozę operatora, utracone miejsce w kolejce, opóźnienie obróbki końcowej i wpływ terminu klienta przy podejmowaniu decyzji, czy oszczędność czasu jest warta skumulowanego ryzyka.</p>',
    },
    { type: 'title', text: 'Praktyczne Przykłady dla Przepływów Pracy Kalkulatora Czasu Druku 3D', level: 2 },
    {
      type: 'paragraph',
      html: 'Dla małych klipsów PLA z 20-minutowym czasem druku pojedynczej części i 10-minutowym nagrzewaniem, drukowanie wsadowe często dominuje. Wspólne nagrzewanie oszczędza dużą część pracy, a kompaktowe rozmieszczenie utrzymuje niski narzut przejść. Jeśli warsztat ma 1-2% wskaźnik awarii, ryzyko może pozostać akceptowalne dla umiarkowanych ilości. To klasyczny przypadek użycia drukowania wsadowego o wysokiej przepustowości.',
    },
    {
      type: 'paragraph',
      html: 'Dla wysokich wsporników PETG z marginalną przyczepnością, drukowanie sekwencyjne może być bezpieczniejsze. Nawet jeśli wsad oszczędza dwie godziny, jeden zawinięty róg może spowodować uderzenie dyszy, przesunięcie warstwy lub oderwanie obiektu, co zniszczy sąsiednie elementy. Kalkulator ujawnia różnicę między kuszącą oszczędnością czasu a profilem ryzyka, który nie pasuje już do zamierzeń produkcyjnych.',
    },
    {
      type: 'paragraph',
      html: 'Dla decyzji o wydajności drukowania w miejscu, uruchom tę samą część dwukrotnie: raz z bieżącym wskaźnikiem awarii i raz z docelowym po kalibracji. Jeśli zmniejszenie awarii z 6% do 2% odwraca rekomendację z sekwencyjnej na wsadową, najlepszą inwestycją może być czyszczenie stołu, dostrojenie pierwszej warstwy, suchy filament, stabilność obudowy lub sprawdzona strategia brimu, a nie kupowanie kolejnej drukarki.',
    },
    {
      type: 'summary',
      title: 'Lista kontrolna decyzji',
      items: [
        'Wsad, gdy nagrzewanie jest duże, układ jest kompaktowy, a historyczny wskaźnik awarii jest niski.',
        'Sekwencyjne, gdy każdy odrzut jest drogi, wysoki, ryzykowny lub może uszkodzić sąsiadów.',
        'Dostrój proces, gdy mała redukcja wskaźnika awarii odblokowuje znaczną wydajność wsadu.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
