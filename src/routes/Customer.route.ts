import express, {Request, Response} from "express";
import * as CustomerController from "../controllers/Customer.controller";

var router = express.Router();

router.post('/',function(req:Request, res:Response){

    return CustomerController.createCustomerHandler(req, res);
})

router.get('/',function(req:Request, res:Response){

    return CustomerController.getCustomerHandler(req, res);
})

router.delete('/:id',function(req:Request, res:Response){
    return CustomerController.deleteCustomerHandler(req, res);
})

export {router};