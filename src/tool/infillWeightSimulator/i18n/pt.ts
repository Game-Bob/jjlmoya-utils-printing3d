import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InfillWeightSimulatorUI } from '../ui';

const slug = 'calculadora-porcentagem-peso-preenchimento-3d';
const title = 'Calculadora de Porcentagem de Preenchimento e Peso 3D';
const description =
  'Estime o peso da peça, o filamento economizado e o custo do material ao alterar a porcentagem e o padrão de preenchimento a partir de um peso de referência com 100% de preenchimento.';

const faqData = [
  {
    question: 'Posso estimar o peso de uma impressão 3D a partir do peso com 100% de preenchimento?',
    answer:
      'Sim, mas a estimativa deve manter cascas, paredes, camadas superiores e inferiores separadas do preenchimento interno. Uma peça não se torna sem peso com 0% de preenchimento porque o perímetro externo ainda usa material.',
  },
  {
    question: 'Por que o padrão de preenchimento altera o peso estimado?',
    answer:
      'Padrões diferentes criam diferentes comprimentos de percurso de ferramenta na mesma densidade nominal. Os padrões de linhas e concêntricos são geralmente mais leves, enquanto o favo de mel, cúbico e triângulos tendem a adicionar mais comprimento de parede interna.',
  },
  {
    question: 'O peso do laminador é mais preciso do que esta calculadora?',
    answer:
      'Um laminador é mais preciso uma vez que o modelo, bocal, largura de extrusão, número de paredes, camadas superiores e perfil de material são conhecidos. Esta calculadora foi projetada para planejamento rápido antes de laminar muitas versões novamente.',
  },
  {
    question: 'Qual percentual de casca devo usar?',
    answer:
      'Para muitas peças FDM decorativas ou de tamanho médio, 20-35% de participação de casca é uma faixa inicial prática. Peças pequenas, objetos finos e peças com muitos furos podem ter uma participação de casca maior.',
  },
];

