const express = require("express");
const router = express.Router();

const books = [];

// GET all books
router.get("/", (req, res) => {
  res.json(books);
});

// POST new book
router.post("/", (req, res) => {
  const book = {
    id: Date.now(),
    title: req.body.title,
    author: req.body.author,
  };

  books.push(book);

  res.status(201).json(book);
});

// PUT update book
router.put("/:id", (req, res) => {
  const id = Number(req.params.id);

  const book = books.find((b) => b.id === id);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  book.title = req.body.title;
  book.author = req.body.author;

  res.json(book);
});

// DELETE book
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);

  const index = books.findIndex((b) => b.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Book not found" });
  }

  books.splice(index, 1);

  res.json({ message: "Book deleted" });
});

module.exports = router;
