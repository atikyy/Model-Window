"use strict";

const btn = document.querySelectorAll(".btn");
const modal = document.querySelector(".window");
const overlay = document.querySelector(".overlaydark");
const close = document.querySelector(".close");

/* for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    console.log("clicked");
  });
}
 */

/* const showModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btn.forEach(function (element) {
  element.addEventListener("click", () => {
    showModal();
  });
});

overlay.addEventListener("click", () => {
  closeModal();
});
 */

const showModal = function (obj) {
  obj.addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
};

const closeModal = function (obj) {
  obj.addEventListener("click", function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  });
};

btn.forEach(function (element) {
  showModal(element);
});

closeModal(overlay);

closeModal(close);

document.addEventListener("keydown", function (e) {
  const pressed = e.key;
  console.log(pressed);
  if (!modal.classList.contains("hidden") && pressed === "Escape") {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }
});
