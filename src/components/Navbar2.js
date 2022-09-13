import React from 'react'

export default function Navbar2() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    
      <li className="nav-item active">
        <a className="nav-link" href="/livescore">Matches</a>
      </li>
      
      <li className="nav-item">
        <a className="nav-link" href="#">SL vs PAK - SL Won</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">RSA vs ENG -ENG Won</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">ENGL vs SLL - Preview</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">ENGW vs INDW - Preview</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          All
          </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">All Stories</a>
          <a className="dropdown-item" href="#">Cricbuzz Plus</a>
          <a className="dropdown-item" href="#">Latest News</a>
          <a className="dropdown-item" href="#">Topics</a>
          <a className="dropdown-item" href="#">Spotlight</a>
          <a className="dropdown-item" href="#">Opinions</a>
          <a className="dropdown-item" href="#">Specials</a>
          <a className="dropdown-item" href="#">Stats and Analysis</a>
          <a className="dropdown-item" href="#">Interviews</a>
          <a className="dropdown-item" href="#">Live Blogs</a>
          <a className="dropdown-item" href="#">Harsha Bhogle</a>
        </div> 
      </li>
      
       
    </ul>
  </div>
</nav>
    </div>
  )
}
