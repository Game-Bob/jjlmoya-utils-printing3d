import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TechnicalResinUvCuringUI } from '../ui';

const slug = 'calculadora-tiempo-curado-uv-resina-tecnica';
const title = 'Calculadora de Tiempo de Curado UV para Resina Técnica';
const description = 'Estime el tiempo seguro de post-curado de resina SLA según el tipo de resina, el espesor máximo de pared, la potencia de la estación de lavado y curado, y la longitud de onda UV.';

const faqData = [
  { question: '¿Cuánto tiempo debo curar las impresiones de resina SLA?', answer: 'El tiempo correcto depende del tipo de resina, el espesor de pared, la potencia de la estación de curado, la longitud de onda y la geometría de exposición. Las piezas pequeñas de resina estándar pueden necesitar solo unos minutos, mientras que las piezas gruesas de resina resistente necesitan más tiempo pero deben respetar un límite de seguridad.' },
  { question: '¿Demasiado curado UV puede volver quebradiza la resina?', answer: 'Sí. La exposición excesiva a UV puede volver quebradizas, amarillas o menos flexibles muchas piezas de resina fotopolímero. La calculadora limita el tiempo cuando la estimación entra en una región de degradación.' },
  { question: '¿Deben secarse las impresiones de resina antes de curar?', answer: 'Sí. Las impresiones de resina deben estar limpias y completamente secas antes del curado UV. Los residuos de alcohol pueden causar blanqueamiento, contaminación atrapada y resultados de post-curado inconsistentes.' },
  { question: '¿Es mejor 385 nm o 405 nm para el curado de resina?', answer: 'Ninguno es universalmente mejor. La mejor longitud de onda es la que coincide con el sistema fotoiniciador de la resina y la estación de curado. Muchas resinas de escritorio están optimizadas para 405 nm, mientras que algunas resinas técnicas responden bien a 385 nm.' },
];

