# Memoria de Entrega — Órbita 2: Sistema de Diseño, Componentes y Prototipado en Alta Fidelidad

## Enlaces del Proyecto
* **Archivo editable en Figma:** [Interfaz Web del proyecto](https://www.figma.com/design/InkqDFHy6hAA3bG8WeDyQc/Interfaz-Web-del-proyecto?node-id=0-1&t=qIgXegNIgHRwRK9Z-1)
* **Prototipo interactivo (Modo Play):** [Presentación en Figma](https://www.figma.com/proto/InkqDFHy6hAA3bG8WeDyQc/Interfaz-Web-del-proyecto?node-id=141-43&t=pXAm1Y59kNTLBxuQ-1)

* **Proyecto:** Quantitative Trading Journal & AI Analytics Dashboard
* **Especialidad:** Desarrollo de Aplicaciones Web (DAW) — Diseño de Interfaces Web
* **Versión:** 1.0 (Órbita 2 Finalizada)
* **Herramienta de prototipado:** Figma (Variables, Auto Layout 5.0, Component Sets, Interactive Overlays)

---

## 1. Definición y Justificación del Estilo Visual

Ante los requerimientos de la fase para seleccionar o definir un lenguaje visual formal, se ha optado por un estilo propio bautizado como **Bento UI Analítico con Acento Semántico**.

### 1.1. Descarte de Tendencias No Funcionales
* **Neumorfismo (Descartado):** Rechazado por motivos de accesibilidad técnica (incumplimiento sistemático de los criterios WCAG 2.1 AA). La dependencia exclusiva de sombras suaves interiores/exteriores diluye los bordes de los contenedores en pantallas de bajo brillo o entornos de trabajo con iluminación intensa.
* **Glassmorfismo Puro (Descartado):** Aunque estéticamente llamativo, los fondos translúcidos con desenfoque (*backdrop-blur*) introducen ruido de fondo que compite visualmente contra series de números, decimales de lotaje y curvas de balance, provocando fatiga visual durante sesiones operativas prolongadas.

### 1.2. Principios del Bento UI Analítico
1. **Estructura Modular Racional:** Distribución en rejilla asimétrica basada en cajas independientes con `radius-md: 8px` y microbordes de `1 px` (`color/border`), optimizando la densidad de datos sin sensación de saturación.
2. **Semántica por Tinte (Low-Opacity Surfaces):** Los contenedores funcionales no emplean bloques de color saturados que deslumbren al usuario; utilizan fondos con tinte semántico al 5–8% en modo claro y bases oscuras profundas en modo oscuro (`surface-primary`, `surface-success`, `surface-warning`, `surface-error`).
3. **Jerarquía Tipográfica:** Ocho `Text styles` guardados en Figma (`heading-1`, `heading-2`, `heading-3`, `body`, `label`, `display`, `caption-mono` y `caption`). No se crearon variables tipográficas.

---

## 2. Arquitectura de Design Tokens y Gestión de Modos

El proyecto implementa el motor nativo de **Variables de Figma** dividido en dos niveles de abstracción desacoplados, permitiendo la conmutación instantánea entre **Modo Claro** y **Modo Oscuro** sin duplicar mesas de trabajo.

```text
Tokens Primitivos (Hexadecimales) ──► Tokens Semánticos (Roles) ──► Asignación a Capas (UI)
```

### 2.1. Colección: Primitivos (36 Variables)

- **`slate` (50 a 900):** Escala de grises con tinte frío azulado para fondos neutros y textos.
- **`blue` (50, 200, 600, 950):** Familia corporativa y cognitiva (módulo Copiloto IA y acciones primarias).
- **`emerald` (50, 300, 700, 950):** Semántica de ganancia financiera y disciplina óptima.
- **`amber` (50, 300, 600, 950):** Semántica de advertencia y control de drawdown. Se incluye el tono terracota calibrado **`amber/600: #AC5425`** para destacar el acento de riesgo.
- **`rose` (50, 300, 700, 950):** Semántica de error, infracción de plan y pérdidas netas.

### 2.2. Colección: Semánticos (15 Tokens Contextuales)

| Token Semántico | Modo Claro | Modo Oscuro | Rol en la Interfaz |
| :--- | :--- | :--- | :--- |
| `surface` | `slate/50` | `slate/900` | Fondo general del lienzo de la aplicación. |
| `surface-raised` | `color/on-primary (#FFFFFF)` | `slate/800` | Contenedores elevados de tarjeta, Drawer y modales. |
| `surface-primary` | `blue/50` | `blue/950` | Fondo de la tarjeta de insights y barra de contexto del Chat IA. |
| `surface-success` | `emerald/50` | `emerald/950` | Fondo de métrica «Estado Disciplinar & Plan: Óptimo». |
| `surface-warning` | `amber/50` | `amber/950` | Fondo profundo de la tarjeta «Drawdown Máximo Restante». |
| `surface-error` | `rose/50` | `rose/950` | Fondo del selector «No (Infracción)». |
| `border` | `slate/200` | `slate/700` | Microbordes divisorios de `1 px` en toda la interfaz. |
| `on-surface` | `slate/900` | `slate/50` | Texto principal de alta jerarquía y títulos de tarjeta. |
| `on-surface-variant` | `slate/600` | `slate/400` | Etiquetas secundarias, días fuera de mes y placeholders. |
| `primary` | `blue/600` | `blue/200` | Botones de acción, enlaces activos y curva de equity. |
| `on-primary` | `#FFFFFF` | `slate/900` | Texto/iconos sobre botones primarios o celdas seleccionadas. |
| `success` | `emerald/700` | `emerald/300` | Puntos de trade ganadores y texto de estado óptimo. |
| `warning` | `amber/600` (`#AC5425`) | `amber/300` | Barra de progreso de DD y selector parcial. |
| `error` | `rose/700` | `rose/300` | Puntos de trade perdedores e indicadores de infracción. |

### 2.3. Estilos Tipográficos Globales (Text Styles)
Figma contiene estos ocho estilos tipográficos; no se crearon variables tipográficas. `display` y `caption-mono` usan Chivo Mono, mientras que los otros seis estilos usan Plus Jakarta Sans.

| Text style | Familia tipográfica | Tamaño / interlineado |
| :--- | :--- | :--- |
| `heading-1` | Plus Jakarta Sans | `24 / 32` |
| `heading-2` | Plus Jakarta Sans | `20 / 28` |
| `heading-3` | Plus Jakarta Sans | `16 / 24` |
| `body` | Plus Jakarta Sans | `16 / 24` |
| `label` | Plus Jakarta Sans | `14 / 20` |
| `display` | Chivo Mono | `36 / 44` |
| `caption-mono` | Chivo Mono | `12 / 24` |
| `caption` | Plus Jakarta Sans | `12 / 24` |

### 2.4. Estilos de Elevación y Guías de Maquetación (Effect & Layout Styles)
* **Elevación (`Effect styles`):**
  * `elevation-1`: Sombra tenue para tarjetas Bento elevadas.
  * `elevation-2`: Sombra media para paneles contextuales (Popover de día y Drawer lateral).
  * `elevation-3`: Sombra pronunciada para ventanas modales centradas y Bottom Sheets móviles sobre telón (*backdrop*).
* **Guías de Rejilla (`Layout guide styles`):**
  * `grid/desktop-12col`: Sistema de 12 columnas con márgenes simétricos y canalones de 24 px para viewport de escritorio (1440 px).
  * `grid/mobile-4col`: Sistema de 4 columnas con márgenes de 16 px y canalones de 12 px adaptado a móvil (390 px).

## Tabla de Ubicación de Pantallas y Entregables

| Pantalla / Componente | Página en Figma | Viewport | Tipo de Vista | Función en el Flujo |
| :--- | :--- | :--- | :--- | :--- |
| **`Dashboard_Desktop`** | `Mockups` | `1440 × 1024` | Pantalla completa | Vista principal del diario analítico y métricas Bento. |
| **`Modal_Registro_Desktop`** | `Mockups` | `640 × 580` | Modal (Overlay Centrado) | Formulario de registro de trades, resultado y disciplina. |
| **`Popover_Detalle_Dia_Desktop`** | `Mockups` | `320 × 260` | Popover (Overlay Manual) | Previsualización rápida de la sesión sobre la celda del día. |
| **`Drawer_Chat_IA_Desktop`** | `Mockups` | `400 × 1024` | Drawer (Overlay Top Right) | Asistente conversacional con contexto de la sesión cargado. |
| **`Dashboard_Mobile`** | `Mockups` | `390 × 844` | Pantalla completa | Versión móvil con carrusel de métricas y barra fija FAB. |
| **`BottomSheet_Registro_Mobile`** | `Mockups` | `390 × Auto` | Bottom Sheet (Bottom Center) | Adaptación táctil del formulario con esquinas `20,20,0,0`. |
| **`BottomSheet_Chat_IA_Mobile`** | `Mockups` | `390 × 800` | Bottom Sheet (Bottom Center) | Asistente IA desplegado desde el pulgar. |
| **`Menu`** | `Mockups` | `320 × 844` | Drawer (Overlay Top Left) | Navegación y configuración de cuenta en móvil. |

## Correspondencia Semántica con HTML5

Para asegurar una transición limpia al desarrollo frontend con HTML5 semántico y CSS puro, los marcos de Figma mapean directamente a elementos semánticos del DOM:

| Marco / Componente en Figma | Etiqueta HTML5 | Justificación Técnica de Accesibilidad |
| :--- | :--- | :--- |
| `Navbar` | `<header>` y `<nav>` | Cabecera global y enlaces principales del diario. |
| `Dashboard_Desktop` (cuerpo) | `<main>` | Contenedor del contenido principal e interactivo. |
| `MetricCard` (Drawdown, Daily DD) | `<section>` con `role="region"` | Áreas clave de telemetría financiera. |
| `Diario de Sesiones` (Calendario) | `<section>` con `<table>` o grid | Estructura tabular de fechas y sesiones operadas. |
| `day_cell` | `<td>` con `<button>` interactivo | Elemento con foco accesible de teclado y evento `onClick`. |
| `Rendimiento Acumulado` | `<figure>` con `<canvas>` / `<svg>` | Contenedor semántico de la gráfica con eje de balance. |
| `Insights del Copiloto IA` | `<aside>` | Información contextual y de asistencia complementaria. |
| `Modal_Registro` | `<dialog>` | Elemento nativo de ventana modal accesible. |
| `Drawer_Chat_IA` | `<aside>` con `aria-modal="true"` | Panel deslizante lateral auxiliar para interacción con IA. |
| `BottomSheets` (Mobile) | `<dialog>` / `<section role="dialog">` | Hojas de diálogo ancladas con captura de foco. |

---

## 3. Catálogo de Componentes Maestros
Los componentes han sido parametrizados en la página `componentes` mediante propiedades booleanas, variantes y propiedades de intercambio de instancia (*Instance Swap*):

### 3.1. `day_cell` (Celdas del Calendario Heatmap)

- **Estructura:** Contenedor Auto Layout vertical de `40 × 40 px` (`gap: 2px`) con esquina redondeada `8 px`.
- **Variantes implementadas:**
  - `State`: `Default` (borde sólido fino), `Hover` (borde discontinuo *dashed* `2px/2px` en color primario), `Selected` (fondo oscuro `slate/900` con tipografía blanca forzada mediante `on-primary`).
  - `HasTrade`: Control booleano para desplegar u ocultar el punto indicador de sesión (`4 × 4 px`).
  - `Today`: Variante `OutMonth` que aplica un 40% de opacidad sobre la celda para separar visualmente los días correspondientes a otros meses.

### 3.2. `MetricCard` (Tarjetas de Telemetría)

- Componente con ranura para barra de progreso superior de `6 px`.
- Tres estados según el nivel de riesgo:
  - **Alerta:** Acento `#AC5425` sobre superficie suave o profunda.
  - **Neutra:** Contenedor sobre `surface-raised` para descanso visual.
  - **Positiva:** Barra y acento en `color/success`.

### 3.3. `SegmentedControl` (Evaluación de Sesión)

- Sustituye el patrón convencional de botones planos por un selector de cumplimiento con tres estados semánticos (`Sí - Óptimo`, `Parcial`, `No - Infracción`).
- La variante `No (Infracción)` cuenta con despliegue condicional de tags de motivo de desvío operativo (`Overtrading`, `Entrada Anticipada`, `Leverage Excesivo`, `Mover Stop Loss`).

### 3.4. `IconButton`

- Componente normalizado en `32 × 32 px` (Desktop) y `40 × 40 px` (Mobile).
- Control de apariencia: `Type = Ghost` (sin relleno, empleado en botones de cierre `X`) y `Type = Filled` (relleno `color/primary`, empleado en el envío del chat).
- Integra una propiedad de **`Instance Swap`** para alternar iconos (`Icon/Close`, `Icon/Send`) garantizando el centrado dentro de la caja de `24 × 24 px`.

### 3.5. Módulo de Rendimiento Acumulado (Equity Curve & Ratios)
* **Gráfica de Alta Fidelidad:** Se sustituyó el cuadro de wireframe provisional por un trazado vectorial con la herramienta pluma en `color/primary`, con nodos circulares en cierres de sesión y una rejilla técnica de fondo (`grid lines`) vinculada a `color/border`.
* **Matriz de Ratios Cuantitativos:** Incorporación de 4 tarjetas Bento inferiores con fondo `surface-raised` y tipografía `caption-mono` para lectura rápida de métricas clave: `Profit Factor (+1.5R)`, `Win Rate (60%)`, `Sharpe Ratio (1.7)` y `RR Medio (2)`.

## 4. Lógica de Prototipado y Flujos de Usuario
El prototipo implementa una arquitectura de navegación no lineal que replica el comportamiento de una Single Page Application (SPA):

```text
[Calendario: Día sin operativa]  ──(On click)──► Open Overlay: Modal Registro (Center / Backdrop 50%)
[Calendario: Día 12 (con trade)] ──(On click)──► Open Overlay: Popover Detalle (Manual)
                                                        │
                                            (On click: "Editar registro →")
                                                        │
                                                        ▼
                                             Swap Overlay: Modal Registro (Center)

[Botón "Profundizar con la IA"]  ──(On click)──► Open Overlay: Drawer Chat IA (Top Right / Move In)
[Botón FAB "IA" (Mobile)]        ──(On click)──► Open Overlay: Bottom Sheet Chat (Bottom Center / Move In)
```

- **Manejo de Overlays con `Swap Overlay`:** Se ha resuelto la transición entre la previsualización del popover y el modal de edición evitando el apilamiento de capas en el visor de Figma, impidiendo fallos de desenfoque múltiple o cierres inesperados.
- **Preservación de Estado de Capas:** La capa de texto de las celdas del calendario comparte el identificador estricto `Day_Number` junto a una `Text Property` vinculada, permitiendo que al hacer clic y cambiar al estado `Selected` no se reinicie el número de día al valor del componente maestro.

## 5. Diseño Responsive (Desktop 1440px ➔ Mobile 390px)
Para el paso a dispositivos móviles se han aplicado patrones adaptativos específicos sin comprometer la capacidad analítica de la interfaz:

1. **Transformación de Modales y Drawers a Bottom Sheets:**
   - Tanto el diálogo de registro como el panel del chat IA abandonan las coordenadas fijas y se configuran como hojas inferiores ancladas a la base (`Bottom Center`).
   - Adopción de esquinas redondeadas superiores (`20px, 20px, 0, 0`) y píldora táctil de arrastre (*drag handle: 36 × 4 px*).
2. **Barra de Acción Flotante (FAB Bar):**
   - El botón principal de registro se unifica con el disparador del Copiloto IA en una botonera inferior fija (`Bottom Center`) con elevación, garantizando acceso directo mediante el pulgar sin necesidad de scroll.
3. **Ergonomía Táctil y Accesibilidad:**
   - Las áreas táctiles se han fijado en un mínimo de **`48 px`** en botones principales y campos de entrada, cumpliendo con las guías de interfaz móvil de Apple HIG y Google Material Design.
   - La curva de Rendimiento Acumulado (Equity) y sus 4 ratios inferiores (`Profit Factor`, `Win Rate`, `Sharpe`, `RR`) se reorganizan en una sola columna con lectura vertical fluida.

## 6. Verificación de Cumplimiento WCAG 2.1 AA

- **Ratios de Contraste Tipográfico:**
  - Modo Claro: `on-surface` (`slate/900`) sobre `surface` (`slate/50`) = **14.8:1** (Supera ampliamente el umbral exigido de 4.5:1).
  - Modo Oscuro: `on-surface` (`slate/50`) sobre `surface` (`slate/900`) = **13.6:1**.
  - Texto en botón primario: `on-primary` (`#FFFFFF`) sobre `primary` (`blue/600`) = **4.6:1**.
- **Doble Codificación Semántica:** Ningún estado financiero o de riesgo depende exclusivamente del color; se acompaña siempre de indicadores tipográficos explícitos (`Óptimo`, `Parcial`, `Infracción`, etiquetas cuantitativas y porcentajes).

## 7. Control de Calidad y Registro de Uso de IA

El desarrollo de esta fase ha combinado herramientas generativas (Google Stitch para exploración estructural y LLMs para asistencia en tokens y fórmulas) con un filtrado crítico estrictamente manual. Se han descartado las pantallas directas de IA, los estilos no accesibles (neumorfismo) y las paletas monótonas en favor de un sistema de diseño propio y accesible.

* La bitácora detallada de interacciones, descartes justificados y decisiones humanas se encuentra documentada en:
  **[`CHANGELOG.md`](./CHANGELOG.md)**

## Respuestas Técnicas para la Auditoría Oral

- **¿Por qué este estilo visual y no Neumorfismo o Glassmorfismo?**
  - Respuesta: Por contraste y fatiga visual (WCAG 2.1 AA). El neumorfismo usa sombras con contraste menor a 3:1 incompatibles con accesibilidad, y el glassmorfismo distorsiona decimales y cifras con su desenfoque. Elegí Bento UI por orden analítico y microbordes de 1 px que estructuran la información con claridad.

- **¿Cómo organizaste la tipografía en Figma?**
  - Respuesta: Creé ocho `Text styles` con los nombres y tamaños/interlineados documentados en la tabla. La tipografía está definida mediante esos estilos; no creé variables tipográficas.

- **¿Por qué el Drawdown usa ese color óxido `#AC5425`?**
  - Respuesta: Para evitar el semáforo genérico chillón que satura la vista. Es un tono terracota propio de la marca (`amber/600` en primitivos) que en Modo Oscuro reposa sobre un fondo profundo (`amber/950`) manteniendo el texto legible por encima de 4.5:1.

- **¿Cómo resolviste la interacción del Popover al Modal?**
  - Respuesta: Usando `Swap overlay` en vez de `Open overlay`. Encadenar dos `Open overlay` apila dos fondos oscuros translúcidos (double backdrop), lo que rompe el prototipo en Figma. `Swap overlay` intercambia la previsualización del día por el formulario de registro en el mismo plano.

## Checklist de Verificación de Figma

1. **Estructura de 5 páginas en el panel izquierdo:**
   - `Portada`
   - `Guía de estilo`
   - `Componentes`
   - `Wireframes`
   - `Mockups`
2. **Portada configurada como thumbnail:**
   - Marco de `1920 × 1080 px`
   - Título del proyecto, nombre del autor, asignatura y etiqueta `Órbita 2: Alta Fidelidad`
   - Se ha establecido como thumbnail del archivo de Figma.
3. **Correcciones móviles antes de entregar:**
   - En `Menu`, se han eliminado las líneas duplicadas de `Ajustes de Perfil` y `Límites y Reglas de Riesgo`.
   - En `Dashboard_Mobile`, la caja del eje Y se ha ampliado para evitar que los valores `100, 75, 50, 25, 0` se desordenen verticalmente.
