"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const CustomerRoute = __importStar(require("./routes/Customer.route"));
const QuestionRoute = __importStar(require("./routes/Question.route"));
const AnswerRoute = __importStar(require("./routes/Answer.route"));
const app = (0, express_1.default)();
const PORT = 8081;
const Hostname = 'localhost';
const URL = `mongodb://${Hostname}:27017/survey_submission`;
app.use(express_1.default.json());
app.use('/customer', CustomerRoute.router);
app.use('/question', QuestionRoute.router);
app.use('/answer', AnswerRoute.router);
mongoose_1.default.connect(URL)
    .then(() => console.log("Successfully connected to the database"))
    .catch(() => console.log("Failed connection to the database"));
app.listen(PORT, () => {
    console.log(`listening on ${Hostname}: ${PORT}`);
});
