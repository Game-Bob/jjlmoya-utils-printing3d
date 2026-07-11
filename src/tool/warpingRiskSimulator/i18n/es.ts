import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WarpingRiskSimulatorUI } from '../ui';

const slug = 'simulador-riesgo-warping-impresion-3d';
const title = 'Simulador de Riesgo de Warping para Impresión 3D';
const description = 'Estima el levantamiento de la primera capa y el riesgo de warping a partir de la contracción del material, el área de la huella, la diagonal más larga, la temperatura de la cama, la temperatura ambiente y las condiciones de la cámara.';

const faqData = [
  {
    question: '¿Por qué la diagonal más larga afecta al warping más que el área de la huella?',
    answer: 'La diagonal más larga representa la ruta de contracción continua más extensa. Una pieza larga puede acumular suficiente contracción lineal para levantar las esquinas incluso si el área total de contacto parece grande.',
  },
  {
    question: '¿Este simulador garantiza que mi impresión no se deformará?',
    answer: 'No. Es una estimación de riesgo. El filamento húmedo, las superficies de impresión sucias, la altura de la primera capa, las corrientes de aire, la geometría de la pieza y las opciones de enfriamiento del laminador pueden modificar el resultado.',
  },
  {
    question: '¿Qué materiales necesitan más una cámara cerrada?',
    answer: 'ABS, ASA, Nylon y PC son los más sensibles al uso de cámara en este modelo porque combinan temperaturas de procesamiento más altas, una contracción más fuerte y una mayor tensión de enfriamiento.',
  },
  {
    question: '¿Cómo se estima el ancho del brim?',
    answer: 'El simulador parte del cinco por ciento de la diagonal más larga y lo escala según el riesgo calculado, luego ajusta el resultado a valores prácticos del laminador.',
  },
];

