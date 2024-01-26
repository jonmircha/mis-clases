// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getDatabase,
  ref,
  onValue,
  set,
  push,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GithubAuthProvider,
  signInWithPopup,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
import {
  getStorage,
  ref as refStorage,
  uploadBytesResumable,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-storage.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq3tS9NRC_Hi4wpMjmttQLO4_NBKFhLrE",
  authDomain: "fir-js-2022.firebaseapp.com",
  projectId: "fir-js-2022",
  storageBucket: "fir-js-2022.appspot.com",
  messagingSenderId: "891469667569",
  appId: "1:891469667569:web:1162802b80faf121ea1d50",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//console.log(app);

(() => {
  // Initialize Realtime Database and get a reference to the service
  const db = getDatabase(app),
    refMessage = ref(db, "message"),
    $message = document.getElementById("message");

  //console.log(db);
  //console.log(refMessage);

  onValue(refMessage, (snapshot) => {
    //console.log(snapshot);
    //console.log(snapshot.key, snapshot.val());
    $message.textContent = snapshot.val();
  });

  /*
  Insertar Datos en Realtime Database
    Tenemos 2 métodos: set y push
    ¿Cuál es la diferencia?
    push autogenera una clave única a la estructura de datos que insertes
  */

  /*
  set(ref(db, "datosConSet"), {
    name: "Jon",
    email: "jonamircha@gmail.com",
  });
  
  push(ref(db, "datosConPush"), {
    name: "Jon",
    email: "jonamircha@gmail.com",
  });
  */
})();

(() => {
  const d = document,
    db = getDatabase(app),
    refCities = ref(db, "cities"),
    $table = d.getElementById("table-cities"),
    $form = d.getElementById("form-cities"),
    $fragment = d.createDocumentFragment(),
    $template = d.getElementById("template-city").content;

  function renderCities() {
    onValue(refCities, (snapshot) => {
      //limpiar el contenido de la tabla
      $table.querySelector("tbody").innerHTML = "";

      snapshot.forEach((el) => {
        //console.log(el);
        //console.log(el.key);
        //console.log(el.val());

        let values = el.val(),
          key = el.key;

        $template.querySelector(".key-id").id = key;
        $template.querySelector(".key").innerText = key;
        $template.querySelector(".country").innerText = values.country;
        $template.querySelector(".city").innerText = values.city;

        let $clone = d.importNode($template, true);
        $fragment.appendChild($clone);
      });

      $table.querySelector("tbody").appendChild($fragment);
    });
  }

  d.addEventListener("DOMContentLoaded", (e) => renderCities());

  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    //alert("El form se procesa");
    //console.log($form.country.value, $form.city.value);

    let key = e.target.key,
      values = {
        country: $form.country.value,
        city: $form.city.value,
      };

    if (!key.value) {
      //Insertar
      push(ref(db, "cities"), values);
    } else {
      //Actualizar
      update(ref(db), {
        ["/cities/" + key.value]: values,
      });
    }

    $form.reset();
  });

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".edit") && !e.target.matches(".delete"))
      return false;

    if (e.target.matches(".edit")) {
      //alert("Editar");
      //console.log(e.target.parentElement.parentElement.id);
      let $parent = e.target.parentElement.parentElement;
      $form.country.value = $parent.querySelector(".country").innerText;
      $form.city.value = $parent.querySelector(".city").innerText;
      $form.key.value = $parent.id;
    }

    if (e.target.matches(".delete")) {
      //alert("Eliminar");
      let key = e.target.parentElement.parentElement.id,
        deleteId = confirm(`¿Estás seguro de eliminar el id ${key}?`);

      if (deleteId) remove(ref(db, `/cities/${key}`));
    }
  });
})();

(() => {
  const d = document,
    auth = getAuth(app),
    $appAuthEmail = d.getElementById("app-auth-email");

  onAuthStateChanged(auth, (user) => {
    //console.log(user);

    if (user) {
      //console.log("Usuario Autenticado");
      $appAuthEmail.innerHTML = `
        <p>Si ves este contenido es porque estás logueado</p>
        <button id="logout">Salir</button>
      `;
    } else {
      //console.log("Usuario NO Autenticado");
      $appAuthEmail.innerHTML = `<p>El contenido de esta sección es exclusivo para usuarios registrados</p>`;
    }
  });

  d.addEventListener("submit", (e) => {
    e.preventDefault();
    let $form = e.target;

    if ($form.matches("#form-signin")) {
      alert("Creando Cuenta");
      //console.log(form.nombre.value, form.email.value, form.pass.value);

      createUserWithEmailAndPassword(auth, $form.email.value, $form.pass.value)
        .then((res) => {
          //console.log(res);
          $appAuthEmail.innerHTML = `<p>Usuario creado con el correo <b>${$form.email.value}</b></p>`;
          $form.reset();
        })
        .catch((err) => {
          //console.log(err);
          $appAuthEmail.innerHTML = `<p>Ocurrio un error al crear la cuenta <b>${err.message}</b></p>`;
          $form.nombre.focus();
        });
    }

    if ($form.matches("#form-login")) {
      alert("Iniciando Sesión");

      signInWithEmailAndPassword(auth, $form.email.value, $form.pass.value)
        .then((res) => {
          //console.log(res);
          $appAuthEmail.innerHTML = `<p>Usuario logueado con el correo <b>${$form.email.value}</b></p>`;
          $form.reset();
        })
        .catch((err) => {
          //console.log(err);
          $appAuthEmail.innerHTML = `<p>Ocurrio un error al iniciar sesión <b>${err.message}</b></p>`;
          $form.pass.focus();
        });
    }
  });

  d.addEventListener("click", (e) => {
    if (e.target.matches("#logout")) {
      alert("Cerrando sesión");
      signOut(auth);
    }
  });
})();

