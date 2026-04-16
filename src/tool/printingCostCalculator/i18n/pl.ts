import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PrintingCostCalculatorUI } from '../ui';

const slug = 'kalkulator-kosztow-druku-3d';
const title = 'Kalkulator Kosztów Druku 3D: Filament i Energia';
const description = 'Oblicz rzeczywistą cenę swoich wydruków 3D. Zawiera koszt materiału, prądu, amortyzację maszyny oraz robociznę.';

const faqData = [
  {
    question: 'Dlaczego koszty energii tak bardzo się różnią?',
    answer: 'Największe zużycie wynika z utrzymywania temperatury stołu. Materiały takie jak ABS (100°C) zużywają znacznie więcej energii niż PLA (60°C). Wpływ ma również to, czy drukarka jest otwarta, czy zamknięta.',
  },
  {
    question: 'Jak sprawdzić, ile watów zużywa moja drukarka?',
    answer: 'Większość drukarek domowych zużywa średnio 100-150W podczas pracy. Możesz to dokładnie zmierzyć za pomocą inteligentnej wtyczki lub watomierza.',
  },
  {
    question: 'Co to jest margines strat?',
    answer: 'To filament, który nie jest częścią gotowego elementu: podpory, tratwa (raft), obramowanie (skirt) i wstępne czyszczenie dyszy. Zalecamy przyjęcie minimum 5%, aby obliczenia były realistyczne.',
  },
];

