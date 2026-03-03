import React from 'react'
import { Link } from 'react-router-dom'

const SportSwearIconList = (props) => {
  return (
    <li className={`shrink-0 w-[25%] max-modf:w-[70%] ${props.margin} ${props.mr} py-25   relative`}>
      <img className='w-full object-cover' src={props.img} alt="" />

      <div className='absolute text-center w-full bottom-5'>
        <div className=''>
          <Link className='bg-black text-white px-4 py-2 rounded-full font-medium
          hover:bg-gray-500 transition duration-200
          '>{props.name}</Link>
        </div>
      </div>
    </li>
  )
}

export default SportSwearIconList
