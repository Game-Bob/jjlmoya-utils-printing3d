import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { TreeSupportDensityCalculatorUI } from '../ui';

export const content: ToolLocaleContent<TreeSupportDensityCalculatorUI> = {
  slug: 'kalkulator-gestosci-podpor-drzewiastych',
  title: 'Kalkulator gęstości podpór drzewiastych',
  description: 'Oszacuj średnicę korony, objętość podpory, liczbę gałęzi, średnicę kontaktu i stabilność podpór drzewiastych na podstawie wysokości punktu podparcia, kąta rozgałęzienia, gęstości gałęzi i średnicy podstawy pnia.',
  ui: {
    unitSystemLabel: 'Jednostki',
    metricLabel: 'Metryczne',
    imperialLabel: 'US',
    presetsLabel: 'Szablony',
    miniaturePresetLabel: 'Mini',
    balancedPresetLabel: 'Zrównoważony',
    tallPresetLabel: 'Wysoki',
    supportHeightLabel: 'Wysokość punktu podparcia',
    branchAngleLabel: 'Kąt rozgałęzienia',
    branchDensityLabel: 'Gęstość gałęzi',
    baseTrunkDiameterLabel: 'Średnica podstawy pnia',
    canopyDiameterLabel: 'Średnica korony',
    supportVolumeLabel: 'Szacowana objętość podpory',
    stabilityLabel: 'Stabilność podpory',
    filamentMassLabel: 'Masa filamentu',
    branchCountLabel: 'Liczba gałęzi',
    contactDiameterLabel: 'Średnica kontaktu',
    trunkVolumeLabel: 'Objętość pnia',
    branchVolumeLabel: 'Objętość gałęzi',
    stabilityScoreSeparator: '-',
    stabilityScoreSuffix: '/100',
    stabilityLow: 'niska stabilność',
    stabilityBalanced: 'zrównoważona stabilność',
    stabilityHigh: 'wysoka stabilność',
    controlsAriaLabel: 'Parametry gęstości podpór drzewiastych',
    resultsAriaLabel: 'Wyniki gęstości podpór drzewiastych',
    copyButton: 'Kopiuj ustawienia podpory',
    copiedButton: 'Skopiowano',
    copiedSummaryTemplate: 'Szacunek podpory drzewiastej: korona {canopy}, objętość {volume}, stabilność {stability} ({score}/100).',
    millimetersUnit: 'mm',
    inchesUnit: 'in',
    cubicCentimetersUnit: 'cm3',
    cubicInchesUnit: 'in3',
    gramsUnit: 'g',
    ouncesUnit: 'oz',
    degreesUnit: '°',
    percentUnit: '%',
  },
  seo: [
    { type: 'title', text: 'Jak gęstość podpór drzewiastych wpływa na zużycie filamentu i stabilność', level: 2 },
    {
      type: 'paragraph',
      html: 'Podpory drzewiaste są wydajne, ponieważ dzielą zadanie na <strong>ścieżkę obciążenia</strong> i <strong>wzór kontaktu</strong>. Pień przenosi większość obciążenia pionowego ze stołu roboczego, podczas gdy mniejsze gałęzie rozchodzą się w kierunku nawisów tylko tam, gdzie kontakt jest potrzebny. Kalkulator gęstości podpór drzewiastych jest przydatny, ponieważ najbardziej widoczne parametry w slicerze, takie jak kąt rozgałęzienia i gęstość gałęzi, oddziałują z wysokością punktu podparcia i średnicą podstawy pnia. Niska gęstość gałęzi może oszczędzić filament, ale zmniejsza też liczbę ścieżek przeciwdziałających chwianiu się. Stromy kąt rozgałęzienia może dosięgnąć wysokich elementów przy mniejszym rozłożeniu poziomym, ale koncentruje obciążenie przy pniu i może zawieść w przypadku wysokich, wąskich podpór.',
    },
    {
      type: 'paragraph',
      html: 'Kalkulator szacuje trzy wartości trudne do oceny gołym okiem w podglądzie slicera: średnicę górnej korony, objętość podpory i wskaźnik stabilności. Średnica górnej korony mówi, jak szeroka staje się korona gałęzi w pobliżu modelu. Objętość podpory szacuje ilość materiału potrzebnego do wydrukowania pnia i gałęzi. Stabilność łączy kąt, gęstość, średnicę podstawy, wysokość i rozpiętość korony w praktyczny wskaźnik. Celem nie jest zastąpienie silnika slicera; celem jest wybór wartości początkowych przed krojeniem, aby spędzać mniej czasu na iteracyjnym podglądzie podpór.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '35-50°', label: 'typowy zakres kąta rozgałęzienia dla zrównoważonego zasięgu i wytrzymałości' },
        { value: '25-55%', label: 'praktyczny zakres gęstości gałęzi dla wielu wydruków FDM' },
        { value: '2-8 mm', label: 'typowy zakres średnicy podstawy pnia dla podpór drzewiastych w drukarkach hobbystycznych' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'To kalkulator planowania, a nie eksport geometrii slicera',
      html: 'Każdy slicer generuje podpory drzewiaste inaczej. Cura, PrusaSlicer, Bambu Studio, OrcaSlicer i inne narzędzia używają różnych nazw i algorytmów do generowania gałęzi, unikania kolizji, interfejsu podpory i punktów kontaktu. Traktuj wyniki jako wskazówkę do strojenia, a następnie potwierdź końcową geometrię w podglądzie slicera przed drukowaniem.',
    },
    { type: 'title', text: 'Kąt rozgałęzienia: zasięg, ścieżka obciążenia i ryzyko awarii', level: 2 },
    {
      type: 'paragraph',
      html: 'Kąt rozgałęzienia kontroluje, jak agresywnie podpora drzewiasta rozchodzi się od pnia w kierunku modelu. Niższy kąt utrzymuje gałęzie bliżej pionu, co zwykle poprawia sztywność i redukuje boczne chwianie się. Wyższy kąt sięga dalej nad pustą przestrzenią, co może zmniejszyć liczbę potrzebnych pni, ale zwiększa obciążenie zginające i może tworzyć długie, niepodparte segmenty gałęzi. W przypadku wysokich podpór niewielka zmiana z 50 stopni na 60 może zmienić stabilne drzewo w elastyczną konstrukcję, która wibruje, gdy dysza jej dotknie.',
    },
    {
      type: 'paragraph',
      html: 'Najlepszy kąt rozgałęzienia zależy od wysokości punktu podparcia. Niskie drzewo pod małym nawisem może użyć szerszego kąta, ponieważ długość gałęzi jest ograniczona. Wysoki punkt podparcia wymaga bardziej zachowawczego kąta, zwłaszcza przy elastycznych materiałach, szybkich ruchach jałowych lub powierzchni stołu, która łatwo uwalnia podpory. Jeśli punkt podparcia jest wysoki, a kąt rozgałęzienia szeroki, zwiększ średnicę podstawy pnia lub gęstość, aby korona gałęzi nie była podparta cienką kolumną.',
    },
    {
      type: 'table',
      headers: ['Kąt rozgałęzienia', 'Najlepsze zastosowanie', 'Ryzyko przy nadużyciu', 'Regulacja'],
      rows: [
        ['20-35°', 'Wysokie podpory i wąskie wieże', 'Może wymagać więcej pni, bo zasięg jest ograniczony', 'Zwiększaj gęstość tylko tam, gdzie pokrycie kontaktem jest słabe'],
        ['36-50°', 'Ogólne strojenie podpór drzewiastych', 'Zwykle zrównoważone, ale wciąż zależy od wysokości', 'Zacznij tutaj dla większości wydruków z PLA i PETG'],
        ['51-65°', 'Szerokie nawisy o umiarkowanej wysokości', 'Gałęzie mogą uginać się podczas ruchów lub kontaktu', 'Użyj grubszej podstawy pnia i umiarkowanej gęstości'],
        ['66-75°', 'Przypadki szczególne z bardzo szerokim zasięgiem', 'Wysokie obciążenie zginające i słabe nasady gałęzi', 'Sprawdzaj dokładnie w podglądzie i zwolnij drukowanie podpór'],
      ],
    },
    {
      type: 'tip',
      title: 'Nie gonić za zasięgiem wyłącznie kątem',
      html: 'Jeśli gałęzie muszą sięgać daleko, spróbuj dodać dodatkowy pień lub zwiększyć gęstość korony, zanim podniesiesz kąt do górnej granicy. Drugi pień w pobliżu często zużywa mniej materiału niż jedno przeciążone drzewo potrzebujące ciężkiej podstawy, by przetrwać.',
    },
    { type: 'title', text: 'Gęstość gałęzi: pokrycie kontaktem bez śladów podpór', level: 2 },
    {
      type: 'paragraph',
      html: 'Gęstość gałęzi określa, ile struktury gałęzi powstaje w pobliżu podpartego obszaru. Niska gęstość redukuje filament i ułatwia usuwanie, ale może pozostawić krawędzie nawisów niedostatecznie podparte. Wysoka gęstość poprawia pokrycie i rozkłada obciążenie na więcej punktów kontaktu, ale zwiększa czas druku, ślady kontaktu i ryzyko, że podpory zrosną się z delikatnymi powierzchniami. Właściwa gęstość to zatem nie najwyższa wartość, która wygląda bezpiecznie; to najniższa wartość, która zapobiega opadaniu nawisów, zachowując jednocześnie wystarczającą sztywność.',
    },
    {
      type: 'paragraph',
      html: 'W przypadku modeli dekoracyjnych gęstość często można zmniejszyć, ponieważ lekka tekstura spodu może być akceptowalna. W przypadku części mechanicznych gęstość wymaga większej uwagi, ponieważ niepodparte otwory, fazowania i powierzchnie współpracujące mogą wpłynąć na dopasowanie. Materiały również mają znaczenie. PLA toleruje lżejsze podpory, ponieważ jest sztywne i czysto wykonuje mostki. PETG często potrzebuje większych szczelin powietrznych i starannie dobranej średnicy kontaktu, ponieważ silnie wiąże się z podporami. TPU i elastyczne filamenty wymagają zachowawczej geometrii, ponieważ cienkie gałęzie mogą się odkształcać zamiast utrzymywać nawis w pozycji.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Niska gęstość',
          description: 'Najlepsza, gdy jakość usuwania i oszczędność filamentu są ważniejsze niż idealne wykończenie spodu.',
          points: ['Najszybsze drukowanie podpór', 'Najsłabsze pokrycie kontaktem', 'Przydatne do organicznych miniaturek'],
        },
        {
          title: 'Zrównoważona gęstość',
          description: 'Praktyczne ustawienie domyślne dla mieszanej geometrii, gdzie nawisy potrzebują podpory, ale powierzchnia modelu musi pozostać czysta.',
          highlight: true,
          points: ['Dobra wydajność materiałowa', 'Umiarkowany nakład usuwania', 'Działa w wielu zadaniach z PLA i PETG'],
        },
        {
          title: 'Wysoka gęstość',
          description: 'Przydatna przy ciężkich nawisach, wysokich punktach podparcia i delikatnych obszarach kontaktu, ale zwiększa ślady.',
          points: ['Najlepszy rozkład obciążenia', 'Większa objętość i czas druku', 'Wyższe ryzyko zrośniętych kontaktów'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Zwiększanie gęstości gałęzi',
      items: [
        { pro: 'Więcej punktów kontaktu redukuje opadanie pod zakrzywionymi nawisami.', con: 'Więcej punktów kontaktu może pozostawiać widoczniejsze ślady po usunięciu.' },
        { pro: 'Gęstsza korona rozkłada obciążenie na kilka gałęzi.', con: 'Slicer może wygenerować masywną koronę trudno dostępną dla przecinaków.' },
        { pro: 'Wysokie podpory stają się mniej wrażliwe na uderzenia dyszy.', con: 'Czas druku i zużycie filamentu gwałtownie rosną, gdy gęstość łączy się z dużą koroną.' },
      ],
    },
    { type: 'title', text: 'Średnica podstawy pnia i dlaczego wysokie podpory drzewiaste zawodzą', level: 2 },
    {
      type: 'paragraph',
      html: 'Średnica podstawy pnia to fundament drzewa. Cienki pień może być w zupełności wystarczający dla niskiej podpory, ale ta sama średnica staje się ryzykowna, gdy podparty punkt jest wysoko. Wysokość zwiększa dźwignię: małe uderzenie dyszy, otarcie podczas ruchu jałowego czy wibracje wentylatora chłodzącego powodują większy ruch na koronie. Jeśli pień jest zbyt cienki jak na daną wysokość, podpora może nie pęknąć od razu; może powoli się przechylać, przesuwać punkt kontaktu lub odczepiać się od stołu, zanim nawis zostanie ukończony.',
    },
    {
      type: 'paragraph',
      html: 'Większa średnica pnia poprawia sztywność i przyczepność do stołu, ale także zużywa materiał. Kalkulator traktuje średnicę pnia jako parametr stabilności, a nie ustawienie kosmetyczne. Jeśli wskaźnik stabilności jest niski, zwiększenie średnicy jest często skuteczniejsze niż podnoszenie gęstości gałęzi, ponieważ wzmacnia ścieżkę obciążenia od stołu roboczego. Jeśli wskaźnik jest już wysoki, większy pień może tylko utrudnić usuwanie i marnować filament.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Wysokość punktu podparcia', definition: 'Odległość pionowa od stołu roboczego do obszaru modelu wymagającego podparcia.' },
        { term: 'Kąt rozgałęzienia', definition: 'Kąt używany przez gałęzie przy rozchodzeniu się od pnia w kierunku punktów kontaktu podpory.' },
        { term: 'Gęstość gałęzi', definition: 'Względna ilość struktury gałęzi i pokrycia kontaktem tworzona w pobliżu podpartego obszaru.' },
        { term: 'Średnica podstawy pnia', definition: 'Przybliżona średnica głównego pnia podpory drzewiastej w miejscu, gdzie zaczyna się na stole roboczym.' },
        { term: 'Średnica korony', definition: 'Szacowana szerokość górnej korony gałęzi w pobliżu nawisu modelu.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Wysoka korona na cienkim pniu to klasyczny tryb awarii podpór drzewiastych',
      html: 'Jeśli średnica korony jest wielokrotnie większa od średnicy pnia, podpora zachowuje się jak konstrukcja z wysokim środkiem ciężkości. Dodaj kolejny pień, zmniejsz kąt rozgałęzienia lub zwiększ średnicę podstawy, zanim po prostu dodasz więcej gęstości gałęzi.',
    },
    { type: 'title', text: 'Średnica górnej korony a luz modelu', level: 2 },
    {
      type: 'paragraph',
      html: 'Średnica górnej korony jest ważna, ponieważ podpory drzewiaste muszą mieścić się wokół modelu, unikać kolizji i pozostać łatwe do usunięcia. Duża korona może dobrze podpierać nawis, ale może też otaczać detale, wchodzić do wnęk lub tworzyć gałęzie trudne do odłamania. Mała korona jest łatwiejsza do usunięcia, ale może koncentrować siłę kontaktu na kilku punktach i pozwalać krawędziom opadać. Kalkulator szacuje średnicę korony na podstawie wysokości podpory, kąta rozgałęzienia, gęstości i średnicy podstawy, abyś mógł przewidzieć, czy wygenerowana korona będzie zwarta, czy rozłożysta.',
    },
    {
      type: 'paragraph',
      html: 'Podgląd slicera jest niezbędny do oceny luzu korony. Obserwuj, czy gałęzie przechodzą przez małe otwory, pod wypukłym tekstem, wokół palców figurek lub między elementami mechanicznymi. Jeśli gałąź może dosięgnąć danego obszaru, może się tam również zaklinować. Niższa gęstość, mniejsza średnica kontaktu, ciaśniejsze blokery podpór lub ręczne malowanie mogą zapobiec temu, by podpory drzewiaste były trudniejsze do usunięcia niż standardowe podpory kratowe.',
    },
    {
      type: 'table',
      headers: ['Zachowanie korony', 'Prawdopodobna przyczyna', 'Konsekwencja wydruku', 'Rozwiązanie'],
      rows: [
        ['Korona jest zbyt wąska', 'Kąt i gęstość są zachowawcze', 'Krawędzie nawisu opadają między punktami kontaktu', 'Zwiększ gęstość lub dodaj ręczne punkty podparcia'],
        ['Korona jest szeroka, ale niestabilna', 'Duży kąt na wysokiej podporze', 'Kontakt dyszy może wstrząsać konstrukcją', 'Zmniejsz kąt lub zwiększ średnicę pnia'],
        ['Korona otacza detale', 'Wysoka gęstość wokół złożonej geometrii', 'Ślady usuwania podpór widoczne na powierzchniach', 'Użyj blokerów podpór lub zmniejsz gęstość'],
        ['Korona dotyka ścian bocznych modelu', 'Zbyt mały luz podpory', 'Gałęzie mogą zrosnąć się z częścią', 'Zwiększ odległość X/Y lub zmniejsz średnicę kontaktu'],
      ],
    },
    {
      type: 'card',
      title: 'Średnica korony jest ostrzeżeniem z wyprzedzeniem',
      html: 'Duża szacowana korona nie jest automatycznie zła. Oznacza, że podgląd slicera zasługuje na uwagę, ponieważ korona podpory może stać się głównym wyzwaniem przy usuwaniu.',
    },
    { type: 'title', text: 'Objętość podpory, długość filamentu i czas druku', level: 2 },
    {
      type: 'paragraph',
      html: 'Objętość podpory to praktyczny koszt wybranych ustawień. Podpora drzewiasta może wyglądać lekko w podglądzie, ale gęsta korona i gruby pień mogą nadal zużywać znaczną ilość filamentu. Kalkulator podaje szacowaną objętość w centymetrach sześciennych. Pomaga to porównać ustawienia przed krojeniem, zwłaszcza gdy decydujesz, czy wyższy pień, większa gęstość czy dodatkowy zasięg gałęzi są warte materiału.',
    },
    {
      type: 'paragraph',
      html: 'Objętość nie przekłada się idealnie na czas druku, ponieważ slicery używają różnych szerokości linii, liczb obwodów, wzorów wypełnienia, ograniczeń przyspieszenia i prędkości podpór. Niemniej objętość pozostaje silnym wskaźnikiem. Jeśli dwa zestawy ustawień dają podobną stabilność, ale jeden zużywa znacznie mniej objętości, ustawienie o mniejszej objętości jest zwykle lepszym punktem wyjścia. Jeśli ustawienie o mniejszej objętości daje również niski wskaźnik stabilności, oszczędność może zniknąć, gdy wydruk się nie uda lub spód będzie wymagał poprawek.',
    },
    {
      type: 'summary',
      title: 'Jak bezpiecznie zmniejszyć objętość podpory',
      items: [
        'Najpierw obniż gęstość gałęzi, gdy wskaźnik stabilności jest już wysoki.',
        'Zmniejsz kąt rozgałęzienia, gdy korona jest bardzo szeroka i ma wysoki środek ciężkości.',
        'Używaj mniejszej średnicy podstawy pnia tylko w niskich podporach o niewielkim obciążeniu nawisu.',
        'Podziel jedno duże drzewo na dwa mniejsze, gdy zasięg tworzy masywną koronę.',
        'Dostrajaj średnicę kontaktu osobno, aby ślady powierzchniowe nie wymuszały niepotrzebnej gęstości.',
      ],
    },
    {
      type: 'message',
      title: 'Oszczędność materiału ma sens tylko wtedy, gdy podpora przetrwa',
      html: 'Nieudana podpora zwykle kosztuje więcej filamentu niż nieco mocniejsza. Traktuj duże procenty oszczędności jako zaproszenie do dokładnego podglądu, a nie dowód na to, że najlżejsza podpora jest automatycznie właściwa.',
    },
    { type: 'title', text: 'Średnica kontaktu podpory drzewiastej a jakość powierzchni', level: 2 },
    {
      type: 'paragraph',
      html: 'Średnica kontaktu kontroluje, jaka część podpory drzewiastej dotyka modelu. Małe kontakty odchodzą czysto i redukują ślady, ale mogą odrywać się od ciężkich lub gorących nawisów. Większe kontakty lepiej trzymają i rozprowadzają ciepło, ale mogą przyspawać się do PETG, pozostawiać wypukłe punkty na PLA lub niszczyć detale przypominające żywicę w wydrukach dekoracyjnych. Niniejszy kalkulator szacuje średnicę kontaktu na podstawie średnicy gałęzi i gęstości, aby wynik pozostał powiązany ze strukturą podpory, a nie był traktowany jako izolowana wartość kosmetyczna.',
    },
    {
      type: 'paragraph',
      html: 'Ustawienia kontaktu należy dostrajać wraz z górną odległością Z i zachowaniem interfejsu. Jeśli szczelina pionowa jest zbyt mała, nawet malutki kontakt może silnie się związać. Jeśli szczelina pionowa jest zbyt duża, szeroki kontakt może nadal nie podeprzeć nawisu, ponieważ filament ma miejsce, by opaść. W przypadku części funkcjonalnych przetestuj średnicę kontaktu na kalibracyjnym nawisie wykonanym z tego samego materiału, przy tej samej średnicy dyszy, wysokości warstwy i ustawieniach chłodzenia, co rzeczywisty model.',
    },
    {
      type: 'list',
      items: [
        'Używaj mniejszych średnic kontaktu na widocznych powierzchniach kosmetycznych.',
        'Używaj większych kontaktów pod ciężkimi mostkami, grubymi nawisami lub materiałami wysokotemperaturowymi.',
        'Zwiększ górną odległość Z, zanim obwiniasz gęstość drzewa, gdy podpory są trudne do usunięcia.',
        'Zmniejsz prędkość interfejsu podpory, jeśli punkty kontaktu odpadają podczas drukowania.',
        'Sprawdź, czy slicer nazywa to ustawienie średnicą kontaktu, średnicą końcówki lub kontaktem interfejsu podpory.',
      ],
    },
    {
      type: 'tip',
      title: 'PETG wymaga dodatkowej ostrożności',
      html: 'PETG agresywnie wiąże się z materiałem podpory drukowanym z tego samego filamentu. Umiarkowana gęstość drzewa z ostrożnie dobraną odległością Z często działa lepiej niż bardzo gęsta korona z dużymi kontaktami.',
    },
    { type: 'title', text: 'Zalecany początkowy przepływ pracy dla podpór drzewiastych w slicerze', level: 2 },
    {
      type: 'paragraph',
      html: 'Zacznij od wprowadzenia wysokości najwyższego punktu podparcia, a nie całkowitej wysokości modelu. Model może być wysoki, podczas gdy podparty obszar znajduje się blisko stołu, albo niski, podczas gdy krytyczny nawis znajduje się wysoko na wąskiej wyspie. Następnie wybierz kąt rozgałęzienia w zrównoważonym zakresie i ustaw gęstość gałęzi zgodnie z potrzebną jakością powierzchni. Na koniec ustaw średnicę podstawy pnia na podstawie wysokości i spodziewanego obciążenia. Kalkulator pokaże, czy kombinacja jest wydajna objętościowo, stabilna czy ryzykowna.',
    },
    {
      type: 'paragraph',
      html: 'Po obliczeniach przejdź do podglądu slicera i sprawdź wygenerowane drzewo od pierwszej warstwy podpory do końcowego kontaktu. Szukaj pływających początków, bardzo cienkich nasad gałęzi, gałęzi przechodzących zbyt blisko modelu i niepodpartych wysp nawisów. Jeśli podpora jest niestabilna w kalkulatorze i wygląda rzadko w podglądzie, wzmocnij pień lub zmniejsz kąt rozgałęzienia. Jeśli podpora jest stabilna, ale wizualnie masywna, zmniejsz gęstość i sprawdź, czy wzór kontaktu nadal pokrywa nawis.',
    },
    {
      type: 'diagnostic',
      variant: 'success',
      title: 'Dobre ustawienie podpory drzewiastej jest nudne w podglądzie',
      html: 'Podgląd powinien pokazywać wyraźny pień, krótkie ścieżki gałęzi, wystarczającą liczbę kontaktów pod nawisem i otwartą przestrzeń wokół detali. Jeśli drzewo wygląda dramatycznie wizualnie, może robić zbyt wiele.',
    },
    {
      type: 'summary',
      title: 'Szybka sekwencja strojenia',
      items: [
        'Wprowadź wysokość punktu podparcia, nie tylko wysokość modelu.',
        'Zacznij od około 45-50° dla kąta rozgałęzienia.',
        'Użyj 30-45% gęstości dla ogólnych wydruków z PLA, a następnie dostosuj na podstawie podglądu.',
        'Zwiększ średnicę pnia, zanim uczynisz wysokie podpory ekstremalnie gęstymi.',
        'Potwierdź średnicę kontaktu i luz w rzeczywistym podglądzie slicera.',
      ],
    },
    { type: 'title', text: 'Kiedy podpory drzewiaste są lepsze niż zwykłe podpory', level: 2 },
    {
      type: 'paragraph',
      html: 'Podpory drzewiaste są najskuteczniejsze, gdy podparcie jest potrzebne w izolowanych obszarach: ramionach figurek, hełmach, rogach stworzeń, organicznych rzeźbach, dekoracyjnych łukach i zakrzywionych nawisach. Unikają wypełniania całej przestrzeni pod modelem, więc często zużywają mniej filamentu i pozostawiają mniej śladów niż blokowe podpory kratowe. Są również przydatne, gdy standardowe podpory tworzyłyby dużą ścianę trudną do usunięcia z zakrzywionej powierzchni.',
    },
    {
      type: 'paragraph',
      html: 'Zwykłe podpory mogą być nadal lepsze w przypadku płaskich technicznych nawisów, szerokich poziomych półek i powierzchni wymagających jednolitego interfejsu podpory. Korona podpory drzewiastej dotyka wybranych punktów, podczas gdy zwykłe podpory mogą zapewnić bardziej równomierną płaszczyznę. Jeśli spód musi być wymiarowo dokładny, porównaj oba podejścia. Gęste drzewo może zużyć więcej materiału niż prosta podpora prostoliniowa, jeśli nawis jest szeroki i płaski.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Podpory drzewiaste',
          description: 'Najlepsze do organicznej geometrii, rzadkich obszarów kontaktu i modeli, gdzie dostęp przy usuwaniu ma znaczenie.',
          highlight: true,
          points: ['Mniej materiału na izolowanych nawisach', 'Czystszy dostęp wokół zakrzywionych kształtów', 'Wrażliwe na kąt rozgałęzienia i sztywność pnia'],
        },
        {
          title: 'Zwykłe podpory',
          description: 'Najlepsze do szerokich płaskich nawisów, przewidywalnych interfejsów i prostych powierzchni mechanicznych.',
          points: ['Jednolite pokrycie spodu', 'Często łatwiejsze do analizy', 'Mogą zużywać znacznie więcej filamentu pod złożonymi modelami'],
        },
      ],
    },
    {
      type: 'card',
      title: 'Używaj obu typów podpór, gdy model tego wymaga',
      html: 'Wiele slicerów umożliwia malowanie podpór, blokery lub siatki modyfikujące. Model może używać podpór drzewiastych dla organicznych elementów i zwykłych podpór dla jednej płaskiej powierzchni inżynieryjnej.',
    },
  ],
  faq: [
    {
      question: 'Jaki jest dobry kąt rozgałęzienia dla podpór drzewiastych?',
      answer: 'Praktyczny zakres początkowy to około 40-50°. Używaj niższych kątów dla wysokich podpór i wyższych kątów tylko wtedy, gdy potrzebujesz większego zasięgu, a pień jest wystarczająco wytrzymały.',
    },
    {
      question: 'Czy wyższa gęstość podpór drzewiastych zawsze poprawia jakość wydruku?',
      answer: 'Nie. Wyższa gęstość poprawia pokrycie kontaktem i stabilność, ale zwiększa też zużycie filamentu, czas druku i ślady podpór. Używaj najniższej gęstości, która niezawodnie podpiera nawis.',
    },
    {
      question: 'Jak wybrać średnicę podstawy pnia?',
      answer: 'Zwiększaj średnicę podstawy pnia wraz ze wzrostem wysokości punktu podparcia. Wysokie podpory potrzebują mocniejszej ścieżki obciążenia, podczas gdy niskie podpory często mogą używać cieńszego pnia, by oszczędzić materiał.',
    },
    {
      question: 'Dlaczego średnica korony ma znaczenie?',
      answer: 'Średnica korony przewiduje, jak szeroka stanie się górna korona gałęzi. Szeroka korona może dobrze podpierać, ale może kolidować z detalami, zaklinować się w wnękach lub stać się trudna do usunięcia.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Wprowadź wysokość punktu podparcia', text: 'Użyj odległości pionowej od stołu roboczego do obszaru modelu wymagającego podparcia.' },
    { name: 'Ustaw kąt i gęstość gałęzi', text: 'Wybierz planowane wartości kąta rozgałęzienia i gęstości gałęzi ze slicera.' },
    { name: 'Dodaj średnicę podstawy pnia', text: 'Wprowadź przybliżoną średnicę głównego pnia podpory drzewiastej używanej przez slicer.' },
    { name: 'Sprawdź stabilność i objętość', text: 'Porównaj wskaźnik stabilności, średnicę korony i szacowaną objętość podpory przed krojeniem.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Kalkulator gęstości podpór drzewiastych',
      description: 'Optymalizuj gęstość podpór drzewiastych, kąt rozgałęzienia, średnicę podstawy pnia, średnicę korony, objętość podpory i stabilność w druku 3D.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Jaki jest dobry kąt rozgałęzienia dla podpór drzewiastych?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Praktyczny zakres początkowy to około 40-50°, z niższymi kątami dla wysokich podpór i szerszymi kątami tylko wtedy, gdy potrzebny jest dodatkowy zasięg.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Jak dostroić gęstość podpór drzewiastych w druku 3D',
      step: [
        { '@type': 'HowToStep', text: 'Wprowadź wysokość punktu podparcia.' },
        { '@type': 'HowToStep', text: 'Ustaw kąt rozgałęzienia, gęstość gałęzi i średnicę podstawy pnia.' },
        { '@type': 'HowToStep', text: 'Sprawdź średnicę korony, objętość podpory i wskaźnik stabilności.' },
        { '@type': 'HowToStep', text: 'Zastosuj wartości w podglądzie slicera i dostosuj ustawienia kontaktu.' },
      ],
    },
  ],
};
