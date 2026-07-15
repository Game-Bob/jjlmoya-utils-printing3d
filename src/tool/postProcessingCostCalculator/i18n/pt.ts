import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PostProcessingCostCalculatorUI } from '../ui';

const slug = 'calculadora-custo-pos-processamento-impressao-3d';
const title = 'Calculadora de custo de pós processamento de impressão 3D';
const description =
  'Estime o acabamento manual, a remoção de suportes, o lixamento, a pintura, outros trabalhos manuais, consumíveis e o custo de pós-processamento ajustado por moeda para peças impressas em 3D.';

const faqData = [
  {
    question: 'Como calcular o custo de pós-processamento na impressão 3D?',
    answer:
      'Some todos os minutos de acabamento manual, multiplique o total pela taxa horária de mão de obra a dividir por 60 e depois adicione os consumíveis. Esta calculadora também mostra a quota de custo de cada fase de acabamento.',
  },
  {
    question: 'Os consumíveis devem ser incluídos no custo de acabamento manual?',
    answer:
      'Sim. Lixa, primer de enchimento, tinta, luvas, fita de máscara, IPA, fluido de limpeza de resina, panos e desgaste de pequenas ferramentas podem ser suficientemente expressivos para alterar o orçamento de peças acabadas.',
  },
  {
    question: 'A conversão de moeda altera a fórmula de custo?',
    answer:
      'Não. A moeda apenas altera a escala monetária apresentada. A fórmula de mão de obra mantém-se: minutos multiplicados pela taxa horária a dividir por 60 mais consumíveis.',
  },
  {
    question: 'Que taxa horária devo usar para a mão de obra em impressão 3D?',
    answer:
      'Use a taxa de mão de obra carregada da oficina, não apenas o salário líquido. Inclua salários, encargos patronais, tempo não faturável remunerado, supervisão e o nível de qualificação exigido para o acabamento cosmético.',
  },
];

const howToData = [
  { name: 'Introduza os minutos de acabamento', text: 'Adicione a remoção de suportes, o lixamento, a pintura e qualquer outro tempo manual em minutos.' },
  { name: 'Defina a taxa e os consumíveis', text: 'Introduza a sua taxa horária de acabamento e o custo direto dos consumíveis na moeda selecionada.' },
  { name: 'Escolha a moeda e o fator', text: 'Utilize o seletor de moeda para os símbolos e o fator de conversão opcional para ajustes de orçamento.' },
  { name: 'Copie o resultado', text: 'Use o botão de cópia para colar o total, a mão de obra, os consumíveis e os minutos num orçamento.' },
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
    'calculadora de custo de pós-processamento 3D',
    'estimativa de custo de mão de obra de impressão 3D',
    'custo de acabamento manual impressão 3D',
    'calculadora de taxa horária de pós-processamento',
  ],
  inLanguage: 'pt',
};

