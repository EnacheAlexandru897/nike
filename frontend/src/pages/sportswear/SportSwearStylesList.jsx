import React from 'react'
import { Link } from 'react-router-dom'
import { CgEye } from 'react-icons/cg';

const SportSwearStylesList = (props) => {
  return (
    <li className={`shrink-0 w-[30.50%] max-modf:w-[75%] relative ${props.margin} ${props.mr}`}>
      <img className='w-full object-cover' src={props.img} alt="" />

      <div className=' absolute left-12 bottom-12 flex text-white flex-col space-y-6
      max-modf:left-6 max-modf:bottom-6
      '>
        <p className='text-[22px]'>{props.name}</p>
         <div>
          <button className='flex items-center bg-white text-black rounded-full px-3.5 text-[17px] font-medium py-1.25 
          hover:bg-gray-300 cursor-pointer transition duration-100
          '>
            <CgEye className='text-[20px] mt-0.5'/>
            <p className='ml-2'>Shop the Look</p>
          </button>
        </div>
        
      </div>
    </li>
  )
}

export default SportSwearStylesList
