import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ResinRealCostCalculatorUI } from '../ui';

const slug = 'calculadora-coste-real-resina-sla-dlp';
const title = 'Calculadora de coste real de resina para impresiones SLA y DLP';
const description = 'Calcula el coste teórico y real de la resina con conversión de densidad, volumen del laminador y un corrector de desperdicio del 10 al 15 por ciento para piezas SLA y DLP complejas.';

const faqData = [
  {
    question: '¿Por qué el coste real de la resina es mayor que el coste del laminador?',
    answer: 'El laminador normalmente informa solo la resina curada neta en el modelo y los soportes. No siempre contabiliza la resina que queda en la plataforma de construcción, atrapada en paredes huecas, pérdidas por lavado, soportes fallidos o residuos que no pueden reincorporarse limpiamente al envase.',
  },
  {
    question: '¿Debo introducir gramos o mililitros?',
    answer: 'Usa lo que exporte tu laminador. Si informa en gramos, introduce la densidad de la resina de la botella o de la ficha técnica para que la calculadora convierta masa en volumen antes de calcular el precio de la impresión.',
  },
  {
    question: '¿Qué factor de complejidad debería usar?',
    answer: 'Usa bajo para piezas macizas con soportes sencillos, medio para miniaturas típicas y piezas funcionales de resina, y alto para piezas huecas, soportes densos, cavidades y piezas que retienen resina líquida tras la impresión.',
  },
  {
    question: '¿Esto incluye alcohol, guantes, filtros o tiempo de máquina?',
    answer: 'No. Esta herramienta aísla el coste del material de resina. Los consumibles, la mano de obra, la energía de postcurado, los fallos y la depreciación de la máquina deben añadirse en un presupuesto más amplio.',
  },
];

