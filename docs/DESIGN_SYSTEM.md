# Memoria Técnica del Sistema de Diseño: Bento UI Analítico

Este documento define la especificación técnica, fundamentos visuales, catálogo de estilos en Figma, arquitectura de variables semánticas y componentes de interfaz para la plataforma de analítica y psicotrading, desarrollada en cumplimiento con los estándares WCAG 2.1 AA y optimizada para su implementación frontend con Tailwind CSS.

---

## 1. Fundamentos Visuales y Variables de Diseño (Figma Variables)

El sistema de diseño sigue el paradigma de **Bento UI Analítico**: una distribución modular basada en celdas de densidad informativa variable, delimitadas por microbordes de `1 px` y radios de curvatura consistentes.

Se descartan deliberadamente estilos como el **Neumorfismo** (por su contraste inaccesible e ilegible en pantallas de baja gama) y el **Glassmorfismo puro** (por el exceso de desenfoque de fondo que compite visualmente con series numéricas y métricas de balance).

### 1.1. Arquitectura de Color en Dos Colecciones

La gestión del color en Figma se articula mediante dos colecciones desacopladas que permiten conmutar entre **Modo Claro** y **Modo Oscuro** de forma nativa:

- **Primitivos (36 variables):** Valores hexadecimales absolutos organizados por familias de saturación (`slate`, `blue`, `emerald`, `amber`, `rose`). Incluye el tono terracota calibrado `amber/600: #AC5425` para la telemetría de Drawdown.
- **Semánticos (15 variables):** Tokens de contexto funcional divididos en dos modos (Modo Claro y Modo Oscuro), resolviendo superficies, trazos y contraste tipográfico.

### 1.2. Colección Primitivos (Valores Absolutos)

| Familia | Token | Valor Hex | Función Técnica |
| :--- | :--- | :--- | :--- |
| `slate` | `50` | `#F8FAFC` | Fondo de lienzo en modo claro |
| `slate` | `200` | `#E2E8F0` | Trazos de borde en modo claro |
| `slate` | `400` | `#94A3B8` | Texto secundario y atenuado en modo oscuro |
| `slate` | `600` | `#475569` | Texto secundario en modo claro |
| `slate` | `700` | `#334155` | Trazos de borde en modo oscuro |
| `slate` | `800` | `#1E293B` | Superficies elevadas de tarjetas en modo oscuro |
| `slate` | `900` | `#0F172A` | Fondo de lienzo en modo oscuro / texto principal en claro |
| `blue` | `50` | `#EFF6FF` | Superficie suave de IA / marca en claro |
| `blue` | `200` | `#BFDBFE` | Acento secundario y foco en oscuro |
| `blue` | `600` | `#2563EB` | Azul primario de acción (botones, selección) |
| `blue` | `950` | `#0E1B38` | Superficie profunda de IA en modo oscuro |
| `emerald` | `50` | `#ECFDF5` | Superficie de éxito / óptimo en claro |
| `emerald` | `300` | `#6EE7B7` | Texto y puntos de ganancia en oscuro |
| `emerald` | `700` | `#047857` | Texto y puntos de ganancia en claro |
| `emerald` | `950` | `#06281E` | Superficie profunda de éxito en oscuro |
| `amber` | `50` | `#FFF7ED` | Superficie de advertencia / DD en claro |
| `amber` | `300` | `#FCD34D` | Texto de advertencia en oscuro |
| `amber` | `600` | `#AC5425` | Tono terracota: barra y acento de DD restante |
| `amber` | `950` | `#1F1108` | Superficie profunda de advertencia en oscuro |
| `rose` | `50` | `#FFF1F2` | Superficie de infracción / pérdida en claro |
| `rose` | `300` | `#FDA4AF` | Texto y puntos de pérdida en oscuro |
| `rose` | `700` | `#BE123C` | Texto y puntos de pérdida en claro |
| `rose` | `950` | `#2B0B14` | Superficie profunda de error en oscuro |

### 1.3. Colección Semánticos (Matriz Real de Figma)

