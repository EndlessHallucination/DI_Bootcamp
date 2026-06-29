--items ordered by price
SELECT *
FROM items
ORDER BY price ASC;

--with a price of 80 or more, ordered by price
SELECT *
FROM items
WHERE price >= 80
ORDER BY price DESC;

--first 3 customers alphabetically by first name
SELECT first_name, last_name
FROM customers
ORDER BY first_name ASC
LIMIT 3;

--all last names 
SELECT last_name
FROM customers
ORDER BY last_name DESC;