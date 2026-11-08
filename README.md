# Trading Journal MVP — Diseñar para que funcione

Proyecto de Diseño de Interfaces Web centrado en la investigación UX, conceptualización y desarrollo de un **Sistema de Diseño en Alta Fidelidad** (Desktop 1440px y Mobile 390px) para un diario de trading interactivo con contención emocional y telemetría de riesgo cuantitativo.

---

## Enlaces del Proyecto

### Documentación en el Repositorio
- **[Brief del Proyecto (BRIEF.md)](./BRIEF.md):** Definición del problema, MVP, Personas, Criterios de Éxito y Restricciones.
- **[Memoria Técnica de Entrega — Órbita 2 (orbita2.md)](./orbita2.md):** Informe de cumplimiento de la fase, correspondencia semántica con HTML5 y justificación de decisiones.
- **[Manual del Sistema de Diseño (docs/DESIGN_SYSTEM.md)](./docs/DESIGN_SYSTEM.md):** Especificación completa de Bento UI, variables semánticas (Light/Dark), tipografía y componentes.
- **[Registro de IA (CHANGELOG.md)](./CHANGELOG.md):** Bitácora de trazabilidad de decisiones críticas, descartes y uso de herramientas de IA (Stitch y LLMs).

### Enlaces de Figma
- **[Tablero FigJam (Investigación UX)](https://www.figma.com/board/dWNYzkbP6n2Ewx8gasyJRN/IDEAS-PROYECTO?node-id=0-1&t=CzQRwoKiO5QsaMLA-1):** Benchmarking, User Personas, Sitemap y flujos de usuario.
- **[Archivo de Diseño Figma (Editable)](https://www.figma.com/design/InkqDFHy6hAA3bG8WeDyQc/Interfaz-Web-del-proyecto?node-id=0-1&t=qIgXegNIgHRwRK9Z-1):** Espacio de trabajo estructurado en 5 páginas (Portada, Guía de estilo, Componentes, Wireframes y Mockups).
- **[Prototipo Interactivo en Alta Fidelidad (Modo Play)](https://www.figma.com/proto/InkqDFHy6hAA3bG8WeDyQc/Interfaz-Web-del-proyecto?node-id=141-43&t=pXAm1Y59kNTLBxuQ-1):** Visualización interactiva con Happy Path, modales y Bottom Sheets.

---

## Fases y Entregables del Proyecto

### Órbita 1: Investigación UX y Conceptualización (Completada)
- Análisis de referentes del sector fintech/trading y extracción de insights operativos.
- Definición de User Personas y mapa de empatía para perfiles de escritorio y móvil.
- Arquitectura de la información (Sitemap estructurado con categorización de Overlays).
- User Flow con tratamiento de casos límite (infracciones, desvíos de plan) y divulgación progresiva.
- Prototipo funcional interactivo en escala de grises (Wireframes de baja fidelidad).

### Órbita 2: Sistema de Diseño y Mockups en Alta Fidelidad (Fase Actual)
- **Lenguaje Visual Bento UI Analítico:** Distribución modular asimétrica con microbordes de 1 px y descarte justificado de modas no accesibles (Neumorfismo y Glassmorfismo puro).
- **Arquitectura de Variables y Tokens:** Dos colecciones desacopladas en Figma (36 Primitivos y 15 Semánticos) con soporte nativo e instantáneo para **Modo Claro** y **Modo Oscuro**.
- **Estilos Tipográficos de Figma:** Ocho `Text styles` guardados (`heading-1`, `heading-2`, `heading-3`, `body`, `label`, `display`, `caption-mono` y `caption`); no se crearon variables tipográficas.
- **Biblioteca de Componentes Maestros:** Componentes parametrizados en Auto Layout (`day_cell`, `MetricCard`, `IconButton` con *Instance Swap*, `SegmentedControl` con variantes de estado).
- **Paridad y Ergonomía Responsive:** Adaptación completa del *Happy Path* desde Desktop (`1440 px`) hasta Mobile (`390 px`) mediante Bottom Sheets anclados abajo, barra fija inferior (FAB) y dianas táctiles mínimas de 48 px.
- **Validación de Accesibilidad:** Cumplimiento de estándares WCAG 2.1 / 2.2 AA con contrastes superiores a 4.5:1 en texto y doble codificación semántica independiente del color.
