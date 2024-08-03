export function clock(clock, btnPlay, btnStop) {
  const d = document;
  let clockTempo;

  const showClock = () => {
    let fecha = new Date(),
      segundos = fecha.getSeconds(),
      minutos = fecha.getMinutes(),
      horas = fecha.getHours(),
      amPm = horas >= 12 ? "pm" : "am",
      segundosAjustados = segundos <= 9 ? `0${segundos}` : segundos,
      minutosAjustados = minutos <= 9 ? `0${minutos}` : minutos,
      horasAmPm = horas >= 13 ? horas - 12 : horas,
      horasAjustadas = horasAmPm <= 9 ? `0${horasAmPm}` : horasAmPm,
      reloj = `${horasAjustadas}:${minutosAjustados}:${segundosAjustados} ${amPm}`;
    return reloj;
  };

  d.querySelector(btnPlay).addEventListener("click", (e) => {
    clockTempo = setInterval(() => {
      d.querySelector(clock).innerHTML = `<h3>${showClock()}</h3>`;
    }, 1000);

    e.target.disabled = true;
  });

  d.querySelector(btnStop).addEventListener("click", (e) => {
    clearInterval(clockTempo);
    d.querySelector(btnPlay).disabled = false;
  });
}
