import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AdditiveProductionEfficiencyCalculatorUI } from '../ui';

const slug = 'calculadora-eficiencia-producao-aditiva';
const title = 'Calculadora de Eficiência de Produção Aditiva';
const description =
  'Compare a impressão em lote com a impressão sequencial com tempo de impressão, sobrecarga de pré-aquecimento, transições de percurso, tempo de purga, risco estatístico de falha e uma recomendação automática de viabilidade.';

const faqData = [
  {
    question: 'Quando a impressão em lote é mais rápida que a sequencial?',
    answer:
      'A impressão em lote geralmente é mais rápida quando o pré-aquecimento é significativo, as peças cabem com segurança na plataforma de construção, a distância de percurso entre as peças é moderada e a taxa histórica de falhas é baixa o suficiente para que o risco combinado do lote permaneça abaixo do limite crítico.',
  },
  {
    question: 'Por que a impressão sequencial pode ser recomendada mesmo que demore mais?',
    answer:
      'A impressão sequencial limita a perda de uma peça com falha. Se o risco do lote calculado como 1 - (1 - taxa de falha)^N exceder o limite crítico, a calculadora recomenda a impressão sequencial para proteger a fila de produção.',
  },
  {
    question: 'A calculadora substitui as estimativas do fatiador?',
    answer:
      'Não. Um fatiador conhece trajetórias exatas, acelerações, larguras de extrusão, resfriamento e folga de colisão. Esta calculadora serve para o planejamento da produção antes do fatiamento, especialmente ao comparar um único trabalho de plataforma cheia com trabalhos repetidos de peça única.',
  },
  {
    question: 'Qual taxa de falha devo inserir?',
    answer:
      'Use seu próprio histórico de produção para material, impressora, geometria e condições do operador semelhantes. Se você ainda não acompanha isso, comece conservadoramente com 2-5% para produção FDM ajustada e aumente para materiais novos, trabalhos longos ou dispositivos mal validados.',
  },
];