const howToData = [
  { name: 'Seleccione el preset de resina', text: 'Elija estándar, flexible, rígida/resistente, fundible o de combustión según el frasco de resina o el uso previsto.' },
  { name: 'Ingrese la pared más gruesa', text: 'Mida el espesor máximo de pared que debe recibir el post-curado UV.' },
  { name: 'Ingrese los parámetros de la estación', text: 'Configure la potencia de la estación de curado y la longitud de onda para que coincidan con su cámara UV.' },
  { name: 'Siga la lista de verificación de seguridad', text: 'Seque la pieza, exponga cada cara, elimine los soportes que proyectan sombras y respete el valor máximo seguro del temporizador.' },
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
  { type: 'title', text: 'Cómo se Elige el Tiempo de Post-Curado de Resina SLA', level: 2 },
  {
    type: 'paragraph',
    html: 'El post-curado es la exposición controlada a UV que se aplica después de que una impresión de resina ha sido lavada. El objetivo no es simplemente hacer que la superficie se sienta seca. Una pieza SLA o MSLA correctamente curada alcanza una mejor conversión de grupos reactivos dentro de la red polimérica, lo que mejora la rigidez, la resistencia al calor, la estabilidad dimensional y la seguridad de manipulación. El subcurado deja superficies pegajosas, débiles o químicamente activas. El sobrecurado puede llevar al material hacia la fragilización, el amarilleo visible y la pérdida de elongación. Una <strong>calculadora de tiempo de curado UV para resina SLA</strong> útil necesita equilibrar la química de la resina, el espesor de pared, la intensidad de luz, la longitud de onda, la temperatura y la geometría de exposición.',
  },
  {
    type: 'paragraph',
    html: 'La calculadora utiliza presets de resina porque las diferentes familias de resina no responden de manera idéntica. Una resina de escritorio estándar generalmente cura más rápido que una formulación flexible tipo uretano. La resina resistente o rígida de ingeniería a menudo necesita exposición más larga y a veces calor suave para acercarse a las propiedades de su ficha técnica. Las resinas fundibles y de combustión son sensibles porque el curado excesivo puede aumentar la fragilidad o los problemas relacionados con las cenizas. El resultado es un valor de temporizador recomendado, un límite superior seguro, una temperatura objetivo opcional y una distancia de luz práctica.',
  },
  {
    type: 'stats',
    columns: 4,
    items: [
      { value: '385/405 nm', label: 'longitudes de onda comunes de curado de resina de escritorio' },
      { value: '1-22 min', label: 'salida típica con límite de seguridad de la calculadora' },
      { value: '0.4-12 mm', label: 'rango del modelo de espesor de pared' },
      { value: '6-120 W', label: 'rango de potencia de la estación de curado' },
    ],
  },
  {
    type: 'diagnostic',
    variant: 'warning',
    title: 'Nunca cure impresiones de resina húmedas',
    html: 'El alcohol dejado en la pieza puede atrapar residuos no curados, blanquear superficies, contaminar la cámara de curado y distorsionar la relación entre la dosis UV y el comportamiento final del material. Lave primero, deje que la pieza se seque completamente, luego cure.',
  },
  { type: 'title', text: 'Por Qué el Espesor de Pared Cambia el Tiempo de Curado UV', level: 2 },
  {
    type: 'paragraph',
    html: 'Una carcasa delgada en miniatura y un soporte funcional grueso pueden usar la misma resina pero necesitar diferente comportamiento de post-curado. La luz UV es absorbida y dispersada por pigmentos, cargas, fotoiniciadores y el propio polímero. La superficie recibe la dosis más fuerte, mientras que el material más profundo recibe menos energía. Por eso la calculadora pregunta por el <strong>espesor máximo de pared</strong> en lugar de la altura total de la pieza o la masa total. La sección ópticamente relevante más gruesa es la parte que tiene más probabilidades de permanecer subcurada cuando el exterior ya parece terminado.',
  },
  {
    type: 'paragraph',
    html: 'El aumento es proporcional pero no perfectamente lineal. Duplicar el espesor de pared no siempre requiere exactamente el doble de tiempo de temporizador porque el curado también continúa desde múltiples caras cuando la pieza se rota y porque muchas impresiones de resina son huecas. El modelo utiliza un exponente específico de resina: las resinas resistentes escalan más agresivamente con el espesor, mientras que los perfiles fundibles permanecen bajo un límite de seguridad más estricto. Para piezas sólidas muy gruesas, la mejor solución suele ser el ahuecado, drenaje, rotación y curado por etapas en lugar de una sola exposición larga.',
  },
  {
    type: 'table',
    headers: ['Condición geométrica', 'Implicación de curado', 'Acción práctica'],
    rows: [
      ['Carcasa cosmética delgada', 'Baja demanda de curado interno', 'Use el tiempo calculado sin añadir minutos extra.'],
      ['Macle o saliente sólido grueso', 'Mayor riesgo de núcleo subcurado', 'Ingrese el espesor máximo de pared local, no el promedio de la carcasa.'],
      ['Pieza hueca con orificios de drenaje', 'La luz llega al exterior; el interior puede permanecer sombreado', 'Cure el exterior primero, luego exponga el interior si la geometría lo permite.'],
      ['Resina opaca u oscura', 'Menor penetración y más dispersión', 'Manténgase cerca de la guía del fabricante y rote con más frecuencia.'],
    ],
  },
  {
    type: 'tip',
    title: 'Mida la pared estructural más gruesa',
    html: 'Para una impresión de resina hueca, use la carcasa más gruesa o la nervadura de refuerzo. Para una pieza sólida de ingeniería, use la sección sólida más gruesa que debe alcanzar las propiedades mecánicas finales.',
  },
  { type: 'title', text: 'Potencia de la Estación, Distancia y Dosis UV', level: 2 },
  {
    type: 'paragraph',
    html: 'Una estación de lavado y curado clasificada a 40 W no entrega 40 W de energía UV útil a cada centímetro cuadrado de la pieza. La potencia nominal incluye pérdidas eléctricas y ópticas, disposición de LED, reflectividad de la cámara, cobertura del plato giratorio y distancia de la fuente de luz. Aun así, la potencia es un estimador útil: una estación de alta potencia generalmente necesita un temporizador más corto que una caja de curado débil tipo lámpara de uñas. La calculadora aplica un factor de potencia inverso para que el temporizador disminuya a medida que aumenta la potencia de la estación.',
  },
  {
    type: 'paragraph',
    html: 'La distancia importa porque la irradiancia disminuye a medida que la pieza se aleja de los LED, y porque la colocación muy cercana puede crear puntos calientes. Una pieza colocada demasiado cerca de un banco de LED puede curar una cara agresivamente mientras que las esquinas o superficies rebajadas permanecen blandas. Una pieza colocada demasiado lejos puede necesitar exposición más larga, pero agregar tiempo solo puede sobrecurar las caras ya iluminadas. Por eso la salida incluye una distancia recomendada en centímetros o pulgadas. Es un control de geometría, no meramente un valor de conveniencia.',
  },
  {
    type: 'comparative',
    columns: 3,
    items: [
      {
        title: 'Demasiado cerca',
        description: 'La alta intensidad local crea dosis desigual y estrés superficial.',
        points: ['Amarilleo en caras expuestas', 'Detalles delgados quebradizos', 'Cavidades sombreadas permanecen subcuradas'],
      },
      {
        title: 'Equilibrado',
        description: 'La distancia moderada permite que la cámara y el plato giratorio distribuyan UV más uniformemente.',
        highlight: true,
        points: ['Resultado mecánico más limpio', 'Menor riesgo de puntos calientes', 'Mejor repetibilidad'],
      },
      {
        title: 'Demasiado lejos',
        description: 'La baja irradiancia anima a los usuarios a compensar con tiempo excesivo.',
        points: ['Ciclos largos', 'Curado inconsistente', 'Falsa confianza de superficies secas'],
      },
    ],
  },
  {
    type: 'message',
    title: 'Rote cuando la cámara no exponga todas las caras',
    html: 'Si una pieza tiene huecos profundos, socavados o lados planos anchos, divida la exposición en ciclos más cortos y rote la pieza. Una dosis uniforme suele ser mejor que un curado estático largo.',
  },
  { type: 'title', text: '385 nm Versus 405 nm en el Curado de Resina', level: 2 },
  {
    type: 'paragraph',
    html: 'La mayoría de las impresoras MSLA de consumo y estaciones de curado utilizan LED de 405 nm porque esa longitud de onda coincide con muchos sistemas de fotoiniciadores de escritorio y es eficiente para matrices LED asequibles. Algunas resinas técnicas también responden fuertemente a 385 nm, una longitud de onda más corta más cercana al rango UV-A. La diferencia no es automáticamente mejor o peor. Una resina formulada para 405 nm puede necesitar más tiempo bajo 385 nm si el espectro no coincide; otra resina puede curar eficientemente a 385 nm. La calculadora trata la longitud de onda como un multiplicador dependiente de la resina.',
  },
  {
    type: 'paragraph',
    html: 'La acción importante del usuario es la consistencia. Si un fabricante de resina especifica un programa de post-curado para una unidad de curado, longitud de onda y temperatura particulares, use ese programa como referencia. Use esta calculadora cuando la resina sea genérica, cuando la potencia de la estación difiera de la máquina de referencia, o cuando la geometría de impresión sea más gruesa que un cupón de calibración simple. No mezcle un programa industrial de 385 nm con una estación de escritorio de 405 nm sin ajustar los supuestos de exposición.',
  },
  {
    type: 'glossary',
    items: [
      { term: 'Fotoiniciador', definition: 'Componente de la resina que absorbe luz e inicia reacciones de polimerización.' },
      { term: 'Dosis UV', definition: 'La energía lumínica acumulada recibida por la pieza durante el curado, influenciada por la irradiancia y el tiempo.' },
      { term: 'Post-curado', definition: 'Tratamiento UV y a veces térmico después del lavado que mejora las propiedades del material más allá del estado impreso.' },
      { term: 'Sobrecurar', definition: 'Exposición excesiva que puede hacer que una pieza de resina sea quebradiza, amarilla, deformada o menos resistente a impactos.' },
    ],
  },
  {
    type: 'diagnostic',
    variant: 'info',
    title: 'Seco al tacto no es lo mismo que completamente curado',
    html: 'Una superficie de resina puede dejar de sentirse pegajosa antes de que la red interna alcance el comportamiento mecánico previsto. Use la geometría, el tipo de resina y la potencia de la estación en lugar de la sensación superficial.',
  },
  { type: 'title', text: 'Presets de Resina y Riesgo Mecánico', level: 2 },
  {
    type: 'paragraph',
    html: 'Las resinas estándar suelen estar optimizadas para facilitar la impresión y el post-procesado rápido. Son la categoría más indulgente en la calculadora. Las resinas flexibles necesitan un manejo más cuidadoso porque la propiedad deseada es la elongación, no la dureza máxima. Demasiado UV puede reducir la flexibilidad y convertir una pieza blanda en algo que se agrieta antes. Las resinas rígidas y resistentes a menudo necesitan más dosis para desarrollar resistencia, pero también tienen un límite superior donde el curado adicional ya no mejora el rendimiento y en cambio aumenta la fragilidad.',
  },
  {
    type: 'paragraph',
    html: 'Las resinas fundibles y de combustión tienen una prioridad diferente. Su uso final puede implicar fundición a la cera perdida o combustión limpia, por lo que la calidad de la superficie, el comportamiento de las cenizas y la estabilidad dimensional son importantes. Una pieza fundible muy sobrecurada puede volverse frágil durante la manipulación o rendir mal en procesos posteriores. La calculadora aplica un límite más estricto a estas categorías porque el flujo de trabajo más seguro es el curado controlado, no la exposición máxima.',
  },
  {
    type: 'table',
    headers: ['Preset de resina', 'Objetivo principal', 'Síntoma de sobrecurado', 'Comportamiento de la calculadora'],
    rows: [
      ['Estándar', 'Dureza general y manipulación segura', 'Amarilleo y detalles delgados quebradizos', 'Tiempo base moderado y límite medio.'],
      ['Flexible', 'Mantener elongación eliminando pegajosidad', 'Pérdida de flexibilidad y desgarro', 'Tiempo base más largo con sensibilidad de dosis cautelosa.'],
      ['Rígida / Resistente', 'Alcanzar rigidez y resistencia de ingeniería', 'Fractura frágil en lugar de fallo resistente', 'Tiempo base más alto y curado cálido opcional.'],
      ['Fundible', 'Manipulación limpia antes del flujo de fundición', 'Patrones frágiles y oscurecimiento superficial', 'Límite de seguridad más bajo para evitar exposición agresiva.'],
      ['Combustión', 'Curado controlado antes de la combustión térmica', 'Astillamiento o estrés dimensional', 'Tiempo moderado con límite conservador.'],
    ],
  },
  {
    type: 'proscons',
    title: 'Añadir minutos extra después de la calculadora',
    items: [
      { pro: 'Puede ayudar si una cara quedó sombreada durante un ciclo corto.', con: 'Puede degradar caras ya expuestas cuando la pieza no fue rotada.' },
      { pro: 'Puede reducir la pegajosidad en piezas muy gruesas u oscuras.', con: 'Puede hacer que las resinas resistentes y flexibles fallen de manera más frágil.' },
      { pro: 'Útil como segundo ciclo corto después de inspección.', con: 'Inseguro como hábito rutinario sin verificar el límite de seguridad.' },
    ],
  },
  { type: 'title', text: 'Temperatura Durante el Post-Curado de Resina Técnica', level: 2 },
  {
    type: 'paragraph',
    html: 'Algunas resinas de ingeniería especifican temperatura elevada de post-curado porque el calor aumenta la movilidad molecular y ayuda a la red polimérica a alcanzar sus propiedades previstas. El curado cálido puede mejorar la temperatura de deflexión térmica, el módulo y la resistencia final para materiales compatibles. No debe aplicarse ciegamente a cada resina. Una miniatura impresa en resina estándar puede no necesitar calor en absoluto, mientras que una resina resistente de ingeniería puede beneficiarse de 40-60 °C dependiendo de los datos del fabricante. Por lo tanto, la calculadora devuelve temperatura ambiente para las familias de resina donde no se asume calor, y un objetivo de temperatura modesto donde es útil.',
  },
  {
    type: 'paragraph',
    html: 'El control de temperatura también es un problema de seguridad. Demasiado calor puede deformar secciones delgadas, ablandar cicatrices de soportes o acelerar el amarilleo. Una estación de lavado y curado sin cámara calefactada no debe tratarse como equivalente a un horno de laboratorio. Si la ficha técnica de la resina especifica un ciclo térmico preciso, esa ficha técnica prevalece. La calculadora es un estimador práctico para flujos de trabajo de escritorio comunes, no un reemplazo para la validación de procesos médicos, dentales, aeroespaciales o de fundición certificados.',
  },
  {
    type: 'card',
    title: 'Cuando la salida dice temperatura ambiente',
    html: 'Temperatura ambiente significa que la calculadora no requiere un post-curado calentado para ese preset de resina. No significa que la pieza pueda curarse mientras está fría, mojada o en un taller con corrientes de aire. Mantenga la pieza seca y deje que la resina alcance una temperatura interior normal antes de la exposición.',
  },
  {
    type: 'tip',
    title: 'Evite curar inmediatamente después de la eliminación de IPA',
    html: 'Después del lavado, deje que el alcohol se evapore de los agujeros, cavidades y texto en relieve. Diez a treinta minutos de secado pueden importar más que agregar otro minuto de UV.',
  },
  { type: 'title', text: 'Diagnóstico de Piezas de Resina Subcuradas y Sobrecuradas', level: 2 },
  {
    type: 'paragraph',
    html: 'Las piezas de resina subcuradas generalmente muestran superficies pegajosas, características pequeñas débiles, olor persistente, bordes blandos o residuos que se transfieren a los guantes. Estos síntomas son más comunes cuando la pieza no se lavó a fondo, se curó mientras estaba húmeda, tenía un espesor de pared grande o estuvo en sombra dentro de la cámara. Las piezas sobrecuradas muestran síntomas diferentes: fallo frágil por rotura, amarilleo, superficies calcáreas, bordes delgados curvados o pérdida de flexibilidad. La solución depende del síntoma. Más UV no es la respuesta para cada problema de impresión de resina.',
  },
  {
    type: 'diagnostic',
    variant: 'error',
    title: 'Quebradizo y amarillo significa dejar de agregar exposición',
    html: 'Si una pieza ya se ha vuelto quebradiza o visiblemente amarilla, el curado extra no recuperará la tenacidad. Reimprima, reduzca el valor del temporizador, mejore la rotación y respete el límite.',
  },
  {
    type: 'summary',
    title: 'Orden de solución de problemas',
    items: [
      'Confirme que la pieza fue lavada y secada antes de curar.',
      'Verifique si los soportes o la orientación del modelo crearon sombras UV.',
      'Ingrese la pared más gruesa, no el tamaño promedio del modelo.',
      'Use el límite de seguridad cuando la estimación bruta sea demasiado larga.',
      'Rote piezas complejas en lugar de extender una exposición estática.',
    ],
  },
  {
    type: 'table',
    headers: ['Síntoma', 'Causa probable', 'Corrección'],
    rows: [
      ['Superficie pegajosa después del curado', 'Resina residual o IPA, dosis insuficiente o cara sombreada', 'Vuelva a lavar si está contaminado, seque completamente, luego aplique un ciclo corto rotado.'],
      ['Las características delgadas se rompen fácilmente', 'Sobrecurado o resina inherentemente quebradiza', 'Reduzca el temporizador y evite la colocación cercana de LED.'],
      ['Un lado amarillo, el otro blando', 'Exposición desigual de la cámara', 'Aumente la distancia y rote durante el curado.'],
      ['La resina flexible se vuelve rígida', 'Dosis demasiado alta para el comportamiento elastomérico', 'Use menos tiempo y deténgase al alcanzar manipulación no pegajosa.'],
    ],
  },
  { type: 'title', text: 'Cómo Usar Esta Calculadora de Tiempo de Estación de Lavado y Curado UV', level: 2 },
  {
    type: 'paragraph',
    html: 'Comience con el preset de resina más cercano a la etiqueta del material. Si la botella dice resistente, rígida, tipo ABS, de ingeniería o alto impacto, use el preset rígido/resistente. Si es elástica, flexible o tipo caucho, use flexible. Para fundición a la cera perdida o flujos de trabajo libres de cenizas, use fundible o combustión. Luego mida el espesor máximo de pared. Ingrese la potencia nominal de la estación de curado y elija 385 nm o 405 nm según la documentación de la estación o la resina. El valor del temporizador de salida es el primer ciclo que debe ejecutar.',
  },
  {
    type: 'paragraph',
    html: 'Antes de presionar inicio, use la lista de verificación. La pieza debe estar seca, visible desde múltiples ángulos y libre de estructuras de soporte que proyecten sombras. Si el modelo es complejo, cure durante parte del tiempo recomendado, rótelo y termine el resto del ciclo. Si la calculadora advierte que se aplicó el límite de seguridad, no lo anule con una exposición larga. El límite existe porque esa categoría de resina tiene más probabilidades de degradarse que mejorar más allá de ese punto.',
  },
  {
    type: 'list',
    items: [
      'Use las instrucciones del fabricante cuando una ficha técnica de resina dé un ciclo de post-curado validado.',
      'Use esta calculadora cuando la potencia de la estación, la longitud de onda o el espesor de la pieza difieran del flujo de trabajo de referencia.',
      'No cure piezas que huelan fuertemente a solvente o tengan líquido atrapado en los orificios de drenaje.',
      'No asuma que una luz más fuerte es más segura; puede crear sobrecurado local más rápido.',
      'Registre los tiempos exitosos por resina, color, espesor de pared y modelo de estación.',
    ],
  },
  {
    type: 'summary',
    title: 'Regla de post curado seguro',
    items: [
      'Limpie primero.',
      'Seque completamente.',
      'Cure dentro de la ventana calculada.',
      'Rote para cobertura.',
      'Deténgase antes de que la resina se vuelva quebradiza, amarilla o deformada.',
    ],
  },
];

