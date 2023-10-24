import hamburgerMenu from "./js/hamburguer_menu.js";
import clock from "./js/clock.js";
import keyboardEvents from "./js/keyboard_events.js";
import { countdown } from "./js/countdown.js";
import scrollToTop from "./js/scroll_to_top.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  //   hamburgerMenu("selector del boton hamburguesa","selector del panel a ocultar", "selector de los links del menu <a>" )
  hamburgerMenu(".btn-hamburger", ".aside-pannel", ".a-menu");
  clock("#startClock", "#stopClock", "#playAlarm", "#stopAlarm");
  keyboardEvents(".figure-keyboard", ".figure-keyboard .img");
  countdown(".div-countdown");
  scrollToTop(".btn-scrollTop");
});
