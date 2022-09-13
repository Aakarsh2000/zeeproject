import React from 'react'
import '../App.css'
import Featured_videos from './Column3_components/Featured_videos'
import Specials from './Column3_components/Specials'

function Column3() {
  return (
    <div className='cb-col cb-col-33'>
      <Featured_videos/>
      <Specials/>
    </div>
  )
}

export default Column3
