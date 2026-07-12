import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { EStepsCalibrationCalculatorUI } from '../ui';

export const content: ToolLocaleContent<EStepsCalibrationCalculatorUI> = {
  slug: 'calculadora-de-calibracion-de-e-steps',
  title: 'Calculadora de Calibración de E steps y Asistente de Diagnóstico del Extrusor',
  description: 'Calcula los E-steps corregidos del extrusor a partir de una prueba de extrusión medida y señala desviaciones superiores al 5 % antes de que oculten un problema mecánico.',
  ui: {
    unitSystemLabel: 'Unidades',
    metricLabel: 'Métrico',
    imperialLabel: 'US',
    inputGroupLabel: 'Prueba de extrusión',
    currentEStepsLabel: 'E-steps actuales',
    requestedLengthLabel: 'Longitud de extrusión solicitada',
    actualLengthLabel: 'Longitud de extrusión medida',
    newEStepsLabel: 'Nuevos E-steps',
    errorLabel: 'Error detectado',
    commandLabel: 'Comando de consola',
    copyCommandLabel: 'Copiar comando M92',
    copiedLabel: 'Copiado',
    normalStatusLabel: 'Rango de calibración',
    criticalStatusLabel: 'Desviación crítica',
    normalMessage: 'La desviación medida está dentro del 5 %. Aplica el valor solo después de confirmar que la ruta del filamento está limpia y repite la prueba una vez.',
    criticalMessage: 'Advertencia crítica: La desviación supera el 5 %. Es probable que haya una falla mecánica: obstrucción, deslizamiento del extrusor o tensión incorrecta del resorte del tensor. Inspecciona el hardware antes de aplicar estos nuevos E-steps.',
    diagnosticTitle: 'Verificaciones mecánicas antes de guardar en firmware',
    diagnosticOne: 'Calienta la boquilla a la temperatura real de impresión y extruye lentamente con el hotend despejado.',
    diagnosticTwo: 'Revisa el engranaje impulsor, la tensión del tensor, las marcas de mordedura en el filamento y la resistencia del carrete antes de confiar en el número.',
    diagnosticThree: 'Repite la prueba de 100 mm después de la limpieza o cambios de tensión; no ajustes el firmware alrededor de un extrusor que patina.',
    referenceTitle: 'Regla de decisión',
    formulaLabel: 'Fórmula',
    formulaText: 'E-steps actuales x solicitado / medido',
    safeBandLabel: 'Error 0-5 %',
    safeBandText: 'Aplicar solo después de una prueba repetible.',
    criticalBandLabel: 'Error > 5 %',
    criticalBandText: 'Inspeccionar obstrucción, deslizamiento, tensión y resistencia primero.',
    repeatTestLabel: 'Después de M92',
    repeatTestText: 'Realiza la misma prueba de extrusión nuevamente antes de guardar.',
    mmUnit: 'mm',
    inchUnit: 'in',
    stepsUnit: 'pasos/mm',
    controlsAriaLabel: 'Entradas de calibración de E-steps',
    resultsAriaLabel: 'Resultados de calibración de E-steps',
  },
  seo: [
    { type: 'title', text: 'Qué mide realmente la calibración de E-steps', level: 2 },
    {
      type: 'paragraph',
      html: 'Los E-steps definen cuántos pasos del motor a pasos envía el firmware del extrusor por un milímetro de movimiento del filamento. En Marlin, el valor generalmente se almacena con <code>M92 E...</code>, mientras que Klipper suele expresar la misma relación física mediante la distancia de rotación. La medición es simple: ordena una longitud de extrusión conocida, mide físicamente cuánto filamento se movió y luego corrige el valor del firmware por la relación entre el movimiento solicitado y el real. La fórmula es <code>nuevos E-steps = E-steps actuales * longitud solicitada / longitud real</code>.',
    },
    {
      type: 'paragraph',
      html: 'La parte peligrosa es la interpretación. Una calculadora puede producir un número a partir de cualquier medición, incluso una mala. Si el extrusor está moliendo el filamento, si la boquilla está parcialmente obstruida o si el resorte del tensor está demasiado flojo, la longitud de extrusión medida será baja. Aumentar los E-steps puede parecer que soluciona la prueba de 100 mm, pero no soluciona el hardware. Fuerza al motor a empujar más fuerte o más tiempo a través de la misma falla, lo que puede hacer que las impresiones reales sean inconsistentes.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '100 mm', label: 'longitud solicitada común para una prueba de extrusor repetible' },
        { value: '5 %', label: 'umbral de diagnóstico donde la inspección del hardware debe ser lo primero' },
        { value: 'M92', label: 'comando de Marlin usado para establecer pasos por unidad' },
        { value: '2 decimales', label: 'precisión de salida usada para el comando del eje E copiado' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'No calibrar alrededor de una falla mecánica',
      html: 'Una desviación superior al 5 % es lo suficientemente grande como para que la impresora pueda estar sub-extruyendo o sobre-extruyendo por una razón que no es matemática de firmware. Inspecciona la ruta del extrusor antes de guardar un nuevo valor con <code>M500</code> o editar una configuración de Klipper.',
    },
    { type: 'title', text: 'Cómo realizar una prueba de extrusión de 100 mm limpia', level: 2 },
    {
      type: 'paragraph',
      html: 'Una prueba confiable de E-steps comienza con una boquilla caliente y una ruta de filamento estable. Calienta el hotend a una temperatura de impresión normal para el filamento, porque la protección de extrusión en frío existe por una razón y porque la contrapresión del plástico fundido cambia la carga en el extrusor. Marca el filamento a una distancia conocida sobre la entrada del extrusor, ordena una extrusión lenta de 100 mm y mide la distancia restante para determinar cuánto filamento se movió realmente.',
    },
    {
      type: 'list',
      items: [
        'Usa una velocidad de extrusión lenta para que el hotend pueda fundir el material sin generar presión anormal.',
        'Haz la marca en el filamento con calibradores o un marcador fino en lugar de estimar a ojo.',
        'Mantén el carrete libre para girar para que la resistencia del carrete no parezca un error de E-steps.',
        'Realiza la prueba con el mismo diámetro y tipo de filamento que usas normalmente.',
        'Repite la medición después de cambiar la tensión del engranaje impulsor, el estado de la boquilla o la temperatura del hotend.',
      ],
    },
    {
      type: 'table',
      headers: ['Resultado medido', 'Error', 'Primera interpretación', 'Mejor siguiente acción'],
      rows: [
        ['98 a 102 mm', '0 a 2 %', 'Pequeña dispersión normal de medición', 'Repetir una vez y promediar si es necesario'],
        ['95 a 105 mm', '2 a 5 %', 'La corrección de firmware puede ser razonable', 'Verificar ruta, luego aplicar valor calculado'],
        ['Menos de 95 mm', 'Superior al 5 %', 'Probable deslizamiento, obstrucción, resistencia o problema de presión', 'Inspeccionar mecánica antes del firmware'],
        ['Más de 105 mm', 'Superior al 5 %', 'Valor anterior incorrecto o problema de configuración de medición', 'Verificar unidades y repetir prueba'],
      ],
    },
    {
      type: 'tip',
      title: 'Usa una variable limpia',
      html: 'No cambies la tasa de flujo, el multiplicador de extrusión, el pressure advance y los E-steps al mismo tiempo. Los E-steps deben describir el movimiento del motor al filamento, mientras que el flujo y el multiplicador de extrusión ajustan la salida de material del slicer para un filamento y perfil de impresión específicos.',
    },
    { type: 'title', text: 'Por qué importa la advertencia del 5 %', level: 2 },
    {
      type: 'paragraph',
      html: 'Un error de extrusión del 5 % significa que un comando de 100 mm produjo menos de 95 mm o más de 105 mm de movimiento real. Eso no es un pequeño problema de redondeo. Con un filamento típico de 1,75 mm, 5 mm de alimentación faltante en una prueba corta representan un déficit de material visible. En impresiones reales puede mostrarse como paredes débiles, superficies superiores dispersas, primeras capas inconsistentes y baja confiabilidad dimensional. Más importante aún, la sub-extrusión a esta escala suele tener una causa física.',
    },
    {
      type: 'paragraph',
      html: 'El asistente de diagnóstico marca ese umbral porque la corrección del firmware puede ocultar síntomas. Si el engranaje estriado está lleno de polvo de plástico, el motor puede saltar solo durante movimientos rápidos. Si la boquilla está parcialmente obstruida, una prueba lenta puede pasar después de una corrección grande, pero la impresora aún fallará durante el relleno de alto flujo. Si la tensión del tensor es demasiado alta, el filamento puede deformarse y atascarse corriente abajo; si es demasiado baja, puede patinar. La reparación correcta es mecánica, no un número de eje E más grande.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Error de calibración saludable',
          description: 'Pequeña discrepancia causada por el valor anterior del firmware, tolerancia del diámetro del engranaje o ruido de medición.',
          points: ['Generalmente dentro del 5 %', 'Repetible en dos pruebas', 'Sin chasquidos ni polvo de filamento', 'La corrección sigue siendo modesta'],
        },
        {
          title: 'Error de extrusión por falla',
          description: 'Gran discrepancia causada por el extrusor que no mueve el filamento como se ordenó.',
          highlight: true,
          points: ['Superior al 5 %', 'Cambia entre pruebas repetidas', 'Chasquidos, rectificado o marcas de mordedura', 'A menudo peor a mayor velocidad'],
        },
      ],
    },
    {
      type: 'summary',
      title: 'Antes de aceptar una corrección crítica',
      items: [
        'Inspecciona la boquilla en busca de obstrucción parcial y límpiala o reemplázala si la extrusión se ondula o pulsa.',
        'Cepilla los dientes del engranaje impulsor y elimina el polvo de filamento.',
        'Ajusta la tensión del tensor para que el engranaje agarre sin aplanar el filamento.',
        'Verifica la resistencia del carrete, el asiento del tubo Bowden y la fricción de la ruta del filamento.',
        'Realiza la misma medición nuevamente antes de cambiar el firmware.',
      ],
    },
    { type: 'title', text: 'Marlin M92, M500 y distancia de rotación de Klipper', level: 2 },
    {
      type: 'paragraph',
      html: 'En el firmware estilo Marlin, <code>M92 E...</code> establece los pasos del extrusor por milímetro para la sesión actual. Muchas impresoras necesitan <code>M500</code> después para guardar el valor en la EEPROM, de lo contrario, la configuración puede desaparecer después de reiniciar. Algunas versiones de firmware bloqueadas o modificadas por el proveedor pueden ignorar los guardados en EEPROM o requerir cambiar la configuración de la fuente del firmware. Siempre verifica el valor después de reiniciar con <code>M503</code> si la impresora lo soporta.',
    },
    {
      type: 'paragraph',
      html: 'Klipper comúnmente usa <code>rotation_distance</code> en lugar de E-steps en printer.cfg. La idea de calibración física es la misma, pero la dirección numérica está invertida porque la distancia de rotación describe cuánto filamento se mueve por rotación del motor, no cuántos pasos se necesitan por milímetro. Esta herramienta genera un comando <code>M92</code> porque está diseñada para ser directamente utilizable en consolas Marlin e interfaces de firmware compatibles. Los usuarios de Klipper aún pueden usar el error medido como señal de diagnóstico antes de recalcular la distancia de rotación.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'E-steps', definition: 'El número de pasos del motor que el firmware envía para mover un milímetro de filamento en el eje del extrusor.' },
        { term: 'M92', definition: 'Un comando G-code usado por el firmware Marlin para establecer pasos por unidad para uno o más ejes.' },
        { term: 'M500', definition: 'Un comando Marlin que guarda la configuración actual en la EEPROM cuando la impresora lo soporta.' },
        { term: 'Distancia de rotación', definition: 'Configuración de Klipper que representa el avance del filamento por rotación completa del motor.' },
        { term: 'Multiplicador de extrusión', definition: 'Escalado de flujo a nivel de slicer para un perfil de material, separado de los E-steps de la máquina.' },
      ],
    },
    {
      type: 'card',
      title: 'Flujo de trabajo del comando de consola',
      html: 'Envía el comando <code>M92 E...</code> copiado, repite la prueba de extrusión y solo guarda el valor después de que la longitud medida sea repetible. Un solo número bueno es evidencia más débil que dos mediciones consistentes.',
    },
    { type: 'title', text: 'Problemas mecánicos que parecen E-steps incorrectos', level: 2 },
    {
      type: 'paragraph',
      html: 'Una boquilla parcialmente obstruida es la trampa más común. El motor del extrusor puede girar la cantidad correcta mientras la presión se acumula en el hotend, haciendo que el engranaje impulsor muerda el filamento en lugar de avanzarlo. La longitud de extrusión medida se vuelve corta, la fórmula aumenta los E-steps y la siguiente impresión puede seguir sub-extruyendo porque la obstrucción de la boquilla permanece. Si el filamento extruido se ondula bruscamente, pulsa, sale delgado o cambia de dirección al salir de la boquilla, limpia el hotend antes de calibrar.',
    },
    {
      type: 'paragraph',
      html: 'El deslizamiento del extrusor puede provenir de errores de tensión opuestos. Demasiada poca fuerza del resorte permite que el engranaje gire contra el filamento. Demasiada fuerza del resorte puede ovalizar el filamento blando, aumentar la fricción en un tubo Bowden o crear marcas de mordedura profundas que se atascan en la entrada del heat break. El filamento flexible es especialmente sensible. El umbral de diagnóstico existe para hacer que el usuario se detenga e inspeccione estas condiciones antes de convertir un problema de tracción en un número de firmware.',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Síntomas críticos durante la prueba',
      html: 'Detente e inspecciona el hardware si el extrusor chasquea, aparece polvo de filamento, el motor se calienta inusualmente, la extrusión sale en pulsos o la longitud medida cambia en varios milímetros entre pruebas repetidas de 100 mm.',
    },
    {
      type: 'proscons',
      title: 'Corregir E steps después de un error grande',
      items: [
        { pro: 'Puede restaurar la alimentación precisa de filamento cuando el valor anterior del firmware era realmente incorrecto.', con: 'Puede ocultar un engranaje impulsor que patina o una boquilla obstruida cuando se usa sin inspección.' },
        { pro: 'Comando simple, fácil de aplicar y repetir.', con: 'Un valor guardado incorrecto afecta todos los perfiles del slicer y todos los materiales.' },
        { pro: 'Útil después de cambiar la relación de transmisión del extrusor o el hardware del motor.', con: 'No es un reemplazo para la calibración de flujo en paredes impresas.' },
      ],
    },
    { type: 'title', text: 'E-steps vs. Calibración de flujo', level: 2 },
    {
      type: 'paragraph',
      html: 'La calibración de E-steps pertenece a la capa de la máquina. Pregunta si el mecanismo del extrusor mueve la longitud solicitada de filamento en bruto. La calibración de flujo pertenece a la capa del perfil de impresión. Pregunta si un filamento, temperatura, boquilla, ancho de línea y estrategia de slicer específicos producen el grosor de pared y la calidad superficial deseados. Mezclar ambos crea perfiles confusos: una impresora puede pasar una prueba de E-steps de 100 mm y aún necesitar un multiplicador de extrusión de 0.96 para una marca de PETG.',
    },
    {
      type: 'paragraph',
      html: 'Calibra los E-steps después de cambiar el hardware del extrusor, los pasos del motor, el microstepping, la relación de transmisión o el diámetro del engranaje impulsor. Calibra el flujo después de cambiar la marca de filamento, el color, el tamaño de la boquilla, la temperatura o el ancho de línea del slicer. Pressure advance, linear advance y retracción son herramientas separadas de control de presión y deben ajustarse después de que el movimiento de extrusión base sea confiable.',
    },
    {
      type: 'table',
      headers: ['Calibración', 'Capa', 'Cambia cuando', 'No lo uses para corregir'],
      rows: [
        ['E-steps', 'Firmware o configuración de máquina', 'Cambia el hardware del extrusor o la configuración del motor', 'Filamento húmedo, obstrucciones de boquilla, flujo del slicer'],
        ['Multiplicador de flujo', 'Perfil de material del slicer', 'Cambia la marca, color, boquilla o temperatura del filamento', 'Relación de transmisión incorrecta o extrusor que patina'],
        ['Pressure advance', 'Dinámica del firmware', 'Cambia la ruta del extrusor, velocidad, aceleración o material', 'Sub-extrusión estática'],
        ['Retracción', 'Comportamiento de desplazamiento del slicer', 'Cambian el hilo, goteo o artefactos de desplazamiento', 'Errores de distancia de alimentación base'],
      ],
    },
    {
      type: 'message',
      title: 'Regla del técnico de soporte',
      html: 'Si un valor de calibración cambia drásticamente, asume que la medición te está hablando sobre la máquina. Inspecciona primero, calcula después, guarda al final.',
    },
    { type: 'title', text: 'Repetibilidad y calidad de medición', level: 2 },
    {
      type: 'paragraph',
      html: 'Un buen resultado de E-steps es repetible. Si una prueba mide 94 mm, la siguiente 99 mm y la siguiente 96 mm, el promedio es menos importante que la dispersión. Resultados variables apuntan a tracción, temperatura, presión o técnica de medición. Antes de guardar un nuevo valor, repite la extrusión al menos dos veces después de cualquier cambio mecánico. Los dos resultados deben estar lo suficientemente cerca para que el nuevo número de firmware no persiga ruido.',
    },
    {
      type: 'tip',
      title: 'Mide por encima del extrusor cuando sea posible',
      html: 'Marcar el filamento antes de que entre al extrusor evita confusiones por el filamento curvado que sale de la boquilla. Mide la distancia desde un punto de referencia fijo hasta la marca antes y después del comando.',
    },
    {
      type: 'summary',
      title: 'Secuencia de calibración confiable',
      items: [
        'Calienta la boquilla y limpia el material viejo.',
        'Marca el filamento con una distancia de referencia precisa.',
        'Extruye 100 mm lentamente y mide el movimiento real.',
        'Usa la calculadora e inspecciona cualquier error superior al 5 %.',
        'Aplica <code>M92 E...</code>, vuelve a probar y guarda solo si es repetible.',
      ],
    },
  ],
  faq: [
    {
      question: '¿Qué fórmula usa esta calculadora de E-steps?',
      answer: 'Usa nuevos E-steps = E-steps actuales * longitud de extrusión solicitada / longitud de extrusión medida.',
    },
    {
      question: '¿Por qué la herramienta advierte sobre error superior al 5 %?',
      answer: 'Una desviación superior al 5 % es lo suficientemente grande como para sugerir un problema mecánico como deslizamiento del extrusor, obstrucción parcial, resistencia del carrete o tensión incorrecta del tensor. Inspecciona el hardware antes de guardar un nuevo valor de firmware.',
    },
    {
      question: '¿Puedo usar el comando M92 en Klipper?',
      answer: 'El comando M92 copiado está diseñado para firmware compatible con Marlin. Klipper usualmente usa rotation_distance, pero el mismo error medido sigue siendo útil para diagnosticar el extrusor.',
    },
    {
      question: '¿Debo guardar el nuevo valor inmediatamente?',
      answer: 'No. Aplícalo temporalmente, repite la prueba de extrusión y guarda solo después de que el movimiento medido sea repetible.',
    },
    {
      question: '¿Es la calibración de E-steps lo mismo que la calibración de flujo?',
      answer: 'No. Los E-steps calibran el movimiento de la máquina. El flujo o multiplicador de extrusión calibra la salida de material del slicer para un filamento y perfil de impresión específicos.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Ingresa los E-steps actuales', text: 'Lee los pasos actuales del extrusor por milímetro desde el firmware o la configuración de la impresora.' },
    { name: 'Realiza una prueba de extrusión', text: 'Ordena una longitud conocida, normalmente 100 mm, con el hotend a temperatura de impresión.' },
    { name: 'Mide el movimiento real', text: 'Ingresa el movimiento del filamento medido físicamente y revisa el error detectado.' },
    { name: 'Inspecciona si es necesario', text: 'Si el error es superior al 5 %, verifica el hardware antes de aplicar el comando M92.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Calculadora de Calibración de E-steps y Asistente de Diagnóstico del Extrusor',
      description: 'Calcula los E-steps corregidos del extrusor de una impresora 3D y señala desviaciones grandes con riesgo mecánico.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Qué fórmula usa esta calculadora de E-steps?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Usa nuevos E-steps = E-steps actuales * longitud de extrusión solicitada / longitud de extrusión medida.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Cómo calibrar los E-steps del extrusor de una impresora 3D',
      step: [
        { '@type': 'HowToStep', text: 'Ingresa el valor actual de E-steps.' },
        { '@type': 'HowToStep', text: 'Ordena una longitud de extrusión conocida, generalmente 100 mm.' },
        { '@type': 'HowToStep', text: 'Mide el movimiento real del filamento y calcula la corrección.' },
        { '@type': 'HowToStep', text: 'Inspecciona primero el hardware si el error detectado es superior al 5 %.' },
      ],
    },
  ],
};
