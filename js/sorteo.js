const d = document;
export default function sorteo(li,btn){
    const $li = d.querySelectorAll(li);
    const $btn = d.querySelector(btn);
    d.addEventListener('click', (e)=>{
        if(e.target === $btn){
            e.preventDefault();
let winner = $li[Math.floor(Math.random()*($li.length-1))].textContent; 
console.log(`El ganador es: ${winner}`)
alert(`El ganador es: ${winner}`)
}})
}