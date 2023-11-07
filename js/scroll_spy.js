const d = document;
export default function scrollSpy(pannel,items,sections){
    const $pannel = d.querySelector(pannel)
    const $items = d.querySelectorAll(items)
    const $sections = d.querySelectorAll(sections)
let options ={
    root: $items,
    threshold: 1.0
}

let observer = new IntersectionObserver(callback, options);
observer.observe($sections);

var callback = function (entries, observer) {
    entries.forEach((entry) => {
        entry.classl
    })}
}