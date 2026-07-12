import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ResinHollowingDrainageCalculatorUI } from '../ui';

const slug = 'kalkulator-drazenia-i-drenazu-zywicy-sla';
const title = 'Kalkulator Drążenia i Drenażu Żywicy SLA';
const description = 'Oblicz bezpieczną grubość ścianki, średnicę otworu odpływowego, minimalną liczbę odpowietrzników i oszczędność żywicy dostosowaną do złożoności dla pustych wydruków z żywicy SLA i DLP.';

const faqData = [
  { question: 'Dlaczego kalkulator zawsze zaleca co najmniej dwa otwory odpływowe?', answer: 'Pusty wydruk z żywicy potrzebuje jednej ścieżki do wypłynięcia płynnej żywicy i drugiej do wniknięcia powietrza. Dwa otwory pomagają również przełamać efekt przyssawki działający na folię FEP podczas odrywania warstwy.' },
  { question: 'Dlaczego oszczędność żywicy jest mniejsza niż teoretyczna objętość drążenia?', answer: 'Płynna żywica pozostaje na wewnętrznych ściankach, żebrach, narożnikach, podporach i w małych kieszeniach. Kalkulator odejmuje 5, 10 lub 15 procent od teoretycznej objętości drążenia w zależności od złożoności geometrii.' },
  { question: 'Czy grubość ścianki 1,5 mm jest zawsze wystarczająca?', answer: 'Nie. Jest to minimalny próg bezpieczeństwa dla wielu wydruków z żywicy na drukarkach desktopowych. Wysokie lub ciężkie elementy, obciążenia inżynieryjne, wysoka temperatura otoczenia lub agresywne szlifowanie mogą wymagać grubszych ścianek.' },
  { question: 'Gdzie należy umieścić otwory odpływowe?', answer: 'Umieść otwory jak najbliżej strony platformy roboczej oraz najniższych punktów gromadzenia się żywicy w orientacji druku, a następnie upewnij się w slicerze, że nie pozostała żadna zamknięta przestrzeń.' },
];

