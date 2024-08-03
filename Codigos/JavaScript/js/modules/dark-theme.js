export function darkTheme(btn, classDark) {
  const d = document,
    ls = localStorage,
    $themeBtn = d.querySelector(btn),
    $selectors = d.querySelectorAll("[data-dark]");

  //console.log($selectors);

  let moon = "🌙",
    sun = "☀️";

  const lightMode = () => {
    $selectors.forEach((el) => el.classList.remove(classDark));
    $themeBtn.innerText = moon;
    ls.setItem("theme", "light");
  };

  const darkMode = () => {
    $selectors.forEach((el) => el.classList.add(classDark));
    $themeBtn.innerText = sun;
    ls.setItem("theme", "dark");
  };

  $themeBtn.addEventListener("click", (e) =>
    $themeBtn.innerText === moon ? darkMode() : lightMode()
  );

  d.addEventListener("DOMContentLoaded", (e) => {
    if (ls.getItem("theme") === null) ls.setItem("theme", "light");
    if (ls.getItem("theme") === "light") lightMode();
    if (ls.getItem("theme") === "dark") darkMode();
  });
}
