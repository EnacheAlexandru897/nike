import React from 'react'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import SportSwearStylesList from './SportSwearStylesList'
import sportSwearStles from './sportSwearStyles.json'
const SportSwearStyles = () => {

  const createSportSwearStylesList = (component) =>{
    return <SportSwearStylesList 
      id = {component.id}
      key = {component.id}
      img = {component.img}
      name = {component.name}
      margin = {component.margin}
      mr = {component.mr}
    />
  }
  return (
    <div className='max-w-screen-2xl mx-auto  py-14'>
      <div className=' flex items-center justify-between px-10 max-modf:px-7 max-modf1:x-3'>
          <p className='text-[25px] font-medium pl-11'>Style Your Shox</p>
  
          <div className='flex space-x-3 max-modf3:hidden'>
            <div className='bg-gray-100 p-3 rounded-full'>
              <MdOutlineKeyboardArrowLeft size={25}/>
            </div>
  
            <div className='bg-gray-100 p-3 rounded-full'>
              <MdOutlineKeyboardArrowRight size={25}/>
            </div>
          </div>
      </div>

      <ul className='overflow-x-scroll flex py-8'>
        {sportSwearStles && sportSwearStles.map(createSportSwearStylesList)}
      </ul>
    </div>
  )
}

export default SportSwearStyles
