function buscarCuenta(cuentas, cuentaId) {
  return cuentas.find(function (c) {
    return c.id === cuentaId;
  });
}

export function abrirDetalleSesion(sesion, cuentas) {
  const dialog = document.querySelector('#detail-dialog');
  const contenido = document.querySelector('#contenido-popup');
  const cuenta = buscarCuenta(cuentas, sesion.cuentaId);

  contenido.textContent = '';

  const lista = document.createElement('dl');
  lista.classList.add('detail-list');

  const campos = [
    { etiqueta: 'Fecha', valor: sesion.fecha },
    {
      etiqueta: 'Cuenta operada',
      valor: cuenta
        ? cuenta.nombre + ' (Límite: ' + cuenta.limiteDiario + ' € · DD: ' + cuenta.drawdownMax + '%)'
        : 'Sin cuenta'
    },
    { etiqueta: 'Resultado neto', valor: sesion.resultado },
    { etiqueta: 'Estado del plan', valor: sesion.dentroPlan ? 'Dentro del plan' : 'Con infracción' },
    { etiqueta: 'Infracciones', valor: String(sesion.infracciones) },
    { etiqueta: 'Notas de sesión', valor: sesion.resumen }
  ];

  campos.forEach(function (campo) {
    const dt = document.createElement('dt');
    dt.textContent = campo.etiqueta;

    const dd = document.createElement('dd');
    dd.textContent = campo.valor;

    lista.appendChild(dt);
    lista.appendChild(dd);
  });

  contenido.appendChild(lista);
  dialog.showModal();
}

export function pintarResumenDashboard(listaSesiones, listaCuentas) {
  const contenedor = document.querySelector('#resumen-metricas');
  contenedor.textContent = '';

  const cuentaPrincipal = listaCuentas[0];
  const ddRestante = (cuentaPrincipal.drawdownMax - 2.7).toFixed(1) + '%';

  const totalSesiones = listaSesiones.length;
  const dentroPlan = listaSesiones.filter(function (s) {
    return s.dentroPlan;
  }).length;

  const tarjetas = [
    {
      etiqueta: 'DRAWDOWN MÁXIMO RESTANTE',
      valor: ddRestante,
      ayuda: 'Margen de colchón antes de bloqueo: 2.7 €',
      modificador: 'metric-card--warning'
    },
    {
      etiqueta: 'LÍMITE DE PÉRDIDA DIARIA (DAILY DD)',
      valor: cuentaPrincipal.limiteDiario + ' €',
      ayuda: 'Límite operativo seguro respetado hoy',
      modificador: ''
    },
    {
      etiqueta: 'ESTADO DISCIPLINAR & PLAN',
      valor: dentroPlan >= totalSesiones / 2 ? 'Óptimo' : 'En riesgo',
      ayuda: dentroPlan + ' de ' + totalSesiones + ' operaciones dentro del plan',
      modificador: 'metric-card--success'
    }
  ];

  tarjetas.forEach(function (item) {
    const li = document.createElement('li');
    const article = document.createElement('article');
    article.classList.add('metric-card', 'o-stack');

    if (item.modificador) {
      article.classList.add(item.modificador);
    }

    const pEtiqueta = document.createElement('p');
    pEtiqueta.classList.add('metric-card__label');
    pEtiqueta.textContent = item.etiqueta;

    const pValor = document.createElement('p');
    pValor.classList.add('metric-card__value');
    pValor.textContent = item.valor;

    const pAyuda = document.createElement('p');
    pAyuda.classList.add('metric-card__meta');
    pAyuda.textContent = item.ayuda;

    article.appendChild(pEtiqueta);
    article.appendChild(pValor);
    article.appendChild(pAyuda);
    li.appendChild(article);
    contenedor.appendChild(li);
  });
}

