import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PrintDurationEstimatorUI } from '../ui';

const slug = 'estimador-de-tempo-de-impressao-3d-por-altura-de-camada-e-velocidade';
const title = 'Estimador de Tempo de Impressão 3D por Altura de Camada e Velocidade';
const description =
  'Estime a duração de uma impressão 3D sem abrir um fatiador combinando a altura do modelo, a altura da camada, a velocidade de impressão, o preenchimento, a complexidade, a sobrecarga de deslocamento e o uso de filamento.';

const faqData = [
  {
    question: 'Quanto tempo vai demorar a minha impressão 3D sem um fatiador?',
    answer:
      'Pode estimá-lo a partir do número total de camadas, do volume aproximado de material, da velocidade média de impressão, do preenchimento e de uma margem para deslocamentos e mudanças de direção. Um fatiador continua a ser mais preciso para trabalhos finais.',
  },
  {
    question: 'Porque é que a altura da camada altera tanto o tempo de impressão?',
    answer:
      'A altura da camada modifica o número de camadas em Z. Um perfil de 0,12 mm cria muito mais camadas do que um perfil de 0,28 mm para a mesma altura de modelo, por isso a impressora repete perímetros, preenchimento e sobrecarga de mudança de camada muito mais vezes.',
  },
  {
    question: 'Porque é que o tempo real de impressão é maior do que a velocidade dividida pela distância?',
    answer:
      'As impressoras raramente mantêm a velocidade solicitada ao passar por cantos, segmentos curtos, pequenos detalhes, retrações, movimentos em Z e trajetos de deslocamento. Os limites de aceleração e a sobrecarga tornam a duração real maior do que o cálculo de movimento ideal.',
  },
  {
    question: 'Isto é mais preciso do que a estimativa de um fatiador?',
    answer:
      'Não. Esta calculadora destina-se a planeamento antecipado, orçamentos e comparações exploratórias. Um fatiador pode inspecionar a geometria exata, os suportes, as costuras, as definições de aceleração, a largura de extrusão e a ordem dos percursos.',
  },
];

const howToData = [
  { name: 'Insira a altura do modelo', text: 'Use a altura Z do modelo ou do objeto mais alto do trabalho de impressão planeado.' },
  { name: 'Escolha a altura da camada', text: 'Use o valor real do perfil de impressão, por exemplo 0,20 mm para uma configuração FDM típica de qualidade de rascunho.' },
  { name: 'Adicione velocidade, pegada e preenchimento', text: 'Use a velocidade média de impressão, uma área de pegada XY aproximada e a percentagem de preenchimento pretendida.' },
  { name: 'Ajuste a complexidade e a sobrecarga', text: 'Aumente a complexidade para detalhes muito pequenos e aumente a sobrecarga para muitos deslocamentos, suportes ou retrações.' },
  { name: 'Compare cenários de velocidade', text: 'Use as linhas de 40, 60 e 80 mm/s para ver se o aumento da velocidade altera significativamente a duração total do trabalho.' },
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'pt',
};

