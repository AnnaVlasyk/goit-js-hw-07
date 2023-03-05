import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
gallery.innerHTML = galleryItems
  .map(
    ({ preview, original, description }) =>
      `
  <a class="gallery__item" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      alt=${description}
    />
  </a>`
  )
  .join("");
  
new SimpleLightbox(".gallery a", {
  captions: true,
  captionDelay: 300,
  captionsData: "alt",
  captionPosition: "bottom",
  showCounter: false,
});