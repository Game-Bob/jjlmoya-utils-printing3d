import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MultiMaterialPurgeCalculatorUI } from '../ui';

const slug = 'calculadora-purga-multimaterial';
const title = 'Calculadora de Purga Multimaterial: Analise e Otimize o Desperdício de Filamento';
const description = 'Estime o volume da torre de purga AMS e MMU, a massa de filamento desperdiçada e o custo de transição com uma matriz de intensidade de pigmento para mudanças de cor.';

const faqData = [
  {
    question: 'Por que é atribuído um fator de purga maior para preto sobre branco do que para branco sobre preto?',
    answer: 'Pigmentos escuros contaminam polímeros claros de forma mais visível do que pigmentos claros contaminam polímeros escuros. A calculadora portanto modela preto sobre branco como uma transição de fator alto e branco sobre preto como uma transição de fator mais baixo.',
  },
  {
    question: 'Esta calculadora substitui os volumes de purga do slicer?',
    answer: 'Não. É um planejador de diagnóstico que estima a economia de purga antes de fatiar ou orçar. Use o resultado da calibração do slicer para o ajuste final específico da máquina.',
  },
  {
    question: 'Qual proporção de purga devo considerar muito alta?',
    answer: 'A ferramenta sinaliza uma alta proporção de desperdício acima de 30 por cento do volume total extrudado. Esse limite geralmente significa que a ordem das cores, o agrupamento, a purga para preenchimento ou a divisão do modelo devem ser revisados.',
  },
  {
    question: 'Posso usá-la para mudanças de material, não apenas para mudanças de cor?',
    answer: 'A matriz atual se concentra na contaminação por pigmentos. Polímeros mistos, suportes solúveis, materiais abrasivos e mudanças de temperatura podem exigir purga extra além do fator de cor.',
  },
];

