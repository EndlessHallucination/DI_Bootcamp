const booksModel = require("../models/booksModel");

const getBooks = (req, res) => {
  res.status(200).json(booksModel.getAllBooks());
};

const getBook = (req, res) => {
  const id = Number(req.params.bookId);

  const book = booksModel.getBookById(id);

  if (!book) {
    return res.status(404).json({
      message: "Book not found",
    });
  }

  res.status(200).json(book);
};

const createBook = (req, res) => {
  const { title, author, publishedYear } = req.body;

  const books = booksModel.getAllBooks();

  const newBook = {
    id: books.length + 1,
    title,
    author,
    publishedYear,
  };

  booksModel.createBook(newBook);

  res.status(201).json(newBook);
};

module.exports = {
  getBooks,
  getBook,
  createBook,
};
