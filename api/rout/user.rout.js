const express = require("express");
const UserController = require("../controls/user.control.js");
const UserRouter = express.Router();

UserRouter.post("/creatNewUser",UserController.creatNewUser)
UserRouter.post("/loginUser",UserController.loginUser)

module.exports = UserRouter;