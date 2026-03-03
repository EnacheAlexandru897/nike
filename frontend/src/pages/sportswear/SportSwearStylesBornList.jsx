import React from 'react'
import { Link } from 'react-router-dom'

const SportSwearStylesBornList = (props) => {
  return (
    
      <li className={`shrink-0 w-[30.25%] max-modf:w-[75%] relative ${props.margin} ${props.mr}`}>
        <img className='w-full object-cover' src={props.img} alt="" />

        <div className='absolute left-12 bottom-12 bg-white px-4 py-1.5 rounded-full hover:bg-gray-300 transition duration-200 font-medium
        max-modf:left-5 max-modf:bottom-6
        '>
          <Link>{props.button}</Link>
        </div>
      </li>
    
  )
}

export default SportSwearStylesBornList
