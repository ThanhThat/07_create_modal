const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btnOpenModal = $(".btn-open-modal");
const overlayElem = $(".overlay");

btnOpenModal.addEventListener("click", openModal);
$(".modal-close").addEventListener("click", closeModal);
$(".btn-close").addEventListener("click", closeModal);
overlayElem.addEventListener("click", closeModal);

function openModal() {
  overlayElem.classList.add("open");
}

function closeModal(e) {
  e.preventDefault();

  if (e.target.closest(".modal-close")) {
    overlayElem.classList.remove("open");
  }
  if (e.target === e.currentTarget) {
    overlayElem.classList.remove("open");
  }
}
