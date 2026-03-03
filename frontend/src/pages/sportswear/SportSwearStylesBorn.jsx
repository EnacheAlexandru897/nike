import React from 'react'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import SportSwearStylesBornList from './SportSwearStylesBornList'
import sportSwearStylesBorn from './sportSwearStylesBorn.json'
const SportSwearStylesBorn = () => {

  const createSportSwearStylesBornList = (component) =>{
    return <SportSwearStylesBornList 
      id = {component.id}
      key = {component.id}
      img = {component.img}
      button = {component.button}
      margin = {component.margin}
      mr = {component.mr}
    />
  }

  return (
    <div className='mt-15'>
      <div className=' flex items-center justify-between px-10 max-modf:px-7 max-modf1:x-3'>
        <p className='text-[25px] font-medium pl-11'>Born to Perform. Evolved for Everyday.</p>

        <div className='flex space-x-3 max-modf3:hidden'>
          <div className='bg-gray-100 p-3 rounded-full'>
            <MdOutlineKeyboardArrowLeft size={25}/>
          </div>

          <div className='bg-gray-100 p-3 rounded-full'>
            <MdOutlineKeyboardArrowRight size={25}/>
          </div>
        </div>
      </div>


    <ul className='flex overflow-x-scroll py-8'>
      {
        sportSwearStylesBorn && sportSwearStylesBorn.map(createSportSwearStylesBornList)
      }
    </ul>

    </div>
  )
}

export default SportSwearStylesBorn
