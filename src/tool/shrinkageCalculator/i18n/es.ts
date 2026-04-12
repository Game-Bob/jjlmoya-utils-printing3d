import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ShrinkageCalculatorUI } from '../ui';

const slug = 'calculadora-contraccion-impresion-3d';
const title = 'Calculadora de Contracción 3D: Factor de Escala y Shrinkage';
const description = 'Calcula cuánto debes escalar tus diseños 3D según el material (ABS, Nylon, ASA) para compensar la contracción térmica y obtener medidas exactas.';

const faqData = [
  {
    question: '¿Por qué el ABS se contrae más que el PLA?',
    answer: 'El ABS es un polímero amorfo que requiere temperaturas más altas para extruirse. Al enfriarse desde 250°C hasta temperatura ambiente, el gradiente térmico es mayor, provocando que las moléculas se junten más agresivamente que en el PLA.',
  },
  {
    question: '¿Cuándo debo usar la calibración manual?',
    answer: 'Debes usarla siempre que cambies de marca de filamento o cuando necesites tolerancias mecánicas inferiores a 0.1mm. El coeficiente de contracción puede variar incluso entre distintos colores de una misma marca.',
  },
  {
    question: '¿El relleno (infill) afecta a la contracción?',
    answer: 'Sí. A mayor densidad de relleno, mayor cantidad de material ejerciendo fuerza hacia el centro de la pieza mientras se enfría. Las piezas sólidas suelen contraerse ligeramente más que las piezas huecas.',
  },
];

const howToData = [
  {
    name: 'Selecciona tu material',
    text: 'Elige entre los materiales preajustados (ABS, ASA, Nylon, etc.) para aplicar coeficientes estándar de la industria.',
  },
  {
    name: 'Calibra con una pieza real',
    text: 'Si necesitas precisión total, imprime un cubo de 100mm, mídelo una vez frío e introduce los datos en el modo de calibración.',
  },
  {
    name: 'Copia el factor al Slicer',
    text: 'Copia el porcentaje de escala resultante y aplícalo en los ejes correspondientes de tu software de laminación (Cura, PrusaSlicer).',
  },
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

const howToSchema: WithContext<HowToThing> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'es',
};

