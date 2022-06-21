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
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const CustomerController = __importStar(require("../controllers/Customer.controller"));
const signUp_middleware = __importStar(require("../middleware/middleware"));
var router = express_1.default.Router();
exports.router = router;
router.post('/', signUp_middleware.signUpMiddleware, function (req, res) {
    return CustomerController.createCustomerHandler(req, res);
});
// router.get('/',function(req:Request, res:Response){
//     return CustomerController.getCustomerHandler(req, res);
// })
router.get('/', CustomerController.getCustomerHandler);
router.get('/num/mobile', function (req, res) {
    return CustomerController.loginHandler(req, res);
});
router.delete('/:id', function (req, res) {
    return CustomerController.deleteCustomerHandler(req, res);
});
router.put('/:id', function (req, res) {
    return CustomerController.updateCustomerHandler(req, res);
});
router.get('/:id', function (req, res) {
    return CustomerController.getbyIdCustomer(req, res);
});
