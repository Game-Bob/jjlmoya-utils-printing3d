import type { ToolLocaleContent } from '../../../types';
import type { FlowCalculatorUI } from '../ui';

export const content: ToolLocaleContent<FlowCalculatorUI> = {
  slug: 'calculadora-fluxo-volumetrico',
  title: 'Fluxo Volumétrico: Entendendo os Reais Limites de Velocidade da sua Impressora 3D',
  description: 'Calcule a taxa de fluxo volumétrico máximo da sua impressora 3D. Entenda as reais limitações de hardware do seu hotend.',
  ui: {
    title: 'Calculadora de Fluxo Volumétrico',
    autoAdjust: 'AJUSTE AUTOMÁTICO 120%',
    configLabel: 'CONFIGURAÇÃO',
    nozzleLabel: 'BICO',
    lineWidthLabel: 'LARGURA DA LINHA',
    layerHeightLabel: 'ALTURA DA CAMADA',
    speedLabel: 'VELOCIDADE',
    temperatureLabel: 'TEMPERATURA',
    materialLabel: 'MATERIAL',
    hotendLimitLabel: 'LIMITE DO HOTEND',
    hotendTooltip: 'Capacidade base de fusão do hardware sem considerar o material ou a temperatura.',
    presetEnder: 'Padrão MK8/V6. Zona de fusão curta.',
    presetBambu: 'Hotend cerâmico de alta velocidade.',
    presetVolcano: 'Zona de fusão extra longa de 21 mm.',
    presetHF: 'Extrusoras de ultra-alto desempenho customizadas.',
    baseLimitLabel: 'LIMITE BASE',
    resetButton: 'Redefinir valores',
    volumetricFlowLabel: 'FLUXO VOLUMÉTRICO REAL',
    maxSpeedLabel: 'VELOCIDADE MÁXIMA',
    statusLabel: 'STATUS',
    safeStatus: 'SEGURO',
    stratifiedLabel: 'DESEMPENHO ESTRATIFICADO',
    chartHeightLabel: 'ALTURA DA CAMADA (MM)',
    chartSpeedLabel: 'LIMITE DE VELOCIDADE (MM/S)',
    chartSafeLabel: 'INTERVALO SEGURO',
    copyButton: 'COPIAR LIMITE EFETIVO',
  },
  seo: [
    {
      type: 'title',
      text: 'Fluxo Volumétrico: Entendendo os Reais Limites de Velocidade da sua Impressora 3D',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Na impressão 3D FDM, o <strong>fluxo volumétrico</strong> é o fator que determina o quão rápido você pode imprimir antes que o hardware falhe. Embora as velocidades dos motores possam parecer impressionantes, é a capacidade do seu hotend de derreter o plástico consistentemente que realmente importa.',
    },
    {
      type: 'title',
      text: 'O que é Fluxo Volumétrico (mm³/s)?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'É o volume total de filamento extrudado por segundo. É calculado multiplicando três variáveis principais: velocidade de impressão, largura da linha e altura da camada. Se você tentar extrudar mais plástico do que o seu bloco de aquecimento pode derreter, você enfrentará a temida <strong>subextrusão</strong>.',
    },
  ],
  faqTitle: 'Perguntas Frequentes',
  bibliographyTitle: 'Referências',
  faq: [
    {
      question: 'Qual é o fluxo máximo da minha impressora?',
      answer: 'Depende inteiramente do seu hotend. Um hotend padrão (tipo V6) derrete tipicamente entre 10 e 12 mm³/s. Modelos de alto fluxo como Volcano ou Revo High Flow alcançam 30-35 mm³/s.',
    },
    {
      question: 'Por que o PETG flui mais lentamente que o PLA?',
      answer: 'O PETG tem uma viscosidade muito maior quando fundido. Isso significa que ele oferece mais resistência ao passar pelo bico, por isso seu limite de fluxo efetivo é tipicamente 15% menor que o do PLA à mesma temperatura.',
    },
    {
      question: 'Como a largura da linha afeta o fluxo?',
      answer: 'A largura da linha é o multiplicador mais direto junto com a altura da camada. Se você passar de 0,4 mm para 0,6 mm de largura à mesma velocidade, você está exigindo 50% mais fluxo da sua extrusora.',
    },
  ],
  bibliography: [
    {
      name: 'E3D-Online: Taxa de fluxo e limites de velocidade',
      url: 'https://e3d-online.com/pages/revo-high-flow-volumetric-flow-rate-calculator',
    },
    {
      name: 'OrcaSlicer Wiki: Calibração',
      url: 'https://github.com/OrcaSlicer/OrcaSlicer/wiki/Calibration',
    },
    {
      name: 'Bambu Lab: Calibração de Taxa de Fluxo',
      url: 'https://wiki.bambulab.com/en/software/bambu-studio/calibration_flow_rate',
    },
  ],
  howTo: [
    {
      name: 'Configure seu hardware',
      text: 'Selecione o diâmetro do bico e escolha um preset de hotend popular.',
    },
    {
      name: 'Ajuste seus parâmetros',
      text: 'Mova os controles deslizantes para largura da linha, altura da camada e velocidade de impressão.',
    },
    {
      name: 'Copie o valor',
      text: 'Copie o valor do fluxo máximo e use-o em seu slicer.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Qual é o fluxo máximo da minha impressora?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Depende inteiramente do seu hotend. Um hotend padrão derrete tipicamente entre 10 e 12 mm³/s.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Calculadora de Fluxo Volumétrico',
      description: 'Calcule a taxa de fluxo volumétrico máximo da sua impressora 3D.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Como calcular o fluxo volumétrico',
      step: [
        {
          '@type': 'HowToStep',
          text: 'Configure seu hardware',
        },
        {
          '@type': 'HowToStep',
          text: 'Ajuste seus parâmetros',
        },
      ],
    },
  ],
};
