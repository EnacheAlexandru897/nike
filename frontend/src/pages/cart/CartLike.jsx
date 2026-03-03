import React from 'react'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import cartLike from './cartLike.json'
import CartLikeList from './CartLikeList'

const CartLike = () => {

  const createCartLikeList = (component) =>{
    return <CartLikeList 
      id = {component.id}
      key = {component.id}
      img = {component.img}
      name = {component.name}
      tipe = {component.tipe}
      initialPrice = {component.initialPrice}
      price = {component.price}
    />
  }
  
  return (
    <div className='max-w-screen-2xl mx-auto py-5'>
      <div className='flex justify-between items-center w-full px-13 max-modf:px-8 max-modf1:px-5'>
        <div>
          <p className='text-[25px] font-medium'>You Might Also Like</p>
        </div>
        <div className='max-modf1:hidden flex items-center space-x-3'>
        
          <div className='bg-gray-100 p-3 rounded-full'>
            <MdOutlineKeyboardArrowLeft size={25}/>
          </div>

          <div className='bg-gray-200 p-3 rounded-full hover:bg-gray-400/40 cursor-pointer'>
            <MdOutlineKeyboardArrowRight size={25}/>
          </div>
        </div>
      </div>

      <div className="overflow-x-scroll pt-10 pb-5">
        <ul className='flex space-x-3 px-13 max-modf:px-8 max-modf1:px-5'>
          
          {
            cartLike && cartLike.map(createCartLikeList)
          }
          
        </ul>
      </div>
      
    </div>
  )
}

export default CartLike
