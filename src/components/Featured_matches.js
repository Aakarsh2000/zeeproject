import React from 'react'
import img1 from '../images/view_prev.png'
import img2 from '../images/view_next.png'

function Featured_matches() {
  return (
    <div class="cb-col cb-col-100">
        <div id="match_menu_container" class="cb-col cb-col-100 html-refresh ng-isolate-scope" timeout="45000">
            <div class="cb-col cb-col-100 cb-hm-rt-itm cb-bg-white ng-scope">
                <div class="cb-cat-head-wrap cb-col cb-col-100 cb-float-none mrgn-btm-15">
                    <div class="cb-cat-head-text-wrap">
                        <h4 class="cb-mdl-hdr heading">Featured Matches</h4>
                    </div>
                </div>
                <div class = "featured_matches">
                    <ul class="cb-col cb-col-100">
                        <li class="cb-col cb-col-25 cb-mtch-blk cb-vid-sml-card-api cb-carousal-item-large">
                        <a title="England Women v India Women - 2nd T20I" class="none cb-font-12">
                                <div class="cb-pos-rel">
                                    <div>
                                        <div class="cb-hmscg-bat-txt cb-ovr-flo mrgn-btm-5">
                                            <div class="cb-ovr-flo cb-hmscg-tm-nm">ENGW</div>
                                            <div class="cb-ovr-flo cb-score" >70-5 (10.5)</div>
                                        </div>
                                        <div class="cb-hmscg-bwl-txt mrgn-btm-5">
                                            <div class="cb-ovr-flo cb-hmscg-tm-nm">INDW</div>
                                            <div class="cb-ovr-flo cb-score"></div>
                                        </div>
                                        <div class=" cb-ovr-flo cb-text-live">England Women opt to bat</div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="cb-col cb-col-25 cb-mtch-blk cb-vid-sml-card-api cb-carousal-item-large">
                        <a title="Jamaica Tallawahs v St Kitts and Nevis Patriots - 17th Match" class="none cb-font-12">
                                <div class="cb-pos-rel">
                                    <div>
                                        <div class="cb-hmscg-bat-txt cb-ovr-flo mrgn-btm-5">
                                            <div class="cb-ovr-flo cb-hmscg-tm-nm">JT</div>
                                            <div class="cb-ovr-flo cb-score" >49-1 (5.4)</div>
                                        </div>
                                        <div class="cb-hmscg-bwl-txt mrgn-btm-5">
                                            <div class="cb-ovr-flo cb-hmscg-tm-nm">SNP</div>
                                            <div class="cb-ovr-flo cb-score"></div>
                                        </div>
                                        <div class=" cb-ovr-flo cb-text-live">St Kitts and Nevis Patriots opt to bowl</div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="cb-col cb-col-25 cb-mtch-blk cb-vid-sml-card-api cb-carousal-item-large">
                        <a title="Yorkshire v Essex - County Div 1" class="none cb-font-12">
                                <div class="cb-pos-rel">
                                    <div>
                                        <div class="cb-hmscg-bat-txt cb-ovr-flo mrgn-btm-5">
                                            <div class="cb-ovr-flo cb-hmscg-tm-nm">Yorkshire</div>
                                            <div class="cb-ovr-flo cb-score" >134 & 252</div>
                                        </div>
                                        <div class="cb-hmscg-bwl-txt mrgn-btm-5">
                                            <div class="cb-ovr-flo cb-hmscg-tm-nm">Essex</div>
                                            <div class="cb-ovr-flo cb-score">225 & 29-1</div>
                                        </div>
                                        <div class="cb-ovr-flo cb-text-live">Day 3: 2nd Session - Essex need 133 runs</div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="cb-col cb-col-25 cb-mtch-blk cb-vid-sml-card-api cb-carousal-item-large">
                        <a title="India Legends v West Indies Legends - 6th Match" class="none cb-font-12">
                                <div class="cb-pos-rel">
                                    <div>
                                        <div class="cb-hmscg-bat-txt cb-ovr-flo mrgn-btm-5">
                                            <div class="cb-ovr-flo cb-hmscg-tm-nm">India Legends</div>
                                        </div>
                                        <div class="cb-hmscg-bwl-txt mrgn-btm-5">
                                            <div class="cb-ovr-flo cb-hmscg-tm-nm">West Indies Legends</div>
                                            <div class="cb-ovr-flo cb-score"></div>
                                        </div>
                                        <div class="cb-ovr-flo cb-text-abandon">Match abandoned due to wet outfield without a ball bowled</div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        
                    </ul>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured_matches
