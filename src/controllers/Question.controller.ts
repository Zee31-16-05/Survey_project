import {createQuestion, getQuestion, deleteQuestion, updateQuestion} from "../services/Question.service"
import express, {Request,Response} from "express"



export async function createQuestionHandler(req: Request, res: Response){


    try{
        const createQuest = await createQuestion(req.body)
        console.log("createQustREsponse",createQuest)
        return res.json(createQuest)
    }
    catch(e){
        console.log("createQuestionHandlerError",e)
    }
}

export async function getQuestionHandler(req:Request, res:Response){

    try{
        const getquestHand = await getQuestion()
        console.log("getqustHnd",getquestHand)
        return res.json(getquestHand)
    }
    catch(e){
        console.log("getQuestionHandlerError",e)
    }
}

export async function deleteQuestionHandler(req:Request, res:Response){

    let _id : string = req.params.id

    try{
        const deletequestHand = await deleteQuestion(_id)
        console.log("deletequestHand", deletequestHand)
        return res.json(deletequestHand)
    }
    catch(e){
        console.log("deletequestion",e)
    }
}

export async function updateQuestionHandler(req: Request, res: Response){

    let _id : string = req.params.id
    let input : object = { 
        "question_type" : "mcqtqtqtqt",
        "question" : "what is your spicest food????",
        "options" : ["bheja fry","egg onion","fisher man"]
    }

    try{
        const updatequestHand = await updateQuestion(_id, input)
        console.log("updatequestHand", updatequestHand)
        return res.json(updatequestHand)
    }
    catch(e){
        console.log("updateQuestiohandErr0",e)
    }
}