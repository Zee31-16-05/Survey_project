import express from 'express';
import mongoose,{ConnectOptions} from 'mongoose';

import * as CustomerRoute from "./routes/Customer.route"
import * as QuestionRoute from "./routes/Question.route"
import * as AnswerRoute from "./routes/Answer.route"
import * as signUp_middleware from "./middleware/middleware"

const app = express();
const PORT = 8081;
const Hostname = 'localhost';
const URL = `mongodb://${Hostname}:27017/survey_submission`
app.use(express.json())

app.use('/customer',CustomerRoute.router)
app.use('/question',QuestionRoute.router)
app.use('/answer',AnswerRoute.router)

mongoose.connect(URL)
.then(()=> console.log("Successfully connected to the database"))
.catch(()=> console.log("Failed connection to the database"))


app.listen(PORT,()=>{
    console.log(`listening on ${Hostname}: ${PORT}`);
})