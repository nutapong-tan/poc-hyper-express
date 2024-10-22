"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hyper_express_1 = __importDefault(require("hyper-express"));
const routes_1 = __importDefault(require("./routes"));
const logger_1 = require("./middlewares/logger");
const app = new hyper_express_1.default.Server();
app.use(logger_1.loggerMiddleware);
app.use(routes_1.default);
app.listen(31000)
    .then(() => console.log('Server is running on http://localhost:31000'))
    .catch(err => console.error('Failed to start server', err));
