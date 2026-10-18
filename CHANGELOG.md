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