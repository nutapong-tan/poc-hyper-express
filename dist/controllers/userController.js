"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const userService_1 = require("../services/userService");
const error_handler_1 = require("../middlewares/error-handler");
const userService = new userService_1.UserService();
class UserController {
}
exports.UserController = UserController;
_a = UserController;
UserController.createUser = (0, error_handler_1.errorHandler)(async (req, res) => {
    const { id, name, email } = await req.json();
    userService.createUser({ id, name, email });
    return res.status(201).json({ message: 'User created successfully', result: true });
});
UserController.updateUser = (0, error_handler_1.errorHandler)(async (req, res) => {
    const { id } = req.params;
    const { name, email } = await req.json();
    userService.updateUser(id, { id, name, email });
    return res.status(200).json({ message: 'User updated successfully', result: true });
});
UserController.getInfo = (0, error_handler_1.errorHandler)(async (_req, res) => {
    const users = userService.getAllUsers();
    return res.status(200).json({ results: users ?? [] });
});
UserController.deleteUser = (0, error_handler_1.errorHandler)(async (req, res) => {
    const { id } = req.params;
    const hasDelete = userService.deleteUser(id);
    if (!hasDelete) {
        return res.status(404).json({ message: 'User not found', result: false });
    }
    return res.status(200).json({ message: 'User deleted successfully', result: true });
});
