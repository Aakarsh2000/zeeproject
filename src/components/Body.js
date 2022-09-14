import React from 'react'
import Column1 from './Column1'
import Column2 from './Column2'
import Column3 from './Column3'
import Navbar from './Navbar'
import Navbar2 from './Navbar2'
import '../App.css'
import Featured_matches from './Featured_matches'
import Header from './Header'

function Body() {
  return (
    <div className='Body'>
        <Header/>
        {/* <Navbar/> */}
        {/* <Navbar2/> */}
        {/* <Featured_matches/> */}
        <Column1/>
        <Column2/>
        <Column3/>
    </div>
  )
}

export default Body
