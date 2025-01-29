# Introducción al Desarrollo Web y HTML Básico

El desarrollo web es un campo emocionante que permite dar vida a ideas y proyectos a través de internet. En esta primera sesión, exploraremos los fundamentos de HTML, el lenguaje de marcado que sirve como base para la creación de páginas web.

---

## ¿Qué es el Frontend?

El Frontend es la parte visible de una aplicación web, lo que los usuarios ven e interactúan directamente. Se construye utilizando tres pilares principales:

1. **HTML (HyperText Markup Language):** Define la estructura y el contenido.
2. **CSS (Cascading Style Sheets):** Controla el diseño y la apariencia.
3. **JavaScript:** Añade interactividad y dinámica.

En esta sesión, nos enfocaremos en el primer pilar: HTML.

---

## ¿Qué es HTML?

HTML es un lenguaje de marcado que utiliza etiquetas para estructurar el contenido de una página web. Cada etiqueta tiene un propósito específico y generalmente se presenta en pares: una etiqueta de apertura y una de cierre.

Ejemplo:

```html
<p>Esto es un párrafo.</p>
```

---

## Estructura Básica de un Archivo HTML

Un archivo HTML tiene una estructura jerárquica y bien definida. A continuación, se muestra la plantilla más básica:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Mi Primera Página</title>
    <link rel="stylesheet" href="styles.css" />
    <link rel="icon" href="favicon.ico" type="image/x-icon" />
  </head>
  <body>
    <h1>Hola Mundo</h1>
    <p>Este es mi primer documento HTML.</p>
    <script src="script.js"></script>
  </body>
</html>
```

### Explicación:

- **`<!DOCTYPE html>`:** Indica que el documento sigue la especificación HTML5.
- **`<html lang="es">`:** Define el idioma principal del contenido como español.
- **`<head>`:** Contiene metadatos, como el título de la página y enlaces a recursos externos.
  - **`<meta charset="UTF-8">`:** Especifica la codificación de caracteres, lo que permite usar acentos y caracteres especiales.
  - **`<link>`:** Se utiliza para enlazar hojas de estilo y favicons.
- **`<body>`:** Contiene el contenido visible de la página.
  - **`<script>`:** Enlaza un archivo JavaScript externo.

---

## Etiquetas Comunes en HTML

### 1. Encabezados

Se utilizan para títulos y subtítulos. Hay seis niveles, de `<h1>` (el más importante) a `<h6>` (el menos importante).

Ejemplo:

```html
<h1>Título Principal</h1>
<h2>Subtítulo</h2>
<h3>Título Secundario</h3>
<h4>Título Cuaternario</h4>
<h5>Título Quinario</h5>
<h6>Título Senario</h6>
```

### 2. Párrafos

Para texto general se utiliza la etiqueta `<p>`. Además, podemos agregar formato como **negrita** y _cursiva_ utilizando las etiquetas `<b>` y `<i>` respectivamente.

Ejemplo:

```html
<p>Este es un <b>párrafo</b> con <i>texto</i> formateado.</p>
```

### 3. Enlaces

Para crear hipervínculos, se usa la etiqueta `<a>`. Con el atributo `target`, podemos definir cómo se abrirá el enlace:

- `target="_self"`: Abre el enlace en la misma pestaña (por defecto).
- `target="_blank"`: Abre el enlace en una nueva pestaña.

Ejemplo:

```html
<a href="https://example.com" target="_blank">Visita mi sitio</a>
```

### 4. Listas

- **Ordenadas (`<ol>`):** Listas numeradas.
- **No ordenadas (`<ul>`):** Listas con viñetas.

Ejemplo:

```html
<ul>
  <li>Elemento 1</li>
  <li>Elemento 2</li>
</ul>

<ol>
  <li>Paso 1</li>
  <li>Paso 2</li>
</ol>
```

### 5. Imágenes

Para insertar imágenes se usa la etiqueta `<img>`, que debe incluir un atributo `src` (fuente) y `alt` (texto alternativo).

Ejemplo:

```html
<img src="imagen.jpg" alt="Descripción de la imagen" />
```

### 6. Tablas

Permiten organizar datos en filas y columnas.

Ejemplo:

```html
<table>
  <tr>
    <th>Nombre</th>
    <th>Edad</th>
  </tr>
  <tr>
    <td>Juan</td>
    <td>25</td>
  </tr>
</table>
```

### 7. Divisiones

La etiqueta `<div>` se utiliza para agrupar otros elementos y aplicar estilos o estructurar el contenido.

Ejemplo:

```html
<div>
  <h2>Sección</h2>
  <p>Este es un párrafo dentro de un contenedor.</p>
