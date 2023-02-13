import { galleryItems } from './gallery-items.js';
// Change code below this line



const galleryRef = document.querySelector('.gallery');

const imagesList = galleryItems.map(
    ({ preview, original, description }) => {
        return `
  <li><a class="gallery__item" href="${original}">
      <img src="${preview}" alt="${description}" class="gallery__image">
     </a></li>`
    }).join("");
    

  galleryRef.insertAdjacentHTML("afterbegin", imagesList) 
console.log(imagesList);



new SimpleLightbox('.gallery__item', { 
    captionsData: "alt",
    captionDelay: 250,
})