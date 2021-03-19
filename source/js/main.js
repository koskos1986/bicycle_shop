'use strict';
(function () {
  var header = document.querySelector('.header');
  var leadMenu = document.querySelector('.lead');

  var openButton = leadMenu.querySelector('.lead__button--open');
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

/*
(function() {
  import smoothscroll from 'smoothscroll-polyfill';

// kick off the polyfill!
  smoothscroll.polyfill();
  document.querySelector('.nav__link').scrollIntoView({ behavior: 'smooth' });
})();

(function () {
  import IMask from 'imask';
  var element = document.getElementById('tel');
  var maskOptions = {
    mask: '+{7}(000)000-00-00'
  };
  var mask = IMask(element, maskOptions);
})(); */