const howToData = [
  {
    name: 'Introduce los datos del envase',
    text: 'Añade el precio neto del envase, el volumen nominal en mililitros y la densidad que aparece en la ficha técnica o en la etiqueta de la resina.',
  },
  {
    name: 'Pega el consumo del laminador',
    text: 'Introduce el consumo de resina del modelo exportado por Lychee, Chitubox, PrusaSlicer u otro laminador, y elige gramos o mililitros.',
  },
  {
    name: 'Elige la complejidad',
    text: 'Selecciona complejidad baja, media o alta para aplicar un corrector de desperdicio del 10, 12.5 o 15 por ciento al volumen del laminador.',
  },
  {
    name: 'Compara el coste teórico y el real',
    text: 'Usa el coste teórico para comparar entre laminadores y el coste real corregido para presupuestar, agrupar lotes y planificar el stock de resina.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'es',
};

export const content: ToolLocaleContent<ResinRealCostCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    bottlePanel: 'Envase de resina',
    modelPanel: 'Modelo del laminador',
    resultPanel: 'Coste real de resina',
    unitSystemLabel: 'Unidades',
    metricLabel: 'Métrico',
    imperialLabel: 'EE. UU.',
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
    bottlePriceLabel: 'Precio del envase',
    bottleVolumeLabel: 'Volumen del envase',
    resinPresetLabel: 'Preselección de resina',
    resinPresetOptions: [
      { label: 'Personalizada / densidad manual', density: '' },
      { label: 'Resina estándar genérica - 1.10 g/cm3', density: '1.10' },
      { label: 'Resina lavable al agua genérica - 1.08 g/cm3', density: '1.08' },
      { label: 'Resina tipo ABS genérica - 1.10 g/cm3', density: '1.10' },
      { label: 'Resina resistente genérica - 1.12 g/cm3', density: '1.12' },
      { label: 'Resina flexible genérica - 1.05 g/cm3', density: '1.05' },
      { label: 'Resina de alta temperatura genérica - 1.15 g/cm3', density: '1.15' },
      { label: 'Resina para fundición genérica - 1.12 g/cm3', density: '1.12' },
      { label: 'Resina con carga cerámica genérica - 1.35 g/cm3', density: '1.35' },
      { label: 'Anycubic Standard - 1.10 g/cm3', density: '1.10' },
      { label: 'Anycubic ABS-Like - 1.10 g/cm3', density: '1.10' },
      { label: 'Elegoo Standard - 1.10 g/cm3', density: '1.10' },
      { label: 'Elegoo ABS-Like - 1.05 g/cm3', density: '1.05' },
      { label: 'Siraya Tech Fast - 1.09 g/cm3', density: '1.09' },
      { label: 'Siraya Tech Blu - 1.12 g/cm3', density: '1.12' },
      { label: 'Phrozen Aqua Gray 4K - 1.10 g/cm3', density: '1.10' },
      { label: 'Formlabs Standard - 1.10 g/cm3', density: '1.10' },
      { label: 'Formlabs Tough 2000 - 1.18 g/cm3', density: '1.18' },
    ],
    densityLabel: 'Densidad de la resina (g/cm3)',
    modelAmountLabel: 'Cantidad del laminador',
    unitLabel: 'Unidad de cantidad',
    mlUnit: 'ml',
    fluidOunceUnit: 'fl oz',
    gramsUnit: 'g',
    ounceUnit: 'oz',
    complexityLabel: 'Complejidad de la pieza',
    lowComplexity: 'Baja',
    mediumComplexity: 'Media',
    highComplexity: 'Alta',
    lowHint: 'Piezas macizas, soportes ligeros, +10%',
    mediumHint: 'Trabajo típico con resina, +12.5%',
    highHint: 'Piezas huecas o soportes densos, +15%',
    theoreticalCostLabel: 'Coste del laminador',
    realCostLabel: 'Coste real',
    wasteCostLabel: 'Corrector de desperdicio',
    correctedVolumeLabel: 'Volumen corregido',
    costPerMlLabel: 'Coste por ml',
    bottlePrintsLabel: 'Impresiones por envase',
    savedSettingsLabel: 'Factor de desperdicio',
    hollowPartTip: 'Las piezas huecas con orificios de drenaje pueden superar el 15 por ciento de desperdicio porque la resina queda en las paredes interiores, en cavidades, en los soportes y durante el lavado.',
    conversionLabel: 'Volumen neto del laminador',
    netFromSlicerLabel: 'neto del laminador',
    persistenceNote: 'El precio del envase, el volumen del envase y la densidad se guardan localmente en este navegador.',
  },
  seo: [
    {
      type: 'title',
      text: 'Por qué el coste de la resina SLA y DLP necesita un corrector de desperdicio',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La cantidad de resina que muestra un laminador es un punto de partida útil, pero no equivale a la cantidad de resina que desaparece del envase durante una impresión real. La impresión SLA, MSLA, LCD y DLP utiliza una cubeta llena de fotopolímero líquido. La pieza se cura capa a capa, pero la resina no curada sigue recubriendo el modelo, los soportes, la plataforma de construcción, la película de la cubeta y cualquier cavidad interna que esté abierta al baño de resina. Una calculadora que multiplica el volumen del laminador por el precio por mililitro del envase da un número teórico limpio. Un presupuesto de taller, sin embargo, necesita el número corregido.',
    },
    {
      type: 'paragraph',
      html: 'Esta calculadora separa el <strong>coste del laminador</strong> del <strong>coste real de la resina</strong>. El coste del laminador es la resina neta que informa el software. El coste real aplica un factor de desperdicio controlado del 10 al 15 por ciento. Ese intervalo es intencionadamente estrecho: es lo suficientemente alto para incluir las pérdidas habituales de manipulación de resina, pero no tanto como para ocultar fallos, mano de obra, alcohol, guantes, filtros o postcurado bajo la línea de material. El resultado es un coste variable de material práctico para una sola impresión o un lote.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '10%', label: 'Corrección baja para piezas macizas y soportes ligeros' },
        { value: '12.5%', label: 'Corrección por defecto para trabajos normales de resina' },
        { value: '15%', label: 'Corrección alta para cavidades y soportes densos' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'No mezcles el coste del material con el coste del trabajo',
      html: 'El número que aquí se devuelve es solo el material de resina. Un precio de venta completo debe incluir también impresiones fallidas, alcohol de limpieza, guantes de nitrilo, papel de cocina, filtros, tiempo de postcurado, embalaje, desgaste de la máquina, tiempo de diseño y margen.',
    },
    {
      type: 'title',
      text: 'La fórmula detrás de la calculadora',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El primer paso es el precio del envase por mililitro: <code>coste_por_ml = precio_envase / volumen_envase_ml</code>. Un envase de 1000 ml comprado por 42 EUR tiene un coste base de 0.042 EUR por ml. Si el laminador indica que una miniatura consume 38 ml, el coste teórico de resina es 38 x 0.042, es decir, 1.60 EUR. Ese número es útil para comparar orientación, ahuecado, estrategias de soporte y lotes dentro del laminador, pero asume que cada mililitro que informa el laminador es la única resina consumida.',
    },
    {
      type: 'paragraph',
      html: 'El segundo paso aplica el volumen corregido: <code>volumen_real = volumen_laminador x (1 + factor_desperdicio)</code>. Con el factor por defecto del 12.5 por ciento, un modelo de 38 ml se convierte en 42.75 ml. El coste real de material pasa a ser 42.75 x 0.042 EUR, es decir, 1.80 EUR. La diferencia es pequeña en un modelo diminuto, pero se hace visible al presupuestar una bandeja de miniaturas, modelos dentales, maestros de joyería, prototipos de ingeniería o accesorios de producción.',
    },
    {
      type: 'table',
      headers: ['Volumen laminador', 'Coste envase', 'Factor', 'Coste teórico', 'Coste real'],
      rows: [
        ['25 ml', '42 EUR / 1000 ml', '10%', '1.05 EUR', '1.16 EUR'],
        ['80 ml', '42 EUR / 1000 ml', '12.5%', '3.36 EUR', '3.78 EUR'],
        ['150 ml', '42 EUR / 1000 ml', '15%', '6.30 EUR', '7.25 EUR'],
        ['420 ml', '42 EUR / 1000 ml', '15%', '17.64 EUR', '20.29 EUR'],
      ],
    },
    {
      type: 'tip',
      title: 'Usa el volumen del lote, no el volumen de la pieza, para tiradas de producción',
      html: 'Si estás llenando la plataforma de construcción con múltiples copias, calcula a partir del volumen del laminador para toda la plataforma. Las torres de soporte, las estructuras de soporte compartidas y los cambios de orientación pueden hacer que el lote sea más eficiente que multiplicar una pieza aislada por el número de copias.',
    },
    {
      type: 'title',
      text: 'Cómo elegir el factor de complejidad adecuado',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Complejidad baja',
          description: 'Usa el 10 por ciento para piezas macizas, soportes sencillos, calibraciones, piezas de ajedrez y modelos con pocos soportes.',
          points: ['Poca retención interna', 'Baja densidad de soportes', 'Fácil escurrido a la cubeta'],
        },
        {
          title: 'Complejidad media',
          description: 'Usa el 12.5 por ciento para miniaturas normales, modelos dentales, piezas de tablero y piezas funcionales con soportes moderados.',
          points: ['Pérdida típica de postprocesado', 'Algo de resina en soportes', 'Buen factor de presupuesto por defecto'],
          highlight: true,
        },
        {
          title: 'Complejidad alta',
          description: 'Usa el 15 por ciento para cascarones huecos, cavidades, bosques densos de soportes, estructuras de celosía y piezas que dejan residuos pesados tras el escurrido.',
          points: ['Más líquido atrapado', 'Más pérdida por lavado', 'Mayor incertidumbre de manipulación'],
        },
      ],
    },
    {
      type: 'paragraph',
      html: 'El factor de complejidad no es una penalización por un mal laminado. Es una corrección por cómo se comporta la resina líquida. Un bloque macizo simple inclinado correctamente puede escurrir casi por completo tras unos minutos. Una estatua hueca con pequeños orificios de drenaje puede retener una película de resina dentro de la pared, alrededor de los soportes y cerca de las copas de succión. Las bases de soporte densas también retienen resina entre los pilares. Incluso cuando dejas que la pieza escurra sobre la cubeta, la resina que llega al recipiente de lavado, a los guantes, al papel de cocina y al filtro forma parte del material real consumido por el trabajo.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Cuando el 15 por ciento no es suficiente',
      html: 'Si un modelo hueco tiene un drenaje deficiente, cavidades ciegas, soportes internos gruesos o un interior texturizado, el desperdicio puede superar el 15 por ciento. En ese caso, trata esta calculadora como la base de resina y añade un margen de riesgo separado en el presupuesto.',
    },
    {
      type: 'summary',
      title: 'Selección rápida del factor',
      items: [
        'Elige el 10 por ciento cuando el modelo sea macizo, compacto y fácil de drenar.',
        'Elige el 12.5 por ciento cuando no estés seguro o imprimas una bandeja mixta.',
        'Elige el 15 por ciento cuando la pieza sea hueca, tenga muchos soportes o sea geométricamente complicada.',
        'Añade un margen de fallos separado al imprimir una resina nueva, una orientación nueva o una pieza frágil de un cliente.',
      ],
    },
    {
      type: 'title',
      text: 'Uso de la densidad cuando el laminador informa en gramos',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Muchos laminadores pueden informar el uso de resina en mililitros, gramos o ambos. El envase de resina suele venderse por volumen nominal, normalmente 500 ml, 1000 ml o 1 litro. Si el laminador exporta en gramos, la calculadora convierte masa a volumen usando la densidad: <code>volumen_ml = gramos / densidad</code>. La densidad de la resina normalmente se escribe en g/cm3, y 1 cm3 equivale al mismo volumen que 1 ml. Una resina con densidad 1.10 g/cm3 significa que 110 g equivalen aproximadamente a 100 ml.',
    },
    {
      type: 'table',
      headers: ['Masa del laminador', 'Densidad', 'Volumen convertido', 'Por qué importa'],
      rows: [
        ['55 g', '1.10 g/cm3', '50.0 ml', 'Estimación común de resina estándar'],
        ['55 g', '1.05 g/cm3', '52.4 ml', 'Menor densidad significa más volumen'],
        ['55 g', '1.20 g/cm3', '45.8 ml', 'Las resinas con carga o cerámicas pueden ser más densas'],
      ],
    },
    {
      type: 'tip',
      title: 'Encuentra la densidad en la ficha técnica',
      html: 'Usa el catálogo de preselecciones para resinas comunes y trata la entrada de densidad como la fuente de verdad definitiva. Si tu resina, color o lote exacto difiere de la preselección, sobrescribe el campo con el valor de la ficha técnica del fabricante. No asumas que todas las resinas son 1.00 g/ml.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Densidad', definition: 'Masa por unidad de volumen. En el cálculo de costes de resina, permite convertir los gramos del laminador a mililitros del envase.' },
        { term: 'Coste teórico', definition: 'El volumen limpio del laminador multiplicado por el coste por mililitro del envase, antes del corrector de desperdicio.' },
        { term: 'Volumen corregido', definition: 'El volumen del modelo después de añadir el factor de desperdicio seleccionado del 10, 12.5 o 15 por ciento.' },
        { term: 'Orificio de drenaje', definition: 'Una abertura en una pieza de resina hueca que permite que la resina no curada salga del interior antes del lavado y el curado.' },
      ],
    },
    {
      type: 'title',
      text: 'Por qué las impresiones huecas de resina suelen costar más de lo esperado',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ahuecar un modelo grande puede reducir drásticamente el volumen de resina curada, pero no hace que la impresión esté libre de costes ocultos. Las paredes huecas necesitan orificios de drenaje, la geometría interna debe ser lavable y la resina no curada atrapada dentro del modelo puede filtrarse más tarde, agrietar la pieza o interferir con el curado final. El laminador puede mostrar un volumen neto mucho menor tras el ahuecado, pero el proceso de manipulación se vuelve más sensible. Por eso la complejidad alta usa el 15 por ciento por defecto.',
    },
    {
      type: 'proscons',
      title: 'Ahuecado y control de costes',
      items: [
        { pro: 'Los modelos grandes de exposición pueden usar mucha menos resina curada.', con: 'Un drenaje deficiente puede mantener resina líquida dentro de la pieza.' },
        { pro: 'Menores fuerzas de despegue pueden mejorar el éxito en secciones grandes.', con: 'Los orificios adicionales, tapones y tiempo de limpieza pueden aumentar la mano de obra.' },
        { pro: 'Un modelo más ligero es más fácil de enviar y montar.', con: 'Las paredes finas pueden fallar si el grosor y la exposición no están ajustados.' },
      ],
    },
    {
      type: 'card',
      title: 'Regla práctica para impresiones huecas',
      html: 'Si una pieza hueca sale de la impresora y sigue goteando tras un escurrido normal, usa el factor alto e inspecciona la disposición de los orificios de drenaje. Si sigue goteando después del lavado, el problema no es solo de coste; puede convertirse en un problema de calidad y seguridad porque la resina no curada permanece dentro del objeto.',
    },
    {
      type: 'title',
      text: 'Cómo leer las estimaciones del laminador sin infravalorar el presupuesto',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Lychee, Chitubox, PrusaSlicer y otros laminadores de resina estiman el uso de resina a partir de la malla, los soportes, el ahuecado y, a veces, el perfil de resina. Estas estimaciones son suficientemente buenas para comparar versiones del mismo trabajo. Son más débiles como presupuesto final porque no conocen tu flujo de trabajo. Un taller que filtra la resina después de cada trabajo pierde una cantidad diferente a la de un aficionado que mantiene la misma resina en la cubeta. Un usuario que lava en dos etapas de IPA pierde una cantidad diferente a uno que usa una estación de lavado sellada y deja escurrir las piezas completamente antes de moverlas.',
    },
    {
      type: 'list',
      items: [
        'Introduce la estimación de la plataforma completa después de los soportes, no el volumen original de la malla sin soportar.',
        'Usa la misma moneda para el precio del envase y el presupuesto final; la calculadora puede convertir el precio visible del envase entre monedas comunes con factores de cambio aproximados.',
        'Actualiza el precio del envase al comprar resina especializada, porque las resinas para fundición, flexibles, dentales y de alta temperatura pueden costar varias veces más que la resina estándar.',
        'Usa la conversión de densidad cuando la masa del laminador y el volumen del envase no compartan la misma unidad.',
        'Mantén la tasa de fallos por separado, especialmente al imprimir miniaturas frágiles, cascarones dentales finos o nuevas estrategias de soporte.',
      ],
    },
    {
      type: 'message',
      title: 'Mejor hábito de presupuestación',
      html: 'Guarda los datos de tu envase de resina habitual, pega la estimación del laminador, elige la complejidad y registra ambos números. El coste teórico explica la estimación del laminador; el coste real protege tu inventario de material.',
    },
    {
      type: 'title',
      text: 'Lo que esta calculadora no incluye',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Una impresión de resina tiene más costes que la resina. Esta herramienta se centra intencionadamente en el consumo variable de resina porque es el número que más a menudo se infravalora al comparar la salida del laminador con el uso real del envase. No incluye reposición de alcohol, detergente, tratamiento de agua, papel de cocina, guantes desechables, desgaste de la película FEP o de liberación, envejecimiento de la pantalla LCD, depreciación de la impresora, electricidad, tiempo de postcurado, lijado, imprimación, retirada de soportes, embalaje ni comisiones de mercado.',
    },
    {
      type: 'table',
      headers: ['Partida de coste', '¿Incluido aquí?', 'Dónde contabilizarlo'],
      rows: [
        ['Resina líquida usada por la impresión', 'Sí', 'Esta calculadora'],
        ['Residuo de resina y desperdicio normal de manipulación', 'Sí', 'Factor de complejidad'],
        ['Impresiones fallidas', 'No', 'Añadir margen de fallos según material y riesgo del modelo'],
        ['IPA, guantes, toallas, filtros', 'No', 'Partida de consumibles'],
        ['Retirada de soportes y lijado', 'No', 'Partida de mano de obra o acabado'],
        ['Depreciación de la impresora', 'No', 'Tarifa horaria de máquina'],
      ],
    },
    {
      type: 'summary',
      title: 'Flujo de trabajo fiable para el coste de resina',
      items: [
        'Calcula el precio por mililitro del envase que realmente compraste.',
        'Convierte gramos a mililitros con la densidad de la resina cuando sea necesario.',
        'Usa la salida del laminador después de soportes y ahuecado.',
        'Aplica una corrección del 10 al 15 por ciento según la geometría y la pérdida por manipulación.',
        'Mantén los fallos, la mano de obra, los consumibles y el margen fuera del número de material de resina.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
