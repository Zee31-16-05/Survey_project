"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpMiddleware = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// router.use('/customer',Customer_Route.router)
let signUpMiddleware = (req, res, next) => {
    console.log("hello world from customer");
    next();
};
exports.signUpMiddleware = signUpMiddleware;
