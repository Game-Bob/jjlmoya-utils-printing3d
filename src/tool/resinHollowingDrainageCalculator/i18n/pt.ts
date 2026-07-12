import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ResinHollowingDrainageCalculatorUI } from '../ui';

const slug = 'calculadora-esvaziamento-drenagem-resina-sla';
const title = 'Calculadora de Esvaziamento e Drenagem de Resina SLA';
const description = 'Calcule a espessura de parede conservadora, diâmetro do orifício de drenagem, contagem mínima de aberturas e economia de resina ajustada pela complexidade para impressões vazadas em resina SLA e DLP.';

const faqData = [
  { question: 'Por que a calculadora sempre recomenda pelo menos dois orifícios de drenagem?', answer: 'Uma impressão de resina vazada precisa de um caminho para a resina líquida sair e outro para o ar entrar. Duas aberturas também ajudam a quebrar o efeito de ventosa contra o filme de liberação durante a descolagem.' },
  { question: 'Por que a economia de resina é menor que o volume vazio teórico?', answer: 'A resina líquida permanece nas paredes internas, nervuras, cantos, suportes e pequenas bolsas. A calculadora subtrai 5, 10 ou 15 por cento do volume vazio teórico com base na complexidade geométrica.' },
  { question: 'A espessura de parede de 1,5 mm é sempre suficiente?', answer: 'Não. É um limite mínimo de segurança para muitas impressões de resina de mesa. Peças altas, pesadas, cargas de engenharia, ambientes quentes ou lixamento agressivo podem exigir paredes mais espessas.' },
  { question: 'Onde devem ser colocados os orifícios de drenagem?', answer: 'Coloque os orifícios o mais próximo possível do lado da plataforma de construção e dos pontos de coleta de resina mais baixos na orientação de impressão, depois verifique se nenhuma bolsa selada permanece no fatiador.' },
];

