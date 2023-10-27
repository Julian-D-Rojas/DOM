const d = document,ls =localStorage;
export default function lightDarkMode(btnLightDarkMode,classDark){ 
const $btnLightDarkMode =d.querySelector(btnLightDarkMode);
//Usando data atribut en html, para este caso [data-dark]
const $selectors = d.querySelectorAll("[data-dark]");
const $sun = d.querySelector(`${btnLightDarkMode} svg:nth-child(1)`);
const $moon = d.querySelector(`${btnLightDarkMode} svg:nth-child(2)`)

 d.addEventListener('click',e=>{
    if ((e.target.matches(btnLightDarkMode))||(e.target.matches(`${btnLightDarkMode} *`)))
    {
        $sun.classList.toggle("darkMode");
        $moon.classList.toggle("darkMode");
       
        if(getComputedStyle($moon).display === "block"){
            darkMode();
        } else {
            lightMode();
        }
    }
 })

 const lightMode = () => {
    $selectors.forEach(el =>el.classList.remove(classDark))
    ls.setItem("theme", "light")
}

const darkMode = () => {
    $selectors.forEach(el =>{
    el.classList.add(classDark);
  //  console.log(ls);
    })
    ls.setItem("theme", "dark")
}
//console.log(ls.theme)
d.addEventListener("DOMContentLoaded", (e) => {
if(ls.theme==="dark"){
    $sun.classList.toggle("darkMode");
        $moon.classList.toggle("darkMode");
        darkMode();
}
})
















}