import User from "../models/user_model.js";

export const signup = async (req,res)=>{
    const {email, password} =  req.body;
    const newUser = new User;
    newUser.email = email;
    newUser.password = password;
    try{
    await newUser.save();
    res.status(201).json({message: "User created successfully"});
    } catch (err){
    res.status(151).json(err.message);
    }
};
