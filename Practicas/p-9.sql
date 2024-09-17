------------------- DB SCHEMA -------------------

CREATE DATABASE online_store_simulator;

USE online_store_simulator;

-- Tabla de usuarios
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    address TEXT NOT NULL,
    zip_code VARCHAR(10) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de productos
CREATE TABLE products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    image_url VARCHAR(255),
    stock INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de categorías
CREATE TABLE categories (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    description TEXT
);

-- Tabla de productos por categorías
CREATE TABLE products_x_categories (
    pxc_id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    category_id INT NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(product_id) ON DELETE CASCADE,
    FOREIGN KEY (category_id) REFERENCES categories(category_id) ON DELETE CASCADE
);

-- Tabla de carritos
CREATE TABLE carts (
    cart_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status ENUM('activo', 'finalizado', 'cancelado') DEFAULT 'activo',
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Tabla de items del carrito
CREATE TABLE cart_items (
    cart_item_id INT PRIMARY KEY AUTO_INCREMENT,
    cart_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL DEFAULT 1,
    subtotal DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (cart_id) REFERENCES carts(cart_id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

-- Tabla de pedidos
CREATE TABLE orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    cart_id INT NOT NULL,
    total DECIMAL(10, 2) NOT NULL,
    status ENUM('procesando', 'completado', 'cancelado') DEFAULT 'procesando',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (cart_id) REFERENCES carts(cart_id)
);

------------------- INITIAL DATA -------------------

USE online_store_simulator;

-- Carga inicial de usuarios
INSERT INTO users (full_name, email, password, address, zip_code)
VALUES
('Juan Pérez', 'juan.perez@example.com', 'hashed_password_1', 'Calle 123, Ciudad', '12345'),
('María Gómez', 'maria.gomez@example.com', 'hashed_password_2', 'Avenida 456, Ciudad', '23456'),
('Carlos Ruiz', 'carlos.ruiz@example.com', 'hashed_password_3', 'Boulevard 789, Ciudad', '34567');

-- Carga inicial de categorías
INSERT INTO categories (name, description)
VALUES
('Electrónica', 'Dispositivos electrónicos y gadgets.'),
('Hogar', 'Productos para el hogar y cocina.'),
('Ropa', 'Ropa y accesorios de moda.');

-- Carga inicial de productos
INSERT INTO products (name, description, price, stock, image_url)
VALUES
('Laptop', 'Laptop de alto rendimiento para profesionales.', 1200.00, 10, 'http://example.com/laptop.jpg'),
('Sofá', 'Sofá de tres plazas con tapizado de tela.', 300.00, 5, 'http://example.com/sofa.jpg'),
('Camisa', 'Camisa de algodón 100% para hombre.', 25.00, 20, 'http://example.com/camisa.jpg');

-- Carga inicial de productos por categorías
INSERT INTO products_x_categories (product_id, category_id)
VALUES
(1, 1), -- Laptop en Electrónica
(2, 2), -- Sofá en Hogar
(3, 3); -- Camisa en Ropa

-- Carga inicial de carritos
INSERT INTO carts (user_id, status)
VALUES
(1, 'activo'),
(2, 'finalizado'),
(3, 'cancelado');

-- Carga inicial de items del carrito
INSERT INTO cart_items (cart_id, product_id, quantity, subtotal)
VALUES
(1, 1, 1, 1200.00), -- 1 Laptop en carrito de Juan
(2, 2, 2, 600.00), -- 2 Sofás en carrito de María
(3, 3, 3, 75.00); -- 3 Camisas en carrito de Carlos

-- Carga inicial de pedidos
INSERT INTO orders (user_id, cart_id, total, status)
VALUES
(1, 1, 1200.00, 'completado'),
(2, 2, 600.00, 'procesando'),
(3, 3, 75.00, 'cancelado');

------------------- CRUD QUERIES -------------------

USE online_store_simulator;

-- CRUD para la tabla de usuarios (users)

-- CREATE
INSERT INTO users (full_name, email, password, address, zip_code) 
VALUES ('Juan Pérez', 'juan.perez@example.com', 'hashed_password', 'Calle 123, Ciudad', '10001');

-- READ
SELECT * FROM users;

-- UPDATE
UPDATE users 
SET full_name = 'Juan Pérez Actualizado', email = 'juan.perez@newemail.com' 
WHERE user_id = 1;

-- DELETE
DELETE FROM users WHERE user_id = 1;

-- CRUD para la tabla de productos (products)

-- CREATE
INSERT INTO products (name, description, price, stock, image_url) 
VALUES ('Producto A', 'Descripción del Producto A', 9.99, 100, 'https://example.com/product-a.jpg');

-- READ
SELECT * FROM products;

-- UPDATE
UPDATE products 
SET price = 11.99, stock = 120 
WHERE product_id = 1;

-- DELETE
DELETE FROM products WHERE product_id = 1;

-- CRUD para la tabla de categorías (categories)

-- CREATE
INSERT INTO categories (name, description) 
VALUES ('Electrónica', 'Artículos electrónicos diversos');

-- READ
SELECT * FROM categories;

-- UPDATE
UPDATE categories 
SET description = 'Nueva descripción para la categoría Electrónica' 
WHERE category_id = 1;

-- DELETE
DELETE FROM categories WHERE category_id = 1;

-- CRUD para la tabla de productos por categorías (products_x_categories)

-- CREATE
INSERT INTO products_x_categories (product_id, category_id) 
VALUES (1, 1);

-- READ
SELECT * FROM products_x_categories;

-- UPDATE
UPDATE products_x_categories 
SET category_id = 2 
WHERE pxc_id = 1;

-- DELETE
DELETE FROM products_x_categories WHERE pxc_id = 1;

-- CRUD para la tabla de carritos (carts)

-- CREATE
INSERT INTO carts (user_id, status) 
VALUES (1, 'activo');

-- READ
SELECT * FROM carts;

-- UPDATE
UPDATE carts 
SET status = 'finalizado' 
WHERE cart_id = 1;

-- DELETE
DELETE FROM carts WHERE cart_id = 1;

-- CRUD para la tabla de items del carrito (cart_items)

-- CREATE
INSERT INTO cart_items (cart_id, product_id, quantity, subtotal) 
VALUES (1, 1, 2, 19.98);

-- READ
SELECT * FROM cart_items;

-- UPDATE
UPDATE cart_items 
SET quantity = 3, subtotal = 29.97 
WHERE cart_item_id = 1;

-- DELETE
DELETE FROM cart_items WHERE cart_item_id = 1;

-- CRUD para la tabla de pedidos (orders)

-- CREATE
INSERT INTO orders (user_id, cart_id, total, status) 
VALUES (1, 1, 29.97, 'procesando');

-- READ
SELECT * FROM orders;

-- UPDATE
UPDATE orders 
SET status = 'completado' 
WHERE order_id = 1;

-- DELETE
DELETE FROM orders WHERE order_id = 1;
