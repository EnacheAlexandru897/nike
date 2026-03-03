import React from 'react'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import SportSwearIconList from './SportSwearIconList'
import sportSwearIcon from './sportSwearIcon.json'

const SportSwearIcon = () => {
  const createSportSwearIconList = (component) =>{
    return <SportSwearIconList 
      id = {component.id}
      key = {component.id}
      img = {component.img}
      name = {component.name}
      margin = {component.margin}
      mr = {component.mr}
    />
  }

  return (
    <div className='mt-10'>
      <div className=' flex items-center justify-between px-10 max-modf:px-7 max-modf1:px-3 pt-4'>
        <p className='text-[25px] font-medium pl-11 max-modf:pl-8 max-modf1:pl-5'>Shop Our Icons</p>

        <div className='flex space-x-3 max-modf3:hidden'>
          <div className='bg-gray-100 p-3 rounded-full'>
            <MdOutlineKeyboardArrowLeft size={25}/>
          </div>

          <div className='bg-gray-100 p-3 rounded-full'>
            <MdOutlineKeyboardArrowRight size={25}/>
          </div>
        </div>
     </div>


     <ul className='flex overflow-x-scroll py-8  '>
        {
          sportSwearIcon && sportSwearIcon.map(createSportSwearIconList)
        }
     </ul>
    </div>
  )
}

export default SportSwearIcon
