import { PoligonoRegular } from "./PoligonoRegular.js";

export class Triangulo extends PoligonoRegular {
  constructor(lados, ladoA, ladoB, ladoC, altura) {
    super(lados);

    if (lados !== 3) {
      throw new Error(`El Tríangulo tiene 3 lados`);
    }

    if (
      typeof ladoA !== "number" ||
      typeof ladoB !== "number" ||
      typeof ladoC !== "number" ||
      typeof altura !== "number"
    ) {
      throw new Error(
        `Los atributos ladoA, ladoB, ladoC y altura deben ser un número`
      );
    }

    if (ladoA <= 0 || ladoB <= 0 || ladoC <= 0 || altura <= 0) {
      throw new Error(
        `Los atributos ladoA, ladoB, ladoC y altura deben ser mayor a 0`
      );
    }

    this.ladoA = ladoA;
    this.ladoB = ladoB;
    this.ladoC = ladoC;
    this.altura = altura;
  }

  obtenerPerimetro() {
    return this.ladoA + this.ladoB + this.ladoC;
  }

  obtenerArea() {
    return (this.ladoB * this.altura) / 2;
  }
}
