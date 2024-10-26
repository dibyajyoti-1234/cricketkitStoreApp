import User from "../modal/user.model.js";
import bcryptjs from "bcryptjs";

export const signup=async (req,res)=>{
    try {
        const{FullName,Emailid,password}=req.body;
        const user=await User.findOne({Emailid});
        if(user)
        {
            return res.status(400).json({message:"User already exists"})
        }
        const hashPassword=await bcryptjs.hash(password,10)
        const createduser=new User({
            FullName:FullName,
            Emailid:Emailid,
            password:hashPassword,



        });
        await createduser.save();
        res.status(201).json({message:"User created successfully"});
    } catch (error) {
        console.log("error :",error);
        res.status(500).json({message:"Internal server error"});
    }
};


export const login=async (req,res)=>{
    try {
        const {Emailid,password}=req.body;
        const user=await User.findOne({Emailid});
        const isMatch=await bcryptjs.compare(password,user.password) //user.name mane jeta database a ache
        if(!user||!isMatch)
        {
           return res.status(400).json({message:"Invalid username or password"});
        }
        else
        {
            res.status(200).json({message:"Login successful",user:{
                _id:user._id,
                FullName:user.FullName,
                Emailid:user.Emailid
            }});
        }

    } catch (error) {
        console.log("error :"+error.message);
        res.status(500).json({message:"Internal server error"});

        
    }
};