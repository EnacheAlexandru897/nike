import React from 'react'
import { FiMinus } from "react-icons/fi";


const CartSummary = () => {
  return (
    <div className='modf:w-2/6  modf:pl-3.75'>
      <p className='font-medium text-[24.5px]'>Summary</p>

      <div className='flex justify-between items-center mt-7 text-[17px]'>
        <p>Subtotal</p>
        <p className=''><FiMinus /></p>
      </div>

      <div className='flex justify-between mt-2.5 pb-4 text-[17px] border-b-1 border-b-gray-200'>
        <p>Estimated Delivery & Handling</p>
        <p>Free</p>
      </div>
      
      <div className='flex justify-between  py-4 text-[17px] border-b-1 border-b-gray-200'>
        <p>Total</p>
        <p><FiMinus /></p>
      </div>

      <div className='space-y-3 pt-6 text-[17px]'> 
        <button className='bg-neutral-300/60 text-neutral-400/50 font-medium w-full rounded-full py-4.5'>Guest Checkout</button>
        <button className='bg-neutral-300/60 text-neutral-400/50 font-medium w-full rounded-full py-4.5'>Member Checkout</button>
      </div>
    </div>
  )
}

export default CartSummary
