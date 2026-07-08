import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { RainbowFilamentGradientCalculatorUI } from '../ui';

export const content: ToolLocaleContent<RainbowFilamentGradientCalculatorUI> = {
  slug: 'calculadora-transicao-filamento-arco-iris',
  title: 'Calculadora de Comprimento de Transição de Filamento Arco Íris para Impressões 3D',
  description: 'Estima os ciclos de cor do filamento arco-íris, o uso do carretel e onde as transições de gradiente aparecerão ao longo da altura Z de uma impressão 3D fatiada.',
  ui: {
    unitMetric: 'Métrico',
    unitImperial: 'US',
    cycleLength: 'Comprimento do ciclo de cor',
    partWeight: 'Peso da peça fatiada',
    density: 'Densidade',
    diameter: 'Diâmetro do filamento',
    partHeight: 'Altura Z impressa',
    startOffset: 'Deslocamento inicial no carretel',
    presets: 'Predefinições de material',
    pla: 'PLA arco-íris',
    petg: 'Mistura PETG',
    silk: 'Seda multicolor',
    usedFilament: 'Filamento usado',
    cyclesInPart: 'Ciclos na peça',
    heightPerCycle: 'Z por ciclo',
    gramsPerCycle: 'Massa por ciclo',
    zMap: 'Mapa de transição Z',
    transitionBands: 'Bandas de transição visíveis',
    phaseWindow: 'Fase do ciclo',
    copySummary: 'Copiar resumo do gradiente',
    reset: 'Redefinir',
    emptyValue: '0',
    copyTemplate: 'Estimativa de filamento arco-íris',
    copyCycles: 'ciclos de cor',
    copyUsed: 'usado',
    copyZCycle: 'por ciclo',
  },
  seo: [
    { type: 'title', text: 'Como funciona uma calculadora de comprimento de transição de filamento arco-íris', level: 2 },
    { type: 'paragraph', html: 'Uma calculadora de comprimento de transição de filamento arco-íris conecta dois números do fatiador que geralmente são vistos separadamente: <strong>massa do modelo</strong> e <strong>altura impressa</strong>. O fatiador informa quantos gramas de material a peça consumirá, enquanto o fabricante do filamento ou uma medição manual informa quantos metros o carretel precisa para completar um ciclo de cor completo. Depois que esses valores estão no mesmo modelo de fluxo de material, você pode estimar quantos ciclos de cor aparecem no objeto e onde cada banda de cor se encontra no eixo Z.' },
    { type: 'paragraph', html: 'A conversão principal é física, não visual. Uma peça fatiada de 180 g não consome automaticamente o mesmo comprimento de filamento em todos os carretéis, porque o comprimento depende da densidade e do diâmetro. PLA, PETG, PLA seda, misturas preenchidas e misturas translúcidas podem ter densidades diferentes. Um filamento nominal de 1,75 mm também tem variação de tolerância, portanto uma calculadora deve permitir ajustar o diâmetro em vez de assumir o valor padrão para sempre.' },
    { type: 'stats', columns: 4, items: [
      { value: '1,75 mm', label: 'diâmetro comum de filamento FDM', icon: 'mdi:circle-slice-8' },
      { value: '1,24 g/cm3', label: 'densidade típica do PLA usada em estimativas', icon: 'mdi:flask' },
      { value: '30 m', label: 'exemplo de ciclo arco-íris completo', icon: 'mdi:palette' },
      { value: 'Eixo Z', label: 'onde o comprimento do ciclo se torna visível', icon: 'mdi:arrow-up-down' },
    ] },
    { type: 'tip', title: 'Meça um ciclo real antes de confiar na pré visualização', html: 'Os fabricantes geralmente descrevem o filamento arco-íris como de transição rápida, média ou longa, mas a entrada útil é a distância medida de uma cor voltando à mesma cor. Desenrole uma pequena amostra apenas se for seguro para o carretel, ou imprima uma torre de purga fina e recalcule o comprimento de filamento consumido a partir das estimativas do fatiador.' },

    { type: 'title', text: 'Por que o peso da peça prevê mudanças de cor melhor que o tempo de impressão', level: 2 },
    { type: 'paragraph', html: 'O tempo de impressão é um mau preditor do uso de cores num carretel arco-íris. Um vaso decorativo pode levar muitas horas em modo espiral enquanto consome pouco material, e um suporte mecânico denso pode consumir rapidamente uma grande quantidade de filamento. O carretel muda de cor de acordo com o <strong>comprimento do filamento puxado pela extrusora</strong>, não de acordo com os minutos decorridos, distância de deslocamento ou número de camadas.' },
    { type: 'paragraph', html: 'O peso do fatiador é útil porque já inclui paredes, preenchimento, camadas superiores e inferiores, suportes (se ativados), brims, saias e estruturas de purga. Esse peso pode ser convertido em volume dividindo pela densidade do material. O volume pode então ser dividido pela área da secção transversal do filamento para estimar o comprimento total do filamento. É por isso que o mesmo STL pode mostrar um comportamento de gradiente diferente quando você altera o preenchimento, o número de paredes, as configurações de suporte ou a escala.' },
    { type: 'table', headers: ['Alteração no fatiador', 'Efeito no uso do filamento', 'Efeito no gradiente arco-íris'], rows: [
      ['Mais preenchimento', 'Aumenta gramas e metros totais', 'Mais progresso do ciclo de cor na mesma altura Z'],
      ['Mais paredes', 'Aumenta o uso na maioria das camadas', 'Transições comprimem verticalmente e tornam-se mais frequentes'],
      ['Modelo mais alto com mesma massa', 'Metros semelhantes em mais altura Z', 'Transições distanciam-se mais'],
      ['Suportes ativados', 'Consome cores fora da peça visível', 'Fase visível pode deslocar-se em relação ao modelo sem suportes'],
      ['Brim ou jangada grandes', 'Consome filamento antes da primeira camada visível', 'Cor inicial avança no carretel'],
    ] },
    { type: 'diagnostic', variant: 'info', title: 'Use a estimativa do fatiador após as configurações finais', badge: 'Importante', html: 'Faça o cálculo depois de escolher a altura da camada, o número de paredes, o preenchimento, os suportes, o brim e a escala. Uma estimativa do ciclo de cor do carretel arco-íris feita antes da geração de suportes pode estar visivelmente errada porque o material de suporte consome parte da sequência de cores antes e durante o objeto.' },

    { type: 'title', text: 'Entendendo o comprimento do ciclo de cor em carretéis de filamento arco-íris', level: 2 },
    { type: 'paragraph', html: 'O comprimento do ciclo de cor é a distância de filamento necessária para a sequência se repetir. Num carretel arco-íris de seis cores, um ciclo pode percorrer vermelho, laranja, amarelo, verde, azul, violeta e depois voltar ao vermelho. O ciclo pode ser curto o suficiente para várias transições numa pequena figura, ou longo o suficiente para que uma impressão média mostre apenas uma mudança lenta. Uma <strong>calculadora de ciclo de cor para carretel arco-íris</strong> é mais útil quando este número é realista.' },
    { type: 'paragraph', html: 'Nem todos os filamentos de transição têm zonas de cor iguais. Alguns produtos misturam-se gradualmente com longos degradês, enquanto outros têm blocos mais fortes. A calculadora trata o ciclo completo como bandas de cor uniformemente distribuídas porque essa é a estimativa mais prática a partir apenas dos dados do fatiador. Se o seu carretel tiver secções desiguais, use o mapa Z como guia de fase e espere que a mistura visual real seja mais suave ou assimétrica.' },
    { type: 'comparative', columns: 3, items: [
      { title: 'Arco íris de ciclo curto', description: 'Ideal para miniaturas, ornamentos, vasos pequenos e placas de nome. Múltiplas mudanças de cor com menos material.', icon: 'mdi:weather-sunset-up', points: ['Transições visíveis rápidas', 'Pode parecer carregado em grandes superfícies planas'] },
      { title: 'Arco íris de ciclo médio', description: 'Uma escolha equilibrada para objetos de secretária e esculturas médias. Produz geralmente uma a três transições principais.', icon: 'mdi:palette-swatch', highlight: true, points: ['Previsível em impressões comuns', 'Bom para objetos de 100-300 g'] },
      { title: 'Arco íris de ciclo longo', description: 'Melhor para vasos altos, dragões grandes, lâmpadas e impressões de parede simples que precisam de gradientes lentos e suaves.', icon: 'mdi:palette-outline', points: ['Transição de cor suave', 'Modelos pequenos podem ficar de uma cor só'] },
    ] },
    { type: 'glossary', items: [
      { term: 'Ciclo de cor', definition: 'O comprimento de filamento necessário para a sequência completa de cores se repetir de uma cor inicial até a mesma cor.' },
      { term: 'Fase', definition: 'A posição atual dentro do ciclo de cor no momento em que a parte visível começa a ser impressa.' },
      { term: 'Banda de transição', definition: 'Uma região vertical do objeto impresso onde o segmento de cor estimado muda ao longo do eixo Z.' },
      { term: 'Deslocamento inicial', definition: 'Comprimento de filamento já consumido antes do início do modelo, incluindo impressões anteriores, purga, saia, brim ou corte manual.' },
    ] },

    { type: 'title', text: 'Como estimar a posição da transição de cor ao longo do eixo Z', level: 2 },
    { type: 'paragraph', html: 'O mapa Z é um estimador, não um simulador do fatiador. Ele assume que o consumo de material é distribuído proporcionalmente ao longo da altura impressa. Esse é um bom modelo de primeira ordem para muitas impressões em modo vaso, esculturas com secção transversal constante e objetos decorativos. Torna-se menos preciso quando o modelo tem uma base pesada, um centro oco, um topo denso ou grandes suportes que consomem material de forma desigual ao longo da altura.' },
    { type: 'paragraph', html: 'Para um modelo com secção transversal maioritariamente uniforme, dividir a altura impressa pelos ciclos de cor dá uma resposta intuitiva: se um objeto de 160 mm usa dois ciclos de cor completos, cada ciclo ocupa cerca de 80 mm de altura Z. Se usa apenas 0,4 ciclos, a impressão mostrará menos de metade da sequência arco-íris. Se usa 4 ciclos, as cores repetem-se frequentemente e podem criar um aspeto listrado em vez de um gradiente suave único.' },
    { type: 'list', icon: 'mdi:arrow-up-down', items: [
      'Use a altura Z impressa, não a altura total de deslocamento da máquina.',
      'Inclua o consumo de brim ou jangada como deslocamento inicial se esses recursos forem impressos antes do objeto.',
      'Para placas com vários objetos, calcule o peso fatiado combinado se os objetos forem impressos sequencialmente por camada.',
      'Para impressão sequencial, calcule cada objeto separadamente e avance o deslocamento inicial para o próximo objeto.',
      'Para uma torre de purga ou estrutura de resíduos multicolor, adicione a sua massa estimada ao deslocamento ou uso total dependendo de quando é impressa.',
    ] },
    { type: 'card', icon: 'mdi:layers-triple', title: 'Por que a base pode não corresponder à primeira cor prevista', html: 'Muitas impressoras purgam, desenham uma linha de preparação, imprimem uma saia ou um brim antes da primeira parede visível. Esses recursos consomem filamento e deslocam a fase inicial. Se a primeira camada visível tiver de ser de uma cor específica, meça ou estime esse consumo de pré-impressão e introduza-o como deslocamento inicial.' },

    { type: 'title', text: 'Densidade, diâmetro e por que duas impressões de 180 g podem usar comprimentos de filamento diferentes', level: 2 },
    { type: 'paragraph', html: 'A mesma massa pode representar diferentes comprimentos de filamento porque a densidade altera o volume por grama. O PLA é frequentemente estimado em torno de 1,24 g/cm3, o PETG em torno de 1,27 g/cm3, e algumas misturas de seda ou preenchidas podem diferir o suficiente para deslocar transições em vários milímetros em impressões altas.' },
    { type: 'paragraph', html: 'Nem todos os filamentos de transição têm zonas de cor iguais. A calculadora trata o ciclo completo como bandas de cor uniformemente distribuídas. Se o seu carretel tiver secções desiguais, use o mapa Z como guia.' },
    { type: 'table', headers: ['Família de material', 'Densidade de planeamento', 'Nota de planeamento do gradiente'], rows: [
      ['PLA arco-íris', '1,24 g/cm3', 'Boa predefinição para a maioria dos carretéis arco-íris padrão'],
      ['Seda PLA', '1,18-1,24 g/cm3', 'Pigmentos e aditivos variam; verifique os dados da marca quando disponíveis'],
      ['PETG multicolor', '1,25-1,29 g/cm3', 'Ligeiramente mais denso, então os mesmos gramas podem usar menos comprimento'],
      ['PLA preenchido', 'Varia amplamente', 'Aditivos de madeira, metal, pedra ou glitter podem alterar a estimativa'],
    ] },
    { type: 'proscons', title: 'Usar o peso do fatiador como entrada principal', items: [
      { pro: 'Inclui configurações de impressão reais como paredes, preenchimento, suportes e escala.', con: 'Depende de o perfil de densidade do fatiador ser razoavelmente preciso.' },
      { pro: 'É mais rápido do que somar manualmente os movimentos de extrusão do G-code.', con: 'Não revela a distribuição desigual de material em cada camada.' },
      { pro: 'Funciona com diferentes modelos e fatiadores com entrada de dados mínima.', con: 'Linhas de preparação, purga e inícios falhados devem ser contabilizados separadamente.' },
    ] },

    { type: 'title', text: 'Como usar a calculadora para uma impressão real de filamento arco-íris', level: 2 },
    { type: 'paragraph', html: 'Comece por fatiar o modelo com as configurações finais. Copie o peso estimado do filamento do fatiador, depois introduza a densidade do material e o diâmetro do filamento. Introduza o comprimento do ciclo de cor medido ou anunciado. Finalmente, introduza a altura Z impressa do modelo. A calculadora devolve o filamento usado, o número de ciclos na peça, gramas por ciclo de cor completo e a distância Z estimada por ciclo.' },
    { type: 'list', icon: 'mdi:check-circle', items: [
      'Se os ciclos na peça forem inferiores a 0,25, espere uma mudança de cor subtil em vez de um objeto arco-íris.',
      'Se os ciclos na peça forem cerca de 1,0, o modelo pode mostrar uma varredura completa através da paleta do carretel.',
      'Se os ciclos na peça estiverem entre 2,0 e 4,0, o objeto mostrará bandas de cor repetidas.',
      'Se Z por ciclo for maior que a altura do modelo, aumente a escala, adicione massa ou escolha um carretel de transição mais rápida.',
      'Se Z por ciclo for muito pequeno, reduza o preenchimento ou escolha um carretel de transição mais longa para gradientes mais suaves.',
    ] },
    { type: 'summary', title: 'Regra rápida de planeamento', items: [
      'Mais gramas na mesma altura comprimem o arco-íris verticalmente.',
      'Mais altura com os mesmos gramas estica o gradiente.',
      'Um comprimento de ciclo de cor mais curto cria mais transições.',
      'O deslocamento inicial controla qual parte do arco-íris aparece primeiro.',
    ] },
    { type: 'message', title: 'Para peças de exposição', ariaLabel: 'Conselho de planeamento para peças de exposição', html: 'Quando o limite de cor deve cair numa característica específica, imprima uma pequena coluna de teste vertical com o mesmo perfil do fatiador. Compare as alturas das bandas medidas com a estimativa e ajuste o comprimento do ciclo ou o deslocamento inicial antes de se comprometer com a impressão completa.' },

    { type: 'title', text: 'Perguntas frequentes sobre planeamento de cores em carretéis arco-íris', level: 2 },
    { type: 'paragraph', html: '<strong>Quanto filamento arco-íris preciso para um ciclo de cor completo?</strong> Multiplique o comprimento do ciclo pelos gramas por metro para o seu diâmetro e densidade de filamento. Para PLA padrão de 1,75 mm, um metro equivale a aproximadamente 3 g, portanto um ciclo de 30 m equivale a cerca de 90 g. A calculadora realiza esta conversão diretamente porque a densidade e o diâmetro reais alteram a resposta.' },
    { type: 'paragraph', html: '<strong>Por que a minha impressão ficou maioritariamente de uma cor?</strong> A peça provavelmente usou menos do que uma fração significativa do ciclo do carretel. Modelos pequenos, baixo preenchimento e filamento arco-íris de transição muito longa podem permanecer dentro de uma ou duas cores vizinhas. Aumentar a escala do modelo, imprimir vários objetos ao mesmo tempo, aumentar as paredes ou escolher um carretel de ciclo mais rápido pode tornar as transições mais visíveis.' },
    { type: 'paragraph', html: '<strong>Posso forçar uma cor específica no topo do modelo?</strong> Pode estimá-la com o deslocamento inicial, mas a colocação exata requer conhecer a fase atual do carretel. Se o topo precisar de ser azul, por exemplo, pode ser necessário avançar o filamento imprimindo um objeto de purga, começando a partir de uma cor visível conhecida ou escolhendo uma escala de modelo diferente.' },
    { type: 'diagnostic', variant: 'warning', title: 'Grandes alterações geométricas reduzem a precisão do mapa Z', badge: 'Forma do modelo', html: 'Um pedestal pesado e uma estátua superior fina podem consumir a maior parte do material perto da base, portanto as transições reais agrupar-se-ão mais abaixo do que uma estimativa Z proporcional sugere. Para esses modelos, use a calculadora para a contagem total de ciclos e depois inspecione a pré-visualização de camadas do fatiador para entender onde o volume de extrusão está concentrado.' },
  ],
  faq: [
    {
      question: 'O que é o comprimento de transição do filamento arco-íris?',
      answer: 'É a quantidade de filamento, geralmente medida em metros ou pés, necessária para o carretel percorrer uma sequência completa de cores e voltar à cor inicial.',
    },
    {
      question: 'Por que a calculadora pede o peso da peça em vez do tempo de impressão?',
      answer: 'As mudanças de cor dependem do comprimento do filamento consumido pela extrusora. O peso do fatiador pode ser convertido em volume e depois em comprimento de filamento, enquanto o tempo de impressão não descreve diretamente o uso do material.',
    },
    {
      question: 'Quão preciso é o mapa de transição Z?',
      answer: 'É uma estimativa de planeamento. É mais preciso para modelos com distribuição de material bastante uniforme ao longo da altura e menos preciso para formas com base densa, secções ocas, suportes ou grandes estruturas de purga.',
    },
    {
      question: 'Posso usar isto para filamento arco-íris de seda PLA ou PETG?',
      answer: 'Sim. Escolha uma predefinição de material ou introduza a densidade da ficha técnica do carretel. A densidade altera o comprimento estimado do filamento e, portanto, o número previsto de ciclos de cor.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Fatie o modelo', text: 'Use as configurações finais do fatiador e copie o peso estimado da peça.' },
    { name: 'Introduza os dados do carretel', text: 'Defina o comprimento do ciclo de cor, a densidade, o diâmetro do filamento e qualquer deslocamento inicial.' },
    { name: 'Leia o mapa Z', text: 'Use os ciclos, Z por ciclo e as bandas visíveis para decidir se o gradiente será subtil, completo ou repetido.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Calculadora de Comprimento de Transição de Filamento Arco-Íris',
      description: 'Estima o uso do ciclo de cor do filamento arco-íris e as posições de transição ao longo do eixo Z de uma impressão 3D.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'O que é o comprimento de transição do filamento arco-íris?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'É a quantidade de filamento necessária para o carretel percorrer uma sequência completa de cores e voltar à cor inicial.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Calculadora de Comprimento de Transição de Filamento Arco-Íris para Impressões 3D',
      description: 'Estima os ciclos de cor do filamento arco-íris, o uso do carretel e onde as transições de gradiente aparecerão ao longo da altura Z de uma impressão 3D fatiada.',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Fatie o modelo', text: 'Use as configurações finais do fatiador e copie o peso estimado da peça.' },
        { '@type': 'HowToStep', position: 2, name: 'Introduza os dados do carretel', text: 'Defina o comprimento do ciclo de cor, a densidade, o diâmetro do filamento e qualquer deslocamento inicial.' },
        { '@type': 'HowToStep', position: 3, name: 'Leia o mapa Z', text: 'Use os ciclos, Z por ciclo e as bandas visíveis para decidir se o gradiente será subtil, completo ou repetido.' }
      ],
    },
  ],
};
