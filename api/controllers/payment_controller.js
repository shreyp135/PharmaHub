import { instance } from "../utils/razorpay.js";

export const checkout = async (req,res,next) =>{
    
    const options = {
        amount: Number(req.body.amount * 100),  // amount in the smallest currency unit
        currency: "INR",
      };
        const order = await instance.orders.create(options);
        // res.redirect("http://localhost:5173");
        res.status(200).json({
            success: true,
            order,
        });
        
};

export const paymentVerification = async (req,res,next)=>{

};