</div>
```

### 8. Etiquetas Semánticas

HTML5 introdujo etiquetas que mejoran la estructura del documento y facilitan la accesibilidad.

- **`<header>`:** Define el encabezado de una sección o página.
- **`<nav>`:** Contiene enlaces de navegación.
- **`<main>`:** Representa el contenido principal del documento.
- **`<section>`:** Define secciones temáticas.
- **`<article>`:** Indica contenido independiente.
- **`<footer>`:** Contiene información del pie de página.

Ejemplo:

```html
<header>
  <h1>Mi Sitio Web</h1>
</header>
<nav>
  <ul>
    <li><a href="#">Inicio</a></li>
    <li><a href="#">Acerca de</a></li>
  </ul>
</nav>
<main>
  <section>
    <h2>Artículo Principal</h2>
    <p>Contenido relevante.</p>
  </section>
</main>
<footer>
  <p>&copy; 2025 Mi Sitio Web</p>
</footer>
```

### 9. Iframes

La etiqueta `<iframe>` permite incrustar otro documento HTML dentro de la página.

Ejemplo:

```html
<iframe
  src="https://example.com"
  width="600"
  height="400"
  title="Ejemplo de Iframe"
></iframe>
```

---

## Uso de Atributos

Las etiquetas pueden tener atributos que añaden información o funcionalidad. Algunos atributos comunes son:

- **`id`:** Identificador único.
- **`class`:** Clasifica elementos para aplicar estilos.
- **`href`:** URL en enlaces.
- **`src`:** Fuente de una imagen o iframe.
- **`alt`:** Texto alternativo para imágenes.
- **`target`:** Define cómo se abre un enlace.

Ejemplo:

```html
<p id="intro" class="texto-destacado">Hola, soy un párrafo destacado.</p>
```

---

## Formularios y Validaciones Básicas

Los formularios son esenciales para recopilar datos de los usuarios. En HTML, se crean utilizando la etiqueta `<form>`, que puede contener diversos elementos de entrada como campos de texto, botones, casillas de verificación, etc.

### Estructura de un Formulario Básico

```html
<form action="/enviar-datos" method="POST">
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre" required />

  <label for="correo">Correo Electrónico:</label>
  <input type="email" id="correo" name="correo" required />

  <label for="mensaje">Mensaje:</label>
  <textarea id="mensaje" name="mensaje" rows="4" required></textarea>

  <button type="submit">Enviar</button>
</form>
```

### Explicación:

- **`<form>`:** Define el formulario.
  - **`action`:** Especifica la URL donde se enviarán los datos.
  - **`method`:** Define el método HTTP (GET o POST).
- **`<label>`:** Etiqueta para describir un campo de entrada.
- **`<input>`:** Campo de entrada.
  - **`type`:** Determina el tipo de dato (texto, correo, contraseña, etc.).
  - **`required`:** Hace que el campo sea obligatorio.
- **`<textarea>`:** Campo de texto multilínea.
- **`<button>`:** Botón para enviar el formulario.

### Validaciones Básicas

Las validaciones garantizan que los datos ingresados sean correctos antes de enviarlos al servidor. Algunas validaciones nativas de HTML son:

1. **Campos obligatorios:** Usar el atributo `required`.

   ```html
   <input type="text" required />
   ```

2. **Validar correos electrónicos:** Usar el atributo `type="email"`.

   ```html
   <input type="email" required />
   ```

3. **Longitud mínima y máxima:** Usar los atributos `minlength` y `maxlength`.

   ```html
   <input type="password" minlength="8" maxlength="20" required />
   ```

4. **Valores numéricos:** Usar `type="number"` con atributos como `min` y `max`.

   ```html
   <input type="number" min="1" max="100" />
   ```

5. **Patrones personalizados:** Usar el atributo `pattern` para definir expresiones regulares.
   ```html
   <input
     type="text"
     pattern="[A-Za-z]{3,}"
     title="Solo letras, mínimo 3 caracteres"
   />
   ```

### Ejemplo Completo de Formulario con Validaciones

```html
<form action="/registrar" method="POST">
  <label for="usuario">Usuario:</label>
  <input
    type="text"
    id="usuario"
    name="usuario"
    minlength="3"
    maxlength="15"
    required
  />

  <label for="correo">Correo Electrónico:</label>
  <input type="email" id="correo" name="correo" required />

  <label for="edad">Edad:</label>
  <input type="number" id="edad" name="edad" min="18" max="100" />

  <label for="password">Contraseña:</label>
  <input type="password" id="password" name="password" minlength="8" required />

  <button type="submit">Registrarse</button>
