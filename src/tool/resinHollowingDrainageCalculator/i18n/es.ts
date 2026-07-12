import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ResinHollowingDrainageCalculatorUI } from '../ui';

const slug = 'calculadora-ahuecado-drenaje-resina-sla';
const title = 'Calculadora de Ahuecado y Drenaje para Resina SLA';
const description = 'Calcula el espesor de pared conservador, el diámetro del orificio de drenaje, el número mínimo de respiraderos y el ahorro de resina ajustado por complejidad para impresiones huecas de resina SLA y DLP.';

const faqData = [
  { question: '¿Por qué la calculadora siempre recomienda al menos dos orificios de drenaje?', answer: 'Una impresión de resina hueca necesita una vía para que la resina líquida salga y otra para que entre el aire. Dos aberturas también ayudan a romper el efecto de ventosa contra la película de liberación durante el despegue.' },
  { question: '¿Por qué el ahorro de resina es menor que el volumen hueco teórico?', answer: 'La resina líquida permanece en las paredes internas, nervaduras, esquinas, soportes y pequeños bolsillos. La calculadora resta un 5, 10 o 15 por ciento del volumen hueco teórico.' },
  { question: '¿1,5 mm siempre es suficiente espesor de pared?', answer: 'No. Es un mínimo de seguridad para muchas impresiones de resina de escritorio. Las piezas altas, pesadas, con cargas de ingeniería, entornos cálidos o lijado agresivo pueden requerir paredes más gruesas.' },
  { question: '¿Dónde deben colocarse los orificios de drenaje?', answer: 'Coloque los orificios lo más cerca posible del lado de la plataforma de construcción y de los puntos de recolección de resina más bajos en la orientación de impresión.' },
];

const howToData = [
  { name: 'Ingrese el volumen y la altura del modelo', text: 'Use el volumen del laminador después de soportes y orientación, luego ingrese la altura de la pieza en la orientación de impresión.' },
  { name: 'Elija la complejidad geométrica', text: 'Seleccione simple, moderada o alta para que la resina atrapada se reste del ahorro teórico de ahuecado.' },
  { name: 'Elija el tipo de resina', text: 'Seleccione estándar, resistente o ingeniería. Las resinas más viscosas reciben una recomendación de diámetro de drenaje mayor.' },
  { name: 'Revise las recomendaciones de pared y drenaje', text: 'Use el espesor de pared, diámetro de drenaje, cantidad de orificios y la lista de verificación antes de laminar el archivo final.' },
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
  inLanguage: 'es',
};