| Variable Semántica | Modo Claro (Alias / Valor) | Modo Oscuro (Alias / Valor) | Mapeo Frontend (Tailwind CSS) |
| :--- | :--- | :--- | :--- |
| `surface` | `slate/50` | `slate/900` | `bg-slate-50 dark:bg-slate-900` |
| `surface-raised` | `#FFFFFF` | `slate/800` | `bg-white dark:bg-slate-800` |
| `surface-primary` | `blue/50` | `blue/950` | `bg-blue-50 dark:bg-blue-950` |
| `surface-success` | `emerald/50` | `emerald/950` | `bg-emerald-50 dark:bg-emerald-950` |
| `surface-warning` | `amber/50` | `amber/950` | `bg-amber-50 dark:bg-amber-950` |
| `surface-error` | `rose/50` | `rose/950` | `bg-rose-50 dark:bg-rose-950` |
| `border` | `slate/200` | `slate/700` | `border-slate-200 dark:border-slate-700` |
| `on-surface` | `slate/900` | `slate/50` | `text-slate-900 dark:text-slate-50` |
| `on-surface-variant` | `slate/600` | `slate/400` | `text-slate-600 dark:text-slate-400` |
| `primary` | `blue/600` | `blue/200` | `text-blue-600 dark:text-blue-200` |
| `on-primary` | `#FFFFFF` | `slate/900` | `text-white dark:text-slate-900` |
| `success` | `emerald/700` | `emerald/300` | `text-emerald-700 dark:text-emerald-300` |
| `warning` | `amber/600 (#AC5425)` | `amber/300` | `text-amber-600 dark:text-amber-300` |
| `error` | `rose/700` | `rose/300` | `text-rose-700 dark:text-rose-300` |

### 1.4. Estilos de Elevación (Effect Styles)

Para evitar sombras difusas que enturbien la lectura de datos, la profundidad visual se resuelve con 3 niveles controlados:

- **elevation-1:** sombra mínima para tarjetas Bento elevadas o microelementos interactivos.
- **elevation-2:** sombra media orientada a paneles contextuales flotantes (Popover de detalle diario) y cajón lateral (Drawer Chat IA Desktop).
- **elevation-3:** elevación dominante con dispersión amplia para ventanas modales centradas y Bottom Sheets móviles sobre telón (backdrop).

### 1.5. Rejillas de Maquetación (Layout Guide Styles)

La distribución espacial se encuentra normalizada mediante dos estilos de grilla:

- **grid/desktop-12col:** rejilla fluida de 12 columnas con márgenes laterales simétricos y canalones (gutters) de 24 px para la vista de escritorio (1440 px).
- **grid/mobile-4col:** rejilla de 4 columnas con márgenes de 16 px y canalones de 12 px adaptada al viewport móvil (390 px).

---

## 2. Tipografía y Jerarquía Numérica (Figma Text Styles)

El sistema emplea una estrategia de fuentes complementarias:

- **Plus Jakarta Sans:** utilizada en jerarquía estructural, navegación y diálogo conversacional por su neutralidad y excelente legibilidad en pantalla.
- **Chivo Mono:** aplicada estrictamente a métricas numéricas (`7.3%`, `3,420€`), celdas del calendario y ejes de balance para evitar el salto óptico de caracteres al mutar datos.

### 2.1. Catálogo Real de Estilos Tipográficos

| Estilo Maestro | Tamaño / Interlineado | Familia Base | Peso | Función en la Interfaz |
| :--- | :--- | :--- | :--- | :--- |
| `display` | `36 / 44` | Chivo Mono | Bold | Cifras métricas principales en escritorio (`7.3%`, `3,420€`) |
| `heading-1` | `24 / 32` | Plus Jakarta Sans | Bold | Títulos principales de páginas y cifras métricas en móvil |
| `heading-2` | `20 / 28` | Plus Jakarta Sans | SemiBold | Encabezados de Drawer, Modales y Bottom Sheets |
| `heading-3` | `16 / 24` | Plus Jakarta Sans | SemiBold | Títulos de tarjetas Bento |
| `body` | `16 / 24` | Plus Jakarta Sans | Regular | Cuerpo de texto estándar e inputs de formulario |
| `label` | `14 / 20` | Plus Jakarta Sans | Medium / SemiBold | Botones interactivos, opciones del Segmented Control y burbujas de chat |
| `caption-mono` | `12 / 24` | Chivo Mono | Medium | Números de las celdas del calendario, ejes de la gráfica de Equity y tags cuantitativos |
| `caption` | `12 / 24` | Plus Jakarta Sans | Regular | Subtítulos de tarjetas, estado de conexión y metadatos |

---

## 3. Arquitectura de Componentes (Figma Component Set)

### 3.1. `day_cell` (Celdas del Calendario Heatmap)

- **Estructura:** marco Auto Layout vertical de `40 × 40 px` (`gap: 2px`) con radio de esquina de `8 px`.
- **Propiedades:**
  - `State`: `Default`, `Hover`, `Selected`.
  - `HasTrade`: booleano para mostrar u ocultar el punto indicador de sesión (`4 × 4 px`).
  - `Today`: `Default`, `True`, `OutMonth` (aplica `40%` de opacidad para atenuar días fuera del mes).
- **Tipografía:** usa el estilo `caption-mono` (`12 / 24`). La capa de texto comparte el identificador `Day_Number` con una `Text Property` asociada, preservando el número asignado al conmutar estados.

