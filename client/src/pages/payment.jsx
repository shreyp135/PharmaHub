import React from 'react';
import axios from "axios";

export default function Payment() {
    const handleCheckout = async ()=>{
        const amount = 500;
        const {data:{order}} = await axios.post("http://localhost:8080/api/checkout",{
            amount,
        })
        const options = {
            key: import.meta.env.VITE_RAZORPAY_API_KEY, // Enter the Key ID generated from the Dashboard
            amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: "PharmaHub",
            description: "Transaction",
            image: <i class="fa-solid fa-stethoscope "></i>,
            order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            callback_url: "http://localhost:8080/api/paymentVerification",
            prefill: {
                name: "",
                email: "pharmahub@example.com",
                contact: "9000090000"
            },
            notes: {
                address: "Razorpay Corporate Office"
            },
            theme: {
                "color": "#1f9c61"
            }
        };
       const razor = new window.Razorpay(options);
        razor.open();
           
    };

    
  return (
    <div>
        <h1>cart</h1>
        <button onClick={handleCheckout}>checkout</button>
    </div>
  )
}
