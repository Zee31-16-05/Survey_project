import express, {Request, Response} from "express";
import * as CustomerController from "../controllers/Customer.controller";

var router = express.Router();

router.post('/',function(req:Request, res:Response){

    return CustomerController.createCustomerHandler(req, res);
})

export {router};