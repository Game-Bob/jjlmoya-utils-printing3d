import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { TreeSupportDensityCalculatorUI } from '../ui';

export const content: ToolLocaleContent<TreeSupportDensityCalculatorUI> = {
  slug: 'calculadora-densidade-suportes-arvore',
  title: 'Calculadora de Densidade de Suportes em Árvore',
  description: 'Estima o diâmetro do dossel, o volume de suporte, o número de ramos, o diâmetro de contacto e a estabilidade de suportes em árvore a partir da altura do ponto de apoio, do ângulo de ramificação, da densidade de ramos e do diâmetro basal do tronco.',
  ui: {
    unitSystemLabel: 'Unidades',
    metricLabel: 'Métrico',
    imperialLabel: 'US',
    presetsLabel: 'Predefinições',
    miniaturePresetLabel: 'Mini',
    balancedPresetLabel: 'Equilibrado',
    tallPresetLabel: 'Alto',
    supportHeightLabel: 'Altura do ponto de apoio',
    branchAngleLabel: 'Ângulo dos ramos',
    branchDensityLabel: 'Densidade dos ramos',
    baseTrunkDiameterLabel: 'Diâmetro basal do tronco',
    canopyDiameterLabel: 'Dossel superior',
    supportVolumeLabel: 'Volume estimado',
    stabilityLabel: 'Estabilidade',
    filamentMassLabel: 'Massa de filamento',
    branchCountLabel: 'Número de ramos',
    contactDiameterLabel: 'Diâmetro de contacto',
    trunkVolumeLabel: 'Volume do tronco',
    branchVolumeLabel: 'Volume dos ramos',
    stabilityScoreSeparator: '-',
    stabilityScoreSuffix: '/100',
    stabilityLow: 'estabilidade baixa',
    stabilityBalanced: 'estabilidade equilibrada',
    stabilityHigh: 'estabilidade alta',
    controlsAriaLabel: 'Entradas de densidade de suporte em árvore',
    resultsAriaLabel: 'Resultados de densidade de suporte em árvore',
    copyButton: 'Copiar configuração',
    copiedButton: 'Copiado',
    copiedSummaryTemplate: 'Estimativa de suporte em árvore: dossel {canopy}, volume {volume}, estabilidade {stability} ({score}/100).',
    millimetersUnit: 'mm',
    inchesUnit: 'pol',
    cubicCentimetersUnit: 'cm³',
    cubicInchesUnit: 'pol³',
    gramsUnit: 'g',
    ouncesUnit: 'oz',
    degreesUnit: '°',
    percentUnit: '%',
  },
  seo: [
    { type: 'title', text: 'Como a Densidade dos Suportes em Árvore Altera o Uso de Filamento e a Estabilidade', level: 2 },
    {
      type: 'paragraph',
      html: 'Os suportes em árvore são eficientes porque separam o trabalho num <strong>caminho de carga</strong> e num <strong>padrão de contacto</strong>. O tronco suporta a maior parte da carga vertical da placa de construção, enquanto ramos mais pequenos estendem-se para os saliências apenas onde é necessário contacto. Uma calculadora de densidade de suportes em árvore é útil porque os controlos mais visíveis do laminador, como o ângulo de ramificação e a densidade de ramos, interagem com a altura do ponto de apoio e o diâmetro basal do tronco. Uma baixa densidade de ramos pode poupar filamento, mas também reduz o número de caminhos que resistem ao balanço. Um ângulo de ramificação acentuado pode alcançar peças altas com menos extensão horizontal, mas concentra a carga perto do tronco e pode falhar em suportes altos e estreitos.',
    },
    {
      type: 'paragraph',
      html: 'A calculadora estima três valores difíceis de julgar a olho nu numa pré-visualização do laminador: o diâmetro do dossel superior, o volume de suporte e a pontuação de estabilidade. O diâmetro do dossel superior indica a largura da copa de ramos perto do modelo. O volume de suporte estima o material impresso necessário para o tronco e ramos. A estabilidade combina ângulo, densidade, diâmetro basal, altura e extensão do dossel numa pontuação prática. O objetivo não é substituir o motor do laminador; o objetivo é escolher valores de partida antes de laminar para gastar menos tempo a iterar pré-visualizações de suportes.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '35-50°', label: 'intervalo comum de ângulo de ramo para alcance e resistência equilibrados' },
        { value: '25-55%', label: 'banda prática de densidade de ramos para muitas impressões FDM' },
        { value: '2-8 mm', label: 'intervalo típico de diâmetro basal do tronco para suportes em árvore em impressoras domésticas' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Isto é uma calculadora de planeamento, não uma exportação geométrica do laminador',
      html: 'Cada laminador gera suportes em árvore de forma diferente. Cura, PrusaSlicer, Bambu Studio, OrcaSlicer e outras ferramentas usam nomes e algoritmos diferentes para geração de ramos, prevenção de colisões, interface de suporte e pontos de contacto. Usa os resultados como direção de ajuste e confirma a geometria final na pré-visualização do laminador antes de imprimir.',
    },
    { type: 'title', text: 'Ângulo de Ramificação: Alcance, Caminho de Carga e Risco de Falha', level: 2 },
    {
      type: 'paragraph',
      html: 'O ângulo de ramificação controla a agressividade com que um suporte em árvore se estende do tronco para o modelo. Um ângulo mais baixo mantém os ramos mais verticais, o que geralmente melhora a rigidez e reduz o balanço lateral. Um ângulo mais alto alcança mais longe sobre o espaço vazio, o que pode reduzir o número de troncos necessários, mas aumenta a carga de flexão e pode criar longos segmentos de ramo não suportados. Em suportes altos, uma pequena mudança de 50 para 60 graus pode transformar uma árvore estável numa estrutura flexível que vibra quando o bico a toca.',
    },
    {
      type: 'paragraph',
      html: 'O melhor ângulo de ramificação depende da altura do ponto de apoio. Uma árvore curta sob uma pequena saliência pode usar um ângulo mais amplo porque o comprimento do ramo é limitado. Um ponto de apoio alto precisa de um ângulo mais conservador, especialmente com materiais flexíveis, movimentos de deslocação rápidos ou uma superfície da placa que liberta facilmente os suportes. Se o ponto de apoio é alto e o ângulo de ramificação é amplo, aumenta o diâmetro basal do tronco ou a densidade para que a copa de ramos não seja sustentada por uma coluna fina.',
    },
    {
      type: 'table',
      headers: ['Ângulo do ramo', 'Melhor utilização', 'Risco se excedido', 'Ajuste'],
      rows: [
        ['20-35°', 'Suportes altos e torres estreitas', 'Pode exigir mais troncos porque o alcance é limitado', 'Aumentar a densidade apenas onde a cobertura de contacto é fraca'],
        ['36-50°', 'Ajuste geral de suportes em árvore', 'Geralmente equilibrado, mas ainda depende da altura', 'Começar aqui para a maioria das impressões em PLA e PETG'],
        ['51-65°', 'Saliências amplas com altura moderada', 'Os ramos podem fletir durante deslocações ou contactos', 'Usar tronco basal mais espesso e densidade moderada'],
        ['66-75°', 'Casos especiais com alcance muito amplo', 'Alta carga de flexão e raízes de ramos fracas', 'Pré-visualizar com cuidado e abrandar a impressão de suportes'],
      ],
    },
    {
      type: 'tip',
      title: 'Não procures o alcance apenas com o ângulo',
      html: 'Se os ramos precisam de viajar longe, tenta adicionar um tronco extra ou aumentar a densidade do dossel antes de levar o ângulo ao limite superior. Um segundo tronco próximo usa frequentemente menos material que uma árvore sobreextendida que precisa de uma base pesada para sobreviver.',
    },
    { type: 'title', text: 'Densidade de Ramos: Cobertura de Contacto Sem Marcas de Suporte', level: 2 },
    {
      type: 'paragraph',
      html: 'A densidade de ramos descreve quanta estrutura de ramos é criada perto da área suportada. Baixa densidade reduz o filamento e facilita a remoção, mas pode deixar bordas de saliência mal suportadas. Alta densidade melhora a cobertura e distribui a carga por mais contactos, mas aumenta o tempo de impressão, as marcas de contacto e a probabilidade de os suportes se fundirem com superfícies delicadas. A densidade certa não é o número mais alto que parece seguro; é o número mais baixo que evita que as saliências cedam mantendo rigidez suficiente.',
    },
    {
      type: 'paragraph',
      html: 'Para modelos decorativos, a densidade pode muitas vezes ser reduzida porque uma ligeira textura inferior pode ser aceitável. Para peças mecânicas, a densidade precisa de mais cuidado porque furos não suportados, chanfros e superfícies de acoplamento podem afetar o ajuste. Os materiais também importam. O PLA tolera suportes mais leves porque é rígido e imprime pontes limpas. O PETG precisa frequentemente de espaços de ar maiores e um diâmetro de contacto cuidado porque adere fortemente aos suportes. O TPU e os filamentos flexíveis precisam de geometria conservadora porque os ramos finos podem desviar-se em vez de manter a saliência na posição.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Baixa densidade',
          description: 'Melhor quando a qualidade de remoção e a poupança de filamento são mais importantes que o acabamento perfeito da face inferior.',
          points: ['Impressão de suportes mais rápida', 'Cobertura de contacto mais fraca', 'Útil para miniaturas orgânicas'],
        },
        {
          title: 'Densidade equilibrada',
          description: 'Um valor predefinido prático para geometria mista onde as saliências precisam de suporte mas a superfície do modelo deve manter-se limpa.',
          highlight: true,
          points: ['Boa eficiência de material', 'Esforço de remoção moderado', 'Funciona para muitos trabalhos em PLA e PETG'],
        },
        {
          title: 'Alta densidade',
          description: 'Útil para saliências pesadas, pontos de apoio altos e regiões de contacto frágeis, mas aumenta as marcas.',
          points: ['Melhor distribuição de carga', 'Mais volume e tempo de impressão', 'Maior risco de contactos fundidos'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Aumentar a densidade de ramos',
      items: [
        { pro: 'Mais pontos de contacto reduzem a cedência sob saliências curvas.', con: 'Mais pontos de contacto podem deixar marcas mais visíveis após a remoção.' },
        { pro: 'Um dossel mais denso distribui a carga por vários ramos.', con: 'O laminador pode gerar uma copa volumosa difícil de alcançar com cortadores de flush.' },
        { pro: 'Os suportes altos tornam-se menos sensíveis aos toques do bico.', con: 'O tempo de impressão e o uso de filamento aumentam rapidamente quando a densidade é combinada com um dossel grande.' },
      ],
    },
    { type: 'title', text: 'Diâmetro Basal do Tronco e Porque os Suportes em Árvore Altos Falham', level: 2 },
    {
      type: 'paragraph',
      html: 'O diâmetro basal do tronco é a base da árvore. Um tronco fino pode ser perfeitamente adequado para um suporte curto, mas o mesmo diâmetro torna-se arriscado quando o ponto suportado é alto. A altura aumenta a alavancagem: um pequeno impacto do bico, um toque de deslocação ou vibração do ventilador de arrefecimento produz mais movimento no dossel. Se o tronco é demasiado fino para a altura, o suporte pode não partir imediatamente; pode inclinar-se lentamente, deslocar o ponto de contacto ou descolar-se da placa antes de a saliência estar terminada.',
    },
    {
      type: 'paragraph',
      html: 'Um diâmetro de tronco maior melhora a rigidez e a adesão à placa, mas também consome material. A calculadora trata o diâmetro do tronco como uma entrada de estabilidade, não como uma definição cosmética. Se a pontuação de estabilidade é baixa, aumentar o diâmetro é frequentemente mais eficaz que aumentar a densidade de ramos porque fortalece o caminho de carga desde a placa de construção. Se a pontuação já é alta, um tronco maior pode apenas dificultar a remoção e desperdiçar filamento.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Altura do ponto de apoio', definition: 'A distância vertical da placa de construção até à região do modelo que precisa de suporte.' },
        { term: 'Ângulo de ramificação', definition: 'O ângulo usado pelos ramos ao estenderem-se do tronco para os pontos de contacto do suporte.' },
        { term: 'Densidade de ramos', definition: 'A quantidade relativa de estrutura de ramos e cobertura de contacto criada perto da área suportada.' },
        { term: 'Diâmetro basal do tronco', definition: 'O diâmetro aproximado da coluna principal do suporte em árvore onde começa na placa de construção.' },
        { term: 'Dossel', definition: 'A largura estimada da copa superior de ramos perto da saliência do modelo.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Um dossel alto num tronco fino é o modo de falha clássico dos suportes em árvore',
      html: 'Se o diâmetro do dossel é muitas vezes maior que o diâmetro do tronco, o suporte comporta-se como uma estrutura pesada no topo. Adiciona outro tronco, reduz o ângulo de ramificação ou aumenta o diâmetro basal antes de simplesmente adicionar mais densidade de ramos.',
    },
    { type: 'title', text: 'Diâmetro do Dossel Superior e Espaço Livre do Modelo', level: 2 },
    {
      type: 'paragraph',
      html: 'O diâmetro do dossel superior é importante porque os suportes em árvore devem caber à volta do modelo, evitar colisões e permanecer removíveis. Um dossel grande pode suportar bem a saliência, mas também pode envolver detalhes, entrar em cavidades ou criar ramos difíceis de partir. Um dossel pequeno é mais fácil de remover, mas pode concentrar a força de contacto em poucos pontos e permitir que as bordas cedam. A calculadora estima o diâmetro do dossel a partir da altura do suporte, ângulo de ramificação, densidade e diâmetro basal para que possas prever se a copa de suporte gerada será compacta ou expansiva.',
    },
    {
      type: 'paragraph',
      html: 'A pré-visualização do laminador é essencial para o espaço livre do dossel. Observa se os ramos passam através de pequenos furos, sob texto em relevo, à volta de dedos de figuras ou entre características mecânicas. Se um ramo consegue alcançar uma área, também pode ficar preso ali. Uma densidade mais baixa, um diâmetro de contacto mais pequeno, bloqueadores de suporte mais apertados ou a pintura manual podem impedir que os suportes em árvore se tornem mais difíceis de remover do que os suportes de grelha padrão.',
    },
    {
      type: 'table',
      headers: ['Comportamento do dossel', 'Causa provável', 'Consequência na impressão', 'Solução'],
      rows: [
        ['Dossel demasiado estreito', 'O ângulo e a densidade são conservadores', 'As bordas da saliência cedem entre os pontos de contacto', 'Aumentar a densidade ou adicionar pontos de suporte manuais'],
        ['Dossel amplo mas instável', 'Ângulo alto num suporte alto', 'O contacto do bico pode abanar a estrutura', 'Reduzir o ângulo ou aumentar o diâmetro do tronco'],
        ['Dossel envolve detalhes', 'Densidade alta à volta de geometria complexa', 'As marcas de remoção são visíveis nas superfícies', 'Usar bloqueadores de suporte ou reduzir a densidade'],
        ['Dossel toca as paredes laterais', 'O espaço livre do suporte é demasiado pequeno', 'Os ramos podem fundir-se com a peça', 'Aumentar a distância X/Y ou reduzir o diâmetro de contacto'],
      ],
    },
    {
      type: 'card',
      title: 'O diâmetro do dossel é um aviso de pré visualização',
      html: 'Um dossel estimado grande não é automaticamente mau. Significa que a pré-visualização do laminador merece atenção porque a copa de suporte pode tornar-se o principal desafio de remoção.',
    },
    { type: 'title', text: 'Volume de Suporte, Comprimento de Filamento e Tempo de Impressão', level: 2 },
    {
      type: 'paragraph',
      html: 'O volume de suporte é o custo prático das definições escolhidas. Um suporte em árvore pode parecer leve na pré-visualização, mas um dossel denso e um tronco grosso podem ainda consumir filamento significativo. A calculadora reporta o volume estimado em centímetros cúbicos. Isto ajuda a comparar definições antes de laminar, especialmente quando decides se um tronco mais alto, uma densidade maior ou um alcance extra de ramos vale o material.',
    },
    {
      type: 'paragraph',
      html: 'O volume não se traduz perfeitamente em tempo de impressão porque os laminadores usam diferentes larguras de linha, contagens de parede, padrões de preenchimento, limites de aceleração e velocidades de suporte. No entanto, o volume continua a ser um indicador sólido. Se duas definições produzem estabilidade semelhante mas uma usa muito menos volume, a definição de menor volume é geralmente o melhor ponto de partida. Se a definição de menor volume também produz uma pontuação de estabilidade baixa, a poupança pode desaparecer quando a impressão falha ou a face inferior precisa de retoques.',
    },
    {
      type: 'summary',
      title: 'Como reduzir o volume de suporte em segurança',
      items: [
        'Reduz primeiro a densidade de ramos quando a pontuação de estabilidade já é alta.',
        'Reduz o ângulo de ramificação quando o dossel é muito largo e pesado no topo.',
        'Usa um tronco basal mais pequeno apenas em suportes curtos com cargas de saliência modestas.',
        'Divide uma árvore grande em duas árvores mais pequenas quando o alcance cria uma copa volumosa.',
        'Ajusta o diâmetro de contacto separadamente para que as marcas superficiais não forcem uma densidade desnecessária.',
      ],
    },
    {
      type: 'message',
      title: 'A poupança de material só é útil se o suporte sobreviver',
      html: 'Um suporte falhado custa geralmente mais filamento que um ligeiramente mais resistente. Trata as grandes percentagens de poupança como um convite para pré-visualizar cuidadosamente, não como prova de que o suporte mais leve está automaticamente correto.',
    },
    { type: 'title', text: 'Diâmetro de Contacto do Suporte em Árvore e Qualidade de Superfície', level: 2 },
    {
      type: 'paragraph',
      html: 'O diâmetro de contacto controla quanto do suporte em árvore toca o modelo. Contactos pequenos limpam bem e reduzem as marcas, mas podem desprender-se de saliências pesadas ou quentes. Contactos maiores seguram melhor e distribuem o calor, mas podem soldar-se ao PETG, deixar pontos elevados no PLA ou danificar o detalhe semelhante a resina em impressões decorativas. Esta calculadora estima um diâmetro de contacto a partir do diâmetro do ramo e da densidade para que o resultado se mantenha ligado à estrutura de suporte em vez de ser tratado como um valor cosmético isolado.',
    },
    {
      type: 'paragraph',
      html: 'As definições de contacto devem ser ajustadas em conjunto com a distância Z superior e o comportamento da interface. Se o espaço vertical é demasiado pequeno, mesmo um contacto minúsculo pode aderir fortemente. Se o espaço vertical é demasiado grande, um contacto largo pode ainda não suportar a saliência porque o filamento tem espaço para ceder. Para peças funcionais, testa o diâmetro de contacto numa saliência de calibração feita do mesmo material, tamanho de bico, altura de camada e definições de arrefecimento usados para o modelo real.',
    },
    {
      type: 'list',
      items: [
        'Usa diâmetros de contacto mais pequenos em superfícies cosméticas visíveis.',
        'Usa contactos maiores sob pontes pesadas, saliências grossas ou materiais de alta temperatura.',
        'Aumenta a distância Z superior antes de culpar a densidade da árvore quando os suportes são difíceis de remover.',
        'Reduz a velocidade da interface de suporte se os pontos de contacto se soltarem durante a impressão.',
        'Verifica se o laminador chama a esta definição diâmetro de contacto, diâmetro de ponta ou contacto de interface de suporte.',
      ],
    },
    {
      type: 'tip',
      title: 'O PETG precisa de cuidado extra',
      html: 'O PETG adere agressivamente ao material de suporte impresso com o mesmo filamento. Uma densidade de árvore moderada com uma distância Z cuidadosa funciona frequentemente melhor que um dossel muito denso com grandes contactos.',
    },
    { type: 'title', text: 'Fluxo de Trabalho Recomendado para Suportes em Árvore no Laminador', level: 2 },
    {
      type: 'paragraph',
      html: 'Começa por introduzir a altura do ponto de apoio mais alto, não a altura total do modelo. Um modelo pode ser alto enquanto a região suportada está perto da placa, ou curto enquanto uma saliência crítica se situa alta numa ilha estreita. Depois escolhe um ângulo de ramificação no intervalo equilibrado e define a densidade de ramos conforme a qualidade de superfície de que precisas. Finalmente, define o diâmetro basal do tronco com base na altura e na carga esperada. A calculadora mostrará se a combinação é eficiente em volume, estável ou arriscada.',
    },
    {
      type: 'paragraph',
      html: 'Após o cálculo, vai à pré-visualização do laminador e inspeciona o suporte em árvore gerado desde a primeira camada de suporte até ao contacto final. Procura partidas flutuantes, raízes de ramo muito finas, ramos que passam demasiado perto do modelo e ilhas de saliência não suportadas. Se o suporte é instável na calculadora e parece escasso na pré-visualização, reforça o tronco ou reduz o ângulo de ramificação. Se o suporte é estável mas visualmente volumoso, reduz a densidade e verifica se o padrão de contacto ainda cobre a saliência.',
    },
    {
      type: 'diagnostic',
      variant: 'success',
      title: 'Uma boa definição de suporte em árvore é aborrecida na pré visualização',
      html: 'A pré-visualização deve mostrar um tronco claro, percursos de ramo curtos, contactos suficientes sob a saliência e espaço aberto à volta dos detalhes. Se a árvore tem um aspeto visualmente dramático, pode estar a fazer demais.',
    },
    {
      type: 'summary',
      title: 'Sequência rápida de ajuste',
      items: [
        'Introduz a altura do ponto de apoio, não apenas a altura do modelo.',
        'Começa perto de 45-50° para o ângulo de ramificação.',
        'Usa 30-45% de densidade para impressões PLA gerais, depois ajusta a partir da pré-visualização.',
        'Aumenta o diâmetro do tronco antes de tornar os suportes altos extremamente densos.',
        'Confirma o diâmetro de contacto e o espaço livre na pré-visualização real do laminador.',
      ],
    },
    { type: 'title', text: 'Quando os Suportes em Árvore São Melhores Que os Suportes Normais', level: 2 },
    {
      type: 'paragraph',
      html: 'Os suportes em árvore são mais úteis quando o suporte é necessário em regiões isoladas: braços de figuras, capacetes, chifres de criaturas, esculturas orgânicas, arcos decorativos e saliências curvas. Evitam preencher toda a área sob o modelo, por isso usam frequentemente menos filamento e deixam menos marcas que os suportes de grelha. Também são úteis quando os suportes padrão criariam uma grande parede difícil de remover de uma superfície curva.',
    },
    {
      type: 'paragraph',
      html: 'Os suportes padrão podem ainda ser melhores para saliências técnicas planas, prateleiras horizontais largas e superfícies que precisam de uma interface de suporte uniforme. Um dossel de suporte em árvore toca pontos selecionados, enquanto os suportes normais podem fornecer um plano mais uniforme. Se a face inferior deve ser dimensionalmente precisa, compara ambas as abordagens. Uma árvore densa pode usar mais material que um suporte retilíneo simples se a saliência for larga e plana.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Suportes em árvore',
          description: 'Melhores para geometria orgânica, áreas de contacto dispersas e modelos onde o acesso de remoção é importante.',
          highlight: true,
          points: ['Menos material em saliências isoladas', 'Acesso mais limpo à volta de formas curvas', 'Sensível ao ângulo do ramo e à rigidez do tronco'],
        },
        {
          title: 'Suportes normais',
          description: 'Melhores para saliências planas largas, interfaces previsíveis e superfícies mecânicas simples.',
          points: ['Cobertura uniforme da face inferior', 'Frequentemente mais fáceis de calcular', 'Podem usar muito mais filamento sob modelos complexos'],
        },
      ],
    },
    {
      type: 'card',
      title: 'Usa ambos os tipos de suporte quando o modelo o exigir',
      html: 'Muitos laminadores permitem pintura de suportes, bloqueadores ou malhas modificadoras. Um modelo pode usar suportes em árvore para as características orgânicas e suportes normais para uma superfície de engenharia plana.',
    },
  ],
  faq: [
    {
      question: 'Qual é um bom ângulo de ramificação para suportes em árvore?',
      answer: 'Um intervalo prático de partida é cerca de 40-50°. Usa ângulos mais baixos para suportes altos e ângulos mais altos apenas quando precisas de mais alcance e o tronco é suficientemente forte.',
    },
    {
      question: 'Uma maior densidade de suporte em árvore melhora sempre a qualidade de impressão?',
      answer: 'Não. Uma densidade maior melhora a cobertura de contacto e a estabilidade, mas também aumenta o filamento, o tempo de impressão e as marcas de suporte. Usa a densidade mais baixa que suporte a saliência de forma fiável.',
    },
    {
      question: 'Como devo escolher o diâmetro basal do tronco?',
      answer: 'Aumenta o diâmetro basal do tronco à medida que a altura do ponto de apoio aumenta. Suportes altos precisam de um caminho de carga mais forte, enquanto suportes curtos podem usar frequentemente um tronco mais pequeno para poupar material.',
    },
    {
      question: 'Porque é que o diâmetro do dossel é importante?',
      answer: 'O diâmetro do dossel prevê a largura da copa superior de ramos. Um dossel largo pode suportar bem, mas pode colidir com detalhes, prender-se em cavidades ou tornar-se difícil de remover.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Introduz a altura do ponto de apoio', text: 'Usa a distância vertical da placa de construção até à área do modelo que precisa de suporte.' },
    { name: 'Define o ângulo e a densidade dos ramos', text: 'Escolhe os valores planeados do ângulo de ramificação e densidade de ramos do laminador.' },
    { name: 'Adiciona o diâmetro basal do tronco', text: 'Introduz o diâmetro aproximado do tronco principal da árvore usado pelo laminador.' },
    { name: 'Revê a estabilidade e o volume', text: 'Compara a pontuação de estabilidade, o diâmetro do dossel e o volume de suporte estimado antes de laminar.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Calculadora de Densidade de Suportes em Árvore',
      description: 'Otimiza a densidade de suportes em árvore, o ângulo de ramificação, o diâmetro basal do tronco, o diâmetro do dossel, o volume de suporte e a estabilidade na impressão 3D.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Qual é um bom ângulo de ramificação para suportes em árvore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Um intervalo prático de partida é cerca de 40-50°, com ângulos mais baixos para suportes altos e ângulos mais amplos apenas quando é necessário mais alcance.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Como ajustar a densidade de suportes em árvore para uma impressão 3D',
      step: [
        { '@type': 'HowToStep', text: 'Introduz a altura do ponto de apoio.' },
        { '@type': 'HowToStep', text: 'Define o ângulo de ramificação, a densidade de ramos e o diâmetro basal do tronco.' },
        { '@type': 'HowToStep', text: 'Revê o diâmetro do dossel, o volume de suporte e a pontuação de estabilidade.' },
        { '@type': 'HowToStep', text: 'Aplica os valores na pré-visualização do laminador e ajusta as definições de contacto.' },
      ],
    },
  ],
};
