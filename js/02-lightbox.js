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
var lightbox = new SimpleLightbox(".gallery", {
  navText: ["&#11178;", "&#11179;"],
  captions: true,
  captionDelay: 300,
  captionSelector: "img",
  captionType: "attr",
  captionsData: "alt",
  captionPosition: "bottom",
  captionClass: "",
  closeText: "&#10803",
  showCounter: false,
});