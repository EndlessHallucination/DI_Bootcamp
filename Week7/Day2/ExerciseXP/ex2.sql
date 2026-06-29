-- 1. Select all columns from the customer table
SELECT *
FROM customer;

-- 2. Display first_name and last_name as "full_name"
SELECT first_name || ' ' || last_name AS full_name
FROM customer;

-- 3. Get all unique account creation dates
SELECT DISTINCT create_date
FROM customer;

-- 4. All customers ordered by first name descending
SELECT *
FROM customer
ORDER BY first_name DESC;

-- 5. Film ID, title, description, release year and rental rate
SELECT film_id,
       title,
       description,
       release_year,
       rental_rate
FROM film
ORDER BY rental_rate ASC;

-- 6. Address and phone number of customers living in Texas
SELECT address,
       phone
FROM address
WHERE district = 'Texas';

-- 7. Movie details where film_id is 15 or 150
SELECT *
FROM film
WHERE film_id IN (15, 150);

-- 8. Check if your favorite movie exists
-- Replace 'Inception' with your favorite movie
SELECT film_id,
       title,
       description,
       length,
       rental_rate
FROM film
WHERE title = 'Inception';

-- 9. Movies starting with the first two letters
-- Replace 'IN' with the first two letters of your movie
SELECT film_id,
       title,
       description,
       length,
       rental_rate
FROM film
WHERE title LIKE 'IN%';

-- 10. The 10 cheapest movies
SELECT film_id,
       title,
       rental_rate
FROM film
ORDER BY rental_rate ASC
LIMIT 10;

-- 11. The next 10 cheapest movies
SELECT film_id,
       title,
       rental_rate
FROM film
ORDER BY rental_rate ASC
LIMIT 10 OFFSET 10;

SELECT film_id,
       title,
       rental_rate
FROM film
ORDER BY rental_rate ASC
OFFSET 10 FETCH FIRST 10 ROWS ONLY;

-- 12. Join customer and payment
SELECT c.first_name,
       c.last_name,
       p.amount,
       p.payment_date
FROM customer c
JOIN payment p
ON c.customer_id = p.customer_id
ORDER BY c.customer_id;


-- 13. Movies that are not in inventory
SELECT *
FROM film
WHERE film_id NOT IN (
    SELECT film_id
    FROM inventory
);

-- 14. Find which city is in which country
SELECT city.city,
       country.country
FROM city
JOIN country
ON city.country_id = country.country_id;


-- Customer id, name, payment amount and date,
-- ordered by the staff member who processed the payment
SELECT p.staff_id,
       c.customer_id,
       c.first_name,
       c.last_name,
       p.amount,
       p.payment_date
FROM payment p
JOIN customer c
ON p.customer_id = c.customer_id
ORDER BY p.staff_id, c.customer_id;