</form>
```

---

# Introducción a CSS: Diseño y Estilo para la Web

CSS (Cascading Style Sheets) es un lenguaje que define el estilo y la presentación de una página web. Es la herramienta que transforma el HTML estructurado en un diseño visual atractivo y profesional.

---

## ¿Qué es CSS?

CSS (Hojas de Estilo en Cascada) es un lenguaje que define cómo los elementos HTML deben mostrarse en la pantalla, papel o cualquier otro medio. CSS separa la estructura del contenido (HTML) del diseño visual.

### Ventajas de usar CSS:

- **Separación de preocupaciones:** Mejora la mantenibilidad al separar el contenido de los estilos.
- **Reutilización:** Los estilos definidos en un archivo CSS pueden aplicarse a múltiples páginas.
- **Flexibilidad:** Permite diseños adaptativos y responsivos.

---

## Estructura de CSS

Un archivo CSS está compuesto por reglas que definen los estilos aplicados a los elementos HTML.

### Ejemplo de una regla CSS:

```css
selector {
  propiedad: valor;
}
```

- **Selector:** Determina a qué elementos se aplica la regla.
- **Propiedad:** Especifica el aspecto a modificar (color, tamaño, margen, etc.).
- **Valor:** Define el estilo específico para la propiedad.

Ejemplo:

```css
h1 {
  color: blue;
  font-size: 24px;
}
```

---

## Formas de aplicar CSS

CSS puede aplicarse de tres maneras principales:

### 1. **CSS en línea**

Se define directamente en el atributo `style` de un elemento HTML. Es ideal para estilos rápidos o específicos.

```html
<p style="color: red;">Texto en rojo</p>
```

### 2. **CSS interno**

Se incluye dentro de una etiqueta `<style>` en la sección `<head>` del documento HTML. Es útil para estilos específicos de una sola página.

```html
<style>
  body {
    background-color: #f0f0f0;
  }
</style>
```

### 3. **CSS externo**

Se almacena en un archivo separado con extensión `.css` y se enlaza al documento HTML mediante `<link>`.

```html
<link rel="stylesheet" href="styles.css" />
```

Contenido del archivo `styles.css`:

```css
body {
  background-color: #f0f0f0;
}
```

Esta es la forma más recomendada para proyectos grandes.

---

## Selectores en CSS

Los selectores determinan qué elementos HTML serán estilizados. Algunos de los selectores más comunes son:

### 1. **Selectores básicos:**

- **Etiqueta:** Aplica estilos a todas las instancias de una etiqueta.
  ```css
  h1 {
    color: green;
  }
  ```
- **Clase:** Identifica elementos con un atributo `class`. Usa un punto (`.`) antes del nombre.
  ```css
  .destacado {
    font-weight: bold;
  }
  ```
- **ID:** Aplica estilos a un elemento con un atributo `id`. Usa un signo de almohadilla (`#`).
  ```css
  #titulo-principal {
    text-align: center;
  }
  ```

### 2. **Selectores combinados:**

- **Descendiente:** Selecciona elementos dentro de otro elemento.
  ```css
  div p {
    color: gray;
  }
  ```
- **Grupo:** Aplica los mismos estilos a múltiples selectores separados por comas.
  ```css
  h1,
  h2,
  h3 {
    font-family: Arial, sans-serif;
  }
  ```

### 3. Pseudo-Clases

Las pseudo-clases aplican estilos basados en un estado particular de un elemento.

- **`:hover`:** Aplica estilos cuando el usuario pasa el cursor sobre el elemento.

  ```css
  a:hover {
    color: green;
  }
  ```

- **`:nth-child(n)`:** Selecciona elementos según su posición en el padre.
  ```css
  li:nth-child(odd) {
    background-color: lightgray;
  }
  li:nth-child(3) {
    font-weight: bold;
  }
  ```

---

## Propiedades CSS esenciales

CSS incluye una amplia variedad de propiedades que permiten modificar diferentes aspectos visuales. Algunas de las más importantes son:

### 1. **Colores**

- **Propiedad `color`:** Define el color del texto.
  ```css
  p {
    color: red;
  }
  ```
- **Propiedad `background-color`:** Especifica el color de fondo.
  ```css
  body {
    background-color: #e0f7fa;
  }
  ```

### 2. **Texto**

- **`font-family`:** Define la fuente tipográfica.
  ```css
  h1 {
    font-family: "Arial", sans-serif;
  }
  ```
