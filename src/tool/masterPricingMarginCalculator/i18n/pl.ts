import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MasterPricingMarginCalculatorUI } from '../ui';

const slug = 'kalkulator-cen-druku-3d';
const title = 'Kalkulator Cen Druku 3D: Marża, Narzut i Pozycja Rynkowa';
const description =
  'Oblicz sugerowaną cenę detaliczną (PVP) dla druku 3D na podstawie kosztów produkcji, docelowej marży, narzutu oraz cen konkurencji z użyciem dokładnych wzorów finansowych.';

const currencyOptions = [
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
];

const faqData = [
  {
    question: 'Jaka jest różnica między marżą a narzutem w druku 3D?',
    answer:
      'Marża to zysk podzielony przez cenę sprzedaży. Narzut (markup) to zysk podzielony przez koszt wytworzenia. Narzut 50% przy koszcie 40,00 daje cenę 60,00 i marżę rzeczywistą 33,33%, a nie 50%.',
  },
  {
    question: 'Dlaczego docelowa marża musi wynosić poniżej 100%?',
    answer:
      'Wzór na marżę dzieli koszt przez (1 - stopa marży). Przy marży 100% mianownik wynosi zero, co oznacza brak skończonej ceny sprzedaży.',
  },
  {
    question: 'Czy cena konkurencji powinna decydować o mojej wycenie druku 3D?',
    answer:
      'Cena konkurencji jest sygnałem pozycjonowania, a nie zastępstwem dla obliczeń kosztów. Jeśli Twoja obliczona cena jest powyżej rynku, zweryfikuj koszty, wykończenie, czas realizacji i wartość dodaną przed udzieleniem rabatu.',
  },
  {
    question: 'Czy kalkulator uwzględnia podatki lub VAT?',
    answer:
      'Nie. Oblicza sugerowaną cenę detaliczną (PVP) przed opodatkowaniem. Należy doliczyć VAT, podatki lokalne, prowizje platform sprzedażowych lub opłaty transakcyjne zgodnie z lokalnymi zasadami fakturowania.',
  },
];

const howToData = [
  { name: 'Wprowadź całkowity koszt produkcji', text: 'Uwzględnij pełny koszt zlecenia, w tym koszty stałe, zmienne, materiał, czas pracy maszyny, robociznę i postprocessing.' },
  { name: 'Wybierz tryb marży lub narzutu', text: 'Zdecyduj, czy sugerowana cena (PVP) ma być obliczana na podstawie wzoru na marżę docelową, czy narzut.' },
  { name: 'Ustaw cenę referencyjną konkurencji', text: 'Wpisz porównywalną cenę rynkową, aby zobaczyć, czy Twoja wycena plasuje się powyżej, poniżej czy na poziomie konkurencji.' },
  { name: 'Skopiuj sugerowaną cenę', text: 'Użyj przycisku kopiowania, aby przenieść PVP, zysk netto, marżę rzeczywistą i porównanie rynkowe do oferty lub faktury.' },
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
    'kalkulator cen druku 3d',
    'kalkulator marzy zysku druku 3d',
    'narzut vs marza druk 3d',
    'kalkulator ceny detalicznej druku 3d',
    'wskaznik pozycjonowania na rynku',
  ],
  inLanguage: 'pl',
};

