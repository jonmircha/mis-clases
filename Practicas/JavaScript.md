# Prácticas sobre _JavaScript_

## Práctica 1

Con lo aprendido sobre los Tipos de Datos:

Construye un objeto que dentro tenga:

- Tu información personal (nombre, edad, datos de contacto, etc).
- Incluye pasatiempos y
- La información de tus 3 películas favoritas.

Dentro de tu objeto incluye todos los tipos de datos vistos hasta el momento (_strings_, _numbers_, _booleans_, _functions_, _arrays_ y _objects_).

En la tarea sólo agrega el enlace de tu proyecto en _CodeSandbox_.

---

## Práctica 2

Con lo aprendido en clase vas a formar la ficha bibliográfica de tus 3 libros favoritos.

Cada libro será un objeto.

Dentro de dicho objeto cada dato del libro será una propiedad del objeto, cada libro deberá tener un método que al ejecutarlo en la consola, imprima la ficha bibliográfica del mismo.

En la tarea sólo agrega el enlace de tu proyecto en _CodeSandbox_.

---

## Práctica 3

Convierte el código de la **práctica 2** en una función constructora prototípica.

En la tarea sólo agrega el enlace de tu proyecto en _CodeSandbox_.

---

## Práctica 4

Aplica Progrmación Orientada a Objetos, Herencia y Polimorfismo con Clases con el siguiente planteamiento:

Vamos a calcular el perímetro y área de 3 Polígonos regulares: Tríangulo, Cuadrado y Pentágono.

Para ello tendrás que crear una clase padre llamada Polígono y 3 clases hijas una por cada figura solicitada.

En la tarea sólo agrega el enlace de tu proyecto en _CodeSandbox_.

---

## Práctica 5

Con lo aprendido sobre condicionales, manda a imprimir en la consola del navegador los siguientes mensajes, dependiendo la hora del día:

- De **0hrs - 5hrs** imprime el mensaje **Déjame Dormir**.
- De **6hrs - 11hrs** imprime el mensaje **Buenos días**.
- De **12hrs - 18hrs** imprime el mensaje **Buenas tardes**.
- De **19hrs - 23hrs** imprime el mensaje **Buenas noches**.

El Objeto _**Date**_ permite obtener la información de la fecha y hora, puedes revisar su documentación en [este enlace](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date).

En la tarea sólo agrega el enlace de tu proyecto en _CodeSandbox_.

---

## Práctica 6

Con lo aprendido sobre condicionales, usa un _switch_ para mandar a imprimir en la consola del navegador el nombre del mes en el que estamos y una festividad alusiva al mes.

En la tarea sólo agrega el enlace de tu proyecto en _CodeSandbox_.

---

## Práctica 7

Con lo aprendido sobre condicionales, operadores, el objeto _Date_ y los temporizadores, crea una función que imprima en la consola del navegador un reloj digital que muestre horas, minutos, segundos y este en formato am/pm.

Agrega validaciones a tu código.

Antes de escribir el código fuente del ejercicio deja un comentario y en este, escribe el algoritmo para resolver este ejercicio.

Esta práctica **vale por 2**.

En la tarea sólo agrega el enlace de tu proyecto en _CodeSandbox_.

---

## Práctica 8

Con lo aprendido sobre ciclos, crea una función para obtener el factorial de un número.

Considera lo siguiente, para obtener el factorial:

- El número en cuestión tiene que ser positivo, entero y mayor a cero.
- El factorial se define como el producto de todos los números naturales anteriores o iguales a él, por ejemplo:

```
!5 = 5 x 4 x 3 x 2 x 1 = 120
!4 = 4 x 3 x 2 x 1 = 24
!3 = 3 x 2 x 1 = 6
```

Agrega validaciones a tu código.

Antes de escribir el código fuente del ejercicio deja un comentario y en este, escribe el algoritmo para resolver este ejercicio.

Esta práctica **vale por 2**.

En la tarea sólo agrega el enlace de tu proyecto en _CodeSandbox_.

---

## Práctica 9

Con lo aprendido sobre ciclos, crea una función para determinar si un número dado es **Primo**.

