import mongoose from 'mongoose';
import { Schema, Model, Types,Mongoose } from 'mongoose';
export interface AnswerUI extends mongoose.Document {
    answer_store : Types.Array<string>; //string[] 
    question_id : Types.Array<string>;
    customer_id : (string | mongoose.Schema.Types.ObjectId);
}
//dekh string[] ya Types.Array<string> dono array type hi bata rahe h lkin pana ne type wala isiliye likhe q k agr nai likhe na toh 
// typescript apne ko warning deta hai jab bhi apan mongoose k koi bhi array function ko call karenge
const AnswerSchema = new mongoose.Schema<AnswerUI>({

    answer_store : {type : [String], require:true },
    question_id : {type : [String], require:true, ref: 'Question'},
    customer_id : {type: mongoose.Schema.Types.ObjectId, require:true, ref : 'Customer'}
})

const Answer =  mongoose.model<AnswerUI>('Answer', AnswerSchema)
export default Answer