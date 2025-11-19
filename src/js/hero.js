const heroForm = document.querySelector('.hero-form');

heroForm.addEventListener('submit', e => {
  e.preventDefault();

  const heroEmail = e.target.elements.email.value.trim();

  if (heroEmail === '') {
    alert('Введите ваш e-mail');
    return;
  }

  alert(`Ваш e-mail: ${heroEmail}`);

  heroForm.reset();
});