const howToData = [
  { name: 'Wprowadź objętość i wysokość modelu', text: 'Użyj objętości ze slicera po uwzględnieniu podpór i orientacji, a następnie wprowadź wysokość części w orientacji druku.' },
  { name: 'Wybierz złożoność geometryczną', text: 'Wybierz prostą, średnią lub wysoką złożoność, aby uwięziona żywica została odjęta od teoretycznej oszczędności wynikającej z drążenia.' },
  { name: 'Wybierz typ żywicy', text: 'Wybierz żywicę standardową, wytrzymałą (tough) lub inżynieryjną. Bardziej lepkie żywice wymagają większej zalecanej średnicy drenażu.' },
  { name: 'Sprawdź zalecenia dotyczące ścianek i drenażu', text: 'Zapoznaj się z zalecaną grubością ścianki, średnicą drenażu, liczbą otworów oraz listą kontrolną przed ostatecznym pocięciem pliku.' },
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
    {
      type: 'title',
      text: 'Co robi kalkulator drążenia i odpływu żywicy SLA?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'To narzędzie rozwiązuje jedno z najtrudniejszych wyzwań w druku 3D z żywic SLA, DLP i LCD: optymalizację pustych modeli. Drukowanie litych elementów z żywicy jest drogie, ciężkie i zwiększa siły zrywania podczas procesu drukowania. Drążenie modelu zmniejsza zużycie materiału, ale wprowadzenie pustych przestrzeni bez odpowiedniego odpływu prowadzi do uwięzienia nieutwardzonej żywicy i niepowodzeń drukowania z powodu sił próżniowych. Ten kalkulator oblicza idealną grubość ścianki, sugeruje odpowiednią średnicę i liczbę otworów odpływowych oraz szacuje rzeczywiste oszczędności żywicy, biorąc pod uwagę płynną żywicę, która nieuchronnie pozostaje uwięziona na wewnętrznych ściankach wydrukowanej części.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
          {
            value: '1,5 mm',
            label: 'Zalecana minimalna grubość ścianki dla stacjonarnych drukarek SLA'
          },
          {
            value: '2 otwory',
            label: 'Minimalna liczba otworów wentylacyjnych wymagana do przełamania próżni'
          },
          {
            value: '10-15%',
            label: 'Zmniejszenie objętości żywicy z powodu retencji na powierzchniach wewnętrznych'
          },
          {
            value: '30-70%',
            label: 'Średnia całkowita redukcja masy osiągnięta dzięki drążeniu'
          }
        ]
    },
    {
      type: 'title',
      text: 'Jak grubość ścianki wpływa na oszczędność żywicy',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Grubość ścianki jest główną zmienną określającą ilość zaoszczędzonej żywicy. Grubsza ścianka zwiększa wytrzymałość strukturalną, ale szybko zużywa więcej żywicy, zmniejszając wydajność drążenia. I odwrotnie, zbyt cienka ścianka będzie krucha, podatna na odkształcenia podczas utwardzania i może nie wytrzymać mechanicznych sił zrywania, gdy drukarka oddziela każdą warstwę od folii FEP. Celem jest znalezienie optymalnego punktu, w którym model zachowuje swój kształt i użyteczność, przy jednoczesnym maksymalnym zaoszczędzeniu materiału.'
    },
    {
      type: 'proscons',
      title: 'Zalety i wady drążenia wydruków z żywicy',
      items: [
          {
            pro: 'Ogromna redukcja kosztów materiałów i całkowitej masy wydruku',
            con: 'Wymaga obróbki postprocesowej w celu umycia i utwardzenia wewnętrznych przestrzeni'
          },
          {
            pro: 'Mniejsza powierzchnia na warstwę zmniejsza siły zrywania na folii FEP',
            con: 'Nieprawidłowo rozmieszczone otwory mogą zepsuć estetykę wizualną modelu'
          },
          {
            pro: 'Zmniejsza naprężenia termiczne i odkształcenia podczas post-utwardzania',
            con: 'Ryzyko, że uwięziona płynna żywica spowoduje późniejsze pękanie elementu'
          }
        ]
    },
    {
      type: 'title',
      text: 'Zrozumienie efektu przyssawki w pustych wydrukach z żywicy',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Podczas drukowania pustego modelu po zanurzeniu w zbiorniku tworzy się zamknięta komora. Jeśli w tej komorze nie ma otworów wentylacyjnych, każdy cykl podnoszenia generuje silną próżnię częściową (efekt przyssawki) między utwardzoną warstwą a folią rozdzielającą. Siła ta ciągnie wydruk, prowadząc do rozwarstwienia, widocznych linii warstw, uszkodzeń podpór, a nawet całkowitego zerwania modelu z płyty roboczej. Dodanie otworów wentylacyjnych umożliwia wlot powietrza, neutralizując różnicę ciśnień i zapewniając płynne cykle zrywania.'
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Niebezpieczeństwo zamkniętych pustych przestrzeni',
      html: 'Nigdy nie pozostawiaj pustej przestrzeni całkowicie zamkniętej. Uwięziona płynna żywica wewnątrz wydrukowanej części będzie z czasem powoli degradować utwardzone ścianki, co ostatecznie doprowadzi do pękania modelu, wycieku toksycznej żywicy lub całkowitego rozpadu. Zawsze należy przewidzieć co najmniej dwa otwory, aby umyć wnętrze i utwardzić je za pomocą wewnętrznego źródła światła UV.'
    },
    {
      type: 'title',
      text: 'Najlepsze praktyki dotyczące umieszczania otworów odpływowych',
      level: 2
    },
    {
      type: 'list',
      items: [
          'Umieść otwory odpływowe jak najbliżej płyty roboczej, aby umożliwić ucieczkę żywicy na wczesnym etapie drukowania.',
          'Zawsze używaj co najmniej dwóch otworów: jednego do odprowadzania płynnej żywicy i drugiego do wlotu powietrza.',
          'Ukierunkuj otwory na niewidocznych powierzchniach, takich jak spód podstaw lub za połączeniami, aby zachować estetykę.',
          'Upewnij się, że każda odizolowana komora wewnętrzna lub kieszeń ma własny zestaw otworów odpływowych.'
        ]
    },
    {
      type: 'title',
      text: 'Jak kalkulator dostosowuje się do złożoności geometrycznej',
      level: 2
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
          {
            title: 'Prosta geometria',
            description: 'Modele o niskiej szczegółowości, kule lub bloki. Zatrzymuje minimalną ilość żywicy (ok. 5%) na płaskich powierzchniach wewnętrznych.'
          },
          {
            title: 'Średnia geometria',
            description: 'Modele postaci lub standardowe części mechaniczne. Wewnętrzne podpory i krzywizny zatrzymują umiarkowaną ilość żywicy (ok. 10%).',
            highlight: true
          },
          {
            title: 'Wysoka złożoność',
            description: 'Bardzo szczegółowe miniatury, struktury kratowe lub złożone puste kanały. Zatrzymuje znaczną ilość żywicy (ok. 15%+) ze względu na działanie kapilarne.'
          }
        ]
    },
    {
      type: 'title',
      text: 'Zrozumienie lepkości żywicy i wymiarowania otworów odpływowych',
      level: 2
    },
    {
      type: 'table',
      headers: [
          'Klasa żywicy',
          'Poziom lepkości',
          'Min. średnica otworu',
          'Zalecane umieszczenie'
        ],
      rows: [
          [
              'Żywica standardowa',
              'Niska-Średnia',
              '2,0 - 3,0 mm',
              'Podstawa lub ukryte płaskie powierzchnie'
            ],
          [
              'Twarda / Elastyczna',
              'Średnia-Wysoka',
              '3,0 - 4,5 mm',
              'Narożniki i połączenia w celu uniknięcia odklejania'
            ],
          [
              'Techniczna / Odlewnicza',
              'Bardzo Wysoka',
              '4,5 - 6,0 mm',
              'Bezpośrednia linia wzroku do odpływu grawitacyjnego'
            ]
        ]
    },
    {
      type: 'title',
      text: 'Kiedy należy zwiększyć grubość ścianki powyżej 1,5 mm',
      level: 2
    },
    {
      type: 'tip',
      title: 'Skala i funkcja określają grubość ścianki',
      html: 'Chociaż 1,5 mm to niezawodne minimum dla małych figurek dekoracyjnych, należy zwiększyć grubość ścianki w przypadku większych wydruków. W przypadku elementów wyższych niż 150 mm celuj w ścianki o grubości od 2,0 mm do 2,5 mm. W przypadku nośnych komponentów mechanicznych lub elementów drukowanych z żywic elastycznych/elastomerowych ścianki powinny mieć grubość 3,0 mm lub większą, aby zapobiec zapadnięciu się konstrukcji pod obciążeniem.'
    },
    {
      type: 'title',
      text: 'Glosariusz techniczny dla pustego druku SLA',
      level: 2
    },
    {
      type: 'glossary',
      items: [
          {
            term: 'Drążenie SLA',
            definition: 'Proces przekształcania litego modelu 3D w pustą skorupę o określonej grubości ścianki w celu zaoszczędzenia żywicy i czasu drukowania.'
          },
          {
            term: 'Efekt przyssawki',
            definition: 'Siła próżni generowana, gdy zamknięta pusta przestrzeń jest odciągana od folii rozdzielającej podczas drukowania.'
          },
          {
            term: 'Siła zrywania',
            definition: 'Naprężenie mechaniczne, jakiemu poddawany jest model i podpory, gdy utwardzona warstwa jest oddzielana od dna zbiornika.'
          },
          {
            term: 'Retencja żywicy',
            definition: 'Zatrzymywanie nieutwardzonej płynnej żywicy wewnątrz narożników wewnętrznych, podpór i tekstur z powodu napięcia powierzchniowego.'
          }
        ]
    },
    {
      type: 'title',
      text: 'Podsumowująca lista kontrolna udanych pustych wydruków',
      level: 2
    },
    {
      type: 'summary',
      title: 'Lista kontrolna SLA przed cięciem',
      items: [
          'Sprawdź, czy grubość drążenia jest odpowiednia do skali modelu.',
          'Potwierdź, że co najmniej dwa otwory odpływowe są umieszczone w najniższych punktach drukowania.',
          'Sprawdź, czy nie ma odizolowanych wewnętrznych przestrzeni bez wentylacji.',
          'Zaplanuj wewnętrzne mycie za pomocą IPA i wewnętrzne utwardzanie diodami UV LED.'
        ]
    }
  ];

