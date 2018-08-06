DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
	item_id INT AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity DECIMAL(10,4) NOT NULL,
    PRIMARY KEY(item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Usb cable", "Electronics", 9.90, 50);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("BMW headlights", "Automotive", 155, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Head & Showders", "Cosmetics", 6.50, 180);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Kitchen Knife", "Kitchen", 12.90, 90);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Dell XPS13", "Computers", 1559.90, 18);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Armani Jeans", "Clothes", 199.90, 35);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Guitar", "Music", 99.90, 60);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("USB Charger", "Electronics", 7.90, 250);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Atturo Tire", "Automotive", 109.90, 60);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Gaming Mouse", "Computers", 39.90, 120);


