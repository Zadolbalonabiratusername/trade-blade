const spotItem = document.querySelector('.spot-item');
const futuresItem = document.querySelector('.futures-item');
const spotLink = document.querySelector('.spot-link');
const futuresLink = document.querySelector('.futures-link');

spotItem.classList.add('active');
spotLink.classList.add('active');

futuresLink.addEventListener('click', () => {
  spotItem.classList.remove('active');
  futuresItem.classList.add('active');
  spotLink.classList.remove('active');
  futuresLink.classList.add('active');
});

spotLink.addEventListener('click', () => {
  spotItem.classList.add('active');
  futuresItem.classList.remove('active');
  spotLink.classList.add('active');
  futuresLink.classList.remove('active');
});
