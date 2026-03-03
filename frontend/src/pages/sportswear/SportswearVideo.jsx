import React from 'react'
import sportSwearVideoo from '../../assets/sportswear/videosportswar.mp4'
const SportswearVideo = () => {
  return (
    <div className='relative'>
      <video src={sportSwearVideoo} autoPlay muted loop></video>
    </div>
  )
}

export default SportswearVideo
