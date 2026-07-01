const express = require("express");

const app = express();

const usersRoutes = require("./server/routes/usersRoutes");

app.use(express.json());

app.use("/", usersRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
