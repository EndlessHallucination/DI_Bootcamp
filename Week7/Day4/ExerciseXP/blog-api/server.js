const express = require("express");

const app = express();

const postsRoutes = require("./server/routes/postsRoutes");

app.use(express.json());

app.use("/posts", postsRoutes);

// Invalid routes
app.use((req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});

// Server errors
app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    message: "Internal Server Error",
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
