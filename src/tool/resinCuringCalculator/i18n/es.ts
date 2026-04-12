import type { ToolLocaleContent } from '../../../types';
import type { ResinCuringCalculatorUI } from '../ui';

export const content: ToolLocaleContent<ResinCuringCalculatorUI> = {
  slug: 'calculadora-tiempo-curado-resina-uv',
  title: 'Calculadora de Tiempo de Curado de Resina UV',
  description: 'Determina el tiempo exacto de curado para tus impresiones 3D en resina. Basada en potencia de lámpara W, tipo de resina y distancia. Guía técnica profesional.',
  ui: {
    title: 'Calculadora de Tiempo de Curado UV',
    configLabel: 'CONFIGURACIÓN',
    brandLabel: 'Marca Maquinaria',
    powerLabel: 'Potencia Lámpara (W)',
    powerUnit: 'W',
    distanceLabel: 'Distancia LEDs (cm)',
    distanceUnit: 'cm',
    materialLabel: 'Tipo de Material',
    weightLabel: 'Peso Estimado (g)',
    weightUnit: 'g',
    ipaCheckbox: '¿Lavado con Alcohol Isopropílico?',
    safetyLabel: 'SEGURIDAD UV',
    safetySunglasses: 'Gafas UV Certificadas',
    safetyGloves: 'Guantes de Nitrilo',
    sunglassesTooltip: 'La exposición directa a 405nm puede dañar la retina de forma permanente.',
    glovesTooltip: 'La resina semi-curada es altamente irritante. Usa siempre protección.',
    wavelength: 'Longitud',
    wavelengthValue: '405 nm',
    statusLabel: 'Estado',
    modeLabel: 'Modo',
    modeValue: 'Industrial',
    curingTime: 'm:s',
    startButton: 'Iniciar/Detener Ciclo de Curado',
    intensityChart: 'Intensidad UV (Dosis)',
    nearLabel: 'Cerca (2cm)',
    farLabel: 'Lejos (30cm)',
    theoreticalLabel: 'Dosis Teórica',
    yourConfigLabel: 'Tu Configuración',
    evaporateWarning: 'Evaporar alcohol (min. 10 min) para evitar manchas blancas.',
    safeDistance: 'Distancia segura detectada para curado uniforme.',
    riskDistance: 'Riesgo de deformación por calor (Distancia Crítica).',
    optimeStatus: 'Óptimo',
    longStatus: 'Largo',
    fastStatus: 'Rápido',
  },
  seo: [
    {
      type: 'title',
      text: 'Calculadora de Tiempo de Curado de Resina UV: Guía Profesional',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En impresión 3D con resina (SLA, DLP o LCD), el <strong>curado UV es el paso final imprescindible</strong> que convierte una pieza blanda y pegajosa en un objeto resistente con las propiedades mecánicas declaradas. Sin el post-curado correcto, tu pieza será structuralmente débil, tóxica y inestable.',
    },
    {
      type: 'title',
      text: '¿Qué es el Curado de Resina UV?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Cuando una impresora 3D de resina termina de imprimir, la pieza se encuentra en un estado que los técnicos llaman <strong>"estado verde"</strong>. Aunque tiene su forma final, las cadenas moleculares del plástico no están completamente entrelazadas. El curado UV completa la reticulación, eliminando la pegajosidad y mejorando dureza, resistencia y estabilidad térmica.',
    },
  ],
  faqTitle: 'Preguntas Frecuentes',
  bibliographyTitle: 'Referencias',
  faq: [
    {
      question: '¿Cuánto tiempo hay que curar la resina UV?',
      answer: 'Depende de la potencia de la lámpara. Una estación de 40W suele tardar entre 2 y 4 minutos para piezas medianas, mientras que lámparas caseras pueden requerir hasta 10 minutos.',
    },
    {
      question: '¿Se puede curar resina con una lámpara de uñas?',
      answer: 'Es posible si la lámpara cubre el espectro de 405nm, pero estas lámparas suelen tener potencias bajas (6W-12W), lo que alarga mucho los tiempos y puede dar un curado superficial deficiente.',
    },
    {
      question: '¿Es necesario curar la resina en agua?',
      answer: 'No es obligatorio, pero es muy recomendable (Water Curing). El agua bloquea el contacto con el oxígeno, el cual inhibe la polimerización superficial, resultando en piezas menos pegajosas.',
    },
    {
      question: '¿Cómo saber si una pieza de resina está bien curada?',
      answer: 'La pieza debe estar totalmente seca al tacto (no pegajosa), haber perdido el brillo "húmedo", tener un cambio ligero de tono y carecer del fuerte olor a resina líquida.',
    },
    {
      question: '¿Por qué mi resina transparente se vuelve amarilla?',
      answer: 'Es el efecto del sobre-curado o el exceso de temperatura. Usa el factor de "Transparente" en nuestra calculadora para reducir el tiempo y evita que los LEDs estén a menos de 5cm.',
    },
  ],
  bibliography: [
    {
      name: 'Formlabs - Post-curing Resin Prints',
      url: 'https://formlabs.com/blog/how-to-post-cure-3d-prints/',
    },
    {
      name: 'E3D-Online: UV Curing Science',
      url: 'https://e3d-online.com/pages/resin-printing-guide',
    },
  ],
  howTo: [
    {
      name: 'Configura tu equipamiento',
      text: 'Selecciona la marca de tu máquina UV y ajusta la potencia en vatios.',
    },
    {
      name: 'Ajusta parámetros físicos',
      text: 'Especifica la distancia entre LEDs y pieza, el tipo de resina y peso estimado.',
    },
    {
      name: 'Inicia el curado',
      text: 'Usa el tiempo calculado como guía y monitorea la pieza durante el proceso.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Cuánto tiempo hay que curar la resina UV?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Depende de la potencia de la lámpara. Una estación de 40W suele tardar entre 2 y 4 minutos para piezas medianas.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Calculadora de Tiempo de Curado de Resina UV',
      description: 'Determina el tiempo exacto de curado para tus impresiones 3D en resina basado en potencia, distancia y tipo de material.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Cómo calcular el tiempo de curado de resina UV',
      step: [
        {
          '@type': 'HowToStep',
          text: 'Configura tu equipamiento',
        },
        {
          '@type': 'HowToStep',
          text: 'Ajusta parámetros físicos',
        },
      ],
    },
  ],
};
