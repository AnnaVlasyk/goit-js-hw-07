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

gallery.addEventListener("click", openGalleryModal);
function openGalleryModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
    
  const currentImg = event.target;
  console.log(currentImg);
  const currentLink = currentImg.dataset.source;
  const instance = basicLightbox.create(
    `<img width="800" height="600" src="${currentLink}">`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", closeModal);
      },
      
      onClose: (instance) => {
        document.removeEventListener("keydown", closeModal);
      },
    }
  );

  instance.show();
  
  function closeModal(event) {
    event.preventDefault();
    if (event.key === "Escape") {
      console.log("closed");
      const imageToClose = document.querySelector(".basicLightbox--img");
      document.removeEventListener("keydown", closeModal);
      imageToClose.classList.remove("basicLightbox--visible");

      setTimeout(() => {
        imageToClose.parentElement.removeChild(imageToClose);
      }, 300);
      instance.close();
    }
  }
  
}