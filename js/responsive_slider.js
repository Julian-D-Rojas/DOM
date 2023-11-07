const d = document;
export default function responsiveSlider(sliderContainer,arrow){
    const $sliderContainer = d.querySelector(sliderContainer);
    const $arrow = d.querySelectorAll(arrow);
 let currentPosition;
    d.addEventListener("click",e=>{

        currentPosition=getComputedStyle($sliderContainer).getPropertyValue("translate");
        console.log(parseInt(currentPosition))

        if(e.target===$arrow[0]&&parseInt(currentPosition)<=-25){
            $sliderContainer.style.translate=`calc( ${currentPosition} + 25%)`
        }
        if(e.target===$arrow[1]&&parseInt(currentPosition)>=-50){
         $sliderContainer.style.translate=`calc( ${currentPosition} - 25%)`
    }
})

}