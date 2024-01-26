export const ordenarNumeros = (nums) => {
  if (!(nums instanceof Array))
    return console.error("Se esperaba un arreglo de números");

  if (nums.length === 0) return console.error("El arreglo esta vacío");

  if (nums.length === 1)
    return console.error("El arreglo sólo tiene un número");

  for (let el of nums) {
    if (typeof el !== "number")
      return console.error(`El valor "${el}" ingresado, NO es un número`);
  }

  return console.log({
    original: nums,
    ascendente: nums.map((el) => el).sort(),
    descendente: nums
      .map((el) => el)
      .sort()
      .reverse(),
  });
};
