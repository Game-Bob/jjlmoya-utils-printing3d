import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PrintDurationEstimatorUI } from '../ui';

const slug = 'estimador-de-tiempo-de-impresion-3d-por-altura-de-capa-y-velocidad';
const title = 'Estimador de Tiempo de Impresión 3D por Altura de Capa y Velocidad';
const description =
  'Estima la duración de una impresión 3D sin abrir un laminador combinando la altura del modelo, la altura de capa, la velocidad de impresión, el relleno, la complejidad, la sobrecarga de desplazamiento y el uso de filamento.';

const faqData = [
  {
    question: '¿Cuánto tardará mi impresión 3D sin usar un laminador?',
    answer:
      'Puedes estimarlo a partir del número total de capas, el volumen aproximado de material, la velocidad media de impresión, el relleno y un margen por desplazamientos y cambios de dirección. Un laminador sigue siendo más preciso para trabajos finales.',
  },
  {
    question: '¿Por qué la altura de capa cambia tanto el tiempo de impresión?',
    answer:
      'La altura de capa modifica el número de capas en Z. Un perfil de 0.12 mm crea muchas más capas que uno de 0.28 mm para la misma altura de modelo, por lo que la impresora repite perímetros, relleno y sobrecarga de cambio de capa muchas más veces.',
  },
  {
    question: '¿Por qué el tiempo real de impresión es mayor que la velocidad dividida por la distancia?',
    answer:
      'Las impresoras rara vez mantienen la velocidad solicitada al pasar por esquinas, segmentos cortos, detalles pequeños, retracciones, movimientos en Z y trayectorias de desplazamiento. Los límites de aceleración y la sobrecarga hacen que la duración real sea mayor que el cálculo de movimiento ideal.',
  },
  {
    question: '¿Es esto más preciso que la estimación de un laminador?',
    answer:
      'No. Esta calculadora es para planificación temprana, presupuestos y comparaciones exploratorias. Un laminador puede inspeccionar la geometría exacta, los soportes, las costuras, los ajustes de aceleración, el ancho de extrusión y el orden de las trayectorias.',
  },
];

