"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerMiddleware = void 0;
const loggerMiddleware = (req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    res.on('finish', () => {
        console.log(`Response: ${res.statusCode}`);
    });
    next();
};
exports.loggerMiddleware = loggerMiddleware;
