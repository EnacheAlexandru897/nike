import React from 'react'

const CartLikeList = (props) => {
  return (
    
    <li key={props.id} className='w-[33%] max-modf:w-[70%] shrink-0'>
      <img className='object-cover w-full rounded-lg' src={props.img} alt="" />
      <p className='font-medium text-[17px] pt-3'>{props.name}</p>
      <p className='text-gray-500 text-[17px]'>{props.tipe}</p>
      <p className='font-medium text-[17px] pt-1.5'>RON {props.price}</p>
      <p className='text-gray-400 text-[17px] line-through font-medium'>{props.initialPrice}</p>
      
    </li>
  )
}

export default CartLikeList
