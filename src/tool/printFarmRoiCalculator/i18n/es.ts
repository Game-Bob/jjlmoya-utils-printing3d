import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PrintFarmRoiCalculatorUI } from '../ui';

const slug = 'calculadora-roi-granja-impresion-3d';
const title = 'Calculadora de ROI de granja de impresión 3D';
const description =
  'Simula la rentabilidad mensual, el periodo de retorno y el ROI anualizado para una granja de impresión 3D utilizando la ocupación, tasa de fallo, electricidad, costes fijos y costes variables por hora.';

const currencyOptions = [
  { code: 'EUR', label: 'EUR', symbol: '€' },
  { code: 'USD', label: 'USD', symbol: '$' },
  { code: 'GBP', label: 'GBP', symbol: '£' },
  { code: 'CAD', label: 'CAD', symbol: 'C$' },
  { code: 'AUD', label: 'AUD', symbol: 'A$' },
  { code: 'CHF', label: 'CHF', symbol: 'Fr' },
  { code: 'CNY', label: 'CNY', symbol: '¥' },
  { code: 'INR', label: 'INR', symbol: '₹' },
  { code: 'BRL', label: 'BRL', symbol: 'R$' },
  { code: 'MXN', label: 'MXN', symbol: 'MX$' },
  { code: 'RUB', label: 'RUB', symbol: '₽' },
  { code: 'PLN', label: 'PLN', symbol: 'zł' },
  { code: 'SEK', label: 'SEK', symbol: 'kr' },
  { code: 'NOK', label: 'NOK', symbol: 'kr' },
  { code: 'DKK', label: 'DKK', symbol: 'kr' },
  { code: 'TRY', label: 'TRY', symbol: '₺' },
  { code: 'JPY', label: 'JPY', symbol: '¥' },
];

const faqData = [
  {
    question: '¿Cómo se calcula el ROI de una granja de impresión 3D?',
    answer:
      'Estima las horas mensuales productivas, multiplícalas por el precio de venta por hora de máquina, resta los costes fijos, de electricidad y variables por hora, y luego compara el beneficio anual con la inversión inicial.',
  },
  {
    question: '¿Por qué influye la tasa de éxito en el retorno de la granja de impresión?',
    answer:
      'Las impresiones fallidas consumen capacidad de la máquina, material, boquillas, energía y atención del operario sin producir horas facturables. Una menor tasa de éxito reduce las horas productivas reales y retrasa el retorno.',
  },
  {
    question: '¿Qué se debe incluir en el coste variable por hora?',
    answer:
      'Incluye el consumo de filamento o resina, el desgaste de boquillas, el desgaste de la superficie de construcción, las piezas de mantenimiento rutinario, los consumibles y cualquier asignación por hora que varíe con el tiempo de producción exitoso.',
  },
  {
    question: '¿Es lo mismo el retorno que el ROI?',
    answer:
      'No. El retorno estima cuántos meses se necesitan para recuperar la inversión inicial a partir del beneficio neto mensual. El ROI compara el beneficio anualizado con la inversión original como un porcentaje.',
  },
];

const howToData = [
  { name: 'Introducir la escala de la granja', text: 'Añade el número de impresoras activas y la inversión inicial para máquinas, configuración, estaciones de trabajo y puesta en marcha.' },
  { name: 'Añadir los costes operativos mensuales', text: 'Introduce los costes fijos y de electricidad como costes mensuales, y luego añade el coste variable por hora de máquina productiva.' },
  { name: 'Establecer la ocupación y tasa de éxito', text: 'Utiliza porcentajes de ocupación y éxito realistas para que el modelo descuente el tiempo de inactividad y las impresiones fallidas.' },
  { name: 'Leer los resultados de rentabilidad', text: 'Compara los ingresos mensuales con los costes, y luego utiliza los meses de retorno y el ROI anualizado para juzgar la viabilidad de la inversión.' },
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
    'Calculadora de ROI de granja de impresión 3D',
    'Simulador de retorno de inversión en impresión 3D',
    'Calculadora de rentabilidad de granja de impresión',
    'Ajuste de ocupación e impresiones fallidas',
    'Modelo de coste operativo multimoneda',
  ],
  inLanguage: 'es',
};

