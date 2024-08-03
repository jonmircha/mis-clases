import { PoligonoRegular } from "./PoligonoRegular.js";

export class Cuadrado extends PoligonoRegular {
  constructor(lados, lado) {
    super(lados);

    if (lados !== 4) {
      throw new Error(`El Cuadrado tiene 4 lados`);
    }

    if (typeof lado !== "number") {
      throw new Error(`El atributo lado debe ser un número`);
    }

    if (lados <= 0) {
      throw new Error(`El atributo lado debe ser un número positivo`);
    }

    this.lado = lado;
  }

  obtenerPerimetro() {
    return this.lados * this.lado;
  }

  obtenerArea() {
    //return this.lado * this.lado;
    return Math.pow(this.lado, 2);
  }
}
