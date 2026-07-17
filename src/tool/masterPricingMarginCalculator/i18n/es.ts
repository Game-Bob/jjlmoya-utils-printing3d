import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MasterPricingMarginCalculatorUI } from '../ui';

const slug = 'calculadora-precio-impresion-3d';
const title = 'Calculadora de Precios de Impresión 3D: Margen, Markup y Posición de Mercado';
const description =
  'Calcula el precio de venta recomendado para impresión 3D a partir del coste de fabricación, margen de beneficio, markup y precios de la competencia con fórmulas financieras precisas.';

const currencyOptions = [
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
];

const faqData = [
  {
    question: '¿Cuál es la diferencia entre margen y markup en impresión 3D?',
    answer:
      'El margen es el beneficio dividido entre el precio de venta. El markup es el beneficio dividido entre el coste. Un markup del 50% sobre un coste de 40,00 resulta en un precio de 60,00 y un margen del 33,33%, no del 50%.',
  },
  {
    question: '¿Por qué el margen objetivo debe ser inferior al 100%?',
    answer:
      'La fórmula del margen divide el coste entre uno menos la tasa de margen. Con un margen del 100%, el denominador se convierte en cero, por lo que no existe un precio de venta finito.',
  },
  {
    question: '¿Debería el precio de la competencia determinar mi presupuesto de impresión 3D?',
    answer:
      'El precio de la competencia es una señal de posicionamiento, no un sustituto del cálculo de costes. Si tu precio calculado supera al del mercado, revisa los costes, el nivel de acabado, el plazo de entrega y el valor añadido antes de aplicar descuentos.',
  },
  {
    question: '¿La calculadora incluye impuestos o IVA?',
    answer:
      'No. Calcula el precio de venta recomendado antes de impuestos. Debes añadir el IVA, impuestos sobre las ventas, comisiones de plataformas o tarifas de procesamiento de pagos según tu normativa local.',
  },
];

const howToData = [
  { name: 'Introduce el coste total de fabricación', text: 'Usa el coste completo del trabajo, incluyendo costes fijos, variables, material, tiempo de máquina, mano de obra y postprocesado.' },
  { name: 'Elige el modo de margen o markup', text: 'Selecciona si el PVP recomendado debe calcularse utilizando la fórmula del margen objetivo o la del markup.' },
  { name: 'Establece el precio de referencia de la competencia', text: 'Introduce un precio de mercado comparable para ver si tu presupuesto se sitúa por encima, por debajo o al nivel de la competencia.' },
  { name: 'Copia el precio recomendado', text: 'Usa el botón de copiar para transferir el PVP, el beneficio neto, el margen real y la comparación de mercado a un presupuesto o factura.' },
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
    'calculadora de precios de impresion 3d',
    'calculadora de margen de beneficio de impresion 3d',
    'markup vs margen en impresion 3d',
    'calculadora de precio de venta impresion 3d',
    'indicador de posicionamiento en el mercado',
  ],
  inLanguage: 'es',
};

