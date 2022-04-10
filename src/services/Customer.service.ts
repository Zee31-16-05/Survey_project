import Customer, {CustomerUI} from "../models/Customer.models";
import {DocumentDefinition} from "mongoose";


export async function createCustomer(input : DocumentDefinition<CustomerUI>){


    try{
        const addCustomer = await Customer.create(input)
        console.log('make customer response', addCustomer)
        return addCustomer
    }
    catch(e){
        console.log('make customer error', e)
    }

}