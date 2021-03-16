'use strict';
(function () {
  var header = document.querySelector('.header');
  var leadMenu = document.querySelector('.lead');

  var openButton = leadMenu.querySelector('.lead__btn--open');
  var closeButton = header.querySelector('.header__button--close');

  header.classList.remove('header--nojs');
  header.classList.add('header--close');

  var menuToggle = function (evt) {
    if (evt.target === openButton) {
      header.classList.toggle('header--close');
      header.classList.toggle('header--open');
    }

    if (evt.target === closeButton) {
      header.classList.toggle('header--close');
      header.classList.toggle('header--open');
    }
  };

  document.addEventListener('click', menuToggle);
})();
