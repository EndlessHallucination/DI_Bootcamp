const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Parser = require("rss-parser");

const app = express();
const parser = new Parser();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.set("views", "./public/pages");

const RSS_URL = "https://thefactfile.org/feed/";

async function getPosts() {
  const feed = await parser.parseURL(RSS_URL);
  return feed.items;
}

app.get("/", async (req, res) => {
  const posts = await getPosts();

  res.render("index", {
    posts,
  });
});

app.get("/search", (req, res) => {
  res.render("search", {
    posts: [],
  });
});

app.post("/search/title", async (req, res) => {
  const { title } = req.body;

  const posts = await getPosts();

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(title.toLowerCase()),
  );

  res.render("search", {
    posts: filteredPosts,
  });
});

app.post("/search/category", async (req, res) => {
  const { category } = req.body;

  const posts = await getPosts();

  const filteredPosts = posts.filter(
    (post) => post.categories && post.categories.includes(category),
  );

  res.render("search", {
    posts: filteredPosts,
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