Considera lo siguiente, un número primo es aquel que:

- Es positivo, entero y mayor a cero.
- Es divisible sólo entre el mismo y la unidad.
- La unidad (número uno) no es considerado primo.

Agrega validaciones a tu código.

Antes de escribir el código fuente del ejercicio deja un comentario y en este, escribe el algoritmo para resolver este ejercicio.

Esta práctica **vale por 2**.

En la tarea sólo agrega el enlace de tu proyecto en _CodeSandbox_.

---

## Práctica 10

Con lo aprendido sobre constantes, tipos de funciones, arreglos y validaciones, crea una función que dado un arreglo de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, la salida de tu consola tendría que verse así:

Al ejecutar tu función:

```js
separarParesImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
```

Al devolver el resultado:

```js
{
  pares: [2,4,6,8,0],
  impares: [1,3,5,7,9]
}
```

Agrega validaciones a tu código.

Para resolver este ejercicio tendrás que investigar sobre el método _**filter**_ de los Arreglos.

En la tarea sólo agrega el enlace de tu proyecto en _CodeSandbox_.

---

## Práctica 11

Con lo aprendido sobre constantes, tipos de funciones, arreglos y validaciones, crea una función que dado un arreglo de números devuelva un objeto con tres arreglos, el primero tendrá los numeros en el orden que fueron pasados a la función, el segundo tendrá los números ordenados en forma ascendente y el último de forma descendiente, la salida de tu consola tendría que verse así:

Al ejecutar tu función:

```js
ordenarNumeros([7, 5, 10, 7, 8, 19, 6]);
```

Al devolver el resultado:

```js
{
  original: [7, 5, 10, 7, 8, 19, 6],
  ascendente: [5, 6, 7, 7, 8, 10, 19],
  descendente: [19, 10, 8, 7, 7, 6, 5]
}
```

Agrega validaciones a tu código.

Para resolver este ejercicio tendrás que investigar sobre los métodos _**map**_, _**sort**_ y _**reverse**_ de los Arreglos.

En la tarea sólo agrega el enlace de tu proyecto en _CodeSandbox_.

---

## Práctica 12

Con lo aprendido sobre los Módulos:

Crea un nuevo proyecto en _CodeSandbox_ y convierte a módulos los siguientes ejercicios:

1. Reloj Digital.
1. Factorial.
1. Número Primo.
1. Separar número pares e impares.
1. Ordenar números.
1. Polígonos Regulares:
   - Por cada polígono crea un archivo _js_.
   - Agrega validaciones a tus clases de los polígonos.

En la tarea sólo agrega el enlace de tu proyecto en _CodeSandbox_.

---

## Práctica 13

Con lo aprendido sobre la introducción al _DOM_, haz un documento _HTML_ dinámico, con las siguientes características:

1. Crea un documento _HTML_ con etiquetas vacias en el _body_ y carga dinámicamente con _JavaScript_ tu información personal:
   - Tu nombre en una etiqueta _h1_.
   - Tu foto en una etiqueta _img_ (foto real, no memé, no avatar, no imagen random).
   - Una breve biografía en una etiqueta _p_.
   - Tus pasatiempos en una etiqueta _ol_.
   - Tu información de contacto (correo, redes, sitios, etc.) en una etiqueta _ul_.
1. Aplica 3 estilos _CSS_ dinámicamente con _JavaScript_ a cada elemento _HTML_ de tu documento.

En la tarea sólo agrega el enlace de tu proyecto en _CodeSandbox_.

---

## Práctica 14

Con lo aprendido sobre la manipulación del _DOM_, haz lo siguiente:

1. Trabajarás con el documento _HTML_ creado en la práctica 4.
1. Crea un elemento con el método _**createElement**_ y agrégalo al documento con el método _**appendChild**_.
1. Crea contenido dinámico en algún elemento usando el método _**insertAdjacentElement**_
1. Crea contenido dinámico en algún elemento usando el método _**insertAdjacentHTML**_
1. Crea contenido dinámico en algún elemento usando el método _**insertAdjacentText**_
1. Crea 3 clases diferentes en tu hoja de estilos y agrégalas dinámicamente a algún elemento _HTML_ con los métodos _JavaScript_ vistos en clase.
1. Módifica dinámicamente 3 atributos de alguno de los elementos _HTML_ que tengas en tu documento.
1. Crea dinámicamente 3 _data-attributes_ en alguno de los elementos _HTML_ que tengas en tu documento.

