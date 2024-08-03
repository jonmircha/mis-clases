export function numeroPrimo(numero) {
  if (typeof numero !== "number") {
    return console.error("Se esperaba un valor numérico");
  }

  if (numero <= 1 || Number.isInteger(numero) === false) {
    return console.warn(
      "El número ingresado debe ser entero, positivo, mayor a cero y uno"
    );
  }

  let divisible = false;

  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      divisible = true;
      break;
    }
  }

  return divisible
    ? console.log(`El número ${numero}, NO es primo`)
    : console.log(`El número ${numero}, SÍ es primo`);
}