const howToData = [
  { name: 'Insira a quantidade', text: 'Defina o número total de peças necessárias para a execução da produção.' },
  { name: 'Adicione os tempos', text: 'Insira o tempo de impressão por peça, tempo de pré-aquecimento, distância de transição, velocidade de percurso e tempo de purga ou estabilização.' },
  { name: 'Defina o risco histórico', text: 'Use uma porcentagem de falha de trabalhos comparáveis e escolha o risco máximo aceitável do lote.' },
  { name: 'Leia a recomendação', text: 'Compare o tempo total, o tempo economizado, a eficiência relativa, a sobrecarga de transição e o risco estatístico do lote.' },
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
  step: howToData.map((step, i) => ({ '@type': 'HowToStep', position: i + 1, name: step.name, text: step.text })),
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

export const content: ToolLocaleContent<AdditiveProductionEfficiencyCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Entradas de eficiência de produção aditiva',
    resultsAriaLabel: 'Resultados de eficiência de produção aditiva',
    visualizerAriaLabel: 'Visualização de risco generativo e layout da plataforma',
    unitSystemLabel: 'Unidades',
    metricLabel: 'Métrico',
    imperialLabel: 'EUA',
    piecesLabel: 'Peças',
    unitPrintTimeLabel: 'Tempo de impressão por peça (min)',
    preheatTimeLabel: 'Tempo de pré-aquecimento (min)',
    transitionDistanceLabel: 'Transição média',
    travelSpeedLabel: 'Velocidade de percurso',
    failureRateLabel: 'Taxa histórica de falha',
    purgeTimeLabel: 'Purga / estabilização (min)',
    criticalRiskLabel: 'Risco crítico do lote',
    batchLabel: 'Impressão em lote',
    sequentialLabel: 'Impressão sequencial',
    recommendationLabel: 'Estratégia recomendada',
    savingsLabel: 'Economia de tempo absoluta',
    efficiencyLabel: 'Eficiência relativa',
    riskLabel: 'Risco de falha do lote',
    layoutLabel: 'Coreografia da plataforma',
    transitionLabel: 'Sobrecarga de transição',
    batchWinsLabel: 'Lote',
    sequentialWinsLabel: 'Sequencial',
    riskOverrideLabel: 'sobreposição de risco',
    fasterLabel: 'economizado',
    slowerLabel: 'extra',
    lowRiskLabel: 'Risco baixo do lote',
    moderateRiskLabel: 'Risco moderado do lote',
    criticalRiskStatusLabel: 'Risco crítico do lote',
    minutesUnit: 'min',
    percentUnit: '%',
    millimeterUnit: 'mm',
    inchUnit: 'pol',
    metricSpeedUnit: 'mm/s',
    imperialSpeedUnit: 'pol/s',
  },
  seo: [
    { type: 'title', text: 'Impressão em Lote vs Impressão Sequencial: O que a Calculadora Mede', level: 2 },
    {
      type: 'paragraph',
      html: 'Escolher entre <strong>impressão em lote vs impressão sequencial</strong> não é apenas uma questão de preencher a plataforma de construção. Um lote de plataforma cheia pode economizar tempo de aquecimento e reduzir a intervenção do operador, mas concentra o risco de produção em uma longa janela de exposição. A impressão sequencial repete a sobrecarga de preparação, mas isola as falhas para que uma peça ruim não contamine automaticamente o valor de toda a plataforma. Esta calculadora transforma essa troca em números: minutos totais, transições de percurso, eficiência relativa e risco estatístico do lote.',
    },
    {
      type: 'paragraph',
      html: 'A fórmula do lote é <code>Tlote = Tc + (N x Tp) + ((N x Dtrans) / (Vtravel x 60))</code>. A fórmula sequencial é <code>Tseq = N x (Tc + Tp + Tpurga)</code>. A fórmula de risco é <code>Risolote = 1 - (1 - Pfalha)^N</code>. Estas equações são intencionalmente transparentes porque o planejamento da produção é mais fácil quando a razão por trás de uma recomendação é visível em vez de oculta em uma caixa preta.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '1', label: 'Ciclo de pré-aquecimento no modo lote', icon: 'mdi:heat-wave' },
        { value: 'N', label: 'Ciclos de pré-aquecimento no modo sequencial', icon: 'mdi:repeat' },
        { value: '60', label: 'Segundos usados para normalizar o percurso em minutos', icon: 'mdi:timer-outline' },
        { value: '1 - (1-p)^N', label: 'Modelo composto de falha do lote', icon: 'mdi:chart-bell-curve' },
      ],
    },
    {
      type: 'tip',
      title: 'Use uma definição consistente de falha',
      html: '<p>Uma taxa de falha só é útil se a oficina definir falha de forma consistente. Decida se ela inclui rejeições estéticas, outliers dimensionais, marcas de suporte, falhas de primeira camada, emaranhados de filamento, interrupções de energia e remoções pelo operador. Misturar definições faz o modelo de risco parecer preciso enquanto alimenta dados ruidosos.</p>',
    },
    { type: 'title', text: 'Como a Impressão em Lote Economiza Tempo', level: 2 },
    {
      type: 'paragraph',
      html: 'A impressão em lote normalmente vence na utilização da máquina quando o tempo de pré-aquecimento é grande comparado ao tempo de impressão de uma única peça. Aquecer a plataforma e o bocal uma vez para uma execução de 24 peças pode evitar 23 ciclos repetidos de aquecimento. Em um ambiente de fazenda de impressão, isso importa porque o aquecimento é capacidade morta: a impressora consome tempo de calendário, energia e atenção do operador antes que qualquer geometria vendável seja produzida.',
    },
    {
      type: 'paragraph',
      html: 'O termo de percurso impede que o modelo finja que layouts em lote são gratuitos. Cada peça pode adicionar uma transição sem impressão onde o bocal cruza a plataforma, evita ilhas, realiza movimentos de combing ou se move para o próximo limite do objeto. A calculadora usa a distância média de transição e a velocidade de percurso para estimar essa sobrecarga em minutos. O termo é pequeno em layouts compactos e mais visível quando as peças estão espalhadas por uma plataforma grande.',
    },
    {
      type: 'table',
      headers: ['Variável do lote', 'Significado na produção', 'Erro de planejamento que previne'],
      rows: [
        ['N', 'Total de peças na execução', 'Tratar uma plataforma de dez peças como dez trabalhos isolados sem pré-aquecimento compartilhado.'],
        ['Tp', 'Tempo de impressão de uma peça completa', 'Usar o tempo de camada de apenas um pequeno recurso em vez de uma estimativa de peça finalizada.'],
        ['Tc', 'Tempo de aquecimento da plataforma e bocal', 'Ignorar o tempo antes do início da extrusão ao cotar a capacidade da fila.'],
        ['Dtrans', 'Distância média entre peças', 'Assumir que uma plataforma cheia não tem penalidade de movimento sem extrusão.'],
        ['Vtravel', 'Velocidade de percurso do cabeçote', 'Esquecer que perfis lentos de percurso tornam arranjos espalhados menos eficientes.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'O tempo do lote é mais sensível ao preaquecimento e à quantidade',
      badge: 'Planejamento de capacidade',
      html: '<p>Se o pré-aquecimento é de 12 minutos e o trabalho contém 30 peças, o modo sequencial gasta 360 minutos apenas repetindo o aquecimento. O modo lote gasta esses 12 minutos uma vez. É por isso que a mesma impressora pode parecer dramaticamente mais produtiva quando peças pequenas são aninhadas cuidadosamente.</p>',
    },
    { type: 'title', text: 'Por Que a Impressão Sequencial Ainda Vence em Trabalhos Arriscados', level: 2 },
    {
      type: 'paragraph',
      html: 'A impressão sequencial pode parecer mais lenta porque a impressora repete o pré-aquecimento e o tempo de purga ou estabilização para cada unidade. A vantagem é o confinamento. Se a peça 17 falha em um plano sequencial, as 16 peças anteriores podem já estar completas e removidas. Se a peça 17 falha em um lote devido a arrasto do bocal, perda de adesão, creep térmico ou um problema de material, o objeto com falha pode colidir com peças vizinhas ou fazer o operador descartar toda a plataforma.',
    },
    {
      type: 'paragraph',
      html: 'O modelo de risco combina a probabilidade histórica de falha ao longo da contagem de peças. Uma taxa de falha de 3% por peça não significa que um lote de 24 peças tem 3% de risco. A probabilidade de que toda peça tenha sucesso é <code>(1 - 0,03)^24</code>, e a probabilidade de que pelo menos uma peça falhe é o complemento. Isso torna lotes grandes menos atraentes quando o processo não é estável.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Impressão em lote',
          description: 'Melhor quando o processo é estável, as peças têm forte adesão, o layout da plataforma é seguro contra colisões e o tempo de pré-aquecimento domina o cronograma.',
          icon: 'mdi:grid',
          highlight: true,
          points: ['Um ciclo de aquecimento', 'Alto rendimento', 'Maior exposição a falhas compartilhadas'],
        },
        {
          title: 'Impressão sequencial',
          description: 'Melhor quando rejeições são caras, os trabalhos são altos, os materiais são sensíveis ou o usuário deseja isolar cada peça da próxima.',
          icon: 'mdi:format-list-numbered',
          points: ['Confinamento de falhas', 'Mais sobrecarga repetida', 'Requer planejamento de folga'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Compensação de risco de produção',
      items: [
        { pro: 'A impressão em lote reduz o tempo ocioso de aquecimento e pode finalizar pequenas peças repetitivas em uma execução não supervisionada.', con: 'Uma falha de adesão ou extrusão pode ameaçar toda a plataforma e consumir uma longa janela de recuperação do operador.' },
        { pro: 'A impressão sequencial facilita validar uma unidade, removê-la e continuar com menos perda acumulada.', con: 'O aquecimento e a estabilização repetidos podem consumir mais tempo que a geometria real em peças pequenas.' },
        { pro: 'Um lote pode simplificar a embalagem porque todas as peças terminam juntas.', con: 'Um lote longo expõe cada unidade à mesma deriva ambiental, problema de bobina ou período de degradação térmica.' },
      ],
    },
    { type: 'title', text: 'Escolhendo um Limite de Risco Crítico do Lote', level: 2 },
    {
      type: 'paragraph',
      html: 'O limite de risco crítico é a linha onde a calculadora muda a recomendação de otimização de tempo para proteção de viabilidade. Uma oficina de protótipos pode tolerar 45% de risco do lote se o material é barato e o operador está experimentando. Uma fazenda de produção que envia peças para clientes pode usar 15-25% para materiais comuns e limites mais baixos para trabalhos noturnos, polímeros de engenharia caros ou peças com muita mão de obra pós-processamento.',
    },
    {
      type: 'table',
      headers: ['Limite', 'Bom caso de uso', 'Interpretação'],
      rows: [
        ['10-20%', 'Peças caras, trabalhos noturnos, pedidos de clientes de alto valor', 'Proteger a confiabilidade mesmo quando o modo lote economiza tempo.'],
        ['25-35%', 'Produção FDM normal ajustada com material conhecido', 'Limite equilibrado para economia de tempo e exposição a rejeições.'],
        ['40-60%', 'Protótipos internos ou dispositivos baratos', 'Aceita mais risco para liberar capacidade da impressora mais rapidamente.'],
        ['Acima de 60%', 'Apenas exploração', 'Útil para ver o potencial de tempo, mas fraco como regra de viabilidade de produção.'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:clipboard-pulse-outline',
      title: 'Como estimar sua taxa de falha inicial',
      html: '<p>Revise as últimas 50 a 200 impressões comparáveis na mesma família de impressoras. Conte trabalhos que precisaram de reimpressão, resgate manual ou rejeição do cliente. Divida as falhas pelo total de tentativas e depois separe por material e geometria quando houver dados suficientes. Suportes de PLA, clipes de PETG, invólucros de ASA e juntas de TPU não devem compartilhar um único número de risco genérico.</p>',
    },
    {
      type: 'summary',
      title: 'Regras do limite de risco',
      items: [
        'Abaixe o limite quando o material, o prazo ou o custo do pós-processamento for alto.',
        'Aumente-o apenas quando as peças com falha são baratas e a fila se beneficia de lotes agressivos.',
        'Recalcule após mudanças no processo, como uma nova superfície de plataforma, bocal, fornecedor de filamento ou temperatura da câmara.',
      ],
    },
    { type: 'title', text: 'Transições de Percurso, Movimento do Cabeçote e Eficiência do Layout', level: 2 },
    {
      type: 'paragraph',
      html: 'As transições de percurso são o custo oculto da eficiência de impressão no local. Um fatiador pode saltar de uma peça para outra muitas vezes por camada, especialmente quando vários objetos compartilham a mesma altura Z. A distância média de transição não precisa ser perfeita; só precisa representar se o layout é compacto, moderadamente espaçado ou espalhado pela superfície de construção. Um arranjo compacto com transições médias de 25 mm se comporta de forma muito diferente de um arranjo de plataforma cheia com saltos de 180 mm.',
    },
    {
      type: 'paragraph',
      html: 'A velocidade de percurso deve refletir o perfil real, não o máximo anunciado da máquina. Limites de aceleração, configurações de firmware, opções de evitar cruzamento de perímetros, Z-hop e estratégia de combing podem tornar o percurso efetivo mais lento do que o campo do fatiador sugere. Se uma máquina usa percurso conservador para primeiras camadas frágeis ou peças altas, reduza o valor para evitar superestimar a eficiência do lote.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Impressão em lote', definition: 'Imprimir várias cópias ou objetos em um único trabalho compartilhado na plataforma de construção.' },
        { term: 'Impressão sequencial', definition: 'Imprimir um objeto de cada vez antes de passar para o próximo objeto, geralmente com restrições de folga ao redor do cabeçote.' },
        { term: 'Distância de transição', definition: 'Distância média de percurso sem extrusão necessária para se mover entre peças ou zonas de impressão.' },
        { term: 'Tempo de purga ou estabilização', definition: 'Tempo extra por unidade sequencial para priming, estabilização térmica, limpeza ou reinicialização segura para o operador.' },
        { term: 'Risco crítico', definition: 'Probabilidade máxima aceitável de que pelo menos uma peça no lote falhe.' },
      ],
    },
    {
      type: 'message',
      title: 'A folga de colisão importa no modo sequencial real',
      ariaLabel: 'Aviso de folga na impressão sequencial',
      html: '<p>Muitos fatiadores restringem a impressão sequencial porque o hotend, o duto do ventilador, o pórtico X ou os clipes da plataforma podem colidir com peças finalizadas. Use esta calculadora para planejamento e depois verifique a folga sequencial dentro do fatiador antes de confirmar o trabalho.</p>',
    },
    { type: 'title', text: 'Como Usar os Resultados para Otimização da Manufatura Aditiva', level: 2 },
    {
      type: 'paragraph',
      html: 'A economia de tempo absoluta mostra quantos minutos o modo lote ganha ou perde em relação ao modo sequencial. A porcentagem de eficiência relativa normaliza essa diferença em relação ao tempo sequencial, o que é útil para comparar trabalhos de diferentes tamanhos. Economizar 20 minutos em uma execução de 40 minutos é operacionalmente enorme; economizar 20 minutos em uma execução de 30 horas pode não justificar um risco maior.',
    },
    {
      type: 'paragraph',
      html: 'A recomendação combina velocidade e viabilidade. Se o lote é mais rápido e o risco está abaixo do limite, a ferramenta recomenda lote. Se o risco do lote excede o limite, o sequencial é recomendado mesmo quando é mais lento. Se o lote é mais lento porque a sobrecarga de transição é grande ou o pré-aquecimento é pequeno, o sequencial vence no tempo sem precisar da sobreposição de risco.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Use a calculadora antes de aninhar uma plataforma grande para que o plano de produção seja baseado no tempo de fila e na exposição a falhas.',
        'Faça uma comparação hipotética com uma taxa de falha menor após a calibração para ver como a melhoria do processo muda a estratégia.',
        'Aumente o tempo de purga quando trabalhos sequenciais exigirem limpeza, priming, inspeção da plataforma ou intervenção do operador entre unidades.',
        'Reduza a velocidade de percurso ao usar Z-hop, evitar cruzamento de perímetros, peças altas frágeis ou limites de aceleração do firmware.',
        'Registre os resultados reais da execução e atualize a taxa de falha em vez de confiar em uma regra geral genérica.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Não otimize apenas pelo tempo de relógio mais rápido',
      badge: 'Custo operacional',
      html: '<p>Um lote de 12 horas com falha pode custar mais do que o tempo mostrado no display da máquina. Inclua material, eletricidade, diagnóstico do operador, perda de slot na fila, atraso no pós-processamento e impacto no prazo do cliente ao decidir se a economia de tempo vale o risco composto.</p>',
    },
    { type: 'title', text: 'Exemplos Práticos para Fluxos de Trabalho da Calculadora de Tempo de Impressão 3D', level: 2 },
    {
      type: 'paragraph',
      html: 'Para clipes pequenos de PLA com tempo de impressão de 20 minutos por peça e aquecimento de 10 minutos, a impressão em lote geralmente domina. O pré-aquecimento compartilhado economiza uma grande fração do trabalho, e o posicionamento compacto mantém a sobrecarga de transição baixa. Se a oficina tem uma taxa de falha de 1-2%, o risco pode permanecer aceitável para quantidades moderadas. Este é o caso de uso clássico de alto rendimento para impressão em lote.',
    },
    {
      type: 'paragraph',
      html: 'Para suportes altos de PETG com adesão marginal, a impressão sequencial pode ser mais segura. Mesmo que o lote economize duas horas, um canto encurvado pode causar impacto do bocal, deslocamento de camada ou descolamento do objeto que estraga as peças vizinhas. A calculadora expõe a diferença entre uma economia de tempo tentadora e um perfil de risco que não se encaixa mais na intenção de produção.',
    },
    {
      type: 'paragraph',
      html: 'Para decisões de eficiência de impressão no local, execute a mesma peça duas vezes: uma com a taxa de falha atual e outra com a taxa alvo após a calibração. Se reduzir as falhas de 6% para 2% muda a recomendação de sequencial para lote, o melhor investimento pode ser limpeza da plataforma, ajuste de primeira camada, filamento seco, estabilidade da câmara ou uma estratégia de brim validada, em vez de comprar outra impressora.',
    },
    {
      type: 'summary',
      title: 'Lista de verificação de decisão',
      items: [
        'Use lote quando o pré-aquecimento é grande, o layout é compacto e a taxa histórica de falhas é baixa.',
        'Use sequencial quando cada rejeição é cara, alta, arriscada ou propensa a danificar vizinhos.',
        'Ajuste o processo quando uma pequena redução na taxa de falha desbloqueia uma grande eficiência do lote.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
