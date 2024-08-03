export function suma(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.error(`a o b no son números`);
    return;
  }

  return a + b;
}
