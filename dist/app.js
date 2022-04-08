"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const PORT = 8081;
const Hostname = 'localhost';
const URL = `mongodb://${Hostname}:27017/survey_submission`;
app.use(express_1.default.json());
mongoose_1.default.connect(URL)
    .then(() => console.log("Successfully connected to the database"))
    .catch(() => console.log("Failed connection to the database"));
app.listen(PORT, () => {
    console.log(`listening on ${Hostname}: ${PORT}`);
});
