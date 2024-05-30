import razorpay from "razorpay";
import dotenv from "dotenv";

//.env file config
dotenv.config();

export const instance = new razorpay({
        key_id: process.env.RAZORPAY_API_KEY,
        key_secret: process.env.RAZORPAY_API_SECRET,

});