- **`font-size`:** Controla el tamaño del texto.
  ```css
  p {
    font-size: 16px;
  }
  ```
- **`text-align`:** Alinea el texto.
  ```css
  h1 {
    text-align: center;
  }
  ```

### 3. **Cajas (Box Model)**

El modelo de caja describe cómo se calculan los espacios y tamaños de los elementos en CSS. Cada elemento se compone de:

1. **Content:** El contenido del elemento (texto o imágenes).
2. **Padding:** Espacio entre el contenido y el borde del elemento.
3. **Border:** El borde del elemento.
4. **Margin:** Espacio entre el elemento y otros elementos.
5. **Width y Height:** Dimensiones de la caja.

Ejemplo visual:

```css
.box {
  margin: 10px;
  padding: 20px;
  border: 2px solid black;
  width: 200px;
  height: 100px;
}
```

En este caso, el tamaño total del elemento incluye:

- Margin: `10px` (a cada lado)
- Padding: `20px` (a cada lado)
- Border: `2px` (a cada lado)
- Ancho del contenido: `200px`
- Alto del contenido: `100px`

### Propiedad `box-sizing`

Por defecto, el tamaño total de un elemento no incluye el padding ni el borde. Con `box-sizing: border-box`, puedes incluirlos en el tamaño total.

```css
.box {
  box-sizing: border-box;
}
```

### 4. **Unidades de medida**

CSS permite usar diferentes unidades para definir tamaños, distancias y proporciones:

- **Pixeles (`px`)**: Unidades fijas.
- **Porcentajes (`%`)**: Relativas al elemento contenedor.
- **Unidades relativas (`rem`, `em`)**: Basadas en el tamaño de fuente del elemento o del documento.
- **Unidades del viewport (`vw`, `vh`)**: Basadas en el ancho o alto de la ventana.

Ejemplo:

```css
body {
  font-size: 16px; /* Base */
}
h1 {
  font-size: 2rem; /* 32px */
}
.container {
  width: 80vw; /* 80% del ancho de la ventana */
}
```

---

## Concepto de Variables CSS

Las variables CSS permiten definir valores reutilizables que pueden aplicarse en múltiples propiedades. Se declaran utilizando el prefijo `--` y se acceden con `var()`.

### Ejemplo de uso:

```css
:root {
  --color-principal: #3498db;
  --padding-general: 15px;
}

h1 {
  color: var(--color-principal);
  padding: var(--padding-general);
}

p {
  background-color: var(--color-principal);
  padding: var(--padding-general);
}
```

Beneficios:

- Facilitan la consistencia en los estilos.
- Simplifican los cambios globales.

---

## Diseño Responsivo con Grid CSS

Grid CSS es un sistema de diseño bidimensional que te permite controlar tanto filas como columnas. Es ideal para crear layouts complejos y responsivos.

### Estructura Básica

Para empezar, define un contenedor grid:

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}
```

Este código crea un grid con 3 columnas de igual tamaño (`1fr` significa una fracción del espacio disponible).

### Diseño Responsivo con Grid

Usa media queries para ajustar el diseño en diferentes tamaños de pantalla:

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 480px) {
  .container {
    grid-template-columns: 1fr;
  }
}
```

Este ejemplo ajusta el número de columnas según el ancho de la pantalla:

- 3 columnas para pantallas grandes.
- 2 columnas para pantallas medianas.
- 1 columna para pantallas pequeñas.

### Propiedades Útiles de Grid

- **`grid-template-rows`:** Define el número y tamaño de las filas.
- **`grid-gap`:** Espaciado entre filas y columnas.
- **`grid-area`:** Permite nombrar áreas específicas del grid.

Ejemplo de layout avanzado:

```css
.container {
  display: grid;
  grid-template-areas:
    "header header header"
    "nav content aside"
    "footer footer footer";
  grid-gap: 10px;
}

.header {
  grid-area: header;
}
.nav {
  grid-area: nav;
}
.content {
  grid-area: content;
}
.aside {
  grid-area: aside;
}
.footer {
  grid-area: footer;
}
```

Con Grid CSS puedes crear layouts estructurados y responsivos de manera eficiente. ¡Experimenta con diferentes configuraciones para dominar esta poderosa herramienta!

---

# Sesión 4: Introducción a JavaScript

En esta sesión aprenderás los fundamentos de JavaScript, el lenguaje de programación que permite agregar interactividad y dinamismo a tus páginas web. Desde la manipulación de datos hasta la creación de funciones y estructuras de control, conocerás las bases que necesitarás para construir aplicaciones web.

