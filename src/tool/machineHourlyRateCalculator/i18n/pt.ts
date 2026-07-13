import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MachineHourlyRateCalculatorUI } from '../ui';

const slug = 'calculadora-taxa-horaria-maquina-custo-producao';
const title = 'Calculadora de Taxa Horária de Máquina e Custo de Produção';
const description =
  'Calcule o custo operacional real de uma impressora 3D a partir do consumo de energia, tarifa elétrica, preço de compra, vida útil e duração da impressão.';

const faqData = [
  {
    question: 'Como calculo o custo horário de uma impressora 3D?',
    answer:
      'Some o custo elétrico por hora ao custo de depreciação por hora. A eletricidade são os watts divididos por 1000 multiplicados pela tarifa elétrica. A depreciação é o preço de compra dividido pelas horas de vida útil.',
  },
  {
    question: 'Por que a depreciação é importante na precificação de impressão 3D?',
    answer:
      'A depreciação representa o valor da máquina consumido durante a produção das peças. Ignorá-la pode fazer uma impressão parecer lucrativa enquanto a impressora perde silenciosamente valor de revenda, confiabilidade e capacidade de substituição.',
  },
  {
    question: 'Qual vida útil devo usar para uma impressora 3D de mesa?',
    answer:
      'Um valor de referência de 5000 horas é um ponto de partida prático para muitas impressoras de mesa, mas fazendas de produção devem substituí-lo pelo histórico de manutenção, ciclo de substituição esperado e dados reais de operação.',
  },
  {
    question: 'Isto é o mesmo que um orçamento completo de impressão 3D?',
    answer:
      'Não. Esta calculadora cobre a eletricidade da máquina e a amortização do hardware. Um orçamento completo também deve incluir filamento ou resina, mão de obra, impressões falhadas, pós-processamento, embalagem, despesas gerais e margem.',
  },
];

const howToData = [
  { name: 'Insira a potência medida da impressora', text: 'Use os watts médios durante uma impressão comparável, não apenas a potência nominal da fonte de alimentação.' },
  { name: 'Defina a duração da impressão', text: 'Mova o controle deslizante de duração para o tempo de máquina esperado para o trabalho ou lote de produção.' },
  { name: 'Adicione os dados de energia e ativo', text: 'Insira a tarifa elétrica, o preço de compra da máquina e a vida útil estimada em horas de operação.' },
  { name: 'Leia a divisão de custos', text: 'Use o custo total, a taxa horária e a composição entre eletricidade e depreciação para precificar o tempo de máquina.' },
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
    'Calculadora de consumo de energia de impressora 3D',
    'Calculadora de depreciação horária de máquina',
    'Estimador de custo operacional de impressão 3D',
    'Composição de custo: eletricidade versus amortização',
  ],
  inLanguage: 'pt',
};

