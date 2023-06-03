export default function setSwitchers(page, themeSwitchers) {
  themeSwitchers.forEach((switcher) => {
    switcher.addEventListener("click", (evt) => {
      const bubble = evt.currentTarget.querySelector(".theme-switcher__bubble");
      bubble.style.setProperty("pointer-events", "none");
      bubble.classList.toggle("theme-switcher__bubble_type_right");
      if (bubble.classList.contains("theme-switcher__bubble_type_right")) {
        // dark theme
        page.style.setProperty("--mainBackgroundColor", "#333333");
        page.style.setProperty("--secondBackgroundColor", "#2f2f2f");
        page.style.setProperty("--buttonColor", "#434343");
        page.style.setProperty("--mainFontColor", "#ffffff");
        page.style.setProperty("--secondFontColor", "#e5e5e5");
        page.style.setProperty("--bluredColor", "#565656");
        page.style.setProperty("--decorativeColor", "#707070");
        page.style.setProperty("--switcherColor", "#545454");
      } else {
        // light theme
        page.style.setProperty("--mainBackgroundColor", "#f4f4f4");
        page.style.setProperty("--secondBackgroundColor", "#efefef");
        page.style.setProperty("--buttonColor", "#ebebeb");
        page.style.setProperty("--mainFontColor", "#151515");
        page.style.setProperty("--secondFontColor", "#222222");
        page.style.setProperty("--bluredColor", "#cfcfcf");
        page.style.setProperty("--decorativeColor", "#d7d4d4");
        page.style.setProperty("--switcherColor", "#ffffff");
      }
      bubble.style.setProperty("pointer-events", "auto");
    });
  });
}
