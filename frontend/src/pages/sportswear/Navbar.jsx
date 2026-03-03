import React from 'react'
import { Link } from 'react-router-dom'
import navbar from './navbar.json'
import NavbarList from './NavbarList'

const Navbar = () => {

  const createNavbarList = (component) =>{
    return <NavbarList
    id = {component.id}
    key = {component.id}
    name = {component.name}
    pr = {component.pr} />
  }

  return (
    <div className=' flex items-center relative max-modf:flex-col  max-modf:py-6'>
      <div className='max-w-screen-2xl mx-auto px-13 max-modf:px-8 max-modf1:px-5 modf:py-8 w-[100%] max-modf:pb-4'>
        <p className='font-medium text-[17.5px] max-modf:text-[24px]'>Sportswear</p>
      </div>
      <div className='text-[17.5px]  flex  w-[100%] modf:absolute  font-medium modf:justify-center
      max-modf:max-w-screen-2xl max-modf:mx-auto
      max-modf:px-8 max-modf1:px-5
      '>
        
        {
          navbar && navbar.map(createNavbarList)
        }

        {
          /*
          <Link className='hover:text-gray-500  transition duration-300 pr-8'>Men</Link>
          <Link className='hover:text-gray-500  transition duration-300 pr-8'>Women</Link>
          <Link className='hover:text-gray-500  transition duration-300 pr-8'>Shoes</Link>
          <Link className='hover:text-gray-500  transition duration-300'>Clothing</Link> */
        }
        
      </div>
    </div>
  )
}

export default Navbar
