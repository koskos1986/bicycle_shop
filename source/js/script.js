'use strict';
(function () {
  const header = document.querySelector('.header');
  const leadMenu = document.querySelector('.lead');

  const openButton = leadMenu.querySelector(`.lead__btn--open`);
  const closeButton = header.querySelector(`.header__button--close`);

  header.classList.remove('header--nojs');

  let menuToggle = function (evt) {
    if (evt.target === openButton) {
      header.classList.remove('header--close');
      header.classList.add('header--open');
    }

    if (evt.target === closeButton) {
      header.classList.add('header--close');
      header.classList.remove('header--open');
    }
  };

  document.addEventListener('click', menuToggle);
})();
