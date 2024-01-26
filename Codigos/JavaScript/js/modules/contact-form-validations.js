export function contactFormValidations(form) {
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

  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    //alert("Enviando Formulario");

    const $loader = d.querySelector(`${form} .loader`),
      $response = d.querySelector(`${form} .form-response`);

    $loader.classList.remove("none");

    setTimeout(() => {
      $loader.classList.add("none");
      $response.classList.remove("none");
      $form.reset();
      setTimeout(() => $response.classList.add("none"), 3000);
    }, 3000);
  });
}
