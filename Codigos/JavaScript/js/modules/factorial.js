export function factorial(numero) {
  if (typeof numero !== "number") {
    return console.error(
      `Lo que ingresaste NO es un número, por tal no puedo calcular el factorial`
    );
  }

  if (numero <= 0 || Number.isInteger(numero) === false) {
    return console.warn(
      `El número que ingresaste no es positivo o no es entero, por tal motivo no puedo calcular el factorial`
    );
  }

  let resultado = 1;

  for (let contador = numero; contador > 1; contador--) {
    resultado = resultado * contador;
  }

  //return resultado;

  console.log(`El factorial del número ${numero} es ${resultado}`);
}
