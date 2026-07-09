import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InfillWeightSimulatorUI } from '../ui';

const slug = 'calculadora-porcentaje-relleno-peso-3d';
const title = 'Calculadora de Porcentaje de Relleno y Peso en 3D';
const description =
  'Estima el peso de la pieza, el filamento ahorrado y el costo de material al cambiar el porcentaje y patrón de relleno a partir de un peso de referencia con 100% de relleno.';

const faqData = [
  {
    question: '¿Puedo estimar el peso de una impresión 3D a partir del peso con 100% de relleno?',
    answer:
      'Sí, pero la estimación debe mantener los cascarones, paredes, capas superiores e inferiores separadas del relleno interno. Una pieza no se vuelve ingrávida con 0% de relleno porque el perímetro exterior sigue usando material.',
  },
  {
    question: '¿Por qué el patrón de relleno cambia el peso estimado?',
    answer:
      'Distintos patrones generan diferentes longitudes de trayectoria a la misma densidad nominal. Los patrones de líneas y concéntricos suelen ser más ligeros, mientras que el panal, cúbico y triángulos tienden a añadir más longitud de pared interna.',
  },
  {
    question: '¿El peso del slicer es más preciso que esta calculadora?',
    answer:
      'Un slicer es más preciso una vez que se conocen el modelo, la boquilla, el ancho de extrusión, el número de paredes, las capas superiores y el perfil de material. Esta calculadora está diseñada para planificar rápidamente antes de laminar muchas versiones.',
  },
  {
    question: '¿Qué porcentaje de cascarón debo usar?',
    answer:
      'Para muchas piezas FDM decorativas o de tamaño mediano, un 20-35% de cascarón es un rango de partida práctico. Las piezas pequeñas, objetos delgados y piezas con muchos agujeros pueden tener un porcentaje de cascarón más alto.',
  },
];

