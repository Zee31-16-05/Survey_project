import {DocumentDefinition} from "mongoose";
import  Question,{QuestionUI} from "../models/Question.models";


export async function createQuestion(input:DocumentDefinition<QuestionUI>){

    try{
        const question = await Question.create(input)
        console.log("questionSer",question);
        return question;
    }
    catch(e){
        console.log("create_Question_service",e)
    }
}

export async function getQuestion(){

    try{
        const getquest = await Question.find()
        console.log("getquestRes",getquest)
        return getquest
    }
    catch(e){
        console.log("getQuestionSerErr",e)
    }
}

export async function deleteQuestion(_id: string){

    try{
        const deletequest = await Question.findByIdAndUpdate(_id)
        console.log("deletequest",deletequest)
        return deletequest
    }
    catch(e){
        console.log("deleteQuestion",e)
    }
}

export async function updateQuestion(_id: string, input: object){

    try{
        const updatequest = await Question.findByIdAndUpdate(_id, input)
        console.log("updatequest",updatequest)
        return updatequest
    }
    catch(e){
        console.log("updatequery",e)
    }
}