---

## ¿Qué es JavaScript?

JavaScript es un lenguaje de programación interpretado, ligero y versátil, diseñado principalmente para ejecutar en navegadores web. Gracias a JavaScript, podemos:

- Responder a las acciones del usuario (como clics o desplazamientos).
- Validar formularios.
- Manipular y actualizar el contenido de una página sin necesidad de recargarla.
- Crear animaciones y experiencias visuales avanzadas.

JavaScript es compatible con los estándares **ECMAScript (ES)**, cuya versión moderna más utilizada es ES6 o superior.

---

### Estructura Básica

El código JavaScript puede colocarse directamente en un archivo HTML dentro de la etiqueta `<script>` o en un archivo externo con extensión `.js`.

Ejemplo:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <title>Ejemplo con JavaScript</title>
  </head>
  <body>
    <h1 id="titulo">Hola Mundo</h1>
    <script src="script.js"></script>
  </body>
</html>
```

En el archivo `script.js`:

```javascript
console.log("JavaScript cargado correctamente");
```

---

### Declaración de Variables

Las variables se utilizan para almacenar información que puede ser usada posteriormente. En JavaScript, las principales palabras clave para declarar variables son `let` y `const`.

JavaScript utiliza tres palabras clave principales para declarar variables:

- **`var`**: Declaración antigua, con ámbito global o de función.
- **`let`**: Declaración moderna, con ámbito de bloque.
- **`const`**: Declaración moderna para constantes (valores que no cambian).

Ejemplo:

```javascript
let nombre = "Juan"; // Variable que puede cambiar
let edad = 25;
const PI = 3.1416; // Variable constante (no cambia)

console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años.`);
```

### Tipos de Datos

JavaScript es dinámico, lo que significa que puedes asignar cualquier tipo de dato a una variable.

1. **Primitivos:**

   - `String`: Cadenas de texto.
   - `Number`: Números.
   - `Boolean`: Verdadero o falso.
   - `Null`: Sin valor.
   - `Undefined`: Variable declarada pero sin valor asignado.

2. **Referenciados:**
   - `Array`: Listas de elementos.
   - `Object`: Conjuntos de pares clave-valor.

#### Ejemplo:

```javascript
let cadena = "Hola, mundo";
let numero = 42;
let booleano = true;
let lista = [1, 2, 3, 4];
let objeto = { nombre: "Ana", edad: 25 };
```

### Operadores

Los operadores se usan para realizar cálculos o comparaciones.

1. **Aritméticos:** `+`, `-`, `*`, `/`, `%`
2. **Asignación:** `=`, `+=`, `-=`
3. **Comparación:** `==`, `===`, `!=`, `<`, `>`, `<=`, `>=`
4. **Lógicos:** `&&`, `||`, `!`

#### Ejemplo:

```javascript
let suma = 10 + 5; // Resultado: 15
let comparacion = 10 > 5; // Resultado: true
let logico = true && false; // Resultado: false
```

---

## Estructuras de Control

Las estructuras de control permiten decidir qué acciones realizar en función de condiciones específicas o repetir bloques de código.

### Condicionales: `if`, `else`

Se utilizan para ejecutar bloques de código basados en una condición.

Usamos `if`, `else if`, y `else` para ejecutar bloques de código dependiendo de una condición.

Ejemplo:

```javascript
let hora = 10;
if (hora < 12) {
  console.log("Buenos días");
} else if (hora < 18) {
  console.log("Buenas tardes");
} else {
  console.log("Buenas noches");
}
```

### Ciclos: `for`, `while`

Se utilizan para ejecutar repetidamente un bloque de código mientras una condición sea verdadera.

- **`for`**: Para iteraciones conocidas.
- **`while`** y **`do...while`**: Para condiciones indeterminadas.

#### Ciclo `for`:

```javascript
for (let i = 0; i < 5; i++) {
  console.log("Iteración:", i);
}
```

#### Ciclo `while`:

```javascript
let contador = 0;

while (contador < 5) {
  console.log("Contador:", contador);
  contador++;
}
```

---

## Funciones

Las funciones son bloques de código reutilizables que realizan una tarea específica. Puedes declarar funciones con la palabra clave `function` o como funciones flecha.

### Declaración de Funciones

```javascript
function saludar(nombre) {
  return `Hola, ${nombre}`;
}

console.log(saludar("Carlos")); // Resultado: Hola, Carlos
```

### Funciones Flecha

Son una sintaxis más compacta para escribir funciones.

```javascript
const sumar = (a, b) => a + b;

console.log(sumar(5, 3)); // Resultado: 8
```

