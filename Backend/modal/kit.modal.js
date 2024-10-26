 import mongoose from "mongoose"
 const kits=mongoose.Schema({
    name:String,
    price:Number,
    offer:String,
    category:String,
    image:String
 })

 const cricket=mongoose.model("KITS",kits);

 export default cricket;