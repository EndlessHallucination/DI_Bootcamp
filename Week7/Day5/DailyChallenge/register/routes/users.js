const express = require("express");

const bcrypt = require("bcrypt");

const router = express.Router();

const { readUsers, writeUsers } = require("../utils/file");

router.post("/register", async (req, res) => {
  try {
    const { name, lastName, email, username, password } = req.body;

    if (!name || !lastName || !email || !username || !password) {
      return res.status(400).json({
        message: "All fields required",
      });
    }

    const users = await readUsers();

    const exists = users.find((u) => u.username === username);

    if (exists) {
      return res.json({
        message: "Username already exists",
      });
    }

    const hash = await bcrypt.hash(password, 10);

    const newUser = {
      id: Date.now(),
      name,
      lastName,
      email,
      username,
      password: hash,
    };

    users.push(newUser);

    await writeUsers(users);

    res.json({
      message: "User registered successfully",
    });
  } catch {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const users = await readUsers();

    const user = users.find((u) => u.username === username);

    if (!user)
      return res.status(401).json({
        message: "User not found",
      });

    const match = await bcrypt.compare(password, user.password);

    if (!match)
      return res.status(401).json({
        message: "Incorrect password",
      });

    res.json({
      message: "Login successful",
    });
  } catch (err) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.get("/users", async (req, res) => {
  res.json(await readUsers());
});

router.get("/users/:id", async (req, res) => {
  const users = await readUsers();

  const user = users.find((u) => u.id == req.params.id);

  if (!user)
    return res.status(404).json({
      message: "Not found",
    });

  res.json(user);
});

router.put("/users/:id", async (req, res) => {
  const users = await readUsers();

  const user = users.find((u) => u.id == req.params.id);

  if (!user)
    return res.status(404).json({
      message: "Not found",
    });

  Object.assign(user, req.body);

  await writeUsers(users);

  res.json(user);
});

module.exports = router;
