export function relojDigital() {
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
}
