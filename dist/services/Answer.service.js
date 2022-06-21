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
exports.getAnswer = exports.createAnswer = void 0;
const Answer_models_1 = __importDefault(require("../models/Answer.models"));
function createAnswer(input) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const createAnswerData = yield Answer_models_1.default.create(input);
            console.log("helocreateanser", createAnswerData);
            return createAnswerData;
        }
        catch (e) {
            console.log("createanserSer", e);
        }
    });
}
exports.createAnswer = createAnswer;
function getAnswer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const getAnswerData = yield Answer_models_1.default.find();
            console.log("helogetAnswer", getAnswerData);
            return getAnswerData;
        }
        catch (e) {
            console.log("getanswerSER", e);
        }
    });
}
exports.getAnswer = getAnswer;
