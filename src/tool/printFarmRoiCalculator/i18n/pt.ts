import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PrintFarmRoiCalculatorUI } from '../ui';

const slug = 'calculadora-roi-fazenda-impressao-3d';
const title = 'Calculadora de ROI para fazenda de impressão 3D';
const description =
  'Simule a rentabilidade mensal, o período de retorno e o ROI anualizado para uma fazenda de impressão 3D usando ocupação, taxa de falha, eletricidade, custos fixos e custos variáveis por hora.';

const currencyOptions = [
  { code: 'EUR', label: 'EUR', symbol: '€' },
  { code: 'USD', label: 'USD', symbol: '$' },
  { code: 'GBP', label: 'GBP', symbol: '£' },
  { code: 'CAD', label: 'CAD', symbol: 'C$' },
  { code: 'AUD', label: 'AUD', symbol: 'A$' },
  { code: 'CHF', label: 'CHF', symbol: 'Fr' },
  { code: 'CNY', label: 'CNY', symbol: '¥' },
  { code: 'INR', label: 'INR', symbol: '₹' },
  { code: 'BRL', label: 'BRL', symbol: 'R$' },
  { code: 'MXN', label: 'MXN', symbol: 'MX$' },
  { code: 'RUB', label: 'RUB', symbol: '₽' },
  { code: 'PLN', label: 'PLN', symbol: 'zł' },
  { code: 'SEK', label: 'SEK', symbol: 'kr' },
  { code: 'NOK', label: 'NOK', symbol: 'kr' },
  { code: 'DKK', label: 'DKK', symbol: 'kr' },
  { code: 'TRY', label: 'TRY', symbol: '₺' },
  { code: 'JPY', label: 'JPY', symbol: '¥' },
];

const faqData = [
  {
    question: 'Como calcular o ROI de uma fazenda de impressão 3D?',
    answer:
      'Estime as horas mensais produtivas, multiplique-as pelo preço de venda por hora de máquina, subtraia os custos fixos, de eletricidade e variáveis por hora, e depois compare o lucro anual com o investimento inicial.',
  },
  {
    question: 'Por que a taxa de sucesso afeta o retorno da fazenda de impressão?',
    answer:
      'As impressões que falham consomem capacidade da máquina, material, bicos, energia e atenção do operador sem gerar horas faturáveis. Uma menor taxa de sucesso reduz as horas produtivas reais e atrasa o retorno.',
  },
  {
    question: 'O que deve ser incluído no custo variável por hora?',
    answer:
      'Inclua o consumo de filamento ou resina, o desgaste dos bicos, o desgaste da superfície de impressão, as peças de manutenção rotineira, os consumíveis e qualquer provisão por hora que varie de acordo com o tempo real de produção bem-sucedido.',
  },
  {
    question: 'O retorno é a mesma coisa que o ROI?',
    answer:
      'Não. O retorno estima quantos meses são necessários para recuperar o investimento inicial a partir do lucro líquido mensal. O ROI compara o lucro anualizado com o investimento original como uma porcentagem.',
  },
];

const howToData = [
  { name: 'Inserir escala da fazenda', text: 'Adicione o número de impressoras ativas e o investimento inicial para máquinas, configuração, estações de trabalho e comissionamento.' },
  { name: 'Adicionar custos operacionais mensais', text: 'Insira os custos fixos gerais e a eletricidade como custos mensais, depois adicione o custo variável por hora de máquina produtiva.' },
  { name: 'Definir ocupação e taxa de sucesso', text: 'Use porcentagens de ocupação e sucesso realistas para que o modelo desconte o tempo ocioso e as impressões com falha.' },
  { name: 'Ler os resultados de rentabilidade', text: 'Compare a receita mensal com os custos, depois use os meses de retorno e o ROI anualizado para avaliar a viabilidade do investimento.' },
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
    'Calculadora de ROI de fazenda de impressão 3D',
    'Simulador de retorno de investimento em impressão 3D',
    'Calculadora de rentabilidade de fazenda de impressão',
    'Ajuste de ocupação e impressões com falha',
    'Modelo de custo operacional multimoedas',
  ],
  inLanguage: 'pt',
};

