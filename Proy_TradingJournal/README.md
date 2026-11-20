# Diario de Trading - Hito 1

Primera entrega del proyecto: estructura modular en JavaScript (`datos.js`, `ui.js`, `main.js`), validación con ESLint sin errores, arquitectura CSS por capas (`@layer`) y primera pieza funcional (menú, listado y detalle).

## 1. Backlog (ordenado por prioridad)
1. **Preparación del proyecto:** Estructura de carpetas (`css/`, `js/`), `index.html` semántico, configuración de ESLint (`eslint.config.mjs`) sin errores y documentación inicial.
2. **Entidades de ejemplo (`js/datos.js`):** Definición y exportación de `cuentas`, `sesiones` (10 registros relacionados mediante `cuentaId`) y `diasCalendario`.
3. **Menú de navegación:** Navegación funcional entre las vistas `Dashboard`, `Diario` e `Histórico` gestionando `aria-current="page"` y el atributo `hidden`.
4. **Indicadores, calendario y listado (`js/ui.js`):** Generación dinámica desde JavaScript de las tarjetas de métricas (a partir de `cuentas` y `sesiones`), el calendario de jornadas operadas y el listado de sesiones en `Histórico`.
5. **Detalle de sesión (`<dialog>`):** Apertura de ficha modal con los datos completos de la sesión y su cuenta asociada al pulsar sobre un día operado o una tarjeta del histórico.

## 2. Mapa de pantallas
* **Dashboard:** Muestra los 3 indicadores principales de riesgo y disciplina (drawdown máximo restante, límite de pérdida diaria y estado disciplinar), el calendario interactivo con acceso directo al detalle de cada día operado y el resumen de rendimiento acumulado.
* **Diario:** Vista enlazada en el menú principal, preparada para incorporar el formulario de registrar sesiones más adelante.
* **Histórico:** Listado de tarjetas de sesiones generado desde `datos.js` y `ui.js`, con botón para abrir la ficha completa en el diálogo de detalle.