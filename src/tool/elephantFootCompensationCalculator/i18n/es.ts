import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ElephantFootCompensationCalculatorUI } from '../ui';

const slug = 'calculadora-compensacion-pata-elefante';
const title = 'Calculadora de Compensación de Pata de Elefante: Corrección Dimensional de Precisión';
const description = 'Calcule la expansión horizontal negativa y la profundidad de chaflán CAD para la primera capa en impresión 3D usando el error dimensional medido, la altura de capa, la presión Z-offset y la temperatura de la cama.';

const faqData = [
  {
    question: '¿Cuál es el mejor valor de compensación para pata de elefante?',
    answer: 'El mejor valor es el error base medido corregido por la altura de la primera capa, la presión Z efectiva y la temperatura de la cama. Esta calculadora lo reporta como un valor de expansión horizontal negativo del laminador.',
  },
  {
    question: '¿Debería usar expansión horizontal o un chaflán CAD?',
    answer: 'Use la expansión horizontal del laminador para una corrección rápida a nivel de perfil. Use un chaflán CAD para piezas funcionales donde el borde inferior toque otra pieza, se asiente en una superficie de referencia o deba mantenerse repetible entre laminadores.',
  },
  {
    question: '¿Por qué la temperatura de la cama afecta la pata de elefante?',
    answer: 'Una cama más caliente mantiene el polímero inferior más blando por más tiempo. El cordón ablandado puede fluir horizontalmente bajo la presión de la boquilla, por lo que la calculadora aumenta la corrección por encima del punto de referencia de 60 °C.',
  },
  {
    question: '¿Es la pata de elefante lo mismo que la sobreextrusión?',
    answer: 'No. La sobreextrusión afecta muchas capas. La pata de elefante se concentra en la base donde las primeras capas se comprimen y calientan por la cama, aunque la sobreextrusión puede empeorarla.',
  },
];

