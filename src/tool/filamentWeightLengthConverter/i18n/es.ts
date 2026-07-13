import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FilamentWeightLengthConverterUI } from '../ui';

const slug = 'convertidor-peso-filamento-longitud';
const title = 'Convertidor de Peso de Filamento a Longitud: Estimación Precisa de Material';
const description = 'Convierte gramos de filamento a metros y volumen con la densidad del material, diámetro de 1,75 mm o 2,85 mm y una verificación instantánea de suficiencia del carrete.';

const faqData = [
  {
    question: '¿Cómo se convierten los gramos de filamento a metros?',
    answer: 'Divide la masa por la densidad del material para obtener el volumen, convierte ese volumen de centímetros cúbicos a milímetros cúbicos y luego divide por el área de la sección circular del diámetro del filamento.',
  },
  {
    question: '¿Por qué es importante la densidad del material del filamento?',
    answer: 'El mismo peso de PLA, PETG, ABS, TPU o filamento relleno ocupa un volumen diferente porque cada polímero tiene una densidad distinta. La longitud es el volumen dividido por el área del filamento, por lo que la densidad cambia directamente la estimación en metros.',
  },
  {
    question: '¿El filamento de 1,75 mm siempre da la misma longitud por kilogramo?',
    answer: 'No. La tolerancia del diámetro, la densidad del material, los aditivos y el contenido de humedad modifican la longitud real. La calculadora ofrece una estimación de planificación basada en el diámetro nominal y la densidad.',
  },
  {
    question: '¿Puedo usar la calculadora para filamento de 2,85 mm?',
    answer: 'Sí. Introduce 2,85 mm o cambia a unidades imperiales e introduce el diámetro equivalente. El área de la sección se actualiza al instante.',
  },
];

const howToData = [
  { name: 'Introduce la masa del filamento', text: 'Escribe la cantidad de filamento que necesita el laminador, el peso que queda en un carrete o cualquier valor en gramos que quieras convertir.' },
  { name: 'Elige el material', text: 'Selecciona PLA, PETG, ABS, TPU, Nailon, PC o una mezcla rellena para que la calculadora use la densidad correcta.' },
  { name: 'Establece el diámetro del filamento', text: 'Usa 1,75 mm, 2,85 mm o un diámetro medido si quieres que la estimación de longitud refleje un carrete concreto.' },
  { name: 'Comprueba si el carrete es suficiente', text: 'Opcionalmente, introduce el peso restante del carrete para saber si tienes suficiente material y el excedente o déficit exacto.' },
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
  applicationCategory: 'EngineeringApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'es',
};

