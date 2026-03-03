import React from 'react'
import SportSwearTrendingList from './SportSwearTrendingList'
import sportSwearTrending from './sportSwearTrending.json'

const SportSwearTrending = () => {
  
  const createSportSwearTrendingList = (component) =>{
    return <SportSwearTrendingList 
      id = {component.id}
      key = {component.id}
      img = {component.img}
      info = {component.info}
      name = {component.name}
      button = {component.button}
    />
  }

  return (
    <div className=''>
      <p className='text-[24px] font-medium max-w-screen-2xl mx-auto px-13 max-modf:px-8 max-modf1:px-5'>Trending Now</p>
      <ul className='mt-5 grid grid-cols-2 gap-3 max-modf3:grid-cols-1 max-modf3:gap-2'>
        {
          sportSwearTrending && sportSwearTrending.map(createSportSwearTrendingList)
        }
      </ul>
    </div>
  )
}

export default SportSwearTrending