const howToData = [
  {
    name: 'Wprowadź dane techniczne',
    text: 'Wpisz wagę części (podaną przez oprogramowanie slicer, np. Cura), czas drukowania oraz zużycie energii przez Twoją maszynę.',
  },
  {
    name: 'Skonfiguruj koszty ekonomiczne',
    text: 'Dostosuj cenę szpuli, stawkę za energię elektryczną oraz wartość Twojej godziny pracy manualnej.',
  },
  {
    name: 'Analizuj zysk',
    text: 'Przesuń suwak marży, aby zobaczyć sugerowaną cenę detaliczną i przejrzyj wykres kołowy, aby sprawdzić, na co idą pieniądze.',
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

const howToSchema: WithContext<HowToThing> = {
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'PLN' },
  inLanguage: 'pl',
};

export const content: ToolLocaleContent<PrintingCostCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    materialTitle: 'Materiał',
    partWeightLabel: 'Waga części (netto)',
    gramsUnit: 'gramy',
    spoolPriceLabel: 'Cena szpuli (1kg)',
    spoolPriceUnit: 'zł/kg',
    wasteMarginLabel: 'Margines strat: ',
    energyTitle: 'Energia i Czas',
    printTimeLabel: 'Czas druku',
    hoursUnit: 'godziny',
    averagePowerLabel: 'Średnie zużycie',
    wattsUnit: 'watów',
    electricityRateLabel: 'Stawka za prąd',
    kwhPriceUnit: 'zł/kWh',
    amortizationTitle: 'Amortyzacja i Praca',
    machineCostHourLabel: 'Koszt maszyny na godzinę',
    priceHourUnit: 'zł/h',
    laborCostHourLabel: 'Praca (manualna)',
    minutesUnit: 'minuty',
    manufacturingCostLabel: 'Koszt Produkcji',
    suggestedPriceLabel: 'Sugerowana Cena (+{margin}%)',
    costBreakdownTitle: 'Podział Kosztów',
    plasticLabel: 'Tworzywo',
    electricityLabel: 'Energia',
    machineLabel: 'Maszyna',
    laborLabel: 'Praca',
    proTip: 'Czy wiesz, że grzanie stołu do 100°C dla ABS może podwoić koszt energii w porównaniu do PLA? Nie zapomnij o nieudanych wydrukach: jeśli 10% Twoich wydruków się nie udaje, Twój realny koszt jest o 10% wyższy.',
  },
  seo: [
    {
      type: 'title',
      text: 'Obliczanie Realnych Kosztów Druku 3D: Więcej niż Filament',
      level: 1,
    },
    {
      type: 'paragraph',
      html: 'Kiedy zaczynamy przygodę z wytwarzaniem przyrostowym, często myślimy, że jedynym kosztem jest plastik wychodzący z dyszy. Jeśli jednak chcesz uczynić z tego biznes lub po prostu lepiej zarządzać swoim hobby, musisz zrozumieć, że <strong>rentowność</strong> tkwi w szczegółach, których na pierwszy rzut oka nie widać.',
    },
    {
      type: 'title',
      text: '4 Filary Kosztów w Druku 3D',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Nasz kalkulator dzieli cenę końcową na cztery kluczowe obszary:',
    },
    {
      type: 'summary',
      items: [
        'Materiał i Straty: Obejmuje wagę części, ale także plastik zużyty na podpory, obramowania i czyszczenie dyszy. Zawsze zalecamy dodanie 5-10% marginesu na możliwe niepowodzenia druku.',
        'Zużycie Energii: Drukarka 3D nie zużywa tyle samo energii drukując PLA (stół 60°C), co ABS czy Nylon (stół 100°C+). Cena za kWh może robić różnicę przy dużych elementach.',
        'Amortyzacja Maszyny: Każda godzina pracy drukarki to zużycie jej komponentów (paski, wentylatory, dysze). Uwzględnienie niewielkiego kosztu godzinowego pozwoli opłacić przyszłe naprawy.',
        'Praca: Twój czas jest najcenniejszy. Przygotowanie pliku, czyszczenie stołu i post-processing części muszą zostać uwzględnione.',
      ],
    },
    {
      type: 'title',
      text: 'Jak obliczyć amortyzację?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Prostym sposobem jest podzielenie ceny zakupu drukarki przez jej szacowany czas życia w godzinach. Na przykład, jeśli drukarka kosztuje 1600 zł i spodziewasz się, że przepracuje co najmniej 2000 godzin przed większym remontem, jej koszt amortyzacji wynosi <strong>0,80 zł za godzinę</strong>.',
    },
    {
      type: 'tip',
      title: 'Oszczędzaj na Energii',
      html: '<p>Jeśli drukujesz dużo, rozważ zamknięcie drukarki w obudowie. Nie tylko pomaga to w drukowaniu materiałów technicznych, ale także zatrzymuje ciepło, dzięki czemu stół grzewczy zużywa znacznie mniej energii na utrzymanie temperatury.</p>',
    },
    {
      type: 'title',
      text: 'Strategie Cenowe Głosujące Sprzedaż',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Gdy znasz już swój koszt bazowy, musisz zdecydować o marży. W świecie druku 3D na zlecenie powszechna jest marża rzędu 50-100% powyżej całkowitego kosztu, aby pokryć ryzyko nieoczekiwanych błędów i zysk handlowy. Jeśli część wymaga dużo manualnej pracy przy szlifowaniu i malowaniu, marża ta powinna być wyższa.',
    },
    {
      type: 'summary',
      items: [
        'Wycena według czasu: Idealna dla czystych usług drukowania.',
        'Wycena według wagi: Powszechna dla masywnych, ale prostych elementów.',
        'Wycena według wartości: Jeśli projekt jest unikalny, cena nie powinna opierać się tylko na koszcie, ale na tym, ile klient jest gotów zapłacić.',
      ],
    },
  ],
  faqTitle: 'Najczęściej Zadawane Pytania o Koszty 3D',
  faq: faqData,
  bibliographyTitle: 'Bibliografia i Zasoby',
  bibliography: [
    {
      name: 'PrusaPrinters: Obliczanie kosztów druku 3D',
      url: 'https://blog.prusa3d.com/es/calculadora-precio-impresion-3d_38905/',
    },
    {
      name: 'Simplify3D: Estymacja Materiałów i Kosztów',
      url: 'https://forum.simplify3d.com/viewtopic.php?t=11758',
    },
    {
      name: '3DHubs: Przewodnik po kosztach wytwarzania przyrostowego',
      url: 'https://www.hubs.com/knowledge-base/cost-3d-printing/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