const howToData = [
  { name: 'Introduce la altura del modelo', text: 'Usa la altura Z del modelo o del objeto más alto del trabajo de impresión planificado.' },
  { name: 'Elige la altura de capa', text: 'Usa el valor real del perfil de impresión, por ejemplo 0.20 mm para una configuración FDM típica de calidad de borrador.' },
  { name: 'Añade velocidad, huella y relleno', text: 'Usa la velocidad media de impresión, un área aproximada de la huella XY y el porcentaje de relleno objetivo.' },
  { name: 'Ajusta la complejidad y la sobrecarga', text: 'Aumenta la complejidad para detalles muy pequeños y aumenta la sobrecarga para muchos desplazamientos, soportes o retracciones.' },
  { name: 'Compara escenarios de velocidad', text: 'Usa las filas de 40, 60 y 80 mm/s para ver si aumentar la velocidad cambia de forma significativa la duración total del trabajo.' },
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
  step: howToData.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
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

export const content: ToolLocaleContent<PrintDurationEstimatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Parámetros del estimador de tiempo de impresión 3D',
    resultsAriaLabel: 'Resultados estimados del tiempo de impresión 3D',
    unitSystemLabel: 'Unidades',
    metricLabel: 'Métrico',
    imperialLabel: 'US',
    modelHeightLabel: 'Altura del modelo',
    modelHeightHint: 'Dimensión Z más alta de la impresión.',
    layerHeightLabel: 'Altura de capa',
    speedLabel: 'Velocidad media de impresión',
    footprintLabel: 'Área de huella estimada',
    footprintHint: 'Área XY aproximada usada como proxy de volumen.',
    infillLabel: 'Densidad de relleno',
    complexityLabel: 'Factor de complejidad',
    complexityHint: '0.80 para formas simples, 1.20 para detalles pequeños y segmentos cortos.',
    overheadLabel: 'Sobrecarga de desplazamiento',
    filamentDiameterLabel: 'Diámetro del filamento',
    densityLabel: 'Densidad del material',
    timeLabel: 'Tiempo estimado de impresión',
    layersLabel: 'Capas totales',
    materialLabel: 'Estimación de material',
    filamentLabel: 'Longitud de filamento',
    effectiveSpeedLabel: 'Velocidad efectiva',
    baseTimeLabel: 'Tiempo de extrusión',
    overheadTimeLabel: 'Tiempo de sobrecarga',
    comparisonLabel: 'Comparación de velocidad',
    minutesUnit: 'min',
    hoursUnit: 'h',
    layersUnit: 'capas',
    gramUnit: 'g',
    ounceUnit: 'oz',
    meterUnit: 'm',
    footUnit: 'ft',
    percentUnit: '%',
    mmUnit: 'mm',
    inchUnit: 'in',
    mm2Unit: 'mm²',
    in2Unit: 'in²',
    mmSUnit: 'mm/s',
    inSUnit: 'in/s',
    cm3Unit: 'cm³',
    densityUnit: 'g/cm³',
    multiplierUnit: 'x',
    lowInsight: 'Estimación corta: la sobrecarga del laminador, el calentamiento de la cama y el enfriamiento pueden suponer una gran parte del tiempo real transcurrido.',
    balancedInsight: 'Estimación equilibrada: los cambios de velocidad importan, pero el número de capas y la sobrecarga siguen condicionando la duración final.',
    highInsight: 'Estimación larga: considera capas más gruesas, menor relleno, menos soportes o dividir el modelo antes de limitarte a aumentar la velocidad.',
  },
  seo: [
    { type: 'title', text: 'Cómo Estimar el Tiempo de Impresión 3D a partir de la Altura de Capa y la Velocidad', level: 2 },
    {
      type: 'paragraph',
      html: 'Un <strong>estimador de tiempo de impresión 3D por altura de capa y velocidad</strong> resulta útil cuando necesitas un número de planificación antes de abrir un laminador, al comparar varios perfiles de impresión o al presupuestar una pieza a partir de dimensiones aproximadas. La idea central es sencilla: la altura del modelo dividida por la altura de capa da el número de capas, y la cantidad estimada de trayectoria extruida dividida por la velocidad media da el tiempo de movimiento. La parte difícil es que la impresión FDM real no es una cinta transportadora limpia. La boquilla reduce la velocidad en las esquinas, las retracciones interrumpen la extrusión, los desplazamientos añaden distancia sin impresión y los segmentos cortos rara vez alcanzan la velocidad programada.',
    },
    {
      type: 'paragraph',
      html: 'Esta calculadora va intencionadamente más allá de la fórmula más básica. En lugar de asumir que <code>altura / altura de capa / velocidad</code> es suficiente, combina un volumen de modelo aproximado, la densidad de relleno, el ancho de la línea de extrusión, un factor de complejidad, el tiempo de cambio de capa y un porcentaje de sobrecarga por desplazamiento. El resultado sigue siendo una estimación, no un sustituto del laminador, pero responde a la pregunta práctica que los usuarios buscan: <strong>cuánto tardará mi impresión 3D</strong> si cambio la altura de capa, el relleno o la velocidad.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0.20 mm', label: 'Altura de capa FDM común para impresiones equilibradas', icon: 'mdi:layers-outline' },
        { value: '15-20 %', label: 'Rango inicial útil de sobrecarga por desplazamiento y movimiento', icon: 'mdi:routes' },
        { value: '40-80 mm/s', label: 'Velocidades de comparación típicas en impresoras de escritorio', icon: 'mdi:speedometer' },
        { value: '1.75 mm', label: 'Diámetro de filamento habitual para calcular longitud de material', icon: 'mdi:circle-outline' },
      ],
    },
    {
      type: 'tip',
      title: 'Usa la velocidad media, no la velocidad máxima',
      html: '<p>Si tu perfil del laminador indica 120 mm/s pero las paredes exteriores van a 40 mm/s, los perímetros pequeños a 25 mm/s y el relleno a 90 mm/s, la velocidad media de impresión no es 120 mm/s. Para planificar, una velocidad media realista suele dar una mejor estimación que el movimiento más rápido del perfil.</p>',
    },

    { type: 'title', text: 'Por Qué la Altura de Capa Tiene un Efecto Tan Grande en la Duración', level: 2 },
    {
      type: 'paragraph',
      html: 'La altura de capa controla cuántas veces debe repetir la impresora la misma secuencia básica: perímetro, estructura interna, superficies superior e inferior, desplazamiento a la siguiente isla y movimiento Z hacia la siguiente capa. Un modelo de 80 mm de altura necesita 400 capas a 0.20 mm, pero unas 667 capas a 0.12 mm. Aunque cada capa fina use ligeramente menos plástico por pasada, la impresora realiza muchas más transiciones de capa, más contornos repetidos y más oportunidades de movimiento lento limitado por la aceleración.',
    },
    {
      type: 'table',
      headers: ['Altura del modelo', 'Altura de capa', 'Número de capas', 'Interpretación para planificación'],
      rows: [
        ['80 mm', '0.28 mm', '286 capas', 'Perfil rápido de borrador con capas visibles.'],
        ['80 mm', '0.20 mm', '400 capas', 'Calidad y duración equilibradas para muchas piezas.'],
        ['80 mm', '0.12 mm', '667 capas', 'Perfil de detalle fino que puede añadir muchas horas.'],
        ['160 mm', '0.20 mm', '800 capas', 'Las piezas altas consumen mucha duración incluso a velocidades normales.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Cuando la altura de capa es el verdadero cuello de botella',
      badge: 'Verificar capas',
      html: '<p>Si aumentar la velocidad de impresión apenas cambia la estimación, el trabajo puede estar dominado por el número de capas, los segmentos cortos y la sobrecarga. En ese caso, pasar de 0.12 mm a 0.20 mm puede ahorrar más tiempo que llevar la impresora de 60 mm/s a 80 mm/s.</p>',
    },
    {
      type: 'summary',
      title: 'Reglas de decisión sobre la altura de capa',
      items: [
        'Usa capas más gruesas para prototipos, soportes, fijaciones y piezas donde el acabado superficial en Z no sea crítico.',
        'Usa capas más finas para curvas suaves, texto pequeño, miniaturas y superficies cosméticas.',
        'En piezas altas, los cambios de altura de capa se acumulan rápidamente porque cada capa extra repite la sobrecarga.',
      ],
    },

    { type: 'title', text: 'Velocidad de Impresión, Aceleración y el Factor de Complejidad', level: 2 },
    {
      type: 'paragraph',
      html: 'Un valor de velocidad de impresión es un objetivo, no una promesa. La impresora debe acelerar hasta esa velocidad, desacelerar antes de las esquinas, obedecer los límites de jerk o desviación de unión, y a veces reducir la velocidad por refrigeración, puentes, voladizos, tiempo mínimo de capa e islas pequeñas. Por eso una <strong>calculadora de velocidad de impresión a tiempo de impresión</strong> necesita un factor de complejidad. Una caja limpia con líneas de relleno largas y rectas puede funcionar cerca de la velocidad solicitada. Una figurilla detallada, un logotipo, una celosía, una pieza roscada o una escultura orgánica pueden pasar la mayor parte del tiempo en segmentos cortos donde los límites de aceleración importan más que la velocidad máxima.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Geometría simple',
          description: 'Cajas, paneles y recorridos de relleno largos pueden usar un multiplicador de complejidad más bajo.',
          icon: 'mdi:cube-outline',
          points: ['Trayectorias continuas más largas', 'Menos islas', 'Menos sobrecarga de retracción'],
        },
        {
          title: 'Geometría mixta',
          description: 'La mayoría de soportes, carcasas, accesorios y piezas domésticas se acercan al multiplicador por defecto.',
          icon: 'mdi:shape-outline',
          highlight: true,
          points: ['Tanto perímetros como relleno importan', 'Desplazamientos moderados', 'Pérdidas de aceleración equilibradas'],
        },
        {
          title: 'Geometría detallada',
          description: 'Las piezas pequeñas, el texto, las celosías, los soportes y las superficies curvas orgánicas necesitan un multiplicador más alto.',
          icon: 'mdi:vector-polyline',
          points: ['Segmentos cortos dominan', 'Más arranques y paradas', 'Más retracciones y desplazamientos'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Aumentar la velocidad de impresión: qué mejora y qué no',
      items: [
        { pro: 'Las líneas de relleno largas pueden terminar antes al aumentar la velocidad.', con: 'Las paredes exteriores y los detalles pequeños pueden seguir limitados por el perfil.' },
        { pro: 'Los prototipos grandes y de bajo detalle pueden beneficiarse de un movimiento más rápido.', con: 'La aceleración, el campaneo, el flujo de extrusión y la refrigeración pueden limitar la velocidad útil.' },
        { pro: 'Una tabla comparativa de velocidad muestra rápidamente el ahorro potencial.', con: 'No puede predecir las reducciones de velocidad específicas del laminador, como el tiempo mínimo de capa.' },
      ],
    },
    {
      type: 'message',
      title: 'Las estimaciones de velocidad son más útiles para la comparación relativa',
      ariaLabel: 'Nota sobre la estimación de velocidad',
      html: '<p>Usa las filas de 40, 60 y 80 mm/s para comparar de forma orientativa. Si 80 mm/s apenas supone un ahorro, la impresión probablemente está limitada por las capas, la sobrecarga o la complejidad, más que por la velocidad bruta.</p>',
    },

    { type: 'title', text: 'Relleno, Volumen y Tiempo de Material', level: 2 },
    {
      type: 'paragraph',
      html: 'La calculadora usa el área de huella y la altura del modelo como una aproximación del volumen, y luego escala ese volumen por una relación de sólido efectivo. Esto no es tan exacto como leer la geometría de la malla, pero captura una verdad física importante: las paredes y las pieles no desaparecen cuando se reduce el relleno. Una pieza impresa al 15 % de relleno sigue teniendo perímetros, capas superiores, capas inferiores, piezas sólidas pequeñas y, a veces, interfaces de soporte. La calculadora mantiene una proporción de cáscara en la estimación para que un relleno bajo no colapse el tiempo de impresión de forma poco realista hasta casi nada.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Aumenta el área de huella para objetos anchos, cajas, placas planas, bandejas y carcasas amplias.',
        'Reduce el área de huella para torres estrechas, figurillas delgadas, soportes pequeños y marcos abiertos.',
        'Usa el porcentaje de relleno como control de planificación, no como densidad total de la pieza.',
        'Recuerda que los soportes, faldones, balsas, torres de purga y el desperdicio multicolor añaden tiempo fuera del propio modelo.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:printer-3d-nozzle',
      title: 'Ejemplo: por qué el 20 % de relleno no es el 20 % del tiempo de impresión',
      html: '<p>Una carcasa de 80 mm de altura puede tener cuatro paredes, seis capas inferiores, seis capas superiores, salientes roscados y una cavidad interna grande. Reducir el relleno del 40 % al 20 % reduce la longitud de la trayectoria interna, pero las paredes y las pieles se siguen imprimiendo en cada capa. En modelos con muchos perímetros, cambiar el número de paredes o la altura de capa puede afectar más al tiempo que cambiar solo el relleno.</p>',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Área de huella', definition: 'El área XY aproximada que ocupa el modelo, usada aquí como entrada de volumen aproximada.' },
        { term: 'Relación de sólido efectivo', definition: 'Una combinación de planificación de material de cáscara y material de relleno usada para estimar el volumen extruido.' },
        { term: 'Cordón de extrusión', definition: 'El cordón de plástico depositado por la boquilla; su sección transversal depende de la altura de capa y el ancho de extrusión.' },
        { term: 'Longitud de filamento', definition: 'La longitud de filamento en bruto necesaria para suministrar el volumen de plástico estimado.' },
      ],
    },

    { type: 'title', text: 'Sobrecarga por Desplazamiento: La Pieza Que Falta en las Calculadoras Simples', level: 2 },
    {
      type: 'paragraph',
      html: 'Una estimación de duración simple a menudo ignora el movimiento sin extrusión. Las impresoras reales se mueven entre islas, retraen y ceban el filamento, limpian, saltan en Z, evitan piezas ya impresas, cambian de dirección y a veces hacen pausas para refrigerar. Estas acciones no crean material visible, pero consumen tiempo de reloj. Un porcentaje fijo de sobrecarga es una forma práctica de contabilizar los desplazamientos cuando no se dispone de una trayectoria completa del laminador. El rango por defecto del 15-20 % es un punto de partida útil para piezas FDM ordinarias de un solo material.',
    },
    {
      type: 'table',
      headers: ['Condición de impresión', 'Sobrecarga sugerida', 'Motivo'],
      rows: [
        ['Pieza única y simple', '10-15 %', 'Pocas islas, menos retracciones, trayectorias mayoritariamente continuas.'],
        ['Pieza funcional típica', '15-22 %', 'Perímetros, relleno y desplazamientos moderados.'],
        ['Muchas piezas pequeñas en una placa', '22-35 %', 'Desplazamientos frecuentes entre objetos y arranques repetidos.'],
        ['Soportes o superficies detalladas', '25-40 %', 'Las interfaces de soporte, los segmentos cortos y las retracciones añaden tiempo.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'El calentamiento de la cama no está incluido',
      badge: 'Tiempo total del trabajo',
      html: '<p>La estimación se centra en el tiempo de movimiento y extrusión. Añade tiempo aparte para el calentamiento de la cama y el hotend, el sondeo, el nivelado de la malla, la carga del filamento, el enfriamiento y la retirada de la pieza al planificar la ocupación real de la máquina.</p>',
    },
    {
      type: 'tip',
      title: 'Calibra la sobrecarga a partir de una impresión real',
      html: '<p>Toma un trabajo terminado, compara la duración del laminador o del cronómetro con esta calculadora, y luego ajusta la sobrecarga y la complejidad hasta que la estimación coincida. Esa calibración local mejorará la planificación futura más que usar valores genéricos para siempre.</p>',
    },

    { type: 'title', text: 'Cuándo Confiar en Esta Calculadora y Cuándo Usar un Laminador', level: 2 },
    {
      type: 'paragraph',
      html: 'Esta herramienta es más útil para estimaciones tempranas, conversaciones de presupuesto, demostraciones en clase y comparación de altura de capa frente a velocidad antes de comprometerse con un perfil. Es especialmente útil cuando el STL exacto aún no está disponible, cuando un cliente solo proporciona dimensiones aproximadas, o cuando quieres saber si vale la pena investigar un cambio. No está diseñada para sustituir las estimaciones del laminador en trabajos críticos de producción, porque los laminadores inspeccionan la geometría exacta de la malla, las velocidades por característica, las trayectorias de soporte, el orden de las paredes, las superficies superior e inferior, la colocación de las costuras, el control de aceleración y el comportamiento específico del firmware de la máquina.',
    },
    {
      type: 'list',
      icon: 'mdi:calculator-variant-outline',
      items: [
        'Usa esta calculadora para comparar perfiles de capa de 0.12 mm, 0.20 mm y 0.28 mm rápidamente.',
        'Úsala para estimar si un modelo alto está limitado por el número de capas antes de cambiar la velocidad.',
        'Úsala para obtener un volumen de material, longitud de filamento y peso aproximados a partir de dimensiones aproximadas.',
        'Usa un laminador antes de comprar material, reservar tiempo de máquina o prometer fechas de entrega.',
      ],
    },
    {
      type: 'table',
      headers: ['Pregunta', 'Respuesta de la calculadora', 'Respuesta del laminador'],
      rows: [
        ['¿Las capas más gruesas ahorrarán tiempo?', 'Buena estimación orientativa a partir del número de capas.', 'Resultado exacto por trayectoria y superficie específica.'],
        ['¿80 mm/s será mucho más rápido que 60 mm/s?', 'Comparación útil de escenarios de velocidad.', 'Comportamiento exacto por característica de velocidad y aceleración.'],
        ['¿Cuánto filamento podría necesitar?', 'Volumen, longitud y peso aproximados.', 'Informe de material específico del perfil.'],
        ['¿Puedo presupuestar este trabajo de producción?', 'Solo para una selección preliminar.', 'Necesario para el presupuesto final y la planificación.'],
      ],
    },
    {
      type: 'summary',
      title: 'Mejor flujo de trabajo',
      items: [
        'Comienza con este estimador para acotar las opciones de altura de capa, velocidad y relleno.',
        'Ajusta la complejidad y la sobrecarga usando una impresión conocida de tu propia máquina.',
        'Vuelve a laminar el perfil candidato final antes de comprometerte con el costo, el tiempo o la entrega.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
