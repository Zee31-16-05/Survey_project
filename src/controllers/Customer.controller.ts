import {Request, Response} from "express";
import { createCustomer, getCustomer, deleteCustomer } from "../services/Customer.service";

export async function createCustomerHandler(req:Request, res:Response){

    try{
        const customerList = await createCustomer(req.body)
        console.log("wrong jagah",customerList)
        res.status(200).json(customerList)
    }
    catch(e){
        console.log("error controller customer",e)
    }
}

export async function getCustomerHandler(req:Request, res:Response){

    try{
    const getCustomerList = await getCustomer()
    console.log("get customer controller", getCustomerList)
    res.status(200).json(getCustomerList)
    }
    catch(e){
        console.log("error controller getcustomer",e)
    }
}

export async function deleteCustomerHandler(req:Request, res:Response){

    let _id = req.params.id
    try{
        const deleteCustomerName = await deleteCustomer(_id)
        console.log("delete controller",deleteCustomerName)
        res.status(204).json(deleteCustomerName)
    }
    catch(e){
        console.log("delete controller",e)
    }
}