export const content: ToolLocaleContent<MasterPricingMarginCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Dane wyceny druku 3D',
    resultsAriaLabel: 'Wyniki kalkulacji ceny druku 3D',
    currencyLabel: 'Waluta',
    currencyOptions,
    currencyOptionSeparator: ' - ',
    costLabel: 'Całkowity koszt produkcji',
    competitorLabel: 'Cena referencyjna konkurencji',
    marginLabel: 'Marża docelowa',
    markupLabel: 'Narzut docelowy',
    conversionFactorLabel: 'Globalny współczynnik konwersji',
    conversionFactorUnit: 'x',
    conversionHint: 'Pozostaw 1, gdy koszty są już podane w wybranej walucie. Użyj do przeliczania cenników lub dostosowywania stawek.',
    modeLabel: 'Metoda PVP',
    marginModeLabel: 'Marża',
    markupModeLabel: 'Narzut',
    pvpRecommendedLabel: 'Sugerowany PVP',
    netProfitLabel: 'Zysk netto',
    realMarginLabel: 'Rzeczywista marża',
    marketComparisonLabel: 'Vs. konkurencja',
    marketPositionLabel: 'Pozycja rynkowa',
    aboveMarketLabel: 'Powyżej rynku',
    belowMarketLabel: 'Poniżej rynku',
    atMarketLabel: 'W cenie rynkowej',
    pvpByMarginLabel: 'PVP według marży',
    pvpByMarkupLabel: 'PVP według narzutu',
    formulaMarginLabel: 'PVP_marza = C / (1 - M / 100)',
    formulaMarkupLabel: 'PVP_narzut = C x (1 + U / 100)',
    sliderOutputSeparator: ' | ',
    copyLabel: 'Kopiuj cenę',
    copiedLabel: 'Skopiowano',
    copyTemplate: 'Sugerowany PVP: {pvp}; zysk netto: {profit}; marża rzeczywista: {margin}; porównanie rynkowe: {comparison}',
    pendingLabel: '-',
    currencySymbol: '\u20ac',
  },
  seo: [
    { type: 'title', text: 'Jak działa ten kalkulator cen druku 3D', level: 2 },
    {
      type: 'paragraph',
      html: 'Niezawodny <strong>kalkulator cen druku 3D</strong> musi bazować na całkowitym koszcie produkcji, a nie na samej wadze zużytego filamentu. Wartość kosztu powinna obejmować narzuty kosztów stałych, zmienne koszty amortyzacji maszyny, materiał, rezerwę na nieudane wydruki, robociznę, postprocessing, pakowanie oraz wszelkie bezpośrednie koszty zlecenia. Gdy ten koszt jest znany, sugerowaną cenę sprzedaży oblicza się za pomocą docelowej marży zysku lub narzutu. Metody te nie są zamienne. Pomylenie ich to jedna z najczęstszych przyczyn wyceniania zleceń przez firmy druku 3D w sposób, który wydaje się zyskowny, ale w rzeczywistości nie generuje planowanej marży.',
    },
    {
      type: 'paragraph',
      html: 'Kalkulator opiera się na ścisłych wzorach: <code>PVP_marza = C / (1 - M / 100)</code> oraz <code>PVP_narzut = C x (1 + U / 100)</code>. Zysk netto to zawsze <code>PVP - C</code>. Rzeczywista marża to zysk podzielony przez ostateczną cenę sprzedaży, a nie przez koszt wytworzenia. Suwak marży docelowej jest ograniczony poniżej 100%, ponieważ marża 100% wymagałaby zerowego kosztu lub nieskończonej ceny. Wynik końcowy zawsze ma dwa stałe miejsca po przecinku i nie używa separatora tysięcy, aby liczbę można było bezproblemowo wklejać do faktur, arkuszy kalkulacyjnych, systemów ERP czy ofert.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'M < 100', label: 'Ścisła walidacja marży', icon: 'mdi:shield-check-outline' },
        { value: '2 miejsca', label: 'Stały format waluty', icon: 'mdi:calculator-variant-outline' },
        { value: 'Live', label: 'Natychmiastowe przeliczanie suwakiem', icon: 'mdi:flash-outline' },
        { value: 'Rynek', label: 'Pozycjonowanie wobec konkurencji', icon: 'mdi:chart-timeline-variant' },
      ],
    },
    {
      type: 'tip',
      title: 'Stosuj jednolitą terminologię cenową w firmie',
      html: '<p>Ustal, czy w rozmowach handlowych używasz pojęcia marży, narzutu, czy obu tych wskaźników z wyraźnym oznaczeniem. Wyraz "40%" podany w wycenie bez określenia bazy może oznaczać dwie zupełnie różne ceny.</p>',
    },
    { type: 'title', text: 'Marża a narzut w druku 3D', level: 2 },
    {
      type: 'paragraph',
      html: 'Zagadnienie <strong>narzut vs marza druk 3d</strong> pojawia się zwykle wtedy, gdy właściciel firmy druku 3D zauważa, że 30-procentowy narzut na koszty nie tworzy 30-procentowej marży zysku. Narzut odnosi się do kosztu wytworzenia. Marża odnosi się do ceny sprzedaży. Jeśli wydrukowany element kosztuje 50,00 i jest sprzedawany za 75,00, zysk netto wynosi 25,00. Narzut wynosi 50,00%, ponieważ 25,00 podzielone przez 50,00 równa się 0,50. Marża wynosi 33,33%, ponieważ 25,00 podzielone przez 75,00 równa się 0,3333. Oba wskaźniki są poprawne, ale odpowiadają na inne pytania biznesowe.',
    },
    {
      type: 'table',
      headers: ['Koszt', 'Cel', 'Wzór', 'PVP', 'Zysk netto', 'Marża rzeczywista'],
      rows: [
        ['50.00', '50% narzutu', '50.00 x 1.50', '75.00', '25.00', '33.33%'],
        ['50.00', '50% marży', '50.00 / 0.50', '100.00', '50.00', '50.00%'],
        ['80.00', '25% narzutu', '80.00 x 1.25', '100.00', '20.00', '20.00%'],
        ['80.00', '25% marży', '80.00 / 0.75', '106.67', '26.67', '25.00%'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Wysoki narzut może wciąż oznaczać skromną marżę',
      badge: 'Precyzja finansowa',
      html: '<p>Narzut 100% podwaja koszt, ale marża wynosi jedynie 50%. Jeśli Twoja firma potrzebuje rzeczywistej marży na poziomie 60%, aby pokryć koszty ogólne i rozwój, narzut 100% będzie niewystarczający.</p>',
    },
    {
      type: 'glossary',
      items: [
        { term: 'PVP', definition: 'Sugerowana cena detaliczna sprzedaży przed opodatkowaniem, chyba że zasady wyceny stanowią inaczej.' },
        { term: 'Koszt C', definition: 'Całkowity koszt produkcji przypisany do zadania przed doliczeniem zysku.' },
        { term: 'Marża M', definition: 'Zysk podzielony przez cenę sprzedaży, wyrażony w procentach.' },
        { term: 'Narzut U', definition: 'Zysk podzielony przez koszt wytworzenia, wyrażony w procentach.' },
        { term: 'Zysk netto', definition: 'Cena sprzedaży minus koszt produkcji przed potrąceniem podatków i kosztów finansowych.' },
      ],
    },
    { type: 'title', text: 'Co składa się na całkowity koszt produkcji', level: 2 },
    {
      type: 'paragraph',
      html: 'Profesjonalny <strong>kalkulator ceny detalicznej druku 3D</strong> jest tak dokładny, jak koszt wprowadzony na starcie. Przy rzetelnej wycenie koszt nie powinien oznaczać wyłącznie wagi filamentu pomnożonej przez cenę szpuli. Musi obejmować zużycie energii, amortyzację dyszy i folii FEP, ubytki żywicy, przygotowanie stołu roboczego, czas operatora na slicing, usuwanie podpór, szlifowanie, malowanie, kontrolę jakości, pakowanie, opłaty transakcyjne i margines na nieudane wydruki. Kalkulator zakłada, że podany koszt wejściowy zawiera już wszystkie te składowe.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Uwzględnij zmienny koszt materiałów: filament, żywica, proszek, podpory, straty na czyszczenie i tratwę (raft).',
        'Uwzględnij koszt czasu pracy maszyny wynikający z amortyzacji, konserwacji, energii i żywotności eksploatacyjnej.',
        'Uwzględnij robociznę za przygotowanie, nadzór, postprocessing, pakowanie i obsługę klienta dla danego zlecenia.',
        'Uwzględnij materiały pomocnicze do wykończenia: podkłady, farby, papiery ścierne, IPA, rękawice, taśmy i pasty polerskie.',
        'Załóż określoną rezerwę na nieudane wydruki przy trudnych geometriach, rygorystycznych tolerancjach czy długich drukach nocnych.',
      ],
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Koszt samego materiału',
          description: 'Szybki do amatorskich szacunków, lecz zbyt wąski do wycen komercyjnych.',
          icon: 'mdi:printer-3d-nozzle',
          points: ['Ignoruje robociznę', 'Ignoruje zużycie maszyn', 'Zaniża wartość gotowych wyrobów'],
        },
        {
          title: 'Koszt produkcji',
          description: 'Najlepsza baza dla marży i narzutu, reprezentująca zlecenie przed doliczeniem zysku.',
          icon: 'mdi:factory',
          highlight: true,
          points: ['Zawiera czas maszynowy', 'Zawiera robociznę', 'Umożliwia powtarzalne oferty'],
        },
        {
          title: 'Cena w pełni załadowana',
          description: 'Może już zawierać koszty ogólne i zysk, więc ponowne doliczanie marży grozi podwójnym liczeniem.',
          icon: 'mdi:receipt-text-outline',
          points: ['Pomocna w audytach', 'Ryzykowna jako wejście do kalkulatora', 'Wymaga jasnej polityki księgowej'],
        },
      ],
    },
    {
      type: 'card',
      icon: 'mdi:calculator-variant-outline',
      title: 'Kalkulator nie szacuje kosztów za Ciebie',
      html: '<p>Przelicza on znany koszt na sugerowaną cenę. Jeśli koszt jest niepewny, najpierw zbuduj model kosztowy dla materiału, czasu, robocizny i wykończenia, a potem użyj tego narzędzia do ustalenia zysku i pozycji rynkowej.</p>',
    },
    { type: 'title', text: 'Jak wyceniać wydruki 3D z docelową marżą', level: 2 },
    {
      type: 'paragraph',
      html: 'Osoby szukające informacji <strong>jak wyceniać wydruki 3D</strong> często zaczynają od prostego mnożnika. Wycena oparta na marży jest jednak lepsza, gdy firma posiada zdefiniowany cel rentowności. Jeśli wymagana marża wynosi 40%, a koszt produkcji to 60,00, cena wynosi <code>60,00 / (1 - 0,40)</code>, czyli dokładnie 100,00. Zysk to 40,00, a marża rzeczywista to 40,00%. Ta metoda jest powszechna, gdy warsztat chce, aby każda grupa produktów wnosiła spójny wkład w przychody po pokryciu kosztów.',
    },
    {
      type: 'paragraph',
      html: 'Kluczową zasadą jest to, że marża nie może osiągnąć 100%. Przy marży 99% koszt 10,00 staje się ceną 1000,00. Przy marży 99,99% ten sam koszt zamienia się w 100000,00. To zachowanie matematyczne nie jest błędem; pokazuje, dlaczego cele marżowe muszą być realne rynkowo. Bardzo wysokie wymagania marżowe oznaczają zwykle, że model kosztowy jest zaniżony, produkt ma wyjątkową wartość lub oferta dotyczy niszowego rynku.',
    },
    {
      type: 'table',
      headers: ['Marża docelowa', 'Mnożnik kosztu', 'Koszt 40.00 staje się', 'Przypadek użycia'],
      rows: [
        ['20%', '1.2500x', '50.00', 'Wysoce konkurencyjny druk seryjny z niskim nakładem obsługi.'],
        ['35%', '1.5385x', '61.54', 'Rutynowe zlecenia profesjonalne ze standardowymi kosztami ogólnymi.'],
        ['50%', '2.0000x', '80.00', 'Wymagające usługi, wykończenie ręczne, zlecenia ekspresowe lub małe serie.'],
        ['70%', '3.3333x', '133.33', 'Wysoka wartość specjalistyczna, trudne projekty, pozycjonowanie premium.'],
      ],
    },
    {
      type: 'summary',
      title: 'Lista kontrolna wyceny marżowej',
      items: [
        'Używaj całkowitego kosztu produkcji jako bazy.',
        'Trzymaj docelową marżę poniżej 100%.',
        'Porównaj uzyskany PVP z ceną konkurencji przed wysłaniem oferty.',
        'Jeśli cena jest wysoka, zbadaj czynniki kosztowe przed obniżeniem zysku.',
      ],
    },
    { type: 'title', text: 'Jak stosować narzut i nie mylić go z marżą', level: 2 },
    {
      type: 'paragraph',
      html: 'Wycena narzutowa jest przydatna, gdy warsztat stosuje stały mnożnik do określonych kategorii kosztów. Na przykład serwis może dodawać 80% narzutu do standardowych wydruków, 120% narzutu do wykończonych prototypów i 200% narzutu do drobnych prac pilnych. Wzór na narzut jest bezpośredni: koszt pomnożony przez jeden plus stopa narzutu. Koszt 35,00 z narzutem 80% daje cenę 63,00. Zysk netto to 28,00, lecz rzeczywista marża na tej sprzedaży wynosi 44,44%, a nie 80%.',
    },
    {
      type: 'proscons',
      title: 'Metoda marżowa vs wycena narzutem',
      items: [
        { pro: 'Metoda marżowa bezpośrednio odpowiada udziałowi zysku w przychodach.', con: 'Działy sprzedaży muszą rozumieć, dlaczego wysokie marże generują nieliniowy wzrost cen.' },
        { pro: 'Metoda narzutowa jest szybka i łatwa do nałożenia na arkusze kosztów.', con: 'Może maskować realną marżę, jeśli pracownicy mylą procent narzutu z zyskownością.' },
        { pro: 'Wyświetlanie obu wzorów ujawnia faktyczny efekt finansowy.', con: 'Firma wciąż potrzebuje jasnej polityki określającej, która z liczb staje się ostatecznym PVP.' },
      ],
    },
    {
      type: 'message',
      title: 'Kiedy narzut jest praktyczny',
      ariaLabel: 'Porada dotycząca narzutu',
      html: '<p>Narzut sprawdza się przy prostych regułach wewnętrznych: dodaj 60% do powtarzalnego FDM, 90% do figurek z żywicy lub 150% do zleceń ekspresowych. Używaj wskaźnika rzeczywistej marży, by sprawdzać, czy reguły te spełniają cele biznesowe.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Narzut nie jest błędem',
      badge: 'Uwaga dotycząca metody',
      html: '<p>Narzut to prawidłowy język cenowy, o ile każdy rozumie jego podstawę. Problemem nie jest sam narzut, ale nazywanie go „marżą” w ofertach lub arkuszach kalkulacyjnych.</p>',
    },
    { type: 'title', text: 'Cena konkurencji a pozycjonowanie rynkowe', level: 2 },
    {
      type: 'paragraph',
      html: 'Cena referencyjna konkurencji zmienia ten kalkulator w komercyjne narzędzie decyzyjne, a nie tylko suchy arkusz ze wzorami. Jeśli sugerowana wycena PVP jest powyżej ceny referencyjnej, wynik wyświetli się z ostrzegawczym kolorem. Nie oznacza to automatycznie błędu w ofercie. Wyższa cena może być uzasadniona krótszym czasem dostawy, lepszą identyfikowalnością materiałów, lepszą jakością powierzchni, wsparciem inżynieryjnym, kontrolą wymiarową, odbiorem lokalnym lub mniejszym ryzykiem. Handlowiec powinien jednak wiedzieć, skąd wynika ta różnica, zanim wyśle wycenę.',
    },
    {
      type: 'paragraph',
      html: 'Porównanie z konkurencją powinno dotyczyć produktów o zbliżonym standardzie. Surowy detal FDM z widocznymi warstwami to nie to samo, co wyszlifowany, zagruntowany i pomalowany prototyp. Oferta z anonimowej platformy z niepewnym materiałem, luźną tolerancją i długą wysyłką to nie to samo, co lokalna firma inżynieryjna sprawdzająca pliki CAD i gwarantująca pasowanie. Wpisz cenę konkurenta, która najlepiej odpowiada temu samemu materiałowi, procesowi, wykończeniu, ilości i terminowi dostawy.',
    },
    {
      type: 'table',
      headers: ['Pozycja', 'Interpretacja', 'Zalecane działanie'],
      rows: [
        ['Poniżej konkurencji', 'Oferta jest atrakcyjna, lecz może pozostawiać zysk na stole.', 'Sprawdź, czy marża docelowa nie jest zbyt niska lub czy konkurent oferuje mniejszy zakres usług.'],
        ['Blisko konkurencji', 'Cena jest rynkowo zbieżna z referencją.', 'Użyj jakości obsługi, czasu realizacji i niezawodności jako czynników wyróżniających.'],
        ['Powyżej konkurencji', 'Wycena wymaga uzasadnienia lub rewizji kosztów.', 'Przeanalizuj czynniki kosztowe, zakres wykończenia i pilność przed udzieleniem rabatu.'],
      ],
    },
    {
      type: 'tip',
      title: 'Nie bierz udziału w wojnie cenowej',
      html: '<p>Firma z realnymi kosztami pracy, skalibrowanymi maszynami, certyfikowanymi materiałami i kompetencjami wykończeniowymi nie musi automatycznie równać do niskich cen referencyjnych. Konkuruj wartością, którą klient może zweryfikować.</p>',
    },
    { type: 'title', text: 'Wybór waluty i globalny współczynnik konwersji', level: 2 },
    {
      type: 'paragraph',
      html: 'Wycenianie międzynarodowe wymaga spójnego zarządzania finansami. Selektor waluty zmienia symbol i przelicza wprowadzone kwoty według tych samych wskaźników referencyjnych, które są stosowane w całej pakiecie. Globalny współczynnik konwersji to oddzielny mnożnik komercyjny. Użyj wartości <code>1</code>, gdy koszt produkcji i cena konkurencji są już podane w docelowej walucie. Użyj niestandardowego współczynnika, jeśli firma chce zastosować regionalny cennik, rezerwę na wahania kursowe lub marżę dystrybutora.',
    },
    {
      type: 'paragraph',
      html: 'Współczynnik ten wpływa na kwoty pieniężne, a nie na procenty marży czy narzutu. To kluczowe, ponieważ wskaźniki procentowe powinny zachować swoje znaczenie niezależnie od waluty. Marża 35% w euro to wciąż marża 35% w dolarach po przeliczeniu kosztu i referencji konkurencji. Wyniki pozostają zaokrąglone do dwóch miejsc po przecinku bez separatorów tysięcy, co pozwala na czyste kopiowanie danych do arkuszy i pól wycen odrzucających znaki grupowania.',
    },
    {
      type: 'summary',
      title: 'Zasady dotyczące waluty i współczynników',
      items: [
        'Wybierz walutę klienta przed skopiowaniem sugerowanej ceny.',
        'Pozostaw współczynnik na poziomie 1 dla standardowych wycen w walucie lokalnej.',
        'Używaj współczynnika do kontrolowanego skalowania komercyjnego, a nie do zmiany definicji marży.',
        'Podatki i zaokrąglenia faktur rozliczaj poza tym kalkulatorem cen netto.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Podatki i opłaty platform są naliczane osobno',
      badge: 'Polityka ofertowa',
      html: '<p>Jeśli VAT, lokalny podatek obrotowy, prowizje płatnicze czy ubezpieczenie przesyłki muszą zostać odzyskane, dodaj je zgodnie z polityką firmy po obliczeniu produkcyjnej ceny PVP.</p>',
    },
    { type: 'title', text: 'Budowanie strategii cenowej usług druku 3D', level: 2 },
    {
      type: 'paragraph',
      html: 'Skuteczna <strong>strategia cenowa usług druku 3D</strong> łączy dokładność kosztową, dyscyplinę marżową i świadomość rynku. Dokładność kosztowa chroni przed sprzedażą poniżej kosztów wytworzenia. Dyscyplina marżowa zapobiega erozji zysków przez nieprzemyślane rabaty. A świadomość rynku zapobiega oderwaniu oferty od tego, co klienci mogą porównać. Ten kalkulator znajduje się dokładnie na styku tych trzech obszarów.',
    },
    {
      type: 'list',
      icon: 'mdi:target',
      items: [
        'Określ osobne cele marżowe dla druku standardowego, prototypów inżynieryjnych, modeli wizualnych, prac ekspresowych i serii produkcyjnych.',
        'Stosuj narzuty kosztów tylko wtedy, gdy pracownicy widzą jednocześnie rzeczywistą marżę, jaką ta reguła generuje.',
        'Śledź współczynnik wygranych ofert według pozycji rynkowej, aby uzasadniać wyceny premium twardymi danymi, a nie domysłami.',
        'Analizuj rzeczywisty zysk po realizacji zlecenia i aktualizuj model kosztowy, jeśli robocizna, odpady lub postprocessing były niedoszacowane.',
        'Ustal minimalną wartość zamówienia dla małych zleceń, gdzie czas wyceny, ustawienia i komunikacji przewyższa koszt fizycznej produkcji.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:chart-timeline-variant',
      title: 'Analizuj zysk z druku 3D po zamknięciu zlecenia',
      html: '<p>Planowany zysk netto jest przydatny przed wyceną, lecz to zysk osiągnięty uczy i usprawnia system cenowy. Porównuj koszty szacowane z rzeczywistymi i dostosowuj przyszłe marże docelowe dla poszczególnych grup produktowych.</p>',
    },
    {
      type: 'summary',
      title: 'Zalecany przepływ pracy przy wycenie',
      items: [
        'Oszacuj pełny koszt produkcji.',
        'Wybierz świadomie marżę lub narzut.',
        'Sprawdź marżę rzeczywistą i zysk netto.',
        'Porównaj z adekwatną ofertą konkurencji.',
        'Skopiuj PVP do oferty, a podatki rozlicz osobno.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
