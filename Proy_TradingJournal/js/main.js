function configurarMenuBasico() {
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

document.addEventListener('DOMContentLoaded', function () {
  configurarMenuBasico();
});