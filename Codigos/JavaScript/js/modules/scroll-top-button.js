export function scrollTopButton(btn) {
  const d = document,
    w = window,
    $scrollBtn = d.querySelector(btn);

  w.addEventListener("scroll", (e) => {
    //console.log(w.scrollX, w.scrollY);

    let scrollTop = w.scrollY || d.documentElement.scrollTop;

    if (scrollTop > 600) {
      $scrollBtn.classList.remove("hidden");
    } else {
      $scrollBtn.classList.add("hidden");
    }
  });

  $scrollBtn.addEventListener("click", (e) => {
    w.scrollTo({
      behavior: "smooth",
      top: 0,
      left: 0,
    });
  });
}
