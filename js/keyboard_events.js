export default function keyboardEvents(canvas, cow) {
  const d = document;
  let $cow = d.querySelector(cow);
  let $canvas = d.querySelector(canvas);

  let canvasWidth = getComputedStyle($canvas).getPropertyValue("width");
  let canvasHeight = getComputedStyle($canvas).getPropertyValue("height");
  

  $cow.style.setProperty("position", "absolute");
  $cow.style.setProperty("top", `${canvasHeight / 2}px`);
  $cow.style.setProperty("left", `${canvasWidth / 2}px`);

  console.log($canvas);
  console.log(canvasWidth);
  console.log(canvasHeight);
  // paper.drawImage($cow, (canvasWidth/2),(canvasHeight/2));
  // paper.drawImage($cow, 0,0);
}
