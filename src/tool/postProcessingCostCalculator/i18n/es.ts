import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PostProcessingCostCalculatorUI } from '../ui';

const slug = 'calculadora-coste-postprocesado-impresion-3d';
const title = 'Calculadora de coste de postprocesado en impresión 3D';
const description =
  'Estima el acabado manual, la retirada de soportes, el lijado, el pintado, otros trabajos manuales, consumibles y el coste de postprocesado ajustado por moneda para piezas impresas en 3D.';

const faqData = [
  {
    question: '¿Cómo se calcula el coste de postprocesado en impresión 3D?',
    answer:
      'Suma todos los minutos de acabado manual, multiplica el total por el coste de mano de obra por hora dividido entre 60, y añade los consumibles. Esta calculadora también muestra el peso de cada fase de acabado en el coste final.',
  },
  {
    question: '¿Deben incluirse los consumibles en el coste de acabado manual?',
    answer:
      'Sí. El papel de lija, la imprimación, la pintura, los guantes, el cinta de enmascarar, el IPA, el líquido de limpieza de resina, los trapos y el desgaste de pequeñas herramientas pueden ser suficientemente grandes como para cambiar el presupuesto de una pieza terminada.',
  },
  {
    question: '¿Afecta la conversión de moneda a la fórmula de coste?',
    answer:
      'No. La moneda solo cambia la escala monetaria mostrada. La fórmula de mano de obra sigue siendo minutos multiplicados por el coste por hora dividido entre 60, más consumibles.',
  },
  {
    question: '¿Qué tarifa por hora debo usar para la mano de obra en impresión 3D?',
    answer:
      'Usa la tarifa de mano de obra cargada del taller, no solo el salario neto. Incluye salarios, cargas sociales, tiempo no facturable remunerado, supervisión y el nivel de cualificación requerido para el acabado cosmético.',
  },
];

const howToData = [
  { name: 'Introduce los minutos de acabado', text: 'Añade la retirada de soportes, el lijado, el pintado y cualquier otro tiempo manual en minutos.' },
  { name: 'Establece la tarifa y los consumibles', text: 'Introduce tu tarifa de acabado por hora y el coste directo de consumibles en la moneda seleccionada.' },
  { name: 'Elige la moneda y el factor', text: 'Usa el selector de moneda para los símbolos y el factor de conversión opcional para ajustes de presupuesto.' },
  { name: 'Copia el resultado', text: 'Usa el botón de copia para pegar el total, la mano de obra, los consumibles y los minutos en un presupuesto.' },
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
  step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  featureList: [
    'calculadora de coste de postprocesado 3D',
    'estimación de mano de obra en impresión 3D',
    'coste de acabado manual impresión 3D',
    'calculadora de tarifa por hora de postprocesado',
  ],
  inLanguage: 'es',
};