export const content: ToolLocaleContent<ShrinkageCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    tabPresets: 'Ajustes por Material',
    tabCalibration: 'Calibración Manual',
    labelDefaultMaterial: 'Material Predeterminado',
    labelEstimatedShrinkage: 'Contracción Estimada',
    unitPercent: '%',
    labelDesignSize: 'Medida en Diseño (Slicer)',
    labelRealSize: 'Medida Pieza Impresa (Real)',
    unitMm: 'mm',
    labelAxesCompensation: 'Compensación por Ejes',
    labelAxisXY: 'X/Y',
    labelAxisZ: 'Z',
    textZWarning: '* El eje Z suele contraerse menos debido a la adhesión entre capas.',
    labelRecommendationTitle: 'Recomendación Técnica',
    labelResultSlicerScale: 'PORCENTAJE DE ESCALA (SLICER)',
    labelResultFactor: 'FACTOR MULTIPLICADOR',
    btnCopy: 'Copiar Porcentaje',
    btnCopied: '¡Copiado!',
    recommendations: {
      'ABS': 'Se recomienda una temperatura de cámara de al menos 40°C para minimizar el warping adicional al shrinkage.',
      'ASA': 'Excelente resistencia UV. Reduce el enfriamiento de capa para mejorar la adhesión estructural.',
      'Nylon': 'Material muy higroscópico. Secar a 80°C durante 6-8h antes de imprimir para evitar burbujas.',
      'PETG': 'Menor contracción. Usa un multiplicador de flujo del 95-98% si tienes sobrextrusión en piezas densas.',
      'PLA': 'Contracción mínima. Asegura un buen flujo de aire (ventilador de capa al 100%) para detalles finos.'
    }
  },
  seo: [
    {
      type: 'title',
      text: 'Calculadora de Contracción en Impresión 3D: Precisión Dimensional',
      level: 1,
    },
    {
      type: 'paragraph',
      html: 'Si eres un entusiasta de la <strong>impresión 3D</strong>, es muy probable que te hayas enfrentado a este problema: diseñas una pieza con medidas perfectas (por ejemplo, un cubo de 20x20x20 mm), la imprimes, y al medirla con el calibre descubres que mide 19.7 mm. ¿Qué ha pasado? La respuesta es la <strong>contracción del material</strong> o <i>shrinkage</i>.',
    },
    {
      type: 'paragraph',
      html: 'La contracción es un fenómeno físico inevitable que ocurre cuando los termoplásticos pasan de su estado fundido (a altas temperaturas) a su estado sólido a temperatura ambiente. Al enfriarse, las moléculas se reorganizan y se "aprietan", reduciendo el volumen total de la pieza. Nuestra <strong>calculadora de contracción</strong> está diseñada para ayudarte a predecir este cambio y ajustar la escala en tu slicer para que tus piezas encajen a la primera.',
    },
    {
      type: 'title',
      text: '¿Por qué se contraen los plásticos?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En la impresión FDM (Modelado por Deposición Fundida), depositamos capas de plástico caliente (entre 200°C y 300°C) sobre una superficie. A medida que el material se enfría, sufre lo que se conoce como <strong>coeficiente de expansión térmica</strong>. Básicamente, la energía térmica mantiene las moléculas separadas; cuando esa energía desaparece, las fuerzas intermoleculares las atraen más cerca unas de otras.',
    },
    {
      type: 'paragraph',
      html: 'No todos los materiales se comportan igual. Los plásticos amorfos (como el PLA) tienen una estructura desordenada que tiende a contraerse menos. En cambio, los plásticos que tienden a cristalizar o que requieren temperaturas muy altas (como el ABS o el Nylon) tienen una contracción mucho más agresiva y difícil de controlar.',
    },
    {
      type: 'title',
      text: 'Materiales Comunes y sus Rangos de Contracción',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'ABS (Acrilonitrilo Butadieno Estireno): 0.8% – 2.0%. Es uno de los materiales más difíciles debido a su alta contracción, que a menudo provoca "warping" (deformación de las esquinas).',
        'ASA: 0.5% – 0.9%. Una alternativa al ABS más resistente a los rayos UV y con una contracción algo más contenida.',
        'Nylon (PA): 0.7% – 2.5%. Dependiendo de si tiene carga de fibra de carbono o de vidrio, su contracción puede variar drásticamente.',
        'PETG: 0.2% – 0.5%. Muy estable dimensionalmente, ideal para piezas mecánicas que no requieren la resistencia térmica del ABS.',
        'PLA: 0.1% – 0.3%. El estándar de oro para la facilidad de uso; su contracción es casi despreciable para la mayoría de los usos.',
      ],
    },
    {
      type: 'title',
      text: 'Cómo calcular el Factor de Escala',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Muchos usuarios cometen el error de simplemente "sumar el porcentaje" (si falta un 2%, escalan al 102%). Sin embargo, matemáticamente para compensar una pérdida, la escala debe ser ligeramente distinta. La fórmula correcta que utiliza nuestra calculadora es: <br><strong>Factor de Escala = 1 / (1 - S)</strong>',
    },
    {
      type: 'paragraph',
      html: 'Donde <strong>S</strong> es el porcentaje de contracción expresado en decimales (ej: 0.02 para un 2%). Por ejemplo, para un material que se contrae un 2%, el factor de escala es 1.0204, lo que significa que en el slicer (Cura, PrusaSlicer, Bambu Studio) debemos poner la escala al <strong>102.04%</strong>.',
    },
    {
      type: 'title',
      text: 'Calibración Manual: Medida Deseada vs. Real',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El proceso de calibración inversa es sencillo: imprime un objeto de prueba con una medida conocida (por ejemplo, un cubo de calibración de 100mm). Una vez que esté totalmente frío (esperar al menos 30 minutos es crucial), mide la pieza con un calibre digital. Introduce ambos valores en la calculadora y esta te dará el porcentaje exacto de ajuste para ese rollo de filamento.',
    },
    {
      type: 'title',
      text: 'Contracción No Uniforme: El Problema de los Ejes X, Y y Z',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En la impresión 3D, la física no es igual en todas las direcciones. Debido a que las capas se depositan una sobre otra, la <strong>adhesión entre capas</strong> en el eje Z suele limitar la contracción vertical. Normalmente, encontrarás que las medidas en el plano horizontal (ejes X e Y) requieren más compensación que la altura (eje Z).',
    },
    {
      type: 'tip',
      title: 'Consejo para Profesionales',
      html: '<p>Si estás trabajando con nylon o materiales técnicos, siempre mide la pieza 24 horas después de la impresión. Algunos plásticos absorben humedad del ambiente y pueden "hincharse" ligeramente después de enfriarse, alterando la medida final.</p>',
    },
    {
      type: 'title',
      text: 'Factores que afectan la precisión final',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Temperatura del Extrusor: A mayor temperatura, el material entra más expandido pero también suele sufrir un enfriamiento más brusco.',
        'Temperatura de la Cama: Una cama caliente evita que la base de la pieza se contraiga más rápido que la parte superior, reduciendo el warping.',
        'Densidad de Relleno (Infill): Las piezas muy densas tienen más masa de plástico ejerciendo fuerza de contracción interna hacia el centro.',
        'Ventilador de Capa: En materiales como el ABS, un ventilador demasiado fuerte puede provocar grietas y una contracción excesiva e irregular.',
      ],
    },
  ],
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Referencias',
  bibliography: [
    {
      name: 'Simplify3D: Dimensional Accuracy and Shrinkage',
      url: 'https://www.simplify3d.com/resources/print-quality-troubleshooting/dimensional-accuracy/',
    },
    {
      name: 'Prusa Research: Material Table and Shrinkage Factors',
      url: 'https://help.prusa3d.com/materials',
    },
    {
      name: 'MatterHackers: Understanding 3D Printing Material Shrinkage',
      url: 'https://www.matterhackers.com/articles/how-to-fix-shrinkage-and-warping',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