### Parámetros y Argumentos

Puedes pasar datos a una función como parámetros y recibir un valor de retorno.

```javascript
function calcularArea(base, altura) {
  return (base * altura) / 2;
}

console.log(calcularArea(10, 5)); // Resultado: 25
```

---

## Temporizadores

Los temporizadores permiten ejecutar funciones después de un intervalo de tiempo o repetidamente cada cierto tiempo. En JavaScript, se utilizan `setTimeout` y `setInterval` para este propósito.

### `setTimeout`

Ejecuta una función después de un tiempo determinado (en milisegundos).

```javascript
setTimeout(() => {
  console.log("Esto se ejecuta después de 3 segundos");
}, 3000);
```

### `setInterval`

Ejecuta una función repetidamente con un intervalo de tiempo especificado.

```javascript
let contador = 0;
const intervalo = setInterval(() => {
  contador++;
  console.log(`Contador: ${contador}`);
  if (contador === 5) {
    clearInterval(intervalo); // Detiene el intervalo cuando el contador llega a 5
  }
}, 1000);
```

---

# Sesión 5: JavaScript para Manipulación del DOM

En esta sesión, aprenderás a interactuar con el DOM (Document Object Model) utilizando JavaScript. Esto te permitirá seleccionar elementos, modificar su contenido, manejar eventos y trabajar dinámicamente con el contenido de la página.

---

## ¿Qué es el DOM y cómo interactuar con él?

El DOM es una representación estructurada de un documento HTML o XML que permite a los lenguajes de programación, como JavaScript, interactuar y manipular los elementos de una página web.

### Conceptos clave:

- **Nodo:** Cada elemento, atributo o texto dentro del DOM es un nodo.
- **Árbol DOM:** La estructura jerárquica que organiza todos los nodos de una página.

JavaScript puede acceder y manipular el DOM usando el objeto `document`.

---

## Métodos de Selección

### `getElementById`

Selecciona un elemento por su atributo `id`.

```javascript
const titulo = document.getElementById("mi-titulo");
console.log(titulo.textContent);
```

### `querySelector`

Selecciona el primer elemento que coincide con un selector CSS.

```javascript
const parrafo = document.querySelector(".mi-clase");
console.log(parrafo.textContent);
```

### `querySelectorAll`

Selecciona todos los elementos que coinciden con un selector CSS y devuelve una NodeList.

```javascript
const items = document.querySelectorAll("li");
items.forEach((item) => console.log(item.textContent));
```

---

## Modificación de Contenido

### `innerHTML`

Permite modificar el contenido HTML de un elemento.

```javascript
document.getElementById("contenedor").innerHTML = "<p>Nuevo contenido</p>";
```

### `textContent`

Modifica o obtiene el texto dentro de un elemento.

```javascript
document.querySelector("h1").textContent = "Título actualizado";
```

---

## Aplicación de Estilos CSS Dinámicos

Puedes modificar los estilos de los elementos directamente desde JavaScript usando la propiedad `style` o manipulando clases.

### Modificar Estilos con `style`

```javascript
const elemento = document.querySelector("div");
elemento.style.color = "blue";
elemento.style.fontSize = "20px";
```

### Modificar Estilos con Clases

```javascript
const elemento = document.querySelector("div");
elemento.classList.add("nueva-clase");
```

---

## Manipulación de Atributos y Clases

### Atributos

Puedes leer, modificar o eliminar atributos.

```javascript
const enlace = document.querySelector("a");
console.log(enlace.getAttribute("href"));
enlace.setAttribute("href", "https://ejemplo.com");
enlace.removeAttribute("target");
```

### Data-Atributos

Son atributos personalizados que comienzan con `data-`.

```javascript
const elemento = document.querySelector("[data-id]");
console.log(elemento.dataset.id);
elemento.dataset.id = "nuevo-valor";
```

### Clases

Agregar, eliminar o comprobar clases de un elemento.

```javascript
const div = document.querySelector(".mi-div");
div.classList.add("nueva-clase");
div.classList.remove("mi-clase");
console.log(div.classList.contains("otra-clase"));
```

---

## Recorrido del DOM

Puedes navegar entre nodos relacionados usando propiedades como:

### Métodos de Nodos

- **`parentNode`:** Nodo padre.
- **`childNodes`:** Lista de nodos hijos.
- **`firstChild` y `lastChild`:** Primer y último nodo hijo.
- **`nextSibling` y `previousSibling`:** Hermanos del nodo.

### Métodos de Elementos

