import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import iconNoResults from '../img/icon-error.svg';
  
const gallery = document.querySelector(".gallery");
const loader = document.querySelector('.loader-container');

let modalBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});


export function galleryElemTemplate( image ) {
  const {
    webformatURL,
    largeImageURL,
    tags,
    likes,
    views, 
    comments,
    downloads,} = image;
    return `<li class="gallery-item">
      <a class="gallery-link" href="${largeImageURL}">
        <img
          class="thumb-image"
          src="${webformatURL}"
          data-source="${largeImageURL}"
          alt="${tags.slice(0, tags.indexOf(',') || tags.lehght - 1 )}"
        />
        <ul class="container">
          <li class="card-item">
            <h2 class="info-title">Likes</h2>
            <p class="info-data">${likes}</p>
          </li>
          <li class="card-item">
            <h2 class="info-title">Views</h2>
            <p class="info-data">${views}</p>
          </li>
          <li class="card-item">
            <h2 class="info-title">Comments</h2>
            <p class="info-data">${comments}</p>
          </li>
          <li class="card-item">
            <h2 class="info-title">Downloads</h2>
            <p class="info-data">${downloads}</p>
          </li>
        </ul>
      </a>
    </li>`;
}
  
export function galleryAllTemplate(images, pageNumber) {
  if ( pageNumber === 1 ) {
    gallery.innerHTML = '';
  }
  gallery.insertAdjacentHTML('beforeend', images.map(galleryElemTemplate).join(''));
  modalBox.refresh();
  hideLoader();
}


export function showLoader(){
  loader.classList.remove('hidden');
}

export function hideLoader(){
  loader.classList.add('hidden');
}


export function showMessage(message, color='#EF4040') {
  iziToast.show({
    position: 'topRight',
    message: message,
    messageSize: '16px',
    messageLineHeight: '24px',
    messageColor: 'white',
    iconUrl: iconNoResults,
    maxWidth: '390px',
    backgroundColor: color,
    closeOnClick: true,
    close: false,
  });
}