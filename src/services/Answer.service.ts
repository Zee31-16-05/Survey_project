import Answer , {AnswerUI} from '../models/Answer.models'
import {DocumentDefinition} from "mongoose";

export async function createAnswer(input:DocumentDefinition<AnswerUI>){

    try{
        const createAnswerData = await Answer.create(input)
        console.log("helocreateanser",createAnswerData)
        return createAnswerData
    }
    catch(e){
        console.log("createanserSer",e)
    }
}

export async function getAnswer(){

    try{
        const getAnswerData = await Answer.find()
        console.log("helogetAnswer",getAnswerData)
        return getAnswerData
    }
    catch (e){
        console.log("getanswerSER",e)
    }
}