En la tarea sólo agrega el enlace de tu proyecto en _CodeSandbox_.

---

## Práctica 15

Con lo aprendido sobre los eventos, haz lo siguiente:

1. Trabajarás con el documento _HTML_ de la práctica 13 y 14.
1. Asigna 2 eventos que modifiquen algo en la _UI_ de tu documento.
1. Aplica 1 evento a varios elementos _HTML_ con la técnica de la delegación de eventos.

En la tarea sólo agrega el enlace de tu proyecto en _CodeSandbox_.

---

## Práctica 16

Con lo visto en clase y tomando como referencia los ejercicios hechos con el profesor.

Crea un módulo con la funcionalidad de un botón de _scroll_ vertical.

Deberás programar un evento al objeto _window_, que después de haber pasado _600px_ de desplazamiento respecto de la barra de _scroll_ vertical, haga aparecer o desaparecer un botón que al darle _click_, te regrese al inicio (_top_) del documento _HTML_.

Para este ejercicio considera investigar lo siguiente:

- El evento _**scroll**_ del objeto _**window**_.
- Las propiedades _**scrollY**_ y _**scrollX**_ del objeto _**window**_.
- El método _**scrollTo**_ del objeto _**window**_.
- Cuando la barra de desplazamiento vertical este a más de 600px de separación del margen superior, el botón debe mostrarse, a menor distancia debe ocultarse.

En la tarea sólo agrega el enlace de tu proyecto en _CodeSandbox_.

---

## Práctica 17

Con lo visto en clase y tomando como referencia los ejercicios hechos con el profesor.

Crea un módulo con la funcionalidad del _Dark Theme_.

Deberás programar un botón que al darle _click_ cambié la interfaz de modo claro a obscuro y viceversa. También debe recordar la última elección del usuario al recargar el navegador.

Para este ejercicio considera investigar lo siguiente:

- El evento _**DOMContentLoaded**_ del objeto _**document**_.
- La _API_ de _**localStorage**_.

En la tarea sólo agrega el enlace de tu proyecto en _CodeSandbox_.

---

## Práctica 18

Con lo visto en clase y tomando como referencia los ejercicios hechos con el profesor.

Crea un módulo con la funcionalidad de un reloj digital en formato de 12 horas (am/pm) que sea visible en el documento _HTML_.

Además agrega 2 botones a la interfaz. El primero deberá iniciar el reloj, el segundo deberá detener el reloj.

Considera lo siguiente:

- El reloj debe visualizarse, en el momento en que el usuario de _click_ al primer botón.
- Mientras el reloj esté activo, el primer botón debe estar inhabilitado.
- Al dar _click_ al segundo botón, el primer botón debe habilitarse y el reloj debe detenerse.

Para este ejercicio considera investigar lo siguiente:

- Métodos de temporizadores: _**setInterval**_ y _**clearInterval**_.
- El objeto _**Date**_.

En la tarea sólo agrega el enlace de tu proyecto en _CodeSandbox_.

---

## Práctica 19

Con lo visto en clase y tomando como referencia los ejercicios hechos con el profesor.

Crea un módulo con la funcionalidad de sorteo.

Considera lo siguiente:

- Tu código debe obtener un ganador apartir de una lista de participantes.
- La lista de participantes la debes obtener de un lista ordenada (_ol_) que exista en tu documento _HTML_.
- Debes tener un botón que al darle _click_ ejecute la funcionalidad del sorteo.
- El nombre del elemento ganador, debe imprimirse en el documento _HTML_.

Para este ejercicio considera investigar lo siguiente:

- Métodos del objeto _**Array**_.
- Métodos del objeto _**Math**_.

En la tarea sólo agrega el enlace de tu proyecto en _CodeSandbox_.

---

## Práctica 20

Con lo visto en clase y tomando como referencia los ejercicios hechos con el profesor.

