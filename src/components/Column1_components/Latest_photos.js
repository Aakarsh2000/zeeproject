import React from 'react'
import img1 from '../../images/sri-lanka-vs-pakistan-final.jpg'
import img2 from '../../images/india-vs-afghanistan-super-4.jpg'
import img3 from '../../images/pakistan-vs-afghanistan-super.jpg'
import img4 from '../../images/india-vs-sri-lanka-super-4-m.jpg'
function Latest_photos() {
  return (
    <div className='text_left'>
        <h2 class="cb-hm-lft-hdr cb-lv-scr-mtch-hdr heading" >LATEST PHOTOS</h2>
        <div class="cb-hm-lft">
            <div class="cb-col-100 cb-lst-itm cb-lst-itm-sm">
                <a title="Sri Lanka vs Pakistan, Final, Asia Cup 2022"> <img width="165" height="95" class="lazy-loading pad-0 ng-isolate-scope" alt="Sri Lanka vs Pakistan, Final, Asia Cup 2022" src={img1}/>
                    <div class="cb-nws-hdln">Sri Lanka vs Pakistan, Final, Asia Cup 2022</div>
                    <span class="cb-nws-time">Sun, Sep 11 2022</span> 
                </a>
            </div>
            <div class="cb-col-100 cb-lst-itm cb-lst-itm-sm"> 
                <a title="India vs Afghanistan, Super 4, Match 5, Asia Cup 2022"> <img width="165" height="95" class="pad-0 ng-isolate-scope" alt="India vs Afghanistan, Super 4, Match 5, Asia Cup 2022" src={img2}/>
                    <div class="cb-nws-hdln">India vs Afghanistan, Super 4, Match 5, Asia Cup 2022</div>
                    <span class="cb-nws-time">Thu, Sep 08 2022</span> 
                </a> 
            </div>
            <div class="cb-col-100 cb-lst-itm cb-lst-itm-sm"> 
                <a title="Pakistan vs Afghanistan, Super 4, Match 4, Asia Cup 2022"> <img width="165" height="95" class="lazy-loading pad-0 ng-isolate-scope" alt="Pakistan vs Afghanistan, Super 4, Match 4, Asia Cup 2022" src={img3}/>
                    <div class="cb-nws-hdln">Pakistan vs Afghanistan, Super 4, Match 4, Asia Cup 2022</div>
                    <span class="cb-nws-time">Wed, Sep 07 2022</span>
                </a>
            </div>

            <div class="cb-col-100 cb-lst-itm cb-lst-itm-sm">
                <a title="India vs Sri Lanka, Super 4, Match 3, Asia Cup 2022"> <img width="165" height="95" class="lazy-loading pad-0 ng-isolate-scope" alt="India vs Sri Lanka, Super 4, Match 3, Asia Cup 2022" src={img4}/ >
                    <div class="cb-nws-hdln">India vs Sri Lanka, Super 4, Match 3, Asia Cup 2022</div>
                    <span class="cb-nws-time">Tue, Sep 06 2022</span>
                </a>
            </div>

            <a class="cb-font-12 cb-text-link" title="More Photos"><i>More Photos..</i></a>
        </div>
    </div>
  )
}

export default Latest_photos
