# Registro de uso de IA (CHANGELOG.md)

## 2026-10-02 · Alcance del MVP y restricciones del proyecto
- **Qué pedí:** Criterios para acotar qué funciones debían entrar en el MVP frente a las que debían quedar fuera, y cómo plantear una restricción ambiental creíble según las pautas de sostenibilidad web (W3C).
- **Qué devolvió:** Una matriz de descarte evaluada con tres preguntas (necesidad de la persona principal, viabilidad temporal y alternativas) y una propuesta de límite de peso en red móvil (menos de 500 KB en carga inicial).
- **Qué conservé:** La exclusión deliberada de sincronizaciones automáticas con brokers y calendarios macroeconómicos complejos, así como la restricción ambiental de carga ligera para conexiones 4G.
- **Qué cambié y por qué:** Descarté las notificaciones motivacionales proactivas que sugería la IA; según la investigación con Marc, las alertas no solicitadas aumentan el agobio y el ruido visual tras una racha negativa.

## 2026-10-06 · Diseño de caminos y bifurcaciones en el User Flow
- **Qué pedí:** Cómo plantear el flujo de registro de sesión contemplando tanto el camino ideal como situaciones de indisciplina u operaciones fuera del plan.
- **Qué devolvió:** Un diagrama con un rombo de decisión que dividía el camino en dos: guardado directo en caso de cumplir el plan o activación de un modo de contención con selección de errores si hubo fallos.
- **Qué conservé:** La bifurcación basada en la disciplina operativa y la aplicación de divulgación progresiva para no sobrecargar el formulario estándar.
- **Qué cambié y por qué:** Eliminé pasos automáticos como la desconexión forzada de la plataforma que proponía el asistente. Preferí que el flujo permitiese al trader etiquetar su fallo rápidamente (p. ej., overtrading) y cerrar la sesión a su propio ritmo sin bloquear la app.

## 2026-10-10 · Estructura de frames, nomenclatura y paridad Desktop / Mobile
- **Qué pedí:** Pautas para estructurar los wireframes en baja fidelidad, definir una convención de nombres limpia para los frames que facilitara la organización del proyecto y resolver las mismas acciones clave en escritorio (1440 px) y móvil (360 px).
- **Qué devolvió:** Una nomenclatura estandarizada por tipo de vista y plataforma (`Modal_Registro_Desktop`, `BottomSheet_Chat_IA_Mobile`, `Popover_Detalle_Dia_Desktop`, etc.) junto a una jerarquía de marcos equivalentes: modales y drawers laterales en escritorio frente a *bottom sheets* anclados abajo en móvil.
- **Qué conservé:** El sistema de nombres unificado para mantener la paridad exacta entre las capas de Figma y los nodos del sitemap en FigJam, así como los *bottom sheets* de 360 px con botones táctiles de 48 px para facilitar el uso a una mano (Ley de Fitts).
- **Qué cambié y por qué:** Para el detalle del día en el calendario de escritorio, sustituí la propuesta de una pantalla completa por un popover manual adyacente a la celda seleccionada, permitiendo consultar la jornada sin tapar el balance mensual.

## 2026-10-14 · Integración del Copiloto IA y ajuste de componentes
- **Qué pedí:** Cómo evitar la «ceguera de widget» de la burbuja flotante de IA, cómo maquetar la tarjeta semanal de insights y cómo resolver los problemas de Auto Layout al anclar el botón flotante.
- **Qué devolvió:** La creación de una tarjeta de resumen a 12 columnas (`Weekly Debrief`), la técnica de posición absoluta con constraints (Right/Bottom) y el marco circular nativo con Auto Layout para fijar el texto interior.
- **Qué conservé:** La tarjeta semanal como gancho contextual para abrir el drawer y la estructura técnica del botón flotante para que no se descolgara el texto al editar el canvas.
- **Qué cambié y por qué:** Reduje los textos y datos de la tarjeta a tres métricas esenciales (sesiones, infracciones y win rate) para no saturar al usuario con gráficos densos antes de que decida interactuar con la IA.

## 2026-10-18 · Jerarquía del Sitemap y clasificación de Overlays
- **Qué pedí:** Cómo representar en el sitemap de FigJam un conjunto de interfaces donde casi todas las pantallas secundarias son ventanas emergentes sobre el dashboard.
- **Qué devolvió:** Un árbol jerárquico plano con la nomenclatura técnica de cada capa de Figma, diferenciando páginas completas de capas superpuestas (*overlays*).
- **Qué conservé:** La correspondencia exacta de nombres entre las cajas del sitemap y los frames de Figma (`Modal_Registro_Desktop`, `BottomSheet_Chat_IA_Mobile`, etc.).
- **Qué cambié y por qué:** Clasifiqué explícitamente "Histórico" con la etiqueta de Fase 2 (fuera de MVP), dejando visible que la arquitectura está pensada para ser escalable sin comprometer la entrega de la Órbita 1.

## 2026-10-21 · Refactorización estructural con Google Stitch y wireframes en escala de grises

