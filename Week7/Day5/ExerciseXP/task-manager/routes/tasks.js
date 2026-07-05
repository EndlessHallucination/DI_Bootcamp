const express = require("express");
const router = express.Router();

const { readTasks, writeTasks } = require("../utils/file");
// Optional:
// const { v4: uuidv4 } = require("uuid");

router.get("/", async (req, res) => {
  try {
    const tasks = await readTasks();
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error reading file",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const tasks = await readTasks();

    const task = tasks.find((t) => t.id === Number(req.params.id));

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error reading file",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({
        message: "Title required",
      });
    }

    const tasks = await readTasks();

    const newTask = {
      id: Date.now(),
      // Or: id: uuidv4(),
      title,
    };

    tasks.push(newTask);

    await writeTasks(tasks);

    res.status(201).json(newTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error writing file",
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({
        message: "Title required",
      });
    }

    const tasks = await readTasks();

    const task = tasks.find((t) => t.id === Number(req.params.id));

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    task.title = title;

    await writeTasks(tasks);

    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error writing file",
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const tasks = await readTasks();

    const filtered = tasks.filter((t) => t.id !== Number(req.params.id));

    if (filtered.length === tasks.length) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    await writeTasks(filtered);

    res.json({
      message: "Deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error deleting",
    });
  }
});

module.exports = router;
