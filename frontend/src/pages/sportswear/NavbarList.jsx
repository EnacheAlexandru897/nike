import React from 'react'
import { Link } from 'react-router-dom'

const NavbarList = (props) => {
  return (
    <Link key={props.id} className={`hover:text-gray-500  transition duration-300 ${props.pr}`}>{props.name}</Link>
  )
}

export default NavbarList