export const content: ToolLocaleContent<MasterPricingMarginCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Datos de entrada para el precio de impresión 3D',
    resultsAriaLabel: 'Resultados del precio de impresión 3D',
    currencyLabel: 'Moneda',
    currencyOptions,
    currencyOptionSeparator: ' - ',
    costLabel: 'Coste total de fabricación',
    competitorLabel: 'Precio de referencia de la competencia',
    marginLabel: 'Margen objetivo',
    markupLabel: 'Markup objetivo',
    conversionFactorLabel: 'Factor de conversión global',
    conversionFactorUnit: 'x',
    conversionHint: 'Déjalo en 1 cuando los costes ya estén en la moneda seleccionada. Úsalo para ajustar precios en toda la suite o cambiar escalas de tarifas.',
    modeLabel: 'Método de PVP',
    marginModeLabel: 'Margen',
    markupModeLabel: 'Markup',
    pvpRecommendedLabel: 'PVP recomendado',
    netProfitLabel: 'Beneficio neto',
    realMarginLabel: 'Margen real',
    marketComparisonLabel: 'Vs. competencia',
    marketPositionLabel: 'Posición de mercado',
    aboveMarketLabel: 'Por encima del mercado',
    belowMarketLabel: 'Por debajo del mercado',
    atMarketLabel: 'En precio de mercado',
    pvpByMarginLabel: 'PVP por margen',
    pvpByMarkupLabel: 'PVP por markup',
    formulaMarginLabel: 'PVP_margen = C / (1 - M / 100)',
    formulaMarkupLabel: 'PVP_markup = C x (1 + U / 100)',
    sliderOutputSeparator: ' | ',
    copyLabel: 'Copiar precio',
    copiedLabel: 'Copiado',
    copyTemplate: 'PVP recomendado: {pvp}; beneficio neto: {profit}; margen real: {margin}; comparación de mercado: {comparison}',
    pendingLabel: '-',
    currencySymbol: '\u20ac',
  },
  seo: [
    { type: 'title', text: 'Cómo funciona esta calculadora de precios de impresión 3D', level: 2 },
    {
      type: 'paragraph',
      html: 'Una <strong>calculadora de precios de impresión 3D</strong> fiable debe partir del coste total de fabricación y no solo del peso del filamento. El valor del coste debe incluir la asignación de costes fijos, el coste variable de la máquina, el material, el margen para impresiones fallidas, la mano de obra, el postprocesado, el embalaje y cualquier otro gasto directo del trabajo. Conociendo este coste, el precio de venta se calcula aplicando un margen de beneficio objetivo o un markup. Estos dos métodos no son intercambiables, y confundirlos es una de las formas más rápidas para que un servicio de impresión 3D presupueste trabajos que parecen rentables pero que en realidad no alcanzan el margen previsto.',
    },
    {
      type: 'paragraph',
      html: 'La calculadora utiliza fórmulas estrictas: <code>PVP_margen = C / (1 - M / 100)</code> y <code>PVP_markup = C x (1 + U / 100)</code>. El beneficio neto siempre es <code>PVP - C</code>. El margen real es el beneficio dividido entre el precio final, no entre el coste. El control deslizante del margen objetivo está limitado por debajo del 100% porque un margen del 100% requeriría un coste de cero o un precio infinito. El resultado siempre muestra dos decimales fijos y no utiliza separadores de miles para que el número pueda copiarse limpiamente en facturas, hojas de cálculo, sistemas ERP o presupuestos de clientes.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'M < 100', label: 'Validación estricta de margen', icon: 'mdi:shield-check-outline' },
        { value: '2 decimales', label: 'Resultado monetario fijo', icon: 'mdi:calculator-variant-outline' },
        { value: 'En vivo', label: 'Recálculo inmediato con deslizador', icon: 'mdi:flash-outline' },
        { value: 'Mercado', label: 'Posicionamiento frente a competencia', icon: 'mdi:chart-timeline-variant' },
      ],
    },
    {
      type: 'tip',
      title: 'Usa un único lenguaje de precios en tu negocio',
      html: '<p>Decide si las conversaciones comerciales utilizan margen, markup o ambos con etiquetas explícitas. Un presupuesto que indica un "40%" sin especificar la base puede referirse a dos precios muy diferentes.</p>',
    },
    { type: 'title', text: 'Margen vs. Markup en impresión 3D', level: 2 },
    {
      type: 'paragraph',
      html: 'La comparación entre <strong>markup vs margen en impresión 3D</strong> suele surgir cuando el propietario de un taller nota que un markup del 30% no genera un margen de beneficio del 30%. El markup se mide respecto al coste, mientras que el margen se mide respecto al precio de venta. Si una pieza impresa cuesta 50,00 y se vende por 75,00, el beneficio neto es de 25,00. El markup es del 50,00% porque 25,00 dividido entre 50,00 es igual a 0,50. El margen es del 33,33% porque 25,00 dividido entre 75,00 es 0,3333. Ambos son correctos, pero responden a preguntas comerciales distintas.',
    },
    {
      type: 'table',
      headers: ['Coste', 'Objetivo', 'Fórmula', 'PVP', 'Beneficio neto', 'Margen real'],
      rows: [
        ['50.00', '50% markup', '50.00 x 1.50', '75.00', '25.00', '33.33%'],
        ['50.00', '50% margen', '50.00 / 0.50', '100.00', '50.00', '50.00%'],
        ['80.00', '25% markup', '80.00 x 1.25', '100.00', '20.00', '20.00%'],
        ['80.00', '25% margen', '80.00 / 0.75', '106.67', '26.67', '25.00%'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Un markup elevado puede producir un margen modesto',
      badge: 'Precisión financiera',
      html: '<p>Un markup del 100% duplica el coste, pero el margen de beneficio resultante es del 50%. Si tu negocio necesita un margen real del 60% para cubrir los costes indirectos y el crecimiento, un markup del 100% no será suficiente.</p>',
    },
    {
      type: 'glossary',
      items: [
        { term: 'PVP', definition: 'Precio de venta al público recomendado antes de impuestos, a menos que la política de presupuestos indique lo contrario.' },
        { term: 'Coste C', definition: 'El coste total de fabricación asignado al trabajo antes de añadir el beneficio.' },
        { term: 'Margen M', definition: 'El beneficio dividido entre el precio de venta, expresado como porcentaje.' },
        { term: 'Markup U', definition: 'El beneficio dividido entre el coste de fabricación, expresado como porcentaje.' },
        { term: 'Beneficio neto', definition: 'El precio de venta menos el coste de fabricación antes de ajustes fiscales y de financiación.' },
      ],
    },
    { type: 'title', text: 'Qué incluye el coste total de fabricación', level: 2 },
    {
      type: 'paragraph',
      html: 'Una <strong>calculadora de precio de venta de impresión 3D</strong> es tan precisa como el coste de fabricación introducido en ella. Para presupuestos profesionales, el coste no debe limitarse a multiplicar los gramos de filamento por el precio de la bobina. Debe incluir el material, la energía consumida por la máquina, el desgaste de boquillas y láminas FEP, las pérdidas de resina, la preparación de la base de impresión, el tiempo del operario, la preparación en el laminador, la retirada de soportes, el lijado, la pintura, el control de calidad, el embalaje, las comisiones de pago si se tratan como coste directo y un margen razonable para fallos o reimpresiones. La calculadora asume que el coste introducido ya contempla estos elementos.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Incluye el coste variable de los materiales: filamento, resina, polvo, soportes, material de purga y balsa (raft).',
        'Incluye el coste del tiempo de máquina: amortización, mantenimiento, energía y vida útil esperada.',
        'Incluye la mano de obra para la preparación, supervisión, postprocesado, embalaje, presupuestación y comunicación con el cliente cuando sea específica de la tarea.',
        'Incluye los suministros directos de postprocesado: imprimación, pintura, lijas, alcohol isopropílico (IPA), guantes, cinta, compuestos de pulido y cuchillas.',
        'Incluye un margen medido para reimpresiones en el caso de geometrías complejas, tolerancias estrictas, impresiones largas nocturnas o acabados estéticos exigentes.',
      ],
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Coste de material únicamente',
          description: 'Rápido para estimaciones de aficionados, pero demasiado limitado para uso comercial.',
          icon: 'mdi:printer-3d-nozzle',
          points: ['Ignora la mano de obra', 'Ignora el desgaste de la máquina', 'Subestima las piezas acabadas'],
        },
        {
          title: 'Coste de fabricación',
          description: 'La mejor entrada para margen y markup, ya que representa el trabajo antes del beneficio.',
          icon: 'mdi:factory',
          highlight: true,
          points: ['Incluye el tiempo de máquina', 'Incluye la mano de obra', 'Permite presupuestos repetibles'],
        },
        {
          title: 'Precio cargado al máximo',
          description: 'Puede incluir ya los gastos generales y el beneficio, por lo que volver a añadir el margen puede duplicar los costes.',
          icon: 'mdi:receipt-text-outline',
          points: ['Útil para auditorías', 'Riesgoso como entrada de calculadora', 'Requiere una política contable clara'],
        },
      ],
    },
    {
      type: 'card',
      icon: 'mdi:calculator-variant-outline',
      title: 'La calculadora no adivina los costes',
      html: '<p>Convierte un coste conocido en un precio recomendado. Si el coste no está claro, primero calcula un modelo de costes para el material, tiempo, mano de obra y acabado, y luego usa esta herramienta para determinar el beneficio y el posicionamiento de mercado.</p>',
    },
    { type: 'title', text: 'Cómo fijar precios en impresión 3D con un margen objetivo', level: 2 },
    {
      type: 'paragraph',
      html: 'A menudo, al buscar <strong>cómo fijar precios en impresión 3D</strong> se recurre a un multiplicador básico por simplicidad. Fijar precios por margen es mejor cuando la empresa tiene un objetivo de rentabilidad claro. Si el margen requerido es del 40% y el coste de fabricación es de 60,00, el precio es <code>60,00 / (1 - 0,40)</code>, lo que equivale a 100,00. El beneficio es de 40,00 y el margen real es del 40,00%. Este método es habitual cuando un taller quiere que cada familia de productos aporte una cuota de ingresos constante después de cubrir costes.',
    },
    {
      type: 'paragraph',
      html: 'La regla clave es que el margen no puede alcanzar el 100%. Con un margen del 99%, un coste de 10,00 se convierte en un precio de 1000,00. Al 99,99%, el mismo coste se convierte en 100000,00. Este comportamiento matemático no es un error; muestra por qué los objetivos de margen deben ser comercialmente realistas. Los objetivos de margen extremadamente altos suelen indicar que el modelo de costes es demasiado bajo, el producto tiene un valor excepcional, es un mercado de nicho o el presupuesto ya no es comparable con los servicios de impresión estándar.',
    },
    {
      type: 'table',
      headers: ['Margen objetivo', 'Multiplicador sobre coste', 'Un coste de 40.00 se convierte en', 'Caso de uso'],
      rows: [
        ['20%', '1.2500x', '50.00', 'Impresión de productos básicos muy competitiva y con baja carga de servicio.'],
        ['35%', '1.5385x', '61.54', 'Trabajos profesionales rutinarios con gastos generales normales.'],
        ['50%', '2.0000x', '80.00', 'Servicio personalizado de mayor nivel, acabados, trabajos urgentes o lotes pequeños.'],
        ['70%', '3.3333x', '133.33', 'Valor especializado, trabajos complejos o posicionamiento premium.'],
      ],
    },
    {
      type: 'summary',
      title: 'Lista de comprobación para la fijación de precios por margen',
      items: [
        'Usa el coste total de fabricación como base.',
        'Mantén el margen objetivo por debajo del 100%.',
        'Compara el PVP resultante con el precio de la competencia antes de enviar el presupuesto.',
        'Si el precio es elevado, investiga los factores de coste antes de recortar el beneficio.',
      ],
    },
    { type: 'title', text: 'Cómo usar el markup sin confundirlo con el margen', level: 2 },
    {
      type: 'paragraph',
      html: 'Fijar precios por markup es útil cuando un taller aplica un multiplicador claro a las distintas categorías de costes. Por ejemplo, un servicio puede añadir un markup del 80% a las impresiones estándar, del 120% a los prototipos acabados y del 200% a trabajos pequeños y urgentes. La fórmula del markup es directa: el coste multiplicado por uno más la tasa de markup. Un coste de 35,00 con un markup del 80% se convierte en 63,00. El beneficio neto es de 28,00, pero el margen real es del 44,44% y no del 80%.',
    },
    {
      type: 'proscons',
      title: 'Método de margen vs. método de markup',
      items: [
        { pro: 'El método del margen se alinea directamente con el beneficio como porcentaje de los ingresos.', con: 'Los equipos de ventas deben entender por qué los márgenes altos generan incrementos de precio no lineales.' },
        { pro: 'El método de markup es rápido y fácil de aplicar a los catálogos de costes.', con: 'Puede ocultar el margen real si el personal confunde el porcentaje de markup con la rentabilidad.' },
        { pro: 'Mostrar ambas fórmulas expone el impacto financiero real.', con: 'La empresa sigue necesitando una política clara sobre qué cifra se convierte en el PVP presupuestado.' },
      ],
    },
    {
      type: 'message',
      title: 'Cuándo es práctico usar markup',
      ariaLabel: 'Guía sobre el markup',
      html: '<p>El markup funciona bien para reglas internas simples: añade un 60% a los trabajos repetitivos de FDM, un 90% a las miniaturas de resina o un 150% a las piezas urgentes. Utiliza el resultado del margen real para verificar si esas reglas cumplen con el objetivo del negocio.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'El markup no es incorrecto',
      badge: 'Nota del método',
      html: '<p>El markup es un lenguaje de fijación de precios válido cuando todos entienden la base. El problema no es el markup en sí, sino llamarlo "margen" en presupuestos u hojas de cálculo.</p>',
    },
    { type: 'title', text: 'Precio de la competencia y posicionamiento de mercado', level: 2 },
    {
      type: 'paragraph',
      html: 'El precio de referencia de la competencia convierte la calculadora en una herramienta de decisión comercial y no en una simple hoja de fórmulas. Si el PVP recomendado está por encima del precio de referencia, el resultado se muestra con un color de alerta suave. Esto no significa automáticamente que el presupuesto sea incorrecto. Un precio más alto puede justificarse por plazos de entrega más cortos, trazabilidad del material, mejor acabado superficial, soporte de ingeniería, inspección dimensional, recogida local, comunicación fiable o menor riesgo. Lo importante es que el comercial entienda el motivo antes de enviar la oferta.',
    },
    {
      type: 'paragraph',
      html: 'La comparación competitiva debe usar una referencia equivalente. Una pieza básica FDM con capas visibles no es lo mismo que un prototipo lijado, imprimado y pintado. Un anuncio en un marketplace con material incierto, tolerancias holgadas y plazos de envío largos no es lo mismo que un servicio de ingeniería local que revisa los archivos CAD y garantiza el ajuste. Introduce el precio de la competencia que mejor coincida en material, proceso, acabado, cantidad, plazo de entrega y expectativas del cliente.',
    },
    {
      type: 'table',
      headers: ['Posicionamiento', 'Interpretación', 'Acción'],
      rows: [
        ['Por debajo de la competencia', 'El presupuesto puede ser atractivo, pero podría estar perdiendo beneficios.', 'Comprueba si el margen objetivo es demasiado bajo o si el competidor incluye menos servicios.'],
        ['Cerca de la competencia', 'El precio está alineado comercialmente con la referencia.', 'Utiliza la calidad del servicio, plazo de entrega y fiabilidad para diferenciarte.'],
        ['Por encima de la competencia', 'El presupuesto requiere justificación o una revisión de costes.', 'Inspecciona los factores de costes, acabados, urgencia y el valor del cliente antes de rebajar el precio.'],
      ],
    },
    {
      type: 'tip',
      title: 'No compitas únicamente por ser el más barato',
      html: '<p>Un taller con mano de obra real, máquinas calibradas, materiales documentados y experiencia en postprocesado no debería igualar automáticamente un precio de referencia bajo. Compite por el valor que el cliente pueda comprobar.</p>',
    },
    { type: 'title', text: 'Selector de moneda y factor de conversión global', level: 2 },
    {
      type: 'paragraph',
      html: 'La presupuestación internacional requiere una gestión monetaria coherente. El selector de moneda cambia el símbolo y reescala los importes con los mismos factores de referencia que se utilizan en toda la suite. El factor de conversión global es un multiplicador comercial independiente. Usa un factor de <code>1</code> cuando el coste de fabricación y el precio de la competencia ya estén en la moneda seleccionada. Usa un factor personalizado si la empresa quiere aplicar una lista de precios regional, un margen para fluctuaciones de tipo de cambio, ajustes para distribuidores o un multiplicador estratégico.',
    },
    {
      type: 'paragraph',
      html: 'El factor se aplica a los importes de dinero, no a los porcentajes de margen o markup. Esto es clave porque los porcentajes deben mantener su significado independientemente de la moneda. Un margen del 35% en euros sigue siendo un margen del 35% en dólares una vez que tanto el coste como la referencia de la competencia se han convertido. El resultado se mantiene fijo con dos decimales y sin separadores de miles, facilitando la copia en celdas de hojas de cálculo y campos que rechazan caracteres de agrupación localizados.',
    },
    {
      type: 'summary',
      title: 'Reglas de moneda y factores',
      items: [
        'Selecciona la moneda del cliente antes de copiar el precio.',
        'Mantén el factor en 1 para presupuestos estándar en moneda local.',
        'Usa el factor para un escalado comercial controlado, no para alterar el significado de margen o markup.',
        'Revisa los impuestos y el redondeo de facturas fuera de este cálculo de PVP antes de impuestos.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Los impuestos y comisiones de plataformas van aparte',
      badge: 'Política de presupuestos',
      html: '<p>Si necesitas recuperar el IVA, impuestos sobre ventas, comisiones de pago, de plataformas o el coste del seguro de envío, añádelos según la política del negocio después de calcular el PVP de producción.</p>',
    },
    { type: 'title', text: 'Diseño de una estrategia de precios para servicios de impresión 3D', level: 2 },
    {
      type: 'paragraph',
      html: 'Una estrategia sólida de <strong>precios para servicios de impresión 3D</strong> combina precisión de costes, disciplina en los beneficios y conocimiento del mercado. La precisión en los costes evita vender por debajo del coste real de producción. La disciplina en los beneficios evita que descuentos arbitrarios erosionen el negocio. Y el conocimiento del mercado impide que el servicio se desconecte de lo que los clientes pueden comparar. Esta calculadora se sitúa justo en el punto de encuentro de estas tres variables.',
    },
    {
      type: 'list',
      icon: 'mdi:target',
      items: [
        'Establece márgenes objetivos independientes para impresiones estándar, prototipos de ingeniería, modelos estéticos, trabajos urgentes y series de producción.',
        'Usa reglas de markup únicamente si el personal puede ver también el margen real que produce esa regla.',
        'Registra la tasa de éxito según el posicionamiento de mercado para explicar los presupuestos por encima de la competencia con datos reales.',
        'Revisa el beneficio real del trabajo una vez entregado y actualiza el modelo de costes si la mano de obra, los fallos o el postprocesado se subestimaron.',
        'Establece un precio mínimo de pedido para trabajos pequeños donde los costes de gestión, configuración y comunicación superaran el coste de fabricación.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:chart-timeline-variant',
      title: 'Analiza el beneficio real de las impresiones 3D al cerrar el trabajo',
      html: '<p>El beneficio neto previsto es útil antes de presupuestar, pero el beneficio real obtenido es el que mejora el sistema de precios. Compara el coste estimado con el coste real y ajusta los futuros márgenes objetivo por familia de piezas.</p>',
    },
    {
      type: 'summary',
      title: 'Flujo de trabajo para presupuestos listos',
      items: [
        'Estima el coste total de fabricación.',
        'Elige margen o markup de forma intencionada.',
        'Comprueba el margen real y el beneficio neto.',
        'Compara con un precio de la competencia equivalente.',
        'Copia el PVP en el presupuesto y gestiona los impuestos por separado.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
