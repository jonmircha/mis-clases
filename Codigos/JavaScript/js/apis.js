/* 
JSON - JavaScript Object Notation
https://jonmircha.com/json

AJAX - Asynchronous JavaScript And XML
https://jonmircha.com/ajax

API - Application Programming Interface
https://jonmircha.com/api-rest
https://github.com/public-apis/public-apis
*/

//JSON.parse(): Analiza una notación JSON y la convierte en un tipo de dato JS.
console.log(JSON.parse("{}"));
console.log(JSON.parse("[]"));
console.log(JSON.parse("[1,2,3]"));
console.log(JSON.parse('{"nombre":"Jon", "edad": 38}'));

//JSON.stringify(): Convierte un tipo de dato JS a notación JSON.
console.log(JSON.stringify({}));
console.log(JSON.stringify([]));
console.log(JSON.stringify([1, 2, 3]));
console.log(JSON.stringify({ nombre: "Jon", edad: 38 }));

//AJAX - API fetch con Funciones Asíncronas
async function obtenerDatosDelJSON() {
  try {
    let res = await fetch("js/data.json");

    if (!res.ok) {
      throw "Error al acceder al archivo JSON";
    }

    let json = await res.json();

    console.log(res, json);

    let $infoPersonal = document.getElementById("info-personal");

    $infoPersonal.innerHTML = `
      <h2>${json.nombre}</h2>
      <ul>
        <li>Edad: ${json.edad} años.</li>
        <li>Estado Civil: ${json.soltero ? "Soltero" : "Casado"}</li>
        <li>Pasatiempos: ${json.pasatiempos}</li>
        <li>
          Contacto:
          <ul>
          <li>Email: ${json.contacto.email}</li>
          <li>Móvil: ${json.contacto.movil}</li>
          <li>Web: <a href="${
            json.contacto.web
          }" target="_blank">jonmircha.com</a></li>
          </ul>
        </li>
        <li>${json.tengoGatos === null ? "No tengo 🐱" : "Si tengo 🐱"}</li>
      </ul>
    `;

    const $peliculas = document.getElementById("peliculas");
    let html = "";

    json.peliculas.forEach((el) => {
      html += `
        <article class="card">
          <img src="${el.poster}" alt="${el.nombre}" />
          <h4>${el.nombre}</h4> 
          <h5>${el.estreno}</h5> 
        </article>
      `;
    });

    $peliculas.innerHTML = html;
  } catch (error) {
    console.warn(error);
  }
}

obtenerDatosDelJSON();

async function obtenerDatosGitHub() {
  try {
    let res = await fetch("https://api.github.com/users/jonmircha");

    if (!res.ok) {
      throw "Error al acceder a la API de GitHub";
    }

    let json = await res.json();

    console.log(res, json);

    const $github = document.getElementById("github");

    $github.innerHTML = `
      <img src ="${json.avatar_url}" alt="${json.name}" />
      <h2>${json.name}</h2> 
      <h3>${json.login}</h3>
      <p>${json.bio}</p> 
    `;
  } catch (error) {
    console.warn(error);
  }
}

obtenerDatosGitHub();
