const aboutForm = document.querySelector('.about-form-try');

aboutForm.addEventListener('submit', e => {
  e.preventDefault();

  const aboutEmail = e.target.elements.email.value.trim();

  if (aboutEmail === '') {
    alert('Введите ваш e-mail');
    return;
  }

  alert(`Ваш e-mail: ${aboutEmail}`);

  aboutForm.reset();
});
