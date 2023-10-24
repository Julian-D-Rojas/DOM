const d = document;
export default function scrollToTop(btnTop) {
  let $btnTop = d.querySelector(btnTop);

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnTop) || e.target.matches(`${btnTop} *`)) {
      window.scrollTo(0, 0);
      console.log(`top: ${window.scrollY}`);
      $btnTop.classList.toggle("is-active");
    }
  });

  window.addEventListener("scroll", (e) => {
    if (window.scrollY === 0) {
      $btnTop.style.opacity = `0`;
      $btnTop.style.pointerEvents = "none";
    } else {
      $btnTop.style.opacity = `1`;
      $btnTop.style.pointerEvents = "auto";
    }
  });
}