const howToData = [
  { name: 'Imprimir un cupón', text: 'Use el mismo material, temperatura de cama, altura de primera capa y ajustes de primera capa que en la impresión de producción.' },
  { name: 'Medir el error base', text: 'Reste la dimensión estable de la pared superior de la dimensión base más ancha.' },
  { name: 'Ingresar presión y temperatura', text: 'Proporcione la altura de la primera capa, el espacio de presión Z efectivo y la temperatura de la cama.' },
  { name: 'Aplicar la corrección', text: 'Use el valor de expansión horizontal negativo en el laminador o modele el chaflán de 45 grados sugerido.' },
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

export const content: ToolLocaleContent<ElephantFootCompensationCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    controlsAriaLabel: 'Entradas de compensación de pata de elefante',
    resultsAriaLabel: 'Resultados de corrección de pata de elefante',
    canvasAriaLabel: 'Visualización de sección transversal del perfil de pata de elefante actual y corregido',
    unitSystemLabel: 'Unidades',
    metricLabel: 'Métrico',
    imperialLabel: 'Imperial',
    materialLabel: 'Preajuste de material',
    plaLabel: 'PLA',
    petgLabel: 'PETG',
    absAsaLabel: 'ABS/ASA',
    customMaterialLabel: 'Personalizado',
    measuredErrorLabel: 'Error base medido',
    layerHeightLabel: 'Altura de primera capa',
    zPressureLabel: 'Espacio de presión Z-offset',
    bedTemperatureLabel: 'Temperatura de cama',
    targetToleranceLabel: 'Tolerancia objetivo',
    expansionLabel: 'Expansión del laminador',
    chamferLabel: 'Chaflán CAD',
    thermalFactorLabel: 'Factor térmico',
    verdictLabel: 'Objetivo de precisión dimensional',
    currentProfileLabel: 'Pata de elefante medida',
    correctedProfileLabel: 'Perfil corregido',
    slicerCommandLabel: 'Comando del laminador',
    cadCommandLabel: 'Comando CAD',
    copyButton: 'Copiar informe de corrección',
    copiedButton: 'Copiado',
    copyTemplate: 'Compensación de pata de elefante: expansión horizontal del laminador {expansion}, chaflán CAD {chamfer} a 45°, factor térmico {phi}, veredicto: {verdict}.',
    slicerCommandTemplate: 'Expansión horizontal: {expansion} {unit}',
    cadCommandTemplate: '45° x {chamfer} {unit}',
    correctionCanvasTemplate: 'E_corr {correction} {unit}',
    pressureCanvasTemplate: 'phi_temp {phi} | relación de presión Z {ratio}',
    optimalVerdict: '< 0.05 mm de tolerancia: corrección opcional, verificar con calibrador.',
    watchVerdict: 'Desviación controlada: aplicar compensación del laminador y reimprimir cupón.',
    severeVerdict: 'Dispersión base severa: corregir la presión Z antes de confiar en el offset del laminador.',
    mmUnit: 'mm',
    inchUnit: 'in',
    celsiusUnit: '°C',
    fahrenheitUnit: '°F',
    degreeUnit: '°',
    multiplierUnit: 'x',
  },
  seo: [
    { type: 'title', text: 'Compensación de pata de elefante como problema de precisión dimensional', level: 2 },
    { type: 'paragraph', html: 'La pata de elefante es la expansión hacia afuera de las primeras capas impresas más allá del límite CAD nominal. En un cubo de calibración aparece como un labio base. En piezas de ingeniería se convierte en un error funcional: las colas de milano se atascan, los agujeros cerca de la plataforma de construcción se cierran, los cierres a presión pierden holgura, las placas de acoplamiento se balancean en un borde elevado y los bloques calibradores ya no asientan al ras. Por lo tanto, una <strong>calculadora de compensación de pata de elefante</strong> útil no puede tratarse como un ajuste cosmético de flujo. Debe convertir un error dimensional medido en un valor de expansión horizontal negativo y, cuando sea posible, en un chaflán CAD que elimine la ruta de material comprimido del diseño mismo.' },
    { type: 'paragraph', html: 'Esta calculadora modela la corrección a partir de tres entradas físicas que afectan fuertemente el defecto: error base medido, altura de la primera capa y el espacio de presión Z efectivo. La relación central es <code>E_corr = Error x (AlturaCapa / PresionZOffset) x phi_temp</code>. El multiplicador de temperatura <code>phi_temp</code> aumenta por encima de una cama de referencia de 60 °C porque una base más caliente mantiene el polímero más blando por más tiempo y permite que la carga de la boquilla empuje el material hacia los lados. El resultado se reporta como expansión horizontal negativa para el laminador y como profundidad de chaflán de 45 grados para CAD.' },
    { type: 'stats', columns: 3, items: [
      { value: '0.01 mm', label: 'resolución de entrada para ajuste dimensional' },
      { value: '45°', label: 'ángulo de chaflán CAD predeterminado' },
      { value: 'phi_temp', label: 'multiplicador de flujo por temperatura de cama' },
    ] },
    { type: 'diagnostic', variant: 'info', title: 'Mida el error, no el labio visual', html: 'Imprima un cupón cuadrado o rectangular, mida la pared nominal o la dimensión exterior por encima de la base, luego mida la misma dimensión en las primeras capas. La diferencia entre esas dos mediciones es el error de pata de elefante. No estime a partir de una fotografía; la herramienta está diseñada para datos de calibrador.' },

    { type: 'title', text: 'Por qué ocurre la pata de elefante: presión de boquilla, calor y flujo de plástico', level: 2 },
    { type: 'paragraph', html: 'La primera capa se comprime intencionalmente para que el filamento humedezca la cama y se adhiera. Esa compresión convierte la boquilla en un pequeño aplicador de presión. El polímero fundido sale de la boquilla, se aprieta entre la boquilla y la superficie de construcción, y debe ocupar el volumen disponible. Cuando el espacio Z es demasiado pequeño, no hay suficiente espacio vertical para el cordón de extrusión comandado, por lo que el material fluye lateralmente. La base se ensancha incluso cuando el resto de la impresión es dimensionalmente precisa.' },
    { type: 'paragraph', html: 'La temperatura de la cama cambia la severidad. El PLA a 60 °C puede estar cerca de su región de transición vítrea, el PETG a 75 °C permanece pegajoso y complaciente, y el ABS o ASA en una cama de 100 °C se mantiene cálido en las primeras capas. Una cama más caliente no solo mejora la adhesión; también retrasa la solidificación en la base. Es por eso que esta calculadora aplica un factor térmico: <strong>1.00 a 60 °C, más 0.05 por cada 5 °C adicionales</strong>. Una cama de PETG a 75 °C usa por lo tanto un factor de aproximadamente 1.15 antes del recorte.' },
    { type: 'comparative', columns: 3, items: [
      { title: 'Dominado por presión Z', description: 'Un espacio de boquilla muy bajo aplasta el cordón y empuja el plástico hacia afuera. El error es más agudo en la primera capa y a menudo mejora después de la corrección del Z-offset.', points: ['Primera línea ancha', 'Superficie aplastada brillante', 'Borde como ala'] },
      { title: 'Dominado térmicamente', description: 'La base permanece blanda porque el calor de la cama o cámara es alto. El labio puede extenderse a través de varias capas incluso con una primera capa razonable.', highlight: true, points: ['Borde inferior redondeado', 'Común en PETG o ABS', 'Enfriamiento lento'] },
      { title: 'Dominado por flujo', description: 'El multiplicador de extrusión, el diámetro del filamento o el flujo de la primera capa es demasiado alto. Toda la región inferior puede verse sobrellenada, no solo el perímetro.', points: ['Parte superior rugosa de la primera capa', 'Líneas demasiado anchas', 'Espacios cerrados'] },
    ] },
    { type: 'tip', title: 'Use el Z offset como entrada, no como suposición', html: 'El espacio de presión Z es la holgura efectiva que obliga al cordón a entrar en la cama. Si su laminador reporta una primera capa de 0.20 mm pero la compresión real se comporta como 0.10 mm, use el espacio de presión más pequeño. Eso hace que la compensación calculada sea mayor, lo que coincide con la física de un cordón más comprimido.' },

    { type: 'title', text: 'Cómo medir la expansión base para la calculadora', level: 2 },
    { type: 'paragraph', html: 'Use un cupón de prueba simple con una dimensión exterior conocida, como 20.00 mm, 30.00 mm o 40.00 mm. El cupón debe tener lados verticales rectos, al menos 8 a 12 mm de altura y sin chaflán en la primera prueba. Mida la dimensión del cuerpo varios milímetros por encima de la cama donde la pata de elefante ha desaparecido. Luego mida la misma dimensión en la parte más ancha de la base. La diferencia es el error exterior total para ese eje.' },
    { type: 'paragraph', html: 'Si un cubo de 20.00 mm mide 20.02 mm en el medio pero 20.24 mm en la base, el error base relativo al cuerpo estable es de 0.22 mm. Ingrese 0.22 mm en lugar de la diferencia del nominal. Esto elimina la contracción no relacionada, el error de pasos XY o el sesgo de ancho de línea del laminador del cálculo de la pata de elefante. Está aislando la deformación de la base, no calibrando toda la impresora.' },
    { type: 'list', items: [
      'Mida después de que la pieza se haya enfriado a temperatura ambiente, especialmente para ABS, ASA, PETG y piezas grandes de PLA.',
      'Use presión ligera del calibrador; apretar una base ablandada o texturizada puede ocultar el verdadero labio.',
      'Tome mediciones en los lados X e Y porque el movimiento de la cama, la dirección del ventilador y la inclinación del pórtico pueden hacer que el defecto sea asimétrico.',
      'Ignore el material del brim y el skirt. Retire el brim limpiamente antes de medir la pared real de la pieza.',
      'Reimprima el mismo cupón después de aplicar la compensación para que la siguiente medición sea comparable.',
    ] },
    { type: 'table', headers: ['Observación', 'Causa probable', 'Mejor primera acción'], rows: [
      ['La base es más ancha pero la pared superior es precisa', 'Pata de elefante por presión de primera capa', 'Use esta calculadora y aplique expansión horizontal negativa.'],
      ['Cada capa está sobredimensionada', 'Escala XY, multiplicador de extrusión o error de diámetro de filamento', 'Calibre el flujo y XY antes de la compensación de pata de elefante.'],
      ['Solo las esquinas se abultan', 'Avan ce de presión, velocidad o problema de enfriamiento', 'Ajuste el avance de presión o la velocidad en esquinas.'],
      ['La cara inferior es rugosa y translúcida', 'Boquilla demasiado cerca o flujo de primera capa demasiado alto', 'Eleve el Z-offset o reduzca el flujo de primera capa antes de compensar.'],
    ] },

    { type: 'title', text: 'Expansión horizontal negativa vs chaflán CAD', level: 2 },
    { type: 'paragraph', html: 'La expansión horizontal del laminador desplaza el límite del polígono hacia adentro o hacia afuera antes de la generación de trayectorias. Para la corrección de la pata de elefante, el ajuste es normalmente negativo: si la base mide 0.20 mm demasiado ancha, el laminador puede necesitar un valor cercano a -0.20 mm, modificado aquí por la altura de capa, la presión Z y la temperatura de la cama. Esto es rápido, reversible y útil para lotes donde cada pieza comparte una deformación similar de la primera capa.' },
    { type: 'paragraph', html: 'Un chaflán CAD elimina material del propio modelo. La calculadora reporta una profundidad de chaflán de 45 grados como <code>Error x sqrt(2)</code>, que corresponde a una cara diagonal que elimina el labio base horizontal. Los chaflanes CAD son a menudo mejores para interfaces críticas porque preservan las dimensiones previstas de la pared superior mientras le dan a la primera capa una ruta de alivio controlada. También son más portables entre laminadores porque la geometría lleva la compensación.' },
    { type: 'proscons', title: 'Elección de un método de corrección', items: [
      { pro: 'La expansión horizontal negativa se puede cambiar rápidamente por perfil de material o impresora.', con: 'Puede afectar texto pequeño, paredes delgadas, pasadores y agujeros si se aplica globalmente.' },
      { pro: 'Los chaflanes CAD son explícitos y robustos para superficies de acoplamiento cerca de la plataforma de construcción.', con: 'Requieren ediciones del modelo y pueden no ser convenientes para piezas descargadas.' },
      { pro: 'Combinar un offset de laminador suave con un pequeño chaflán puede controlar bases severas de PETG o ABS.', con: 'Apilar correcciones sin volver a medir puede subdimensionar la pieza.' },
    ] },
    { type: 'message', title: 'No compense a ciegas', html: 'Si la primera capa está visiblemente sobredirecta, arregle el Z-offset primero. La compensación debe eliminar la expansión base predecible restante, no ocultar una boquilla que está arando a través de la primera capa.' },

    { type: 'title', text: 'Compensación sugerida por material', level: 2 },
    { type: 'paragraph', html: 'El comportamiento del material importa porque la temperatura de adhesión, la transición vítrea, la tasa de enfriamiento y la viscosidad afectan hasta dónde puede fluir el cordón inferior antes de congelarse. El PLA a menudo responde bien a una pequeña expansión horizontal negativa después de que el Z-offset es razonable. El PETG puede necesitar una corrección mayor porque se imprime comúnmente más caliente en la cama y con una primera capa ajustada para una adhesión fuerte. El ABS y ASA pueden requerir alivio CAD en piezas funcionales porque la cama caliente y la cámara mantienen la base blanda por más tiempo.' },
    { type: 'table', headers: ['Material', 'Rango típico de cama', 'Objetivo de tolerancia inicial', 'Notas de compensación'], rows: [
      ['PLA', '55-65 °C', '< 0.05 mm', 'Comience con un Z-offset preciso, luego use una pequeña expansión horizontal negativa. Un chaflán es útil para bases de ajuste a presión.'],
      ['PETG', '70-85 °C', '< 0.07 mm', 'Espere un factor térmico más alto. Evite el flujo excesivo de la primera capa porque el PETG puede formar un labio redondeado pegajoso.'],
      ['ABS/ASA', '90-110 °C', '< 0.08 mm', 'Use chaflanes CAD para piezas de producción. El calor de la cámara puede mantener las primeras capas complacientes.'],
      ['TPU', '40-60 °C', 'específico de la aplicación', 'El filamento flexible puede deformarse bajo los calibradores. Mida suavemente y prefiera el alivio geométrico sobre los offsets globales agresivos.'],
    ] },
    { type: 'card', title: 'Por qué la tabla es un punto de partida', html: 'Una lámina de PEI texturizada, cama de vidrio liso, diámetro de boquilla, ancho de línea, velocidad de la primera capa, retardo de enfriamiento, temperatura de la cámara y marca de filamento pueden cambiar el error medido. La tabla establece expectativas; la calculadora debe ser impulsada por su cupón medido.' },
    { type: 'summary', title: 'Prioridades de ajuste de material', items: [
      'PLA: corrija el Z-offset primero, luego use una pequeña compensación del laminador.',
      'PETG: vigile la temperatura de la cama y el flujo de la primera capa porque la base se mantiene móvil.',
      'ABS/ASA: prefiera chaflanes CAD en interfaces de producción y verifique después del calentamiento de la cámara.',
      'Materiales flexibles: el método de medición importa porque la base puede comprimirse bajo las mordazas del calibrador.',
    ] },

    { type: 'title', text: 'Configuraciones del laminador que interactúan con la compensación de pata de elefante', level: 2 },
    { type: 'paragraph', html: 'Diferentes laminadores exponen la configuración bajo nombres como Horizontal Expansion, Initial Layer Horizontal Expansion, Elephant Foot Compensation, XY Compensation o expansión de la primera capa. Una expansión horizontal global cambia todo el contorno de la pieza. Una configuración solo de la primera capa afecta solo las capas inferiores y suele ser más segura para la precisión dimensional. Cuando un laminador admite ambas, use la compensación de la primera capa para la pata de elefante y reserve la compensación XY global para errores de tamaño calibrados que persisten en toda la altura.' },
    { type: 'paragraph', html: 'El ancho de línea y el flujo de la primera capa también interactúan con la corrección. Una línea de primera capa muy ancha puede mejorar la adhesión a la cama pero aumenta el volumen que debe caber debajo de la boquilla. Si el cordón no tiene a dónde ir verticalmente, se extiende horizontalmente. Reducir el flujo de la primera capa del 105 por ciento al 100 por ciento, aumentar el Z-offset en 0.02 mm o reducir la temperatura de la cama en 5 °C puede reducir la expansión negativa requerida de manera más limpia que aplicar un gran offset.' },
    { type: 'glossary', items: [
      { term: 'Expansión horizontal', definition: 'Un offset del laminador que expande o contrae los contornos del modelo antes de generar las trayectorias.' },
      { term: 'Expansión de capa inicial', definition: 'Una variante que se aplica solo a la primera capa o capas inferiores, lo que la hace más adecuada para la pata de elefante.' },
      { term: 'Espacio de presión Z', definition: 'El espacio efectivo boquilla-cama que determina cuánto se comprime el primer cordón.' },
      { term: 'Factor térmico', definition: 'Un multiplicador utilizado aquí para representar el mayor flujo lateral cuando la cama está más caliente que 60 °C.' },
      { term: 'Chaflán CAD', definition: 'Un borde biselado modelado que le da al material comprimido de la primera capa una zona de alivio geométrico.' },
    ] },
    { type: 'diagnostic', variant: 'warning', title: 'Una gran expansión negativa puede romper características pequeñas', html: 'Un valor como -0.35 mm puede arreglar la base exterior de una caja grande pero borrar letras en relieve diminutas, reducir nervaduras estrechas y cambiar el diámetro de postes pequeños. Cuando la corrección requerida es grande, trátelo como una señal para revisar el Z-offset, el flujo de la primera capa o la temperatura de la cama.' },

    { type: 'title', text: 'Flujo de trabajo para una corrección precisa de pata de elefante', level: 2 },
    { type: 'list', items: [
      'Imprima un cupón de calibración simple con el mismo material, temperatura de cama, altura de primera capa y velocidad de primera capa utilizados para la pieza real.',
      'Mida la dimensión estable del cuerpo por encima de la base, luego mida la dimensión base más ancha y reste las dos.',
      'Ingrese el error medido, la altura de la primera capa, el espacio de presión Z efectivo, la temperatura de la cama y la tolerancia objetivo.',
      'Aplique la expansión horizontal negativa reportada en el laminador, o agregue el chaflán de 45 grados reportado en CAD.',
      'Reimprima el cupón y mida nuevamente después del enfriamiento.',
      'Si el error residual permanece por encima de la tolerancia, ajuste en medios pasos en lugar de saltar a un offset global extremo.',
      'Guarde la configuración en un perfil de material solo después de que dos cupones reproducibles coincidan dentro de su objetivo de tolerancia.',
    ] },
    { type: 'tip', title: 'Use el mismo estado de cama que en producción', html: 'Una primera impresión en frío sobre una cama gruesa puede comportarse de manera diferente a la quinta impresión después de que la cama se haya calentado durante 30 minutos. Si el trabajo de producción se ejecuta después del calentamiento, calibre el cupón también después del calentamiento.' },
    { type: 'diagnostic', variant: 'success', title: 'Buen objetivo de corrección', html: 'Para trabajos dimensionales FDM prácticos, una desviación base por debajo de 0.05 mm suele ser lo suficientemente pequeña como para que el ajuste de ensamblaje esté controlado por el diseño de holgura normal en lugar del labio de pata de elefante. Objetivos más estrictos requieren máquinas rígidas, filamento estable y técnica de medición repetible.' },
    { type: 'summary', title: 'Conclusiones clave', items: [
      'La pata de elefante es un problema de deformación por presión y temperatura, no solo un defecto visual.',
      'Use el error base medido relativo a la pared estable, no solo el tamaño CAD nominal.',
      'La expansión horizontal negativa es la corrección del laminador; un chaflán de 45 grados es la corrección CAD.',
      'La temperatura de la cama aumenta el factor térmico porque la base permanece más blanda y fluye lateralmente por más tiempo.',
      'Los valores de compensación severos deberían desencadenar verificaciones de Z y flujo de la primera capa antes del uso en producción.',
    ] },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
