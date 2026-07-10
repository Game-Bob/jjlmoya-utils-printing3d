import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PrintTimeWorkflowOptimizerUI } from '../ui';

const slug = 'optymalizator-czasu-druku-3d';
const title = 'Optymalizator Czasu Druku 3D';
const description =
  'Porownaj dwie konfiguracje druku FDM obok siebie: liczba warstw, skorygowany czas, zuzycie filamentu, koszt, kompromis jakosci i ostrzezenia sprzetowe.';

const faqData = [
  {
    question: 'Roznica od prostego kalkulatora czasu?',
    answer:
      'Uwzglednia narzut zlozonosci, czas retrakcji na warstwe, wypelnienie, mase filamentu, koszt i porownanie scenariuszy.',
  },
  {
    question: 'Czy moze zastapic szacunki slicera?',
    answer:
      'Nie. Slicer zna dokladne sciezki narzedzia. To narzedzie planuje przed slicowaniem.',
  },
  {
    question: 'Co zmienia ustawienie zlozonosci?',
    answer:
      'Niska/srednia/wysoka stosuja wspolczynniki narzutu dla ruchow, strat przyspieszenia, naroznikow i wysp.',
  },
  {
    question: 'Dlaczego narzedzie ostrzega powyzej 100 mm/s?',
    answer:
      'Wiele druarek moze przekroczyc 100 mm/s, ale ekstruzja i chlodzenie czynia wysokie predkosci ryzykownymi bez kalibracji.',
  },
];
const howToData = [
  { name: 'Wprowadz rozmiar i objetosc modelu', text: 'Dodaj wysokosc i objetosc z CAD, podgladu slicera lub przyblizenia.' },
  { name: 'Dostosuj scenariusz A', text: 'Wybierz wysokosc warstwy, predkosc, szerokosc linii, wypelnienie, material, zlozonosc.' },
  { name: 'Dostosuj scenariusz B', text: 'Dostosuj druga konfiguracje do porownania.' },
  { name: 'Odczytaj wplyw', text: 'Porownaj czas, filament, koszt, warstwy, wydajnosc, przeplyw.' },
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

export const content: ToolLocaleContent<PrintTimeWorkflowOptimizerUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Dane wejsciowe workflow',
    resultsAriaLabel: 'Wyniki workflow',
    unitSystemLabel: 'Jednostki',
    metricLabel: 'metryczne',
    imperialLabel: 'US',
    currencyLabel: 'Waluta',
    currencyOptions: [
      { code: 'USD', label: '$', symbol: '$' },
      { code: 'EUR', label: 'EUR', symbol: 'EUR' },
      { code: 'GBP', label: 'GBP', symbol: 'GBP' },
      { code: 'CAD', label: 'C$', symbol: 'C$' },
      { code: 'AUD', label: 'A$', symbol: 'A$' },
      { code: 'CHF', label: 'Fr', symbol: 'Fr' },
      { code: 'CNY', label: 'CNY', symbol: 'CNY' },
      { code: 'INR', label: 'INR', symbol: 'INR' },
      { code: 'BRL', label: 'R$', symbol: 'R$' },
      { code: 'MXN', label: 'MXN', symbol: 'MXN' },
      { code: 'RUB', label: 'RUB', symbol: 'RUB' },
      { code: 'PLN', label: 'PLN', symbol: 'PLN' },
      { code: 'SEK', label: 'SEK', symbol: 'SEK' },
      { code: 'NOK', label: 'NOK', symbol: 'NOK' },
      { code: 'DKK', label: 'DKK', symbol: 'DKK' },
      { code: 'TRY', label: 'TRY', symbol: 'TRY' },
      { code: 'JPY', label: 'JPY', symbol: 'JPY' },
    ],
    scenarioALabel: 'Scenariusz A',
    scenarioBLabel: 'Scenariusz B',
    modelHeightLabel: 'Wysokosc modelu',
    modelVolumeLabel: 'Szacowana objetosc',
    layerHeightLabel: 'Wysokosc warstwy',
    speedLabel: 'Predkosc',
    lineWidthLabel: 'Szerokosc linii',
    infillLabel: 'Wypelnienie',
    complexityLabel: 'Zlozonosc',
    complexityTooltip: 'Szacuje czas martwy: przyspieszenia, narozniki, retrakcje, wyspy, krotkie ruchy.',
    pieceTypeLabel: 'Typ elementu',
    solidPieceLabel: 'Lity ciagly',
    hollowPieceLabel: 'Drazony wiele pustek',
    materialLabel: 'Material',
    filamentPriceLabel: 'Cena filamentu',
    lowComplexity: 'Niska proste sciany',
    mediumComplexity: 'Srednia geometria mieszana',
    highComplexity: 'Wysoka wiele wysp',
    estimatedTimeLabel: 'Szacowany czas',
    filamentLabel: 'Filament',
    costLabel: 'Koszt materialu',
    layersLabel: 'Warstwy',
    efficiencyLabel: 'Wydajnosc',
    flowLabel: 'Przeplyw objetosciowy',
    flowTooltip: 'Powyzej 10-12 mm3/s = ryzyko niedoekstruzji.',
    flowUnit: 'mm3/s',
    qualityTradeoffLabel: 'Kompromis jakosci',
    speedReductionLabel: '-10% predkosci',
    speedReductionAddsLabel: 'dodaje',
    speedReductionMinutesLabel: 'min',
    qualityGainLabel: '~8% czystsza powierzchnia',
    hardwareWarning: 'Predkosc >100 mm/s. Sprawdz przeplyw hotendu, chlodzenie, przyspieszenie.',
    flowWarning: 'Przeplyw poza strefa komfortu standardowego hotendu.',
    bestValueLabel: 'Najlepsza wartosc',
    timeDeltaLabel: 'Roznica czasu',
    costDeltaLabel: 'Roznica kosztu',
    materialDeltaLabel: 'Roznica materialu',
    winnerBadge: 'Najlepsza wartosc',
    scenarioPrefix: 'Scenariusz',
    inScenarioLabel: 'w',
    fasterDirection: 'szybciej',
    cheaperDirection: 'taniej',
    lighterDirection: 'lzej',
    criterionAlignedLabel: 'Zgodne z najlepsza wartoscia',
    criterionTradeoffLabel: 'Kompromis dla najlepszej wartosci',
    infoGlyph: 'i',
    metricVolumeUnit: 'cm3',
    imperialVolumeUnit: 'in3',
    gramUnit: 'g',
    ounceUnit: 'oz',
    kilogramUnit: 'kg',
    hourUnit: 'h',
    minuteUnit: 'min',
    millimeterUnit: 'mm',
    metricSpeedUnit: 'mm/s',
    imperialSpeedUnit: 'in/s',
    inchUnit: 'in',
    percentUnit: '%',
    materials: [
      { value: 'pla', label: 'PLA' },
      { value: 'petg', label: 'PETG' },
      { value: 'abs', label: 'ABS' },
      { value: 'asa', label: 'ASA' },
      { value: 'nylon', label: 'Nylon' },
      { value: 'tpu', label: 'TPU' },
    ],
  },
  seo: [
    { type: 'title', text: 'Jak oszacowac czas druku 3D przed krojeniem', level: 2 },
    {
      type: 'paragraph',
      html: 'Przydatny <strong>szacownik czasu druku 3D</strong> nie moze opierac sie tylko na dziele objetosci przez predkosc. Drukarki FDM spedzaja czas na przyspieszaniu, zwalnianiu na rogach, cofaniu filamentu, przemieszczaniu sie miedzy wyspami, chlodzeniu malych warstw i odzyskiwaniu cisnienia po zmianach kierunku. Optymalizator modeluje czesc jako objestosc do wydruku, szerokosc linii, wysokosc warstwy, predkosc, liczbe warstw i wspolczynnik zlozonosci, aby wczesne planowanie bylo blizsze rzeczywistym decyzjom przeplywu pracy.',
    },
    {
      type: 'paragraph',
      html: 'Podstawowy czas ekstruzji oblicza sie z objetosci podzielonej przez przeplyw objetosciowy: predkosc pomnozona przez szerokosc linii i wysokosc warstwy. Nastepnie narzedzie stosuje wspolczynnik korekcyjny dla zlozonosci modelu i dodaje stala rezerwe na cofanie na warstwe. Nie pretenduje to do precyzji slicera, ale daje bardziej uczciwe porownanie pomiedzy ustawieniem szkicowym 0,20 mm a ustawieniem jakosciowym 0,12 mm niz kalkulator liniowy.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '1.15x', label: 'Niski narzut dla prostych blokow i gladkich czesci', icon: 'mdi:cube-outline' },
        { value: '1.60x', label: 'Wysoki narzut dla wielu wysp i cofan', icon: 'mdi:vector-polyline' },
        { value: '0.5 s', label: 'Planowana rezerwa na cofanie dodana na warstwe', icon: 'mdi:timer-outline' },
        { value: '100 mm/s', label: 'Prag ostrzegawczy dla standardowej drukarki przy ryzyku ekstruzji', icon: 'mdi:alert-outline' },
      ],
    },
    {
      type: 'tip',
      title: 'Uzywaj objetosci ze slicera, gdy to mozliwe',
      html: '<p>Najlepszym wejsciem objetosci jest objetosc materialu ze slicera lub CAD dla modelu, a nie zewnetrzna ramka ograniczajaca. Ramki ograniczajace zawieraja puste powietrze wokol krzywych, otworow, uchwytow i wnrek, wiec moga wyolbrzymiac czas i filament.</p>',
    },
    { type: 'title', text: 'Dlaczego wysokosc warstwy tak silnie wplywa na czas', level: 2 },
    {
      type: 'paragraph',
      html: 'Wysokosc warstwy wplywa na czas druku dwojako. Po pierwsze, zmienia przeplyw objetosciowy: warstwa 0,12 mm przy tej samej predkosci i szerokosci wytlacza 40% mniej plastiku na sekunde niz warstwa 0,20 mm. Po drugie, zwieksza liczbe warstw, przez co narzut zmiany warstwy, cofania, ustalania cisnienia i decyzje o chlodzeniu wystepuja czesciej. Dlatego male zmiany kosmetyczne moga zamienic pieciogodzinny wydruk w osmioogodzinny.',
    },
    {
      type: 'table',
      headers: ['Wysokosc warstwy', 'Typowe zastosowanie', 'Konsekwencje dla przeplywu pracy'],
      rows: [
        ['0,28-0,32 mm', 'Czesci szkicowe, duze uchwyty, szybkie kontrole', 'Mala liczba warstw i wysoki przeplyw, ale widoczne linie warstw.'],
        ['0,18-0,22 mm', 'Ogolny druk PLA i PETG', 'Zrownowazony czas, wytrzymalosc i jakosc powierzchni dla wielu drukarcek biurkowych.'],
        ['0,10-0,14 mm', 'Miniatury, zakrzywione obudowy, widoczne czesci konsumenckie', 'Znacznie dluzsze zadania, poniewaz przeplyw spada a liczba warstw rosnie.'],
        ['Ponizej 0,10 mm', 'Specjalne przypadki wykończeniowe', 'Czesto ograniczone przez dokladnosc maszyny, chlodzenie i malejace korzysci wizualne.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Cienkie warstwy moga byc wolniejsze niz sugeruje wzor',
      badge: 'Chlodzenie i minimalny czas warstwy',
      html: '<p>Male modele moga osiagnac minimalny czas warstwy w slicerze. Gdy to nastapi, drukarka zwalnia, aby plastik mogl ostygnac, nawet jesli wzor objetosciowy mowi, ze maszyna mogla by poruszac sie szybciej.</p>',
    },
    {
      type: 'summary',
      title: 'Zasady wysokosci warstwy',
      items: [
        'Nizsza wysokosc warstwy zmniejsza przeplyw na sekunde przy tej samej predkosci.',
        'Wieksza liczba warstw dodaje powtarzalny narzut, nawet gdy objetosc modelu pozostaje niezmieniona.',
        'Najlepsze porownanie opiera sie na scenariuszach: profil szkicowy versus profil jakosciowy.',
      ],
    },
    { type: 'title', text: 'Narzut zlozonosci modelu i czas martwy', level: 2 },
    {
      type: 'paragraph',
      html: 'Czas martwy to roznica miedzy teoretyczna ekstruzja a rzeczywistym czasem zadania. Prosta sciana przypominajaca wazon ma malo przemieszczen i malo cofan. Mechaniczna obudowa z wieloma otworami, wypustkami, etykietami, zebrami i oddzielonymi wyspami zmusza drukarke do wielokrotnego uruchamiania i zatrzymywania. Ograniczenia przyspieszenia oznaczaja, ze dysza moze nigdy nie osiagnac zadanej predkosci na krotkich odcinkach, wiec rzeczywista srednia predkosc ruchu jest nizsza niz wartosc suwaka.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: 'Niska zlozonosc', description: 'Gladkie modele, ciagle kontury, kilka wysp i ograniczone przemieszczenia wewnetrzne.', icon: 'mdi:shape-outline', points: ['Nizszy narzut', 'Stabilna predkosc', 'Malo cofan'] },
        { title: 'Srednia zlozonosc', description: 'Typowe czesci funkcjonalne z otworami, mieszanymi krzywymi, zmianami wypelnienia i umiarkowanymi przemieszczeniami.', icon: 'mdi:cog-outline', highlight: true, points: ['Zrownowazony domyslny', 'Pewna utrata przemieszczenia', 'Przydatna podstawa wyceny'] },
        { title: 'Wysoka zlozonosc', description: 'Teksturowane powierzchnie, wiele oddzielonych cech, interfejsy podporowe i sekcje z intensywnym cofaniem.', icon: 'mdi:transit-connection-variant', points: ['Wysoki narzut', 'Wieksze ryzyko nici', 'Dluzszy rzeczywisty czas'] },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Wspolczynnik narzutu', definition: 'Mnoznik przyblizajacy przemieszczenia, straty przyspieszenia, cofania i inne czasy nieuwzglednione w obliczeniach staej ekstruzji.' },
        { term: 'Przeplyw objetosciowy', definition: 'Ilosc plastiku przepychanego przez dysze na sekunde, obliczana jako predkosc razy szerokosc linii razy wysokosc warstwy.' },
        { term: 'Liczba warstw', definition: 'Wysokosc modelu podzielona przez wysokosc warstwy, zaokraglona w gore, poniewaz czesciowe koncowe warstwy nadal wymagaja przejscia.' },
        { term: 'Niedostateczna ekstruzja', definition: 'Wada, w ktorej hotend lub ekstruder nie moze dostarczyc wystarczajacej ilosci stopionego plastiku dla zadanej predkosci i geometrii linii.' },
      ],
    },
    {
      type: 'message',
      title: 'Traktuj zlozonosc jak pokretlo kalibracyjne',
      ariaLabel: 'Uwaga o wspolczynniku zlozonosci',
      html: '<p>Jesli twoj slicer konsekwentnie raportuje dluzsze czasy niz ten optymalizator dla podobnych modeli, zwieksz zlozonosc. Jesli twoja drukarka z bezposrednim napdem i wyregulowanym przyspieszeniem bije szacunek, zmniejsz go do przyszlego planowania.</p>',
    },
    { type: 'title', text: 'Zuzycie filamentu, koszt i wypelnienie', level: 2 },
    {
      type: 'paragraph',
      html: 'Czas to tylko jedna czesc decyzji przeplywu pracy. Waga i koszt filamentu maja znaczenie przy wycenie czesci, planowaniu zadan wsadowych lub decydowaniu, czy profil z drobnymi szczegolami jest wart zajmowania drukarki. Optymalizator szacuje skorygowana objetosc do wydruku, zachowujac udzial powloki i skalujac obszar wewnetrzny wedlug procentu wypelnienia, a nastepnie mnozy te objetosc przez gestosc materialu.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Uzywaj PLA okolo 1,24 g/cm³ i PETG okolo 1,27 g/cm³ do szybkiego planowania materialu.',
        'Zwieksz szacowana objetosc, gdy podpory, ranty, tratwy lub struktury czyszczace sa czescia zadania.',
        'Nizsze wypelnienie zmniejsza filament i czas, ale sciany, warstwy gorne i dolne nadal zuzywaja material.',
        'W przypadku partii produkcyjnych porownaj szacunki kalkulatora z rzeczywista waga uzytej szpuli i dostosuj przyszle wyceny.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:cash-clock',
      title: 'Przyklad decyzji przeplywu pracy',
      html: '<p>Czesc PLA o objetosci 120 cm³ przy warstwach 0,20 mm moze byc akceptowalna dla uchwytu warsztatowego, podczas gdy wersja 0,12 mm wyglada lepiej, ale zajmuje drukarke dluzej. Porownanie czasu i kosztu materialu obok siebie uwidacznia kompromis, zanim maszyna zostanie zarezerwowana.</p>',
    },
    {
      type: 'proscons',
      title: 'Optymalizacja predkosci versus jakosci',
      items: [
        { pro: 'Wyzsza predkosc moze zwolnic wydajnosc drukarki dla wiekszej liczby zadan dziennie.', con: 'Moze ujawnic ringing, slabe rogi, slabe chlodzenie i ograniczenia przeplywu hotendu.' },
        { pro: 'Nizsza predkosc czesto poprawia wykończenie powierzchni i zgodnosc wymiarowa.', con: 'Zwieksza czas oczekiwania i moze czynic male czesci handlowe mniej dochodowymi.' },
        { pro: 'Nizsza wysokosc warstwy poprawia zakrzywione powierzchnie i miniatury.', con: 'Mnozy liczbe warstw i powtarzalny narzut maszyny.' },
      ],
    },
    { type: 'title', text: 'Ostrzezenia sprzetowe i praktyczne ograniczenia predkosci', level: 2 },
    {
      type: 'paragraph',
      html: 'Wartosc predkosci w slicerze nie jest gwarancja, ze dysza utrzyma te predkosc wszedzie. Standardowe drukarki Cartesian z ruchomym lozem, starsze ekstrudery Bowden, hotendy z krotka strefa topienia i slabe chlodzenie czesci moga miec trudnosci powyzej 100 mm/s, chyba ze przyspieszenie, jerk, pressure advance, temperatura i kalibracja przeplywu sa wyregulowane. Ostrzezenie nie oznacza, ze wydruk sie nie uda; oznacza, ze zadane ustawienie nalezy sprawdzic pod katem zachowania sprzetu.',
    },
    {
      type: 'table',
      headers: ['Objaw', 'Prawdopodobna przyczyna', 'Reakcja planistyczna'],
      rows: [
        ['Cienkie sciany lub przerwy', 'Hotend nie moze stopic wystarczajacej ilosci plastiku lub ekstruder slizga sie', 'Zmniejsz predkosc, ostroznie zwieksz temperature lub zmniejsz szerokosc linii/wysokosc warstwy.'],
        ['Ringing przy rogach', 'Przyspieszenie i wibracje ramy dominuja', 'Zmniejsz przyspieszenie lub predkosc dla widocznych scian.'],
        ['Zawiniete male cechy', 'Chlodzenie nie nadaza', 'Zmniejsz predkosc, zwieksz wentylator lub wydrukuj wiele kopii.'],
        ['Nici na zlozonych czesciach', 'Wiele przemieszczen i cofan', 'Zwieksz narzut zlozonosci i wyreguluj cofanie/temperature.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Przeplyw objetosciowy to prawdziwy sufit predkosci',
      badge: 'Sprawdz mm³/s',
      html: '<p>Dwa profile z taka sama predkoscia ruchu moga wymagac roznych szybkosci topnienia. Warstwa 0,30 mm i linia 0,50 mm przy 80 mm/s potrzebuja o wiele wiecej plastiku na sekunde niz warstwa 0,12 mm i linia 0,42 mm przy tej samej predkosci.</p>',
    },
    {
      type: 'summary',
      title: 'Uzywaj optymalizatora przed krojeniem',
      items: [
        'Porownaj dwa profile kandydackie zamiast zgadywac na podstawie pojedynczej liczby.',
        'Obserwuj lacznie liczbe warstw, przeplyw objetosciowy i ostrzezenia sprzetowe.',
        'Zachowaj ostatnia interakcje lokalnie, aby powtarzane planowanie moglo kontynuowac od poprzedniego ustawienia.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
