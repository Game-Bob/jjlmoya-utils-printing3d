import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MachineHourlyRateCalculatorUI } from '../ui';

const slug = 'calculadora-tarifa-horaria-maquina-costo-produccion';
const title = 'Calculadora de Tarifa Horaria de Máquina y Coste de Producción';
const description =
  'Calcula el coste operativo real de una impresora 3D a partir del consumo eléctrico, la tarifa eléctrica, el precio de compra, la vida útil y la duración de la impresión.';

const faqData = [
  {
    question: '¿Cómo calculo el coste por hora de una impresora 3D?',
    answer:
      'Suma el coste eléctrico por hora al coste de depreciación por hora. La electricidad se calcula como vatios dividido por 1000 multiplicado por la tarifa eléctrica. La depreciación es el precio de compra dividido por las horas de vida útil.',
  },
  {
    question: '¿Por qué es importante la depreciación al fijar precios de impresión 3D?',
    answer:
      'La depreciación representa el valor de la máquina consumido al producir piezas. Ignorarla puede hacer que una impresión parezca rentable mientras la impresora pierde silenciosamente valor de reventa, fiabilidad y capacidad de reemplazo.',
  },
  {
    question: '¿Qué vida útil debería usar para una impresora 3D de escritorio?',
    answer:
      'Un valor de referencia de 5000 horas es un punto de partida práctico para muchas impresoras de escritorio, pero las granjas de producción deberían reemplazarlo con el historial de mantenimiento, el ciclo de reemplazo esperado y los datos reales de actividad.',
  },
  {
    question: '¿Es esto lo mismo que un presupuesto completo de impresión 3D?',
    answer:
      'No. Esta calculadora cubre la electricidad de la máquina y la amortización del hardware. Un presupuesto completo también debe incluir filamento o resina, mano de obra, impresiones fallidas, postprocesado, embalaje, gastos generales y margen.',
  },
];

const howToData = [
  { name: 'Introduce la potencia medida de la impresora', text: 'Usa los vatios medios durante una impresión comparable, no solo la potencia nominal de la fuente de alimentación.' },
  { name: 'Establece la duración de la impresión', text: 'Mueve el deslizador de duración al tiempo de máquina esperado para el trabajo o lote de producción.' },
  { name: 'Añade los datos de energía y activo', text: 'Introduce la tarifa eléctrica, el precio de compra de la máquina y la vida útil estimada en horas de funcionamiento.' },
  { name: 'Lee la distribución de costes', text: 'Usa el coste total, la tarifa horaria y la composición entre electricidad y depreciación para poner precio al tiempo de máquina.' },
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
    'Calculadora de consumo eléctrico de impresora 3D',
    'Calculadora de depreciación horaria de máquina',
    'Estimador de coste operativo de impresión 3D',
    'Composición de coste: electricidad versus amortización',
  ],
  inLanguage: 'es',
};

