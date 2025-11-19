const openBtn = document.querySelector('.burger-btn');
const closeBtn = document.querySelector('.mobile-close-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuItem = document.querySelector(
  '.mobile-nav-link',
  '.mobile-ligin-link'
);

openBtn.addEventListener('click', () => mobileMenu.classList.add('is-open'));

closeBtn.addEventListener('click', () =>
  mobileMenu.classList.remove('is-open')
);

mobileMenuItem.addEventListener('click', () =>
  mobileMenu.classList.remove('is-open')
);
