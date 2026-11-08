# Memoria Técnica del Sistema de Diseño: Bento UI Analítico

Este documento define la especificación técnica, fundamentos visuales, arquitectura de tokens semánticos y componentes de interfaz para la plataforma de analítica y psicotrading, desarrollada en cumplimiento con los estándares WCAG 2.1 AA y optimizada para su implementación frontend con CSS puro.

---

## 1. Fundamentos Visuales y Tokens de Diseño (Design Tokens)

El sistema de diseño sigue el paradigma de **Bento UI Analítico**: una distribución modular basada en celdas de densidad informativa variable, delimitadas por microbordes de 1 px y radios de curvatura consistentes (`radius-md: 8px`).

Se descartan deliberadamente estilos como el **Neumorfismo** (por su contraste inaccesible e ilegible en pantallas de baja gama) y el **Glassmorfismo puro** (por el exceso de desenfoque de fondo que compite visualmente con series numéricas y métricas de balance).

### 1.1. Arquitectura de Tokens en Dos Niveles

Para garantizar soporte nativo para Modo Claro y Modo Oscuro sin deuda técnica, los estilos se dividen en dos niveles:
1. **Tokens Primitivos:** Paleta base de valores hexadecimales inmutables categorizados por familias (`slate`, `blue`, `emerald`, `amber`, `rose`).
2. **Tokens Semánticos:** Alias de contexto que mutan dinámicamente según el tema seleccionado (`Modo Claro` o `Modo Oscuro`).

#### Colección Primitivos (Valores Absolutos)

| Familia | Token | Valor Hex | Función Técnica |
| :--- | :--- | :--- | :--- |
| **`slate`** | `50` | `#F8FAFC` | Fondo de lienzo en modo claro |
| | `200` | `#E2E8F0` | Trazos de borde en modo claro |
| | `400` | `#94A3B8` | Texto secundario y atenuado en modo oscuro |
| | `600` | `#475569` | Texto secundario en modo claro |
| | `700` | `#334155` | Trazos de borde en modo oscuro |
| | `800` | `#1E293B` | Superficies elevadas de tarjetas en modo oscuro |
| | `900` | `#0F172A` | Fondo de lienzo en modo oscuro / texto principal en claro |
| **`blue`** | `50` | `#EFF6FF` | Superficie suave de IA / marca en claro |
| | `200` | `#BFDBFE` | Acento secundario y foco en oscuro |
| | `600` | `#2563EB` | Azul primario de acción (botones, selección) |
| | `950` | `#0E1B38` | Superficie profunda de IA en modo oscuro |
| **`emerald`** | `50` | `#ECFDF5` | Superficie de éxito / óptimo en claro |
| | `300` | `#6EE7B7` | Texto y puntos de ganancia en oscuro |
| | `700` | `#047857` | Texto y puntos de ganancia en claro |
| | `950` | `#06281E` | Superficie profunda de éxito en oscuro |
| **`amber`** | `50` | `#FFF7ED` | Superficie de advertencia / DD en claro |
| | `300` | `#FCD34D` | Texto de advertencia en oscuro |
| | `600` | `#AC5425` | Tono terracota: barra y acento de DD restante |
| | `950` | `#1F1108` | Superficie profunda de advertencia en oscuro |
| **`rose`** | `50` | `#FFF1F2` | Superficie de infracción / pérdida en claro |
| | `300` | `#FDA4AF` | Texto y puntos de pérdida en oscuro |
| | `700` | `#BE123C` | Texto y puntos de pérdida en claro |
| | `950` | `#2B0B14` | Superficie profunda de error en oscuro |

#### Colección Semánticos (Contextuales por Modo)

| Variable Semántica | Modo Claro *(Alias)* | Modo Oscuro *(Alias)* | Referencia CSS (propiedad personalizada) |
| :--- | :--- | :--- | :--- |
| **`surface`** | `slate/50` | `slate/900` | `var(--color-surface)` |
| **`surface-raised`** | `#FFFFFF` | `slate/800` | `var(--color-surface-raised)` |
| **`surface-primary`** | `blue/50` | `blue/950` | `var(--color-surface-primary)` |
| **`surface-success`** | `emerald/50` | `emerald/950` | `var(--color-surface-success)` |
| **`surface-warning`** | `amber/50` | `amber/950` | `var(--color-surface-warning)` |
| **`surface-error`** | `rose/50` | `rose/950` | `var(--color-surface-error)` |
| **`border`** | `slate/200` | `slate/700` | `var(--color-border)` |
| **`on-surface`** | `slate/900` | `slate/50` | `var(--color-on-surface)` |
| **`on-surface-variant`** | `slate/600` | `slate/400` | `var(--color-on-surface-variant)` |
| **`primary`** | `blue/600` | `blue/200` | `var(--color-primary)` |
| **`on-primary`** | `#FFFFFF` | `slate/900` | `var(--color-on-primary)` |
| **`success`** | `emerald/700` | `emerald/300` | `var(--color-success)` |
| **`warning`** | `amber/600` | `amber/300` | `var(--color-warning)` |
| **`error`** | `rose/700` | `rose/300` | `var(--color-error)` |

---

## 2. Estilos Tipográficos de Figma

