import React from 'react'
import img1 from '../images/view_prev.png'
import img2 from '../images/view_next.png'

function Featured_matches() {
  return (
    <div class="cb-col cb-col-100">
        <div id="match_menu_container" class="cb-col cb-col-100 html-refresh ng-isolate-scope" timeout="45000">
            <div class="cb-col cb-col-100 cb-hm-rt-itm cb-bg-white ng-scope">
                <div class="cb-cat-head-wrap cb-col cb-col-100 cb-float-none">
                    <div class="cb-cat-head-text-wrap">
                        <h4 class="cb-mdl-hdr heading">Featured Matches</h4>
                    </div>
                </div>
                <div class="videos-list-carousal ng-isolate-scope" id="hm-scag-mtch-blk" total ="6" minlength ="4" >
                    <ul class="cb-col cb-col-100 videos-carousal-wrapper">
                        <li class="cb-col cb-col-25 cb-mtch-blk cb-vid-sml-card-api videos-carousal-item cb-carousal-item-large cb-view-all-ga">
                            <a title="England Women v India Women - 2nd T20I" class="cb-font-12">
                                <div class="cb-pos-rel">
                                    <div>
                                        <div class="cb-hmscg-bat-txt cb-ovr-flo ">
                                            <div class="cb-ovr-flo cb-hmscg-tm-nm">ENGW</div>
                                            <div class="cb-ovr-flo cb-score" >70-5 (10.5)</div>
                                        </div>
                                        <div class="cb-hmscg-bwl-txt ">
                                            <div class="cb-ovr-flo cb-hmscg-tm-nm">INDW</div>
                                            <div class="cb-ovr-flo cb-score"></div>
                                        </div>
                                        <div class=" cb-ovr-flo cb-text-live">England Women opt to bat</div>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>

                    <div class="cb-vid-slider-arrs">
                        <div class="cb-vid-slider-arr cb-vid-slider-arr-prev"><img src={img1} alt="Previous"/></div>
                        <div class="cb-vid-slider-arr cb-vid-slider-arr-next cb-view-all-ga" gtm-title="View All" gtm-video-label="undefined">
                            <img class="cb-view-all-ga" gtm-title="View All" gtm-video-label="undefined" src={img2} alt ="Next"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured_matches
