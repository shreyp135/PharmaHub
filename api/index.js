import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/user_route.js";
import authRoutes from "./routes/auth_route.js";
import paymentRoutes from "./routes/payment_route.js";

//.env file config
dotenv.config();

//database connection
mongoose.connect(process.env.MONGO_URL).then(() =>{
    console.log("Connected to MongoDB server successfully");
}).catch((err)=>{
    console.log(err);
});

//express app 
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());


//routes 
app.use("/", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api", paymentRoutes);


//error handling middleware
app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode,
    });
});


//server start
app.listen(8080,()=>{
    console.log("Server started on port 8080");
});
