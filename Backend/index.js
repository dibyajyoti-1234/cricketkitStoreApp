import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
const app = express()
import kitRoute from "./route/kit.route.js"
import userRoute from "./route/user.route.js"
import cors from"cors"
app.use(cors());
dotenv.config();
app.use(express.json());

const PORT=process.env.PORT || 4000;
const URI=process.env.MongoDBURI;
try {
  mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
  });
  console.log("connected to mongodb")
} catch (error) {
  console.log("error :",error)
  
}
//defining routes

app.use("/kit",kitRoute);
app.use("/user",userRoute)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})