  export default function responsive (container, content,mq){

    const d = document,w=window;
    const $container =d.querySelector(container);
    let breakpoint = w.matchMedia(mq);
    render();
    w.addEventListener("resize",e=>{
         render();
    })
    function render (){
        (breakpoint.matches)
        ?$container.innerHTML = content.desktop
        :$container.innerHTML = content.mobile;
        }
}
 