const seoData = [
    {
      type: 'title',
      text: '¿Qué hace la Calculadora de Ahuecado y Drenaje para Resina SLA?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Esta herramienta resuelve uno de los desafíos más críticos en la impresión 3D de resina SLA, DLP y LCD: la optimización de modelos huecos. Imprimir piezas de resina macizas es costoso, pesado y aumenta las fuerzas de despegue durante el proceso de impresión. Ahuecar el modelo reduce el uso de material, pero introducir cavidades huecas sin un drenaje adecuado genera resina no curada atrapada y fallos de impresión debido a fuerzas de vacío. Esta calculadora calcula el espesor de pared ideal, sugiere el diámetro y la cantidad correctos de orificios de drenaje y estima el ahorro real de resina al tener en cuenta la resina líquida que inevitablemente queda atrapada en las paredes internas de la pieza impresa.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
          {
            value: '1.5 mm',
            label: 'Espesor de pared mínimo recomendado para SLA de escritorio'
          },
          {
            value: '2 orificios',
            label: 'Número mínimo de respiraderos necesarios para romper el vacío'
          },
          {
            value: '10-15%',
            label: 'Reducción del volumen de resina debido a la retención en superficies internas'
          },
          {
            value: '30-70%',
            label: 'Reducción media del peso total lograda mediante el ahuecado'
          }
        ]
    },
    {
      type: 'title',
      text: 'Cómo el espesor de pared afecta el ahorro de resina',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'El espesor de la pared es la variable principal que determina la cantidad de resina ahorrada. Una pared más gruesa aumenta la resistencia estructural pero consume rápidamente más resina, lo que reduce la eficiencia del ahuecado. Por el contrario, una pared demasiado delgada será frágil, propensa a deformarse durante el curado y podría no soportar las fuerzas mecánicas de despegue a medida que la impresora separa cada capa de la película FEP. El objetivo es encontrar el punto óptimo donde el modelo conserve su forma y utilidad maximizando al mismo tiempo el ahorro de material.'
    },
    {
      type: 'proscons',
      title: 'Pros y contras de ahuecar impresiones de resina',
      items: [
          {
            pro: 'Reducción masiva en los costes de material y en el peso total de la impresión',
            con: 'Requiere postprocesamiento para lavar y curar las cavidades internas'
          },
          {
            pro: 'Una menor área superficial por capa reduce las fuerzas de despegue en la película FEP',
            con: 'Los orificios mal colocados pueden arruinar la estética visual del modelo'
          },
          {
            pro: 'Reduce el estrés térmico y la deformación durante el postcurado',
            con: 'Riesgo de que la resina líquida atrapada provoque que la pieza se agriete más tarde'
          }
        ]
    },
    {
      type: 'title',
      text: 'Entendiendo el efecto de ventosa en impresiones huecas de resina',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Cuando se imprime un modelo hueco, este forma una cámara cerrada al sumergirse en el tanque. Si esta cámara carece de orificios de ventilación, cada ciclo de elevación crea un fuerte vacío parcial (efecto de ventosa) entre la capa curada y la película de liberación. Esta fuerza tira de la impresión, lo que provoca la separación de capas, líneas de capa, fallos en los soportes o incluso el desprendimiento completo del modelo de la plataforma de construcción. Agregar orificios de ventilación permite la entrada de aire, neutralizando la diferencia de presión y garantizando ciclos de despegue suaves.'
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'El peligro de los espacios huecos sellados',
      html: 'Nunca deje un espacio hueco completamente sellado. La resina líquida atrapada dentro de una pieza impresa degradará lentamente las paredes curadas con el tiempo, lo que eventualmente provocará que el modelo se agriete, filtre resina tóxica o se desintegre por completo. Incluya siempre al menos dos orificios para lavar el interior y curarlo con una fuente de luz UV interna.'
    },
    {
      type: 'title',
      text: 'Mejores prácticas para la colocación de orificios de drenaje',
      level: 2
    },
    {
      type: 'list',
      items: [
          'Coloque los orificios de drenaje lo más cerca posible de la plataforma de construcción para permitir que la resina escape temprano durante la impresión.',
          'Use siempre al menos dos orificios: uno para permitir que fluya la resina líquida y otro para permitir la entrada de aire.',
          'Oriente los orificios en superficies no visibles, como la parte inferior de las bases o detrás de las juntas, para preservar la estética.',
          'Asegúrese de que cada cámara o bolsillo interno aislado tenga su propio conjunto de orificios de drenaje.'
        ]
    },
    {
      type: 'title',
      text: 'Cómo la calculadora ajusta la complejidad geométrica',
      level: 2
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
          {
            title: 'Geometría simple',
            description: 'Modelos de bajo detalle, esferas o bloques. Atrapa una cantidad mínima de resina (aprox. 5%) en superficies interiores planas.'
          },
          {
            title: 'Geometría moderada',
            description: 'Modelos de personajes o piezas mecánicas estándar. Los soportes internos y las curvas retienen una cantidad moderada de resina (aprox. 10%).',
            highlight: true
          },
          {
            title: 'Alta complejidad',
            description: 'Miniaturas muy detalladas, estructuras de celosía o canales huecos complejos. Retiene una cantidad significativa de resina (aprox. 15%+) debido a la acción capilar.'
          }
        ]
    },
    {
      type: 'title',
      text: 'Comprendiendo la viscosidad de la resina y el tamaño del orificio de drenaje',
      level: 2
    },
    {
      type: 'table',
      headers: [
          'Clase de resina',
          'Nivel de viscosidad',
          'Diámetro mín. de orificio',
          'Colocación recomendada'
        ],
      rows: [
          [
              'Resina estándar',
              'Bajo-Medio',
              '2.0 - 3.0 mm',
              'Base o superficies planas ocultas'
            ],
          [
              'Resistente / Flexible',
              'Medio-Alto',
              '3.0 - 4.5 mm',
              'Esquinas y juntas para evitar el despegue'
            ],
          [
              'Ingeniería / Calcinable',
              'Muy Alto',
              '4.5 - 6.0 mm',
              'Línea de visión directa para drenaje por gravedad'
            ]
        ]
    },
    {
      type: 'title',
      text: 'Cuándo aumentar el espesor de pared más allá de 1,5 mm',
      level: 2
    },
    {
      type: 'tip',
      title: 'La escala y la función dictan el espesor de la pared',
      html: 'Si bien 1.5 mm es un mínimo confiable para figuras de exhibición pequeñas, debe aumentar el espesor de la pared para impresiones más grandes. Para piezas de más de 150 mm de altura, apunte a paredes de 2.0 mm a 2.5 mm. Para componentes mecánicos de carga o piezas impresas con resinas flexibles/elastoméricas, las paredes deben ser de 3.0 mm o más gruesas para evitar el colapso estructural bajo carga.'
    },
    {
      type: 'title',
      text: 'Glosario técnico para la impresión SLA hueca',
      level: 2
    },
    {
      type: 'glossary',
      items: [
          {
            term: 'Ahuecado SLA',
            definition: 'El proceso de convertir un modelo 3D sólido en una carcasa hueca con un espesor de pared específico para ahorrar resina y tiempo de impresión.'
          },
          {
            term: 'Efecto ventosa',
            definition: 'La fuerza de vacío creada cuando una cavidad hueca cerrada se separa de la película de liberación durante la impresión.'
          },
          {
            term: 'Fuerza de despegue',
            definition: 'La tensión mecánica que experimentan el modelo y los soportes a medida que la capa curada se separa del fondo del tanque.'
          },
          {
            term: 'Retención de resina',
            definition: 'La retención de resina líquida no curada dentro de esquinas internas, soportes y texturas debido a la tensión superficial.'
          }
        ]
    },
    {
      type: 'title',
      text: 'Lista de verificación para impresiones huecas exitosas',
      level: 2
    },
    {
      type: 'summary',
      title: 'Lista de verificación SLA previa al laminado',
      items: [
          'Verifique que el espesor del ahuecado sea adecuado para la escala del modelo.',
          'Confirme que se coloquen al menos dos orificios de drenaje en los puntos de impresión más bajos.',
          'Verifique si hay huecos internos aislados que carezcan de ventilación.',
          'Planifique el lavado interno con alcohol isopropílico (IPA) y el curado LED UV interno.'
        ]
    }
  ];

