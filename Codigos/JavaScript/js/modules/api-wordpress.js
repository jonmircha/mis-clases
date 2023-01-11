export function lastPostsWP(site, selector) {
  const d = document,
    $posts = d.querySelector(selector),
    $site = d.querySelector(site);

  $site.addEventListener("keypress", async (e) => {
    //console.log(`Valor del Input: ${e.target.value}`);
    //console.log(`Clave de tecla: ${e.key}`);

    if (e.key === "Enter") {
      try {
        $posts.innerHTML = `<span class="loader"></span>`;

        let url = `${e.target.value.toLowerCase()}/wp-json/wp/v2/posts?_embed`,
          res = await fetch(url);

        if (!res.ok)
          throw `Error al acceder a la API de WordPress del sitio ${e.target.value}`;

        let json = await res.json(),
          $template = "";

        console.log(url, json);

        json.forEach((el) => {
          let poster = el._embedded["wp:featuredmedia"]
            ? el._embedded["wp:featuredmedia"][0].source_url
            : "http://static.tvmaze.com/images/no-img/no-img-portrait-text.png";

          $template += `
            <div class="post">
              <h4>${el.title.rendered}</h4>
              <img src="${poster}" alt="${el.title.rendered}" />
              ${el.excerpt.rendered}
              <a href="${el.link}" target="_blank">Ver más</a>
            </div>
          `;
        });

        $posts.innerHTML = $template;
      } catch (error) {
        //console.warn(error);
        $posts.innerHTML = `<p><b>${error}</b></p>`;
      }
    }
  });
}
