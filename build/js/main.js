'use strict';
(function () {
  const header = document.querySelector('.header');
  const leadMenu = document.querySelector('.lead');

  const openButton = leadMenu.querySelector('.lead__button--open');
  const closeButton = header.querySelector('.header__button--close');

  header.classList.remove('header--nojs');
  header.classList.add('header--close');

  const menuToggle = function (evt) {
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

(function () {
  const links = document.querySelectorAll('a[href^="#"]');
  for (const link of links) {
    function handleButtonClick(event) {
    event.preventDefault();
      const id = link.getAttribute('href');
      document.querySelector(id).scrollIntoView({behavior: 'smooth'});
    }
      link.addEventListener('click', handleButtonClick);
  };
}());

(function () {
  const inputElement = document.querySelector('input[type=tel]');
  const maskOptions = {
    mask: '+{7}(000)000-00-00'
  };
  IMask(inputElement, maskOptions);
})();