(() => {
  /*
    Ir al Settings de Github
    luego Developer Settings
    luego New OAuthApp
  */

  const d = document,
    auth = getAuth(app),
    provider = new GithubAuthProvider(),
    $appAuthGitHub = d.getElementById("app-auth-github");

  onAuthStateChanged(auth, (user) => {
    //console.log(user);

    if (user) {
      //console.log("Usuario Autenticado");
      $appAuthGitHub.innerHTML = `
        <p>Si ves este contenido es porque estas logueado</p>
        <button id="github-logout">Salir</button>
        <p>Bienvenido ${user.displayName}</p>
        <img src="${user.photoURL}" alt="${user.displayName}">
      `;
    } else {
      //console.log("Usuario NO Autenticado");
      $appAuthGitHub.innerHTML = `<p>El contenido de esta sección es exclusivo para usuarios registrados</p>`;
    }
  });

  d.addEventListener("click", (e) => {
    if (e.target.matches("#github-login")) {
      alert("Ingresando con GitHub");

      signInWithPopup(auth, provider)
        .then((res) => {
          //console.log(res);
          $appAuthGitHub.innerHTML = `<p>Bienvenido ${res.user.displayName}</p>`;
        })
        .catch((err) => {
          //console.log(err);
          $appAuthGitHub.innerHTML = `<p>Error: <i>${err.code}</i> - <b>${err.message}</b></p>`;
        });
    }

    if (e.target.matches("#github-logout")) {
      alert("Cerrando sesión");
      signOut(auth);
    }
  });
})();

(() => {
  const d = document,
    auth = getAuth(app),
    provider = new GoogleAuthProvider(),
    $appAuthGoogle = d.getElementById("app-auth-google");

  onAuthStateChanged(auth, (user) => {
    //console.log(user);

    if (user) {
      //console.log("Usuario Autenticado");
      $appAuthGoogle.innerHTML = `
        <p>Si ves este contenido es porque estas logueado</p>
        <button id="google-logout">Salir</button>
        <p>Bienvenido ${user.displayName}</p>
        <img src="${user.photoURL}" alt="${user.displayName}">
      `;
    } else {
      //console.log("Usuario NO Autenticado");
      $appAuthGoogle.innerHTML = `<p>El contenido de esta sección es exclusivo para usuarios registrados</p>`;
    }
  });

  d.addEventListener("click", (e) => {
    if (e.target.matches("#google-login")) {
      alert("Ingresando con Google");

      signInWithPopup(auth, provider)
        .then((res) => {
          console.log(res);
          $appAuthGoogle.innerHTML = `<p>Bienvenido ${res.user.displayName}</p>`;
        })
        .catch((err) => {
          console.log(err);
          $appAuthGoogle.innerHTML = `<p>Error: <i>${err.code}</i> - <b>${err.message}</b></p>`;
        });
    }

    if (e.target.matches("#google-logout")) {
      alert("Cerrando sesión");
      signOut(auth);
    }
  });
})();

(() => {
  const storage = getStorage(app),
    //docsRef = ref(storage, "docs"),
    docsRef = refStorage(storage, "docs"),
    d = document,
    $progressBar = d.getElementById("progress-bar"),
    $progressAdvance = d.getElementById("progress-advance"),
    $appStorage = d.getElementById("app-storage");

  //console.log(docsRef);

  $appStorage.innerHTML = "";

  d.addEventListener("change", (e) => {
    if (e.target.matches("#uploader")) {
      alert("Subiendo archivo(s)...");
      //console.log(e.target.files);
      let fileList = Array.from(e.target.files);

      fileList.forEach((file) => {
        //console.log(file);
        const filesRef = refStorage(storage, "files/" + file.name),
          uploadTask = uploadBytesResumable(filesRef, file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            //console.log(snapshot);
            let progress = Math.floor(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );

            //console.log(progress);
            $progressBar.value = progress;
            $progressAdvance.innerHTML = `${progress}%`;
          },
          (err) => {
            $appStorage.innerHTML = `<p>Error al subir el archivo: ${err.code} - ${err.message}</p>`;
          },
          () => {
            $progressBar.value = 0;
            $progressAdvance.innerHTML = `0%`;
            e.target.value = "";

            getDownloadURL(uploadTask.snapshot.ref)
              .then((downloadURL) => {
                console.log(downloadURL);
                $appStorage.innerHTML += `
                  <p>
                    Puedes ver tu archivo en la siguiente:
                    <a href="${downloadURL}" target="_blank">url</a>.
                  </p>
                `;
              })
              .catch((err) => {
                $appStorage.innerHTML += `<p>Error al subir el archivo: ${err.code} - ${err.message}</p>`;
              });
          }
        );
      });
    }
  });
})();
