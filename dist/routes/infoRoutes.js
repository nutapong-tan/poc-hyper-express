"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hyper_express_1 = require("hyper-express");
const userController_1 = require("../controllers/userController");
const infoRouter = new hyper_express_1.Router();
infoRouter.get('/info', userController_1.UserController.getInfo);
exports.default = infoRouter;
