import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { PowerSupplyEstimatorUI } from '../ui';

export const content: ToolLocaleContent<PowerSupplyEstimatorUI> = {
  slug: 'calculadora-dimensionamento-fonte-impressora-3d',
  title: 'Calculadora de Dimensionamento de Fonte para Impressora 3D: Hotends, Camas Aquecidas, Motores e Atualizações de 12V para 24V',
  description: 'Estime a potência e a corrente máxima da fonte para uma atualização de impressora 3D adicionando cama aquecida, cartucho do hotend, motores de passo, carga auxiliar e margem de segurança.',
  ui: {
    systemVoltageLabel: 'Tensão do sistema',
    bedPowerLabel: 'Cama aquecida',
    hotendPowerLabel: 'Cartucho do hotend',
    motorsLabel: 'Motores',
    motorPowerLabel: 'Por motor',
    auxiliaryPowerLabel: 'Carga auxiliar',
    safetyMarginLabel: 'Margem de segurança',
    totalLoadLabel: 'Carga direta',
    psuRequiredLabel: 'Fonte necessária',
    currentRequiredLabel: 'Corrente máxima',
    recommendedPsuLabel: 'fonte padrão mais próxima',
    utilizationLabel: 'carga sobre a potência escolhida',
    thermalMapLabel: 'Mapa de potência térmica',
    bedSegmentLabel: 'Cama',
    hotendSegmentLabel: 'Hotend',
    motorsSegmentLabel: 'Motores',
    auxiliarySegmentLabel: 'Aux.',
    headroomSegmentLabel: 'Folga',
    scenarioLabel: 'Predefinições',
    scenarioBedSlinger: 'Cama móvel',
    scenarioCoreXY: 'CoreXY',
    scenarioLargeFormat: 'Grande formato',
    copyButton: 'Copiar resumo',
    copiedButton: 'Copiado',
    controlsAriaLabel: 'Parâmetros da fonte',
    resultsAriaLabel: 'Resultados da fonte',
    copiedSummaryTemplate: 'Fonte da impressora 3D: {requiredWatts} W necessários, {currentAmps} A a {voltage} V, recomendado {recommendedWatts} W.',
    wattsUnit: 'W',
    ampsUnit: 'A',
    voltsUnit: 'V',
    percentUnit: '%',
    countUnit: 'x',
  },
  seo: [
    { type: 'title', text: 'Como Dimensionar uma Fonte de Impressora 3D Sem Adivinhar', level: 2 },
    {
      type: 'paragraph',
      html: 'Uma fonte de alimentação de impressora 3D é dimensionada a partir das cargas que podem estar ativas ao mesmo tempo: a cama aquecida, o cartucho aquecedor do hotend, os motores de passo, a placa controladora, ventoinhas, LEDs, sondas, relés do aquecedor da câmara e qualquer eletrónica auxiliar. A relação elétrica básica é simples: <strong>watts são iguais a volts vezes amperes</strong>. Uma impressora que precisa de 420 W num sistema de 24 V pode exigir cerca de 17,5 A antes de qualquer folga extra para arranque, perdas de regulação ou futuras expansões.',
    },
    {
      type: 'paragraph',
      html: 'O erro que causa muitas impressoras instáveis é usar o consumo médio de impressão em vez da carga máxima controlada. Durante uma impressão normal de PLA, a cama pode ciclar com potência parcial após atingir a temperatura, mas durante o aquecimento a cama e o hotend podem ambos funcionar a 100%. Se a fonte for dimensionada apenas a partir da leitura de uma tomada inteligente obtida a meio da impressão, pode parecer adequada quando na realidade está no limite durante o aquecimento, o uso com câmara ABS ou um ciclo de recuperação em ambiente frio.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: 'P = V x A', label: 'fórmula base de dimensionamento' },
        { value: '20-35%', label: 'folga prática típica' },
        { value: '24V', label: 'menos corrente que 12V para a mesma potência' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Não trate a potência da fonte como permissão para sobrecarregar conectores',
      html: 'Uma fonte de 500 W não torna cada terminal, pista de PCB, conector XT, ficha cilíndrica ou bloco de parafusos seguro para 500 W. A corrente deve ser verificada ao nível do fio e do conector, especialmente para camas aquecidas e aquecedores de câmara.',
    },
    { type: 'title', text: 'Que Cargas Devem Ser Incluídas num Cálculo de Potência da Fonte?', level: 2 },
    {
      type: 'paragraph',
      html: 'Para uma impressora FDM, a cama aquecida é geralmente a carga de potência dominante. Uma cama comum de 220 x 220 mm pode rondar os 180-250 W, enquanto uma maior de 300 x 300 mm pode atingir 300-500 W dependendo da tensão e construção. As camas AC são diferentes porque a sua potência de aquecimento não é fornecida pela fonte DC da impressora; nesse caso, inclua apenas a eletrónica de controlo DC, ventoinhas, hotend, motores e a pequena corrente usada pela entrada do relé de estado sólido.',
    },
    {
      type: 'paragraph',
      html: 'O cartucho aquecedor do hotend é a próxima carga óbvia. Os cartuchos de origem são frequentemente de 30 W ou 40 W, os hotends de alto fluxo usam frequentemente 50 W ou 60 W, e algumas configurações de alta temperatura usam 80 W ou mais. Um cartucho com mais watts não consome automaticamente essa potência de forma constante, mas a fonte deve suportar a potência nominal total porque o firmware pode comandar 100% de ciclo de trabalho durante o aquecimento ou a recuperação após uma grande solicitação de extrusão.',
    },
    {
      type: 'list',
      items: [
        'Potência da cama aquecida pela especificação da cama ou medindo tensão e resistência.',
        'Potência do cartucho do hotend pela sua potência nominal, não pelo ciclo de trabalho médio.',
        'Folga para motores de passo com base na quantidade de motores e nas configurações de corrente do driver.',
        'Potência auxiliar para controlador, ventoinhas, Raspberry Pi, LEDs, sondas, relés e placas da cabeça.',
        'Margem de segurança para cargas transitórias, envelhecimento de condensadores, calor da câmara e futuras atualizações.',
      ],
    },
    {
      type: 'table',
      headers: ['Componente', 'Intervalo típico', 'Nota de dimensionamento'],
      rows: [
        ['Cama aquecida 220 mm', '180-250 W', 'Frequentemente a maior carga DC numa impressora de secretária.'],
        ['Cama aquecida 300 mm', '300-500 W', 'Verifique cuidadosamente a bitola do fio e o percurso MOSFET da cama.'],
        ['Cartucho do hotend', '30-80 W', 'Use a potência nominal do cartucho, não a potência média observada.'],
        ['Motores de passo', '6-15 W cada', 'Depende do limite de corrente, tensão, modo do driver e corrente de retenção.'],
        ['Ventoinhas e eletrónica', '10-60 W', 'Placas da cabeça, LEDs e computadores de placa única somam-se rapidamente.'],
      ],
    },
    { type: 'title', text: 'Necessidades de Fonte: 12V vs 24V', level: 2 },
    {
      type: 'paragraph',
      html: 'Para a mesma potência, uma impressora de 24 V precisa de metade da corrente de uma de 12 V. Uma carga de 360 W consome 30 A a 12 V, mas apenas 15 A a 24 V. Uma corrente mais baixa reduz a queda de tensão nos fios, reduz o calor nos conectores e dá aos circuitos da cama e do hotend uma folga prática maior. É por isso que muitas impressoras 3D modernas e placas de atualização preferem 24 V para aquecedores e eletrónica de movimento.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Sistemas 12V',
          description: 'Úteis para impressoras antigas e acessórios de estilo automóvel, mas a alta potência da cama pode exigir correntes muito elevadas.',
          points: ['Amperagem mais alta para os mesmos watts', 'Mais sensíveis à resistência dos conectores', 'Comuns em máquinas antigas da era RepRap'],
        },
        {
          title: 'Sistemas 24V',
          description: 'Preferidos para muitas impressoras modernas porque a mesma potência de aquecimento é fornecida com menor corrente.',
          highlight: true,
          points: ['Amperagem mais baixa para os mesmos watts', 'Menos queda de tensão na cablagem', 'Mais adequados para camas aquecidas DC maiores'],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Use a corrente como verificação prática da cablagem',
      html: 'Após calcular os watts necessários, divida pela tensão para obter a corrente máxima. Esse valor em amperes é o que importa para terminais da fonte, fusíveis, interruptores, bitola dos fios, conectores da cama e valores nominais de entrada da placa.',
    },
    {
      type: 'proscons',
      title: 'Alterar a tensão durante uma atualização',
      items: [
        { pro: 'Mudar de 12 V para 24 V pode reduzir a corrente e o aquecimento dos conectores para a mesma potência da cama.', con: 'Ventoinhas, LEDs, bombas e algumas placas controladoras podem precisar de substituição ou conversores buck.' },
        { pro: 'Hotends e camas de 24 V frequentemente atingem a temperatura mais rápido quando corretamente especificados.', con: 'Um aquecedor de 12 V incorretamente ligado a 24 V pode ficar perigosamente sobrealimentado.' },
        { pro: 'Os sistemas de driver e movimento frequentemente se comportam melhor com eletrónica moderna de 24 V.', con: 'Cada tensão de acessório deve ser verificada antes do primeiro arranque.' },
      ],
    },
    { type: 'title', text: 'Quanta Margem de Segurança Deve Ter uma Fonte de Impressora 3D?', level: 2 },
    {
      type: 'paragraph',
      html: 'Uma margem de segurança não é capacidade desperdiçada; é espaço de operação. As fontes comutadas ficam mais confortáveis quando não são permanentemente exigidas na sua potência nominal numa câmara quente. Uma fonte de impressora montada sob uma câmara aquecida, ao lado de uma calha de cabos da cama ou dentro de uma base mal ventilada pode funcionar mais quente do que a mesma fonte numa bancada aberta. O calor reduz a vida útil dos condensadores e pode provocar desligamentos sob carga.',
    },
    {
      type: 'paragraph',
      html: 'Para uma impressora de secretária típica, 20% de folga é um mínimo razoável quando a estimativa de carga é precisa. Para camas grandes, hotends de alto fluxo, ventoinhas de câmara, iluminação LED ou futuras atualizações da cabeça, 30-35% é mais confortável. Para impressoras experimentais, máquinas de alta temperatura ou montagens que possam adicionar um segundo hotend, controlos ativos de aquecimento da câmara ou muitos acessórios, escolher um escalão padrão de fonte acima do requisito calculado é geralmente a escolha de engenharia mais tranquila.',
    },
    {
      type: 'table',
      headers: ['Margem', 'Caso de uso', 'Significado prático'],
      rows: [
        ['10%', 'Cargas bem conhecidas, quadro aberto, fonte de qualidade', 'Funciona apenas quando cada carga e percurso de fio já está verificado.'],
        ['20%', 'Impressora de secretária normal', 'Boa base para uma montagem estável de estilo stock.'],
        ['30%', 'Cama melhorada, hotend de alto fluxo, eletrónica fechada', 'Melhor conforto térmico e flexibilidade futura.'],
        ['40%+', 'Impressora de grande formato ou experimental', 'Útil quando as premissas de carga podem mudar mais tarde.'],
      ],
    },
    {
      type: 'card',
      title: 'Porque é que uma fonte maior não força mais potência para a impressora',
      html: 'Uma fonte DC regulada oferece tensão; as cargas ligadas consomem corrente de acordo com a resistência, ciclo de trabalho e eletrónica de controlo. Uma fonte de 600 W numa impressora que precisa de 300 W não empurra 600 W para a cama. Simplesmente tem capacidade suficiente para fornecer a corrente sem operar no seu limite.',
    },
    { type: 'title', text: 'Consumo de Potência da Cama Aquecida e Comportamento Térmico', level: 2 },
    {
      type: 'paragraph',
      html: 'As camas aquecidas são cargas resistivas, pelo que a sua potência teórica pode ser estimada a partir da tensão e resistência usando <code>P = V² / R</code>. Se uma cama de 24 V tiver 2,4 ohms de resistência, é aproximadamente uma cama de 240 W. A potência real varia com a tensão de alimentação, perdas na cablagem, resistência do MOSFET e temperatura da cama, porque a resistência pode mudar ligeiramente à medida que o aquecedor aquece.',
    },
    {
      type: 'paragraph',
      html: 'Uma cama que cicla a 35% de ciclo de trabalho durante uma impressão PLA estável pode ainda exigir 100% no arranque. Para dimensionar a fonte, use a potência nominal total do aquecedor. Para estimar o custo de eletricidade, o ciclo de trabalho médio é mais útil. Misturar estas duas questões é uma fonte comum de fontes subdimensionadas: o consumo de energia durante uma impressão de duas horas não é o mesmo que a capacidade elétrica instantânea.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Exceção da cama AC',
      html: 'Se a impressora usar uma cama AC alimentada pela rede, não inclua a potência da cama na carga da fonte DC. Em vez disso, dimensione a cablagem AC, o fusível, o relé, o alívio de tensão, a ligação à terra e a proteção térmica separadamente. A fonte DC continua a alimentar o controlador, o hotend, os motores e os acessórios.',
    },
    {
      type: 'list',
      items: [
        'Parte inferior da cama isolada: menos perda de calor e menor ciclo de trabalho médio após aquecimento.',
        'Placa espessa de alumínio maquinado: aquecimento mais lento mas distribuição de calor mais uniforme.',
        'Placa de vidro grande: mais massa térmica, frequentemente aquecimento mais longo para a mesma potência.',
        'Sala fria ou quadro aberto: mais potência de recuperação necessária para manter a temperatura.',
      ],
    },
    { type: 'title', text: 'Hotend, Motores, Ventoinhas e Cargas Auxiliares', level: 2 },
    {
      type: 'paragraph',
      html: 'Os motores de passo são frequentemente sobrestimados ou subestimados porque o seu comportamento elétrico não é tão simples como somar tensão e corrente nominais. Os drivers chopper modernos regulam a corrente dos enrolamentos, e a potência retirada da fonte depende das configurações do driver, da velocidade do motor, da redução da corrente de retenção e da carga mecânica. Para dimensionar a fonte, uma folga prática de 8-15 W por motor de passo ativo é frequentemente adequada para impressoras de secretária comuns, mas motores de corrente muito alta ou muitos motores Z merecem um cálculo direto a partir da configuração do driver.',
    },
    {
      type: 'paragraph',
      html: 'As cargas auxiliares são fáceis de esquecer porque cada item é pequeno: ventoinha do hotend, ventoinha de refrigeração da peça, ventoinha do controlador, ventoinhas de circulação da câmara, LEDs, sensor de filamento, sonda, placa principal, display, placa da cabeça, Raspberry Pi, câmara, hub USB e perdas do conversor buck. Uma impressora com um computador de placa única e iluminação da câmara pode adicionar 20-40 W sem parecer uma grande alteração elétrica.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Potência contínua', definition: 'A carga que uma fonte de alimentação é projetada para fornecer por longos períodos sob condições especificadas de refrigeração e temperatura.' },
        { term: 'Carga de pico', definition: 'Uma exigência de curta duração que pode ser superior à carga média, como no aquecimento ou na recuperação simultânea de aquecedores.' },
        { term: 'Queda de tensão', definition: 'A tensão perdida nos fios e conectores porque os condutores reais têm resistência.' },
        { term: 'Ciclo de trabalho', definition: 'A percentagem de tempo que um aquecedor controlado está ligado durante um período de controlo.' },
        { term: 'Folga', definition: 'Capacidade extra acima da carga calculada que mantém a fonte afastada do seu limite.' },
      ],
    },
    {
      type: 'summary',
      title: 'Lista de verificação de carga auxiliar',
      items: [
        'Some todas as ventoinhas pela sua potência nominal ou tensão vezes corrente.',
        'Inclua computadores de placa única e câmaras se alimentados pela fonte da impressora.',
        'Reserve potência para fitas LED, placas da cabeça, relés, sondas e perdas dos conversores buck.',
        'Recalcule após adicionar aquecedores de câmara, extrusores extra ou refrigeração de peça de alta corrente.',
      ],
    },
    { type: 'title', text: 'Lendo os Resultados da Calculadora', level: 2 },
    {
      type: 'paragraph',
      html: 'A carga direta é a soma da cama, hotend, motores e entradas auxiliares antes da folga. O valor da fonte necessária adiciona a margem de segurança selecionada. O valor da corrente máxima divide esse requisito pela tensão do sistema, respondendo assim à pergunta prática de cablagem: quantos amperes devem a fonte e o percurso de entrada transportar em segurança à tensão escolhida?',
    },
    {
      type: 'paragraph',
      html: 'O tamanho de fonte recomendado arredonda para cima para uma classe de potência comum. Se o valor necessário for 382 W, uma fonte de 400 W pode parecer matematicamente suficiente, mas um modelo de 450 W ou 500 W pode ser preferível se tiver melhor refrigeração, melhores terminais, certificações de segurança reconhecidas ou uma potência contínua mais honesta. A potência da etiqueta é apenas uma parte da qualidade da fonte.',
    },
    {
      type: 'table',
      headers: ['Resultado', 'Usar para', 'Sinal de alerta'],
      rows: [
        ['Watts necessários', 'Escolher a capacidade da fonte', 'O valor está a poucos watts da etiqueta da fonte.'],
        ['Corrente máxima', 'Verificação de fios, fusíveis e conectores', 'A corrente excede os valores nominais da placa ou dos terminais.'],
        ['Tamanho recomendado', 'Lista de compras', 'Fonte barata sem marca que promete potência alta com terminais minúsculos.'],
        ['Utilização', 'Estimativa de conforto térmico', 'A carga contínua está acima de cerca de 80-85%.'],
      ],
    },
    {
      type: 'message',
      title: 'Regra prática de compra',
      html: 'Escolha a primeira fonte de qualidade acima do requisito calculado e depois verifique a tensão de saída, a corrente nominal, a orientação da refrigeração, a ventilação da câmara, a ligação à terra de proteção, a estratégia de fusíveis e as capacidades dos conectores antes da instalação.',
    },
    { type: 'title', text: 'Erros Comuns de Dimensionamento de Fontes em Atualizações de Impressoras 3D', level: 2 },
    {
      type: 'list',
      items: [
        'Usar os watts médios da tomada inteligente em vez da carga máxima DC dos aquecedores.',
        'Esquecer que os sistemas de 12 V precisam do dobro da corrente dos sistemas de 24 V para a mesma potência.',
        'Adicionar uma cama maior mas manter o conector de entrada da placa e a bitola dos fios originais.',
        'Instalar um cartucho de hotend de alta potência sem verificar MOSFET, fusível e proteções térmicas do firmware.',
        'Alimentar um Raspberry Pi, câmara, LEDs e ventoinhas pela impressora sem adicionar carga auxiliar.',
        'Comprar uma fonte pela potência de pico anunciada em vez da potência contínua e da certificação de segurança.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Pare se os fios ou conectores aquecerem',
      html: 'Fios quentes, terminais acastanhados, invólucros derretidos, reinícios intermitentes ou quedas de temperatura da cama durante o movimento não são problemas de afinação. São sintomas elétricos que exigem inspeção antes de continuar a imprimir.',
    },
    {
      type: 'paragraph',
      html: 'A calculadora estima a capacidade da fonte; não certifica todo o sistema elétrico. Uma impressora segura também precisa de ligação à terra correta, alívio de tensão, fusíveis, ponteiras adequadas, conectores crimpados dimensionados para a corrente real, proteção contra fuga térmica no firmware e um layout de cablagem que mantenha a tensão de rede separada da eletrónica de baixa tensão.',
    },
    {
      type: 'card',
      title: 'Quando dividir as fontes de alimentação',
      html: 'As impressoras grandes às vezes usam fontes separadas para a cama, eletrónica de movimento e acessórios. A divisão pode reduzir a corrente através de uma única placa e simplificar a manutenção, mas as massas, a lógica de comutação, os fusíveis e o comportamento de paragem de emergência devem ser projetados deliberadamente.',
    },
    { type: 'title', text: 'Exemplos Práticos: Impressora Stock, Atualização CoreXY e Cama Grande', level: 2 },
    {
      type: 'paragraph',
      html: 'Uma impressora compacta de cama móvel com cama de 220 W, hotend de 40 W, quatro motores a 10 W e 25 W de eletrónica tem uma carga direta de 325 W. Com 25% de folga, a capacidade da fonte necessária é de cerca de 406 W. A 24 V isso é aproximadamente 16,9 A, portanto uma fonte de qualidade de 450 W ou 500 W a 24 V é um alvo sensato dependendo do layout dos conectores e da refrigeração.',
    },
    {
      type: 'paragraph',
      html: 'Uma atualização CoreXY com cama de 300 W, hotend de alto fluxo de 60 W, cinco motores a 12 W e 45 W de carga auxiliar totaliza 465 W antes da margem. Com 30% de folga precisa de cerca de 605 W, ou 25,2 A a 24 V. Essa montagem pertence à classe 600-750 W, e a cablagem da cama deve ser tratada como um percurso de corrente principal e não como um detalhe secundário.',
    },
    {
      type: 'paragraph',
      html: 'Uma impressora de grande formato com cama DC de 600 W, hotend de 80 W, seis motores a 14 W e 80 W de carga auxiliar atinge 844 W antes da margem. Com 35% de folga, o requisito é de cerca de 1139 W. A esse ponto, muitos construtores consideram uma cama AC ou uma arquitetura de alimentação separada porque a corrente DC, a cablagem, os fusíveis e a gestão térmica se tornam as restrições centrais de projeto.',
    },
    {
      type: 'summary',
      title: 'Fluxo de trabalho final de dimensionamento',
      items: [
        'Liste cada carga que pode funcionar durante o aquecimento ou a recuperação.',
        'Calcule os watts diretos e depois adicione uma folga realista.',
        'Converta watts em amperes à tensão real do sistema.',
        'Escolha uma fonte de qualidade de potência contínua acima do resultado.',
        'Verifique fios, conectores, fusíveis, capacidades da placa e refrigeração antes de ligar a impressora.',
      ],
    },
  ],
  faq: [
    {
      question: 'Quantos watts a fonte da minha impressora 3D precisa?',
      answer: 'Some a cama aquecida, o cartucho do hotend, os motores, a eletrónica, as ventoinhas e os acessórios, e depois adicione uma margem de segurança. Muitas impressoras de secretária 24 V atualizadas situam-se entre 400 W e 600 W, enquanto camas grandes podem precisar de muito mais.',
    },
    {
      question: '24V é melhor que 12V para a fonte de uma impressora 3D?',
      answer: 'Para a mesma potência, 24 V usa metade da corrente de 12 V. Uma corrente mais baixa normalmente significa menos queda de tensão e menos aquecimento dos conectores, mas todos os aquecedores, ventoinhas, placas e acessórios devem ser compatíveis com a tensão escolhida.',
    },
    {
      question: 'Devo incluir a cama aquecida no cálculo da fonte DC?',
      answer: 'Inclua se for uma cama aquecida DC alimentada pela fonte da impressora. Não inclua uma cama AC de rede na potência da fonte DC; dimensione a cablagem de rede, o relé, o fusível e as proteções de segurança separadamente.',
    },
    {
      question: 'Que margem de segurança devo usar como folga da fonte?',
      answer: 'Use pelo menos 20% para uma montagem normal conhecida. Use 30-35% para camas melhoradas, hotends de alto fluxo, eletrónica fechada ou acessórios futuros.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Introduza as cargas de aquecimento', text: 'Adicione a potência nominal da cama aquecida e do cartucho do hotend.' },
    { name: 'Adicione movimento e acessórios', text: 'Introduza o número de motores, a folga por motor, ventoinhas, placas, LEDs e outras cargas auxiliares.' },
    { name: 'Escolha tensão e margem', text: 'Selecione 12 V ou 24 V e defina uma margem de segurança adequada ao risco da montagem.' },
    { name: 'Verifique watts e amperes', text: 'Use os watts necessários para a seleção da fonte e os amperes máximos para verificar fios, fusíveis e conectores.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Calculadora de Dimensionamento de Fonte de Alimentação para Impressora 3D',
      description: 'Estime a potência e a corrente da fonte de uma impressora 3D a partir das cargas da cama, hotend, motores, auxiliares e margem.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Quantos watts a fonte da minha impressora 3D precisa?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Some a cama aquecida, o cartucho do hotend, os motores, a eletrónica, as ventoinhas e os acessórios, e depois adicione uma margem de segurança.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Como dimensionar a fonte de alimentação de uma impressora 3D',
      step: [
        { '@type': 'HowToStep', text: 'Introduza as cargas dos aquecedores.' },
        { '@type': 'HowToStep', text: 'Adicione as cargas de movimento e acessórios.' },
        { '@type': 'HowToStep', text: 'Selecione a tensão do sistema e a margem de segurança.' },
        { '@type': 'HowToStep', text: 'Escolha uma fonte de qualidade acima do requisito calculado.' },
      ],
    },
  ],
};
