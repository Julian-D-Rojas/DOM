const d = document;
export default function lightDarkMode(btnLightDarkMode,classDark){ 
const $btnLightDarkMode =d.querySelector(btnLightDarkMode);
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
  //  ls.setItem("theme", "light")
}

const darkMode = () => {
    $selectors.forEach(el =>{
    el.classList.add(classDark);
    console.log(getComputedStyle($moon).display);
        console.log(el);
    })
   // ls.setItem("theme", "dark")
}
}