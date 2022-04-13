import express from 'express';
import mongoose,{ConnectOptions} from 'mongoose';
import * as CustomerRoute from "./routes/Customer.route"
const app = express();
const PORT = 8081;
const Hostname = 'localhost';
const URL = `mongodb://${Hostname}:27017/survey_submission`
app.use(express.json())

app.use('/customer',CustomerRoute.router)

mongoose.connect(URL)
.then(()=> console.log("Successfully connected to the database"))
.catch(()=> console.log("Failed connection to the database"))


app.listen(PORT,()=>{
    console.log(`listening on ${Hostname}: ${PORT}`);
})