console.log("Información de la ventana:");
console.log("Ancho de la ventana:", window.innerWidth);
console.log("Altura de la ventana:", window.innerHeight);

console.log("\nInformación del documento:");
console.log("Título del documento:", document.title);

console.log("\nInformación del navegador:");
console.log("User Agent:", navigator.userAgent);

const productos = document.querySelectorAll(".producto");
const listaCarrito = document.querySelector("#listaCarrito");
const totalCarrito = document.querySelector("#totalCarrito");
const btnComprar = document.querySelector("#btnComprar");
const mensajeCompra = document.querySelector("#mensajeCompra");

productos.forEach((producto) => {
  producto.addEventListener("click", () => {
    const nombre = producto.getAttribute("data-nombre");
    const precio = parseFloat(producto.getAttribute("data-precio"));

    // Crear un elemento de lista para el carrito
    const itemCarrito = document.createElement("li");
    itemCarrito.innerText = `${nombre} - $${precio}`;

    // Insertar el elemento al carrito
    listaCarrito.appendChild(itemCarrito);

    // Actualizar el total del carrito
    const totalActual = parseFloat(totalCarrito.innerText);
    totalCarrito.innerText = (totalActual + precio).toFixed(2);
  });
});

btnComprar.addEventListener("click", () => {
  if (listaCarrito.children.length > 0) {
    // Ocultar el carrito y mostrar el mensaje de compra
    document.querySelector("#carrito").classList.add("hidden");
    mensajeCompra.classList.remove("hidden");
  } else {
    alert("El carrito está vacío, no se puede realizar la compra.");
  }
});

// Cambiar el color de fondo del carrito cuando se añaden productos
productos.forEach((producto) => {
  producto.addEventListener("click", () => {
    document.querySelector("#carrito").style.backgroundColor = "#f4f4f4";
  });
});

// Cambiar la visibilidad del botón comprar basado en el contenido del carrito
listaCarrito.addEventListener("DOMNodeInserted", () => {
  if (listaCarrito.children.length > 0) {
    btnComprar.classList.remove("hidden");
  }
});

// Evento para delegar la eliminación de productos desde el carrito
listaCarrito.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    const item = event.target;
    const precio = parseFloat(item.innerText.split("- $")[1]);
    item.remove(); // Remover el item del carrito

    // Actualizar el total del carrito
    const totalActual = parseFloat(totalCarrito.innerText);
    totalCarrito.innerText = (totalActual - precio).toFixed(2);

    // Ocultar el botón de compra si el carrito está vacío
    if (listaCarrito.children.length === 0) {
      btnComprar.classList.add("hidden");
    }
  }
});
