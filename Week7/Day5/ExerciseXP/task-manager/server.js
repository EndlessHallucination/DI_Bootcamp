const express = require("express");
const taskRouter = require("./routes/tasks");

const app = express();

app.use(express.json());

app.use("/tasks", taskRouter);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