Crea un formulario con validaciones.

Considera lo siguiente, tu formulario deberá contener:

- Al menos 4 elementos de formulario.
- Cada elemento debera tener al menos 1 validación.
- Tus 4 validaciones mínimas deberán ser diferentes a las vistas en clase.
- Al menos deberás usar 2 expresiones regulares en tus validaciones y estás deben ser diferentes a las vistas en clase.
- Cada validación debe tener su mensaje de error, puedes usar la misma programación vista en clase.
- Tu formulario debe simular el envío de datos, puedes usar la misma programación vista en clase.

Esta práctica **vale por 2**.

En la tarea sólo agrega el enlace de tu proyecto en _CodeSandbox_.

---

## Práctica 21

Con lo visto en clase y tomando como referencia los ejercicios hechos con el profesor.

Crea un documento _HTML_, donde puedas cargar dinámicamente mediante _JavaScript_ y _AJAX_, la información de un archivo _JSON_, que tenga los siguentes datos de cada una de las materias que cursas, este semestre:

- Nombre de la materia
- Nombre del docente y
- Una breve descripción de lo que estás aprendiendo en ella.

En la tarea sólo agrega el enlace de tu proyecto en _CodeSandbox_.

---

## Práctica 22

Con lo visto en clase y tomando como referencia los ejercicios hechos con el profesor.

Elige alguna _API_ de alguno de estos sitios:

- [https://publicapi.dev/](https://publicapi.dev/)
- [https://github.com/public-apis/public-apis](https://github.com/public-apis/public-apis)

Que no se haya visto en clase e interactua con ella.

Crea un documento _HTML_, donde puedas cargar dinámicamente mediante _JavaScript_ y _AJAX_, la información de la _API_.

Tu ejercicio deberá cumplir con 4 requisitos:

1. Tu programación estructurada en módulos.
1. Modificación dinámica del _DOM_.
1. Asignación de eventos.
1. Carga dinámica de datos de la _API_ que elijas en el _DOM_ de tu documento.

Esta práctica **vale por 2**.

En la tarea sólo agrega el enlace de tu proyecto en _CodeSandbox_.

---

## Proyecto Final

Con los conocimientos adquiridos en la materia el estudiante desarrollará una Aplicación _Web_ Isomórfica en _JavaScript_.

La aplicación _web_ deberá contar con las siguientes características:

- La temática de la aplicación es libre.
- El código fuente de la aplicación deberá estar en un proyecto de _CodeSandbox_.
- La programación tendrá que organizarse en módulos, uno por cada funcionalidad.
- La aplicación deberá tener 4 funcionalidades de tipo _DOM_, cada funcionalidad deberá justificarse a nivel de _UI_ e interactividad.
- Para la _UI_ se puede usar _HTML_ y _CSS_ plano o algún _Framework Frontend_.
- La aplicación deberá tener 2 funcionalidades de tipo _APIs_, cada funcionalidad deberá justificarse a nivel de _UI_ e interactividad.
- Para las funcionalidades de tipo _APIs_ puedes elegir algun servicio de estos sitios:
  - [https://publicapi.dev/](https://publicapi.dev/)
  - [https://github.com/public-apis/public-apis](https://github.com/public-apis/public-apis)
- La aplicación deberá contar con sistema de autenticación, puedes elegir cualquiera de los métodos de acceso que te ofrece _Firebase_.
- La aplicación deberá contar con un sistema _CRUD_ de base de datos en _Firebase_, dicho _CRUD_ deberá ser privado, es decir, para acceder se deberá estar logueado en la aplicación.
- Los datos que modifiques en el _CRUD_ privado, deberán modificar alguna sección de la parte pública de la aplicación.

### Evaluación

- **40%** Funcionalidades del _DOM_ (10% c/u).
- **20%** Funcionalidades de _APIs_ (10% c/u).
- **20%** Sistema de Autenticación.
- **20%** Almacenado privado de datos (_CRUD Firebase_).

En la tarea sólo agrega el enlace de tu proyecto en _CodeSandbox_.

### Fecha de Entrega: Martes 29 de Noviembre de 2022 a las 1pm.

---
