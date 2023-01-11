export function showUserInfo() {
  const d = document;

  async function getUserInfo(user) {
    const $info = d.getElementById("info-github");

    if (!user) {
      $info.innerHTML = `<p><b>Error: No se ha seleccionado un usuario</b></p>`;

      return false;
    }

    try {
      let res = await fetch(`https://api.github.com/users/${user}`);

      if (!res.ok) {
        throw "Error al acceder a la API de GitHub";
      }

      let json = await res.json();
      //console.log(json);

      $info.innerHTML = `
        <div>
          <img src="${json.avatar_url}" alt="${json.name}">
          <h3>${json.name}</h3>
          <p>${json.bio}</p>
          <a href="${json.blog}" target="_blank">Visitar sitio</a>
        </div>
      `;
    } catch (error) {
      //console.warn(error);
      $info.innerHTML = `<p><b>${error}</b></p>`;
    }
  }

  const $users = d.getElementById("usuarios-github");

  $users.addEventListener("change", (e) => {
    //console.log(e.target.value);
    getUserInfo(e.target.value);
  });

  getUserInfo();
}
