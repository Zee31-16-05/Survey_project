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
exports.loginApi = exports.getCustomerById = exports.updateCustomer = exports.deleteCustomer = exports.getCustomer = exports.createCustomer = void 0;
const Customer_models_1 = __importDefault(require("../models/Customer.models"));
var crypto = require("crypto");
var algorithm = "aes-256-cbc";
var initVector = crypto.randomBytes(16);
var Securitykey = crypto.randomBytes(32);
//encrypted password
var message = "zeeshan";
console.log('message', message);
var cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);
var encryptedData = cipher.update(message, "utf-8", "hex");
encryptedData += cipher.final("hex");
console.log("Encrypted message: " + encryptedData);
// export async function decrypted(){
//     try{
//         const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);
// let decryptedData = decipher.update(encrypted("hello@123"), "hex", "utf-8");
// console.log("my decryptedData is",decryptedData);
// decryptedData += decipher.final("utf8");
// console.log("Decrypted message: " + decryptedData);
//     }
//     catch(err){
//         console.log("decrypt error", err);
//     }
// }
function createCustomer(input) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            //Decrypted password
            const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);
            console.log("inner input password: ", input.password);
            let decryptedData = decipher.update(input.password, "hex", "utf-8");
            decryptedData += decipher.final("utf8");
            console.log("Decrypted message: " + decryptedData);
            input.password = decryptedData;
            //again encryption is happening to store password in databaseName
            var message = input.password;
            console.log('after postman message', message);
            var cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);
            var finalencryptedData = cipher.update(message, "utf-8", "hex");
            finalencryptedData += cipher.final("hex");
            console.log("Encrypted database message: " + finalencryptedData);
            input.password = finalencryptedData;
            console.log("my input", input.password);
            const addCustomer = yield Customer_models_1.default.create(input);
            console.log("customer_final", addCustomer);
            // console.log("input.....................",input.password)
            // console.log('make customer response', addCustomer)
            return addCustomer;
        }
        catch (e) {
            console.log('make customer error', e);
        }
    });
}
exports.createCustomer = createCustomer;
function getCustomer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const getCustomerDetail = yield Customer_models_1.default.find();
            console.log("get customer service", getCustomerDetail);
            return getCustomerDetail;
        }
        catch (e) {
            console.log("error get service", e);
        }
    });
}
exports.getCustomer = getCustomer;
function deleteCustomer(input) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const deleteCustomerData = yield Customer_models_1.default.findByIdAndUpdate(input, { is_admin: false });
            console.log("delete service", deleteCustomerData);
            return deleteCustomerData;
        }
        catch (e) {
            console.log("delete service", e);
        }
    });
}
exports.deleteCustomer = deleteCustomer;
function updateCustomer(_id, input) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const updateCustomerData = yield Customer_models_1.default.findByIdAndUpdate(_id, input);
            console.log("update", updateCustomerData);
            return updateCustomerData;
        }
        catch (e) {
            console.log("update error", e);
        }
    });
}
exports.updateCustomer = updateCustomer;
function getCustomerById(_id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const getCustomerData = yield Customer_models_1.default.findById(_id);
            console.log("getCustomerData", getCustomerData);
            return getCustomerData;
        }
        catch (e) {
            console.log("getCustomerData error", e);
        }
    });
}
exports.getCustomerById = getCustomerById;
function loginApi(mobile) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const getloginCustomer = yield Customer_models_1.default.find({ mobile });
            console.log("login", getloginCustomer);
            return getloginCustomer;
        }
        catch (e) {
            console.log("getloginCustomer error", e);
        }
    });
}
exports.loginApi = loginApi;
