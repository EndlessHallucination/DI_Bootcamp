const express = require("express");

const router = express.Router();

const usersController = require("../controllers/usersController");

router.post("/register", usersController.register);

router.post("/login", usersController.login);

router.get("/users", usersController.getUsers);

router.get("/users/:id", usersController.getUser);

router.put("/users/:id", usersController.updateUser);

module.exports = router;
