import React from 'react'

function Schedule() {
  return (
    <div className='text_left'>
        <h2 class="cb-hm-lft-hdr cb-lv-scr-mtch-hdr heading" >SCHEDULE</h2>

        <div class="cb-col-100 cb-lst-itm cb-lst-itm-sm">
            <div>Cook Islands vs Fiji, 10th Match</div>
            <div class="cb-nws-time">
                <span class="schedule-date ng-isolate-scope" timestamp="1663122600000" venue="+11:00" format="EEE MMM dd">
                    Wed Sep 14
                </span>
                &nbsp;•&nbsp;
                <span class="schedule-date ng-isolate-scope" timestamp="1663122600000" venue="+11:00" format="h:mm a">8:00 AM</span>&nbsp;GMT
            </div>
            <div class="cb-col-100 cb-lst-itm cb-lst-itm-sm">
                <div>Vanuatu vs Samoa, 9th Match</div>
                <div class="cb-nws-time">
                    <span class="schedule-date ng-isolate-scope" timestamp="1663108200000" venue="+11:00" format="EEE MMM dd">
                        Wed Sep 14
                    </span>&nbsp;•&nbsp;
                    <span class="schedule-date ng-isolate-scope" timestamp="1663108200000" venue="+11:00" format="h:mm a">
                        4:00 AM (Sep 14)
                    </span>&nbsp;GMT
                </div> 
            </div>
            <div class="cb-col-100 cb-lst-itm cb-lst-itm-sm"> <div>Samoa vs Fiji, 11th Match</div> <div class="cb-nws-time"><span class="schedule-date ng-isolate-scope" timestamp="1663194600000" venue="+11:00" format="EEE MMM dd">Thu Sep 15</span>&nbsp;•&nbsp;<span class="schedule-date ng-isolate-scope" timestamp="1663194600000" venue="+11:00" format="h:mm a">4:00 AM (Sep 15)</span>&nbsp;GMT</div> </div>
            <div class="cb-col-100 cb-lst-itm cb-lst-itm-sm"> <div>Vanuatu vs Cook Islands, 12th Match</div> <div class="cb-nws-time"><span class="schedule-date ng-isolate-scope" timestamp="1663209000000" venue="+11:00" format="EEE MMM dd">Thu Sep 15</span>&nbsp;•&nbsp;<span class="schedule-date ng-isolate-scope" timestamp="1663209000000" venue="+11:00" format="h:mm a">8:00 AM</span>&nbsp;GMT</div> </div>

            <div class="cb-hm-mr-lnk">
                <a class="none_blue cb-font-12 cb-text-link" title="Cricket Schedule">
                    <i>More Matches..</i>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Schedule