const howToData = [
  {
    name: 'Insira o volume do objeto e a purga base',
    text: 'Digite o volume real do modelo e o volume de purga padrão que seu perfil AMS ou MMU usa para uma troca normal de filamento.',
  },
  {
    name: 'Escolha as cores de origem e destino',
    text: 'Use os seletores de cor circulares para cada transição. O fator de transição é atualizado imediatamente a partir da matriz de pigmentos.',
  },
  {
    name: 'Defina as contagens de transição',
    text: 'Informe quantas vezes cada par de cores ocorre no trabalho. Trocas repetidas de escuro para claro dominarão a estimativa total de purga.',
  },
  {
    name: 'Leia proporção, massa e custo',
    text: 'Use a barra de objeto versus purga, a massa de resíduos e o resultado de custo para decidir se a impressão deve ser reorganizada antes da produção.',
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

export const content: ToolLocaleContent<MultiMaterialPurgeCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    unitSystemLabel: 'Unidades',
    metricLabel: 'Métrico',
    imperialLabel: 'Imperial',
    currencyLabel: 'Moeda',
    currencyOptions: [
      { code: 'EUR', label: 'EUR' },
      { code: 'USD', label: 'USD' },
      { code: 'GBP', label: 'GBP' },
      { code: 'JPY', label: 'JPY' },
      { code: 'CAD', label: 'CAD' },
      { code: 'AUD', label: 'AUD' },
      { code: 'CHF', label: 'CHF' },
      { code: 'MXN', label: 'MXN' },
      { code: 'BRL', label: 'BRL' },
      { code: 'CNY', label: 'CNY' },
      { code: 'IDR', label: 'IDR' },
      { code: 'KRW', label: 'KRW' },
      { code: 'PLN', label: 'PLN' },
      { code: 'RUB', label: 'RUB' },
      { code: 'SEK', label: 'SEK' },
      { code: 'TRY', label: 'TRY' },
    ],
    modelInputsTitle: 'Modelo de custo',
    objectVolumeLabel: 'Volume do objeto',
    basePurgeLabel: 'Purga base por troca',
    densityLabel: 'Densidade g/cm3',
    priceLabel: 'Preço por kg',
    transitionsTitle: 'Matriz de transição de pigmentos',
    fromLabel: 'De',
    toLabel: 'Para',
    colorLabels: {
      white: 'Branco',
      natural: 'Natural',
      yellow: 'Amarelo',
      red: 'Vermelho',
      blue: 'Azul',
      green: 'Verde',
      gray: 'Cinza',
      black: 'Preto',
    },
    countLabel: 'Trocas',
    objectLabel: 'Plástico real do objeto',
    purgeTowerLabel: 'Desperdício da torre de purga',
    totalWasteLabel: 'Volume de purga',
    wasteCostLabel: 'Custo do desperdício',
    purgeRatioLabel: 'Proporção de purga',
    massLabel: 'Massa de resíduos',
    loadbarAriaLabel: 'Volume do objeto comparado ao volume da torre de purga',
    alertTitle: 'Alta proporção de desperdício detectada',
    alertText: 'Alta proporção de desperdício detectada: agrupar cores semelhantes é recomendado.',
    efficientText: 'Proporção de purga dentro do limite de planejamento.',
    factorGuideTitle: 'Guia de fatores de purga por transição',
    transitionLabel: 'Transição',
    factorLabel: 'Fator',
    volumeLabel: 'Volume de purga',
    cm3Unit: 'cm3',
    in3Unit: 'in3',
    gUnit: 'g',
    ozUnit: 'oz',
  },
  seo: [
    {
      type: 'title',
      text: 'Como o desperdício de purga de AMS e MMU se torna um custo real de produção',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Uma impressão multimaterial não consome filamento apenas no objeto visível. Cada mudança de cor ou material deixa polímero fundido no hotend, na zona de fusão, no bocal e, às vezes, no início do próximo caminho de extrusão. A impressora deve empurrar filamento novo suficiente através desse caminho antes que a próxima superfície visível esteja limpa. Em fluxos de trabalho AMS, MMU, trocador de cabeçote e paleta, essa extrusão de limpeza frequentemente se torna uma torre de purga, bloco de purga, linha de purga ou depósito de descarte. O ponto econômico importante é simples: a torre pode ser precificada como qualquer outra peça porque tem volume, massa e custo de material.',
    },
    {
      type: 'paragraph',
      html: 'Calculadoras genéricas frequentemente multiplicam o número de trocas por um volume de purga fixo. Isso é útil para um orçamento aproximado, mas ignora o modo de falha mais caro na impressão colorida: <strong>contaminação assimétrica</strong>. Branco sobre preto não exige a mesma limpeza que preto sobre branco. Uma pequena quantidade de pigmento preto transportada para PLA, PETG ou ABS branco é visível rapidamente, enquanto uma pequena quantidade de branco transportada para preto geralmente é ocultada pela carga de pigmento mais escura. Esta ferramenta usa uma matriz de transição para que cada direção tenha seu próprio multiplicador.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '30%', label: 'Limiar de alerta de alta proporção de purga usado pelo painel' },
        { value: '1,6x', label: 'Multiplicador de transição padrão preto para branco' },
        { value: '0,8x', label: 'Multiplicador de transição padrão branco para preto' },
        { value: '0 botões', label: 'Todos os cálculos são atualizados instantaneamente durante a edição' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'O sintoma caro a observar',
      badge: 'Auditoria de resíduos',
      html: 'Quando a torre de purga excede 30 por cento do volume combinado do objeto e da purga, o trabalho não é mais apenas uma impressão colorida. É um processo de conversão de material onde uma grande fração do filamento comprado se torna saída não-produto. Esse é o ponto onde a ordem das cores, a divisão do modelo, a purga para preenchimento e o agrupamento merecem atenção antes que a máquina comece.',
    },
    {
      type: 'title',
      text: 'A matriz de transição por trás da calculadora',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O modelo central é <code>Vtotal = soma(Vbase x Ka,b)</code>. <code>Vbase</code> é o volume de purga base para uma troca de filamento padrão. <code>Ka,b</code> é o fator para mover da cor <code>a</code> para a cor <code>b</code>. Um fator abaixo de 1 significa que a transição é geralmente mais fácil que a linha de base. Um fator acima de 1 significa que a próxima cor é sensível à contaminação ou que a cor anterior tem forte arrasto de pigmento. O resultado é um volume de purga em centímetros cúbicos, que é então convertido em massa usando a densidade do filamento.',
    },
    {
      type: 'paragraph',
      html: 'A fórmula de custo é <code>Cwaste = ((Vtotal x densidade) / 1000) x priceKg</code>. Se a torre de purga usar 80 cm3 de PLA a 1,24 g/cm3, ela consome 99,2 g de filamento. A 24 por quilograma, essa torre custa 2,38 em material antes de considerar eletricidade, tempo de máquina, transições de cor falhadas ou pós-processamento. Para uma impressão de hobby, isso pode ser aceitável. Para produção repetida, é um item de custo.',
    },
    {
      type: 'table',
      headers: ['Transição', 'Fator padrão', 'Por que é ponderada dessa forma'],
      rows: [
        ['Branco para preto', '0,80x', 'O preto esconde pequenos resíduos claros, portanto a tolerância à contaminação visível é maior.'],
        ['Preto para branco', '1,60x', 'Resíduo escuro no branco é imediatamente visível e geralmente precisa de uma purga mais longa.'],
        ['Natural para branco', '1,15x', 'Material translúcido ou natural pode tingir o branco opaco até que o caminho de fusão esteja mais limpo.'],
        ['Amarelo para branco', '1,35x', 'Pigmentos amarelos podem aquecer ou manchar superfícies claras, embora sejam menos severos que o preto.'],
        ['Vermelho para amarelo', '1,08x', 'O arrasto vermelho altera fortemente o matiz no amarelo e nas cores adjacentes ao laranja.'],
        ['Cinza para preto', '0,72x', 'Resíduo cinza geralmente é ocultado pelo pigmento preto, portanto a purga pode ser menor.'],
      ],
    },
    {
      type: 'tip',
      title: 'Use a calibração do seu slicer como volume base',
      html: 'Execute primeiro a calibração de purga do fornecedor ou da comunidade para sua impressora, depois insira esse resultado como o volume de purga base. A matriz deve dimensionar uma linha de base conhecida, não substituir o ajuste específico da máquina para diâmetro do bocal, volume do hotend, comprimento do caminho do filamento e comportamento do slicer.',
    },
    {
      type: 'title',
      text: 'Por que a opacidade do polímero altera o volume de purga necessário',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A opacidade controla o quanto a contaminação da cor anterior é visível no próximo material. O branco opaco é exigente porque reflete fortemente a luz e mostra partículas escuras ou estrias próximas à superfície. Filamentos naturais e translúcidos se comportam de maneira diferente: podem esconder menos massa, mas mostrar tonalidade através da profundidade, especialmente em paredes finas ou peças retroiluminadas. Cores saturadas como vermelho e azul também podem manchar as cores claras seguintes porque a concentração de pigmento necessária para um croma forte permanece visível em níveis baixos de resíduo.',
    },
    {
      type: 'paragraph',
      html: 'A impressora não conhece a ciência das cores. Ela apenas extruda um comprimento ou volume. O usuário tem que decidir se o resultado visível precisa de pureza cosmética, separação funcional ou apenas uma mudança de cor aproximada. Um brinquedo, logotipo, face de sinalização, moldura de litofania ou invólucro voltado para o cliente pode precisar de purga agressiva. Um suporte interno oculto, protótipo de rascunho ou parte traseira de um gabarito pode tolerar mais arrasto. A calculadora expõe essa compensação fazendo a torre de purga crescer quando a direção da transição é mais difícil.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Destino claro',
          description: 'Branco, natural, amarelo e cinza claro são destinos sensíveis. Cores anteriores escuras ou saturadas precisam de purga mais longa antes que estas cores pareçam limpas.',
          points: ['Use fatores mais altos', 'Agrupe seções claras juntas', 'Evite retornar de preto para branco repetidamente'],
        },
        {
          title: 'Destino escuro',
          description: 'Preto, azul-marinho, verde escuro e cinza escuro podem esconder resíduos de cores mais claras. Essas transições podem frequentemente usar multiplicadores menores.',
          points: ['Menor risco visível', 'Bom destino após cores claras', 'Cor final útil em uma sequência'],
        },
        {
          title: 'Transição de matiz semelhante',
          description: 'Mover-se entre cores relacionadas geralmente custa menos que cruzar de escuro para claro. Vermelho para laranja ou cinza para preto é normalmente mais fácil que azul para amarelo.',
          points: ['A ordem das cores importa', 'Famílias de matiz reduzem o desperdício', 'Processe objetos semelhantes juntos'],
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Volume de purga base', definition: 'O volume normal que seu slicer ou perfil de calibração extrude para uma troca de filamento comum antes da escala da matriz.' },
        { term: 'Fator de transição', definition: 'Um multiplicador atribuído a uma direção de uma mudança de cor, como preto para branco ou branco para preto.' },
        { term: 'Proporção de purga', definition: 'Volume de purga dividido pelo volume total extrudado, incluindo tanto o objeto quanto a torre de purga.' },
        { term: 'Arrasto de pigmento', definition: 'Resíduo visível da cor do filamento anterior que permanece no hotend e aparece na próxima extrusão.' },
        { term: 'Purga para preenchimento', definition: 'Uma estratégia do slicer que redireciona parte da extrusão de limpeza para o preenchimento oculto em vez de uma torre ou descarte.' },
      ],
    },
    {
      type: 'title',
      text: 'Como reduzir o desperdício de filamento AMS sem prejudicar a qualidade da cor',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A primeira otimização é a ordem das cores. Se um modelo puder ser dividido, impresso em grupos ou organizado de modo que as transições de escuro para claro aconteçam menos vezes, a torre de purga pode reduzir drasticamente. Trocas repetidas de preto para branco são caras porque cada ciclo exige que a impressora remova um pigmento forte antes de um destino sensível. Se o mesmo design visual puder ser impresso como branco para preto uma vez, ou como partes separadas montadas depois, o orçamento de material muda imediatamente.',
    },
    {
      type: 'paragraph',
      html: 'A segunda otimização é a escolha do destino. Quando várias cores são opcionais, escolha uma cor final escura para detalhes que aparecem após regiões claras. Por exemplo, texto preto sobre uma placa branca geralmente é mais barato que texto branco sobre uma placa preta porque este último força a impressora a limpar resíduo escuro antes de cada segmento branco. Esta não é apenas uma decisão estética; ela muda a quantidade física de polímero que deve ser empurrada através do hotend.',
    },
    {
      type: 'list',
      items: [
        'Agrupe cores semelhantes no modelo ou na fila de impressão para que matizes relacionados compartilhem transições.',
        'Use purga para preenchimento quando a contaminação interna de cor for aceitável e a peça tiver volume de preenchimento suficiente.',
        'Reduza as trocas de cor dividindo distintivos, logotipos, etiquetas ou inserções decorativas em peças impressas separadas.',
        'Use cores mais escuras após cores mais claras quando o design permitir.',
        'Ajuste os multiplicadores de purga com amostras físicas, não apenas com os padrões do slicer.',
        'Orce o custo de purga separadamente nos orçamentos para clientes para que o trabalho decorativo multicolorido não seja subprecificado.',
      ],
    },
    {
      type: 'proscons',
      title: 'Compensações de otimização',
      items: [
        { pro: 'Fatores de purga mais baixos reduzem a massa da torre e o custo do filamento.', con: 'Purga insuficiente pode criar estrias, tingimento ou superfícies inaceitáveis voltadas para o cliente.' },
        { pro: 'Dividir modelos pode eliminar muitas trocas de cor.', con: 'A montagem adiciona mão de obra, gerenciamento de tolerância, cola, fixadores ou costuras visíveis.' },
        { pro: 'A purga para preenchimento transforma parte do desperdício em plástico interno útil.', con: 'Funciona melhor apenas quando o objeto tem volume oculto suficiente e a contaminação é estruturalmente aceitável.' },
        { pro: 'Agrupar cores semelhantes melhora a economia da fazenda de impressão.', con: 'Pode atrasar trabalhos urgentes únicos que precisam de uma sequência de cores específica.' },
      ],
    },
    {
      type: 'title',
      text: 'Orçando impressões multimaterial para clientes e fazendas de impressão',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Um orçamento de impressão que precifica apenas o volume final do objeto está errado para trabalhos AMS e MMU. O cliente está comprando o processo de fabricação, e o processo inclui extrusão não-produto. Um pequeno chaveiro com muitas trocas de cor camada por camada pode desperdiçar mais material do que um suporte monocromático maior. A calculadora torna isso visível comparando o volume do objeto e o volume da torre de purga como dois blocos concorrentes, em vez de esconder o desperdício dentro de um único número.',
    },
    {
      type: 'paragraph',
      html: 'Para uma fazenda de impressão, a proporção de purga também é um sinal de agendamento. Trabalhos com purga alta ocupam a impressora enquanto convertem filamento em plástico de torre, então a perda econômica não é apenas material. O tempo de máquina gasto trocando filamento, cortando, carregando, limpando e reconstruindo a pressão é tempo não gasto produzindo volume vendável. Quando a proporção de purga é alta, considere se o item deve ter uma sobretaxa multicolorida, se as cores devem ser limitadas, ou se uma solução pintada, com etiqueta impressa ou montada é mais barata.',
    },
    {
      type: 'card',
      title: 'Regra de orçamento para trabalho multicolorido',
      html: 'Precifique o objeto, depois precifique a torre de purga como uma linha de resíduo separada. Se o cliente mudar de duas cores para quatro cores, ou adicionar pequenos detalhes isolados em muitas camadas, atualize o orçamento porque a contagem de transições muda mesmo quando o volume visível do modelo mal se move.',
    },
    {
      type: 'table',
      headers: ['Proporção de purga', 'Interpretação', 'Ação recomendada'],
      rows: [
        ['Abaixo de 15%', 'Trabalho multicolorido eficiente', 'Suposições normais de orçamento geralmente são aceitáveis.'],
        ['15% a 30%', 'A perda de material é visível', 'Revise as transições e verifique se a purga para preenchimento ajuda.'],
        ['Acima de 30%', 'Alta proporção de desperdício', 'Agrupe cores, divida o modelo, aumente o orçamento ou redesenhe o layout de cores.'],
        ['Acima de 50%', 'Torre domina a economia', 'Trate a impressão como um trabalho de produção especial, não como uma impressão de objeto de rotina.'],
      ],
    },
    {
      type: 'title',
      text: 'Lendo os resultados do painel',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Os dois blocos horizontais são intencionalmente severos. O verde é o volume real do objeto. O bloco de purga listrado é material que não se torna o produto visível. Se o bloco listrado começar a parecer fisicamente comparável ao bloco do objeto, a impressão merece escrutínio. Essa proporção visual é frequentemente mais persuasiva do que gramas ou moeda porque mostra ao usuário exatamente quanto plástico está sendo destinado à limpeza.',
    },
    {
      type: 'paragraph',
      html: 'O resultado de massa vem do volume multiplicado pela densidade. O PLA geralmente está em torno de 1,24 g/cm3, o PETG está comumente perto de 1,27 g/cm3, o ABS é mais baixo e os filamentos preenchidos variam amplamente. O resultado de preço usa o preço selecionado por quilograma. Se você usar PLA seda especial, misturas de fibra de carbono, suporte solúvel ou filamento de engenharia, substitua o preço e a densidade padrão. O mesmo volume de purga pode ter um peso econômico muito diferente dependendo do material.',
    },
    {
      type: 'summary',
      title: 'Lista de verificação de decisão',
      items: [
        'Use a calibração de purga medida do slicer como volume base.',
        'Conte as transições repetidas, não apenas o número de cores carregadas no AMS ou MMU.',
        'Observe primeiro as transições de preto para branco, saturado para claro e destino translúcido.',
        'Trate uma proporção de purga acima de 30 por cento como um aviso de redesenho ou reorçamento.',
        'Use o resultado de custo para orçamento de materiais e a barra visual para revisão rápida de design.',
      ],
    },
    {
      type: 'message',
      title: 'Resultado prático',
      html: 'Uma impressão multimaterial é eficiente quando as mudanças de cor são organizadas de modo que a torre de purga permaneça pequena em relação ao objeto. Se a torre crescer além da linha de aviso de 30 por cento, a otimização mais barata geralmente não é um novo carretel ou um perfil mais rápido; é uma estratégia de cor melhor.',
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
