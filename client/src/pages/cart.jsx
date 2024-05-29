import React from 'react'

export default function Cart() {
    const handleCheckout = async (req,res,next)=>{
            
    };
  return (
    <div>
        <h1>cart</h1>
        <button onClick={handleCheckout}>checkout</button>
    </div>
  )
}
