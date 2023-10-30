const d = document, n = navigator

export default function webcamDetection(id){
   const $video = d.getElementById(id)
   if(n.mediaDevices.getUserMedia){
    n.mediaDevices.getUserMedia({audio:false, video:true})
    .then(stream=>{
        $video.srcObject = stream
        $video.play()
    })
    .catch(err=>{
        $video.insertAdjacentHTML('afterend', `<p>Error: ${err}</p>`)
        console.log(`Error:${err}`)})
   }
}