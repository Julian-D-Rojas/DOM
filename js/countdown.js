export default function countdown(container) {
  const d = document;
  let $container = d.querySelector(container);
  let countDownDate = new Date(2023, 10, 7, 15, 1);

  //let countDown =((countDownDate.getTime() )-(new Date().getTime()));

  //console.log(` ${Math.floor(countDown/(1000*60*60*24))} dias` )
  //console.log(` ${Math.floor(((countDown/(1000*60*60*24))%1)*24)} horas` )
  //console.log(` ${Math.floor(((((countDown/(1000*60*60*24))%1)*24)%1)*60)} minutos` )
  //console.log(` ${Math.floor(((((((countDown/(1000*60*60*24))%1)*24)%1)*60)%1)*60)} segundos` )

  let countdownTempo = setInterval(() => {
    if (countDownDate.getTime() > new Date().getTime()) {
      let countDown = countDownDate.getTime() - new Date().getTime();
      $container.innerHTML = `Faltan: <br>${Math.floor(
        countDown / (1000 * 60 * 60 * 24)
      )} dias, ${Math.floor(
        ((countDown / (1000 * 60 * 60 * 24)) % 1) * 24
      )} horas, ${Math.floor(
        ((((countDown / (1000 * 60 * 60 * 24)) % 1) * 24) % 1) * 60
      )} minutos,  ${Math.floor(
        ((((((countDown / (1000 * 60 * 60 * 24)) % 1) * 24) % 1) * 60) % 1) * 60
      )} segundos`;
    } else {
      $container.innerHTML = `Tiempo`;
      clearInterval(countdownTempo);
    }
  }, 1000);
}
