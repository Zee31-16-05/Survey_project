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
exports.getAnswerHandler = exports.createAnswerHandler = void 0;
const Answer_service_1 = require("../services/Answer.service");
function createAnswerHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const createAnswerRecord = yield (0, Answer_service_1.createAnswer)(req.body);
            console.log("createAnswerRecord", createAnswerRecord);
            return res.json(createAnswerRecord);
        }
        catch (e) {
            console.log("");
        }
    });
}
exports.createAnswerHandler = createAnswerHandler;
function getAnswerHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const getAnswerRecord = yield (0, Answer_service_1.getAnswer)();
            console.log("getAnswerRecord", getAnswerRecord);
            res.json(getAnswerRecord);
        }
        catch (e) {
            console.log("hellogetanserhandler", e);
        }
    });
}
exports.getAnswerHandler = getAnswerHandler;