const howToData = [
  { name: 'Insira o volume e altura do modelo', text: 'Use o volume do fatiador após os suportes e a orientação, depois insira a altura da peça na orientação de impressão.' },
  { name: 'Escolha a complexidade geométrica', text: 'Selecione complexidade simples, moderada ou alta para que a resina presa seja subtraída da economia teórica de esvaziamento.' },
  { name: 'Escolha o tipo de resina', text: 'Selecione resina padrão, resistente ou de engenharia. Resinas mais viscosas recebem uma recomendação de diâmetro de drenagem maior.' },
  { name: 'Verifique as recomendações de parede e drenagem', text: 'Use a espessura de parede, diâmetro de drenagem, quantidade de furos e a lista de verificação antes de fatiar o arquivo final.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org', '@type': 'HowTo',
  name: title, description,
  step: howToData.map((step, index) => ({
    '@type': 'HowToStep', position: index + 1,
    name: step.name, text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org', '@type': 'SoftwareApplication',
  name: title, description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'pt',
};

const seoData = [
    {
      type: 'title',
      text: 'O que faz a Calculadora de Esvaziamento e Drenagem de Resina SLA?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Esta ferramenta resolve um dos desafios mais críticos na impressão 3D de resina SLA, DLP e LCD: a otimização de modelos ocos. Imprimir peças de resina maciças é dispendioso, pesado e aumenta as forças de descolamento durante o processo de impressão. O esvaziamento do modelo reduz o uso de material, mas introduzir cavidades ocas sem uma drenagem adequada gera resina não curada retida e falhas de impressão devido a forças de vácuo. Esta calculadora calcula a espessura de parede ideal, sugere o diâmetro e a quantidade corretos de orifícios de drenagem e estima a poupança real de resina ao ter em conta a resina líquida que inevitavelmente fica retida nas paredes internas da peça impressa.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
          {
            value: '1.5 mm',
            label: 'Espessura de parede mínima recomendada para SLA de secretária'
          },
          {
            value: '2 orifícios',
            label: 'Número mínimo de respiradouros necessários para quebrar o vácuo'
          },
          {
            value: '10-15%',
            label: 'Redução do volume de resina devido à retenção em superfícies internas'
          },
          {
            value: '30-70%',
            label: 'Redução média do peso total conseguida através do esvaziamento'
          }
        ]
    },
    {
      type: 'title',
      text: 'Como a espessura da parede afeta a poupança de resina',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'A espessura da parede é a variável principal que determina a quantidade de resina poupada. Uma parede mais espessa aumenta a resistência estrutural mas consome rapidamente mais resina, reduzindo a eficiência do esvaziamento. Pelo contrário, uma parede demasiado fina será frágil, propensa a deformar-se durante a cura e poderá não suportar as forças mecânicas de descolamento à medida que a impressora separa cada camada da película FEP. O objetivo é encontrar o ponto ideal onde o modelo conserve a sua forma e utilidade, maximizando ao mesmo tempo a poupança de material.'
    },
    {
      type: 'proscons',
      title: 'Prós e contras de esvaziar impressões de resina',
      items: [
          {
            pro: 'Redução massiva nos custos de material e no peso total da impressão',
            con: 'Requer pós-processamento para lavar e curar as cavidades internas'
          },
          {
            pro: 'Uma menor área superficial por camada reduz as forças de descolamento na película FEP',
            con: 'Os orifícios mal colocados podem arruinar a estética visual do modelo'
          },
          {
            pro: 'Reduz o stress térmico e a deformação durante a pós-cura',
            con: 'Riesgo de que a resina líquida retida provoque que a peça se rache mais tarde'
          }
        ]
    },
    {
      type: 'title',
      text: 'Entendendo o efeito de ventosa em impressões ocas de resina',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Quando se imprime um modelo oco, este forma uma câmara fechada ao submergir no tanque. Se esta câmara carecer de orifícios de ventilação, cada ciclo de elevação cria um forte vácuo parcial (efeito de ventosa) entre a camada curada e a película de libertação. Esta força puxa a impressão, o que provoca a separação de camadas, linhas de camada, falhas nos suportes ou até o desprendimento completo do modelo da plataforma de construção. Adicionar orifícios de ventilação permite a entrada de ar, neutralizando a diferença de pressão e garantindo ciclos de descolamento suaves.'
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'O perigo dos espaços ocos selados',
      html: 'Nunca deixe um espaço oco completamente selado. A resina líquida retida dentro de uma peça impressa degradará lentamente as paredes curadas com o tempo, o que eventualmente provocará que o modelo se rache, filtre resina tóxica ou se desintegre por completo. Inclua sempre pelo menos dois orifícios para lavar o interior e curá-lo com uma fonte de luz UV interna.'
    },
    {
      type: 'title',
      text: 'Melhores práticas para a colocação de orificios de drenagem',
      level: 2
    },
    {
      type: 'list',
      items: [
          'Coloque os orifícios de drenagem o mais perto possível da plataforma de construção para permitir que a resina escape cedo durante a impressão.',
          'Use sempre pelo menos dois orifícios: um para permitir que flua a resina líquida e outro para permitir a entrada de ar.',
          'Oriente os orifícios em superfícies não visíveis, como a parte inferior das bases ou atrás das juntas, para preservar a estética.',
          'Certifique-se de que cada câmara ou bolso interno isolado tenha o seu próprio conjunto de orifícios de drenagem.'
        ]
    },
    {
      type: 'title',
      text: 'Como a calculadora ajusta a complexidade geométrica',
      level: 2
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
          {
            title: 'Geometria simples',
            description: 'Modelos de baixo detalhe, esferas ou blocs. Retém uma quantidade mínima de resina (aprox. 5%) em superfícies interiores planas.'
          },
          {
            title: 'Geometria moderada',
            description: 'Modelos de personagens ou peças mecânicas padrão. Os suportes internos e as curvas retêm uma quantidade moderada de resina (aprox. 10%).',
            highlight: true
          },
          {
            title: 'Alta complexidade',
            description: 'Miniaturas muito detalhadas, estruturas de treliça ou canais ocos complexos. Retém uma quantidade significativa de resina (aprox. 15%+) devido à ação capilar.'
          }
        ]
    },
    {
      type: 'title',
      text: 'Compreendendo a viscosidade de la resina e o tamanho do orifício de drenagem',
      level: 2
    },
    {
      type: 'table',
      headers: [
          'Classe de resina',
          'Nível de viscosidade',
          'Diâmetro mín. de orifício',
          'Colocação recomendada'
        ],
      rows: [
          [
              'Resina padrão',
              'Baixo-Médio',
              '2.0 - 3.0 mm',
              'Base ou superfícies planas ocultas'
            ],
          [
              'Resistente / Flexível',
              'Médio-Alto',
              '3.0 - 4.5 mm',
              'Cantos e juntas para evitar o descolamento'
            ],
          [
              'Engenharia / Calcinable',
              'Muito Alto',
              '4.5 - 6.0 mm',
              'Linha de visão direta para drenagem por gravidade'
            ]
        ]
    },
    {
      type: 'title',
      text: 'Quando aumentar a espessura da parede além de 1,5 mm',
      level: 2
    },
    {
      type: 'tip',
      title: 'A escala e a função determinam a espessura da parede',
      html: 'Embora 1.5 mm seja um mínimo confiável para pequenas figuras de exibição, deve aumentar a espessura da parede para impressões maiores. Para peças com mais de 150 mm de altura, aponte para paredes de 2.0 mm a 2.5 mm. Para componentes mecánicos de carga ou peças impressas com resinas flexíveis/elastoméricas, as paredes devem ser de 3.0 mm ou mais espessas para evitar o colapso estrutural sob carga.'
    },
    {
      type: 'title',
      text: 'Glossário técnico para a impressão SLA oca',
      level: 2
    },
    {
      type: 'glossary',
      items: [
          {
            term: 'Esvaziamento SLA',
            definition: 'O processo de converter um modelo 3D sólido numa estrutura oca com uma espessura de parede específica para poupar resina e tempo de impressão.'
          },
          {
            term: 'Efeito ventosa',
            definition: 'A força de vácuo criada quando uma cavidade oca fechada é separada da película de libertação durante a impressão.'
          },
          {
            term: 'Força de descolamento',
            definition: 'A tensão mecânica que experimentam o modelo e os suportes à medida que a camada curada se separa do fundo do tanque.'
          },
          {
            term: 'Retenção de resina',
            definition: 'A retenção de resina líquida não curada dentro de cantos internos, suportes e de texturas devido à tensão superficial.'
          }
        ]
    },
    {
      type: 'title',
      text: 'Lista de verificação para impressões ocas bem-sucedidas',
      level: 2
    },
    {
      type: 'summary',
      title: 'Lista de verificação SLA prelaminagem',
      items: [
          'Verifique se a espessura do esvaziamento é adequada para la escala do modelo.',
          'Confirme que são colocados pelo menos dois orifícios de drenagem nos pontos de impressão mais baixos.',
          'Verifique se existem vazios internos isolados que careçam de ventilação.',
          'Planeie a lavagem interna com álcool isopropílico (IPA) e a cura LED UV interna.'
        ]
    }
  ];

export const content: ToolLocaleContent & { ui: ResinHollowingDrainageCalculatorUI } = {
  slug, title, description,
  ui: {
    unitSystemLabel: 'Unidades',
    metricLabel: 'Métrico',
    imperialLabel: 'US',
    modelInputsLabel: 'Dados de Entrada do Modelo',
    volumeLabel: 'Volume Total do Modelo',
    heightLabel: 'Altura da Peça',
    complexityLabel: 'Complexidade Geométrica',
    resinTypeLabel: 'Tipo de Resina',
    simpleLabel: 'Simples',
    moderateLabel: 'Moderada',
    highLabel: 'Alta',
    standardLabel: 'Padrão',
    toughLabel: 'Resistente',
    engineeringLabel: 'Engenharia',
    resultsLabel: 'Resultado de Esvaziamento e Drenagem',
    wallThicknessLabel: 'Parede Recomendada',
    drainDiameterLabel: 'Diâmetro de Drenagem',
    drainHoleCountLabel: 'Furos Mínimos',
    adjustedSavingLabel: 'Economia Estimada de Resina',
    adjustedSavingNote: 'Ajustado para complexidade para levar em conta a resina líquida retida nas superfícies internas.',
    trapFactorLabel: 'Fator de Resina Presa',
    trapFactorHelp: 'Este fator muda com a complexidade geométrica para compensar a tensão superficial da resina viscosa em cavidades cegas.',
    theoreticalSavingLabel: 'Volume Vazio Teórico',
    trappedAllowanceLabel: 'Margeamento de Resina Presa',
    savingUnitLabel: 'Economia',
    percentLabel: '%',
    cm3Unit: 'cm3',
    cubicInUnit: 'in3',
    mmUnit: 'mm',
    inchUnit: 'in',
    mlUnit: 'ml',
    drainPlacementNote: 'Nota: Os furos de drenagem devem ser colocados perto do lado da plataforma de construção e dos pontos de coleta de resina mais baixos na orientação de impressão.',
    vacuumWarning: 'Corpos vazados sempre exigem pelo menos dois furos de drenagem para quebrar o vácuo contra o filme de liberação.',
    trappedResinWarning: 'Geometrias complexas retêm resina líquida no interior; este cálculo estima a tolerância.',
    checklistTitle: 'Lista de Verificação Pré-Fatiamento',
    checklistItems: ['Certifique-se de que os furos de drenagem estejam localizados na área próxima à plataforma de construção.', 'Verifique se a espessura da parede não fica abaixo de 1,5 mm.', 'Confirme que não há ilhas de resina fechadas ou vazios no modelo.'],
  },
  seo: seoData, faq: faqData, bibliography, howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
