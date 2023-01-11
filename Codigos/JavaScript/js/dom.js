/* 
DOM: Document Object Model.

El Modelo de Objetos del Documento es un API para documentos HTML y XML.

Éste proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JavaScript.

El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.

Teoría DOM: https://jonmircha.com/dom
Documentación en MDN: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model

El DOM tiene 3 objetos importantes:
  1) window: hace referencia a toda la ventana del navegador.
  2) document: hace refencia a la estructura del documento HTML.
  3) navigator: hace referencia a la información que se puede obtener del navegador del usuario, por ejemplo: geolocalización, estado de conexión, tipo de navegador, sistema operativo, etc.
  
*/
console.log(window);
console.log(document);
console.log(navigator);

/* Elementos del Documento HTML */
console.log(window.document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.charset);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);

document.write("<p><b><i>Este texto se escribió desde JavaScript</i></b></p>");

setTimeout(() => {
  console.log(document.getSelection().toString());
}, 2000);

/* 
Selectores en el DOM
  1) Etiquetas
  2) Identificadores
  3) Clases
  4) Atributos

Existen 3 métodos muy usados para acceder a los difentes tipos de selectores de CSS mediante el DOM:
  1) querySelector(selector): Va a traer el primer elemento HTML que coincida con el selector indicado. 
  2) querySelectorAll(selector): Va a traer todos los elementos HTML que coincidan con el selector indicado
  3) getElementById(id): Va a traer el elemento HTML con el nombre de identificador indicado
*/

//Etiquetas
console.log(document.querySelector("img"));
console.log(document.querySelectorAll("img"));
console.log(document.querySelectorAll("img")[1]);

//Clases
console.log(document.querySelector(".bg-palegreen"));
console.log(document.querySelectorAll(".bg-palegreen"));

//Identificadores
console.log(document.querySelector("#titulo"));
console.log(document.getElementById("titulo"));

//Atributos
console.log(document.querySelector("[src]"));
console.log(document.querySelectorAll("[src]"));
console.log(document.querySelectorAll("img[src]"));

/* Interactuando con HTML y CSS mediante JS */

/* 
Buenas prácticas en la declaración de variables del DOM:

- Todas las variables que declares para almacenar elementos del DOM, decláralas como constantes.
- Para diferenciar en tu código variables normales, de variables del dom, a las que guarden un elementos del dom anteponle al nombre de la variable, e símbolo del $. Ejemplo:
  $menu = document.querySelector(".menu");
*/

const $titulo = document.getElementById("titulo");

//Modificamos el contenido del elemento HTML
$titulo.innerText = "Hola";
$titulo.innerText = "Hola <i>Mundo</i>";
$titulo.innerHTML = "Hola <mark>Mundo</mark>";

console.log($titulo.style);

//Modificamos los estilos del elemento HTML
$titulo.style.color = "red";
$titulo.style.backgroundColor = "black";
$titulo.style.padding = "2rem";
$titulo.style.borderRadius = "1rem";

const $myImages = document.querySelectorAll("img");

$myImages.forEach((el) => {
  el.style.borderRadius = "50%";
  el.style.filter = "grayscale(1)";
  el.style.transform = "rotate(180deg)";
});

//Modificamos atributos del elemento HTML
const $inputSearch = document.querySelector("input[type='search']");
$inputSearch.placeholder = "Voy a tener suerte...";

const $videoYouTube = document.getElementById("youtube");
$videoYouTube.src = "https://www.youtube.com/embed/-oK6zL01fNM";

//Cargar contenido dinámico desde estructuras de código o contenido externo como APIs y BDs
const estudiantes = ["Kenny", "Karina", "Charly", "Carlos", "José Luis"];

const $estudiantes = document.getElementById("estudiantes");

$estudiantes.innerHTML = `
  <li>Estudiante 1</li>
  <li>Estudiante 2</li>
  <li>Estudiante 3</li>
  <li>Estudiante 4</li>
  <li>Estudiante 5</li>
`;

estudiantes.forEach((el) => {
  $estudiantes.innerHTML += `<li>${el}</li>`;
});

const $animes = document.createElement("ol");
$animes.id = "animes";

document.body.appendChild($animes);

$animes.innerHTML = `<li>Saint Seiya</li>`;

/*
.insertAdjacent...
  .insertAdjacentElement(position, el)
  .insertAdjacentHTML(position, html)
  .insertAdjacentText(position, text)

Posiciones:
  beforebegin: hermano anterior
  afterbegin: primer hijo
  beforeend: ultimo hijo
  afterend: hermano siguiente
*/

const $h2Animes = document.createElement("h2");
$h2Animes.innerHTML = `Mis Animes Favoritos`;

$animes.insertAdjacentElement("beforebegin", $h2Animes);
$animes.insertAdjacentHTML("beforeend", `<li>Slam Dunk</li>`);

$animes.firstElementChild.insertAdjacentText(
  "beforeend",
  " (Los Caballeros del Zodiaco)"
);

const $h2ViendoAnimes = document.createElement("h2");
$h2ViendoAnimes.innerHTML = `Los Animes que estoy viendo`;
$animes.insertAdjacentElement("afterend", $h2ViendoAnimes);

/* DOM Traversing - Recorriendo el DOM */
console.log($animes.children);
console.log($animes.children[0]);
console.log($animes.firstElementChild);
console.log($animes.lastElementChild);
console.log($animes.previousElementSibling);
console.log($animes.nextElementSibling);
console.log($animes.parentElement);

