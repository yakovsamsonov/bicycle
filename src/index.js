import "./pages/index.scss";

import initAnimation from "./scripts/animation.js";
import { Slider, InfiniteSlider } from "./scripts/slider.js";
import {
  themeSwitchers,
  formFields,
  sliders,
  menuButton,
  header,
  headerLinkBox,
  headerSwitcher,
} from "./scripts/contants.js";

initAnimation(processMenuClick);

themeSwitchers.forEach((switcher) => {
  switcher.addEventListener("click", (evt) => {
    const bubble = evt.currentTarget.querySelector(".theme-switcher__bubble");
    bubble.style.setProperty("pointer-events", "none");
    bubble.classList.toggle("theme-switcher__bubble_type_right");
    bubble.style.setProperty("pointer-events", "auto");
  });
});

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

sliders.forEach((el) => {
  let slider;
  const sliderParams = {
    sliderContainer: el.querySelector(".slider__container"),
    controlContainer: el.querySelector(".slider__control"),
    labelContainer: el.querySelector(".slider__label"),
  };
  if (el.classList.contains("slider_infinite")) {
    slider = new InfiniteSlider(sliderParams);
  } else {
    slider = new Slider(sliderParams);
  }
  slider.initiate();
});

menuButton.addEventListener("click", (evt) => {
  processMenuClick(evt.target);
});

function processMenuClick(button) {
  button.style.setProperty("disabled", true);
  if (button.classList.contains("header__menu_closed")) {
    header.style.setProperty("height", "unset");
    button.classList.remove("header__menu_closed");
    headerLinkBox.classList.remove("header__link-box_visible");
    headerSwitcher.classList.remove("header__switcher_visible");
  } else {
    header.style.setProperty("height", "100vh");
    button.classList.add("header__menu_closed");
    headerLinkBox.classList.add("header__link-box_visible");
    headerSwitcher.classList.add("header__switcher_visible");
  }
  button.style.removeProperty("disabled");
}
