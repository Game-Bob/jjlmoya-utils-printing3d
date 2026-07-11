import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BulkFilamentRoiEstimatorUI } from '../ui';

const slug = 'kalkulator-oplacalnosci-filamentu-hurtowego';
const title = 'Kalkulator ROI Filamentu Hurtowego';
const description = 'Porownaj szpule filamentu 1kg z szpulami hurtowymi 3kg, 5kg lub niestandardowymi, z uwzglednieniem ryzyka wilgoci, rzeczywistych oszczednosci i lokalnego formatu waluty.';

const faqData = [
  {
    question: 'Czy szpula filamentu 5kg jest zawsze tansza niz zakup pieciu szpul 1kg?',
    answer: 'Nie. Jest tansza tylko wtedy, gdy koszt na gram jest nizszy i mozesz skonsumowac material, zanim wilgoc obnizy jakosc wydruku. Wolne zuzycie moze zamienic rabat hurtowy w marnotrawstwo.',
  },
  {
    question: 'Dlaczego kalkulator odejmuje kare za ryzyko?',
    answer: 'Kara szacuje utrate wartosci, gdy przewidywany czas zuzycia jest dluzszy niz bezpieczne okno przechowywania. Nie jest to konwersja kursu walut ani laboratoryjny model wilgotnosci; jest to korekta ryzyka planistycznego.',
  },
  {
    question: 'Czy potrzebuje kursow walut na zywo?',
    answer: 'Nie. Narzedzie uzywa lokalnej tabeli przyblizonych kursow do konwersji widocznych cen przy zmianie waluty. Zachowuje rownowaznosc bez kontaktowania sie z serwerem, wiec ostateczne decyzje zakupowe powinny opierac sie na cenie wyswietlanej przez sklep lub bank.',
  },
  {
    question: 'Jaki bezpieczny czas przechowywania powinienem wprowadzic dla PLA, PETG, TPU lub Nylonu?',
    answer: 'Uzyj okresu, w ktorym mozesz utrzymac dany material w suchosci w swoim srodowisku. PLA moze tolerowac dluzsze przechowywanie niz Nylon czy TPU, ale otwarte pomieszczenie, wilgotny klimat lub slabe zamkniecie worka moga drastycznie skrocic bezpieczne okno.',
  },
];

