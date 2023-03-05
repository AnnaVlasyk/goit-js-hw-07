import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
gallery.innerHTML = galleryItems
  .map(
    ({ preview, original, description }) =>
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
function openGalleryModal(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const currentImg = e.target;
  console.log(currentImg);
  const currentLink = currentImg.dataset.source;
  const instance = basicLightbox.create(
    `<img width="1200" height="900" src="${currentLink}">`,
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
  
  function closeModal(e) {
    e.preventDefault();
    if (e.key === "Escape") {
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