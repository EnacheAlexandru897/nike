import React from 'react'
import { Link } from 'react-router-dom'

const SportSwearFooterList = (props) => {
  return (
    <li className={`${props.margin}`}>
      <p className='font-medium text-[20px] mb-6'>{props.name}</p>

      <div className='flex flex-col text-gray-600 text-[18px] space-y-3'>
        <Link className=' hover:text-black'>{props.text1}</Link>
        <Link className='hover:text-black'>{props.text2}</Link>
        <Link className='hover:text-black'>{props.text3}</Link>
        <Link className='hover:text-black'>{props.text4}</Link>
      </div>
    </li>
  )
}

export default SportSwearFooterList
