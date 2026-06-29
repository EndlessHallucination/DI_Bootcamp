INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('Matt','Damon','08/10/1970', 5);

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('George','Clooney','06/05/1961', 2);

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES ('Meryl', 'Streep', '1949-06-22', 3);

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES ('Scarlett', 'Johansson', '1984-11-22', 0);

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES
('Leonardo', 'DiCaprio', '1974-11-11', 1),
('Brad', 'Pitt', '1963-12-18', 2),
('Natalie', 'Portman', '1981-06-09', 1);

SELECT * FROM actors;

SELECT COUNT(*) FROM actors;

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES (NULL, NULL, NULL, NULL);
--ERROR: null value in column "first_name" violates not-null constraint