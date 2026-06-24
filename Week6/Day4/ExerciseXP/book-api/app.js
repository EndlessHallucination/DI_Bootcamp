const express = require("express");
const app = express();

app.use(express.json);

const books = [
  {
    id: 1,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    publishedYear: 1937,
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    publishedYear: 1949,
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publishedYear: 1960,
  },
  {
    id: 4,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishedYear: 1925,
  },
];

app.get("/books", (req, res) => {
  return res.json(books);
});

app.get("/books/:id", (req, res) => {
  const id = Number(req.params.id);

  const book = books.find((b) => b.id === id);

  if (!book) {
    return res.status(404).json({ error: "Book not found" });
  }

  res.status(200).json(book);
});

app.post("/api/books", (req, res) => {
  const { title, author, publishedYear } = req.body;

  const newBook = {
    id: books.length > 0 ? books[books.length - 1].id + 1 : 1,
    title,
    author,
    publishedYear,
  };

  books.push(newBook);

  res.status(201).json(newBook);
});

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});
