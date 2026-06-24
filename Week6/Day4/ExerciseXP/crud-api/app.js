const express = require("express");
const app = express();

const { getPosts } = require("./data/dataService");

app.use(express.json);

app.get("/posts", async (req, res) => {
  try {
    const posts = await getPosts();
    console.log("Data successfully retrieved and sent.");

    res.json(posts);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to retrieve posts",
    });
  }
});

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});
