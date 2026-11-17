export const cuentas = [
  { id: 1, nombre: 'Cuenta Principal', limiteDiario: 500, drawdownMax: 10 },
  { id: 2, nombre: 'Cuenta Prácticas', limiteDiario: 300, drawdownMax: 8 }
];

export const sesiones = [
  { id: 1, fecha: '2026-10-01', dia: 1, cuentaId: 1, resultado: '+1.5R', dentroPlan: true, infracciones: 0, resumen: 'Apertura limpia respetando el stop.' },
  { id: 2, fecha: '2026-10-02', dia: 2, cuentaId: 1, resultado: '+2.0R', dentroPlan: true, infracciones: 0, resumen: 'Buena gestión del objetivo.' },
  { id: 3, fecha: '2026-10-05', dia: 5, cuentaId: 1, resultado: '-1.0R', dentroPlan: true, infracciones: 0, resumen: 'Pérdida controlada dentro del riesgo.' },
  { id: 4, fecha: '2026-10-07', dia: 7, cuentaId: 1, resultado: '+1.8R', dentroPlan: true, infracciones: 0, resumen: 'Sesión constante en sesión de Londres.' },
  { id: 5, fecha: '2026-10-09', dia: 9, cuentaId: 1, resultado: '+0.8R', dentroPlan: false, infracciones: 1, resumen: 'Cierre anticipado tras volatilidad inicial.' },
  { id: 6, fecha: '2026-10-12', dia: 12, cuentaId: 1, resultado: '+2.2R', dentroPlan: true, infracciones: 0, resumen: 'Jornada excelente dentro del plan.' },
  { id: 7, fecha: '2026-10-14', dia: 14, cuentaId: 2, resultado: '-0.5R', dentroPlan: true, infracciones: 0, resumen: 'Pocas entradas y disciplina correcta.' },
  { id: 8, fecha: '2026-10-16', dia: 16, cuentaId: 2, resultado: '+1.2R', dentroPlan: true, infracciones: 0, resumen: 'Ejecución calmada sin sobreoperar.' },
  { id: 9, fecha: '2026-10-19', dia: 19, cuentaId: 1, resultado: '+1.0R', dentroPlan: true, infracciones: 0, resumen: 'Buen control emocional en sesión.' },
  { id: 10, fecha: '2026-10-21', dia: 21, cuentaId: 2, resultado: '-1.0R', dentroPlan: false, infracciones: 1, resumen: 'Entrada impulsiva tras noticia.' }
];

export const diasCalendario = [
  { dia: 1, conSesion: true }, { dia: 2, conSesion: true }, { dia: 3, conSesion: false },
  { dia: 4, conSesion: false }, { dia: 5, conSesion: true }, { dia: 6, conSesion: false },
  { dia: 7, conSesion: true }, { dia: 8, conSesion: false }, { dia: 9, conSesion: true },
  { dia: 10, conSesion: false }, { dia: 11, conSesion: false }, { dia: 12, conSesion: true },
  { dia: 13, conSesion: false }, { dia: 14, conSesion: true }, { dia: 15, conSesion: false },
  { dia: 16, conSesion: true }, { dia: 17, conSesion: false }, { dia: 18, conSesion: false },
  { dia: 19, conSesion: true }, { dia: 20, conSesion: false }, { dia: 21, conSesion: true },
  { dia: 22, conSesion: false }, { dia: 23, conSesion: false }, { dia: 24, conSesion: false },
  { dia: 25, conSesion: false }, { dia: 26, conSesion: false }, { dia: 27, conSesion: false },
  { dia: 28, conSesion: false }, { dia: 29, conSesion: false }, { dia: 30, conSesion: false },
  { dia: 31, conSesion: false }
];