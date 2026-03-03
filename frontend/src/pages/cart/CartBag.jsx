import React from 'react'
import { FiMinus } from "react-icons/fi";
const CartBag = () => {
  return (
    <div className=''>
      <div className='max-modf:flex max-modf:flex-col max-modf:text-center pb-8'>
        <p className='font-medium text-[24.5px]'>Bag</p>
        <div className='flex items-center justify-center modf:hidden'>
          <p className='relative after:absolute after:h-4 after:justify-center after:bottom-0.5 after:-right-1 after:w-0.25 after:bg-black'>0 items</p>
          <FiMinus  className='ml-2 mt-1'/>
        </div>
      </div>
      <div className='modf:pl-2 max-modf:border-t-1 max-modf:border-t-gray-200 max-modf:pt-4'>
        <p className='text-[17px]'>There are no items in your bag.</p>
      </div>
    </div>
  )
}

export default CartBag