export const content: ToolLocaleContent & { ui: ResinHollowingDrainageCalculatorUI } = {
  slug, title, description,
  ui: {
    unitSystemLabel: 'Unidades',
    metricLabel: 'Métrico',
    imperialLabel: 'US',
    modelInputsLabel: 'Entradas del modelo',
    volumeLabel: 'Volumen total del modelo',
    heightLabel: 'Altura de la pieza',
    complexityLabel: 'Complejidad geométrica',
    resinTypeLabel: 'Tipo de resina',
    simpleLabel: 'Simple',
    moderateLabel: 'Moderada',
    highLabel: 'Alta',
    standardLabel: 'Estándar',
    toughLabel: 'Resistente',
    engineeringLabel: 'Ingeniería',
    resultsLabel: 'Resultado de ahuecado y drenaje',
    wallThicknessLabel: 'Pared recomendada',
    drainDiameterLabel: 'Diámetro de drenaje',
    drainHoleCountLabel: 'Orificios mínimos',
    adjustedSavingLabel: 'Ahorro estimado de resina',
    adjustedSavingNote: 'Ajustado por complejidad para tener en cuenta la resina líquida retenida en superficies internas.',
    trapFactorLabel: 'Factor de resina atrapada',
    trapFactorHelp: 'Este factor cambia con la complejidad geométrica para compensar la tensión superficial de la resina viscosa en cavidades ciegas.',
    theoreticalSavingLabel: 'Volumen hueco teórico',
    trappedAllowanceLabel: 'Margen de resina retenida',
    savingUnitLabel: 'Ahorro',
    percentLabel: '%',
    cm3Unit: 'cm3',
    cubicInUnit: 'in3',
    mmUnit: 'mm',
    inchUnit: 'in',
    mlUnit: 'ml',
    drainPlacementNote: 'Nota: Los orificios de drenaje deben colocarse cerca del lado de la plataforma de construcción y de los puntos de recolección de resina más bajos en la orientación de impresión.',
    vacuumWarning: 'Los cuerpos huecos siempre requieren al menos dos orificios de drenaje para romper el vacío contra la película de liberación.',
    trappedResinWarning: 'Las geometrías complejas atrapan resina líquida en el interior; este cálculo estima el margen.',
    checklistTitle: 'Lista de verificación previa al laminado',
    checklistItems: ['Asegúrese de que los orificios de drenaje estén ubicados en el área cercana a la plataforma de construcción.', 'Verifique que el espesor de pared no sea inferior a 1,5 mm.', 'Confirme que no haya islas de resina cerradas o vacíos en el modelo.'],
  },
  seo: seoData, faq: faqData, bibliography, howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
