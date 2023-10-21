export default function hamburgerMenu(panelBtn, panel, menuLink){
    const d = document;
const $btnHamburger= d.querySelector(panelBtn);
const $divMenu = d.querySelector(panel);

d.addEventListener("click",(e)=>{
    if ((e.target.matches(panelBtn))||(e.target.matches(`${panelBtn} *`)))
    {
    $btnHamburger.classList.toggle("is-active");
    $divMenu.classList.toggle("is-active");
   
    }
    if(e.target.matches(menuLink)){
        console.log(menuLink);
        d.querySelector(panel).classList.remove("is-active");
        d.querySelector(panelBtn).classList.remove("is-active");

    }
})
}
