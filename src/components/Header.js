import React from 'react'
import img1 from '../images/cb_logo.svg'
import img2 from '../images/account.png'
import img3 from '../images/search.png'
import '../App.css'

function Header() {
  return (
    <nav class="cb-nav cb-col cb-col-100 ng-scope" >
        <a class="cb-hm-text cb-logo" title="Cricbuzz Logo" >
            <img  id="cb-logo-main-menu" itemprop="image" height="40" width="101" alt="Cricbuzz Logo" title="Cricbuzz Logo" src={img1}/>
        </a>
        <a class="none cb-hm-mnu-itm" title="Live Cricket Score">Live Scores</a>
        <a class="none cb-hm-mnu-itm" title="Live Cricket Score">Schedule</a>
        <a class="none cb-hm-mnu-itm" title="Live Cricket Score">Archives</a>
        <div class="cb-subnav cb-hm-mnu-itm feature-button cursor-pointer" id="newsDropDown" title="Cricket News">
            <a class="none text-white">News</a>
            <span class="cb-caret-down"></span>
            <nav class="cb-sub-navigation">
                <a class="cb-subnav-item" title="Latest Cricket News">All Stories</a>
                <a class="cb-subnav-item" title="Cricbuzz Plus Premium Articles">Cricbuzz Plus</a>
                <a class="cb-subnav-item" title="Latest Cricket News">Latest News</a>
                <a class="cb-subnav-item" title="Latest Cricket Topics">Topics</a>
                <a class="cb-subnav-item" title="Cricket Editorials and Specials">Spotlight</a>\
                <a class="cb-subnav-item" title="Latest Cricket Opinions &amp; Editorials">Opinions</a>
                <a class="cb-subnav-item" title="Latest Cricket Specials">Specials</a>
                <a class="cb-subnav-item" title="Latest Cricket Stats &amp; Analysis">Stats &amp; Analysis</a>
                <a class="cb-subnav-item" title="Latest Cricket Player Interviews">Interviews</a>
                <a class="cb-subnav-item" title="Latest Cricket Match live blogs">Live Blogs</a>
                <a class="cb-subnav-item" title="Articles and Videos by Harsha Bhogle">Harsha Bhogle</a>
            </nav>
        </div>
        <div class="cb-subnav cb-hm-mnu-itm feature-button cursor-pointer" id="seriesDropDown" title="Cricket Series">
            <a class="none text-white" >Series</a>
            <span class="cb-caret-down"></span>
            <nav class="cb-sub-navigation">
                <a class="cb-subnav-item" title="Asia Cup 2022">Asia Cup 2022</a>
                <a class="cb-subnav-item" title="South Africa tour of England, 2022">South Africa tour of England, 2022</a>
                <a class="cb-subnav-item" title="New Zealand tour of Australia, 2022">New Zealand tour of Australia, 2022</a>
                <a class="cb-subnav-item" title="New Zealand A tour of India, 2022">New Zealand A tour of India, 2022</a>
                <a class="cb-subnav-item" title="Caribbean Premier League 2022">Caribbean Premier League 2022</a>
                <a class="cb-subnav-item" title="Duleep Trophy 2022">Duleep Trophy 2022</a>
                <a class="cb-subnav-item" title="County Championship Division One 2022">County Championship Division One 2022</a>
                <a class="cb-subnav-item" title="India Women tour of England, 2022">India Women tour of England, 2022</a>
                <a class="cb-text-link cb-subnav-item">All Series »</a>
            </nav>
        </div>
        <div class="cb-subnav cb-hm-mnu-itm feature-button cursor-pointer" id="teamDropDown" title="Cricket Teams">
            <a class="none text-white">Teams</a>
            <span class="cb-caret-down"></span>
            <nav class="cb-sub-navigation cb-sub-lg">
                <div class="cb-sub-lg-outer">
                    <div class="cb-sub-lg-sec">
                        <h4 class="cb-sub-lg-sec-head">Test Teams</h4>
                        <a class="cb-subnav-item cb-sub-lg-sec-item" title="India Cricket Team">India</a>
                        <a class="cb-subnav-item cb-sub-lg-sec-item" title="Afghanistan Cricket Team">Afghanistan</a>
                        <a class="cb-subnav-item cb-sub-lg-sec-item" title="Ireland Cricket Team">Ireland</a>
                        <a class="cb-subnav-item cb-sub-lg-sec-item" title="Pakistan Cricket Team">Pakistan</a>
                        <a class="cb-subnav-item cb-sub-lg-sec-item" title="Australia Cricket Team">Australia</a>
                        <a class="cb-subnav-item cb-sub-lg-sec-item" title="Sri Lanka Cricket Team">Sri Lanka</a>
                        <a class="cb-subnav-item cb-sub-lg-sec-item" title="Bangladesh Cricket Team">Bangladesh</a>
                        <a class="cb-subnav-item cb-sub-lg-sec-item" title="England Cricket Team">England</a>
                        <a class="cb-subnav-item cb-sub-lg-sec-item" title="West Indies Cricket Team">West Indies</a>
                        <a class="cb-subnav-item cb-sub-lg-sec-item" title="South Africa Cricket Team">South Africa</a>
                        <a class="cb-subnav-item cb-sub-lg-sec-item" title="Zimbabwe Cricket Team">Zimbabwe</a>
                        <a class="cb-subnav-item cb-sub-lg-sec-item" title="New Zealand Cricket Team">New Zealand</a>
                    </div>
                    <div class="cb-sub-lg-sec">
                        <h4 class="cb-sub-lg-sec-head">Associate</h4>
                        <a class="cb-subnav-item cb-sub-lg-sec-item" title="Malaysia Cricket Team">Malaysia</a>
                        <a class="cb-subnav-item cb-sub-lg-sec-item" title="Nepal Cricket Team">Nepal</a>
                        <a class="cb-subnav-item cb-sub-lg-sec-item" title="Germany Cricket Team">Germany</a>
                        <a class="cb-subnav-item cb-sub-lg-sec-item" title="Namibia Cricket Team">Namibia</a>
                        <a class="cb-subnav-item cb-sub-lg-sec-item" title="Denmark Cricket Team">Denmark</a>
                        <a class="cb-subnav-item cb-sub-lg-sec-item" title="Singapore Cricket Team">Singapore</a>
                        <a class="cb-subnav-item cb-sub-lg-sec-item" title="Papua New Guinea Cricket Team">Papua New Guinea</a>
                        <a class="cb-subnav-item cb-sub-lg-sec-item" title="Kuwait Cricket Team">Kuwait</a>
                        <a class="cb-subnav-item cb-sub-lg-sec-item" title="Vanuatu Cricket Team">Vanuatu</a>
                        <a class="cb-subnav-item cb-sub-lg-sec-item" title="Jersey Cricket Team">Jersey</a>
                        <a class="cb-subnav-item cb-sub-lg-sec-item" title="Oman Cricket Team">Oman</a>
                        <a class="cb-subnav-item cb-sub-lg-sec-item" title="Fiji Cricket Team">Fiji</a>
                    </div>
                </div>
                <a target="_self" href="/cricket-team" class="cb-sub-lg-more">More...</a>
            </nav>
        </div>
        <div class="cb-subnav cb-hm-mnu-itm feature-button cursor-pointer" id="videosDropDown" title="Cricket Videos">
            <a class="none text-white">Videos</a>
            <span class="cb-caret-down"></span>
            <nav class="cb-sub-navigation">
                <a target="_self" title="All Cricket Videos">All Videos</a>
                <a target="_self" class="cb-subnav-item" title="Cricket Videos Categories">Categories</a>
                <a target="_self" class="cb-subnav-item" title="Cricket Videos Playlists">Playlists</a>
            </nav>
        </div>
        <div class="cb-subnav cb-hm-mnu-itm feature-button cursor-pointer" id="rankingDropDown" title="ICC Rankings">
            <a class="none text-white">Rankings</a>
            <span class="cb-caret-down"></span>
            <nav class="cb-sub-navigation">
                <a class="cb-subnav-item" target="_self" title="ICC Rankings Men">ICC Rankings - Men</a>
                <a class="cb-subnav-item" target="_self" title="ICC Rankings Women">ICC Rankings - Women</a>
            </nav>
        </div>
        <div class="cb-subnav cb-hm-mnu-itm feature-button cursor-pointer">More<span class="cb-caret-down"></span>
            <nav class="cb-sub-navigation" >
                <a class="cb-subnav-item" title="World Test Championship">World Test Championship</a>
                <a class="cb-subnav-item" title="World Cup Super League">World Cup Super League</a>
                <a class="cb-subnav-item" title="Cricket Quiz">Quiz</a>
                <a class="cb-subnav-item" title="Photo Gallery">Photos</a>
                <a class="cb-subnav-item" title="Mobile Apps">Mobile Apps</a>
                <a class="cb-subnav-item" title="Careers">Careers</a>
                <a class="cb-subnav-item" title="Contact Us">Contact Us</a>
            </nav>
        </div>
        <a class="none_gray cb-plus-menu-button cb-text-gray"> Cricbuzz Plus </a>
        <a className="search" title="Search" >
            <img  itemprop="image" height="28"  alt="Search" title="Search" src={img3}/>
        </a>
        <a className="login" title="Login" >
            <img  itemprop="image" height="30"  alt="Account" title="Account" src={img2}/>
        </a>
    </nav>
  )
}

export default Header
