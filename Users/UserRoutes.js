const express = require("express");
const UserController = require("./UserController");

const UserRouter = express.Router();

UserRouter.get("/", UserController.getUsers);
UserRouter.get("/:id", UserController.getUser);

module.exports = UserRouter;