export const content: ToolLocaleContent<MachineHourlyRateCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Entradas de taxa horária de máquina',
    resultsAriaLabel: 'Resultados de taxa horária de máquina',
    settingsLabel: 'Configurações do orçamento',
    currencyLabel: 'Moeda',
    currencyOptions: [
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
    ],
    durationLabel: 'Tempo de produção',
    powerLabel: 'Potência média',
    tariffLabel: 'Tarifa elétrica',
    purchasePriceLabel: 'Preço de compra da máquina',
    usefulLifeLabel: 'Vida útil estimada',
    totalCostLabel: 'Custo operacional total',
    hourlyRateLabel: 'Taxa horária de máquina',
    electricityLabel: 'Eletricidade',
    depreciationLabel: 'Amortização',
    electricityPerHourLabel: 'Custo de energia por hora',
    depreciationPerHourLabel: 'Custo do ativo por hora',
    compositionLabel: 'Composição do custo: eletricidade versus amortização',
    insightLabel: 'Perspetiva de rentabilidade',
    utilizationLabel: 'Pressão de utilização',
    utilizationValueLabel: 'Vida útil consumida',
    utilizationHint: 'Este trabalho consome a parcela mostrada da vida útil estimada da máquina.',
    batchLabel: 'Custo operacional do lote',
    energyUsedLabel: 'Energia utilizada',
    costDriverLabel: 'Fator principal',
    energyDriverLabel: 'Energia',
    assetDriverLabel: 'Ativo',
    balancedDriverLabel: 'Equilibrado',
    electricityDominant: 'O trabalho é liderado pela energia: a tarifa, o tamanho da cama aquecida, a temperatura da câmara e o tempo de aquecimento em vazio afetarão o orçamento mais do que o preço de compra.',
    depreciationDominant: 'O trabalho é liderado pelo ativo: o preço da máquina e a vida útil dominam, portanto cada hora não utilizada enfraquece a economia desta impressora.',
    balancedDominant: 'A eletricidade e a amortização estão suficientemente próximas para que ambas apareçam na taxa horária da oficina em vez de ocultar uma dentro da margem.',
    hoursUnit: 'h',
    wattsUnit: 'W',
    kwhUnit: 'kWh',
    currencySymbol: '\u20ac',
  },
  seo: [
    { type: 'title', text: 'O que significa uma taxa horária de máquina na impressão 3D', level: 2 },
    {
      type: 'paragraph',
      html: 'Uma <strong>taxa horária de máquina</strong> é o custo de manter uma impressora ocupada produtivamente por uma hora antes de adicionar material, mão de obra, pós-processamento, embalagem e lucro. Na impressão 3D, este número é frequentemente subestimado porque os custos visíveis como o filamento são mais fáceis de notar do que os custos ocultos como a eletricidade e a depreciação do hardware. Uma impressora de mesa pode consumir apenas alguns cêntimos de eletricidade por hora, mas uma máquina profissional que custou vários milhares de euros deve recuperar o seu valor durante uma vida útil finita. Esta calculadora isola esses dois custos de máquina para que o orçamento de produção comece com uma base mensurável.',
    },
    {
      type: 'paragraph',
      html: 'A calculadora usa duas fórmulas transparentes. O custo elétrico é <code>(W / 1000) x T x tarifa</code>, onde <code>W</code> são os watts médios, <code>T</code> é a duração da impressão em horas e a tarifa é o preço da eletricidade por quilowatt-hora. O custo de amortização é <code>(preço de compra / horas de vida útil) x T</code>. O custo operacional total é a soma de ambos. Como ambos os termos escalam com o tempo, as mesmas fórmulas também produzem uma taxa horária limpa: eletricidade por hora mais depreciação por hora.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'W / 1000', label: 'Converte watts em quilowatts', icon: 'mdi:flash-outline' },
        { value: 'kWh', label: 'Unidade de faturação de energia', icon: 'mdi:meter-electric-outline' },
        { value: 'P / life', label: 'Custo de máquina linear por hora', icon: 'mdi:chart-line' },
        { value: 'Ce + Ca', label: 'Custo operacional total', icon: 'mdi:calculator-variant-outline' },
      ],
    },
    {
      type: 'tip',
      title: 'Use watts médios medidos',
      html: '<p>A etiqueta da fonte de alimentação indica a capacidade máxima, não o consumo da impressora durante um trabalho real. Para uma melhor <strong>entrada na calculadora de consumo de impressora 3D</strong>, meça uma impressão representativa com um medidor de parede e calcule a média das fases de aquecimento, impressão, ventoinha, cama e espera.</p>',
    },
    { type: 'title', text: 'Custo elétrico: transformar watts em custo de produção', level: 2 },
    {
      type: 'paragraph',
      html: 'O custo elétrico depende do consumo médio de energia, não apenas da potência nominal da impressora. Uma máquina com uma fonte de alimentação de 350 W pode ter uma média de 90 W num pequeno trabalho PLA após o aquecimento, enquanto uma impressora grande fechada com cama quente e câmara pode permanecer muito mais alta para polímeros técnicos. A área da cama aquecida, a temperatura da câmara, a temperatura do bocal, a temperatura ambiente, o ciclo da ventoinha e o tempo de inatividade antes da remoção da peça podem todos alterar a potência efetiva.',
    },
    {
      type: 'paragraph',
      html: 'A conversão para quilowatts-hora é simples, mas importante. Uma impressora de 180 W a funcionar durante 8 horas usa <code>0,18 kW x 8 h = 1,44 kWh</code>. A 0,25 € por kWh, essa parte do trabalho custa 0,36 €. Pode parecer pouco, mas as fazendas com muitas máquinas, trabalhos longos de PETG ou ASA, armários de secagem aquecidos e controlo climático podem transformar pequenas diferenças horárias numa fatura mensal significativa.',
    },
    {
      type: 'table',
      headers: ['Entrada', 'O que inserir', 'Erro comum'],
      rows: [
        ['Potência média', 'Watts medidos durante todo o ciclo de impressão', 'Usar a potência nominal da fonte ou o pico de aquecimento.'],
        ['Duração', 'Tempo de ocupação da máquina em horas', 'Ignorar o pré-aquecimento, arrefecimento ou tempos de bloqueio de fila.'],
        ['Tarifa', 'Preço real por kWh da fatura', 'Usar uma média nacional desatualizada em vez da tarifa da oficina.'],
        ['Moeda', 'A moeda usada no seu modelo de orçamento', 'Misturar custo de hardware em euros com suposições energéticas em dólares.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'O custo energético é baixo até que a escala o torne visível',
      badge: 'Planeamento de fazenda',
      html: '<p>Uma impressora pequena pode não justificar uma contabilidade energética elaborada. Vinte impressoras a executar trabalhos longos todos os dias, sim. A mesma fórmula elétrica pode ser usada por trabalho, por impressora, por célula ou por mês alterando apenas a duração.</p>',
    },
    { type: 'title', text: 'Amortização: o custo oculto por trás da rentabilidade da impressora', level: 2 },
    {
      type: 'paragraph',
      html: 'A amortização é o reconhecimento financeiro de que uma impressora se consome com o uso. Os guias desgastam-se, as ventoinhas envelhecem, as camas perdem planicidade, os hotends entopem, a eletrónica torna-se obsoleta e a máquina eventualmente precisa de substituição. Se uma impressora custa 900 € e a oficina espera 5000 horas de funcionamento útil, a máquina consome 0,18 € de valor do ativo a cada hora produtiva. Um trabalho de dez horas transporta portanto 1,80 € de custo de hardware antes de considerar material ou mão de obra.',
    },
    {
      type: 'paragraph',
      html: 'A depreciação linear é intencionalmente prática aqui. Não tenta modelar a lei fiscal, o valor de revenda, o financiamento ou eventos de manutenção. Em vez disso, responde à pergunta de precificação de produção: quanto desta compra de máquina deve ser atribuído a cada hora de trabalho? Esse número é a base para as pesquisas de <strong>taxa de depreciação horária para impressora 3D</strong> e para qualquer fazenda que queira que o dinheiro de substituição exista quando a impressora atingir o fim da sua vida económica.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Impressora de mesa para hobby',
          description: 'Baixo preço de compra e uso irregular. A eletricidade pode ser visível em trabalhos com cama aquecida, mas a amortização ainda importa se as peças são vendidas.',
          icon: 'mdi:printer-3d-nozzle-outline',
          points: ['Menor exposição de capital', 'Vida útil frequentemente incerta', 'O trabalho manual geralmente domina os orçamentos'],
        },
        {
          title: 'Impressora de fazenda prosumer',
          description: 'Preço de compra moderado, alta disponibilidade, materiais repetidos e muitos trabalhos idênticos fazem da depreciação horária um dado fundamental para orçamentos.',
          icon: 'mdi:factory',
          highlight: true,
          points: ['Boa para suposições de vida de 3000-8000 horas', 'Registar reparações reais', 'Separar tempo de máquina do trabalho'],
        },
        {
          title: 'Sistema industrial',
          description: 'O alto custo de capital significa que a amortização pode dominar. Contratos de serviço, ambiente da câmara de construção e tempo de qualificação podem necessitar de linhas de custo adicionais.',
          icon: 'mdi:domain',
          points: ['O custo de capital domina', 'O tempo de inatividade é caro', 'Adicionar serviço e despesas gerais de instalações'],
        },
      ],
    },
    {
      type: 'message',
      title: 'A entrada de vida útil merece atenção',
      ariaLabel: 'Nota sobre a vida útil',
      html: '<p>O valor predefinido de 5000 horas é um ponto de partida, não uma verdade universal. Uma máquina de hobby pouco usada pode tornar-se obsoleta antes de atingir esse número, enquanto uma máquina de fazenda bem mantida pode excedê-lo. Use o número que corresponde à sua política de substituição.</p>',
    },
    { type: 'title', text: 'Escolher as horas de vida útil sem conjeturas', level: 2 },
    {
      type: 'paragraph',
      html: 'A vida útil é a suposição contabilística mais sensível nesta calculadora porque está no denominador da fórmula de amortização. Se à mesma impressora de 900 € forem atribuídas 3000 horas úteis, a depreciação é de 0,30 € por hora. Com 9000 horas úteis, cai para 0,10 € por hora. A impressora não mudou, mas a expectativa do negócio mudou. É por isso que um orçamento deve documentar a vida útil escolhida em vez de a enterrar numa margem genérica.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Use registos de manutenção quando disponíveis: substituições de bocal, falhas de ventoinhas, desgaste de guias, correias, placas, hotends e superfícies de cama revelam a curva de custo real.',
        'Separe famílias de impressoras. Um pequeno bedslinger, uma máquina de produção CoreXY e uma impressora de resina não devem partilhar um único número de vida útil.',
        'Menor vida útil para máquinas experimentais que passam muitas horas em ajustes falhados, testes de materiais ou validações específicas do cliente.',
        'Aumente a vida útil apenas quando a disponibilidade, a manutenção preventiva, as peças sobressalentes e o histórico de substituições apoiarem a suposição.',
        'Reveja a suposição após atualizações importantes porque um novo sistema de movimento, gabinete ou hotend pode alterar a vida económica do ativo.',
      ],
    },
    {
      type: 'table',
      headers: ['Suposição de vida útil', 'Melhor ajuste', 'Consequência no preço'],
      rows: [
        ['2000-3000 h', 'Máquinas experimentais, de baixo custo, mal documentadas ou de uso intensivo', 'Depreciação horária mais elevada protege o capital de substituição.'],
        ['4000-6000 h', 'Máquinas de mesa padrão ou prosumer com uso regular de produção', 'Intervalo inicial equilibrado para muitas pequenas fazendas.'],
        ['7000-10000 h', 'Frota de impressoras estável com dados de manutenção e materiais controlados', 'Menor custo horário do ativo mas requer confiança na disponibilidade.'],
        ['Acima de 10000 h', 'Ativos industriais ou fortemente mantidos com ciclo de vida documentado', 'Útil apenas quando o serviço e o tempo de inatividade são contabilizados separadamente.'],
      ],
    },
    {
      type: 'summary',
      title: 'Lista de verificação de vida útil',
      items: [
        'Ajuste a vida útil à classe de impressora, não a um número genérico da internet.',
        'Documente a suposição para que os orçamentos permaneçam explicáveis meses depois.',
        'Recalcule quando a máquina for reutilizada de uso hobby para produção remunerada.',
      ],
    },
    { type: 'title', text: 'Interpretar a divisão entre eletricidade e amortização', level: 2 },
    {
      type: 'paragraph',
      html: 'A barra de composição mostra se um trabalho é liderado pela energia ou pelo ativo. Os trabalhos liderados pela energia respondem fortemente à tarifa elétrica, à estratégia da cama aquecida, à temperatura da câmara, ao comportamento de aquecimento e às condições ambientais. Os trabalhos liderados pelo ativo respondem mais fortemente ao preço de compra, à vida útil e à utilização. Uma divisão equilibrada significa que nenhuma linha deve ser ignorada; ambas pertencem à taxa horária base da máquina.',
    },
    {
      type: 'paragraph',
      html: 'Esta divisão é útil porque o mesmo custo total pode ter diferentes remédios. Se a eletricidade dominar, reduzir a temperatura da cama, agrupar peças para evitar aquecimentos repetidos, isolar um gabinete ou imprimir durante janelas tarifárias mais baixas pode ajudar. Se a amortização dominar, a melhor alavanca é a utilização: mantenha a impressora ocupada com trabalhos rentáveis, evite capital inativo e escolha o tamanho da máquina cuidadosamente em vez de comprar capacidade que não é usada.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Custo elétrico', definition: 'A energia faturada consumida pela impressora durante a duração selecionada.' },
        { term: 'Amortização', definition: 'A parte do preço de compra da máquina atribuída às horas utilizadas pelo trabalho.' },
        { term: 'Vida útil', definition: 'O número esperado de horas de funcionamento produtivo antes de a impressora ser economicamente substituída.' },
        { term: 'Taxa horária de máquina', definition: 'Custo elétrico por hora mais custo de depreciação por hora antes de material, mão de obra, despesas gerais e lucro.' },
        { term: 'Custo operacional', definition: 'O custo de máquina incorrido para manter a produção em funcionamento durante uma duração específica.' },
      ],
    },
    {
      type: 'proscons',
      title: 'O que esta calculadora inclui e exclui',
      items: [
        { pro: 'Inclui consumo elétrico medido, tarifa elétrica, duração, preço de compra e vida útil.', con: 'Não inclui filamento, resina, suportes, impressões falhadas, mão de obra, aluguer, software, embalagem nem margem.' },
        { pro: 'Mostra a divisão de custos para que os utilizadores identifiquem o principal fator económico.', con: 'Usa depreciação linear, por isso não modela programas de depreciação fiscal nem valor de revenda.' },
        { pro: 'Funciona para uma impressão, um lote ou um bloco de produção mensal alterando a duração.', con: 'Requer suposições honestas de potência e vida útil para evitar falsa precisão.' },
      ],
    },
    { type: 'title', text: 'Usar o resultado para definir um preço rentável por hora', level: 2 },
    {
      type: 'paragraph',
      html: 'A taxa horária calculada é o piso para o tempo de máquina, não o preço de venda final. Um orçamento completo de impressão 3D normalmente adiciona material, resíduos de suportes, purga, mão de obra do operador, tempo de fatiamento e preparação, margem para falhas, consumíveis de manutenção, aluguer, software, taxas de pagamento, impostos e a margem alvo. A taxa horária de máquina continua a ser essencial porque impede que a própria impressora seja tratada como gratuita.',
    },
    {
      type: 'paragraph',
      html: 'Por exemplo, se a calculadora devolver 0,225 € por hora de máquina e um trabalho ocupar a impressora durante 14 horas, o custo operacional da máquina é de 3,15 €. Se o material for 4,80 €, a alocação de mão de obra for 6,00 €, a margem para falhas for 1,20 € e a margem for aplicada depois, o orçamento torna-se financeiramente rastreável. Quando um cliente pergunta porque é que uma impressão longa custa mais do que o peso do plástico sugere, o tempo de máquina torna-se uma linha explicável.',
    },
    {
      type: 'card',
      icon: 'mdi:cash-clock',
      title: 'Perspetiva de rentabilidade',
      html: '<p>Este cálculo é a base para definir o <strong>preço por hora</strong> de qualquer fazenda de impressão. Uma vez conhecido o custo de máquina por hora, a oficina pode decidir se cobra o tempo de máquina diretamente, o inclui na margem do material, ou o usa internamente para comparar impressoras e materiais.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Não orçamente apenas por gramas',
      badge: 'Custo oculto',
      html: '<p>Uma peça leve que ocupa a impressora durante 20 horas pode consumir mais capacidade de máquina do que uma peça pesada impressa rapidamente. A definição de preços baseada no peso sem tempo de máquina frequentemente subvaloriza trabalhos lentos, altos, de camada fina ou de baixo fluxo.</p>',
    },
    { type: 'title', text: 'Exemplos práticos para estimativas de custo operacional em impressão 3D', level: 2 },
    {
      type: 'paragraph',
      html: 'Um trabalho PLA de mesa bem ajustado pode ter uma média de 120 W, funcionar durante 6 horas, usar uma tarifa de 0,22 €/kWh e estar numa impressora de 600 € com uma vida útil de 5000 horas. A eletricidade é apenas 0,158 €, enquanto a amortização é 0,720 €. O custo operacional total da máquina é de aproximadamente 0,878 € e a taxa horária é de aproximadamente 0,146 €. Neste caso, o trabalho é claramente liderado pelo ativo: uma melhor utilização da máquina afeta a rentabilidade mais do que pequenas alterações na potência.',
    },
    {
      type: 'paragraph',
      html: 'Um trabalho ASA numa impressora fechada maior pode ter uma média de 420 W durante 18 horas a 0,30 €/kWh. Se a impressora custar 1800 € e a vida útil for de 4500 horas, a eletricidade é 2,268 € e a amortização é 7,200 €, para um custo total de máquina de 9,468 €. Embora o uso de energia seja muito maior, a depreciação ainda domina porque o custo de capital e a longa ocupação da máquina são substanciais.',
    },
    {
      type: 'paragraph',
      html: 'Uma impressora de resina pode contar uma história diferente. A impressora pode consumir energia modesta, mas o cálculo ainda se aplica à ocupação da máquina. Se uma construção demorar 9 horas numa máquina de 2500 € que deverá produzir 4000 horas úteis, apenas a amortização é de 5,625 €. Esse número pertence ao orçamento antes de adicionar resina, luvas, IPA ou líquido de lavagem, pós-cura, suportes e mão de obra de limpeza.',
    },
    {
      type: 'summary',
      title: 'Regras de decisão',
      items: [
        'Use watts médios medidos para a precisão elétrica.',
        'Use horas de vida útil realistas para a recuperação do ativo.',
        'Trate o resultado como o piso do tempo de máquina, depois adicione material, mão de obra, despesas gerais, risco e margem.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
