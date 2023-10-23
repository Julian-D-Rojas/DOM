export default function keyboardEvents(canvas, cow) {
  const d = document;
  let $cow = d.querySelector(cow);
  let $canvas = d.querySelector(canvas);

  let canvasWidth = getComputedStyle($canvas).getPropertyValue("width"),
    canvasHeight = getComputedStyle($canvas).getPropertyValue("height");

  let cowWidth = getComputedStyle($cow).getPropertyValue("width"),
    cowHeight = getComputedStyle($cow).getPropertyValue("width");

let step = 8;

  $cow.style.setProperty("position", "absolute");
  $cow.style.top = `${(parseInt(canvasHeight, 10)/2)-(parseInt(cowHeight,10)/2) }px`;
  $cow.style.left = `${(parseInt(canvasWidth, 10)/2)-(parseInt(cowWidth,10)/2) }px`;

  const move = (x,y)=>{
    $cow.style.left = `${parseInt($cow.style.left,10)+x}px`
    $cow.style.top = `${parseInt($cow.style.top,10)+y}px`
  }
 
d.addEventListener('keydown',e=>{
    switch(e.keyCode){
        case 37:
            e.preventDefault();
           (parseInt($cow.style.left,10)-step>0)
           ?move(-step,0)
           :alert(`No se puede avanzar más hacia la derecha`);
          
          console.log(parseInt($cow.style.left,10)-step);
          break;

          case 39:
            e.preventDefault();
           (parseInt($cow.style.left,10)+step+parseInt(cowWidth,10)<parseInt(canvasWidth, 10))
           ?move(step,0)
           :alert(`No se puede avanzar más hacia la izquierda`);
          
           console.log(parseInt(canvasWidth, 10))
          console.log(parseInt($cow.style.left,10)+step+parseInt(cowWidth,10));
          break;

          case 38:
            e.preventDefault();
            (parseInt($cow.style.top,10)-step>0)
            ?move(0,-step)
            :alert(`No se puede avanzar más hacia arriba`);
           
           console.log(parseInt($cow.style.top,10)-step);
           break;
 
           case 40:
            e.preventDefault();
            (parseInt($cow.style.top,10)+step+parseInt(cowHeight,10)<parseInt(canvasHeight, 10))
            ?move(0,step)
            :alert(`No se puede avanzar más hacia abajo`);
           
            console.log(parseInt(canvasHeight, 10))
           console.log(parseInt($cow.style.top,10)+step+parseInt(cowHeight,10));
           break;


    }
    
})
}
