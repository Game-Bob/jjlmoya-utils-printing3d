import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BulkFilamentRoiEstimatorUI } from '../ui';

const slug = 'estimador-roi-filamento-granel';
const title = 'Calculadora de ROI para Filamento a Granel';
const description = 'Compare bobinas de filamento de 1kg com bobinas a granel de 3kg, 5kg ou personalizadas, considerando risco de umidade, economia real e formato de moeda local.';

const faqData = [
  {
    question: 'Uma bobina de filamento de 5kg é sempre mais barata do que comprar cinco bobinas de 1kg?',
    answer: 'Não. Só é mais barata quando o custo por grama é menor e você consegue consumir o material antes que a exposição à umidade reduza a qualidade da impressão. O consumo lento pode transformar um desconto por granel em desperdício.',
  },
  {
    question: 'Por que a calculadora subtrai uma penalidade de risco?',
    answer: 'A penalidade estima o valor perdido quando o tempo esperado de consumo excede sua janela de armazenamento seguro. Não é uma conversão de taxa de câmbio nem um modelo de umidade de laboratório; é um ajuste de risco para planejamento.',
  },
  {
    question: 'Preciso de taxas de câmbio em tempo real?',
    answer: 'Não. A ferramenta usa uma tabela local de taxas de câmbio aproximadas para converter preços visíveis quando você alterna a moeda. Ela preserva a equivalência sem contatar um servidor, portanto decisões finais de compra devem ainda usar o preço exibido em sua loja ou banco.',
  },
  {
    question: 'Qual período de armazenamento seguro devo inserir para PLA, PETG, TPU ou Nylon?',
    answer: 'Use o período no qual você consegue manter aquele material específico seco em seu ambiente. PLA pode tolerar armazenamento mais longo que Nylon ou TPU, mas um ambiente aberto, clima úmido ou selagem deficiente do saco podem encurtar drasticamente a janela segura.',
  },
];

