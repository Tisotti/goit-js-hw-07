import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listGallery = document.querySelector(".gallery");
const createImg = createImageGallery(galleryItems);

listGallery.insertAdjacentHTML("beforeend", createImg);

listGallery.addEventListener("click", galleryModalOpenClose);

function createImageGallery(itemList) {
  return itemList
    .map(({ preview, original, description }) => {
      return `<a class="gallery__link" href="${original}">
          <img
          
            class="gallery__image"
           src="${preview}"
             data-source="${original}"
            alt="${description}"
          />
         </a>`;
    })
    .join("");
}

const onEscClick = function (event) {
  if (event.code === "Escape") {
    instance.close();
    return;
  }
};

function galleryModalOpenClose(event) {
  event.preventDefault();

  const imageClickEl = event.target.classList.contains("gallery__image");
  if (!imageClickEl) {
    return;
  }
  const instance = basicLightbox.create(`
      <img src='${event.target.dataset.source}'
      />`,
    {
      onShow: instance => {window.addEventListener('keydown', onEscClick);},
      onClose: instance => {window.removeEventListener('keydown', onEscClick);},
    });
  
  instance.show();
}
