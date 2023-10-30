import hamburgerMenu from "./js/hamburguer_menu.js";
import clock from "./js/clock.js";
import keyboardEvents from "./js/keyboard_events.js";
import countdown from "./js/countdown.js";
import scrollToTop from "./js/scroll_to_top.js";
import lightDarkMode from "./js/ligth_dark_mode.js";
import responsive  from "./js/responsive.js";
import responsiveTester from "./js/responsive_tester.js";
import userDeviceInfo from "./js/user_agent.js";
import networkDetection from "./js/network_detection.js";
import webcamDetection from "./js/webcam_detection.js";
import getGeolocation from "./js/location.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  //   hamburgerMenu("selector del boton hamburguesa","selector del panel a ocultar", "selector de los links del menu <a>" )
  hamburgerMenu(".btn-hamburger", ".aside-pannel", ".a-menu");
  clock("#startClock", "#stopClock", "#playAlarm", "#stopAlarm");
  keyboardEvents(".figure-keyboard", ".figure-keyboard .img");
  countdown(".div-countdown");
  scrollToTop(".btn-scrollTop");
  responsive(".div-responsiveContainer", {
    mobile:`<a href="https://www.youtube.com/watch?v=6IwUl-4pAzc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=91&ab_channel=jonmircha" class="a-responsive">Ver Video</a> <a href="https://www.google.com/maps/@4.6564955,-74.0652501,15z?entry=ttu" class="a-responsive">Ver Mapa</a>`,
     desktop:`<iframe src="https://www.youtube.com/embed/6IwUl-4pAzc?si=5BWCNPlL8QdOWDbB&amp;controls=0"
     title="YouTube video player" frameborder="0"
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
     allowfullscreen></iframe>
 <iframe
     src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d15906.596749996877!2d-74.0652501!3d4.6564955!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1698337677547!5m2!1ses!2sco"
     style="border:0;" allowfullscreen="" loading="lazy"
     referrerpolicy="no-referrer-when-downgrade"></iframe>`},'(min-width: 400px)')
    responsiveTester("form-tester");
    userDeviceInfo("div-containerNavigator");
    networkDetection(".div-statusContainer",".aside-networkStatus");
  //  webcamDetection("video-webcam");
  getGeolocation(".div-location");
});

lightDarkMode(".btn-lightDarkMode","class-dark");

