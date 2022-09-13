import React from 'react'

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    
      <li className="nav-item active">
        <a className="nav-link" href="#">Live scores</a>
      </li>
      
      <li className="nav-item">
        <a className="nav-link" href="#">Schedule</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Archives</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          News
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
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Series
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Asia Cup 2022</a>
          <a className="dropdown-item" href="#">South Africa Tour of England, 2022</a>
          <a className="dropdown-item" href="#">New Zealand Tour of Australia, 2022</a>
          <a className="dropdown-item" href="#">New Zealand A Tour of India, 2022</a>
          <a className="dropdown-item" href="#">Carribean Premier League 2022</a>
          <a className="dropdown-item" href="#">All Series</a>
        </div> 
       </li>
       <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Teams
        </a>
       </li>
       <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Videos
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">All Videos</a>
          <a className="dropdown-item" href="#">Categories</a>
          <a className="dropdown-item" href="#">Rankings</a>
        </div>
       </li>
       <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Rankings
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">ICC Rankings -  Men</a>
          <a className="dropdown-item" href="#">ICC Rankings - Women</a>
        </div>
       </li>
       <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          More
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">World Test Championship</a>
          <a className="dropdown-item" href="#">World Cup Super League</a>
          <a className="dropdown-item" href="#">Quiz</a>
          <a className="dropdown-item" href="#">Photos</a>
          <a className="dropdown-item" href="#">Mobile Apps</a>
          <a className="dropdown-item" href="#">Careers</a>
          <a className="dropdown-item" href="#">Contact Us</a>
        </div> 
       </li>
      {/* <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li> */}
    </ul>
    {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button classNameName="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
  </div>
</nav>
    </>
  )
}
