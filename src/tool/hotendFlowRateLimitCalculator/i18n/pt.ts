import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HotendFlowRateLimitCalculatorUI } from '../ui';

const slug = 'calculadora-vazao-volumetrica';
const title = 'Calculadora de Vazão Volumétrica: Limites Precisos do Hotend';
const description =
  'Calcule a vazão volumétrica da impressão 3D em mm3/s, compare-a com a capacidade de fusão do hotend e identifique quando a velocidade, a largura da linha e a altura da camada causarão subextrusão.';

const faqData = [
  {
    question: 'O que é vazão volumétrica na impressão 3D?',
    answer:
      'A vazão volumétrica é o volume de plástico solicitado ao hotend a cada segundo. É calculada como largura da linha multiplicada pela altura da camada multiplicada pela velocidade de impressão, produzindo um resultado em mm3/s.',
  },
  {
    question: 'O que acontece se a vazão volumétrica exceder o limite do hotend?',
    answer:
      'O hotend não consegue derreter completamente o plástico na taxa solicitada. A pressão aumenta, a extrusão torna-se inconsistente e a impressão pode apresentar subextrusão, paredes fracas, superfícies rugosas opacas ou passos saltados do extrusor.',
  },
  {
    question: 'Um V6 é realmente limitado a 15 mm3/s?',
    answer:
      '15 mm3/s é uma constante de planejamento prática para um hotend padrão de zona de fusão bem ajustado. Os valores reais dependem do filamento, da temperatura, do bocal, da potência do aquecedor, da aderência do extrusor e de quanta perda de qualidade visual é aceitável.',
  },
  {
    question: 'Por que aumentar a altura da camada reduz a velocidade segura?',
    answer:
      'A altura da camada é um multiplicador direto na equação de fluxo. Se a largura da linha e a capacidade do hotend permanecerem as mesmas, dobrar a altura da camada reduz aproximadamente pela metade a velocidade máxima antes que o hotend atinja seu limite de fusão.',
  },
];

const howToData = [
  { name: 'Escolha uma arquitetura de hotend', text: 'Selecione um preset padrão V6, Volcano, Bambu high-flow ou ultra-high-flow para definir a constante de capacidade de fusão.' },
  { name: 'Defina a geometria da linha', text: 'Ajuste a largura da linha e a altura da camada para corresponder ao perfil do fatiador que você planeja usar.' },
  { name: 'Ajuste a velocidade de impressão', text: 'Use o controle deslizante de velocidade fina para observar o indicador de estresse se aproximar das zonas de fluxo de 70%, 90% e crítico.' },
  { name: 'Leia a velocidade segura e a reserva', text: 'Compare os mm3/s atuais com a velocidade máxima segura e a reserva de taxa de fusão restante.' },
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
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'pt',
};

