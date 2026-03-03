import React from 'react'
import { Link } from 'react-router-dom'

const NavbarList = (props) => {
  return (
    <li key={props.id}>
      <Link className='relative before:absolute before:border before:w-full before:-bottom-1 before:h-0.5 before:bg-black before:rounded-full before:invisible
            hover:before:visible
            
    ' to={`/${props.link}`}>{props.name}</Link>
    </li>
    
  )
}

export default NavbarList
