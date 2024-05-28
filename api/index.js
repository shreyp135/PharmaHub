import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user_route.js";
import authRoutes from "./routes/auth_route.js"

//.env file config
dotenv.config();

//express app 
const app = express();
app.use(express.json());

//database connection
mongoose.connect(process.env.MONGO_URL).then(() =>{
    console.log("Connected to MongoDB server successfully");
}).catch((err)=>{
    console.log(err);
});


//server start
app.listen(8080,()=>{
    console.log("Server started on port 8080");
});

app.use("/", userRoutes);
app.use("/api/auth", authRoutes);