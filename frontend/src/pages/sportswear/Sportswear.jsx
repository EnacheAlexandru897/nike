import React from 'react'
import { Link } from 'react-router-dom'
import Change from './Change'
import Navbar from './Navbar'
import SportswearVideo from './SportswearVideo'
import SportSwearStyles from './SportSwearStyles'
import SportSwearStylesBorn from './SportSwearStylesBorn'
import SportSwearIcon from './SportSwearIcon'
import SportSwearTrending from './SportSwearTrending'
import SportSwearFooter from './SportSwearFooter'

const Sportswear = () => {
  
  return (
    <div>
      <title>Nike Sportswear (NSW). Nike RO</title>
      <Change />
      <Navbar />
      <SportswearVideo />
      <SportSwearStyles />
      <SportSwearTrending />
      <SportSwearStylesBorn />
      <SportSwearIcon />
      *<SportSwearFooter />
    </div>
  )
}

export default Sportswear
