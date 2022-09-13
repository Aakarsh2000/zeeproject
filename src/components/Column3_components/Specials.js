import React from 'react'
import img1 from '../../images/an-arrest-warrant-has-been-iss.jpg'
import img2 from '../../images/stars-jaw-dropping-bid-estim.jpg'
import img3 from '../../images/trent-boult-asked-to-be-releas.jpg'


function Specials() {
  return (
    <div class="cb-col cb-col-100 cb-hm-rt-itm cb-bg-white">
        <div class="cb-col cb-col-100 cb-mid-wrp cb-pos-rel">
            <a title="September 2022 - News Digest">
                <img class="cb-vid-img ng-isolate-scope" alt="September 2022 - News Digest" src={img1} height="170" width="303" image-loaded="true"/>
                <h4 class="text-hvr-underline heading">September 2022 - News Digest</h4>
            </a>
            <div class="cb-nws-intr">
                News byte that you may have otherwise missed
            </div>
        </div>
        <div class="cb-col cb-col-100 cb-mid-wrp cb-pos-rel">
            <a title="Making sense of Star's multibillion-dollar splurge">
                <img class="cb-vid-img ng-isolate-scope" alt="Making sense of Star's multibillion-dollar splurge" src={img2} height="170" width="303" image-loaded="true"/>
                <h4 class="text-hvr-underline heading">Making sense of Star's multibillion-dollar splurge</h4>
            </a>
            <div class="cb-nws-intr">
                The Walt Disney-owned media house wiped the opposition out with a jaw-dropping bid estimated at $3.125 billion
            </div>
        </div>
        <div class="cb-col cb-col-100 cb-mid-wrp cb-pos-rel">
            <a title="Cricket in Transition: A new game in the birth canal">
                <img class="cb-vid-img ng-isolate-scope" alt="Cricket in Transition: A new game in the birth canal" src={img3} height="170" width="303" image-loaded="true"/>
                <h4 class="text-hvr-underline heading">Cricket in Transition: A new game in the birth canal</h4>
            </a>
            <div class="cb-nws-intr">
                In the first part of a new feature series on Cricbuzz Plus, Bharat Sundaresan outlines the rapid changes that cricket is going through and poses questions about its future</div>
                <div class="cb-plus-icon-flex-box cb-plus-flex-mdm-crd">
                    <span class="cb-plus-ico cb-ico-premium"></span>
                    <div class="cb-plus-free-tag">Free</div>
                </div>
        </div>
    </div>
  )
}

export default Specials
