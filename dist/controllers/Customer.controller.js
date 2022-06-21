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
exports.loginHandler = exports.getbyIdCustomer = exports.updateCustomerHandler = exports.deleteCustomerHandler = exports.getCustomerHandler = exports.createCustomerHandler = void 0;
const Customer_service_1 = require("../services/Customer.service");
function createCustomerHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const customerList = yield (0, Customer_service_1.createCustomer)(req.body);
            // console.log("my response",customerList);
            // console.log("my body",req.body)
            res.status(200).json(customerList);
            // return customerList
        }
        catch (e) {
            console.log("error controller customer", e);
        }
    });
}
exports.createCustomerHandler = createCustomerHandler;
function getCustomerHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const getCustomerList = yield (0, Customer_service_1.getCustomer)();
            console.log("get customer controller", getCustomerList);
            // return getCustomerList;
            return res.status(200).json(getCustomerList);
        }
        catch (e) {
            console.log("error controller getcustomer", e);
        }
    });
}
exports.getCustomerHandler = getCustomerHandler;
function deleteCustomerHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let _id = req.params.id;
        try {
            const deleteCustomerName = yield (0, Customer_service_1.deleteCustomer)(_id);
            console.log("delete controller", deleteCustomerName);
            // return deleteCustomerName
            res.status(204).json(deleteCustomerName);
        }
        catch (e) {
            console.log("delete controller", e);
        }
    });
}
exports.deleteCustomerHandler = deleteCustomerHandler;
function updateCustomerHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let _id = req.params.id;
        let input = {
            "fname": "maldives",
            "lname": "paradise",
            "age": 25,
            "gender": "male",
            "mobile": 7065882304,
            "is_admin": true,
            "password": "Wrongpas@123"
        };
        try {
            const updateCustomerName = yield (0, Customer_service_1.updateCustomer)(_id, input);
            console.log("updatecontroller", updateCustomerName);
            // return updateCustomerName
            res.status(200).json(updateCustomerName);
        }
        catch (e) {
            console.log("updatecontroler error", e);
        }
    });
}
exports.updateCustomerHandler = updateCustomerHandler;
function getbyIdCustomer(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let _id = req.params.id;
        try {
            const getbyIdCustomerData = yield (0, Customer_service_1.getCustomerById)(_id);
            console.log("customerby Id", getbyIdCustomerData);
            // return getbyIdCustomerData
            res.json(getbyIdCustomerData);
        }
        catch (e) {
            console.log("getbyIdCustomer error", e);
        }
    });
}
exports.getbyIdCustomer = getbyIdCustomer;
function loginHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let mobile = req.query.mobile;
        console.log("my mobile", mobile);
        try {
            const checkCustomer = yield (0, Customer_service_1.loginApi)(mobile);
            console.log("checkCustomer", checkCustomer);
            return res.json(checkCustomer);
        }
        catch (e) {
            console.log("logincontroller", e);
        }
    });
}
exports.loginHandler = loginHandler;
