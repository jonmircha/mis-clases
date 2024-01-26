# Bases de Datos

## Diseño de BDs

1. Identificar las entidades del sistema.
1. Identificar los atributos de las entidades.
1. Identificar las llaves primarias y foráneas.
1. Asignar una nomenclatura adeacuada a las entidades y sus atributos.
1. Identificar las entidades pivote del sistema.
1. Identificar los catálogos del sistema.
1. Identificar los tipos de relaciones del sistema.
1. Crear el Modelo Entidad-Relación del sistema.
1. Crear el Modelo Relacional de la base de datos del sistema.
1. Identificar los tipos de dato de los atributos de las entidades del sistema.
1. Identificar los atributos que puedan ser únicos en el sistema.
1. Identificar las reglas de negocio (Operaciones _CRUD_) del sistema.

### Entidades

Una **entidad** es un objeto del mundo real que se pretende controlar dentro del sistema, por ejemplo: una persona, un producto, una cuenta, un servicio, una empresa, una compra, etc.

Las entidades al ser objetos, van a tener características que las describen, a estas propiedades se les llama **atributos** de la entidad.

Por ejemplo la entidad persona tiene atributos tales como: nombre, apellidos, fecha de nacimiento, domicilio, teléfono, correo, etc.

Lo primero que tenemos que hacer al diseñar una base de datos es hacer un listado de las entidades que se verán involucradas en el sistema y de sus atributos.

#### Tipos de Entidades

##### De Datos

Las entidades de datos son aquellas que alimentan de información el sistema. En ellas se interactúa y almacenan los datos.

##### Pivotes

Las entidades pivotes son las que **relacionan** la información de 2 o más entidades. Nos ayudan a mantener consistencia e integridad en el sistema y evitan la duplicidad de datos. También suelen llamarse entidades de enlace o asociación.

Por ejemplo en el proceso de una venta, una entidad pivote puede almacenar la relación de qué y cuántos productos se adquirieron en dicha venta, además de relacionar dichos productos con la información del cliente que los compró.

##### Catálogos

Los catálogos son entidades que sus registros son una lista o relación ordenada con algún criterio y por tal motivo su información debe estar precargada en el sistema, antes de comenzar a introducir información en el.

Una lista de códigos postales, colonias, municipios, cuidades o países son un buen ejemplo de entidades cátalogo.

##### Códigos Postales

- [Códigos Postales México](https://datos.gob.mx/busca/dataset/catalogo-nacional-de-codigos-postales)
- [CPs México en formato TXT](https://www.correosdemexico.gob.mx/datosabiertos/cp/cpdescarga.txt)
- [Consulta de CPs México](https://www.correosdemexico.gob.mx/SSLServicios/ConsultaCP/Descarga.aspx)

##### Países

- [Información Paises](https://gist.github.com/brenes/1095110)

## Relaciones

Las relaciones son asociaciones entre entidades que se crean para recuperar y vincular datos.

Para crear una relación semánticamente utiliza un **verbo** para relacionar las entidades en cuestión.

### Tipos de Relaciones

- **1 a 1**: Un esposo _(e)_ está casado _(r)_ con una única esposa _(e)_ y viceversa.
- **1 a M**: Una factura _(e)_ se emite _(r)_ a una persona _(e)_ y sólo a una, pero una persona _(e)_ puede tener _(r)_ varias facturas _(e)_ emitidas a su nombre. Todas las facturas _(e)_ se emiten _(r)_ a nombre de alguien _(e)_.
- **M a M**: Un cliente _(e)_ puede comprar _(r)_ varios productos _(e)_ y un producto _(e)_ puede ser comprado _(r)_ por varios clientes _(e)_.

---

## Sistema de ventas en línea

### Listado de Entidades

#### Clientes

- Nombre
- Apellidos
- Teléfono
- Correo electrónico
- Dirección
- Código Postal
- Ciudad
- País

#### Productos

- Nombre
- Descripción
- Foto
- Precio
- Cantidad

#### Ventas

- Cliente
- Fecha y hora de venta
- Monto de venta

#### Artículos de la venta

- Venta
- Producto
- Cantidad

---

### Entidades

#### clientes

- cliente_id (**PK**)
- nombre
- apellidos
- telefono
- email
- direccion
- cp
- ciudad
- pais (**FK**)

#### productos

- producto_id (**PK**)
- nombre
- descripcion
- foto
- precio
- cantidad

#### ventas

- venta_id (**PK**)
- cliente_id (**FK**)
- fecha
- monto

#### articulos_x_venta

- articulo_id (**PK**)
- venta_id (**FK**)
- producto_id (**FK**)
- cantidad

#### paises

- pais_id (**PK**)
- nombre
- dominio

---

### Relaciones

1. Un **cliente** tiene **país** (_1 - 1_).
1. Una **venta** poseé **cliente** (_1 - M_).
1. Un **artículo** pertenece a una **venta** (_1 -M_).
1. Un **artículo** es un **producto** (_1 - 1_).

#### Modelo Relacional de la Base de Datos

![Modelo Relacional](ModeloRelacionalBD.png)

---

### Reglas de Negocio

#### clientes

1. Crear un cliente.
1. Leer todos los clientes.
1. Leer un cliente en particular.
1. Actualizar un cliente.
1. Eliminar un cliente.

#### productos

1. Crear un producto.
1. Leer todos los productos.
1. Leer un producto en particular.
1. Actualizar un producto.
1. Eliminar un producto.

#### ventas

1. Crear una venta.
1. Leer todas las ventas.
1. Leer una venta en particular.
1. Leer todas las ventas de un cliente.
1. Leer todas las ventas de un producto.
1. Actualizar una venta.
1. Eliminar una venta.

#### articulos_x_venta

1. Crear un artículo.
1. Leer todos los artículos.
1. Leer un artículo en particular.
1. Leer todos los artículos de una venta.
1. Leer todos los artículos de un producto.
1. Leer todos los artículos de un cliente.
1. Actualizar un artículo.
1. Eliminar un artículo.

#### paises

1. Crear un pais.
1. Leer todos los paises.
1. Leer un país en particular.
1. Actualizar un país.
1. Eliminar un país.
