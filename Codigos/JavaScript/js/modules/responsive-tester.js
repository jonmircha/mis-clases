export function responsiveTester(selector) {
  const d = document,
    w = window,
    $form = d.querySelector(selector);

  let tester;

  d.addEventListener("submit", (e) => {
    if (!e.target.matches(selector)) return false;

    e.preventDefault();
    tester = w.open(
      $form.url.value,
      "tester",
      `innerWidth=${$form.width.value},
            innerHeight=${$form.height.value}`
    );
  });

  d.addEventListener("click", (e) => {
    if (e.target !== $form.close) return false;
    tester.close();
    $form.reset();
  });
}
