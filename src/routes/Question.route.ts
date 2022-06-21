import express, {Request, Response} from "express"
import * as QuestionController from "../controllers/Question.controller"

const router = express.Router();

router.post('/', function (req, res) {
    return QuestionController.createQuestionHandler(req, res)
})

router.get('/', function (req, res) {
    return QuestionController.getQuestionHandler(req,res);
})

router.delete('/:id', function (req, res) {
    return QuestionController.deleteQuestionHandler(req,res)
})

router.put('/:id', function (req, res) {
    return QuestionController.updateQuestionHandler(req,res)
})

export {router}