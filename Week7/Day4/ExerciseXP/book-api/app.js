const express = require("express");
const booksRoutes = require("./server/routes/booksRoutes");

const app = express();

app.use(express.json());

app.use("/api/books", booksRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
