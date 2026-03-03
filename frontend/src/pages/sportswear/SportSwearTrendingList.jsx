import React from 'react'

const SportSwearTrendingList = (props) => {
  return (
    <li className='relative'>
      <img className='w-full max-modf:h-[370px] object-cover max-modf3:h-full
      ' src={props.img} alt="" />

      <div className='absolute text-white bottom-12 left-12.5
      max-modf:left-6 max-modf:bottom-6
      ' >
        <p className='mb-1.5 font-medium text-[17px]'>{props.info}</p>
        <p className='mb-5 font-medium text-[24px]'>{props.name}</p>
        <button className='font-medium bg-white px-4.25 py-1.5 rounded-full text-black cursor-pointer
        hover:bg-gray-300 transition
         duration-200
        '>{props.button}</button>
      </div>
    </li>
  )
}

export default SportSwearTrendingList
