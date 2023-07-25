const modalBtn = document.querySelector(".modal-btn");
const modalBg = document.querySelector(".modal-bg");
const cancelBtn = document.querySelector(".cancelBtn");

modalBtn.addEventListener("click", () => {
  modalBg.classList.add("bg-active");
});
cancelBtn.addEventListener("click", () => {
  modalBg.classList.remove("bg-active");
});
