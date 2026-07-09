import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { StepperDriverMicrosteppingCalculatorUI } from '../ui';

export const content: ToolLocaleContent<StepperDriverMicrosteppingCalculatorUI> = {
  slug: 'calculadora-microstepping-driver-motor-passo-3d',
  title: 'Calculadora de Passos por mm e Microstepping para Motores de Passo',
  description: 'Calcule os passos exatos por mm (ou passos por polegada) e a resolução mecânica teórica para motores de passo de impressoras 3D. Suporta TMC2209, TMC2208, correias e fusos.',
  ui: {
    title: 'Calculadora de Microstepping para Driver de Motor de Passo',
    presetsLabel: 'PRE DEFINIÇÕES',
    presetBelt16: 'Correia GT2 e polia T16 (X/Y)',
    presetBelt20: 'Correia GT2 e polia T20 (X/Y)',
    presetZLead8: 'Fuso T8 avanço 8mm (Z)',
    presetZLead2: 'Fuso T8 avanço 2mm (Z)',
    unitSystemLabel: 'Sistema de Unidades',
    metricLabel: 'Métrico',
    imperialLabel: 'Imperial',
    configLabel: 'CONFIGURAÇÃO DO MOTOR E DRIVER',
    motorStepAngleLabel: 'Ângulo de Passo do Motor',
    driverMicrosteppingLabel: 'Microstepping do Driver',
    transmissionModeLabel: 'Tipo de Transmissão',
    transmissionBelt: 'Transmissão por Correia',
    transmissionLeadScrew: 'Fuso / Haste Roscada',
    beltPitchLabel: 'Passo da Correia',
    pulleyTeethLabel: 'Dentes da Polia',
    leadScrewPitchLabel: 'Avanço do Fuso (Distância por Rotação)',
    resultsLabel: 'RESULTADOS CALCULADOS',
    stepsPerUnitLabel: 'Configuração do Firmware (Passos)',
    mechanicalResolutionLabel: 'Resolução Teórica',
    stepsPerUnitUnitMetric: 'passos/mm',
    stepsPerUnitUnitImperial: 'passos/polegada',
    mechanicalResolutionUnitMetric: 'mícrons/passo',
    mechanicalResolutionUnitImperial: 'milésimos/passo',
    formulaLabel: 'FÓRMULAS MATEMÁTICAS',
    formulaStepsPerRevolution: 'Passos/Rev = 360 / Ângulo de Passo',
    formulaMicrostepsPerRev: 'Micropassos/Rev = Passos/Rev * Micropassos',
    formulaDistancePerRev: 'Distância/Rev = Dentes * Passo (ou Avanço do Fuso)',
    formulaStepsPerUnit: 'Passos/Unidade = Micropassos/Rev / Distância/Rev',
    formulaResolution: 'Resolução = Distância/Rev / Micropassos/Rev',
    explainResolutionLabel: 'O que isso significa?',
    explainResolutionText: 'Representa o menor movimento linear teórico que o eixo da sua impressora 3D pode fazer quando o driver comanda um único micropasso. Valores de resolução mais baixos indicam melhor precisão de posicionamento mecânico.',
    copyButton: 'Copiar Comando do Firmware',
    copiedButton: 'Copiado!',
    stepAngleUnit: '°',
    microstepsUnit: 'x',
    pitchUnitMetric: 'mm',
    pitchUnitImperial: 'in',
    teethUnit: 'dentes',
    stepAngle18: '1,8° (200 passos/rev)',
    stepAngle09: '0,9° (400 passos/rev)',
    stepAngle75: '7,5° (48 passos/rev)',
    stepAngle15: '15° (24 passos/rev)',
    microstep1: '1x (Passo Completo)',
    microstep2: '2x',
    microstep4: '4x',
    microstep8: '8x',
    microstep16: '16x',
    microstep32: '32x',
    microstep64: '64x',
    microstep128: '128x',
    microstep256: '256x',
  },
  seo: [
    {
      type: 'title',
      text: 'Guia de Calibração de Motores de Passo e Configuração de Passos por Milímetro no Firmware',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Em impressoras 3D de uso doméstico e profissional, o movimento de precisão depende de motores de passo, drivers e mecanismos de transmissão linear. Os motores de passo não giram continuamente; em vez disso, dividem uma rotação completa num número fixo de passos discretos. Para que a placa controladora da impressora 3D mova a cabeça de impressão ou a mesa de impressão por uma distância exata, o firmware precisa saber precisamente quantos passos do motor (incluindo micropassos) correspondem a uma unidade de distância linear (milímetro ou polegada). Esse valor é conhecido como passos por milímetro ou passos por polegada e é uma definição crítica armazenada em configurações de firmware como Marlin, Klipper ou RepRapFirmware.',
    },
    {
      type: 'paragraph',
      html: 'Se esta configuração estiver sequer ligeiramente incorreta, os movimentos físicos da impressora 3D não corresponderão às instruções digitais geradas pelo software de fatiamento. Esse descompasso leva a imprecisões dimensionais nos objetos impressos, onde as peças ficam maiores ou menores do que o previsto, os orifícios ficam desalinhados e as montagens com várias peças não se encaixam corretamente. Compreender os componentes físicos, as características do driver e as relações de transmissão permite que os operadores calculem valores matematicamente perfeitos em vez de dependerem de métodos de calibração por tentativa e erro que introduzem erros mecânicos.',
    },
    {
      type: 'title',
      text: 'Comparação de Especificações de Motores de Passo e Atributos Mecânicos',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Os motores de passo mais comuns usados na impressão 3D são motores de passo híbridos no formato NEMA 17. Esses motores geralmente vêm em duas variações de ângulo de passo: 1,8 graus por passo e 0,9 graus por passo. Um motor de passo de 1,8 grau requer 200 passos completos para completar uma rotação total de 360 graus. Um motor de 0,9 grau requer 400 passos completos para completar a mesma rotação. A escolha entre estas especificações afeta a precisão de posicionamento, o torque máximo e o ruído operacional do sistema de impressão.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Motor de Passo de 1,8 Graus',
          description: 'Opção de motor padrão para a maioria das impressoras 3D comerciais. Oferece torque robusto em altas velocidades e é económico.',
          points: [
            '200 passos completos por rotação',
            'Melhor retenção de torque em alta velocidade',
            'Menores requisitos de indutância elétrica',
            'Resolução suficiente para aplicações FDM gerais'
          ]
        },
        {
          title: 'Motor de Passo de 0,9 Graus',
          description: 'Opção de motor de alta precisão, popular para impressoras de detalhes finos e sistemas de extrusão de alta resolução.',
          points: [
            '400 passos completos por rotação',
            'Resolução mecânica duplicada antes do microstepping',
            'Erro posicional reduzido e vibrações de ressonância mais baixas',
            'Força contraeletromotriz mais alta em altas velocidades reduz o limite de torque'
          ]
        }
      ],
      columns: 2,
    },
    {
      type: 'paragraph',
      html: 'Embora um motor de 0,9 graus ofereça o dobro da capacidade de posicionamento físico, ele exige o dobro de pulsos de passo do microcontrolador da placa mãe para atingir a mesma velocidade de rotação. Em plataformas de impressão rápida com microcontroladores antigos de 8 bits, isso pode saturar a fila de processamento e causar gaguejos ou limitações de velocidade. Em controladores modernos de 32 bits, essa limitação raramente é um problema, tornando os motores de 0,9 graus uma excelente atualização para os eixos X e Y quando o acabamento da superfície é crítico.',
    },
    {
      type: 'title',
      text: 'Glossário de Terminologia de Motores de Passo e Drivers',
      level: 2,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Ângulo de Passo',
          definition: 'A rotação angular do veio do motor quando ocorre uma única sequência de excitação da bobina em passo completo, tipicamente 1,8 ou 0,9 graus.',
        },
        {
          term: 'Microstepping',
          definition: 'Método controlado pelo driver que divide um único passo completo em subpassos mais pequenos equilibrando a corrente entre as fases do motor, suavizando o movimento e reduzindo a vibração.',
        },
        {
          term: 'Passo da Correia',
          definition: 'A distância entre os centros de dois dentes adjacentes numa correia dentada síncrona, normalmente 2,0 milímetros para correias GT2 usadas em impressão 3D.',
        },
        {
          term: 'Avanço do Fuso',
          definition: 'A distância linear que uma porca percorre ao longo do fuso durante uma rotação completa de 360 graus do veio do fuso.',
        },
        {
          term: 'Torque de Retenção',
          definition: 'A quantidade máxima de torque que o motor pode exercer num veio estacionário quando a corrente nominal é aplicada às bobinas',
        },
        {
          term: ' Força Contraeletromotriz (Back-EMF)',
          definition: 'A tensão gerada pela rotação das bobinhas do motor dentro do campo magnético, que se opõe à tensão de alimentação e limita a velocidade e o torque máximos.',
        }
      ],
    },
    {
      type: 'title',
      text: 'Cálculo de Passos por Milímetro para Correias Dentadas',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Para os eixos de movimento horizontal (normalmente X e Y) das impressoras 3D cartesianas, CoreXY e Delta, são utilizadas correias dentadas síncronas para converter o movimento rotativo do motor de passo em movimento linear. O cálculo mecânico depende inteiramente do passo da correia e do número de dentes na polia motriz ligada ao veio do motor. O perfil do dente da correia deve coincidir com o perfil do dente da polia para evitar folgas e deslizamento.',
    },
    {
      type: 'table',
      headers: ['Tamanho da Polia', 'Tipo de Correia', 'Passo da Correia', 'Passos/rev (1,8°, 16x)', 'Passos por mm (Métrico)', 'Passos por Polegada (Imperial)'],
      rows: [
        ['16 Dentes', 'GT2', '2,0 mm', '3200', '100,00 passos/mm', '2540,00 passos/in'],
        ['20 Dentes', 'GT2', '2,0 mm', '3200', '80,00 passos/mm', '2032,00 passos/in'],
        ['32 Dentes', 'GT2', '2,0 mm', '3200', '50,00 passos/mm', '1270,00 passos/in'],
        ['20 Dentes', 'GT3', '3,0 mm', '3200', '53,33 passos/mm', '1354,67 passos/in'],
        ['16 Dentes (0,9°)', 'GT2', '2,0 mm', '6400', '200,00 passos/mm', '5080,00 passos/in'],
        ['20 Dentes (0,9°)', 'GT2', '2,0 mm', '6400', '160,00 passos/mm', '4064,00 passos/in']
      ],
    },
    {
      type: 'tip',
      title: 'Escolha Prática para a Seleção da Polia',
      html: 'Escolher uma polia de 16 dentes em vez de uma de 20 dentes aumenta a resolução mecânica em 25 por cento e a força linear exercida no carro no entanto, polias mais pequenas forçam a correia a curvar-se com um raio mais apertado, o que pode aumentar o desgaste da correia ao longo do tempo e introduzir frequências de vibração mais elevadas. Para construções padrão, as polias de 20 dentes representam um compromisso equilibrado entre vida útil da correia e resolução.',
    },
    {
      type: 'title',
      text: ' Realidades do Microstepping: Perdas de Torque e a Solução de Interpolação',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Muitos operadores acreditam que aumentar a resolução do microstepping do driver para valores altos como 64, 128 ou 256 aumentará infinitamente a precisão da sua impressora 3D. Este é um erro comum. Na realidade, o torque incremental entre os micropassos cai drasticamente à medida que a divisão do microstepping aumenta. A corrente elétrica é dividida em curvas de seno e cosseno para posicionar o veio do motor entre os pólos físicos. Se a fricção externa ou carga no eixo exceder o torque incremental de um micropasso, o veio do motor não se moverá até que vários pulsos de micropasso se tenham acumulado.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Limitação de Torque do Microstepping Teórico vs Físico',
      html: 'Com 16 micropassos, o torque de retenção incremental por micropasso é aproximadamente 9,8 por cento do torque de retenção do motor. Com 256 micropassos. Qualquer pequeno aperto mecânico desequilíbrio da tensão da correia ou fricção do carro impedirá facilmente o movimento físico de 1/256 de passo, o que significa que o microstepping nativo elevado não garante precisão posicional real.',
    },
    {
      type: 'card',
      title: 'Função de Interpolação dos Drivers Trinamic',
      html: 'Os drivers modernos como o TMC2208, TMC2209 e TMC5160 resolvem este problema recebendo comandos de passo a uma resolução fiável de 16 micropassos e interpolando internamente esses passos para 256 micropassos antes de executar as alterações da corrente das bobinas. Isto proporciona a operação suave e silenciosa de 256 micropassos mantendo ao mesmo tempo o torque de retenção fiável e a sobrecarga de processamento reduzida do controlador de uma configuração de 16 micropassos. No firmware, mantenha a sua configuração em 16 micropassos e deixe que o driver lide com a interpolação interna.',
    },
    {
      type: 'title',
      text: 'Cálculo de Passos por Milímetro para Fusos e Hastes Roscadas do Eixo Z',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O eixo Z vertical da maioria das impressoras 3D de secretária utiliza fusos ou hastes roscadas. Os fusos são concebidos para transmissão de potência e têm perfis de rosca retificados de precisão que minimizam a folga ou calcular os passos por mm para um fuso, o passo da rosca não deve ser confundido com o avanço. O avanço é a distância linear real percorrida pela porca do fuso durante uma rotação completa de 360 graus do fuso. O avanço é calculado multiplicando o passo da rosca pelo número de entradas da rosca.',
    },
    {
      type: 'list',
      items: [
        'Fuso de uma entrada única: Passo é 2 mm, contagem de entradas é 1. O avanço é 2 mm por rotação.',
        'Fuso de duas entradas: Passo é 2 mm, contagem de entradas é 2. O avanço é 4 mm por rotação.',
        'Fuso de quatro entradas (T8x8 comum): Passo é 2 mm, contagem de entradas é 4. O avanço é 8 mm por rotação.',
        'Hastes roscadas métricas padrão (ex. M8): Entrada única. O avanço é igual ao passo métrico padrão, que é 1,25 mm por rotação.'
      ],
    },
    {
      type: 'paragraph',
      html: 'Porque os fusos têm uma vantagem mecânica sobre os sistemas de correia, eles atingem valores de passos por mm muito mais altos, indicando valores de resolução mecânica mais pequenos. Esta alta resolução é crítica para os eixos Z porque as camadas são tipicamente impressas com incrementos entre 0,1 mm e 0,3 mm. Um valor mais alto de passos por mm permite que a impressora estabeleça alturas de camada consistentes em erros de posicionamento.',
    },
    {
      type: 'title',
      text: 'Resumoo dos Passos Chave para a Integração do Driver e do Motor',
      level: 2,
    },
    {
      type: 'summary',
      title: 'Passos Práticos para Configurar o Firmware da Sua Impressora',
      items: [
        'Identifique o ângulo de passo do motor na folha de dados do fabricante (normalmente 1,8 ou 0,9 graus).',
        'Determine as definições de microstepping para o íman configuradas através de jumpers físicos ou comandos UART de software (16 é recomendado).',
        'Meça ou consulte o passo da correia e conte os dentes na polia para os eixos de correia.',
        'Verifique o avanço do fuso (passo multiplicado pelo número de entradas) para o eixo Z.',
        'Introduza estes parâmetros na nossa calculadora para obter o valor exato de configuração em passos/mm ou passos/polegada.',
        'Escreva os valores calculados nos ficheiros de configuração do seu firmware ou guarde-os usando comandos de terminal como M92.'
      ],
    },
  ],
  faq: [
    {
      question: 'Porque é que os meus passos/mm calculados são diferentes do meu resultado de calibração manual?',
      answer: 'Os passos/mm finalizados são matematicamente exatos com base na geometria física dos componentes. Se uma calibração manual sugerir um valor diferente, é normalmente porque o operador trabalho o filamento ou o percurso do eixo com um paquímetro enquanto a folga mecânica, o esticamento da correia ou o deslizamento do extrusor introduziram erros em Além disso. Deve usar sempre o valor calculado matematicamente para os eixos de movimento e corrigir os problemas mecânicos subjacentes em vez de ajustar os passos.',
    },
    {
      question: 'O que acontece se eu definir o valor de microstepping demasiado alto no firmware?',
      answer: 'Definir o microstepping para 64, 128 ou 256 no firmware aumenta a procura de frequência de em contrato de pulsos na placa controladora. Se a placa mãe não conseguir gerar pulsos de passo suficientemente depressa, a impressora pode congelar, gaguejar ou limitar a velocidade máxima de percurso. É melhor usar como 16 micropassos no firmware com a interpolação ao nível do driver ativada.',
    },
    {
      question: 'Como posso alterar as definições de passos por mm na minha impressora 3D?',
      answer: 'Pode alterar os valores temporariamente usando o comando M92 seguido da letra do eixo e do valor (p. ex., M92 X80.00 Y80.00 Z400.00). Para tornar estes valores permanentes, envie o comando M500 para guardá-los na EEPROM, ou edite o ficheiro Configuration.h no firmware Marlin e atualize, ou edite o ficheiro printer.cfg no Klipper.',
    },
    {
      question: 'Qual é a diferença entre o passo da correia e os dentes da polia?',
      answer: 'O passo da correia é a distância entre dois dentes consecutivos na correia, medida de centro a centro. Os dentes da polia são o número total de dentes físicos na engrenagem ligada ao veio do motor. Multiplicar o número de dentes pelo passo dá a distância linear total percorrida por rotação do motor.',
    },
    {
      question: 'Posso usar valores de microstepping diferentes para eixos diferentes?',
      answer: 'Sim, pode configurar valores de microstepping diferentes para os eixos X, Y, Z e E. Por exemplo, é muito comum usar 16 micropassos em X e Y, 16 micropassos em Z, e 16 ou 32 micropassos no extrusor dependendo da relação de transmissão do conjunto do extrusor.',
    }
  ],
  bibliography,
  howTo: [
    {
      name: 'Determinar as Especificações do Motor e do Driver',
      text: 'Encontre o ângulo de passo do seu motor (normalmente 1,8 ou 0,9 graus) e o valor de microstepping do seu driver (16 é o padrão).',
    },
    {
      name: 'Determinar os Detalhes da Transmissão',
      text: 'Escolha entre transmissão por correia (especifique o passo da correia e os dentes da polia) e fuso (especifique o avanço do fuso).',
    },
    {
      name: 'Configurar as Definições do Firmware',
      text: 'Insira os valores, selecione o seu sistema de unidades preferido e copie o comando de configuração de passos gerado para a config do seu printer.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Porque é que os meus passos/mm calculados são diferentes do meu resultado de calibração manual?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Os passos/mm calculados são matematicamente exatos com base na geometria física dos componentes. A calibração manual introduz frequentemente erros devido à tensão da correia ou à compressão do filamento.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Calculadora de Microstepping para Driver de Motor de Passo',
      description: 'Calcule os valores de configuração de passos e os limites de resolução física para motores e drivers de impressoras 3D.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Como calcular os passos por mm de um motor de passo',
      step: [
        {
          '@type': 'HowToStep',
          text: 'Determinar as Especificações do Motor e do Driver',
        },
        {
          '@type': 'HowToStep',
          text: 'Determinar os Detalhes da Transmissão',
        },
        {
          '@type': 'HowToStep',
          text: 'Configurar as Definições do Firmware',
        },
      ],
    },
  ],
};