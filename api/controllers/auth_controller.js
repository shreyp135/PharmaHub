import User from "../models/user_model.js"
import { errorHandler } from "../utils/errorHandler.js";
import jwt from "jsonwebtoken";

export const signup = async (req,res,next)=>{
    try{
    const {email, password} =  req.body;
    const newUser = new User;
    newUser.email = email;
    newUser.password = password;
    await newUser.save();
        console.log("User saved to database");
    } catch (err){
    next(err);
    }
};


export const signin = async (req,res,next)=>{
    try{
        const {email, password} =  req.body;
        const currUser = await User.findOne({email});
        if (!currUser) 
            return next(errorHandler(152,"User not found"));
        const isUser = (currUser.password === password);
        if(!isUser) 
            return next(errorHandler(153,"Wrong credentials"));
        console.log("successs");
        const token  = jwt.sign({ id: currUser._id }, process.env.JWT_SECRET);
        const {password: pass, ...cred} = currUser._doc;
        const expiryDate = new Date(Date.now() + 259200000)//expiry after 3 days
        res.cookie("access_token", token, {httpOnly: true, expires: expiryDate}).status(200).json(cred);//creating a cookie
    }   catch (err){
        next(err);
        }

};