export function pintarCalendario(diasCalendario, listaSesiones, listaCuentas) {
  const contenedor = document.querySelector('#calendario-dias');
  contenedor.textContent = '';

  diasCalendario.forEach(function (item) {
    const sesionDia = listaSesiones.find(function (s) {
      return s.dia === item.dia;
    });

    if (item.conSesion && sesionDia) {
      const boton = document.createElement('button');
      boton.type = 'button';
      boton.classList.add('day-cell', 'day-cell--has-trade');
      boton.textContent = String(item.dia);
      boton.setAttribute('aria-label', 'Ver sesión del día ' + item.dia);

      boton.addEventListener('click', function () {
        abrirDetalleSesion(sesionDia, listaCuentas);
      });

      contenedor.appendChild(boton);
    } else {
      const celda = document.createElement('span');
      celda.classList.add('day-cell');
      celda.textContent = String(item.dia);
      contenedor.appendChild(celda);
    }
  });
}

export function pintarRendimiento(listaSesiones) {
  const contenedor = document.querySelector('#resumen-rendimiento');
  contenedor.textContent = '';

  const ganadoras = listaSesiones.filter(function (s) {
    return s.resultado.startsWith('+');
  }).length;
  const winRate = Math.round((ganadoras / listaSesiones.length) * 100);

  const resumen = document.createElement('p');
  resumen.classList.add('metric-card__value');
  resumen.textContent = '+7.0R';

  const detalle = document.createElement('p');
  detalle.classList.add('card__meta');
  detalle.textContent = 'Tasa de acierto (Win Rate): ' + winRate + '% en ' + listaSesiones.length + ' sesiones.';

  contenedor.appendChild(resumen);
  contenedor.appendChild(detalle);
}

export function pintarListadoSesiones(listaSesiones, listaCuentas) {
  const contenedor = document.querySelector('#listado-sesiones');
  contenedor.textContent = '';

  listaSesiones.forEach(function (sesion) {
    const cuenta = buscarCuenta(listaCuentas, sesion.cuentaId);

    const li = document.createElement('li');
    const article = document.createElement('article');
    article.classList.add('card', 'o-stack');

    const header = document.createElement('header');
    header.classList.add('card__header');

    const titulo = document.createElement('h3');
    titulo.classList.add('card__title');
    titulo.textContent = 'Sesión · ' + sesion.fecha;

    const badge = document.createElement('span');
    badge.classList.add('badge', sesion.dentroPlan ? 'badge--success' : 'badge--warning');
    badge.textContent = sesion.resultado;

    header.appendChild(titulo);
    header.appendChild(badge);

    const pCuenta = document.createElement('p');
    pCuenta.classList.add('card__account');
    pCuenta.textContent = cuenta ? cuenta.nombre : 'Sin cuenta';

    const pMeta = document.createElement('p');
    pMeta.classList.add('card__meta');
    pMeta.textContent = sesion.resumen;

    const boton = document.createElement('button');
    boton.type = 'button';
    boton.classList.add('button', 'button--secondary', 'card__action');
    boton.textContent = 'Ver ficha completa';

    boton.addEventListener('click', function () {
      abrirDetalleSesion(sesion, listaCuentas);
    });

    article.appendChild(header);
    article.appendChild(pCuenta);
    article.appendChild(pMeta);
    article.appendChild(boton);
    li.appendChild(article);
    contenedor.appendChild(li);
  });
}

export function configurarMenu() {
  const disparadores = document.querySelectorAll('[data-seccion]');
  const enlacesNav = document.querySelectorAll('.main-nav__link');
  const secciones = document.querySelectorAll('.view');

  disparadores.forEach(function (elemento) {
    elemento.addEventListener('click', function (evento) {
      evento.preventDefault();
      const destinoId = elemento.getAttribute('data-seccion');

      enlacesNav.forEach(function (enlace) {
        if (enlace.getAttribute('data-seccion') === destinoId) {
          enlace.setAttribute('aria-current', 'page');
        } else {
          enlace.removeAttribute('aria-current');
        }
      });

      secciones.forEach(function (sec) {
        sec.hidden = sec.id !== destinoId;
      });
    });
  });
}

export function configurarDialogo() {
  const dialog = document.querySelector('#detail-dialog');
  const btnCerrar = document.querySelector('#cerrar-popup');

  btnCerrar.addEventListener('click', function () {
    dialog.close();
  });

  dialog.addEventListener('click', function (evento) {
    if (evento.target === dialog) {
      dialog.close();
    }
  });
}