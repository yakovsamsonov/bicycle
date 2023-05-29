import "./pages/index.scss";

import initAnimation from "./scripts/animation.js";

console.log("Hello!");

initAnimation();

const themeSwitcher = document.querySelector(".theme-switcher");

themeSwitcher.addEventListener("click", (evt) => {
  const bubble = evt.currentTarget.querySelector(".theme-switcher__bubble");
  bubble.style.setProperty("pointer-events", "none");
  bubble.classList.toggle("theme-switcher__bubble_type_right");
  bubble.style.setProperty("pointer-events", "auto");
});

const emailForm = document.forms["email"];

const formFields = Array.from(emailForm.querySelectorAll(".form-field"));

formFields.forEach((field) => {
  field.addEventListener("input", () => {
    checkFieldValidity(field);
  });
});

function checkFieldValidity(field) {
  if (field.validity.valid) {
    field.nextElementSibling.classList.add("footer__form-field-label_visible");
  } else {
    field.nextElementSibling.classList.remove(
      "footer__form-field-label_visible"
    );
  }
}