const howToData = [
  {
    name: 'Inserir o preço da bobina padrão',
    text: 'Insira o preço da bobina de 1kg que você compra habitualmente. O peso da bobina padrão pode ser ajustado se seu fornecedor usar outro formato.',
  },
  {
    name: 'Inserir a oferta a granel',
    text: 'Escolha 3kg, 5kg ou um peso personalizado e insira o preço total daquela bobina maior na mesma moeda.',
  },
  {
    name: 'Modelar o risco de armazenamento',
    text: 'Adicione seu consumo mensal e a duração máxima de armazenamento que você considera segura antes que umidade, fragilidade ou esforço de secagem se tornem um custo real.',
  },
  {
    name: 'Ler a economia real',
    text: 'Use o número da economia real como sinal de compra, pois ele inclui tanto o desconto a granel quanto a penalidade de degradação.',
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
  inLanguage: 'pt',
};

export const content: ToolLocaleContent<BulkFilamentRoiEstimatorUI> = {
  slug,
  title,
  description,
  ui: {
    currencyLabel: 'Moeda',
    unitSystemLabel: 'Unidades',
    metricLabel: 'Métrico',
    imperialLabel: 'Imperial',
    standardTitle: 'Bobina padrão',
    bulkTitle: 'Bobina a granel',
    consumptionTitle: 'Consumo e armazenamento',
    standardWeightLabel: 'Peso padrão',
    standardPriceLabel: 'Preço da bobina padrão',
    bulkWeightLabel: 'Peso a granel',
    bulkPresetThreeMetricLabel: '3 kg',
    bulkPresetFiveMetricLabel: '5 kg',
    bulkPresetThreeImperialLabel: '6,6 lb',
    bulkPresetFiveImperialLabel: '11 lb',
    otherWeightLabel: 'Outro',
    bulkPriceLabel: 'Preço da bobina a granel',
    customWeightLabel: 'Peso a granel personalizado',
    monthlyUseLabel: 'Consumo mensal',
    safeStorageLabel: 'Janela de armazenamento seguro',
    kgUnit: 'kg',
    lbUnit: 'lb',
    monthsUnit: 'meses',
    realSavingsLabel: 'Economia real após risco',
    grossSavingsLabel: 'Economia bruta',
    riskPenaltyLabel: 'Penalidade risco umidade',
    breakEvenLabel: 'Tempo de consumo',
    viabilityLabel: 'Viabilidade',
    tableMetricLabel: 'Métrica',
    tableStandardLabel: 'Bobina 1kg',
    tableStandardImperialLabel: 'Bobina 2,2lb',
    tableBulkLabel: 'Bobina a granel',
    costPerGramMetric: 'Custo por grama',
    costPerOunceMetric: 'Custo por onça',
    totalSpoolMetric: 'Preço da bobina',
    usableWindowMetric: 'Janela de consumo',
    profitableLabel: 'Rentável',
    neutralLabel: 'Neutro',
    poorLabel: 'Relação ruim',
    humidityWarningTitle: 'Risco de degradação por umidade',
    humidityWarning: 'Risco de degradação: a compra desta bobina pode fazer você perder dinheiro se não possuir um sistema de secagem ou armazenamento vedado.',
    safeMessage: 'O risco de armazenamento está dentro da sua janela de armazenamento seguro. Mantenha a bobina selada e seca para preservar a economia esperada.',
  },
  seo: [
    {
      type: 'title',
      text: 'Como saber se o filamento a granel é realmente mais barato',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Uma bobina de filamento de 3kg ou 5kg parece vantajosa porque o preço por quilo exibido é geralmente inferior ao de uma bobina de 1kg. O erro é comparar apenas o total no caixa. Uma comparação correta normaliza ambas as ofertas em <strong>custo por grama</strong>, multiplica a diferença pela quantidade de material que você realmente comprará e então determina se o material permanecerá imprimível até o fim.",
    },
    {
      type: 'paragraph',
      html: "A fórmula básica é simples: divida cada preço de bobina pelo seu peso em gramas. Se uma bobina de 1kg custa 24,99 e uma bobina de 5kg custa 89,99, a bobina de 1kg custa 0,02499 por grama e a bobina a granel custa 0,017998 por grama. A economia aparente é a diferença por grama multiplicada por 5000 gramas. Este número é útil, mas permanece incompleto se a bobina ficar aberta por meses.",
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '1000g', label: 'Massa de referência de uma bobina de filamento de escritório comum' },
        { value: '3-5kg', label: 'Formato a granel típico onde os descontos se tornam visíveis' },
        { value: '0 API', label: 'A equivalência de moeda usa taxas locais aproximadas em vez de uma chamada de servidor ao vivo' },
      ],
    },
    {
      type: 'table',
      headers: ['Pergunta', 'O que inserir', 'Por que é importante'],
      rows: [
        ['Qual é minha compra habitual?', 'O preço da bobina de 1kg', 'Isso estabelece o custo de referência por grama.'],
        ['Qual é a oferta a granel?', 'O preço total e o peso do lote', 'Isso cria o custo por grama reduzido.'],
        ['Com que velocidade você imprime?', 'Kg consumidos por mês', 'Isso estima a duração de armazenamento da bobina.'],
        ['Qual é seu nível de armazenamento?', 'Meses de segurança antes da degradação', 'Isso define quando a penalidade de risco começa.'],
      ],
    },
    {
      type: 'title',
      text: 'Por que a umidade altera o cálculo do ROI',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "O filamento não é um equivalente de tesouro depositado em segurança em uma prateleira. Muitos polímeros absorvem umidade do ar e um filamento úmido pode imprimir com bolhas, fiapos, extrusão quebradiça, superfícies turvas, má adesão de camadas e fluxo irregular. A velocidade exata depende do material, da umidade, da embalagem e se a bobina é armazenada em uma caixa seca, um saco selado ou um suporte aberto.",
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'O modo de falha oculto da bobina a granel',
      badge: 'Risco de planejamento',
      html: "Uma bobina de 5kg pode ser uma má compra mesmo quando o preço por grama é excelente. Se sua impressora consome 0,5kg por mês e sua janela de armazenamento seguro é de 3 meses, essa bobina leva cerca de 10 meses para ser terminada. O desconto precisa ser grande o suficiente para cobrir o custo da secagem, selagem, falhas de impressão ou risco de descarte.",
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Usuário rápido',
          description: 'Uma pequena fazenda de impressão, um criador de cosplay ou um lote de produção pode consumir 3kg a 5kg rapidamente. O filamento a granel é geralmente rentável porque o tempo de armazenamento é curto.',
          points: ['Alto uso mensal', 'Baixa exposição ao armazenamento', 'O desconto se torna dinheiro economizado'],
        },
        {
          title: 'Usuário amador intermitente',
          description: 'Um usuário que imprime nos fins de semana ou para reparos ocasionais pode levar vários meses para terminar uma bobina grande. O risco de umidade pode cancelar o desconto.',
          points: ['Baixo uso mensal', 'Longa vida aberta', 'Armazenamento seco é mais importante'],
        },
        {
          title: 'Usuário de materiais técnicos',
          description: 'Materiais como Nylon, TPU, misturas de PC e alguns graus de PETG geralmente exigem disciplina de secagem mais rigorosa. Compras a granel devem ser acompanhadas de equipamentos de armazenamento.',
          points: ['Maior sensibilidade à umidade', 'Caixa seca recomendada', 'O limite de penalidade deve ser conservador'],
        },
      ],
    },
    {
      type: 'title',
      text: 'O que o número da economia real significa',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "A ferramenta primeiro mostra a economia bruta, depois subtrai uma penalidade de degradação quando o tempo de consumo estimado excede a janela de armazenamento seguro. Esta penalidade é deliberadamente conservadora em vez de uma previsão de laboratório. Ela representa a realidade econômica de que um filamento úmido ou muito velho frequentemente cria custos não óbvios: eletricidade para secagem, manuseio extra, falhas de impressão, bicos entupidos, defeitos de superfície e a possibilidade de parte da bobina se tornar inadequada para trabalhos visíveis ou estruturais.",
    },
    {
      type: 'list',
      items: [
        'Economia real positiva significa que o desconto a granel resiste ao ajuste de risco de armazenamento.',
        'Neutro significa que a decisão depende da conveniência, disponibilidade de cores, frete e se você já possui uma caixa seca.',
        'Relação ruim significa que a bobina a granel não é mais barata por grama ou que a economia ajustada ao risco é negativa.',
        'A mensagem de aviso aparece quando os meses de consumo são maiores que a janela de armazenamento seguro que você inseriu.',
      ],
    },
    {
      type: 'proscons',
      title: 'Compensações da compra de filamento a granel',
      items: [
        { pro: 'Custo por grama menor para impressão de grande volume.', con: 'Mais capital imobilizado em um único material, cor e lote de fornecedor.' },
        { pro: 'Menos trocas de bobina durante longas séries de produção.', con: 'Uma massa exposta maior pode se degradar antes de ser consumida.' },
        { pro: 'Menos resíduos de embalagem por quilograma.', con: 'Bobinas grandes podem exigir suportes mais robustos ou suportes externos.' },
        { pro: 'Útil para trabalhos repetitivos em fazenda e produção por lotes.', con: 'Má escolha para cores raras, materiais experimentais ou uso lento como hobby.' },
      ],
    },
    {
      type: 'title',
      text: 'Como escolher uma janela de armazenamento seguro',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A janela de armazenamento seguro não é uma constante universal do material. É o tempo durante o qual você pessoalmente estima que o filamento permanecerá imprimível em suas condições de armazenamento. Um saco selado com dessecante fresco em uma sala seca é muito diferente de uma bobina aberta ao lado de uma impressora em uma garagem úmida. Para uma decisão de compra conservadora, insira o número de meses após o qual você começaria a secar a bobina antes de impressões importantes.',
    },
    {
      type: 'table',
      headers: ['Situação', 'Comportamento de planejamento sugerido', 'Motivo'],
      rows: [
        ['Suporte aberto em sala úmida', 'Use uma janela curta', 'A exposição à umidade é contínua.'],
        ['Caixa vedada com dessecante', 'Use uma janela mais longa', 'A bobina fica protegida entre as impressões.'],
        ['Caixa seca alimentando a impressora', 'Use uma janela longa mas realista', 'Impressão e armazenamento são ambos controlados.'],
        ['Nylon, TPU, PC ou suporte solúvel', 'Seja conservador', 'Estes materiais podem se tornar problemáticos rapidamente quando úmidos.'],
        ['PLA usado para protótipos aproximados', 'A tolerância ao risco pode ser maior', 'Defeitos estéticos menores podem ser aceitáveis para peças não críticas.'],
      ],
    },
    {
      type: 'tip',
      title: 'Use a calculadora antes do fim da promoção',
      html: 'Ofertas relâmpago geralmente tornam as bobinas a granel urgentes. Insira o preço promocional, o preço incluindo frete se possível, e seu consumo mensal realista. Se o tempo de consumo exceder sua janela de armazenamento, a promoção precisa ser interessante o suficiente para compensar o risco adicionado.',
    },
    {
      type: 'title',
      text: 'Conversão de moeda sem API de taxas de câmbio',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Este estimador foi projetado para funcionar no lado do cliente. Ele não busca taxas de câmbio ao vivo, mas o seletor de moeda ainda aplica um multiplicador de conversão local quando o usuário alterna a moeda. Isso significa que uma bobina inserida a 24,99 EUR se torna um equivalente aproximado em USD, GBP, JPY ou outra moeda suportada em vez de simplesmente substituir o símbolo. As taxas são estimativas de planejamento, portanto os preços no caixa, taxas de cartão, impostos e diferenças de conversão específicas de cada mercado devem sempre ser verificados antes da compra.",
    },
    {
      type: 'glossary',
      items: [
        { term: 'Custo por grama', definition: 'O preço da bobina dividido pelo número total de gramas de filamento. É a unidade normalizada usada para uma comparação justa.' },
        { term: 'Economia bruta', definition: 'A vantagem de preço antes de considerar o risco de umidade ou armazenamento.' },
        { term: 'Penalidade de risco', definition: 'Uma dedução de planejamento aplicada quando a bobina leva mais tempo para ser consumida do que a janela de armazenamento seguro.' },
        { term: 'Economia real', definition: 'A economia bruta menos a penalidade de risco. É o principal sinal de compra.' },
        { term: 'Janela de consumo', definition: 'O peso da bobina a granel dividido pelo consumo mensal estimado.' },
      ],
    },
    {
      type: 'summary',
      title: 'Regra prática de compra',
      items: [
        'Compre a granel quando a economia real for claramente positiva e a janela de consumo corresponder à sua configuração de armazenamento.',
        'Evite o granel quando estiver comprando uma cor rara que ficará sem uso após um projeto.',
        'Trate o equipamento de secagem como parte do sistema de filamento a granel, não como um luxo opcional para polímeros sensíveis à umidade.',
        'Compare os preços entregues, não apenas os preços na página do produto, quando o frete diferir entre os tamanhos de bobinas.',
      ],
    },
    {
      type: 'message',
      title: 'Resultado final',
      html: 'Uma bobina a granel é rentável quando três condições são atendidas: custo por grama menor, consumo mensal suficiente e armazenamento que mantém o filamento imprimível. Se uma condição faltar, o desconto aparente pode se transformar em uma perda de materiais disfarçada.',
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
