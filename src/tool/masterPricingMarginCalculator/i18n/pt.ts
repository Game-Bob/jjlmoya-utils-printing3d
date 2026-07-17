import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MasterPricingMarginCalculatorUI } from '../ui';

const slug = 'calculadora-preco-impressao-3d';
const title = 'Calculadora de Preços de Impressão 3D: Margem, Markup e Posição de Mercado';
const description =
  'Calcule o preço de venda recomendado (PVP) para impressão 3D a partir do custo de fabricação, margem de lucro alvo, markup e preços da concorrência com fórmulas precisas.';

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
    question: 'Qual é a diferença entre margem e markup na impressão 3D?',
    answer:
      'A margem é o lucro dividido pelo preço de venda. O markup é o lucro dividido pelo custo. Um markup de 50% sobre um custo de 40,00 resulta num preço de 60,00 e uma margem real de 33,33%, não de 50%.',
  },
  {
    question: 'Porque é que a margem alvo deve ser inferior a 100%?',
    answer:
      'A fórmula da margem divide o custo por um menos a taxa de margem. Com uma margem de 100%, o denominador torna-se zero, pelo que não existe um preço de venda finito.',
  },
  {
    question: 'O preço do concorrente deve decidir o meu orçamento de impressão 3D?',
    answer:
      'O preço do concorrente é um sinal de posicionamento, não um substituto para o cálculo de custos. Se o seu preço calculado estiver acima do mercado, reveja os custos, acabamento, prazo de entrega e valor acrescentado antes de conceder descontos.',
  },
  {
    question: 'A calculadora inclui taxas ou IVA?',
    answer:
      'Não. Calcula o preço recomendado antes de impostos. Adicione IVA, impostos sobre vendas, taxas de plataformas ou processamento de pagamentos conforme as regras de faturação locais.',
  },
];

const howToData = [
  { name: 'Insira o custo total de fabricação', text: 'Utilize o custo total do trabalho, incluindo custos fixos, variáveis, material, tempo de máquina, mão de obra e pós-processamento.' },
  { name: 'Escolha o modo margem ou markup', text: 'Selecione se o PVP recomendado deve utilizar a fórmula da margem alvo ou a fórmula do markup.' },
  { name: 'Defina o preço de referência da concorrência', text: 'Insira um preço de mercado comparável para ver se o seu orçamento está acima, abaixo ou ao nível da concorrência.' },
  { name: 'Copie o preço recomendado', text: 'Utilize o botão de copiar para transferir o PVP, o lucro líquido, a margem real e a comparação de mercado para um orçamento ou fatura.' },
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
    'calculadora de preco de impressao 3d',
    'calculadora de margem de lucro de impressao 3d',
    'markup vs margem impressao 3d',
    'calculadora de preco de venda impressao 3d',
    'indicador de posicionamento no mercado',
  ],
  inLanguage: 'pt',
};