const $ulViendoAnimes = document.createElement("ul");
$h2ViendoAnimes.insertAdjacentElement("afterend", $ulViendoAnimes);

const viendoAnimes = ["Vinland Saga", "Cyberpunk EdgeRunners", "Spy X Family"];

viendoAnimes.forEach((el) =>
  $ulViendoAnimes.insertAdjacentHTML("beforeend", `<li>${el}</li>`)
);

/* Manejo de Atributos */
const $linkDOM = document.createElement("a");
$linkDOM.innerText = "Más información sobre el DOM";
$linkDOM.href = "https://jonmircha.com/dom";
$linkDOM.setAttribute("target", "_blank");
console.log($linkDOM.target);
console.log($linkDOM.getAttribute("href"));
console.log($linkDOM.hasAttribute("href"));
console.log($linkDOM.hasAttribute("rel"));

/* Manejo de Atributos Personalizados */
$linkDOM.dataset.descripcion =
  "Este link contiene una referencia a mi artículo de Blog sobre el DOM en mi sitio web";
$linkDOM.setAttribute("data-titulo", "Teoría del DOM");
console.log($linkDOM.dataset.titulo);
console.log($linkDOM.getAttribute("data-descripcion"));
console.log($linkDOM.dataset);

document.body.appendChild($linkDOM);

/* Manejo de Clases */
$p5 = document.getElementById("p5");
console.log($p5.id);
//console.log($p5.class);
console.log($p5.className);
console.log($p5.classList);

$p5.classList.remove("text-right");
$p5.classList.add("text-center");
$p5.classList.toggle("fs-20");
$p5.classList.toggle("fs-8");
console.log($p5.classList.contains("fs-12"));
console.log($p5.classList.contains("bg-palegreen"));
$p5.classList.replace("bg-palegreen", "bg-skyblue");

/* 
Eventos

La formula de la sintaxis de los eventos es:

elemento.addEventListener("tipodelevento", nombreDeFuncion);

elemento.addEventListener("tipodelevento", function (e) {
  código
  de la
  función
});

elemento.addEventListener("tipodelevento", (e) => {
  código
  de la
  función
});

Una función que se asigna a un evento se le conoce como MANEJADOR DEL EVENTO (Event Handler).

Una función que maneja el evento, SÓLO PUEDE RECIBIR COMO PÁRAMETRO al evento mismo.


Lista de Eventos en JavaScript: https://developer.mozilla.org/es/docs/Web/Events 
*/

function saludar(e) {
  alert("Hola Mundo");
  console.log(e);
  e.target.style.backgroundColor = "black";
  e.target.style.color = "greenyellow";
  e.target.innerText = "Me has presionado 😎👍🏻";
}

const $btn2 = document.getElementById("btn-push-2");
$btn2.addEventListener("click", saludar);

const $p3 = document.getElementById("p-push-3");

$p3.addEventListener("dblclick", function (e) {
  alert(`El evento que has ejecutado es de tipo: ${e.type}`);
  e.target.style.backgroundColor = "skyblue";
  e.target.style.color = "white";
  e.target.style.fontWeight = "bold";
  e.target.innerText = "Has presionado este párrafo 2 veces ✌🏻✌🏻";
  console.log(e);
});

function networkStatus(msg) {
  const $div = document.createElement("div");

  if (navigator.onLine) {
    $div.classList.add("online");
    $div.classList.remove("offline");
  } else {
    $div.classList.add("offline");
    $div.classList.remove("online");
  }

  $div.innerText = msg;
  document.body.insertAdjacentElement("afterbegin", $div);
  setTimeout(() => document.body.removeChild($div), 3000);
}

window.addEventListener("online", (e) => {
  networkStatus("Conexión Reestablecida");
  console.log(e);
});

window.addEventListener("offline", (e) => networkStatus("Conexión Perdida"));

document.addEventListener("keydown", (e) => {
  console.log(e);
  console.log(e.type);
  console.log(e.key);
  console.log(e.code);
  console.log(`ctrl: ${e.ctrlKey}`);
  console.log(`alt: ${e.altKey}`);
  console.log(`shift: ${e.shiftKey}`);

  if (e.key === "a" && e.ctrlKey) {
    alert("Haz lanzado una alerta con el atajo ctrl + a");
  }

  if (e.key === "c" && e.ctrlKey) {
    confirm("Haz lanzado una confirmación con el atajo ctrl + c");
  }
  if (e.key === "p" && e.ctrlKey) {
    prompt("Haz lanzado una aviso con el atajo ctrl + p");
  }
});

/* 
Asignar dinámicamente un evento a varios elementos

De esta forma es una MALA PRÁCTICA, por que estas generando copias del mismo manejador de eventos y eso reduce el rendimiento de tu aplicación o sitio web, además de que consumes memoria RAM y Procesamiento de CPU del equipo de cómputo del usuario.

Si necesitas asignar dinámicamente un evento a varios elementos la forma correcta es mediante la DELEGACIÓN DE EVENTOS.
*/

const $radioThemes = document.querySelectorAll("input[name='theme']");
console.log($radioThemes);

$radioThemes.forEach((el) => {
  el.addEventListener("click", (e) => {
    console.log(e);
  });
});

/*
DELEGACIÓN DE EVENTOS
https://www.youtube.com/watch?v=j2fWSgOrxRs&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA
*/

document.addEventListener("click", (e) => {
  console.log(e.target.matches("input[name='theme']"));
  if (!e.target.matches("input[name='theme']")) return false;

  document.getElementById("theme").href = e.target.dataset.theme;
  alert(`Has activado el tema: ${e.target.dataset.name}`);
});