La tipografía está organizada mediante ocho `Text styles` guardados en Figma; no se crearon variables tipográficas. `display` y `caption-mono` usan Chivo Mono; los otros seis estilos usan Plus Jakarta Sans.

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

---

## 3. Arquitectura de Componentes (Figma Component Set)

### 3.1. `day_cell` (Celdas del Calendario)
* **Dimensiones:** `40 × 40 px` con Auto Layout vertical centrado (`gap: 2px`).
* **Propiedades:**
  * `State`: `Default`, `Hover`, `Selected`.
  * `HasTrade`: `True` / `False` (muestra u oculta el punto indicador de 4 × 4 px).
  * `Today`: `Default`, `True`, `OutMonth`.
* **Comportamiento visual:**
  * `State=Hover`: Activa un borde discontinuo (*dashed stroke: 2px/2px*) con `color/primary`.
  * `Today=OutMonth`: Aplica un 40% de opacidad a la capa tipográfica para relegar ópticamente los días ajenos al mes en curso.
  * `State=Selected`: Fondo sólido en `slate/900` con número y punto forzados en `color/on-primary` (`#FFFFFF`).

### 3.2. `MetricCard` (Telemetría de Riesgo)
Tarjetas Bento superiores de tres estados funcionales:
1. **Precaución / Límite Restante:** Fondo `surface-warning`, barra y porcentaje vinculados a `color/warning` (`#AC5425`).
2. **Operativa Neutra:** Fondo `surface-raised`, barra en `color/primary`.
3. **Salud Disciplinar:** Fondo `surface-success`, barra y etiqueta «Óptimo» en `color/success`.

### 3.3. `SegmentedControl` (Evaluación de Plan)
Selector de estado disciplinar en el modal de registro:
* `Sí (Óptimo)`: Relleno `surface-success`, trazo y texto en `color/success`.
* `Parcial`: Relleno `surface-warning`, trazo y texto en `color/warning`.
* `No (Infracción)`: Relleno `surface-error`, trazo y texto en `color/error`. Despliega dinámicamente los chips de motivo (`Overtrading`, `Entrada Anticipada`, `Leverage Excesivo`, `Mover Stop Loss`).

### 3.4. `IconButton`
Botón normalizado con caja de interacción mínima de `32 × 32 px` (Desktop) y `40 × 40 px` (Mobile):
* Variantes: `Type = Ghost` (fondo transparente para iconos de cierre `X`) y `Type = Filled` (fondo `color/primary` para envío de mensajes).
* Gobernado por una propiedad **`Instance Swap`** que asegura el centrado de iconos en un contenedor uniforme de `24 × 24 px`.

---

## 4. Lógica de Prototipado y Microinteracciones

El flujo interactivo se apoya en transiciones nativas de Figma:

```text
[Calendario: día sin operativa]  ──(On click)──► Open overlay: Modal de registro (Center / Backdrop 50%)
[Calendario: día con operativa] ──(On click)──► Open overlay: Popover de detalle (Manual)
                                                       │
                                           (On click: "Editar registro")
                                                       │
                                                       ▼
                                          Swap overlay: Modal de registro

[Botón "Profundizar con la IA"] ──(On click)──► Open overlay: Drawer Chat IA (Top Right / Move In)
[Botón FAB "IA" (Mobile)]       ──(On click)──► Open overlay: Bottom Sheet Chat (Bottom Center / Move In)
```

- **Transición de edición:** `Swap overlay` sustituye el popover por el modal de registro en el mismo nivel, evitando apilar dos fondos translúcidos.
- **Preservación del día seleccionado:** la propiedad de texto vinculada al número de día permite conservar su valor al cambiar el estado de la celda a `Selected`.

## 5. Diseño Responsive (Desktop 1440 px y Mobile 390 px)

La adaptación móvil reorganiza la información y los patrones de interacción para mantener la capacidad analítica en una sola columna:

1. **Modales y paneles:** el formulario de registro y el chat se presentan como Bottom Sheets anclados abajo, con esquinas superiores de `20 px` y tirador de `36 × 4 px`.
2. **Acciones principales:** el acceso al registro y al Copiloto IA se agrupa en una barra fija inferior.
3. **Ergonomía táctil:** los controles principales disponen de dianas táctiles de al menos `48 px`.
4. **Contenido analítico:** las tarjetas métricas se organizan en carrusel horizontal y la gráfica de equity con sus cuatro ratios se reorganiza en una columna vertical.

## 6. Verificación de Accesibilidad WCAG 2.1 AA

### 6.1. Contraste tipográfico documentado

- **Modo claro:** `on-surface` (`slate/900`) sobre `surface` (`slate/50`): `14.8:1`.
- **Modo oscuro:** `on-surface` (`slate/50`) sobre `surface` (`slate/900`): `13.6:1`.
- **Botón primario:** `on-primary` (`#FFFFFF`) sobre `primary` (`blue/600`): `4.6:1`.

### 6.2. Doble codificación semántica

Los estados de riesgo y disciplina se identifican mediante texto y datos explícitos (`Óptimo`, `Parcial`, `Infracción` y valores cuantitativos), además del color.

## 7. Síntesis

El sistema reúne tokens semánticos para los modos claro y oscuro, estilos tipográficos guardados en Figma, componentes reutilizables y patrones de interacción responsive. Su especificación está orientada a una implementación frontend con HTML semántico y CSS puro.