export const content: ToolLocaleContent<MachineHourlyRateCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Entradas de tarifa horaria de máquina',
    resultsAriaLabel: 'Resultados de tarifa horaria de máquina',
    settingsLabel: 'Ajustes del presupuesto',
    currencyLabel: 'Moneda',
    currencyOptions: [
      { code: 'EUR', label: '\u20ac', symbol: '\u20ac' },
      { code: 'USD', label: '$', symbol: '$' },
      { code: 'GBP', label: '\u00a3', symbol: '\u00a3' },
      { code: 'CAD', label: 'C$', symbol: 'C$' },
      { code: 'AUD', label: 'A$', symbol: 'A$' },
      { code: 'CHF', label: 'Fr', symbol: 'Fr' },
      { code: 'CNY', label: '\u00a5', symbol: '\u00a5' },
      { code: 'INR', label: '\u20b9', symbol: '\u20b9' },
      { code: 'BRL', label: 'R$', symbol: 'R$' },
      { code: 'MXN', label: '$', symbol: '$' },
      { code: 'RUB', label: '\u20bd', symbol: '\u20bd' },
      { code: 'PLN', label: 'z\u0142', symbol: 'z\u0142' },
      { code: 'SEK', label: 'kr', symbol: 'kr' },
      { code: 'NOK', label: 'kr', symbol: 'kr' },
      { code: 'DKK', label: 'kr', symbol: 'kr' },
      { code: 'TRY', label: '\u20ba', symbol: '\u20ba' },
      { code: 'JPY', label: '\u00a5', symbol: '\u00a5' },
    ],
    durationLabel: 'Tiempo de producción',
    powerLabel: 'Potencia media',
    tariffLabel: 'Tarifa eléctrica',
    purchasePriceLabel: 'Precio de compra de la máquina',
    usefulLifeLabel: 'Vida útil estimada',
    totalCostLabel: 'Coste operativo total',
    hourlyRateLabel: 'Tarifa horaria de máquina',
    electricityLabel: 'Electricidad',
    depreciationLabel: 'Amortización',
    electricityPerHourLabel: 'Coste de energía por hora',
    depreciationPerHourLabel: 'Coste del activo por hora',
    compositionLabel: 'Composición del coste: electricidad versus amortización',
    insightLabel: 'Perspectiva de rentabilidad',
    utilizationLabel: 'Presión de utilización',
    utilizationValueLabel: 'Vida útil consumida',
    utilizationHint: 'Este trabajo consume la parte mostrada de la vida útil estimada de la máquina.',
    batchLabel: 'Coste operativo del lote',
    energyUsedLabel: 'Energía utilizada',
    costDriverLabel: 'Factor principal',
    energyDriverLabel: 'Energía',
    assetDriverLabel: 'Activo',
    balancedDriverLabel: 'Equilibrado',
    electricityDominant: 'El trabajo está liderado por la energía: la tarifa, el tamaño de la cama caliente, la temperatura de la cámara y el tiempo de calentamiento en vacío afectarán más al presupuesto que el precio de compra.',
    depreciationDominant: 'El trabajo está liderado por el activo: el precio de la máquina y la vida útil dominan, por lo que cada hora no utilizada debilita la economía de esta impresora.',
    balancedDominant: 'La electricidad y la amortización están lo suficientemente cerca como para que ambas aparezcan en la tarifa horaria del taller en lugar de ocultar una dentro del margen.',
    hoursUnit: 'h',
    wattsUnit: 'W',
    kwhUnit: 'kWh',
    currencySymbol: '\u20ac',
  },
  seo: [
    { type: 'title', text: 'Qué significa la tarifa horaria de máquina en la impresión 3D', level: 2 },
    {
      type: 'paragraph',
      html: 'Una <strong>tarifa horaria de máquina</strong> es el coste de mantener una impresora ocupada productivamente durante una hora antes de añadir material, mano de obra, postprocesado, embalaje y beneficio. En la impresión 3D, esta cifra a menudo se subestima porque los costes visibles como el filamento son más fáciles de notar que los costes ocultos como la electricidad y la depreciación del hardware. Una impresora de escritorio puede consumir solo unos céntimos de electricidad por hora, pero una máquina profesional que costó varios miles de euros debe recuperar su valor durante una vida útil finita. Esta calculadora aísla esos dos costes de máquina para que el presupuesto de producción comience con una base medible.',
    },
    {
      type: 'paragraph',
      html: 'La calculadora utiliza dos fórmulas transparentes. El coste eléctrico es <code>(W / 1000) x T x tarifa</code>, donde <code>W</code> son los vatios medios, <code>T</code> es la duración de la impresión en horas, y la tarifa es el precio de la electricidad por kilovatio-hora. El coste de amortización es <code>(precio de compra / horas de vida útil) x T</code>. El coste operativo total es la suma de ambos. Como ambos términos escalan con el tiempo, las mismas fórmulas también producen una tarifa horaria limpia: electricidad por hora más depreciación por hora.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'W / 1000', label: 'Convierte vatios a kilovatios', icon: 'mdi:flash-outline' },
        { value: 'kWh', label: 'Unidad de facturación de energía', icon: 'mdi:meter-electric-outline' },
        { value: 'P / life', label: 'Coste de máquina lineal por hora', icon: 'mdi:chart-line' },
        { value: 'Ce + Ca', label: 'Coste operativo total', icon: 'mdi:calculator-variant-outline' },
      ],
    },
    {
      type: 'tip',
      title: 'Usa vatios medios medidos',
      html: '<p>La etiqueta de la fuente de alimentación indica la capacidad máxima, no el consumo de la impresora durante un trabajo real. Para una mejor <strong>entrada en la calculadora de consumo de impresora 3D</strong>, mide una impresión representativa con un medidor de pared y promedia las fases de calentamiento, impresión, ventilador, cama y espera.</p>',
    },
    { type: 'title', text: 'Coste eléctrico: convertir vatios en coste de producción', level: 2 },
    {
      type: 'paragraph',
      html: 'El coste eléctrico depende del consumo medio de energía, no solo del vataje nominal de la impresora. Una máquina con una fuente de alimentación de 350 W puede promediar 90 W en un trabajo pequeño de PLA después del calentamiento, mientras que una impresora grande cerrada con cama caliente y cámara puede mantenerse mucho más alta para polímeros técnicos. El área de la cama caliente, la temperatura de la cámara, la temperatura del nozzle, la temperatura ambiente, el ciclo del ventilador y el tiempo de inactividad antes de retirar la pieza pueden cambiar el número de potencia efectiva.',
    },
    {
      type: 'paragraph',
      html: 'La conversión a kilovatios-hora es simple pero importante. Una impresora de 180 W funcionando durante 8 horas usa <code>0.18 kW x 8 h = 1.44 kWh</code>. A 0.25 € por kWh, esa parte del trabajo cuesta 0.36 €. Puede parecer poco, pero las granjas con muchas máquinas, trabajos largos de PETG o ASA, armarios de secado calefactados y control climático pueden convertir pequeñas diferencias horarias en una factura mensual significativa.',
    },
    {
      type: 'table',
      headers: ['Entrada', 'Qué introducir', 'Error común'],
      rows: [
        ['Potencia media', 'Vatios medidos durante todo el ciclo de impresión', 'Usar la potencia nominal de la fuente o el pico de calentamiento.'],
        ['Duración', 'Tiempo de ocupación de la máquina en horas', 'Ignorar el precalentamiento, enfriamiento o tiempos de bloqueo de cola.'],
        ['Tarifa', 'Precio real por kWh de la factura', 'Usar un promedio nacional desactualizado en lugar de la tarifa del taller.'],
        ['Moneda', 'La moneda utilizada en tu modelo de presupuesto', 'Mezclar coste de hardware en euros con suposiciones energéticas en dólares.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'El coste energético es bajo hasta que la escala lo hace visible',
      badge: 'Planificación de granja',
      html: '<p>Una impresora pequeña puede no justificar una contabilidad energética elaborada. Veinte impresoras ejecutando trabajos largos cada día sí. La misma fórmula eléctrica puede usarse por trabajo, por impresora, por celda o por mes cambiando solo la duración.</p>',
    },
    { type: 'title', text: 'Amortización: el coste oculto detrás de la rentabilidad de la impresora', level: 2 },
    {
      type: 'paragraph',
      html: 'La amortización es el reconocimiento financiero de que una impresora se consume con el uso. Las guías se desgastan, los ventiladores envejecen, las camas pierden planitud, los hotends se obstruyen, la electrónica se vuelve obsoleta y la máquina eventualmente necesita reemplazo. Si una impresora cuesta 900 € y el taller espera 5000 horas de funcionamiento útiles, la máquina consume 0.18 € de valor del activo cada hora productiva. Un trabajo de diez horas por tanto conlleva 1.80 € de coste de hardware antes de considerar material o mano de obra.',
    },
    {
      type: 'paragraph',
      html: 'La depreciación lineal es intencionadamente práctica aquí. No intenta modelar la ley fiscal, el valor de reventa, la financiación o los eventos de mantenimiento. En cambio, responde a la pregunta de fijación de precios de producción: ¿cuánto de esta compra de máquina debe asignarse a cada hora de trabajo? Ese número es la base para las búsquedas de <strong>tasa de depreciación horaria para impresora 3D</strong> y para cualquier granja que quiera que exista dinero de reemplazo cuando la impresora llegue al final de su vida económica.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Impresora de escritorio para hobby',
          description: 'Bajo precio de compra y uso irregular. La electricidad puede ser visible en trabajos con cama caliente, pero la amortización sigue siendo importante si se venden piezas.',
          icon: 'mdi:printer-3d-nozzle-outline',
          points: ['Menor exposición de capital', 'Vida útil a menudo incierta', 'La mano de obra manual suele dominar los presupuestos'],
        },
        {
          title: 'Impresora de granja prosumer',
          description: 'Precio de compra moderado, alta actividad, materiales repetidos y muchos trabajos idénticos hacen que la depreciación horaria sea un dato clave para presupuestar.',
          icon: 'mdi:factory',
          highlight: true,
          points: ['Buena para suposiciones de vida de 3000-8000 horas', 'Registrar reparaciones reales', 'Separar tiempo de máquina de mano de obra'],
        },
        {
          title: 'Sistema industrial',
          description: 'El alto coste de capital significa que la amortización puede dominar. Los contratos de servicio, el entorno de la cámara de construcción y el tiempo de calificación pueden necesitar líneas de coste adicionales.',
          icon: 'mdi:domain',
          points: ['El coste de capital domina', 'El tiempo de inactividad es caro', 'Añadir servicio y gastos generales de instalaciones'],
        },
      ],
    },
    {
      type: 'message',
      title: 'La entrada de vida útil merece atención',
      ariaLabel: 'Nota sobre la vida útil',
      html: '<p>El valor predeterminado de 5000 horas es un punto de partida, no una verdad universal. Una máquina de hobby poco usada puede quedar obsoleta antes de alcanzar esa cifra, mientras que una máquina de granja bien mantenida puede superarla. Usa el número que coincida con tu política de reemplazo.</p>',
    },
    { type: 'title', text: 'Elegir las horas de vida útil sin conjeturas', level: 2 },
    {
      type: 'paragraph',
      html: 'La vida útil es el supuesto contable más sensible en esta calculadora porque está en el denominador de la fórmula de amortización. Si a la misma impresora de 900 € se le asignan 3000 horas útiles, la depreciación es de 0.30 € por hora. Con 9000 horas útiles, baja a 0.10 € por hora. La impresora no cambió, pero la expectativa del negocio cambió. Por eso un presupuesto debe documentar la vida útil elegida en lugar de enterrarla en un margen genérico.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Usa registros de mantenimiento cuando estén disponibles: cambios de nozzle, fallos de ventiladores, desgaste de guías, correas, placas, hotends y superficies de cama revelan la curva de coste real.',
        'Separa familias de impresoras. Un pequeño bedslinger, una máquina de producción CoreXY y una impresora de resina no deberían compartir un mismo número de vida útil.',
        'Menor vida útil para máquinas experimentales que pasan muchas horas en ajustes fallidos, pruebas de materiales o validaciones específicas del cliente.',
        'Aumenta la vida útil solo cuando el tiempo de actividad, el mantenimiento preventivo, las piezas de repuesto y el historial de reemplazos respalden la suposición.',
        'Revisa la suposición después de actualizaciones importantes porque un nuevo sistema de movimiento, gabinete o hotend puede cambiar la vida económica del activo.',
      ],
    },
    {
      type: 'table',
      headers: ['Supuesto de vida útil', 'Mejor ajuste', 'Consecuencia en el precio'],
      rows: [
        ['2000-3000 h', 'Máquinas experimentales, de bajo coste, mal documentadas o de uso intensivo', 'Mayor depreciación horaria protege el efectivo de reemplazo.'],
        ['4000-6000 h', 'Máquinas de escritorio estándar o prosumer con uso regular de producción', 'Rango inicial equilibrado para muchas granjas pequeñas.'],
        ['7000-10000 h', 'Flota de impresoras estable con datos de mantenimiento y materiales controlados', 'Menor coste horario del activo pero requiere confianza en el tiempo de actividad.'],
        ['Más de 10000 h', 'Activos industriales o fuertemente mantenidos con ciclo de vida documentado', 'Útil solo cuando el servicio y el tiempo de inactividad se contabilizan por separado.'],
      ],
    },
    {
      type: 'summary',
      title: 'Lista de verificación de vida útil',
      items: [
        'Ajusta la vida útil a la clase de impresora, no a un número genérico de internet.',
        'Documenta el supuesto para que los presupuestos sigan siendo explicables meses después.',
        'Recalcula cuando la máquina se reutilice de uso hobby a producción remunerada.',
      ],
    },
    { type: 'title', text: 'Interpretar la división entre electricidad y amortización', level: 2 },
    {
      type: 'paragraph',
      html: 'La barra de composición muestra si un trabajo está liderado por la energía o por el activo. Los trabajos liderados por la energía responden fuertemente a la tarifa eléctrica, la estrategia de la cama caliente, la temperatura de la cámara, el comportamiento de calentamiento y las condiciones ambientales. Los trabajos liderados por el activo responden más fuertemente al precio de compra, la vida útil y la utilización. Una división equilibrada significa que ninguna línea debe ignorarse; ambas pertenecen a la tarifa horaria base de la máquina.',
    },
    {
      type: 'paragraph',
      html: 'Esta división es útil porque el mismo coste total puede tener diferentes remedios. Si la electricidad domina, reducir la temperatura de la cama, agrupar piezas para evitar calentamientos repetidos, aislar un gabinete o imprimir durante ventanas de tarifa más baja puede ayudar. Si la amortización domina, la mejor palanca es la utilización: mantén la impresora ocupada con trabajos rentables, evita el capital inactivo y elige el tamaño de la máquina cuidadosamente en lugar de comprar capacidad que no se usa.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Coste eléctrico', definition: 'La energía facturada consumida por la impresora durante la duración seleccionada.' },
        { term: 'Amortización', definition: 'La parte del precio de compra de la máquina asignada a las horas utilizadas por el trabajo.' },
        { term: 'Vida útil', definition: 'El número esperado de horas de funcionamiento productivo antes de que la impresora sea reemplazada económicamente.' },
        { term: 'Tarifa horaria de máquina', definition: 'Coste eléctrico por hora más coste de depreciación por hora antes de material, mano de obra, gastos generales y beneficio.' },
        { term: 'Coste operativo', definition: 'El coste de máquina incurrido para mantener la producción funcionando durante una duración específica.' },
      ],
    },
    {
      type: 'proscons',
      title: 'Lo que esta calculadora incluye y excluye',
      items: [
        { pro: 'Incluye consumo eléctrico medido, tarifa eléctrica, duración, precio de compra y vida útil.', con: 'No incluye filamento, resina, soportes, impresiones fallidas, mano de obra, alquiler, software, embalaje ni margen.' },
        { pro: 'Muestra la división de costes para que los usuarios identifiquen el principal factor económico.', con: 'Usa depreciación lineal, por lo que no modela programas de depreciación fiscal ni valor de reventa.' },
        { pro: 'Funciona para una impresión, un lote o un bloque de producción mensual cambiando la duración.', con: 'Requiere suposiciones honestas de potencia y vida útil para evitar falsa precisión.' },
      ],
    },
    { type: 'title', text: 'Usar el resultado para fijar un precio rentable por hora', level: 2 },
    {
      type: 'paragraph',
      html: 'La tarifa horaria calculada es el suelo para el tiempo de máquina, no el precio de venta final. Un presupuesto completo de impresión 3D normalmente añade material, desperdicio de soportes, purga, mano de obra del operador, tiempo de laminado y preparación, margen por fallos, consumibles de mantenimiento, alquiler, software, comisiones de pago, impuestos y el margen objetivo. La tarifa horaria de máquina sigue siendo esencial porque evita que la propia impresora sea tratada como gratuita.',
    },
    {
      type: 'paragraph',
      html: 'Por ejemplo, si la calculadora devuelve 0.225 € por hora de máquina y un trabajo ocupa la impresora durante 14 horas, el coste operativo de la máquina es de 3.15 €. Si el material es 4.80 €, la asignación de mano de obra es 6.00 €, el margen por fallos es 1.20 € y se aplica el margen después, el presupuesto se vuelve financieramente trazable. Cuando un cliente pregunta por qué una impresión larga cuesta más de lo que sugiere el peso del plástico, el tiempo de máquina se convierte en una partida explicable.',
    },
    {
      type: 'card',
      icon: 'mdi:cash-clock',
      title: 'Perspectiva de rentabilidad',
      html: '<p>Este cálculo es la base para definir el <strong>precio por hora</strong> de cualquier granja de impresión. Una vez que se conoce el coste de máquina por hora, el taller puede decidir si cobrar el tiempo de máquina directamente, incluirlo en el margen del material, o usarlo internamente para comparar impresoras y materiales.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'No presupuestes solo por gramos',
      badge: 'Coste oculto',
      html: '<p>Una pieza ligera que ocupa la impresora durante 20 horas puede consumir más capacidad de máquina que una pieza pesada impresa rápidamente. La fijación de precios basada en el peso sin tiempo de máquina a menudo infravalora los trabajos lentos, altos, de capa fina o de bajo flujo.</p>',
    },
    { type: 'title', text: 'Ejemplos prácticos para estimaciones de coste operativo en impresión 3D', level: 2 },
    {
      type: 'paragraph',
      html: 'Un trabajo de PLA de escritorio bien ajustado puede promediar 120 W, funcionar durante 6 horas, usar una tarifa de 0.22 €/kWh y estar en una impresora de 600 € con una vida útil de 5000 horas. La electricidad es solo 0.158 €, mientras que la amortización es 0.720 €. El coste operativo total de la máquina es de aproximadamente 0.878 €, y la tarifa horaria es de aproximadamente 0.146 €. En este caso, el trabajo está claramente liderado por el activo: una mejor utilización de la máquina afecta la rentabilidad más que pequeños cambios en la potencia.',
    },
    {
      type: 'paragraph',
      html: 'Un trabajo de ASA en una impresora cerrada más grande puede promediar 420 W durante 18 horas a 0.30 €/kWh. Si la impresora cuesta 1800 € y la vida útil es de 4500 horas, la electricidad es 2.268 € y la amortización es 7.200 €, para un coste total de máquina de 9.468 €. Aunque el uso de energía es mucho mayor, la depreciación sigue dominando porque el coste de capital y la larga ocupación de la máquina son sustanciales.',
    },
    {
      type: 'paragraph',
      html: 'Una impresora de resina puede contar una historia diferente. La impresora puede consumir energía modesta, pero el cálculo sigue aplicándose a la ocupación de la máquina. Si una construcción toma 9 horas en una máquina de 2500 € que se espera que produzca 4000 horas útiles, solo la amortización es de 5.625 €. Ese número pertenece al presupuesto antes de añadir resina, guantes, IPA o líquido de lavado, postcurado, soportes y mano de obra de limpieza.',
    },
    {
      type: 'summary',
      title: 'Reglas de decisión',
      items: [
        'Usa vatios medios medidos para la precisión eléctrica.',
        'Usa horas de vida útil realistas para la recuperación del activo.',
        'Trata el resultado como el suelo del tiempo de máquina, luego añade material, mano de obra, gastos generales, riesgo y margen.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
