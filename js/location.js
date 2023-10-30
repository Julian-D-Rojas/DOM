const d = document, n = navigator

export default function getGeolocation(id){
    const $id = d.querySelector(id),
    options = {
        enableHighAccuracy:true,// decirle al dispositivo que haga la mejor lectura que pueda
        timeout: 5000,
        maximumAge: 0
    }
    const success = position => {
        let coords = position.coords

        $id.innerHTML = `<p>Tu posicion actual es:</p>
        <ul>
        <li>Latitud: <b>${coords.latitude}</b></li>
        <li>Longitud: <b>${coords.longitude}</b></li>
        <li>Precisión: <b>${coords.accuracy}</b>metros</li>
        </ul>
        <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},18z" target="_blank" rel="noopener">Ver en google maps</a>
        `
        
        // console.log(position)
    }
    const error = err => {
        // console.log(`Error ${err.code}: ${err.message}`)
        $id.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`
    }

    n.geolocation.getCurrentPosition(success, error, options)
    // watchPosition(): un metodo para ver en tiempo real la ubicaicion 
    //https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
}