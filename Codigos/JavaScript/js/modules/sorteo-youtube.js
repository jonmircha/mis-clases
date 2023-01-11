export function sorteoYoutube() {
  //Selector del comentario: ytd-comment-thread-renderer
  //Selector del nombre del usuario: ytd-comment-thread-renderer #author-text span
  //Selector del texto del comentario: ytd-comment-thread-renderer yt-formatted-string#content-text

  const rifarMicro = () => {
    const d = document,
      $comentarios = d.querySelectorAll("ytd-comment-thread-renderer");

    const participantes = [];

    $comentarios.forEach((el) =>
      participantes.push({
        nombre: el.querySelector("#author-text span").textContent.trim(),
        comentario: el
          .querySelector("yt-formatted-string#content-text")
          .textContent.trim(),
      })
    );

    console.log("participantes");
    console.log(participantes);

    const depurados = participantes.reduce((acc, participante) => {
      acc[participante.nombre] = ++acc[participante.nombre] || 0;
      //console.log(acc);
      return acc;
    }, {});

    console.log("depurados");
    console.log(depurados);

    const duplicados = participantes.filter((participante) => {
      //console.log(depurados[participante.nombre]);
      return depurados[participante.nombre] !== 0;
    });

    const unicos = participantes.filter((participante) => {
      //console.log(depurados[participante.nombre]);
      return depurados[participante.nombre] === 0;
    });

    console.log("duplicados");
    console.log(duplicados);
    console.log("unicos");
    console.log(unicos);

    let aleatorio = Math.floor(Math.random() * unicos.length),
      ganador = unicos[aleatorio];

    console.log(`😱El ganador del micrófono es...😱`);
    setTimeout(() => {
      console.log(`🥳🎉${ganador.nombre}🎉🥳`);
      console.log(`📝Su comentarios fue...📝`);
      console.log(`🌟✨${ganador.comentario}✨🌟`);
    }, 5000);
  };

  const participantes = [
    { nombre: "Jon", comentarios: "Hola 1" },
    { nombre: "kEnAi", comentarios: "Hola 2" },
    { nombre: "Jon", comentarios: "Hola 3" },
    { nombre: "Saga", comentarios: "Hola 4" },
    { nombre: "Jon", comentarios: "Hola 5" },
    { nombre: "Kanon", comentarios: "Hola 6" },
    { nombre: "Ikki", comentarios: "Hola 7" },
  ];

  console.log("participantes");
  console.log(participantes);

  const depurados = participantes.reduce((acc, participante) => {
    acc[participante.nombre] = ++acc[participante.nombre] || 0;
    //console.log(acc);
    return acc;
  }, {});

  console.log("depurados");
  console.log(depurados);

  const duplicados = participantes.filter((participante) => {
    //console.log(depurados[participante.nombre]);
    return depurados[participante.nombre] !== 0;
  });
  const unicos = participantes.filter((participante) => {
    //console.log(depurados[participante.nombre]);
    return depurados[participante.nombre] === 0;
  });

  console.log("duplicados");
  console.log(duplicados);
  console.log("unicos");
  console.log(unicos);

  let aleatorio = Math.floor(Math.random() * unicos.length),
    ganador = unicos[aleatorio];

  console.log(`😱El ganador del micrófono es...😱`);
  setTimeout(() => {
    console.log(`🥳🎉${ganador.nombre}🎉🥳`);
    console.log(`📝Su comentarios fue...📝`);
    console.log(`🌟✨${ganador.comentario}✨🌟`);
  }, 5000);
}
