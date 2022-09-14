import React from 'react'
import '../App.css'
import img1 from '../images/ashwin-harshal-make-indias-t.jpg'
import img2 from '../images/englands-way-sends-south-afri.jpg'
import img3 from '../images/sydney-sixers-snap-up-sophie-e.jpg'
import img4 from '../images/natasha-mclean-sheneta-grimmo.jpg'

function Column2() {
  return (
    <div className='cb-col cb-col-47'>
        <div class="cb-col cb-hm-mid cb-bg-white cb-hmpage" >
            <div class="big-crd-main cb-bg-white cb-pos-rel">
                <div class="crd-cntxt">
                    <span>ICC MEN'S T20 WORLD CUP 2022</span>
                </div>
                <a title="Ashwin, Harshal make India's T20 World Cup squad"><img height="235" width="420" alt="Ashwin, Harshal make India's T20 World Cup squad" title="Ashwin, Harshal make India's T20 World Cup squad" itemprop="image" src={img1}/></a>
                <h2 class="big-crd-hdln big_heading">
                    <a title="Ashwin, Harshal make India's T20 World Cup squad">
                        Ashwin, Harshal make India's T20 World Cup squad
                    </a>
                </h2>
                <div class="cb-nws-intr">
                    Ravindra Jadeja officially ruled out following his knee surgery
                </div>
                <div class="big-crd-reltd-itm">
                    <a class="none_blue big-crd-rltd-txt" title="Namibia name squad with 3 World Cup debutants">
                        Namibia name squad with 3 World Cup debutants</a>
                </div>
            </div>
            <div class="big-crd-main cb-bg-white cb-pos-rel">
                <div class="crd-cntxt">
                    <span>ENGLAND V SA, 3RD TEST</span>
                </div>
                <a title="England's way sends South Africa limping home"><img height="235" width="420" alt="England's way sends South Africa limping home" title="England's way sends South Africa limping home" itemprop="image" src={img2}/></a>
                <h2 class="big-crd-hdln big_heading">
                    <a title="England's way sends South Africa limping home">	England's way sends South Africa limping home</a>
                </h2>
                <div class="cb-nws-intr">
                    Only three Tests played in England have been decided in fewer deliveries than the third Test at the Oval
                </div>
                <div class="big-crd-reltd-itm">
                    <a class="none_blue big-crd-rltd-txt" title="Thankful to have group of lads who understood the bigger picture - Stokes">
                        Thankful to have group of lads who understood the bigger picture - Stokes
                    </a>
                </div>
                <div class="big-crd-reltd-itm">
                    <a class="none_blue big-crd-rltd-txt" title="All done in 5.3 overs on fifth morning">
                        <span class="cb-pretag">Report / </span>All done in 5.3 overs on fifth morning
                    </a>
                </div>
            </div>
            <div class="sml-crd-main">
                <div class="crd-cntxt">NEW SIGNING</div>
                <div class="cb-col-33 cb-col">
                    <a  title="Sydney Sixers snap up Sophie Ecclestone">
                        <img height="75" width="135" class="ng-isolate-scope" alt="Sydney Sixers snap up Sophie Ecclestone" itemprop="image" src={img3}  image-loaded="true"/>
                    </a>
                </div>
                <div class="cb-col-67 cb-col cb-hdln-hght">
                    <h3 class="sml-crd-hdln small_heading">
                        <a title="Sydney Sixers snap up Sophie Ecclestone">Sydney Sixers snap up Sophie Ecclestone</a>
                    </h3>
                    <div class="sml-crd-subtxt">11h ago</div>
                </div>
                <div class="cb-nws-intr">
                    The World's No.1 bowler in T20Is will turn out for the team led by former England captain Charlotte Edwards
                </div>
            </div>
            <div class="sml-crd-main">
                <div class="crd-cntxt">WEST INDIES WOMEN SQUAD</div>
                <div class="cb-col-33 cb-col">
                    <a  title="Sydney Sixers snap up Sophie Ecclestone">
                        <img height="75" width="135" class="ng-isolate-scope" alt="Sydney Sixers snap up Sophie Ecclestone" itemprop="image" src={img4}  image-loaded="true"/>
                    </a>
                </div>
                <div class="cb-col-67 cb-col cb-hdln-hght">
                    <h3 class="sml-crd-hdln small_heading">
                        <a title="Natasha McLean, Sheneta Grimmond picked in WI's provisional squad for NZ ODIs">Natasha McLean, Sheneta Grimmond picked in WI's provisional squad for NZ ODIs</a>
                    </h3>
                    <div class="sml-crd-subtxt">8h ago</div>
                </div>
                <div class="cb-nws-intr">
                    Jannillea Glasgow, the left-arm pace bowler, has also made it into the squad
                </div>
            </div>
        </div>
    </div>
  )
}

export default Column2
