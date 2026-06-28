CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price INTEGER NOT NULL
);

CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL
);

-- 2
INSERT INTO items (name, price)
VALUES
('Small Desk', 100),
('Large Desk', 300),
('Fan', 80);

INSERT INTO customers (first_name, last_name)
VALUES
('Greg', 'Jones'),
('Sandra', 'Jones'),
('Scott', 'Scott'),
('Trevor', 'Green'),
('Melanie', 'Johnson');


--3
SELECT * FROM items;

--4
SELECT * FROM items
WHERE price > 80;

--5
SELECT * FROM items
WHERE price <= 300;

--6
SELECT * FROM customers
WHERE last_name = 'Smith';

--7
SELECT * FROM customers
WHERE last_name = 'Jones';

--8
SELECT * FROM customers
WHERE first_name <> 'Scott';
