import {Request, Response} from "express";
import { createCustomer, getCustomer, deleteCustomer,updateCustomer, getCustomerById, loginApi } from "../services/Customer.service";

export async function createCustomerHandler(req:Request, res:Response){

    try{
        const customerList = await createCustomer(req.body)
        // console.log("my response",customerList);
        
        // console.log("my body",req.body)
        res.status(200).json(customerList);
        // return customerList
    }
    catch(e){
        console.log("error controller customer",e)
    }
}

export async function getCustomerHandler(req:Request, res:Response){

    try{
    const getCustomerList = await getCustomer()
    console.log("get customer controller", getCustomerList)
    // return getCustomerList;
    return res.status(200).json(getCustomerList);
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
        // return deleteCustomerName
        res.status(204).json(deleteCustomerName)
    }
    catch(e){
        console.log("delete controller",e)
    }
}

export async function updateCustomerHandler(req:Request, res:Response){

    let _id = req.params.id

    let input = {
    "fname": "maldives",
    "lname" : "paradise",
    "age" : 25,
    "gender" : "male",
    "mobile" : 7065882304,
    "is_admin" : true,
    "password" : "Wrongpas@123"
    }

    try{
    const updateCustomerName = await updateCustomer(_id, input)
    console.log("updatecontroller",updateCustomerName)
    // return updateCustomerName
    res.status(200).json(updateCustomerName)

    }
    catch(e){
        console.log("updatecontroler error",e)
    }
}

export async function getbyIdCustomer(req:Request, res: Response){

    let _id = req.params.id

    try{
        const getbyIdCustomerData = await getCustomerById(_id)
        console.log("customerby Id",getbyIdCustomerData)
        // return getbyIdCustomerData
        res.json(getbyIdCustomerData)
    }
    catch(e){
        console.log("getbyIdCustomer error",e)
    }
}


export async function loginHandler(req: Request, res: Response){

    let mobile = req.query.mobile;
    console.log("my mobile", mobile)

    try{
        const checkCustomer = await loginApi(mobile)
        console.log("checkCustomer",checkCustomer)
        return res.json(checkCustomer);
    }
    catch(e){
        console.log("logincontroller",e)
    }
}



