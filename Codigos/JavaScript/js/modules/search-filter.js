export function searchFilter(input, selector) {
  const d = document;

  const toggleFilter = (input) => {
    d.querySelectorAll(selector).forEach((el) =>
      el.innerText.toLowerCase().includes(input.value)
        ? el.classList.remove("filter")
        : el.classList.add("filter")
    );
  };

  d.addEventListener("keyup", (e) => {
    if (!e.target.matches(input)) return false;

    //console.log(e.key);
    //console.log(e.target.value);

    toggleFilter(e.target);

    //if (e.key === "Escape") e.target.value = "";
  });

  d.addEventListener("search", (e) => {
    if (!e.target.matches(input)) return false;

    //console.log("Limpiando búsqueda");

    if (!e.target.value) toggleFilter(e.target);
  });
}
