import mongoose from "mongoose";
const userSchema=mongoose.Schema({
    FullName:{
        type:String,
        required:true
    },
    Emailid:{
        type:String,
        required:true,
        unique:true
    },
    password:
    {
        type:String,
        required:true
    },
   

})

const User=mongoose.model("User",userSchema);
export default User;
