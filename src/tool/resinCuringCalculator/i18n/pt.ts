import type { ToolLocaleContent } from '../../../types';
import type { ResinCuringCalculatorUI } from '../ui';

export const content: ToolLocaleContent<ResinCuringCalculatorUI> = {
  slug: 'calculadora-cura-resina-uv',
  title: 'Calculadora de Tempo de Cura de Resina UV',
  description: 'Determine o tempo exato de cura para as suas impressões 3D em resina. Com base na potência da lâmpada em watts, tipo de resina e distância. Guia técnico profissional.',
  ui: {
    title: 'Calculadora de Cura de Resina UV',
    configLabel: 'CONFIGURAÇÃO',
    brandLabel: 'Marca do Equipamento',
    powerLabel: 'Potência da Lâmpada (W)',
    powerUnit: 'W',
    distanceLabel: 'Distância dos LED (cm)',
    distanceUnit: 'cm',
    materialLabel: 'Tipo de Material',
    weightLabel: 'Peso Estimado (g)',
    weightUnit: 'g',
    ipaCheckbox: 'Limpo com Álcool Isopropílico?',
    safetyLabel: 'SEGURANÇA UV',
    safetySunglasses: 'Óculos UV Certificados',
    safetyGloves: 'Luvas de Nitrilo',
    sunglassesTooltip: 'A exposição direta a 405nm pode danificar permanentemente a sua retina.',
    glovesTooltip: 'A resina semicurada é altamente irritante. Use sempre proteção.',
    wavelength: 'Comprimento de onda',
    wavelengthValue: '405 nm',
    statusLabel: 'Estado',
    modeLabel: 'Modo',
    modeValue: 'Industrial',
    curingTime: 'm:s',
    startButton: 'Iniciar/Parar Ciclo de Cura',
    intensityChart: 'Intensidade UV (Dose)',
    nearLabel: 'Perto (2cm)',
    farLabel: 'Longe (30cm)',
    theoreticalLabel: 'Dose Teórica',
    yourConfigLabel: 'A sua Configuração',
    evaporateWarning: 'Deixe o álcool evaporar (mín. 10 min) para evitar manchas brancas.',
    safeDistance: 'Distância segura detetada para uma cura uniforme.',
    riskDistance: 'Risco de deformação térmica (Distância Crítica).',
    optimeStatus: 'Ideal',
    longStatus: 'Longo',
    fastStatus: 'Rápido',
  },
  seo: [
    {
      type: 'title',
      text: 'Calculadora de Tempo de Cura de Resina UV: Guia Profissional',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Na impressão 3D de resina (SLA, DLP ou LCD), a <strong>cura UV é o passo final essencial</strong> que converte uma peça macia e pegajosa num objeto resistente com propriedades mecânicas declaradas. Sem a pós-cura adequada, a sua impressão será estruturalmente fraca, tóxica e instável.',
    },
    {
      type: 'title',
      text: 'O que é a Cura de Resina UV?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Quando uma impressora 3D de resina termina a impressão, a peça está naquilo que os técnicos chamam de <strong>"estado verde" (green state)</strong>. Embora tenha a sua forma final, as cadeias moleculares do polímero não estão completamente ligadas entre si. A cura UV completa esta ligação, eliminando a viscosidade e melhorando a dureza, resistência e estabilidade térmica.',
    },
  ],
  faqTitle: 'Perguntas Frequentes',
  bibliographyTitle: 'Referências',
  faq: [
    {
      question: 'Quanto tempo demora a cura da resina UV?',
      answer: 'Depende da potência da sua lâmpada. Uma estação de 40W leva normalmente 2-4 minutos para peças de tamanho médio, enquanto lâmpadas DIY de menor potência podem necessitar de até 10 minutos.',
    },
    {
      question: 'Posso curar resina com uma lâmpada de unhas?',
      answer: 'É possível se a lâmpada cobrir o espetro de 405nm, mas estas lâmpadas costumam ter baixa potência (6W-12W), prolongando significativamente os tempos e podendo causar uma má cura superficial.',
    },
    {
      question: 'A cura em água é necessária?',
      answer: 'Não é obrigatória, mas altamente recomendada (Water Curing). A água bloqueia o contacto com o oxigénio, que inibe a polimerização superficial, resultando em peças menos pegajosas.',
    },
    {
      question: 'Como sei se a resina está devidamente curada?',
      answer: 'A peça deve estar completamente seca ao toque (não pegajosa), ter perdido o brilho "húmido", mostrar uma ligeira alteração de cor e não ter mais o cheiro forte da resina líquida.',
    },
    {
      question: 'Por que é que a minha resina transparente fica amarela?',
      answer: 'É o efeito de sobrecura ou temperatura excessiva. Use o fator "Transparente" na nossa calculadora para reduzir o tempo e mantenha os LED a pelo menos 5 cm de distância.',
    },
  ],
  bibliography: [
    {
      name: 'Formlabs - Pós-cura de Impressões em Resina',
      url: 'https://formlabs.com/blog/how-to-post-cure-3d-prints/',
    },
    {
      name: 'E3D-Online: Ciência da Cura UV',
      url: 'https://e3d-online.com/pages/resin-printing-guide',
    },
  ],
  howTo: [
    {
      name: 'Configure o seu equipamento',
      text: 'Selecione a marca da sua máquina UV e ajuste a potência em watts.',
    },
    {
      name: 'Ajuste os parâmetros físicos',
      text: 'Especifique a distância entre os LED e a peça, o tipo de resina e o peso estimado.',
    },
    {
      name: 'Inicie a cura',
      text: 'Use o tempo calculado como guia e monitorize a peça durante o processo.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Quanto tempo demora a cura da resina UV?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Uma estação de 40W leva normalmente 2-4 minutos para peças de tamanho médio, enquanto lâmpadas de menor potência podem necessitar de até 10 minutos.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Calculadora de Cura de Resina UV',
      description: 'Determine o tempo exato de cura para as suas impressões 3D em resina com base na potência da lâmpada, distância e tipo de material.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Como calcular o tempo de cura da resina UV',
      step: [
        {
          '@type': 'HowToStep',
          text: 'Configure o seu equipamento',
        },
        {
          '@type': 'HowToStep',
          text: 'Ajuste os parâmetros físicos',
        },
      ],
    },
  ],
};
