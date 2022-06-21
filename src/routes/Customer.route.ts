import express, {Request, Response} from "express";

import * as CustomerController from "../controllers/Customer.controller";
import * as signUp_middleware from "../middleware/middleware";

var router = express.Router();

router.post('/',signUp_middleware.signUpMiddleware,function(req:Request, res:Response){

    return CustomerController.createCustomerHandler(req, res);
})

// router.get('/',function(req:Request, res:Response){

//     return CustomerController.getCustomerHandler(req, res);
// })


router.get('/', CustomerController.getCustomerHandler);

router.get('/num/mobile', function(req:Request, res:Response){
    return CustomerController.loginHandler(req, res);
})

router.delete('/:id',function(req:Request, res:Response){
    return CustomerController.deleteCustomerHandler(req, res);
})

router.put('/:id', function(req:Request, res:Response){
    return CustomerController.updateCustomerHandler(req, res);
})

router.get('/:id', function(req:Request, res:Response){
    return CustomerController.getbyIdCustomer(req, res);
})



export {router};