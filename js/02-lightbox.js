import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
gallery.innerHTML = galleryItems
    .map(({ preview, original, description }) =>
    `<div class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</div>`
)
    .join("");

new SimpleLightbox(".gallery a", {
  captions: true,
  captionDelay: 300,
  captionsData: "alt",
  captionPosition: "bottom",
  showCounter: false,
});