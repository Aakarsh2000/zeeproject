import React from 'react'

function Header2() {
  return (
    <div class="cb-col cb-col-100 mrgn-btm-5 background-black">
        <nav class ="cb-mat-mnu " ng-init="direction='up'">
            <a class="none cb-float-left cb-mat-mnu-itm cb-ovr-flo cb-mat-mnu-ttl" >MATCHES</a>
            <a class="none cb-float-left cb-mat-mnu-itm cb-ovr-flo" title="Jamaica Tallawahs v St Kitts and Nevis Patriots, 17th Match - Preview" >JT vs SNP - Preview</a>
            <a class="none cb-float-left cb-mat-mnu-itm cb-ovr-flo" title="India Legends v West Indies Legends, 6th Match - Preview">INDL vs WIL - Preview</a>
            <a class="none cb-float-left cb-mat-mnu-itm cb-ovr-flo" title="Yorkshire v Essex, County Div 1 - Lunch">YORKS vs ESS - Lunch</a>
            <a class="none cb-float-left cb-mat-mnu-itm cb-ovr-flo" title="South Zone v North Zone, 2nd Semi-Final - Preview">SZONE vs NZONE - Preview</a>
            <a class="none cb-float-left cb-mat-mnu-itm cb-ovr-flo" title="Trinbago Knight Riders v Barbados Royals, 16th Match - BR Won">TKR vs BR - BR Won</a>
            <span>
                <a class="none cb-mat-mnu-itm cb-mat-mnu-all" >
                <span ng-bind="(direction=='up') ? 'ALL': 'CLOSE'" class="ng-binding">ALL</span>
                <span ng-class="(direction=='up') ? 'cb-caret-down' : 'cb-caret-up'" class="cb-caret-down"></span>
                </a>
            </span>
        </nav>
    </div>
  )
}

export default Header2
