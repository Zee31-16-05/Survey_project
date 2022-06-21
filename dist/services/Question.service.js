"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateQuestion = exports.deleteQuestion = exports.getQuestion = exports.createQuestion = void 0;
const Question_models_1 = __importDefault(require("../models/Question.models"));
function createQuestion(input) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const question = yield Question_models_1.default.create(input);
            console.log("questionSer", question);
            return question;
        }
        catch (e) {
            console.log("create_Question_service", e);
        }
    });
}
exports.createQuestion = createQuestion;
function getQuestion() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const getquest = yield Question_models_1.default.find();
            console.log("getquestRes", getquest);
            return getquest;
        }
        catch (e) {
            console.log("getQuestionSerErr", e);
        }
    });
}
exports.getQuestion = getQuestion;
function deleteQuestion(_id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const deletequest = yield Question_models_1.default.findByIdAndUpdate(_id);
            console.log("deletequest", deletequest);
            return deletequest;
        }
        catch (e) {
            console.log("deleteQuestion", e);
        }
    });
}
exports.deleteQuestion = deleteQuestion;
function updateQuestion(_id, input) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const updatequest = yield Question_models_1.default.findByIdAndUpdate(_id, input);
            console.log("updatequest", updatequest);
            return updatequest;
        }
        catch (e) {
            console.log("updatequery", e);
        }
    });
}
exports.updateQuestion = updateQuestion;
