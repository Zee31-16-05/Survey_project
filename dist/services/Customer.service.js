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
exports.createCustomer = void 0;
const Customer_models_1 = __importDefault(require("../models/Customer.models"));
const crypto = require("crypto");
function createCustomer(input) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let str = input.password;
            // yaha pr spread operator laga sakte hai hum matlab input ko khol k usne se password nikal sakte hai.
            console.log("strrrr", str);
            // secret or salt to be hashed with
            const secret = "This is a secret 🤫";
            // create a md5 hasher
            const md5Hasher = crypto.createHmac("md5", secret);
            // hash the string
            // and set the output format
            const hash = md5Hasher.update(str).digest("hex");
            console.log("hashhhhhhhh bolte", hash);
            // let inputpassword = hash dekh possible hoga spread operator se.
            const addCustomer = yield Customer_models_1.default.create(input);
            console.log("input.....................", input.password);
            console.log('make customer response', addCustomer);
            return addCustomer;
        }
        catch (e) {
            console.log('make customer error', e);
        }
    });
}
exports.createCustomer = createCustomer;