export const content: ToolLocaleContent & { ui: ResinHollowingDrainageCalculatorUI } = {
  slug, title, description,
  ui: {
    unitSystemLabel: 'Jednostki',
    metricLabel: 'Metryczne',
    imperialLabel: 'US',
    modelInputsLabel: 'Dane wejściowe modelu',
    volumeLabel: 'Całkowita objętość modelu',
    heightLabel: 'Wysokość części',
    complexityLabel: 'Złożoność geometryczna',
    resinTypeLabel: 'Typ żywicy',
    simpleLabel: 'Prosta',
    moderateLabel: 'Średnia',
    highLabel: 'Wysoka',
    standardLabel: 'Standardowa',
    toughLabel: 'Wytrzymała',
    engineeringLabel: 'Inżynieryjna',
    resultsLabel: 'Wynik drążenia i drenażu',
    wallThicknessLabel: 'Zalecana ścianka',
    drainDiameterLabel: 'Średnica drenażu',
    drainHoleCountLabel: 'Minimalna liczba otworów',
    adjustedSavingLabel: 'Szacowana oszczędność żywicy',
    adjustedSavingNote: 'Skorygowano o złożoność w celu uwzględnienia płynnej żywicy zatrzymanej na powierzchniach wewnętrznych.',
    trapFactorLabel: 'Współczynnik uwięzionej żywicy',
    trapFactorHelp: 'Współczynnik ten zmienia się wraz ze złożonością geometryczną, aby skompensować napięcie powierzchniowe lepkiej żywicy w ślepych wnękach.',
    theoreticalSavingLabel: 'Teoretyczna objętość drążenia',
    trappedAllowanceLabel: 'Naddatek uwięzionej żywicy',
    savingUnitLabel: 'Oszczędność',
    percentLabel: '%',
    cm3Unit: 'cm3',
    cubicInUnit: 'in3',
    mmUnit: 'mm',
    inchUnit: 'in',
    mlUnit: 'ml',
    drainPlacementNote: 'Uwaga: Otwory odpływowe powinny być umieszczone w pobliżu platformy roboczej i najniższych punktów gromadzenia się żywicy w orientacji wydruku.',
    vacuumWarning: 'Puste elementy zawsze wymagają co najmniej dwóch otworów odpływowych, aby zlikwidować próżnię powstającą przy folii FEP.',
    trappedResinWarning: 'Złożone geometrie zatrzymują płynną żywicę wewnątrz; obliczenie to szacuje ten naddatek.',
    checklistTitle: 'Lista kontrolna przed pocięciem',
    checklistItems: ['Upewnij się, że otwory odpływowe znajdują się w obszarze bliskim platformy roboczej.', 'Zweryfikuj, czy grubość ścianki nie spada poniżej 1,5 mm.', 'Potwierdź, że w modelu nie ma zamkniętych wysp żywicy ani pustych przestrzeni.'],
  },
  seo: seoData, faq: faqData, bibliography, howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
