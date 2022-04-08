import * as mongoose from "mongoose";

// #1. Create an interface representing a document in MongoDB

export interface QuestionUI extends mongoose.Document{
    question_type : string;
    question : string;
    options : (string[] | null);

}

const QuestionSchema = new mongoose.Schema<QuestionUI>({ // toh QuestionUI ko add karne ka maksad hi yahi tha k ab hum sirf wahi property(fields) ko add kar sakte hai jo already interface mein hai doosri koi field add karega toh vo error dega.

    question_type : {type : String, required: true},
    question : {type : String, required: true},
    options : {type : Array, required: true}
})

const Question = mongoose.model<QuestionUI>('Question', QuestionSchema)
export default Question