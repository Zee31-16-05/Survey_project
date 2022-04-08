import * as mongoose from "mongoose";

export interface CustomerUI extends mongoose.Document {  //ye line ka mtlb k jo apna CustomerUI interface hai na usko apan bol rahe h k tu mongoose.Document mein se bhi property,method ko le le.

    fname : string;
    lname : string;
    age : number;
    gender : string;
    mobile : number;
    is_admin : boolean;
    password : string;
    
}

export const CustomerSchema = new mongoose.Schema<CustomerUI>({

    fname : {type: String, required: true},
    lname : {type: String, required: true},
    age : {type: Number, required: true},
    gender : {type: String, required: true},
    is_admin : {type: Boolean, required: true},
    mobile : {type: Number, required: true},
    password : {type: String, required: true}
},{timestamps:true})

const Customer =   mongoose.model<CustomerUI>('Customer',CustomerSchema)
export default Customer