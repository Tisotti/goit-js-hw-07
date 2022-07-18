import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listGallery = document.querySelector(".gallery");

const createImg = createImageGallery(galleryItems);

listGallery.insertAdjacentHTML("beforeend", createImg);

function createImageGallery(itemList) {
  return itemList
    .map(({ preview, original, description }) => {
      return ` <a class="gallery__item" href="${original}">
  
      <img class="gallery__image"
   src="${preview}"
    alt="${description}" />
</a>`;
    })
    .join("");
}
new SimpleLightbox(".gallery a", {
  captionSelector: "img",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});










