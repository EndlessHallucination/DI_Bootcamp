const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// GET request
app.get("/api/hello", (req, res) => {
  res.json({
    message: "Hello From Express",
  });
});

// POST request
app.post("/api/world", (req, res) => {
  console.log(req.body);

  res.json({
    message: `I received your POST request. This is what you sent me: ${req.body.text}`,
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
