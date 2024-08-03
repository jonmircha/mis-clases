export function contactFormSend(form, email) {
  const d = document,
    $form = d.querySelector(form),
    inputs = `${form} [required]`,
    $inputs = d.querySelectorAll(inputs);

  //console.log($inputs);

  $inputs.forEach((el) => {
    const $span = d.createElement("span");
    $span.id = `${el.name}-error`;
    $span.innerText = el.title;
    $span.classList.add("form-error", "none");
    el.insertAdjacentElement("afterend", $span);
  });

  d.addEventListener("input", (e) => {
    if (!e.target.matches(inputs)) return false;

    let $input = e.target,
      pattern = $input.pattern || $input.dataset.pattern,
      $inputError = d.getElementById(`${$input.name}-error`),
      condition;

    //console.log($input, pattern);

    if (pattern) {
      //console.log("El input tiene patrón");
      let regex = new RegExp(pattern);
      condition = !regex.exec($input.value);
    } else {
      //console.log("El input NO tiene patrón pero es requerido");
      condition = $input.value === "";
    }

    return condition
      ? $inputError.classList.add("is-active")
      : $inputError.classList.remove("is-active");
  });

  $form.addEventListener("submit", async (e) => {
    e.preventDefault();
    //alert("Enviando Formulario");
    //console.log(e);

    const $loader = d.querySelector(`${form} .loader`),
      $response = d.querySelector(`${form} .form-response`);

    $loader.classList.remove("none");

    try {
      let url = `https://formsubmit.co/ajax/${email}`;
      let options = {
        method: "POST",
        body: new FormData(e.target),
      };

      let res = await fetch(url, options);

      if (!res.ok) {
        throw "Hubo un error al enviar la información, intenta nuevamente";
      }

      let json = await res.json();
      console.log(json);

      e.target.reset();
      $loader.classList.add("none");
      $response.classList.remove("none");

      $response.innerHTML = `${
        json.success
          ? "El formulario se envío con éxito"
          : "Hubo un error al enviar la información, intenta nuevamente"
      }`;

      setTimeout(() => {
        $response.classList.add("none");
        $response.innerHTML = "";
      }, 3000);
    } catch (error) {
      //console.warn(error);
      $response.classList.remove("none");
      $response.innerHTML = `<p><b>${error}</b></p>`;

      setTimeout(() => {
        $response.classList.add("none");
        $response.innerHTML = "";
      }, 3000);
    }
  });
}
