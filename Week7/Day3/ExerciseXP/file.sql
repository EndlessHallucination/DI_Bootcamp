--get all languages 
SELECT *
FROM language


--all films with their language
SELECT
    film.title,
    film.description,
    language.name AS language
FROM film
JOIN language
ON film.language_id = language.language_id;

--all languages, even if they have no films
SELECT
    film.title,
    film.description,
    language.name AS language
FROM language
LEFT JOIN film
ON language.language_id = film.language_id;


--create new film
CREATE TABLE new_film (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

INSERT INTO new_film (name)
VALUES
('Interstellar'),
('The Matrix'),
('Inception');

--6
CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id INT NOT NULL,
    language_id INT NOT NULL,
    title VARCHAR(255),
    score INT CHECK (score BETWEEN 1 AND 10),
    review_text TEXT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (film_id)
        REFERENCES new_film(id)
        ON DELETE CASCADE,

    FOREIGN KEY (language_id)
        REFERENCES language(language_id)
);

INSERT INTO customer_review
(film_id, language_id, title, score, review_text)
VALUES
(1, 1, 'Amazing', 10, 'One of the best movies ever.'),
(2, 1, 'Pretty good', 8, 'Really enjoyed it.');


--7 
DELETE FROM new_film
WHERE id = 1;

-- Because of
-- ON DELETE CASCADE
-- the review connected to film id = 1 is deleted automatically.