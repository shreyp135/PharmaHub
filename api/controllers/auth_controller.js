import User from "../models/user_model.js"


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
