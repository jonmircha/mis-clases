import { togglePanel } from "./modules/panel.js";
import { scrollTopButton } from "./modules/scroll-top-button.js";
import { responsiveMedia } from "./modules/responsive-media.js";
import { darkTheme } from "./modules/dark-theme.js";
import { clock } from "./modules/clock.js";
import { countdown } from "./modules/countdown.js";
import { giveAway } from "./modules/give-away.js";
import { sortData } from "./modules/sort-data.js";
import { sorteoYoutube } from "./modules/sorteo-youtube.js";

togglePanel(".panel-btn", ".panel");
scrollTopButton(".scroll-top-btn");

let mobileVideo = `<a href="https://www.youtube.com/watch?v=2SetvwBV-SU" target="_blank" rel="noopener">Ver Video</a>`,
  desktopVideo = `<iframe width="560" height="315" src="https://www.youtube.com/embed/2SetvwBV-SU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  mobileMap = `<a href="https://goo.gl/maps/YUoGub9ZNeUiJWPx8" target="_blank" rel="noopener">Ver Mapa</a>`,
  desktopMap = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.79676337317!2d-99.1645599853058!3d19.377950847447664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ffa3f9df712d%3A0xd3da5bca9ec18776!2sParque%20Arboledas!5e0!3m2!1ses-419!2smx!4v1665430374039!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

responsiveMedia("#youtube", "(min-width: 1024px)", mobileVideo, desktopVideo);
responsiveMedia("#gmaps", "(min-width: 1024px)", mobileMap, desktopMap);

darkTheme(".dark-theme-btn", "dark-mode");

clock("#clock", "#play-clock", "#stop-clock");
countdown("#countdown", "2023-01-01", "Te llego la hora 😱");

giveAway("#btn-winner", "#players", "#winner");
sortData("#teams", "#btn-sort", "#team-1", "#team-2");

sorteoYoutube();
