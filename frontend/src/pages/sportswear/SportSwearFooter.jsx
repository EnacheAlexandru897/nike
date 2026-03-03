import React from 'react'
import sportSwearFooter from './sportSwearFooter.json'
import SportSwearFooterList from './SportSwearFooterList'
const SportSwearFooter = () => {
  const createSportSwearFooterList = (component) =>{
    return <SportSwearFooterList 
      id = {component.id}
      key = {component.id}
      name = {component.name}
      text1 = {component.text1}
      text2 = {component.text2}
      text3 = {component.text3}
      text4 = {component.text4}
      margin = {component.margin}
    />
  }
  return (
    <div className='mt-19'>
      <ul className='flex justify-center'>
        {sportSwearFooter && sportSwearFooter.map(createSportSwearFooterList)}
      </ul>
    </div>
  )
}

export default SportSwearFooter
