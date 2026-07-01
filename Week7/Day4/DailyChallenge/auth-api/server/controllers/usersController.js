const bcrypt = require("bcrypt");
const usersModel = require("../models/usersModel");

const register = async (req, res) => {
  try {
    const { email, username, first_name, last_name, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    await usersModel.registerUser(
      email,
      username,
      first_name,
      last_name,
      hashedPassword,
    );

    res.status(201).json({
      message: "User registered successfully",
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await usersModel.getPassword(username);

    if (!user) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    res.json({
      message: "Login successful",
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

const getUsers = async (req, res) => {
  const users = await usersModel.getAllUsers();
  res.json(users);
};

const getUser = async (req, res) => {
  const user = await usersModel.getUserById(req.params.id);

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  res.json(user);
};

const updateUser = async (req, res) => {
  const { email, first_name, last_name } = req.body;

  const user = await usersModel.updateUser(
    req.params.id,
    email,
    first_name,
    last_name,
  );

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  res.json(user);
};

module.exports = {
  register,
  login,
  getUsers,
  getUser,
  updateUser,
};
