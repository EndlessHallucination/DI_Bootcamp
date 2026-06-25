const express = require("express");
const router = express.Router();

const todos = [];

// GET all todos
router.get("/", (req, res) => {
  res.json(todos);
});

// POST new todo
router.post("/", (req, res) => {
  const todo = {
    id: Date.now(),
    task: req.body.task,
  };

  todos.push(todo);

  res.status(201).json(todo);
});

// PUT update todo
router.put("/:id", (req, res) => {
  const id = Number(req.params.id);

  const todo = todos.find((t) => t.id === id);

  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  todo.task = req.body.task;

  res.json(todo);
});

// DELETE todo
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);

  const index = todos.findIndex((t) => t.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }

  todos.splice(index, 1);

  res.json({ message: "Todo deleted" });
});

module.exports = router;