const howToData = [
  {
    name: 'Partir de una referencia con 100% de relleno',
    text: 'Usa el peso reportado por tu laminador para el mismo modelo con 100% de relleno, o pesa una impresión de referencia conocida completamente densa.',
  },
  {
    name: 'Elegir el relleno objetivo y el patrón',
    text: 'Mueve el deslizador de relleno y elige el patrón más cercano a la configuración del laminador que planeas usar.',
  },
  {
    name: 'Ajustar las suposiciones de cascarón y desperdicio',
    text: 'Aumenta el porcentaje de cascarón para modelos delgados o con mucho perímetro, luego añade desperdicio por purga, faldón, ala, soportes e inicios fallidos.',
  },
  {
    name: 'Leer los ahorros de peso y costo',
    text: 'Compara el peso estimado final con la línea base de 100% de relleno para decidir si el ahorro de material vale la pena frente a la pérdida de rigidez.',
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

const howToSchema: WithContext<HowTo> = {
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'es',
};

export const content: ToolLocaleContent<InfillWeightSimulatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Parámetros de peso de relleno',
    resultsAriaLabel: 'Resultados estimados del peso de impresión',
    unitSystemLabel: 'Unidades',
    metricLabel: 'Métrico',
    imperialLabel: 'US',
    currencyLabel: 'Moneda',
    currencyOptions: [
      { code: 'USD', label: '$', symbol: '$' },
      { code: 'EUR', label: '€', symbol: '€' },
      { code: 'GBP', label: '£', symbol: '£' },
      { code: 'CAD', label: 'C$', symbol: 'C$' },
      { code: 'AUD', label: 'A$', symbol: 'A$' },
      { code: 'CHF', label: 'Fr', symbol: 'Fr' },
      { code: 'CNY', label: '¥', symbol: '¥' },
      { code: 'INR', label: '₹', symbol: '₹' },
      { code: 'BRL', label: 'R$', symbol: 'R$' },
      { code: 'MXN', label: '$', symbol: '$' },
      { code: 'RUB', label: '₽', symbol: '₽' },
      { code: 'PLN', label: 'zł', symbol: 'zł' },
      { code: 'SEK', label: 'kr', symbol: 'kr' },
      { code: 'NOK', label: 'kr', symbol: 'kr' },
      { code: 'DKK', label: 'kr', symbol: 'kr' },
      { code: 'TRY', label: '₺', symbol: '₺' },
      { code: 'JPY', label: '¥', symbol: '¥' },
    ],
    fullWeightLabel: 'Peso con 100% de relleno',
    fullWeightHint: 'Usa el valor del laminador para el mismo modelo con densidad total.',
    infillLabel: 'Relleno objetivo',
    patternLabel: 'Patrón de relleno',
    patternOptions: [
      { value: 'lines', label: 'Líneas - trayectorias ligeras' },
      { value: 'grid', label: 'Cuadrícula - línea base del laminador' },
      { value: 'triangles', label: 'Triángulos - celdas rígidas' },
      { value: 'gyroid', label: 'Giroid - entramado suave' },
      { value: 'cubic', label: 'Cúbico - rigidez 3D' },
      { value: 'honeycomb', label: 'Panal - paredes densas' },
      { value: 'concentric', label: 'Concéntrico - sigue el contorno' },
    ],
    shellShareLabel: 'Porcentaje de cascarón',
    shellShareHint: 'Paredes, capas superiores, capas inferiores y zonas macizas que no escalan con el relleno.',
    spoolPriceLabel: 'Precio del filamento',
    wasteLabel: 'Desperdicio',
    estimatedWeightLabel: 'Peso estimado de la pieza',
    filamentSavedLabel: 'Filamento ahorrado',
    materialCostLabel: 'Costo de material',
    costSavedLabel: 'Costo ahorrado',
    effectiveDensityLabel: 'Densidad efectiva',
    shellLabel: 'Cascarón',
    infillCoreLabel: 'Núcleo de relleno',
    patternImpactLabel: 'Multiplicador de patrón',
    comparisonLabel: 'Comparación con línea base',
    fullInfillLabel: '100% relleno',
    targetInfillLabel: 'Configuración objetivo',
    insightLow: 'Un relleno muy bajo puede ahorrar mucho filamento, pero las superficies superiores, los bosses para tornillos, los clips y las zonas de carga pueden necesitar paredes extra o modificadores locales.',
    insightBalanced: 'Esta es una zona de planificación equilibrada para muchas impresiones visuales y funcionales ligeras: el cascarón sostiene la forma mientras el relleno controla la rigidez y el costo.',
    insightHigh: 'Un relleno alto reduce rápidamente el margen de ahorro. Considera más paredes, un patrón más fuerte o cambiar de material antes de usar relleno denso en todas partes.',
  },
  seo: [
    { type: 'title', text: 'Cómo funciona una calculadora de porcentaje de relleno y peso en 3D', level: 2 },
    {
      type: 'paragraph',
      html: 'Una <strong>calculadora de porcentaje de relleno y peso en 3D</strong> estima cuánto plástico queda cuando un modelo se imprime con menos del 100% de densidad interna. El detalle importante es que el peso FDM no es una simple multiplicación del peso total por el porcentaje de relleno. Un modelo impreso al 20% de relleno no suele pesar el 20% de la versión completamente densa, porque las paredes, capas superiores, capas inferiores, zonas macizas pequeñas, faldones e interfaces de soporte siguen consumiendo filamento. Esta calculadora parte del peso conocido o reportado por el laminador al 100% de relleno, separa un porcentaje de cascarón configurable, y luego escala el núcleo interno según el relleno objetivo y el comportamiento del patrón.',
    },
    {
      type: 'paragraph',
      html: 'El método está diseñado para comparaciones rápidas antes de dedicar tiempo a laminar un archivo muchas veces. Si un soporte de PETG completamente denso se estima en 240 g, cambiar al 20% giroid puede no producir una pieza de 48 g. Con un 28% de cascarón, la masa del perímetro ya es de unos 67 g antes de contar la densidad interna. El núcleo de relleno añade entonces material según la densidad y el multiplicador de patrón seleccionados. El resultado es una estimación de planificación más realista que la matemática lineal de relleno, pero aún lo suficientemente rápida para decisiones tempranas.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '20-35%', label: 'Porcentaje de cascarón típico para muchas piezas FDM medianas', icon: 'mdi:cube-outline' },
        { value: '0.88x', label: 'Multiplicador de contorno ligero para relleno concéntrico', icon: 'mdi:chart-line' },
        { value: '1.16x', label: 'Multiplicador de trayectoria densa para planificación con panal', icon: 'mdi:hexagon-multiple' },
        { value: '100%', label: 'Peso de referencia usado como línea base para ahorros', icon: 'mdi:weight-gram' },
      ],
    },
    {
      type: 'tip',
      title: 'Usa el mismo perfil del laminador para la referencia',
      html: '<p>Para la estimación más limpia, genera el peso con 100% de relleno usando la misma boquilla, ancho de extrusión, número de paredes, capas superiores, capas inferiores, densidad de material y configuración de soportes que usarás para la impresión objetivo. Cambiar esas configuraciones altera la masa del cascarón, por lo que la comparación solo de relleno pierde significado.</p>',
    },

    { type: 'title', text: 'Por qué el peso del relleno no es lineal', level: 2 },
    {
      type: 'paragraph',
      html: 'La expresión <em>porcentaje de relleno</em> suena como un valor de densidad directo, pero los laminadores lo aplican solo a la región interna que queda después de generar los perímetros y las superficies macizas. Un cubo simple con dos paredes y seis capas superiores puede tener un gran volumen interno, por lo que el porcentaje de relleno afecta fuertemente al peso. Un soporte de teléfono delgado, una carcasa de engranajes con muchos agujeros, o una miniatura con extremidades estrechas pueden tener tanta geometría perimetral que reducir el relleno produce un ahorro menor de lo esperado. Por eso la calculadora expone el <strong>porcentaje de cascarón</strong> en lugar de ocultarlo.',
    },
    {
      type: 'table',
      headers: ['Tipo de modelo', 'Porcentaje de cascarón probable', 'Qué significa para los ahorros'],
      rows: [
        ['Carcasa rectangular grande', '15-25%', 'La mayor parte de la masa es volumen interno, por lo que el relleno cambia el peso significativamente.'],
        ['Figura decorativa o modelo orgánico', '25-45%', 'Muchas curvas y zonas estrechas crean geometría perimetral pesada.'],
        ['Soporte o panel delgado', '35-60%', 'Las paredes y superficies dominan; reducir el relleno puede ahorrar menos plástico.'],
        ['Clip mecánico pequeño', '45-70%', 'El modelo puede ser casi macizo solo por los perímetros.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Cuando la estimación parece demasiado pesada',
      badge: 'Verificar cascarón',
      html: '<p>Si una configuración de 10% de relleno sigue produciendo un peso estimado alto, el porcentaje de cascarón probablemente es grande. Eso puede ser correcto para piezas pequeñas o delgadas. Verifica el número de paredes, el grosor superior e inferior, y si el modelo tiene muchas islas separadas o nervaduras estrechas.</p>',
    },
    {
      type: 'summary',
      title: 'Interpretación práctica',
      items: [
        'El porcentaje de relleno afecta solo al núcleo interno, no a toda la impresión.',
        'Una pieza con 0% de relleno todavía tiene paredes, pieles, costuras y a veces pequeñas características macizas.',
        'La referencia de peso completo, el porcentaje de cascarón, la elección de patrón y el margen de desperdicio juntos producen un mejor número de planificación.',
      ],
    },

    { type: 'title', text: 'Multiplicadores de peso por patrón de relleno', level: 2 },
    {
      type: 'paragraph',
      html: 'Dos impresiones pueden estar ambas configuradas al 25% de relleno y aun así usar diferentes cantidades de filamento porque la geometría de la trayectoria cambia. Los patrones de líneas y concéntricos suelen generar trayectorias internas más ligeras porque evitan algunas estructuras de cruce. La cuadrícula, los triángulos, el cúbico, el giroid y el panal crean diferentes cantidades de solapamiento, refuerzo direccional y longitud de trayectoria. La calculadora modela esto con un pequeño <strong>multiplicador de patrón</strong> aplicado al núcleo interno, no a toda la pieza.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Líneas y concéntrico',
          description: 'Útil cuando el peso mínimo y la impresión rápida importan más que la rigidez uniforme.',
          icon: 'mdi:format-line-spacing',
          points: ['Menor densidad de trayectoria', 'Bueno para piezas decorativas', 'La resistencia direccional puede ser desigual'],
        },
        {
          title: 'Cuadrícula y giroid',
          description: 'Elecciones equilibradas para impresiones visuales y funcionales comunes donde la rigidez importa.',
          icon: 'mdi:grid',
          highlight: true,
          points: ['Línea base predecible del laminador', 'Buen compromiso rigidez-peso', 'El giroid distribuye las cargas uniformemente'],
        },
        {
          title: 'Cúbico, triángulos, panal',
          description: 'Elecciones de planificación más pesadas que pueden mejorar la rigidez pero reducen el ahorro de filamento.',
          icon: 'mdi:hexagon-outline',
          points: ['Más longitud de pared interna', 'Mejor rigidez multidireccional', 'Mayor tiempo de impresión es común'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Compromisos en la selección de patrón',
      items: [
        { pro: 'Los patrones más ligeros reducen el costo de material y pueden acortar el tiempo de impresión.', con: 'Pueden crear direcciones más débiles o menos soporte en superficies superiores.' },
        { pro: 'Los patrones densos mejoran la sensación de rigidez y reducen la flexión.', con: 'Pueden acercarse al costo de un relleno más alto sin resolver un diseño de pared débil.' },
        { pro: 'El giroid distribuye las cargas uniformemente en muchas direcciones.', con: 'Puede imprimir más lento en máquinas con configuraciones de aceleración conservadoras.' },
      ],
    },
    {
      type: 'message',
      title: 'Los multiplicadores de patrón son suposiciones de planificación',
      ariaLabel: 'Nota sobre multiplicadores de patrón',
      html: '<p>Los motores de los laminadores implementan los patrones de forma diferente. Trata el multiplicador como un estimador temprano, luego confirma los trabajos de producción importantes con una vista previa real del laminador y el informe de uso de material.</p>',
    },

    { type: 'title', text: 'Cálculo de ahorros de filamento y costo', level: 2 },
    {
      type: 'paragraph',
      html: 'La estimación del costo de material multiplica los gramos finales por el precio del carrete por kilogramo. Si la calculadora predice una impresión de 126 g y el carrete cuesta 24 $ por kg, la parte de plástico es de aproximadamente 3,02 $ antes del tiempo de máquina, electricidad, mano de obra, empaque e impresiones fallidas. El costo ahorrado compara el mismo modelo contra la línea base de 100% de relleno, usando el mismo porcentaje de desperdicio. Esto es útil para presupuestar, planificar lotes y decidir si una configuración de relleno más pesada vale el material extra.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Usa el porcentaje de desperdicio para líneas de purga, faldones, alas, soportes, balsas, cambios de color e inicios fallidos cortos.',
        'Para prototipos individuales, un margen de desperdicio del 5-10% suele ser más realista que cero.',
        'Para lotes de producción con soportes o materiales abrasivos, registra el peso real sobrante y fallido durante varios trabajos.',
        'Al comparar PLA, PETG, ABS, ASA, nailon y compuestos rellenos, usa el precio del carrete para el material exacto, no un promedio genérico.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:cash-multiple',
      title: 'Ejemplo: de prototipo denso a relleno de producción',
      html: '<p>Un prototipo con 100% de relleno pesa 240 g. Con un 28% de cascarón, 20% giroid, 6% de desperdicio y filamento a 24 $/kg, la estimación se acerca a los cien y pico gramos en lugar de 48 g. Esa diferencia importa al presupuestar 40 copias: pequeños errores por pieza se convierten en carretes enteros de plástico.</p>',
    },
    {
      type: 'table',
      headers: ['Entrada', 'Por qué importa', 'Error común'],
      rows: [
        ['Peso 100%', 'Define la línea base máxima de material.', 'Usar un número de paredes diferente al de la impresión objetivo.'],
        ['Relleno objetivo', 'Controla la densidad del núcleo interno.', 'Asumir que 20% de relleno significa 20% del peso total.'],
        ['Patrón', 'Cambia la longitud de trayectoria y la rigidez.', 'Ignorar el patrón al comparar preconfiguraciones del laminador.'],
        ['Desperdicio', 'Añade filamento real usado fuera de la pieza final.', 'Olvidar soportes e inicios fallidos.'],
      ],
    },

    { type: 'title', text: 'Elegir relleno para ahorrar peso sin piezas débiles', level: 2 },
    {
      type: 'paragraph',
      html: 'El ahorro de peso solo es valioso si la pieza sigue cumpliendo su función. Para modelos visuales, accesorios de exhibición, piezas de cosplay y cubiertas, un relleno bajo con suficientes capas superiores puede ser perfecto. Para soportes, accesorios, carcasas con tornillos, características de ajuste a presión y piezas expuestas al calor o impactos, la mejor mejora suele ser más paredes o refuerzo local en lugar de simplemente aumentar el relleno global. Una pieza con cuatro paredes y 20% giroid puede ser más fuerte en los lugares adecuados que una pieza con dos paredes y 50% de relleno.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Porcentaje de cascarón', definition: 'La porción del peso completamente denso que pertenece a paredes, capas superiores, capas inferiores y geometría maciza inevitable.' },
        { term: 'Relleno nominal', definition: 'El porcentaje seleccionado en el laminador para la región interna después de generar los cascarones.' },
        { term: 'Densidad efectiva', definition: 'La densidad total estimada de la impresión terminada después de combinar el porcentaje de cascarón, el porcentaje de relleno y el multiplicador de patrón.' },
        { term: 'Margen de desperdicio', definition: 'Filamento extra usado para material fuera de la pieza, como purga, ala, soportes, pruebas e inicios fallidos.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'No uses el ahorro de peso como único criterio de diseño',
      badge: 'Impresiones funcionales',
      html: '<p>Las piezas cargadas a través de las capas, las piezas con insertos roscados y las piezas con compresión de tornillos necesitan un razonamiento mecánico aparte. El relleno ayuda, pero el grosor de pared, la orientación, el material, la temperatura y la concentración de tensiones suelen importar más que la densidad sola.</p>',
    },
    {
      type: 'summary',
      title: 'Reglas rápidas de decisión',
      items: [
        'Impresiones decorativas: reduce el relleno primero, luego verifica la calidad de la superficie superior.',
        'Impresiones funcionales ligeras: usa un patrón equilibrado y suficientes paredes antes de un relleno alto.',
        'Soportes y accesorios: refuerza agujeros, esquinas y caminos de carga con modificadores locales.',
        'Trabajos por lotes: confirma la estimación final con el laminador antes de comprar material.',
      ],
    },

    { type: 'title', text: 'Cuándo confiar en la calculadora y cuándo volver a laminar', level: 2 },
    {
      type: 'paragraph',
      html: 'Esta calculadora es ideal para estimaciones rápidas, presupuestos iniciales, compra de material y comparación de múltiples opciones de relleno sin abrir el laminador repetidamente. No sustituye al laminador cuando cambian los ajustes dimensionales. Si alteras el diámetro de la boquilla, el ancho de extrusión, el número de paredes, el grosor superior, el grosor inferior, las capas adaptativas, el estilo de soporte, el planchado, el modo jarrón o la densidad del material, la línea base del 100% y el porcentaje de cascarón deben actualizarse.',
    },
    {
      type: 'list',
      icon: 'mdi:calculator-variant-outline',
      items: [
        'Usa la calculadora cuando el modelo y el perfil se mantengan mayormente fijos y estés explorando densidad o patrón.',
        'Vuelve a laminar cuando cambien el número de paredes, la generación de soportes, el tamaño de boquilla o el perfil de material.',
        'Pesa una pieza terminada cuando necesites registros de costos a nivel de producción o pronósticos de inventario.',
        'Registra los gramos reales para trabajos repetidos; los datos reales mejorarán rápidamente tus suposiciones de cascarón.',
      ],
    },
    {
      type: 'tip',
      title: 'Un flujo de trabajo fiable para presupuestos',
      html: '<p>Crea una referencia de laminador completamente densa, estima varias opciones de relleno con esta calculadora, elige las dos más prometedoras, y luego lamina solo esos dos candidatos finales. Esto mantiene los presupuestos rápidos mientras sigue fundamentando los precios finales en informes de material específicos del laminador.</p>',
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
