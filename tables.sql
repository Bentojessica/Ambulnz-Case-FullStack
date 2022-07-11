CREATE TABLE ambulnz_order (
id VARCHAR(255) PRIMARY KEY,
pizza VARCHAR(255),
quantity INT
);

CREATE TABLE ambulnz_pizza (
name VARCHAR(255),
price FLOAT,
ingredients VARCHAR(500)
);