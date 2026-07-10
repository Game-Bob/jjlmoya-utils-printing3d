import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ResinRealCostCalculatorUI } from '../ui';

const slug = 'calculadora-custo-real-resina-sla-dlp';
const title = 'Calculadora de custo real de resina para impressões SLA e DLP';
const description = 'Calcule o custo teórico e real da resina com conversão de densidade, volume do fatiador e uma correção de desperdício de 10 a 15 por cento para peças SLA e DLP complexas.';

const faqData = [
  {
    question: 'Por que o custo real da resina é maior que o custo do fatiador?',
    answer: 'O fatiador geralmente relata apenas a resina curada líquida no modelo e nos suportes. Nem sempre considera a resina deixada na plataforma de construção, presa dentro de paredes ocas, perdas por lavagem, suportes com falha ou resíduos que não podem ser vertidos de volta de forma limpa.',
  },
  {
    question: 'Devo inserir gramas ou mililitros?',
    answer: 'Use o que o seu fatiador exportar. Se ele relatar gramas, insira a densidade da resina do frasco ou da ficha técnica para que a calculadora converta massa em volume antes de calcular o preço da impressão.',
  },
  {
    question: 'Qual fator de complexidade devo usar?',
    answer: 'Use baixo para peças sólidas com suportes simples, médio para miniaturas típicas e peças funcionais de resina, e alto para peças ocas, suportes densos, cavidades e peças que retêm resina líquida após a impressão.',
  },
  {
    question: 'Isso inclui álcool, luvas, filtros ou tempo de máquina?',
    answer: 'Não. Esta ferramenta isola o custo do material de resina. Consumíveis, mão de obra, energia de pós-cura, falhas e depreciação da máquina devem ser adicionados em um orçamento mais amplo.',
  },
];

