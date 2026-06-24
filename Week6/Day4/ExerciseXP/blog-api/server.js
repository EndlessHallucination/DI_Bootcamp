const express = require("express");
const app = express();

app.use(express.json());

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with JavaScript",
    content:
      "JavaScript is a versatile programming language used for web development.",
  },
  {
    id: 2,
    title: "Understanding Arrays",
    content: "Arrays allow you to store multiple values in a single variable.",
  },
  {
    id: 3,
    title: "Introduction to Node.js",
    content: "Node.js lets you run JavaScript outside the browser.",
  },
  {
    id: 4,
    title: "Working with Express",
    content:
      "Express is a lightweight framework for building web servers in Node.js.",
  },
];

app.get("/posts", (req, res) => {
  return res.json(blogPosts);
});

app.get("/posts/:id", (req, res) => {
  const id = Number(req.params.id);

  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }

  res.json(post);
});

app.post("/posts", (req, res) => {
  const { title, content } = req.body;

  if (!title | !content) {
    return res.status(400).json({ error: "Title and content are required" });
  }

  const newPost = {
    id: blogPosts.length
      ? Math.max(...blogPosts.map((post) => post.id)) + 1
      : 1,
    title,
    content,
  };

  blogPosts.push(newPost);

  res.status(201).json(newPost);
});

app.put("/posts/:id", (req, res) => {
  const id = Number(req.params.id);
  const { title, content } = req.body;

  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }

  if (title) post.title = title;
  if (content) post.content = content;

  res.json(post);
});

app.delete("/posts/:id", (req, res) => {
  const id = Number(req.params.id);

  const postIndex = blogPosts.findIndex((post) => post.id === id);

  if (postIndex === -1) {
    return res.status(404).json({ error: "Post not found" });
  }

  const deletedPost = blogPosts.splice(postIndex, 1);

  res.json({
    message: "Post deleted successfully",
    post: deletedPost[0],
  });
});

app.use((req, res) => {
  res.status(404).json({
    error: "Route not found",
  });
});

app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    error: "Internal Server Error",
  });
});

app.listen(3000, () => {
  console.log("server is listening on port 5000");
});