export const content: ToolLocaleContent<PrintFarmRoiCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Entradas del ROI de la granja de impresión',
    resultsAriaLabel: 'Resultados del ROI de la granja de impresión',
    currencyLabel: 'Moneda',
    currencyOptions,
    printerCountLabel: 'Número de impresoras',
    initialInvestmentLabel: 'Inversión inicial',
    fixedMonthlyCostLabel: 'Coste mensual fijo',
    electricityMonthlyCostLabel: 'Coste mensual de electricidad',
    hourlyRateLabel: 'Tarifa de venta por hora',
    occupancyLabel: 'Ocupación media',
    successRateLabel: 'Tasa de éxito',
    variableCostLabel: 'Coste variable por hora',
    averageHoursPerPartLabel: 'Horas medias por pieza',
    paybackLabel: 'Periodo de retorno',
    netProfitLabel: 'Beneficio neto mensual',
    annualRoiLabel: 'ROI anualizado',
    productiveHoursLabel: 'Horas productivas reales',
    revenueLabel: 'Ingresos',
    costsLabel: 'Costes',
    fixedCostShortLabel: 'Fijo',
    electricityShortLabel: 'Electricidad',
    variableCostShortLabel: 'Variable',
    marginLabel: 'Margen neto',
    breakEvenPartsLabel: 'Piezas para el punto de equilibrio',
    breakEvenHoursLabel: 'Horas para el punto de equilibrio',
    stressScenarioLabel: 'Peor escenario posible',
    exportSummaryLabel: 'Descargar resumen',
    chartLabel: 'Ingresos mensuales frente a costes operativos',
    monthsUnit: 'meses',
    hoursUnit: 'h',
    percentUnit: '%',
    notViableLabel: 'No viable',
    positiveInsight: 'El beneficio mensual es positivo tras aplicar la ocupación, la tasa de éxito y los costes operativos.',
    negativeInsight: 'Los costes operativos superan los ingresos ajustados; mejora la ocupación, los precios o la tasa de fallos antes de escalar.',
    currencySymbol: '€',
    defaultCurrencyCode: 'EUR',
    pendingLabel: '-',
    partsUnit: 'piezas/mes',
    reportFilename: 'resumen-roi-granja-impresion.csv',
    reportTitle: 'Informe de Viabilidad del ROI de la Granja de Impresión 3D',
    reportCurrencyLabel: 'Moneda',
  },
  seo: [
    { type: 'title', text: 'Cómo funciona esta calculadora de ROI de granja de impresión 3D', level: 2 },
    {
      type: 'paragraph',
      html: 'Una <strong>calculadora de ROI de granja de impresión 3D</strong> debe responder a una pregunta de inversión específica: ¿recuperará un grupo de impresoras su coste de configuración con la suficiente rapidez como para justificar el capital, el espacio, el mantenimiento y el riesgo operativo? Este simulador modela esa pregunta a partir de la capacidad mensual de las máquinas. Cada impresora aporta 720 horas brutas en un mes estándar de 30 días, y luego el modelo descuenta esas horas según la ocupación y la tasa de éxito de impresión. El resultado no es la capacidad teórica, sino el tiempo de producción facturable que sobrevive a los periodos de inactividad, las colas de trabajo, las impresiones fallidas, las reimpresiones, la calibración y el tiempo de inactividad práctico.',
    },
    {
      type: 'paragraph',
      html: 'La cadena de cálculo es intencionadamente transparente. Las horas mensuales brutas equivalen a <code>impresoras x 720</code>. Las horas productivas reales equivalen a las horas brutas multiplicadas por la ocupación media y la tasa de éxito. Los ingresos mensuales equivalen a las horas productivas multiplicadas por la tarifa por hora de cara al cliente. Los costes operativos combinan los costes fijos mensuales, la electricidad y los costes variables por hora. El beneficio neto mensual son los ingresos menos esos costes operativos. El periodo de retorno divide la inversión inicial por el beneficio neto mensual, mientras que el ROI anualizado compara doce meses de beneficio neto con la inversión inicial.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '720 h', label: 'Capacidad bruta mensual por impresora', icon: 'mdi:clock-outline' },
        { value: 'U x S', label: 'Ajuste de ocupación y éxito', icon: 'mdi:percent-outline' },
        { value: 'Ingresos - costes', label: 'Beneficio neto mensual', icon: 'mdi:finance' },
        { value: 'Inversión / beneficio', label: 'Periodo de retorno', icon: 'mdi:calendar-clock' },
      ],
    },
    {
      type: 'tip',
      title: 'Utiliza entradas conservadoras para las decisiones de inversión',
      html: '<p>Para una primera aproximación, introduce la ocupación que puedas defender con la demanda actual, no la ocupación que esperas alcanzar tras mejorar el marketing. Una granja que solo funciona con una ocupación optimista no es todavía una inversión sólida.</p>',
    },
    { type: 'title', text: 'Por qué la ocupación cambia la rentabilidad de la granja de impresión', level: 2 },
    {
      type: 'paragraph',
      html: 'La ocupación es el porcentaje del tiempo disponible de la máquina que realmente se dedica a imprimir trabajos pagados o vendibles. Es la palanca más fuerte en muchos modelos de granjas pequeñas porque la inversión inicial es fija. Una impresora comprada para producción cuesta lo mismo tanto si está reservada de las ocho horas al día como veinte horas al día. Una mayor ocupación distribuye el alquiler, la configuración, el inventario de repuestos, el software y la depreciación de las máquinas entre más horas facturables.',
    },
    {
      type: 'paragraph',
      html: 'La calculadora trata la ocupación como un multiplicador directo de la capacidad bruta. Diez impresoras crean 7200 horas de máquina brutas al mes. Con una ocupación del 40%, solo 2880 horas entran en el modelo de ingresos antes del ajuste por tasa de éxito. Con una ocupación del 75%, entran 5400 horas en el modelo. La diferencia puede decidir si el retorno tarda meses, años o si nunca ocurre.',
    },
    {
      type: 'table',
      headers: ['Nivel de ocupación', 'Significado operativo', 'Implicación en el ROI'],
      rows: [
        ['Menos del 30%', 'Las máquinas pasan la mayor parte del mes esperando pedidos, archivos, operarios o mantenimiento.', 'La inversión inicial es difícil de recuperar a menos que el precio por hora sea alto.'],
        ['30-55%', 'Rango inicial común para granjas con demanda mixta y manejo manual.', 'La rentabilidad depende en gran medida de los costes fijos y de la tasa de fallos.'],
        ['55-75%', 'Nivel de reservas saludable con espacio para trabajos urgentes, mantenimiento y cambios de configuración.', 'Suele ser el primer rango donde el retorno se vuelve realista.'],
        ['Más del 75%', 'Alta ocupación que requiere una programación fiable, flujo de material y mantenimiento preventivo.', 'Fuerte potencial de ROI pero poca tolerancia a averías o cuellos de botella del operario.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Una alta ocupación no equivale a un alto beneficio',
      badge: 'Riesgo de precios',
      html: '<p>Una granja puede estar muy ocupada y aun así perder dinero si la tarifa por hora es demasiado baja, las reimpresiones son frecuentes, el desperdicio de material es alto o se subestimaron los costes fijos. Compara siempre la ocupación con el margen, no solo con los ingresos.</p>',
    },
    { type: 'title', text: 'Considerar las impresiones fallidas y las reimpresiones', level: 2 },
    {
      type: 'paragraph',
      html: 'La tasa de éxito introducida es lo que separa a este simulador de retorno de inversión de una simple calculadora de capacidad. Las impresiones fallidas consumen el mismo tiempo de calendario que las exitosas pero no generan el mismo resultado vendible. También consumen filamento, resina, bases de impresión, boquillas, electricidad, mano de obra y la buena voluntad del cliente. Una granja con una tasa de éxito del 90% pierde uno de cada diez bloques de producción potenciales antes de contabilizar los ingresos.',
    },
    {
      type: 'paragraph',
      html: 'La tasa de éxito debe medirse sobre trabajos comparables. Una granja que imprime plantillas repetitivas de PLA puede mantener una tasa de éxito muy alta tras ajustar el proceso. Una granja que produce modelos de clientes únicos, piezas altas, polímeros técnicos, miniaturas de resina o trabajos multimaterial puede necesitar una suposición menor. Si combinas trabajos sencillos y de riesgo, ejecuta la calculadora dos veces: una para la producción estándar y otra para los trabajos personalizados.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Producción repetida',
          description: 'Geometría de piezas conocida, perfiles ajustados, materiales predecibles y demanda estable.',
          icon: 'mdi:repeat',
          points: ['Mayor suposición de éxito', 'Menor incertidumbre de configuración', 'Mejor confianza en el retorno'],
        },
        {
          title: 'Servicio de impresión personalizado',
          description: 'Los archivos varían según el cliente, la geometría, la estrategia de soporte y la expectativa de calidad.',
          icon: 'mdi:file-cad',
          highlight: true,
          points: ['Suposición de éxito moderada', 'Más variación en los presupuestos', 'Necesita margen para reimpresiones'],
        },
        {
          title: 'Materiales experimentales',
          description: 'Polímeros de ingeniería, materiales flexibles, filamentos cargados y ajuste del proceso de resina.',
          icon: 'mdi:flask-outline',
          points: ['Menor suposición de éxito', 'Mayor desgaste de consumibles', 'Usa entradas de ROI prudentes'],
        },
      ],
    },
    {
      type: 'message',
      title: 'La tasa de fallos pertenece al modelo financiero',
      ariaLabel: 'Nota sobre contabilización de fallos',
      html: '<p>No ocultes las reimpresiones dentro de costes fijos vagos. Una tasa de éxito visible hace que el caso de inversión sea más fácil de cuestionar, mejorar y explicar.</p>',
    },
    { type: 'title', text: 'Construir un modelo de costes mensuales fiable', level: 2 },
    {
      type: 'paragraph',
      html: 'El coste operativo tiene tres niveles en esta herramienta. El coste mensual fijo cubre los gastos que existen incluso cuando las impresoras están inactivas: alquiler, internet, seguros, software, contabilidad, almacenamiento, cobertura de mano de obra básica y otros costes generales. El coste mensual de electricidad capta la energía utilizada por las impresoras y el equipo de producción directamente relacionado. El coste variable por hora cubre los costes que varían con el tiempo de máquina productivo, como el filamento, la resina, las boquillas, los tubos de PTFE, el desgaste de la base de impresión, los filtros, el lubricante, las piezas de mantenimiento y los consumibles de limpieza.',
    },
    {
      type: 'paragraph',
      html: 'Mantener la electricidad como una entrada mensual separada es útil para las granjas porque el consumo de energía a menudo se rastrea a partir de las facturas o contadores secundarios en lugar de calcularse impresión por impresión. Una granja con camas calientes que produce PETG, ASA, ABS o nailon puede tener un perfil de energía muy diferente al de una granja de PLA en la misma sala. Si ya calculas la electricidad por hora de máquina, puedes incluir esa cifra dentro del coste variable por hora y poner a cero el campo de electricidad mensual.',
    },
    {
      type: 'table',
      headers: ['Entrada de coste', 'Incluir', 'Evitar'],
      rows: [
        ['Coste mensual fijo', 'Alquiler, seguros, internet, software, personal básico, almacenamiento.', 'Material utilizado solo cuando las impresoras funcionan.'],
        ['Coste mensual de electricidad', 'Energía de impresoras, secadores, estaciones de lavado, curado, ventilación, climatización.', 'Electricidad de la oficina o del hogar no relacionada.'] ,
        ['Coste variable por hora', 'Filamento, resina, boquillas, consumibles de mantenimiento, asignación de desgaste por hora.', 'Coste de compra de máquina único.'],
        ['Inversión inicial', 'Impresoras, estanterías, configuración, herramientas, secadores, hardware de gestión de granja.', 'Costes mensuales que se repiten tras el lanzamiento.'],
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Horas mensuales brutas', definition: 'Capacidad teórica de la máquina antes de los ajustes de ocupación e impresiones fallidas.' },
        { term: 'Horas productivas reales', definition: 'Capacidad restante tras aplicar la ocupación y la tasa de éxito.' },
        { term: 'Periodo de retorno', definition: 'Meses necesarios para que el beneficio neto mensual recupere la inversión inicial.' },
        { term: 'ROI anualizado', definition: 'Doce meses de beneficio neto divididos por la inversión inicial.' },
        { term: 'Coste variable por hora', definition: 'Asignación para consumibles y mantenimiento que varía con el tiempo de impresión productivo.' },
      ],
    },
    { type: 'title', text: 'Establecer la tarifa de venta por hora de máquina', level: 2 },
    {
      type: 'paragraph',
      html: 'La tarifa de venta por hora es la cantidad cobrada al cliente por una hora de máquina productiva. Puede mostrarse directamente en los presupuestos o integrarse dentro de una fórmula de precio que también incluya el material, la mano de obra, el acabado, el embalaje y el margen. La clave es la consistencia: si la tarifa por hora está pensada para incluir el material, no añadas también el mismo material como coste variable por hora. Si la tarifa por hora es solo el tiempo de máquina, asegúrate de que el material y la mano de obra estén representados en otra parte del modelo de negocio.',
    },
    {
      type: 'paragraph',
      html: 'Una tarifa que parece competitiva en trabajos individuales puede fallar a escala de granja. Las impresiones largas ocupan una capacidad que podría haber servido para otros trabajos. Las alturas de capa finas, los materiales lentos, las piezas altas y las geometrías con muchos soportes reducen el rendimiento. Por lo tanto, una calculadora de rentabilidad de granja de impresión debe utilizarse junto con datos de presupuestos reales: duración media del trabajo, equivalente por hora de pago medio, tasa de aceptación del cliente y volumen de pedidos mensual.',
    },
    {
      type: 'proscons',
      title: 'Precios por hora en una granja de impresión',
      items: [
        { pro: 'Hace visible la ocupación de la máquina y evita cobrar de menos por impresiones largas.', con: 'Los clientes pueden necesitar explicaciones cuando una pieza ligera tarda muchas horas.' },
        { pro: 'Funciona bien para la planificación interna del ROI y decisiones de capacidad.', con: 'No sustituye a la fijación de precios de material, mano de obra, acabado y riesgo.' },
        { pro: 'Permiet una comparación rápida entre tipos de impresora y escenarios de ocupación.', con: 'Puede ser engañoso si se ignoran la tasa de fallos y el tiempo de espera.' },
      ],
    },
    {
      type: 'card',
      icon: 'mdi:cash-clock',
      title: 'Punto de control de precios',
      html: '<p>Si un pequeño cambio en la tarifa por hora cambia por completo el retorno de inversión, la inversión es sensible a los precios del mercado. Valida la tarifa frente a la demanda real de los clientes antes de comprar más impresoras.</p>',
    },
    { type: 'title', text: 'Interpretar el periodo de retorno y el ROI anualizado', level: 2 },
    {
      type: 'paragraph',
      html: 'El periodo de retorno es fácil de entender porque se expresa en meses. Si la inversión inicial es de 18000 y el beneficio neto mensual es de 3000, el retorno es de seis meses. Si el beneficio neto mensual es cero o negativo, el retorno no es viable porque la granja nunca recupera la inversión bajo los supuestos actuales. El retorno es útil para la planificación de caja, la financiación de equipos y para decidir si la expansión debe realizarse ahora o después de que mejore la demanda.',
    },
    {
      type: 'paragraph',
      html: 'El ROI anualizado es más estricto porque compara un año de beneficio neto con la inversión inicial. Una granja puede tener un beneficio mensual positivo pero aun así mostrar un ROI anualizado débil si el retorno es lento. Por ejemplo, una granja que gana 1000 al mes tras costes sobre una inversión de 24000 produce 12000 al año antes de considerar la inversión original, por lo que el ROI del primer año sigue siendo negativo. Eso no significa automáticamente que el negocio sea malo, pero sí significa que el inversor necesita un horizonte más largo.',
    },
    {
      type: 'summary',
      title: 'Reglas de decisión',
      items: [
        'Utiliza el periodo de retorno para comprender la velocidad de recuperación de caja.',
        'Utiliza el ROI anualizado para comparar la granja con otros usos del capital.',
        'Vuelve a ejecutar el modelo con una menor ocupación y tasa de éxito antes de comprometerte con la expansión.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'La prueba de escenarios es el valor real',
      badge: 'Planung',
      html: '<p>Ejecuta un caso base, un caso conservador y un caso de estrés. La mejor inversión no es la que se ve excelente solo en el escenario optimista; es la que sigue siendo comprensible cuando la demanda, los fallos o los costes de electricidad se mueven en tu contra.</p>',
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
