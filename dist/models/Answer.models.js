"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
//dekh string[] ya Types.Array<string> dono array type hi bata rahe h lkin pana ne type wala isiliye likhe q k agr nai likhe na toh 
// typescript apne ko warning deta hai jab bhi apan mongoose k koi bhi array function ko call karenge
const AnswerSchema = new mongoose_1.default.Schema({
    answer_store: { type: [String], require: true },
    question_id: { type: [String], require: true, ref: 'Question' },
    customer_id: { type: String, require: true, ref: 'Customer' }
});
