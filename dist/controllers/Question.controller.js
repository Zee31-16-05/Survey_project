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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateQuestionHandler = exports.deleteQuestionHandler = exports.getQuestionHandler = exports.createQuestionHandler = void 0;
const Question_service_1 = require("../services/Question.service");
function createQuestionHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const createQuest = yield (0, Question_service_1.createQuestion)(req.body);
            console.log("createQustREsponse", createQuest);
            return res.json(createQuest);
        }
        catch (e) {
            console.log("createQuestionHandlerError", e);
        }
    });
}
exports.createQuestionHandler = createQuestionHandler;
function getQuestionHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const getquestHand = yield (0, Question_service_1.getQuestion)();
            console.log("getqustHnd", getquestHand);
            return res.json(getquestHand);
        }
        catch (e) {
            console.log("getQuestionHandlerError", e);
        }
    });
}
exports.getQuestionHandler = getQuestionHandler;
function deleteQuestionHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let _id = req.params.id;
        try {
            const deletequestHand = yield (0, Question_service_1.deleteQuestion)(_id);
            console.log("deletequestHand", deletequestHand);
            return res.json(deletequestHand);
        }
        catch (e) {
            console.log("deletequestion", e);
        }
    });
}
exports.deleteQuestionHandler = deleteQuestionHandler;
function updateQuestionHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let _id = req.params.id;
        let input = {
            "question_type": "mcqtqtqtqt",
            "question": "what is your spicest food????",
            "options": ["bheja fry", "egg onion", "fisher man"]
        };
        try {
            const updatequestHand = yield (0, Question_service_1.updateQuestion)(_id, input);
            console.log("updatequestHand", updatequestHand);
            return res.json(updatequestHand);
        }
        catch (e) {
            console.log("updateQuestiohandErr0", e);
        }
    });
}
exports.updateQuestionHandler = updateQuestionHandler;
