--update languages 
UPDATE film
SET language_id = 2
WHERE film_id = 1;

--2
SELECT
    tc.constraint_name,
    kcu.column_name,
    ccu.table_name AS referenced_table,
    ccu.column_name AS referenced_column
FROM information_schema.table_constraints tc
JOIN information_schema.key_column_usage kcu
ON tc.constraint_name = kcu.constraint_name
JOIN information_schema.constraint_column_usage ccu
ON tc.constraint_name = ccu.constraint_name
WHERE tc.table_name = 'customer'
AND tc.constraint_type = 'FOREIGN KEY';


--3
DROP TABLE customer_review;

--4
SELECT COUNT(*)
FROM rental
WHERE return_date IS NULL;

--5
SELECT
    film.title,
    film.replacement_cost
FROM rental
JOIN inventory
ON rental.inventory_id = inventory.inventory_id
JOIN film
ON inventory.film_id = film.film_id
WHERE rental.return_date IS NULL
ORDER BY film.replacement_cost DESC
LIMIT 30;

--6
SELECT DISTINCT film.title
FROM film
JOIN film_actor
ON film.film_id = film_actor.film_id
JOIN actor
ON film_actor.actor_id = actor.actor_id
WHERE
actor.first_name = 'PENELOPE'
AND actor.last_name = 'MONROE'
AND (
    film.description ILIKE '%sumo%'
    OR film.description ILIKE '%wrestler%'
);

--
SELECT title
FROM film
WHERE
rating = 'R'
AND length < 60
AND description ILIKE '%documentary%';

--
SELECT DISTINCT film.title
FROM customer
JOIN rental
ON customer.customer_id = rental.customer_id
JOIN payment
ON rental.rental_id = payment.rental_id
JOIN inventory
ON rental.inventory_id = inventory.inventory_id
JOIN film
ON inventory.film_id = film.film_id
WHERE
customer.first_name = 'MATTHEW'
AND customer.last_name = 'MAHAN'
AND payment.amount > 4
AND rental.return_date BETWEEN '2005-07-28' AND '2005-08-01';

--
SELECT DISTINCT
    film.title,
    film.replacement_cost
FROM customer
JOIN rental
ON customer.customer_id = rental.customer_id
JOIN inventory
ON rental.inventory_id = inventory.inventory_id
JOIN film
ON inventory.film_id = film.film_id
WHERE
customer.first_name = 'MATTHEW'
AND customer.last_name = 'MAHAN'
AND (
    film.title ILIKE '%boat%'
    OR film.description ILIKE '%boat%'
)
ORDER BY film.replacement_cost DESC
LIMIT 1;