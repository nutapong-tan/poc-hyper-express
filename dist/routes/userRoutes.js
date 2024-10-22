"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hyper_express_1 = require("hyper-express");
const userController_1 = require("../controllers/userController");
const userRouter = new hyper_express_1.Router();
userRouter.post('/users', userController_1.UserController.createUser);
userRouter.put('/users/:id', userController_1.UserController.updateUser);
userRouter.delete('/users/:id', userController_1.UserController.deleteUser);
exports.default = userRouter;
