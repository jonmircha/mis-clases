export function togglePanel(panelBtn, panel) {
  const d = document,
    $panelBtn = d.querySelector(panelBtn),
    $panel = d.querySelector(panel);

  $panelBtn.addEventListener("click", (e) => {
    $panelBtn.classList.toggle("is-active");
    $panel.classList.toggle("is-active");
  });
}