export const content: ToolLocaleContent<HotendFlowRateLimitCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Entradas do limite de vazão volumétrica',
    resultsAriaLabel: 'Resultados do limite de vazão volumétrica',
    unitSystemLabel: 'Unidades',
    metricLabel: 'Métrico',
    imperialLabel: 'US',
    hotendLabel: 'Arquitetura do hotend',
    lineWidthLabel: 'Largura da linha',
    layerHeightLabel: 'Altura da camada',
    speedLabel: 'Velocidade de impressão',
    flowLabel: 'Vazão volumétrica',
    loadLabel: 'Carga térmica',
    maxSpeedLabel: 'Velocidade máx segura',
    reserveLabel: 'Reserva de fusão',
    stateLabel: 'Estado do sistema',
    idealState: 'FLUXO IDEAL',
    limitState: 'LIMITE DE VISCOSIDADE',
    criticalState: 'FLUXO CRÍTICO',
    idealHint: 'O hotend tem margem térmica suficiente para pressão de fusão estável e extrusão consistente.',
    limitHint: 'O perfil está próximo do limite de viscosidade. Pequenas mudanças de material ou temperatura podem revelar subextrusão.',
    criticalHint: 'O fluxo solicitado excede a janela de fusão confiável. Reduza a velocidade, a largura da linha ou a altura da camada.',
    millimeterUnit: 'mm',
    inchUnit: 'in',
    metricSpeedUnit: 'mm/s',
    imperialSpeedUnit: 'in/s',
    flowUnit: 'mm3/s',
  },
  seo: [
    { type: 'title', text: 'Como Funciona a Calculadora de Vazão Volumétrica Máxima', level: 2 },
    {
      type: 'paragraph',
      html: 'Uma <strong>calculadora de vazão volumétrica máxima</strong> responde a uma pergunta mais útil que uma simples calculadora de velocidade: o hotend consegue derreter a quantidade de plástico solicitada pelo fatiador? Os sistemas de movimento podem anunciar altas velocidades de deslocamento, mas a extrusão é limitada pela transferência térmica, comprimento da zona de fusão, pressão do bocal, viscosidade do filamento, estabilidade do aquecedor e aderência do extrusor. A calculadora modela a taxa de fusão solicitada como <code>Vf = largura da linha x altura da camada x velocidade</code>, com o resultado mostrado em <code>mm3/s</code>.',
    },
    {
      type: 'paragraph',
      html: 'A ferramenta compara esse fluxo instantâneo com a capacidade do hotend selecionado. Hotends padrão tipo V6 são representados com uma constante de taxa de fusão mais baixa, arquiteturas de zona de fusão mais longa como Volcano usam uma constante mais alta e hotends modernos de alto fluxo usam valores maiores. O objetivo não é prometer um limite universal de laboratório; é fornecer uma verificação técnica rápida antes que um perfil do fatiador solicite mais plástico do que o hardware pode liquefazer de forma confiável.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'mm3/s', label: 'Unidade usada para capacidade de fusão do hotend', icon: 'mdi:cube-scan' },
        { value: '70%', label: 'Limite da zona de conforto para perfis de produção estáveis', icon: 'mdi:gauge-low' },
        { value: '90%', label: 'Limite de viscosidade onde falhas se tornam sensíveis', icon: 'mdi:gauge' },
        { value: '100%+', label: 'Fluxo crítico onde o risco de subextrusão domina', icon: 'mdi:alert-outline' },
      ],
    },
    {
      type: 'tip',
      title: 'Use a largura da linha do fatiador, não o diâmetro do bocal',
      html: '<p>A equação de fluxo usa a largura da linha de extrusão do fatiador. Um bocal de 0,4 mm geralmente imprime uma linha de 0,42-0,48 mm. Se a calculadora usar o diâmetro do bocal em vez da largura da linha, pode subestimar a demanda de fluxo e ocultar um perfil que já está próximo do limite do hotend.</p>',
    },
    { type: 'title', text: 'Por Que Velocidade e Taxa de Fusão Não São o Mesmo Limite', level: 2 },
    {
      type: 'paragraph',
      html: 'Uma impressora pode se mover a 300 mm/s e ainda falhar a 90 mm/s se o volume de extrusão for muito alto. A velocidade só se torna significativa depois que a largura da linha e a altura da camada são incluídas. Imprimir uma linha de 0,45 mm com camadas de 0,20 mm a 150 mm/s solicita 13,5 mm3/s. Imprimir uma linha de 0,60 mm com camadas de 0,30 mm na mesma velocidade solicita 27 mm3/s. A velocidade de movimento é idêntica, mas o segundo perfil pede ao hotend para derreter o dobro de plástico por segundo.',
    },
    {
      type: 'table',
      headers: ['Largura da linha', 'Altura da camada', 'Velocidade', 'Fluxo solicitado'],
      rows: [
        ['0,42 mm', '0,16 mm', '120 mm/s', '8,06 mm3/s'],
        ['0,45 mm', '0,20 mm', '150 mm/s', '13,50 mm3/s'],
        ['0,50 mm', '0,25 mm', '180 mm/s', '22,50 mm3/s'],
        ['0,60 mm', '0,30 mm', '150 mm/s', '27,00 mm3/s'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'A subextrusão muitas vezes parece um problema de calibração',
      badge: 'Teto de fluxo',
      html: '<p>Quando um perfil excede a capacidade de fusão, os usuários frequentemente perseguem retração, pressure advance, temperatura ou passos do extrusor. Essas configurações importam, mas não podem fazer uma zona de fusão curta processar plástico ilimitado. Primeiro verifique se os mm3/s solicitados estão dentro da janela de capacidade do hotend.</p>',
    },
    {
      type: 'summary',
      title: 'Regras da equação de fluxo',
      items: [
        'Largura da linha, altura da camada e velocidade multiplicam-se diretamente.',
        'Um pequeno aumento em duas configurações geométricas pode sobrecarregar um hotend mesmo quando a velocidade parece modesta.',
        'A velocidade máxima segura é o limite do hotend dividido pela largura da linha e altura da camada.',
      ],
    },
    { type: 'title', text: 'Referências de Desempenho Térmico por Arquitetura de Hotend', level: 2 },
    {
      type: 'paragraph',
      html: 'A arquitetura do hotend controla quanto tempo o filamento permanece na zona aquecida e com que eficiência o calor se move para o núcleo do filamento. Uma zona de fusão compacta tipo V6 é responsiva e leve, mas seu teto de fluxo prático é menor que o de uma zona de fusão longa tipo Volcano. Os designs cerâmicos de alto fluxo e ultra-alto fluxo aumentam o contato do aquecedor, o comprimento do caminho de fusão ou a área superficial interna para sustentar taxas de extrusão mais altas.',
    },
    {
      type: 'table',
      headers: ['Arquitetura de hotend', 'Capacidade de planejamento', 'Melhor caso de uso', 'Precaução técnica'],
      rows: [
        ['V6 / MK8', '15 mm3/s', 'Perfis de qualidade, velocidade moderada PLA/PETG, impressoras de mesa padrão', 'Pode atingir limites de pressão rapidamente com linhas largas ou camadas altas.'],
        ['Revo High Flow', '18 mm3/s', 'Atualização de alto fluxo com fator de forma compacto', 'Ainda precisa de validação de temperatura e material.'],
        ['Volcano', '25 mm3/s', 'Bocais grandes, camadas espessas, peças funcionais, perfis rápidos de rascunho', 'Zonas de fusão longas podem gotejar mais e precisam de ajuste de retração.'],
        ['Bambu HF', '32 mm3/s', 'Perfis de impressora fechada de alta velocidade e produção rápida de PLA', 'Os valores do perfil dependem fortemente do resfriamento e do comportamento do filamento.'],
        ['Rapido UHF / similar', '45 mm3/s', 'Fluxo extremo, grandes larguras de extrusão, produtividade', 'O torque do extrusor, a potência do aquecedor e a geometria do bocal tornam-se fatores limitantes.'],
      ],
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: 'Zona de fusão curta', description: 'Compacta, responsiva, cabeçote mais leve, menor armazenamento térmico.', icon: 'mdi:thermometer-low', points: ['Bom controle de detalhes', 'Teto de fluxo mais baixo', 'Menos inércia térmica'] },
        { title: 'Zona de fusão longa', description: 'Mais tempo de contato para o filamento absorver calor antes de atingir o bocal.', icon: 'mdi:thermometer-lines', highlight: true, points: ['Mm3/s mais alto', 'Melhor saída em camadas espessas', 'Mais gerenciamento de gotejamento'] },
        { title: 'Núcleo de alto fluxo', description: 'A geometria moderna aumenta a área de contato ou o acoplamento do aquecedor sem simplesmente estender o comprimento.', icon: 'mdi:heat-wave', points: ['Resposta rápida', 'Alto rendimento', 'Precisa de perfis ajustados'] },
      ],
    },
    {
      type: 'message',
      title: 'Os valores de referência são constantes de planejamento',
      ariaLabel: 'Nota de referência do hotend',
      html: '<p>Os limites predefinidos são constantes de planejamento deliberadamente conservadoras. A capacidade real de fusão varia com a formulação do filamento, o diâmetro do bocal, o cartucho do aquecedor, a posição do termistor, a temperatura de extrusão e a quantidade de perda de qualidade que a peça pode tolerar.</p>',
    },
    { type: 'title', text: 'Leitura das Zonas do Indicador de Estresse', level: 2 },
    {
      type: 'paragraph',
      html: 'O indicador de estresse traduz os cálculos de fluxo em um estado visual de operação. Abaixo de 70% de carga, o hotend tem margem para variação normal do filamento, oscilação menor de temperatura e mudanças de velocidade ao longo do percurso. Entre 70% e 90%, a extrusão pode permanecer bem-sucedida, mas o perfil torna-se sensível. Acima de 90%, a impressão está suficientemente próxima do teto de fusão para que a variação do lote de material, a umidade ou um bocal ligeiramente mais frio possam empurrá-la para uma subextrusão visível.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        '0-70%: boa margem de produção para peças repetíveis e variação normal de material.',
        '70-90%: útil para testes de velocidade, mas valide paredes, superfícies superiores e união do preenchimento.',
        '90%+: tratar como zona crítica a menos que o filamento e o hotend tenham sido medidos com uma torre de fluxo.',
        'Acima de 100%: reduza a velocidade, a largura da linha ou a altura da camada antes de procurar configurações não relacionadas do fatiador.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:gauge-full',
      title: 'Por que o indicador pode ser melhor que uma caixa de aviso',
      html: '<p>Uma caixa de aviso informa ao usuário o que deu errado após cruzar um limite. Um indicador de estresse mostra a aproximação a esse limite. Isso torna mais fácil parar em uma margem operacional planejada em vez de reagir apenas quando o perfil já se tornou instável.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'O fluxo crítico não é apenas um problema de qualidade superficial',
      badge: 'Resistência mecânica',
      html: '<p>O filamento mal fundido pode aderir mal entre os traços e as camadas. Mesmo quando a parede externa parece aceitável, a união do preenchimento, a adesão do perímetro e a resistência ao impacto podem sofrer se a taxa de fluxo exceder a capacidade de fusão.</p>',
    },
    { type: 'title', text: 'Como Usar a Calculadora com um Perfil do Fatiador', level: 2 },
    {
      type: 'paragraph',
      html: 'Comece com os valores reais do fatiador para largura da linha, altura da camada e velocidade da parede externa ou velocidade geral de impressão. Selecione a arquitetura de hotend mais próxima. Mova o controle deslizante de velocidade até que o indicador atinja sua carga preferida. A velocidade máxima segura exibida é a velocidade que atingiria exatamente o limite do hotend para a geometria de linha atual. Para trabalho de produção, use um valor inferior ao máximo matemático.',
    },
    {
      type: 'paragraph',
      html: 'Se o indicador entrar na zona crítica, há três maneiras diretas de reduzir o fluxo: diminuir a velocidade, reduzir a largura da linha ou reduzir a altura da camada. A temperatura pode aumentar o fluxo prático para alguns materiais, mas também altera o brilho, as pontes, o comportamento em saliências, o encordoamento e a precisão dimensional. A calculadora concentra-se intencionalmente na geometria e na capacidade do hardware porque essas são as alavancas mais transparentes.',
    },
    {
      type: 'proscons',
      title: 'Formas de reduzir a demanda de fluxo',
      items: [
        { pro: 'Reduzir a velocidade preserva a geometria da linha e a intenção dimensional.', con: 'Aumenta o tempo de impressão e pode reduzir o rendimento da fazenda.' },
        { pro: 'Reduzir a altura da camada melhora o acabamento superficial e reduz mm3/s.', con: 'Aumenta o número de camadas e pode prolongar o trabalho apesar do fluxo menor.' },
        { pro: 'Reduzir a largura da linha pode diminuir a pressão e melhorar os detalhes finos.', con: 'Pode enfraquecer paredes esparsas e aumentar o número de trajetórias.' },
      ],
    },
    {
      type: 'tip',
      title: 'Valide com uma torre de fluxo',
      html: '<p>Use a calculadora para escolher uma faixa de velocidade realista, depois imprima uma torre de teste de vazão para o filamento e a temperatura específicos. O melhor limite de produção é a vazão mais alta que ainda produz paredes estáveis, brilho consistente, boa adesão entre camadas e sem saltos do extrusor.</p>',
    },
    { type: 'title', text: 'Sintomas de Exceder a Capacidade de Fusão do Hotend', level: 2 },
    {
      type: 'paragraph',
      html: 'Um perfil além do limite de fusão do hotend pode falhar gradualmente. Primeiro, as superfícies superiores podem mostrar traços finos ou pequenos espaços. Depois, as linhas de preenchimento tornam-se inconsistentes, os perímetros perdem brilho e os cantos mostram recuperação fraca de pressão. Em casos mais graves, o extrusor clica, tritura o filamento, salta passos ou deixa seções quebradiças porque o filamento que entra no bocal não está completamente amolecido.',
    },
    {
      type: 'table',
      headers: ['Sintoma observado', 'Causa provável relacionada ao fluxo', 'Resposta da calculadora'],
      rows: [
        ['Paredes finas em alta velocidade', 'Os mm3/s solicitados excedem a capacidade de fusão em movimentos retos longos', 'Reduza a velocidade até que a carga retorne abaixo de 90%.'],
        ['Extrusão rugosa opaca', 'O filamento não é completamente aquecido no núcleo', 'Reduza o fluxo ou aumente a temperatura cuidadosamente para esse material.'],
        ['Clique do extrusor', 'A contrapressão excede a aderência do extrusor ou o torque do motor', 'Reduza o fluxo imediatamente e inspecione a tensão do acionador do filamento.'],
        ['União fraca do preenchimento', 'O material sai muito frio ou derretido de forma inconsistente', 'Use mais margem térmica para peças estruturais.'],
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Vazão volumétrica', definition: 'O volume de plástico solicitado ao hotend por segundo, expresso em mm3/s.' },
        { term: 'Capacidade de taxa de fusão', definition: 'A quantidade prática de filamento que um hotend pode derreter consistentemente mantendo a qualidade de impressão.' },
        { term: 'Largura da linha', definition: 'A largura de um cordão extrudado no fatiador, geralmente ligeiramente maior que o diâmetro do bocal.' },
        { term: 'Altura da camada', definition: 'A espessura vertical de cada camada impressa; um multiplicador direto na demanda de fluxo.' },
        { term: 'Reserva de fluxo', definition: 'A diferença entre a capacidade do hotend e o fluxo atualmente solicitado.' },
      ],
    },
    {
      type: 'summary',
      title: 'Fluxo de trabalho prático da vazão',
      items: [
        'Calcule o fluxo solicitado antes de aumentar a velocidade.',
        'Mantenha os perfis de produção abaixo da zona crítica a menos que validados por testes.',
        'Use os presets de hotend como constantes de planejamento e depois refine com calibração específica do material.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
