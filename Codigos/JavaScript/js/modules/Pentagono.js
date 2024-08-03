import { PoligonoRegular } from "./PoligonoRegular.js";

export class Pentagono extends PoligonoRegular {
  constructor(lados, lado, apotema) {
    super(lados);

    if (lados !== 5) {
      throw new Error(`El Pentágono tiene 5 lados`);
    }

    if (typeof lado !== "number" || typeof apotema !== "number") {
      throw new Error(`Los atributos lado y apotema deben ser un número`);
    }

    if (lados <= 0 || apotema <= 0) {
      throw new Error(
        `Los atributos lado y apotema deben ser un números positivos`
      );
    }

    this.lado = lado;
    this.apotema = apotema;
  }

  obtenerPerimetro() {
    return this.lados * this.lado;
  }

  obtenerArea() {
    return (this.obtenerPerimetro() * this.apotema) / 2;
  }
}
