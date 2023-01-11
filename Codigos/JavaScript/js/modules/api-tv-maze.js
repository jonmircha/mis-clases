export function tvMazeSearch(search, selector) {
  const d = document,
    $shows = d.querySelector(selector),
    $search = d.querySelector(search);

  $search.addEventListener("keyup", async (e) => {
    //console.log(`Valor del Input: ${e.target.value}`);
    //console.log(`Clave de tecla: ${e.key}`);

    if (e.key === "Enter") {
      try {
        $shows.innerHTML = `<span class="loader"></span>`;

        let query = e.target.value.toLowerCase(),
          res = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);

        if (!res.ok) throw "Error al acceder a la API de TV Maze";

        let json = await res.json(),
          $template = "";

        console.log(query, json);

        json.forEach((el) => {
          let poster = el.show.image
            ? el.show.image.medium
            : "http://static.tvmaze.com/images/no-img/no-img-portrait-text.png";

          $template += `
            <div class="show">
              <h3>${el.show.name}</h3>
              <img src="${poster}" alt="${el.show.name}" />
              ${el.show.summary ? el.show.summary : ""}
              <p><a href="${el.show.url}" target="_blank">Ver más</a></p>
            </div>
          `;
        });

        $shows.innerHTML = $template;
      } catch (error) {
        //console.warn(error);
        $shows.innerHTML = `<p><b>${error}</b></p>`;
      }
    }
  });

  $search.addEventListener("search", (e) => {
    console.log(e);
    $shows.innerHTML = "";
  });
}
