let navHeader = document.querySelector('.nav');
let navButton = document.querySelector('.nav__button-header');

navHeader.classList.remove('nav--nojs');

navButton.addEventListener('click', function () {
  if (navHeader.classList.contains('nav--closed')) {
    navHeader.classList.remove('nav--closed');
    navHeader.classList.add('nav--opened');
  } else {
    navHeader.classList.add('nav--closed');
    navHeader.classList.remove('nav--opened');
  }
});
