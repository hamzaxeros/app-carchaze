/**
 * HostTripDates
 * @module 🔗:src/pages/Host/Manager/Basic/HostTripDates/HostTripDates.jsx
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Host trip dates
 * 
 */

import React from "react";
import List from "../../../../../components/public/resources/List/List";

const HostTripDates = (props) => {


  return (
    <React.Fragment>
      <div className="HostTripDates-outer">
        <div className="HostTripDates-content">
            <List ArrowDown={true} leftText={"Start"} rightTextStyle={{"opacity":'1',"fontSize":'medium'}} style={{"borderBottom":'none'}} rightText={"Thu, Jan 28, 10:00 AM"} />        
            <List ArrowDown={true} leftText={"End"} rightTextStyle={{"opacity":'1',"fontSize":'medium'}} rightText={"Select"} />
        </div>
        <div className="HostTripDates-footer">
            <p>Osman is available from 7:00 AM till 8:00 PM on Thursday</p>
        </div>


      </div>
    </React.Fragment>
  )
}

export default HostTripDates;