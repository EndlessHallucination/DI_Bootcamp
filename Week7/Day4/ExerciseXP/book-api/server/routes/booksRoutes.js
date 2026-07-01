const express = require("express");
const router = express.Router();

const booksController = require("../controllers/booksController");

router.get("/", booksController.getBooks);

router.get("/:bookId", booksController.getBook);

router.post("/", booksController.createBook);

module.exports = router;
