import { galleryItems } from './gallery-items.js';
// Change code below this line



const galleryRef = document.querySelector('.gallery');

const imagesList = galleryItems.map(
    ({ preview, original, description }) => {
        return `
  <div class="gallery__item">
  <a class="gallery__link" href="${original}" >
  <img class="gallery__image"
  src="${preview}"
  data-source="${original}"
  alt ="${description}"

/>
  </a>
  </div>`
}).join("");



galleryRef.insertAdjacentHTML("afterbegin", imagesList) 
console.log(imagesList);


galleryRef.addEventListener('click', onButtonClick);

function onButtonClick(event) {
  event.preventDefault();
  if (!event.target.dataset.source)
    return;
  console.log(event.target);
  
  const instance = basicLightbox.create(
   
    `<img src="${event.target.dataset.source}" width="1400" height="900"/>`, {
    onShow: (instance) => {
      window.addEventListener("keydown", onCloseModal);
    },
    onClose: (instance) => {
      window.removeEventListener("keydown", onCloseModal);
    }
  }
  )
  instance.show();

  function onCloseModal(event) {
    if (event.code === `Escape`)
      instance.close()
  }
  
}