const howToData = [
  {
    name: 'Insira os dados do frasco',
    text: 'Adicione o preço líquido do frasco, o volume nominal em mililitros e a densidade indicada na ficha técnica ou no rótulo da resina.',
  },
  {
    name: 'Cole o uso do fatiador',
    text: 'Insira o consumo de resina do modelo exportado pelo Lychee, Chitubox, PrusaSlicer ou outro fatiador e escolha gramas ou mililitros.',
  },
  {
    name: 'Escolha a complexidade',
    text: 'Selecione complexidade baixa, média ou alta para aplicar uma correção de desperdício de 10, 12,5 ou 15 por cento ao volume do fatiador.',
  },
  {
    name: 'Compare o custo teórico e o real',
    text: 'Use o custo teórico para comparação entre fatiadores e o custo real corrigido para orçamentos, agrupamento de lotes e planejamento de estoque de resina.',
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
  step: howToData.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'pt',
};

export const content: ToolLocaleContent<ResinRealCostCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    bottlePanel: 'Frasco de resina',
    modelPanel: 'Modelo do fatiador',
    resultPanel: 'Custo real da resina',
    unitSystemLabel: 'Unidades',
    metricLabel: 'Métrico',
    imperialLabel: 'EUA',
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
    bottlePriceLabel: 'Preço do frasco',
    bottleVolumeLabel: 'Volume do frasco',
    resinPresetLabel: 'Predefinição de resina',
    resinPresetOptions: [
      { label: 'Personalizado / densidade manual', density: '' },
      { label: 'Resina padrão genérica - 1,10 g/cm3', density: '1.10' },
      { label: 'Resina lavável com água genérica - 1,08 g/cm3', density: '1.08' },
      { label: 'Resina tipo ABS genérica - 1,10 g/cm3', density: '1.10' },
      { label: 'Resina resistente genérica - 1,12 g/cm3', density: '1.12' },
      { label: 'Resina flexível genérica - 1,05 g/cm3', density: '1.05' },
      { label: 'Resina de alta temperatura genérica - 1,15 g/cm3', density: '1.15' },
      { label: 'Resina para fundição genérica - 1,12 g/cm3', density: '1.12' },
      { label: 'Resina com carga cerâmica genérica - 1,35 g/cm3', density: '1.35' },
      { label: 'Anycubic Standard - 1,10 g/cm3', density: '1.10' },
      { label: 'Anycubic ABS-Like - 1,10 g/cm3', density: '1.10' },
      { label: 'Elegoo Standard - 1,10 g/cm3', density: '1.10' },
      { label: 'Elegoo ABS-Like - 1,05 g/cm3', density: '1.05' },
      { label: 'Siraya Tech Fast - 1,09 g/cm3', density: '1.09' },
      { label: 'Siraya Tech Blu - 1,12 g/cm3', density: '1.12' },
      { label: 'Phrozen Aqua Gray 4K - 1,10 g/cm3', density: '1.10' },
      { label: 'Formlabs Standard - 1,10 g/cm3', density: '1.10' },
      { label: 'Formlabs Tough 2000 - 1,18 g/cm3', density: '1.18' },
    ],
    densityLabel: 'Densidade da resina (g/cm3)',
    modelAmountLabel: 'Quantidade do fatiador',
    unitLabel: 'Unidade de quantidade',
    mlUnit: 'ml',
    fluidOunceUnit: 'fl oz',
    gramsUnit: 'g',
    ounceUnit: 'oz',
    complexityLabel: 'Complexidade da peça',
    lowComplexity: 'Baixa',
    mediumComplexity: 'Média',
    highComplexity: 'Alta',
    lowHint: 'Peças sólidas, suportes leves, +10%',
    mediumHint: 'Trabalho típico com resina, +12,5%',
    highHint: 'Peças ocas ou suportes densos, +15%',
    theoreticalCostLabel: 'Custo do fatiador',
    realCostLabel: 'Custo real',
    wasteCostLabel: 'Correção de desperdício',
    correctedVolumeLabel: 'Volume corrigido',
    costPerMlLabel: 'Custo por ml',
    bottlePrintsLabel: 'Impressões por frasco',
    savedSettingsLabel: 'Fator de desperdício',
    hollowPartTip: 'Peças ocas com orifícios de drenagem podem exceder 15 por cento de desperdício porque a resina permanece nas paredes internas, cavidades, suportes e no processo de lavagem.',
    conversionLabel: 'Volume líquido do fatiador',
    netFromSlicerLabel: 'líquido do fatiador',
    persistenceNote: 'O preço do frasco, o volume do frasco e a densidade são salvos localmente neste navegador.',
  },
  seo: [
    {
      type: 'title',
      text: 'Por que o custo da resina SLA e DLP precisa de uma correção de desperdício',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A quantidade de resina mostrada por um fatiador é um ponto de partida útil, mas não é a mesma que a quantidade de resina que desaparece do frasco durante uma impressão real. A impressão SLA, MSLA, LCD e DLP usa uma cuba cheia de fotopolímero líquido. A peça cura camada por camada, mas a resina não curada ainda reveste o modelo, os suportes, a plataforma de construção, o filme da cuba e qualquer cavidade interna aberta ao banho de resina. Uma calculadora que multiplica o volume do fatiador pelo preço por mililitro do frasco fornece um número teórico limpo. Um orçamento de oficina, no entanto, precisa do número corrigido.',
    },
    {
      type: 'paragraph',
      html: 'Esta calculadora separa o <strong>custo do fatiador</strong> do <strong>custo real da resina</strong>. O custo do fatiador é a resina líquida relatada pelo software. O custo real aplica um fator de desperdício controlado de 10 a 15 por cento. Essa faixa é intencionalmente estreita: é alta o suficiente para incluir perdas comuns de manuseio de resina, mas não tão alta a ponto de esconder falhas, mão de obra, álcool, luvas, filtros ou pós-cura sob a linha de material. O resultado é um custo variável de material prático para uma única impressão ou lote.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '10%', label: 'Correção baixa para peças sólidas e suportes leves' },
        { value: '12,5%', label: 'Correção padrão para trabalhos normais de resina' },
        { value: '15%', label: 'Correção alta para cavidades e suportes densos' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Não misture custo de material com custo de trabalho',
      html: 'O número retornado aqui é apenas material de resina. Um preço de venda completo deve incluir também impressões com falha, álcool de limpeza, luvas de nitrilo, papel toalha, filtros, tempo de pós-cura, embalagem, desgaste da máquina, tempo de projeto e margem.',
    },
    {
      type: 'title',
      text: 'A fórmula por trás da calculadora',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O primeiro passo é o preço do frasco por mililitro: <code>custo_por_ml = preço_frasco / volume_frasco_ml</code>. Um frasco de 1000 ml comprado por 42 EUR tem um custo base de 0,042 EUR por ml. Se o fatiador diz que uma miniatura consome 38 ml, o custo teórico de resina é 38 x 0,042, ou 1,60 EUR. Esse número é útil para comparar orientação, oco, estratégias de suporte e lotes dentro do fatiador, mas assume que cada mililitro relatado pelo fatiador é a única resina consumida.',
    },
    {
      type: 'paragraph',
      html: 'O segundo passo aplica o volume corrigido: <code>volume_real = volume_fatiador x (1 + fator_desperdício)</code>. Com o fator padrão de 12,5 por cento, um modelo de 38 ml torna-se 42,75 ml. O custo real do material passa a ser 42,75 x 0,042 EUR, ou 1,80 EUR. A diferença é pequena em um único modelo minúsculo, mas torna-se visível ao orçar uma bandeja de miniaturas, modelos dentários, mestres de joalheria, protótipos de engenharia ou dispositivos de produção.',
    },
    {
      type: 'table',
      headers: ['Volume do fatiador', 'Custo do frasco', 'Fator', 'Custo teórico', 'Custo real'],
      rows: [
        ['25 ml', '42 EUR / 1000 ml', '10%', '1,05 EUR', '1,16 EUR'],
        ['80 ml', '42 EUR / 1000 ml', '12,5%', '3,36 EUR', '3,78 EUR'],
        ['150 ml', '42 EUR / 1000 ml', '15%', '6,30 EUR', '7,25 EUR'],
        ['420 ml', '42 EUR / 1000 ml', '15%', '17,64 EUR', '20,29 EUR'],
      ],
    },
    {
      type: 'tip',
      title: 'Use o volume do lote, não o volume da peça, para execuções de produção',
      html: 'Se você está preenchendo a plataforma de construção com várias cópias, calcule a partir do volume do fatiador para toda a plataforma. Torres de suporte, estruturas de suporte compartilhadas e mudanças de orientação podem tornar o lote mais eficiente do que multiplicar uma peça isolada pelo número de cópias.',
    },
    {
      type: 'title',
      text: 'Escolhendo o fator de complexidade certo',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Complexidade baixa',
          description: 'Use 10 por cento para peças sólidas, suportes simples, peças de calibração, peças de xadrez e modelos com poucos suportes.',
          points: ['Pouca retenção interna', 'Baixa densidade de suportes', 'Fácil escorrimento de volta para a cuba'],
        },
        {
          title: 'Complexidade média',
          description: 'Use 12,5 por cento para miniaturas normais, modelos dentários, peças de mesa e peças funcionais com suportes moderados.',
          points: ['Perda típica de pós-processamento', 'Alguma resina nos suportes', 'Bom fator de orçamento padrão'],
          highlight: true,
        },
        {
          title: 'Complexidade alta',
          description: 'Use 15 por cento para cascas ocas, cavidades, florestas densas de suportes, estruturas treliçadas e peças que deixam resíduos pesados após o escorrimento.',
          points: ['Mais líquido preso', 'Mais perda na lavagem', 'Maior incerteza de manuseio'],
        },
      ],
    },
    {
      type: 'paragraph',
      html: 'O fator de complexidade não é uma penalidade por uma má fatiagem. É uma correção de como a resina líquida se comporta. Um bloco sólido simples inclinado corretamente pode escorrer quase completamente após alguns minutos. Uma estátua oca com pequenos orifícios de drenagem pode reter um filme de resina dentro da parede, ao redor dos suportes e perto de copos de sucção. Bases de suporte densas também retêm resina entre os pilares. Mesmo quando você deixa a peça escorrer sobre a cuba, a resina que atinge o recipiente de lavagem, as luvas, o papel toalha e o filtro faz parte do material real consumido pelo trabalho.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Quando 15 por cento não é suficiente',
      html: 'Se um modelo oco tem drenagem deficiente, cavidades cegas, suportes internos grossos ou um interior texturizado, o desperdício pode exceder 15 por cento. Nesse caso, trate esta calculadora como a linha de base de resina e adicione uma margem de risco separada ao orçamento.',
    },
    {
      type: 'summary',
      title: 'Seleção rápida do fator',
      items: [
        'Escolha 10 por cento quando o modelo for sólido, compacto e fácil de drenar.',
        'Escolha 12,5 por cento quando não tiver certeza ou estiver imprimindo uma bandeja mista.',
        'Escolha 15 por cento quando a peça for oca, fortemente suportada ou geometricamente complicada.',
        'Adicione uma margem de falha separada ao imprimir uma nova resina, nova orientação ou uma peça frágil de cliente.',
      ],
    },
    {
      type: 'title',
      text: 'Usando densidade quando o fatiador relata em gramas',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Muitos fatiadores podem relatar o uso de resina em mililitros, gramas ou ambos. Os frascos de resina são geralmente vendidos por volume nominal, normalmente 500 ml, 1000 ml ou 1 litro. Se o fatiador exportar em gramas, a calculadora converte massa em volume usando densidade: <code>volume_ml = gramas / densidade</code>. A densidade da resina é normalmente escrita em g/cm3, e 1 cm3 é o mesmo volume que 1 ml. Uma resina com densidade 1,10 g/cm3 significa que 110 g equivalem aproximadamente a 100 ml.',
    },
    {
      type: 'table',
      headers: ['Massa do fatiador', 'Densidade', 'Volume convertido', 'Por que é importante'],
      rows: [
        ['55 g', '1,10 g/cm3', '50,0 ml', 'Estimativa comum de resina padrão'],
        ['55 g', '1,05 g/cm3', '52,4 ml', 'Menor densidade significa mais volume'],
        ['55 g', '1,20 g/cm3', '45,8 ml', 'Resinas com carga ou cerâmicas podem ser mais densas'],
      ],
    },
    {
      type: 'tip',
      title: 'Encontre a densidade na ficha técnica',
      html: 'Use o catálogo de predefinições para resinas comuns e trate a entrada de densidade como a fonte final de verdade. Se a sua resina, cor ou lote exato diferir da predefinição, substitua o campo pelo valor da ficha técnica do fabricante. Não presuma que todas as resinas são 1,00 g/ml.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Densidade', definition: 'Massa por unidade de volume. No cálculo de custos de resina, permite converter gramas do fatiador em mililitros do frasco.' },
        { term: 'Custo teórico', definition: 'O volume líquido do fatiador multiplicado pelo custo do frasco por mililitro, antes da correção de desperdício.' },
        { term: 'Volume corrigido', definition: 'O volume do modelo após adicionar o fator de desperdício selecionado de 10, 12,5 ou 15 por cento.' },
        { term: 'Orifício de drenagem', definition: 'Uma abertura numa peça de resina oca que permite que a resina não curada saia do interior antes da lavagem e cura.' },
      ],
    },
    {
      type: 'title',
      text: 'Por que as impressões ocas de resina geralmente custam mais do que o esperado',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tornar um modelo grande oco pode reduzir drasticamente o volume de resina curada, mas não torna a impressão livre de custos ocultos. Paredes ocas precisam de orifícios de drenagem, a geometria interna deve ser lavável e a resina não curada presa dentro do modelo pode vazar mais tarde, rachar a peça ou interferir na cura final. O fatiador pode mostrar um volume líquido muito menor após o oco, mas o processo de manuseio torna-se mais sensível. É por isso que a complexidade alta usa 15 por cento por padrão.',
    },
    {
      type: 'proscons',
      title: 'Ocamento e controle de custos',
      items: [
        { pro: 'Grandes modelos de exibição podem usar muito menos resina curada.', con: 'Drenagem deficiente pode manter resina líquida dentro da peça.' },
        { pro: 'Forças de destacamento mais baixas podem melhorar o sucesso em grandes secções.', con: 'Orifícios extras, tampões e tempo de limpeza podem aumentar a mão de obra.' },
        { pro: 'Um modelo mais leve é mais fácil de enviar e montar.', con: 'Paredes finas podem falhar se a espessura da parede e a exposição não forem ajustadas.' },
      ],
    },
    {
      type: 'card',
      title: 'Regra prática para impressão oca',
      html: 'Se uma peça oca sair da impressora e ainda pingar após escorrimento normal, use o fator alto e inspecione a disposição dos orifícios de drenagem. Se continuar a vazar após a lavagem, o problema não é apenas de custo; pode tornar-se um problema de qualidade e segurança porque a resina não curada permanece dentro do objeto.',
    },
    {
      type: 'title',
      text: 'Ler estimativas do fatiador sem sub-orçar',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Lychee, Chitubox, PrusaSlicer e outros fatiadores de resina estimam o uso de resina a partir da malha, suportes, oco e, às vezes, perfil de resina. Essas estimativas são boas o suficiente para comparar versões do mesmo trabalho. São mais fracas como orçamento final porque não conhecem o seu fluxo de trabalho. Uma oficina que filtra resina após cada trabalho perde uma quantidade diferente de um hobbyista que mantém a mesma resina na cuba. Um utilizador que lava em duas fases de IPA perde uma quantidade diferente de um que usa uma estação de lavagem selada e deixa as peças escorrerem completamente antes de as mover.',
    },
    {
      type: 'list',
      items: [
        'Insira a estimativa da plataforma completa após os suportes, não o volume original da malha sem suportes.',
        'Use a mesma moeda para o preço do frasco e o orçamento final; a calculadora pode converter o preço visível do frasco entre moedas comuns com fatores de câmbio aproximados.',
        'Atualize o preço do frasco ao comprar resina especializada, porque resinas para fundição, flexíveis, dentárias e de alta temperatura podem custar várias vezes mais do que a resina padrão.',
        'Use a conversão de densidade quando a massa do fatiador e o volume do frasco não partilharem a mesma unidade.',
        'Mantenha a taxa de falhas separada, especialmente ao imprimir miniaturas frágeis, cascas dentárias finas ou novas estratégias de suporte.',
      ],
    },
    {
      type: 'message',
      title: 'Melhor hábito de orçamentação',
      html: 'Salve os dados do seu frasco de resina comum, cole a estimativa do fatiador, escolha a complexidade e registre ambos os números. O custo teórico explica a estimativa do fatiador; o custo real protege o seu inventário de material.',
    },
    {
      type: 'title',
      text: 'O que esta calculadora não inclui',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Uma impressão de resina tem mais custos do que apenas resina. Esta ferramenta concentra-se intencionalmente no consumo variável de resina porque é o número mais frequentemente subestimado ao comparar a saída do fatiador com o uso real do frasco. Não inclui reposição de álcool, detergente, tratamento de água, papel toalha, luvas descartáveis, desgaste do filme FEP ou de libertação, envelhecimento do ecrã LCD, depreciação da impressora, eletricidade, tempo de pós-cura, lixamento, primário, remoção de suportes, embalagem ou taxas de mercado.',
    },
    {
      type: 'table',
      headers: ['Item de custo', 'Incluído aqui?', 'Onde contabilizar'],
      rows: [
        ['Resina líquida usada pela impressão', 'Sim', 'Esta calculadora'],
        ['Resíduo de resina e desperdício normal de manuseio', 'Sim', 'Fator de complexidade'],
        ['Impressões com falha', 'Não', 'Adicionar margem de falha por material e risco do modelo'],
        ['IPA, luvas, toalhas, filtros', 'Não', 'Item de consumíveis'],
        ['Remoção de suportes e lixamento', 'Não', 'Item de mão de obra ou acabamento'],
        ['Depreciação da impressora', 'Não', 'Taxa horária de máquina'],
      ],
    },
    {
      type: 'summary',
      title: 'Fluxo de trabalho confiável para custo de resina',
      items: [
        'Calcule o preço por mililitro a partir do frasco que realmente comprou.',
        'Converta gramas em mililitros com a densidade da resina quando necessário.',
        'Use a saída do fatiador após suportes e oco.',
        'Aplique uma correção de 10 a 15 por cento com base na geometria e perda de manuseio.',
        'Mantenha falhas, mão de obra, consumíveis e margem fora do número de material de resina.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
