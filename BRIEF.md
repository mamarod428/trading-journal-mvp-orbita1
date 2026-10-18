# Brief de Proyecto: Trading Journal & AI Copilot

## 1. El Problema (Respaldado por datos)
Creo que los traders minoristas y gestores de cuentas de fondeo bajo presión (contexto) necesitan registrar su jornada de forma inmediata y conocer su margen de riesgo restante (objetivo), pero abandonan el registro debido a la fricción de las plataformas tradicionales llenas de tablas densas, gráficos que consumen ancho de banda y alertas visuales en rojo que generan rechazo psicológico y detonan el "revenge trading" (dificultad). 
*Basado en las entrevistas a usuarios, donde se constató el abandono del journal tras rachas perdedoras por aversión al rojo y fatiga visual.*

## 2. Alcance del MVP
La primera versión de la aplicación incluirá estrictamente:
*   **Dashboard de Riesgo (Desktop/Mobile):** Visualización instantánea del margen de drawdown restante.
*   **Registro Rápido con Divulgación Progresiva:** Formulario donde los campos de error/infracción solo aparecen si el usuario marca que NO cumplió su plan.
*   **Asistente IA (Copiloto):** Panel lateral/inferior para contención emocional en caliente y una tarjeta de diagnóstico semanal (Weekly Debrief).
*(Se descarta para esta fase la analítica histórica compleja y calendarios macroeconómicos para priorizar el rendimiento y la contención emocional inmediata).*

## 3. Personas
El diseño se ha basado en las necesidades de dos perfiles, cuyas fichas completas y trazabilidad a las entrevistas están disponibles en el [Tablero de FigJam](https://www.figma.com/board/dWNYzkbP6n2Ewx8gasyJRN/IDEAS-PROYECTO?node-id=0-1&t=CzQRwoKiO5QsaMLA-1).
*   **[Persona Principal] Marc Valdés:** Trader de escritorio, fotofobia, multimonitor. Prioriza el control estricto del *drawdown* sin distracciones visuales.
*   **[Persona Secundaria] Guille:** Trader discrecional, conexión 4G inestable. Necesita registrar operaciones en caliente desde el móvil, con una sola mano, para frenar la impulsividad.

## 4. Criterios de Éxito
*   **Para Marc:** Es capaz de abrir el dashboard en escritorio y leer su margen exacto de pérdida diaria antes del bloqueo emocional, sin mucha fricción.
*   **Para la Persona Secundaria:** Es capaz de registrar una sesión con infracción de plan (despliegue de tags de error) y documentar su estado emocional desde el móvil usando el pulgar de una sola mano.

## 5. Restricciones del Proyecto
*   **Restricción Ambiental / Rendimiento:** Para atender a la persona secundaria (que opera en tránsito con conexión 4G inestable), la carga inicial del *Dashboard Mobile* debe tener un peso bajo. No se renderizarán librerías de gráficos pesadas en la vista móvil de registro rápido.
*   **Restricción de Accesibilidad (WCAG 2.2 AA):** Uso de *Target Sizes* mínimos de 48x48 px en botones móviles por uso a una mano en movimiento, y paleta semántica en Modo Oscuro obligatorio de alto contraste (min. 4.5:1) sin usar el rojo puro como fondo para mitigar la aversión psicológica tras pérdidas.