export const content: ToolLocaleContent<PostProcessingCostCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Entradas de coste de postprocesado',
    resultsAriaLabel: 'Resultados de coste de postprocesado',
    currencyLabel: 'Moneda',
    currencyOptions: [
      { code: 'EUR', label: '€', symbol: '€' },
      { code: 'USD', label: '$', symbol: '$' },
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
    currencyOptionSeparator: ' - ',
    supportLabel: 'Retirada de soportes',
    sandingLabel: 'Lijado',
    paintingLabel: 'Pintado',
    otherLabel: 'Otra mano de obra',
    hourlyRateLabel: 'Tarifa por hora',
    consumablesLabel: 'Consumibles',
    conversionFactorLabel: 'Factor de conversión',
    conversionFactorUnit: 'x',
    conversionHint: 'Déjalo en 1 si la tarifa ya está introducida en moneda local; cámbialo para aplicar un multiplicador global al presupuesto.',
    minutesUnit: 'min',
    hourUnit: 'h',
    rateUnitSeparator: '/',
    totalLabel: 'Total de postprocesado',
    laborLabel: 'Mano de obra',
    consumablesBreakdownLabel: 'Consumibles',
    timeLabel: 'Tiempo manual',
    effectiveRateLabel: 'Tarifa efectiva',
    breakdownLabel: 'Peso de coste por fase de acabado',
    copyLabel: 'Copiar resultado',
    copiedLabel: 'Copiado',
    copyTemplate: 'Coste de postprocesado: {total} ({minutes}; mano de obra {labor}; consumibles {consumables})',
    pendingLabel: '-',
    currencySymbol: '€',
  },
  seo: [
    { type: 'title', text: 'Qué mide esta calculadora de coste de postprocesado en impresión 3D', level: 2 },
    {
      type: 'paragraph',
      html: 'Una <strong>calculadora de coste de postprocesado en impresión 3D</strong> debe responder una pregunta práctica de presupuestación: ¿cuánto dinero se consume después de que la impresora se detiene? La pieza impresa puede tener ya un coste de tiempo de máquina y de material, pero muchos trabajos pagados se ganan o se pierden en la retirada de soportes, el lijado, el relleno, la imprimación, el pintado, la limpieza, el enmascarado, la inspección y el reprocesado. Esta calculadora separa esas tareas de acabado manual en minutos, las multiplica por una tarifa de postprocesado por hora y añade los consumibles directos para que el número final pueda pegarse en un presupuesto.',
    },
    {
      type: 'paragraph',
      html: 'La fórmula base es deliberadamente transparente: <code>((soportes + lijado + pintado + otros minutos) x (tarifa por hora / 60)) + consumibles</code>. El factor de conversión opcional multiplica la tarifa por hora y los consumibles cuando un taller quiere escalar valores para conversión de moneda, listas de precios regionales, margen de subcontratistas o un ajuste temporal. Si el usuario introduce directamente una tarifa de mano de obra local, el factor debe quedarse en <code>1</code> y el resultado sigue siendo independiente de los supuestos del tipo de cambio.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'min x tarifa/60', label: 'Fórmula de coste de mano de obra', icon: 'mdi:clock-outline' },
        { value: '5 fases', label: 'Soportes, lijado, pintado, otros, consumibles', icon: 'mdi:chart-bar-stacked' },
        { value: '1x', label: 'Factor de conversión predeterminado', icon: 'mdi:swap-horizontal' },
        { value: 'En tiempo real', label: 'Sin botón de calcular', icon: 'mdi:flash-outline' },
      ],
    },
    {
      type: 'tip',
      title: 'Presupuesta a la persona, no a la impresora',
      html: '<p>El postprocesado suele estar liderado por la mano de obra. Una impresión lenta puede ser barata de acabar, mientras que una pieza pequeña de cara visible con soportes en superficies cosméticas puede requerir un trabajo manual especializado y costoso. Trata la <strong>estimación de coste de mano de obra en impresión 3D</strong> como su propia línea en lugar de ocultarla en el margen de material.</p>',
    },
    { type: 'title', text: 'Retirada de soportes: el primer motor de coste manual', level: 2 },
    {
      type: 'paragraph',
      html: 'La retirada de soportes no es solo el tiempo necesario para arrancar plástico de un modelo. Puede incluir cortar, calentar, disolver, enjuagar, raspar, recortar marcas de soporte, proteger elementos frágiles y comprobar si las cicatrices de soporte requieren trabajo superficial adicional. Los soportes en árbol de FDM, las capas de interfaz densas, las puntas de soporte de SLA y el desempolvado de SLS crean distintos perfiles de mano de obra. Para una estimación fiable del <strong>coste de acabado manual en impresión 3D</strong>, el tiempo de retirada de soportes debe medirse en trabajos comparables en lugar de estimarse a partir de la duración de la impresión.',
    },
    {
      type: 'table',
      headers: ['Situación de soporte', 'Comportamiento de tiempo típico', 'Nota de presupuesto'],
      rows: [
        ['Soportes de separación fácil', 'Retirada corta y predecible', 'A menudo adecuado para una asignación fija de minutos por pieza.'],
        ['Interfaz de soporte densa', 'Recorte más largo y limpieza superficial', 'Añadir minutos de lijado por separado para que el motor de coste siga siendo visible.'],
        ['Miniaturas de resina o modelos delicados', 'Recorte lento para evitar daños', 'Usar una tarifa de mano de obra más alta si se requiere trabajo manual especializado.'],
        ['Soporte soluble', 'Menos corte manual pero más tiempo de proceso', 'Incluir la manipulación de la solución y el secado si el operario está implicado.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'No presupuestes la retirada de soportes solo por el volumen de soporte del slicer',
      badge: 'Riesgo de mano de obra',
      html: '<p>El volumen de soporte puede ser bajo mientras el acceso es terrible. Un pequeño soporte escondido dentro de un elemento estrecho puede costar más mano de obra que un gran soporte externo que se despega limpiamente.</p>',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Registra los minutos de retirada de soportes para familias de piezas recurrentes.',
        'Separa la retirada del lijado para que las decisiones de estrategia de soporte sean más fáciles de comparar.',
        'Aumenta la estimación para geometrías frágiles, pasadores finos, miniaturas y superficies de cara al cliente.',
        'Usa la misma moneda y base de tarifa por hora que el resto del presupuesto.',
      ],
    },
    { type: 'title', text: 'Lijado, relleno y preparación de superficies', level: 2 },
    {
      type: 'paragraph',
      html: 'El lijado es a menudo el mayor coste oculto en las piezas impresas en 3D terminadas porque es iterativo. El operario puede pasar por lijado grueso, relleno, tiempo de curado o secado, lijado fino, corrección puntual e inspección bajo luz rasante. La altura de capa, la dureza del material, las cicatrices de soporte, el nivel de brillo requerido y la geometría de la pieza cambian la cantidad de trabajo manual. Una guía funcional puede necesitar cinco minutos; un prototipo de exposición puede necesitar una hora antes de que se abra siquiera la pintura.',
    },
    {
      type: 'paragraph',
      html: 'La calculadora trata el lijado como minutos multiplicados por la tarifa de acabado por hora porque el proceso está limitado por el operario más que por la máquina. Los consumibles como los abrasivos, la imprimación de relleno, la masilla, los trapos antiestáticos y los materiales de enmascarado deben ir al campo de consumibles en lugar de quedar enterrados en la tarifa de mano de obra. Esto mantiene el <strong>análisis de coste de acabado de impresión 3D</strong> legible: la mano de obra muestra la presión del tiempo, los consumibles muestran los insumos comprados.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Acabado funcional',
          description: 'Bordes afilados limpiados, soportes retirados y cicatrices gruesas reducidas lo suficiente para el montaje.',
          icon: 'mdi:wrench-outline',
          points: ['Menor tiempo de lijado', 'Consumibles mínimos', 'Inspección centrada en el ajuste'],
        },
        {
          title: 'Acabado de presentación',
          description: 'Caras visibles suavizadas, imprimación usada selectivamente y líneas de capa reducidas para revisión del cliente.',
          icon: 'mdi:eye-outline',
          highlight: true,
          points: ['Tiempo de lijado moderado', 'Imprimación y relleno probables', 'Las superficies cosméticas impulsan la mano de obra'],
        },
        {
          title: 'Acabado listo para pintar',
          description: 'Lijado progresivo, relleno, enmascarado y corrección de defectos antes de las capas de color.',
          icon: 'mdi:spray',
          points: ['Mayor tiempo manual', 'Los consumibles importan', 'Se recomienda margen para reprocesado'],
        },
      ],
    },
    {
      type: 'message',
      title: 'Los abrasivos son consumibles',
      ariaLabel: 'Nota sobre consumibles',
      html: '<p>El papel de lija, las esponjas de lijado, las limas de aguja, el relleno, los guantes y los trapos no son gratuitos. Añade su coste directo cuando el trabajo consume una parte significativa de ellos.</p>',
    },
    { type: 'title', text: 'Estimación del coste de pintado y recubrimiento', level: 2 },
    {
      type: 'paragraph',
      html: 'Los minutos de pintado deben incluir el tiempo activo del operario: enmascarado, mezcla, pulverización, trabajo con pincel, retoque, desenmascarado, limpieza del área de trabajo e inspección. El tiempo pasivo de secado o curado solo debe añadirse cuando bloquea al operario u ocupa un espacio de cabina escaso que se cobra como mano de obra o gastos generales. Esta distinción evita que una <strong>calculadora de tarifa por hora de postprocesado</strong> convierta cada hora de espera en coste de mano de obra cuando nadie está trabajando activamente en la pieza.',
    },
    {
      type: 'table',
      headers: ['Tarea de pintado', '¿Registrar como mano de obra?', '¿Registrar como consumibles?'],
      rows: [
        ['Enmascarado y desenmascarado', 'Sí, minutos activos', 'Cinta, film, tapones y plantillas'],
        ['Mezcla de pintura o recubrimiento de resina', 'Sí, minutos activos', 'Pintura, disolvente, vasos, filtros, guantes'],
        ['Pulverización o pincelado', 'Sí, minutos activos', 'Material de recubrimiento y disolvente de limpieza'],
        ['Tiempo de secado', 'Solo si bloquea la mano de obra pagada o la capacidad de cabina', 'Normalmente ningún material directo salvo que el calor o las lámparas se facturen por separado'],
      ],
    },
    {
      type: 'tip',
      title: 'Cobra la complejidad del color de forma explícita',
      html: '<p>Una capa de imprimación simple y un acabado de dos tonos enmascarado pueden tener un coste de material similar pero un coste de mano de obra muy diferente. Usa el campo de minutos de pintado para exponer la diferencia antes de aplicar el margen.</p>',
    },
    {
      type: 'proscons',
      title: 'Asignación plana de acabado vs. minutos de acabado medidos',
      items: [
        { pro: 'Una asignación plana es rápida para trabajos repetidos con requisitos de acabado estables.', con: 'Oculta qué fase consume el beneficio cuando un trabajo cambia.' },
        { pro: 'Los minutos medidos hacen que la estimación sea auditable y fácil de actualizar.', con: 'Requieren que el taller registre el tiempo de acabado real para los tipos de piezas comunes.' },
        { pro: 'La barra de coste visual hace que los presupuestos de cara al cliente sean más fáciles de explicar internamente.', con: 'No sustituye al criterio sobre el riesgo cosmético y la probabilidad de reprocesado.' },
      ],
    },
    { type: 'title', text: 'Consumibles y gastos generales de postprocesado', level: 2 },
    {
      type: 'paragraph',
      html: 'Los consumibles son materiales directos consumidos durante el acabado. Pueden incluir papel de lija, imprimación, relleno, pintura, fluido de lavado de resina, IPA, toallas, guantes de nitrilo, cuchillas, cinta de enmascarar, tapones de protección, vasos desechables, filtros, compuesto de pulido y barniz. Algunos talleres los incluyen en los gastos generales, pero calcularlos como campo directo es más seguro para trabajos con estándares de acabado inusuales, gran superficie, lijado agresivo o flujos de trabajo intensivos en solventes.',
    },
    {
      type: 'paragraph',
      html: 'Un campo de consumibles separado también ayuda con los flujos de trabajo de <strong>calculadora de gastos generales de postprocesado</strong>. Los gastos generales suelen ser más amplios que los consumibles: alquiler, extracción, iluminación, filtración de aire, uso del compresor, mantenimiento, software, supervisión y tiempo administrativo. Esta calculadora no pretende asignar cada línea de gastos generales. En cambio, proporciona un subtotal de coste directo limpio que puede alimentar un modelo de presupuesto mayor donde los gastos generales y el margen se aplican después.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Tarifa de mano de obra', definition: 'El coste horario o tarifa de venta asignada al tiempo de acabado manual activo.' },
        { term: 'Consumibles', definition: 'Materiales directos agotados durante el postprocesado, como abrasivos, recubrimientos, guantes y fluidos de limpieza.' },
        { term: 'Factor de conversión', definition: 'Un multiplicador global aplicado a los valores monetarios para escalar la moneda o ajustar presupuestos.' },
        { term: 'Coste directo', definition: 'Un coste que puede vincularse a la pieza o lote específico que se está acabando.' },
        { term: 'Gastos generales', definition: 'Costes empresariales que apoyan la producción pero que no son consumidos por una sola pieza en una cantidad fácilmente medible.' },
      ],
    },
    {
      type: 'card',
      icon: 'mdi:receipt-text-outline',
      title: 'Dónde va el margen',
      html: '<p>Esta herramienta calcula el coste de acabado antes del beneficio. Aplica el margen después de ensamblar material, tiempo de máquina, postprocesado, riesgo y gastos generales; de lo contrario, los trabajos intensivos en mano de obra pueden estar infravalorados.</p>',
    },
    { type: 'title', text: 'Selección de moneda y factor de conversión', level: 2 },
    {
      type: 'paragraph',
      html: 'La selección de moneda cambia el símbolo y puede convertir los valores monetarios existentes utilizando factores de referencia prácticos. El cálculo en sí es neutral en cuanto a moneda: una tarifa de 30 por hora y 10 en consumibles producen la misma estructura independientemente de si el símbolo es euros, dólares, libras, yenes u otra moneda admitida. Esto es útil para presupuestos internacionales porque la matemática se mantiene estable mientras la presentación se adapta al cliente o a la ubicación del taller.',
    },
    {
      type: 'paragraph',
      html: 'El factor de conversión existe para casos en que el usuario no quiere una conversión automática del tipo de cambio o necesita un multiplicador comercial personalizado. Un factor de <code>1</code> significa que la tarifa por hora y los consumibles ya están introducidos en la moneda local seleccionada. Un factor de <code>1,15</code> aumenta ambos valores monetarios un quince por ciento. Un factor de <code>0,92</code> los reduce un ocho por ciento. Como el factor afecta al dinero y no a los minutos, el desglose visual sigue siendo proporcional al coste ajustado.',
    },
    {
      type: 'summary',
      title: 'Reglas de moneda',
      items: [
        'Usa el selector para símbolos y un escalado cómodo entre monedas comunes.',
        'Mantén el factor de conversión en 1 cuando los valores ya estén en moneda local.',
        'Usa un factor personalizado para listas de precios regionales, margen de subcontratistas o ajustes comerciales temporales.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Los tipos de cambio no son política contable',
      badge: 'Nota de precios',
      html: '<p>Para facturas oficiales, impuestos o informes contables, usa el tipo de cambio y la política de redondeo que exige tu empresa. Esta calculadora es para estimar el coste de producción y preparar presupuestos.</p>',
    },
    { type: 'title', text: 'Usar el desglose visual para mejorar el beneficio', level: 2 },
    {
      type: 'paragraph',
      html: 'La barra proporcional es más que decoración. Muestra qué fase de acabado está consumiendo dinero. Si el lijado domina, cambiar la orientación de impresión, la altura de capa, la interfaz de soporte o el material puede reducir el tiempo manual. Si el pintado domina, el presupuesto puede necesitar un nivel de acabado separado. Si los consumibles dominan, la compra a granel o un proceso de recubrimiento diferente puede importar más que la eficiencia de la mano de obra. Si la retirada de soportes domina, rediseñar los puntos de contacto de soporte puede ser la intervención de mayor valor.',
    },
    {
      type: 'list',
      icon: 'mdi:target',
      items: [
        'Cuando la retirada de soportes es la sección mayor, revisa el estilo de soporte, la densidad, la distancia Z de contacto y la orientación.',
        'Cuando el lijado es mayor, revisa la altura de capa, la colocación de la costura, la estrategia de relleno y si el acabado presupuestado es demasiado alto para el precio.',
        'Cuando el pintado es mayor, divide los acabados de un color, enmascarados y premium en niveles de presupuesto separados.',
        'Cuando los consumibles son mayores, comprueba si los recubrimientos, el lavado de resina, los abrasivos y los materiales de enmascarado se están desperdiciando o infracalculando.',
      ],
    },
    {
      type: 'table',
      headers: ['Coste dominante', 'Causa probable', 'Respuesta de presupuesto'],
      rows: [
        ['Retirada de soportes', 'Acceso difícil, soportes densos, detalles frágiles', 'Añadir un recargo por complejidad de soporte o revisar la orientación.'],
        ['Lijado', 'Requisito cosmético alto, capas visibles, cicatrices de soporte', 'Crear grados de acabado y cobrar la preparación lista para pintar.'],
        ['Pintado', 'Enmascarado, múltiples colores, limpieza de cabina', 'Presupuestar el pintado como línea de servicio separada.'],
        ['Consumibles', 'Recubrimientos, abrasivos, solventes, suministros de protección', 'Usar seguimiento directo de consumibles o cargos mínimos de material.'],
      ],
    },
    {
      type: 'summary',
      title: 'Flujo de trabajo de presupuesto',
      items: [
        'Mide los minutos manuales activos por fase.',
        'Usa una tarifa de acabado por hora cargada.',
        'Añade consumibles directos por separado.',
        'Copia el resultado calculado en el presupuesto y aplica gastos generales y margen en el modelo de precios completo.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
