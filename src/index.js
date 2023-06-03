import "./pages/index.scss";

import initAnimation from "./scripts/animation.js";
import { Slider, InfiniteSlider } from "./scripts/slider.js";
import setSwitchers from "./scripts/switcher.js";
import {
  page,
  themeSwitchers,
  formFields,
  bicycleForm,
  sliders,
  menuButton,
  header,
  headerLinkBox,
  headerSwitcher,
  cardsContainer,
  pointBox,
} from "./scripts/contants.js";

initAnimation(processMenuClick);
setSwitchers(page, themeSwitchers);

const fieldsDesktop = Array.from(
  bicycleForm.querySelectorAll(".bicycle__type")
);

const fieldsMobile = Array.from(
  bicycleForm.querySelectorAll(".bicycle__selector-option")
);

const slides = Array.from(
  cardsContainer.querySelectorAll(".cards-container__slide")
);

bicycleForm.addEventListener("input", (evt) => {
  let selectedSlide;
  const mode = evt.target.classList.contains("bicycle__type")
    ? "desktop"
    : "mobile";
  if (mode === "desktop") {
    selectedSlide = fieldsDesktop.find((field) => {
      return field.checked;
    }).value;
  } else if (mode === "mobile") {
    selectedSlide = fieldsMobile.find((option) => {
      return option.selected;
    }).value;
  }

  slides.forEach((slide) => {
    if (slide.id === selectedSlide) {
      slide.classList.add("cards-container__slide_selected");
      highlightPoint(pointBox, 1);
      slide.style.translate = `0%`;
    } else {
      slide.classList.remove("cards-container__slide_selected");
    }

    if (mode === "desktop") {
      fieldsMobile.find((field) => {
        if (field.value === selectedSlide) {
          return field;
        }
      }).selected = true;
    } else if (mode === "mobile") {
      fieldsDesktop.find((field) => {
        if (field.value === selectedSlide) {
          return field;
        }
      }).checked = true;
    }
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

setInterval(() => {
  const activeSlide = document.querySelector(
    ".cards-container__slide_selected"
  );
  const mobileView =
    getComputedStyle(document.querySelector(".bicycle__selector_type_dropdown"))
      .display !== "none";

  if (mobileView) {
    const count = Array.from(
      activeSlide.querySelectorAll(".card__link")
    ).length;
    const currentSlide = getCurrentSlide(pointBox);
    const target = calculateTargetSlide(currentSlide, count);
    activeSlide.style.translate = `${((target - 1) * -100) / count}%`;
    highlightPoint(pointBox, target);
  } else {
    activeSlide.style.translate = "0%";
  }
}, 3000);

function highlightPoint(pointBox, n) {
  const points = Array.from(pointBox.querySelectorAll(".bicycle__point"));
  points.forEach((point, id) => {
    if (id + 1 === n) {
      point.classList.add("bicycle__point_selected");
    } else {
      point.classList.remove("bicycle__point_selected");
    }
  });
}

function calculateTargetSlide(currentSlide, TotalSlides) {
  let targetSlide;
  if (currentSlide === TotalSlides) {
    targetSlide = 1;
  } else {
    targetSlide = currentSlide + 1;
  }
  return targetSlide;
}

function getCurrentSlide(pointBox) {
  const points = Array.from(pointBox.querySelectorAll(".bicycle__point"));
  let currentId;
  points.some((point, id) => {
    if (point.classList.contains("bicycle__point_selected")) {
      currentId = id;
    }
  });
  return currentId + 1;
}
