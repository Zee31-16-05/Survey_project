import {createAnswer, getAnswer} from "../services/Answer.service";
import express, {Request, Response} from "express";

export async function createAnswerHandler(req:Request, res:Response){

    try{
        const createAnswerRecord = await createAnswer(req.body);
        console.log("createAnswerRecord",createAnswerRecord)
        return res.json(createAnswerRecord)

    }
    catch(e){
        console.log("")
    }
}

export async function getAnswerHandler(req:Request, res:Response){

    try{
        const getAnswerRecord = await getAnswer();
        console.log("getAnswerRecord",getAnswerRecord)
        res.json(getAnswerRecord)
    }
    catch(e){
        console.log("hellogetanserhandler",e)
    }
}