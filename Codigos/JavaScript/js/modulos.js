import { suma } from "./modules/suma.js";
import { resta } from "./modules/resta.js";
import {
  sumar,
  restar,
  multiplicar,
  dividir,
  modulo,
} from "./modules/calculadora.js";
import { relojDigital } from "./modules/reloj-digital.js";
import { factorial } from "./modules/factorial.js";
import { numeroPrimo } from "./modules/numero-primo.js";
import { separarParesImpares } from "./modules/separar-pares-impares.js";
import { ordenarNumeros } from "./modules/ordenar-numeros.js";
//import { PoligonoRegular } from "./modules/PoligonoRegular.js";
import { Triangulo } from "./modules/Triangulo.js";
import { Cuadrado } from "./modules/Cuadrado.js";
import { Pentagono } from "./modules/Pentagono.js";

console.log(suma(8, 9));
console.log(suma(8, "9"));
console.log(resta(8, 9));

console.log(sumar(8, 9));
console.log(restar(8, 9));
console.log(multiplicar(8, 9));
console.log(dividir(8, 9));
console.log(modulo(8, 9));

setInterval(function () {
  console.log(relojDigital());
}, 1000);

factorial();
factorial(6);

numeroPrimo();
numeroPrimo(19);

separarParesImpares();
separarParesImpares([5, 4, "j"]);
separarParesImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

ordenarNumeros();
ordenarNumeros([3, false]);
ordenarNumeros([7, 5, 7, 8, 6]);

//let miPoligono = new PoligonoRegular(3);
//console.log(miPoligono);

let miTriangulo = new Triangulo(3, 5, 4, 3, 6);
console.log(
  `El perímetro de mi triángulo es ${miTriangulo.obtenerPerimetro()}`
);
console.log(`El área de mi triángulo es ${miTriangulo.obtenerArea()}`);

let miCuadrado = new Cuadrado(4, 8);
console.log(`El perímetro de mi cuadrado es ${miCuadrado.obtenerPerimetro()}`);
console.log(`El área de mi cuadrado es ${miCuadrado.obtenerArea()}`);

let miPentagono = new Pentagono(5, 6, 9);
console.log(
  `El perímetro de mi pentágono es ${miPentagono.obtenerPerimetro()}`
);
console.log(`El área de mi pentágono es ${miPentagono.obtenerArea()}`);