export const content: ToolLocaleContent<MasterPricingMarginCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Dados de entrada para o preço de impressão 3D',
    resultsAriaLabel: 'Resultados do preço de impressão 3D',
    currencyLabel: 'Moeda',
    currencyOptions,
    currencyOptionSeparator: ' - ',
    costLabel: 'Custo total de fabricação',
    competitorLabel: 'Preço de referência do concorrente',
    marginLabel: 'Margem alvo',
    markupLabel: 'Markup alvo',
    conversionFactorLabel: 'Factor de conversão global',
    conversionFactorUnit: 'x',
    conversionHint: 'Deixe em 1 se os custos já estiverem na moeda selecionada. Use para aplicar listas de preços regionais ou taxas de conversão.',
    modeLabel: 'Método PVP',
    marginModeLabel: 'Margem',
    markupModeLabel: 'Markup',
    pvpRecommendedLabel: 'PVP recomendado',
    netProfitLabel: 'Lucro líquido',
    realMarginLabel: 'Margem real',
    marketComparisonLabel: 'Vs. concorrência',
    marketPositionLabel: 'Posição de mercado',
    aboveMarketLabel: 'Acima do mercado',
    belowMarketLabel: 'Abaixo do mercado',
    atMarketLabel: 'No preço de mercado',
    pvpByMarginLabel: 'PVP por margem',
    pvpByMarkupLabel: 'PVP por markup',
    formulaMarginLabel: 'PVP_margem = C / (1 - M / 100)',
    formulaMarkupLabel: 'PVP_markup = C x (1 + U / 100)',
    sliderOutputSeparator: ' | ',
    copyLabel: 'Copiar preço',
    copiedLabel: 'Copiado',
    copyTemplate: 'PVP recomendado: {pvp}; lucro líquido: {profit}; margem real: {margin}; comparação de mercado: {comparison}',
    pendingLabel: '-',
    currencySymbol: '\u20ac',
  },
  seo: [
    { type: 'title', text: 'Como funciona esta calculadora de preços de impressão 3D', level: 2 },
    {
      type: 'paragraph',
      html: 'Uma <strong>calculadora de preços de impressão 3D</strong> fiável deve partir do custo total de fabricação, e não apenas do peso do filamento. O valor do custo deve incluir a alocação de custos fixos, custos variáveis da máquina, material, margem para falhas, mão de obra, pós-processamento, embalagem e quaisquer despesas diretas do trabalho. Assim que o custo for conhecido, o preço de venda pode ser calculado com uma margem de lucro alvo ou com um markup. Estes dois métodos não são intercambiáveis, e confundi-los é uma das formas mais rápidas para um serviço de impressão 3D orçamentar trabalhos que parecem rentáveis, mas que na verdade não atingem a margem planeada.',
    },
    {
      type: 'paragraph',
      html: 'A calculadora utiliza fórmulas estritas: <code>PVP_margem = C / (1 - M / 100)</code> e <code>PVP_markup = C x (1 + U / 100)</code>. O lucro líquido é sempre <code>PVP - C</code>. A margem real é o lucro dividido pelo preço final, não pelo custo. O controlo deslizante da margem alvo está limitado abaixo de 100 porque uma margem de 100% exigiria um custo zero ou um preço infinito. O resultado utiliza sempre duas casas decimais fixas e sem separadores de milhares, para que o número possa ser copiado de forma limpa para faturas, folhas de cálculo, ERP ou orçamentos.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'M < 100', label: 'Validação estrita de margem', icon: 'mdi:shield-check-outline' },
        { value: '2 decimais', label: 'Resultado monetário fixo', icon: 'mdi:calculator-variant-outline' },
        { value: 'Ao vivo', label: 'Recálculo imediato por deslizador', icon: 'mdi:flash-outline' },
        { value: 'Mercado', label: 'Posicionamento face à concorrência', icon: 'mdi:chart-timeline-variant' },
      ],
    },
    {
      type: 'tip',
      title: 'Utilize uma única linguagem de preços no negócio',
      html: '<p>Decida se as conversas comerciais usam margem, markup ou ambos com etiquetas explícitas. Um orçamento que indica "40%" sem especificar a base pode referir-se a dois preços muito diferentes.</p>',
    },
    { type: 'title', text: 'Margem vs. Markup na Impressão 3D', level: 2 },
    {
      type: 'paragraph',
      html: 'A comparação <strong>markup vs margem impressao 3d</strong> surge frequentemente quando o proprietário de uma oficina nota que um markup de 30% não gera uma margem de lucro de 30%. O markup é medido em relação ao custo. A margem é medida em relação ao preço de venda. Se uma peça impressa custa 50,00 e é vendida por 75,00, o lucro líquido é de 25,00. O markup é de 50,00% porque 25,00 dividido por 50,00 é igual a 0,50. A margem é de 33,33% porque 25,00 dividido por 75,00 é igual a 0,3333. Ambos estão corretos, mas respondem a questões comerciais diferentes.',
    },
    {
      type: 'table',
      headers: ['Custo', 'Objetivo', 'Fórmula', 'PVP', 'Lucro líquido', 'Margem real'],
      rows: [
        ['50.00', '50% markup', '50.00 x 1.50', '75.00', '25.00', '33.33%'],
        ['50.00', '50% margem', '50.00 / 0.50', '100.00', '50.00', '50.00%'],
        ['80.00', '25% markup', '80.00 x 1.25', '100.00', '20.00', '20.00%'],
        ['80.00', '25% margem', '80.00 / 0.75', '106.67', '26.67', '25.00%'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Um markup elevado pode produzir uma margem modesta',
      badge: 'Precisão financeira',
      html: '<p>Um markup de 100% duplica o custo, mas a margem é de 50%. Se um negócio precisa de uma margem real de 60% para cobrir custos indiretos e crescimento, um markup de 100% não é suficiente.</p>',
    },
    {
      type: 'glossary',
      items: [
        { term: 'PVP', definition: 'Preço de venda ao público recomendado antes de impostos, a menos que a política de orçamentos indique o contrário.' },
        { term: 'Custo C', definition: 'O custo total de fabricação atribuído ao trabalho antes de adicionar o lucro.' },
        { term: 'Margen M', definition: 'O lucro dividido pelo preço de venda, expresso como percentagem.' },
        { term: 'Markup U', definition: 'O lucro dividido pelo custo de fabricação, expresso como percentagem.' },
        { term: 'Lucro líquido', definition: 'O preço de venda menos o custo de fabricação antes de ajustes fiscais e de financiamento.' },
      ],
    },
    { type: 'title', text: 'O que está incluído no custo total de fabricação', level: 2 },
    {
      type: 'paragraph',
      html: 'Uma <strong>calculadora de preço de venda impressao 3d</strong> é tão precisa quanto o custo nela inserido. Para orçamentos profissionais, o custo não deve limitar-se a multiplicar os gramas de filamento pelo preço da bobina. Deve incluir o material, a energia consumida pela máquina, o desgaste de bicos e folhas FEP, perdas de resina, preparação da base de impressão, tempo do operador, preparação no fatiador (slicer), remoção de suportes, lixagem, pintura, controlo de qualidade, embalagem, comissões de pagamento e uma margem razoável para falhas ou reimpressões. A calculadora assume que o custo inserido já contempla estes elementos.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Inclua o custo variável dos materiais: filamento, resina, pó, suportes, material de purga e balsa (raft).',
        'Inclua o custo do tempo de máquina: depreciação, manutenção, energia e vida útil esperada.',
        'Inclua a mão de obra para preparação, monitorização, pós-processamento, embalagem e comunicação com o cliente.',
        'Inclua consumíveis diretos de pós-processamento: primário, tintas, lixas, álcool isopropílico (IPA), luvas, fita e massas de polir.',
        'Preveja uma margem medida para reimpressões no caso de geometrias complexas, tolerâncias estritas ou impressões longas noturnas.',
      ],
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Custo apenas de material',
          description: 'Rápido para estimativas de entusiastas, mas demasiado limitado para uso comercial.',
          icon: 'mdi:printer-3d-nozzle',
          points: ['Ignora a mão de obra', 'Ignora o desgaste da máquina', 'Subestima as peças acabadas'],
        },
        {
          title: 'Custo de fabricação',
          description: 'A melhor entrada para margem e markup, pois representa o trabalho antes do lucro.',
          icon: 'mdi:factory',
          highlight: true,
          points: ['Inclui o tempo de máquina', 'Inclui a mão de obra', 'Permite orçamentos repetíveis'],
        },
        {
          title: 'Preço totalmente carregado',
          description: 'Pode já incluir despesas gerais e lucro, pelo que adicionar a margem novamente pode duplicar os custos.',
          icon: 'mdi:receipt-text-outline',
          points: ['Útil para auditorias', 'Arriscado como entrada de calculadora', 'Requer política de contabilidade clara'],
        },
      ],
    },
    {
      type: 'card',
      icon: 'mdi:calculator-variant-outline',
      title: 'A calculadora não adivinha custos',
      html: '<p>Ela converte um custo conhecido num preço recomendado. Se o custo for incerto, primeiro calcule um modelo de custos para o material, tempo, mão de obra e acabamento, e depois use esta ferramenta para determinar o lucro e o posicionamento de mercado.</p>',
    },
    { type: 'title', text: 'Como definir preços em impressão 3D com uma margem alvo', level: 2 },
    {
      type: 'paragraph',
      html: 'Muitas vezes, ao procurar <strong>como definir preços em impressão 3d</strong> recorre-se a um multiplicador básico por simplicidade. Definir preços por margem é melhor quando a empresa tem um objetivo de rentabilidade claro. Se a margem requerida for de 40% e o custo de fabricação for de 60,00, o preço é <code>60,00 / (1 - 0,40)</code>, o que equivale a 100,00. O lucro é de 40,00 e a margem real é de 40,00%. Este método é comum quando uma oficina deseja que cada família de produtos contribua com uma quota de receita constante após cobrir custos.',
    },
    {
      type: 'paragraph',
      html: 'A regra fundamental é que a margem não pode atingir 100%. Com uma margem de 99%, um custo de 10,00 converte-se num preço de 1000,00. A 99,99%, o mesmo custo torna-se 100000,00. Este comportamento matemático não é um erro; mostra porque os objetivos de margem devem ser comercialmente realistas. Objetivos de margem extremamente altos indicam geralmente que o modelo de custos é demasiado baixo, o produto tem um valor excecional, é um mercado de nicho ou o orçamento já não é comparável com serviços de impressão padrão.',
    },
    {
      type: 'table',
      headers: ['Margem alvo', 'Multiplicador sobre custo', 'Um custo de 40.00 converte-se em', 'Caso de uso'],
      rows: [
        ['20%', '1.2500x', '50.00', 'Impressão de produtos básicos muito competitiva e com baixa carga de serviço.'],
        ['35%', '1.5385x', '61.54', 'Trabalhos profissionais rotineiros com despesas gerais normais.'],
        ['50%', '2.0000x', '80.00', 'Serviço personalizado de maior nível, acabamentos, trabalhos urgentes ou lotes pequenos.'],
        ['70%', '3.3333x', '133.33', 'Valor especializado, trabalhos complexos ou posicionamento premium.'],
      ],
    },
    {
      type: 'summary',
      title: 'Lista de verificação para fixação de preços por margem',
      items: [
        'Use o custo total de fabricação como base.',
        'Mantenha a margem alvo abaixo de 100%.',
        'Compare o PVP resultante com o preço da concorrência antes de enviar o orçamento.',
        'Se o preço for elevado, investigue os fatores de custo antes de reduzir o lucro.',
      ],
    },
    { type: 'title', text: 'Como usar o markup sem o confundir com a margem', level: 2 },
    {
      type: 'paragraph',
      html: 'Fijar preços por markup é útil quando uma oficina aplica um multiplicador claro a diferentes categorias de custos. Por exemplo, um serviço pode adicionar um markup de 80% a impressões padrão, 120% a protótipos acabados e 200% a trabalhos pequenos e urgentes. A fórmula do markup é direta: o custo multiplicado por um mais a taxa de markup. Um custo de 35,00 com um markup de 80% converte-se em 63,00. O lucro líquido é de 28,00, mas a margem real é de 44,44%, não de 80%.',
    },
    {
      type: 'proscons',
      title: 'Método de margem vs. método de markup',
      items: [
        { pro: 'O método da margem alinha-se diretamente com o lucro como percentagem da receita.', con: 'As equipas de vendas devem entender por que motivos as margens altas geram incrementos de preço não lineares.' },
        { pro: 'O método de markup é rápido e fácil de aplicar aos catálogos de custos.', con: 'Pode ocultar a margem real se a equipa confundir a percentagem de markup com a rentabilidade.' },
        { pro: 'Mostrar ambas as fórmulas expõe o impacto financeiro real.', con: 'A empresa continua a precisar de uma política clara sobre qual a cifra que se torna o PVP orçamentado.' },
      ],
    },
    {
      type: 'message',
      title: 'Quando o markup é prático',
      ariaLabel: 'Guia sobre markup',
      html: '<p>O markup funciona bem para regras internas simples: adicione 60% a trabalhos repetitivos de FDM, 90% a miniaturas de resina ou 150% a peças urgentes. Utilize o resultado da margem real para verificar se essas regras cumprem com o objetivo do negócio.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'O markup não está incorreto',
      badge: 'Nota do método',
      html: '<p>O markup é uma linguagem de fixação de preços válida quando todos compreendem a base. O problema não é o markup em si, mas sim chamá-lo de "margem" em orçamentos ou folhas de cálculo.</p>',
    },
    { type: 'title', text: 'Preço da concorrência e posicionamento de mercado', level: 2 },
    {
      type: 'paragraph',
      html: 'O preço de referência da concorrência converte a calculadora numa ferramenta de decisão comercial e não numa simples folha de fórmulas. Se o PVP recomendado estiver acima do preço de referência, o resultado é exibido com uma cor de aviso suave. Isto não significa automaticamente que o orçamento esteja incorreto. Um preço mais alto pode ser justificado por prazos de entrega mais curtos, rastreabilidade do material, melhor acabamento superficial, suporte de engenharia, inspeção dimensional, recolha local ou menor risco. O importante é que a equipa de vendas compreenda a razão antes de enviar a oferta.',
    },
    {
      type: 'paragraph',
      html: 'A comparação competitiva deve usar uma referência equivalente. Uma peça FDM básica com camadas visíveis não é o mesmo que um protótipo lixado, preparado e pintado. Um anúncio num marketplace com material incerto, tolerâncias folgadas e prazos de envio longos não é o mesmo que um serviço de engenharia local que analisa os ficheiros CAD e garante o ajuste. Introduza o preço da concorrência que melhor coincida em termos de material, processo, acabamento, quantidade, prazo de entrega e expectativas do cliente.',
    },
    {
      type: 'table',
      headers: ['Posicionamento', 'Interpretação', 'Ação comercial'],
      rows: [
        ['Abaixo da concorrência', 'O orçamento pode ser atrativo, mas poderá estar a perder lucros.', 'Verifique se a margem alvo é demasiado baixa ou se o concorrente inclui menos serviços.'],
        ['Perto da concorrência', 'O preço está alinhado comercialmente com a referência.', 'Utilize a qualidade do serviço, prazo de entrega e fiabilidade para se diferenciar.'],
        ['Acima da concorrência', 'O orçamento requer justificação ou uma revisão de custos.', 'Inspecione os fatores de custo, acabamentos, urgência e o valor do cliente antes de baixar o preço.'],
      ],
    },
    {
      type: 'tip',
      title: 'Não compita apenas por ser o mais barato',
      html: '<p>Uma oficina com mão de obra real, máquinas calibradas, materiais documentados e experiência em pós-processamento não deve igualar automaticamente um preço de referência baixo. Compita pelo valor que o cliente possa comprovar.</p>',
    },
    { type: 'title', text: 'Selector de moeda e fator de conversão global', level: 2 },
    {
      type: 'paragraph',
      html: 'A orçamentação internacional requer uma gestão monetária coerente. O seletor de moeda altera o símbolo e reescala os valores com os mesmos fatores de referência utilizados em toda a suite. O fator de conversión global é um multiplicador comercial independente. Use um fator de <code>1</code> quando o custo de fabricação e o preço da concorrência já estiverem na moeda selecionada. Use um fator personalizado se a empresa quiser aplicar uma lista de preços regional, margem para flutuações cambiais ou ajustes para distribuidores.',
    },
    {
      type: 'paragraph',
      html: 'O fator aplica-se aos valores monetários, não às percentagens de margem ou markup. Isto é chave porque as percentagens devem manter o seu significado independentemente da moeda. Uma margem de 35% em euros continua a ser uma margem de 35% em dólares após a conversão do custo e da concorrência. O resultado mantém-se fixo com duas casas decimais e sem separadores de milhares, facilitando a cópia em folhas de cálculo e campos de faturação.',
    },
    {
      type: 'summary',
      title: 'Regras de moeda e fatores',
      items: [
        'Selecione a moeda do cliente antes de copiar o preço recomendado.',
        'Mantenha o fator em 1 para orçamentos padrão na moeda local.',
        'Use o fator para um escalamento comercial controlado, não para alterar o significado de margem ou markup.',
        'Reveja impostos e arredondamentos de faturas fora desta calculadora de PVP antes de impostos.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Impostos e comissões de plataformas são calculados à parte',
      badge: 'Política de orçamentos',
      html: '<p>Se precisar de recuperar IVA, impostos sobre vendas, comissões de pagamento ou custos de seguro de envio, adicione-os conforme a política de negócio depois de calcular o PVP de produção.</p>',
    },
    { type: 'title', text: 'Desenho de uma estratégia de preços para serviços de impressão 3D', level: 2 },
    {
      type: 'paragraph',
      html: 'Uma estratégia sólida de <strong>preços para serviços de impressão 3D</strong> combina precisão de custos, disciplina nos lucros e conhecimento do mercado. A precisão nos custos evita vender abaixo do custo real de produção. A disciplina nos lucros evita que descontos arbitrários corroam o negócio. E o conhecimento do mercado impede que o serviço se desconecte daquilo que os clientes podem comparar. Esta calculadora situa-se exatamente no ponto de encontro destas três variáveis.',
    },
    {
      type: 'list',
      icon: 'mdi:target',
      items: [
        'Estabeleça margens alvo independentes para impressões padrão, protótipos de engenharia, modelos estéticos, trabalhos urgentes e séries de produção.',
        'Use regras de markup apenas se a equipa puder ver também a margem real produzida por essa regra.',
        'Registe a taxa de sucesso de acordo com o posicionamento de mercado para explicar orçamentos acima da concorrência com dados reais.',
        'Reveja o lucro real do trabalho depois de entregue e atualize o modelo de custos se a mão de obra, falhas ou pós-processamento foram subestimados.',
        'Estabeleça um preço mínimo de encomenda para trabalhos pequenos onde os custos de gestão, configuração e comunicação superam o custo de fabricação.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:chart-timeline-variant',
      title: 'Analise o lucro real das impressões 3D ao concluir o trabalho',
      html: '<p>O lucro líquido previsto é útil antes de orçamentar, mas o lucro real obtido é o que melhora o sistema de preços. Compare o custo estimado com o custo real e ajuste as futuras margens alvo por família de peças.</p>',
    },
    {
      type: 'summary',
      title: 'Fluxo de trabalho para orçamentos prontos',
      items: [
        'Estime o custo total de fabricação.',
        'Escolha margem ou markup de forma intencionada.',
        'Verifique a margem real e o lucro líquido.',
        'Compare com um preço de concorrência equivalente.',
        'Copie o PVP no orçamento e faça a gestão dos impostos separadamente.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
