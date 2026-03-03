import React from 'react'
import CartBag from './CartBag'
import CartSummary from './CartSummary'
import { Link } from 'react-router-dom'
const CartBagSummary = () => {

  let linkCss = 'relative text-neutral-500 font-[500] after:w-full after:absolute after:h-0.5 after:left-0 after:-bottom-0.75 after:bg-neutral-500';

  return (
    <div className='max-w-screen-2xl mx-auto modf:px-23 max-modf:px-8 max-modf1:px-5   py-10'>
      <div className='modf:flex modf:justify-between '>
        <CartBag />
        <CartSummary />
      </div>

      <div className='pt-10'>
        <p className='font-medium text-[24.5px]'>Favorites</p>
        <p className='text-[17px]'>Want to view your favorites? <Link className={`${linkCss}`}>Join us</Link> or <Link className={`${linkCss}`}>Sign in</Link></p>
      </div>
    </div>
  )
}

export default CartBagSummary
