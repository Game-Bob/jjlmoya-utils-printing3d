import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WarpingRiskSimulatorUI } from '../ui';

const slug = 'simulador-risco-warping-impressao-3d';
const title = 'Simulador de Risco de Warping para Impressão 3D';
const description = 'Estime o levantamento da primeira camada e o risco de warping a partir da contração do material, área de pegada, diagonal mais longa, temperatura da mesa, temperatura ambiente e condições do gabinete.';

const faqData = [
  {
    question: 'Por que a diagonal mais longa afeta o warping mais do que a área de pegada?',
    answer: 'A diagonal mais longa representa o maior caminho de contração contínua. Uma peça longa pode acumular contração linear suficiente para levantar cantos mesmo que a área total de contato pareça grande.',
  },
  {
    question: 'Este simulador garante que minha impressão não vai empenar?',
    answer: 'Não. É uma estimativa de risco. Filamento úmido, mesas sujas, altura da primeira camada, correntes de ar, geometria da peça e escolhas de resfriamento do fatiador podem alterar o resultado.',
  },
  {
    question: 'Quais materiais mais precisam de um gabinete fechado?',
    answer: 'ABS, ASA, Nylon e PC são os mais sensíveis ao gabinete neste modelo porque combinam temperaturas de processamento mais altas, contração mais forte e maior tensão de resfriamento.',
  },
  {
    question: 'Como a largura do brim é estimada?',
    answer: 'O simulador começa com cinco por cento da diagonal mais longa e a escala com base no risco calculado, então ajusta o resultado para valores práticos do fatiador.',
  },
];