- **Qué pedí:** Criterios para contrastar la composición estructural de los wireframes utilizando Google Stitch como referencia generativa, buscando mejorar la jerarquía visual de las tarjetas de riesgo y la accesibilidad del botón principal.
- **Qué devolvió:** Una propuesta de layout completo con cuadrículas automáticas densas, botones de acción distribuidos en distintas áreas y estilos de interfaz cerrados con fondos oscuros predeterminados.
- **Qué conservé:** La distribución modular asimétrica (*Bento UI*) y la decisión de reubicar el botón de acción principal (`Registrar Sesión +`) en la cabecera superior derecha para despejar el área analítica.
- **Qué cambié y por qué:** Descarté la importación directa de los marcos generados por Stitch; las propuestas automáticas resultaban rígidas y carecían de semántica para traders. Redibujé manualmente toda la estructura en Figma en estricta escala de grises (*grayscale*) para validar márgenes, jerarquías de lectura y Auto Layout antes de introducir color.

## 2026-10-30 · Componentización de celdas, Instance Swap y control disciplinar

- **Qué pedí:** Cómo parametrizar el componente de celda del calendario (`day_cell`), cómo normalizar el botón de icono para reutilizarlo en cierre y envío, y cómo plantear el selector de cumplimiento del plan.
- **Qué devolvió:** Variantes independientes con vectores manuales pegados dentro de cada botón y un control segmentado con fondos sólidos primarios.
- **Qué conservé:** Las propiedades booleanas (`HasTrade`) y los estados (`Default`, `Hover`, `Selected`) en `day_cell`, así como el borde discontinuo (*dashed stroke*) en hover para denotar interactividad.
- **Qué cambié y por qué:** En `IconButton`, sustituí los vectores estáticos por una propiedad de intercambio de instancia (**Instance Swap**) confinada a `24 × 24 px`, creando las variantes `Ghost` (para cerrar modales) y `Filled` (para enviar mensajes). En el `SegmentedControl`, sustituí los bloques sólidos por fondos suaves tintados (`surface-success`, `surface-warning`, `surface-error`) con bordes acentuados; esto evitó que el selector compitiera con el botón inferior `Guardar Sesión`, devolviendo la jerarquía a la acción principal.

## 2026-11-03 · Resolución del flujo de prototipado e interacciones con Overlays

- **Qué pedí:** Cómo articular las interacciones para que el usuario pudiera inspeccionar una sesión registrada en el calendario y transicionar hacia la edición del formulario sin perder el contexto.
- **Qué devolvió:** Encadenar dos acciones de `Open overlay` sucesivas (del día al popover y del botón "Editar" al modal de registro).
- **Qué conservé:** La bifurcación del flujo: clic en celda vacía abre registro directo; clic en celda con operativa abre popover de detalle adyacente.
- **Qué cambié y por qué:** El doble `Open overlay` apilaba dos capas translúcidas de fondo oscuro, provocando parpadeos y bloqueos al cerrar. Sustituí la acción de edición por **`Swap overlay`** centrado con telón al 50%. De este modo, el popover se reemplaza limpiamente por el modal en el mismo nivel de profundidad sin generar artefactos visuales.

## 2026-11-06 · Depuración de herencia en Modo Oscuro y cierre de la gráfica de Equity

- **Qué pedí:** Diagnóstico de por qué ciertas capas no mutaban al conmutar a Modo Oscuro y cómo resolver el bloque pendiente de rendimiento acumulado.
- **Qué devolvió:** Duplicar marcos completos para crear una versión separada en modo oscuro y mantener un cuadro con cruz diagonal como wireframe provisional de la gráfica.
- **Qué conservé:** La auditoría de capas para detectar estilos fijos en blanco (`#FFFFFF`) en la barra de navegación y el forzado de `color/on-primary` en el texto de la celda seleccionada.
- **Qué cambié y por qué:** Rechacé la duplicación de pantallas; resolví la fuga restableciendo la propiedad de apariencia del contenedor del Copiloto a **`Auto`**, recuperando la herencia nativa de tokens desde el marco raíz. Asimismo, eliminé el marcador de wireframe y tracé la curva de Equity con pluma vectorial en `color/primary` junto a los 4 ratios analíticos inferiores, entregando una interfaz terminada en alta fidelidad.

## 2026-11-08 · Adaptación responsive a Mobile (390 px) y ergonomía táctil

- **Qué pedí:** Criterios para comprimir el dashboard y los modales de escritorio (1440 px) a un ancho de smartphone de 390 px sin perder capacidad analítica.
- **Qué devolvió:** Una reducción proporcional lineal de todos los tamaños de fuente (incluyendo textos a 11 px) y el escalado directo de los modales flotantes centrados.
- **Qué conservé:** La reorganización en columna única con scroll vertical y la disposición de las tarjetas métricas superiores en carrusel horizontal accesible.
- **Qué cambié y por qué:** Reducir textos a 11 px rompía la legibilidad y forzaba zoom automático en navegadores móviles. Mantuve el cuerpo de lectura en 14 px y reduje únicamente el tamaño de las cifras principales de 32 a 26 px. Descarté los modales flotantes y los transformé en **Bottom Sheets anclados abajo** (`20, 20, 0, 0`) con tirador (*drag handle: 36 × 4 px*), unificando el registro y el acceso al chat en una barra fija inferior con dianas táctiles de **48 px** adaptadas a la Ley de Fitts para uso con el pulgar.