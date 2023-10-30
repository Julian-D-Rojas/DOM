const d = document;
export default function searchFilter(input, container, figcaption) {
  const $input = d.querySelector(input);
  const $figcaption = d.querySelectorAll(figcaption);
  const $container = d.querySelector(container);

  d.addEventListener("input", (e) => {
    let regExpr = new RegExp($input.value, "ig");
    if (e.target === $input) {
      for (let i = 0; i < $figcaption.length; i++) {
        (!regExpr.test($figcaption[i].textContent)) 
        ? $container.children[i].classList.add("filter")
        : $container.children[i].classList.remove("filter")
        
      }
    }
  });
}