export const content: ToolLocaleContent<TechnicalResinUvCuringUI> = {
  slug, title, description,
  ui: {
    controlsAriaLabel: 'Controles de entrada de curado UV de resina técnica',
    resultsAriaLabel: 'Parámetros recomendados de post-curado de resina',
    unitSystemLabel: 'Unidades',
    metricLabel: 'Métrico',
    imperialLabel: 'US',
    resinGroupLabel: 'Preset de resina',
    stationGroupLabel: 'Estación de curado',
    preparationLabel: 'Antes del curado',
    resinTypeLabel: 'Tipo de resina',
    standardLabel: 'Estándar',
    flexibleLabel: 'Flexible',
    toughLabel: 'Rígida / Resistente',
    castableLabel: 'Fundible',
    burnoutLabel: 'Combustión',
    wallThicknessLabel: 'Espesor máximo de pared',
    wallThicknessHelp: 'Use la pared sólida o carcasa más gruesa que la luz UV debe atravesar para curar.',
    stationPowerLabel: 'Potencia de la estación',
    stationPowerHelp: 'Potencia eléctrica nominal de la estación de curado o conjunto de lámparas UV.',
    wavelengthLabel: 'Longitud de onda',
    wavelength385Label: '385 nm',
    wavelength405Label: '405 nm',
    cleanDryReminder: 'La pieza debe estar limpia y perfectamente seca antes de la exposición UV. No cure piezas que aún tengan alcohol.',
    dryCheckLabel: '¿Está la pieza totalmente seca y libre de residuos de alcohol?',
    exposureCheckLabel: '¿Está la pieza posicionada para que la luz llegue a cada cara?',
    supportsCheckLabel: '¿Está la pieza libre de soportes que puedan proyectar sombras?',
    degradationWarning: 'El tiempo de curado excesivo vuelve la pieza quebradiza y amarilla. Respete los límites técnicos.',
    recommendedTimeLabel: 'Ajuste del temporizador',
    temperatureLabel: 'Temperatura de curado',
    noTemperatureLabel: 'Ambiente',
    ambientTemperatureNoteMetric: 'Cure a temperatura ambiente (18-25 °C). No se requiere cámara calefactada para este preset.',
    ambientTemperatureNoteImperial: 'Cure a temperatura ambiente (64-77 °F). No se requiere cámara calefactada para este preset.',
    distanceLabel: 'Distancia de luz',
    maxSafeLabel: 'Límite de seguridad',
    doseIndexLabel: 'Índice de dosis UV',
    safetySafeLabel: 'Dentro de la ventana segura',
    safetyCautionLabel: 'Cerca del límite superior',
    safetyLimitLabel: 'Límite de seguridad aplicado',
    limitMessage: 'La exposición solicitada excedería el límite de seguridad de la resina. Use el valor del temporizador con límite y rote la pieza entre ciclos si hay caras sombreadas.',
    cautionMessage: 'La recomendación es técnicamente utilizable pero cercana a la región de degradación. Mantenga la pieza seca, rótela y evite añadir minutos extra por hábito.',
    safeMessage: 'La recomendación está dentro de la ventana normal de post-curado para este perfil de resina y potencia de estación.',
    timerUnit: 'min',
    mmUnit: 'mm',
    inchUnit: 'in',
    cmUnit: 'cm',
    inUnit: 'in',
    wattUnit: 'W',
    celsiusUnit: '°C',
    fahrenheitUnit: '°F',
  },
  seo: seoData,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
