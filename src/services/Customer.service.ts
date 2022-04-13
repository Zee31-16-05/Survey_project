import Customer, {CustomerUI} from "../models/Customer.models";
import {DocumentDefinition} from "mongoose";
const crypto = require("crypto");


export async function createCustomer(input : DocumentDefinition<CustomerUI>){


    try{
        function hashvalue(str : string): string{

            const secret = "This is a secret 🤫";
            const md5Hasher = crypto.createHmac("md5", secret);
            const hash = md5Hasher.update(str).digest("hex");
            return hash
        }
        // let pass = hashvalue(input.password) 
        // console.log('pass ho gaya mai',pass)
        let password = "878768f7f58152d5c40d023eea7b4ea8"
        input = {...input, password}
        console.log("new input", input)
        const addCustomer = await Customer.create(input)
        // console.log("input.....................",input.password)
        console.log('make customer response', addCustomer)
        return addCustomer
    }
    catch(e){
        console.log('make customer error', e)
    }

}

export async function getCustomer(){
    
    try{
        const getCustomerDetail = await Customer.find()
        console.log("get customer service", getCustomerDetail)
        return getCustomerDetail
    }
    catch(e){
        console.log("error get service",e)
    }
}

export async function deleteCustomer(input : string){

    try{
        const deleteCustomerData = await Customer.findByIdAndUpdate(input, {is_admin:false})
        console.log("delete service", deleteCustomerData)
        return deleteCustomerData
    }
    catch(e){
        console.log("delete service",e)
    }
}