const howToData = [
  { name: 'Elige el material', text: 'Selecciona PLA, PETG, ABS, ASA, Nylon, PC o TPU para que el simulador aplique una clase de contracción.' },
  { name: 'Introduce la huella y la diagonal', text: 'Usa el área de la superficie que toca la cama y la distancia de esquina a esquina más larga de la pieza.' },
  { name: 'Configura el entorno térmico', text: 'Introduce la temperatura de la cama y la ambiente, e indica si la impresora tiene una cámara cerrada.' },
  { name: 'Copia los ajustes del laminador', text: 'Usa el brim sugerido, la adhesión, el enfriamiento y los ajustes de cámara como perfil de partida.' },
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

export const content: ToolLocaleContent<WarpingRiskSimulatorUI> = {
  slug,
  title,
  description,
  ui: {
    unitSystemLabel: 'Sistema de unidades',
    unitMetric: 'Métrico',
    unitImperial: 'Imperial',
    unitCelsius: '°C',
    unitFahrenheit: '°F',
    unitMillimeter: 'mm',
    unitInch: 'in',
    noBrim: '0',
    material: 'Material',
    footprintArea: 'Área de la huella',
    footprintHelp: 'Área que realmente toca la cama de impresión, no la superficie total del modelo.',
    diagonal: 'Diagonal más larga',
    diagonalHelp: 'Distancia de esquina a esquina más larga de la primera capa. Es el vector principal de tensión térmica.',
    bedTemperature: 'Temperatura de la cama',
    bedTemperatureWarning: 'Aviso de temperatura',
    ambientTemperature: 'Temperatura ambiente',
    chamber: 'Cámara cerrada',
    chamberOn: 'Cerrada o con protección activa',
    chamberOff: 'Impresora abierta',
    riskLow: 'Bajo',
    riskMedium: 'Medio',
    riskHigh: 'Alto',
    riskCritical: 'Crítico',
    riskIndex: 'Índice de riesgo',
    thermalIndex: 'Índice de tensión térmica',
    deltaT: 'Delta T',
    brimRecommendation: 'Recomendación de brim',
    adhesionDiagnosis: 'Diagnóstico de adhesión',
    adhesionStrength: 'Escalera de adhesión',
    criticalWarnings: 'Avisos críticos',
    whyDiagonalMatters: 'Por qué importa la diagonal',
    recommendedSettings: 'Configuración recomendada del laminador',
    copySettings: 'Copiar configuración',
    copied: 'Copiado',
    simulatorNotice: 'Esto es una estimación de riesgo, no una garantía de éxito. La humedad del filamento, la contaminación de la cama, el Z offset, las corrientes de aire y las modificaciones de enfriamiento siguen siendo variables externas.',
    warnings: {
      openTechnicalMaterial: '{material} sin cámara cerrada es una condición grave de warping.',
      bedTemperatureHigh: 'La temperatura de cama para {material} supera el rango recomendado de {min}-{max} {unit}. Espera ablandamiento, pata de elefante o artefactos de adhesión.',
      bedTemperatureLow: 'La temperatura de cama para {material} está por debajo del rango recomendado de {min}-{max} {unit}. La adherencia de la primera capa puede ser insuficiente para esta geometría.',
      narrowFootprint: 'La huella es estrecha en comparación con la diagonal, por lo que el levantamiento de esquinas puede acumularse rápidamente.',
      highDeltaT: 'La diferencia entre la temperatura de la cama y la ambiente es muy alta; controla el flujo de aire y la velocidad de enfriamiento.',
    },
    diagnosis: {
      critical: 'El brim es obligatorio. Usa una superficie adhesiva específica y evita imprimir este material al aire libre.',
      highEnclosed: 'Se recomienda encarecidamente un brim ancho y adhesivo.',
      highOpen: 'Usa brim, adhesivo y una cámara cerrada antes de empezar.',
      mediumEasyMaterial: 'Usa una superficie PEI limpia; el brim es opcional para esquinas afiladas.',
      medium: 'Usa brim o mouse ears en las esquinas y verifica la adhesión a la cama.',
      low: 'Seguro en condiciones normales de primera capa.',
    },
    adhesionOptions: {
      low: ['PEI limpio o superficie texturizada: agarre normal, despegado más fácil.'],
      medium: ['Barra de pegamento o capa desmoldeante de PVA: agarre extra ligero y liberación más segura de PETG.', 'Mouse ears: agarre localizado en esquinas sin necesidad de brim completo.'],
      high: ['Brim ancho más barra de pegamento: amplio soporte mecánico con limpieza moderada.', 'Magigoo o adhesivo similar: agarre más fuerte para ABS, ASA, PETG y variantes de Nylon.'],
      criticalDefault: ['Brim de ancho completo: huella máxima de la primera capa.', 'Adhesivo de alta resistencia: usa PEI más un adhesivo de alta resistencia.', 'Cámara cerrada: necesaria para que el adhesivo funcione de forma consistente.'],
      criticalTechnical: ['Brim de ancho completo: huella máxima de la primera capa.', 'Adhesivo de alta resistencia: usa un adhesivo específico para Nylon o PC.', 'Cámara cerrada: necesaria para que el adhesivo funcione de forma consistente.'],
    },
    slicerSettings: {
      brimWidth: 'Ancho de brim: {value}',
      bedAdhesion: 'Adhesión a la cama: {value}',
      lowAdhesion: 'PEI limpio o superficie texturizada',
      highAdhesion: 'PEI más barra de pegamento, Magigoo o adhesivo específico',
      cooling: 'Enfriamiento: {value}',
      normalCooling: 'Enfriamiento normal de la pieza después de la capa 3',
      technicalCooling: 'Enfriamiento de la pieza desactivado durante las primeras 5-8 capas',
      enclosedChamber: 'Mantén la cámara cerrada hasta que la pieza se enfríe por debajo de la temperatura de transición vítrea',
      openChamber: 'Protege la impresora de corrientes de aire y flujo de aire ambiente',
      skirtEnough: '0 mm, el skirt es suficiente',
    },
    diagonalExplanation: 'La diagonal más larga se comporta como el vector de tensión principal: al enfriarse la pieza, la contracción se acumula a lo largo de ese tramo y carga las esquinas incluso cuando el área de la huella parece generosa.',
  },
  seo: [
    { type: 'title', text: 'Cómo estimar el riesgo de warping antes de laminar una impresión 3D', level: 2 },
    {
      type: 'paragraph',
      html: 'El warping no es solo un problema de material ni tampoco solo un problema de adhesión a la cama. Aparece cuando una capa impresa se enfría, se contrae y genera suficiente tensión interna para superar el agarre de la primera capa. Un pequeño soporte de ABS puede fallar porque el polímero se contrae con fuerza; un letrero grande de PLA puede fallar porque la diagonal es lo bastante larga como para acumular contracción a lo largo de un tramo amplio. Por lo tanto, la pregunta útil no es simplemente <strong>¿este material se deformará?</strong> sino <strong>¿esta geometría y este entorno térmico generan más fuerza de tracción de la que la cama puede resistir?</strong>',
    },
    {
      type: 'paragraph',
      html: 'Este simulador utiliza un Índice de Tensión Térmica heurístico: <strong>factor de contracción del material por diagonal más larga por diferencia de temperatura cama-ambiente, dividido por el área de la huella</strong>. La fórmula es intencionadamente práctica. No pretende ser un análisis de elementos finitos, pero combina las variables que los operadores pueden medir antes de imprimir: familia de material, área de contacto, tramo lineal más largo, temperatura de cama, temperatura ambiente y si la impresora está cerrada.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Usa el resultado como señal preventiva',
      badge: 'Estimación',
      html: 'Una puntuación baja significa que es poco probable que la impresión se levante si la primera capa está limpia y bien calibrada. Una puntuación alta o crítica indica que el perfil del laminador debe cambiarse antes de imprimir: brim más ancho, adhesivo, menos enfriamiento, protección contra corrientes de aire o un material diferente. El simulador no puede ver filamento húmedo, PEI aceitoso, una boquilla demasiado alejada de la cama o una pieza con puntos de contacto diminutos en las esquinas.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '5%', label: 'ancho inicial del brim como fracción de la diagonal más larga', icon: 'mdi:ruler' },
        { value: '1,85x', label: 'multiplicador severo de cámara abierta para ABS, ASA, Nylon y PC', icon: 'mdi:home-alert' },
        { value: '0-100', label: 'escala de riesgo asignada a partir del Índice de Tensión Térmica', icon: 'mdi:gauge' },
      ],
    },
    { type: 'title', text: 'Por qué la diagonal más larga puede ser más peligrosa que el área', level: 2 },
    {
      type: 'paragraph',
      html: 'El área de la huella indica cuánta superficie está disponible para la adhesión. La diagonal indica hasta dónde puede acumularse la contracción térmica antes de llegar a una esquina o un extremo fino. Dos piezas pueden tener la misma área y comportarse de forma muy diferente: una base cuadrada compacta tiene rutas de contracción cortas en todas direcciones, mientras que una tira larga y estrecha concentra la contracción a lo largo de una sola línea e intenta despegarse por los extremos.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Huella compacta',
          description: 'Una base cuadrada o redonda distribuye la contracción a través de muchos caminos cortos. Las esquinas están más cerca del centro, por lo que el brazo de palanca para el levantamiento es menor.',
          icon: 'mdi:crop-square',
          points: ['Mejor reparto de la carga', 'Menor palanca en las esquinas', 'Brim a menudo opcional en materiales fáciles'],
        },
        {
          title: 'Huella de diagonal larga',
          description: 'Un rectángulo largo, marco, cuchilla, panel de cerramiento o carril permite que la contracción se acumule a lo largo de una dirección dominante. Los extremos y las esquinas reciben la mayor fuerza de despegue.',
          icon: 'mdi:vector-line',
          highlight: true,
          points: ['Mayor tensión acumulada', 'Las esquinas se levantan primero', 'A menudo se necesita brim o mouse ears'],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Cómo medir la diagonal rápidamente',
      html: 'En la vista previa del laminador, observa la primera capa desde arriba y mide la distancia de esquina a esquina más larga de la parte que toca la cama. Para una huella rectangular, usa la diagonal del rectángulo, no solo la longitud en X o Y. Para una pieza irregular, usa el tramo recto más largo entre dos puntos exteriores.',
    },
    {
      type: 'table',
      headers: ['Patrón de geometría', 'Síntoma típico', 'Acción preventiva'],
      rows: [
        ['Carril largo y fino', 'Los extremos se levantan mientras el centro permanece adherido', 'Usa brim o mouse ears en ambos extremos'],
        ['Panel plano grande', 'Las esquinas se curvan hacia arriba gradualmente', 'Usa cámara cerrada, enfriamiento más lento y adhesivo'],
        ['Pieza pequeña y alta', 'La base se mantiene adherida pero la torre se tambalea', 'El warping no es el riesgo principal; mejora la estabilidad'],
        ['Marco abierto', 'Las esquinas interiores tiran hacia dentro', 'Añade brim, aumenta el ancho de la primera capa, reduce el ventilador'],
      ],
    },
    { type: 'title', text: 'Clases de contracción de material que usa el simulador', level: 2 },
    {
      type: 'paragraph',
      html: 'Los diferentes termoplásticos se contraen en distinta medida al enfriarse desde la temperatura de extrusión hasta la temperatura ambiente. El PLA y el TPU suelen ser tolerantes porque imprimen a temperaturas más bajas y generan menos tensión de enfriamiento. El PETG está en el punto medio: se adhiere con fuerza pero puede seguir tirando de las esquinas afiladas. El ABS, ASA, Nylon y PC se tratan como materiales técnicos de alto riesgo porque combinan temperaturas de extrusión más altas, una contracción más fuerte y una mayor necesidad de una cámara estable y cálida.',
    },
    {
      type: 'table',
      headers: ['Material', 'Clase de contracción', 'Estrategia común de cama', 'Sensibilidad a la cámara'],
      rows: [
        ['PLA', 'Baja', 'PEI limpio, cama moderada', 'Baja'],
        ['TPU', 'Baja', 'Superficie limpia, evitar apriete excesivo', 'Baja'],
        ['PETG', 'Media', 'PEI texturizado o capa desmoldeante', 'Media'],
        ['ABS', 'Alta', 'PEI más adhesivo o lechada de ABS donde corresponda', 'Muy alta'],
        ['ASA', 'Alta', 'PEI más adhesivo, enfriamiento controlado', 'Muy alta'],
        ['Nylon', 'Alta', 'Adhesivo específico, filamento seco', 'Muy alta'],
        ['PC', 'Alta', 'Cama de alta temperatura y adhesivo', 'Muy alta'],
      ],
    },
    {
      type: 'proscons',
      title: 'Cambiar de material en lugar de combatir el warping',
      items: [
        { pro: 'Cambiar de ABS a ASA puede mejorar la durabilidad exterior manteniendo un comportamiento térmico similar.', con: 'ASA sigue necesitando disciplina de cámara y puede deformarse en piezas largas.' },
        { pro: 'Cambiar de ABS a PETG reduce la contracción y suele ser suficiente para soportes y carcasas.', con: 'El PETG tiene menor resistencia al calor y una rigidez diferente a la del ABS o el PC.' },
        { pro: 'El Nylon relleno de fibra puede reducir algunas rutas de contracción y mejorar la rigidez.', con: 'Requiere secado, boquillas resistentes a la abrasión y un control de adhesión riguroso.' },
      ],
    },
    { type: 'title', text: 'Delta T: por qué importan tanto la temperatura de la cama como la ambiente', level: 2 },
    {
      type: 'paragraph',
      html: 'El simulador usa <strong>Delta T</strong> como la temperatura de la cama menos la temperatura ambiente. No es lo mismo que la temperatura de la boquilla, pero es un indicador útil del gradiente térmico que experimenta la parte inferior de la pieza. Una cama caliente reduce la contracción temprana en la interfaz, pero una habitación muy fría o un flujo de aire fuerte pueden seguir extrayendo calor de las capas superiores y crear un gradiente de tensión entre la base anclada y el cuerpo en enfriamiento de la pieza.',
    },
    {
      type: 'paragraph',
      html: 'Para el PLA, un Delta T moderado puede ser inofensivo porque el material se contrae de forma menos agresiva. Para el ABS, ASA, Nylon y PC, la misma geometría a la misma temperatura de cama puede fallar si la impresora está expuesta a corrientes de aire. Por eso el cálculo aplica un multiplicador severo cuando esos materiales técnicos se imprimen sin cámara cerrada.',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Impresora abierta con ABS, ASA, Nylon o PC',
      badge: 'Condición crítica',
      html: 'Si la cámara está abierta, la impresión queda expuesta a enfriamiento local, movimiento de puertas, flujo de aire HVAC y cambios rápidos de temperatura en las capas. La primera capa puede verse perfecta durante los primeros veinte minutos y aun así levantarse más tarde a medida que la pieza acumula más tensión de contracción.',
    },
    {
      type: 'list',
      icon: 'mdi:thermometer',
      items: [
        'Una cámara más cálida reduce la diferencia de temperatura entre las capas nuevas y las anteriores.',
        'Una cámara cerrada también ralentiza el enfriamiento después de la impresión, lo que reduce el despegue repentino de las esquinas.',
        'Los protectores contra corrientes ayudan, pero no equivalen a una cámara caliente estable para PC o Nylon.',
        'Aumentar la temperatura de la cama por sí solo puede mejorar el agarre, pero también puede aumentar la pata de elefante en materiales blandos.',
      ],
    },
    { type: 'title', text: 'Cómo se interpreta el Índice de Tensión Térmica', level: 2 },
    {
      type: 'paragraph',
      html: 'El Índice de Tensión Térmica es una puntuación relativa, no una fuerza medida en newtons. Aumenta cuando el factor de contracción, la diagonal o el Delta T se incrementan. Disminuye cuando el área de la huella aumenta porque una mayor superficie de contacto puede distribuir la misma carga de tracción. El valor se asigna luego a un porcentaje de riesgo de 0 a 100 para que diferentes configuraciones de impresión puedan compararse rápidamente.',
    },
    {
      type: 'table',
      headers: ['Rango de riesgo', 'Significado', 'Respuesta recomendada'],
      rows: [
        ['0-31%', 'Bajo', 'Limpia la cama, verifica la primera capa, no se necesita adhesión especial para la mayoría de formas'],
        ['32-57%', 'Medio', 'Usa brim en esquinas afiladas, reduce el ventilador inicial, inspecciona el contacto de la huella'],
        ['58-81%', 'Alto', 'Usa brim ancho, adhesivo, cámara cerrada si el material lo necesita, evita corrientes de aire'],
        ['82-100%', 'Crítico', 'Trátalo como probable que se deforme a menos que cambies la geometría, el material o el entorno'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:calculator-variant',
      title: '¿Por qué dividir por el área de la huella?',
      html: 'Una huella más grande le da a la cama más oportunidad de resistir la fuerza de despegue. El modelo recompensa las piezas con contacto amplio y continuo y penaliza las bases estrechas, los pies pequeños y las piezas largas que tienen solo una tira fina tocando la superficie.',
    },
    { type: 'title', text: 'Ancho del brim, mouse ears y opciones de adhesivo', level: 2 },
    {
      type: 'paragraph',
      html: 'La recomendación de brim parte de <strong>Diagonal x 0,05</strong>. Una diagonal de 180 mm comienza por tanto cerca de 9 mm antes del escalado por riesgo. En la práctica, el brim no debe elegirse solo por el material. Un cubo corto de PLA puede no necesitar brim, mientras que una espada, un letrero o un carril largos de PLA pueden beneficiarse de un brim modesto porque la diagonal es la ruta de tensión dominante.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: 'Brim', description: 'La mejor opción polivalente para aumentar el contacto de la primera capa alrededor de toda la pieza.', icon: 'mdi:border-outside', points: ['Fácil de retirar en PLA', 'Muy útil en esquinas de ABS'] },
        { title: 'Mouse ears', description: 'Almohadillas circulares localizadas colocadas en esquinas o extremos finos donde comienza el levantamiento.', icon: 'mdi:circle-outline', points: ['Menos limpieza', 'Bueno para carriles y marcos'] },
        { title: 'Adhesivo', description: 'Mejora el agarre químico o mecánico entre el polímero y la superficie de impresión.', icon: 'mdi:water-plus', points: ['Útil para Nylon y PC', 'La elección según la superficie es importante'] },
      ],
    },
    {
      type: 'tip',
      title: 'No hagas del brim la única solución',
      html: 'Si el simulador indica riesgo crítico, un brim más ancho puede retrasar el fallo pero no eliminar la tensión subyacente. Combina el brim con cámara cerrada, enfriamiento inicial más lento, una cama más limpia y cambios de geometría como esquinas redondeadas o piezas divididas.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Warping', definition: 'Deformación hacia arriba causada por la contracción del enfriamiento que supera la adhesión a la cama.' },
        { term: 'Área de la huella', definition: 'El área del modelo que toca la cama de impresión en la primera capa.' },
        { term: 'Diagonal más larga', definition: 'El tramo recto más largo a través de la forma de contacto de la primera capa.' },
        { term: 'Delta T', definition: 'La diferencia de temperatura entre la cama y el aire ambiente de la habitación.' },
        { term: 'Brim', definition: 'Vueltas extra del perímetro de la primera capa impresas alrededor de la pieza para aumentar la adhesión.' },
      ],
    },
    { type: 'title', text: 'Ajustes prácticos del laminador para piezas de alto riesgo', level: 2 },
    {
      type: 'list',
      icon: 'mdi:tune',
      items: [
        'Aumenta el ancho de línea de la primera capa para crear más contacto, pero evita un aplastamiento Z excesivo que cause crestas.',
        'Usa una primera capa más lenta para que el polímero se adhiera a la cama antes de que las capas posteriores tiren de él.',
        'Desactiva o reduce el enfriamiento de la pieza para ABS, ASA, Nylon y PC durante las primeras capas.',
        'Añade un brim lo suficientemente ancho como para sobrepasar las esquinas afiladas y los extremos estrechos.',
        'Evita colocar piezas grandes de material técnico cerca de puertas de la cámara, rejillas de ventilación o paneles laterales fríos.',
      ],
    },
    {
      type: 'message',
      title: 'Cambios de geometría que reducen el riesgo',
      ariaLabel: 'Ideas de mitigación geométrica',
      html: 'Redondea las esquinas afiladas, divide los paneles muy largos en secciones más cortas, añade lengüetas temporales a los extremos finos, orienta la pieza para que la ruta de tensión más larga sea más corta, o añade almohadillas de sacrificio que puedan recortarse después de la impresión. Estos cambios suelen funcionar mejor que simplemente subir la temperatura de la cama.',
    },
    {
      type: 'summary',
      title: 'Lista de verificación rápida',
      items: [
        'Material de alta contracción más cámara abierta es la señal de advertencia más fuerte.',
        'Diagonal larga más huella pequeña significa que las esquinas y los extremos merecen brim o mouse ears.',
        'Una temperatura alta de cama no anula una habitación fría o un entorno con corrientes de aire.',
        'El resultado es una estimación de planificación; la calibración de la primera capa y el estado del filamento siguen decidiendo la impresión final.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