export const content: ToolLocaleContent<FilamentWeightLengthConverterUI> = {
  slug,
  title,
  description,
  ui: {
    unitSystemLabel: 'Sistema de unidades',
    metricLabel: 'Métrico',
    imperialLabel: 'Imperial',
    inputsTitle: 'Estimación de stock de material',
    materialLabel: 'Material',
    materialPlaLabel: 'PLA',
    materialPetgLabel: 'PETG',
    materialAbsLabel: 'ABS',
    materialAsaLabel: 'ASA',
    materialTpuLabel: 'TPU',
    materialPaLabel: 'Nailon PA',
    materialPcLabel: 'Policarbonato',
    materialWoodLabel: 'PLA con madera',
    materialCarbonLabel: 'Mezcla de fibra de carbono',
    materialMetalLabel: 'PLA con metal',
    densityLabel: 'Densidad',
    densityUnit: 'g/cm3',
    weightLabel: 'Peso del filamento',
    weightSliderLabel: 'Deslizador de peso de impresión',
    diameterLabel: 'Diámetro del filamento',
    stockLabel: 'Peso restante del carrete',
    stockPlaceholder: 'Verificación opcional de stock',
    spoolStateLabel: 'Estado del carrete',
    spoolScaleLabel: 'Masa consumida / disponible',
    cutLineLabel: 'Línea de parada por agotamiento',
    resultLengthLabel: 'Longitud estimada del filamento',
    resultVolumeLabel: 'Volumen del polímero',
    resultAreaLabel: 'Área de la sección',
    resultGramsMeterLabel: 'Masa lineal',
    enoughLabel: 'Carrete suficiente',
    shortLabel: 'Carrete insuficiente',
    noStockLabel: 'Verificación de stock inactiva',
    surplusLabel: 'Excedente',
    missingLabel: 'Faltante',
    formulaLabel: 'Proceso de cálculo',
    formulaText: 'volumen = masa / densidad -> longitud = volumen / área de la sección',
    linearMassMetricUnit: 'g/m',
    linearMassImperialUnit: 'oz/ft',
    gramsUnit: 'g',
    ouncesUnit: 'oz',
    metersUnit: 'm',
    feetUnit: 'ft',
    cm3Unit: 'cm3',
    in3Unit: 'in3',
    in2Unit: 'in2',
    mm2Unit: 'mm2',
    mmUnit: 'mm',
    inchUnit: 'in',
  },
  seo: [
    { type: 'title', text: 'Por qué una calculadora de gramos a metros basada en densidad es más precisa', level: 2 },
    { type: 'paragraph', html: 'Un convertidor de peso de filamento a longitud solo es tan bueno como el modelo de material que lo respalda. Una calculadora genérica a menudo asume que un kilogramo de cualquier filamento ocupa el mismo volumen, pero el filamento FFF se vende por masa mientras que el extrusor consume una hebra cilíndrica por longitud. El puente entre esas dos mediciones es la <strong>densidad</strong>. El PLA a aproximadamente 1,24 g/cm³, el PETG alrededor de 1,27 g/cm³, el ABS cerca de 1,04 g/cm³ y el TPU alrededor de 1,21 g/cm³ no se convierten en la misma cantidad de metros, incluso cuando el peso del carrete y el diámetro son idénticos.' },
    { type: 'paragraph', html: 'El cálculo comienza con la masa. Dividir los gramos por la densidad devuelve el volumen en centímetros cúbicos. Ese volumen se convierte luego a milímetros cúbicos porque el diámetro del filamento normalmente se mide en milímetros. El área de la sección es el área de un círculo: pi multiplicado por el radio al cuadrado. Finalmente, el volumen dividido por el área devuelve una longitud en milímetros, que se puede convertir a metros o pies. El resultado es una estimación práctica para comprobar si el material informado por un laminador se puede imprimir con el stock que hay actualmente en un carrete.' },
    { type: 'stats', columns: 4, items: [
      { value: '1,24', label: 'Densidad típica del PLA en g/cm³' },
      { value: '2,405', label: 'Área en mm² para filamento nominal de 1,75 mm' },
      { value: '6,379', label: 'Área en mm² para filamento nominal de 2,85 mm' },
      { value: '3 datos', label: 'Masa, densidad y diámetro definen la conversión' },
    ] },
    { type: 'table', headers: ['Material', 'Densidad de planificación', 'Por qué es importante'], rows: [
      ['PLA', '1,24 g/cm³', 'Referencia común para impresión de escritorio y una buena base para prototipos.'],
      ['PETG', '1,27 g/cm³', 'Ligeramente más denso que el PLA, por lo que la misma cantidad en gramos produce menos longitud.'],
      ['ABS', '1,04 g/cm³', 'Menor densidad significa más longitud por gramo que el PLA con el mismo diámetro.'],
      ['TPU', '1,21 g/cm³', 'El filamento flexible está cerca del PLA, pero sigue siendo relevante modelarlo por separado.'],
      ['Mezclas rellenas', 'Variable', 'Los aditivos de madera, fibra de carbono, metal y vidrio pueden alejar la densidad del polímero base.'],
    ] },
    { type: 'title', text: 'Las fórmulas exactas de conversión para estimar stock de filamento', level: 2 },
    { type: 'paragraph', html: 'El modelo matemático es deliberadamente pequeño porque cada término tiene un significado físico. El área de la sección es <code>pi x (diámetro / 2)^2</code>. El volumen es <code>peso / densidad</code>. La longitud es <code>volumen x 1000 / área de la sección</code> cuando el volumen está en cm³ y el área de la sección en mm²; el resultado está en milímetros, luego se divide por 1000 para obtener metros. Esta es la misma geometría que se usa para razonar sobre el volumen de extrusión, el caudal máximo y el uso de material en los laminadores.' },
    { type: 'diagnostic', variant: 'info', title: 'La tolerancia del diámetro es la mayor incertidumbre del día a día', badge: 'Nota de medición', html: 'Es posible que un carrete nominal de 1,75 mm no tenga exactamente 1,75 mm en todo el rollo. Como el área depende del radio al cuadrado, una pequeña diferencia en el diámetro cambia la longitud calculada y el volumen real de extrusión. Para comprobaciones normales de stock, el diámetro nominal es suficiente. Para calibración, usa un calibre en varios puntos e introduce el diámetro promedio.' },
    { type: 'list', items: [
      'Usa gramos al copiar el uso de material desde laminadores como PrusaSlicer, Cura, Bambu Studio u OrcaSlicer.',
      'Usa el peso restante medido del carrete después de restar la tara del carrete vacío si quieres una verificación de suficiencia fiable.',
      'Usa la densidad de la ficha técnica del fabricante al imprimir compuestos especiales.',
      'Usa 2,85 mm en lugar de 1,75 mm cuando la máquina alimente filamento más grande, porque el área de la sección es drásticamente diferente.',
    ] },
    { type: 'tip', title: 'No incluyas la tara del carrete vacío en el stock restante', html: 'Un carrete en una báscula incluye el peso del núcleo de plástico o cartón. Si el carrete vacío pesa 180 g y la báscula marca 430 g, la estimación de filamento utilizable debería ser 250 g. Introducir el peso bruto del carrete hace que la señal verde de suficiencia sea demasiado optimista.' },
    { type: 'title', text: 'Longitud de filamento de 1,75 mm frente a 2,85 mm con el mismo peso', level: 2 },
    { type: 'paragraph', html: 'El diámetro tiene un impacto mayor del que muchos usuarios esperan. Una hebra de 2,85 mm tiene más del doble del área de la sección que una hebra de 1,75 mm, por lo que un kilogramo se convierte en muchos menos metros. Esto no significa que un diámetro sea más económico por sí mismo; ambos pueden imprimir el mismo volumen de pieza. Significa que el número de longitud de stock no se puede comparar sin conocer el diámetro. Cuando un laminador informa gramos, ya está normalizando el uso de material por masa; cuando un sensor de agotamiento de la impresora o una estimación manual del carrete piensa en metros, el diámetro se vuelve central.' },
    { type: 'comparative', columns: 2, items: [
      { title: 'Filamento de 1,75 mm', description: 'Mayor longitud de hebra por kilogramo y el formato dominante en las impresoras de escritorio actuales.', points: ['Útil para extrusores compactos', 'Más metros con la misma masa de carrete', 'Área nominal de aproximadamente 2,405 mm²'] },
      { title: 'Filamento de 2,85 mm', description: 'Menor longitud de hebra por kilogramo con una sección de alimentación más grande, habitual en máquinas antiguas o profesionales.', points: ['Área nominal de aproximadamente 6,379 mm²', 'Menos sensible a la compresión del alimentador en algunas configuraciones', 'No se deben usar suposiciones de 1,75 mm'] },
    ] },
    { type: 'table', headers: ['Situación', 'Qué cambia', 'Consecuencia en la planificación'], rows: [
      ['Mismo polímero, diámetro mayor', 'El área aumenta', 'Los metros disminuyen para los mismos gramos.'],
      ['Mismo diámetro, densidad menor', 'El volumen aumenta', 'Los metros aumentan para los mismos gramos.'],
      ['Mismos gramos, filamento relleno', 'La densidad puede aumentar', 'Los metros pueden ser menores de lo esperado.'],
      ['Filamento húmedo', 'La masa medida aumenta ligeramente', 'El carrete puede parecer más pesado sin añadir polímero seco útil.'],
    ] },
    { type: 'title', text: 'Cómo usar la verificación de suficiencia del carrete antes de empezar una impresión larga', level: 2 },
    { type: 'paragraph', html: 'El campo opcional de stock restante convierte el convertidor en un panel de decisión. Introduce la masa que requiere el trabajo como peso del filamento y luego introduce el filamento utilizable que queda en el carrete actual. El resultado compara los gramos directamente y también convierte la diferencia a metros o pies usando el mismo modelo de material y diámetro. El verde significa que el carrete tiene suficiente stock; el rojo significa que falta material y muestra el déficit exacto.' },
    { type: 'card', icon: 'mdi:traffic-light', title: 'Por qué se muestran tanto gramos como metros', html: 'Los gramos son el idioma de compra y del laminador. Los metros son el idioma de longitud de hebra que usan algunas pantallas de firmware, estimaciones de agotamiento y cálculos manuales de carrete. Mostrar ambos evita un error de planificación común: tener suficiente longitud bajo una suposición de densidad, pero no suficiente masa con el material real.' },
    { type: 'proscons', title: 'Métodos de validación de stock', items: [
      { pro: 'Pesar el carrete es rápido y funciona incluso cuando el rollo está parcialmente usado.', con: 'Debes conocer o estimar la tara del carrete vacío.' },
      { pro: 'Usar los gramos del laminador suele ser coherente con el peso de compra del material.', con: 'Las estimaciones del laminador pueden cambiar con el volumen de purga, soportes, brim y mallas modificadoras.' },
      { pro: 'La longitud es intuitiva al comparar rutas de filamento y distancias de agotamiento.', con: 'La longitud cambia con la densidad y el diámetro, por lo que no es universal entre materiales.' },
      { pro: 'La conversión basada en densidad maneja mejor PLA, PETG, ABS, TPU y compuestos.', con: 'Los aditivos específicos del fabricante pueden requerir un valor de densidad personalizado.' },
    ] },
    { type: 'title', text: 'Los filamentos compuestos y especiales necesitan valores de densidad personalizados', level: 2 },
    { type: 'paragraph', html: 'Los filamentos rellenos son la razón principal por la que un estimador de material serio debería exponer la densidad en lugar de ocultarla. El PLA con madera, el nailon con fibra de carbono, el PLA con metal, el filamento glow, los materiales de ingeniería rellenos de vidrio y las mezclas tipo cerámica pueden desviarse drásticamente del polímero base. Un filamento con metal puede sentirse pesado porque su densidad es alta; los mismos 500 g pueden representar mucho menos volumen y menos longitud que el PLA estándar. Para una impresión técnica costosa, esa diferencia no es académica. Puede decidir si el último diez por ciento de una impresión termina o se queda sin material.' },
    { type: 'glossary', items: [
      { term: 'Densidad', definition: 'Masa por unidad de volumen, aquí expresada en gramos por centímetro cúbico.' },
      { term: 'Área de la sección', definition: 'El área circular de la hebra de filamento calculada a partir del diámetro.' },
      { term: 'Masa lineal', definition: 'Cuántos gramos pesa un metro o un pie de filamento para el material y diámetro seleccionados.' },
      { term: 'Tara', definition: 'El peso del carrete vacío que debe restarse de la lectura de la báscula.' },
      { term: 'Diámetro nominal', definition: 'El tamaño anunciado del filamento, normalmente 1,75 mm o 2,85 mm, antes de medir la tolerancia real.' },
    ] },
    { type: 'message', title: 'Los datos del fabricante son los que valen', html: 'Cuando el carrete o la ficha técnica indiquen la densidad, usa ese valor. Los valores predefinidos genéricos son útiles para planificar, pero las fórmulas específicas del proveedor, las cargas de pigmento y los refuerzos pueden cambiar el número.' },
    { type: 'title', text: 'Ejemplos prácticos para la estimación de material en impresión 3D', level: 2 },
    { type: 'paragraph', html: 'Imagina que un laminador informa que un soporte de PETG necesita 186 g y tienes un carrete parcialmente usado. El PETG a 1,27 g/cm³ con filamento de 1,75 mm se convierte aproximadamente en sesenta y un metros. Si el peso utilizable del carrete después de la tara es de 220 g, el panel informa un excedente de 34 g y convierte ese margen en unos once metros. Ese margen puede ser suficiente para una línea de purga y un brim pequeño, pero no para un error grande de soportes. La verificación de stock anima al usuario a añadir un colchón realista antes de dejar una impresión desatendida.' },
    { type: 'paragraph', html: 'Ahora compara el ABS. Como el ABS es menos denso que el PETG, los mismos 186 g se convierten en más volumen y, por tanto, en más longitud con el mismo diámetro de 1,75 mm. Eso no hace que la pieza de ABS sea más barata por sí misma, porque el precio por kilogramo y los ajustes de impresión también importan, pero explica por qué una estimación de metros restantes copiada de un material puede engañar a otro. Para el control de inventario, la masa es el punto de partida estable y la densidad crea el puente hacia la longitud.' },
    { type: 'summary', title: 'Lista de verificación para una planificación fiable de material', items: [
      'Resta la tara del carrete vacío antes de introducir el stock restante.',
      'Usa la densidad real del material para filamentos rellenos, reforzados o premium.',
      'Comprueba si tu máquina usa filamento de 1,75 mm o 2,85 mm antes de confiar en cualquier cifra de longitud.',
      'Mantén un margen para purga, soportes, brims, primeras capas fallidas y cambios de perfil del laminador.',
      'Trata el estado verde de suficiencia como una comprobación de planificación, no como una garantía contra atascos o fallos del sensor de agotamiento.',
    ] },
    { type: 'title', text: 'Respuesta SEO: peso de filamento a longitud en una frase', level: 2 },
    { type: 'paragraph', html: 'Para convertir el peso del filamento de impresora 3D a longitud, divide el peso en gramos por la densidad del material para obtener el volumen, multiplica por 1000 para convertir cm³ a mm³, divide por <code>pi x (diámetro / 2)^2</code> y luego divide por 1000 para obtener metros. Este método basado en densidad es más preciso que una tabla fija de gramos a metros porque el PLA, PETG, ABS, TPU, Nailon, PC y los filamentos compuestos tienen valores de densidad diferentes.' },
    { type: 'diagnostic', variant: 'success', title: 'Cuándo es más fiable la estimación', badge: 'Buenas prácticas', html: 'El resultado es más sólido cuando el peso del laminador es definitivo, el peso restante del carrete tiene la tara descontada, el diámetro está medido o es conocido y la densidad proviene del fabricante. En esas condiciones, el convertidor se convierte en una comprobación previa práctica para impresiones largas, lotes de producción y polímeros técnicos costosos.' },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
