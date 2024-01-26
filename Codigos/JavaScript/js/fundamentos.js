console.log("Hola Mundo desde la Consola del Navegador");

//comentario de una línea

/* 
comentario 
de varias
líneas
*/

/*
let nombre = "Jonathan";
let Nombre = "Ulises"
let apellidos = "Miranda Charles";
*/

let nombre = "Jonathan",
  Nombre = "Ulises",
  apellidos = "Miranda Charles",
  edad = 38,
  temperatura = 17.56,
  negativos = -19,
  soltero = false,
  soyProfesor = true;

console.log(nombre);
console.log(typeof nombre);
console.log(Nombre);
console.log(apellidos);
console.log(edad);
console.log(typeof edad);
console.log(temperatura);
console.log(negativos);
console.log(soltero);
console.log(soyProfesor);
console.log(typeof soyProfesor);

//Concatenación: el operador + une strings y variables, podemos usar "" o ''

console.log(
  "Hola mi nombre es " +
    nombre +
    " " +
    Nombre +
    " " +
    apellidos +
    " y tengo " +
    edad +
    " años."
);

//Interpolación: Usa template strings `Cadena de texto ${variable}`;
console.log(
  `Hola mi nombre es ${nombre} ${Nombre} ${apellidos} y tengo ${edad} años.`
);

/*  
Definición de variables

La palabra resevada para declarar una variable es let, también se puede usar var, pero actualmente var es considerada mala práctica.
Las variables que se declaran con var son GLOBALES.

let - genera variables de bloque (BUENA PRÁCTICA)
var - genera variables globales (MALA PRÁCTICA)

Las variables tienen un ámbito o alcance.

Bloques - un bloque define el alcance o el ámbito una variable, cada vez que escribimos un {} estamos definiendo un bloque
*/

/* var hola = "Hola Mundo";
console.log(hola);

{
  var hola = "Hello World";
  console.log(hola);
}

console.log(hola); */

let hola = "Hola Mundo";
console.log(hola);

{
  let hola = "Hello World";
  console.log(hola);
}

console.log(hola);

/* Arrays / Arreglos -> es una lista de elementos */

let pasatiempos = ["Programar", "Hacer ejercicio", "Cocinar"];
console.log(pasatiempos);
console.log(pasatiempos.length);
console.log(pasatiempos[1]);

let datosPersonales = [
  "jonmircha",
  38,
  true,
  ["Cocinar", "Correr", ["Programación Frontend", "Maquetación de Interfaces"]],
];

console.log(datosPersonales[3][2][1]);
console.log(datosPersonales[1]);

/* 
Objects / objetos -> colección de datos agrupados en pares de clave:valor
*/

