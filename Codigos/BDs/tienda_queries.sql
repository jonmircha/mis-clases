/* Queries vistas en clase */
SELECT * FROM clientes;

SELECT nombre, apellidos, telefono, email FROM clientes;

SELECT nombre, apellidos, telefono, email FROM clientes WHERE apellidos = "Miranda";

SELECT nombre, apellidos, telefono, email FROM clientes WHERE apellidos IN ("Miranda", "Campos");

SELECT * FROM paises;


SELECT * FROM paises WHERE nombre LIKE "A%";

SELECT * FROM paises WHERE nombre LIKE "%A";

SELECT * FROM paises WHERE nombre LIKE "A%" AND dominio LIKE "A%";

SELECT * FROM paises WHERE nombre LIKE "A%" OR dominio LIKE "Z%";

SELECT * FROM paises WHERE nombre NOT LIKE "A%" AND nombre NOT LIKE "B%";


INSERT INTO paises (nombre, dominio) VALUES ("Nuevo Pais", "np");

SELECT * FROM paises WHERE pais_id = 141;

UPDATE paises SET nombre = "Nuevo País", dominio = "nc" WHERE pais_id = 249;

SELECT * FROM paises WHERE pais_id = 249;

DELETE FROM paises WHERE pais_id = 249;

SELECT * FROM clientes AS c
	INNER JOIN paises AS p
	ON c.pais = p.pais;

SELECT c.nombre, c.apellidos, c.telefono, c.email, p.nombre AS pais FROM clientes AS c
	INNER JOIN paises AS p
	ON c.pais = p.pais_id;


/* Reglas de Negocio */

/* clientes */

/* Crear un cliente */
/* Leer todos los clientes */
SELECT * FROM clientes;

SELECT c.nombre, c.apellidos, c.telefono, c.email, p.nombre AS pais
  FROM clientes AS c
	INNER JOIN paises AS p
	ON c.pais = p.pais_id;
/* Leer un cliente en particular */
/* Actualizar un cliente */
/* Eliminar un cliente */

/* productos */

/* Crear un producto */
/* Leer todos los productos */
/* Leer un producto en particular */
/* Actualizar un producto */
/* Eliminar un producto */

/* ventas */ 

/* Crear una venta */
/* Leer todas las ventas */
/* Leer una venta en particular */
/* Leer todas las ventas de un cliente */
/* Leer todas las ventas de un producto */
/* Actualizar una venta */
/* Eliminar una venta */

/* articulos_x_venta */

/* Crear un artículo */
/* Leer todos los artículos */
/* Leer un artículo en particular */
/* Leer todos los artículos de una venta */
/* Leer todos los artículos de un producto */
/* Leer todos los artículos de un cliente */
/* Actualizar un artículo */
/* Eliminar un artículo */

/*  paises */

/* Crear un pais */
INSERT INTO paises (nombre, dominio) VALUES ("Nuevo Pais", "np");
/* Leer todos los paises */
SELECT * FROM paises;
/* Leer un país en particular */
SELECT * FROM paises WHERE pais_id = 141;
/* Actualizar un país */
UPDATE paises SET nombre = "Nuevo País", dominio = "nc" WHERE pais_id = 249; 
/* Eliminar un país */
DELETE FROM paises WHERE pais_id = 249;