const howToData = [
  { name: 'Escolha o material', text: 'Selecione PLA, PETG, ABS, ASA, Nylon, PC ou TPU para que o simulador aplique uma classe de contração.' },
  { name: 'Insira a pegada e a diagonal', text: 'Use a área da superfície que toca a mesa e a distância de canto a canto mais longa da peça.' },
  { name: 'Configure o ambiente térmico', text: 'Insira a temperatura da mesa e ambiente, e indique se a impressora tem um gabinete fechado.' },
  { name: 'Copie as configurações do fatiador', text: 'Use o brim sugerido, adesão, resfriamento e configurações do gabinete como perfil inicial.' },
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

export const content: ToolLocaleContent<WarpingRiskSimulatorUI> = {
  slug,
  title,
  description,
  ui: {
    unitSystemLabel: 'Sistema de unidades',
    unitMetric: 'Métrico',
    unitImperial: 'Imperial',
    unitCelsius: '°C',
    unitFahrenheit: '°F',
    unitMillimeter: 'mm',
    unitInch: 'pol',
    noBrim: '0',
    material: 'Material',
    footprintArea: 'Área de pegada',
    footprintHelp: 'Área que realmente toca a mesa de impressão, não a superfície total do modelo.',
    diagonal: 'Diagonal mais longa',
    diagonalHelp: 'Distância de canto a canto mais longa da primeira camada. Este é o principal vetor de tensão térmica.',
    bedTemperature: 'Temperatura da mesa',
    bedTemperatureWarning: 'Aviso de temperatura',
    ambientTemperature: 'Temperatura ambiente',
    chamber: 'Gabinete fechado',
    chamberOn: 'Fechado ou com proteção ativa',
    chamberOff: 'Impressora aberta',
    riskLow: 'Baixo',
    riskMedium: 'Médio',
    riskHigh: 'Alto',
    riskCritical: 'Crítico',
    riskIndex: 'Índice de risco',
    thermalIndex: 'Índice de tensão térmica',
    deltaT: 'Delta T',
    brimRecommendation: 'Recomendação de brim',
    adhesionDiagnosis: 'Diagnóstico de adesão',
    adhesionStrength: 'Escala de adesão',
    criticalWarnings: 'Avisos críticos',
    whyDiagonalMatters: 'Por que a diagonal importa',
    recommendedSettings: 'Configuração recomendada do fatiador',
    copySettings: 'Copiar configurações',
    copied: 'Copiado',
    simulatorNotice: 'Isto é uma estimativa de risco, não uma garantia de sucesso. Umidade do filamento, contaminação da mesa, Z offset, correntes de ar e modificações de resfriamento permanecem variáveis externas.',
    warnings: {
      openTechnicalMaterial: '{material} sem gabinete fechado é uma condição grave de warping.',
      bedTemperatureHigh: 'A temperatura da mesa para {material} está acima da faixa recomendada de {min}-{max} {unit}. Espere amolecimento, pé de elefante ou artefatos de adesão.',
      bedTemperatureLow: 'A temperatura da mesa para {material} está abaixo da faixa recomendada de {min}-{max} {unit}. A aderência da primeira camada pode ser muito fraca para esta geometria.',
      narrowFootprint: 'A pegada é estreita em comparação com a diagonal, então o levantamento dos cantos pode se acumular rapidamente.',
      highDeltaT: 'A diferença entre a temperatura da mesa e a ambiente é muito alta; controle o fluxo de ar e a velocidade de resfriamento.',
    },
    diagnosis: {
      critical: 'O brim é obrigatório. Use uma superfície adesiva dedicada e evite imprimir este material ao ar livre.',
      highEnclosed: 'Brim largo e adesivo são fortemente recomendados.',
      highOpen: 'Use brim, adesivo e um gabinete fechado antes de começar.',
      mediumEasyMaterial: 'Use uma superfície PEI limpa; brim é opcional para cantos afiados.',
      medium: 'Use brim ou mouse ears nos cantos e verifique a adesão à mesa.',
      low: 'Seguro em condições normais de primeira camada.',
    },
    adhesionOptions: {
      low: ['PEI limpo ou folha texturizada: aderência normal, remoção mais fácil.'],
      medium: ['Bastão de cola ou camada de liberação PVA: aderência extra leve e liberação mais segura de PETG.', 'Mouse ears: aderência localizada para cantos sem brim completo.'],
      high: ['Brim largo mais bastão de cola: amplo suporte mecânico com limpeza moderada.', 'Magigoo ou adesivo similar: aderência mais forte para ABS, ASA, PETG e variantes de Nylon.'],
      criticalDefault: ['Brim de largura total: pegada máxima da primeira camada.', 'Adesivo de alta resistência: use PEI mais um adesivo de alta resistência.', 'Gabinete fechado: necessário para que o adesivo funcione de forma consistente.'],
      criticalTechnical: ['Brim de largura total: pegada máxima da primeira camada.', 'Adesivo de alta resistência: use um adesivo específico para Nylon ou PC.', 'Gabinete fechado: necessário para que o adesivo funcione de forma consistente.'],
    },
    slicerSettings: {
      brimWidth: 'Largura do brim: {value}',
      bedAdhesion: 'Adesão à mesa: {value}',
      lowAdhesion: 'PEI limpo ou folha texturizada',
      highAdhesion: 'PEI mais bastão de cola, Magigoo ou adesivo específico',
      cooling: 'Resfriamento: {value}',
      normalCooling: 'Resfriamento normal da peça após a camada 3',
      technicalCooling: 'Resfriamento da peça desligado nas primeiras 5-8 camadas',
      enclosedChamber: 'Mantenha o gabinete fechado até a peça esfriar abaixo da faixa de transição vítrea',
      openChamber: 'Proteja a impressora de correntes de ar e fluxo de ar ambiente',
      skirtEnough: '0 mm, a saia é suficiente',
    },
    diagonalExplanation: 'A diagonal mais longa se comporta como o vetor de tensão principal: à medida que a peça esfria, a contração se acumula ao longo desse vão e carrega os cantos mesmo quando a área de pegada parece generosa.',
  },
  seo: [
    { type: 'title', text: 'Como estimar o risco de warping antes de fatiar uma impressão 3D', level: 2 },
    {
      type: 'paragraph',
      html: 'O warping não é apenas um problema de material e não é apenas um problema de adesão à mesa. Ele aparece quando uma camada impressa esfria, contrai e cria tensão interna suficiente para superar a aderência da primeira camada. Um pequeno suporte de ABS pode falhar porque o polímero encolhe fortemente; uma grande placa de PLA pode falhar porque a diagonal é longa o suficiente para acumular contração em uma ampla extensão. A pergunta útil não é simplesmente <strong>este material vai empenar?</strong> mas <strong>esta geometria e ambiente térmico criam mais força de tração do que a mesa pode resistir?</strong>',
    },
    {
      type: 'paragraph',
      html: 'Este simulador usa um Índice de Tensão Térmica heurístico: <strong>fator de contração do material vezes diagonal mais longa vezes diferença de temperatura mesa-ambiente, dividido pela área de pegada</strong>. A fórmula é intencionalmente prática. Não pretende ser uma análise de elementos finitos, mas combina as variáveis que os operadores podem medir antes de imprimir: família de material, área de contato, vão linear mais longo, temperatura da mesa, temperatura ambiente e se a impressora está fechada.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Use o resultado como um sinal preventivo',
      badge: 'Estimativa',
      html: 'Uma pontuação baixa significa que a impressão dificilmente levantará se a primeira camada estiver limpa e bem ajustada. Uma pontuação alta ou crítica significa que o perfil do fatiador deve ser alterado antes de imprimir: brim mais largo, adesivo, menos resfriamento, proteção contra correntes de ar ou um material diferente. O simulador não pode ver filamento úmido, PEI oleoso, um bico muito distante da mesa ou uma peça com pequenos pontos de contato nos cantos.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '5%', label: 'largura inicial do brim como fração da diagonal mais longa', icon: 'mdi:ruler' },
        { value: '1,85x', label: 'multiplicador severo de gabinete aberto para ABS, ASA, Nylon e PC', icon: 'mdi:home-alert' },
        { value: '0-100', label: 'escala de risco mapeada a partir do Índice de Tensão Térmica', icon: 'mdi:gauge' },
      ],
    },
    { type: 'title', text: 'Por que a diagonal mais longa pode ser mais perigosa que a área', level: 2 },
    {
      type: 'paragraph',
      html: 'A área de pegada indica quanta superfície está disponível para adesão. A diagonal indica até onde a contração térmica pode se acumular antes de atingir um canto ou extremidade fina. Duas peças podem ter a mesma área e se comportar de maneira muito diferente: uma base quadrada compacta tem caminhos de contração curtos em todas as direções, enquanto uma tira longa e estreita concentra a contração ao longo de uma única linha e tenta descolar nas extremidades.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Pegada compacta',
          description: 'Uma base quadrada ou redonda distribui a contração através de muitos caminhos curtos. Os cantos estão mais próximos do centro, então o braço de alavanca para levantamento é menor.',
          icon: 'mdi:crop-square',
          points: ['Melhor distribuição de carga', 'Menor alavanca nos cantos', 'Brim geralmente opcional em materiais fáceis'],
        },
        {
          title: 'Pegada de diagonal longa',
          description: 'Um retângulo longo, moldura, lâmina, painel de gabinete ou trilho permite que a contração se acumule ao longo de uma direção dominante. As extremidades e cantos recebem a maior força de descolamento.',
          icon: 'mdi:vector-line',
          highlight: true,
          points: ['Maior tensão acumulada', 'Cantos levantam primeiro', 'Brim ou mouse ears geralmente necessários'],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Como medir a diagonal rapidamente',
      html: 'Na visualização do fatiador, olhe a primeira camada de cima e meça a distância de canto a canto mais longa da parte que toca a mesa. Para uma pegada retangular, use a diagonal do retângulo, não apenas o comprimento X ou Y. Para uma peça irregular, use o vão reto mais longo entre dois pontos externos.',
    },
    {
      type: 'table',
      headers: ['Padrão de geometria', 'Sintoma típico', 'Ação preventiva'],
      rows: [
        ['Trilho longo e fino', 'Extremidades levantam enquanto o centro permanece preso', 'Use brim ou mouse ears em ambas as extremidades'],
        ['Grande painel plano', 'Cantos encurvam gradualmente para cima', 'Use gabinete fechado, resfriamento mais lento e adesivo'],
        ['Peça pequena e alta', 'Base permanece presa mas a torre balança', 'Warping não é o principal risco; melhore a estabilidade'],
        ['Moldura aberta', 'Cantos internos puxam para dentro', 'Adicione brim, aumente a largura da primeira camada, reduza o ventilador'],
      ],
    },
    { type: 'title', text: 'Classes de contração de material usadas pelo simulador', level: 2 },
    {
      type: 'paragraph',
      html: 'Diferentes termoplásticos contraem em diferentes quantidades ao resfriar da temperatura de extrusão para a temperatura ambiente. PLA e TPU são geralmente tolerantes porque imprimem em temperaturas mais baixas e geram menos tensão de resfriamento. O PETG fica no meio: adere fortemente mas ainda pode puxar cantos afiados. ABS, ASA, Nylon e PC são tratados como materiais técnicos de alto risco porque combinam temperaturas de extrusão mais altas, contração mais forte e uma maior necessidade de um gabinete quente e estável.',
    },
    {
      type: 'table',
      headers: ['Material', 'Classe de contração', 'Estratégia comum de mesa', 'Sensibilidade ao gabinete'],
      rows: [
        ['PLA', 'Baixa', 'PEI limpo, mesa moderada', 'Baixa'],
        ['TPU', 'Baixa', 'Folha limpa, evitar aperto excessivo', 'Baixa'],
        ['PETG', 'Média', 'PEI texturizado ou camada de liberação', 'Média'],
        ['ABS', 'Alta', 'PEI mais adesivo ou slurry de ABS quando apropriado', 'Muito alta'],
        ['ASA', 'Alta', 'PEI mais adesivo, resfriamento controlado', 'Muito alta'],
        ['Nylon', 'Alta', 'Adesivo específico para material, filamento seco', 'Muito alta'],
        ['PC', 'Alta', 'Mesa de alta temperatura e adesivo', 'Muito alta'],
      ],
    },
    {
      type: 'proscons',
      title: 'Trocar de material em vez de combater o warping',
      items: [
        { pro: 'Mudar de ABS para ASA pode melhorar a durabilidade externa mantendo comportamento térmico semelhante.', con: 'ASA ainda precisa de disciplina de gabinete e pode empenar em peças longas.' },
        { pro: 'Mudar de ABS para PETG reduz a contração e geralmente é suficiente para suportes e carcaças.', con: 'PETG tem menor resistência ao calor e rigidez diferente do ABS ou PC.' },
        { pro: 'Nylon com carga de fibra pode reduzir alguns caminhos de contração e melhorar a rigidez.', con: 'Requer secagem, bicos resistentes à abrasão e forte controle de adesão.' },
      ],
    },
    { type: 'title', text: 'Delta T: por que temperatura da mesa e ambiente são importantes', level: 2 },
    {
      type: 'paragraph',
      html: 'O simulador usa <strong>Delta T</strong> como a temperatura da mesa menos a temperatura ambiente. Não é o mesmo que a temperatura do bico, mas é um indicador útil do gradiente térmico que a parte inferior da peça experimenta. Uma mesa quente reduz a contração precoce na interface, mas uma sala muito fria ou fluxo de ar forte ainda podem extrair calor das camadas superiores e criar um gradiente de tensão entre a base ancorada e o corpo em resfriamento da peça.',
    },
    {
      type: 'paragraph',
      html: 'Para PLA, um Delta T moderado pode ser inofensivo porque o material contrai menos agressivamente. Para ABS, ASA, Nylon e PC, a mesma geometria na mesma temperatura de mesa pode falhar se a impressora estiver exposta a correntes de ar. É por isso que o cálculo aplica um multiplicador severo quando esses materiais técnicos são impressos sem gabinete fechado.',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Impressora aberta com ABS, ASA, Nylon ou PC',
      badge: 'Condição crítica',
      html: 'Se o gabinete estiver aberto, a impressão fica exposta a resfriamento local, movimento de portas, fluxo de ar HVAC e mudanças rápidas de temperatura das camadas. A primeira camada pode parecer perfeita nos primeiros vinte minutos e ainda assim levantar mais tarde à medida que a peça acumula mais tensão de contração.',
    },
    {
      type: 'list',
      icon: 'mdi:thermometer',
      items: [
        'Um gabinete mais quente reduz a diferença de temperatura entre as novas camadas e as mais antigas.',
        'Um gabinete fechado também retarda o resfriamento após a impressão, o que reduz o descolamento súbito dos cantos.',
        'Protetores contra correntes de ar ajudam, mas não equivalem a um gabinete aquecido estável para PC ou Nylon.',
        'Aumentar apenas a temperatura da mesa pode melhorar a aderência, mas também pode aumentar o pé de elefante em materiais macios.',
      ],
    },
    { type: 'title', text: 'Como o Índice de Tensão Térmica é interpretado', level: 2 },
    {
      type: 'paragraph',
      html: 'O Índice de Tensão Térmica é uma pontuação relativa, não uma força medida em newtons. Ele aumenta quando o fator de contração, a diagonal ou o Delta T aumentam. Ele diminui quando a área de pegada aumenta porque mais área de contato pode distribuir a mesma carga de tração. O valor é então mapeado para uma porcentagem de risco de 0 a 100 para que diferentes configurações de impressão possam ser comparadas rapidamente.',
    },
    {
      type: 'table',
      headers: ['Faixa de risco', 'Significado', 'Resposta recomendada'],
      rows: [
        ['0-31%', 'Baixo', 'Limpe a mesa, verifique a primeira camada, sem adesão especial necessária para a maioria das formas'],
        ['32-57%', 'Médio', 'Use brim em cantos afiados, reduza o ventilador inicial, inspecione o contato da pegada'],
        ['58-81%', 'Alto', 'Use brim largo, adesivo, gabinete fechado se o material precisar, evite correntes de ar'],
        ['82-100%', 'Crítico', 'Trate como provável de empenar a menos que geometria, material ou ambiente mudem'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:calculator-variant',
      title: 'Por que dividir pela área de pegada?',
      html: 'Uma pegada maior dá à mesa mais oportunidade de resistir à força de descolamento. O modelo recompensa peças com contato amplo e contínuo e penaliza bases estreitas, pés pequenos e peças longas que têm apenas uma tira fina tocando a superfície.',
    },
    { type: 'title', text: 'Largura do brim, mouse ears e escolhas de adesivo', level: 2 },
    {
      type: 'paragraph',
      html: 'A recomendação de brim começa em <strong>Diagonal x 0,05</strong>. Uma diagonal de 180 mm começa portanto perto de 9 mm antes da escala de risco. Na prática, o brim não deve ser escolhido apenas pelo material. Um cubo curto de PLA pode não precisar de brim, enquanto uma espada, placa ou trilho longo de PLA pode se beneficiar de um brim modesto porque a diagonal é o caminho de tensão dominante.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: 'Brim', description: 'Melhor escolha versátil para aumentar o contato da primeira camada em toda a peça.', icon: 'mdi:border-outside', points: ['Fácil de remover em PLA', 'Muito útil em cantos ABS'] },
        { title: 'Mouse ears', description: 'Almofadas circulares localizadas colocadas em cantos ou extremidades finas onde o levantamento começa.', icon: 'mdi:circle-outline', points: ['Menos limpeza', 'Bom para trilhos e molduras'] },
        { title: 'Adesivo', description: 'Melhora a aderência química ou mecânica entre o polímero e a superfície de impressão.', icon: 'mdi:water-plus', points: ['Útil para Nylon e PC', 'Escolha específica da superfície é importante'] },
      ],
    },
    {
      type: 'tip',
      title: 'Não faça do brim a única solução',
      html: 'Se o simulador relatar risco crítico, um brim mais largo pode atrasar a falha mas não eliminar a tensão subjacente. Combine brim com gabinete fechado, resfriamento inicial mais lento, uma mesa mais limpa e mudanças de geometria como cantos arredondados ou peças divididas.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Warping', definition: 'Deformação para cima causada pela contração de resfriamento superando a adesão à mesa.' },
        { term: 'Área de pegada', definition: 'A área do modelo que toca a mesa de impressão na primeira camada.' },
        { term: 'Diagonal mais longa', definition: 'O vão reto mais longo através da forma de contato da primeira camada.' },
        { term: 'Delta T', definition: 'A diferença de temperatura entre a mesa e o ar ambiente da sala.' },
        { term: 'Brim', definition: 'Voltas extras do perímetro da primeira camada impressas ao redor da peça para aumentar a adesão.' },
      ],
    },
    { type: 'title', text: 'Configurações práticas do fatiador para peças de alto risco', level: 2 },
    {
      type: 'list',
      icon: 'mdi:tune',
      items: [
        'Aumente a largura da linha da primeira camada para criar mais contato, mas evite compressão Z excessiva que cause cristas.',
        'Use uma primeira camada mais lenta para que o polímero se ligue à mesa antes que as camadas posteriores puxem.',
        'Desative ou reduza o resfriamento da peça para ABS, ASA, Nylon e PC durante as primeiras camadas.',
        'Adicione um brim largo o suficiente para ultrapassar cantos afiados e extremidades estreitas.',
        'Evite colocar peças grandes de material técnico perto de portas do gabinete, aberturas de ventilação ou painéis laterais frios.',
      ],
    },
    {
      type: 'message',
      title: 'Mudanças de geometria que reduzem o risco',
      ariaLabel: 'Ideias de mitigação geométrica',
      html: 'Arredonde cantos afiados, divida painéis muito longos em seções mais curtas, adicione abas temporárias a extremidades finas, oriente a peça para que o caminho de tensão mais longo seja mais curto, ou adicione almofadas de sacrifício que podem ser cortadas após a impressão. Essas mudanças geralmente funcionam melhor do que simplesmente aumentar a temperatura da mesa.',
    },
    {
      type: 'summary',
      title: 'Lista de verificação rápida',
      items: [
        'Material de alta contração mais gabinete aberto é o sinal de aviso mais forte.',
        'Diagonal longa mais pegada pequena significa que cantos e extremidades merecem brim ou mouse ears.',
        'Temperatura alta da mesa não anula uma sala fria ou ambiente com correntes de ar.',
        'O resultado é uma estimativa de planejamento; a calibração da primeira camada e a condição do filamento ainda decidem a impressão final.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
