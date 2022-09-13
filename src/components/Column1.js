import React from 'react'
import '../App.css'
import Latest_news from './Column1_components/Latest_news'
import Latest_photos from './Column1_components/Latest_photos'

function Column1() {
  return (
    <div className='cb-col cb-col-20'>
        <Latest_news/>
        <Latest_photos/>
    </div>
  )
}

export default Column1
