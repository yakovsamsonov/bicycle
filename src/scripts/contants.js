export const page = document.querySelector(".page");

export const themeSwitchers = Array.from(
  document.querySelectorAll(".theme-switcher")
);

const emailForm = document.forms["email"];
export const bicycleForm = document.forms["bicycle"];

export const formFields = Array.from(emailForm.querySelectorAll(".form-field"));

export const sliders = Array.from(document.querySelectorAll(".slider"));

export const menuButton = document.querySelector(".header__menu");
export const header = document.querySelector(".header");
export const headerLinkBox = header.querySelector(".header__link-box");
export const headerSwitcher = header.querySelector(".header__switcher");

export const cardsContainer = document.querySelector(".cards-container");

export const pointBox = document.querySelector(".bicycle__points-box");
