import showGallary from './js/pixabay-api';
import { hideLoader, showLoader, showMessage, galleryAllTemplate } from './js/render-functions';

const refs = {
  form: document.querySelector('form'),
  input: document.querySelector('#search-text'),
  loadMore: document.querySelector('.load-more'),
}

let pageNumber = 1;
let userInput = '';
const message = 'Sorry, there are no images matching your search query. Please try again!';
const noMoreMessage = "We're sorry, but you've reached the end of search results.";



refs.form.addEventListener('submit', getBeautifulPictures);
refs.loadMore.addEventListener('click', getMorePages);


async function getBeautifulPictures(e) {
  e.preventDefault();

  const searchText = refs.input.value;
  pageNumber = 1;
  refs.loadMore.classList.add('hidden');

  if (!searchText.trim()) {
    showMessage("We're sorry, but we have no search results.");
    refs.input.value = '';
    hideLoader();
    return;
  }

  userInput = searchText;
  refs.input.value = ''; 
  showLoader();


  try{
    const { data: { hits, totalHits } }= await showGallary(searchText, pageNumber);
    
    if (hits.length !== 0) {
      renderResults(hits);
      if (hits.length < totalHits) {
        refs.loadMore.classList.remove('hidden');
      }
    } else {
      showMessage("We're sorry, but we have no search results.");
      hideLoader();
    }
  } catch (error) {
      hideLoader();
      showMessage(message);
      console.log(error);
  }
}


async function getMorePages (e) {
  e.preventDefault();
  pageNumber += 1;
  refs.loadMore.classList.add('hidden');
  showLoader();
  try{
    const { data: { hits, totalHits } } = await showGallary(userInput, pageNumber);
//    const totalPages = Math.ceil(totalHits / 40);
    if (hits.length !== 0) {
      renderResults(hits);
      doScroll ();
      if (pageNumber * 40 <= totalHits) {
        refs.loadMore.classList.remove('hidden');
      } else { 
        showMessage(noMoreMessage, '#76affa');
      }
    } else {
      showMessage(noMoreMessage, '#76affa');
      hideLoader();
      refs.loadMore.classList.add('hidden');
    }
  } catch (error) {
      hideLoader();
      showMessage(message);
      console.log(error);
  }
}


function renderResults(images) {
  if (!images.length) {
    hideLoader();
    showMessage(noMoreMessage, '#76affa');
    return;
  }
  
  galleryAllTemplate(images, pageNumber);
}

function doScroll () {
  const pictureElem = document.querySelector('.gallery-item');
  const cardHeight = pictureElem.getBoundingClientRect().height;
  window.scrollBy({ top: cardHeight * 2, behavior: 'smooth' });
}