- **`parentElement`:** Devuelve el elemento padre del nodo actual.
- **`children`:** Colección de los hijos que son elementos.
- **`firstElementChild` y `lastElementChild`:** Primer y último hijo que son elementos.
- **`previousElementSibling` y `nextElementSibling`:** Hermanos del nodo que son elementos.

### Método `closest`

Busca el ancestro más cercano que coincida con un selector dado.

```javascript
const elemento = document.querySelector(".mi-clase");
const ancestro = elemento.closest("div");
console.log(ancestro);
```

Ejemplo:

```javascript
const lista = document.querySelector("ul");
console.log(lista.parentElement);
console.log(lista.firstElementChild);
console.log(lista.lastElementChild);
```

---

## Inserción al DOM

### Métodos de Inserción

- **`prepend`:** Inserta contenido al inicio de un elemento.
- **`append`:** Inserta contenido al final de un elemento.
- **`before`:** Inserta contenido antes de un elemento.
- **`after`:** Inserta contenido después de un elemento.
- **`createElement`:** Crea un nuevo elemento.
- **`appendChild`:** Agrega un elemento hijo al final de un elemento.

Ejemplo:

```javascript
const contenedor = document.getElementById("contenedor");
const nuevoElemento = document.createElement("p");
nuevoElemento.textContent = "Nuevo párrafo";
contenedor.appendChild(nuevoElemento);
contenedor.append("Contenido final");
contenedor.prepend("Contenido inicial");
contenedor.after("Contenido después");
contenedor.before("Contenido antes");
```

---

## Manejo de Eventos

### `addEventListener`

Asocia un evento a un elemento.

```javascript
const boton = document.querySelector("button");
boton.addEventListener("click", () => {
  alert("Botón clickeado");
});
```

### Delegación de Eventos

Permite manejar eventos de elementos dinámicos usando un contenedor común.

```javascript
const lista = document.querySelector("ul");
lista.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    alert(`Item clickeado: ${event.target.textContent}`);
  }
});
```

---

## Envío y Validación de Formularios

Puedes capturar el envío de un formulario y validarlo antes de procesarlo.

### Uso de Expresiones Regulares

Las expresiones regulares son útiles para validar patrones en entradas.

```javascript
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const emailInput = document.querySelector('input[type="email"]');
if (!emailRegex.test(emailInput.value)) {
  alert("Correo electrónico no válido");
}
```

### Validación con `FormData`

El objeto `FormData` permite manejar los datos de un formulario fácilmente.

```javascript
const formulario = document.querySelector("form");

formulario.addEventListener("submit", (event) => {
  event.preventDefault(); // Evita el envío por defecto
  const formData = new FormData(formulario);
  formData.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });
});
```

Ejemplo completo:

```javascript
const formulario = document.querySelector("form");

formulario.addEventListener("submit", (event) => {
  event.preventDefault(); // Evita el envío por defecto
  const nombre = formulario.querySelector('input[name="nombre"]').value;
  const email = formulario.querySelector('input[name="email"]').value;

  if (nombre === "" || email === "") {
    alert("Todos los campos son obligatorios.");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Correo electrónico no válido.");
    return;
  }

  const formData = new FormData(formulario);
  console.log("Formulario enviado:", Object.fromEntries(formData));
});
```

---

## APIs del Navegador

### `localStorage`

Almacena datos de forma persistente en el navegador.

```javascript
localStorage.setItem("clave", "valor");
console.log(localStorage.getItem("clave"));
localStorage.removeItem("clave");
```

### `sessionStorage`

Similar a `localStorage`, pero los datos se eliminan cuando se cierra el navegador.

### `fetch`

Permite realizar solicitudes HTTP.

```javascript
fetch("https://api.ejemplo.com/datos")
  .then((response) => response.json())
  .then((data) => console.log(data));
```

---

# Sesión 7: Fundamentos de Desarrollo de Videojuegos con JavaScript

En esta sesión, aprenderás los fundamentos del desarrollo de videojuegos usando HTML5 Canvas, JavaScript y CSS. Nos enfocaremos en conceptos básicos como animaciones, detección de colisiones y control de jugadores.

---

## **1. Introducción a los videojuegos con HTML5 Canvas**

El elemento `<canvas>` nos permite dibujar gráficos en 2D directamente en el navegador, lo que lo convierte en una herramienta ideal para videojuegos simples.

