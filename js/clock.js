export default function clock($startClock, $stopClock, $playAlarm, $stopAlarm) {
  const d = document;
  let timer;
  const $alarm = d.createElement("audio");
  $alarm.src = "./assets/alarma.mp3";
  d.addEventListener("click", (e) => {
    if (e.target.matches($startClock) || e.target.matches(`${$startClock} *`)) {
      timer = setInterval(() => {
        const hour = `<span>${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}</span>`;
        d.querySelector(".div-clock").innerHTML = hour;
      }, 1000);

      d.querySelector($startClock).disabled = true;

      d.querySelector($stopClock).disabled = false;
    }
    if (e.target.matches($stopClock) || e.target.matches(`${$stopClock} *`)) {
      clearInterval(timer);
      d.querySelector(".div-clock").innerHTML = null;

      d.querySelector($startClock).disabled = false;
    }

    if (e.target.matches($playAlarm) || e.target.matches(`${$playAlarm} *`)) {
      $alarm.play();

      d.querySelector($playAlarm).disabled = true;

      d.querySelector($stopAlarm).disabled = false;
    }

    if (e.target.matches($stopAlarm) || e.target.matches(`${$stopAlarm} *`)) {
      $alarm.pause();
      $alarm.currentTime = 0;

      d.querySelector($playAlarm).disabled = false;
    }
  });
}
