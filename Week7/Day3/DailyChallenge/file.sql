
-- Create Customer table
CREATE TABLE customer (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL
);

-- Create Customer Profile table
CREATE TABLE customer_profile (
    id SERIAL PRIMARY KEY,
    isLoggedIn BOOLEAN DEFAULT FALSE,
    customer_id INT UNIQUE,
    FOREIGN KEY (customer_id)
        REFERENCES customer(id)
        ON DELETE CASCADE
);

-- Insert customers
INSERT INTO customer (first_name, last_name)
VALUES
('John', 'Doe'),
('Jerome', 'Lalu'),
('Lea', 'Rive');

-- Insert customer profiles (using subqueries)
INSERT INTO customer_profile (isLoggedIn, customer_id)
VALUES
(
    TRUE,
    (SELECT id FROM customer WHERE first_name = 'John')
),
(
    FALSE,
    (SELECT id FROM customer WHERE first_name = 'Jerome')
);

-- Logged in customers
SELECT c.first_name
FROM customer c
INNER JOIN customer_profile cp
ON c.id = cp.customer_id
WHERE cp.isLoggedIn = TRUE;

-- All customers with login status
SELECT
    c.first_name,
    cp.isLoggedIn
FROM customer c
LEFT JOIN customer_profile cp
ON c.id = cp.customer_id;

-- Number of customers not logged in
SELECT COUNT(*) AS not_logged_in
FROM customer c
LEFT JOIN customer_profile cp
ON c.id = cp.customer_id
WHERE cp.isLoggedIn = FALSE
   OR cp.isLoggedIn IS NULL;



-- Create Book table
CREATE TABLE book (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL
);

-- Insert books
INSERT INTO book (title, author)
VALUES
('Alice In Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K Rowling'),
('To kill a mockingbird', 'Harper Lee');

-- Create Student table
CREATE TABLE student (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    age INT CHECK (age <= 15)
);

-- Insert students
INSERT INTO student (name, age)
VALUES
('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14);

-- Create Library junction table
CREATE TABLE library (
    book_fk_id INT,
    student_fk_id INT,
    borrowed_date DATE,

    PRIMARY KEY (book_fk_id, student_fk_id),

    FOREIGN KEY (book_fk_id)
        REFERENCES book(book_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    FOREIGN KEY (student_fk_id)
        REFERENCES student(student_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- Insert borrowing records (using subqueries)
INSERT INTO library (book_fk_id, student_fk_id, borrowed_date)
VALUES
(
    (SELECT book_id FROM book WHERE title = 'Alice In Wonderland'),
    (SELECT student_id FROM student WHERE name = 'John'),
    '2022-02-15'
),
(
    (SELECT book_id FROM book WHERE title = 'To kill a mockingbird'),
    (SELECT student_id FROM student WHERE name = 'Bob'),
    '2021-03-03'
),
(
    (SELECT book_id FROM book WHERE title = 'Alice In Wonderland'),
    (SELECT student_id FROM student WHERE name = 'Lera'),
    '2021-05-23'
),
(
    (SELECT book_id FROM book WHERE title = 'Harry Potter'),
    (SELECT student_id FROM student WHERE name = 'Bob'),
    '2021-08-12'
);

-- Display all records from the junction table
SELECT *
FROM library;

-- Display student names and borrowed book titles
SELECT
    s.name,
    b.title
FROM library l
JOIN student s
ON l.student_fk_id = s.student_id
JOIN book b
ON l.book_fk_id = b.book_id;

-- Average age of students who borrowed "Alice In Wonderland"
SELECT AVG(s.age) AS average_age
FROM library l
JOIN student s
ON l.student_fk_id = s.student_id
JOIN book b
ON l.book_fk_id = b.book_id
WHERE b.title = 'Alice In Wonderland';

-- Delete a student
DELETE FROM student
WHERE name = 'Bob';

-- Verify cascade delete in the junction table
SELECT *
FROM library;