export const content: ToolLocaleContent<PrintDurationEstimatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Parâmetros do estimador de tempo de impressão 3D',
    resultsAriaLabel: 'Resultados estimados do tempo de impressão 3D',
    unitSystemLabel: 'Unidades',
    metricLabel: 'Métrico',
    imperialLabel: 'US',
    modelHeightLabel: 'Altura do modelo',
    modelHeightHint: 'Dimensão Z mais alta da impressão.',
    layerHeightLabel: 'Altura da camada',
    speedLabel: 'Velocidade média de impressão',
    footprintLabel: 'Área de pegada estimada',
    footprintHint: 'Área XY aproximada usada como proxy de volume.',
    infillLabel: 'Densidade de preenchimento',
    complexityLabel: 'Fator de complexidade',
    complexityHint: '0,80 para formas simples, 1,20 para pequenos detalhes e segmentos curtos.',
    overheadLabel: 'Sobrecarga de deslocamento',
    filamentDiameterLabel: 'Diâmetro do filamento',
    densityLabel: 'Densidade do material',
    timeLabel: 'Tempo estimado de impressão',
    layersLabel: 'Camadas totais',
    materialLabel: 'Estimativa de material',
    filamentLabel: 'Comprimento do filamento',
    effectiveSpeedLabel: 'Velocidade efetiva',
    baseTimeLabel: 'Tempo de extrusão',
    overheadTimeLabel: 'Tempo de sobrecarga',
    comparisonLabel: 'Comparação de velocidade',
    minutesUnit: 'min',
    hoursUnit: 'h',
    layersUnit: 'camadas',
    gramUnit: 'g',
    ounceUnit: 'oz',
    meterUnit: 'm',
    footUnit: 'ft',
    percentUnit: '%',
    mmUnit: 'mm',
    inchUnit: 'in',
    mm2Unit: 'mm²',
    in2Unit: 'in²',
    mmSUnit: 'mm/s',
    inSUnit: 'in/s',
    cm3Unit: 'cm³',
    densityUnit: 'g/cm³',
    multiplierUnit: 'x',
    lowInsight: 'Estimativa curta: a sobrecarga do fatiador, o aquecimento da mesa e o arrefecimento podem representar uma grande parte do tempo real decorrido.',
    balancedInsight: 'Estimativa equilibrada: as alterações de velocidade são importantes, mas o número de camadas e a sobrecarga continuam a condicionar a duração final.',
    highInsight: 'Estimativa longa: considere camadas mais grossas, menos preenchimento, menos suportes ou dividir o modelo antes de simplesmente aumentar a velocidade.',
  },
  seo: [
    { type: 'title', text: 'Como Estimar o Tempo de Impressão 3D a Partir da Altura da Camada e da Velocidade', level: 2 },
    {
      type: 'paragraph',
      html: 'Um <strong>estimador de tempo de impressão 3D por altura de camada e velocidade</strong> é útil quando precisa de um número de planeamento antes de abrir um fatiador, ao comparar vários perfis de impressão ou ao orçar uma peça a partir de dimensões aproximadas. A ideia central é simples: a altura do modelo dividida pela altura da camada dá o número de camadas, e a quantidade estimada de percurso extrudido dividida pela velocidade média dá o tempo de movimento. A parte difícil é que a impressão FDM real não é uma esteira rolante limpa. O bico reduz a velocidade nas curvas, as retrações interrompem a extrusão, os deslocamentos adicionam distância sem impressão e os segmentos curtos raramente atingem a velocidade programada.',
    },
    {
      type: 'paragraph',
      html: 'Esta calculadora vai intencionalmente além da fórmula mais básica. Em vez de assumir que <code>altura / altura da camada / velocidade</code> é suficiente, combina um volume de modelo aproximado, a densidade de preenchimento, a largura da linha de extrusão, um fator de complexidade, o tempo de mudança de camada e uma percentagem de sobrecarga de deslocamento. O resultado continua a ser uma estimativa, não um substituto do fatiador, mas responde à pergunta prática que os utilizadores procuram: <strong>quanto tempo vai demorar a minha impressão 3D</strong> se alterar a altura da camada, o preenchimento ou a velocidade.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0,20 mm', label: 'Altura de camada FDM comum para impressões equilibradas', icon: 'mdi:layers-outline' },
        { value: '15-20 %', label: 'Intervalo inicial útil para sobrecarga de deslocamento e movimento', icon: 'mdi:routes' },
        { value: '40-80 mm/s', label: 'Velocidades de comparação típicas para impressoras de secretária', icon: 'mdi:speedometer' },
        { value: '1,75 mm', label: 'Diâmetro de filamento habitual para calcular comprimento de material', icon: 'mdi:circle-outline' },
      ],
    },
    {
      type: 'tip',
      title: 'Use a velocidade média, não a velocidade máxima',
      html: '<p>Se o seu perfil do fatiador indicar 120 mm/s mas as paredes exteriores estiverem a 40 mm/s, os pequenos perímetros a 25 mm/s e o preenchimento a 90 mm/s, a velocidade média de impressão não é 120 mm/s. Para planeamento, uma velocidade média realista geralmente produz uma estimativa melhor do que o movimento mais rápido do perfil.</p>',
    },

    { type: 'title', text: 'Porque é que a Altura da Camada Tem um Efeito Tão Grande na Duração', level: 2 },
    {
      type: 'paragraph',
      html: 'A altura da camada controla quantas vezes a impressora tem de repetir a mesma sequência básica: perímetro, estrutura interna, superfícies superior e inferior, deslocamento para a ilha seguinte e movimento Z para a camada seguinte. Um modelo com 80 mm de altura precisa de 400 camadas a 0,20 mm, mas cerca de 667 camadas a 0,12 mm. Mesmo que cada camada fina use ligeiramente menos plástico por passagem, a impressora realiza muito mais transições de camada, mais contornos repetidos e mais oportunidades de movimento lento limitado pela aceleração.',
    },
    {
      type: 'table',
      headers: ['Altura do modelo', 'Altura da camada', 'Número de camadas', 'Interpretação para planeamento'],
      rows: [
        ['80 mm', '0,28 mm', '286 camadas', 'Perfil rápido de rascunho com camadas visíveis.'],
        ['80 mm', '0,20 mm', '400 camadas', 'Qualidade e duração equilibradas para muitas peças.'],
        ['80 mm', '0,12 mm', '667 camadas', 'Perfil de detalhe fino que pode adicionar muitas horas.'],
        ['160 mm', '0,20 mm', '800 camadas', 'Peças altas tornam-se pesadas em duração mesmo a velocidades normais.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Quando a altura da camada é o verdadeiro gargalo',
      badge: 'Verificar camadas',
      html: '<p>Se aumentar a velocidade de impressão quase não alterar a estimativa, o trabalho pode ser dominado pelo número de camadas, segmentos curtos e sobrecarga. Nesse caso, mudar de 0,12 mm para 0,20 mm pode poupar mais tempo do que aumentar a impressora de 60 mm/s para 80 mm/s.</p>',
    },
    {
      type: 'summary',
      title: 'Regras de decisão sobre a altura da camada',
      items: [
        'Use camadas mais grossas para protótipos, suportes, fixações e peças onde o acabamento superficial em Z não é crítico.',
        'Use camadas mais finas para curvas suaves, texto pequeno, miniaturas e superfícies cosméticas.',
        'Em peças altas, as alterações de altura da camada acumulam-se rapidamente porque cada camada extra repete a sobrecarga.',
      ],
    },

    { type: 'title', text: 'Velocidade de Impressão, Aceleração e o Fator de Complexidade', level: 2 },
    {
      type: 'paragraph',
      html: 'Um valor de velocidade de impressão é um objetivo, não uma promessa. A impressora tem de acelerar até essa velocidade, desacelerar antes das curvas, obedecer aos limites de jerk ou desvio de junção e, por vezes, abrandar para arrefecimento, pontes, saliências, tempo mínimo de camada e pequenas ilhas. É por isso que uma <strong>calculadora de velocidade de impressão para tempo de impressão</strong> precisa de um fator de complexidade. Uma caixa limpa com longas linhas de preenchimento retas pode funcionar perto da velocidade solicitada. Uma figura detalhada, um logótipo, uma treliça, uma peça roscada ou uma escultura orgânica podem passar a maior parte do tempo em segmentos curtos onde os limites de aceleração são mais importantes do que a velocidade máxima.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Geometria simples',
          description: 'Caixas, painéis e longos percursos de preenchimento podem usar um multiplicador de complexidade mais baixo.',
          icon: 'mdi:cube-outline',
          points: ['Percursos contínuos mais longos', 'Menos ilhas', 'Menos sobrecarga de retração'],
        },
        {
          title: 'Geometria mista',
          description: 'A maioria dos suportes, carcaças, acessórios e peças domésticas situa-se perto do multiplicador padrão.',
          icon: 'mdi:shape-outline',
          highlight: true,
          points: ['Tanto perímetros como preenchimento importam', 'Deslocamentos moderados', 'Perdas de aceleração equilibradas'],
        },
        {
          title: 'Geometria detalhada',
          description: 'Pequenas características, texto, treliças, suportes e superfícies curvas orgânicas precisam de um multiplicador mais alto.',
          icon: 'mdi:vector-polyline',
          points: ['Segmentos curtos dominam', 'Mais arranques e paragens', 'Mais retrações e deslocamentos'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Aumentar a velocidade de impressão: o que melhora e o que não melhora',
      items: [
        { pro: 'Longas linhas de preenchimento podem terminar mais depressa com velocidade aumentada.', con: 'As paredes exteriores e os pequenos detalhes podem continuar limitados pelo perfil.' },
        { pro: 'Grandes protótipos com baixo detalhe podem beneficiar de movimento mais rápido.', con: 'A aceleração, o ringing, o fluxo de extrusão e o arrefecimento podem limitar a velocidade útil.' },
        { pro: 'Uma tabela comparativa de velocidades mostra rapidamente a poupança potencial.', con: 'Não consegue prever os abrandamentos específicos do fatiador, como o tempo mínimo de camada.' },
      ],
    },
    {
      type: 'message',
      title: 'As estimativas de velocidade são mais úteis para comparação relativa',
      ariaLabel: 'Nota sobre a estimativa de velocidade',
      html: '<p>Use as linhas de 40, 60 e 80 mm/s para comparar de forma indicativa. Se 80 mm/s representa apenas uma pequena poupança, a impressão está provavelmente limitada pelas camadas, sobrecarga ou complexidade, e não pela velocidade bruta.</p>',
    },

    { type: 'title', text: 'Preenchimento, Volume e Tempo de Material', level: 2 },
    {
      type: 'paragraph',
      html: 'A calculadora usa a área de pegada e a altura do modelo como uma aproximação do volume e depois escala esse volume por uma relação de sólido efetivo. Isto não é tão exato como ler a geometria da malha, mas capta uma verdade física importante: as paredes e as peles não desaparecem quando se reduz o preenchimento. Uma peça impressa com 15 % de preenchimento continua a ter perímetros, camadas superiores, camadas inferiores, pequenas peças maciças e, por vezes, interfaces de suporte. A calculadora mantém uma percentagem de casca na estimativa para que um preenchimento baixo não colapse o tempo de impressão de forma irrealista para quase nada.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Aumente a área de pegada para objetos largos, caixas, placas planas, tabuleiros e carcaças amplas.',
        'Reduza a área de pegada para torres estreitas, figuras finas, pequenos suportes e molduras abertas.',
        'Use a percentagem de preenchimento como um controlo de planeamento, não como densidade total da peça.',
        'Lembre-se de que os suportes, abas, jangadas, torres de purga e os resíduos multicoloridos adicionam tempo fora do próprio modelo.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:printer-3d-nozzle',
      title: 'Exemplo: porque é que 20 % de preenchimento não são 20 % do tempo de impressão',
      html: '<p>Uma carcaça de 80 mm de altura pode ter quatro paredes, seis camadas inferiores, seis camadas superiores, bossas roscadas e uma grande cavidade interna. Reduzir o preenchimento de 40 % para 20 % reduz o comprimento do percurso interno, mas as paredes e as peles continuam a ser impressas em cada camada. Em modelos com muitos perímetros, alterar o número de paredes ou a altura da camada pode afetar mais o tempo do que apenas alterar o preenchimento.</p>',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Área de pegada', definition: 'A área XY aproximada ocupada pelo modelo, usada aqui como uma entrada de volume aproximada.' },
        { term: 'Relação de sólido efetivo', definition: 'Uma combinação de planeamento de material de casca e material de preenchimento usada para estimar o volume extrudido.' },
        { term: 'Cordão de extrusão', definition: 'O cordão de plástico depositado pelo bico; a sua secção transversal depende da altura da camada e da largura de extrusão.' },
        { term: 'Comprimento de filamento', definition: 'O comprimento de filamento bruto necessário para fornecer o volume de plástico estimado.' },
      ],
    },

    { type: 'title', text: 'Sobrecarga de Deslocamento: A Peça que Falta nas Calculadoras Simples', level: 2 },
    {
      type: 'paragraph',
      html: 'Uma estimativa de duração simples ignora frequentemente o movimento sem extrusão. As impressoras reais movem-se entre ilhas, retraem e primam o filamento, limpam, saltam em Z, evitam peças já impressas, mudam de direção e por vezes fazem pausas para arrefecer. Estas ações não criam material visível, mas consomem tempo real. Uma percentagem fixa de sobrecarga é uma forma prática de contabilizar os deslocamentos quando não se dispõe de um percurso completo do fatiador. O intervalo padrão de 15-20 % é um ponto de partida útil para peças FDM comuns de um único material.',
    },
    {
      type: 'table',
      headers: ['Condição de impressão', 'Sobrecarga sugerida', 'Motivo'],
      rows: [
        ['Peça única e simples', '10-15 %', 'Poucas ilhas, menos retrações, percursos maioritariamente contínuos.'],
        ['Peça funcional típica', '15-22 %', 'Perímetros, preenchimento e deslocamentos moderados.'],
        ['Muitas peças pequenas numa placa', '22-35 %', 'Deslocamentos frequentes entre objetos e arranques repetidos.'],
        ['Suportes ou superfícies detalhadas', '25-40 %', 'As interfaces de suporte, os segmentos curtos e as retrações adicionam tempo.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'O aquecimento da mesa não está incluído',
      badge: 'Tempo total do trabalho',
      html: '<p>A estimativa concentra-se no tempo de movimento e extrusão. Adicione tempo separado para o aquecimento da mesa e do bico, a sondagem, o nivelamento da malha, o carregamento do filamento, o arrefecimento e a remoção da peça ao planear a ocupação real da máquina.</p>',
    },
    {
      type: 'tip',
      title: 'Calibre a sobrecarga a partir de uma impressão real',
      html: '<p>Pegue num trabalho concluído, compare a duração do fatiador ou do cronómetro com esta calculadora e depois ajuste a sobrecarga e a complexidade até a estimativa coincidir. Essa calibração local melhorará o planeamento futuro mais do que usar valores genéricos para sempre.</p>',
    },

    { type: 'title', text: 'Quando Confiar Nesta Calculadora e Quando Usar um Fatiador', level: 2 },
    {
      type: 'paragraph',
      html: 'Esta ferramenta é mais útil para estimativas iniciais, conversas de orçamento, demonstrações em aula e comparação de altura de camada versus velocidade antes de se comprometer com um perfil. É especialmente útil quando o STL exato ainda não está disponível, quando um cliente fornece apenas dimensões aproximadas, ou quando quer saber se vale a pena investigar uma alteração. Não foi concebida para substituir as estimativas do fatiador em trabalhos críticos de produção, porque os fatiadores inspecionam a geometria exata da malha, as velocidades por característica, os percursos de suporte, a ordem das paredes, as superfícies superior e inferior, a colocação das costuras, o controlo de aceleração e o comportamento específico do firmware da máquina.',
    },
    {
      type: 'list',
      icon: 'mdi:calculator-variant-outline',
      items: [
        'Use esta calculadora para comparar perfis de camada de 0,12 mm, 0,20 mm e 0,28 mm rapidamente.',
        'Use-a para estimar se um modelo alto está limitado pelo número de camadas antes de alterar a velocidade.',
        'Use-a para obter um volume de material, comprimento de filamento e peso aproximados a partir de dimensões aproximadas.',
        'Use um fatiador antes de comprar material, reservar tempo de máquina ou prometer prazos de entrega.',
      ],
    },
    {
      type: 'table',
      headers: ['Pergunta', 'Resposta da calculadora', 'Resposta do fatiador'],
      rows: [
        ['Camadas mais grossas pouparão tempo?', 'Boa estimativa indicativa a partir do número de camadas.', 'Resultado exato por percurso e superfície específica.'],
        ['80 mm/s será muito mais rápido que 60 mm/s?', 'Comparação útil de cenários de velocidade.', 'Comportamento exato por característica de velocidade e aceleração.'],
        ['Quanto filamento poderei precisar?', 'Volume, comprimento e peso aproximados.', 'Relatório de material específico do perfil.'],
        ['Posso orçar este trabalho de produção?', 'Apenas para seleção preliminar.', 'Necessário para o orçamento final e planeamento.'],
      ],
    },
    {
      type: 'summary',
      title: 'Melhor fluxo de trabalho',
      items: [
        'Comece com este estimador para reduzir as opções de altura de camada, velocidade e preenchimento.',
        'Ajuste a complexidade e a sobrecarga usando uma impressão conhecida da sua própria máquina.',
        'Volte a fatiar o perfil candidato final antes de se comprometer com o custo, o tempo ou a entrega.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
