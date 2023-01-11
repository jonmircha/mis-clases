export const separarParesImpares = (nums) => {
  if (!(nums instanceof Array))
    return console.error("Se esperaba un arreglo de números");

  if (nums.length === 0) return console.error("El arreglo esta vacío");

  for (let el of nums) {
    if (typeof el !== "number")
      return console.error(`El valor "${el}" ingresado, NO es un número`);
  }

  return console.log({
    pares: nums.filter((el) => el % 2 === 0),
    impares: nums.filter((el) => el % 2 === 1),
  });
};
