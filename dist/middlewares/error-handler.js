"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (handler) => {
    return async (req, res, next) => {
        try {
            await handler(req, res);
            next();
        }
        catch (error) {
            return res.status(400).json({ message: error.message });
        }
    };
};
exports.errorHandler = errorHandler;