const howToData = [
  {
    name: 'Comece de uma referência com 100% de preenchimento',
    text: 'Use o peso informado pelo seu laminador para o mesmo modelo com 100% de preenchimento, ou pese uma impressão de referência conhecida completamente densa.',
  },
  {
    name: 'Escolha o preenchimento alvo e o padrão',
    text: 'Mova o controle deslizante de preenchimento e escolha o padrão mais próximo da configuração do laminador que você planeja usar.',
  },
  {
    name: 'Ajuste as suposições de casca e desperdício',
    text: 'Aumente a participação de casca para modelos finos ou com muito perímetro, depois adicione desperdício para purga, saia, borda, suportes e partidas falhas.',
  },
  {
    name: 'Leia as economias de peso e custo',
    text: 'Compare o peso estimado final com a linha de base de 100% de preenchimento para decidir se a economia de material vale o compromisso de rigidez.',
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

export const content: ToolLocaleContent<InfillWeightSimulatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Entradas de peso de preenchimento',
    resultsAriaLabel: 'Resultados estimados de peso de impressão',
    unitSystemLabel: 'Unidades',
    metricLabel: 'Métrico',
    imperialLabel: 'US',
    currencyLabel: 'Moeda',
    currencyOptions: [
      { code: 'USD', label: '$', symbol: '$' },
      { code: 'EUR', label: '€', symbol: '€' },
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
    fullWeightLabel: 'Peso com 100% de preenchimento',
    fullWeightHint: 'Use o valor do laminador para o mesmo modelo em densidade total.',
    infillLabel: 'Preenchimento alvo',
    patternLabel: 'Padrão de preenchimento',
    patternOptions: [
      { value: 'lines', label: 'Linhas - percursos leves' },
      { value: 'grid', label: 'Grade - linha de base do laminador' },
      { value: 'triangles', label: 'Triângulos - células rígidas' },
      { value: 'gyroid', label: 'Giroide - treliça suave' },
      { value: 'cubic', label: 'Cúbico - rigidez 3D' },
      { value: 'honeycomb', label: 'Favo de mel - paredes densas' },
      { value: 'concentric', label: 'Concêntrico - segue o contorno' },
    ],
    shellShareLabel: 'Participação de casca',
    shellShareHint: 'Paredes, camadas superiores, camadas inferiores e características maciças que não escalam com o preenchimento.',
    spoolPriceLabel: 'Preço do filamento',
    wasteLabel: 'Desperdício',
    estimatedWeightLabel: 'Peso estimado da peça',
    filamentSavedLabel: 'Filamento economizado',
    materialCostLabel: 'Custo do material',
    costSavedLabel: 'Custo economizado',
    effectiveDensityLabel: 'Densidade efetiva',
    shellLabel: 'Casca',
    infillCoreLabel: 'Núcleo de preenchimento',
    patternImpactLabel: 'Multiplicador de padrão',
    comparisonLabel: 'Comparação com linha de base',
    fullInfillLabel: '100% preenchimento',
    targetInfillLabel: 'Configuração alvo',
    insightLow: 'Um preenchimento muito baixo pode economizar muito filamento, mas superfícies superiores, bosséis de parafuso, clipes e zonas de carga podem precisar de paredes extras ou modificadores locais.',
    insightBalanced: 'Esta é uma zona de planejamento equilibrada para muitas impressões visuais e funcionais leves: a casca sustenta a forma enquanto o preenchimento controla a rigidez e o custo.',
    insightHigh: 'O preenchimento alto reduz rapidamente a margem de economia. Considere mais paredes, um padrão mais forte ou a escolha de material antes de usar preenchimento denso em toda parte.',
  },
  seo: [
    { type: 'title', text: 'Como funciona uma calculadora de porcentagem de preenchimento e peso 3D', level: 2 },
    {
      type: 'paragraph',
      html: 'Uma <strong>calculadora de porcentagem de preenchimento e peso 3D</strong> estima quanto plástico resta quando um modelo é impresso com menos de 100% de densidade interna. O detalhe importante é que o peso FDM não é uma simples multiplicação do peso total pela porcentagem de preenchimento. Um modelo impresso com 20% de preenchimento geralmente não pesa 20% da versão completamente densa, porque paredes, camadas superiores, camadas inferiores, pequenas regiões maciças, bordas e interfaces de suporte ainda consomem filamento. Esta calculadora começa com o peso conhecido ou informado pelo laminador com 100% de preenchimento, separa uma participação de casca configurável e, em seguida, dimensiona o núcleo interno de acordo com o preenchimento alvo e o comportamento do padrão.',
    },
    {
      type: 'paragraph',
      html: 'O método foi projetado para comparações rápidas antes de você gastar tempo laminando um arquivo muitas vezes. Se um suporte PETG completamente denso é estimado em 240 g, mudar para 20% giroide pode não produzir uma peça de 48 g. Com 28% de participação de casca, a massa do perímetro já é de cerca de 67 g antes de contar a densidade interna. O núcleo de preenchimento então adiciona material de acordo com a densidade e o multiplicador de padrão selecionados. O resultado é uma estimativa de planejamento mais realista do que a matemática linear de preenchimento, ainda assim rápida o suficiente para decisões iniciais.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '20-35%', label: 'Participação de casca típica para muitas peças FDM médias', icon: 'mdi:cube-outline' },
        { value: '0,88x', label: 'Multiplicador de contorno leve para preenchimento concêntrico', icon: 'mdi:chart-line' },
        { value: '1,16x', label: 'Multiplicador de percurso denso para planejamento em favo de mel', icon: 'mdi:hexagon-multiple' },
        { value: '100%', label: 'Peso de referência usado como linha de base para economias', icon: 'mdi:weight-gram' },
      ],
    },
    {
      type: 'tip',
      title: 'Use o mesmo perfil de laminador para a referência',
      html: '<p>Para a estimativa mais limpa, gere o peso com 100% de preenchimento usando o mesmo bocal, largura de extrusão, número de paredes, camadas superiores, camadas inferiores, densidade de material e configurações de suporte que você usará para a impressão alvo. Alterar essas configurações altera a massa da casca, então a comparação apenas de preenchimento se torna menos significativa.</p>',
    },

    { type: 'title', text: 'Por que o peso do preenchimento não é linear', level: 2 },
    {
      type: 'paragraph',
      html: 'A expressão <em>porcentagem de preenchimento</em> parece um valor de densidade direto, mas os laminadores a aplicam apenas à região interna deixada após a geração dos perímetros e superfícies maciças. Um cubo simples com duas paredes e seis camadas superiores pode ter um grande volume interno, então a porcentagem de preenchimento afeta fortemente o peso. Um suporte de telefone fino, uma caixa de engrenagens com muitos furos ou uma miniatura com membros estreitos podem ter tanta geometria de perímetro que reduzir o preenchimento produz uma economia menor do que o esperado. É por isso que a calculadora expõe a <strong>participação de casca</strong> em vez de ocultá-la.',
    },
    {
      type: 'table',
      headers: ['Tipo de modelo', 'Participação de casca provável', 'O que significa para economias'],
      rows: [
        ['Grande invólucro retangular', '15-25%', 'A maior parte da massa é volume interno, então o preenchimento altera o peso significativamente.'],
        ['Figura decorativa ou modelo orgânico', '25-45%', 'Muitas curvas e regiões estreitas criam geometria com muito perímetro.'],
        ['Suporte ou painel fino', '35-60%', 'Paredes e superfícies dominam; a redução do preenchimento pode economizar menos plástico.'],
        ['Pequeno clipe mecânico', '45-70%', 'O modelo pode ser quase maciço apenas com os perímetros.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Quando a estimativa parece muito pesada',
      badge: 'Verificar participação de casca',
      html: '<p>Se uma configuração de 10% de preenchimento ainda produz um peso estimado alto, a participação de casca provavelmente é grande. Isso pode estar correto para peças pequenas ou finas. Verifique o número de paredes, a espessura superior e inferior e se o modelo tem muitas ilhas separadas ou nervuras estreitas.</p>',
    },
    {
      type: 'summary',
      title: 'Interpretação prática',
      items: [
        'A porcentagem de preenchimento afeta apenas o núcleo interno, não toda a impressão.',
        'Uma peça com 0% de preenchimento ainda tem paredes, peles, costuras e às vezes pequenas características maciças.',
        'A referência de peso total, a participação de casca, a escolha do padrão e a margem de desperdício juntos produzem um número de planejamento melhor.',
      ],
    },

    { type: 'title', text: 'Multiplicadores de peso por padrão de preenchimento', level: 2 },
    {
      type: 'paragraph',
      html: 'Duas impressões podem ambas ser configuradas com 25% de preenchimento e ainda usar diferentes quantidades de filamento porque a geometria do percurso da ferramenta muda. Os padrões de linhas e concêntricos geralmente produzem percursos internos mais leves porque evitam algumas estruturas de cruzamento. Grade, triângulos, cúbico, giroide e favo de mel criam diferentes quantidades de sobreposição, reforço direcional e comprimento de percurso. A calculadora modela isso com um pequeno <strong>multiplicador de padrão</strong> aplicado ao núcleo interno, não à peça inteira.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Linhas e concêntrico',
          description: 'Útil quando o peso mínimo e a impressão rápida importam mais do que a rigidez uniforme.',
          icon: 'mdi:format-line-spacing',
          points: ['Menor densidade de percurso', 'Bom para peças decorativas', 'A resistência direcional pode ser irregular'],
        },
        {
          title: 'Grade e giroide',
          description: 'Escolhas equilibradas para impressões visuais e funcionais comuns onde a rigidez importa.',
          icon: 'mdi:grid',
          highlight: true,
          points: ['Linha de base previsível do laminador', 'Bom compromisso rigidez-peso', 'O giroide distribui cargas uniformemente'],
        },
        {
          title: 'Cúbico, triângulos, favo de mel',
          description: 'Escolhas de planejamento mais pesadas que podem melhorar a rigidez, mas reduzem a economia de filamento.',
          icon: 'mdi:hexagon-outline',
          points: ['Mais comprimento de parede interna', 'Melhor rigidez multidirecional', 'Tempo de impressão mais longo é comum'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Compromissos na seleção de padrão',
      items: [
        { pro: 'Padrões mais leves reduzem o custo do material e podem encurtar o tempo de impressão.', con: 'Eles podem criar direções mais fracas ou menos suporte de superfície superior.' },
        { pro: 'Padrões densos melhoram a sensação de rigidez das peças e reduzem a flexão.', con: 'Eles podem se aproximar do custo de um preenchimento mais alto sem resolver um design de parede fraco.' },
        { pro: 'O giroide distribui cargas uniformemente em muitas direções.', con: 'Pode imprimir mais lentamente em máquinas com configurações de aceleração conservadoras.' },
      ],
    },
    {
      type: 'message',
      title: 'Multiplicadores de padrão são suposições de planejamento',
      ariaLabel: 'Nota sobre multiplicadores de padrão',
      html: '<p>Os motores dos laminadores implementam os padrões de forma diferente. Trate o multiplicador como um estimador inicial e confirme trabalhos de produção importantes com uma visualização real do laminador e o relatório de uso de material.</p>',
    },

    { type: 'title', text: 'Cálculo de economias de filamento e custo', level: 2 },
    {
      type: 'paragraph',
      html: 'A estimativa de custo de material multiplica os gramas finais pelo preço do carretel por quilograma. Se a calculadora prevê uma impressão de 126 g e o carretel custa $24 por kg, a parte de plástico é de cerca de $3,02 antes do tempo de máquina, eletricidade, mão de obra, embalagem e impressões falhas. O custo economizado compara o mesmo modelo com a linha de base de 100% de preenchimento, usando a mesma porcentagem de desperdício. Isso é útil para orçamentos, planejamento de lotes e decidir se uma configuração de preenchimento mais pesada vale o material extra.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Use a porcentagem de desperdício para linhas de purga, saias, bordas, suportes, jangadas, mudanças de cor e partidas falhas curtas.',
        'Para protótipos únicos, uma margem de desperdício de 5-10% é geralmente mais realista do que zero.',
        'Para lotes de produção com suportes ou materiais abrasivos, registre o peso real restante e falho em vários trabalhos.',
        'Ao comparar PLA, PETG, ABS, ASA, nylon e compósitos preenchidos, use o preço do carretel para o material exato, não uma média genérica.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:cash-multiple',
      title: 'Exemplo: do protótipo denso ao preenchimento de produção',
      html: '<p>Um protótipo com 100% de preenchimento pesa 240 g. Com 28% de participação de casca, 20% giroide, 6% de desperdício e filamento a $24/kg, a estimativa fica na casa das centenas de gramas em vez de 48 g. Essa diferença importa ao orçar 40 cópias: pequenos erros por peça se tornam carretéis inteiros de plástico.</p>',
    },
    {
      type: 'table',
      headers: ['Entrada', 'Por que é importante', 'Erro comum'],
      rows: [
        ['Peso 100%', 'Define a linha de base máxima de material.', 'Usar um número de paredes diferente da impressão alvo.'],
        ['Preenchimento alvo', 'Controla a densidade do núcleo interno.', 'Supor que 20% de preenchimento significa 20% do peso total da peça.'],
        ['Padrão', 'Altera o comprimento do percurso e a rigidez.', 'Ignorar o padrão ao comparar predefinições do laminador.'],
        ['Desperdício', 'Adiciona filamento real usado fora da peça final.', 'Esquecer suportes e partidas falhas.'],
      ],
    },

    { type: 'title', text: 'Escolher preenchimento para economizar peso sem peças fracas', level: 2 },
    {
      type: 'paragraph',
      html: 'A economia de peso só é valiosa se a peça ainda desempenhar sua função. Para modelos visuais, adereços de exibição, peças de cosplay e tampas, um preenchimento baixo com camadas superiores suficientes pode ser perfeito. Para suportes, acessórios, invólucros com parafusos, encaixes e peças expostas ao calor ou impacto, a melhor melhoria é geralmente mais paredes ou reforço local, em vez de simplesmente aumentar o preenchimento global. Uma peça com quatro paredes e 20% giroide pode ser mais forte nos lugares certos do que uma peça com duas paredes e 50% de preenchimento.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Participação de casca', definition: 'A porção do peso completamente denso que pertence a paredes, camadas superiores, camadas inferiores e geometria maciça inevitável.' },
        { term: 'Preenchimento nominal', definition: 'A porcentagem selecionada no laminador para a região interna após a geração das cascas.' },
        { term: 'Densidade efetiva', definition: 'A densidade total estimada da impressão finalizada após combinar participação de casca, porcentagem de preenchimento e multiplicador de padrão.' },
        { term: 'Margem de desperdício', definition: 'Filamento extra usado para material fora da peça, como purga, borda, suportes, testes e partidas falhas.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Não use a economia de peso como único critério de design',
      badge: 'Impressões funcionais',
      html: '<p>Peças carregadas através das camadas, peças com insertos roscados e peças com compressão de parafusos precisam de raciocínio mecânico separado. O preenchimento ajuda, mas a espessura da parede, a orientação, o material, a temperatura e a concentração de tensões geralmente importam mais do que apenas a densidade.</p>',
    },
    {
      type: 'summary',
      title: 'Regras rápidas de decisão',
      items: [
        'Impressões decorativas: reduza o preenchimento primeiro, depois verifique a qualidade da superfície superior.',
        'Impressões funcionais leves: use um padrão equilibrado e paredes suficientes antes de um preenchimento alto.',
        'Suportes e acessórios: reforce furos, cantos e caminhos de carga com modificadores locais.',
        'Trabalhos em lote: confirme a estimativa final com o laminador antes de comprar material.',
      ],
    },

    { type: 'title', text: 'Quando confiar na calculadora e quando laminar novamente', level: 2 },
    {
      type: 'paragraph',
      html: 'Esta calculadora é melhor para estimativas rápidas, orçamentos iniciais, compra de material e comparação de múltiplas opções de preenchimento sem abrir o laminador repetidamente. Ela não substitui o laminador quando as configurações dimensionais mudam. Se você alterar o diâmetro do bocal, a largura de extrusão, o número de paredes, a espessura superior, a espessura inferior, as camadas adaptativas, o estilo de suporte, o engomadoria, o modo vaso ou a densidade do material, a linha de base de 100% e a participação de casca devem ser atualizadas.',
    },
    {
      type: 'list',
      icon: 'mdi:calculator-variant-outline',
      items: [
        'Use a calculadora quando o modelo e o perfil permanecerem principalmente fixos e você estiver explorando densidade ou padrão.',
        'Lamine novamente quando o número de paredes, a geração de suportes, o tamanho do bocal ou o perfil de material mudar.',
        'Pese uma peça finalizada quando precisar de registros de custo em nível de produção ou previsões de estoque.',
        'Registre os gramas reais para trabalhos repetidos; dados reais melhorarão rapidamente suas suposições de participação de casca.',
      ],
    },
    {
      type: 'tip',
      title: 'Um fluxo de trabalho confiável para orçamentos',
      html: '<p>Crie uma referência de laminador completamente densa, estime várias opções de preenchimento com esta calculadora, escolha as duas mais promissoras e lamine novamente apenas esses dois candidatos finais. Isso mantém os orçamentos rápidos enquanto ainda baseia os preços finais em relatórios de material específicos do laminador.</p>',
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
