import Customer, {CustomerUI} from "../models/Customer.models";
import {DocumentDefinition} from "mongoose";
var crypto = require("crypto");
var algorithm = "aes-256-cbc"; 

var initVector = crypto.randomBytes(16);

var Securitykey = crypto.randomBytes(32);

 //encrypted password

 
        var message = "zeeshan";
        console.log('message', message);
        
        var cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);

        var encryptedData = cipher.update(message, "utf-8", "hex");

        encryptedData += cipher.final("hex");
        
        console.log("Encrypted message: " + encryptedData);


// export async function decrypted(){
//     try{

//         const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);

// let decryptedData = decipher.update(encrypted("hello@123"), "hex", "utf-8");
// console.log("my decryptedData is",decryptedData);


// decryptedData += decipher.final("utf8");

// console.log("Decrypted message: " + decryptedData);
//     }
//     catch(err){
//         console.log("decrypt error", err);
        
//     }
// }





export async function createCustomer(input : DocumentDefinition<CustomerUI>){


    try{
       

        //Decrypted password

    const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);
console.log("inner input password: ",input.password);

    let decryptedData = decipher.update(input.password, "hex", "utf-8");


    decryptedData += decipher.final("utf8");

    console.log("Decrypted message: " + decryptedData);

        input.password = decryptedData
        //again encryption is happening to store password in databaseName
        var message = input.password
        console.log('after postman message', message);
        
        var cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);

        var finalencryptedData = cipher.update(message, "utf-8", "hex");

        finalencryptedData += cipher.final("hex");
        
        console.log("Encrypted database message: " + finalencryptedData);
        input.password = finalencryptedData
        console.log("my input", input.password);
        
        const addCustomer = await Customer.create(input)
        console.log("customer_final",addCustomer);
        
        // console.log("input.....................",input.password)
        // console.log('make customer response', addCustomer)
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

export async function updateCustomer(_id : string, input : object, ){

    try{
        const updateCustomerData = await Customer.findByIdAndUpdate(_id, input)
        console.log("update",updateCustomerData)
        return updateCustomerData
    }
    catch(e){
        console.log("update error",e)
    }
}

export async function getCustomerById(_id: string){

    try{
        const getCustomerData = await Customer.findById(_id)
        console.log("getCustomerData",getCustomerData)
        return getCustomerData
    }
    catch(e){
        console.log("getCustomerData error",e)
    }
}

export async function loginApi(mobile : any){

    try{
        const getloginCustomer = await Customer.find({mobile})

        console.log("login",getloginCustomer)
        return getloginCustomer
    }
    catch(e){
        console.log("getloginCustomer error",e)
    }
}