export const content: ToolLocaleContent<PrintFarmRoiCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Entradas do ROI da fazenda de impressão',
    resultsAriaLabel: 'Resultados do ROI da fazenda de impressão',
    currencyLabel: 'Moeda',
    currencyOptions,
    printerCountLabel: 'Número de impressoras',
    initialInvestmentLabel: 'Investimento inicial',
    fixedMonthlyCostLabel: 'Custo mensal fixo',
    electricityMonthlyCostLabel: 'Custo mensal de eletricidade',
    hourlyRateLabel: 'Tarifa de venda por hora',
    occupancyLabel: 'Ocupação média',
    successRateLabel: 'Taxa de sucesso',
    variableCostLabel: 'Custo variável por hora',
    averageHoursPerPartLabel: 'Média de horas por peça',
    paybackLabel: 'Período de retorno',
    netProfitLabel: 'Lucro líquido mensal',
    annualRoiLabel: 'ROI anualizado',
    productiveHoursLabel: 'Horas produtivas reais',
    revenueLabel: 'Receita',
    costsLabel: 'Custos',
    fixedCostShortLabel: 'Fixo',
    electricityShortLabel: 'Eletricidade',
    variableCostShortLabel: 'Variável',
    marginLabel: 'Margem líquida',
    breakEvenPartsLabel: 'Peças para ponto de equilíbrio',
    breakEvenHoursLabel: 'Horas para ponto de equilíbrio',
    stressScenarioLabel: 'Pior cenário possível',
    exportSummaryLabel: 'Baixar resumo',
    chartLabel: 'Receita mensal versus custos operacionais',
    monthsUnit: 'meses',
    hoursUnit: 'h',
    percentUnit: '%',
    notViableLabel: 'Não viável',
    positiveInsight: 'O lucro mensal é positivo após considerar a ocupação, a taxa de sucesso e os custos operacionais.',
    negativeInsight: 'Os custos operacionais superam a receita ajustada; melhore a ocupação, os preços ou a taxa de falha antes de expandir.',
    currencySymbol: '€',
    defaultCurrencyCode: 'EUR',
    pendingLabel: '-',
    partsUnit: 'peças/mês',
    reportFilename: 'resumen-roi-fazenda-impressao.csv',
    reportTitle: 'Relatório de Viabilidade de ROI de Fazenda de Impressão 3D',
    reportCurrencyLabel: 'Moeda',
  },
  seo: [
    { type: 'title', text: 'Como funciona esta calculadora de ROI de fazenda de impressão 3D', level: 2 },
    {
      type: 'paragraph',
      html: 'Uma <strong>calculadora de ROI de fazenda de impressão 3D</strong> deve responder a uma pergunta de investimento específica: um grupo de impressoras recuperará o seu custo de configuração rapidamente o suficiente para justificar o capital, o espaço, a manutenção e o risco operacional? Este simulador modela essa pergunta a partir da capacidade mensal da máquina. Cada impressora contribui com 720 horas brutas em um mês padrão de 30 dias, e depois o modelo desconte essas horas pela ocupação e taxa de sucesso da impressão. O resultado não é a capacidade teórica; é o tempo de produção faturável que sobrevive a períodos ociosos, filas de trabalho, impressões com falha, reimpressões, calibração e tempo de inatividade prático.',
    },
    {
      type: 'paragraph',
      html: 'A cadeia de cálculo é intencionalmente transparente. As horas brutas mensais são iguais a <code>impressoras x 720</code>. As horas produtivas reais são iguais às horas brutas multiplicadas pela ocupação média e pela taxa de sucesso. A receita mensal é igual às horas produtivas multiplicadas pela tarifa horária cobrada do cliente. Os custos operacionais combinam custos fixos mensais gerais, eletricidade e custos variáveis por hora. O lucro líquido mensal é a receita menos esses custos operacionais. O período de retorno divide o investimento inicial pelo lucro líquido mensal, enquanto o ROI anualizado compara doze meses de lucro líquido com o investimento inicial.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '720 h', label: 'Capacidade bruta mensal por impressora', icon: 'mdi:clock-outline' },
        { value: 'U x S', label: 'Ajuste de ocupação e sucesso', icon: 'mdi:percent-outline' },
        { value: 'Receita - custos', label: 'Lucro líquido mensal', icon: 'mdi:finance' },
        { value: 'Investimento / lucro', label: 'Período de retorno', icon: 'mdi:calendar-clock' },
      ],
    },
    {
      type: 'tip',
      title: 'Use entradas conservadoras para decisões de investimento',
      html: '<p>Para uma primeira análise, insira a ocupação que você pode defender com a demanda atual, não a ocupação que você espera alcançar depois que o marketing melhorar. Uma fazenda que só funciona com uma ocupação otimista ainda não é um investimento robusto.</p>',
    },
    { type: 'title', text: 'Por que a ocupação altera a rentabilidade da fazenda de impressão', level: 2 },
    {
      type: 'paragraph',
      html: 'A ocupação é a porcentagem do tempo de máquina disponível que é realmente usada para imprimir trabalhos pagos ou vendíveis. É a alavanca mais forte em muitos modelos de fazendas pequenas porque o investimento inicial é fixo. Uma impressora comprada para produção custa o mesmo, seja reservada de as oito horas por dia ou vinte horas por dia. Uma maior ocupação distribui o aluguel, a configuração, o estoque de peças de reposição, o software e a depreciação da máquina por mais horas faturáveis.',
    },
    {
      type: 'paragraph',
      html: 'A calculadora trata a ocupação como um multiplicador direto na capacidade bruta. Dez impressoras criam 7200 horas de máquina brutas por mês. Com 40% de ocupação, apenas 2880 horas entram no modelo de receita antes do ajuste pela taxa de sucesso. Com 75% de ocupação, 5400 horas entram no modelo. A diferença pode decidir se o retorno leva meses, anos ou nunca ocorre.',
    },
    {
      type: 'table',
      headers: ['Nível de ocupação', 'Significado operacional', 'Implicação no ROI'],
      rows: [
        ['Abaixo de 30%', 'As máquinas passam a maior parte do mês esperando por pedidos, arquivos, operadores ou manutenção.', 'O investimento inicial é difícil de recuperar, a menos que o preço por hora seja alto.'],
        ['30-55%', 'Faixa inicial comum para fazendas com demanda mista e manuseio manual.', 'A rentabilidade depende muito dos custos fixos gerais e da taxa de falha.'],
        ['55-75%', 'Nível de reserva saudável com espaço para trabalhos urgentes, manutenção e alterações de configuração.', 'Frequentemente, a primeira faixa onde o retorno se torna realista.'],
        ['Acima de 75%', 'Alta ocupação que requer agendamento confiável, fluxo de materiais e manutenção preventiva.', 'Forte potencial de ROI, mas pouca tolerância para avarias ou gargalos do operador.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Alta ocupação não é o mesmo que alto lucro',
      badge: 'Riesgo de preços',
      html: '<p>Uma fazenda pode estar ocupada e ainda assim perder dinheiro se a tarifa horária for muito baixa, se as reimpressões forem frequentes, se o desperdício de material for alto ou se os custos fixos gerais forem subestimados. Sempre compare a ocupação com a margem, não apenas com a receita.</p>',
    },
    { type: 'title', text: 'Contabilizando impressões com falha e reimpressões', level: 2 },
    {
      type: 'paragraph',
      html: 'A taxa de sucesso inserida é o que separa este simulador de retorno de investimento de impressão 3D de uma simples calculadora de capacidade. As impressões que falham consomem o mesmo tempo do calendário que as bem-sucedidas, mas não geram o mesmo resultado vendível. Elas também podem consumir filamento, resina, plataformas de impressão, bicos, eletricidade, labor e a boa vontade do cliente. Uma fazenda com uma taxa de sucesso de 90% perde um de cada dez blocos de produção potenciais antes que a receita seja contabilizada.',
    },
    {
      type: 'paragraph',
      html: 'A taxa de sucesso deve ser medida sobre trabalhos comparáveis. Uma fazenda que imprime gabaritos repetitivos de PLA pode manter uma taxa de sucesso muito alta após o ajuste do processo. Uma fazenda que produz modelos de clientes únicos, peças altas, polímeros técnicos, miniaturas de resina ou trabalhos com múltiplos materiais pode precisar de uma suposição menor. Se você misturar trabalhos simples e arriscados, execute a calculadora duas vezes: uma para produção padrão e outra para trabalhos personalizados.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Produção repetida',
          description: 'Geometria de peça conhecida, perfis ajustados, materiais previsíveis e demanda estável.',
          icon: 'mdi:repeat',
          points: ['Maior suposição de sucesso', 'Menor incerteza de configuração', 'Melhor confiança no retorno'],
        },
        {
          title: 'Serviço de impressão personalizado',
          description: 'Os arquivos variam de acordo com o cliente, geometria, estratégia de suporte e expectativa de qualidade.',
          icon: 'mdi:file-cad',
          highlight: true,
          points: ['Suposição de sucesso moderada', 'Mais variação nas cotações', 'Precisa de provisão para reimpressão'],
        },
        {
          title: 'Materiais experimentais',
          description: 'Polímeros de engenharia, materiais flexíveis, filamentos com carga e ajuste do processo de resina.',
          icon: 'mdi:flask-outline',
          points: ['Menor suposição de sucesso', 'Maior desgaste de consumíveis', 'Use entradas de ROI prudentes'],
        },
      ],
    },
    {
      type: 'message',
      title: 'A taxa de falha pertence ao modelo financeiro',
      ariaLabel: 'Nota sobre contabilidade de falhas',
      html: '<p>Não esconda reimpressões dentro de custos fixos gerais vagos. Uma entrada visível de taxa de sucesso torna o caso de investimento mais fácil de desafiar, melhorar e explicar.</p>',
    },
    { type: 'title', text: 'Construindo um modelo de custo mensal confiável', level: 2 },
    {
      type: 'paragraph',
      html: 'O custo operacional tem três camadas nesta ferramenta. O custo mensal fixo cobre despesas que existem mesmo quando as impressoras estão ociosas: aluguel, internet, seguros, software, contabilidade, armazenamento, cobertura de mão de obra básica e outros custos operacionais gerais. O custo mensal de eletricidade capta a energia usada pelas impressoras e equipamentos de produção diretamente relacionados. O custo variável por hora cobre os custos que variam de acordo com o tempo de máquina produtivo, como filamento, resina, bicos, tubos de PTFE, desgaste da plataforma de impressão, filtros, lubrificante, peças de manutenção e consumíveis de limpeza.',
    },
    {
      type: 'paragraph',
      html: 'Manter a eletricidade como uma entrada mensal separada é útil para as fazendas porque o consumo de energia é frequentemente rastreado a partir de contas ou submedição, em vez de ser calculado impressão por impressão. Uma fazenda com mesa aquecida que produz PETG, ASA, ABS ou nylon pode ter um perfil de energia muito diferente de uma fazenda de PLA na mesma sala. Se você já calcula a eletricidade por hora de máquina, pode incluir esse valor dentro do custo variável por hora e definir o campo de eletricidade mensal como zero.',
    },
    {
      type: 'table',
      headers: ['Entrada de custo', 'Incluir', 'Evitar'],
      rows: [
        ['Custo mensal fixo', 'Aluguel, seguros, internet, software, pessoal básico, armazenamento.', 'Material usado apenas quando as impressoras funcionam.'],
        ['Custo mensal de eletricidade', 'Energia da impressora, secadores, estações de lavagem, cura, ventilação, compartilhamento de clima.', 'Energia doméstica ou de escritório não relacionada.'],
        ['Custo variável por hora', 'Filament, resina, bicos, consumíveis de manutenção, provisão de desgaste por hora.', 'Custo de compra de máquina único.'],
        ['Investimento inicial', 'Impressoras, racks, configuração, ferramentas, secadores, hardware de gestão da fazenda.', 'Custos mensais que se repetem após o lançamento.'],
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Horas brutas mensais', definition: 'Capacidade teórica da máquina antes dos ajustes de ocupação e impressões com falha.' },
        { term: 'Horas produtivas reais', definition: 'Capacidade restante após aplicar ocupação e taxa de sucesso.' },
        { term: 'Período de retorno', definition: 'Meses necessários para que o lucro líquido mensal recupere o investimento inicial.' },
        { term: 'ROI anualizado', definition: 'Doze meses de lucro líquido divididos pelo investimento inicial.' },
        { term: 'Custo variável por hora', definition: 'Provisão para consumíveis e manutenção que varia com o tempo de impressão produtivo.' },
      ],
    },
    { type: 'title', text: 'Definindo a tarifa de venda por hora de máquina', level: 2 },
    {
      type: 'paragraph',
      html: 'A tarifa de venda por hora é o valor cobrado do cliente por uma hora de máquina produtiva. Pode ser mostrada diretamente nas cotações ou embutida em uma fórmula de preço que também inclui material, mão de obra, acabamento, embalagem e margem. A chave é a consistência: se a tarifa horária for destinada a incluir o material, não adicione também o mesmo material como custo variável por hora. Se a tarifa horária for apenas tempo de máquina, certifique-se de que o material e a mão de obra estejam representados em outro lugar no modelo de negócios.',
    },
    {
      type: 'paragraph',
      html: 'Uma tarifa que parece competitiva em trabalhos individuais pode falhar em escala de fazenda. Impressões longas ocupam capacidade que poderia ter servido a outros trabalhos. Alturas de camada finas, materiais lentos, peças altas e geometrias com muitos suportes reduzem o rendimento. Portanto, uma calculadora de rentabilidade de fazenda de impressão deve ser usada em conjunto com dados de cotação reais: duração média do trabalho, média paga equivalente por hora, taxa de aceitação do cliente e volume de pedidos mensal.',
    },
    {
      type: 'proscons',
      title: 'Preços por hora em uma fazenda de impressão',
      items: [
        { pro: 'Torna visível a ocupação da máquina e evita cobrar a menos por impressões longas.', con: 'Os clientes podem precisar de explicação quando uma peça leve leva muitas horas.' },
        { pro: 'Funciona bem para planejamento de ROI interno e decisões de capacidade.', con: 'Não substitui a precificação de material, mão de obra, acabamento e risco.' },
        { pro: 'Permite comparação rápida entre tipos de impressora e cenários de ocupação.', con: 'Pode ser enganoso se a taxa de falha e o tempo de espera forem ignorados.' },
      ],
    },
    {
      type: 'card',
      icon: 'mdi:cash-clock',
      title: 'Ponto de verificação de preços',
      html: '<p>Se uma pequena mudança na tarifa horária alterar completamente o retorno, o investimento é sensível aos preços de mercado. Valide a tarifa contra a demanda real do cliente antes de comprar mais impressoras.</p>',
    },
    { type: 'title', text: 'Interpretando o período de retorno e o ROI anualizado', level: 2 },
    {
      type: 'paragraph',
      html: 'O período de retorno é fácil de entender porque é expresso em meses. Se o investimento inicial for de 18000 e o lucro líquido mensal for de 3000, o retorno é de seis meses. Se o lucro líquido mensal for zero ou negativo, o retorno não é viável porque a fazenda nunca recupera o investimento sob as suposições atuais. O retorno é útil para planejamento de caixa, financiamento de equipamentos e para decidir se a expansão deve ocorrer agora ou após a demanda melhorar.',
    },
    {
      type: 'paragraph',
      html: 'O ROI anualizado é mais rigoroso porque compara um ano de lucro líquido com o investimento inicial. Uma fazenda pode ter um lucro mensal positivo, mas ainda mostrar um ROI anualizado fraco se o retorno for lento. Por exemplo, uma fazenda que ganha 1000 por mês após os custos em um investimento de 24000 produz 12000 por ano antes de considerar o investimento original, de modo que o ROI do primeiro ano permanece negativo. Isso não significa automaticamente que o negócio é ruim, mas significa que o investidor precisa de um horizonte mais longo.',
    },
    {
      type: 'summary',
      title: 'Regras de decisão',
      items: [
        'Use o período de retorno para entender a velocidade de recuperação de caixa.',
        'Use o ROI anualizado para comparar a fazenda contra outros usos do capital.',
        'Execute novamente o modelo com menor ocupação e taxa de sucesso antes de se comprometer com a expansão.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'O teste de cenários é o valor real',
      badge: 'Planejamento',
      html: '<p>Execute um caso base, um caso conservador e um caso estressado. O melhor investimento não é aquele que parece ótimo apenas no cenário optimista; é aquele que permanece compreensível quando a demanda, as falhas ou os custos de eletricidade se movem contra você.</p>',
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
