import { cuentas, diasCalendario, sesiones } from './datos.js';
import {
  configurarDialogo,
  configurarMenu,
  pintarCalendario,
  pintarListadoSesiones,
  pintarRendimiento,
  pintarResumenDashboard
} from './ui.js';

document.addEventListener('DOMContentLoaded', function () {
  configurarMenu();
  configurarDialogo();

  pintarResumenDashboard(sesiones, cuentas);
  pintarCalendario(diasCalendario, sesiones, cuentas);
  pintarRendimiento(sesiones);
  pintarListadoSesiones(sesiones, cuentas);
});