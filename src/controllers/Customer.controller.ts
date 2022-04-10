import {Request, Response} from "express";
import { createCustomer } from "../services/Customer.service";

export async function createCustomerHandler(req:Request, res:Response){

    try{
        const customerList = await createCustomer(req.body)
        console.log(customerList)
        res.status(200).json(customerList)
    }
    catch(e){
        console.log("error controller customer",e)
    }
}

