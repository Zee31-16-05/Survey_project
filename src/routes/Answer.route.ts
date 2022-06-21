import express, {Request, Response} from "express"
import * as AnswerController from "../controllers/Answer.controller"
const router = express.Router();

router.post('/', function(req, res){
    return AnswerController.createAnswerHandler(req, res)
})

router.get('/', function(req, res){
    return AnswerController.getAnswerHandler(req, res)
})

export {router}