export const content: ToolLocaleContent<PostProcessingCostCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Parâmetros de custo de pós-processamento',
    resultsAriaLabel: 'Resultados de custo de pós-processamento',
    currencyLabel: 'Moeda',
    currencyOptions: [
      { code: 'EUR', label: '€', symbol: '€' },
      { code: 'USD', label: '$', symbol: '$' },
      { code: 'GBP', label: '£', symbol: '£' },
      { code: 'CAD', label: 'C$', symbol: 'C$' },
      { code: 'AUD', label: 'A$', symbol: 'A$' },
      { code: 'CHF', label: 'Fr', symbol: 'Fr' },
      { code: 'CNY', label: '¥', symbol: '¥' },
      { code: 'INR', label: '₹', symbol: '₹' },
      { code: 'BRL', label: 'R$', symbol: 'R$' },
      { code: 'MXN', label: '$', symbol: '$' },
      { code: 'RUB', label: '₽', symbol: '₽' },
      { code: 'PLN', label: 'zł', symbol: 'zł' },
      { code: 'SEK', label: 'kr', symbol: 'kr' },
      { code: 'NOK', label: 'kr', symbol: 'kr' },
      { code: 'DKK', label: 'kr', symbol: 'kr' },
      { code: 'TRY', label: '₺', symbol: '₺' },
      { code: 'JPY', label: '¥', symbol: '¥' },
    ],
    currencyOptionSeparator: ' - ',
    supportLabel: 'Remoção de suportes',
    sandingLabel: 'Lixamento',
    paintingLabel: 'Pintura',
    otherLabel: 'Outra mão de obra',
    hourlyRateLabel: 'Taxa horária',
    consumablesLabel: 'Consumíveis',
    conversionFactorLabel: 'Fator de conversão',
    conversionFactorUnit: 'x',
    conversionHint: 'Deixe em 1 se a taxa já estiver introduzida em moeda local; altere para aplicar um multiplicador global ao orçamento.',
    minutesUnit: 'min',
    hourUnit: 'h',
    rateUnitSeparator: '/',
    totalLabel: 'Total de pós-processamento',
    laborLabel: 'Mão de obra',
    consumablesBreakdownLabel: 'Consumíveis',
    timeLabel: 'Tempo manual',
    effectiveRateLabel: 'Taxa efetiva',
    breakdownLabel: 'Quota de custo por fase de acabamento',
    copyLabel: 'Copiar resultado',
    copiedLabel: 'Copiado',
    copyTemplate: 'Custo de pós-processamento: {total} ({minutes}; mão de obra {labor}; consumíveis {consumables})',
    pendingLabel: '-',
    currencySymbol: '€',
  },
  seo: [
    { type: 'title', text: 'O que esta calculadora de custo de pós-processamento de impressão 3D mede', level: 2 },
    {
      type: 'paragraph',
      html: 'Uma <strong>calculadora de custo de pós-processamento de impressão 3D</strong> deve responder a uma questão prática de orçamentação: quanto dinheiro é consumido depois de a impressora parar? A peça impressa pode já ter um custo de tempo de máquina e um custo de material, mas muitos trabalhos pagos ganham-se ou perdem-se na remoção de suportes, no lixamento, no enchimento, no primário, na pintura, na limpeza, no mascaramento, na inspeção e na retrabalho. Esta calculadora divide essas tarefas de acabamento manual em minutos, multiplica-as por uma taxa horária de pós-processamento e adiciona os consumíveis diretos para que o valor final possa ser colado num orçamento.',
    },
    {
      type: 'paragraph',
      html: 'A fórmula base é intencionalmente transparente: <code>((suportes + lixamento + pintura + outros minutos) x (taxa horária / 60)) + consumíveis</code>. O fator de conversão opcional multiplica a taxa horária e os consumíveis quando uma oficina quer escalar valores para conversão de moeda, tabelas de preços regionais, margem de subcontratados ou um ajuste temporário. Se o utilizador introduzir diretamente uma taxa de mão de obra local, o fator deve manter-se em <code>1</code> e o resultado permanece independente das suposições sobre taxas de câmbio.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'min x taxa/60', label: 'Fórmula de custo de mão de obra', icon: 'mdi:clock-outline' },
        { value: '5 fases', label: 'Suportes, lixamento, pintura, outros, consumíveis', icon: 'mdi:chart-bar-stacked' },
        { value: '1x', label: 'Fator de conversão predefinido', icon: 'mdi:swap-horizontal' },
        { value: 'Em direto', label: 'Sem botão de calcular', icon: 'mdi:flash-outline' },
      ],
    },
    {
      type: 'tip',
      title: 'Orce a pessoa, não a impressora',
      html: '<p>O pós-processamento é geralmente liderado pela mão de obra. Uma impressão lenta pode ser barata de acabar, enquanto uma peça pequena com suportes em superfícies cosméticas pode exigir trabalho manual especializado e caro. Trate a <strong>estimativa de custo de mão de obra de impressão 3D</strong> como uma linha própria em vez de a esconder na margem de material.</p>',
    },
    { type: 'title', text: 'Remoção de suportes: o primeiro fator de custo manual', level: 2 },
    {
      type: 'paragraph',
      html: 'A remoção de suportes não é apenas o tempo necessário para arrancar plástico de um modelo. Pode incluir corte, aquecimento, dissolução, enxaguamento, raspagem, aparamento de restos de suporte, proteção de elementos frágeis e verificação se as marcas de suporte exigem trabalho de superfície adicional. Os suportes arbóreos FDM, as camadas de interface densas, as pontas de suporte SLA e a remoção de pó SLS criam perfis de mão de obra diferentes. Para uma estimativa fiável do <strong>custo de acabamento manual de impressão 3D</strong>, o tempo de remoção de suportes deve ser medido em trabalhos comparáveis em vez de estimado com base na duração de impressão.',
    },
    {
      type: 'table',
      headers: ['Situação de suportes', 'Comportamento de tempo típico', 'Nota de orçamento'],
      rows: [
        ['Suportes de separação fácil', 'Remoção curta e previsível', 'Frequentemente adequado para uma alocação fixa de minutos por peça.'],
        ['Interface de suporte densa', 'Aparamento mais longo e limpeza de superfície', 'Adicionar minutos de lixamento separadamente para que o fator de custo permaneça visível.'],
        ['Miniaturas de resina ou modelos delicados', 'Corte lento para evitar danos', 'Usar uma taxa de mão de obra mais elevada se for necessário trabalho manual especializado.'],
        ['Suporte solúvel', 'Menos corte manual mas mais tempo de processo', 'Incluir a manipulação da solução e a secagem se o operador estiver envolvido.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Não orce a remoção de suportes apenas pelo volume de suporte no slicer',
      badge: 'Risco de mão de obra',
      html: '<p>O volume de suporte pode ser baixo enquanto o acesso é difícil. Um pequeno suporte escondido dentro de um elemento estreito pode custar mais mão de obra do que um grande suporte externo que se descola de forma limpa.</p>',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Registe os minutos de remoção de suportes para famílias de peças recorrentes.',
        'Separe a remoção do lixamento para que as decisões sobre estratégia de suportes sejam mais fáceis de comparar.',
        'Aumente a estimativa para geometrias frágeis, pinos finos, miniaturas e superfícies voltadas para o cliente.',
        'Use a mesma moeda e base de taxa horária do resto do orçamento.',
      ],
    },
    { type: 'title', text: 'Lixamento, enchimento e preparação de superfície', level: 2 },
    {
      type: 'paragraph',
      html: 'O lixamento é frequentemente o maior custo oculto nas peças 3D acabadas porque é iterativo. O operador pode percorrer lixamento grosseiro, massa, tempo de cura ou secagem, lixamento fino, correção pontual e inspeção sob luz rasante. A altura de camada, a dureza do material, as marcas de suporte, o nível de brilho exigido e a geometria da peça alteram a quantidade de trabalho manual. Um apoio funcional pode precisar de cinco minutos; um protótipo de exposição pode precisar de uma hora antes de a tinta sequer ser aberta.',
    },
    {
      type: 'paragraph',
      html: 'A calculadora trata o lixamento como minutos multiplicados pela taxa horária de acabamento porque o processo é limitado pelo operador mais do que pela máquina. Consumíveis como abrasivos, primer de enchimento, massa, panos anti-estáticos e materiais de mascaramento devem ir para o campo de consumíveis em vez de ficarem enterrados na taxa de mão de obra. Isto mantém a <strong>análise de custo de acabamento de impressão 3D</strong> legível: a mão de obra mostra a pressão do tempo, os consumíveis mostram os insumos adquiridos.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Acabamento funcional',
          description: 'Arestas vivas limpas, suportes removidos e marcas grosseiras reduzidas o suficiente para montagem.',
          icon: 'mdi:wrench-outline',
          points: ['Menor tempo de lixamento', 'Consumíveis mínimos', 'Inspeção focada no ajuste'],
        },
        {
          title: 'Acabamento de apresentação',
          description: 'Faces visíveis alisadas, primário usado seletivamente e linhas de camada reduzidas para revisão do cliente.',
          icon: 'mdi:eye-outline',
          highlight: true,
          points: ['Tempo de lixamento moderado', 'Primário e massa prováveis', 'Superfícies cosméticas conduzem a mão de obra'],
        },
        {
          title: 'Acabamento pronto para pintar',
          description: 'Lixamento progressivo, enchimento, mascaramento e correção de defeitos antes das camadas de cor.',
          icon: 'mdi:spray',
          points: ['Maior tempo manual', 'Os consumíveis importam', 'Margem para retrabalho recomendada'],
        },
      ],
    },
    {
      type: 'message',
      title: 'Os abrasivos são consumíveis',
      ariaLabel: 'Nota sobre consumíveis',
      html: '<p>Folhas de lixa, esponjas de lixar, limas de agulha, massa, luvas e panos não são gratuitos. Adicione o seu custo direto quando o trabalho consome uma parte significativa deles.</p>',
    },
    { type: 'title', text: 'Estimativa do custo de pintura e revestimento', level: 2 },
    {
      type: 'paragraph',
      html: 'Os minutos de pintura devem incluir o tempo ativo do operador: mascaramento, mistura, pulverização, trabalho com pincel, retoque, remoção da máscara, limpeza da área de trabalho e inspeção. O tempo passivo de secagem ou cura só deve ser adicionado quando bloqueia o operador ou ocupa espaço de cabine escasso debitado como mão de obra ou gastos gerais. Esta distinção evita que uma <strong>calculadora de taxa horária de pós-processamento</strong> converta cada hora de espera em custo de mão de obra quando ninguém está a trabalhar ativamente na peça.',
    },
    {
      type: 'table',
      headers: ['Tarefa de pintura', 'Registar como mão de obra?', 'Registar como consumíveis?'],
      rows: [
        ['Mascaramento e remoção de máscara', 'Sim, minutos ativos', 'Fita, filme, tampões e gabaritos'],
        ['Mistura de tinta ou revestimento de resina', 'Sim, minutos ativos', 'Tinta, diluente, copos, filtros, luvas'],
        ['Pulverização ou pintura com pincel', 'Sim, minutos ativos', 'Material de revestimento e solvente de limpeza'],
        ['Tempo de secagem', 'Apenas se bloquear mão de obra paga ou capacidade de cabine', 'Normalmente sem material direto a menos que calor ou lâmpadas sejam faturados separadamente'],
      ],
    },
    {
      type: 'tip',
      title: 'Cobre a complexidade de cor de forma explícita',
      html: '<p>Uma camada simples de primário e um acabamento de dois tons mascarado podem ter custos de material semelhantes mas custos de mão de obra muito diferentes. Use o campo de minutos de pintura para expor a diferença antes de aplicar a margem.</p>',
    },
    {
      type: 'proscons',
      title: 'Alocação fixa de acabamento vs minutos de acabamento medidos',
      items: [
        { pro: 'Uma alocação fixa é rápida para trabalhos repetidos com requisitos de acabamento estáveis.', con: 'Esconde qual fase consome o lucro quando um trabalho muda.' },
        { pro: 'Minutos medidos tornam a estimativa auditável e fácil de atualizar.', con: 'Exigem que a oficina registe os tempos de acabamento reais para tipos de peças comuns.' },
        { pro: 'A barra de custo visual torna os orçamentos orientados para o cliente mais fáceis de explicar internamente.', con: 'Não substitui o julgamento sobre o risco cosmético e a probabilidade de retrabalho.' },
      ],
    },
    { type: 'title', text: 'Consumíveis e gastos gerais de pós-processamento', level: 2 },
    {
      type: 'paragraph',
      html: 'Os consumíveis são materiais diretos consumidos durante o acabamento. Podem incluir lixa, primário, massa, tinta, fluido de lavagem de resina, IPA, toalhas, luvas de nitrilo, lâminas, fita de máscara, tampões de proteção, copos descartáveis, filtros, composto de polimento e verniz. Algumas oficinas incluem-nos nos gastos gerais, mas calculá-los como campo direto é mais seguro para trabalhos com padrões de acabamento incomuns, grande área de superfície, lixamento agressivo ou fluxos de trabalho com uso intensivo de solventes.',
    },
    {
      type: 'paragraph',
      html: 'Um campo de consumíveis separado também ajuda nos fluxos de trabalho de <strong>calculadora de gastos gerais de pós-processamento</strong>. Os gastos gerais são normalmente mais amplos do que os consumíveis: renda, extração, iluminação, filtragem de ar, utilização do compressor, manutenção, software, supervisão e tempo administrativo. Esta calculadora não pretende alocar cada linha de gasto geral. Em vez disso, fornece um subtotal de custo direto limpo que pode alimentar um modelo de orçamento maior onde os gastos gerais e a margem são aplicados posteriormente.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Taxa de mão de obra', definition: 'O custo horário ou taxa de venda atribuída ao tempo de acabamento manual ativo.' },
        { term: 'Consumíveis', definition: 'Materiais diretos esgotados durante o pós-processamento, como abrasivos, revestimentos, luvas e fluidos de limpeza.' },
        { term: 'Fator de conversão', definition: 'Um multiplicador global aplicado aos valores monetários para dimensionamento de moeda ou ajustes de orçamento.' },
        { term: 'Custo direto', definition: 'Um custo que pode ser associado à peça ou lote específico que está a ser acabado.' },
        { term: 'Gastos gerais', definition: 'Custos empresariais que suportam a produção mas não são consumidos por uma única peça numa quantidade simples e mensurável.' },
      ],
    },
    {
      type: 'card',
      icon: 'mdi:receipt-text-outline',
      title: 'Onde fica a margem',
      html: '<p>Esta ferramenta calcula o custo de acabamento antes do lucro. Aplique a margem depois de juntar material, tempo de máquina, pós-processamento, risco e gastos gerais, caso contrário os trabalhos com uso intensivo de mão de obra podem ser subvalorizados.</p>',
    },
    { type: 'title', text: 'Seleção de moeda e fator de conversão', level: 2 },
    {
      type: 'paragraph',
      html: 'A seleção de moeda altera o símbolo e pode converter os valores monetários existentes usando fatores de referência práticos. O cálculo em si é neutro em termos de moeda: uma taxa de 30 por hora e 10 em consumíveis produzem a mesma estrutura independentemente de o símbolo ser euros, dólares, libras, ienes ou outra moeda suportada. Isto é útil para orçamentos internacionais porque a matemática permanece estável enquanto a apresentação corresponde ao cliente ou à localização da oficina.',
    },
    {
      type: 'paragraph',
      html: 'O fator de conversão existe para casos em que o utilizador não quer uma conversão automática de taxa de câmbio ou precisa de um multiplicador comercial personalizado. Um fator de <code>1</code> significa que a taxa horária e os consumíveis já estão introduzidos na moeda local selecionada. Um fator de <code>1,15</code> aumenta ambos os valores monetários em quinze por cento. Um fator de <code>0,92</code> reduz-os em oito por cento. Como o fator afeta o dinheiro e não os minutos, a repartição visual mantém-se proporcional ao custo ajustado.',
    },
    {
      type: 'summary',
      title: 'Regras de moeda',
      items: [
        'Use o seletor para símbolos e dimensionamento conveniente entre moedas comuns.',
        'Mantenha o fator de conversão em 1 quando os valores já estiverem em moeda local.',
        'Use um fator personalizado para tabelas de preços regionais, margem de subcontratados ou ajustes comerciais temporários.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'As taxas de câmbio não são política contabilística',
      badge: 'Nota de preços',
      html: '<p>Para faturas oficiais, impostos ou relatórios contabilísticos, use a taxa de câmbio e a política de arredondamento exigidas pela sua empresa. Esta calculadora destina-se a estimar custos de produção e preparar orçamentos.</p>',
    },
    { type: 'title', text: 'Usar a repartição visual para melhorar o lucro', level: 2 },
    {
      type: 'paragraph',
      html: 'A barra proporcional é mais do que decoração. Mostra qual fase de acabamento está a consumir dinheiro. Se o lixamento dominar, alterar a orientação de impressão, a altura de camada, a interface de suporte ou o material pode reduzir o tempo manual. Se a pintura dominar, o orçamento pode precisar de um nível de acabamento separado. Se os consumíveis dominarem, a compra a granel ou um processo de revestimento diferente pode importar mais do que a eficiência da mão de obra. Se a remoção de suportes dominar, redesenhar os pontos de contacto dos suportes pode ser a intervenção de maior valor.',
    },
    {
      type: 'list',
      icon: 'mdi:target',
      items: [
        'Quando a remoção de suportes é a maior secção, reveja o estilo de suporte, a densidade, a distância Z de contacto e a orientação.',
        'Quando o lixamento é maior, reveja a altura de camada, o posicionamento da costura, a estratégia de enchimento e se o acabamento orçado é demasiado alto para o preço.',
        'Quando a pintura é maior, divida acabamentos de uma cor, mascarados e premium em níveis de orçamento separados.',
        'Quando os consumíveis são maiores, verifique se revestimentos, fluido de lavagem de resina, abrasivos e materiais de mascaramento estão a ser desperdiçados ou subrecuperados.',
      ],
    },
    {
      type: 'table',
      headers: ['Custo dominante', 'Causa provável', 'Resposta de preço'],
      rows: [
        ['Remoção de suportes', 'Acesso difícil, suportes densos, detalhes frágeis', 'Adicionar um suplemento de complexidade de suporte ou rever a orientação.'],
        ['Lixamento', 'Requisito cosmético elevado, camadas visíveis, marcas de suporte', 'Criar graus de acabamento e cobrar a preparação pronta para pintar.'],
        ['Pintura', 'Mascaramento, múltiplas cores, limpeza de cabine', 'Orçar a pintura como linha de serviço separada.'],
        ['Consumíveis', 'Revestimentos, abrasivos, solventes, materiais de proteção', 'Usar rastreamento direto de consumíveis ou encargos mínimos de material.'],
      ],
    },
    {
      type: 'summary',
      title: 'Fluxo de trabalho de orçamento',
      items: [
        'Meça os minutos manuais ativos por fase.',
        'Use uma taxa horária de acabamento carregada.',
        'Adicione consumíveis diretos separadamente.',
        'Copie o resultado calculado para o orçamento e aplique gastos gerais e margem no modelo de preços completo.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
