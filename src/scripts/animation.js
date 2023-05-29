import { menuButton } from "./contants.js";

export default function initAnimation(processHeader) {
  const animatedScrolls = Array.from(
    document.querySelectorAll(".animated-scroll")
  );
  animatedScrolls.forEach((el) => {
    el.addEventListener("click", (evt) => {
      processHeader(menuButton);
      processLinkClick(evt);
    });
  });
}

function processLinkClick(evt) {
  const targetBlock = document.getElementById(evt.target.dataset.targetBlock);

  if (targetBlock) {
    window.scrollBy({
      top: targetBlock.getBoundingClientRect().top,
      behavior: "smooth",
    });
  }
}
