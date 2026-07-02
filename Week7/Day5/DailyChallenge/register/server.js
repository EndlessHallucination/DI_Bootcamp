const express = require("express");

const userRouter = require("./routes/users");

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.use("/", userRouter);

app.listen(3000, () => {
  "server runs on port 3000";
});
