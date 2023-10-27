const d =document, w=window;
export default function responsiveTester (form){

    const $form =d.getElementById(form);
    let tester;
    d.addEventListener('submit', (e)=>{
        if(e.target === $form){
            e.preventDefault();
        
            tester = window.open($form.url.value, 'tester', `innerWidth = ${$form.windowWidth.value} , innerHeight = ${$form.windowHight.value}`)
        }
     }) 
    
     d.addEventListener('click', (e) => {
        if(e.target === $form.closeTester){tester.close()}
     })
    
    }