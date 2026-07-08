import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ChemicalSmoothingTimeSimulatorUI } from '../ui';

export const content: ToolLocaleContent<ChemicalSmoothingTimeSimulatorUI> = {
  slug: 'calculadora-tempo-alisamento-quimico-abs-pvb',
  title: 'Calculadora de Tempo de Alisamento Químico com Vapor de Acetona para ABS e Álcool Isopropílico para PVB',
  description: 'Estime o tempo conservador de exposição ao vapor e secagem para o alisamento químico de ABS com acetona ou de PVB com álcool isopropílico a partir do volume da câmara, temperatura, volume da peça e detalhe superficial.',
  ui: {
    unitSystemLabel: 'Unidades',
    metricLabel: 'Métrico',
    imperialLabel: 'US',
    materialLabel: 'Material',
    absLabel: 'ABS + acetona',
    pvbLabel: 'PVB + álcool isopropílico',
    chamberVolumeLabel: 'Câmara de vapor',
    chamberTemperatureLabel: 'Temp. da câmara',
    partVolumeLabel: 'Volume da peça',
    surfaceDetailLabel: 'Detalhe superficial',
    fineDetailLabel: 'Detalhes finos',
    balancedDetailLabel: 'Equilibrado',
    coarseDetailLabel: 'Camadas grossas',
    presetsLabel: 'Predefinições',
    miniPresetLabel: 'Mini',
    displayPresetLabel: 'Peça de exposição',
    enclosurePresetLabel: 'Gabinete grande',
    exposureLabel: 'Exposição estimada',
    dryTimeLabel: 'Secagem pós-alisamento',
    firstTrialLabel: 'Primeiro teste',
    riskLabel: 'Risco de detalhe',
    vaporMapLabel: 'Intensidade do vapor',
    chamberUnitMetric: 'L',
    chamberUnitImperial: 'gal',
    temperatureUnitMetric: '°C',
    temperatureUnitImperial: '°F',
    partUnitMetric: 'cm³',
    partUnitImperial: 'in³',
    secondsUnit: 's',
    minutesUnit: 'min',
    hoursUnit: 'h',
    controlsAriaLabel: 'Entradas de alisamento químico',
    resultsAriaLabel: 'Resultados de alisamento químico',
    recommendationGentle: 'janela suave',
    recommendationStandard: 'observar atentamente',
    recommendationAggressive: 'risco alto de perda de detalhe',
    safetyNote: 'Use isto apenas como uma estimativa conservadora de planeamento. O vapor de solvente é inflamável e perigoso: trabalhe longe de fontes de ignição, use ventilação e EPI, e comece com uma curta exposição de teste.',
    copyButton: 'Copiar plano de alisamento',
    copiedButton: 'Copiado',
    copiedSummaryTemplate: 'Estimativa de alisamento químico: {minutes} min ({seconds} s) de exposição, primeiro teste aos {trialSeconds} s, secar durante cerca de {dryHours} h.',
  },
  seo: [
    { type: 'title', text: 'Como estimar o tempo de alisamento com vapor de acetona para ABS sem derreter os detalhes', level: 2 },
    {
      type: 'paragraph',
      html: 'O alisamento com vapor de acetona para ABS é um processo controlado de dissolução superficial. O vapor de acetona amolece a camada externa do ABS, permitindo que as marcas visíveis das camadas FDM se relaxem numa superfície mais brilhante. A janela útil é estreita: pouca exposição deixa as linhas de camada inalteradas, enquanto demasiada exposição arredonda os bordos, amolece o texto em relevo, fecha pequenos orifícios e pode fazer com que paredes finas cedam. Uma estimativa de tempo é portanto melhor tratada como uma <strong>janela de início para testes curtos</strong>, não como uma receita fixa.',
    },
    {
      type: 'paragraph',
      html: 'A calculadora utiliza cinco variáveis práticas que afetam fortemente a duração do alisamento: o par polímero-solvente, o volume da câmara, a temperatura da câmara, o volume da peça impressa e o nível de detalhe superficial. A temperatura é importante porque a pressão de vapor e a atividade do solvente aumentam rapidamente à medida que a câmara aquece. O tamanho da peça é importante porque peças maiores apresentam mais área superficial e massa térmica. O nível de detalhe é importante porque o dente de uma engrenagem miniatura, um logótipo ou uma patilha de encaixe podem ser arruinados por um tempo que parece perfeito num gabinete retangular simples.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '30-35%', label: 'primeiro teste sensato do tempo estimado' },
        { value: 'ABS/PVB', label: 'polímeros imprimíveis comuns para alisamento a vapor' },
        { value: 'horas', label: 'tempo de secagem antes de manusear ou montar' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'O alisamento a vapor é uma operação de acabamento, não um passo de calibração dimensional',
      html: 'Se uma peça impressa tiver de alojar um rolamento, rosca, vedante, encaixe de pressão ou inserto, mascare a área crítica ou valide o processo de alisamento numa cópia de sacrifício. O alisamento químico altera os bordos e pode modificar as tolerâncias funcionais.',
    },
    { type: 'title', text: 'ABS com acetona vs PVB com álcool isopropílico para alisamento a vapor', level: 2 },
    {
      type: 'paragraph',
      html: 'O ABS é geralmente alisado com acetona porque a acetona é um solvente eficaz para a superfície do acrilonitrilo butadieno estireno. O PVB, frequentemente vendido como filamento destinado a impressões transparentes ou brilhantes, é comumente alisado com álcool isopropílico. O objetivo visual é semelhante, mas o comportamento do processo é diferente. O ABS com acetona pode tornar-se brilhante e arredondado rapidamente, especialmente numa câmara quente. O PVB com álcool isopropílico é geralmente mais indulgente para o desenvolvimento gradual do brilho, mas ainda pode perder nitidez se exposto durante demasiado tempo.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'ABS com vapor de acetona',
          description: 'Ação de alisamento rápida e forte com alto risco de amolecer texto pequeno, cantos, pinos e paredes finas quando a câmara está quente.',
          points: ['Melhor para carcaças visíveis e adereços', 'Sensível à temperatura', 'Necessita de desgaseificação prolongada antes de uso em espaços fechados'],
        },
        {
          title: 'PVB com vapor de álcool isopropílico',
          description: 'Frequentemente escolhido para peças visuais brilhantes e impressões translúcidas onde se deseja uma resposta de alisamento mais lenta e controlável.',
          highlight: true,
          points: ['Útil para peças de exposição', 'Pode preservar melhor o detalhe com ciclos curtos', 'Secar completamente antes de polir ou embalar'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Material', 'Solvente típico', 'Caráter do processo', 'Modo de falha principal'],
      rows: [
        ['ABS', 'Acetona', 'Amolecimento superficial rápido e brilho intenso', 'Bordos arredondados, paredes finas deformadas, orifícios fechados'],
        ['PVB', 'Álcool isopropílico', 'Brilho mais gradual e redução de névoa', 'Superfície pegajosa, textura manchada, detalhe fino amolecido'],
        ['ASA', 'Acetona ou outros solventes', 'Família semelhante ao ABS mas dependente da formulação', 'Peças resistentes a UV ainda podem perder bordos nítidos'],
        ['PLA/PETG', 'Não adequado para esta calculadora', 'Solventes comuns não se comportam como o alisamento ABS/PVB', 'Acabamento fraco ou experimentação perigosa com solventes'],
      ],
    },
    {
      type: 'tip',
      title: 'Use a definição de material como um par solvente, não apenas como um nome de plástico',
      html: 'Selecione ABS quando o processo for alisamento com vapor de acetona e PVB quando for alisamento com vapor de álcool isopropílico. Diferentes misturas de filamento, aditivos, pigmentos e histórico de recozimento podem alterar a resposta real, por isso teste com o carreto exato usado para a impressão final.',
    },
    { type: 'title', text: 'Porque é que o volume da câmara altera a duração do alisamento químico', level: 2 },
    {
      type: 'paragraph',
      html: 'O volume da câmara afeta a rapidez com que a concentração de vapor se acumula e a uniformidade com que envolve a peça impressa. Um frasco pequeno pode tornar-se agressivo rapidamente porque uma pequena quantidade de solvente ocupa um pequeno espaço livre. Uma câmara maior geralmente precisa de mais tempo para atingir o mesmo ambiente de vapor eficaz, mas pode ser mais uniforme se a fonte de solvente estiver distribuída e a peça estiver elevada acima do contacto com o líquido. A calculadora aumenta o tempo de exposição suavemente à medida que o volume da câmara cresce, porque a relação é real mas não perfeitamente linear em configurações de acabamento domésticas.',
    },
    {
      type: 'paragraph',
      html: 'A uniformidade é tão importante quanto a concentração média. Uma peça colocada demasiado perto de um pano embebido em solvente, uma poça ou uma placa quente pode receber um ataque direcional: uma face torna-se brilhante e mole enquanto o lado oposto permanece mate. Uma câmara mais alta também pode criar gradientes, especialmente se o vapor se condensar na tampa e pingar. A interpretação mais segura de um tempo calculado é portanto um intervalo de inspeção programado: retire a peça, inspecione o brilho húmido e pare antes que as características nítidas comecem a fluir.',
    },
    {
      type: 'list',
      items: [
        'Eleve a peça num suporte resistente a solventes para que nunca toque no solvente líquido.',
        'Mantenha as fontes absorventes de solvente afastadas da superfície do modelo para evitar sobreexposição unilateral.',
        'Use uma câmara suficientemente grande para que o vapor possa circular em torno de todas as faces visíveis.',
        'Evite condensação a pingar da tampa; as gotas criam marcas, crateras e pontos brilhantes.',
        'Não aumente a quantidade de solvente indefinidamente para compensar uma câmara grande; a concentração e o risco de segurança aumentam juntos.',
      ],
    },
    {
      type: 'card',
      title: 'Uma câmara maior não é automaticamente mais segura',
      html: 'Volumes selados grandes podem conter mais vapor inflamável. Uma câmara maior pode atrasar o alisamento, mas também pode criar uma atmosfera perigosa maior. Use a menor câmara prática que dê à peça folga e exposição uniforme.',
    },
    { type: 'title', text: 'Temperatura, pressão de vapor e perda de detalhe', level: 2 },
    {
      type: 'paragraph',
      html: 'A temperatura é uma das entradas mais fortes porque a evaporação do solvente aumenta à medida que a câmara aquece. Alguns graus podem mudar o acabamento de um alisamento acetinado lento para um brilho rápido e arredondamento de bordos. O vapor de acetona quente à volta do ABS é especialmente implacável: a superfície pode passar de mate a aspeto húmido a amolecida num curto intervalo. A calculadora encurta o tempo de exposição à medida que a temperatura da câmara sobe e aumenta a pontuação de risco quando as temperaturas sobem acima de uma referência ambiente normal.',
    },
    {
      type: 'paragraph',
      html: 'O aquecimento ativo é onde muitos processos de alisamento de hobby se tornam inseguros. Os vapores de acetona e álcool isopropílico são inflamáveis, e aquecedores improvisados, interruptores, relés, faíscas, placas quentes e eletrónica mal selada podem criar um sério risco de incêndio. Se a temperatura for controlada, deve ser feita com equipamentos projetados para contextos de vapor perigoso, não com um aquecedor exposto dentro de um recipiente selado. Para a maioria dos utilizadores, o alisamento à temperatura ambiente com inspeções curtas é o fluxo de trabalho mais defensável.',
    },
    {
      type: 'table',
      headers: ['Condição da câmara', 'Comportamento esperado', 'Resposta prática'],
      rows: [
        ['Sala fresca abaixo de 18 °C', 'Ação lenta do vapor e brilho retardado', 'Use intervalos mais longos mas inspecione a condensação irregular'],
        ['Temperatura ambiente 20-25 °C', 'Base previsível para a maioria dos testes', 'Comece com a estimativa da calculadora e o primeiro teste'],
        ['Câmara quente 26-32 °C', 'Amolecimento mais rápido e maior risco de detalhe', 'Encurte os ciclos e evite peças funcionais delicadas'],
        ['Câmara quente ou com aquecimento ativo', 'Ambiente de vapor muito agressivo', 'Não improvise; o risco de incêndio e sobreexposição aumentam drasticamente'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Nunca use chama aberta ou elementos de aquecimento expostos',
      html: 'Os vapores de acetona e álcool isopropílico podem inflamar-se. Mantenha as câmaras de alisamento afastadas de chamas, faíscas, ferramentas quentes, interruptores que produzem arco, motores de escovas, aquecedores não classificados para serviço de vapor e manuseamento propenso a estática.',
    },
    { type: 'title', text: 'Volume da peça, área superficial e sensibilidade geométrica', level: 2 },
    {
      type: 'paragraph',
      html: 'A entrada designada por volume da peça é um indicador prático do tamanho geral da peça. Não é um substituto perfeito da área superficial, mas é fácil de estimar a partir das estatísticas do fatiador e geralmente indica se a impressão é um pequeno botão, uma figura de exposição ou um grande painel de gabinete. Peças maiores muitas vezes precisam de exposição mais longa para desenvolver um acabamento visual uniforme, mas também têm mais bordos, cantos e secções finas que podem mostrar absorção desigual do solvente.',
    },
    {
      type: 'paragraph',
      html: 'A geometria pode dominar o resultado. Um vaso cilíndrico liso e um suporte de treliça podem ter o mesmo volume mas uma tolerância ao alisamento completamente diferente. Nervuras finas, letras em relevo marcadas, pequenos orifícios, canais internos, caudas de andorinha e clipes amolecem mais rapidamente do que grandes superfícies planas. Quando a peça tem geometria crítica, use a definição de detalhe fino mesmo que as linhas de camada sejam visíveis, depois repita ciclos curtos em vez de tentar uma exposição longa.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Alisamento a vapor', definition: 'Um processo de acabamento onde o vapor de solvente amolece apenas a superfície externa de uma impressão de polímero.' },
        { term: 'Sobreexposição', definition: 'Um intervalo de alisamento suficientemente longo para arredondar detalhes, deformar paredes finas ou deixar uma superfície pegajosa.' },
        { term: 'Desgaseificação', definition: 'O período após o alisamento em que o solvente absorvido evapora da superfície amolecida.' },
        { term: 'Detalhe superficial', definition: 'Pequena geometria como texto, textura, orifícios, cristas, clipes e bordos afiados que podem perder-se durante o alisamento.' },
        { term: 'Prova de sacrifício', definition: 'Uma pequena impressão de teste feita do mesmo filamento e configurações para validar a resposta ao solvente antes de finalizar a peça real.' },
      ],
    },
    {
      type: 'summary',
      title: 'Regras de geometria para escolher o nível de detalhe',
      items: [
        'Use detalhe fino para texto, engrenagens, orifícios pequenos, encaixes de pressão, roscas ou paredes finas.',
        'Use equilibrado para peças decorativas com linhas de camada moderadas e sem ajustes apertados.',
        'Use camadas grossas apenas para formas simples onde bordos arredondados sejam aceitáveis.',
        'Divida modelos complexos em zonas mascaradas e não mascaradas quando apenas a carcaça exterior precisar de brilho.',
      ],
    },
    { type: 'title', text: 'Como ler os resultados da calculadora', level: 2 },
    {
      type: 'paragraph',
      html: 'O resultado de exposição é o tempo total de vapor estimado para uma primeira passagem conservadora. É mostrado em minutos e segundos porque as janelas de acabamento curtas são mais fáceis de gerir com um temporizador. O primeiro teste é deliberadamente mais curto, geralmente cerca de um terço da exposição calculada. Retirar a peça cedo permite verificar se a superfície está a começar a brilhar antes de a perda de detalhe se tornar permanente.',
    },
    {
      type: 'paragraph',
      html: 'O tempo de secagem estima quanto tempo a impressão deve repousar antes de manuseamento próximo, montagem, pintura, embalagem ou selagem. A secagem não é apenas sobre a superfície parecer seca. O solvente pode permanecer no polímero amolecido e continuar a afetar o ajuste, o odor, a aderência da tinta e a sensação mecânica. Peças de ABS alisadas com acetona geralmente precisam de desgaseificação mais longa do que peças de PVB alisadas com álcool isopropílico, especialmente quando a peça é espessa ou a exposição foi agressiva.',
    },
    {
      type: 'proscons',
      title: 'Uma exposição longa vs vários ciclos curtos',
      items: [
        { pro: 'Uma única exposição é mais rápida e fácil de programar.', con: 'Dá pouco aviso antes de os detalhes finos amolecerem.' },
        { pro: 'Ciclos curtos facilitam parar num acabamento acetinado ou semibrilhante.', con: 'Exigem mais manuseamento e abertura repetida da câmara.' },
        { pro: 'Múltiplas inspeções reduzem a chance de destruir uma impressão única.', con: 'O acabamento pode ser ligeiramente menos uniforme se a peça arrefecer ou secar entre ciclos.' },
      ],
    },
    {
      type: 'message',
      title: 'Melhor uso da estimativa',
      html: 'Programe um temporizador para o primeiro teste, inspecione a peça sob luz rasante, depois continue em incrementos curtos. Pare enquanto as linhas de camada ainda estiverem apenas visíveis; a superfície frequentemente continua a relaxar por um curto período após a remoção.',
    },
    { type: 'title', text: 'Fluxo de trabalho seguro para alisamento químico de ABS e PVB', level: 2 },
    {
      type: 'paragraph',
      html: 'Um fluxo de trabalho seguro começa antes de abrir o solvente. Imprima um pequeno provete com o mesmo filamento, altura de camada, número de paredes e configurações de arrefecimento. Limpe a peça final para que o pó e os óleos não fiquem presos sob a pele amolecida. Prepare um suporte não reativo, temporizador, luvas compatíveis com o solvente, proteção ocular, ventilação e um local onde a peça possa secar sem ser tocada. Mantenha os recipientes de solvente fechados quando não estiver a carregar ativamente a câmara.',
    },
    {
      type: 'list',
      items: [
        'Confirme que o filamento é realmente ABS ou PVB, não PLA, PETG, mistura de PC ou material reciclado desconhecido.',
        'Remova os suportes e lixe apenas antes do alisamento; lixar após o alisamento pode cortar o brilho de forma desigual.',
        'Masque orifícios, assentos de rolamentos, roscas e superfícies de contacto se as dimensões forem importantes.',
        'Comece com o tempo do primeiro teste, depois adicione intervalos curtos se o acabamento ainda estiver demasiado mate.',
        'Seque a peça numa área ventilada até o odor a solvente e a pegajosidade desaparecerem.',
        'Descarte os panos de solvente e materiais contaminados de acordo com as regras locais de resíduos perigosos.',
      ],
    },
    {
      type: 'tip',
      title: 'Não julgue o acabamento enquanto a superfície estiver húmida',
      html: 'Uma superfície de ABS ou PVB recém-exposta pode parecer mais brilhante do que estará após a secagem. Inspecione tanto o brilho como a geometria: se os cantos parecerem inchados ou o texto pequeno estiver a amolecer, pare mesmo que as linhas de camada ainda estejam fracamente visíveis.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'A ventilação faz parte do tempo de processo',
      html: 'A secagem pós-alisamento deve ocorrer onde os vapores não possam acumular-se. Uma peça colocada imediatamente numa gaveta, saco de envio, vitrina ou gabinete eletrónico pode reter odor e solvente por mais tempo do que o esperado.',
    },
    { type: 'title', text: 'Problemas comuns e ações corretivas', level: 2 },
    {
      type: 'table',
      headers: ['Sintoma', 'Causa provável', 'Próximo ajuste'],
      rows: [
        ['Linhas de camada ainda nítidas', 'Exposição demasiado curta ou câmara demasiado fria', 'Repita com incrementos curtos em vez de duplicar o tempo'],
        ['Bordos arredondados ou texto desfocado', 'Sobreexposição para o nível de detalhe', 'Use definição de detalhe fino, temperatura mais baixa ou masque as características'],
        ['Superfície pegajosa após secagem', 'Demasiado solvente absorvido ou ventilação insuficiente', 'Aumente o tempo de secagem e reduza a exposição futura'],
        ['Um lado mais brilhante que o outro', 'Fonte de vapor desigual ou peça demasiado perto do solvente', 'Eleve a peça, distribua a fonte, rode apenas entre ciclos'],
        ['Névoa branca ou manchas turvas', 'Condensação, humidade ou evaporação desigual', 'Reduza a saturação da câmara e evite gotas da tampa'],
      ],
    },
    {
      type: 'paragraph',
      html: 'Se uma peça ficar pegajosa, não tente repará-la adicionando mais vapor imediatamente. Mais solvente geralmente aprofunda a zona amolecida. Deixe a peça secar completamente, depois decida se um ciclo de seguimento muito breve vale o risco. Se os bordos já fluíram, a forma não pode ser restaurada pela secagem. Para peças críticas, a solução mais fiável é reimprimir com configurações de fatiador ajustadas e usar uma janela de acabamento mais curta.',
    },
    {
      type: 'card',
      title: 'Configurações do fatiador que reduzem o tempo de alisamento',
      html: 'Altura de camada mais baixa, extrusão estável, filamento seco, arrefecimento adequado e pressure advance bem ajustado reduzem a quantidade de trabalho químico necessário. O alisamento químico deve refinar uma impressão, não esconder ringing severo, lacunas, bolhas, textura de filamento húmido ou subextrusão.',
    },
    {
      type: 'summary',
      title: 'Lista de verificação prática de acabamento',
      items: [
        'Estime a exposição com o material, câmara, temperatura, tamanho da peça e nível de detalhe exatos.',
        'Execute um provete de sacrifício ou primeiro teste antes de comprometer a peça final.',
        'Use ciclos curtos quando o detalhe for importante e pare antes de a superfície perder nitidez.',
        'Permita tempo de secagem suficiente para que o odor a solvente, a pegajosidade e a moleza dimensional desapareçam.',
        'Trate o controlo de vapor inflamável como um requisito de segurança, não como uma conveniência opcional.',
      ],
    },
  ],
  faq: [
    {
      question: 'Quanto tempo deve o ABS permanecer em vapor de acetona?',
      answer: 'Não há um tempo universal porque o volume da câmara, a temperatura, a geometria da peça e a formulação do filamento são importantes. Use a estimativa da calculadora como ponto de partida, depois inspecione no tempo mais curto do primeiro teste antes de continuar.',
    },
    {
      question: 'O PVB pode ser alisado com vapor de álcool isopropílico?',
      answer: 'Sim, muitos filamentos de PVB são projetados para alisamento com álcool isopropílico. O processo é geralmente mais gradual que o ABS com acetona, mas a sobreexposição ainda pode tornar a superfície pegajosa ou borrar os detalhes finos.',
    },
    {
      question: 'Uma câmara mais quente reduz o tempo de alisamento?',
      answer: 'Sim. O vapor de solvente mais quente geralmente atua mais rápido, mas também aumenta a inflamabilidade e o risco de perda de detalhe. Evite aquecedores improvisados e mantenha o vapor afastado de fontes de ignição.',
    },
    {
      question: 'Quanto tempo deve secar uma peça alisada?',
      answer: 'Planeie horas, não minutos. O ABS alisado com acetona geralmente precisa de desgaseificação mais longa que o PVB alisado com álcool isopropílico, especialmente para peças espessas ou exposições agressivas.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Escolha o par material-solvente', text: 'Selecione ABS para alisamento com vapor de acetona ou PVB para alisamento com vapor de álcool isopropílico.' },
    { name: 'Introduza as condições da câmara', text: 'Adicione o volume da câmara de vapor e a temperatura da câmara usando unidades métricas ou US.' },
    { name: 'Descreva a peça', text: 'Introduza o volume aproximado da peça e escolha um nível de detalhe superficial que corresponda às características mais pequenas.' },
    { name: 'Use o primeiro teste', text: 'Inspecione a peça no tempo de teste mais curto antes de executar a exposição completa estimada.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Calculadora de Tempo de Alisamento Químico com Vapor de Acetona para ABS e Álcool Isopropílico para PVB',
      description: 'Estima o tempo de exposição ao vapor químico e secagem para o acabamento de ABS com acetona e PVB com álcool isopropílico.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Quanto tempo deve o ABS permanecer em vapor de acetona?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Use uma estimativa conservadora baseada no volume da câmara, temperatura, tamanho da peça e nível de detalhe, depois inspecione num tempo de primeiro teste mais curto.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Como estimar o tempo de alisamento químico para impressões de ABS ou PVB',
      step: [
        { '@type': 'HowToStep', text: 'Selecione ABS com acetona ou PVB com álcool isopropílico.' },
        { '@type': 'HowToStep', text: 'Introduza o volume e a temperatura da câmara.' },
        { '@type': 'HowToStep', text: 'Introduza o volume da peça e o nível de detalhe superficial.' },
        { '@type': 'HowToStep', text: 'Comece com o primeiro teste e continue apenas se o detalhe permanecer seguro.' },
      ],
    },
  ],
};