### 3.2. `MetricCard` (Telemetría de Riesgo)

Tarjetas Bento superiores de tres estados funcionales según la criticidad de la cuenta:

1. **Alerta / Margen de Colchón:** fondo `surface-warning`, barra de progreso y valor en `color/warning` (`#AC5425`).
2. **Operativa Neutra:** fondo `surface-raised` (`#FFFFFF` en claro, `slate/800` en oscuro) para descanso visual; barra en `color/primary`.
3. **Salud Disciplinar:** fondo `surface-success`, barra y etiqueta en `color/success`.

### 3.3. `SegmentedControl` (Evaluación de Plan)

Selector disciplinario de tres estados sin saturar la jerarquía visual:

- **Sí (Óptimo):** relleno `surface-success`, trazo y texto en `color/success`.
- **Parcial:** relleno `surface-warning`, trazo y texto en `color/warning`.
- **No (Infracción):** relleno `surface-error`, trazo y texto en `color/error`.
- La variante de infracción despliega condicionalmente tags de motivo de desvío operativo (`Overtrading`, `Entrada Anticipada`, `Leverage Excesivo`, `Mover Stop Loss`).

### 3.4. `IconButton`

- Componente normalizado en `32 × 32 px` (Desktop) y `40 × 40 px` (Mobile).
- Control de apariencia: `Type = Ghost` (sin relleno, para botones de cierre `X`) y `Type = Filled` (relleno `color/primary`, para envío del chat).
- Integra una propiedad de **Instance Swap** para alternar iconos (`Icon/Close`, `Icon/Send`) garantizando el centrado dentro de la caja de `24 × 24 px`.

---

## 4. Lógica de Prototipado y Flujos de Usuario

El prototipo implementa una arquitectura de navegación no lineal que replica el comportamiento de una SPA:

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

- **Manejo de Overlays con `Swap Overlay`:** la transición entre el popover y el modal de edición se resuelve evitando el apilamiento de capas en el visor de Figma y evitando artefactos de desenfoque múltiple.
- **Preservación de Estado de Capas:** la capa de texto de las celdas del calendario comparte el identificador estricto `Day_Number` junto a una `Text Property` vinculada, permitiendo que al hacer clic y cambiar al estado `Selected` no se reinicie el valor del número de día.

---

## 5. Diseño Responsive (Desktop 1440px ➔ Mobile 390px)

Para el paso a dispositivos móviles se han aplicado patrones adaptativos específicos sin comprometer la capacidad analítica de la interfaz:

1. **Transformación de Modales y Drawers a Bottom Sheets:**
   - Tanto el diálogo de registro como el panel del chat IA se convierten en hojas inferiores ancladas a la base (`Bottom Center`).
   - Se adopta un borde superior redondeado (`20px, 20px, 0, 0`) y un drag handle táctil (`36 × 4 px`).
2. **Barra de Acción Flotante (FAB Bar):**
   - El botón principal de registro se unifica con el disparador del Copiloto IA en una botonera inferior fija (`Bottom Center`) con elevación, para acceso directo con el pulgar.
3. **Ergonomía Táctil y Accesibilidad:**
   - Las áreas táctiles se fijan en un mínimo de **48 px** en botones principales y campos de entrada.
   - La curva de rendimiento acumulado (Equity) y sus 4 ratios inferiores se reorganizan en una sola columna con lectura vertical fluida.

---

## 6. Verificación de Cumplimiento WCAG 2.1 AA

### 6.1. Ratios de Contraste Tipográfico

- **Modo Claro:** `on-surface` (`slate/900`) sobre `surface` (`slate/50`) = **14.8:1** (supera el umbral exigido de `4.5:1`).
- **Modo Oscuro:** `on-surface` (`slate/50`) sobre `surface` (`slate/900`) = **13.6:1**.
- **Botón primario:** `on-primary` (`#FFFFFF`) sobre `primary` (`blue/600`) = **4.6:1**.

### 6.2. Doble Codificación Semántica

Ningún estado financiero o de riesgo depende exclusivamente del color; se acompaña siempre de indicadores tipográficos explícitos (`Óptimo`, `Parcial`, `Infracción`, etiquetas cuantitativas y porcentajes).

---

## 7. Conclusión

El sistema de diseño propuesto combina modularidad analítica, semántica contextual y control de accesibilidad para sostener una interfaz de trading orientada a la toma de decisiones rápidas y a la contención emocional en caliente. La elección de materiales de superficie ligeros, tipografía dual y un lenguaje semántico claro permite equilibrar precisión numérica, confianza visual y comprensión inmediata sin caer en ruido gráfico ni sobrecarga cognitiva.
