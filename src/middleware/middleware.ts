
import express, {Request, Response} from 'express';
const router = express.Router();

import * as Customer_Route from "../routes/Customer.route"
import * as Question_Route from "../routes/Question.route"
import * as Answer_Route from "../routes/Answer.route"

import * as customer_controller from "../controllers/Customer.controller"
import * as Question_controller from "../controllers/Question.controller"
import * as Answer_controller from "../controllers/Answer.controller"

// router.use('/customer',Customer_Route.router)
let signUpMiddleware = (req : any, res : any, next:any):void => {
console.log("hello world from customer");
next();
}

export {signUpMiddleware}