let objeto = {
  nombre: "Jon",
  edad: 38,
  esProgramador: true,
  pasatiempos: ["Cocinar", "Hacer ejercicio", "Programar"],
  contacto: {
    redesSociales: "@jonmircha",
    movil: "5512345678",
    correo: "jonmircha@gmail.com",
  },
  //Una función dentro de un objeto se llama MÉTODO
  imprimirDatos: function () {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Edad: ${this.edad}`);
    console.log(`Es Programador: ${this.esProgramador}`);
    console.log(`Pasatiempos: ${this.pasatiempos}`);
    console.log(`Datos de Contacto:`);
    console.log(`Redes Sociales: ${this.contacto.redesSociales}`);
    console.log(`Móvil: ${this.contacto.movil}`);
    console.log(`Correo: ${this.contacto.correo}`);
  },
};

console.log(objeto);
console.log(objeto.nombre);
console.log(objeto.pasatiempos[2]);
console.log(objeto.contacto.correo);
objeto.imprimirDatos();

/* 

Funciones

Son un conjunto de instrucciones (líneas de código) que van a ejecutar ciertas acciones.
Pueden recibir o no parámetros. Los parámetros son los datos que puede necesitar la función para internamente ejecutar sus sentencias.
Las funciones pueden o no retornar un valor, eso dependerá del propósito de la función.
*/

//Definición de función
function saludar() {
  console.log("Hola Mundo desde una función JS");
  console.log("Bienvenidos al maravilloso mundo de la Programación Web");
  console.log("JavaScript es el lenguaje de la Web");
}

//Ejecución o Invocación
saludar();
saludar();

function sumar(a, b) {
  let c = a + b;
  return c;
}

sumar(2, 4);
console.log(sumar(2, 1));

let suma = sumar(3, 4);
console.log(suma);

function calcularVelocidad(distancia, tiempo) {
  let velocidad = distancia / tiempo;
  return `La velocidad es ${velocidad} m/s`;
}

console.log(calcularVelocidad(100, 8));
console.log(calcularVelocidad(8));

function saludarA(nombre = "Desconocid@") {
  console.log(`Hola ${nombre}, ¿cómo estás?`);
}

saludarA();
saludarA("Irma");
saludarA("Jon");

console.log(typeof pasatiempos);
console.log(pasatiempos instanceof Array);
console.log(typeof objeto);
console.log(typeof sumar);

/* OBJETOS LITERALES  */

let book1 = {
  author: {
    firstName: "Ethan",
    lastName: "Marcotte",
  },
  title: "Responsive Web Design",
  editorial: "A Book Apart",
  year: "2011",
  getInfo: function () {
    console.log(
      `${this.author.lastName}, ${this.author.firstName} (${this.year}). ${this.title}. ${this.editorial}.`
    );
  },
};

book1.getInfo();

let book2 = {
  author: {
    firstName: "Scot",
    lastName: "Jehl",
  },
  title: "Responsible Responsive Design",
  editorial: "A Book Apart",
  year: "2014",
  getInfo: function () {
    console.log(
      `${this.author.lastName}, ${this.author.firstName} (${this.year}). ${this.title}. ${this.editorial}.`
    );
  },
};

book2.getInfo();

let book3 = {
  author: {
    firstName: "Luke",
    lastName: "Wroblewski",
  },
  title: "Mobile First",
  editorial: "A Book Apart",
  year: "2011",
  getInfo: function () {
    console.log(
      `${this.author.lastName}, ${this.author.firstName} (${this.year}). ${this.title}. ${this.editorial}.`
    );
  },
};

book3.getInfo();

/* 
PROTOTIPOS  
Los prototipos son un mecanismo mediante el cual los objetos en JavaScript heredan características entre sí.

Los prototipos hacen uso de funciones constructores
*/

/* 
Función Constructora Mala Práctica: Los métodos de una función constructora no se definen dentro de la función, se le agregan al Prototype.

function Book (title = "", author = { firstName:"", lastName:"" }, editorial = "", year ="") {
  //Atributo
  this.title = title;
  this.author = author;
  this.editorial = editorial;
  this.year = year;
  
  //Métodos
  this.getInfo = function () {
    console.log(`${this.author.lastName}, ${this.author.firstName} (${this.year}). ${this.title}. ${this.editorial}.`);
  }
} */

function Book(
  title = "",
  author = { firstName: "", lastName: "" },
  editorial = "",
  year = ""
) {
  //Atributo
  this.title = title;
  this.author = author;
  this.editorial = editorial;
  this.year = year;

  //Métodos
}

Book.prototype.getInfo = function () {
  console.log(
    `${this.author.lastName}, ${this.author.firstName} (${this.year}). ${this.title}. ${this.editorial}.`
  );
};

//EL operador new genera una nueva variable de tipo de dato que le indiquemos
let book4 = new Book(
  "HTML5 for Web Designers",
  { firstName: "Keith", lastName: "Keith" },
  "A Book Apart",
  "2016"
);
book4.getInfo();

let book5 = new Book(
  "Sustainable Web Dsign",
  { firstName: "Tom", lastName: "Greenwood" },
  "A Book Apart",
  "2021"
);
book5.getInfo();

console.log(book1, book2, book3, book4, book5);

/* Todo en JavaScript es un Objeto, hasta los primitivos */
let cadena = new String("Hola Mundo");
console.log(cadena);

/* Herencia basada en Prototipos */

function Person(firstName, lastName) {
  // Atributo
  this.firstName = firstName;
  this.lastName = lastName;
}

// Método
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

console.log("***POO con Prototipos***");
let personA = new Person("Chuchito", "Perez");
console.log(personA);
console.log(personA.getFullName());

function Teacher(firstName, lastName, subject) {
  this.super = Person;
  this.super(firstName, lastName);

  this.subject = subject;
}

Teacher.prototype = new Person();
Teacher.prototype.constructor = Teacher;

function Student(firstName, lastName, career) {
  this.super = Person;
  this.super(firstName, lastName);
  this.career = career;
}

Student.prototype = new Person();
Student.prototype.constructor = Student;

let teacherA = new Teacher("Jon", "MirCha", "Programación");
console.log(teacherA);
console.log(teacherA.getFullName());

let studentA = new Student("Pepito", "Gomez", "Ing. Interactiva");
console.log(studentA);
console.log(studentA.getFullName());

/* POO basada en Clases  */
class Persona {
  //el constructor es un método especial que se ejecuta en el momento de instanciar la clase
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

console.log("***POO con Clases***");
let personaA = new Persona("Irma", "Campos");
console.log(personaA);
console.log(personaA.getFullName());

class Profesor extends Persona {
  constructor(firstName, lastName, subject) {
    super(firstName, lastName);
    this.subject = subject;
  }

  getSubject() {
    return this.subject;
  }
}

let profesorA = new Profesor("Juanito", "Gonzalez", "Geometría");
console.log(profesorA);
console.log(profesorA.getFullName());
console.log(profesorA.getSubject());

class Estudiante extends Persona {
  constructor(firstName, lastName, career) {
    super(firstName, lastName);
    this.career = career;
  }

  //Polimorfismo: La capacidad de que una clase Hija sobre escriba métodos del padre, para sus objetivos internos
  getFullName() {
    return `${this.lastName} ${this.firstName}`;
  }

  getCareer() {
    return this.career;
  }
}

let estudianteA = new Estudiante("Anya", "Forger", "Primaria");
console.log(estudianteA);
console.log(estudianteA.getFullName());
console.log(estudianteA.getCareer());

/* Ejercicio Poligonos */
class PoligonoRegular {
  // Atributos
  constructor(lados) {
    this.lados = lados;
  }

  //Métodos
  obtenerPerimetro() {}

  obtenerArea() {}
}

class Triangulo extends PoligonoRegular {
  constructor(lados, ladoA, ladoB, ladoC, altura) {
    super(lados);
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

let miTriangulo = new Triangulo(3, 5, 4, 3, 6);
console.log(
  `El perímetro de mi triángulo es ${miTriangulo.obtenerPerimetro()}`
);
console.log(`El área de mi triángulo es ${miTriangulo.obtenerArea()}`);

class Cuadrado extends PoligonoRegular {
  constructor(lados, lado) {
    super(lados);
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

let miCuadrado = new Cuadrado(4, 8);
console.log(`El perímetro de mi cuadrado es ${miCuadrado.obtenerPerimetro()}`);
console.log(`El área de mi cuadrado es ${miCuadrado.obtenerArea()}`);

class Pentagono extends PoligonoRegular {
  constructor(lados, lado, apotema) {
    super(lados);
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

let miPentagono = new Pentagono(5, 6, 9);
console.log(
  `El perímetro de mi pentágono es ${miPentagono.obtenerPerimetro()}`
);
console.log(`El área de mi pentágono es ${miPentagono.obtenerArea()}`);
console.log(miPentagono);

/*
  Estructuras de Control:
    Mecanismo que nos permite controlar el flujo de nuestra programación.

    1) Estructuras Condicionales 
      - if - else
      - if - else if - else (ifs anidados)
      - switch - case (condicional múltiple)
      - Operador Ternario (Simplificación de un if - else)
    2) Estructuras Cíclicas o Repetitivas
      - for: for, for in, for of, forEach
      - while
 
  Tipos de Operadores
    1) Operadores Aritméticos
      +, - , *, / y %
    2) Operadores Relacionales
      >, <, >=, <=, ==, ===, !=, !==
    3) Operadores de Tipos de Datos
      typeof, instanceof 
    4) Operadores Lógicos
      && - AND - Y - todas las condiciones deben cumplirse
      || - OR - O - al menos una de las condiciones debe cumplirse
      ! - NOT - NEGACIÓN 
    5) Operadores de incremento o decremento
      i++, i--, i+=2, i-=4
*/

/* 
if - else

if(condición) {
  este código se ejecuta si la condición es verdadera
} else {
  este código se ejecuta si la condición es falsa
}
*/

let age = 38;

/* Cuando utilizamos >= o <=, se incluye de la condición el valor contra el que se compara */
if (age >= 18) {
  console.log(`Tienes ${age} años, entonces eres mayor de edad`);
} else {
  console.log(`Tienes ${age} años, entonces eres menor de edad`);
}

if (age <= 17) {
  console.log(`Tienes ${age} años, entonces eres menor de edad`);
} else {
  console.log(`Tienes ${age} años, entonces eres mayor de edad`);
}

/* Cuando utilizamos > o <, se excluye de la condición el valor contra el que se compara */
if (age > 17) {
  console.log(`Tienes ${age} años, entonces eres mayor de edad`);
} else {
  console.log(`Tienes ${age} años, entonces eres menor de edad`);
}

if (age < 18) {
  console.log(`Tienes ${age} años, entonces eres menor de edad`);
} else {
  console.log(`Tienes ${age} años, entonces eres mayor de edad`);
}

/* 
  ifs anidados

  0-3 bebé
  4-10 infante
  11-17 adolescente
  18-30 joven
  31-59 adulto
  +60 adulto mayor
*/

if (age <= 3) {
  console.log("Bebé 👶🏻");
} else if (age >= 4 && age <= 10) {
  console.log("Infante 👧🏻👦🏻");
} else if (age >= 11 && age <= 17) {
  console.log("Adolescente 👩🏻‍🎤👨🏻‍🎤");
} else if (age >= 18 && age <= 30) {
  console.log("Jovén 👩🏻🧑🏻");
} else if (age >= 31 && age <= 59) {
  console.log("Adulto 👩🏻‍💼👨🏻‍💼");
} else {
  console.log("Adulto Mayor 🧓🏻👴🏻");
}

/*
Actividad
  Saludo
    0hrs - 5hrs: Déjame Dormir.
    6hrs - 11hrs: Buenos días.
    12hrs - 18hrs: Buenas tardes. 
    19hrs - 23hrs: Buenas noches.

  El Objeto Date permite obtener la información de la fecha y hora
  https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date
*/
let fecha = new Date();
console.log(fecha);

let hora = fecha.getHours();
console.log(hora);

if (hora >= 0 && hora <= 5) {
  console.log(`Son las ${hora}hrs, déjame dormir 💤`);
} else if (hora >= 6 && hora <= 11) {
  console.log(`Son las ${hora}hrs, buenos dias 🖐`);
} else if (hora >= 12 && hora <= 18) {
  console.log(`Son las ${hora}hrs, buenas tardes 🍹`);
} else {
  console.log(`Son las ${hora}hrs, buenas noches 🎉`);
}

/*
  Los días de la semana en JS new Date().getDay()
   [
     "0 - Domingo",
     "1 - Lunes",
     "2 - Martes",
     "3 - Miércoles",
     "4- Jueves",
     "5 - Viernes",
     "6 - Sábado"
  ]
*/
let diaSemana = fecha.getDay();
console.log(diaSemana);

/* 
  == igual que, sólo compara valor
  === identico que, compara valor y tipo de dato
  != diferente que, sólo compara valor
  !== distinto que, compara valor y tipo de dato
*/
if (diaSemana === 0) {
  console.log("Domingo");
} else if (diaSemana === 1) {
  console.log("Lunes");
} else if (diaSemana === 2) {
  console.log("Martes");
} else if (diaSemana === 3) {
  console.log("Miércoles");
} else if (diaSemana === 4) {
  console.log("Jueves");
} else if (diaSemana === 5) {
  console.log("Viernes");
} else if (diaSemana === 6) {
  console.log("Sábado");
} else {
  console.log("Día no válido");
}

/* 
Switch - Case 

switch (variable) {
  case "valor1":
    sentencia1;
    sentencia2;
    break;
  case "valor2":
    sentencia1;
    sentencia2;
    break;
  case "valor3":
    sentencia1;
    sentencia2;
    break;
  default:
    sentencia1;
    sentencia2;
    break;
}
*/

switch (diaSemana) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sábado");
    break;
  default:
    console.log("Día no válido");
    break;
}

/* 
Actividad
  Haz un switch case para imprimir el nombre del mes en el que estamos y una festividad
*/
let mes = fecha.getMonth();
console.log(mes);

switch (mes) {
  case 0:
    console.log("Enero");
    console.log("Feliz año nuevo 🎉");
    break;
  case 1:
    console.log("Febrero");
    console.log("San Valentín ❤️");
    break;
  case 2:
    console.log("Marzo");
    console.log("Primavera 🌸");
    break;
  case 3:
    console.log("Abril");
    console.log("Pascuas 🐰🐰");
    break;
  case 4:
    console.log("Mayo");
    console.log("Día de la madre 👩‍👧‍👦");
    break;
  case 5:
    console.log("Junio");
    console.log("Día del padre 👨‍👧‍👦");
    break;
  case 6:
    console.log("Julio");
    console.log("Verano 🌞");
    break;
  case 7:
    console.log("Agosto");
    console.log("Día de la cerveza 🍻");
    break;
  case 8:
    console.log("Septiembre");
    console.log("Otoño 🍁");
    break;
  case 9:
    console.log("Octubre");
    console.log("Halloween 🎃");
    break;
  case 10:
    console.log("Noviembre");
    console.log("Día de muertos 💀");
    break;
  case 11:
    console.log("Diciembre");
    console.log("Invierno ⛄");
    break;
  default:
    console.log("Mes Inválido 📅");
    break;
}

/* 
Operador Ternario:
  Es la simplificación de un if-else pero que se puede expresar en una línea de código, y que adicionalmente se puede almacenar en una variable;

  if (condición) {
    verdadera
  } else {
    falsa
  }
  
  Sintaxis:
  let variable = (condición) ? verdadera : falsa;
*/

/* Algoritmo:
Serie de pasos ordenados y finitos para realizar una tarea o resolver un problema. */

/*
Algoritmo
Como determinar si un número es par o impar

1. Recibir un número
2. Dividirlo entre 2
3. Evaluar el residuo de la operación anterior
  3.1 Sí el residuo es 0, el número es par
  3.2 Sí el residuo es 1, el número es impar
*/

function parImpar(numero) {
  //validciones
  if (typeof numero !== "number") {
    console.error(
      `Lo que ingresaste: "${numero}"  no es un número, requiero que me des un número`
    );
    return;
  }

  if (!Number.isInteger(numero)) {
    console.warn(
      `El número que ingresaste: "${numero}" tiene parte fraccionaria, se requiere ingresar un número entero.`
    );
    return;
  }

  let residuo = numero % 2;

  /* if (residuo === 0) {
    console.log(`El número ${numero} es par`);
  } else {
    console.log(`El número ${numero} es impar`);
  } */

  let resultado =
    residuo === 0
      ? `El número ${numero} es par`
      : `El número ${numero} es impar`;

  console.log(resultado);
}

parImpar();
parImpar("2");
parImpar(true);
parImpar(19);
parImpar(20);
parImpar(20.49);
parImpar(20.97);

/* 
  Ciclos
    For
      es un ciclo que permite repetir un determinado código basado en que una condición se cumpla, en el momento en que la condición ya NO se cumple, entonces el ciclo termina.

      Cada vuelta de un ciclo se le llama iteración

      for tiene 3 partes
        1 - inicialización de la variable que controla el ciclo
        2 - condición a evaluar
        3 - incremento o decremento a la variable que controla el ciclo

      Sintaxis: 

      for (inicialización; condición; incremento o decremento) {
        bloque de
        sentencias que se
        ejecutan dentro
        del for
      }

    While
      antes del while hay que declarar la variable que lo controlará

      while (condición) {
        bloque de
        sentencias que se
        ejecutan dentro
        del while

        cómo última línea de código dentro del while hay que hacer el incremento o decremento de la variable que los controla
      } 
*/
console.log(`For`);

for (let contador = 0; contador <= 10; contador++) {
  console.log(`Número ${contador}`);
}

for (let contador = 0; contador <= 10; contador += 2) {
  console.log(`Número ${contador}`);
}

for (let contador = 10; contador >= 0; contador--) {
  console.log(`Número ${contador}`);
}

for (let contador = 10; contador >= 0; contador -= 2) {
  console.log(`Número ${contador}`);
}

console.log(`While`);
let contadorWhile = 0;

while (contadorWhile <= 10) {
  console.log(`Número ${contadorWhile}`);
  contadorWhile++;
}

/* 
  Temporizadores
    setTimeout
      https://developer.mozilla.org/es/docs/Web/API/setTimeout
      -> Ejecuta una función después de cierto intervalo de tiempo
    setInterval
      https://developer.mozilla.org/es/docs/Web/API/setInterval
      -> Ejecuta cada determinado intervalo tiempo una función
*/

setTimeout(function () {
  console.log("Hola después de 2 segundos");
}, 2000);

setInterval(function () {
  console.log("Hola después de 3 segundos");
}, 3000);

function darLaHora() {
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

setInterval(function () {
  console.log(darLaHora());
}, 1000);

function factorial(numero) {
  if (typeof numero !== "number") {
    return console.error("Se esperaba un valor numérico");
  }

  /* 
    Estas dos expresiones significan lo mismo:
      Acá decimos que es igual a falso -> Number.isInteger(numero) === false 
      Acá negamos y convertimos a falso -> !Number.isInteger(numero)
  */

  if (numero <= 0 || Number.isInteger(numero) === false) {
    return console.warn(
      "El número ingresado debe ser entero, positivo y mayor a cero"
    );
  }

  let resultado = 1;

  for (let contador = numero; contador > 1; contador--) {
    //console.log(`${resultado} X ${contador}`);
    resultado = resultado * contador;
    //console.log(`= ${resultado}`);
  }

  //return resultado;

  console.log(`El factorial del número ${numero} es ${resultado}`);
}

factorial(8);
factorial(5);
factorial(4);
factorial(3);
factorial(-5);
factorial();
factorial("5");
factorial([1, 2]);
factorial(0);
factorial(1);
factorial(1.5);

function numeroPrimo(numero) {
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

numeroPrimo();
numeroPrimo("320");
numeroPrimo(0);
numeroPrimo(1);
numeroPrimo(-13);
numeroPrimo(13);
numeroPrimo(200);

/* 
Constantes

Una constante en JavaScript es una variable que:

- En tipos primitivos no va a cambiar su valor y 
- En tipos complejos no va a cambiar su tipo

Para declarar una constante se usa la palabra reservada const
*/

//let PI = Math.PI;
const PI = Math.PI;
console.log(PI);

//PI = 3.1416;
//console.log(PI);

const HOLA = "Hola Mundo";
console.log(HOLA);

//HOLA = "Hello World";
//console.log(HOLA);

const unObjeto = {
  nombre: "Jon",
  edad: 38,
};

console.log(unObjeto);

//unObjeto = "jonmircha@gmail.com";
unObjeto.correo = "jonmircha@gmail.com";
console.log(unObjeto);

const unArreglo = [1, 2, 3, 4, 5];
console.log(unArreglo);

unArreglo.push(6);
console.log(unArreglo);

/*
Funciones Declaradas vs Funciones Expresadas

Función Declarada: Es aquella función que se inicializa directamente con la palabra reservada function 

Funcion Expresada: Es aquella función que se almacena en una variable o constante, a diferencia de las funciones declaradas donde se usa la palabra reservada function.

Diferencias:
  - Una función declarada se inicializa con function, mientras que una expresada se almacena en una variable o constante.
  - Una función declarada puede invocarse en cualquier parte del archivo donde se encuentre sin importar si la declaración existe antes o después de la invocación, gracias a un concepto que JS tiene que se llama "Function Hoisting" o elevación de funciones.
  - Una función expresada no puede invocarse si previamente no ha sido declarada.
  - Más información: https://www.youtube.com/watch?v=H6U1Pm7x60E&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA
*/

//Función declarada
sayHi();

function sayHi() {
  console.log("Hola Mundo");
}

//Función expresada
//sayHi2();

const sayHi2 = function () {
  console.log("Hola Mundo 2");
};

sayHi2();

/* 
Arrow Function y Funciones expresadas

Una arrow function o función flecha es una simplificación de la definición de una función normal, con la característica de que no genera contexto this, hereda el contexto this en donde se encuentre, otra característica es que podemos hacer retornos de valores implícitos. Una arrow function siempre será una función expresada.

Más información:
  - https://www.youtube.com/watch?v=WuCw9agV3Rc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA
*/
const sayHi3 = () => {
  console.log("Hola Mundo 3");
};

sayHi3();

function add(a, b) {
  return a + b;
}
console.log(add(8, 9));

//return implícito
const add2 = (a, b) => a + b;
console.log(add2(8, 9));

setInterval(function () {
  console.log(new Date().toLocaleString());
}, 1000);

setInterval(() => console.log(new Date().toLocaleString()), 1000);

//Contexto this heredado
const soyUnObjeto = {
  nombre: "Soy un objeto",
  declarada: function () {
    console.log(this);
  },
  flecha: () => {
    console.log(this);
  },
};

soyUnObjeto.declarada();
soyUnObjeto.flecha();

const aleatorio = () => console.log(Math.round(Math.random() * 100));

aleatorio();

const obtenerGanador = (participantes) => {
  if (!(participantes instanceof Array))
    return console.error("Se esperaba un arreglo de nombres");

  if (participantes.length === 0) return console.error("El arreglo esta vacío");

  if (participantes.length === 1)
    return console.error(
      "Para obtener un ganador, al menos debe haber 2 participantes"
    );

  for (let el of participantes) {
    if (typeof el !== "string")
      return console.error(`El valor "${el}" ingresado, NO es un string`);
  }

  let random = Math.floor(Math.random() * participantes.length),
    ganador = participantes[random];

  /* return console.log({
    participantes: participantes,
    ganador: ganador,
  }); */

  return console.log({
    participantes,
    ganador,
  });
};

obtenerGanador();
obtenerGanador([]);
obtenerGanador([1, 2]);
obtenerGanador([
  "Jonathan",
  "Irma",
  "kEnAi",
  "Miguel",
  "Kala",
  "Luis",
  "Leticia",
  "Oliver",
]);

const separarParesImpares = (nums) => {
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

separarParesImpares();
separarParesImpares([]);
separarParesImpares([2, 4, "j"]);
separarParesImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

const ordenarNumeros = (nums) => {
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
    ascendente: nums.map((el) => el).sort((a, b) => a - b),
    descendente: nums
      .map((el) => el)
      .sort((a, b) => a - b)
      .reverse(),
  });
};

ordenarNumeros();
ordenarNumeros([]);
ordenarNumeros([3]);
ordenarNumeros([3, false]);
ordenarNumeros([7, 5, 10, 7, 8, 19, 6]);
