"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hyper_express_1 = require("hyper-express");
const userRoutes_1 = __importDefault(require("./userRoutes"));
const infoRoutes_1 = __importDefault(require("./infoRoutes"));
const router = new hyper_express_1.Router();
// Use the imported routers
router.use('/api', userRoutes_1.default);
router.use('/api', infoRoutes_1.default);
exports.default = router;