### Configuración básica

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Videojuego Básico</title>
  </head>
  <body>
    <canvas
      id="gameCanvas"
      width="800"
      height="400"
      style="border: 1px solid black;"
    ></canvas>
    <script>
      const canvas = document.getElementById("gameCanvas");
      const ctx = canvas.getContext("2d");

      // Dibujar un rectángulo inicial
      ctx.fillStyle = "blue";
      ctx.fillRect(50, 50, 100, 100);
    </script>
  </body>
</html>
```

---

## **2. Conceptos básicos de animación**

Para crear animaciones fluidas, usamos el método `requestAnimationFrame()` en lugar de `setInterval`. Este método ajusta la velocidad de la animación según las capacidades del dispositivo.

### Ejemplo de animación:

```javascript
let x = 0;

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "blue";
  ctx.fillRect(x, 50, 100, 100);
  x += 2; // Mover el rectángulo a la derecha

  requestAnimationFrame(gameLoop);
}

gameLoop();
```

---

## **3. Control de jugadores con teclado**

Usamos eventos de teclado como `keydown` y `keyup` para controlar los movimientos del jugador.

### Ejemplo:

```javascript
let playerX = 50;

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") playerX += 10;
  if (event.key === "ArrowLeft") playerX -= 10;
});

function updateGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "green";
  ctx.fillRect(playerX, 300, 50, 50);

  requestAnimationFrame(updateGame);
}

updateGame();
```

---

## **4. Detectar colisiones**

Las colisiones son fundamentales en los videojuegos. Una manera sencilla es comparar las posiciones y tamaños de los elementos.

### Ejemplo de detección de colisión:

```javascript
function isColliding(rect1, rect2) {
  return (
    rect1.x < rect2.x + rect2.width &&
    rect1.x + rect1.width > rect2.x &&
    rect1.y < rect2.y + rect2.height &&
    rect1.y + rect1.height > rect2.y
  );
}

// Ejemplo de uso:
const player = { x: 50, y: 300, width: 50, height: 50 };
const obstacle = { x: 200, y: 300, width: 50, height: 50 };

if (isColliding(player, obstacle)) {
  console.log("Colisión detectada");
}
```

---

## **5. Práctica: Juego básico**

Desarrolla un juego donde el jugador debe moverse para evitar obstáculos. Utiliza las herramientas aprendidas y experimenta con diferentes mecánicas.

---

# Sesión 8: Construcción de un Videojuego Completo

En esta sesión, consolidaremos los conocimientos creando un videojuego completo. Implementaremos un sistema de puntuación, estados del juego y diseño visual con CSS.

---

## **1. Estructura del videojuego**

Organizaremos el juego separando la lógica en funciones. Esto facilita el mantenimiento y escalabilidad.

### Plantilla básica:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Juego Completo</title>
    <style>
      canvas {
        display: block;
        margin: 0 auto;
        border: 1px solid black;
      }
    </style>
  </head>
  <body>
    <canvas id="gameCanvas" width="800" height="400"></canvas>
    <script src="game.js"></script>
  </body>
</html>
```

---

## **2. Generación de obstáculos dinámicos**

Creamos obstáculos que aparecen en pantalla con un intervalo determinado.

### Ejemplo:

```javascript
let obstacles = [];

function generateObstacle() {
  obstacles.push({ x: canvas.width, y: 300, width: 50, height: 50 });
}

setInterval(generateObstacle, 2000);
```

---

## **3. Sistema de puntuación**

Incrementamos la puntuación a medida que el jugador avanza o cumple ciertos objetivos.

### Ejemplo:

```javascript
let score = 0;

function updateScore() {
  score += 1;
  ctx.fillStyle = "black";
  ctx.fillText(`Puntuación: ${score}`, 10, 20);
}
```

---

## **4. Manejo de estados del juego**

Implementamos estados como "inicio", "jugando" y "fin del juego".

### Ejemplo:

```javascript
let gameState = "start";

function updateGameState() {
  if (gameState === "start") {
    ctx.fillText("Presiona Enter para empezar", 300, 200);
  } else if (gameState === "playing") {
    // Actualizar lógica del juego
  } else if (gameState === "gameover") {
    ctx.fillText("Game Over", 300, 200);
  }
}
```

---

## **5. Estilización con CSS**

Aplicamos estilos para mejorar la presentación. Podemos usar gradientes, sombras y animaciones.

---

## **6. Práctica: Construcción de un videojuego**

Desarrolla un juego de plataformas donde:

- Un jugador se mueva para evitar obstáculos.
- Haya un sistema de puntuación.
- Se maneje un estado de "Game Over" con opción de reinicio.

---

¡Con estos temas, estás listo para comenzar a explorar el emocionante mundo del desarrollo de videojuegos con JavaScript!
