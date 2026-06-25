const express = require("express");
const quizRouter = require("./routes/quiz");

const app = express();

app.use(express.json());

app.use("/quiz", quizRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
