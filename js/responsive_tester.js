const d =document, w=window;
export default function responsiveTester (form){

    const $form =d.getElementById(form);
    var tester;
    d.addEventListener('submit', (e)=>{
        if(e.target === $form){
 /*e.preventDefault: cancela el envio de información, el action del formulario indica
 a donde se va a enviar el formulario, si no tiene autoprocesa la pagina donde se encuentra,
 por la url envia los datos.
 */
            e.preventDefault();
   
            tester = w.open($form.url.value, 'tester', `innerWidth = ${$form.windowWidth.value} , innerHeight = ${$form.windowHight.value}`)
        }
     }) 
    
     d.addEventListener('click', (e) => {
         if(e.target === $form.closeTester)
         {
            tester.close();
        console.log("close")    }
     })
    
    }