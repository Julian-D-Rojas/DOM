const d = document,
n=navigator,
w=window;
export default function networkDetection(id,modal){
const $id = d.querySelector(id),
$modal = d.querySelector(modal);

setNetworkStatus();

w.addEventListener("online",e=>{
    setNetworkStatus();
    $modal.style.setProperty("background-color", "green")
$modal.innerHTML="<span>De nuevo en línea</span>";
$modal.style.opacity=1;
setTimeout(()=>$modal.style.opacity=0,3000);
})
w.addEventListener("offline",e=>{
    setNetworkStatus();
    $modal.style.setProperty("background-color", "red")
$modal.innerHTML="<span>Sin conexión</span>";
$modal.style.opacity=1;
setTimeout(()=>$modal.style.opacity=0,3000);
})

function setNetworkStatus(){
if(n.onLine){
$id.style.color ="green";
$id.innerHTML="<span>CONECTADO</span>";

} 
else{
$id.style.color ="red";
$id.innerHTML="<span>DESCONECTADO</span>"

}}
}