const howToData = [
  {
    name: 'Wprowadz cene standardowej szpuli',
    text: 'Wpisz cene szpuli 1kg, ktora normalnie kupujesz. Standardowa wage szpuli mozna dostosowac, jesli dostawca uzywa innego formatu.',
  },
  {
    name: 'Wprowadz oferte hurtowa',
    text: 'Wybierz 3kg, 5kg lub niestandardowa wage i wpisz pelna cene tej wiekszej szpuli w tej samej walucie.',
  },
  {
    name: 'Zamodeluj ryzyko przechowywania',
    text: 'Dodaj swoje miesieczne zuzycie i maksymalny czas przechowywania, ktory uwazasz za bezpieczny, zanim wilgoc, kruchosci lub koniecznosc suszenia stana sie rzeczywistym kosztem.',
  },
  {
    name: 'Odczytaj rzeczywiste oszczednosci',
    text: 'Uzyj rzeczywistych oszczednosci jako sygnalu zakupowego, poniewaz obejmuja one zarówno rabat hurtowy, jak i kare za degradacje.',
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

export const content: ToolLocaleContent<BulkFilamentRoiEstimatorUI> = {
  slug,
  title,
  description,
  ui: {
    currencyLabel: 'Waluta',
    unitSystemLabel: 'Jednostki',
    metricLabel: 'Metryczne',
    imperialLabel: 'Imperialne',
    standardTitle: 'Standardowa szpula',
    bulkTitle: 'Szpula hurtowa',
    consumptionTitle: 'Zuzycie i przechowywanie',
    standardWeightLabel: 'Standardowa waga',
    standardPriceLabel: 'Cena standardowej szpuli',
    bulkWeightLabel: 'Waga hurtowa',
    bulkPresetThreeMetricLabel: '3 kg',
    bulkPresetFiveMetricLabel: '5 kg',
    bulkPresetThreeImperialLabel: '6,6 lb',
    bulkPresetFiveImperialLabel: '11 lb',
    otherWeightLabel: 'Inne',
    bulkPriceLabel: 'Cena szpuli hurtowej',
    customWeightLabel: 'Niestandardowa waga hurtowa',
    monthlyUseLabel: 'Miesieczne zuzycie',
    safeStorageLabel: 'Bezpieczne okno przechowywania',
    kgUnit: 'kg',
    lbUnit: 'lb',
    monthsUnit: 'miesiace',
    realSavingsLabel: 'Rzeczywiste oszczednosci po ryzyku',
    grossSavingsLabel: 'Oszczednosci brutto',
    riskPenaltyLabel: 'Kara za ryzyko wilgoci',
    breakEvenLabel: 'Czas zuzycia',
    viabilityLabel: 'Oplacalnosc',
    tableMetricLabel: 'Metryczne',
    tableStandardLabel: 'Szpula 1kg',
    tableStandardImperialLabel: 'Szpula 2,2lb',
    tableBulkLabel: 'Szpula hurtowa',
    costPerGramMetric: 'Koszt na gram',
    costPerOunceMetric: 'Koszt na uncje',
    totalSpoolMetric: 'Cena szpuli',
    usableWindowMetric: 'Okno zuzycia',
    profitableLabel: 'Oplacalne',
    neutralLabel: 'Neutralne',
    poorLabel: 'Slaba wartosc',
    humidityWarningTitle: 'Ryzyko degradacji przez wilgoc',
    humidityWarning: 'Ryzyko degradacji: zakup tej szpuli moze przyniesc straty, jesli nie masz systemu suszenia lub szczelnego przechowywania.',
    safeMessage: 'Ryzyko przechowywania miesci sie w wybranym bezpiecznym oknie. Przechowuj szpule szczelnie zamknieta i sucha, aby zachowac oczekiwane oszczednosci.',
  },
  seo: [
    {
      type: 'title',
      text: 'Jak zdecydowac, czy filament hurtowy jest rzeczywiscie tanszy',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Szpula filamentu 3kg lub 5kg wyglada atrakcyjnie, poniewaz cena za kilogram jest zazwyczaj nizsza niz pojedynczej szpuli 1kg. Bledem jest porownywanie tylko calkowitej kwoty przy kasie. Prawidlowe porownanie normalizuje obie oferty do <strong>kosztu na gram</strong>, mnozy roznice przez ilosc materialu, ktory faktycznie kupisz, a nastepnie zadaje pytanie, czy material pozostanie drukowalny, az go skonsumujesz.',
    },
    {
      type: 'paragraph',
      html: 'Podstawowy wzor jest prosty: podziel cene kazdej szpuli przez jej wage w gramach. Jesli szpula 1kg kosztuje 24.99, a szpula 5kg kosztuje 89.99, koszt szpuli 1kg wynosi 0.02499 na gram, a szpuli hurtowej 0.017998 na gram. Pozorna oszczednosc to roznica w gramach pomnozona przez 5000 gramow. Ta liczba jest uzyteczna, ale wciaz niekompletna, jesli szpula bedzie lezec otwarta przez miesiace.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '1000g', label: 'Masa referencyjna typowej szpuli filamentu biurkowego' },
        { value: '3-5kg', label: 'Typowy format hurtowy, przy ktorym rabaty staja sie widoczne' },
        { value: '0 API', label: 'Rownowaznosc walut uzywa lokalnych przyblizonych kursow zamiast bezposredniego wywolania serwera' },
      ],
    },
    {
      type: 'table',
      headers: ['Pytanie', 'Co wprowadzic', 'Dlaczego to wazne'],
      rows: [
        ['Co zwykle kupuje?', 'Cena szpuli 1kg', 'To ustawia bazowy koszt na gram.'],
        ['Jaka jest oferta hurtowa?', 'Calkowita cena i waga hurtowa', 'To tworzy koszt na gram po rabacie.'],
        ['Jak szybko drukuje?', 'Kg zuzywane miesiecznie', 'To szacuje, jak dlugo szpula bedzie przechowywana.'],
        ['Jak dobre jest moje przechowywanie?', 'Bezpieczne miesiace przed degradacja', 'To okresla, kiedy zaczyna sie kara za ryzyko.'],
      ],
    },
    {
      type: 'title',
      text: 'Dlaczego wilgoc zmienia obliczenia ROI',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Filament nie jest ekwiwalentem gotowki bezpiecznie lezacym na polce. Wiele polimerow absorbuje wilgoc z powietrza, a mokry filament moze drukowac z pecherzami, naciaganiem, kruchym wytlaczaniem, metnymi powierzchniami, slaba przyczepnoscia warstw i niespojnym przeplywem. Dokladna predkosc zalezy od materialu, wilgotnosci, opakowania oraz tego, czy szpula jest przechowywana w suchym pojemniku, szczelnym worku czy na otwartym uchwycie.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Ukryty tryb awarii szpuli hurtowej',
      badge: 'Ryzyko planistyczne',
      html: 'Szpula 5kg moze byc zlym zakupem, nawet jesli cena za gram jest doskonala. Jesli twoja drukarka zuzywa 0.5kg miesiecznie, a twoje bezpieczne okno przechowywania wynosi 3 miesiace, ta szpula potrzebuje okolo 10 miesiecy do skonsumowania. Rabat musi byc wystarczajaco duzy, aby pokryc dodatkowe koszty suszenia, zamykania, nieudanych wydrukow lub ryzyka zmarnowanego materialu.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Szybki uzytkownik',
          description: 'Mala farma drukarska, tworca cosplayu lub partia produkcyjna moze szybko skonsumowac od 3kg do 5kg. Filament hurtowy zwykle ma sens, poniewaz czas przechowywania jest krotki.',
          points: ['Wysokie miesieczne zuzycie', 'Krotka ekspozycja na polce', 'Rabat staje sie realnie zaoszczedzonymi pieniedzmi'],
        },
        {
          title: 'Sporadyczny uzytkownik hobbystyczny',
          description: 'Uzytkownik drukujacy w weekendy lub okazjonalnie wykonujacy naprawy moze potrzebowac wielu miesiecy na skonsumowanie duzej szpuli. Ryzyko wilgoci moze zniweczyc rabat.',
          points: ['Niskie miesieczne zuzycie', 'Dlugi czas otwarcia', 'Suche przechowywanie ma wieksze znaczenie'],
        },
        {
          title: 'Uzytkownik materialow technicznych',
          description: 'Materialy takie jak Nylon, TPU, mieszanki PC i niektore gatunki PETG czesto wymagaja bardziej rygorystycznej dyscypliny suszenia. Zakupy hurtowe powinny bycz laczone ze sprzetem do przechowywania.',
          points: ['Wyzsza wrazliwosc na wilgoc', 'Suchy pojemnik zalecany', 'Prog kary powinien byc konserwatywny'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Co oznacza liczba rzeczywistych oszczednosci',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Narzedzie najpierw pokazuje oszczednosci brutto, a nastepnie odejmuje kare za degradacje, gdy szacowany czas zuzycia przekracza bezpieczne okno przechowywania. Kara ta jest celowo konserwatywna, a nie laboratoryjna prognoza. Reprezentuje ekonomiczna rzeczywistosc, ze mokry lub przestarzaly filament czesto generuje nieoczywiste koszty: prad do suszenia, dodatkowa obsluge, nieudane wydruki, zapchane dysze, wady powierzchni i mozliwosc, ze czesc szpuli stanie sie nieodpowiednia do widocznych lub konstrukcyjnych zastosowan.',
    },
    {
      type: 'list',
      items: [
        'Dodatnie rzeczywiste oszczednosci oznaczaja, ze rabat hurtowy przetrwa korekte ryzyka przechowywania.',
        'Neutralne oznacza, ze decyzja zalezy od wygody, dostepnosci koloru, kosztow wysylki i tego, czy juz posiadasz suchy pojemnik.',
        'Slaba wartosc oznacza, ze szpula hurtowa nie jest tansza na gram lub ze oszczednosc skorygowana o ryzyko jest ujemna.',
        'Komunikat ostrzegawczy pojawia sie, gdy miesiace zuzycia sa wieksze niz wprowadzone bezpieczne okno przechowywania.',
      ],
    },
    {
      type: 'proscons',
      title: 'Kompromisy przy zakupie filamentu hurtowego',
      items: [
        { pro: 'Nizszy koszt na gram przy drukowaniu duzych objetosci.', con: 'Wiecej kapitalu zamrozonego w jednym materiale, kolorze i partii dostawcy.' },
        { pro: 'Mniej zmian szpul podczas dlugich serii produkcyjnych.', con: 'Wieksza odslonieta masa moze ulec degradacji przed skonsumowaniem.' },
        { pro: 'Mniej odpadow opakowaniowych na kilogram.', con: 'Duze szpule moga wymagac mocniejszych uchwytow lub zewnetrznych stojakow.' },
        { pro: 'Przydatne do powtarzalnych zadan farmy i produkcji seryjnej.', con: 'Zly wybor dla rzadkich kolorow, materialow eksperymentalnych lub powolnego uzytku hobbystycznego.' },
      ],
    },
    {
      type: 'title',
      text: 'Jak wybrac bezpieczne okno przechowywania',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bezpieczne okno przechowywania nie jest uniwersalna stala materialowa. Jest to czas, przez ktory osobisto ufasz, ze filament pozostanie drukowalny w twoich warunkach przechowywania. Szczelny worek ze swiezym srodkiem osuszajacym w suchym pomieszczeniu to cos zupelnie innego niz otwarta szpula obok drukarki w wilgotnym garazu. Dla konserwatywnej decyzji zakupowej wprowadz liczbe miesiecy, po ktorej zaczalbyc suszyc szpule przed waznymi wydrukami.',
    },
    {
      type: 'table',
      headers: ['Sytuacja', 'Sugerowane zachowanie planistyczne', 'Powod'],
      rows: [
        ['Otwarty uchwyt szpuli w wilgotnym pomieszczeniu', 'Uzyj krotkiego bezpiecznego okna', 'Ekspozycja na wilgoc jest ciagla.'],
        ['Szczelne pudelko ze srodkiem osuszajacym', 'Uzyj dluzszego bezpiecznego okna', 'Szpula jest chroniona pomiedzy wydrukami.'],
        ['Suchy pojemnik zasilajacy drukarke', 'Uzyj dluzszego, ale realistycznego okna', 'Zarowno drukowanie, jak i przechowywanie sa kontrolowane.'],
        ['Nylon, TPU, PC lub rozpuszczalne podpory', 'Badz konserwatywny', 'Te materialy moga szybko stac sie problematyczne podczas drukowania, gdy sa wilgotne.'],
        ['PLA uzywane do surowych prototypow', 'Tolerancja ryzyka moze byc wyzsza', 'Drobne wady kosmetyczne moga byc akceptowalne dla niekrytycznych czesci.'],
      ],
    },
    {
      type: 'tip',
      title: 'Uzyj kalkulatora przed koncem promocji',
      html: 'Blyskawiczne promocje czesto sprawiaja, ze szpule hurtowe wydaja sie pilne. Wprowadz cene promocyjna, jesli to mozliwe z wliczona wysylka, i swoje realistyczne miesieczne zuzycie. Jesli czas zuzycia jest dluzszy niz okno przechowywania, promocja musi byc wystarczajaco silna, aby pokryc dodatkowe ryzyko.',
    },
    {
      type: 'title',
      text: 'Konwersja walut bez API kursow wymiany',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ten kalkulator jest celowo zaprojektowany jako kliencki. Nie pobiera kursow walut na zywo, ale selektor walut nadal stosuje lokalny mnoznik konwersji, gdy uzytkownik zmienia walute. Oznacza to, ze szpula wprowadzona jako 24.99 EUR staje sie przyblizonym odpowiednikiem w USD, GBP, JPY lub innej obslugiwanej walucie, zamiast jedynie zastapic symbol. Kursy sa szacunkami planistycznymi, wiec ceny w kasie, opiaty kart, podatki i specyficzne dla rynku roznice konwersji powinny byc sprawdzone przed zakupem.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Koszt na gram', definition: 'Cena szpuli podzielona przez calkowita liczbe gramow filamentu. Jest to znormalizowana jednostka uzywana do sprawiedliwego porownania.' },
        { term: 'Oszczednosci brutto', definition: 'Przewaga cenowa przed uwzglednieniem wilgoci lub ryzyka przechowywania.' },
        { term: 'Kara za ryzyko', definition: 'Planistyczne odliczenie stosowane, gdy szpula potrzebuje wiecej czasu na skonsumowanie niz bezpieczne okno przechowywania.' },
        { term: 'Rzeczywiste oszczednosci', definition: 'Oszczednosci brutto pomniejszone o kare za ryzyko. To glowny sygnal zakupowy.' },
        { term: 'Okno zuzycia', definition: 'Waga szpuli hurtowej podzielona przez szacowane miesieczne zuzycie.' },
      ],
    },
    {
      type: 'summary',
      title: 'Praktyczna zasada zakupu',
      items: [
        'Kupuj hurtowo, gdy rzeczywiste oszczednosci sa wyraznie dodatnie, a okno zuzycia pasuje do twojej konfiguracji przechowywania.',
        'Unikaj zakupu hurtowego, gdy kupujesz rzadki kolor, ktory bedzie nieuzywany po jednym projekcie.',
        'Traktuj sprzet do suszenia jako czesc systemu filamentu hurtowego, a nie opcjonalny luksus dla polimerow wrazliwych na wilgoc.',
        'Porownuj ceny z dostawa, nie tylko ceny na stronie produktu, gdy koszty wysylki roznia sie miedzy rozmiarami szpul.',
      ],
    },
    {
      type: 'message',
      title: 'Podsumowanie',
      html: 'Szpula hurtowa jest oplacalna, gdy spelnione sa trzy warunki: nizszy koszt na gram, wystarczajace miesieczne zuzycie i przechowywanie, ktore utrzymuje filament w stanie drukowalnym. Jesli jeden warunek nie zostanie spelniony, pozorny rabat moze zamienic sie w ukryta utrate materialu.',
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
